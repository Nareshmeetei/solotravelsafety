import { Destination } from './types';

const rome: Destination = {
  id: 'rome-italy',
  city: 'Rome',
  country: 'Italy',
  continent: 'Europe',
  description: 'The Eternal City combines ancient history with modern Italian culture, offering solo female travelers incredible experiences with reasonable safety precautions.',
  safetyScore: 4.1,
  scores: {
    overall: 4.1,
    nightSafety: 3.8,
    publicTransport: 3.9,
    walkingAlone: 4.0,
    emergencyServices: 4.4
  },
  genderSafetyScore: 4.0,
  lgbtqSafetyScore: 4.3,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Italian culture is warm and expressive',
    'Dress modestly when visiting churches and religious sites',
    'Afternoon siesta time affects shop hours (1-4 PM)',
    'Evening dining starts late (8-10 PM)'
  ],
  safetyTips: [
    'Be extra vigilant around tourist attractions for pickpockets',
    'Avoid isolated areas near Termini Station at night',
    'Keep bags zipped and in front of you on public transport',
    'Be cautious of fake police asking for documents',
    'Watch for distraction techniques used by thieves'
  ],
  emergencyContacts: {
    police: '113',
    fire: '115',
    ambulance: '118',
    touristHelpline: '+39 06 0608'
  },
  healthcareInfo: {
    qualityOfCare: 4.5,
    hospitalAvailability: 4.3,
    pharmacyAvailability: 4.4,
    emergencyResponseTime: 4.2
  },
  transportation: {
    publicTransportQuality: 3.9,
    publicTransportSafety: 3.8,
    walkability: 4.2,
    cyclingFriendliness: 3.5,
    rideShareAvailability: 4.1
  },
  accommodations: {
    hotelSafety: 4.3,
    hostelSafety: 4.0,
    airbnbRegulations: 'Regulated with tourist tax and registration requirements',
    recommendedAreas: [
      'Trastevere - charming neighborhood with cobblestone streets',
      'Monti - trendy area near Colosseum, good restaurants',
      'Spanish Steps area - upscale, central location',
      'Vatican area - safe, near major attractions',
      'Campo de\' Fiori - lively area with markets and nightlife'
    ]
  },
  localLaws: [
    'Drinking age is 18, but enforcement is relaxed',
    'Smoking banned in enclosed public spaces',
    'Modest dress required in churches (covered shoulders/knees)',
    'Public drinking allowed but avoid excessive consumption',
    'Jaywalking is common but technically illegal'
  ],
  culturalNorms: [
    'Greet with "Buongiorno" (morning) or "Buonasera" (evening)',
    'Italians speak with hands and are expressive',
    'Coffee culture is strong - cappuccino only in morning',
    'Tipping is not mandatory but round up bills',
    'Dress well - appearance matters in Italian culture'
  ],
  redFlags: [
    'Pickpockets very active around Colosseum, Trevi Fountain, Vatican',
    'Fake petition scams near tourist sites',
    'Overcharging at restaurants near major attractions',
    'Unlicensed taxi drivers around airports and stations',
    'Distraction theft techniques (spilled liquid, fake accidents)'
  ],
  attractions: [
    {
      name: 'Colosseum',
      safetyScore: 4.2,
      description: 'Ancient amphitheater with heavy tourist presence, watch for pickpockets in crowds'
    },
    {
      name: 'Vatican City',
      safetyScore: 4.5,
      description: 'Papal state with excellent security, dress code strictly enforced'
    },
    {
      name: 'Trevi Fountain',
      safetyScore: 3.9,
      description: 'Iconic fountain but extremely crowded, prime pickpocket location'
    },
    {
      name: 'Roman Forum',
      safetyScore: 4.3,
      description: 'Ancient ruins with controlled access, generally safe during operating hours'
    },
    {
      name: 'Pantheon',
      safetyScore: 4.4,
      description: 'Well-preserved temple in busy piazza, good police presence'
    }
  ],
  neighborhoods: [
    {
      name: 'Trastevere',
      safetyScore: 4.2,
      description: 'Bohemian neighborhood across Tiber, safe but can be lively at night'
    },
    {
      name: 'Monti',
      safetyScore: 4.3,
      description: 'Hip area near Colosseum with boutiques and restaurants, generally safe'
    },
    {
      name: 'Centro Storico',
      safetyScore: 4.0,
      description: 'Historic center with major sights, crowded but well-patrolled'
    },
    {
      name: 'Testaccio',
      safetyScore: 4.1,
      description: 'Authentic Roman neighborhood, safe with great local food scene'
    }
  ],
  travelTips: [
    'Book skip-the-line tickets for major attractions in advance',
    'Carry a copy of your passport, not the original',
    'Learn basic Italian phrases - locals appreciate the effort',
    'Validate train/metro tickets to avoid fines',
    'Eat where locals eat for authentic experience and better prices'
  ],
  climate: 'Mediterranean climate with hot, dry summers and mild winters',
  currency: 'Euro (EUR)',
  language: 'Italian',
  bestTimeToVisit: 'April-June and September-October for pleasant weather and fewer crowds',
  costLevel: 'Moderate to expensive - budget €70-140 per day',
  internetReliability: 4.3,
  plugType: 'Type C/F/L (two/three-pin)',
  timeZone: 'CET/CEST',
  accessibility: 3.8
};

export default rome;