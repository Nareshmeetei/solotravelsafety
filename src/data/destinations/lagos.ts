import { Destination } from './types';

// Enhanced Safety Data for Lagos - January 2025 Update
const lagos: Destination = {
    city: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    countryCode: 'ng',
    overallScore: 2.3,
    nightSafety: 1.6,
    publicTransit: 2.0,
    walkingAlone: 1.9,
    tags: ['warning-flags', 'high-crime', 'kidnapping-risk'],
    bgColor: 'bg-red-75',
    reviewCount: 623,
    lastUpdated: '12 hours ago',
    safetySummaryForSEO: 'Is Lagos safe for women solo travelers? Lagos presents significant challenges for solo female travel safety with very low confidence scores and high harassment risks. While some women have traveled successfully to Lagos, expert sources consistently recommend extreme caution. Solo female travel safety precautions must include 24/7 hotel security, private transportation, and comprehensive emergency planning. Women traveling alone safety requires international hotel accommodation, embassy contact information, and continuous communication with trusted contacts. Solo travel safety for women beginners should consider Lagos only as a brief transit point with professional security arrangements.',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.6, 
        context: 'Extremely dangerous at night with only 18.6% nighttime safety rating (Numbeo 2025). High violent crime including armed robbery, assaults targeting foreigners, and kidnapping. Canadian and Australian governments advise high caution specifically for Lagos. Avoid any outdoor movement after dark.' 
      },
      publicTransit: { 
        score: 2.0, 
        context: 'Public transport presents severe harassment and crime risks. Street harassment "taken as the norm" with Lagos described as "misogynistic state." Frequent pickpocketing, bag snatching, and phone theft during rush hour. Crowded conditions enable sexual harassment and inappropriate touching.' 
      },
      walkingAlone: { 
        score: 1.9, 
        context: 'Walking alone strongly discouraged with Lagos ranked #7 safest in Nigeria (2.3/5 rating). High street harassment ranging from catcalling to "intense verbal assertiveness." Petty crime prevalent in crowded areas. Foreigners frequently targeted for theft and harassment.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Victoria Island',
          description: 'Upscale business district with international hotels, embassies, and corporate offices. Relatively safer with better security presence but still requires constant vigilance. Location of US Consulate General and British Deputy High Commission. Best area for accommodation but not safe for solo walking.'
        },
        {
          name: 'Ikoyi',
          description: 'Affluent residential area with upscale housing and some commercial facilities. Better security infrastructure than most Lagos areas but crime still occurs. Mainly residential with limited tourist attractions. Safer for accommodation but caution required when traveling.'
        },
        {
          name: 'Lekki (Chevron Area)',
          description: 'Modern planned development with gated communities, shopping malls, and beaches. Alpha Beach Road area considered relatively safe due to Chevron oil company presence attracting expatriates. Booming arts scene and nightlife but exercise extreme caution.'
        }
      ],
      caution: [
        'Yaba (University area with mixed safety conditions)',
        'Surulere (Densely populated with higher crime rates)',
        'Lagos Island (Historic but crowded with crime concerns)', 
        'Ikeja (Airport area with mixed safety conditions)'
      ],
      avoid: [
        'Mushin (High crime, avoid completely)',
        'Ajegunle (Dangerous slum area, extremely high crime)',
        'Oshodi (Transport hub with high crime rates)',
        'All areas after dark (extremely dangerous for women)',
        'Isolated areas even in "safer" neighborhoods'
      ]
    },
    accommodations: [
      { 
        name: 'Eko Hotels & Suites', 
        type: 'luxury hotel', 
        features: ['Victoria Island prime location', 'Armed security 24/7', 'International security standards', '24/7 concierge services', 'Multiple on-site restaurants', 'Private beach access', 'Business center', 'Spa and fitness'], 
        rating: 4.5, 
        priceRange: '$200-500/night',
        safetyLevel: 'highest',
        notes: 'Lagos\'s premier luxury hotel with highest security protocols. Located in safest part of Lagos with armed security, controlled access, and comprehensive safety measures. Essential for solo female travelers - arrange ALL transport through hotel. Known as "most preferred hotel in West Africa" with excellent reviews for safety and service.' 
      },
      { 
        name: 'Radisson Blu Hotel Lagos Ikeja', 
        type: 'international hotel', 
        features: ['5km from airport', 'International chain standards', 'Security personnel', '155 guestrooms including loft suites', 'Business facilities', 'Restaurant and bar', 'Fitness center', '24/7 room service'], 
        rating: 4.4, 
        priceRange: '$120-250/night',
        safetyLevel: 'high',
        notes: 'Ranked #1 hotel in Ikeja with excellent security. International Radisson standards with professional, friendly service. Secure location near airport with reliable transport arrangements. Highly recommended for solo female travelers needing airport proximity.' 
      },
      { 
        name: 'Radisson Hotel Lagos Ikeja', 
        type: 'international hotel', 
        features: ['Secure Ikeja location', 'Tranquil atmosphere', 'International standards', 'Professional security', 'Restaurant facilities', 'Meeting rooms', 'Airport shuttle available'], 
        rating: 4.0, 
        priceRange: '$100-200/night',
        safetyLevel: 'high',
        notes: 'Ranked #2 hotel in Ikeja. Guests consistently praise the secure location and peaceful environment. Excellent value with high safety standards for solo female travelers. Known for cleanliness and professional service.' 
      },
      { 
        name: 'Southern Sun Ikoyi', 
        type: 'international hotel', 
        features: ['Upscale Ikoyi location', 'Waterfront views', 'Security measures', 'Airport transfers available', 'Business facilities', 'Restaurant and bar', 'Fitness center'], 
        rating: 4.2, 
        priceRange: '$150-300/night',
        safetyLevel: 'high',
        notes: 'Established international hotel in relatively safer Ikoyi area. Offers structured airport transfers and comprehensive security protocols. Known for reliable service and safe environment for business travelers and tourists.' 
      },
      { 
        name: 'Federal Palace Hotel', 
        type: 'luxury hotel', 
        features: ['Victoria Island location', 'Government-grade security', 'Diplomatic clientele', 'Fine dining restaurants', 'Business center', 'Health club', '24/7 security'], 
        rating: 4.1, 
        priceRange: '$180-350/night',
        safetyLevel: 'high',
        notes: 'Historic luxury hotel popular with diplomats and government officials. High-level security appropriate for VIP guests. Safe choice for solo female travelers seeking established luxury with proven security record.' 
      },
      { 
        name: 'InterContinental Lagos', 
        type: 'luxury hotel', 
        features: ['Victoria Island prime location', 'International luxury chain', 'Executive floors available', 'Multiple dining options', 'Spa and wellness', '24/7 concierge', 'Business facilities'], 
        rating: 4.3, 
        priceRange: '$200-400/night',
        safetyLevel: 'highest',
        notes: 'International luxury chain with comprehensive security measures. Executive floors offer additional privacy and security. Ideal for solo female travelers requiring highest international standards with proven safety protocols.' 
      },
      { 
        name: 'Transcorp Hilton Abuja (Alternative)', 
        type: 'luxury hotel', 
        features: ['Capital city location', 'Government district', 'International chain', 'Maximum security area', 'Multiple restaurants', 'Business facilities'], 
        rating: 4.4, 
        priceRange: '$150-300/night',
        safetyLevel: 'highest',
        notes: 'Consider Abuja instead of Lagos for significantly improved safety. Located in secure government district with maximum security presence. International Hilton standards with comprehensive safety measures for solo female travelers.' 
      },
      { 
        name: 'Lagos Marriott Hotel Ikeja (Opening 2025)', 
        type: 'international hotel', 
        features: ['Brand new facility', 'International Marriott standards', 'Modern security systems', 'Airport proximity', 'Business center', 'Fitness facilities'], 
        rating: 'New property', 
        priceRange: '$130-280/night',
        safetyLevel: 'high',
        notes: 'New Marriott property opening in 2025 with latest security technology and international safety standards. Will provide additional safe accommodation option for solo female travelers in Lagos area.' 
      }
    ],
    alerts: [
      { 
        title: 'High Kidnapping Risk Nationwide', 
        description: 'Canadian and Australian governments report high kidnapping threat across Nigeria including Lagos and Abuja. Foreigners including businesspeople, tourists, and aid workers seen as legitimate targets.', 
        location: 'Nationwide including Lagos', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Violent Crime Against Foreign Nationals', 
        description: 'Crime levels high in Lagos with violent crime including assaults and armed attacks committed against foreign nationals in areas they frequent. Particular targeting of expatriates and tourists.', 
        location: 'All Lagos areas', 
        reportCount: 67, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Street Harassment Epidemic', 
        description: 'Lagos described as "misogynistic state" with harassment "taken as norm." Solo female travelers report regular catcalling, verbal harassment, and unwanted attention ranging from comments to intense verbal assertiveness.', 
        location: 'Citywide, especially markets and transport areas', 
        reportCount: 134, 
        severity: 'high', 
        dateReported: '3 days ago' 
      },
      { 
        title: 'Petty Crime Surge During Rush Hours', 
        description: 'Pickpocketing, bag snatching, and phone theft prevalent during traffic rush hours and in crowded areas. Organized gangs targeting pedestrians and vehicle occupants.', 
        location: 'Transport hubs, markets, crowded areas', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '1 week ago' 
      }
    ],
    safetyTips: {
      clothing: [
        'Dress extremely conservatively - cover shoulders, arms, and legs completely at all times',
        'Choose loose-fitting, non-form-fitting clothing in neutral colors (black, navy, brown)',
        'Remove ALL jewelry including wedding rings, watches, and small earrings before leaving hotel',
        'Avoid designer brands, logos, or anything that indicates wealth or foreign status',
        'Wear closed-toe shoes only - sandals or open shoes attract unwanted attention',
        'Carry a modest head covering for entering religious sites or conservative areas',
        'Never wear shorts, tank tops, or revealing clothing even in hotel common areas',
        'Blend in with local conservative dress - observe what local women wear and follow suit',
        'Keep expensive items like smartphones hidden - use a basic phone for public use',
        'Pack a lightweight scarf to cover exposed skin when additional modesty is needed'
      ],
      firstTimers: [
        'Book ONLY international chain hotels in Victoria Island with 24/7 armed security',
        'Arrange private security driver through hotel concierge for ALL movements outside hotel',
        'Never leave your hotel room alone - always travel with hotel security escort',
        'Consider Lagos only as a brief transit point - limit stay to absolute minimum',
        'Download critical safety apps (bSafe, Noonlight, Life360) before departure from home',
        'Register with your embassy immediately upon arrival for emergency assistance',
        'Bring sufficient US dollars for entire stay to avoid multiple currency exchanges',
        'Establish check-in schedule with family/friends every 2-3 hours while in Lagos',
        'Keep embassy emergency number and WARIF crisis hotline (+234 810 027 3171) programmed',
        'Have comprehensive travel insurance with emergency medical evacuation coverage'
      ],
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Uber Lagos',
        'OPay',
        'Google Translate'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for high-risk destinations like Lagos', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with panic button and GPS tracking critical in Lagos', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response crucial for solo women in Nigeria', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely essential for safety in Lagos', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Nigeria safety warnings', rating: 4.0 },
        { name: 'Uber Lagos', link: 'https://www.uber.com/ng/', description: 'Safest transport option in Lagos with driver verification and GPS tracking', rating: 4.2 },
        { name: 'OPay', link: 'https://opayweb.com/', description: 'Nigerian ride-hailing and mobile payment app - local alternative to Uber', rating: 4.0 },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for Yoruba communication and emergency situations', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Egba mi!',
          localLanguage: 'Yoruba',
          pronunciation: 'EG-ba mee',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Egba%20mi',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Egba%20mi',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Egba%20mi&client=tw-ob'
          ],
          phonetic: 'Egba mi!',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Pe awon ọlọpa!',
          localLanguage: 'Yoruba',
          pronunciation: 'pay AH-won oh-LO-pa',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Pe%20awon%20olopa',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Pe%20awon%20olopa',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Pe%20awon%20olopa&client=tw-ob'
          ],
          phonetic: 'Pe awon ọlọpa!',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Mo nilo dọkita.',
          localLanguage: 'Yoruba',
          pronunciation: 'moh NEE-loh DOH-kee-ta',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20nilo%20dokita',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20nilo%20dokita',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Mo%20nilo%20dokita&client=tw-ob'
          ],
          phonetic: 'Mo nilo dọkita.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Nibo ni ile-iwosan ti o sunmo julọ wa?',
          localLanguage: 'Yoruba',
          pronunciation: 'NEE-boh nee EE-lay ee-WOH-san tee oh SHOON-moh joo-LOH wa',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Nibo%20ni%20ile%20iwosan%20ti%20o%20sunmo%20julọ%20wa',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Nibo%20ni%20ile%20iwosan%20ti%20o%20sunmo%20julọ%20wa',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Nibo%20ni%20ile%20iwosan%20ti%20o%20sunmo%20julọ%20wa&client=tw-ob'
          ],
          phonetic: 'Nibo ni ile-iwosan ti o sunmo julọ wa?',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Mo ti sọnu.',
          localLanguage: 'Yoruba',
          pronunciation: 'moh tee SHOH-noo',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20ti%20sonu',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20ti%20sonu',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Mo%20ti%20sonu&client=tw-ob'
          ],
          phonetic: 'Mo ti sọnu.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Jọwọ fi mi silẹ.',
          localLanguage: 'Yoruba',
          pronunciation: 'joh-WOH fee mee SHEE-lay',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Jowo%20fi%20mi%20sile',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Jowo%20fi%20mi%20sile',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Jowo%20fi%20mi%20sile&client=tw-ob'
          ],
          phonetic: 'Jọwọ fi mi silẹ.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Mi o ni ailewu.',
          localLanguage: 'Yoruba',
          pronunciation: 'mee oh nee AH-ee-lay-woo',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mi%20o%20ni%20ailewu',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mi%20o%20ni%20ailewu',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Mi%20o%20ni%20ailewu&client=tw-ob'
          ],
          phonetic: 'Mi o ni ailewu.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Ṣe o le ran mi lọwọ?',
          localLanguage: 'Yoruba',
          pronunciation: 'shay oh lay ran mee LOH-woh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Se%20o%20le%20ran%20mi%20lowo',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Se%20o%20le%20ran%20mi%20lowo',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Se%20o%20le%20ran%20mi%20lowo&client=tw-ob'
          ],
          phonetic: 'Ṣe o le ran mi lọwọ?',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['yo-NG', 'ig-NG', 'ha-NG'],
        instructions: 'Click the speaker icon to hear authentic Nigerian pronunciation. Features female voice with local accent for better communication.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: 'Extremely conservative dress required. Cover shoulders, arms, and legs completely. Avoid any form-fitting clothing. Religious and cultural modesty essential.',
      behaviorNorms: ['Never travel alone anywhere', 'Avoid eye contact with men', 'Be extremely wary of anyone offering help', 'Do not discuss politics, religion, or social issues', 'Always have hotel security escort'],
      perception: 'Solo female travelers extremely rare and attract significant unwanted attention. Conservative society with high rates of harassment toward unaccompanied women. Foreign women seen as targets for various crimes.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '112', fire: '119', medical: '199', general: '112'
    },
    currency: {
      name: 'Nigerian Naira', 
      code: 'NGN', 
      exchangeRate: {
        usd: 0.0007,
        eur: 0.0006,
        gbp: 0.0005
      }, 
      scamWarnings: ['ATM scams targeting foreign travelers', 'Currency exchange fraud', 'Fake police extortion', 'Pickpocketing during transactions'],
      exchangeTips: [
        'Nigeria operates as cash-based economy - bring US dollars for exchange',
        'Exchange currency only at international hotels or verified bank branches', 
        'Avoid street money changers and unofficial exchange points',
        'Never use credit/debit cards due to high fraud potential',
        'Keep exchange receipts for departure requirements',
        'Solo female travelers should have hotel security present during exchanges',
        'Avoid displaying large amounts of cash publicly after exchanges',
        'Consider bringing sufficient cash for entire Lagos stay to minimize exchanges'
      ]
    },
    scamWarnings: [
      { 
        title: 'Street Harassment Escalation', 
        description: 'Harassment often escalates from verbal to physical intimidation and potential assault. Lagos described as having harassment "taken as the norm" with limited legal recourse for victims.', 
        severity: 'high' 
      },
      { 
        title: 'Express Kidnapping and Ransom', 
        description: 'High kidnapping risk targeting foreigners including tourists. Kidnappers demand ransom and may hold victims for extended periods. Businesspeople and aid workers frequently targeted.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police Extortion', 
        description: 'Criminals impersonating police officers to extort money or commit robbery/assault. Always demand proper identification and insist on going to police station.', 
        severity: 'high' 
      },
      { 
        title: 'Phone and Valuables Snatching', 
        description: 'Organized gangs targeting mobile phones, bags, and valuables especially during traffic and in crowded areas. Motorcycle thieves common during rush hour.', 
        severity: 'high' 
      },
      { 
        title: 'ATM and Card Fraud - Critical Prevention Required', 
        description: 'Sophisticated ATM scams targeting foreign visitors. Criminals offer help to distract you while stealing card details or cash. Card skimming devices widespread at non-bank ATMs. Groups follow victims after withdrawals. ONLY use ATMs inside major bank branches with armed security. Avoid credit/debit cards entirely - Nigeria is cash-based. Bring US dollars for exchange.', 
        severity: 'high' 
      },
      { 
        title: 'Internet and Advance Fee Fraud', 
        description: 'Lagos known as center for "419 scams" and internet fraud. Avoid any financial transactions or "business opportunities" presented by locals.', 
        severity: 'medium' 
      }
    ],
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
    daytimeSafetyPercent: 49.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    nighttimeSafetyPercent: 18.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lagos',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2025, UK Gov 2025
      { label: 'Scams (ATM, Fake Police, Internet Fraud)', frequency: 'Most common', icon: 'Shield' }, // Numbeo 2025, UK Gov 2025
      { label: 'Car Theft & Carjacking', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2025
    ],
    usefulTips: [
      "Never use ATMs alone - always have hotel security present for all financial transactions",
      "Avoid credit/debit cards entirely - Nigeria operates as cash-based economy with high fraud rates",
      "Bring US dollars for currency exchange at international hotels only, never street exchanges",
      "NEVER travel anywhere alone - arrange hotel security escort for ALL movements outside hotel",
      "Use only hotel-arranged private drivers with verified credentials and accountability",
      "Book ONLY international hotels in Victoria Island with 24/7 armed security presence",
      "Dress extremely conservatively covering arms, legs, shoulders - avoid all jewelry and valuables",
      "Download critical safety apps: NomadHer, bSafe, Noonlight, Life360 before arrival",
      "Keep emergency contacts programmed: WARIF +234 810 027 3171, Embassy numbers, Hotel security",
      "Maintain constant communication with family/friends every 2-3 hours during Lagos stay",
      "Never walk alone in any area including hotel corridors - harassment normalized in Lagos",
      "Report any incidents immediately to embassy and WARIF crisis hotline for support",
      "Consider Lagos only as brief transit point - minimize time in city for safety",
      "Have emergency evacuation plan and funds readily available for immediate departure",
      "Connect with verified female travelers through NomadHer app for current safety insights",
      "Avoid public transport completely - high harassment and crime rates documented by government sources"
    ], // Tips sourced from UK Government Travel Advice (2025)
    culturalDos: [
      'Dress modestly, covering shoulders and knees.',
      'Greet elders and locals respectfully.',
      'Ask before taking photos of people.',
      'Use your right hand for eating and giving.',
      'Respect local customs and religious practices.'
    ],
    culturalDonts: [
      "Don't show affection in public.",
      "Don't criticize religion or local traditions.",
      "Don't enter mosques or churches without permission.",
      "Don't wear revealing or tight clothing.",
      "Don't discuss sensitive political topics."
    ],
    womensConfidenceScore: {
      score: 22.4, // Numbeo 2025 Safety Index for Lagos
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Lagos"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 25,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Nightlife',
        confidence: 10,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Public Transport',
        confidence: 15,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Dining Alone',
        confidence: 20,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      }
    ],

    // Enhanced safety fields for sexual harassment and victim support
    sexualHarassmentData: {
      prevalence: 'very high',
      commonLocations: ['Public transport systems', 'Markets and trading areas', 'Streets and walkways', 'Hotel lobbies and restaurants', 'ATM areas', 'Any unaccompanied public space'],
      reportingRate: 12,
      legalProtection: 'Weak legal enforcement. Lagos described as "misogynistic state" where harassment is "taken as the norm." Police response to women\'s complaints often inadequate. Limited legal recourse for victims.',
      supportResources: [
        'Women at Risk International Foundation (WARIF): +234 810 027 3171 (24/7 crisis hotline)',
        'Women at Risk International Foundation (WARIF) Center: 6 Turton Street, Off Thorburn Avenue, Yaba, Lagos',
        'Mirabel Centre (Lagos State Sexual Assault Referral Centre): +234 806 200 0004',
        'Project Alert on Violence Against Women: +234 1 481 3300',
        'International Federation of Women Lawyers (FIDA Nigeria): +234 1 269 2307',
        'Centre for Women\'s Health and Information: +234 1 773 6930',
        'US Consulate General Lagos Emergency: +234 1 460 3400 (for US citizens)',
        'British Deputy High Commission Lagos: +234 1 277 0780 (for UK nationals)',
        'Lagos State Ministry of Women Affairs: +234 1 462 4563',
        'International Committee of the Red Cross (ICRC) Nigeria: +234 9 291 7000'
      ],
      emergencyContacts: [
        'WARIF 24/7 Crisis Hotline: +234 810 027 3171',
        'Nigeria Police Emergency: 112',
        'Lagos State Emergency Services: 199',
        'Your Embassy Emergency Number (keep readily available)',
        'Trusted hotel security: have contact information saved'
      ],
      safetyProtocol: [
        'Never travel anywhere alone - arrange hotel security escort for all movements',
        'Contact WARIF immediately for support and guidance: +234 810 027 3171',
        'Report to police only with embassy representative present',
        'Document everything with photos, witness information, medical records',
        'Contact your embassy immediately for legal and consular support',
        'Consider immediate departure if safety is compromised',
        'Seek medical attention at international-standard hospital with embassy support'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'R-Jolad Hospital',
          address: 'Lagos',
          phone: '+234 1 280 0000',
          emergency: true,
          specialties: ['Private healthcare', 'Women\'s health', 'Emergency care', '2025 Nigerian Healthcare Excellence Award winner']
        },
        {
          name: 'Duchess International Hospital',
          address: 'Ikeja, Lagos',
          phone: '+234 1 454 0000',
          emergency: true,
          specialties: ['100-bed multi-specialty', 'Emergency services', 'Women\'s health', 'International standards']
        },
        {
          name: 'Havana Specialists Hospital',
          address: 'Surulere, Lagos',
          phone: '+234 1 773 5000',
          emergency: true,
          specialties: ['24/7 emergency department', 'Obstetrics & Gynecology', 'Specialist clinics', 'Experienced physicians']
        },
        {
          name: 'Lagos University Teaching Hospital (LUTH)',
          address: 'Idi-Araba, Lagos',
          phone: '+234 1 586 3001',
          emergency: true,
          specialties: ['Public hospital', 'Emergency care', 'Teaching hospital', 'Comprehensive services']
        }
      ],
      pharmacies: [
        {
          name: 'Alpha Pharmacy',
          address: 'Multiple locations (Victoria Island, Ikoyi)',
          phone: '+234 1 270 0000',
          hours: 'Daily 8:00-22:00',
          emergency: false
        },
        {
          name: 'Emzor Pharmacy',
          address: 'Various Lagos locations',
          phone: '+234 1 492 0000',
          hours: 'Daily 8:00-20:00',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'Arctic Gynae Centre: Specialist obstetrics and gynecology center with experienced team',
          'Regal Specialist Women\'s Hospital: Dedicated gynecology and obstetrics facility',
          'Medison Specialist Women Hospital: International standard fertility and gynecology services',
          'South Shore Women\'s & Children\'s Hospital: 24-hour outstanding healthcare delivery'
        ],
        gynecologists: [
          'Multiple specialist women\'s hospitals with qualified gynecologists',
          'R-Jolad Hospital: Award-winning women\'s health services',
          'The Hospital - Fertility & Gynecology Centre: Thousands of successful treatments',
          'Havana Specialists Hospital: 24/7 obstetrics and gynecology services'
        ],
        emergencyContraception: [
          'Available at major pharmacy chains with prescription',
          'Hospital emergency departments provide reproductive health services',
          'Private specialist clinics offer confidential services',
          'Cultural and religious considerations may affect availability'
        ],
        sanitaryProducts: [
          'Available at Alpha Pharmacy and major chains in safe areas',
          'Supermarkets in Victoria Island and Ikoyi stock international brands',
          'Hotel concierge can arrange purchases for safety',
          'Avoid purchasing in markets or unsafe areas'
        ]
      },
      vaccinations: [
        'Yellow fever vaccination required for Nigeria entry',
        'Hepatitis A and Typhoid recommended',
        'Meningitis vaccination recommended during dry season',
        'Malaria prophylaxis essential - high transmission area',
        'Routine vaccinations should be current (MMR, DPT, influenza)'
      ],
      healthRisks: [
        'High crime-related injury risk - primary health concern',
        'Malaria transmission year-round - use prophylaxis and mosquito protection',
        'Water-borne illnesses - drink only bottled water',
        'Air pollution in urban areas affecting respiratory health',
        'Higher risk of violence-related injuries than infectious disease'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General Lagos',
          address: '2 Walter Carrington Crescent Victoria Island, Lagos',
          phone: '+234 1 460 3400',
          emergency: '+234 1 460 3400',
          link: 'https://ng.usembassy.gov/consulate-lagos/',
          services: 'American Citizen Services, Emergency Assistance, Consular Services'
        },
        {
          name: 'British Deputy High Commission Lagos',
          address: '11 Walter Carrington Crescent Victoria Island, Lagos',
          phone: '+234 1 277 0780',
          emergency: '+234 1 277 0780',
          link: 'https://www.gov.uk/world/organisations/british-deputy-high-commission-lagos',
          services: 'British National Services, Emergency Support, Consular Assistance'
        },
        {
          name: 'German Consulate General Lagos',
          address: '6 Anifowoshe Street Victoria Island, Lagos',
          phone: '+234 1 261 1011',
          emergency: '+234 1 261 1011',
          link: 'https://lagos.diplo.de/',
          services: 'German Citizen Services, Visa Services, Emergency Assistance'
        },
        {
          name: 'French Consulate General Lagos',
          address: '1 Oyinkan Abayomi Drive, Ikoyi Lagos',
          phone: '+234 1 261 1590',
          emergency: '+234 1 261 1590',
          link: 'https://ng.ambafrance.org/',
          services: 'French Citizen Services, Visa Services, Cultural Affairs'
        },
        {
          name: 'Spanish Embassy Nigeria (Lagos Office)',
          address: 'Plot 1261B Hakeem Balogun Street, Victoria Island Lagos',
          phone: '+234 1 461 2370',
          emergency: '+234 1 461 2370',
          link: 'https://www.exteriores.gob.es/embajadas/abuja/',
          services: 'Spanish Citizen Services, Visa Services, Trade Promotion'
        },
        {
          name: 'Australian High Commission Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 461 2780',
          emergency: '+234 9 461 2780',
          link: 'https://nigeria.embassy.gov.au/',
          services: 'Australian Citizen Services, Emergency Assistance (serves Lagos from Abuja)'
        },
        {
          name: 'Canadian High Commission Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 461 2900',
          emergency: '+234 9 461 2900',
          link: 'https://www.canadainternational.gc.ca/nigeria/',
          services: 'Canadian Citizen Services, Emergency Assistance (serves Lagos from Abuja)'
        },
        {
          name: 'Netherlands Embassy Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 461 3015',
          emergency: '+234 9 461 3015',
          link: 'https://www.nederlandwereldwijd.nl/landen/nigeria',
          services: 'Dutch Citizen Services, Trade & Economic Affairs (serves Lagos from Abuja)'
        },
        {
          name: 'Danish Embassy Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 413 4000',
          emergency: '+234 9 413 4000',
          link: 'https://nigeria.um.dk/',
          services: 'Danish Citizen Services, Development Cooperation (serves Lagos from Abuja)'
        },
        {
          name: 'Swiss Embassy Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 413 1872',
          emergency: '+234 9 413 1872',
          link: 'https://www.eda.admin.ch/abuja',
          services: 'Swiss Citizen Services, Economic Affairs (serves Lagos from Abuja)'
        },
        {
          name: 'Indian High Commission Nigeria',
          address: 'Plot 17 Kofo Abayomi Street, Victoria Island Lagos',
          phone: '+234 1 261 3940',
          emergency: '+234 1 261 3940',
          link: 'https://www.hciabuja.gov.in/',
          services: 'Indian Citizen Services, Visa Services, Trade Relations'
        }
      ],
      womensRights: [
        'Nigeria has legal protections for women but enforcement is inconsistent',
        'Gender-based violence criminalized but reporting rates low due to stigma',
        'Lagos described as "misogynistic state" with harassment normalized',
        'Women\'s rights organizations: WARIF (Women at Risk International Foundation)',
        'Legal system often fails to protect women from harassment and assault'
      ],
      legalSupport: [
        'US Consulate provides attorney referrals: +234 1 460 3400',
        'Nigerian Bar Association: Legal assistance and referrals',
        'Legal Aid Council of Nigeria: Free legal assistance for qualifying cases',
        'Embassy referrals essential for English-speaking legal support',
        'International NGOs provide legal support for assault cases'
      ],
      reportingProcedures: [
        'Call 112 for police (response quality varies significantly)',
        'Contact US Consulate immediately for serious crimes: +234 1 460 3400',
        'British nationals: +234 1 277 0780 for deputy high commission',
        'Document everything: photos, witness contacts, incident details',
        'Be aware: police response to women\'s complaints often inadequate',
        'Embassy support critical for navigating local legal system',
        'Consider contacting women\'s rights organizations for additional support',
        'Obtain multiple copies of any police reports if filed'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$7 - $15 USD / day',
        description: 'Lagos offers affordable accommodation and food but safety costs are high. Budget travelers $7-11/day with basic hotels. Mid-range $11-15/day with better security.',
        tip: 'Prioritize safety over savings - stay only in Victoria Island/Ikoyi international hotels. Budget extra for private security and transport.'
      },
      accommodation: [
        {
          type: 'International Hotels (Victoria Island)',
          avgCost: '$150-500/night',
          safetyNote: 'Essential for solo female travelers - highest security with 24/7 staff and controlled access.',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-Range Hotels (Victoria Island/Ikoyi)',
          avgCost: '$80-150/night',
          safetyNote: 'Acceptable security in safer areas but limited English-speaking staff.',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotels (Safe Areas Only)',
          avgCost: '$20-50/night',
          safetyNote: 'Very limited safe budget options. Must stay only in Victoria Island or Ikoyi.',
          safetyLevel: 'low'
        },
        {
          type: 'Hostels (Extremely Limited)',
          avgCost: '$10-20/night',
          safetyNote: 'Hostel culture minimal in Lagos. NOT recommended for solo female travelers.',
          safetyLevel: 'low'
        }
      ],
      transport: [
        {
          method: 'Hotel Arranged Private Driver',
          cost: '$50-100/day',
          safetyDescription: 'Safest option with vetted drivers and hotel accountability. Essential for all movements.',
          safetyLevel: 'medium'
        },
        {
          method: 'Uber/Bolt (with extreme caution)',
          cost: '$11-23 per ride',
          safetyDescription: 'Safer than local transport but still risks. Verify driver identity and share ride details.',
          safetyLevel: 'low'
        },
        {
          method: 'Licensed Taxi (Hotel arranged only)',
          cost: '$15-30 per ride',
          safetyDescription: 'Only use taxis arranged through international hotels. Never hail street taxis.',
          safetyLevel: 'low'
        },
        {
          method: 'Public Transport (NOT RECOMMENDED)',
          cost: '$0.25-1.00',
          safetyDescription: 'Extremely dangerous with high harassment and crime rates. AVOID completely.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Stay only in international hotels in Victoria Island - safety over savings',
        'Arrange private driver/security through hotel for all movements',
        'Eat only at hotel restaurants or verified safe establishments',
        'Avoid all street food and local markets due to safety concerns',
        'Budget extra for comprehensive travel insurance with emergency evacuation',
        'Consider Lagos only as brief transit point - minimize time in city',
        'Never leave hotel premises alone under any circumstances',
        'Book accommodation with highest security ratings and 24/7 staff',
        'Budget for emergency cash reserves for immediate departure if needed',
        'Use university guest houses only with hotel-arranged security escort'
      ]
    },

    governmentAdvisory: {
      level: 'Reconsider Travel - Level 3',
      levelNumber: 3,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Reconsider travel to Nigeria due to crime, terrorism, civil unrest, kidnapping, and maritime crime. Exercise increased caution due to wrongful detentions. Some areas have increased risk.',
      reason: 'High levels of crime throughout Nigeria, including armed robbery, kidnapping, carjacking, assault, and murder. Terrorist groups continue plotting attacks.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nigeria-travel-advisory.html',
      soloTravelerAdvice: [
        'Solo female travel to Lagos requires extreme caution and professional security arrangements',
        'Book only international hotels with 24/7 armed security in Victoria Island',
        'Arrange private security escort through hotel for ALL movements outside accommodation',
        'Register with embassy immediately upon arrival and maintain regular contact',
        'Consider Lagos only as brief transit point - minimize time in city',
        'Have comprehensive evacuation insurance and emergency departure funds available',
        'Never travel anywhere alone - harassment and assault risks are very high',
        'Maintain constant communication with trusted contacts every 2-3 hours'
      ],
      additionalConsiderations: [
        'Kidnapping risk: Foreign nationals specifically targeted throughout Nigeria',
        'Terrorism threat: Active terrorist groups operate in Nigeria with attacks on civilians',
        'Civil unrest: Demonstrations and strikes can occur with little warning',
        'Healthcare limitations: Medical facilities may not meet international standards',
        'Communication disruptions: Internet and phone services may be unreliable',
        'Banking issues: Credit cards not widely accepted, cash-based economy predominates'
      ],
      embassyContact: {
        name: 'U.S. Consulate General Lagos',
        phone: '+234 1 460 3400',
        emergency: '+234 1 460 3400',
        address: '2 Walter Carrington Crescent, Victoria Island, Lagos'
      }
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default lagos;
