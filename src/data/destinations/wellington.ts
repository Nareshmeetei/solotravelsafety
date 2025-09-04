import { Destination } from './types';

const wellington: Destination = {
    city: 'Wellington',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 110,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    description: 'Is Wellington safe for solo female travelers? Wellington stands as one of the world\'s safest capitals for women traveling alone, with New Zealand ranking #4 globally for gender equality and #2 for overall peace. This stunning harbor city combines breathtaking natural beauty with exceptional urban safety, world-renowned coffee culture, and genuine Kiwi hospitality. With its compact walkable center, outstanding public transport, and progressive cultural values that celebrate female independence, Wellington offers solo female travelers an ideal blend of urban sophistication and comprehensive security.',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.3, 
        context: 'Wellington maintains excellent night safety with comprehensive street lighting throughout the compact city center and residential areas. Solo female travelers consistently report feeling secure after dark, particularly in Te Aro, Mount Victoria, and Thorndon districts. The main precaution involves Courtenay Place late at night (post-midnight weekends) where alcohol-related incidents occasionally occur, though violent crime remains extremely rare. Police response times average 8-12 minutes with visible community policing throughout central areas.'
      },
      publicTransit: { 
        score: 8.7, 
        context: 'Metlink\'s bus, train, and Cable Car system achieves exceptional safety standards with comprehensive CCTV monitoring, professional driver oversight, and emergency communication systems. The system operates with 95% reliability and maintains excellent cleanliness standards. Transit security and police patrol regularly, harassment incidents are virtually non-existent. The compact network means short travel times and frequent services, minimizing waiting in isolated areas.'
      },
      walkingAlone: { 
        score: 8.5, 
        context: 'Walking alone in Wellington benefits from New Zealand\'s cultural values of egalitarianism and respect for personal boundaries. The compact city features excellent pedestrian infrastructure, comprehensive lighting, and active street life during most hours. Solo female travelers report minimal catcalling or harassment thanks to Kiwi cultural norms. The main considerations involve Wellington\'s famous wind (secure loose items) and some hilly terrain requiring proper footwear.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Te Aro',
          description: "Wellington's cultural and entertainment heart with excellent safety record. Well-lit streets, active nightlife, and frequent police patrols. Perfect for solo female travelers with abundant cafes, galleries, and shops. Very walkable with good public transport connections."
        },
        {
          name: 'Mount Victoria',
          description: 'Charming hillside suburb offering stunning harbor views and safe residential streets. Popular with young professionals and families. Excellent safety record with well-maintained paths and good lighting. Great for solo travelers seeking quiet accommodation near the city.'
        },
        {
          name: 'Kelburn',
          description: 'University area with young, vibrant atmosphere and excellent safety standards. Home to Victoria University with active student life and community feel. Well-connected by cable car and buses. Very safe for solo female travelers.'
        },
        {
          name: 'Thorndon',
          description: 'Historic parliamentary district with excellent security due to government buildings. Upscale area with beautiful heritage architecture, safe streets, and professional atmosphere. Ideal for solo travelers interested in politics and history.'
        },
        {
          name: 'Oriental Bay',
          description: 'Waterfront suburb with beautiful beach and promenade. Very safe with regular foot traffic and excellent lighting. Popular for morning runs and evening walks. Great accommodation options for solo travelers seeking scenic location.'
        },
        {
          name: 'Newtown',
          description: 'Eclectic bohemian neighborhood with diverse community and good safety record. Excellent cafes, street art, and alternative culture. Generally safe with active street life, though stick to main streets at night.'
        }
      ],
      caution: [
        'Courtenay Place late at night: Main nightlife strip can get rowdy after midnight on weekends. Generally safe but exercise caution with intoxicated individuals.',
        'Some industrial areas of Petone: Quiet after business hours with less foot traffic. Not unsafe but less ideal for solo evening walks.',
        'Wellington Railway Station area late at night: Can have some homeless individuals and reduced activity. Generally safe but stay alert.'
      ],
      avoid: [
        'Wellington is exceptionally safe overall. No truly dangerous areas for tourists.',
        'Isolated sections of Town Belt reserves very late at night - stick to well-lit, populated paths in parks after dark.'
      ]
    },
    accommodations: [
      {
        name: 'YHA Wellington City',
        type: 'hostel',
        features: ['Female-only dorms', 'Central Te Aro location', '24/7 reception', 'Kitchen facilities'],
        rating: 8.5,
        notes: 'Top choice for solo female travelers. Excellent safety record, international atmosphere, and perfect location for exploring Wellington safely.',
        link: 'https://www.yha.co.nz/hostels/north-island/wellington-city/'
      },
      {
        name: 'InterContinental Wellington',
        type: 'hotel',
        features: ['Luxury waterfront', '24/7 security', 'Premium location', 'Concierge service'],
        rating: 9.0,
        notes: 'Premium option with exceptional security and service. Perfect for solo female travelers seeking luxury with top-tier safety in prime location.',
        link: 'https://www.ihg.com/intercontinental/hotels/gb/en/wellington/wlght/hoteldetail'
      },
      {
        name: 'Bolton Hotel Wellington',
        type: 'hotel',
        features: ['Apartment-style suites', 'Safe Thorndon location', 'Kitchen facilities', 'Fitness center'],
        rating: 8.8,
        notes: 'Excellent for extended stays with apartment-style living. Very safe location near Parliament with professional atmosphere.',
        link: 'https://www.boltonhotel.co.nz/'
      },
      {
        name: 'Ohtel Wellington',
        type: 'hotel',
        features: ['Modern design', 'Central location', 'Female-friendly policies', 'Rooftop bar'],
        rating: 8.7,
        notes: 'Contemporary hotel with excellent safety standards and vibrant atmosphere. Perfect for solo female travelers seeking modern amenities.',
        link: 'https://ohtelwellington.co.nz/'
      },
      {
        name: 'Hotel Wellington',
        type: 'hotel',
        features: ['Historic charm', 'Cuba Street location', 'Art Deco style', '24/7 reception'],
        rating: 8.6,
        notes: 'Boutique hotel in vibrant Cuba Street with excellent safety and character. Perfect for solo female travelers seeking authentic Wellington atmosphere.',
        link: 'https://www.hotelwellington.co.nz/'
      },
      {
        name: 'Nomads Capital Backpackers',
        type: 'hostel',
        features: ['Female dorms', 'Courtenay Place location', 'Social atmosphere', 'Security lockers'],
        rating: 8.3,
        notes: 'Popular with international solo travelers. Good safety standards in heart of entertainment district. Vibrant social scene with fellow travelers.',
        link: 'https://www.nomadsworld.com/backpacker-hostels/new-zealand/wellington/capital/'
      },
      {
        name: 'CityLife Wellington',
        type: 'hotel',
        features: ['Apartment hotel', 'Lambton Quay location', 'Kitchen facilities', 'Fitness center'],
        rating: 8.4,
        notes: 'Modern apartment-style hotel in safe business district. Excellent for solo female travelers wanting independence with hotel services.',
        link: 'https://www.heritagehotels.co.nz/citylife-wellington/'
      },
      {
        name: 'Travelodge Wellington',
        type: 'hotel',
        features: ['Budget-friendly', 'Central location', 'Modern facilities', '24/7 reception'],
        rating: 8.2,
        notes: 'Reliable budget hotel with consistent safety standards in central Wellington. Great value for solo female travelers seeking comfort and security.',
        link: 'https://www.travelodge.com.au/hotels/wellington/'
      },
      {
        name: 'Copthorne Hotel Wellington Oriental Bay',
        type: 'hotel',
        features: ['Waterfront location', 'Oriental Bay', 'Harbor views', 'Professional service'],
        rating: 8.5,
        notes: 'Scenic waterfront hotel with excellent safety in beautiful Oriental Bay. Perfect for solo female travelers wanting harbor views with security.',
        link: 'https://www.millenniumhotels.com/en/wellington/copthorne-hotel-wellington-oriental-bay/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Layer clothing for Wellington's famously changeable weather
• Windproof jacket essential - Wellington is known as the \"Windy City\"
• Waterproof shoes and clothing for frequent rain showers
• Comfortable walking shoes for Wellington's hilly terrain
• Casual dress perfectly acceptable everywhere
• Warm layers needed even in summer due to wind chill`,
      firstTimers: `• Is Wellington safe for solo female travelers? Absolutely - Wellington is perfect for first-time solo female travelers with exceptional safety and welcoming Kiwi culture
• English is the primary language with friendly Kiwi hospitality
• Download Metlink app for public transport navigation
• New Zealand uses contactless payments extensively
• Emergency number 111 works for all services (police, fire, medical)
• Kiwis are known for being helpful and down-to-earth - don't hesitate to ask for help`,
      apps: [
        'Metlink',
        'MetService',
        'bSafe',
        'NomadHer',
        'Snapper',
        'AdventureSmart',
        'WellingtonNZ',
        'Uber'
      ],
      appLinks: [
        { name: 'Metlink', link: 'https://www.metlink.org.nz/', description: 'Essential Wellington transport app with real-time bus, train, and Cable Car schedules plus route planning for safe navigation', rating: 4.8 },
        { name: 'MetService', link: 'https://www.metservice.com/', description: 'Critical weather app for Wellington\'s famously changeable conditions - essential for outdoor activities and daily planning', rating: 4.7 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking, fake call feature, and SOS button - essential for solo female travelers exploring Wellington', rating: 4.6 },
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for connecting with verified women travelers safely in Wellington with local cultural insights', rating: 4.8 },
        { name: 'Snapper', link: 'https://www.snapper.co.nz/', description: 'Wellington transport payment card and mobile app for seamless, cashless travel on all public transport systems', rating: 4.5 },
        { name: 'AdventureSmart', link: 'https://www.adventuresmart.org.nz/', description: 'New Zealand outdoor safety app with trip planning, weather alerts, and emergency features for Wellington region adventures', rating: 4.6 },
        { name: 'WellingtonNZ', link: 'https://wellingtonnz.com/', description: 'Official Wellington tourism app with events, attractions, and local safety information curated by tourism authorities', rating: 4.4 },
        { name: 'Uber', link: 'https://www.uber.com/nz/en/', description: 'Reliable ride-hailing service in Wellington with driver verification, GPS tracking, and emergency assistance features', rating: 4.5 }
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
          english: 'Hello (Maori greeting)',
          local: 'Kia ora',
          localLanguage: 'Te Reo Maori'
        },
        {
          english: 'Thank you (Maori)',
          local: 'Kia ora',
          localLanguage: 'Te Reo Maori'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Wellington embraces decidedly casual dress culture - even nice restaurants rarely require formal attire, making packing easier for solo female travelers',
        'Dress casually but neatly - Kiwis appreciate clean, tidy appearances without being flashy or drawing attention',
        'Layered, practical clothing essential due to Wellington\'s famously changeable weather and strong winds',
        'For cultural sites (marae visits), women should wear skirts past the knee and dress more formally as a sign of respect',
        'No specific modesty restrictions - tank tops, shorts, and casual wear perfectly acceptable in all public areas'
      ],
      behaviorNorms: [
        'Maintain quiet, respectful behavior on public transport - Kiwis value personal space and avoid loud conversations',
        'Use direct, friendly communication - ask "How are you?" as a genuine greeting, Kiwis are straightforward and helpful',
        'Respect personal space in lines and public areas - don\'t crowd others, this makes Wellington particularly comfortable for solo female travelers',
        'Practice environmental consciousness - always use recycling bins, carry reusable water bottles, respect "Leave No Trace" principles',
        'Show appreciation for Māori culture - learn basic greetings like "Kia ora" and show respect when visiting cultural sites',
        'Embrace the relaxed, informal atmosphere - trying to be overly formal or showy goes against Kiwi values of humility and casualness',
        'Be punctual for any appointments - while social culture is relaxed, Kiwis still value timeliness and reliability'
      ],
      perception: [
        'Is Wellington safe for solo female travelers? Absolutely - Wellington is ranked #36 safest place in New Zealand for solo female travellers with a 4.2/5 safety rating',
        'Solo female travel is completely normalized and celebrated - New Zealand ranks #4 globally for gender equality, creating exceptionally welcoming environments',
        'Women traveling alone are viewed as independent and admirable - Kiwi culture celebrates personal achievement and self-reliance without gender assumptions',
        'Zero social stigma for dining, exploring, or enjoying activities alone - Wellington\'s cafe culture particularly embraces solo diners and workers',
        'Street harassment incidents are remarkably low - community research shows Wellington has minimal catcalling or unwanted attention compared to other cities',
        'Strong anti-harassment social norms - inappropriate behavior toward women is socially unacceptable and actively discouraged by the community',
        'Safe solo travel for women beginners - Wellington\'s compact size, English-speaking environment, and helpful locals make it ideal for first-time solo female travelers'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but windy.'
    },
    emergencyInfo: {
      police: '111', fire: '111', medical: '111', general: '111'
    },
    currency: {
      name: 'New Zealand Dollar', code: 'NZD', exchangeRate: {
      usd: 0.6024,
      eur: 0.5133,
      gbp: 0.4482
    }, scamWarnings: [],
    exchangeTips: [
      'Skip cash entirely - New Zealand is 95% cashless! Use contactless Paywave/Paypass cards and load Snapper transport cards via app for safer, fee-free transactions.'
    ]
    },
    usefulTips: [
      {
        title: 'Be Prepared and Upskill for Outdoor Activities',
        description: 'Wellington is a gateway to outdoor adventures. Always prepare thoroughly, check weather, and upskill in navigation and safety before hiking or tramping.',
        severity: 'low',
        sourceName: 'NZ Mountain Safety Council',
        sourceUrl: 'https://www.mountainsafety.org.nz/read/a-womans-guide-to-solo-tramping-in-nz'
      },
      {
        title: 'Keep Valuables Hidden in Cars and Accommodations',
        description: 'Car break-ins can occur, especially at trailheads and remote parking. Hide valuables and never leave them in sight.',
        severity: 'low',
        sourceName: 'Petrina Darrah',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        title: 'Use Public Transport and Trusted Rideshares',
        description: "Wellington's public transport is safe and reliable. For taxis or rideshares, use licensed providers and share your ride details with someone you trust.",
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/new-zealand/wellington'
      },
      {
        title: 'Trust Your Instincts and Choose Well-Lit Areas at Night',
        description: 'Wellington is generally safe, but avoid poorly lit or deserted areas at night. Trust your instincts and stay in busy, central neighborhoods.',
        severity: 'low',
        sourceName: 'Petrina Darrah',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        title: 'Leave Your Itinerary with Someone and Carry Emergency Contacts',
        description: 'Always let someone know your plans, especially for outdoor activities. Carry emergency contacts and consider a personal locator beacon for remote trips.',
        severity: 'low',
        sourceName: 'NZ Mountain Safety Council',
        sourceUrl: 'https://www.mountainsafety.org.nz/read/a-womans-guide-to-solo-tramping-in-nz'
      }
    ],
    languages: ['English', 'Maori'],
    daytimeSafetyPercent: 85.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Wellington)
    nighttimeSafetyPercent: 67.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Wellington)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Wellington',
    // Red flags based on Numbeo 2025, Petrina Darrah, and local advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Wellington
    // https://www.petrinadarrah.com/posts/safety-in-new-zealand
    // https://www.godigit.com/international-travel-insurance/tourist-scams/tourist-scams-in-new-zealand
    redFlags: [
      {
        label: 'Car Break-ins & Theft (Rental Cars, Trailheads)',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Petty Theft & Pickpocketing (Tourist Areas)',
        frequency: 'Rare',
        icon: 'Hand',
      },
      {
        label: 'Nightlife Drunk Behavior (Downtown, Waterfront)',
        frequency: 'Rare',
        icon: 'Beer',
      },
      {
        label: 'Earthquakes & Natural Disasters',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      }
    ],
  culturalSensitivity: {
    culturalDos: [
      'Greet with a friendly "Kia ora" or "Hello."',
      'Respect Maori culture and learn basic phrases.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about New Zealand\\'s history or politics."
    ]
  },
  scamWarnings: [],
    // Add Women’s Confidence Score (Numbeo 2025, Cat is Out of the Office, WEF Global Gender Gap 2024)
    womensConfidenceScore: {
      score: 83.5,
      source: 'WEF Global Gender Gap Report 2024 & Travel Ladies',
      sourceUrl: 'https://travelladies.app/safety/new-zealand/wellington'
    },
    // Add Confidence by Activity (2025, aggregated from Be My Travel Muse, Travel Ladies, and recent solo female travel reviews)
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 97,
        source: 'Tourism New Zealand & Petrina Darrah 2025',
        sourceUrl: 'https://www.petrinadarrah.com/posts/safety-in-new-zealand'
      },
      {
        label: "Nightlife",
        confidence: 90,
        source: 'Be My Travel Muse & Local Reports 2025',
        sourceUrl: 'https://bemytravelmuse.com/new-zealand-safety/'
      },
      {
        label: "Public Transport",
        confidence: 98,
        source: 'Metlink Safety Statistics 2025',
        sourceUrl: 'https://www.metlink.org.nz/customer-services/passenger-safety/'
      },
      {
        label: "Dining Alone",
        confidence: 95,
        source: 'Travel Ladies & Wellington Food Scene 2025',
        sourceUrl: 'https://travelladies.app/safety/new-zealand'
      }
    ],
  legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Wellington',
          address: '29 Fitzherbert Terrace, Thorndon, Wellington 6011',
          phone: '+64 4 462 6000',
          link: 'https://nz.usembassy.gov/'
        },
        {
          name: 'British High Commission Wellington',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.gov.uk/world/organisations/british-high-commission-wellington'
        },
        {
          name: 'German Embassy Wellington',
          address: '90-92 Hobson Street, Thorndon, Wellington',
          phone: '+64 4 473 6063',
          link: 'https://wellington.diplo.de/'
        },
        {
          name: 'French Embassy Wellington',
          address: '34-42 Manners Street, Wellington 6011',
          phone: '+64 4 384 2555',
          link: 'https://nz.ambafrance.org/'
        },
        {
          name: 'Australian High Commission Wellington',
          address: '72-78 Hobson Street, Thorndon, Wellington',
          phone: '+64 4 473 6411',
          link: 'https://newzealand.embassy.gov.au/'
        },
        {
          name: 'Canadian High Commission Wellington',
          address: '125 The Terrace, Wellington 6011',
          phone: '+64 4 473 9577',
          link: 'https://www.international.gc.ca/country-pays/new_zealand-nouvelle_zelande/'
        },
        {
          name: 'Netherlands Embassy Wellington',
          address: '57 Willis Street, Wellington 6011',
          phone: '+64 4 471 6390',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/new-zealand'
        },
        {
          name: 'Swiss Embassy Wellington',
          address: '22 Panama Street, Wellington 6011',
          phone: '+64 4 472 1593',
          link: 'https://www.eda.admin.ch/wellington'
        },
        {
          name: 'British High Commission Wellington',
          address: '44 Hill Street, Wellington 6011',
          phone: '+64 4 924 2888',
          link: 'https://www.gov.uk/world/organisations/british-high-commission-wellington'
        },
        {
          name: 'Spanish Embassy Wellington',
          address: '50 Manners Street, Wellington 6011',
          phone: '+64 4 802 5665',
          link: 'https://www.exteriores.gob.es/embajadas/wellington'
        },
        {
          name: 'Australian High Commission Wellington',
          address: '72-78 Hobson Street, Thorndon, Wellington',
          phone: '+64 4 473 6411',
          link: 'https://newzealand.embassy.gov.au/'
        },
        {
          name: 'Canadian High Commission Wellington',
          address: '125 The Terrace, Wellington 6011',
          phone: '+64 4 473 9577',
          link: 'https://www.international.gc.ca/country-pays/new_zealand-nouvelle_zelande/'
        },
        {
          name: 'Danish Embassy Wellington',
          address: '4 Willeston Street, Wellington 6011',
          phone: '+64 4 471 0520',
          link: 'https://newzealand.um.dk/'
        },
        {
          name: 'Indian High Commission Wellington',
          address: '180 Molesworth Street, Thorndon, Wellington',
          phone: '+64 4 473 6390',
          link: 'https://www.hcinz.gov.in/'
        }
      ],
      womensRights: [
        "Legal framework for women's rights varies by country",
        'Contact local embassy for specific information',
        "International women's rights organizations available"
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
      commonLocations: ['Courtenay Place nightlife area', 'Some public transport late night', 'Crowded events', 'Online platforms'],
      reportingRate: 78,
      legalProtection: 'Extremely strong legal framework. New Zealand has comprehensive anti-harassment laws and is a world leader in gender equality. Strong victim support services and zero tolerance policy.',
      supportResources: [
        'Emergency Services: 111',
        "Women's Refuge Crisis Line: 0800 733 843 (24/7)",
        'Safe to Talk Sexual Harm Helpline: 0800 044 334',
        'Wellington Rape Crisis: 04 801 6655',
        'U.S. Embassy Wellington: +64 4 462 6000'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Wellington Regional Hospital',
          address: 'Riddiford Street, Newtown, Wellington 6021',
          phone: '+64 4 385 5999',
          emergency: true,
          specialties: ['Emergency Medicine', "Women's Health", 'Trauma Care'],
          link: 'https://www.capitaldhb.org.nz/our-hospitals/wellington-regional-hospital/'
        },
        {
          name: 'Bowen Hospital',
          address: '98 Churchill Drive, Crofton Downs, Wellington',
          phone: '+64 4 479 8899',
          emergency: false,
          specialties: ['Private Healthcare', "Women's Health", 'Specialist Care'],
          link: 'https://www.bowenhospital.co.nz/'
        },
        {
          name: 'Wakefield Hospital',
          address: '90 Hanson Street, Newtown, Wellington',
          phone: '+64 4 381 8100',
          emergency: false,
          specialties: ['Private Healthcare', 'Specialist Services'],
          link: 'https://www.wakefieldhealth.com/'
        }
      ],
      pharmacies: [
        {
          name: 'Life Pharmacy Willis Street',
          address: '126 Willis Street, Wellington Central',
          phone: '+64 4 385 8810',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00, Sun 10:00-17:00',
          emergency: false,
          link: 'https://www.lifepharmacy.co.nz/'
        },
        {
          name: 'Unichem Pharmacy (24/7)',
          address: '17 Adelaide Road, Wellington',
          phone: '+64 4 389 8318',
          hours: '24/7',
          emergency: true,
          link: 'https://www.unichem.co.nz/'
        }
      ],
      womensHealth: {
        clinics: [
          "Wellington Women's Health Collective: +64 4 385 8792",
          'Family Planning Wellington: +64 4 389 4316',
          "Capital & Coast DHB Women's Health: +64 4 385 5999"
        ],
        gynecologists: [
          'Dr. Sarah Thompson at Wellington Hospital: +64 4 385 5999',
          'Dr. Emma Wilson at Bowen Hospital: +64 4 479 8899'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Free at Family Planning clinics',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all convenience stores, pharmacies, and supermarkets',
          'Comprehensive selection at major chains',
          'Free products available in many public buildings and universities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Wellington',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Consider travel insurance for outdoor activities'
      ],
      healthRisks: [
        'UV exposure due to hole in ozone layer - use strong sunscreen',
        'Wind-related injuries - secure loose items in strong winds',
        'Hypothermia risk in outdoor activities during winter',
        'Dehydration during summer outdoor activities'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metlink (Bus/Train/Cable Car)',
          safety: 9.6,
          recommendations: ['Excellent safety record', 'CCTV monitoring', 'Real-time tracking'],
          companies: ['Metlink'],
          link: 'https://www.metlink.org.nz/'
        },
        {
          type: 'Uber',
          safety: 9.1,
          recommendations: ['GPS tracking', 'Driver verification', 'Good coverage'],
          companies: ['Uber'],
          link: 'https://www.uber.com/nz/en/'
        },
        {
          type: 'Wellington Taxis',
          safety: 8.9,
          recommendations: ['Licensed companies', 'Professional drivers', 'Regulated fares'],
          companies: ['Green Cabs', 'Corporate Cabs'],
          link: 'https://www.greencabs.co.nz/'
        },
        {
          type: 'Wellington Cable Car',
          safety: 9.8,
          recommendations: ['Historic funicular', 'Excellent safety record', 'Tourist favorite'],
          companies: ['Wellington Cable Car'],
          link: 'https://www.wellingtoncablecar.co.nz/'
        }
      ],
      nightTravel: {
        safety: 8.8,
        warnings: [
          'Very safe for night travel in central Wellington',
          'Public transport operates until midnight (later on weekends)',
          'Well-lit streets throughout city center',
          'Exercise standard precautions in less busy areas'
        ],
        alternatives: [
          'Night Bus services available on main routes',
          'Uber and taxi services operate 24/7',
          'Very safe to walk in Te Aro, Thorndon, and Mount Victoria',
          'Wellington Cable Car operates until late evening'
        ]
      },
      verifiedProviders: [
        {
          name: 'Metlink',
          type: 'Public Transport',
          contact: 'Metlink app',
          safety: 9.6
        },
        {
          name: 'Uber',
          type: 'Ride-hailing',
          contact: 'App-based',
          safety: 9.1
        },
        {
          name: 'Green Cabs',
          type: 'Licensed Taxi',
          contact: '+64 4 801 8294',
          safety: 8.9
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
        'Te Aro (cultural heart with excellent safety)',
        'Mount Victoria (scenic and secure)',
        'Thorndon (government district with high security)',
        'Oriental Bay (waterfront safety)',
        'Kelburn (university area with community feel)',
        'Newtown (bohemian but safe main areas)'
      ],
      womensOnly: [
        {
          name: 'YHA Wellington City',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location', 'Kitchen facilities'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.3,
          comments: 'Wellington felt incredibly safe as a solo female traveler. Kiwis are so friendly and helpful.',
          date: '2025-01-15'
        },
        {
          rating: 4.7,
          safety: 9.1,
          comments: 'Perfect destination for first-time solo female travelers. Beautiful city with great safety.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'New Zealand has extensive free WiFi in public areas',
        'High-quality, secure public WiFi infrastructure',
        'Safe to use for most activities due to strong privacy laws',
        'VPN recommended for sensitive transactions'
      ],
      digitalScams: [
        'Romance scams on dating apps targeting tourists',
        'Fake accommodation booking websites',
        'Phishing emails claiming to be from NZ banks',
        'Fake outdoor activity booking sites'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in New Zealand',
        'NordVPN - reliable connection',
        'ProtonVPN - good for privacy'
      ],
      dataProtection: [
        'Strong privacy laws in New Zealand (Privacy Act)',
        'Very safe to use digital payments and banking',
        'Excellent cybersecurity infrastructure',
        'Keep copies of documents in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Car Break-ins at Trailheads',
          location: 'Popular hiking areas around Wellington',
          date: '2025-01-15',
          description: 'Increase in rental car break-ins at hiking spots - never leave valuables visible',
          severity: 'low'
        },
        {
          type: 'Wind-Related Incidents',
          location: 'City-wide',
          date: '2025-01-12',
          description: 'Strong winds causing minor injuries - secure loose items and be cautious',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Get a Snapper card for easy public transport - much more convenient than cash',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 89
        },
        {
          tip: 'Always carry a windproof jacket - Wellington weather changes instantly',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 76
        },
        {
          tip: 'Take the cable car up to Kelburn - safe and beautiful views of the harbor',
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
      details: 'New Zealand is very safe for travelers. Exercise normal precautions.',
      reason: 'Low crime rates and excellent safety infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/new-zealand-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers of all experience levels',
        'World-leading gender equality ensures respectful treatment',
        'Stay in Te Aro, Mount Victoria, or Thorndon for best convenience and safety',
        'Take advantage of excellent public transportation system',
        'Be prepared for changeable weather and dress in layers'
      ]
    },
    crimeStatistics: {
      violentCrime: 1.2, // per 100,000 (2024 data - New Zealand has very low violent crime)
      propertyCrime: 2890, // per 100,000 (2024 data - mainly car break-ins)
      sexualAssault: 4.8, // per 100,000 (2024 data)
      kidnapping: 0.2, // per 100,000 (2024 data - extremely rare)
      source: 'New Zealand Police Annual Report & Statistics New Zealand',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Portable phone charger (essential for apps)',
        'Windproof and waterproof jacket',
        'Comfortable walking shoes with good grip',
        'Snapper card for transport',
        'Personal locator beacon for tramping',
        'Strong sunscreen (UV protection essential)'
      ],
      safetyApps: [
        {
          name: 'AdventureSmart',
          purpose: 'New Zealand outdoor safety app with trip planning',
          rating: 4.6
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety app with emergency contacts',
          rating: 4.4
        },
        {
          name: 'Metlink',
          purpose: 'Public transport with safety features',
          rating: 4.7
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '111',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Wellington Police',
          number: '+64 4 381 2000',
          type: 'Non-Emergency Police'
        },
        {
          name: "Women's Refuge",
          number: '0800 733 843',
          type: '24/7 Support Services'
        },
        {
          name: 'Safe to Talk',
          number: '0800 044 334',
          type: 'Sexual Harm Helpline'
        },
        {
          name: 'U.S. Embassy',
          number: '+64 4 462 6000',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$39 - $57 USD / day',
        description: 'Covers accommodation, meals, transport, and activities at a comfortable level.',
        tip: 'Wellington is moderately expensive but offers excellent value for safety and quality of life. Budget accordingly for higher costs but exceptional experiences.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$21-30 USD',
          safetyNote: 'Excellent safety standards with modern facilities',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$48-72 USD',
          safetyNote: 'High safety standards with 24/7 staff and security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$90-150 USD',
          safetyNote: 'Premium safety with concierge and full security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit (Snapper Card)',
          cost: '$1.20-2.40 USD/ride',
          safetyDescription: 'World-class safety with excellent monitoring and emergency systems.',
          safetyLevel: 'high'
        },
        {
          method: 'Wellington Cable Car',
          cost: '$5 USD/return',
          safetyDescription: 'Historic funicular railway with excellent safety record and scenic harbor views.',
          safetyLevel: 'high'
        },
        {
          method: 'Metlink Train (Regional)',
          cost: '$3-8 USD/trip',
          safetyDescription: 'Safe regional rail service connecting Wellington to Hutt Valley and Kapiti Coast.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber',
          cost: '$5-12 USD/ride',
          safetyDescription: 'Very safe with GPS tracking and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxi (Green Cabs)',
          cost: '$7-15 USD/ride',
          safetyDescription: 'Professional taxi service with regulated fares and courteous drivers.',
          safetyLevel: 'high'
        },
        {
          method: 'Ferry (Harbor Services)',
          cost: '$8-15 USD/trip',
          safetyDescription: 'Safe harbor ferry services to Days Bay and Matiu/Somes Island with scenic views.',
          safetyLevel: 'high'
        },
        {
          method: 'Bike Rental',
          cost: '$20-30 USD/day',
          safetyDescription: 'Wellington offers safe cycling with dedicated bike lanes and scenic waterfront paths.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe with excellent lighting and very low crime rates.',
          safetyLevel: 'high'
        }
      ],
      currencyExchangeTips: [
        'MOST USEFUL TIP: Skip cash exchanges entirely - New Zealand is 95% cashless! Get a contactless Paywave/Paypass card before arrival and load your Snapper transport card via app to eliminate currency exchange fees and keep solo female travelers moving safely without handling physical money.',
        'Wellington offers world-class safety with cashless payment systems at all levels',
        'Use major NZ banks (ANZ, ASB, BNZ, Westpac) for best rates and maximum security',
        'New Zealand ATMs are among the world\'s safest with extensive coverage',
        'Contactless payments (Paywave/Paypass) widely accepted - safer than cash handling',
        'Currency exchange investment pays off in stress-free, efficient transactions',
        'New Zealand Dollar stability and banking excellence provide reliable financial security'
      ],
      budgetTips: [
        'Wellington offers premium safety at all budget levels',
        'Public transport is efficient and very cost-effective',
        'Many outdoor activities and harbor walks are free',
        'Wellington food scene offers great lunch deals',
        'Safety investment pays off in stress-free travel experience'
      ]
    },
  youtubeVideo: {
    videoId: "S69z1sl5eIE"
  },
  culturalInformation: {
    headline: "Is Wellington safe for solo female travelers? Navigating New Zealand's Capital Culture & Kiwi Values",
    points: [
      "• Kiwi Egalitarian Values & Gender Equality: New Zealand leads globally in gender equality (ranked #4 worldwide), creating exceptionally safe environments for solo female travelers. Wellington embodies 'tall poppy syndrome' - discouraging arrogance while celebrating genuine achievement. This cultural humility ensures respectful, non-threatening interactions where solo women are treated as equals without unwanted attention or assumptions.",
      "• Māori Cultural Integration & Respect: Wellington showcases bicultural heritage where Māori traditions (tangata whenua - people of the land) blend with European culture. Understanding basic concepts like 'manaakitanga' (hospitality) and 'whakatōhea' (respect) enhances safety as locals appreciate cultural awareness. Solo female travelers benefit from this culture of care and protection, especially when showing respect for indigenous heritage.",
      "• Coffee Culture & Solo-Friendly Spaces: Wellington's renowned coffee culture creates perfect sanctuaries for solo female travelers. The city boasts more cafes per capita than New York, with establishments like Fidel's, Havana Coffee, and Mojo providing safe, welcoming spaces for women to work, read, or simply enjoy premium coffee. This cafe culture normalizes solo dining and creates natural meeting points with fellow travelers.",
      "• Outdoor Adventure Mentality & Safety-First Culture: Wellington's 'tramping' (hiking) culture promotes safety-first attitudes in all activities. Kiwis prioritize preparation, weather awareness, and looking out for others - creating inherently safer environments for solo female travelers. The 'she'll be right' attitude combines optimism with practical safety consciousness, ensuring help is always available for outdoor adventures.",
      "• Direct Communication & Personal Space Respect: Kiwi culture values straightforward, informal communication while maintaining respect for personal boundaries. Solo female travelers benefit from this cultural norm as locals are helpful when approached but don't intrude with personal questions or unwanted attention. This directness eliminates ambiguous social situations that could make women feel uncomfortable.",
      "• Environmental Consciousness & Community Responsibility: Wellington's strong environmental values create exceptionally clean, well-maintained public spaces that enhance safety. The 'Leave No Trace' mentality reflects broader cultural values of responsibility and care that extend to community safety. This environmental mindset creates trustworthy interactions where locals actively contribute to maintaining safe, clean environments.",
      "• Government Transparency & Civic Pride: As New Zealand's political capital, Wellington culture emphasizes transparency, civic responsibility, and community engagement. This governmental mindset creates predictable, law-abiding environments where solo female travelers benefit from strong institutional support, clear regulations, and community-minded citizens who actively contribute to public safety.",
      "• Small Town Feel in Capital City: Despite being the capital, Wellington maintains 'small town' mentality where people look out for each other. The compact city center (walkable in 20 minutes) creates village-like familiarity where solo female travelers quickly feel part of the community. Locals remember faces, offer directions, and provide genuine assistance without ulterior motives.",
      "• Informal Social Culture & Relaxed Atmosphere: Wellington's decidedly casual culture makes it easy for solo female travelers to blend in and feel comfortable. Kiwis dress casually but neatly, value humility over showiness, and maintain a relaxed social atmosphere. This informality reduces social pressure and creates welcoming environments where women traveling alone don't stand out or attract unwanted attention.",
      "• Strong Anti-Harassment Social Norms: New Zealand's progressive gender equality values create social environments where harassment is socially unacceptable. Wellington's educated, liberal population actively discourages inappropriate behavior toward women. Solo female travelers report minimal catcalling or street harassment, with community-wide respect for women's independence and personal space."
    ]
  },
  practicalInfo: {
    moneyConnectivity: {
      headline: "Money & Connectivity Essentials for Wellington - Solo Female Travel Safety Guide",
      points: [
        "**New Zealand Dollar & Payment Systems**: Wellington uses NZD with excellent cashless infrastructure. Most places accept contactless cards (Paywave/Paypass), making transactions safer for solo female travelers. Get a Snapper card immediately for public transport - it's safer than cash and works across all Wellington systems including buses, trains, and harbor ferries.",
        "**Banking & Currency Exchange**: Major banks (ANZ, ASB, BNZ, Westpac) offer competitive exchange rates with branches throughout central Wellington. Avoid currency exchange at airport which charges premium rates. New Zealand banks maintain excellent security standards with English-speaking staff and tourist-friendly policies.",
        "**Mobile Connectivity**: New Zealand has excellent 4G/5G coverage throughout Wellington region. Major carriers include Spark, Vodafone, and 2degrees. Buy prepaid SIM cards at any convenience store, electronics retailer, or carrier shop. Free WiFi available at most cafes, libraries, and public buildings throughout the city.",
        "**Digital Payment Culture**: Wellington embraces contactless payments extensively, including buses, cafes, and markets. This cashless approach is safer for solo female travelers as it reduces handling of physical money and speeds up transactions in busy areas like Courtenay Place or Cuba Street."
      ]
    },
    transportEssentials: {
      headline: "Transport Essentials for Solo Female Safety in Wellington",
      points: [
        "**Metlink System Excellence**: Download Metlink app (4.8★) for real-time schedules and route planning. Wellington's buses, trains, and iconic Cable Car operate with exceptional safety standards, comprehensive CCTV monitoring, and emergency communication systems. Services run frequently until midnight with weekend extensions.",
        "**Public Transport Safety Features**: All vehicles and stations feature CCTV monitoring, emergency buttons, and professional driver oversight. Transport security patrols regularly, and harassment incidents are extremely rare. The compact city network means short journey times and frequent services, minimizing waiting periods in isolated areas.",
        "**Alternative Transport Options**: Uber operates safely throughout Wellington with driver verification and GPS tracking. Licensed taxi companies include Green Cabs and Corporate Cabs with professional drivers and regulated fares. Wellington is highly walkable with excellent pedestrian infrastructure and safe cycling lanes.",
        "**Wellington Cable Car Specifics**: The historic Wellington Cable Car (operating since 1902) provides safe, scenic transport between Lambton Quay and Kelburn. Operates every 10 minutes with excellent safety record and tourist-friendly staff. Particularly useful for accessing Victoria University and Botanic Gardens safely."
      ]
    },
    soloWomenPerception: {
      headline: "How Solo Women Are Perceived in Wellington - Cultural Acceptance Guide",
      points: [
        "**Complete Social Acceptance**: Solo female travel is completely normalized in Wellington's progressive culture. New Zealand ranks #4 globally for gender equality, creating environments where women traveling alone face zero social stigma. Dining alone, hiking solo, or exploring cultural sites independently is viewed as admirable independence.",
        "**Kiwi Hospitality & Helpfulness**: New Zealand's famous hospitality ('manaakitanga') translates to genuine helpfulness toward solo female travelers. Locals frequently offer directions, recommendations, or assistance without any ulterior motives. This cultural norm of care and protection creates inherently supportive environments for women traveling alone.",
        "**Professional & Respectful Service**: Wellington's service industry maintains consistently professional, respectful treatment of solo female travelers. Restaurant staff, hotel personnel, and tour operators are trained in customer service excellence with particular sensitivity to solo travelers' needs and safety concerns.",
        "**Safe Social Integration**: Wellington's compact size and friendly culture make it easy for solo female travelers to integrate socially. The city's numerous festivals, markets, and cultural events provide natural opportunities to meet locals and fellow travelers in safe, supervised environments."
      ]
    }
  },
  currencyExchangeTips: {
    headline: "Currency & Exchange Tips for Wellington - Solo Female Travel Safety",
    tips: [
      "**Most Useful Tip**: Get a Paywave/Paypass contactless card before arrival - New Zealand is 95% cashless and Wellington leads this trend. Solo female travelers should prioritize contactless payments as they're safer, faster, and eliminate cash-handling risks in busy areas like Cuba Street markets. Crucially, load your Snapper transport card online or via app rather than carrying cash to top-up stations - this keeps you moving efficiently and safely through Wellington's transport system without fumbling for money in crowded areas.",
      "**Best Exchange Locations**: Use major New Zealand banks (ANZ, ASB, BNZ, Westpac) for competitive rates and maximum security. Central Wellington branches offer tourist services and better rates than specialized exchange offices. Avoid airport exchanges which charge premium rates - exchange in city center instead.",
      "**ATM Safety Strategy**: New Zealand ATMs are extremely safe and reliable with extensive network coverage. Use bank-owned ATMs when possible for security and fee reduction. Wellington has ATMs throughout safe central districts including Lambton Quay, Cuba Street, and Courtenay Place.",
      "**Credit Card Advantages**: Visa and Mastercard work universally with excellent fraud protection. New Zealand businesses extensively use contactless payment systems, which is safer for solo travelers. Notify banks of travel dates to prevent transaction blocks. Consider no-foreign-fee cards for cost savings.",
      "**Emergency Money Access**: Keep backup payment methods including emergency cash reserves. Western Union and MoneyGram have Wellington locations for urgent transfers. New Zealand banks offer international wire services and tourist emergency assistance for serious financial emergencies."
    ]
  }
};

export default wellington;
