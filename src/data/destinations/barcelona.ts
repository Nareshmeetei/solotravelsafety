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
    harassmentRisk: 'low-moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 7.8,
        context: 'Barcelona is generally safe at night with 2025 Numbeo data showing 72.8% moderate-to-high nighttime safety rating. Eixample and central Passeig de Gràcia areas remain excellently lit with visible police presence. However, nightlife establishments experienced a 24% increase in sexual harassment incidents in 2024-2025. Avoid El Raval after dark due to recent security concerns. Beach areas significantly less safe after midnight - use ride-sharing instead of walking.'
      },
      publicTransit: {
        score: 8.7,
        context: 'Barcelona\'s TMB system (metro, buses, trams) is modern and very safe with comprehensive CCTV monitoring. 2025 crime data confirms continued low violent crime rates on public transport. Pickpocketing remains the primary concern, with 70% higher theft rates during rush hours (8-9:30 AM, 5-7 PM). NitBus night service provides safe travel when metro is closed.'
      },
      walkingAlone: {
        score: 8.0,
        context: 'Walking alone is generally safe with 81.4% high daytime safety rating (Numbeo 2025). Solo female travelers report significantly less street harassment compared to other major European cities. Overall crime decreased 15% compared to 2019, reaching decade-low violent crime figures. However, 25% of tourists experience pickpocketing, particularly in Las Ramblas and Sagrada Familia areas.'
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
        name: 'Hostelle - Female Only Hostel Barcelona',
        type: 'hostel',
        features: ['Women only', 'First all-female hostel', '24/7 female reception', 'Eixample location'],
        rating: 9.2,
        notes: 'Barcelona\'s first all-female hostel with safety deposit boxes in every room, located in safe Eixample district. Highest rated for solo female travelers.',
        link: 'https://www.hostelle.com/barcelona'
      },
      {
        name: 'Hotel Casa Fuster',
        type: 'hotel',
        features: ['Luxury hotel', 'Gràcia location', '24/7 security', 'Female-friendly'],
        rating: 9.1,
        notes: 'Elegant luxury hotel on safe Passeig de Gràcia with 24/7 concierge and security, highly recommended by locals for solo women.',
        link: 'https://www.hotelcasafuster.com/'
      },
      {
        name: 'Barcelona Central Garden Hostel',
        type: 'hostel',
        features: ['Female-only dorms', '24/7 reception', 'Free lockers', 'Plaza Catalunya area'],
        rating: 8.7,
        notes: 'Modern hostel with excellent security, CCTV throughout, walking distance to major attractions in safe central location.',
        link: 'https://www.centralgardenhostel.com/'
      },
      {
        name: 'Mediterranean Youth Hostel',
        type: 'hostel',
        features: ['Wristband access', 'CCTV security', 'Free secure lockers', 'High safety rating'],
        rating: 8.8,
        notes: 'Top-rated hostel with comprehensive security system including wristband access and 24/7 monitoring, excellent reviews for safety.',
        link: 'https://www.mediterraneanhostel.com/'
      },
      {
        name: 'Yeah Barcelona Hostel',
        type: 'hostel',
        features: ['Luxury hostel', 'Female dorms', '24/7 security', 'Central location'],
        rating: 9.5,
        notes: 'Premium hostel with top-tier security measures, female-only dorm options, and 24/7 security presence. Over 5,000 excellent reviews.',
        link: 'https://www.yeahhostels.com/barcelona'
      },
      {
        name: 'NH Barcelona Eixample',
        type: 'hotel',
        features: ['Modern hotel', 'Safe Eixample district', 'Professional security', 'Female-friendly'],
        rating: 8.6,
        notes: 'Modern hotel in the safest district with professional security staff, walking distance to major attractions, highly recommended for solo women.',
        link: 'https://www.nh-hotels.com/hotel/nh-barcelona-eixample'
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
        'FreeNow',
        'Travel Ladies',
        'NomadHer',
        'bSafe',
        'Cabify',
        'TripIt'
      ],
      appLinks: [
        { name: 'TMB App', link: 'https://www.tmb.cat/en/barcelona/discover-tmb/tmb-app', description: 'Official Barcelona public transport app with real-time updates and route planning' },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Essential transport app with offline maps and real-time Barcelona transport data' },
        { name: 'FreeNow', link: 'https://free-now.com/', description: 'Most reliable ride-sharing app in Barcelona, connects with licensed taxis and private drivers' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Global female travel community with Barcelona-specific safety tips and meetups' },
        { name: 'NomadHer', link: 'https://nomadher.com/', description: 'Top-rated app specifically for solo female travelers with women-only validation and Barcelona guides' },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal security app with SOS alerts, GPS tracking, and voice-activated emergency calls' },
        { name: 'Cabify', link: 'https://cabify.com/', description: 'Premium ride-sharing with professional drivers, GPS tracking, and higher safety standards' },
        { name: 'TripIt', link: 'https://www.tripit.com/', description: 'Essential travel organizer for solo travelers managing complex itineraries and bookings' }
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
      { label: 'Nightlife Sexual Harassment', frequency: 'Increasing', icon: 'Shield' },
      { label: 'Tourist Area Stalking', frequency: 'Occasional', icon: 'UserX' },
      { label: 'Fake Police Scams', frequency: 'Rare but Serious', icon: 'AlertTriangle' }
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
      prevalence: 'low-moderate',
      commonLocations: ['Nightlife establishments (24% increase in incidents 2024-2025)', 'El Raval area after dark', 'Crowded tourist areas (Las Ramblas, Sagrada Familia)', 'Beach areas during summer nights', 'Metro during rush hours'],
      reportingRate: 72, // Increased due to "only yes is yes" law awareness and improved support systems
      legalProtection: 'Excellent protections under Spain\'s progressive "only yes is yes" law (2022) which strengthened sexual consent laws significantly. 173 specialized UFAM police units nationwide with victim-centered approach. Barcelona\'s BCN Antimasclista program provides dedicated help points throughout the city.',
      supportResources: [
        'Emergency: 112 (English available 24/7)',
        'Gender Violence Hotline: 016 (free, 24/7, confidential - no phone record)',
        'WhatsApp Support: 600 000 016 (for discreet contact)',
        'SARA Sexual Assault Service: 900 922 357 (specialized counseling)',
        'Barcelona Social Emergency: 900 703 030 (24/7 city services)',
        'Hospital Clínic Barcelona: +34 932 27 54 00 (specialized SANE protocol)',
        'AlertCops App: Discreet police contact with GPS location',
        'Women\'s Information Centers: Multiple locations citywide',
        'Legal Aid Spain: 901 10 10 61 (free legal consultation)'
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
        },
        {
          name: 'German Consulate General Barcelona',
          address: 'Passeig de Gràcia, 111, 08008 Barcelona',
          phone: '+34 93 292 10 00',
          link: 'https://barcelona.diplo.de/'
        },
        {
          name: 'French Consulate General Barcelona',
          address: 'Ronda de la Universitat, 22B, 08007 Barcelona',
          phone: '+34 93 270 30 00',
          link: 'https://barcelone.consulat.gouv.fr/'
        },
        {
          name: 'Australian Honorary Consulate Barcelona',
          address: 'Gran Via Carles III, 94, 08028 Barcelona',
          phone: '+34 93 490 90 13',
          link: 'https://spain.embassy.gov.au/'
        },
        {
          name: 'Canadian Honorary Consulate Barcelona',
          address: 'Plaça de Catalunya, 9, 08002 Barcelona',
          phone: '+34 93 270 36 14',
          link: 'https://www.canadainternational.gc.ca/spain-espagne/'
        },
        {
          name: 'Netherlands Consulate General Barcelona',
          address: 'Avinguda Diagonal, 601, 08028 Barcelona',
          phone: '+34 93 410 62 10',
          link: 'https://www.netherlandsworldwide.nl/countries/spain'
        },
        {
          name: 'Danish Honorary Consulate Barcelona',
          address: 'Carrer de Pau Claris, 162, 08037 Barcelona',
          phone: '+34 93 488 25 22',
          link: 'https://spanien.um.dk/'
        },
        {
          name: 'Swiss Consulate General Barcelona',
          address: 'Gran Via de Carles III, 94, 08028 Barcelona',
          phone: '+34 93 409 06 50',
          link: 'https://www.eda.admin.ch/barcelona'
        },
        {
          name: 'Indian Consulate General Barcelona',
          address: 'Carrer de Teodor Roviralta, 15, 08022 Barcelona',
          phone: '+34 93 595 97 02',
          link: 'https://www.cgbarcelona.gov.in/'
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
          recommendations: ['Very safe and efficient system', 'CCTV monitoring throughout', 'Avoid rush hours to prevent pickpocketing'],
          companies: ['TMB'],
          link: 'https://www.tmb.cat/'
        },
        {
          type: 'Bus',
          safety: 8.8,
          recommendations: ['Safe and covers entire city', 'Driver oversight provides security', 'NitBus available for night travel'],
          companies: ['TMB'],
          link: 'https://www.tmb.cat/'
        },
        {
          type: 'FreeNow',
          safety: 9.1,
          recommendations: ['Most reliable ride-sharing in Barcelona', 'Licensed taxi drivers', 'GPS tracking and transparent pricing'],
          companies: ['FreeNow'],
          link: 'https://free-now.com/'
        },
        {
          type: 'Cabify',
          safety: 9.0,
          recommendations: ['Premium service with professional drivers', 'GPS tracking shared with contacts', 'Higher safety standards than regular taxis'],
          companies: ['Cabify'],
          link: 'https://cabify.com/'
        },
        {
          type: 'Official Barcelona Taxis',
          safety: 8.5,
          recommendations: ['Yellow and black licensed taxis', 'Regulated pricing', 'Available 24/7 at taxi stands'],
          companies: ['Institut Metropolità del Taxi'],
          link: 'https://www.taxibarcelona.cat/'
        },
        {
          type: 'NitBus (Night Buses)',
          safety: 8.3,
          recommendations: ['Yellow night buses 10 PM - 5 AM', 'Every 20-30 minutes when metro closed', 'Safer than walking alone at night'],
          companies: ['TMB'],
          link: 'https://www.tmb.cat/en/barcelona/transport-network/bus/nitbus'
        },
        {
          type: 'Tram Lines',
          safety: 8.9,
          recommendations: ['T1-T6 lines connect to metro', 'Less crowded than buses', 'Modern and well-monitored'],
          companies: ['TRAMMET'],
          link: 'https://www.tram.cat/'
        },
        {
          type: 'Bicing (Bike Share)',
          safety: 7.8,
          recommendations: ['200+ km of bike lanes', 'Good for daytime use', 'Requires annual subscription'],
          companies: ['Bicing'],
          link: 'https://www.bicing.barcelona/'
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
      violentCrime: 8.1, // per 100,000 (2025 - continued decline, 15% reduction from 2019)
      propertyCrime: 2640, // per 100,000 (2025 - lowest theft figures in decade)
      sexualAssault: 23.0, // per 100,000 (2025 - 1,910 cases in first half, increased reporting due to "only yes is yes" law)
      kidnapping: 0.08, // per 100,000 (2025 data - extremely rare)
      pickpocketing: 48.1, // Percentage of all crimes (100,944 reports in 2023, 25% tourist likelihood)
      source: 'Spanish National Statistics, Barcelona Police & Hospital Clínic Barcelona 2025',
      year: 2025,
      notes: 'Crime decreased 15% compared to 2019. Pickpocketing remains primary concern for tourists with 24% chance of experiencing theft.'
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
        title: 'Anti-Theft Phone Protection Strategy',
        description: 'Never put your phone in back pocket or let it stick out of front pockets. Pickpockets use the "bicycle/moped trick" - stealing phones directly from hands as they pass on bikes or scooters. Keep phones secured in zippered front pockets.',
        severity: 'high',
        sourceName: 'Barcelona Solo Female Travel Reddit 2025',
        sourceUrl: 'https://www.reddit.com/r/solotravel/'
      },
      {
        title: 'Belt Bag Over Traditional Purse',
        description: 'Use a belt bag/fanny pack instead of traditional purses. It\'s much harder for pickpockets to access without you noticing, especially in crowded areas like Las Ramblas, Sagrada Familia, and metro stations.',
        severity: 'high',
        sourceName: 'Female Travel Forum 2025',
        sourceUrl: 'https://www.lonelyplanet.com/thorntree/'
      },
      {
        title: 'Night Navigation Safety Protocol',
        description: 'Avoid Gothic Quarter (Gotico) and Born areas after dark as a solo female. Stick to well-lit Passeig de Gràcia area instead - it\'s broad, upmarket, and significantly safer for evening walks.',
        severity: 'medium',
        sourceName: 'Barcelona Safety Guide 2025',
        sourceUrl: 'https://www.barcelona.cat/en/safety'
      },
      {
        title: 'Metro Rush Hour Avoidance',
        description: 'Travel outside peak hours (8:00-9:30 AM and 5:00-7:00 PM) to avoid crowded conditions where pickpocketing is most common. Metro crime statistics show 70% higher theft rates during rush hours.',
        severity: 'medium',
        sourceName: 'TMB Safety Statistics 2025',
        sourceUrl: 'https://www.tmb.cat/en/safety'
      },
      {
        title: 'Fake Wallet Decoy Technique',
        description: 'Carry a decoy wallet with small bills and expired cards in your back pocket, while keeping real valuables in a hidden money belt or internal pocket. This technique has proven effective in reducing theft impact.',
        severity: 'medium',
        sourceName: 'Solo Female Travel Community 2025',
        sourceUrl: 'https://www.solofemaleguide.com/barcelona'
      },
      {
        title: 'Recognize Common Scam Patterns',
        description: 'Watch for the "Petition Scam" (signing fake petitions while accomplices steal), "Found Ring Scam" (demanding reward for fake gold rings), and "Mustard Scam" (spilling substance to distract while pickpocketing).',
        severity: 'high',
        sourceName: 'Barcelona Police Department 2025',
        sourceUrl: 'https://www.barcelona.cat/en/police'
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
          method: 'Metro/Bus (TMB)',
          cost: '$10-15/day',
          safetyDescription: 'Very safe and efficient public transport system',
          safetyLevel: 'high'
        },
        {
          method: 'FreeNow',
          cost: '$8-20/ride',
          safetyDescription: 'Most reliable ride-sharing with licensed drivers',
          safetyLevel: 'high'
        },
        {
          method: 'Cabify',
          cost: '$10-25/ride',
          safetyDescription: 'Premium service with GPS tracking and professional drivers',
          safetyLevel: 'high'
        },
        {
          method: 'Official Taxis',
          cost: '$12-30/ride',
          safetyDescription: 'Licensed yellow/black taxis with regulated pricing',
          safetyLevel: 'medium-high'
        },
        {
          method: 'NitBus (Night)',
          cost: '$2-3/ride',
          safetyDescription: 'Safe night buses when metro is closed',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very walkable city, watch for pickpockets in tourist areas',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Bicing (Bikes)',
          cost: '$50/year',
          safetyDescription: 'Good bike infrastructure, daytime use recommended',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Use T-10 transport passes for significant savings on metro/bus',
        'Many free attractions including beaches and Park Güell',
        'Great tapas culture - share multiple dishes for economical dining',
        'Safe to walk most places during day, saves transport costs',
        'Stay in safe Eixample district for best value and safety balance',
        'Use FreeNow instead of expensive hotel taxis',
        'Shop at local markets like Boqueria for affordable authentic food',
        'Visit during shoulder season (April-May, September-October) for better accommodation deals'
      ]
    }
};

export default barcelona;