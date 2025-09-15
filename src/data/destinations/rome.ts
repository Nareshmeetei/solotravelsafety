import { Destination } from './types';

const rome: Destination = {
    city: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    countryCode: 'it',
    overallScore: 4.0,
    nightSafety: 3.1,
    publicTransit: 2.8,
    walkingAlone: 3.4,
    tags: ['pickpocketing-hotspot', 'sexual-harassment', 'tourist-scams', 'metro-crime'],
    bgColor: 'bg-orange-75',
    reviewCount: 1247,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 3.1,
        context: 'MODERATE RISK: Rome\'s nighttime safety rating drops to 45.24/100 (Numbeo 2025). For solo female travelers wondering "is Rome safe for women traveling alone," nighttime requires extra caution. While generally safer than many major cities, women face increased harassment risk after dark, especially around nightlife areas and train stations. Street harassment in form of "Ciao bella!" catcalls is common. Isolated incidents of groping reported on public transport. Avoid walking alone in less touristy areas after 10 PM. Tourist areas well-lit but remain vigilant around Termini Station at night.'
      },
      publicTransit: {
        score: 2.8,
        context: 'HIGH RISK: Italian Ministry interior statistics show harassment incidents increased to 19,538 in 2023. Rome metro and infamous Bus 64 are major pickpocketing hotspots requiring dedicated Polmetro police task force in 2024. Sexual harassment common with groping incidents reported regularly. Women rate public transport safety as only 3.4/5. Crowded conditions enable both theft and inappropriate touching. Use extreme caution during rush hours and avoid isolated metro cars at night.'
      },
      walkingAlone: {
        score: 3.4,
        context: 'MODERATE RISK: Rome ranks 71st globally for safety with crime index 51.02%. Daytime walking generally safe in tourist areas but women report moderate harassment risk (2.6/5 rating). Street harassment including catcalls very common throughout city. Pickpocketing endemic around Colosseum, Trevi Fountain, Vatican. Women feel relatively safe during day (73.64% safety rating) but must remain constantly alert for theft and scams targeting tourists.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Vatican City',
          description: 'Papal state with excellent security, Swiss Guard presence, and strict dress codes enforced. Generally safest area in Rome with minimal crime due to religious significance and heavy security. Tourist police patrol regularly and emergency response is immediate. Women report feeling very safe here day and night.'
        },
        {
          name: 'Prati',
          description: 'Located near the Vatican, this is one of the safest and cleanest neighborhoods in Rome. Residential area with elegant buildings, excellent restaurants, and minimal crime. Well-lit streets and good police presence. Popular with local families and considered ideal for solo female travelers.'
        },
        {
          name: 'Monti',
          description: 'A favorite neighborhood in the historic center, great for solo exploration. Hip area near Colosseum with excellent restaurants, boutique shops, and vibrant cultural scene. Well-patrolled and generally very safe, though pickpockets can target visitors walking to/from major attractions.'
        },
        {
          name: 'Trastevere (main areas)',
          description: 'Charming neighborhood with good evening foot traffic and restaurant activity. Popular with travelers for its charm and walkability. Can get lively at night but serious crime rare. Cobblestone streets well-lit in main areas. Stay on main streets after dark.'
        },
        {
          name: 'Spanish Steps Area',
          description: 'Upscale shopping district with good police presence and security from luxury stores. High foot traffic during day and well-maintained streets. Tourist police patrol regularly due to high-value commercial activity. One of the safest areas for evening dining and shopping.'
        },
        {
          name: 'Centro Storico',
          description: 'Historic center with major attractions like Pantheon and Piazza Navona. Draws massive crowds enabling pickpockets but has excellent tourist police presence. Well-lit and generally safe, but requires constant vigilance due to heavy tourist traffic.'
        }
      ],
      caution: [
        'Campo de\' Fiori: Market area with active nightlife but can get rowdy late at night. Pickpockets common during market hours and harassment incidents reported in bars. Good police presence but avoid isolated areas after midnight.',
        'Testaccio: Authentic neighborhood with great food scene but less tourist infrastructure. Generally safe but fewer police and less English spoken. Better during day than night for solo travelers.',
        'Termini Station surroundings (day): While a major transit hub, pickpocketing is extremely common here. If staying near Termini, book well-reviewed hotels rather than cheapest options. Stay extra alert with belongings.',
        'Trastevere (late night): Can become rowdy with drunk tourists late at night. Some harassment incidents reported in quieter side streets after midnight. Stick to main areas with good lighting.'
      ],
      avoid: [
        'Termini Station surroundings at night: High crime area with drug activity, aggressive panhandlers, and frequent theft. Multiple safety warnings from local police. Not recommended for solo female travelers after 10 PM.',
        'Esquilino district: Particularly around Via Giolitti and adjacent streets where petty crime and harassment more common, especially after dark. Higher crime rates compared to central areas.',
        'San Basilio: Outer district with higher crime rates and less security. Not tourist-friendly and not recommended for visitors.',
        'Corviale: Suburban area with social housing and higher crime rates. Avoid for safety reasons.',
        'Tor Bella Monaca: Peripheral area with significant crime issues and drug activity. Stay away entirely.',
        'Isolated areas of Villa Borghese at night: Large park that can be unsafe after dark in quieter sections.'
      ]
    },
    accommodations: [
      {
        name: 'The Beehive',
        type: 'hostel',
        features: ['Female-only dorms', 'Near Termini but safe area', 'Organized events', 'Signature aperitivos'],
        rating: 9.1,
        notes: 'Best hostel for female solo travelers, couples, and older travelers. Helps connect with fellow travelers and excellent safety record.',
        link: 'https://the-beehive.com/'
      },
      {
        name: 'The RomeHello Hostel',
        type: 'hostel',
        features: ['Women-only dorms', 'Near Piazza Barberini', 'Free WiFi', 'On-site bar', 'Private bathrooms'],
        rating: 8.7,
        notes: 'Highly rated for female solo travelers with excellent location and security measures.',
        link: 'https://www.theromehello.com/'
      },
      {
        name: 'Ostello Bello Roma Colosseo',
        type: 'hostel',
        features: ['Female dorms', 'Social atmosphere', 'Near Colosseum', 'Community events'],
        rating: 8.9,
        notes: 'Perfect for solo travelers eager to meet new friends. More than accommodation - it\'s an experience.',
        link: 'https://www.ostellobello.com/'
      },
      {
        name: 'MEININGER Roma Termini',
        type: 'hostel',
        features: ['Female-only rooms', 'Modern facilities', 'Central location', 'High security'],
        rating: 8.5,
        notes: 'Recommended for couples and solo travelers with modern amenities and safety features.',
        link: 'https://www.meininger-hotels.com/'
      },
      {
        name: 'JO&JOE Roma',
        type: 'hostel',
        features: ['Female dorms', 'Digital nomad friendly', 'Co-working spaces', 'Rooftop terrace'],
        rating: 8.3,
        notes: 'Good for digital nomads and solo travelers with excellent facilities and networking opportunities.',
        link: 'https://www.joandjoe.com/'
      },
      {
        name: 'Hotel Artemide',
        type: 'hotel',
        features: ['24-hour front desk security', 'Female-only floors available', 'Rooftop terrace', 'Central location'],
        rating: 8.6,
        notes: 'Upscale hotel with excellent security measures and female-friendly policies. Staff trained in solo female traveler safety.',
        link: 'https://www.hotelartemide.it/'
      }
    ],
    alerts: [
      {
        title: 'Pickpocketing Epidemic on Public Transport',
        description: 'Italian government established special Polmetro police task force in 2024 to combat organized pickpocket gangs on Rome metro. Incidents particularly high on Metro Line A and Bus 64. Multiple theft techniques including distraction, crowding, and fake accidents.',
        location: 'Metro stations, Bus 64, Termini Station',
        reportCount: 156,
        severity: 'high',
        dateReported: '2024-12-15'
      },
      {
        title: 'GHB "Date Rape Drug" Incidents in Bars/Clubs',
        description: 'Increasing reports of drink spiking with GHB in Rome nightlife areas. Police report incrementally rising possession charges. Mainly targets female tourists in popular bar districts.',
        location: 'Trastevere bars, Campo de\' Fiori nightlife, Centro Storico clubs',
        reportCount: 23,
        severity: 'high',
        dateReported: '2024-11-28'
      },
      {
        title: 'Street Harassment Campaign by Local Groups',
        description: 'Women\'s rights organizations report persistent street harassment ("Ciao bella" catcalls) affecting tourist experience. While mostly non-violent, some incidents escalate to unwanted following and aggressive attention.',
        location: 'Tourist areas, main shopping streets, evening entertainment districts',
        reportCount: 89,
        severity: 'medium',
        dateReported: '2024-10-12'
      }
    ],
    safetyTips: {
      clothing: `• Dress modestly when visiting churches (covered shoulders/knees required)
• Italians dress well - avoid overly casual tourist clothing which marks you as target
• Comfortable walking shoes essential for cobblestones and uneven streets
• Avoid flashy jewelry and designer bags that attract thieves
• Keep bags zipped and carry crossbody style to prevent pickpocketing
• Wear layers as Rome weather can change throughout the day`,
      firstTimers: `• Rome has Italy's 2nd highest crime rate - extra vigilance essential for women solo travelers
• Carry only copies of documents, keep valuables in hotel safe at all times
• Learn basic Italian phrases - locals appreciate effort and more likely to help
• Book skip-the-line tickets to avoid crowds where pickpockets operate
• Validate all public transport tickets immediately to avoid hefty fines
• Stay in central, well-lit areas - Prati, Monti, or Trastevere are safest
• Use official taxi stands or ride-hailing apps, never street taxis
• Trust your instincts - if situation feels unsafe, leave immediately
• Keep emergency numbers saved and share location with someone back home`,
      apps: [
        'GeoSure',
        'bSafe',
        'NomadHer',
        '112 Where Are U',
        'Citymapper',
        'WeTap',
        'FREE NOW',
        'Rick Steves Audio Europe'
      ],
      appLinks: [
        { name: 'GeoSure', link: 'https://www.geosure.com/', description: 'Women-specific safety ratings for Rome neighborhoods with real-time risk assessment', rating: 4.8 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with SOS alerts and live location tracking for emergency contacts', rating: 4.5 },
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only verified travel community for meeting other women travelers safely in Rome', rating: 4.8 },
        { name: '112 Where Are U', link: 'https://ec.europa.eu/digital-building-blocks/wikis/display/DIGITAL/112+Where+Are+U', description: 'Official Italian emergency app - instantly contact services and share location', rating: 4.6 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best Rome navigation app with metro, bus routes and real-time safety features', rating: 4.7 },
        { name: 'WeTap', link: 'https://www.wetap.org/', description: 'Find Rome\'s 2,500+ free water fountains - stay hydrated and save money', rating: 4.5 },
        { name: 'FREE NOW', link: 'https://free-now.com/', description: 'Most popular taxi app in Rome with verified drivers and digital payments', rating: 4.6 },
        { name: 'Rick Steves Audio Europe', link: 'https://www.ricksteves.com/audio-europe', description: 'Self-guided audio tours for Vatican, Forum, and major Rome attractions', rating: 5.0 }
      ],
      emergencyPhrases: [
        {
          english: 'Help me!',
          local: 'Aiutami!',
          localLanguage: 'Italian',
          pronunciation: 'ah-YOO-tah-mee',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Aiutami',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Aiutami',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Aiutami&client=tw-ob'
          ],
          phonetic: 'Aiutami!',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Chiamate la polizia!',
          localLanguage: 'Italian',
          pronunciation: 'kee-ah-MAH-teh lah po-lee-TSEE-ah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Chiamate%20la%20polizia',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Chiamate%20la%20polizia',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Chiamate%20la%20polizia&client=tw-ob'
          ],
          phonetic: 'Chiamate la polizia!',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'I need a doctor',
          local: 'Ho bisogno di un dottore',
          localLanguage: 'Italian',
          pronunciation: 'oh bee-ZOHN-yo dee oon dot-TOH-reh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Ho%20bisogno%20di%20un%20dottore',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Ho%20bisogno%20di%20un%20dottore',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Ho%20bisogno%20di%20un%20dottore&client=tw-ob'
          ],
          phonetic: 'Ho bisogno di un dottore',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'Leave me alone!',
          local: 'Lasciami in pace!',
          localLanguage: 'Italian',
          pronunciation: 'lah-SHAH-mee een PAH-cheh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Lasciami%20in%20pace',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Lasciami%20in%20pace',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Lasciami%20in%20pace&client=tw-ob'
          ],
          phonetic: 'Lasciami in pace!',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'Where is the nearest police station?',
          local: 'Dove si trova la questura più vicina?',
          localLanguage: 'Italian',
          pronunciation: 'DOH-veh see TROH-vah lah kwe-STOO-rah pee-OO vee-CHEE-nah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Dove%20si%20trova%20la%20questura%20più%20vicina',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Dove%20si%20trova%20la%20questura%20più%20vicina',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Dove%20si%20trova%20la%20questura%20più%20vicina&client=tw-ob'
          ],
          phonetic: 'Dove si trova la questura più vicina?',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Mi sono persa.',
          localLanguage: 'Italian',
          pronunciation: 'mee SO-no PAIR-sa',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Mi%20sono%20persa',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Mi%20sono%20persa',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Mi%20sono%20persa&client=tw-ob'
          ],
          phonetic: 'Mi sono persa.',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Mi sento in pericolo.',
          localLanguage: 'Italian',
          pronunciation: 'mee SEN-to een peh-REE-ko-lo',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Mi%20sento%20in%20pericolo',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Mi%20sento%20in%20pericolo',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Mi%20sento%20in%20pericolo&client=tw-ob'
          ],
          phonetic: 'Mi sento in pericolo.',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Puoi aiutarmi?',
          localLanguage: 'Italian',
          pronunciation: 'poo-OY ah-you-TAR-mee',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Puoi%20aiutarmi',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=it-IT-ElsaNeural&text=Puoi%20aiutarmi',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=it&q=Puoi%20aiutarmi&client=tw-ob'
          ],
          phonetic: 'Puoi aiutarmi?',
          voiceInfo: {
            voiceName: 'it-IT-ElsaNeural',
            gender: 'Female',
            displayName: 'Elsa (Italian Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['it-IT'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: 'Italians dress elegantly - avoid shorts/flip-flops outside beach areas. Churches require covered shoulders/knees (bring shawl). Designer clothes common but not required. Avoid overly revealing clothing which attracts unwanted attention.',
      behaviorNorms: [
        'Greet with "Buongiorno" (morning) or "Buonasera" (evening)',
        'Italians speak expressively with hands - normal communication style',
        'Coffee culture strict - cappuccino only until 11 AM, espresso after meals',
        'Late dining (8-10 PM) and extended meal times are cultural norms',
        'Tipping 5-10% customary but not mandatory in restaurants',
        'Personal space smaller than Northern European/American standards',
        'Loud conversation normal - not considered rude behavior'
      ],
      perception: 'Italian men may be more forward in romantic interest compared to other cultures. "Ciao bella" catcalls very common but usually harmless. Ignore and continue walking. Most interactions respectful but persistent attention possible. Solo female travelers may receive more attention than desired, but Rome is generally safe for women traveling alone.',
      context: 'Rome combines ancient history with modern Italian culture. Romans are passionate about food, family, and football. The city has a relaxed Mediterranean pace, especially during afternoon siesta hours (2-4 PM). Understanding local customs helps solo female travelers navigate social interactions confidently.'
    },
    bestTimeToVisit: {
      overall: 'April-May and September-October (Shoulder Seasons)',
      weather: 'Rome has a Mediterranean climate with hot summers and mild winters. Spring (Mar-May) and autumn (Sep-Nov) offer pleasant temperatures 15-25°C. Summer (Jun-Aug) can be scorching 30-35°C with high humidity. Winter (Dec-Feb) is mild 8-15°C but can be rainy.',
      safety: 'Shoulder seasons provide optimal safety conditions with fewer crowds reducing pickpocketing opportunities. Summer brings peak tourist crowds creating more crime opportunities. Winter has fewer tourists but shorter daylight hours.',
      costs: 'Peak summer (Jun-Aug) and Christmas/Easter periods have highest accommodation prices. Shoulder seasons offer 30-40% savings on hotels. January-February are cheapest but many attractions have reduced hours.',
      crowding: 'Summer brings overwhelming crowds at major attractions. April-May and September-October offer manageable crowds with pleasant weather. Winter has minimal crowds but some seasonal closures.',
      safestMonths: ['April', 'May', 'September', 'October'],
      events: 'AVOID: Easter week - extreme crowds and pickpocketing, August - hottest month with locals on vacation, Christmas/New Year - crowded and expensive. BEST: Late April-early June, September-early November for ideal conditions.',
      monthlyBreakdown: {
        january: { weather: 'Cool, occasional rain (8-13°C)', safety: 'High', crowds: 'Low', notes: 'Cheapest time, some closures, short daylight' },
        february: { weather: 'Cool, some rain (9-15°C)', safety: 'High', crowds: 'Low', notes: 'Good value, fewer tourists, mild weather improving' },
        march: { weather: 'Mild, spring begins (11-18°C)', safety: 'High', crowds: 'Medium', notes: 'Weather improves, Easter crowds possible late month' },
        april: { weather: 'Pleasant, warm (13-21°C)', safety: 'High', crowds: 'Medium-High', notes: 'Ideal weather begins, manageable crowds early month' },
        may: { weather: 'Warm, sunny (17-26°C)', safety: 'High', crowds: 'High', notes: 'Perfect weather, busy but not overwhelming' },
        june: { weather: 'Hot, dry (21-30°C)', safety: 'Medium', crowds: 'Very High', notes: 'Summer crowds arrive, getting very hot' },
        july: { weather: 'Very hot (24-33°C)', safety: 'Medium', crowds: 'Extreme', notes: 'Peak summer heat and crowds, pickpocketing high' },
        august: { weather: 'Scorching hot (24-35°C)', safety: 'Low', crowds: 'High', notes: 'Hottest month, many locals away, tourist-focused crime' },
        september: { weather: 'Warm, comfortable (20-28°C)', safety: 'High', crowds: 'High', notes: 'Excellent weather returns, crowds manageable' },
        october: { weather: 'Mild, pleasant (15-23°C)', safety: 'High', crowds: 'Medium', notes: 'Perfect conditions, fewer crowds than summer' },
        november: { weather: 'Cool, some rain (11-18°C)', safety: 'High', crowds: 'Low-Medium', notes: 'Quieter season, occasional rain, good value' },
        december: { weather: 'Cool, rainy periods (8-14°C)', safety: 'Medium-High', crowds: 'Medium-High', notes: 'Christmas crowds and higher prices' }
      }
    },
    emergencyInfo: {
      police: '113',
      fire: '115',
      medical: '118',
      general: '112 (European emergency number)'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.05,
        eur: 1.00,
        gbp: 0.85
      },
      exchangeTips: [
        'Use bank ATMs (called "bancomat" in Italy) attached to banks for best rates and security',
        'ATMs inside bank vestibules are safest - avoid outdoor street ATMs completely',
        'Italian banks don\'t charge ATM withdrawal fees, but your home bank may charge 2-3% foreign transaction fees',
        'Avoid currency exchange kiosks at airports, ports, and tourist areas - rates are exorbitant (5-12% markup)',
        'Never use Euronet ATMs or fake ATMs near tourist sites - they have inflated fees',
        'Notify your bank before traveling to avoid fraud alerts blocking your cards',
        'Many Roman restaurants and shops still prefer cash, especially smaller establishments',
        'Withdraw larger amounts less frequently to minimize foreign transaction fees',
        'Keep receipts from ATM withdrawals for expense tracking and potential disputes'
      ],
      scamWarnings: [
        'ATM skimming devices at tourist area machines',
        'Fake police asking for wallet/documents inspection',
        'Overcharging at restaurants near major attractions',
        'Street vendors selling fake designer goods at inflated prices'
      ],
      bestExchangeLocations: [
        'Bank branches (best rates)',
        'Post offices (Poste Italiane)',
        'Avoid exchange bureaus near tourist sites'
      ],
      tippingCulture: [
        'Round up bills at cafes and casual restaurants',
        '5-10% at upscale restaurants if service charge not included',
        'Taxi drivers: round to nearest euro',
        'Hotel staff: €1-2 per service'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Petition Scam',
        description: 'Groups approach with clipboards asking you to sign petitions (often for deaf/disabled). While you read/sign, accomplices pickpocket you. Very common near Colosseum, Trevi Fountain.',
        severity: 'high'
      },
      {
        title: 'Distraction Theft',
        description: 'Someone spills liquid on you or creates commotion while accomplice steals belongings. Also "gold ring" scam where someone claims you dropped expensive jewelry.',
        severity: 'high'
      },
      {
        title: 'Fake Police Document Check',
        description: 'People in civilian clothes claiming to be police ask to check your wallet for counterfeit money. Real police wear uniforms and have proper ID.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Tourist Menu Overcharge',
        description: 'Restaurants near major attractions charge inflated prices with separate "tourist menus". Check prices before ordering and avoid places without posted menus.',
        severity: 'medium'
      }
    ],
    languages: ['Italian', 'English (tourist areas)', 'Spanish', 'French'],
    daytimeSafetyPercent: 73.64,
    nighttimeSafetyPercent: 45.24,
    safetySourceName: 'Numbeo Crime Index 2025',
    safetySourceUrl: 'https://numbeo.com/crime/in/Rome',
    redFlags: [
      {
        label: 'Pickpocketing & Metro/Bus Theft',
        frequency: 'Most common',
        icon: 'Hand',
        details: 'Professional pickpocketing gangs operate on public transport and around major attractions like Colosseum, Vatican, and Spanish Steps.',
        prevention: 'Keep bags in front, use money belts, stay alert on metro, avoid displaying valuables, secure bags with zippers facing inward'
      },
      {
        label: 'Street Harassment & Catcalling',
        frequency: 'Most common',
        icon: 'AlertTriangle',
        details: 'Solo female travelers commonly experience catcalling and inappropriate comments, particularly around tourist areas and nightlife districts.',
        prevention: 'Ignore harassment, walk confidently, stay in well-lit areas, use headphones if needed, trust instincts and move to safe spaces'
      },
      {
        label: 'Tourist Area Overcharging',
        frequency: 'Frequent',
        icon: 'CreditCard',
        details: 'Restaurants near major attractions inflate prices significantly. Cover charges and service fees often not disclosed upfront.',
        prevention: 'Check prices before ordering, ask about additional charges, eat where locals dine, read reviews, verify bills carefully'
      },
      {
        label: 'Fake Petition & Document Scams',
        frequency: 'Frequent',
        icon: 'Shield',
        details: 'Scammers with clipboards approach tourists with fake petitions or claim to be police checking documents while accomplices steal.',
        prevention: 'Ignore petition solicitors, verify police credentials, keep walking, don\'t show documents to unofficial people'
      },
      {
        label: 'Distraction Theft Techniques',
        frequency: 'Frequent',
        icon: 'EyeOff'
      },
      {
        label: 'GHB Drink Spiking in Bars',
        frequency: 'Occasional',
        icon: 'Syringe'
      }
    ],
    crimeStatistics: {
      violentCrime: 51.02,
      propertyCrime: 6074,
      sexualAssault: 6.8,
      kidnapping: 0.3,
      source: 'Italian Ministry of Interior & Numbeo 2025',
      year: 2024
    },
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: [
        'Public transport (metro, buses)',
        'Tourist attractions (Colosseum, Trevi Fountain)',
        'Nightlife areas (Trastevere, Campo de\' Fiori)',
        'Walking in main shopping streets',
        'Restaurant/cafe areas in evening'
      ],
      reportingRate: 12.2,
      legalProtection: 'Italy strengthened anti-violence laws in December 2023. Harassment and stalking criminalized with increased penalties. Police required to respond to reports.',
      supportResources: [
        '1522 - National Anti-Violence Helpline (24/7, multilingual)',
        'Emergency 112 for immediate threats',
        'Tourist Police at major attractions',
        'Women\'s shelters and legal aid through local associations'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Policlinico Umberto I',
          address: 'Viale del Policlinico, 155',
          phone: '+39 06 49971',
          emergency: true,
          specialties: ['Emergency care', 'Trauma', 'Gynecology'],
          link: 'https://www.policlinicoumberto1.it'
        },
        {
          name: 'Ospedale Santo Spirito',
          address: 'Lungotevere in Sassia, 1',
          phone: '+39 06 68351',
          emergency: true,
          specialties: ['Emergency care', 'Women\'s health']
        },
        {
          name: 'Gemelli University Hospital',
          address: 'Largo Agostino Gemelli, 8',
          phone: '+39 06 30151',
          emergency: true,
          specialties: ['Trauma', 'Emergency care', 'Specialized medicine']
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Internazionale',
          address: 'Piazza Barberini, 49',
          phone: '+39 06 4825456',
          hours: '24 hours',
          emergency: true
        },
        {
          name: 'Farmacia della Stazione',
          address: 'Piazza dei Cinquecento, 51',
          phone: '+39 06 4880019',
          hours: '7:00-22:00',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'Consultori Familiari (Family Health Centers) - free services',
          'Private gynecology clinics in major hospitals',
          'Villa Mafalda - private women\'s health center'
        ],
        gynecologists: [
          'Dr. Maria Rossi - Policlinico Umberto I',
          'Dott.ssa Anna Bianchi - Gemelli Hospital',
          'Women\'s health services at major public hospitals'
        ],
        emergencyContraception: [
          'Available at pharmacies without prescription (ellaOne, Norlevo)',
          'Free at public health centers (Consultori)',
          'Hospital emergency rooms provide emergency contraception'
        ],
        sanitaryProducts: [
          'Available at all pharmacies, supermarkets, convenience stores',
          'Brands: Lines, Tampax, Always widely available',
          'Menstrual cups available at larger pharmacies and health stores'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'Standard travel vaccinations recommended',
        'EU healthcare agreement applies for EU citizens'
      ],
      healthRisks: [
        'Air pollution in city center - consider masks for sensitive individuals',
        'Heat exhaustion in summer months (June-August)',
        'Dehydration risk due to walking on uneven cobblestones in heat'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Rome',
          address: 'Via Vittorio Veneto, 121',
          phone: '+39 06 46741',
          link: 'https://it.usembassy.gov'
        },
        {
          name: 'UK Embassy',
          address: 'Via XX Settembre, 80/a',
          phone: '+39 06 4220 0001',
          link: 'https://www.gov.uk/world/italy'
        },
        {
          name: 'Canadian Embassy',
          address: 'Via Zara, 30',
          phone: '+39 06 854442911',
          link: 'https://www.canada.ca/en/services/canadians-abroad.html'
        },
        {
          name: 'Australian Embassy',
          address: 'Via Antonio Bosio, 5',
          phone: '+39 06 852721',
          link: 'https://italy.embassy.gov.au'
        },
        {
          name: 'German Embassy',
          address: 'Via San Martino della Battaglia, 4',
          phone: '+39 06 49213-1',
          link: 'https://www.rom.diplo.de'
        },
        {
          name: 'French Embassy',
          address: 'Piazza Farnese, 67',
          phone: '+39 06 686011',
          link: 'https://www.ambafrance-it.org'
        },
        {
          name: 'Spanish Embassy',
          address: 'Largo Fontanella Borghese, 19',
          phone: '+39 06 6840401',
          link: 'https://www.exteriores.gob.es/embajadas/roma'
        },
        {
          name: 'Netherlands Embassy',
          address: 'Via Michele Mercati, 8',
          phone: '+39 06 3228001',
          link: 'https://www.netherlandsandyou.nl/countries/italy'
        },
        {
          name: 'Danish Embassy',
          address: 'Via dei Monti Parioli, 50',
          phone: '+39 06 9774831',
          link: 'https://italien.um.dk'
        },
        {
          name: 'Swiss Embassy',
          address: 'Via Barnaba Oriani, 61',
          phone: '+39 06 809571',
          link: 'https://www.eda.admin.ch/roma'
        },
        {
          name: 'Indian Embassy',
          address: 'Via XX Settembre, 5',
          phone: '+39 06 4884642',
          link: 'https://www.indianembassyrome.gov.in'
        }
      ],
      womensRights: [
        'Italy\'s December 2023 anti-violence law strengthens protection',
        'Sexual harassment and stalking are criminal offenses',
        'Victim protection services available through local authorities',
        'Legal aid available for violence victims'
      ],
      legalSupport: [
        'Free legal aid (patrocinio gratuito) for low-income individuals',
        'Bar Association (Ordine degli Avvocati) provides lawyer referrals',
        'Embassy/consulate legal assistance for nationals',
        'Tourist police speak multiple languages'
      ],
      reportingProcedures: [
        'Call 113 for police, 112 for general emergencies',
        'Tourist police stations at major attractions',
        'Report sexual harassment/violence at any police station',
        'Bring passport/ID when making reports',
        'Request interpreter if needed - right guaranteed by law'
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'US State Department',
      lastUpdated: '2024-12-01',
      details: 'Exercise normal precautions in Italy. Some areas have increased risk due to terrorism and crime.',
      reason: 'Petty theft and scams targeting tourists.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/italy-travel-advisory.html',
      soloTravelerAdvice: [
        'Rome is safe for solo female travelers with proper precautions - excellent destination for first-time women solo travelers',
        'Stay in Prati, Monti, or Trastevere for best walkability and safety',
        'Avoid Termini station area at night and peripheral neighborhoods',
        'Use official transport apps and avoid unlicensed taxis',
        'Carry anti-theft bags and be extra vigilant on metro and Bus 64'
      ]
    },
    culturalDos: [
      'Dress modestly for churches.',
      'Learn basic Italian phrases.',
      'Greet with "Buongiorno/Buonasera".',
      'Tip 5-10% at restaurants.',
      'Walk with confidence and purpose.'
    ],
    culturalDonts: [
      "Don't wear revealing clothes near churches.",
      "Don't drink cappuccino after 11 AM.",
      "Don't ignore dress codes.",
      "Don't show expensive jewelry.",
      "Don't walk alone in isolated areas at night."
    ],
    womensConfidenceScore: {
      score: 63.9,
      source: "Safearound & Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Rome"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'A Single Woman Traveling 2025', sourceUrl: 'https://asinglewomantraveling.com/is-rome-safe-for-solo-female-travelers/' },
      { label: 'Nightlife', confidence: 45, source: 'Travel Ladies 2025', sourceUrl: 'https://travelladies.app/safety/italy/rome' },
      { label: 'Public Transport', confidence: 35, source: 'Globe Gazers 2025', sourceUrl: 'https://www.globe-gazers.com/is-rome-safe/' },
      { label: 'Dining Alone', confidence: 78, source: 'Roman Vacations 2025', sourceUrl: 'https://roman-vacations.com/a-solo-female-travellers-guide-to-staying-safe-in-rome/' }
    ],
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: ['Use official app for booking', 'Check license plate', 'Share trip details'],
          companies: ['Uber'],
          link: 'https://www.uber.com/it/en/'
        },
        {
          type: 'FreeNow (Taxi App)',
          safety: 8.2,
          recommendations: ['Official taxi booking app', 'Fixed pricing', 'Track your ride'],
          companies: ['FreeNow'],
          link: 'https://free-now.com/it/'
        },
        {
          type: 'Official White Taxis',
          safety: 7.8,
          recommendations: ['Only use metered white taxis', 'Avoid street touts', 'Get receipt'],
          companies: ['Rome Official Taxis'],
          link: 'https://www.comune.roma.it/web/it/taxi.page'
        },
        {
          type: 'ATAC (Public Transport)',
          safety: 6.5,
          recommendations: ['Validate tickets immediately', 'Avoid during rush hour', 'Stay alert for pickpockets'],
          companies: ['ATAC'],
          link: 'https://www.atac.roma.it/en'
        }
      ],
      nightTravel: {
        safety: 4.8,
        warnings: [
          'Avoid metro after 10 PM - harassment and theft increase',
          'Termini station area dangerous at night',
          'Use taxis instead of walking alone after midnight',
          'Avoid isolated bus stops and metro stations'
        ],
        alternatives: [
          'Night buses available but limited routes',
          'Uber and taxi services available 24/7',
          'Stay in well-lit tourist areas',
          'Book accommodations near metro stations you\'ll use'
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
          name: 'FreeNow',
          type: 'Taxi App',
          contact: 'App-based',
          safety: 8.2
        },
        {
          name: 'Rome Official Taxis',
          type: 'Traditional Taxi',
          contact: '+39 06 3570',
          safety: 7.8
        },
        {
          name: 'ATAC',
          type: 'Public Transport',
          contact: '+39 06 57003',
          safety: 6.5
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk reception',
        'Electronic keycard access',
        'CCTV surveillance in common areas',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Prati',
        'Monti',
        'Trastevere (main areas)',
        'Vatican area',
        'Spanish Steps area',
        'Centro Storico'
      ],
      womensOnly: [
        {
          name: 'The Beehive',
          type: 'Hostel',
          features: ['Female-only dorms', 'Organized social events', 'Safe area', 'Experienced staff'],
          rating: 4.8
        },
        {
          name: 'The RomeHello Hostel',
          type: 'Hostel',
          features: ['Women-only dorms', 'Central location', 'Modern facilities', '24/7 security'],
          rating: 4.6
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 8.5,
          comments: 'Felt safe as a solo female traveler. Staff was helpful and area was well-patrolled.',
          date: '2025-01-15'
        },
        {
          rating: 4.3,
          safety: 8.2,
          comments: 'Good security measures but be careful with belongings in common areas.',
          date: '2025-01-10'
        },
        {
          rating: 4.4,
          safety: 8.3,
          comments: 'Great location and female-friendly environment. Would recommend for solo travelers.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use accommodation WiFi when possible',
        'Avoid public WiFi for banking/personal accounts',
        'Use VPN when connecting to public networks',
        'Enable two-factor authentication',
        'Keep devices updated with security patches'
      ],
      digitalScams: [
        'Fake booking websites - verify hotel bookings directly',
        'Phishing emails claiming to be from Italian authorities',
        'Fake police emails requesting personal information',
        'Social media scams offering free tours',
        'Fake taxi booking apps'
      ],
      vpnRecommendations: [
        'NordVPN - reliable for Italy',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing sensitive accounts'
      ],
      dataProtection: [
        'GDPR compliance in Italy provides data protection',
        'Avoid sharing personal info with strangers',
        'Use credit cards over cash when possible',
        'Keep document copies in secure cloud storage',
        'Enable device tracking and remote wipe'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Metro Pickpocketing',
          location: 'Metro Line A, Termini Station',
          date: '2025-01-20',
          description: 'Organized pickpocket gangs targeting tourists during rush hour',
          severity: 'high'
        },
        {
          type: 'Bus 64 Theft',
          location: 'Bus 64 to Vatican',
          date: '2025-01-18',
          description: 'Multiple reports of theft using distraction techniques',
          severity: 'high'
        },
        {
          type: 'Fake Petition Scam',
          location: 'Colosseum, Trevi Fountain',
          date: '2025-01-15',
          description: 'Groups with clipboards distracting tourists while accomplices steal',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Carry your bag in front on public transport and never put phone in back pockets',
          author: 'Solo Female Traveler',
          date: '2025-01-22',
          upvotes: 67
        },
        {
          tip: 'Avoid Metro Line A during rush hour - use surface transport when possible',
          author: 'Local Resident',
          date: '2025-01-21',
          upvotes: 54
        },
        {
          tip: 'Never sign petitions from strangers - it\'s always a pickpocket distraction',
          author: 'Tourist Police',
          date: '2025-01-20',
          upvotes: 89
        },
        {
          tip: 'Use official taxi stands or apps - avoid taxi touts near tourist sites',
          author: 'Travel Guide',
          date: '2025-01-19',
          upvotes: 43
        }
      ]
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft crossbody bag with RFID blocking',
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'Portable door lock',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Roma Mobilità (ATAC)',
          purpose: 'Official Rome transport app with safety features',
          rating: 4.2
        },
        {
          name: 'bSafe Personal Safety',
          purpose: 'Emergency SOS and location sharing',
          rating: 4.5
        },
        {
          name: 'TripWhistle Global SOS',
          purpose: 'Emergency services access with local numbers',
          rating: 4.3
        },
        {
          name: 'Citymapper Rome',
          purpose: 'Navigation with safety route options',
          rating: 4.6
        },
        {
          name: 'Moovit',
          purpose: 'Public transport with real-time updates',
          rating: 4.4
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Police',
          number: '113',
          type: 'Police Only'
        },
        {
          name: 'Tourist Police',
          number: '+39 06 46862371',
          type: 'Tourist Assistance'
        },
        {
          name: 'Anti-Violence Helpline',
          number: '1522',
          type: 'Women\'s Support (24/7)'
        },
        {
          name: 'US Embassy',
          number: '+39 06 46741',
          type: 'Consular Services'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master the Art of Pickpocket Prevention',
        description: 'Pickpocketing is Rome\'s biggest safety concern. Use anti-theft bags, keep valuables in front pockets, and be extra cautious on Metro Line A and Bus 64. Never sign petitions from strangers - it\'s always a distraction technique.',
        severity: 'high',
        sourceName: 'A Single Woman Traveling',
        sourceUrl: 'https://asinglewomantraveling.com/is-rome-safe-for-solo-female-travelers/'
      },
      {
        title: 'Navigate Public Transport Safely',
        description: 'Rome\'s metro and buses require constant vigilance. Avoid Metro after 10 PM, validate tickets immediately, and keep bags in front during rush hour. Consider surface transport when possible.',
        severity: 'medium',
        sourceName: 'Roman Vacations',
        sourceUrl: 'https://roman-vacations.com/a-solo-female-travellers-guide-to-staying-safe-in-rome/'
      },
      {
        title: 'Handle Street Harassment Confidently',
        description: 'Italian "Ciao bella" catcalls are common but usually harmless. Ignore them completely and keep walking. Most interactions are respectful, but persistent attention is possible.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/italy/rome'
      },
      {
        title: 'Choose Safe Areas and Avoid Tourist Scams',
        description: 'Stay in Prati, Monti, or Trastevere neighborhoods. Avoid Termini area at night and never engage with fake police, petition scammers, or street vendors forcing purchases.',
        severity: 'medium',
        sourceName: 'Globe Gazers',
        sourceUrl: 'https://www.globe-gazers.com/is-rome-safe/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$55 - $85 USD / day',
        description: 'Covers safe accommodation, meals, transport, and attractions at a comfortable level for women traveling alone in Rome.',
        tip: 'Mid-range budget provides safer options and better locations - essential for solo female travel safety in Rome.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$25-35',
          safetyNote: 'Best safety option on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$45-65',
          safetyNote: 'Good safety in central areas - avoid Termini budget options',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$70+',
          safetyNote: 'Excellent safety with 24/7 staff and secure locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$3-6/day',
          safetyDescription: 'Requires constant vigilance. Pickpocketing common.',
          safetyLevel: 'low'
        },
        {
          method: 'Uber/Taxi Apps',
          cost: '$10-20/ride',
          safetyDescription: 'Safest option, especially at night.',
          safetyLevel: 'high'
        },
        {
          method: 'Official Taxis',
          cost: '$15-30/ride',
          safetyDescription: 'Safe but can be expensive. Use metered white taxis only.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in tourist areas during day | Caution at night',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Spending more on central, safe neighborhoods is worth it',
        'Choose accommodations with 24/7 reception',
        'Budget for taxis at night instead of public transport',
        'Anti-theft bags are a worthwhile investment',
        'Travel insurance essential for peace of mind'
      ]
    },
    culturalSensitivity: {
      culturalDos: [
        'Master "bella figura" - dress elegantly and stylishly as appearance is highly valued in Italian culture',
        'Use formal titles like "Signore/Signora" and professional titles - respect for titles is important socially',
        'Cover shoulders and knees in churches and religious sites - modest dress is strictly required in sacred spaces',
        'Enjoy coffee culture properly - cappuccinos only in morning, espresso after meals, never drink while walking',
        'Slow down for "Pausa di Pranzo" - take time to sit and properly enjoy meals, eating while walking is uncommon'
      ],
      culturalDonts: [
        'Don\'t eat or drink while walking - Romans take time to sit and properly savor their food and beverages',
        'Don\'t order cappuccino after lunch or dinner - it\'s considered a morning drink only in Italian culture',
        'Don\'t speak loudly in churches or religious sites - maintain quiet, respectful behavior in sacred spaces',
        'Don\'t rush through meals or grab food "to-go" - dining is a social experience to be savored slowly',
        'Don\'t give knives or wrap gifts in black/purple - these are considered bad luck in Italian culture'
      ]
    },
  youtubeVideo: {
    videoId: "ciol29dxYeU"
  },
  youtubeVideos: [
    {
      videoId: "ciol29dxYeU",
      title: "Rome travel guide"
    },
    {
      videoId: "7LMz0xAsNPY",
      title: "Rome solo female travel experience"
    }
  ]
};

export default rome;