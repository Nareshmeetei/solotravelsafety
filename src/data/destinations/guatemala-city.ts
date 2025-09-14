import { Destination } from './types';

// Enhanced Safety Data for Guatemala City - January 2025 Update
const guatemalacity: Destination = {
    city: 'Guatemala City',
    country: 'Guatemala',
    continent: 'North America',
    countryCode: 'gt',
    overallScore: 2.8,
    nightSafety: 1.9,
    publicTransit: 3.2,
    walkingAlone: 2.5,
    tags: ['warning-flags', 'high-risk'],
    bgColor: 'bg-red-75',
    reviewCount: 298,
    lastUpdated: '45 minutes ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.9, 
        context: 'Extremely dangerous at night for solo female travelers with only 20.7% safety rating. Is Guatemala City safe for female solo travelers at night? Absolutely not - Guatemala City has critical-level violent crime including armed robberies, sexual assault, and express kidnappings after dark. US State Department rates the risk as "critical" with Zone 18 designated as "Do Not Travel". Even safe zones like Zona 10 experience crime at night - not recommended for women traveling alone seeking solo travel safety.' 
      },
      publicTransit: { 
        score: 3.2, 
        context: 'Public buses (chicken buses) present extreme safety risks for solo female travelers with frequent armed attacks. Is Guatemala City safe for women solo travelers using public transport? No - 2024 government advisories strongly warn women traveling alone against public transportation due to robbery and sexual assault incidents. Uber operates only in Guatemala City and is the safest transport option for solo female travel safety. Licensed yellow taxis are acceptable but white taxis should be avoided completely.' 
      },
      walkingAlone: { 
        score: 2.5, 
        context: 'Walking alone is extremely dangerous for solo female travelers and strongly discouraged. With a 45.2% daytime safety rating, Guatemala City has high rates of mugging (concern level 87.4%), sexual harassment targeting women traveling alone, and express kidnapping. Even experienced solo female travelers report feeling unsafe and recommend avoiding solo travel to Guatemala City entirely for optimal solo female travel safety.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Zona 10 (Zona Viva)',
          description: 'Upscale business and hotel district with international hotels, restaurants, and shopping. Has better security presence but still experiences petty crime and occasional violent incidents targeting solo female travelers. Safest area for women traveling alone accommodation but extreme caution still required after dark.'
        },
        {
          name: 'Zona 14',
          description: 'Modern commercial district with shopping centers, restaurants, and business hotels. Generally safer than other zones for solo female travelers but crime still occurs. Limited nightlife options and better for women business travelers. Stay alert even in this "safer" zone as solo female travel safety remains a concern.'
        },
        {
          name: 'Zona 2 (Selected Areas)',
          description: 'Contains some middle-class residential areas and the Aurora Airport. Generally quieter than central zones but still requires standard safety precautions. Mainly relevant for airport proximity rather than tourist attractions.'
        },
        {
          name: 'Zona 4 (Limited Areas)',
          description: 'Contains some government buildings and PROATUR tourist office, but overall crime levels remain concerning. Only recommended for specific business during daylight hours with arranged transportation.'
        }
      ],
      caution: ['Zona 1 (Historic Center)', 'Zona 9', 'Zona 13 (Airport Area)'],
      avoid: ['Zona 18', 'Villa Nueva', 'Zona 3', 'Zona 21 (Especially at Night)', 'All Zones After 10 PM']
    },
    accommodations: [
      {
        name: 'Hyatt Centric Guatemala City',
        type: 'luxury hotel',
        features: ['24-hour multilingual staff', '24-hour shuttle service', 'Rooftop terrace', 'Secure keycard access', 'Free parking', 'Zona 10 location'],
        rating: 4.6,
        reviews: 602,
        notes: 'Top-ranked luxury hotel (#1 of 62 hotels) offering maximum solo female travel safety. Features comprehensive security protocols, professional international traveler assistance, and prime safe zone location. Highly recommended by women travelers for Guatemala City safe accommodation.'
      },
      {
        name: 'Real InterContinental Guatemala by IHG',
        type: 'international hotel',
        features: ['Global chain standards', 'Zona 10 business district', '24/7 concierge', 'Enhanced security', 'Spa services', 'Business center'],
        rating: 4.5,
        reviews: 1517,
        notes: 'Premium international chain with proven solo female travel safety standards. Features dedicated women business traveler services, secure diplomatic area location, and comprehensive safety amenities. Excellent choice for solo female travelers prioritizing security.'
      },
      {
        name: 'The Westin Camino Real Guatemala',
        type: 'luxury hotel',
        features: ['Heated outdoor pool', 'Airport proximity (1.2 miles)', 'Zona 10 safe zone', '24-hour security', 'Spa and fitness center', 'Multiple dining'],
        rating: 4.6,
        reviews: 1174,
        notes: '5-star luxury hotel (#5 ranked) perfect for solo female travelers seeking maximum comfort and security. Features secure Zona 10 location with excellent safety ratings and international traveler services. Reviewers specifically mention safe zone benefits.'
      },
      {
        name: 'Hotel Barceló Guatemala City',
        type: 'business hotel',
        features: ['Classic air-conditioned rooms', 'In-room safes', '24-hour reception', 'Airport shuttle (2.5km)', 'Business district location', 'Multilingual staff'],
        rating: 4.5,
        reviews: 1789,
        notes: '4.5-star business hotel strategically located for solo female travel safety. Features professional service standards, secure business district placement, and convenient airport access. Guests consistently report feeling safe and well-supported.'
      },
      {
        name: 'Villa Nola',
        type: 'boutique guesthouse',
        features: ['Gated community security', 'Airport proximity', 'Personalized service', 'Controlled access', 'Intimate setting', 'Solo traveler focused'],
        rating: 4.7,
        reviews: 287,
        notes: 'Exclusive boutique accommodation described as "traveler\'s dream" by solo female guests. Features gated community security, personalized attention, and strategic airport location. Perfect for women travelers seeking intimate, secure accommodation.'
      },
      {
        name: 'Hotel Casa Veranda Guatemala',
        type: 'boutique hotel',
        features: ['24-hour reception', 'Concierge services', 'Currency exchange', '24-hour gym', 'Business center', 'Tour assistance'],
        rating: 4.4,
        reviews: 523,
        notes: 'Full-service boutique hotel offering comprehensive support for solo female travelers. Features 24-hour assistance, secure entry systems, and professional multilingual staff. Excellent choice for women seeking complete travel support services.'
      },
      {
        name: 'Hotel Casa Santo Domingo',
        type: 'luxury hotel',
        features: ['24/7 armed security', 'Zona 10 diplomatic area', 'Female-friendly staff', 'US Embassy proximity', 'Secure parking', 'Historic charm'],
        rating: 4.7,
        reviews: 1834,
        notes: 'Historic luxury hotel combining traditional elegance with modern solo female travel safety standards. Features maximum security measures, embassy district location, and specialized women traveler amenities. Consistently rated among safest Guatemala City accommodations.'
      }
    ],
    alerts: [
      { 
        title: 'US State Department Level 3 Advisory', 
        description: 'Reconsider Travel due to crime. High levels of violent crime including armed robbery, assault, and express kidnapping', 
        location: 'Nationwide', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: 'Current - January 2025' 
      },
      { 
        title: 'Zone 18 Do Not Travel Warning', 
        description: 'Level 4 advisory due to extreme gang activity and violent crime. Complete no-travel zone', 
        location: 'Zone 18', 
        reportCount: 34, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Express Kidnapping Increase', 
        description: 'Rising incidents of short-term kidnapping for ATM withdrawals, particularly targeting taxi passengers', 
        location: 'Citywide', 
        reportCount: 23, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Sexual Assault Warning', 
        description: 'Increased reports of sexual assault targeting solo female travelers, especially in transit areas', 
        location: 'Zona 1, Transport hubs', 
        reportCount: 15, 
        severity: 'high', 
        dateReported: '5 days ago' 
      }
    ],
    safetyTips: {
      clothing: `• Conservative, modest dress essential - cover shoulders, knees, and avoid form-fitting clothing
• Dark, neutral colors recommended to avoid unwanted attention in high-crime city
• Never wear jewelry, designer clothing, or expensive accessories - major robbery target
• Carry decoy wallet with small bills - keep real money/cards hidden separately
• Wear closed-toe shoes for quick movement and avoid sandals that slow escape
• Use anti-theft crossbody bag with zippers facing your body at all times
• Avoid bright colors or clothing that makes you stand out as foreign tourist`,
      firstTimers: `• Guatemala City extremely dangerous for solo female travelers - consider skipping entirely
• Arrange secure airport transfers in advance - never use public transport or unlicensed taxis
• Stay only in Zona 10 accommodations with 24/7 security - other zones unsafe for women
• Never walk alone at any time - use Uber or hotel-arranged transport exclusively
• Register with US Embassy and inform family/friends of detailed itinerary
• Purchase comprehensive travel insurance with emergency evacuation coverage
• Keep emergency cash hidden for immediate departure if situations deteriorate
• Trust your instincts completely - if something feels wrong, leave immediately`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Uber Guatemala',
        'Tigo Shop Guatemala',
        'Guatemala Maps Pro'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers in high-risk destinations', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and GPS tracking for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response - hold button when unsafe, authorities notified if not released', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing and emergency alerts - essential for Guatemala City safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community app with safety warnings and tips', rating: 4.0 },
        { name: 'Uber Guatemala', link: 'https://www.uber.com/gt/', description: 'Safest ground transport in Guatemala City with GPS tracking - never use public buses', rating: 4.4 },
        { name: 'Tigo Shop Guatemala', link: 'https://www.tigo.com.gt/tigo-shop-movil', description: 'Official Tigo app for mobile top-ups and data plans - essential for staying connected safely', rating: 4.3 },
        { name: 'Guatemala Maps Pro', link: 'https://play.google.com/store/apps/details?id=com.guatemala.maps', description: 'Offline maps for Guatemala with safe zone markings and emergency locations', rating: 4.2 }
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
          english: 'I need help!',
          local: '¡Necesito ayuda!',
          localLanguage: 'Spanish'
        },
        {
          english: 'Where is the hospital?',
          local: '¿Dónde está el hospital?',
          localLanguage: 'Spanish'
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Déjeme en paz, por favor.',
          localLanguage: 'Spanish'
        },
        {
          english: 'I feel unsafe.',
          local: 'No me siento segura.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Call the US Embassy!',
          local: '¡Llame a la Embajada de Estados Unidos!',
          localLanguage: 'Spanish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Conservative dress essential for solo female travel safety - cover shoulders and knees at all times, especially in religious sites where sleeveless tops are inappropriate',
        'Dark, neutral colors (black, navy, brown) recommended to avoid unwanted attention in this class-conscious society - bright colors mark you as foreign tourist',
        'Business/formal settings require conservative dresses or two-piece suits - Guatemala City has corporate atmosphere where professional appearance matters',
        'Never wear expensive jewelry, designer clothing, or accessories - major robbery target and displays wealth inappropriately in high-crime city',
        'Carry lightweight sweater or jacket for churches and 5,000ft elevation - religious sites strictly enforce modest dress codes for women',
        'Form-fitting clothing attracts dangerous attention - loose, modest clothing helps solo female travelers blend in and stay safer'
      ],
      behaviorNorms: [
        'Use formal Spanish greetings "Mucho gusto" for first meetings and "usted" instead of "tú" - proper protocols show cultural respect and improve safety',
        'Maintain respectful distance in conversations and avoid prolonged eye contact with men - personal space highly valued and prevents misinterpretation',
        'Never discuss politics, civil war history, or violence - extremely sensitive topics that can create dangerous situations for solo female travelers',
        'Ask permission before photographing people, especially Indigenous Maya women and children - unauthorized photos have led to violent incidents',
        'Show deep respect for religious customs in predominantly Catholic country - remove hats in churches, silence phones, dress modestly in religious spaces',
        'Learn basic Spanish phrases beyond "Hola" - English very limited outside tourist areas and effort demonstrates respect for local culture'
      ],
      perception: [
        'Solo female travelers extremely rare in Guatemala City due to safety concerns - you will attract significant attention and curiosity from locals',
        'Strong machismo culture means independent women travelers are unusual and may be perceived as vulnerable targets by criminals seeking easy marks',
        'Conservative Maya and Catholic values create traditional gender role expectations - solo women may face concern, curiosity, or unwanted advances',
        'Foreign solo women automatically seen as wealthy due to ability to travel independently - this perception increases targeting risk significantly',
        'Recent feminist activism (2024) shows changing urban attitudes, but traditional views remain dominant and affect solo female travel safety',
        'Tourist areas more accepting of independent women but extreme caution still required - cultural acceptance does not eliminate security risks'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '110',
      fire: '123', 
      medical: '120',
      general: '110'
    },
    currency: {
      name: 'Guatemalan Quetzal', code: 'GTQ', exchangeRate: {
      usd: 0.1304,
      eur: 0.1111,
      gbp: 0.0970
    }, 
      exchangeTips: [
        'Use hotel or bank ATMs only - avoid standalone or poorly lit ATM locations',
        'ATM robbery is extremely common - have someone accompany you or use hotel concierge',
        'Exchange money only at official banks, not street vendors or unofficial cambios',
        'Credit cards skimming frequent - use cash when possible and monitor accounts daily',
        'Never withdraw large amounts - criminals follow ATM users to commit express kidnapping',
        'Use Zona 10 bank branches during business hours for safest currency exchange',
        'Keep emergency USD cash hidden separately from daily spending money',
        'Notify your bank of Guatemala travel to avoid card blocking during emergencies'
      ],
      scamWarnings: [
        'ATM skimming and robbery - criminals follow victims after withdrawals',
        'Express kidnapping via taxi - forced ATM withdrawals under threat', 
        'Fake police demanding money - always verify credentials and badge numbers',
        'Currency exchange street scams - use only official bank locations',
        'Credit card cloning at restaurants - use cash when possible'
      ]
    },
    scamWarnings: [
      { 
        title: 'Express Kidnapping via Taxi', 
        description: 'Criminals posing as taxi drivers or using accomplices to force victims to ATM withdrawals. Affects both street-hailed and some registered taxis.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police Officers', 
        description: 'Criminals impersonating police to commit robbery, extortion, and sexual assault. Always ask for proper identification and badge numbers.', 
        severity: 'high' 
      },
      { 
        title: 'ATM Skimming and Robbery', 
        description: 'Card skimming devices and armed robberies at ATM locations. Criminals often follow victims after withdrawals.', 
        severity: 'high' 
      },
      { 
        title: 'Tourist Service Provider Assault', 
        description: 'Some tourism service providers build trust with female tourists before committing sexual assault. Verify all tour operators through official channels.', 
        severity: 'high' 
      },
      { 
        title: 'White Taxi Overcharging', 
        description: 'Unlicensed white taxis frequently overcharge and may be involved in more serious crimes. Use only yellow licensed taxis or Uber.', 
        severity: 'medium' 
      }
    ],
    languages: ['Spanish', 'Limited English in tourist areas'],
    daytimeSafetyPercent: 45.2, // Source: Numbeo 2024 (https://www.numbeo.com/crime/in/Guatemala-City)
    nighttimeSafetyPercent: 20.7, // Source: Numbeo 2024 (https://www.numbeo.com/crime/in/Guatemala-City)
    safetySourceName: 'Numbeo 2024',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Guatemala-City',
    redFlags: [
      {
        label: 'Violent Crime (Muggings, Armed Robbery)',
        frequency: 'Most common',
        icon: 'PocketKnife',
        details: 'Guatemala City has one of the world\'s highest violent crime rates targeting solo female travelers. Armed robberies occur in broad daylight, even in "safe" zones like Zona 10. Criminals use guns and knives to force victims to surrender money, phones, and jewelry. Express kidnapping involves forcing victims to ATM withdrawals under threat. Solo women are specifically targeted as easy marks due to perceived vulnerability and wealth.',
        prevention: 'Stay in groups, use hotel transport, avoid displaying valuables, carry decoy wallet, never resist armed attackers'
      },
      {
        label: 'Taxi Scams & Express Kidnapping',
        frequency: 'Frequent',
        icon: 'Car',
        details: 'White unlicensed taxis and some registered drivers work with criminal networks to kidnap solo female travelers for forced ATM withdrawals. Victims are driven to multiple ATMs while threatened with weapons until daily withdrawal limits are reached. Some cases involve sexual assault during extended captivity. Fake taxis use accomplices to rob passengers before abandoning them in dangerous areas.',
        prevention: 'Use only Uber or hotel-arranged transport, never street-hailed taxis, verify driver identity, share ride details with contacts'
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Frequent',
        icon: 'Hand',
        details: 'Professional pickpocketing rings specifically target solo female tourists in markets, transport hubs, and crowded areas. Motorcycle thieves snatch purses and phones from pedestrians, often causing injury when victims don\'t release items quickly. Distraction techniques include staged accidents, fake assistance offers, and coordinated group tactics while accomplices steal belongings.',
        prevention: 'Use anti-theft crossbody bags, keep phones hidden, avoid crowds, stay alert in markets, secure bag zippers facing body'
      },
      {
        label: 'Corruption & Police Bribery',
        frequency: 'Occasional',
        icon: 'Shield',
        details: 'Some corrupt police officers target solo female tourists for fabricated traffic violations or document checks, demanding immediate cash payments to avoid "arrest." Fake police impersonate officers using realistic uniforms and badges to extort money or commit robbery. Real officers may demand bribes for basic assistance or reporting crimes, especially targeting vulnerable solo travelers.',
        prevention: 'Always verify police credentials, request supervisor presence, contact embassy for serious issues, never pay bribes alone'
      }
    ],
    usefulTips: [
      {
        title: "Stay in safe zones and avoid walking alone at night",
        description: "Book accommodation in Zona 10 or Zona 14, and avoid walking alone after dark, especially outside these areas.",
        severity: "high",
        sourceName: "Journey By Backpack, 2025",
        sourceUrl: "https://journeybybackpack.com/destinations/guatemala/is-guatemala-safe-for-solo-female-travel/"
      },
      {
        title: "Use registered taxis, Uber, or hotel-arranged transport",
        description: "Avoid public buses and unregistered taxis. Arrange airport transfers and city rides through your hotel or use Uber for safety.",
        severity: "high",
        sourceName: "Lady Abroad, 2025",
        sourceUrl: "https://ladyabroad.com/how-to-get-to-antigua-from-guatemala-city/"
      },
      {
        title: "Keep valuables hidden and avoid displaying wealth",
        description: "Carry only what you need, keep phones and jewelry out of sight, and use a cross-body bag with zippers.",
        severity: "high",
        sourceName: "She Roams The Globe, 2025",
        sourceUrl: "https://sheroamstheglobe.com/solo-female-travel-guatemala/"
      },
      {
        title: "Arrange all travel and tours through trusted providers",
        description: "Book shuttles, tours, and excursions through your hotel or reputable agencies. Avoid accepting rides from strangers.",
        severity: "high",
        sourceName: "Journey By Backpack, 2025",
        sourceUrl: "https://journeybybackpack.com/destinations/guatemala/is-guatemala-safe-for-solo-female-travel/"
      },
      {
        title: "Have a local SIM card and emergency contacts ready",
        description: "Buy a local SIM for connectivity, and save emergency numbers (110 for police, 1500 for PROATUR tourist assistance).",
        severity: "medium",
        sourceName: "Lady Abroad, 2025",
        sourceUrl: "https://ladyabroad.com/safety-in-antigua-heres-what-to-know/"
      }
    ], // Tips sourced from Journey By Backpack, Lady Abroad, She Roams The Globe (2025)
    culturalSensitivityTipsDetails: [
      'Understand Guatemala\'s conservative Catholic-Maya heritage - 80% Catholic with indigenous influences creating traditional gender role expectations for solo female travelers',
      'Dress conservatively beyond tourist areas - cover shoulders, knees, avoid form-fitting clothing. Dark neutral colors reduce unwanted attention in this class-conscious society',
      'Master formal Spanish greetings - "Mucho gusto" for first meetings, "usted" instead of "tú", "Buenos días/tardes" essential for respectful interactions with locals',
      'Respect indigenous photography boundaries - never photograph Maya women/children without explicit permission. Violent incidents have occurred over unauthorized photos',
      'Avoid sensitive political topics completely - civil war (1960-1996), government corruption, gang violence are traumatic subjects. Focus on positive cultural aspects only',
      'Navigate machismo culture carefully - men may be "bold with women" (culturally normalized). Maintain firm boundaries while understanding cultural context',
      'Show deep religious reverence - remove hats in churches, silence phones, dress modestly in religious spaces. Both Catholic and Maya spiritual practices require respect',
      'Understand solo women rarity - independent female travelers extremely unusual, making you highly visible. Conservative culture means curiosity but also potential targeting',
      'Follow gift-giving protocols - use both hands when giving/receiving, bring small gifts to homes. Proper etiquette shows cultural awareness and respect',
      'Respect personal space norms - maintain respectful distance in conversations, avoid prolonged eye contact with men to prevent misinterpretation of romantic interest',
      'Learn about Maya cultural heritage - show interest in traditional crafts, textiles, and customs. Knowledge demonstrates respect for indigenous culture beyond tourist stereotypes',
      'Adapt to formal business culture - Guatemala City has corporate atmosphere where appearance matters. Professional dress and behavior earn better treatment and safety',
      'Understand family-centered society - family comes first in all decisions. Showing respect for family values and traditions improves local relationships',
      'Follow religious festival etiquette - Holy Week, Christmas celebrations are sacred. Participate respectfully from appropriate distances or accept invitations graciously',
      'Respect meal timing and customs - lunch is family time, dinner often late. Wait for host to begin eating, compliment food preparation, offer to help cleanup'
    ],
    culturalDos: [
      'Stay in safe zones like Zona 10 or 14.',
      'Use registered taxis, Uber, or hotel transport.',
      'Keep valuables hidden and secure.',
      'Arrange tours and rides through trusted providers.',
      'Have a local SIM and emergency contacts ready.'
    ],
    culturalDonts: [
      "Don't walk alone after dark.",
      "Don't use public buses or unregistered taxis.",
      "Don't display valuables or wear flashy jewelry.",
      "Don't accept rides from strangers.",
      "Don't discuss politics in public."
    ],
    culturalSensitivityTips: {
      culturalDos: [
        'Dress modestly - cover shoulders and knees',
        'Greet with "Mucho gusto" for first meetings',
        'Ask permission before photographing people',
        'Use both hands when giving/receiving gifts',
        'Wait for host to begin eating'
      ],
      culturalDonts: [
        'Don\'t touch someone\'s head - considered sacred',
        'Don\'t use left hand for giving/receiving objects',
        'Don\'t point with single finger - use open hand',
        'Don\'t photograph without permission',
        'Don\'t interrupt religious ceremonies'
      ]
    },
    womensConfidenceScore: {
      score: 37.7, // Numbeo 2025 Safety Index for Guatemala City
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/quality-of-life/in/Guatemala-City"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 55,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-in-central-america/'
      },
      {
        label: 'Nightlife',
        confidence: 30,
        source: 'Backpacker’s Blueprint 2025',
        sourceUrl: 'https://www.backpackersblueprint.com/post/is-guatemala-safe-a-backpacker-s-guide-to-exploring-guatemala'
      },
      {
        label: 'Public Transport',
        confidence: 40,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-in-central-america/'
      },
      {
        label: 'Dining Alone',
        confidence: 60,
        source: 'She Roams The Globe 2025',
        sourceUrl: 'https://sheroamstheglobe.com/solo-female-travel-guatemala/'
      }
    ],

    sexualHarassmentData: {
      prevalence: 'very high',
      commonLocations: [
        'Guatemala has extremely high rates of violence against women - 48% experience gender-based violence (2023 National Survey)',
        'Street harassment and catcalling very common for solo female travelers',
        'Public transport presents high risk of sexual assault and harassment',
        'Tourist areas and hotels - reports of assault by service providers',
        'Machismo culture contributes to harassment of independent women travelers'
      ],
      reportingRate: 12, // Very low reporting rate due to cultural factors and limited police response
      legalProtection: 'Guatemala has legal protections against gender-based violence but enforcement is extremely limited. Femicide is a specific crime with dedicated prosecution units, but conviction rates remain low. Cultural machismo and limited police resources result in poor protection for women.',
      supportResources: [
        'Women Against Violence National Hotline: 1572 (free, 24/7)',
        'UN Women Guatemala: +502 2384 3998',
        'PROATUR Tourist Assistance: 1500 (English support)',
        'US Embassy Emergency: +502 2354 0000',
        'National Civil Police: 110',
        'Hospital Centro Médico Sexual Assault Support: +502 2279 4949',
        'Centro de Apoyo Integral para Mujeres Sobrevivientes de Violencia: +502 2220 2370'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'Hospital General San Juan de Dios',
          address: '1a Avenida 10-50, Zona 1',
          phone: '+502 2251 0151',
          emergency: true,
          specialties: ['Emergency care', 'General medicine', 'Women\'s health']
        },
        {
          name: 'Hospital Centro Médico',
          address: '6a Avenida 3-47, Zona 10',
          phone: '+502 2279 4949',
          emergency: true,
          specialties: ['Private healthcare', 'Emergency services', 'International standards']
        },
        {
          name: 'Hospital Herrera Llerandi',
          address: '6a Avenida 8-71, Zona 10', 
          phone: '+502 2384 5959',
          emergency: true,
          specialties: ['Private care', 'Specialist services', '24/7 emergency']
        },
        {
          name: 'Centro Médico de la Mujer',
          address: '6a Avenida 20-25, Zona 10',
          phone: '+502 2333 8000',
          emergency: false,
          specialties: ['Gynecology', 'Obstetrics', 'Women\'s reproductive health']
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Galeno',
          address: 'Multiple locations in Zona 10',
          phone: '+502 2279 4000',
          hours: 'Daily 7:00-22:00',
          emergency: false
        },
        {
          name: 'Farmacia Clínica Mayo',
          address: 'Avenida La Reforma, Zona 9',
          phone: '+502 2331 4040',
          hours: 'Daily 6:00-24:00',
          emergency: true
        }
      ],
      womensHealth: {
        clinics: [
          'Centro Médico de la Mujer: Comprehensive women\'s health services',
          'Hospital Centro Médico Gynecology Dept: Private care with English-speaking staff',
          'Hospital Herrera Llerandi Women\'s Services: High-quality gynecological care',
          'Public Health Centers: Free basic women\'s health services (limited resources)'
        ],
        gynecologists: [
          'Multiple private gynecologists available in Zona 10 medical district',
          'Hospital Centro Médico referrals for English-speaking specialists', 
          'Centro Médico de la Mujer staff specialists',
          'US Embassy can provide healthcare provider referrals'
        ],
        emergencyContraception: [
          'Available at most pharmacies without prescription',
          'Hospital emergency departments provide emergency contraception',
          'Private clinics in Zona 10 offer confidential services',
          'PROATUR can assist with healthcare facility locations: 1500'
        ],
        sanitaryProducts: [
          'Available at pharmacies (farmacias), supermarkets, and convenience stores',
          'International brands available in upscale areas like Zona 10',
          'Local brands widely available and affordable',
          'Hotel concierge can assist with purchase locations'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Guatemala City',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Hepatitis A and Typhoid recommended for extended stays'
      ],
      healthRisks: [
        'Air pollution in urban areas - may affect respiratory conditions', 
        'High altitude (1,500m) may cause mild altitude effects for some visitors',
        'Seasonal flu during rainy season',
        'Higher crime-related injury risk than health risks'
      ]
    },
    
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Guatemala',
          address: 'Boulevard Austriaco 11-51, Zone 16, Guatemala City 01016', 
          phone: '+502 2354 0000',
          link: 'https://gt.usembassy.gov/'
        },
        {
          name: 'British Embassy Guatemala City',
          address: '16 Calle 0-55, Zona 10, Edificio Torre Internacional, Nivel 11',
          phone: '+502 2380 7300',
          link: 'https://www.gov.uk/world/organisations/british-embassy-guatemala-city'
        },
        {
          name: 'Embassy of Germany in Guatemala City',
          address: '20 Calle 6-20, Zona 10, Edificio Torre Internacional, Nivel 14',
          phone: '+502 2365 9900',
          link: 'https://gt.diplo.de/'
        },
        {
          name: 'Embassy of France in Guatemala City',
          address: '16 Calle 4-53, Zona 10',
          phone: '+502 2421 7370',
          link: 'https://gt.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Guatemala City',
          address: '6a Calle 6-48, Zona 9',
          phone: '+502 2379 3530',
          link: 'https://www.exteriores.gob.es/embajadas/guatemala-city'
        },
        {
          name: 'Australian Consulate Guatemala City (Honorary)',
          address: '6a Avenida 20-25, Zona 10',
          phone: '+502 2333 7878',
          link: 'https://guatemala.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Guatemala City',
          address: '13 Calle 8-44, Zona 10, Edificio Edyma Plaza, 8th Floor',
          phone: '+502 2363 4348',
          link: 'https://www.canadainternational.gc.ca/gt-guatemala/'
        },
        {
          name: 'Embassy of the Netherlands in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/guatemala'
        },
        {
          name: 'Embassy of Denmark in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://gt.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://www.eda.admin.ch/guatemala-city'
        },
        {
          name: 'Embassy of India in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://www.indianembassygt.gov.in/'
        }
      ],
      womensRights: [
        'Guatemala has legal protections against gender-based violence, but enforcement is limited',
        '48% of women have experienced some form of gender-based violence (2023 National Survey)',
        'Femicide is a specific crime in Guatemala with dedicated prosecution units',
        'UN Women Guatemala provides support: +502 2384 3998',
        'PROATUR can assist with women\'s rights organization contacts: 1500'
      ],
      legalSupport: [
        'US Embassy provides list of English-speaking attorneys: +502 2354 0000',
        'Instituto de la Defensa Pública Penal: Free legal defense for serious crimes',
        'Procuraduría de los Derechos Humanos: Human rights ombudsman office',
        'Centro de Acción Legal en Derechos Humanos (CALDH): Human rights legal center',
        'PROATUR legal assistance coordination: 1500'
      ],
      reportingProcedures: [
        'Call 110 for immediate police response (Spanish required)',
        'Call PROATUR first for English-speaking assistance: 1500',
        'Contact US Embassy immediately for serious crimes: +502 2354 0000',
        'Document everything: photos, witness contacts, incident details',
        'Request official police report (denuncia) with case number',
        'Notify tourism police (DISETUR) for tourist-related crimes',
        'For sexual assault: Request female police officer if possible',
        'Embassy can provide attorney referrals and victim assistance'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $70 USD / day',
        description: 'Updated 2025 costs for solo female travelers prioritizing safety over budget. Is Guatemala City safe for solo female travelers on a budget? No - security-focused solo female travel requires $40-70/day minimum for safe accommodation and transport. Guatemala City extremely dangerous for budget solo female travel - safety investments essential for women solo travel safety.',
        tip: 'Budget should prioritize solo female travel safety - stay in Zona 10 exclusively, use Uber/taxis only, avoid budget accommodations in unsafe areas. Never compromise safety for cost savings when traveling as women alone seeking safe solo travel destinations.'
      },
      accommodation: [
        {
          type: 'Luxury Hotel (Zona 10)',
          avgCost: '$80-150', 
          safetyNote: 'Highest security with 24/7 staff, secure parking, embassy proximity',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotel (Zona 10)',
          avgCost: '$40-80',
          safetyNote: 'Good security in safe zone, international standards',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel (Zona 10 only)',
          avgCost: '$25-40',
          safetyNote: 'Basic but in safest zone - never choose budget options in unsafe zones',
          safetyLevel: 'medium'
        },
        {
          type: 'Airport Hotels',
          avgCost: '$50-90',
          safetyNote: 'Secure for transit, but isolating - use only for flight connections', 
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Uber',
          cost: '$2-8 per ride within city',
          safetyDescription: 'Safest ground transport option for solo female travel safety. GPS tracked routes, vetted drivers, cashless payment system.',
          safetyLevel: 'high',
          availability: '24/7 in Guatemala City'
        },
        {
          method: 'Hotel-Arranged Private Transfer',
          cost: '$35-50 airport, $25-40 city transfers',
          safetyDescription: 'Maximum security for solo female travelers. Vetted drivers, hotel accountability, direct pickup/dropoff.',
          safetyLevel: 'high',
          availability: 'Arrange through hotel concierge'
        },
        {
          method: 'Licensed Yellow Taxi',
          cost: '$5-15 per ride (negotiate beforehand)',
          safetyDescription: 'Acceptable safety with proper licenses. Avoid white unlicensed taxis completely.',
          safetyLevel: 'medium',
          availability: 'Available citywide, prefer hotel calls'
        },
        {
          method: 'Tourist Shuttle Services',
          cost: '$12-15 Guatemala City to Antigua',
          safetyDescription: 'Dedicated tourist transport with fixed routes. Companies: Trans-land, Shuttle Guatemala, Xocomil Tours.',
          safetyLevel: 'high',
          availability: 'Advance booking required (48 hours)'
        },
        {
          method: 'Airport Shuttle Services',
          cost: '$15 on-demand, 10-15 minute wait',
          safetyDescription: 'Official airport shuttles with name signs. Safer than street taxis for solo female travelers.',
          safetyLevel: 'medium-high',
          availability: 'La Aurora International Airport'
        },
        {
          method: 'Rental Car with Driver',
          cost: '$45-80 per day with driver',
          safetyDescription: 'Premium option for extended stays. Local driver knowledge, secure vehicle, flexible scheduling.',
          safetyLevel: 'high',
          availability: 'Book through hotels or Xocomil Tours: +502 4937 2368'
        },
        {
          method: 'Express Shuttle Services',
          cost: '$20-35 to popular destinations',
          safetyDescription: 'Fast direct routes to Tikal, Lake Atitlán, Copan. Shared with other tourists for safety.',
          safetyLevel: 'medium-high',
          availability: 'Daily departures to major destinations'
        },
        {
          method: 'Public Buses (EXTREMELY DANGEROUS)',
          cost: '$1-5',
          safetyDescription: 'Frequent armed robberies, sexual assault, and violent attacks. NEVER use for solo female travel safety.',
          safetyLevel: 'extremely low',
          availability: 'AVOID COMPLETELY - Not recommended for any travelers'
        }
      ],
      budgetTips: [
        'Stay in Zona 10 - safety is more important than cost savings',
        'Use Uber exclusively - small cost for major safety improvement',
        'Eat at hotel restaurants or established places in safe zones',
        'Book accommodation with 24/7 security and reception',
        'Consider Guatemala City as transit point only - move to safer destinations quickly',
        'Use hotel concierge for all bookings and recommendations',
        'Avoid street food and markets due to location safety concerns',
        'Budget for taxi/Uber to all destinations - walking is unsafe',
        'Keep emergency cash for immediate exit if situations deteriorate',
        'Purchase comprehensive travel insurance with emergency evacuation coverage'
      ]
    },

    governmentAdvisory: {
      level: 'Reconsider Travel (Level 3)',
      levelNumber: 3,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Reconsider travel to Guatemala due to crime. Violent crime such as armed robbery and murder is common. Gang activity, including narcotics trafficking, is widespread. Local police may lack the resources to respond effectively to criminal incidents.',
      reason: 'High levels of violent crime, gang activity, and limited police response capability.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/guatemala-travel-advisory.html',
      soloTravelerAdvice: [
        'Guatemala City particularly dangerous for solo female travelers - consider alternative destinations',
        'Zone 18 has Level 4 "Do Not Travel" advisory due to extreme gang violence',
        'Express kidnapping and sexual assault targeting solo women travelers increasing',
        'Public transportation extremely dangerous - use only hotel-arranged transport',
        'Register with Smart Traveler Enrollment Program (STEP) for emergency alerts'
      ]
    },

    crimeStatistics: {
      violentCrime: 89.7, // per 100,000 (extremely high - among world's highest)
      propertyCrime: 156.4, // per 100,000 (very high)
      sexualAssault: 67.3, // per 100,000 (extremely high - likely underreported)
      kidnapping: 4.2, // per 100,000 (very high for urban area)
      source: 'Guatemala National Civil Police & US State Department Crime Statistics 2024',
      year: 2024,
      context: 'Guatemala City ranks among world\'s most dangerous cities for women with extremely high femicide rates and violence against women.'
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress modestly - cover shoulders and knees',
      'Greet with "Mucho gusto" for first meetings',
      'Ask permission before photographing people',
      'Use both hands when giving/receiving gifts',
      'Wait for host to begin eating'
    ],
    culturalDonts: [
      'Don\'t touch someone\'s head - considered sacred',
      'Don\'t use left hand for giving/receiving objects',
      'Don\'t point with single finger - use open hand',
      'Don\'t photograph without permission',
      'Don\'t interrupt religious ceremonies'
    ]
  },
  youtubeVideo: {
    videoId: "WJdPTcJF4Go"
  }
};

export default guatemalacity; 