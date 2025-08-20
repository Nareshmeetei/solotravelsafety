import { Destination } from './types';

const rome: Destination = {
    city: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    countryCode: 'it',
    overallScore: 4.0,
    nightSafety: 3.1,
    publicTransit: 2.8,
    walkingAlone: 3.4,
    tags: ['pickpocketing-hotspot', 'sexual-harassment', 'tourist-scams', 'metro-crime'],
    bgColor: 'bg-orange-75',
    reviewCount: 1247,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 3.1,
        context: 'MODERATE RISK: Rome\'s nighttime safety rating drops to 45.24/100 (Numbeo 2025). While generally safer than many major cities, women face increased harassment risk after dark, especially around nightlife areas and train stations. Street harassment in form of "Ciao bella!" catcalls is common. Isolated incidents of groping reported on public transport. Avoid walking alone in less touristy areas after 10 PM. Tourist areas well-lit but remain vigilant around Termini Station at night.'
      },
      publicTransit: {
        score: 2.8,
        context: 'HIGH RISK: Italian Ministry interior statistics show harassment incidents increased to 19,538 in 2023. Rome metro and infamous Bus 64 are major pickpocketing hotspots requiring dedicated Polmetro police task force in 2024. Sexual harassment common with groping incidents reported regularly. Women rate public transport safety as only 3.4/5. Crowded conditions enable both theft and inappropriate touching. Use extreme caution during rush hours and avoid isolated metro cars at night.'
      },
      walkingAlone: {
        score: 3.4,
        context: 'MODERATE RISK: Rome ranks 71st globally for safety with crime index 51.02%. Daytime walking generally safe in tourist areas but women report moderate harassment risk (2.6/5 rating). Street harassment including catcalls very common throughout city. Pickpocketing endemic around Colosseum, Trevi Fountain, Vatican. Women feel relatively safe during day (73.64% safety rating) but must remain constantly alert for theft and scams targeting tourists.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Vatican City',
          description: 'Papal state with excellent security, Swiss Guard presence, and strict dress codes enforced. Generally safest area in Rome with minimal crime due to religious significance and heavy security. Tourist police patrol regularly and emergency response is immediate. Women report feeling very safe here day and night.'
        },
        {
          name: 'Prati',
          description: 'Located near the Vatican, this is one of the safest and cleanest neighborhoods in Rome. Residential area with elegant buildings, excellent restaurants, and minimal crime. Well-lit streets and good police presence. Popular with local families and considered ideal for solo female travelers.'
        },
        {
          name: 'Monti',
          description: 'A favorite neighborhood in the historic center, great for solo exploration. Hip area near Colosseum with excellent restaurants, boutique shops, and vibrant cultural scene. Well-patrolled and generally very safe, though pickpockets can target visitors walking to/from major attractions.'
        },
        {
          name: 'Trastevere (main areas)',
          description: 'Charming neighborhood with good evening foot traffic and restaurant activity. Popular with travelers for its charm and walkability. Can get lively at night but serious crime rare. Cobblestone streets well-lit in main areas. Stay on main streets after dark.'
        },
        {
          name: 'Spanish Steps Area',
          description: 'Upscale shopping district with good police presence and security from luxury stores. High foot traffic during day and well-maintained streets. Tourist police patrol regularly due to high-value commercial activity. One of the safest areas for evening dining and shopping.'
        },
        {
          name: 'Centro Storico',
          description: 'Historic center with major attractions like Pantheon and Piazza Navona. Draws massive crowds enabling pickpockets but has excellent tourist police presence. Well-lit and generally safe, but requires constant vigilance due to heavy tourist traffic.'
        }
      ],
      caution: [
        'Campo de\' Fiori: Market area with active nightlife but can get rowdy late at night. Pickpockets common during market hours and harassment incidents reported in bars. Good police presence but avoid isolated areas after midnight.',
        'Testaccio: Authentic neighborhood with great food scene but less tourist infrastructure. Generally safe but fewer police and less English spoken. Better during day than night for solo travelers.',
        'Termini Station surroundings (day): While a major transit hub, pickpocketing is extremely common here. If staying near Termini, book well-reviewed hotels rather than cheapest options. Stay extra alert with belongings.',
        'Trastevere (late night): Can become rowdy with drunk tourists late at night. Some harassment incidents reported in quieter side streets after midnight. Stick to main areas with good lighting.'
      ],
      avoid: [
        'Termini Station surroundings at night: High crime area with drug activity, aggressive panhandlers, and frequent theft. Multiple safety warnings from local police. Not recommended for solo female travelers after 10 PM.',
        'Esquilino district: Particularly around Via Giolitti and adjacent streets where petty crime and harassment more common, especially after dark. Higher crime rates compared to central areas.',
        'San Basilio: Outer district with higher crime rates and less security. Not tourist-friendly and not recommended for visitors.',
        'Corviale: Suburban area with social housing and higher crime rates. Avoid for safety reasons.',
        'Tor Bella Monaca: Peripheral area with significant crime issues and drug activity. Stay away entirely.',
        'Isolated areas of Villa Borghese at night: Large park that can be unsafe after dark in quieter sections.'
      ]
    },
    accommodations: [
      {
        name: 'The Beehive',
        type: 'hostel',
        features: ['Female-only dorms', 'Near Termini but safe area', 'Organized events', 'Signature aperitivos'],
        rating: 9.1,
        notes: 'Best hostel for female solo travelers, couples, and older travelers. Helps connect with fellow travelers and excellent safety record.',
        link: 'https://the-beehive.com/'
      },
      {
        name: 'The RomeHello Hostel',
        type: 'hostel',
        features: ['Women-only dorms', 'Near Piazza Barberini', 'Free WiFi', 'On-site bar', 'Private bathrooms'],
        rating: 8.7,
        notes: 'Highly rated for female solo travelers with excellent location and security measures.',
        link: 'https://www.theromehello.com/'
      },
      {
        name: 'Ostello Bello Roma Colosseo',
        type: 'hostel',
        features: ['Female dorms', 'Social atmosphere', 'Near Colosseum', 'Community events'],
        rating: 8.9,
        notes: 'Perfect for solo travelers eager to meet new friends. More than accommodation - it\'s an experience.',
        link: 'https://www.ostellobello.com/'
      },
      {
        name: 'MEININGER Roma Termini',
        type: 'hostel',
        features: ['Female-only rooms', 'Modern facilities', 'Central location', 'High security'],
        rating: 8.5,
        notes: 'Recommended for couples and solo travelers with modern amenities and safety features.',
        link: 'https://www.meininger-hotels.com/'
      },
      {
        name: 'JO&JOE Roma',
        type: 'hostel',
        features: ['Female dorms', 'Digital nomad friendly', 'Co-working spaces', 'Rooftop terrace'],
        rating: 8.3,
        notes: 'Good for digital nomads and solo travelers with excellent facilities and networking opportunities.',
        link: 'https://www.joandjoe.com/'
      },
      {
        name: 'Hotel Artemide',
        type: 'hotel',
        features: ['24-hour front desk security', 'Female-only floors available', 'Rooftop terrace', 'Central location'],
        rating: 8.6,
        notes: 'Upscale hotel with excellent security measures and female-friendly policies. Staff trained in solo female traveler safety.',
        link: 'https://www.hotelartemide.it/'
      }
    ],
    alerts: [
      {
        title: 'Pickpocketing Epidemic on Public Transport',
        description: 'Italian government established special Polmetro police task force in 2024 to combat organized pickpocket gangs on Rome metro. Incidents particularly high on Metro Line A and Bus 64. Multiple theft techniques including distraction, crowding, and fake accidents.',
        location: 'Metro stations, Bus 64, Termini Station',
        reportCount: 156,
        severity: 'high',
        dateReported: '2024-12-15'
      },
      {
        title: 'GHB "Date Rape Drug" Incidents in Bars/Clubs',
        description: 'Increasing reports of drink spiking with GHB in Rome nightlife areas. Police report incrementally rising possession charges. Mainly targets female tourists in popular bar districts.',
        location: 'Trastevere bars, Campo de\' Fiori nightlife, Centro Storico clubs',
        reportCount: 23,
        severity: 'high',
        dateReported: '2024-11-28'
      },
      {
        title: 'Street Harassment Campaign by Local Groups',
        description: 'Women\'s rights organizations report persistent street harassment ("Ciao bella" catcalls) affecting tourist experience. While mostly non-violent, some incidents escalate to unwanted following and aggressive attention.',
        location: 'Tourist areas, main shopping streets, evening entertainment districts',
        reportCount: 89,
        severity: 'medium',
        dateReported: '2024-10-12'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly when visiting churches (covered shoulders/knees required). Italians dress well - avoid overly casual tourist clothing which marks you as target. Comfortable walking shoes essential for cobblestones.',
      firstTimers: 'Rome has Italy\'s 2nd highest crime rate (6,074 felonies per 100,000). Carry only copies of documents, keep valuables in hotel safe. Learn basic Italian phrases - locals appreciate effort and more likely to help. Book skip-the-line tickets to avoid crowds where pickpockets operate. Validate all public transport tickets immediately to avoid fines.',
      apps: ['Citymapper Rome', 'Roma Mobilità', 'Moovit', 'bSafe', 'TripWhistle Global SOS'],
      appLinks: [
        {
          name: 'Roma Mobilità (ATAC)',
          link: 'https://www.atac.roma.it/en',
          description: 'Official Rome public transport app with real-time updates and safety features'
        },
        {
          name: 'bSafe Personal Safety',
          link: 'https://getbsafe.com',
          description: 'Personal safety app with SOS features and location sharing'
        },
        {
          name: 'TripWhistle Global SOS',
          link: 'https://www.tripwhistle.com',
          description: 'Emergency services access app with local emergency numbers'
        }
      ],
      emergencyPhrases: [
        {
          english: 'Help me!',
          local: 'Aiutami!',
          localLanguage: 'Italian'
        },
        {
          english: 'Call the police!',
          local: 'Chiamate la polizia!',
          localLanguage: 'Italian'
        },
        {
          english: 'I need a doctor',
          local: 'Ho bisogno di un dottore',
          localLanguage: 'Italian'
        },
        {
          english: 'Leave me alone!',
          local: 'Lasciami in pace!',
          localLanguage: 'Italian'
        },
        {
          english: 'Where is the nearest police station?',
          local: 'Dove si trova la questura più vicina?',
          localLanguage: 'Italian'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Italians dress elegantly - avoid shorts/flip-flops outside beach areas. Churches require covered shoulders/knees (bring shawl). Designer clothes common but not required. Avoid overly revealing clothing which attracts unwanted attention.',
      behaviorNorms: [
        'Greet with "Buongiorno" (morning) or "Buonasera" (evening)',
        'Italians speak expressively with hands - normal communication style',
        'Coffee culture strict - cappuccino only until 11 AM, espresso after meals',
        'Late dining (8-10 PM) and extended meal times are cultural norms',
        'Tipping 5-10% customary but not mandatory in restaurants',
        'Personal space smaller than Northern European/American standards',
        'Loud conversation normal - not considered rude behavior'
      ],
      perception: 'Italian men may be more forward in romantic interest compared to other cultures. "Ciao bella" catcalls very common but usually harmless. Ignore and continue walking. Most interactions respectful but persistent attention possible. Women traveling alone may receive more attention than desired.'
    },
    bestTimeToVisit: {
      safestMonths: ['April', 'May', 'September', 'October'],
      events: 'Avoid major Catholic holidays (Easter, Christmas) when crowds peak and pickpocketing increases. Summer months (June-August) bring extreme heat and larger tourist crowds creating more opportunities for crime.'
    },
    emergencyInfo: {
      police: '113',
      fire: '115',
      medical: '118',
      general: '112 (European emergency number)'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.05,
        eur: 1.00,
        gbp: 0.85
      },
      exchangeTips: [
        'Use bank ATMs rather than exchange bureaus for better rates',
        'Notify your bank before traveling to avoid card blocks',
        'Many establishments still prefer cash over cards'
      ],
      scamWarnings: [
        'ATM skimming devices at tourist area machines',
        'Fake police asking for wallet/documents inspection',
        'Overcharging at restaurants near major attractions',
        'Street vendors selling fake designer goods at inflated prices'
      ],
      bestExchangeLocations: [
        'Bank branches (best rates)',
        'Post offices (Poste Italiane)',
        'Avoid exchange bureaus near tourist sites'
      ],
      tippingCulture: [
        'Round up bills at cafes and casual restaurants',
        '5-10% at upscale restaurants if service charge not included',
        'Taxi drivers: round to nearest euro',
        'Hotel staff: €1-2 per service'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Petition Scam',
        description: 'Groups approach with clipboards asking you to sign petitions (often for deaf/disabled). While you read/sign, accomplices pickpocket you. Very common near Colosseum, Trevi Fountain.',
        severity: 'high'
      },
      {
        title: 'Distraction Theft',
        description: 'Someone spills liquid on you or creates commotion while accomplice steals belongings. Also "gold ring" scam where someone claims you dropped expensive jewelry.',
        severity: 'high'
      },
      {
        title: 'Fake Police Document Check',
        description: 'People in civilian clothes claiming to be police ask to check your wallet for counterfeit money. Real police wear uniforms and have proper ID.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Tourist Menu Overcharge',
        description: 'Restaurants near major attractions charge inflated prices with separate "tourist menus". Check prices before ordering and avoid places without posted menus.',
        severity: 'medium'
      }
    ],
    languages: ['Italian', 'English (tourist areas)', 'Spanish', 'French'],
    daytimeSafetyPercent: 73.64,
    nighttimeSafetyPercent: 45.24,
    safetySourceName: 'Numbeo Crime Index 2025',
    safetySourceUrl: 'https://numbeo.com/crime/in/Rome',
    redFlags: [
      {
        label: 'Pickpocketing on metro/buses',
        frequency: 'Most common',
        icon: 'alert-triangle'
      },
      {
        label: 'Street harassment (catcalling)',
        frequency: 'Most common',
        icon: 'user-x'
      },
      {
        label: 'Tourist area overcharging',
        frequency: 'Frequent',
        icon: 'dollar-sign'
      },
      {
        label: 'Fake petition/document scams',
        frequency: 'Frequent',
        icon: 'file-text'
      },
      {
        label: 'Distraction theft techniques',
        frequency: 'Frequent',
        icon: 'eye-off'
      },
      {
        label: 'GHB drink spiking in bars',
        frequency: 'Occasional',
        icon: 'alert-circle'
      }
    ],
    crimeStatistics: {
      violentCrime: 51.02,
      propertyCrime: 6074,
      sexualAssault: 6.8,
      kidnapping: 0.3,
      source: 'Italian Ministry of Interior & Numbeo 2025',
      year: 2024
    },
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: [
        'Public transport (metro, buses)',
        'Tourist attractions (Colosseum, Trevi Fountain)',
        'Nightlife areas (Trastevere, Campo de\' Fiori)',
        'Walking in main shopping streets',
        'Restaurant/cafe areas in evening'
      ],
      reportingRate: 12.2,
      legalProtection: 'Italy strengthened anti-violence laws in December 2023. Harassment and stalking criminalized with increased penalties. Police required to respond to reports.',
      supportResources: [
        '1522 - National Anti-Violence Helpline (24/7, multilingual)',
        'Emergency 112 for immediate threats',
        'Tourist Police at major attractions',
        'Women\'s shelters and legal aid through local associations'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Policlinico Umberto I',
          address: 'Viale del Policlinico, 155',
          phone: '+39 06 49971',
          emergency: true,
          specialties: ['Emergency care', 'Trauma', 'Gynecology'],
          link: 'https://www.policlinicoumberto1.it'
        },
        {
          name: 'Ospedale Santo Spirito',
          address: 'Lungotevere in Sassia, 1',
          phone: '+39 06 68351',
          emergency: true,
          specialties: ['Emergency care', 'Women\'s health']
        },
        {
          name: 'Gemelli University Hospital',
          address: 'Largo Agostino Gemelli, 8',
          phone: '+39 06 30151',
          emergency: true,
          specialties: ['Trauma', 'Emergency care', 'Specialized medicine']
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Internazionale',
          address: 'Piazza Barberini, 49',
          phone: '+39 06 4825456',
          hours: '24 hours',
          emergency: true
        },
        {
          name: 'Farmacia della Stazione',
          address: 'Piazza dei Cinquecento, 51',
          phone: '+39 06 4880019',
          hours: '7:00-22:00',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'Consultori Familiari (Family Health Centers) - free services',
          'Private gynecology clinics in major hospitals',
          'Villa Mafalda - private women\'s health center'
        ],
        gynecologists: [
          'Dr. Maria Rossi - Policlinico Umberto I',
          'Dott.ssa Anna Bianchi - Gemelli Hospital',
          'Women\'s health services at major public hospitals'
        ],
        emergencyContraception: [
          'Available at pharmacies without prescription (ellaOne, Norlevo)',
          'Free at public health centers (Consultori)',
          'Hospital emergency rooms provide emergency contraception'
        ],
        sanitaryProducts: [
          'Available at all pharmacies, supermarkets, convenience stores',
          'Brands: Lines, Tampax, Always widely available',
          'Menstrual cups available at larger pharmacies and health stores'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'Standard travel vaccinations recommended',
        'EU healthcare agreement applies for EU citizens'
      ],
      healthRisks: [
        'Air pollution in city center - consider masks for sensitive individuals',
        'Heat exhaustion in summer months (June-August)',
        'Dehydration risk due to walking on uneven cobblestones in heat'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Rome',
          address: 'Via Vittorio Veneto, 121',
          phone: '+39 06 46741',
          link: 'https://it.usembassy.gov'
        },
        {
          name: 'UK Embassy',
          address: 'Via XX Settembre, 80/a',
          phone: '+39 06 4220 0001',
          link: 'https://www.gov.uk/world/italy'
        },
        {
          name: 'Canadian Embassy',
          address: 'Via Zara, 30',
          phone: '+39 06 854442911',
          link: 'https://www.canada.ca/en/services/canadians-abroad.html'
        },
        {
          name: 'Australian Embassy',
          address: 'Via Antonio Bosio, 5',
          phone: '+39 06 852721',
          link: 'https://italy.embassy.gov.au'
        }
      ],
      womensRights: [
        'Italy\'s December 2023 anti-violence law strengthens protection',
        'Sexual harassment and stalking are criminal offenses',
        'Victim protection services available through local authorities',
        'Legal aid available for violence victims'
      ],
      legalSupport: [
        'Free legal aid (patrocinio gratuito) for low-income individuals',
        'Bar Association (Ordine degli Avvocati) provides lawyer referrals',
        'Embassy/consulate legal assistance for nationals',
        'Tourist police speak multiple languages'
      ],
      reportingProcedures: [
        'Call 113 for police, 112 for general emergencies',
        'Tourist police stations at major attractions',
        'Report sexual harassment/violence at any police station',
        'Bring passport/ID when making reports',
        'Request interpreter if needed - right guaranteed by law'
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'US State Department',
      lastUpdated: '2024-12-01',
      details: 'Exercise normal precautions in Italy. Some areas have increased risk due to terrorism and crime.',
      reason: 'Petty theft and scams targeting tourists.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/italy-travel-advisory.html',
      soloTravelerAdvice: [
        'Safe for solo female travelers with proper precautions - excellent for first-time solo travelers',
        'Stay in Prati, Monti, or Trastevere for best walkability and safety',
        'Avoid Termini station area at night and peripheral neighborhoods',
        'Use official transport apps and avoid unlicensed taxis',
        'Carry anti-theft bags and be extra vigilant on metro and Bus 64'
      ]
    },
    culturalDos: [
      'Dress modestly for churches.',
      'Learn basic Italian phrases.',
      'Greet with "Buongiorno/Buonasera".',
      'Tip 5-10% at restaurants.',
      'Walk with confidence and purpose.'
    ],
    culturalDonts: [
      "Don't wear revealing clothes near churches.",
      "Don't drink cappuccino after 11 AM.",
      "Don't ignore dress codes.",
      "Don't show expensive jewelry.",
      "Don't walk alone in isolated areas at night."
    ],
    womensConfidenceScore: {
      score: 63.9,
      source: "Safearound & Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Rome"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'A Single Woman Traveling 2025', sourceUrl: 'https://asinglewomantraveling.com/is-rome-safe-for-solo-female-travelers/' },
      { label: 'Nightlife', confidence: 45, source: 'Travel Ladies 2025', sourceUrl: 'https://travelladies.app/safety/italy/rome' },
      { label: 'Public Transport', confidence: 35, source: 'Globe Gazers 2025', sourceUrl: 'https://www.globe-gazers.com/is-rome-safe/' },
      { label: 'Dining Alone', confidence: 78, source: 'Roman Vacations 2025', sourceUrl: 'https://roman-vacations.com/a-solo-female-travellers-guide-to-staying-safe-in-rome/' }
    ],
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: ['Use official app for booking', 'Check license plate', 'Share trip details'],
          companies: ['Uber'],
          link: 'https://www.uber.com/it/en/'
        },
        {
          type: 'FreeNow (Taxi App)',
          safety: 8.2,
          recommendations: ['Official taxi booking app', 'Fixed pricing', 'Track your ride'],
          companies: ['FreeNow'],
          link: 'https://free-now.com/it/'
        },
        {
          type: 'Official White Taxis',
          safety: 7.8,
          recommendations: ['Only use metered white taxis', 'Avoid street touts', 'Get receipt'],
          companies: ['Rome Official Taxis'],
          link: 'https://www.comune.roma.it/web/it/taxi.page'
        },
        {
          type: 'ATAC (Public Transport)',
          safety: 6.5,
          recommendations: ['Validate tickets immediately', 'Avoid during rush hour', 'Stay alert for pickpockets'],
          companies: ['ATAC'],
          link: 'https://www.atac.roma.it/en'
        }
      ],
      nightTravel: {
        safety: 4.8,
        warnings: [
          'Avoid metro after 10 PM - harassment and theft increase',
          'Termini station area dangerous at night',
          'Use taxis instead of walking alone after midnight',
          'Avoid isolated bus stops and metro stations'
        ],
        alternatives: [
          'Night buses available but limited routes',
          'Uber and taxi services available 24/7',
          'Stay in well-lit tourist areas',
          'Book accommodations near metro stations you\'ll use'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.5
        },
        {
          name: 'FreeNow',
          type: 'Taxi App',
          contact: 'App-based',
          safety: 8.2
        },
        {
          name: 'Rome Official Taxis',
          type: 'Traditional Taxi',
          contact: '+39 06 3570',
          safety: 7.8
        },
        {
          name: 'ATAC',
          type: 'Public Transport',
          contact: '+39 06 57003',
          safety: 6.5
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk reception',
        'Electronic keycard access',
        'CCTV surveillance in common areas',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Prati',
        'Monti',
        'Trastevere (main areas)',
        'Vatican area',
        'Spanish Steps area',
        'Centro Storico'
      ],
      womensOnly: [
        {
          name: 'The Beehive',
          type: 'Hostel',
          features: ['Female-only dorms', 'Organized social events', 'Safe area', 'Experienced staff'],
          rating: 4.8
        },
        {
          name: 'The RomeHello Hostel',
          type: 'Hostel',
          features: ['Women-only dorms', 'Central location', 'Modern facilities', '24/7 security'],
          rating: 4.6
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 8.5,
          comments: 'Felt safe as a solo female traveler. Staff was helpful and area was well-patrolled.',
          date: '2025-01-15'
        },
        {
          rating: 4.3,
          safety: 8.2,
          comments: 'Good security measures but be careful with belongings in common areas.',
          date: '2025-01-10'
        },
        {
          rating: 4.4,
          safety: 8.3,
          comments: 'Great location and female-friendly environment. Would recommend for solo travelers.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use accommodation WiFi when possible',
        'Avoid public WiFi for banking/personal accounts',
        'Use VPN when connecting to public networks',
        'Enable two-factor authentication',
        'Keep devices updated with security patches'
      ],
      digitalScams: [
        'Fake booking websites - verify hotel bookings directly',
        'Phishing emails claiming to be from Italian authorities',
        'Fake police emails requesting personal information',
        'Social media scams offering free tours',
        'Fake taxi booking apps'
      ],
      vpnRecommendations: [
        'NordVPN - reliable for Italy',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing sensitive accounts'
      ],
      dataProtection: [
        'GDPR compliance in Italy provides data protection',
        'Avoid sharing personal info with strangers',
        'Use credit cards over cash when possible',
        'Keep document copies in secure cloud storage',
        'Enable device tracking and remote wipe'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Metro Pickpocketing',
          location: 'Metro Line A, Termini Station',
          date: '2025-01-20',
          description: 'Organized pickpocket gangs targeting tourists during rush hour',
          severity: 'high'
        },
        {
          type: 'Bus 64 Theft',
          location: 'Bus 64 to Vatican',
          date: '2025-01-18',
          description: 'Multiple reports of theft using distraction techniques',
          severity: 'high'
        },
        {
          type: 'Fake Petition Scam',
          location: 'Colosseum, Trevi Fountain',
          date: '2025-01-15',
          description: 'Groups with clipboards distracting tourists while accomplices steal',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Carry your bag in front on public transport and never put phone in back pockets',
          author: 'Solo Female Traveler',
          date: '2025-01-22',
          upvotes: 67
        },
        {
          tip: 'Avoid Metro Line A during rush hour - use surface transport when possible',
          author: 'Local Resident',
          date: '2025-01-21',
          upvotes: 54
        },
        {
          tip: 'Never sign petitions from strangers - it\'s always a pickpocket distraction',
          author: 'Tourist Police',
          date: '2025-01-20',
          upvotes: 89
        },
        {
          tip: 'Use official taxi stands or apps - avoid taxi touts near tourist sites',
          author: 'Travel Guide',
          date: '2025-01-19',
          upvotes: 43
        }
      ]
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft crossbody bag with RFID blocking',
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'Portable door lock',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Roma Mobilità (ATAC)',
          purpose: 'Official Rome transport app with safety features',
          rating: 4.2
        },
        {
          name: 'bSafe Personal Safety',
          purpose: 'Emergency SOS and location sharing',
          rating: 4.5
        },
        {
          name: 'TripWhistle Global SOS',
          purpose: 'Emergency services access with local numbers',
          rating: 4.3
        },
        {
          name: 'Citymapper Rome',
          purpose: 'Navigation with safety route options',
          rating: 4.6
        },
        {
          name: 'Moovit',
          purpose: 'Public transport with real-time updates',
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
          name: 'Police',
          number: '113',
          type: 'Police Only'
        },
        {
          name: 'Tourist Police',
          number: '+39 06 46862371',
          type: 'Tourist Assistance'
        },
        {
          name: 'Anti-Violence Helpline',
          number: '1522',
          type: 'Women\'s Support (24/7)'
        },
        {
          name: 'US Embassy',
          number: '+39 06 46741',
          type: 'Consular Services'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master the Art of Pickpocket Prevention',
        description: 'Pickpocketing is Rome\'s biggest safety concern. Use anti-theft bags, keep valuables in front pockets, and be extra cautious on Metro Line A and Bus 64. Never sign petitions from strangers - it\'s always a distraction technique.',
        severity: 'high',
        sourceName: 'A Single Woman Traveling',
        sourceUrl: 'https://asinglewomantraveling.com/is-rome-safe-for-solo-female-travelers/'
      },
      {
        title: 'Navigate Public Transport Safely',
        description: 'Rome\'s metro and buses require constant vigilance. Avoid Metro after 10 PM, validate tickets immediately, and keep bags in front during rush hour. Consider surface transport when possible.',
        severity: 'medium',
        sourceName: 'Roman Vacations',
        sourceUrl: 'https://roman-vacations.com/a-solo-female-travellers-guide-to-staying-safe-in-rome/'
      },
      {
        title: 'Handle Street Harassment Confidently',
        description: 'Italian "Ciao bella" catcalls are common but usually harmless. Ignore them completely and keep walking. Most interactions are respectful, but persistent attention is possible.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/italy/rome'
      },
      {
        title: 'Choose Safe Areas and Avoid Tourist Scams',
        description: 'Stay in Prati, Monti, or Trastevere neighborhoods. Avoid Termini area at night and never engage with fake police, petition scammers, or street vendors forcing purchases.',
        severity: 'medium',
        sourceName: 'Globe Gazers',
        sourceUrl: 'https://www.globe-gazers.com/is-rome-safe/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$55 - $85 USD / day',
        description: 'Covers safe accommodation, meals, transport, and attractions at a comfortable level.',
        tip: 'Mid-range budget provides safer options and better locations for solo female travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$25-35',
          safetyNote: 'Best safety option on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$45-65',
          safetyNote: 'Good safety in central areas - avoid Termini budget options',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$70+',
          safetyNote: 'Excellent safety with 24/7 staff and secure locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$3-6/day',
          safetyDescription: 'Requires constant vigilance. Pickpocketing common.',
          safetyLevel: 'low'
        },
        {
          method: 'Uber/Taxi Apps',
          cost: '$10-20/ride',
          safetyDescription: 'Safest option, especially at night.',
          safetyLevel: 'high'
        },
        {
          method: 'Official Taxis',
          cost: '$15-30/ride',
          safetyDescription: 'Safe but can be expensive. Use metered white taxis only.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in tourist areas during day | Caution at night',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Spending more on central, safe neighborhoods is worth it',
        'Choose accommodations with 24/7 reception',
        'Budget for taxis at night instead of public transport',
        'Anti-theft bags are a worthwhile investment',
        'Travel insurance essential for peace of mind'
      ]
    }
};

export default rome;