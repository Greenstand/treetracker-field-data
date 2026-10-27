require('dotenv').config();
const request = require('supertest');
const server = require('../server/app');
const { expect } = require('chai');
const sinon = require('sinon');
const { v4: uuid } = require('uuid');
const { knex, knexLegacyDB } = require('../server/infra/database/knex');
const {
  insertTestCapture,
  capture,
  captureRequestObject,
  captureWithExistingTree,
} = require('./insert-test-capture');
const { clearDB } = require('./clear-db');
const LegacyAPI = require('../server/services/LegacyAPIService');

let reference_id;

const approvedCapture = {
  ...captureRequestObject,
  id: uuid(),
};

describe('Raw Captures', () => {
  before(async () => {
    await clearDB(knex, knexLegacyDB);
    await insertTestCapture(knex, knexLegacyDB);
    await knex('raw_capture').insert({
      ...approvedCapture,
      extra_attributes: { entries: approvedCapture.extra_attributes },
      reference_id: 64864,
      status: 'approved',
      created_at: new Date(),
      updated_at: new Date(),
    });
  });

  it(`Raw capture should be successfully added`, function (done) {
    request(server)
      .post(`/raw-captures`)
      .send(captureRequestObject)
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        reference_id = res.body.reference_id;
        expect(res.body.id).to.eql(captureRequestObject.id);
        if (err) return done(err);
        return done();
      });
  });

  it(`Should handle duplicates`, function (done) {
    request(server)
      .post(`/raw-captures`)
      .send(captureRequestObject)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body.id).to.eql(captureRequestObject.id);
        if (err) return done(err);
        return done();
      });
  });

  it(`Should handle an existing raw capture`, function (done) {
    request(server)
      .post(`/raw-captures`)
      .send({ ...approvedCapture })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body.id).to.eql(approvedCapture.id);
        if (err) return done(err);
        return done();
      });
  });

  it(`Should handle new captures with existing tree in the legacy database`, function (done) {
    request(server)
      .post(`/raw-captures`)
      .send(captureWithExistingTree)
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        expect(res.body.id).to.eql(captureWithExistingTree.id);
        if (err) return done(err);
        return done();
      });
  });

  it('should accept a repeated post for a capture that already exists', async () => {
    const res = await request(server)
      .post(`/raw-captures`)
      .send({ ...captureRequestObject, id: capture.id })
      .set('Accept', 'application/json')
      .expect(200);
    expect(res.body.id).to.eql(capture.id);
  });

  it('Added raw capture should be persisted', async function () {
    const res = await request(server).get(`/raw-captures`).expect(200);

    expect(
      res.body.raw_captures.some(
        (raw_capture) => raw_capture.id === captureRequestObject.id,
      ),
    ).to.equal(true);
  });

  it('should get a single raw capture', async function () {
    const res = await request(server)
      .get(`/raw-captures/${captureRequestObject.id}`)
      .expect(200);

    expect(res.body.id).to.eql(captureRequestObject.id);
  });

  describe('should reject a raw capture', async () => {
    let legacyAPIRejectTreeStub;

    beforeEach(async () => {
      legacyAPIRejectTreeStub = sinon
        .stub(LegacyAPI, 'rejectLegacyTree')
        .resolves();

    });

    afterEach(() => {
      legacyAPIRejectTreeStub.restore();
    });

    it('should reject an unprocessed raw capture', async () => {
      const rejection_reason = 'invalid photograph';

      const res = await request(server)
        .patch(`/raw-captures/${captureRequestObject.id}/reject`)
        .send({ rejection_reason, organization_id: 12 })
        .set('Authorization', 'jwt_token');

      expect(
        legacyAPIRejectTreeStub.calledOnceWithExactly({
          id: +reference_id,
          legacyAPIAuthorizationHeader: 'jwt_token',
          organizationId: 12,
          rejectionReason: rejection_reason,
        }),
      ).eql(true);

      expect(res.body.status).to.eql('rejected');
      expect(res.body.rejection_reason).to.eql(rejection_reason);

    });
  });
});
