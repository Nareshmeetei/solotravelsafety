import { Destination } from './types';

const seoul: Destination = {
  city: 'Seoul',
  country: 'South Korea',
  continent: 'Asia',
  countryCode: 'kr',
  overallScore: 8.6,
  nightSafety: 8.4,
  publicTransit: 9.3,
  walkingAlone: 8.2,
  tags: ['safe', 'modern', 'public-transit'],
  bgColor: 'bg-green-25',
  reviewCount: 412,
  lastUpdated: '1 day ago',
  harassmentRisk: 'medium',
  safetyBreakdown: {
    nightSafety: {
      score: 8.4,
      context: 'Generally safe at night, especially in busy areas. Some caution advised in nightlife districts late at night.'
    },
    publicTransit: {
      score: 9.3,
      context: 'Extensive, clean, and safe subway and bus system. English signage in most stations.'
    },
    walkingAlone: {
      score: 8.2,
      context: 'Safe to walk alone in most areas. Petty crime is rare but possible in crowded places.'
    }
  },
  neighborhoods: {
    safe: ['Gangnam', 'Itaewon', 'Hongdae', 'Insadong', 'Myeongdong'],
    caution: ['Nightlife areas in Itaewon and Hongdae late at night'],
    avoid: ['None - generally safe city']
  },
  accommodations: [
    {
      name: 'Bunk Guesthouse',
      type: 'hostel',
      features: ['Female dorms', 'Central location', 'Friendly staff'],
      rating: 4.6,
      notes: 'Popular with solo travelers, safe and clean.'
    },
    {
      name: 'L7 Myeongdong by Lotte',
      type: 'hotel',
      features: ['Modern hotel', 'Great location', 'English-speaking staff'],
      rating: 4.7,
      notes: 'Excellent safety and amenities.'
    }
  ],
  alerts: [],
  safetyTips: {
    clothing: 'Dress modestly in temples and palaces. Casual wear is fine elsewhere.',
    firstTimers: 'Download KakaoMap and Subway Korea apps. Taxis are safe but traffic can be heavy.',
    apps: ['KakaoMap', 'Subway Korea', 'KakaoTalk'],
    emergencyPhrases: ['도와주세요 (Help me)', '경찰을 불러주세요 (Call the police)']
  },
  culturalExpectations: {
    dressCode: 'Modest dress in religious sites. Trendy, casual wear is common in the city.',
    behaviorNorms: ['Respect elders', 'No loud talking on public transport', 'Remove shoes in homes'],
    perception: 'Solo female travelers are common and generally respected. Some staring may occur.'
  },
  bestTimeToVisit: {
    safestMonths: ['April-June', 'September-November'],
    events: 'Cherry blossom season (April), autumn foliage (October-November). Safe year-round.'
  },
  emergencyInfo: {
    police: '112',
    fire: '119',
    medical: '119',
    general: '112'
  },
  currency: {
    name: 'South Korean Won',
    code: 'KRW',
    exchangeRate: {
      usd: 0.0007,
      eur: 0.0006,
      gbp: 0.0005
    },
    scamWarnings: []
  },
  scamWarnings: [],
  usefulTips: [
    {
      title: 'Use Public Transport and Stay in Busy Areas',
      description: 'Seoul\'s subway and buses are safe, efficient, and well-monitored. Stick to well-lit, busy neighborhoods, especially at night.',
      severity: 'low',
      sourceName: 'ZenKimchi',
      sourceUrl: 'https://zenkimchi.com/tour-tips/is-seoul-safe-for-female-travelers/'
    },
    {
      title: 'Be Cautious in Nightlife Districts',
      description: 'Nightlife areas like Itaewon and Hongdae are lively but can be rowdy late at night. Watch your drink and avoid isolated streets.',
      severity: 'low',
      sourceName: 'Moving Jack',
      sourceUrl: 'https://moving-jack.com/is-seoul-safe-insider-guide/'
    },
    {
      title: 'Take Advantage of Women-Only Accommodations',
      description: 'Many hostels and hotels offer female-only dorms or floors for extra comfort and security.',
      severity: 'low',
      sourceName: 'ZenKimchi',
      sourceUrl: 'https://zenkimchi.com/tour-tips/is-seoul-safe-for-female-travelers/'
    },
    {
      title: 'Keep Valuables Secure in Crowded Places',
      description: 'Petty theft is rare but possible in markets and tourist areas. Keep your bag zipped and close to your body.',
      severity: 'low',
      sourceName: 'Jetlag Sarah',
      sourceUrl: 'https://jetlagsarah.com/is-seoul-safe-for-solo-female-travellers/'
    },
    {
      title: 'Download Essential Apps for Navigation and Safety',
      description: 'Use Naver Map, KakaoMap, and Subway Korea for directions. The Emergency Ready app provides alerts and emergency info in English.',
      severity: 'low',
      sourceName: 'Visit Korea',
      sourceUrl: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=198570'
    }
  ],
  languages: ['Korean', 'English (major tourist areas)'],
  daytimeSafetyPercent: 85.0, // Source: Numbeo 2025, Travel Ladies 2025
  nighttimeSafetyPercent: 75.9, // Source: Numbeo 2025, Travel Ladies 2025
  // Add Women’s Confidence Score (Numbeo 2025)
  womensConfidenceScore: {
    score: 75.8,
    source: '',
    sourceUrl: ''
  },
  // Add Confidence by Activity (2025, aggregated from ZenKimchi, Under30Experiences, and Numbeo)
  confidenceByActivity: [
    {
      label: "Sightseeing",
      confidence: 96,
      source: '',
      sourceUrl: ''
    },
    {
      label: "Nightlife",
      confidence: 89,
      source: '',
      sourceUrl: ''
    },
    {
      label: "Public Transport",
      confidence: 98,
      source: '',
      sourceUrl: ''
    },
    {
      label: "Dining Alone",
      confidence: 95,
      source: '',
      sourceUrl: ''
    }
  ],
  // Red flags based on Numbeo 2025, Moving Jack, Under30Experiences, and Zenkimchi
  // Sources:
  // https://www.numbeo.com/crime/in/Seoul
  // https://moving-jack.com/is-seoul-safe-insider-guide/
  // https://www.under30experiences.com/blog/is-it-safe-in-south-korea
  // https://zenkimchi.com/tour-tips/is-seoul-safe-for-female-travelers/
  redFlags: [
    {
      label: 'Pickpocketing in Crowded Markets',
      frequency: 'Occasional',
      icon: 'Hand',
    },
    {
      label: 'Drink Spiking in Nightlife Districts',
      frequency: 'Rare',
      icon: 'Beer',
    },
    {
      label: 'Taxi Overcharging (Late Night)',
      frequency: 'Occasional',
      icon: 'Car',
    },
    {
      label: 'Heatwaves & Air Quality (Summer)',
      frequency: 'Occasional',
      icon: 'AlertTriangle',
    },
  ],
  culturalDos: [
    'Greet elders with a slight bow and use polite language.',
    'Dress modestly, especially in temples and palaces.',
    'Remove shoes when entering homes and some restaurants.',
    'Use quiet voices in public and on transport.',
    'Accept and give items with both hands.'
  ],
  culturalDonts: [
    "Don't point with your finger—gesture with your whole hand.",
    "Don't speak loudly or make phone calls on public transport.",
    "Don't stick chopsticks upright in rice.",
    "Don't touch people unnecessarily or show public affection.",
    "Don't take photos in temples without permission."
  ]
};

export default seoul; 