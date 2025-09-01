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
        context: 'Generally safe at night, though the US Embassy (July 2023) advises avoiding walking alone in Dublin city center after dark due to recent incidents. Well-lit main streets but be cautious in Temple Bar area and O\'Connell Street late at night. Ireland ranked #1 globally for solo female travel safety in 2022 (Bounce), though drug-related activity is visible in some central areas.' 
      },
      publicTransit: { 
        score: 8.6, 
        context: 'Dublin\'s public transport (buses, DART trains, Luas trams) is generally safe and efficient. Pickpocketing can occur at Connolly and Heuston stations during peak times. Public transport is well-monitored with good lighting and security presence. Late-night services available with reasonable safety levels.' 
      },
      walkingAlone: { 
        score: 8.2, 
        context: 'Ireland has a safety index of 73/100 (Travel Safe Abroad 2024). Daytime safety is excellent at 78.2%, though women should be aware that 52% of Irish women have experienced sexual violence in their lifetime (CSO 2023). Avoid isolated areas and stay alert in tourist zones like Grafton Street where pickpocketing occurs.' 
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
      dressCode: 'Irish culture values practicality over formality. Dress casually but neatly - jeans and comfortable layers work perfectly. Dublin is style-conscious but not pretentious. Avoid flashy designer items that might attract pickpockets. Weather-appropriate clothing is essential - always carry rain protection. Smart-casual attire works for pubs, restaurants, and cultural venues. Dark colors hide rain spots well.',
      behaviorNorms: [
        'Queue politely and respect personal space - Irish people value orderly behavior',
        'Thank bus drivers when boarding and exiting - it\'s considered good manners',
        'Engage in friendly conversation - Irish people are naturally chatty and welcoming',
        'Offer to buy rounds when drinking with locals - it\'s part of pub culture',
        'Speak at moderate volume in public - loud conversations are considered rude',
        'Be punctual for arranged meetings - lateness is considered disrespectful',
        'Show appreciation for Irish history and culture without making political comments',
        'Respect pub closing times - licensing laws are strictly enforced',
        'Ask permission before taking photos of locals or in traditional pubs',
        'Use "please" and "thank you" frequently - politeness is highly valued'
      ],
      perception: 'Solo female travelers are completely normal and widely accepted in Dublin. Ireland ranked #1 globally for solo female travel safety in 2022. Irish people are naturally helpful toward tourists, especially women traveling alone. Dublin is very progressive and women-friendly. You\'ll find excellent support networks, safe accommodation options, and respectful local interactions. Irish culture has strong traditions of protecting and respecting women travelers.'
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
        'Ireland ranked #1 globally for solo female travel safety in 2022',
        'Download offline maps and transport apps - WiFi isn\'t always available',
        'Get a Leap Card for seamless public transport access across Dublin',
        'Stay in central Dublin areas like Ballsbridge or Trinity College vicinity for safety',
        'Book accommodation with 24-hour reception for added security and support'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '€70-500 ($79-558) per day',
        description: 'Updated 2025 costs for solo female travel in Dublin. Budget travelers can manage €70-85/day with hostels and self-catering, while comfortable stays require €150-180/day. Dublin is expensive but offers excellent safety standards.',
        tip: 'Book accommodation well in advance as Dublin has limited affordable options. Consider staying in neighborhoods like Rathmines or Ranelagh for better value while maintaining safety.'
      },
      accommodation: [
        {
          type: 'Budget Hostels/Shared Rooms',
          avgCost: '€79-100+/night (post-pandemic increase)',
          safetyNote: 'Prices dramatically increased. Female-only dorms available. Choose reputable hostels with 24/7 reception and security.',
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
          method: 'Public Transport (Leap Card)',
          cost: '€6/day (7-day card €40)',
          safetyDescription: 'Generally safe during day but majority feel unsafe after dark. CCTV coverage, exact change not needed with Leap Card.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Dublin city center is very walkable and generally safe. Well-lit streets with good pedestrian infrastructure.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis/Free Now App',
          cost: '€20/day average, €6-15 per trip',
          safetyDescription: 'Safe option with GPS tracking. Can request female drivers through apps. Use official taxi ranks or apps.',
          safetyLevel: 'high'
        },
        {
          method: 'Dublin Bikes',
          cost: '€5/day',
          safetyDescription: 'Bike-sharing system with stations throughout the city. Generally safe but be cautious in traffic.',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Use Leap Card for public transport - much cheaper than individual tickets',
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
      'DO: Greet with a friendly hello and make eye contact - Irish people value direct, warm interaction',
      'DO: Join in local conversation and humor - Irish are naturally chatty and welcoming to visitors',
      'DO: Queue patiently and respect personal space - orderly behavior is highly valued',
      'DO: Thank bus drivers when boarding and exiting - it\'s considered basic courtesy',
      "DON'T: Joke about Irish history, religion, accents, or stereotypes - these topics are sensitive",
      "DON'T: Speak loudly or draw attention in public - moderate volume is preferred",
      "DON'T: Refuse hospitality abruptly - decline politely with appreciation",
      "DON'T: Discuss money, religion, politics, or Northern Ireland unless invited"
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
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default dublin;
