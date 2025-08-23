import { Destination } from './types';

const lisbon: Destination = {
    city: 'Lisbon',
    country: 'Portugal',
    continent: 'Europe',
    countryCode: 'pt',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 245,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.2,
        context: 'Lisbon is very safe at night, particularly in tourist areas and neighborhoods like Chiado, Bairro Alto, and Príncipe Real. The city has excellent street lighting and regular police patrols. While petty crime can occur in busy nightlife areas, violent incidents are extremely rare. Solo women report feeling comfortable walking at night in central areas.'
      },
      publicTransit: {
        score: 8.8,
        context: 'Lisbon\'s public transport (metro, trams, buses) is modern, clean, and very safe. The iconic Tram 28 is well-monitored despite being crowded with tourists. Metro stations have security cameras and staff presence. The transport system is reliable and incidents are rare. Watch belongings during rush hour.'
      },
      walkingAlone: {
        score: 8.4,
        context: 'Walking alone in Lisbon is very safe during day and night. The city has a relaxed, welcoming culture and locals are generally helpful. Hills can be steep, so comfortable shoes are essential. Most neighborhoods are well-lit and have good foot traffic even in evenings.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Chiado',
          description: 'Upscale shopping and cultural district with excellent safety record. Well-patrolled area with luxury stores, cafes, and the famous Carmo Ruins. Very safe day and night with good lighting and active street life.'
        },
        {
          name: 'Príncipe Real',
          description: 'Trendy neighborhood popular with young professionals and tourists. Excellent restaurants, boutique shops, and beautiful Príncipe Real Garden. Very safe with low crime rates and friendly local community.'
        },
        {
          name: 'Alfama',
          description: 'Historic neighborhood with narrow cobblestone streets and traditional Fado music. Generally safe but can be confusing to navigate. Stay on main routes at night and be cautious of steep, poorly lit alleys.'
        },
        {
          name: 'Bairro Alto',
          description: 'Famous nightlife district that\'s very safe despite being busy. Well-patrolled area with lots of bars and restaurants. Can get crowded and noisy at night but violent crime is rare. Watch for pickpockets in busy areas.'
        },
        {
          name: 'Santos',
          description: 'Design district with art galleries, trendy restaurants, and Design Museum. Safe area with good lighting and regular foot traffic. Popular with creative professionals and tourists.'
        },
        {
          name: 'Estrela',
          description: 'Quiet residential neighborhood with the beautiful Estrela Basilica and Garden. Very safe family area with low crime rates and peaceful atmosphere. Good for accommodation.'
        }
      ],
      caution: ['Some areas of Martim Moniz at night', 'Steep narrow alleys in Alfama after dark'],
      avoid: ['Cova da Moura area', 'Some outlying suburbs late at night']
    },
    accommodations: [
      {
        name: 'The Lumiares Hotel & Spa',
        type: 'hotel',
        features: ['Luxury hotel', 'Central location', '24/7 security', 'Female-friendly'],
        rating: 9.1,
        notes: 'Luxury boutique hotel in Chiado with excellent security and concierge services for solo female travelers.',
        link: 'https://www.thelumiares.com/'
      },
      {
        name: 'Lisb\'On Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Modern security', 'Social atmosphere'],
        rating: 8.7,
        notes: 'Popular hostel with female-only dorms and excellent security measures. Great for meeting other travelers.',
        link: 'https://www.lisbonhostel.com/'
      },
      {
        name: 'Yes! Lisbon Hostel',
        type: 'hostel',
        features: ['Women-only rooms', 'Rooftop terrace', 'Central Chiado location'],
        rating: 8.9,
        notes: 'Modern hostel with women-only accommodations and great location in safe Chiado district.',
        link: 'https://www.yeslisbon.com/'
      },
      {
        name: 'Home Lisbon Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Cozy atmosphere', 'Safe neighborhood'],
        rating: 8.5,
        notes: 'Small, intimate hostel with female dorms and homey atmosphere in safe residential area.',
        link: 'https://www.homelisbon.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Comfortable walking shoes essential for Lisbon's hills and cobblestones
• Light layers for variable weather - can be cool in mornings/evenings
• Modest dress for churches and religious sites
• Avoid flashy jewelry in tourist areas
• Bring a light jacket for ocean breezes`,
      firstTimers: `• Lisbon is very safe for solo women with basic precautions
• Learn basic Portuguese phrases - locals appreciate the effort
• Use official taxis or Uber for late night transport
• Save emergency number 112 and tourist police contacts
• Stay hydrated when walking the hills - carry water`,
      apps: [
        'NomadHer',
        'Tourlina',
        'Travel Ladies',
        'bSafe',
        'Moovit',
        'TripIt',
        'Airalo',
        'XE Currency',
        'PackPoint',
        'Rome2Rio'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Verified female-only travel community with safety features' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'Find verified female travel buddies with safety screening' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips from real travelers' },
        { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with SOS features and live streaming' },
        { name: 'Moovit', link: 'https://moovitapp.com/', description: 'Real-time transit info for Lisbon with accessibility routes' },
        { name: 'TripIt', link: 'https://www.tripit.com/', description: 'Organize travel plans and share itinerary with trusted contacts' },
        { name: 'Airalo', link: 'https://www.airalo.com/', description: 'eSIM data plans to stay connected safely without roaming fees' },
        { name: 'XE Currency', link: 'https://www.xe.com/apps/', description: 'Live exchange rates and offline currency converter' },
        { name: 'PackPoint', link: 'https://packpnt.com/', description: 'Smart packing checklist based on weather and activities' },
        { name: 'Rome2Rio', link: 'https://www.rome2rio.com/', description: 'Multi-modal transport options for day trips from Lisbon' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Socorro!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Call the police!',
          local: 'Chame a polícia!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I need a doctor.',
          local: 'Preciso de um médico.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Onde fica o hospital mais próximo?',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I am lost.',
          local: 'Estou perdida.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, deixe-me em paz.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Não me sinto segura.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Can you help me?',
          local: 'Pode ajudar-me?',
          localLanguage: 'Portuguese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Lisbon is casual but neat. Portuguese dress modestly for churches and religious sites. Business casual is appropriate for nicer restaurants. Comfortable walking shoes are essential due to hills and cobblestones. Beach wear only for coastal areas.',
      behaviorNorms: [
        'Greet with handshakes and maintain eye contact.',
        'Portuguese appreciate politeness and patience.',
        'Learn basic Portuguese phrases - locals are helpful when you try.',
        'Tipping 10% is customary in restaurants.',
        'Meal times are later - lunch 1-3pm, dinner 8-10pm.',
        'Be patient with service - Portuguese culture values taking time.',
        'Respect religious sites and dress modestly in churches.',
        'Public displays of affection should be modest.',
        'Queue politely and wait your turn.',
        'Show interest in Portuguese culture and history.'
      ],
      perception: 'Solo women travelers are very welcome in Lisbon. Portuguese culture is warm and hospitable, and locals are generally helpful to tourists. The city is progressive and women can dine alone, explore attractions, and use transport independently without issues. Street harassment is rare.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but very safe.'
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
        'Use official ATMs and avoid currency exchange at tourist areas for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Menu Scams',
        description: 'Some restaurants in tourist areas may have inflated "tourist menus". Ask for regular menu and check prices.',
        severity: 'low'
      },
      {
        title: 'Tram 28 Pickpocketing',
        description: 'The famous tram gets very crowded. Keep valuables secure and be aware of your surroundings.',
        severity: 'medium'
      },
      {
        title: 'Fake Fado Shows',
        description: 'Book Fado shows through reputable venues. Some tourist traps offer poor quality performances.',
        severity: 'low'
      }
    ],
    languages: ['Portuguese', 'English (widely spoken in tourist areas)'],
    daytimeSafetyPercent: 87.2,
    nighttimeSafetyPercent: 76.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lisbon',
    redFlags: [
      { label: 'Pickpocketing on Tram 28', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Tourist Overcharging', frequency: 'Rare', icon: 'DollarSign' },
      { label: 'Steep Hills/Falls', frequency: 'Occasional', icon: 'Mountain' },
    ],
    culturalDos: [
      'Learn basic Portuguese greetings.',
      'Dress modestly in religious sites.',
      'Be patient with service.',
      'Try local cuisine.',
      'Respect Portuguese customs.'
    ],
    culturalDonts: [
      "Don't rush meals - enjoy the experience.",
      "Don't wear beach clothes in the city.",
      "Don't be impatient with slower service.",
      "Don't ignore steep terrain when planning walks.",
      "Don't skip trying pastéis de nata."
    ],
    womensConfidenceScore: {
      score: 82.4,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Lisbon"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 92, source: 'Portugal Tourism Safety Report 2025', sourceUrl: 'https://www.visitportugal.com/safety' },
      { label: 'Nightlife', confidence: 81, source: 'Solo Female Travel Portugal 2025', sourceUrl: 'https://www.solofemaleguide.com/portugal' },
      { label: 'Public Transport', confidence: 88, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Lisbon' },
      { label: 'Dining Alone', confidence: 89, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/lisbon/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Busy tourist areas during peak season', 'Nightlife districts late at night', 'Crowded public transport'],
      reportingRate: 72,
      legalProtection: 'Strong legal protections under Portuguese and EU law. Police take reports seriously and victims have access to support services.',
      supportResources: [
        'APAV (Portuguese Association for Victim Support): 116 006, https://www.apav.pt/',
        'Women Against Violence Helpline: 800 202 148',
        'Tourist Police: +351 21 342 1634'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital de Santa Maria',
          address: 'Av. Prof. Egas Moniz, 1649-035 Lisboa',
          phone: '+351 21 780 5000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'General Medicine'],
          link: 'https://www.chln.min-saude.pt/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmácia Central',
          address: 'Rossio 62-64, 1100-200 Lisboa',
          phone: '+351 21 342 1418',
          hours: 'Mon-Fri 8:00-20:00, Sat 9:00-19:00',
          emergency: false,
          link: 'https://www.farmaciacentral.pt/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Lisbon: +351 21 780 5000',
          'Family Planning Portugal: +351 21 386 7890'
        ],
        gynecologists: [
          'Dr. Silva - Hospital Santa Maria: +351 21 780 5000'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Wide variety of international brands'
        ]
      },
      vaccinations: [
        'No specific vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Strong ocean currents at beaches',
        'UV exposure - use sunscreen'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Lisbon',
        address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
        phone: '+351 21 727 3300',
        email: 'lisbonacs@state.gov',
        emergency: '+351 21 727 3300',
        link: 'https://pt.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Lisbon',
          address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
          phone: '+351 21 727 3300',
          link: 'https://pt.usembassy.gov/'
        },
        {
          name: 'British Embassy Lisbon',
          address: 'Rua de São Bernardo 33, 1249-082 Lisboa',
          phone: '+351 21 392 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-lisbon'
        },
        {
          name: 'German Embassy Lisbon',
          address: 'Campo dos Mártires da Pátria 38, 1169-043 Lisboa',
          phone: '+351 21 881 0210',
          link: 'https://lissabon.diplo.de/'
        },
        {
          name: 'French Embassy Lisbon',
          address: 'Rua Santos-o-Velho 5, 1249-079 Lisboa',
          phone: '+351 21 393 9100',
          link: 'https://pt.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Lisbon',
          address: 'Rua do Salitre 1, 1269-052 Lisboa',
          phone: '+351 21 347 2381',
          link: 'https://www.exteriores.gob.es/embajadas/lisboa'
        },
        {
          name: 'Australian Embassy Lisbon',
          address: 'Avenida da Liberdade 200, 1250-147 Lisboa',
          phone: '+351 21 310 1500',
          link: 'https://portugal.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Lisbon',
          address: 'Avenida da Liberdade 198-200, 1250-147 Lisboa',
          phone: '+351 21 316 4600',
          link: 'https://www.canadainternational.gc.ca/portugal/'
        },
        {
          name: 'Netherlands Embassy Lisbon',
          address: 'Rua do Sacramento à Lapa 16, 1200-394 Lisboa',
          phone: '+351 21 714 0900',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/portugal'
        },
        {
          name: 'Danish Embassy Lisbon',
          address: 'Rua Castilho 16-4°, 1250-070 Lisboa',
          phone: '+351 21 381 2000',
          link: 'https://portugal.um.dk/'
        },
        {
          name: 'Swiss Embassy Lisbon',
          address: 'Travessa do Patrocínio 1, 1350-229 Lisboa',
          phone: '+351 21 394 0040',
          link: 'https://www.eda.admin.ch/lisboa'
        },
        {
          name: 'Indian Embassy Lisbon',
          address: 'Rua Pero da Covilhã 16, 1400-297 Lisboa',
          phone: '+351 21 301 0210',
          link: 'https://www.eoilisbon.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Lisbon',
        address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
        phone: '+351 21 727 3300',
        email: 'lisbonacs@state.gov',
        link: 'https://pt.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under Portuguese and EU law',
        'Equal rights and protection against discrimination',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Portugal: +351 21 386 7890',
        'Free legal advice for EU citizens',
        'English-speaking lawyers available through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency)',
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
          recommendations: ['Clean, modern, and very safe system'],
          companies: ['Metropolitano de Lisboa'],
          link: 'https://www.metrolisboa.pt/'
        },
        {
          type: 'Tram',
          safety: 8.5,
          recommendations: ['Iconic Tram 28 - watch for pickpockets due to crowds'],
          companies: ['Carris'],
          link: 'https://www.carris.pt/'
        },
        {
          type: 'Uber',
          safety: 9.0,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/pt/en/'
        }
      ],
      nightTravel: {
        safety: 8.2,
        warnings: [
          'Some steep areas poorly lit at night',
          'Ocean areas can be windy and isolated'
        ],
        alternatives: [
          'Night buses available',
          'Uber available 24/7',
          'Taxis readily available'
        ]
      },
      verifiedProviders: [
        {
          name: 'Metro Lisboa',
          type: 'Public Transport',
          contact: '+351 21 350 0115',
          safety: 8.8
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 9.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances'
      ],
      safeNeighborhoods: [
        'Chiado',
        'Príncipe Real',
        'Santos',
        'Estrela',
        'Avenidas Novas'
      ],
      womensOnly: [
        {
          name: 'Yes! Lisbon Hostel',
          type: 'Hostel',
          features: ['Women-only rooms', 'Central location', 'Modern security'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.1,
          comments: 'Felt very safe throughout my stay. Locals are helpful and friendly.',
          date: '2025-01-20'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Many cafes offer free WiFi',
        'Use VPN for sensitive transactions',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake booking sites',
        'Phishing emails from fake hotels',
        'Social media accommodation scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Portugal',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides strong protection',
        'Use secure payment methods',
        'Keep document copies in cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Tram 28',
          date: '2025-01-18',
          description: 'Tourist reported pickpocketing on crowded tram',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Wear comfortable shoes - Lisbon has many steep hills',
          author: 'Solo Traveler',
          date: '2025-01-22',
          upvotes: 67
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Portugal is very safe for travelers. Exercise normal precautions.',
      reason: 'Generally safe country with low crime rates.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/portugal-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Very safe with helpful locals',
        'Good public transport and walkable city center',
        'Try local cuisine and culture',
        'Watch for steep hills when planning walks'
      ]
    },
    crimeStatistics: {
      violentCrime: 5.8,
      propertyCrime: 1842,
      sexualAssault: 8.2,
      kidnapping: 0.1,
      source: 'Portuguese National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Moovit',
          purpose: 'Public transport navigation',
          rating: 4.5
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
          number: '+351 21 342 1634',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Lisbon\'s Hills and Transport',
        description: 'Lisbon has steep hills and cobblestone streets. Wear comfortable shoes and use trams/elevators to navigate. The city is very walkable but plan routes considering elevation.',
        severity: 'low',
        sourceName: 'Visit Portugal',
        sourceUrl: 'https://www.visitportugal.com/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $70 USD / day',
        description: 'Lisbon offers excellent value for money with good safety standards.',
        tip: 'Mid-range options provide great safety and comfort for solo travelers.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$15-25',
          safetyNote: 'Many hostels offer female-only dorms',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$50-80',
          safetyNote: 'Excellent security and central locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport',
          cost: '$1-3/ride',
          safetyDescription: 'Very safe and efficient',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe but watch for hills',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Public transport day passes offer great value',
        'Many free attractions and viewpoints',
        'Safe to walk most places during day',
        'Excellent local restaurants at reasonable prices'
      ]
    }
};

export default lisbon;