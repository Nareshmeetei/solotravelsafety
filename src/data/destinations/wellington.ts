import { Destination } from './types';

const wellington: Destination = {
    city: 'Wellington',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 110,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Kiwi culture is respectful.' }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Te Aro',
          description: "Wellington's cultural and entertainment heart with excellent safety record. Well-lit streets, active nightlife, and frequent police patrols. Perfect for solo female travelers with abundant cafes, galleries, and shops. Very walkable with good public transport connections."
        },
        {
          name: 'Mount Victoria',
          description: 'Charming hillside suburb offering stunning harbor views and safe residential streets. Popular with young professionals and families. Excellent safety record with well-maintained paths and good lighting. Great for solo travelers seeking quiet accommodation near the city.'
        },
        {
          name: 'Kelburn',
          description: 'University area with young, vibrant atmosphere and excellent safety standards. Home to Victoria University with active student life and community feel. Well-connected by cable car and buses. Very safe for solo female travelers.'
        },
        {
          name: 'Thorndon',
          description: 'Historic parliamentary district with excellent security due to government buildings. Upscale area with beautiful heritage architecture, safe streets, and professional atmosphere. Ideal for solo travelers interested in politics and history.'
        },
        {
          name: 'Oriental Bay',
          description: 'Waterfront suburb with beautiful beach and promenade. Very safe with regular foot traffic and excellent lighting. Popular for morning runs and evening walks. Great accommodation options for solo travelers seeking scenic location.'
        },
        {
          name: 'Newtown',
          description: 'Eclectic bohemian neighborhood with diverse community and good safety record. Excellent cafes, street art, and alternative culture. Generally safe with active street life, though stick to main streets at night.'
        }
      ],
      caution: [
        'Courtenay Place late at night: Main nightlife strip can get rowdy after midnight on weekends. Generally safe but exercise caution with intoxicated individuals.',
        'Some industrial areas of Petone: Quiet after business hours with less foot traffic. Not unsafe but less ideal for solo evening walks.',
        'Wellington Railway Station area late at night: Can have some homeless individuals and reduced activity. Generally safe but stay alert.'
      ],
      avoid: [
        'Wellington is exceptionally safe overall. No truly dangerous areas for tourists.',
        'Isolated sections of Town Belt reserves very late at night - stick to well-lit, populated paths in parks after dark.'
      ]
    },
    accommodations: [
      {
        name: 'YHA Wellington City',
        type: 'hostel',
        features: ['Female-only dorms', 'Central Te Aro location', '24/7 reception', 'Kitchen facilities'],
        rating: 8.5,
        notes: 'Top choice for solo female travelers. Excellent safety record, international atmosphere, and perfect location for exploring Wellington safely.',
        link: 'https://www.yha.co.nz/hostels/north-island/wellington-city/'
      },
      {
        name: 'InterContinental Wellington',
        type: 'hotel',
        features: ['Luxury waterfront', '24/7 security', 'Premium location', 'Concierge service'],
        rating: 9.0,
        notes: 'Premium option with exceptional security and service. Perfect for solo female travelers seeking luxury with top-tier safety in prime location.',
        link: 'https://www.ihg.com/intercontinental/hotels/gb/en/wellington/wlght/hoteldetail'
      },
      {
        name: 'Nomads Capital Backpackers',
        type: 'hostel',
        features: ['Female dorms', 'Courtenay Place location', 'Social atmosphere', 'Security lockers'],
        rating: 8.3,
        notes: 'Popular with international solo travelers. Good safety standards in heart of entertainment district. Vibrant social scene with fellow travelers.',
        link: 'https://www.nomadsworld.com/backpacker-hostels/new-zealand/wellington/capital/'
      },
      {
        name: 'Bolton Hotel Wellington',
        type: 'hotel',
        features: ['Apartment-style suites', 'Safe Thorndon location', 'Kitchen facilities', 'Fitness center'],
        rating: 8.8,
        notes: 'Excellent for extended stays with apartment-style living. Very safe location near Parliament with professional atmosphere.',
        link: 'https://www.boltonhotel.co.nz/'
      },
      {
        name: 'Ohtel Wellington',
        type: 'hotel',
        features: ['Modern design', 'Central location', 'Female-friendly policies', 'Rooftop bar'],
        rating: 8.7,
        notes: 'Contemporary hotel with excellent safety standards and vibrant atmosphere. Perfect for solo female travelers seeking modern amenities.',
        link: 'https://ohtelwellington.co.nz/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Layer clothing for Wellington's famously changeable weather
• Windproof jacket essential - Wellington is known as the \"Windy City\"
• Waterproof shoes and clothing for frequent rain showers
• Comfortable walking shoes for Wellington's hilly terrain
• Casual dress perfectly acceptable everywhere
• Warm layers needed even in summer due to wind chill`,
      firstTimers: `• Wellington is perfect for first-time solo female travelers - extremely safe and welcoming
• English is the primary language with friendly Kiwi hospitality
• Download Metlink app for public transport navigation
• New Zealand uses contactless payments extensively
• Emergency number 111 works for all services (police, fire, medical)
• Kiwis are known for being helpful and down-to-earth - don't hesitate to ask for help`,
      apps: [
        'Metlink',
        'Uber',
        'Snapper',
        'WellingtonNZ',
        'MetService'
      ],
      appLinks: [
        { name: 'Metlink', link: 'https://www.metlink.org.nz/', description: 'Official Wellington public transport app with real-time information' },
        { name: 'Uber', link: 'https://www.uber.com/nz/en/', description: 'Reliable ride-hailing service in Wellington' },
        { name: 'Snapper', link: 'https://www.snapper.co.nz/', description: 'Wellington transport payment card and mobile app' },
        { name: 'WellingtonNZ', link: 'https://wellingtonnz.com/', description: 'Official Wellington tourism app with events and attractions' },
        { name: 'MetService', link: 'https://www.metservice.com/', description: "Essential weather app for Wellington's changeable conditions" }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English'
        },
        {
          english: 'Call the police!',
          local: 'Call the police!',
          localLanguage: 'English'
        },
        {
          english: 'I need help.',
          local: 'I need help.',
          localLanguage: 'English'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Where is the nearest hospital?',
          localLanguage: 'English'
        },
        {
          english: 'I am lost.',
          local: 'I am lost.',
          localLanguage: 'English'
        },
        {
          english: 'Please leave me alone.',
          local: 'Please leave me alone.',
          localLanguage: 'English'
        },
        {
          english: 'I feel unsafe.',
          local: 'I feel unsafe.',
          localLanguage: 'English'
        },
        {
          english: 'Can you help me?',
          local: 'Can you help me?',
          localLanguage: 'English'
        },
        {
          english: 'Hello (Maori greeting)',
          local: 'Kia ora',
          localLanguage: 'Te Reo Maori'
        },
        {
          english: 'Thank you (Maori)',
          local: 'Kia ora',
          localLanguage: 'Te Reo Maori'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but windy.'
    },
    emergencyInfo: {
      police: '111', fire: '111', medical: '111', general: '111'
    },
    currency: {
      name: 'New Zealand Dollar', code: 'NZD', exchangeRate: {
      usd: 0.6024,
      eur: 0.5133,
      gbp: 0.4482
    }, scamWarnings: [],
    },
    usefulTips: [
      {
        title: 'Be Prepared and Upskill for Outdoor Activities',
        description: 'Wellington is a gateway to outdoor adventures. Always prepare thoroughly, check weather, and upskill in navigation and safety before hiking or tramping.',
        severity: 'low',
        sourceName: 'NZ Mountain Safety Council',
        sourceUrl: 'https://www.mountainsafety.org.nz/read/a-womans-guide-to-solo-tramping-in-nz'
      },
      {
        title: 'Keep Valuables Hidden in Cars and Accommodations',
        description: 'Car break-ins can occur, especially at trailheads and remote parking. Hide valuables and never leave them in sight.',
        severity: 'low',
        sourceName: 'Petrina Darrah',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        title: 'Use Public Transport and Trusted Rideshares',
        description: "Wellington's public transport is safe and reliable. For taxis or rideshares, use licensed providers and share your ride details with someone you trust.",
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/new-zealand/wellington'
      },
      {
        title: 'Trust Your Instincts and Choose Well-Lit Areas at Night',
        description: 'Wellington is generally safe, but avoid poorly lit or deserted areas at night. Trust your instincts and stay in busy, central neighborhoods.',
        severity: 'low',
        sourceName: 'Petrina Darrah',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        title: 'Leave Your Itinerary with Someone and Carry Emergency Contacts',
        description: 'Always let someone know your plans, especially for outdoor activities. Carry emergency contacts and consider a personal locator beacon for remote trips.',
        severity: 'low',
        sourceName: 'NZ Mountain Safety Council',
        sourceUrl: 'https://www.mountainsafety.org.nz/read/a-womans-guide-to-solo-tramping-in-nz'
      }
    ],
    languages: ['English', 'Maori'],
    daytimeSafetyPercent: 85.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Wellington)
    nighttimeSafetyPercent: 67.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Wellington)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Wellington',
    // Red flags based on Numbeo 2025, Petrina Darrah, and local advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Wellington
    // https://www.petrinadarrah.com/posts/safety-in-new-zealand
    // https://www.godigit.com/international-travel-insurance/tourist-scams/tourist-scams-in-new-zealand
    redFlags: [
      {
        label: 'Car Break-ins & Theft (Rental Cars, Trailheads)',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Petty Theft & Pickpocketing (Tourist Areas)',
        frequency: 'Rare',
        icon: 'Hand',
      },
      {
        label: 'Nightlife Drunk Behavior (Downtown, Waterfront)',
        frequency: 'Rare',
        icon: 'Beer',
      },
      {
        label: 'Earthquakes & Natural Disasters',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      }
    ],
  culturalSensitivity: {
    culturalDos: [
      'Greet with a friendly "Kia ora" or "Hello."',
      'Respect Maori culture and learn basic phrases.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about New Zealand\\'s history or politics."
    ]
  },
  scamWarnings: [],
    // Add Women’s Confidence Score (Numbeo 2025, Cat is Out of the Office, WEF Global Gender Gap 2024)
    womensConfidenceScore: {
      score: 83.5,
      source: 'WEF Global Gender Gap Report 2024 & Travel Ladies',
      sourceUrl: 'https://travelladies.app/safety/new-zealand/wellington'
    },
    // Add Confidence by Activity (2025, aggregated from Be My Travel Muse, Travel Ladies, and recent solo female travel reviews)
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 97,
        source: 'Tourism New Zealand & Petrina Darrah 2025',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        label: "Nightlife",
        confidence: 90,
        source: 'Be My Travel Muse & Local Reports 2025',
        sourceUrl: 'https://bemytravelmuse.com/new-zealand-safety/'
      },
      {
        label: "Public Transport",
        confidence: 98,
        source: 'Metlink Safety Statistics 2025',
        sourceUrl: 'https://www.metlink.org.nz/customer-services/passenger-safety/'
      },
      {
        label: "Dining Alone",
        confidence: 95,
        source: 'Travel Ladies & Wellington Food Scene 2025',
        sourceUrl: 'https://travelladies.app/safety/new-zealand'
      }
    ],
  legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Wellington',
          address: '29 Fitzherbert Terrace, Thorndon, Wellington 6011',
          phone: '+64 4 462 6000',
          link: 'https://nz.usembassy.gov/'
        },
        {
          name: 'British High Commission Wellington',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.gov.uk/world/organisations/british-high-commission-wellington'
        },
        {
          name: 'German Embassy Wellington',
          address: '90-92 Hobson Street, Thorndon, Wellington',
          phone: '+64 4 473 6063',
          link: 'https://wellington.diplo.de/'
        },
        {
          name: 'French Embassy Wellington',
          address: '34-42 Manners Street, Wellington 6011',
          phone: '+64 4 384 2555',
          link: 'https://nz.ambafrance.org/'
        },
        {
          name: 'Australian High Commission Wellington',
          address: '72-78 Hobson Street, Thorndon, Wellington',
          phone: '+64 4 473 6411',
          link: 'https://newzealand.embassy.gov.au/'
        },
        {
          name: 'Canadian High Commission Wellington',
          address: '125 The Terrace, Wellington 6011',
          phone: '+64 4 473 9577',
          link: 'https://www.international.gc.ca/country-pays/new_zealand-nouvelle_zelande/'
        },
        {
          name: 'Netherlands Embassy Wellington',
          address: '57 Willis Street, Wellington 6011',
          phone: '+64 4 471 6390',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/new-zealand'
        },
        {
          name: 'Swiss Embassy Wellington',
          address: '22 Panama Street, Wellington 6011',
          phone: '+64 4 472 1593',
          link: 'https://www.eda.admin.ch/wellington'
        },
        {
          name: 'British High Commission Wellington',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.gov.uk/world/organisations/british-high-commission-wellington'
        },
        {
          name: 'Spanish Embassy Wellington',
          address: '50 Manners Street, Wellington 6011',
          phone: '+64 4 802 5665',
          link: 'https://www.exteriores.gob.es/embajadas/wellington'
        },
        {
          name: 'Australian High Commission Wellington',
          address: '72-78 Hobson Street, Thorndon, Wellington',
          phone: '+64 4 473 6411',
          link: 'https://newzealand.embassy.gov.au/'
        },
        {
          name: 'Canadian High Commission Wellington',
          address: '125 The Terrace, Wellington 6011',
          phone: '+64 4 473 9577',
          link: 'https://www.international.gc.ca/country-pays/new_zealand-nouvelle_zelande/'
        },
        {
          name: 'Danish Embassy Wellington',
          address: '4 Willeston Street, Wellington 6011',
          phone: '+64 4 471 0520',
          link: 'https://newzealand.um.dk/'
        },
        {
          name: 'Indian High Commission Wellington',
          address: '180 Molesworth Street, Thorndon, Wellington',
          phone: '+64 4 473 6390',
          link: 'https://www.hcinz.gov.in/'
        }
      ],
      womensRights: [
        "Legal framework for women's rights varies by country",
        'Contact local embassy for specific information',
        "International women's rights organizations available"
      ],
      legalSupport: [
        'Contact local embassy for legal assistance',
        'International legal aid organizations available',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately',
        'Contact embassy for consular assistance',
        'Document all incidents with photos and details',
        'Keep copies of all police reports'
      ]
    },
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Courtenay Place nightlife area', 'Some public transport late night', 'Crowded events', 'Online platforms'],
      reportingRate: 78,
      legalProtection: 'Extremely strong legal framework. New Zealand has comprehensive anti-harassment laws and is a world leader in gender equality. Strong victim support services and zero tolerance policy.',
      supportResources: [
        'Emergency Services: 111',
        "Women's Refuge Crisis Line: 0800 733 843 (24/7)",
        'Safe to Talk Sexual Harm Helpline: 0800 044 334',
        'Wellington Rape Crisis: 04 801 6655',
        'U.S. Embassy Wellington: +64 4 462 6000'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Wellington Regional Hospital',
          address: 'Riddiford Street, Newtown, Wellington 6021',
          phone: '+64 4 385 5999',
          emergency: true,
          specialties: ['Emergency Medicine', "Women's Health", 'Trauma Care'],
          link: 'https://www.capitaldhb.org.nz/our-hospitals/wellington-regional-hospital/'
        },
        {
          name: 'Bowen Hospital',
          address: '98 Churchill Drive, Crofton Downs, Wellington',
          phone: '+64 4 479 8899',
          emergency: false,
          specialties: ['Private Healthcare', "Women's Health", 'Specialist Care'],
          link: 'https://www.bowenhospital.co.nz/'
        },
        {
          name: 'Wakefield Hospital',
          address: '90 Hanson Street, Newtown, Wellington',
          phone: '+64 4 381 8100',
          emergency: false,
          specialties: ['Private Healthcare', 'Specialist Services'],
          link: 'https://www.wakefieldhealth.com/'
        }
      ],
      pharmacies: [
        {
          name: 'Life Pharmacy Willis Street',
          address: '126 Willis Street, Wellington Central',
          phone: '+64 4 385 8810',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00, Sun 10:00-17:00',
          emergency: false,
          link: 'https://www.lifepharmacy.co.nz/'
        },
        {
          name: 'Unichem Pharmacy (24/7)',
          address: '17 Adelaide Road, Wellington',
          phone: '+64 4 389 8318',
          hours: '24/7',
          emergency: true,
          link: 'https://www.unichem.co.nz/'
        }
      ],
      womensHealth: {
        clinics: [
          "Wellington Women's Health Collective: +64 4 385 8792",
          'Family Planning Wellington: +64 4 389 4316',
          "Capital & Coast DHB Women's Health: +64 4 385 5999"
        ],
        gynecologists: [
          'Dr. Sarah Thompson at Wellington Hospital: +64 4 385 5999',
          'Dr. Emma Wilson at Bowen Hospital: +64 4 479 8899'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Free at Family Planning clinics',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all convenience stores, pharmacies, and supermarkets',
          'Comprehensive selection at major chains',
          'Free products available in many public buildings and universities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Wellington',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Consider travel insurance for outdoor activities'
      ],
      healthRisks: [
        'UV exposure due to hole in ozone layer - use strong sunscreen',
        'Wind-related injuries - secure loose items in strong winds',
        'Hypothermia risk in outdoor activities during winter',
        'Dehydration during summer outdoor activities'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metlink (Bus/Train/Cable Car)',
          safety: 9.6,
          recommendations: ['Excellent safety record', 'CCTV monitoring', 'Real-time tracking'],
          companies: ['Metlink'],
          link: 'https://www.metlink.org.nz/'
        },
        {
          type: 'Uber',
          safety: 9.1,
          recommendations: ['GPS tracking', 'Driver verification', 'Good coverage'],
          companies: ['Uber'],
          link: 'https://www.uber.com/nz/en/'
        },
        {
          type: 'Wellington Taxis',
          safety: 8.9,
          recommendations: ['Licensed companies', 'Professional drivers', 'Regulated fares'],
          companies: ['Green Cabs', 'Corporate Cabs'],
          link: 'https://www.greencabs.co.nz/'
        },
        {
          type: 'Wellington Cable Car',
          safety: 9.8,
          recommendations: ['Historic funicular', 'Excellent safety record', 'Tourist favorite'],
          companies: ['Wellington Cable Car'],
          link: 'https://www.wellingtoncablecar.co.nz/'
        }
      ],
      nightTravel: {
        safety: 8.8,
        warnings: [
          'Very safe for night travel in central Wellington',
          'Public transport operates until midnight (later on weekends)',
          'Well-lit streets throughout city center',
          'Exercise standard precautions in less busy areas'
        ],
        alternatives: [
          'Night Bus services available on main routes',
          'Uber and taxi services operate 24/7',
          'Very safe to walk in Te Aro, Thorndon, and Mount Victoria',
          'Wellington Cable Car operates until late evening'
        ]
      },
      verifiedProviders: [
        {
          name: 'Metlink',
          type: 'Public Transport',
          contact: 'Metlink app',
          safety: 9.6
        },
        {
          name: 'Uber',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.1
        },
        {
          name: 'Green Cabs',
          type: 'Licensed Taxi',
          contact: '+64 4 801 8294',
          safety: 8.9
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service',
        'Electronic key card access',
        'CCTV surveillance in common areas',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors',
        'Professional security staff'
      ],
      safeNeighborhoods: [
        'Te Aro (cultural heart with excellent safety)',
        'Mount Victoria (scenic and secure)',
        'Thorndon (government district with high security)',
        'Oriental Bay (waterfront safety)',
        'Kelburn (university area with community feel)',
        'Newtown (bohemian but safe main areas)'
      ],
      womensOnly: [
        {
          name: 'YHA Wellington City',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location', 'Kitchen facilities'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.3,
          comments: 'Wellington felt incredibly safe as a solo female traveler. Kiwis are so friendly and helpful.',
          date: '2025-01-15'
        },
        {
          rating: 4.7,
          safety: 9.1,
          comments: 'Perfect destination for first-time solo female travelers. Beautiful city with great safety.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'New Zealand has extensive free WiFi in public areas',
        'High-quality, secure public WiFi infrastructure',
        'Safe to use for most activities due to strong privacy laws',
        'VPN recommended for sensitive transactions'
      ],
      digitalScams: [
        'Romance scams on dating apps targeting tourists',
        'Fake accommodation booking websites',
        'Phishing emails claiming to be from NZ banks',
        'Fake outdoor activity booking sites'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in New Zealand',
        'NordVPN - reliable connection',
        'ProtonVPN - good for privacy'
      ],
      dataProtection: [
        'Strong privacy laws in New Zealand (Privacy Act)',
        'Very safe to use digital payments and banking',
        'Excellent cybersecurity infrastructure',
        'Keep copies of documents in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Car Break-ins at Trailheads',
          location: 'Popular hiking areas around Wellington',
          date: '2025-01-15',
          description: 'Increase in rental car break-ins at hiking spots - never leave valuables visible',
          severity: 'low'
        },
        {
          type: 'Wind-Related Incidents',
          location: 'City-wide',
          date: '2025-01-12',
          description: 'Strong winds causing minor injuries - secure loose items and be cautious',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Get a Snapper card for easy public transport - much more convenient than cash',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 89
        },
        {
          tip: 'Always carry a windproof jacket - Wellington weather changes instantly',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 76
        },
        {
          tip: 'Take the cable car up to Kelburn - safe and beautiful views of the harbor',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 92
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'New Zealand is very safe for travelers. Exercise normal precautions.',
      reason: 'Low crime rates and excellent safety infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/new-zealand-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers of all experience levels',
        'World-leading gender equality ensures respectful treatment',
        'Stay in Te Aro, Mount Victoria, or Thorndon for best convenience and safety',
        'Take advantage of excellent public transportation system',
        'Be prepared for changeable weather and dress in layers'
      ]
    },
    crimeStatistics: {
      violentCrime: 1.2, // per 100,000 (2024 data - New Zealand has very low violent crime)
      propertyCrime: 2890, // per 100,000 (2024 data - mainly car break-ins)
      sexualAssault: 4.8, // per 100,000 (2024 data)
      kidnapping: 0.2, // per 100,000 (2024 data - extremely rare)
      source: 'New Zealand Police Annual Report & Statistics New Zealand',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Portable phone charger (essential for apps)',
        'Windproof and waterproof jacket',
        'Comfortable walking shoes with good grip',
        'Snapper card for transport',
        'Personal locator beacon for tramping',
        'Strong sunscreen (UV protection essential)'
      ],
      safetyApps: [
        {
          name: 'AdventureSmart',
          purpose: 'New Zealand outdoor safety app with trip planning',
          rating: 4.6
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety app with emergency contacts',
          rating: 4.4
        },
        {
          name: 'Metlink',
          purpose: 'Public transport with safety features',
          rating: 4.7
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '111',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Wellington Police',
          number: '+64 4 381 2000',
          type: 'Non-Emergency Police'
        },
        {
          name: "Women's Refuge",
          number: '0800 733 843',
          type: '24/7 Support Services'
        },
        {
          name: 'Safe to Talk',
          number: '0800 044 334',
          type: 'Sexual Harm Helpline'
        },
        {
          name: 'U.S. Embassy',
          number: '+64 4 462 6000',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$65 - $95 NZD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level.',
        tip: 'Wellington is moderately expensive but offers excellent value for safety and quality of life. Budget accordingly for higher costs but exceptional experiences.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$35-50 NZD',
          safetyNote: 'Excellent safety standards with modern facilities',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$80-120 NZD',
          safetyNote: 'High safety standards with 24/7 staff and security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$150-250 NZD',
          safetyNote: 'Premium safety with concierge and full security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit (Snapper Card)',
          cost: '$2-4 NZD/ride',
          safetyDescription: 'World-class safety with excellent monitoring and emergency systems.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber',
          cost: '$8-20 NZD/ride',
          safetyDescription: 'Very safe with GPS tracking and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxi',
          cost: '$12-25 NZD/ride',
          safetyDescription: 'Safe with professional drivers and regulated fares.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe with excellent lighting and very low crime rates.',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Wellington offers premium safety at all budget levels',
        'Public transport is efficient and very cost-effective',
        'Many outdoor activities and harbor walks are free',
        'Wellington food scene offers great lunch deals',
        'Safety investment pays off in stress-free travel experience'
      ]
    }
};

export default wellington;
