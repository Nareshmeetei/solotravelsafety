import { Destination } from './types';

const bangkok: Destination = {
    city: 'Bangkok',
    country: 'Thailand',
    continent: 'Asia',
    countryCode: 'th',
    overallScore: 7.6,
    nightSafety: 7.2,
    publicTransit: 8.4,
    walkingAlone: 7.4,
    tags: ['insider-tips', 'safe'],
    bgColor: 'bg-blue-25',
    reviewCount: 743,
    lastUpdated: '1 day ago',
    harassmentRisk: 'moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 7.2,
        context: 'Bangkok is generally safe at night in main tourist areas like Sukhumvit, Silom, and Khao San Road. These areas are well-lit with police presence. However, avoid isolated sois (alleys) and be cautious in red-light districts. Solo women should use official taxis or ride-sharing apps after dark and stay in groups in nightlife areas.'
      },
      publicTransit: {
        score: 8.4,
        context: 'Bangkok\'s BTS Skytrain and MRT subway are modern, clean, and very safe. Buses can be crowded but are generally secure. River boats are scenic and safe. The transport system is well-monitored with security cameras. Women-only train cars are available during rush hours.'
      },
      walkingAlone: {
        score: 7.4,
        context: 'Walking alone during the day is generally safe in tourist areas and main districts. Bangkok can be chaotic with heavy traffic and uneven sidewalks. Exercise caution at night, especially in less touristed areas. Stick to main roads and well-lit areas after dark.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Sukhumvit',
          description: 'Main tourist and expat area with excellent restaurants, shopping, and nightlife. Very safe with good police presence, modern infrastructure, and active street life day and night. Great for solo female travelers.'
        },
        {
          name: 'Silom',
          description: 'Business district with upscale hotels, restaurants, and shopping. Very safe during day and evening. Well-patrolled area with good lighting and transport connections.'
        },
        {
          name: 'Siam',
          description: 'Shopping and entertainment hub around major malls like Siam Paragon and MBK. Very safe with heavy foot traffic, security guards, and excellent transport links.'
        },
        {
          name: 'Thonglor',
          description: 'Trendy upscale area popular with young professionals and expats. Very safe with hip cafes, restaurants, and boutiques. Good for solo travelers seeking a more local experience.'
        },
        {
          name: 'Phrom Phong',
          description: 'Quiet residential area with shopping centers and international restaurants. Very safe and less touristy, popular with expats and families.'
        },
        {
          name: 'Chatuchak',
          description: 'Famous weekend market area. Generally safe during market hours but can be very crowded. Watch belongings and stay hydrated.'
        }
      ],
      caution: ['Khao San Road late at night', 'Patpong red-light district', 'Some areas of Chinatown after dark', 'Isolated sois (alleys) at night'],
      avoid: ['Klong Toey area at night', 'Isolated riverside areas after dark', 'Unlicensed massage parlors', 'Extremely crowded areas during protests']
    },
    accommodations: [
      {
        name: 'The Sukhumvit Hotel',
        type: 'hotel',
        features: ['Central Sukhumvit location', '24/7 security', 'Female-friendly', 'BTS access'],
        rating: 8.8,
        notes: 'Modern hotel in safe Sukhumvit area with excellent security and easy transport access.',
        link: 'https://www.thesukhumvithotel.com/'
      },
      {
        name: 'Lub d Bangkok Silom',
        type: 'hostel',
        features: ['Female dorms', 'Modern design', 'Central location', 'Security'],
        rating: 8.6,
        notes: 'Contemporary hostel with women-only dorms in safe Silom business district.',
        link: 'https://www.lubd.com/hostels/bangkok-silom/'
      },
      {
        name: 'Mad Monkey Hostel Bangkok',
        type: 'hostel',
        features: ['Women-only floors', 'Khao San area', 'Social atmosphere'],
        rating: 8.2,
        notes: 'Popular backpacker hostel with female-only accommodations near Khao San Road.',
        link: 'https://madmonkeyhostels.com/mad-monkey-hostel-bangkok/'
      },
      {
        name: 'The Siam Heritage',
        type: 'hotel',
        features: ['Boutique hotel', 'Traditional Thai style', 'Safe location', 'Cultural experience'],
        rating: 8.9,
        notes: 'Elegant boutique hotel with traditional Thai design in secure central location.',
        link: 'https://www.thesiamheritage.com/'
      }
    ],
    alerts: [
      {
        title: 'Rainy Season Flooding',
        description: 'Bangkok experiences flooding during heavy rains (July-October). Monitor weather and avoid flood-prone areas.',
        location: 'Citywide',
        reportCount: 15,
        severity: 'low',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Modest dress required for temples - cover shoulders and knees
• Light, breathable clothing for hot humid weather
• Comfortable walking shoes with good grip for wet surfaces
• Avoid tight or revealing clothing to respect local culture
• Bring a light jacket for air-conditioned spaces`,
      firstTimers: `• Bangkok is generally safe for solo women with cultural awareness
• Learn basic Thai phrases - locals appreciate the effort
• Always negotiate taxi fares or use meter/ride-sharing apps
• Respect Buddhist culture and dress modestly at temples
• Stay hydrated and take breaks from the heat and crowds`,
      apps: [
        'Grab',
        'BTS SkyTrain',
        'Google Translate',
        'Travel Ladies',
        'My Safetipin'
      ],
      appLinks: [
        { name: 'Grab', link: 'https://www.grab.com/', description: 'Essential ride-sharing and delivery app for Bangkok' },
        { name: 'BTS SkyTrain', link: 'https://www.bts.co.th/', description: 'Official Bangkok BTS train app with routes and times' },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for Thai language translation' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'ช่วยด้วย! (Chuay duay!)',
          localLanguage: 'Thai'
        },
        {
          english: 'Call the police!',
          local: 'เรียกตำรวจ! (Riak tam-ruat!)',
          localLanguage: 'Thai'
        },
        {
          english: 'I need a doctor.',
          local: 'ฉันต้องการหมอ (Chan tong-gaan mor)',
          localLanguage: 'Thai'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'โรงพยาบาลใกล้ที่สุดอยู่ที่ไหน? (Rong-phayabaan glai tee-sut yoo tee-nai?)',
          localLanguage: 'Thai'
        },
        {
          english: 'I am lost.',
          local: 'ฉันหลงทาง (Chan long-taang)',
          localLanguage: 'Thai'
        },
        {
          english: 'Please leave me alone.',
          local: 'กรุณาปล่อยฉันไป (Ga-ru-naa bploy chan bpai)',
          localLanguage: 'Thai'
        },
        {
          english: 'I feel unsafe.',
          local: 'ฉันรู้สึกไม่ปลอดภัย (Chan roo-suek mai bplod-phai)',
          localLanguage: 'Thai'
        },
        {
          english: 'Can you help me?',
          local: 'คุณช่วยฉันได้ไหม? (Khun chuay chan dai mai?)',
          localLanguage: 'Thai'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress is essential, especially at temples. Cover shoulders and knees, remove shoes when entering temples and some shops. Light, conservative clothing is appropriate. Avoid tight or revealing clothing in public areas.',
      behaviorNorms: [
        'Wai greeting (hands together, slight bow) shows respect.',
        'Never touch someone\'s head or point feet at people/Buddha images.',
        'Remove shoes when entering temples, homes, and some shops.',
        'Dress modestly and behave respectfully at religious sites.',
        'Learn basic Thai phrases - greatly appreciated.',
        'Be patient and maintain composure - losing face is serious.',
        'Respect the monarchy - never criticize the royal family.',
        'Bargaining is expected at markets but be fair and respectful.',
        'Show respect to monks and Buddhist traditions.',
        'Eat with fork and spoon, not hands (except for fruit).'
      ],
      perception: 'Solo women travelers are welcome in Bangkok. Thai culture is generally hospitable to tourists, though cultural differences should be respected. Women can dine alone and explore independently, but modest dress and respectful behavior are important.',
    },
    bestTimeToVisit: {
      safestMonths: ['November-February'],
      events: 'Cool dry season offers best weather and fewer flooding risks. March-May is very hot, June-October is rainy season.'
    },
    emergencyInfo: {
      police: '191', fire: '199', medical: '1669', general: '191'
    },
    currency: {
      name: 'Thai Baht', code: 'THB', exchangeRate: {
      usd: 0.029,
      eur: 0.025,
      gbp: 0.022
    }, scamWarnings: [
        'Exchange money at banks or authorized money changers for best rates and avoid counterfeits.'
      ]
    },
    scamWarnings: [
      {
        title: 'Tuk-tuk and Taxi Overcharging',
        description: 'Always use the meter in taxis or negotiate price beforehand. Use Grab app for transparent pricing.',
        severity: 'high'
      },
      {
        title: 'Gem and Tailor Scams',
        description: 'Avoid unsolicited offers for cheap gems, suits, or shopping tours. These are usually scams.',
        severity: 'medium'
      },
      {
        title: 'Temple Closure Scam',
        description: 'Scammers claim temples are closed and offer alternative tours. Major temples are rarely closed.',
        severity: 'medium'
      },
      {
        title: 'Ping Pong Show Scams',
        description: 'Avoid aggressive touts offering adult shows. These often involve overcharging and unsafe situations.',
        severity: 'high'
      }
    ],
    languages: ['Thai', 'English (moderate level in tourist areas)'],
    daytimeSafetyPercent: 79.3,
    nighttimeSafetyPercent: 68.7,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bangkok',
    redFlags: [
      { label: 'Taxi/Tuk-tuk Overcharging', frequency: 'Very Common', icon: 'Car' },
      { label: 'Tourist Scams (Gems, Tailors)', frequency: 'Common', icon: 'AlertTriangle' },
      { label: 'Red-light District Issues', frequency: 'Occasional', icon: 'Shield' },
      { label: 'Flooding During Rainy Season', frequency: 'Seasonal', icon: 'Cloud' }
    ],
    culturalDos: [
      'Dress modestly, especially at temples.',
      'Learn basic Thai greetings.',
      'Respect Buddhist customs.',
      'Use the wai greeting.',
      'Remove shoes when required.'
    ],
    culturalDonts: [
      'Don\'t touch people\'s heads.',
      'Don\'t point feet at people or Buddha images.',
      'Don\'t criticize the royal family.',
      'Don\'t lose your temper publicly.',
      'Don\'t wear shoes in temples.'
    ],
    womensConfidenceScore: {
      score: 73.8,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Bangkok"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 84, source: 'Thailand Tourism Safety Report 2025', sourceUrl: 'https://www.tourismthailand.org/safety' },
      { label: 'Nightlife', confidence: 68, source: 'Solo Female Travel Thailand 2025', sourceUrl: 'https://www.solofemaleguide.com/thailand' },
      { label: 'Public Transport', confidence: 84, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Bangkok' },
      { label: 'Dining Alone', confidence: 87, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/bangkok/' }
    ],
    sexualHarassmentData: {
      prevalence: 'moderate',
      commonLocations: ['Red-light districts', 'Crowded markets', 'Public transport during peak hours', 'Tourist areas with aggressive touts'],
      reportingRate: 52,
      legalProtection: 'Moderate legal protections. Police may be hesitant to get involved in disputes with tourists. Cultural factors can affect reporting.',
      supportResources: [
        'Tourist Police: 1155 (English-speaking)',
        'Women and Children Protection Center: +66 2 513 9739',
        'Tourist Assistance Center: +66 2 356 0650'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Bumrungrad International Hospital',
          address: '33 Sukhumvit 3, Bangkok 10110',
          phone: '+66 2 667 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'International Patients', 'Women\'s Health'],
          link: 'https://www.bumrungrad.com/'
        }
      ],
      pharmacies: [
        {
          name: 'Boots Pharmacy',
          address: 'Multiple locations in shopping malls',
          phone: '+66 2 250 0909',
          hours: 'Daily 10:00-22:00',
          emergency: false,
          link: 'https://www.boots.co.th/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Bangkok: +66 2 667 1000',
          'Bangkok Women\'s Clinic: +66 2 252 8888'
        ],
        gynecologists: [
          'Dr. Siriporn - Bumrungrad Hospital: +66 2 667 1000'
        ],
        emergencyContraception: [
          'Available at major pharmacies',
          'Available at international hospitals'
        ],
        sanitaryProducts: [
          'Available at all convenience stores and pharmacies',
          'International brands available in shopping malls'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Japanese encephalitis if visiting rural areas',
        'Typhoid recommended',
        'Yellow fever if coming from affected countries'
      ],
      healthRisks: [
        'Dengue fever - use mosquito repellent',
        'Food poisoning - eat at busy, clean restaurants',
        'Heat exhaustion - stay hydrated',
        'Air pollution - consider masks during high pollution days'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Bangkok',
        address: '95 Wireless Road, Bangkok 10330',
        phone: '+66 2 205 4000',
        email: 'acsbkk@state.gov',
        emergency: '+66 2 205 4000',
        link: 'https://th.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Bangkok',
          address: '14 Wireless Road, Bangkok 10330',
          phone: '+66 2 305 8333',
          link: 'https://www.gov.uk/world/organisations/british-embassy-bangkok'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Bangkok',
        address: '95 Wireless Road, Bangkok 10330',
        phone: '+66 2 205 4000',
        email: 'acsbkk@state.gov',
        link: 'https://th.usembassy.gov/'
      },
      womensRights: [
        'Limited legal protections compared to Western standards',
        'Traditional gender roles still prevalent',
        'Domestic violence laws exist but enforcement varies',
        'Foreign women have same legal rights as Thai women'
      ],
      legalSupport: [
        'Tourist Police: 1155 (English-speaking)',
        'Legal Aid Thailand: +66 2 287 1500',
        'English-speaking lawyers through embassy'
      ],
      reportingProcedures: [
        'Report crimes to Tourist Police (1155) - English-speaking',
        'Regular police: 191',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'BTS Skytrain',
          safety: 9.0,
          recommendations: ['Very safe and efficient', 'Women-only cars during rush hour'],
          companies: ['BTS'],
          link: 'https://www.bts.co.th/'
        },
        {
          type: 'MRT Subway',
          safety: 8.8,
          recommendations: ['Clean, modern, and secure'],
          companies: ['MRT'],
          link: 'https://www.bangkokmetro.co.th/'
        },
        {
          type: 'Grab',
          safety: 8.7,
          recommendations: ['Use for all taxi needs', 'Transparent pricing'],
          companies: ['Grab'],
          link: 'https://www.grab.com/'
        }
      ],
      nightTravel: {
        safety: 7.0,
        warnings: [
          'Some taxi drivers may overcharge at night',
          'Avoid walking alone in less touristed areas',
          'Red-light districts can be unsafe for solo women'
        ],
        alternatives: [
          'Use Grab ride-sharing for late night transport',
          'BTS runs until midnight',
          'Stay in well-lit, busy areas',
          'Travel with others when possible'
        ]
      },
      verifiedProviders: [
        {
          name: 'BTS',
          type: 'Skytrain',
          contact: '+66 2 617 6000',
          safety: 9.0
        },
        {
          name: 'Grab',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.7
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception and security',
        'Electronic key card access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances'
      ],
      safeNeighborhoods: [
        'Sukhumvit',
        'Silom',
        'Siam',
        'Thonglor',
        'Phrom Phong'
      ],
      womensOnly: [
        {
          name: 'Lub d Bangkok Silom',
          type: 'Hostel',
          features: ['Female dorms', 'Modern design', 'Central location'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.4,
          safety: 8.2,
          comments: 'Felt safe in Sukhumvit area. Great transport connections and helpful staff.',
          date: '2025-01-18'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally reliable',
        'Free WiFi in shopping malls and cafes',
        'Use VPN for sensitive data',
        'Be cautious with public WiFi'
      ],
      digitalScams: [
        'Fake booking websites',
        'Romance scams on dating apps',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Thailand',
        'ExpressVPN - good for bypassing restrictions',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'Limited data protection laws',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Taxi Overcharging',
          location: 'Airport and tourist areas',
          date: '2025-01-19',
          description: 'Multiple reports of taxi drivers refusing to use meters',
          severity: 'medium'
        },
        {
          type: 'Gem Scam',
          location: 'Near major temples',
          date: '2025-01-17',
          description: 'Tourists approached with fake gem deals',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use Grab instead of street taxis to avoid overcharging',
          author: 'Solo Traveler',
          date: '2025-01-20',
          upvotes: 243
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Thailand is generally safe for travelers. Exercise normal precautions and be aware of common scams targeting tourists.',
      reason: 'Generally safe with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/thailand-travel-advisory.html',
      soloTravelerAdvice: [
        'Great destination for solo female travelers',
        'Cultural awareness is important',
        'Use official transport (Grab, BTS, MRT)',
        'Dress modestly and respect local customs'
      ]
    },
    crimeStatistics: {
      violentCrime: 8.7,
      propertyCrime: 2156,
      sexualAssault: 6.4,
      kidnapping: 0.3,
      source: 'Thai National Police Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft bag',
        'Portable WiFi device',
        'Mosquito repellent',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'Grab',
          purpose: 'Essential for transport and delivery',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Tourist Police',
          number: '1155',
          type: 'Tourist Assistance (English-speaking)'
        },
        {
          name: 'Emergency Services',
          number: '191',
          type: 'Police'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Bangkok Transport',
        description: 'Use BTS/MRT for efficient travel and Grab for taxis. Avoid street taxis that refuse to use meters. Download offline maps as backup.',
        severity: 'medium',
        sourceName: 'Bangkok Transport Authority',
        sourceUrl: 'https://www.bts.co.th/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$25 - $60 USD / day',
        description: 'Bangkok offers excellent value with great food, accommodation, and transport options.',
        tip: 'Budget travelers can live comfortably while mid-range provides luxury at low cost.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$8-20',
          safetyNote: 'Choose hostels in safe areas like Sukhumvit or Silom',
          safetyLevel: 'medium-high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$30-60',
          safetyNote: 'Excellent security and amenities',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'BTS/MRT',
          cost: '$1-3/ride',
          safetyDescription: 'Very safe and efficient',
          safetyLevel: 'high'
        },
        {
          method: 'Grab',
          cost: '$2-8/ride',
          safetyDescription: 'Safe with transparent pricing',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Use BTS/MRT day passes for transport savings',
        'Eat at street food stalls and local restaurants',
        'Shop at weekend markets for bargains',
        'Many temples and attractions are free or low-cost'
      ]
    }
};

export default bangkok;