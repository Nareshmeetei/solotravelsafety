import { Destination } from './types';

const toronto: Destination = {
    id: 'toronto-canada',
    city: 'Toronto',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.5,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 170,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    description: 'Is Toronto safe for solo female travellers? Toronto is ranked as the least dangerous city in North America and among the world\'s safest cities for solo female travelers. With Canada ranking #18 globally for solo female travel safety, Toronto offers a welcoming, multicultural environment with low crime rates, excellent infrastructure, and strong safety standards for women traveling alone.',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.8, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.4, context: 'Very safe to walk alone. Canadian culture is respectful.' }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Yorkville',
          description: 'Toronto\'s upscale district known for luxury shopping, fine dining, and cultural attractions. Extremely safe with high-end security, well-lit streets, and frequent police patrols. Perfect for solo female travelers seeking a sophisticated, secure environment.'
        },
        {
          name: 'The Annex',
          description: 'Trendy neighborhood near University of Toronto with vibrant cafe culture and bookstores. Very safe with good lighting and active street life. Popular with students and young professionals, offering a lively yet secure atmosphere.'
        },
        {
          name: 'Distillery District',
          description: 'Historic cobblestone district with galleries, restaurants, and shops. Extremely safe tourist area with excellent security, regular patrols, and well-maintained lighting. Ideal for solo exploration with a charming, walkable environment.'
        },
        {
          name: 'Queen West',
          description: 'Hip arts and culture district with independent shops, galleries, and restaurants. Generally safe with good foot traffic and lighting. Popular with creative professionals and tourists.'
        },
        {
          name: 'Kensington Market',
          description: 'Eclectic neighborhood with vintage shops, international food, and bohemian atmosphere. Safe during daytime with vibrant community feel. Good for solo exploration during business hours.'
        },
        {
          name: 'Financial District',
          description: 'Downtown business core with modern office towers and upscale amenities. Very safe with heavy security presence and well-lit streets. Quieter in evenings but still secure for solo travelers.'
        }
      ],
      caution: [
        'Downtown core after midnight: While generally safe, some areas near Parliament and Jarvis Streets have increased homelessness and should be avoided late at night.',
        'Some Entertainment District late night: Exercise standard nightlife precautions in busy bar areas after midnight.',
        'Certain parks after dark: Some parks have homeless encampments, stick to well-lit main paths in the evening.'
      ],
      avoid: [
        'Parliament and Jarvis Streets area after dark: Higher concentration of social issues and homelessness.',
        'Isolated areas of certain parks at night: Some parks have been affected by homeless camps, avoid isolated sections after dark.'
      ]
    },
    accommodations: [
      {
        name: 'HI Toronto Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Downtown location', '24/7 security', 'Kitchen facilities'],
        rating: 8.7,
        notes: 'Top choice for solo female travelers. Excellent safety record, vibrant social atmosphere, and perfect central location for exploring Toronto safely.',
        link: 'https://hihostels.ca/destinations/ontario/hi-toronto'
      },
      {
        name: 'Fairmont Royal York',
        type: 'hotel',
        features: ['Historic luxury', 'Union Station location', 'Premium security', '24/7 concierge'],
        rating: 9.0,
        notes: 'Iconic luxury hotel with exceptional safety standards. Perfect for solo female travelers seeking elegance and security in prime downtown location.',
        link: 'https://www.fairmont.com/royal-york-toronto/'
      },
      {
        name: 'The Drake Hotel',
        type: 'hotel',
        features: ['Boutique design', 'Queen West location', 'Cultural hub', 'Safe area'],
        rating: 8.8,
        notes: 'Trendy boutique hotel perfect for solo female travelers. Excellent safety in vibrant arts district with cultural attractions and nightlife.',
        link: 'https://www.thedrakehotel.ca/'
      },
      {
        name: 'The Hazelton Hotel',
        type: 'hotel',
        features: ['Luxury Yorkville', 'High security', 'Premium service', 'Upscale location'],
        rating: 9.2,
        notes: 'Ultra-luxury hotel in safest Toronto neighborhood. Ideal for solo female travelers seeking premium safety and sophisticated amenities.',
        link: 'https://www.thehazeltonhotel.com/'
      },
      {
        name: 'Planet Traveler Hostel',
        type: 'hostel',
        features: ['Eco-friendly', 'Female dorms', 'Safe Kensington area', 'Social atmosphere'],
        rating: 8.5,
        notes: 'Sustainable hostel with excellent safety features and community feel. Great for solo female travelers interested in eco-conscious travel.',
        link: 'https://www.planettraveler.ca/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress for Toronto's four distinct seasons - layering is essential
• Winter clothing crucial (Nov-Mar): warm coat, boots, hat, gloves
• Summer can be hot and humid - breathable fabrics recommended  
• Business casual appropriate for most venues
• Comfortable walking shoes for exploring diverse neighborhoods
• Waterproof jacket useful for unpredictable weather`,
      firstTimers: `• Toronto is perfect for first-time solo female travelers - very welcoming
• English is the primary language with excellent multicultural acceptance
• Download TTC and Presto apps for seamless public transport
• PRESTO card essential for TTC (subway, buses, streetcars)
• Emergency services use 911 for all emergencies
• Canadians are known for politeness and helpfulness`,
      apps: [
        'TTC (Toronto Transit)',
        'PRESTO',
        'Uber',
        'ParkWhiz',
        'Google Maps'
      ],
      appLinks: [
        { name: 'TTC', link: 'https://www.ttc.ca/', description: 'Official Toronto Transit Commission app with real-time info' },
        { name: 'PRESTO', link: 'https://www.prestocard.ca/', description: 'Payment card app for all public transit' },
        { name: 'Uber', link: 'https://www.uber.com/ca/en/', description: 'Reliable ride-hailing service with excellent coverage' },
        { name: 'ParkWhiz', link: 'https://www.parkwhiz.com/', description: 'Find and reserve parking spots in advance' },
        { name: 'Google Maps', link: 'https://maps.google.com/', description: 'Navigation with Toronto transit integration' }
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
          english: 'Help! (French)',
          local: 'À l\'aide!',
          localLanguage: 'French'
        },
        {
          english: 'Thank you.',
          local: 'Thank you.',
          localLanguage: 'English'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Toronto has a relaxed, multicultural dress sense. Casual to business casual is appropriate for most venues. Dress for the weather - winters require heavy clothing, summers are warm and humid. No specific cultural restrictions, though upscale restaurants and venues may have dress codes.',
      behaviorNorms: [
        'Canadians are known for politeness - "please," "thank you," and "sorry" are commonly used.',
        'Queue properly and respect personal space in public areas.',
        'Hold doors open for others and be courteous in public spaces.',
        'Keep voices moderate on public transit - loud conversations are uncommon.',
        'Tipping is standard: 15-20% at restaurants, 10-15% for services.',
        'Multiculturalism is celebrated - Toronto is one of the world\'s most diverse cities.',
        'Environmental consciousness is valued - recycle and use reusable bags.',
        'Be punctual for appointments and social events.',
        'Remove shoes when entering homes unless told otherwise.',
        'Small talk about weather is common and expected social interaction.'
      ],
      perception: 'Solo female travelers are extremely common and completely accepted in Toronto. Canada\'s progressive culture and strong gender equality make it one of the most welcoming destinations for independent women. The city\'s multiculturalism means diverse travel styles are normal and respected. Solo female travel is viewed as empowering and completely unremarkable.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Canadian Dollar', code: 'CAD', exchangeRate: {
      usd: 0.7299,
      eur: 0.6219,
      gbp: 0.5431
    }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'French'],
    daytimeSafetyPercent: 82.3, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Toronto)
    nighttimeSafetyPercent: 59.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Toronto)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Toronto',
    // Red flags based on Numbeo 2025, Travel Ladies, and Toronto Police advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Toronto
    // https://travelladies.app/safety/canada
    // https://www.ctvnews.ca/toronto/article/be-mindful-toronto-police-warn-of-organized-thieves-ahead-of-pride-weekend/
    // https://www.cp24.com/local/toronto/2025/01/02/toronto-saw-a-rash-of-brazen-crime-that-shocked-and-unnerved-residents-last-year-is-the-city-still-safe/
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching (Tourist Areas, Transit)',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Organized Theft Rings (Events, Crowds)',
        frequency: 'Occasional',
        icon: 'Users',
      },
      {
        label: 'Car Break-ins & Auto Theft',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Street Harassment (Low, but Present)',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      },
    ],
    usefulTips: [
      {
        title: "Stay alert in tourist areas and on public transit",
        description: "Toronto is generally safe, but pickpocketing can occur in crowded places and on the subway. Keep your bag zipped and close to your body.",
        severity: "low",
        sourceName: "Travel Ladies (2025)",
        sourceUrl: "https://travelladies.app/safety/canada"
      },
      {
        title: "Use official taxis or rideshare apps at night",
        description: "Public transit is safe, but for late-night travel, use licensed taxis or rideshare apps like Uber or Lyft for extra security.",
        severity: "low",
        sourceName: "City of Toronto (2025)",
        sourceUrl: "https://www.toronto.ca/explore-enjoy/visitor-toronto/getting-around-the-city/"
      },
      {
        title: "Dress for the weather and layer up in winter",
        description: "Toronto winters can be very cold. Wear layers, a warm coat, hat, gloves, and waterproof boots to stay comfortable and safe.",
        severity: "low",
        sourceName: "City of Toronto (2025)",
        sourceUrl: "https://www.toronto.ca/explore-enjoy/visitor-toronto/information-resources-for-visitors/"
      },
      {
        title: "Take advantage of walkable neighborhoods and bike share",
        description: "Toronto is very walkable and has a large bike share network. Explore neighborhoods like the Distillery District, Kensington Market, and Queen West on foot or by bike.",
        severity: "low",
        sourceName: "Destination Toronto (2025)",
        sourceUrl: "https://www.destinationtoronto.com/plan-your-trip/transportation/"
      },
      {
        title: "Know emergency numbers and use 911 for urgent help",
        description: "In an emergency, call 911 for police, fire, or medical assistance. For non-emergencies, use 311 for city services and information.",
        severity: "low",
        sourceName: "City of Toronto (2025)",
        sourceUrl: "https://www.toronto.ca/explore-enjoy/visitor-toronto/information-resources-for-visitors/"
      }
    ],
  culturalSensitivity: {
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
    ]
  },
    // Add Women’s Confidence Score (Travel Ladies, Numbeo 2025)
    womensConfidenceScore: {
      score: 74.3,
      source: 'Travel Ladies 2025',
      sourceUrl: 'https://travelladies.app/safety/canada/toronto'
    },
    // Add Confidence by Activity (2025, aggregated from Travel Ladies, International Citizens, and recent solo female travel reviews)
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 92,
        source: 'Life Alofa 2025',
        sourceUrl: 'https://lifealofa.com/is-toronto-safe-for-solo-female-travelers/'
      },
      {
        label: "Nightlife",
        confidence: 80,
        source: 'TripAdvisor Forums 2025',
        sourceUrl: 'https://www.tripadvisor.com/ShowTopic-g155019-i55-k13115574-Is_Toronto_safe_for_a_solo_female_traveler-Toronto_Ontario.html'
      },
      {
        label: "Public Transport",
        confidence: 90,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/canada/toronto'
      },
      {
        label: "Dining Alone",
        confidence: 88,
        source: 'Travel Safe Abroad 2025',
        sourceUrl: 'https://www.travelsafe-abroad.com/canada/toronto/'
      }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Public transit during rush hour (80% report TTC harassment)', 'Some nightlife areas', 'Crowded public events', 'Downtown areas with homelessness issues'],
      reportingRate: 67,
      legalProtection: 'Strong legal framework with comprehensive protections. Canada has robust anti-harassment laws and victim support services. Toronto Police take harassment seriously with specialized units.',
      supportResources: [
        'Emergency Services: 911',
        'Assaulted Women\'s Helpline: 1-866-863-0511 (24/7)',
        'Toronto Rape Crisis Centre: 416-597-8808',
        'Victim Services Toronto: 416-808-7066',
        'U.S. Consulate Toronto: +1 416-595-1700'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Toronto General Hospital',
          address: '200 Elizabeth St, Toronto, ON M5G 2C4',
          phone: '+1 416-340-4800',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://www.uhn.ca/TorontoGeneral'
        },
        {
          name: 'Mount Sinai Hospital',
          address: '600 University Ave, Toronto, ON M5G 1X5',
          phone: '+1 416-596-4200',
          emergency: true,
          specialties: ['Women\'s Health', 'Emergency Medicine', 'Maternity Care'],
          link: 'https://www.sinaihealth.ca/'
        },
        {
          name: 'St. Michael\'s Hospital',
          address: '30 Bond St, Toronto, ON M5B 1W8',
          phone: '+1 416-360-4000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Care', 'General Medicine'],
          link: 'https://www.stmichaelshospital.com/'
        }
      ],
      pharmacies: [
        {
          name: 'Shoppers Drug Mart (Multiple Locations)',
          address: 'Throughout Toronto',
          phone: '+1 416-861-1239',
          hours: 'Mon-Sun 8:00-22:00 (varies by location)',
          emergency: false,
          link: 'https://www.shoppersdrugmart.ca/'
        },
        {
          name: 'Rexall Pharmacy (24/7 Location)',
          address: 'Various downtown locations',
          phone: '+1 416-924-7760',
          hours: '24/7 (select locations)',
          emergency: true,
          link: 'https://www.rexall.ca/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s College Hospital: +1 416-323-6400',
          'Mount Sinai Women\'s Health Centre: +1 416-586-4800',
          'Toronto East Health Network Women\'s Health: +1 416-461-8272'
        ],
        gynecologists: [
          'Dr. Smith at Women\'s College Hospital: +1 416-323-6400',
          'Dr. Johnson at Mount Sinai: +1 416-586-4800'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B widely available at Shoppers Drug Mart and Rexall',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all convenience stores, pharmacies, and grocery stores',
          'Comprehensive selection at major chains (Shoppers, Rexall)',
          'Free products available in many public buildings and universities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Toronto',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Cold weather injuries in winter (hypothermia, frostbite)',
        'Air quality issues during smog alerts in summer',
        'Seasonal allergies from tree pollen (spring)',
        'Heat-related illness during summer heatwaves'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'TTC (Subway/Bus/Streetcar)',
          safety: 8.8,
          recommendations: ['Generally safe with some harassment reports', 'Use during peak hours', 'Stay alert'],
          companies: ['Toronto Transit Commission'],
          link: 'https://www.ttc.ca/'
        },
        {
          type: 'Uber',
          safety: 9.1,
          recommendations: ['Excellent safety record', 'GPS tracking', 'Driver verification'],
          companies: ['Uber'],
          link: 'https://www.uber.com/ca/en/'
        },
        {
          type: 'Lyft',
          safety: 9.0,
          recommendations: ['Good safety features', 'Background checked drivers', 'In-app emergency'],
          companies: ['Lyft'],
          link: 'https://www.lyft.com/'
        },
        {
          type: 'Beck Taxi',
          safety: 8.7,
          recommendations: ['Licensed Toronto taxi company', 'Professional drivers', 'Regulated fares'],
          companies: ['Beck Taxi'],
          link: 'https://becktaxi.com/'
        }
      ],
      nightTravel: {
        safety: 8.4,
        warnings: [
          'Very safe overall but exercise caution in specific areas',
          'Avoid Parliament and Jarvis Streets area after dark',
          'Some parks have homeless encampments - stick to main paths',
          'TTC operates until 1:30 AM with Night Network buses after'
        ],
        alternatives: [
          'Uber and Lyft available 24/7',
          'TTC Night Network buses cover main routes',
          'Licensed taxis operate around the clock',
          'Generally safe to walk in most central areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'TTC',
          type: 'Public Transit',
          contact: 'TTC app',
          safety: 8.8
        },
        {
          name: 'Uber',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.1
        },
        {
          name: 'Beck Taxi',
          type: 'Licensed Taxi',
          contact: '+1 416-751-5555',
          safety: 8.7
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$45 - $80 CAD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level.',
        tip: 'Toronto offers excellent value for safety and quality of life. Mid-range budget provides premium safety and comfort.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$35-50 CAD',
          safetyNote: 'Excellent safety standards with modern facilities',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$80-120 CAD',
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
          method: 'TTC (PRESTO card)',
          cost: '$3.35 CAD/ride',
          safetyDescription: 'Generally safe with some harassment reports during rush hour.',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Uber/Lyft',
          cost: '$8-20 CAD/ride',
          safetyDescription: 'Very safe with GPS tracking and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxi',
          cost: '$12-25 CAD/ride',
          safetyDescription: 'Safe with professional drivers and regulated fares.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe in most areas with excellent lighting and low crime.',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Toronto offers excellent safety at all budget levels',
        'TTC day passes provide good value for multiple trips',
        'Many museums have free admission days',
        'Food courts and diverse cuisine options provide affordable meals',
        'Safety investment pays off in stress-free urban exploration'
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
        'Yorkville (upscale and extremely safe)',
        'Financial District (business core with security)',
        'Distillery District (tourist area with patrols)',
        'The Annex (vibrant and well-lit)',
        'Queen West (arts district with good lighting)',
        'Kensington Market (daytime safe, community feel)'
      ],
      womensOnly: [
        {
          name: 'HI Toronto Hostel',
          type: 'Hostel',
          features: ['Female-only dorms', 'Downtown location', '24/7 security', 'Kitchen facilities'],
          rating: 4.4
        },
        {
          name: 'YWCA Toronto',
          type: 'Residence',
          features: ['Women-only residence', 'Safe environment', 'Central location', 'Support services'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.4,
          comments: 'Toronto felt very safe as a solo female traveler. Canadians are incredibly polite and helpful.',
          date: '2025-01-15'
        },
        {
          rating: 4.5,
          safety: 8.2,
          comments: 'Great city for solo women. Just be aware of some downtown areas at night.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Canada has good WiFi infrastructure in public areas',
        'Most cafes and public spaces offer free WiFi',
        'Toronto Public Library provides secure free WiFi',
        'Use VPN for sensitive transactions on public networks'
      ],
      digitalScams: [
        'Romance scams on dating apps targeting tourists',
        'Fake accommodation booking websites',
        'Phishing emails claiming to be from banks',
        'Social media romance scams'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Canada',
        'NordVPN - reliable connection',
        'ProtonVPN - good for privacy'
      ],
      dataProtection: [
        'Strong data protection laws in Canada (PIPEDA)',
        'Safe to use digital payments and banking',
        'Keep copies of documents in secure cloud storage',
        'Canada has robust cybersecurity infrastructure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Homelessness in Downtown Core',
          location: 'Parliament and Jarvis Streets area',
          date: '2025-01-15',
          description: 'Increased homelessness in certain downtown areas - avoid after dark',
          severity: 'medium'
        },
        {
          type: 'TTC Harassment Reports',
          location: 'Public Transit System-wide',
          date: '2025-01-10',
          description: '80% of riders report some form of harassment - stay alert during rush hour',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Get a PRESTO card for all TTC travel - much more convenient than tokens',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 89
        },
        {
          tip: 'Toronto is incredibly multicultural - embrace the diversity and try different cuisines',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 76
        },
        {
          tip: 'Layer your clothing - Toronto weather can change quickly in any season',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 92
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
        'Strong multicultural acceptance and Canadian politeness culture',
        'Stay in central Toronto neighborhoods for best safety and convenience',
        'Be aware of current downtown homelessness issues in specific areas',
        'Take advantage of excellent healthcare system and social services'
      ]
    },
    crimeStatistics: {
      violentCrime: 2.95, // per 100,000 (2024 data - Canada has low violent crime)
      propertyCrime: 3542, // per 100,000 (2024 data)
      sexualAssault: 87, // per 100,000 (2024 data)
      kidnapping: 0.8, // per 100,000 (2024 data - very low)
      source: 'Statistics Canada & Toronto Police Service Annual Report',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Portable phone charger (essential for apps)',
        'Weather-appropriate clothing layers',
        'Comfortable walking shoes',
        'PRESTO card for transit',
        'Umbrella for unpredictable weather',
        'Light jacket for air conditioning in summer'
      ],
      safetyApps: [
        {
          name: 'TTC Watch',
          purpose: 'Toronto transit safety and real-time updates',
          rating: 4.5
        },
        {
          name: 'SafeTrek',
          purpose: 'Personal safety app with emergency contacts',
          rating: 4.3
        },
        {
          name: 'TTC',
          purpose: 'Official transit app with safety features',
          rating: 4.6
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
          number: '+1 416-808-2222',
          type: 'Toronto Police Non-Emergency'
        },
        {
          name: 'TTC Help',
          number: '+1 416-393-4636',
          type: 'Transit Information and Safety'
        },
        {
          name: 'Assaulted Women\'s Helpline',
          number: '1-866-863-0511',
          type: '24/7 Support Services'
        },
        {
          name: 'U.S. Consulate Toronto',
          number: '+1 416-595-1700',
          type: 'Consular Services'
        }
      ]
    },
  legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General Toronto',
          address: '360 University Ave, Toronto, ON M5G 1S4',
          phone: '+1 416-595-1700',
          link: 'https://ca.usembassy.gov/embassy-consulates/toronto/'
        },
        {
          name: 'British Consulate General Toronto',
          address: '777 Bay St #2800, Toronto, ON M5G 2G2',
          phone: '+1 416-593-1290',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-toronto'
        },
        {
          name: 'German Consulate General Toronto',
          address: '2 Bloor St E #2500, Toronto, ON M4W 1A8',
          phone: '+1 416-925-2813',
          link: 'https://toronto.diplo.de/'
        },
        {
          name: 'French Consulate General Toronto',
          address: '130 Bloor St W #400, Toronto, ON M5S 1N5',
          phone: '+1 416-925-8041',
          link: 'https://toronto.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate General Toronto',
          address: '200 Front St W #2401, Toronto, ON M5V 3K2',
          phone: '+1 416-977-1661',
          link: 'https://www.exteriores.gob.es/consulados/toronto'
        },
        {
          name: 'Australian Consulate General Toronto',
          address: '175 Bloor St E #1100, Toronto, ON M4W 3R8',
          phone: '+1 416-323-1155',
          link: 'https://canada.embassy.gov.au/'
        },
        {
          name: 'Canadian Government Services',
          address: 'Multiple Toronto locations',
          phone: '+1 800-622-6232',
          link: 'https://www.canada.ca/'
        },
        {
          name: 'Netherlands Consulate General Toronto',
          address: '1 Dundas St W #2106, Toronto, ON M5G 1Z3',
          phone: '+1 416-598-2520',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/canada'
        },
        {
          name: 'Danish Consulate General Toronto',
          address: '151 Bloor St W #210, Toronto, ON M5S 1S4',
          phone: '+1 416-962-5661',
          link: 'https://canada.um.dk/en'
        },
        {
          name: 'Swiss Consulate General Toronto',
          address: '154 University Ave #601, Toronto, ON M5H 3Y9',
          phone: '+1 416-593-5371',
          link: 'https://www.eda.admin.ch/toronto'
        },
        {
          name: 'Indian Consulate General Toronto',
          address: '365 Bloor St E #202, Toronto, ON M4W 3L4',
          phone: '+1 416-960-0751',
          link: 'https://www.cgitoronto.gov.in/'
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

export default toronto; 