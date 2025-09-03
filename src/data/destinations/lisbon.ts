import { Destination } from './types';

const lisbon: Destination = {
    city: 'Lisbon',
    country: 'Portugal',
    continent: 'Europe',
    countryCode: 'pt',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 245,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.2,
        context: 'Lisbon is very safe at night, particularly in tourist areas and neighborhoods like Chiado, Bairro Alto, and Príncipe Real. The city has excellent street lighting and regular police patrols. While petty crime can occur in busy nightlife areas, violent incidents are extremely rare. Solo women report feeling comfortable walking at night in central areas.'
      },
      publicTransit: {
        score: 8.8,
        context: 'Lisbon\'s public transport (metro, trams, buses) is modern, clean, and very safe. The iconic Tram 28 is well-monitored despite being crowded with tourists. Metro stations have security cameras and staff presence. The transport system is reliable and incidents are rare. Watch belongings during rush hour.'
      },
      walkingAlone: {
        score: 8.4,
        context: 'Walking alone in Lisbon is very safe during day and night. The city has a relaxed, welcoming culture and locals are generally helpful. Hills can be steep, so comfortable shoes are essential. Most neighborhoods are well-lit and have good foot traffic even in evenings.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Chiado',
          description: 'Upscale shopping and cultural district with excellent safety record. Well-patrolled area with luxury stores, cafes, and the famous Carmo Ruins. Very safe day and night with good lighting and active street life.'
        },
        {
          name: 'Príncipe Real',
          description: 'Trendy neighborhood popular with young professionals and tourists. Excellent restaurants, boutique shops, and beautiful Príncipe Real Garden. Very safe with low crime rates and friendly local community.'
        },
        {
          name: 'Alfama',
          description: 'Historic neighborhood with narrow cobblestone streets and traditional Fado music. Generally safe but can be confusing to navigate. Stay on main routes at night and be cautious of steep, poorly lit alleys.'
        },
        {
          name: 'Bairro Alto',
          description: 'Famous nightlife district that\'s very safe despite being busy. Well-patrolled area with lots of bars and restaurants. Can get crowded and noisy at night but violent crime is rare. Watch for pickpockets in busy areas.'
        },
        {
          name: 'Santos',
          description: 'Design district with art galleries, trendy restaurants, and Design Museum. Safe area with good lighting and regular foot traffic. Popular with creative professionals and tourists.'
        },
        {
          name: 'Estrela',
          description: 'Quiet residential neighborhood with the beautiful Estrela Basilica and Garden. Very safe family area with low crime rates and peaceful atmosphere. Good for accommodation.'
        }
      ],
      caution: ['Some areas of Martim Moniz at night', 'Steep narrow alleys in Alfama after dark'],
      avoid: ['Cova da Moura area', 'Some outlying suburbs late at night']
    },
    accommodations: [
      {
        name: 'The Lumiares Hotel & Spa',
        type: 'hotel',
        features: ['Luxury hotel', 'Central location', '24/7 security', 'Female-friendly'],
        rating: 9.1,
        notes: 'Luxury boutique hotel in Chiado with excellent security and concierge services for solo female travelers.',
        link: 'https://www.thelumiares.com/'
      },
      {
        name: 'Lisb\'On Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Modern security', 'Social atmosphere'],
        rating: 8.7,
        notes: 'Popular hostel with female-only dorms and excellent security measures. Great for meeting other travelers.',
        link: 'https://www.lisbonhostel.com/'
      },
      {
        name: 'Yes! Lisbon Hostel',
        type: 'hostel',
        features: ['Women-only rooms', 'Rooftop terrace', 'Central Chiado location'],
        rating: 8.9,
        notes: 'Modern hostel with women-only accommodations and great location in safe Chiado district.',
        link: 'https://www.yeslisbon.com/'
      },
      {
        name: 'Home Lisbon Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Cozy atmosphere', 'Safe neighborhood'],
        rating: 8.5,
        notes: 'Small, intimate hostel with female dorms and homey atmosphere in safe residential area.',
        link: 'https://www.homelisbon.com/'
      },
      {
        name: 'Dear Lisbon Gallery House',
        type: 'boutique hotel',
        features: ['Design hotel', 'Art gallery', 'Safe São Bento area', 'Co-working space'],
        rating: 9.0,
        notes: 'Best overall boutique hotel with stunning restaurant and art gallery in creative São Bento district. Perfect for solo female travelers seeking culture and safety.',
        costRange: '€80-120/night',
        safetyLevel: 'highest'
      },
      {
        name: 'Alecrim ao Chiado',
        type: 'mid-range hotel',
        features: ['Central Chiado location', 'Air conditioning', 'Modern security', 'Walking distance to attractions'],
        rating: 8.8,
        notes: 'Right in heart of Chiado shopping district. Air conditioning essential for summer. Excellent value for central location.',
        costRange: '€60-90/night',
        safetyLevel: 'high'
      },
      {
        name: 'Sant Jordi Hostels Lisbon',
        type: 'hostel',
        features: ['Female-only dorms', 'Mixed dorms', 'Private rooms', 'Near public transport', 'Social activities'],
        rating: 8.6,
        notes: 'Fun, friendly environment perfect for solo female travelers. Wide range of room options. Close to public transportation.',
        costRange: '€20-35/night',
        safetyLevel: 'high'
      },
      {
        name: 'Good Morning Lisbon Hostel',
        type: 'social hostel',
        features: ['Historic center location', 'Daily happy hour', 'Group activities', 'Walking tours', 'Female dorms'],
        rating: 8.7,
        notes: 'Designed for making friends with complimentary events. Perfect for solo travelers wanting social atmosphere. Centrally located.',
        costRange: '€18-30/night',
        safetyLevel: 'high'
      },
      {
        name: 'Safestay Bairro Alto',
        type: 'hostel',
        features: ['Historic building', 'Central Bairro Alto', 'Female dorms', 'Rooftop terrace', '24/7 security'],
        rating: 8.4,
        notes: 'Historic hostel in vibrant Bairro Alto nightlife district. Great for solo female travelers who want nightlife access with safety.',
        costRange: '€22-38/night',
        safetyLevel: 'high'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Comfortable walking shoes essential for Lisbon's hills and cobblestones
• Light layers for variable weather - can be cool in mornings/evenings
• Modest dress for churches and religious sites
• Avoid flashy jewelry in tourist areas
• Bring a light jacket for ocean breezes`,
      firstTimers: `• Lisbon is very safe for solo women with basic precautions
• Learn basic Portuguese phrases - locals appreciate the effort
• Use official taxis or Uber for late night transport
• Save emergency number 112 and tourist police contacts
• Stay hydrated when walking the hills - carry water`,
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'CP Urban',
        'Bolt',
        'Citymapper'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Lisbon exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Portugal safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while exploring', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing useful for solo travel in Europe', rating: 4.1 },
        { name: 'CP Urban', link: 'https://www.cp.pt/passageiros/en', description: 'Official Portuguese rail app for trains to Sintra, Porto and beyond', rating: 4.4 },
        { name: 'Bolt', link: 'https://bolt.eu/', description: 'Popular European ride-hailing app with driver verification in Lisbon', rating: 4.3 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best app for navigating Lisbon trams, metros and buses safely', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Socorro!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Call the police!',
          local: 'Chame a polícia!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I need a doctor.',
          local: 'Preciso de um médico.',
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
          local: 'Por favor, deixe-me em paz.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Não me sinto segura.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Can you help me?',
          local: 'Pode ajudar-me?',
          localLanguage: 'Portuguese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Lisbon is casual but neat. Portuguese dress modestly for churches and religious sites. Business casual is appropriate for nicer restaurants. Comfortable walking shoes are essential due to hills and cobblestones. Beach wear only for coastal areas.',
      behaviorNorms: [
        'Greet with handshakes and maintain eye contact.',
        'Portuguese appreciate politeness and patience.',
        'Learn basic Portuguese phrases - locals are helpful when you try.',
        'Tipping 10% is customary in restaurants.',
        'Meal times are later - lunch 1-3pm, dinner 8-10pm.',
        'Be patient with service - Portuguese culture values taking time.',
        'Respect religious sites and dress modestly in churches.',
        'Public displays of affection should be modest.',
        'Queue politely and wait your turn.',
        'Show interest in Portuguese culture and history.'
      ],
      perception: 'Solo women travelers are very welcome in Lisbon. Portuguese culture is warm and hospitable, and locals are generally helpful to tourists. The city is progressive and women can dine alone, explore attractions, and use transport independently without issues. Street harassment is rare.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but very safe.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: [
        'Use official ATMs and avoid currency exchange at tourist areas for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Menu Scams',
        description: 'Some restaurants in tourist areas may have inflated "tourist menus". Ask for regular menu and check prices.',
        severity: 'low'
      },
      {
        title: 'Tram 28 Pickpocketing',
        description: 'The famous tram gets very crowded. Keep valuables secure and be aware of your surroundings.',
        severity: 'medium'
      },
      {
        title: 'Fake Fado Shows',
        description: 'Book Fado shows through reputable venues. Some tourist traps offer poor quality performances.',
        severity: 'low'
      }
    ],
    languages: ['Portuguese', 'English (widely spoken in tourist areas)'],
    daytimeSafetyPercent: 87.2,
    nighttimeSafetyPercent: 76.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lisbon',
    redFlags: [
      { label: 'Street Harassment & Catcalling', frequency: 'Common for solo women at night', icon: 'AlertTriangle' },
      { label: 'Tram 28 Pickpocketing Hub', frequency: 'Daily occurrences reported', icon: 'Hand' },
      { label: 'Martim Moniz Area After Dark', frequency: 'High harassment risk for women alone', icon: 'MapPin' },
      { label: 'Tourist Overcharging & Menu Scams', frequency: 'Frequent in tourist zones', icon: 'DollarSign' },
      { label: 'Steep Cobblestone Falls', frequency: 'Regular incidents reported', icon: 'Mountain' },
      { label: 'Fake Drug Dealers Targeting Tourists', frequency: 'Common in Bairro Alto', icon: 'Shield' }
    ],
    culturalDos: [
      'Learn basic Portuguese greetings.',
      'Dress modestly in religious sites.',
      'Be patient with service.',
      'Try local cuisine.',
      'Respect Portuguese customs.'
    ],
    culturalDonts: [
      "Don't rush meals - enjoy the experience.",
      "Don't wear beach clothes in the city.",
      "Don't be impatient with slower service.",
      "Don't ignore steep terrain when planning walks.",
      "Don't skip trying pastéis de nata."
    ],
    womensConfidenceScore: {
      score: 82.4,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Lisbon"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 92, source: 'Portugal Tourism Safety Report 2025', sourceUrl: 'https://www.visitportugal.com/safety' },
      { label: 'Nightlife', confidence: 81, source: 'Solo Female Travel Portugal 2025', sourceUrl: 'https://www.solofemaleguide.com/portugal' },
      { label: 'Public Transport', confidence: 88, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Lisbon' },
      { label: 'Dining Alone', confidence: 89, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/lisbon/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Busy tourist areas during peak season', 'Nightlife districts late at night', 'Crowded public transport'],
      reportingRate: 72,
      legalProtection: 'Strong legal protections under Portuguese and EU law. Police take reports seriously and victims have access to support services.',
      supportResources: [
        'APAV (Portuguese Association for Victim Support): 116 006 (Mon-Fri 9am-9pm, free), +351 21 358 79 00',
        'APAV Lisbon Office: Rua José Estêvão 135-A, 1150-201 Lisboa - English-speaking staff available',
        'National Domestic Violence Helpline: 800 202 148 (24/7, free and confidential)',
        'AMCV - Women Against Violence Association: +351 213 802 165, ca@amcv.org.pt',
        'UMAR - Women\'s Support NGO: Psychological and legal support for violence victims',
        'Tourist Police Lisbon: +351 21 342 1634 (specialized in assisting foreign visitors)',
        'Emergency Services: 112 (24/7 emergency number for immediate danger)',
        'SMS Support: Text 3060 for confidential domestic violence support',
        'British Embassy Victim Support: +351 21 392 4000 (for UK nationals)',
        'US Embassy Citizen Services: +351 21 770 2122 (for US citizens)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital de Santa Maria (CHLN)',
          address: 'Av. Prof. Egas Moniz, 1649-035 Lisboa',
          phone: '+351 21 780 5000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'General Medicine', 'Obstetrics & Gynecology'],
          link: 'https://www.chln.min-saude.pt/',
          notes: 'Largest public hospital in Lisbon, comprehensive emergency services, English-speaking staff available'
        },
        {
          name: 'Hospital da Luz Lisboa',
          address: 'Avenida Lusíada 100, 1500-650 Lisboa',
          phone: '+351 21 770 4000',
          emergency: true,
          specialties: ['24h Emergency Care', 'Women\'s Medicine', 'Cardiology', 'International Patients'],
          link: 'https://www.hospitaldaluz.pt/lisboa',
          notes: 'Premium private hospital with 24/7 urgent care, modern facilities, multilingual staff'
        },
        {
          name: 'Hospital Pulido Valente (CHLN)',
          address: 'Alameda das Linhas de Torres 117, 1769-001 Lisboa',
          phone: '+351 21 751 9900',
          emergency: true,
          specialties: ['Emergency Medicine', 'Internal Medicine', 'Surgery', 'Women\'s Health'],
          link: 'https://www.chln.min-saude.pt/',
          notes: 'Major public hospital, part of CHLN network, comprehensive medical services'
        },
        {
          name: 'Centro Hospitalar de Lisboa Central - Hospital São José',
          address: 'Rua José António Serrano, 1150-199 Lisboa',
          phone: '+351 21 884 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma', 'Surgery', 'Obstetrics'],
          link: 'https://www.chlc.min-saude.pt/',
          notes: 'Central location, major trauma center, 24/7 emergency services'
        }
      ],
      pharmacies: [
        {
          name: 'Farmácia Ibéria (24/7)',
          address: 'Av. da Liberdade 2, 1250-144 Lisboa',
          phone: '+351 21 354 2020',
          hours: '24 hours daily',
          emergency: true,
          link: 'https://www.farmaciaiberia.pt/',
          notes: 'Central location, 24/7 emergency pharmacy, English-speaking staff, emergency contraception available'
        },
        {
          name: 'Farmácia Central (Rossio)',
          address: 'Rossio 62-64, 1100-200 Lisboa',
          phone: '+351 21 342 1418',
          hours: 'Mon-Fri 8:00-20:00, Sat 9:00-19:00',
          emergency: false,
          link: 'https://www.farmaciacentral.pt/',
          notes: 'Historic central pharmacy, women\'s health products, tourist-friendly location'
        },
        {
          name: 'Farmácia do Campo Pequeno (24/7)',
          address: 'Av. da República 2B, 1050-191 Lisboa',
          phone: '+351 21 797 3043',
          hours: '24 hours daily',
          emergency: true,
          notes: '24/7 emergency services, near metro station, comprehensive women\'s health section'
        },
        {
          name: 'Farmácia Continente Amadora (24/7)',
          address: 'Estrada da Circunvalação, 2720-229 Amadora',
          phone: '+351 21 497 8200',
          hours: '24 hours daily',
          emergency: true,
          notes: 'Large 24/7 pharmacy in shopping center, wide range of products, parking available'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Lisbon: +351 21 780 5000',
          'Family Planning Portugal: +351 21 386 7890'
        ],
        gynecologists: [
          'Dr. Silva - Hospital Santa Maria: +351 21 780 5000'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Wide variety of international brands'
        ]
      },
      vaccinations: [
        'No specific vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Strong ocean currents at beaches',
        'UV exposure - use sunscreen'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Lisbon',
        address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
        phone: '+351 21 727 3300',
        email: 'lisbonacs@state.gov',
        emergency: '+351 21 727 3300',
        link: 'https://pt.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Lisbon',
          address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
          phone: '+351 21 727 3300',
          link: 'https://pt.usembassy.gov/'
        },
        {
          name: 'British Embassy Lisbon',
          address: 'Rua de São Bernardo 33, 1249-082 Lisboa',
          phone: '+351 21 392 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-lisbon'
        },
        {
          name: 'German Embassy Lisbon',
          address: 'Campo dos Mártires da Pátria 38, 1169-043 Lisboa',
          phone: '+351 21 881 0210',
          link: 'https://lissabon.diplo.de/'
        },
        {
          name: 'French Embassy Lisbon',
          address: 'Rua Santos-o-Velho 5, 1249-079 Lisboa',
          phone: '+351 21 393 9100',
          link: 'https://pt.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Lisbon',
          address: 'Rua do Salitre 1, 1269-052 Lisboa',
          phone: '+351 21 347 2381',
          link: 'https://www.exteriores.gob.es/embajadas/lisboa'
        },
        {
          name: 'Australian Embassy Lisbon',
          address: 'Avenida da Liberdade 200, 1250-147 Lisboa',
          phone: '+351 21 310 1500',
          link: 'https://portugal.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Lisbon',
          address: 'Avenida da Liberdade 198-200, 1250-147 Lisboa',
          phone: '+351 21 316 4600',
          link: 'https://www.canadainternational.gc.ca/portugal/'
        },
        {
          name: 'Netherlands Embassy Lisbon',
          address: 'Rua do Sacramento à Lapa 16, 1200-394 Lisboa',
          phone: '+351 21 714 0900',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/portugal'
        },
        {
          name: 'Danish Embassy Lisbon',
          address: 'Rua Castilho 16-4°, 1250-070 Lisboa',
          phone: '+351 21 381 2000',
          link: 'https://portugal.um.dk/'
        },
        {
          name: 'Swiss Embassy Lisbon',
          address: 'Travessa do Patrocínio 1, 1350-229 Lisboa',
          phone: '+351 21 394 0040',
          link: 'https://www.eda.admin.ch/lisboa'
        },
        {
          name: 'Indian Embassy Lisbon',
          address: 'Rua Pero da Covilhã 16, 1400-297 Lisboa',
          phone: '+351 21 301 0210',
          link: 'https://www.eoilisbon.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Lisbon',
        address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
        phone: '+351 21 727 3300',
        email: 'lisbonacs@state.gov',
        link: 'https://pt.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under Portuguese and EU law',
        'Equal rights and protection against discrimination',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Portugal: +351 21 386 7890',
        'Free legal advice for EU citizens',
        'English-speaking lawyers available through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency)',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.8,
          recommendations: ['Clean, modern, and very safe system'],
          companies: ['Metropolitano de Lisboa'],
          link: 'https://www.metrolisboa.pt/'
        },
        {
          type: 'Tram',
          safety: 8.5,
          recommendations: ['Iconic Tram 28 - watch for pickpockets due to crowds'],
          companies: ['Carris'],
          link: 'https://www.carris.pt/'
        },
        {
          type: 'Uber',
          safety: 9.0,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/pt/en/'
        }
      ],
      nightTravel: {
        safety: 8.2,
        warnings: [
          'Some steep areas poorly lit at night',
          'Ocean areas can be windy and isolated'
        ],
        alternatives: [
          'Night buses available',
          'Uber available 24/7',
          'Taxis readily available'
        ]
      },
      verifiedProviders: [
        {
          name: 'Metro Lisboa',
          type: 'Public Transport',
          contact: '+351 21 350 0115',
          safety: 8.8
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 9.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances'
      ],
      safeNeighborhoods: [
        'Chiado',
        'Príncipe Real',
        'Santos',
        'Estrela',
        'Avenidas Novas'
      ],
      womensOnly: [
        {
          name: 'Yes! Lisbon Hostel',
          type: 'Hostel',
          features: ['Women-only rooms', 'Central location', 'Modern security'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.1,
          comments: 'Felt very safe throughout my stay. Locals are helpful and friendly.',
          date: '2025-01-20'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Many cafes offer free WiFi',
        'Use VPN for sensitive transactions',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake booking sites',
        'Phishing emails from fake hotels',
        'Social media accommodation scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Portugal',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides strong protection',
        'Use secure payment methods',
        'Keep document copies in cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Tram 28',
          date: '2025-01-18',
          description: 'Tourist reported pickpocketing on crowded tram',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Wear comfortable shoes - Lisbon has many steep hills',
          author: 'Solo Traveler',
          date: '2025-01-22',
          upvotes: 67
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Portugal is very safe for travelers. Exercise normal precautions.',
      reason: 'Generally safe country with low crime rates.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/portugal-travel-advisory.html',
      soloTravelerAdvice: [
        'Is Lisbon safe for female solo travelers? Absolutely - rated as one of Europe\'s safest capitals',
        'Excellent destination for solo female travel safety with helpful, English-speaking locals',
        'Very safe with good public transport and walkable city center for women traveling alone',
        'Solo travel safety for women beginners is exceptional - perfect first European destination',
        'Try local cuisine and Fado culture safely in central neighborhoods',
        'Watch for steep hills when planning walks - use funiculars for safe navigation'
      ]
    },
    crimeStatistics: {
      violentCrime: 5.8,
      propertyCrime: 1842,
      sexualAssault: 8.2,
      kidnapping: 0.1,
      source: 'Portuguese National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Moovit',
          purpose: 'Public transport navigation',
          rating: 4.5
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Tourist Police',
          number: '+351 21 342 1634',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Avoid Martim Moniz Area After Dark',
        description: 'Solo women report guaranteed catcalling and staring from groups of men in Martim Moniz area after dark. Choose well-lit central areas like Chiado or Bairro Alto for evening activities.',
        severity: 'high',
        sourceName: 'Reddit Solo Female Travel Community',
        sourceUrl: 'https://www.reddit.com/r/solotravel/'
      },
      {
        title: 'Tram 28 Pickpocket Prevention Strategy',
        description: 'Tram 28 is pickpocket central with daily occurrences reported. Keep valuables in front pockets, stay alert during busy tourist hours, and consider using metro/buses for safer travel.',
        severity: 'medium',
        sourceName: 'Solo Female Travel Forums',
        sourceUrl: 'https://www.tripadvisor.com/'
      },
      {
        title: 'Authentic Fado Show Recommendations',
        description: 'Book Fado shows at Casa de Linhares or Tasca do Chico for authentic experiences. Avoid tourist trap venues with fake performances that overcharge and provide poor quality entertainment.',
        severity: 'low',
        sourceName: 'Local Lisbon Guides',
        sourceUrl: 'https://www.lisbonlux.com/'
      },
      {
        title: 'Choose Safe Central Neighborhoods',
        description: 'Use central neighborhoods like Chiado, Baixa, or Príncipe Real for accommodation. These areas have well-lit streets with good security, 24/7 activity, and easy access to attractions.',
        severity: 'low',
        sourceName: 'Solo Travel Safety Guide',
        sourceUrl: 'https://www.globe-gazers.com/'
      },
      {
        title: 'Navigate Lisbon\'s Hills Safely',
        description: 'Master Lisbon\'s hills with comfortable walking shoes and use elevators/funiculars when possible. Cobblestone streets cause frequent falls, especially when wet during rainy season.',
        severity: 'medium',
        sourceName: 'Lisbon Tourism Board',
        sourceUrl: 'https://www.visitlisboa.com/'
      },
      {
        title: 'Is Lisbon Safe for Women Solo Travelers?',
        description: 'Yes, Lisbon is very safe for solo female travel, but avoid walking alone at night in Intendente and Arroios areas. Stick to central neighborhoods with good lighting and regular foot traffic.',
        severity: 'low',
        sourceName: 'Women Solo Travel Safety Reports',
        sourceUrl: 'https://www.theladywhotravels.com/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $70 USD / day',
        description: 'Lisbon offers excellent value for money with good safety standards. Solo female travel safety in Lisbon is exceptional compared to other European capitals.',
        tip: 'Mid-range options provide great safety and comfort for women solo travelers looking to balance budget with security.'
      },
      accommodation: [
        {
          type: 'Budget Hostel (Female Dorms)',
          avgCost: '$15-25/night',
          safetyNote: 'Female-only dorms available in central areas - highly recommended for solo women',
          safetyLevel: 'high',
          bestAreas: 'Chiado, Bairro Alto'
        },
        {
          type: 'Premium Hostel (Private Rooms)',
          avgCost: '$25-40/night',
          safetyNote: 'Private rooms with shared facilities, excellent security, social atmosphere',
          safetyLevel: 'highest',
          bestAreas: 'Chiado, Baixa'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$50-90/night',
          safetyNote: 'Excellent security, central locations, AC for summer comfort',
          safetyLevel: 'highest',
          bestAreas: 'Chiado, Avenida da Liberdade'
        },
        {
          type: 'Boutique Hotel',
          avgCost: '$80-150/night',
          safetyNote: 'Premium safety, concierge services, cultural experiences',
          safetyLevel: 'highest',
          bestAreas: 'São Bento, Príncipe Real'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$120-300/night',
          safetyNote: '24/7 security, premium amenities, perfect for solo travelers prioritizing safety',
          safetyLevel: 'maximum',
          bestAreas: 'Avenida da Liberdade, Lapa'
        }
      ],
      transport: [
        {
          method: 'Metro (Subway)',
          cost: '$1.35-2.20/ride',
          safetyDescription: 'Excellent safety record, clean, modern trains with security cameras and emergency buttons',
          safetyLevel: 'highest',
          femaleTraverlerTips: 'Very safe for solo women, avoid rush hour crowds on popular tourist lines'
        },
        {
          method: 'Trams (Historical)',
          cost: '$1.35-3.00/ride',
          safetyDescription: 'Generally safe but Tram 28 has frequent pickpocketing - stay very alert',
          safetyLevel: 'medium',
          femaleTraverlerTips: 'Keep valuables in front pockets, especially on Tram 28 during peak tourist hours'
        },
        {
          method: 'Public Buses',
          cost: '$1.35-2.20/ride',
          safetyDescription: 'Safe and extensive network covering entire city with real-time tracking',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Excellent for reaching areas not covered by metro, well-monitored'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe in central areas during day and night, excellent street lighting',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Wear comfortable shoes for cobblestones and hills, stick to well-lit main streets at night'
        },
        {
          method: 'Uber/Bolt',
          cost: '$3-12/ride',
          safetyDescription: 'Safe and reliable ride-sharing with GPS tracking and driver ratings',
          safetyLevel: 'highest',
          femaleTraverlerTips: 'Perfect for late night returns or reaching hilltop viewpoints safely'
        },
        {
          method: 'Official Taxis',
          cost: '$4-15/ride',
          safetyDescription: 'Licensed taxis are very safe with regulated meters and professional drivers',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Use taxi ranks or phone bookings, all drivers speak basic English'
        },
        {
          method: 'Elevador/Funiculars',
          cost: '$3.80/ride',
          safetyDescription: 'Historic elevators connecting Baixa to Bairro Alto safely navigate steep hills',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Great alternative to walking steep hills, popular Elevador de Santa Justa offers amazing views'
        }
      ],
      budgetTips: [
        'Buy Lisboa Card (€22-42) for free public transport + museum entries - safer than buying individual tickets on street',
        'Choose female-only hostel dorms in Chiado/Baixa (€20-25/night) over mixed dorms for solo female travel safety',
        'Book accommodations in central neighborhoods (Chiado, Baixa) - costs €10-20 more but eliminates unsafe late-night transport',
        'Use official metro/buses instead of Tram 28 to avoid pickpocketing - same cost but much safer for solo women',
        'Eat at Time Out Market for safe, budget dining (€8-15/meal) instead of street food in tourist traps',
        'Book day tours through reputable operators (€25-40) rather than exploring Alfama/Fado venues alone at night',
        'Invest in Uber/Bolt for late night returns (€5-12) instead of walking - small cost for major safety improvement',
        'Stay in neighborhoods with 24/7 activity (Bairro Alto, Chiado) - vibrant areas cost similar but offer natural safety',
        'Pack comfortable walking shoes - saves money on transport while keeping you safe on Lisbon\'s steep cobblestone hills'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Greet with handshake and eye contact or cheek kisses among friends - Portuguese value warm, respectful personal interactions',
      'Say "Obrigada" (women) or "Obrigado" (men) for thank you - using correct gender form shows cultural awareness',
      'Dress smartly in neat, casual clothing - avoid overly casual beach wear in city areas, Portuguese appreciate good appearance',
      'Tip about 10% in restaurants and leave it on the table - standard practice showing appreciation for service',
      'Learn basic Portuguese phrases - even simple efforts are appreciated and help build rapport with locals'
    ],
    culturalDonts: [
      'Don\'t expect strict punctuality in social settings - Portuguese often arrive 15-30 minutes late and this is normal',
      'Don\'t start eating before everyone is served - wait for the group and always use proper utensils',
      'Don\'t wear revealing clothing in churches or historical sites - cover shoulders and knees out of respect',
      'Don\'t be loud on public transport - maintain quiet, respectful behavior and offer seats to elderly passengers',
      'Don\'t be surprised by relaxed pace of life - embrace Portuguese "slow living" culture rather than rushing'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default lisbon;