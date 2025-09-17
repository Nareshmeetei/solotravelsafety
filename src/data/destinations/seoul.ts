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
  description: 'Is Seoul safe for solo female travelers? South Korea\'s dynamic capital is one of the world\'s safest cities for women traveling alone. Seoul combines cutting-edge technology, rich culture, and exceptional safety infrastructure, making it an ideal destination for solo female travelers seeking both adventure and security.',
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
      'KakaoTaxi',
      'Naver Map',
      'Seoul Subway',
      'Papago',
      'Emergency Ready App',
      'Trazy',
      'NomadHer',
      'KakaoTalk'
    ],
    appLinks: [
      { name: 'KakaoTaxi', link: 'https://www.kakaocorp.com/service/KakaoTaxi', description: 'Korea\'s most popular ride-hailing app with GPS tracking and driver verification for solo female safety', rating: 4.6 },
      { name: 'Naver Map', link: 'https://map.naver.com/', description: 'Essential navigation app for Seoul - better than Google Maps in Korea with real-time transit info', rating: 4.8 },
      { name: 'Seoul Subway', link: 'http://www.seoulmetro.co.kr/en/', description: 'Official Seoul Metro app designed for tourists with route maps and women-only car information', rating: 4.7 },
      { name: 'Papago', link: 'https://papago.naver.com/', description: 'Korea\'s #1 translation app - better than Google Translate for Korean language and slang', rating: 4.8 },
      { name: 'Emergency Ready App', link: 'https://www.safekorea.go.kr/', description: 'Government emergency alerts app with English support for disasters and safety warnings', rating: 4.5 },
      { name: 'Trazy', link: 'https://www.trazy.com/', description: 'K-pop concert tickets and cultural experiences - perfect for solo K-pop fans visiting Seoul', rating: 4.7 },
      { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting verified women travelers safely in Seoul', rating: 4.8 },
      { name: 'KakaoTalk', link: 'https://www.kakaocorp.com/service/KakaoTalk', description: 'Essential messaging app used by everyone in Korea - needed for bookings and local communication', rating: 5.0 }
    ],
    emergencyPhrases: [
      {
        english: 'Help!',
        local: 'Do-wa-ju-se-yo!',
        localLanguage: 'Korean',
        pronunciation: 'doh-wah-joo-say-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=도와주세요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=도와주세요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=도와주세요&client=tw-ob'
        ],
        phonetic: 'Do-wa-ju-se-yo!',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'Call the police!',
        local: 'Gyeong-chal-eul bul-leo-ju-se-yo!',
        localLanguage: 'Korean',
        pronunciation: 'gyuhng-chahl-eul bool-luh-joo-say-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=경찰을%20불러주세요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=경찰을%20불러주세요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=경찰을%20불러주세요&client=tw-ob'
        ],
        phonetic: 'Gyeong-chal-eul bul-leo-ju-se-yo!',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'I need a doctor.',
        local: 'Ui-sa-ga pil-yo-hae-yo.',
        localLanguage: 'Korean',
        pronunciation: 'ee-sah-gah peel-yoh-hay-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=의사가%20필요해요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=의사가%20필요해요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=의사가%20필요해요&client=tw-ob'
        ],
        phonetic: 'Ui-sa-ga pil-yo-hae-yo.',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'Where is the nearest hospital?',
        local: 'Ga-jang ga-gga-un byeong-won-i eo-di-ye-yo?',
        localLanguage: 'Korean',
        pronunciation: 'gah-jahng gah-ggah-oon byuhng-wahn-ee uh-dee-yeh-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=가장%20가까운%20병원이%20어디예요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=가장%20가까운%20병원이%20어디예요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=가장%20가까운%20병원이%20어디예요&client=tw-ob'
        ],
        phonetic: 'Ga-jang ga-gga-un byeong-won-i eo-di-ye-yo?',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'I am lost.',
        local: 'Gil-eul il-eo-sseo-yo.',
        localLanguage: 'Korean',
        pronunciation: 'geel-eul eel-uh-ssuh-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=길을%20잃었어요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=길을%20잃었어요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=길을%20잃었어요&client=tw-ob'
        ],
        phonetic: 'Gil-eul il-eo-sseo-yo.',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'Please leave me alone.',
        local: 'Hon-ja it-ge hae-ju-se-yo.',
        localLanguage: 'Korean',
        pronunciation: 'hohn-jah eet-geh hay-joo-say-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=혼자%20있게%20해주세요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=혼자%20있게%20해주세요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=혼자%20있게%20해주세요&client=tw-ob'
        ],
        phonetic: 'Hon-ja it-ge hae-ju-se-yo.',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'I feel unsafe.',
        local: 'An-jeon-ha-ji an-ta-go neu-ggyeo-yo.',
        localLanguage: 'Korean',
        pronunciation: 'ahn-juhn-hah-jee ahn-tah-goh neu-gyuh-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=안전하지%20않다고%20느껴요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=안전하지%20않다고%20느껴요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=안전하지%20않다고%20느껴요&client=tw-ob'
        ],
        phonetic: 'An-jeon-ha-ji an-ta-go neu-ggyeo-yo.',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      },
      {
        english: 'Can you help me?',
        local: 'Do-wa-ju-sil su it-na-yo?',
        localLanguage: 'Korean',
        pronunciation: 'doh-wah-joo-sheel soo eet-nah-yoh',
        audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=도와주실%20수%20있나요',
        fallbackUrls: [
          'https://api.streamelements.com/kappa/v2/speech?voice=ko-KR-SunHiNeural&text=도와주실%20수%20있나요',
          'https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=도와주실%20수%20있나요&client=tw-ob'
        ],
        phonetic: 'Do-wa-ju-sil su it-na-yo?',
        voiceInfo: {
          voiceName: 'ko-KR-SunHiNeural',
          gender: 'Female',
          displayName: 'SunHi (Korean Female)'
        }
      }
    ]
  },
  culturalExpectations: {
    dressCode: [
      'Seoul requires fashion-conscious dress culture with high style standards - clean, neat, and well-coordinated clothing essential for blending in',
      'Korean beauty and fashion standards are elevated - investing in stylish outfits helps solo women feel confident and socially accepted',
      'Modest dress absolutely required for visiting Gyeongbokgung Palace, Jogyesa Temple, and other cultural sites - cover shoulders and knees completely',
      'Business casual appropriate for upscale restaurants in Gangnam, Hongdae, and luxury shopping districts like Myeongdong',
      'Comfortable yet stylish walking shoes crucial for Seoul\'s extensive subway system with many stairs and hilly terrain throughout the city',
      'Layer clothing for Seoul\'s variable climate and heavily air-conditioned indoor spaces - temperature differences can be significant'
    ],
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
    perception: [
      'Solo female travelers are increasingly welcomed in Seoul as Korean society modernizes and embraces independent women travelers',
      'Korean culture deeply values safety (anbwon) and helping others, making locals naturally protective and helpful toward solo female visitors',
      'Confucian respect traditions create generally respectful interactions, with Korean men typically maintaining appropriate boundaries with foreign women',
      'Some curious staring may occur, especially in non-tourist neighborhoods, but this stems from interest rather than judgment or hostility',
      'Restaurant culture accommodates solo diners well, particularly in casual settings like Korean BBQ, ramen shops, and convenience stores',
      'Seoul\'s strong social norms and collective responsibility mindset contribute significantly to overall safety and security for women',
      'Local women often provide helpful advice about navigation, cultural etiquette, and safety tips - Korean hospitality extends to protecting visitors'
    ]
  },
  culturalSensitivityTipsDetails: [
    'Learn basic Korean greetings like "Annyeonghaseyo" (hello) and "Gamsahamnida" (thank you) - locals deeply appreciate language effort from solo female travelers',
    'Master the Korean age hierarchy system - always address older people formally until invited otherwise, crucial for respectful interactions',
    'Understand Confucian respect culture - bowing depth indicates respect level, essential for temple visits and elder interactions',
    'Respect Korean dining etiquette - wait for eldest to start eating, pour drinks for others, never pour your own drink',
    'Be aware of Korean beauty standards - Seoul is fashion-conscious, dressing well helps solo women feel confident and blend in',
    'Understand Korean work culture - many locals work late, so evening social activities are common and safe for solo travelers',
    'Respect Korean personal space - avoid unnecessary physical contact, keep conversations quiet on public transport',
    'Learn about Korean gift-giving culture - always receive gifts with both hands and show appreciation',
    'Understand Korean drinking culture - it\'s social bonding, politely participate even if you don\'t drink alcohol',
    'Be mindful of Korean technology etiquette - many activities require apps like KakaoTalk, embrace digital integration'
  ],
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
    exchangeTips: [
      'ATMs widely available throughout Seoul - use bank ATMs (KB, Shinhan, Woori) for best exchange rates and avoid airport exchanges which charge 3-5% more'
    ],
    scamWarnings: []
  },
  scamWarnings: [
    {
      title: 'Fake Monk Scam',
      description: 'Fake monks may approach tourists asking for donations. Real Buddhist monks do not actively solicit money from strangers.',
      severity: 'low'
    },
    {
      title: 'Overpriced Tourist Restaurants',
      description: 'Some restaurants in tourist areas like Myeongdong may have inflated prices. Check prices beforehand and look for local recommendations.',
      severity: 'low'
    },
    {
      title: 'Street Game Scams',
      description: 'Avoid street games or gambling setups, especially around nightlife areas. These are often rigged to take your money.',
      severity: 'medium'
    },
    {
      title: 'Taxi Overcharging',
      description: 'Some taxi drivers may take longer routes or refuse to use the meter. Use apps like Kakao Taxi for transparent pricing.',
      severity: 'low'
    }
  ],
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
    },
    {
      title: 'Currency & Exchange Tips',
      description: 'ATMs widely available throughout Seoul - use bank ATMs (KB, Shinhan, Woori) for best exchange rates and avoid airport exchanges which charge 3-5% more',
      severity: 'low',
      sourceName: 'Korea Tourism Organization',
      sourceUrl: 'https://english.visitkorea.or.kr/'
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
      details: 'Rare pickpocketing incidents in very crowded areas like Myeongdong shopping district and traditional markets during peak hours.',
      prevention: 'Keep valuables in front pockets, use money belts, stay alert in crowds, secure bags with zippers facing inward'
    },
    {
      label: 'Drink Spiking in Nightlife Districts',
      frequency: 'Rare',
      icon: 'Beer',
      details: 'Very rare incidents of drink spiking reported in nightlife areas like Hongdae and Gangnam, particularly targeting solo female travelers.',
      prevention: 'Never leave drinks unattended, don\'t accept drinks from strangers, stay with trusted friends, use drink covers'
    },
    {
      label: 'Taxi Overcharging (Late Night)',
      frequency: 'Occasional',
      icon: 'Car',
      details: 'Some taxi drivers may overcharge foreign tourists, especially late at night or from airport, by taking longer routes or claiming meter is broken.',
      prevention: 'Use rideshare apps like KakaoTaxi, ensure meter is running, know approximate fare beforehand, learn key destination names in Korean'
    },
    {
      label: 'Heatwaves & Air Quality (Summer)',
      frequency: 'Occasional',
      icon: 'AlertTriangle',
    },
  ],
  culturalSensitivity: {
    culturalDos: [
      'Master the Korean bow - slight nod for peers, deeper bow for elders, 90-degree bow for formal situations like temples',
      'Dress impeccably and fashionably - Seoul is Asia\'s fashion capital, appearance directly impacts how you\'re treated and perceived',
      'Use both hands religiously when giving/receiving anything - business cards, money, gifts, even casual items show respect',
      'Learn age hierarchy respect - address older people formally until invited otherwise, crucial for solo female safety and acceptance',
      'Remove shoes properly in homes, traditional restaurants, and some guesthouses - look for shoe racks at entrances'
    ],
    culturalDonts: [
      "Don't refuse Korean hospitality abruptly - always try offered food/drink politely, refusal can be seen as disrespectful",
      "Don't write anyone's name in red ink - associated with death in Korean culture, extremely offensive mistake",
      "Don't tip in restaurants or taxis - not customary and can cause confusion or embarrassment for service workers",
      "Don't blow your nose in public - extremely rude, excuse yourself to bathroom or turn away discreetly",
      "Don't touch Korean people casually - physical contact limited to handshakes and bows, personal space is highly valued"
    ],
    culturalSensitivityTips: [
      'South Korea is a Confucian society where age hierarchy, respect for elders, and proper etiquette are fundamental to social interactions.',
      'Korean language has complex honorific systems - learning basic polite phrases like "annyeonghaseyo" and "gamsahamnida" shows cultural respect.',
      'Bowing is the traditional greeting - a slight bow (15 degrees) is appropriate for most situations as a solo female traveler.',
      'Korean work culture emphasizes dedication and long hours - understanding this helps appreciate why evening social life starts very late.',
      'Family honor and reputation are extremely important - showing respect for family values creates positive connections with locals.',
      'Korean hospitality (jeong) involves deep emotional connections - accepting kindness graciously builds trust and community support.',
      'Educational achievement is highly valued - showing respect for knowledge and learning demonstrates cultural understanding.',
      'Group harmony (nunchi) means reading social situations carefully - being aware of group dynamics helps navigate social settings safely.',
      'Buddhist and Confucian traditions influence daily life - showing respect for temples, meditation practices, and philosophical discussions is appreciated.',
      'Korean beauty and fashion culture is significant - dressing well and maintaining good appearance shows respect for social norms and personal safety.'
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
        },
        {
          type: 'AREX Airport Express',
          safety: 9.5,
          recommendations: ['Direct connection to Incheon Airport', 'Most convenient airport option', 'Every 30 minutes'],
          companies: ['AREX'],
          link: 'https://www.arex.or.kr/eng/'
        },
        {
          type: 'Seoul Bike (Ddareungi)',
          safety: 8.2,
          recommendations: ['24-hour bike sharing system', '2,000+ stations city-wide', 'Use during daytime for safety'],
          companies: ['Seoul Metropolitan Government'],
          link: 'https://www.bikeseoul.com/'
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
        'Seoul is safe for female solo travelers - excellent choice for first-time women traveling alone in Asia',
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
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level for women traveling alone in Seoul.',
        tip: 'Seoul offers excellent value with high safety standards for solo female travelers. Mid-range budget provides premium safety and comfort.'
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
    },
  youtubeVideo: {
    videoId: "yNVhlO88_LY"
  }
};

export default seoul; 