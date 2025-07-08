import { Destination } from './types';

const wellington: Destination = {
    city: 'Wellington',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 110,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Kiwi culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Te Aro', 'Mount Victoria', 'Kelburn', 'Thorndon'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'YHA Wellington', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.2, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'InterContinental Wellington', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Wellington can be windy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Metlink', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but windy.'
    },
    emergencyInfo: {
      police: '111', fire: '111', medical: '111', general: '111'
    },
    currency: {
      name: 'New Zealand Dollar', code: 'NZD', exchangeRate: { usd: 0.62, eur: 0.56, gbp: 0.48 }, scamWarnings: [],
    },
    usefulTips: [
      {
        title: 'Be Prepared and Upskill for Outdoor Activities',
        description: 'Wellington is a gateway to outdoor adventures. Always prepare thoroughly, check weather, and upskill in navigation and safety before hiking or tramping.',
        severity: 'low',
        sourceName: 'NZ Mountain Safety Council',
        sourceUrl: 'https://www.mountainsafety.org.nz/read/a-womans-guide-to-solo-tramping-in-nz'
      },
      {
        title: 'Keep Valuables Hidden in Cars and Accommodations',
        description: 'Car break-ins can occur, especially at trailheads and remote parking. Hide valuables and never leave them in sight.',
        severity: 'low',
        sourceName: 'Petrina Darrah',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        title: 'Use Public Transport and Trusted Rideshares',
        description: 'Wellington\'s public transport is safe and reliable. For taxis or rideshares, use licensed providers and share your ride details with someone you trust.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/new-zealand/wellington'
      },
      {
        title: 'Trust Your Instincts and Choose Well-Lit Areas at Night',
        description: 'Wellington is generally safe, but avoid poorly lit or deserted areas at night. Trust your instincts and stay in busy, central neighborhoods.',
        severity: 'low',
        sourceName: 'Petrina Darrah',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        title: 'Leave Your Itinerary with Someone and Carry Emergency Contacts',
        description: 'Always let someone know your plans, especially for outdoor activities. Carry emergency contacts and consider a personal locator beacon for remote trips.',
        severity: 'low',
        sourceName: 'NZ Mountain Safety Council',
        sourceUrl: 'https://www.mountainsafety.org.nz/read/a-womans-guide-to-solo-tramping-in-nz'
      }
    ],
    languages: ['English', 'Maori'],
    daytimeSafetyPercent: 85.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Wellington)
    nighttimeSafetyPercent: 67.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Wellington)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Wellington',
    // Red flags based on Numbeo 2025, Petrina Darrah, and local advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Wellington
    // https://www.petrinadarrah.com/posts/safety-in-new-zealand
    // https://www.godigit.com/international-travel-insurance/tourist-scams/tourist-scams-in-new-zealand
    redFlags: [
      {
        label: 'Car Break-ins & Theft (Rental Cars, Trailheads)',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Petty Theft & Pickpocketing (Tourist Areas)',
        frequency: 'Rare',
        icon: 'Hand',
      },
      {
        label: 'Nightlife Drunk Behavior (Downtown, Waterfront)',
        frequency: 'Rare',
        icon: 'Beer',
      },
      {
        label: 'Earthquakes & Natural Disasters',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      }
    ],
    culturalDos: [
      'Greet with a friendly "Kia ora" or "Hello."',
      'Respect Maori culture and learn basic phrases.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about New Zealand's history or politics."
    ],
    scamWarnings: []
  };

export default wellington;
