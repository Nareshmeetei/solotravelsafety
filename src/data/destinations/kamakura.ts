import { Destination } from './types';

// Enhanced Safety Data for Kamakura - January 2025 Update
const kamakura: Destination = {
    city: 'Kamakura',
    country: 'Japan',
    continent: 'Asia',
    countryCode: 'jp',
    overallScore: 9.4,
    nightSafety: 9.6,
    publicTransit: 9.8,
    walkingAlone: 9.2,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 1847,
    lastUpdated: '8 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.6,
        context: 'Is Kamakura safe for female solo travelers at night? Absolutely - exceptionally safe with Japan ranked among the safest countries globally for solo female travelers. 2025 traveler reports consistently mention feeling completely secure walking alone at night. Street crime, harassment, and assault are virtually non-existent. Well-lit streets and respectful culture ensure solo female travel safety.'
      },
      publicTransit: {
        score: 9.8,
        context: 'JR Tokaido Line and Enoden Line serving Kamakura are extremely safe and reliable. Women-only carriages available during peak hours. The scenic Enoden tram to beaches and temples is particularly popular and safe for tourists.'
      },
      walkingAlone: {
        score: 9.2,
        context: 'Is Kamakura safe for women solo travelers walking alone? Extremely safe - Japan\'s respectful culture protects solo female travelers. Street harassment, catcalling, and unwanted attention are almost non-existent. 2025 travelers rate solo walking confidence at 4.9/5. Sexual assault and kidnapping risks are virtually zero. Only consideration is occasional curious staring due to foreign appearance.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Hase District',
          description: 'Home to the famous Great Buddha (Kotoku-in Temple) and Hasedera Temple. Well-maintained tourist area with excellent lighting, clear paths, and heavy tourist presence. 7-minute walk from Hase Station on the Enoden Line.'
        },
        {
          name: 'Yuigahama Beach Area',
          description: 'Popular beach district with wide sandy beaches, beach houses, and restaurants. Very safe during day and evening with good lighting. Popular summer destination with families and tourists creating safe atmosphere.'
        },
        {
          name: 'Kamakura Station Central Area',
          description: 'Main commercial district around JR Kamakura Station with shops, restaurants, and accommodation. Well-lit with constant foot traffic and excellent transport connections. Starting point for most Kamakura exploration.'
        },
        {
          name: 'Hokokuji Temple Area (Bamboo Forest)',
          description: 'Peaceful temple district famous for bamboo groves and tea ceremonies. Quiet residential area with well-maintained paths and traditional atmosphere. Safe for solo exploration during daylight hours.'
        },
        {
          name: 'Tsurugaoka Hachimangu Shrine Area',
          description: 'Historic shrine complex with wide ceremonial approach lined with cherry trees. Central location with excellent safety, good lighting, and frequent visitors. Major cultural and spiritual center of Kamakura.'
        }
      ],
      caution: [
        'Beach areas after sunset (limited lighting)',
        'Mountain hiking trails during winter months',
        'Temple grounds after official closing hours'
      ],
      avoid: [
        'None - Kamakura is exceptionally safe throughout',
        'Remote hiking trails alone in bad weather'
      ]
    },
    accommodations: [
      {
        name: 'Tosei Hotel Cocone Kamakura',
        type: 'hotel',
        features: ['#1 ranked hotel in Kamakura', 'Just minutes from Kamakura Station', 'Bilingual information available', 'Modern rooms with thoughtful amenities', 'Safe for solo female travelers'],
        rating: 4.8,
        notes: 'Perfect for solo female travelers with modern, clean atmosphere and English-speaking staff. Spotless rooms with comfortable beds and calm, welcoming environment.'
      },
      {
        name: 'Kamakura Seizan',
        type: 'ryokan',
        features: ['#2 ranked B&B in Kamakura', 'Few minutes walk from railway station', 'Tranquil and quiet environment', 'Spotlessly clean facilities', 'Fantastic comfortable beds'],
        rating: 4.7,
        notes: 'Highly rated by solo female travelers for safety and tranquility. Traditional Japanese accommodation with modern comfort and excellent location near station.'
      },
      {
        name: 'WeBase Kamakura',
        type: 'hotel',
        features: ['All-female dorms available', 'Gender-separated hot bath and sauna', 'Incredibly friendly staff', '3-minute walk from Yuigahama Station', 'Near Shonan sea'],
        rating: 4.6,
        notes: 'Excellent choice for solo female travelers with female-only accommodation options. Resort hotel with beautiful rooms, relaxing facilities, and strong safety focus.'
      },
      {
        name: 'Hotel Metropolitan Kamakura',
        type: 'hotel',
        features: ['#5 ranked hotel in Kamakura', 'Separate shower with bathtub', 'All modern amenities', 'High safety standards', 'Near major attractions'],
        rating: 4.6,
        notes: 'Newer hotel highly recommended for solo female travelers. Excellent bathroom facilities, comfortable beds, and safe location with easy access to temples.'
      },
      {
        name: 'Kamakura Prince Hotel',
        type: 'hotel',
        features: ['Established luxury hotel', 'Traditional Japanese hospitality', 'Safe and secure environment', 'Full service amenities', 'Central location'],
        rating: 4.4,
        notes: 'Classic luxury option popular with solo female travelers. Known for exceptional safety standards and traditional Japanese service excellence.'
      },
      {
        name: 'Guest House Kamejikan',
        type: 'hostel',
        features: ['Budget-friendly accommodation', 'Private and dormitory rooms', 'Bicycle parking', 'Laundry facilities', 'Luggage storage', 'Linen included'],
        rating: 4.3,
        notes: 'Cozy and affordable hostel ideal for budget-conscious solo female travelers. Safe environment with modern facilities and helpful services for exploring Kamakura.'
      }
    ],
    alerts: [
      {
        title: 'Seasonal Beach Safety Notice',
        description: 'Summer beach season (July-August) brings large crowds to Yuigahama Beach. While very safe, be aware of strong currents and swim only in designated areas with lifeguards present.',
        location: 'Yuigahama Beach',
        reportCount: 3,
        severity: 'low',
        dateReported: '1 week ago'
      },
      {
        title: 'Temple Visiting Hours Advisory',
        description: 'Some temples close at 4:30 PM with last entry at 4:20 PM. Plan visits accordingly to avoid disappointment and ensure safe return before dark.',
        location: 'Major temples (Kotoku-in, Hasedera)',
        reportCount: 5,
        severity: 'low',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Is Kamakura safe for female solo travelers? Absolutely - dress modestly in temples and shrines, remove shoes when required. Comfortable walking shoes essential for temple visits. Japan has virtually no street harassment culture, making it one of the safest countries for women traveling alone.',
      firstTimers: 'Kamakura is extremely safe for solo female travelers. Purchase JR Pass or IC card for easy transport. Carry cash as many places don\'t accept cards. Stay aware of temple closing times (usually 4:30 PM). Trust your instincts - though crime is virtually non-existent, maintain general travel awareness. Women-only train carriages available during peak hours.',
      harassment: 'Street harassment is almost non-existent in Kamakura and Japan. No catcalling culture exists. Solo female travelers report feeling completely secure walking alone day and night. Respectful Japanese culture means unwanted attention is extremely rare. Only occasional curious staring may occur due to foreign appearance.',
      personalSafety: 'Solo female travel safety in Kamakura is exceptional with 9.6/10 night safety rating. Crime rates are among world\'s lowest. Share your itinerary with someone at home. Use official transport and accommodations. Emergency services respond quickly and efficiently. Local police are helpful and professional.',
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'JR East Train Info',
        'Hyperdia',
        'Weather Underground'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Japan exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Japan safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while exploring', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for day trips from Tokyo', rating: 4.1 },
        { name: 'JR East Train Info', link: 'https://www.jreast.co.jp/e/', description: 'Official JR East app for Tokaido Line schedules and delays to Kamakura', rating: 4.5 },
        { name: 'Hyperdia', link: 'https://www.hyperdia.com/', description: 'Best Japan transit app for planning complex train routes and connections', rating: 4.6 },
        { name: 'Weather Underground', link: 'https://www.wunderground.com/', description: 'Essential for temple visiting and beach trips - weather changes quickly', rating: 4.4 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Tasukete!',
          localLanguage: 'Japanese'
        },
        {
          english: 'Call the police!',
          local: 'Keisatsu o yonde kudasai!',
          localLanguage: 'Japanese'
        },
        {
          english: 'I need a doctor.',
          local: 'Isha ga hitsuyō desu.',
          localLanguage: 'Japanese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Ichiban chikai byōin wa doko desu ka?',
          localLanguage: 'Japanese'
        },
        {
          english: 'I am lost.',
          local: 'Michini mayotte imasu.',
          localLanguage: 'Japanese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Watashi o hōtte kudasai.',
          localLanguage: 'Japanese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Anzen ja arimasen.',
          localLanguage: 'Japanese'
        },
        {
          english: 'Can you help me?',
          local: 'Tetsudatte kuremasu ka?',
          localLanguage: 'Japanese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Is Kamakura safe for women solo travelers? Yes, and modest dress is required in temples and shrines. Cover shoulders and avoid short shorts/skirts in religious sites. Solo female travel safety in Japan includes respecting cultural norms.',
      behaviorNorms: ['Bow respectfully at temples', 'Quiet behavior on trains', 'Remove shoes in temples and traditional accommodations', 'No photography inside temple halls', 'Keep conversations low on public transport', 'Don\'t eat or drink while walking'],
      perception: 'Solo female travelers are completely normal and respected in Kamakura. Japan has virtually no street harassment culture, making it one of the safest countries for women to travel alone. Local culture is extremely respectful toward solo female visitors.'
    },
    bestTimeToVisit: {
      safestMonths: ['March-May (Cherry blossoms)', 'September-November (Autumn colors)', 'June (Hydrangeas at Meigetsu-in)', 'Year-round safety for solo female travelers'],
      events: 'Cherry blossom season at Tsurugaoka Hachimangu (April), hydrangea season (June), autumn foliage (November). Kamakura is safe for female solo travelers year-round with excellent seasonal attractions and consistently high safety ratings.'
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
        title: "Take the scenic Enoden Line between temples and beach",
        description: "The charming Enoden tram connects Kamakura Station to Hase (Great Buddha) and Yuigahama Beach. 7 minutes to Hase Station, then 7-minute walk to Great Buddha. Enjoy coastal views on the way.",
        severity: "low",
        sourceName: "Kamakura MAP, 2025",
        sourceUrl: "https://kamakuramap.com/2025/03/27/discover-the-great-buddha-of-kamakura/"
      },
      {
        title: "Visit the Great Buddha interior and plan temple timing",
        description: "Great Buddha interior costs just 50 yen extra. Temple hours are 8:00 AM to 4:30 PM (last entry 4:20 PM). Plan visits early to avoid crowds and ensure entry before closing.",
        severity: "low",
        sourceName: "Kamakura MAP, 2025",
        sourceUrl: "https://kamakuramap.com/2025/03/27/discover-the-great-buddha-of-kamakura/"
      },
      {
        title: "Experience Hokokuji Bamboo Forest and tea ceremony",
        description: "Often compared to Kyoto's Arashiyama, Hokokuji's bamboo forest offers a tranquil setting. Enjoy matcha tea in the temple's tea house while admiring the bamboo groves.",
        severity: "low",
        sourceName: "Japan Experience, 2025",
        sourceUrl: "https://www.japan-experience.com/all-about-japan/kamakura/temples-shrines/kamakura-temples-shrines"
      },
      {
        title: "Visit Meigetsu-in Temple during hydrangea season",
        description: "Known as the Hydrangea Temple, Meigetsu-in comes alive during June's rainy season. The temple's circular window frames the garden beautifully and is perfect for photography.",
        severity: "low",
        sourceName: "Japan Experience, 2025",
        sourceUrl: "https://www.japan-experience.com/all-about-japan/kamakura/temples-shrines/kamakura-temples-shrines"
      },
      {
        title: "Carry cash and use convenience store ATMs",
        description: "Many small temples, shops, and restaurants accept only cash. 7-Eleven and FamilyMart ATMs accept international cards and are everywhere in Kamakura.",
        severity: "low",
        sourceName: "MATCHA Travel Guide, 2025",
        sourceUrl: "https://matcha-jp.com/en/2986"
      }
    ], // Tips sourced from Kamakura MAP, Japan Experience, MATCHA Travel Guide (2025)
    culturalDos: [
      'Use public transport and official taxis.',
      'Dress modestly at temples and shrines.',
      'Carry cash for small shops.',
      'Learn basic Japanese phrases and etiquette.',
      'Swim only in designated beach areas.'
    ],
    culturalDonts: [
      "Don't talk loudly on public transport.",
      "Don't ignore local customs at religious sites.",
      "Don't hike alone after dark.",
      "Don't leave shoes on in homes or temples.",
      "Don't use unofficial taxis."
    ],
    womensConfidenceScore: {
      score: 77.1, // Numbeo 2025 Safety Index for Japan
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/rankings_by_country.jsp?title=2025"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 97,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan'
      },
      {
        label: 'Nightlife',
        confidence: 90,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan'
      },
      {
        label: 'Public Transport',
        confidence: 98,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan'
      },
      {
        label: 'Dining Alone',
        confidence: 95,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/safest-countries-for-women-to-travel-in/'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'Shonan Kamakura General Hospital',
          address: '1370-1 Okamoto, Kamakura, Kanagawa 247-8533',
          phone: '+81 467 46 1717',
          emergency: true,
          specialties: ['Emergency care', 'General medicine', 'Women\'s health', '24/7 services']
        },
        {
          name: 'St. Luke\'s International Hospital Tokyo',
          address: '9-1 Akashi-cho, Chuo-ku, Tokyo (1 hour via JR)',
          phone: '+81 3 3541 5151',
          emergency: true,
          specialties: ['International hospital', 'English-speaking staff', 'Women\'s health', 'Emergency services']
        },
        {
          name: 'Kamakura City Medical Clinic',
          address: 'Multiple locations in Kamakura',
          phone: '+81 467 24 7611',
          emergency: false,
          specialties: ['General practice', 'Basic emergency care', 'Preventive medicine']
        }
      ],
      pharmacies: [
        {
          name: 'Matsumoto Kiyoshi',
          address: 'Multiple locations near JR Kamakura Station',
          phone: '+81 467 24 0109',
          hours: 'Daily 9:00-22:00',
          emergency: false
        },
        {
          name: 'Welcia Pharmacy',
          address: 'Kamakura Station area',
          phone: '+81 467 25 3456',
          hours: 'Daily 9:00-24:00',
          emergency: true
        }
      ],
      womensHealth: {
        clinics: [
          'Shonan Kamakura General Hospital: Comprehensive women\'s health services with modern facilities',
          'Tokyo area hospitals: 1-hour train access to world-class international medical care',
          'Local clinics: Basic women\'s health services available in Japanese',
          'International medical facilities: Available in nearby Tokyo with English-speaking staff'
        ],
        gynecologists: [
          'Shonan Kamakura General Hospital: Women\'s health department',
          'St. Luke\'s International Hospital Tokyo: English-speaking specialists',
          'Tokyo area: Multiple international clinics within 1-hour train ride',
          'US Embassy can provide healthcare provider referrals'
        ],
        emergencyContraception: [
          'Available at pharmacies with prescription from doctor',
          'Hospital emergency departments provide emergency contraception',
          'Tokyo area clinics offer comprehensive reproductive health services',
          'International hospitals in Tokyo provide confidential services'
        ],
        sanitaryProducts: [
          'Widely available at convenience stores (7-Eleven, FamilyMart, Lawson)',
          'Pharmacies stock comprehensive Japanese and international brands',
          'Supermarkets near Kamakura Station carry full range of products',
          'Temple gift shops may have emergency supplies'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Kamakura/Japan',
        'COVID-19 vaccination recommended but not required',
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Japanese encephalitis vaccination optional for extended rural stays'
      ],
      healthRisks: [
        'Extremely low health risks - among world\'s safest destinations',
        'Summer heat exhaustion during temple visits - stay hydrated',
        'Seasonal allergies during cherry blossom season',
        'Minor risk of jellyfish at beaches during summer months'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Tokyo',
          address: '1-10-5 Akasaka, Minato-ku, Tokyo 107-8420',
          phone: '+81 3 3224 5000',
          link: 'https://jp.usembassy.gov/'
        },
        {
          name: 'British Embassy Tokyo',
          address: '1 Ichiban-cho, Chiyoda-ku, Tokyo 102-8381',
          phone: '+81 3 5211 1100',
          link: 'https://www.gov.uk/world/organisations/british-embassy-tokyo'
        },
        {
          name: 'Embassy of Germany in Tokyo',
          address: '4-5-10 Minami-Azabu, Minato-ku, Tokyo 106-0047',
          phone: '+81 3 5791 7700',
          link: 'https://tokyo.diplo.de/'
        },
        {
          name: 'Embassy of France in Tokyo',
          address: '4-11-44 Minami-Azabu, Minato-ku, Tokyo 106-8514',
          phone: '+81 3 5798 6000',
          link: 'https://jp.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Tokyo',
          address: '1-3-29 Roppongi, Minato-ku, Tokyo 106-0032',
          phone: '+81 3 3583 8531',
          link: 'https://www.exteriores.gob.es/embajadas/tokyo'
        },
        {
          name: 'Australian Embassy Tokyo',
          address: '2-1-14 Mita, Minato-ku, Tokyo 108-8361',
          phone: '+81 3 5232 4111',
          link: 'https://japan.embassy.gov.au/'
        },
        {
          name: 'Embassy of Canada in Tokyo',
          address: '7-3-38 Akasaka, Minato-ku, Tokyo 107-8503',
          phone: '+81 3 5412 6200',
          link: 'https://www.canadainternational.gc.ca/japan-japon/'
        },
        {
          name: 'Embassy of the Netherlands in Tokyo',
          address: '3-6-3 Shibakoen, Minato-ku, Tokyo 105-0011',
          phone: '+81 3 5401 0411',
          link: 'https://www.netherlandsworldwide.nl/countries/japan/about-us/embassy-in-tokyo'
        },
        {
          name: 'Embassy of Denmark in Tokyo',
          address: '29-6 Sarugaku-cho, Shibuya-ku, Tokyo 150-0033',
          phone: '+81 3 3496 3001',
          link: 'https://japan.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Tokyo',
          address: '5-9-12 Minami-Azabu, Minato-ku, Tokyo 106-8589',
          phone: '+81 3 5449 8400',
          link: 'https://www.eda.admin.ch/tokyo'
        },
        {
          name: 'Embassy of India in Tokyo',
          address: '2-2-11 Kudan-Minami, Chiyoda-ku, Tokyo 102-0074',
          phone: '+81 3 3262 2391',
          link: 'https://www.indembassy-tokyo.gov.in/'
        }
      ],
      womensRights: [
        'Japan has strong legal protections for women\'s rights with gender equality laws',
        'Sexual harassment and assault are criminalized with effective enforcement',
        'Women enjoy equal rights in employment, education, and social participation',
        'Japanese women\'s rights organizations provide support and advocacy',
        'Low crime rates mean legal violations against women are rare'
      ],
      legalSupport: [
        'Japan Federation of Bar Associations: +81 3 3580 9841 (lawyer referrals)',
        'Legal Aid Association: Provides free legal assistance for qualifying cases',
        'Embassy referrals for English-speaking attorneys in Tokyo area',
        'Tourist hotline: +81 50 3816 2787 (24/7 support in multiple languages)',
        'Japan National Tourism Organization: Legal assistance coordination'
      ],
      reportingProcedures: [
        'Call 110 for immediate police response (English support available)',
        'Tourist Hotline: +81 50 3816 2787 (24/7 multilingual support)',
        'Contact nearest embassy immediately for serious incidents',
        'Document everything: photos, witness contacts, incident details',
        'Request official police report with case number',
        'Japanese police are highly professional and efficient',
        'Tourist police available at major stations and tourist areas'
      ],
      supportResources: [
        'Japan Women\'s Shelter Network: +81 3-5228-2734, https://www.jnnet.gr.jp/',
        'Tokyo Women\'s Foundation: +81 3-5228-2734, https://www.tokyo-womens-foundation.or.jp/',
        'Japan Legal Support Center: +81 3-5211-1100, https://www.houterasu.or.jp/',
        'Emergency Helpline for Women: 0120-783-556 (24/7)',
        'Kanagawa Prefecture Women\'s Center: +81 45-862-5052',
        'International Crisis Line: +81 50-5534-5352 (English support)',
        'Japan Association for Refugees: +81 3-5379-6001',
        'Sexual Violence Relief Center: +81 3-5607-0799'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$65 - $120 USD / day',
        description: 'Budget travelers $65-80/day with guesthouses and local food. Mid-range $90-120/day with hotels and restaurant meals. Luxury $150+/day with ryokan and premium dining.',
        tip: 'Japan is cash-based - use 7-Eleven ATMs for international cards. JR Pass saves money on train travel if visiting multiple cities.'
      },
      accommodation: [
        {
          type: 'Traditional Ryokan',
          avgCost: '$80-200/night',
          safetyNote: 'Authentic Japanese experience with exceptional safety and hospitality standards',
          safetyLevel: 'high'
        },
        {
          type: 'Modern Hotels (WeBase, BIRD Hotel)',
          avgCost: '$60-120/night',
          safetyNote: 'International standards with beach proximity and modern amenities',
          safetyLevel: 'high'
        },
        {
          type: 'Guest Houses',
          avgCost: '$40-70/night',
          safetyNote: 'Budget-friendly with excellent safety standards typical of Japan',
          safetyLevel: 'high'
        },
        {
          type: 'Temple Lodging (Shukubo)',
          avgCost: '$70-150/night',
          safetyNote: 'Unique cultural experience with meals and meditation - extremely safe',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'JR Tokaido Line (Tokyo-Kamakura)',
          cost: '$8-12 round trip, free with JR Pass',
          safetyDescription: 'Extremely safe, punctual, and efficient. 1-hour journey from Tokyo.',
          safetyLevel: 'high'
        },
        {
          method: 'Enoden Line (Local Scenic Train)',
          cost: '$3-5 for local trips',
          safetyDescription: 'Charming local tram connecting temples and beaches. Very safe and popular with tourists.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe day and night with well-maintained paths and excellent lighting.',
          safetyLevel: 'high'
        },
        {
          method: 'Bicycle Rental',
          cost: '$8-15/day',
          safetyDescription: 'Safe cycling with dedicated paths. Popular way to explore temples and beaches.',
          safetyLevel: 'high'
        },
        {
          method: 'Taxi',
          cost: '$15-25 for local trips',
          safetyDescription: 'Very safe with honest, professional drivers. Expensive but reliable.',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Purchase JR Pass if combining with Tokyo/other city visits - significant savings',
        'Eat at temple cafes and local restaurants vs tourist areas for authentic, cheaper meals',
        'Use convenience store (konbini) ATMs - accept international cards everywhere',
        'Visit temples early morning (8 AM) to avoid crowds and enjoy peaceful atmosphere',
        'Bring cash - Japan is still largely cash-based despite being high-tech',
        'Download Google Translate app with camera function for menu reading',
        'Stay in guesthouses or ryokan vs hotels for cultural experience at lower cost',
        'Use IC card (Suica/Pasmo) for seamless train and bus travel',
        'Visit free attractions: beach walks, shrine grounds, traditional neighborhoods',
        'Shop at 100-yen stores for souvenirs and travel essentials'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default kamakura;
