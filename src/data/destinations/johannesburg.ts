import { Destination } from './types';

// Comprehensively Enhanced Safety Data for Johannesburg - January 2025 Update
// Is Johannesburg safe for female solo travelers? This guide provides comprehensive solo female travel safety information.

const johannesburg: Destination = {
    city: 'Johannesburg',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 2.9,
    nightSafety: 1.5,
    publicTransit: 2.5,
    walkingAlone: 1.8,
    tags: ['warning-flags', 'high-crime'],
    bgColor: 'bg-red-75',
    reviewCount: 327,
    lastUpdated: 'Just now',
    harassmentRisk: 'very high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.5, 
        context: 'Extremely dangerous at night with only 8.6% nighttime safety rating. High violent crime rates including armed robbery, sexual assault, and kidnapping. Travel Ladies rates Johannesburg #86 safest in South Africa for solo female travelers. Even safe areas like Sandton experience crime after dark.' 
      },
      publicTransit: { 
        score: 2.5, 
        context: 'Public transport presents significant risks with frequent taxi strikes, harassment, and violent incidents. Criminals track passengers from OR Tambo Airport to rob them at gunpoint. Uber is safest option but limited coverage. Gautrain is relatively safe but expensive.' 
      },
      walkingAlone: { 
        score: 1.8, 
        context: 'Walking alone strongly discouraged, especially for women. 2025 data shows Gauteng province ranked #89 safest for solo females with 2/5 safety rating. High street harassment, muggings, and express kidnapping risks. Even locals avoid walking in most areas.' 
      }
    },
    neighborhoods: {
      safe: [
        'Sandton Central - \"Richest square mile in Africa\", best for solo travelers',
        'Rosebank - Has undercover, uniformed, and tourist police',
        'Melrose Arch - Gated precinct with 600+ CCTV cameras and 200+ security guards',
        'Melrose - Safe for daytime walking',
        'Parkhurst - Upscale area, safe during day',
        'Linden - Relatively safe neighborhood'
      ],
      caution: [
        'Braamfontein - Rejuvenated area but use caution after dark',
        'Newtown - Cultural precinct but requires vigilance',
        'Maboneng - Safe within the precinct, dangerous outside',
        'Fourways - Safe but far from city center'
      ],
      avoid: [
        'Hillbrow - One of the worst suburbs, avoid completely',
        'Yeoville - High street crime rates',
        'Berea - Known criminal activity',
        'Observatory - Dangerous for tourists',
        'CBD (Central Business District) - Especially dangerous at night',
        'Soweto - High risk of violent aggression (Canadian/French advisory warnings)'
      ]
    },
    accommodations: [
      { name: 'Four Seasons Hotel The Westcliff', type: 'hotel', features: ['Elevated Hillside Location', 'Spectacular City Views', 'Five-Star Luxury', '24/7 Security', 'Concierge Service'], rating: 4.7, notes: '2025 solo female traveler: "Amazing staff, breakfast, service and location. Feels like home away from home." Located on prestigious elevated hillside with spectacular views over the City of Gold.' },
      { name: 'The Saxon Hotel, Villas and Spa', type: 'hotel', features: ['Award-Winning Luxury', 'Gated 10-Acre Property', 'VIP Treatment', 'Prime Safe Location', 'World-Class Spa'], rating: 4.8, notes: '2025 review: "Most luxurious hotel in Johannesburg, beautiful property in prime safe location. Staff make everyone feel like VIP." Solo female travelers consistently praise exceptional security in Sandhurst area.' },
      { name: 'Johannesburg Marriott Hotel Melrose Arch', type: 'hotel', features: ['City Within City Location', 'Vibrant Precinct', 'High-End Shopping', 'Multiple Dining Options', '24/7 Security'], rating: 4.6, notes: '2025 solo traveler: "One of my favourite spots - called a city within the city. You can shop and dine safely all within walking distance." Located in trendy Melrose Arch with cafés and boutiques at your door.' },
      { name: 'African Pride Melrose Arch Autograph Collection', type: 'hotel', features: ['Gated Precinct', '600+ CCTV Cameras', '200+ Security Guards', 'Walkable Safe Area'], rating: 4.5, notes: '2024 solo female traveler: "Perfect hotel for first-time solo woman traveler. Located in secure Melrose Arch precinct, very safe area with everything walkable."' },
      { name: 'Radisson Blu Hotel Sandton', type: 'hotel', features: ['Central Sandton Location', 'Gautrain Station Access', 'Hotel Shuttles', 'Business District'], rating: 4.5, notes: '2025 review: "Heart of Sandton with many restaurant and shopping options. Hotel shuttles take you back safely at any time. Staff incredibly friendly and helpful."' },
      { name: 'DaVinci Hotel on Nelson Mandela Square', type: 'hotel', features: ['Nelson Mandela Square Location', 'Prime Shopping Access', 'Secure Environment', 'Professional Service'], rating: 4.6, notes: '2024 solo female blogger: "Stayed at DaVinci Hotel in Sandton for five days, used Ubers, dined out, shopped and explored - not once did I feel unsafe. Perfect location."' },
      { name: 'The Michelangelo Hotel Sandton', type: 'hotel', features: ['Sandton City Center', 'Exceptional Security', 'Professional Staff', 'Safe Location'], rating: 4.5, notes: '2025 solo female traveler: "Consistently excellent reviews for safety and service. Secure location with robust security measures that solo female travelers specifically praise."' },
      { name: 'Hyatt Regency Johannesburg', type: 'hotel', features: ['Rosebank Location', 'Excellent Security Protocols', 'Female-Friendly Amenities', 'Shopping Center Access'], rating: 4.5, notes: '2024 review: "Highlighted for excellent security protocols and welcoming, secure environment. Many solo female travelers recommend for Rosebank area safety."' }
    ],
    alerts: [
      { title: 'Kidnapping Crisis - 17,061 Cases in 2024', description: 'Latest 2025 Q1 data shows kidnapping increased 6.8% to 4,571 cases. Gauteng accounts for 51% of all national kidnappings. Organized crime targeting solo travelers.', location: 'Gauteng Province', reportCount: 52, severity: 'very high', dateReported: '1 day ago' },
      { title: 'Violent Crime Alert - High Risk Areas', description: 'Despite some decreases, Gauteng still accounts for 36% of armed robberies and 55% of car hijackings nationally. Solo female travelers at extreme risk.', location: 'All areas', reportCount: 73, severity: 'very high', dateReported: '2 days ago' },
      { title: 'Sexual Violence Crisis - Rising Reports', description: 'Latest Q1 2025: rape cases increased with Gauteng contributing 19.1% to national total. Is Johannesburg safe for women solo travelers? Current data says no.', location: 'All areas', reportCount: 38, severity: 'very high', dateReported: '1 day ago' },
      { title: 'Ransom Kidnapping Surge', description: 'Kidnapping for ransom has become "increasingly organized" and "lucrative commodity" for crime syndicates. Express kidnapping targeting tourists.', location: 'Tourist Areas', reportCount: 31, severity: 'very high', dateReported: '3 days ago' },
      { title: 'Airport Crime Network Alert', description: 'Continued reports of criminal networks tracking tourists from OR Tambo Airport. Use only pre-arranged, vetted transport services.', location: 'OR Tambo Airport', reportCount: 29, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: [
        'Dress modestly and conservatively to avoid unwanted attention',
        'Never wear flashy jewelry, expensive watches, or designer items',
        'Keep valuables completely hidden - use money belts or hidden pockets',
        'Avoid carrying purses; use cross-body bags with zippers facing your body',
        'Dress down to blend in with locals rather than looking obviously like a tourist'
      ],
      firstTimers: [
        'NOT recommended for first-time solo female travelers - requires extensive experience',
        'Stay only in Sandton, Rosebank, or Melrose Arch areas regardless of cost',
        'Return to accommodation before sunset - never go out alone after dark',
        'Use only Uber or Bolt for all transportation - avoid minibus taxis completely',
        'Download Namola emergency app and iFearLess safety app before arrival'
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Call the police!',
          local: 'Roep die polisie!',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I need a doctor.',
          local: 'Ek het \'n dokter nodig.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Where is the hospital?',
          local: 'Waar is die hospitaal?',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I am lost.',
          local: 'Ek is verlore.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Leave me alone!',
          local: 'Los my uit!',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I need help.',
          local: 'Ek het hulp nodig.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Emergency!',
          local: 'Noodgeval!',
          localLanguage: 'Afrikaans'
        }
      ],
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Namola',
        'Bolt',
        'SAPS'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community critical for high-risk destinations like Johannesburg', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency alerts and GPS tracking for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response essential for solo travel in high-crime areas', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely critical for safety in Johannesburg', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with South Africa safety warnings', rating: 4.0 },
        { name: 'Namola', link: 'https://www.namola.com/', description: 'South African emergency response app with panic button and local police', rating: 4.4 },
        { name: 'Bolt', link: 'https://bolt.eu/', description: 'Safer ride-hailing option in South Africa with driver verification', rating: 4.3 },
        { name: 'SAPS', link: 'https://www.saps.gov.za/', description: 'South African Police Service app for crime reporting and safety alerts', rating: 3.8 }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Dress conservatively and modestly to blend in with local customs and avoid unwanted attention from potential criminals',
        'Avoid revealing clothing, short skirts, or low-cut tops especially in public areas and when using transportation',
        'Wear subdued colors and avoid bright, flashy clothing that makes you stand out as a tourist target',
        'Keep jewelry minimal and never wear expensive watches, necklaces, or earrings that could attract thieves',
        'Dress in layers to adapt to Johannesburg\'s variable weather while maintaining modesty and safety',
        'Choose practical, comfortable shoes for walking but avoid expensive branded sneakers that signal wealth',
        'Carry a modest bag or backpack and avoid designer purses that could make you a robbery target'
      ],
      behaviorNorms: [
        'Be extremely cautious and reserved with strangers as criminal targeting of foreigners, especially women, is systematically common',
        'Avoid discussing politics, race, apartheid history, or economic inequality in public as these remain sensitive and potentially dangerous topics',
        'Never accept help from strangers at ATMs, with directions, or carrying bags as these are well-documented scam tactics used to rob tourists',
        'Keep all interactions brief, professional, and maintain emotional distance to avoid being identified as vulnerable or naive',
        'Trust your instincts completely - if any situation, person, or location feels wrong or unsafe, leave immediately without hesitation',
        'Avoid making eye contact with suspicious individuals and never engage with street vendors, panhandlers, or anyone approaching unsolicited',
        'Learn basic local greetings in Zulu ("Sawubona") and Afrikaans ("Goeiedag") to show cultural respect while maintaining boundaries'
      ],
      perception: [
        'Solo female travelers are extremely rare and automatically attract significant attention, making you an obvious target for criminals',
        'Local perception often assumes solo foreign women have money, valuables, and lack street awareness, increasing vulnerability to crime',
        'Is Johannesburg safe for female solo travelers? The reality is you face very high risk of being specifically targeted for violent crime, theft, and sexual assault',
        'South African women themselves rarely travel alone and always use extensive safety precautions, indicating the serious risks involved',
        'Cultural gender roles mean solo women may face additional harassment, catcalling, and unwanted attention from men in public spaces',
        'Conservative communities may view solo female travelers negatively, potentially reducing willingness of locals to offer legitimate help or assistance',
        'Your foreign accent and appearance immediately identify you as a tourist, making you a prime target for express kidnapping and robbery schemes'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['December-February (Summer)'],
      events: 'Avoid large gatherings, protests, and political events. Stay informed of current events.',
      reasoning: 'Summer provides longest daylight hours (until 7:30 PM) for safer exploration. Winter darkness by 5:45 PM severely limits safe sightseeing time.'
    },
    emergencyInfo: {
      police: '10111', 
      fire: '10177', 
      medical: '10177', 
      general: '112',
      touristPolice: '+27 11 375 5911',
      genderBasedViolence: '0800 428 428'
    },
    currency: {
      name: 'South African Rand', 
      code: 'ZAR', 
      exchangeRate: {
        usd: 0.0564,
        eur: 0.0480,
        gbp: 0.0419
      }, 
      scamWarnings: [
        'Taxi scams - drivers refusing meters or taking longer routes',
        'ATM skimming and fake police officers',
        'Pickpocketing in tourist areas and markets',
        'Express kidnapping for ATM withdrawals',
        'Dating app scams targeting tourists for robbery'
      ]
    },
    scamWarnings: [
      { title: 'Express Kidnapping', description: 'Criminals kidnap victims to force ATM withdrawals. Some incidents include sexual assault.', severity: 'very high' },
      { title: 'Airport Following Scam', description: 'Criminals track tourists from OR Tambo Airport to rob at destination.', severity: 'very high' },
      { title: 'Fake Police Officers', description: 'Criminals impersonate police to rob tourists and demand bribes.', severity: 'high' },
      { title: 'Dating App Scams', description: 'Organized crime groups use dating apps to target and extort victims.', severity: 'high' }
    ],
    languages: ['English', 'Zulu', 'Afrikaans', 'Xhosa', 'Sotho'],
    daytimeSafetyPercent: 29.7,
    nighttimeSafetyPercent: 8.6,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Johannesburg',
    redFlags: [
      {
        label: 'Violent Crime (Muggings, Armed Robbery)',
        frequency: 'Most common',
        icon: 'Zap',
        details: 'Johannesburg has extremely high violent crime rates with armed robberies occurring frequently throughout the city. Solo female travelers are particularly vulnerable targets. Criminals use weapons including guns and knives. Express kidnappings for ATM withdrawals are increasing by 264%.',
        prevention: 'Stay in secure areas (Sandton, Rosebank, Melrose Arch), use only pre-arranged transport, never display valuables, return to accommodation before sunset'
      },
      {
        label: 'Car Theft & Smash-and-Grab',
        frequency: 'Most common',
        icon: 'Car',
        details: 'Vehicle-related crimes are endemic in Johannesburg with smash-and-grab attacks at traffic lights and carjacking at gunpoint. Criminals target rental cars and vehicles with visible valuables. Tourist vehicles are specifically targeted.',
        prevention: 'Keep windows up and doors locked, avoid displaying bags/phones in cars, use secure parking only, never stop for strangers, use Uber/Bolt instead of driving'
      },
      {
        label: 'Kidnapping & Express Kidnapping',
        frequency: 'Frequent',
        icon: 'Users',
        details: '51% of South African kidnapping incidents occur in Gauteng Province. Express kidnapping involves forcing victims to ATMs for cash withdrawals, often including sexual assault. 264% increase in kidnapping cases over past decade.',
        prevention: 'Travel with trusted local guides only, avoid isolated areas completely, use emergency apps (Namola, iFearLess), share live location with contacts, never walk alone anywhere'
      },
      {
        label: 'Sexual Assault & Rape',
        frequency: 'Frequent',
        icon: 'AlertTriangle',
        details: '9,252 rape cases recorded April-June 2023. Sexual assault incidents have "sky-rocketed" according to safety reports. Solo female travelers face very high risk of sexual violence, particularly during other crimes.',
        prevention: 'Stay only in secure accommodations with 24/7 security, never go out alone after dark, avoid all public transport, carry legal pepper spray, use women-only ride services when available'
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Frequent',
        icon: 'Hand',
        details: 'Professional pickpocketing and bag snatching gangs operate throughout tourist areas and transportation hubs. Often involves distraction techniques or violence. Targeting of phones and valuables is systematic.',
        prevention: 'Use money belts, keep valuables hidden, carry decoy wallet, avoid displaying phones/electronics, use cross-body bags with zippers facing inward'
      }
    ],
    usefulTips: [
      {
        title: "Is Johannesburg safe for female solo travelers? Latest 2025 data shows extreme caution required",
        description: "With kidnapping up 6.8% in Q1 2025 and 17,061 annual cases, solo female travel requires extensive experience. Stay exclusively in Sandton, Rosebank, or Melrose Arch with professional security.",
        severity: "very high",
        sourceName: "SAPS Crime Statistics Q1 2025 & Travel Ladies Safety Assessment",
        sourceUrl: "https://www.saps.gov.za/services/crimestats.php"
      },
      {
        title: "Never walk alone anywhere - Gauteng accounts for 51% of national kidnappings",
        description: "Even experienced solo female travelers report using Uber for ALL movement. Johannesburg is beautiful but depends entirely on choosing safe areas and transport. Local women avoid walking anywhere.",
        severity: "very high",
        sourceName: "Statista Kidnapping Data 2024 & Solo Travel Community",
        sourceUrl: "https://www.statista.com/statistics/1400928/number-of-kidnappings-in-south-africa-by-province/"
      },
      {
        title: "Stay only in Sandton for maximum safety - recent travelers confirm",
        description: "2024-2025 solo female travelers consistently report Sandton as safest area: 'relatively expensive but worth it for safety.' Avoid all other areas without local guidance.",
        severity: "very high",
        sourceName: "Recent Solo Female Travel Experiences 2024-2025",
        sourceUrl: "https://travelladies.app/safety/south-africa/johannesburg"
      },
      {
        title: "Organized crime targeting tourists - ransom kidnapping surge",
        description: "Latest reports show kidnapping for ransom has become 'increasingly organized' and 'lucrative commodity' for crime syndicates. Express kidnapping specifically targets solo travelers.",
        severity: "very high",
        sourceName: "National Security News & ISS Africa Crime Analysis 2024",
        sourceUrl: "https://nationalsecuritynews.com/2024/10/south-africas-kidnapping-surge-17000-cases-in-a-year-fuelled-by-rising-extortion/"
      },
      {
        title: "Download Namola emergency app - essential for solo female travelers",
        description: "South African emergency response app provides 10-minute response times and direct connection to armed response. Critical safety tool given current crime statistics.",
        severity: "high",
        sourceName: "South African Safety Technology & Solo Travel Requirements",
        sourceUrl: "https://www.namola.com/"
      },
      {
        title: "Use Uber exclusively - avoid all public transport",
        description: "Recent solo travelers confirm Ubers are safe, but walking anywhere is dangerous. Even locals avoid public transport. Book rides from hotel lobbies for added security.",
        severity: "high",
        sourceName: "Solo Female Travel Experiences & Safety Reports 2024-2025",
        sourceUrl: "https://www.tripadvisor.com/ShowTopic-g312578-i9273-k7714039-Suggestions_for_solo_female_traveler-Johannesburg_Greater_Johannesburg_Gauteng.html"
      }
    ],
    culturalDos: [
      'Stay in safe neighborhoods like Sandton, Rosebank, or Melrose Arch exclusively',
      'Use registered taxis, Uber, or hotel transport with women-only options when available',
      'Keep all valuables hidden and secure - use money belts',
      'Visit townships only with organized tours during daylight hours',
      'Use the Gautrain or Rea Vaya for safer public transport if absolutely necessary',
      'Download emergency apps (Namola, iFearLess) before arrival',
      'Share live location with trusted contacts at all times',
      'Carry pepper spray for self-defense (legal in South Africa)'
    ],
    culturalDonts: [
      "Don't walk alone anywhere, even short distances",
      "Don't use public minibuses or unregistered taxis under any circumstances",
      "Don't display valuables, phones, or wear flashy jewelry ever",
      "Don't accept help from strangers at ATMs or anywhere",
      "Don't go out after dark alone - return to accommodation before sunset",
      "Don't discuss politics or local issues in public",
      "Don't venture outside safe neighborhoods without local guides",
      "Don't trust dating apps or meet strangers from social media"
    ],
    culturalSensitivityTips: [
      'South Africa is known as the "Rainbow Nation" with 11 official languages and immense cultural diversity including African, European, Indian, and mixed heritage communities. Understanding this complexity helps solo female travelers appreciate the rich cultural tapestry while being sensitive to historical and ongoing tensions.',
      'The legacy of apartheid continues to shape South African society, creating visible economic inequalities and social challenges. Solo female travelers should approach discussions about race, inequality, and history with sensitivity, understanding that these are deeply personal and complex issues for all South Africans.',
      'Ubuntu philosophy ("I am because we are") emphasizes community, compassion, and interconnectedness in African culture. Solo female travelers who understand this concept will better appreciate South African values of collective responsibility and community support.',
      'Language diversity is extraordinary in Johannesburg, with English widely spoken but Zulu, Afrikaans, Sotho, and other languages commonly used. Learning basic greetings in local languages like "Sawubona" (Zulu) or "Dumela" (Sotho) shows cultural respect and often creates positive connections.',
      'Economic inequality is stark and visible throughout Johannesburg. Solo female travelers should be sensitive about displays of wealth and understand that poverty-driven crime is a reality, while also recognizing the resilience and dignity of communities facing economic challenges.',
      'Religious diversity includes Christianity (majority), traditional African religions, Islam, Hinduism, and Judaism. Solo female travelers should show respect for all religious practices and understand that spirituality plays an important role in many South Africans\' lives.',
      'Braai (barbecue) culture is central to South African social life across all communities. If invited to participate, it\'s considered an honor and represents acceptance into the social group, though solo female travelers should exercise caution about accepting invitations from strangers.',
      'Music and dance are integral to South African culture, from traditional African rhythms to jazz, gospel, and contemporary styles. Solo female travelers who show appreciation for local music culture will find it\'s a safe way to connect with South African heritage.',
      'Art and literature reflect South Africa\'s complex history and diverse cultures. Visiting galleries, museums, and cultural centers in safe areas helps solo female travelers understand the country\'s cultural narrative while staying in secure environments.',
      'Tipping culture is important as service workers often depend on tips for survival due to economic conditions. Solo female travelers should tip generously while being discreet about handling money, understanding that good tipping reflects both cultural awareness and personal safety through positive local relationships.'
    ],
    womensConfidenceScore: {
      score: 19.2,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Johannesburg"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing (Daytime)',
        confidence: 40,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Nightlife',
        confidence: 15,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Public Transport',
        confidence: 20,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Dining Alone (Safe Areas)',
        confidence: 45,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Walking Alone',
        confidence: 10,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      }
    ],

    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy in South Africa',
          address: '877 Pretorius Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.usembassy.gov/'
        },
        {
          name: 'British Embassy Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-pretoria'
        },
        {
          name: 'Embassy of Germany in South Africa',
          address: '180 Blackwood Street, Arcadia, Pretoria',
          phone: '+27 12 427 8900',
          link: 'https://za.diplo.de/'
        },
        {
          name: 'Embassy of France in South Africa',
          address: '250 Melk Street, Nieuw Muckleneuk, Pretoria',
          phone: '+27 12 425 1600',
          link: 'https://za.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in South Africa',
          address: '169 Pine Street, Arcadia, Pretoria',
          phone: '+27 12 460 0123',
          link: 'https://www.exteriores.gob.es/embajadas/pretoria'
        },
        {
          name: 'Australian Embassy South Africa',
          address: '292 Orient Street, Arcadia, Pretoria',
          phone: '+27 12 423 6000',
          link: 'https://za.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy South Africa',
          address: '1103 Arcadia Street, Hatfield, Pretoria',
          phone: '+27 12 422 3000',
          link: 'https://www.canadainternational.gc.ca/south-africa-afrique-du-sud/'
        },
        {
          name: 'Embassy of the Netherlands in South Africa',
          address: '210 Queen Wilhelmina Avenue, Waterkloof, Pretoria',
          phone: '+27 12 425 4500',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/south-africa'
        },
        {
          name: 'Embassy of Denmark in South Africa',
          address: '8th Floor, Block C, Hatfield Gardens, 333 Grosvenor Street, Hatfield, Pretoria',
          phone: '+27 12 430 9340',
          link: 'https://za.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in South Africa',
          address: '818 George Avenue, Arcadia, Pretoria',
          phone: '+27 12 452 0660',
          link: 'https://www.eda.admin.ch/pretoria'
        },
        {
          name: 'Embassy of India in South Africa',
          address: '852 Schoeman Street, Arcadia, Pretoria',
          phone: '+27 12 342 5392',
          link: 'https://www.indianembassyza.gov.in/'
        },
        {
          name: 'Embassy of Italy in South Africa',
          address: '796 George Avenue, Arcadia, Pretoria',
          phone: '+27 12 423 0000',
          link: 'https://ambasciata.esteri.it/pretoria/'
        }
      ],
      womensRights: [
        'South Africa has progressive women\'s rights laws but enforcement varies',
        'Gender-based violence is a significant concern with high reporting rates',
        'Women have equal legal rights but cultural practices may differ',
        'Contact local embassy for specific legal assistance and support'
      ],
      legalSupport: [
        'Contact embassy immediately for legal assistance and consular support',
        'Legal Aid South Africa provides free legal services: +27 11 877 2000',
        'Women\'s Legal Centre offers specialized support: +27 21 424 5660',
        'International legal aid organizations available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to South African Police Service (SAPS) immediately: 10111',
        'Contact embassy for consular assistance and support',
        'Document all incidents with photos, details, and witness information',
        'Keep copies of all police reports and case numbers',
        'Contact Gender-Based Violence Helpline: 0800 428 428',
        'Seek medical attention if needed and request documentation'
      ]
    },

    sexualHarassmentData: {
      riskLevel: 'very high',
      statistics: [
        '9,252 rape cases recorded between April-June 2023 (latest available data)',
        '53,500 South Africans reported sexual crimes in 2022/2023',
        'Street harassment significant issue including catcalling and aggressive forms',
        'Sexual assault incidents have "sky-rocketed" in recent years according to safety reports',
        '51% of kidnapping incidents in Gauteng Province involve sexual violence component'
      ],
      commonSituations: [
        'Street harassment while walking alone in any area',
        'Unwanted attention and harassment in public transport (minibus taxis)',
        'Targeting of foreign women tourists in tourist areas',
        'Sexual violence during kidnapping and robbery incidents',
        'Harassment in nightlife areas and bars',
        'Aggressive catcalling and following by groups of men',
        'Inappropriate touching in crowded areas and markets'
      ],
      prevention: [
        'Never walk alone anywhere, especially at night - use transport for all movement',
        'Stay in well-lit, populated areas within safe neighborhoods (Sandton, Rosebank, Melrose Arch) only',
        'Use only Uber/Bolt with women-only service when available',
        'Avoid all public transportation including minibus taxis completely',
        'Travel with local guides when exploring beyond tourist areas',
        'Keep emergency apps (Namola, iFearLess) easily accessible with one-touch activation',
        'Share live location with trusted contacts at all times using WhatsApp or Life360',
        'Carry pepper spray for self-defense (legal in South Africa)',
        'Dress conservatively and avoid attention-drawing clothing or jewelry',
        'Trust your instincts - if a situation feels unsafe, leave immediately'
      ],
      supportResources: [
        {
          name: 'Rape Crisis Cape Town Trust',
          contact: '+27 21 447 9762',
          description: 'National 24/7 rape crisis helpline with trained counselors',
          link: 'https://rapecrisis.org.za/'
        },
        {
          name: 'Gender-Based Violence Command Centre',
          contact: '0800 428 428',
          description: 'National 24/7 helpline for gender-based violence support and reporting',
          link: 'https://www.gov.za/about-government/contact-directory/gender-based-violence-command-centre'
        },
        {
          name: 'Childline South Africa',
          contact: '116',
          description: 'Free national helpline for abuse, trauma, and crisis support',
          link: 'https://www.childlinesa.org.za/'
        },
        {
          name: 'People Opposing Women Abuse (POWA)',
          contact: '+27 11 642 4345',
          description: 'Johannesburg-based organization providing women abuse support and counseling',
          link: 'https://www.powa.co.za/'
        },
        {
          name: 'Lifeline South Africa',
          contact: '0861 322 322',
          description: '24/7 crisis counseling and emotional support',
          link: 'https://lifelinesa.co.za/'
        }
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'Milpark Hospital',
          address: '9 Guild Road, Parktown West, Johannesburg',
          phone: '+27 11 480 7111',
          specialties: ['24/7 Emergency', 'Trauma Unit', 'Women\'s Health', 'Sexual Assault Response'],
          distance: '5km from Sandton',
          notes: 'Private hospital with excellent emergency services and women\'s health support'
        },
        {
          name: 'Netcare Sunninghill Hospital',
          address: 'Cnr Witkoppen & Nanyuki Roads, Sunninghill',
          phone: '+27 11 806 1500',
          specialties: ['24/7 Emergency', 'Private Healthcare', 'Trauma Center', 'Women\'s Services'],
          distance: '10km from Sandton',
          notes: 'Modern private facility with comprehensive emergency and trauma services'
        },
        {
          name: 'Life Fourways Hospital',
          address: 'Cnr Fourways Boulevard & Witkoppen Road, Fourways',
          phone: '+27 11 875 1000',
          specialties: ['24/7 Emergency', 'Trauma Unit', 'Women\'s Services', 'Mental Health Support'],
          distance: '15km from Sandton',
          notes: 'Well-equipped private hospital with specialized women\'s health services'
        },
        {
          name: 'Charlotte Maxeke Johannesburg Academic Hospital',
          address: '17 Jubilee Road, Parktown, Johannesburg',
          phone: '+27 11 488 4911',
          specialties: ['24/7 Emergency', 'Public Hospital', 'Trauma Center', 'Sexual Assault Center'],
          distance: '8km from Sandton',
          notes: 'Major public hospital with dedicated sexual assault response unit'
        }
      ],
      pharmacies: [
        {
          name: 'Clicks Pharmacy Sandton City',
          address: 'Sandton City Shopping Centre, Sandton',
          phone: '+27 11 883 9720',
          hours: '24/7',
          services: ['Prescription Medicine', 'Emergency Contraception', 'Female Health Products', 'Travel Health Supplies']
        },
        {
          name: 'Dis-Chem Pharmacy Sandton',
          address: 'Nelson Mandela Square, Sandton',
          phone: '+27 11 217 0600',
          hours: '24/7',
          services: ['Prescription Medicine', 'Health Screening', 'Emergency Medication', 'Travel Clinic']
        },
        {
          name: 'Clicks Pharmacy Rosebank',
          address: 'The Zone @ Rosebank, Bath Avenue, Rosebank',
          phone: '+27 11 447 5180',
          hours: '8:00 AM - 10:00 PM',
          services: ['Prescription Medicine', 'Women\'s Health Products', 'Emergency Supplies', 'Basic Health Screening']
        },
        {
          name: 'Netcare Medicross Melrose Arch',
          address: 'Shop 11, The High Street, Melrose Arch',
          phone: '+27 11 684 0300',
          hours: '7:00 AM - 7:00 PM',
          services: ['General Practice', 'Women\'s Health', 'Emergency Care', 'Travel Medicine']
        }
      ],
      healthRisks: [
        'High altitude (1,753m above sea level) may cause mild altitude sickness',
        'Intense UV exposure due to high altitude - very high SPF sunscreen essential',
        'Air pollution levels can affect respiratory health, especially with existing conditions',
        'Stress and anxiety from security concerns can significantly impact mental health',
        'Risk of injury from violent crime requires access to trauma care'
      ],
      recommendations: [
        'Carry comprehensive travel insurance with medical evacuation coverage (essential)',
        'Bring prescription medications in original packaging with doctor\'s letter',
        'Drink bottled water to avoid stomach issues - tap water generally safe but can cause mild issues',
        'Use very high SPF sunscreen (50+) and UV protection due to high altitude',
        'Consider counseling support if experiencing anxiety about safety before or during travel',
        'Keep emergency contact numbers for hospitals and mental health support readily available',
        'Consider bringing basic first aid supplies and any comfort medications'
      ]
    },

    travelAdvisory: {
      level: 3,
      title: 'Reconsider Travel - High Crime Risk',
      lastUpdated: 'January 2025',
      soloFemaleSpecific: [
        'Exercise extreme caution - not recommended for inexperienced solo female travelers',
        'Johannesburg ranks #86 safest in South Africa for solo female travelers (very low ranking)',
        'Crime statistics show 264% increase in kidnapping prevalence over past decade',
        '51% of South African kidnapping incidents occur in Gauteng Province (Johannesburg area)',
        'Sexual assault cases have significantly increased in recent years with "sky-rocketing" incidents',
        'Solo female travelers should stay exclusively in Sandton, Rosebank, or Melrose Arch areas',
        'Return to accommodation before sunset every day - never venture out alone after dark',
        'Use only pre-arranged transportation or Uber/Bolt - avoid all public transport completely',
        'High risk of being targeted for violent crime, sexual assault, and kidnapping as foreign female',
        'Local women report feeling unsafe and use extensive safety precautions daily'
      ],
      governmentAdvisories: [
        {
          country: 'United States',
          level: 'Level 3: Reconsider Travel',
          details: 'High crime rates, including violent crimes such as armed robbery, assault, murder, and rape. Criminals often target tourists.',
          link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html'
        },
        {
          country: 'United Kingdom',
          level: 'High Crime Risk',
          details: 'Serious crime including mugging, armed robbery, and rape in major urban areas. Particular risks for solo female travelers.',
          link: 'https://www.gov.uk/foreign-travel-advice/south-africa'
        },
        {
          country: 'Canada',
          level: 'Exercise High Degree of Caution',
          details: 'High crime rate and incidents of violent crime including murder, assault, robbery, and sexual assault. Women traveling alone face additional risks.',
          link: 'https://travel.gc.ca/destinations/south-africa'
        },
        {
          country: 'Australia',
          level: 'Reconsider Your Need to Travel',
          details: 'High levels of serious crime, including violent crime such as rape, murder, and armed robbery. Solo female travelers at particular risk.',
          link: 'https://www.smartraveller.gov.au/destinations/africa/south-africa'
        },
        {
          country: 'France',
          level: 'High Vigilance Required',
          details: 'High risk of violent aggression, particularly in townships like Soweto. Women should exercise extreme caution.',
          link: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/afrique-du-sud/'
        }
      ]
    },

    costAndComfort: {
      dailyBudget: {
        range: '$135 - $290 USD / day',
        description: 'Mid-range budget recommended minimum for safe solo female travel with proper security measures.',
        tip: 'Budget travel strongly NOT recommended for solo females due to safety concerns. Luxury range ($400-1000/day) provides maximum security and peace of mind.'
      },
      budgetBreakdown: {
        budget: {
          accommodation: '$15-30/night (hostel dorms with security)',
          food: '$8-15/day (local food, mall food courts)',
          transport: '$10-20/day (Uber/Bolt only for safety - essential)',
          activities: '$10-20/day (museums, walking tours with guides)',
          total: '$43-85/day',
          note: 'Budget travel strongly NOT recommended for solo females due to safety concerns. Minimum mid-range budget advised.'
        },
        midRange: {
          accommodation: '$60-150/night (safe hotels in Sandton/Rosebank with security)',
          food: '$25-45/day (restaurants in safe areas, hotel dining)',
          transport: '$20-35/day (Uber/Bolt, pre-arranged transfers)',
          activities: '$30-60/day (guided tours, attractions with transport)',
          total: '$135-290/day',
          note: 'RECOMMENDED minimum budget for safe solo female travel with proper security measures'
        },
        luxury: {
          accommodation: '$200-600/night (5-star hotels with maximum security)',
          food: '$60-120/day (fine dining, hotel restaurants, room service)',
          transport: '$40-80/day (private transfers, premium services with security)',
          activities: '$100-200/day (private tours, luxury experiences with guides)',
          total: '$400-1000/day',
          note: 'Safest option with maximum security, comfort, and peace of mind for solo female travelers'
        }
      },
      currency: {
        name: 'South African Rand',
        code: 'ZAR',
        exchangeRate: {
          usd: 0.0564,
          eur: 0.0480,
          gbp: 0.0419
        },
        tips: [
          'Cash still widely used - withdraw only from secure ATMs inside malls or hotels',
          'Credit cards accepted at most hotels and restaurants in safe areas like Sandton',
          'Keep multiple payment methods (cash, cards) in separate secure locations',
          'Never display large amounts of cash in public - use money belts or hidden pockets',
          'Tipping customary: 10-15% at restaurants, R10-20 for hotel services',
          'Keep emergency cash separate for safety situations and transport',
          'Use contactless payments when possible to avoid displaying cash or cards'
        ]
      },
      accommodation: [
        {
          type: 'Luxury Hotels (Sandton/Melrose Arch)',
          avgCost: '$200-600/night',
          safetyNote: 'Safest option with maximum security, 24/7 staff, and gated properties',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels (Safe Areas)',
          avgCost: '$60-150/night',
          safetyNote: 'Recommended minimum for solo females - secure neighborhoods with good amenities',
          safetyLevel: 'high'
        },
        {
          type: 'Female-only Hostels',
          avgCost: '$15-30/night',
          safetyNote: 'Budget option with female dorms and security, but requires extra vigilance',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Accommodations',
          avgCost: '$10-25/night',
          safetyNote: 'NOT recommended for solo female travelers due to safety concerns',
          safetyLevel: 'low'
        }
      ],
      transport: [
        {
          method: 'Uber/Bolt (Women Only Service)',
          cost: '$5-15/ride',
          safetyDescription: 'Safest option with female drivers and SOS button. Essential for solo female travelers.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Bolt (Regular Service)',
          cost: '$3-12/ride',
          safetyDescription: 'Generally safe but less secure than women-only service. Use tracking features.',
          safetyLevel: 'medium'
        },
        {
          method: 'Gautrain',
          cost: '$8-15/trip',
          safetyDescription: 'Airport-city train service, relatively safe but expensive. Use during daylight.',
          safetyLevel: 'medium'
        },
        {
          method: 'Hotel/Private Transfers',
          cost: '$20-40/trip',
          safetyDescription: 'Most secure option with pre-arranged, vetted drivers. Recommended for airport transfers.',
          safetyLevel: 'high'
        },
        {
          method: 'Public Minibus Taxis',
          cost: '$1-3/ride',
          safetyDescription: 'AVOID - High risk of harassment, violence, and accidents. Not recommended for tourists.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'STRONGLY DISCOURAGED - Even short distances pose significant safety risks.',
          safetyLevel: 'low'
        }
      ],
      seasonalCosts: {
        peak: {
          season: 'December-February (Summer)',
          costIncrease: '20-35%',
          pros: ['Warm weather ideal for sightseeing', 'Longest daylight hours until 7:30 PM (crucial for safety)', 'Vibrant atmosphere'],
          cons: ['Significantly higher accommodation prices', 'Crowded tourist areas', 'Afternoon thunderstorms common']
        },
        shoulder: {
          season: 'March-May, September-November',
          costIncrease: '10-20%',
          pros: ['Mild pleasant weather', 'Better accommodation prices', 'Less crowded attractions'],
          cons: ['Variable weather conditions', 'Decreasing daylight hours affecting safe exploration time', 'Some seasonal closures']
        },
        low: {
          season: 'June-August (Winter)',
          costIncrease: '0-5%',
          pros: ['Lowest accommodation prices', 'Clear sunny skies during day', 'Dry weather conditions'],
          cons: ['Very short daylight hours (dark by 5:45 PM) - major safety concern', 'Cold mornings and evenings', 'Limited safe exploration time']
        }
      },
      comfortFactors: {
        transportation: 'Private transport essential - budget minimum $20/day for safety',
        accommodation: 'Safe neighborhood accommodation non-negotiable - budget minimum $60/night',
        dining: 'Stick to hotel restaurants and malls in safe areas for comfort and safety',
        activities: 'Guided tours recommended for safety - budget extra for proper guides'
      },
      budgetTips: [
        'Higher spending directly correlates to better safety for solo female travelers in Johannesburg',
        'Budget minimum $135/day for basic safety measures - anything less poses significant risks',
        'Luxury hotels ($200-600/night) provide maximum security with 24/7 staff and gated properties',
        'Private transport ($20-40/trip) is essential - never compromise on transportation safety',
        'Safe neighborhoods cost more but are non-negotiable for solo female travelers',
        'Emergency fund essential - keep extra money for safety situations and quick escapes',
        'What you spend on security and safe areas can literally save your life'
      ],
      currencyExchangeTips: [
        'Official currency: South African Rand (ZAR) - Current rates: 17.73 ZAR = 1 USD, 20.83 ZAR = 1 EUR, 23.86 ZAR = 1 GBP',
        'Use ATMs in secure locations only (Sandton City, Mall of Africa) - best rates but check for skimming devices',
        'Hotel currency exchange offers maximum security but worst rates - worth the premium for solo female safety',
        'Airport exchange at OR Tambo convenient but higher rates - use only official counters, avoid street changers completely',
        'Bank branches (Standard Bank, FNB, ABSA) offer good rates but require hotel transport - limited business hours',
        'Never exchange money on the street or with unofficial dealers - extremely dangerous for solo female travelers',
        'Withdraw smaller amounts frequently for safety (R2000-3000 per trip) - avoid displaying large amounts of cash',
        'Use credit cards where possible to minimize cash handling - widely accepted in safe areas like Sandton',
        'Keep emergency cash in hotel safe as backup - split money into multiple secure hiding places',
        'Budget extra 10-15% for tips as tipping culture important - have backup payment methods for theft situations',
        'Check all ATMs for skimming devices before use - cover PIN and use only machines inside malls or hotels',
        'Keep exchange receipts as proof of legal currency exchange - never count money in public spaces'
      ]
    },

    weatherAndBestTime: {
      climate: 'Subtropical highland (high altitude affects weather patterns)',
      altitude: '1,753 meters (5,751 feet) above sea level',
      seasons: {
        summer: {
          months: 'December-February',
          temperature: '15-26°C (59-79°F)',
          conditions: 'Hot sunny days, afternoon thunderstorms, high humidity, longer daylight hours',
          safetyNote: 'BEST for solo female travelers - extended daylight until 7:30 PM provides maximum safe exploration time'
        },
        autumn: {
          months: 'March-May',
          temperature: '10-23°C (50-73°F)',
          conditions: 'Mild temperatures, clear skies, low humidity, decreasing daylight hours',
          safetyNote: 'Good weather but shorter days require earlier returns to accommodation by 6:30 PM'
        },
        winter: {
          months: 'June-August',
          temperature: '2-19°C (36-66°F)',
          conditions: 'Dry sunny days, very cold mornings/nights, frost possible, shortest daylight',
          safetyNote: 'CHALLENGING for solo females - darkness by 5:45 PM severely limits safe sightseeing hours'
        },
        spring: {
          months: 'September-November',
          temperature: '12-25°C (54-77°F)',
          conditions: 'Pleasant temperatures, occasional spring rains, increasing daylight hours, jacaranda blooms',
          safetyNote: 'Improving daylight hours make this safer than winter, but still limited compared to summer'
        }
      },
      bestTimeForSoloFemales: {
        optimal: 'December-February (Summer)',
        reasoning: 'Longest daylight hours (sunrise 5:30 AM, sunset 7:30 PM) provide maximum safe exploration time for solo female travelers. Despite afternoon thunderstorms, the extended daylight significantly enhances safety for sightseeing and movement between locations.',
        avoid: 'June-August (Winter)',
        avoidReason: 'Darkness falls by 5:45 PM, severely limiting safe sightseeing hours and forcing very early returns to accommodation. Cold weather also makes extended outdoor activities uncomfortable.'
      },
      uvIndex: 'Very high (8-11) due to altitude and latitude - maximum sun protection essential',
      clothingRecommendations: {
        summer: 'Light breathable fabrics, sun hat, high SPF sunscreen, light rain jacket for storms',
        winter: 'Warm layers for cold mornings/nights, light clothing for warm midday, sun protection still essential'
      }
    },

    governmentAdvisory: {
      level: 'Exercise Increased Caution - Level 2',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution in South Africa due to crime and civil unrest. Some areas have increased risk including violent crime such as armed robbery, carjacking, mugging, and "smash-and-grab" attacks on vehicles.',
      reason: 'High crime levels throughout South Africa, particularly in major cities like Johannesburg. Violent crimes including armed robbery, rape, and carjacking occur frequently, especially targeting tourists and foreigners.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html',
      soloTravelerAdvice: [
        'Solo female travelers should exercise extreme caution and avoid certain areas entirely',
        'Stay only in secure accommodations in Sandton, Rosebank, or other well-monitored areas',
        'Never walk alone day or night - use only registered taxis or ride-sharing services',
        'Book organized tours through reputable operators rather than exploring independently',
        'Keep valuable items and electronics out of sight to avoid "grab and run" incidents',
        'Avoid displaying cash, jewelry, or expensive accessories in public areas',
        'Register with your embassy and maintain regular contact during your stay',
        'Have comprehensive travel insurance and emergency evacuation coverage'
      ],
      additionalConsiderations: [
        'High violent crime rates: Armed robbery, carjacking, and assault particularly targeting tourists',
        'Civil unrest: Protests and strikes can occur suddenly and escalate quickly',
        'Gender-based violence: High rates of sexual assault and harassment of women',
        'Economic inequality: Visible wealth disparity can make tourists targets for crime',
        'Infrastructure issues: Load-shedding (power outages) can affect security systems',
        'Health concerns: HIV/AIDS prevalence, malaria in some regions, water quality issues'
      ],
      embassyContact: {
        name: 'U.S. Consulate General Johannesburg',
        phone: '+27 11 290 3000',
        emergency: '+27 11 290 3000',
        address: '1 Sandton Drive, Sandton 2196, Johannesburg'
      }
    },
  culturalSensitivity: {
    culturalDos: [
      'Embrace Ubuntu philosophy "I am because we are" - show compassion, respect, and community spirit toward others',
      'Show deep respect for elders using appropriate honorifics and formal greetings - this is fundamental in South African culture',
      'Ask permission before photographing people especially in townships - consent and respect are crucial for cultural sensitivity',
      'Participate respectfully in braai (barbecue) culture by contributing food or drinks - it\'s a key social bonding tradition',
      'Tip generously (15-20%) for all services including restaurants, taxis, and guides - tipping culture is very important'
    ],
    culturalDonts: [
      'Don\'t discuss apartheid, race, or politics casually unless locals initiate - these remain sensitive subjects for many',
      'Don\'t refuse hospitality or invitations abruptly - South Africans value warm hospitality and may take offense',
      'Don\'t refer to people by skin color or make assumptions about race - avoid racial terminology and generalizations',
      'Don\'t ignore cultural diversity - South Africa has 11 official languages and many distinct cultural groups',
      'Don\'t be judgmental about different customs or lifestyles - approach cultural differences with curiosity and respect'
    ]
  },
  youtubeVideo: {
    videoId: "CSyM7QGNr4s"
  }
};

export default johannesburg;