import { Destination } from './types';

const dublin: Destination = {
    city: 'Dublin',
    country: 'Ireland',
    continent: 'Europe',
    countryCode: 'ie',
    overallScore: 8.4,
    nightSafety: 8.0,
    publicTransit: 8.6,
    walkingAlone: 8.2,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 120,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.0, 
        context: 'Is Dublin safe for women solo travelers at night? Generally safe, though the US Embassy (July 2023) advises caution when walking alone in Dublin city center after dark due to recent incidents. Well-lit main streets provide good solo female travel safety, but exercise caution in Temple Bar area and O\'Connell Street late at night. Ireland ranked #1 globally for solo female travel safety in 2022, though drug-related activity is visible in some central areas.' 
      },
      publicTransit: { 
        score: 8.6, 
        context: 'Dublin\'s public transport (buses, DART trains, Luas trams) is generally safe and efficient. Pickpocketing can occur at Connolly and Heuston stations during peak times. Public transport is well-monitored with good lighting and security presence. Late-night services available with reasonable safety levels.' 
      },
      walkingAlone: { 
        score: 8.2, 
        context: 'Dublin walking alone safety for solo female travelers shows Ireland has a safety index of 73/100 (Travel Safe Abroad 2024). Daytime safety is excellent at 78.2%, making it one of the safest places for women to travel alone during daylight hours. However, women should be aware that 52% of Irish women have experienced sexual violence in their lifetime (CSO 2023). Solo female travel safety precautions include avoiding isolated areas and staying alert in tourist zones like Grafton Street where pickpocketing occurs.' 
      }
    },
    neighborhoods: {
      safe: ['Ballsbridge & Dublin 4 - Diplomatic quarter with excellent safety', 'Temple Bar (Daytime) - Cultural quarter safe during day', 'Grafton Street & St. Stephen\'s Green - Premier shopping with good lighting', 'Trinity College Area - University district with security patrols'],
      caution: ['O\'Connell Street at night - Visible drug activity reported', 'Temple Bar after 10 PM - Heavy drinking and pickpockets'],
      avoid: ['Dublin 1 side streets after dark - Recent incidents reported']
    },
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: ['Dublin has significant reporting rates - Ireland ranks 6th in Europe for sexual violence reports with 34 per 100,000 women (2024)'],
      reportingRate: 5,
      legalProtection: 'Ireland has strong legal frameworks but low reporting rates. Only 5% of adult sexual violence victims report to Gardaí (Irish Police). Ireland criminalizes coercive control under the Domestic Violence Act 2018.',
      supportResources: [
        'Dublin Rape Crisis Centre 24-Hour Helpline: 1800 77 88 88',
        'Women\'s Aid National Helpline: 1800 341 900',
        'Gardaí Emergency: 999 or 112',
        'Dublin Sexual Assault Treatment Unit (SATU): +353 1 817 4311',
        'Irish Tourist Assistance Service (ITAS): +353 1 661 0562',
        'U.S. Embassy Dublin Emergency: +353 1 668 8777'
      ]
    },
    accommodations: [
      {
        name: 'Latroupe Jacobs Inn',
        type: 'hostel',
        features: ['Female-only dorms', 'Mixed dorms', 'City center heart', 'Highly rated', 'Solo traveler focused'],
        rating: 8.8,
        notes: '#1 coolest hostel in Dublin especially for solo travelers! Spacious, bright accommodation with ★8.82/10 rating on Hostelworld. Choice of private, female-only and mixed dorms.',
        link: 'https://www.jacobsinn.com/'
      },
      {
        name: 'The Dawson Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Grafton Street proximity', 'Trinity College nearby', 'Quiet atmosphere', 'Safe location'],
        rating: 8.5,
        notes: 'Located off Dawson Street near Grafton Street and Trinity College. Cosy, relaxed atmosphere perfect for solo travelers seeking quiet comfort with easy access to attractions.',
        link: 'https://www.thedawsonhostel.com/'
      },
      {
        name: 'Abigails Hostel',
        type: 'hostel',
        features: ['Most central location', 'Female dorms', 'Trinity College proximity', "O'Connell Street access", 'Dublin Castle nearby'],
        rating: 8.6,
        notes: 'Highly recommended for solo travelers claiming to be the most central hostel in Dublin. Minutes from Trinity College, Dublin Castle, and major attractions.',
        link: 'https://www.abigailshostel.ie/'
      },
      {
        name: 'Ashfield Hostel',
        type: 'hostel',
        features: ["D'Olier Street location", 'Unmatched vibes', 'Trinity College proximity', 'Female-friendly', 'Social atmosphere'],
        rating: 8.7,
        notes: "Located on D'Olier Street, minutes from Trinity College and Christ Church Cathedral. Favorite for solo travelers with unmatched vibes and welcoming atmosphere.",
        link: 'https://www.ashfieldhostel.ie/'
      },
      {
        name: 'The Shelbourne Dublin',
        type: 'hotel',
        features: ['Luxury heritage hotel', "St. Stephen's Green location", '24/7 security', 'Concierge service', 'Female-friendly'],
        rating: 8.9,
        notes: 'Historic luxury hotel on St. Stephens Green with world-class security, professional staff, and prime location. Excellent choice for solo female travelers seeking luxury.',
        link: 'https://www.marriott.com/hotels/travel/dubsh-the-shelbourne-dublin-a-renaissance-hotel/'
      },
      {
        name: 'Brooks Hotel Dublin',
        type: 'hotel',
        features: ['Boutique luxury', 'City center location', '24/7 front desk', 'Keycard access', 'Professional security'],
        rating: 8.4,
        notes: 'Boutique luxury hotel in safe city center with comprehensive security features including CCTV, secure elevator access, and concierge services for solo female travelers.',
        link: 'https://www.brookshotel.ie/'
      },
      {
        name: 'Trinity College Dublin Summer Accommodation',
        type: 'hotel',
        features: ['University campus', '24-hour security', 'Central location', 'Peaceful setting', 'Budget-friendly'],
        rating: 8.2,
        notes: 'Unique summer accommodation on Trinity College campus with 24-hour security, unbeatable central location, and peaceful leafy campus. Most affordable rates in Dublin city center.',
        link: 'https://www.visittrinity.ie/stay/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Layer your clothing as Dublin weather changes frequently - pack a waterproof jacket
• Wear comfortable walking shoes with good grip for cobblestone streets
• Avoid flashy jewelry or expensive items that attract pickpockets
• Dress modestly but fashionably - Dublin is style-conscious but not overly formal
• Always carry a small umbrella or rain jacket - rain is common year-round
• Smart-casual attire works for most pubs and restaurants
• Bring warm clothes even in summer - evenings can be cool`,
      firstTimers: `• Ireland ranked #1 for solo female travel safety in 2022, making it excellent for beginners
• English is the primary language - communication is never a barrier
• Download offline maps before exploring - WiFi isn't always available
• Keep cash minimal - Dublin is largely cashless with card payments accepted everywhere
• Be aware of your surroundings in tourist areas where pickpocketing occurs
• Public transport is reliable and safe - get a Leap Card for easy travel
• Irish people are extremely friendly and helpful - don't hesitate to ask for directions`,
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Cabhair!',
          localLanguage: 'Irish'
        },
        {
          english: 'Call the police!',
          local: 'Glaoigh ar na Gardaí!',
          localLanguage: 'Irish'
        },
        {
          english: 'I need a doctor.',
          local: 'Tá dochtúir ag teastáil uaim.',
          localLanguage: 'Irish'
        },
        {
          english: 'Where is the hospital?',
          local: 'Cá bhfuil an t-ospidéal?',
          localLanguage: 'Irish'
        },
        {
          english: 'I am lost.',
          local: 'Tá mé caillte.',
          localLanguage: 'Irish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Fág ina aonar mé, le do thoil.',
          localLanguage: 'Irish'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ní mhothaím sábháilte.',
          localLanguage: 'Irish'
        },
        {
          english: 'Can you help me?',
          local: 'An féidir leat cabhrú liom?',
          localLanguage: 'Irish'
        }
      ],
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'TFI Go',
        'FreeNow',
        'Dublin Bus'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Dublin exploration', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Ireland safety insights', rating: 4.0 },
        { name: 'TFI Go', link: 'https://www.transportforireland.ie/', description: 'Official Irish public transport app for Dublin buses, DART, Luas with real-time info', rating: 4.3 },
        { name: 'FreeNow', link: 'https://www.free-now.com/', description: 'Popular European taxi app with verified drivers available in Dublin', rating: 4.4 },
        { name: 'Dublin Bus', link: 'https://www.dublinbus.ie/', description: 'Official Dublin Bus app with real-time arrivals and route planning', rating: 4.2 }
      ]
    },
    culturalExpectations: {
      dressCode: "Irish culture values practicality over formality, especially given Dublin's unpredictable weather. Dress practically with layers and waterproof jackets essential year-round. Choose casual, comfortable clothing - jeans, knitwear, and sturdy shoes fit perfectly with Irish style. Opt for dark colors and avoid white/light clothing to hide rain spots and blend with local fashion. Pack warm layers even in summer as Dublin evenings can be surprisingly cool and damp. Avoid flashy designer items or expensive jewelry to stay safe from pickpockets and fit local modesty values. Wear smart-casual attire for pubs and restaurants - most venues are relaxed but neat appearance is appreciated. Choose comfortable walking shoes with good grip as Dublin's cobblestone streets can be slippery when wet.",
      behaviorNorms: [
        'Queue politely and respect personal space - Irish people highly value orderly, courteous behavior',
        'Thank bus drivers when boarding and exiting - this simple courtesy is deeply appreciated',
        'Engage warmly in conversation - Irish people are naturally chatty and genuinely interested in visitors',
        'Offer to buy rounds when drinking with locals - essential part of Irish pub culture and friendship',
        'Speak at moderate volume in public spaces - loud conversations are considered rude and attention-seeking',
        'Be punctual for arranged meetings - lateness is seen as disrespectful and inconsiderate',
        'Show genuine interest in Irish culture and history - but avoid making political comments about sensitive topics',
        'Respect pub closing times and licensing laws - these are strictly enforced throughout Ireland',
        'Ask permission before photographing locals - especially in traditional pubs where privacy is valued',
        'Use \"please,\" \"thank you,\" and \"sorry\" frequently - politeness and courtesy are cornerstone Irish values'
      ],
      perception: "Solo female travelers are completely normal and widely welcomed throughout Dublin and Ireland. Is Dublin safe for women solo travelers? Yes - Ireland ranked #1 globally for solo female travel safety in 2022. Irish people are naturally protective and helpful toward tourists, especially women traveling alone. Dublin's progressive, cosmopolitan atmosphere makes solo female travel comfortable and well-supported. You'll find excellent support networks, women-friendly accommodations, and genuinely respectful local interactions. Irish pub culture warmly embraces solo female travelers - locals often adopt lone travelers into their groups. Irish culture has deep traditions of hospitality and protecting visitors, creating natural safety networks. Women traveling alone often report feeling safer in Dublin than in their home cities, and local Irish women are particularly helpful, offering advice and assistance freely."
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'August 28, 2024',
      details: 'Ireland is generally safe for travelers. However, rates of theft and petty crime have risen in recent years, particularly targeting tourists in Dublin city center. The US Embassy issued additional warnings in July 2023 advising visitors to avoid walking alone after recent incidents.',
      reason: 'Low violent crime rates but increased petty crime and incidents targeting tourists.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ireland-travel-advisory.html',
      soloTravelerAdvice: [
        'Is Dublin safe for female solo travelers? Yes - Ireland ranked #1 globally for solo female travel safety in 2022',
        'Download offline maps and transport apps - WiFi isn\'t always available',
        'Get a Leap Card for seamless public transport access across Dublin',
        'Stay in central Dublin areas like Ballsbridge or Trinity College vicinity for optimal solo female travel safety',
        'Book accommodation with 24-hour reception for added women travelers safety and support'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '€70-500 ($79-558) per day',
        description: 'Updated 2025 costs for solo female travel in Dublin. Budget travelers can manage €70-85/day with hostels and self-catering, while comfortable stays require €150-180/day. Dublin ranks among the safest countries for solo female travel, and excellent safety standards justify the costs.',
        tip: 'Book accommodation well in advance as Dublin has limited affordable options. Consider staying in neighborhoods like Rathmines or Ranelagh for better value while maintaining safety.'
      },
      accommodation: [
        {
          type: 'Budget Hostels/Shared Rooms',
          avgCost: '€79-100+/night (post-pandemic increase)',
          safetyNote: 'Prices dramatically increased post-pandemic. Female-only dorms available for solo female travel safety. Choose reputable hostels with 24/7 reception and security.',
          safetyLevel: 'medium'
        },
        {
          type: '3-Star Hotels',
          avgCost: '€120-200/night (€89/night off-season)',
          safetyNote: 'Excellent safety with professional staff, CCTV, central locations. Off-season rates 50-60% lower.',
          safetyLevel: 'high'
        },
        {
          type: 'Boutique Hotels/Airbnb',
          avgCost: '€120-250/night',
          safetyNote: 'High safety standards with modern amenities and secure neighborhoods.',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '€300+/night',
          safetyNote: 'Premier safety with concierge services, valet parking, and top-tier security.',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Leap Card (All Public Transport)',
          cost: 'TFI 90-minute fare €2, Daily cap €8, Weekly cap €32 (2025 prices)',
          safetyDescription: 'Comprehensive coverage across Dublin Bus, Luas trams, DART trains. CCTV monitoring, generally safe during day',
          safetyLevel: 'medium'
        },
        {
          method: 'Dublin Bus Network',
          cost: 'Single journey €2.40, Daily unlimited €8 with Leap Card',
          safetyDescription: 'Extensive bus network covering all Dublin areas. Well-lit stops, frequent services, driver assistance available',
          safetyLevel: 'medium'
        },
        {
          method: 'Luas Tram System',
          cost: 'Zone 1-2: €2.10, integrated with Leap Card system',
          safetyDescription: 'Modern tram system with Red and Green lines. Wheelchair accessible, electronic displays, generally very safe',
          safetyLevel: 'high'
        },
        {
          method: 'DART Railway',
          cost: '€3.30 city center zones, beautiful coastal route',
          safetyDescription: 'Scenic coastal rail service from Howth to Greystones. Well-maintained, punctual, excellent safety record',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis (Free Now App)',
          cost: '€6-15 per trip, €20/day average usage',
          safetyDescription: 'GPS tracked rides, can request female drivers. Use official taxi ranks or verified apps for maximum safety',
          safetyLevel: 'high'
        },
        {
          method: 'Dublin Bikes Scheme',
          cost: '€5/day, €20/week, first 30 minutes free',
          safetyDescription: 'Bike-sharing with 100+ stations citywide. Helmets not provided, be cautious in Dublin traffic',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free - Dublin very walkable',
          safetyDescription: 'Compact city center, well-lit streets, good pedestrian infrastructure. Exercise caution after dark',
          safetyLevel: 'high'
        },
        {
          method: 'Leap Visitor Card',
          cost: '€19.50 (1-day), €40 (3-day), €70 (7-day)',
          safetyDescription: 'Tourist transport pass for unlimited Zone 1 travel. Convenient and safe option for solo travelers',
          safetyLevel: 'high'
        },
        {
          method: 'Airport Transfer (Airlink Express)',
          cost: '€7 to city center, 30-40 minute journey',
          safetyDescription: 'Direct bus service from Dublin Airport. Frequent departures, luggage space, very reliable',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Use Leap Card for safe and affordable public transport - much cheaper than individual tickets for solo female travelers',
        'Look for early bird restaurant specials before 7pm for better prices',
        'Many museums offer free admission including National Gallery and National Museum',
        'Pub food often offers better value than restaurants',
        'Shop at Tesco, Dunnes Stores, or Lidl for groceries if self-catering',
        'Temple Bar area is expensive - explore other neighborhoods for dining',
        'Free walking tours available - tip-based system',
        'Drink tap water which is safe and free'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '112', 
      fire: '112', 
      medical: '112', 
      general: '112'
    },
    healthSafety: {
      hospitals: [
        {
          name: 'St. Vincent\'s University Hospital',
          address: 'Elm Park, Dublin 4',
          phone: '+353 1 221 4000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Center', 'Maternity', 'Gynecology', 'Sexual Assault Treatment'],
          link: 'https://www.stvincents.ie/emergency-department/'
        },
        {
          name: 'St. James\'s Hospital',
          address: 'James Street, Dublin 8',
          phone: '+353 1 410 3000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Maternity', 'Teaching Hospital'],
          link: 'https://www.stjames.ie/services/med/emergency/'
        },
        {
          name: 'Mater Misericordiae University Hospital',
          address: 'Eccles Street, Dublin 7',
          phone: '+353 1 803 2000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Obstetrics', 'Gynecology', 'Emergency Women\'s Health'],
          link: 'https://www.mater.ie/'
        }
      ],
      pharmacies: [
        {
          name: 'Long Mile Road Pharmacy',
          address: '1 Long Mile Road, Walkinstown, Dublin 12',
          phone: '+353 1 561 9075',
          hours: 'Mon-Sun: 8:00am - 10:00pm (364 days/year)',
          emergency: true,
          link: 'https://www.longmileroadpharmacy.com'
        },
        {
          name: 'Springfield Late Night Pharmacy',
          address: 'The Square Shopping Centre, Tallaght, Dublin 24',
          phone: '+353 1 452 0747',
          hours: 'Mon-Sat: 9:00am - 8:00pm, Sun: 11:00am - 5:00pm',
          emergency: false,
          link: 'https://springfieldpharmacy.ie/'
        },
        {
          name: 'Costello\'s Late Night Pharmacy',
          address: '25 Marino Mart, Marino, Dublin 3',
          phone: '+353 1 833 8571',
          hours: 'Mon-Fri: 9:00am - 7:00pm, Sat: 9:00am - 6:00pm',
          emergency: false,
          link: 'https://costellospharmacy.ie/'
        }
      ],
      womensHealth: {
        clinics: [
          'Irish Family Planning Association (IFPA)',
          'Well Woman Centre Dublin',
          'Women\'s Health Clinic at St. Vincent\'s Hospital'
        ],
        gynecologists: [
          'Holles Street National Maternity Hospital',
          'Rotunda Hospital Gynecology Department',
          'Coombe Women & Infants University Hospital'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Long Mile Road Pharmacy (extended hours)',
          'Springfield Pharmacy Tallaght',
          'Most hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'Tesco, Dunnes Stores, SuperValu',
          'Boots Pharmacy locations',
          'Many public restrooms provide emergency supplies'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Ireland',
        'Routine vaccinations should be up to date',
        'Travel health consultations available at pharmacies',
        'Flu vaccination recommended during winter months'
      ],
      healthRisks: [
        'Very low health risks overall',
        'Weather-related issues (hypothermia from rain/cold)',
        'Alcohol-related incidents in nightlife areas',
        'Minor risk of foodborne illness at poorly managed establishments'
      ]
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    },
      exchangeTips: [
        'Dublin is highly cashless - cards accepted everywhere, even for small transactions like public transport',
        'Use ATMs from major Irish banks (AIB, Bank of Ireland, Ulster Bank) for best rates and security',
        'Notify your bank of travel plans to avoid card blocking - essential since Dublin relies heavily on cards',
        'Avoid exchange bureaus at Dublin Airport - they offer poor rates compared to city center options',
        'Revolut and other digital banking apps offer excellent exchange rates with no hidden fees',
        'Many Dublin businesses prefer contactless payments - ensure your card has tap-to-pay capability',
        'Keep some cash for traditional pubs, small independent shops, and street performers',
        'Watch for dynamic currency conversion at payment terminals - always choose to pay in Euros'
      ],
      bestExchangeLocations: [
        'Bank of Ireland branches in Dublin city center',
        'AIB (Allied Irish Banks) main office on College Green',
        'Ulster Bank Grafton Street branch', 
        'PostPoint locations in Dublin for cash services',
        'No1 Currency Exchange on Nassau Street (better rates than airport)'
      ],
      tippingCulture: ['Tipping is appreciated but not mandatory in Dublin', '10-15% standard for good restaurant service', 'Round up taxi fares to nearest euro', 'No tipping needed for pub drinks unless table service', 'Hotel porters: €1-2 per bag', 'Tour guides: €5-10 for good service'],
      scamWarnings: [
        'Avoid Dublin Airport currency exchange - significantly poor rates compared to city center',
        'Never exchange money with street vendors - illegal and unsafe',
        'Watch for dynamic currency conversion scams at payment terminals',
        'ATM skimming devices occasionally found - check machines before use'
      ]
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Irish'],
    daytimeSafetyPercent: 78.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Dublin)
    nighttimeSafetyPercent: 54.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Dublin)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Dublin',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, U30X 2025
      { label: 'Drug Activity & Dealing', frequency: 'Frequent', icon: 'Syringe' }, // Numbeo 2025
      { label: 'ATM/Card Skimming', frequency: 'Occasional', icon: 'CreditCard' }, // OneVasco 2025
      { label: 'Overcharging Taxi Drivers', frequency: 'Occasional', icon: 'Car' }, // OneVasco 2025
    ],
    usefulTips: [
      {
        title: "Stay in safe, central neighborhoods",
        description: "Choose accommodation in areas like Ballsbridge, Donnybrook, or Temple Bar for convenience and safety. Avoid poorly lit or isolated areas at night.",
        severity: "low",
        sourceName: "Go-to-Ireland.com Safety Guide",
        sourceUrl: "https://www.go-to-ireland.com/travel-organization/safety-dublins-safe-neighbourhoods/"
      },
      {
        title: "Be vigilant for pickpockets in tourist areas",
        description: "Pickpocketing is rare but can occur in crowded spots like Temple Bar, O'Connell Street, and on public transport. Keep your belongings secure and use anti-theft bags.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      },
      {
        title: "Use official taxis or ride-hailing apps",
        description: "Avoid unmarked taxis. Use reputable apps like Free Now or book through your hotel. Always check the meter is running to avoid overcharging.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      },
      {
        title: "Dress for the weather and carry rain protection",
        description: "Dublin weather is unpredictable and rain is common. Carry a compact umbrella or waterproof jacket, and wear layers for comfort.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      },
      {
        title: "Respect local customs and avoid sensitive topics",
        description: "Irish people are friendly and polite. Avoid discussing sensitive topics like Northern Ireland or Brexit unless invited. A friendly greeting goes a long way.",
        severity: "low",
        sourceName: "OneVasco Ireland Safety Guide",
        sourceUrl: "https://blog.onevasco.com/safe-to-visit/ireland"
      }
    ], // Tips sourced from Go-to-Ireland.com, OneVasco, 2025
    culturalSensitivityTips: [
      'Greet with warm handshakes and make direct eye contact - Irish value genuine connection',
      'Embrace Irish humor and "craic" culture - join conversations in pubs and social settings',
      'Be punctual and respectful of time - Irish appreciate reliability and courtesy',
      'Thank service workers - bus drivers, servers, shop clerks appreciate acknowledgment',
      'Respect Irish hospitality - accept offers graciously and reciprocate warmth',
      "Don't joke about Irish stereotypes - leprechauns, accents, or 'top of the morning' phrases",
      "Don't order an Irish Car Bomb drink - extremely offensive reference to The Troubles",
      "Don't refuse hospitality abruptly - decline politely with genuine appreciation",
      "Don't discuss Northern Ireland politics unless locals initiate the conversation",
      "Don't take someone's pub seat without asking - this can cause serious offense"
    ],
    womensConfidenceScore: {
      score: 47.0, // Numbeo 2025 Safety Index for Dublin
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Dublin"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 80,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/ireland/dublin'
      },
      {
        label: 'Nightlife',
        confidence: 60,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/ireland/dublin'
      },
      {
        label: 'Public Transport',
        confidence: 75,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/ireland/dublin'
      },
      {
        label: 'Dining Alone',
        confidence: 85,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-dublin-safe-for-solo-female-travelers/'
      }
    ],

    legalResources: {
      embassy: {
        name: 'U.S. Embassy Dublin',
        address: '42 Elgin Road, Ballsbridge, Dublin 4',
        phone: '+353 1 668 8777',
        email: 'ACSdublin@state.gov',
        emergency: '+353 1 668 8777',
        link: 'https://ie.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Dublin',
          address: '42 Elgin Road, Ballsbridge, Dublin 4',
          phone: '+353 1 668 8777',
          link: 'https://ie.usembassy.gov/'
        },
        {
          name: 'British Embassy Dublin',
          address: '29 Merrion Road, Ballsbridge, Dublin 4',
          phone: '+353 1 205 3700',
          link: 'https://www.gov.uk/world/organisations/british-embassy-dublin'
        },
        {
          name: 'Embassy of Germany in Dublin',
          address: '31 Trimleston Avenue, Booterstown, Blackrock, Co. Dublin',
          phone: '+353 1 269 3011',
          link: 'https://dublin.diplo.de/'
        },
        {
          name: 'Embassy of France in Dublin',
          address: '66 Fitzwilliam Lane, Dublin 2',
          phone: '+353 1 277 5000',
          link: 'https://ie.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Dublin',
          address: '17a Merlyn Park, Ballsbridge, Dublin 4',
          phone: '+353 1 269 1640',
          link: 'https://www.exteriores.gob.es/embajadas/dublin'
        },
        {
          name: 'Australian Embassy Dublin',
          address: 'Fitzwilton House, Wilton Terrace, Dublin 2',
          phone: '+353 1 664 5300',
          link: 'https://ireland.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Dublin',
          address: '7-8 Wilton Terrace, Dublin 2',
          phone: '+353 1 234 4000',
          link: 'https://www.canadainternational.gc.ca/ireland-irlande/'
        },
        {
          name: 'Embassy of the Netherlands in Dublin',
          address: '160 Merrion Road, Ballsbridge, Dublin 4',
          phone: '+353 1 269 3444',
          link: 'https://www.netherlandsandyou.nl/countries/ireland'
        },
        {
          name: 'Danish Embassy Dublin',
          address: '121-122 St Stephen\'s Green, Dublin 2',
          phone: '+353 1 475 6404',
          link: 'https://irland.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Dublin',
          address: '6 Ailesbury Road, Ballsbridge, Dublin 4',
          phone: '+353 1 218 6382',
          link: 'https://www.eda.admin.ch/dublin'
        },
        {
          name: 'Irish Government Services',
          address: 'Multiple locations throughout Dublin',
          phone: '+353 1 800 20 20 20',
          link: 'https://www.gov.ie/'
        },
        {
          name: 'Embassy of India in Dublin',
          address: '6 Leeson Park, Dublin 6',
          phone: '+353 1 497 0843',
          link: 'https://www.indianembassy.ie/'
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
        'Keep copies of all police reports and medical documentation'
      ]
    },
    crimeStatistics: {
      violentCrime: 23, // per 100,000 (2025 data)
      propertyCrime: 156, // per 100,000 (2025 data) - pickpocketing most common
      sexualAssault: 34, // per 100,000 (2025) - Ireland ranks 6th in Europe for reports
      kidnapping: 0.8, // per 100,000 (2025 data)
      source: 'Central Statistics Office Ireland & Travel Ladies Safety Index 2025',
      year: 2025,
      context: 'Dublin ranked #80 safest for women globally, with 28% experiencing harassment in past year vs 13% men'
    },
    culturalDos: [
      'Greet with friendly "Hello" or "How are you?" - Irish people appreciate warm, genuine interactions',
      'Join in pub conversations naturally - locals welcome solo female travelers into their social circles',
      'Thank bus drivers when boarding and exiting - this simple courtesy is deeply valued in Irish culture',
      'Offer to buy rounds when drinking with locals - essential part of Irish pub culture and friendship building',
      'Queue politely and respect personal space - Irish people highly value orderly, courteous behavior',
      'Engage warmly in conversation - Irish are naturally chatty and genuinely interested in travelers',
      'Accept hospitality graciously - Irish culture emphasizes generous hosting and genuine care for visitors',
      'Use "please," "thank you," and "sorry" frequently - politeness is a cornerstone of Irish social interaction'
    ],
    culturalDonts: [
      "Don't joke about Irish stereotypes - leprechauns, accents, or 'top of the morning' phrases are offensive",
      "Don't order an Irish Car Bomb drink - extremely offensive reference to The Troubles conflict",
      "Don't refuse hospitality abruptly - decline politely with genuine appreciation for the gesture",
      "Don't discuss Northern Ireland politics unless locals initiate the conversation first",
      "Don't take someone's regular pub seat without asking - this can cause serious social offense",
      "Don't expect everything to run on time - Irish culture operates on 'Irish time' with more relaxed schedules",
      "Don't be overly loud or demanding - Irish prefer gentle, respectful communication styles",
      "Don't assume all Irish people know each other - Ireland has over 5 million people across the country"
    ],
  youtubeVideo: {
    videoId: "kZ06nOhdr6Q" // Dublin travel guide video showing what it's like to visit
  }
};

export default dublin;
