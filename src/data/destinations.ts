export interface Destination {
  city: string;
  country: string;
  continent: string;
  countryCode: string;
  overallScore: number;
  nightSafety: number;
  publicTransit: number;
  walkingAlone: number;
  tags: string[];
  bgColor: string;
  reviewCount: number;
  lastUpdated: string;
  harassmentRisk: 'low' | 'medium' | 'high';
  safetyBreakdown: {
    nightSafety: {
      score: number;
      context: string;
    };
    publicTransit: {
      score: number;
      context: string;
    };
    walkingAlone: {
      score: number;
      context: string;
    };
  };
  neighborhoods: {
    safe: string[];
    caution: string[];
    avoid: string[];
  };
  accommodations: {
    name: string;
    type: 'hostel' | 'hotel' | 'airbnb';
    features: string[];
    rating: number;
    notes: string;
  }[];
  alerts: {
    title: string;
    description: string;
    location: string;
    reportCount: number;
    severity: 'low' | 'medium' | 'high';
    dateReported: string;
  }[];
  safetyTips: {
    clothing: string;
    firstTimers: string;
    apps: string[];
    emergencyPhrases: string[];
  };
  culturalExpectations: {
    dressCode: string;
    behaviorNorms: string[];
    perception: string;
  };
  bestTimeToVisit: {
    safestMonths: string[];
    events: string;
  };
  emergencyInfo: {
    police: string;
    fire: string;
    medical: string;
    general: string;
  };
  currency: {
    name: string;
    code: string;
    exchangeRate: {
      usd: number;
      eur: number;
      gbp: number;
    };
    scamWarnings: string[];
  };
  scamWarnings: {
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
  }[];
  languages: string[];
}

export const destinations: Destination[] = [
  // Iceland
  {
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
    lastUpdated: '1 week ago',
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
        usd: 0.0072,
        eur: 0.0067,
        gbp: 0.0057
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
    languages: ['Icelandic', 'English (widely spoken)'],
  },
  // Japan
  {
    city: 'Tokyo',
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
  },
  // Korea
  {
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
    lastUpdated: '2 days ago',
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
        usd: 0.00075,
        eur: 0.00069,
        gbp: 0.00059
      },
      scamWarnings: [
        'Beware of overcharging taxis late at night',
        'Pickpocketing in crowded markets',
        'Counterfeit goods in some shopping areas'
      ]
    },
    scamWarnings: [
      {
        title: 'Taxi Overcharging',
        description: 'Some taxi drivers may overcharge tourists, especially late at night. Use official taxis or ride apps.',
        severity: 'medium'
      },
      {
        title: 'Pickpocketing in Markets',
        description: 'Petty theft can occur in crowded places like Namdaemun and Dongdaemun markets.',
        severity: 'low'
      }
    ],
    languages: ['Korean', 'English (major tourist areas)'],
  },
  // SAFEST DESTINATIONS (add after existing)
  {
    city: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    countryCode: 'sg',
    overallScore: 9.4,
    nightSafety: 9.6,
    publicTransit: 9.7,
    walkingAlone: 9.2,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 445,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 9.6, context: 'Extremely safe at all hours. Well-lit streets, heavy police presence, and strict laws create a very secure environment.' },
      publicTransit: { score: 9.7, context: 'World-class MRT system with excellent safety measures. Clean, efficient, and very safe even late at night.' },
      walkingAlone: { score: 9.2, context: 'Very safe to walk alone anywhere in the city. Respectful culture with minimal harassment.' }
    },
    neighborhoods: {
      safe: ['Orchard Road', 'Marina Bay', 'Chinatown', 'Little India', 'Clarke Quay', 'Sentosa'],
      caution: ['Some late-night entertainment districts'],
      avoid: ['None - entire city is very safe']
    },
    accommodations: [
      { name: 'The Pod Boutique Capsule Hotel', type: 'hostel', features: ['Female-only pods', 'Central location', 'Modern facilities'], rating: 4.6, notes: 'Innovative capsule design, very clean, excellent security' },
      { name: 'Marina Bay Sands', type: 'hotel', features: ['Luxury hotel', 'Iconic location', 'World-class security'], rating: 4.8, notes: 'Premium hotel with excellent safety standards and professional staff' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress code varies by area. Cover up in religious sites, casual elsewhere.',
      firstTimers: 'Very easy for first-time visitors. English is widely spoken.',
      apps: ['SG BusLeh', 'Grab', 'Singapore Maps'],
      emergencyPhrases: ['Help (English widely spoken)', 'Call police (999)']
    },
    culturalExpectations: {
      dressCode: 'Modest dress in religious areas. Otherwise, casual Western clothing is fine.',
      behaviorNorms: ['No chewing gum', 'No jaywalking', 'Respect diverse cultures'],
      perception: 'Solo female travelers are very common and completely normal.'
    },
    bestTimeToVisit: {
      safestMonths: ['Year-round (tropical climate)'],
      events: 'Consistently safe throughout the year. Avoid Chinese New Year for crowds.'
    },
    emergencyInfo: {
      police: '999', fire: '995', medical: '995', general: '999'
    },
    currency: {
      name: 'Singapore Dollar', code: 'SGD', exchangeRate: { usd: 0.74, eur: 0.69, gbp: 0.59 }, scamWarnings: ['Very few scams due to strict laws', 'Fake charity collectors - verify credentials', 'Overpriced tourist restaurants - check reviews first']
    },
    scamWarnings: [
      { title: 'Fake Charity Collectors', description: 'People claiming to collect for charities without proper credentials', severity: 'low' }
    ],
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
  },
  {
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
      name: 'Danish Krone', code: 'DKK', exchangeRate: { usd: 0.15, eur: 0.13, gbp: 0.11 }, scamWarnings: ['Very few scams due to honest culture', 'Pickpocketing in tourist areas is rare but possible', 'Overpriced tourist restaurants - locals eat at reasonable prices']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Danish', 'English (widely spoken)'],
  },
  {
    city: 'Helsinki',
    country: 'Finland',
    continent: 'Europe',
    countryCode: 'fi',
    overallScore: 9.3,
    nightSafety: 9.1,
    publicTransit: 9.2,
    walkingAlone: 9.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 210,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 9.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.2, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 9.5, context: 'Extremely safe to walk alone. Finnish culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Kamppi', 'Punavuori', 'Kallio', 'Eira', 'Töölö'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Omena Hotel Helsinki', type: 'hotel', features: ['Central location', 'Affordable', 'Safe'], rating: 4.2, notes: 'Simple, clean, and safe hotel in the city center' },
      { name: 'Hostel Diana Park', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['HSL', 'Reittiopas', 'Nysse'],
      emergencyPhrases: ['Apu (Help)', 'Soita poliisille (Call the police)']
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
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Finnish', 'Swedish', 'English (widely spoken)'],
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 9.0,
    nightSafety: 9.2,
    publicTransit: 9.4,
    walkingAlone: 8.8,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 180,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 9.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.4, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.8, context: 'Very safe to walk alone. Swiss culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Old Town', 'Enge', 'Seefeld', 'Wiedikon', 'Aussersihl'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Hotel St. Gotthard', type: 'hotel', features: ['Central location', 'Affordable', 'Safe'], rating: 4.3, notes: 'Simple, clean, and safe hotel in the city center' },
      { name: 'Youth Hostel Zurich', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SBB Mobile', 'ZVV', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
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
      police: '117', fire: '118', medical: '144', general: '112'
    },
    currency: {
      name: 'Swiss Franc', code: 'CHF', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['German', 'French', 'Italian', 'English (widely spoken)'],
  },
  {
    city: 'Vienna',
    country: 'Austria',
    continent: 'Europe',
    countryCode: 'at',
    overallScore: 8.6,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.4, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Austrian culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Innere Stadt', 'Leopoldstadt', 'Landstraße', 'Mariahilf', 'Neubau'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Hotel Sacher Wien', type: 'hotel', features: ['Central location', 'Luxury', 'Safe'], rating: 4.8, notes: 'Famous luxury hotel in the city center' },
      { name: "Wombat's City Hostel Vienna", type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Kämp', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['WienMobil', 'Qando', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
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
      police: '133', fire: '122', medical: '144', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['German', 'English (widely spoken)'],
  },
  // LEAST SAFE DESTINATIONS
  {
    city: 'Johannesburg',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 2.8,
    nightSafety: 1.5,
    publicTransit: 3.2,
    walkingAlone: 2.0,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 320,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 1.5, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.2, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.0, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Sandton', 'Rosebank', 'Melrose Arch'],
      caution: ['Braamfontein', 'Parktown'],
      avoid: ['Hillbrow', 'Yeoville', 'CBD at night']
    },
    accommodations: [
      { name: 'Sandton Sun', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.6, notes: 'High security and professional staff.' },
      { name: 'Curiocity Backpackers', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'CBD', reportCount: 45, severity: 'high', dateReported: '2 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Namola', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '10111', fire: '10177', medical: '10177', general: '112'
    },
    currency: {
      name: 'South African Rand', code: 'ZAR', exchangeRate: { usd: 0.055, eur: 0.05, gbp: 0.043 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['English', 'Zulu', 'Afrikaans'],
  },
  {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'South America',
    countryCode: 'br',
    overallScore: 4.3,
    nightSafety: 2.9,
    publicTransit: 4.8,
    walkingAlone: 3.7,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 410,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.9, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of mugging and assault.' },
      publicTransit: { score: 4.8, context: 'Public transport is crowded and can be risky. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.7, context: 'Not recommended to walk alone, especially for women. High risk of harassment.' }
    },
    neighborhoods: {
      safe: ['Ipanema', 'Leblon', 'Barra da Tijuca'],
      caution: ['Copacabana', 'Lapa'],
      avoid: ['Favelas', 'Centro at night']
    },
    accommodations: [
      { name: 'Belmond Copacabana Palace', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' },
      { name: 'El Misti Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.3, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of muggings and assaults', location: 'Copacabana', reportCount: 38, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', '99', 'Google Maps'],
      emergencyPhrases: ['Socorro!', 'Chame a polícia!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '190', fire: '193', medical: '192', general: '192'
    },
    currency: {
      name: 'Brazilian Real', code: 'BRL', exchangeRate: { usd: 0.19, eur: 0.17, gbp: 0.15 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['Portuguese', 'English (tourist areas)'],
  },
  {
    city: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    countryCode: 'eg',
    overallScore: 4.8,
    nightSafety: 3.2,
    publicTransit: 5.1,
    walkingAlone: 3.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 678,
    lastUpdated: '2 days ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 3.2, context: 'Not recommended to walk alone at night. Stick to well-lit tourist areas with security. Use hotel transport or trusted taxis.' },
      publicTransit: { score: 5.1, context: 'Metro has women-only cars - use them. Buses can be crowded and uncomfortable. Uber is safer option.' },
      walkingAlone: { score: 3.9, context: 'Expect significant harassment including staring, comments, and following. Dress very conservatively and stay alert.' }
    },
    neighborhoods: {
      safe: ['Zamalek', 'New Cairo', 'Maadi', 'Hotel areas in Giza'],
      caution: ['Downtown Cairo', 'Khan el-Khalili (tourist areas)', 'Coptic Cairo'],
      avoid: ['Islamic Cairo at night', 'Shubra', 'Isolated areas', 'Non-tourist areas alone']
    },
    accommodations: [
      { name: 'Four Seasons Hotel Cairo at Nile Plaza', type: 'hotel', features: ['Luxury hotel', 'Excellent security', 'Safe location'], rating: 4.7, notes: 'Top-tier security and professional staff. Very safe choice for solo women.' }
    ],
    alerts: [
      { title: 'Increased Harassment Reports', description: 'Multiple reports of aggressive harassment and following', location: 'Khan el-Khalili bazaar area', reportCount: 42, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress very conservatively. Long sleeves, long pants/skirts, cover hair in religious areas. Avoid tight or revealing clothing.',
      firstTimers: 'Consider guided tours. Stay in tourist areas. Book reputable accommodations. Have emergency contacts ready.',
      apps: ['Uber', 'Careem', 'Google Translate', 'Egypt Travel Guide'],
      emergencyPhrases: ['Mosa\'ada (Help)', 'Itasal bil-shurta (Call police)', 'Sibnee fi halee (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Very conservative dress required. Cover arms, legs, and consider head covering.',
      behaviorNorms: ['Avoid eye contact with men', 'Don\'t shake hands with men', 'Be very firm when declining offers'],
      perception: 'Solo female travelers are unusual and attract significant attention. Be prepared for constant staring and comments.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Avoid summer heat. Ramadan can affect opening hours and behavior norms.'
    },
    emergencyInfo: {
      police: '122', fire: '180', medical: '123', general: '122'
    },
    currency: {
      name: 'Egyptian Pound', code: 'EGP', exchangeRate: { usd: 0.021, eur: 0.019, gbp: 0.016 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake guides']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Arabic', 'English (tourist areas)'],
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    countryCode: 'ng',
    overallScore: 3.1,
    nightSafety: 2.0,
    publicTransit: 3.5,
    walkingAlone: 2.5,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 290,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.5, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Victoria Island', 'Ikoyi', 'Lekki'],
      caution: ['Yaba', 'Surulere'],
      avoid: ['Mushin', 'Ajegunle', 'Oshodi at night']
    },
    accommodations: [
      { name: 'Eko Hotels & Suites', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' },
      { name: 'Bogobiri House', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.1, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Oshodi', reportCount: 33, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Bolt', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '112', fire: '119', medical: '199', general: '112'
    },
    currency: {
      name: 'Nigerian Naira', code: 'NGN', exchangeRate: { usd: 0.0013, eur: 0.0011, gbp: 0.00095 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
  },
  {
    city: 'Karachi',
    country: 'Pakistan',
    continent: 'Asia',
    countryCode: 'pk',
    overallScore: 3.5,
    nightSafety: 2.2,
    publicTransit: 3.8,
    walkingAlone: 2.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 210,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.2, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Clifton', 'Defence', 'Gulshan-e-Iqbal'],
      caution: ['Saddar', 'Nazimabad'],
      avoid: ['Lyari', 'Korangi', 'Orangi Town at night']
    },
    accommodations: [
      { name: 'Mövenpick Hotel Karachi', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.4, notes: 'High security and professional staff.' },
      { name: 'Backpackers Hostel Karachi', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Saddar', reportCount: 27, severity: 'high', dateReported: '6 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Careem', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Madad!', 'Police ko bulao!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-May'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '117', fire: '160', medical: '911', general: '911'
    },
    currency: {
      name: 'Pakistani Rupee', code: 'PKR', exchangeRate: { usd: 0.0036, eur: 0.0032, gbp: 0.0027 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['Urdu', 'English (widely spoken)'],
  },
  {
    city: 'Stockholm',
    country: 'Sweden',
    continent: 'Europe',
    countryCode: 'se',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.1,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 200,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.6, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.1, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.9, context: 'Very safe to walk alone. Swedish culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Norrmalm', 'Östermalm', 'Södermalm', 'Kungsholmen'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'City Backpackers Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Rival', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SL', 'Res i Sthlm', 'Google Maps'],
      emergencyPhrases: ['Hjälp (Help)', 'Ring polisen (Call the police)']
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
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Swedish Krona', code: 'SEK', exchangeRate: { usd: 0.11, eur: 0.10, gbp: 0.085 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Swedish', 'English (widely spoken)'],
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    continent: 'Europe',
    countryCode: 'nl',
    overallScore: 8.4,
    nightSafety: 8.1,
    publicTransit: 9.0,
    walkingAlone: 8.3,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 180,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.3, context: 'Very safe to walk alone. Dutch culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Centrum', 'Jordaan', 'De Pijp', 'Oud-West'],
      caution: ['Red Light District late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Stayokay Amsterdam Vondelpark', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Estherea', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['GVB', '9292', 'Google Maps'],
      emergencyPhrases: ['Help (Help)', 'Bel de politie (Call the police)']
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
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Dutch', 'English (widely spoken)'],
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    continent: 'Oceania',
    countryCode: 'au',
    overallScore: 8.7,
    nightSafety: 8.2,
    publicTransit: 8.9,
    walkingAlone: 8.8,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 170,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.9, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.8, context: 'Very safe to walk alone. Australian culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['CBD', 'Fitzroy', 'St Kilda', 'Southbank'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Space Hotel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'The Langham Melbourne', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Melbourne can be unpredictable.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['PTV', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '000', fire: '000', medical: '000', general: '000'
    },
    currency: {
      name: 'Australian Dollar', code: 'AUD', exchangeRate: { usd: 0.75, eur: 0.68, gbp: 0.58 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English'],
  },
  {
    city: 'Vancouver',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.5,
    nightSafety: 8.0,
    publicTransit: 8.7,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.0, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.6, context: 'Very safe to walk alone. Canadian culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Downtown', 'West End', 'Kitsilano', 'Yaletown'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'HI Vancouver Central', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Fairmont Pacific Rim', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Vancouver can be rainy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['TransLink', 'Uber', 'Google Maps'],
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
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Canadian Dollar', code: 'CAD', exchangeRate: { usd: 0.80, eur: 0.72, gbp: 0.62 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'French'],
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 3.2,
    nightSafety: 2.0,
    publicTransit: 3.5,
    walkingAlone: 2.8,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 250,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.8, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Camps Bay', 'Sea Point', 'Green Point'],
      caution: ['City Bowl', 'Woodstock'],
      avoid: ['Khayelitsha', 'Nyanga', 'CBD at night']
    },
    accommodations: [
      { name: 'The Table Bay Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' },
      { name: 'Once in Cape Town', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'CBD', reportCount: 30, severity: 'high', dateReported: '2 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Namola', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '10111', fire: '10177', medical: '10177', general: '112'
    },
    currency: {
      name: 'South African Rand', code: 'ZAR', exchangeRate: { usd: 0.055, eur: 0.05, gbp: 0.043 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['English', 'Afrikaans', 'Xhosa'],
  },
  {
    city: 'Manila',
    country: 'Philippines',
    continent: 'Asia',
    countryCode: 'ph',
    overallScore: 4.0,
    nightSafety: 2.5,
    publicTransit: 4.2,
    walkingAlone: 3.1,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 210,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.5, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 4.2, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.1, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Makati', 'Bonifacio Global City', 'Ortigas'],
      caution: ['Ermita', 'Malate'],
      avoid: ['Tondo', 'Quiapo', 'Divisoria at night']
    },
    accommodations: [
      { name: 'The Peninsula Manila', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.6, notes: 'High security and professional staff.' },
      { name: 'Z Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Quiapo', reportCount: 25, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Grab', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Tulong!', 'Tumawag ng pulis!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-May'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '117', fire: '160', medical: '911', general: '911'
    },
    currency: {
      name: 'Philippine Peso', code: 'PHP', exchangeRate: { usd: 0.018, eur: 0.016, gbp: 0.014 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Filipino', 'English'],
  },
  {
    city: 'Mexico City',
    country: 'Mexico',
    continent: 'North America',
    countryCode: 'mx',
    overallScore: 4.5,
    nightSafety: 3.0,
    publicTransit: 4.5,
    walkingAlone: 3.5,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 300,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 3.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 4.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.5, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Polanco', 'Condesa', 'Roma Norte'],
      caution: ['Centro', 'Juarez'],
      avoid: ['Tepito', 'Doctores', 'Iztapalapa at night']
    },
    accommodations: [
      { name: 'Four Seasons Hotel Mexico City', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' },
      { name: 'Hostel Home', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.3, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Centro', reportCount: 28, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Didi', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Mexican Peso', code: 'MXN', exchangeRate: { usd: 0.052, eur: 0.045, gbp: 0.038 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish', 'English (tourist areas)'],
  },
  {
    city: 'Caracas',
    country: 'Venezuela',
    continent: 'South America',
    countryCode: 've',
    overallScore: 2.5,
    nightSafety: 1.2,
    publicTransit: 2.8,
    walkingAlone: 1.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 180,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 1.2, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 2.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 1.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Altamira', 'Chacao', 'El Hatillo'],
      caution: ['Sabana Grande', 'La Candelaria'],
      avoid: ['Petare', '23 de Enero', 'Libertador at night']
    },
    accommodations: [
      { name: 'JW Marriott Hotel Caracas', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' },
      { name: 'Caracas Backpackers Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Sabana Grande', reportCount: 22, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '171', medical: '171', general: '911'
    },
    currency: {
      name: 'Venezuelan Bolívar', code: 'VES', exchangeRate: { usd: 0.00025, eur: 0.00022, gbp: 0.00019 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
  },
  // --- Safest Destinations (Batch 2) ---
  {
    city: 'Zurich',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 8.9,
    nightSafety: 8.7,
    publicTransit: 9.2,
    walkingAlone: 8.8,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 210,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.7, context: 'Very safe at night. Low crime rates and excellent lighting.' },
      publicTransit: { score: 9.2, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.8, context: 'Very safe to walk alone. Swiss culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Altstadt', 'Enge', 'Seefeld', 'Wiedikon'],
      caution: ['Langstrasse late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Zurich Youth Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Baur au Lac', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SBB Mobile', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '117', fire: '118', medical: '144', general: '112'
    },
    currency: {
      name: 'Swiss Franc', code: 'CHF', exchangeRate: { usd: 1.1, eur: 1.0, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['German', 'English (widely spoken)'],
  },
  {
    city: 'Copenhagen',
    country: 'Denmark',
    continent: 'Europe',
    countryCode: 'dk',
    overallScore: 8.7,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 180,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.4, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.6, context: 'Very safe to walk alone. Danish culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Indre By', 'Vesterbro', 'Nørrebro', 'Østerbro'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Urban House Copenhagen', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel d\'Angleterre', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['DOT Mobilbilletter', 'Google Maps'],
      emergencyPhrases: ['Hjælp (Help)', 'Ring til politiet (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Danish Krone', code: 'DKK', exchangeRate: { usd: 0.15, eur: 0.13, gbp: 0.11 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Danish', 'English (widely spoken)'],
  },
  {
    city: 'Auckland',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 150,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Kiwi culture is respectful.' }
    },
    neighborhoods: {
      safe: ['CBD', 'Ponsonby', 'Parnell', 'Mount Eden'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Haka Lodge Auckland', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Cordis Auckland', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Auckland can be rainy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['AT Mobile', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '111', fire: '111', medical: '111', general: '111'
    },
    currency: {
      name: 'New Zealand Dollar', code: 'NZD', exchangeRate: { usd: 0.62, eur: 0.56, gbp: 0.48 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Māori'],
  },
  {
    city: 'Helsinki',
    country: 'Finland',
    continent: 'Europe',
    countryCode: 'fi',
    overallScore: 8.5,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 140,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.8, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.4, context: 'Very safe to walk alone. Finnish culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Kamppi', 'Kallio', 'Punavuori', 'Eira'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Hostel Diana Park', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.2, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Kämp', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['HSL', 'Google Maps'],
      emergencyPhrases: ['Apua (Help)', 'Soita poliisille (Call the police)']
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
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Finnish', 'Swedish', 'English (widely spoken)'],
  },
  {
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
    lastUpdated: '6 days ago',
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
      name: 'Norwegian Krone', code: 'NOK', exchangeRate: { usd: 0.094, eur: 0.086, gbp: 0.073 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Norwegian', 'English (widely spoken)'],
  },
  // --- Least Safe Destinations (Batch 2) ---
  {
    city: 'Bogotá',
    country: 'Colombia',
    continent: 'South America',
    countryCode: 'co',
    overallScore: 3.8,
    nightSafety: 2.7,
    publicTransit: 4.0,
    walkingAlone: 3.0,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 220,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.7, context: 'Unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 4.0, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.0, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Chapinero', 'Zona Rosa', 'Usaquén'],
      caution: ['La Candelaria', 'Teusaquillo'],
      avoid: ['Ciudad Bolívar', 'San Cristóbal', 'Santa Fe at night']
    },
    accommodations: [
      { name: 'Selina Bogotá', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' },
      { name: 'JW Marriott Hotel Bogotá', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'La Candelaria', reportCount: 20, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Beat', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '123', fire: '119', medical: '125', general: '123'
    },
    currency: {
      name: 'Colombian Peso', code: 'COP', exchangeRate: { usd: 0.00025, eur: 0.00022, gbp: 0.00019 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    countryCode: 'ng',
    overallScore: 3.5,
    nightSafety: 2.2,
    publicTransit: 3.2,
    walkingAlone: 2.5,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 190,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.2, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.2, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.5, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Victoria Island', 'Ikoyi', 'Lekki'],
      caution: ['Yaba', 'Surulere'],
      avoid: ['Mushin', 'Ajegunle', 'Oshodi at night']
    },
    accommodations: [
      { name: 'Eko Hotels & Suites', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' },
      { name: 'Bogobiri House', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Yaba', reportCount: 18, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Bolt', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Ẹ jọ̀wọ́!', 'Pe ọlọ́pàá!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Nigerian Naira', code: 'NGN', exchangeRate: { usd: 0.00065, eur: 0.00059, gbp: 0.00050 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
  },
  {
    city: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    countryCode: 'eg',
    overallScore: 4.2,
    nightSafety: 3.1,
    publicTransit: 4.3,
    walkingAlone: 3.2,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 210,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 3.1, context: 'Unsafe at night. Avoid walking alone after dark. High risk of harassment.' },
      publicTransit: { score: 4.3, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.2, context: 'Not recommended to walk alone, especially for women. High risk of harassment.' }
    },
    neighborhoods: {
      safe: ['Zamalek', 'Maadi', 'Heliopolis'],
      caution: ['Downtown', 'Garden City'],
      avoid: ['Imbaba', 'Ain Shams', 'Shubra at night']
    },
    accommodations: [
      { name: 'Cairo Marriott Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.6, notes: 'High security and professional staff.' },
      { name: 'Dahab Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.1, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of harassment and muggings', location: 'Downtown', reportCount: 19, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Careem', 'Uber', 'Google Maps'],
      emergencyPhrases: ['مساعدة! (Help!)', 'اتصل بالشرطة! (Call the police!)']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '122', fire: '180', medical: '123', general: '122'
    },
    currency: {
      name: 'Egyptian Pound', code: 'EGP', exchangeRate: { usd: 0.021, eur: 0.019, gbp: 0.016 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Arabic', 'English (tourist areas)'],
  },
  {
    city: 'Johannesburg',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 3.0,
    nightSafety: 1.8,
    publicTransit: 3.0,
    walkingAlone: 2.2,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 170,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 1.8, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.0, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.2, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Sandton', 'Rosebank', 'Melrose Arch'],
      caution: ['Braamfontein', 'Newtown'],
      avoid: ['Hillbrow', 'Yeoville', 'CBD at night']
    },
    accommodations: [
      { name: 'Radisson Blu Gautrain Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.4, notes: 'High security and professional staff.' },
      { name: 'Curiocity Backpackers', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'CBD', reportCount: 21, severity: 'high', dateReported: '6 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Bolt', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['September-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '10111', fire: '10177', medical: '10177', general: '112'
    },
    currency: {
      name: 'South African Rand', code: 'ZAR', exchangeRate: { usd: 0.055, eur: 0.05, gbp: 0.043 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['English', 'Zulu', 'Afrikaans'],
  },
  // --- Safest Destinations (Batch 3) ---
  {
    city: 'Vienna',
    country: 'Austria',
    continent: 'Europe',
    countryCode: 'at',
    overallScore: 8.8,
    nightSafety: 8.5,
    publicTransit: 9.1,
    walkingAlone: 8.7,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.5, context: 'Very safe at night. Low crime rates and excellent lighting.' },
      publicTransit: { score: 9.1, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.7, context: 'Very safe to walk alone. Austrian culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Innere Stadt', 'Leopoldstadt', 'Landstraße', 'Neubau'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: "Wombat's City Hostel Vienna", type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Sacher Wien', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['WienMobil', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '133', fire: '122', medical: '144', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['German', 'English (widely spoken)'],
  },
  {
    city: 'Munich',
    country: 'Germany',
    continent: 'Europe',
    countryCode: 'de',
    overallScore: 8.7,
    nightSafety: 8.3,
    publicTransit: 9.0,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 150,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. German culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Altstadt-Lehel', 'Schwabing', 'Maxvorstadt', 'Haidhausen'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Euro Youth Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Bayerischer Hof', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['MVV', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '110', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['German', 'English (widely spoken)'],
  },
  {
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
      name: 'Singapore Dollar', code: 'SGD', exchangeRate: { usd: 0.74, eur: 0.67, gbp: 0.57 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
  },
  {
    city: 'Edinburgh',
    country: 'United Kingdom',
    continent: 'Europe',
    countryCode: 'gb',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 140,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.8, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Scottish culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Old Town', 'New Town', 'Stockbridge', 'Leith'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Castle Rock Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'The Balmoral Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Scotland can be rainy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Lothian Buses', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '999', fire: '999', medical: '999', general: '999'
    },
    currency: {
      name: 'Pound Sterling', code: 'GBP', exchangeRate: { usd: 1.3, eur: 1.1, gbp: 1 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Scots Gaelic'],
  },
  {
    city: 'Brisbane',
    country: 'Australia',
    continent: 'Oceania',
    countryCode: 'au',
    overallScore: 8.5,
    nightSafety: 8.1,
    publicTransit: 8.7,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 130,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.4, context: 'Very safe to walk alone. Australian culture is respectful.' }
    },
    neighborhoods: {
      safe: ['CBD', 'South Bank', 'Fortitude Valley', 'New Farm'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Bunk Brisbane', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Emporium Hotel South Bank', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Brisbane is warm and sunny.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['TransLink', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Dry season is best for weather. Summer is safe but hot.'
    },
    emergencyInfo: {
      police: '000', fire: '000', medical: '000', general: '000'
    },
    currency: {
      name: 'Australian Dollar', code: 'AUD', exchangeRate: { usd: 0.75, eur: 0.68, gbp: 0.58 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English'],
  },
  // --- Least Safe Destinations (Batch 3) ---
  {
    city: 'Guatemala City',
    country: 'Guatemala',
    continent: 'North America',
    countryCode: 'gt',
    overallScore: 3.7,
    nightSafety: 2.6,
    publicTransit: 3.8,
    walkingAlone: 2.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 180,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.6, context: 'Unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Zona 10', 'Zona 14'],
      caution: ['Zona 1', 'Zona 4'],
      avoid: ['Zona 3', 'Zona 18', 'Zona 21 at night']
    },
    accommodations: [
      { name: 'Hostal Villa Toscana', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' },
      { name: 'Barceló Guatemala City', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.6, notes: 'High security and professional staff.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Zona 1', reportCount: 17, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Waze', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '110', fire: '122', medical: '123', general: '110'
    },
    currency: {
      name: 'Guatemalan Quetzal', code: 'GTQ', exchangeRate: { usd: 0.13, eur: 0.12, gbp: 0.10 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
  },
  {
    city: 'San Salvador',
    country: 'El Salvador',
    continent: 'North America',
    countryCode: 'sv',
    overallScore: 3.5,
    nightSafety: 2.3,
    publicTransit: 3.5,
    walkingAlone: 2.7,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 170,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.3, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.7, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Zona Rosa', 'Colonia Escalón'],
      caution: ['Centro Histórico'],
      avoid: ['Soyapango', 'Mejicanos', 'Ilopango at night']
    },
    accommodations: [
      { name: 'Hostal Cumbres del Volcán', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.1, notes: 'Popular with solo travelers, but caution advised.' },
      { name: 'Barceló San Salvador', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Centro Histórico', reportCount: 15, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Waze', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '913', medical: '132', general: '911'
    },
    currency: {
      name: 'United States Dollar', code: 'USD', exchangeRate: { usd: 1, eur: 0.91, gbp: 0.77 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
  },
  {
    city: 'Port-au-Prince',
    country: 'Haiti',
    continent: 'North America',
    countryCode: 'ht',
    overallScore: 3.2,
    nightSafety: 2.0,
    publicTransit: 3.0,
    walkingAlone: 2.2,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 160,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.0, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.2, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Pétion-Ville'],
      caution: ['Delmas'],
      avoid: ['Cité Soleil', 'Martissant', 'Carrefour at night']
    },
    accommodations: [
      { name: 'Hotel Montana', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.3, notes: 'High security and professional staff.' },
      { name: 'Allamanda Bed and Breakfast', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Delmas', reportCount: 14, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Google Maps'],
      emergencyPhrases: ['Edem sekou!', 'Rele polis la!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '114', fire: '115', medical: '116', general: '114'
    },
    currency: {
      name: 'Haitian Gourde', code: 'HTG', exchangeRate: { usd: 0.0087, eur: 0.0079, gbp: 0.0067 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['French', 'Haitian Creole'],
  },
  // --- Safest Destinations (Batch 4) ---
  {
    city: 'Toronto',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.5,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 170,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.8, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.4, context: 'Very safe to walk alone. Canadian culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Downtown', 'The Annex', 'Yorkville', 'Distillery District'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'HI Toronto Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Fairmont Royal York', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Toronto can be cold in winter.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['TTC', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Canadian Dollar', code: 'CAD', exchangeRate: { usd: 0.80, eur: 0.72, gbp: 0.62 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'French'],
  },
  {
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
  },
  {
    city: 'Wellington',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 110,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Kiwi culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Te Aro', 'Mount Victoria', 'Kelburn', 'Thorndon'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'YHA Wellington', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.2, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'InterContinental Wellington', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Wellington can be windy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Metlink', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but windy.'
    },
    emergencyInfo: {
      police: '111', fire: '111', medical: '111', general: '111'
    },
    currency: {
      name: 'New Zealand Dollar', code: 'NZD', exchangeRate: { usd: 0.62, eur: 0.56, gbp: 0.48 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Māori'],
  },
  {
    city: 'Bern',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 8.7,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 100,
    lastUpdated: '6 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.4, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.6, context: 'Very safe to walk alone. Swiss culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Old Town', 'Kirchenfeld', 'Breitenrain', 'Länggasse'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Bern Backpackers Hotel Glocke', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Schweizerhof Bern', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SBB Mobile', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '117', fire: '118', medical: '144', general: '112'
    },
    currency: {
      name: 'Swiss Franc', code: 'CHF', exchangeRate: { usd: 1.1, eur: 1.0, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['German', 'English (widely spoken)'],
  },
  {
    city: 'Stockholm',
    country: 'Sweden',
    continent: 'Europe',
    countryCode: 'se',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.1,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 200,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.6, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.1, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.9, context: 'Very safe to walk alone. Swedish culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Norrmalm', 'Östermalm', 'Södermalm', 'Kungsholmen'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'City Backpackers Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Rival', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SL', 'Res i Sthlm', 'Google Maps'],
      emergencyPhrases: ['Hjälp (Help)', 'Ring polisen (Call the police)']
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
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Swedish Krona', code: 'SEK', exchangeRate: { usd: 0.11, eur: 0.10, gbp: 0.085 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Swedish', 'English (widely spoken)'],
  },
  // --- Least Safe Destinations (Batch 4) ---
  {
    city: 'Kingston',
    country: 'Jamaica',
    continent: 'North America',
    countryCode: 'jm',
    overallScore: 3.4,
    nightSafety: 2.1,
    publicTransit: 3.3,
    walkingAlone: 2.4,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 150,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.1, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.3, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.4, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['New Kingston'],
      caution: ['Half Way Tree'],
      avoid: ['Trench Town', 'Downtown Kingston at night']
    },
    accommodations: [
      { name: 'Spanish Court Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.4, notes: 'High security and professional staff.' },
      { name: 'Reggae Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Downtown', reportCount: 13, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['OnTime Jamaica', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '119', fire: '110', medical: '110', general: '119'
    },
    currency: {
      name: 'Jamaican Dollar', code: 'JMD', exchangeRate: { usd: 0.0065, eur: 0.0059, gbp: 0.0050 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['English', 'Jamaican Patois'],
  },
  {
    city: 'Caracas',
    country: 'Venezuela',
    continent: 'South America',
    countryCode: 've',
    overallScore: 2.5,
    nightSafety: 1.2,
    publicTransit: 2.8,
    walkingAlone: 1.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 180,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 1.2, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 2.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 1.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Altamira', 'Chacao', 'El Hatillo'],
      caution: ['Sabana Grande', 'La Candelaria'],
      avoid: ['Petare', '23 de Enero', 'Libertador at night']
    },
    accommodations: [
      { name: 'JW Marriott Hotel Caracas', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' },
      { name: 'Caracas Backpackers Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Sabana Grande', reportCount: 22, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '171', medical: '171', general: '911'
    },
    currency: {
      name: 'Venezuelan Bolívar', code: 'VES', exchangeRate: { usd: 0.00025, eur: 0.00022, gbp: 0.00019 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
  },
];

export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  return destinations.find(
    dest => 
      dest.city.toLowerCase().replace(/\s+/g, '-') === city &&
      dest.country.toLowerCase().replace(/\s+/g, '-') === country
  );
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/\s+/g, '-')}/${country.toLowerCase().replace(/\s+/g, '-')}`;
};