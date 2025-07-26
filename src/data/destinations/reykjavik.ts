import { Destination } from './types';

const reykjavik: Destination = {
    city: 'Reykjavik',
    country: 'Iceland',
    continent: 'Europe',
    countryCode: 'is',
    overallScore: 9.4,
    nightSafety: 9.6,
    publicTransit: 8.8,
    walkingAlone: 9.7,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 234,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.6,
        context: 'Extremely safe at all hours. Very low crime rates, well-lit streets, and respectful culture. Even downtown nightlife areas are safe.'
      },
      publicTransit: {
        score: 8.8,
        context: 'Limited public transport but very safe. Most areas are walkable. Taxis are reliable and safe.'
      },
      walkingAlone: {
        score: 9.7,
        context: 'One of the safest places in the world for solo female travelers. Respectful culture with virtually no harassment.'
      }
    },
    neighborhoods: {
      safe: ['City Center', 'Old Town', 'Laugavegur', 'Perlan area', 'Hallgrimskirkja area'],
      caution: ['None - entire city is very safe'],
      avoid: ['None - no dangerous areas']
    },
    accommodations: [
      {
        name: 'Kex Hostel',
        type: 'hostel',
        features: ['Mixed and female dorms', 'Central location', 'Unique atmosphere'],
        rating: 4.5,
        notes: 'Converted biscuit factory with great vibe and helpful staff'
      },
      {
        name: 'Hotel Borg',
        type: 'hotel',
        features: ['Luxury hotel', 'Historic building', 'Central location'],
        rating: 4.7,
        notes: 'Art Deco hotel in the heart of Reykjavik with excellent service'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly! Weather can change quickly. Waterproof clothing essential.',
      firstTimers: 'Very easy for beginners. English widely spoken. Expensive but very safe.',
      apps: ['Vedur (weather)', 'Straeto (bus)', 'SafeTravel Iceland'],
      emergencyPhrases: ['Hjálp (Help)', 'Hringdu í lögregluna (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. Casual dress is normal.',
      behaviorNorms: ['Remove shoes when entering homes', 'Respect nature', 'Quiet, reserved culture'],
      perception: 'Solo female travelers are very common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August (warmest)', 'September-March (Northern Lights)'],
      events: 'Summer for hiking, winter for Northern Lights. Always safe regardless of season.'
    },
    emergencyInfo: {
      police: '112',
      fire: '112',
      medical: '112',
      general: '112'
    },
    currency: {
      name: 'Icelandic Króna',
      code: 'ISK',
      exchangeRate: {
      usd: 0.0082,
      eur: 0.0070,
      gbp: 0.0061
    },
      scamWarnings: []
    },
    languages: ['Icelandic', 'English (widely spoken)'],
    daytimeSafetyPercent: 95.0, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 92.0, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Reykjavik',
    // Red flags based on Numbeo 2025, Intrepid Travel, and Reykjavik Out
    // Sources:
    // https://www.numbeo.com/crime/in/Reykjavik
    // https://www.intrepidtravel.com/us/iceland/is-it-safe-to-travel-to-iceland
    // https://reykjavikout.is/guide/travel/is-it-safe-to-travel-in-iceland-in-2025/
    redFlags: [
      {
        label: 'Unpredictable Weather & Sudden Storms',
        frequency: 'Frequent',
        icon: 'AlertTriangle',
      },
      {
        label: 'Slippery Surfaces & Black Ice (Winter)',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
      {
        label: 'Overpriced Tourist Shops/Tours',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Nightlife Drunk Behavior (Downtown)',
        frequency: 'Occasional',
        icon: 'Beer',
      },
    ],
    usefulTips: [
      {
        title: 'Check Weather and Road Conditions Daily',
        description: 'Iceland\'s weather can change rapidly. Always check the Icelandic Met Office and road.is before heading out, especially for day trips or driving.',
        severity: 'low',
        sourceName: 'Intrepid Travel',
        sourceUrl: 'https://www.intrepidtravel.com/us/iceland/is-it-safe-to-travel-to-iceland'
      },
      {
        title: 'Dress in Layers and Pack Waterproofs',
        description: 'Bring waterproof and windproof clothing, thermal layers, and sturdy boots. Weather can shift from sun to sleet in minutes.',
        severity: 'low',
        sourceName: 'Visit Iceland',
        sourceUrl: 'https://www.visiticeland.com/article/what-to-wear-in-iceland/'
      },
      {
        title: 'Download the 112 Emergency App',
        description: 'The 112 Iceland app lets you quickly contact emergency services and share your location if you need help anywhere in Iceland.',
        severity: 'low',
        sourceName: 'Intrepid Travel',
        sourceUrl: 'https://www.intrepidtravel.com/us/iceland/is-it-safe-to-travel-to-iceland'
      },
      {
        title: 'Stay on Marked Trails and Respect Nature',
        description: 'Iceland\'s natural sites can be hazardous. Always follow signs, stay on marked paths, and avoid risky areas like geysers and black sand beaches during rough surf.',
        severity: 'low',
        sourceName: 'Intrepid Travel',
        sourceUrl: 'https://www.intrepidtravel.com/us/iceland/is-it-safe-to-travel-to-iceland'
      },
      {
        title: 'Use Day Tours for Exploring Beyond Reykjavik',
        description: 'If you\'re not comfortable driving in Iceland\'s conditions, join organized day tours. It\'s safer and more social for solo travelers.',
        severity: 'low',
        sourceName: 'Cat is Out of the Office',
        sourceUrl: 'https://catisoutoftheoffice.com/safest-countries-for-solo-female-travelers/'
      }
    ],
    culturalDos: [
      'Remove shoes when entering homes.',
      'Dress warmly and practically for the weather.',
      'Respect nature and stay on marked paths.',
      'Be punctual for tours and activities.',
      'Use quiet voices in public and respect personal space.'
    ],
    culturalDonts: [
      "Don't litter or disturb natural sites.",
      "Don't walk on private property or fenced areas.",
      "Don't make jokes about elves or local beliefs.",
      "Don't ask personal questions on first meeting.",
      "Don't haggle over prices—prices are fixed."
    ],
    scamWarnings: [],
    womensConfidenceScore: {
      score: 75.8,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 98,
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
        confidence: 97,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 99,
        source: '',
        sourceUrl: ''
      }
    ],
};

export default reykjavik;
