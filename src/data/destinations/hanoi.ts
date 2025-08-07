import { Destination } from './types';

const hanoi: Destination = {
    city: 'Hanoi',
    country: 'Vietnam',
    continent: 'Asia',
    countryCode: 'vn',
    overallScore: 7.8,
    nightSafety: 7.3,
    publicTransit: 7.5,
    walkingAlone: 7.6,
    tags: ['cultural', 'historic'],
    bgColor: 'bg-yellow-25',
    reviewCount: 267,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low-medium',
    safetyBreakdown: {
      nightSafety: {
        score: 7.3,
        context: 'Hanoi is generally safe at night, especially in the Old Quarter and tourist areas. Streets are busy until late with food vendors and locals. However, some areas can have poor lighting and solo female travelers should avoid deserted alleys. Petty crime like bag snatching can occur but violent crime is rare.'
      },
      publicTransit: {
        score: 7.5,
        context: 'Public buses are crowded but generally safe. Grab bike-taxis are popular and reliable. The city lacks a metro system currently, but buses cover most areas. Traffic is chaotic with many motorbikes, so crossing streets requires caution. Taxis should use meters or be booked through apps.'
      },
      walkingAlone: {
        score: 7.6,
        context: 'Walking alone is quite safe in Hanoi, especially during daytime. The Old Quarter is pedestrian-friendly with constant foot traffic. However, sidewalks can be occupied by parked motorbikes, forcing pedestrians into traffic. Be vigilant of motorbike traffic and watch for uneven pavement.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Quarter (Hoan Kiem)',
          description: 'Historic heart of Hanoi with narrow streets, shops, and restaurants. Very safe with constant activity day and night. Heavy tourist police presence and well-lit streets. Perfect for solo female travelers.'
        },
        {
          name: 'French Quarter',
          description: 'Upscale area with wide boulevards, colonial architecture, and good lighting. Safe and well-maintained with government buildings and embassies. Quieter than Old Quarter but very secure.'
        },
        {
          name: 'Tay Ho (West Lake)',
          description: 'Expat-heavy area with cafes, restaurants, and lakeside walks. Very safe with international community and good infrastructure. Popular with digital nomads and long-term travelers.'
        },
        {
          name: 'Ba Dinh District',
          description: 'Government district with Ho Chi Minh Mausoleum and presidential palace. Very safe with heavy security presence. Wide streets and good lighting, though less nightlife.'
        },
        {
          name: 'Dong Da District',
          description: 'Residential area with temples and local markets. Safe family neighborhood with authentic Vietnamese atmosphere. Good for experiencing local culture safely.'
        }
      ],
      caution: ['Long Bien area at night', 'Gia Lam district after dark', 'Isolated alleyways in Old Quarter'],
      avoid: ['Remote suburban areas alone', 'Construction zones', 'Empty parks after 10 PM']
    },
    accommodations: [
      {
        name: 'Hanoi La Siesta Hotel & Spa',
        type: 'hotel',
        features: ['Central location', 'Female-friendly', '24/7 security'],
        rating: 8.6,
        notes: 'Boutique hotel in Old Quarter with excellent safety record and female-friendly staff. Highly rated by solo travelers.',
        link: 'https://www.hanoilasiesta.com/'
      },
      {
        name: 'Thuy Sakura Hotel',
        type: 'hotel',
        features: ['Safe area', 'Women-friendly', 'Good reviews'],
        rating: 8.4,
        notes: 'Family-run hotel near Hoan Kiem Lake with excellent safety measures and helpful staff for solo female guests.',
        link: 'https://www.thuysakura.com/'
      },
      {
        name: 'Vietnam Backpacker Hostels',
        type: 'hostel',
        features: ['Female dorms', 'Social atmosphere', 'Central'],
        rating: 7.8,
        notes: 'Popular backpacker chain with female dorms, good security, and social environment in Old Quarter.',
        link: 'https://vietnambackpackerhostels.com/'
      },
      {
        name: 'Mai\'s Red Dragon Hostel',
        type: 'hostel',
        features: ['Ladies only rooms', 'Rooftop area', 'Safe location'],
        rating: 8.2,
        notes: 'Boutique hostel with ladies-only rooms, rooftop terrace, and excellent location in Old Quarter.',
        link: 'https://www.maisreddragon.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress modestly - cover shoulders and knees in temples
• Light, breathable clothing for humid weather
• Avoid revealing clothing to reduce attention
• Bring layers for air-conditioned spaces
• Comfortable walking shoes for uneven sidewalks`,
      firstTimers: `• Download Grab app for safe transportation
• Cross streets carefully - traffic doesn't stop for pedestrians
• Eat street food from busy stalls with high turnover
• Keep passport copy - originals required for hotel check-in
• Learn basic Vietnamese phrases for emergencies`,
      apps: [
        'Grab',
        'Google Translate',
        'Tourlina',
        'Foody',
        'Maps.me'
      ],
      appLinks: [
        { name: 'Grab', link: 'https://www.grab.com/', description: 'Safe ride-hailing and food delivery' },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for communication' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'Female travel companion app' },
        { name: 'Foody', link: 'https://www.foody.vn/', description: 'Restaurant reviews and recommendations' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with Vietnamese places' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Cứu tôi!',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Call the police!',
          local: 'Gọi công an!',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'I need a doctor.',
          local: 'Tôi cần bác sĩ.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Bệnh viện gần nhất ở đâu?',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'I am lost.',
          local: 'Tôi bị lạc.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Xin hãy để tôi yên.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Tôi cảm thấy không an toàn.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Can you help me?',
          local: 'Bạn có thể giúp tôi không?',
          localLanguage: 'Vietnamese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Vietnamese culture is conservative. Dress modestly, especially when visiting temples, government buildings, or local neighborhoods. Avoid revealing clothing, short shorts, or low necklines. Business casual is appropriate for most situations. Remove shoes when entering homes and some restaurants.',
      behaviorNorms: [
        'Bow slightly when greeting elders or officials.',
        'Use both hands when giving or receiving business cards or gifts.',
        'Remove shoes when entering homes, temples, and some restaurants.',
        'Avoid pointing with your finger - use your whole hand.',
        'Don\'t touch people\'s heads, especially children.',
        'Show respect for Ho Chi Minh and Vietnamese history.',
        'Bargaining is expected in markets but be respectful.',
        'Tipping is not traditional but appreciated in tourist areas.',
        'Public displays of affection are generally discouraged.',
        'Be patient with service - punctuality may be flexible.'
      ],
      perception: 'Solo female travelers are generally safe in Hanoi, though you may attract curious looks and questions about being alone. Vietnamese people are typically helpful and protective of foreign women. Some men may be overly helpful, but harassment is uncommon. Local women often approach solo travelers to offer assistance.',
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Cooler dry season is most comfortable. Avoid summer heat and heavy rains.'
    },
    emergencyInfo: {
      police: '113', fire: '114', medical: '115', general: '113'
    },
    currency: {
      name: 'Vietnamese Dong', code: 'VND', exchangeRate: {
      usd: 24385,
      eur: 20765,
      gbp: 18012
    }, scamWarnings: [
        'Use official bank ATMs like Vietcombank or BIDV. Avoid currency exchange on the street - rates may be deceptive.'
      ]
    },
    scamWarnings: [
      {
        title: 'Motorbike Taxi Overcharging',
        description: 'Some motorbike taxi drivers may quote inflated prices to tourists. Always negotiate or use Grab for fixed pricing.',
        severity: 'medium'
      },
      {
        title: 'Fake Silk and Goods',
        description: 'Street vendors may sell fake silk, coffee, or handicrafts claiming they\'re authentic. Shop at reputable stores for genuine products.',
        severity: 'low'
      },
      {
        title: 'Restaurant Bill Padding',
        description: 'Some restaurants may add items you didn\'t order to the bill. Check your receipt carefully and ask about unfamiliar charges.',
        severity: 'low'
      },
      {
        title: 'Gem and Jewelry Scams',
        description: 'Avoid buying expensive jewelry or gems from street vendors or unverified shops. Prices are often inflated and quality questionable.',
        severity: 'medium'
      }
    ],
    languages: ['Vietnamese', 'English (limited - mainly in tourist areas)', 'French (some older residents)'],
    daytimeSafetyPercent: 78.6,
    nighttimeSafetyPercent: 65.2,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Hanoi',
    redFlags: [
      { label: 'Traffic Safety', frequency: 'Very Common', icon: 'Car' },
      { label: 'Petty Theft', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Tourist Scams', frequency: 'Occasional', icon: 'AlertTriangle' },
      { label: 'Food Safety Issues', frequency: 'Common', icon: 'Utensils' },
    ],
    culturalDos: [
      'Dress modestly in temples and local areas.',
      'Remove shoes when entering homes.',
      'Bow slightly when greeting elders.',
      'Use both hands for business cards.',
      'Respect Vietnamese history and culture.'
    ],
    culturalDonts: [
      "Don't touch people's heads.",
      "Don't point with your index finger.",
      "Don't wear revealing clothing.",
      "Don't ignore traffic when crossing streets.",
      "Don't be impatient with language barriers."
    ],
    womensConfidenceScore: {
      score: 71.4,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Hanoi"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 82, source: 'Vietnam Solo Female Travel 2025', sourceUrl: 'https://www.solofemaltravel.com/vietnam-safety/' },
      { label: 'Street Food', confidence: 68, source: 'Travel Safe Vietnam 2024', sourceUrl: 'https://travelsafe-abroad.com/vietnam/' },
      { label: 'Public Transport', confidence: 74, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Hanoi' },
      { label: 'Nightlife', confidence: 75, source: 'Hanoi Nightlife Safety 2025', sourceUrl: 'https://www.vietnamonline.com/hanoi-nightlife-safety/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low-medium',
      commonLocations: ['Crowded buses', 'Tourist markets', 'Some nightlife areas', 'Motorbike taxi rides'],
      reportingRate: 28,
      legalProtection: 'Vietnam has anti-harassment laws but enforcement varies. Tourist police are generally more responsive to foreign visitors than regular police.',
      supportResources: [
        'Tourist Police Hanoi: +84 24 3825 2885',
        'Vietnam Women\'s Union: +84 24 3943 3033',
        'Hanoi Family Medical Practice: +84 24 3843 0748'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hanoi Family Medical Practice',
          address: '298 Kim Ma Street, Ba Dinh District',
          phone: '+84 24 3843 0748',
          emergency: true,
          specialties: ['International Standards', 'English Speaking', 'Emergency Medicine'],
          link: 'https://www.vietnammedicalpractice.com/'
        },
        {
          name: 'Bach Mai Hospital',
          address: '78 Giai Phong Street, Dong Da District',
          phone: '+84 24 3869 3731',
          emergency: true,
          specialties: ['General Medicine', 'Emergency Care', 'Local Hospital'],
          link: 'https://www.bachmai.gov.vn/'
        },
        {
          name: 'Saint Paul General Hospital',
          address: '12 Chu Van An Street, Ba Dinh District',
          phone: '+84 24 3577 1100',
          emergency: true,
          specialties: ['Private Healthcare', 'International Standards', 'English Speaking'],
          link: 'https://www.stpaul.com.vn/'
        }
      ],
      pharmacies: [
        {
          name: 'Guardian Pharmacy',
          address: 'Multiple locations in Hanoi',
          phone: '+84 24 3934 5678',
          hours: 'Daily 8:00-22:00',
          emergency: false,
          link: 'https://www.guardian.com.vn/'
        },
        {
          name: 'Pharmacity',
          address: 'Various locations citywide',
          phone: '+84 28 7306 6066',
          hours: 'Daily 7:00-23:00',
          emergency: false,
          link: 'https://www.pharmacity.vn/'
        }
      ],
      womensHealth: {
        clinics: [
          'Hanoi Family Medical Practice Women\'s Health: +84 24 3843 0748',
          'Marie Stopes Vietnam: +84 24 3936 5788',
          'National Hospital of Obstetrics and Gynecology: +84 24 3858 2700'
        ],
        gynecologists: [
          'Dr. Nguyen Thu Ha - Family Medical Practice: +84 24 3843 0748',
          'Dr. Le Thi Minh - Saint Paul Hospital: +84 24 3577 1100'
        ],
        emergencyContraception: [
          'Available at major pharmacies with prescription',
          'International clinics provide emergency contraception',
          'Marie Stopes clinics offer reproductive health services'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands in tourist areas',
          'Local brands widely available and affordable'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Japanese Encephalitis if traveling to rural areas',
        'Typhoid vaccination recommended',
        'Routine vaccinations should be up to date',
        'Consider malaria prophylaxis for rural/jungle areas'
      ],
      healthRisks: [
        'Dengue fever during rainy season',
        'Food poisoning from street food',
        'Air pollution can affect respiratory conditions',
        'Traffic accident risk due to chaotic roads',
        'Water quality varies - stick to bottled water'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Hanoi',
        address: '7 Lang Ha Street, Dong Da District',
        phone: '+84 24 3850 5000',
        email: 'HanoiACS@state.gov',
        emergency: '+84 24 3850 5000',
        link: 'https://vn.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Hanoi',
          address: '4 Hai Ba Trung Street, Hoan Kiem District',
          phone: '+84 24 3936 0500',
          link: 'https://www.gov.uk/world/organisations/british-embassy-hanoi'
        },
        {
          name: 'Australian Embassy Hanoi',
          address: '8 Dao Tan Street, Ba Dinh District',
          phone: '+84 24 3774 0100',
          link: 'https://vietnam.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Hanoi',
          address: '31 Hung Vuong Street, Ba Dinh District',
          phone: '+84 24 3734 5000',
          link: 'https://www.canadainternational.gc.ca/vietnam/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Ho Chi Minh City',
        address: '4 Le Duan Boulevard, District 1, Ho Chi Minh City',
        phone: '+84 28 3520 4200',
        email: 'HCMCACSInfoEmail@state.gov',
        link: 'https://vn.usembassy.gov/embassy-consulates/ho-chi-minh-city/'
      },
      womensRights: [
        'Vietnam has progressive gender equality laws',
        'Women have equal rights in employment and education',
        'Domestic violence is criminalized',
        'Sexual harassment laws exist but enforcement varies',
        'Women\'s Union provides support and advocacy'
      ],
      legalSupport: [
        'Vietnam Bar Federation: +84 24 3943 2569',
        'Legal Aid Department: +84 24 3734 5234',
        'Tourist Police: +84 24 3825 2885',
        'Contact embassy for serious legal issues'
      ],
      reportingProcedures: [
        'Call 113 for police emergencies',
        'Report to tourist police for tourist-related crimes',
        'Keep passport available for police reports',
        'Contact embassy for serious incidents',
        'Request interpreter if needed'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Grab',
          safety: 8.4,
          recommendations: ['Use official app', 'Share ride details', 'Verify driver and vehicle'],
          companies: ['Grab'],
          link: 'https://www.grab.com/vn/en/'
        },
        {
          type: 'Mai Linh Taxi',
          safety: 7.8,
          recommendations: ['Official taxi company', 'Insist on meter use', 'Keep receipt'],
          companies: ['Mai Linh Group'],
          link: 'https://mailinh.vn/'
        },
        {
          type: 'Public Bus',
          safety: 7.2,
          recommendations: ['Watch for pickpockets', 'Avoid rush hour', 'Keep belongings secure'],
          companies: ['TRANSERCO'],
          link: 'http://www.transerco.com.vn/'
        },
        {
          type: 'Cyclo (for short distances)',
          safety: 6.5,
          recommendations: ['Agree on price first', 'Use in tourist areas only', 'Daylight only'],
          companies: ['Independent operators'],
          link: 'Arrange through hotels'
        }
      ],
      nightTravel: {
        safety: 7.0,
        warnings: [
          'Avoid walking alone in poorly lit areas',
          'Use Grab instead of walking at night',
          'Be cautious of motorbike traffic',
          'Stay in well-traveled areas'
        ],
        alternatives: [
          'Grab available 24/7 in central areas',
          'Mai Linh taxis operate all night',
          'Hotel pickup services often available',
          'Stay near Old Quarter for walkable nightlife'
        ]
      },
      verifiedProviders: [
        {
          name: 'Grab Vietnam',
          type: 'Ride-hailing',
          contact: 'App-based booking',
          safety: 8.4
        },
        {
          name: 'Mai Linh Taxi',
          type: 'Traditional Taxi',
          contact: '+84 24 3833 3333',
          safety: 7.8
        },
        {
          name: 'Hanoi Public Bus',
          type: 'Public Transport',
          contact: '+84 24 3821 4539',
          safety: 7.2
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk or key code access',
        'Electronic locks on rooms',
        'CCTV in common areas',
        'Secure luggage storage',
        'Well-lit entrances and corridors',
        'Emergency contact information provided'
      ],
      safeNeighborhoods: [
        'Old Quarter (Hoan Kiem)',
        'French Quarter',
        'Tay Ho (West Lake)',
        'Ba Dinh District',
        'Dong Da District'
      ],
      womensOnly: [
        {
          name: 'Mai\'s Red Dragon Hostel',
          type: 'Hostel',
          features: ['Ladies-only rooms', 'Central location', 'Safe environment'],
          rating: 4.1
        },
        {
          name: 'Vietnam Backpacker Hostels',
          type: 'Hostel',
          features: ['Female dorms available', 'Social atmosphere', 'Security measures'],
          rating: 3.9
        }
      ],
      userReviews: [
        {
          rating: 4.3,
          safety: 8.2,
          comments: 'Felt very safe in Old Quarter. Hotel staff was helpful and area was busy even at night.',
          date: '2025-01-19'
        },
        {
          rating: 4.1,
          safety: 7.8,
          comments: 'Good security measures and central location. Would recommend for solo female travelers.',
          date: '2025-01-16'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel and cafe WiFi generally reliable in central areas',
        'Avoid public WiFi for sensitive transactions',
        'Use VPN as some websites are blocked',
        'Internet cafes available but security varies',
        'Mobile data plans widely available and affordable'
      ],
      digitalScams: [
        'Fake booking websites for hotels and tours',
        'Social media scams targeting tourists',
        'Phishing emails about visa requirements',
        'Romance scams on dating platforms',
        'Fake charity websites and appeals'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Vietnam',
        'NordVPN - reliable for blocked content',
        'ProtonVPN - good privacy protection',
        'VPN essential for accessing some websites'
      ],
      dataProtection: [
        'Vietnam has developing data protection laws',
        'Be cautious sharing personal information',
        'Use secure payment methods when possible',
        'Keep digital copies of important documents',
        'Some websites and social platforms may be restricted'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Motorbike Theft',
          location: 'Old Quarter',
          date: '2025-01-21',
          description: 'Increase in motorbike and bicycle theft in tourist areas',
          severity: 'medium'
        },
        {
          type: 'Overcharging Scam',
          location: 'Dong Xuan Market',
          date: '2025-01-18',
          description: 'Vendors overcharging tourists for souvenirs and food',
          severity: 'low'
        },
        {
          type: 'Food Poisoning',
          location: 'Street food vendors',
          date: '2025-01-15',
          description: 'Several tourists reported food poisoning from street food',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Always look both ways multiple times before crossing streets - traffic doesn\'t stop',
          author: 'Experienced Traveler',
          date: '2025-01-20',
          upvotes: 67
        },
        {
          tip: 'Eat street food from busy stalls with high turnover for freshness',
          author: 'Food Blogger',
          date: '2025-01-18',
          upvotes: 54
        },
        {
          tip: 'Download Google Translate with Vietnamese offline package',
          author: 'Solo Female Traveler',
          date: '2025-01-16',
          upvotes: 43
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise normal precautions in Vietnam. Be aware of petty crime and traffic safety in urban areas.',
      reason: 'Standard precautions due to traffic safety and occasional petty crime.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/vietnam-travel-advisory.html',
      soloTravelerAdvice: [
        'Generally safe for solo female travelers with proper precautions',
        'Stay in central areas like Old Quarter or French Quarter',
        'Use Grab for transportation instead of motorbike taxis',
        'Be extremely careful when crossing streets',
        'Learn basic Vietnamese phrases for better interactions'
      ]
    },
    crimeStatistics: {
      violentCrime: 9.2,
      propertyCrime: 1867,
      sexualAssault: 7.1,
      kidnapping: 0.2,
      source: 'Vietnam Ministry of Public Security',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Money belt for valuables',
        'Portable phone charger',
        'Air pollution mask',
        'Basic first aid kit',
        'Emergency contact card'
      ],
      safetyApps: [
        {
          name: 'Grab',
          purpose: 'Safe ride-hailing and food delivery',
          rating: 4.6
        },
        {
          name: 'Google Translate',
          purpose: 'Essential for communication',
          rating: 4.5
        },
        {
          name: 'Foody',
          purpose: 'Restaurant reviews and safety ratings',
          rating: 4.2
        }
      ],
      emergencyContacts: [
        {
          name: 'Police Emergency',
          number: '113',
          type: 'Police'
        },
        {
          name: 'Medical Emergency',
          number: '115',
          type: 'Medical'
        },
        {
          name: 'Tourist Police',
          number: '+84 24 3825 2885',
          type: 'Tourist Support'
        },
        {
          name: 'Family Medical Practice',
          number: '+84 24 3843 0748',
          type: 'International Medical'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Street Crossing in Hanoi',
        description: 'Traffic in Hanoi is chaotic. Walk slowly and predictably across streets - motorbikes will go around you. Never run or stop suddenly.',
        severity: 'high',
        sourceName: 'Vietnam Travel Safety',
        sourceUrl: 'https://vietnamtravelsafety.com/hanoi-street-crossing'
      },
      {
        title: 'Choose Street Food Carefully',
        description: 'Eat at busy stalls with high turnover. Avoid raw vegetables and ice unless from reputable places. Stick to hot, freshly cooked food.',
        severity: 'medium',
        sourceName: 'Travel Health Vietnam',
        sourceUrl: 'https://www.travelhealthpro.org.uk/countries/vietnam'
      },
      {
        title: 'Use Grab for Safe Transportation',
        description: 'Grab is much safer than random motorbike taxis or unmarked vehicles. The app provides driver details and GPS tracking.',
        severity: 'medium',
        sourceName: 'Solo Female Travel Vietnam',
        sourceUrl: 'https://www.solofemaltravel.com/vietnam-safety/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$20 - $35 USD / day',
        description: 'Covers accommodation, meals, and transport at a comfortable level for solo travelers.',
        tip: 'Vietnam offers excellent value but budget extra for safer transport options.'
      },
      accommodation: [
        {
          type: 'Hostel with Female Dorms',
          avgCost: '$6-12',
          safetyNote: 'Best budget option with security and social atmosphere',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$12-25',
          safetyNote: 'Good middle option in safe central areas',
          safetyLevel: 'high'
        },
        {
          type: 'Boutique Hotel',
          avgCost: '$25-45',
          safetyNote: 'Safest option with best security features',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Grab Ride',
          cost: '$1-4/ride',
          safetyDescription: 'Safest option with driver verification and tracking',
          safetyLevel: 'high'
        },
        {
          method: 'Public Bus',
          cost: '$0.30-0.50/ride',
          safetyDescription: 'Cheap but crowded, watch for pickpockets',
          safetyLevel: 'medium'
        },
        {
          method: 'Motorbike Taxi',
          cost: '$0.50-2/ride',
          safetyDescription: 'Convenient but less safe, use reputable drivers',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Generally safe but traffic is dangerous',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Use Grab instead of street motorbike taxis for safety',
        'Stay in Old Quarter for walkability and atmosphere',
        'Street food is cheap and delicious - choose busy stalls',
        'Budget extra for international medical insurance'
      ]
    }
};

export default hanoi;