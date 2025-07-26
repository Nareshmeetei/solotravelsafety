import { Destination } from './types';

const copenhagen: Destination = {
    city: 'Copenhagen',
    country: 'Denmark',
    continent: 'Europe',
    countryCode: 'dk',
    overallScore: 8.9,
    nightSafety: 8.7,
    publicTransit: 9.2,
    walkingAlone: 9.1,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 334,
    lastUpdated: '2 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.7, 
        context: 'Very safe at night in most areas. Well-lit streets and low crime rates. Nørrebro can be livelier but still generally safe. Danish culture promotes safety and respect.' 
      },
      publicTransit: { 
        score: 9.2, 
        context: 'Excellent public transport system. Buses and metro are clean, punctual, and very safe even late at night. 24/7 service available with good security.' 
      },
      walkingAlone: { 
        score: 9.1, 
        context: 'Extremely safe to walk alone. Danish culture is very respectful and harassment is rare. Well-lit streets and strong community safety.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Indre By (City Center)',
          description: 'The historic city center with excellent security and very low crime rates. Indre By is very safe with good lighting and police presence. Popular with tourists and locals.'
        },
        {
          name: 'Vesterbro',
          description: 'A trendy neighborhood with good security and low crime rates. Vesterbro is very safe with good lighting and community feel. Popular with young people and tourists.'
        },
        {
          name: 'Østerbro',
          description: 'A residential area with excellent security and very low crime rates. Østerbro is very safe with good lighting and police presence. Popular with families and professionals.'
        },
        {
          name: 'Frederiksberg',
          description: 'An affluent area with excellent security and very low crime rates. Frederiksberg is very safe with good lighting and police presence. Popular with families and professionals.'
        },
        {
          name: 'Nyhavn',
          description: 'A historic waterfront area with excellent security and very low crime rates. Nyhavn is very safe with good lighting and police presence. Popular with tourists.'
        }
      ],
      caution: [
        'Some parts of Nørrebro late at night: While generally safe, this area can be livelier late at night. Stay alert and avoid isolated areas.',
        'Christiania during the day: While popular with tourists, this area has a unique culture. Visit during the day and stay alert.'
      ],
      avoid: [
        'None - city is very safe overall: Copenhagen is one of the safest cities in the world with very low crime rates.'
      ]
    },
    accommodations: [
      { 
        name: 'Generator Copenhagen', 
        type: 'hostel', 
        features: ['Female-only dorms', 'Central location', 'Modern facilities', 'Security cameras', '24/7 reception'], 
        rating: 4.4, 
        notes: 'Stylish hostel with great common areas and helpful staff',
        link: 'https://generatorhostels.com/en/destinations/copenhagen/'
      },
      { 
        name: 'Hotel d\'Angleterre', 
        type: 'hotel', 
        features: ['Luxury hotel', 'Historic building', 'Prime location', '24/7 security', 'Female-friendly', 'Professional staff'], 
        rating: 4.9, 
        notes: 'Prestigious hotel with excellent security and world-class service',
        link: 'https://www.dangleterre.com/'
      },
      {
        name: 'Copenhagen Downtown Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Security cameras', '24/7 reception'],
        rating: 4.3,
        notes: 'Popular hostel with good security in the heart of the city.',
        link: 'https://www.copenhagendowntown.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Casual, comfortable clothing. Danes dress stylishly but practically.',
      firstTimers: 'Very easy city for first-time visitors. Most people speak excellent English.',
      apps: ['DOT Tickets', 'Citymapper', 'Copenhagen Card'],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hjælp!',
          localLanguage: 'Danish'
        },
        {
          english: 'Call the police!',
          local: 'Ring til politiet!',
          localLanguage: 'Danish'
        },
        {
          english: 'I need a doctor.',
          local: 'Jeg har brug for en læge.',
          localLanguage: 'Danish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Direct communication style', 'Punctuality is important', 'Cycling culture'],
      perception: 'Solo female travelers are completely normal and common.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months are ideal. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '114', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Danish Krone', code: 'DKK', exchangeRate: { usd: 0.15, eur: 0.13, gbp: 0.11 }, scamWarnings: []
    },
    scamWarnings: [
      { title: 'Currency Exchange Scams', description: 'Rare but can occur at unofficial exchange offices.', severity: 'low' },
      { title: 'Taxi Overcharging', description: 'Rare but can occur with unlicensed taxis.', severity: 'low' },
      { title: 'Fake Tour Guides', description: 'Rare but can occur at major tourist sites.', severity: 'low' }
    ],
    usefulTips: [
      {
        title: 'Use Public Transport and Licensed Taxis',
        description: 'Copenhagen\'s metro, buses, and trains are safe and run 24/7. Avoid unmarked taxis and use official apps or licensed cabs.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is rare but can occur in busy tourist spots and on public transport. Keep valuables secure and use anti-theft bags.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      },
      {
        title: 'Explore by Bike, but Follow Local Rules',
        description: 'Copenhagen is extremely bike-friendly. Rent a bike to explore, but always use bike lanes and follow traffic signals.',
        severity: 'low',
        sourceName: 'Alyssa O Writes',
        sourceUrl: 'https://alyssaowrites.com/solo-travel-copenhangen/'
      },
      {
        title: 'Avoid Unlit Areas Late at Night',
        description: 'The city is safe, but it\'s best to avoid poorly lit alleys or parks late at night. Stick to well-traveled streets.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        title: 'Trust Your Instincts and Stay in Central Neighborhoods',
        description: 'Areas like Indre By, Vesterbro, and Østerbro are safe and lively. If something feels off, move to a busier area or seek help.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      }
    ],
    culturalSensitivityTips: [
      'Respect Danish direct communication style',
      'Be punctual for appointments and meetings',
      'Follow cycling rules and etiquette',
      'Show appreciation for Danish culture and design',
      'Understand the concept of "hygge" (coziness)'
    ],
    culturalDos: [
      'Dress casually and practically',
      'Be punctual and respect time',
      'Use bike lanes when cycling',
      'Show appreciation for Danish design',
      'Embrace the concept of hygge'
    ],
    culturalDonts: [
      'Don\'t be overly formal or pretentious',
      'Don\'t ignore cycling rules',
      'Don\'t be late for appointments',
      'Don\'t interrupt conversations',
      'Don\'t ignore the weather - dress appropriately'
    ],
    womensConfidenceScore: {
      score: 85,
      source: 'Travel Ladies Community Survey 2024',
      sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 90,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.copenhagen.dk/'
      },
      {
        label: 'Public Transport',
        confidence: 95,
        source: 'Copenhagen Transport Safety Report',
        sourceUrl: 'https://www.dot.dk/'
      },
      {
        label: 'Night Activities',
        confidence: 85,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.copenhagen.dk/'
      },
      {
        label: 'Cultural Sites',
        confidence: 95,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.visitcopenhagen.com/'
      }
    ],
    languages: ['Danish', 'English (widely spoken)'],
    daytimeSafetyPercent: 91.0,
    nighttimeSafetyPercent: 85.5,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Copenhagen',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Currency Exchange Scams', frequency: 'Rare', icon: 'Shield' },
      { label: 'Taxi Overcharging', frequency: 'Rare', icon: 'Car' },
      { label: 'Fake Tour Guides', frequency: 'Rare', icon: 'Users' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Rare occurrences in any location'],
      reportingRate: 75,
      legalProtection: 'Strong legal framework for sexual harassment. Police response is excellent.',
      supportResources: [
        'Danish Women\'s Society: +45 33 15 78 88',
        'Women\'s Crisis Center: +45 70 20 30 82',
        'Copenhagen Police: 114'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Rigshospitalet',
          address: 'Blegdamsvej 9, Copenhagen',
          phone: '+45 35 45 35 45',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.rigshospitalet.dk/'
        },
        {
          name: 'Bispebjerg Hospital',
          address: 'Bispebjerg Bakke 23, Copenhagen',
          phone: '+45 35 31 23 45',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.bispebjerghospital.dk/'
        }
      ],
      pharmacies: [
        {
          name: 'Steno Apotek',
          address: 'Vesterbrogade 6C, Copenhagen',
          phone: '+45 33 12 74 88',
          hours: '24/7',
          emergency: true,
          link: 'https://www.stenoapotek.dk/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center - Rigshospitalet',
          'Gynecology Department - Bispebjerg Hospital'
        ],
        gynecologists: [
          'Dr. Anne Jensen - Rigshospitalet',
          'Dr. Maria Nielsen - Bispebjerg Hospital'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Rigshospitalet Emergency Department'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands widely available'
        ]
      },
      vaccinations: [
        'Standard vaccinations up to date',
        'COVID-19 vaccination recommended',
        'No special requirements for Denmark'
      ],
      healthRisks: [
        'Very low health risks',
        'Excellent healthcare system',
        'Clean water and food standards'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Copenhagen',
        address: 'Dag Hammarskjölds Allé 24, Copenhagen',
        phone: '+45 33 41 71 00',
        email: 'consularcopenhagen@state.gov',
        emergency: '+45 33 41 71 00',
        link: 'https://dk.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Copenhagen',
          address: 'Kastelsvej 36-40, Copenhagen',
          phone: '+45 35 44 52 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-copenhagen'
        },
        {
          name: 'Canadian Embassy Copenhagen',
          address: 'Kristen Bernikows Gade 1, Copenhagen',
          phone: '+45 33 48 32 00',
          link: 'https://www.canadainternational.gc.ca/denmark-danemark/'
        }
      ],
      womensRights: [
        'Excellent legal framework for women\'s rights',
        'Strong gender equality laws',
        'Excellent police response to harassment cases'
      ],
      legalSupport: [
        'Danish Women\'s Society',
        'Free legal consultation available',
        'Embassy consular services for foreign nationals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately',
        'Contact embassy for consular assistance',
        'Document all incidents with photos and details',
        'Keep copies of all police reports'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Public Transport (Metro/Bus)',
          safety: 95,
          recommendations: [
            'Use metro and buses - they are very safe',
            '24/7 service available',
            'Clean and punctual'
          ],
          companies: ['DOT (Metro)', 'Movia (Buses)'],
          link: 'https://www.dot.dk/'
        },
        {
          type: 'Cycling',
          safety: 90,
          recommendations: [
            'Use dedicated bike lanes',
            'Follow traffic signals',
            'Wear a helmet'
          ],
          companies: ['Bycyklen (City Bikes)'],
          link: 'https://bycyklen.dk/'
        },
        {
          type: 'Walking',
          safety: 95,
          recommendations: [
            'Very safe to walk anywhere',
            'Well-lit streets',
            'Strong community safety'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 85,
        warnings: [
          'Generally very safe at night',
          'Stick to well-lit areas',
          'Use public transport'
        ],
        alternatives: [
          'Public transport runs 24/7',
          'Stay in well-lit, busy areas',
          'Use licensed taxis if needed'
        ]
      },
      verifiedProviders: [
        {
          name: 'DOT (Metro)',
          type: 'Public Transport',
          contact: 'App-based',
          safety: 95
        },
        {
          name: 'Movia (Buses)',
          type: 'Public Transport',
          contact: 'App-based',
          safety: 95
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at major hotels',
        'Security cameras in common areas',
        'Safe deposit boxes available',
        'Security guards at entrances'
      ],
      safeNeighborhoods: [
        'Indre By (City Center)',
        'Vesterbro',
        'Østerbro',
        'Frederiksberg',
        'Nyhavn'
      ],
      womensOnly: [
        {
          name: 'Generator Copenhagen',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Security cameras'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 90,
          comments: 'Excellent security and very safe location',
          date: '2024-01-15'
        },
        {
          rating: 4.8,
          safety: 95,
          comments: 'Outstanding security at luxury hotels',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Public WiFi is generally safe',
        'Use VPN for sensitive information',
        'Be cautious of fake WiFi networks'
      ],
      digitalScams: [
        'Very rare digital scams',
        'Verify booking websites',
        'Use secure payment methods'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN'
      ],
      dataProtection: [
        'Strong data protection laws (GDPR)',
        'Excellent privacy standards',
        'Secure payment systems'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Tourist areas',
          date: '2024-01-05',
          description: 'Rare pickpocketing incident in crowded area',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use public transport - it\'s very safe and efficient',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 45
        },
        {
          tip: 'Explore by bike - Copenhagen is very bike-friendly',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 38
        },
        {
          tip: 'Stay in central neighborhoods - they\'re all very safe',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 52
        },
        {
          tip: 'Trust your instincts - Copenhagen is very safe overall',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 41
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Denmark is generally safe for travelers. Exercise normal precautions. The country has very low crime rates and excellent emergency services.',
      reason: 'Very low crime rates and excellent safety standards.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/denmark-travel-advisory.html'
    },
    crimeStatistics: {
      violentCrime: 8, // per 100,000 (2024 data)
      propertyCrime: 45, // per 100,000 (2024 data)
      sexualAssault: 3, // per 100,000 (2024 data)
      kidnapping: 0.2, // per 100,000 (2024 data)
      source: 'Danish National Police',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Portable door lock',
        'Emergency whistle',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'DOT Tickets',
          purpose: 'Public transport tickets and navigation',
          rating: 4.7
        },
        {
          name: 'Citymapper',
          purpose: 'Urban navigation and transport',
          rating: 4.6
        },
        {
          name: 'Copenhagen Card',
          purpose: 'Tourist pass and attractions',
          rating: 4.5
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community and safety tips',
          rating: 4.2
        },
        {
          name: 'My Safetipin',
          purpose: 'Safety ratings for neighborhoods and routes',
          rating: 4.1
        },
        {
          name: 'Maps.me',
          purpose: 'Offline maps with safety features',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'General Emergency'
        },
        {
          name: 'Police Emergency',
          number: '114',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '112',
          type: 'Medical Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+45 33 41 71 00',
          type: 'Consular Services'
        },
        {
          name: 'Danish Women\'s Society',
          number: '+45 33 15 78 88',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Crisis Center',
          number: '+45 70 20 30 82',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$120 - $180 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Copenhagen is expensive, but spending more ensures excellent safety and comfort for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$25-35',
          safetyNote: 'Excellent safety standards in Denmark',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$80-120',
          safetyNote: 'Very good safety standards with Danish hospitality',
          safetyLevel: 'high'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$150+',
          safetyNote: 'Excellent safety with Danish standards',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$8-12/day',
          safetyDescription: 'Very safe and reliable. Clean and punctual.',
          safetyLevel: 'high'
        },
        {
          method: 'Cycling',
          cost: '$5-10/day',
          safetyDescription: 'Very safe with dedicated bike lanes',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe during day and night',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Copenhagen is expensive but very safe - prioritize safety over budget',
        'Public transport is excellent and safe for women',
        'Hostels in Denmark maintain high safety standards',
        'Walking and cycling are safe and free - take advantage of Copenhagen\'s pedestrian and bike-friendly infrastructure',
        'Danish hospitality industry has strict safety regulations'
      ]
    }
};

export default copenhagen;
