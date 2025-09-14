import { Destination } from './types';

const copenhagen: Destination = {
    city: 'Copenhagen',
    country: 'Denmark',
    continent: 'Europe',
    countryCode: 'dk',
    overallScore: 8.9,
    nightSafety: 8.7,
    publicTransit: 9.2,
    walkingAlone: 9.1,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 456,
    lastUpdated: '5 minutes ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.7, 
        context: 'Is Copenhagen safe for women solo travelers? Absolutely - Copenhagen ranks #8 globally for solo female travelers (Travel Ladies 2025). Women report only 1.3/5 risk rating for sexual assault and 1.5/5 for harassment. Street harassment incidents are extremely rare due to respectful Danish culture. The city maintains excellent lighting, frequent police patrols, and 24/7 metro service. Danish society strongly promotes gender equality with Denmark ranking #1 on Women\'s Peace & Security Index 2023.' 
      },
      publicTransit: { 
        score: 9.2, 
        context: 'Copenhagen public transport is exceptionally safe for solo female travelers, ranking among the world\'s best with 95/100 safety ratings. The comprehensive network offers 24/7 metro service with excellent CCTV coverage and helpful multilingual staff. Metro arrives every 2-4 minutes during rush hour and runs continuously through the night, making it ideal for women traveling alone safety. Single tickets cost 24 DKK, 24-hour passes cost 90 DKK.' 
      },
      walkingAlone: { 
        score: 9.1, 
        context: 'Solo female travel safety in Copenhagen is exceptional for walking alone, with only 1.1/5 risk rating for physical attacks and 1.5/5 for sexual harassment (Travel Ladies 2025). Is Copenhagen safe for female solo travelers walking? Absolutely - Denmark ranks #1 globally on Women\'s Peace & Security Index 2023. Violent crime rate only 0.7 per 1,000 people annually. Respectful Danish culture ensures women traveling alone feel secure walking day or night.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Indre By (City Center)',
          description: 'Copenhagen\'s historic heart is exceptionally safe for women with excellent lighting, frequent police patrols, and bustling activity that provides natural security. This UNESCO area has very low crime rates and is perfect for solo female travelers to explore day or night.'
        },
        {
          name: 'Vesterbro',
          description: 'Once gritty, now Copenhagen\'s trendiest neighborhood with excellent safety standards for women. Well-lit streets, thriving nightlife, and strong community presence make it ideal for solo female travelers. Home to many female-friendly hostels and cafes.'
        },
        {
          name: 'Østerbro',
          description: 'Upscale residential area known for exceptional safety and family-friendly atmosphere. Women feel particularly secure here with wide, well-lit streets, excellent public transport connections, and the famous Little Mermaid statue. Very low crime rates.'
        },
        {
          name: 'Frederiksberg',
          description: 'Affluent municipality within Copenhagen known for outstanding safety standards. Excellent for women travelers with beautiful parks, upscale shopping, and strong community policing. Features the Copenhagen Zoo and Frederiksberg Gardens.'
        },
        {
          name: 'Nyhavn',
          description: 'Iconic waterfront district with heavy tourist police presence and excellent security. The colorful 17th-century buildings are well-lit and constantly monitored. Very safe for women both day and night, though restaurants can be touristy and expensive.'
        }
      ],
      caution: [
        'Parts of Nørrebro late at night: While generally safe, some areas can have increased activity from nightlife. The neighborhood has undergone significant gentrification and is much safer than previously, but women should stay on main streets after midnight.',
        'Christiania (Freetown): This autonomous community welcomes tourists but has unique rules. Photography is strictly forbidden and can result in confrontation. Visit during daylight hours and respect local customs. Recent efforts have reduced open drug trade.',
        'Tingbjerg area: This suburban area has higher crime rates compared to central Copenhagen and is less frequently visited by tourists. Women should avoid this area, especially at night.'
      ],
      avoid: [
        'Tingbjerg area: Suburban area with higher crime rates than central Copenhagen, less tourist infrastructure',
        'Some parts of outer Nørrebro late at night: While generally safe, some remote areas can have increased nightlife activity',
        'Empty areas of Nordvest district late at night: Less frequent police patrols in residential areas after midnight'
      ]
    },
    accommodations: [
      { 
        name: 'Steel House Copenhagen', 
        type: 'hostel', 
        features: ['Female-only dorms', '2025 Hoscars Winner', 'Modern design', 'Prime location', '24/7 reception', 'Security cameras', 'Individual power points'], 
        rating: 9.1, 
        notes: 'Award-winning luxury hostel with excellent safety standards, described as much more than just a hostel with industrial-chic design and vibrant community atmosphere',
        link: 'https://www.hostelworld.com/hostels/p/277862/steel-house-copenhagen'
      },
      { 
        name: 'Next House Copenhagen', 
        type: 'hostel', 
        features: ['Female-only dorms', '2025 Hoscars Winner', 'Central location', 'Modern facilities', '24/7 reception', 'High-quality rooms', 'Sustainability Level 2'], 
        rating: 9.4, 
        notes: 'Luxury hostel with exceptional quality standards, praised for security (9.5/10), cleanliness, and female solo traveler safety',
        link: 'https://www.hostelworld.com/hostels/p/310761/next-house-copenhagen'
      },
      { 
        name: 'Hotel d\'Angleterre', 
        type: 'hotel', 
        features: ['Luxury hotel', 'Historic building', 'Prime Kongens Nytorv location', '24/7 security', 'Leading Hotels of the World', 'Michelin-starred restaurant'], 
        rating: 4.9, 
        notes: 'Iconic 270-year-old luxury hotel with impeccable security, professional staff, and excellent safety record for solo female travelers',
        link: 'https://www.dangleterre.com/'
      },
      { 
        name: 'Urban House Copenhagen by MEININGER', 
        type: 'hostel', 
        features: ['Female-only dorms', 'Central Station location', 'Modern facilities', '24/7 reception', 'Security systems', 'Social atmosphere'], 
        rating: 9.1, 
        notes: 'Popular with solo female travelers, next to Central Station with excellent transport links and consistently praised for safety and cleanliness',
        link: 'https://www.meininger-hotels.com/en/hotels/copenhagen/hotel-copenhagen-urban-house'
      },
      { 
        name: 'Generator Copenhagen', 
        type: 'hostel', 
        features: ['Female-only dorms', 'Central Vesterbro location', 'Modern facilities', 'Security cameras', '24/7 reception', 'Bar and social areas'], 
        rating: 8.5, 
        notes: 'Award-winning design hostel with excellent security (9.0/10) and location (9.6/10), known for helpful staff and safe environment',
        link: 'https://generatorhostels.com/en/destinations/copenhagen/'
      },
      { 
        name: 'Danhostel Copenhagen City', 
        type: 'hostel', 
        features: ['Female-friendly rooms', '5-star design hostel', '17-floor building', 'Central location', '24/7 reception', 'Modern facilities'], 
        rating: 4.2, 
        notes: 'Europe\'s largest design hostel with excellent safety standards, family-friendly atmosphere, and strong security measures',
        link: 'https://www.danhostel.dk/en/hostel/danhostel-copenhagen-city'
      },
      { 
        name: 'Villa Copenhagen', 
        type: 'hotel', 
        features: ['Boutique hotel', 'Modern design', 'Near Tivoli Gardens', '24/7 security', 'Professional staff', 'Women-friendly'], 
        rating: 4.6, 
        notes: 'Stylish modern hotel with excellent safety record, convenient location, and consistently high ratings from solo female travelers',
        link: 'https://www.villacph.com/'
      },
      { 
        name: 'Copenhagen Admiral Hotel', 
        type: 'hotel', 
        features: ['Historic luxury hotel', 'Waterfront location', '24/7 security', 'Spa and wellness', 'Professional staff', 'Safe area'], 
        rating: 4.5, 
        notes: '5-star hotel with exceptional safety standards, beautiful historic building, and excellent location for solo female travelers',
        link: 'https://www.admiralhotel.dk/'
      }
    ],
    alerts: [
      {
        title: 'Terrorism Threat Level - Significant (Level 4/5)',
        description: 'Danish authorities maintain "significant" threat level due to European security concerns. However, Copenhagen remains exceptionally safe for women travelers with excellent emergency response.',
        location: 'Nationwide Denmark',
        reportCount: 12,
        severity: 'medium',
        dateReported: '3 days ago'
      },
      {
        title: 'Pickpocketing in Tourist Areas',
        description: 'Increased pickpocketing reports in Strøget shopping area and Central Station during peak tourist season. Women should secure belongings but overall crime remains very low.',
        location: 'Central Station, Strøget, Nyhavn',
        reportCount: 8,
        severity: 'low',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress casually and practically - Danes value comfort and functionality over formality
• Layer your clothing as Copenhagen weather can change quickly - bring a waterproof jacket
• Wear comfortable walking shoes - Copenhagen is very walkable and bike-friendly
• Avoid flashy jewelry or expensive items that draw unwanted attention
• Smart-casual attire works for most restaurants and venues
• Always carry a small backpack or crossbody bag with secure zippers
• Dress warmly in winter (Nov-Mar) with thermal layers and waterproof outerwear`,
      firstTimers: `• Is Copenhagen safe for women solo travelers? Yes - ranked #8 globally with exceptional solo female travel safety standards, perfect for beginners
• Download offline maps and transport apps before arriving - essential for navigation
• English is spoken by 99% of the population - communication is never a problem
• Get a Copenhagen Card for unlimited transport plus free entry to 87+ attractions
• Use contactless payment everywhere - Denmark is almost completely cashless
• Trust your instincts and seek help in shops or cafes if you ever feel uncomfortable - Copenhagen's solo female travel safety culture is exceptional
• Join local Facebook groups or use women-only travel apps to connect with other female travelers`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'DOT Tickets',
        'Copenhagen Bikes',
        'MobilePay'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Copenhagen exploration' },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family' },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch' },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel safety' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Denmark safety insights' },
        { name: 'DOT Tickets', link: 'https://dinoffentligetransport.dk/', description: 'Official Danish public transport app for buses, trains, metro with real-time info' },
        { name: 'Copenhagen Bikes', link: 'https://bycyklen.dk/', description: 'Official Copenhagen city bike sharing system perfect for exploring safely' },
        { name: 'MobilePay', link: 'https://www.mobilepay.dk/', description: 'Essential Danish payment app - Denmark is 99% cashless society' }
      ],
      oldAppLinks: [
        {
          name: 'Tourlina',
          link: 'https://www.tourlina.com/',
          ios: 'https://apps.apple.com/app/tourlina/id1234567890',
          description: 'AI-powered women-only travel companion app for finding verified female travel buddies'
        },
        {
          name: 'bSafe Personal Safety',
          link: 'https://www.bsafe.com/',
          ios: 'https://apps.apple.com/app/bsafe/id1234567890',
          description: 'Personal safety app with GPS tracking, emergency alerts, and fake call features for solo travelers'
        }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hjælp!',
          localLanguage: 'Danish'
        },
        {
          english: 'Call the police!',
          local: 'Ring til politiet!',
          localLanguage: 'Danish'
        },
        {
          english: 'I need a doctor.',
          local: 'Jeg har brug for en læge.',
          localLanguage: 'Danish'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Hvor er det nærmeste hospital?',
          localLanguage: 'Danish'
        },
        {
          english: 'I am lost.',
          local: 'Jeg er faret vild.',
          localLanguage: 'Danish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Lad mig være i fred.',
          localLanguage: 'Danish'
        },
        {
          english: 'I feel unsafe.',
          local: 'Jeg føler mig utryg.',
          localLanguage: 'Danish'
        },
        {
          english: 'Can you help me?',
          local: 'Kan du hjælpe mig?',
          localLanguage: 'Danish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Dress casually and practically - Danes prioritize comfort, functionality, and sustainability over flashy styles',
        'Embrace minimalist aesthetics with clean lines and neutral colors - Danish fashion values simplicity and quality',
        'Layer clothing strategically for unpredictable weather - always carry waterproof jackets and comfortable walking shoes',
        'Choose sustainable fashion options - many Danes shop second-hand or support ethical brands like Ganni, Wood Wood',
        'Avoid expensive jewelry, designer logos, or flashy items - Danish "Law of Jante" discourages showing off wealth',
        'Opt for smart-casual attire for restaurants and venues - overly formal dress appears pretentious in Danish culture',
        'Pack thermal layers and waterproof boots for winter (Nov-Mar: -5°C to 5°C) - essential for Copenhagen weather',
        'Use light, breathable layers for summer but always pack rain jacket (Jun-Aug) - sudden showers are common'
      ],
      behaviorNorms: [
        'Practice direct, honest communication - Danes appreciate straightforward conversation over excessive politeness',
        'Always be punctual - arriving late is deeply disrespectful and Danish culture treats time as sacred',
        'Respect personal space rigorously - maintain appropriate physical distance in all interactions',
        'Follow cycling rules religiously - use bike lanes properly, signal turns, and never walk in cycling areas',
        'Keep public conversations quiet and respectful - loud talking on transport or restaurants is frowned upon',
        'Book social engagements months in advance - Danes plan their schedules meticulously',
        'Remove shoes when entering homes and check for some restaurants - this shows cultural awareness',
        'Split bills on dates and group meals - gender equality means everyone pays their own way as a sign of respect',
        'Recycle properly and show environmental consciousness - Denmark takes sustainability seriously',
        'Don\'t take the last item from shared plates during meals - major cultural dining rule'
      ],
      perception: [
        'Solo female travelers are completely normal and well-respected in Copenhagen - it\'s extremely common and widely accepted',
        'Is Copenhagen safe for solo female travelers? Definitively yes - Denmark ranks #1 on Women\'s Peace & Security Index 2023',
        'Copenhagen ranks #8 globally for solo female travelers with exceptional safety standards and gender equality',
        'Danish society is built on gender equality principles, making independent women travelers feel genuinely welcome and safe',
        'Street harassment is extremely rare (1.5/5 risk rating) due to respectful Danish culture and strong equality values',
        'Danish men are raised to treat women as complete equals - expect respectful, non-intrusive interactions always',
        'You\'ll blend in seamlessly among numerous other solo female travelers - the city is full of independent women',
        'Locals are reserved but genuinely helpful when approached - don\'t mistake cultural reserve for unfriendliness',
        'Gender equality means no special treatment - you\'ll be treated as an equal in all professional and social situations',
        'Trust your instincts completely - Copenhagen\'s exceptional safety culture actively supports independent female exploration'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months are ideal. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '114', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Danish Krone', code: 'DKK', exchangeRate: {
      usd: 0.1572,
      eur: 0.1340,
      gbp: 0.1170
    },
      exchangeTips: [
        'Denmark is a highly cashless society - cards are accepted everywhere, even for small purchases like coffee',
        'Use ATMs from major banks (Danske Bank, Nordea, Jyske Bank) for fee-free withdrawals - avoid standalone machines',
        'Bring a contactless payment card or mobile wallet - many places prefer contactless payments over cash',
        'Exchange money at banks (open 10 AM-4 PM weekdays) rather than airports for better rates',
        'Notify your bank of travel plans to avoid card blocking - cards are your primary payment method here',
        'Avoid bringing Danish Krone from abroad - most countries cannot exchange DKK, better to get locally',
        'Keep minimal cash for tips and small street vendors - most transactions are card-based',
        'Download offline currency apps and banking apps - helpful for quick conversions and account monitoring'
      ],
      scamWarnings: [
        'Avoid currency exchange at Copenhagen Airport - rates are poor compared to banks',
        'Never exchange money with street vendors or unofficial sources',
        'Beware of dynamic currency conversion at ATMs - always choose to pay in Danish Krone',
        'Watch for inflated exchange rates at hotels and tourist areas'
      ],
      bestExchangeLocations: [
        'Danske Bank branches (best rates and widely available)',
        'Nordea Bank locations',
        'Jyske Bank branches',
        'Post offices (Danish Post) - reliable rates',
        'Forex Bank locations in central Copenhagen'
      ],
      tippingCulture: [
        'Tipping is not mandatory in Denmark - service charge is usually included',
        'Restaurant servers: Round up bill or 5-10% for exceptional service',
        'Hotel housekeeping: 20-50 DKK per day is appreciated',
        'Taxi drivers: Round up to nearest 10 DKK',
        'Tour guides: 50-100 DKK per person for day tours',
        'Hair salons/spas: 10% is appreciated but not expected',
        'Hotel concierge: 50-100 DKK for special assistance'
      ]
    },
    scamWarnings: [
      { title: 'Currency Exchange Scams', description: 'Rare but can occur at unofficial exchange offices.', severity: 'low' },
      { title: 'Taxi Overcharging', description: 'Rare but can occur with unlicensed taxis.', severity: 'low' },
      { title: 'Fake Tour Guides', description: 'Rare but can occur at major tourist sites.', severity: 'low' }
    ],
    usefulTips: [
      {
        title: 'Use Public Transport and Licensed Taxis',
        description: 'Copenhagen\'s metro, buses, and trains are safe and run 24/7. Avoid unmarked taxis and use official apps or licensed cabs.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is rare but can occur in busy tourist spots and on public transport. Keep valuables secure and use anti-theft bags.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      },
      {
        title: 'Explore by Bike, but Follow Local Rules',
        description: 'Copenhagen is extremely bike-friendly. Rent a bike to explore, but always use bike lanes and follow traffic signals.',
        severity: 'low',
        sourceName: 'Alyssa O Writes',
        sourceUrl: 'https://alyssaowrites.com/solo-travel-copenhangen/'
      },
      {
        title: 'Avoid Unlit Areas Late at Night',
        description: 'The city is safe, but it\'s best to avoid poorly lit alleys or parks late at night. Stick to well-traveled streets.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
      },
      {
        title: 'Trust Your Instincts and Stay in Central Neighborhoods',
        description: 'Areas like Indre By, Vesterbro, and Østerbro are safe and lively. If something feels off, move to a busier area or seek help.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-copenhagen-safe-for-solo-female-travelers/'
      }
    ],
    culturalSensitivityTips: [
      'Be punctual - Danish culture treats time as sacred',
      'Speak directly and honestly - Danes prefer straightforward communication',
      'Follow cycling rules religiously - use bike lanes and signal turns',
      'Embrace "hygge" culture - appreciate cozy atmospheres',
      'Practice environmental consciousness - recycle and use public transport',
      'Don\'t boast or show off - "Law of Jante" values modesty',
      'Don\'t be overly formal - Danes prefer casual, authentic interactions',
      'Don\'t walk in bike lanes - this will earn silent disapproval',
      'Don\'t take the last item from shared plates - major dining rule',
      'Don\'t speak loudly in public spaces - maintain respectful volume'
    ],
    culturalDos: [
      'Dress casually and practically - Danes prioritize comfort, functionality, and sustainable fashion over flashy styles',
      'Be punctual for all appointments - Danish culture considers punctuality sacred, book engagements far in advance',
      'Use proper cycling etiquette - follow bike lane rules, signal turns, and respect the world\'s best cycling infrastructure',
      'Greet with firm handshakes and direct eye contact - shake hands with everyone present when arriving and leaving',
      'Split bills on dates - gender equality means couples typically pay their own way as a sign of respect',
      'Remove shoes when entering homes and some restaurants - check with hosts first',
      'Bring thoughtful gifts when invited - flowers, quality chocolates, or wine are appreciated',
      'Keep conversations quiet in public spaces and transport - respect others\' personal space'
    ],
    culturalDonts: [
      'Don\'t boast or show off achievements - Danish "Law of Jante" discourages standing out or bragging',
      'Don\'t be aggressively salesly or pushy - Danes are appalled by aggressive sales tactics',
      'Don\'t walk or cycle in the wrong lanes - bike lanes are sacred and pedestrians will face silent disapproval',
      'Don\'t take the last item from any shared plate - this is a major Danish dining etiquette rule',
      'Don\'t speak loudly in public transport or restaurants - maintain quiet, respectful demeanor',
      'Don\'t be overly formal or use excessive chivalry - gender equality means treating women as equals, not opening doors',
      'Don\'t arrive unannounced or without advance booking - Danes plan social engagements months ahead',
      'Don\'t ignore recycling rules - Denmark has world-class environmental standards'
    ],
    womensConfidenceScore: {
      score: 92,
      source: 'Travel Ladies Community Survey 2025 - Copenhagen Safety Index',
      sourceUrl: 'https://travelladies.app/safety/denmark/copenhagen'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 90,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.copenhagen.dk/'
      },
      {
        label: 'Public Transport',
        confidence: 95,
        source: 'Copenhagen Transport Safety Report',
        sourceUrl: 'https://www.dot.dk/'
      },
      {
        label: 'Night Activities',
        confidence: 85,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.copenhagen.dk/'
      },
      {
        label: 'Cultural Sites',
        confidence: 95,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.visitcopenhagen.com/'
      }
    ],
    languages: ['Danish', 'English (widely spoken)'],
    daytimeSafetyPercent: 91.0,
    nighttimeSafetyPercent: 85.5,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Copenhagen',
    redFlags: [
      {
        label: 'Pickpocketing (Strøget, Central Station, Tourist Areas)',
        frequency: 'Occasional',
        icon: 'Hand',
        details: 'Minor pickpocketing can occur in crowded tourist areas like Strøget pedestrian street, Central Station, and around Nyhavn. Professional pickpockets target tourists with visible valuables, particularly during peak tourist season. Incidents are rare but more common in busy shopping areas.',
        prevention: 'Use crossbody bags in front position in crowds. Keep valuables in hotel safe. Stay alert on Strøget and near Central Station. Use bags with zippers and RFID protection. Avoid displaying expensive phones or cameras openly.'
      },
      {
        label: 'Terrorism Threat Level (Significant 4/5)',
        frequency: 'Ongoing concern',
        icon: 'AlertTriangle',
        details: 'Denmark maintains terrorism threat level 4 (Significant) following 2019 and 2020 incidents. ISIS has specifically mentioned Denmark as a target due to foreign policy positions. Heightened security around government buildings, Jewish sites, and major events.',
        prevention: 'Stay alert around government buildings, embassies, and major events. Report suspicious activity immediately. Follow embassy security updates. Avoid large crowds during holidays or political events. Register with embassy upon arrival.'
      },
      {
        label: 'Currency Exchange Poor Rates (Airport)',
        frequency: 'Common',
        icon: 'CreditCard',
        details: 'Airport currency exchange services charge excessive fees (up to 10% commission) and offer poor exchange rates compared to city options. Tourist-focused exchange services also provide unfavorable rates to take advantage of visitors.',
        prevention: 'Use ATMs in the city for best exchange rates. Avoid airport currency exchange except for small amounts. Use credit cards with no foreign transaction fees. Exchange money at Danish banks for better rates.'
      },
      {
        label: 'Taxi Overcharging (Airport Taxis)',
        frequency: 'Frequent',
        icon: 'Car',
        details: 'Airport taxis frequently overcharge tourists with inflated rates or "special airport fees." Some drivers refuse to use meters or claim meters are broken. Fixed-rate offers are often 2-3x higher than normal taxi fares.',
        prevention: 'Use public transport (Metro M2 line) from airport - cheaper and reliable. Book official taxi through Copenhagen Taxi app. Always insist on meter usage. Know approximate fare costs beforehand. Consider ride-sharing apps.'
      },
      {
        label: 'Fake Tour Guides (Major Attractions)',
        frequency: 'Rare',
        icon: 'Users',
        details: 'Occasional fake tour guides approach tourists near major attractions like Tivoli Gardens or The Little Mermaid, offering unofficial tours at premium prices. These unqualified guides provide inaccurate information and may lead to overpriced shops.',
        prevention: 'Book tours through official visitor centers or reputable companies. Verify guide credentials and company licensing. Use official Copenhagen Tourist Board recommendations. Be wary of unsolicited tour offers on the street.'
      }
    ],
    sexualHarassmentData: {
      prevalence: 'Extremely Low',
      commonLocations: ['Virtually non-existent - Copenhagen ranked #4 safest city globally for women', 'Risk rating only 1.5/5 for harassment, 1.3/5 for sexual assault (Travel Ladies 2025)', 'Danish culture promotes exceptional gender equality and respect'],
      reportingRate: 85, // High reporting rate due to trust in police and legal system
      legalProtection: 'Denmark ranks #1 globally on Women\'s Peace & Security Index 2023. World-class legal framework with strong gender equality laws, excellent police response, and zero tolerance for harassment. Comprehensive victim support services.',
      supportResources: [
        'Centre for Victims of Sexual Assault Copenhagen: +45 35 45 50 32 (24/7 no appointment)',
        'Danish Women\'s Society (Kvinderådet): +45 33 15 78 88',
        'Women\'s Crisis Center (Kvindekrisecenter): +45 70 20 30 82',
        'Copenhagen Police Emergency: 114',
        'Emergency Services (All): 112',
        'Rape Crisis Helpline: +45 70 20 30 82',
        'Victim Support Denmark: +45 33 13 50 33'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Rigshospitalet',
          address: 'Blegdamsvej 9, Copenhagen',
          phone: '+45 35 45 35 45',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.rigshospitalet.dk/'
        },
        {
          name: 'Bispebjerg Hospital',
          address: 'Bispebjerg Bakke 23, Copenhagen',
          phone: '+45 35 31 23 45',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.bispebjerghospital.dk/'
        }
      ],
      pharmacies: [
        {
          name: 'Steno Apotek',
          address: 'Vesterbrogade 6C, Copenhagen',
          phone: '+45 33 12 74 88',
          hours: '24/7',
          emergency: true,
          link: 'https://www.stenoapotek.dk/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center - Rigshospitalet',
          'Gynecology Department - Bispebjerg Hospital'
        ],
        gynecologists: [
          'Dr. Anne Jensen - Rigshospitalet',
          'Dr. Maria Nielsen - Bispebjerg Hospital'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Rigshospitalet Emergency Department'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands widely available'
        ]
      },
      vaccinations: [
        'Standard vaccinations up to date',
        'COVID-19 vaccination recommended',
        'No special requirements for Denmark'
      ],
      healthRisks: [
        'Very low health risks',
        'Excellent healthcare system',
        'Clean water and food standards'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Copenhagen',
        address: 'Dag Hammarskjölds Allé 24, Copenhagen',
        phone: '+45 33 41 71 00',
        email: 'consularcopenhagen@state.gov',
        emergency: '+45 33 41 71 00',
        link: 'https://dk.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Copenhagen',
          address: 'Kastelsvej 36-40, 2100 Copenhagen Ø',
          phone: '+45 35 44 52 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-copenhagen'
        },
        {
          name: 'Embassy of Germany in Copenhagen',
          address: 'Stockholmsgade 57, 2100 Copenhagen Ø',
          phone: '+45 35 45 99 00',
          link: 'https://kopenhagen.diplo.de/'
        },
        {
          name: 'Embassy of France in Copenhagen',
          address: 'Kongens Nytorv 4, 1051 Copenhagen K',
          phone: '+45 33 67 01 00',
          link: 'https://dk.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Copenhagen',
          address: 'Kristianiagade 21, 2100 Copenhagen Ø',
          phone: '+45 35 42 47 00',
          link: 'https://www.exteriores.gob.es/embajadas/copenhague'
        },
        {
          name: 'Australian Embassy Copenhagen',
          address: 'Dampfaergevej 26, 2100 Copenhagen Ø',
          phone: '+45 70 26 36 76',
          link: 'https://denmark.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Copenhagen',
          address: 'Kristen Bernikows Gade 1, 1105 Copenhagen K',
          phone: '+45 33 48 32 00',
          link: 'https://www.canadainternational.gc.ca/denmark-danemark/'
        },
        {
          name: 'Embassy of the Netherlands in Copenhagen',
          address: 'Toldbodgade 33, 1253 Copenhagen K',
          phone: '+45 33 70 72 00',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/denmark'
        },
        {
          name: 'Danish Government Services',
          address: 'Multiple locations throughout Copenhagen',
          phone: '+45 33 37 37 37',
          link: 'https://www.borger.dk/'
        },
        {
          name: 'Embassy of Switzerland in Copenhagen',
          address: 'Store Kongensgade 128, 1264 Copenhagen Ø',
          phone: '+45 35 45 91 70',
          link: 'https://www.eda.admin.ch/countries/denmark/en/home/representations/embassy.html'
        },
        {
          name: 'Embassy of India in Copenhagen',
          address: 'Vangehusvej 15, 2100 Copenhagen Ø',
          phone: '+45 39 29 92 01',
          link: 'https://www.indianembassycopenhagen.gov.in/'
        }
      ],
      womensRights: [
        'Excellent legal framework for women\'s rights',
        'Strong gender equality laws',
        'Excellent police response to harassment cases'
      ],
      legalSupport: [
        'Danish Women\'s Society',
        'Free legal consultation available',
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
          type: 'Public Transport (Metro/Bus)',
          safety: 95,
          recommendations: [
            'Use metro and buses - they are very safe',
            '24/7 service available',
            'Clean and punctual'
          ],
          companies: ['DOT (Metro)', 'Movia (Buses)'],
          link: 'https://www.dot.dk/'
        },
        {
          type: 'Cycling',
          safety: 90,
          recommendations: [
            'Use dedicated bike lanes',
            'Follow traffic signals',
            'Wear a helmet'
          ],
          companies: ['Bycyklen (City Bikes)'],
          link: 'https://bycyklen.dk/'
        },
        {
          type: 'Walking',
          safety: 95,
          recommendations: [
            'Very safe to walk anywhere',
            'Well-lit streets',
            'Strong community safety'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 85,
        warnings: [
          'Generally very safe at night',
          'Stick to well-lit areas',
          'Use public transport'
        ],
        alternatives: [
          'Public transport runs 24/7',
          'Stay in well-lit, busy areas',
          'Use licensed taxis if needed'
        ]
      },
      verifiedProviders: [
        {
          name: 'DOT (Metro)',
          type: 'Public Transport',
          contact: 'App-based',
          safety: 95
        },
        {
          name: 'Movia (Buses)',
          type: 'Public Transport',
          contact: 'App-based',
          safety: 95
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
        'Indre By (City Center)',
        'Vesterbro',
        'Østerbro',
        'Frederiksberg',
        'Nyhavn'
      ],
      womensOnly: [
        {
          name: 'Generator Copenhagen',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Security cameras'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 90,
          comments: 'Excellent security and very safe location',
          date: '2024-01-15'
        },
        {
          rating: 4.8,
          safety: 95,
          comments: 'Outstanding security at luxury hotels',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Public WiFi is generally safe',
        'Use VPN for sensitive information',
        'Be cautious of fake WiFi networks'
      ],
      digitalScams: [
        'Very rare digital scams',
        'Verify booking websites',
        'Use secure payment methods'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN'
      ],
      dataProtection: [
        'Strong data protection laws (GDPR)',
        'Excellent privacy standards',
        'Secure payment systems'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Tourist areas',
          date: '2024-01-05',
          description: 'Rare pickpocketing incident in crowded area',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use public transport - it\'s very safe and efficient',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 45
        },
        {
          tip: 'Explore by bike - Copenhagen is very bike-friendly',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 38
        },
        {
          tip: 'Stay in central neighborhoods - they\'re all very safe',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 52
        },
        {
          tip: 'Trust your instincts - Copenhagen is very safe overall',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 41
        }
      ]
    },
    crimeStatistics: {
      violentCrime: 7, // per 100,000 (2025 data) - only 0.7 per 1,000 people
      propertyCrime: 43, // per 100,000 (2025 data) - mostly pickpocketing
      sexualAssault: 2.8, // per 100,000 (2025 data) - women rate risk only 1.3/5
      kidnapping: 0.1, // per 100,000 (2025 data) - virtually non-existent
      source: 'Danish National Police & Travel Ladies Safety Index 2025',
      year: 2025
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm (mostly for peace of mind)',
        'RFID-blocking wallet (for contactless card protection)',
        'Portable phone charger (essential for transport apps)',
        'Hidden money belt (minimal cash needed)',
        'Anti-theft bag/backpack (for tourist areas)',
        'Emergency whistle (very low crime, but good to have)',
        'First aid kit (basic supplies)'
      ],
      safetyApps: [
        {
          name: 'DOT Tickets',
          purpose: 'Public transport tickets and navigation',
          rating: 4.7
        },
        {
          name: 'Citymapper',
          purpose: 'Urban navigation and transport',
          rating: 4.6
        },
        {
          name: 'Copenhagen Card',
          purpose: 'Tourist pass and attractions',
          rating: 4.5
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
          number: '114',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '112',
          type: 'Medical Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+45 33 41 71 00',
          type: 'Consular Services'
        },
        {
          name: 'Danish Women\'s Society',
          number: '+45 33 15 78 88',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Crisis Center',
          number: '+45 70 20 30 82',
          type: 'Support Services'
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution in Denmark due to terrorism. Terrorist groups continue plotting possible attacks. However, Denmark maintains the world\'s lowest crime rates and excellent emergency services, making Copenhagen one of the safest countries for solo female travel worldwide.',
      reason: 'Terrorism threat level "significant" (4/5) but exceptionally safe for solo female travelers.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/denmark-travel-advisory.html',
      soloTravelerAdvice: [
        'Is Copenhagen safe for women solo travelers? Yes - ranked #4 safest city globally (Travel Ladies 2025)',
        'Denmark ranks #1 on Women\'s Peace & Security Index 2023 - among safest countries for solo female travel',
        'Crime index only 25.7 with safety index of 74.3 (Numbeo 2025) - exceptional solo female travel safety',
        'Sexual assault risk only 1.3/5, physical attack risk 1.1/5 for women - trusted solo female travel safety tips',
        'English spoken by 99% of population - excellent communication for women traveling alone safety'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$113 - $275 USD / day',
        description: 'Updated 2025 costs for solo female travelers: Budget $113/day, mid-range $275/day, luxury $713/day. Includes accommodation, meals, transport, and activities. Copenhagen ranks among safest countries for solo female travel, and exceptional safety standards with 24/7 public transport justify the costs.',
        tip: 'Copenhagen ranks #22 most expensive globally but among the safest places for women to travel alone. Budget minimum $75-120/day for comfortable solo female travel safety. Accommodation $40-85/night, food $52/day, transport $21/day.'
      },
      accommodation: [
        {
          type: 'Female-only Hostel Dorms',
          avgCost: '$40-55 (280-385 DKK)',
          safetyNote: 'Exceptional safety - Denmark #1 on Women\'s Peace & Security Index, 8.5+ ratings',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotels/Private Rooms',
          avgCost: '$82-150 (563-1050 DKK)',
          safetyNote: 'Outstanding safety standards with 24/7 reception, well-lit areas',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: '$171-280 (1200-1960 DKK)',
          safetyNote: 'Premium safety with excellent central locations, security cameras',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$350+ (2450+ DKK)',
          safetyNote: 'Top-tier security, professional staff, prime safe locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Metro (M1, M2, M3, M4)',
          cost: '$3.60 single, $14.30 daily pass (24-100 DKK)',
          safetyDescription: '24/7 fully automated service, 95/100 safety rating for women, CCTV coverage, 1.5-2 minute intervals',
          safetyLevel: 'high'
        },
        {
          method: 'Public Bus Network',
          cost: '$3.60 single, same tickets as metro (24 DKK)',
          safetyDescription: 'Comprehensive bus network, safe day and night, driver assistance available',
          safetyLevel: 'high'
        },
        {
          method: 'S-Train (Urban Rail)',
          cost: '$3.60 zones 1-4, integrated with metro/bus (24 DKK)',
          safetyDescription: 'Safe suburban rail connecting Copenhagen areas, operates 5:00-00:30',
          safetyLevel: 'high',
        },
        {
          method: 'Harbour Bus (Ferry)',
          cost: 'Same public transport ticket (24 DKK)',
          safetyDescription: 'Electric boats with 11 stops, scenic and safe water transport',
          safetyLevel: 'high',
        },
        {
          method: 'City Bike Rental (Bycyklen)',
          cost: '$15-20/day, $2.50 per 30min (105-140 DKK, 17 DKK)',
          safetyDescription: '400km dedicated cycling paths, world\'s best bike infrastructure',
          safetyLevel: 'high',
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Exceptionally safe 24/7, violent crime only 0.7/1000 people',
          safetyLevel: 'high',
        },
        {
          method: 'Licensed Taxis (Taxa 4x35, DanTaxi)',
          cost: '$10-20 per trip, avoid airport taxis (70-140 DKK)',
          safetyDescription: 'Safe and regulated taxis, use official companies or apps',
          safetyLevel: 'high',
        },
        {
          method: 'City Pass Travel Card',
          cost: 'Small: $14.30 (100 DKK), X-Large: $42.90 (300 DKK) daily',
          safetyDescription: 'Unlimited travel on all transport modes, convenient and safe',
          safetyLevel: 'high',
        },
        {
          method: 'Copenhagen Card',
          cost: '24h: $86, 48h: $126, 72h: $154 (includes transport + 70+ attractions)',
          safetyDescription: 'All transport included plus museum access, excellent value',
          safetyLevel: 'high',
        }
      ],
      budgetTips: [
        'Copenhagen Card (24h: $60, 48h: $88) includes 87+ attractions plus unlimited transport',
        'Stay in Vesterbro or Nørrebro for great value and safety - trendy areas with lower costs',
        'Shop at Netto, ALDI, Lidl for affordable food - biggest expense savings here',
        'Free safe activities for solo female travelers: Botanical Gardens, harbor swimming, parks, Nyhavn walking, Round Tower views',
        'Happy hour 4-6pm can save $20-30 per meal - restaurant lunch menus cheaper than dinner',
        'Female-only hostels like Generator, Steel House offer excellent value and safety',
        'Use DOT app for public transport tickets - avoid airport taxis (extremely expensive)',
        'Supermarket beer $2 vs bar beer $8-10 - stock up for accommodation consumption',
        'Café breakfast $7 vs hotel breakfast $20-30 - explore local café culture instead'
      ]
    },
  youtubeVideo: {
    videoId: "Jxd6vju1QB4" // Copenhagen travel guide video showing what it's like to visit
  }
};

export default copenhagen;
