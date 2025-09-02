import { Destination } from './types';

const auckland: Destination = {
    city: 'Auckland',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 6.1,
    nightSafety: 4.8,
    publicTransit: 6.8,
    walkingAlone: 6.2,
    tags: ['warning-flags', 'moderate-risk', 'crime-increase'],
    bgColor: 'bg-yellow-50',
    reviewCount: 150,
    lastUpdated: '1 day ago',
    harassmentRisk: 'moderate-high',
    safetyBreakdown: {
      nightSafety: {
        score: 4.8,
        context: 'Auckland\'s night safety has deteriorated significantly, with 2024 data showing a 33% increase in violent crime. The CBD, particularly Queen Street and K Road, has seen major increases in harassment, assault, and violent crime after dark. South Auckland areas should be avoided completely at night. Recent NZ Crime Survey shows 1 in 3 women experience sexual assault. Solo women should avoid walking alone after dark, use registered taxis/rideshares, and stay in well-lit, populated areas.'
      },
      publicTransit: {
        score: 6.8,
        context: 'Public transport safety has declined with increased harassment reports, especially on evening/night services. While daytime travel is generally safe with security cameras at major stations, incidents on night buses and empty carriages have increased. The AT Mobile app provides emergency contact options. Women should avoid empty carriages, sit near drivers/other passengers, and be extra vigilant during off-peak hours.'
      },
      walkingAlone: {
        score: 6.2,
        context: 'Daytime walking safety is moderate but declining. 2024 crime data shows significant increases across Auckland, with women aged 18-35 most at risk. While central areas like Ponsonby and Parnell remain relatively safer, all areas have seen increased incidents. Night walking is strongly discouraged. Trust instincts, avoid isolated areas, and seek immediate help if feeling unsafe. Emergency services (111) respond quickly.'
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
      clothing: `• Auckland weather is changeable—layer up, carry a rain jacket, and wear comfortable shoes
• In city areas, casual attire is fine, but cover up when visiting marae or religious sites
• For nightlife, dress smart-casual, but avoid flashy jewelry and keep your bag zipped
• Carry a small crossbody bag or secure backpack to deter pickpockets
• Dress warmly in winter (June-August) with layers for temperature changes`,
      firstTimers: `• Auckland has become less safe for solo women in recent years—stay alert, especially at night
• Save emergency numbers (111 for police, fire, ambulance) and local support hotlines
• Use official taxis or rideshares after dark—avoid walking alone
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop or cafe immediately`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'AT Mobile',
        'Emergency Plus',
        'AllTrails'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers with New Zealand safety insights', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response app with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety in Auckland', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Auckland-specific safety warnings', rating: 4.0 },
        { name: 'AT Mobile', link: 'https://at.govt.nz/bus-train-ferry/', description: 'Official Auckland Transport app with real-time bus, train, ferry info', rating: 4.2 },
        { name: 'Emergency Plus', link: 'https://emergencyplus.com.au/', description: 'Official Australian/NZ emergency app with GPS coordinates for 111 calls', rating: 4.6 },
        { name: 'AllTrails', link: 'https://www.alltrails.com/', description: 'Essential for safe hiking around Auckland - Waitakere Ranges, Rangitoto Island', rating: 4.7 }
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
    exchangeTips: [
      'Use ANZ, ASB, Westpac, or BNZ ATMs for best rates - most charge no foreign transaction fees',
      'Cards accepted almost everywhere - EFTPOS, Visa, and Mastercard widely used',
      'Carry small amounts of cash for farmers markets and some food trucks',
      'Avoid currency exchange at Auckland Airport - rates up to 10% worse than banks',
      'Banking hours: 9:30 AM-4:30 PM Monday-Friday, limited Saturday hours',
      'No need to declare amounts under NZ$10,000 when entering New Zealand',
      'Tipping culture: Not expected or required - round up for exceptional service only',
      'Many places are cashless - some vendors don\'t accept cash at all',
      'Use contactless payment (tap and go) for purchases under NZ$200'
    ],
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
      prevalence: 'moderate-high',
      commonLocations: [
        'CBD nightlife areas (Queen Street, K Road) after dark',
        'Public transport during evening/night hours',
        'South Auckland areas after dark',
        'Isolated areas around waterfront and parks at night'
      ],
      reportingRate: 32, // Based on 2024 NZCVS data showing significant underreporting
      legalProtection: 'Strong legal protections. NZ law criminalizes sexual harassment and assault. 2024 data shows 31.6% reporting rate (up from 6.5% in 2018). Police specialized units available.',
      supportResources: [
        'HELP Auckland 24/7 Crisis Line: 0800 623 1700',
        'Safe to Talk 24/7: 0800 044 334 or text 4334',
        'Counselling Services Centre: 09 277 9324',
        'Victim Support NZ: 0800 842 846',
        'Emergency Services: 111',
        'Shakti NZ (Asian/African/Middle Eastern women): 0800 742 584'
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
          name: 'U.S. Consulate General Auckland',
          address: '23 Customs Street East, Auckland 1010',
          phone: '+64 9 303 2724',
          link: 'https://nz.usembassy.gov/embassy-consulates/auckland/'
        },
        {
          name: 'British Consulate General Auckland',
          address: '151 Queen Street, Auckland 1010',
          phone: '+64 9 303 2973',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-auckland'
        },
        {
          name: 'German Consulate General Auckland',
          address: '52 Symonds Street, Auckland 1010',
          phone: '+64 9 377 3460',
          link: 'https://wellington.diplo.de/nz-en/vertretungen/gk-auckland'
        },
        {
          name: 'French Consulate General Auckland',
          address: '34-42 Manukau Road, Epsom, Auckland 1023',
          phone: '+64 9 630 0200',
          link: 'https://nz.ambafrance.org/Consulat-general-de-France-a-Auckland'
        },
        {
          name: 'Spanish Consulate General Auckland',
          address: 'Level 4, 120 Albert Street, Auckland 1010',
          phone: '+64 9 358 5170',
          link: 'https://www.exteriores.gob.es/consulados/auckland'
        },
        {
          name: 'Australian Consulate General Auckland',
          address: '188 Quay Street, Auckland 1010',
          phone: '+64 9 921 8800',
          link: 'https://newzealand.embassy.gov.au/aucklandconsulate'
        },
        {
          name: 'Canadian Consulate General Auckland',
          address: '48 Emily Place, Auckland 1010',
          phone: '+64 9 309 3690',
          link: 'https://www.canadainternational.gc.ca/new_zealand-nouvelle_zelande/offices-bureaux/auckland.aspx'
        },
        {
          name: 'Netherlands Consulate General Auckland',
          address: '57 Symonds Street, Auckland 1010',
          phone: '+64 9 379 5399',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/new-zealand/about-us/consulate-general-auckland'
        },
        {
          name: 'Danish Consulate General Auckland',
          address: '120 Albert Street, Auckland 1010',
          phone: '+64 9 379 9696',
          link: 'https://newzealand.um.dk/en/about-us/danish-missions-in-new-zealand/consulate-general-in-auckland'
        },
        {
          name: 'Swiss Consulate General Auckland',
          address: '22 Fanshawe Street, Auckland 1010',
          phone: '+64 9 377 3959',
          link: 'https://www.eda.admin.ch/auckland'
        },
        {
          name: 'Indian Consulate General Auckland',
          address: '180 Manukau Road, Epsom, Auckland 1023',
          phone: '+64 9 638 2345',
          link: 'https://www.cgiakl.co.nz/'
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
      violentCrime: 17.1, // per 100,000 (2024 data - 33% increase in Auckland)
      propertyCrime: 3890, // per 100,000 (2024 estimated based on overall crime trends)
      sexualAssault: 22.5, // per 100,000 (2024 data - significant increase in reporting)
      kidnapping: 0.9, // per 100,000 (2024 data)
      source: 'New Zealand Crime & Victims Survey 2024, NZ Police Statistics',
      year: 2024
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
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default auckland;
