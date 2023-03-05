// TREETRACKER SEED API
const growerAccounts = [
  {
    id: 'afc83ae4-8ad2-4738-9d84-c2200bb98ebb',
    wallet: 'mobile1@test',
    person_id: null,
    organization_id: 'a8567323-88b1-4870-8c48-68d2da3ab356',
    first_name: 'whelsdon0',
    email: null,
    phone: null,
    lat: 8.416896673444976,
    lon: -13.207116069320122,
    image_url: 'http://dummyimage.com/238x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/17/2022',
  },
  {
    id: 'ae862177-7c58-4ab4-8c07-e914250f8ce1',
    wallet: 'mobile2@test',
    person_id: null,
    organization_id: 'a8567323-88b1-4870-8c48-68d2da3ab356',
    first_name: 'ckentish1',
    email: null,
    phone: null,
    lat: 8.493621061304605,
    lon: -13.274604415339939,
    image_url: 'http://dummyimage.com/248x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/13/2022',
    updated_at: '1/20/2022',
  },
  {
    id: 'cc6f2fe8-9aee-4b03-ace6-21006f028e60',
    wallet: 'handle1@test',
    person_id: null,
    organization_id: 'ed327076-8179-41d4-9f31-215024b822e7',
    first_name: 'alinkleter2',
    email: null,
    phone: null,
    lat: 8.474383616604095,
    lon: -13.283499768510845,
    image_url: 'http://dummyimage.com/184x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/11/2022',
    updated_at: '1/19/2022',
  },
  {
    id: 'f6f5d91e-f387-4c5e-9bc9-ced9d9c7cb4a',
    wallet: 'handle2@test',
    person_id: null,
    organization_id: 'eff5e047-fb99-4674-81a3-b43d0baa8a8e',
    first_name: 'sjanaszkiewicz3',
    email: null,
    phone: null,
    lat: 8.570113915911268,
    lon: -13.040375679579535,
    image_url: 'http://dummyimage.com/102x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/19/2022',
  },
  {
    id: 'c54bdf67-7d12-4db8-9283-ee1b971dde93',
    wallet: 'handle3@test',
    person_id: null,
    organization_id: 'ce14d9b7-92c3-450b-9779-2bb731c5aefc',
    first_name: 'vayliff4',
    email: null,
    phone: null,
    lat: 8.487670775451818,
    lon: -13.235894415339938,
    image_url: 'http://dummyimage.com/153x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/10/2022',
    updated_at: '1/20/2022',
  },
  {
    id: '5ae1f850-199a-4801-a39c-4dd4770c81e8',

    wallet: 'handle4@test',
    person_id: null,
    organization_id: '50850238-ef16-4ef4-a51d-07c86cd553b6',
    first_name: 'cmaw5',
    email: null,
    phone: null,
    lat: 8.481704905296343,
    lon: -13.246914166701638,
    image_url: 'http://dummyimage.com/172x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/11/2022',
    updated_at: '1/19/2022',
  },
  {
    id: '6e9b7efd-12bf-494f-83ea-55d9053a8940',

    wallet: 'wallet7@test',
    person_id: null,
    organization_id: 'c7284720-f232-4c42-a977-d50bea58ca4a',
    first_name: 'ftatnell6',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/249x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/4/2022',
    updated_at: '1/25/2022',
  },
  {
    id: '0526bf4b-4d4c-431a-9314-30b2692ea41f',

    wallet: 'wallet8@test',
    person_id: null,
    organization_id: '2a34fa81-0683-4d25-94b9-24843ceec3c4',
    first_name: 'dmcgonigle7',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/248x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/3/2022',
    updated_at: '1/15/2022',
  },
  {
    id: 'd25dbe35-947c-464c-9098-caa19c71d023',

    wallet: 'wallet9@test',
    person_id: null,
    organization_id: '2a34fa81-0683-4d25-94b9-24843ceec3c4',
    first_name: 'grosina8',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/234x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/24/2022',
  },
  {
    id: 'c82cc807-8e35-418b-88ce-fda398cf4e89',

    wallet: 'wallet10@test',
    person_id: null,
    organization_id: 'ed327076-8179-41d4-9f31-215024b822e7',
    first_name: 'kleighton9',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/111x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/26/2022',
  },
  {
    id: 'd2ac8a4d-6249-454c-b982-bf27990a19e0',

    wallet: 'wallet11@test',
    person_id: null,
    organization_id: 'ce14d9b7-92c3-450b-9779-2bb731c5aefc',
    first_name: 'imcgrorya',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/104x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/13/2022',
    updated_at: '1/15/2022',
  },
  {
    id: 'ff16d366-c78f-4719-a8ff-154a908bd3df',

    wallet: 'wallet12',
    person_id: null,
    organization_id: 'ce2ec321-41da-4d3c-8c25-a4211a5388ff',
    first_name: 'fstubbingsb',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/212x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/4/2022',
    updated_at: '1/25/2022',
  },
  {
    id: '3f31f63f-5869-44fc-b314-4d8fae5b36c4',

    wallet: 'wallet13',
    person_id: null,
    organization_id: '60c91ad0-f3e0-49c1-8019-dd3cebb52933',
    first_name: 'fvasilkovc',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/213x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/16/2022',
  },
  {
    id: '6f72c416-8609-4d85-ae22-bb888428a272',

    wallet: 'wallet14',
    person_id: null,
    organization_id: 'f6d19e49-2d1a-4c1a-90d1-8f651bdaeaa5',
    first_name: 'sbalaamd',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/216x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/1/2022',
    updated_at: '1/15/2022',
  },
  {
    id: '02ca5d88-bdf9-41a8-a3ec-1c3b02820f64',

    wallet: 'wallet15',
    person_id: null,
    organization_id: '40711d01-d4ee-4b60-99f9-6b5ad11d5e52',
    first_name: 'bhorninge',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/156x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/1/2022',
    updated_at: '1/23/2022',
  },
  {
    id: 'fd1d3571-8172-4d48-99cb-cf36593276da',

    wallet: 'wallet16',
    person_id: null,
    organization_id: 'f6d19e49-2d1a-4c1a-90d1-8f651bdaeaa5',
    first_name: 'cwilderf',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/158x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/26/2022',
  },
  {
    id: '810184f8-cc38-47f7-adcc-e700b4093139',

    wallet: 'wallet17',
    person_id: null,
    organization_id: 'c7284720-f232-4c42-a977-d50bea58ca4a',
    first_name: 'alotteg',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/148x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/15/2022',
  },
  {
    id: '96f5b395-e235-4aab-a6b1-f4f5a03ddb0b',

    wallet: 'wallet18',
    person_id: null,
    organization_id: '7668a5fc-fa11-41d3-8f6b-4cd2742eefe0',
    first_name: 'dcussonsh',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/219x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/1/2022',
    updated_at: '1/18/2022',
  },
  {
    id: '53c2d3d5-8378-4a7f-9935-962c865f9985',

    wallet: 'wallet19',
    person_id: null,
    organization_id: '40711d01-d4ee-4b60-99f9-6b5ad11d5e52',
    first_name: 'tnasseyi',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/202x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/13/2022',
    updated_at: '1/20/2022',
  },
  {
    id: '332a2560-8355-4592-a0f2-74c2ea928cab',

    wallet: 'wallet20',
    person_id: null,
    organization_id: 'd9db39a0-28d0-47a8-ab01-88526365ff80',
    first_name: 'bgarcij',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/228x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/23/2022',
  },
  {
    id: 'd3480998-5859-485b-a413-514d4adda4bc',

    wallet: 'wallet21',
    person_id: null,
    organization_id: '60c91ad0-f3e0-49c1-8019-dd3cebb52933',
    first_name: 'gtrebblek',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/14/2022',
    updated_at: '1/22/2022',
  },
  {
    id: 'b0c47075-cf06-4675-a6f5-a00501418a69',

    wallet: 'wallet22',
    person_id: null,
    organization_id: '8b2628b3-733b-4962-943d-95ebea918c9d',
    first_name: 'acarnegiel',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/184x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/2/2022',
    updated_at: '1/16/2022',
  },
  {
    id: '060ed2da-c318-4293-8ace-6f6a0e95c923',

    wallet: 'wallet',
    person_id: null,
    organization_id: '22b7e221-0929-420b-a399-f0f0a0368be2',
    first_name: 'pclosem',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/243x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/4/2022',
    updated_at: '1/17/2022',
  },
  {
    id: 'd61747fe-d99d-4a76-9044-fa684bcd0183',

    wallet: 'wallet23',
    person_id: null,
    organization_id: 'ce14d9b7-92c3-450b-9779-2bb731c5aefc',
    first_name: 'afreebernen',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/12/2022',
    updated_at: '1/16/2022',
  },
  {
    id: 'daff9ae1-f436-45f8-b6a2-1c88bc918420',

    wallet: 'wallet24',
    person_id: null,
    organization_id: 'ce2ec321-41da-4d3c-8c25-a4211a5388ff',
    first_name: 'kdipietroo',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/152x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/17/2022',
  },
  {
    id: '61f355d1-d040-4a28-a68f-465bb6870bb6',

    wallet: 'wallet25',
    person_id: null,
    organization_id: '8b353fbe-0ad7-46a6-ad43-27e304a95757',
    first_name: 'roxherdp',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/235x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/26/2022',
  },
  {
    id: 'b913a65a-9988-4d97-b569-90266e32a8af',

    wallet: 'wallet26',
    person_id: null,
    organization_id: 'be80bb66-beb9-45a1-baa3-1a2933afdb40',
    first_name: 'cdumkeq',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/184x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/13/2022',
    updated_at: '1/16/2022',
  },
  {
    id: '2896ffa7-3ab8-4284-afb0-d679e04bfa48',

    wallet: 'wallet27',
    person_id: null,
    organization_id: '8b2628b3-733b-4962-943d-95ebea918c9d',
    first_name: 'mmckillopr',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/192x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/10/2022',
    updated_at: '1/23/2022',
  },
  {
    id: '5ecfcbf1-3b46-436b-99d5-0f6599f77b56',

    wallet: 'wallet28',
    person_id: null,
    organization_id: '2b601c87-539f-4fa8-831c-92200fa3aab2',
    first_name: 'tsherwyns',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/213x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/12/2022',
    updated_at: '1/23/2022',
  },
  {
    id: '03e78645-09c1-4856-b786-32ed922cc598',

    wallet: 'wallet29',
    person_id: null,
    organization_id: '8b2628b3-733b-4962-943d-95ebea918c9d',
    first_name: 'fbullont',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/222x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/6/2022',
    updated_at: '1/24/2022',
  },
  {
    id: 'a4d89fba-03a0-4981-bc11-b3384d98be1e',

    wallet: 'wallet30',
    person_id: null,
    organization_id: '646d5455-e0d6-4ecf-ade6-2384f2f59dca',
    first_name: 'emanesu',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/150x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/20/2022',
  },
  {
    id: '2fd1f0c0-d97f-45ec-82ec-c423c6a73195',

    wallet: 'wallet31',
    person_id: null,
    organization_id: '8b353fbe-0ad7-46a6-ad43-27e304a95757',
    first_name: 'fvickerv',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/237x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/3/2022',
    updated_at: '1/25/2022',
  },
  {
    id: 'b281adeb-f088-43ee-9dc6-a962a3221b91',

    wallet: 'wallet32',
    person_id: null,
    organization_id: '8b353fbe-0ad7-46a6-ad43-27e304a95757',
    first_name: 'tdeardsw',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/138x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/4/2022',
    updated_at: '1/25/2022',
  },
  {
    id: '9b35df79-dc6f-40b5-8563-862fdbee9d16',

    wallet: 'wallet33',
    person_id: null,
    organization_id: 'be80bb66-beb9-45a1-baa3-1a2933afdb40',
    first_name: 'fsustonx',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/227x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
  {
    id: '504c6db3-338f-4546-ba75-9af2b85f3da4',

    wallet: 'wallet34',
    person_id: null,
    organization_id: '4b5cca56-c17c-45c8-bb50-19a06b2af4a5',
    first_name: 'eclaigey',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/218x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/26/2022',
  },
  {
    id: '07cd2310-e522-4434-8560-c88326213c08',

    wallet: 'wallet35',
    person_id: null,
    organization_id: 'be80bb66-beb9-45a1-baa3-1a2933afdb40',
    first_name: 'jtonnerz',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/244x100.png/dddddd/000000',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/14/2022',
    updated_at: '1/26/2022',
  },
  {
    id: '6f2ee805-d7d9-4803-8472-c3b114bdfc14',

    wallet: 'wallet36',
    person_id: null,
    organization_id: '7668a5fc-fa11-41d3-8f6b-4cd2742eefe0',
    first_name: 'rseilmann10',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/153x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/1/2022',
    updated_at: '1/24/2022',
  },
  {
    id: 'dbab472e-4b98-4cad-b7e8-a79225a5d262',

    wallet: 'wallet37',
    person_id: null,
    organization_id: '2a34fa81-0683-4d25-94b9-24843ceec3c4',
    first_name: 'sshippey11',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/197x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/4/2022',
    updated_at: '1/16/2022',
  },
  {
    id: 'a407b006-76b7-4d2a-b30e-4be39eda8015',

    wallet: 'wallet38',
    person_id: null,
    organization_id: '8b2628b3-733b-4962-943d-95ebea918c9d',
    first_name: 'abresnen12',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/201x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/22/2022',
  },
  {
    id: '5c0a8df5-b07a-4da1-a7cb-18667a761d33',

    wallet: 'wallet39',
    person_id: null,
    organization_id: 'f68d3eb0-a1ac-48d6-bbb2-efa4068fa083',
    first_name: 'citzchaki13',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/191x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/13/2022',
    updated_at: '1/22/2022',
  },
  {
    id: 'cb8d6372-9f66-40e4-813e-e109b698e5d9',

    wallet: 'wallet40',
    person_id: null,
    organization_id: '7668a5fc-fa11-41d3-8f6b-4cd2742eefe0',
    first_name: 'gslaght14',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/234x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/14/2022',
    updated_at: '1/24/2022',
  },
  {
    id: 'eb55a2ba-bda0-4c27-8638-2240d069de16',

    wallet: 'wallet41',
    person_id: null,
    organization_id: '8b353fbe-0ad7-46a6-ad43-27e304a95757',
    first_name: 'jlothlorien15',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/143x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/12/2022',
    updated_at: '1/25/2022',
  },
  {
    id: 'a62cf2d5-77ea-455d-8bfe-00f485dcfadb',

    wallet: 'wallet42',
    person_id: null,
    organization_id: 'be80bb66-beb9-45a1-baa3-1a2933afdb40',
    first_name: 'bmatei16',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/144x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/5/2022',
    updated_at: '1/22/2022',
  },
  {
    id: '24f73cd8-b95f-4aec-a48b-a7f287c9869a',

    wallet: 'wallet43',
    person_id: null,
    organization_id: '22b7e221-0929-420b-a399-f0f0a0368be2',
    first_name: 'kcalder17',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/168x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/2/2022',
    updated_at: '1/18/2022',
  },
  {
    id: '6503a226-3173-4425-9415-bbc3c5b7d14e',

    wallet: 'wallet44',
    person_id: null,
    organization_id: '7668a5fc-fa11-41d3-8f6b-4cd2742eefe0',
    first_name: 'cbrambill18',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/145x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/13/2022',
    updated_at: '1/16/2022',
  },
  {
    id: '3e23c268-dbc8-44c0-bf45-08678d9028c3',

    wallet: 'wallet45',
    person_id: null,
    organization_id: '8b353fbe-0ad7-46a6-ad43-27e304a95757',
    first_name: 'mmatzel19',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/192x100.png/cc0000/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
  {
    id: '2aa24a43-7f83-45f0-92bd-013f32b14efd',

    wallet: 'wallet46',
    person_id: null,
    organization_id: 'b972cb35-17ba-4c0a-8a63-7487f70d2a26',
    first_name: 'nhemphall1a',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/224x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/6/2022',
    updated_at: '1/23/2022',
  },
  {
    id: '9d68e2d8-c27f-45b3-b26a-80e43184f8ff',

    wallet: 'wallet47',
    person_id: null,
    organization_id: '40711d01-d4ee-4b60-99f9-6b5ad11d5e52',
    first_name: 'pjunkinson1b',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/150x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/7/2022',
    updated_at: '1/17/2022',
  },
  {
    id: '1cd4c7b6-55aa-4605-a9f1-f6a0950e7748',

    wallet: 'wallet48',
    person_id: null,
    organization_id: 'ce14d9b7-92c3-450b-9779-2bb731c5aefc',
    first_name: 'tjankiewicz1c',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/185x100.png/ff4444/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/1/2022',
    updated_at: '1/15/2022',
  },
  {
    id: '2d0194aa-ac19-4d35-9e0a-c2b982ca052a',
    wallet: 'wallet49',
    person_id: null,
    organization_id: 'f6d19e49-2d1a-4c1a-90d1-8f651bdaeaa5',
    first_name: 'srand1d',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
  {
    id: 'd86b3242-0bd8-4515-b452-e7e3f3af93c2',
    wallet: 'walletPayToGrow',
    person_id: null,
    organization_id: 'e25de784-d8aa-469a-a6b0-702da5a2a980',
    first_name: 'srand1d',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
  {
    id: 'ef533151-5bdb-4cee-bd02-49e0986ea432',
    wallet: 'walletPayToGrow2',
    person_id: null,
    organization_id: 'e25de784-d8aa-469a-a6b0-702da5a2a980',
    first_name: 'srand1d',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
  {
    id: '4996d96c-2d2a-44ef-897a-66bbb1c1530c',
    wallet: 'walletPayToGrow3',
    person_id: null,
    organization_id: 'e25de784-d8aa-469a-a6b0-702da5a2a980',
    first_name: 'srand1d',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
  {
    id: '0637b1d3-c195-459d-bb49-57d0799d5507',
    wallet: 'walletPayToGrow4',
    person_id: null,
    organization_id: 'e25de784-d8aa-469a-a6b0-702da5a2a980',
    first_name: 'srand1d',
    email: null,
    phone: null,
    image_url: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff',
    image_rotation: 0,
    status: 'active',
    first_registration_at: '1/27/2022',
    created_at: '1/8/2022',
    updated_at: '1/24/2022',
  },
];

const walletRegistrationIds = [
  '3a59928d-18b1-4d05-b487-f04ba2b0b9a0',
  '9103c722-486e-428d-83a8-d840d14e8270',
  '165ae657-7733-4b97-8498-35a5cfdaa4f8',
  'de10466f-f7ff-410d-959f-e17cfd04441c',
  'bf2cf9af-6529-4952-9d13-07f0b0a785d6',
  'c00e1e9e-b304-4c14-b0e3-a1cdb540ec6e',
  'e0ae2495-5d84-493b-849f-66a9c203b147',
  '482e5083-7be8-4b02-a212-7feeca272800',
  'b6ea4e47-ae98-4087-a731-efdb24b92dd9',
  '534c1d58-7958-4e37-85f0-4d118ef9df93',
  'f9c4745c-d6d0-4676-8f14-c99120c7387c',
  'ba04fdfb-ad4e-48aa-b3f6-f165d415dbfe',
  '88ecee28-f5d9-4cc7-960d-b5739dc42dcf',
  '1c435a1e-7bc5-40c2-9713-2b3d9a64efce',
  'f24fbcdc-4cf4-4cf9-a607-df090043a0db',
  '50b42e90-a604-4aac-8d4d-e5b3a21f6356',
  '2bfdd8d5-6c1f-4d47-80ea-0fa804079bab',
  'c9df62d3-0b3f-4f98-b2a6-e5deb8ef537b',
  'aeaed164-37f0-4e43-92c4-45d76041dc82',
  '94f38747-19d4-4aa3-a1cc-36ec2fd7b2a7',
  'd0bc7389-bbb6-40bc-b478-4bddc29402d4',
  'e70f8974-8cdc-4c73-ba29-97743f4c9876',
  '910600bf-a50e-417b-a3ba-fbc86a1c0580',
  'fcb79784-c5c1-43f5-897b-4ca533d8972f',
  '6d8b4427-dd63-468a-8893-3a83656a7e04',
  '36b55342-9733-440b-acae-1467de0fcb84',
  '2b7802d7-9056-469e-a7a0-f7114acb67b3',
  '14359476-55c8-4c45-9f32-0e4dbb8e1732',
  'fc8598eb-3aee-4ccf-8979-adaa0685b51e',
  'd80df250-0fd1-4137-b1f4-6a75d86bfa1c',
  'd3d011de-f141-48ef-857d-299a64f7a57d',
  '1030a8c8-24b9-488f-9dbb-e3e61403008d',
  '0ae5ea4c-e2c8-4078-a021-861579ef2a41',
  '3407c905-7b96-496b-aa16-fdfba92534ea',
  'fd499990-76ca-438b-9122-bb0e2a7e21f3',
  '5a9ffbe4-7876-49fe-ada3-6a423cbee498',
  '6d411476-8a04-4eea-abed-362fe6775d58',
  'a075558f-55b3-4c69-bebf-3b192a706b1a',
  'd0283228-69ae-4752-b6d1-964ac74dfc2a',
  '8769cb54-d5d3-413f-8943-6c447118e87f',
  '8e65bf8a-3273-4643-9b22-f7c3c87704bd',
  'ab36bb33-363a-44c7-878e-1fed684e8e09',
  '1747f6d9-1eb5-4540-8c7f-31ca65c41f70',
  '6941c7c8-6376-462e-b994-cfd3a321e8dc',
  'ff148414-57c2-4eab-a2f2-ad9988db87e1',
  '513a3b81-97f6-4887-8465-168a1fb8bc83',
  '28f64919-745e-4d9f-8dfd-2ebdd6438fed',
  '4737883a-2576-4887-bffe-19fa4242a0ee',
  '5ac4cbfe-dab4-403e-ba03-2dde2d59eb67',
  'c7881b24-a9f1-4f10-8577-138bf39b2561',
  'd312e946-4e15-463b-adce-5eba15bc4837',
  '5f89f1f0-93ba-4039-9e16-4c7edcd76a59',
  'a1c5f13d-fe37-48f8-bf74-db68f071ceee',
  '405b14d3-a51f-4243-a775-3bd238daac19',
  'c74fe4e8-ef4b-4f40-856a-3eac5efb06f3',
  'b48743bb-8600-4e1c-8fb8-82469eb4e962',
  '2e02e09b-aae1-4558-bd27-0ee90bc53472',
  'dd80bee2-0bbd-424f-9a52-a5c91c93d7f5',
  '04a50e0a-ebcb-4bc3-abe3-1164fdc95487',
  '0c400b7f-2162-4089-98ff-de01198b5c1a',
  '27859c22-b18c-41ee-bde2-f3ebdb65814b',
  '7fef3a38-2a9d-409c-8698-9236cb7130da',
  '8f5e19c4-df65-4d8a-8c81-546913c105e8',
  '9d45ab52-27d6-414a-a4b8-e937dac0e1a0',
  'd5df6185-1323-43fa-a83b-ccefd02924e7',
  '046012ae-62cc-4091-b897-9a83b0a2c70e',
  '8672e716-10b7-402a-ac6a-02a71dd7258e',
  '4cea8566-cefc-4e35-969c-8216509485d3',
  'b5385cbd-7160-4df1-9488-bd731ed7ed1b',
  '61479d3d-41cd-4bff-b6cf-fd9fd20ce2ee',
  '4d1d87cf-05b0-4863-b2ad-0304bbbaec9f',
  'fe4eccfe-0b31-4c5d-a1d8-3dba5a73c13a',
  '7334ecc5-f3bd-42b4-91d5-f4af940f45c0',
  '8f301bca-d250-4711-b547-2036a034e6d1',
  'b9789ada-f3d1-4a7b-871d-f4b903a4b3af',
  'e2a92632-8241-4403-8650-96668e3c47f0',
  '005459ad-8c5f-4374-b578-59cf52469e9f',
  '3e280642-3470-4869-bde4-b6b341980986',
  '083fd346-1067-4de7-91d8-78394661de4c',
  '52de7a9c-f6d7-40a1-8d4a-044f52368fc9',
  '9a55f2f5-84af-4213-bfbe-ce17b123e900',
  'bb7b2bdf-6501-41c8-a178-87c04dd252b1',
  '78929da8-de88-420b-9808-ff0ea39d031d',
  'ae2d6ad4-f1dc-4a60-8227-49677d594dc9',
  '754c74ec-dbd2-44e7-98b9-2b469b751544',
  'f745755a-06ad-4fd7-91bc-ee5fb84ca244',
  'b210d2c2-40f3-4b7f-88a0-b8b67d2b449e',
  'cead7075-1f93-4f47-9b67-1148d292aae5',
  'f7b20cd2-ff15-402f-9fea-c176da52751f',
  'ef0bbac8-9b9f-46f0-9920-7dc5064ab4fb',
  'b1d4a066-7b02-4dd4-b1bc-33ded0b97387',
  '0878464d-d1e7-40fc-8251-f8fdad9df8d2',
  '1c171377-6355-4855-af91-1417ca3cbdb0',
  '422ffc49-c93d-4124-aba7-0cbff411dbf0',
  'f29155e1-99ed-45e1-a2e5-66c938c88b08',
  '330ccc2d-f220-4e95-bf22-4c6406de24e1',
  '7fdbdfb7-b706-4c19-9b5f-93fb23b6a971',
  'c3d40fe9-3063-4243-a83d-48c2b8c3b146',
  'e42dae3e-76d8-484b-991b-bc92ed5620b2',
  '9c0b9f77-4890-435b-aa14-4f2cbb163f91',
];

module.exports = {
  walletRegistrationIds,
  growerAccounts,
};