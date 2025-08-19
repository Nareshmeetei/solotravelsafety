import { Destination } from './types';

const vienna: Destination = {
    city: 'Vienna',
    country: 'Austria',
    continent: 'Europe',
    countryCode: 'at',
    overallScore: 8.6,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.4,
        context: 'Vienna is exceptionally safe at night with 2025 data showing women rating overall safety at 4.4/5. Solo female travelers consistently report "absolutely safe at any time of day or night." Numbeo 2025 shows Safety Index of 71.67 and Crime Index of just 28.33. Recent traveler testimonials: "I felt very safe throughout my trip to Vienna" and "Vienna feels incredibly safe." Some areas to avoid after dark include certain parts of districts 10, 15, and 16, plus Hauptbahnhof area.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Vienna\'s public transport ranks among world\'s safest with 2025 women reporting 98% confidence. The comprehensive network of trams, buses, U-Bahn, and trains operates with extensive CCTV, well-lit stations, and frequent security presence. Wiener Linien maintains excellent safety standards. Recent travelers confirm: "efficient public transport" and "safe even in early morning hours." Night services available with maintained safety standards.'
      },
      walkingAlone: {
        score: 8.5,
        context: 'Walking alone in Vienna is extremely safe with 2025 data showing women rate walkability safety at 4.4/5. Recent testimonials: "absolutely safe at any time" and "I go out alone all the time without problems." Austria ranks #8 globally for women\'s safety (Women Peace Security Index 2023-24). While generally excellent, avoid isolated areas in districts 10, 15, and 16 at night. Well-lit central areas remain safe 24/7.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Innere Stadt (1st District)',
          description: 'Vienna\'s historic heart and safest area for solo women travelers. UNESCO-listed Old Town with excellent police presence, well-lit streets, and comprehensive CCTV coverage. Recent 2025 reviews: "felt completely safe walking alone at night" and "city center has visible police officers everywhere." Home to major attractions like Stephansdom and Hofburg. Very low crime rates with minor pickpocketing only concern in crowded tourist spots.'
        },
        {
          name: 'Mariahilf (6th District)',
          description: 'Trendy shopping district centered around Mariahilfer Straße, Vienna\'s main shopping street. Excellent for solo women with vibrant atmosphere, good public transport connections, and high foot traffic providing natural safety. Many solo travelers choose this area for accommodation due to its central location and safety. Well-maintained with good lighting and frequent police patrols.'
        },
        {
          name: 'Neubau (7th District)',
          description: 'Artistic and intellectual district with trendy cafes, galleries, and boutiques. Very safe for solo women with young, educated population and active street life. The MuseumsQuartier area is particularly safe and well-monitored. Excellent for solo dining and cultural exploration with welcoming, progressive atmosphere.'
        },
        {
          name: 'Leopoldstadt (2nd District)',
          description: 'Diverse district home to the famous Prater amusement park. Generally safe for solo women during day and evening hours. The area near the Danube Canal is well-lit and popular with locals. Some areas closer to the train tracks require more caution at night, but central Leopoldstadt around Prater and Augarten is very safe.'
        },
        {
          name: 'Wieden (4th District)',
          description: 'Upscale residential area known for its proximity to Belvedere Palace and Karlskirche. Very safe for solo women with well-maintained streets, good lighting, and higher police presence due to tourist attractions. Popular with families and professionals, creating a secure, welcoming environment.'
        },
        {
          name: 'Josefstadt (8th District)',
          description: 'Quiet, residential district perfect for solo travelers seeking peaceful accommodation. Described as "quaint and peaceful, ideal for families" with easy access to city center. Very low crime rates and strong community feel make it excellent for women traveling alone.'
        }
      ],
      caution: [
        'Favoriten (10th District) - some areas around Hauptbahnhof and Reumannplatz require caution at night due to increased foot traffic and occasional pickpocketing',
        'Ottakring (16th District) - areas around Ottakring U-Bahn station and Gürtel Street can be sketchy at night with occasional drunk individuals',
        'Simmering (11th District) - less touristy area with some industrial sections that should be avoided at night',
        'Hernals (17th District) - certain areas around Ottakringer Straße may have occasional theft incidents',
        'Red light districts in Stuwerviertel and parts of Gürtel - not dangerous but best avoided at night'
      ],
      avoid: [
        'Deserted areas around major train stations (Hauptbahnhof, Westbahnhof, Praterstern) late at night',
        'Industrial areas in outer districts after dark',
        'Isolated park areas without lighting after midnight',
        'Any location where you feel unsafe - trust your instincts and seek help immediately'
      ]
    },
    accommodations: [
      {
        name: 'Wombat\'s The City Hostel Vienna - Naschmarkt',
        type: 'hostel',
        features: ['Female-only dorms', 'Prime location', '24/7 reception', 'CCTV surveillance', 'Solo traveler friendly'],
        rating: 4.6,
        notes: 'Rated best hostel for female solo travelers in Vienna. Located in trendy Mariahilf district near Naschmarkt. Excellent safety features and social atmosphere for meeting other travelers.',
        link: 'https://www.wombats-hostels.com/vienna/the-naschmarkt/'
      },
      {
        name: 'Vienna Boutique Hostel',
        type: 'hostel',
        features: ['Female-only options', 'Artsy Mariahilf location', 'Sophisticated atmosphere', 'High security'],
        rating: 4.5,
        notes: 'Perfect blend of safety and sophistication in the artistic Mariahilf neighborhood. Highly rated by solo female travelers for its secure environment and stylish design.',
        link: 'https://www.viennaboutiquehostel.com/'
      },
      {
        name: 'Hotel Sacher Wien',
        type: 'hotel',
        features: ['Historic luxury', 'Prime Innere Stadt location', '24/7 concierge', 'Highest security standards'],
        rating: 4.8,
        notes: 'Iconic luxury hotel in heart of Vienna\'s safest district. World-renowned for exceptional service and security. Perfect for solo women seeking ultimate comfort and safety.',
        link: 'https://www.sacher.com/en/hotel-sacher-vienna/'
      },
      {
        name: 'JO&JOE Vienna',
        type: 'hostel',
        features: ['Female dorms available', 'Modern design', 'Social spaces', 'Excellent security'],
        rating: 4.4,
        notes: 'Contemporary hostel rated best for female solo travelers. Combines safety with vibrant social atmosphere and modern amenities.',
        link: 'https://www.joandjoe.com/en/hostels/vienna'
      },
      {
        name: 'myNext - Campus Hostel',
        type: 'hostel',
        features: ['Female-only floors', 'University area', 'Safe neighborhood', '24/7 security'],
        rating: 4.3,
        notes: 'Located in safe university district with excellent security measures. Popular with solo female travelers for its peaceful environment and safety features.',
        link: 'https://mynext.at/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Vienna weather changes seasonally - layer clothing for comfort year-round
• Winter requires warm coats, scarves, and waterproof boots (temperatures often below freezing)
• Summer: light layers, comfortable walking shoes for cobblestone streets
• Dress smart-casual for restaurants, theaters, and cultural sites - Viennese value neat appearance
• Avoid flashy jewelry and keep bags secure in crowded tourist areas
• Always carry a charged phone and emergency contacts`,
      firstTimers: `• Vienna is perfect for first-time solo women travelers - extremely beginner-friendly
• Save emergency numbers (112 general, 133 police, 144 medical, 122 fire)
• Download WienMobil app for seamless public transport navigation
• Most locals speak English, especially in tourist areas and among younger people
• Trust your instincts - if something feels unsafe, seek help in shops, cafes, or approach police
• Stay in central districts (1st-9th) for best safety and accessibility
• Is Vienna safe for solo female travellers? Absolutely - it's one of Europe's safest capitals`,
      apps: [
        'WienMobil',
        'Qando Vienna',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me',
        'Citymapper Vienna'
      ],
      appLinks: [
        { name: 'WienMobil', link: 'https://www.wienerlinien.at/wienmobil-app', description: 'Official Vienna public transport app with real-time updates' },
        { name: 'Qando Vienna', link: 'https://www.qando.at/', description: 'Comprehensive Vienna transport and city information' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion specifically for solo women travelers' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community with Vienna-specific safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for Vienna neighborhoods' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features for Vienna' },
        { name: 'Citymapper Vienna', link: 'https://citymapper.com/', description: 'Smart urban navigation for Vienna\'s transport system' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hilfe!',
          localLanguage: 'German'
        },
        {
          english: 'Call the police!',
          local: 'Rufen Sie die Polizei!',
          localLanguage: 'German'
        },
        {
          english: 'I need a doctor.',
          local: 'Ich brauche einen Arzt.',
          localLanguage: 'German'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Wo ist das nächste Krankenhaus?',
          localLanguage: 'German'
        },
        {
          english: 'I am lost.',
          local: 'Ich bin verlaufen.',
          localLanguage: 'German'
        },
        {
          english: 'Please leave me alone.',
          local: 'Lassen Sie mich bitte in Ruhe.',
          localLanguage: 'German'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ich fühle mich unsicher.',
          localLanguage: 'German'
        },
        {
          english: 'Can you help me?',
          local: 'Können Sie mir helfen?',
          localLanguage: 'German'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Vienna values neat, smart-casual appearance, especially in restaurants, theaters, and cultural venues. Winter requires warm, layered clothing with proper boots for cobblestone streets. Summer calls for light, breathable fabrics with comfortable walking shoes. Avoid overly casual attire in upscale establishments - Austrians appreciate well-dressed visitors.',
      behaviorNorms: [
        'Greet with polite "Guten Tag" (Good day) or "Grüß Gott" (traditional Austrian greeting)',
        'Use formal titles and "Sie" (formal you) until invited to use informal "du"',
        'Be punctual - Austrians highly value timeliness for all appointments',
        'Keep conversations quiet on public transport and respect personal space',
        'Wait to be seated at restaurants and maintain proper table manners',
        'Remove shoes when entering private homes',
        'Avoid loud behavior or public displays that draw attention',
        'Respect cultural sites and dress appropriately for churches and museums'
      ],
      perception: 'Solo female travelers are extremely common and fully accepted in Vienna. Austria ranks #8 globally for women\'s safety (Women Peace & Security Index 2023-24). Is Vienna safe for solo female travellers? Absolutely - locals are respectful, helpful, and accustomed to solo women visitors. The city has a progressive, welcoming attitude toward independent women travelers, with excellent infrastructure supporting safe solo exploration.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '133', fire: '122', medical: '144', general: '112'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.1737,
        eur: 1.0000,
        gbp: 0.8732
      },
      scamWarnings: [
        'Use official ATMs at banks (Bank Austria, Erste Bank, Raiffeisen) for best exchange rates',
        'Avoid exchanging money at airports or tourist areas where rates are poor',
        'Be cautious of "dynamic currency conversion" - always choose to pay in euros',
        'Watch for fake charity collectors or petition signers who may pickpocket',
        'Verify taxi meters are running - some drivers may overcharge tourists'
      ]
    },
    usefulTips: [
      {
        title: 'Use Public Transport for Safety and Convenience',
        description: 'Vienna\'s public transport is safe, reliable, and well-lit at night. Prefer trams, buses, and the U-Bahn over walking alone late at night.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/austria/vienna'
      },
      {
        title: 'Stay in Central Districts',
        description: 'Choose accommodation in central areas like Innere Stadt, Mariahilf, or Neubau for easy access to attractions and enhanced safety.',
        severity: 'low',
        sourceName: 'HousingAnywhere',
        sourceUrl: 'https://housinganywhere.com/Vienna--Austria/areas-to-avoid-in-vienna'
      },
      {
        title: 'Be Aware of Pickpockets in Tourist Spots',
        description: 'Pickpocketing is rare but can occur in crowded places like Stephansplatz, public transport, and markets. Keep your belongings secure.',
        severity: 'low',
        sourceName: 'Numbeo',
        sourceUrl: 'https://www.numbeo.com/crime/in/Vienna'
      },
      {
        title: 'Trust Your Instincts and Avoid Aggressive Beggars',
        description: 'If approached by aggressive beggars or scammers, politely decline and walk away. Report any suspicious activity to local authorities.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/austria/vienna'
      },
      {
        title: 'Download the WienMobil App',
        description: 'The WienMobil app helps you navigate Vienna\'s public transport and provides real-time safety and route information.',
        severity: 'low',
        sourceName: 'WienMobil',
        sourceUrl: 'https://www.wienerlinien.at/wienmobil-app'
      }
    ],
    languages: ['German', 'English (widely spoken)'],
    daytimeSafetyPercent: 88.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 82.0, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Vienna',
    womensConfidenceScore: {
      score: 82.0, // Numbeo 2025, Travel Ladies 2025
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 97,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 90,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 98,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 95,
        source: '',
        sourceUrl: ''
      }
    ],
    // Red flags based on Numbeo 2025, Travel Ladies, and local safety advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Vienna
    // https://travelladies.app/safety/austria
    // https://housinganywhere.com/Vienna--Austria/areas-to-avoid-in-vienna
    redFlags: [
      {
        label: 'Pickpocketing in Crowded Areas & Transit',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Scams (Fake Police, ATM, Charity)',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Street Harassment (Catcalling, Staring)',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      },
      {
        label: 'Bike Theft',
        frequency: 'Rare',
        icon: 'Bike',
      },
    ],
  culturalSensitivity: {
    culturalDos: [
      'Greet with a polite "Guten Tag" and use formal titles.',
      'Be punctual for meetings and public transport.',
      'Respect quiet zones and personal space.',
      'Dress neatly, especially in restaurants and theaters.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about Austria\'s history or politics."
    ]
  },
  scamWarnings: [],
  legalResources: {
      embassy: {
        name: 'U.S. Embassy Vienna',
        address: 'Boltzmanngasse 16, 1090 Vienna',
        phone: '+43 1 313 39 0',
        email: 'viennaACS@state.gov',
        emergency: '+43 1 313 39 0',
        link: 'https://at.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Vienna',
          address: 'Boltzmanngasse 16, 1090 Vienna',
          phone: '+43 1 313 39 0',
          link: 'https://at.usembassy.gov/'
        },
        {
          name: 'British Embassy Vienna',
          address: 'Jaurèsgasse 12, 1030 Vienna',
          phone: '+43 1 716 13 0',
          link: 'https://www.gov.uk/world/organisations/british-embassy-vienna'
        },
        {
          name: 'German Embassy Vienna',
          address: 'Gaudenzdorfer Gürtel 95, 1120 Vienna',
          phone: '+43 1 711 54 0',
          link: 'https://wien.diplo.de/'
        },
        {
          name: 'French Embassy Vienna',
          address: 'Technikerstrasse 2, 1040 Vienna',
          phone: '+43 1 502 75 0',
          link: 'https://at.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Vienna',
          address: 'Argentinierstrasse 34, 1040 Vienna',
          phone: '+43 1 505 57 88',
          link: 'https://www.exteriores.gob.es/embajadas/viena'
        },
        {
          name: 'Australian Embassy Vienna',
          address: 'Mattiellistrasse 2-4, 1040 Vienna',
          phone: '+43 1 506 74 0',
          link: 'https://austria.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Vienna',
          address: 'Laurenzerberg 2, 1010 Vienna',
          phone: '+43 1 531 38 3000',
          link: 'https://www.canadainternational.gc.ca/austria-autriche/'
        },
        {
          name: 'Netherlands Embassy Vienna',
          address: 'Opernring 5, 1010 Vienna',
          phone: '+43 1 589 39 200',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/austria'
        },
        {
          name: 'Danish Embassy Vienna',
          address: 'Führichgasse 6, 1010 Vienna',
          phone: '+43 1 512 79 04',
          link: 'https://oesterreich.um.dk/en'
        },
        {
          name: 'Austrian Government Services',
          address: 'Multiple locations throughout Vienna',
          phone: '+43 1 711 00 0',
          link: 'https://www.oesterreich.gv.at/'
        },
        {
          name: 'Swiss Embassy Vienna',
          address: 'Prinz-Eugen-Strasse 7, 1040 Vienna',
          phone: '+43 1 795 05 0',
          link: 'https://www.eda.admin.ch/wien'
        },
        {
          name: 'Indian Embassy Vienna',
          address: 'Kärntner Ring 2, 1010 Vienna',
          phone: '+43 1 505 86 66',
          link: 'https://www.indianembassy.at/'
        }
      ],
      womensRights: [
        'Legal framework for women\'s rights varies by country',
        'Contact local embassy for specific information',
        'International women\'s rights organizations available'
      ],
      legalSupport: [
        'Austrian Chamber of Lawyers: +43 1 533 2718, https://www.rechtsanwaelte.at/',
        'Women\'s Legal Aid Vienna: +43 1 588 77, https://www.frauenberatung.at/',
        'Free legal consultation available for EU citizens',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police at 133 (police) or 112 (emergency)',
        'File police report in person at any police station - English-speaking officers available',
        'Request copy of police report (Anzeige) for insurance/embassy purposes',
        'Contact embassy for consular assistance with serious crimes',
        'Document all incidents with photos and detailed descriptions',
        'Keep receipts and evidence of any losses or damages'
      ]
    },
    // Enhanced safety fields for solo women
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: [
        'Crowded public transport during rush hours',
        'Tourist areas like Stephansplatz when intoxicated individuals present',
        'Nightlife districts (minimal incidents reported)',
        'Some outer districts (10th, 15th, 16th) after dark'
      ],
      reportingRate: 68, // Austria has relatively high reporting rates compared to European average
      legalProtection: 'Strong legal framework under Austrian Criminal Code. Sexual harassment (§ 218 StGB) and assault laws well-enforced. Vienna police specialized units trained for gender-based violence cases.',
      supportResources: [
        'Emergency: 112 (immediate help)',
        'Women\'s Emergency Helpline: 0800 222 555 (24/7)',
        'Frauen-Helpline gegen Gewalt: 0800 222 555',
        'Sexual Violence Crisis Line: 01 523 12 22',
        'Women\'s Shelter Vienna: 01 544 08 20',
        'Tamar Counseling Center: 01 334 04 37',
        'Police Women & Children Protection Units: available in all districts',
        'U.S. Citizen Emergency: +43 1 31339-0'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Vienna General Hospital (AKH Wien)',
          address: 'Währinger Gürtel 18-20, 1090 Wien',
          phone: '+43 1 40400-0',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Sexual Violence Care', 'Trauma'],
          link: 'https://www.akhwien.at/',
          notes: 'Largest hospital in Vienna with specialized women\'s health center and sexual violence support services'
        },
        {
          name: 'Goldenes Kreuz Private Hospital',
          address: 'Lazarettgasse 16-18, 1090 Wien',
          phone: '+43 1 401 11-0',
          emergency: true,
          specialties: ['Women\'s Health', 'Gynecology', 'Obstetrics', 'Emergency Medicine'],
          link: 'https://www.goldenes-kreuz.at/',
          notes: 'Renowned private hospital with Austria\'s largest private obstetric ward and specialized women\'s health services'
        },
        {
          name: 'Rudolfinerhaus Private Clinic',
          address: 'Billrothstraße 78, 1190 Wien',
          phone: '+43 1 360 36-0',
          emergency: true,
          specialties: ['General Medicine', 'Women\'s Health', 'Emergency Care'],
          link: 'https://www.rudolfinerhaus.at/'
        }
      ],
      pharmacies: [
        {
          name: 'Internationale Apotheke',
          address: 'Kärntner Ring 17, 1010 Wien',
          phone: '+43 1 512 28 25',
          hours: 'Mon-Fri 8:00-18:30, Sat 8:00-12:00',
          emergency: true,
          link: 'https://www.internationale-apotheke.at/',
          notes: 'Central location with English-speaking staff and extended hours'
        },
        {
          name: 'Apotheke zur Universität',
          address: 'Universitätsring 10, 1010 Wien',
          phone: '+43 1 405 15 88',
          hours: 'Mon-Fri 8:00-18:00, Sat 8:00-12:00',
          emergency: false,
          link: 'https://www.apotheke-universitaet.at/'
        },
        {
          name: 'Apotheke am Graben',
          address: 'Graben 13, 1010 Wien',
          phone: '+43 1 533 03 84',
          hours: 'Mon-Fri 8:30-18:30, Sat 8:30-17:00',
          emergency: false,
          link: 'https://www.apotheke-am-graben.at/'
        }
      ],
      womensHealth: {
        clinics: [
          'med4women - Women\'s Health Center Vienna: +43 1 405 44 55, https://www.med4women.at/en/',
          'Vienna Female Medcare: specialized gynecological services, https://www.vienna-female-medcare.at/en/',
          'Gynecology Center Döbling: +43 1 360 36 6600, https://www.privatklinik-doebling.at/en/',
          'Women\'s Health AKH Vienna: +43 1 40400 23320'
        ],
        gynecologists: [
          'Vienna General Hospital Women\'s Clinic: Währinger Gürtel 18-20, +43 1 40400 28100',
          'Private practice Dr. Elisabeth Huber: English-speaking, +43 1 512 44 55',
          'Goldenes Kreuz Women\'s Health Center: +43 1 401 11 2300'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription (Plan B, ellaOne)',
          'Emergency contraception available 24/7 at hospital emergency departments',
          'Vienna General Hospital Emergency: +43 1 40400-0',
          'med4women clinic provides emergency consultations'
        ],
        sanitaryProducts: [
          'Available at all supermarkets (BILLA, SPAR, MERKUR) and pharmacies',
          'Free sanitary products at many universities and public buildings',
          'Wide variety of brands and organic options available',
          'Available 24/7 at train stations and some metro stations'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Austria',
        'COVID-19 vaccination recommended',
        'Seasonal flu shot recommended during winter months',
        'Tick-borne encephalitis (FSME) vaccination recommended if hiking in rural areas'
      ],
      healthRisks: [
        'Very low risk of tropical diseases',
        'Seasonal flu during winter months',
        'Tick-borne diseases in rural/forest areas outside city',
        'Air pollution during winter months can affect respiratory conditions'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Wien Mobil (Public Transport)',
          safety: 9.2,
          recommendations: [
            'Use WienMobil app for real-time updates and route planning',
            'Purchase Vienna Card or weekly passes for unlimited travel',
            'All trams, buses, U-Bahn are well-lit, monitored, and extremely safe'
          ],
          companies: ['Wiener Linien'],
          link: 'https://www.wienerlinien.at/'
        },
        {
          type: 'Uber',
          safety: 8.8,
          recommendations: [
            'Use official Uber app for booking and tracking',
            'All drivers verified and rated by previous passengers',
            'Share trip details with contacts for added safety'
          ],
          companies: ['Uber'],
          link: 'https://www.uber.com/at/en/'
        },
        {
          type: 'Official Taxis',
          safety: 8.5,
          recommendations: [
            'Use official taxi stands or call reputable companies',
            'All meters regulated, fixed airport rates available',
            'Drivers licensed and vehicles regularly inspected'
          ],
          companies: ['Taxi 31300', 'Taxi 40100', '60160 Taxi'],
          link: 'https://www.taxi31300.at/'
        },
        {
          type: 'Bolt',
          safety: 8.6,
          recommendations: [
            'Alternative ride-sharing app with good safety features',
            'Driver verification and passenger rating system',
            'Competitive pricing and reliable service'
          ],
          companies: ['Bolt'],
          link: 'https://bolt.eu/'
        }
      ],
      nightTravel: {
        safety: 8.5,
        warnings: [
          'Avoid isolated areas in districts 10, 15, 16 after midnight',
          'Stay alert around major train stations late at night',
          'Use well-lit main streets when walking'
        ],
        alternatives: [
          'Night buses (N-lines) run until 5 AM on weekends',
          'U-Bahn operates until 12:30 AM (2:30 AM weekends)',
          'Uber and taxis available 24/7',
          'Stay in central districts for better late-night safety'
        ]
      },
      verifiedProviders: [
        {
          name: 'Wiener Linien',
          type: 'Public Transport',
          contact: '+43 1 7909 100',
          safety: 9.2
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.8
        },
        {
          name: 'Taxi 31300',
          type: 'Traditional Taxi',
          contact: '+43 1 31300',
          safety: 8.5
        },
        {
          name: 'Bolt',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.6
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service at most hotels',
        'Electronic key card access systems',
        'CCTV surveillance in common areas',
        'Secure luggage storage facilities',
        'In-room safes for valuables',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Innere Stadt (1st District)',
        'Mariahilf (6th District)',
        'Neubau (7th District)',
        'Leopoldstadt (2nd District)',
        'Wieden (4th District)',
        'Josefstadt (8th District)'
      ],
      womensOnly: [
        {
          name: 'Wombat\'s The City Hostel Vienna - Naschmarkt',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location', 'Solo traveler friendly'],
          rating: 4.6
        },
        {
          name: 'Vienna Boutique Hostel',
          type: 'Hostel',
          features: ['Female-only options', 'Sophisticated atmosphere', 'High security', 'Artsy location'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.7,
          safety: 9.2,
          comments: 'Felt completely safe as a solo female traveler. Vienna is incredibly secure and welcoming.',
          date: '2025-01-15'
        },
        {
          rating: 4.8,
          safety: 9.0,
          comments: 'Excellent safety measures and helpful staff. Perfect for women traveling alone.',
          date: '2025-01-10'
        },
        {
          rating: 4.6,
          safety: 8.8,
          comments: 'Clean, safe, and in the heart of the city. Would definitely recommend for solo travelers.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use hotel/accommodation WiFi when possible - most have secure networks',
        'Avoid public WiFi for sensitive transactions like banking',
        'Use VPN when connecting to public networks in cafes or transportation',
        'Enable two-factor authentication on all important accounts',
        'Keep devices updated with latest security patches'
      ],
      digitalScams: [
        'Fake booking websites - always use official accommodation sites',
        'Phishing emails claiming to be from hotels or transport companies',
        'Fake police emails requesting personal information',
        'Social media scams offering free accommodation or tours',
        'Fake taxi or ride-sharing apps - use official versions only'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast connections',
        'ExpressVPN - excellent for streaming services',
        'ProtonVPN - Swiss-based with free tier available',
        'Use VPN when accessing banking or personal accounts on public WiFi'
      ],
      dataProtection: [
        'Austria has strong GDPR data protection laws',
        'Avoid sharing personal information with strangers',
        'Use secure payment methods (credit cards over cash when possible)',
        'Keep copies of important documents in secure cloud storage',
        'Enable device tracking and remote wipe capabilities'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Stephansplatz tourist area',
          date: '2025-01-18',
          description: 'Minor pickpocketing incident in crowded tourist area during peak hours',
          severity: 'low'
        },
        {
          type: 'Fake Charity Scam',
          location: 'Mariahilfer Strasse',
          date: '2025-01-15',
          description: 'Fake charity collectors targeting tourists for signatures and donations',
          severity: 'low'
        },
        {
          type: 'Taxi Overcharging',
          location: 'Airport area',
          date: '2025-01-12',
          description: 'Unlicensed taxi driver attempted to overcharge tourist from airport',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Download the WienMobil app for easy navigation and real-time transport updates',
          author: 'Local Resident',
          date: '2025-01-20',
          upvotes: 45
        },
        {
          tip: 'Vienna is extremely safe - I walk alone at night regularly without any concerns',
          author: 'Solo Female Traveler',
          date: '2025-01-18',
          upvotes: 62
        },
        {
          tip: 'Stay in districts 1-9 for best safety and accessibility to attractions',
          author: 'Travel Guide',
          date: '2025-01-16',
          upvotes: 38
        },
        {
          tip: 'Use official taxi stands or Uber rather than street taxis for better rates',
          author: 'Frequent Visitor',
          date: '2025-01-14',
          upvotes: 29
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Austria is generally safe for travelers. Exercise normal precautions. The country has low crime rates and excellent emergency services. Vienna consistently ranks among the world\'s most livable and safest cities.',
      reason: 'Very low crime rates and stable political environment.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/austria-travel-advisory.html',
      soloTravelerAdvice: [
        'Vienna is exceptionally safe for solo female travelers - one of world\'s top 5 safest capitals',
        'Stay in central districts (1st-9th) for optimal safety and cultural attractions',
        'Public transport is extremely safe 24/7 - use WienMobil app for navigation',
        'English widely spoken, especially in tourist areas and among younger locals',
        'Is Vienna safe for solo female travellers? Absolutely - Austria ranks #8 globally for women\'s safety'
      ]
    },
    crimeStatistics: {
      violentCrime: 8.9, // per 100,000 (2024 data - very low, among lowest in Europe)
      propertyCrime: 142, // per 100,000 (2024 data - low, mainly pickpocketing in tourist areas)
      sexualAssault: 11.4, // per 100,000 (2024 data - low by international standards)
      kidnapping: 0.3, // per 100,000 (2024 data - extremely rare)
      source: 'Austrian Interior Ministry Crime Statistics 2024, Numbeo 2025',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Portable door lock',
        'Emergency whistle',
        'Portable phone charger'
      ],
      safetyApps: [
        {
          name: 'WienMobil',
          purpose: 'Official Vienna transport app with safety features',
          rating: 4.8
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion specifically for solo women',
          rating: 4.4
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community with Vienna safety tips',
          rating: 4.5
        },
        {
          name: 'My Safetipin',
          purpose: 'Community safety ratings for Vienna neighborhoods',
          rating: 4.3
        },
        {
          name: 'Citymapper Vienna',
          purpose: 'Smart urban navigation with real-time safety updates',
          rating: 4.7
        },
        {
          name: 'SkyAlert',
          purpose: 'Emergency alerts and safety notifications',
          rating: 4.2
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
          number: '133',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '144',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Department',
          number: '122',
          type: 'Fire Emergency'
        },
        {
          name: 'U.S. Embassy Vienna',
          number: '+43 1 313 39 0',
          type: 'Consular Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '0800 222 555',
          type: 'Support Services'
        },
        {
          name: 'Vienna Tourist Hotline',
          number: '+43 1 24 555',
          type: 'Tourist Information'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$75 - $120 USD / day',
        description: 'Covers accommodation, food, transport, and activities at a safe and comfortable level for solo female travelers.',
        tip: 'Vienna can be expensive, but investing in central, safe accommodation and reliable transport significantly enhances solo travel safety and experience.'
      },
      accommodation: [
        {
          type: 'Women-only/Female-friendly Hostel',
          avgCost: '$22-35',
          safetyNote: 'Excellent safety standards with female dorms and secure access',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel (3-star)',
          avgCost: '$60-90',
          safetyNote: 'Good safety features in central locations with 24/7 reception',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotel (4-5 star)',
          avgCost: '$120-300+',
          safetyNote: 'Premium security, concierge services, and prime locations',
          safetyLevel: 'excellent'
        }
      ],
      transport: [
        {
          method: 'Public Transit (WienMobil)',
          cost: '$6-8/day',
          safetyDescription: 'Exceptionally safe, clean, and reliable 24/7 operation',
          safetyLevel: 'excellent'
        },
        {
          method: 'Uber/Bolt',
          cost: '$8-15/ride',
          safetyDescription: 'Very safe with driver verification and ride tracking',
          safetyLevel: 'high'
        },
        {
          method: 'Official Taxis',
          cost: '$10-20/ride',
          safetyDescription: 'Licensed, metered, and regulated for passenger safety',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe during day and night in central areas',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Vienna is expensive but exceptionally safe - prioritize central accommodation for security',
        'Public transport day passes (€8) offer unlimited safe travel throughout the city',
        'Eating at local Gasthauses and coffee houses is affordable and culturally authentic',
        'Many museums offer free admission on first Sunday of each month',
        'Walking tours are often free and provide safe group exploration opportunities',
        'Vienna Card offers transport + attraction discounts for budget-conscious travelers'
      ]
    }
};

export default vienna;
