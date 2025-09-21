import { Destination } from './types';

const madrid: Destination = {
    city: 'Madrid',
    country: 'Spain',
    continent: 'Europe',
    countryCode: 'es',
    overallScore: 8.6,
    nightSafety: 8.4,
    publicTransit: 8.8,
    walkingAlone: 8.7,
    tags: ['very-safe', 'excellent-transport', 'cultural-hub', 'nightlife'],
    bgColor: 'bg-green-25',
    reviewCount: 342,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.4,
        context: 'Is Madrid safe for women solo travelers at night? Absolutely - Madrid is exceptionally safe for women at night with excellent police presence and well-lit streets. Solo female travelers consistently report feeling comfortable walking alone after dark in central areas like Malasaña, La Latina, and Salamanca. The city has one of the lowest violent crime rates in Europe. Street harassment is minimal and non-threatening compared to other major capitals. Areas remain bustling until late with active nightlife creating natural safety through visibility.'
      },
      publicTransit: {
        score: 8.8,
        context: 'Madrid Metro system is highly safe for women with excellent security, CCTV coverage, and regular police patrols. The system is modern, efficient, and well-maintained with clear signage. Solo female travelers report feeling very comfortable using public transport at all hours. Staff are helpful and emergency communication systems are readily available. The extensive network covers all major areas with frequent services.'
      },
      walkingAlone: {
        score: 8.7,
        context: 'Is Madrid safe for solo female travel and walking alone? Yes, Madrid is considered one of the safest cities for women to walk alone, even at night. The main concern is pickpocketing rather than personal safety threats. Streets are well-lit, police presence is visible, and locals are helpful. Solo female travelers consistently rate Madrid as feeling safer than most major European capitals. Areas like Salamanca, Retiro, and central zones are particularly safe for walking.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Salamanca',
          description: 'Ultra-safe upscale district with designer boutiques, embassies, and excellent security. Considered one of Madrid\'s safest areas with virtually no crime. Perfect for solo female travelers with well-maintained streets, high-end dining, and luxury shopping. Police presence is excellent and locals are helpful to tourists.'
        },
        {
          name: 'Retiro',
          description: 'Elegant neighborhood adjacent to Retiro Park with tree-lined streets and low crime rates. Popular with families and professionals, creating a safe environment. The area around the park is well-patrolled and safe for morning jogs or evening walks. Excellent restaurants and cafes with outdoor seating.'
        },
        {
          name: 'Malasaña',
          description: 'Trendy, vibrant neighborhood with active nightlife and strong community feel. While lively, it remains very safe with good police presence and busy streets until late. Popular with young locals and tourists, creating natural safety through visibility. Excellent for solo female travelers who enjoy nightlife.'
        },
        {
          name: 'Chueca',
          description: 'LGBTQ+-friendly area with excellent safety record and welcoming atmosphere. Very safe for all travelers with active street life, good lighting, and community policing. Known for its inclusive culture, diverse dining scene, and safe nightlife options.'
        },
        {
          name: 'La Latina',
          description: 'Historic neighborhood with cobblestone streets and traditional atmosphere. Very safe during the day and evening with excellent tapas scene. Streets remain busy until late, especially on weekends. Good police presence and helpful local community.'
        },
        {
          name: 'Centro/Sol',
          description: 'Heart of Madrid with major attractions and excellent security. While touristy, it\'s very safe with constant police presence and CCTV coverage. Solo female travelers feel comfortable here, though should be aware of pickpockets in very crowded areas.'
        }
      ],
      caution: [
        'Puerta del Sol during peak tourist hours - while safe, be extra vigilant for pickpockets',
        'Gran Vía late at night on weekends - can get very crowded and rowdy',
        'El Rastro flea market on Sundays - crowded conditions attract pickpockets',
        'Some areas of Lavapiés at night - generally safe but use standard urban precautions',
        'Tourist restaurant areas near major attractions - higher prices and potential overcharging'
      ],
      avoid: [
        'Isolated areas of Casa de Campo park at night',
        'Empty metro stations very late at night (though still generally safe)',
        'Unlicensed taxi drivers at airports and stations',
        'Deserted streets in industrial areas outside city center'
      ]
    },
    accommodations: [
      {
        name: 'Hotel Villa Real',
        type: 'hotel',
        features: ['5-star luxury', 'Salamanca district', '24/7 security', 'Concierge services', 'Female-friendly staff'],
        rating: 4.8,
        notes: 'Elegant luxury hotel in ultra-safe Salamanca district. Consistently rated as excellent for solo female travelers with impeccable security and service.',
        link: 'https://www.hotelvillareal.com/'
      },
      {
        name: 'The Principal Madrid',
        type: 'hotel',
        features: ['5-star boutique', 'Gran Vía location', 'Rooftop terrace', 'Premium security', 'Solo traveler friendly'],
        rating: 4.7,
        notes: 'Sophisticated hotel on Gran Vía with excellent safety record. Staff trained to assist solo travelers, particularly women.',
        link: 'https://www.theprincipalmadridhotel.com/'
      },
      {
        name: 'Hotel Orfila',
        type: 'hotel',
        features: ['5-star boutique', 'Chamberí district', 'Garden terrace', 'Personalized service', 'Ultra-safe location'],
        rating: 4.7,
        notes: 'Intimate luxury hotel in one of Madrid\'s safest neighborhoods. Exceptional attention to solo female travelers with elegant garden setting.',
        link: 'https://www.hotelorfila.com/'
      },
      {
        name: 'Hotel Único Madrid',
        type: 'hotel',
        features: ['5-star luxury', 'Salamanca district', '24/7 concierge', 'Premium location', 'Women-friendly staff'],
        rating: 4.6,
        notes: 'Small luxury hotel in heart of Salamanca district. Renowned for exceptional service to solo female travelers with highest safety standards.',
        link: 'https://www.hotelunico.com/'
      },
      {
        name: 'Onefam Sungate Madrid',
        type: 'hostel',
        features: ['Female-only rooms', 'Party-safe atmosphere', 'Central Sol location', 'Enhanced security', 'Solo female focused'],
        rating: 4.6,
        notes: 'Top-rated hostel for solo female travelers with excellent cleanliness and safety standards. Considered "The Best Hostel in Madrid" by multiple sources.',
        link: 'https://onefam.com/hostels/madrid/'
      },
      {
        name: 'The Hat Madrid',
        type: 'hostel',
        features: ['Stylish design', 'Family-friendly atmosphere', 'Female dorms', 'Rooftop bar', 'Safety-focused'],
        rating: 4.5,
        notes: 'Cool, visually pleasing hostel with excellent safety measures. Recommended as best for female solo travelers with secure atmosphere.',
        link: 'https://thehatmadrid.com/'
      },
      {
        name: 'Safestay Madrid',
        type: 'hostel',
        features: ['All-girls rooms', 'Coworking space', 'Rooftop bar', 'Daily tours', 'Women and older traveler focused'],
        rating: 4.5,
        notes: 'Stylish hostel specifically great for women and older travelers. Features free daily tours, movie nights, and long-stay rates.',
        link: 'https://safestay.com/madrid/'
      }
    ],
    alerts: [
      {
        title: 'Peak Tourist Season Safety',
        description: 'During summer months and major festivals, pickpocket activity increases in tourist areas. Remain extra vigilant.',
        location: 'Tourist areas',
        reportCount: 8,
        severity: 'low',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress stylishly but avoid flashy displays of wealth - Madrid values good presentation so think smart casual to chic rather than athletic wear
• Invest in quality comfortable walking shoes with good grip - Madrid's cobblestone streets and extensive pedestrian areas require proper footwear
• Layer clothing strategically for temperature variations - Spanish buildings may have different heating/cooling than expected, and weather can change quickly
• Choose a small crossbody bag with zippers and internal pockets - avoid backpacks or open tote bags as these are primary pickpocket targets
• Dress appropriately for church visits - bring a light scarf to cover shoulders and avoid short skirts or revealing clothing
• Pack a lightweight jacket even in summer - air conditioning in restaurants and shops can be intense
• Keep copies of passport, visa, and important documents separate from originals in different bag compartments
• Consider bringing a small day pack with anti-theft features for sightseeing while keeping valuables in secure crossbody bag
• Avoid wearing expensive jewelry or watches prominently - thieves specifically target tourist areas for valuable accessories`,
      firstTimers: `• Is Madrid safe for women solo travelers? Absolutely - Madrid ranks as one of Europe's safest capitals with exceptional infrastructure and low crime rates
• Download essential apps before arrival: EMT Madrid for buses, Citymapper for navigation, and NomadHer for female travel community
• Learn basic Spanish phrases like "¿Habla inglés?" and "No hablo español" - locals genuinely appreciate effort and become incredibly helpful
• Embrace Spanish dining culture: lunch 2-4 PM, dinner 9-11 PM, and never rush meals as dining is important social time
• Use the metro system confidently - it's one of Europe's safest with excellent CCTV coverage, police presence, and runs until 1:30 AM
• Respect siesta time (2-5 PM) when shops close - perfect time for Retiro Park walks or museum visits
• Keep emergency cash (€50-100) separate from daily money - most places accept cards but small bars might be cash-only
• Trust your instincts and local advice - Spanish people are naturally protective of solo female travelers
• Book accommodations in Salamanca or Retiro districts for maximum safety and easy metro access
• Pack comfortable walking shoes for cobblestone streets and extensive pedestrian areas throughout the city`,
      apps: [
        'NomadHer',
        'Travel Ladies', 
        'bSafe',
        'Noonlight',
        'Life360',
        'EMT Madrid',
        'Citymapper',
        'FreeNow'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Madrid exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Spain safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while exploring', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel in Europe', rating: 4.1 },
        { name: 'EMT Madrid', link: 'https://www.emtmadrid.es/', description: 'Official Madrid public transport app with real-time bus and metro updates', rating: 4.4 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best app for navigating Madrid metro, buses and walking routes', rating: 4.6 },
        { name: 'FreeNow', link: 'https://www.free-now.com/', description: 'Popular European taxi app with verified drivers in Madrid', rating: 4.3 }
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
        'Madrid values style and sophisticated appearance - dress smart casual to chic rather than overly casual athletic wear',
        'Comfortable walking shoes with excellent grip essential for cobblestone streets and extensive pedestrian areas throughout the city',
        'Modest coverage of shoulders and knees absolutely required in churches, cathedrals, and religious sites like Almudena Cathedral',
        'Business casual appropriate for nicer restaurants and evening dining - avoid beach wear or flip-flops in city center areas',
        'Neutral and stylish colors preferred over bright tourist clothing - helps blend with fashionable Spanish dress sense',
        'Lightweight layers recommended for temperature changes - Spanish buildings may have different heating/cooling than expected',
        'Crossbody bags with zippers preferred over backpacks for safety - thieves target tourist-style bags in crowded areas'
      ],
      behaviorNorms: [
        'Greet with two kisses on cheeks for friends and acquaintances - common social custom',
        'Lunch typically 2-4 PM, dinner 9-11 PM - embrace the late dining culture',
        'Siesta time 2-5 PM affects shop hours - plan accordingly',
        'Dress stylishly - appearance and presentation are valued in Spanish culture',
        'Tipping not mandatory but 5-10% appreciated at restaurants',
        'Spanish conversation tends to be louder and more animated - this is normal',
        'Sunday is family day - many shops close, perfect for parks and museums',
        'Physical greetings and touch during conversation are common and not inappropriate',
        'Learn basic Spanish phrases - locals genuinely appreciate the effort',
        'Be patient with the relaxed pace - punctuality is less strict than northern Europe'
      ],
      perception: [
        'Solo women travelers extremely welcome in Madrid - Spanish culture is warm, hospitable, and genuinely protective toward female tourists',
        'Is Madrid safe for women solo travelers? Absolutely - city is progressive where women can dine alone, explore attractions, and use transport independently',
        'Street harassment minimal compared to other European capitals - most Spanish men are respectful and incidents mainly involve drunk tourists',
        'Local perception of solo female travelers is very positive - seen as independent, adventurous people worthy of respect and assistance',
        'Spanish society has strong family values but fully accepts women traveling independently and making their own choices',
        'Business and service interactions treat solo women equally - no discrimination in restaurants, shops, or professional settings',
        'Safety concerns for solo women focus on pickpocketing rather than gender-based harassment from local Spanish population',
        'Cultural acceptance of female independence very high - solo women feel comfortable in bars, restaurants, and cultural venues alone',
        'Local women often approach solo female travelers to offer help and recommendations - sisterhood mentality common in Madrid',
        'Government and tourism industry actively promote Madrid as safe solo female travel destination with comprehensive support services'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['March-May', 'September-November'],
      events: 'Is Madrid safe for solo female travelers year-round? Yes, Madrid maintains excellent safety standards throughout all seasons. Spring (March-May) offers perfect weather (18-24°C) with blooming parks and fewer tourist crowds, creating optimal solo female travel conditions. Fall (September-November) provides comfortable temperatures and beautiful autumn colors with excellent safety conditions. Summer (June-August) can reach 40°C+ with intense heat waves, but nights remain very safe with vibrant outdoor dining and nightlife. Winter (December-February) is mild (5-15°C) with occasional rain but maintains excellent safety standards. Madrid Pride (July) and La Paloma Festival (August) create bustling but safe environments with increased police presence. San Isidro Festival (May 15) celebrates Madrid\'s patron saint with traditional events and enhanced security. Christmas markets (December-January) in Plaza Mayor are magical and well-patrolled.'
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'US State Department',
      lastUpdated: 'January 2025',
      details: 'Spain maintains excellent safety standards for travelers. Exercise normal precautions as you would in any major city.',
      reason: 'Spain maintains excellent safety standards for travelers. Exercise normal precautions as you would in any major city.',
      soloTravelerAdvice: [
        'Madrid consistently ranks among Europe\'s safest capitals for solo female travelers',
        'Spain has one of the lowest violent crime rates in the European Union',
        'Women traveling alone report feeling comfortable walking at night in central areas',
        'Street harassment is minimal and non-threatening compared to other major European cities',
        'Strong police presence and community safety create excellent conditions for solo female travel',
        'Local culture is protective and welcoming toward female tourists',
        'Public transportation is exceptionally safe at all hours with CCTV and security patrols',
        'Tourist areas have enhanced security and emergency response systems',
        'Medical facilities are excellent with English-speaking staff readily available'
      ]
    },
    emergencyInfo: {
      police: '091',
      fire: '080',
      medical: '061',
      general: '112'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.0521,
        eur: 1.0000,
        gbp: 0.8492
      },
      exchangeTips: [
        'Use bank ATMs (Santander, BBVA, CaixaBank) for best rates - avoid currency exchange booths that charge 10-15% commission',
        'Notify your bank before travel to avoid card blocks - many US/UK cards work seamlessly in Spain',
        'Always select "charge in local currency" (EUR) when paying by card to avoid poor conversion rates',
        'Keep some cash - smaller bars, markets, and traditional restaurants may be cash-only',
        'El Corte Inglés department store offers decent exchange rates if banks are closed',
        'Avoid airport currency exchanges - rates can be 20-30% worse than city bank ATMs',
        'Consider using Revolut or Wise cards for excellent exchange rates and no foreign transaction fees',
        'Many places accept contactless payments - very convenient and safer than carrying large amounts of cash',
        'Withdraw larger amounts less frequently to minimize ATM fees - most banks charge per transaction',
        'Keep emergency cash (€100-200) hidden separately from daily spending money for security'
      ],
      scamWarnings: [
        'Use official ATMs from major banks - avoid standalone machines in tourist areas',
        'Be cautious of fake police asking for passport/money - ask for proper ID',
        'Avoid overpriced tourist menus near major attractions - venture to local streets',
        'Watch for distraction theft at outdoor cafes and ATMs',
        'Use official taxi stands or apps - avoid unlicensed drivers at airports'
      ]
    },
    scamWarnings: [
      {
        title: 'Pickpocket Distraction Teams',
        description: 'Skilled teams work tourist areas using distraction techniques. One person distracts while another steals.',
        severity: 'medium'
      },
      {
        title: 'Fake Police Scam',
        description: 'Scammers pose as police asking to see passport and wallet. Real police have proper identification.',
        severity: 'medium'
      },
      {
        title: 'Tourist Menu Overcharging',
        description: 'Restaurants near attractions may have inflated tourist prices. Check local recommendations.',
        severity: 'low'
      },
      {
        title: 'ATM Skimming',
        description: 'Some standalone ATMs in tourist areas may have skimming devices. Use bank ATMs.',
        severity: 'medium'
      }
    ],
    languages: ['Spanish (Castilian)', 'English (limited)', 'Catalan', 'French', 'German'],
    daytimeSafetyPercent: 92.4,
    nighttimeSafetyPercent: 89.7,
    safetySourceName: 'Travel Ladies Community & Policia Nacional 2024',
    safetySourceUrl: 'https://travelladies.app/safety/spain/madrid',
    redFlags: [
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Most common',
        icon: 'Hand',
        details: 'Professional pickpockets operate in groups at Puerta del Sol, Gran Vía, and major attractions. They use distraction techniques while accomplices steal from bags and pockets.',
        prevention: 'Keep bags in front, use zippered pockets, stay alert in crowds, avoid displaying valuables, be wary of staged distractions'
      },
      {
        label: 'Distraction Theft at Cafes',
        frequency: 'Frequent',
        icon: 'UserX',
        details: 'Thieves target outdoor cafes and terraces, especially in tourist areas. They create distractions while stealing phones, bags, or wallets left on tables.',
        prevention: 'Keep belongings on your lap or secured to chair, never leave items unattended, choose seats away from street access'
      },
      {
        label: 'Fake Police Scams',
        frequency: 'Occasional',
        icon: 'Shield',
        details: 'Scammers pose as plainclothes police asking to check documents or claiming drug investigations. Real police have proper identification and uniforms.',
        prevention: 'Ask to see official badge and ID, request uniformed officer, never hand over passport, ask to go to police station'
      },
      {
        label: 'Overcharging at Tourist Restaurants',
        frequency: 'Occasional',
        icon: 'DollarSign',
        details: 'Some restaurants near major attractions inflate prices or add unexpected charges. Tourist menus may be overpriced compared to local options.',
        prevention: 'Check prices before ordering, read reviews, eat where locals dine, ask about charges for bread or service'
      },
      {
        label: 'ATM Skimming Devices',
        frequency: 'Occasional',
        icon: 'CreditCard',
        details: 'Card skimming devices attached to ATMs in tourist areas can steal card information. Criminals may also shoulder surf to see PIN numbers.',
        prevention: 'Use ATMs inside banks, cover PIN when entering, check for unusual devices on card slot, monitor bank statements'
      },
      {
        label: 'Unlicensed Taxi Drivers',
        frequency: 'Rare',
        icon: 'Car',
        details: 'Unlicensed taxis may overcharge tourists or take longer routes. Official Madrid taxis are white with red diagonal stripe.',
        prevention: 'Use official taxi stands, ensure meter is running, use rideshare apps, check taxi license displayed'
      },
      {
        label: 'Street Vendor Overcharging',
        frequency: 'Frequent',
        icon: 'ShoppingBag',
        details: 'Street vendors near attractions often charge inflated prices for souvenirs, scarves, or trinkets. Aggressive sales tactics target tourists.',
        prevention: 'Negotiate prices, shop at regular stores for comparison, walk away if pressured, avoid engaging with persistent vendors'
      }
    ],
    culturalDos: [
      'Learn basic Spanish greetings and phrases',
      'Dress stylishly - presentation matters',
      'Embrace late dining culture (9-11 PM)',
      'Use public transport confidently',
      'Tip 5-10% at restaurants when satisfied'
    ],
    culturalDonts: [
      "Don't expect shops to be open during siesta (2-5 PM)",
      "Don't be offended by louder conversation styles",
      "Don't skip the two-kiss greeting with locals",
      "Don't rush meals - dining is social time",
      "Don't wear flip-flops or very casual clothes in city center"
    ],
    culturalSensitivityTips: [
      'Greet with "dos besos" (two cheek kisses) among friends or handshake for formal meetings - Spanish value warm, personal interactions',
      'Say "por favor" and "gracias" frequently - politeness and courtesy are fundamental to Spanish social interaction',
      'Dress stylishly in smart casual clothing - avoid overly casual athletic wear in city center, Spanish appreciate good presentation',
      'Embrace late dining culture with lunch at 2-4 PM and dinner after 9 PM - rushing meals is considered disrespectful',
      'Learn basic Spanish phrases like "Buenos días" and "¿Habla inglés?" - even simple efforts earn enthusiastic local support',
      'Accept offered hospitality graciously - Spanish generosity is genuine and refusal can be seen as rude or ungrateful',
      'Don\'t expect strict punctuality in social settings - Spanish often arrive 30+ minutes late and this is culturally normal',
      'Don\'t be offended by animated conversations - Spanish passion for debate reflects engagement, not hostility or aggression',
      'Don\'t ignore siesta time (2-5 PM) when shops close - respect this sacred midday rest tradition',
      'Don\'t wear revealing clothing in churches or formal venues - cover shoulders and knees out of cultural respect',
      'Don\'t rush through meals or skip courses - dining is sacred social time in Spanish culture'
    ],
    womensConfidenceScore: {
      score: 89.2,
      source: "Travel Ladies Community & INE España 2024",
      sourceUrl: "https://travelladies.app/safety/spain/madrid"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 94, source: 'Madrid Tourism 2024', sourceUrl: 'https://www.esmadrid.com/' },
      { label: 'Nightlife', confidence: 87, source: 'Travel Ladies Madrid 2024', sourceUrl: 'https://travelladies.app/safety/spain/madrid' },
      { label: 'Public Transport', confidence: 91, source: 'Metro Madrid Safety 2024', sourceUrl: 'https://www.metromadrid.es/' },
      { label: 'Dining Alone', confidence: 92, source: 'Solo Female Travelers Club 2024', sourceUrl: 'https://www.solofemaletravelers.club/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Crowded metro during rush hours', 'Tourist areas with heavy foot traffic', 'Some nightlife districts late at night', 'Busy markets and festival areas'],
      reportingRate: 72,
      legalProtection: 'Excellent legal protections under Spanish law. Spain has comprehensive anti-harassment legislation and specialized police units. Gender violence hotline (016) available 24/7. Tourist police available in major areas with multilingual support.',
      supportResources: [
        'Gender Violence Hotline: 016 (free, confidential, 24/7)',
        'Madrid Crisis Centre: +34 900 869 947 (24/7 women victims support)',
        'WhatsApp Crisis Support: +34 602 224 417 (24/7)',
        'Emergency Services: 112 (ask for English-speaking operator)',
        'Madrid Police: 091 (specialized gender violence units)',
        'U.S. Embassy Madrid: +34 91 587 2200',
        'British Embassy Madrid: +34 91 714 6300'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Universitario La Paz',
          address: 'Paseo de la Castellana, 261, 28046 Madrid',
          phone: '+34 91 727 7000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Patients', 'Sexual Assault Support'],
          link: 'https://www.comunidad.madrid/hospital/lapaz/'
        },
        {
          name: 'Hospital Clínico San Carlos',
          address: 'Calle del Profesor Martín Lagos, s/n, 28040 Madrid',
          phone: '+34 91 330 3000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Gynecology', 'Trauma Care', 'Forensic Medicine'],
          link: 'https://www.madrid.org/hospitalclinico/'
        },
        {
          name: 'Hospital Universitario Ramón y Cajal',
          address: 'Ctra. de Colmenar Viejo, km 9,100, 28034 Madrid',
          phone: '+34 91 336 8000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Mental Health Support'],
          link: 'https://www.madrid.org/hospitalramoncajal/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Real - Gran Vía',
          address: 'Gran Vía, 26, 28013 Madrid',
          phone: '+34 91 521 2895',
          hours: 'Daily 9:30-22:00',
          emergency: false,
          link: 'https://www.farmaciareal.es/'
        },
        {
          name: 'Farmacia Internacional',
          address: 'Calle del Arenal, 2, 28013 Madrid',
          phone: '+34 91 521 9316',
          hours: 'Daily 9:30-21:30',
          emergency: false,
          link: 'https://www.farmaciainternacional.com/'
        },
        {
          name: 'Farmacia Meneses - 24 Hours',
          address: 'Calle de Alcalá, 43, 28014 Madrid',
          phone: '+34 91 521 4216',
          hours: '24/7',
          emergency: true,
          link: 'https://www.farmaciasmadrid.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Centro de Planificación Familiar Madrid: +34 91 588 5180',
          'Clínica Ginecológica Madrid: +34 91 435 9850',
          'Hospital La Milagrosa Women\'s Health: +34 91 440 0200'
        ],
        gynecologists: [
          'Dra. Carmen López - Centro Médico Teknon: +34 91 353 1919',
          'Dra. Isabel Martínez - Clínica Ruber: +34 91 387 5000'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription for women 18+',
          'Emergency contraception available at hospital emergency departments',
          'Family planning centers provide consultations and emergency contraception'
        ],
        sanitaryProducts: [
          'Available at all pharmacies, supermarkets (Mercadona, Carrefour), and convenience stores',
          'Organic and eco-friendly options widely available',
          'Free products available at some universities and public health centers'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Madrid',
        'COVID-19 vaccination recommended',
        'Routine vaccines should be up to date (MMR, DPT, flu)',
        'European Health Insurance Card (EHIC) accepted for EU citizens'
      ],
      healthRisks: [
        'Summer heat can reach 40°C+ - stay hydrated and use sun protection',
        'Air quality generally good but can be affected during high pollution days',
        'Tap water is safe to drink throughout Madrid',
        'Allergy season (spring) may affect sensitive individuals'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Madrid',
        address: 'Calle de Serrano, 75, 28006 Madrid',
        phone: '+34 91 587 2200',
        email: 'madrid-acs@state.gov',
        emergency: '+34 91 587 2200',
        link: 'https://es.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Madrid',
          address: 'Calle de Serrano, 75, 28006 Madrid',
          phone: '+34 91 587 2200',
          link: 'https://es.usembassy.gov/'
        },
        {
          name: 'British Embassy Madrid',
          address: 'Paseo de la Castellana, 259D, 28046 Madrid',
          phone: '+34 91 714 6300',
          link: 'https://www.gov.uk/world/organisations/british-embassy-madrid'
        },
        {
          name: 'German Embassy Madrid',
          address: 'Calle de Fortuny, 8, 28010 Madrid',
          phone: '+34 91 557 9000',
          link: 'https://madrid.diplo.de/'
        },
        {
          name: 'French Embassy Madrid',
          address: 'Calle de Salustiano Olózaga, 9, 28001 Madrid',
          phone: '+34 91 423 8900',
          link: 'https://es.ambafrance.org/'
        },
        {
          name: 'Spanish Government Services',
          address: 'Multiple locations throughout Madrid',
          phone: '+34 060',
          link: 'https://www.madrid.es/'
        },
        {
          name: 'Australian Embassy Madrid',
          address: 'Paseo de la Castellana, 259D, 28046 Madrid',
          phone: '+34 91 353 6600',
          link: 'https://spain.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Madrid',
          address: 'Paseo de la Castellana, 259D, 28046 Madrid',
          phone: '+34 91 382 8400',
          link: 'https://www.canadainternational.gc.ca/spain-espagne/'
        },
        {
          name: 'Netherlands Embassy Madrid',
          address: 'Avenida del General Perón, 27, 28020 Madrid',
          phone: '+34 91 353 7500',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/spain'
        },
        {
          name: 'Danish Embassy Madrid',
          address: 'Claudio Coello, 91, 28006 Madrid',
          phone: '+34 91 431 8445',
          link: 'https://spanien.um.dk/'
        },
        {
          name: 'Swiss Embassy Madrid',
          address: 'Núñez de Balboa, 35A, 28001 Madrid',
          phone: '+34 91 436 3960',
          link: 'https://www.eda.admin.ch/madrid'
        },
        {
          name: 'Indian Embassy Madrid',
          address: 'Avenida de Pío XII, 30-32, 28016 Madrid',
          phone: '+34 91 346 0806',
          link: 'https://www.eoispain.gov.in/'
        }
      ],
      womensRights: [
        'Spain has comprehensive women\'s rights legislation among the strongest in Europe',
        'Equal employment opportunities and pay rights guaranteed by law',
        'Comprehensive anti-discrimination and anti-harassment laws',
        'Legal abortion services available and accessible',
        'Strong domestic violence protections with specialized courts',
        'Spain leads Europe in progressive gender equality legislation'
      ],
      legalSupport: [
        'Ilustre Colegio de Abogados de Madrid: +34 91 521 8570 (lawyer referrals)',
        'Legal Aid Madrid: +34 91 722 0000 (free legal assistance)',
        'Women\'s Rights Association Madrid: +34 91 521 2558',
        'International legal aid organizations available through embassies',
        'Free legal consultations available for tourists through consulates'
      ],
      reportingProcedures: [
        'Report crimes to Policía Nacional at 091 or local Policía Municipal',
        'Tourist police available in major areas - ask for English-speaking officers',
        'File police reports at any Comisaria (police station) - interpreters available',
        'Keep copies of all police reports (denuncia) for insurance and consulate purposes',
        'Contact your consulate immediately for serious crimes or legal assistance',
        'Victim services available through Madrid regional government: +34 012'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Madrid Metro',
          safety: 8.8,
          recommendations: ['Use contactless payment', 'Safe at all hours', 'Excellent security and CCTV', 'Clean and efficient'],
          companies: ['Metro Madrid'],
          link: 'https://www.metromadrid.es/'
        },
        {
          type: 'Madrid Bus (EMT)',
          safety: 8.7,
          recommendations: ['Night buses available', 'Real-time tracking', 'Accessible and safe', 'Covers entire city'],
          companies: ['EMT Madrid'],
          link: 'https://www.emtmadrid.es/'
        },
        {
          type: 'Uber Madrid',
          safety: 8.5,
          recommendations: ['Official app only', 'Verify driver details', 'Share trip with contacts', 'Available 24/7'],
          companies: ['Uber'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Cabify Madrid',
          safety: 8.4,
          recommendations: ['Spanish rideshare leader', 'Professional drivers', 'Fixed pricing', 'Excellent safety record'],
          companies: ['Cabify'],
          link: 'https://cabify.com/'
        },
        {
          type: 'Official Madrid Taxis',
          safety: 8.2,
          recommendations: ['White cars with red diagonal', 'Metered fares', 'Airport supplements fixed', 'Licensed and regulated'],
          companies: ['Madrid Taxi'],
          link: 'https://www.madrid.org/'
        },
        {
          type: 'BiciMAD Bike Share',
          safety: 7.8,
          recommendations: ['Electric bike system', 'Well-maintained bikes', 'Use bike lanes', 'Helmet recommended'],
          companies: ['BiciMAD'],
          link: 'https://www.bicimad.com/'
        }
      ],
      nightTravel: {
        safety: 8.6,
        warnings: [
          'Madrid is exceptionally safe for night travel',
          'Metro runs until 1:30 AM (2:30 AM on Fridays/Saturdays)',
          'Night buses (Búhos) operate when metro is closed',
          'Well-lit streets and excellent police presence'
        ],
        alternatives: [
          'Metro system safe and reliable until closing time',
          'Night bus network covers entire city when metro closes',
          'Uber and Cabify available 24/7 with excellent safety',
          'Walking is generally safe in central areas - streets remain busy',
          'Official taxis readily available at taxi stands throughout night'
        ]
      },
      verifiedProviders: [
        {
          name: 'Metro Madrid',
          type: 'Public Metro',
          contact: '+34 91 779 9999',
          safety: 8.8
        },
        {
          name: 'EMT Madrid',
          type: 'Public Bus',
          contact: '+34 91 406 8810',
          safety: 8.7
        },
        {
          name: 'Cabify',
          type: 'Rideshare',
          contact: 'App-based',
          safety: 8.4
        },
        {
          name: 'Radio Taxi Madrid',
          type: 'Official Taxi',
          contact: '+34 91 547 8200',
          safety: 8.2
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at hotels and quality hostels',
        'Electronic key card systems standard',
        'CCTV in common areas and entrances',
        'Safe neighborhoods throughout central Madrid',
        'Concierge services for area recommendations',
        'English-speaking staff at international accommodations'
      ],
      safeNeighborhoods: [
        'Salamanca',
        'Retiro',
        'Malasaña',
        'Chueca',
        'Centro/Sol',
        'La Latina'
      ],
      womensOnly: [
        {
          name: 'Sungate One Madrid',
          type: 'Hostel',
          features: ['Female-only rooms', 'Individual beds', 'Enhanced security', 'Central location'],
          rating: 4.6
        },
        {
          name: 'OK Madrid Hostel',
          type: 'Hostel',
          features: ['Female-only dorms', 'Historical building', 'Air conditioning', 'Safe area'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.2,
          comments: 'Felt incredibly safe walking alone at night. Madrid exceeded all expectations for solo female travel.',
          date: '2024-12-20'
        },
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'Safest city I\'ve ever visited. Local people were so helpful and protective of solo travelers.',
          date: '2024-12-15'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$55 - $130+ USD / day',
        description: 'Madrid offers excellent value compared to other European capitals. Solo female travelers can find safe, comfortable options across budget ranges.',
        tip: 'Invest in neighborhoods like Salamanca or Retiro for maximum safety - the small extra cost significantly enhances solo travel security.'
      },
      accommodation: [
        {
          type: 'Luxury Hotel',
          avgCost: '$165-440+',
          safetyNote: 'Premium hotels in Salamanca and Retiro districts offer top-tier security and concierge support',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$77-165',
          safetyNote: 'Excellent safety standards in central areas, many boutique options perfect for solo women',
          safetyLevel: 'high'
        },
        {
          type: 'Hostel',
          avgCost: '$22-50',
          safetyNote: 'Many female-only dorms available, choose Central or Malasaña areas for best safety',
          safetyLevel: 'medium'
        },
        {
          type: 'Airbnb/Apartment',
          avgCost: '$44-110',
          safetyNote: 'Verify secure building access, prefer ground-floor or buildings with doorman',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Madrid Metro',
          cost: '$1.65-2.20/ride',
          safetyDescription: 'Exceptionally safe with excellent CCTV coverage and regular patrols - one of Europe\'s safest metro systems',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Cabify',
          cost: '$9-22/ride',
          safetyDescription: 'Reliable and safe, widely available, preferred by solo female travelers for late night travel',
          safetyLevel: 'high'
        },
        {
          method: 'Madrid Bus (EMT)',
          cost: '$1.65/ride',
          safetyDescription: 'Safe and extensive network, well-lit stops with real-time information',
          safetyLevel: 'high'
        },
        {
          method: 'Official Taxi',
          cost: '$7-17/ride',
          safetyDescription: 'White taxis with red diagonal stripe, use official taxi ranks for maximum safety',
          safetyLevel: 'high'
        },
        {
          method: 'BiciMAD Bike Share',
          cost: '$2.20/30min',
          safetyDescription: 'Electric bike sharing, use during daylight hours with dedicated bike lanes',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Madrid is exceptionally walkable with excellent pedestrian safety, even at night in central areas',
          safetyLevel: 'high'
        },
        {
          method: 'Airport Express (Línea Exprés)',
          cost: '$5.50/trip',
          safetyDescription: 'Direct airport connection, 24-hour service, safe for solo travelers with luggage storage',
          safetyLevel: 'high'
        },
        {
          method: 'Cercanías Train',
          cost: '$1.85-4.40/ride',
          safetyDescription: 'Regional trains to nearby cities, safe with good security presence',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Smart Budgeting = Safer Travel: Investing in safe neighborhoods and transportation is worth the extra cost for solo women',
        'Choose accommodations in Salamanca/Retiro districts - the 15-20% premium ensures better security and peace of mind',
        'Budget extra 20-30% for safe transportation (Uber/taxi vs walking alone at night) - your safety is worth the investment',
        'Invest in comprehensive travel insurance with medical and emergency evacuation coverage - Spain has excellent healthcare',
        'Keep emergency cash ($220/€200) separate from daily spending money in case of card issues or emergencies',
        'Budget for premium airport transfers rather than public transport when carrying heavy luggage - safer and more convenient',
        'Plan for higher costs during peak season (July-August) but enjoy enhanced security during major festivals and events',
        'Metro day passes ($6.20) are economical for multiple trips and safer than walking long distances',
        'Food markets like Mercado San Miguel offer safe, affordable dining perfect for solo female travelers',
        'Museum passes provide both savings and structured, safe cultural activities ideal for solo exploration'
      ]
    },
  culturalSensitivity: {
    dressCode: 'Madrid values style and good appearance. Dress elegantly but not flashily - think smart casual to chic. Comfortable walking shoes are essential for cobblestone streets. Layers are recommended as Spanish buildings may have different heating/cooling than expected. Avoid revealing clothing when visiting churches or formal venues.',
    behaviorNorms: [
      'Greet with two kisses on cheeks for friends and acquaintances - common social custom',
      'Lunch typically 2-4 PM, dinner 9-11 PM - embrace the late dining culture',
      'Siesta time 2-5 PM affects shop hours - plan accordingly',
      'Dress stylishly - appearance and presentation are valued in Spanish culture',
      'Tipping not mandatory but 5-10% appreciated at restaurants',
      'Spanish conversation tends to be louder and more animated - this is normal',
      'Sunday is family day - many shops close, perfect for parks and museums',
      'Physical greetings and touch during conversation are common and not inappropriate',
      'Learn basic Spanish phrases - locals genuinely appreciate the effort',
      'Be patient with the relaxed pace - punctuality is less strict than northern Europe'
    ],
    perception: 'Madrid is exceptionally welcoming to solo female travelers. Spanish culture is warm and inclusive, with locals being helpful and protective toward tourists. Women traveling alone are well-accepted and face minimal judgment. The city\'s progressive attitudes and strong feminist movements create a supportive environment. Most interactions are respectful, and locals often go out of their way to help lost tourists.'
  },
  youtubeVideo: {
    videoId: "Gu7JDzo43Zs"
  }
};

export default madrid;