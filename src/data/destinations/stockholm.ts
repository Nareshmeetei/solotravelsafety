import { Destination } from './types';

const stockholm: Destination = {
    id: 'stockholm-sweden',
    city: 'Stockholm',
    country: 'Sweden',
    continent: 'Europe',
    countryCode: 'se',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.1,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 200,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    description: 'Is Stockholm safe for solo female travellers? Stockholm is one of the safest cities in Europe for solo female travelers, ranking as the 10th safest country globally for women traveling alone. With Sweden\'s progressive gender equality culture, excellent safety infrastructure, and low crime rates, Stockholm offers an ideal destination for independent female travelers seeking both adventure and security.',
    safetyBreakdown: {
      nightSafety: { score: 8.6, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.1, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.9, context: 'Very safe to walk alone. Swedish culture is very respectful.' }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Östermalm',
          description: 'Stockholm\'s most upscale and safest neighborhood. Elegant district known for high-end shopping, fine dining, and proximity to cultural attractions. Well-patrolled, affluent area that\'s extremely safe for solo female travelers with excellent lighting and security.'
        },
        {
          name: 'Gamla Stan (Old Town)',
          description: 'Stockholm\'s historic Old Town is one of the city\'s most visited and well-preserved areas. Medieval architecture and narrow cobblestone streets make it a tourist hotspot. Frequent police patrols due to high visitor numbers ensure excellent safety for solo travelers.'
        },
        {
          name: 'Norrmalm',
          description: 'Central Stockholm district filled with shops, restaurants, and cultural sites. Despite being bustling, it\'s considered very safe with frequent police presence and well-maintained streets. Perfect for first-time visitors with excellent transport connections.'
        },
        {
          name: 'Vasastan',
          description: 'Relaxed residential neighborhood ideal for a more local experience. Safe, well-lit streets with a calm atmosphere. Popular with solo travelers seeking a quieter base while still being close to city center attractions.'
        },
        {
          name: 'Kungsholmen',
          description: 'Offers authentic local experience with fewer tourists. Safe residential area with beautiful waterfront views, parks, and local restaurants. Well-connected to city center with good public transport links.'
        },
        {
          name: 'Södermalm',
          description: 'Trendy district known for its bohemian atmosphere, vintage shops, and hip cafes. Generally safe with a vibrant nightlife scene. Popular with young travelers and well-patrolled during evening hours.'
        }
      ],
      caution: [
        'Some nightlife areas late at night: While generally safe, exercise standard precautions in busy bar districts after midnight.',
        'Isolated areas of Djurgården Park very late at night: Stick to well-lit, populated paths when visiting parks after dark.'
      ],
      avoid: [
        'Rinkeby suburb: Located in Stockholm\'s outskirts with higher crime rates than city center. No tourist attractions, best avoided especially at night.',
        'Husby suburb: Residential neighborhood experiencing higher crime levels. Limited tourist reasons to visit, avoid particularly after dark.',
        'Tensta suburb: Another outer suburb with elevated crime statistics compared to central Stockholm.'
      ]
    },
    accommodations: [
      {
        name: 'City Backpackers Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Central Norrmalm location', '24/7 reception', 'Kitchen facilities'],
        rating: 8.9,
        notes: 'Top choice for solo female travelers. Excellent safety record, friendly atmosphere, and perfect central location for exploring Stockholm safely.',
        link: 'https://citybackpackers.se/'
      },
      {
        name: 'Generator Stockholm',
        type: 'hostel',
        features: ['Female dorms', 'Modern design', 'Safe area', 'Social atmosphere'],
        rating: 8.7,
        notes: 'Stylish hostel with excellent safety features and vibrant social scene. Popular with solo female travelers for its security and community feel.',
        link: 'https://staygenerator.com/hostels/stockholm'
      },
      {
        name: 'Downtown Camper by Scandic',
        type: 'hotel',
        features: ['Boutique design', 'Central location', 'Rooftop bar', '24/7 security'],
        rating: 9.1,
        notes: 'Trendy hotel perfect for solo female travelers. Excellent safety standards with professional staff and prime location near Central Station.',
        link: 'https://www.scandichotels.com/hotels/sweden/stockholm/scandic-downtown-camper'
      },
      {
        name: 'Hotel Rival',
        type: 'hotel',
        features: ['Historic luxury', 'Södermalm location', 'High security', 'Cinema'],
        rating: 9.0,
        notes: 'Iconic hotel with exceptional safety standards and elegant atmosphere. Perfect for solo female travelers seeking luxury with cultural significance.',
        link: 'https://www.rival.se/'
      },
      {
        name: 'HTL Kungsgatan',
        type: 'hotel',
        features: ['Modern boutique', 'Central location', 'Female-friendly', 'Excellent service'],
        rating: 8.8,
        notes: 'Contemporary hotel ideal for solo female travelers. Strong safety protocols and convenient location in safe Norrmalm district.',
        link: 'https://www.htlhotels.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress warmly with multiple layers - Stockholm weather can change quickly
• Waterproof jacket essential for sudden rain showers
• Comfortable waterproof shoes with good traction for cobblestones and winter ice
• Dark colors help you blend in with local fashion
• Thermal undergarments essential for winter visits (Nov-Mar)
• Light jacket needed even in summer for cool evenings`,
      firstTimers: `• Stockholm is perfect for first-time solo female travelers - extremely safe and welcoming
• English is widely spoken throughout the city
• Download SL app for seamless public transport navigation
• Sweden is largely cashless - ensure you have contactless payment methods
• Emergency number 112 works for all services (police, fire, medical)
• Trust your instincts - Swedes are reserved but helpful when approached`,
      apps: [
        'SL (Stockholm Public Transport)',
        'Res i Sthlm',
        'Swish (Mobile payments)',
        'Visit Stockholm',
        'Google Maps'
      ],
      appLinks: [
        { name: 'SL', link: 'https://sl.se/', description: 'Official Stockholm public transport app with real-time information' },
        { name: 'Res i Sthlm', link: 'https://visitstockholm.com/', description: 'Stockholm travel guide and navigation' },
        { name: 'Swish', link: 'https://www.swish.nu/', description: 'Popular Swedish mobile payment app' },
        { name: 'Visit Stockholm', link: 'https://visitstockholm.com/', description: 'Official tourism app with attractions and events' },
        { name: 'Google Maps', link: 'https://maps.google.com/', description: 'Navigation with public transport integration' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hjälp!',
          localLanguage: 'Swedish'
        },
        {
          english: 'Call the police!',
          local: 'Ring polisen!',
          localLanguage: 'Swedish'
        },
        {
          english: 'I need help.',
          local: 'Jag behöver hjälp.',
          localLanguage: 'Swedish'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Var är närmaste sjukhus?',
          localLanguage: 'Swedish'
        },
        {
          english: 'I am lost.',
          local: 'Jag har gått vilse.',
          localLanguage: 'Swedish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Snälla lämna mig ifred.',
          localLanguage: 'Swedish'
        },
        {
          english: 'I feel unsafe.',
          local: 'Jag känner mig osäker.',
          localLanguage: 'Swedish'
        },
        {
          english: 'Can you help me?',
          local: 'Kan du hjälpa mig?',
          localLanguage: 'Swedish'
        },
        {
          english: 'Do you speak English?',
          local: 'Talar du engelska?',
          localLanguage: 'Swedish'
        },
        {
          english: 'I don\'t understand Swedish.',
          local: 'Jag förstår inte svenska.',
          localLanguage: 'Swedish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Stockholm has a practical, understated fashion sense with emphasis on functionality and quality. Dark colors are preferred, especially black and navy. Dress warmly in layers with waterproof outerwear. No specific restrictions, but avoid overly flashy or revealing clothing. Business casual appropriate for upscale restaurants and cultural venues.',
      behaviorNorms: [
        'Respect personal space - Swedes value privacy and physical distance in public.',
        'Be punctual - Swedes are extremely time-conscious and expect punctuality.',
        'Keep quiet on public transport - loud conversations and phone calls are frowned upon.',
        'Queue properly and wait your turn - orderly behavior is highly valued.',
        'Remove shoes when entering homes and some traditional establishments.',
        'Environmental consciousness is important - recycle and minimize waste.',
        'Direct communication is preferred - Swedes appreciate honesty and straightforwardness.',
        'Avoid excessive small talk with strangers - Swedes are reserved but polite.',
        'Tipping is not expected but appreciated for exceptional service (round up or 10%).',
        'Respect work-life balance - avoid business discussions during social events.'
      ],
      perception: 'Solo female travelers are extremely common and completely accepted in Stockholm. Sweden\'s progressive culture and strong gender equality make it one of the most welcoming destinations for independent women. Swedish society is built on respect for individual autonomy, and solo female travel is viewed as completely normal. Harassment is rare due to strong social norms and legal protections.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Swedish Krona', code: 'SEK', exchangeRate: {
      usd: 0.1050,
      eur: 0.0895,
      gbp: 0.0782
    }, scamWarnings: []
    },
    usefulTips: [
      {
        title: 'Use Licensed Taxis and Public Transport',
        description: 'Stockholm\'s public transport is safe and efficient. For taxis, use licensed companies like Taxi Stockholm or apps like Uber. Avoid unregistered vehicles.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is most common in tourist areas, train stations, and public transport. Keep valuables secure and be alert in busy places.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Avoid Isolated Parks and Suburbs at Night',
        description: 'Stick to well-lit, populated areas after dark. Avoid isolated parks and certain suburbs (e.g., Rinkeby, Tensta, Husby) at night.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Dress for the Weather and Walk Carefully',
        description: 'Stockholm weather can change quickly. Wear layers, waterproof clothing, and shoes with good traction, especially in winter.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Use Credit Cards and Payment Apps',
        description: 'Stockholm is largely cashless. Use credit cards or payment apps for most transactions and avoid carrying large amounts of cash.',
        severity: 'low',
        sourceName: 'Nannybag',
        sourceUrl: 'https://www.nannybag.com/en/guides/stockholm/stockholm-travel-apps-you-should-download-for-your-trip'
      }
    ],
    languages: ['Swedish', 'English (widely spoken)'],
    daytimeSafetyPercent: 87.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Stockholm)
    nighttimeSafetyPercent: 65.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Stockholm)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Stockholm',
    // Red flags based on Numbeo 2025, OneVasco, and GoDigit
    // Sources:
    // https://www.numbeo.com/crime/in/Stockholm
    // https://www.onevasco.com/blog/safe-to-visit/sweden
    // https://www.godigit.com/international-travel-insurance/tourist-scams/tourist-scams-in-sweden
    redFlags: [
      {
        label: 'Pickpocketing in Tourist Areas & Public Transit',
        frequency: 'Frequent',
        icon: 'Hand',
      },
      {
        label: 'Taxi Overcharging/Unlicensed Taxis',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'ATM Skimming & Card Fraud',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Bar/Restaurant Overcharging Scams',
        frequency: 'Occasional',
        icon: 'Beer',
      }
    ],
  culturalSensitivity: {
    culturalDos: [
      'Respect personal space and keep a polite distance.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Use quiet voices in public and on transport.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in nature.",
      "Don't make jokes about Sweden\'s history or politics."
    ]
  },
  scamWarnings: [],
    womensConfidenceScore: {
      score: 85.9,
      source: 'Travel Ladies 2025',
      sourceUrl: 'https://travelladies.app/safety/sweden/stockholm'
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 92,
        source: 'Life is a Journey Blog 2025',
        sourceUrl: 'https://lifeisajourney.blog/is-stockholm-safe-for-solo-female-travelers/'
      },
      {
        label: "Nightlife",
        confidence: 85,
        source: 'The Break of Dawns 2025',
        sourceUrl: 'https://thebreakofdawns.com/solo-girl-guide-to-stockholm/'
      },
      {
        label: "Public Transport",
        confidence: 96,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/sweden/stockholm'
      },
      {
        label: "Dining Alone",
        confidence: 93,
        source: 'Visit Sweden 2025',
        sourceUrl: 'https://visitsweden.com/about-sweden/solo-travel-sweden/'
      }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Nightlife areas after midnight', 'Crowded public events', 'Some outer suburbs', 'Dating apps and online platforms'],
      reportingRate: 73,
      legalProtection: 'Extremely strong legal framework. Sweden has comprehensive anti-harassment laws with zero tolerance policy. Strong gender equality culture provides additional social protection.',
      supportResources: [
        'Emergency Services: 112 (Police)',
        'Women\'s Crisis Line: 020-50 50 50 (24/7)',
        'ROKS (National Organisation for Women\'s Shelters): 0200-23 73 73',
        'Victim Support: 116 006',
        'U.S. Embassy Stockholm: +46 8 783 5300'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Karolinska University Hospital',
          address: 'Solnavägen 30, 171 76 Stockholm',
          phone: '+46 8 517 700 00',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Services'],
          link: 'https://www.karolinska.se/'
        },
        {
          name: 'Danderyd Hospital',
          address: 'Entrévägen 1, 182 57 Danderyd',
          phone: '+46 8 123 000 00',
          emergency: true,
          specialties: ['Emergency Care', 'Gynecology', 'Acute Care'],
          link: 'https://www.ds.se/'
        },
        {
          name: 'Södersjukhuset',
          address: 'Sjukhusbacken 10, 118 83 Stockholm',
          phone: '+46 8 616 10 00',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://www.sodersjukhuset.se/'
        }
      ],
      pharmacies: [
        {
          name: 'Apoteket (Multiple Locations)',
          address: 'Throughout Stockholm city center',
          phone: '+46 771 450 450',
          hours: 'Mon-Fri 9:00-18:00, Sat 10:00-15:00 (varies by location)',
          emergency: false,
          link: 'https://www.apoteket.se/'
        },
        {
          name: 'Apoteket C.W. Scheele (24/7)',
          address: 'Klarabergsgatan 64, 111 21 Stockholm',
          phone: '+46 8 454 81 30',
          hours: '24/7',
          emergency: true,
          link: 'https://www.apoteket.se/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Clinic Karolinska: +46 8 517 700 00',
          'Kvinnokliniken Danderyd: +46 8 123 000 00',
          'Private Healthcare Center: +46 8 587 870 00'
        ],
        gynecologists: [
          'Dr. Andersson at Karolinska Women\'s Health: +46 8 517 700 00',
          'Dr. Larsson at Private Women\'s Clinic: +46 8 587 870 00'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Morning-after pill widely available and affordable',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all convenience stores (ICA, Coop, Pressbyrån)',
          'Comprehensive selection at pharmacies',
          'Free products available in many public restrooms and universities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Stockholm',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Tick-borne encephalitis if visiting forests/rural areas'
      ],
      healthRisks: [
        'Cold weather injuries in winter (hypothermia, frostbite)',
        'Vitamin D deficiency due to limited sunlight in winter',
        'Seasonal depression during dark winter months',
        'Tick bites in forested areas (rare but monitor for symptoms)'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'SL Public Transport (Metro/Bus/Tram)',
          safety: 9.6,
          recommendations: ['Excellent safety record', 'CCTV monitoring', 'Emergency buttons'],
          companies: ['Storstockholms Lokaltrafik (SL)'],
          link: 'https://sl.se/'
        },
        {
          type: 'Taxi Stockholm',
          safety: 9.2,
          recommendations: ['Licensed taxi company', 'Professional drivers', 'Fixed rates'],
          companies: ['Taxi Stockholm'],
          link: 'https://taxistockholm.se/'
        },
        {
          type: 'Uber',
          safety: 9.0,
          recommendations: ['GPS tracking', 'Driver verification', 'Cashless payments'],
          companies: ['Uber'],
          link: 'https://www.uber.com/se/en/'
        },
        {
          type: 'Bolt',
          safety: 8.9,
          recommendations: ['Popular ride-hailing app', 'Safe alternative to Uber', 'Good coverage'],
          companies: ['Bolt'],
          link: 'https://bolt.eu/'
        }
      ],
      nightTravel: {
        safety: 8.8,
        warnings: [
          'Very safe for night travel in central Stockholm',
          'Public transport reduces frequency after midnight',
          'Well-lit streets throughout city center',
          'Exercise standard precautions in outer suburbs'
        ],
        alternatives: [
          'Night buses available (Nattbuss) on weekends',
          'Taxi and ride-hailing services operate 24/7',
          'Very safe to walk in central districts',
          'Avoid isolated areas of outer suburbs after dark'
        ]
      },
      verifiedProviders: [
        {
          name: 'SL (Stockholm Public Transport)',
          type: 'Public Transport',
          contact: 'SL app',
          safety: 9.6
        },
        {
          name: 'Taxi Stockholm',
          type: 'Licensed Taxi',
          contact: '+46 8 150 000',
          safety: 9.2
        },
        {
          name: 'Uber',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.0
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
        'Gamla Stan (historic charm with safety)',
        'Östermalm (upscale and very safe)',
        'Norrmalm (central with excellent security)',
        'Vasastan (local experience with safety)',
        'Södermalm (trendy with good lighting)',
        'Kungsholmen (residential safety)'
      ],
      womensOnly: [
        {
          name: 'Generator Stockholm',
          type: 'Hostel',
          features: ['Female-only dorms', 'Modern security', 'Social atmosphere', 'Central location'],
          rating: 4.7
        },
        {
          name: 'City Backpackers Hostel',
          type: 'Hostel',
          features: ['Female dorms', 'Kitchen facilities', '24/7 reception', 'Safe storage'],
          rating: 4.6
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.1,
          comments: 'Stockholm felt incredibly safe as a solo female traveler. Even late at night, I felt completely secure.',
          date: '2025-01-15'
        },
        {
          rating: 4.7,
          safety: 8.9,
          comments: 'Perfect destination for first-time solo female travelers. Swedish culture is very respectful.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Sweden has extensive free WiFi in public areas',
        'High-quality, secure public WiFi infrastructure',
        'Safe to use for most activities due to strong data protection laws',
        'VPN recommended for sensitive transactions'
      ],
      digitalScams: [
        'Romance scams on dating apps targeting tourists',
        'Fake accommodation booking websites',
        'Phishing emails claiming to be from banks',
        'Fake charity donation requests'
      ],
      vpnRecommendations: [
        'NordVPN - Swedish company with excellent security',
        'ExpressVPN - works well in Sweden',
        'ProtonVPN - good for privacy'
      ],
      dataProtection: [
        'GDPR compliance ensures strong data protection',
        'Very safe to use digital payments and banking',
        'Strong cybersecurity infrastructure',
        'Keep copies of documents in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing Increase',
          location: 'Central Station area',
          date: '2025-01-15',
          description: 'Slight increase in pickpocketing during tourist season - keep belongings secure',
          severity: 'low'
        },
        {
          type: 'Winter Weather Alert',
          location: 'City-wide',
          date: '2025-01-10',
          description: 'Icy conditions on sidewalks - wear appropriate footwear',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Download SL app for real-time transport info - makes navigation much easier',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 98
        },
        {
          tip: 'Embrace the cashless culture - most places don\'t accept cash anymore',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 87
        },
        {
          tip: 'Layer your clothing and bring waterproof gear - weather changes quickly',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 112
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Sweden is very safe for travelers. Exercise normal precautions and follow local laws.',
      reason: 'Low crime rates and excellent safety infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/sweden-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers of all experience levels',
        'Strong gender equality culture ensures respectful treatment',
        'Stay in central Stockholm districts for best safety and convenience',
        'Take advantage of excellent public transportation system',
        'Be prepared for cashless society and weather changes'
      ]
    },
    crimeStatistics: {
      violentCrime: 1.1, // per 100,000 (2024 data - Sweden has low violent crime)
      propertyCrime: 4200, // per 100,000 (2024 data - mainly pickpocketing)
      sexualAssault: 6.4, // per 100,000 (2024 data - relatively low)
      kidnapping: 0.3, // per 100,000 (2024 data - very rare)
      source: 'Swedish National Council for Crime Prevention (Brå) & Statistics Sweden',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Portable phone charger (essential for apps)',
        'Waterproof jacket and layers',
        'Good quality waterproof shoes with traction',
        'Contactless payment cards (essential)',
        'Umbrella for sudden rain',
        'Warm accessories (hat, gloves, scarf) for winter'
      ],
      safetyApps: [
        {
          name: 'SOS Alarm',
          purpose: 'Swedish emergency services app with location sharing',
          rating: 4.6
        },
        {
          name: 'My Safety',
          purpose: 'Personal safety app with emergency contacts',
          rating: 4.4
        },
        {
          name: 'SL',
          purpose: 'Public transport navigation and safety',
          rating: 4.7
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Non-Emergency Police',
          number: '114 14',
          type: 'Police Information'
        },
        {
          name: 'Medical Advice',
          number: '1177',
          type: 'Healthcare Information'
        },
        {
          name: 'Women\'s Crisis Line',
          number: '020-50 50 50',
          type: '24/7 Support Services'
        },
        {
          name: 'U.S. Embassy',
          number: '+46 8 783 5300',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$50 - $90 USD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level.',
        tip: 'Stockholm is expensive but offers excellent value for safety and quality. Budget accordingly for higher costs but exceptional standards.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$30-45',
          safetyNote: 'Excellent safety standards with modern facilities',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$70-100',
          safetyNote: 'High safety standards with 24/7 staff and security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$120-200',
          safetyNote: 'Premium safety with concierge and full security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport (SL Card)',
          cost: '$3-5/ride',
          safetyDescription: 'World-class safety with excellent monitoring and emergency systems.',
          safetyLevel: 'high'
        },
        {
          method: 'Taxi/Uber',
          cost: '$10-25/ride',
          safetyDescription: 'Very safe with professional drivers and regulated services.',
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
        'Stockholm offers premium safety at all budget levels',
        'Public transport is efficient and very cost-effective for the quality',
        'Many museums and attractions offer free admission on certain days',
        'Self-catering accommodations help manage food costs',
        'Safety investment pays off in stress-free travel experience'
      ]
    },
  legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://se.usembassy.gov/'
        },
        {
          name: 'British Embassy Stockholm',
          address: 'Skarpögatan 6-8, 115 27 Stockholm',
          phone: '+46 8 671 3000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-stockholm'
        },
        {
          name: 'German Embassy Stockholm',
          address: 'Skarpögatan 9, 115 27 Stockholm',
          phone: '+46 8 670 1500',
          link: 'https://stockholm.diplo.de/'
        },
        {
          name: 'French Embassy Stockholm',
          address: 'Kommendörsgatan 13, 114 58 Stockholm',
          phone: '+46 8 459 5300',
          link: 'https://se.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Stockholm',
          address: 'Djurgårdsbrunnsvägen 24, 115 27 Stockholm',
          phone: '+46 8 670 1815',
          link: 'https://www.exteriores.gob.es/embajadas/estocolmo'
        },
        {
          name: 'Australian Embassy Stockholm',
          address: 'Klarabergsviadukten 63, 111 64 Stockholm',
          phone: '+46 8 613 2900',
          link: 'https://sweden.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Stockholm',
          address: 'Klarabergsgatan 23, 111 64 Stockholm',
          phone: '+46 8 453 3000',
          link: 'https://www.canadainternational.gc.ca/sweden-suede/'
        },
        {
          name: 'Netherlands Embassy Stockholm',
          address: 'Götgatan 16A, 116 46 Stockholm',
          phone: '+46 8 556 108 00',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/sweden'
        },
        {
          name: 'Danish Embassy Stockholm',
          address: 'Jakobs Torg 1, 111 52 Stockholm',
          phone: '+46 8 406 7500',
          link: 'https://sverige.um.dk/en'
        },
        {
          name: 'Swedish Government Services',
          address: 'Multiple locations throughout Stockholm',
          phone: '+46 771 117 117',
          link: 'https://www.government.se/'
        },
        {
          name: 'Swiss Embassy Stockholm',
          address: 'Kommendörsgatan 35, 114 58 Stockholm',
          phone: '+46 8 676 7900',
          link: 'https://www.eda.admin.ch/stockholm'
        },
        {
          name: 'Indian Embassy Stockholm',
          address: 'Adolf Fredriks Kyrkogata 12, 111 37 Stockholm',
          phone: '+46 8 107 008',
          link: 'https://www.indianembassysweden.gov.in/'
        }
      ],
      womensRights: [
        'Legal framework for women\'s rights varies by country',
        'Contact local embassy for specific information',
        'International women\'s rights organizations available'
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
    }
};

export default stockholm;
