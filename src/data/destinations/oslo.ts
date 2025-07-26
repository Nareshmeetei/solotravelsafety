import { Destination } from './types';

const oslo: Destination = {
    city: 'Oslo',
    country: 'Norway',
    continent: 'Europe',
    countryCode: 'no',
    overallScore: 8.4,
    nightSafety: 8.1,
    publicTransit: 8.9,
    walkingAlone: 8.3,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 130,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.9, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.3, context: 'Very safe to walk alone. Norwegian culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Sentrum', 'Frogner', 'Grünerløkka', 'Majorstuen'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Anker Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.1, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'The Thief', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Ruter', 'Google Maps'],
      emergencyPhrases: ['Hjelp (Help)', 'Ring politiet (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112', fire: '110', medical: '113', general: '112'
    },
    currency: {
      name: 'Norwegian Krone', code: 'NOK', exchangeRate: {
      usd: 0.0984,
      eur: 0.0839,
      gbp: 0.0732
    }, scamWarnings: []
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Use Public Transport and Ruter Passes',
        description: 'Oslo\'s public transport is safe, efficient, and covers the whole city. Get a Ruter travel pass for unlimited metro, tram, bus, and ferry rides.',
        severity: 'low',
        sourceName: 'Oslo on a Budget',
        sourceUrl: 'https://www.korttidsleie.net/en/oslo-on-a-budget/'
      },
      {
        title: 'Take Advantage of Free Attractions',
        description: 'Enjoy free sites like Vigeland Park, Akershus Fortress, Slottsparken, and the Botanical Garden. Many of Oslo\'s best experiences are free.',
        severity: 'low',
        sourceName: 'Oslo on a Budget',
        sourceUrl: 'https://www.korttidsleie.net/en/oslo-on-a-budget/'
      },
      {
        title: 'Stay in Safe, Central Neighborhoods',
        description: 'Areas like Sentrum, Frogner, and Grünerløkka are safe, lively, and convenient for solo travelers. Avoid isolated areas late at night.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/norway/oslo'
      },
      {
        title: 'Dress for the Weather and Layer Up',
        description: 'Norway\'s weather can change quickly. Wear layers and bring a waterproof jacket, especially in winter or for outdoor activities.',
        severity: 'low',
        sourceName: 'Fjord Tours',
        sourceUrl: 'https://www.fjordtours.com/en/norway/people-and-culture/solo-womens-travel'
      },
      {
        title: 'Enjoy Oslo\'s Parks and Outdoor Activities',
        description: 'Take advantage of Oslo\'s green spaces, hiking in Nordmarka, or swimming in the Oslofjord during summer. These are safe and social ways to enjoy the city.',
        severity: 'low',
        sourceName: 'Oslo on a Budget',
        sourceUrl: 'https://www.korttidsleie.net/en/oslo-on-a-budget/'
      }
    ],
    languages: ['Norwegian', 'English (widely spoken)'],
    daytimeSafetyPercent: 89.0,
    nighttimeSafetyPercent: 83.0,
    safetySourceName: 'Travel Ladies 2025',
    safetySourceUrl: 'https://travelladies.app/safety/norway/oslo',
    womensConfidenceScore: {
      score: 92.0,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 96,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 90,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 97,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 93,
        source: '',
        sourceUrl: ''
      }
    ],
    // Red flags based on Numbeo 2025, Travel Ladies, and US State Department
    redFlags: [
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Drug Activity in Some Districts',
        frequency: 'Occasional',
        icon: 'Syringe',
      },
      {
        label: 'Nighttime Drunk Behavior',
        frequency: 'Occasional',
        icon: 'Beer',
      },
      {
        label: 'Stabbings or Gang-Related Incidents (Rare)',
        frequency: 'Rare',
        icon: 'PocketKnife',
      },
    ], // Sources: https://www.numbeo.com/crime/in/Oslo, https://travelladies.app/safety/norway/oslo, https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/norway-travel-advisory.html
    culturalDos: [
      'Respect personal space and keep a polite distance.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Use quiet voices in public and on transport.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in nature.",
      "Don't make jokes about Norway's history or politics."
    ]
};

export default oslo;
