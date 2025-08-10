import { Destination } from './types';

const saoPaulo: Destination = {
  id: 'sao-paulo-brazil',
  city: 'São Paulo',
  country: 'Brazil',
  continent: 'South America',

  countryCode: 'br',
  description: 'Brazil\'s largest metropolis offers incredible culture, food, and nightlife, but solo female travelers should be very cautious about safety.',
  safetyScore: 3.2,
  scores: {
    overall: 3.2,
    nightSafety: 2.8,
    publicTransport: 3.4,
    walkingAlone: 3.0,
    emergencyServices: 3.8
  },
  genderSafetyScore: 3.0,
  lgbtqSafetyScore: 4.2,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Very diverse city with large immigrant communities',
    'Brazilian warmth and friendliness is genuine',
    'Portuguese is the primary language, Spanish partially understood',
    'Strong coffee culture and late dining times'
  ],
  safetyTips: [
    'Never display expensive items like phones, jewelry, or cameras',
    'Use only authorized taxis or Uber/99 rideshare apps',
    'Avoid walking alone at night in any area',
    'Be extremely cautious of your surroundings at all times',
    'Keep minimal cash and copies of documents, not originals'
  ],
  emergencyContacts: {
    police: '190',
    fire: '193',
    ambulance: '192',
    touristHelpline: '+55 11 2171-2827'
  },
  healthcareInfo: {
    qualityOfCare: 4.1,
    hospitalAvailability: 4.0,
    pharmacyAvailability: 4.2,
    emergencyResponseTime: 3.6
  },
  transportation: {
    publicTransportQuality: 3.4,
    publicTransportSafety: 3.2,
    walkability: 3.1,
    cyclingFriendliness: 3.0,
    rideShareAvailability: 4.5
  },
  accommodations: {
    hotelSafety: 3.8,
    hostelSafety: 3.5,
    airbnbRegulations: 'Limited regulation, choose carefully with good reviews',
    recommendedAreas: [
      'Vila Madalena - trendy neighborhood with nightlife, relatively safer',
      'Jardins - upscale area with shopping, better security',
      'Pinheiros - middle-class area with good restaurants',
      'Itaim Bibi - business district, safer during day',
      'Moema - residential area near Ibirapuera Park'
    ]
  },
  localLaws: [
    'Drinking age is 18, widely available',
    'Smoking banned in enclosed public spaces',
    'Tipping expected (10% service charge often included)',
    'Public drinking generally accepted',
    'Cannabis possession decriminalized in small amounts'
  ],
  culturalNorms: [
    'Brazilians are warm, physical, and expressive',
    'Cheek kisses for greetings (usually one in São Paulo)',
    'Lunch is main meal, dinner can be late (8-10 PM)',
    'Dress well - appearance matters in Brazilian culture',
    'Football (soccer) is extremely important culturally'
  ],
  redFlags: [
    'Very high crime rate including armed robbery',
    'Express kidnapping targeting anyone appearing wealthy',
    'Pickpocketing extremely common on public transport',
    'Fake police asking for documents or bribes',
    'Phone snatching is epidemic, especially iPhone theft'
  ],
  attractions: [
    {
      name: 'São Paulo Museum of Art (MASP)',
      safetyScore: 3.8,
      description: 'World-class art museum on Paulista Avenue, safer during day with crowds'
    },
    {
      name: 'Ibirapuera Park',
      safetyScore: 3.5,
      description: 'Large urban park with museums, avoid isolated areas and go during busy times'
    },
    {
      name: 'Historic Center',
      safetyScore: 2.9,
      description: 'Downtown area with architecture and markets, but significant safety concerns'
    },
    {
      name: 'Pinacoteca Museum',
      safetyScore: 3.6,
      description: 'Important art museum in renovated area, use caution traveling to/from'
    },
    {
      name: 'Municipal Market',
      safetyScore: 3.2,
      description: 'Famous food market, busy during day but watch belongings carefully'
    }
  ],
  neighborhoods: [
    {
      name: 'Jardins',
      safetyScore: 4.0,
      description: 'Upscale shopping and dining area, relatively safer with private security'
    },
    {
      name: 'Vila Madalena',
      safetyScore: 3.4,
      description: 'Bohemian neighborhood with nightlife, safer in groups but still use caution'
    },
    {
      name: 'Pinheiros',
      safetyScore: 3.3,
      description: 'Middle-class area with good food scene, reasonable safety during day'
    },
    {
      name: 'Centro',
      safetyScore: 2.6,
      description: 'Historic downtown area, significant safety concerns especially at night'
    }
  ],
  travelTips: [
    'Never carry anything valuable that you can\'t afford to lose',
    'Use hotel safe for passport, extra money, and electronics',
    'Download offline maps to avoid using phone on street',
    'Learn key Portuguese phrases for emergencies',
    'Always use registered taxis or rideshare apps, never street taxis'
  ],
  climate: 'Subtropical highland climate with warm, rainy summers and mild, dry winters',
  currency: 'Brazilian Real (BRL)',
  language: 'Portuguese',
  bestTimeToVisit: 'April-September for drier weather and fewer crowds',
  costLevel: 'Moderate - budget $40-90 per day (varies greatly with exchange rate)',
  internetReliability: 4.0,
  plugType: 'Type C/N (two-pin)',
  timeZone: 'BRT (UTC-3)',
  accessibility: 3.2
};

export default saoPaulo;