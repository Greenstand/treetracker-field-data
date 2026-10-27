const RawCaptureRepository = require('../repositories/RawCaptureRepository');

class RawCapture {
  constructor(session) {
    this._session = session;
    this._rawCaptureRepository = new RawCaptureRepository(session);
  }

  static RawCapture({
    id,
    reference_id,
    session_id,
    abs_step_count,
    delta_step_count,
    rotation_matrix,
    image_url,
    lat,
    lon,
    gps_accuracy,
    note,
    device_identifier,
    grower_account_id,
    wallet,
    user_photo_url,
    extra_attributes,
    status,
    rejection_reason,
    bulk_pack_file_name,
    created_at,
    updated_at,
    captured_at,
    organization_id,
  }) {
    return Object.freeze({
      id,
      reference_id,
      session_id,
      abs_step_count,
      delta_step_count,
      rotation_matrix,
      image_url,
      lat,
      lon,
      gps_accuracy,
      note,
      device_identifier,
      grower_account_id,
      wallet,
      user_photo_url,
      extra_attributes,
      status,
      rejection_reason,
      bulk_pack_file_name,
      created_at,
      updated_at,
      captured_at,
      organization_id,
    });
  }

  _response(rawCapture) {
    return this.constructor.RawCapture(rawCapture);
  }

  async getRawCaptures(filter, limitOptions) {
    const rawCaptures = await this._rawCaptureRepository.getByFilter(
      filter,
      limitOptions,
    );
    return rawCaptures.map((row) => this._response(row));
  }

  async getRawCapturesCount(filter) {
    return this._rawCaptureRepository.countByFilter(filter);
  }

  async getRawCaptureById(rawCaptureId) {
    const rawCaptures = await this.getRawCaptures({
      'raw_capture.id': rawCaptureId,
    });
    return rawCaptures[0];
  }

  async createRawCapture(rawCaptureObject) {
    const existingRawCapture = await this.getRawCaptureById(
      rawCaptureObject.id,
    );
    if (existingRawCapture?.id) {
      return { capture: existingRawCapture, status: 200 };
    }

    const rawCapture = await this._rawCaptureRepository.create({
      ...rawCaptureObject,
      status: 'unprocessed',
      // extra_attributes: { entries: newRawCapture.extra_attributes },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    return { capture: rawCapture, status: 201 };
  }

  async rejectRawCapture({ rawCaptureId, rejectionReason }) {
    const rawCapture = await this.getRawCaptureById(rawCaptureId);

    const updates = {
      id: rawCaptureId,
      rejection_reason: rejectionReason,
      status: 'rejected',
      updated_at: new Date().toISOString(),
    };

    await this._rawCaptureRepository.update({
      ...updates,
    });

    return { rawCapture: { ...rawCapture, ...updates } };
  }
}

module.exports = RawCapture;
