import { Destination } from './types';

const seoul: Destination = {
  id: 'seoul-south-korea',
  city: 'Seoul',
  country: 'South Korea',
  continent: 'Asia',
  countryCode: 'kr',
  overallScore: 8.6,
  nightSafety: 8.4,
  publicTransit: 9.3,
  walkingAlone: 8.2,
  tags: ['extremely-safe', 'modern', 'public-transit'],
  bgColor: 'bg-green-25',
  reviewCount: 412,
  lastUpdated: '1 day ago',
  harassmentRisk: 'medium',
  description: 'Is Seoul safe for solo female travellers? South Korea\'s dynamic capital is one of the world\'s safest cities for women traveling alone. Seoul combines cutting-edge technology, rich culture, and exceptional safety infrastructure, making it an ideal destination for solo female travelers seeking both adventure and security.',
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
    safe: [
      {
        name: 'Myeongdong',
        description: 'Seoul\'s premier shopping and tourist district is extremely safe for solo female travelers. Well-lit streets, constant police presence, and abundant CCTV coverage. Popular area with excellent transport links and 24/7 activity, making it ideal for first-time visitors.'
      },
      {
        name: 'Gangnam',
        description: 'Upscale district known for its modern skyscrapers, luxury shopping, and excellent safety record. High-end area with sophisticated infrastructure, premium hotels, and very low crime rates. Perfect for solo female travelers seeking comfort and security.'
      },
      {
        name: 'Jongno & Insadong',
        description: 'Traditional cultural heart of Seoul with palaces, temples, and traditional markets. Very safe during day and evening hours with rich cultural experiences. Well-patrolled area popular with tourists and families.'
      },
      {
        name: 'Jung-gu (Central Seoul)',
        description: 'Historic city center encompassing major landmarks and government buildings. Excellent safety infrastructure with high police presence. Safe for walking during day and early evening hours.'
      },
      {
        name: 'Yeongdeungpo',
        description: 'Business and financial district with modern office buildings and shopping centers. Safe area with good transport connections, though quieter in evenings.'
      }
    ],
    caution: [
      'Hongdae nightlife district: Safe but crowded on weekends with party atmosphere. Exercise standard nightlife precautions and avoid excessive drinking.',
      'Itaewon after midnight: International district generally safe but can be rowdy late at night. Stay alert in bar areas and avoid isolated streets.',
      'University areas (Sinchon, Hongik): Generally safe but can be busy with students. Exercise caution during festival periods or large gatherings.'
    ],
    avoid: [
      'None - Seoul is consistently ranked among the world\'s safest major cities. All major districts are safe for solo female travelers with basic urban precautions.'
    ]
  },
  accommodations: [
    {
      name: 'Bunk Guesthouse Hongdae',
      type: 'hostel',
      features: ['Female-only dorms', 'Safe Hongdae location', '24/7 reception', 'Lockers'],
      rating: 9.1,
      notes: 'Top choice for solo female travelers. Excellent safety record, modern facilities, and perfect location for exploring Seoul\'s nightlife safely.',
      link: 'https://www.bunkguesthouse.com/'
    },
    {
      name: 'L7 Myeongdong by Lotte',
      type: 'hotel',
      features: ['Central Myeongdong', 'Modern amenities', 'English-speaking staff', '24/7 concierge'],
      rating: 9.0,
      notes: 'Premium hotel in safest tourist area. Excellent for solo female travelers seeking comfort and security in prime location.',
      link: 'https://www.lottehotel.com/myeongdong-l7/'
    },
    {
      name: 'Seoul Guesthouse Garosugil',
      type: 'guesthouse',
      features: ['Female dorms available', 'Gangnam location', 'Safe area', 'Rooftop terrace'],
      rating: 8.8,
      notes: 'Boutique guesthouse in trendy Gangnam area. Great for solo travelers wanting to experience upscale Seoul safely.',
      link: 'https://www.seoulgh.com/'
    },
    {
      name: 'Hotel28 Myeongdong',
      type: 'hotel',
      features: ['Modern design', 'Safe location', 'Female-friendly', 'Subway access'],
      rating: 8.7,
      notes: 'Contemporary hotel perfect for solo female travelers. Excellent safety features and convenient location.',
      link: 'https://hotel28.co.kr/'
    },
    {
      name: 'Ewha Womans University Guest House',
      type: 'guest house',
      features: ['Women-only floors', 'University campus', 'High security', 'Budget-friendly'],
      rating: 8.5,
      notes: 'Unique opportunity to stay on university campus with excellent safety standards. Perfect for solo female travelers on a budget.',
      link: 'https://www.ewha.ac.kr/'
    }
  ],
  alerts: [],
  safetyTips: {
    clothing: `• Dress modestly in temples and palaces - cover shoulders and knees
• Seoul is fashion-forward, so dressing well helps you blend in
• Comfortable walking shoes essential for subway stairs and hills
• Layer clothing for variable weather
• Carry a mask for air pollution days`,
    firstTimers: `• Seoul is extremely safe for solo women - perfect for first-time solo travelers
• Download KakaoMap, Subway Korea, and Citymapper for navigation
• Get a T-money card for seamless public transport
• Use 1330 tourist hotline for 24/7 English assistance
• Learn basic Korean phrases - locals appreciate the effort`,
    apps: [
      'NomadHer',
      'Tourlina',
      'Travel Ladies',
      'bSafe',
      'Subway Korea',
      'TripIt',
      'Airalo',
      'XE Currency',
      'PackPoint',
      'KakaoMap'
    ],
    appLinks: [
      { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Verified female-only travel community with safety features' },
      { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'Find verified female travel buddies with safety screening' },
      { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips from real travelers' },
      { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with SOS features and live streaming' },
      { name: 'Subway Korea', link: 'https://subwaykorea.com/', description: 'Real-time subway information and route planning for Seoul' },
      { name: 'TripIt', link: 'https://www.tripit.com/', description: 'Organize travel plans and share itinerary with trusted contacts' },
      { name: 'Airalo', link: 'https://www.airalo.com/', description: 'eSIM data plans to stay connected safely without roaming fees' },
      { name: 'XE Currency', link: 'https://www.xe.com/apps/', description: 'Live exchange rates for Korean won and offline converter' },
      { name: 'PackPoint', link: 'https://packpnt.com/', description: 'Smart packing checklist based on weather and activities' },
      { name: 'KakaoMap', link: 'https://map.kakao.com/', description: 'Essential navigation app for Seoul with real-time traffic' }
    ],
    emergencyPhrases: [
      {
        english: 'Help!',
        local: '도와주세요!',
        localLanguage: 'Korean'
      },
      {
        english: 'Call the police!',
        local: '경찰을 불러주세요!',
        localLanguage: 'Korean'
      },
      {
        english: 'I need a doctor.',
        local: '의사가 필요해요.',
        localLanguage: 'Korean'
      },
      {
        english: 'Where is the nearest hospital?',
        local: '가장 가까운 병원이 어디예요?',
        localLanguage: 'Korean'
      },
      {
        english: 'I am lost.',
        local: '길을 잃었어요.',
        localLanguage: 'Korean'
      },
      {
        english: 'Please leave me alone.',
        local: '혼자 있게 해주세요.',
        localLanguage: 'Korean'
      },
      {
        english: 'I feel unsafe.',
        local: '안전하지 않다고 느껴요.',
        localLanguage: 'Korean'
      },
      {
        english: 'Can you help me?',
        local: '도와주실 수 있나요?',
        localLanguage: 'Korean'
      }
    ]
  },
  culturalExpectations: {
    dressCode: 'Seoul is fashion-forward with high style standards. Dress well to blend in - clean, neat, and stylish clothing is appreciated. Modest dress required in temples and palaces (cover shoulders and knees). Business casual is appropriate for upscale restaurants. Comfortable walking shoes essential for subway stairs and hilly terrain.',
    behaviorNorms: [
      'Bow slightly when greeting, especially to elders - handshakes are also acceptable.',
      'Use both hands when giving or receiving items, especially business cards.',
      'Remove shoes when entering homes and some traditional restaurants.',
      'Keep voices quiet on public transport and avoid phone calls.',
      'Wait for subway passengers to exit before boarding.',
      'Stand right on escalators to allow passing on the left.',
      'Learn basic Korean phrases - effort is highly appreciated.',
      'Respect personal space and avoid excessive physical contact.',
      'Be punctual for appointments and social events.',
      'Show respect to elders and use formal language initially.'
    ],
    perception: 'Solo female travelers are increasingly common and generally well-respected in Seoul. Korean culture values safety and helping others, so locals are often helpful to solo travelers. Some staring may occur due to curiosity rather than judgment, especially in non-tourist areas. The city has strong social norms that contribute to overall safety for women.'
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
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/crime/in/Seoul'
  },
  // Add Confidence by Activity (2025, aggregated from ZenKimchi, Under30Experiences, and Numbeo)
  confidenceByActivity: [
    {
      label: "Sightseeing",
      confidence: 96,
      source: 'ZenKimchi 2025',
      sourceUrl: 'https://zenkimchi.com/tour-tips/is-seoul-safe-for-female-travelers/'
    },
    {
      label: "Nightlife",
      confidence: 89,
      source: 'Moving Jack 2025',
      sourceUrl: 'https://moving-jack.com/is-seoul-safe-insider-guide/'
    },
    {
      label: "Public Transport",
      confidence: 98,
      source: 'Under30Experiences 2025',
      sourceUrl: 'https://www.under30experiences.com/blog/is-it-safe-in-south-korea'
    },
    {
      label: "Dining Alone",
      confidence: 95,
      source: 'Travel Ladies 2025',
      sourceUrl: 'https://travelladies.app/safety/south-korea/seoul'
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
  culturalSensitivity: {
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
  },
  legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Seoul',
          address: '188 Sejong-daero, Jongno-gu, Seoul 03141',
          phone: '+82 2 397 4114',
          link: 'https://kr.usembassy.gov/'
        },
        {
          name: 'British Embassy Seoul',
          address: '24 Sejong-daero 19-gil, Jung-gu, Seoul 04519',
          phone: '+82 2 3210 5500',
          link: 'https://www.gov.uk/world/organisations/british-embassy-seoul'
        },
        {
          name: 'German Embassy Seoul',
          address: '308-5 Dongbinggo-dong, Yongsan-gu, Seoul 04385',
          phone: '+82 2 748 4114',
          link: 'https://korea.diplo.de/'
        },
        {
          name: 'French Embassy Seoul',
          address: '43-12 Seosomun-ro 11-gil, Jung-gu, Seoul 04513',
          phone: '+82 2 3149 4300',
          link: 'https://kr.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Seoul',
          address: '726 Hannam-daero, Yongsan-gu, Seoul 04418',
          phone: '+82 2 794 3581',
          link: 'https://www.exteriores.gob.es/embajadas/seul'
        },
        {
          name: 'Australian Embassy Seoul',
          address: '19th Floor, Kyobo Building, 1 Jongro, Jongro-gu, Seoul 03154',
          phone: '+82 2 2003 0100',
          link: 'https://southkorea.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Seoul',
          address: '21 Jeongdong-gil, Jung-gu, Seoul 04518',
          phone: '+82 2 3783 6000',
          link: 'https://www.canadainternational.gc.ca/korea-coree/'
        },
        {
          name: 'Netherlands Embassy Seoul',
          address: '10th Floor, Kyobo Building, 1 Jongro, Jongro-gu, Seoul 03154',
          phone: '+82 2 737 9514',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/south-korea'
        },
        {
          name: 'Danish Embassy Seoul',
          address: '5th Floor, Namsong Building, 260 Itaewon-ro, Yongsan-gu, Seoul 04417',
          phone: '+82 2 795 4187',
          link: 'https://sydkorea.um.dk/'
        },
        {
          name: 'Swiss Embassy Seoul',
          address: '32nd-35th Floor, Jongno Tower, 51 Jongno, Jongno-gu, Seoul 03161',
          phone: '+82 2 739 9511',
          link: 'https://www.eda.admin.ch/seoul'
        },
        {
          name: 'Indian Embassy Seoul',
          address: '37-3 Hannam-dong, Yongsan-gu, Seoul 04419',
          phone: '+82 2 798 4257',
          link: 'https://www.eoiseoul.gov.in/'
        }
      ],
      womensRights: [
        'Legal framework for women\'s rights varies by country',
        'Contact local embassy for specific information',
        'International women\'s rights organizations available'
      ],
      legalSupport: [
        'Contact local embassy for legal assistance',
        'International legal aid organizations available',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately',
        'Contact embassy for consular assistance',
        'Document all incidents with photos and details',
        'Keep copies of all police reports'
      ]
    },
    // Enhanced safety fields based on 2025 research
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: ['Nightlife districts (Hongdae, Itaewon, Gangnam)', 'Crowded public transportation', 'University areas', 'Workplace settings'],
      reportingRate: 28.4,
      legalProtection: 'Strong legal framework with specialized support. Ministry of Gender Equality operates 24/7 hotlines. Foreign women can access government support through Danuri Call Center.',
      supportResources: [
        '1366 Women\'s Helpline (24/7, multilingual support)',
        'Danuri Call Center: 1577-1366 (for immigrants/multicultural families)',
        'Emergency Services: 112 (Police), 119 (Medical)',
        'Tourist Hotline: 1330 (24/7 English support)',
        'U.S. Embassy Seoul: +82 2 397 4114'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Yonsei Severance Hospital',
          address: '50-1 Yonsei-ro, Seodaemun-gu, Seoul',
          phone: '+82 2 2228 5800',
          emergency: true,
          specialties: ['International Health Center', 'Emergency Medicine', 'Women\'s Health'],
          link: 'https://sev.iseverance.com/dept_clinic/center/international/'
        },
        {
          name: 'Samsung Medical Center',
          address: '81 Irwon-ro, Gangnam-gu, Seoul',
          phone: '+82 2 3410 2114',
          emergency: true,
          specialties: ['International Clinic', 'Emergency Medicine', 'General Medicine'],
          link: 'https://www.samsunghospital.com/gb/main/main.do'
        },
        {
          name: 'Seoul National University Hospital',
          address: '101 Daehak-ro, Jongno-gu, Seoul',
          phone: '+82 2 2072 2114',
          emergency: true,
          specialties: ['Emergency Medicine', 'International Clinic'],
          link: 'https://www.snuh.org/global/en/main.do'
        }
      ],
      pharmacies: [
        {
          name: 'Myeongdong Pharmacy',
          address: 'Myeongdong 2-ga, Jung-gu, Seoul',
          phone: '+82 2 776 2875',
          hours: 'Mon-Sat 9:00-21:00, Sun 10:00-20:00',
          emergency: false,
          link: 'Various locations in Myeongdong'
        },
        {
          name: 'Gangnam Pharmacy',
          address: 'Gangnam-gu, Seoul (multiple locations)',
          phone: '+82 2 538 8275',
          hours: 'Mon-Sat 9:00-22:00, Sun 10:00-20:00',
          emergency: false,
          link: 'Multiple locations in Gangnam district'
        }
      ],
      womensHealth: {
        clinics: [
          'CHA Gangnam Medical Center Women\'s Health: +82 2 3468 3000',
          'Seoul Women\'s Hospital: +82 2 2277 1300',
          'Gangnam Severance Hospital Women\'s Center: +82 2 2019 3410'
        ],
        gynecologists: [
          'Dr. Kim at Samsung Medical Center International Clinic: +82 2 3410 0200',
          'Dr. Park at Yonsei International Health Center: +82 2 2228 5800'
        ],
        emergencyContraception: [
          'Available at all pharmacies with prescription',
          'Emergency contraception available at hospital emergency departments',
          'Can be obtained at women\'s health clinics'
        ],
        sanitaryProducts: [
          'Available at all convenience stores (abundant throughout city)',
          'Vending machines in subway stations and public restrooms',
          'Comprehensive selection at department stores and pharmacies'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Seoul',
        'COVID-19 vaccination recommended',
        'Flu shot recommended during winter months (Dec-Feb)',
        'Japanese Encephalitis vaccination if traveling to rural areas'
      ],
      healthRisks: [
        'Air pollution can affect respiratory conditions (especially spring)',
        'Yellow dust storms from China (spring months)',
        'Seasonal flu during winter',
        'Heat exhaustion during summer months'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Seoul Subway',
          safety: 9.8,
          recommendations: ['Use Citymapper or Subway Korea app', 'Women-only cars available during rush hour'],
          companies: ['Seoul Metro'],
          link: 'http://www.seoulmetro.co.kr/en/'
        },
        {
          type: 'KakaoTaxi',
          safety: 9.2,
          recommendations: ['Official Korean taxi app', 'GPS tracking and driver verification'],
          companies: ['Kakao'],
          link: 'https://www.kakaocorp.com/service/KakaoTaxi'
        },
        {
          type: 'Seoul City Bus',
          safety: 9.0,
          recommendations: ['Use T-money card', 'Well-monitored and safe'],
          companies: ['Seoul Metropolitan Government'],
          link: 'http://bus.go.kr/'
        },
        {
          type: 'Regular Taxi',
          safety: 8.8,
          recommendations: ['Orange and silver taxis are official', 'Avoid unlicensed black cars'],
          companies: ['Licensed Seoul Taxis'],
          link: 'Official taxi stands only'
        }
      ],
      nightTravel: {
        safety: 8.6,
        warnings: [
          'Avoid isolated areas after midnight',
          'Exercise caution in nightlife districts (Hongdae, Itaewon)',
          'Subway runs until midnight (1 AM weekends)',
          'Night buses available but less frequent'
        ],
        alternatives: [
          'KakaoTaxi available 24/7',
          'Night bus routes cover main areas',
          'Stay in groups when out late',
          'Use well-lit main streets'
        ]
      },
      verifiedProviders: [
        {
          name: 'Seoul Subway',
          type: 'Public Transport',
          contact: 'Citymmapper app',
          safety: 9.8
        },
        {
          name: 'KakaoTaxi',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.2
        },
        {
          name: 'Seoul City Bus',
          type: 'Public Transport',
          contact: 'T-money card',
          safety: 9.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service',
        'Digital door locks with key cards',
        'CCTV surveillance (extensive city-wide)',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Myeongdong (central, tourist-friendly)',
        'Gangnam (upscale, well-patrolled)',
        'Jongno (traditional, safe)',
        'Hongdae (nightlife, well-monitored)',
        'Itaewon (international district)'
      ],
      womensOnly: [
        {
          name: 'Ewha Womans University Guest House',
          type: 'Guest House',
          features: ['Women-only floors', 'University campus location', 'High security', 'Safe environment'],
          rating: 4.4
        },
        {
          name: 'Female-only Hostels in Hongdae',
          type: 'Hostel',
          features: ['Female-only dorms', 'Central location', 'Safe area', '24/7 staff'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.2,
          comments: 'Felt extremely safe as a solo female traveler. Seoul is incredibly safe and welcoming.',
          date: '2025-01-15'
        },
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'Amazing safety infrastructure. CCTV everywhere and very helpful locals.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Seoul has extensive free WiFi (Seoul WiFi) in public areas',
        'Use hotel/accommodation WiFi when possible',
        'Avoid sensitive transactions on public WiFi',
        'Consider VPN for additional security'
      ],
      digitalScams: [
        'Fake K-pop merchandise websites',
        'Romance scams targeting foreign women on dating apps',
        'Fake language exchange meetups',
        'Overpriced tour booking websites'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Korea',
        'NordVPN - reliable connection',
        'ProtonVPN - free tier available'
      ],
      dataProtection: [
        'Strong data protection laws in South Korea',
        'Use secure payment methods',
        'Keep copies of documents in cloud storage',
        'Enable device tracking and remote wipe'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Political Protests',
          location: 'Gwanghwamun Square',
          date: '2025-01-20',
          description: 'Ongoing political tensions following presidential impeachment - avoid protest areas',
          severity: 'low'
        },
        {
          type: 'Air Quality Alert',
          location: 'Citywide',
          date: '2025-01-15',
          description: 'Yellow dust storm from China affecting air quality',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Download KakaoMap and Subway Korea apps for navigation',
          author: 'Solo Traveler',
          date: '2025-01-22',
          upvotes: 89
        },
        {
          tip: 'Use T-money card for all public transportation - very convenient',
          author: 'Local Resident',
          date: '2025-01-21',
          upvotes: 76
        },
        {
          tip: 'Learn basic Korean phrases - locals appreciate the effort',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 92
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'South Korea is generally safe for travelers. Exercise normal precautions due to political tensions and potential demonstrations.',
      reason: 'Political tensions following presidential impeachment and potential demonstrations.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-korea-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent choice for first-time solo female travelers',
        'Stay in Myeongdong or Gangnam for best safety and convenience',
        'Download KakaoTaxi and subway apps',
        'Use 1330 tourist hotline for 24/7 English assistance',
        'Avoid political protest areas around government buildings'
      ]
    },
    crimeStatistics: {
      violentCrime: 0.6, // per 100,000 (2024 data shows Korea has very low violent crime)
      propertyCrime: 850, // per 100,000 (2024 data)
      sexualAssault: 22.9, // per 100,000 (2024 data - concerning trend for foreign women)
      kidnapping: 0.1, // per 100,000 (2024 data)
      source: 'Korean National Police Agency & Statistics Korea',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Portable door lock for guesthouses',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Emergency whistle',
        'Mask for air pollution days'
      ],
      safetyApps: [
        {
          name: 'Emergency Ready App',
          purpose: 'Government emergency alerts in English',
          rating: 4.5
        },
        {
          name: 'Safe Seoul',
          purpose: 'City safety information and emergency contacts',
          rating: 4.3
        },
        {
          name: 'KakaoMap',
          purpose: 'Navigation with safety features',
          rating: 4.8
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police'
        },
        {
          name: 'Fire/Medical Emergency',
          number: '119',
          type: 'Fire/Ambulance'
        },
        {
          name: 'Tourist Hotline',
          number: '1330',
          type: '24/7 English Support'
        },
        {
          name: 'Women\'s Helpline',
          number: '1366',
          type: 'Support Services'
        },
        {
          name: 'U.S. Embassy',
          number: '+82 2 397 4114',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$35 - $60 USD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level.',
        tip: 'Seoul offers excellent value with high safety standards. Mid-range budget provides premium safety and comfort.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$15-25',
          safetyNote: 'Excellent safety record, female-only options available',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$40-60',
          safetyNote: 'High safety standards, digital locks, CCTV',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$60-100',
          safetyNote: 'Premium safety with 24/7 staff and security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Subway/Bus (T-money card)',
          cost: '$1-2/ride',
          safetyDescription: 'Extremely safe, clean, efficient. Women-only cars available.',
          safetyLevel: 'high'
        },
        {
          method: 'KakaoTaxi',
          cost: '$3-8/ride',
          safetyDescription: 'Very safe with GPS tracking and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'Regular Taxi',
          cost: '$5-12/ride',
          safetyDescription: 'Safe but more expensive. Use official orange/silver taxis.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe day and night in most areas.',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Seoul combines affordability with exceptional safety',
        'Public transport is cheap and extremely safe',
        'Convenience stores (7-Eleven, GS25) provide 24/7 safe spaces',
        'Free WiFi and helpful infrastructure reduce costs'
      ]
    }
};

export default seoul; 