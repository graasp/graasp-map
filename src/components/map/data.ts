const tags = [
  { name: 'cafe' },
  { name: 'water' },
  { name: 'police' },
  { name: 'hospital' },
  { name: 'bureau' },
  { name: 'insurance' },
];

const markers = [
  {
    lat: 51,
    lng: 0,
    title: 'Title1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'cafe' }, { name: 'water' }],
    parent: 'Own',
  },
  {
    lat: 30,
    lng: 30,
    title: 'Title2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'hospital' }, { name: 'police' }],
    parent: 'Shared',
  },
  {
    lat: 40,
    lng: 6,
    title: 'Title3',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'food' }, { name: 'water' }],
    parent: 'Published',
  },
  {
    lat: 45,
    lng: 5,
    title: 'Title4',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'police' }, { name: 'bureau' }],
    parent: 'Own',
  },
  {
    lat: 34,
    lng: -0.5,
    title: 'Title5',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'cafe' }, { name: 'food' }],
    parent: 'Shared',
  },
  {
    lat: 43,
    lng: 1,
    title: 'Title6',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'hospital' }, { name: 'water' }],
    parent: 'Published',
  },
  {
    lat: 32,
    lng: 36,
    title: 'Title7',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'water' }, { name: 'hospital' }],
    parent: 'Own',
  },
  {
    lat: 37,
    lng: 2,
    title: 'Title8',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'police' }, { name: 'insurance' }],
    parent: 'Shared',
  },
  {
    lat: 50,
    lng: 5,
    title: 'Title9',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'food' }, { name: 'water' }],
    parent: 'Published',
  },
  {
    lat: 48,
    lng: 1,
    title: 'Title10',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'cafe' }, { name: 'insurance' }],
    parent: 'Own',
  },
  {
    lat: 44,
    lng: 0.3,
    title: 'Title11',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'police' }, { name: 'bureau' }],
    parent: 'Shared',
  },
  {
    lat: 44.8,
    lng: 0.7,
    title: 'Title12',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'hospital' }, { name: 'food' }],
    parent: 'Published',
  },
  {
    lat: 54,
    lng: 6,
    title: 'Title13',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dicta eaque, iste deserunt tenetur cumque neque perspiciatis non iure maiores!',
    tags: [{ name: 'bureau' }, { name: 'water' }],
    parent: 'Own',
  },
];

const countries = [
  {
    label: 'Albania',
    alpha2: 'AL',
    alpha3: 'ALB',
    numeric: 8,
    latitude: 41,
    longitude: 20,
  },
  {
    label: 'Algeria',
    alpha2: 'DZ',
    alpha3: 'DZA',
    numeric: 12,
    latitude: 28,
    longitude: 3,
  },
  {
    label: 'American Samoa',
    alpha2: 'AS',
    alpha3: 'ASM',
    numeric: 16,
    latitude: -14.3333,
    longitude: -170,
  },
  {
    label: 'Andorra',
    alpha2: 'AD',
    alpha3: 'AND',
    numeric: 20,
    latitude: 42.5,
    longitude: 1.6,
  },
  {
    label: 'Angola',
    alpha2: 'AO',
    alpha3: 'AGO',
    numeric: 24,
    latitude: -12.5,
    longitude: 18.5,
  },
  {
    label: 'Anguilla',
    alpha2: 'AI',
    alpha3: 'AIA',
    numeric: 660,
    latitude: 18.25,
    longitude: -63.1667,
  },
  {
    label: 'Antarctica',
    alpha2: 'AQ',
    alpha3: 'ATA',
    numeric: 10,
    latitude: -90,
    longitude: 0,
  },
  {
    label: 'Antigua and Barbuda',
    alpha2: 'AG',
    alpha3: 'ATG',
    numeric: 28,
    latitude: 17.05,
    longitude: -61.8,
  },
  {
    label: 'Argentina',
    alpha2: 'AR',
    alpha3: 'ARG',
    numeric: 32,
    latitude: -34,
    longitude: -64,
  },
  {
    label: 'Armenia',
    alpha2: 'AM',
    alpha3: 'ARM',
    numeric: 51,
    latitude: 40,
    longitude: 45,
  },
  {
    label: 'Aruba',
    alpha2: 'AW',
    alpha3: 'ABW',
    numeric: 533,
    latitude: 12.5,
    longitude: -69.9667,
  },
  {
    label: 'Australia',
    alpha2: 'AU',
    alpha3: 'AUS',
    numeric: 36,
    latitude: -27,
    longitude: 133,
  },
  {
    label: 'Austria',
    alpha2: 'AT',
    alpha3: 'AUT',
    numeric: 40,
    latitude: 47.3333,
    longitude: 13.3333,
  },
  {
    label: 'Azerbaijan',
    alpha2: 'AZ',
    alpha3: 'AZE',
    numeric: 31,
    latitude: 40.5,
    longitude: 47.5,
  },
  {
    label: 'Bahamas',
    alpha2: 'BS',
    alpha3: 'BHS',
    numeric: 44,
    latitude: 24.25,
    longitude: -76,
  },
  {
    label: 'Bahrain',
    alpha2: 'BH',
    alpha3: 'BHR',
    numeric: 48,
    latitude: 26,
    longitude: 50.55,
  },
  {
    label: 'Bangladesh',
    alpha2: 'BD',
    alpha3: 'BGD',
    numeric: 50,
    latitude: 24,
    longitude: 90,
  },
  {
    label: 'Barbados',
    alpha2: 'BB',
    alpha3: 'BRB',
    numeric: 52,
    latitude: 13.1667,
    longitude: -59.5333,
  },
  {
    label: 'Belarus',
    alpha2: 'BY',
    alpha3: 'BLR',
    numeric: 112,
    latitude: 53,
    longitude: 28,
  },
  {
    label: 'Belgium',
    alpha2: 'BE',
    alpha3: 'BEL',
    numeric: 56,
    latitude: 50.8333,
    longitude: 4,
  },
  {
    label: 'Belize',
    alpha2: 'BZ',
    alpha3: 'BLZ',
    numeric: 84,
    latitude: 17.25,
    longitude: -88.75,
  },
  {
    label: 'Benin',
    alpha2: 'BJ',
    alpha3: 'BEN',
    numeric: 204,
    latitude: 9.5,
    longitude: 2.25,
  },
  {
    label: 'Bermuda',
    alpha2: 'BM',
    alpha3: 'BMU',
    numeric: 60,
    latitude: 32.3333,
    longitude: -64.75,
  },
  {
    label: 'Bhutan',
    alpha2: 'BT',
    alpha3: 'BTN',
    numeric: 64,
    latitude: 27.5,
    longitude: 90.5,
  },
  {
    label: 'Bolivia, Plurinational State of',
    alpha2: 'BO',
    alpha3: 'BOL',
    numeric: 68,
    latitude: -17,
    longitude: -65,
  },
  {
    label: 'Bosnia and Herzegovina',
    alpha2: 'BA',
    alpha3: 'BIH',
    numeric: 70,
    latitude: 44,
    longitude: 18,
  },
  {
    label: 'Botswana',
    alpha2: 'BW',
    alpha3: 'BWA',
    numeric: 72,
    latitude: -22,
    longitude: 24,
  },
  {
    label: 'Bouvet Island',
    alpha2: 'BV',
    alpha3: 'BVT',
    numeric: 74,
    latitude: -54.4333,
    longitude: 3.4,
  },
  {
    label: 'Brazil',
    alpha2: 'BR',
    alpha3: 'BRA',
    numeric: 76,
    latitude: -10,
    longitude: -55,
  },
  {
    label: 'British Indian Ocean Territory',
    alpha2: 'IO',
    alpha3: 'IOT',
    numeric: 86,
    latitude: -6,
    longitude: 71.5,
  },
  {
    label: 'Brunei Darussalam',
    alpha2: 'BN',
    alpha3: 'BRN',
    numeric: 96,
    latitude: 4.5,
    longitude: 114.6667,
  },
  {
    label: 'Bulgaria',
    alpha2: 'BG',
    alpha3: 'BGR',
    numeric: 100,
    latitude: 43,
    longitude: 25,
  },
  {
    label: 'Burkina Faso',
    alpha2: 'BF',
    alpha3: 'BFA',
    numeric: 854,
    latitude: 13,
    longitude: -2,
  },
  {
    label: 'Burundi',
    alpha2: 'BI',
    alpha3: 'BDI',
    numeric: 108,
    latitude: -3.5,
    longitude: 30,
  },
  {
    label: 'Cambodia',
    alpha2: 'KH',
    alpha3: 'KHM',
    numeric: 116,
    latitude: 13,
    longitude: 105,
  },
  {
    label: 'Cameroon',
    alpha2: 'CM',
    alpha3: 'CMR',
    numeric: 120,
    latitude: 6,
    longitude: 12,
  },
  {
    label: 'Canada',
    alpha2: 'CA',
    alpha3: 'CAN',
    numeric: 124,
    latitude: 60,
    longitude: -95,
  },
  {
    label: 'Cape Verde',
    alpha2: 'CV',
    alpha3: 'CPV',
    numeric: 132,
    latitude: 16,
    longitude: -24,
  },
  {
    label: 'Cayman Islands',
    alpha2: 'KY',
    alpha3: 'CYM',
    numeric: 136,
    latitude: 19.5,
    longitude: -80.5,
  },
  {
    label: 'Central African Republic',
    alpha2: 'CF',
    alpha3: 'CAF',
    numeric: 140,
    latitude: 7,
    longitude: 21,
  },
  {
    label: 'Chad',
    alpha2: 'TD',
    alpha3: 'TCD',
    numeric: 148,
    latitude: 15,
    longitude: 19,
  },
  {
    label: 'Chile',
    alpha2: 'CL',
    alpha3: 'CHL',
    numeric: 152,
    latitude: -30,
    longitude: -71,
  },
  {
    label: 'China',
    alpha2: 'CN',
    alpha3: 'CHN',
    numeric: 156,
    latitude: 35,
    longitude: 105,
  },
  {
    label: 'Christmas Island',
    alpha2: 'CX',
    alpha3: 'CXR',
    numeric: 162,
    latitude: -10.5,
    longitude: 105.6667,
  },
  {
    label: 'Cocos (Keeling) Islands',
    alpha2: 'CC',
    alpha3: 'CCK',
    numeric: 166,
    latitude: -12.5,
    longitude: 96.8333,
  },
  {
    label: 'Colombia',
    alpha2: 'CO',
    alpha3: 'COL',
    numeric: 170,
    latitude: 4,
    longitude: -72,
  },
  {
    label: 'Comoros',
    alpha2: 'KM',
    alpha3: 'COM',
    numeric: 174,
    latitude: -12.1667,
    longitude: 44.25,
  },
  {
    label: 'Congo',
    alpha2: 'CG',
    alpha3: 'COG',
    numeric: 178,
    latitude: -1,
    longitude: 15,
  },
  {
    label: 'Congo, the Democratic Republic of the',
    alpha2: 'CD',
    alpha3: 'COD',
    numeric: 180,
    latitude: 0,
    longitude: 25,
  },
  {
    label: 'Cook Islands',
    alpha2: 'CK',
    alpha3: 'COK',
    numeric: 184,
    latitude: -21.2333,
    longitude: -159.7667,
  },
  {
    label: 'Costa Rica',
    alpha2: 'CR',
    alpha3: 'CRI',
    numeric: 188,
    latitude: 10,
    longitude: -84,
  },
  {
    label: "Côte d'Ivoire",
    alpha2: 'CI',
    alpha3: 'CIV',
    numeric: 384,
    latitude: 8,
    longitude: -5,
  },
  {
    label: 'Croatia',
    alpha2: 'HR',
    alpha3: 'HRV',
    numeric: 191,
    latitude: 45.1667,
    longitude: 15.5,
  },
  {
    label: 'Cuba',
    alpha2: 'CU',
    alpha3: 'CUB',
    numeric: 192,
    latitude: 21.5,
    longitude: -80,
  },
  {
    label: 'Cyprus',
    alpha2: 'CY',
    alpha3: 'CYP',
    numeric: 196,
    latitude: 35,
    longitude: 33,
  },
  {
    label: 'Czech Republic',
    alpha2: 'CZ',
    alpha3: 'CZE',
    numeric: 203,
    latitude: 49.75,
    longitude: 15.5,
  },
  {
    label: 'Denmark',
    alpha2: 'DK',
    alpha3: 'DNK',
    numeric: 208,
    latitude: 56,
    longitude: 10,
  },
  {
    label: 'Djibouti',
    alpha2: 'DJ',
    alpha3: 'DJI',
    numeric: 262,
    latitude: 11.5,
    longitude: 43,
  },
  {
    label: 'Dominica',
    alpha2: 'DM',
    alpha3: 'DMA',
    numeric: 212,
    latitude: 15.4167,
    longitude: -61.3333,
  },
  {
    label: 'Dominican Republic',
    alpha2: 'DO',
    alpha3: 'DOM',
    numeric: 214,
    latitude: 19,
    longitude: -70.6667,
  },
  {
    label: 'Ecuador',
    alpha2: 'EC',
    alpha3: 'ECU',
    numeric: 218,
    latitude: -2,
    longitude: -77.5,
  },
  {
    label: 'Egypt',
    alpha2: 'EG',
    alpha3: 'EGY',
    numeric: 818,
    latitude: 27,
    longitude: 30,
  },
  {
    label: 'El Salvador',
    alpha2: 'SV',
    alpha3: 'SLV',
    numeric: 222,
    latitude: 13.8333,
    longitude: -88.9167,
  },
  {
    label: 'Equatorial Guinea',
    alpha2: 'GQ',
    alpha3: 'GNQ',
    numeric: 226,
    latitude: 2,
    longitude: 10,
  },
  {
    label: 'Eritrea',
    alpha2: 'ER',
    alpha3: 'ERI',
    numeric: 232,
    latitude: 15,
    longitude: 39,
  },
  {
    label: 'Estonia',
    alpha2: 'EE',
    alpha3: 'EST',
    numeric: 233,
    latitude: 59,
    longitude: 26,
  },
  {
    label: 'Ethiopia',
    alpha2: 'ET',
    alpha3: 'ETH',
    numeric: 231,
    latitude: 8,
    longitude: 38,
  },
  {
    label: 'Falkland Islands (Malvinas)',
    alpha2: 'FK',
    alpha3: 'FLK',
    numeric: 238,
    latitude: -51.75,
    longitude: -59,
  },
  {
    label: 'Faroe Islands',
    alpha2: 'FO',
    alpha3: 'FRO',
    numeric: 234,
    latitude: 62,
    longitude: -7,
  },
  {
    label: 'Fiji',
    alpha2: 'FJ',
    alpha3: 'FJI',
    numeric: 242,
    latitude: -18,
    longitude: 175,
  },
  {
    label: 'Finland',
    alpha2: 'FI',
    alpha3: 'FIN',
    numeric: 246,
    latitude: 64,
    longitude: 26,
  },
  {
    label: 'France',
    alpha2: 'FR',
    alpha3: 'FRA',
    numeric: 250,
    latitude: 46,
    longitude: 2,
  },
  {
    label: 'French Guiana',
    alpha2: 'GF',
    alpha3: 'GUF',
    numeric: 254,
    latitude: 4,
    longitude: -53,
  },
  {
    label: 'French Polynesia',
    alpha2: 'PF',
    alpha3: 'PYF',
    numeric: 258,
    latitude: -15,
    longitude: -140,
  },
  {
    label: 'French Southern Territories',
    alpha2: 'TF',
    alpha3: 'ATF',
    numeric: 260,
    latitude: -43,
    longitude: 67,
  },
  {
    label: 'Gabon',
    alpha2: 'GA',
    alpha3: 'GAB',
    numeric: 266,
    latitude: -1,
    longitude: 11.75,
  },
  {
    label: 'Gambia',
    alpha2: 'GM',
    alpha3: 'GMB',
    numeric: 270,
    latitude: 13.4667,
    longitude: -16.5667,
  },
  {
    label: 'Georgia',
    alpha2: 'GE',
    alpha3: 'GEO',
    numeric: 268,
    latitude: 42,
    longitude: 43.5,
  },
  {
    label: 'Germany',
    alpha2: 'DE',
    alpha3: 'DEU',
    numeric: 276,
    latitude: 51,
    longitude: 9,
  },
  {
    label: 'Ghana',
    alpha2: 'GH',
    alpha3: 'GHA',
    numeric: 288,
    latitude: 8,
    longitude: -2,
  },
  {
    label: 'Gibraltar',
    alpha2: 'GI',
    alpha3: 'GIB',
    numeric: 292,
    latitude: 36.1833,
    longitude: -5.3667,
  },
  {
    label: 'Greece',
    alpha2: 'GR',
    alpha3: 'GRC',
    numeric: 300,
    latitude: 39,
    longitude: 22,
  },
  {
    label: 'Greenland',
    alpha2: 'GL',
    alpha3: 'GRL',
    numeric: 304,
    latitude: 72,
    longitude: -40,
  },
  {
    label: 'Grenada',
    alpha2: 'GD',
    alpha3: 'GRD',
    numeric: 308,
    latitude: 12.1167,
    longitude: -61.6667,
  },
  {
    label: 'Guadeloupe',
    alpha2: 'GP',
    alpha3: 'GLP',
    numeric: 312,
    latitude: 16.25,
    longitude: -61.5833,
  },
  {
    label: 'Guam',
    alpha2: 'GU',
    alpha3: 'GUM',
    numeric: 316,
    latitude: 13.4667,
    longitude: 144.7833,
  },
  {
    label: 'Guatemala',
    alpha2: 'GT',
    alpha3: 'GTM',
    numeric: 320,
    latitude: 15.5,
    longitude: -90.25,
  },
  {
    label: 'Guernsey',
    alpha2: 'GG',
    alpha3: 'GGY',
    numeric: 831,
    latitude: 49.5,
    longitude: -2.56,
  },
  {
    label: 'Guinea',
    alpha2: 'GN',
    alpha3: 'GIN',
    numeric: 324,
    latitude: 11,
    longitude: -10,
  },
  {
    label: 'Guinea-Bissau',
    alpha2: 'GW',
    alpha3: 'GNB',
    numeric: 624,
    latitude: 12,
    longitude: -15,
  },
  {
    label: 'Guyana',
    alpha2: 'GY',
    alpha3: 'GUY',
    numeric: 328,
    latitude: 5,
    longitude: -59,
  },
  {
    label: 'Haiti',
    alpha2: 'HT',
    alpha3: 'HTI',
    numeric: 332,
    latitude: 19,
    longitude: -72.4167,
  },
  {
    label: 'Heard Island and McDonald Islands',
    alpha2: 'HM',
    alpha3: 'HMD',
    numeric: 334,
    latitude: -53.1,
    longitude: 72.5167,
  },
  {
    label: 'Holy See (Vatican City State)',
    alpha2: 'VA',
    alpha3: 'VAT',
    numeric: 336,
    latitude: 41.9,
    longitude: 12.45,
  },
  {
    label: 'Honduras',
    alpha2: 'HN',
    alpha3: 'HND',
    numeric: 340,
    latitude: 15,
    longitude: -86.5,
  },
  {
    label: 'Hong Kong',
    alpha2: 'HK',
    alpha3: 'HKG',
    numeric: 344,
    latitude: 22.25,
    longitude: 114.1667,
  },
  {
    label: 'Hungary',
    alpha2: 'HU',
    alpha3: 'HUN',
    numeric: 348,
    latitude: 47,
    longitude: 20,
  },
  {
    label: 'Iceland',
    alpha2: 'IS',
    alpha3: 'ISL',
    numeric: 352,
    latitude: 65,
    longitude: -18,
  },
  {
    label: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: 356,
    latitude: 20,
    longitude: 77,
  },
  {
    label: 'Indonesia',
    alpha2: 'ID',
    alpha3: 'IDN',
    numeric: 360,
    latitude: -5,
    longitude: 120,
  },
  {
    label: 'Iran, Islamic Republic of',
    alpha2: 'IR',
    alpha3: 'IRN',
    numeric: 364,
    latitude: 32,
    longitude: 53,
  },
  {
    label: 'Iraq',
    alpha2: 'IQ',
    alpha3: 'IRQ',
    numeric: 368,
    latitude: 33,
    longitude: 44,
  },
  {
    label: 'Ireland',
    alpha2: 'IE',
    alpha3: 'IRL',
    numeric: 372,
    latitude: 53,
    longitude: -8,
  },
  {
    label: 'Isle of Man',
    alpha2: 'IM',
    alpha3: 'IMN',
    numeric: 833,
    latitude: 54.23,
    longitude: -4.55,
  },
  {
    label: 'Israel',
    alpha2: 'IL',
    alpha3: 'ISR',
    numeric: 376,
    latitude: 31.5,
    longitude: 34.75,
  },
  {
    label: 'Italy',
    alpha2: 'IT',
    alpha3: 'ITA',
    numeric: 380,
    latitude: 42.8333,
    longitude: 12.8333,
  },
  {
    label: 'Jamaica',
    alpha2: 'JM',
    alpha3: 'JAM',
    numeric: 388,
    latitude: 18.25,
    longitude: -77.5,
  },
  {
    label: 'Japan',
    alpha2: 'JP',
    alpha3: 'JPN',
    numeric: 392,
    latitude: 36,
    longitude: 138,
  },
  {
    label: 'Jersey',
    alpha2: 'JE',
    alpha3: 'JEY',
    numeric: 832,
    latitude: 49.21,
    longitude: -2.13,
  },
  {
    label: 'Jordan',
    alpha2: 'JO',
    alpha3: 'JOR',
    numeric: 400,
    latitude: 31,
    longitude: 36,
  },
  {
    label: 'Kazakhstan',
    alpha2: 'KZ',
    alpha3: 'KAZ',
    numeric: 398,
    latitude: 48,
    longitude: 68,
  },
  {
    label: 'Kenya',
    alpha2: 'KE',
    alpha3: 'KEN',
    numeric: 404,
    latitude: 1,
    longitude: 38,
  },
  {
    label: 'Kiribati',
    alpha2: 'KI',
    alpha3: 'KIR',
    numeric: 296,
    latitude: 1.4167,
    longitude: 173,
  },
  {
    label: "Korea, Democratic People's Republic of",
    alpha2: 'KP',
    alpha3: 'PRK',
    numeric: 408,
    latitude: 40,
    longitude: 127,
  },
  {
    label: 'Korea, Republic of',
    alpha2: 'KR',
    alpha3: 'KOR',
    numeric: 410,
    latitude: 37,
    longitude: 127.5,
  },
  {
    label: 'Kuwait',
    alpha2: 'KW',
    alpha3: 'KWT',
    numeric: 414,
    latitude: 29.3375,
    longitude: 47.6581,
  },
  {
    label: 'Kyrgyzstan',
    alpha2: 'KG',
    alpha3: 'KGZ',
    numeric: 417,
    latitude: 41,
    longitude: 75,
  },
  {
    label: "Lao People's Democratic Republic",
    alpha2: 'LA',
    alpha3: 'LAO',
    numeric: 418,
    latitude: 18,
    longitude: 105,
  },
  {
    label: 'Latvia',
    alpha2: 'LV',
    alpha3: 'LVA',
    numeric: 428,
    latitude: 57,
    longitude: 25,
  },
  {
    label: 'Lebanon',
    alpha2: 'LB',
    alpha3: 'LBN',
    numeric: 422,
    latitude: 33.8333,
    longitude: 35.8333,
  },
  {
    label: 'Lesotho',
    alpha2: 'LS',
    alpha3: 'LSO',
    numeric: 426,
    latitude: -29.5,
    longitude: 28.5,
  },
  {
    label: 'Liberia',
    alpha2: 'LR',
    alpha3: 'LBR',
    numeric: 430,
    latitude: 6.5,
    longitude: -9.5,
  },
  {
    label: 'Libyan Arab Jamahiriya',
    alpha2: 'LY',
    alpha3: 'LBY',
    numeric: 434,
    latitude: 25,
    longitude: 17,
  },
  {
    label: 'Liechtenstein',
    alpha2: 'LI',
    alpha3: 'LIE',
    numeric: 438,
    latitude: 47.1667,
    longitude: 9.5333,
  },
  {
    label: 'Lithuania',
    alpha2: 'LT',
    alpha3: 'LTU',
    numeric: 440,
    latitude: 56,
    longitude: 24,
  },
  {
    label: 'Luxembourg',
    alpha2: 'LU',
    alpha3: 'LUX',
    numeric: 442,
    latitude: 49.75,
    longitude: 6.1667,
  },
  {
    label: 'Macao',
    alpha2: 'MO',
    alpha3: 'MAC',
    numeric: 446,
    latitude: 22.1667,
    longitude: 113.55,
  },
  {
    label: 'Macedonia, the former Yugoslav Republic of',
    alpha2: 'MK',
    alpha3: 'MKD',
    numeric: 807,
    latitude: 41.8333,
    longitude: 22,
  },
  {
    label: 'Madagascar',
    alpha2: 'MG',
    alpha3: 'MDG',
    numeric: 450,
    latitude: -20,
    longitude: 47,
  },
  {
    label: 'Malawi',
    alpha2: 'MW',
    alpha3: 'MWI',
    numeric: 454,
    latitude: -13.5,
    longitude: 34,
  },
  {
    label: 'Malaysia',
    alpha2: 'MY',
    alpha3: 'MYS',
    numeric: 458,
    latitude: 2.5,
    longitude: 112.5,
  },
  {
    label: 'Maldives',
    alpha2: 'MV',
    alpha3: 'MDV',
    numeric: 462,
    latitude: 3.25,
    longitude: 73,
  },
  {
    label: 'Mali',
    alpha2: 'ML',
    alpha3: 'MLI',
    numeric: 466,
    latitude: 17,
    longitude: -4,
  },
  {
    label: 'Malta',
    alpha2: 'MT',
    alpha3: 'MLT',
    numeric: 470,
    latitude: 35.8333,
    longitude: 14.5833,
  },
  {
    label: 'Marshall Islands',
    alpha2: 'MH',
    alpha3: 'MHL',
    numeric: 584,
    latitude: 9,
    longitude: 168,
  },
  {
    label: 'Martinique',
    alpha2: 'MQ',
    alpha3: 'MTQ',
    numeric: 474,
    latitude: 14.6667,
    longitude: -61,
  },
  {
    label: 'Mauritania',
    alpha2: 'MR',
    alpha3: 'MRT',
    numeric: 478,
    latitude: 20,
    longitude: -12,
  },
  {
    label: 'Mauritius',
    alpha2: 'MU',
    alpha3: 'MUS',
    numeric: 480,
    latitude: -20.2833,
    longitude: 57.55,
  },
  {
    label: 'Mayotte',
    alpha2: 'YT',
    alpha3: 'MYT',
    numeric: 175,
    latitude: -12.8333,
    longitude: 45.1667,
  },
  {
    label: 'Mexico',
    alpha2: 'MX',
    alpha3: 'MEX',
    numeric: 484,
    latitude: 23,
    longitude: -102,
  },
  {
    label: 'Micronesia, Federated States of',
    alpha2: 'FM',
    alpha3: 'FSM',
    numeric: 583,
    latitude: 6.9167,
    longitude: 158.25,
  },
  {
    label: 'Moldova, Republic of',
    alpha2: 'MD',
    alpha3: 'MDA',
    numeric: 498,
    latitude: 47,
    longitude: 29,
  },
  {
    label: 'Monaco',
    alpha2: 'MC',
    alpha3: 'MCO',
    numeric: 492,
    latitude: 43.7333,
    longitude: 7.4,
  },
  {
    label: 'Mongolia',
    alpha2: 'MN',
    alpha3: 'MNG',
    numeric: 496,
    latitude: 46,
    longitude: 105,
  },
  {
    label: 'Montenegro',
    alpha2: 'ME',
    alpha3: 'MNE',
    numeric: 499,
    latitude: 42,
    longitude: 19,
  },
  {
    label: 'Montserrat',
    alpha2: 'MS',
    alpha3: 'MSR',
    numeric: 500,
    latitude: 16.75,
    longitude: -62.2,
  },
  {
    label: 'Morocco',
    alpha2: 'MA',
    alpha3: 'MAR',
    numeric: 504,
    latitude: 32,
    longitude: -5,
  },
  {
    label: 'Mozambique',
    alpha2: 'MZ',
    alpha3: 'MOZ',
    numeric: 508,
    latitude: -18.25,
    longitude: 35,
  },
  {
    label: 'Myanmar',
    alpha2: 'MM',
    alpha3: 'MMR',
    numeric: 104,
    latitude: 22,
    longitude: 98,
  },
  {
    label: 'Namibia',
    alpha2: 'NA',
    alpha3: 'NAM',
    numeric: 516,
    latitude: -22,
    longitude: 17,
  },
  {
    label: 'Nauru',
    alpha2: 'NR',
    alpha3: 'NRU',
    numeric: 520,
    latitude: -0.5333,
    longitude: 166.9167,
  },
  {
    label: 'Nepal',
    alpha2: 'NP',
    alpha3: 'NPL',
    numeric: 524,
    latitude: 28,
    longitude: 84,
  },
  {
    label: 'Netherlands',
    alpha2: 'NL',
    alpha3: 'NLD',
    numeric: 528,
    latitude: 52.5,
    longitude: 5.75,
  },
  {
    label: 'Netherlands Antilles',
    alpha2: 'AN',
    alpha3: 'ANT',
    numeric: 530,
    latitude: 12.25,
    longitude: -68.75,
  },
  {
    label: 'New Caledonia',
    alpha2: 'NC',
    alpha3: 'NCL',
    numeric: 540,
    latitude: -21.5,
    longitude: 165.5,
  },
  {
    label: 'New Zealand',
    alpha2: 'NZ',
    alpha3: 'NZL',
    numeric: 554,
    latitude: -41,
    longitude: 174,
  },
  {
    label: 'Nicaragua',
    alpha2: 'NI',
    alpha3: 'NIC',
    numeric: 558,
    latitude: 13,
    longitude: -85,
  },
  {
    label: 'Niger',
    alpha2: 'NE',
    alpha3: 'NER',
    numeric: 562,
    latitude: 16,
    longitude: 8,
  },
  {
    label: 'Nigeria',
    alpha2: 'NG',
    alpha3: 'NGA',
    numeric: 566,
    latitude: 10,
    longitude: 8,
  },
  {
    label: 'Niue',
    alpha2: 'NU',
    alpha3: 'NIU',
    numeric: 570,
    latitude: -19.0333,
    longitude: -169.8667,
  },
  {
    label: 'Norfolk Island',
    alpha2: 'NF',
    alpha3: 'NFK',
    numeric: 574,
    latitude: -29.0333,
    longitude: 167.95,
  },
  {
    label: 'Northern Mariana Islands',
    alpha2: 'MP',
    alpha3: 'MNP',
    numeric: 580,
    latitude: 15.2,
    longitude: 145.75,
  },
  {
    label: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: 578,
    latitude: 62,
    longitude: 10,
  },
  {
    label: 'Oman',
    alpha2: 'OM',
    alpha3: 'OMN',
    numeric: 512,
    latitude: 21,
    longitude: 57,
  },
  {
    label: 'Pakistan',
    alpha2: 'PK',
    alpha3: 'PAK',
    numeric: 586,
    latitude: 30,
    longitude: 70,
  },
  {
    label: 'Palau',
    alpha2: 'PW',
    alpha3: 'PLW',
    numeric: 585,
    latitude: 7.5,
    longitude: 134.5,
  },
  {
    label: 'Palestinian Territory, Occupied',
    alpha2: 'PS',
    alpha3: 'PSE',
    numeric: 275,
    latitude: 32,
    longitude: 35.25,
  },
  {
    label: 'Panama',
    alpha2: 'PA',
    alpha3: 'PAN',
    numeric: 591,
    latitude: 9,
    longitude: -80,
  },
  {
    label: 'Papua New Guinea',
    alpha2: 'PG',
    alpha3: 'PNG',
    numeric: 598,
    latitude: -6,
    longitude: 147,
  },
  {
    label: 'Paraguay',
    alpha2: 'PY',
    alpha3: 'PRY',
    numeric: 600,
    latitude: -23,
    longitude: -58,
  },
  {
    label: 'Peru',
    alpha2: 'PE',
    alpha3: 'PER',
    numeric: 604,
    latitude: -10,
    longitude: -76,
  },
  {
    label: 'Philippines',
    alpha2: 'PH',
    alpha3: 'PHL',
    numeric: 608,
    latitude: 13,
    longitude: 122,
  },
  {
    label: 'Pitcairn',
    alpha2: 'PN',
    alpha3: 'PCN',
    numeric: 612,
    latitude: -24.7,
    longitude: -127.4,
  },
  {
    label: 'Poland',
    alpha2: 'PL',
    alpha3: 'POL',
    numeric: 616,
    latitude: 52,
    longitude: 20,
  },
  {
    label: 'Portugal',
    alpha2: 'PT',
    alpha3: 'PRT',
    numeric: 620,
    latitude: 39.5,
    longitude: -8,
  },
  {
    label: 'Puerto Rico',
    alpha2: 'PR',
    alpha3: 'PRI',
    numeric: 630,
    latitude: 18.25,
    longitude: -66.5,
  },
  {
    label: 'Qatar',
    alpha2: 'QA',
    alpha3: 'QAT',
    numeric: 634,
    latitude: 25.5,
    longitude: 51.25,
  },
  {
    label: 'Réunion',
    alpha2: 'RE',
    alpha3: 'REU',
    numeric: 638,
    latitude: -21.1,
    longitude: 55.6,
  },
  {
    label: 'Romania',
    alpha2: 'RO',
    alpha3: 'ROU',
    numeric: 642,
    latitude: 46,
    longitude: 25,
  },
  {
    label: 'Russian Federation',
    alpha2: 'RU',
    alpha3: 'RUS',
    numeric: 643,
    latitude: 60,
    longitude: 100,
  },
  {
    label: 'Rwanda',
    alpha2: 'RW',
    alpha3: 'RWA',
    numeric: 646,
    latitude: -2,
    longitude: 30,
  },
  {
    label: 'Saint Helena, Ascension and Tristan da Cunha',
    alpha2: 'SH',
    alpha3: 'SHN',
    numeric: 654,
    latitude: -15.9333,
    longitude: -5.7,
  },
  {
    label: 'Saint Kitts and Nevis',
    alpha2: 'KN',
    alpha3: 'KNA',
    numeric: 659,
    latitude: 17.3333,
    longitude: -62.75,
  },
  {
    label: 'Saint Lucia',
    alpha2: 'LC',
    alpha3: 'LCA',
    numeric: 662,
    latitude: 13.8833,
    longitude: -61.1333,
  },
  {
    label: 'Saint Pierre and Miquelon',
    alpha2: 'PM',
    alpha3: 'SPM',
    numeric: 666,
    latitude: 46.8333,
    longitude: -56.3333,
  },
  {
    label: 'Saint Vincent and the Grenadines',
    alpha2: 'VC',
    alpha3: 'VCT',
    numeric: 670,
    latitude: 13.25,
    longitude: -61.2,
  },
  {
    label: 'Samoa',
    alpha2: 'WS',
    alpha3: 'WSM',
    numeric: 882,
    latitude: -13.5833,
    longitude: -172.3333,
  },
  {
    label: 'San Marino',
    alpha2: 'SM',
    alpha3: 'SMR',
    numeric: 674,
    latitude: 43.7667,
    longitude: 12.4167,
  },
  {
    label: 'Sao Tome and Principe',
    alpha2: 'ST',
    alpha3: 'STP',
    numeric: 678,
    latitude: 1,
    longitude: 7,
  },
  {
    label: 'Saudi Arabia',
    alpha2: 'SA',
    alpha3: 'SAU',
    numeric: 682,
    latitude: 25,
    longitude: 45,
  },
  {
    label: 'Senegal',
    alpha2: 'SN',
    alpha3: 'SEN',
    numeric: 686,
    latitude: 14,
    longitude: -14,
  },
  {
    label: 'Serbia',
    alpha2: 'RS',
    alpha3: 'SRB',
    numeric: 688,
    latitude: 44,
    longitude: 21,
  },
  {
    label: 'Seychelles',
    alpha2: 'SC',
    alpha3: 'SYC',
    numeric: 690,
    latitude: -4.5833,
    longitude: 55.6667,
  },
  {
    label: 'Sierra Leone',
    alpha2: 'SL',
    alpha3: 'SLE',
    numeric: 694,
    latitude: 8.5,
    longitude: -11.5,
  },
  {
    label: 'Singapore',
    alpha2: 'SG',
    alpha3: 'SGP',
    numeric: 702,
    latitude: 1.3667,
    longitude: 103.8,
  },
  {
    label: 'Slovakia',
    alpha2: 'SK',
    alpha3: 'SVK',
    numeric: 703,
    latitude: 48.6667,
    longitude: 19.5,
  },
  {
    label: 'Slovenia',
    alpha2: 'SI',
    alpha3: 'SVN',
    numeric: 705,
    latitude: 46,
    longitude: 15,
  },
  {
    label: 'Solomon Islands',
    alpha2: 'SB',
    alpha3: 'SLB',
    numeric: 90,
    latitude: -8,
    longitude: 159,
  },
  {
    label: 'Somalia',
    alpha2: 'SO',
    alpha3: 'SOM',
    numeric: 706,
    latitude: 10,
    longitude: 49,
  },
  {
    label: 'South Africa',
    alpha2: 'ZA',
    alpha3: 'ZAF',
    numeric: 710,
    latitude: -29,
    longitude: 24,
  },
  {
    label: 'South Georgia and the South Sandwich Islands',
    alpha2: 'GS',
    alpha3: 'SGS',
    numeric: 239,
    latitude: -54.5,
    longitude: -37,
  },
  {
    label: 'Spain',
    alpha2: 'ES',
    alpha3: 'ESP',
    numeric: 724,
    latitude: 40,
    longitude: -4,
  },
  {
    label: 'Sri Lanka',
    alpha2: 'LK',
    alpha3: 'LKA',
    numeric: 144,
    latitude: 7,
    longitude: 81,
  },
  {
    label: 'Sudan',
    alpha2: 'SD',
    alpha3: 'SDN',
    numeric: 736,
    latitude: 15,
    longitude: 30,
  },
  {
    label: 'Suriname',
    alpha2: 'SR',
    alpha3: 'SUR',
    numeric: 740,
    latitude: 4,
    longitude: -56,
  },
  {
    label: 'Svalbard and Jan Mayen',
    alpha2: 'SJ',
    alpha3: 'SJM',
    numeric: 744,
    latitude: 78,
    longitude: 20,
  },
  {
    label: 'Swaziland',
    alpha2: 'SZ',
    alpha3: 'SWZ',
    numeric: 748,
    latitude: -26.5,
    longitude: 31.5,
  },
  {
    label: 'Sweden',
    alpha2: 'SE',
    alpha3: 'SWE',
    numeric: 752,
    latitude: 62,
    longitude: 15,
  },
  {
    label: 'Switzerland',
    alpha2: 'CH',
    alpha3: 'CHE',
    numeric: 756,
    latitude: 47,
    longitude: 8,
  },
  {
    label: 'Syrian Arab Republic',
    alpha2: 'SY',
    alpha3: 'SYR',
    numeric: 760,
    latitude: 35,
    longitude: 38,
  },
  {
    label: 'Taiwan, Province of China',
    alpha2: 'TW',
    alpha3: 'TWN',
    numeric: 158,
    latitude: 23.5,
    longitude: 121,
  },
  {
    label: 'Tajikistan',
    alpha2: 'TJ',
    alpha3: 'TJK',
    numeric: 762,
    latitude: 39,
    longitude: 71,
  },
  {
    label: 'Tanzania, United Republic of',
    alpha2: 'TZ',
    alpha3: 'TZA',
    numeric: 834,
    latitude: -6,
    longitude: 35,
  },
  {
    label: 'Thailand',
    alpha2: 'TH',
    alpha3: 'THA',
    numeric: 764,
    latitude: 15,
    longitude: 100,
  },
];
export { markers, tags, countries };