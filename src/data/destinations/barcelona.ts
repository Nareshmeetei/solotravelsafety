import { Destination } from './types';

const barcelona: Destination = {
    city: 'Barcelona',
    country: 'Spain',
    continent: 'Europe',
    countryCode: 'es',
    overallScore: 8.1,
    nightSafety: 7.8,
    publicTransit: 8.7,
    walkingAlone: 8.0,
    tags: ['insider-tips', 'safe'],
    bgColor: 'bg-blue-25',
    reviewCount: 567,
    lastUpdated: '1 day ago',
    harassmentRisk: 'moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 7.8,
        context: 'Barcelona is generally safe at night, especially in central areas like Eixample, Gothic Quarter, and Barceloneta. The city has good lighting and police presence in tourist zones. However, be cautious in some parts of Raval and certain areas of Gràcia late at night. Beach areas can be less safe after midnight.'
      },
      publicTransit: {
        score: 8.7,
        context: 'Barcelona\'s metro, buses, and trams are modern, clean, and very safe. The TMB system is well-monitored with security cameras. Incidents are rare, though pickpocketing can occur during rush hours. Night buses are available and generally safe.'
      },
      walkingAlone: {
        score: 8.0,
        context: 'Walking alone in Barcelona is generally safe, especially in main areas like Las Ramblas, Passeig de Gràcia, and near the beach. The city is pedestrian-friendly with good lighting. Exercise normal precautions and stay alert for pickpockets in tourist areas.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Eixample',
          description: 'Modern district with wide boulevards, excellent restaurants, and Gaudí architecture. Very safe with good lighting, police presence, and active street life day and night.'
        },
        {
          name: 'Gothic Quarter (Barrio Gótico)',
          description: 'Historic old town with narrow medieval streets. Generally safe but can be crowded with tourists. Well-patrolled area with many restaurants and bars.'
        },
        {
          name: 'Born',
          description: 'Trendy neighborhood with boutiques, tapas bars, and Picasso Museum. Very safe with young, vibrant atmosphere and good foot traffic.'
        },
        {
          name: 'Gràcia',
          description: 'Bohemian neighborhood popular with locals and young professionals. Generally safe with authentic local feel, though some areas require caution late at night.'
        },
        {
          name: 'Barceloneta',
          description: 'Beach district with restaurants and nightlife. Safe during day but exercise caution at night, especially on the beach and isolated areas.'
        },
        {
          name: 'Sarrià-Sant Gervasi',
          description: 'Upscale residential area with low crime rates. Very safe and quiet, popular with families and professionals. Good for accommodation.'
        }
      ],
      caution: ['Parts of El Raval at night', 'Beach areas after midnight', 'Some areas of Poble Sec late at night'],
      avoid: ['Isolated areas of Montjuïc park at night', 'Some outer neighborhoods late at night']
    },
    accommodations: [
      {
        name: 'Hotel Casa Fuster',
        type: 'hotel',
        features: ['Luxury hotel', 'Gràcia location', '24/7 security', 'Female-friendly'],
        rating: 9.2,
        notes: 'Elegant hotel in safe Gràcia neighborhood with excellent security and concierge services.',
        link: 'https://www.hotelcasafuster.com/'
      },
      {
        name: 'Generator Barcelona',
        type: 'hostel',
        features: ['Female dorms', 'Modern design', 'Central location', 'Security'],
        rating: 8.6,
        notes: 'Modern hostel with female-only rooms in safe Gràcia area with excellent facilities.',
        link: 'https://staygenerator.com/hostels/barcelona'
      },
      {
        name: 'TOC Hostel Barcelona',
        type: 'hostel',
        features: ['Women-only floors', 'Central Gothic Quarter', 'Modern security'],
        rating: 8.4,
        notes: 'Contemporary hostel with women-only accommodations in heart of Gothic Quarter.',
        link: 'https://www.tochostels.com/barcelona/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Comfortable walking shoes for exploring the city
• Light, breathable clothing for warm weather
• Modest dress for churches (Sagrada Familia, etc.)
• Avoid flashy jewelry in tourist areas
• Beach cover-up when walking from beach areas`,
      firstTimers: `• Barcelona is very safe for solo women travelers
• Learn basic Spanish phrases - locals appreciate effort
• Watch for pickpockets in tourist areas like Las Ramblas
• Use official taxis or metro for transport
• Beach areas are safe during day but use caution at night`,
      apps: [
        'TMB App',
        'Citymapper',
        'Uber',
        'Travel Ladies',
        'My Safetipin'
      ],
      appLinks: [
        { name: 'TMB App', link: 'https://www.tmb.cat/en/barcelona/discover-tmb/tmb-app', description: 'Official Barcelona public transport app' },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Urban transport navigation for Barcelona' },
        { name: 'Uber', link: 'https://www.uber.com/es/en/', description: 'Ride-sharing service in Barcelona' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '¡Ayuda!',
          localLanguage: 'Spanish'
        },
        {
          english: 'Call the police!',
          local: '¡Llama a la policía!',
          localLanguage: 'Spanish'
        },
        {
          english: 'I need a doctor.',
          local: 'Necesito un médico.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Where is the nearest hospital?',
          local: '¿Dónde está el hospital más cercano?',
          localLanguage: 'Spanish'
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, déjame en paz.',
          localLanguage: 'Spanish'
        },
        {
          english: 'I feel unsafe.',
          local: 'No me siento segura.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Can you help me?',
          local: '¿Puedes ayudarme?',
          localLanguage: 'Spanish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Barcelona is stylish but casual. Smart casual is appropriate for restaurants and cultural sites. Beach attire only for beach areas. Comfortable walking shoes essential. Modest dress for religious sites.',
      behaviorNorms: [
        'Greet with "Hola" and a friendly demeanor.',
        'Learn basic Spanish phrases - greatly appreciated.',
        'Meal times are late - lunch 2-4pm, dinner 9-11pm.',
        'Tipping 5-10% is customary in restaurants.',
        'Respect siesta hours (2-5pm) - many shops close.',
        'Be patient with service - Spanish culture values taking time.',
        'Show interest in Catalan culture and independence.',
        'Respect beach rules and local customs.',
        'Queue politely and maintain personal space.',
        'Appreciate art, architecture, and food culture.'
      ],
      perception: 'Solo women travelers are very welcome in Barcelona. Spanish culture is warm and social, and locals are generally helpful to tourists. The city is progressive and women can dine alone, explore attractions, and enjoy nightlife safely with basic precautions.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and extended daylight. Summer can be very crowded but generally safe.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: [
        'Use official ATMs and avoid tourist area currency exchanges for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Las Ramblas Pickpocketing',
        description: 'Very common on the famous street. Keep valuables secure and be extremely alert.',
        severity: 'high'
      },
      {
        title: 'Beach Item Theft',
        description: 'Items stolen while swimming or sunbathing. Use beach lockers or don\'t bring valuables.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Tourist Menus',
        description: 'Inflated prices near tourist attractions. Look for local recommendations.',
        severity: 'low'
      }
    ],
    languages: ['Spanish', 'Catalan', 'English (good level in tourist areas)'],
    daytimeSafetyPercent: 81.4,
    nighttimeSafetyPercent: 72.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Barcelona',
    redFlags: [
      { label: 'Las Ramblas Pickpocketing', frequency: 'Very Common', icon: 'Hand' },
      { label: 'Beach Theft', frequency: 'Common', icon: 'ShoppingBag' },
      { label: 'Tourist Scams', frequency: 'Occasional', icon: 'AlertTriangle' }
    ],
    culturalDos: [
      'Learn basic Spanish greetings.',
      'Respect late meal times.',
      'Appreciate Catalan culture.',
      'Dress stylishly but appropriately.',
      'Be friendly and social.'
    ],
    culturalDonts: [
      'Don\'t rush through meals.',
      'Don\'t wear beach clothes in city center.',
      'Don\'t ignore siesta hours.',
      'Don\'t be careless with belongings on Las Ramblas.',
      'Don\'t skip trying local tapas.'
    ],
    womensConfidenceScore: {
      score: 78.2,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Barcelona"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 87, source: 'Spain Tourism Safety Report 2025', sourceUrl: 'https://www.spain.info/safety' },
      { label: 'Nightlife', confidence: 79, source: 'Solo Female Travel Spain 2025', sourceUrl: 'https://www.solofemaleguide.com/spain' },
      { label: 'Public Transport', confidence: 87, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Barcelona' },
      { label: 'Dining Alone', confidence: 85, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/barcelona/' }
    ],
    sexualHarassmentData: {
      prevalence: 'moderate',
      commonLocations: ['Nightlife areas', 'Beach during summer', 'Crowded tourist areas', 'Public transport during peak times'],
      reportingRate: 68,
      legalProtection: 'Strong legal protections under Spanish and EU law. Police take reports seriously and Spain has comprehensive anti-harassment legislation.',
      supportResources: [
        'Women\'s Emergency Line: 016 (free, 24/7)',
        'Tourist Police Barcelona: +34 93 256 24 30',
        'Catalan Women\'s Institute: +34 93 495 16 00'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Clínic de Barcelona',
          address: 'Carrer de Villarroel, 170, 08036 Barcelona',
          phone: '+34 93 227 54 00',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'General Medicine'],
          link: 'https://www.hospitalclinic.org/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Cervantes',
          address: 'La Rambla, 98, 08002 Barcelona',
          phone: '+34 93 301 28 43',
          hours: 'Mon-Sat 9:00-21:00',
          emergency: false,
          link: 'https://www.farmaciacervantes.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Barcelona: +34 93 227 54 00',
          'Family Planning Catalonia: +34 93 441 96 99'
        ],
        gynecologists: [
          'Dr. García - Hospital Clínic: +34 93 227 54 00'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available everywhere - supermarkets, pharmacies',
          'Wide variety of Spanish and international brands'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'COVID-19 vaccination recommended',
        'Standard vaccinations should be current'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Strong Mediterranean sun - use sunscreen',
        'Seasonal flu during winter'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Barcelona',
        address: 'Passeig de la Reina Elisenda de Montcada, 23, 08034 Barcelona',
        phone: '+34 93 280 22 27',
        email: 'barcelonaacs@state.gov',
        emergency: '+34 93 280 22 27',
        link: 'https://es.usembassy.gov/embassy-consulates/barcelona/'
      },
      embassies: [
        {
          name: 'British Consulate Barcelona',
          address: 'Avinguda Diagonal, 477, 08036 Barcelona',
          phone: '+34 93 366 62 00',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-barcelona'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Barcelona',
        address: 'Passeig de la Reina Elisenda de Montcada, 23, 08034 Barcelona',
        phone: '+34 93 280 22 27',
        email: 'barcelonaacs@state.gov',
        link: 'https://es.usembassy.gov/embassy-consulates/barcelona/'
      },
      womensRights: [
        'Strong legal protections under Spanish and EU law',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Spain: 901 10 10 61',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through consulate'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency) or 091',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact consulate for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.7,
          recommendations: ['Very safe and efficient system'],
          companies: ['TMB'],
          link: 'https://www.tmb.cat/'
        },
        {
          type: 'Bus',
          safety: 8.8,
          recommendations: ['Safe and covers entire city'],
          companies: ['TMB'],
          link: 'https://www.tmb.cat/'
        },
        {
          type: 'Uber',
          safety: 8.9,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/es/en/'
        }
      ],
      nightTravel: {
        safety: 7.8,
        warnings: [
          'Beach areas less safe after midnight',
          'Some parts of Raval require caution'
        ],
        alternatives: [
          'Night buses available',
          'Uber available 24/7',
          'Official taxi stands throughout city'
        ]
      },
      verifiedProviders: [
        {
          name: 'TMB',
          type: 'Public Transport',
          contact: '+34 932 98 70 00',
          safety: 8.7
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
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Concierge services'
      ],
      safeNeighborhoods: [
        'Eixample',
        'Born',
        'Gràcia',
        'Sarrià-Sant Gervasi',
        'Gothic Quarter (central areas)'
      ],
      womensOnly: [
        {
          name: 'Generator Barcelona',
          type: 'Hostel',
          features: ['Female dorms', 'Modern design', 'Gràcia location'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 8.3,
          comments: 'Felt very safe exploring Barcelona. Great public transport.',
          date: '2025-01-18'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally reliable',
        'Many cafes and restaurants offer free WiFi',
        'Use VPN for sensitive transactions',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake booking websites',
        'Phishing emails from fake accommodations',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Spain',
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
          type: 'Pickpocketing',
          location: 'Las Ramblas',
          date: '2025-01-19',
          description: 'Multiple pickpocketing reports on famous street',
          severity: 'high'
        },
        {
          type: 'Beach Theft',
          location: 'Barceloneta Beach',
          date: '2025-01-17',
          description: 'Items stolen while swimming',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Never leave belongings unattended at the beach',
          author: 'Local Resident',
          date: '2025-01-20',
          upvotes: 156
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Spain is generally safe for travelers. Exercise normal precautions and be aware of petty crime in tourist areas.',
      reason: 'Generally safe with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/spain-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Very safe with vibrant culture and helpful locals',
        'Watch for pickpockets in tourist areas',
        'Excellent public transport system'
      ]
    },
    crimeStatistics: {
      violentCrime: 9.2,
      propertyCrime: 2967,
      sexualAssault: 12.8,
      kidnapping: 0.2,
      source: 'Spanish National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft bag',
        'RFID-blocking wallet',
        'Beach-safe valuables storage',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'TMB App',
          purpose: 'Barcelona public transport',
          rating: 4.4
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
          number: '+34 93 256 24 30',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Las Ramblas Safety Strategy',
        description: 'Keep valuables extremely secure on Barcelona\'s famous street. Use anti-theft bags, avoid displaying phones/cameras, and stay alert to pickpocket tactics.',
        severity: 'high',
        sourceName: 'Barcelona Tourism Safety',
        sourceUrl: 'https://www.barcelonaturisme.com/safety'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$60 - $90 USD / day',
        description: 'Barcelona offers great value with excellent food, culture, and safety standards.',
        tip: 'Mid-range options provide excellent safety and comfort for solo travelers.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$20-35',
          safetyNote: 'Many modern hostels with female-only rooms',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$70-120',
          safetyNote: 'Excellent security and central locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport',
          cost: '$10-15/day',
          safetyDescription: 'Very safe and efficient',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very walkable city, watch for pickpockets',
          safetyLevel: 'medium-high'
        }
      ],
      budgetTips: [
        'Use T-10 transport passes for savings',
        'Many free attractions and beaches',
        'Great tapas culture - economical dining',
        'Safe to walk most places during day'
      ]
    }
};

export default barcelona;