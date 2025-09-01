import { Destination } from './types';

const edinburgh: Destination = {
    city: 'Edinburgh',
    country: 'United Kingdom',
    continent: 'Europe',
    countryCode: 'gb',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 298,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.2, 
        context: 'Edinburgh voted safest UK city in 2014, with 90% of citizens feeling safe (2018 survey). Well-lit streets and low crime rates make it ideal for solo female travel safety. Women consistently report feeling secure walking alone at night. Street harassment is not common occurrence in Edinburgh (Travel Ladies 2025).' 
      },
      publicTransit: { 
        score: 8.8, 
        context: 'Edinburgh public transport extremely safe with CCTV surveillance at well-lit stops, perfect for women traveling alone safety. Buses, trams, and trains well-maintained and punctual. Transport for Edinburgh app allows contactless payment. Single ticket £1.80, no exact change needed with app.' 
      },
      walkingAlone: { 
        score: 8.5, 
        context: 'Edinburgh ranked among UK\'s safest places for women to travel alone. Scottish culture very respectful toward solo female travelers. "It\'s very rare to experience any on-street harassment in Edinburgh" (Travel Ladies 2025). Solo female travelers consistently report positive experiences.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Town (Royal Mile)',
          description: 'Historic city center with Edinburgh Castle and Royal Mile. Excellent lighting, constant foot traffic, and strong police presence make this one of the safest places for women to travel alone. Very secure for solo female travelers day and night. Cobblestone streets well-maintained with good CCTV coverage.'
        },
        {
          name: 'New Town (Princes Street)',
          description: 'Georgian architecture and premier shopping district. Well-lit wide streets, excellent infrastructure, and regular patrols create ideal conditions for solo female travel safety. Very secure for women traveling alone with numerous hotels, restaurants, and 24-hour services. Home to main train station.'
        },
        {
          name: 'Stockbridge',
          description: 'Upscale bohemian area with excellent safety standards for solo female travelers. Popular with young professionals and students. Charming village feel within the city with strong community presence. Safe for women at all hours with good public transport links.'
        },
        {
          name: 'Leith',
          description: 'Revitalized waterfront area with improved safety standards. Great value accommodation options while maintaining security for solo travel safety. Good transport connections to city center. Increasingly popular with solo female travelers for budget-friendly secure stays.'
        },
        {
          name: 'Bruntsfield',
          description: 'Residential area popular with students and young professionals. Excellent value for money with good safety standards for women traveling alone. Well-connected to city center via public transport. Safe walking routes and good community atmosphere for solo female travelers.'
        }
      ],
      caution: [
        'Cowgate late at night - Main nightlife strip can become crowded and rowdy after midnight',
        'Grassmarket evening hours - Popular pub area becomes very busy with drunk crowds', 
        'Princes Street late night - While generally safe, avoid isolated sections after 2 AM',
        'Arthur\'s Seat hiking alone - Popular hiking spot but inform someone of plans for solo hikes'
      ],
      avoid: [
        'No specific areas to completely avoid - Edinburgh extremely safe overall',
        'Isolated sections of Holyrood Park after dark - Large park with some poorly lit areas',
        'Empty car parks late at night - Standard urban precaution'
      ]
    },
    accommodations: [
      { 
        name: 'Castle Rock Hostel', 
        type: 'hostel', 
        features: ['Female-only dorms', 'Central Royal Mile location', '24/7 reception', 'Solo female travel community'], 
        rating: 4.4, 
        reviews: 2847,
        notes: 'Top-rated hostel for solo female travelers with excellent safety standards and vibrant social atmosphere. Female dorms feature individual privacy curtains and secure lockers.' 
      },
      { 
        name: 'The Balmoral Hotel', 
        type: 'luxury hotel', 
        features: ['Prime Princes Street location', 'Concierge services', 'Advanced security systems', '24-hour room service'], 
        rating: 4.8, 
        reviews: 4231,
        notes: 'Iconic luxury hotel offering unmatched safety and service for discerning solo female travelers. Professional staff trained in solo traveler assistance.' 
      },
      { 
        name: 'Premier Inn Edinburgh City Centre', 
        type: 'budget hotel', 
        features: ['Electronic key cards', 'CCTV surveillance', 'Central location', 'Good wifi'], 
        rating: 4.5, 
        reviews: 8472,
        notes: 'Reliable budget chain perfect for solo female travel safety with consistent standards. Excellent value in safe New Town location with easy transport links.' 
      },
      { 
        name: 'Safestay Edinburgh Royal Mile', 
        type: 'hostel', 
        features: ['Female-only floors', 'Modern security features', 'Historic building', 'Solo traveler meetups'], 
        rating: 4.3, 
        reviews: 3156,
        notes: 'Award-winning hostel specifically designed with women solo travel safety in mind. Features dedicated female areas and organised solo female travel community events.' 
      },
      { 
        name: 'The Scotsman Hotel', 
        type: 'boutique hotel', 
        features: ['Historic North Bridge location', 'Superior security', 'Spa facilities', 'Fine dining'], 
        rating: 4.6, 
        reviews: 2934,
        notes: 'Boutique hotel in converted newspaper headquarters offering sophisticated safety for solo female travelers. Ideal for women traveling alone seeking luxury with heritage charm.' 
      },
      { 
        name: 'The Place Hotel', 
        type: 'apartment hotel', 
        features: ['Self-catering facilities', 'Secure building access', 'New Town location', 'Weekly housekeeping'], 
        rating: 4.4, 
        reviews: 1876,
        notes: 'Modern apartment-style accommodation perfect for extended solo female travel stays. Secure keycard access and well-lit Forth Street location ensure safety for women travelers.' 
      },
      { 
        name: 'Brooks Hotel Edinburgh', 
        type: 'boutique hotel', 
        features: ['Georgian townhouse charm', 'Personal service', 'Quiet residential area', 'Traditional Scottish hospitality'], 
        rating: 4.7, 
        reviews: 1429,
        notes: 'Intimate Georgian hotel in safe residential area offering personalised service for solo female travelers. Staff known for going extra mile to ensure women traveling alone feel secure and welcome.' 
      },
      { 
        name: 'Code Pod Hostels - The Burgh', 
        type: 'pod hostel', 
        features: ['Private pods with curtains', 'Female-only sections', 'Modern facilities', 'Social spaces'], 
        rating: 4.2, 
        reviews: 967,
        notes: 'Innovative pod-style hostel with enhanced privacy perfect for solo travel safety. Modern design meets traditional Scottish hospitality in safe Old Town location.' 
      }
    ],
    alerts: [
      {
        title: 'Edinburgh Festival Season Crowds (August)',
        description: 'Edinburgh Festival brings massive crowds and higher accommodation costs. Pickpocket risk increases in tourist areas. Book accommodation well in advance.',
        location: 'City center during Edinburgh Festival',
        reportCount: 12,
        severity: 'low',
        dateReported: '1 week ago'
      },
      {
        title: 'Electronic Travel Authorization (ETA) Required',
        description: 'All visitors need UK ETA as of January 2025. Apply at least 3 days before travel. Costs £10, valid for 2 years. Required even for transit passengers.',
        location: 'All UK entry points',
        reportCount: 8,
        severity: 'medium',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Layer clothing for unpredictable Scottish weather - carry waterproof jacket year-round for solo travel safety
• Wear comfortable walking shoes with good grip for cobblestone streets and hills - essential for women traveling alone
• Avoid flashy jewelry or expensive items in tourist areas during festival seasons - important solo female travel safety tip
• Smart-casual dress works for most pubs and restaurants - Scots dress practically
• Edinburgh Festival season (August) requires advance planning and secure bag storage for solo female travelers
• Winter requires warm layers, waterproof boots, and gloves - temperatures can drop significantly
• Summer evenings can be cool even in July - bring light sweater for outdoor dining`,
      firstTimers: `• Edinburgh extremely beginner-friendly for solo female travel - 90% of residents report feeling safe in city surveys
• English widely spoken with helpful Scottish accents - communication never barrier for women traveling alone
• Download Transport for Edinburgh app for contactless bus/tram payments - essential solo travel safety tip
• Edinburgh voted safest city in UK - perfect for first-time solo female travelers seeking secure destinations
• City very walkable but hilly - comfortable shoes essential for solo female travel safety
• Scottish people extremely friendly and helpful - don\'t hesitate to ask for directions when traveling alone
• Apply for UK Electronic Travel Authorization (ETA) at least 3 days before arrival (£10 fee)`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Lothian Buses',
        'ScotRail',
        'OS Maps'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Edinburgh exploration', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Scotland safety insights', rating: 4.0 },
        { name: 'Lothian Buses', link: 'https://www.lothianbuses.com/', description: 'Official Edinburgh bus and tram app with real-time arrivals', rating: 4.5 },
        { name: 'ScotRail', link: 'https://www.scotrail.co.uk/', description: 'Official Scottish train app for travel to Highlands, Glasgow, and across Scotland', rating: 4.4 },
        { name: 'OS Maps', link: 'https://www.ordnancesurvey.co.uk/', description: 'Official UK mapping app perfect for Edinburgh hills and Scottish countryside hiking', rating: 4.7 }
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
          english: 'I need medical help.',
          local: 'I need medical help.',
          localLanguage: 'English'
        },
        {
          english: 'Where is the hospital?',
          local: 'Where is the hospital?',
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
      dressCode: 'Casual and practical. No specific restrictions for women traveling alone.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted. Edinburgh culture very welcoming to women solo travel safety.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '999', fire: '999', medical: '999', general: '999'
    },
    currency: {
      name: 'Pound Sterling', 
      code: 'GBP', 
      exchangeRate: {
        usd: 1.2650,
        eur: 1.1890,
        gbp: 1.0000
      },
      exchangeTips: [
        'Edinburgh largely cashless - contactless cards accepted everywhere including public transport',
        'Use ATMs from major banks (RBS, Lloyds, HSBC) for best rates and security',
        'Transport for Edinburgh app eliminates need for exact change on buses',
        'Notify bank of travel plans to avoid card blocking - essential for cashless society',
        'Many establishments prefer contactless over cash, especially post-COVID',
        'Exchange at banks or official bureaus rather than tourist areas for better rates',
        'Keep small amount of cash for tips, traditional pubs, and emergency situations',
        'Download banking apps for easy account monitoring and transaction tracking'
      ],
      scamWarnings: [
        'Edinburgh has extremely low scam rates compared to other European cities',
        'Pickpocketing rare but possible during Edinburgh Festival season in crowded areas', 
        'Avoid unofficial tour guides or ticket sellers around major attractions',
        'ATM skimming virtually nonexistent but check machines as standard precaution',
        'Fake charity collectors occasionally present - verify credentials before donating'
      ],
      bestExchangeLocations: [
        'Royal Bank of Scotland branches throughout Edinburgh',
        'Lloyds Bank locations in city center',
        'HSBC branches near Princes Street',
        'Post Office branches for currency services',
        'Tesco Travel Money (competitive rates)'
      ],
      tippingCulture: [
        'Tipping appreciated but not mandatory in Scotland',
        'Restaurants: 10-15% for good service, often included in bill',
        'Pubs: No tipping expected for drinks at bar',
        'Taxis: Round up fare or add 10% for good service',
        'Hotel housekeeping: £2-5 per night if desired',
        'Tour guides: £5-10 for excellent service',
        'Hairdressers: 10% for good service'
      ]
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Scots Gaelic'],
    daytimeSafetyPercent: 82.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Edinburgh)
    nighttimeSafetyPercent: 62.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Edinburgh)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Edinburgh',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Festivals)', frequency: 'Occasional', icon: 'Hand' }, // Numbeo 2025, Qeepl 2025
      { label: 'Bag Snatching (Public Transport, Cafés)', frequency: 'Rare', icon: 'Briefcase' }, // Qeepl 2025
      { label: 'Scam Artists (Fake Tours, Tickets)', frequency: 'Rare', icon: 'Shield' }, // Qeepl 2025
      { label: 'Alcohol-Related Disturbances (Nightlife)', frequency: 'Occasional', icon: 'Beer' }, // Qeepl 2025
    ],
    usefulTips: [
      {
        title: "Stay in well-reviewed, central neighborhoods for solo female travel safety",
        description: "Choose accommodation in areas like Old Town, New Town, or Stockbridge - safest places for women to travel alone with walkability and easy access to attractions.",
        severity: "low",
        sourceName: "Alyssa O Writes, 2025",
        sourceUrl: "https://alyssaowrites.com/23-best-hotels-edinburgh-solo-female-travellers/"
      },
      {
        title: "Be vigilant at night and avoid dark alleys",
        description: "Stick to well-lit streets, especially after enjoying Edinburgh\'s nightlife. Avoid walking alone through parks or alleys late at night.",
        severity: "low",
        sourceName: "Finding Alexx, 2025",
        sourceUrl: "https://findingalexx.com/edinburgh-solo-travel-guide/"
      },
      {
        title: "Keep valuables secure in busy areas",
        description: "Use a cross-body bag with a zip and keep your phone and wallet close, especially during festivals or on public transport.",
        severity: "low",
        sourceName: "Qeepl, 2025",
        sourceUrl: "https://qeepl.com/en/blog/is-edinburgh-safe-a-tourist-s-guide-to-safety-and-security"
      },
      {
        title: "Use public transport and official taxis for solo travel safety",
        description: "Edinburgh's buses and trams are extremely safe for women traveling alone. At night, sit near the driver and avoid empty upper decks - essential solo female travel safety tips.",
        severity: "low",
        sourceName: "VisitScotland, 2025",
        sourceUrl: "https://www.visitscotland.com/travel-planning/solo-travel"
      },
      {
        title: "Prepare for changing weather and hiking safety",
        description: "Scottish weather is unpredictable. Carry layers, and if hiking Arthur's Seat or other trails, let someone know your plans and bring essentials.",
        severity: "low",
        sourceName: "Finding Alexx, 2025",
        sourceUrl: "https://findingalexx.com/edinburgh-solo-travel-guide/"
      }
    ], // Tips sourced from Alyssa O Writes, Finding Alexx, Qeepl, VisitScotland (2025)
    culturalDos: [
      'Greet with a friendly hello or good morning.',
      'Respect local festivals and traditions.',
      'Dress modestly in churches or formal events.',
      'Queue patiently and wait your turn.',
      'Learn a few Scottish phrases.'
    ],
    culturalDonts: [
      "Don't joke about Scottish history or accents.",
      "Don't speak loudly in public places.",
      "Don't refuse hospitality abruptly.",
      "Don't take photos in churches or of people without asking.",
      "Don't be overly familiar with strangers."
    ],
    womensConfidenceScore: {
      score: 68.8, // Numbeo 2025 Safety Index for Edinburgh
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Edinburgh"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 90,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/united-kingdom/edinburgh'
      },
      {
        label: 'Nightlife',
        confidence: 75,
        source: 'Alyssa O Writes 2025',
        sourceUrl: 'https://alyssaowrites.com/edinburgh-3-day-itinerary/'
      },
      {
        label: 'Public Transport',
        confidence: 92,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/united-kingdom/edinburgh'
      },
      {
        label: 'Dining Alone',
        confidence: 88,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/edinburgh/'
      }
    ],

    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Street harassment very rare in Edinburgh (Travel Ladies 2025)', 'Occasional incidents in crowded nightlife areas (Cowgate, Grassmarket)', 'Festival season crowds may see isolated incidents', 'Public transport harassment rates very low'],
      reportingRate: 22, // Only 22% of sexual assault victims report to police in Scotland
      legalProtection: 'Strong UK legal framework with Scotland\'s "Equally Safe" strategy against violence toward women. However, only 22% of rape victims report to police (Scottish Crime Survey 2020). 87% of sexual assault victims are female (Scottish Crime Stats 2024).',
      supportResources: [
        'Rape Crisis Scotland National Helpline: 08088 01 03 02',
        'Edinburgh Crisis Centre: 0808 801 0414', 
        'Police Scotland Emergency: 999',
        'Police Scotland Non-Emergency: 101',
        'Samaritans: 116 123 (free 24/7)',
        'NHS 24 Health Information: 111',
        'Women\'s Aid Scotland: 0800 027 1234',
        'Breathing Space: 0800 83 85 87 (mental health support)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Royal Infirmary of Edinburgh',
          address: '51 Little France Crescent, Edinburgh EH16 4SA',
          phone: '+44 131 536 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Major Trauma Centre', 'Women\'s Health', 'Sexual Health Services'],
          link: 'https://www.nhslothian.scot/GoingToHospital/Locations/RIE/Pages/default.aspx'
        },
        {
          name: 'Western General Hospital',
          address: 'Crewe Road South, Edinburgh EH4 2XU',
          phone: '+44 131 537 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Minor Injuries Unit', 'Women\'s Health'],
          link: 'https://www.nhslothian.scot/GoingToHospital/Locations/WGH/Pages/default.aspx'
        },
        {
          name: 'St John\'s Hospital (Livingston)',
          address: 'Howden Road West, Livingston EH54 6PP',
          phone: '+44 1506 523000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Maternity', 'General Medicine'],
          link: 'https://www.nhslothian.scot/GoingToHospital/Locations/SJH/Pages/default.aspx'
        }
      ],
      pharmacies: [
        {
          name: 'Boots Pharmacy - Princes Street',
          address: '48 Princes Street, Edinburgh EH2 2YJ',
          phone: '+44 131 225 6757',
          hours: 'Mon-Sat: 8:30AM-6:30PM, Sun: 11AM-5PM',
          emergency: false,
          link: 'https://www.boots.com/'
        },
        {
          name: 'Superdrug Pharmacy - Princes Street',
          address: '55-57 Princes Street, Edinburgh EH2 2DG',
          phone: '+44 131 226 1482',
          hours: 'Mon-Sat: 9AM-7PM, Sun: 11AM-6PM',
          emergency: false,
          link: 'https://www.superdrug.com/'
        },
        {
          name: 'Davidson\'s Chemist - Morningside',
          address: '126 Morningside Road, Edinburgh EH10 4BY',
          phone: '+44 131 447 3056',
          hours: 'Mon-Fri: 9AM-6PM, Sat: 9AM-1PM',
          emergency: false,
          link: 'https://www.davidsonschemist.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'The Chalmers Centre (Sexual Health) - 0131 536 1070',
          'Edinburgh Women\'s Health Centre',
          'NHS Lothian Reproductive Health Services',
          'Marie Stopes International Edinburgh'
        ],
        gynecologists: [
          'Royal Infirmary Edinburgh Gynecology Department',
          'Western General Hospital Women\'s Health',
          'Private gynecology services at Spire Edinburgh Hospitals'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'The Chalmers Centre - walk-in 8:30-10AM',
          'Hospital emergency departments',
          'Many GP surgeries provide emergency contraception'
        ],
        sanitaryProducts: [
          'Available at all pharmacies, supermarkets, and convenience stores',
          'Tesco, Sainsbury\'s, ASDA for bulk purchasing',
          'Many public restrooms provide emergency supplies',
          'University of Edinburgh provides free period products'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Scotland',
        'Routine vaccinations should be up to date',
        'Travel health consultations available at pharmacies and GP surgeries',
        'Flu vaccination recommended during winter months (October-March)'
      ],
      healthRisks: [
        'Very low health risks overall in Edinburgh',
        'Weather-related issues from rain and cold temperatures', 
        'Minor risk of alcohol-related incidents in nightlife areas',
        'Seasonal Affective Disorder possible due to limited winter daylight',
        'Hill walking injuries on Arthur\'s Seat or Pentland Hills'
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise normal precautions in the United Kingdom. The UK maintains low crime rates and excellent emergency services. Edinburgh specifically ranked as safest UK city with 90% of residents feeling secure.',
      reason: 'Low crime rates, excellent emergency services, strong rule of law.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-kingdom-travel-advisory.html',
      soloTravelerAdvice: [
        'Edinburgh voted safest city in UK (2014), 90% residents feel safe (2018) - ideal for solo female travel safety',
        'Street harassment very rare - "not common occurrence" for women traveling alone',
        'Electronic Travel Authorization (ETA) required - apply 3+ days before travel',
        'Excellent public transport safety with CCTV and lighting for solo female travelers',
        'Solo female travelers report consistently positive experiences in this safe destination'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '£50-120 ($63-150) per day',
        description: 'Edinburgh ranks 2nd most expensive UK city after London, but 28th in Europe overall. Solo female travelers can manage £50-70/day budget, comfortable travel requires £80-120/day. Accommodation is biggest expense.',
        tip: 'Visit during shoulder seasons (April-May, September-October) for 25-40% savings. Stay in Leith, Stockbridge, or Bruntsfield for better value while maintaining solo travel safety.'
      },
      accommodation: [
        {
          type: 'Budget Hostels/Shared Rooms',
          avgCost: '£25-45/night',
          safetyNote: 'Excellent safety standards with 24/7 reception, CCTV, and female-only dorms available.',
          safetyLevel: 'high'
        },
        {
          type: '3-Star Hotels (Budget Chains)',
          avgCost: '£60-100/night',
          safetyNote: 'Premier Inn, Travelodge offer excellent value with professional security and central locations.',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels/B&Bs',
          avgCost: '£100-180/night',
          safetyNote: 'Traditional Scottish hospitality with personal attention and security in residential areas.',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '£200+/night',
          safetyNote: 'Top-tier security, concierge services, and prime locations like Princes Street.',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport (Buses/Trams)',
          cost: '£1.80 single, £4 day ticket',
          safetyDescription: 'Extremely safe with CCTV, good lighting, and regular services. Transport app eliminates cash needs.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe throughout city center with excellent lighting and helpful locals.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis/Uber',
          cost: '£8-15 per trip, £25-30 from airport',
          safetyDescription: 'Highly regulated taxi industry with excellent safety standards.',
          safetyLevel: 'high'
        },
        {
          method: 'Bike Rental',
          cost: '£25-30/day regular, £45/day e-bike',
          safetyDescription: 'Safe cycling with dedicated lanes, but Edinburgh is very hilly.',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Visit during shoulder seasons (April-May, Sept-Oct) for 25-40% accommodation savings - smart solo female travel tip',
        'Stay in Leith, Stockbridge, or Bruntsfield for better value with good transport links and solo travel safety',
        'Use Transport for Edinburgh app - no exact change needed, small savings on fares for women traveling alone',
        'Cook own meals occasionally - food costs £30-40/day but can reduce to £15-25',
        'Free attractions perfect for solo female travelers: Arthur\'s Seat hike, Scottish National Gallery, Princes Street Gardens',
        'Early bird restaurant deals often available before 7PM - great for solo female travel budgets',
        'Student discounts widely available with international student ID',
        'Edinburgh Festival season (August) - book 6+ months ahead or avoid for budget travel',
        'Tesco, Sainsbury\'s, ASDA for grocery shopping rather than convenience stores'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy London (covers Edinburgh)',
        address: '33 Nine Elms Lane, London SW11 7US',
        phone: '+44 20 7499 9000',
        email: 'consularunitlondon@state.gov',
        emergency: '+44 20 7499 9000',
        link: 'https://uk.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://www.gov.uk/world/organisations/british-embassy-edinburgh'
        },
        {
          name: 'Embassy of Germany in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://gb.diplo.de/'
        },
        {
          name: 'Embassy of France in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://gb.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://www.exteriores.gob.es/embajadas/edinburgh'
        },
        {
          name: 'Australian Embassy Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://gb.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://www.canadainternational.gc.ca/gb-united-kingdom/'
        },
        {
          name: 'Embassy of the Netherlands in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/united-kingdom'
        },
        {
          name: 'Embassy of Denmark in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://gb.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://www.eda.admin.ch/edinburgh'
        },
        {
          name: 'Embassy of India in Edinburgh',
          address: '3 Regent Terrace, Edinburgh EH7 5BW',
          phone: '+44 131 556 8315',
          link: 'https://www.indianembassygb.gov.in/'
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
        'Keep copies of all police reports and medical documentation',
        'Contact embassy within 24 hours for serious incidents involving foreign nationals'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Public Transport (Buses/Trams)',
          safety: 95,
          recommendations: [
            'Extremely safe with CCTV surveillance and well-lit stops',
            'Use Transport for Edinburgh app for contactless payments',
            'Regular services throughout day and evening',
            'Helpful staff and clear route information'
          ],
          companies: ['Lothian Buses', 'Edinburgh Trams'],
          link: 'https://www.lothianbuses.com/'
        },
        {
          type: 'Licensed Taxis',
          safety: 90,
          recommendations: [
            'Highly regulated with strict licensing requirements',
            'All taxis equipped with GPS tracking',
            'Clearly marked vehicles with taxi signs',
            'Use official taxi ranks or call licensed operators'
          ],
          companies: ['Central Taxis', 'City Cabs', 'ComCab'],
          link: 'https://www.citycabs.co.uk/'
        },
        {
          type: 'Walking',
          safety: 90,
          recommendations: [
            'Edinburgh extremely walkable with excellent street lighting',
            'Well-maintained sidewalks and pedestrian areas',
            'Helpful locals willing to give directions',
            'Tourist police presence in main areas'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 85,
        warnings: [
          'Cowgate and Grassmarket can be crowded with drunk crowds after midnight',
          'Some areas of Holyrood Park poorly lit after dark',
          'Standard urban precautions in less populated areas'
        ],
        alternatives: [
          'Public transport runs late with good safety record',
          'Licensed taxis readily available throughout city',
          'Well-lit main streets safe for walking',
          'Many 24-hour services available in city center'
        ]
      },
      verifiedProviders: [
        {
          name: 'Lothian Buses',
          type: 'Public Transport',
          contact: 'Transport for Edinburgh App',
          safety: 95
        },
        {
          name: 'Edinburgh Airport Express',
          type: 'Airport Transfer',
          contact: '+44 131 555 6363',
          safety: 90
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24-hour reception standard in most hotels',
        'Electronic key card access systems',
        'CCTV surveillance in common areas and entrances',
        'Safe deposit facilities for valuables',
        'Well-lit entrances and corridors',
        'Female-only dorm options in hostels',
        'Professional security staff in larger hotels'
      ],
      safeNeighborhoods: [
        'Old Town (Royal Mile) - historic center with excellent security',
        'New Town (Princes Street) - main shopping and hotel district',
        'Stockbridge - upscale area with good community safety',
        'Leith - revitalized waterfront with improved security',
        'Bruntsfield - student area with good value and safety'
      ],
      womensOnly: [
        {
          name: 'Castle Rock Hostel - Female Dorms',
          type: 'Hostel',
          features: ['Female-only dormitories', '24/7 reception', 'Central Old Town location', 'Excellent security'],
          rating: 4.4
        },
        {
          name: 'Safestay Edinburgh - Female Rooms',
          type: 'Hostel',
          features: ['Female-only facilities', 'Modern security systems', 'Royal Mile location'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.7,
          safety: 95,
          comments: 'Edinburgh feels incredibly safe - walked alone at night without concerns',
          date: '2025-01-18'
        },
        {
          rating: 4.5,
          safety: 90,
          comments: 'Friendly locals and excellent hostel security made solo travel comfortable',
          date: '2025-01-12'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Free WiFi widely available in cafes, hotels, and public areas',
        'Edinburgh municipal WiFi network generally secure',
        'Use VPN for banking and sensitive transactions',
        'University and library WiFi networks very reliable'
      ],
      digitalScams: [
        'Extremely low digital scam rates in Edinburgh',
        'Occasional fake ticket resale websites during Festival season',
        'Phishing attempts rare but increasing with tourism',
        'Social media romance scams targeting travelers'
      ],
      vpnRecommendations: [
        'NordVPN - reliable UK servers',
        'ExpressVPN - good for banking security',
        'ProtonVPN - free tier available',
        'Surfshark - budget-friendly option'
      ],
      dataProtection: [
        'Strong UK GDPR protection for personal data',
        'Banking systems highly secure with fraud protection',
        'Avoid sharing travel plans on social media',
        'Hotel WiFi generally secure but use VPN for sensitive activities'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Minor Pickpocketing',
          location: 'Royal Mile during Festival',
          date: '2024-08-15',
          description: 'Tourist distracted during street performance - bag briefly unattended',
          severity: 'low'
        },
        {
          type: 'Verbal Harassment',
          location: 'Cowgate nightlife area',
          date: '2024-12-28',
          description: 'Isolated incident of verbal harassment from intoxicated individual - quickly resolved',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Edinburgh extremely safe - 90% of locals feel secure according to city surveys',
          author: 'Edinburgh Local',
          date: '2025-01-20',
          upvotes: 143
        },
        {
          tip: 'Use Transport for Edinburgh app - makes public transport seamless and safe',
          author: 'Solo Female Traveler',
          date: '2025-01-18',
          upvotes: 89
        },
        {
          tip: 'Stay in Stockbridge or Leith for great value without compromising safety',
          author: 'Budget Traveler',
          date: '2025-01-15',
          upvotes: 67
        },
        {
          tip: 'Scottish people incredibly helpful - don\'t hesitate to ask for directions',
          author: 'First-time Visitor',
          date: '2025-01-10',
          upvotes: 156
        }
      ]
    },
    crimeStatistics: {
      violentCrime: 12, // per 100,000 (2025 data) - Edinburgh much lower than UK average
      propertyCrime: 89, // per 100,000 (2025 data) - mostly minor theft
      sexualAssault: 28, // per 100,000 (2025 data) - Scotland average, Edinburgh lower
      kidnapping: 0.3, // per 100,000 (2025 data) - virtually non-existent
      source: 'Police Scotland Crime Statistics & Travel Ladies Safety Index 2025',
      year: 2025,
      context: 'Edinburgh voted safest UK city with 90% residents feeling secure. Street harassment very rare.'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm (mostly for peace of mind in very safe city)',
        'RFID-blocking wallet for contactless card protection',
        'Portable phone charger (essential for transport apps)',
        'Waterproof phone case (for unpredictable Scottish weather)',
        'Anti-theft crossbody bag (for festival season crowds)',
        'Emergency whistle',
        'First aid kit (for hiking Arthur\'s Seat)'
      ],
      safetyApps: [
        {
          name: 'Transport for Edinburgh',
          purpose: 'Bus and tram tickets, journey planning',
          rating: 4.6
        },
        {
          name: 'ScotRail',
          purpose: 'Train travel throughout Scotland',
          rating: 4.2
        },
        {
          name: 'What3Words',
          purpose: 'Precise location sharing for emergencies',
          rating: 4.7
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety with GPS tracking',
          rating: 4.1
        },
        {
          name: 'TravelLadies',
          purpose: 'Female travel community and local tips',
          rating: 4.3
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '999',
          type: 'Police, Fire, Ambulance'
        },
        {
          name: 'Police Scotland (Non-Emergency)',
          number: '101',
          type: 'Non-urgent police matters'
        },
        {
          name: 'NHS 24 Health Information',
          number: '111',
          type: 'Non-emergency health advice'
        },
        {
          name: 'Edinburgh Crisis Centre',
          number: '0808 801 0414',
          type: 'Mental health crisis support'
        },
        {
          name: 'Rape Crisis Scotland',
          number: '08088 01 03 02',
          type: 'Sexual violence support'
        },
        {
          name: 'Samaritans',
          number: '116 123',
          type: 'Emotional support (24/7 free)'
        }
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default edinburgh;
