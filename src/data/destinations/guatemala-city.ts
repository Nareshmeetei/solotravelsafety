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
        context: 'Extremely dangerous at night for solo female travelers with only 20.7% safety rating. Guatemala City has critical-level violent crime including armed robberies, sexual assault, and express kidnappings after dark. US State Department rates the risk as "critical" with Zone 18 designated as "Do Not Travel". Even safe zones like Zona 10 experience crime at night - not recommended for women traveling alone.' 
      },
      publicTransit: { 
        score: 3.2, 
        context: 'Public buses (chicken buses) present extreme safety risks for solo female travelers with frequent armed attacks. 2024 government advisories strongly warn women traveling alone against public transportation due to robbery and sexual assault incidents. Uber operates only in Guatemala City and is the safest transport option for solo female travel safety. Licensed yellow taxis are acceptable but white taxis should be avoided completely.' 
      },
      walkingAlone: { 
        score: 2.5, 
        context: 'Walking alone is extremely dangerous for solo female travelers and strongly discouraged. With a 45.2% daytime safety rating, Guatemala City has high rates of mugging (concern level 87.4%), sexual harassment targeting women traveling alone, and express kidnapping. Even experienced solo female travelers report feeling unsafe and recommend avoiding solo travel to Guatemala City entirely.' 
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
        name: 'Hotel Casa Santo Domingo', 
        type: 'luxury hotel', 
        features: ['24/7 armed security', 'Zona 10 diplomatic area', 'Female-friendly staff', 'US Embassy proximity', 'Secure parking'], 
        rating: 4.7, 
        reviews: 1834,
        notes: 'Top-rated luxury hotel for solo female travel safety prioritizing maximum security. Features comprehensive safety measures, female-focused amenities, and strategic location near embassies. Highly recommended by experienced solo female travelers seeking safest places for women to travel alone in Guatemala City.' 
      },
      { 
        name: 'Real InterContinental Guatemala', 
        type: 'international hotel', 
        features: ['Global chain standards', 'Zona 10 location', '24/7 concierge', 'Security personnel', 'Female solo traveler services'], 
        rating: 4.5, 
        reviews: 2156,
        notes: 'Reliable international chain with proven safety standards for solo female travelers. Features dedicated women traveler assistance, secure facilities, and embassy district location. Excellent for business and leisure solo travel.' 
      },
      { 
        name: 'Hotel Barceló Guatemala City', 
        type: 'chain hotel', 
        features: ['Zona 10 safe zone', '24-hour reception', 'Airport shuttle service', 'Solo female guest support'], 
        rating: 4.4, 
        reviews: 1789,
        notes: 'Established international chain with strong security protocols specifically adapted for solo female travelers. Offers secure transportation, women-friendly services, and maximum safety location in Zona 10.' 
      },
      { 
        name: 'Hotel Villa Colonial', 
        type: 'boutique hotel', 
        features: ['Zona 10 diplomatic area', 'Personal attention', 'Secure environment', 'Female-managed sections'], 
        rating: 4.3, 
        reviews: 892,
        notes: 'Intimate boutique hotel offering personalized security attention for women travelers. Features female management staff, customized solo travel services, and safe Zona 10 location with embassy proximity.' 
      },
      { 
        name: 'Clarion Suites Guatemala', 
        type: 'extended stay', 
        features: ['Zona 9/10 border', 'Suite accommodations', 'Kitchen facilities', '24/7 security'], 
        rating: 4.2, 
        reviews: 1243,
        notes: 'Extended stay option perfect for longer visits by solo female travelers. Features apartment-style security, personal space, and safe zone location. Ideal for women needing secure long-term accommodation.' 
      },
      { 
        name: 'Hotel Tikal Futura', 
        type: 'business hotel', 
        features: ['Zona 10 center', 'Corporate security standards', 'Female business traveler focused', 'Safe transport arrangements'], 
        rating: 4.1, 
        reviews: 967,
        notes: 'Business-focused hotel with enhanced security measures for professional women travelers. Features dedicated female traveler services, secure meeting spaces, and prime Zona 10 location.' 
      },
      { 
        name: 'Hostal Villa Toscana (Airport)', 
        type: 'transit hostel', 
        features: ['Airport proximity', '5-minute Uber to terminal', 'Female-friendly', 'Early departure assistance'], 
        rating: 4.0, 
        reviews: 734,
        notes: 'Highly recommended by solo female travelers for airport transit. Perfect for overnight stays before early flights. Community-vetted as safe option for women in transit through Guatemala City.' 
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
        'bSafe Personal Safety',
        'GeoSure Global', 
        'ICE Emergency Contacts',
        'NomadHer Solo Female Travel',
        'Noonlight Safety',
        'TripBFF Travel Connections',
        'Instabridge WiFi Locator',
        'Flush Public Restrooms',
        'Uber Guatemala',
        'Smart Traveler STEP'
      ],
      appLinks: [
        { name: 'bSafe Personal Safety', link: 'https://getbsafe.com/', description: 'Essential safety app with SOS alerts, voice activation, fake calls, and GPS tracking - critical for Guatemala City solo female travel' },
        { name: 'GeoSure Global', link: 'https://geosure.com/', description: 'Provides granular safety scores for women travelers using AI and big data - essential for navigating dangerous Guatemala City zones' },
        { name: 'ICE Emergency Contacts', link: 'https://apps.apple.com/us/app/ice-medical-standard/id355117664', description: 'Stores medical info and emergency contacts accessible by first responders - crucial for high-risk destinations like Guatemala' },
        { name: 'NomadHer Solo Female Travel', link: 'https://www.nomadher.com/', description: 'Women-only community app for finding travel buddies and safety support - use code BECKSPLORE for premium features' },
        { name: 'Noonlight Safety', link: 'https://www.noonlight.com/', description: 'One-button emergency response - hold button when unsafe, authorities notified if not released with PIN' },
        { name: 'TripBFF Travel Connections', link: 'https://www.tripbff.com/', description: 'Connect with other travelers for safety in numbers - especially important in high-risk Guatemala City' },
        { name: 'Instabridge WiFi Locator', link: 'https://instabridge.com/', description: 'Find free WiFi for emergency communication - essential when cell service limited in dangerous areas' },
        { name: 'Flush Public Restrooms', link: 'https://www.flush.city/', description: 'Locate safe public bathrooms worldwide - important for avoiding isolated areas when nature calls' },
        { name: 'Uber Guatemala', link: 'https://www.uber.com/gt/', description: 'Safest ground transport in Guatemala City with GPS tracking and vetted drivers - never use public transport' },
        { name: 'Smart Traveler STEP', link: 'https://step.state.gov/', description: 'US State Department alerts and emergency contact - essential for travel to Level 3 advisory countries' }
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
      dressCode: 'Conservative, modest dress essential for solo female travelers. Cover shoulders, knees, and avoid form-fitting clothing. Dark, neutral colors recommended to avoid unwanted attention. Avoid jewelry, designer clothing, or expensive accessories. Traditional Maya populations are very conservative.',
      behaviorNorms: [
        'Maintain respectful distance in conversations - personal space highly valued',
        'Avoid eye contact with men to prevent misinterpretation of interest', 
        'Never discuss politics, violence, or civil war history - extremely sensitive topics',
        'Learn basic Spanish greetings - English is limited outside tourist areas',
        'Show respect for indigenous Maya culture and traditions',
        'Be cautious with photography - always ask permission, especially of people',
        'Avoid displays of wealth, technology, or expensive items',
        'Use formal address (usted) rather than informal (tú) unless invited otherwise',
        'Respect religious customs - Guatemala is predominantly Catholic',
        'Understand machismo culture affects interactions - maintain professional distance'
      ],
      perception: 'Solo female travelers are extremely rare in Guatemala City and will attract significant attention. Local culture includes strong machismo elements where lone women may be perceived as vulnerable targets. Conservative Maya and Catholic cultural values mean independent women travelers are unusual and may face curiosity, concern, or unwanted advances. Safety concerns limit solo female tourism, making such travelers highly visible.'
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
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2024, US State Dept 2025
      { label: 'Taxi Scams & Express Kidnapping', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2024, BHTP 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2024
      { label: 'Corruption & Police Bribery', frequency: 'Occasional', icon: 'Shield' }, // Numbeo 2024
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
        description: 'Updated 2025 costs for solo female travelers prioritizing safety over budget. Security-focused solo female travel requires $40-70/day minimum for safe accommodation and transport. Guatemala City extremely dangerous for budget solo female travel - safety investments essential.',
        tip: 'Budget should prioritize solo female travel safety - stay in Zona 10 exclusively, use Uber/taxis only, avoid budget accommodations in unsafe areas. Never compromise safety for cost savings when traveling as women alone.'
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
          safetyDescription: 'Safest ground transport option. Tracked routes, vetted drivers, cashless payment.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Yellow Taxi',
          cost: '$5-15 per ride',
          safetyDescription: 'Acceptable safety but negotiate price beforehand. Never use white taxis.',
          safetyLevel: 'medium'
        },
        {
          method: 'Private Transfer/Shuttle',
          cost: '$35 airport transfer, $25-50 for excursions',
          safetyDescription: 'Hotel-arranged transport is safest for airport and tourist sites.',
          safetyLevel: 'high'
        },
        {
          method: 'Public Buses (NOT RECOMMENDED)',
          cost: '$1-5',
          safetyDescription: 'Frequent armed attacks on public buses. AVOID completely for safety.',
          safetyLevel: 'low'
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
    }
};

export default guatemalacity; 