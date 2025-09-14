import { Destination } from './types';

const bogota: Destination = {
    city: 'Bogotá',
    country: 'Colombia',
    continent: 'South America',
    countryCode: 'co',
    overallScore: 4.0,
    nightSafety: 2.8,
    publicTransit: 4.2,
    walkingAlone: 3.2,
    tags: ['warning-flags', 'high-crime'],
    bgColor: 'bg-red-50',
    reviewCount: 387,
    lastUpdated: '2025-01-20',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 2.8,
        context: 'Is Bogotá safe for female solo travelers at night? Bogotá remains extremely dangerous at night with 2025 Numbeo data showing Safety Index of only 33.28 and night walking safety at 20.01. Colombian survey data shows 30% of women never go out alone at night due to safety concerns. Solo female travel safety is severely compromised after dark - women should completely avoid walking alone and use only verified ride-sharing services for solo travel security.'
      },
      publicTransit: {
        score: 4.2,
        context: 'Public transport safety for solo female travelers remains highly problematic with 84.3% experiencing sexual harassment on Bogotá transit. The city ranked first on worst cities for women in public transport globally. Solo travel safety tips: use women-only carriages during peak hours, though harassment and theft remain endemic. Women solo travel safety requires extreme caution on public transport despite infrastructure improvements.'
      },
      walkingAlone: {
        score: 3.2,
        context: 'Is Bogotá safe for women solo travelers during the day? Walking alone remains challenging with Numbeo 2025 showing daytime safety at only 48.52/100. Nine out of ten women feel unsafe in public spaces. Solo female travel safety requires extreme caution even in tourist areas. Solo female travelers report catcalling and harassment as "quite common" even in tourist zones. Women traveling alone safety is compromised - never walk alone after dark.'
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
        name: 'Viajero Bogota Hostel & Spa',
        type: 'hostel',
        features: ['Female-only dorms', 'On-site spa', 'Sauna & steam bath', 'Hydromassage', 'Privacy curtains', 'Secure lockers', 'Social events', 'Salsa classes'],
        rating: 4.7,
        notes: 'Top-rated hostel in La Candelaria with resort-level luxury and party atmosphere. Features the Monserrat Spa with sauna, steam bath, and hydromassage circuit. Female-only dorms with privacy curtains, reading lights, and secure lockers. Essential for solo female travelers seeking safety and social connections.',
        link: 'https://www.viajerohostels.com/bogota/'
      },
      {
        name: 'Masaya Bogotá',
        type: 'hostel',
        features: ['Women-only dorms', 'Historic building', 'Digital nomad friendly', 'Cultural events', 'Art exhibits', 'Live music', '24/7 reception'],
        rating: 4.6,
        notes: 'Located in historic La Candelaria, blending traditional Colombian architecture with modern design. Perfect for digital nomads and solo female travelers. Offers cultural activities, art exhibits, and local events. Highly secure with excellent safety measures.',
        link: 'https://www.masaya-experience.com/'
      },
      {
        name: 'Casa Legado Hostel',
        type: 'hostel',
        features: ['Women-only dorms', '24/7 reception', 'Safe Usaquén neighborhood', 'Security cameras', 'Free breakfast', 'Rooftop terrace'],
        rating: 4.5,
        notes: 'Highly rated women-only hostel in the extremely safe Usaquén neighborhood. Excellent security, clean facilities, and welcoming atmosphere specifically designed for solo female travelers. Known for creating a supportive community environment.',
        link: 'https://www.casalegado.com/'
      },
      {
        name: 'Spotty Hostel',
        type: 'hostel',
        features: ['Keycard access', 'Female dorms', 'Elevator security', 'Room keycards', 'Safe neighborhood', '24/7 reception'],
        rating: 4.5,
        notes: 'Premier security-focused hostel with keycard access to building, elevators, and rooms. Located in a safe area with excellent safety protocols specifically designed for solo female travelers. Highly recommended by women travelers for its security measures.',
        link: 'https://www.spottyhostel.com/'
      },
      {
        name: 'Botanico Hostel Bogota',
        type: 'hostel',
        features: ['Female-only dorms', 'Secure setting', 'Clean facilities', 'Excellent location', '24/7 reception', 'Garden area'],
        rating: 4.4,
        notes: 'Popular for its secure, clean setting and excellent location. Female-only dorms available with comprehensive security measures. Known as one of the best-rated hostels for female solo travelers in Bogotá.',
        link: 'https://www.botanicohostel.com/'
      },
      {
        name: 'Marietta - House Of Social Travellers',
        type: 'hostel',
        features: ['Female dorms', 'Welcoming atmosphere', 'Community vibe', 'Security cameras', 'Social activities', 'Cultural exchange'],
        rating: 4.3,
        notes: 'Known for its exceptionally welcoming atmosphere and strong community vibe, especially popular with solo women. Excellent for meeting other female travelers and creating lasting connections. Prioritizes safety and cultural exchange.',
        link: 'https://www.mariettahostel.com/'
      },
      {
        name: 'Hotel Retiro 84 by MIJ',
        type: 'hotel',
        features: ['Safe neighborhood', '24/7 security', 'Female-friendly', 'Business center', 'Safe walking area at night'],
        rating: 4.6,
        notes: 'Highly recommended by solo female travelers for its extremely safe location where women can walk at night. Professional staff, excellent security measures, and located in one of Bogotá\'s safest areas for solo female travelers.',
        link: 'https://www.hotelretiro84.com/'
      },
      {
        name: 'Hotel B3 Virrey',
        type: 'hotel',
        features: ['4-star hotel', 'Safe Chicó neighborhood', '24/7 security', 'Business center', 'Restaurant', 'Concierge'],
        rating: 4.5,
        notes: 'Upscale hotel in the extremely safe Chicó neighborhood. Excellent security, professional staff, and comfortable accommodations specifically catering to solo women travelers. Located in one of Bogotá\'s most secure areas.',
        link: 'https://www.hotelb3virrey.com/'
      }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'La Candelaria', reportCount: 25, severity: 'high', dateReported: '2 days ago' },
      { title: 'Transportation Warning', description: 'Avoid hailing taxis on the street', location: 'City-wide', reportCount: 18, severity: 'medium', dateReported: '1 week ago' }
    ],
    safetyTips: {
      clothing: `• Solo female travel safety essential: dress modestly and avoid flashy jewelry—don\'t draw attention to yourself as women traveling alone
• Keep valuables hidden and use anti-theft bags with secure zippers—critical solo travel security tips
• Wear comfortable, sturdy shoes for walking on uneven streets—important for solo female travelers
• Avoid expensive watches, jewelry, or designer items—key solo female travel safety precautions
• Always carry a charged phone and emergency contacts—essential women solo travel safety gear
• Consider a money belt or hidden pouch for important documents—trusted solo female travel safety tips
• Dress appropriately for the altitude and weather changes—practical solo female travel advice`,
      firstTimers: `• Is Bogotá safe for women solo travelers? Yes, with proper precautions—arrange airport transfers in advance for solo female travel safety
• Save emergency numbers (123 for police, 125 for medical, 119 for fire) and local support hotlines—essential solo travel safety tips
• Use registered taxis or rideshares only—never hail taxis on the street for women traveling alone safety
• Avoid walking alone, especially after dark—critical for solo female traveler safety
• Trust your instincts—if you feel unsafe, seek help immediately—solo female travel advice priority
• Download essential solo female travel safety apps and keep them updated
• Acclimatize to the altitude (2,640m) - take it easy for the first few days—important solo travel safety guide`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Uber Colombia',
        'Moovit',
        'Smart Citizen'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for high-risk destinations like Bogotá', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with panic button absolutely critical for Bogotá safety', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response crucial for solo women in high-crime areas', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely essential for Bogotá safety monitoring', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Colombia safety warnings and tips', rating: 4.0 },
        { name: 'Uber Colombia', link: 'https://www.uber.com/co/', description: 'Essential rideshare in Bogotá - much safer than street taxis with GPS tracking', rating: 4.2 },
        { name: 'Moovit', link: 'https://moovit.com/', description: 'Public transport app for Bogotá TransMilenio with safety features and route planning', rating: 4.3 },
        { name: 'Smart Citizen', link: 'https://smartcitizen.cc/', description: 'Citizen reporting app for crime and safety alerts in Colombian cities', rating: 4.0 }
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
      dressCode: [
        'Professional and neat appearance is highly valued - Bogotanos dress stylishly even in casual settings, helping you blend in safely as a solo female traveler',
        'Conservative business attire is essential - men wear dark suits with ties, women dress in professional attire with skirts/dresses always worn with pantyhose',
        'Quality footwear is crucial - polished, clean dress shoes are mandatory as Colombians judge heavily on shoe quality and cleanliness',
        'Avoid overly casual clothing like shorts, flip-flops, or running shoes in urban areas - this immediately marks you as a tourist target',
        'Modest coverage is important - avoid revealing clothing that might attract unwanted attention, especially in traditional neighborhoods like La Candelaria',
        'Weather-appropriate layering - Bogotá\'s cool climate (2,640m elevation) requires jackets and long pants, perfect for conservative dressing',
        'Hide expensive jewelry and accessories - flashy items make you a robbery target; keep valuables minimal and concealed'
      ],
      behaviorNorms: [
        'Use proper time-of-day greetings with eye contact - "Buenos días," "Buenas tardes," "Buenas noches" shows respect and helps solo female travelers integrate safely',
        'Practice formal courtesy with strangers - use "usted" instead of "tú" until invited to be informal, especially important for women traveling alone',
        'Show deep respect for family values - Colombians prioritize family highly, and discussing your own family creates positive connections',
        'Maintain proper table etiquette - keep hands visible, use cutlery always, wait for "Buen provecho" before eating in restaurants',
        'Learn basic Spanish phrases - locals greatly appreciate the effort and it increases safety for solo women by reducing tourist targeting',
        'Practice punctuality in business but expect "tiempo colombiano" - social events may start 30-60 minutes late, but business meetings are on time',
        'Avoid sensitive topics completely - never joke about drugs, violence, or FARC; Colombians find these stereotypes offensive and tiresome'
      ],
      perception: [
        'Solo female travelers are uncommon and will draw significant attention - Bogotanos may stare or comment out of curiosity rather than malice, but stay alert',
        'Traditional gender roles persist strongly - men often approach women travelers; polite but firm boundaries are essential for safety',
        'Street harassment occurs regularly throughout the city - catcalling and verbal remarks are common, especially in tourist areas; ignore and keep walking',
        'Colombian women are protective and helpful - local women often assist solo female travelers and provide safety warnings about dangerous areas or situations',
        'Dating culture expectations differ greatly - men typically pay and initiate; be clear about intentions to avoid misunderstandings that could compromise safety',
        'Professional respect exists in business settings - women are treated professionally, though solo female travelers should dress conservatively to avoid unwanted attention',
        'Machismo culture influences interactions - while most men are respectful, some may be overly persistent; confident, firm responses are necessary',
        'Safety concerns are acknowledged by locals - Colombians understand the heightened risks for solo women and often offer assistance or warnings'
      ]
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
    daytimeSafetyPercent: 48.5, // Source: Numbeo 2025 - walking alone during day
    nighttimeSafetyPercent: 20.0, // Source: Numbeo 2025 - walking alone at night
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bogota',
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Most common',
        icon: 'Hand',
        details: 'Extremely common in TransMilenio stations, La Candelaria historic district, and crowded markets. Teams work together using distraction techniques. Motorcycle thieves snatch bags and phones from pedestrians. Peak times during rush hours and tourist events.',
        prevention: 'Use anti-theft crossbody bags, keep phones hidden, avoid TransMilenio during peak hours, stay alert in crowds, keep valuables in hotel safe'
      },
      {
        label: 'Muggings & Armed Robbery',
        frequency: 'Frequent',
        icon: 'PocketKnife',
        details: 'Armed robberies target solo travelers, especially women, in poorly lit areas and certain neighborhoods. Express kidnapping involves forcing victims to ATM withdrawals. Higher risk after dark and in areas like Ciudad Bolívar, Bosa, and parts of La Candelaria.',
        prevention: 'Never resist armed attackers, carry decoy wallet, avoid walking alone at night, use Uber instead of walking, stay in safe neighborhoods like Zona Rosa'
      },
      {
        label: 'Taxi Scams & Overcharging',
        frequency: 'Frequent',
        icon: 'Car',
        details: 'Unlicensed taxis overcharge tourists and may be involved in robberies. Some drivers work with criminals for express kidnapping. Fake meters and route manipulation common. Airport taxis particularly problematic for solo female travelers.',
        prevention: 'Use only Uber or official taxi apps, verify driver identity and license plate, share ride details with contacts, never use street-hailed taxis'
      },
      {
        label: 'Drink Spiking & Drugging',
        frequency: 'Occasional',
        icon: 'Syringe',
        details: 'Scopolamine (devil\'s breath) used to drug victims in bars and nightlife areas, making them compliant for robbery or assault. Particularly targets solo female travelers. Zona Rosa nightlife district has reported incidents.',
        prevention: 'Never leave drinks unattended, don\'t accept drinks from strangers, travel with trusted friends in nightlife areas, stay in groups at bars/clubs'
      }
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
      score: 33.3, // Numbeo 2025 Safety Index (33.28) + Travel Ladies 2.9/5 rating
      source: "Numbeo 2025 & Travel Ladies 2025",
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
      reportingRate: 42, // percentage - decreased due to increased crime and overwhelmed systems
      legalProtection: 'Colombian law provides protections against sexual harassment, assault, and kidnapping, but enforcement can be inconsistent. Police may not always take reports seriously, especially for foreign women. There are victim support services available, but they may be limited in some areas.',
      supportResources: [
        'Emergency: 123 (Police)',
        'Línea Púrpura (Violence Against Women): 01-8000-112-137 (24/7, toll-free)',
        'Women\'s Emergency Helpline: 155 (24/7)',
        'Online Crime Reporting: ADenunciar system for gender-based violence',
        'Metropolitan Police: Response time under 3 minutes for domestic violence',
        'Colombian Legal Aid: +57 1 570-2000, https://www.defensoria.gov.co/',
        'U.S. Embassy Emergency: +57 1 275-2000'
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
        'Higher risk city - never walk alone at night, use ride-sharing apps (Uber/Beat) despite technical illegality',
        'Stay in safe neighborhoods: Zona Rosa, Chapinero, or Usaquén only',
        'Phone theft is extremely common - use digital payment apps (Nequi) to reduce cash carrying', 
        'Download WhatsApp Business - essential for all service communication in Colombia',
        'Use Rappi for deliveries to avoid unnecessary street exposure',
        'Install altitude sickness apps - Bogotá\'s 2,600m elevation affects most travelers'
      ]
    },
    crimeStatistics: {
      violentCrime: 920, // per 100,000 (2024 data - homicides up 8.3%, assaults up 19.1%)
      propertyCrime: 960, // per 100,000 (2024 data - robberies down 24% but theft up 19%)
      sexualAssault: 71, // per 100,000 (2024 data - sexual crimes up 58.8%)
      kidnapping: 12, // per 100,000 (2024 data - extortion up 70%)
      domesticViolence: 1080, // per 100,000 (2024 data - domestic violence up 70%)
      femicide: 525, // national total 2024 - Bogotá among highest with 50+ cases
      source: 'Colombian National Police 2024, Numbeo 2025',
      year: 2024,
      trend: 'Mixed: robberies down 24%, but homicides, assaults, sexual crimes significantly up'
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
          name: 'WhatsApp Business',
          purpose: 'Essential communication and emergency contact tool for Colombia',
          rating: 4.4
        },
        {
          name: 'Uber',
          purpose: 'Primary safe transportation despite technical illegality',
          rating: 4.2
        },
        {
          name: 'Beat',
          purpose: 'Local ride-sharing alternative with safety tracking',
          rating: 4.3
        },
        {
          name: 'Taxis Libres',
          purpose: 'Only legal taxi service with registered drivers and tracking',
          rating: 4.0
        },
        {
          name: 'Nequi',
          purpose: 'Digital payments to reduce cash carrying risks',
          rating: 4.2
        },
        {
          name: 'Rappi',
          purpose: 'On-demand delivery reducing need to venture out alone',
          rating: 4.2
        },
        {
          name: 'Moovit',
          purpose: 'Safe navigation of complex TransMilenio public transport system',
          rating: 4.5
        },
        {
          name: 'First Aid by Red Cross',
          purpose: 'Medical emergency guidance including altitude sickness management',
          rating: 4.6
        },
        {
          name: 'Waze',
          purpose: 'Navigation with community-reported safety alerts and hazards',
          rating: 4.4
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
        description: 'Covers food, stay, and transport at a safe and comfortable level for solo female travelers.',
        tip: 'Bogotá is relatively affordable, but spending more on accommodation and transport significantly improves safety. Is Bogotá safe for female solo travelers? Yes, with proper precautions and budget allocation for safety.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel Dorm',
          avgCost: '$6-11 USD (15,000-27,000 COP)',
          safetyNote: 'Best budget option for solo female travelers - female-only dorms with security features',
          safetyLevel: 'high'
        },
        {
          type: 'Private Hostel Room',
          avgCost: '$20-40 USD (50,000-100,000 COP)',
          safetyNote: 'More privacy while maintaining hostel security and social atmosphere',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$25-45 USD (62,000-112,000 COP)',
          safetyNote: 'Choose hotels in safe neighborhoods like Zona Rosa, Chapinero, or Usaquén',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$50-80 USD (125,000-200,000 COP)',
          safetyNote: 'Professional security, safe locations, ideal for solo women prioritizing safety',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Uber (technically illegal but widely used)',
          cost: '$3-8 USD (7,500-20,000 COP) per ride',
          safetyDescription: 'Safest option for solo female travelers. GPS tracking, driver verification, cashless payment. May need to sit in front seat to avoid police.',
          safetyLevel: 'high'
        },
        {
          method: 'Beat (local rideshare)',
          cost: '$3-7 USD (7,500-17,500 COP) per ride',
          safetyDescription: 'Local alternative to Uber with safety tracking. Popular with women travelers.',
          safetyLevel: 'high'
        },
        {
          method: 'Cabify (premium rideshare)',
          cost: '$4-10 USD (10,000-25,000 COP) per ride',
          safetyDescription: 'Higher-end rideshare with excellent safety features. Preferred by business travelers.',
          safetyLevel: 'high'
        },
        {
          method: 'Registered Taxis (Taxis Libres)',
          cost: '$4-12 USD (10,000-30,000 COP) per ride',
          safetyDescription: 'Only legal taxi option. Must be ordered by hotel/phone, never hail on street.',
          safetyLevel: 'medium'
        },
        {
          method: 'TransMilenio BRT',
          cost: '$0.75 USD (2,900 COP) per ride + card fee',
          safetyDescription: 'Use women-only carriages during peak hours. Avoid at night. High theft risk.',
          safetyLevel: 'low'
        },
        {
          method: 'SITP Local Buses',
          cost: '$0.70 USD (2,700 COP) per ride',
          safetyDescription: 'Not recommended for solo female travelers - overcrowded and high crime risk.',
          safetyLevel: 'very low'
        }
      ],
      currencyExchange: {
        currency: 'Colombian Peso (COP)',
        bestRates: [
          'ATMs inside banks or malls - safest option with best exchange rates for solo female travelers',
          'Servibanca ATMs - highest daily limit (2,000,000 COP / $500 USD) with reasonable fees (22,500 COP)',
          'Banco de Bogotá ATMs - 1,600,000 COP limit ($405 USD) with 15,000 COP ($3.80) fee'
        ],
        exchangeTips: [
          'Always select "withdraw in pesos" to avoid Dynamic Currency Conversion markups',
          'Use ATMs inside hotels, banks, or shopping centers for safety - never street locations',
          'Avoid airport exchange counters - rates are 10-15% worse than bank ATMs',
          'La Candelaria historic center has exchange houses but higher theft risk for solo women',
          'Credit cards accepted at major establishments - often better rates than cash exchange',
          'Notify your bank about Colombia travel to prevent card blocking'
        ],
        safetyTips: [
          'Never withdraw money at night - use mall ATMs during daytime hours only',
          'Use enclosed glass ATM booths where available for privacy and security',
          'Keep cash in multiple locations - money belt, hidden pockets, hotel safe',
          'Download Nequi app for digital payments to reduce cash carrying risks',
          'Budget for ATM fees: expect 15,000-26,000 COP ($4-7 USD) per withdrawal'
        ]
      },
      budgetTips: [
        'Safety over budget - invest in secure accommodation and transportation as a solo female traveler',
        'Stay in safe neighborhoods: Zona Rosa, Chapinero, Usaquén, or Parque 93 area',
        'Use digital payments via Nequi app to reduce cash carrying and robbery risk',
        'Download Rappi for food/essential deliveries instead of venturing out alone at night',
        'Install Moovit for safe TransMilenio navigation with women-only carriage locations',
        'Budget $15-25 USD daily for safe transportation via rideshare apps',
        'Book accommodations with 24/7 reception and security cameras for solo female safety',
        'Eat at hotel restaurants or established places - street food increases illness risk'
      ],
      currencyExchangeTips: [
        'Currency: Colombian Peso (COP) - always select "charge in pesos" to avoid Dynamic Currency Conversion fees of 3-5%',
        'Best rates: Use bank ATMs inside banks or shopping malls - Servibanca (2M COP limit) or Banco de Bogotá (1.6M COP limit)',
        'Credit cards offer excellent rates at hotels, restaurants, and major shops - notify your bank about Colombia travel',
        'ATM safety for solo women: Only withdraw during daytime hours inside secure locations, never at night or street ATMs',
        'Budget for ATM fees: Expect 15,000-26,000 COP ($4-7 USD) per withdrawal - still better than exchange counters',
        'Digital payments: Download Nequi app to reduce cash carrying risks and robbery targets for solo female travelers',
        'Avoid airport exchange counters: Rates are 10-15% worse than bank ATMs with high transaction fees',
        'Emergency money: Keep USD cash hidden separately; Western Union available in major malls for transfers',
        'Exchange houses in La Candelaria offer fair rates but higher theft risk - use only during daylight if necessary',
        'Security tips: Keep cash in multiple locations (money belt, hidden pockets, hotel safe) and never display large amounts'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Use proper greetings for time of day - "Buenos días," "Buenas tardes," or "Buenas noches" with direct eye contact',
      'Show deep respect for family and elders - Colombians value family highly and appreciate when visitors honor this',
      'Dress neatly and stylishly even in casual settings - appearance is important and helps you blend in safely',
      'Practice proper table manners - keep hands visible, use cutlery always, wait for "Buen provecho" before eating',
      'Learn basic Spanish phrases - locals appreciate the effort and it increases your safety as a solo female traveler'
    ],
    culturalDonts: [
      'Don\'t make jokes about drugs or drug trafficking - Colombians find these stereotypes offensive and tiresome',
      'Don\'t wear overly casual clothes like shorts and flip-flops in urban areas - this makes you stand out as a tourist',
      'Don\'t ask broad questions about violence in Colombia - locals are open to specific questions but find generalizations annoying',
      'Don\'t give yellow flowers like marigolds or lilies - these are associated with funerals in Colombian culture',
      'Don\'t expect strict punctuality - "tiempo colombiano" allows for lateness up to an hour for social events'
    ]
  },
  youtubeVideos: [
    {
      videoId: "OW7fMRewq40",
      title: "Solo Female Travel in Bogotá: Complete Safety Guide",
      description: "Comprehensive guide for solo female travelers visiting Bogotá, Colombia. Essential safety tips and real experiences."
    },
    {
      videoId: "3455-IAZdXk",
      title: "Bogotá Street Life and Culture Experience",
      description: "Authentic look at daily life and cultural experiences in Colombia's capital city."
    }
  ]
};

export default bogota; 