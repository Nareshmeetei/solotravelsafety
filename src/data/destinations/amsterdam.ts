import { Destination } from './types';

const amsterdam: Destination = {
    city: 'Amsterdam',
    country: 'Netherlands',
    continent: 'Europe',
    countryCode: 'nl',
    overallScore: 8.4,
    nightSafety: 8.1,
    publicTransit: 9.0,
    walkingAlone: 8.3,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 180,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.1,
        context: 'Amsterdam is very safe at night, especially in central areas. Streets are well-lit with visible police presence. While petty crime like pickpocketing occurs in nightlife districts, violent incidents are rare. 2024 police data shows violent crime has declined significantly over the past decade. Women report feeling comfortable, but avoid isolated areas and stay alert in busy nightlife zones, particularly the Red Light District.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Amsterdam\'s public transport (trams, buses, metro) is modern, clean, and highly reliable. Well-monitored with security cameras and staff. Incidents are rare, though pickpocketing can occur on busy routes and intercity trains. Most travelers feel safe using public transit at any hour. Keep belongings secure during rush hour.'
      },
      walkingAlone: {
        score: 8.3,
        context: 'Walking alone in Amsterdam is very safe day and night. The city has strong community norms and excellent lighting. Netherlands has one of Europe\'s lowest violent crime rates. Most locals and visitors feel comfortable walking alone, but stay on main streets and avoid deserted areas late at night, particularly around Bijlmer area.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Centrum',
          description: 'Amsterdam’s city center is vibrant and well-patrolled, with a strong police presence and excellent lighting. While pickpocketing can occur in crowded tourist spots (like Dam Square and Central Station), violent crime is rare. The Red Light District can be rowdy at night, so stay alert and stick to main streets after dark.'
        },
        {
          name: 'Jordaan',
          description: 'A charming, historic neighborhood known for its canals, boutiques, and cafes. Jordaan is considered one of the safest and most welcoming areas in Amsterdam, with a strong sense of community and very low crime rates. It’s popular with both locals and visitors for its relaxed atmosphere.'
        },
        {
          name: 'De Pijp',
          description: 'Trendy and multicultural, De Pijp is lively during the day and night. It’s generally very safe, with lots of restaurants and bars. Petty theft is rare, but as with all busy areas, keep an eye on your belongings, especially at the Albert Cuyp Market.'
        },
        {
          name: 'Oud-West',
          description: 'A residential area with a mix of families and young professionals. Oud-West is known for its safety, local shops, and proximity to Vondelpark. Streets are well-lit and there’s a friendly, neighborhood feel. Crime is very low.'
        },
        {
          name: 'Vondelpark',
          description: 'Amsterdam’s largest park is safe during daylight and early evening, popular with joggers, families, and tourists. At night, stick to main paths and avoid isolated areas, as with any large urban park.'
        },
        {
          name: 'Museumplein',
          description: 'Home to the city’s major museums, this area is busy and well-patrolled. Pickpocketing can happen due to the high number of tourists, but violent crime is extremely rare. The area is safe day and night, especially around the museums and open spaces.'
        },
        {
          name: 'Plantage',
          description: 'A quiet, green, and residential district, Plantage is home to the zoo and botanical gardens. It’s considered one of the safest and most peaceful neighborhoods in Amsterdam, with little crime and a relaxed vibe.'
        }
      ],
      caution: ['Red Light District late at night', 'Nieuwmarkt area after midnight'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      {
        name: 'Hostelle (Women Only Hostel)',
        type: 'hostel',
        features: ['Women only', 'High security', 'Great reviews'],
        rating: 9.0,
        notes: 'Best rated women-only hostel in Amsterdam. Clean, safe, and designed for solo female travelers.',
        link: 'https://www.hostelle.com/'
      },
      {
        name: 'Generator Amsterdam',
        type: 'hostel',
        features: ['Female dorms', 'Modern', '24/7 reception'],
        rating: 8.5,
        notes: 'Modern, secure, female-only dorms available, great social vibe.',
        link: 'https://staygenerator.com/hostels/amsterdam'
      },
      {
        name: 'ClinkNOORD',
        type: 'hostel',
        features: ['Female dorms', 'Excellent reviews', 'Lively social spaces'],
        rating: 8.7,
        notes: 'Female-only dorms, excellent reviews for safety and cleanliness, lively social spaces.',
        link: 'https://www.clinkhostels.com/clinknoord/'
      },
      {
        name: 'The Bee Hostel',
        type: 'hostel',
        features: ['Ladies only floor', 'Boutique', 'High security'],
        rating: 9.1,
        notes: 'Modern, boutique hostel with a dedicated “ladies only” floor, high security, and excellent reviews.',
        link: 'https://thebeehostel.com/'
      },
      {
        name: 'Stayokay Amsterdam Vondelpark',
        type: 'hostel',
        features: ['Female dorms', 'Popular with solo travelers', 'Safe location'],
        rating: 9.2,
        notes: 'Popular with solo travelers, female dorms, safe location, and great staff.',
        link: 'https://www.stayokay.com/en/hostel/amsterdam-vondelpark'
      },
      {
        name: 'Hotel V Fizeaustraat',
        type: 'hotel',
        features: ['Boutique hotel', 'Female-friendly', 'Museum Quarter location', 'Design-focused', '24/7 security'],
        rating: 8.8,
        notes: 'Stylish boutique hotel in safe Museum Quarter area. Modern design, excellent security, and popular with solo female travelers for its welcoming atmosphere.',
        link: 'https://www.hotelv.nl/amsterdam/fizeaustraat/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress in layers for unpredictable weather
• Bring a rain jacket—rain is common year-round
• Avoid flashy jewelry and keep your bag zipped
• Wear comfortable shoes for walking on cobblestones
• Carry a small crossbody bag or secure backpack to deter pickpockets`,
      firstTimers: `• Amsterdam is easy for solo women, but stay alert, especially at night
• Save emergency numbers (112 for police, fire, ambulance) and local support hotlines
• Use official taxis or rideshares after dark
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop or cafe`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'GVB Amsterdam',
        'Bolt',
        'Citymapper'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Amsterdam', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Amsterdam safety insights', rating: 4.0 },
        { name: 'GVB Amsterdam', link: 'https://www.gvb.nl/', description: 'Official Amsterdam public transport app for trams, buses, metro with real-time info', rating: 4.3 },
        { name: 'Bolt', link: 'https://bolt.eu/', description: 'Popular European ride-hailing app with driver verification in Amsterdam', rating: 4.3 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best navigation app for Amsterdam with bike routes and public transport', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'Dutch',
          pronunciation: 'help',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Help',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Help',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Help&client=tw-ob'
          ],
          phonetic: 'Help',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Bel de politie!',
          localLanguage: 'Dutch',
          pronunciation: 'BEL duh po-LI-tsee',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Bel%20de%20politie',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Bel%20de%20politie',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Bel%20de%20politie&client=tw-ob'
          ],
          phonetic: 'Bel de politie!',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Ik heb een dokter nodig.',
          localLanguage: 'Dutch',
          pronunciation: 'ik HEB un DOK-tur NO-dikh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Ik%20heb%20een%20dokter%20nodig',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Ik%20heb%20een%20dokter%20nodig',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Ik%20heb%20een%20dokter%20nodig&client=tw-ob'
          ],
          phonetic: 'Ik heb een dokter nodig.',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Waar is het dichtstbijzijnde ziekenhuis?',
          localLanguage: 'Dutch',
          pronunciation: 'VAHR is het DIKHT-st-bye-zyn-duh ZEE-kun-hoys',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Waar%20is%20het%20dichtstbijzijnde%20ziekenhuis',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Waar%20is%20het%20dichtstbijzijnde%20ziekenhuis',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Waar%20is%20het%20dichtstbijzijnde%20ziekenhuis&client=tw-ob'
          ],
          phonetic: 'Waar is het dichtstbijzijnde ziekenhuis?',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Ik ben verdwaald.',
          localLanguage: 'Dutch',
          pronunciation: 'ik ben fur-VAHLT',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Ik%20ben%20verdwaald',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Ik%20ben%20verdwaald',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Ik%20ben%20verdwaald&client=tw-ob'
          ],
          phonetic: 'Ik ben verdwaald.',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Laat me met rust.',
          localLanguage: 'Dutch',
          pronunciation: 'LAHT muh met RUST',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Laat%20me%20met%20rust',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Laat%20me%20met%20rust',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Laat%20me%20met%20rust&client=tw-ob'
          ],
          phonetic: 'Laat me met rust.',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Ik voel me onveilig.',
          localLanguage: 'Dutch',
          pronunciation: 'ik FOOL muh ON-vye-likh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Ik%20voel%20me%20onveilig',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Ik%20voel%20me%20onveilig',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Ik%20voel%20me%20onveilig&client=tw-ob'
          ],
          phonetic: 'Ik voel me onveilig.',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Kunt u mij helpen?',
          localLanguage: 'Dutch',
          pronunciation: 'KUNT oo mye HEL-pun',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Kunt%20u%20mij%20helpen',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=nl-NL-ColetteNeural&text=Kunt%20u%20mij%20helpen',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&q=Kunt%20u%20mij%20helpen&client=tw-ob'
          ],
          phonetic: 'Kunt u mij helpen?',
          voiceInfo: {
            voiceName: 'nl-NL-ColetteNeural',
            gender: 'Female',
            displayName: 'Colette (Dutch Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['nl-NL'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: [
        'Amsterdam embraces casual and practical dress culture - jeans, t-shirts, and sneakers are perfectly acceptable in most settings for solo female travelers',
        'Smart-casual attire recommended for business meetings or upscale restaurants - neat appearance is valued over formal dress',
        'Rain gear absolutely essential year-round due to unpredictable Dutch weather - waterproof jacket and comfortable walking shoes',
        'For churches or religious sites, dress modestly by covering shoulders and knees as a sign of respect',
        'Swimwear only appropriate for pools, beaches, and designated sunbathing areas - topless sunbathing accepted in some parks but nudity restricted to designated zones'
      ],
      behaviorNorms: [
        'Respect personal space and privacy - the Dutch value directness in communication but not intrusion into personal matters',
        'Be punctual for appointments and social events - Dutch culture highly values timeliness and being late is considered disrespectful',
        'Embrace direct communication style - Dutch people are straightforward and honest, this isn\'t meant to be rude but rather efficient',
        'Greet with firm handshake and maintain eye contact - shows confidence and respect in Dutch social interactions',
        'Avoid walking or standing in bike lanes (red pavement) - cyclists have absolute priority and will ring bells aggressively if blocked',
        'Don\'t photograph people in the Red Light District - it\'s disrespectful to workers and can be illegal in some areas',
        'Learn basic Dutch phrases like "Hallo" and "Dank je wel" - locals appreciate the effort even though most speak excellent English',
        'Join in on "gezelligheid" (cozy togetherness) in social settings - embrace the friendly, warm Dutch social atmosphere',
        'Practice humility and avoid boastfulness - Dutch culture values modesty and down-to-earth attitudes',
        'Plan visits in advance rather than dropping in unannounced - Dutch prefer scheduled social interactions'
      ],
      perception: [
        'Solo women travelers are generally respected and welcomed in Amsterdam\'s progressive and inclusive society - locals actively help lost travelers with directions',
        'The city embraces diversity and solo female travelers report feeling comfortable and accepted in most social settings and public spaces',
        'Dutch culture values independence and self-reliance, making solo travel socially acceptable and even admired by locals',
        'Most Amsterdam residents speak excellent English and are patient with tourists - language barriers rarely create safety concerns',
        'Catcalling incidents are relatively rare compared to other European capitals, though they can occur in touristy nightlife areas',
        'Local women often travel alone and will readily share safety advice or recommendations with fellow solo female travelers',
        'Business owners and service staff are accustomed to solo diners and travelers - you won\'t feel out of place eating or shopping alone'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, 
    exchangeTips: [
      'Use Geldmaat ATMs (yellow machines) for best rates - they are fee-free for most international cards',
      'Cards are widely accepted everywhere - Visa, Mastercard, and contactless payments preferred',
      'Avoid currency exchange at Schiphol Airport - rates are 10-15% worse than banks',
      'GWK Travelex offices in city center offer decent rates but charge €3-5 commission',
      'Many shops accept card payments under €1 - cash becoming less necessary',
      'Banking hours: Most banks open 9 AM-5 PM Monday-Friday, limited weekend hours',
      'No need to declare amounts under €10,000 when entering Netherlands',
      'Tipping culture: Round up bills or add 5-10% for good service, never mandatory',
      'Save receipts for VAT refunds on purchases over €50 if leaving EU within 3 months'
    ],
    scamWarnings: [
        'Always use official ATMs (Geldmaat, the yellow machines) or pay by card, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Police Officers',
        description: 'Scammers posing as police officers may ask to see your ID or wallet. Real Dutch police will never ask to see your money or take your wallet.',
        severity: 'medium'
      },
      {
        title: 'Taxi Overcharging',
        description: 'Some unlicensed taxis may overcharge tourists. Always use official taxi stands or ride-sharing apps like Uber.',
        severity: 'low'
      },
      {
        title: 'Drug Scams',
        description: 'Avoid buying drugs from street dealers. Many are undercover police or sell fake substances.',
        severity: 'medium'
      }
    ],
    languages: ['Dutch', 'English (widely spoken)'],
    daytimeSafetyPercent: 83.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Amsterdam)
    nighttimeSafetyPercent: 68.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Amsterdam)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Amsterdam',
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Most Common',
        icon: 'Hand',
        details: 'Professional pickpocket teams target solo female tourists using distraction tactics. Amsterdam averages 1,000 incidents monthly, with hotspots including Central Station, Dam Square, Red Light District, crowded trams, and tourist markets. Teams work in pairs - one distracts by asking directions while partner steals from bags.',
        prevention: 'Use anti-theft crossbody bags with zippers facing body, carry minimal cash, use RFID-blocking wallets, stay alert during distractions, never leave valuables unattended in cafes'
      },
      {
        label: 'Sexual Harassment (Red Light District)',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
        details: 'Solo women may be mistaken for sex workers, especially at night. Area attracts intoxicated male tourists who engage in catcalling and inappropriate behavior. High-risk periods are late night (2-3 AM) when legitimate tourists leave and aggressive bachelor parties dominate the area.',
        prevention: 'Visit during daytime only, travel with friends if going at night, stick to well-lit main streets, avoid eye contact with troublemakers, use heavy police presence for safety'
      },
      {
        label: 'Tourist Scams (Fake Tours, Overcharging)',
        frequency: 'Occasional',
        icon: 'Shield',
        details: 'Fake police with counterfeit badges targeting solo female tourists to steal cash and cards. Airport taxi scams refusing meters and massive overcharging. Anne Frank House ticket fraud at triple prices. White van electronics scams. Travel fraud increased 28% in winter 2024.',
        prevention: 'Buy tickets only from official websites, use licensed transport with meters or apps, verify police identification and badges, avoid accepting help from strangers at transport hubs'
      },
      {
        label: 'Bicycle-Related Incidents',
        frequency: 'Rare',
        icon: 'Bike',
        details: 'Two-thirds of traffic fatalities involve cyclists and pedestrians. Solo women pedestrians face liability if hit in bike lanes. Complex navigation requires crossing 8 traffic streams. Aggressive cyclists ignore rules, run red lights. 20 million yearly tourists overwhelm bike infrastructure.',
        prevention: 'Learn bike lane markings (white bike symbols), always look both ways before stepping, avoid rush hour cycling, take guided bike tour first, stay completely alert without phone distractions'
      }
    ],
    culturalDos: [
      'Respect personal space.',
      'Dress neat casual.',
      'Use Dutch phrases.',
      'Be on time.',
      'Be polite in public.'
    ],
    culturalDonts: [
      "Don't walk in bike lanes.",
      "Don't leave valuables unattended.",
      "Don't take photos in Red Light District.",
      "Don't buy drugs on the street.",
      "Don't pee in public."
    ],
    womensConfidenceScore: {
      score: 71.6,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Amsterdam"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 88, source: 'Be My Travel Muse 2025', sourceUrl: 'https://www.bemytravelmuse.com/is-amsterdam-safe/' },
      { label: 'Nightlife', confidence: 75, source: 'Bounce Women\'s Solo Travel Safety Index 2024', sourceUrl: 'https://bounce.com/blog/womens-solo-travel-safety-2023' },
      { label: 'Public Transport', confidence: 90, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Amsterdam' },
      { label: 'Dining Alone', confidence: 92, source: 'The Lady Who Travels 2025', sourceUrl: 'https://www.theladywhotravels.com/is-amsterdam-safe-for-solo-female-travelers/' }
    ],
    // Enhanced safety fields
    sexualHarassmentData: {
      prevalence: 'low-moderate',
      commonLocations: ['Red Light District at night', 'Crowded public transport', 'Tourist areas with intoxicated visitors', 'Dam Square area at night'],
      reportingRate: 52,
      legalProtection: 'Strong legal protections. New Sex Offences Act (July 2024) makes sexual harassment a criminal offence. Police take reports seriously with specialized units available.',
      supportResources: [
        'GGD Amsterdam Sexual Assault Center: 0800-0188 (24/7 national hotline)',
        'Sexual Assault Center Amsterdam-Amstelland: Available 24/7 for victims within 7 days',
        'CARE Amsterdam (safersterdam@gmail.com): Support groups for survivors',
        'Victim Support Netherlands: 0900-0101',
        'U.S. Citizen Emergency: +31 (0) 70 310-2209 (Press 3)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Amsterdam UMC - Location AMC',
          address: 'Meibergdreef 9, 1105 AZ Amsterdam',
          phone: '+31 20 566 9111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma'],
          link: 'https://www.amc.nl/'
        },
        {
          name: 'OLVG - Location Oost',
          address: 'Oosterpark 9, 1091 AC Amsterdam',
          phone: '+31 20 599 9111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.olvg.nl/'
        },
        {
          name: 'BovenIJ Ziekenhuis',
          address: 'Statenjachtstraat 1, 1034 CS Amsterdam',
          phone: '+31 20 634 6000',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Surgery'],
          link: 'https://www.bovenij.nl/'
        }
      ],
      pharmacies: [
        {
          name: 'Apotheek Centrum',
          address: 'Damrak 42, 1012 LP Amsterdam',
          phone: '+31 20 624 43 21',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.apotheekcentrumamsterdam.nl/'
        },
        {
          name: 'Apotheek Leidseplein',
          address: 'Leidseplein 26, 1017 PT Amsterdam',
          phone: '+31 20 622 83 33',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.apotheekleidseplein.nl/'
        },
        {
          name: 'Apotheek Museumplein',
          address: 'Van Baerlestraat 35, 1071 AP Amsterdam',
          phone: '+31 20 673 21 21',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.apotheekmuseumplein.nl/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Amsterdam: +31 20 566 9111',
          'GGD Amsterdam Sexual Health Clinic: +31 20 555 5911',
          'Planned Parenthood Netherlands: +31 20 624 45 45'
        ],
        gynecologists: [
          'Dr. van der Berg - Women\'s Health Amsterdam: +31 20 566 9111',
          'Dr. Jansen - Gynecology Practice Centrum: +31 20 624 43 21'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B available at Apotheek Centrum and other major pharmacies',
          'Emergency contraception available at GGD clinics'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Free sanitary products available at many public restrooms',
          'Tampons and pads widely available'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Amsterdam',
        'COVID-19 vaccination recommended',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Low risk of tropical diseases',
        'Seasonal flu during winter',
        'Air pollution can affect respiratory conditions',
        'Lyme disease risk in rural areas (not in city center)'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy The Hague (serves Amsterdam)',
        address: 'John Adams Park 1, 2244 BZ Wassenaar',
        phone: '+31 70 310 2209',
        email: 'AmsterdamACS@state.gov',
        emergency: '+31 70 310 2209',
        link: 'https://nl.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Consulate General Amsterdam',
          address: 'Museumplein 19, 1071 DJ Amsterdam',
          phone: '+31 20 575 5309',
          link: 'https://nl.usembassy.gov/embassy-consulates/amsterdam/'
        },
        {
          name: 'British Consulate General Amsterdam',
          address: 'Koningslaan 44, 1075 AE Amsterdam',
          phone: '+31 20 676 4343',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-amsterdam'
        },
        {
          name: 'German Consulate General Amsterdam',
          address: 'Honthorststraat 36-38, 2514 EG The Hague',
          phone: '+31 70 342 0600',
          link: 'https://niederlande.diplo.de/'
        },
        {
          name: 'French Consulate General Amsterdam',
          address: 'Vijzelgracht 2, 1017 HR Amsterdam',
          phone: '+31 20 530 6900',
          link: 'https://nl.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate General Amsterdam',
          address: 'Frederiksplein 34, 1017 XN Amsterdam',
          phone: '+31 20 620 3811',
          link: 'https://www.exteriores.gob.es/consulados/amsterdam'
        },
        {
          name: 'Australian Embassy The Hague',
          address: 'Carnegielaan 4, 2517 KH The Hague',
          phone: '+31 70 310 8200',
          link: 'https://netherlands.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy The Hague',
          address: 'Sophialaan 7, 2514 JP The Hague',
          phone: '+31 70 311 1600',
          link: 'https://www.canadainternational.gc.ca/netherlands-pays_bas/'
        },
        {
          name: 'Netherlands Government Services',
          address: 'Multiple locations throughout Amsterdam',
          phone: '+31 14 020',
          link: 'https://www.government.nl/'
        },
        {
          name: 'Danish Embassy The Hague',
          address: 'Koninginnegracht 30, 2514 AB The Hague',
          phone: '+31 70 302 5959',
          link: 'https://nederlandene.um.dk/'
        },
        {
          name: 'Swiss Embassy The Hague',
          address: 'Lange Voorhout 42, 2514 EG The Hague',
          phone: '+31 70 364 2831',
          link: 'https://www.eda.admin.ch/thehague'
        },
        {
          name: 'Indian Embassy The Hague',
          address: 'Buitenrustweg 2, 2517 KD The Hague',
          phone: '+31 70 346 9771',
          link: 'https://www.indianembassy.nl/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Amsterdam',
        address: 'Museumplein 19, 1071 DJ Amsterdam',
        phone: '+31 20 575 5309',
        email: 'AmsterdamACS@state.gov',
        link: 'https://nl.usembassy.gov/embassy-consulate/amsterdam/'
      },
      womensRights: [
        'Strong legal protections for women under Dutch law',
        'Equal pay and employment rights guaranteed',
        'Protection against discrimination based on gender',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and stalking',
        'Women’s Rights Center Amsterdam: https://vrouwenrechtswinkelamsterdam.nl/'
      ],
      legalSupport: [
        'Juridisch Loket (Legal Aid): +31 0900 8020, https://www.juridischloket.nl/',
        'Women\'s Rights Legal Center: +31 20 624 45 45, https://vrouwenrechtswinkelamsterdam.nl/',
        'Free legal advice available for EU citizens',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police at 112 (emergency) or 0900 8844 (non-emergency)',
        'File police report in person at any police station',
        'Request English-speaking officer if needed',
        'Keep copy of police report for insurance/embassy',
        'Contact embassy for serious crimes or legal assistance'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 9.0,
          recommendations: ['Use the official app for booking.'],
          companies: ['Uber'],
          link: 'https://www.uber.com/nl/en/ride/'
        },
        {
          type: 'Bolt',
          safety: 8.8,
          recommendations: ['Use the official app for booking.'],
          companies: ['Bolt'],
          link: 'https://bolt.eu/en/cities/amsterdam/'
        },
        {
          type: 'TCA (Taxi Centrale Amsterdam)',
          safety: 8.5,
          recommendations: ['Official taxi provider. Book via website or phone.'],
          companies: ['TCA'],
          link: 'https://www.tca.nl/en/'
        },
        {
          type: 'GVB Trams',
          safety: 9.2,
          recommendations: ['18 tram lines crisscross central Amsterdam', 'Most convenient for tourists', 'Use OV-chipkaart or contactless payment'],
          companies: ['GVB'],
          link: 'https://www.gvb.nl/en'
        },
        {
          type: 'GVB Metro',
          safety: 9.1,
          recommendations: ['5 metro lines with 59 stops', 'Fastest way to outer districts', 'Well-monitored stations with CCTV'],
          companies: ['GVB'],
          link: 'https://www.gvb.nl/en'
        },
        {
          type: 'GVB Buses',
          safety: 8.9,
          recommendations: ['44 bus lines including night buses', 'Extensive network to all neighborhoods', 'Many electric buses for cleaner travel'],
          companies: ['GVB'],
          link: 'https://www.gvb.nl/en'
        },
        {
          type: 'NS Trains',
          safety: 9.3,
          recommendations: ['Direct connections to Schiphol Airport (17 minutes)', 'Regional and international connections', 'Frequent service up to 8 trains/hour'],
          companies: ['NS (Nederlandse Spoorwegen)'],
          link: 'https://www.ns.nl/en'
        },
        {
          type: 'GVB Ferries',
          safety: 9.0,
          recommendations: ['13 free ferries to Amsterdam Noord', 'Perfect for cyclists and pedestrians', 'Scenic crossing of River IJ'],
          companies: ['GVB'],
          link: 'https://www.gvb.nl/en'
        },
        {
          type: 'OV-fiets Bike Rental',
          safety: 8.7,
          recommendations: ['Integrated with public transport', '24-hour bike rental available', 'Very popular with locals and tourists'],
          companies: ['NS/OV-fiets'],
          link: 'https://www.ns.nl/en/door-to-door/ov-fiets'
        },
        {
          type: 'Amsterdam Water Taxi',
          safety: 8.8,
          recommendations: ['Scenic canal transportation', 'Premium service with advance booking', 'Great for special occasions or groups'],
          companies: ['Various operators'],
          link: 'https://www.watertaxi-amsterdam.nl/'
        }
      ],
      nightTravel: {
        safety: 7.8,
        warnings: [
          'Avoid isolated areas after midnight',
          'Be cautious in Red Light District late at night',
          'Use well-lit main streets',
          'Consider taking a taxi instead of walking alone'
        ],
        alternatives: [
          'Night buses (N-prefix routes) run until 3 AM',
          'Uber and Bolt available 24/7',
          'Official taxi stands at major squares',
          'Stay in well-lit, populated areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 9.0
        },
        {
          name: 'Bolt',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.8
        },
        {
          name: 'TCA (Taxi Centrale Amsterdam)',
          type: 'Traditional Taxi',
          contact: '+31 20 777 7777',
          safety: 8.5
        },
        {
          name: 'GVB',
          type: 'Public Transport',
          contact: '+31 20 460 60 60',
          safety: 9.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service',
        'Electronic key card access',
        'CCTV surveillance',
        'Secure luggage storage',
        'In-room safes',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Jordaan',
        'De Pijp',
        'Oud-West',
        'Vondelpark area',
        'Museumplein',
        'Plantage'
      ],
      womensOnly: [
        {
          name: 'Stayokay Amsterdam Vondelpark',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 security', 'Central location', 'Safe neighborhood'],
          rating: 4.5
        },
        {
          name: 'The Student Hotel Amsterdam City',
          type: 'Hostel',
          features: ['Female-only floors', 'Modern security', 'Safe area', '24/7 staff'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'Felt very safe as a solo female traveler. Staff was helpful and area was well-lit.',
          date: '2025-01-15'
        },
        {
          rating: 4.5,
          safety: 8.8,
          comments: 'Great security measures and friendly staff. Would recommend for solo travelers.',
          date: '2025-01-10'
        },
        {
          rating: 4.6,
          safety: 8.9,
          comments: 'Clean, safe, and in a great neighborhood. Perfect for solo female travelers.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use hotel/accommodation WiFi when possible',
        'Avoid public WiFi for sensitive transactions',
        'Use VPN when connecting to public networks',
        'Enable two-factor authentication on all accounts',
        'Keep devices updated with latest security patches'
      ],
      digitalScams: [
        'Fake booking websites - always use official sites',
        'Phishing emails claiming to be from hotels',
        'Fake police emails requesting personal information',
        'Social media scams offering free accommodation',
        'Fake taxi booking apps'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing banking or personal accounts'
      ],
      dataProtection: [
        'GDPR compliance in Netherlands provides strong data protection',
        'Avoid sharing personal information with strangers',
        'Use secure payment methods (credit cards over cash)',
        'Keep copies of important documents in secure cloud storage',
        'Enable device tracking and remote wipe capabilities'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Central Station',
          date: '2025-01-20',
          description: 'Multiple reports of pickpocketing during rush hour',
          severity: 'low'
        },
        {
          type: 'Fake Police Scam',
          location: 'Red Light District',
          date: '2025-01-18',
          description: 'Scammers posing as police officers asking for ID',
          severity: 'medium'
        },
        {
          type: 'Bicycle Theft',
          location: 'Various locations',
          date: '2025-01-15',
          description: 'Increase in bicycle thefts - always use proper locks',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use the bike lane when cycling and watch out for tram tracks',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 45
        },
        {
          tip: 'Keep your phone and wallet in front pockets, especially on crowded trams',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 38
        },
        {
          tip: 'Download the GVB app for real-time public transport updates',
          author: 'Frequent Visitor',
          date: '2025-01-20',
          upvotes: 52
        },
        {
          tip: 'Avoid the Red Light District late at night if you\'re alone',
          author: 'Local Guide',
          date: '2025-01-19',
          upvotes: 67
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'The Netherlands is generally safe for travelers. Exercise normal precautions. Be aware of petty crime in tourist areas and use common sense safety measures.',
      reason: 'Petty theft near tourist hotspots.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/netherlands-travel-advisory.html',
      soloTravelerAdvice: [
        'Very safe for solo female travelers - excellent for first-time solo travelers',
        'Stay in Jordaan, De Pijp, or Oud-West for best walkability and safety',
        'Avoid Red Light District at night - attracts rowdy drunk tourists',
        'Use GVB transport passes (€9.50/24hrs) and avoid unlicensed taxis',
        'Carry offline maps - canal layout is confusing and easy to get lost'
      ]
    },
    crimeStatistics: {
      violentCrime: 7.8, // per 100,000 (2024 data shows continued decline)
      propertyCrime: 3200, // per 100,000 (2024 data - Amsterdam has ~90 crimes per 1000 residents)
      sexualAssault: 13.2, // per 100,000 (2024 data shows slight increase but still low by international standards)
      kidnapping: 0.2, // per 100,000 (2024 data)
      source: 'Dutch Central Bureau of Statistics (CBS) & Amsterdam Police',
      year: 2024
    },
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
          name: 'GuruWalk',
          purpose: 'Free walking tours with local guides',
          rating: 4.6
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community & safety tips',
          rating: 4.5
        },
        {
          name: 'My Safetipin',
          purpose: 'Community safety ratings for areas',
          rating: 4.3
        },
        {
          name: 'Maps.me',
          purpose: 'Offline maps with safety features',
          rating: 4.7
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Police (Non-emergency)',
          number: '0900 8844',
          type: 'Police Information'
        },
        {
          name: 'U.S. Embassy',
          number: '+31 70 310 2209',
          type: 'Consular Services'
        },
        {
          name: 'Sexual Violence Center',
          number: '+31 88 234 24 00',
          type: 'Support Services'
        },
        {
          name: 'Victim Support',
          number: '+31 0900 0101',
          type: 'Support Services'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is the most common crime in Amsterdam, especially at Central Station, Leidseplein, and busy trams. Keep valuables secure, use anti-theft bags, and avoid showing your phone or wallet in public.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-amsterdam-safe-for-solo-female-travelers/'
      },
      {
        title: 'Cycle Safely and Learn Local Bike Rules',
        description: 'Amsterdam is bike-friendly, but always use bike lanes, follow traffic signals, and be cautious of trams and pedestrians. Brush up on Dutch cycling etiquette before renting a bike.',
        severity: 'low',
        sourceName: 'TrustedHousesitters',
        sourceUrl: 'https://www.trustedhousesitters.com/blog/travel/solo-female-travel-amsterdam/'
      },
      {
        title: 'Avoid Isolated Areas Late at Night',
        description: 'Most neighborhoods are safe, but avoid walking alone in isolated or poorly lit areas after dark. Stick to well-traveled streets and use public transport or official taxis if out late.',
        severity: 'low',
        sourceName: 'A Solo Woman Traveling',
        sourceUrl: 'https://asinglewomantraveling.com/solo-trip-to-amsterdam/'
      },
      {
        title: 'Use Public Transport and Keep Emergency Numbers Handy',
        description: 'Amsterdam\'s trams, buses, and metro are safe and efficient. Save the emergency number (112) and police (0900-8844) in your phone.',
        severity: 'low',
        sourceName: 'I amsterdam',
        sourceUrl: 'https://www.iamsterdam.com/en/travel-stay/health-safety-and-crime-in-amsterdam'
      }
    ],
    culturalSensitivityTips: [
      'Learn basic Dutch phrases - "Hallo" (hello), "Dank je wel" (thank you), "Sorry" (excuse me) show respect and earn helpful guidance from locals for enhanced solo female travel safety',
      'Never walk in bike lanes (red pavement) - Cyclists have absolute right of way and will ring bells aggressively; stepping into bike lanes can cause accidents and confrontations',
      'Embrace Dutch directness without taking offense - Direct communication is cultural norm, not rudeness; understanding this helps build trust and safety networks with locals',
      'Respect Red Light District rules strictly - No photos of workers, stay on main streets, avoid aggressive tour groups; proper etiquette ensures personal safety in this area',
      'Be punctual for all appointments - Dutch culture values timeliness extremely; being late damages relationships and can affect your local support network for solo travel safety',
      'Follow coffee shop etiquette - No photos inside, understand the rules, don\'t loiter outside; proper behavior ensures you won\'t attract unwanted attention or problems',
      'Understand "gezelligheid" culture - Embrace Dutch coziness and social togetherness; participating in local social customs enhances your safety through community acceptance',
      'Dress appropriately for religious sites - Cover shoulders and knees in churches; showing cultural respect helps you blend in and avoid standing out as a tourist target'
    ],
    culturalSensitivityTipsDetailed: {
      title: 'Cultural Sensitivity & Safety Guide for Solo Female Travelers in Amsterdam',
      introduction: 'Is Amsterdam safe for women solo travelers culturally? Yes - Amsterdam ranks among Europe\'s most progressive cities with excellent gender equality and liberal attitudes. The Netherlands consistently ranks in the top 5 globally for women\'s rights and safety. However, understanding Dutch cultural norms is essential for maximizing your safety and comfort while traveling alone in this unique, tolerant society.',
      sections: [
        {
          title: 'Transportation Safety & Cycling Culture',
          tips: [
            'Never walk in bike lanes (red pavement) - Cyclists have absolute right of way and Amsterdam has aggressive cycling culture; stepping into bike lanes causes accidents and confrontations',
            'Learn cycling rules before renting bikes - Two-thirds of traffic fatalities involve cyclists; take guided bike tours first to understand complex traffic patterns safely',
            'Master tram etiquette for safety - Stand right, exit quickly, watch for pickpockets during rush hour; trams are generally very safe for solo women but stay alert',
            'Use official taxi services or rideshare apps - Avoid unlicensed taxis, especially from airport; verified drivers ensure solo female traveler safety',
            'Navigate Central Station carefully - Major pickpocketing hotspot with complex layout; keep belongings secure and know your exit routes',
            'Understand rush hour cycling chaos - 8AM-9AM and 5PM-6PM bring intense bicycle traffic; pedestrians must be extremely careful during these times'
          ]
        },
        {
          title: 'Red Light District & Nightlife Safety',
          tips: [
            'Respect Red Light District rules strictly - No photos of workers (illegal and dangerous), stay on main streets, avoid aggressive bachelor parties and tour groups',
            'Understand coffee shop etiquette - No photos inside, know the rules, don\'t loiter outside; improper behavior attracts unwanted attention and potential problems',
            'Navigate nightlife areas safely - Leidseplein and Rembrandtplein can be rowdy; stick to well-lit main streets and avoid overly intoxicated groups',
            'Trust your instincts about venues - If a bar or club feels unsafe or overly aggressive, leave immediately; Amsterdam has many safe alternatives',
            'Use official transport after nightlife - Night buses, taxis, or walking on main streets; avoid isolated shortcuts through canal areas after midnight',
            'Respect local attitudes toward tourism - Some areas experience overtourism frustration; being respectful helps maintain positive interactions with locals'
          ]
        },
        {
          title: 'Communication & Social Interactions',
          tips: [
            'Embrace Dutch directness without taking offense - Direct communication is cultural norm, not rudeness; understanding this helps build trust and safety networks',
            'Learn essential Dutch phrases - "Hallo" (hello), "Dank je wel" (thank you), "Sorry" (excuse me), "Help" (help) show respect and earn local assistance',
            'Understand "gezelligheid" culture - Embrace Dutch concept of coziness and togetherness; participating in local social customs enhances community acceptance and safety',
            'Be punctual for all appointments - Dutch culture values extreme timeliness; being late damages relationships and can affect your local support network',
            'Ask for help confidently - Dutch people are generally helpful to tourists; don\'t hesitate to ask for directions or assistance when needed',
            'Respect personal space initially - While friendly, Dutch people appreciate reserved initial interactions; let relationships develop naturally for better local connections'
          ]
        },
        {
          title: 'Cultural Etiquette & Blending In',
          tips: [
            'Dress modestly for religious sites - Cover shoulders and knees in churches; showing cultural respect helps you blend in rather than stand out as tourist target',
            'Understand Dutch tolerance vs. acceptance - Liberal laws don\'t mean anything goes; respect local customs and boundaries for personal safety',
            'Follow proper behavior in residential areas - Keep voices low, respect quiet hours, don\'t treat neighborhoods like theme parks; locals appreciate respectful tourists',
            'Handle money and payments properly - Netherlands is largely cashless; carry backup payment methods and understand tipping isn\'t mandatory but appreciated',
            'Respect environmental consciousness - Cycling, recycling, and sustainability are important; showing environmental awareness earns local respect and acceptance',
            'Navigate language preferences carefully - While English is widely spoken, making effort with Dutch phrases shows respect and often results in warmer interactions'
          ]
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$45 - $65 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Low-budget travel is possible, but a mid-range budget provides safer and more comfortable options for solo women.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$12-20',
          safetyNote: 'Best for safety on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$30-50',
          safetyNote: 'Mixed reviews - check for well-lit areas & verified listings',
          safetyLevel: 'medium'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$40+',
          safetyNote: 'Safer with reviewed hosts & 24/7 access',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$2-5/day',
          safetyDescription: 'Safe during daytime. Can get crowded.',
          safetyLevel: 'high'
        },
        {
          method: 'Rideshare (Uber/Bolt)',
          cost: '$8-15/ride',
          safetyDescription: 'Most women report feeling safe, especially at night.',
          safetyLevel: 'high'
        },
        {
          method: 'Local Buses',
          cost: '$1-3',
          safetyDescription: 'Cheap but confusing for non-locals. Avoid at night.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe during the day | Caution after dark',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Spending slightly more often means safer, central neighborhoods',
        '24/7 hotel security or staff',
        'Trusted rides over random taxis',
        'What you spend can directly affect how safe you feel'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Learn basic Dutch greetings like "Hallo" (hello) and "Dank je wel" (thank you) - locals appreciate the effort',
      'Be punctual for appointments - Dutch culture values timeliness and being late is considered disrespectful',
      'Embrace direct communication - Dutch people are straightforward and this isn\'t meant to be rude',
      'Dress modestly when visiting churches or religious sites - cover shoulders and knees',
      'Join the Dutch concept of "gezelligheid" (coziness/togetherness) - embrace the friendly social atmosphere'
    ],
    culturalDonts: [
      'Don\'t walk or stand in bicycle lanes (red pavement) - cyclists have right of way and will ring their bells aggressively',
      'Don\'t take photos of people in the Red Light District - it\'s disrespectful and sometimes illegal',
      'Don\'t take photos inside coffee shops - these establishments have strict privacy rules',
      'Don\'t expect excessive politeness or small talk - Dutch directness can seem blunt to foreigners',
      'Don\'t assume all coffee shops serve regular coffee - many are cannabis dispensaries with specific rules'
    ]
  },
  youtubeVideo: {
    videoId: "EtxCpMzu1GY"
  }
};

export default amsterdam;
