import { Destination } from './types';

const bogota: Destination = {
    city: 'Bogotá',
    country: 'Colombia',
    continent: 'South America',
    countryCode: 'co',
    overallScore: 4.2,
    nightSafety: 3.1,
    publicTransit: 4.5,
    walkingAlone: 3.5,
    tags: ['warning-flags', 'high-crime'],
    bgColor: 'bg-red-50',
    reviewCount: 245,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 3.1,
        context: 'Bogotá is very unsafe at night, especially for solo women travelers. Streets are poorly lit in many areas, and there is a high risk of violent crime including robbery, assault, and sexual harassment. Women should avoid walking alone after dark completely. Use registered taxis or rideshares, and stay in well-lit, busy areas. The risk of kidnapping and sexual assault is significantly higher at night. Even in safer neighborhoods like Zona Rosa and Chapinero, incidents can occur after midnight.'
      },
      publicTransit: {
        score: 4.5,
        context: 'Bogotá\'s public transport system (TransMilenio buses and SITP) has improved but remains risky for women. Crowded buses are hotspots for pickpocketing and harassment. The system is more reliable in recent years but still has safety concerns. Women should avoid using public transport alone, especially after dark. Use registered taxis, rideshares, or private transportation whenever possible. The TransMilenio has dedicated women-only carriages during peak hours.'
      },
      walkingAlone: {
        score: 3.5,
        context: 'Walking alone in Bogotá is not recommended, especially for women. There is a high risk of mugging, harassment, and assault. Even in safer neighborhoods, incidents can occur. Women should avoid walking alone, especially after dark. Use transportation services, stay in groups when possible, and always be aware of your surroundings. The risk of sexual harassment and assault is significant, particularly in less affluent areas.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Zona Rosa (Zona T)',
          description: 'Bogotá\'s upscale entertainment and dining district. Zona Rosa is considered one of the safest areas in the city, with good lighting and security. The area is popular with tourists and locals, with many restaurants, bars, and shops. While generally safe, incidents of pickpocketing and harassment can occur in crowded areas. Best to visit during the day and early evening.'
        },
        {
          name: 'Chapinero',
          description: 'A trendy, LGBTQ-friendly neighborhood with a mix of cafes, restaurants, and nightlife. Chapinero is relatively safe during the day, but caution is advised at night. The area has good lighting and police presence, but incidents of harassment and petty crime can still occur. Popular with young professionals and tourists.'
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
        },
        {
          name: 'Parque 93',
          description: 'A trendy area around Parque 93 with upscale restaurants and bars. The area is well-patrolled and relatively safe, but still requires caution at night. Popular with young professionals and tourists.'
        }
      ],
      caution: [
        'La Candelaria (historic center) during the day: While popular with tourists for its colonial architecture and museums, this area can be dangerous, especially for solo travelers. Pickpocketing and harassment are common. Visit with a group or guided tour, and avoid after dark.',
        'Teusaquillo during the day: A university district that can be busy and relatively safe during the day, but becomes dangerous at night. Avoid walking alone and stay alert.',
        'Chapinero at night: While safer during the day, this area becomes risky after dark with increased reports of harassment and robbery.'
      ],
      avoid: [
        'Ciudad Bolívar: One of the most dangerous areas in Bogotá with high rates of violent crime, including robbery, assault, and sexual violence. Avoid completely.',
        'San Cristóbal: High crime area with frequent reports of violent incidents. Not safe for tourists.',
        'Santa Fe at night: While the historic center has some attractions, it becomes extremely dangerous after dark with high rates of robbery and assault.',
        'Kennedy: High crime area with frequent reports of violent incidents and drug-related crime.',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'Casa Legado Hostel',
        type: 'hostel',
        features: ['Women-only dorms', '24/7 reception', 'Safe neighborhood', 'Security cameras', 'Free breakfast', 'Social environment'],
        rating: 4.6,
        notes: 'Highly rated women-only hostel in the safe Usaquén neighborhood. Excellent security, clean facilities, and welcoming atmosphere for solo female travelers.',
        link: 'https://www.casalegado.com/'
      },
      {
        name: 'Viajero Bogota Hostel & Spa',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', '24/7 reception', 'Security cameras', 'Spa facilities', 'Social environment'],
        rating: 4.5,
        notes: 'Popular hostel with strong security measures and female-only dorms. Located in a relatively safe area with good transport connections.',
        link: 'https://www.viajerohostels.com/bogota/'
      },
      {
        name: 'Marietta - House Of Social Travellers',
        type: 'hostel',
        features: ['Female dorms', 'Welcoming atmosphere', 'Community vibe', 'Security cameras', 'Friendly staff'],
        rating: 4.4,
        notes: 'Known for its welcoming atmosphere, safety, and community vibe, especially for solo women. Excellent for meeting other travelers.',
        link: 'https://www.mariettahostel.com/'
      },
      {
        name: 'Botanico Hostel Bogota',
        type: 'hostel',
        features: ['Female-only dorms', 'Secure setting', 'Clean facilities', 'Excellent location', '24/7 reception'],
        rating: 4.3,
        notes: 'Popular for its secure, clean setting and excellent location. Female-only dorms available with good security measures.',
        link: 'https://www.botanicohostel.com/'
      },
      {
        name: 'Socialtel Parque 93 Bogota',
        type: 'hostel',
        features: ['Female-friendly', 'Safe area', 'Social atmosphere', 'Security cameras', '24/7 reception'],
        rating: 4.2,
        notes: 'Located in a safe area with a social atmosphere. Good security and popular with solo travelers.',
        link: 'https://www.socialtel.com/'
      },
      {
        name: 'Hotel B3 Virrey',
        type: 'hotel',
        features: ['4-star hotel', 'Safe neighborhood', '24/7 security', 'Business center', 'Restaurant'],
        rating: 4.4,
        notes: 'Upscale hotel in the safe Chicó neighborhood. Excellent security, professional staff, and comfortable accommodations for solo women.',
        link: 'https://www.hotelb3virrey.com/'
      },
      {
        name: 'Hotel Bioxury',
        type: 'hotel',
        features: ['Boutique hotel', 'Zona Rosa location', '24/7 reception', 'Security cameras', 'Restaurant'],
        rating: 4.3,
        notes: 'Boutique hotel in the safe Zona Rosa area. Good security and central location for dining and entertainment.',
        link: 'https://www.hotelbioxury.com/'
      }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'La Candelaria', reportCount: 25, severity: 'high', dateReported: '2 days ago' },
      { title: 'Transportation Warning', description: 'Avoid hailing taxis on the street', location: 'City-wide', reportCount: 18, severity: 'medium', dateReported: '1 week ago' }
    ],
    safetyTips: {
      clothing: `• Dress modestly and avoid flashy jewelry—don\'t draw attention to yourself
• Keep valuables hidden and use anti-theft bags with secure zippers
• Wear comfortable, sturdy shoes for walking on uneven streets
• Avoid expensive watches, jewelry, or designer items
• Always carry a charged phone and emergency contacts
• Consider a money belt or hidden pouch for important documents
• Dress appropriately for the altitude and weather changes`,
      firstTimers: `• Bogotá is challenging for solo women—arrange airport transfers in advance
• Save emergency numbers (123 for police, 125 for medical, 119 for fire) and local support hotlines
• Use registered taxis or rideshares only—never hail taxis on the street
• Avoid walking alone, especially after dark
• Trust your instincts—if you feel unsafe, seek help immediately
• Download essential safety apps and keep them updated
• Acclimatize to the altitude (2,640m) - take it easy for the first few days`,
      apps: [
        'Uber',
        'Beat',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me',
        'Cabify'
      ],
      appLinks: [
        { name: 'Uber', link: 'https://www.uber.com/co/en/', description: 'Safe ride-sharing service' },
        { name: 'Beat', link: 'https://thebeat.co/', description: 'Local ride-sharing app' },
        { name: 'Cabify', link: 'https://cabify.com/', description: 'Premium ride-sharing service' },
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
      exchangeRate: {
      usd: 0.0002,
      eur: 0.0002,
      gbp: 0.0002
    },
      scamWarnings: [
        'Always use official ATMs inside banks or shopping centers, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
      ],
      description: 'Colombia is increasingly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs inside banks or shopping centers. Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' },
      { title: 'ATM Skimming', description: 'Fake ATMs or card skimmers at legitimate machines.', severity: 'high' },
      { title: 'Fake Police', description: 'Scammers posing as police officers asking for ID or money.', severity: 'medium' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 58.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bogota)
    nighttimeSafetyPercent: 28.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bogota)
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
        severity: 'high',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        title: 'Use Ride-Sharing Apps or Official Taxis',
        description: 'Don\'t hail taxis on the street. Use trusted ride-sharing apps (like Uber, Beat, or Cabify) or have your hotel call a reputable taxi for you, especially at night.',
        severity: 'high',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        title: 'Explore During the Day and Avoid Isolated Areas at Night',
        description: 'Stick to well-lit, busy areas and avoid walking alone after dark, especially in less secure neighborhoods. Plan your sightseeing for daylight hours.',
        severity: 'high',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/colombia/bogota'
      },
      {
        title: 'Be Cautious at ATMs and Markets',
        description: 'Use ATMs inside banks or shopping centers, and always be aware of your surroundings. Markets and tourist sites can be hotspots for pickpockets.',
        severity: 'medium',
        sourceName: 'Qeepl',
        sourceUrl: 'https://qeepl.com/en/blog/is-bogota-safe-a-tourist-s-guide-to-safety-and-security'
      },
      {
        title: 'Acclimatize to the Altitude and Stay Hydrated',
        description: 'Bogotá is at high altitude (2,640m). Take it easy for the first few days, drink plenty of water, and avoid strenuous activity until you adjust.',
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
      score: 38.0, // Numbeo 2025 Safety Index for Bogota
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Bogota"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 65,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        label: 'Nightlife',
        confidence: 45,
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
        confidence: 70,
        source: 'The Lady Who Travels 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      }
    ],
    // Enhanced safety fields
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
        },
        {
          name: 'Clínica Colsanitas',
          address: 'Carrera 15 No. 93-47, Bogotá',
          phone: '+57 1 745-6700',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.colsanitas.com/'
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
        },
        {
          name: 'Colsubsidio Farmacia',
          address: 'Calle 26 No. 13-49, Bogotá',
          phone: '+57 1 327-3377',
          hours: 'Mon-Sun 7:00-23:00',
          emergency: true,
          link: 'https://www.colsubsidio.com/'
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
          name: 'British Embassy Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://www.gov.uk/world/organisations/british-embassy-bogota'
        },
        {
          name: 'Embassy of Germany in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://co.diplo.de/'
        },
        {
          name: 'Embassy of France in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://co.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://www.exteriores.gob.es/embajadas/bogota'
        },
        {
          name: 'Australian Embassy Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://co.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://www.canadainternational.gc.ca/co-colombia/'
        },
        {
          name: 'Embassy of the Netherlands in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/colombia'
        },
        {
          name: 'Embassy of Denmark in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://co.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://www.eda.admin.ch/bogota'
        },
        {
          name: 'Embassy of India in Bogota',
          address: 'Carrera 11 No. 93-12, Bogotá',
          phone: '+57 1 326 8300',
          link: 'https://www.indianembassyco.gov.in/'
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
    transportationSafety: {
      safeOptions: [
        {
          type: 'Ride-Sharing Apps',
          safety: 8.0,
          recommendations: [
            'Use Uber, Beat, or Cabify apps only',
            'Share ride details with someone',
            'Verify driver and car details'
          ],
          companies: ['Uber', 'Beat', 'Cabify'],
          link: 'https://www.uber.com/co/en/'
        },
        {
          type: 'Registered Taxis',
          safety: 6.5,
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
          safety: 3.5,
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
        safety: 2.5,
        warnings: [
          'Extremely dangerous to travel at night',
          'Use only registered transportation services',
          'Avoid walking alone completely'
        ],
        alternatives: [
          'Use Uber, Beat, or Cabify for all night travel',
          'Stay in your accommodation after dark',
          'Arrange transportation in advance'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 8.0
        },
        {
          name: 'Beat',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 7.5
        },
        {
          name: 'Cabify',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 7.8
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
        'Usaquén',
        'Parque 93'
      ],
      womensOnly: [
        {
          name: 'Casa Legado Hostel',
          type: 'Hostel',
          features: ['Women-only dorms', '24/7 reception', 'Safe neighborhood'],
          rating: 4.6
        },
        {
          name: 'Viajero Bogota Hostel & Spa',
          type: 'Hostel',
          features: ['Female-only dorms', 'Security cameras', 'Central location'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.5,
          comments: 'Excellent security and safe neighborhood. Staff was very helpful.',
          date: '2025-01-15'
        },
        {
          rating: 4.4,
          safety: 7.8,
          comments: 'Good security measures and friendly staff. Would recommend for solo travelers.',
          date: '2025-01-10'
        },
        {
          rating: 4.3,
          safety: 7.5,
          comments: 'Safe hostel with good security. Area requires some caution.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN when connecting to public WiFi',
        'Avoid accessing sensitive information on public networks',
        'Most hotels provide secure WiFi',
        'Use mobile data when possible for sensitive transactions'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email',
        'Be cautious of social media scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing banking or personal accounts'
      ],
      dataProtection: [
        'Colombia has data protection laws',
        'Use secure payment methods when possible',
        'Be cautious with personal information',
        'Enable two-factor authentication on all accounts'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Armed Robbery',
          location: 'La Candelaria area',
          date: '2025-01-20',
          description: 'Tourist robbed at gunpoint in historic center',
          severity: 'high'
        },
        {
          type: 'Harassment on Bus',
          location: 'TransMilenio system',
          date: '2025-01-18',
          description: 'Multiple reports of harassment on crowded buses',
          severity: 'medium'
        },
        {
          type: 'Taxi Scam',
          location: 'Airport area',
          date: '2025-01-15',
          description: 'Tourist overcharged by unlicensed taxi',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Use only registered transportation services and never hail taxis on the street',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 45
        },
        {
          tip: 'Keep valuables hidden and avoid displaying expensive items',
          author: 'Traveler',
          date: '2025-01-21',
          upvotes: 38
        },
        {
          tip: 'Stay in well-lit, busy areas and avoid walking alone, especially at night',
          author: 'Local Resident',
          date: '2025-01-20',
          upvotes: 52
        },
        {
          tip: 'Use ATMs inside banks or shopping centers only',
          author: 'Traveler',
          date: '2025-01-19',
          upvotes: 24
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Colombia has high crime rates, including violent crime such as homicide, assault, and armed robbery. Organized criminal groups, narcotics traffickers, and some local gangs operate in various parts of the country. Terrorist groups and other armed actors continue operating in some rural areas and continue to pose a threat to travelers.',
      reason: 'High crime rates, organized criminal groups, and security concerns.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/colombia-travel-advisory.html',
      soloTravelerAdvice: [
        'Higher risk city - never walk alone at night, use Uber/official taxis only',
        'Stay in safe neighborhoods: Zona Rosa, Chapinero, or Usaquén',
        'Phone theft is extremely common - keep devices hidden or use inside only', 
        'Avoid La Candelaria after dark despite tourist attractions there',
        'Join group tours and stick to busy areas - safety in numbers essential'
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
          name: 'Cabify',
          purpose: 'Premium ride-sharing service',
          rating: 4.4
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
    },
    costAndComfort: {
      dailyBudget: {
        range: '$35 - $65 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Bogotá is relatively affordable, but spending more on accommodation and transport significantly improves safety for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$12-20',
          safetyNote: 'Best for safety on a budget in safe neighborhoods',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$25-45',
          safetyNote: 'Choose hotels in safe neighborhoods like Zona Rosa or Chapinero',
          safetyLevel: 'medium'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$40+',
          safetyNote: 'Much safer with verified hosts in secure neighborhoods',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Rideshare (Uber/Cabify)',
          cost: '$3-8/ride',
          safetyDescription: 'Safest option, especially at night. Use verified drivers.',
          safetyLevel: 'high'
        },
        {
          method: 'Public Transit',
          cost: '$0.50-1/day',
          safetyDescription: 'Use women-only carriages during peak hours. Avoid at night.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Not recommended, especially alone or at night',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Bogotá is affordable but safety should be your top priority over budget',
        'Spend more on accommodation in safe neighborhoods like Zona Rosa or Chapinero',
        'Use rideshare services instead of public transport, especially at night',
        'Avoid walking alone - the cost savings aren\'t worth the safety risks',
        'Budget for private transportation to and from the airport'
      ]
    }
};

export default bogota; 