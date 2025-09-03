import { Destination } from './types';

const athens: Destination = {
    city: 'Athens',
    country: 'Greece',
    continent: 'Europe',
    countryCode: 'gr',
    overallScore: 7.2,
    nightSafety: 6.8,
    publicTransit: 7.4,
    walkingAlone: 7.1,
    tags: ['ancient-history', 'cultural-immersion', 'safe', 'budget-friendly'],
    bgColor: 'bg-blue-25',
    reviewCount: 432,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low-moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 6.8,
        context: 'Athens is generally safe at night for solo women, though certain precautions are advised. Central areas like Plaka, Syntagma, and Kolonaki are well-lit with good police presence. 2025 data shows low violent crime rates, but petty crime like pickpocketing increases at night. Avoid Omonia, Exarchia late at night, and stay alert around Monastiraki and Psyrri. Economic challenges have led to increased street activity, but violent incidents against tourists are rare.'
      },
      publicTransit: {
        score: 7.4,
        context: 'Athens public transport (metro, buses, trams) is generally safe with good security measures. The metro system is modern, clean, and well-monitored with CCTV and transit police. Pickpocketing can occur on crowded lines (especially Line 1 to Piraeus) and tourist routes. Women report feeling safe during daytime travel, though evening services on some bus routes require caution. New security measures implemented in 2024 have improved overall safety.'
      },
      walkingAlone: {
        score: 7.1,
        context: 'Walking alone in Athens is moderately safe with standard urban precautions. Central tourist areas are generally secure during day and early evening. Archaeological sites and main shopping areas have good foot traffic and security. However, economic pressures have increased homelessness and street activity. Stick to main streets after dark, avoid isolated areas, and be aware of surroundings near popular nightlife zones.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Plaka',
          description: 'The historic heart of Athens below the Acropolis remains one of the safest areas with constant tourist police presence. Well-lit pedestrian streets, numerous restaurants and shops create natural surveillance. Pickpocketing can occur due to crowds, but violent crime is extremely rare. Perfect for solo female travelers seeking authentic Greek atmosphere.'
        },
        {
          name: 'Kolonaki',
          description: 'Upscale neighborhood with embassies, designer boutiques, and high-end restaurants. Excellent safety due to wealth concentration, private security, and diplomatic presence. Women report feeling very safe here day and night. Home to many museums and cultural sites with good lighting and foot traffic.'
        },
        {
          name: 'Syntagma',
          description: 'Central square area around Parliament with heavy police presence and tourist infrastructure. Well-lit and busy most hours. While generally safe, be aware of protests and demonstrations that occasionally occur here. Good base for solo travelers with easy metro access.'
        },
        {
          name: 'Koukaki',
          description: 'Trendy residential area near Acropolis Museum, popular with young Athenians and digital nomads. Generally safe with good restaurant scene and authentic local feel. Less touristy than Plaka but still well-patrolled and lit. Great for solo women seeking local experience.'
        },
        {
          name: 'Monastiraki',
          description: 'Historic area near Ancient Agora with vibrant flea market and nightlife. Generally safe during day but requires caution at night due to busy bar scene. Tourist police present, but pickpocketing common in market areas. Stick to main streets after dark.'
        },
        {
          name: 'Thiseio',
          description: 'Scenic neighborhood with excellent Acropolis views and pedestrian walkways. Well-maintained area with good lighting and regular foot traffic. Popular with locals and tourists for evening strolls. Generally very safe for solo women.'
        }
      ],
      caution: [
        'Omonia Square and surrounding streets at night: Higher crime rates, drug activity, and less safe for solo women after dark',
        'Exarchia area after midnight: Alternative/anarchist neighborhood with political tensions and occasional unrest',
        'Piraeus port area at night: Industrial area with reduced lighting and fewer people around',
        'Victoria Square area: Has seen increased crime and should be avoided at night',
        'Metaxourgeio district late at night: Gentrifying area but still has safety concerns after dark'
      ],
      avoid: [
        'Isolated archaeological sites after dark',
        'Empty metro stations late at night',
        'Protest areas during demonstrations',
        'Abandoned buildings and construction sites',
        'Dark alleys in any neighborhood after midnight'
      ]
    },
    accommodations: [
      {
        name: 'Hotel Grande Bretagne',
        type: 'hotel',
        features: ['Luxury 5-star', 'Syntagma Square location', '24/7 security', 'Female-friendly', 'Concierge services'],
        rating: 4.7,
        notes: 'Historic luxury hotel with excellent security and prime central location. Popular with business and leisure travelers.',
        link: 'https://www.grandebretagne.gr/'
      },
      {
        name: 'Athens Backpackers',
        type: 'hostel',
        features: ['Female-only dorms', 'Central Plaka location', 'Rooftop bar', 'Social atmosphere', '24/7 reception'],
        rating: 4.3,
        notes: 'Popular hostel with dedicated female dorms in safe Plaka area. Great for meeting other travelers.',
        link: 'https://www.backpackers.gr/'
      },
      {
        name: 'Student & Travellers Inn',
        type: 'hostel',
        features: ['Women-only floors', 'Near Acropolis', 'Budget-friendly', 'Kitchen facilities', 'Security lockers'],
        rating: 4.1,
        notes: 'Well-established hostel with good safety measures and female-only accommodations.',
        link: 'https://www.studenttravellersinn.com/'
      },
      {
        name: 'Hotel Adonis',
        type: 'hotel',
        features: ['Boutique hotel', 'Plaka location', 'Acropolis views', 'Traditional decor', 'Safe neighborhood'],
        rating: 4.4,
        notes: 'Charming family-run hotel in heart of historic Plaka with traditional Greek hospitality.',
        link: 'https://www.hotel-adonis.gr/'
      },
      {
        name: 'Athens Studios',
        type: 'hostel',
        features: ['Female dorms available', 'Near metro', 'Kitchen access', 'Budget option', 'Basic security'],
        rating: 4.0,
        notes: 'Simple but clean accommodation with female-only options. Good value for budget travelers.',
        link: 'https://www.athenstudios.gr/'
      }
    ],
    alerts: [
      {
        title: 'Strike Activity Alert',
        description: 'Public transport strikes may occur with short notice, affecting metro, buses, and trams',
        location: 'Citywide',
        reportCount: 23,
        severity: 'medium',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Modest dress required for Orthodox churches and monasteries - cover shoulders and knees
• Light, breathable clothing for hot Mediterranean summers
• Comfortable walking shoes essential for ancient sites with uneven surfaces
• Avoid flashy jewelry and keep bags zipped and secure
• Layer for spring/fall weather variations
• Carry a small crossbody bag or secure backpack to deter pickpockets`,
      firstTimers: `• Athens is generally safe for solo women with basic urban precautions
• Learn a few Greek phrases - locals greatly appreciate the effort
• Carry cash as many traditional tavernas don't accept cards
• Save emergency numbers and keep copies of passport separately
• Stay aware of surroundings, especially in crowded tourist areas`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'FreeNow',
        'Athens Transport',
        'Viator'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Athens', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Greece safety insights', rating: 4.0 },
        { name: 'FreeNow', link: 'https://www.free-now.com/gr-en/', description: 'Popular European taxi app with verified drivers available in Athens', rating: 4.3 },
        { name: 'Athens Transport', link: 'https://oasa.gr/', description: 'Official Athens public transport app for metro, buses, trams with real-time info', rating: 4.2 },
        { name: 'Viator', link: 'https://www.viator.com/', description: 'Trusted tours and activities platform for safe group experiences in Athens', rating: 4.4 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Βοήθεια!',
          localLanguage: 'Greek',
          pronunciation: 'vo-EE-thya',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Βοήθεια',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Βοήθεια',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Βοήθεια&client=tw-ob'
          ],
          phonetic: 'Βοήθεια',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Καλέστε την αστυνομία!',
          localLanguage: 'Greek',
          pronunciation: 'ka-LEH-steh teen ah-stee-no-MEE-ah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Καλέστε%20την%20αστυνομία',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Καλέστε%20την%20αστυνομία',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Καλέστε%20την%20αστυνομία&client=tw-ob'
          ],
          phonetic: 'Καλέστε την αστυνομία',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Χρειάζομαι έναν γιατρό.',
          localLanguage: 'Greek',
          pronunciation: 'hree-AH-zo-meh EH-nahn yah-TROW',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Χρειάζομαι%20έναν%20γιατρό',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Χρειάζομαι%20έναν%20γιατρό',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Χρειάζομαι%20έναν%20γιατρό&client=tw-ob'
          ],
          phonetic: 'Χρειάζομαι έναν γιατρό',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Πού είναι το πλησιέστερο νοσοκομείο?',
          localLanguage: 'Greek',
          pronunciation: 'POO EE-neh toh plee-see-EH-steh-ro no-so-ko-MEE-o',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Πού%20είναι%20το%20πλησιέστερο%20νοσοκομείο',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Πού%20είναι%20το%20πλησιέστερο%20νοσοκομείο',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Πού%20είναι%20το%20πλησιέστερο%20νοσοκομείο&client=tw-ob'
          ],
          phonetic: 'Πού είναι το πλησιέστερο νοσοκομείο',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Έχω χαθεί.',
          localLanguage: 'Greek',
          pronunciation: 'EH-ho ha-THEE',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Έχω%20χαθεί',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Έχω%20χαθεί',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Έχω%20χαθεί&client=tw-ob'
          ],
          phonetic: 'Έχω χαθεί',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Παρακαλώ αφήστε με ήσυχη.',
          localLanguage: 'Greek',
          pronunciation: 'pa-ra-ka-LOW ah-FEE-steh meh EE-see-hee',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Παρακαλώ%20αφήστε%20με%20ήσυχη',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Παρακαλώ%20αφήστε%20με%20ήσυχη',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Παρακαλώ%20αφήστε%20με%20ήσυχη&client=tw-ob'
          ],
          phonetic: 'Παρακαλώ αφήστε με ήσυχη',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Νιώθω ανασφάλεια.',
          localLanguage: 'Greek',
          pronunciation: 'nee-OH-tho ah-nah-SFAH-lee-ah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Νιώθω%20ανασφάλεια',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Νιώθω%20ανασφάλεια',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Νιώθω%20ανασφάλεια&client=tw-ob'
          ],
          phonetic: 'Νιώθω ανασφάλεια',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Μπορείτε να με βοηθήσετε?',
          localLanguage: 'Greek',
          pronunciation: 'bo-REE-teh nah meh vo-ee-THEE-seh-teh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Μπορείτε%20να%20με%20βοηθήσετε',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=el-GR-AthinaNeural&text=Μπορείτε%20να%20με%20βοηθήσετε',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=el&q=Μπορείτε%20να%20με%20βοηθήσετε&client=tw-ob'
          ],
          phonetic: 'Μπορείτε να με βοηθήσετε',
          voiceInfo: {
            voiceName: 'el-GR-AthinaNeural',
            gender: 'Female',
            displayName: 'Athina (Greek Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['el-GR'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: 'Generally casual and relaxed. Modest dress required for Orthodox churches and monasteries - cover shoulders, arms, and legs. Many religious sites provide cover-ups. Beachwear only for beaches and pools. Greeks dress up for evening dining and nightlife.',
      behaviorNorms: [
        'Greeks are warm and hospitable - accept invitations graciously',
        'Personal space is smaller than in Northern European cultures',
        'Lunch is late (2-3 PM), dinner even later (9-11 PM)',
        'Coffee culture is strong - take time to enjoy frappe or Greek coffee',
        'Tipping is customary (5-10% at restaurants, round up for taxis)',
        'Learn basic Greek phrases - locals greatly appreciate the effort',
        'Family is extremely important in Greek culture',
        'Greeks are expressive and talk with their hands',
        'Remove shoes when entering homes',
        'Don\'t photograph military installations or personnel'
      ],
      perception: 'Solo female travelers are generally welcomed and respected in Athens. Greek culture is hospitable and family-oriented, though some traditional attitudes remain. Catcalling is uncommon but can occur. Most locals are helpful and protective of solo women travelers, especially older generations who will offer assistance.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-June', 'September-October'],
      events: 'Spring and fall offer pleasant weather and fewer crowds. Summer is hot and crowded but safe. Winter is mild but some outdoor attractions have reduced hours.'
    },
    emergencyInfo: {
      police: '100',
      fire: '199',
      medical: '166',
      general: '112',
      touristPolice: '171'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.0875,
        eur: 1.0000,
        gbp: 0.8521
      },
      exchangeTips: [
        'Use major bank ATMs (Alpha Bank, National Bank, Eurobank) for best rates and security',
        'Cards widely accepted at hotels, restaurants, and shops - Visa and Mastercard preferred',
        'Carry cash for traditional tavernas, street food, and small shops in Plaka',
        'Avoid exchange kiosks near tourist sites - rates are typically 5-8% worse',
        'Banking hours: 8 AM-2:30 PM Monday-Thursday, 8 AM-2 PM Friday, closed weekends',
        'Airport exchange offices charge high fees - use city ATMs instead',
        'Tipping culture: 5-10% in restaurants, round up taxi fares, cash preferred',
        'Many archaeological sites and museums require cash for tickets under €20',
        'Keep receipts for tax-free shopping on purchases over €50 for non-EU visitors'
      ],
      scamWarnings: [
        'Use bank ATMs for best exchange rates - avoid street exchange kiosks',
        'Many traditional tavernas are cash-only, especially in Plaka',
        'Tipping in cash is preferred even when paying by card'
      ]
    },
    scamWarnings: [
      {
        title: 'Taxi Meter Scams',
        description: 'Some taxis may claim meters are broken or refuse to use them. Insist on meter or agree on price beforehand.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Tourist Menus',
        description: 'Tourist-area restaurants may have inflated prices. Check menus posted outside and compare with local recommendations.',
        severity: 'low'
      },
      {
        title: 'Fake Police Checkpoints',
        description: 'Rare but occasionally reported. Real police will have proper identification and won\'t ask for money.',
        severity: 'low'
      },
      {
        title: 'Aggressive Street Vendors',
        description: 'Vendors near Acropolis and Plaka can be persistent. Firm "no" usually works, avoid engaging.',
        severity: 'low'
      }
    ],
    languages: ['Greek', 'English (widely spoken in tourist areas)', 'German', 'French'],
    daytimeSafetyPercent: 81.4,
    nighttimeSafetyPercent: 70.2,
    safetySourceName: 'Numbeo 2025 & Athens Tourism Police',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Athens',
    redFlags: [
      { label: 'Pickpocketing in Tourist Areas', frequency: 'Common', icon: 'Hand' },
      { label: 'Metro/Transport Theft', frequency: 'Occasional', icon: 'Train' },
      { label: 'Taxi Overcharging', frequency: 'Occasional', icon: 'Car' },
      { label: 'Street Vendor Harassment', frequency: 'Occasional', icon: 'Users' }
    ],
    culturalDos: [
      'Learn basic Greek greetings',
      'Dress modestly in churches',
      'Accept Greek hospitality graciously',
      'Try traditional tavernas',
      'Respect Orthodox traditions'
    ],
    culturalDonts: [
      'Don\'t refuse offered food/drink',
      'Don\'t photograph military sites',
      'Don\'t ignore dress codes at religious sites',
      'Don\'t be impatient with Greek time',
      'Don\'t skip the afternoon coffee ritual'
    ],
    womensConfidenceScore: {
      score: 72.8,
      source: 'Numbeo 2025 & Travel Ladies Community',
      sourceUrl: 'https://www.numbeo.com/crime/in/Athens'
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'Athens Tourism Board 2025', sourceUrl: 'https://www.visitgreece.gr/en/greek_islands/athens' },
      { label: 'Nightlife', confidence: 65, source: 'Solo Female Travel Greece 2025', sourceUrl: 'https://www.solofemaleguide.com/greece' },
      { label: 'Public Transport', confidence: 78, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Athens' },
      { label: 'Dining Alone', confidence: 88, source: 'Travel Ladies Athens 2025', sourceUrl: 'https://travelladies.app/safety/greece/athens' }
    ],
    sexualHarassmentData: {
      prevalence: 'low-moderate',
      commonLocations: ['Crowded metro during rush hour', 'Tourist areas with street vendors', 'Some nightlife areas in Psyrri/Gazi', 'Beach areas during summer'],
      reportingRate: 38,
      legalProtection: 'Strong legal framework. Greece has comprehensive anti-harassment laws updated in 2019. Tourist police specially trained to assist female travelers. EU legal protections apply.',
      supportResources: [
        'Tourist Police: 171 (English-speaking officers available)',
        'Emergency Services: 112 (EU standard emergency number)',
        'SOS Help Line: 15900 (24/7 crisis support)',
        'Women\'s Support Center Greece: +30 210 380 2685',
        'U.S. Embassy Athens: +30 210 721 2951 (American citizens)',
        'Rape Crisis Center Athens: +30 210 330 0683'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Evangelismos General Hospital',
          address: '45-47 Ipsilantou Street, Athens 10676',
          phone: '+30 213 204 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care', 'International Patients'],
          link: 'https://www.evangelismos-hospital.gr/'
        },
        {
          name: 'Athens Medical Center',
          address: '5-7 Distomou Street, Marousi, Athens 15125',
          phone: '+30 210 686 9000',
          emergency: true,
          specialties: ['Private Hospital', 'English-speaking staff', 'Women\'s Health'],
          link: 'https://www.iatriko.gr/en/'
        },
        {
          name: 'KAT General Hospital',
          address: '2 Nikis Street, Kifisia, Athens 14561',
          phone: '+30 213 208 8000',
          emergency: true,
          specialties: ['Trauma', 'Emergency Medicine', 'Orthopedics'],
          link: 'https://www.kat-hospital.gr/'
        }
      ],
      pharmacies: [
        {
          name: 'Pharmacy Syntagma',
          address: '1 Syntagma Square, Athens 10563',
          phone: '+30 210 322 4506',
          hours: 'Mon-Fri 8:00-20:00, Sat 8:00-15:00',
          emergency: false,
          link: 'https://www.pharmacy-syntagma.gr/'
        },
        {
          name: 'Pharmacy Kolonaki',
          address: '15 Voukourestiou Street, Athens 10671',
          phone: '+30 210 361 3051',
          hours: 'Mon-Fri 8:00-20:00, Sat 8:00-15:00',
          emergency: false,
          link: 'https://www.pharmacy-kolonaki.gr/'
        },
        {
          name: '24-Hour Pharmacy Omonia',
          address: '8 Agiou Konstantinou Street, Athens 10431',
          phone: '+30 210 523 0740',
          hours: '24 hours',
          emergency: true,
          link: 'https://www.24hour-pharmacy.gr/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Evangelismos: +30 213 204 1000',
          'Athens Medical Center Women\'s Clinic: +30 210 686 9000',
          'Metropolitan Hospital Women\'s Health: +30 210 480 9000'
        ],
        gynecologists: [
          'Dr. Maria Papadopoulou - Athens Medical Center: +30 210 686 9000',
          'Dr. Eleni Georgakopoulou - Evangelismos Hospital: +30 213 204 1000'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency contraception available at hospital emergency departments',
          'Family planning services at public health centers'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands available in shopping areas',
          'Free products available at some public facilities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Greece',
        'COVID-19 vaccination recommended',
        'Routine vaccines should be up to date',
        'Hepatitis A recommended for some travelers'
      ],
      healthRisks: [
        'Sun exposure - use high SPF sunscreen',
        'Dehydration in summer heat',
        'Minor stomach upset from rich Greek food',
        'Allergies during spring season'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Athens',
          address: '91 Vasilisis Sofias Avenue, Athens 10160',
          phone: '+30 210 721 2951',
          link: 'https://gr.usembassy.gov/'
        },
        {
          name: 'British Embassy Athens',
          address: '1 Ploutarchou Street, Athens 10675',
          phone: '+30 210 727 2600',
          link: 'https://www.gov.uk/world/organisations/british-embassy-athens'
        },
        {
          name: 'German Embassy Athens',
          address: '3 Karaoli & Dimitriou Street, Athens 10675',
          phone: '+30 210 728 5111',
          link: 'https://griechenland.diplo.de/'
        },
        {
          name: 'French Embassy Athens',
          address: '7 Vasilisis Sofias Avenue, Athens 10671',
          phone: '+30 210 339 1000',
          link: 'https://gr.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Athens',
          address: '29 Vasileos Konstantinou Avenue, Athens 11635',
          phone: '+30 210 721 4885',
          link: 'https://www.exteriores.gob.es/embajadas/atenas'
        },
        {
          name: 'Australian Embassy Athens',
          address: 'Level 6, Thon Building, Kifissias Avenue & Alexandras Avenue, Athens 11523',
          phone: '+30 210 870 4000',
          link: 'https://greece.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Athens',
          address: '4 Ioannou Gennadiou Street, Athens 10675',
          phone: '+30 210 727 3400',
          link: 'https://www.canadainternational.gc.ca/greece-grece/'
        },
        {
          name: 'Netherlands Embassy Athens',
          address: '5-7 Vasileos Konstantinou Avenue, Athens 11635',
          phone: '+30 210 725 4900',
          link: 'https://www.netherlandsembassy.gr/'
        },
        {
          name: 'Danish Embassy Athens',
          address: '11 Vasilissis Sofias Avenue, Athens 10674',
          phone: '+30 210 725 7400',
          link: 'https://graekenland.um.dk/'
        },
        {
          name: 'Swiss Embassy Athens',
          address: '2 Iasiou Street, Athens 11521',
          phone: '+30 210 723 0364',
          link: 'https://www.eda.admin.ch/athens'
        },
        {
          name: 'Indian Embassy Athens',
          address: '3-5 Kleanthous Street, Athens 10672',
          phone: '+30 210 721 6227',
          link: 'https://www.indianembassyathens.gov.in/'
        }
      ],
      womensRights: [
        'Strong EU-compliant legal protections for women',
        'Equal employment and pay rights guaranteed',
        'Comprehensive anti-discrimination laws',
        'Legal abortion services available',
        'Protection against domestic violence and harassment',
        'Women\'s rights organizations active and accessible'
      ],
      legalSupport: [
        'Greek Bar Association: +30 210 382 1777 (lawyer referrals)',
        'Legal Aid Greece: +30 210 330 5000',
        'Women\'s Legal Support: +30 210 380 2685',
        'EU Citizens\' Rights in Greece: +30 210 339 1000'
      ],
      reportingProcedures: [
        'Report crimes to local police at 100 or tourist police at 171',
        'Emergency services: 112 (EU standard)',
        'Request English-speaking officer if needed',
        'Keep copies of police reports',
        'Contact embassy for serious incidents or legal assistance'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Athens Metro',
          safety: 8.2,
          recommendations: ['Use official metro app', 'Avoid empty carriages late at night', 'Keep belongings secure'],
          companies: ['STASY'],
          link: 'https://www.stasy.gr/en/'
        },
        {
          type: 'Beat (Ride-sharing)',
          safety: 8.5,
          recommendations: ['Local alternative to Uber', 'Good for avoiding taxi scams', 'Track rides in app'],
          companies: ['Beat'],
          link: 'https://thebeat.co/'
        },
        {
          type: 'Official Taxis',
          safety: 7.5,
          recommendations: ['Insist on meter', 'Get official receipt', 'Use taxi ranks when possible'],
          companies: ['Athens Taxi'],
          link: 'https://www.athenstaxi.gr/'
        },
        {
          type: 'Public Buses',
          safety: 7.8,
          recommendations: ['Validate tickets', 'Watch for pickpockets', 'Use day passes for convenience'],
          companies: ['OSY'],
          link: 'https://www.osy.gr/'
        }
      ],
      nightTravel: {
        safety: 6.8,
        warnings: [
          'Some metro stations less safe after midnight',
          'Certain bus routes avoid after 11 PM',
          'Taxi drivers may overcharge tourists at night',
          'Walking alone in non-central areas not recommended'
        ],
        alternatives: [
          'Use Beat ride-sharing for late night transport',
          'Metro runs until 2 AM on weekends',
          'Stay in central areas with good lighting',
          'Travel with others when possible'
        ]
      },
      verifiedProviders: [
        {
          name: 'STASY (Athens Metro)',
          type: 'Metro System',
          contact: '+30 210 679 2399',
          safety: 8.2
        },
        {
          name: 'Beat',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.5
        },
        {
          name: 'OSY Public Buses',
          type: 'Public Transport',
          contact: '+30 210 883 6076',
          safety: 7.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at most hotels',
        'Electronic key card access',
        'CCTV in common areas',
        'Safe deposit boxes',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Plaka',
        'Kolonaki',
        'Syntagma',
        'Koukaki',
        'Thiseio',
        'Monastiraki'
      ],
      womensOnly: [
        {
          name: 'Athens Backpackers',
          type: 'Hostel',
          features: ['Female-only dorms', 'Central Plaka location', 'Social atmosphere'],
          rating: 4.3
        },
        {
          name: 'Student & Travellers Inn',
          type: 'Hostel',
          features: ['Women-only floors', 'Budget-friendly', 'Security lockers'],
          rating: 4.1
        }
      ],
      userReviews: [
        {
          rating: 4.2,
          safety: 8.0,
          comments: 'Felt safe in Plaka area. Great location and helpful staff.',
          date: '2025-01-15'
        },
        {
          rating: 4.4,
          safety: 8.5,
          comments: 'Kolonaki neighborhood very secure. Easy metro access.',
          date: '2025-01-12'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally reliable in Athens',
        'Free WiFi available in many cafes and metro stations',
        'Use VPN for sensitive transactions',
        'Be cautious with public WiFi in tourist areas'
      ],
      digitalScams: [
        'Fake booking websites for popular attractions',
        'Romance scams on dating apps',
        'Fake taxi booking apps - use official Beat app',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Greece',
        'ExpressVPN - good for streaming',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'EU GDPR protections apply in Greece',
        'Use secure payment methods',
        'Keep document copies in secure cloud storage',
        'Avoid sharing personal information with strangers'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Metro Line 1 to Piraeus',
          date: '2025-01-18',
          description: 'Multiple reports of pickpocketing on crowded tourist route',
          severity: 'medium'
        },
        {
          type: 'Taxi Overcharging',
          location: 'Airport to city center',
          date: '2025-01-16',
          description: 'Tourists charged excessive fares, meter not used',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use Beat app instead of street taxis to avoid overcharging',
          author: 'Solo Traveler',
          date: '2025-01-20',
          upvotes: 156
        },
        {
          tip: 'Keep valuables in front pockets on metro, especially Line 1',
          author: 'Local Resident',
          date: '2025-01-19',
          upvotes: 143
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Greece is generally safe for travelers. Exercise normal precautions and be aware of petty crime in tourist areas. Occasional strikes may disrupt transportation.',
      reason: 'Generally safe with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/greece-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Rich history and culture with good tourist infrastructure',
        'Stay in central neighborhoods like Plaka or Kolonaki',
        'Learn basic Greek phrases - locals appreciate the effort',
        'Economic challenges may affect some services, but tourism areas well-maintained'
      ]
    },
    crimeStatistics: {
      violentCrime: 8.4, // per 100,000 (2024 data showing stability)
      propertyCrime: 2100, // per 100,000 (2024 data - moderate, mainly pickpocketing)
      sexualAssault: 5.2, // per 100,000 (2024 data - low but underreported)
      kidnapping: 0.1, // per 100,000 (2024 data - extremely rare)
      source: 'Greek Police Statistics 2024 & Numbeo 2025',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft crossbody bag',
        'RFID-blocking wallet',
        'Portable charger',
        'Personal safety alarm',
        'Door stop alarm for accommodations'
      ],
      safetyApps: [
        {
          name: 'Beat',
          purpose: 'Ride-sharing to avoid taxi scams',
          rating: 4.5
        },
        {
          name: 'Athens Metro',
          purpose: 'Official public transport app',
          rating: 4.3
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community',
          rating: 4.4
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Tourist Police',
          number: '171',
          type: 'Tourist Assistance (English)'
        },
        {
          name: 'Police',
          number: '100',
          type: 'Regular Police'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Athens Transportation',
        description: 'Use Athens Metro for efficient travel and Beat app for taxis. Buy day passes for metro/bus combinations. Avoid unofficial taxis.',
        severity: 'medium',
        sourceName: 'Athens Transport Organization',
        sourceUrl: 'https://www.stasy.gr/en/'
      },
      {
        title: 'Explore Beyond Tourist Areas',
        description: 'Visit local neighborhoods like Koukaki and Exarchia (during day) for authentic experiences. Traditional tavernas away from Plaka offer better value.',
        severity: 'low',
        sourceName: 'Athens Tourism Board',
        sourceUrl: 'https://www.visitgreece.gr/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$45 - $85 USD / day',
        description: 'Athens offers good value with excellent food, accommodation, and transport options.',
        tip: 'Budget travelers can live comfortably while mid-range provides good comfort and safety.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$15-30',
          safetyNote: 'Choose hostels in Plaka or Kolonaki for best safety',
          safetyLevel: 'medium-high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$40-80',
          safetyNote: 'Good security and central locations available',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$100+',
          safetyNote: 'Excellent security and concierge services',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Metro/Public Transport',
          cost: '$1-3/day',
          safetyDescription: 'Safe and efficient. Day passes available.',
          safetyLevel: 'high'
        },
        {
          method: 'Beat/Taxis',
          cost: '$5-15/ride',
          safetyDescription: 'Beat app safer than street taxis',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in central areas during day',
          safetyLevel: 'medium-high'
        }
      ],
      budgetTips: [
        'Use metro day passes for unlimited travel',
        'Eat at traditional tavernas away from tourist areas',
        'Many archaeological sites offer combination tickets',
        'Visit free sites like Changing of Guard, National Garden',
        'Shop at local markets for fresh food and souvenirs'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Learn basic Greek greetings like "Yasou" (hello) and "Efharisto" (thank you) - Greeks are very welcoming to those who try',
      'Dress modestly when visiting churches and monasteries - cover shoulders, arms, and knees (women should wear long pants/skirts)',
      'Respect Orthodox Christian traditions - remove hats, speak quietly in religious sites, and show reverence',
      'Embrace Greek hospitality gracefully - if offered coffee or food, it\'s polite to accept at least a little',
      'Adapt to Greek dining hours - dinner is served very late (9-11pm), so plan accordingly'
    ],
    culturalDonts: [
      'Don\'t point feet toward altars in Orthodox churches - it\'s considered disrespectful',
      'Don\'t wave with an open palm (moutza gesture) - it\'s considered offensive in Greek culture',
      'Don\'t refuse Greek hospitality abruptly - declining food or drinks can be seen as rude',
      'Don\'t discuss sensitive political topics unless you know someone well - Greeks are passionate about politics',
      'Don\'t wear revealing clothing in religious sites - modest dress is strictly required'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default athens;