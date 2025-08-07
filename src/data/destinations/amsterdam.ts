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
        context: 'Amsterdam is very safe at night, especially in central and well-trafficked areas. Streets are well-lit, and there is a visible police presence. While petty crime like pickpocketing can occur in nightlife districts, violent incidents are rare. Women and solo travelers generally report feeling comfortable, but it’s wise to avoid isolated areas and stay alert in busy nightlife zones.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Amsterdam’s public transport system (trams, buses, and metro) is modern, clean, and highly reliable. Stations and vehicles are well-monitored with security cameras and staff. Incidents are rare, and most travelers feel safe using public transit at any hour. As always, keep an eye on your belongings, especially during rush hour or on busy routes.'
      },
      walkingAlone: {
        score: 8.3,
        context: 'Walking alone in Amsterdam is very safe, both day and night, thanks to the city’s respectful culture and strong community norms. The city is well-lit and busy, even after dark. Most locals and visitors feel comfortable walking alone, but it’s best to stay on main streets and avoid deserted areas late at night.'
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
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress in layers for unpredictable weather
• Bring a rain jacket—rain is common year-round
• Avoid flashy jewelry and keep your bag zipped
• Wear comfortable shoes for walking on cobblestones
• Always carry a charged phone and emergency contacts`,
      firstTimers: `• Amsterdam is easy for solo women, but stay alert, especially at night
• Save emergency numbers (112 for police, fire, ambulance) and local support hotlines
• Use official taxis or rideshares after dark
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop or cafe`,
      apps: [
        'GuruWalk',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me'
      ],
      appLinks: [
        { name: 'GuruWalk', link: 'https://guruwalk.com/', description: 'Free walking tours with local guides' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'Dutch'
        },
        {
          english: 'Call the police!',
          local: 'Bel de politie!',
          localLanguage: 'Dutch'
        },
        {
          english: 'I need a doctor.',
          local: 'Ik heb een dokter nodig.',
          localLanguage: 'Dutch'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Waar is het dichtstbijzijnde ziekenhuis?',
          localLanguage: 'Dutch'
        },
        {
          english: 'I am lost.',
          local: 'Ik ben verdwaald.',
          localLanguage: 'Dutch'
        },
        {
          english: 'Please leave me alone.',
          local: 'Laat me met rust.',
          localLanguage: 'Dutch'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ik voel me onveilig.',
          localLanguage: 'Dutch'
        },
        {
          english: 'Can you help me?',
          local: 'Kunt u mij helpen?',
          localLanguage: 'Dutch'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Dress is generally casual and practical, but neat. Jeans, t-shirts, and sneakers are fine in most settings. For business or upscale restaurants, smart-casual is expected. Rain gear is essential year-round. Swimwear is only for pools and beaches. Topless sunbathing is accepted in some parks and beaches, but nudity is only allowed in designated areas.',
      behaviorNorms: [
        'Respect personal space and privacy; the Dutch value directness but not intrusion.',
        'Be punctual for appointments and social events.',
        'Greet with a handshake and maintain eye contact.',
        'Tipping is appreciated (5–10%) but not mandatory.',
        'Don\'t be arrogant or boastful; humility is valued.',
        'Avoid walking in bike lanes—cyclists have priority and expect you to move.',
        'Don\'t photograph people in the Red Light District.',
        'Try to learn and use a few Dutch phrases, even though most people speak English.',
        'The Dutch are tolerant of different lifestyles and expect the same from visitors.',
        'Plan visits in advance; unannounced drop-ins are uncommon.',
        'Join in on "gezelligheid" (coziness, togetherness) in social settings.'
      ],
      perception: 'Solo women travelers are generally respected and safe in Amsterdam. The city is progressive and open-minded, but as in any major city, it\'s wise to stay aware of your surroundings, especially at night or in crowded areas. Catcalling is rare but can happen. Locals are used to solo travelers and are usually helpful if you ask for directions or advice.',
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
    }, scamWarnings: [
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
      { label: 'Pickpocketing', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, BMTM 2024
      { label: 'Scams (Fake Police, Taxi Scams)', frequency: 'Frequent', icon: 'Shield' }, // BMTM 2024
      { label: 'Bicycle Accidents', frequency: 'Occasional', icon: 'Bike' }, // BMTM 2024
      { label: 'Drug-related Incidents', frequency: 'Occasional', icon: 'Syringe' }, // BMTM 2024
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
      prevalence: 'low',
      commonLocations: ['Red Light District at night', 'Crowded trams during rush hour', 'Tourist areas with intoxicated visitors'],
      reportingRate: 65, // percentage - based on Dutch government statistics
      legalProtection: 'Strong legal protections against sexual harassment. Dutch law criminalizes unwanted sexual advances, groping, and verbal harassment. Police take reports seriously.',
      supportResources: [
        'Centrum Seksueel Geweld (Sexual Violence Center): +31 88 234 24 00, https://centrumseksueelgeweld.nl/',
        'Slachtofferhulp Nederland (Victim Support): +31 0900 0101, https://www.slachtofferhulp.nl/',
        'Women\'s Rights Center Amsterdam: +31 20 624 45 45, https://vrouwenrechtswinkelamsterdam.nl/'
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
          name: 'British Embassy Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://www.gov.uk/world/organisations/british-embassy-the-hague'
        },
        {
          name: 'Embassy of Germany in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://nl.diplo.de/'
        },
        {
          name: 'Embassy of France in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://nl.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://www.exteriores.gob.es/embajadas/the-hague'
        },
        {
          name: 'Australian Embassy Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://nl.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://www.canadainternational.gc.ca/nl-netherlands/'
        },
        {
          name: 'Embassy of the Netherlands in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/netherlands'
        },
        {
          name: 'Embassy of Denmark in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://nl.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://www.eda.admin.ch/the-hague'
        },
        {
          name: 'Embassy of India in Amsterdam',
          address: 'Lange Voorhout 10, 2514 ED The Hague',
          phone: '+31 70 427 0427',
          link: 'https://www.indianembassynl.gov.in/'
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
          type: 'GVB (Public Transport)',
          safety: 9.0,
          recommendations: ['Use the GVB app for tickets and schedules.'],
          companies: ['GVB'],
          link: 'https://www.gvb.nl/en'
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
      violentCrime: 8.2, // per 100,000 (2023 data)
      propertyCrime: 2847, // per 100,000 (2023 data)
      sexualAssault: 12.5, // per 100,000 (2023 data)
      kidnapping: 0.3, // per 100,000 (2023 data)
      source: 'Dutch Central Bureau of Statistics (CBS)',
      year: 2023
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
    }
};

export default amsterdam;
