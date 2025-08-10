import { Destination } from './types';

const athens: Destination = {
  id: 'athens-greece',
  city: 'Athens',
  country: 'Greece',
  continent: 'Europe',
  countryCode: 'gr',
  description: 'The cradle of Western civilization offers ancient history and vibrant modern culture, with generally good safety for solo female travelers.',
  safetyScore: 4.0,
  scores: {
    overall: 4.0,
    nightSafety: 3.7,
    publicTransport: 3.9,
    walkingAlone: 3.9,
    emergencyServices: 4.2
  },
  genderSafetyScore: 3.9,
  lgbtqSafetyScore: 4.1,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Greek Orthodox traditions influence daily life',
    'Afternoon siesta affects shop hours (2-5 PM)',
    'Greeks are warm, hospitable, and family-oriented',
    'Late dining culture (9-11 PM) and vibrant nightlife'
  ],
  safetyTips: [
    'Be cautious of pickpockets in tourist areas and on public transport',
    'Avoid certain neighborhoods like Omonia late at night',
    'Watch for aggressive street vendors near attractions',
    'Be careful when walking on uneven ancient pavements',
    'Keep valuables secure, especially around crowded archaeological sites'
  ],
  emergencyContacts: {
    police: '100',
    fire: '199',
    ambulance: '166',
    touristHelpline: '+30 171'
  },
  healthcareInfo: {
    qualityOfCare: 4.3,
    hospitalAvailability: 4.1,
    pharmacyAvailability: 4.4,
    emergencyResponseTime: 4.0
  },
  transportation: {
    publicTransportQuality: 3.9,
    publicTransportSafety: 3.8,
    walkability: 4.1,
    cyclingFriendliness: 3.4,
    rideShareAvailability: 3.8
  },
  accommodations: {
    hotelSafety: 4.2,
    hostelSafety: 4.0,
    airbnbRegulations: 'Regulated with tourist tax and registration requirements',
    recommendedAreas: [
      'Plaka - historic neighborhood below the Acropolis',
      'Kolonaki - upscale area with boutiques and cafes',
      'Monastiraki - vibrant area near ancient agora',
      'Syntagma - central square area near parliament',
      'Koukaki - trendy residential area near Acropolis Museum'
    ]
  },
  localLaws: [
    'Drinking age is 18, widely available',
    'Smoking banned in enclosed public spaces (often ignored)',
    'Modest dress required when visiting Orthodox churches',
    'Tipping is customary (5-10% at restaurants)',
    'Public drinking generally accepted in designated areas'
  ],
  culturalNorms: [
    'Greeks are expressive and talk with their hands',
    'Family is extremely important in Greek culture',
    'Lunch is late (2-3 PM), dinner even later (9-11 PM)',
    'Coffee culture is strong - frappe is traditional',
    'Personal space is smaller than in Northern European cultures'
  ],
  redFlags: [
    'Pickpockets active in metro and tourist areas',
    'Some taxi drivers overcharge tourists',
    'Aggressive street vendors near major attractions',
    'Economic hardship has increased petty crime',
    'Omonia and surrounding areas less safe at night'
  ],
  attractions: [
    {
      name: 'Acropolis',
      safetyScore: 4.3,
      description: 'Ancient citadel and UNESCO site, well-secured but watch footing on marble steps'
    },
    {
      name: 'Acropolis Museum',
      safetyScore: 4.5,
      description: 'Modern museum with excellent security and climate control'
    },
    {
      name: 'Ancient Agora',
      safetyScore: 4.2,
      description: 'Historic marketplace, generally safe archaeological site with guards'
    },
    {
      name: 'National Archaeological Museum',
      safetyScore: 4.4,
      description: 'World-class museum, safe but in area requiring caution at night'
    },
    {
      name: 'Plaka District',
      safetyScore: 4.1,
      description: 'Historic neighborhood with shops and restaurants, generally safe but touristy'
    }
  ],
  neighborhoods: [
    {
      name: 'Plaka',
      safetyScore: 4.2,
      description: 'Historic area below Acropolis, touristy but safe with police presence'
    },
    {
      name: 'Kolonaki',
      safetyScore: 4.4,
      description: 'Upscale neighborhood with embassies and boutiques, very safe'
    },
    {
      name: 'Koukaki',
      safetyScore: 4.0,
      description: 'Trendy area popular with young locals, generally safe and authentic'
    },
    {
      name: 'Omonia',
      safetyScore: 3.2,
      description: 'Central square area with some safety concerns, especially at night'
    }
  ],
  travelTips: [
    'Buy combination tickets for multiple archaeological sites',
    'Learn a few Greek phrases - locals appreciate the effort',
    'Carry cash as some places don\'t accept cards',
    'Visit major sites early morning or late afternoon to avoid crowds',
    'Try traditional tavernas away from main tourist areas'
  ],
  climate: 'Mediterranean climate with hot, dry summers and mild, wet winters',
  currency: 'Euro (EUR)',
  language: 'Greek (English spoken in tourist areas)',
  bestTimeToVisit: 'April-June and September-October for pleasant weather',
  costLevel: 'Moderate - budget €50-90 per day',
  internetReliability: 4.2,
  plugType: 'Type C/F (two-pin)',
  timeZone: 'EET/EEST',
  accessibility: 3.6
};

export default athens;