import { Destination } from '../types/destination';

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
  embassy: {
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
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
}

export const destinations: Destination[] = [
  // SAFEST DESTINATIONS (8.0+ Safety Score)
  
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
    embassy: {
      name: 'US Embassy Reykjavik',
      address: 'Laufásvegur 21, 101 Reykjavik',
      phone: '+354 595-2200',
      email: 'ReykjavikACS@state.gov',
      website: 'https://is.usembassy.gov/'
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
        description: 'Souvenir shops near major attractions often have inflated prices',
        severity: 'low'
      }
    ]
  },

  // Switzerland
  {
    city: 'Zurich',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 9.2,
    nightSafety: 9.4,
    publicTransit: 9.6,
    walkingAlone: 9.0,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 289,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.4,
        context: 'Extremely safe at night. Well-lit streets, low crime rates, and efficient police presence throughout the city.'
      },
      publicTransit: {
        score: 9.6,
        context: 'World-class public transport system. Trams, buses, and trains are punctual, clean, and very safe at all hours.'
      },
      walkingAlone: {
        score: 9.0,
        context: 'Very safe to walk alone. Swiss culture is respectful and harassment is extremely rare.'
      }
    },
    neighborhoods: {
      safe: ['Old Town', 'Bahnhofstrasse', 'Zurich West', 'Seefeld', 'Enge'],
      caution: ['Some areas around main train station late at night'],
      avoid: ['None - entire city is very safe']
    },
    accommodations: [
      {
        name: 'Youth Hostel Zurich',
        type: 'hostel',
        features: ['Modern facilities', 'Great location', 'Clean and safe'],
        rating: 4.3,
        notes: 'Well-maintained hostel with helpful staff and excellent facilities'
      },
      {
        name: 'Hotel Schweizerhof Zurich',
        type: 'hotel',
        features: ['Luxury hotel', 'Central location', 'Excellent service'],
        rating: 4.8,
        notes: 'Premium hotel with top-notch security and professional staff'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress smartly. Swiss tend to dress conservatively and elegantly.',
      firstTimers: 'Very easy for beginners. Expensive but extremely safe. German, French, and English spoken.',
      apps: ['ZVV (public transport)', 'SBB Mobile', 'Zurich Tourism'],
      emergencyPhrases: ['Hilfe (Help)', 'Polizei rufen (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Smart casual to formal. Swiss dress conservatively.',
      behaviorNorms: ['Punctuality is crucial', 'Quiet behavior in public', 'Respect for rules'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['Year-round (consistently safe)'],
      events: 'All seasons are safe. Summer is warmest, winter offers Christmas markets.'
    },
    emergencyInfo: {
      police: '117',
      fire: '118',
      medical: '144',
      general: '112'
    },
    embassy: {
      name: 'US Consulate General Zurich',
      address: 'Dufourstrasse 101, 8008 Zurich',
      phone: '+41-44-199-2555',
      email: 'zurichacs@state.gov',
      website: 'https://ch.usembassy.gov/embassy-consulates/zurich/'
    },
    currency: {
      name: 'Swiss Franc',
      code: 'CHF',
      exchangeRate: {
        usd: 1.10,
        eur: 1.02,
        gbp: 0.87
      },
      scamWarnings: [
        'Very few scams due to strict regulations',
        'ATM skimming is rare but possible at tourist areas',
        'Overpriced restaurants near tourist attractions'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Restaurant Markups',
        description: 'Restaurants near major attractions may charge significantly more than local establishments',
        severity: 'low'
      }
    ]
  },

  // Japan
  {
    city: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    countryCode: 'jp',
    overallScore: 9.1,
    nightSafety: 9.5,
    publicTransit: 9.8,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 847,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.5,
        context: 'Extremely safe at night in most areas. Well-lit streets, 24/7 convenience stores, and low crime rates. Even Shibuya and Shinjuku are safe late at night.'
      },
      publicTransit: {
        score: 9.8,
        context: 'World-class safety on trains and subways. Women-only cars available during rush hours. Staff are helpful and respectful.'
      },
      walkingAlone: {
        score: 8.9,
        context: 'Very safe during day and night. Occasional staring but minimal harassment. Tourist areas are particularly safe.'
      }
    },
    neighborhoods: {
      safe: ['Shibuya', 'Harajuku', 'Ginza', 'Asakusa', 'Shinjuku East', 'Roppongi (day)'],
      caution: ['Kabukicho (Red Light District)', 'Some parts of Ueno at night', 'Roppongi late night'],
      avoid: ['Tobita Shinchi area']
    },
    accommodations: [
      {
        name: 'Khaosan Tokyo Kabuki',
        type: 'hostel',
        features: ['Female-only dorms', '24/7 reception', 'Safe location'],
        rating: 4.5,
        notes: 'Staff speaks English, very clean, respectful atmosphere'
      },
      {
        name: 'Hotel Gracery Shinjuku',
        type: 'hotel',
        features: ['Central location', 'Safe area', 'English-speaking staff'],
        rating: 4.7,
        notes: 'Professional staff, great location near JR station'
      }
    ],
    alerts: [
      {
        title: 'Tourist Scam Alert',
        description: 'Fake monks asking for donations near Senso-ji Temple',
        location: 'Asakusa',
        reportCount: 12,
        severity: 'low',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly when visiting temples. Regular Western clothing is fine elsewhere.',
      firstTimers: 'Stay in Shibuya or Shinjuku for easy access to everything. Download Google Translate app.',
      apps: ['Hyperdia (train schedules)', 'Google Translate', 'Japan Official Travel App'],
      emergencyPhrases: ['Tasukete kudasai (Help me)', 'Keisatsu wo yonde kudasai (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Cover shoulders and knees in temples. Remove shoes when entering homes or some restaurants.',
      behaviorNorms: ['Bow slightly when greeting', 'Don\'t eat while walking', 'Keep voice down on trains'],
      perception: 'Solo female travelers are common and respected. You may receive extra help from locals.'
    },
    bestTimeToVisit: {
      safestMonths: ['March-May', 'September-November'],
      events: 'Cherry blossom season (March-April) is crowded but very safe. Avoid Golden Week (late April-early May) due to crowds.'
    },
    emergencyInfo: {
      police: '110',
      fire: '119',
      medical: '119',
      general: '110'
    },
    embassy: {
      name: 'US Embassy Tokyo',
      address: '1-10-5 Akasaka, Minato-ku, Tokyo 107-8420',
      phone: '+81-3-3224-5000',
      email: 'TokyoACS@state.gov',
      website: 'https://jp.usembassy.gov/'
    },
    currency: {
      name: 'Japanese Yen',
      code: 'JPY',
      exchangeRate: {
        usd: 0.0067,
        eur: 0.0062,
        gbp: 0.0053
      },
      scamWarnings: [
        'Very few scams due to honest culture',
        'Fake monks near temples asking for donations',
        'Overpriced bars in entertainment districts - check prices first'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Monk Donations',
        description: 'People dressed as monks asking for donations near temples, particularly Senso-ji',
        severity: 'low'
      },
      {
        title: 'Overpriced Entertainment Districts',
        description: 'Some bars in Roppongi and Kabukicho may have hidden charges - always check prices upfront',
        severity: 'medium'
      }
    ]
  },

  // Singapore
  {
    city: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    countryCode: 'sg',
    overallScore: 9.3,
    nightSafety: 9.6,
    publicTransit: 9.7,
    walkingAlone: 9.2,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 445,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.6,
        context: 'Extremely safe at all hours. Well-lit streets, heavy police presence, and strict laws create a very secure environment.'
      },
      publicTransit: {
        score: 9.7,
        context: 'World-class MRT system with excellent safety measures. Clean, efficient, and very safe even late at night.'
      },
      walkingAlone: {
        score: 9.2,
        context: 'Very safe to walk alone anywhere in the city. Respectful culture with minimal harassment.'
      }
    },
    neighborhoods: {
      safe: ['Orchard Road', 'Marina Bay', 'Chinatown', 'Little India', 'Clarke Quay', 'Sentosa'],
      caution: ['Some late-night entertainment districts'],
      avoid: ['None - entire city is very safe']
    },
    accommodations: [
      {
        name: 'The Pod Boutique Capsule Hotel',
        type: 'hostel',
        features: ['Female-only pods', 'Central location', 'Modern facilities'],
        rating: 4.6,
        notes: 'Innovative capsule design, very clean, excellent security'
      },
      {
        name: 'Marina Bay Sands',
        type: 'hotel',
        features: ['Luxury hotel', 'Iconic location', 'World-class security'],
        rating: 4.8,
        notes: 'Premium hotel with excellent safety standards and professional staff'
      }
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
      police: '999',
      fire: '995',
      medical: '995',
      general: '999'
    },
    embassy: {
      name: 'US Embassy Singapore',
      address: '27 Napier Road, Singapore 258508',
      phone: '+65-6476-9100',
      email: 'SingaporeACS@state.gov',
      website: 'https://sg.usembassy.gov/'
    },
    currency: {
      name: 'Singapore Dollar',
      code: 'SGD',
      exchangeRate: {
        usd: 0.74,
        eur: 0.69,
        gbp: 0.59
      },
      scamWarnings: [
        'Very few scams due to strict laws',
        'Fake charity collectors - verify credentials',
        'Overpriced tourist restaurants - check reviews first'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Charity Collectors',
        description: 'People claiming to collect for charities without proper credentials',
        severity: 'low'
      }
    ]
  },

  // Denmark
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
      nightSafety: {
        score: 8.7,
        context: 'Very safe at night in most areas. Well-lit streets and low crime rates. Nørrebro can be livelier but still generally safe.'
      },
      publicTransit: {
        score: 9.2,
        context: 'Excellent public transport system. Buses and metro are clean, punctual, and very safe even late at night.'
      },
      walkingAlone: {
        score: 9.1,
        context: 'Extremely safe to walk alone. Danish culture is very respectful and harassment is rare.'
      }
    },
    neighborhoods: {
      safe: ['Indre By (City Center)', 'Vesterbro', 'Østerbro', 'Frederiksberg', 'Nyhavn'],
      caution: ['Some parts of Nørrebro late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      {
        name: 'Generator Copenhagen',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', 'Modern facilities'],
        rating: 4.4,
        notes: 'Stylish hostel with great common areas and helpful staff'
      },
      {
        name: 'Hotel d\'Angleterre',
        type: 'hotel',
        features: ['Luxury hotel', 'Historic building', 'Prime location'],
        rating: 4.9,
        notes: 'Prestigious hotel with excellent security and world-class service'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Casual, comfortable clothing. Danes dress stylishly but practically.',
      firstTimers: 'Very easy city for first-time visitors. Most people speak excellent English.',
      apps: ['DOT Tickets', 'Citymapper', 'Copenhagen Card'],
      emergencyPhrases: ['Hjælp (Help)', 'Ring til politiet (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Direct communication style', 'Punctuality is important', 'Cycling culture'],
      perception: 'Solo female travelers are completely normal and common.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months are ideal. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '114',
      fire: '112',
      medical: '112',
      general: '112'
    },
    embassy: {
      name: 'US Embassy Copenhagen',
      address: 'Dag Hammarskjölds Allé 24, 2100 Copenhagen',
      phone: '+45-33-41-71-00',
      email: 'CopenhagenACS@state.gov',
      website: 'https://dk.usembassy.gov/'
    },
    currency: {
      name: 'Danish Krone',
      code: 'DKK',
      exchangeRate: {
        usd: 0.15,
        eur: 0.13,
        gbp: 0.11
      },
      scamWarnings: [
        'Very few scams due to honest culture',
        'Pickpocketing in tourist areas is rare but possible',
        'Overpriced tourist restaurants - locals eat at reasonable prices'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Price Inflation',
        description: 'Some restaurants and shops near major attractions charge tourist prices',
        severity: 'low'
      }
    ]
  },

  // ADDITIONAL 20 NEW DESTINATIONS

  // Norway - Oslo
  {
    city: 'Oslo',
    country: 'Norway',
    continent: 'Europe',
    countryCode: 'no',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.0,
    walkingAlone: 9.1,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 198,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.6,
        context: 'Very safe at night with well-lit streets and low crime rates. Police presence is visible and helpful.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Excellent public transport system with buses, trams, and metro. Very safe and reliable.'
      },
      walkingAlone: {
        score: 9.1,
        context: 'Extremely safe for solo female travelers. Norwegian culture is very respectful.'
      }
    },
    neighborhoods: {
      safe: ['City Center', 'Aker Brygge', 'Grünerløkka', 'Frogner', 'Majorstuen'],
      caution: ['Some areas around Central Station late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      {
        name: 'Anker Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', 'Clean facilities'],
        rating: 4.2,
        notes: 'Well-located hostel with helpful staff and good security'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Norwegians dress practically and stylishly.',
      firstTimers: 'Very easy for beginners. Most people speak excellent English. Expensive city.',
      apps: ['Ruter (public transport)', 'Visit Oslo', 'Yr (weather)'],
      emergencyPhrases: ['Hjelp (Help)', 'Ring politiet (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. Dress warmly in winter.',
      behaviorNorms: ['Punctuality is important', 'Quiet, reserved culture', 'Environmental consciousness'],
      perception: 'Solo female travelers are very common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months are ideal with long daylight hours. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112',
      fire: '110',
      medical: '113',
      general: '112'
    },
    embassy: {
      name: 'US Embassy Oslo',
      address: 'Morgedalsvegen 36, 0378 Oslo',
      phone: '+47-21-30-85-40',
      email: 'OsloACS@state.gov',
      website: 'https://no.usembassy.gov/'
    },
    currency: {
      name: 'Norwegian Krone',
      code: 'NOK',
      exchangeRate: {
        usd: 0.094,
        eur: 0.087,
        gbp: 0.074
      },
      scamWarnings: [
        'Very few scams due to honest culture',
        'Tourist shops may be overpriced',
        'Some restaurants charge tourist prices'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Price Markups',
        description: 'Some establishments near major attractions charge significantly more than local prices',
        severity: 'low'
      }
    ]
  },

  // Finland - Helsinki
  {
    city: 'Helsinki',
    country: 'Finland',
    continent: 'Europe',
    countryCode: 'fi',
    overallScore: 9.0,
    nightSafety: 8.8,
    publicTransit: 9.1,
    walkingAlone: 9.3,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 156,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.8,
        context: 'Very safe at night with excellent lighting and low crime rates. Finnish culture is very respectful.'
      },
      publicTransit: {
        score: 9.1,
        context: 'Excellent public transport with trams, buses, and metro. Very safe and punctual.'
      },
      walkingAlone: {
        score: 9.3,
        context: 'One of the safest cities for solo female travelers. Finns are reserved but helpful.'
      }
    },
    neighborhoods: {
      safe: ['City Center', 'Punavuori', 'Kamppi', 'Kruununhaka', 'Eira'],
      caution: ['None - entire city is very safe'],
      avoid: ['None - no dangerous areas']
    },
    accommodations: [
      {
        name: 'Hostel Academica',
        type: 'hostel',
        features: ['Clean facilities', 'Central location', 'Good value'],
        rating: 4.2,
        notes: 'Simple but clean hostel with helpful staff and good location'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Finns dress practically and stylishly.',
      firstTimers: 'Very easy for beginners. Most people speak excellent English.',
      apps: ['HSL (public transport)', 'MyHelsinki', 'Reittiopas'],
      emergencyPhrases: ['Apua (Help)', 'Soita poliisille (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Practical and warm clothing. Casual dress is normal.',
      behaviorNorms: ['Quiet, reserved culture', 'Respect for personal space', 'Punctuality important'],
      perception: 'Solo female travelers are very common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September', 'December-February (winter activities)'],
      events: 'Summer for white nights, winter for Northern Lights. Always safe.'
    },
    emergencyInfo: {
      police: '112',
      fire: '112',
      medical: '112',
      general: '112'
    },
    embassy: {
      name: 'US Embassy Helsinki',
      address: 'Itäinen Puistotie 14B, 00140 Helsinki',
      phone: '+358-9-616-250',
      email: 'HelsinkiACS@state.gov',
      website: 'https://fi.usembassy.gov/'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.08,
        eur: 1.00,
        gbp: 0.85
      },
      scamWarnings: [
        'Very few scams due to honest culture',
        'Tourist restaurants may be overpriced',
        'ATM skimming is extremely rare'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Restaurant Prices',
        description: 'Restaurants near major attractions may charge higher prices than local establishments',
        severity: 'low'
      }
    ]
  },

  // Netherlands - Amsterdam
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    continent: 'Europe',
    countryCode: 'nl',
    overallScore: 8.4,
    nightSafety: 8.1,
    publicTransit: 9.0,
    walkingAlone: 8.3,
    tags: ['insider-tips'],
    bgColor: 'bg-green-50',
    reviewCount: 567,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.1,
        context: 'Generally safe at night, especially in central areas. Red Light District can be crowded but is patrolled.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Excellent tram and bus system. Very safe and reliable. Night buses available on weekends.'
      },
      walkingAlone: {
        score: 8.3,
        context: 'Safe to walk alone during day and evening. Dutch culture is very tolerant and respectful.'
      }
    },
    neighborhoods: {
      safe: ['Jordaan', 'Museum Quarter', 'Vondelpark area', 'Grachtengordel', 'De Pijp'],
      caution: ['Red Light District (crowded)', 'Some areas near Central Station at night'],
      avoid: ['Bijlmermeer (outside city center)', 'Isolated areas along canals at night']
    },
    accommodations: [
      {
        name: 'ClinkNOORD',
        type: 'hostel',
        features: ['Female-only dorms', 'Modern facilities', 'Good location'],
        rating: 4.4,
        notes: 'Stylish hostel with great atmosphere and helpful staff'
      }
    ],
    alerts: [
      {
        title: 'Bicycle Theft Alert',
        description: 'High rates of bicycle theft throughout the city',
        location: 'City-wide',
        reportCount: 45,
        severity: 'low',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: 'Casual, comfortable clothing. Dress for cycling and walking.',
      firstTimers: 'Learn basic cycling rules. Most people speak excellent English.',
      apps: ['9292 (public transport)', 'Citymapper', 'GVB'],
      emergencyPhrases: ['Help (English widely spoken)', 'Bel de politie (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Direct communication', 'Cycling etiquette', 'Tolerance and openness'],
      perception: 'Solo female travelers are very common and completely normal.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring and summer are ideal. King\'s Day (April 27) is crowded but fun and safe.'
    },
    emergencyInfo: {
      police: '112',
      fire: '112',
      medical: '112',
      general: '112'
    },
    embassy: {
      name: 'US Consulate General Amsterdam',
      address: 'Museumplein 19, 1071 DJ Amsterdam',
      phone: '+31-20-575-5309',
      email: 'AmsterdamACS@state.gov',
      website: 'https://nl.usembassy.gov/embassy-consulates/amsterdam/'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.08,
        eur: 1.00,
        gbp: 0.85
      },
      scamWarnings: [
        'Pickpocketing in tourist areas',
        'Bicycle rental scams - use reputable companies',
        'Overpriced tourist restaurants'
      ]
    },
    scamWarnings: [
      {
        title: 'Bicycle Rental Scams',
        description: 'Some unlicensed bike rental companies may overcharge or provide poor quality bikes',
        severity: 'low'
      },
      {
        title: 'Pickpocketing in Tourist Areas',
        description: 'Increased pickpocketing around major attractions and on public transport',
        severity: 'medium'
      }
    ]
  },

  // MEDIUM SAFETY DESTINATIONS (6.0-7.9 Safety Score)

  // Spain - Barcelona
  {
    city: 'Barcelona',
    country: 'Spain',
    continent: 'Europe',
    countryCode: 'es',
    overallScore: 7.3,
    nightSafety: 6.8,
    publicTransit: 8.1,
    walkingAlone: 7.2,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 789,
    lastUpdated: '5 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 6.8,
        context: 'Generally safe in tourist areas but watch for pickpockets. Avoid El Raval and parts of Barceloneta late at night.'
      },
      publicTransit: {
        score: 8.1,
        context: 'Metro is safe and efficient. Watch for pickpockets during rush hour. Night buses are reliable.'
      },
      walkingAlone: {
        score: 7.2,
        context: 'Safe during day in most areas. Some catcalling reported, especially near beaches and nightlife areas.'
      }
    },
    neighborhoods: {
      safe: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Gothic Quarter (day)'],
      caution: ['El Born', 'Barceloneta (night)', 'Park Güell area (evening)'],
      avoid: ['El Raval (night)', 'Some parts of Nou Barris', 'Empty metro stations late at night']
    },
    accommodations: [
      {
        name: 'Generator Barcelona',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', '24/7 security'],
        rating: 4.3,
        notes: 'Modern hostel with good security. Staff speaks multiple languages.'
      }
    ],
    alerts: [
      {
        title: 'Pickpocket Hotspot',
        description: 'Increased pickpocketing on Line 3 metro during tourist season',
        location: 'Metro Line 3 (Liceu to Drassanes)',
        reportCount: 34,
        severity: 'medium',
        dateReported: '4 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress stylishly but avoid flashy jewelry. Comfortable walking shoes recommended.',
      firstTimers: 'Stay in Eixample or Gràcia. Learn basic Spanish phrases. Keep copies of documents.',
      apps: ['Citymapper', 'TMB App', 'Uber', 'Barcelona City Guide'],
      emergencyPhrases: ['Ayuda (Help)', 'Llama a la policía (Call police)', 'Déjame en paz (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Casual but stylish. Cover up when visiting churches. Beachwear only at beaches.',
      behaviorNorms: ['Dinner is late (9-10 PM)', 'Siesta time (2-5 PM)', 'Greet with kisses on both cheeks'],
      perception: 'Solo female travelers are common. You may receive compliments or attention from men.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-June', 'September-October'],
      events: 'Avoid peak summer due to crowds and heat. La Mercè festival in September is fun but crowded.'
    },
    emergencyInfo: {
      police: '112',
      fire: '112',
      medical: '112',
      general: '112'
    },
    embassy: {
      name: 'US Consulate General Barcelona',
      address: 'Paseo Reina Elisenda de Montcada, 23, 08034 Barcelona',
      phone: '+34-93-280-2227',
      email: 'BarcelonaACS@state.gov',
      website: 'https://es.usembassy.gov/embassy-consulates/barcelona/'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.08,
        eur: 1.00,
        gbp: 0.85
      },
      scamWarnings: [
        'Pickpocketing is very common in tourist areas',
        'Fake police asking for documents',
        'Overpriced restaurants near attractions',
        'ATM skimming in tourist zones'
      ]
    },
    scamWarnings: [
      {
        title: 'Pickpocketing Epidemic',
        description: 'Very high rates of pickpocketing on public transport and tourist areas',
        severity: 'high'
      },
      {
        title: 'Fake Police Scam',
        description: 'People posing as police asking to see documents and wallets',
        severity: 'medium'
      },
      {
        title: 'Restaurant Tourist Traps',
        description: 'Restaurants near major attractions often overcharge and provide poor quality food',
        severity: 'medium'
      }
    ]
  },

  // Thailand - Bangkok
  {
    city: 'Bangkok',
    country: 'Thailand',
    continent: 'Asia',
    countryCode: 'th',
    overallScore: 6.7,
    nightSafety: 5.8,
    publicTransit: 7.3,
    walkingAlone: 6.2,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 892,
    lastUpdated: '3 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 5.8,
        context: 'Tourist areas like Sukhumvit are generally safe, but avoid Khao San Road late at night. Be cautious in red-light districts.'
      },
      publicTransit: {
        score: 7.3,
        context: 'BTS and MRT are safe and clean. Tuk-tuks can be unreliable. Use Grab for safer transportation.'
      },
      walkingAlone: {
        score: 6.2,
        context: 'Generally safe during day in tourist areas. Some harassment reported, especially from touts and vendors.'
      }
    },
    neighborhoods: {
      safe: ['Sukhumvit', 'Siam', 'Chatuchak', 'Thonglor', 'Asok'],
      caution: ['Khao San Road', 'Chinatown', 'Some parts of Silom', 'Pratunam'],
      avoid: ['Patpong at night', 'Isolated sois (alleys)', 'Areas around Lumphini Park at night']
    },
    accommodations: [
      {
        name: 'Lub d Bangkok Silom',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', 'Good security'],
        rating: 4.3,
        notes: 'Modern hostel with helpful staff and good safety measures'
      }
    ],
    alerts: [
      {
        title: 'Gem Scam Warning',
        description: 'Fake gem dealers targeting tourists near Grand Palace',
        location: 'Grand Palace area',
        reportCount: 19,
        severity: 'medium',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly for temples. Casual clothing fine elsewhere, but avoid revealing outfits.',
      firstTimers: 'Stay in Sukhumvit or Siam areas. Learn basic Thai phrases. Always negotiate prices.',
      apps: ['Grab', 'Google Translate', 'Bangkok Metro'],
      emergencyPhrases: ['Chuay duay (Help)', 'Riak tamruat (Call police)']
    },
    culturalExpectations: {
      dressCode: 'Cover shoulders and knees in temples. Remove shoes when entering sacred spaces.',
      behaviorNorms: ['Wai greeting (hands together)', 'Don\'t touch heads', 'Respect Buddha images'],
      perception: 'Solo female travelers are common. Some attention from vendors and touts is normal.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Cool season is best. Avoid rainy season (May-October) and extreme heat (March-May).'
    },
    emergencyInfo: {
      police: '191',
      fire: '199',
      medical: '1669',
      general: '191'
    },
    embassy: {
      name: 'US Embassy Bangkok',
      address: '95 Wireless Road, Lumpini, Pathumwan, Bangkok 10330',
      phone: '+66-2-205-4000',
      email: 'acsbkk@state.gov',
      website: 'https://th.usembassy.gov/'
    },
    currency: {
      name: 'Thai Baht',
      code: 'THB',
      exchangeRate: {
        usd: 0.028,
        eur: 0.026,
        gbp: 0.022
      },
      scamWarnings: [
        'Gem scams near tourist attractions',
        'Tuk-tuk drivers taking you to overpriced shops',
        'Fake police checkpoints',
        'Jet ski rental scams at beaches'
      ]
    },
    scamWarnings: [
      {
        title: 'Gem Scam',
        description: 'Elaborate scams involving fake gem dealers and government officials near major temples',
        severity: 'high'
      },
      {
        title: 'Tuk-tuk Commission Scams',
        description: 'Drivers offering cheap rides but taking you to overpriced shops where they get commission',
        severity: 'medium'
      },
      {
        title: 'Fake Police Checkpoints',
        description: 'People posing as police demanding to see money for drug checks',
        severity: 'medium'
      }
    ]
  },

  // LOW SAFETY DESTINATIONS (Below 6.0 Safety Score)

  // India - Mumbai
  {
    city: 'Mumbai',
    country: 'India',
    continent: 'Asia',
    countryCode: 'in',
    overallScore: 5.2,
    nightSafety: 3.8,
    publicTransit: 5.9,
    walkingAlone: 4.1,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 1234,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 3.8,
        context: 'Avoid walking alone after 9 PM. Well-lit main roads like Marine Drive are safer. Avoid isolated areas completely.'
      },
      publicTransit: {
        score: 5.9,
        context: 'Local trains have ladies compartments - use them always. Avoid rush hours if possible. Taxis and Uber are safer options.'
      },
      walkingAlone: {
        score: 4.1,
        context: 'Expect staring and comments. Dress conservatively. Stay in groups when possible, especially in crowded markets.'
      }
    },
    neighborhoods: {
      safe: ['Bandra West', 'Juhu', 'Colaba', 'Marine Drive area', 'Powai'],
      caution: ['Andheri', 'Santa Cruz', 'Most tourist markets', 'Churchgate'],
      avoid: ['Dharavi', 'Kurla', 'Isolated areas after dark', 'Empty train stations at night']
    },
    accommodations: [
      {
        name: 'The Taj Mahal Palace',
        type: 'hotel',
        features: ['Luxury hotel', 'Excellent security', 'Safe location'],
        rating: 4.8,
        notes: 'Top-tier security and professional staff. Very safe choice.'
      }
    ],
    alerts: [
      {
        title: 'Increased Harassment Reports',
        description: 'Multiple reports of following and inappropriate comments',
        location: 'Crawford Market area',
        reportCount: 28,
        severity: 'high',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress very conservatively. Long pants/skirts, covered shoulders. Avoid tight or revealing clothing.',
      firstTimers: 'Stay in South Mumbai (Colaba, Fort area). Book accommodations in advance. Use Uber/Ola instead of local taxis.',
      apps: ['Uber', 'Ola Cabs', 'Zomato', 'Mumbai Police App'],
      emergencyPhrases: ['Madad karo (Help)', 'Police bulao (Call police)', 'Chodo mujhe (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Very conservative dress required. Cover arms, legs, and avoid low necklines.',
      behaviorNorms: ['Avoid eye contact with men', 'Don\'t shake hands with men', 'Be firm but polite when declining offers'],
      perception: 'Solo female travelers are unusual and may attract unwanted attention. Be prepared for staring and questions.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-February'],
      events: 'Avoid monsoon season (June-September). Ganesh Chaturthi can be very crowded and chaotic.'
    },
    emergencyInfo: {
      police: '100',
      fire: '101',
      medical: '102',
      general: '112'
    },
    embassy: {
      name: 'US Consulate General Mumbai',
      address: 'C-49, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400051',
      phone: '+91-22-2672-4000',
      email: 'mumbaiacsinfo@state.gov',
      website: 'https://in.usembassy.gov/embassy-consulates/mumbai/'
    },
    currency: {
      name: 'Indian Rupee',
      code: 'INR',
      exchangeRate: {
        usd: 0.012,
        eur: 0.011,
        gbp: 0.0095
      },
      scamWarnings: [
        'Taxi drivers refusing to use meters',
        'Fake travel agents',
        'Overcharging at restaurants and shops',
        'ATM skimming and card cloning'
      ]
    },
    scamWarnings: [
      {
        title: 'Taxi Meter Refusal',
        description: 'Drivers refusing to use meters and demanding fixed high prices',
        severity: 'high'
      },
      {
        title: 'Tourist Price Inflation',
        description: 'Shops and restaurants charging significantly higher prices to foreign tourists',
        severity: 'high'
      },
      {
        title: 'Fake Travel Agents',
        description: 'Unlicensed agents selling fake tickets or overpriced tours',
        severity: 'medium'
      }
    ]
  },

  // Egypt - Cairo
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
      nightSafety: {
        score: 3.2,
        context: 'Not recommended to walk alone at night. Stick to well-lit tourist areas with security. Use hotel transport or trusted taxis.'
      },
      publicTransit: {
        score: 5.1,
        context: 'Metro has women-only cars - use them. Buses can be crowded and uncomfortable. Uber is safer option.'
      },
      walkingAlone: {
        score: 3.9,
        context: 'Expect significant harassment including staring, comments, and following. Dress very conservatively and stay alert.'
      }
    },
    neighborhoods: {
      safe: ['Zamalek', 'New Cairo', 'Maadi', 'Hotel areas in Giza'],
      caution: ['Downtown Cairo', 'Khan el-Khalili (tourist areas)', 'Coptic Cairo'],
      avoid: ['Islamic Cairo at night', 'Shubra', 'Isolated areas', 'Non-tourist areas alone']
    },
    accommodations: [
      {
        name: 'Four Seasons Hotel Cairo at Nile Plaza',
        type: 'hotel',
        features: ['Luxury hotel', 'Excellent security', 'Safe location'],
        rating: 4.7,
        notes: 'Top-tier security and professional staff. Very safe choice for solo women.'
      }
    ],
    alerts: [
      {
        title: 'Increased Harassment Reports',
        description: 'Multiple reports of aggressive harassment and following',
        location: 'Khan el-Khalili bazaar area',
        reportCount: 42,
        severity: 'high',
        dateReported: '4 days ago'
      }
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
      police: '122',
      fire: '180',
      medical: '123',
      general: '122'
    },
    embassy: {
      name: 'US Embassy Cairo',
      address: '5 Tawfik Diab Street, Garden City, Cairo',
      phone: '+20-2-2797-3300',
      email: 'ConsularCairoACS@state.gov',
      website: 'https://eg.usembassy.gov/'
    },
    currency: {
      name: 'Egyptian Pound',
      code: 'EGP',
      exchangeRate: {
        usd: 0.032,
        eur: 0.030,
        gbp: 0.025
      },
      scamWarnings: [
        'Fake police demanding money',
        'Overcharging at tourist sites',
        'Fake papyrus and antiques',
        'Camel and horse ride scams at pyramids'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Police Scam',
        description: 'People posing as police demanding to see documents and money',
        severity: 'high'
      },
      {
        title: 'Pyramid Area Scams',
        description: 'Aggressive vendors, fake guides, and overpriced camel rides around the pyramids',
        severity: 'high'
      },
      {
        title: 'Papyrus Shop Scams',
        description: 'Fake papyrus sold as authentic, often at extremely high prices',
        severity: 'medium'
      }
    ]
  },

  // Morocco - Marrakech
  {
    city: 'Marrakech',
    country: 'Morocco',
    continent: 'Africa',
    countryCode: 'ma',
    overallScore: 5.9,
    nightSafety: 4.5,
    publicTransit: 6.2,
    walkingAlone: 5.1,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 534,
    lastUpdated: '5 days ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 4.5,
        context: 'Medina can be confusing and unsafe at night. Stick to main squares like Jemaa el-Fnaa. Use hotel transport after dark.'
      },
      publicTransit: {
        score: 6.2,
        context: 'Limited public transport. Taxis are common but negotiate prices. Petit taxis are safer than grand taxis.'
      },
      walkingAlone: {
        score: 5.1,
        context: 'Expect harassment, especially in souks. Persistent vendors and guides. Dress conservatively and be firm but polite.'
      }
    },
    neighborhoods: {
      safe: ['Gueliz (New Town)', 'Hivernage', 'Major hotel areas', 'Jemaa el-Fnaa (day)'],
      caution: ['Medina (Old Town)', 'Souks during day'],
      avoid: ['Medina at night', 'Isolated areas', 'Industrial outskirts']
    },
    accommodations: [
      {
        name: 'La Mamounia',
        type: 'hotel',
        features: ['Luxury hotel', 'Excellent security', 'Safe location'],
        rating: 4.8,
        notes: 'World-class hotel with top security and professional staff'
      }
    ],
    alerts: [
      {
        title: 'Fake Guide Scam',
        description: 'Unofficial guides demanding payment and becoming aggressive',
        location: 'Medina entrances and major squares',
        reportCount: 31,
        severity: 'medium',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress conservatively. Cover shoulders, arms, and legs. Loose-fitting clothing recommended.',
      firstTimers: 'Consider staying in Gueliz first. Learn basic French/Arabic phrases. Be prepared for persistent vendors.',
      apps: ['Careem', 'Google Translate', 'Morocco Travel Guide'],
      emergencyPhrases: ['Mosa\'ada (Help)', 'Itasal bil-shurta (Call police)', 'Baraka (Stop/Enough)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress essential. Cover arms and legs, avoid tight clothing.',
      behaviorNorms: ['Bargaining is expected', 'Be firm with vendors', 'Respect Islamic customs'],
      perception: 'Solo female travelers attract attention. Be prepared for offers of help and persistent approaches.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Avoid summer heat. Spring and fall are most comfortable and safer for walking.'
    },
    emergencyInfo: {
      police: '19',
      fire: '15',
      medical: '15',
      general: '19'
    },
    embassy: {
      name: 'US Consulate General Casablanca',
      address: '8 Boulevard Moulay Youssef, Casablanca 20000',
      phone: '+212-522-26-45-50',
      email: 'CasablancaACS@state.gov',
      website: 'https://ma.usembassy.gov/embassy-consulates/casablanca/'
    },
    currency: {
      name: 'Moroccan Dirham',
      code: 'MAD',
      exchangeRate: {
        usd: 0.10,
        eur: 0.093,
        gbp: 0.079
      },
      scamWarnings: [
        'Fake guides demanding payment',
        'Overpriced carpet and souvenir shops',
        'Restaurant bill padding',
        'Fake charity collectors'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Guide Scam',
        description: 'Unofficial guides offering help then demanding large payments and becoming aggressive',
        severity: 'high'
      },
      {
        title: 'Carpet Shop Pressure Tactics',
        description: 'Aggressive sales tactics in carpet shops with inflated prices and pressure to buy',
        severity: 'medium'
      },
      {
        title: 'Restaurant Bill Padding',
        description: 'Adding extra items to bills or charging for bread and olives that were brought automatically',
        severity: 'medium'
      }
    ]
  },

  // Brazil - Rio de Janeiro
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
    reviewCount: 789,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 2.9,
        context: 'Very dangerous at night. Avoid walking alone after dark. Stick to well-lit tourist areas with security. Use hotel transport or trusted taxis only.'
      },
      publicTransit: {
        score: 4.8,
        context: 'Metro is relatively safe during day but avoid at night. Buses can be dangerous. Uber is much safer option.'
      },
      walkingAlone: {
        score: 3.7,
        context: 'High risk of robbery and harassment. Stay in tourist areas, don\'t display valuables, and remain very alert at all times.'
      }
    },
    neighborhoods: {
      safe: ['Ipanema (beach area)', 'Copacabana (day)', 'Leblon', 'Barra da Tijuca'],
      caution: ['Copacabana at night', 'Santa Teresa', 'Centro during day'],
      avoid: ['Favelas', 'Centro at night', 'Isolated beaches', 'Public transport at night']
    },
    accommodations: [
      {
        name: 'Belmond Copacabana Palace',
        type: 'hotel',
        features: ['Luxury hotel', 'Excellent security', 'Prime location'],
        rating: 4.9,
        notes: 'World-class security and service. Safest option for solo female travelers.'
      }
    ],
    alerts: [
      {
        title: 'Beach Robbery Increase',
        description: 'Increased reports of phone and bag snatching on beaches',
        location: 'Copacabana and Ipanema beaches',
        reportCount: 67,
        severity: 'high',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress down, avoid jewelry and expensive items. Beach attire only at beaches.',
      firstTimers: 'Stay in Ipanema/Copacabana. Never walk alone at night. Keep minimal cash and copies of documents.',
      apps: ['Uber', '99 Taxi', 'Google Translate', 'Rio Tourism'],
      emergencyPhrases: ['Socorro (Help)', 'Chama a polícia (Call police)', 'Me deixa em paz (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Casual beach culture but dress modestly away from beaches. Avoid flashy clothing.',
      behaviorNorms: ['Friendly, warm culture', 'Physical greetings common', 'Beach culture is relaxed'],
      perception: 'Solo female travelers are not uncommon but attract attention. Be very cautious and aware.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September (winter - less crowded)'],
      events: 'Avoid Carnival unless staying in secure accommodations. Summer is crowded and more dangerous.'
    },
    emergencyInfo: {
      police: '190',
      fire: '193',
      medical: '192',
      general: '190'
    },
    embassy: {
      name: 'US Consulate General Rio de Janeiro',
      address: 'Av. Presidente Wilson, 147, Centro, Rio de Janeiro',
      phone: '+55-21-3823-2000',
      email: 'RiodeJaneiroACS@state.gov',
      website: 'https://br.usembassy.gov/embassy-consulates/rio-de-janeiro/'
    },
    currency: {
      name: 'Brazilian Real',
      code: 'BRL',
      exchangeRate: {
        usd: 0.20,
        eur: 0.18,
        gbp: 0.15
      },
      scamWarnings: [
        'Fake police demanding to see money',
        'Beach vendors overcharging tourists',
        'ATM skimming and card cloning',
        'Taxi drivers taking longer routes'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Police Scam',
        description: 'Criminals posing as police demanding to see documents and money',
        severity: 'high'
      },
      {
        title: 'Beach Vendor Overcharging',
        description: 'Vendors on beaches charging extremely high prices to tourists',
        severity: 'medium'
      },
      {
        title: 'ATM Skimming',
        description: 'Card skimming devices on ATMs, especially in tourist areas',
        severity: 'high'
      }
    ]
  },

  // South Africa - Cape Town
  {
    city: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 4.1,
    nightSafety: 2.8,
    publicTransit: 4.2,
    walkingAlone: 3.5,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 456,
    lastUpdated: '3 days ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 2.8,
        context: 'Very dangerous at night. High crime rates including violent crime. Never walk alone after dark. Use secure transport only.'
      },
      publicTransit: {
        score: 4.2,
        context: 'Public transport is not recommended for tourists. Use Uber or private transport. Avoid minibus taxis completely.'
      },
      walkingAlone: {
        score: 3.5,
        context: 'High risk of robbery and assault. Stay in tourist areas during day only. Always be aware of surroundings.'
      }
    },
    neighborhoods: {
      safe: ['V&A Waterfront', 'Sea Point (day)', 'Camps Bay (day)', 'Green Point (day)'],
      caution: ['City Center (day only)', 'Observatory', 'Woodstock (day only)'],
      avoid: ['Townships', 'City Center at night', 'Any area after dark', 'Public transport']
    },
    accommodations: [
      {
        name: 'The Table Bay Hotel',
        type: 'hotel',
        features: ['Luxury hotel', 'Excellent security', 'Safe location'],
        rating: 4.8,
        notes: 'Top-tier security at V&A Waterfront. Safest option for solo travelers.'
      }
    ],
    alerts: [
      {
        title: 'Violent Crime Increase',
        description: 'Increased reports of armed robberies in tourist areas',
        location: 'City Center and surrounding areas',
        reportCount: 89,
        severity: 'high',
        dateReported: '1 day ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress down completely. No jewelry, expensive items, or anything that shows wealth.',
      firstTimers: 'Stay at V&A Waterfront. Use only Uber or hotel transport. Never walk anywhere alone.',
      apps: ['Uber', 'Bolt', 'Cape Town Tourism', 'Emergency SOS'],
      emergencyPhrases: ['Help (English spoken)', 'Call police (10111)']
    },
    culturalExpectations: {
      dressCode: 'Dress very modestly and avoid showing any signs of wealth.',
      behaviorNorms: ['Be very aware of surroundings', 'Don\'t display phones or cameras openly', 'Stay in groups'],
      perception: 'Solo female travelers are at high risk. Local advice strongly recommends against solo travel.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March (summer - more people around)'],
      events: 'Summer months have more tourists and activity, which can be slightly safer.'
    },
    emergencyInfo: {
      police: '10111',
      fire: '10177',
      medical: '10177',
      general: '112'
    },
    embassy: {
      name: 'US Consulate General Cape Town',
      address: '2 Reddam Ave, Westlake, Cape Town, 7945',
      phone: '+27-21-702-7300',
      email: 'CapeTownACS@state.gov',
      website: 'https://za.usembassy.gov/embassy-consulates/cape-town/'
    },
    currency: {
      name: 'South African Rand',
      code: 'ZAR',
      exchangeRate: {
        usd: 0.055,
        eur: 0.051,
        gbp: 0.043
      },
      scamWarnings: [
        'ATM robberies and skimming',
        'Fake police demanding bribes',
        'Overcharging at tourist restaurants',
        'Fake tour operators'
      ]
    },
    scamWarnings: [
      {
        title: 'ATM Robberies',
        description: 'High risk of being robbed while using ATMs, especially at night',
        severity: 'high'
      },
      {
        title: 'Fake Police Bribes',
        description: 'Corrupt or fake police demanding bribes for invented violations',
        severity: 'high'
      },
      {
        title: 'Tourist Restaurant Scams',
        description: 'Restaurants near attractions significantly overcharging tourists',
        severity: 'medium'
      }
    ]
  },

  // Mexico - Mexico City
  {
    city: 'Mexico City',
    country: 'Mexico',
    continent: 'North America',
    countryCode: 'mx',
    overallScore: 5.8,
    nightSafety: 4.2,
    publicTransit: 6.1,
    walkingAlone: 5.3,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 623,
    lastUpdated: '4 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 4.2,
        context: 'Avoid walking alone at night. Stick to well-lit areas in safe neighborhoods like Roma Norte and Condesa.'
      },
      publicTransit: {
        score: 6.1,
        context: 'Metro has women-only cars during rush hours. Generally safe during day but avoid at night. Uber is recommended.'
      },
      walkingAlone: {
        score: 5.3,
        context: 'Generally safe in tourist areas during day. Some catcalling and harassment reported. Stay alert.'
      }
    },
    neighborhoods: {
      safe: ['Roma Norte', 'Condesa', 'Polanco', 'Coyoacán', 'San Ángel'],
      caution: ['Centro Histórico', 'Zona Rosa', 'Xochimilco'],
      avoid: ['Tepito', 'Doctores', 'Iztapalapa', 'Any area at night']
    },
    accommodations: [
      {
        name: 'Casa Malí by Dominion',
        type: 'hotel',
        features: ['Boutique hotel', 'Safe neighborhood', 'Good security'],
        rating: 4.5,
        notes: 'Located in safe Roma Norte area with good security measures'
      }
    ],
    alerts: [
      {
        title: 'Pickpocketing Increase',
        description: 'Increased pickpocketing reports on metro and tourist areas',
        location: 'Metro system and Centro Histórico',
        reportCount: 34,
        severity: 'medium',
        dateReported: '6 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Blend in with locals.',
      firstTimers: 'Stay in Roma Norte or Condesa. Learn basic Spanish. Use Uber instead of taxis.',
      apps: ['Uber', 'DiDi', 'Google Translate', 'Mexico City Metro'],
      emergencyPhrases: ['Ayuda (Help)', 'Llama a la policía (Call police)', 'Déjame en paz (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Cover shoulders when visiting churches.',
      behaviorNorms: ['Greet with handshakes or cheek kisses', 'Respect personal space', 'Be polite but firm'],
      perception: 'Solo female travelers are becoming more common but may still attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Dry season is best. Avoid rainy season (May-September) for better visibility and safety.'
    },
    emergencyInfo: {
      police: '911',
      fire: '911',
      medical: '911',
      general: '911'
    },
    embassy: {
      name: 'US Embassy Mexico City',
      address: 'Paseo de la Reforma 305, Cuauhtémoc, 06500 Ciudad de México',
      phone: '+52-55-5080-2000',
      email: 'ACSMexicoCity@state.gov',
      website: 'https://mx.usembassy.gov/'
    },
    currency: {
      name: 'Mexican Peso',
      code: 'MXN',
      exchangeRate: {
        usd: 0.059,
        eur: 0.055,
        gbp: 0.047
      },
      scamWarnings: [
        'Taxi drivers overcharging tourists',
        'Fake police demanding bribes',
        'ATM skimming in tourist areas',
        'Restaurant bill padding'
      ]
    },
    scamWarnings: [
      {
        title: 'Taxi Overcharging',
        description: 'Taxi drivers charging excessive fares to tourists, especially from airport',
        severity: 'medium'
      },
      {
        title: 'Fake Police Bribes',
        description: 'Corrupt police demanding bribes for invented traffic violations',
        severity: 'medium'
      },
      {
        title: 'ATM Skimming',
        description: 'Card skimming devices on ATMs in tourist areas',
        severity: 'medium'
      }
    ]
  },

  // Turkey - Istanbul
  {
    city: 'Istanbul',
    country: 'Turkey',
    continent: 'Europe',
    countryCode: 'tr',
    overallScore: 6.4,
    nightSafety: 5.8,
    publicTransit: 7.2,
    walkingAlone: 6.1,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 445,
    lastUpdated: '2 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 5.8,
        context: 'Generally safe in tourist areas but be cautious. Avoid isolated areas and stick to well-lit streets.'
      },
      publicTransit: {
        score: 7.2,
        context: 'Metro and trams are generally safe. Buses can be crowded. Some harassment reported on public transport.'
      },
      walkingAlone: {
        score: 6.1,
        context: 'Safe in tourist areas during day. Some harassment and catcalling reported, especially in less touristy areas.'
      }
    },
    neighborhoods: {
      safe: ['Sultanahmet', 'Beyoğlu', 'Galata', 'Beşiktaş', 'Kadıköy'],
      caution: ['Taksim Square area at night', 'Grand Bazaar surroundings', 'Eminönü'],
      avoid: ['Isolated areas at night', 'Some parts of Fatih', 'Industrial areas']
    },
    accommodations: [
      {
        name: 'Four Seasons Hotel Istanbul at Sultanahmet',
        type: 'hotel',
        features: ['Luxury hotel', 'Historic location', 'Excellent security'],
        rating: 4.8,
        notes: 'Premium hotel in safe tourist area with professional staff'
      }
    ],
    alerts: [
      {
        title: 'Tourist Scam Alert',
        description: 'Fake carpet sellers and overpriced restaurant scams in tourist areas',
        location: 'Sultanahmet and Grand Bazaar area',
        reportCount: 23,
        severity: 'medium',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly, especially when visiting mosques. Cover shoulders and knees.',
      firstTimers: 'Stay in Sultanahmet or Beyoğlu. Learn basic Turkish phrases. Be firm with vendors.',
      apps: ['BiTaksi', 'Uber', 'Istanbul Metro', 'Google Translate'],
      emergencyPhrases: ['Yardım (Help)', 'Polis çağırın (Call police)', 'Beni rahat bırakın (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress, especially in religious areas. Remove shoes when entering mosques.',
      behaviorNorms: ['Respect Islamic customs', 'Bargaining is expected in bazaars', 'Be polite but firm'],
      perception: 'Solo female travelers are becoming more common but may attract attention, especially outside tourist areas.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-June', 'September-November'],
      events: 'Spring and fall are ideal. Summer can be very hot and crowded.'
    },
    emergencyInfo: {
      police: '155',
      fire: '110',
      medical: '112',
      general: '112'
    },
    embassy: {
      name: 'US Consulate General Istanbul',
      address: 'Kaplicalar Mevkii No. 2, Istinye, 34460 Istanbul',
      phone: '+90-212-335-9000',
      email: 'IstanbulACS@state.gov',
      website: 'https://tr.usembassy.gov/embassy-consulates/istanbul/'
    },
    currency: {
      name: 'Turkish Lira',
      code: 'TRY',
      exchangeRate: {
        usd: 0.037,
        eur: 0.034,
        gbp: 0.029
      },
      scamWarnings: [
        'Carpet shop pressure tactics',
        'Overpriced restaurants targeting tourists',
        'Fake police asking for documents',
        'Taxi drivers taking longer routes'
      ]
    },
    scamWarnings: [
      {
        title: 'Carpet Shop Scams',
        description: 'Aggressive sales tactics in carpet shops with inflated prices and shipping scams',
        severity: 'medium'
      },
      {
        title: 'Tourist Restaurant Traps',
        description: 'Restaurants with no prices that charge extremely high amounts to tourists',
        severity: 'medium'
      },
      {
        title: 'Fake Friendship Scam',
        description: 'Locals befriending tourists then leading them to overpriced bars or shops',
        severity: 'medium'
      }
    ]
  },

  // Philippines - Manila
  {
    city: 'Manila',
    country: 'Philippines',
    continent: 'Asia',
    countryCode: 'ph',
    overallScore: 5.1,
    nightSafety: 3.8,
    publicTransit: 5.2,
    walkingAlone: 4.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 234,
    lastUpdated: '6 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 3.8,
        context: 'Not safe to walk alone at night. High crime rates in many areas. Stick to secure hotel areas and use trusted transport.'
      },
      publicTransit: {
        score: 5.2,
        context: 'MRT and LRT are generally safe during day but crowded. Jeepneys and buses can be unsafe. Grab is recommended.'
      },
      walkingAlone: {
        score: 4.9,
        context: 'Some areas safe during day but be very cautious. Petty crime is common. Stay in tourist areas.'
      }
    },
    neighborhoods: {
      safe: ['Makati CBD', 'Bonifacio Global City', 'Ortigas Center', 'Mall areas'],
      caution: ['Intramuros', 'Malate', 'Ermita', 'Chinatown'],
      avoid: ['Tondo', 'Quiapo at night', 'Any isolated areas', 'Red light districts']
    },
    accommodations: [
      {
        name: 'Shangri-La The Fort Manila',
        type: 'hotel',
        features: ['Luxury hotel', 'Excellent security', 'Safe location'],
        rating: 4.7,
        notes: 'Located in secure Bonifacio Global City with top-tier security'
      }
    ],
    alerts: [
      {
        title: 'Petty Crime Increase',
        description: 'Increased reports of pickpocketing and bag snatching',
        location: 'Tourist areas and public transport',
        reportCount: 45,
        severity: 'medium',
        dateReported: '4 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid displaying expensive items. Conservative clothing recommended.',
      firstTimers: 'Stay in Makati or BGC. Use Grab for transport. Keep valuables secure at all times.',
      apps: ['Grab', 'Waze', 'Google Translate', 'Philippines Travel Guide'],
      emergencyPhrases: ['Tulong (Help)', 'Tawagan ang pulis (Call police)', 'Umalis ka (Go away)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress recommended. Cover shoulders and knees, especially in religious areas.',
      behaviorNorms: ['Respect for elders', 'Polite and indirect communication', 'Remove shoes when entering homes'],
      perception: 'Solo female travelers may attract attention. Be prepared for curious questions and offers of help.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-February'],
      events: 'Dry season is best. Avoid typhoon season (June-November) for safety reasons.'
    },
    emergencyInfo: {
      police: '117',
      fire: '116',
      medical: '911',
      general: '911'
    },
    embassy: {
      name: 'US Embassy Manila',
      address: '1201 Roxas Boulevard, Manila 1000',
      phone: '+63-2-5301-2000',
      email: 'ACSInfoManila@state.gov',
      website: 'https://ph.usembassy.gov/'
    },
    currency: {
      name: 'Philippine Peso',
      code: 'PHP',
      exchangeRate: {
        usd: 0.018,
        eur: 0.017,
        gbp: 0.014
      },
      scamWarnings: [
        'ATM skimming and card cloning',
        'Overcharging in tourist areas',
        'Fake charity collectors',
        'Taxi drivers refusing to use meters'
      ]
    },
    scamWarnings: [
      {
        title: 'ATM Skimming',
        description: 'Card skimming devices on ATMs, especially in tourist and shopping areas',
        severity: 'medium'
      },
      {
        title: 'Tourist Price Inflation',
        description: 'Shops and restaurants charging significantly higher prices to foreign tourists',
        severity: 'medium'
      },
      {
        title: 'Taxi Meter Scams',
        description: 'Taxi drivers refusing to use meters or using rigged meters',
        severity: 'medium'
      }
    ]
  },

  // Russia - Moscow
  {
    city: 'Moscow',
    country: 'Russia',
    continent: 'Europe',
    countryCode: 'ru',
    overallScore: 5.6,
    nightSafety: 4.8,
    publicTransit: 6.8,
    walkingAlone: 5.2,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 189,
    lastUpdated: '1 week ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 4.8,
        context: 'Generally safe in central areas but be cautious. Avoid isolated areas and stick to well-lit streets.'
      },
      publicTransit: {
        score: 6.8,
        context: 'Metro is generally safe and efficient. Some harassment reported but overall reliable transport system.'
      },
      walkingAlone: {
        score: 5.2,
        context: 'Safe in tourist areas during day. Some staring and occasional harassment reported.'
      }
    },
    neighborhoods: {
      safe: ['Red Square area', 'Tverskaya', 'Arbat', 'City Center', 'Zamoskvorechye'],
      caution: ['Some outer districts', 'Areas around train stations at night'],
      avoid: ['Industrial areas', 'Remote suburbs', 'Isolated areas at night']
    },
    accommodations: [
      {
        name: 'Hotel Metropol Moscow',
        type: 'hotel',
        features: ['Historic luxury hotel', 'Central location', 'Good security'],
        rating: 4.6,
        notes: 'Historic hotel near Red Square with professional staff and good security'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress conservatively and warmly. Russians dress formally for city center.',
      firstTimers: 'Learn basic Russian phrases. Carry passport at all times. Use official taxis or metro.',
      apps: ['Yandex.Taxi', 'Moscow Metro', 'Google Translate', 'Yandex.Maps'],
      emergencyPhrases: ['Pomogite (Help)', 'Vyzovite militsiyu (Call police)', 'Ostavte menya v pokoe (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Formal dress in city center. Cover shoulders and knees in Orthodox churches.',
      behaviorNorms: ['Formal greetings', 'Remove hats in churches', 'Respect personal space'],
      perception: 'Solo female travelers are not uncommon but may attract some attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months are ideal. Winter is very cold but generally safe in central areas.'
    },
    emergencyInfo: {
      police: '102',
      fire: '101',
      medical: '103',
      general: '112'
    },
    embassy: {
      name: 'US Embassy Moscow',
      address: 'Bolshoy Deviatinsky Pereulok No. 8, Moscow 121099',
      phone: '+7-495-728-5000',
      email: 'MoscowACS@state.gov',
      website: 'https://ru.usembassy.gov/'
    },
    currency: {
      name: 'Russian Ruble',
      code: 'RUB',
      exchangeRate: {
        usd: 0.011,
        eur: 0.010,
        gbp: 0.0085
      },
      scamWarnings: [
        'ATM skimming in tourist areas',
        'Overpriced tourist restaurants',
        'Fake police demanding documents',
        'Currency exchange scams'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Restaurant Markups',
        description: 'Restaurants near major attractions charging significantly higher prices',
        severity: 'medium'
      },
      {
        title: 'Currency Exchange Scams',
        description: 'Unofficial money changers offering poor rates or counterfeit currency',
        severity: 'medium'
      }
    ]
  },

  // Argentina - Buenos Aires
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    continent: 'South America',
    countryCode: 'ar',
    overallScore: 6.2,
    nightSafety: 5.1,
    publicTransit: 6.8,
    walkingAlone: 6.7,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 345,
    lastUpdated: '5 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 5.1,
        context: 'Generally safe in tourist areas but be cautious at night. Avoid isolated areas and stick to well-lit streets.'
      },
      publicTransit: {
        score: 6.8,
        context: 'Subte (metro) is generally safe during day. Buses are crowded but relatively safe. Some pickpocketing reported.'
      },
      walkingAlone: {
        score: 6.7,
        context: 'Safe in tourist neighborhoods during day. Some catcalling reported but generally manageable.'
      }
    },
    neighborhoods: {
      safe: ['Palermo', 'Recoleta', 'Puerto Madero', 'Belgrano', 'San Telmo (day)'],
      caution: ['San Telmo at night', 'Once', 'Constitución', 'Some parts of Centro'],
      avoid: ['Villa 31', 'La Boca at night', 'Industrial areas', 'Remote suburbs']
    },
    accommodations: [
      {
        name: 'Alvear Palace Hotel',
        type: 'hotel',
        features: ['Luxury hotel', 'Safe location', 'Excellent service'],
        rating: 4.8,
        notes: 'Premium hotel in safe Recoleta neighborhood with top-notch security'
      }
    ],
    alerts: [
      {
        title: 'Pickpocketing Alert',
        description: 'Increased pickpocketing reports in tourist areas and public transport',
        location: 'Subte and major tourist attractions',
        reportCount: 28,
        severity: 'medium',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress stylishly but avoid flashy jewelry. Porteños dress well, so blend in.',
      firstTimers: 'Stay in Palermo or Recoleta. Learn basic Spanish. Use official taxis or Uber.',
      apps: ['Uber', 'Cabify', 'BA Cómo Llego', 'Google Translate'],
      emergencyPhrases: ['Ayuda (Help)', 'Llama a la policía (Call police)', 'Déjame en paz (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Stylish dress is important. Porteños are fashion-conscious.',
      behaviorNorms: ['Greet with cheek kisses', 'Dinner is very late (10 PM+)', 'Passionate about football'],
      perception: 'Solo female travelers are common and generally accepted. Some attention from men is normal.'
    },
    bestTimeToVisit: {
      safestMonths: ['March-May', 'September-November'],
      events: 'Spring and fall are ideal. Summer can be very hot, winter is mild.'
    },
    emergencyInfo: {
      police: '911',
      fire: '911',
      medical: '911',
      general: '911'
    },
    embassy: {
      name: 'US Embassy Buenos Aires',
      address: 'Av. Colombia 4300, C1425GMN Buenos Aires',
      phone: '+54-11-5777-4533',
      email: 'BuenosAiresACS@state.gov',
      website: 'https://ar.usembassy.gov/'
    },
    currency: {
      name: 'Argentine Peso',
      code: 'ARS',
      exchangeRate: {
        usd: 0.0011,
        eur: 0.0010,
        gbp: 0.00085
      },
      scamWarnings: [
        'Blue dollar exchange rate scams',
        'Credit card skimming',
        'Taxi drivers overcharging tourists',
        'Fake police demanding bribes'
      ]
    },
    scamWarnings: [
      {
        title: 'Blue Dollar Scams',
        description: 'Unofficial currency exchange with poor rates or counterfeit bills',
        severity: 'medium'
      },
      {
        title: 'Credit Card Skimming',
        description: 'Card skimming at ATMs and restaurants, especially in tourist areas',
        severity: 'medium'
      },
      {
        title: 'Taxi Overcharging',
        description: 'Taxi drivers charging excessive fares to tourists, especially from airport',
        severity: 'medium'
      }
    ]
  },

  // Peru - Lima
  {
    city: 'Lima',
    country: 'Peru',
    continent: 'South America',
    countryCode: 'pe',
    overallScore: 5.4,
    nightSafety: 4.1,
    publicTransit: 5.8,
    walkingAlone: 5.3,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 267,
    lastUpdated: '4 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 4.1,
        context: 'Not safe to walk alone at night in most areas. Stick to well-lit tourist areas with security.'
      },
      publicTransit: {
        score: 5.8,
        context: 'Metropolitano bus system is relatively safe. Regular buses can be crowded and unsafe. Use official taxis.'
      },
      walkingAlone: {
        score: 5.3,
        context: 'Safe in tourist areas during day but be cautious. Petty crime is common.'
      }
    },
    neighborhoods: {
      safe: ['Miraflores', 'San Isidro', 'Barranco', 'Surco'],
      caution: ['Centro Histórico', 'Pueblo Libre', 'Jesús María'],
      avoid: ['Callao', 'Villa El Salvador', 'San Juan de Lurigancho', 'Any area at night']
    },
    accommodations: [
      {
        name: 'Hotel B',
        type: 'hotel',
        features: ['Boutique hotel', 'Safe location', 'Good security'],
        rating: 4.5,
        notes: 'Located in safe Barranco neighborhood with good security measures'
      }
    ],
    alerts: [
      {
        title: 'Tourist Robbery Alert',
        description: 'Increased reports of robberies targeting tourists',
        location: 'Centro Histórico and tourist attractions',
        reportCount: 31,
        severity: 'medium',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress down and avoid displaying expensive items. Blend in with locals.',
      firstTimers: 'Stay in Miraflores or San Isidro. Use official taxis or Uber. Keep valuables secure.',
      apps: ['Uber', 'Beat', 'Google Translate', 'Lima Metro'],
      emergencyPhrases: ['Ayuda (Help)', 'Llama a la policía (Call police)', 'Déjame en paz (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress recommended. Avoid revealing clothing.',
      behaviorNorms: ['Greet with handshakes or cheek kisses', 'Respect indigenous culture', 'Be polite but firm'],
      perception: 'Solo female travelers may attract attention. Be prepared for offers of help and curious questions.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Dry season is best for safety and weather. Avoid rainy season for better visibility.'
    },
    emergencyInfo: {
      police: '105',
      fire: '116',
      medical: '117',
      general: '105'
    },
    embassy: {
      name: 'US Embassy Lima',
      address: 'Av. La Encalada cdra. 17 s/n, Surco, Lima 33',
      phone: '+51-1-618-2000',
      email: 'LimaACS@state.gov',
      website: 'https://pe.usembassy.gov/'
    },
    currency: {
      name: 'Peruvian Sol',
      code: 'PEN',
      exchangeRate: {
        usd: 0.27,
        eur: 0.25,
        gbp: 0.21
      },
      scamWarnings: [
        'Fake police demanding bribes',
        'ATM skimming and card cloning',
        'Overcharging in tourist areas',
        'Fake tour operators'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Police Bribes',
        description: 'Corrupt or fake police demanding bribes for invented violations',
        severity: 'medium'
      },
      {
        title: 'ATM Skimming',
        description: 'Card skimming devices on ATMs, especially in tourist areas',
        severity: 'medium'
      },
      {
        title: 'Tourist Price Inflation',
        description: 'Shops and restaurants charging significantly higher prices to tourists',
        severity: 'medium'
      }
    ]
  },

  // Colombia - Bogotá
  {
    city: 'Bogotá',
    country: 'Colombia',
    continent: 'South America',
    countryCode: 'co',
    overallScore: 5.7,
    nightSafety: 4.3,
    publicTransit: 6.2,
    walkingAlone: 5.6,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 198,
    lastUpdated: '6 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 4.3,
        context: 'Not recommended to walk alone at night. Stick to well-lit areas in safe neighborhoods like Zona Rosa.'
      },
      publicTransit: {
        score: 6.2,
        context: 'TransMilenio is generally safe during day but crowded. Some pickpocketing reported. Avoid at night.'
      },
      walkingAlone: {
        score: 5.6,
        context: 'Safe in tourist areas during day but be cautious. Some harassment reported.'
      }
    },
    neighborhoods: {
      safe: ['Zona Rosa', 'Chapinero', 'La Candelaria (day)', 'Usaquén'],
      caution: ['La Candelaria at night', 'Centro', 'Some parts of Chapinero'],
      avoid: ['Ciudad Bolívar', 'Bosa', 'Kennedy', 'Any area at night']
    },
    accommodations: [
      {
        name: 'Hotel Casa Deco',
        type: 'hotel',
        features: ['Boutique hotel', 'Safe location', 'Good security'],
        rating: 4.4,
        notes: 'Located in safe Chapinero area with good security measures'
      }
    ],
    alerts: [
      {
        title: 'Pickpocketing Alert',
        description: 'Increased pickpocketing reports on TransMilenio and tourist areas',
        location: 'TransMilenio stations and La Candelaria',
        reportCount: 22,
        severity: 'medium',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid displaying expensive items. Blend in with locals.',
      firstTimers: 'Stay in Zona Rosa or Chapinero. Use official taxis or Uber. Learn basic Spanish.',
      apps: ['Uber', 'Beat', 'Google Translate', 'TransMilenio'],
      emergencyPhrases: ['Ayuda (Help)', 'Llama a la policía (Call police)', 'Déjame en paz (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress recommended. Bogotanos dress well.',
      behaviorNorms: ['Greet with handshakes or cheek kisses', 'Be polite and respectful', 'Learn about local culture'],
      perception: 'Solo female travelers are becoming more common but may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March', 'July-August'],
      events: 'Dry seasons are best. Avoid rainy seasons for better safety and visibility.'
    },
    emergencyInfo: {
      police: '123',
      fire: '119',
      medical: '125',
      general: '123'
    },
    embassy: {
      name: 'US Embassy Bogotá',
      address: 'Carrera 45 # 24B-27, Bogotá',
      phone: '+57-1-275-2000',
      email: 'ACSBogota@state.gov',
      website: 'https://co.usembassy.gov/'
    },
    currency: {
      name: 'Colombian Peso',
      code: 'COP',
      exchangeRate: {
        usd: 0.00025,
        eur: 0.00023,
        gbp: 0.00020
      },
      scamWarnings: [
        'Fake police demanding bribes',
        'ATM skimming and express kidnapping',
        'Overcharging in tourist areas',
        'Fake emerald dealers'
      ]
    },
    scamWarnings: [
      {
        title: 'Express Kidnapping',
        description: 'Criminals forcing victims to withdraw money from ATMs',
        severity: 'high'
      },
      {
        title: 'Fake Police Bribes',
        description: 'Corrupt police demanding bribes for invented drug-related charges',
        severity: 'medium'
      },
      {
        title: 'Emerald Scams',
        description: 'Fake emerald dealers selling glass or low-quality stones at high prices',
        severity: 'medium'
      }
    ]
  },

  // Indonesia - Jakarta
  {
    city: 'Jakarta',
    country: 'Indonesia',
    continent: 'Asia',
    countryCode: 'id',
    overallScore: 5.9,
    nightSafety: 5.1,
    publicTransit: 6.3,
    walkingAlone: 5.8,
    tags: ['warning-flags'],
    bgColor: 'bg-yellow-50',
    reviewCount: 156,
    lastUpdated: '1 week ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 5.1,
        context: 'Generally safe in central areas but be cautious. Avoid isolated areas and stick to well-lit streets.'
      },
      publicTransit: {
        score: 6.3,
        context: 'TransJakarta busway is generally safe. Some crowding and pickpocketing reported. Avoid late night travel.'
      },
      walkingAlone: {
        score: 5.8,
        context: 'Safe in tourist and business areas during day. Some harassment reported, especially in less touristy areas.'
      }
    },
    neighborhoods: {
      safe: ['Central Jakarta', 'Menteng', 'Kemang', 'SCBD', 'Thamrin'],
      caution: ['Old Town (Kota Tua)', 'Some parts of North Jakarta', 'Glodok'],
      avoid: ['Industrial areas', 'Remote suburbs', 'Isolated areas at night']
    },
    accommodations: [
      {
        name: 'The Ritz-Carlton Jakarta',
        type: 'hotel',
        features: ['Luxury hotel', 'Central location', 'Excellent security'],
        rating: 4.7,
        notes: 'Premium hotel in safe central area with top-notch security'
      }
    ],
    alerts: [
      {
        title: 'Traffic Safety Alert',
        description: 'Heavy traffic and aggressive driving pose safety risks',
        location: 'City-wide',
        reportCount: 15,
        severity: 'medium',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly, especially when visiting religious sites. Cover shoulders and knees.',
      firstTimers: 'Stay in central areas. Use Grab or Blue Bird taxis. Learn basic Indonesian phrases.',
      apps: ['Grab', 'Gojek', 'Google Translate', 'TransJakarta'],
      emergencyPhrases: ['Tolong (Help)', 'Panggil polisi (Call police)', 'Pergi (Go away)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress, especially in religious areas. Remove shoes when entering mosques.',
      behaviorNorms: ['Respect Islamic customs', 'Use right hand for greetings', 'Be polite and patient'],
      perception: 'Solo female travelers are becoming more common but may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Dry season is best. Avoid rainy season (October-April) for better safety and mobility.'
    },
    emergencyInfo: {
      police: '110',
      fire: '113',
      medical: '118',
      general: '112'
    },
    embassy: {
      name: 'US Embassy Jakarta',
      address: 'Jl. Medan Merdeka Selatan No. 3-5, Jakarta 10110',
      phone: '+62-21-3435-9000',
      email: 'JakartaACS@state.gov',
      website: 'https://id.usembassy.gov/'
    },
    currency: {
      name: 'Indonesian Rupiah',
      code: 'IDR',
      exchangeRate: {
        usd: 0.000067,
        eur: 0.000062,
        gbp: 0.000053
      },
      scamWarnings: [
        'ATM skimming in tourist areas',
        'Overcharging by taxi drivers',
        'Fake tour operators',
        'Credit card fraud at restaurants'
      ]
    },
    scamWarnings: [
      {
        title: 'Taxi Overcharging',
        description: 'Taxi drivers refusing to use meters or taking longer routes',
        severity: 'medium'
      },
      {
        title: 'ATM Skimming',
        description: 'Card skimming devices on ATMs, especially in shopping malls',
        severity: 'medium'
      },
      {
        title: 'Fake Tour Operators',
        description: 'Unlicensed tour operators offering overpriced or fake tours',
        severity: 'low'
      }
    ]
  },

  // Malaysia - Kuala Lumpur
  {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    continent: 'Asia',
    countryCode: 'my',
    overallScore: 7.1,
    nightSafety: 6.8,
    publicTransit: 7.6,
    walkingAlone: 7.0,
    tags: ['insider-tips'],
    bgColor: 'bg-yellow-50',
    reviewCount: 234,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 6.8,
        context: 'Generally safe at night in central areas. Well-lit streets and good police presence in tourist areas.'
      },
      publicTransit: {
        score: 7.6,
        context: 'LRT and MRT systems are safe and efficient. Some women-only cars available during peak hours.'
      },
      walkingAlone: {
        score: 7.0,
        context: 'Safe to walk alone in most areas during day and evening. Malaysian culture is generally respectful.'
      }
    },
    neighborhoods: {
      safe: ['KLCC', 'Bukit Bintang', 'Mont Kiara', 'Bangsar', 'Chinatown'],
      caution: ['Some parts of Chow Kit', 'Certain areas of Old Town'],
      avoid: ['Industrial areas', 'Remote suburbs at night']
    },
    accommodations: [
      {
        name: 'Mandarin Oriental Kuala Lumpur',
        type: 'hotel',
        features: ['Luxury hotel', 'Central location', 'Excellent security'],
        rating: 4.8,
        notes: 'Premium hotel in KLCC with top-tier security and service'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress modestly, especially when visiting religious sites. Cover shoulders and knees.',
      firstTimers: 'Very easy for beginners. English widely spoken. Stay in KLCC or Bukit Bintang areas.',
      apps: ['Grab', 'Touch n Go eWallet', 'KL Metro', 'Google Translate'],
      emergencyPhrases: ['Tolong (Help)', 'Panggil polis (Call police)', 'Pergi (Go away)']
    },
    culturalExpectations: {
      dressCode: 'Conservative dress in religious areas. Casual Western clothing fine in most places.',
      behaviorNorms: ['Respect diverse cultures', 'Remove shoes when entering homes/mosques', 'Use right hand for greetings'],
      perception: 'Solo female travelers are common and generally accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['Year-round (tropical climate)'],
      events: 'Consistently safe throughout the year. Avoid major festivals for crowds.'
    },
    emergencyInfo: {
      police: '999',
      fire: '994',
      medical: '999',
      general: '999'
    },
    embassy: {
      name: 'US Embassy Kuala Lumpur',
      address: '376, Jalan Tun Razak, 50400 Kuala Lumpur',
      phone: '+60-3-2168-5000',
      email: 'KLACS@state.gov',
      website: 'https://my.usembassy.gov/'
    },
    currency: {
      name: 'Malaysian Ringgit',
      code: 'MYR',
      exchangeRate: {
        usd: 0.22,
        eur: 0.20,
        gbp: 0.17
      },
      scamWarnings: [
        'ATM skimming in tourist areas',
        'Overpriced tourist restaurants',
        'Fake charity collectors',
        'Credit card fraud'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Restaurant Markups',
        description: 'Restaurants near major attractions charging tourist prices',
        severity: 'low'
      },
      {
        title: 'ATM Skimming',
        description: 'Card skimming devices occasionally found on ATMs in tourist areas',
        severity: 'low'
      }
    ]
  }
];

export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  return destinations.find(
    dest => 
      dest.city.toLowerCase().replace(/\s+/g, '-') === city.toLowerCase() &&
      dest.country.toLowerCase().replace(/\s+/g, '-') === country.toLowerCase()
  );
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/\s+/g, '-')}/${country.toLowerCase().replace(/\s+/g, '-')}`;
};