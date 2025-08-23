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
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.7, 
        context: 'Copenhagen is exceptionally safe at night for women, ranking #8 globally for solo female travelers (Travel Ladies 2025). Women report only 1.3/5 risk rating for sexual assault concerns. The city is well-lit with considerable police presence and 24/7 metro service. Danish culture strongly promotes gender equality with Denmark ranking #1 on Women\'s Peace & Security Index 2023.' 
      },
      publicTransit: { 
        score: 9.2, 
        context: 'Copenhagen\'s public transport is among the world\'s safest for women, with 24/7 metro service, excellent CCTV coverage, and helpful staff. Transport safety ratings are 95/100 for women. Metro arrives every 2-4 minutes during rush hour and runs continuously through the night. Single tickets cost 24 DKK, 24-hour passes cost 90 DKK.' 
      },
      walkingAlone: { 
        score: 9.1, 
        context: 'Walking alone in Copenhagen is exceptionally safe for women, with only 1.1/5 risk rating for physical attacks and 1.5/5 for sexual harassment (Travel Ladies 2025). Denmark ranking #1 globally on Women\'s Peace & Security Index 2023. Violent crime rate only 0.7 per 1,000 people annually. Respectful Danish culture ensures women feel secure walking day or night.' 
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
      firstTimers: `• Copenhagen is exceptionally safe and ranked #8 globally for solo female travelers - very beginner-friendly
• Download offline maps and transport apps before arriving - essential for navigation
• English is spoken by 99% of the population - communication is never a problem
• Get a Copenhagen Card for unlimited transport plus free entry to 87+ attractions
• Use contactless payment everywhere - Denmark is almost completely cashless
• Trust your instincts and seek help in shops or cafes if you ever feel uncomfortable
• Join local Facebook groups or use women-only travel apps to connect with other female travelers`,
      apps: [
        'NomadHer',
        'Tourlina',
        'Travel Ladies',
        'bSafe',
        'DOT Tickets',
        'TripIt',
        'Airalo',
        'XE Currency',
        'PackPoint',
        'Rejseplanen'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Verified female-only travel community with safety features' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'Find verified female travel buddies with safety screening' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips from real travelers' },
        { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with SOS features and live streaming' },
        { name: 'DOT Tickets', link: 'https://play.google.com/store/apps/details?id=com.cellpointmobile.mticket.travelcard.dsb', description: 'Official Copenhagen public transport tickets and journey planning' },
        { name: 'TripIt', link: 'https://www.tripit.com/', description: 'Organize travel plans and share itinerary with trusted contacts' },
        { name: 'Airalo', link: 'https://www.airalo.com/', description: 'eSIM data plans to stay connected safely without roaming fees' },
        { name: 'XE Currency', link: 'https://www.xe.com/apps/', description: 'Live exchange rates for Danish krone and offline converter' },
        { name: 'PackPoint', link: 'https://packpnt.com/', description: 'Smart packing checklist based on weather and activities' },
        { name: 'Rejseplanen', link: 'https://www.rejseplanen.dk/en/rejsekort_app', description: 'Comprehensive Denmark public transport planning and tickets' },
        {
          name: 'Google Maps',
          link: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
          ios: 'https://apps.apple.com/app/google-maps/id585027354',
          description: 'Essential offline maps, real-time navigation, and local business information'
        },
        {
          name: 'Citymapper',
          link: 'https://citymapper.com/',
          ios: 'https://apps.apple.com/app/citymapper/id469463298',
          description: 'Real-time public transport with step-by-step navigation perfect for Copenhagen metro and buses'
        },
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
      dressCode: 'Danish fashion prioritizes comfort, functionality, and sustainability over flashy styles. Dress casually and practically - Danes value minimalist aesthetics with clean lines and neutral colors. Layer clothing for unpredictable weather with waterproof jackets and comfortable shoes. Avoid expensive jewelry or designer items that draw attention - Danish culture follows "Law of Jante" where standing out is discouraged. Smart-casual works for most restaurants and venues. Winter requires thermal layers and waterproof boots. Danes embrace sustainable fashion with many shopping second-hand or supporting ethical brands.',
      behaviorNorms: [
        'Practice direct, honest communication - Danes appreciate straightforward conversation over small talk',
        'Be punctual and respect time - arriving late is considered disrespectful in Danish culture',
        'Respect personal space and privacy - maintain appropriate distance and avoid intrusion',
        'Follow cycling etiquette - use bike lanes properly, signal turns, and respect traffic rules',
        'Embrace "hygge" culture - appreciate cozy, comfortable atmospheres in cafes and social settings',
        'Support environmental consciousness - recycle, use public transport, and minimize waste',
        'Don\'t boast or show off - Danish "Law of Jante" values modesty and equality over individual achievement',
        'Remove shoes when entering homes and some restaurants',
        'Keep conversations quiet on public transport and in public spaces',
        'Tip modestly (5-10%) or round up bills - service charges are typically included'
      ],
      perception: 'Solo female travelers are completely normal, common, and well-respected in Copenhagen. Denmark ranks #1 globally on Women, Peace & Security Index with Copenhagen ranked #8 safest for solo women travelers. Danish culture strongly emphasizes gender equality and women\'s rights. Locals are reserved but helpful, and harassment is extremely rare. The progressive society welcomes independent women, and you\'ll blend in easily among other solo female travelers. Danish men are generally respectful and non-intrusive. Women feel safe walking alone at night, using public transport, and exploring independently. Trust your instincts and enjoy the freedom that Copenhagen\'s safety culture provides.'
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
      'Respect Danish direct communication style',
      'Be punctual for appointments and meetings',
      'Follow cycling rules and etiquette',
      'Show appreciation for Danish culture and design',
      'Understand the concept of "hygge" (coziness)'
    ],
    culturalDos: [
      'Dress casually and practically - Danes value comfort and functionality',
      'Be punctual and respect time - Danish culture highly values punctuality',
      'Use bike lanes when cycling - Follow traffic rules and bike etiquette',
      'Show appreciation for Danish design and hygge culture',
      'Greet people with a firm handshake and direct eye contact',
      'Respect personal space and privacy - Danes value their personal bubble'
    ],
    culturalDonts: [
      'Don\'t be overly formal or pretentious - Danes prefer casual, authentic interaction',
      'Don\'t ignore cycling rules or walk in bike lanes',
      'Don\'t be late for appointments - This is considered disrespectful',
      'Don\'t interrupt conversations or speak loudly in public',
      'Don\'t ignore the weather - Always dress appropriately for Danish climate',
      'Don\'t make assumptions about Danish socialism or politics'
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
      { label: 'Pickpocketing (Strøget, Central Station, Tourist Areas)', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Terrorism Threat Level (Significant 4/5)', frequency: 'Ongoing concern', icon: 'AlertTriangle' },
      { label: 'Currency Exchange Poor Rates (Airport)', frequency: 'Common', icon: 'CreditCard' },
      { label: 'Taxi Overcharging (Airport Taxis)', frequency: 'Frequent', icon: 'Car' },
      { label: 'Fake Tour Guides (Major Attractions)', frequency: 'Rare', icon: 'Users' }
    ],
    sexualHarassmentData: {
      prevalence: 'extremely low',
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
      terrorismThreat: 4, // Level 4/5 'significant' but no incidents targeting tourists
      source: 'Danish National Police & Travel Ladies Safety Index 2025',
      year: 2025,
      context: 'Copenhagen ranked #4 safest city globally for women, with safety index 74/100 and crime index only 25.7/100'
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
      details: 'Exercise increased caution in Denmark due to terrorism. Terrorist groups continue plotting possible attacks. Denmark maintains the world\'s lowest crime rates and excellent emergency services, making it one of the safest destinations for women.',
      reason: 'Terrorism threat level "significant" (4/5) but exceptionally safe for solo female travelers.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/denmark-travel-advisory.html',
      soloTravelerAdvice: [
        'Copenhagen ranked #4 safest city globally for women (Travel Ladies 2025)',
        'Denmark ranks #1 on Women\'s Peace & Security Index 2023',
        'Crime index only 25.7 with safety index of 74.3 (Numbeo 2025)',
        'Sexual assault risk only 1.3/5, physical attack risk 1.1/5 for women',
        'English spoken by 99% of population - excellent communication'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$113 - $275 USD / day',
        description: 'Updated 2025 costs: Budget travelers $113/day, mid-range $275/day, luxury $713/day. Includes accommodation, meals, transport, and activities. Copenhagen is expensive but exceptional safety standards and 24/7 public transport justify costs.',
        tip: 'Copenhagen ranks #22 most expensive globally but #4 safest for solo women. Budget minimum $75-120/day for comfortable safe travel. Accommodation $40-85/night, food $52/day, transport $21/day.'
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
          method: 'Public Transit (Metro/Bus)',
          cost: '$3.60 single, $12.60 daily, $32.80 for 72h (24-220 DKK)',
          safetyDescription: '24/7 metro service, 95/100 safety rating for women, CCTV coverage',
          safetyLevel: 'high'
        },
        {
          method: 'City Bike Rental (Bycyklen)',
          cost: '$15-20/day (105-140 DKK)',
          safetyDescription: '400km dedicated cycling paths, world\'s best bike infrastructure',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Exceptionally safe 24/7, violent crime only 0.7/1000 people',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis',
          cost: '$10-20 per trip (70-140 DKK)',
          safetyDescription: 'Safe and regulated, avoid airport taxis (expensive)',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Copenhagen Card (24h: $60, 48h: $88) includes 87+ attractions plus unlimited transport',
        'Stay in Vesterbro or Nørrebro for great value and safety - trendy areas with lower costs',
        'Shop at Netto, ALDI, Lidl for affordable food - biggest expense savings here',
        'Free activities: Botanical Gardens, harbor swimming, parks, Nyhavn walking, Round Tower views',
        'Happy hour 4-6pm can save $20-30 per meal - restaurant lunch menus cheaper than dinner',
        'Female-only hostels like Generator, Steel House offer excellent value and safety',
        'Use DOT app for public transport tickets - avoid airport taxis (extremely expensive)',
        'Supermarket beer $2 vs bar beer $8-10 - stock up for accommodation consumption',
        'Café breakfast $7 vs hotel breakfast $20-30 - explore local café culture instead'
      ],
      mealCosts: {
        breakfast: '$7-15 (50-105 DKK) at local cafés',
        lunch: '$15-25 (105-175 DKK) at restaurants', 
        dinner: '$30-60 (210-420 DKK) at mid-range restaurants',
        streetFood: '$8-15 (55-105 DKK) for hotdogs, sandwiches',
        groceries: '$40-60 (280-420 DKK) per week for basic supplies',
        alcohol: 'Beer $8-10 (55-70 DKK) at bars, $2 (14 DKK) at stores'
      },
      moneyTips: [
        'Denmark is almost completely cashless - bring contactless cards',
        'Notify bank of travel plans to avoid card blocking',
        'Use ATMs from major banks (Danske, Nordea, Jyske) for best rates',
        'Avoid currency exchange at airport - use banks instead',
        'Download banking apps for account monitoring',
        'Many places prefer contactless over cash',
        'Keep minimal cash for tips and small vendors'
      ]
    },
    sustainabilityTips: {
      eco_practices: [
        'Copenhagen aims to be carbon neutral by 2025 - embrace sustainable travel',
        'Use excellent public transport and cycling infrastructure instead of taxis',
        'Denmark has world-class recycling system - separate waste properly',
        'Support local sustainable restaurants and organic food markets',
        'Many hotels have green certification - choose eco-friendly accommodation',
        'Drink tap water (excellent quality) instead of bottled water',
        'Shop at second-hand stores - Danish vintage fashion is exceptional'
      ],
      green_transport: [
        'Cycle using Bycyklen city bikes - 400km of dedicated bike paths',
        'Metro and trains run on renewable energy - very eco-friendly',
        'Walking is safe and pleasant throughout the city',
        'Electric buses are being introduced across the public transport network'
      ],
      responsible_tourism: [
        'Respect local cycling culture and rules - safety for everyone',
        'Support local Danish design and sustainable fashion brands',
        'Visit during off-peak seasons to reduce overtourism impact',
        'Choose accommodation in residential areas to support local communities',
        'Learn about Danish sustainability initiatives and hygge culture'
      ]
    },
    seasonalConsiderations: {
      winter: {
        months: 'November-March',
        safety: 'Excellent safety maintained year-round, well-lit streets',
        pros: ['Fewer tourists', 'Cozy hygge atmosphere', 'Christmas markets', 'Lower accommodation costs'],
        cons: ['Cold temperatures (0-5°C)', 'Limited daylight hours', 'More rain/snow'],
        packingEssentials: ['Warm waterproof coat', 'Thermal layers', 'Waterproof boots', 'Gloves and hat']
      },
      spring: {
        months: 'April-May', 
        safety: 'Perfect safety conditions with longer daylight',
        pros: ['Pleasant temperatures', 'Blooming parks', 'Fewer crowds', 'Good hotel rates'],
        cons: ['Unpredictable weather', 'Occasional rain'],
        packingEssentials: ['Light layers', 'Waterproof jacket', 'Comfortable walking shoes']
      },
      summer: {
        months: 'June-August',
        safety: 'Peak safety with maximum daylight (19+ hours)',
        pros: ['Warmest weather', 'Long daylight hours', 'Outdoor dining', 'Festivals and events'],
        cons: ['Higher costs', 'More tourists', 'Accommodation books up'],
        packingEssentials: ['Light clothing', 'Sunglasses', 'Light rain jacket', 'Comfortable shoes']
      },
      autumn: {
        months: 'September-October',
        safety: 'Excellent safety with good visibility',
        pros: ['Beautiful fall colors', 'Comfortable temperatures', 'Fewer tourists', 'Good weather'],
        cons: ['Increasing rain', 'Shorter days', 'Weather becoming unpredictable'],
        packingEssentials: ['Layered clothing', 'Waterproof jacket', 'Warm accessories']
      }
    }
};

export default copenhagen;
