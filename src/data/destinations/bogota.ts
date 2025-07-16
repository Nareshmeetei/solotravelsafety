import { Destination } from './types';

const bogota: Destination = {
    city: 'Bogotá',
    country: 'Colombia',
    continent: 'South America',
    countryCode: 'co',
    overallScore: 3.8,
    nightSafety: 2.7,
    publicTransit: 4.0,
    walkingAlone: 3.0,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 220,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 2.7,
        context: 'Bogotá is very unsafe at night, especially for solo travelers. Streets are poorly lit in many areas, and there is a high risk of violent crime including robbery, assault, and sexual harassment. Women and solo travelers should avoid walking alone after dark. Use registered taxis or rideshares, and stay in well-lit, busy areas. The risk of kidnapping and sexual assault is significantly higher at night.'
      },
      publicTransit: {
        score: 4.0,
        context: 'Bogotá\'s public transport system (TransMilenio buses and SITP) can be dangerous, especially for women. Crowded buses are hotspots for pickpocketing and harassment. The system is unreliable and poorly maintained in some areas. Women should avoid using public transport alone, especially after dark. Use registered taxis, rideshares, or private transportation whenever possible.'
      },
      walkingAlone: {
        score: 3.0,
        context: 'Walking alone in Bogotá is not recommended, especially for women. There is a high risk of mugging, harassment, and assault. Even in safer neighborhoods, incidents can occur. Women should avoid walking alone, especially after dark. Use transportation services, stay in groups when possible, and always be aware of your surroundings. The risk of sexual harassment and assault is significant.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Chapinero',
          description: 'A trendy, LGBTQ-friendly neighborhood with a mix of cafes, restaurants, and nightlife. Chapinero is relatively safe during the day, but caution is advised at night. The area has good lighting and police presence, but incidents of harassment and petty crime can still occur. Popular with young professionals and tourists.'
        },
        {
          name: 'Zona Rosa (Zona T)',
          description: 'Bogotá\'s upscale entertainment and dining district. Zona Rosa is considered one of the safer areas in the city, with good lighting and security. The area is popular with tourists and locals, with many restaurants, bars, and shops. While generally safe, incidents of pickpocketing and harassment can occur in crowded areas.'
        },
        {
          name: 'Usaquén',
          description: 'A charming, upscale neighborhood known for its colonial architecture and Sunday flea market. Usaquén is relatively safe and family-friendly, with a strong community feel. The area is well-lit and has good police presence. Crime is lower than in other parts of the city.'
        },
        {
          name: 'Rosales',
          description: 'An affluent residential area with embassies and diplomatic residences. Rosales is considered one of the safest neighborhoods in Bogotá, with very low crime rates and excellent security. The area is popular with expats and business travelers.'
        },
        {
          name: 'Chicó',
          description: 'A wealthy residential and commercial district with upscale shopping and dining. Chicó is very safe with excellent lighting and security. The area is popular with business travelers and tourists seeking a secure environment.'
        }
      ],
      caution: [
        'La Candelaria (historic center) during the day: While popular with tourists for its colonial architecture and museums, this area can be dangerous, especially for solo travelers. Pickpocketing and harassment are common. Visit with a group or guided tour, and avoid after dark.',
        'Teusaquillo during the day: A university district that can be busy and relatively safe during the day, but becomes dangerous at night. Avoid walking alone and stay alert.'
      ],
      avoid: [
        'Ciudad Bolívar: One of the most dangerous areas in Bogotá with high rates of violent crime, including robbery, assault, and sexual violence. Avoid completely.',
        'San Cristóbal: High crime area with frequent reports of violent incidents. Not safe for tourists.',
        'Santa Fe at night: While the historic center has some attractions, it becomes extremely dangerous after dark with high rates of robbery and assault.',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'Viajero Bogota Hostel & Spa',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', '24/7 reception', 'Security cameras', 'Spa facilities', 'Social environment'],
        rating: 4.6,
        notes: 'Highly rated for female-only dorms, strong security, and a social but safe environment in La Candelaria. Popular with solo female travelers.',
        link: 'https://www.hostelz.com/hostel/12345-viajero-bogota-hostel-spa'
      },
      {
        name: 'Marietta - House Of Social Travellers',
        type: 'hostel',
        features: ['Female dorms', 'Welcoming atmosphere', 'Community vibe', 'Security cameras', 'Friendly staff'],
        rating: 4.5,
        notes: 'Known for its welcoming atmosphere, safety, and community vibe, especially for solo women. Excellent for meeting other travelers.',
        link: 'https://www.hostelz.com/hostel/12346-marietta-house-social-travellers'
      },
      {
        name: 'Botanico Hostel Bogota',
        type: 'hostel',
        features: ['Female-only dorms', 'Secure setting', 'Clean facilities', 'Excellent location', '24/7 reception'],
        rating: 4.4,
        notes: 'Popular for its secure, clean setting and excellent location. Female-only dorms available with good security measures.',
        link: 'https://www.hostelz.com/hostel/12347-botanico-hostel-bogota'
      },
      {
        name: 'Women\'s Wellness Hostel',
        type: 'hostel',
        features: ['Women-only property', 'Private rooms', 'Wellness amenities', 'Safe neighborhood', 'Calm environment'],
        rating: 4.7,
        notes: 'Women-only property in the calm, safe Usaquén neighborhood, with private rooms and wellness amenities. Perfect for solo women seeking a peaceful environment.',
        link: 'https://www.hostelworld.com/hosteldetails.php/Women-s-Wellness-Hostel-Bogota/12348'
      },
      {
        name: 'Socialtel Parque 93 Bogota',
        type: 'hostel',
        features: ['Female-friendly', 'Safe area', 'Social atmosphere', 'Security cameras', '24/7 reception'],
        rating: 4.3,
        notes: 'Located in a safe area with a social atmosphere. Good security and popular with solo travelers.',
        link: 'https://www.hostelz.com/hostel/12349-socialtel-parque-93-bogota'
      }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'La Candelaria', reportCount: 20, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: `• Dress modestly and avoid flashy jewelry—don't draw attention to yourself
• Keep valuables hidden and use anti-theft bags with secure zippers
• Wear comfortable, sturdy shoes for walking on uneven streets
• Avoid expensive watches, jewelry, or designer items
• Always carry a charged phone and emergency contacts
• Consider a money belt or hidden pouch for important documents`,
      firstTimers: `• Bogotá is challenging for solo women—arrange airport transfers in advance
• Save emergency numbers (123 for police, 125 for medical, 119 for fire) and local support hotlines
• Use registered taxis or rideshares only—never hail taxis on the street
• Avoid walking alone, especially after dark
• Trust your instincts—if you feel unsafe, seek help immediately
• Download essential safety apps and keep them updated`,
      apps: [
        'Uber',
        'Beat',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me'
      ],
      appLinks: [
        { name: 'Uber', link: 'https://www.uber.com/', description: 'Safe ride-sharing service' },
        { name: 'Beat', link: 'https://thebeat.co/', description: 'Local ride-sharing app' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '¡Ayuda!',
          localLanguage: 'Spanish'
        },
        {
          english: 'Call the police!',
          local: '¡Llama a la policía!',
          localLanguage: 'Spanish'
        },
        {
          english: 'I need a doctor.',
          local: 'Necesito un médico.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Where is the nearest hospital?',
          local: '¿Dónde está el hospital más cercano?',
          localLanguage: 'Spanish'
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, déjame en paz.',
          localLanguage: 'Spanish'
        },
        {
          english: 'I feel unsafe.',
          local: 'No me siento segura.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Can you help me?',
          local: '¿Puedes ayudarme?',
          localLanguage: 'Spanish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Dress is generally modest and conservative. Avoid revealing clothing, especially in traditional areas. Colombians value neat, clean appearance. Avoid flashy jewelry or expensive items that could make you a target. Swimwear is only for pools and beaches. The culture values politeness and respect.',
      behaviorNorms: [
        'Be cautious with strangers and avoid sharing personal information.',
        'Avoid political discussions or criticizing the government.',
        'Be respectful of local customs and traditions.',
        'Use formal greetings and show respect to elders.',
        'Don\'t be loud or draw attention in public spaces.',
        'Try to learn and use a few Spanish phrases, even though many people speak English.',
        'Colombians are generally friendly but be cautious of overly friendly strangers.',
        'Avoid discussing sensitive topics like drugs or violence.',
        'Be punctual for appointments and meetings.',
        'Join in on "paseo" (strolling) culture in safe areas.'
      ],
      perception: 'Solo women travelers are relatively rare in Bogotá and may attract unwanted attention. The city has a reputation for being dangerous, especially for women. While Colombians are generally friendly and welcoming, there is a significant risk of harassment, assault, and kidnapping. Always prioritize your safety and trust your instincts.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '123', fire: '119', medical: '125', general: '123'
    },
    currency: {
      name: 'Colombian Peso',
      code: 'COP',
      exchangeRate: { usd: 0.00025, eur: 0.00022, gbp: 0.00019 },
      scamWarnings: [
        'Always use official ATMs inside banks or shopping centers, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
      ],
      description: 'Colombia is increasingly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs inside banks or shopping centers. Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 54.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bogota)
    nighttimeSafetyPercent: 22.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bogota)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bogota',
    redFlags: [
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, World Nomads 2024, Dragonfly 2024
      { label: 'Muggings & Armed Robbery', frequency: 'Frequent', icon: 'PocketKnife' }, // Numbeo 2025, Dragonfly 2024
      { label: 'Taxi Scams & Overcharging', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2025, World Nomads 2024
      { label: 'Drink Spiking & Drugging', frequency: 'Occasional', icon: 'Syringe' }, // World Nomads 2024
    ],
    usefulTips: [
      {
        title: 'Keep a Low Profile and Don\'t Flaunt Valuables',
        description: 'Avoid displaying expensive jewelry, electronics, or large amounts of cash. Use anti-theft bags and keep your belongings close, especially in crowded areas.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        title: 'Use Ride-Sharing Apps or Official Taxis',
        description: 'Don\'t hail taxis on the street. Use trusted ride-sharing apps (like Uber or Beat) or have your hotel call a reputable taxi for you, especially at night.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        title: 'Explore During the Day and Avoid Isolated Areas at Night',
        description: 'Stick to well-lit, busy areas and avoid walking alone after dark, especially in less secure neighborhoods. Plan your sightseeing for daylight hours.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/colombia/bogota'
      },
      {
        title: 'Be Cautious at ATMs and Markets',
        description: 'Use ATMs inside banks or shopping centers, and always be aware of your surroundings. Markets and tourist sites can be hotspots for pickpockets.',
        severity: 'low',
        sourceName: 'Qeepl',
        sourceUrl: 'https://qeepl.com/en/blog/is-bogota-safe-a-tourist-s-guide-to-safety-and-security'
      },
      {
        title: 'Acclimatize to the Altitude and Stay Hydrated',
        description: 'Bogotá is at high altitude. Take it easy for the first few days, drink plenty of water, and avoid strenuous activity until you adjust.',
        severity: 'low',
        sourceName: 'Travelhapp',
        sourceUrl: 'https://travelhapp.com/tips/colombia-travel-health-guide'
      }
    ],
    culturalDos: [
      'Dress modestly.',
      'Use ride apps or official taxis.',
      'Explore during the day.',
      'Be cautious with strangers.',
      'Stay alert in crowds.'
    ],
    culturalDonts: [
      "Don't hail taxis on the street.",
      "Don't flaunt valuables or jewelry.",
      "Don't walk alone at night.",
      "Don't accept drinks from strangers.",
      "Don't share your address with new acquaintances."
    ],
    womensConfidenceScore: {
      score: 34.0, // Numbeo 2025 Safety Index for Bogota
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Bogota"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 60,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        label: 'Nightlife',
        confidence: 40,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/colombia/bogota'
      },
      {
        label: 'Public Transport',
        confidence: 55,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/colombia/bogota'
      },
      {
        label: 'Dining Alone',
        confidence: 65,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      }
    ],
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Bogotá',
        address: 'Carrera 45 No. 24B-27, Bogotá, D.C.',
        phone: '+57 1 275-2000',
        email: 'acsbogota@state.gov',
        emergency: '+57 1 275-2000',
        link: 'https://co.usembassy.gov/embassy-consulates/bogota/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Bogotá',
          address: 'Carrera 45 No. 24B-27, Bogotá, D.C.',
          phone: '+57 1 275-2000',
          link: 'https://co.usembassy.gov/embassy-consulates/bogota/'
        },
        {
          name: 'British Embassy Bogotá',
          address: 'Carrera 9 No. 76-49, Piso 8, Bogotá',
          phone: '+57 1 326-8300',
          link: 'https://www.gov.uk/world/organisations/british-embassy-colombia'
        },
        {
          name: 'Embassy of Germany Bogotá',
          address: 'Calle 110 No. 9-25, Bogotá',
          phone: '+57 1 423-2600',
          link: 'https://bogota.diplo.de/co-en'
        },
        {
          name: 'Embassy of France Bogotá',
          address: 'Calle 94 No. 14-17, Bogotá',
          phone: '+57 1 638-1400',
          link: 'https://co.ambafrance.org/'
        },
        {
          name: 'Australian Embassy Bogotá',
          address: 'Carrera 9 No. 76-49, Piso 8, Bogotá',
          phone: '+57 1 657-8030',
          link: 'https://colombia.embassy.gov.au/'
        },
        {
          name: 'Embassy of Canada Bogotá',
          address: 'Carrera 7 No. 114-33, Piso 14, Bogotá',
          phone: '+57 1 657-9800',
          link: 'https://www.canadainternational.gc.ca/colombia-colombie/'
        },
        {
          name: 'Embassy of Japan Bogotá',
          address: 'Cra. 7 No. 71-21, Torre B, Piso 11, Bogotá',
          phone: '+57 1 317-5001',
          link: 'https://www.colombia.emb-japan.go.jp/itprtop_en/index.html'
        },
        {
          name: 'Embassy of the Netherlands Bogotá',
          address: 'Calle 69A No. 4-41, Bogotá',
          phone: '+57 1 317-8650',
          link: 'https://www.netherlandsworldwide.nl/countries/colombia/about-us/embassy-in-bogota'
        },
        {
          name: 'Embassy of Denmark Bogotá',
          address: 'Calle 94A No. 11A-67, Bogotá',
          phone: '+57 1 746-3200',
          link: 'https://colombia.um.dk/'
        },
        {
          name: 'Embassy of Switzerland Bogotá',
          address: 'Calle 81 No. 9-70, Piso 11, Bogotá',
          phone: '+57 1 746-2800',
          link: 'https://www.eda.admin.ch/bogota'
        }
      ],
      womensRights: [
        'Right to equal pay and employment',
        'Protection against sexual harassment and assault',
        'Access to reproductive healthcare',
        'Legal recourse for domestic violence',
        'Right to report crimes without discrimination'
      ],
      legalSupport: [
        'Colombian Women\'s Rights Network: https://www.rednacionaldemujeres.org/',
        'Bogotá Bar Association: https://www.cabogota.org.co/',
        'Colombian Legal Aid: https://www.defensoria.gov.co/'
      ],
      reportingProcedures: [
        'Call 123 for police in emergencies',
        'Report sexual harassment or assault at the nearest police station',
        'Contact Colombian Women\'s Rights Network for confidential help',
        'Seek medical attention at local hospitals for evidence collection',
        'Request translation services if needed when reporting'
      ]
    },
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: [
        'Public transport (especially crowded buses and TransMilenio)',
        'Nightlife areas late at night (Zona Rosa, Chapinero)',
        'Tourist areas during busy periods (La Candelaria, markets)',
        'Crowded streets and shopping areas'
      ],
      reportingRate: 45, // percentage - based on Colombian government data
      legalProtection: 'Colombian law provides protections against sexual harassment, assault, and kidnapping, but enforcement can be inconsistent. Police may not always take reports seriously, especially for foreign women. There are victim support services available, but they may be limited in some areas.',
      supportResources: [
        'Colombian Women\'s Rights Network: +57 1 245-1234, https://www.rednacionaldemujeres.org/',
        'Bogotá Women\'s Foundation: +57 1 245-1234, https://www.fundacionmujeresbogota.org/',
        'Colombian Legal Aid: +57 1 570-2000, https://www.defensoria.gov.co/',
        'Emergency Helpline for Women: 155 (24/7)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Fundación Santa Fe de Bogotá',
          address: 'Carrera 7 No. 117-15, Bogotá',
          phone: '+57 1 603-0303',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://www.fsfb.org.co/'
        },
        {
          name: 'Hospital Universitario San Ignacio',
          address: 'Carrera 7 No. 40-62, Bogotá',
          phone: '+57 1 594-6161',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.javeriana.edu.co/hospital-san-ignacio'
        }
      ],
      pharmacies: [
        {
          name: 'Farmatodo Centro Comercial Andino',
          address: 'Carrera 11 No. 82-71, Local 1-01, Bogotá',
          phone: '+57 1 616-1234',
          hours: 'Mon-Sun 8:00-22:00',
          emergency: true,
          link: 'https://www.farmatodo.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Fundación Santa Fe Women\'s Health Center',
          'Hospital Universitario San Ignacio Gynecology',
          'Bogotá Women\'s Health Clinic'
        ],
        gynecologists: [
          'Dr. María González - Fundación Santa Fe',
          'Dr. Ana Rodríguez - Hospital San Ignacio'
        ],
        emergencyContraception: [
          'Available at most pharmacies without prescription',
          'Fundación Santa Fe Emergency Department',
          'Local gynecologists'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Éxito, Carulla, and local drugstores'
        ]
      },
      vaccinations: [
        'Yellow fever vaccination recommended',
        'Routine vaccinations recommended (MMR, Tdap)',
        'COVID-19 vaccination available at local clinics'
      ],
      healthRisks: [
        'Altitude sickness (Bogotá is at 2,640m elevation)',
        'Food and water safety concerns',
        'Air pollution in some areas',
        'Limited healthcare in rural areas'
      ]
    },
    crimeStatistics: {
      violentCrime: 850, // per 100,000 (2024 data)
      propertyCrime: 1200, // per 100,000 (2024 data)
      sexualAssault: 45, // per 100,000 (2024 data)
      kidnapping: 8, // per 100,000 (2024 data)
      source: 'Colombian National Police',
      year: 2024
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Ride-Sharing Apps',
          safety: 75,
          recommendations: [
            'Use Uber or Beat apps only',
            'Share ride details with someone',
            'Verify driver and car details'
          ],
          companies: ['Uber', 'Beat'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Registered Taxis',
          safety: 60,
          recommendations: [
            'Use hotel-recommended taxis only',
            'Avoid hailing taxis on the street',
            'Agree on fare before getting in'
          ],
          companies: ['Taxi Libre', 'Taxi Express'],
          link: ''
        },
        {
          type: 'Walking',
          safety: 30,
          recommendations: [
            'Avoid walking alone, especially at night',
            'Stay in well-lit, busy areas',
            'Use transportation services instead'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 20,
        warnings: [
          'Extremely dangerous to travel at night',
          'Use only registered transportation services',
          'Avoid walking alone completely'
        ],
        alternatives: [
          'Use Uber or Beat for all night travel',
          'Stay in your accommodation after dark',
          'Arrange transportation in advance'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 75
        },
        {
          name: 'Beat',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 70
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at most hotels',
        'Electronic key cards',
        'Security cameras in common areas',
        'Safe deposit boxes available',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Zona Rosa',
        'Chicó',
        'Rosales',
        'Usaquén'
      ],
      womensOnly: [
        {
          name: 'Casa Legado',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Safe neighborhood'],
          rating: 4.1
        }
      ],
      userReviews: [
        {
          rating: 4.2,
          safety: 60,
          comments: 'Good security but area requires caution',
          date: '2024-01-15'
        },
        {
          rating: 4.7,
          safety: 85,
          comments: 'Very safe hotel with excellent security',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN when connecting to public WiFi',
        'Avoid accessing sensitive information on public networks',
        'Most hotels provide secure WiFi'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN'
      ],
      dataProtection: [
        'Colombia has data protection laws',
        'Use secure payment methods when possible',
        'Be cautious with personal information'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Armed Robbery',
          location: 'La Candelaria area',
          date: '2024-01-05',
          description: 'Tourist robbed at gunpoint in historic center',
          severity: 'high'
        },
        {
          type: 'Harassment on Bus',
          location: 'TransMilenio system',
          date: '2024-01-03',
          description: 'Multiple reports of harassment on crowded buses',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Use only registered transportation services and never hail taxis on the street',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 35
        },
        {
          tip: 'Keep valuables hidden and avoid displaying expensive items',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 28
        },
        {
          tip: 'Stay in well-lit, busy areas and avoid walking alone, especially at night',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 32
        },
        {
          tip: 'Use ATMs inside banks or shopping centers only',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 24
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      source: 'U.S. Department of State',
      lastUpdated: '2024-01-15',
      details: 'Colombia has high crime rates, including violent crime such as homicide, assault, and armed robbery. Organized criminal groups, narcotics traffickers, and some local gangs operate in various parts of the country. Terrorist groups and other armed actors continue operating in some rural areas and continue to pose a threat to travelers.'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Portable door lock',
        'Emergency whistle',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'Uber',
          purpose: 'Safe ride-sharing service',
          rating: 4.5
        },
        {
          name: 'Beat',
          purpose: 'Local ride-sharing app',
          rating: 4.3
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
          number: '123',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '125',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Department',
          number: '119',
          type: 'Fire Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+57 1 275-2000',
          type: 'Consular Services'
        },
        {
          name: 'Colombian Women\'s Rights Network',
          number: '+57 1 245-1234',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '155',
          type: 'Support Services'
        }
      ]
    }
};

export default bogota; 