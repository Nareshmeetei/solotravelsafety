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
          description: 'Papal state with excellent security, Swiss Guard presence, and strict dress codes enforced. Generally safest area in Rome with minimal crime due to religious significance and heavy security. Tourist police patrol regularly and emergency response is immediate.'
        },
        {
          name: 'Trastevere (main areas)',
          description: 'Charming neighborhood with good evening foot traffic and restaurant activity. Police presence adequate and locals generally helpful. Can get lively at night but serious crime rare. Cobblestone streets well-lit in main areas.'
        },
        {
          name: 'Spanish Steps Area',
          description: 'Upscale shopping district with good police presence and security from luxury stores. High foot traffic during day and well-maintained streets. Tourist police patrol regularly due to high-value commercial activity.'
        }
      ],
      caution: [
        'Monti: Hip area near Colosseum with increasing tourist activity. Generally safe but pickpockets target visitors walking to/from major attractions. Evening safety good but stay alert.',
        'Campo de\' Fiori: Market area with active nightlife but can get rowdy late. Pickpockets common during market hours. Good police presence but harassment incidents reported.',
        'Centro Storico: Historic center with major attractions draws massive crowds enabling pickpockets. Tourist police present but sheer volume of visitors makes vigilance essential.',
        'Testaccio: Authentic neighborhood with great food scene but less tourist infrastructure. Generally safe but fewer police and less English spoken.'
      ],
      avoid: [
        'Termini Station surroundings at night: High crime area with drug activity, aggressive panhandlers, and frequent theft. Multiple safety warnings from local police.',
        'Esquilino (some areas): Particularly around Via Giolitti and adjacent streets where petty crime and harassment more common, especially after dark.',
        'Some peripheral areas: Outer districts with less security and police presence, particularly concerning for solo female travelers at night.'
      ]
    },
    accommodations: [
      {
        name: 'Hotel Artemide',
        type: 'hotel',
        features: ['24-hour front desk security', 'Central location near Termini', 'Female-only floors available', 'Rooftop terrace with security'],
        rating: 4.4,
        notes: 'Upscale hotel with excellent security measures and female-friendly policies. Staff trained in solo female traveler safety.'
      },
      {
        name: 'The RomeHello',
        type: 'hostel',
        features: ['Women-only dorms', 'Keycard access', '24-hour reception', 'Lockers in rooms', 'Female staff available'],
        rating: 4.2,
        notes: 'Popular female-friendly hostel with strong security measures and solo traveler community.'
      },
      {
        name: 'Regulated Airbnb (Trastevere/Vatican areas)',
        type: 'airbnb',
        features: ['Tourist tax compliance', 'Secure building entry', 'Host verification required', 'Tourist registration mandatory'],
        rating: 4.0,
        notes: 'Choose apartments in tourist-registered buildings with secure access and verified hosts only.'
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
      embassy: {
        name: 'US Embassy Rome',
        address: 'Via Vittorio Veneto, 121',
        phone: '+39 06 46741',
        email: 'ACSRome@state.gov',
        emergency: '+39 06 46741',
        link: 'https://it.usembassy.gov'
      },
      embassies: [
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
      soloTravelerAdvice: [
        'Remain vigilant in tourist areas where pickpocketing is common',
        'Avoid demonstrations and large gatherings',
        'Be aware of your surroundings when using public transportation',
        'Keep emergency contact information readily available'
      ]
    }
};

export default rome;