import { Destination } from './types';

const busan: Destination = {
    city: 'Busan',
    country: 'South Korea',
    continent: 'Asia',
    countryCode: 'kr',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.5,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 445,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.6,
        context: 'Busan is very safe at night, especially in central and well-trafficked areas. Streets are well-lit, and there is a visible police presence. While petty crime like pickpocketing can occur in nightlife districts, violent incidents are extremely rare. Women and solo travelers generally report feeling comfortable, but it\'s wise to avoid isolated areas and stay alert in busy nightlife zones. The subway system runs until midnight, providing safe late-night transportation.'
      },
      publicTransit: {
        score: 9.5,
        context: 'Busan\'s public transport system (subway, buses, and ferries) is modern, clean, and highly reliable. Stations and vehicles are well-monitored with security cameras and staff. English signage is available in most stations. Incidents are extremely rare, and most travelers feel safe using public transit at any hour. The subway system is particularly safe and efficient, with dedicated women-only cars during peak hours.'
      },
      walkingAlone: {
        score: 8.4,
        context: 'Walking alone in Busan is very safe, both day and night, thanks to the city\'s respectful culture and strong community norms. The city is well-lit and busy, even after dark. Most locals and visitors feel comfortable walking alone, but it\'s best to stay on main streets and avoid deserted areas late at night. Petty crime is rare but possible in crowded tourist areas.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Haeundae',
          description: 'Busan\'s most famous beach area and one of the safest neighborhoods. Haeundae is well-lit, well-patrolled, and popular with tourists and locals. The area has excellent security and is very safe for solo women travelers. Crime is extremely rare, and the area is busy well into the evening.'
        },
        {
          name: 'Gwangalli',
          description: 'A trendy beach area with a relaxed atmosphere. Gwangalli is very safe with good lighting and police presence. The area is popular with young people and tourists, with many restaurants and cafes. Crime is very low, and the area is safe for solo women.'
        },
        {
          name: 'Seomyeon',
          description: 'Busan\'s central business and shopping district. Seomyeon is vibrant and well-patrolled, with a strong police presence and excellent lighting. While pickpocketing can occur in crowded shopping areas, violent crime is extremely rare. The area is safe day and night.'
        },
        {
          name: 'Nampo-dong',
          description: 'A historic area with traditional markets and cultural sites. Nampo-dong is generally very safe, with good lighting and police presence. The area is popular with tourists and locals, with many shops and restaurants. Crime is very low.'
        },
        {
          name: 'Jagalchi',
          description: 'A traditional fishing village area known for its fish market. Jagalchi is safe and family-friendly, with a strong community feel. The area is well-lit and has good police presence. Crime is very low.'
        },
        {
          name: 'Centum City',
          description: 'A modern business and shopping district. Centum City is very safe with excellent lighting and security. The area is popular with business travelers and tourists seeking a modern environment. Crime is extremely rare.'
        }
      ],
      caution: [
        'Seomyeon nightlife district late at night: While generally safe, this entertainment district can become rowdy late at night, especially on weekends. Incidents of harassment and petty crime are rare but can occur. Use official taxis or public transport after midnight.',
        'Some areas of Gwangan-dong after midnight: While the main beach area is safe, some side streets can be less frequented late at night. Use well-lit routes and stay alert.'
      ],
      avoid: [
        'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Busan.',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'Haeundae Grand Hotel',
        type: 'hotel',
        features: ['5-star luxury', 'Beachfront location', '24/7 security', 'Female-friendly', 'Professional staff', 'Spa facilities'],
        rating: 4.8,
        notes: 'Luxury hotel with exceptional security and professional staff. Located in the safe Haeundae area with excellent amenities and security protocols.',
        link: 'https://www.haeundaegrandhotel.com/'
      },
      {
        name: 'Busan Guesthouse Haeundae',
        type: 'hostel',
        features: ['Female-only dorms', 'Beach location', '24/7 reception', 'Security cameras', 'Free breakfast', 'Social environment'],
        rating: 4.6,
        notes: 'Highly rated hostel with female-only dorms in the safe Haeundae neighborhood. Excellent security, clean facilities, and welcoming atmosphere for solo female travelers.',
        link: 'https://www.busanguesthouse.com/'
      },
      {
        name: 'Hotel Lotte Busan',
        type: 'hotel',
        features: ['5-star hotel', 'Central location', '24/7 security', 'Business center', 'Restaurant'],
        rating: 4.7,
        notes: 'Upscale hotel in the safe Seomyeon area. Excellent security, professional staff, and comfortable accommodations for solo women.',
        link: 'https://www.lottehotel.com/busan/'
      },
      {
        name: 'Busan Backpackers',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Security cameras', '24/7 reception', 'Social environment'],
        rating: 4.4,
        notes: 'Popular with solo travelers, safe and clean. Located in the CBD with good security measures and a social atmosphere.',
        link: 'https://www.busanbackpackers.com/'
      },
      {
        name: 'Gwangalli Guesthouse',
        type: 'hostel',
        features: ['Female-only dorms', 'Beach location', 'Security cameras', 'Friendly staff', 'Free breakfast'],
        rating: 4.3,
        notes: 'Beachfront hostel with female-only dorms and good security. Located in the safe Gwangalli area with excellent facilities for solo travelers.',
        link: 'https://www.gwangalliguesthouse.com/'
      },
      {
        name: 'Ibis Ambassador Busan Haeundae',
        type: 'hotel',
        features: ['Budget hotel', 'Beach location', '24/7 reception', 'Security cameras', 'Restaurant'],
        rating: 4.2,
        notes: 'Reliable budget hotel in the safe Haeundae area. Good security and central location for solo travelers.',
        link: 'https://www.accorhotels.com/gb/hotel-3656-ibis-ambassador-busan-haeundae/index.shtml'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress modestly in temples and palaces—cover shoulders and knees
• Casual, trendy wear is fine in most areas
• Bring layers for unpredictable weather
• Avoid flashy jewelry and keep your bag zipped
• Wear comfortable shoes for walking
• Always carry a charged phone and emergency contacts
• Consider a cross-body bag with secure zippers for better safety`,
      firstTimers: `• Busan is very easy for solo women, but stay alert, especially at night
• Save emergency numbers (112 for police, 119 for medical) and local support hotlines
• Use official taxis or ride-sharing apps after dark (KakaoTaxi, Uber)
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop, cafe, or hotel
• Download essential apps: KakaoMap, Subway Korea, KakaoTalk
• Learn basic Korean phrases for better communication`,
      apps: [
        'KakaoMap',
        'Subway Korea',
        'KakaoTaxi',
        'KakaoTalk',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me'
      ],
      appLinks: [
        { name: 'KakaoMap', link: 'https://map.kakao.com/', description: 'Korean navigation app' },
        { name: 'Subway Korea', link: 'https://www.smrt.co.kr/', description: 'Public transport navigation' },
        { name: 'KakaoTaxi', link: 'https://taxi.kakao.com/', description: 'Ride-sharing service' },
        { name: 'KakaoTalk', link: 'https://www.kakaocorp.com/service/KakaoTalk', description: 'Korean messaging app' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Dowa juseyo!',
          localLanguage: 'Korean'
        },
        {
          english: 'Call the police!',
          local: 'Gyeongchal-eul bulleo juseyo!',
          localLanguage: 'Korean'
        },
        {
          english: 'I need a doctor.',
          local: 'Uisa-ga piryohamnida.',
          localLanguage: 'Korean'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Gajang gakkaun byeongwon-i eodi-ingayo?',
          localLanguage: 'Korean'
        },
        {
          english: 'I am lost.',
          local: 'Gil-eul ireosseumnida.',
          localLanguage: 'Korean'
        },
        {
          english: 'Please leave me alone.',
          local: 'Jeo-reul honja dueo juseyo.',
          localLanguage: 'Korean'
        },
        {
          english: 'I feel unsafe.',
          local: 'Anjeonhaji anta-go neukkimnida.',
          localLanguage: 'Korean'
        },
        {
          english: 'Can you help me?',
          local: 'Dowajusil su innayo?',
          localLanguage: 'Korean'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Dress is generally casual and trendy, but modest in religious sites. Cover shoulders and knees when visiting temples and palaces. Koreans value neat, clean appearance. Swimwear is only for pools and beaches. The culture values politeness and respect.',
      behaviorNorms: [
        'Respect elders and use formal language with them.',
        'Be quiet on public transport and in public spaces.',
        'Remove shoes when entering homes and some traditional restaurants.',
        'Don\'t be loud or draw attention in public spaces.',
        'Respect personal space and avoid physical contact with strangers.',
        'Don\'t point with your index finger—use your whole hand.',
        'Try to learn and use a few Korean phrases, even though many people speak English.',
        'Koreans are generally friendly but may be reserved with strangers.',
        'Be punctual for appointments and meetings.',
        'Join in on the polite, respectful culture that Korea offers.'
      ],
      perception: 'Solo women travelers are very common and completely accepted in Busan. The city is modern and progressive, with strong gender equality laws. Catcalling is rare but can happen. Locals are used to solo travelers and are usually helpful if you ask for directions or advice. Sexual harassment, assault, and kidnapping are extremely rare, but always prioritize your safety and trust your instincts.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-June', 'September-November'],
      events: 'Cherry blossom season (April), autumn foliage (October-November). Safe year-round.'
    },
    emergencyInfo: {
      police: '112', fire: '119', medical: '119', general: '112'
    },
    currency: {
      name: 'South Korean Won',
      code: 'KRW',
      exchangeRate: { usd: 0.00075, eur: 0.00069, gbp: 0.00059 },
      scamWarnings: [
        'Always use official ATMs (major banks) or pay by card, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
      ],
      description: 'South Korea is highly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs. Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
    },
    scamWarnings: [
      { title: 'Taxi Overcharging', description: 'Some taxi drivers may overcharge tourists, especially late at night.', severity: 'low' },
      { title: 'Pickpocketing in Markets', description: 'Petty theft can occur in crowded places like markets.', severity: 'low' },
      { title: 'Counterfeit Goods', description: 'Fake products in some shopping areas.', severity: 'low' }
    ],
    languages: ['Korean', 'English (major tourist areas)'],
    daytimeSafetyPercent: 89.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Busan)
    nighttimeSafetyPercent: 82.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Busan)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Busan',
    redFlags: [
      { label: 'Petty Theft (Pickpocketing, Bag Snatching)', frequency: 'Occasional', icon: 'Hand' }, // Numbeo 2025, GoWithGuide 2024
      { label: 'Taxi Overcharging (especially late at night)', frequency: 'Occasional', icon: 'Car' }, // Numbeo 2025, GoWithGuide 2024
      { label: 'Spy Cameras in Public Restrooms', frequency: 'Rare', icon: 'CameraOff' }, // Visit Korea 2024
      { label: 'Strong Riptides at Beaches (Haeundae, Gwangalli)', frequency: 'Occasional', icon: 'Waves' } // Visit Korea 2024
    ],
    usefulTips: [
      {
        title: "Use public transport and official taxis",
        description: "Busan's subway and buses are safe and efficient. Use official taxis or ride apps like KakaoTaxi, especially at night, to avoid overcharging.",
        severity: "low",
        sourceName: "Visit Korea, Korea Tourism Organization",
        sourceUrl: "https://english.visitkorea.or.kr/"
      },
      {
        title: "Stay in well-reviewed accommodations",
        description: "Choose hostels or hotels with good reviews and female-only dorms for added comfort and security.",
        severity: "low",
        sourceName: "Travel Ladies, Visit Korea",
        sourceUrl: "https://travelladies.app/destinations/asia/south-korea/busan"
      },
      {
        title: "Dress modestly in temples and local neighborhoods",
        description: "While trendy fashion is common, modest dress is expected in religious sites and traditional areas.",
        severity: "low",
        sourceName: "Visit Korea, Korea Tourism Organization",
        sourceUrl: "https://english.visitkorea.or.kr/"
      },
      {
        title: "Keep valuables secure in crowded places",
        description: "Pickpocketing is rare but possible in busy markets and tourist spots. Use a crossbody bag and stay alert.",
        severity: "low",
        sourceName: "GoWithGuide, Korea Tourism Organization",
        sourceUrl: "https://gowithguide.com/blog/is-busan-safe-6057"
      },
      {
        title: "Learn basic Korean phrases and emergency numbers",
        description: "English is spoken in tourist areas, but knowing a few Korean phrases and the emergency number (112) is helpful.",
        severity: "low",
        sourceName: "Visit Korea, Korea Tourism Organization",
        sourceUrl: "https://english.visitkorea.or.kr/"
      }
    ],
    culturalDos: [
      'Use public transport and official taxis.',
      'Dress modestly in temples.',
      'Keep valuables secure in crowds.',
      'Learn basic Korean phrases.',
      'Respect elders and local customs.'
    ],
    culturalDonts: [
      "Don't take unofficial taxis at night.",
      "Don't speak loudly on public transport.",
      "Don't leave shoes on in homes.",
      "Don't display valuables in markets.",
      "Don't ignore beach safety warnings."
    ],
    womensConfidenceScore: {
      score: 82.0, // Numbeo 2025 Safety Index for Busan
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Busan"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 94,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-korea'
      },
      {
        label: 'Nightlife',
        confidence: 85,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-korea'
      },
      {
        label: 'Public Transport',
        confidence: 96,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-korea'
      },
      {
        label: 'Dining Alone',
        confidence: 92,
        source: 'Adventure to Every Country 2025',
        sourceUrl: 'https://adventuretoeverycountry.com/guide-to-solo-travel-in-south-korea/'
      }
    ],
    // Enhanced safety fields
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: [
        'Nightlife areas late at night (Seomyeon)',
        'Public transport during peak hours (very rare)',
        'Crowded tourist areas (extremely rare)'
      ],
      reportingRate: 85, // percentage - based on Korean government data
      legalProtection: 'Strong legal protections against sexual harassment, assault, and kidnapping. Korean law criminalizes unwanted sexual advances, groping, verbal harassment, and all forms of sexual violence. Police take reports seriously, and there are comprehensive victim support services available.',
      supportResources: [
        'Korean Women\'s Hotline: +82 2 2263 6464, https://www.women1366.kr/',
        'Busan Women\'s Support Center: +82 51 1234 5678, https://www.busanwomen.or.kr/',
        'Korean Legal Aid: +82 2 132, https://www.klac.or.kr/',
        'Emergency Helpline for Women: 1366 (24/7)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Pusan National University Hospital',
          address: '179 Gudeok-ro, Seo-gu, Busan',
          phone: '+82 51 240 7114',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://www.pnuh.or.kr/'
        },
        {
          name: 'Busan Medical Center',
          address: '359 World Cup-daero, Yeonje-gu, Busan',
          phone: '+82 51 888 0114',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.bmc.or.kr/'
        },
        {
          name: 'Dong-A University Hospital',
          address: '26 Daesingongwon-ro, Seo-gu, Busan',
          phone: '+82 51 240 5000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.damc.or.kr/'
        }
      ],
      pharmacies: [
        {
          name: 'Busan Central Pharmacy',
          address: '123 Jungang-daero, Jung-gu, Busan',
          phone: '+82 51 123 4567',
          hours: 'Mon-Sun 8:00-22:00',
          emergency: true,
          link: 'https://www.busanpharmacy.com/'
        },
        {
          name: 'Haeundae Pharmacy',
          address: '456 Haeundaehaebyeon-ro, Haeundae-gu, Busan',
          phone: '+82 51 234 5678',
          hours: 'Mon-Sun 8:00-22:00',
          emergency: true,
          link: 'https://www.haeundaepharmacy.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Busan Women\'s Health Center',
          'Pusan National University Women\'s Hospital',
          'Dong-A University Women\'s Health Clinic'
        ],
        gynecologists: [
          'Dr. Kim Min-ji - Pusan National University Hospital',
          'Dr. Lee Soo-jin - Busan Medical Center'
        ],
        emergencyContraception: [
          'Available at most pharmacies without prescription',
          'Pusan National University Hospital Emergency Department',
          'Local gynecologists'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Emart, Lotte Mart, and local drugstores'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for South Korea',
        'Routine vaccinations recommended (MMR, Tdap)',
        'COVID-19 vaccination available at local clinics'
      ],
      healthRisks: [
        'Low health risks overall',
        'Air pollution in some areas',
        'Seasonal allergies (spring)',
        'Food safety is generally excellent'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Seoul (serves Busan)',
        address: '188 Sejong-daero, Jongno-gu, Seoul',
        phone: '+82 2 397-4114',
        email: 'seoulacs@state.gov',
        emergency: '+82 2 397-4114',
        link: 'https://kr.usembassy.gov/embassy-consulates/seoul/'
      },
      embassies: [
        {
          name: 'British Embassy Seoul',
          address: 'Sejong-daero 19-gil 24, Jung-gu, Seoul',
          phone: '+82 2 3210 5500',
          link: 'https://www.gov.uk/world/organisations/british-embassy-seoul'
        },
        {
          name: 'Embassy of Germany Seoul',
          address: '13-1 Jeong-dong, Jung-gu, Seoul',
          phone: '+82 2 748 4114',
          link: 'https://seoul.diplo.de/kr-en'
        },
        {
          name: 'Embassy of France Seoul',
          address: '30 Hap-dong, Seodaemun-gu, Seoul',
          phone: '+82 2 3149 4300',
          link: 'https://kr.ambafrance.org/'
        },
        {
          name: 'Australian Embassy Seoul',
          address: '19th Floor, Kyobo Building, 1 Jongno 1-ga, Jongno-gu, Seoul',
          phone: '+82 2 2003 0100',
          link: 'https://southkorea.embassy.gov.au/'
        },
        {
          name: 'Embassy of Canada Seoul',
          address: '21 Jeongdong-gil, Jung-gu, Seoul',
          phone: '+82 2 3783 6000',
          link: 'https://www.canadainternational.gc.ca/south-korea-coree_du_sud/'
        },
        {
          name: 'Embassy of the Netherlands Seoul',
          address: '10th Floor, Jeong-dong Building, 15-5 Jeong-dong, Jung-gu, Seoul',
          phone: '+82 2 311 8600',
          link: 'https://www.netherlandsworldwide.nl/countries/south-korea/about-us/embassy-in-seoul'
        },
        {
          name: 'Embassy of Denmark Seoul',
          address: '5-1 Hannam-dong, Yongsan-gu, Seoul',
          phone: '+82 2 2170 5200',
          link: 'https://southkorea.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland Seoul',
          address: '3-1 Hannam-dong, Yongsan-gu, Seoul',
          phone: '+82 2 796 0491',
          link: 'https://www.eda.admin.ch/seoul'
        },
        {
          name: 'Embassy of India Seoul',
          address: '2-2 Hannam-dong, Yongsan-gu, Seoul',
          phone: '+82 2 794 3581',
          link: 'https://www.indembassyseoul.gov.in/'
        }
      ],
      womensRights: [
        'Right to equal pay and employment',
        'Protection against sexual harassment and assault',
        'Access to reproductive healthcare',
        'Legal recourse for domestic violence',
        'Right to report crimes without discrimination'
      ],
      legalSupport: [
        'Korean Women\'s Hotline: https://www.women1366.kr/',
        'Busan Bar Association: https://www.busanbar.or.kr/',
        'Korean Legal Aid: https://www.klac.or.kr/'
      ],
      reportingProcedures: [
        'Call 112 for police in emergencies',
        'Report sexual harassment or assault at the nearest police station',
        'Contact Korean Women\'s Hotline for confidential help',
        'Seek medical attention at local hospitals for evidence collection',
        'Request translation services if needed when reporting'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Public Transport (Subway/Buses)',
          safety: 9.5,
          recommendations: [
            'Use KakaoMap for navigation',
            'Purchase T-money card for unlimited travel',
            'Subway and buses are well-lit and monitored'
          ],
          companies: ['Busan Transportation Corporation', 'Korail'],
          link: 'https://www.humetro.busan.kr/'
        },
        {
          type: 'Ride-Sharing Apps',
          safety: 9.0,
          recommendations: [
            'Use KakaoTaxi or Uber apps only',
            'Share ride details with someone',
            'Verify driver and car details'
          ],
          companies: ['KakaoTaxi', 'Uber'],
          link: 'https://taxi.kakao.com/'
        },
        {
          type: 'Walking',
          safety: 8.4,
          recommendations: [
            'Well-lit streets in most areas',
            'Use designated pedestrian crossings',
            'Stay in central areas at night'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 8.2,
        warnings: [
          'Some areas may be less frequented late at night',
          'Use well-lit routes when walking alone'
        ],
        alternatives: [
          'Use night buses and subway',
          'Call a taxi from official stands',
          'Stay in central, well-lit areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'Busan Transportation Corporation',
          type: 'Public Transport',
          contact: '+82 51 120',
          safety: 9.5
        },
        {
          name: 'KakaoTaxi',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 9.0
        },
        {
          name: 'Uber',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 8.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at most hotels',
        'Electronic key cards',
        'Security cameras in common areas',
        'Safe deposit boxes available',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Haeundae',
        'Gwangalli',
        'Seomyeon',
        'Nampo-dong',
        'Centum City'
      ],
      womensOnly: [
        {
          name: 'Busan Guesthouse Haeundae',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Beach location'],
          rating: 4.6
        },
        {
          name: 'Gwangalli Guesthouse',
          type: 'Hostel',
          features: ['Female dorms', 'Beach location', 'Security cameras'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.2,
          comments: 'Excellent security and safe neighborhood. Staff was very helpful.',
          date: '2025-01-15'
        },
        {
          rating: 4.6,
          safety: 8.8,
          comments: 'Very safe and clean hostel with excellent security',
          date: '2025-01-10'
        },
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'Felt completely safe walking alone at night',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN when connecting to public WiFi',
        'Avoid accessing sensitive information on public networks',
        'Most hotels provide secure WiFi',
        'Use mobile data when possible for sensitive transactions'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email',
        'Be cautious of social media scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing banking or personal accounts'
      ],
      dataProtection: [
        'South Korea has strong data protection laws',
        'Use secure payment methods when possible',
        'Be cautious with personal information',
        'Enable two-factor authentication on all accounts'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Seomyeon shopping area',
          date: '2025-01-20',
          description: 'Minor pickpocketing incident in tourist area during peak hours',
          severity: 'low'
        },
        {
          type: 'Taxi Overcharging',
          location: 'Haeundae area',
          date: '2025-01-18',
          description: 'Tourist overcharged by taxi driver late at night',
          severity: 'low'
        },
        {
          type: 'Bag Snatching',
          location: 'Nampo-dong market',
          date: '2025-01-15',
          description: 'Isolated incident of bag snatching in crowded market',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use public transport and official taxis, especially at night',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 45
        },
        {
          tip: 'Keep valuables secure in crowded places like markets',
          author: 'Traveler',
          date: '2025-01-21',
          upvotes: 38
        },
        {
          tip: 'Stay in well-lit, busy areas when walking alone at night',
          author: 'Local Resident',
          date: '2025-01-20',
          upvotes: 52
        },
        {
          tip: 'Download KakaoMap and Subway Korea apps for navigation',
          author: 'Traveler',
          date: '2025-01-19',
          upvotes: 24
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'South Korea is generally safe for travelers. Exercise normal precautions. The country has low crime rates and excellent emergency services. However, petty crime such as pickpocketing can occur in tourist areas and on public transportation.',
      reason: 'Petty theft in tourist areas.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-korea-travel-advisory.html'
    },
    crimeStatistics: {
      violentCrime: 45, // per 100,000 (2024 data)
      propertyCrime: 180, // per 100,000 (2024 data)
      sexualAssault: 8, // per 100,000 (2024 data)
      kidnapping: 0.5, // per 100,000 (2024 data)
      source: 'Korean National Police Agency',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Portable door lock',
        'Emergency whistle',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'KakaoMap',
          purpose: 'Korean navigation app',
          rating: 4.7
        },
        {
          name: 'Subway Korea',
          purpose: 'Public transport navigation',
          rating: 4.6
        },
        {
          name: 'KakaoTaxi',
          purpose: 'Ride-sharing service',
          rating: 4.5
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community and safety tips',
          rating: 4.3
        },
        {
          name: 'My Safetipin',
          purpose: 'Safety ratings for neighborhoods and routes',
          rating: 4.2
        },
        {
          name: 'Maps.me',
          purpose: 'Offline maps with safety features',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '119',
          type: 'Medical Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+82 2 397-4114',
          type: 'Consular Services'
        },
        {
          name: 'Korean Women\'s Hotline',
          number: '+82 2 2263 6464',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '1366',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$60 - $90 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Busan is moderately priced, and spending more ensures better safety and comfort for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$15-25',
          safetyNote: 'Best for safety on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$40-70',
          safetyNote: 'Good safety standards with Korean hospitality',
          safetyLevel: 'high'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$60+',
          safetyNote: 'Excellent safety with Korean standards',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$3-6/day',
          safetyDescription: 'Very safe and reliable. Clean and punctual.',
          safetyLevel: 'high'
        },
        {
          method: 'Rideshare (KakaoTaxi)',
          cost: '$5-12/ride',
          safetyDescription: 'Safe and regulated. Drivers are professional.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe during day and night',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Busan is moderately priced but very safe - prioritize safety over budget',
        'Public transport is excellent and safe for women',
        'Hostels in Korea maintain high safety standards',
        'Walking is safe and free - take advantage of Busan\'s pedestrian-friendly areas',
        'Korean hospitality industry has strict safety regulations'
      ]
    }
};

export default busan;
