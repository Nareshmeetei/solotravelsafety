import { Destination } from './types';

// Enhanced Safety Data for Oslo - January 2025 Update
const oslo: Destination = {
    city: 'Oslo',
    country: 'Norway',
    continent: 'Europe',
    countryCode: 'no',
    overallScore: 8.6,
    nightSafety: 8.4,
    publicTransit: 9.1,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe', 'first-timers'],
    bgColor: 'bg-green-25',
    reviewCount: 358,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.4,
        context: 'Very safe at night with well-lit streets and low crime rates. Oslo ranks as #9 safest city globally for women. However, avoid Oslo Central Station area late at night where some drug activity occurs. Women report feeling safe walking alone after dark, though recent statistics show 22% of Norwegian women report experiencing rape (increase from 9.4% in 2014). Street harassment is extremely rare.'
      },
      publicTransit: {
        score: 9.1,
        context: 'Excellent public transportation safety - considered among the safest in the world. Well-maintained, punctual, and secure at all hours. Women report high confidence using public transport day and night. Minimal harassment incidents reported. Ruter system covers entire city efficiently and safely.'
      },
      walkingAlone: {
        score: 8.5,
        context: 'Generally very safe for solo women with respectful Norwegian culture and low street harassment. However, Norway has concerning sexual violence statistics with 15% of women reporting forced sexual encounters annually. Most incidents occur in private settings, not public spaces. Public areas remain very safe for solo female travelers.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Sentrum (City Center)',
          description: 'Main commercial and cultural district with excellent safety infrastructure, well-lit streets, and constant foot traffic. Royal Palace, Karl Johans gate shopping street, and major hotels located here. High police presence and security make it ideal for solo female travelers day and night.'
        },
        {
          name: 'Frogner',
          description: 'Upscale residential area home to Vigeland Park and many embassies. Very safe with low crime rates, beautiful tree-lined streets, and affluent local population. Excellent area for accommodation with high-end hotels and restaurants. Perfect for solo travelers seeking quieter, sophisticated atmosphere.'
        },
        {
          name: 'Grünerløkka',
          description: 'Trendy, hipster district with vibrant arts scene, cafes, and nightlife. Generally safe area popular with young locals and tourists. Good walkability and active street life. Solo female travelers enjoy the creative atmosphere and social opportunities.'
        },
        {
          name: 'Majorstuen',
          description: 'Affluent residential area with upscale shopping and dining. Very safe with well-maintained streets and good public transport connections. Quiet, family-friendly atmosphere ideal for solo travelers seeking peaceful accommodation base.'
        },
        {
          name: 'Aker Brygge',
          description: 'Waterfront district with modern shopping centers, restaurants, and harbor views. Very safe area with security presence and good lighting. Popular dining and entertainment destination with excellent walkability.'
        },
        {
          name: 'Bygdøy',
          description: 'Peninsula area home to many museums including Viking Ship Museum. Safe, quiet residential area with cultural attractions. Good for daytime exploration though more isolated in evenings.'
        }
      ],
      caution: [
        'Oslo Central Station (Jernbanetorget) area late at night - increased drug activity and homeless population, though violent crime still rare',
        'Some eastern districts (Grønland, Tøyen) have higher crime rates but still generally safe - use normal urban precautions',
        'Nightlife areas after 2 AM when alcohol-related incidents may occur - exercise standard nightlife caution'
      ],
      avoid: [
        'No areas require complete avoidance - Oslo maintains very low violent crime rates throughout the city'
      ]
    },
    accommodations: [
      {
        name: 'Anker Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Kitchen facilities', 'Social atmosphere', '24/7 reception'],
        rating: 4.1,
        notes: 'Popular backpacker hostel in Grünerløkka with good safety standards and solo female travelers community.',
        link: 'https://www.ankerhostel.no/'
      },
      {
        name: 'The Thief',
        type: 'hotel',
        features: ['Ultra-luxury', 'Waterfront location', 'Art collection', 'High security', 'Concierge services'],
        rating: 4.7,
        notes: 'Premium design hotel on Tjuvholmen with exceptional security and service standards. Perfect for luxury solo travel.',
        link: 'https://thethief.com/'
      },
      {
        name: 'Scandic Oslo City',
        type: 'hotel',
        features: ['Central location', '24/7 reception', 'Safe area', 'Modern facilities', 'Business center'],
        rating: 4.3,
        notes: 'Reliable mid-range hotel in Sentrum with good security and solo female traveler amenities.',
        link: 'https://www.scandichotels.com/hotels/norway/oslo/scandic-oslo-city'
      },
      {
        name: 'P-Hotels Oslo',
        type: 'hotel',
        features: ['Budget-friendly', 'Multiple locations', 'Clean facilities', 'Safe areas'],
        rating: 4.0,
        notes: 'Affordable hotel chain with several Oslo locations, all in safe areas with basic but secure accommodations.',
        link: 'https://p-hotels.com/'
      },
      {
        name: 'Smarthotel Oslo',
        type: 'hotel',
        features: ['Compact rooms', 'Central location', 'Modern design', 'Self check-in', 'Affordable luxury'],
        rating: 4.2,
        notes: 'Stylish, compact hotel perfect for solo travelers seeking modern amenities at reasonable prices in safe central location.',
        link: 'https://smarthotel.no/'
      }
    ],
    alerts: [
      {
        title: 'Sexual Violence Statistics Alert',
        description: 'Recent studies show 22% of Norwegian women report experiencing rape (increase from 9.4% in 2014). While street harassment is rare, be aware that 15% of women report forced sexual encounters annually. Most incidents occur in private settings.',
        location: 'Norway-wide concern affecting Oslo',
        reportCount: 45,
        severity: 'medium',
        dateReported: '1 week ago'
      },
      {
        title: 'Central Station Area Advisory',
        description: 'Increased drug activity and homeless population around Oslo Central Station, especially late at night. While violent crime remains rare, exercise additional caution in this area after 11 PM.',
        location: 'Oslo Central Station area',
        reportCount: 12,
        severity: 'low',
        dateReported: '3 days ago'
      },
      {
        title: 'Pickpocketing in Tourist Areas',
        description: 'Increased reports of pickpocketing in major tourist areas, hotel lobbies, and train stations. Keep valuables secure and be aware of surroundings in crowded areas.',
        location: 'Tourist areas citywide',
        reportCount: 18,
        severity: 'low',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Ruter', 'Google Maps'],
      emergencyPhrases: ['Hjelp (Help)', 'Ring politiet (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112', fire: '110', medical: '113', general: '112'
    },
    currency: {
      name: 'Norwegian Krone', code: 'NOK', exchangeRate: {
      usd: 0.0984,
      eur: 0.0839,
      gbp: 0.0732
    }, scamWarnings: []
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Use Public Transport and Ruter Passes',
        description: 'Oslo\'s public transport is safe, efficient, and covers the whole city. Get a Ruter travel pass for unlimited metro, tram, bus, and ferry rides.',
        severity: 'low',
        sourceName: 'Oslo on a Budget',
        sourceUrl: 'https://www.korttidsleie.net/en/oslo-on-a-budget/'
      },
      {
        title: 'Take Advantage of Free Attractions',
        description: 'Enjoy free sites like Vigeland Park, Akershus Fortress, Slottsparken, and the Botanical Garden. Many of Oslo\'s best experiences are free.',
        severity: 'low',
        sourceName: 'Oslo on a Budget',
        sourceUrl: 'https://www.korttidsleie.net/en/oslo-on-a-budget/'
      },
      {
        title: 'Stay in Safe, Central Neighborhoods',
        description: 'Areas like Sentrum, Frogner, and Grünerløkka are safe, lively, and convenient for solo travelers. Avoid isolated areas late at night.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/norway/oslo'
      },
      {
        title: 'Dress for the Weather and Layer Up',
        description: 'Norway\'s weather can change quickly. Wear layers and bring a waterproof jacket, especially in winter or for outdoor activities.',
        severity: 'low',
        sourceName: 'Fjord Tours',
        sourceUrl: 'https://www.fjordtours.com/en/norway/people-and-culture/solo-womens-travel'
      },
      {
        title: 'Enjoy Oslo\'s Parks and Outdoor Activities',
        description: 'Take advantage of Oslo\'s green spaces, hiking in Nordmarka, or swimming in the Oslofjord during summer. These are safe and social ways to enjoy the city.',
        severity: 'low',
        sourceName: 'Oslo on a Budget',
        sourceUrl: 'https://www.korttidsleie.net/en/oslo-on-a-budget/'
      }
    ],
    languages: ['Norwegian', 'English (widely spoken)'],
    daytimeSafetyPercent: 89.0,
    nighttimeSafetyPercent: 83.0,
    safetySourceName: 'Travel Ladies 2025',
    safetySourceUrl: 'https://travelladies.app/safety/norway/oslo',
    womensConfidenceScore: {
      score: 92.0,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 96,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 90,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 97,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 93,
        source: '',
        sourceUrl: ''
      }
    ],
    // Red flags based on Numbeo 2025, Travel Ladies, and US State Department
    redFlags: [
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Drug Activity in Some Districts',
        frequency: 'Occasional',
        icon: 'Syringe',
      },
      {
        label: 'Nighttime Drunk Behavior',
        frequency: 'Occasional',
        icon: 'Beer',
      },
      {
        label: 'Stabbings or Gang-Related Incidents (Rare)',
        frequency: 'Rare',
        icon: 'PocketKnife',
      },
    ], // Sources: https://www.numbeo.com/crime/in/Oslo, https://travelladies.app/safety/norway/oslo, https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/norway-travel-advisory.html
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
      "Don't make jokes about Norway\'s history or politics."
    ]
  },
  legalResources: {
      embassy: {
        name: 'U.S. Embassy Oslo',
        address: 'Morgedalsvegen 36, 0378 Oslo',
        phone: '+47 21 30 85 40',
        email: 'osloACS@state.gov',
        emergency: '+47 21 30 85 40',
        link: 'https://no.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Oslo',
          address: 'Morgedalsvegen 36, 0378 Oslo',
          phone: '+47 21 30 85 40',
          link: 'https://no.usembassy.gov/'
        },
        {
          name: 'British Embassy Oslo',
          address: 'Thomas Heftyes gate 8, 0244 Oslo',
          phone: '+47 23 13 27 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-oslo'
        },
        {
          name: 'German Embassy Oslo',
          address: 'Oscars gate 45, 0244 Oslo',
          phone: '+47 23 27 54 00',
          link: 'https://oslo.diplo.de/'
        },
        {
          name: 'French Embassy Oslo',
          address: 'Drammensveien 69, 0271 Oslo',
          phone: '+47 23 28 46 00',
          link: 'https://no.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Oslo',
          address: 'Haakon VIIs gate 1, 0161 Oslo',
          phone: '+47 22 92 66 90',
          link: 'https://www.exteriores.gob.es/embajadas/oslo'
        },
        {
          name: 'Australian Embassy Oslo',
          address: 'Jerbaneplassen 2, 0154 Oslo',
          phone: '+47 22 47 91 70',
          link: 'https://norway.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Oslo',
          address: 'Wergelandsveien 7, 0244 Oslo',
          phone: '+47 22 99 53 00',
          link: 'https://www.canadainternational.gc.ca/norway-norvege/'
        },
        {
          name: 'Netherlands Embassy Oslo',
          address: 'Oscars gate 29, 0244 Oslo',
          phone: '+47 22 83 36 10',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/norway'
        },
        {
          name: 'Danish Embassy Oslo',
          address: 'Olav Kyrres gate 7, 0244 Oslo',
          phone: '+47 22 54 08 00',
          link: 'https://norge.um.dk/en'
        },
        {
          name: 'Norwegian Government Services',
          address: 'Multiple locations throughout Oslo',
          phone: '+47 815 33 333',
          link: 'https://www.regjeringen.no/'
        },
        {
          name: 'Swiss Embassy Oslo',
          address: 'Bygdøy Allé 76, 0244 Oslo',
          phone: '+47 22 54 23 90',
          link: 'https://www.eda.admin.ch/oslo'
        },
        {
          name: 'Indian Embassy Oslo',
          address: 'Niels Juels gate 30, 0244 Oslo',
          phone: '+47 22 95 69 30',
          link: 'https://www.eoioslo.gov.in/'
        }
      ],
      womensRights: [
        'Norway has excellent legal protections for women with strong gender equality framework',
        'However, concerning sexual violence statistics show 22% of women report experiencing rape',
        'Government launched 30-measure plan in 2024 to combat sexual violence',
        'Strong support services available but reporting and conviction rates need improvement',
        'Norway consistently ranks highly in global gender equality indices',
        'Comprehensive reproductive rights and family support policies'
      ],
      legalSupport: [
        'Free legal aid available through Norwegian Legal Aid system',
        'Embassy maintains list of English-speaking lawyers',
        'Norwegian Bar Association provides legal assistance referrals',
        'Crisis centers provide legal support for assault victims',
        'Victim support services available through municipal programs',
        'International legal aid organizations active in Norway'
      ],
      reportingProcedures: [
        'Emergency: Call 112 for police, 113 for medical, 110 for fire',
        'Report crimes at nearest police station or call 112',
        'Request English interpreter - services available',
        'Contact US Embassy (+47 21 30 85 40) for serious crimes',
        'Document all incidents thoroughly with photos and details',
        'Crisis centers provide immediate support for assault victims',
        'Keep all police reports and documentation for legal proceedings'
      ]
    },

    // Enhanced safety fields matching Amsterdam/Caracas/Munich/Nagano format
    sexualHarassmentData: {
      prevalence: 'low-street, high-private',
      commonLocations: [
        'Street harassment extremely rare - Norwegian culture very respectful',
        'Most sexual violence occurs in private settings according to statistics',
        'Nightlife venues - exercise standard precautions with drinks and strangers',
        'Dating app meetups - meet in public places and inform others of plans',
        'Very minimal harassment on public transport or in public spaces'
      ],
      reportingRate: 68, // Higher than many countries but still underreported
      legalProtection: 'Excellent legal framework but implementation challenges. 84% of rape cases don\'t reach court, and 36% of those that do end in acquittal. Government launched 30-measure plan in 2024 to improve response to sexual violence.',
      supportResources: [
        'Emergency Services: 112 (Police), 113 (Medical)',
        'National Crisis Helpline: 116 117',
        'Oslo Crisis Center: 22 05 29 20',
        'Support Center Against Incest: 800 57 000',
        'U.S. Embassy Oslo: +47 21 30 85 40',
        'Sexual Assault Centers: Multiple locations across Norway'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'Oslo University Hospital (Rikshospitalet)',
          address: 'Sognsvannsveien 20, 0372 Oslo',
          phone: '+47 23 07 00 00',
          emergency: true,
          specialties: ['National Hospital', 'Advanced Medical Care', 'International Patients', 'Emergency Medicine'],
          link: 'https://oslo-universitetssykehus.no/'
        },
        {
          name: 'Ullevål Hospital',
          address: 'Kirkeveien 166, 0450 Oslo',
          phone: '+47 23 01 50 00',
          emergency: true,
          specialties: ['Emergency Trauma Center', 'Women\'s Health', 'International Standards'],
          link: 'https://oslo-universitetssykehus.no/avdelinger/ullevaal-sykehus'
        },
        {
          name: 'Aker Hospital',
          address: 'Trondheimsveien 235, 0586 Oslo',
          phone: '+47 23 01 60 00',
          emergency: true,
          specialties: ['Emergency Care', 'General Hospital', 'Local Healthcare'],
          link: 'https://oslo-universitetssykehus.no/avdelinger/aker-sykehus'
        }
      ],
      pharmacies: [
        {
          name: 'Vitusapotek Jernbanetorget (24-hour)',
          address: 'Jernbanetorget 4B, 0154 Oslo',
          phone: '+47 23 35 81 00',
          hours: '24/7',
          emergency: true,
          link: 'https://www.vitusapotek.no/'
        },
        {
          name: 'Apotek 1 (Multiple Locations)',
          address: 'Various locations citywide',
          phone: 'Location-dependent',
          hours: 'Generally 9:00-20:00',
          emergency: false,
          link: 'https://www.apotek1.no/'
        }
      ],
      womensHealth: {
        clinics: [
          'Oslo University Hospital Women\'s Health Department: Comprehensive gynecological and obstetric care',
          'Sex og Samfunn (Sex and Society): Sexual and reproductive health counseling',
          'Private women\'s health clinics throughout Oslo with English-speaking doctors',
          'Municipal health centers provide basic women\'s health services'
        ],
        gynecologists: [
          'Many English-speaking gynecologists available in private practice',
          'Hospital women\'s health departments have international patient services',
          'GP referral system provides access to specialist gynecological care',
          'Embassy can provide referrals to English-speaking women\'s health specialists'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Free emergency contraception available at hospitals and health centers',
          'Private clinics offer confidential reproductive health services',
          'No age restrictions or parental consent required'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies, supermarkets, and convenience stores',
          'High-quality Nordic and international brands available',
          'Sustainable options increasingly available including menstrual cups',
          'Free products available at some public facilities and universities'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Norway',
        'Routine vaccinations should be current',
        'Tick-borne encephalitis vaccination recommended for extensive forest hiking',
        'COVID-19 vaccination requirements may apply for certain events'
      ],
      healthRisks: [
        'Very low health risks - excellent public health standards',
        'Seasonal depression (SAD) during long winter months with limited daylight',
        'Tick-borne diseases possible in forested areas - use repellent when hiking',
        'Slippery conditions in winter - risk of falls on ice',
        'High cost of healthcare for non-residents without insurance'
      ]
    },

    transportationSafety: {
      safeOptions: [
        {
          type: 'Ruter Public Transport (Metro, Tram, Bus, Ferry)',
          safety: 9.2,
          recommendations: ['World-class safety standards', 'Well-maintained and reliable', 'Good security presence', 'Safe at all hours'],
          companies: ['Ruter AS'],
          link: 'https://ruter.no/en/'
        },
        {
          type: 'Taxi Services',
          safety: 8.8,
          recommendations: ['Licensed operators only', 'Professional drivers', 'Regulated fares', 'Safe and reliable'],
          companies: ['Oslo Taxi', 'Norges Taxi'],
          link: 'https://www.oslotaxi.no/'
        },
        {
          type: 'Uber',
          safety: 8.7,
          recommendations: ['GPS tracking', 'Driver verification', 'Cashless payment', 'Available in Oslo'],
          companies: ['Uber'],
          link: 'https://www.uber.com/no/en/'
        },
        {
          type: 'Walking',
          safety: 8.9,
          recommendations: ['Excellent pedestrian infrastructure', 'Well-lit streets', 'Generally safe day and night', 'Good sidewalks and crossings'],
          companies: ['N/A'],
          link: ''
        }
      ],
      nightTravel: {
        safety: 8.3,
        warnings: [
          'Generally very safe but avoid Oslo Central Station area late at night',
          'Some eastern districts have higher crime rates - use normal urban caution',
          'Winter conditions can make walking more dangerous due to ice',
          'Alcohol-related incidents more common on weekends after 2 AM'
        ],
        alternatives: [
          'Excellent night public transport with frequent services',
          'Taxis and ride-sharing readily available 24/7',
          'Well-lit main streets safe for walking with normal precautions',
          'Most accommodations in safe central areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'Ruter Public Transport',
          type: 'Public Transport',
          contact: '+47 177',
          safety: 9.2
        },
        {
          name: 'Oslo Taxi',
          type: 'Licensed Taxi',
          contact: '+47 02323',
          safety: 8.8
        },
        {
          name: 'Uber Norway',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.7
        }
      ]
    },

    accommodationSafety: {
      securityFeatures: [
        'High security standards across all accommodation types',
        '24/7 reception and security systems in hotels',
        'Electronic key cards and CCTV in common areas',
        'Well-lit entrances and corridors',
        'Safe deposit facilities available',
        'Professional staff trained in safety protocols'
      ],
      safeNeighborhoods: [
        'Sentrum (City Center)',
        'Frogner',
        'Grünerløkka',
        'Majorstuen',
        'Aker Brygge',
        'All central areas very safe for accommodation'
      ],
      womensOnly: [
        {
          name: 'Female-friendly accommodation options',
          type: 'Various',
          features: ['Female dorms in hostels', 'Women-focused travel services', 'Solo female traveler communities'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 9.2,
          comments: 'Oslo feels incredibly safe. Walked alone at night with no concerns. Locals are respectful and helpful.',
          date: '2025-01-20'
        },
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'One of the safest cities I\'ve visited. Expensive but worth it for peace of mind.',
          date: '2025-01-15'
        }
      ]
    },

    cybersecurity: {
      wifiSafety: [
        'Free WiFi widely available and generally secure',
        'Hotel and accommodation WiFi very reliable',
        'Public WiFi in transport hubs and city areas well-maintained',
        'Strong data protection laws in Norway'
      ],
      digitalScams: [
        'Very few digital scams targeting tourists',
        'Online banking and shopping very secure',
        'Be cautious of phishing emails and fake websites',
        'Standard online safety precautions apply'
      ],
      vpnRecommendations: [
        'VPN helpful for accessing home streaming services',
        'Not essential for security in Norway',
        'Useful for business travelers needing secure connections'
      ],
      dataProtection: [
        'Strong GDPR compliance and privacy protections',
        'Excellent data security standards',
        'Trustworthy payment processing',
        'Government surveillance minimal and regulated'
      ]
    },

    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing increase',
          location: 'Tourist areas and Central Station',
          date: '2025-01-15',
          description: 'Slight increase in pickpocketing in tourist areas and transport hubs',
          severity: 'low'
        },
        {
          type: 'Drug-related activity',
          location: 'Oslo Central Station area',
          date: '2025-01-10',
          description: 'Increased drug activity around central station, mainly affecting local population',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Oslo is extremely safe but expensive - budget accordingly for accommodation in safe areas',
          author: 'Solo Female Traveler',
          date: '2025-01-22',
          upvotes: 189
        },
        {
          tip: 'Public transport is excellent and safe at all hours - get a Ruter pass for convenience',
          author: 'Norway Local',
          date: '2025-01-20',
          upvotes: 156
        },
        {
          tip: 'Norwegians speak excellent English and are very helpful to solo travelers',
          author: 'International Traveler',
          date: '2025-01-18',
          upvotes: 134
        }
      ]
    },

    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise normal precautions in Norway. The US Department of State has assessed Norway as being a very low risk destination.',
      reason: 'Low crime rates and excellent safety infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/norway-travel-advisory.html',
      soloTravelerAdvice: [
        'Norway is one of the safest countries in the world for solo female travelers',
        'Oslo ranks as #9 safest city globally for women',
        'Street harassment is extremely rare due to cultural respect',
        'Excellent infrastructure and English-speaking population',
        'Be aware of concerning sexual violence statistics but most incidents occur in private settings'
      ]
    },

    crimeStatistics: {
      violentCrime: 0.6, // per 100,000 (very low by international standards)
      propertyCrime: 320, // per 100,000 (mostly theft and burglary)
      sexualAssault: 15.2, // per 100,000 (reporting has increased significantly)
      kidnapping: 0.02, // per 100,000 (virtually non-existent)
      source: 'Statistics Norway (SSB) & Norwegian Police',
      year: 2024
    },

    personalSafetyTools: {
      recommendedDevices: [
        'Standard travel safety items sufficient',
        'Winter safety gear (non-slip shoes, warm clothing)',
        'Portable phone charger for long winter nights',
        'Emergency contact information',
        'Travel insurance documentation'
      ],
      safetyApps: [
        {
          name: 'Ruter',
          purpose: 'Public transport navigation and tickets',
          rating: 4.8
        },
        {
          name: '113 SOS',
          purpose: 'Emergency services app',
          rating: 4.5
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female traveler community',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Police',
          number: '112',
          type: 'Emergency Police'
        },
        {
          name: 'Medical Emergency',
          number: '113',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Emergency',
          number: '110',
          type: 'Fire Emergency'
        },
        {
          name: 'U.S. Embassy Oslo',
          number: '+47 21 30 85 40',
          type: 'Consular Services'
        }
      ]
    },

    costAndComfort: {
      dailyBudget: {
        range: '$150 - $300 USD / day',
        description: 'Oslo is one of the world\'s most expensive cities. Budget travelers $150-200/day with hostels and budget meals. Mid-range $200-300/day with hotels and restaurants. Luxury $400+/day.',
        tip: 'Book accommodation well in advance for better rates. Use public transport passes for savings. Shop at grocery stores rather than restaurants to reduce costs. The high prices are offset by exceptional safety and quality.'
      },
      accommodation: [
        {
          type: 'Luxury Hotels (City Center)',
          avgCost: '$300-600/night',
          safetyNote: 'Exceptional security and service in prime locations',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels',
          avgCost: '$150-300/night',
          safetyNote: 'Good security in safe neighborhoods',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotels/Smart Hotels',
          avgCost: '$100-150/night',
          safetyNote: 'Compact but secure accommodations',
          safetyLevel: 'high'
        },
        {
          type: 'Hostels',
          avgCost: '$40-70/night (dorms), $120+ private',
          safetyNote: 'Safe hostels with female dorms available',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Ruter Public Transport',
          cost: '$4-10 daily passes',
          safetyDescription: 'World-class safety and reliability',
          safetyLevel: 'high'
        },
        {
          method: 'Taxi/Uber',
          cost: '$15-40 typical rides',
          safetyDescription: 'Very safe with professional drivers',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Excellent pedestrian infrastructure and safety',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Oslo is expensive but the safety and quality justify the cost',
        'Use Ruter public transport passes for significant savings',
        'Shop at grocery stores (Rema 1000, Kiwi) for budget meals',
        'Many parks and outdoor attractions are free',
        'Free museums on certain days - check schedules',
        'Happy hour prices at restaurants (usually 3-6 PM)',
        'Stay in hostels or budget hotels outside peak summer season',
        'Use city bikes for cheap transportation in good weather'
      ]
    }
};

export default oslo;
