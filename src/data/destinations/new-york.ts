import { Destination } from './types';

const newYork: Destination = {
  id: 'new-york-usa',
  city: 'New York',
  country: 'United States',
  continent: 'North America',

  countryCode: 'us',
  description: 'The Big Apple offers incredible opportunities for solo female travelers, with excellent public transport and vibrant neighborhoods to explore.',
  safetyScore: 4.2,
  scores: {
    overall: 4.2,
    nightSafety: 3.8,
    publicTransport: 4.3,
    walkingAlone: 4.1,
    emergencyServices: 4.7
  },
  genderSafetyScore: 4.1,
  lgbtqSafetyScore: 4.8,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Extremely diverse city with people from all backgrounds',
    'Fast-paced lifestyle, people are often in a hurry',
    'Tipping is expected (18-22% at restaurants)',
    'Direct communication style is normal and not considered rude'
  ],
  safetyTips: [
    'Stay aware of your surroundings, especially in crowds',
    'Keep valuables secure and avoid displaying expensive items',
    'Trust your instincts and avoid isolated areas at night',
    'Use well-lit, busy streets when walking alone',
    'Be cautious of subway platforms late at night'
  ],
  emergencyContacts: {
    police: '911',
    fire: '911',
    ambulance: '911',
    touristHelpline: '+1 212-484-1200'
  },
  healthcareInfo: {
    qualityOfCare: 4.8,
    hospitalAvailability: 4.9,
    pharmacyAvailability: 4.8,
    emergencyResponseTime: 4.5
  },
  transportation: {
    publicTransportQuality: 4.3,
    publicTransportSafety: 4.1,
    walkability: 4.6,
    cyclingFriendliness: 4.0,
    rideShareAvailability: 4.9
  },
  accommodations: {
    hotelSafety: 4.5,
    hostelSafety: 4.2,
    airbnbRegulations: 'Regulated with registration and rental restrictions',
    recommendedAreas: [
      'Midtown Manhattan - central location, well-patrolled',
      'Upper West Side - safe residential area near Central Park',
      'Greenwich Village - charming neighborhood with good nightlife',
      'SoHo - upscale shopping district, generally safe',
      'Lower East Side - trendy area with good restaurant scene'
    ]
  },
  localLaws: [
    'Drinking age is 21, ID required everywhere',
    'Smoking banned in most public places including bars',
    'Jaywalking is technically illegal but commonly done',
    'Open container laws prohibit drinking alcohol in public',
    'Cannabis is legal for adults 21+ but public consumption restricted'
  ],
  culturalNorms: [
    'New Yorkers walk fast and expect others to keep up',
    'Direct communication is normal, not necessarily rude',
    'Tipping is mandatory culture (18-22% at restaurants)',
    'Personal space can be limited, especially on subway',
    'Small talk with strangers is less common than other US cities'
  ],
  redFlags: [
    'Avoid certain areas of the Bronx and Brooklyn late at night',
    'Be cautious in Times Square due to crowds and scams',
    'Watch for pickpockets on crowded subway cars',
    'Avoid engaging with aggressive street vendors or performers',
    'Be wary of fake police officers or authority figures'
  ],
  attractions: [
    {
      name: 'Central Park',
      safetyScore: 4.3,
      description: 'Large urban park, safe during daylight but avoid isolated areas after dark'
    },
    {
      name: 'Times Square',
      safetyScore: 4.0,
      description: 'Busy tourist hub with heavy police presence, but watch for pickpockets and scams'
    },
    {
      name: 'Brooklyn Bridge',
      safetyScore: 4.4,
      description: 'Iconic bridge walkway, generally safe but crowded during peak times'
    },
    {
      name: 'Statue of Liberty',
      safetyScore: 4.6,
      description: 'Ferry access required, well-monitored tourist site with security screening'
    },
    {
      name: 'High Line',
      safetyScore: 4.5,
      description: 'Elevated park on former railway, well-maintained and monitored'
    }
  ],
  neighborhoods: [
    {
      name: 'Manhattan - Midtown',
      safetyScore: 4.4,
      description: 'Business district with heavy foot traffic and police presence, very safe during day'
    },
    {
      name: 'Manhattan - Upper West Side',
      safetyScore: 4.6,
      description: 'Residential area near Central Park, family-friendly and generally very safe'
    },
    {
      name: 'Brooklyn - Williamsburg',
      safetyScore: 4.2,
      description: 'Trendy neighborhood with good nightlife, generally safe in main areas'
    },
    {
      name: 'Manhattan - Greenwich Village',
      safetyScore: 4.3,
      description: 'Historic neighborhood with charming streets, safe but use normal precautions'
    }
  ],
  travelTips: [
    'Get a MetroCard or use OMNY contactless payment for subway',
    'Download Citymapper or similar app for navigation',
    'Walk confidently and purposefully to blend in',
    'Keep cash for tips and small vendors',
    'Book Broadway shows and popular restaurants well in advance'
  ],
  climate: 'Humid continental climate with hot summers and cold winters',
  currency: 'US Dollar (USD)',
  language: 'English',
  bestTimeToVisit: 'April-June and September-November for pleasant weather and fewer crowds',
  costLevel: 'Very expensive - budget $150-300+ per day',
  internetReliability: 4.8,
  plugType: 'Type A/B (two/three-pin)',
  timeZone: 'EST/EDT',
  accessibility: 4.6
};

export default newYork;