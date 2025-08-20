import { Destination } from './types';

const singapore: Destination = {
    id: 'singapore-singapore',
    city: 'Singapore',
    country: 'Singapore',
    continent: 'Asia',
    countryCode: 'sg',
    overallScore: 8.9,
    nightSafety: 8.8,
    publicTransit: 9.5,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 200,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    description: 'Is Singapore safe for solo female travellers? Singapore is ranked #7 safest country globally for solo female travelers and is hands down one of the most stress-free destinations for women traveling alone. With exceptional safety infrastructure, strict laws, and strong cultural respect for women, Singapore offers world-class security combined with incredible diversity and experiences.',
    safetyBreakdown: {
      nightSafety: { score: 8.8, context: 'Extremely safe at night. Strict laws and high police presence.' },
      publicTransit: { score: 9.5, context: 'World-class public transport. MRT and buses are safe, clean, and punctual.' },
      walkingAlone: { score: 8.9, context: 'Very safe to walk alone. Harassment is extremely rare.' }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Marina Bay',
          description: 'Singapore\'s iconic waterfront district is extremely safe for solo female travelers. Well-lit, heavily monitored with CCTV, and bustling with tourists and locals. Home to Marina Bay Sands, Gardens by the Bay, and the Merlion. Perfect for first-time visitors with excellent safety infrastructure.'
        },
        {
          name: 'Orchard Road',
          description: 'Singapore\'s premier shopping district with world-class malls and hotels. Exceptionally safe with high security presence, well-lit streets, and constant foot traffic. Ideal area for solo female travelers with numerous accommodation options and easy transport access.'
        },
        {
          name: 'Clarke Quay',
          description: 'Historic riverside district known for dining and nightlife. Very safe even at night with good lighting, security patrols, and active nightlife scene. Popular with solo travelers and well-connected to public transport.'
        },
        {
          name: 'Chinatown',
          description: 'Cultural heritage district with temples, markets, and authentic food. Safe during day and evening hours with strong community presence. Well-patrolled area popular with tourists and families.'
        },
        {
          name: 'Little India',
          description: 'Vibrant ethnic district with colorful shops, spice markets, and Indian cuisine. Generally safe during day and early evening. Rich cultural experience with authentic atmosphere and friendly local community.'
        },
        {
          name: 'Bugis',
          description: 'Young and trendy district with shopping, street food, and convenient MRT access. Very safe with good lighting and active nightlife. Popular with solo travelers and backpackers.'
        }
      ],
      caution: [
        'Geylang late at night: Traditional red-light district that is generally safe but can be more crowded and rowdy late at night. Exercise standard precautions.',
        'Isolated areas of East Coast Park after midnight: While generally safe, avoid very isolated stretches late at night and stick to well-lit, populated areas.'
      ],
      avoid: [
        'None - Singapore is consistently ranked as one of the world\'s safest cities. All major districts are extremely safe for solo female travelers at any time.'
      ]
    },
    accommodations: [
      {
        name: 'The Pod Boutique Capsule Hotel',
        type: 'hostel',
        features: ['Female-only pods', 'Central Chinatown location', '24/7 security', 'Modern facilities'],
        rating: 9.0,
        notes: 'Top choice for solo female travelers. Modern capsule hotel with excellent safety features, female-only sections, and perfect location for exploring Singapore.',
        link: 'https://www.thepodboutiquehotel.com/'
      },
      {
        name: 'Marina Bay Sands',
        type: 'hotel',
        features: ['Luxury security', 'Iconic location', '24/7 concierge', 'World-class amenities'],
        rating: 9.2,
        notes: 'Premium option with exceptional security and service. Perfect for solo female travelers seeking luxury and safety in prime location.',
        link: 'https://www.marinabaysands.com/'
      },
      {
        name: 'Atelier Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Boutique design', 'Safe Bugis location', 'Social atmosphere'],
        rating: 8.8,
        notes: 'Highly recommended by experienced travelers. One of the few hostels that truly impresses with safety, design, and social opportunities for solo women.',
        link: 'https://www.atelierhostel.com/'
      },
      {
        name: 'YMCA One Orchard',
        type: 'hostel',
        features: ['Female floors', 'Orchard Road location', 'Swimming pool', 'Fitness center'],
        rating: 8.5,
        notes: 'Excellent budget option in prime Orchard location. Very safe with dedicated female floors and excellent amenities.',
        link: 'https://www.ymca.org.sg/'
      },
      {
        name: 'The Fullerton Hotel Singapore',
        type: 'hotel',
        features: ['Historic luxury', 'Central location', 'High security', 'Premium service'],
        rating: 9.1,
        notes: 'Iconic heritage hotel with exceptional safety standards. Perfect for solo female travelers wanting luxury with cultural significance.',
        link: 'https://www.fullertonhotels.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Light, breathable clothing for hot, humid weather year-round
• Dress modestly in temples and religious sites - cover shoulders and knees
• Comfortable walking shoes for exploring and MRT stations
• Carry a light jacket for air-conditioned spaces (can be very cold)
• Umbrella essential for sudden tropical downpours
• Sun protection recommended for outdoor activities`,
      firstTimers: `• Singapore is perfect for first-time solo female travelers - extremely safe and easy
• English is widely spoken as an official language
• Download SingPass for official services and CitySG for local information
• Get an EZ-Link card for seamless public transport
• Use Grab for reliable, safe transportation
• Follow strict local laws - Singapore has zero tolerance for rule-breaking`,
      apps: [
        'SMRT Connect',
        'Grab',
        'CitySG',
        'Visit Singapore',
        'Google Maps'
      ],
      appLinks: [
        { name: 'SMRT Connect', link: 'https://www.smrt.com.sg/', description: 'Official MRT and bus information app' },
        { name: 'Grab', link: 'https://www.grab.com/sg/', description: 'Reliable ride-hailing and food delivery' },
        { name: 'CitySG', link: 'https://www.citysg.sg/', description: 'Official Singapore government services app' },
        { name: 'Visit Singapore', link: 'https://www.visitsingapore.com/', description: 'Official tourism app with attractions and events' },
        { name: 'Google Maps', link: 'https://maps.google.com/', description: 'Navigation with real-time transport information' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English'
        },
        {
          english: 'Call the police!',
          local: '叫警察! (Jiào jǐngchá!)',
          localLanguage: 'Mandarin'
        },
        {
          english: 'I need help.',
          local: 'Saya perlukan bantuan.',
          localLanguage: 'Malay'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'எங்கே அருகிலுள்ள மருத்துவமனை? (Enge arukillulla maruttuvamanaai?)',
          localLanguage: 'Tamil'
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
      dressCode: 'Singapore is modern and tolerant with relaxed dress codes. Light, comfortable clothing is perfect for the tropical climate. Modest dress required in temples and religious sites (cover shoulders and knees). No specific restrictions for most areas, but avoid overly revealing clothing in conservative neighborhoods. Business casual appropriate for upscale dining and attractions.',
      behaviorNorms: [
        'Follow Singapore\'s strict laws - littering, jaywalking, and public disturbances have heavy fines.',
        'Keep voices quiet on public transport - no phone calls or loud conversations.',
        'Respect personal space and queue properly - Singaporeans value orderly behavior.',
        'Remove shoes when entering homes, temples, and some traditional establishments.',
        'Be punctual for appointments and social events - Singaporeans value efficiency.',
        'No eating or drinking on MRT trains (strictly enforced).',
        'Dispose of chewing gum properly - sales are restricted.',
        'Be respectful of Singapore\'s multicultural society and religious diversity.',
        'Tipping is not expected but appreciated for exceptional service.',
        'Use polite language and avoid public displays of affection in conservative areas.'
      ],
      perception: 'Solo female travelers are extremely common and completely accepted in Singapore. The multicultural society is very welcoming to independent women travelers. Singapore\'s progressive culture, combined with strict safety laws, creates an environment where solo women feel completely comfortable. Harassment is extremely rare due to strong legal enforcement and cultural norms that respect women\'s independence.'
    },
    bestTimeToVisit: {
      safestMonths: ['February-April', 'July-September'],
      events: 'Safe year-round. Avoid haze season (September-October).'
    },
    emergencyInfo: {
      police: '999', fire: '995', medical: '995', general: '999'
    },
    currency: {
      name: 'Singapore Dollar', code: 'SGD', exchangeRate: {
      usd: 0.7813,
      eur: 0.6656,
      gbp: 0.5812
    }, scamWarnings: []
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Respect Local Laws and Customs',
        description: 'Singapore has strict laws on littering, jaywalking, and public behavior. Dress modestly in temples and avoid public displays of affection.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://blog.onevasco.com/safe-to-visit/singapore'
      },
      {
        title: 'Stay Hydrated and Protect Against Heat',
        description: 'Singapore is hot and humid year-round. Drink plenty of water, wear light clothing, and use sunscreen to avoid heat exhaustion.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://blog.onevasco.com/safe-to-visit/singapore'
      },
      {
        title: 'Use Public Transport and Licensed Taxis',
        description: 'The MRT and buses are safe and efficient. For taxis, use licensed companies or apps like Grab, and insist on using the meter.',
        severity: 'low',
        sourceName: 'ForeverVacation',
        sourceUrl: 'https://forevervacation.com/the-vacationer/is-singapore-safe-to-visit'
      },
      {
        title: 'Be Alert for Scams and Pickpocketing',
        description: 'Crime is rare, but be cautious of fake goods, overcharging taxis, and pickpocketing in crowded areas. Shop at reputable stores and keep valuables secure.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://blog.onevasco.com/safe-to-visit/singapore'
      },
      {
        title: 'Enjoy Hawker Centres and Free Activities',
        description: 'Eat at hawker centres for affordable, safe, and delicious food. Take advantage of free attractions like Gardens by the Bay and the waterfront promenade.',
        severity: 'low',
        sourceName: 'Jou Jou Travels',
        sourceUrl: 'https://joujoutravels.com/solo-travel-in-singapore/'
      }
    ],
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
    daytimeSafetyPercent: 92.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 89.0, // Source: Numbeo 2025, Travel Ladies 2025
    // Red flags based on Numbeo 2025, OneVasco, and ForeverVacation
    // Sources:
    // https://www.numbeo.com/crime/in/Singapore
    // https://blog.onevasco.com/safe-to-visit/singapore
    // https://forevervacation.com/the-vacationer/is-singapore-safe-to-visit
    redFlags: [
      {
        label: 'Pickpocketing in Crowded Tourist Areas',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Taxi Overcharging/Unlicensed Taxis',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Fake Goods & Tourist Scams',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Heat Exhaustion & Dehydration',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
    ],
  culturalSensitivity: {
    culturalDos: [
      'Dress modestly in temples and religious sites.',
      'Respect local laws and follow public signs.',
      'Queue patiently and wait your turn.',
      'Use quiet voices in public and on transport.',
      'Dispose of litter properly and recycle when possible.'
    ],
    culturalDonts: [
      "Don't eat or drink on public transport.",
      "Don't show public displays of affection in conservative areas.",
      "Don't touch someone\'s head or point with your feet.",
      "Don't bring durians into hotels or public transport.",
      "Don't discuss race, religion, or politics openly."
    ]
  },
    // Add Women’s Confidence Score (Numbeo 2025, Forbes, SCMP)
    womensConfidenceScore: {
      score: 92.5,
      source: 'Travel Ladies 2025',
      sourceUrl: 'https://travelladies.app/safety/singapore'
    },
    // Add Confidence by Activity (2025, aggregated from Jou Jou Travels, Cat is Out of the Office, and government data)
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 99,
        source: 'Solo Female Travelers Club 2025',
        sourceUrl: 'https://www.solofemaletravelers.club/solo-female-travel-safety-singapore-sg/'
      },
      {
        label: "Nightlife",
        confidence: 95,
        source: 'Girl on a Zebra 2025',
        sourceUrl: 'https://girlonazebra.com/solo-travel-in-singapore/'
      },
      {
        label: "Public Transport",
        confidence: 99,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/singapore'
      },
      {
        label: "Dining Alone",
        confidence: 98,
        source: 'The Best Singapore 2025',
        sourceUrl: 'https://www.thebestsingapore.com/question/is-singapore-safe-for-solo-female-travellers/'
      }
    ],
    sexualHarassmentData: {
      prevalence: 'very-low',
      commonLocations: ['Geylang district at night', 'Crowded public events', 'Online platforms (dating apps)'],
      reportingRate: 85,
      legalProtection: 'Extremely strong legal framework. Singapore has strict anti-harassment laws with severe penalties. Zero tolerance policy with immediate police response. Protection of Harassment Act provides comprehensive coverage.',
      supportResources: [
        'Emergency Services: 999 (Police)',
        'Sexual Assault Care Centre (SACC): +65 6779 0282',
        'AWARE Women\'s Helpline: +65 1800 777 5555',
        'Samaritans of Singapore: +65 1800 221 4444',
        'U.S. Embassy Singapore: +65 6476 9100'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Singapore General Hospital',
          address: 'Outram Road, Singapore 169608',
          phone: '+65 6222 3322',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Services'],
          link: 'https://www.sgh.com.sg/'
        },
        {
          name: 'Raffles Hospital',
          address: '585 North Bridge Road, Singapore 188770',
          phone: '+65 6311 1111',
          emergency: true,
          specialties: ['Emergency Care', 'International Patients', 'Women\'s Health'],
          link: 'https://www.raffleshospital.com/'
        },
        {
          name: 'Mount Elizabeth Hospital',
          address: '3 Mount Elizabeth, Singapore 228510',
          phone: '+65 6737 2666',
          emergency: true,
          specialties: ['Emergency Medicine', 'Gynecology', 'Premium Care'],
          link: 'https://www.mountelizabeth.com.sg/'
        }
      ],
      pharmacies: [
        {
          name: 'Guardian Pharmacy',
          address: 'Multiple locations island-wide',
          phone: '+65 6284 8141',
          hours: 'Daily 8:00-22:00 (varies by location)',
          emergency: false,
          link: 'https://www.guardian.com.sg/'
        },
        {
          name: 'Watsons Pharmacy',
          address: 'Multiple locations island-wide',
          phone: '+65 6225 4888',
          hours: 'Daily 8:00-22:00 (varies by location)',
          emergency: false,
          link: 'https://www.watsons.com.sg/'
        }
      ],
      womensHealth: {
        clinics: [
          'KK Women\'s and Children\'s Hospital: +65 6225 5554',
          'Mount Alvernia Women\'s Health Clinic: +65 6347 6688',
          'Raffles Women\'s Centre: +65 6311 2233'
        ],
        gynecologists: [
          'Dr. Tan at Raffles Women\'s Centre: +65 6311 2233',
          'Dr. Lim at Mount Elizabeth Women\'s Clinic: +65 6737 2666'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B and other options widely available',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available at all convenience stores (7-Eleven, Cheers)',
          'Comprehensive selection at pharmacies',
          'Free products available in some public restrooms'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Singapore',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Japanese Encephalitis if traveling to rural areas'
      ],
      healthRisks: [
        'Heat exhaustion and dehydration due to tropical climate',
        'Air pollution during haze season (June-October)',
        'Dengue fever risk (rare but monitor mosquito bites)',
        'Food poisoning from street food (choose busy, clean stalls)'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'MRT (Mass Rapid Transit)',
          safety: 9.8,
          recommendations: ['Most reliable and safe transport', 'CCTV monitoring', 'Emergency buttons'],
          companies: ['SMRT', 'SBS Transit'],
          link: 'https://www.smrt.com.sg/'
        },
        {
          type: 'Grab',
          safety: 9.5,
          recommendations: ['Official ride-hailing app', 'GPS tracking', 'Driver verification'],
          companies: ['Grab'],
          link: 'https://www.grab.com/sg/'
        },
        {
          type: 'Licensed Taxi',
          safety: 9.2,
          recommendations: ['Use ComfortDelGro or SMRT taxis', 'Metered rates', 'Professional drivers'],
          companies: ['ComfortDelGro', 'SMRT Taxis'],
          link: 'https://www.comfortdelgro.com/'
        },
        {
          type: 'Public Bus',
          safety: 9.4,
          recommendations: ['Safe and reliable', 'CCTV monitoring', 'Regular routes'],
          companies: ['SBS Transit', 'SMRT Buses'],
          link: 'https://www.sbstransit.com.sg/'
        }
      ],
      nightTravel: {
        safety: 9.2,
        warnings: [
          'Very safe for night travel throughout Singapore',
          'MRT operates until midnight (2 AM on weekends)',
          'Well-lit streets and high police presence',
          'Exercise standard precautions in Geylang area'
        ],
        alternatives: [
          'Grab available 24/7',
          'Night Rider bus services available',
          'Licensed taxis operate 24/7',
          'Very safe to walk in most areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'SMRT',
          type: 'Public Transport',
          contact: 'SMRT Connect app',
          safety: 9.8
        },
        {
          name: 'Grab',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.5
        },
        {
          name: 'ComfortDelGro',
          type: 'Licensed Taxi',
          contact: '+65 6552 1111',
          safety: 9.2
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service',
        'Electronic key card access',
        'CCTV surveillance throughout buildings',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors',
        'Professional security staff'
      ],
      safeNeighborhoods: [
        'Marina Bay (premium safety)',
        'Orchard Road (shopping district)',
        'Clarke Quay (nightlife with security)',
        'Chinatown (cultural area with patrols)',
        'Bugis (youth-friendly with good lighting)',
        'Little India (daytime safe, evening caution)'
      ],
      womensOnly: [
        {
          name: 'The Pod Boutique Capsule Hotel',
          type: 'Capsule Hotel',
          features: ['Female-only pods', 'High-tech security', 'Central location', '24/7 staff'],
          rating: 4.8
        },
        {
          name: 'YMCA One Orchard',
          type: 'Hostel',
          features: ['Female floors', 'Swimming pool', 'Fitness center', 'Prime location'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.9,
          safety: 9.8,
          comments: 'Singapore is incredibly safe. Felt completely secure as a solo female traveler throughout my stay.',
          date: '2025-01-15'
        },
        {
          rating: 4.8,
          safety: 9.7,
          comments: 'Best destination for first-time solo female travelers. Safety infrastructure is world-class.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Singapore has extensive free WiFi (Wireless@SG) in public areas',
        'High-quality, secure public WiFi infrastructure',
        'Safe to use for most activities',
        'VPN recommended for sensitive transactions'
      ],
      digitalScams: [
        'Romance scams on dating apps targeting foreigners',
        'Fake online shopping websites',
        'Phishing emails claiming to be from banks',
        'Fake accommodation booking sites'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Singapore',
        'NordVPN - reliable connection',
        'ProtonVPN - good for privacy'
      ],
      dataProtection: [
        'Strong data protection laws (Personal Data Protection Act)',
        'Safe to use digital payments and banking',
        'CCTV monitoring is extensive but regulated',
        'Keep copies of documents in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Haze from Indonesia',
          location: 'Island-wide',
          date: '2025-01-15',
          description: 'Air quality affected by seasonal haze - monitor PSI levels',
          severity: 'low'
        },
        {
          type: 'Tourist Scam',
          location: 'Orchard Road',
          date: '2025-01-10',
          description: 'Fake charity collectors approaching tourists - verify credentials',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use EZ-Link card for all public transport - much more convenient than cash',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 156
        },
        {
          tip: 'Download multiple apps - Grab, SMRT Connect, and Visit Singapore are essential',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 134
        },
        {
          tip: 'Hawker centers are incredibly safe and delicious - perfect for solo dining',
          author: 'Food Enthusiast',
          date: '2025-01-20',
          upvotes: 189
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Singapore is very safe for travelers. Exercise normal precautions and follow local laws.',
      reason: 'Minimal crime rates and excellent safety infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/singapore-travel-advisory.html',
      soloTravelerAdvice: [
        'Perfect destination for first-time solo female travelers',
        'World-class safety infrastructure and English-speaking environment',
        'Stay anywhere in central Singapore with confidence',
        'Follow strict local laws - heavy fines for violations',
        'Use official transport and accommodations for best experience'
      ]
    },
    crimeStatistics: {
      violentCrime: 0.2, // per 100,000 (2024 data - Singapore has extremely low violent crime)
      propertyCrime: 295, // per 100,000 (2024 data)
      sexualAssault: 1.3, // per 100,000 (2024 data - among world\'s lowest)
      kidnapping: 0.0, // per 100,000 (2024 data - virtually non-existent)
      source: 'Singapore Police Force Annual Report & Ministry of Home Affairs',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Portable phone charger (essential for apps)',
        'Umbrella for sudden tropical downpours',
        'Insect repellent for outdoor activities',
        'Light jacket for air-conditioned spaces',
        'Comfortable walking shoes',
        'Sunscreen for tropical sun'
      ],
      safetyApps: [
        {
          name: 'SGSecure',
          purpose: 'Official Singapore emergency and security app',
          rating: 4.7
        },
        {
          name: 'myENV',
          purpose: 'Weather, air quality, and environmental alerts',
          rating: 4.5
        },
        {
          name: 'OneService',
          purpose: 'Report issues and get help from government services',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '999',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Non-Emergency Police',
          number: '1800 255 0000',
          type: 'Police Information'
        },
        {
          name: 'Tourist Helpline',
          number: '+65 1800 736 2000',
          type: '24/7 Tourism Support'
        },
        {
          name: 'AWARE Women\'s Helpline',
          number: '+65 1800 777 5555',
          type: 'Support Services'
        },
        {
          name: 'U.S. Embassy',
          number: '+65 6476 9100',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$45 - $85 USD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level for solo travelers.',
        tip: 'Singapore is expensive but offers excellent value for safety and convenience. Mid-range budget provides premium comfort and security.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$25-40',
          safetyNote: 'Excellent safety standards with modern facilities',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$60-90',
          safetyNote: 'High safety standards with 24/7 staff and security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$100-200',
          safetyNote: 'Premium safety with concierge and full security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'MRT/Bus (EZ-Link card)',
          cost: '$1-3/ride',
          safetyDescription: 'World-class safety with CCTV monitoring and emergency systems.',
          safetyLevel: 'high'
        },
        {
          method: 'Grab',
          cost: '$5-15/ride',
          safetyDescription: 'Extremely safe with GPS tracking and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxi',
          cost: '$8-20/ride',
          safetyDescription: 'Very safe with professional drivers and regulated fares.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe with excellent lighting and low crime rates.',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Singapore offers premium safety at all budget levels',
        'Hawker centers provide safe, delicious, and affordable meals',
        'Public transport is efficient and extremely cost-effective',
        'Free attractions like Gardens by the Bay reduce costs',
        'Safety investment pays off in stress-free travel experience'
      ]
    },
  legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Singapore',
          address: '27 Napier Road, Singapore 258508',
          phone: '+65 6476 9100',
          link: 'https://sg.usembassy.gov/'
        },
        {
          name: 'British Embassy Singapore',
          address: '100 Tanglin Road, Singapore 247919',
          phone: '+65 6424 4200',
          link: 'https://www.gov.uk/world/organisations/british-embassy-singapore'
        },
        {
          name: 'German Embassy Singapore',
          address: '50 Raffles Place, #27-00 Singapore Land Tower, Singapore 048623',
          phone: '+65 6533 6002',
          link: 'https://singapur.diplo.de/'
        },
        {
          name: 'French Embassy Singapore',
          address: '101-103 Cluny Park Road, Singapore 259595',
          phone: '+65 6880 7800',
          link: 'https://sg.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Singapore',
          address: '7 Temasek Boulevard, #38-03A Suntec Tower One, Singapore 038987',
          phone: '+65 6732 9069',
          link: 'https://www.exteriores.gob.es/embajadas/singapur'
        },
        {
          name: 'Australian High Commission Singapore',
          address: '25 Napier Road, Singapore 258507',
          phone: '+65 6836 4100',
          link: 'https://singapore.embassy.gov.au/'
        },
        {
          name: 'Canadian High Commission Singapore',
          address: 'One George Street, #11-01, Singapore 049145',
          phone: '+65 6854 5900',
          link: 'https://www.canadainternational.gc.ca/singapore-singapour/'
        },
        {
          name: 'Netherlands Embassy Singapore',
          address: '541 Orchard Road, #13-01 Liat Towers, Singapore 238881',
          phone: '+65 6737 1155',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/singapore'
        },
        {
          name: 'Danish Embassy Singapore',
          address: '13 Nassim Road, Singapore 258374',
          phone: '+65 6779 3001',
          link: 'https://singapore.um.dk/'
        },
        {
          name: 'Swiss Embassy Singapore',
          address: '1 Swiss Club Link, Singapore 288162',
          phone: '+65 6468 5788',
          link: 'https://www.eda.admin.ch/singapore'
        },
        {
          name: 'Indian High Commission Singapore',
          address: '31 Grange Road, Singapore 239702',
          phone: '+65 6737 6777',
          link: 'https://www.hcisingapore.gov.in/'
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

export default singapore;
