import { Destination } from './types';

const sansalvador: Destination = {
    city: 'San Salvador',
    country: 'El Salvador',
    continent: 'North America',
          countryCode: 'sv',
    overallScore: 5.2,
    nightSafety: 4.1,
    publicTransit: 5.0,
    walkingAlone: 4.8,
    tags: ['dramatic-improvement', 'state-of-exception'],
    bgColor: 'bg-yellow-25',
    reviewCount: 180,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 4.1,
        context: 'SIGNIFICANT IMPROVEMENT: Night safety dramatically improved since 2022 State of Exception. Murder rate dropped 95% to historic low of 1.89 per 100,000 in 2024. For solo female travelers wondering "is San Salvador safe for women traveling alone," night safety requires extra caution. Women should still avoid walking alone after dark, especially outside well-lit areas in Zona Rosa and Escalón. Use trusted transportation and stay alert to surroundings.'
      },
      publicTransit: {
        score: 5.0,
        context: 'MUCH SAFER: Public transport safety significantly improved under enhanced security measures. Buses and metro systems now heavily patrolled. However, women should remain vigilant during rush hours and avoid displaying valuables. Uber available in San Salvador and considered safe option for solo female travelers.'
      },
      walkingAlone: {
        score: 4.8,
        context: 'DRAMATIC IMPROVEMENT: Walking alone much safer than previous years due to 95% reduction in violent crime. Daytime walking in safe neighborhoods (Zona Rosa, Escalón, San Benito) generally safe. Women report feeling secure during day but should avoid isolated areas. Street harassment still occurs but violent incidents rare.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Zona Rosa',
          description: 'Upscale district with secure hotels, restaurants, and shopping. Known for excellent security with police presence and private security. Popular with female travelers and considered the safest area in San Salvador for solo women. Well-lit streets and active nightlife scene.'
        },
        {
          name: 'Colonia Escalón',
          description: 'Affluent neighborhood offering museums, shopping, and dining. Home to many embassies providing additional security. Excellent infrastructure and police presence. Safe for women walking during day and evening in main areas. High-end accommodations with security features.'
        },
        {
          name: 'San Benito',
          description: 'Known for exceptional security and upscale amenities. Location of many international hotels and shopping centers. Well-maintained streets with good lighting. Considered one of the safest areas for solo female travelers with 24/7 security presence.'
        },
        {
          name: 'Santa Tecla',
          description: 'Western suburb with pleasant pedestrian areas and very low crime rates. Popular with families and young professionals. Good public spaces and café culture. Safe for women during day and evening hours with regular police patrols.'
        }
      ],
      caution: [
        'Centro Histórico: Much safer due to dedicated police efforts and tourism initiatives. Safe during daylight hours with visible police presence, but avoid after dark. Stick to main plazas and tourist areas.',
        'La Libertad: Beach town popular with tourists but requires caution. Good during day with other tourists present, but avoid isolated beach areas and late-night activities.',
        'Antiguo Cuscatlán: Generally safe but avoid shortcuts through less populated areas. Good during business hours but exercise caution in evenings.'
      ],
      avoid: [
        'Soyapango: Eastern area with higher crime rates despite overall improvements. Not tourist-friendly and lacks adequate security infrastructure.',
        'Mejicanos: Northern district with limited police presence and poor lighting. Avoid entirely, especially for solo female travelers.',
        'Ilopango: Eastern suburb with persistent security challenges. Not recommended for tourists, particularly at night.',
        'Apopa: Northern city with higher rates of violent crime. Stay away from this area.',
        'Ciudad Delgado: Eastern area lacking tourist infrastructure and security measures.',
        'San Martín: Northern region with ongoing security concerns despite national improvements.'
      ]
    },
    accommodations: [
      {
        name: 'La Zona Hostel',
        type: 'hostel',
        features: ['Pod-style beds with privacy curtains', 'Located in safe San Benito area', '24-hour reception', 'Secure lockers', 'Key-card access'],
        rating: 9.2,
        notes: 'Top-rated hostel in San Salvador. Located in very safe San Benito neighborhood. Female-friendly with excellent security measures.',
        link: 'https://www.lazonahostel.com/'
      },
      {
        name: 'Las Magnolias Hotel Boutique',
        type: 'hotel',
        features: ['Located in safe San Benito', 'Private rooms with hot water', 'Breakfast included', 'Near shopping and restaurants'],
        rating: 8.8,
        notes: 'Boutique hotel in very safe area. Walking distance to shops and dining. Excellent for solo female travelers.',
        link: 'https://www.lasmagnoliashotel.com/'
      },
      {
        name: 'Hotel Oasis',
        type: 'hotel',
        features: ['Lovely garden and patio', 'Daily changing breakfast', 'Central location', 'Security staff'],
        rating: 8.5,
        notes: 'Beautiful hotel with peaceful garden setting. Safe location with good security and female-friendly atmosphere.',
        link: 'https://www.hoteloasis.com.sv/'
      },
      {
        name: 'Hotel Villa Florencia Centro Historico',
        type: 'hotel',
        features: ['Centro Histórico location', 'Historic building', 'Tourist police nearby', 'Secure entrance'],
        rating: 8.3,
        notes: 'Great hotel in improved Centro Histórico area. Enhanced security due to tourism initiatives. Recommended by solo female travelers.',
        link: 'https://www.hotelvilla florencia.com/'
      },
      {
        name: 'Barceló San Salvador',
        type: 'hotel',
        features: ['Luxury amenities', 'Safe Escalón area', '24/7 security', 'Business center', 'Female-friendly staff'],
        rating: 8.7,
        notes: 'High-end hotel with exceptional security measures. Professional staff trained to assist solo female travelers.',
        link: 'https://www.barcelo.com/'
      }
    ],
    alerts: [
      {
        title: 'Dramatic Security Improvement - State of Exception',
        description: 'El Salvador implemented State of Exception in 2022, resulting in 95% reduction in homicides. Country now has Level 1 US State Department advisory (lowest risk). Gang activity severely disrupted, making travel much safer than previous years.',
        location: 'Nationwide',
        reportCount: 1,
        severity: 'low',
        dateReported: '2025-01-20'
      },
      {
        title: 'Street Harassment of Women Still Occurs',
        description: 'While violent crime dramatically reduced, street harassment including catcalling, comments, and unwelcome attention still affects women travelers. Most incidents non-violent but can be intimidating. Stick to busy, well-lit areas and dress conservatively.',
        location: 'Urban areas, markets, public transport',
        reportCount: 12,
        severity: 'medium',
        dateReported: '2025-01-15'
      }
    ],
    safetyTips: {
      clothing: `• Dress conservatively to blend in with local women - traditional culture expects modest appearance
• Avoid revealing clothing like short shorts, crop tops, or low-cut tops to reduce unwanted attention
• Wear closed-toe shoes for safety and cultural respect - flip-flops only appropriate at beach areas
• Keep expensive jewelry and designer items hidden to avoid attracting thieves
• Carry a light shawl or scarf to cover shoulders when entering churches or formal buildings
• Choose muted colors over bright, flashy clothing that marks you as a tourist target`,
      firstTimers: `• Arrange private airport transfers in advance - public transport from airport increases risk exposure
• Stay in safe neighborhoods only: Zona Rosa, Escalón, San Benito, Santa Tecla for best solo female traveler security
• Download Uber app immediately - much safer than street taxis, especially for solo women at night
• Learn key Spanish safety phrases before arrival - locals appreciate effort and more likely to help
• Keep emergency numbers saved in phone including Women's Crisis Hotline 126 (24/7)
• Use hotel safes religiously for documents and valuables - petty theft still common despite improvements
• Never walk alone after 7 PM anywhere in San Salvador, even in safe neighborhoods
• Research cultural norms around machismo - street harassment still prevalent despite security improvements`,
      apps: [
        'bSafe',
        'NomadHer', 
        'iTranslate',
        'Uber',
        'Maps.me',
        'SpanishDict',
        'Life360',
        'Google Maps'
      ],
      appLinks: [
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking, emergency alerts, and family location sharing', rating: 4.5 },
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting verified women travelers safely in Central America', rating: 4.8 },
        { name: 'iTranslate', link: 'https://www.itranslate.com/', description: 'Top-rated Spanish translator with 4.7/5 stars - essential for El Salvador communication', rating: 4.7 },
        { name: 'Uber', link: 'https://www.uber.com/', description: 'Safest transportation in El Salvador with driver verification and trip tracking', rating: 4.6 },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps for El Salvador with detailed San Salvador navigation without internet', rating: 4.5 },
        { name: 'SpanishDict', link: 'https://www.spanishdict.com/', description: 'Best Spanish-English dictionary with pronunciation and context for solo travelers', rating: 4.8 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Location sharing with emergency contacts - critical for solo female travel safety', rating: 4.6 },
        { name: 'Google Maps', link: 'https://maps.google.com/', description: 'Most accurate navigation in El Salvador with real-time traffic and safety updates', rating: 5.0 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '¡Ayuda!',
          localLanguage: 'Spanish',
          pronunciation: 'ah-YOO-dah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¡Ayuda!',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¡Ayuda!',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=¡Ayuda!&client=tw-ob'
          ],
          phonetic: '¡Ayuda!',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'Call the police!',
          local: '¡Llama a la policía!',
          localLanguage: 'Spanish',
          pronunciation: 'YAH-mah ah lah po-lee-SEE-ah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¡Llama%20a%20la%20policía!',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¡Llama%20a%20la%20policía!',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=¡Llama%20a%20la%20policía!&client=tw-ob'
          ],
          phonetic: '¡Llama a la policía!',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Necesito un médico.',
          localLanguage: 'Spanish',
          pronunciation: 'neh-seh-SEE-toh oon MEH-dee-koh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=Necesito%20un%20médico',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=Necesito%20un%20médico',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Necesito%20un%20médico&client=tw-ob'
          ],
          phonetic: 'Necesito un médico.',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'Leave me alone!',
          local: '¡Déjame en paz!',
          localLanguage: 'Spanish',
          pronunciation: 'DEH-hah-meh en pahs',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¡Déjame%20en%20paz!',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¡Déjame%20en%20paz!',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=¡Déjame%20en%20paz!&client=tw-ob'
          ],
          phonetic: '¡Déjame en paz!',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'Where is the nearest police station?',
          local: '¿Dónde está la estación de policía más cercana?',
          localLanguage: 'Spanish',
          pronunciation: 'DOHN-deh eh-STAH lah eh-stah-see-OHN deh po-lee-SEE-ah mahs ser-KAH-nah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¿Dónde%20está%20la%20estación%20de%20policía%20más%20cercana?',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¿Dónde%20está%20la%20estación%20de%20policía%20más%20cercana?',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=¿Dónde%20está%20la%20estación%20de%20policía%20más%20cercana?&client=tw-ob'
          ],
          phonetic: '¿Dónde está la estación de policía más cercana?',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish',
          pronunciation: 'eh-STOY per-DEE-dah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=Estoy%20perdida',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=Estoy%20perdida',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Estoy%20perdida&client=tw-ob'
          ],
          phonetic: 'Estoy perdida.',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Me siento insegura.',
          localLanguage: 'Spanish',
          pronunciation: 'meh see-EN-toh een-seh-GOO-rah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=Me%20siento%20insegura',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=Me%20siento%20insegura',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Me%20siento%20insegura&client=tw-ob'
          ],
          phonetic: 'Me siento insegura.',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: '¿Puedes ayudarme?',
          localLanguage: 'Spanish',
          pronunciation: 'PWEH-dehs ah-yoo-DAHR-meh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¿Puedes%20ayudarme?',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-ES-ElviraNeural&text=¿Puedes%20ayudarme?',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=¿Puedes%20ayudarme?&client=tw-ob'
          ],
          phonetic: '¿Puedes ayudarme?',
          voiceInfo: {
            voiceName: 'es-ES-ElviraNeural',
            gender: 'Female',
            displayName: 'Elvira (Spanish Female)'
          }
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Conservative dress essential in traditional Catholic culture. Women expected to wear modest clothing covering shoulders and knees. Colorful traditional "traje de mestiza" dresses reflect local culture but tourists should opt for simple, conservative Western clothing. Avoid tight-fitting, revealing, or flashy clothing which attracts unwanted attention. Closed-toe shoes preferred for respect and safety.',
      behaviorNorms: [
        'El Salvador is high-context culture emphasizing formality and politeness above all',
        'Greet with polite "Buenos días" (morning) or "Buenas tardes" (afternoon) - essential for respect',
        'Maintain respectful distance in conversations - personal space important in formal culture',
        'Show deference to elders and authority figures - hierarchical society with strong respect for age',
        'Accept hospitality gracefully but can politely decline if uncomfortable - refusing rudely is offensive',
        'Avoid discussing politics, gangs, or recent violence - extremely sensitive topics that can create danger',
        'Learn basic Spanish phrases - locals greatly appreciate effort and more likely to help solo travelers',
        'Be patient with slower pace of life - "mañana" attitude is cultural norm, not disrespect'
      ],
      perception: 'Solo female travelers extremely rare and draw significant attention. For women asking "is San Salvador safe for female solo travelers," the answer requires understanding that machismo culture means men may be very forward with comments, whistling, and persistent romantic interest. Traditional gender roles mean women expected to be accompanied. Solo women may be seen as unusually independent, leading to both curiosity and unwanted attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '913', medical: '132', general: '911'
    },
    currency: {
      name: 'United States Dollar', code: 'USD', exchangeRate: {
      usd: 1.0000,
      eur: 0.8520,
      gbp: 0.7440
    }, 
    exchangeTips: [
      'No currency exchange needed - El Salvador officially adopted US Dollar (USD) in 2001',
      'Bring clean, undamaged US bills - damaged or very old bills may be rejected by businesses',
      'Currency exchange services only needed for non-USD currencies - limited locations available',
      'Airport currency exchange booths have poor rates - exchange before arrival if coming from non-USD country',
      'Banks like Banco Agrícola and Scotiabank offer currency exchange for EUR, CAD at better rates than airport',
      'Exchange rates for non-USD currencies: EUR typically 0.85-0.90, GBP around 0.74-0.78 to USD',
      'Avoid street money changers completely - illegal and dangerous, especially for solo female travelers',
      'Hotel currency exchange available but rates 5-10% worse than banks - use only for emergencies',
      'Keep exchange receipts for tax purposes and proof of legitimate currency conversion'
    ],
    scamWarnings: [
      'Counterfeit currency scams - fake US bills circulated especially in markets and tourist areas, always check bills carefully',
      'Fake police checkpoints targeting tourists - always ask for proper identification and remain in vehicle',
      'ATM skimming devices especially at tourist areas - cover PIN and check for loose card readers',
      'Street vendor overcharging - quote prices 3-4x higher for obvious tourists, negotiate firmly',
      'Hotel booking scams - fake reservation confirmations leading to unsafe accommodations',
      'Romance scams targeting solo female travelers through social media and dating apps',
      'Charity scams using children or disabled individuals to solicit money from sympathetic travelers',
      'Fake emergency calls claiming family member needs money - verify independently before sending funds'
    ]
    },
    scamWarnings: [
      { title: 'Unlicensed Taxi Scams', description: 'Drivers without meters charging inflated rates, taking dangerous detours, or working with criminals to rob passengers. Use only Uber or hotel-arranged transport.', severity: 'high' },
      { title: 'Fake Police Checkpoints', description: 'Criminals posing as police to extort money or steal belongings. Always ask for proper identification and never hand over documents or money.', severity: 'high' },
      { title: 'ATM Skimming Devices', description: 'Card readers placed over legitimate ATM slots to steal card information. Check for loose or suspicious attachments, cover PIN entry.', severity: 'medium' },
      { title: 'Tourist Overcharging', description: 'Street vendors, taxi drivers, and some businesses quote prices 2-3x higher for obvious tourists. Research normal prices and negotiate firmly.', severity: 'medium' },
      { title: 'Romance Scams', description: 'Targeting solo female travelers through social media, dating apps, or in-person meetings. Goal is to build trust then request money for emergencies.', severity: 'medium' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 55.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/San-Salvador)
    nighttimeSafetyPercent: 32.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/San-Salvador)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/San-Salvador',
    // Red flags based on Numbeo 2025, World Nomads, and recent travel advisories
    // Sources:
    // https://www.numbeo.com/crime/in/San-Salvador
    // https://www.worldnomads.com/travel-safety/central-america/el-salvador/crime-in-el-salvador
    // https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching (Markets, Buses)',
        frequency: 'Frequent',
        icon: 'Hand',
        details: 'Professional thieves operate in crowded markets like Mercado Central and on public buses. Bag snatching from motorcycles is common.',
        prevention: 'Use money belts, carry minimal cash, secure bags across body, avoid displaying valuables, stay alert in crowds'
      },
      {
        label: 'Armed Robbery & Mugging (Especially at Night)',
        frequency: 'Frequent',
        icon: 'PocketKnife',
        details: 'Armed robbery rates are high, particularly after dark. Solo female travelers face increased risks in many areas of the city.',
        prevention: 'Never walk alone at night, use hotel transport, carry decoy wallet, avoid displaying valuables, never resist armed robbers'
      },
      {
        label: 'Taxi Scams & Unlicensed Taxis',
        frequency: 'Occasional',
        icon: 'Car',
        details: 'Unlicensed taxis may overcharge, take longer routes, or be involved in robberies. Some drivers collaborate with criminals.',
        prevention: 'Use official taxi companies only, agree on fare beforehand, avoid hailing taxis on street, use rideshare apps when available'
      },
      {
        label: 'Gang Activity in Certain Districts',
        frequency: 'Occasional',
        icon: 'Users',
      },
    ],
    usefulTips: [
      {
        title: "Book airport transfers and avoid public transport at night",
        description: "Arrange private airport transfers in advance and avoid using public transport after dark. Registered taxis or rideshare apps like Uber are safer options, especially at night.",
        severity: "high",
        sourceName: "Cat is Out of the Office (2025)",
        sourceUrl: "https://catisoutoftheoffice.com/is-el-salvador-safe/"
      },
      {
        title: "Stay in safe neighborhoods and ask your accommodation for advice",
        description: "Choose accommodation in areas like Zona Rosa or Colonia Escalón. Always check with your hotel or hostel for the latest safety information and areas to avoid.",
        severity: "medium",
        sourceName: "Cat is Out of the Office (2025)",
        sourceUrl: "https://catisoutoftheoffice.com/is-el-salvador-safe/"
      },
      {
        title: "Dress modestly and keep valuables hidden",
        description: "El Salvador is traditional; dressing conservatively helps you blend in and avoid unwanted attention. Keep valuables out of sight and avoid flashy jewelry.",
        severity: "medium",
        sourceName: "Meghan the Traveling Teacher (2025)",
        sourceUrl: "https://meghanthetravelingteacher.com/tips-for-visiting-el-salvador/"
      },
      {
        title: "Use ATMs in secure locations and carry minimal cash",
        description: "Use ATMs inside banks or busy areas, and carry only the cash you need for the day. Credit cards are accepted in most places, but always have some cash as a backup.",
        severity: "medium",
        sourceName: "Meghan the Traveling Teacher (2025)",
        sourceUrl: "https://meghanthetravelingteacher.com/tips-for-visiting-el-salvador/"
      },
      {
        title: "Avoid walking alone at night and keep emergency numbers saved",
        description: "Do not walk alone after dark, especially in unfamiliar areas. Save local emergency numbers (police: 911) in your phone and stay alert to your surroundings.",
        severity: "high",
        sourceName: "SafeTravel NZ (2025)",
        sourceUrl: "https://www.safetravel.govt.nz/destinations/el-salvador"
      }
    ],
  culturalSensitivity: {
    culturalDos: [
      'Dress modestly and avoid flashy clothing.',
      'Greet people with a polite "buenos días" or "buenas tardes."',
      'Show respect for elders and authority figures.',
      'Ask permission before taking photos of people.',
      'Learn and use basic Spanish phrases.'
    ],
    culturalDonts: [
      "Don't display wealth or use your phone openly in public.",
      "Don't discuss politics or criticize the government.",
      "Don't refuse hospitality—decline politely if needed.",
      "Don't enter churches in revealing clothing.",
      "Don't take photos of police, military, or government buildings."
    ]
  },
  womensConfidenceScore: {
      score: 41.4,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 65,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 45,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 55,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 60,
        source: '',
        sourceUrl: ''
      }
    ],
  legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy San Salvador',
          address: 'Final Boulevard Santa Elena, Antiguo Cuscatlán, La Libertad',
          phone: '+503 2501-2999',
          link: 'https://sv.usembassy.gov/'
        },
        {
          name: 'British Embassy San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://www.gov.uk/world/organisations/british-embassy-san-salvador'
        },
        {
          name: 'Embassy of Germany in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://sv.diplo.de/'
        },
        {
          name: 'Embassy of France in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://sv.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://www.exteriores.gob.es/embajadas/san-salvador'
        },
        {
          name: 'Australian Embassy San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://sv.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://www.canadainternational.gc.ca/sv-el-salvador/'
        },
        {
          name: 'Embassy of the Netherlands in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/el-salvador'
        },
        {
          name: 'Embassy of Denmark in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://sv.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://www.eda.admin.ch/san-salvador'
        },
        {
          name: 'Embassy of India in San-salvador',
          address: 'Boulevard Santa Elena, Antiguo Cuscatlán, San Salvador',
          phone: '+503 2501 2999',
          link: 'https://www.indianembassysv.gov.in/'
        }
      ],
      womensRights: [
        'Legal framework for women\'s rights varies by country',
        'Contact local embassy for specific information',
        'International women\'s rights organizations available'
      ],
      legalSupport: [
        'Contact local embassy for legal assistance',
        'International legal aid organizations available',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately at 911',
        'Contact US Embassy for consular assistance: +503 2501-2999',
        'Document all incidents with photos and details',
        'Keep copies of all police reports for insurance/legal purposes',
        'Women can request female police officers when reporting incidents'
      ]
    },
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: [
        'Public markets and commercial areas',
        'Public transportation (buses, metro)',
        'Walking alone in urban areas',
        'Tourist attractions and central squares',
        'Night entertainment districts'
      ],
      reportingRate: 6,
      legalProtection: 'El Salvador has legal protections against sexual harassment under Law of Integral Life for Women Free of Violence (2011). Penalties increased under recent reforms, but enforcement remains inconsistent.',
      supportResources: [
        'ISDEMU (Instituto Salvadoreño para el Desarrollo de la Mujer): 911',
        'Women\'s Crisis Hotline: 126 (24/7)',
        'CEMUJER (Centro de Estudios de la Mujer): +503 2221-9844',
        'US Embassy Citizen Services: +503 2501-2999',
        'Women\'s Police Stations available in major cities'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Nacional Rosales',
          address: '25 Av Norte, San Salvador',
          phone: '+503 2231-9200',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma'],
          link: 'https://www.hospitalrosales.gob.sv/'
        },
        {
          name: 'Hospital de Diagnóstico',
          address: '99 Av Norte, San Salvador',
          phone: '+503 2264-4422',
          emergency: true,
          specialties: ['Emergency Care', 'Gynecology', 'General Medicine'],
          link: 'https://www.hospitaldiagnostico.com/'
        },
        {
          name: 'Hospital Nacional de Maternidad',
          address: 'Boulevard Constitución, San Salvador',
          phone: '+503 2221-0044',
          emergency: true,
          specialties: ['Women\'s Health', 'Obstetrics', 'Gynecology'],
          link: 'https://www.salud.gob.sv/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia San Nicolás',
          address: 'Zona Rosa, San Salvador',
          phone: '+503 2243-5555',
          hours: '24 hours',
          emergency: true,
          link: 'https://www.sannicolas.com.sv/'
        },
        {
          name: 'Farmacia Econòmica',
          address: 'Multiple locations',
          phone: '+503 2266-8888',
          hours: '7:00-21:00',
          emergency: false,
          link: 'https://www.economica.com.sv/'
        }
      ],
      womensHealth: {
        clinics: [
          'ISBEM Women\'s Health Clinic: +503 2221-0044',
          'Hospital Nacional de Maternidad: +503 2221-0044',
          'FOSALUD Family Planning Centers: +503 2591-7000'
        ],
        gynecologists: [
          'Dr. Maria Santos - Hospital Diagnóstico: +503 2264-4422',
          'Dr. Carmen Rodriguez - Maternidad Nacional: +503 2221-0044'
        ],
        emergencyContraception: [
          'Available at major pharmacies without prescription',
          'Emergency contraception available at public health centers',
          'Plan B and similar options widely available'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'Major brands: Always, Kotex, Tampax widely available',
          'Free products available at some public health centers'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Typhoid vaccination suggested',
        'Yellow fever if traveling from affected areas',
        'COVID-19 vaccination recommended'
      ],
      healthRisks: [
        'Dengue fever during rainy season (May-October)',
        'Chikungunya and Zika virus present',
        'Water quality varies - use bottled water',
        'Air pollution in urban areas'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: ['Available in San Salvador and Santa Ana', 'Use official app only', 'Share ride details'],
          companies: ['Uber'],
          link: 'https://www.uber.com/sv/en/'
        },
        {
          type: 'Licensed Taxis',
          safety: 7.8,
          recommendations: ['Use hotel-arranged taxis', 'Ensure meter is working', 'Get receipt'],
          companies: ['Radio Taxi 21', 'Taxi Seguro'],
          link: 'https://www.radiotaxi21.com/'
        },
        {
          type: 'Private Airport Transfers',
          safety: 9.0,
          recommendations: ['Book through hotel', 'Verify driver identity', 'Pre-arranged pickup'],
          companies: ['El Salvador Transfers', 'Saca Tours'],
          link: 'https://www.elsalvadortransfers.com/'
        },
        {
          type: 'Public Buses (Daytime)',
          safety: 6.5,
          recommendations: ['Use only during daylight', 'Keep valuables secure', 'Avoid isolated stops'],
          companies: ['SITRAMSS'],
          link: 'https://www.sitramss.gob.sv/'
        }
      ],
      nightTravel: {
        safety: 5.2,
        warnings: [
          'Avoid public transport after 7 PM',
          'Use only trusted taxi services or Uber at night',
          'Stay in well-lit, populated areas',
          'Don\'t walk alone after dark, even in safe neighborhoods'
        ],
        alternatives: [
          'Hotel-arranged transportation',
          'Uber available until late night',
          'Licensed radio taxis with tracking',
          'Group travel when possible'
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
          name: 'Radio Taxi 21',
          type: 'Licensed Taxi',
          contact: '+503 2221-2121',
          safety: 7.8
        },
        {
          name: 'El Salvador Transfers',
          type: 'Private Transfer',
          contact: '+503 2250-8000',
          safety: 9.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk reception',
        'Secure electronic key access',
        'CCTV surveillance in common areas',
        'In-room safes for valuables',
        'Well-lit entrances and corridors',
        'Security guards at upscale properties'
      ],
      safeNeighborhoods: [
        'Zona Rosa',
        'Colonia Escalón',
        'San Benito',
        'Santa Tecla',
        'Antiguo Cuscatlán'
      ],
      womensOnly: [
        {
          name: 'La Zona Hostel',
          type: 'Hostel',
          features: ['Pod-style privacy', 'Safe San Benito location', '24/7 security', 'Female-friendly'],
          rating: 4.8
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.5,
          comments: 'Felt very safe as a solo female traveler. Staff was helpful and neighborhood felt secure.',
          date: '2025-01-15'
        },
        {
          rating: 4.4,
          safety: 8.2,
          comments: 'Much safer than expected. Security improvements really noticeable since 2022.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use hotel WiFi when possible',
        'Avoid public WiFi for sensitive transactions',
        'VPN recommended for banking',
        'Enable two-factor authentication',
        'Keep devices updated'
      ],
      digitalScams: [
        'Fake hotel booking websites',
        'Social media romance scams targeting tourists',
        'Phishing emails claiming to be from banks',
        'Fake charity requests via WhatsApp'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Central America',
        'ExpressVPN - good speeds',
        'ProtonVPN - free tier available'
      ],
      dataProtection: [
        'Limited data protection laws in El Salvador',
        'Avoid sharing personal information',
        'Use secure payment methods',
        'Keep document copies in cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Street Harassment',
          location: 'Central Market area',
          date: '2025-01-18',
          description: 'Catcalling and unwelcome comments reported by female travelers',
          severity: 'low'
        },
        {
          type: 'Petty Theft',
          location: 'Public bus terminals',
          date: '2025-01-12',
          description: 'Pickpocketing incidents during rush hour',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Book airport transfers in advance and avoid public transport at night',
          author: 'Solo Female Traveler',
          date: '2025-01-20',
          upvotes: 89
        },
        {
          tip: 'Stay in Zona Rosa or San Benito areas - much safer with good security',
          author: 'Travel Blogger',
          date: '2025-01-18',
          upvotes: 67
        },
        {
          tip: 'Dress conservatively to avoid unwanted attention and blend in with locals',
          author: 'Local Guide',
          date: '2025-01-15',
          upvotes: 54
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'US State Department',
      lastUpdated: 'April 2025',
      details: 'El Salvador has a Level 1 advisory - the lowest risk level. Dramatic security improvements since 2022 State of Exception. Crime rates, especially violent crime, have decreased significantly.',
      reason: 'Improved security situation with 95% reduction in homicides.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html',
      soloTravelerAdvice: [
        'San Salvador is safe for solo female travelers with proper precautions - excellent for first-time Central America solo travel',
        'Stay in safe neighborhoods: Zona Rosa, Escalón, San Benito',
        'Use Uber or hotel-arranged transport rather than public buses',
        'Exercise normal travel precautions regarding valuables and night activities',
        'Women should dress conservatively and be aware of cultural norms'
      ]
    },
    culturalDos: [
      'Dress modestly and conservatively.',
      'Learn basic Spanish phrases.',
      'Greet with polite "Buenos días/tardes."',
      'Show respect for family values.',
      'Be patient with slower pace of life.'
    ],
    culturalDonts: [
      "Don't display wealth or expensive items.",
      "Don't discuss politics or recent violence.",
      "Don't wear revealing clothing.",
      "Don't ignore local customs.",
      "Don't refuse offered hospitality rudely."
    ],
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
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
          name: 'WhatsApp',
          purpose: 'Communication with family/emergency contacts',
          rating: 4.6
        },
        {
          name: 'Google Translate',
          purpose: 'Spanish translation for emergencies',
          rating: 4.4
        },
        {
          name: 'Maps.me',
          purpose: 'Offline maps and navigation',
          rating: 4.5
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Tourist Police',
          number: '+503 2231-8000',
          type: 'Tourist Assistance'
        },
        {
          name: 'Women\'s Crisis Hotline',
          number: '126',
          type: 'Women\'s Support (24/7)'
        },
        {
          name: 'US Embassy',
          number: '+503 2501-2999',
          type: 'Consular Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$30 - $50 USD / day',
        description: 'Covers safe accommodation, meals, transport, and activities at a comfortable level for women traveling alone in San Salvador.',
        tip: 'Budget includes staying in safe neighborhoods which is essential for solo female travel safety in El Salvador.'
      },
      accommodation: [
        {
          type: 'Safe Hostel',
          avgCost: '$15-25',
          safetyNote: 'Choose hostels in Zona Rosa or San Benito with 24/7 security',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$25-40',
          safetyNote: 'Good safety in safe neighborhoods - avoid Centro budget options',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$40+',
          safetyNote: 'Excellent safety with security staff and safe locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Uber',
          cost: '$3-8/ride',
          safetyDescription: 'Safest option, especially at night.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxi',
          cost: '$5-12/ride',
          safetyDescription: 'Safe with reputable companies. Get receipt.',
          safetyLevel: 'medium'
        },
        {
          method: 'Public Bus',
          cost: '$0.25-0.50',
          safetyDescription: 'Use only during daytime. Keep valuables secure.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in secure neighborhoods during day | Avoid at night',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Spending more on safe accommodation is essential',
        'Stay in Zona Rosa or San Benito for best safety/value ratio',
        'Use Uber instead of public transport for safety',
        'Budget for airport transfers rather than public buses',
        'Safety improvements make El Salvador good value for cautious travelers'
      ]
    },
  youtubeVideo: {
    videoId: "a5AssOYJ47U"
  }
};

export default sansalvador;
