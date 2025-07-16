import { Destination } from './types';

const dublin: Destination = {
    city: 'Dublin',
    country: 'Ireland',
    continent: 'Europe',
    countryCode: 'ie',
    overallScore: 8.4,
    nightSafety: 8.0,
    publicTransit: 8.6,
    walkingAlone: 8.2,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 120,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.0, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.6, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.2, context: 'Very safe to walk alone. Irish culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Temple Bar', 'Ballsbridge', 'Ranelagh', 'Docklands'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Generator Dublin', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'The Shelbourne Dublin', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Ireland can be rainy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Dublin Bus', 'Luas', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Irish'],
    daytimeSafetyPercent: 78.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Dublin)
    nighttimeSafetyPercent: 54.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Dublin)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Dublin',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, U30X 2025
      { label: 'Drug Activity & Dealing', frequency: 'Frequent', icon: 'Syringe' }, // Numbeo 2025
      { label: 'ATM/Card Skimming', frequency: 'Occasional', icon: 'CreditCard' }, // OneVasco 2025
      { label: 'Overcharging Taxi Drivers', frequency: 'Occasional', icon: 'Car' }, // OneVasco 2025
    ],
    usefulTips: [
      {
        title: "Stay in safe, central neighborhoods",
        description: "Choose accommodation in areas like Ballsbridge, Donnybrook, or Temple Bar for convenience and safety. Avoid poorly lit or isolated areas at night.",
        severity: "low",
        sourceName: "Go-to-Ireland.com Safety Guide",
        sourceUrl: "https://www.go-to-ireland.com/travel-organization/safety-dublins-safe-neighbourhoods/"
      },
      {
        title: "Be vigilant for pickpockets in tourist areas",
        description: "Pickpocketing is rare but can occur in crowded spots like Temple Bar, O'Connell Street, and on public transport. Keep your belongings secure and use anti-theft bags.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      },
      {
        title: "Use official taxis or ride-hailing apps",
        description: "Avoid unmarked taxis. Use reputable apps like Free Now or book through your hotel. Always check the meter is running to avoid overcharging.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      },
      {
        title: "Dress for the weather and carry rain protection",
        description: "Dublin weather is unpredictable and rain is common. Carry a compact umbrella or waterproof jacket, and wear layers for comfort.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      },
      {
        title: "Respect local customs and avoid sensitive topics",
        description: "Irish people are friendly and polite. Avoid discussing sensitive topics like Northern Ireland or Brexit unless invited. A friendly greeting goes a long way.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      }
    ], // Tips sourced from Go-to-Ireland.com, OneVasco, 2025
    culturalDos: [
      'Greet with a friendly hello and make eye contact.',
      'Join in local conversation and humor—Irish are chatty.',
      'Queue patiently and respect personal space.',
      'Dress smart-casual; blend in with locals.',
      'Thank bus drivers and service staff.'
    ],
    culturalDonts: [
      "Don't joke about Irish history, religion, or accents.",
      "Don't speak loudly or draw attention in public.",
      "Don't refuse hospitality abruptly—decline politely.",
      "Don't take photos of people or in pubs without asking.",
      "Don't discuss money, religion, or politics openly."
    ],
    womensConfidenceScore: {
      score: 47.0, // Numbeo 2025 Safety Index for Dublin
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Dublin"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 80,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/ireland/dublin'
      },
      {
        label: 'Nightlife',
        confidence: 60,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/ireland/dublin'
      },
      {
        label: 'Public Transport',
        confidence: 75,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/ireland/dublin'
      },
      {
        label: 'Dining Alone',
        confidence: 85,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-dublin-safe-for-solo-female-travelers/'
      }
    ],
};

export default dublin;
