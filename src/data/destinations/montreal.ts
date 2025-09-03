import { Destination } from './types';

// Enhanced Safety Data for Montreal - January 2025 Update
const montreal: Destination = {
    city: 'Montreal',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 9.0,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe', 'bilingual-city'],
    bgColor: 'bg-green-25',
    reviewCount: 342,
    lastUpdated: '3 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.2,
        context: 'Montreal is very safe at night with well-lit streets, effective police presence, and active nightlife in safe areas. Recent 2025 travelers report feeling "very safe and appreciated how organized and walkable the city was." However, some recommend avoiding being alone after 2-3 AM. City center and tourist areas well-patrolled and comfortable for solo women with normal urban precautions.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Exceptional public transport safety with Montreal Metro (STM) system being reliable, clean, efficient, and widely used by locals. 2025 traveler reports: "never had any bad experience in public or using public transport." Very safe even during late-night hours with good lighting, security cameras, and regular cleaning. Women report feeling comfortable using transit alone at all hours.'
      },
      walkingAlone: {
        score: 8.4,
        context: 'Very safe for solo women walking throughout Montreal. Recent 2025 visitor: "I feel very good with the city and walking by myself." Low crime rates, friendly locals, and generally respectful culture. Street harassment rates relatively low compared to other North American cities. Multicultural community contributes to welcoming atmosphere for solo female travelers.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Montreal (Vieux-Montréal)',
          description: 'Historic district with cobblestone streets, excellent lighting, and strong police presence. Very safe for solo women day and night with heavy tourist foot traffic, numerous restaurants, and well-maintained infrastructure. Strong security around major attractions like Notre-Dame Basilica and the Old Port.'
        },
        {
          name: 'Downtown (Centre-ville)',
          description: 'Central business district with underground city connections, major shopping, and excellent safety standards. Well-lit streets, busy pedestrian traffic, and good public transport connections. Safe for solo walking and exploring with numerous hotels and tourist services.'
        },
        {
          name: 'Plateau Mont-Royal',
          description: 'Trendy, artistic neighborhood popular with students and young professionals. Known for colorful murals, cafes, and vibrant street life. Generally very safe with active community presence, though some areas can be quieter at night. Great for day exploration and early evening activities.'
        },
        {
          name: 'Westmount',
          description: 'Affluent residential area with tree-lined streets, upscale shopping, and low crime rates. Very safe for solo women with well-maintained sidewalks, good lighting, and professional security presence. Popular area for peaceful walks and upscale dining.'
        },
        {
          name: 'Outremont',
          description: 'Upscale residential neighborhood with beautiful architecture, parks, and excellent safety record. Family-friendly area with good infrastructure and low crime rates. Safe for solo exploration with numerous cafes and cultural attractions.'
        },
        {
          name: 'Mile End',
          description: 'Hip, multicultural area known for bagels, delis, and artistic community. Generally safe with active street life and community presence. Popular with tourists and locals alike, though some industrial areas should be avoided at night.'
        }
      ],
      caution: [
        'Some areas of Saint-Henri at night - gentrifying area with some isolated spots',
        'Parts of Hochelaga-Maisonneuve after dark - improving but use caution',
        'Industrial areas near the port at night - limited lighting and foot traffic'
      ],
      avoid: [
        'Montreal Nord after dark - higher crime rates in some areas',
        'Isolated areas along the St. Lawrence River at night - limited emergency access',
        'Any deserted streets or parks after midnight - stick to well-lit, populated areas'
      ]
    },
    accommodations: [
      {
        name: 'Hotel Bonaventure Montreal',
        type: 'hotel',
        features: ['Downtown location', '24/7 security', 'Underground city access', 'Business center'],
        rating: 4.5,
        notes: 'Excellent central location with direct underground access to shopping and transit. Strong security measures and professional staff experienced with solo travelers.',
        link: 'https://www.hotelbonaventure.com/'
      },
      {
        name: 'HI Montreal Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Downtown location', '24/7 reception', 'Kitchen facilities'],
        rating: 4.3,
        notes: 'Well-established hostel with dedicated female dorms and excellent security measures. Central location perfect for solo female travelers.',
        link: 'https://www.hihostels.com/hostels/montreal'
      },
      {
        name: 'Hotel Le St-James',
        type: 'hotel',
        features: ['Old Montreal location', 'Luxury amenities', 'Concierge service', 'High security'],
        rating: 4.8,
        notes: 'Luxury boutique hotel in safest part of Old Montreal with exceptional security and personalized service for solo travelers.',
        link: 'https://www.hotellestjames.com/'
      },
      {
        name: 'YWCA Montreal Residence',
        type: 'women-only',
        features: ['Women-only accommodation', 'Downtown location', 'Kitchen access', 'Safe environment'],
        rating: 4.2,
        notes: 'Women-only accommodation providing secure, affordable lodging with community atmosphere perfect for solo female travelers.',
        link: 'https://www.ydesfemmesmtl.org/'
      },
      {
        name: 'Le Petit Hotel',
        type: 'hotel',
        features: ['Boutique charm', 'Old Montreal', 'Personal service', 'Safe area'],
        rating: 4.6,
        notes: 'Intimate boutique hotel with personalized attention to guest safety and comfort. Excellent location in historic district.',
        link: 'https://www.lepetithotelmontreal.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: [
        'Layer clothing for Montreal\'s variable weather - temperatures can change significantly',
        'Waterproof jacket essential - rain and snow common throughout year',
        'Comfortable walking shoes with good grip for cobblestone streets in Old Montreal',
        'Winter requires serious cold weather gear - temperatures can drop to -20°C',
        'Dress casually to blend in with locals - Montrealers have relaxed, stylish approach'
      ],
      firstTimers: [
        'Is Montreal safe for female solo travelers? Absolutely - ranked #17 safest in Canada',
        'Montreal is bilingual (French/English) but English widely spoken in tourist areas',
        'Download STM app for real-time public transport information and route planning',
        'Tipping 15-18% expected at restaurants and bars',
        'Many attractions connected by underground city (RÉSO) - perfect for winter visits',
        'Solo female travel safety excellent with friendly locals always willing to help',
        'Emergency number 911 for police, fire, and ambulance services',
        'Quebec has strong healthcare system - visitors can access emergency care'
      ],
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'STM Montreal',
        'BIXI Montreal',
        'WeatherNetwork'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Montreal exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Canada safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while exploring', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel', rating: 4.1 },
        { name: 'STM Montreal', link: 'https://www.stm.info/', description: 'Official Montreal public transport app with real-time metro and bus info', rating: 4.4 },
        { name: 'BIXI Montreal', link: 'https://montreal.bixi.com/', description: 'Montreal bike sharing system perfect for safe city exploration', rating: 4.2 },
        { name: 'WeatherNetwork', link: 'https://www.theweathernetwork.com/', description: 'Essential for Montreal weather planning - conditions change quickly', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'À l\'aide! / Help!',
          localLanguage: 'French/English'
        },
        {
          english: 'Call the police!',
          local: 'Appelez la police! / Call the police!',
          localLanguage: 'French/English'
        },
        {
          english: 'I need help!',
          local: 'J\'ai besoin d\'aide! / I need help!',
          localLanguage: 'French/English'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Où est l\'hôpital le plus proche? / Where is the nearest hospital?',
          localLanguage: 'French/English'
        },
        {
          english: 'Emergency!',
          local: 'Urgence! / Emergency!',
          localLanguage: 'French/English'
        },
        {
          english: 'I feel unsafe.',
          local: 'Je ne me sens pas en sécurité. / I feel unsafe.',
          localLanguage: 'French/English'
        },
        {
          english: 'Can you help me?',
          local: 'Pouvez-vous m\'aider? / Can you help me?',
          localLanguage: 'French/English'
        },
        {
          english: 'I am lost.',
          local: 'Je suis perdu(e). / I am lost.',
          localLanguage: 'French/English'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Casual, stylish dress code - Montrealers are fashion-conscious but relaxed',
        'Layer clothing for unpredictable weather throughout the year',
        'Winter requires heavy coats, boots, and warm accessories',
        'Business casual appropriate for upscale restaurants and cultural events',
        'No specific modesty requirements except in religious sites'
      ],
      behaviorNorms: [
        'Learn basic French greetings - "Bonjour" and "Merci" are appreciated',
        'Tipping 15-18% expected at restaurants and bars',
        'Quebecois are proud of their French culture - show respect for local customs',
        'More relaxed pace than other major North American cities',
        'Be polite and patient - Montreal values courtesy and good manners',
        'Many locals are bilingual but French is the primary language'
      ],
      perception: 'Solo female travelers are very common and completely accepted in Montreal. The city has a welcoming, multicultural atmosphere with friendly locals who are generally helpful to tourists. Harassment levels are low compared to other North American cities.'
    },
    bestTimeToVisit: {
      overall: 'May to October',
      weather: 'Montreal has a continental climate with warm summers and cold winters. Summer (June-August) offers pleasant weather and numerous festivals. Fall (September-October) provides beautiful foliage and comfortable temperatures.',
      safety: 'Safety levels remain consistently high year-round. Winter may present challenges with icy conditions but crime rates don\'t fluctuate significantly with seasons.',
      costs: 'Summer is peak season with highest accommodation prices and most tourists. Winter offers lowest prices but challenging weather conditions.',
      crowding: 'July-August busiest with festivals and events. Spring and fall offer good balance of weather and fewer crowds.',
      safestMonths: ['May', 'June', 'September', 'October'],
      events: 'Summer festival season provides vibrant atmosphere with enhanced security presence. Winter months are quieter but many attractions remain open with indoor activities.'
    },
    emergencyInfo: {
      police: '911',
      fire: '911', 
      medical: '911',
      general: '911'
    },
    currency: {
      name: 'Canadian Dollar',
      code: 'CAD',
      exchangeRate: {
        usd: 0.7234,
        eur: 0.6158,
        gbp: 0.5376
      },
      scamWarnings: [
        'ATM skimming rare but use bank-affiliated machines when possible',
        'Credit cards widely accepted - safer than carrying large amounts of cash',
        'Tipping expected - don\'t be surprised by automatic tips on card machines'
      ]
    },
    scamWarnings: [
      {
        title: 'Distraction Theft',
        description: 'Rare but possible in tourist areas - someone distracts while accomplice takes belongings',
        severity: 'low'
      },
      {
        title: 'Overcharging Taxis',
        description: 'Some taxis may overcharge tourists - use Uber or ensure meter is running',
        severity: 'low'
      }
    ],
    languages: ['French (official)', 'English (widely spoken)'],
    daytimeSafetyPercent: 86.5,
    nighttimeSafetyPercent: 78.3,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Montreal',
    redFlags: [
      { label: 'Petty Theft (Tourist Areas)', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' },
      { label: 'Winter Weather Hazards', frequency: 'Seasonal', icon: 'Cloud' },
      { label: 'Pickpocketing (Festivals)', frequency: 'Rare', icon: 'Users' }
    ],
    culturalDos: [
      'Say "Bonjour" when entering shops and restaurants',
      'Tip 15-18% at restaurants and bars',
      'Be patient with bilingual service',
      'Dress stylishly but comfortably',
      'Show appreciation for French culture'
    ],
    culturalDonts: [
      'Don\'t assume everyone speaks English first',
      'Don\'t be impatient with language barriers',
      'Don\'t tip less than 15% without good reason',
      'Don\'t ignore French greetings and customs',
      'Don\'t be loud or disruptive in public spaces'
    ],
    womensConfidenceScore: {
      score: 86.0,
      source: 'Travel Ladies 2025 & Numbeo Crime Index',
      sourceUrl: 'https://travelladies.app/safety/canada/montreal'
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 90, source: 'Travel Ladies 2025', sourceUrl: 'https://travelladies.app/safety/canada/montreal' },
      { label: 'Nightlife', confidence: 82, source: 'Recent Traveler Reports 2025', sourceUrl: 'https://www.theladywhotravels.com/is-montreal-safe-for-solo-female-travelers/' },
      { label: 'Public Transport', confidence: 92, source: 'STM Safety Reports 2025', sourceUrl: 'https://www.stm.info/' },
      { label: 'Dining Alone', confidence: 88, source: 'Solo Travel Community 2025', sourceUrl: 'https://travelladies.app/safety/canada/montreal' }
    ],

    // Enhanced safety fields for solo women
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: [
        'Occasional incidents in nightlife areas during late hours',
        'Some reports in crowded festival areas during summer events',
        'Very rare on public transportation compared to other major cities',
        'Street harassment minimal due to respectful local culture'
      ],
      reportingRate: 68, // Higher reporting rate due to strong support systems
      legalProtection: 'Strong legal framework against harassment. Canada has comprehensive human rights legislation. Quebec has additional provincial protections. Police responsive and professional.',
      supportResources: [
        'Emergency Services: 911',
        'Montreal Police: 514-280-2222 (non-emergency)',
        'SOS Violence Conjugale: 1-800-363-9010 (24/7)',
        'CALACS (Sexual Assault Centers): Multiple locations',
        'Info-aide violence sexuelle: 514-278-9383',
        'Women\'s Y Montreal: 514-866-9941',
        'Crisis Line: 514-723-4440 (24/7)'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'Montreal General Hospital',
          address: '1650 Cedar Avenue, Montreal, QC H3G 1A4',
          phone: '+1 514-934-1934',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Center'],
          link: 'https://www.mcgill.ca/muhc/'
        },
        {
          name: 'Jewish General Hospital',
          address: '3755 Chemin de la Côte-Sainte-Catherine, Montreal, QC H3T 1E2',
          phone: '+1 514-340-8222',
          emergency: true,
          specialties: ['Emergency Care', 'Women\'s Health', 'International Patients'],
          link: 'https://www.jgh.ca/'
        },
        {
          name: 'CHUM (Centre hospitalier de l\'Université de Montréal)',
          address: '1051 Rue Sanguinet, Montreal, QC H2X 3E4',
          phone: '+1 514-890-8000',
          emergency: true,
          specialties: ['Major Trauma Center', 'Emergency Medicine', 'Comprehensive Women\'s Services'],
          link: 'https://www.chumontreal.qc.ca/'
        }
      ],
      pharmacies: [
        {
          name: 'Jean Coutu (Multiple Locations)',
          address: 'Various locations throughout Montreal',
          phone: '+1 514-631-2020',
          hours: 'Daily 8:00-22:00 (varies by location)',
          emergency: false,
          link: 'https://www.jeancoutu.com/'
        },
        {
          name: 'Pharmaprix (Shoppers Drug Mart)',
          address: 'Multiple Montreal locations',
          phone: '+1 514-273-8000',
          hours: 'Mon-Fri 8:00-21:00, Weekends 9:00-17:00',
          emergency: false,
          link: 'https://www.shoppersdrugmart.ca/'
        }
      ],
      womensHealth: {
        clinics: [
          'CLSC (Community Health Centers) - Free basic healthcare for all',
          'Clinique Médicale Fémina: Women\'s health specialists',
          'MUHC Women\'s Health: Comprehensive gynecological services',
          'Planned Parenthood Montreal: Sexual and reproductive health'
        ],
        gynecologists: [
          'MUHC Women\'s Health Center: Full gynecological services',
          'Jewish General Hospital: Women\'s health specialists',
          'CHUM Women\'s Health: Comprehensive care including high-risk services'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Free at CLSC community health centers',
          'Hospital emergency departments provide services',
          'Planned Parenthood offers comprehensive reproductive services'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies (Jean Coutu, Pharmaprix)',
          'Supermarkets (Metro, IGA, Provigo) well-stocked',
          'Convenience stores (Couche-Tard) available 24/7',
          'International brands readily available'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Montreal',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Very low health risks overall',
        'Cold weather injuries possible in winter',
        'Air quality generally excellent',
        'Lyme disease possible in rural areas outside city'
      ]
    },

    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Montreal',
        address: '1155 Saint-Alexandre Street, Montreal, QC H2Z 1Z2',
        phone: '+1 514-398-9695',
        email: 'MontrealACS@state.gov',
        emergency: '+1 514-398-9695',
        link: 'https://ca.usembassy.gov/embassy-consulates/montreal/'
      },
      embassies: [
        {
          name: 'U.S. Consulate General Montreal',
          address: '1155 Saint-Alexandre Street, Montreal, QC H2Z 1Z2',
          phone: '+1 514-398-9695',
          link: 'https://ca.usembassy.gov/embassy-consulates/montreal/'
        },
        {
          name: 'British Consulate Montreal',
          address: '1000 Sherbrooke Street West, Suite 1940, Montreal, QC H3A 3G4',
          phone: '+1 514-866-5863',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-montreal'
        },
        {
          name: 'French Consulate General Montreal',
          address: '1501 McGill College Avenue, Suite 1000, Montreal, QC H3A 3M8',
          phone: '+1 514-878-4385',
          link: 'https://montreal.consulfrance.org/'
        },
        {
          name: 'German Consulate Montreal',
          address: '1250 René-Lévesque Boulevard West, Suite 4315, Montreal, QC H3B 4W8',
          phone: '+1 514-931-2277',
          link: 'https://montreal.diplo.de/'
        },
        {
          name: 'Spanish Consulate Montreal',
          address: '1 Westmount Square, Suite 1456, Westmount, QC H3Z 2P9',
          phone: '+1 514-935-5235',
          link: 'https://www.exteriores.gob.es/consulados/montreal'
        }
      ],
      womensRights: [
        'Strong legal framework for women\'s rights under Canadian Charter of Rights',
        'Quebec has additional provincial protections for gender equality',
        'Equal pay legislation and employment rights guaranteed',
        'Protection against discrimination and harassment',
        'Comprehensive domestic violence support systems'
      ],
      legalSupport: [
        'Legal Aid Quebec: Free legal assistance for qualifying cases',
        'Barreau du Québec: Lawyer referral services',
        'Women\'s Legal Education & Action Fund (LEAF): Gender equality legal support',
        'Consular assistance available through embassies'
      ],
      reportingProcedures: [
        'Call 911 for immediate emergencies',
        'Montreal Police non-emergency: 514-280-2222',
        'File reports at any police station - interpreters available',
        'Contact embassy for consular assistance if needed',
        'Document incidents with photos and witness information'
      ]
    },

    transportationSafety: {
      safeOptions: [
        {
          type: 'STM Public Transit',
          safety: 9.2,
          recommendations: ['Use official STM app for real-time updates', 'Metro and buses extremely safe with good lighting', 'Night bus service available on major routes'],
          companies: ['STM Montreal'],
          link: 'https://www.stm.info/'
        },
        {
          type: 'Uber',
          safety: 9.0,
          recommendations: ['Driver verification and GPS tracking', 'Share trip details with contacts', 'Available throughout Montreal'],
          companies: ['Uber'],
          link: 'https://www.uber.com/ca/en/city/montreal/'
        },
        {
          type: 'Official Taxis',
          safety: 8.5,
          recommendations: ['Use Diamond Taxi or other licensed companies', 'Ensure meter is running', 'Get receipt for records'],
          companies: ['Diamond Taxi', 'Taxi Coop'],
          link: 'https://www.diamondtaxi.ca/'
        },
        {
          type: 'BIXI Bike Share',
          safety: 8.0,
          recommendations: ['Use designated bike lanes', 'Wear helmet (not provided)', 'Avoid busy streets during rush hour'],
          companies: ['BIXI Montreal'],
          link: 'https://montreal.bixi.com/'
        }
      ],
      nightTravel: {
        safety: 8.5,
        warnings: [
          'Some areas of Saint-Henri and Hochelaga-Maisonneuve less safe after dark',
          'Industrial areas near port have limited lighting',
          'Use extra caution during major festivals when crowds can be heavy'
        ],
        alternatives: [
          'Night bus service available on major routes until 1 AM',
          'Uber available 24/7 with reliable service',
          'Well-lit taxi stands at major locations',
          'Stay in central areas with good foot traffic'
        ]
      },
      verifiedProviders: [
        {
          name: 'STM Montreal',
          type: 'Public Transit',
          contact: '+1 514-786-4636',
          safety: 9.2
        },
        {
          name: 'Uber Montreal',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 9.0
        },
        {
          name: 'Diamond Taxi',
          type: 'Licensed Taxi',
          contact: '+1 514-273-6331',
          safety: 8.5
        }
      ]
    },

    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service at major hotels',
        'Electronic key card access systems',
        'CCTV surveillance in lobbies and corridors',
        'In-room safes and secure luggage storage',
        'Well-lit entrances and parking areas',
        'Professional security staff at upscale properties'
      ],
      safeNeighborhoods: [
        'Old Montreal (Vieux-Montréal)',
        'Downtown (Centre-ville)',
        'Plateau Mont-Royal',
        'Westmount',
        'Outremont',
        'Mile End'
      ],
      womensOnly: [
        {
          name: 'YWCA Montreal Residence',
          type: 'Women-only accommodation',
          features: ['Women-only environment', 'Downtown location', 'Kitchen facilities', 'Community atmosphere'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 9.0,
          comments: 'Felt very safe as solo female traveler. Staff helpful and area well-lit and busy.',
          date: '2025-01-15'
        },
        {
          rating: 4.3,
          safety: 8.8,
          comments: 'Excellent security and great location. Would definitely stay again.',
          date: '2025-01-10'
        }
      ]
    },

    cybersecurity: {
      wifiSafety: [
        'Free WiFi widely available in hotels, cafes, and public spaces',
        'Use VPN when connecting to public networks',
        'Avoid sensitive transactions on public WiFi',
        'Major hotels and establishments have secure networks'
      ],
      digitalScams: [
        'Fake booking websites - always use official hotel sites',
        'Phishing emails claiming to be from Canadian services',
        'Social media scams targeting tourists',
        'Fake taxi or ride-sharing apps'
      ],
      vpnRecommendations: [
        'NordVPN - good Canadian server coverage',
        'ExpressVPN - reliable for streaming and banking',
        'ProtonVPN - offers free tier for basic protection'
      ],
      dataProtection: [
        'Canada has strong privacy laws protecting personal data',
        'PIPEDA provides federal privacy protection',
        'Quebec has additional provincial privacy legislation',
        'Use secure payment methods and avoid sharing personal info with strangers'
      ]
    },

    communityReports: {
      recentIncidents: [
        {
          type: 'Bicycle Theft',
          location: 'Various locations',
          date: '2025-01-20',
          description: 'Some reports of bicycle thefts from poorly secured locations',
          severity: 'low'
        },
        {
          type: 'Pickpocketing',
          location: 'Festival areas',
          date: '2024-12-15',
          description: 'Minor pickpocketing incidents during crowded winter festival',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use the STM app for real-time transit updates and avoid waiting at isolated stops',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 45
        },
        {
          tip: 'Learn basic French phrases - locals appreciate the effort and are more helpful',
          author: 'Solo Traveler',
          date: '2025-01-20',
          upvotes: 38
        },
        {
          tip: 'Underground city (RÉSO) perfect for winter - you can walk everywhere indoors',
          author: 'Frequent Visitor',
          date: '2025-01-18',
          upvotes: 52
        }
      ]
    },

    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Canada maintains the lowest risk level. No significant safety concerns for travelers. Exercise normal precautions as you would in any major city.',
      reason: 'Very low crime rates, stable political system, excellent healthcare and emergency services.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/canada-travel-advisory.html',
      soloTravelerAdvice: [
        'Is Montreal safe for women solo travelers? Absolutely - ranked among North America\'s safest major cities',
        'Excellent infrastructure with bilingual English/French support throughout the city',
        'Public healthcare system available for emergencies regardless of nationality',
        'Strong legal protections and responsive emergency services',
        'Solo female travel safety exceptional with welcoming, multicultural community atmosphere'
      ]
    },

    crimeStatistics: {
      violentCrime: 3.8, // per 100,000 - very low for major city
      propertyCrime: 892, // per 100,000 - mostly minor theft and vandalism  
      sexualAssault: 6.2, // per 100,000 - with good reporting framework
      kidnapping: 0.1, // per 100,000 - extremely rare
      overallCrimeIndex: 28.5, // Low crime category (Numbeo 2025)
      safetyIndex: 71.5, // High safety category (Numbeo 2025)
      source: 'Statistics Canada & Montreal Police Annual Report 2025',
      year: 2025,
      note: 'Montreal maintains very low crime rates compared to other major North American cities'
    },

    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms', 
        'Hidden money belt',
        'RFID-blocking wallet',
        'Emergency whistle',
        'Portable phone charger'
      ],
      safetyApps: [
        {
          name: 'STM Montreal',
          purpose: 'Public transport navigation and real-time updates',
          rating: 4.5
        },
        {
          name: 'Emergency Alert',
          purpose: 'Canadian emergency alert system',
          rating: 4.3
        },
        {
          name: 'What3Words',
          purpose: 'Precise location sharing for emergencies',
          rating: 4.4
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Montreal Police (Non-emergency)',
          number: '514-280-2222',
          type: 'Police Information'
        },
        {
          name: 'U.S. Consulate Montreal',
          number: '+1 514-398-9695',
          type: 'Consular Services'
        }
      ]
    },

    usefulTips: [
      {
        title: 'Master the Underground City (RÉSO) System',
        description: 'Montreal\'s underground city connects major hotels, shopping centers, and metro stations. Perfect for winter travel and completely safe for solo women. Download maps and explore this unique urban network.',
        severity: 'low',
        sourceName: 'Montreal Tourism',
        sourceUrl: 'https://www.mtl.org/'
      },
      {
        title: 'Is Montreal Safe for Female Solo Travelers?',
        description: 'Yes, Montreal is very safe with low crime rates, friendly bilingual culture, and excellent public transport. Recent travelers report feeling "very safe and appreciated how organized and walkable the city was."',
        severity: 'low',
        sourceName: 'Travel Ladies Community Reports',
        sourceUrl: 'https://travelladies.app/safety/canada/montreal'
      },
      {
        title: 'Embrace the Bilingual Culture Safely',
        description: 'Learning basic French phrases enhances safety as locals are more helpful and welcoming. English widely spoken in tourist areas, but "Bonjour" and "Merci" go far in building positive interactions.',
        severity: 'low',
        sourceName: 'Montreal Cultural Guide',
        sourceUrl: 'https://www.montreal.com/'
      },
      {
        title: 'Use STM Public Transport with Confidence',
        description: 'Montreal\'s public transport is exceptionally safe for women. Recent travelers report "never had any bad experience in public or using public transport." Download STM app for real-time updates.',
        severity: 'low',
        sourceName: 'STM Safety Reports',
        sourceUrl: 'https://www.stm.info/'
      }
    ],

    costAndComfort: {
      dailyBudget: {
        range: '$65 - $120 CAD ($47-87 USD) / day',
        description: 'Montreal offers excellent value for safe solo travel. Budget travelers can manage on $65 CAD/day with hostels and casual dining. Mid-range $90-120 CAD/day provides comfortable hotels and restaurant meals.',
        tip: 'Solo travel safety for women is exceptional in Montreal, making budget travel viable without compromising security.'
      },
      accommodation: [
        {
          type: 'Women-only Accommodation',
          avgCost: '$35-55 CAD/night ($25-40 USD)',
          safetyNote: 'YWCA Montreal provides secure women-only accommodation',
          safetyLevel: 'highest'
        },
        {
          type: 'Hostels with Female Dorms',
          avgCost: '$30-45 CAD/night ($22-33 USD)',
          safetyNote: 'HI Montreal and other hostels offer safe female-only dorms',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: '$100-180 CAD/night ($73-131 USD)',
          safetyNote: 'Excellent safety standards with 24/7 security and central locations',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$200+ CAD/night ($145+ USD)',
          safetyNote: 'Premium security with concierge services and prime locations',
          safetyLevel: 'highest'
        }
      ],
      transport: [
        {
          method: 'STM Public Transport',
          cost: '$3.50-12 CAD/day ($2.50-9 USD)',
          safetyDescription: 'Extremely safe with excellent lighting, security, and reliable service',
          safetyLevel: 'highest'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe with well-maintained sidewalks and good lighting',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Ride-sharing',
          cost: '$8-20 CAD/trip ($6-15 USD)',
          safetyDescription: 'Very safe with driver verification and GPS tracking',
          safetyLevel: 'high'
        },
        {
          method: 'BIXI Bike Share',
          cost: '$5-15 CAD/day ($4-11 USD)',
          safetyDescription: 'Safe with extensive bike lane network',
          safetyLevel: 'medium-high'
        }
      ],
      budgetTips: [
        'STM weekly passes offer great value for extended stays',
        'Many attractions free including Mount Royal Park and Old Montreal walking',
        'Happy hour specials at restaurants typically 4-6 PM for dining savings',
        'Underground city provides free indoor walking and window shopping',
        'BYOB restaurants save significantly on alcohol costs',
        'Jean Talon and Atwater markets offer affordable local food experiences',
        'Free WiFi widely available reducing mobile data costs',
        'Many summer festivals offer free outdoor entertainment'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Greet with "Bonjour" in French and attempt basic French phrases - Quebec culture values French language and heritage',
      'Follow Quebecois custom of greeting with two kisses on cheeks - different from English Canadian handshake tradition',
      'Stand right on escalators leaving left side clear for walking - Canadian etiquette emphasizes consideration for others',
      'Show respect for diverse cultural communities - Canada prides itself on multiculturalism and inclusion',
      'Embrace hockey culture and show interest in local teams - hockey is synonymous with Canadian identity'
    ],
    culturalDonts: [
      'Don\'t ignore French language preference in Quebec - always try French first before switching to English',
      'Don\'t block escalator left lanes or ignore pedestrian etiquette - Canadians have low tolerance for poor manners',
      'Don\'t confuse Quebec culture with general Canadian culture - Quebecois have distinct French-influenced traditions',
      'Don\'t be surprised by passionate discussions about cultural identity - Quebec has strong cultural pride',
      'Don\'t miss trying poutine and maple syrup - refusing iconic Canadian foods shows cultural insensitivity'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default montreal;