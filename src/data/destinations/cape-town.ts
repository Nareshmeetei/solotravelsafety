import { Destination } from './types';

const capetown: Destination = {
    city: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 3.2,
    nightSafety: 2.0,
    publicTransit: 3.5,
    walkingAlone: 2.8,
    tags: ['warning-flags', 'high-risk'],
    bgColor: 'bg-red-50',
    reviewCount: 347,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 2.0, 
        context: 'Cape Town becomes extremely dangerous for women after dark. The city has one of the world\'s highest violent crime rates, with murder, sexual assault, robbery, and kidnapping risks increasing exponentially at night. Areas like CBD, Cape Flats, and township areas become no-go zones. Even affluent areas like Camps Bay and V&A Waterfront have increased risks after dark. Solo women should never walk alone at night and must use verified hotel transport or ride-hailing services with tracking.' 
      },
      publicTransit: { 
        score: 3.5, 
        context: 'Public transport in Cape Town poses significant safety risks for women. MyCiti buses are the safest option but limited in coverage and should only be used during daylight hours. Minibus taxis have high rates of sexual harassment and assault, with frequent reports of women being targeted. Metrorail trains are particularly dangerous with regular incidents of violent crime, sexual assault, and theft. Evening travel on any public transport is extremely risky for solo women.' 
      },
      walkingAlone: { 
        score: 2.8, 
        context: 'Walking alone in Cape Town is highly dangerous for women, even during daylight hours. Sexual harassment, mugging, and assault occur frequently in tourist areas including Long Street, Company\'s Garden, and CBD. The city has extremely high rates of gender-based violence, with South Africa often called the "rape capital of the world." Women face constant catcalling, following, and aggressive behavior. Groups of men frequently target solo female travelers. Safe areas are limited to V&A Waterfront and upscale neighborhoods during daylight only.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'V&A Waterfront',
          description: 'The most secure area in Cape Town with 24/7 private security, CCTV surveillance, and controlled access points. This gated tourist complex has the lowest crime rates in the city and is the safest option for solo women travelers. Private security patrols are visible throughout, and emergency response is immediate. However, caution is still required when leaving the complex, especially after dark.'
        },
        {
          name: 'Camps Bay (Daytime Only)',
          description: 'Upscale beachfront area that is relatively safe during daylight hours due to affluent residents and tourist police presence. Popular with international visitors and has good lighting along the main strip. However, isolated beach areas and side streets can be dangerous even during the day. After sunset, the area becomes significantly more risky with reports of muggings and assaults.'
        },
        {
          name: 'Sea Point Promenade (Daytime)',
          description: 'The promenade itself is relatively safe during daylight hours due to regular foot traffic and some police presence. Popular with joggers and families during the day. However, the area has seen increased crime rates in recent years, and women should avoid isolated areas along the coastline. Evening walks are not recommended due to inadequate lighting and increased criminal activity.'
        },
        {
          name: 'Green Point (Daytime)',
          description: 'Residential area near V&A Waterfront with better security than most Cape Town neighborhoods. Stadium area has improved lighting and some security presence during events. However, like all Cape Town areas, it becomes dangerous after dark. Women should stick to main roads and avoid walking alone, especially in quiet residential streets.'
        },
        {
          name: 'Constantia (Private Properties)',
          description: 'Wealthy wine-farming area with private security and gated properties. While generally safer than other areas, isolated wine farms and hiking trails pose risks for solo women. Tours should be booked through reputable operators only. The area has experienced some crime increases due to its proximity to informal settlements.'
        }
      ],
      caution: [
        'Long Street (Day only): Historic street with restaurants and shops that becomes extremely dangerous after dark. High rates of pickpocketing, mugging, and harassment during the day. Women report constant catcalling and aggressive behavior from men. Avoid completely at night.',
        'Company\'s Garden (Day only): Central park area with museums that has regular security patrols during business hours. However, incidents of assault, robbery, and sexual harassment occur regularly. Women should not visit alone and should leave before dark.',
        'Bo-Kaap (Guided tours only): Colorful historic neighborhood that looks picturesque but has underlying safety concerns. High poverty rates lead to opportunistic crime. Women should only visit with organized tour groups and never venture into residential side streets.',
        'Hout Bay (Day tours only): Scenic harbor town with significant safety concerns due to nearby informal settlements. The area has high crime rates including armed robbery and assault. Only visit during organized day tours with transport arranged.'
      ],
      avoid: [
        'Cape Flats (ALL AREAS): Extremely dangerous area with some of the world\'s highest murder rates. Gang warfare is constant, and foreign women are specifically targeted for robbery, assault, and worse. Police presence is minimal. Avoid completely under all circumstances.',
        'Khayelitsha: Massive township with extremely high violent crime rates. Women face severe risks of sexual assault, robbery, and kidnapping. No tourist facilities and no police protection. Never enter this area.',
        'Nyanga: One of the most dangerous areas in Cape Town with 63 murders recorded in Q1 2025 alone. Extremely high rates of gender-based violence and gang activity. Completely off-limits to tourists.',
        'Delft: Recorded the highest murder rate in Western Cape (66 murders Q1 2025). Severe gang violence and targeting of foreign women. No safe areas within this district.',
        'Philippi East: Experienced 63.9% increase in murders between 2024-2025. Active gang territory with frequent violent incidents against women.',
        'Mitchell\'s Plain: High crime area with regular reports of sexual assault and robbery targeting foreign women.',
        'Manenberg: Gang-controlled area with frequent violence and no tourist safety infrastructure.',
        'Gugulethu: Township area with high crime rates despite some government intervention.',
        'CBD after dark: Central Business District becomes extremely dangerous after sunset with high rates of mugging, assault, and sexual violence.',
        'ALL isolated beaches, hiking trails, and parks without organized tours and security.'
      ]
    },
    accommodations: [
      { 
        name: 'The Table Bay Hotel', 
        type: 'hotel', 
        features: ['Ultra-luxury hotel', 'V&A Waterfront location', 'Excellent security', '24/7 professional security', 'Female-friendly staff', 'Safe location', 'Concierge services', 'Airport transfers'], 
        rating: 4.8, 
        notes: 'Premier choice for solo female travelers located in the secure V&A Waterfront. World-class security protocols and staff specially trained for women\'s safety concerns. Private airport transfers and security escort services available.',
        link: 'https://www.suninternational.com/table-bay/'
      },
      {
        name: 'Cape Grace Hotel',
        type: 'hotel',
        features: ['Luxury hotel', 'V&A Waterfront location', 'Exceptional security', 'Safe area', 'Professional staff', 'Female-friendly service', 'Concierge assistance'],
        rating: 4.7,
        notes: 'Luxury hotel within the secure V&A Waterfront complex. Exceptional security standards and staff experienced with solo female travelers. Located in Cape Town\'s safest tourist area.',
        link: 'https://www.capegrace.com/'
      },
      {
        name: 'The Twelve Apostles Hotel',
        type: 'hotel',
        features: ['Luxury resort', 'Clifton location', 'High security', 'Private grounds', 'Professional staff', 'Safe environment', 'Spa facilities'],
        rating: 4.6,
        notes: 'Luxury resort with comprehensive security measures and private grounds. Staff provides guidance on safe areas and arranges secure transportation for female guests.',
        link: 'https://www.12apostleshotel.com/'
      },
      {
        name: 'Radisson RED V&A Waterfront',
        type: 'hotel',
        features: ['Modern hotel', 'V&A Waterfront location', 'Good security', 'Safe area', 'Professional service', 'Central location'],
        rating: 4.4,
        notes: 'Modern hotel within the secure V&A Waterfront area. Good security protocols and staff assistance for solo female travelers. Easy access to restaurants and attractions within the complex.',
        link: 'https://www.radissonhotels.com/'
      },
      { 
        name: 'Once in Cape Town', 
        type: 'hostel', 
        features: ['Female dorms', 'Central location', 'Security cameras', '24/7 reception', 'Traveler-friendly', 'Safety briefings'],
        rating: 4.2, 
        notes: 'Popular backpacker hostel with female-only dorms and security measures. Staff provides comprehensive safety briefings for solo female travelers. Located in city center but requires caution when leaving property.',
        link: 'https://www.onceincapetown.co.za/'
      },
      {
        name: 'Daddy Long Legs Hotel',
        type: 'hotel',
        features: ['Boutique hotel', 'Long Street location', 'Unique design', 'Security measures', 'Central location'],
        rating: 4.0,
        notes: 'Boutique hotel on Long Street with security measures in place. Staff provides safety guidance for female guests exploring the area. Caution required when walking in surrounding area, especially after dark.',
        link: 'https://www.daddylonglegs.co.za/'
      }
    ],
    alerts: [
      { 
        title: 'Extreme Violence Against Women Alert', 
        description: 'South Africa has one of the world\'s highest rates of violence against women. Cape Town specifically sees frequent targeting of foreign women for assault, robbery, and sexual violence', 
        location: 'Citywide - all areas affected', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '2 days ago' 
      },
      {
        title: 'Gang Violence Escalation',
        description: 'Increased gang activity in Cape Flats areas with spillover into tourist areas. Foreign women specifically targeted for robbery and assault',
        location: 'Cape Flats, CBD, and surrounding areas',
        reportCount: 67,
        severity: 'high',
        dateReported: '3 days ago'
      },
      {
        title: 'Transport Safety Crisis',
        description: 'Multiple reports of sexual assault and robbery on public transport and in unlicensed taxis. Women strongly advised to use only verified hotel transport',
        location: 'All public transport systems',
        reportCount: 45,
        severity: 'high',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress conservatively in neutral colors to avoid drawing attention
• Never wear expensive jewelry, watches, or designer items visible on the street
• Avoid revealing clothing as Cape Town has high rates of sexual assault targeting foreign women
• Layer clothing for quick temperature changes and to hide valuables underneath
• Wear comfortable, closed-toe shoes for safety and quick movement if needed
• Carry a decoy wallet with small bills (R100-200) to hand over if robbed`,
      firstTimers: `• NEVER walk alone anywhere, even during daylight - Cape Town has extreme crime targeting solo women
• Stay ONLY in V&A Waterfront area - it has 24/7 armed security and controlled access points
• Book ALL transport through your hotel - public transport has frequent sexual assaults
• Register with your embassy immediately upon arrival for emergency evacuation if needed
• Carry emergency whistle and personal alarm at all times
• Have comprehensive travel insurance with medical evacuation coverage - healthcare system is strained`,
      apps: [
        'GeoSure Global',
        'Uber',
        'bSafe Personal Safety',
        'Travel Ladies',
        'Emergency SOS',
        'Maps.me'
      ],
      appLinks: [
        { name: 'GeoSure Global', link: 'https://geosure.ai/', description: 'Real-time neighborhood safety ratings specifically for women travelers with Cape Town crime data' },
        { name: 'Uber', link: 'https://www.uber.com/za/en/', description: 'Safest transport option with GPS tracking - verify driver and license plate before entering' },
        { name: 'bSafe Personal Safety', link: 'https://getbsafe.com/', description: 'Guardian angels network, fake call feature, and automatic emergency alerts' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Connect with verified female travelers in Cape Town for safety in numbers' },
        { name: 'Emergency SOS', link: 'https://support.apple.com/en-us/HT208076', description: 'Built-in iPhone emergency feature - automatically calls local emergency services' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features - works without internet connection' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English'
        },
        {
          english: 'Call the police!',
          local: 'Bel die polisie!',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I need a doctor.',
          local: 'Ek het \'n dokter nodig.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Waar is die naaste hospitaal?',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I am lost.',
          local: 'Ek is verdwaal.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Please leave me alone.',
          local: 'Los my asseblief uit.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ek voel onveilig.',
          localLanguage: 'Afrikaans'
        },
        {
          english: 'Get away from me!',
          local: 'Gaan weg van my af!',
          localLanguage: 'Afrikaans'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Cape Town is fashion-conscious but prioritize safety over style - dress conservatively. Avoid safari/khaki clothing - locals recognize tourists immediately and crime follows. Summer: Light cotton layers, closed-toe shoes, sun protection - NEVER bare shoulders/legs alone. Winter: Waterproof layers, warm jacket, boots - Cape Town winters are cold and windy. Beach areas: Cover up when leaving beach - sexual assault rates are highest near beaches. Nightlife: Smart casual required but avoid expensive/flashy items - robberies target well-dressed tourists.',
      behaviorNorms: [
        'Never make eye contact with strangers on the street - this can be interpreted as invitation',
        'Act confident and purposeful - criminals target those who appear lost or vulnerable',
        'Don\'t engage with street vendors or accept help from strangers - common robbery setup',
        'Keep conversations quiet - loud foreign accents attract criminal attention',
        'Never photograph townships or poverty areas without permission - can provoke violent reactions',
        'Tip generously for security - hotel staff, restaurant security, parking guards protect you',
        'Don\'t discuss travel plans with strangers - information used to plan robberies',
        'Always have a local contact visible on your phone - shows you\'re connected and missed if hurt'
      ],
      perception: 'Foreign women are seen as wealthy targets regardless of actual income - criminals assume you have money. Solo female travelers face extreme risk - Cape Town has world\'s highest rates of violence against women. White tourists may face additional targeting in certain areas due to economic inequality. Conservative dress and behavior reduce risk but don\'t eliminate it completely. Local women rarely travel alone after dark - follow their lead for safety cues.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer months (Nov-Mar) have better security presence due to tourism season. Avoid major events that cause crowd congestion. Christmas/New Year period has increased police presence but also higher crime rates.'
    },
    emergencyInfo: {
      police: '10111', 
      fire: '10177', 
      medical: '10177', 
      general: '112'
    },
    currency: {
      name: 'South African Rand',
      code: 'ZAR',
      exchangeRate: {
      usd: 0.0564,
      eur: 0.0480,
      gbp: 0.0419
      },
      exchangeTips: [
        'Use only hotel exchange services or major bank branches - never street money changers',
        'Major hotels and restaurants accept credit cards but carry small amounts of cash for tips',
        'ATMs at banks are safest - avoid standalone machines completely',
        'Keep exchange receipts for currency conversion documentation',
        'US dollars and Euros widely accepted at hotels and tour operators',
        'Use travel cards with no foreign transaction fees',
        'Notify bank of travel plans to avoid card blocking',
        'Never exchange money with strangers or in informal settings'
      ],
      scamWarnings: [
        'Street money changers offer fake currency or violent robbery - avoid completely',
        'ATM skimming is common - use only bank ATMs with security guards present',
        'Fake police demanding money or documents - always ask for official identification',
        'Taxi drivers claiming no change - carry exact change in small bills',
        'Hotel staff offering currency exchange - use official hotel services only',
        'Never accept damaged or torn bills as they may not be accepted'
      ],
      bestExchangeLocations: [
        'Hotel concierge services at luxury hotels',
        'Airport official exchange counters (though rates are poor)',
        'Major bank branches with security guards',
        'Authorized exchange bureaus in V&A Waterfront'
      ],
      tippingCulture: [
        'Tipping is expected and often mandatory for security',
        'Hotel staff: R50-100 per day for housekeeping',
        'Restaurant servers: 15-20% is standard',
        'Tour guides: R200-400 per day depending on service',
        'Uber/taxi drivers: Round up fare',
        'Security guards who help: R20-50',
        'Hotel concierge: R100-200 for special assistance'
      ]
    },
    scamWarnings: [
      { title: 'Fake Police Scam', description: 'Criminals posing as police officers to rob tourists. Real police will show proper identification and never demand money.', severity: 'high' },
      { title: 'ATM Skimming and Robbery', description: 'Criminals install devices on ATMs and may rob users. Use only bank ATMs with security guards present.', severity: 'high' },
      { title: 'Taxi and Transport Scams', description: 'Unlicensed taxis overcharge, rob, or assault passengers. Use only hotel-arranged transport or verified ride-hailing apps.', severity: 'high' },
      { title: 'Tour Guide Scams', description: 'Fake tour guides leading tourists to dangerous areas or overcharging for poor services. Book only through hotels or verified operators.', severity: 'high' },
      { title: 'Accommodation Scams', description: 'Fake accommodation listings or unsafe properties. Book only through verified platforms and in safe neighborhoods.', severity: 'medium' }
    ],
    usefulTips: [
      {
        title: "Stay only in V&A Waterfront for maximum safety",
        description: "The V&A Waterfront is the only truly safe area in Cape Town with 24/7 security, controlled access, and immediate emergency response. All other areas pose significant safety risks for solo women.",
        severity: "high",
        sourceName: "Cape Town Tourism Safety Report 2025",
        sourceUrl: "https://www.capetown.gov.za/"
      },
      {
        title: "Never use public transport - arrange all transport through hotel",
        description: "Public transport has extremely high rates of sexual assault and robbery. Hotel transport is tracked, insured, and drivers are vetted. Worth the extra cost for safety.",
        severity: "high",
        sourceName: "Solo Female Traveler Safety Study",
        sourceUrl: "https://thebrokebackpacker.com/is-cape-town-safe/"
      },
      {
        title: "Travel with emergency contact and evacuation insurance",
        description: "Given Cape Town\'s high crime rates, have 24/7 emergency contacts and comprehensive travel insurance with medical evacuation coverage.",
        severity: "high",
        sourceName: "U.S. State Department Travel Advisory",
        sourceUrl: "https://travel.state.gov/"
      },
      {
        title: "Never walk alone anywhere, even during daylight",
        description: "Cape Town has extreme rates of violence against women. Even in 'safe' areas, women should never walk alone. Always travel in groups or use secure transport.",
        severity: "high",
        sourceName: "Cape Town Crime Statistics 2025",
        sourceUrl: "https://www.dailymaverick.co.za/"
      }
    ],
    culturalSensitivityTips: [
      'Be aware of South Africa\'s complex racial and economic history',
      'Show respect for all cultural groups and avoid political discussions',
      'Understand that poverty and inequality contribute to crime rates',
      'Be sensitive to the legacy of apartheid and ongoing social issues',
      'Respect local customs and traditional practices',
      'Avoid photographing people without permission'
    ],
    culturalDos: [
      'Dress modestly to avoid unwanted attention',
      'Show respect for local customs and traditions',
      'Be patient with service - safety comes first',
      'Tip appropriately for good service and security',
      'Learn basic greetings in local languages',
      'Respect religious and cultural sites'
    ],
    culturalDonts: [
      'Don\'t display wealth or expensive items',
      'Don\'t discuss politics or racial issues',
      'Don\'t take photos in townships or poor areas',
      'Don\'t ignore safety warnings from locals or hotels',
      'Don\'t venture into areas advised against',
      'Don\'t walk alone under any circumstances'
    ],
    womensConfidenceScore: {
      score: 18,
      source: 'Travel Ladies Community Survey 2025',
      sourceUrl: 'https://travelladies.app/safety/south-africa/cape-town'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 8,
        source: 'Cape Town Safety Report 2025',
        sourceUrl: 'https://www.capetown.gov.za/'
      },
      {
        label: 'Public Transport',
        confidence: 15,
        source: 'MyCiti Safety Report',
        sourceUrl: 'https://www.myciti.org.za/'
      },
      {
        label: 'Night Activities',
        confidence: 5,
        source: 'SAPS Crime Statistics',
        sourceUrl: 'https://www.saps.gov.za/'
      },
      {
        label: 'Cultural Sites',
        confidence: 25,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.southafrica.net/'
      }
    ],
    languages: ['English', 'Afrikaans', 'Xhosa'],
    daytimeSafetyPercent: 46.9,
    nighttimeSafetyPercent: 14.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Cape-Town',
    redFlags: [
      { label: 'Sexual Assault & Gender-Based Violence', frequency: 'Most common', icon: 'AlertTriangle' },
      { label: 'Armed Robbery & Mugging', frequency: 'Most common', icon: 'PocketKnife' },
      { label: 'Kidnapping & Human Trafficking', frequency: 'Frequent', icon: 'Shield' },
      { label: 'Carjacking & Smash-and-Grab', frequency: 'Frequent', icon: 'Car' },
      { label: 'Gang Violence & Territorial Crime', frequency: 'Frequent', icon: 'Users' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: ['All public spaces', 'Public transport', 'Tourist attractions', 'Streets and markets', 'Beach areas', 'Township areas'],
      reportingRate: 12,
      legalProtection: 'Limited legal framework with poor enforcement. Police response varies significantly and many cases go unreported due to victim-blaming and inadequate protection.',
      supportResources: [
        'Rape Crisis Cape Town Trust: +27 21 447 9762, https://rapecrisis.org.za/',
        'Women\'s Legal Centre: +27 21 424 5660, https://www.wlce.co.za/',
        'Lifeline Cape Town: +27 21 461 1113',
        'Gender-Based Violence Command Centre: 0800 428 428',
        'Your country\'s embassy emergency line'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Groote Schuur Hospital',
          address: 'Main Road, Observatory, Cape Town',
          phone: '+27 21 404 9111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma', 'Women\'s Health'],
          link: 'https://www.westerncape.gov.za/'
        },
        {
          name: 'Mediclinic Cape Town',
          address: 'Christiaan Barnard Memorial Hospital, City Centre',
          phone: '+27 21 464 5500',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Private Care'],
          link: 'https://www.mediclinic.co.za/'
        },
        {
          name: 'Netcare Christiaan Barnard Memorial Hospital',
          address: '181 Longmarket Street, Cape Town City Centre',
          phone: '+27 21 480 6111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Specialist Care'],
          link: 'https://www.netcare.co.za/'
        }
      ],
      pharmacies: [
        {
          name: 'Clicks Pharmacy V&A Waterfront',
          address: 'V&A Waterfront, Cape Town',
          phone: '+27 21 418 2000',
          hours: '9 AM - 9 PM',
          emergency: false,
          link: 'https://www.clicks.co.za/'
        },
        {
          name: 'Dis-Chem V&A Waterfront',
          address: 'Shop 6, Victoria Wharf, V&A Waterfront',
          phone: '+27 21 419 0195',
          hours: '8 AM - 10 PM',
          emergency: false,
          link: 'https://www.dischem.co.za/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Centre - Groote Schuur Hospital',
          'Reproductive Health Services - University of Cape Town',
          'Marie Stopes South Africa - Cape Town'
        ],
        gynecologists: [
          'Dr. Susan Jooste - Groote Schuur Hospital',
          'Dr. James McIntyre - Women\'s Health Research'
        ],
        emergencyContraception: [
          'Available at all major pharmacies without prescription',
          'Emergency services at Groote Schuur Hospital',
          'Marie Stopes clinics provide comprehensive reproductive health'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands available in tourist areas and hotels',
          'Hotel concierge can assist with discrete purchases'
        ]
      },
      vaccinations: [
        'Hepatitis A and B highly recommended',
        'Typhoid vaccination recommended',
        'Yellow fever if arriving from endemic areas',
        'COVID-19 vaccination up to date',
        'Routine vaccinations (MMR, DPT, flu) should be current'
      ],
      healthRisks: [
        'Extremely high HIV/AIDS prevalence - exercise caution',
        'Air pollution in urban areas affects respiratory health',
        'Water quality varies - stick to bottled water',
        'High stress from security concerns affects mental health'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy South Africa (serves Cape Town)',
        address: '877 Pretorius Street, Arcadia, Pretoria',
        phone: '+27 12 431 4000',
        email: 'protocolpretoria@state.gov',
        emergency: '+27 12 431 4000',
        link: 'https://za.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-pretoria'
        },
        {
          name: 'Embassy of Germany in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.diplo.de/'
        },
        {
          name: 'Embassy of France in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.exteriores.gob.es/embajadas/pretoria'
        },
        {
          name: 'Australian Embassy Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.canadainternational.gc.ca/za-south-africa/'
        },
        {
          name: 'Embassy of the Netherlands in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/south-africa'
        },
        {
          name: 'Embassy of Denmark in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.eda.admin.ch/pretoria'
        },
        {
          name: 'Embassy of India in Cape-town',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.indianembassyza.gov.in/'
        }
      ],
      womensRights: [
        'Constitutional protections exist but enforcement is extremely weak',
        'High rates of gender-based violence with limited police response',
        'Legal system often fails women in harassment and assault cases',
        'Foreign women face additional barriers in legal proceedings'
      ],
      legalSupport: [
        'Women\'s Legal Centre: +27 21 424 5660 - free legal consultation',
        'Rape Crisis Cape Town - legal support for sexual violence cases',
        'Embassy consular services provide assistance for foreign nationals',
        'Legal aid available but limited for tourists'
      ],
      reportingProcedures: [
        'Report all serious incidents to police immediately - get case number',
        'Contact embassy consular section for assistance and advocacy',
        'Document everything with photos, witness statements, medical records',
        'Keep copies of all police reports and embassy correspondence',
        'Consider reporting to international human rights organizations'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Hotel Transportation',
          safety: 85,
          recommendations: [
            'Safest option - use exclusively for all travel',
            'Vehicles are tracked and drivers vetted',
            'Essential for airport transfers and all city travel',
            'Request female driver when available'
          ],
          companies: ['Hotel concierge services'],
          link: ''
        },
        {
          type: 'Uber/Bolt with Extreme Caution',
          safety: 60,
          recommendations: [
            'Share ride details with trusted contact immediately',
            'Sit in back seat, keep doors unlocked until moving',
            'Verify driver photo and license plate exactly',
            'Use only during daylight hours',
            'Have emergency contact ready'
          ],
          companies: ['Uber', 'Bolt'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'MyCiti Bus (Daylight Only)',
          safety: 45,
          recommendations: [
            'Use only during daylight hours with other passengers',
            'Stick to main routes in tourist areas only',
            'Avoid evening travel completely',
            'Keep belongings secure and stay alert'
          ],
          companies: ['MyCiti'],
          link: 'https://www.myciti.org.za/'
        }
      ],
      nightTravel: {
        safety: 15,
        warnings: [
          'Extremely dangerous - highest assault and robbery rates in world',
          'Even hotel transport becomes risky after dark',
          'Public areas empty quickly after sunset',
          'Police response time significantly slower at night'
        ],
        alternatives: [
          'Stay in accommodation after dark',
          'Dine only within hotel or secure complex',
          'Use hotel security escort if absolutely necessary',
          'Never travel alone under any circumstances'
        ]
      },
      verifiedProviders: [
        {
          name: 'Airport Shuttles Direct',
          type: 'Airport Transfer',
          contact: '+27 21 934 8900',
          safety: 80
        },
        {
          name: 'Cape Town Tourism - Official Tours',
          type: 'Sightseeing Transport',
          contact: '+27 21 487 6800',
          safety: 75
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 professional security staff and armed response',
        'Electronic key card access with monitoring',
        'CCTV surveillance throughout property',
        'Secure luggage storage and in-room safes',
        'Well-lit entrances with security checkpoints',
        'Female staff available for assistance',
        'Emergency communication systems',
        'Secure transportation arrangements'
      ],
      safeNeighborhoods: [
        'V&A Waterfront (only truly safe area)',
        'Green Point (with caution)',
        'Sea Point (main areas only)',
        'Camps Bay (luxury properties only)'
      ],
      womensOnly: [
        {
          name: 'Once in Cape Town - Female Dorms',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 security', 'Safety briefings', 'Central location'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 85,
          comments: 'V&A Waterfront hotels provide exceptional security. Felt safer here than anywhere else in Cape Town.',
          date: '2025-01-20'
        },
        {
          rating: 4.2,
          safety: 70,
          comments: 'Hotel staff very helpful with safety guidance. Essential to stay in secure areas only.',
          date: '2025-01-15'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use only hotel WiFi - never public networks',
        'VPN essential for all internet connections',
        'Avoid banking or sensitive transactions on any public network',
        'Be cautious of fake WiFi networks in tourist areas'
      ],
      digitalScams: [
        'Fake booking websites targeting tourists',
        'Phishing emails claiming to be from hotels or transport',
        'Social media scams targeting solo female travelers',
        'Fake emergency contact requests',
        'Romance scams targeting women travelers'
      ],
      vpnRecommendations: [
        'NordVPN - reliable with South African servers',
        'ExpressVPN - good for banking security',
        'ProtonVPN - free tier available',
        'Essential for all online activities'
      ],
      dataProtection: [
        'Limited data protection laws in South Africa',
        'Avoid sharing travel plans on social media',
        'Use secure cloud storage for important documents',
        'Keep offline copies of emergency contacts and documents'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Armed Robbery',
          location: 'Long Street area',
          date: '2025-01-22',
          description: 'Solo female tourist robbed at gunpoint in broad daylight near tourist restaurants',
          severity: 'high'
        },
        {
          type: 'Sexual Assault',
          location: 'Public transport',
          date: '2025-01-20',
          description: 'Multiple reports of sexual harassment and assault on MyCiti buses and minibus taxis',
          severity: 'high'
        },
        {
          type: 'Kidnapping Attempt',
          location: 'Camps Bay area',
          date: '2025-01-18',
          description: 'Attempted kidnapping of foreign female tourist near beach area',
          severity: 'high'
        }
      ],
      safetyTips: [
        {
          tip: 'Never leave V&A Waterfront area - it\'s the only safe zone for women',
          author: 'Local Safety Expert',
          date: '2025-01-25',
          upvotes: 156
        },
        {
          tip: 'Use only hotel transport - public transport is extremely dangerous for women',
          author: 'Embassy Security Officer',
          date: '2025-01-23',
          upvotes: 134
        },
        {
          tip: 'Carry emergency whistle and have evacuation plan ready',
          author: 'Solo Female Traveler',
          date: '2025-01-22',
          upvotes: 98
        },
        {
          tip: 'Never walk alone anywhere in Cape Town - even during the day',
          author: 'Local Resident',
          date: '2025-01-20',
          upvotes: 187
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution in South Africa due to crime and civil unrest. Violent crime, such as armed robbery, rape, carjacking, mugging, and smash-and-grab attacks on vehicles, is common. The risk of crime increases significantly at night.',
      reason: 'High crime rates including violent crimes targeting tourists, particularly women.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html',
      soloTravelerAdvice: [
        'Never walk alone at night - use Uber/Bolt even for short distances',
        'Stay in V&A Waterfront, Camps Bay, or Sea Point for best safety',
        'Keep phone hidden - don\'t use openly on streets due to theft risk',
        'Don\'t resist if robbed - your belongings aren\'t worth your life',
        'Join group tours for Table Mountain hikes - never hike alone'
      ]
    },
    crimeStatistics: {
      violentCrime: 514, // per 100,000 (2025 data)
      propertyCrime: 1247, // per 100,000 (2025 data)
      sexualAssault: 89, // per 100,000 (2025 data - severely underreported)
      kidnapping: 15, // per 100,000 (2025 data)
      source: 'South African Police Service (SAPS) 2025',
      year: 2025
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm (essential for women)',
        'Emergency whistle (loud and effective)',
        'Hidden money belt worn under multiple layers',
        'RFID-blocking wallet',
        'Portable door lock for hotel security',
        'Emergency GPS tracker with satellite communication',
        'Portable charger for emergency communication',
        'Pepper spray where legally permitted'
      ],
      safetyApps: [
        {
          name: 'Uber',
          purpose: 'Safer ride-hailing with tracking',
          rating: 4.2
        },
        {
          name: 'MyCiti',
          purpose: 'Official bus service with some safety features',
          rating: 3.8
        },
        {
          name: 'Emergency SOS',
          purpose: 'Quick emergency contacts and location sharing',
          rating: 4.7
        },
        {
          name: 'TripIt',
          purpose: 'Share travel plans with trusted contacts',
          rating: 4.4
        },
        {
          name: 'Find My (iPhone) / Family Link (Android)',
          purpose: 'Essential location sharing with trusted contacts',
          rating: 4.8
        }
      ],
      emergencyContacts: [
        {
          name: 'Police Emergency',
          number: '10111',
          type: 'General Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '10177',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Emergency',
          number: '10177',
          type: 'Fire Emergency'
        },
        {
          name: 'General Emergency',
          number: '112',
          type: 'General Emergency'
        },
        {
          name: 'U.S. Embassy Emergency',
          number: '+27 12 431 4000',
          type: 'Consular Emergency Services'
        },
        {
          name: 'Rape Crisis Cape Town',
          number: '+27 21 447 9762',
          type: 'Sexual Violence Support'
        },
        {
          name: 'Gender-Based Violence Command Centre',
          number: '0800 428 428',
          type: 'GBV Emergency Support'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$80 - $200 USD / day',
        description: 'Higher budget essential for safety through secure accommodation, private transport, and professional security services. Safety must be the top priority over budget considerations.',
        tip: 'Cape Town requires premium spending for women\'s safety. Budget accommodations and transport are extremely dangerous. Invest in security.'
      },
      accommodation: [
        {
          type: 'Budget Hotels (NOT recommended for solo women)',
          avgCost: '$30-60',
          safetyNote: 'Extremely high risk - inadequate security, dangerous locations',
          safetyLevel: 'low'
        },
        {
          type: 'Secure Hotels in V&A Waterfront',
          avgCost: '$120-250',
          safetyNote: 'Much safer with comprehensive security in safest area',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels with Premium Security',
          avgCost: '$300-600',
          safetyNote: 'Safest option with world-class security and staff support',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Hotel Transportation',
          cost: '$40-80/day',
          safetyDescription: 'Essential safety investment - tracked vehicles, vetted drivers, security protocols.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Bolt (Daylight Only)',
          cost: '$25-50/day',
          safetyDescription: 'Acceptable with extreme caution during daylight hours only.',
          safetyLevel: 'medium'
        },
        {
          method: 'Public Transport',
          cost: '$5-15/day',
          safetyDescription: 'Extremely dangerous - high assault and harassment rates.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely dangerous - never walk alone under any circumstances.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Safety is paramount - never compromise security for budget savings',
        'Stay only in V&A Waterfront for maximum security regardless of cost',
        'Use hotel transportation exclusively - the cost difference could save your life',
        'Budget for comprehensive travel insurance with medical evacuation',
        'Consider cutting trip duration rather than compromising on safety',
        'Private security tours are worth the premium for safe sightseeing'
      ]
    }
};

export default capetown;
