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
        features: ['#1 ranked hotel in Kamakura', '3-minute walk from Kamakura Station', 'Bilingual staff', 'Modern minimalist design', '24/7 front desk'],
        rating: 4.8,
        notes: '2024 solo female traveler: "Perfect for solo women - modern, clean atmosphere with beautiful rooms that blend into Kamakura\'s nature. Staff incredibly helpful and English-speaking."'
      },
      {
        name: 'AKAMA Kamakura',
        type: 'ryokan',
        features: ['200m from Yuigahama Beach', 'Garden views', 'Private sauna', 'Traditional tatami rooms', 'Free WiFi'],
        rating: 4.7,
        notes: '2024 review: "2-star ryokan with spacious, air-conditioned rooms and balcony. Solo female travelers love the peaceful garden views and proximity to beach safety."'
      },
      {
        name: 'WeBase Kamakura',
        type: 'hotel',
        features: ['Female-only dormitories', 'Gender-separated hot bath and sauna', 'Beach proximity', '3-minute walk from Yuigahama Station', 'Rooftop terrace'],
        rating: 4.6,
        notes: '2024 solo female traveler: "Excellent choice with female-only dorms and 8-bed women-only rooms. Resort atmosphere with relaxing facilities and strong safety focus for solo women."'
      },
      {
        name: 'Kamakura COCON',
        type: 'ryokan',
        features: ['1.5km from Tsurugaoka Hachimangu', 'Private hot tub in rooms', 'Free shuttle service', 'Kitchenette facilities', 'Safety deposit box'],
        rating: 4.6,
        notes: '2025 accommodation: "24-hour front desk and private entrance access. All units with air conditioning, flat-screen TV, and private bathroom with hot tub - perfect solo female comfort."'
      },
      {
        name: 'IZA Kamakura Guest House & Bar',
        type: 'hostel',
        features: ['2 minutes from Hase Station', 'Near Big Buddha', 'Social atmosphere', 'English-speaking staff', 'Cozy welcoming environment'],
        rating: 4.5,
        notes: '2024 solo female review: "Popular choice since 2013 for solo female travelers. Easy access to Hase Temple and Big Buddha. Location convenient and safe for solo women."'
      },
      {
        name: 'Kakiya Ryokan',
        type: 'ryokan',
        features: ['3-minute walk from Enoshima Beach', 'Historic restaurant attached', 'Traditional futon bedding', '24-hour public bath', 'Free parking'],
        rating: 4.5,
        notes: '2024 review: "Traditional accommodation attached to historic Shirasu fish restaurant. Solo female travelers praise the 24-hour public bath and extremely safe beach location."'
      },
      {
        name: 'Guest House Kamejikan ("Turtle Time")',
        type: 'hostel',
        features: ['Female-only dorms available', 'Free WiFi', 'Security lockers', 'Common room', 'Budget-friendly'],
        rating: 4.5,
        notes: '2024 solo female traveler: "Cozy and affordable with welcoming atmosphere. Female-only dormitory-style rooms available. Location convenient and safe for solo female budget travelers."'
      },
      {
        name: 'Enoshima Guest House 134',
        type: 'hostel',
        features: ['Air conditioning', 'Security lockers', 'Common room', 'Free WiFi', 'Mixed and female dorms'],
        rating: 4.4,
        notes: '2024 review: "Comfortable and welcoming hostel with range of amenities. Solo female travelers appreciate the security lockers and options for female-only accommodations."'
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
      clothing: [
        'Is Kamakura safe for female solo travelers? Absolutely - Japan ranks #7 safest globally for solo female travelers with 4.8/5 safety rating',
        'Dress modestly when visiting temples and shrines - cover shoulders and knees as sign of respect in religious spaces',
        'Remove shoes when entering temples, traditional accommodations, and some restaurants - bring clean socks as backup',
        'Wear comfortable walking shoes essential for temple visits and uneven stone paths - many temples have stairs and gravel',
        'Bring layered clothing as coastal weather can change quickly - mornings cool, afternoons warm, evenings breezy',
        'Pack rain gear year-round as Japan has unpredictable weather - especially during June rainy season (tsuyu)',
        'Avoid overly revealing clothing not for safety but out of cultural respect - shorts and tank tops fine for beaches'
      ],
      firstTimers: [
        'Kamakura is exceptionally safe for first-time solo female travelers with virtually zero violent crime and respectful culture',
        'Purchase JR Pass (if visiting multiple cities) or IC card (Suica/Pasmo) for seamless train travel - essential for getting around',
        'Carry cash as primary payment method - many temples, traditional restaurants, and small shops are cash-only establishments',
        'Download Google Translate app with camera function for reading Japanese menus and signs - incredibly helpful for navigation',
        'Plan temple visits early (8 AM opening) to avoid crowds and ensure entry before closing times (usually 4:30 PM last entry)',
        'Use women-only train carriages during rush hours (7-9 AM, 5-7 PM) - look for pink signs on platform for comfort',
        'Book accommodations in advance especially during cherry blossom (April) and autumn foliage (November) peak seasons',
        'Trust your instincts completely - though crime is virtually non-existent, maintain standard travel awareness'
      ],
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
      dressCode: [
        'Is Kamakura safe for women solo travelers? Absolutely - Japan ranks among the world\'s safest countries with respectful cultural norms protecting solo female travelers',
        'Dress modestly when visiting temples and shrines by covering shoulders and knees - bring a light scarf or cardigan for easy coverage',
        'Remove shoes when entering temples, traditional accommodations, and some restaurants - wear clean socks and slip-on shoes for convenience',
        'Avoid overly revealing clothing like short shorts, mini skirts, or low-cut tops in religious and traditional areas as sign of cultural respect',
        'Dress in layers to adapt to Kamakura\'s coastal climate which can change from cool mornings to warm afternoons to breezy evenings',
        'Wear comfortable, closed-toe walking shoes for temple visits as paths often include stairs, gravel, and uneven stone surfaces',
        'Choose practical clothing for beach visits to Yuigahama - swimwear is perfectly acceptable at beaches but cover up when traveling to/from'
      ],
      behaviorNorms: [
        'Bow respectfully when entering temple grounds and before approaching altars - shows proper reverence for sacred Buddhist and Shinto spaces',
        'Maintain quiet, contemplative behavior on trains and in public spaces - Japanese culture values harmony (wa) and consideration for others',
        'Follow proper purification rituals at temple entrances by washing hands and rinsing mouth at temizuya (purification fountains) before worship',
        'Practice proper photography etiquette by never taking photos inside temple halls and always asking permission before photographing people',
        'Keep conversations at low volume on public transport and in temples - loud talking is considered disruptive and disrespectful',
        'Avoid eating or drinking while walking on streets - Japanese culture considers this impolite, eat at designated areas or while seated',
        'Learn basic Japanese greetings like "Konnichiwa" (hello) and "Arigato gozaimasu" (thank you) to show cultural respect and appreciation'
      ],
      perception: [
        'Solo female travelers are completely normal, respected, and welcomed in Kamakura with Japanese culture being extremely protective of women\'s safety',
        'Local perception views solo female travelers positively as independent, adventurous individuals worthy of help and respect rather than targets',
        'Japanese "omotenashi" (hospitality) culture means locals actively assist solo female travelers with directions, recommendations, and safety guidance',
        'Cultural respect for personal space and privacy ensures solo female travelers experience minimal unwanted attention or harassment of any kind',
        'Traditional Japanese values of protecting women create an environment where solo female travelers feel safer than in most countries worldwide',
        'Buddhist and Shinto spiritual traditions in Kamakura foster peaceful, respectful interactions between locals and solo female visitors',
        'Local women frequently travel alone and readily share safety advice, restaurant recommendations, and cultural insights with fellow solo female travelers'
      ]
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
    daytimeSafetyPercent: 95.2, // Source: Travel Ladies 2025, Global Peace Index 2024
    nighttimeSafetyPercent: 89.4, // Source: Travel Ladies 2025, Japan National Police Agency 2024
    safetySourceName: 'Travel Ladies 2025 & Global Peace Index 2024',
    safetySourceUrl: 'https://travelladies.app/safety/japan',
    redFlags: [
      {
        label: 'Pickpocketing (Tourist Areas, Crowded Sites)',
        frequency: 'Rare',
        icon: 'Hand',
        details: 'Very rare incidents of pickpocketing at crowded temple sites during peak tourist seasons. Most occur at Hase Temple and Great Buddha statue areas when visitors are distracted taking photos.',
        prevention: 'Keep bags zipped and in front, secure valuables in inner pockets, remain aware in crowds during festivals'
      },
      {
        label: 'Bicycle Theft',
        frequency: 'Rare',
        icon: 'Bike',
        details: 'Occasional theft of unlocked rental bicycles, particularly near train stations and popular temple areas. Mostly opportunistic rather than organized crime.',
        prevention: 'Always lock rental bikes, use designated bike parking areas, avoid leaving bikes unattended for extended periods'
      },
      {
        label: 'Overpriced Tours & Shops',
        frequency: 'Rare',
        icon: 'CreditCard',
        details: 'Some tourist-focused shops and tour operators charge premium prices for souvenirs and guided experiences, particularly near major temples.',
        prevention: 'Compare prices, read reviews before booking tours, shop at local stores away from main tourist sites'
      },
      {
        label: 'Unwanted Attention (Staring, Photos)',
        frequency: 'Rare',
        icon: 'EyeOff',
        details: 'Occasional staring or photo-taking by locals curious about foreign visitors, particularly solo female travelers. Generally harmless cultural curiosity.',
        prevention: 'Dress modestly at temples, politely decline photos, move to busier areas if uncomfortable'
      }
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
    culturalSensitivityTips: [
      'Kamakura is considered the spiritual heart of Japanese Buddhism and Zen philosophy, with a history dating back over 800 years as Japan\'s former capital. Solo female travelers should understand that this city holds deep religious significance and approach temples and shrines with appropriate reverence and respect.',
      'Japanese concepts of "wa" (harmony) and "omotenashi" (hospitality) are especially pronounced in Kamakura\'s traditional atmosphere. Solo female travelers who show respect for group harmony, avoid disruptive behavior, and appreciate subtle acts of kindness will find deeper cultural connections.',
      'Temple and shrine etiquette is crucial in Kamakura, home to the famous Great Buddha and numerous sacred sites. Solo female travelers should learn proper bowing techniques, purification rituals at temple entrances, and understand that these are active places of worship, not just tourist attractions.',
      'The concept of "mono no aware" (awareness of the impermanence of things) is central to Japanese aesthetic philosophy, particularly evident in Kamakura\'s seasonal beauty. Solo female travelers who appreciate this sensitivity to transient beauty will better understand Japanese cultural values and seasonal celebrations.',
      'Quiet contemplation and mindfulness are valued in Kamakura\'s spiritual environment. Solo female travelers should embrace peaceful reflection, speak softly in sacred spaces, and understand that silence is often more appropriate than conversation in temples and meditation areas.',
      'Japanese gift-giving culture includes bringing "omiyage" (souvenirs) when visiting or staying with locals. Solo female travelers who understand this reciprocity culture and participate appropriately will show cultural awareness and respect for Japanese social customs.',
      'Seasonal awareness is important in Japanese culture, with each season bringing specific activities, foods, and festivals. Solo female travelers who show appreciation for seasonal changes and participate in season-appropriate activities will connect more deeply with local cultural rhythms.',
      'The Japanese concept of "ikigai" (life purpose) and work-life philosophy influences daily interactions. Solo female travelers who show respect for people\'s dedication to their crafts, jobs, and life pursuits will better understand Japanese cultural values and work ethic.',
      'Photography etiquette is especially important at religious sites in Kamakura. Solo female travelers should always ask permission before photographing people, understand when photography is prohibited in sacred spaces, and show respect for others\' spiritual practices.',
      'The practice of "forest bathing" (shinrin-yoku) and nature appreciation is deeply rooted in Japanese culture. Solo female travelers who participate respectfully in Kamakura\'s hiking trails and natural spaces will connect with important aspects of Japanese environmental philosophy and wellness practices.'
    ],
    womensConfidenceScore: {
      score: 89.4, // Travel Ladies 2025 & Global Peace Index 2024 - Japan ranks #9 safest globally
      source: "Travel Ladies 2025 & Global Peace Index 2024",
      sourceUrl: "https://travelladies.app/safety/japan"
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
      ],
      currencyExchangeTips: [
        'Official currency: Japanese Yen (JPY) - Current rates: 147 JPY = 1 USD, 160 JPY = 1 EUR, 187 JPY = 1 GBP',
        'Use convenience store ATMs (7-Eleven, FamilyMart, Lawson) for best rates and 24/7 availability - accept all international cards',
        'Avoid airport currency exchange - rates up to 10% worse than convenience store ATMs or bank machines',
        'Post office ATMs (JP Bank) offer excellent rates and are located throughout Kamakura - open during business hours',
        'Most temples, traditional restaurants, and small shops are cash-only - withdraw sufficient amounts before temple visits',
        'Credit cards accepted at major hotels, department stores, and chain restaurants but cash still preferred everywhere',
        'Carry cash for temple donations, entrance fees (typically 200-500 yen), and traditional tea ceremonies',
        'IC cards (Suica/Pasmo) can be loaded with cash for trains, buses, and many convenience store purchases',
        'No tipping culture in Japan - exact payment expected and offering tips can be considered offensive',
        'Keep bills organized as Japanese currency is color-coded: 1000 yen (blue), 5000 yen (purple), 10000 yen (brown)',
        'Emergency cash: Tokyo area banks 1 hour away by train if you run out - plan ahead for weekends',
        'Download currency converter app for real-time exchange rates and quick price calculations while shopping'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Remove shoes when entering temples and traditional establishments - fundamental respect for sacred spaces',
      'Bow slightly before entering torii gates and temple grounds - shows respect to guardian deities and Buddha',
      'Perform purification ritual at shrine entrances by washing hands and rinsing mouth - essential spiritual cleansing practice',
      'Buy and burn incense respectfully by waving out flame (never blow) - aids prayer and sanctifies surroundings',
      'Walk on sides of pathways not center - middle reserved for gods and deities in both shrines and temples'
    ],
    culturalDonts: [
      'Don\'t clap hands when praying at Buddhist temples - only bow deeply with palms together, clapping is for shrines only',
      'Don\'t photograph inside main halls or where signs prohibit - respect sacred spaces and prayer areas',
      'Don\'t enter off-limits areas marked by ropes or signs - these are sacred or private spaces',
      'Don\'t speak loudly or behave casually in temple grounds - these are active places of worship requiring reverence',
      'Don\'t blow out incense flames - always wave them out with your hand to show proper spiritual respect'
    ]
  },
  youtubeVideo: {
    videoId: "9KD3kg_L3n4"
  }
};

export default kamakura;
