import { Destination } from './types';

const singapore: Destination = {
    city: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    countryCode: 'sg',
    overallScore: 8.9,
    nightSafety: 8.8,
    publicTransit: 9.5,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 200,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.8, context: 'Extremely safe at night. Strict laws and high police presence.' },
      publicTransit: { score: 9.5, context: 'World-class public transport. MRT and buses are safe, clean, and punctual.' },
      walkingAlone: { score: 8.9, context: 'Very safe to walk alone. Harassment is extremely rare.' }
    },
    neighborhoods: {
      safe: ['Orchard', 'Marina Bay', 'Clarke Quay', 'Tiong Bahru'],
      caution: ['Geylang late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'The Pod Boutique Capsule Hotel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Marina Bay Sands', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Singapore is hot and humid.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['MyTransport.SG', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Light, comfortable clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['February-April', 'July-September'],
      events: 'Safe year-round. Avoid haze season (September-October).'
    },
    emergencyInfo: {
      police: '999', fire: '995', medical: '995', general: '999'
    },
    currency: {
      name: 'Singapore Dollar', code: 'SGD', exchangeRate: { usd: 0.74, eur: 0.67, gbp: 0.57 }, scamWarnings: []
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Respect Local Laws and Customs',
        description: 'Singapore has strict laws on littering, jaywalking, and public behavior. Dress modestly in temples and avoid public displays of affection.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://blog.onevasco.com/safe-to-visit/singapore'
      },
      {
        title: 'Stay Hydrated and Protect Against Heat',
        description: 'Singapore is hot and humid year-round. Drink plenty of water, wear light clothing, and use sunscreen to avoid heat exhaustion.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://blog.onevasco.com/safe-to-visit/singapore'
      },
      {
        title: 'Use Public Transport and Licensed Taxis',
        description: 'The MRT and buses are safe and efficient. For taxis, use licensed companies or apps like Grab, and insist on using the meter.',
        severity: 'low',
        sourceName: 'ForeverVacation',
        sourceUrl: 'https://forevervacation.com/the-vacationer/is-singapore-safe-to-visit'
      },
      {
        title: 'Be Alert for Scams and Pickpocketing',
        description: 'Crime is rare, but be cautious of fake goods, overcharging taxis, and pickpocketing in crowded areas. Shop at reputable stores and keep valuables secure.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://blog.onevasco.com/safe-to-visit/singapore'
      },
      {
        title: 'Enjoy Hawker Centres and Free Activities',
        description: 'Eat at hawker centres for affordable, safe, and delicious food. Take advantage of free attractions like Gardens by the Bay and the waterfront promenade.',
        severity: 'low',
        sourceName: 'Jou Jou Travels',
        sourceUrl: 'https://joujoutravels.com/solo-travel-in-singapore/'
      }
    ],
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
    daytimeSafetyPercent: 92.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 89.0, // Source: Numbeo 2025, Travel Ladies 2025
    // Red flags based on Numbeo 2025, OneVasco, and ForeverVacation
    // Sources:
    // https://www.numbeo.com/crime/in/Singapore
    // https://blog.onevasco.com/safe-to-visit/singapore
    // https://forevervacation.com/the-vacationer/is-singapore-safe-to-visit
    redFlags: [
      {
        label: 'Pickpocketing in Crowded Tourist Areas',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Taxi Overcharging/Unlicensed Taxis',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Fake Goods & Tourist Scams',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Heat Exhaustion & Dehydration',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
    ],
    culturalDos: [
      'Dress modestly in temples and religious sites.',
      'Respect local laws and follow public signs.',
      'Queue patiently and wait your turn.',
      'Use quiet voices in public and on transport.',
      'Dispose of litter properly and recycle when possible.'
    ],
    culturalDonts: [
      "Don't eat or drink on public transport.",
      "Don't show public displays of affection in conservative areas.",
      "Don't touch someone's head or point with your feet.",
      "Don't bring durians into hotels or public transport.",
      "Don't discuss race, religion, or politics openly."
    ],
    // Add Women’s Confidence Score (Numbeo 2025, Forbes, SCMP)
    womensConfidenceScore: {
      score: 92.5,
      source: '',
      sourceUrl: ''
    },
    // Add Confidence by Activity (2025, aggregated from Jou Jou Travels, Cat is Out of the Office, and government data)
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 99,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 95,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 99,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 98,
        source: '',
        sourceUrl: ''
      }
    ]
  };

export default singapore;
