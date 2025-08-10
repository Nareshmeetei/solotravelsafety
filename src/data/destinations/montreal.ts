import { Destination } from './types';

const montreal: Destination = {
  id: 'montreal-canada',
  city: 'Montreal',
  country: 'Canada',
  continent: 'North America',

  countryCode: 'ca',
  description: 'A vibrant bilingual city combining European charm with North American amenities, offering excellent safety and solo travel opportunities.',
  safetyScore: 4.6,
  scores: {
    overall: 4.6,
    nightSafety: 4.4,
    publicTransport: 4.5,
    walkingAlone: 4.5,
    emergencyServices: 4.8
  },
  genderSafetyScore: 4.5,
  lgbtqSafetyScore: 4.8,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Bilingual city (French and English) with strong French culture',
    'European-style cafe culture and dining',
    'Strong arts and festival scene year-round',
    'More relaxed pace than Toronto, European atmosphere'
  ],
  safetyTips: [
    'Generally very safe, but use normal urban precautions',
    'Winter conditions can be hazardous - dress warmly and watch for ice',
    'Be cautious in some areas of downtown at very late hours',
    'Keep belongings secure in crowded festival areas',
    'Emergency services are excellent and respond quickly'
  ],
  emergencyContacts: {
    police: '911',
    fire: '911',
    ambulance: '911',
    touristHelpline: '+1 514-873-2015'
  },
  healthcareInfo: {
    qualityOfCare: 4.8,
    hospitalAvailability: 4.7,
    pharmacyAvailability: 4.8,
    emergencyResponseTime: 4.7
  },
  transportation: {
    publicTransportQuality: 4.5,
    publicTransportSafety: 4.6,
    walkability: 4.6,
    cyclingFriendliness: 4.4,
    rideShareAvailability: 4.3
  },
  accommodations: {
    hotelSafety: 4.7,
    hostelSafety: 4.5,
    airbnbRegulations: 'Well-regulated with registration requirements',
    recommendedAreas: [
      'Old Montreal - historic charm, tourist-friendly',
      'Plateau Mont-Royal - trendy neighborhood with cafes',
      'Mile End - hipster area with great food scene',
      'Downtown - business district, convenient location',
      'Westmount - upscale residential area'
    ]
  },
  localLaws: [
    'Drinking age is 18 in Quebec',
    'Cannabis legal for adults 18+ with regulations',
    'Smoking banned in most public places',
    'Bilingual signage required by law (French dominant)',
    'Quiet hours typically observed 22:00-07:00'
  ],
  culturalNorms: [
    'Start conversations in French, switch to English if needed',
    'European-style dining with longer meal times',
    'Tipping 15-20% expected at restaurants',
    'More formal dress code than rest of Canada',
    'Strong arts and culture appreciation'
  ],
  redFlags: [
    'Very few safety concerns compared to most major cities',
    'Some petty theft in tourist areas during festivals',
    'Winter weather can be dangerous if unprepared',
    'Language barriers possible if only speaking English',
    'Some areas near train stations less safe very late at night'
  ],
  attractions: [
    {
      name: 'Old Montreal',
      safetyScore: 4.6,
      description: 'Historic cobblestone area with European architecture, very safe and well-patrolled'
    },
    {
      name: 'Mount Royal Park',
      safetyScore: 4.4,
      description: 'Large park designed by Frederick Law Olmsted, safe during day, avoid isolated areas at night'
    },
    {
      name: 'Notre-Dame Basilica',
      safetyScore: 4.7,
      description: 'Gothic Revival church in Old Montreal, very safe tourist attraction'
    },
    {
      name: 'Underground City',
      safetyScore: 4.6,
      description: 'Extensive underground network, well-maintained and safe, especially useful in winter'
    },
    {
      name: 'St. Lawrence Market',
      safetyScore: 4.5,
      description: 'Popular market area, generally safe but watch belongings in crowds'
    }
  ],
  neighborhoods: [
    {
      name: 'Plateau Mont-Royal',
      safetyScore: 4.6,
      description: 'Bohemian area with colorful houses and trendy cafes, very safe day and night'
    },
    {
      name: 'Mile End',
      safetyScore: 4.5,
      description: 'Hipster neighborhood known for bagels and music scene, generally very safe'
    },
    {
      name: 'Old Montreal',
      safetyScore: 4.7,
      description: 'Historic tourist area with cobblestone streets, excellent safety and police presence'
    },
    {
      name: 'Downtown',
      safetyScore: 4.4,
      description: 'Business district with shopping, safe during day, some caution needed late at night'
    }
  ],
  travelTips: [
    'Learn basic French phrases - locals appreciate the effort',
    'Get STM day pass for unlimited metro/bus travel',
    'Dress in layers and bring warm clothes in winter',
    'Download festival calendars - city has events year-round',
    'Try local specialties like poutine and Montreal-style bagels'
  ],
  climate: 'Humid continental climate with cold, snowy winters and warm, humid summers',
  currency: 'Canadian Dollar (CAD)',
  language: 'French (primary), English widely spoken',
  bestTimeToVisit: 'May-October for warmest weather, winter for unique cultural experiences',
  costLevel: 'Moderate - budget CAD $80-150 per day',
  internetReliability: 4.8,
  plugType: 'Type A/B (two/three-pin)',
  timeZone: 'EST/EDT',
  accessibility: 4.5
};

export default montreal;