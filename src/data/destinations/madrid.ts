import { Destination } from './types';

const madrid: Destination = {
  id: 'madrid-spain',
  city: 'Madrid',
  country: 'Spain',
  continent: 'Europe',
  description: 'Spain\'s vibrant capital offers excellent museums, parks, and nightlife with good safety standards for solo female travelers.',
  safetyScore: 4.3,
  scores: {
    overall: 4.3,
    nightSafety: 4.0,
    publicTransport: 4.4,
    walkingAlone: 4.2,
    emergencyServices: 4.5
  },
  genderSafetyScore: 4.2,
  lgbtqSafetyScore: 4.6,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Spanish culture embraces late dining (9-11 PM) and nightlife',
    'Siesta time affects shop hours (2-5 PM)',
    'Social and expressive culture, physical greetings common',
    'Sunday is family day, many shops close'
  ],
  safetyTips: [
    'Be aware of pickpockets on metro and in tourist areas',
    'Avoid park areas alone after dark',
    'Keep belongings secure at outdoor restaurant terraces',
    'Be cautious of distraction techniques at ATMs',
    'Stay alert in crowded areas like Puerta del Sol'
  ],
  emergencyContacts: {
    police: '091',
    fire: '080',
    ambulance: '061',
    touristHelpline: '+34 902 102 112'
  },
  healthcareInfo: {
    qualityOfCare: 4.6,
    hospitalAvailability: 4.5,
    pharmacyAvailability: 4.6,
    emergencyResponseTime: 4.4
  },
  transportation: {
    publicTransportQuality: 4.4,
    publicTransportSafety: 4.3,
    walkability: 4.5,
    cyclingFriendliness: 4.1,
    rideShareAvailability: 4.2
  },
  accommodations: {
    hotelSafety: 4.4,
    hostelSafety: 4.2,
    airbnbRegulations: 'Regulated with tourist license requirements',
    recommendedAreas: [
      'Malasaña - trendy neighborhood with vibrant nightlife',
      'Chueca - LGBTQ+ friendly area with great restaurants',
      'Salamanca - upscale shopping district, very safe',
      'La Latina - historic area with traditional tapas bars',
      'Sol/Gran Vía - central location near major attractions'
    ]
  },
  localLaws: [
    'Drinking age is 18, strictly enforced',
    'Smoking banned in enclosed public spaces',
    'Quiet hours typically 22:00-08:00',
    'Public drinking allowed in designated areas',
    'Jaywalking common but technically illegal'
  ],
  culturalNorms: [
    'Greet with two kisses on cheeks (friends/acquaintances)',
    'Lunch is typically 2-4 PM, dinner 9-11 PM',
    'Dress stylishly - appearance matters',
    'Tipping not mandatory but 5-10% appreciated',
    'Spanish spoken loudly is normal, not arguing'
  ],
  redFlags: [
    'Pickpockets active on metro lines 1, 2, and 3',
    'Fake police scams asking for passport/money',
    'Overpriced tourist menus near major attractions',
    'Distraction theft at outdoor cafes and markets',
    'Unlicensed taxi drivers at airport'
  ],
  attractions: [
    {
      name: 'Prado Museum',
      safetyScore: 4.6,
      description: 'World-class art museum with excellent security and crowd management'
    },
    {
      name: 'Retiro Park',
      safetyScore: 4.2,
      description: 'Large central park, safe during day but avoid isolated areas at night'
    },
    {
      name: 'Royal Palace',
      safetyScore: 4.5,
      description: 'Magnificent palace with controlled access and good security presence'
    },
    {
      name: 'Puerta del Sol',
      safetyScore: 3.9,
      description: 'Central square and transport hub, busy but watch for pickpockets'
    },
    {
      name: 'Reina Sofia Museum',
      safetyScore: 4.5,
      description: 'Modern art museum including Picasso\'s Guernica, well-secured facility'
    }
  ],
  neighborhoods: [
    {
      name: 'Salamanca',
      safetyScore: 4.6,
      description: 'Upscale district with designer shops and embassies, very safe day and night'
    },
    {
      name: 'Malasaña',
      safetyScore: 4.1,
      description: 'Hip neighborhood with alternative culture, generally safe but lively at night'
    },
    {
      name: 'Chueca',
      safetyScore: 4.3,
      description: 'LGBTQ+ friendly area with vibrant nightlife and dining scene'
    },
    {
      name: 'La Latina',
      safetyScore: 4.0,
      description: 'Historic neighborhood known for tapas, safe but crowded on weekends'
    }
  ],
  travelTips: [
    'Get a 10-trip metro ticket (Metrobús) for better value',
    'Many museums free on Sunday afternoons for EU citizens',
    'Learn basic Spanish phrases - English less common than other capitals',
    'Book restaurants for dinner after 9 PM when locals eat',
    'Carry water bottle in summer - temperatures can exceed 40°C'
  ],
  climate: 'Continental Mediterranean with hot, dry summers and cool winters',
  currency: 'Euro (EUR)',
  language: 'Spanish',
  bestTimeToVisit: 'March-May and September-November for pleasant weather',
  costLevel: 'Moderate - budget €50-100 per day',
  internetReliability: 4.5,
  plugType: 'Type C/F (two-pin)',
  timeZone: 'CET/CEST',
  accessibility: 4.2
};

export default madrid;