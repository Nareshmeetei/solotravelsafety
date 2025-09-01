import { Destination } from './types';

const saoPaulo: Destination = {
  id: 'sao-paulo-brazil',
  city: 'São Paulo',
  country: 'Brazil',
  continent: 'South America',
  countryCode: 'br',
  overallScore: 5.8,
  nightSafety: 4.2,
  publicTransit: 6.1,
  walkingAlone: 4.8,
  tags: ['cultural-hub', 'intermediate-destination'],
  bgColor: 'bg-orange-25',
  reviewCount: 285,
  lastUpdated: '2025-01-25',
  harassmentRisk: 'medium-high',
  description: 'Is São Paulo safe for solo female travelers? Brazil\'s largest metropolis offers incredible culture, food, and nightlife. While São Paulo presents genuine safety challenges for women traveling alone, experienced solo female travelers can enjoy this vibrant city with proper precautions in safe neighborhoods like Vila Madalena and Jardins.',
  safetyBreakdown: {
    nightSafety: {
      score: 4.2,
      context: 'Night safety varies significantly by neighborhood. Safe areas like Jardins and Vila Madalena allow evening strolling with restaurants and bars open late. However, avoid walking alone after dark in most areas. Use Uber/99 for transportation and stay in well-lit, populated areas.'
    },
    publicTransit: {
      score: 6.1,
      context: 'São Paulo metro system is well-organized, fast, and efficient. Generally safe during busy hours but avoid during less crowded times. Theft common on crowded vehicles, robberies on empty buses at night. Keep belongings close and travel during daylight or with groups.'
    },
    walkingAlone: {
      score: 4.8,
      context: 'Walking alone during daytime in safe neighborhoods (Vila Madalena, Jardins, Pinheiros) is generally acceptable with vigilance. One-third of districts are very safe, one-third moderately safe, one-third significantly unsafe. Always stay alert and avoid displaying valuables.'
    }
  },
  lgbtqSafetyScore: 4.2,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Very diverse city with large immigrant communities',
    'Brazilian warmth and friendliness is genuine',
    'Portuguese is the primary language, Spanish partially understood',
    'Strong coffee culture and late dining times'
  ],
  emergencyInfo: {
    police: '190',
    fire: '193',
    medical: '192',
    general: '190'
  },
  emergencyContacts: {
    police: '190',
    fire: '193',
    ambulance: '192',
    touristHelpline: '+55 11 2171-2827',
    womensHelpline: '180',
    touristPolice: '+55 11 2171-2827'
  },
  healthcareInfo: {
    qualityOfCare: 4.1,
    hospitalAvailability: 4.0,
    pharmacyAvailability: 4.2,
    emergencyResponseTime: 3.6
  },
  transportation: {
    publicTransportQuality: 3.4,
    publicTransportSafety: 3.2,
    walkability: 3.1,
    cyclingFriendliness: 3.0,
    rideShareAvailability: 4.5
  },
    accommodations: [
      {
        name: 'Viva Hostel Design',
        type: 'hostel',
        features: ['Female-only dorms', '24-hour reception', 'Security lockers', 'Free breakfast', 'Common areas'],
        rating: 8.9,
        notes: 'Top choice for solo female travelers. Great setting for making friends with comfortable environment and helpful staff organizing city tours.',
        link: 'https://www.hostelworld.com/hostels/sao-paulo/viva-hostel-design'
      },
      {
        name: 'Ô de Casa Hostel Bar',
        type: 'hostel',
        features: ['Female dorms available', 'Safe location near metro', 'Filtered water', 'Chill common areas'],
        rating: 8.7,
        notes: 'Great staff from small towns creating personal experience. Easy to meet people, very safe location with good atmosphere.',
        link: 'https://www.hostelworld.com/hostels/sao-paulo/o-de-casa-hostel'
      },
      {
        name: 'Hotel Fasano São Paulo',
        type: 'hotel',
        features: ['Luxury security', 'Jardins location', '24/7 concierge', 'Safe neighborhood'],
        rating: 9.1,
        notes: 'Premium option in safest area. Excellent security and staff assistance for solo female travelers.',
        link: 'https://www.fasano.com.br/en/hotel-fasano-sao-paulo/'
      },
      {
        name: 'Mercure São Paulo Vila Madalena',
        type: 'hotel',
        features: ['Vila Madalena location', 'Business center', 'Safe area', 'Modern facilities'],
        rating: 8.4,
        notes: 'Located in trendy, safer Vila Madalena district. Walking distance to restaurants and cultural spaces.',
        link: 'https://www.mercure.com/'
      },
      {
        name: 'Generator São Paulo',
        type: 'hostel',
        features: ['Female-only rooms', 'Key-card access', 'Rooftop bar', 'Security lockers'],
        rating: 8.6,
        notes: 'Modern hostel with excellent safety features. Great for solo travelers looking for social atmosphere with security.',
        link: 'https://staygenerator.com/hostels/sao-paulo'
      }
    ],
  localLaws: [
    'Drinking age is 18, widely available',
    'Smoking banned in enclosed public spaces',
    'Tipping expected (10% service charge often included)',
    'Public drinking generally accepted',
    'Cannabis possession decriminalized in small amounts'
  ],
  culturalNorms: [
    'Brazilians are warm, physical, and expressive',
    'Cheek kisses for greetings (usually one in São Paulo)',
    'Lunch is main meal, dinner can be late (8-10 PM)',
    'Dress well - appearance matters in Brazilian culture',
    'Football (soccer) is extremely important culturally'
  ],
  attractions: [
    {
      name: 'São Paulo Museum of Art (MASP)',
      safetyScore: 3.8,
      description: 'World-class art museum on Paulista Avenue, safer during day with crowds'
    },
    {
      name: 'Ibirapuera Park',
      safetyScore: 3.5,
      description: 'Large urban park with museums, avoid isolated areas and go during busy times'
    },
    {
      name: 'Historic Center',
      safetyScore: 2.9,
      description: 'Downtown area with architecture and markets, but significant safety concerns'
    },
    {
      name: 'Pinacoteca Museum',
      safetyScore: 3.6,
      description: 'Important art museum in renovated area, use caution traveling to/from'
    },
    {
      name: 'Municipal Market',
      safetyScore: 3.2,
      description: 'Famous food market, busy during day but watch belongings carefully'
    }
  ],
    neighborhoods: {
      safe: [
        {
          name: 'Jardins',
          description: 'One of the safest neighborhoods in São Paulo for solo female travelers. Upscale shopping and dining area with private security. Perfectly safe to stroll at night with many shops, restaurants, and excellent ice cream shops open late. High police presence and well-lit streets.'
        },
        {
          name: 'Vila Madalena',
          description: 'São Paulo\'s artsy, bohemian district and one of the coolest and safest neighborhoods. Great for culture lovers with vibrant nightlife and social scene. Safe and walkable with restaurants, bars, and cultural spaces within walking distance. Popular with solo female travelers.'
        },
        {
          name: 'Pinheiros',
          description: 'Diverse, middle-class neighborhood among the safest areas. Excellent food scene and good walkability during day. Well-connected to metro system and considered safe for solo women with proper precautions.'
        },
        {
          name: 'Itaim Bibi',
          description: 'Business district that\'s safer during business hours. Good for accommodation if working or visiting business areas. Enhanced security due to corporate presence, though quieter in evenings.'
        },
        {
          name: 'Moema',
          description: 'Residential area near Ibirapuera Park with family-friendly atmosphere. Quieter than central areas but generally safe for solo female travelers. Good for those seeking peaceful accommodation.'
        }
      ],
      caution: [
        'Bela Vista: Home to Museum of Art (MASP), generally safe but exercise caution in evening hours. Stay on main Paulista Avenue and avoid side streets after dark.',
        'Santa Cecília: Mixed area with some safe parts, but requires local knowledge. Avoid walking alone at night and use transportation.',
        'Liberdade: Japanese district generally safe during day but exercise caution at night. Stick to main areas and avoid isolated streets.'
      ],
      avoid: [
        'Centro/Sé: Historic downtown with notable landmarks but significant safety concerns. High petty crime rates, especially targeting tourists. Never walk alone at night.',
        'Luz: Particularly dangerous area that solo female travelers should never walk alone, especially at night. High crime rates and drug activity.',
        'Cracolândia (Luz district): Drug-affected area with severe safety issues. Completely avoid this area.',
        'Outer periphery neighborhoods: Areas far from center generally lack security infrastructure and tourist safety measures.'
      ]
    },
    alerts: [
      {
        title: 'High Crime Rate for Women Travelers',
        description: 'Brazil ranks as second-most dangerous country for women globally. 36.9% of women experience physical/sexual violence from partners. Solo female travelers face elevated risks of robbery, phone theft, and harassment.',
        location: 'Citywide',
        reportCount: 15,
        severity: 'high',
        dateReported: '2025-01-20'
      },
      {
        title: 'Express Kidnapping and Phone Theft Epidemic',
        description: 'Phone snatching extremely common, especially iPhones. Express kidnapping targets anyone appearing wealthy. Robberies most common 4-9 PM on public transport. Recent incidents include violent crimes against female travelers.',
        location: 'Public transport, tourist areas',
        reportCount: 8,
        severity: 'high',
        dateReported: '2025-01-18'
      }
    ],
    safetyTips: {
      clothing: `• Dress well but avoid expensive items - appearance matters in Brazilian culture
• Never wear jewelry, watches, or designer clothing that attracts thieves
• Carry bags close to front of body in crowded areas
• Wear closed-toe shoes for safety and to blend in
• Keep phones and cameras completely hidden when not in use
• Dress conservatively to avoid unwanted attention`,
      firstTimers: `• São Paulo recommended ONLY for experienced solo travelers
• NOT suitable for first-time solo female travelers due to high crime rates
• Consider group tours or guided experiences for major attractions
• Stay only in safe neighborhoods (Vila Madalena, Jardins)
• Never walk alone anywhere, especially after sunset
• Use only Uber/99 - never public transport alone`,
      apps: [
        'LadyDriver',
        'bSafe',
        '99',
        'iFood',
        'NomadHer',
        'Citymapper',
        'Google Translate',
        'Blablacar'
      ],
      appLinks: [
        { name: 'LadyDriver', link: 'https://play.google.com/store/apps/details?id=br.com.ladydriver.passenger', description: 'Female-only rideshare service in São Paulo with women drivers for enhanced safety', rating: 4.5 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family/friends', rating: 4.5 },
        { name: '99', link: 'https://99app.com/', description: 'Brazil\'s top rideshare app, often cheaper than Uber with local driver knowledge', rating: 4.6 },
        { name: 'iFood', link: 'https://www.ifood.com.br/', description: 'Brazil\'s #1 food delivery app - avoid walking alone at night by ordering to accommodation', rating: 4.7 },
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting verified women travelers safely in São Paulo', rating: 4.8 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'São Paulo metro navigation with real-time safety updates and crowding information', rating: 4.8 },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential Portuguese translation with camera feature for menus and signs', rating: 5.0 },
        { name: 'Blablacar', link: 'https://www.blablacar.com.br/', description: 'Intercity ride sharing between São Paulo and other Brazilian cities with verified drivers', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Socorro!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Call the police!',
          local: 'Chama a polícia!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I need help.',
          local: 'Preciso de ajuda.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Onde fica o hospital mais próximo?',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I am lost.',
          local: 'Estou perdida.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, me deixe em paz.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Não me sinto segura.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Can you help me?',
          local: 'Pode me ajudar?',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I don\'t speak Portuguese.',
          local: 'Não falo português.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I am a tourist.',
          local: 'Sou turista.',
          localLanguage: 'Portuguese'
        }
      ]
    },
    sexualHarassmentData: {
      prevalence: 'medium-high',
      commonLocations: [
        'Public transportation (metro, buses)',
        'Crowded streets and markets',
        'Nightlife areas in Vila Madalena',
        'Tourist attractions and historic center',
        'Walking alone in any area after dark'
      ],
      reportingRate: 15,
      legalProtection: 'Brazil has laws against sexual harassment under Lei Maria da Penha (2006) and Sexual Harassment Law (2018). Legal framework exists but enforcement varies. Women can report to Women\'s Police Stations (DEAMs).',
      supportResources: [
        'Central de Atendimento à Mulher: 180 (24/7 national helpline)',
        'Delegacia Especializada de Atendimento à Mulher (DEAM): 190',
        'Casa da Mulher Brasileira São Paulo: +55 11 2797-4000',
        'Centro de Referência da Mulher: +55 11 3224-4906',
        'US Consulate São Paulo: +55 11 5186-7000'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General São Paulo',
          address: 'Rua Henri Dunant, 500, Chácara Santo Antônio, São Paulo, SP 04709-110',
          phone: '+55 11 5186-7000',
          link: 'https://br.usembassy.gov/embassy-consulates/sao-paulo/'
        },
        {
          name: 'British Consulate General São Paulo',
          address: 'Rua Ferreira de Araújo, 741, Pinheiros',
          phone: '+55 11 3094-2700',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-sao-paulo'
        },
        {
          name: 'German Consulate General São Paulo',
          address: 'Av. Brigadeiro Faria Lima, 2092, Jardim Paulistano',
          phone: '+55 11 3097-5800',
          link: 'https://sao-paulo.diplo.de/'
        },
        {
          name: 'French Consulate General São Paulo',
          address: 'Av. Paulista, 1842, Bela Vista',
          phone: '+55 11 3371-4200',
          link: 'https://br.consulfrance.org/Consulado-Geral-da-Franca-em-Sao-Paulo'
        },
        {
          name: 'Spanish Consulate General São Paulo',
          address: 'Av. Paulista, 2073, Bela Vista',
          phone: '+55 11 3371-2230',
          link: 'https://www.exteriores.gob.es/consulados/saopaulo/'
        },
        {
          name: 'Australian Consulate General São Paulo',
          address: 'Alameda Santos, 700, Cerqueira César',
          phone: '+55 11 2112-6200',
          link: 'https://brazil.embassy.gov.au/'
        },
        {
          name: 'Canadian Consulate General São Paulo',
          address: 'Av. das Nações Unidas, 12901, Brooklin Novo',
          phone: '+55 11 5509-4321',
          link: 'https://www.canadainternational.gc.ca/brazil-bresil/'
        },
        {
          name: 'Netherlands Consulate General São Paulo',
          address: 'Av. Brigadeiro Faria Lima, 2092, Jardim Paulistano',
          phone: '+55 11 3243-9922',
          link: 'https://www.netherlandsandyou.nl/countries/brazil'
        },
        {
          name: 'Danish Consulate São Paulo',
          address: 'Rua Oscar Freire, 379, Jardins',
          phone: '+55 11 3064-2600',
          link: 'https://brasilien.um.dk/'
        },
        {
          name: 'Swiss Consulate General São Paulo',
          address: 'Av. Paulista, 1754, Bela Vista',
          phone: '+55 11 3372-8200',
          link: 'https://www.eda.admin.ch/countries/brazil/en/home/representations/consulate-general-sao-paulo.html'
        },
        {
          name: 'Indian Consulate General São Paulo',
          address: 'Rua Lisboa, 94, Pinheiros',
          phone: '+55 11 3819-1414',
          link: 'https://www.indianconsulatesaopaulo.gov.in/'
        }
      ],
      womensRights: [
        'Lei Maria da Penha (2006) - Comprehensive law protecting women from domestic violence',
        'Sexual Harassment Law (2018) - Makes sexual harassment a criminal offense',
        'Women have equal rights under Brazilian Constitution',
        'Right to report crimes at specialized Women\'s Police Stations (DEAMs)',
        'Access to legal aid through Defensoria Pública'
      ],
      legalSupport: [
        'Defensoria Pública de São Paulo: +55 11 3106-2015 (Free legal aid)',
        'OAB São Paulo (Bar Association): +55 11 3291-8100',
        'Centro de Referência da Mulher: +55 11 3224-4906',
        'DEAM (Women\'s Police Station): 190 or +55 11 3976-3382',
        'Embassy/Consulate assistance for foreign nationals'
      ],
      reportingProcedures: [
        'Report crimes immediately to 190 (police emergency)',
        'For sexual harassment/assault: go to DEAM (Women\'s Police Station)',
        'Contact embassy/consulate immediately for serious crimes',
        'Keep copies of all police reports and medical records',
        'Request English interpreter if needed',
        'Document everything with photos and written records'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital das Clínicas (HC-FMUSP)',
          address: 'Av. Dr. Enéas Carvalho de Aguiar, 255, Cerqueira César',
          phone: '+55 11 2661-0000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Care'],
          link: 'https://www.hc.fm.usp.br/'
        },
        {
          name: 'Hospital Sírio-Libanês',
          address: 'R. Dona Adma Jafet, 91, Bela Vista',
          phone: '+55 11 3394-5000',
          emergency: true,
          specialties: ['Emergency Care', 'Gynecology', 'Premium Services'],
          link: 'https://www.hsl.org.br/'
        },
        {
          name: 'Hospital Albert Einstein',
          address: 'Av. Albert Einstein, 627, Morumbi',
          phone: '+55 11 2151-1233',
          emergency: true,
          specialties: ['International Patient Care', 'Women\'s Health', 'Emergency'],
          link: 'https://www.einstein.br/'
        }
      ],
      pharmacies: [
        {
          name: 'Drogasil',
          address: 'Multiple locations citywide',
          phone: '+55 11 4004-4004',
          hours: '24 hours (select locations)',
          emergency: true,
          link: 'https://www.drogasil.com.br/'
        },
        {
          name: 'Droga Raia',
          address: 'Multiple locations',
          phone: '+55 11 4020-7050',
          hours: '7:00-22:00',
          emergency: false,
          link: 'https://www.drogaraia.com.br/'
        }
      ],
      womensHealth: {
        clinics: [
          'Centro de Saúde da Mulher - Hospital das Clínicas: +55 11 2661-0000',
          'Hospital da Mulher Prof. Dr. José Aristodemo Pinotti: +55 11 2176-7000',
          'Centro de Referência da Saúde da Mulher: +55 11 3224-4906'
        ],
        gynecologists: [
          'Dr. Ana Paula Silva - Hospital Sírio-Libanês: +55 11 3394-5000',
          'Dr. Maria Santos - Hospital Albert Einstein: +55 11 2151-1233'
        ],
        emergencyContraception: [
          'Available at pharmacies without prescription (pílula do dia seguinte)',
          'Emergency contraception available at public health centers',
          'Postinor and similar brands widely available'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'Popular brands: Always, Intimus, Carefree widely available',
          'Tampons less common than pads in Brazil'
        ]
      },
      vaccinations: [
        'Yellow fever if traveling to certain areas',
        'Hepatitis A and B recommended',
        'Typhoid vaccination suggested',
        'COVID-19 vaccination recommended'
      ],
      healthRisks: [
        'Air pollution in urban areas',
        'Dengue fever during summer months',
        'Zika and Chikungunya viruses present',
        'Water quality varies - bottled water recommended'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: ['Most reliable option', 'Share trip details', 'Verify license plate'],
          companies: ['Uber'],
          link: 'https://www.uber.com/br/pt-br/'
        },
        {
          type: '99 (Local Rideshare)',
          safety: 8.3,
          recommendations: ['Popular Brazilian app', 'Often cheaper than Uber', 'Verify driver identity'],
          companies: ['99'],
          link: 'https://99app.com/'
        },
        {
          type: 'São Paulo Metro',
          safety: 6.8,
          recommendations: ['Use during busy hours only', 'Keep bags in front', 'Avoid empty cars'],
          companies: ['Metrô SP'],
          link: 'https://www.metro.sp.gov.br/'
        },
        {
          type: 'Registered Taxis',
          safety: 7.2,
          recommendations: ['Use hotel-arranged taxis', 'Ensure meter running', 'Never street taxis'],
          companies: ['Cooperativa de Táxi'],
          link: 'https://www.cooptaxi.com.br/'
        }
      ],
      nightTravel: {
        safety: 3.8,
        warnings: [
          'Never walk alone at night anywhere in the city',
          'Avoid public transport after 9 PM',
          'Use only Uber/99 for night transportation',
          'Stay in groups when going out at night'
        ],
        alternatives: [
          'Uber and 99 available 24/7',
          'Hotel-arranged transportation',
          'Stick to Vila Madalena or Jardins for nightlife',
          'Pre-arrange pickup times'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.5
        },
        {
          name: '99',
          type: 'Brazilian Rideshare',
          contact: 'App-based',
          safety: 8.3
        },
        {
          name: 'Metrô SP',
          type: 'Public Metro',
          contact: '+55 11 3888-2200',
          safety: 6.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk reception',
        'Electronic keycard access',
        'CCTV surveillance in common areas',
        'Secure lockers for valuables',
        'Well-lit entrances and corridors',
        'Security guards (premium properties)'
      ],
      safeNeighborhoods: [
        'Jardins',
        'Vila Madalena',
        'Pinheiros',
        'Itaim Bibi',
        'Moema'
      ],
      womensOnly: [
        {
          name: 'Viva Hostel Design',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Security lockers', 'Safe location'],
          rating: 4.8
        },
        {
          name: 'Ô de Casa Hostel Bar',
          type: 'Hostel',
          features: ['Female dorms', 'Safe metro access', 'Filtered water', 'Local staff'],
          rating: 4.7
        }
      ],
      userReviews: [
        {
          rating: 4.3,
          safety: 7.8,
          comments: 'Felt safe in Vila Madalena hostel. Staff very helpful with safety advice. Would recommend staying in this area.',
          date: '2025-01-15'
        },
        {
          rating: 4.1,
          safety: 7.5,
          comments: 'Good security measures but need to be very careful with belongings. Area felt safe during day.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use hotel/hostel WiFi when possible',
        'Avoid public WiFi for banking transactions',
        'VPN highly recommended in Brazil',
        'Enable two-factor authentication',
        'Keep devices updated and secure'
      ],
      digitalScams: [
        'Fake booking websites targeting tourists',
        'WhatsApp romance scams',
        'Fake police emails requesting information',
        'Social media scams offering free tours',
        'ATM skimming devices'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Brazil',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available'
      ],
      dataProtection: [
        'Brazil has Lei Geral de Proteção de Dados (LGPD)',
        'Avoid sharing personal information with strangers',
        'Use credit cards over cash when possible',
        'Keep document copies in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Phone Theft',
          location: 'Paulista Avenue, public transport',
          date: '2025-01-20',
          description: 'Multiple reports of iPhone snatching during evening rush hour',
          severity: 'high'
        },
        {
          type: 'Express Kidnapping',
          location: 'Centro area',
          date: '2025-01-15',
          description: 'Tourist forced to withdraw money from ATMs, released unharmed',
          severity: 'high'
        },
        {
          type: 'Sexual Harassment',
          location: 'Metro stations, buses',
          date: '2025-01-12',
          description: 'Multiple reports of inappropriate touching and verbal harassment on public transport',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Never display phones or valuables on streets - use discretely and put away quickly',
          author: 'Solo Female Traveler',
          date: '2025-01-20',
          upvotes: 95
        },
        {
          tip: 'Stay only in Vila Madalena or Jardins areas - huge difference in safety',
          author: 'Local Guide',
          date: '2025-01-18',
          upvotes: 78
        },
        {
          tip: 'Use Uber/99 religiously - public transport too risky especially for women',
          author: 'Experienced Traveler',
          date: '2025-01-15',
          upvotes: 67
        }
      ]
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Hidden money belt (essential)',
        'Personal safety alarm',
        'Door stop alarm for accommodation',
        'RFID-blocking wallet',
        'Portable door lock',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Uber',
          purpose: 'Safe transportation with tracking',
          rating: 4.5
        },
        {
          name: '99',
          purpose: 'Local rideshare alternative',
          rating: 4.4
        },
        {
          name: 'WhatsApp',
          purpose: 'Communication with emergency contacts',
          rating: 4.6
        },
        {
          name: 'Google Translate',
          purpose: 'Portuguese translation for emergencies',
          rating: 4.4
        },
        {
          name: 'Citymapper São Paulo',
          purpose: 'Safe route planning',
          rating: 4.3
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '190',
          type: 'Police'
        },
        {
          name: 'Medical Emergency',
          number: '192',
          type: 'Ambulance'
        },
        {
          name: 'Women\'s Support Hotline',
          number: '180',
          type: 'Women\'s Crisis Support (24/7)'
        },
        {
          name: 'US Consulate São Paulo',
          number: '+55 11 5186-7000',
          type: 'Consular Services'
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'US State Department',
      lastUpdated: '2024-12-15',
      details: 'Exercise increased caution in Brazil due to crime. Some areas have increased risk of violent crime including armed robbery, murder, and kidnapping.',
      reason: 'High crime rates, including violent crimes targeting tourists.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html',
      soloTravelerAdvice: [
        'São Paulo is safe for solo female travelers with extensive precautions - not recommended for first-time women traveling alone',
        'Intermediate to advanced solo travelers only',
        'Stay only in safe neighborhoods (Vila Madalena, Jardins)',
        'Never walk alone at night anywhere in the city',
        'Use Uber/99 for all transportation, avoid public transport when possible',
        'Keep minimal valuables and use hotel safes religiously'
      ]
    },
    culturalDos: [
      'Dress fashionably and well-groomed - São Paulo is fashion capital of Latin America, appearance crucial for safety and social acceptance',
      'Master basic Portuguese phrases beyond tourist basics - locals deeply appreciate language effort and it significantly improves safety interactions',
      'Greet with appropriate physical contact - one cheek kiss standard in São Paulo (not two like Rio), handshakes for business settings',
      'Embrace Brazilian warmth and expressiveness - maintain eye contact, smile genuinely, engage in small talk before business discussions',
      'Respect meal timing culture - lunch is sacred 12-2 PM, dinner never before 8 PM, rushing meals is seen as rude and suspicious',
      'Show genuine interest in football culture - asking about local teams Corinthians, Palmeiras, São Paulo FC creates instant connections',
      'Practice "jeitinho brasileiro" appreciation - understand creative problem-solving approach and don\'t show frustration with flexibility',
      'Learn about regional pride - São Paulo residents (Paulistanos) are proud of city being Brazil\'s economic powerhouse, acknowledge this',
      'Use proper titles and formality initially - "Senhor/Senhora" until invited to use first names, especially important for solo female safety'
    ],
    culturalDonts: [
      "Don't display any expensive items, technology, or jewelry - robbery target #1, especially iPhones which are stolen every 2 minutes in São Paulo",
      "Don't walk alone at night anywhere in the city - even safe neighborhoods become dangerous after dark for solo female travelers",
      "Don't refuse Brazilian hospitality abruptly - politely explain allergies/restrictions, outright refusal is deeply offensive and creates social tension",
      "Don't use Spanish assuming it's understood - Portuguese is distinct language, Spanish attempts can be seen as cultural insensitivity",
      "Don't compare São Paulo negatively to Rio or other cities - intense regional rivalry, criticism creates hostility and potential safety risks",
      "Don't ignore football culture - dismissing or showing ignorance about soccer is social mistake that marks you as disconnected tourist",
      "Don't photograph favelas or poverty - exploitative and potentially dangerous, residents may react aggressively to tourist photography",
      "Don't expect punctuality rigidity - 15-30 minute delays are normal 'Brazilian time,' showing impatience is culturally offensive",
      "Don't dress too casually in upscale areas - underdressing in Jardins or business districts marks you as target and shows disrespect"
    ],
    womensConfidenceScore: {
      score: 58.2,
      source: "Travel Ladies & Solo Female Travel Communities 2025",
      sourceUrl: "https://travelladies.app/safety/brazil/sao-paulo"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 72, source: 'World Nomads 2025', sourceUrl: 'https://www.worldnomads.com/travel-safety/south-america/brazil/is-sao-paulo-safe' },
      { label: 'Nightlife', confidence: 35, source: 'Broke Backpacker 2025', sourceUrl: 'https://www.thebrokebackpacker.com/is-sao-paulo-safe/' },
      { label: 'Public Transport', confidence: 42, source: 'Travel Ladies 2025', sourceUrl: 'https://travelladies.app/safety/brazil' },
      { label: 'Dining Alone', confidence: 65, source: 'Girl About the Globe 2025', sourceUrl: 'https://www.girlabouttheglobe.com/solo-travel-in-brazil/' }
    ],
    usefulTips: [
      {
        title: 'Master the Art of Staying Invisible',
        description: 'Never display phones, cameras, or valuables on streets. Use devices discretely and put away immediately. Phone snatching is epidemic - iPhones especially targeted. Dress well but avoid flashy jewelry.',
        severity: 'high',
        sourceName: 'Caroline Rose Travel',
        sourceUrl: 'https://carolinerosetravel.com/is-brazil-safe-to-travel-to-answered-by-a-solo-female-traveler/'
      },
      {
        title: 'Choose Your Neighborhood Strategically',
        description: 'Stay only in Vila Madalena or Jardins areas for safety. One-third of city districts very safe, one-third moderately safe, one-third significantly unsafe. Location choice is critical for solo female travelers.',
        severity: 'high',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/brazil/sao-paulo'
      },
      {
        title: 'Transportation is Your Lifeline',
        description: 'Use Uber/99 religiously for all transportation. Never walk alone at night anywhere. Metro safe during busy hours but avoid less crowded times. Robberies common 4-9 PM on public transport.',
        severity: 'high',
        sourceName: 'Broke Backpacker',
        sourceUrl: 'https://www.thebrokebackpacker.com/is-sao-paulo-safe/'
      },
      {
        title: 'Experience Level Matters',
        description: 'São Paulo recommended only for intermediate to experienced solo female travelers. Not suitable for first-time solo travel due to elevated crime rates and complexity of staying safe.',
        severity: 'medium',
        sourceName: 'NomadHer',
        sourceUrl: 'https://www.nomadher.com/blog-en/is-it-safe-to-travel-alone-as-a-woman-in-brazil'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $90 USD / day',
        description: 'Budget varies greatly with exchange rate. Higher budget recommended for solo female travel safety in São Paulo (better accommodations, secure transportation).',
        tip: 'Invest in safer accommodation and transportation - false economy to go budget on safety essentials.'
      },
      accommodation: [
        {
          type: 'Safe Hostel',
          avgCost: '$20-35',
          safetyNote: 'Choose hostels in Vila Madalena/Jardins with 24/7 security and female dorms',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$45-75',
          safetyNote: 'Better safety in safe neighborhoods with 24/7 reception',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$75+',
          safetyNote: 'Excellent safety with security staff and prime safe locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Uber/99',
          cost: '$3-12/ride',
          safetyDescription: 'Essential for safety, especially at night.',
          safetyLevel: 'high'
        },
        {
          method: 'Metro (Daytime)',
          cost: '$1.50/ride',
          safetyDescription: 'Safe during busy hours. Keep belongings secure.',
          safetyLevel: 'medium'
        },
        {
          method: 'Taxi',
          cost: '$8-20/ride',
          safetyDescription: 'Use hotel-arranged only. Never street taxis.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in Vila Madalena/Jardins during day | Never at night',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Safety investments are non-negotiable - budget higher for secure accommodation',
        'Stay in Vila Madalena or Jardins for best safety/value ratio',
        'Budget for Uber/99 transportation - public transport savings not worth risk',
        'Use hotel safes religiously - carry minimal valuables',
        'Consider travel insurance with comprehensive coverage'
      ]
    },
  bestTimeToVisit: {
    safestMonths: ['April-September'],
    events: 'Autumn/winter months (April-September) offer cooler weather, less rain, and better visibility for safety. Summer (Dec-Mar) brings heavy rains and higher crime rates. Winter provides clearest skies and safest conditions for solo female travelers.'
  },
  currency: {
    name: 'Brazilian Real',
    code: 'BRL',
    exchangeRate: {
      usd: 0.17,
      eur: 0.16,
      gbp: 0.14
    },
    scamWarnings: [
      'Use official exchange houses or banks - avoid street money changers',
      'ATMs inside banks/shopping centers are safest - avoid street ATMs',
      'Credit cards widely accepted in safe neighborhoods',
      'Keep cash hidden in money belts - never show large amounts'
    ]
  },
  scamWarnings: [
    {
      title: 'Fake Police Officers',
      description: 'Criminals dress as police and ask to see documents or search bags. Real police will show ID and never ask for bribes. Ask to go to nearest police station if uncertain.',
      severity: 'high'
    },
    {
      title: 'Express Kidnapping (Sequestro Relâmpago)',
      description: 'Victims forced to withdraw money from ATMs or make purchases. Avoid isolated ATMs, use machines inside banks/malls, and never resist if targeted.',
      severity: 'high'
    },
    {
      title: 'Phone/Camera Snatching',
      description: 'Motorcycle thieves grab phones/cameras from pedestrians. Never use phone on street, avoid taking photos in public, keep devices completely hidden.',
      severity: 'high'
    },
    {
      title: 'Fake Tour Guides',
      description: 'Unofficial guides approach tourists offering cheaper tours but lead to robbery setups. Use only verified tour companies with proper credentials.',
      severity: 'medium'
    }
  ],
  languages: ['Portuguese', 'English (limited - mainly in upscale areas)'],
  daytimeSafetyPercent: 61.8,
  nighttimeSafetyPercent: 31.4,
  safetySourceName: 'Numbeo 2025',
  safetySourceUrl: 'https://www.numbeo.com/crime/in/Sao-Paulo',
  redFlags: [
    { label: 'Phone/Camera Theft', frequency: 'Extremely Common', icon: 'Smartphone' },
    { label: 'Armed Robbery', frequency: 'Very Common', icon: 'Zap' },
    { label: 'Express Kidnapping', frequency: 'Common', icon: 'AlertTriangle' },
    { label: 'Pickpocketing (Metro/Buses)', frequency: 'Very Common', icon: 'Hand' },
    { label: 'Sexual Harassment', frequency: 'Common', icon: 'UserX' },
    { label: 'Fake Police Scams', frequency: 'Occasional', icon: 'Shield' }
  ],
  culturalExpectations: {
    dressCode: 'São Paulo is fashion-conscious - dress well to blend in and stay safe. Appearance matters greatly in Brazilian culture. Avoid displaying expensive items, jewelry, or designer clothing that attracts thieves. Dress conservatively for safety: covered shoulders, no short shorts. Business casual appropriate for upscale areas. Comfortable, closed-toe shoes essential for walking on uneven streets.',
    behaviorNorms: [
      'Brazilians are warm and physical - expect cheek kisses as greetings (usually one kiss in São Paulo).',
      'Be friendly and social - Brazilians appreciate warmth and conversation.',
      'Learn basic Portuguese phrases - effort is highly appreciated and improves safety.',
      'Tipping is expected: 10% service charge often included, additional tip appreciated.',
      'Lunch is the main meal (12-2 PM), dinner is late (8-10 PM).',
      'Football (soccer) is extremely important culturally - show interest and respect.',
      'Be patient with "Brazilian time" - punctuality is flexible.',
      'Maintain eye contact during conversations - shows respect and sincerity.',
      'Use hand gestures sparingly - some may be offensive.',
      'Always greet people when entering shops or restaurants.'
    ],
    perception: 'Solo female travelers are still relatively uncommon in São Paulo and may attract attention. Brazilian culture is social and family-oriented, so traveling alone may seem unusual to locals. While Brazilians are generally friendly and helpful, solo women face higher risks due to crime rates. Conservative behavior and appearance are recommended for safety. Foreign women may experience catcalling and unwanted attention, especially if appearing wealthy or tourist-like.'
  },
  youtubeVideo: {
    videoId: "tvaXa7HS7ow"
  }
};

export default saoPaulo;