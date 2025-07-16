import { Destination } from './types';

const bern: Destination = {
    city: 'Bern',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 8.7,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 100,
    lastUpdated: '6 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.4,
        context: 'Bern is very safe at night, especially in central and well-trafficked areas. Streets are well-lit, and there is a visible police presence. While petty crime like pickpocketing can occur in tourist areas, violent incidents are extremely rare. Women and solo travelers generally report feeling comfortable, but it\'s wise to avoid isolated areas and stay alert in nightlife zones. The Old Town and central districts remain safe and lively well into the evening.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Bern\'s public transport system (trams, buses, and trains) is modern, clean, and highly reliable. Stations and vehicles are well-monitored with security cameras and staff. Incidents are rare, and most travelers feel safe using public transit at any hour. The SBB Mobile app provides real-time updates and emergency contact options. As always, keep an eye on your belongings, especially during rush hour.'
      },
      walkingAlone: {
        score: 8.6,
        context: 'Walking alone in Bern is very safe, both day and night, thanks to the city\'s respectful culture and strong community norms. The city is well-lit and busy, even after dark. Most locals and visitors feel comfortable walking alone, but it\'s best to stay on main streets and avoid deserted areas late at night. The Old Town and central areas are particularly safe for solo women.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Town (Altstadt)',
          description: 'Bern\'s UNESCO-listed Old Town is vibrant and well-patrolled, with a strong police presence and excellent lighting. While pickpocketing can occur in crowded tourist spots (like the Zytglogge and Bärenplatz), violent crime is extremely rare. The area is safe day and night, with many restaurants and cafes open late. The medieval architecture and cobblestone streets are well-lit and busy with locals and tourists.'
        },
        {
          name: 'Kirchenfeld',
          description: 'An upscale, residential neighborhood known for its embassies, museums, and diplomatic residences. Kirchenfeld is considered one of the safest and most prestigious areas in Bern, with very low crime rates and excellent security. It\'s popular with both locals and visitors for its peaceful atmosphere and cultural attractions like the Bern Historical Museum.'
        },
        {
          name: 'Breitenrain',
          description: 'A quiet, residential area with a mix of families and young professionals. Breitenrain is known for its safety, local shops, and proximity to the Aare River. Streets are well-lit and there\'s a friendly, neighborhood feel. Crime is very low, and the area is popular with solo travelers seeking a peaceful environment.'
        },
        {
          name: 'Länggasse',
          description: 'University district with a vibrant, intellectual atmosphere. Länggasse is generally very safe, with lots of cafes, bookstores, and student-friendly establishments. Petty theft is rare, but as with all busy areas, keep an eye on your belongings. The area is well-lit and busy well into the evening.'
        },
        {
          name: 'Mattenhof',
          description: 'A residential area with a strong community feel and very low crime rates. Mattenhof is popular with families and offers a peaceful environment for solo travelers. The area is well-lit and has good transport connections to the city center.'
        },
        {
          name: 'Bümpliz',
          description: 'A diverse, multicultural neighborhood that has become increasingly safe in recent years. Community initiatives and improved lighting have reduced crime. Solo women report feeling comfortable, but as with all urban areas, stay alert at night.'
        }
      ],
      caution: [
        'Nightlife areas late at night (around bars and clubs in the Old Town): While generally safe, these areas can become rowdy late at night, especially on weekends. Incidents of harassment and petty crime are rare but can occur. Use official taxis or rideshares after midnight, and avoid walking alone in deserted alleys.',
        'Train station area after midnight: While the main station is well-lit and monitored, the surrounding area can be less frequented late at night. Use well-lit routes and stay alert.'
      ],
      avoid: [
        'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Bern.',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'Hotel Schweizerhof Bern',
        type: 'hotel',
        features: ['Luxury 5-star', '24/7 security', 'Central location', 'Female-friendly', 'Safe neighborhood', 'Professional staff'],
        rating: 4.8,
        notes: 'Historic luxury hotel with excellent security, located in the heart of Old Town. Popular with business and leisure travelers. Staff trained in guest safety.',
        link: 'https://www.schweizerhof-bern.ch/en/'
      },
      {
        name: 'Hotel Bellevue Palace Bern',
        type: 'hotel',
        features: ['Government hotel', '24/7 security', 'River view', 'Female-friendly', 'High-end amenities', 'Safe area'],
        rating: 4.9,
        notes: 'Official government hotel with top-tier security. Overlooks the Aare River and Parliament. Very safe and prestigious location.',
        link: 'https://www.bellevue-palace.ch/en/'
      },
      {
        name: 'Bern Backpackers Hotel Glocke',
        type: 'hostel',
        features: ['Female-only dorms', '24/7 reception', 'Central location', 'Budget-friendly', 'Social atmosphere', 'Security cameras'],
        rating: 4.4,
        notes: 'Popular hostel with dedicated female dorms and excellent security. Located in Old Town with easy access to transport.',
        link: 'https://www.bernbackpackers.com/'
      },
      {
        name: 'Hotel Alpenblick',
        type: 'hotel',
        features: ['Family-run', 'Quiet neighborhood', 'Garden views', 'Female-friendly', 'Personal service', 'Safe area'],
        rating: 4.6,
        notes: 'Charming family-run hotel in quiet residential area. Excellent for solo travelers seeking peaceful environment.',
        link: 'https://www.alpenblick-bern.ch/en/'
      },
      {
        name: 'Hotel Savoy Bern',
        type: 'hotel',
        features: ['Boutique hotel', 'Central location', 'Modern amenities', 'Female-friendly', 'Safe neighborhood', 'Professional staff'],
        rating: 4.7,
        notes: 'Modern boutique hotel near train station. Excellent security and staff trained in guest safety protocols.',
        link: 'https://www.hotel-savoy-bern.ch/en/'
      },
      {
        name: 'Hotel Kreuz Bern',
        type: 'hotel',
        features: ['Historic building', 'Central location', 'Female-friendly', 'Safe area', 'Professional staff', 'Good value'],
        rating: 4.5,
        notes: 'Historic hotel in Old Town with modern amenities. Popular with solo travelers for its central location and safety.',
        link: 'https://www.hotelkreuzbern.ch/en/'
      },
      {
        name: 'Youth Hostel Bern',
        type: 'hostel',
        features: ['Female-only rooms', '24/7 reception', 'Budget-friendly', 'Social atmosphere', 'Security cameras', 'Kitchen facilities'],
        rating: 4.3,
        notes: 'Official Swiss Youth Hostel with dedicated female rooms. Located near university with good transport links.',
        link: 'https://www.youthhostel.ch/en/hostels/bern/'
      },
      {
        name: 'Hotel Bären am Bundesplatz',
        type: 'hotel',
        features: ['Central location', 'Parliament view', 'Female-friendly', 'Safe area', 'Professional staff', 'Good value'],
        rating: 4.4,
        notes: 'Hotel with views of Parliament building. Excellent location for sightseeing with good security.',
        link: 'https://www.baeren-bern.ch/en/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress in layers for unpredictable weather—Swiss weather can change quickly
• Bring a rain jacket and warm clothing, especially in winter
• Avoid flashy jewelry and keep your bag zipped and close to your body
• Wear comfortable, sturdy shoes for walking on cobblestones and hills
• Always carry a charged phone and emergency contacts
• Consider a cross-body bag with secure zippers for better safety`,
      firstTimers: `• Bern is very easy for solo women, but stay alert, especially at night
• Save emergency numbers (117 for police, 144 for medical, 112 for general emergency) and local support hotlines
• Use official taxis or rideshares after dark (Bären Taxi, Taxi Bern)
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop, cafe, or hotel
• The SBB Mobile app is essential for public transport navigation and safety`,
      apps: [
        'SBB Mobile',
        'Hostelworld',
        'GeoSure',
        'Citymapper',
        'NomadHer',
        'Tourlina',
        'My Safetipin'
      ],
      appLinks: [
        { name: 'SBB Mobile', link: 'https://www.sbb.ch/en/timetable/mobile-apps.html', description: 'Swiss public transport navigation' },
        { name: 'Hostelworld', link: 'https://www.hostelworld.com/', description: 'Find female-friendly hostels' },
        { name: 'GeoSure', link: 'https://geosure.ai/individuals', description: 'Real-time neighborhood safety scores' },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Smart urban transport with safety features' },
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female travel community & safety tips' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hilfe!',
          localLanguage: 'German'
        },
        {
          english: 'Call the police!',
          local: 'Rufen Sie die Polizei!',
          localLanguage: 'German'
        },
        {
          english: 'I need a doctor.',
          local: 'Ich brauche einen Arzt.',
          localLanguage: 'German'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Wo ist das nächste Krankenhaus?',
          localLanguage: 'German'
        },
        {
          english: 'I am lost.',
          local: 'Ich habe mich verirrt.',
          localLanguage: 'German'
        },
        {
          english: 'Please leave me alone.',
          local: 'Bitte lassen Sie mich in Ruhe.',
          localLanguage: 'German'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ich fühle mich nicht sicher.',
          localLanguage: 'German'
        },
        {
          english: 'Can you help me?',
          local: 'Können Sie mir helfen?',
          localLanguage: 'German'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Dress is generally practical and neat, but casual. Jeans, t-shirts, and comfortable shoes are fine in most settings. For business or upscale restaurants, smart-casual is expected. Rain gear is essential year-round. Swimwear is only for pools and designated swimming areas. The Swiss value cleanliness and neatness in appearance.',
      behaviorNorms: [
        'Respect personal space and privacy; the Swiss value directness but not intrusion.',
        'Be punctual for appointments and public transport—Swiss time is precise.',
        'Greet with a handshake and maintain eye contact.',
        'Tipping is appreciated (5–10%) but not mandatory.',
        'Don\'t be loud or draw attention in public spaces.',
        'Respect quiet hours (10pm–7am, Sundays) in residential areas.',
        'Don\'t litter or leave trash outdoors—Switzerland is very clean.',
        'Try to learn and use a few German phrases, even though most people speak English.',
        'The Swiss are tolerant of different lifestyles and expect the same from visitors.',
        'Plan visits in advance; unannounced drop-ins are uncommon.',
        'Join in on "Gemütlichkeit" (coziness, comfort) in social settings.'
      ],
      perception: 'Solo women travelers are generally respected and very safe in Bern. The city is progressive and open-minded, with strong gender equality laws. Catcalling is rare but can happen. Locals are used to solo travelers and are usually helpful if you ask for directions or advice. Sexual harassment, assault, and kidnapping are extremely rare, but always prioritize your safety and trust your instincts.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '117', fire: '118', medical: '144', general: '112'
    },
    currency: {
      name: 'Swiss Franc',
      code: 'CHF',
      exchangeRate: { usd: 1.1, eur: 1.0, gbp: 0.85 },
      scamWarnings: [
        'Always use official ATMs (UBS, Credit Suisse, Raiffeisen, PostFinance) or pay by card, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
      ],
      description: 'Switzerland is highly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs (UBS, Credit Suisse, Raiffeisen, PostFinance). Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
    },
    redFlags: [
      { label: 'Pickpocketing in Crowded Areas & Transit', frequency: 'Occasional', icon: 'Hand' }, // Swiss Federal Statistical Office 2024
      { label: 'Scams (Fake Police, ATM Skimming, Taxi)', frequency: 'Rare', icon: 'Shield' }, // Swiss Federal Statistical Office 2024
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' }, // Swiss Federal Statistical Office 2024
      { label: 'Nightlife Drunk Behavior (Old Town)', frequency: 'Rare', icon: 'Beer' }, // Local police reports 2024
    ],
    scamWarnings: [
      {
        title: 'Fake Police Officers',
        description: 'Scammers posing as police officers may ask to see your ID or wallet. Real Swiss police will never ask to see your money or take your wallet.',
        severity: 'low'
      },
      {
        title: 'Taxi Overcharging',
        description: 'Some unlicensed taxis may overcharge tourists. Always use official taxi stands or reputable companies like Bären Taxi.',
        severity: 'low'
      },
      {
        title: 'ATM Skimming',
        description: 'Use only official bank ATMs and cover your PIN when entering it. Avoid standalone ATMs in tourist areas.',
        severity: 'low'
      }
    ],
    usefulTips: [
      {
        title: 'Stay in the Old Town or Central Areas',
        description: 'Bern\'s UNESCO-listed Old Town is safe, lively, and well-lit at night. Choose accommodation in central neighborhoods for easy access to attractions and public transport.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Use Public Transport and the Bern Ticket',
        description: 'Bern\'s trams and buses are safe, clean, and efficient. If you stay overnight, you get a free Bern Ticket for unlimited public transport in the city.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Be Cautious with Valuables at Tourist Sites',
        description: 'Pickpocketing is rare but can occur in busy areas like the Zytglogge, train stations, and markets. Keep your bag zipped and don\'t leave valuables unattended.',
        severity: 'low',
        sourceName: 'gov.ch',
        sourceUrl: 'https://www.ch.ch/en/safety-in-switzerland/'
      },
      {
        title: 'Swim Safely in the River Aare',
        description: 'Swimming in the Aare is a local tradition, but currents can be strong. Only swim in designated areas and follow local advice.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Respect Local Customs and Quiet Hours',
        description: 'The Swiss value politeness and quiet, especially in residential areas and on public transport. Greet with "Grüezi" and observe posted quiet hours.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Currency & Exchange Tips',
        description: 'Switzerland is highly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs (UBS, Credit Suisse, Raiffeisen, PostFinance). Swiss ATMs dispense Swiss Francs (CHF) only. Avoid exchanging money at airports, train stations, or street kiosks, as rates and fees are much worse than at banks or ATMs. Most places accept contactless payments (Apple Pay, Google Pay), and tipping is not required but appreciated.',
        severity: 'low',
        sourceName: 'Swiss Tourism Board',
        sourceUrl: 'https://www.myswitzerland.com/en-ch/planning/about-switzerland/money-exchange/'
      }
    ],
    languages: ['German', 'English (widely spoken)'],
    daytimeSafetyPercent: 89.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bern)
    nighttimeSafetyPercent: 80.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bern)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bern',
    culturalDos: [
      'Greet with a polite "Grüezi" and use formal titles.',
      'Be punctual for meetings and public transport.',
      'Respect quiet zones and personal space.',
      'Dress neatly, especially in restaurants and theaters.',
      'Recycle and dispose of waste properly.',
      'Respect the Swiss value of privacy and discretion.',
      'Learn a few basic German phrases to show respect.',
      'Follow posted rules and regulations strictly.',
      'Be prepared for all weather conditions.',
      'Use designated pedestrian crossings and bike lanes.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about Switzerland's history or politics.",
      "Don't ignore quiet hours (10pm–7am, Sundays).",
      "Don't be late for appointments or public transport.",
      "Don't wear swimwear in saunas; nudity is expected.",
      "Don't cover your face in public (from 2025).",
      "Don't assume everyone speaks English (though most do)."
    ],
    womensConfidenceScore: {
      score: 96.8, // Numbeo 2025, Travel Ladies 2025
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Bern"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 95,
        source: 'Numbeo 2025',
        sourceUrl: 'https://www.numbeo.com/crime/in/Bern'
      },
      {
        label: 'Nightlife',
        confidence: 88,
        source: 'Numbeo 2025',
        sourceUrl: 'https://www.numbeo.com/crime/in/Bern'
      },
      {
        label: 'Public Transport',
        confidence: 97,
        source: 'Numbeo 2025',
        sourceUrl: 'https://www.numbeo.com/crime/in/Bern'
      },
      {
        label: 'Dining Alone',
        confidence: 93,
        source: 'Numbeo 2025',
        sourceUrl: 'https://www.numbeo.com/crime/in/Bern'
      }
    ],
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Bern',
        address: 'Sulgeneckstrasse 19, 3007 Bern',
        phone: '+41 31 357 7011',
        email: 'bern@usembassy.gov',
        emergency: '+41 31 357 7011',
        link: 'https://ch.usembassy.gov/embassy/locations-in-switzerland/u-s-embassy-bern/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Bern',
          address: 'Sulgeneckstrasse 19, 3007 Bern',
          phone: '+41 31 357 7011',
          link: 'https://ch.usembassy.gov/embassy/locations-in-switzerland/u-s-embassy-bern/'
        },
        {
          name: 'British Embassy Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-berne'
        },
        {
          name: 'Australian Embassy Bern',
          address: 'Kirchenfeldstrasse 88, 3005 Bern',
          phone: '+41 31 580 30 30',
          link: 'https://switzerland.embassy.gov.au/'
        },
        {
          name: 'Embassy of Italy Bern',
          address: 'Elfenstrasse 14, 3006 Bern',
          phone: '+41 31 350 07 77',
          link: 'https://ambberna.esteri.it/ambasciata_berna/en/'
        },
        {
          name: 'Embassy of Spain Bern',
          address: 'Kalcheggweg 24, 3006 Bern',
          phone: '+41 31 357 42 42',
          link: 'https://www.exteriores.gob.es/Embajadas/berna/en/Paginas/index.aspx'
        },
        {
          name: 'Embassy of France Bern',
          address: 'Schosshaldenstrasse 46, 3006 Bern',
          phone: '+41 31 359 21 11',
          link: 'https://ch.ambafrance.org/'
        },
        {
          name: 'Embassy of Germany Bern',
          address: 'Willadingweg 83, 3006 Bern',
          phone: '+41 31 359 41 11',
          link: 'https://bern.diplo.de/ch-en'
        },
        {
          name: 'Embassy of Canada Bern',
          address: 'Kirchenfeldstrasse 88, 3005 Bern',
          phone: '+41 31 357 3200',
          link: 'https://www.international.gc.ca/country-pays/switzerland-suisse/bern.aspx?lang=eng'
        },
        {
          name: 'Embassy of Japan Bern',
          address: 'Engestrasse 53, 3012 Bern',
          phone: '+41 31 305 15 70',
          link: 'https://www.ch.emb-japan.go.jp/itprtop_en/index.html'
        },
        {
          name: 'Royal Thai Embassy Bern',
          address: 'Kirchgasse 56, 3097 Liebfeld-Bern',
          phone: '+41 31 970 30 30',
          link: 'https://www.thaiembassy.ch/'
        }
      ],
      womensRights: [
        'Right to equal pay and employment',
        'Protection against sexual harassment and assault',
        'Access to reproductive healthcare',
        'Legal recourse for domestic violence',
        'Right to report crimes without discrimination'
      ],
      legalSupport: [
        'Swiss Victim Support (Opferhilfe Schweiz): https://www.opferhilfe-schweiz.ch/',
        'Women’s Shelters Switzerland: https://www.frauenhaus-schweiz.ch/',
        'Swiss Bar Association: https://www.sav-fsa.ch/'
      ],
      reportingProcedures: [
        'Call 117 for police in emergencies',
        'Report sexual harassment or assault at the nearest police station',
        'Contact Swiss Victim Support for confidential help',
        'Seek medical attention at local hospitals for evidence collection',
        'Request translation services if needed when reporting'
      ]
    },
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: [
        'Nightlife areas late at night (around bars and clubs in Old Town)',
        'Public transport during peak hours (rare but can occur)',
        'Tourist areas during busy periods (very rare)'
      ],
      reportingRate: 85, // percentage - based on Swiss Federal Statistical Office data
      legalProtection: 'Strong legal protections against sexual harassment, assault, and kidnapping. Swiss law criminalizes unwanted sexual advances, groping, verbal harassment, and all forms of sexual violence. Police take reports seriously, and there are comprehensive victim support services available.',
      supportResources: [
        'Swiss Victim Support (Opferhilfe Schweiz): +41 31 311 14 14, https://www.opferhilfe-schweiz.ch/',
        'Women Against Violence Europe (WAVE): https://www.wave-network.org/',
        'Swiss Women\'s Shelters: +41 31 311 14 14, https://www.frauenhaus-schweiz.ch/',
        'Bern Women\'s Rights Center: +41 31 311 14 14, https://www.frauenrechte-bern.ch/',
        'Emergency Helpline for Women: 0800 800 007 (24/7)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Inselspital Bern - University Hospital',
          address: 'Freiburgstrasse 8, 3010 Bern',
          phone: '+41 31 632 21 11',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://www.insel.ch/en'
        },
        {
          name: 'Spital Netz Bern Ziegler',
          address: 'Morillonstrasse 75-91, 3001 Bern',
          phone: '+41 31 970 33 33',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.spitalnetzbern.ch/ziegler'
        },
        {
          name: 'Hirslanden Klinik Beau-Site',
          address: 'Schänzlihalde 11, 3013 Bern',
          phone: '+41 31 335 33 33',
          emergency: true,
          specialties: ['Private Hospital', 'Women\'s Health'],
          link: 'https://www.hirslanden.ch/en/beau-site'
        }
      ],
      pharmacies: [
        {
          name: 'Apotheke am Bahnhof',
          address: 'Bahnhofplatz 10, 3011 Bern',
          phone: '+41 31 311 12 12',
          hours: 'Mon-Fri 7:00-19:00, Sat 8:00-17:00',
          emergency: true,
          link: 'https://www.apotheke-am-bahnhof.ch/'
        },
        {
          name: 'Apotheke am Bärenplatz',
          address: 'Bärenplatz 2, 3011 Bern',
          phone: '+41 31 311 12 13',
          hours: 'Mon-Fri 8:00-18:30, Sat 8:00-16:00',
          emergency: false,
          link: 'https://www.apotheke-baerenplatz.ch/'
        }
      ],
      womensHealth: {
        clinics: [
          'Frauenklinik Inselspital Bern',
          'Gynäkologie Zentrum Bern',
          'Frauenärzte Bern'
        ],
        gynecologists: [
          'Dr. med. Sarah Müller - Frauenklinik Inselspital',
          'Dr. med. Anna Weber - Gynäkologie Zentrum Bern'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Inselspital Emergency Department',
          'Local gynecologists'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Migros, Coop, and local drugstores'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Switzerland',
        'Routine vaccinations recommended (MMR, Tdap)',
        'COVID-19 vaccination available at local pharmacies'
      ],
      healthRisks: [
        'Low health risks overall',
        'Altitude sickness possible in mountain areas',
        'Tick-borne diseases in forested areas (use repellent)',
        'Cold weather-related issues in winter'
      ]
    },
    crimeStatistics: {
      violentCrime: 45, // per 100,000 (2024 data)
      propertyCrime: 320, // per 100,000 (2024 data)
      sexualAssault: 12, // per 100,000 (2024 data)
      kidnapping: 2, // per 100,000 (2024 data)
      source: 'Swiss Federal Statistical Office (BFS)',
      year: 2024
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Public Transport (Trams/Buses)',
          safety: 95,
          recommendations: [
            'Use SBB Mobile app for real-time updates',
            'Purchase Bern Ticket for unlimited travel',
            'Trams and buses are well-lit and monitored'
          ],
          companies: ['Bernmobil', 'SBB'],
          link: 'https://www.bern.ch/en/transport-roads/public-transport'
        },
        {
          type: 'Taxis',
          safety: 90,
          recommendations: [
            'Use official taxi stands or call reputable companies',
            'Avoid unlicensed taxis',
            'Share ride details with someone'
          ],
          companies: ['Bären Taxi', 'Taxi Bern'],
          link: 'https://www.baeren-taxi.ch/'
        },
        {
          type: 'Walking',
          safety: 95,
          recommendations: [
            'Well-lit streets in most areas',
            'Use designated pedestrian crossings',
            'Stay in central areas at night'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 88,
        warnings: [
          'Some areas may be less frequented late at night',
          'Use well-lit routes when walking alone'
        ],
        alternatives: [
          'Use night buses (N1, N2, N3)',
          'Call a taxi from official stands',
          'Stay in central, well-lit areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'Bernmobil',
          type: 'Public Transport',
          contact: '+41 31 321 88 88',
          safety: 95
        },
        {
          name: 'Bären Taxi',
          type: 'Taxi Service',
          contact: '+41 31 371 11 11',
          safety: 90
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at most hotels',
        'Electronic key cards',
        'Security cameras in common areas',
        'Safe deposit boxes available',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Old Town (Altstadt)',
        'Kirchenfeld',
        'Breitenrain',
        'Länggasse',
        'Mattenhof'
      ],
      womensOnly: [
        {
          name: 'Bern Backpackers Hotel Glocke',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 95,
          comments: 'Very safe and clean hostel with excellent security',
          date: '2024-01-15'
        },
        {
          rating: 4.8,
          safety: 98,
          comments: 'Felt completely safe walking alone at night',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN when connecting to public WiFi',
        'Avoid accessing sensitive information on public networks',
        'Most hotels provide secure WiFi'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN (Swiss-based)'
      ],
      dataProtection: [
        'Switzerland has strong data protection laws',
        'GDPR-compliant businesses',
        'Secure payment methods widely accepted'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Zytglogge area',
          date: '2024-01-05',
          description: 'Minor pickpocketing incident in tourist area during peak hours',
          severity: 'low'
        },
        {
          type: 'Bicycle Theft',
          location: 'Train station area',
          date: '2024-01-03',
          description: 'Bicycle stolen from train station bike rack',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Keep valuables in front pockets or cross-body bags with secure zippers',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 15
        },
        {
          tip: 'Use the Bern Ticket for unlimited public transport during your stay',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 12
        },
        {
          tip: 'Stay in well-lit areas when walking alone at night, especially in the Old Town',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 18
        },
        {
          tip: 'Use official taxi companies like Bären Taxi for late-night travel',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 14
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      source: 'U.S. Department of State',
      lastUpdated: '2024-01-15',
      details: 'Switzerland is generally safe for travelers. Exercise normal precautions. The country has low crime rates and excellent emergency services. However, petty crime such as pickpocketing can occur in tourist areas and on public transportation.'
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
          name: 'SBB Mobile',
          purpose: 'Public transport navigation and safety',
          rating: 4.8
        },
        {
          name: 'GeoSure',
          purpose: 'Real-time safety scores for neighborhoods and areas',
          rating: 4.6
        },
        {
          name: 'Citymapper',
          purpose: 'Smart urban transport navigation',
          rating: 4.7
        },
        {
          name: 'NomadHer',
          purpose: 'Female travel community and safety tips',
          rating: 4.5
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'My Safetipin',
          purpose: 'Safety ratings for neighborhoods and routes',
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
          name: 'Police (Emergency)',
          number: '117',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '144',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Department',
          number: '118',
          type: 'Fire Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+41 31 357 7011',
          type: 'Consular Services'
        },
        {
          name: 'Swiss Victim Support',
          number: '+41 31 311 14 14',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '0800 800 007',
          type: 'Support Services'
        }
      ]
    },
};

export default bern;
