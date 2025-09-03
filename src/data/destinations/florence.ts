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
    reviewCount: 623,
    lastUpdated: '3 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.0,
        context: 'Florence very safe at night in historic center for solo female travel (Travel Ladies 2025). Women consistently report feeling completely secure walking alone at night around Duomo, Ponte Vecchio. 3.5/5 safety rating from female residents. Avoid Santa Maria Novella station area and Cascine Park late night - important solo female travel safety tip.'
      },
      publicTransit: {
        score: 8.2,
        context: 'Efficient ATAF buses and trams, generally safe for women traveling alone but pickpocket risk "very high level" in crowded transport (Travel Safe Abroad 2025). Be mindful of groping on public transport - key solo female travel safety concern. Single journey €1-2, but historic center very walkable for solo travelers.'
      },
      walkingAlone: {
        score: 8.6,
        context: 'Excellent for solo female travelers - "I felt completely safe walking around" (2025 traveler report). Compact 15-minute walkable center perfect for women traveling alone. Italian catcalling much reduced in metropolitan areas. Respectful locals, no reports of female tourists being sexually assaulted - making it one of the safest places for women to travel alone.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Historic Center (Centro Storico)',
          description: 'UNESCO World Heritage area with major attractions like Duomo, Uffizi, and Ponte Vecchio. Very safe with heavy foot traffic, good lighting, and regular police patrols. Perfect for solo female travelers seeking secure accommodation and sightseeing.'
        },
        {
          name: 'Santo Spirito',
          description: 'Charming Oltrarno neighborhood with artisan workshops, local restaurants, and beautiful Santo Spirito church. Safe and authentic area for women traveling alone, popular with locals and discerning solo female travelers.'
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
          description: 'Heart of Renaissance Florence with Palazzo Vecchio and Uffizi Gallery. Very safe for solo female travel with constant tourist presence and security. Well-lit and patrolled - ideal for women traveling alone.'
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
      },
      {
        name: 'FH55 Hotel Calzaiuoli',
        type: 'hotel',
        features: ['Prime Duomo location', '24/7 concierge', 'Women-friendly service', 'Rooftop terrace', 'Premium security'],
        rating: 9.2,
        notes: 'Luxury boutique hotel directly between Duomo and Palazzo Vecchio. Exceptional safety standards, female-focused amenities, and unbeatable location for solo women travelers. Staff trained in solo traveler assistance.',
        link: 'https://www.fh55hotels.com/hotel-calzaiuoli-florence/'
      }
    ],
    alerts: [
      {
        title: 'Very High Pickpocket Risk in Tourist Areas',
        description: 'Pickpocket risk at "very high level" especially in historic center, markets, and public transport. Bag snatching common in crowded areas like Ponte Vecchio, Uffizi vicinity.',
        location: 'Historic center, public transport, markets',
        reportCount: 34,
        severity: 'medium',
        dateReported: '3 days ago'
      },
      {
        title: 'Tourist Area Overcharging Scams',
        description: 'Restaurants near major attractions charging inflated "tourist prices" without disclosure. Museum ticket scam websites increasing.',
        location: 'Near Duomo, Uffizi, Ponte Vecchio',
        reportCount: 18,
        severity: 'medium',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Modest dress for churches - cover shoulders and knees
• Comfortable walking shoes essential for cobblestone streets
• Stylish but not flashy - Florentines appreciate good style
• Light layers for variable weather
• Avoid obvious tourist gear to blend in better`,
      firstTimers: `• Florence is extremely safe for solo female travelers - one of Italy's safest destinations for women traveling alone
• Learn basic Italian phrases - locals appreciate the effort and it enhances solo travel safety
• Book museum tickets in advance to avoid long queues - essential solo female travel tip
• Be aware of "very high level" pickpocket risk in crowded tourist areas - key women solo travel safety concern
• Respect church dress codes and photography rules - important for solo female travel etiquette`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Moovit',
        'Trenitalia',
        'GetYourGuide'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Florence exploration', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Italy safety insights', rating: 4.0 },
        { name: 'Moovit', link: 'https://moovitapp.com/', description: 'Florence public transport app for ATAF buses and trams with real-time updates', rating: 4.4 },
        { name: 'Trenitalia', link: 'https://www.trenitalia.com/', description: 'Official Italian railway app for safe travel to Rome, Venice, Milan from Florence', rating: 4.3 },
        { name: 'GetYourGuide', link: 'https://www.getyourguide.com/', description: 'Book verified museum tickets and tours - safer than street vendors in Florence', rating: 4.6 }
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
      perception: 'Solo female travelers are very welcome in Florence - making it one of the safest places for women to travel alone. Italian culture is warm and hospitable, and Florentines are generally helpful to solo female travelers. The city is progressive and women can dine alone, visit museums, and explore safely. Street harassment is rare, creating excellent conditions for women solo travel safety.',
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
      { label: 'Tourist Area Overpricing', frequency: 'Most common', icon: 'DollarSign' },
      { label: 'Pickpocketing Near Attractions', frequency: 'Very High Level', icon: 'Hand' },
      { label: 'Train Station Area at Night', frequency: 'Frequent', icon: 'MapPin' },
      { label: 'Fake Museum Ticket Websites', frequency: 'Increasing', icon: 'Globe' },
      { label: 'Restaurant Tourist Menu Scams', frequency: 'Common', icon: 'UtensilsCrossed' },
      { label: 'Aggressive Street Vendors', frequency: 'Daily', icon: 'Users' }
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
      commonLocations: ['Sexual harassment decreased to 4.3% in Italy (down from 6.5%)', 'Occasional verbal harassment (ciao bella) now rare in metropolitan Florence', 'Pickpocketing much more common than harassment for tourists', 'Public transport during crowded times - be mindful of groping'],
      reportingRate: 76, // Above EU average for reporting
      legalProtection: 'Strong legal protections under Italian and EU law with recent improvements. Sexual harassment headlines have raised awareness. 6.1% of women experience intimate partner violence (OECD), but tourist harassment very rare.',
      supportResources: [
        'Women Against Violence (National): 1522 (free, 24/7)',
        'Tourist Police Florence: +39 055 203391',
        'Florence Women\'s Center: +39 055 602304',
        'Emergency Services: 112 or 118',
        'U.S. Consulate Florence: +39 055 266951',
        'State Police (non-emergency): 113',
        'Careggi Hospital Emergency: +39 055 7941'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Azienda Ospedaliero Universitaria Careggi (Main Hospital)',
          address: 'Viale Pieraccini 17, 50134 Firenze',
          phone: '+39 055 42 77 111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Major Trauma Center', 'Women & Children\'s Hospital', 'Gynecology', 'Obstetrics', 'Reproductive Medicine'],
          link: 'https://www.aou-careggi.toscana.it/'
        },
        {
          name: 'Ospedale di Santa Maria Nuova',
          address: 'Piazza S. Maria Nuova, 1, 50122 Firenze',
          phone: '+39 055 27581',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Historic Hospital in City Center'],
          link: 'https://www.uslcentro.toscana.it/'
        },
        {
          name: 'Nuovo Ospedale S. Giovanni di Dio',
          address: 'Via Torregalli, 3, 50143 Firenze',
          phone: '+39 055 71921',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Healthcare'],
          link: 'https://www.uslcentro.toscana.it/'
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
          'Women & Children\'s Hospital - Careggi: New modern facility with 15 clinics',
          'Gynecology Outpatient - Careggi: +39 055 4277493',
          'Reproductive Medicine Center - Careggi: +39 055 7949369',
          'Family Planning Clinic - Careggi Pavilion 7: +39 055 7947729 (11am-1pm Mon-Fri)'
        ],
        gynecologists: [
          'Dr. Barbara Brodbeck (English/German): +39 055 470521, Cell: +39 335 8353612',
          'Dr. Angelo Scuderi - Santa Maria Annunziata: +39 055 574404, Cell: +39 348 3033496',
          'Careggi Gynecology Department: Comprehensive women\'s health services'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Careggi Hospital emergency services 24/7',
          'Farmacia Comunale (24/7): Santa Maria Novella station +39 055 289435'
        ],
        sanitaryProducts: [
          'Available everywhere: pharmacies, supermarkets, convenience stores',
          'European and international brands widely available',
          'No cultural restrictions or taboos around purchase'
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
      embassies: [
        {
          name: 'British Consulate Florence',
          address: 'Lungarno Corsini 2, 50123 Firenze',
          phone: '+39 055 284133',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-florence'
        },
        {
          name: 'German Consulate General Florence',
          address: 'Borgo Santi Apostoli 22, 50123 Firenze',
          phone: '+39 055 294722',
          link: 'https://florenz.diplo.de/'
        },
        {
          name: 'French Consulate General Florence',
          address: 'Piazza Ognissanti 2, 50123 Firenze',
          phone: '+39 055 230556',
          link: 'https://florence.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate Florence',
          address: 'Via Cavour 101, 50129 Firenze',
          phone: '+39 055 472781',
          link: 'https://www.exteriores.gob.es/consulados/florencia'
        },
        {
          name: 'Australian Honorary Consulate Florence',
          address: 'Via Borgo Ognissanti 13, 50123 Firenze',
          phone: '+39 055 294566',
          link: 'https://italy.embassy.gov.au/rome/florence.html'
        },
        {
          name: 'Canadian Honorary Consulate Florence',
          address: 'Via dei Bardi 28, 50125 Firenze',
          phone: '+39 055 234598',
          link: 'https://www.canadainternational.gc.ca/italy-italie/offices-bureaux/florence-firenze.aspx'
        },
        {
          name: 'Netherlands Consulate General Florence',
          address: 'Via Cavour 81, 50129 Firenze',
          phone: '+39 055 475249',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/italy'
        },
        {
          name: 'Danish Honorary Consulate Florence',
          address: 'Via Santo Spirito 11, 50125 Firenze',
          phone: '+39 055 287049',
          link: 'https://italien.um.dk/en'
        },
        {
          name: 'Swiss Consulate General Florence',
          address: 'Piazzale Galileo 5, 50125 Firenze',
          phone: '+39 055 222434',
          link: 'https://www.eda.admin.ch/florence'
        },
        {
          name: 'Indian Honorary Consulate Florence',
          address: 'Villa San Martino, Via di Maiano 16, 50014 Fiesole (FI)',
          phone: '+39 055 597912',
          link: 'https://www.eoirome.gov.in/'
        }
      ],
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
        'Excellent destination for solo female travel - ranked among safest European cities for women traveling alone',
        'Very safe with rich cultural experiences and women-friendly atmosphere',
        'Historic center perfect for solo female travel safety - walkable and well-patrolled',
        'Locals are generally helpful and friendly to solo female travelers',
        'Strong women solo travel safety network with excellent healthcare and support resources'
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
          purpose: 'Navigation and public transport planning',
          rating: 4.7
        },
        {
          name: 'Google Translate',
          purpose: 'Italian conversation and text translation',
          rating: 4.4
        },
        {
          name: 'Rick Steves Audio Europe',
          purpose: 'Free audio guides for Florence museums and attractions',
          rating: 4.6
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety with GPS tracking and emergency alerts',
          rating: 4.1
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community with Florence safety tips',
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
          number: '+39 055 203391',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master the Art of Avoiding Tourist Traps and Overcharging',
        description: 'Avoid restaurants with English menus near major attractions - they charge 50% more. Look for places where locals eat, especially in Oltrarno district. Never accept the first price at San Lorenzo leather market - everything is negotiable.',
        severity: 'medium',
        sourceName: 'Travel Ladies Community Reports 2025',
        sourceUrl: 'https://travelladies.app/safety/italy/florence'
      },
      {
        title: 'Protect Yourself from "Very High Level" Pickpocket Risk',
        description: 'Use an anti-theft crossbody bag with zippers facing your body. Pickpocketing is at very high levels in tourist areas like Ponte Vecchio, Uffizi, and public transport. Keep phone and wallet in front pockets, never back pockets.',
        severity: 'high',
        sourceName: 'Travel Safe Abroad 2025',
        sourceUrl: 'https://www.travelsafe-abroad.com/italy/florence/'
      },
      {
        title: 'Navigate Florence Like a Local - Walking Safety Tips',
        description: 'The historic center is compact and walkable within 15 minutes end-to-end. Use landmarks like the Duomo for orientation. Cobblestone streets can be slippery when wet - wear shoes with good grip. Florence is extremely safe for women walking alone, even at night.',
        severity: 'low',
        sourceName: 'Solo Female Traveler Reports 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-italy/'
      },
      {
        title: 'Book Museum Tickets Only Through Official Sources',
        description: 'Fake skip-the-line ticket websites are increasing. Only book Uffizi, Accademia, and other museums through official websites. Avoid street ticket sellers completely - they sell invalid or overpriced tickets.',
        severity: 'medium',
        sourceName: 'Florence Tourism Official Warnings 2025',
        sourceUrl: 'https://www.firenzeturismo.it/'
      },
      {
        title: 'Avoid Dangerous Areas - Train Station and Cascine Park at Night',
        description: 'Stay away from Santa Maria Novella train station area late at night. Avoid Cascine Park after dark completely. These are the only areas in Florence with safety concerns for solo women travelers.',
        severity: 'medium',
        sourceName: 'Local Safety Reports 2025',
        sourceUrl: 'https://www.ciaoflorence.it/en/service-center/faq/5/22/80'
      },
      {
        title: 'Take Advantage of Exceptional Women\'s Healthcare Services',
        description: 'Florence has world-class women\'s health services at Careggi Hospital with English-speaking gynecologists. Dr. Barbara Brodbeck speaks English/German (+39 335 8353612). Emergency contraception available at all pharmacies without prescription.',
        severity: 'low',
        sourceName: 'Healthcare Guide Florence 2025',
        sourceUrl: 'https://www.theflorentine.net/2017/06/05/sexual-health-resources-florence-italy-primer/'
      },
      {
        title: 'Use Taxi Rosa for Safe Night Transportation',
        description: 'Taxi Rosa provides priority night taxi service for women between 10pm-4am. Call +39 055 4378557 or +39 055 4361904. Official white taxis are safe and regulated, but avoid unmarked vehicles completely.',
        severity: 'low',
        sourceName: 'Florence Women\'s Safety Services 2025',
        sourceUrl: 'https://en.firenze-online.com/useful-information/useful-telephone-number-florence.php'
      },
      {
        title: 'Respect Renaissance Art and Church Dress Codes',
        description: 'Cover shoulders and knees when entering churches - keep a light scarf for easy covering. Never touch artworks in museums. Photography rules vary by location - ask before taking photos. Florentines appreciate visitors who respect their cultural heritage.',
        severity: 'low',
        sourceName: 'Cultural Etiquette Guide Florence',
        sourceUrl: 'https://www.visitflorence.com/tourist-info/practical-information.html'
      },
      {
        title: 'Save Money with Local Eating and Shopping Strategies',
        description: 'Eat aperitivo 6-8pm for generous food buffets with drinks (€8-12 excellent value). Shop at local markets like Sant\'Ambrogio instead of tourist areas. Stand at bar for espresso (€1.50) vs sitting (€3-5). Avoid coperto (cover charge) restaurants.',
        severity: 'low',
        sourceName: 'Budget Travel Florence 2025',
        sourceUrl: 'https://www.nomadicmatt.com/travel-guides/italy-travel-tips/florence/'
      },
      {
        title: 'Learn Basic Italian Phrases for Safety and Respect',
        description: 'Learn "Aiuto!" (Help!), "Chiamate la polizia!" (Call police!), "Non mi sento sicura" (I don\'t feel safe). Florentines greatly appreciate effort to speak Italian. Even basic phrases improve interactions and show cultural respect.',
        severity: 'low',
        sourceName: 'Solo Female Travel Italy Guide 2025',
        sourceUrl: 'https://thesharmini.com/solo-female-traveler/is-italy-safe/'
      },
      {
        title: 'Choose Accommodation Strategically for Safety and Value',
        description: 'Stay in Santa Croce, San Frediano, or Santo Spirito for 40-50% savings while maintaining safety. Historic center accommodation is expensive but offers maximum security. Female-only dorms available at Plus Florence and Academy Hostel.',
        severity: 'low',
        sourceName: 'Accommodation Safety Guide Florence 2025',
        sourceUrl: 'https://www.plushostels.com/florence/'
      },
      {
        title: 'Time Your Visit to Minimize Crowds and Costs',
        description: 'Visit during shoulder seasons (March, November) for 30-40% accommodation savings and manageable crowds. Summer (June-August) has highest pickpocket risk due to massive crowds. Winter offers lowest prices and authentic local atmosphere.',
        severity: 'low',
        sourceName: 'Seasonal Travel Planning Florence',
        sourceUrl: 'https://radicalstorage.com/travel/is-florence-expensive/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$180-210 USD / day (€70-150)',
        description: 'Updated 2025 costs for solo female travelers: typical tourists spend $210/day. Budget-conscious solo female travelers can manage $40-60/day with hostels and self-catering. Florence expensive but exceptional cultural value with excellent solo travel safety standards.',
        tip: 'Stay outside historic center (Santa Croce, San Frediano) for better value while maintaining solo female travel safety. Book early for prime locations. High season April-June, Sept-Oct most expensive for solo travelers.'
      },
      accommodation: [
        {
          type: 'Hostels/Shared Rooms',
          avgCost: '$35-60/night (decent ones $20+ minimum)',
          safetyNote: 'Female dorms available. Choose historic center for safety but higher cost.',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: '$120-180/night (€60-100)',
          safetyNote: 'Excellent security in restored historic buildings with modern amenities.',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$350-450/night (€200-300)',
          safetyNote: 'Premium security, concierge services, prime historic center locations.',
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
          method: 'ATAF Public Bus/Tram',
          cost: '€1-2/ride, day passes available',
          safetyDescription: 'Generally safe but high pickpocket risk in crowded vehicles',
          safetyLevel: 'medium'
        },
        {
          method: 'Licensed Taxi',
          cost: '€25-30 from airport, €10-15 city trips',
          safetyDescription: 'Very safe, regulated white taxis. Taxi Rosa service for women 10pm-4am',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Stay outside historic center (Santa Croce, San Frediano, San Marco) for 40-50% savings',
        'Many churches and piazzas free - Santo Spirito, Santa Croce exterior',
        'Aperitivo 6-8pm offers excellent food and drink value',
        'Walk everywhere - historic center only 15 minutes end-to-end',
        'Free museums first Sunday each month (October-March)',
        'Avoid restaurants with English menus near major sites - 50% markup',
        'Shop at local markets and supermarkets - 22% cheaper food than US',
        'Book Firenze Card (€85) if visiting 3+ major museums',
        'Avoid coperto (cover charge) restaurants - look for locals eating there',
        'Travel shoulder season (March, November) for 30-40% accommodation savings'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress stylishly yet modestly - Florentines appreciate fashion sense and proper attire in religious sites',
      'Greet with "Buongiorno" (morning) or "Buona sera" (evening) - polite greetings are fundamental to Italian social interaction',
      'Take time to savor meals and appreciate Italian dining culture - rushing through food is considered disrespectful',
      'Learn basic Italian phrases like "Grazie" and "Prego" - locals deeply appreciate effort to speak their language',
      'Show reverence in churches and museums - Florence\'s artistic heritage requires respectful, quiet appreciation'
    ],
    culturalDonts: [
      'Don\'t eat while walking or rush through meals - Italian culture values slow, mindful dining experiences',
      'Don\'t wear revealing clothing in churches or traditional areas - modest dress shows respect for Italian values',
      'Don\'t expect fast service in restaurants - leisurely dining is part of authentic Florentine culture',
      'Don\'t ignore personal space boundaries - Italians are expressive but respect physical boundaries with strangers',
      'Don\'t photograph people without permission - privacy is respected especially in traditional neighborhoods'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default florence;