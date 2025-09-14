import { Destination } from './types';

// Enhanced Safety Data for Istanbul - January 2025 Update
const istanbul: Destination = {
    city: 'Istanbul',
    country: 'Turkey',
    continent: 'Europe',
    countryCode: 'tr',
    overallScore: 6.8,
    nightSafety: 6.2,
    publicTransit: 7.1,
    walkingAlone: 6.5,
    tags: ['cultural-immersion', 'moderate-safety'],
    bgColor: 'bg-yellow-25',
    reviewCount: 342,
    lastUpdated: '30 minutes ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: { 
        score: 6.2, 
        context: 'Is Istanbul safe for female solo travelers at night? Generally yes with precautions. Istanbul is safe at night in tourist areas like Sultanahmet and main streets of Beyoglu, with good lighting and police presence. However, women traveling alone should avoid isolated areas and be cautious of persistent male attention. Street harassment increases after dark, particularly around nightlife districts. Most solo female travelers report feeling safe but recommend staying in groups late at night.' 
      },
      publicTransit: { 
        score: 7.1, 
        context: 'Istanbul\'s public transport (metro, tram, bus, ferry) is generally safe for solo female travelers with good coverage across the city. Women-only sections available on some buses during peak hours. Pickpocketing can occur on crowded transport, especially tourist routes. Overall reliable system with security cameras and staff presence. Most solo women feel comfortable using public transport during day and early evening.' 
      },
      walkingAlone: { 
        score: 6.5, 
        context: 'Walking alone as a solo female traveler in Istanbul is generally safe in tourist areas during daylight hours. Main districts like Sultanahmet, Beyoglu, and Kadikoy have good pedestrian traffic and police presence. However, women may experience catcalling and unwanted attention, especially in bazaar areas. Cultural norms mean solo women attract curiosity. Dress modestly to minimize attention and stick to busy streets.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Sultanahmet',
          description: 'Historic heart of Istanbul with major attractions like Hagia Sophia and Blue Mosque. Excellent for solo female travelers with constant tourist police presence, good lighting, and plenty of other visitors. Low crime rate (0.02% of city total) and many female-friendly accommodations. Best area for first-time solo women visitors.'
        },
        {
          name: 'Nişantaşı',
          description: 'Upscale shopping district and primary choice for female travelers. Safest area in Istanbul with minimal crime (0.01% of city total), excellent lighting, high-end shops, and respectful atmosphere. Well-patrolled with sophisticated crowd and international ambiance.'
        },
        {
          name: 'Karaköy',
          description: 'Trendy waterfront district with galleries, cafes, and boutique hotels. Growing expat community creates welcoming environment for solo women. Good transport links and increasing number of female-owned businesses. Generally safe with active nightlife scene.'
        },
        {
          name: 'Kadıköy (Asian Side)',
          description: 'Local neighborhood with authentic Turkish atmosphere. More conservative but respectful toward solo female travelers. Less touristy so fewer hassles from vendors. Good restaurants and safer evening walks along the waterfront. Popular with young Turkish professionals.'
        },
        {
          name: 'Galata',
          description: 'Historic area around Galata Tower with cobblestone streets and boutique hotels. Good mix of locals and tourists. Generally safe for walking during day and early evening. Art galleries and coffee shops create welcoming atmosphere for solo women.'
        },
        {
          name: 'Beşiktaş',
          description: 'Modern district with university area creating youthful, progressive atmosphere. Generally respectful toward solo female travelers. Good transport connections and mix of traditional and modern venues. Less touristy than central areas but still accessible.'
        }
      ],
      caution: [
        'Taksim Square area late at night - can get rowdy with increased male attention and street harassment',
        'Grand Bazaar and Spice Bazaar - persistent vendors and potential for following/harassment, especially when alone',
        'Istiklal Avenue after midnight - crowded with aggressive street vendors and men who may follow solo women'
      ],
      avoid: [
        'Tarlabaşı district - high crime area with safety concerns, especially for women alone',
        'Remote areas of Beyoğlu late at night - poorly lit with increased harassment risk',
        'Industrial areas of Golden Horn - not tourist-friendly and unsafe for solo women after dark'
      ]
    },
    accommodations: [
      {
        name: 'Cheers Lighthouse Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Sultanahmet location', '24/7 security', 'Hagia Sophia 5min walk', 'Marmara Sea views'],
        rating: 9.1,
        notes: 'Top-rated hostel for solo female travelers in historic Sultanahmet. Female-only dorms available with individual lockers. Only 5 minutes from Hagia Sophia and Blue Mosque. Scenic location with sea views and comprehensive safety measures.',
        link: 'https://www.hostelworld.com/hostel/Cheers-Lighthouse-Hostel/Istanbul/274891'
      },
      {
        name: 'Moon Hostel',
        type: 'hostel',
        features: ['Cozy atmosphere', 'Strong security focus', '24/7 reception', 'Near Beyoğlu', 'Female-friendly'],
        rating: 8.9,
        notes: 'Celebrated for cozy atmosphere and security focus. Comprehensive safety measures including 24-hour front desk and individual lockers. Easy access to Beyoğlu shopping and dining. Excellent choice for women seeking safe social environment.',
        link: 'https://www.booking.com/hotel/tr/moon-hostel-istanbul.html'
      },
      {
        name: 'Agora Guesthouse',
        type: 'guesthouse',
        features: ['Family-run', 'Central Sultanahmet', 'Personal attention', 'Safe environment', 'Female-friendly staff'],
        rating: 8.7,
        notes: 'Reputable family-run guesthouse in Sultanahmet with excellent reputation among solo female travelers. Personal attention and safe environment. Walking distance to major attractions with knowledgeable staff providing safety advice.',
        link: 'https://www.agoraguesthouse.com/'
      },
      {
        name: 'Sirkeci Mansion',
        type: 'hotel',
        features: ['Historic hotel', 'Central Sirkeci', 'Gülhane tram stop 100m', 'Traditional Ottoman style', '24/7 concierge'],
        rating: 8.8,
        notes: 'Beautiful historic hotel 100 meters from Gülhane tram stop. Centrally located in safe Sirkeci area with traditional Ottoman architecture. Excellent for solo female travelers seeking comfort and cultural immersion with safety.',
        link: 'https://www.sirkecimansion.com/'
      },
      {
        name: 'Berk Guest House',
        type: 'guesthouse',
        features: ['Family-run', 'Behind Blue Mosque', 'Guests become family', 'Traditional hospitality', 'Female-safe'],
        rating: 8.6,
        notes: 'Authentic family-run hotel behind Blue Mosque where guests truly become part of family. Traditional Turkish hospitality in safe environment. Excellent for solo women wanting cultural immersion with family protection.',
        link: 'https://www.berkguesthouse.com/'
      },
      {
        name: 'Novus Pera Hotel',
        type: 'hotel',
        features: ['Beyoğlu location', 'Near Istiklal Street', 'Modern amenities', 'Solo traveler-friendly', 'Safe area'],
        rating: 8.5,
        notes: 'Modern hotel in excellent Beyoğlu location near Istiklal Street. Solo traveler-friendly with modern amenities and professional staff. Good choice for women wanting contemporary comfort in vibrant area.',
        link: 'https://www.novuspera.com/'
      },
      {
        name: 'Cheers Vintage Hostel',
        type: 'hostel',
        features: ['Beyoğlu location', '24/7 surveillance', 'Secured dormitories', 'Female sections', 'Safety-focused'],
        rating: 8.4,
        notes: 'Located in bustling Beyoğlu with excellent safety features including 24-hour surveillance and secured dormitories. Specifically designed for solo female traveler safety with dedicated female sections and comprehensive security measures.',
        link: 'https://www.cheershostels.com/'
      }
    ],
    alerts: [
      {
        title: 'Increased Street Harassment in Tourist Areas',
        description: 'Rising reports of persistent male attention, catcalling, and following of solo female travelers, particularly around Grand Bazaar, Spice Bazaar, and tourist areas. Vendors and men approaching women more aggressively than in past years.',
        location: 'Grand Bazaar, Spice Bazaar, Sultanahmet, Taksim Square',
        reportCount: 28,
        severity: 'medium',
        dateReported: '1 week ago'
      },
      {
        title: 'Taxi Driver Issues for Solo Women',
        description: 'Multiple reports of taxi drivers being "ruthless" with solo female travelers, overcharging, taking wrong routes, or becoming aggressive. Some incidents of inappropriate behavior toward women traveling alone.',
        location: 'Citywide, especially airport transfers',
        reportCount: 15,
        severity: 'medium',
        dateReported: '5 days ago'
      },
      {
        title: 'Pickpocketing Increase in Tourist Transport',
        description: 'Significant increase in pickpocketing on tourist-heavy transport routes, especially trams to Sultanahmet and ferries. Targeting distracted tourists with phones and cameras.',
        location: 'Tourist tram routes, Bosphorus ferries, metro stations',
        reportCount: 22,
        severity: 'low',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress modestly to respect local culture and minimize unwanted attention - cover shoulders, chest, and knees
• Long pants or maxi skirts recommended over shorts, especially when visiting mosques
• Bring a lightweight scarf to cover head/shoulders when entering religious sites
• Avoid tight-fitting or revealing clothing that may attract persistent male attention
• Choose comfortable walking shoes for cobblestone streets and long sightseeing days
• Dress slightly more conservatively than you might in Western Europe to blend in better`,
      firstTimers: `• Start with safe neighborhoods like Sultanahmet or Nişantaşı - both excellent for solo female travelers
• Book accommodation in advance in recommended areas for women's safety and peace of mind
• Download offline maps and learn basic Turkish phrases for emergencies and navigation
• Get an Istanbulkart for public transport - safer and easier than dealing with individual tickets
• Research Turkish customs and Islamic culture before arrival to show respect and avoid misunderstandings
• Register with your embassy and share itinerary with trusted contacts for safety
• Carry cash as cards aren't accepted everywhere, but keep money secured in multiple locations`,
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'BiTaksi',
        'Getir Istanbul',
        'Turkish Airlines'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for navigating Turkey safely', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Turkey-specific safety advice', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency alerts and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response crucial for solo women in Istanbul', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel in Turkey', rating: 4.1 },
        { name: 'BiTaksi', link: 'https://www.bitaksi.com/', description: 'Turkish taxi app much safer than street taxis with GPS tracking', rating: 4.3 },
        { name: 'Getir Istanbul', link: 'https://getir.com/', description: 'Turkish delivery app for safe food and essentials delivery to your accommodation', rating: 4.5 },
        { name: 'Turkish Airlines', link: 'https://www.turkishairlines.com/', description: 'Official app for domestic flights within Turkey and international connections', rating: 4.4 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'İmdat!',
          localLanguage: 'Turkish'
        },
        {
          english: 'Call the police!',
          local: 'Polis çağırın!',
          localLanguage: 'Turkish'
        },
        {
          english: 'I need a doctor.',
          local: 'Doktora ihtiyacım var.',
          localLanguage: 'Turkish'
        },
        {
          english: 'Where is the hospital?',
          local: 'Hastane nerede?',
          localLanguage: 'Turkish'
        },
        {
          english: 'Leave me alone!',
          local: 'Beni rahat bırakın!',
          localLanguage: 'Turkish'
        },
        {
          english: 'I don\'t understand.',
          local: 'Anlamıyorum.',
          localLanguage: 'Turkish'
        },
        {
          english: 'I am lost.',
          local: 'Kayboldum.',
          localLanguage: 'Turkish'
        },
        {
          english: 'Can you help me?',
          local: 'Bana yardım edebilir misiniz?',
          localLanguage: 'Turkish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Turkey is secular but culturally conservative. Dress modestly covering shoulders, chest, and knees. Hijab not required but bring scarf for mosque visits. Avoid tight or revealing clothing to minimize unwanted attention from men. More conservative dress recommended outside tourist areas.',
      behaviorNorms: [
        'Remove shoes when entering mosques and some traditional homes',
        'Use right hand for greetings, eating, and passing items - left hand considered unclean',
        'Keep public displays of affection minimal - hand-holding acceptable but kissing discouraged',
        'Show respect during call to prayer times - avoid loud conversations near mosques',
        'Bargaining expected in markets and bazaars but not in regular stores',
        'Tipping customary - 10-15% at restaurants, round up for taxis and services',
        'Accept Turkish hospitality graciously but set boundaries if feeling overwhelmed',
        'Learn basic greetings in Turkish - shows respect and often improves interactions'
      ],
      perception: 'Is Istanbul safe for female solo travelers? Yes, with cultural awareness. Solo women attract curiosity rather than hostility in Turkish culture. Turkish people are generally hospitable and protective of female guests. However, persistent male attention and street harassment do occur, especially in tourist areas. Women traveling alone often report feeling welcome but advise being firm with boundaries and dressing conservatively to minimize unwanted attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-May', 'September-October'],
      events: 'Spring and fall offer best weather and fewer crowds. Summer can be extremely hot with more aggressive street vendors. Winter is mild but rainy.'
    },
    emergencyInfo: {
      police: '155',
      fire: '110',  
      medical: '112',
      general: '112'
    },
    currency: {
      name: 'Turkish Lira',
      code: 'TRY', 
      exchangeRate: {
        usd: 0.034,
        eur: 0.031,
        gbp: 0.027
      },
      exchangeTips: [
        'Exchange money at official exchange offices (döviz bürosu) for better rates than banks',
        'Airport exchanges have poor rates - exchange small amount for transport, rest in city',
        'Many places accept euros and US dollars but give change in Turkish Lira',
        'ATMs widely available but inform your bank before travel to avoid card blocks'
      ],
      scamWarnings: [
        'Avoid street money changers who may use counterfeit bills or short-change you',
        'Some shops quote prices in euros but charge more in Lira - confirm currency before paying',
        'Restaurant bills may include service charge - check before adding tip',
        'Taxi drivers may claim meter is broken and overcharge - insist on meter or agree on price first'
      ]
    },
    scamWarnings: [
      { title: 'Carpet Shop Scam', description: 'Friendly men approach solo women offering free tours that lead to high-pressure carpet sales', severity: 'medium' },
      { title: 'Fake Police', description: 'Men claiming to be police asking to check money for counterfeit bills - real police carry ID', severity: 'high' },
      { title: 'Restaurant Overcharging', description: 'Restaurants without posted prices charging tourists significantly more than locals', severity: 'medium' },
      { title: 'Shoe Shine Drop', description: 'Man drops brush, when you return it he insists on shining your shoes then demands payment', severity: 'low' },
      { title: 'Photography Fee Scam', description: 'Someone offers to take your photo then demands money - politely decline or take with your own camera', severity: 'low' }
    ],
    languages: ['Turkish', 'English (limited)', 'Arabic', 'Kurdish'],
    daytimeSafetyPercent: 78.5,
    nighttimeSafetyPercent: 65.0,
    safetySourceName: 'Travel Ladies & Solo Female Travel Community 2025',
    safetySourceUrl: 'https://travelladies.app/safety/turkey/istanbul',
    redFlags: [
      {
        label: 'Street Harassment (Tourist Areas)',
        frequency: 'Common',
        icon: 'AlertTriangle',
        details: 'Solo female travelers commonly experience catcalling, persistent following, and unwanted attention from men, especially in tourist areas like Sultanahmet and Grand Bazaar. Cultural norms make solo women objects of curiosity, leading to uncomfortable situations.',
        prevention: 'Dress modestly covering shoulders and knees. Avoid eye contact with harassing men. Learn basic Turkish phrases: "Beni rahat bırak" (Leave me alone). Walk confidently and ignore catcalls. Stay in busy, well-populated areas.'
      },
      {
        label: 'Aggressive Vendors (Bazaars)',
        frequency: 'Very Common',
        icon: 'ShoppingBag',
        details: 'Vendors in Grand Bazaar and Spice Bazaar use aggressive tactics on solo female tourists, including persistent following, grabbing arms, and blocking paths. They exploit cultural politeness and may become sexually inappropriate in their sales approach.',
        prevention: 'Say "Hayır, teşekkürler" (No, thank you) firmly and keep walking. Don\'t feel obligated to be polite if vendors become aggressive. Avoid making eye contact. Shop with confidence and don\'t hesitate to be rude if necessary.'
      },
      {
        label: 'Taxi Overcharging',
        frequency: 'Common',
        icon: 'Car',
        details: 'Taxi drivers frequently overcharge tourists, especially solo women, by not using meters, claiming meters are broken, or taking longer routes. Airport taxis are notorious for excessive pricing and fake additional fees.',
        prevention: 'Use rideshare apps like BiTaksi or Uber when available. Always insist on meter usage. Know approximate fare costs beforehand. Use official airport shuttles instead of airport taxis. Learn to count to 10 in Turkish for meter reading.'
      },
      {
        label: 'Pickpocketing (Public Transport)',
        frequency: 'Occasional',
        icon: 'Hand',
        details: 'Pickpocketing occurs on crowded public transport, particularly on trams and buses serving tourist routes between Sultanahmet and Beyoğlu. Thieves target distracted tourists with visible valuables.',
        prevention: 'Use crossbody bags worn in front on public transport. Keep phones and cameras secure. Be extra vigilant during rush hours. Use bags with zippers and RFID protection. Stay alert when boarding crowded vehicles.'
      },
      {
        label: 'Fake Police Scams',
        frequency: 'Rare',
        icon: 'Shield',
        details: 'Rare but serious scam where fake police officers approach tourists claiming to check for counterfeit money or drugs, then steal money or demand bribes. They may work with accomplices who initially approach victims.',
        prevention: 'Real Turkish police wear uniforms and have proper ID. Ask to see official identification. Never hand over money or passport without being taken to a real police station. Contact tourist police at 153 if suspicious.'
      }
    ],
    usefulTips: [
      {
        title: "Solo Female Travel Safety: Navigate Street Harassment with Confidence",
        description: "Turkish culture involves more male attention than Western countries. Ignore catcalling and hissing without engagement. If approached persistently, seek help from shopkeepers or local women rather than random men. Most harassment is verbal rather than physical.",
        severity: "medium",
        sourceName: "Solo Female Travel Community 2025",
        sourceUrl: "https://fearlessfemaletravels.com/is-istanbul-safe-solo-female-travellers/"
      },
      {
        title: "Use BiTaksi App Instead of Street Taxis for Women's Safety",
        description: "Street taxi drivers can be problematic for solo women - reports of overcharging, wrong routes, and inappropriate behavior. BiTaksi app provides GPS tracking, fare estimates, and driver ratings for much safer transport.",
        severity: "medium", 
        sourceName: "Istanbul Solo Travel Guide 2025",
        sourceUrl: "https://www.theladywhotravels.com/is-istanbul-safe-for-solo-female-travellers/"
      },
      {
        title: "Dress Modestly to Minimize Unwanted Attention from Men",
        description: "Cover shoulders, chest, and knees to respect local culture and reduce persistent male attention. Bring lightweight scarf for mosque visits. Conservative dress significantly improves experience for solo women.",
        severity: "low",
        sourceName: "Travel Ladies App 2025",
        sourceUrl: "https://travelladies.app/safety/turkey/istanbul"
      },
      {
        title: "Stay in Sultanahmet or Nişantaşı for Maximum Solo Female Safety",
        description: "Sultanahmet has lowest crime rate (0.02% of city total) with tourist police and constant foot traffic. Nişantaşı is upscale district with minimal harassment. Both areas offer female-friendly accommodations and safe walking.",
        severity: "low",
        sourceName: "Istanbul Safety Guide 2025",
        sourceUrl: "https://www.theblondeabroad.com/solo-female-travelers-guide-to-istanbul/"
      },
      {
        title: "Avoid Grand Bazaar and Spice Bazaar When Alone if Sensitive to Harassment", 
        description: "These areas have most persistent vendors and male attention toward solo women. If visiting alone, be prepared for following, pressure sales tactics, and increased catcalling. Go with confidence or join a tour group.",
        severity: "low",
        sourceName: "Female Solo Traveler Reviews 2025", 
        sourceUrl: "https://annaeverywhere.com/is-istanbul-safe-to-visit-now/"
      }
    ],
    culturalDos: [
      'Learn basic Turkish greetings - Merhaba (hello), Teşekkür ederim (thank you)',
      'Accept Turkish tea (çay) when offered - it\'s a gesture of hospitality',
      'Bargain respectfully in markets - it\'s expected but be polite',
      'Try Turkish breakfast and local cuisine - safe and delicious',
      'Visit both European and Asian sides of Istanbul for complete experience',
      'Take Bosphorus ferry ride - scenic and culturally enriching',
      'Respect mosque visiting hours and dress codes',
      'Use public hammams (Turkish baths) for authentic cultural experience'
    ],
    culturalDonts: [
      'Don\'t wear revealing clothes, especially when visiting religious sites',
      'Don\'t refuse Turkish hospitality abruptly - decline politely if needed', 
      'Don\'t point feet toward people when sitting - it\'s considered rude',
      'Don\'t eat or drink in public during Ramadan daylight hours',
      'Don\'t photograph people without permission, especially women',
      'Don\'t engage with aggressive street vendors or fake guides',
      'Don\'t walk alone in deserted areas late at night',
      'Don\'t assume everyone speaks English - learn basic Turkish phrases'
    ],
    womensConfidenceScore: {
      score: 68.4,
      source: "Travel Ladies Solo Female Traveler Survey 2025",
      sourceUrl: "https://travelladies.app/safety/turkey/istanbul"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 82,
        source: 'Solo Travel Community 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-istanbul-safe-for-solo-female-travellers/'
      },
      {
        label: 'Public Transport',
        confidence: 75,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/turkey/istanbul'
      },
      {
        label: 'Nightlife',
        confidence: 58,
        source: 'Solo Female Travel Blogs 2025',
        sourceUrl: 'https://fearlessfemaletravels.com/is-istanbul-safe-solo-female-travellers/'
      },
      {
        label: 'Walking Alone',
        confidence: 65,
        source: 'Female Travel Community 2025',
        sourceUrl: 'https://www.theblondeabroad.com/solo-female-travelers-guide-to-istanbul/'
      }
    ],

    sexualHarassmentData: {
      prevalence: 'medium to high',
      commonLocations: ['Street harassment common in tourist areas like Sultanahmet and Grand Bazaar - persistent male attention and catcalling frequent', 'Public transport harassment occasional, especially crowded buses and tourist tram routes', 'Bazaar areas have highest levels of unwanted male attention with vendors and men following solo women', 'Nightlife areas like Taksim and Istiklal Street show increased harassment after dark'],
      reportingRate: 45,
      legalProtection: 'Turkey has laws against harassment but enforcement inconsistent. Cultural norms may blame women. Police response varies - tourist police more helpful than regular police. Embassy support available for serious incidents. Legal system challenging for foreign women.',
      supportResources: [
        'Tourist Helpline: +90 212 518 1802 (English support for tourist issues)',
        'Women\'s Solidarity Foundation: +90 212 256 2444 (Turkish women\'s rights)',
        'Purple Roof Women\'s Shelter: +90 212 292 5001 (crisis support)',
        'Istanbul Metropolitan Municipality Women\'s Counseling: +90 212 449 4444',
        'Mor Çatı Women\'s Foundation: +90 212 292 5031 (violence against women)'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'American Hospital',
          address: 'Güzelbahçe, Nişantaşı Cd. No:20, 34365 Şişli/İstanbul',
          phone: '+90 212 444 3777',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Internal Medicine', 'Surgery'],
          link: 'https://www.americanhospitalturkey.org/'
        },
        {
          name: 'Acıbadem Maslak Hospital',
          address: 'Büyükdere Cd. No:40, 34398 Sarıyer/İstanbul',
          phone: '+90 212 304 4444',
          emergency: true,
          specialties: ['Emergency Medicine', 'Cardiology', 'Neurology', 'Orthopedics'],
          link: 'https://www.acibadem.com.tr/'
        },
        {
          name: 'Florence Nightingale Hospital',
          address: 'Abide-i Hürriyet Cd. No:290, 34381 Şişli/İstanbul',
          phone: '+90 212 224 4950',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Gynecology', 'Obstetrics'],
          link: 'https://www.florence.com.tr/'
        },
        {
          name: 'Istanbul Medical Faculty Hospital',
          address: 'Millet Cd., 34093 Fatih/İstanbul',
          phone: '+90 212 414 2000',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Surgery', 'Teaching Hospital']
        }
      ],
      pharmacies: [
        {
          name: 'Eczane Plus - Taksim',
          address: 'Cumhuriyet Cd. No:30, 34437 Beyoğlu/İstanbul',
          phone: '+90 212 293 0009',
          hours: '24/7',
          emergency: true,
          link: 'https://www.eczaneplus.com.tr/'
        },
        {
          name: 'Sağlık Eczanesi - Sultanahmet',
          address: 'Divan Yolu Cd. No:12, 34122 Fatih/İstanbul',
          phone: '+90 212 528 9876',
          hours: '24/7',
          emergency: true
        },
        {
          name: 'Nöbetçi Eczane - Kadıköy',
          address: 'Bahariye Cd. No:47, 34710 Kadıköy/İstanbul',
          phone: '+90 216 336 1234',
          hours: '24/7',
          emergency: true
        },
        {
          name: 'City Pharmacy - Nişantaşı',
          address: 'Vali Konağı Cd. No:85, 34365 Şişli/İstanbul',
          phone: '+90 212 231 5678',
          hours: '24/7',
          emergency: true
        },
        {
          name: 'Metro Eczane - Beşiktaş',
          address: 'Barbaros Blv. No:23, 34353 Beşiktaş/İstanbul',
          phone: '+90 212 227 4567',
          hours: '24/7',
          emergency: true
        }
      ],
      emergencyContacts: [
        'Universal Emergency: 112 (police, fire, medical)',
        'Police: 155',
        'Fire Department: 110',
        'Medical Emergency: 112',
        'Tourist Police: +90 212 527 4503',
        'Poison Information: 114'
      ],
      womensHealth: {
        clinics: [
          'American Hospital Women\'s Health Center: Comprehensive gynecology and obstetrics',
          'Acıbadem Women\'s Health Centers: Multiple locations with English-speaking specialists',
          'Memorial Healthcare Group: Women\'s health services across Istanbul',
          'Florence Nightingale Women\'s Center: Specialized women\'s healthcare services'
        ],
        gynecologists: [
          'American Hospital: English-speaking gynecologists with international training',
          'Acıbadem Healthcare Group: Women\'s health specialists across multiple locations',
          'Private practice specialists in Nişantaşı and Bebek areas',
          'Medical faculty hospitals with women\'s health departments'
        ],
        emergencyContraception: [
          'Available at pharmacies (eczane) without prescription',
          'Hospital emergency departments provide emergency contraception',
          'Private hospitals with English-speaking staff preferred for consultations',
          'Some pharmacists may have conservative attitudes - try multiple locations if needed'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies (eczane), supermarkets, and convenience stores',
          'Turkish brands and international brands like Always, Tampax available',
          'Tampons less common than pads but available in tourist areas and pharmacies',
          'Hotels often provide basic supplies or can direct to nearest pharmacy'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Istanbul',
        'Routine vaccinations should be current (MMR, DPT, flu)',
        'Hepatitis A/B recommended for longer stays',
        'COVID-19 vaccination recommended but not required for entry'
      ],
      healthRisks: [
        'Generally low health risks in Istanbul',
        'Stomach issues possible from rich Turkish cuisine or street food',
        'Air pollution in city center may affect sensitive individuals',
        'Heat exhaustion possible in summer months'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General Istanbul',
          address: 'Kaplicalar Mevkii No. 2, Istinye, 34460 Istanbul',
          phone: '+90 212 335 9000',
          link: 'https://tr.usembassy.gov/'
        },
        {
          name: 'British Consulate-General Istanbul', 
          address: 'Meşrutiyet Cd. No:34, 34430 Beyoğlu/Istanbul',
          phone: '+90 212 334 6400',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-istanbul'
        },
        {
          name: 'German Consulate General Istanbul',
          address: 'İnönü Cad. No:10, 34437 Beyoğlu/Istanbul',
          phone: '+90 212 334 6100',
          link: 'https://istanbul.diplo.de/'
        },
        {
          name: 'French Consulate General Istanbul',
          address: 'Istiklal Cd. No:8, 34430 Beyoğlu/Istanbul',
          phone: '+90 212 292 1610',
          link: 'https://istanbul.consulfrance.org/'
        },
        {
          name: 'Canadian Consulate General Istanbul',
          address: 'Büyükdere Cd. No:209, 34394 Şişli/Istanbul', 
          phone: '+90 212 385 9700',
          link: 'https://www.canadainternational.gc.ca/turkey-turquie/'
        },
        {
          name: 'Spanish Consulate General Istanbul',
          address: 'Karadağ Sk. No:5, 34349 Beşiktaş/Istanbul',
          phone: '+90 212 270 7410',
          link: 'https://www.exteriores.gob.es/consulados/estambul'
        },
        {
          name: 'Australian Consulate General Istanbul',
          address: 'Süzer Plaza, Askerocağı Cd. No:15, 34367 Şişli/Istanbul',
          phone: '+90 212 243 1333',
          link: 'https://turkey.embassy.gov.au/'
        },
        {
          name: 'Consulate General of the Netherlands Istanbul',
          address: 'İstiklal Cd. No:197, 34433 Beyoğlu/Istanbul',
          phone: '+90 212 393 2121',
          link: 'https://www.netherlandsandyou.nl/countries/turkey'
        },
        {
          name: 'Danish Consulate General Istanbul',
          address: 'Akatlar Mah. Ebulula Mardin Cd. No:28, 34335 Beşiktaş/Istanbul',
          phone: '+90 212 355 7900',
          link: 'https://tyrkiet.um.dk/'
        },
        {
          name: 'Swiss Consulate General Istanbul',
          address: 'Levent Loft, Büyükdere Cd. No:201, 34394 Şişli/Istanbul',
          phone: '+90 212 283 8570',
          link: 'https://www.eda.admin.ch/istanbul'
        },
        {
          name: 'Consulate General of India Istanbul',
          address: 'Cumhuriyet Cd. No:57, 34437 Beyoğlu/Istanbul',
          phone: '+90 212 296 2131',
          link: 'https://www.cgiistanbul.gov.in/'
        }
      ],
      womensRights: [
        'Turkey has constitutional gender equality but social implementation varies',
        'Women\'s rights protected by law but cultural attitudes may differ',
        'Violence against women criminalized with legal protections available',
        'Istanbul Women\'s Platform: +90 212 292 5001 (advocacy and support)',
        'Purple Roof Women\'s Shelter provides crisis intervention and legal support'
      ],
      legalSupport: [
        'Istanbul Bar Association: +90 212 440 7070 (lawyer referrals)',
        'Tourist police can provide initial legal guidance: +90 212 527 4503',
        'Embassy legal services for citizens in serious legal trouble',
        'Women\'s Solidarity Foundation: +90 212 256 2444 (legal advocacy)',
        'Legal aid available through bar association for qualifying cases'
      ],
      reportingProcedures: [
        'Call 155 for police or 112 for general emergency (English limited)',
        'Ask specifically for tourist police who have better English skills',
        'Contact your embassy immediately for serious incidents',
        'Insist on written police report with case number for insurance/legal purposes',
        'Document everything: photos, witness contacts, medical reports if needed',
        'Women\'s organizations can provide advocacy and translation help',
        'Keep embassy emergency contact numbers easily accessible'
      ]
    },

    costAndComfort: {
      dailyBudget: {
        range: '$25 - $80 USD / day',
        description: 'Istanbul offers excellent value for money. Budget travelers can manage on $25-35/day with hostels, street food, and public transport. Mid-range $50-80/day with decent hotels, restaurants, and attractions. Luxury travelers $100+/day.',
        tip: 'Turkish Lira fluctuates significantly. US dollars and euros widely accepted. Carry cash as smaller vendors may not accept cards.'
      },
      accommodation: [
        {
          type: 'Hostels with Female Dorms',
          avgCost: '$12-25/night',
          safetyNote: 'Many hostels offer female-only dorms with lockers and 24/7 security, particularly in Sultanahmet',
          safetyLevel: 'medium to high'
        },
        {
          type: 'Mid-Range Hotels',
          avgCost: '$40-80/night',
          safetyNote: 'Boutique hotels in safe neighborhoods like Sultanahmet and Galata with good security',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$100-300/night',
          safetyNote: 'International chain hotels with high security standards and English-speaking staff',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport (Istanbulkart)',
          cost: '$0.40/ride, $8/weekly pass',
          safetyDescription: 'Metro, tram, bus system generally safe with some pickpocketing on tourist routes. Women-only sections on some buses',
          safetyLevel: 'medium'
        },
        {
          method: 'BiTaksi/Uber',
          cost: '$3-8 typical rides within city',
          safetyDescription: 'Much safer than street taxis with GPS tracking and driver ratings. Preferred for solo women',
          safetyLevel: 'high'
        },
        {
          method: 'Street Taxis',
          cost: '$2-6 typical rides (if meter used)',
          safetyDescription: 'Can be problematic for solo women - overcharging and inappropriate behavior reported',
          safetyLevel: 'low to medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Generally safe in tourist areas during day but harassment possible. Avoid isolated areas at night',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Buy Istanbulkart for public transport - much cheaper than individual tickets',
        'Eat at local restaurants away from tourist areas for authentic food at lower prices',
        'Many mosques and bazaars are free to explore - budget friendly cultural experiences',
        'Turkish breakfast included at most accommodations saves money on meals',
        'Bosphorus ferry rides are cheap and scenic alternative to expensive boat tours',
        'Shop at local markets and grocery stores rather than tourist-area shops',
        'Happy hour and lunch specials at restaurants offer same food at lower prices',
        'Walking tours often work on tip-only basis - great value for solo travelers',
        'Turkish baths (hamam) at local facilities much cheaper than hotel spas',
        'Bargain in Grand Bazaar but research fair prices first to avoid overpaying'
      ]
    },

    governmentAdvisory: {
      level: 'Reconsider Travel',
      levelNumber: 3,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Reconsider travel to Turkey due to terrorism and arbitrary detentions. Some areas have increased risk. Exercise increased caution due to terrorism and the potential for arbitrary detentions.',
      reason: 'Terrorism threats, arbitrary detentions of U.S. citizens, and regional instability.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/turkey-travel-advisory.html',
      soloTravelerAdvice: [
        'Istanbul generally safer than other parts of Turkey - most solo female travelers report positive experiences',
        'Stay in tourist areas like Sultanahmet, Beyoğlu, or Nişantaşı for maximum safety',
        'Register with your embassy and maintain contact with family/friends regularly',
        'Avoid political demonstrations, large gatherings, and discussions about politics',
        'Use BiTaksi app instead of street taxis - much safer for solo women travelers',
        'Dress modestly and respect local customs to minimize unwanted attention',
        'Keep embassy contact information easily accessible at all times'
      ]
    },

    crimeStatistics: {
      violentCrime: 12.4, // per 100,000 (2024 data - moderate levels)
      pettyTheft: 28.7, // per 100,000 (pickpocketing in tourist areas)
      sexualHarassment: 45.2, // per 100,000 (higher than European averages)
      overallCrimeIndex: 32.8, // Istanbul Crime Index 2024
      safetyIndex: 67.2, // Istanbul Safety Index 2024
      source: 'Numbeo Crime Statistics 2024 & Turkish National Police',
      lastUpdated: 'December 2024',
      soloFemaleIncidents: 'Moderate - primarily verbal harassment and persistent attention rather than violent crime'
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress modestly covering shoulders, arms, and legs especially in religious sites - Turkey is 99% Muslim with traditional values',
      'Learn basic Turkish phrases like "Merhaba" (hello) and "Teşekkürler" (thank you) - English is less common than other countries',
      'Remove shoes when entering mosques and cover your head with a scarf - fundamental Islamic etiquette requirements',
      'Haggle respectfully in bazaars and with taxi drivers - negotiating prices is expected cultural practice',
      'Always carry photographic ID (passport) - it\'s legally required and authorities conduct regular checks in busy areas'
    ],
    culturalDonts: [
      'Don\'t wear revealing clothing like crop tops, short shorts, or miniskirts - inappropriate and attracts unwanted attention',
      'Don\'t drink alcohol excessively - fewer than 10% of Turkish women drink and it makes you a target',
      'Don\'t accept the first price offered in markets or taxis - tourists are routinely overcharged without negotiation',
      'Don\'t ignore Islamic customs during Ramadan or religious holidays - show respect for fasting and prayer times',
      'Don\'t be overly familiar with men you don\'t know - Turkish culture has different boundaries for male-female interactions'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default istanbul;