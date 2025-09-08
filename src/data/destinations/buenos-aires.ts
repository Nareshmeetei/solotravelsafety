import { Destination } from './types';

const buenosAires: Destination = {
    city: 'Buenos Aires',
    country: 'Argentina',
    continent: 'South America',
    countryCode: 'ar',
    overallScore: 7.2,
    nightSafety: 6.8,
    publicTransit: 7.4,
    walkingAlone: 6.9,
    tags: ['insider-tips', 'moderate-safe', 'cultural-hub'],
    bgColor: 'bg-blue-25',
    reviewCount: 1247,
    lastUpdated: '1 day ago',
    harassmentRisk: 'moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 6.8,
        context: 'Is Buenos Aires safe for solo female travellers at night? Generally yes in safe areas. Unlike other South American cities, Buenos Aires nightlife (especially in Palermo/Recoleta) is actually safer to experience than staying in. Argentina ranks as the safest country in South America (2024). However, economic crisis has increased opportunistic crime. Avoid Retiro Terminal area and stick to well-lit tourist zones after dark.'
      },
      publicTransit: {
        score: 7.4,
        context: 'Buenos Aires public transport (Subte metro, colectivos buses) is generally safe for solo women with comprehensive coverage. Peak-hour crowding increases pickpocketing risk (8-10 AM, 6-8 PM). 100% of women report street harassment citywide, but transport incidents are lower. BA Cómo Llego app essential for navigation.'
      },
      walkingAlone: {
        score: 6.9,
        context: 'Walking alone in Buenos Aires is relatively safe during day in tourist areas (Palermo, Recoleta, City Center). Argentina has Level 1 "Exercise Normal Precautions" rating (Sept 2024). However, phone snatching is extremely common - never use phones visibly on streets. Economic crisis increased opportunistic theft in 2024-2025.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Palermo',
          description: 'Trendy neighborhood with parks, restaurants, and vibrant nightlife. Generally safest area for solo female travelers with good lighting, active street life, and police presence. Home to Palermo Soho and Palermo Hollywood districts.'
        },
        {
          name: 'Recoleta',
          description: 'Upscale neighborhood with famous cemetery, museums, and elegant architecture. Very safe with sophisticated atmosphere, good lighting, and affluent clientele. Recommended for first-time solo female visitors.'
        },
        {
          name: 'Puerto Madero',
          description: 'Modern waterfront district with high-end restaurants and hotels. Excellent security, well-lit streets, and active police patrol. Safe for evening dining and walking along the water.'
        },
        {
          name: 'Belgrano',
          description: 'Quiet residential area with local charm and low crime rates. Less touristy but very safe for accommodation. Good transport connections to city center.'
        },
        {
          name: 'Microcentro',
          description: 'Business and financial district. Safe during business hours but can be deserted at night. Good for daytime sightseeing around Plaza de Mayo and shopping areas.'
        },
        {
          name: 'Villa Crick (Belgrano)',
          description: 'Peaceful residential area popular with expats. Very safe with tree-lined streets and family atmosphere. Good for longer stays.'
        }
      ],
      caution: ['San Telmo at night', 'La Boca beyond tourist areas', 'Constitución area', 'Some areas of Once'],
      avoid: ['Retiro Terminal area after dark', 'Villa 31 and other villa areas', 'Isolated areas of Tigre Delta at night', 'Areas around train stations late at night']
    },
    accommodations: [
      {
        name: 'Che Juan BA Hostel',
        type: 'hostel',
        features: ['Best for Female Solo Travelers', 'Incredibly stylish design', 'Personal locks on bunks', 'Super modern facilities', '24/7 reception', 'Safe Palermo location'],
        rating: 4.8,
        notes: 'Top-rated as "best for Female Solo Travelers" - spotlessly clean modern hostel with incredibly attractive design. Personal locks, awesome kitchen, and most in-demand hostel in BA. Perfect for solo women seeking style and security.',
        link: 'https://www.chejuan.com/'
      },
      {
        name: 'Casa Franca Recoleta Hostel',
        type: 'hostel',
        features: ['Historic petit hotel building', 'Cozy curtained bunks', 'Private dorm options', 'Vibrant common areas', 'Community atmosphere', 'Safe Recoleta location'],
        rating: 4.7,
        notes: 'Beautiful hostel in historic building with bunks that are cozy and private with curtains. Creates sense of community with vibrant common areas perfect for solo women travelers to share stories and connect.',
        link: 'https://www.casafranca.com/'
      },
      {
        name: 'Casa Caravan - Plant Based Concept House',
        type: 'hostel',
        features: ['Best rated for female solo travelers', 'Eco-friendly sanctuary', 'Plant-based concept', 'Palermo Soho location', 'Female-focused community', 'Sustainable practices'],
        rating: 4.6,
        notes: 'Best rated hostel for female solo travelers - cozy and eco-friendly sanctuary in heart of Palermo Soho. Perfect for environmentally conscious solo women seeking sustainable travel and female-focused community.',
        link: 'https://www.casacaravan.com.ar/'
      },
      {
        name: 'Play Hostel Garden',
        type: 'hostel',
        features: ['Historic Tudor-style house', 'Green central patio', 'Co-working space', 'Female-friendly atmosphere', 'Palermo SOHO location', 'Private and shared rooms'],
        rating: 4.5,
        notes: 'Best rated hostel for female solo travelers in historic Tudor-style house. Green central patio and co-working space perfect for digital nomads. Excellent community atmosphere for solo women.',
        link: 'https://www.playhostelgarden.com/'
      },
      {
        name: 'America del Sur Hostel',
        type: 'hostel',
        features: ['World-class hostel rating', 'Rooftop terrace with city views', '24-hour reception', 'Free walking tours', 'Social atmosphere', 'Central location'],
        rating: 4.7,
        notes: 'Consistently rated among world\'s best hostels with exceptional safety record. Perfect rooftop terrace for meeting other solo travelers. Strong female-friendly environment with comprehensive security.',
        link: 'https://americadelsur.com.ar/'
      },
      {
        name: 'Hotel Madero',
        type: 'hotel',
        features: ['5-star luxury', 'Puerto Madero waterfront', 'Top-tier security', 'Concierge service', 'Business center', 'Spa facilities'],
        rating: 4.9,
        notes: 'Premium luxury hotel in safest Puerto Madero district with exceptional security protocols. Professional service specifically catering to solo female business and leisure travelers. Waterfront location with stunning views.',
        link: 'https://www.hotelmadero.com/'
      },
      {
        name: 'Fierro Hotel Boutique',
        type: 'hotel',
        features: ['Boutique luxury design', 'Trendy Palermo location', 'Rooftop pool', 'Personalized service', 'Female-friendly staff', 'Modern amenities'],
        rating: 4.8,
        notes: 'Stylish boutique hotel in trendy Palermo neighborhood with excellent security and distinctly female-friendly atmosphere. Rooftop pool and personalized service perfect for solo women seeking luxury.',
        link: 'https://www.fierrohotel.com/'
      }
    ],
    alerts: [
      {
        title: 'Economic Crisis Crime Increase',
        description: 'Opportunistic theft increased due to 55.5% poverty rate and 289% inflation. Exercise extra caution with valuables in tourist areas.',
        location: 'Citywide',
        reportCount: 34,
        severity: 'medium',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Solo female travel safety essential: dress stylishly but avoid flashy items - prevent motochorros targeting women traveling alone
• Comfortable walking shoes crucial for solo female travelers - broken sidewalks dangerous for high heels
• Layer clothing for variable weather - important women solo travel safety tip for Buenos Aires climate changes
• Modest dress reduces unwanted attention - key solo travel safety advice to minimize catcalling harassment
• Never display expensive accessories or electronics visibly - critical women traveling alone safety precaution against robbery`,
      firstTimers: `• Is Buenos Aires safe for female solo travelers? Yes - Buenos Aires is the safest major South American city for women traveling alone
• Learn basic Spanish with Argentine accent - essential solo female travel safety tip as English less common than other capitals
• Exchange currency only at hotels or Western Union - critical women solo travel safety precaution, never use street exchangers
• Use SUBE card for all public transport - important solo travel security measure, buy at official stations only
• Experience nightlife in Palermo/Recoleta - unique solo female travel advice where going out is actually safer than staying in`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'BA Cómo Llego',
        'Cabify Argentina',
        'Alerta Buenos Aires'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Buenos Aires', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety in South America', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Argentina safety insights', rating: 4.0 },
        { name: 'BA Cómo Llego', link: 'https://www.buenosaires.gob.ar/', description: 'Official Buenos Aires transport app for buses, subte, trains with real-time info', rating: 4.2 },
        { name: 'Cabify Argentina', link: 'https://cabify.com/ar', description: 'Popular Argentine ride-hailing app with verified drivers and safety features', rating: 4.4 },
        { name: 'Alerta Buenos Aires', link: 'https://www.buenosaires.gob.ar/aplicacionesmoviles', description: 'Official Buenos Aires emergency and safety alert app from city government', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '¡Ayuda!',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'Call the police!',
          local: '¡Llamá a la policía!',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'I need a doctor.',
          local: 'Necesito un médico.',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'Where is the nearest hospital?',
          local: '¿Dónde está el hospital más cercano?',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, dejame en paz.',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'I feel unsafe.',
          local: 'No me siento segura.',
          localLanguage: 'Spanish (Argentine)'
        },
        {
          english: 'Can you help me?',
          local: '¿Me podés ayudar?',
          localLanguage: 'Spanish (Argentine)'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Fashion-conscious European style influence - Argentines dress up more than typical tourists, prioritize quality over quantity in clothing choices',
        'Avoid flashy jewelry and designer bags - motorcycle robberies (motochorros) specifically target visible expensive items worn by solo women',
        'Smart casual essential for restaurants - Buenos Aires dining culture expects neat, stylish appearance even in casual settings',
        'Comfortable walking shoes mandatory - broken sidewalks and cobblestone streets dangerous for high heels or flip-flops',
        'Modest dress reduces unwanted attention - revealing clothing increases catcalling and harassment for solo female travelers',
        'Layer clothing for variable weather - Buenos Aires has unpredictable temperature changes requiring adaptable wardrobe',
        'Dark, neutral colors preferred - blend in with local fashion sensibilities rather than standing out as obvious tourist target'
      ],
      behaviorNorms: [
        'Master cheek-kiss greeting culture - right cheek kiss standard for women meeting women or men, essential social custom',
        'Embrace late dining culture (9-11 PM) - restaurants don\'t serve dinner before 8 PM, plan social activities accordingly for solo travelers',
        'Engage with Argentine passion and directness - locals appreciate enthusiastic conversation and genuine interest in culture',
        'Respect football (soccer) culture deeply - avoid controversial team comments, learn basic rivalries to connect with locals',
        'Practice flexible punctuality - arriving 30-40 minutes late often acceptable for casual meetups but arrive within 15 minutes for formal appointments',
        'Tip 10% at restaurants and services - expected standard throughout Buenos Aires, essential for maintaining good relationships',
        'Adapt to smaller personal space - North American/European standards don\'t apply, Argentines stand closer during conversation',
        'Participate in afternoon tea (merienda) culture around 5-6 PM - important social bonding time for solo travelers to meet locals',
        'Show respect for family values and elders - Argentine culture highly values family connections and generational respect',
        'Navigate political discussions carefully - common topic but can become intense, especially regarding Falklands/Malvinas conflict'
      ],
      perception: [
        'Solo female travelers are welcomed and common in Buenos Aires - European cultural influence makes independent women socially accepted',
        'Street harassment (catcalling) is universal - 100% of women experience unsolicited attention, but it\'s considered socially acceptable',
        'Having male companion dramatically reduces harassment - solo women receive significantly more catcalls and persistent compliments than when accompanied',
        'Argentine culture generally respectful toward women despite catcalling - harassment is verbal rather than physical in most cases',
        'Buenos Aires has European feel - makes solo female travel more comfortable than other South American capitals for Western women',
        'Night safety varies by neighborhood - solo women commonly out in Palermo and Recoleta, but downtown areas lonely after dark',
        'Solo dining completely normal - restaurants accustomed to independent women diners, no social stigma attached',
        'Tango culture celebrates strong women - Argentine appreciation for confident, independent female expression through dance and culture'
      ],
    },
    bestTimeToVisit: {
      safestMonths: ['March-May', 'September-November'],
      events: 'Spring and fall offer mild weather and active street life. Summer (Dec-Feb) is hot and humid but has vibrant outdoor culture. Winter is mild but shorter daylight hours.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Argentine Peso', code: 'ARS', exchangeRate: {
      usd: 0.0011,
      eur: 0.0009,
      gbp: 0.0008
    }, scamWarnings: [
        'Exchange money only at hotels, Western Union, or authorized casa de cambio. Never exchange on Florida Street with arbolitos (street exchangers).',
        'Bring new, pristine US$100 bills for best exchange rates. Torn or old bills rejected.'
      ]
    },
    scamWarnings: [
      {
        title: 'Phone Snatching (Motochorros)',
        description: 'Motorcycle thieves snatch phones and bags from pedestrians. Never use phones visibly on streets - duck into cafes to check messages.',
        severity: 'high'
      },
      {
        title: 'Currency Exchange Scams',
        description: 'Arbolitos on Florida Street coordinate with accomplices to rob customers after exchange. Use official channels only.',
        severity: 'high'
      },
      {
        title: 'Express Kidnapping',
        description: 'Rare but occurs - criminals force victims to withdraw money from ATMs. Use ATMs inside banks or shopping centers only.',
        severity: 'medium'
      },
      {
        title: 'Fake Police',
        description: 'Scammers pose as police asking for documents or money. Real police have proper identification and never handle money.',
        severity: 'medium'
      }
    ],
    languages: ['Spanish (Argentine dialect with Italian influence)', 'English (limited in tourist areas)'],
    daytimeSafetyPercent: 76.8,
    nighttimeSafetyPercent: 68.4,
    safetySourceName: 'US State Department & Argentina Tourism 2025',
    safetySourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/argentina-travel-advisory.html',
    redFlags: [
      { label: 'Phone Snatching (Motochorros)', frequency: 'Very Common', icon: 'Smartphone' },
      { label: 'Economic Desperation Crime', frequency: 'Increasing', icon: 'TrendingUp' },
      { label: 'Street Harassment (Catcalling)', frequency: 'Universal (100%)', icon: 'UserX' },
      { label: 'Currency Exchange Scams', frequency: 'Common', icon: 'DollarSign' },
      { label: 'Express Kidnapping', frequency: 'Rare but Serious', icon: 'AlertTriangle' }
    ],
    culturalDos: [
      'Learn basic Spanish with Argentine accent.',
      'Dress fashionably but modestly.',
      'Embrace late dining culture (9-11 PM).',
      'Show interest in tango and football culture.',
      'Use proper cheek-kiss greeting.'
    ],
    culturalDonts: [
      'Don\'t use phones visibly on streets.',
      'Don\'t exchange money with street vendors.',
      'Don\'t wear expensive jewelry or accessories.',
      'Don\'t eat dinner before 8 PM (restaurants closed).',
      'Don\'t mention Falklands/Malvinas conflict.'
    ],
    womensConfidenceScore: {
      score: 72.4,
      source: "US State Department & Argentina Tourism 2025",
      sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/argentina-travel-advisory.html"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 82, source: 'Argentina Tourism Safety Report 2025', sourceUrl: 'https://www.argentina.gob.ar/seguridad' },
      { label: 'Nightlife', confidence: 74, source: 'Solo Female Travel Argentina 2025', sourceUrl: 'https://www.solofemaleguide.com/argentina' },
      { label: 'Public Transport', confidence: 74, source: 'Buenos Aires Transport Authority 2025', sourceUrl: 'https://www.buenosaires.gob.ar/subte' },
      { label: 'Dining Alone', confidence: 78, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/buenos-aires/' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: ['Street harassment universal (100% of women)', 'Public transport during rush hours', 'Tourist areas (Florida Street, San Telmo)', 'Nightlife districts (though generally safer inside venues)', 'Walking alone in any neighborhood'],
      reportingRate: 49, // Down from 75% five years ago but still low
      legalProtection: 'Argentina has comprehensive Law 26.485 protecting against sexual violence. However, gender-based violence program funding was cut by 42-98% in 2024. SMS harassment reporting (22676 ACOSO) available. One femicide every 33 hours nationally in 2024.',
      supportResources: [
        'Emergency: 911 (English available)',
        'Harassment Reporting SMS: 22676 (ACOSO) - text location and description',
        'Women\'s Helpline: 144 (24/7, confidential)',
        'Buenos Aires Women\'s Ministry: 0800-666-8537',
        'National Program for Assistance: 0800-222-1717',
        'Casa del Encuentro: +54 11 4982-2550 (femicide prevention)',
        'WhatsApp Helpline: +54 9 11 3133-1000',
        'International Legal Aid: Contact embassy for English-speaking assistance'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Italiano de Buenos Aires',
          address: 'Juan Domingo Perón 4190, C1199ABB CABA',
          phone: '+54 11 4959-0200',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Patients'],
          link: 'https://www.hospitalitaliano.org.ar/'
        },
        {
          name: 'Hospital Alemán',
          address: 'Av. Pueyrredón 1640, C1118AAT CABA',
          phone: '+54 11 4827-7000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Care', 'Women\'s Health'],
          link: 'https://www.hospitalaleman.org.ar/'
        },
        {
          name: 'Sanatorio de la Trinidad Palermo',
          address: 'Av. Las Heras 2900, C1425ASQ CABA',
          phone: '+54 11 4809-5555',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.trinidad.com.ar/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmacity',
          address: 'Multiple locations throughout Buenos Aires',
          phone: '+54 11 4320-8700',
          hours: 'Many 24/7 locations',
          emergency: true,
          link: 'https://www.farmacity.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Hospital Italiano Women\'s Health Center: +54 11 4959-0200',
          'CEMIC Women\'s Institute: +54 11 5299-0100',
          'Hospital de Clínicas Gynecology: +54 11 5950-8000'
        ],
        gynecologists: [
          'Dr. María Fernanda González - Hospital Italiano: +54 11 4959-0200',
          'Women\'s Health Clinic Palermo: +54 11 4831-6969'
        ],
        emergencyContraception: [
          'Available at all Farmacity and pharmacy chains',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Widely available at all pharmacies and supermarkets',
          'International and local brands readily available'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Buenos Aires',
        'COVID-19 vaccination recommended',
        'Standard travel vaccinations should be current',
        'Yellow fever if coming from infected areas'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Air pollution in some urban areas',
        'Seasonal flu during winter months',
        'Tap water generally safe to drink'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Buenos Aires',
          address: 'Av. Colombia 4300, C1425GMN CABA',
          phone: '+54 11 5777-4533',
          link: 'https://ar.usembassy.gov/'
        },
        {
          name: 'British Embassy Buenos Aires',
          address: 'Dr. Luis Agote 2412, C1425EOF CABA',
          phone: '+54 11 4808-2200',
          link: 'https://www.gov.uk/world/organisations/british-embassy-buenos-aires'
        },
        {
          name: 'German Embassy Buenos Aires',
          address: 'Villanueva 1055, C1426BMC CABA',
          phone: '+54 11 4778-2500',
          link: 'https://buenos-aires.diplo.de/'
        },
        {
          name: 'French Embassy Buenos Aires',
          address: 'Cerrito 1399, C1010ABA CABA',
          phone: '+54 11 4515-7030',
          link: 'https://ar.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Buenos Aires',
          address: 'Guido 1760, C1016AAP CABA',
          phone: '+54 11 4811-0070',
          link: 'https://www.exteriores.gob.es/embajadas/buenosaires'
        },
        {
          name: 'Australian Embassy Buenos Aires',
          address: 'Villanueva 1400, C1426BMJ CABA',
          phone: '+54 11 4779-3500',
          link: 'https://argentina.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Buenos Aires',
          address: 'Tagle 2828, C1425EEH CABA',
          phone: '+54 11 4808-1000',
          link: 'https://www.canadainternational.gc.ca/argentina-argentine/'
        },
        {
          name: 'Netherlands Embassy Buenos Aires',
          address: 'Olga Cossettini 831, C1107CGA CABA',
          phone: '+54 11 4338-0050',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/argentina'
        },
        {
          name: 'Danish Embassy Buenos Aires',
          address: 'Leandro N. Alem 1074, C1001AAT CABA',
          phone: '+54 11 4312-6901',
          link: 'https://argentina.um.dk/'
        },
        {
          name: 'Swiss Embassy Buenos Aires',
          address: 'Santa Fe 846, C1059ABP CABA',
          phone: '+54 11 4311-6491',
          link: 'https://www.eda.admin.ch/buenosaires'
        },
        {
          name: 'Indian Embassy Buenos Aires',
          address: 'Córdoba 950, C1054AAV CABA',
          phone: '+54 11 4393-4001',
          link: 'https://www.eoiba.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Embassy Buenos Aires',
        address: 'Av. Colombia 4300, C1425GMN CABA',
        phone: '+54 11 5777-4533',
        email: 'buenosaires-acs@state.gov',
        link: 'https://ar.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under Argentine constitution and Law 26.485',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment',
        'Equal employment and education opportunities'
      ],
      legalSupport: [
        'Legal Aid Argentina: 0800-222-3425',
        'Free legal advice available',
        'English-speaking lawyers through embassy referrals',
        'Women\'s legal assistance: 144 hotline'
      ],
      reportingProcedures: [
        'Report crimes to police at 911 or local comisarías',
        'Tourist police available in major areas',
        'Keep copies of all police reports',
        'Contact embassy for consular assistance in serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Subte (Metro)',
          safety: 7.4,
          recommendations: ['Generally safe with security cameras', 'Avoid rush hours for pickpocket prevention', 'Use SUBE card for all travel'],
          companies: ['SBASE'],
          link: 'https://www.buenosaires.gob.ar/subte'
        },
        {
          type: 'Colectivos (Buses)',
          safety: 7.2,
          recommendations: ['Extensive network', 'Safe when crowded', 'Use SUBE card only'],
          companies: ['Multiple operators'],
          link: 'https://www.buenosaires.gob.ar/colectivos'
        },
        {
          type: 'Uber',
          safety: 8.6,
          recommendations: ['Safest option for solo females', 'Essential for night travel', 'Share trip details with contacts'],
          companies: ['Uber'],
          link: 'https://www.uber.com/ar/en/'
        },
        {
          type: 'Licensed Taxis',
          safety: 7.8,
          recommendations: ['Use hotel-arranged taxis', 'Radio taxis safer than street hails', 'Agree on fare beforehand'],
          companies: ['Radio Taxi Premium', 'Taxi Ezeiza'],
          link: 'https://www.radiotaxipremium.com.ar/'
        },
        {
          type: 'Remise Services',
          safety: 8.2,
          recommendations: ['Pre-arranged private cars', 'Good for airport transfers', 'Reliable and professional'],
          companies: ['Various licensed operators'],
          link: ''
        },
        {
          type: 'EcoBici (Bike Share)',
          safety: 6.8,
          recommendations: ['Expanding bike lane network', 'Daytime use recommended', 'Watch for traffic'],
          companies: ['Buenos Aires Government'],
          link: 'https://www.buenosaires.gob.ar/ecobici'
        }
      ],
      nightTravel: {
        safety: 6.8,
        warnings: [
          'Avoid Retiro Terminal area and surrounding streets after dark',
          'Use Uber or licensed taxis instead of walking',
          'Some Subte lines stop early - check schedules'
        ],
        alternatives: [
          'Uber available 24/7 with good coverage',
          'Radio taxis available throughout night',
          'Stay in Palermo/Recoleta for walkable nightlife',
          'Use hotel concierge for transportation arrangements'
        ]
      },
      verifiedProviders: [
        {
          name: 'SBASE (Subte)',
          type: 'Metro System',
          contact: '+54 11 4000-5555',
          safety: 7.4
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.6
        },
        {
          name: 'Radio Taxi Premium',
          type: 'Licensed Taxis',
          contact: '+54 11 5238-0000',
          safety: 7.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key card access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances',
        'Secure luggage storage',
        'Buzzer entry systems'
      ],
      safeNeighborhoods: [
        'Palermo',
        'Recoleta',
        'Puerto Madero',
        'Belgrano',
        'Microcentro (day only)',
        'Villa Crick'
      ],
      womensOnly: [
        {
          name: 'Che Juan BA Hostel',
          type: 'Hostel',
          features: ['Female dorms', 'Modern facilities', 'Central Palermo location'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.2,
          comments: 'Felt very safe in Palermo area. Great nightlife and walkable streets.',
          date: '2025-01-18'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel and hostel WiFi generally reliable',
        'Free WiFi available in many cafes and shopping centers',
        'Use VPN for sensitive transactions',
        'Public WiFi networks require standard caution'
      ],
      digitalScams: [
        'Fake accommodation booking websites',
        'Cloned credit card skimming at ATMs',
        'Social media romance scams targeting travelers'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Argentina',
        'ExpressVPN - good speeds and bypass restrictions',
        'ProtonVPN - privacy-focused option'
      ],
      dataProtection: [
        'Argentina has data protection laws',
        'Use secure payment methods',
        'Keep document copies in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Phone Snatching (Motochorros)',
          location: 'Tourist areas citywide',
          date: '2025-01-20',
          description: 'Motorcycle thieves targeting pedestrians using phones on streets',
          severity: 'high'
        },
        {
          type: 'Economic Crime Increase',
          location: 'Citywide',
          date: '2025-01-18',
          description: 'Opportunistic theft increased due to economic crisis and 55.5% poverty rate',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Never use phones visibly on streets - duck into cafes to check messages',
          author: 'Buenos Aires Local',
          date: '2025-01-19',
          upvotes: 298
        },
        {
          tip: 'Use Western Union for currency exchange - safest and often better rates than black market',
          author: 'Solo Traveler',
          date: '2025-01-17',
          upvotes: 445
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'September 2024',
      details: 'Argentina is generally safe for travelers. Exercise normal precautions and be aware of petty crime in urban areas. Economic conditions may affect crime rates.',
      reason: 'Safest country in South America with normal tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/argentina-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers in South America',
        'European-style infrastructure and culture',
        'Use Uber for transportation, especially at night',
        'Experience nightlife safely in Palermo and Recoleta areas'
      ]
    },
    crimeStatistics: {
      violentCrime: 4.8, // per 100,000 (2024 - lowest in South America)
      propertyCrime: 922.6, // per 100,000 (2024 - high but improving)
      sexualAssault: 5.8, // Percentage of women experiencing assault in 5 years
      kidnapping: 0.12, // per 100,000 (2024 data - very low)
      domesticViolence: 14.1, // Percentage experiencing partner violence
      femicide: 1.2, // per 100,000 women (2024 - one every 33 hours nationally)
      source: 'Argentina National Statistics & Global Peace Index 2025',
      year: 2024,
      notes: 'Argentina ranks 46th most peaceful country globally. Safest in South America but economic crisis increased opportunistic crime.'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft bag with hidden compartments',
        'RFID-blocking wallet',
        'Portable door lock for accommodations',
        'Personal alarm device',
        'Power bank for phone charging'
      ],
      safetyApps: [
        {
          name: 'BA Cómo Llego',
          purpose: 'Essential Buenos Aires transport navigation',
          rating: 4.4
        },
        {
          name: 'I\'m Safe',
          purpose: 'Women\'s safety app with SOS and location sharing',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Women\'s Helpline',
          number: '144',
          type: 'Gender Violence Support'
        },
        {
          name: 'Harassment Reporting',
          number: '22676',
          type: 'SMS Harassment Reports (ACOSO)'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Currency Exchange Safety Strategy',
        description: 'Only exchange money at hotels or Western Union locations. Never use arbolitos on Florida Street - they coordinate with accomplices to rob customers. Bring new, pristine US$100 bills for best rates.',
        severity: 'high',
        sourceName: 'Buenos Aires Solo Female Travel Reddit 2025',
        sourceUrl: 'https://www.reddit.com/r/solotravel/'
      },
      {
        title: 'Phone Protection from Motochorros',
        description: 'Never use phones visibly on streets. Motorcycle thieves (motochorros) are extremely common. Duck into cafes, shops, or restaurants to check messages. Keep phones in front pockets with zippers.',
        severity: 'high',
        sourceName: 'Argentina Travel Safety Forum 2025',
        sourceUrl: 'https://www.tripadvisor.com/ShowForum-g312741-i511-Buenos_Aires.html'
      },
      {
        title: 'Embrace Safe Nightlife Culture',
        description: 'Unlike other South American cities, Buenos Aires nightlife in Palermo/Recoleta is actually safer than staying in. Restaurants open at 9 PM, bars at 11 PM, clubs at 1 AM. Experience tango shows and late dining safely.',
        severity: 'medium',
        sourceName: 'Buenos Aires Tourism Authority',
        sourceUrl: 'https://www.buenosaires.gob.ar/turismo'
      },
      {
        title: 'Master the SUBE Card System',
        description: 'Buy SUBE card at any Subte station for all public transport. Much safer than carrying cash. Load credit at machines or authorized points. Essential for buses (colectivos) which don\'t accept cash.',
        severity: 'medium',
        sourceName: 'Buenos Aires Transport Authority',
        sourceUrl: 'https://www.buenosaires.gob.ar/sube'
      },
      {
        title: 'Economic Crisis Safety Awareness',
        description: 'With 55.5% poverty rate and 289% inflation in 2024, opportunistic crime increased. Avoid displaying wealth, use digital payments when possible, and stay alert in tourist areas where desperate individuals may target foreigners.',
        severity: 'high',
        sourceName: 'Argentina Economic Report 2025',
        sourceUrl: 'https://www.argentina.gob.ar/economia'
      },
      {
        title: 'Harassment Reporting System',
        description: 'Text 22676 (ACOSO) to report street harassment with location and description. 100% of women experience catcalling in Buenos Aires, but reporting helps authorities track patterns and improve safety.',
        severity: 'medium',
        sourceName: 'Argentina Women\'s Ministry 2025',
        sourceUrl: 'https://www.argentina.gob.ar/generos'
      }
    ],
    culturalSensitivityTips: [
      'Greet with cheek kiss - right cheek for women meeting women or men',
      'Dinner is served very late (9-11 PM) - plan restaurant visits accordingly',
      'Argentines are passionate about football - learn basic team rivalries',
      'Fashion and appearance matter - dress well but avoid expensive jewelry',
      'Tango is cultural heritage - show respect and interest',
      'Political discussions are common but can be intense',
      'Punctuality is flexible - 15-30 minutes late is often acceptable',
      'Personal space is smaller than Northern European/North American standards'
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$60 - $120 USD / day',
        description: 'Buenos Aires is no longer a budget destination due to economic crisis. Prices now comparable to Paris but excellent quality of life and safety for solo female travelers.',
        tip: 'Use Western Union for best exchange rates. Credit cards now offer favorable MEP rates similar to blue dollar.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$20-35',
          safetyNote: 'Modern hostels with excellent security in safe Palermo/Recoleta areas',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$80-150',
          safetyNote: 'Professional security and prime locations in safest neighborhoods',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$200+',
          safetyNote: 'Top-tier security with concierge services and premium locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Subte/Colectivos (Public)',
          cost: '$0.50-1/ride',
          safetyDescription: 'Generally safe with SUBE card, avoid rush hours',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Uber',
          cost: '$3-12/ride',
          safetyDescription: 'Safest option for solo females, essential at night',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis',
          cost: '$5-20/ride',
          safetyDescription: 'Safe when arranged through hotels or radio taxi services',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in tourist areas during day, never use phones visibly',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Remise Services',
          cost: '$8-25/ride',
          safetyDescription: 'Pre-arranged private cars, excellent for airport transfers',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Use Western Union for currency exchange - often better than black market and much safer',
        'Buy SUBE card for all public transport - cheaper and safer than cash',
        'Experience nightlife in Palermo/Recoleta - actually safer than staying in',
        'Eat at parrillas (steakhouses) for best value and authentic experience',
        'Visit free attractions like Puerto Madero waterfront and Recoleta Cemetery',
        'Use Uber for safety rather than trying to save money with risky transport',
        'Stay in Palermo or Recoleta for best safety-to-value ratio'
      ]
    },
  youtubeVideos: [
    {
      videoId: "enu4SH8YPIM",
      title: "Buenos Aires Solo Female Travel Experience",
      description: "Real experience of solo female travel in Buenos Aires, Argentina - safety tips and cultural insights."
    },
    {
      videoId: "kHoWOXJouak",
      title: "Buenos Aires Culture and Lifestyle Guide",
      description: "Authentic look at Buenos Aires culture, lifestyle, and what to expect as a traveler."
    }
  ]
};

export default buenosAires;