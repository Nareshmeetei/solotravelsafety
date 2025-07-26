import { Destination } from './types';

const capetown: Destination = {
    city: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 3.2,
    nightSafety: 2.0,
    publicTransit: 3.5,
    walkingAlone: 2.8,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 250,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 2.0, 
        context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime, including armed robbery and assault. Use secure transport and stay in well-lit areas.' 
      },
      publicTransit: { 
        score: 3.5, 
        context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares. Avoid buses and trains, especially at night. MyCiti buses are safer but still require caution.' 
      },
      walkingAlone: { 
        score: 2.8, 
        context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment. Stay in groups and use secure transport.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Camps Bay',
          description: 'An affluent beachfront suburb with excellent security and low crime rates. Camps Bay is very safe with good lighting and police presence. Popular with tourists and expats.'
        },
        {
          name: 'Sea Point',
          description: 'A coastal suburb with good security and moderate crime rates. Sea Point is relatively safe with good lighting and community feel. Popular with families and tourists.'
        },
        {
          name: 'Green Point',
          description: 'A residential area with good security and moderate crime rates. Green Point is relatively safe with good lighting and police presence. Popular with expats and families.'
        },
        {
          name: 'V&A Waterfront',
          description: 'A secure, gated area with excellent security and very low crime rates. The V&A Waterfront is very safe with 24/7 security and police presence. Popular with tourists.'
        }
      ],
      caution: [
        'City Bowl during the day: While the central business district can be safe during business hours, crime rates increase after dark. Stay alert and avoid walking alone.',
        'Woodstock during the day: While gentrifying, this area still has moderate crime rates. Visit during the day and stay in well-lit areas.',
        'Observatory during the day: A student area that can be safe but requires caution. Avoid walking alone and stay alert.'
      ],
      avoid: [
        'Khayelitsha: Extremely dangerous area with very high crime rates. Avoid completely.',
        'Nyanga: Extremely dangerous area with very high crime rates. Avoid completely.',
        'CBD at night: Very dangerous after dark with high rates of violent crime.',
        'Township areas: All township areas are extremely dangerous and should be avoided.'
      ]
    },
    accommodations: [
      { 
        name: 'The Table Bay Hotel', 
        type: 'hotel', 
        features: ['Luxury', 'Safe area', 'Security', '24/7 security', 'Female-friendly', 'Professional staff'], 
        rating: 4.7, 
        notes: 'High security and professional staff.',
        link: 'https://www.suninternational.com/table-bay/'
      },
      { 
        name: 'Once in Cape Town', 
        type: 'hostel', 
        features: ['Female dorms', 'Central location', 'Security', 'Security cameras', '24/7 reception'], 
        rating: 4.2, 
        notes: 'Popular with solo travelers, but caution advised.',
        link: 'https://www.onceincapetown.co.za/'
      },
      {
        name: 'Cape Grace Hotel',
        type: 'hotel',
        features: ['Luxury hotel', 'V&A Waterfront location', 'Excellent security', 'Safe area', 'Professional staff'],
        rating: 4.8,
        notes: 'Luxury hotel in the secure V&A Waterfront area. Very safe for solo women travelers.',
        link: 'https://www.capegrace.com/'
      }
    ],
    alerts: [
      { 
        title: 'High Crime Alert', 
        description: 'Frequent reports of violent crime and muggings', 
        location: 'CBD', 
        reportCount: 30, 
        severity: 'high', 
        dateReported: '2 days ago' 
      },
      {
        title: 'Carjacking Warning',
        description: 'Increase in carjacking incidents in tourist areas',
        location: 'Cape Town area',
        reportCount: 15,
        severity: 'high',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: [
        'MyCiti',
        'Uber',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me'
      ],
      appLinks: [
        { name: 'MyCiti', link: 'https://www.myciti.org.za/', description: 'Public transport navigation' },
        { name: 'Uber', link: 'https://www.uber.com/za/en/', description: 'Ride-sharing service' },
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
          local: 'Bel die polisie!',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I need a doctor.',
          local: 'Ek het \'n dokter nodig.',
          localLanguage: 'Afrikaans'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '10111', fire: '10177', medical: '10177', general: '112'
    },
    currency: {
      name: 'South African Rand', code: 'ZAR', exchangeRate: {
      usd: 0.0564,
      eur: 0.0480,
      gbp: 0.0419
    }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' },
      { title: 'Fake Police Officers', description: 'Criminals posing as police officers to rob tourists.', severity: 'high' },
      { title: 'Pickpocketing', description: 'Common in crowded tourist areas and public transport.', severity: 'medium' }
    ],
    usefulTips: [
      {
        title: "Stay in well-reviewed, central neighborhoods",
        description: "Choose accommodation in safe, tourist-friendly areas like Camps Bay, Sea Point, or the V&A Waterfront. Avoid remote or poorly lit areas, especially at night.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Use registered taxis or rideshare apps",
        description: "Avoid public transport after dark. Use Uber, Bolt, or official taxi services for safe travel, especially at night.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Keep valuables hidden and avoid flashy jewelry",
        description: "Petty theft and pickpocketing are common. Use a money belt, keep your phone and wallet secure, and leave expensive jewelry at home.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Avoid walking alone, especially at night",
        description: "Violent crime is common. Always travel with others or use secure transport, particularly after dark.",
        severity: "high",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Be aware of your surroundings at all times",
        description: "Stay alert and trust your instincts. If something feels unsafe, remove yourself from the situation immediately.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      }
    ],
    culturalSensitivityTips: [
      'Be aware of South Africa\'s complex history and current social issues',
      'Avoid discussing politics or race unless you understand the context',
      'Show respect for local customs and traditions',
      'Be mindful of economic disparities in the city',
      'Understand that safety concerns are real and should be taken seriously'
    ],
    culturalDos: [
      'Dress modestly to avoid drawing attention',
      'Be respectful of local customs and traditions',
      'Show appreciation for South African culture',
      'Be patient with slower service',
      'Tip appropriately for good service'
    ],
    culturalDonts: [
      'Don\'t flaunt wealth or expensive items',
      'Don\'t discuss politics without understanding the context',
      'Don\'t take photos of people without permission',
      'Don\'t ignore safety warnings from locals',
      'Don\'t venture into areas you\'re told to avoid'
    ],
    womensConfidenceScore: {
      score: 25,
      source: 'Travel Ladies Community Survey 2024',
      sourceUrl: 'https://travelladies.app/safety/south-africa/cape-town'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 15,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.capetown.gov.za/'
      },
      {
        label: 'Public Transport',
        confidence: 20,
        source: 'Cape Town Transport Safety Report',
        sourceUrl: 'https://www.myciti.org.za/'
      },
      {
        label: 'Night Activities',
        confidence: 10,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.capetown.gov.za/'
      },
      {
        label: 'Cultural Sites',
        confidence: 35,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.southafrica.net/'
      }
    ],
    languages: ['English', 'Afrikaans', 'Xhosa'],
    daytimeSafetyPercent: 46.9,
    nighttimeSafetyPercent: 14.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Cape-Town',
    redFlags: [
      { label: 'Muggings & Armed Robbery', frequency: 'Most common', icon: 'PocketKnife' },
      { label: 'Pickpocketing & Theft', frequency: 'Most common', icon: 'Hand' },
      { label: 'Carjacking & Smash-and-Grab', frequency: 'Frequent', icon: 'Car' },
      { label: 'Sexual Assault & Harassment', frequency: 'Frequent', icon: 'EyeOff' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: ['Public transport', 'Tourist areas', 'CBD', 'Beach areas'],
      reportingRate: 15,
      legalProtection: 'Limited legal framework for sexual harassment. Police response varies significantly.',
      supportResources: [
        'Rape Crisis Cape Town: +27 21 447 9762',
        'Women\'s Legal Centre: +27 21 424 5660',
        'Cape Town Police: 10111'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Groote Schuur Hospital',
          address: 'Observatory, Cape Town',
          phone: '+27 21 404 9111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.westerncape.gov.za/'
        },
        {
          name: 'Cape Town Medi-Clinic',
          address: 'Cape Town CBD',
          phone: '+27 21 464 5500',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.mediclinic.co.za/'
        }
      ],
      pharmacies: [
        {
          name: 'Clicks Pharmacy',
          address: 'V&A Waterfront, Cape Town',
          phone: '+27 21 418 2000',
          hours: '24/7',
          emergency: true,
          link: 'https://www.clicks.co.za/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center - Groote Schuur Hospital',
          'Gynecology Department - Cape Town Medi-Clinic'
        ],
        gynecologists: [
          'Dr. Sarah Johnson - Groote Schuur Hospital',
          'Dr. Maria van der Merwe - Cape Town Medi-Clinic'
        ],
        emergencyContraception: [
          'Available at major pharmacies',
          'Groote Schuur Hospital Emergency Department'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands available in tourist areas'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Typhoid vaccination recommended',
        'COVID-19 vaccination recommended'
      ],
      healthRisks: [
        'HIV/AIDS prevalence is high',
        'Water-borne diseases in some areas',
        'Air pollution in urban areas'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Pretoria',
        address: '877 Pretorius Street, Arcadia, Pretoria',
        phone: '+27 12 431 4000',
        email: 'consularpretoria@state.gov',
        emergency: '+27 12 431 4000',
        link: 'https://za.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British High Commission Cape Town',
          address: '15 Southern Life Plaza, 8 Riebeek Street, Cape Town',
          phone: '+27 21 405 2400',
          link: 'https://www.gov.uk/world/organisations/british-high-commission-pretoria'
        },
        {
          name: 'Canadian High Commission Pretoria',
          address: '1103 Arcadia Street, Hatfield, Pretoria',
          phone: '+27 12 422 3000',
          link: 'https://www.canadainternational.gc.ca/southafrica-afriquedusud/'
        }
      ],
      womensRights: [
        'Constitutional protections for women\'s rights',
        'High rates of gender-based violence',
        'Limited police response to harassment cases'
      ],
      legalSupport: [
        'Women\'s Legal Centre',
        'Rape Crisis Cape Town',
        'Limited free legal consultation available',
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
          type: 'Uber/Bolt',
          safety: 70,
          recommendations: [
            'Use ride-hailing apps instead of public transport',
            'Share ride details with someone',
            'Avoid rides at night when possible'
          ],
          companies: ['Uber', 'Bolt'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'MyCiti Bus',
          safety: 50,
          recommendations: [
            'Use during daylight hours only',
            'Keep belongings secure',
            'Avoid during peak crime hours'
          ],
          companies: ['MyCiti'],
          link: 'https://www.myciti.org.za/'
        },
        {
          type: 'Hotel Transport',
          safety: 80,
          recommendations: [
            'Use hotel-arranged transportation',
            'Most reliable option for airport transfers',
            'Safe for late-night travel'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 20,
        warnings: [
          'Extremely dangerous to travel alone at night',
          'High risk of violent crime and assault',
          'Limited public transport options'
        ],
        alternatives: [
          'Use hotel transport services',
          'Stay in well-lit, busy areas',
          'Travel with a group when possible'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber South Africa',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 70
        },
        {
          name: 'Bolt',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 70
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
        'Camps Bay',
        'Sea Point',
        'Green Point',
        'V&A Waterfront'
      ],
      womensOnly: [
        {
          name: 'Once in Cape Town',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Security cameras'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.0,
          safety: 60,
          comments: 'Good security but location requires caution',
          date: '2024-01-15'
        },
        {
          rating: 4.7,
          safety: 80,
          comments: 'Excellent security at luxury hotels',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Avoid using public WiFi for sensitive information',
        'Use VPN when connecting to hotel WiFi',
        'Be cautious of fake WiFi networks'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN'
      ],
      dataProtection: [
        'Limited data protection laws',
        'Be cautious with personal information',
        'Use secure payment methods when possible'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Armed Robbery',
          location: 'CBD',
          date: '2024-01-05',
          description: 'Tourist robbed at gunpoint in central area',
          severity: 'high'
        },
        {
          type: 'Carjacking',
          location: 'Cape Town area',
          date: '2024-01-03',
          description: 'Vehicle stolen with tourist inside',
          severity: 'high'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use secure transport, especially at night',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 45
        },
        {
          tip: 'Stay in well-reviewed, safe neighborhoods',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 38
        },
        {
          tip: 'Keep valuables hidden and avoid flashy jewelry',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 52
        },
        {
          tip: 'Be aware of your surroundings at all times',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 41
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'South Africa has high crime rates and security concerns. Exercise increased caution due to violent crime, including armed robbery and carjacking. Be aware of your surroundings.',
      reason: 'High crime rates and violent incidents.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html'
    },
    crimeStatistics: {
      violentCrime: 350, // per 100,000 (2024 data)
      propertyCrime: 850, // per 100,000 (2024 data)
      sexualAssault: 45, // per 100,000 (2024 data)
      kidnapping: 8, // per 100,000 (2024 data)
      source: 'South African Police Service',
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
          name: 'Uber',
          purpose: 'Safe ride-sharing service',
          rating: 4.5
        },
        {
          name: 'Bolt',
          purpose: 'Local ride-sharing app',
          rating: 4.3
        },
        {
          name: 'MyCiti',
          purpose: 'Public transport navigation',
          rating: 4.0
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
          number: '10111',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '10177',
          type: 'Medical Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+27 12 431 4000',
          type: 'Consular Services'
        },
        {
          name: 'Rape Crisis Cape Town',
          number: '+27 21 447 9762',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Legal Centre',
          number: '+27 21 424 5660',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$50 - $100 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Cape Town is moderately priced, but spending more on accommodation and transport significantly improves safety for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$12-20',
          safetyNote: 'Limited options, choose carefully in safe areas',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$30-60',
          safetyNote: 'Choose hotels in safe neighborhoods like Camps Bay or V&A Waterfront',
          safetyLevel: 'medium'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$80+',
          safetyNote: 'Much safer with verified hosts in secure neighborhoods',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Rideshare (Uber/Bolt)',
          cost: '$3-10/ride',
          safetyDescription: 'Safest option, especially at night. Use verified drivers.',
          safetyLevel: 'high'
        },
        {
          method: 'Public Transit',
          cost: '$1-3/day',
          safetyDescription: 'Use MyCiti buses during daylight hours only. Avoid at night.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Not recommended, especially alone or at night',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Cape Town is moderately priced but safety should be your top priority over budget',
        'Spend more on accommodation in safe neighborhoods like Camps Bay or V&A Waterfront',
        'Use rideshare services instead of public transport, especially at night',
        'Avoid walking alone - the cost savings aren\'t worth the safety risks',
        'Budget for secure transport to and from the airport'
      ]
    }
};

export default capetown;
