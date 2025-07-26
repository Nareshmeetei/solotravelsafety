import { Destination } from './types';

const kyoto: Destination = {
    city: 'Kyoto',
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
    lastUpdated: '1 day ago',
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
        safe: ['Gion', 'Arashiyama', 'Higashiyama', 'Kiyomizu-dera area', 'Fushimi Inari'],
        caution: ['Some nightlife districts'],
        avoid: ['None - city is very safe overall']
      },
      accommodations: [
        {
          name: 'Kyoto Hana Hostel',
          type: 'hostel',
          features: ['Female dorms', 'Central location', 'Friendly staff'],
          rating: 4.7,
          notes: 'Popular with solo travelers, safe and clean.'
        },
        {
          name: 'Hotel Granvia Kyoto',
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
      usd: 0.0068,
      eur: 0.0058,
      gbp: 0.0050
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
    daytimeSafetyPercent: 89.1, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 82.9, // Source: Numbeo 2025, Travel Ladies 2025
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Rare', icon: 'Hand' }, // Numbeo 2025, Travel Ladies 2025
      { label: 'Bicycle Theft', frequency: 'Rare', icon: 'Bike' }, // Numbeo 2025
      { label: 'Overpriced Tours & Shops', frequency: 'Rare', icon: 'CreditCard' }, // Travel Ladies 2025
      { label: 'Unwanted Attention (Staring, Photos)', frequency: 'Rare', icon: 'EyeOff' }, // Travel Ladies 2025
    ],
    usefulTips: [
      {
        title: "Stay in female-friendly hostels or ryokan",
        description: "Kyoto offers many hostels and ryokan with female-only dorms and high safety standards. Look for places with good reviews and secure access.",
        severity: "low",
        sourceName: "Hostelz.com (2025)",
        sourceUrl: "https://www.hostelz.com/best-hostels-in-kyoto-for-solo-female-travelers"
      },
      {
        title: "Use public transport and avoid deserted areas at night",
        description: "Kyoto's buses and trains are safe and reliable. Stick to well-lit, busy streets at night and avoid isolated parks or alleys.",
        severity: "low",
        sourceName: "Travel Ladies (2025)",
        sourceUrl: "https://travelladies.app/safety/japan/kyoto"
      },
      {
        title: "Respect local customs at temples and shrines",
        description: "Dress modestly, remove shoes when required, and be quiet and respectful at religious sites. Photography may be restricted in some areas.",
        severity: "low",
        sourceName: "Kyoto City Official Guide (2025)",
        sourceUrl: "https://www.kyoto.travel/en/"
      },
      {
        title: "Carry cash and use reputable ATMs",
        description: "Many small shops and restaurants in Kyoto accept only cash. Use ATMs at banks or convenience stores for safety.",
        severity: "low",
        sourceName: "Travel Ladies (2025)",
        sourceUrl: "https://travelladies.app/safety/japan/kyoto"
      },
      {
        title: "Prepare for natural disasters and emergencies",
        description: "Check weather forecasts, know evacuation routes, and keep emergency contacts handy. Download the JNTO Safety Tips app for real-time alerts.",
        severity: "low",
        sourceName: "Kyoto City Official Guide (2025)",
        sourceUrl: "https://kyoto.travel/en/see-and-do/disaster_safetytips.html"
      }
    ], // Tips sourced from Hostelz.com, Travel Ladies, Kyoto City Official Guide (2025)
    culturalDos: [
      'Dress modestly at temples and shrines.',
      'Remove shoes when entering homes or temples.',
      'Speak quietly in public and on transport.',
      'Respect local customs and bow when greeting.',
      'Ask before taking photos of people or religious sites.'
    ],
    culturalDonts: [
      "Don't talk loudly or make phone calls on public transport.",
      "Don't eat or drink while walking in public.",
      "Don't touch or point at religious objects.",
      "Don't enter private areas of temples or shrines.",
      "Don't ignore etiquette signs or instructions."
    ],
    womensConfidenceScore: {
      score: 77.1, // Numbeo 2025 Safety Index for Japan (Kyoto aligns with national average)
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/rankings_by_country.jsp?title=2025"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 95,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        label: 'Nightlife',
        confidence: 85,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        label: 'Public Transport',
        confidence: 97,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        label: 'Dining Alone',
        confidence: 93,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-in-japan/'
      }
    ],
  };

export default kyoto;
