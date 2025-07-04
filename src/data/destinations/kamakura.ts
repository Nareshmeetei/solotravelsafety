import { Destination } from './types';

const kamakura: Destination = {
    city: 'Kamakura',
    country: 'Japan',
    continent: 'Asia',
    countryCode: 'jp',
    overallScore: 9.2,
    nightSafety: 9.5,
    publicTransit: 9.8,
    walkingAlone: 8.9,
    tags: ['insider-tips'],
    bgColor: 'bg-purple-50',
    reviewCount: 1200,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.5,
        context: 'Extremely safe at night, even for solo travelers. Well-lit streets and a strong police presence.'
      },
      publicTransit: {
        score: 9.8,
        context: 'World-class public transit system. Trains and subways are safe, clean, and punctual.'
      },
      walkingAlone: {
        score: 8.9,
        context: 'Very safe to walk alone. Occasional staring but harassment is rare.'
      }
    },
    neighborhoods: {
      safe: ['Shibuya', 'Shinjuku', 'Ginza', 'Roppongi', 'Asakusa'],
      caution: ['Kabukicho at night', 'Some nightlife districts'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      {
        name: 'Khaosan Tokyo Origami',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Friendly staff'],
        rating: 4.7,
        notes: 'Popular with solo travelers, safe and clean.'
      },
      {
        name: 'Park Hotel Tokyo',
        type: 'hotel',
        features: ['Luxury hotel', 'Great location', 'English-speaking staff'],
        rating: 4.8,
        notes: 'Excellent safety and amenities.'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress modestly in temples and shrines. Casual wear is fine elsewhere.',
      firstTimers: 'Download Google Maps and Hyperdia apps. Taxis are safe but expensive.',
      apps: ['Google Maps', 'Hyperdia', 'Japan Travel'],
      emergencyPhrases: ['Tasukete (Help)', 'Keisatsu o yonde kudasai (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Modest dress in religious sites. Trendy, casual wear is common in the city.',
      behaviorNorms: ['Respect elders', 'No loud talking on public transport', 'Remove shoes in homes'],
      perception: 'Solo female travelers are common and generally respected. Some staring may occur.'
    },
    bestTimeToVisit: {
      safestMonths: ['March-May', 'September-November'],
      events: 'Cherry blossom season (April), autumn foliage (October-November). Safe year-round.'
    },
    emergencyInfo: {
      police: '110',
      fire: '119',
      medical: '119',
      general: '110'
    },
    currency: {
      name: 'Japanese Yen',
      code: 'JPY',
      exchangeRate: {
        usd: 0.0071,
        eur: 0.0065,
        gbp: 0.0056
      },
      scamWarnings: [
        'Very few scams due to honest culture',
        'Tourist shops may be overpriced - compare prices',
        'Some tour operators may overcharge - book through reputable companies'
      ]
    },
    scamWarnings: [
      {
        title: 'Overpriced Tours',
        description: 'Some tour operators charge significantly more than others for similar experiences',
        severity: 'low'
      },
      {
        title: 'Tourist Shop Markups',
        description: 'Some shops in tourist areas have higher prices for souvenirs',
        severity: 'low'
      }
    ],
    languages: ['Japanese', 'English (major cities)'],
    daytimeSafetyPercent: 92.0, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 78.0, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Tokyo',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Crowded Sites)', frequency: 'Rare', icon: 'Hand' }, // Numbeo 2025, Travel Ladies 2025
      { label: 'Bicycle Theft', frequency: 'Rare', icon: 'Bike' }, // Numbeo 2025
      { label: 'Overpriced Tours & Shops', frequency: 'Rare', icon: 'CreditCard' }, // Travel Ladies 2025
      { label: 'Unwanted Attention (Staring, Photos)', frequency: 'Rare', icon: 'EyeOff' }, // Travel Ladies 2025
    ],
    usefulTips: [
      {
        title: "Use public transport and official taxis",
        description: "Kamakura's trains and buses are safe, punctual, and easy to use. Official taxis are reliable, especially at night or for longer distances.",
        severity: "low",
        sourceName: "Visit Kamakura (Official Tourism)",
        sourceUrl: "https://visit.trip-kamakura.com/"
      },
      {
        title: "Respect local customs at temples and shrines",
        description: "Dress modestly, remove shoes when required, and be quiet and respectful at religious sites. Photography may be restricted in some areas.",
        severity: "low",
        sourceName: "Visit Kamakura (Official Tourism)",
        sourceUrl: "https://visit.trip-kamakura.com/"
      },
      {
        title: "Be cautious at beaches and hiking trails",
        description: "Kamakura's beaches and trails are beautiful but can be crowded in summer. Swim only in designated areas and avoid hiking alone after dark.",
        severity: "low",
        sourceName: "Take Your Backpack (2025)",
        sourceUrl: "https://www.takeyourbackpack.com/backpacking-in-japan/visit-kamakura-beach/"
      },
      {
        title: "Carry cash and use reputable ATMs",
        description: "Many small shops and restaurants in Kamakura accept only cash. Use ATMs at banks or convenience stores for safety.",
        severity: "low",
        sourceName: "Travel Ladies (2025)",
        sourceUrl: "https://travelladies.app/safety/japan/kamakura"
      },
      {
        title: "Learn basic Japanese phrases and etiquette",
        description: "Knowing a few Japanese phrases and local etiquette (like bowing, not talking loudly on transport) will help you navigate and be respected as a solo traveler.",
        severity: "low",
        sourceName: "Travel Ladies (2025)",
        sourceUrl: "https://travelladies.app/safety/japan/kamakura"
      }
    ], // Tips sourced from Visit Kamakura, Take Your Backpack, Travel Ladies (2025)
};

export default kamakura;
