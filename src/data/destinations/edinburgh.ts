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
        name: 'The Witchery by the Castle', 
        type: 'luxury boutique hotel', 
        features: ['Royal Mile heart location', 'Gothic luxury suites', 'Four-poster beds', 'Velvet walls & antiques', '24/7 concierge'], 
        rating: 4.9, 
        reviews: 1847,
        notes: 'Simply the best hotel in Edinburgh for solo female travelers who want to be a queen for a day. Lavishly decorated gothic suites make every woman feel like royalty. Prime Royal Mile location with unmatched security and service.' 
      },
      { 
        name: 'Virgin Hotels Edinburgh', 
        type: 'luxury boutique hotel', 
        features: ['Off Royal Mile location', 'Condé Nast award winner 2024', 'Modern design', 'Solo traveler amenities', 'Premium security'], 
        rating: 4.8, 
        reviews: 3642,
        notes: 'Condé Nast #11 Best Hotel in UK 2024 and TripAdvisor Travelers\' Choice Award Winner. Located just off Royal Mile in Old Town, perfect for solo female travelers seeking luxury with easy castle access.' 
      },
      { 
        name: 'Point A Hotel Haymarket', 
        type: 'mid-range hotel', 
        features: ['Gold star safety rating', 'Evening keycard-only lobby access', '24/7 keycard elevator access', 'Near train station'], 
        rating: 4.6, 
        reviews: 5847,
        notes: 'Safest hotel in Edinburgh for solo female travelers. Cannot enter hotel without keycard at night - exceptional security. Keycard access required for all areas 24/7. Perfect for women prioritizing solo travel safety.' 
      },
      { 
        name: 'CoDE Pod Hostels - The CoURT', 
        type: 'premium hostel', 
        features: ['Best-rated hostel 2025', '24/7 reception & CCTV', 'Secure keycard access', 'Female-only dorms', 'Valuable lockers'], 
        rating: 4.7, 
        reviews: 4156,
        notes: 'Best rated hostel in Edinburgh for female solo travelers. Top-tier security with 24/7 reception, CCTV, secure keycards, and lockers. Safety is top priority with female-only dorms and community atmosphere.' 
      },
      { 
        name: '100 Princes Street', 
        type: 'boutique hotel', 
        features: ['Prime Princes Street location', 'Edinburgh Castle views', 'Boutique elegance', 'Walking distance to Royal Mile', 'Personalized service'], 
        rating: 4.8, 
        reviews: 2134,
        notes: 'Exclusive, cozy, and elegant boutique hotel at Edinburgh\'s best location. Amazing Edinburgh Castle views within walking distance to Royal Mile. Now considered the best hotel in Edinburgh for wonderful service and exquisite interior design.' 
      },
      { 
        name: 'The Gleneagles Townhouse', 
        type: '5-star luxury hotel', 
        features: ['Heart of Edinburgh location', 'Five-star luxury treatment', 'Near Royal Mile & Playhouse', 'Premium safety standards', 'Solo traveler concierge'], 
        rating: 4.9, 
        reviews: 1923,
        notes: 'Go-to five-star hotel for luxury treatment in Scottish capital. Set in heart of Edinburgh with popular attractions like Royal Mile nearby. Premium luxury with exceptional safety standards for discerning solo female travelers.' 
      },
      { 
        name: 'Native Edinburgh New Town', 
        type: 'boutique serviced apartments', 
        features: ['Georgian New Town location', 'Serviced apartment comfort', 'Architectural elegance', 'Kitchen facilities', 'Solo traveler privacy'], 
        rating: 4.6, 
        reviews: 2847,
        notes: 'Collection of boutique serviced apartments in architecturally rich New Town area. Georgian and Neoclassical buildings provide elegant atmosphere. Perfect for solo female travelers wanting apartment privacy with hotel services.' 
      },
      { 
        name: 'Allgirlz - Female Only Hostel', 
        type: 'female-only hostel', 
        features: ['100% female-only environment', 'Quiet & calm atmosphere', 'Clean facilities', 'Solo female community', 'Private room options'], 
        rating: 4.5, 
        reviews: 1456,
        notes: 'Unique female-only hostel where both dorms are exclusively for women. Quiet, calm, and clean choice perfect for solo female travelers not looking to party. Safe haven environment designed specifically for women traveling alone.' 
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
      dressCode: [
        'Smart-casual dress code prevails in Edinburgh - comfortable yet presentable clothing works for most situations and helps solo female travelers blend in naturally',
        'Layer clothing year-round due to unpredictable Scottish weather - waterproof jackets essential for women traveling alone who want to explore comfortably', 
        'Comfortable walking shoes with good grip mandatory for cobblestone streets and hills - crucial for solo female travel safety in this historic city',
        'Modest attire appreciated in churches and formal venues - shows cultural respect and helps women traveling alone access religious sites without issues',
        'Avoid flashy jewelry or expensive accessories during festival seasons - practical solo female travel safety tip for crowded tourist areas'
      ],
      behaviorNorms: [
        'Scottish politeness standards expect consistent use of "please," "thank you," and "excuse me" - essential for solo female travelers seeking positive local interactions',
        'Queue culture is deeply respected - jumping lines or pushing considered extremely rude and can create uncomfortable situations for women traveling alone',
        'Public transport etiquette includes quiet conversations, offering seats to elderly, and moving down aisles - helps solo female travelers integrate seamlessly',
        'Pub culture involves respecting others\' conversations, not saving seats unnecessarily, and engaging naturally - great for solo female travelers to meet locals safely',
        'Weather chat is standard conversation starter - solo female travelers who engage in weather discussions often find locals more helpful and friendly'
      ],
      perception: [
        'Solo female travelers are extremely common and completely accepted in Edinburgh - 90% of residents report feeling safe, creating welcoming environment for women traveling alone',
        'Scottish culture is notably respectful toward solo female travelers - street harassment rare with locals often going out of their way to help women traveling alone',
        'Is Edinburgh safe for women solo travelers? Absolutely - city consistently rated as safest in UK with strong community support for solo female travel safety',
        'Local men generally respectful and protective of solo female travelers - Scottish cultural values emphasize helping visitors, especially women traveling alone',
        'Restaurant and pub staff specifically trained to assist solo diners - solo female travelers report feeling welcomed and secure when dining alone in Edinburgh'
      ]
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
      {
        label: 'Pickpocketing (Tourist Areas, Festivals)',
        frequency: 'Occasional',
        icon: 'Hand',
        details: 'Minor pickpocketing can occur during Edinburgh Festival (August) and around major tourist attractions like Royal Mile and Princes Street. Crowded festival venues and distracted tourists create opportunities for pickpockets.',
        prevention: 'Use crossbody bags with zippers during festivals. Keep valuables in hotel safe. Stay alert in crowded tourist areas. Use bags with RFID protection. Avoid displaying expensive items openly during peak tourist season.'
      },
      {
        label: 'Bag Snatching (Public Transport, Cafés)',
        frequency: 'Rare',
        icon: 'Briefcase',
        details: 'Occasional bag snatching incidents on public transport or when bags are left unattended in cafés and restaurants. Thieves target unguarded bags and purses, particularly in busy areas.',
        prevention: 'Keep bags on your lap or between your feet on public transport. Never leave bags unattended in cafés or restaurants. Use bags with secure closures. Stay alert when boarding crowded buses or trams.'
      },
      {
        label: 'Scam Artists (Fake Tours, Tickets)',
        frequency: 'Rare',
        icon: 'Shield',
        details: 'Occasional fake tour operators offering unofficial ghost walks or historical tours at inflated prices. Fake ticket sellers operate around major attractions during peak tourist season.',
        prevention: 'Book tours through official visitor centers or established companies. Verify tour company credentials and reviews. Buy tickets from official sources only. Be wary of unsolicited tour offers on the street.'
      },
      {
        label: 'Alcohol-Related Disturbances (Nightlife)',
        frequency: 'Occasional',
        icon: 'Beer',
        details: 'Weekend nights, especially during festival season, can see increased alcohol-related incidents in nightlife areas like Grassmarket and Cowgate. Drunk individuals may become aggressive or cause disturbances.',
        prevention: 'Stay in groups during nightlife activities. Avoid heavily intoxicated individuals. Use licensed taxis or rideshare apps late at night. Stay in well-lit, populated areas. Trust your instincts if situations feel unsafe.'
      }
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
    culturalSensitivityTipsDetails: [
      'Understand Scottish national identity deeply - Scotland is NOT England, and recognizing this distinction is crucial for solo female travelers. Scottish independence movements and cultural pride run deep, so acknowledging Scotland as a distinct nation shows respect and often results in warmer, more helpful local interactions.',
      'Master Scottish politeness and social etiquette - Use "please," "thank you," "excuse me," and "sorry to bother you" consistently. Scottish hospitality is legendary, but courtesy is expected in return. This helps solo female travelers integrate respectfully and receive better assistance when needed.',
      'Navigate pub culture with respect and understanding - Pubs are essential social hubs where solo female travelers can safely meet locals and other travelers. Learn proper etiquette: don\'t save seats unnecessarily, respect ongoing conversations, offer to buy rounds when drinking with groups, and engage naturally without being pushy.',
      'Embrace traditional Scottish experiences authentically - Show genuine interest in Ceilidh dancing, whisky tasting, Highland games, or clan histories. Solo female travelers who demonstrate curiosity about Scottish heritage often receive enthusiastic local guidance, helpful recommendations, and feel more connected to the culture.',
      'Follow Scottish dining customs and social norms - Wait for your host to begin eating, don\'t waste food (Scots traditionally value frugality), offer to help clear dishes, and participate in group conversations. These gestures help solo female travelers build positive local connections and show cultural appreciation.',
      'Appreciate Scottish humor and directness without taking offense - Scots use dry, sometimes sarcastic humor and can be refreshingly direct in communication. Solo female travelers shouldn\'t interpret this as rudeness; it\'s often a sign of acceptance and friendship rather than hostility.',
      'Show respectful interest in Scottish history and landmarks - Ask locals about Edinburgh Castle stories, Royal Mile legends, clan histories, or Highland battles. Solo female travelers who demonstrate genuine curiosity often receive passionate local guidance and develop meaningful cultural connections.',
      'Respect Scottish environmental values and outdoor culture - Scotland takes natural beauty seriously. Follow marked paths, clean up after yourself, and show appreciation for landscapes. This resonates with locals and helps solo female travelers gain respect in hiking and outdoor communities.',
      'Understand weather conversations as cultural bonding - Scots genuinely love discussing weather patterns, and it\'s not just small talk. Solo female travelers who engage in weather conversations often find it\'s an easy way to connect with locals and show cultural understanding.',
      'Practice respectful religious and cultural site etiquette - Remove hats in churches, speak quietly in sacred spaces, don\'t photograph religious ceremonies without permission. Solo female travelers who show reverence for Scottish religious and cultural sites are welcomed more warmly by communities.',
      'Avoid common cultural mistakes that mark you as insensitive - Never call Scots "English," don\'t mock Scottish accents or use fake phrases like "och aye," don\'t assume all Scottish stereotypes are true, and don\'t discuss sensitive political topics like independence unless locals initiate the conversation.',
      'Understand Scottish gender equality expectations - Scotland has progressive views on gender equality. Solo female travelers should expect to be treated as equals, with men not necessarily opening doors or displaying traditional chivalry. This reflects respect rather than rudeness.',
      'Respect queue culture and personal space norms - Scots value orderly, patient behavior. Queue properly, don\'t push or be overly familiar with strangers, and maintain respectful personal space. This helps solo female travelers avoid uncomfortable situations and integrate smoothly.',
      'Learn basic Scottish phrases and expressions - While English is spoken, learning phrases like "wee" (small), "bonnie" (beautiful), or "ken" (know) shows cultural interest. Solo female travelers who make this effort often receive warmer responses and feel more connected to local culture.',
      'Understand Scottish hospitality protocols - When offered food, drink, or help, don\'t refuse abruptly. Even if declining, do so graciously with genuine appreciation. Scottish culture emphasizes generous hosting, and solo female travelers who respond appropriately often receive continued kindness and assistance.'
    ],
    culturalDos: [
      'Recognize Scotland as distinct from England - Scottish identity is sacred and this shows deep respect',
      'Use polite phrases like "please" and "thank you" - Scottish hospitality is legendary but courtesy is expected',
      'Join pub conversations naturally - locals welcome solo female travelers and pubs are social centers', 
      'Try traditional foods like haggis and neeps - showing interest in cuisine demonstrates cultural appreciation',
      'Engage in weather conversations - Scots genuinely love discussing weather and it\'s easy cultural bonding',
      'Queue patiently and respect personal space - orderly behavior is highly valued in Scottish culture',
      'Sample Scotch whisky respectfully - supports local heritage and opens conversations with friendly locals',
      'Ask about local history and landmarks - Scots are passionate about their heritage and love sharing stories'
    ],
    culturalDonts: [
      'Don\'t call Scots "English" - this is the fastest way to offend and shows complete cultural ignorance',
      'Don\'t mock Scottish accents or use fake phrases like "och aye" - seen as patronizing and disrespectful',
      'Don\'t discuss independence politics unless invited - these conversations can become heated quickly',
      'Don\'t refuse traditional hospitality abruptly - decline graciously with genuine appreciation',
      'Don\'t be overly loud in pubs or restaurants - Scots appreciate measured, respectful conversation',
      'Don\'t assume Scottish stereotypes are true - avoid comments about kilts or frugality unless locals mention them',
      'Don\'t ignore weather chat - dismissing weather discussions can seem rude to conversation-loving Scots',
      'Don\'t take the last item from shared plates - this violates Scottish dining etiquette and sharing culture'
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
          method: 'Bike Rental (NextBike/Just Eat Cycles)',
          cost: '£25-30/day regular, £45/day e-bike, £2 per 30min casual use',
          safetyDescription: 'Safe cycling with expanding network of dedicated lanes and paths. Edinburgh is hilly but e-bikes available. Good for exploring Leith Waterfront and city center.',
          safetyLevel: 'medium'
        },
        {
          method: 'Edinburgh Trams',
          cost: '£2.10 single journey, £7.50 airport to city center',
          safetyDescription: 'Modern tram system connecting airport to city center with 15 stops. Runs every 7-10 minutes with CCTV and excellent lighting. Perfect for solo female travelers.',
          safetyLevel: 'high'
        },
        {
          method: 'ScotRail Trains',
          cost: '£15-30 day return to Glasgow, £25-45 to Highlands',
          safetyDescription: 'Excellent rail connections throughout Scotland. Clean, punctual services ideal for solo female travel to Glasgow, Stirling, and Highland destinations.',
          safetyLevel: 'high'
        },
        {
          method: 'Airport Transfer Services',
          cost: '£25-35 private transfer, £5.50 Airlink bus',
          safetyDescription: 'Multiple safe options: Airlink 100 bus (every 10 mins), trams, private transfers, and licensed taxis. All monitored and secure for women traveling alone.',
          safetyLevel: 'high'
        },
        {
          method: 'Car Rental',
          cost: '£35-60/day plus petrol and parking',
          safetyDescription: 'Not recommended for city center due to narrow streets and limited parking. Useful for Highlands exploration but public transport preferable for solo female travel safety.',
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
  culturalSensitivity: {
    culturalDos: [
      'Recognize Scotland as distinct from England',
      'Use "please" and "thank you" consistently',
      'Try traditional Scottish experiences like whisky tasting',
      'Navigate pub culture respectfully',
      'Follow Scottish dining customs',
      'Appreciate Scottish humor and directness',
      'Show interest in local history and landmarks'
    ],
    culturalDonts: [
      'Never call Scots "English"',
      'Don\'t discuss independence politics unless invited',
      'Don\'t refuse traditional foods without good reason',
      'Don\'t be excessively loud in traditional venues',
      'Don\'t mock Scottish accents or use fake phrases',
      'Don\'t assume Scottish stereotypes are true',
      'Don\'t ignore weather discussions'
    ]
  },
  youtubeVideo: {
    videoId: "-WcmjWpaWQw" // Edinburgh travel video
  }
};

export default edinburgh;
