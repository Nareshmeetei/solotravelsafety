import { Destination } from './types';

const nagano: Destination = {
    city: 'Nagano',
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
    daytimeSafetyPercent: 92.0,
    nighttimeSafetyPercent: 80.0,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Tokyo',
    // Red flags based on Numbeo 2025, Travel Ladies, and wildlife safety sources
    redFlags: [
      {
        label: 'Earthquakes & Natural Disasters',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
      {
        label: 'Wildlife (Bears, Hornets, Snakes)',
        frequency: 'Occasional',
        icon: 'Shield',
      },
      {
        label: 'Overpriced Tourist Shops/Tours',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Staring or Unwanted Attention',
        frequency: 'Rare',
        icon: 'EyeOff',
      },
    ], // Sources: https://www.numbeo.com/crime/in/Tokyo, https://travelladies.app/safety/japan/nagano, https://wakokujp.com/most-dangerous-animals-in-japan/, https://earthquakelist.org/japan/nagano/
    usefulTips: [
      {
        title: "Use coin lockers and baggage delivery for convenience",
        description: "Nagano train stations offer coin lockers and there are reliable baggage delivery services for travelers. This is especially useful if you plan to visit the Japanese Alps or travel between cities.",
        severity: "low",
        sourceName: "Go Nagano Official Tourism FAQ",
        sourceUrl: "https://db.go-nagano.net/en/travel-guide/faq/"
      },
      {
        title: "Check weather and earthquake alerts before hiking or skiing",
        description: "Nagano is in a mountainous region and can experience sudden weather changes and occasional earthquakes. Always check local alerts and be prepared with proper gear.",
        severity: "medium",
        sourceName: "Go Nagano Official Tourism FAQ",
        sourceUrl: "https://db.go-nagano.net/en/travel-guide/faq/"
      },
      {
        title: "Stay in female-friendly hostels or Buddhist lodges",
        description: "Nagano offers a range of safe accommodations, including hostels with female dorms and traditional Buddhist lodges (Shukubo) near Zenkoji Temple.",
        severity: "low",
        sourceName: "Dot Hostel Nagano, Go Nagano",
        sourceUrl: "https://www.instagram.com/dot_hostel_nagano/"
      },
      {
        title: "Use IC cards for public transport, but check coverage",
        description: "IC cards like Suica and Pasmo are accepted on most trains and buses in Nagano City, but not all lines. Always check if your route is covered or buy a paper ticket.",
        severity: "low",
        sourceName: "Go Nagano Official Tourism FAQ",
        sourceUrl: "https://db.go-nagano.net/en/travel-guide/faq/"
      },
      {
        title: "Dress modestly and respect local customs at temples",
        description: "When visiting Zenkoji and other temples, wear modest clothing and follow local etiquette, such as removing shoes and being quiet inside religious sites.",
        severity: "low",
        sourceName: "Go Nagano Official Tourism FAQ",
        sourceUrl: "https://db.go-nagano.net/en/travel-guide/faq/"
      }
    ], // Tips sourced from Go Nagano Official Tourism FAQ and Dot Hostel Nagano (2025)
  };

export default nagano;
