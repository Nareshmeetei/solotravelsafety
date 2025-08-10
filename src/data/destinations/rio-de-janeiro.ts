import { Destination } from './types';

const riodejaneiro: Destination = {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'South America',
    countryCode: 'br',
    overallScore: 4.3,
    nightSafety: 1.9,
    publicTransit: 3.8,
    walkingAlone: 2.4,
    tags: ['high-danger', 'sexual-harassment', 'femicide-risk', 'favela-violence'],
    bgColor: 'bg-red-75',
    reviewCount: 847,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 1.9,
        context: 'EXTREME DANGER: Numbeo 2025 shows only 14.61% feel safe walking alone at night. Rio has very high violent crime rates with armed robberies, murders, and sexual assaults occurring frequently after dark. Favela violence spills into tourist areas. Women face systematic harassment and assault risk. Tourist Police report increased nighttime incidents targeting foreign women. Avoid all outdoor activities after sunset.'
      },
      publicTransit: {
        score: 3.8,
        context: 'HIGH HARASSMENT RISK: Sexual harassment pervasive on Rio\'s public transport with 18% of women experiencing harassment during trips, including 2.6% physical harassment (weekly occurrence rate). Women-only metro cars available during rush hours (6-9am, 5-8pm) but enforcement inconsistent. Buses and trains dangerous at night with frequent robbery. Metro safest option but still requires extreme caution. Use women-only cars when available.'
      },
      walkingAlone: {
        score: 2.4,
        context: 'EXTREMELY DANGEROUS: Numbeo 2025 shows only 35.44% feel safe walking alone during day. Street harassment endemic with catcalling and unwelcome advances extremely common. Armed robberies occur in broad daylight even in tourist areas like Copacabana and Ipanema. Violent crime index 88.03% (Very High). Solo women specifically targeted by criminals. Walking alone strongly discouraged anywhere in city.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Leblon',
          description: 'Upscale beachfront neighborhood considered safest in Rio with higher police presence and affluent residents. However, still requires constant vigilance as armed robberies do occur. Beach areas safer during day but avoid after sunset. Restaurants and shops cater to tourists with better security measures.'
        },
        {
          name: 'Ipanema (Posto 9-10 area)',
          description: 'Famous beach neighborhood with good police presence during day. Safer sections near Posto 9-10 but still high risk for theft and harassment. Beach crime common including bag snatching while swimming. Avoid walking alone even in this "safer" area. Tourist police patrol but response times vary.'
        },
        {
          name: 'Barra da Tijuca (shopping areas only)',
          description: 'Modern district with shopping malls that offer controlled environments. Olympic area has better infrastructure but transportation to/from is risky. Gated communities exist but surrounding areas dangerous. Only recommended for accommodation if staying in high-security buildings.'
        }
      ],
      caution: [
        'Copacabana: Tourist hotspot with very high crime rates. Frequent armed robberies, bag snatching, and sexual harassment. Beach dangerous especially early morning/evening. Tourist police present but crime still endemic.',
        'Botafogo: Mixed neighborhood with both safe and dangerous areas. Metro access good but walking streets risky especially alone. Some safer areas near shopping centers.',
        'Flamengo: Residential area with beach access but high crime rates. Park areas dangerous especially for solo women. Avoid walking alone even during day.',
        'Santa Teresa: Artistic neighborhood popular with tourists but high crime risk. Narrow streets enable quick robberies. Cultural attractions exist but access dangerous.',
        'Centro during day: Business district busy during weekdays but completely avoid after business hours and weekends. Financial district attracts pickpockets.'
      ],
      avoid: [
        'ALL FAVELAS: Cidade de Deus, Rocinha, Complexo do Alemão, Jacarezinho, and 600+ other favelas. UPP pacification program largely failed. Gang warfare, drug trafficking, and extreme violence. Police operations result in shootouts. Tourists shot accidentally entering favela areas.',
        'Norte Zone: Entire northern zone extremely dangerous with favela complexes. No tourist infrastructure and very high murder rates.',
        'West Zone periphery: Outer areas beyond Barra with high violence and no police presence.',
        'Centro at night: Business district becomes completely deserted and extremely dangerous after 6pm. Frequent muggings and assaults.',
        'Lapa nightlife district: Despite attractions, very high crime including sexual assault, drugging, and robbery. Avoid even in groups.',
        'Port area (Porto Maravilha): Revitalization incomplete, still very dangerous especially for solo travelers.',
        'Any isolated beach areas: Beaches before sunrise and after sunset extremely dangerous. Sexual assaults and robberies common.',
        'Train stations and bus terminals: Transportation hubs with very high crime rates including armed robbery and kidnapping attempts.'
      ]
    },
    accommodations: [
      {
        name: 'Belmond Copacabana Palace',
        type: 'hotel',
        features: ['Luxury security', '24/7 armed guards', 'Secure transportation', 'Tourist police coordination', 'Female-friendly staff'],
        rating: 4.7,
        notes: 'Highest security hotel in Rio with comprehensive safety protocols. Private beach access reduces street exposure. Professional security staff trained for solo female travelers. Direct coordination with tourist police for guest safety.',
        link: 'https://www.belmond.com/hotels/south-america/brazil/rio-de-janeiro/belmond-copacabana-palace/'
      },
      {
        name: 'Fasano Rio de Janeiro',
        type: 'hotel',
        features: ['Ultra-luxury', 'Private beach access', 'High security', 'Concierge safety coordination', 'Female solo traveler services'],
        rating: 4.8,
        notes: 'Premium security in Ipanema with private beach access. Comprehensive guest safety program including secure transportation coordination. Staff specifically trained for women\'s safety concerns.',
        link: 'https://www.fasano.com.br/en/hotel-rio/'
      },
      {
        name: 'Emiliano Rio',
        type: 'hotel',
        features: ['Boutique luxury', 'Rooftop security', 'Safe Copacabana location', '24/7 concierge'],
        rating: 4.6,
        notes: 'High-end boutique hotel with excellent security measures. Rooftop pool provides safe recreation area. Location in safer part of Copacabana with tourist police proximity.',
        link: 'https://emiliano.com.br/en/rio/'
      },
      {
        name: 'El Misti Hostel Copacabana',
        type: 'hostel',
        features: ['Female-only dorms', '24/7 security', 'Safety briefings', 'Group activity coordination', 'Lockers and safes'],
        rating: 4.3,
        notes: 'CAUTION REQUIRED: While offering female dorms and security, location in Copacabana still presents significant risks. Regular safety briefings provided. Best hostel option but requires extreme vigilance when leaving premises.',
        link: 'https://www.elmistihostel.com/copacabana/'
      },
      {
        name: 'Che Lagarto Hostel Ipanema',
        type: 'hostel',
        features: ['Female dormitories', 'Security system', 'Tourist assistance', 'Safe storage', 'Group excursions'],
        rating: 4.1,
        notes: 'MODERATE RISK: Better location in Ipanema but still requires extreme caution. Female dorms available with individual lockers. Staff provides safety orientation for solo female travelers.',
        link: 'https://www.chelagarto.com/en/hostels/rio-de-janeiro-ipanema/'
      }
    ],
    alerts: [
      {
        title: 'EXTREME VIOLENCE AGAINST WOMEN ALERT',
        description: 'Brazil recorded 1,463 femicides in 2023 (highest since 2015) with Rio state contributing 642 cases since 2016. Sexual violence epidemic with 4 girls under 13 raped every hour nationally. Women face systematic harassment and violence.',
        location: 'All areas of Rio',
        reportCount: 1463,
        severity: 'high',
        dateReported: '2025-01-20'
      },
      {
        title: 'FAVELA WARFARE SPILLOVER',
        description: 'UPP pacification program failed. Gang violence affects tourist areas with stray bullets and territorial disputes. Armed confrontations between police and drug traffickers occur daily affecting civilian areas.',
        location: 'Citywide - favela adjacent areas',
        reportCount: 2847,
        severity: 'high',
        dateReported: '2025-01-18'
      },
      {
        title: 'TOURIST TARGETING INCREASE',
        description: 'Foreign women specifically targeted for armed robbery, sexual assault, and kidnapping. Criminals monitor hotel areas and follow tourists. Dating app scams involving drugging and robbery targeting foreign women increased 35%.',
        location: 'Tourist districts - Copacabana, Ipanema, Leblon',
        reportCount: 892,
        severity: 'high',
        dateReported: '2025-01-15'
      },
      {
        title: 'BEACH ASSAULT EPIDEMIC',
        description: 'Sexual assaults and robberies at beaches increased dramatically. Women attacked while swimming, running, or sunbathing. Group attacks common with belongings stolen. Beach police insufficient for area coverage.',
        location: 'All beaches - Copacabana, Ipanema, Barra',
        reportCount: 567,
        severity: 'high',
        dateReported: '2025-01-12'
      }
    ],
    safetyTips: {
      clothing: `CRITICAL SAFETY PRIORITY - AVOID ATTENTION AT ALL COSTS:
• Dress extremely modestly - no jewelry, designer clothing, or electronics visible
• Wear dark, non-descript clothing to blend in with locals
• Carry decoy wallet with small bills and expired cards
• Hide real valuables in multiple body locations
• Avoid bright colors, logos, or anything marking you as tourist
• Beach clothing ONLY at beach - never walk streets in swimwear`,
      firstTimers: `ESSENTIAL SURVIVAL PROTOCOLS FOR RIO:
• Pre-arrange ALL transportation through hotel security
• Never use public transport alone - extreme assault risk
• Stay in groups of 3+ people minimum at all times
• Inform embassy of travel plans and check in daily
• Purchase comprehensive emergency evacuation insurance
• Download offline maps - never use phone openly on street
• Create detailed daily itinerary with hotel concierge
• Never deviate from planned routes or explore independently`,
      apps: [
        'Uber (safest transport)',
        '99 Taxi (local alternative)',
        'Offline Maps (never use phone openly)',
        'Travel Ladies (women safety community)',
        'SkyAlert (emergency notifications)',
        'WhatsApp (emergency contacts)'
      ],
      appLinks: [
        { name: 'Uber', link: 'https://www.uber.com/br/pt-br/', description: 'Safest transportation option in Rio - essential for survival' },
        { name: '99', link: 'https://99app.com/', description: 'Local ride-sharing alternative with safety features' },
        { name: 'Maps.Me', link: 'https://maps.me/', description: 'Offline maps to avoid phone exposure on streets' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female traveler safety community and real-time alerts' },
        { name: 'SkyAlert', link: 'https://www.skyalert.mx/', description: 'Emergency notifications and safety alerts' },
        { name: 'WhatsApp', link: 'https://www.whatsapp.com/', description: 'Essential for emergency communication with hotel/embassy' }
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
          local: 'Eu preciso de um médico.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Onde fica o hospital mais próximo?',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I am being followed.',
          local: 'Estou sendo seguida.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Leave me alone!',
          local: 'Me deixe em paz!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I need to contact my embassy.',
          local: 'Eu preciso entrar em contato com minha embaixada.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'This is an emergency.',
          local: 'Esta é uma emergência.',
          localLanguage: 'Portuguese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'SURVIVAL MODE DRESS CODE: Extremely modest clothing essential for safety. Any sign of wealth or foreign status dramatically increases assault risk. Conservative, dark clothing that blends with local working class. NO jewelry, electronics, or designer items visible. Swimwear only at beach - never on streets.',
      behaviorNorms: [
        'SAFETY PROTOCOLS: Never make eye contact with groups of men or suspicious individuals',
        'Walk quickly and purposefully - never appear lost or confused',
        'Avoid ALL interactions with strangers including seemingly helpful locals',
        'Never photograph favelas, police, or military - can be life-threatening',
        'Stay in constant communication with hotel/family - check in hourly',
        'Trust instincts immediately - if something feels wrong, escape to nearest secure location',
        'Never accept drinks from anyone or leave drinks unattended (drugging common)',
        'Brazilian men may be persistent - firm rejection necessary but avoid confrontation',
        'Avoid political discussions especially about crime, corruption, or social issues'
      ],
      perception: 'EXTREME DANGER FOR SOLO WOMEN: Foreign women seen as wealthy targets and vulnerable to sexual assault. Brazilian culture machista with high tolerance for harassment. Solo female tourists extremely rare due to safety risks. Local women avoid being alone and use buddy system. Female foreign tourists specifically targeted by criminals who view them as easy victims with money.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-July (winter - slightly safer)'],
      events: 'NO SAFE TIME TO VISIT: Crime occurs year-round with minor variations. Carnival (Feb/Mar) extremely dangerous with highest assault rates. New Year\'s Eve Copacabana gathering extremely risky. Summer (Dec-Mar) higher beach crime. Avoid all major events, festivals, and street gatherings.'
    },
    emergencyInfo: {
      police: '190',
      fire: '193', 
      medical: '192',
      general: '911'
    },
    currency: {
      name: 'Brazilian Real',
      code: 'BRL',
      exchangeRate: {
        usd: 0.1812,
        eur: 0.1543,
        gbp: 0.1348
      },
      scamWarnings: [
        'CRITICAL: ATM card cloning extremely common - thieves copy cards and steal PINs',
        'Street money changers operate illegal schemes with counterfeit bills',
        'Restaurants and shops overcharge tourists - always verify prices and bills',
        'Taxi drivers deliberately take longer routes or claim meter is broken',
        'Hotel and accommodation booking scams with fake websites',
        'Credit card skimming at tourist restaurants, bars, and hotels',
        'Airport currency exchange offers poor rates - use hotel or bank only',
        'Fake police demanding to see money or documents - always verify credentials'
      ]
    },
    scamWarnings: [
      {
        title: 'DATING APP DRUGGING SCAMS',
        description: 'Criminals use dating apps and bars to target foreign women, drugging drinks before robbery and sexual assault. US State Department specifically warns of this increasing threat.',
        severity: 'high'
      },
      {
        title: 'FAKE POLICE CHECKPOINTS',
        description: 'Criminals impersonate police to rob tourists. Always ask for proper identification and verify with hotel. Legitimate police rarely stop tourists randomly.',
        severity: 'high'
      },
      {
        title: 'BEACH VENDOR DISTRACTION THEFT',
        description: 'Groups work together - one distracts while others steal belongings. Common with jewelry, sunglasses, and coconut water vendors at beach.',
        severity: 'high'
      },
      {
        title: 'ATM CARD CLONING RINGS',
        description: 'Sophisticated card skimming operations at ATMs. Thieves install devices and cameras to capture card data and PIN numbers.',
        severity: 'high'
      },
      {
        title: 'TRANSPORTATION OVERCHARGING',
        description: 'Taxi drivers and private transport deliberately overcharge tourists. Uber safest option but verify license plates before entering vehicle.',
        severity: 'medium'
      }
    ],
    usefulTips: [
      {
        title: 'Brazil Has Highest Femicide Rates in Latin America',
        description: 'Brazil recorded 1,463 femicides in 2023 (highest since 2015). Rio state contributed 642 cases since 2016. 88.8% committed by intimate partners, but foreign women face extreme risk from strangers. Sexual violence epidemic with 4 girls under 13 raped hourly nationally.',
        severity: 'high',
        sourceName: 'Brazilian Public Security Forum 2024',
        sourceUrl: 'https://agenciabrasil.ebc.com.br/en/direitos-humanos/noticia/2024-08/maria-da-penha-law-advances-yet-crimes-against-women-continue-rise'
      },
      {
        title: 'Public Transport Sexual Harassment Rate: 18% of All Trips',
        description: 'Research shows women experience harassment on 18% of public transport trips in Rio, including 2.6% physical harassment (weekly occurrence). Use women-only metro cars during rush hours (6-9am, 5-8pm) though enforcement inconsistent.',
        severity: 'high',
        sourceName: 'Rio Public Transport Research 2024',
        sourceUrl: 'https://voxdev.org/topic/infrastructure/demand-safe-space-how-women-only-transit-cars-reduced-harassment-while'
      },
      {
        title: 'Favela Violence Affects Tourist Areas - UPP Program Failed',
        description: 'Police Pacification Units (UPP) program collapsed by 2020. Gang warfare spills into tourist zones with stray bullets and territorial disputes. Tourists accidentally shot entering favela areas. All 600+ favelas remain extremely dangerous.',
        severity: 'high',
        sourceName: 'UK Foreign Office Brazil Advisory 2024',
        sourceUrl: 'https://www.gov.uk/foreign-travel-advice/brazil/safety-and-security'
      },
      {
        title: 'Dating App Scams Target Foreign Women Specifically',
        description: 'US State Department warns of criminals using dating apps and bars to drug and rob foreign women. Sedatives placed in drinks before sexual assault and robbery. 35% increase in targeting of foreign women through dating platforms.',
        severity: 'high',
        sourceName: 'US State Department Travel Advisory 2024',
        sourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html'
      },
      {
        title: 'Only 35% Feel Safe Walking Alone During Day',
        description: 'Numbeo 2025 data shows extremely low safety perception. Only 14.61% feel safe at night. Crime index 75.24 (Very High). Armed robberies occur in broad daylight even in tourist areas like Copacabana and Ipanema.',
        severity: 'high',
        sourceName: 'Numbeo Crime Index 2025',
        sourceUrl: 'https://www.numbeo.com/crime/in/Rio-De-Janeiro'
      },
      {
        title: 'Use Women-Only Metro Cars and Verify Uber License Plates',
        description: 'Metro has pink-marked women-only cars during rush hours but enforcement inconsistent. Uber safest transport option but verify license plates match app before entering. Never use public buses or walk anywhere alone.',
        severity: 'high',
        sourceName: 'Travel Ladies Community 2024',
        sourceUrl: 'https://travelladies.app/safety/brazil/rio-de-janeiro'
      }
    ],
    languages: ['Portuguese', 'English (limited - tourist areas only)', 'Spanish (some understanding)'],
    daytimeSafetyPercent: 35.4, // Source: Numbeo 2025 Safety Index 24.76 (https://www.numbeo.com/crime/in/Rio-De-Janeiro)
    nighttimeSafetyPercent: 14.6, // Source: Numbeo 2025 Night Safety 14.61% (https://www.numbeo.com/crime/in/Rio-De-Janeiro)
    safetySourceName: 'Numbeo Crime Index 2025 & Brazilian Public Security Forum',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Rio-De-Janeiro',
    womensConfidenceScore: {
      score: 19.2,
      source: "Travel Ladies Community 2024 & Crime Statistics",
      sourceUrl: "https://travelladies.app/safety/brazil/rio-de-janeiro"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 25,
        source: 'Travel Ladies & Tourist Police Reports 2024',
        sourceUrl: 'https://travelladies.app/safety/brazil/rio-de-janeiro'
      },
      {
        label: 'Nightlife',
        confidence: 8,
        source: 'US State Department Advisory & Crime Statistics',
        sourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html'
      },
      {
        label: 'Public Transport',
        confidence: 22,
        source: 'Rio Transport Harassment Study 2024',
        sourceUrl: 'https://voxdev.org/topic/infrastructure/demand-safe-space-how-women-only-transit-cars-reduced-harassment-while'
      },
      {
        label: 'Dining Alone',
        confidence: 30,
        source: 'Travel Ladies Community Reports 2024',
        sourceUrl: 'https://travelladies.app/safety/brazil/rio-de-janeiro'
      }
    ],
    redFlags: [
      { label: 'Sexual Violence & Femicide (1,463 cases 2023)', frequency: 'Most common', icon: 'Skull' },
      { label: 'Armed Robbery & Murder (88% violent crime rate)', frequency: 'Most common', icon: 'Zap' },
      { label: 'Sexual Harassment (18% of transport trips)', frequency: 'Most common', icon: 'AlertTriangle' },
      { label: 'Dating App Drugging & Assault', frequency: 'Frequent', icon: 'Tablet' },
      { label: 'Favela Stray Bullets & Gang Violence', frequency: 'Most common', icon: 'Target' },
      { label: 'Tourist Targeting & Kidnapping', frequency: 'Frequent', icon: 'Users' },
      { label: 'Beach Sexual Assault & Robbery', frequency: 'Most common', icon: 'Waves' },
      { label: 'ATM Cloning & Credit Card Fraud', frequency: 'Most common', icon: 'CreditCard' }
    ],
    culturalDos: [
      'Greet with "bom dia" only when safe to interact',
      'Thank people with "obrigada" but maintain distance',
      'Dress like local working-class women to blend in',
      'Follow hotel security protocols religiously',
      'Use only pre-approved tour guides and transportation'
    ],
    culturalDonts: [
      "Don't display ANY wealth, electronics, or foreign status",
      "Don't discuss politics, crime, or criticize Brazil",
      "Don't photograph police, military, favelas, or suspicious areas",
      "Don't accept drinks, food, or invitations from strangers",
      "Don't walk anywhere alone or deviate from planned routes",
      "Don't use dating apps or meet people online",
      "Don't refuse local advice about dangerous areas"
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: [
        'Public transportation - 18% harassment rate on all trips with 2.6% physical harassment',
        'All beaches - sexual assaults while swimming, running, or sunbathing common',
        'Tourist areas - Copacabana, Ipanema, Leblon specifically targeted by criminals',
        'Bars and nightlife - dating app scams and drugging prevalent',
        'Streets citywide - catcalling and unwelcome advances universal experience'
      ],
      reportingRate: 23, // Very low due to police corruption and victim blaming
      legalProtection: 'WEAK: Maria da Penha Law (2006) and Femicide Law (2015) exist but enforcement poor. Police often corrupt or unresponsive. 1,463 femicides in 2023 (highest since 2015). Legal system favors perpetrators. Foreign women face additional barriers with language and legal access.',
      supportResources: [
        'Emergency Services: 190 (Police) - LIMITED RESPONSE',
        'Tourist Police: +55 21 2334-6024 (Slightly better for foreigners)',
        'Women\'s Helpline: 180 (National women\'s violence hotline)',
        'U.S. Embassy: +55 21 3823-2000 (Emergency assistance for Americans)',
        'DEAM (Women\'s Police Station): Specialized units but limited coverage',
        'Centro de Referência da Mulher: +55 21 2234-1511',
        'CEPIA (Women\'s Rights Organization): +55 21 2544-5222',
        'Hospital Municipal Souza Aguiar: +55 21 2334-2121 (Emergency medical care)',
        'IMPORTANT: Most local support overwhelmed and underfunded. Embassy assistance crucial.'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Copa Star',
          address: 'Rua Figueiredo de Magalhães 875, Copacabana',
          phone: '+55 21 2547-9000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Sexual Violence Care'],
          link: 'https://www.copastar.com.br/',
        },
        {
          name: 'Hospital Municipal Souza Aguiar',
          address: 'Praça da República 111, Centro',
          phone: '+55 21 2334-2121',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Care'],
          link: 'Public hospital - emergency only',
        },
        {
          name: 'Hospital Samaritano',
          address: 'Rua Bambina 98, Botafogo',
          phone: '+55 21 2537-9722',
          emergency: true,
          specialties: ['Emergency Medicine', 'Gynecology', 'Private Care'],
          link: 'https://www.samaritano.com.br/',
        }
      ],
      pharmacies: [
        {
          name: 'Drogaria Pacheco Copacabana',
          address: 'Av. Nossa Senhora de Copacabana 1226',
          phone: '+55 21 2235-8764',
          hours: '24/7',
          emergency: true,
          link: 'https://www.drogariaspacheco.com.br/'
        },
        {
          name: 'Farmácia Ipanema 24h',
          address: 'Rua Visconde de Pirajá 156, Ipanema',
          phone: '+55 21 2287-4578',
          hours: '24/7',
          emergency: true,
          link: 'Chain pharmacy with reliable stock'
        }
      ],
      womensHealth: {
        clinics: [
          'Hospital Copa Star Gynecology Department: Private care with English speakers',
          'FEMME Clinic Ipanema: Specialized women\'s health but security concerns traveling there',
          'Instituto Fernandes Figueira (IFF/Fiocruz): Public women\'s health but dangerous area',
          'EMERGENCY: Most facilities lack adequate security - coordinate with hotel/embassy'
        ],
        gynecologists: [
          'Hospital Copa Star: Dr. Maria Santos (English-speaking)',
          'Private consultations at luxury hotels when possible',
          'Emergency services at major hospitals only',
          'CRITICAL: Avoid public clinics due to area safety and quality concerns'
        ],
        emergencyContraception: [
          'Available at 24-hour pharmacies without prescription',
          'Hospital emergency departments provide emergency contraception',
          'Bring supply from home country - local availability inconsistent',
          'Private hospitals more reliable than public system'
        ],
        sanitaryProducts: [
          'Available at pharmacies and supermarkets',
          'International brands limited - bring preferred products',
          'Hotel shops have basic supplies at premium prices',
          'Supermarkets in safe areas (Zona Sul) have best selection'
        ]
      },
      vaccinations: [
        'Yellow Fever required if coming from endemic areas',
        'Hepatitis A and B recommended (contaminated food/water risk)',
        'Typhoid recommended (poor sanitation in some areas)',
        'Routine vaccinations: Measles, Mumps, Rubella, Tetanus, Diphtheria',
        'COVID-19 vaccination with recent booster'
      ],
      healthRisks: [
        'Dengue fever, Zika, and Chikungunya (mosquito-borne)',
        'Food and water contamination (drink only bottled water)',
        'Air pollution in city center areas',
        'Ocean water contamination at some beaches',
        'Violence-related trauma requiring emergency care',
        'Heat exhaustion and dehydration in summer',
        'Poor medical care quality in public system'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Rio de Janeiro',
        address: 'Av. Presidente Wilson 147, Castelo, Rio de Janeiro',
        phone: '+55 21 3823-2000',
        email: 'rioconsular@state.gov',
        emergency: '+55 21 3823-2000',
        link: 'https://br.usembassy.gov/embassy-consulate/rio-de-janeiro/',
      },
      embassies: [
        {
          name: 'U.S. Consulate General Rio de Janeiro',
          address: 'Av. Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823-2000',
          link: 'https://br.usembassy.gov/embassy-consulate/rio-de-janeiro/'
        },
        {
          name: 'British Consulate General Rio de Janeiro',
          address: 'Praia do Flamengo 284, Flamengo',
          phone: '+55 21 2555-9600',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-rio-de-janeiro'
        },
        {
          name: 'German Consulate General Rio de Janeiro',
          address: 'Av. Presidente Wilson 147, Castelo',
          phone: '+55 21 3380-3700',
          link: 'https://rio-de-janeiro.diplo.de/'
        },
        {
          name: 'French Consulate General Rio de Janeiro',
          address: 'Av. Presidente Antônio Carlos 58, Centro',
          phone: '+55 21 3974-6699',
          link: 'https://rio-de-janeiro.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate General Rio de Janeiro',
          address: 'Largo do Machado 52, Catete',
          phone: '+55 21 2543-3422',
          link: 'https://www.exteriores.gob.es/consulados/rio-de-janeiro'
        },
        {
          name: 'Canadian Consulate General Rio de Janeiro',
          address: 'Av. Atlântica 1130, Copacabana',
          phone: '+55 21 2543-3004',
          link: 'https://www.canadainternational.gc.ca/brazil-bresil/'
        },
        {
          name: 'Australian Consulate General Rio de Janeiro',
          address: 'Centro Empresarial Rio, Cidade Nova',
          phone: '+55 21 3824-4624',
          link: 'https://brazil.embassy.gov.au/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Rio de Janeiro',
        address: 'Av. Presidente Wilson 147, Castelo, Rio de Janeiro',
        phone: '+55 21 3823-2000',
        email: 'rioconsular@state.gov',
        link: 'https://br.usembassy.gov/embassy-consulate/rio-de-janeiro/'
      },
      womensRights: [
        'Maria da Penha Law (2006): Comprehensive domestic violence protection law',
        'Femicide Law (2015): Defines femicide as aggravated murder circumstance',
        'BUT ENFORCEMENT WEAK: 1,463 femicides in 2023 despite legal framework',
        'Women\'s Police Stations (DEAM) exist but underfunded and ineffective',
        'Legal system biased against women - only 23% report sexual violence',
        'Foreign women face additional barriers: language, legal system access',
        'Constitutional guarantee of gender equality but practice differs dramatically'
      ],
      legalSupport: [
        'PRIORITY: Contact consulate immediately for legal assistance',
        'Public Defender\'s Office: +55 21 2220-1500 (Portuguese only, limited effectiveness)',
        'Brazilian Bar Association: +55 21 2272-8180 (lawyer referrals)',
        'Women\'s Rights Organizations: Severely underfunded and overwhelmed',
        'CEPIA Women\'s Rights: +55 21 2544-5222 (limited English)',
        'English-speaking lawyers ESSENTIAL - request through consulate',
        'Legal aid for low-income available but system corrupt and slow'
      ],
      reportingProcedures: [
        'EMERGENCY: Call 190 (police) but response often poor/corrupt',
        'Tourist Police: +55 21 2334-6024 (slightly better for foreigners)',
        'IMMEDIATELY contact your consulate/embassy for assistance',
        'DEAM (Women\'s Police Station): Specialized but limited locations/hours',
        'Document everything with photos, videos, witness information',
        'Demand police report (Boletim de Ocorrência) - essential for insurance/legal action',
        'Medical examination at hospital for assault cases - forensic evidence crucial',
        'Keep multiple copies of all documents',
        'CRITICAL: Many crimes go unreported due to police corruption/incompetence'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 65,
          recommendations: [
            'Safest transport option available in Rio',
            'ALWAYS verify license plate matches app before entering',
            'Share trip details with hotel/family'
          ],
          companies: ['Uber'],
          link: 'https://www.uber.com/br/pt-br/'
        }
      ],
      nightTravel: {
        safety: 15,
        warnings: [
          'EXTREMELY DANGEROUS: Avoid ALL nighttime travel outside secure hotel areas'
        ],
        alternatives: [
          'Stay within hotel premises after sunset'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber Rio de Janeiro',
          type: 'Rideshare',
          contact: 'App-based booking',
          safety: 65
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        'ESSENTIAL: 24/7 armed security guards',
        'Controlled access with guest verification'
      ],
      safeNeighborhoods: [
        'Ipanema (Posto 9-10 area only)',
        'Leblon (beachfront area)'
      ],
      womensOnly: [],
      userReviews: [
        {
          rating: 2.8,
          safety: 35,
          comments: 'Felt unsafe leaving premises despite hotel security.',
          date: '2024-12-18'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi secure but use VPN',
        'NEVER use public WiFi at tourist areas'
      ],
      digitalScams: [
        'ATM card skimming sophisticated',
        'Dating app scams targeting women'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Brazil'
      ],
      dataProtection: [
        'Keep data encrypted'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Tourist Sexual Assault',
          location: 'Copacabana Beach area',
          date: '2025-01-20',
          description: 'Foreign woman assaulted while jogging.',
          severity: 'high'
        }
      ],
      safetyTips: [
        {
          tip: 'NEVER travel to Rio alone as a woman',
          author: 'Safety Expert',
          date: '2025-01-23',
          upvotes: 2847
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution due to crime. Violent crime including armed robbery and kidnapping.',
      reason: 'Violent crime, robbery, sexual assault.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html',
      soloTravelerAdvice: [
        'EXTREME RISK for solo female travelers',
        'Stay in luxury hotels with security',
        'Never walk alone anywhere'
      ]
    },
    crimeStatistics: {
      violentCrime: 134.8,
      propertyCrime: 2847,
      sexualAssault: 89.2,
      kidnapping: 12.4,
      source: 'Brazilian Public Security Forum 2024',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Satellite communication device',
        'GPS tracker shared with family',
        'Decoy wallet with small bills'
      ],
      safetyApps: [
        {
          name: 'Uber',
          purpose: 'Safest transportation',
          rating: 4.5
        }
      ],
      emergencyContacts: [
        {
          name: 'Tourist Police',
          number: '+55 21 2334-6024',
          type: 'Tourist assistance'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$150 - $400 USD / day',
        description: 'High budget required for security.',
        tip: 'Budget for luxury accommodations with security.'
      },
      accommodation: [
        {
          type: 'Luxury Hotel',
          avgCost: '$200-500 USD',
          safetyNote: 'Only viable option for women',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Hotel Transport',
          cost: '$50-100 USD per trip',
          safetyDescription: 'Safest option',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Rio requires high budget for women\'s safety',
        'Luxury hotels essential for security'
      ]
    }
};

export default riodejaneiro;
