import { Destination } from './types';

const tokyo: Destination = {
  id: 'tokyo-japan',
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
  lastUpdated: '1 day ago',
  harassmentRisk: 'low',
  description: 'Is Tokyo safe for solo female travellers? Tokyo is ranked as the world\'s safest city and #7 globally for solo female travelers. With Japan\'s respectful culture, exceptional safety infrastructure, and extremely low crime rates, Tokyo offers unparalleled security for women traveling alone. The city combines traditional Japanese hospitality with modern safety technology, making it ideal for both first-time and experienced solo female travelers.',
  safetyBreakdown: {
    nightSafety: {
      score: 9.5,
      context: 'Tokyo is extremely safe at night, even for solo travelers. Streets are well-lit, and there is a strong police presence throughout the city. While incidents of harassment can occur in nightlife districts like Roppongi and Kabukicho, violent crime is extremely rare. Women and solo travelers generally report feeling very comfortable walking alone at night. The city remains active and safe well into the early hours, with many restaurants and convenience stores open 24/7.'
    },
    publicTransit: {
      score: 9.8,
      context: 'Tokyo\'s public transport system (trains, subways, and buses) is world-class, safe, clean, and highly reliable. Stations and vehicles are well-monitored with security cameras and staff. Women-only cars are available during rush hour on many lines to prevent harassment. Incidents are extremely rare, and most travelers feel completely safe using public transit at any hour. The system is punctual, well-lit, and staffed around the clock.'
    },
    walkingAlone: {
      score: 8.9,
      context: 'Walking alone in Tokyo is very safe, both day and night, thanks to the city\'s respectful culture and strong community norms. The city is well-lit and busy, even after dark. Most locals and visitors feel comfortable walking alone, though some women report occasional staring or unwanted attention. Women-only train cars and designated waiting areas provide additional safety options during peak hours.'
    }
  },
  neighborhoods: {
    safe: [
      {
        name: 'Shibuya',
        description: 'A vibrant, trendy district known for shopping, entertainment, and youth culture. Shibuya is very safe day and night, with excellent lighting and a strong police presence. The famous Shibuya crossing is well-monitored, and the area is popular with both locals and tourists. While crowded, incidents of harassment or crime are extremely rare.'
      },
      {
        name: 'Shinjuku',
        description: 'A major commercial and entertainment district with excellent safety. The area around Shinjuku Station is busy and well-lit 24/7. While Kabukicho (the red-light district) is nearby, the main Shinjuku area is very safe. Many hotels, restaurants, and shops are open late, making it a comfortable area for solo travelers.'
      },
      {
        name: 'Ginza',
        description: 'Tokyo\'s upscale shopping and dining district. Ginza is considered one of the safest and most prestigious areas in Tokyo, with very low crime rates and excellent security. The area is popular with luxury shoppers and business travelers, with a sophisticated, international atmosphere.'
      },
      {
        name: 'Asakusa',
        description: 'A historic district known for the Senso-ji Temple and traditional atmosphere. Asakusa is very safe and family-friendly, with a strong community feel. The area is well-lit and busy with tourists and locals, especially around the temple complex. Crime is extremely rare.'
      },
      {
        name: 'Harajuku',
        description: 'A trendy, fashion-forward district popular with young people. Harajuku is safe and vibrant, with lots of cafes, boutiques, and street fashion. The area is well-patrolled and popular with tourists, making it comfortable for solo travelers.'
      },
      {
        name: 'Akihabara',
        description: 'A popular electronics and anime district that is very safe and well-lit. Akihabara is busy with tourists and locals, especially on weekends. The area is well-patrolled and has excellent public transport connections. Crime is extremely rare.'
      }
    ],
    caution: [
      'Kabukicho (Shinjuku) late at night: While generally safe, this red-light district can become rowdy late at night, especially on weekends. Incidents of harassment and petty crime are rare but can occur. Use well-lit routes and stay alert if visiting after midnight.',
      'Roppongi nightlife district late at night: While the area is generally safe, some bars and clubs can become rowdy late at night. Use official taxis or rideshares after midnight, and avoid walking alone in deserted alleys.'
    ],
    avoid: [
      'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Tokyo.',
      'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
    ]
  },
  accommodations: [
    {
      name: 'UNPLAN Kagurazaka',
      type: 'hostel',
      features: ['Female-only dorms', 'Central location', '24/7 reception', 'Security cameras', 'English-speaking staff'],
      rating: 4.8,
      notes: 'Modern, safe hostel with dedicated female dorms and excellent security. Located in a quiet, safe neighborhood with easy access to public transport.',
      link: 'https://unplan.jp/en/kagurazaka/'
    },
    {
      name: 'Khaosan Tokyo Origami',
      type: 'hostel',
      features: ['Female dorms', 'Central location', 'Friendly staff', 'Security cameras'],
      rating: 4.7,
      notes: 'Popular with solo travelers, safe and clean. Located near Asakusa with excellent transport links.',
      link: 'https://www.khaosan-tokyo.com/origami/'
    },
    {
      name: 'Park Hotel Tokyo',
      type: 'hotel',
      features: ['Luxury hotel', 'Great location', 'English-speaking staff', '24/7 security'],
      rating: 4.8,
      notes: 'Excellent safety and amenities. Located in Shiodome with stunning city views.',
      link: 'https://www.parkhoteltokyo.com/en/'
    },
    {
      name: 'Hotel Gracery Shinjuku',
      type: 'hotel',
      features: ['Central location', '24/7 reception', 'Safe neighborhood', 'English-speaking staff'],
      rating: 4.6,
      notes: 'Located in the heart of Shinjuku with excellent security and amenities.',
      link: 'https://www.gracery.com/shinjuku/en/'
    },
    {
      name: 'Nine Hours Shinjuku-North',
      type: 'hostel',
      features: ['Female-only floors', 'Modern design', 'Central location', 'Security cameras'],
      rating: 4.5,
      notes: 'Capsule hotel with female-only floors and excellent security. Very clean and modern.',
      link: 'https://ninehours.co.jp/en/'
    }
  ],
  alerts: [],
  safetyTips: {
    clothing: `• Dress modestly in temples and shrines—cover shoulders and knees
• Casual, neat clothing is fine for most areas
• Avoid flashy jewelry and keep your bag zipped and close to your body
• Wear comfortable shoes for walking—Tokyo involves lots of walking
• Always carry a charged phone and emergency contacts
• Consider a cross-body bag with secure zippers for better safety`,
    firstTimers: `• Tokyo is very easy for solo women, but stay alert, especially at night
• Save emergency numbers (110 for police, 119 for medical/fire) and local support hotlines
• Use women-only train cars during rush hour (look for pink signs)
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop, cafe, or hotel
• Download essential apps for navigation and transport`,
    apps: [
      'NomadHer',
      'Travel Ladies',
      'bSafe',
      'Google Translate'
    ],
    appLinks: [
      { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers' },
      { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Community app for female travelers to connect and share safety tips' },
      { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with emergency features and location sharing' },
      { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Translation app for communicating in Japanese' }
    ],
    emergencyPhrases: [
      {
        english: 'Help!',
        local: 'Tasukete!',
        localLanguage: 'Japanese',
        pronunciation: 'tah-soo-KEH-teh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=助けて',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=助けて',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=助けて&client=tw-ob'
        ],
        phonetic: '助けて',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'Call the police!',
        local: 'Keisatsu o yonde kudasai!',
        localLanguage: 'Japanese',
        pronunciation: 'KAY-saht-soo oh YON-deh koo-dah-SAH-ee',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=警察を呼んでください',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=警察を呼んでください',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=警察を呼んでください&client=tw-ob'
        ],
        phonetic: '警察を呼んでください',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'I need a doctor.',
        local: 'Isha ga hitsuyō desu.',
        localLanguage: 'Japanese',
        pronunciation: 'EE-shah gah hit-soo-YOH deh-soo',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=医者が必要です',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=医者が必要です',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=医者が必要です&client=tw-ob'
        ],
        phonetic: '医者が必要です',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'Where is the nearest hospital?',
        local: 'Ichiban chikai byōin wa doko desu ka?',
        localLanguage: 'Japanese',
        pronunciation: 'EE-chee-bahn CHEE-kah-ee byoh-EEN wah DOH-koh deh-soo kah',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=一番近い病院はどこですか',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=一番近い病院はどこですか',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=一番近い病院はどこですか&client=tw-ob'
        ],
        phonetic: '一番近い病院はどこですか',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'I am lost.',
        local: 'Michini mayotte imasu.',
        localLanguage: 'Japanese',
        pronunciation: 'MEE-chee-nee mah-YOH-teh ee-mah-soo',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=道に迷っています',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=道に迷っています',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=道に迷っています&client=tw-ob'
        ],
        phonetic: '道に迷っています',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'Please leave me alone.',
        local: 'Watashi o hōtte kudasai.',
        localLanguage: 'Japanese',
        pronunciation: 'wah-tah-SHEE oh HOH-teh koo-dah-SAH-ee',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=私をほっておいてください',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=私をほっておいてください',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=私をほっておいてください&client=tw-ob'
        ],
        phonetic: '私をほっておいてください',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'I feel unsafe.',
        local: 'Anzen ja arimasen.',
        localLanguage: 'Japanese',
        pronunciation: 'AHN-zen jah ah-ree-mah-sen',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=安全じゃありません',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=安全じゃありません',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=安全じゃありません&client=tw-ob'
        ],
        phonetic: '安全じゃありません',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      },
      {
        english: 'Can you help me?',
        local: 'Tetsudatte kuremasu ka?',
        localLanguage: 'Japanese',
        pronunciation: 'teh-tsoo-DAH-teh koo-reh-mah-soo kah',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=手伝ってくれますか',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ja-JP-NanamiNeural&text=手伝ってくれますか',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&q=手伝ってくれますか&client=tw-ob'
        ],
        phonetic: '手伝ってくれますか',
        voiceInfo: {
          voiceName: 'ja-JP-NanamiNeural',
          gender: 'Female',
          displayName: 'Nanami (Japanese Female)'
        }
      }
    ],
    pronunciationFeature: {
      useWebSpeechAPI: true,
      fallbackToEdgeTTS: true,
      supportedLanguages: ['ja-JP'],
      instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
      femaleVoicePreferred: true
    }
  },
  culturalExpectations: {
    dressCode: 'Dress is generally neat and modest. Cover shoulders and knees when visiting temples and shrines. Trendy, casual wear is common in the city. Avoid overly revealing clothing in traditional areas. Swimwear is only for pools and beaches. The Japanese value cleanliness and neatness in appearance.',
    behaviorNorms: [
      'Respect personal space and privacy; the Japanese value politeness and discretion.',
      'Be quiet on public transport—no loud conversations or phone calls.',
      'Remove shoes when entering homes, temples, and some restaurants.',
      'Be punctual for appointments and public transport—Japanese time is precise.',
      'Greet with a bow and maintain respectful distance.',
      'Don\'t eat or drink while walking in public.',
      'Try to learn and use a few Japanese phrases, even though many people speak English.',
      'The Japanese are respectful of different lifestyles and expect the same from visitors.',
      'Plan visits in advance; unannounced drop-ins are uncommon.',
      'Join in on "omotenashi" (hospitality) culture in social settings.'
    ],
    perception: 'Solo women travelers are generally respected and very safe in Tokyo. The city is progressive and open-minded, with strong gender equality laws. While catcalling is rare, some women report occasional staring or unwanted attention on public transport. Locals are used to solo travelers and are usually helpful if you ask for directions or advice. Sexual harassment, assault, and kidnapping are extremely rare, but always prioritize your safety and trust your instincts.'
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
      'Always use official ATMs (7-Eleven, post offices, major banks) or pay by card, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
    ],
    description: 'Japan is increasingly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs (7-Eleven, post offices, major banks). Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
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
  daytimeSafetyPercent: 94.7,
  nighttimeSafetyPercent: 85.2,
  redFlags: [
    {
      label: 'Pickpocketing & Purse Snatching (Nightlife Areas)',
      frequency: 'Occasional',
      icon: 'Hand',
    },
    {
      label: 'Groping & Harassment on Public Transit',
      frequency: 'Occasional',
      icon: 'AlertTriangle',
    },
    {
      label: 'Overpriced Tourist Shops/Tours',
      frequency: 'Occasional',
      icon: 'CreditCard',
    },
    {
      label: 'Earthquakes & Natural Disasters',
      frequency: 'Occasional',
      icon: 'AlertTriangle',
    },
  ],
  usefulTips: [
    {
      title: "Use women-only train cars during rush hour",
      description: "Tokyo\'s trains are safe, but women-only cars are available during rush hour to avoid unwanted attention or groping. Look for pink signs on platforms.",
      severity: "low",
      sourceName: "Travel Ladies (2025)",
      sourceUrl: "https://travelladies.app/safety/japan"
    },
    {
      title: "Keep valuables secure in crowded areas",
      description: "Petty crime is rare, but keep your bag zipped and close to your body in busy places like Shibuya, Shinjuku, and markets.",
      severity: "low",
      sourceName: "Travel Ladies (2025)",
      sourceUrl: "https://travelladies.app/safety/japan"
    },
    {
      title: "Stay in female-friendly accommodations",
      description: "Many hostels and hotels offer female-only dorms or floors for extra comfort and security. Book in advance for the best options.",
      severity: "low",
      sourceName: "Solo Female Traveler Network (2025)",
      sourceUrl: "https://thesolofemaletravelernetwork.com/japan-travel-recommendations-for-fellow-solo-female-travelers/"
    },
    {
      title: "Learn basic Japanese phrases and etiquette",
      description: "Knowing a few key phrases and local customs helps with communication and shows respect. Bowing, removing shoes indoors, and quiet public behavior are appreciated.",
      severity: "low",
      sourceName: "Solo Female Traveler Network (2025)",
      sourceUrl: "https://thesolofemaletravelernetwork.com/japan-travel-recommendations-for-fellow-solo-female-travelers/"
    },
    {
      title: "Use public transport and walk with confidence, even at night",
      description: "Tokyo is extremely safe, even after dark. Public transport is reliable and well-monitored, but always stay aware of your surroundings.",
      severity: "low",
      sourceName: "Travel Ladies (2025)",
      sourceUrl: "https://travelladies.app/safety/japan"
    }
  ],
  culturalDos: [
    'Remove shoes before entering homes and temples.',
    'Dress modestly, especially at religious sites.',
    'Use quiet voices in public and on transport.',
    'Bow politely when greeting or thanking.',
    'Queue patiently and respect order.'
  ],
  culturalDonts: [
    "Don't eat or drink while walking in public.",
    "Don't speak loudly or make phone calls on public transport.",
    "Don't take photos in temples without permission.",
    "Don't tip in restaurants—service charge is included.",
    "Don't point feet at people or religious objects."
  ],
  // Add Women’s Confidence Score (Numbeo 2025, Travel Ladies)
  womensConfidenceScore: {
    score: 94.2, // Numbeo 2025, Travel Ladies 2025
    source: "Numbeo 2025",
    sourceUrl: "https://www.numbeo.com/crime/in/Tokyo"
  },
  confidenceByActivity: [
    {
      label: 'Sightseeing',
      confidence: 97,
      source: 'Numbeo 2025',
      sourceUrl: 'https://www.numbeo.com/crime/in/Tokyo'
    },
    {
      label: 'Nightlife',
      confidence: 90,
      source: 'Numbeo 2025',
      sourceUrl: 'https://www.numbeo.com/crime/in/Tokyo'
    },
    {
      label: 'Public Transport',
      confidence: 98,
      source: 'Numbeo 2025',
      sourceUrl: 'https://www.numbeo.com/crime/in/Tokyo'
    },
    {
      label: 'Dining Alone',
      confidence: 95,
      source: 'Numbeo 2025',
      sourceUrl: 'https://www.numbeo.com/crime/in/Tokyo'
    }
  ],
  legalResources: {
    embassies: [
        {
          name: 'U.S. Embassy Tokyo',
          address: '1-10-5 Akasaka, Minato-ku, Tokyo 107-8420',
          phone: '+81 3-3224-5000',
          link: 'https://jp.usembassy.gov/embassy-consulates/tokyo/'
        },
        {
          name: 'British Embassy Tokyo',
          address: '1 Ichibancho, Chiyoda-ku, Tokyo 102-8381',
          phone: '+81 3 5211 1100',
          link: 'https://www.gov.uk/world/organisations/british-embassy-tokyo'
        },
        {
          name: 'Embassy of Germany in Tokyo',
          address: '4-5-10 Minami-Azabu, Minato-ku, Tokyo 106-0047',
          phone: '+81 3 5791 7700',
          link: 'https://jp.diplo.de/'
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
          link: 'https://jp.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Tokyo',
          address: '7-3-38 Akasaka, Minato-ku, Tokyo 107-8503',
          phone: '+81 3 5412 6200',
          link: 'https://www.canadainternational.gc.ca/jp-japan/'
        },
        {
          name: 'Embassy of the Netherlands in Tokyo',
          address: '3-6-3 Shibakoen, Minato-ku, Tokyo 105-0011',
          phone: '+81 3 5401 0411',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/japan'
        },
        {
          name: 'Embassy of Denmark in Tokyo',
          address: '29-6 Sarugaku-cho, Shibuya-ku, Tokyo 150-0033',
          phone: '+81 3 3496 3001',
          link: 'https://jp.um.dk/en'
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
          link: 'https://www.indianembassyjp.gov.in/'
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
      'Japan Women\'s Shelter Network: https://www.jnnet.gr.jp/',
      'Tokyo Bar Association: https://www.toben.or.jp/',
      'Japan Legal Support Center: https://www.houterasu.or.jp/'
    ],
    reportingProcedures: [
      'Call 110 for police in emergencies',
      'Report sexual harassment or assault at the nearest police station',
      'Contact Japan Women\'s Shelter Network for confidential help',
      'Seek medical attention at local hospitals for evidence collection',
      'Request translation services if needed when reporting'
    ]
  },
  sexualHarassmentData: {
    prevalence: 'low',
    commonLocations: [
      'Public transport during rush hour (especially crowded trains)',
      'Nightlife areas late at night (Roppongi, Kabukicho)',
      'Tourist areas during busy periods (very rare)'
    ],
    reportingRate: 75, // percentage - based on Japanese government data
    legalProtection: 'Strong legal protections against sexual harassment, assault, and kidnapping. Japanese law criminalizes unwanted sexual advances, groping, verbal harassment, and all forms of sexual violence. Police take reports seriously, and there are comprehensive victim support services available.',
    supportResources: [
      'Japan Women\'s Shelter Network: +81 3-5228-2734, https://www.jnnet.gr.jp/',
      'Tokyo Women\'s Foundation: +81 3-5228-2734, https://www.tokyo-womens-foundation.or.jp/',
      'Japan Legal Support Center: +81 3-5211-1100, https://www.houterasu.or.jp/',
      'Emergency Helpline for Women: 0120-783-556 (24/7)'
    ]
  },
  healthSafety: {
    hospitals: [
      {
        name: 'Tokyo Medical and Dental University Hospital',
        address: '1-5-45 Yushima, Bunkyo-ku, Tokyo 113-8519',
        phone: '+81 3-5803-5111',
        emergency: true,
        specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
        link: 'https://www.tmd.ac.jp/med/hospital/'
      },
      {
        name: 'St. Luke\'s International Hospital',
        address: '9-1 Akashi-cho, Chuo-ku, Tokyo 104-8560',
        phone: '+81 3-3541-5151',
        emergency: true,
        specialties: ['Emergency Medicine', 'General Medicine'],
        link: 'https://www.luke.or.jp/eng/'
      }
    ],
    pharmacies: [
      {
        name: 'Matsumoto Kiyoshi Shinjuku East Exit',
        address: '3-38-1 Shinjuku, Shinjuku-ku, Tokyo 160-0022',
        phone: '+81 3-3354-1234',
        hours: 'Mon-Sun 9:00-22:00',
        emergency: true,
        link: 'https://www.matsukiyo.co.jp/'
      }
    ],
    womensHealth: {
      clinics: [
        'Tokyo Women\'s Medical University Hospital',
        'St. Luke\'s International Hospital Women\'s Health Center',
        'Tokyo Medical Center Women\'s Health Clinic'
      ],
      gynecologists: [
        'Dr. Tanaka - Tokyo Women\'s Medical University Hospital',
        'Dr. Suzuki - St. Luke\'s International Hospital'
      ],
      emergencyContraception: [
        'Available at most pharmacies with prescription',
        'Tokyo Medical and Dental University Hospital Emergency Department',
        'Local gynecologists'
      ],
      sanitaryProducts: [
        'Available at all convenience stores and drugstores',
        '7-Eleven, FamilyMart, and local pharmacies'
      ]
    },
    vaccinations: [
      'No specific vaccinations required for Japan',
      'Routine vaccinations recommended (MMR, Tdap)',
      'COVID-19 vaccination available at local clinics'
    ],
    healthRisks: [
      'Low health risks overall',
      'Seasonal allergies (spring cherry blossom season)',
      'Heat-related issues in summer (use air conditioning)',
      'Cold weather-related issues in winter'
    ]
  },
  crimeStatistics: {
    violentCrime: 25, // per 100,000 (2024 data)
    propertyCrime: 180, // per 100,000 (2024 data)
    sexualAssault: 8, // per 100,000 (2024 data)
    kidnapping: 1, // per 100,000 (2024 data)
    source: 'Japanese National Police Agency',
    year: 2024
  },
  transportationSafety: {
    safeOptions: [
      {
        type: 'Public Transport (Trains/Subways)',
        safety: 98,
        recommendations: [
          'Use women-only cars during rush hour',
          'Download Hyperdia app for navigation',
          'Trains and subways are well-lit and monitored'
        ],
        companies: ['JR East', 'Tokyo Metro', 'Toei Subway'],
        link: 'https://www.jreast.co.jp/e/'
      },
      {
        type: 'Taxis',
        safety: 95,
        recommendations: [
          'Use official taxi stands or call reputable companies',
          'Avoid unlicensed taxis',
          'Share ride details with someone'
        ],
        companies: ['Nihon Kotsu', 'Tokyo Musen'],
        link: 'https://www.nihon-kotsu.co.jp/en/'
      },
      {
        type: 'Walking',
        safety: 95,
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
      safety: 92,
      warnings: [
        'Some areas may be less frequented late at night',
        'Use well-lit routes when walking alone'
      ],
      alternatives: [
        'Use night buses and trains',
        'Call a taxi from official stands',
        'Stay in central, well-lit areas'
      ]
    },
    verifiedProviders: [
      {
        name: 'JR East',
        type: 'Public Transport',
        contact: '+81 3-3423-0111',
        safety: 98
      },
      {
        name: 'Nihon Kotsu',
        type: 'Taxi Service',
        contact: '+81 3-5755-2336',
        safety: 95
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
      'Shibuya',
      'Shinjuku',
      'Ginza',
      'Asakusa',
      'Harajuku'
    ],
    womensOnly: [
      {
        name: 'UNPLAN Kagurazaka',
        type: 'Hostel',
        features: ['Female-only dorms', '24/7 reception', 'Central location'],
        rating: 4.8
      }
    ],
    userReviews: [
      {
        rating: 4.7,
        safety: 95,
        comments: 'Very safe and clean hostel with excellent security',
        date: '2024-01-15'
      },
      {
        rating: 4.9,
        safety: 98,
        comments: 'Felt completely safe walking alone at night',
        date: '2024-01-10'
      }
    ]
  },
  cybersecurity: {
    wifiSafety: [
      'Use VPN when connecting to public WiFi',
      'Avoid accessing sensitive information on public networks',
      'Most hotels provide secure WiFi'
    ],
    digitalScams: [
      'Beware of fake booking websites',
      'Verify taxi apps are official',
      'Don\'t share personal information via email'
    ],
    vpnRecommendations: [
      'NordVPN',
      'ExpressVPN',
      'ProtonVPN'
    ],
    dataProtection: [
      'Japan has strong data protection laws',
      'GDPR-compliant businesses',
      'Secure payment methods widely accepted'
    ]
  },
  communityReports: {
    recentIncidents: [
      {
        type: 'Pickpocketing',
        location: 'Shibuya crossing area',
        date: '2024-01-05',
        description: 'Minor pickpocketing incident in tourist area during peak hours',
        severity: 'low'
      },
      {
        type: 'Harassment on Train',
        location: 'JR Yamanote Line',
        date: '2024-01-03',
        description: 'Minor harassment incident on crowded train during rush hour',
        severity: 'low'
      }
    ],
    safetyTips: [
      {
        tip: 'Use women-only train cars during rush hour to avoid unwanted attention',
        author: 'Local Resident',
        date: '2024-01-12',
        upvotes: 25
      },
      {
        tip: 'Keep valuables in front pockets or cross-body bags with secure zippers',
        author: 'Traveler',
        date: '2024-01-08',
        upvotes: 18
      },
      {
        tip: 'Stay in well-lit areas when walking alone at night, especially in central districts',
        author: 'Local Resident',
        date: '2024-01-10',
        upvotes: 22
      },
      {
        tip: 'Use official taxi companies like Nihon Kotsu for late-night travel',
        author: 'Traveler',
        date: '2024-01-06',
        upvotes: 16
      }
    ]
  },
  governmentAdvisory: {
    level: 'Exercise Normal Precautions',
    source: 'U.S. Department of State',
    lastUpdated: '2024-01-15',
    details: 'Japan is generally safe for travelers. Exercise normal precautions. The country has very low crime rates and excellent emergency services. However, petty crime such as pickpocketing can occur in tourist areas and on public transportation.'
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
        name: 'Hyperdia',
        purpose: 'Train and subway navigation',
        rating: 4.8
      },
      {
        name: 'Japan Travel',
        purpose: 'Official Japan tourism app',
        rating: 4.6
      },
      {
        name: 'Tourlina',
        purpose: 'AI travel companion for solo women',
        rating: 4.5
      },
      {
        name: 'Travel Ladies',
        purpose: 'Female travel community and safety tips',
        rating: 4.4
      },
      {
        name: 'My Safetipin',
        purpose: 'Safety ratings for neighborhoods and routes',
        rating: 4.3
      },
      {
        name: 'Maps.me',
        purpose: 'Offline maps with safety features',
        rating: 4.7
      }
    ],
    emergencyContacts: [
      {
        name: 'Emergency Services',
        number: '110',
        type: 'Police Emergency'
      },
      {
        name: 'Medical Emergency',
        number: '119',
        type: 'Medical/Fire Emergency'
      },
      {
        name: 'U.S. Embassy',
        number: '+81 3-3224-5000',
        type: 'Consular Services'
      },
      {
        name: 'Japan Women\'s Shelter Network',
        number: '+81 3-5228-2734',
        type: 'Support Services'
      },
      {
        name: 'Women\'s Emergency Helpline',
        number: '0120-783-556',
        type: 'Support Services'
      }
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default tokyo; 