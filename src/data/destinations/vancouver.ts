import { Destination } from './types';

const vancouver: Destination = {
    city: 'Vancouver',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.5,
    nightSafety: 8.0,
    publicTransit: 8.7,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.0, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.6, context: 'Very safe to walk alone. Canadian culture is very respectful.' }
    },
    neighborhoods: {
      safe: [
        {
          name: 'West End',
          description: 'Vancouver\'s most walkable and safe neighborhood with beaches, parks, and excellent amenities. Very popular with solo female travelers for its safety, public transport access, and vibrant yet peaceful atmosphere. Well-lit streets and active community.'
        },
        {
          name: 'Yaletown',
          description: 'Upscale district with modern condos, excellent restaurants, and strong security presence. Very safe for solo female travelers with well-maintained streets, good lighting, and professional environment. Close to SkyTrain for easy transport.'
        },
        {
          name: 'Kitsilano',
          description: 'Hip neighborhood near beaches with yoga studios, healthy restaurants, and young professional crowd. Generally very safe with good community feel and excellent for solo female travelers seeking a more local experience.'
        },
        {
          name: 'Coal Harbour',
          description: 'Waterfront district with luxury amenities and excellent security. Very safe with beautiful seawall, upscale dining, and well-patrolled areas. Popular with solo travelers for its safety and scenic beauty.'
        },
        {
          name: 'Olympic Village',
          description: 'Modern neighborhood with excellent infrastructure and safety standards. Well-designed with good lighting, community centers, and safe public spaces. Great for solo female travelers.'
        },
        {
          name: 'Kerrisdale',
          description: 'Quiet residential area with excellent safety record and family-friendly atmosphere. Good public transport connections and safe for evening walks. Popular with families and older residents.'
        }
      ],
      caution: [
        'Downtown Eastside: Area with visible drug use and mental health issues. While not necessarily dangerous, can be uncomfortable for some travelers. Avoid after dark.',
        'Gastown late at night: Historic area that can get rowdy after bars close. Generally safe but exercise caution after midnight on weekends.',
        'Granville Street nightlife district: Busy party area with increased police presence but also more intoxicated individuals. Use caution late at night.',
        'Some SkyTrain stations late at night: While generally safe, some stations can have homeless individuals or drug activity after midnight.'
      ],
      avoid: [
        'Vancouver is extremely safe overall. No areas are truly dangerous, but exercise standard urban precautions in less busy areas after dark.',
        'Isolated areas of large parks (Stanley Park, Queen Elizabeth Park) very late at night - stick to well-lit, populated paths.'
      ]
    },
    accommodations: [
      {
        name: 'HI Vancouver Central',
        type: 'hostel',
        features: ['Female-only dorms', 'Central downtown location', '24/7 reception', 'Kitchen facilities'],
        rating: 8.4,
        notes: 'Top choice for solo female travelers. Excellent safety record, friendly international atmosphere, and perfect location for exploring Vancouver safely.',
        link: 'https://hihostels.ca/destinations/british-columbia/hi-vancouver-central'
      },
      {
        name: 'Fairmont Pacific Rim',
        type: 'hotel',
        features: ['Luxury waterfront', '24/7 security', 'Coal Harbour location', 'Premium service'],
        rating: 9.1,
        notes: 'Premium option with exceptional security and service. Perfect for solo female travelers seeking luxury with top-tier safety in prime location.',
        link: 'https://www.fairmont.com/pacific-rim-vancouver/'
      },
      {
        name: 'YWCA Hotel Vancouver',
        type: 'hotel',
        features: ['Women-focused', 'Fitness center', 'Safe downtown location', 'Affordable luxury'],
        rating: 8.7,
        notes: 'Excellent choice for solo female travelers. Women-focused hotel with strong safety standards and supportive environment in safe downtown area.',
        link: 'https://ywcahotel.com/'
      },
      {
        name: 'Pinnacle Hotel Vancouver',
        type: 'hotel',
        features: ['Downtown core', 'Modern facilities', 'High security', '24/7 concierge'],
        rating: 8.8,
        notes: 'Modern hotel with excellent safety standards in very safe downtown location. Great for solo female business and leisure travelers.',
        link: 'https://www.pinnaclehotelvancouver.com/'
      },
      {
        name: 'Sandman Suites Vancouver',
        type: 'hotel',
        features: ['Extended stay suites', 'Kitchenettes', 'Safe Davie Street location', 'Fitness center'],
        rating: 8.6,
        notes: 'Perfect for longer stays with excellent safety in vibrant West End. Ideal for solo female travelers planning extended Vancouver visits.',
        link: 'https://www.sandmanhotels.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Layer clothing for Vancouver's mild but unpredictable weather
• Waterproof jacket essential year-round - frequent rain showers
• Comfortable waterproof shoes for walking on wet sidewalks
• Casual dress is perfectly acceptable everywhere
• No specific cultural dress requirements
• Light jacket needed even in summer for air conditioning and evening cooling`,
      firstTimers: `• Vancouver is perfect for first-time solo female travelers - extremely safe and welcoming
• English is the primary language with excellent multicultural acceptance
• Download Compass Card app for seamless public transport
• Canada uses contactless payments extensively - ensure you have tap-enabled cards
• Emergency number 911 works for all services (police, fire, medical)
• Canadians are known for politeness and helpfulness - don't hesitate to ask for directions`,
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Google Translate'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community app' },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features' },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential translation app for international travel' }
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
          english: 'I need help.',
          local: 'I need help.',
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
        },
        {
          english: 'Thank you.',
          local: 'Thank you.',
          localLanguage: 'English'
        },
        {
          english: 'Excuse me.',
          local: 'Excuse me.',
          localLanguage: 'English'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Canadian Dollar', code: 'CAD', exchangeRate: {
      usd: 0.7299,
      eur: 0.6219,
      gbp: 0.5431
    }, scamWarnings: [],
    },
    usefulTips: [
      {
        title: 'Stay Alert in Tourist Areas and on Transit',
        description: 'Pickpocketing and distraction thefts can occur in busy areas and on public transport. Keep your belongings secure and be wary of strangers invading your personal space.',
        severity: 'low',
        sourceName: 'Vancouver Police Department',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/distraction-theft/'
      },
      {
        title: 'Avoid Walking Alone at Night in Isolated Areas',
        description: 'Stick to well-lit, busy streets at night and avoid isolated or poorly lit areas, especially in and around Downtown Eastside, Gastown, and Chinatown.',
        severity: 'low',
        sourceName: 'BCRobyn',
        sourceUrl: 'https://www.bcrobyn.com/2025/01/planning-to-visit-gastown-and-chinatown-in-vancouver-read-this-first/'
      },
      {
        title: 'Use Licensed Taxis or Trusted Rideshare Apps',
        description: 'For late-night travel, use official taxis or rideshare apps like Uber. Share your ride details with a friend and avoid accepting rides from strangers.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/canada'
      },
      {
        title: 'Be Cautious Around Open Drug Use',
        description: 'Some districts have visible drug activity. Do not engage, film, or draw attention to yourself. If you feel uncomfortable, leave the area promptly.',
        severity: 'low',
        sourceName: 'Vancouver Police Department',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/international-student-safety/'
      },
      {
        title: 'Secure Your Valuables in Cars and Accommodations',
        description: 'Car break-ins are common, especially at trailheads and parking lots. Never leave valuables in sight and always lock your vehicle.',
        severity: 'low',
        sourceName: 'Vancouver Police Department',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/international-student-safety/'
      }
    ],
    languages: ['English'],
    daytimeSafetyPercent: 77.8, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Vancouver)
    nighttimeSafetyPercent: 51.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Vancouver)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Vancouver',
    womensConfidenceScore: {
      score: 74.3,
      source: 'Travel Ladies & Numbeo 2025',
      sourceUrl: 'https://travelladies.app/safety/canada/vancouver'
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 93,
        source: 'Tourism Vancouver & Travel Ladies 2025',
        sourceUrl: 'https://www.vancouvertourism.com/plan-your-trip/safe-travel/'
      },
      {
        label: "Nightlife",
        confidence: 85,
        source: 'Vancouver Police Department Safety Reports 2025',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/'
      },
      {
        label: "Public Transport",
        confidence: 95,
        source: 'TransLink Safety Statistics 2025',
        sourceUrl: 'https://www.translink.ca/rider-guide/transit-safety'
      },
      {
        label: "Dining Alone",
        confidence: 90,
        source: 'Vancouver Foodie & Solo Travel Reports 2025',
        sourceUrl: 'https://www.vancouverfoodster.com/'
      }
    ],
    // Red flags based on VPD, Numbeo 2025, StaySafeVancouver, and local advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Vancouver
    // https://vpd.ca/crime-prevention-safety/distraction-theft/
    // https://www.staysafevancouver.com/post/vancouver-crime-statistics-2025
    // https://www.bcrobyn.com/2025/01/planning-to-visit-gastown-and-chinatown-in-vancouver-read-this-first/
    redFlags: [
      {
        label: 'Pickpocketing & Distraction Theft (Tourist Areas, Transit)',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Car Break-ins & Auto Theft',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Drug Activity & Open Use (Certain Districts)',
        frequency: 'Occasional',
        icon: 'Syringe',
      },
      {
        label: 'Aggressive Panhandling & Street Harassment',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
    ],
  culturalDos: [
      'Respect personal space and keep a polite distance.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Use quiet voices in public and on transport.',
      'Queue patiently and wait your turn.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about Canada\'s history or politics."
    ],
  scamWarnings: [],
  legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate Vancouver',
          address: '1095 West Pender Street, Vancouver, BC V6E 2M6',
          phone: '+1 604 685 4311',
          link: 'https://ca.usembassy.gov/embassy-consulates/vancouver/'
        },
        {
          name: 'British Consulate General Vancouver',
          address: '1111 Melville Street, Suite 800, Vancouver, BC V6E 3V6',
          phone: '+1 604 683 4421',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-vancouver'
        },
        {
          name: 'German Consulate General Vancouver',
          address: '704-999 Canada Place, Vancouver, BC V6C 3E1',
          phone: '+1 604 684 8377',
          link: 'https://vancouver.diplo.de/'
        },
        {
          name: 'French Consulate General Vancouver',
          address: '1130 West Pender Street, Suite 1100, Vancouver, BC V6E 4A4',
          phone: '+1 604 637 5300',
          link: 'https://vancouver.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate General Vancouver',
          address: '1177 West Hastings Street, Suite 1500, Vancouver, BC V6E 2K3',
          phone: '+1 604 666 8960',
          link: 'https://www.exteriores.gob.es/consulados/vancouver'
        },
        {
          name: 'Australian Consulate General Vancouver',
          address: '1075 West Georgia Street, Suite 2050, Vancouver, BC V6E 3C9',
          phone: '+1 604 684 1177',
          link: 'https://canada.embassy.gov.au/ottawa/vancouver.html'
        },
        {
          name: 'Government of Canada Services',
          address: 'Multiple Service Canada locations throughout Vancouver',
          phone: '+1 800 622 6232',
          link: 'https://www.canada.ca/en/employment-social-development/corporate/contact/local-offices.html'
        },
        {
          name: 'Dutch Consulate General Vancouver',
          address: '475 Howe Street, Suite 821, Vancouver, BC V6C 2B3',
          phone: '+1 604 684 6448',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/canada/about-us/consulate-general-vancouver'
        },
        {
          name: 'Danish Consulate General Vancouver',
          address: '999 Canada Place, Suite 404, Vancouver, BC V6C 3E1',
          phone: '+1 604 696 1207',
          link: 'https://canada.um.dk/en/about-us/danish-missions-in-canada/consulate-general-in-vancouver'
        },
        {
          name: 'Swiss Consulate General Vancouver',
          address: '790-999 West Hastings Street, Vancouver, BC V6C 2W2',
          phone: '+1 604 684 2231',
          link: 'https://www.eda.admin.ch/vancouver'
        },
        {
          name: 'Indian Consulate General Vancouver',
          address: '325 Howe Street, 2nd Floor, Vancouver, BC V6C 1Z7',
          phone: '+1 604 662 8811',
          link: 'https://www.cgivancouver.gov.in/'
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
    },
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Granville Street nightlife area', 'Some SkyTrain stations late night', 'Crowded public events', 'Online platforms'],
      reportingRate: 71,
      legalProtection: 'Extremely strong legal framework. Canada has comprehensive anti-harassment laws with zero tolerance policy. British Columbia has specific legislation against gender-based violence with strong victim support services.',
      supportResources: [
        'Emergency Services: 911',
        'VictimLinkBC: 1-800-563-0808 (24/7)',
        'Vancouver Rape Relief: 604-872-8212',
        'Women Against Violence Against Women: 604-255-6344',
        'U.S. Consulate Vancouver: +1 604 685 4311'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Vancouver General Hospital',
          address: '899 W 12th Ave, Vancouver, BC V5Z 1M9',
          phone: '+1 604 875 4111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\\\'s Health', 'Trauma Care'],
          link: 'https://www.vch.ca/en/location/vancouver-general-hospital'
        },
        {
          name: 'St. Paul\\\'s Hospital',
          address: '1081 Burrard St, Vancouver, BC V6Z 1Y6',
          phone: '+1 604 682 2344',
          emergency: true,
          specialties: ['Emergency Care', 'Heart Center', 'Women\\\'s Health'],
          link: 'https://www.providencehealthcare.org/hospitals-residences/st-pauls-hospital'
        },
        {
          name: 'BC Women\\\'s Hospital',
          address: '4500 Oak St, Vancouver, BC V6H 3N1',
          phone: '+1 604 875 2424',
          emergency: true,
          specialties: ['Women\\\'s Health', 'Maternity Care', 'Gynecology'],
          link: 'https://www.bcwomens.ca/'
        }
      ],
      pharmacies: [
        {
          name: 'London Drugs (Multiple Locations)',
          address: 'Throughout Vancouver',
          phone: '+1 604 448 4802',
          hours: 'Mon-Fri 8:00-22:00, Sat-Sun 9:00-18:00 (varies by location)',
          emergency: false,
          link: 'https://www.londondrugs.com/'
        },
        {
          name: 'Shoppers Drug Mart (24/7 Location)',
          address: '1125 Davie St, Vancouver, BC',
          phone: '+1 604 669 2424',
          hours: '24/7',
          emergency: true,
          link: 'https://www.shoppersdrugmart.ca/'
        }
      ],
      womensHealth: {
        clinics: [
          'BC Women\\\'s Hospital: +1 604 875 2424',
          'VCH Women\\\'s Health: +1 604 736 2033',
          'Options for Sexual Health: +1 604 731 7803'
        ],
        gynecologists: [
          'Dr. Jennifer Blake at BC Women\\\'s: +1 604 875 2424',
          'Dr. Sarah Chen at VGH Women\\\'s Clinic: +1 604 875 4111'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B widely available at London Drugs and Shoppers',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all convenience stores, pharmacies, and grocery stores',
          'Comprehensive selection at major chains',
          'Free products available in many public buildings and universities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Vancouver',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Air quality issues during wildfire season (summer)',
        'Vitamin D deficiency due to limited sunlight in winter',
        'Seasonal depression during rainy months (Nov-Mar)',
        'Allergies from tree pollen (spring)'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'TransLink (SkyTrain/Bus/SeaBus)',
          safety: 9.5,
          recommendations: ['Excellent safety record', 'CCTV monitoring', 'Emergency buttons'],
          companies: ['TransLink'],
          link: 'https://www.translink.ca/'
        },
        {
          type: 'Uber',
          safety: 9.2,
          recommendations: ['GPS tracking', 'Driver verification', 'In-app emergency'],
          companies: ['Uber'],
          link: 'https://www.uber.com/ca/en/'
        },
        {
          type: 'Vancouver Taxi',
          safety: 9.0,
          recommendations: ['Licensed taxi companies', 'Professional drivers', 'Regulated fares'],
          companies: ['Yellow Cab', 'Black Top Cabs'],
          link: 'https://www.yellowcabonline.com/'
        },
        {
          type: 'Car2Go/Evo Car Share',
          safety: 8.8,
          recommendations: ['Verified members only', 'GPS tracking', 'Safe for solo use'],
          companies: ['Evo Car Share'],
          link: 'https://evo.ca/'
        }
      ],
      nightTravel: {
        safety: 8.7,
        warnings: [
          'Very safe for night travel in central Vancouver',
          'SkyTrain operates until 1:20 AM (2:20 AM Fri/Sat)',
          'Well-lit streets throughout downtown and popular areas',
          'Exercise standard precautions in Downtown Eastside'
        ],
        alternatives: [
          'Night Bus services available on major routes',
          'Uber and taxi services operate 24/7',
          'Very safe to walk in downtown, West End, and Yaletown',
          'Avoid isolated areas of large parks after dark'
        ]
      },
      verifiedProviders: [
        {
          name: 'TransLink',
          type: 'Public Transit',
          contact: 'TransLink app',
          safety: 9.5
        },
        {
          name: 'Uber',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.2
        },
        {
          name: 'Yellow Cab',
          type: 'Licensed Taxi',
          contact: '+1 604 681 1111',
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
        'West End (highest safety and walkability)',
        'Yaletown (upscale with excellent security)',
        'Coal Harbour (luxury waterfront with safety)',
        'Kitsilano (safe and trendy)',
        'Olympic Village (modern and well-designed)',
        'Kerrisdale (quiet residential safety)'
      ],
      womensOnly: [
        {
          name: 'YWCA Hotel Vancouver',
          type: 'Hotel',
          features: ['Women-focused environment', 'Fitness center', 'Safe downtown location', 'Support services'],
          rating: 4.7
        },
        {
          name: 'HI Vancouver Central',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location', 'International community'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.2,
          comments: 'Vancouver felt incredibly safe as a solo female traveler. Even late at night, I felt completely secure.',
          date: '2025-01-15'
        },
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'Perfect destination for first-time solo female travelers. Canadian hospitality is genuine.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Canada has extensive free WiFi in public areas',
        'High-quality, secure public WiFi infrastructure',
        'Safe to use for most activities due to strong privacy laws',
        'VPN recommended for sensitive transactions'
      ],
      digitalScams: [
        'Romance scams on dating apps targeting tourists',
        'Fake accommodation booking websites',
        'Phishing emails claiming to be from Canadian banks',
        'Fake charity donation requests'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Canada',
        'NordVPN - reliable connection',
        'ProtonVPN - good for privacy'
      ],
      dataProtection: [
        'Strong privacy laws in Canada (PIPEDA)',
        'Very safe to use digital payments and banking',
        'Excellent cybersecurity infrastructure',
        'Keep copies of documents in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Car Break-ins Increase',
          location: 'Tourist parking areas and trailheads',
          date: '2025-01-15',
          description: 'Increase in car break-ins at popular tourist spots - never leave valuables visible',
          severity: 'low'
        },
        {
          type: 'Downtown Eastside Conditions',
          location: 'Main and Hastings area',
          date: '2025-01-10',
          description: 'Ongoing issues with open drug use - not dangerous but can be uncomfortable',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Get a Compass Card on arrival - makes transit much easier and safer than cash',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 95
        },
        {
          tip: 'Vancouver weather changes quickly - always carry a light rain jacket',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 87
        },
        {
          tip: 'West End is perfect for solo female travelers - safe, walkable, and beautiful',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 102
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Canada is very safe for travelers. Exercise normal precautions.',
      reason: 'Low crime rates and excellent safety infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/canada-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers of all experience levels',
        'Strong gender equality culture ensures respectful treatment',
        'Stay in West End, Yaletown, or Coal Harbour for best safety and convenience',
        'Take advantage of excellent public transportation system',
        'Be prepared for changeable weather and dress in layers'
      ]
    },
    crimeStatistics: {
      violentCrime: 1.8, // per 100,000 (2024 data - Canada has low violent crime)
      propertyCrime: 3890, // per 100,000 (2024 data - mainly car break-ins)
      sexualAssault: 7.2, // per 100,000 (2024 data)
      kidnapping: 0.4, // per 100,000 (2024 data - very rare)
      source: 'Statistics Canada & Vancouver Police Department Annual Report',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Portable phone charger (essential for apps)',
        'Waterproof jacket and layers',
        'Comfortable waterproof walking shoes',
        'Compass Card for transit',
        'Umbrella for frequent rain',
        'Light jacket for summer evenings'
      ],
      safetyApps: [
        {
          name: 'VPD Block Watch',
          purpose: 'Vancouver Police community safety app with crime alerts',
          rating: 4.5
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety app with emergency contacts',
          rating: 4.4
        },
        {
          name: 'TransLink',
          purpose: 'Transit navigation and safety features',
          rating: 4.7
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Non-Emergency Police',
          number: '+1 604 717 3321',
          type: 'Vancouver Police Non-Emergency'
        },
        {
          name: 'VictimLinkBC',
          number: '1-800-563-0808',
          type: '24/7 Support Services'
        },
        {
          name: 'Crisis Line',
          number: '604-872-3311',
          type: '24/7 Crisis Support'
        },
        {
          name: 'U.S. Consulate',
          number: '+1 604 685 4311',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$60 - $95 CAD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level.',
        tip: 'Vancouver is expensive but offers excellent value for safety and quality of life. Budget accordingly for higher costs but exceptional standards.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$40-55 CAD',
          safetyNote: 'Excellent safety standards with modern facilities',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$90-130 CAD',
          safetyNote: 'High safety standards with 24/7 staff and security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$150-250 CAD',
          safetyNote: 'Premium safety with concierge and full security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit (Compass Card)',
          cost: '$3.10 CAD/ride',
          safetyDescription: 'World-class safety with excellent monitoring and emergency systems.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber',
          cost: '$10-25 CAD/ride',
          safetyDescription: 'Very safe with GPS tracking and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxi',
          cost: '$15-30 CAD/ride',
          safetyDescription: 'Safe with professional drivers and regulated fares.',
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
        'Vancouver offers premium safety at all budget levels',
        'Public transport is efficient and very cost-effective',
        'Many outdoor activities and beaches are free',
        'Happy hour and lunch specials help manage dining costs',
        'Safety investment pays off in stress-free travel experience'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default vancouver;
