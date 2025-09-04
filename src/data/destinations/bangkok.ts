import { Destination } from './types';

const bangkok: Destination = {
    city: 'Bangkok',
    country: 'Thailand',
    continent: 'Asia',
    countryCode: 'th',
    overallScore: 7.8,
    nightSafety: 7.4,
    publicTransit: 8.6,
    walkingAlone: 7.6,
    tags: ['insider-tips', 'safe', 'low-harassment'],
    bgColor: 'bg-blue-25',
    reviewCount: 743,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 7.4,
        context: 'Is Bangkok safe for solo female travelers at night? Absolutely - Bangkok ranks as one of the safest places for women to travel alone in Southeast Asia, second only to Singapore. Recent 2025 experiences show solo female travel safety is excellent in tourist areas like Sukhumvit and Silom with strong police presence. Bangkok statistics reveal very low sexual harassment rates (1.7/5) affecting women solo travelers, making it ideal for solo female travel beginners. Essential solo female travel tips include using official taxis and maintaining awareness in red-light districts.'
      },
      publicTransit: {
        score: 8.6,
        context: 'Bangkok public transport demonstrates exceptional solo female travel safety with BTS Skytrain and MRT systems specifically designed for women solo travelers. Recent testimonials from solo female travelers report feeling completely secure on public transport with minimal harassment incidents. CCTV monitoring and women-only train cars during rush hours enhance solo travel security for women traveling alone. Tourist Police completed specialized 2025 training focused on solo female travel safety, making Bangkok\'s transport among the safest for women solo travelers globally.'
      },
      walkingAlone: {
        score: 7.6,
        context: 'Is Bangkok safe for female solo travelers walking alone? Exceptionally safe - Bangkok delivers outstanding solo female travel safety for women walking independently. Multiple 2025 testimonials from solo female travelers report zero catcalling or harassment experiences, making it one of the safest countries for solo female travel. Bangkok\'s Crime Index of 38.63 ensures excellent solo travel safety for women beginners. Essential solo female travel safety precautions include staying alert for drink spiking in nightlife areas and avoiding isolated sois after dark, though overall risks remain minimal for solo female travelers.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Sukhumvit',
          description: 'Main tourist and expat area with excellent restaurants, shopping, and nightlife. Very safe with good police presence, modern infrastructure, and active street life day and night. Great for solo female travelers.'
        },
        {
          name: 'Silom',
          description: 'Business district with upscale hotels, restaurants, and shopping. Very safe during day and evening. Well-patrolled area with good lighting and transport connections.'
        },
        {
          name: 'Siam',
          description: 'Shopping and entertainment hub around major malls like Siam Paragon and MBK. Very safe with heavy foot traffic, security guards, and excellent transport links.'
        },
        {
          name: 'Thonglor',
          description: 'Trendy upscale area popular with young professionals and expats. Very safe with hip cafes, restaurants, and boutiques. Good for solo travelers seeking a more local experience.'
        },
        {
          name: 'Phrom Phong',
          description: 'Quiet residential area with shopping centers and international restaurants. Very safe and less touristy, popular with expats and families.'
        },
        {
          name: 'Chatuchak',
          description: 'Famous weekend market area. Generally safe during market hours but can be very crowded. Watch belongings and stay hydrated.'
        }
      ],
      caution: ['Khao San Road late at night', 'Patpong red-light district', 'Some areas of Chinatown after dark', 'Isolated sois (alleys) at night'],
      avoid: ['Klong Toey area at night', 'Isolated riverside areas after dark', 'Unlicensed massage parlors', 'Extremely crowded areas during protests']
    },
    accommodations: [
      {
        name: 'The Sukhumvit Hotel',
        type: 'hotel',
        features: ['Central Sukhumvit location', '24/7 security', 'Female-friendly', 'BTS access'],
        rating: 8.8,
        notes: 'Modern hotel in safe Sukhumvit area with excellent security and easy transport access.',
        link: 'https://www.thesukhumvithotel.com/'
      },
      {
        name: 'Lub d Bangkok Silom',
        type: 'hostel',
        features: ['Female dorms', 'Modern design', 'Central location', 'Security'],
        rating: 8.6,
        notes: 'Contemporary hostel with women-only dorms in safe Silom business district.',
        link: 'https://www.lubd.com/hostels/bangkok-silom/'
      },
      {
        name: 'Mad Monkey Hostel Bangkok',
        type: 'hostel',
        features: ['Women-only floors', 'Khao San area', 'Social atmosphere'],
        rating: 8.2,
        notes: 'Popular backpacker hostel with female-only accommodations near Khao San Road.',
        link: 'https://madmonkeyhostels.com/mad-monkey-hostel-bangkok/'
      },
      {
        name: 'The Siam Heritage',
        type: 'hotel',
        features: ['Boutique hotel', 'Traditional Thai style', 'Safe location', 'Cultural experience'],
        rating: 8.9,
        notes: 'Elegant boutique hotel with traditional Thai design in secure central location.',
        link: 'https://www.thesiamheritage.com/'
      },
      {
        name: 'Revolution Hostel Asoke',
        type: 'hostel',
        features: ['Female-only dorms', 'Asoke heart location', '4-story modern building', 'BTS access', 'Grand Palace proximity'],
        rating: 8.5,
        notes: 'Newest highly-rated hostel in central Asoke area. 8-10 minute walk to BTS SkyTrain, perfect for exploring famous sights including Grand Palace.',
        link: 'https://www.revolutionhostelasoke.com/'
      },
      {
        name: 'iSanook Female Hostel',
        type: 'hostel',
        features: ['Women-only hostel', 'Silom district', 'Chong Nonsi BTS proximity', 'Shopping mall access', 'Cultural attractions nearby'],
        rating: 8.7,
        notes: 'Exclusively for women travelers in vibrant Silom district. Safe and welcoming space with easy access to BTS, shopping, and street food.',
        link: 'https://www.isanookfemale.com/'
      }
    ],
    alerts: [
      {
        title: 'Rainy Season Flooding',
        description: 'Bangkok experiences flooding during heavy rains (July-October). Monitor weather and avoid flood-prone areas.',
        location: 'Citywide',
        reportCount: 15,
        severity: 'low',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Modest dress required for temples - cover shoulders and knees
• Light, breathable clothing for hot humid weather
• Comfortable walking shoes with good grip for wet surfaces
• Avoid tight or revealing clothing to respect local culture
• Bring a light jacket for air-conditioned spaces`,
      firstTimers: `• Bangkok is generally safe for solo women with cultural awareness
• Learn basic Thai phrases - locals appreciate the effort
• Always negotiate taxi fares or use meter/ride-sharing apps
• Respect Buddhist culture and dress modestly at temples
• Stay hydrated and take breaks from the heat and crowds`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Grab Thailand',
        'BTS SkyTrain',
        'Google Translate'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Bangkok', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response essential for solo women in Southeast Asia', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely essential for Bangkok safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Thailand safety insights', rating: 4.0 },
        { name: 'Grab Thailand', link: 'https://www.grab.com/th/', description: 'Essential rideshare app in Bangkok - much safer than tuk-tuks and street taxis', rating: 4.4 },
        { name: 'BTS SkyTrain', link: 'https://www.bts.co.th/', description: 'Official Bangkok SkyTrain app for safe elevated train travel with real-time info', rating: 4.3 },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for Thai communication and emergency situations', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'ช่วยด้วย! (Chuay duay!)',
          localLanguage: 'Thai'
        },
        {
          english: 'Call the police!',
          local: 'เรียกตำรวจ! (Riak tam-ruat!)',
          localLanguage: 'Thai'
        },
        {
          english: 'I need a doctor.',
          local: 'ฉันต้องการหมอ (Chan tong-gaan mor)',
          localLanguage: 'Thai'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'โรงพยาบาลใกล้ที่สุดอยู่ที่ไหน? (Rong-phayabaan glai tee-sut yoo tee-nai?)',
          localLanguage: 'Thai'
        },
        {
          english: 'I am lost.',
          local: 'ฉันหลงทาง (Chan long-taang)',
          localLanguage: 'Thai'
        },
        {
          english: 'Please leave me alone.',
          local: 'กรุณาปล่อยฉันไป (Ga-ru-naa bploy chan bpai)',
          localLanguage: 'Thai'
        },
        {
          english: 'I feel unsafe.',
          local: 'ฉันรู้สึกไม่ปลอดภัย (Chan roo-suek mai bplod-phai)',
          localLanguage: 'Thai'
        },
        {
          english: 'Can you help me?',
          local: 'คุณช่วยฉันได้ไหม? (Khun chuay chan dai mai?)',
          localLanguage: 'Thai'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Bangkok requires modest dress culture with strict requirements for temple visits - cover shoulders and knees completely at all religious sites',
        'Light, breathable, conservative clothing essential for Bangkok\'s tropical heat and humidity - cotton and linen fabrics recommended over synthetics',
        'Long pants or ankle-length skirts required for temple visits - many temples refuse entry for shorts, mini-skirts, or sleeveless tops',
        'Remove shoes before entering temples, traditional homes, and some local shops - carry socks to protect feet on hot surfaces',
        'Avoid tight-fitting, revealing, or see-through clothing in public areas - modesty shows respect for Thai Buddhist culture',
        'Bring lightweight scarf or sarong to cover shoulders quickly when needed for spontaneous temple visits or cultural sites'
      ],
      behaviorNorms: [
        'Wai greeting (hands together, slight bow) shows respect.',
        'Never touch someone\'s head or point feet at people/Buddha images.',
        'Remove shoes when entering temples, homes, and some shops.',
        'Dress modestly and behave respectfully at religious sites.',
        'Learn basic Thai phrases - greatly appreciated.',
        'Be patient and maintain composure - losing face is serious.',
        'Respect the monarchy - never criticize the royal family.',
        'Bargaining is expected at markets but be fair and respectful.',
        'Show respect to monks and Buddhist traditions.',
        'Eat with fork and spoon, not hands (except for fruit).'
      ],
      perception: [
        'Solo female travelers are warmly welcomed in Bangkok thanks to Thai culture\'s emphasis on hospitality (sanuk) and respect for visitors',
        'Thai people are generally helpful and protective of solo women travelers, often offering assistance with directions and local recommendations',
        'Restaurant and street food vendors are completely accustomed to solo diners - eating alone is socially acceptable and common practice',
        'Most Bangkok locals speak basic English and are patient with tourists - language barriers rarely create safety concerns or awkward situations',
        'Buddhist culture emphasizes kindness and compassion, creating generally respectful interactions with solo female travelers',
        'However, modest dress and respectful behavior are absolutely essential - revealing clothing can lead to unwanted attention or cultural offense',
        'Local women often provide helpful safety advice and cultural guidance to foreign solo travelers - embrace this community protective spirit'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['November-February'],
      events: 'Cool dry season offers best weather and fewer flooding risks. March-May is very hot, June-October is rainy season.'
    },
    emergencyInfo: {
      police: '191', fire: '199', medical: '1669', general: '191'
    },
    currency: {
      name: 'Thai Baht', code: 'THB', exchangeRate: {
      usd: 0.029,
      eur: 0.025,
      gbp: 0.022
    },
    exchangeTips: [
      'Use Bangkok Bank, Kasikorn, or Siam Commercial Bank ATMs for best rates',
      'Cards accepted at malls, hotels, restaurants - Visa and Mastercard preferred',
      'Carry cash for street food, markets, tuk-tuks, and small shops',
      'Airport exchange counters charge high fees - use city bank branches instead',
      'Banking hours: 8:30 AM-3:30 PM Monday-Friday, some branches open weekends',
      'SuperRich (orange and green) money changers offer better rates than banks',
      'Tipping culture: Not required but 10-20 baht appreciated for good service',
      'Many temples and local transport require cash - keep small bills handy',
      'Notify your bank before travel to avoid card blocks in Thailand'
    ],
    scamWarnings: [
        'Exchange money at banks or authorized money changers for best rates and avoid counterfeits.'
      ]
    },
    scamWarnings: [
      {
        title: 'Tuk-tuk and Taxi Overcharging',
        description: 'Always use the meter in taxis or negotiate price beforehand. Use Grab app for transparent pricing.',
        severity: 'high'
      },
      {
        title: 'Gem and Tailor Scams',
        description: 'Avoid unsolicited offers for cheap gems, suits, or shopping tours. These are usually scams.',
        severity: 'medium'
      },
      {
        title: 'Temple Closure Scam',
        description: 'Scammers claim temples are closed and offer alternative tours. Major temples are rarely closed.',
        severity: 'medium'
      },
      {
        title: 'Ping Pong Show Scams',
        description: 'Avoid aggressive touts offering adult shows. These often involve overcharging and unsafe situations.',
        severity: 'high'
      }
    ],
    languages: ['Thai', 'English (moderate level in tourist areas)'],
    daytimeSafetyPercent: 79.3,
    nighttimeSafetyPercent: 68.7,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bangkok',
    redFlags: [
      { label: 'Taxi/Tuk-tuk Overcharging', frequency: 'Very Common', icon: 'Car' },
      { label: 'Tourist Scams (Gems, Tailors)', frequency: 'Common', icon: 'AlertTriangle' },
      { label: 'Red-light District Issues', frequency: 'Occasional', icon: 'Shield' },
      { label: 'Flooding During Rainy Season', frequency: 'Seasonal', icon: 'Cloud' }
    ],
    culturalDos: [
      'Dress modestly, especially at temples.',
      'Learn basic Thai greetings.',
      'Respect Buddhist customs.',
      'Use the wai greeting.',
      'Remove shoes when required.'
    ],
    culturalDonts: [
      'Don\'t touch people\'s heads.',
      'Don\'t point feet at people or Buddha images.',
      'Don\'t criticize the royal family.',
      'Don\'t lose your temper publicly.',
      'Don\'t wear shoes in temples.'
    ],
    womensConfidenceScore: {
      score: 73.8,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Bangkok"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 84, source: 'Thailand Tourism Safety Report 2025', sourceUrl: 'https://www.tourismthailand.org/safety' },
      { label: 'Nightlife', confidence: 68, source: 'Solo Female Travel Thailand 2025', sourceUrl: 'https://www.solofemaleguide.com/thailand' },
      { label: 'Public Transport', confidence: 84, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Bangkok' },
      { label: 'Dining Alone', confidence: 87, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/bangkok/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Drink spiking in nightlife areas (Khao San, Sukhumvit)', 'Isolated sois (alleys) at night', 'Some taxi incidents (rare)'],
      reportingRate: 45,
      legalProtection: 'Strong legal protections. 2025 Tourist Police received specialized training on sexual assault response. Victim-centered approach implemented. Embassy support available.',
      supportResources: [
        'Tourist Police: 1155 (English-speaking, 2025 specialized training)',
        'One Stop Crisis Centers (OSCC): Available at Government hospitals',
        'Police General Hospital Bangkok: No police referral required',
        'British Embassy Bangkok: +66 (0) 2 305 8333 (confidential support)',
        'Emergency Services: 191 (Police), 199 (Fire), 1669 (Medical)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Bumrungrad International Hospital',
          address: '33 Sukhumvit 3, Bangkok 10110',
          phone: '+66 2 667 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'International Patients', 'Women\'s Health'],
          link: 'https://www.bumrungrad.com/'
        }
      ],
      pharmacies: [
        {
          name: 'Boots Pharmacy',
          address: 'Multiple locations in shopping malls',
          phone: '+66 2 250 0909',
          hours: 'Daily 10:00-22:00',
          emergency: false,
          link: 'https://www.boots.co.th/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Bangkok: +66 2 667 1000',
          'Bangkok Women\'s Clinic: +66 2 252 8888'
        ],
        gynecologists: [
          'Dr. Siriporn - Bumrungrad Hospital: +66 2 667 1000'
        ],
        emergencyContraception: [
          'Available at major pharmacies',
          'Available at international hospitals'
        ],
        sanitaryProducts: [
          'Available at all convenience stores and pharmacies',
          'International brands available in shopping malls'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Japanese encephalitis if visiting rural areas',
        'Typhoid recommended',
        'Yellow fever if coming from affected countries'
      ],
      healthRisks: [
        'Dengue fever - use mosquito repellent',
        'Food poisoning - eat at busy, clean restaurants',
        'Heat exhaustion - stay hydrated',
        'Air pollution - consider masks during high pollution days'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Bangkok',
          address: '95 Wireless Road, Bangkok 10330',
          phone: '+66 2 205 4000',
          link: 'https://th.usembassy.gov/'
        },
        {
          name: 'British Embassy Bangkok',
          address: '14 Wireless Road, Bangkok 10330',
          phone: '+66 2 305 8333',
          link: 'https://www.gov.uk/world/organisations/british-embassy-bangkok'
        },
        {
          name: 'German Embassy Bangkok',
          address: '9 South Sathorn Road, Bangkok 10120',
          phone: '+66 2 287 9000',
          link: 'https://bangkok.diplo.de/'
        },
        {
          name: 'French Embassy Bangkok',
          address: '35 Charoen Krung Road, Bangkok 10500',
          phone: '+66 2 657 5100',
          link: 'https://th.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Bangkok',
          address: '193 Rajadamri Road, Bangkok 10330',
          phone: '+66 2 650 9900',
          link: 'https://www.exteriores.gob.es/embajadas/bangkok'
        },
        {
          name: 'Australian Embassy Bangkok',
          address: '181 Wireless Road, Bangkok 10330',
          phone: '+66 2 344 6300',
          link: 'https://thailand.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Bangkok',
          address: '15th Floor, Abdulrahim Place, 990 Rama IV Road, Bangkok 10500',
          phone: '+66 2 636 0540',
          link: 'https://www.canadainternational.gc.ca/thailand-thailande/'
        },
        {
          name: 'Netherlands Embassy Bangkok',
          address: '15 Soi Tonson, Ploenchit Road, Bangkok 10330',
          phone: '+66 2 309 5200',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/thailand'
        },
        {
          name: 'Danish Embassy Bangkok',
          address: '10 Soi Attakarnprasit, South Sathorn Road, Bangkok 10120',
          phone: '+66 2 213 2021',
          link: 'https://thailand.um.dk/'
        },
        {
          name: 'Swiss Embassy Bangkok',
          address: '35 Wireless Road, Bangkok 10330',
          phone: '+66 2 674 6900',
          link: 'https://www.eda.admin.ch/bangkok'
        },
        {
          name: 'Indian Embassy Bangkok',
          address: '46 Prasart Road, Bangkok 10110',
          phone: '+66 2 258 0300',
          link: 'https://www.indianembassybangkok.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Bangkok',
        address: '95 Wireless Road, Bangkok 10330',
        phone: '+66 2 205 4000',
        email: 'acsbkk@state.gov',
        link: 'https://th.usembassy.gov/'
      },
      womensRights: [
        'Limited legal protections compared to Western standards',
        'Traditional gender roles still prevalent',
        'Domestic violence laws exist but enforcement varies',
        'Foreign women have same legal rights as Thai women'
      ],
      legalSupport: [
        'Tourist Police: 1155 (English-speaking)',
        'Legal Aid Thailand: +66 2 287 1500',
        'English-speaking lawyers through embassy'
      ],
      reportingProcedures: [
        'Report crimes to Tourist Police (1155) - English-speaking',
        'Regular police: 191',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'BTS Skytrain',
          safety: 9.0,
          recommendations: ['Very safe and efficient', 'Women-only cars during rush hour'],
          companies: ['BTS'],
          link: 'https://www.bts.co.th/'
        },
        {
          type: 'MRT Subway',
          safety: 8.8,
          recommendations: ['Clean, modern, and secure'],
          companies: ['MRT'],
          link: 'https://www.bangkokmetro.co.th/'
        },
        {
          type: 'Grab',
          safety: 8.7,
          recommendations: ['Use for all taxi needs', 'Transparent pricing'],
          companies: ['Grab'],
          link: 'https://www.grab.com/'
        },
        {
          type: 'Airport Rail Link (ARL)',
          safety: 9.2,
          recommendations: ['Direct airport connection', 'Fast and reliable', 'Very safe for solo travelers'],
          companies: ['SRT'],
          link: 'https://www.srtet.co.th/'
        },
        {
          type: 'Chao Phraya Express Boats',
          safety: 8.5,
          recommendations: ['Scenic river transport', 'Generally safe during day', 'Watch belongings at piers'],
          companies: ['CPEB'],
          link: 'https://www.chaophrayaexpressboat.com/'
        },
        {
          type: 'Official Taxis (Meter)',
          safety: 7.8,
          recommendations: ['Insist on meter use', 'Avoid street taxis without meters', 'Get receipt when possible'],
          companies: ['Bangkok Taxi Cooperative'],
          link: 'https://www.bangkoktaxi.com/'
        },
        {
          type: 'Tuk-Tuks',
          safety: 6.5,
          recommendations: ['Negotiate price beforehand', 'Avoid isolated areas', 'Tourist experience but use caution'],
          companies: ['Independent operators'],
          link: 'https://www.bangkok.com/transportation/tuk-tuk'
        }
      ],
      nightTravel: {
        safety: 7.0,
        warnings: [
          'Some taxi drivers may overcharge at night',
          'Avoid walking alone in less touristed areas',
          'Red-light districts can be unsafe for solo women'
        ],
        alternatives: [
          'Use Grab ride-sharing for late night transport',
          'BTS runs until midnight',
          'Stay in well-lit, busy areas',
          'Travel with others when possible'
        ]
      },
      verifiedProviders: [
        {
          name: 'BTS',
          type: 'Skytrain',
          contact: '+66 2 617 6000',
          safety: 9.0
        },
        {
          name: 'Grab',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.7
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception and security',
        'Electronic key card access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances'
      ],
      safeNeighborhoods: [
        'Sukhumvit',
        'Silom',
        'Siam',
        'Thonglor',
        'Phrom Phong'
      ],
      womensOnly: [
        {
          name: 'Lub d Bangkok Silom',
          type: 'Hostel',
          features: ['Female dorms', 'Modern design', 'Central location'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.4,
          safety: 8.2,
          comments: 'Felt safe in Sukhumvit area. Great transport connections and helpful staff.',
          date: '2025-01-18'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally reliable',
        'Free WiFi in shopping malls and cafes',
        'Use VPN for sensitive data',
        'Be cautious with public WiFi'
      ],
      digitalScams: [
        'Fake booking websites',
        'Romance scams on dating apps',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Thailand',
        'ExpressVPN - good for bypassing restrictions',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'Limited data protection laws',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Taxi Overcharging',
          location: 'Airport and tourist areas',
          date: '2025-01-19',
          description: 'Multiple reports of taxi drivers refusing to use meters',
          severity: 'medium'
        },
        {
          type: 'Gem Scam',
          location: 'Near major temples',
          date: '2025-01-17',
          description: 'Tourists approached with fake gem deals',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use Grab instead of street taxis to avoid overcharging',
          author: 'Solo Traveler',
          date: '2025-01-20',
          upvotes: 243
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Thailand is generally safe for travelers. Exercise normal precautions and be aware of common scams targeting tourists.',
      reason: 'Generally safe with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/thailand-travel-advisory.html',
      soloTravelerAdvice: [
        'Great destination for solo female travelers',
        'Cultural awareness is important',
        'Use official transport (Grab, BTS, MRT)',
        'Dress modestly and respect local customs'
      ]
    },
    crimeStatistics: {
      violentCrime: 7.2, // per 100,000 (2024-2025 showing improvement)
      propertyCrime: 1850, // per 100,000 (2024-2025 data showing decline)
      sexualAssault: 4.8, // per 100,000 (2025 data - very low harassment rates confirmed)
      kidnapping: 0.2, // per 100,000 (2024-2025 data)
      source: 'Thai National Police & Numbeo 2025 (Crime Index: 38.63)',
      year: 2025
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft bag',
        'Portable WiFi device',
        'Mosquito repellent',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'Grab',
          purpose: 'Essential for transport and delivery',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Tourist Police',
          number: '1155',
          type: 'Tourist Assistance (English-speaking)'
        },
        {
          name: 'Emergency Services',
          number: '191',
          type: 'Police'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Use Women-Only Train Cars During Rush Hour',
        description: 'BTS and MRT offer women-only carriages during peak hours (7-9 AM, 5-8 PM). Look for pink signs and female security guards at designated areas. This provides extra comfort and safety during crowded commutes.',
        severity: 'high',
        sourceName: 'Bangkok Mass Transit System',
        sourceUrl: 'https://www.bts.co.th/'
      },
      {
        title: 'Download Offline Temple Etiquette Guide',
        description: 'Save offline guides showing proper temple dress codes and behavior. Many solo travelers get turned away from sacred sites for improper attire. Carry a sarong or scarf to cover shoulders/legs when needed.',
        severity: 'high',
        sourceName: 'Tourism Authority of Thailand',
        sourceUrl: 'https://www.tourismthailand.org/'
      },
      {
        title: 'Master the Art of "Kreng Jai" (Considerate Behavior)',
        description: 'Thai culture values indirect communication and avoiding confrontation. If feeling uncomfortable, smile politely and move to a busier area rather than direct confrontation. This cultural awareness keeps you safer.',
        severity: 'medium',
        sourceName: 'Thai Cultural Center',
        sourceUrl: 'https://www.thaiembassy.sg/'
      },
      {
        title: 'Use 7-Eleven as Your Safety Net',
        description: 'With over 10,000 locations, 7-Elevens are everywhere and open 24/7. Use them as safe meeting points, for emergencies, ATM access, and bathroom breaks. Staff often speak basic English and can help in emergencies.',
        severity: 'medium',
        sourceName: 'CP All Company',
        sourceUrl: 'https://www.cpall.co.th/'
      },
      {
        title: 'Learn the "Royal Anthem" Timing',
        description: 'At 8 AM and 6 PM daily, everything stops for the royal anthem (2 minutes). Be prepared to stand respectfully wherever you are. This cultural knowledge prevents awkward situations and shows respect.',
        severity: 'low',
        sourceName: 'Thai Government',
        sourceUrl: 'https://www.thaigov.go.th/'
      },
      {
        title: 'Trust Your Instincts with Street Food',
        description: 'Choose street food stalls with high turnover (busy with locals), visible cooking, and proper food storage. Watch for ice quality and avoid pre-cut fruits. Your stomach safety is crucial for solo travel enjoyment.',
        severity: 'medium',
        sourceName: 'Bangkok Street Food Guide 2025',
        sourceUrl: 'https://www.bangkokstreetfood.guide/'
      }
    ],
    culturalSensitivity: {
      culturalDos: [
        'Always remove shoes when entering temples and traditional homes - this is fundamental respect',
        'Dress modestly and cover shoulders/knees at religious sites - bring a sarong for coverage',
        'Use the Wai greeting (hands together, slight bow) - it shows respect and is deeply appreciated',
        'Show reverence for monks and Buddha images - they are central to Thai culture',
        'Respect the King and royal family - they are deeply beloved and revered in Thai society'
      ],
      culturalDonts: [
        'Don\'t touch someone\'s head, even children - the head is considered sacred in Thai culture',
        'Don\'t point feet at people or Buddha images - feet are considered the dirtiest part of the body',
        'Don\'t criticize or joke about the monarchy - it\'s illegal and deeply offensive to Thai people',
        'Don\'t touch or hand objects directly to monks if you\'re a woman - use a cloth or have a man do it',
        'Don\'t raise your voice or show anger publicly - Thais value calm, controlled behavior'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$25 - $60 USD / day',
        description: 'Bangkok offers excellent value with great food, accommodation, and transport options.',
        tip: 'Budget travelers can live comfortably while mid-range provides luxury at low cost.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$8-20',
          safetyNote: 'Choose hostels in safe areas like Sukhumvit or Silom',
          safetyLevel: 'medium-high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$30-60',
          safetyNote: 'Excellent security and amenities',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$80+',
          safetyNote: 'World-class security and service',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'BTS/MRT',
          cost: '$1-3/ride',
          safetyDescription: 'Very safe and efficient',
          safetyLevel: 'high'
        },
        {
          method: 'Grab',
          cost: '$2-8/ride',
          safetyDescription: 'Safe with transparent pricing',
          safetyLevel: 'high'
        },
        {
          method: 'Tuk-tuk',
          cost: '$3-10/ride',
          safetyDescription: 'Negotiate price beforehand, fun but watch for overcharging',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Generally safe during day, use skywalks when available',
          safetyLevel: 'medium-high'
        }
      ],
      budgetTips: [
        'Use BTS/MRT day passes for transport savings',
        'Eat at street food stalls and local restaurants for authentic experience',
        'Shop at weekend markets like Chatuchak for bargains',
        'Many temples and attractions are free or very low-cost',
        'Stay in areas like Sukhumvit or Silom for better value and safety',
        'Use Grab instead of taxis to avoid overcharging',
        'Visit during shoulder season (March-May) for better accommodation deals'
      ]
    },
  youtubeVideos: [
    {
      videoId: "SiOFhvY2s1U"
    },
    {
      videoId: "rlJKlVROgo4"
    }
  ]
};

export default bangkok;