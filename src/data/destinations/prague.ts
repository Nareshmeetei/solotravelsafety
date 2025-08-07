import { Destination } from './types';

const prague: Destination = {
    city: 'Prague',
    country: 'Czech Republic',
    continent: 'Europe',
    countryCode: 'cz',
    overallScore: 8.3,
    nightSafety: 7.9,
    publicTransit: 8.6,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 389,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 7.9,
        context: 'Prague is very safe at night in the city center and tourist areas. Old Town, New Town, and Lesser Town are well-lit and patrolled. However, avoid some areas of Wenceslas Square late at night due to nightlife crowds, and be cautious in outer districts after midnight.'
      },
      publicTransit: {
        score: 8.6,
        context: 'Prague\'s metro, trams, and buses are excellent, clean, and very safe. The system is efficient and well-monitored. Incidents are rare, and the transport network covers the entire city effectively. Night trams run until late.'
      },
      walkingAlone: {
        score: 8.4,
        context: 'Prague is excellent for solo walking with its compact city center and well-maintained streets. The historic areas are pedestrian-friendly and safe. Cobblestone streets require good shoes, but the city feels very secure for solo female travelers.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Town (Staré Město)',
          description: 'Historic heart of Prague with Prague Castle, Charles Bridge, and Astronomical Clock. Very safe with constant foot traffic, excellent lighting, and regular police presence. Perfect for solo travelers.'
        },
        {
          name: 'Lesser Town (Malá Strana)',
          description: 'Picturesque baroque neighborhood below Prague Castle. Very safe and charming with narrow cobblestone streets, gardens, and cafes. Great for peaceful walks and exploration.'
        },
        {
          name: 'New Town (Nové Město)',
          description: 'Modern city center with shopping, restaurants, and cultural venues. Generally very safe, though some parts of Wenceslas Square can be busy with nightlife.'
        },
        {
          name: 'Vinohrady',
          description: 'Upscale residential area popular with expats and young professionals. Very safe with excellent restaurants, parks, and a local neighborhood feel.'
        },
        {
          name: 'Karlín',
          description: 'Hip, gentrified area with modern restaurants and cultural venues. Very safe and increasingly popular with visitors seeking authentic local experiences.'
        }
      ],
      caution: ['Parts of Wenceslas Square late at night', 'Prague Central Station area after midnight', 'Some tourist-heavy areas for pickpockets'],
      avoid: ['Outer industrial districts late at night', 'Isolated areas along the river after dark']
    },
    accommodations: [
      {
        name: 'Golden Well Hotel',
        type: 'hotel',
        features: ['Luxury hotel', 'Lesser Town location', 'Excellent security', 'Castle views'],
        rating: 9.1,
        notes: 'Luxury boutique hotel in safe Lesser Town with stunning views and top security.',
        link: 'https://www.goldenwell.cz/'
      },
      {
        name: 'Hostel One Home',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Great atmosphere', 'Security'],
        rating: 8.8,
        notes: 'Top-rated hostel with women-only rooms and excellent social atmosphere.',
        link: 'https://hostelone.com/prague/'
      },
      {
        name: 'Czech Inn',
        type: 'hostel',
        features: ['Modern design', 'Women-only floors', 'Great location', 'Safety features'],
        rating: 8.6,
        notes: 'Modern hostel with female-only accommodations and contemporary design.',
        link: 'https://www.czech-inn.com/'
      },
      {
        name: 'Hotel Metamorphis',
        type: 'hotel',
        features: ['Old Town location', 'Historic charm', '24/7 security', 'Solo traveler friendly'],
        rating: 8.7,
        notes: 'Charming hotel in historic building with excellent Old Town location.',
        link: 'https://www.metamorphis.cz/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Comfortable walking shoes essential for cobblestone streets
• Layers for variable weather - can be cool even in summer
• Modest dress for churches and religious sites
• Stylish casual wear - Czechs dress well
• Waterproof jacket for frequent light rain`,
      firstTimers: `• Prague is very safe for solo women travelers
• Learn basic Czech phrases - "Děkuji" (thank you) is appreciated
• Czech Republic uses Czech Koruna, not Euro
• Tipping 10% is standard in restaurants
• Many people speak English, especially in tourist areas`,
      apps: [
        'PID Lítačka',
        'Uber',
        'Google Translate',
        'Travel Ladies',
        'My Safetipin'
      ],
      appLinks: [
        { name: 'PID Lítačka', link: 'https://app.pidlitacka.cz/', description: 'Official Prague public transport app' },
        { name: 'Uber', link: 'https://www.uber.com/cz/en/', description: 'Ride-sharing service in Prague' },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Czech language translation help' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Pomoc!',
          localLanguage: 'Czech'
        },
        {
          english: 'Call the police!',
          local: 'Zavolejte policii!',
          localLanguage: 'Czech'
        },
        {
          english: 'I need a doctor.',
          local: 'Potřebuji lékaře.',
          localLanguage: 'Czech'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Kde je nejbliÅ¾Ã­ nemocnice?',
          localLanguage: 'Czech'
        },
        {
          english: 'I am lost.',
          local: 'Zabloudila jsem.',
          localLanguage: 'Czech'
        },
        {
          english: 'Please leave me alone.',
          local: 'Prosím, nechte mě být.',
          localLanguage: 'Czech'
        },
        {
          english: 'I feel unsafe.',
          local: 'Necítím se bezpečně.',
          localLanguage: 'Czech'
        },
        {
          english: 'Can you help me?',
          local: 'Můžete mi pomoci?',
          localLanguage: 'Czech'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Czechs dress well and appreciate good style. Smart casual is appropriate for most situations. Churches require covered shoulders and knees. Comfortable walking shoes are essential for cobblestone streets.',
      behaviorNorms: [
        'Greet with "Dobrý den" (good day) and maintain eye contact.',
        'Learn basic Czech phrases - locals appreciate the effort.',
        'Czechs can seem reserved initially but are friendly once you connect.',
        'Tipping 10% is standard in restaurants.',
        'Remove shoes when entering someone\'s home.',
        'Respect religious sites and dress appropriately in churches.',
        'Be punctual for appointments and social events.',
        'Czech beer culture is important - appreciate local brews.',
        'Maintain quiet voices in public transport.',
        'Show interest in Czech history and culture.'
      ],
      perception: 'Solo women travelers are very welcome in Prague. Czech culture is generally respectful and safe for women. The city is progressive and women can dine alone, explore attractions, and use transport independently. Street harassment is uncommon.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but very safe.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Czech Koruna', code: 'CZK', exchangeRate: {
      usd: 0.044,
      eur: 0.038,
      gbp: 0.033
    }, scamWarnings: [
        'Use official ATMs and avoid currency exchange at tourist areas for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Currency Exchange Scams',
        description: 'Some exchange offices offer poor rates or have hidden fees. Use banks or official exchanges.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Bill Scams',
        description: 'Check bills carefully - some restaurants may add unauthorized charges or overcharge for bread/water.',
        severity: 'low'
      },
      {
        title: 'Taxi Overcharging',
        description: 'Use official taxis with meters or ride-sharing apps to avoid overcharging.',
        severity: 'medium'
      },
      {
        title: 'Street Money Exchange',
        description: 'Avoid street money changers who may offer counterfeit bills or poor exchange rates.',
        severity: 'medium'
      }
    ],
    languages: ['Czech', 'English (good level in tourist areas)', 'German (some speakers)'],
    daytimeSafetyPercent: 86.7,
    nighttimeSafetyPercent: 75.2,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Prague',
    redFlags: [
      { label: 'Currency Exchange Scams', frequency: 'Common', icon: 'DollarSign' },
      { label: 'Tourist Restaurant Overcharging', frequency: 'Occasional', icon: 'Utensils' },
      { label: 'Pickpocketing in Tourist Areas', frequency: 'Rare', icon: 'Hand' }
    ],
    culturalDos: [
      'Learn basic Czech greetings.',
      'Appreciate Czech beer culture.',
      'Dress well and stylishly.',
      'Be punctual for appointments.',
      'Show interest in history and architecture.'
    ],
    culturalDonts: [
      'Don\'t confuse Prague with other Eastern European cities.',
      'Don\'t expect everyone to speak English outside tourist areas.',
      'Don\'t use poor exchange offices.',
      'Don\'t be loud on public transport.',
      'Don\'t ignore church dress codes.'
    ],
    womensConfidenceScore: {
      score: 82.1,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Prague"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 91, source: 'Czech Tourism Safety Report 2025', sourceUrl: 'https://www.czechtourism.com/safety' },
      { label: 'Nightlife', confidence: 79, source: 'Solo Female Travel Czech Republic 2025', sourceUrl: 'https://www.solofemaleguide.com/czech-republic' },
      { label: 'Public Transport', confidence: 86, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Prague' },
      { label: 'Dining Alone', confidence: 88, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/prague/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Crowded nightlife areas', 'Some parts of Wenceslas Square', 'Public transport during peak hours'],
      reportingRate: 71,
      legalProtection: 'Strong legal protections under Czech and EU law. Police take reports seriously and Czech Republic has good anti-harassment legislation.',
      supportResources: [
        'Women\'s Crisis Line: 251 511 313',
        'Tourist Police: +420 974 851 111',
        'Prague Women\'s Center: +420 222 580 805'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Fakultní nemocnice v Motole',
          address: 'V Úvalu 84, 150 06 Praha 5',
          phone: '+420 224 431 111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Women\'s Health'],
          link: 'https://www.fnmotol.cz/'
        }
      ],
      pharmacies: [
        {
          name: 'Lékárna Anděl',
          address: 'Nádražní 32, 150 00 Praha 5',
          phone: '+420 257 320 918',
          hours: 'Mon-Fri 8:00-20:00, Sat-Sun 9:00-18:00',
          emergency: false,
          link: 'https://www.lekarna-andel.cz/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Prague: +420 224 431 111',
          'Family Planning Czech Republic: +420 224 922 249'
        ],
        gynecologists: [
          'Dr. Novák - Motol Hospital: +420 224 431 111'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Wide variety of European brands available'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Tick-borne encephalitis risk in rural areas (not city center)',
        'Air pollution during winter months'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Prague',
        address: 'Tržiště 15, 118 01 Praha 1',
        phone: '+420 257 022 000',
        email: 'PragueACS@state.gov',
        emergency: '+420 257 022 000',
        link: 'https://cz.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Prague',
          address: 'Thunovská 14, 118 00 Praha 1',
          phone: '+420 257 402 111',
          link: 'https://www.gov.uk/world/organisations/british-embassy-prague'
        }
      ],
      consulate: {
        name: 'U.S. Embassy Prague',
        address: 'Tržiště 15, 118 01 Praha 1',
        phone: '+420 257 022 000',
        email: 'PragueACS@state.gov',
        link: 'https://cz.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under Czech and EU law',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Czech Republic: +420 221 729 900',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency) or 158',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.8,
          recommendations: ['Very safe and efficient system'],
          companies: ['DPP'],
          link: 'https://www.dpp.cz/'
        },
        {
          type: 'Tram',
          safety: 8.6,
          recommendations: ['Scenic and safe, covers entire city'],
          companies: ['DPP'],
          link: 'https://www.dpp.cz/'
        },
        {
          type: 'Uber',
          safety: 8.9,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/cz/en/'
        }
      ],
      nightTravel: {
        safety: 7.9,
        warnings: [
          'Some areas around train station less safe late at night',
          'Limited night public transport'
        ],
        alternatives: [
          'Night trams run on major routes',
          'Uber available 24/7',
          'Central areas generally safe for walking'
        ]
      },
      verifiedProviders: [
        {
          name: 'DPP (Prague Public Transport)',
          type: 'Public Transport',
          contact: '+420 296 191 817',
          safety: 8.6
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.9
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key card access',
        'CCTV in common areas',
        'In-room safes',
        'Historic building security'
      ],
      safeNeighborhoods: [
        'Old Town (Staré Město)',
        'Lesser Town (Malá Strana)',
        'New Town (Nové Město)',
        'Vinohrady',
        'Karlín'
      ],
      womensOnly: [
        {
          name: 'Hostel One Home',
          type: 'Hostel',
          features: ['Female dorms', 'Central location', 'Great atmosphere'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.7,
          comments: 'Felt very safe exploring Prague alone. Beautiful city with friendly locals.',
          date: '2025-01-16'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Free WiFi in many cafes and restaurants',
        'Use VPN for sensitive data',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake booking websites',
        'Phishing emails from fake accommodations',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Czech Republic',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides protection',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Currency Exchange Scam',
          location: 'Tourist areas',
          date: '2025-01-18',
          description: 'Tourists charged excessive fees at exchange office',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use bank ATMs or official exchange offices for best currency rates',
          author: 'Local Resident',
          date: '2025-01-19',
          upvotes: 134
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Czech Republic is very safe for travelers. Exercise normal precautions.',
      reason: 'Generally safe country with low crime rates.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/czech-republic-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Very safe with beautiful historic architecture',
        'Great public transport and walkable city center',
        'Affordable with good value for money'
      ]
    },
    crimeStatistics: {
      violentCrime: 4.2,
      propertyCrime: 1876,
      sexualAssault: 7.8,
      kidnapping: 0.2,
      source: 'Czech Police Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Comfortable walking shoes for cobblestones',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Light rain jacket'
      ],
      safetyApps: [
        {
          name: 'PID Lítačka',
          purpose: 'Prague public transport',
          rating: 4.3
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Tourist Police',
          number: '+420 974 851 111',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Navigate Prague\'s Historic Center',
        description: 'The Old Town is compact and walkable. Use Prague Castle and the Astronomical Clock as landmarks. Cobblestone streets require good shoes.',
        severity: 'low',
        sourceName: 'Prague Tourism',
        sourceUrl: 'https://www.prague.eu/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $80 USD / day',
        description: 'Prague offers excellent value with beautiful architecture and good safety standards.',
        tip: 'Very affordable destination with great beer and food culture.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$15-30',
          safetyNote: 'Many excellent hostels with female-only rooms',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$50-90',
          safetyNote: 'Great value historic hotels with good security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport',
          cost: '$1-2/ride',
          safetyDescription: 'Very safe and efficient',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe in historic center',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Public transport day passes offer great value',
        'Many free attractions including Charles Bridge and squares',
        'Excellent and affordable Czech beer and food',
        'Walking tours are often tip-based and informative'
      ]
    }
};

export default prague;