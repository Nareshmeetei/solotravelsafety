import { Destination } from './types';

const florence: Destination = {
    city: 'Florence',
    country: 'Italy',
    continent: 'Europe',
    countryCode: 'it',
    overallScore: 8.4,
    nightSafety: 8.0,
    publicTransit: 8.2,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 456,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.0,
        context: 'Florence is very safe at night, especially in the historic center around Duomo, Ponte Vecchio, and main piazzas. The city is well-lit and patrolled. However, avoid the area around Santa Maria Novella train station late at night and be cautious in Oltrarno after midnight.'
      },
      publicTransit: {
        score: 8.2,
        context: 'Florence has efficient buses and trams that are generally safe. The historic center is very walkable. Public transport is clean and reliable, though can get crowded during peak tourist season. Night buses are limited but safe.'
      },
      walkingAlone: {
        score: 8.6,
        context: 'Florence is excellent for walking alone, both day and night. The compact historic center is pedestrian-friendly with well-maintained streets. Locals are generally helpful and respectful. The city feels safe and welcoming for solo female travelers.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Historic Center (Centro Storico)',
          description: 'UNESCO World Heritage area with major attractions like Duomo, Uffizi, and Ponte Vecchio. Very safe with heavy foot traffic, good lighting, and regular police patrols. Perfect for solo travelers.'
        },
        {
          name: 'Santo Spirito',
          description: 'Charming Oltrarno neighborhood with artisan workshops, local restaurants, and beautiful Santo Spirito church. Safe and authentic, popular with locals and discerning tourists.'
        },
        {
          name: 'San Lorenzo',
          description: 'Area around Central Market and Medici Chapels. Generally safe during day but can be busy with market activity. Good restaurants and local atmosphere.'
        },
        {
          name: 'Santa Croce',
          description: 'Historic area around Santa Croce Basilica with leather shops and restaurants. Safe with good foot traffic, though watch for pickpockets in crowded market areas.'
        },
        {
          name: 'Piazza della Signoria Area',
          description: 'Heart of Renaissance Florence with Palazzo Vecchio and Uffizi Gallery. Very safe with constant tourist presence and security. Well-lit and patrolled.'
        }
      ],
      caution: ['Santa Maria Novella train station area late at night', 'Parts of Oltrarno after midnight', 'Crowded tourist areas for pickpockets'],
      avoid: ['Industrial areas outside historic center', 'Isolated riverside areas at night']
    },
    accommodations: [
      {
        name: 'Hotel Davanzati',
        type: 'hotel',
        features: ['Historic center location', 'Boutique charm', '24/7 security', 'Female-friendly'],
        rating: 9.0,
        notes: 'Elegant boutique hotel in historic palazzo, perfect location for solo female travelers.',
        link: 'https://www.hoteldavanzati.it/'
      },
      {
        name: 'Plus Florence',
        type: 'hostel',
        features: ['Female dorms', 'Modern design', 'Central location', 'Excellent security'],
        rating: 8.7,
        notes: 'Contemporary hostel with women-only rooms and great facilities for solo travelers.',
        link: 'https://www.plushostels.com/florence/'
      },
      {
        name: 'Academy Hostel',
        type: 'hostel',
        features: ['Women-only floors', 'Near Accademia', 'Budget-friendly', 'Social atmosphere'],
        rating: 8.3,
        notes: 'Popular hostel with female-only accommodations near major museums.',
        link: 'https://www.academyhostel.eu/'
      },
      {
        name: 'Hotel Pendini',
        type: 'hotel',
        features: ['Central Repubblica location', 'Historic building', 'Solo traveler friendly'],
        rating: 8.5,
        notes: 'Classic hotel in perfect central location, walking distance to all major sites.',
        link: 'https://www.hotelpendini.it/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Modest dress for churches - cover shoulders and knees
• Comfortable walking shoes essential for cobblestone streets
• Stylish but not flashy - Florentines appreciate good style
• Light layers for variable weather
• Avoid obvious tourist gear to blend in better`,
      firstTimers: `• Florence is very safe for solo women travelers
• Learn basic Italian phrases - locals appreciate the effort
• Book museum tickets in advance to avoid long queues
• Be aware of pickpockets in crowded tourist areas
• Respect church dress codes and photography rules`,
      apps: [
        'Citymapper',
        'Rick Steves Audio Europe',
        'Google Translate',
        'Travel Ladies',
        'My Safetipin'
      ],
      appLinks: [
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Public transport and walking navigation' },
        { name: 'Rick Steves Audio Europe', link: 'https://www.ricksteves.com/audio-europe', description: 'Free audio guides for Florence attractions' },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Italian translation and conversation help' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Aiuto!',
          localLanguage: 'Italian'
        },
        {
          english: 'Call the police!',
          local: 'Chiamate la polizia!',
          localLanguage: 'Italian'
        },
        {
          english: 'I need a doctor.',
          local: 'Ho bisogno di un medico.',
          localLanguage: 'Italian'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Dov\'è l\'ospedale più vicino?',
          localLanguage: 'Italian'
        },
        {
          english: 'I am lost.',
          local: 'Sono persa.',
          localLanguage: 'Italian'
        },
        {
          english: 'Please leave me alone.',
          local: 'Per favore, lasciatemi in pace.',
          localLanguage: 'Italian'
        },
        {
          english: 'I feel unsafe.',
          local: 'Non mi sento sicura.',
          localLanguage: 'Italian'
        },
        {
          english: 'Can you help me?',
          local: 'Mi può aiutare?',
          localLanguage: 'Italian'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Florentines dress stylishly and appreciate good fashion. Smart casual is appropriate for most situations. Churches require covered shoulders and knees. Avoid shorts, flip-flops, and overly casual clothing in restaurants and museums.',
      behaviorNorms: [
        'Greet with "Buongiorno" (morning) or "Buonasera" (evening).',
        'Learn basic Italian phrases - locals greatly appreciate effort.',
        'Meal times are later - lunch 1-3pm, dinner 8-10pm.',
        'Dress appropriately for churches and religious sites.',
        'Be patient with service - Italian culture values taking time.',
        'Tipping 10-15% is appreciated but not mandatory.',
        'Respect art and cultural heritage - no touching sculptures.',
        'Walk on the right side of sidewalks and stairs.',
        'Don\'t eat or drink near monuments and churches.',
        'Show appreciation for Renaissance art and history.'
      ],
      perception: 'Solo women travelers are very welcome in Florence. Italian culture is warm and hospitable, and Florentines are generally helpful to tourists. The city is progressive and women can dine alone, visit museums, and explore safely. Street harassment is rare.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-June, September-October'],
      events: 'Spring and fall offer ideal weather, fewer crowds, and excellent safety conditions. Summer is safe but very crowded.'
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
        title: 'Fake Art Sales',
        description: 'Street vendors selling "original" paintings near tourist sites. All are mass-produced copies.',
        severity: 'low'
      },
      {
        title: 'Restaurant Tourist Menus',
        description: 'Some restaurants near major sites have inflated "tourist menus". Look for places popular with locals.',
        severity: 'low'
      },
      {
        title: 'Leather Market Overpricing',
        description: 'San Lorenzo leather market prices are negotiable. Don\'t accept first price offered.',
        severity: 'low'
      },
      {
        title: 'Museum Skip-the-Line Scams',
        description: 'Buy official tickets online or at official ticket offices. Avoid street sellers.',
        severity: 'medium'
      }
    ],
    languages: ['Italian', 'English (moderate level in tourist areas)'],
    daytimeSafetyPercent: 87.9,
    nighttimeSafetyPercent: 78.4,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Florence',
    redFlags: [
      { label: 'Tourist Area Overpricing', frequency: 'Common', icon: 'DollarSign' },
      { label: 'Pickpocketing Near Attractions', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Train Station Area at Night', frequency: 'Rare', icon: 'MapPin' }
    ],
    culturalDos: [
      'Learn basic Italian greetings.',
      'Dress stylishly and appropriately.',
      'Respect church dress codes.',
      'Appreciate Renaissance art and culture.',
      'Be patient with Italian pace of life.'
    ],
    culturalDonts: [
      'Don\'t wear casual clothes to nice restaurants.',
      'Don\'t touch artworks in museums.',
      'Don\'t eat or drink near monuments.',
      'Don\'t expect fast service.',
      'Don\'t ignore church dress codes.'
    ],
    womensConfidenceScore: {
      score: 84.6,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Florence"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 93, source: 'Italy Tourism Safety Report 2025', sourceUrl: 'https://www.italia.it/safety' },
      { label: 'Nightlife', confidence: 82, source: 'Solo Female Travel Italy 2025', sourceUrl: 'https://www.solofemaleguide.com/italy' },
      { label: 'Public Transport', confidence: 82, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Florence' },
      { label: 'Dining Alone', confidence: 91, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/florence/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Crowded tourist areas during peak season', 'Nightlife areas late at night', 'Public transport during rush hour'],
      reportingRate: 76,
      legalProtection: 'Strong legal protections under Italian and EU law. Police take reports seriously and Italy has comprehensive anti-harassment legislation.',
      supportResources: [
        'Women Against Violence: 1522 (free, 24/7)',
        'Tourist Police: +39 055 203391',
        'Florence Women\'s Center: +39 055 602304'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Ospedale di Careggi',
          address: 'Largo Brambilla 3, 50134 Firenze',
          phone: '+39 055 7941',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Women\'s Health'],
          link: 'https://www.aou-careggi.toscana.it/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Comunale',
          address: 'Via dei Calzaiuoli 7r, 50122 Firenze',
          phone: '+39 055 215472',
          hours: 'Mon-Sat 9:00-19:30',
          emergency: false,
          link: 'https://www.farmaciacomunale.it/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Florence: +39 055 7941',
          'Family Planning Tuscany: +39 055 4382'
        ],
        gynecologists: [
          'Dr. Rossi - Careggi Hospital: +39 055 7941'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Wide variety of European and international brands'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'High summer temperatures - stay hydrated',
        'Air pollution during summer months'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Florence',
        address: 'Lungarno Vespucci 38, 50123 Firenze',
        phone: '+39 055 266951',
        email: 'florenceacs@state.gov',
        emergency: '+39 055 266951',
        link: 'https://it.usembassy.gov/embassy-consulates/florence/'
      },
      embassies: [
        {
          name: 'British Consulate Florence',
          address: 'Lungarno Corsini 2, 50123 Firenze',
          phone: '+39 055 284133',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-florence'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Florence',
        address: 'Lungarno Vespucci 38, 50123 Firenze',
        phone: '+39 055 266951',
        email: 'florenceacs@state.gov',
        link: 'https://it.usembassy.gov/embassy-consulates/florence/'
      },
      womensRights: [
        'Strong legal protections under Italian and EU law',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Italy: 800 900 500',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through consulate'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency)',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact consulate for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Walking',
          safety: 9.2,
          recommendations: ['Historic center is very walkable and safe'],
          companies: ['Self'],
          link: ''
        },
        {
          type: 'ATAF Bus',
          safety: 8.2,
          recommendations: ['Safe and efficient public buses'],
          companies: ['ATAF'],
          link: 'https://www.ataf.net/'
        },
        {
          type: 'Taxi',
          safety: 8.8,
          recommendations: ['Official white taxis are safe and regulated'],
          companies: ['Various licensed operators'],
          link: ''
        }
      ],
      nightTravel: {
        safety: 8.0,
        warnings: [
          'Some areas around train station less safe late at night',
          'Limited public transport after midnight'
        ],
        alternatives: [
          'Florence is very walkable even at night in historic center',
          'Official taxis available',
          'Most attractions within walking distance'
        ]
      },
      verifiedProviders: [
        {
          name: 'ATAF',
          type: 'Public Bus',
          contact: '+39 800 424500',
          safety: 8.2
        },
        {
          name: 'Official Taxis',
          type: 'Taxi',
          contact: '+39 055 4390',
          safety: 8.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Historic building security'
      ],
      safeNeighborhoods: [
        'Historic Center (Centro Storico)',
        'Santo Spirito',
        'Santa Croce',
        'San Lorenzo',
        'Oltrarno (central areas)'
      ],
      womensOnly: [
        {
          name: 'Plus Florence',
          type: 'Hostel',
          features: ['Female dorms', 'Modern design', 'Central location'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.7,
          safety: 8.9,
          comments: 'Felt completely safe walking alone even at night. Beautiful and welcoming city.',
          date: '2025-01-17'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Free WiFi in many cafes and museums',
        'Use VPN for sensitive data',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake museum ticket websites',
        'Phishing emails from fake accommodations',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Italy',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides strong protection',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Tourist Overcharging',
          location: 'Near Duomo',
          date: '2025-01-18',
          description: 'Restaurant charged tourist prices without disclosure',
          severity: 'low'
        },
        {
          type: 'Pickpocketing',
          location: 'Ponte Vecchio',
          date: '2025-01-16',
          description: 'Tourist reported bag snatching attempt',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Book museum tickets online in advance to avoid queues and scams',
          author: 'Art Lover',
          date: '2025-01-19',
          upvotes: 187
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Italy is generally safe for travelers. Exercise normal precautions and be aware of petty crime in tourist areas.',
      reason: 'Generally safe with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/italy-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Very safe with rich cultural experiences',
        'Historic center is perfect for walking alone',
        'Locals are generally helpful and friendly'
      ]
    },
    crimeStatistics: {
      violentCrime: 6.8,
      propertyCrime: 2234,
      sexualAssault: 9.1,
      kidnapping: 0.1,
      source: 'Italian National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Comfortable walking shoes',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Small crossbody bag'
      ],
      safetyApps: [
        {
          name: 'Citymapper',
          purpose: 'Navigation and transport info',
          rating: 4.7
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
          number: '+39 055 203391',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Navigate Florence Like a Local',
        description: 'The historic center is compact and walkable. Use landmarks like the Duomo for orientation. Most major sites are within 15 minutes walking distance of each other.',
        severity: 'low',
        sourceName: 'Florence Tourism Board',
        sourceUrl: 'https://www.firenzeturismo.it/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$70 - $120 USD / day',
        description: 'Florence offers excellent cultural value with good safety standards and amazing art.',
        tip: 'Book accommodations early for better rates and prime locations.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$25-40',
          safetyNote: 'Choose hostels in historic center for safety and convenience',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$80-140',
          safetyNote: 'Excellent security in historic buildings',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe and most efficient in historic center',
          safetyLevel: 'high'
        },
        {
          method: 'Public Bus',
          cost: '$1-2/ride',
          safetyDescription: 'Safe and reliable',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Many churches and piazzas are free to visit',
        'Aperitivo offers great value for food and drinks',
        'Walk everywhere in the compact historic center',
        'Visit free museums on first Sunday of each month'
      ]
    }
};

export default florence;