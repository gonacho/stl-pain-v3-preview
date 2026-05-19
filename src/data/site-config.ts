export const SITE_URL = 'https://stlpaincenter.com';
export const SITE_NAME = 'St. Louis Pain Center';
export const SITE_LEGAL_NAME = 'St. Louis Pain Center LLC';
export const SITE_PHONE = '+13148462100';
export const SITE_PHONE_DISPLAY = '(314) 846-2100';
export const SITE_ADDRESS = {
  street: '4455 Telegraph Rd #250',
  city: 'St. Louis',
  state: 'MO',
  zip: '63129',
  country: 'US',
};
export const SITE_GEO = { lat: 38.4826929, lng: -90.3050876 };
export const SITE_HOURS = 'Mon–Thu: 8am–5pm | Fri–Sun: Closed';
export const GBP_CID = '8132065016093573560';
export const GBP_SHARE_URL = 'https://maps.app.goo.gl/K8r42Uki1xFUEbNa8';
export const BOOKING_URL = '/contact/';

export const SAME_AS_URLS = [
  `https://www.google.com/maps?cid=${GBP_CID}`,
  GBP_SHARE_URL,
  'https://www.facebook.com/profile.php?id=61558443726830',
  'https://npiprofile.com/npi/1992587968',
  'https://www.carecredit.com/doctor-locator/st-louis-mo/st-louis-pain-center-llc-765kmq/',
  'https://painclinics.com/pain-management/st-louis-pain-center-mo-63129/',
];

export const NAICS_CODE = '621111';

export const MEDICAL_SPECIALTY = {
  name: 'PainMedicine',
  sameAs: 'https://en.wikipedia.org/wiki/Pain_management',
};

export const INSTITUTIONAL_ANCHOR = {
  type: 'CollegeOrUniversity',
  name: 'Washington University School of Medicine',
  sameAs: 'https://en.wikipedia.org/wiki/Washington_University_School_of_Medicine',
};

export const LANDMARKS = [
  {
    type: 'TouristAttraction',
    name: 'Jefferson Barracks Military Post',
    sameAs: 'https://en.wikipedia.org/wiki/Jefferson_Barracks_Military_Post',
  },
  {
    type: 'Museum',
    name: 'Laumeier Sculpture Park',
    sameAs: 'https://en.wikipedia.org/wiki/Laumeier_Sculpture_Park',
  },
  {
    type: 'TouristAttraction',
    name: 'Ulysses S. Grant National Historic Site',
    sameAs: 'https://en.wikipedia.org/wiki/Ulysses_S._Grant_National_Historic_Site',
  },
];

export const LOCAL_EVENT = {
  name: 'Fair Saint Louis',
  sameAs: 'https://en.wikipedia.org/wiki/Fair_Saint_Louis',
};

export const HOMEPAGE_REVIEWS = [
  {
    author: 'Heidi Goodsite',
    date: '2024-01-01',
    rating: 5,
    text: 'Phenomenal staff! Clean facility with people who really care.',
    schema_binding: 'localbusiness-homepage',
  },
  {
    author: 'Pat Shore',
    date: '2024-06-01',
    rating: 5,
    text: 'Everyone is very professional and caring. Treatments are done with utmost care. My doctors gave up on my issues. This treatment has been a Godsend for my neuropathy and vertigo.',
    schema_binding: 'localbusiness-homepage',
  },
  {
    author: 'Lester Brannam',
    date: '2024-05-01',
    rating: 5,
    text: 'Anissa Wheeler was my therapist... I was having left knee pain and my doctor said that I needed knee surgery. I am 71 years old and I didn\'t want to go through surgery so I went to STL Pain Center... I took a gel shot once a week for 5 weeks and they helped tremendously.',
    schema_binding: 'localbusiness-homepage',
  },
];

export const AGGREGATE_RATING = {
  ratingValue: '4.9',
  reviewCount: '47',
  bestRating: '5',
};

export const INSURANCE_LIST = ['Medicare', 'Blue Cross Blue Shield', 'Aetna', 'Cigna'];
