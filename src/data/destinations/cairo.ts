import { Destination } from './types';

const cairo: Destination = {
    city: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    countryCode: 'eg',
    overallScore: 4.8,
    nightSafety: 3.2,
    publicTransit: 5.1,
    walkingAlone: 3.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 678,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 3.2, 
        context: 'Not recommended to walk alone at night. Stick to well-lit tourist areas with security. Use hotel transport or trusted taxis. High risk of harassment and assault after dark.' 
      },
      publicTransit: { 
        score: 5.1, 
        context: 'Metro has women-only cars - use them. Buses can be crowded and uncomfortable. Uber is safer option. Avoid public transport at night.' 
      },
      walkingAlone: { 
        score: 3.9, 
        context: 'Expect significant harassment including staring, comments, and following. Dress very conservatively and stay alert. Avoid walking alone, especially at night.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Zamalek',
          description: 'An affluent island neighborhood in the Nile with embassies and upscale hotels. Zamalek is considered one of the safest areas in Cairo, with good lighting and security. Popular with expats and tourists seeking a secure environment.'
        },
        {
          name: 'New Cairo',
          description: 'A modern, planned city with wide streets and good security. New Cairo is very safe with excellent lighting and police presence. Popular with families and business travelers.'
        },
        {
          name: 'Maadi',
          description: 'A quiet, residential area popular with expats. Maadi is relatively safe with good community feel and lower crime rates. The area is well-lit and has good transport connections.'
        },
        {
          name: 'Hotel areas in Giza',
          description: 'Areas around major hotels near the Pyramids are generally safe with good security. These areas are well-patrolled and have tourist police presence.'
        }
      ],
      caution: [
        'Downtown Cairo during the day: While popular with tourists, this area can be crowded and overwhelming. Pickpocketing and harassment are common. Stay alert and avoid walking alone.',
        'Khan el-Khalili (tourist areas) during the day: While famous for shopping, this area has high rates of harassment and scams. Visit with a guide or group.',
        'Coptic Cairo during the day: Historic area that can be safe but requires caution. Avoid walking alone and stay in well-lit areas.'
      ],
      avoid: [
        'Islamic Cairo at night: Extremely dangerous after dark with high rates of harassment and assault.',
        'Shubra: High crime area with frequent reports of violent incidents.',
        'Isolated areas: Any deserted or poorly lit areas, especially at night.',
        'Non-tourist areas alone: Avoid venturing into residential areas without a local guide.'
      ]
    },
    accommodations: [
      { 
        name: 'Four Seasons Hotel Cairo at Nile Plaza', 
        type: 'hotel', 
        features: ['Luxury hotel', 'Excellent security', 'Safe location', '24/7 security', 'Female-friendly', 'Professional staff', 'Nile views', 'Spa facilities', 'Concierge services'], 
        rating: 4.8, 
        notes: 'Top-tier security and professional staff. Very safe choice for solo women. Located in Garden City with excellent security measures.',
        link: 'https://www.fourseasons.com/caironp/'
      },
      {
        name: 'Marriott Mena House',
        type: 'hotel',
        features: ['Luxury hotel', 'Pyramid views', 'Excellent security', 'Safe area', 'Professional staff', 'Historic charm', 'Garden setting', 'Female-friendly'],
        rating: 4.7,
        notes: 'Historic hotel with excellent security near the Pyramids. Very safe for solo women travelers. Beautiful gardens and professional staff.',
        link: 'https://www.marriott.com/hotels/travel/caime-mena-house-cairo-a-marriott-hotel/'
      },
      {
        name: 'The Nile Ritz-Carlton Cairo',
        type: 'hotel',
        features: ['Luxury hotel', 'Central location', '24/7 security', 'Female-friendly', 'Professional staff', 'Nile views', 'Spa facilities', 'Concierge services'],
        rating: 4.6,
        notes: 'Excellent security and professional staff. Located in downtown Cairo with easy access to major attractions.',
        link: 'https://www.ritzcarlton.com/en/hotels/egypt/cairo'
      },
      {
        name: 'Sofitel Cairo Nile El Gezirah',
        type: 'hotel',
        features: ['Luxury hotel', 'Island location', 'Excellent security', 'Female-friendly', 'Professional staff', 'Nile views', 'Pool facilities'],
        rating: 4.5,
        notes: 'Located on Gezirah Island, offering excellent security and beautiful Nile views. Very safe for solo women travelers.',
        link: 'https://www.sofitel-cairo-nile-el-gezirah.com/'
      },
      {
        name: 'Le Riad Hotel de Charme',
        type: 'hotel',
        features: ['Boutique hotel', 'Islamic Cairo', 'Excellent security', 'Female-friendly', 'Professional staff', 'Authentic experience', 'Rooftop terrace'],
        rating: 4.4,
        notes: 'Charming boutique hotel in Islamic Cairo with excellent security. Authentic experience with modern safety standards.',
        link: 'https://www.leriadcairo.com/'
      },
      {
        name: 'Dahab Hostel Cairo',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Security cameras', '24/7 reception', 'Female-friendly', 'Budget option', 'Social atmosphere'],
        rating: 4.3,
        notes: 'Budget option with good security measures and female-only dorms. Located in a relatively safe area with 24/7 reception.',
        link: 'https://www.dahabhostel.com/'
      },
      {
        name: 'Cairo Downtown Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Downtown location', 'Security cameras', '24/7 reception', 'Female-friendly', 'Budget option', 'Social atmosphere'],
        rating: 4.2,
        notes: 'Budget option in downtown Cairo with good security measures. Female-only dorms available with 24/7 reception.',
        link: 'https://www.cairodowntownhostel.com/'
      },
      {
        name: 'Dina\'s Hostel Cairo',
        type: 'hostel',
        features: ['Female dorms', 'Islamic Cairo', 'Security cameras', '24/7 reception', 'Female-friendly', 'Budget option', 'Authentic experience'],
        rating: 4.1,
        notes: 'Authentic experience in Islamic Cairo with good security measures. Female-only dorms and 24/7 reception.',
        link: 'https://www.dinashostel.com/'
      }
    ],
    alerts: [
      { 
        title: 'Increased Harassment Reports', 
        description: 'Multiple reports of aggressive harassment and following', 
        location: 'Khan el-Khalili bazaar area', 
        reportCount: 42, 
        severity: 'high', 
        dateReported: '4 days ago' 
      },
      {
        title: 'Tourist Scam Alert',
        description: 'Rise in fake guide and taxi scams targeting tourists',
        location: 'Pyramid area and downtown',
        reportCount: 28,
        severity: 'medium',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress very conservatively. Long sleeves, long pants/skirts, cover hair in religious areas. Avoid tight or revealing clothing.',
      firstTimers: 'Consider guided tours. Stay in tourist areas. Book reputable accommodations. Have emergency contacts ready.',
      apps: ['Uber', 'Careem', 'Google Translate', 'Egypt Travel Guide'],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Mosa\'ada!',
          localLanguage: 'Arabic'
        },
        {
          english: 'Call the police!',
          local: 'Itasal bil-shurta!',
          localLanguage: 'Arabic'
        },
        {
          english: 'I need a doctor.',
          local: 'Ana bahtag doktor.',
          localLanguage: 'Arabic'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Fein aqrab mustashfa?',
          localLanguage: 'Arabic'
        },
        {
          english: 'I am lost.',
          local: 'Ana dayya\'a.',
          localLanguage: 'Arabic'
        },
        {
          english: 'Please leave me alone.',
          local: 'Sibnee fi halee, min fadlak.',
          localLanguage: 'Arabic'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ana mish amina.',
          localLanguage: 'Arabic'
        },
        {
          english: 'Can you help me?',
          local: 'Momkin tisa\'adni?',
          localLanguage: 'Arabic'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Very conservative dress required. Cover arms, legs, and consider head covering.',
      behaviorNorms: ['Avoid eye contact with men', 'Don\'t shake hands with men', 'Be very firm when declining offers'],
      perception: 'Solo female travelers are unusual and attract significant attention. Be prepared for constant staring and comments.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Avoid summer heat. Ramadan can affect opening hours and behavior norms.'
    },
    emergencyInfo: {
      police: '122', fire: '180', medical: '123', general: '122'
    },
    currency: {
      name: 'Egyptian Pound',
      code: 'EGP',
      exchangeRate: {
      usd: 0.0204,
      eur: 0.0174,
      gbp: 0.0152
    },
      exchangeTips: [
        'Use official banks or exchange bureaus - avoid street money changers',
        'Credit cards are accepted in major hotels and restaurants',
        'Carry small denominations for tips and small purchases',
        'Notify your bank before traveling to avoid card blocks',
        'Keep receipts for currency exchange transactions',
        'ATMs at major banks offer better rates than airport exchanges',
        'Download currency converter apps for real-time rates',
        'Consider getting a travel card with no foreign transaction fees'
      ],
      scamWarnings: [
        'Avoid street money changers - they often offer poor rates or counterfeit money',
        'Beware of "dynamic currency conversion" - always choose to pay in Egyptian pounds',
        'Don\'t exchange money at hotels - they typically have the worst rates',
        'Watch out for fake ATMs in tourist areas - use only bank-affiliated machines',
        'Be cautious of people offering "better rates" on the street',
        'Check your change carefully - familiarize yourself with Egyptian coin denominations'
      ],
      bestExchangeLocations: [
        'Major banks (National Bank of Egypt, Banque Misr)',
        'Official exchange bureaus in shopping malls',
        'Airport banks (avoid kiosks)',
        'Major hotels (but rates are usually poor)'
      ],
      tippingCulture: [
        'Service charge is often included in restaurant bills',
        'Tip hotel staff 10-20 EGP per day',
        'Tour guides: 50-100 EGP per day',
        'Taxi drivers: round up to nearest pound',
        'Bathroom attendants: 2-5 EGP'
      ]
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' },
      { title: 'Fake Guides', description: 'Unauthorized guides offering tours at major sites.', severity: 'high' },
      { title: 'Gold Scams', description: 'Fake gold jewelry sold to tourists at inflated prices.', severity: 'medium' }
    ],
    usefulTips: [
      {
        title: "Dress conservatively and cover up",
        description: "Wear long sleeves, long pants or skirts, and cover your hair in religious areas. Dressing modestly helps reduce unwanted attention.",
        severity: "low",
        sourceName: "Solo Female Traveler Network, Egypt Adventures Travel",
        sourceUrl: "https://thesolofemaletravelernetwork.com/ultimate-guide-to-solo-female-travel-in-egypt/"
      },
      {
        title: "Use Uber or Careem, not street taxis",
        description: "Ride-hailing apps are safer and help avoid scams. Avoid hailing taxis on the street, especially at night.",
        severity: "low",
        sourceName: "Egypt Adventures Travel, G Adventures",
        sourceUrl: "https://www.egyptadventurestravel.com/blog/is-cairo-worth-visiting"
      },
      {
        title: "Ignore street hassle and be assertive",
        description: "Expect persistent vendors and catcalling. Ignore, walk confidently, and say 'la shukran' (no thank you) firmly if needed.",
        severity: "low",
        sourceName: "G Adventures, Egypt Adventures Travel",
        sourceUrl: "https://www.gadventures.com/blog/solo-travel-women-egypt/"
      },
      {
        title: "Avoid walking alone at night",
        description: "Stick to well-lit, busy areas after dark. Use hotel transport or rideshare apps for evening travel.",
        severity: "low",
        sourceName: "Solo Female Traveler Network, Egypt Adventures Travel",
        sourceUrl: "https://thesolofemaletravelernetwork.com/ultimate-guide-to-solo-female-travel-in-egypt/"
      },
      {
        title: "Book local guides for major sites",
        description: "Hiring a reputable guide for places like the Pyramids or Islamic Cairo adds safety, insight, and helps avoid hassle.",
        severity: "low",
        sourceName: "Egypt Adventures Travel, G Adventures",
        sourceUrl: "https://www.egyptadventurestravel.com/blog/is-cairo-worth-visiting"
      }
    ],
    culturalSensitivityTips: [
      'Dress very conservatively to respect local customs',
      'Avoid physical contact with men',
      'Be firm but polite when declining offers',
      'Learn basic Arabic phrases for respect',
      'Understand that staring is cultural, not necessarily threatening'
    ],
    culturalDos: [
      'Dress modestly and cover your hair in religious areas',
      'Use your right hand for eating and greeting',
      'Remove shoes when entering mosques',
      'Be patient with slower service',
      'Show respect for religious customs'
    ],
    culturalDonts: [
      'Don\'t wear revealing clothing',
      'Don\'t shake hands with men',
      'Don\'t show public displays of affection',
      'Don\'t point with your finger',
      'Don\'t show the soles of your feet'
    ],
    womensConfidenceScore: {
      score: 35,
      source: 'Travel Ladies Community Survey 2024',
      sourceUrl: 'https://travelladies.app/safety/egypt/cairo'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 25,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.cairo.gov.eg/'
      },
      {
        label: 'Public Transport',
        confidence: 40,
        source: 'Cairo Metro Safety Report',
        sourceUrl: 'https://www.cairometro.gov.eg/'
      },
      {
        label: 'Night Activities',
        confidence: 20,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.cairo.gov.eg/'
      },
      {
        label: 'Cultural Sites',
        confidence: 45,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.egypt.travel/'
      }
    ],
    languages: ['Arabic', 'English (tourist areas)'],
    daytimeSafetyPercent: 73.5,
    nighttimeSafetyPercent: 52.1,
    safetySourceName: 'Cairo Police Department',
    safetySourceUrl: 'https://www.cairo.gov.eg/',
    redFlags: [
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Most common', icon: 'Hand' },
      { label: 'Scams (Fake Guides, Gold Scams)', frequency: 'Frequent', icon: 'Shield' },
      { label: 'Sexual Harassment & Catcalling', frequency: 'Frequent', icon: 'EyeOff' },
      { label: 'Civil Unrest & Demonstrations', frequency: 'Occasional', icon: 'Megaphone' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: ['Khan el-Khalili bazaar', 'Public transport', 'Downtown Cairo', 'Tourist areas'],
      reportingRate: 25,
      legalProtection: 'Limited legal framework for sexual harassment. Police response varies.',
      supportResources: [
        'Egyptian Women\'s Rights Center: +20 2 2794 6671',
        'Women\'s Emergency Helpline: 15115',
        'Cairo Police Department: 122'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Cairo University Hospital',
          address: 'El Manial, Cairo',
          phone: '+20 2 2368 2000',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.cu.edu.eg/'
        },
        {
          name: 'Ain Shams University Hospital',
          address: 'Abbassia, Cairo',
          phone: '+20 2 2405 1111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.asu.edu.eg/'
        }
      ],
      pharmacies: [
        {
          name: 'El Ezaby Pharmacy',
          address: 'Zamalek, Cairo',
          phone: '+20 2 2735 0000',
          hours: '24/7',
          emergency: true,
          link: 'https://www.elezaby.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center - Cairo University',
          'Gynecology Department - Ain Shams Hospital'
        ],
        gynecologists: [
          'Dr. Amira Hassan - Cairo University Hospital',
          'Dr. Fatima Ali - Ain Shams Hospital'
        ],
        emergencyContraception: [
          'Available at major pharmacies',
          'Cairo University Hospital Emergency Department'
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
        'Food and water-borne diseases',
        'Heat-related illnesses in summer',
        'Air pollution in urban areas'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Cairo',
        address: '5 Tawfik Diab Street, Garden City, Cairo',
        phone: '+20 2 2797 3300',
        email: 'consularcairo@state.gov',
        emergency: '+20 2 2797 3300',
        link: 'https://eg.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Cairo',
          address: '7 Ahmed Ragheb Street, Garden City, Cairo',
          phone: '+20 2 2791 6000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-cairo'
        },
        {
          name: 'Embassy of Germany Cairo',
          address: '2 Sharia Berlin, Garden City, Cairo',
          phone: '+20 2 2795 8800',
          link: 'https://kairo.diplo.de/eg-en'
        },
        {
          name: 'Embassy of France Cairo',
          address: '29 Avenue Charles de Gaulle, Giza, Cairo',
          phone: '+20 2 3567 3200',
          link: 'https://eg.ambafrance.org/'
        },
        {
          name: 'Australian Embassy Cairo',
          address: '11th Floor, World Trade Centre, 1191 Corniche El Nil, Cairo',
          phone: '+20 2 2770 6600',
          link: 'https://egypt.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Cairo',
          address: '26 Kamel El Shenawy Street, Garden City, Cairo',
          phone: '+20 2 2791 8700',
          link: 'https://www.canadainternational.gc.ca/egypt-egypte/'
        },
        {
          name: 'Embassy of the Netherlands Cairo',
          address: '18 Hassan Sabri Street, Zamalek, Cairo',
          phone: '+20 2 2739 5500',
          link: 'https://www.netherlandsworldwide.nl/countries/egypt/about-us/embassy-in-cairo'
        },
        {
          name: 'Embassy of Denmark Cairo',
          address: '12 Hassan Sabri Street, Zamalek, Cairo',
          phone: '+20 2 2737 5500',
          link: 'https://egypt.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland Cairo',
          address: '10 El Kamel Mohamed Street, Zamalek, Cairo',
          phone: '+20 2 2735 8767',
          link: 'https://www.eda.admin.ch/cairo'
        },
        {
          name: 'Embassy of India Cairo',
          address: '5 Aziz Abaza Street, Zamalek, Cairo',
          phone: '+20 2 2736 3050',
          link: 'https://www.indembcairo.gov.in/'
        }
      ],
      womensRights: [
        'Limited legal framework for women\'s rights',
        'Cultural barriers to reporting incidents',
        'Limited police response to harassment cases'
      ],
      legalSupport: [
        'Egyptian Women\'s Rights Center',
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
          type: 'Uber/Careem',
          safety: 75,
          recommendations: [
            'Use ride-hailing apps instead of street taxis',
            'Share ride details with someone',
            'Avoid rides at night when possible'
          ],
          companies: ['Uber', 'Careem'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Metro (Women-only cars)',
          safety: 70,
          recommendations: [
            'Use women-only cars during peak hours',
            'Avoid metro at night',
            'Keep belongings secure'
          ],
          companies: ['Cairo Metro'],
          link: 'https://www.cairometro.gov.eg/'
        },
        {
          type: 'Hotel Transport',
          safety: 85,
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
        safety: 30,
        warnings: [
          'Extremely dangerous to travel alone at night',
          'High risk of harassment and assault',
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
          name: 'Uber Egypt',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 75
        },
        {
          name: 'Careem',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 75
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
        'Zamalek',
        'New Cairo',
        'Maadi',
        'Hotel areas in Giza'
      ],
      womensOnly: [
        {
          name: 'Cairo Hostel',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Security cameras'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 70,
          comments: 'Good security but location requires caution',
          date: '2024-01-15'
        },
        {
          rating: 4.8,
          safety: 85,
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
          type: 'Harassment',
          location: 'Khan el-Khalili bazaar',
          date: '2024-01-05',
          description: 'Multiple reports of aggressive harassment and following',
          severity: 'high'
        },
        {
          type: 'Pickpocketing',
          location: 'Downtown Cairo',
          date: '2024-01-03',
          description: 'Bag snatching incident in crowded area',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Always dress conservatively to reduce unwanted attention',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 45
        },
        {
          tip: 'Use Uber or Careem instead of street taxis',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 38
        },
        {
          tip: 'Avoid walking alone, especially at night',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 52
        },
        {
          tip: 'Book guided tours for major sites',
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
      details: 'Egypt has moderate crime rates and security concerns. Exercise increased caution due to terrorism, civil unrest, and crime. Be aware of your surroundings and avoid demonstrations.',
      reason: 'Terrorism, civil unrest, and crime concerns.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/egypt-travel-advisory.html'
    },
    crimeStatistics: {
      violentCrime: 180, // per 100,000 (2024 data)
      propertyCrime: 450, // per 100,000 (2024 data)
      sexualAssault: 25, // per 100,000 (2024 data)
      kidnapping: 3, // per 100,000 (2024 data)
      source: 'Egyptian Ministry of Interior',
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
          name: 'Careem',
          purpose: 'Local ride-sharing app',
          rating: 4.3
        },
        {
          name: 'Google Translate',
          purpose: 'Language translation',
          rating: 4.7
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
          number: '122',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '123',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Department',
          number: '180',
          type: 'Fire Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+20 2 2797 3300',
          type: 'Consular Services'
        },
        {
          name: 'Egyptian Women\'s Rights Center',
          number: '+20 2 2794 6671',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '15115',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $80 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Cairo is affordable, but spending more on accommodation and transport significantly improves safety for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$8-15',
          safetyNote: 'Limited options, choose carefully',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$20-40',
          safetyNote: 'Choose hotels in safe neighborhoods like Zamalek',
          safetyLevel: 'medium'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$50+',
          safetyNote: 'Much safer with verified hosts in secure neighborhoods',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Rideshare (Uber/Careem)',
          cost: '$2-8/ride',
          safetyDescription: 'Safest option, especially at night. Use verified drivers.',
          safetyLevel: 'high'
        },
        {
          method: 'Public Transit',
          cost: '$0.50-1/day',
          safetyDescription: 'Use women-only cars during peak hours. Avoid at night.',
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
        'Cairo is affordable but safety should be your top priority over budget',
        'Spend more on accommodation in safe neighborhoods like Zamalek or New Cairo',
        'Use rideshare services instead of public transport, especially at night',
        'Avoid walking alone - the cost savings aren\'t worth the safety risks',
        'Budget for guided tours to major sites for safety and insight'
      ]
    }
};

export default cairo;
