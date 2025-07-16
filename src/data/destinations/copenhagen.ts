import { Destination } from './types';

const copenhagen: Destination = {
    city: 'Copenhagen',
    country: 'Denmark',
    continent: 'Europe',
    countryCode: 'dk',
    overallScore: 8.9,
    nightSafety: 8.7,
    publicTransit: 9.2,
    walkingAlone: 9.1,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 334,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.7, context: 'Very safe at night in most areas. Well-lit streets and low crime rates. Nørrebro can be livelier but still generally safe.' },
      publicTransit: { score: 9.2, context: 'Excellent public transport system. Buses and metro are clean, punctual, and very safe even late at night.' },
      walkingAlone: { score: 9.1, context: 'Extremely safe to walk alone. Danish culture is very respectful and harassment is rare.' }
    },
    neighborhoods: {
      safe: ['Indre By (City Center)', 'Vesterbro', 'Østerbro', 'Frederiksberg', 'Nyhavn'],
      caution: ['Some parts of Nørrebro late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Generator Copenhagen', type: 'hostel', features: ['Female-only dorms', 'Central location', 'Modern facilities'], rating: 4.4, notes: 'Stylish hostel with great common areas and helpful staff' },
      { name: 'Hotel d\'Angleterre', type: 'hotel', features: ['Luxury hotel', 'Historic building', 'Prime location'], rating: 4.9, notes: 'Prestigious hotel with excellent security and world-class service' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Casual, comfortable clothing. Danes dress stylishly but practically.',
      firstTimers: 'Very easy city for first-time visitors. Most people speak excellent English.',
      apps: ['DOT Tickets', 'Citymapper', 'Copenhagen Card'],
      emergencyPhrases: ['Hjælp (Help)', 'Ring til politiet (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Direct communication style', 'Punctuality is important', 'Cycling culture'],
      perception: 'Solo female travelers are completely normal and common.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months are ideal. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '114', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Danish Krone', code: 'DKK', exchangeRate: { usd: 0.15, eur: 0.13, gbp: 0.11 }, scamWarnings: []
    },
    usefulTips: [
      {
        title: 'Use Public Transport and Licensed Taxis',
        description: 'Copenhagen\'s metro, buses, and trains are safe and run 24/7. Avoid unmarked taxis and use official apps or licensed cabs.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is rare but can occur in busy tourist spots and on public transport. Keep valuables secure and use anti-theft bags.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      },
      {
        title: 'Explore by Bike, but Follow Local Rules',
        description: 'Copenhagen is extremely bike-friendly. Rent a bike to explore, but always use bike lanes and follow traffic signals.',
        severity: 'low',
        sourceName: 'Alyssa O Writes',
        sourceUrl: 'https://alyssaowrites.com/solo-travel-copenhangen/'
      },
      {
        title: 'Avoid Unlit Areas Late at Night',
        description: 'The city is safe, but it\'s best to avoid poorly lit alleys or parks late at night. Stick to well-traveled streets.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        title: 'Trust Your Instincts and Stay in Central Neighborhoods',
        description: 'Areas like Indre By, Vesterbro, and Østerbro are safe and lively. If something feels off, move to a busier area or seek help.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      }
    ],
    languages: ['Danish', 'English (widely spoken)'],
    daytimeSafetyPercent: 91.0, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 85.5, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Copenhagen',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Occasional', icon: 'Hand' }, // Numbeo 2025, Travel Ladies 2025, OneVasco 2025
      { label: 'Currency Exchange Scams', frequency: 'Rare', icon: 'Shield' }, // OneVasco 2025
      { label: 'Taxi Overcharging', frequency: 'Rare', icon: 'Car' }, // OneVasco 2025
      { label: 'Fake Tour Guides', frequency: 'Rare', icon: 'Users' }, // OneVasco 2025
    ],
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Can occur in busy tourist areas and on public transport. Keep valuables secure.', severity: 'low' },
      { title: 'Currency Exchange Scams', description: 'Avoid exchanging money with street vendors. Use official banks or ATMs.', severity: 'low' },
      { title: 'Taxi Overcharging', description: 'Use only licensed taxis or official apps to avoid being overcharged.', severity: 'low' },
      { title: 'Fake Tour Guides', description: 'Book tours through reputable companies to avoid scams.', severity: 'low' }
    ],
    culturalDos: [
      'Use public transport and licensed taxis.',
      'Explore by bike and follow local rules.',
      'Keep valuables secure in crowds.',
      'Stay in central, well-lit neighborhoods.',
      'Trust your instincts and ask for help if needed.'
    ],
    culturalDonts: [
      "Don't use unmarked taxis.",
      "Don't leave valuables unattended.",
      "Don't walk in unlit areas late at night.",
      "Don't ignore bike lane rules.",
      "Don't exchange money with street vendors."
    ],
    womensConfidenceScore: {
      score: 73.8, // Numbeo 2025 Safety Index for Copenhagen
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Copenhagen"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 94,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        label: 'Nightlife',
        confidence: 85,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        label: 'Public Transport',
        confidence: 96,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        label: 'Dining Alone',
        confidence: 92,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      }
    ],
};

export default copenhagen;
