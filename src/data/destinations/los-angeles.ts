import { Destination } from './types';

const losAngeles: Destination = {
  id: 'los-angeles-usa',
  city: 'Los Angeles',
  country: 'United States',
  continent: 'North America',

  countryCode: 'us',
  description: 'The City of Angels offers diverse neighborhoods, entertainment, and beaches, though solo female travelers should be aware of area-specific safety considerations.',
  safetyScore: 3.8,
  scores: {
    overall: 3.8,
    nightSafety: 3.4,
    publicTransport: 3.6,
    walkingAlone: 3.7,
    emergencyServices: 4.5
  },
  genderSafetyScore: 3.7,
  lgbtqSafetyScore: 4.4,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Car culture dominates - public transport limited',
    'Very diverse city with multiple cultural communities',
    'Health and fitness culture is prominent',
    'Entertainment industry influences local culture'
  ],
  safetyTips: [
    'Avoid walking alone at night in most areas',
    'Use rideshare or taxi services rather than public transport at night',
    'Stay in well-populated, well-lit areas',
    'Be cautious of your belongings in tourist areas',
    'Research neighborhood safety before booking accommodation'
  ],
  emergencyContacts: {
    police: '911',
    fire: '911',
    ambulance: '911',
    touristHelpline: '+1 213-689-8822'
  },
  healthcareInfo: {
    qualityOfCare: 4.7,
    hospitalAvailability: 4.6,
    pharmacyAvailability: 4.7,
    emergencyResponseTime: 4.3
  },
  transportation: {
    publicTransportQuality: 3.6,
    publicTransportSafety: 3.4,
    walkability: 3.2,
    cyclingFriendliness: 3.8,
    rideShareAvailability: 4.9
  },
  accommodations: {
    hotelSafety: 4.2,
    hostelSafety: 3.8,
    airbnbRegulations: 'Regulated with registration and short-term rental restrictions',
    recommendedAreas: [
      'Santa Monica - beachside area with good public transport',
      'Beverly Hills - upscale, very safe neighborhood',
      'West Hollywood - LGBTQ+ friendly, vibrant nightlife',
      'Manhattan Beach - family-friendly beach community',
      'Pasadena - charming area with arts and culture'
    ]
  },
  localLaws: [
    'Drinking age is 21, strictly enforced with ID required',
    'Cannabis legal for adults 21+ but public consumption restricted',
    'Jaywalking actively enforced with fines',
    'Open container laws prohibit drinking in public',
    'Smoking banned in most public places including beaches'
  ],
  culturalNorms: [
    'Car is essential for getting around most areas',
    'Health and appearance consciousness is high',
    'Tipping expected (18-22% at restaurants)',
    'Casual dress code in most settings',
    'Small talk and friendliness with strangers is common'
  ],
  redFlags: [
    'Avoid Skid Row area downtown at all times',
    'Some areas of Hollywood Boulevard can be unsafe at night',
    'Beach areas can have transient populations',
    'Parking lots and garages can be unsafe after dark',
    'Some metro stations have safety concerns, especially at night'
  ],
  attractions: [
    {
      name: 'Hollywood Walk of Fame',
      safetyScore: 3.5,
      description: 'Tourist attraction on busy street, but watch for aggressive street performers and panhandlers'
    },
    {
      name: 'Santa Monica Pier',
      safetyScore: 4.1,
      description: 'Popular beach attraction with amusement park, generally safe during day'
    },
    {
      name: 'Griffith Observatory',
      safetyScore: 4.2,
      description: 'Hilltop observatory with city views, safe during operating hours'
    },
    {
      name: 'Getty Center',
      safetyScore: 4.6,
      description: 'World-class art museum with excellent security and parking'
    },
    {
      name: 'Venice Beach',
      safetyScore: 3.3,
      description: 'Colorful boardwalk but can attract transient populations, use caution'
    }
  ],
  neighborhoods: [
    {
      name: 'Beverly Hills',
      safetyScore: 4.7,
      description: 'Upscale area with luxury shopping, very safe with private security'
    },
    {
      name: 'Santa Monica',
      safetyScore: 4.2,
      description: 'Beach community with good amenities, generally safe but crowded'
    },
    {
      name: 'West Hollywood',
      safetyScore: 4.0,
      description: 'LGBTQ+ friendly area with nightlife, safe in main areas'
    },
    {
      name: 'Downtown LA',
      safetyScore: 3.2,
      description: 'Business district improving but still has unsafe areas, especially Skid Row'
    }
  ],
  travelTips: [
    'Rent a car or rely heavily on rideshare services',
    'Download parking apps to find safe, legal parking',
    'Bring layers - weather can vary greatly by area and time',
    'Book restaurant reservations in advance',
    'Allow extra time for traffic - it\'s worse than you think'
  ],
  climate: 'Mediterranean climate with mild, wet winters and warm, dry summers',
  currency: 'US Dollar (USD)',
  language: 'English (Spanish widely spoken)',
  bestTimeToVisit: 'March-May and September-November for pleasant weather',
  costLevel: 'Very expensive - budget $150-350+ per day',
  internetReliability: 4.7,
  plugType: 'Type A/B (two/three-pin)',
  timeZone: 'PST/PDT',
  accessibility: 4.0
};

export default losAngeles;