import { Destination } from './types';

const osaka: Destination = {
    city: 'Osaka',
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
        safe: ['Dotonbori', 'Namba', 'Umeda', 'Shinsaibashi', 'Osaka Castle area'],
        caution: ['Some nightlife districts'],
        avoid: ['None - city is very safe overall']
      },
      accommodations: [
        {
          name: 'Osaka Hana Hostel',
          type: 'hostel',
          features: ['Female dorms', 'Central location', 'Friendly staff'],
          rating: 4.7,
          notes: 'Popular with solo travelers, safe and clean.'
        },
        {
          name: 'Hotel Granvia Osaka',
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
    daytimeSafetyPercent: 88.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 80.2, // Source: Numbeo 2025, Travel Ladies 2025
    // Red flags based on Numbeo 2025, Travel Ladies, and HiTopTourism
    redFlags: [
      {
        label: 'Pickpocketing in Crowded Areas',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Scams (Nightlife, Fake Police, Overcharging)',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Organized Crime (Yakuza Presence)',
        frequency: 'Rare',
        icon: 'Users',
      },
      {
        label: 'Staring or Unwanted Attention',
        frequency: 'Rare',
        icon: 'EyeOff',
      },
    ], // Sources: https://www.numbeo.com/crime/in/Osaka, https://travelladies.app/safety/japan, https://hitoptourism.com/the-10-top-dangerous-cities-in-japan/
    usefulTips: [
      {
        title: "Stay alert in crowded areas like Dotonbori and Namba",
        description: "Pickpocketing can occur in busy tourist spots. Keep your belongings secure and avoid displaying valuables.",
        severity: "medium",
        sourceName: "Travel Ladies Osaka Safety Guide",
        sourceUrl: "https://travelladies.app/safety/japan/osaka"
      },
      {
        title: "Use official taxis or reputable rideshare apps at night",
        description: "Avoid unlicensed taxis and always use official taxi stands or apps like JapanTaxi for safe late-night travel.",
        severity: "low",
        sourceName: "The Kansai Guide - Safe Travel",
        sourceUrl: "https://www.the-kansai-guide.com/en/summary/area/osaka/"
      },
      {
        title: "Book accommodation in central, well-reviewed neighborhoods",
        description: "Areas like Umeda, Namba, and Osaka Castle are safe and popular with solo travelers. Check reviews for female-friendly options.",
        severity: "low",
        sourceName: "Travel Ladies Osaka Safety Guide",
        sourceUrl: "https://travelladies.app/safety/japan/osaka"
      },
      {
        title: "Be cautious in nightlife districts and avoid aggressive touts",
        description: "Nightlife areas can have touts or scams. Politely decline and walk away if approached. Stick to reputable venues.",
        severity: "medium",
        sourceName: "Travel Ladies Osaka Safety Guide",
        sourceUrl: "https://travelladies.app/safety/japan/osaka"
      },
      {
        title: "Respect local customs and dress modestly at temples",
        description: "When visiting religious sites, wear modest clothing and follow etiquette such as removing shoes and being quiet inside.",
        severity: "low",
        sourceName: "The Kansai Guide - Useful Info",
        sourceUrl: "https://www.the-kansai-guide.com/en/summary/area/osaka/"
      }
    ], // Tips sourced from Travel Ladies and The Kansai Guide (2025)
  };

export default osaka;
