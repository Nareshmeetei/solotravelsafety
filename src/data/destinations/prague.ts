import { Destination } from './types';

const prague: Destination = {
    city: 'Prague',
    country: 'Czech Republic',
    continent: 'Europe',
    countryCode: 'cz',
    overallScore: 8.6,
    nightSafety: 8.1,
    publicTransit: 8.4,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe', 'budget-friendly', 'historic'],
    bgColor: 'bg-green-25',
    reviewCount: 442,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'low-moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 8.1,
        context: 'Prague has exceptional nighttime safety with 74% of people feeling safe walking alone at night (2025 data). Crime decreased 6.4% in 2024 - lowest rate recorded in city history. Old Town, New Town, and Lesser Town are well-lit and patrolled. Avoid upper Wenceslas Square and some metro stations late at night. Night trams can be rowdy with drunk passengers on weekends. Overall ranked #3 safest city globally for travelers.'
      },
      publicTransit: {
        score: 8.4,
        context: 'Prague\'s metro, trams, and buses are excellent and efficient, though harassment concerns exist. 2024 city campaign revealed 33% of women experience sexual harassment on public transport vs 10% of men. Despite this, system is well-monitored with security cameras and staff. QR codes at stops now link to anonymous reporting. Night trams require extra caution due to rowdy passengers. New female-only rideshare services launched (Bolt female drivers).'
      },
      walkingAlone: {
        score: 8.5,
        context: 'Prague is exceptional for solo walking with 91% feeling safe during day (2025). Compact historic center is pedestrian-friendly with excellent lighting. Cobblestone streets require good shoes. Crime rate extremely low at 24.43 vs Berlin (44.59) or Paris (57.94). Street harassment "exceptional cases" unlike other regions. Violent crime almost non-existent. Ranked among world\'s top cities for solo female travelers.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Town (Staré Město)',
          description: 'Historic heart of Prague with Prague Castle, Charles Bridge, and Astronomical Clock. Very safe with constant foot traffic, excellent lighting, and regular police presence. Perfect for solo travelers.'
        },
        {
          name: 'Lesser Town (Malá Strana)',
          description: 'Picturesque baroque neighborhood below Prague Castle. Very safe and charming with narrow cobblestone streets, gardens, and cafes. Great for peaceful walks and exploration.'
        },
        {
          name: 'New Town (Nové Město)',
          description: 'Modern city center with shopping, restaurants, and cultural venues. Generally very safe, though some parts of Wenceslas Square can be busy with nightlife.'
        },
        {
          name: 'Vinohrady',
          description: 'Upscale residential area popular with expats and young professionals. Very safe with excellent restaurants, parks, and a local neighborhood feel.'
        },
        {
          name: 'Karlín',
          description: 'Hip, gentrified area with modern restaurants and cultural venues. Very safe and increasingly popular with visitors seeking authentic local experiences.'
        }
      ],
      caution: ['Parts of Wenceslas Square late at night', 'Prague Central Station area after midnight', 'Some tourist-heavy areas for pickpockets'],
      avoid: ['Outer industrial districts late at night', 'Isolated areas along the river after dark']
    },
    accommodations: [
      {
        name: 'Women\'s Only Hostel Prague (WOH!)',
        type: 'hostel',
        features: ['100% Female-Only', 'Old Town Square location', 'Free breakfast', '24/7 reception', 'Safety lockers'],
        rating: 4.6,
        notes: 'Exclusively for women, 100m from Old Town Square. Excellent reviews: "Best hostel I\'ve stayed at! Comfortable beds, spacious bathrooms, free towels, hairdryers, toiletries." Ranked #172/839 Prague lodging.',
        link: 'https://wohprague.cz/'
      },
      {
        name: 'Czech Inn',
        type: 'hostel',
        features: ['Female-only dorms', 'Modern design', 'Free breakfast', 'Hybrid hotel-hostel', 'Social atmosphere'],
        rating: 4.6,
        notes: 'Pioneer of modern hybrid accommodation. Ranked #21/839 Prague lodging with 4/5 TripAdvisor rating. "Super friendly staff, great location near Old Town. Easy to meet people!"',
        link: 'https://czechinn.com/'
      },
      {
        name: 'Sir Toby\'s Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Art district location', 'Cozy atmosphere', 'Social spaces', 'Secure storage'],
        rating: 4.5,
        notes: 'Authentic home-away-from-home in trendy Holesovice art district. Ranked #18/840 Prague lodging, 8.3/10 Booking.com. "Spacious 6-bed dorm, clean, beautiful property with great vibe."',
        link: 'https://www.hostelworld.com/hostels/p/425/sir-toby-s-hostel/'
      },
      {
        name: 'Stellar Female Hostel',
        type: 'hostel',
        features: ['Exclusively for women', 'Celestial theme', 'Prime location', 'Security focused', 'Solo traveler community'],
        rating: 4.5,
        notes: 'Designed exclusively for female travelers seeking comfort and security with celestial charm. Perfect for solo women wanting a safe, social environment in great Prague location.',
        link: 'https://www.hostelworld.com/hostels/europe/czech-republic/prague/f/solo-travel/'
      },
      {
        name: 'Onefam Home by Hostel One',
        type: 'hostel',
        features: ['Female-only dorms available', 'Backpacker friendly', 'Cozy atmosphere', 'Budget-friendly', 'Social environment'],
        rating: 4.5,
        notes: 'True backpacker hostel that\'s so cozy, people don\'t want to leave. Dedicated staff creating stress-free, friendly environment. Female-only dorms available alongside mixed options.',
        link: 'https://hostelone.com/prague/'
      },
      {
        name: 'Golden Well Hotel',
        type: 'hotel',
        features: ['Luxury boutique', 'Lesser Town location', 'Castle views', '24/7 security', 'Solo female welcoming'],
        rating: 4.8,
        notes: 'Luxury boutique hotel in safe Lesser Town with stunning Prague Castle views. Exceptional security and service, highly recommended for solo female travelers seeking premium accommodation.',
        link: 'https://www.goldenwell.cz/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Comfortable walking shoes essential for cobblestone streets
• Layers for variable weather - can be cool even in summer
• Modest dress for churches and religious sites
• Stylish casual wear - Czechs dress well
• Waterproof jacket for frequent light rain`,
      firstTimers: `• Prague is very safe for solo women travelers
• Learn basic Czech phrases - "Děkuji" (thank you) is appreciated
• Czech Republic uses Czech Koruna, not Euro
• Tipping 10% is standard in restaurants
• Many people speak English, especially in tourist areas`,
      apps: [
        'NomadHer',
        'bSafe',
        'Záchranka',
        'Life360',
        'PID Lítačka',
        'IDOS',
        'Bolt',
        'Revolut'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Women-only verified community - connect with female travelers and get Prague safety insights', rating: 4.6 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Voice-activated emergency app with live video alerts - essential for solo travel safety', rating: 4.5 },
        { name: 'Záchranka', link: 'https://www.zachrankaapp.cz/en', description: 'Czech emergency app - direct connection to rescue services with precise GPS location', rating: 4.8 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Location sharing for family peace of mind during Prague adventures', rating: 4.6 },
        { name: 'PID Lítačka', link: 'https://pid.cz/en/', description: 'Official Prague transport app - buy tickets, route planning, real-time departures', rating: 4.7 },
        { name: 'IDOS', link: 'https://jizdnirady.idnes.cz/pid/spojeni/', description: 'Comprehensive Czech transport planner - user-friendly routes for entire Czech Republic', rating: 4.6 },
        { name: 'Bolt', link: 'https://bolt.eu/', description: 'Female driver option available - safe rideshare with transparent pricing for night travel', rating: 4.5 },
        { name: 'Revolut', link: 'https://www.revolut.com/', description: 'International payments and currency exchange - perfect for Czech Koruna transactions', rating: 4.7 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Pomoc!',
          localLanguage: 'Czech'
        },
        {
          english: 'Call the police!',
          local: 'Zavolejte policii!',
          localLanguage: 'Czech'
        },
        {
          english: 'I need a doctor.',
          local: 'Potřebuji lékaře.',
          localLanguage: 'Czech'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Kde je nejbliÅ¾Ã­ nemocnice?',
          localLanguage: 'Czech'
        },
        {
          english: 'I am lost.',
          local: 'Zabloudila jsem.',
          localLanguage: 'Czech'
        },
        {
          english: 'Please leave me alone.',
          local: 'Prosím, nechte mě být.',
          localLanguage: 'Czech'
        },
        {
          english: 'I feel unsafe.',
          local: 'Necítím se bezpečně.',
          localLanguage: 'Czech'
        },
        {
          english: 'Can you help me?',
          local: 'Můžete mi pomoci?',
          localLanguage: 'Czech'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Czechs dress well and appreciate good style. Smart casual is appropriate for most situations. Churches require covered shoulders and knees. Comfortable walking shoes are essential for cobblestone streets.',
      behaviorNorms: [
        'Greet with "Dobrý den" (good day) and maintain eye contact.',
        'Learn basic Czech phrases - locals appreciate the effort.',
        'Czechs can seem reserved initially but are friendly once you connect.',
        'Tipping 10% is standard in restaurants.',
        'Remove shoes when entering someone\'s home.',
        'Respect religious sites and dress appropriately in churches.',
        'Be punctual for appointments and social events.',
        'Czech beer culture is important - appreciate local brews.',
        'Maintain quiet voices in public transport.',
        'Show interest in Czech history and culture.'
      ],
      perception: 'Solo women travelers are very welcome in Prague. Czech culture is generally respectful and safe for women. The city is progressive and women can dine alone, explore attractions, and use transport independently. Street harassment is uncommon.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but very safe.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Czech Koruna', code: 'CZK', exchangeRate: {
      usd: 0.044,
      eur: 0.038,
      gbp: 0.033
    }, scamWarnings: [
        'Use official ATMs and avoid currency exchange at tourist areas for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Currency Exchange Scams',
        description: 'Some exchange offices offer poor rates or have hidden fees. Use banks or official exchanges.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Bill Scams',
        description: 'Check bills carefully - some restaurants may add unauthorized charges or overcharge for bread/water.',
        severity: 'low'
      },
      {
        title: 'Taxi Overcharging',
        description: 'Use official taxis with meters or ride-sharing apps to avoid overcharging.',
        severity: 'medium'
      },
      {
        title: 'Street Money Exchange',
        description: 'Avoid street money changers who may offer counterfeit bills or poor exchange rates.',
        severity: 'medium'
      }
    ],
    languages: ['Czech', 'English (good level in tourist areas)', 'German (some speakers)'],
    daytimeSafetyPercent: 91.0,
    nighttimeSafetyPercent: 74.0,
    safetySourceName: 'Numbeo 2025 & Prague Police Statistics',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Prague',
    redFlags: [
      {
        label: 'Public Transport Harassment (33% women)',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
        details: 'Studies show 33% of women experience harassment on Prague public transport, including unwanted comments, touching, or following.',
        prevention: 'Sit near other women or families, trust your instincts, change seats if uncomfortable, report serious incidents to authorities'
      },
      {
        label: 'Currency Exchange Scams',
        frequency: 'Common',
        icon: 'DollarSign',
        details: 'Exchange offices in tourist areas offer poor rates or use deceptive tactics. Street money changers operate illegal schemes.',
        prevention: 'Use bank ATMs, avoid street exchangers, check rates before exchange, count money carefully, use official exchange offices'
      },
      {
        label: 'Tourist Restaurant Overcharging',
        frequency: 'Occasional',
        icon: 'Utensils',
        details: 'Restaurants in tourist areas may have inflated prices or add unexpected charges like bread, nuts, or service fees.',
        prevention: 'Check prices before ordering, ask about additional charges, read reviews, eat where locals dine, verify bills carefully'
      },
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Rare',
        icon: 'Hand',
        details: 'Occasional pickpocketing in very crowded tourist areas like Old Town Square and Charles Bridge, particularly during peak season.',
        prevention: 'Keep valuables in front pockets, use money belts, stay alert in crowds, secure bags with zippers facing inward'
      }
    ],
    culturalDos: [
      'Learn basic Czech greetings.',
      'Appreciate Czech beer culture.',
      'Dress well and stylishly.',
      'Be punctual for appointments.',
      'Show interest in history and architecture.'
    ],
    culturalDonts: [
      'Don\'t confuse Prague with other Eastern European cities.',
      'Don\'t expect everyone to speak English outside tourist areas.',
      'Don\'t use poor exchange offices.',
      'Don\'t be loud on public transport.',
      'Don\'t ignore church dress codes.'
    ],
    culturalSensitivityTips: [
      'Czech culture emphasizes intellectual achievement, cultural sophistication, and historical pride, particularly in Prague\'s role as the "City of a Hundred Spires." Solo female travelers who show genuine appreciation for Prague\'s architectural heritage, classical music tradition, and literary culture will connect with fundamental Czech values.',
      'The concept of "Czech skepticism" reflects a cultural preference for realistic thinking, understated communication, and wariness of excessive enthusiasm. Solo female travelers who approach interactions with measured enthusiasm and avoid overly effusive behavior will be better received.',
      'Beer culture in the Czech Republic is not just about drinking but represents centuries of brewing tradition, social bonding, and cultural identity. Solo female travelers who show respect for beer culture, understand pub etiquette, and appreciate the craftsmanship will experience authentic Czech social life.',
      'Czech language appreciation shows cultural respect, even though many younger Czechs speak English. Learning basic phrases like "Dobrý den" (good day), "Děkuji" (thank you), and "Promiňte" (excuse me) demonstrates cultural effort and often results in warmer interactions.',
      'Historical consciousness is central to Czech identity, from medieval times through communist era to modern independence. Solo female travelers who show understanding of Prague\'s complex history and avoid oversimplifying political transitions will demonstrate cultural sensitivity.',
      'The Czech concept of "pohodlí" (comfort/coziness) reflects values of enjoying simple pleasures, quality time with friends, and authentic experiences. Solo female travelers who appreciate cozy cafés, leisurely conversations, and unhurried social time will connect with Czech lifestyle values.',
      'Czech fashion and personal presentation tend toward understated elegance rather than flashy displays. Solo female travelers who dress stylishly but modestly, appreciate quality over quantity, and avoid conspicuous consumption will show cultural understanding.',
      'Environmental consciousness and outdoor recreation are important to Czech culture, from hiking in Bohemian forests to cycling along rivers. Solo female travelers who show appreciation for nature preservation and participate in outdoor activities will connect with Czech values.',
      'Czech music and arts culture has deep classical traditions alongside contemporary innovations. Solo female travelers who show interest in Prague\'s concert halls, galleries, and cultural events will experience important aspects of Czech cultural pride and artistic achievement.',
      'The Czech value of "privacy" means people generally respect personal space and avoid intrusive questions. Solo female travelers should understand that initial reserve is not unfriendliness but reflects cultural norms of respectful distance until relationships develop naturally.'
    ],
    womensConfidenceScore: {
      score: 86.0,
      source: "Travel Ladies & Prague Police Statistics 2025",
      sourceUrl: "https://travelladies.app/safety/czech-republic/prague"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 93, source: 'Travel Ladies 2025 & Prague Rankings', sourceUrl: 'https://travelladies.app/safety/czech-republic/prague' },
      { label: 'Nightlife', confidence: 81, source: 'Prague Safety Statistics 2025', sourceUrl: 'https://pragueviews.com/is-prague-safe/' },
      { label: 'Public Transport', confidence: 76, source: 'Prague Harassment Campaign 2024', sourceUrl: 'https://www.expats.cz/czech-news/article/new-campaign-draws-attention-to-harassment-on-prague-public-transport' },
      { label: 'Dining Alone', confidence: 90, source: 'Solo Female Travelers 2025', sourceUrl: 'https://travelladies.app/crime/czech-republic/prague' }
    ],
    sexualHarassmentData: {
      prevalence: 'low-moderate',
      commonLocations: [
        'Public transportation (33% of women experience harassment vs 10% men)',
        'Night trams on weekends with drunk passengers',
        'Some parts of upper Wenceslas Square late at night',
        'Crowded tourist areas during peak season',
        'Some nightlife districts after midnight'
      ],
      reportingRate: 67, // Based on 2024 campaign data showing underreporting
      legalProtection: 'Strong legal protections under Czech and EU law with 2.6% intimate partner violence rate (OECD data). Prague launched 2024 anti-harassment campaign for public transport with anonymous reporting via QR codes. Police take reports seriously with comprehensive anti-harassment legislation.',
      supportResources: [
        'Women\'s Crisis Line: 251 511 313',
        'Tourist Police: +420 974 851 111',
        'Prague Women\'s Center: +420 222 580 805',
        'Anonymous Harassment Reporting: QR codes at transport stops',
        'Emergency Services: 112',
        'Prague Public Transport Harassment Reporting: Via PID mobile app',
        'Czech National Police: 158'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Central Military Hospital Prague (ÚVN)',
          address: 'U Vojenské nemocnice 1200, 169 02 Praha 6',
          phone: '+420 973 203 111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Gynecology', 'Women\'s Health', '24/7 Emergency'],
          link: 'https://www.uvn.cz/en/',
          notes: 'Considered one of Czech Republic\'s best hospitals with English-speaking staff always available'
        },
        {
          name: 'Fakultní nemocnice v Motole',
          address: 'V Úvalu 84, 150 06 Praha 5',
          phone: '+420 224 431 111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Women\'s Health'],
          link: 'https://www.fnmotol.cz/',
          notes: 'Most expatriate-friendly hospital with special department for foreigners and English-speakers'
        },
        {
          name: 'Hospital Na Homolce',
          address: 'Roentgenova 2, 150 30 Praha 5',
          phone: '+420 257 271 111',
          emergency: true,
          specialties: ['Emergency Medicine', 'International Department'],
          link: 'https://www.homolka.cz/',
          notes: 'Very expatriate-friendly with international standards'
        }
      ],
      pharmacies: [
        {
          name: 'Lékárna Anděl',
          address: 'Nádražní 32, 150 00 Praha 5',
          phone: '+420 257 320 918',
          hours: 'Mon-Fri 8:00-20:00, Sat-Sun 9:00-18:00',
          emergency: false,
          link: 'https://www.lekarna-andel.cz/'
        },
        {
          name: '24-Hour Pharmacy Palackého',
          address: 'Palackého 5, 128 01 Praha 2',
          phone: '+420 224 946 982',
          hours: '24/7',
          emergency: true,
          link: 'Central 24-hour pharmacy for emergency needs'
        }
      ],
      womensHealth: {
        clinics: [
          'Prague Women\'s Health Center (PWHC): Full spectrum gynecological and prenatal care',
          'Gynecology Prague: High-standard care for women 16+',
          'MY CLINIC Prague: Personalized women\'s health with modern equipment',
          'Unicare Medical Center: Comprehensive healthcare in 16+ languages'
        ],
        gynecologists: [
          'Prague Women\'s Health Center: Qualified doctors and midwives with extensive experience',
          'Private Gynecology Hospital Prague: Specialized gynecological surgery',
          'Military University Hospital: Department of Gynecology with university affiliation',
          'MY CLINIC: Expert care for reproductive health, menstrual disorders, menopause'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency contraception available at all hospitals',
          '24-hour pharmacy Palackého for urgent needs',
          'Women\'s health centers provide emergency services'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Wide variety of European brands available',
          'Convenience stores and hotel shops stock basic supplies',
          'Organic and sustainable options widely available'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Prague',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current',
        'Tick-borne encephalitis vaccine if visiting rural Czech areas'
      ],
      healthRisks: [
        'Very low risk of infectious diseases in Prague',
        'Tick-borne encephalitis risk only in rural areas (not city center)',
        'Air pollution during winter months but not dangerous levels',
        'Healthcare shortage of gynecologists in Czech Republic but good emergency care'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Prague',
          address: 'Tržiště 15, 118 01 Praha 1',
          phone: '+420 257 022 000',
          link: 'https://cz.usembassy.gov/'
        },
        {
          name: 'British Embassy Prague',
          address: 'Thunovská 14, 118 00 Praha 1',
          phone: '+420 257 402 111',
          link: 'https://www.gov.uk/world/organisations/british-embassy-prague'
        },
        {
          name: 'German Embassy Prague',
          address: 'Vlašská 19, 118 01 Praha 1',
          phone: '+420 257 113 111',
          link: 'https://prag.diplo.de/'
        },
        {
          name: 'French Embassy Prague',
          address: 'Velkopřevorské náměstí 2, 118 01 Praha 1',
          phone: '+420 251 171 711',
          link: 'https://cz.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Prague',
          address: 'Pevnostní 9, 162 00 Praha 6',
          phone: '+420 233 097 211',
          link: 'https://www.exteriores.gob.es/embajadas/praga'
        },
        {
          name: 'Australian Embassy Prague',
          address: 'Klimentská 10, 110 00 Praha 1',
          phone: '+420 296 578 350',
          link: 'https://czechrepublic.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Prague',
          address: 'Ve Struhách 95/2, 160 00 Praha 6',
          phone: '+420 272 101 800',
          link: 'https://www.canadainternational.gc.ca/czech_republic-republique_tcheque/'
        },
        {
          name: 'Netherlands Embassy Prague',
          address: 'Gotthardská 6/27, 160 00 Praha 6',
          phone: '+420 233 015 200',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/czechia'
        },
        {
          name: 'Danish Embassy Prague',
          address: 'Maltézské náměstí 5, 118 01 Praha 1',
          phone: '+420 233 113 200',
          link: 'https://tjekkiet.um.dk/'
        },
        {
          name: 'Swiss Embassy Prague',
          address: 'Pevnostní 7, 162 00 Praha 6',
          phone: '+420 220 400 111',
          link: 'https://www.eda.admin.ch/prague'
        },
        {
          name: 'Indian Embassy Prague',
          address: 'Valdštejnská 6, 118 01 Praha 1',
          phone: '+420 257 531 690',
          link: 'https://www.eoiprague.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Embassy Prague',
        address: 'Tržiště 15, 118 01 Praha 1',
        phone: '+420 257 022 000',
        email: 'PragueACS@state.gov',
        link: 'https://cz.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under Czech and EU law',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Czech Republic: +420 221 729 900',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency) or 158',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.8,
          recommendations: ['Very safe and efficient system'],
          companies: ['DPP'],
          link: 'https://www.dpp.cz/'
        },
        {
          type: 'Tram',
          safety: 8.6,
          recommendations: ['Scenic and safe, covers entire city'],
          companies: ['DPP'],
          link: 'https://www.dpp.cz/'
        },
        {
          type: 'Uber',
          safety: 8.9,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/cz/en/'
        }
      ],
      nightTravel: {
        safety: 7.9,
        warnings: [
          'Some areas around train station less safe late at night',
          'Limited night public transport'
        ],
        alternatives: [
          'Night trams run on major routes',
          'Uber available 24/7',
          'Central areas generally safe for walking'
        ]
      },
      verifiedProviders: [
        {
          name: 'DPP (Prague Public Transport)',
          type: 'Public Transport',
          contact: '+420 296 191 817',
          safety: 8.6
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.9
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key card access',
        'CCTV in common areas',
        'In-room safes',
        'Historic building security'
      ],
      safeNeighborhoods: [
        'Old Town (Staré Město)',
        'Lesser Town (Malá Strana)',
        'New Town (Nové Město)',
        'Vinohrady',
        'Karlín'
      ],
      womensOnly: [
        {
          name: 'Hostel One Home',
          type: 'Hostel',
          features: ['Female dorms', 'Central location', 'Great atmosphere'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.7,
          comments: 'Felt very safe exploring Prague alone. Beautiful city with friendly locals.',
          date: '2025-01-16'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Free WiFi in many cafes and restaurants',
        'Use VPN for sensitive data',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake booking websites',
        'Phishing emails from fake accommodations',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Czech Republic',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides protection',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Currency Exchange Scam',
          location: 'Tourist areas',
          date: '2025-01-18',
          description: 'Tourists charged excessive fees at exchange office',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use bank ATMs or official exchange offices for best currency rates',
          author: 'Local Resident',
          date: '2025-01-19',
          upvotes: 134
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Czech Republic is very safe for travelers. Exercise normal precautions.',
      reason: 'Generally safe country with low crime rates.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/czech-republic-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Very safe with beautiful historic architecture',
        'Great public transport and walkable city center',
        'Affordable with good value for money'
      ]
    },
    crimeStatistics: {
      violentCrime: 3.8, // per 100,000 (2024 data - decreased 6.4% from 2023)
      propertyCrime: 1692, // per 100,000 (2024 data - significant decrease)
      sexualAssault: 7.1, // per 100,000 (2024 data - low rate for European capital)
      kidnapping: 0.1, // per 100,000 (extremely rare in Prague)
      pickpocketing: 28.5, // per 100,000 (main concern in tourist areas)
      source: 'Prague Police Statistics 2024, Numbeo Crime Index 2025',
      year: 2024,
      trend: '6.4% decrease in registered criminal offenses - lowest crime rate in city history'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Comfortable walking shoes for cobblestones',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Light rain jacket'
      ],
      safetyApps: [
        {
          name: 'PID Lítačka',
          purpose: 'Prague public transport',
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
          name: 'Tourist Police',
          number: '+420 974 851 111',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Prague Ranks #3 Safest City Globally for Travelers',
        description: 'Prague achieved lowest crime rate in city history in 2024 with 6.4% decrease. Ranked among world\'s top cities for solo female travelers with 91% feeling safe during day, 74% at night.',
        severity: 'low',
        sourceName: 'Prague Police Statistics & Travel Rankings 2025',
        sourceUrl: 'https://pragueviews.com/is-prague-safe/'
      },
      {
        title: 'Use Public Transport Harassment Reporting Systems',
        description: 'While 33% of women experience harassment on public transport, Prague launched 2024 campaign with QR codes at stops for anonymous reporting. Use PID app or contact authorities.',
        severity: 'medium',
        sourceName: 'Prague Anti-Harassment Campaign 2024',
        sourceUrl: 'https://www.expats.cz/czech-news/article/new-campaign-draws-attention-to-harassment-on-prague-public-transport'
      },
      {
        title: 'Navigate Prague\'s Historic Center Safely',
        description: 'The Old Town is compact and extremely walkable with excellent safety. Use Prague Castle and Astronomical Clock as landmarks. Cobblestone streets require good shoes but area is very secure.',
        severity: 'low',
        sourceName: 'Prague Tourism & Safety Statistics',
        sourceUrl: 'https://www.prague.eu/'
      },
      {
        title: 'Choose Female-Friendly Rideshare Options',
        description: 'New female-only rideshare services like Bolt with female drivers launched in 2024. Use official apps rather than street taxis for best safety and fair pricing.',
        severity: 'low',
        sourceName: 'Prague Transportation Updates 2024',
        sourceUrl: 'https://www.expats.cz/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $80 USD / day',
        description: 'Prague offers excellent value with beautiful architecture and good safety standards.',
        tip: 'Very affordable destination with great beer and food culture.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$15-30',
          safetyNote: 'Many excellent hostels with female-only rooms',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$50-90',
          safetyNote: 'Great value historic hotels with good security',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport',
          cost: '$1-2/ride',
          safetyDescription: 'Very safe and efficient',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe in historic center',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Public transport day passes offer great value',
        'Many free attractions including Charles Bridge and squares',
        'Excellent and affordable Czech beer and food',
        'Walking tours are often tip-based and informative'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default prague;