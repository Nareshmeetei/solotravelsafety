import { Destination } from './types';

const auckland: Destination = {
    city: 'Auckland',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 6.8,
    nightSafety: 5.2,
    publicTransit: 7.1,
    walkingAlone: 6.5,
    tags: ['warning-flags', 'moderate-risk'],
    bgColor: 'bg-yellow-50',
    reviewCount: 150,
    lastUpdated: '1 day ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 5.2,
        context: 'Auckland has become significantly less safe at night in recent years, especially for solo women travelers. The CBD, particularly around Queen Street, Karangahape Road (K Road), and Quay Street, has seen increased incidents of harassment, assault, and violent crime after dark. South Auckland areas (Otara, Manurewa, Mangere) have higher crime rates and should be avoided at night. While some neighborhoods like Ponsonby and Devonport remain relatively safe, incidents of sexual harassment and assault have increased citywide. Women should avoid walking alone after dark and use registered taxis or rideshares.'
      },
      publicTransit: {
        score: 7.1,
        context: 'Auckland\'s public transport (buses, trains, ferries) is generally safe during daylight hours but becomes riskier at night. Security cameras are present at major stations, but harassment can occur, especially on night buses and in less crowded carriages. The AT Mobile app provides real-time updates and emergency contact options. Women should avoid empty carriages late at night and sit near the driver or other passengers if feeling uncomfortable. Recent reports indicate increased incidents of harassment on public transport, particularly after dark.'
      },
      walkingAlone: {
        score: 6.5,
        context: 'Walking alone in Auckland is moderately safe during the day in most neighborhoods, but safety has declined significantly in recent years. Central Auckland, Ponsonby, and Parnell remain safer options, but incidents of harassment and assault have increased. At night, walking alone is not recommended, especially in the CBD, South Auckland, and around nightlife districts. Trust your instincts—if an area feels unsafe, leave immediately and seek help. Emergency services respond quickly, but prevention is crucial.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Ponsonby',
          description: 'Trendy, vibrant neighborhood that remains one of Auckland\'s safer areas. Strong community policing and active neighborhood watch groups. While incidents of harassment and assault are lower than other areas, caution is still advised late at night around bars and clubs. The area is well-lit and busy into the evening, making it relatively safe for solo women during daylight hours.'
        },
        {
          name: 'Devonport',
          description: 'Historic, seaside suburb with a strong community feel and lower crime rates compared to other areas. Police presence is visible, and the area is popular with families and tourists. Nighttime walks are generally safer here than in other parts of Auckland, but as always, avoid deserted areas and stay alert.'
        },
        {
          name: 'Mount Eden',
          description: 'Leafy, residential area popular with families and young professionals. Crime rates have increased in recent years but remain lower than many other neighborhoods. Community safety partnerships and good lighting make it relatively safe for solo women during the day, though caution is advised near parks after dark.'
        },
        {
          name: 'Parnell',
          description: 'Upscale, historic area with private security and CCTV in commercial zones. Lower rates of violent crime compared to other areas, but incidents of harassment can still occur. Stick to main streets at night and avoid isolated parks. Generally safer for solo women travelers.'
        },
        {
          name: 'Takapuna',
          description: 'Beachside suburb with active beach patrols and visible police presence. Popular with locals and tourists, with generally lower crime rates. Nightlife is relatively safe, but avoid the beach and dark alleys late at night. Better option for solo women travelers.'
        },
        {
          name: 'Grey Lynn',
          description: 'Creative, diverse neighborhood that has seen some improvement in safety through community initiatives and better lighting. Solo women report feeling moderately comfortable during the day, but stay alert at night as with all urban areas.'
        }
      ],
      caution: [
        'Auckland CBD (Central Business District) late at night: While busy and well-patrolled during the day, the CBD has become increasingly risky after dark, especially around Queen Street, Karangahape Road (K Road), and Quay Street. Incidents of harassment, assault, and theft are common here, particularly for solo women. Avoid walking alone late at night, especially near bars, clubs, and construction zones.',
        'South Auckland (Otara, Manurewa, Mangere): Higher rates of violent crime, gang activity, and property crime. While many residents are friendly, these areas are best avoided after dark, especially for solo travelers. Incidents of sexual harassment and assault are more frequent.',
        'Nightlife districts (K Road, parts of CBD, Fort Street): Increased risk of sexual harassment, assault, and petty crime late at night. Use official taxis or rideshares, and avoid walking alone after midnight. Recent reports indicate growing safety concerns in these areas.'
      ],
      avoid: [
        'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Auckland.',
        'Emergency housing zones and areas with visible gang activity (some parts of South Auckland and West Auckland).',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.',
        'Isolated areas around the waterfront and industrial zones after dark.'
      ]
    },
    accommodations: [
      {
        name: 'The Quadrant Hotel & Suites Auckland',
        type: 'hotel',
        features: ['Central location', '24/7 security', 'Solo traveler friendly'],
        rating: 4.3,
        notes: 'Good safety reputation, central location, and popular with solo women travelers. Security measures in place.',
        link: 'https://the-quadrant.aucklandtophotels.com/'
      },
      {
        name: 'Airedale Boutique Suites',
        type: 'hotel',
        features: ['CBD location', '24-hour reception', 'High safety ratings'],
        rating: 4.6,
        notes: 'In the heart of Auckland, highly rated for solo women safety. Good security measures.',
        link: 'https://scenic-hotel-auckland.aucklandcityhotels.net/'
      },
      {
        name: 'Haka Lodge Auckland City',
        type: 'hostel',
        features: ['Female-only dorms', 'Central', 'Secure access'],
        rating: 4.5,
        notes: 'Modern, safe, and social hostel with female-only dorms. Good for solo travelers.',
        link: 'https://hakalodges.com/auckland'
      },
      {
        name: 'Attic Backpackers',
        type: 'hostel',
        features: ['Central', 'Secure', 'Clean', 'Female-friendly'],
        rating: 4.4,
        notes: 'Popular hostel with good safety measures for solo women travelers.',
        link: 'https://www.atticbackpackers.co.nz/'
      },
      {
        name: 'YHA Auckland City',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Security cameras'],
        rating: 4.2,
        notes: 'Well-established hostel chain with good safety protocols and female-only dorms available.',
        link: 'https://www.yha.co.nz/hostels/north-island-hostels/auckland/auckland-city/'
      }
    ],
    alerts: [
      {
        title: 'Increased Crime Alert',
        description: 'Recent reports indicate rising crime rates in Auckland CBD and surrounding areas',
        location: 'CBD and South Auckland',
        reportCount: 45,
        severity: 'medium',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Auckland weather is changeable—layer up, carry a rain jacket, and wear comfortable shoes.
• In city areas, casual attire is fine, but cover up when visiting marae or religious sites.
• For nightlife, dress smart-casual, but avoid flashy jewelry and keep your bag zipped.
• Always carry a charged phone and emergency contacts.
• Consider carrying a personal safety alarm.`,
      firstTimers: `• Auckland has become less safe for solo women in recent years—stay alert, especially at night.
• Save emergency numbers (111 for police, fire, ambulance) and local support hotlines.
• Use official taxis or rideshares after dark—avoid walking alone.
• Avoid walking alone in deserted or poorly lit areas.
• Trust your instincts—if you feel unsafe, seek help in a shop or cafe immediately.
• Consider staying in safer neighborhoods like Ponsonby or Devonport.`,
      apps: [
        'AT Mobile',
        'Uber',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me'
      ],
      appLinks: [
        { name: 'AT Mobile', link: 'https://at.govt.nz/bus-train-ferry/', description: 'Public transport navigation' },
        { name: 'Uber', link: 'https://www.uber.com/nz/en/', description: 'Ride-sharing service' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features' }
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
          english: 'I need a doctor.',
          local: 'I need a doctor.',
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
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Casual and practical in most settings. Cover shoulders and knees when visiting marae or religious sites. Swimwear is only for beaches and pools. For nightlife, smart-casual is expected. Avoid flashy jewelry and keep valuables secure.',
      behaviorNorms: [
        'Be quiet and respectful on public transport.',
        'Respect personal space and avoid loud conversations in public.',
        'Remove shoes when entering homes or marae.',
        'Be punctual for appointments and social events.',
        'Greet with a smile or handshake; a hongi (nose press) is traditional on marae.',
        'Do not photograph people without permission, especially in cultural settings.',
        'Tipping is not expected but appreciated for excellent service.'
      ],
      perception: 'Solo female travelers are common in Auckland, but safety concerns have increased in recent years. Most locals are friendly and helpful, but catcalling and harassment can occur, especially at night in nightlife districts or deserted areas. Sexual harassment, assault, and kidnapping are more common than in previous years—always prioritize your safety, avoid risky areas after dark, and use official transport. If you experience harassment or feel unsafe, seek help immediately from police, local businesses, or call a support hotline.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '111',
      fire: '111',
      medical: '111',
      general: '111',
    },
    currency: {
      name: 'New Zealand Dollar',
      code: 'NZD',
      exchangeRate: {
      usd: 0.6024,
      eur: 0.5133,
      gbp: 0.4482
    },
      scamWarnings: [
        'New Zealand is highly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs (ANZ, ASB, Westpac, BNZ, TSB). Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
      ]
    },
    scamWarnings: [
      { 
        title: 'Pickpocketing and Theft', 
        description: 'Increasingly common in tourist areas and CBD, especially around Queen Street and Sky Tower', 
        severity: 'medium' 
      },
      { 
        title: 'Fake Taxi Drivers', 
        description: 'Some unlicensed taxis may overcharge or take unsafe routes. Always use official taxi stands or ride-sharing apps.', 
        severity: 'medium' 
      },
      { 
        title: 'ATM Skimming', 
        description: 'Use ATMs at banks rather than standalone machines, especially at night.', 
        severity: 'low' 
      }
    ],
    languages: [
      'English',
      'Māori',
      'Samoan',
      'Mandarin',
      'Hindi'
    ],
    daytimeSafetyPercent: 68.8,
    nighttimeSafetyPercent: 38.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Auckland',
    redFlags: [
      { label: 'Theft & Property Crime', frequency: 'Most common', icon: 'Hand' },
      { label: 'Violent Assaults', frequency: 'Frequent', icon: 'PocketKnife' },
      { label: 'Drug-Related Incidents', frequency: 'Frequent', icon: 'Syringe' },
      { label: 'Gang Activity & Ram Raids', frequency: 'Occasional', icon: 'Users' },
    ],
    culturalDos: [
      'Respect Māori culture.',
      'Dress casual; cover up at marae.',
      'Remove shoes in homes/marae.',
      'Be friendly and on time.',
      'Protect nature.'
    ],
    culturalDonts: [
      "Don't drink alcohol in public.",
      "Don't ignore Māori customs.",
      "Don't leave valuables in cars.",
      "Don't jaywalk; use crosswalks.",
      "Don't skip sunscreen."
    ],
    womensConfidenceScore: {
      score: 49.9,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Auckland"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 70, source: 'Be My Travel Muse 2025', sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-new-zealand/' },
      { label: 'Nightlife', confidence: 45, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Auckland' },
      { label: 'Public Transport', confidence: 65, source: 'Solo Female Traveler Network 2025', sourceUrl: 'https://thesolofemaletravelernetwork.com/best-places-to-travel-in-2025-for-solo-female-travelers/' },
      { label: 'Dining Alone', confidence: 75, source: 'Wayfaring Kiwi 2025', sourceUrl: 'https://www.wayfaringkiwi.com/solo-travel-new-zealand/' }
    ],
    // Enhanced safety fields for solo women
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: [
        'Nightlife areas (Karangahape Road, CBD clubs) late at night',
        'Public transport during off-peak hours',
        'Deserted streets in South Auckland after dark',
        'CBD areas around Queen Street and Sky Tower'
      ],
      reportingRate: 55,
      legalProtection: 'New Zealand law criminalizes sexual harassment, assault, and kidnapping. Police take reports seriously, and there are strong protections for victims. Emergency services are accessible and responsive.',
      supportResources: [
        'Women\'s Refuge Crisis Line: 0800 733 843, https://womensrefuge.org.nz/',
        'Victim Support NZ: 0800 842 846, https://www.victimsupport.org.nz/',
        'HELP Auckland (sexual assault support): 09 623 1700, https://www.helpauckland.org.nz/',
        'Shine (domestic abuse support): 0508 744 633, https://www.2shine.org.nz/'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Auckland City Hospital',
          address: '2 Park Road, Grafton, Auckland 1023',
          phone: '+64 9 367 0000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma'],
          link: 'https://www.adhb.health.nz/'
        },
        {
          name: 'Middlemore Hospital',
          address: 'Hospital Road, Otahuhu, Auckland 2025',
          phone: '+64 9 276 0000',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.countiesmanukau.health.nz/'
        },
        {
          name: 'North Shore Hospital',
          address: '124 Shakespeare Road, Takapuna, Auckland 0620',
          phone: '+64 9 486 1490',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Surgery'],
          link: 'https://www.waitematadhb.govt.nz/'
        }
      ],
      pharmacies: [
        {
          name: 'Unichem Queen Street Pharmacy',
          address: '250 Queen Street, Auckland 1010',
          phone: '+64 9 377 4477',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.unichem.co.nz/'
        },
        {
          name: 'Life Pharmacy Ponsonby',
          address: '254 Ponsonby Road, Ponsonby, Auckland 1011',
          phone: '+64 9 360 1234',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.lifepharmacy.co.nz/'
        },
        {
          name: 'Unichem Takapuna Pharmacy',
          address: '445 Lake Road, Takapuna, Auckland 0622',
          phone: '+64 9 489 5678',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.unichem.co.nz/'
        }
      ],
      womensHealth: {
        clinics: [
          'Family Planning Auckland: 0800 372 546, https://www.familyplanning.org.nz/',
          'Auckland Sexual Health Service: 0800 739 432, https://www.healthpoint.co.nz/public/sexual-health/auckland-sexual-health-service/'
        ],
        gynecologists: [
          'Dr. Simon McDowell - Auckland Gynaecology Group: +64 9 520 9361',
          'Dr. Sarah Wakeman - Auckland Gynaecology Group: +64 9 520 9361'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B and other options available at Unichem and Life Pharmacy',
          'Emergency contraception available at Family Planning clinics'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Free sanitary products available at some public restrooms',
          'Tampons and pads widely available'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for New Zealand',
        'COVID-19 vaccination recommended',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Low risk of tropical diseases',
        'Seasonal flu during winter',
        'Sunburn and UV exposure risk',
        'Occasional outbreaks of measles or mumps'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Wellington (serves Auckland)',
        address: '29 Fitzherbert Terrace, Thorndon, Wellington 6011',
        phone: '+64 4 462 6000',
        email: 'WellingtonACS@state.gov',
        emergency: '+64 4 462 6000',
        link: 'https://nz.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.gov.uk/world/organisations/british-embassy-wellington'
        },
        {
          name: 'Embassy of Germany in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://nz.diplo.de/'
        },
        {
          name: 'Embassy of France in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://nz.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.exteriores.gob.es/embajadas/wellington'
        },
        {
          name: 'Australian Embassy Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://nz.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.canadainternational.gc.ca/nz-new-zealand/'
        },
        {
          name: 'Embassy of the Netherlands in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/new-zealand'
        },
        {
          name: 'Embassy of Denmark in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://nz.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.eda.admin.ch/wellington'
        },
        {
          name: 'Embassy of India in Auckland',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.indianembassynz.gov.in/'
        }
      ],
      womensRights: [
        'Strong legal protections for women under New Zealand law',
        'Equal pay and employment rights guaranteed',
        'Protection against discrimination based on gender',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and stalking',
        'Women\'s Refuge: https://womensrefuge.org.nz/'
      ],
      legalSupport: [
        'Community Law Auckland: 0800 529 482, https://communitylaw.org.nz/our-law-centres/auckland/',
        'Victim Support NZ: 0800 842 846, https://www.victimsupport.org.nz/',
        'Free legal advice available for visitors',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police at 111 (emergency) or visit any police station',
        'File police report in person or online: https://www.police.govt.nz/advice/personal-community/keeping-safe/visitors-safety-guide',
        'Request English-speaking officer if needed',
        'Keep copy of police report for insurance/embassy',
        'Contact embassy for serious crimes or legal assistance'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: ['Use the official app for booking.'],
          companies: ['Uber'],
          link: 'https://www.uber.com/nz/en/ride/'
        },
        {
          type: 'Ola',
          safety: 8.3,
          recommendations: ['Use the official app for booking.'],
          companies: ['Ola'],
          link: 'https://www.olacabs.com/'
        },
        {
          type: 'AT (Auckland Transport)',
          safety: 7.5,
          recommendations: ['Use the AT Mobile app for tickets and schedules.'],
          companies: ['AT'],
          link: 'https://at.govt.nz/'
        },
        {
          type: 'Official Taxis',
          safety: 8.0,
          recommendations: ['Use official taxi stands or book through apps.'],
          companies: ['Auckland Co-op Taxis', 'Corporate Cabs'],
          link: 'https://www.aucklandcooptaxis.co.nz/'
        }
      ],
      nightTravel: {
        safety: 5.5,
        warnings: [
          'Avoid public transport after midnight',
          'Be cautious in CBD and South Auckland areas',
          'Use well-lit main streets',
          'Consider taking a taxi instead of walking alone'
        ],
        alternatives: [
          'Night buses run limited routes until 1 AM',
          'Uber and Ola available 24/7',
          'Official taxi stands at major squares',
          'Stay in well-lit, populated areas'
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
          name: 'Ola',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.3
        },
        {
          name: 'Auckland Co-op Taxis',
          type: 'Traditional Taxi',
          contact: '+64 9 300 3000',
          safety: 8.0
        },
        {
          name: 'AT',
          type: 'Public Transport',
          contact: '+64 9 366 6400',
          safety: 7.5
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service',
        'Electronic key card access',
        'CCTV surveillance',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Ponsonby',
        'Devonport',
        'Mount Eden',
        'Parnell',
        'Takapuna',
        'Grey Lynn'
      ],
      womensOnly: [
        {
          name: 'Haka Lodge Auckland City',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 security', 'Central location', 'Safe neighborhood'],
          rating: 4.5
        },
        {
          name: 'YHA Auckland City',
          type: 'Hostel',
          features: ['Female-only dorms', 'Modern security', 'Safe area', '24/7 staff'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.3,
          safety: 7.5,
          comments: 'Felt moderately safe as a solo female traveler. Staff was helpful but area had some safety concerns.',
          date: '2025-01-15'
        },
        {
          rating: 4.1,
          safety: 7.0,
          comments: 'Good security measures but neighborhood safety has declined in recent years.',
          date: '2025-01-10'
        },
        {
          rating: 4.2,
          safety: 7.2,
          comments: 'Clean and safe accommodation, but be cautious when walking in the area after dark.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use hotel/accommodation WiFi when possible',
        'Avoid public WiFi for sensitive transactions',
        'Use VPN when connecting to public networks',
        'Enable two-factor authentication on all accounts',
        'Keep devices updated with latest security patches'
      ],
      digitalScams: [
        'Fake booking websites - always use official sites',
        'Phishing emails claiming to be from hotels',
        'Fake police emails requesting personal information',
        'Social media scams offering free accommodation',
        'Fake taxi booking apps'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing banking or personal accounts'
      ],
      dataProtection: [
        'New Zealand has strong data protection laws',
        'Avoid sharing personal information with strangers',
        'Use secure payment methods (credit cards over cash)',
        'Keep copies of important documents in secure cloud storage',
        'Enable device tracking and remote wipe capabilities'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Theft and Assault',
          location: 'CBD Queen Street',
          date: '2025-01-20',
          description: 'Multiple reports of theft and assault in CBD area',
          severity: 'medium'
        },
        {
          type: 'Ram Raid',
          location: 'Various locations',
          date: '2025-01-18',
          description: 'Increase in ram raids targeting retail stores',
          severity: 'medium'
        },
        {
          type: 'Harassment',
          location: 'Public Transport',
          date: '2025-01-15',
          description: 'Reports of harassment on night buses and trains',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Avoid walking alone in CBD after dark, especially around Queen Street and K Road',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 67
        },
        {
          tip: 'Use Uber or official taxis instead of public transport at night',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 54
        },
        {
          tip: 'Stay in safer neighborhoods like Ponsonby or Devonport',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 48
        },
        {
          tip: 'Keep valuables secure and avoid displaying expensive items',
          author: 'Local Guide',
          date: '2025-01-19',
          upvotes: 72
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'New Zealand is generally safe for travelers, but crime has increased in recent years, particularly in Auckland. Exercise increased caution, especially at night and in certain areas. Be aware of petty crime in tourist areas and use common sense safety measures.',
      reason: 'Increased crime rates, particularly in Auckland CBD and South Auckland.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/new-zealand-travel-advisory.html',
      soloTravelerAdvice: [
        'Auckland is very safe for solo female travelers - among world\'s safest cities',
        'Stay in CBD or Ponsonby for best access to hostels and activities', 
        'Use public transport after dark (safer than walking K Road area)',
        'AT HOP card essential - $9.50 unlimited daily, works on all transport',
        'Join hostel activities or take ferry day trips to meet people'
      ]
    },
    crimeStatistics: {
      violentCrime: 12.8, // per 100,000 (2023 data)
      propertyCrime: 3456, // per 100,000 (2023 data)
      sexualAssault: 18.2, // per 100,000 (2023 data)
      kidnapping: 0.8, // per 100,000 (2023 data)
      source: 'New Zealand Police Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Portable door lock',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'AT Mobile',
          purpose: 'Public transport navigation and safety',
          rating: 4.3
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community & safety tips',
          rating: 4.5
        },
        {
          name: 'My Safetipin',
          purpose: 'Community safety ratings for areas',
          rating: 4.2
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
          number: '111',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Police (Non-emergency)',
          number: '105',
          type: 'Police Information'
        },
        {
          name: 'U.S. Embassy',
          number: '+64 4 462 6000',
          type: 'Consular Services'
        },
        {
          name: 'Women\'s Refuge',
          number: '0800 733 843',
          type: 'Support Services'
        },
        {
          name: 'Victim Support',
          number: '0800 842 846',
          type: 'Support Services'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Stay Alert in CBD and Avoid Walking Alone at Night',
        description: 'Auckland\'s CBD has become less safe in recent years, especially after dark. Avoid walking alone around Queen Street, Karangahape Road, and Quay Street. Use official taxis or rideshares, and stay in well-lit, populated areas.',
        severity: 'medium',
        sourceName: 'New Zealand Police',
        sourceUrl: 'https://www.police.govt.nz/advice/personal-community/keeping-safe/visitors-safety-guide'
      },
      {
        title: 'Choose Accommodation in Safer Neighborhoods',
        description: 'Stay in safer areas like Ponsonby, Devonport, or Mount Eden rather than CBD or South Auckland. These neighborhoods have lower crime rates and are more suitable for solo women travelers.',
        severity: 'low',
        sourceName: 'Solo Female Traveler Network',
        sourceUrl: 'https://thesolofemaletravelernetwork.com/best-places-to-travel-in-2025-for-solo-female-travelers/'
      },
      {
        title: 'Use Public Transport Cautiously and Keep Emergency Numbers Handy',
        description: 'Auckland\'s public transport is generally safe during the day but becomes riskier at night. Avoid empty carriages, sit near the driver, and save emergency numbers (111) in your phone.',
        severity: 'medium',
        sourceName: 'Auckland Transport',
        sourceUrl: 'https://at.govt.nz/bus-train-ferry/'
      },
      {
        title: 'Be Aware of Increasing Crime Rates and Trust Your Instincts',
        description: 'Crime rates in Auckland have increased in recent years. Trust your instincts—if an area feels unsafe, leave immediately and seek help. Stay alert and avoid isolated areas.',
        severity: 'medium',
        sourceName: 'New Zealand Government',
        sourceUrl: 'https://www.newzealand.com/int/feature/health-and-safety/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$65 - $95 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Auckland is expensive, and spending more often means safer, central neighborhoods and better security.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$18-25',
          safetyNote: 'Best for safety on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$45-70',
          safetyNote: 'Mixed reviews - check for well-lit areas & verified listings',
          safetyLevel: 'medium'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$60+',
          safetyNote: 'Safer with reviewed hosts & 24/7 access',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$3-8/day',
          safetyDescription: 'Safe during daytime. Can get risky at night.',
          safetyLevel: 'medium'
        },
        {
          method: 'Rideshare (Uber/Ola)',
          cost: '$12-20/ride',
          safetyDescription: 'Most women report feeling safe, especially at night.',
          safetyLevel: 'high'
        },
        {
          method: 'Local Buses',
          cost: '$2-5',
          safetyDescription: 'Cheap but can be confusing. Avoid at night.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe during the day | Avoid after dark',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Auckland is expensive - budget accommodation often means shared spaces with limited security',
        'Central CBD hotels offer better safety but cost $150+ per night',
        'Public transport is limited at night - budget for rideshares after dark',
        'South Auckland areas are cheaper but have higher crime rates - prioritize safety over savings',
        'Hostels in Ponsonby and Parnell are safer but more expensive than CBD options'
      ]
    }
  };

export default auckland;
