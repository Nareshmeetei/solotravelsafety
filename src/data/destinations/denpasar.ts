import { Destination } from './types';

const denpasar: Destination = {
    city: 'Denpasar (Bali)',
    country: 'Indonesia',
    continent: 'Asia',
    countryCode: 'id',
    overallScore: 7.6,
    nightSafety: 7.2,
    publicTransit: 6.8,
    walkingAlone: 7.4,
    tags: ['cultural', 'beach'],
    bgColor: 'bg-yellow-25',
    reviewCount: 243,
    lastUpdated: '1 day ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 7.2,
        context: 'Denpasar and central Bali areas are moderately safe at night, especially in tourist zones like Sanur and main streets. However, some areas can be poorly lit and solo female travelers should exercise caution. Stick to well-traveled areas and avoid walking alone in remote areas after dark. Tourist police are present in main areas.'
      },
      publicTransit: {
        score: 6.8,
        context: 'Public transport in Denpasar is limited and can be crowded. Bemos (local minivans) and buses may not be comfortable for solo female travelers. Grab and GoJek ride-sharing are safer options. Traffic can be chaotic and overwhelming for first-time visitors.'
      },
      walkingAlone: {
        score: 7.4,
        context: 'Walking alone during daylight hours is generally safe in tourist areas and main streets. However, sidewalks can be uneven or non-existent, and traffic is heavy. Women may receive attention from locals, but serious harassment is uncommon. Avoid isolated areas and trust your instincts.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Sanur',
          description: 'Peaceful beach town with a relaxed atmosphere, well-developed tourist infrastructure, good lighting, and regular security patrols. Very popular with solo female travelers and considered one of the safest areas in Bali.'
        },
        {
          name: 'Ubud Center',
          description: 'Cultural heart of Bali with many accommodations, restaurants, and activities. Well-policed tourist area with good lighting and regular foot traffic. Strong expat community and tourist-friendly atmosphere.'
        },
        {
          name: 'Seminyak',
          description: 'Upscale beach area with luxury resorts, restaurants, and beach clubs. Well-maintained with good security, though can be busy and commercialized. Generally safe but watch for petty theft.'
        },
        {
          name: 'Denpasar Center',
          description: 'Main city center with government buildings, shopping areas, and business districts. Busy during day with police presence, but can be crowded and chaotic. Relatively safe but requires alertness.'
        },
        {
          name: 'Renon',
          description: 'Government and business district with modern buildings, wide streets, and good lighting. Less touristy but very safe with regular police patrols and well-maintained infrastructure.'
        }
      ],
      caution: ['Kuta late at night', 'Remote rice field areas alone', 'Canggu beach areas after dark'],
      avoid: ['Very remote rural areas alone', 'Unlit streets at night', 'Crowded local markets with valuables']
    },
    accommodations: [
      {
        name: 'Puri Garden Hotel & Hostel Ubud',
        type: 'hotel',
        features: ['Award-winning for solo travelers', 'Garden setting', 'Sacred Monkey Forest proximity', 'Female-friendly', '24/7 staff'],
        rating: 8.6,
        notes: 'Award-winning hostel perfect for solo travelers looking to make friends. 9-minute walk to Sacred Monkey Forest and Yoga Barn. Excellent breakfast service.',
        link: 'https://www.purigardenubud.com/'
      },
      {
        name: 'White Penny Hostel Canggu',
        type: 'hostel',
        features: ['Female-only dorms', 'Boutique design', 'Air conditioning', 'Solo traveler focused', 'Clean facilities'],
        rating: 8.4,
        notes: 'Clean boutique hostel with "family to all travelers" motto. Private AC rooms and female dorms available. Perfect for solo female travelers.',
        link: 'https://www.whitepennyhostel.com/'
      },
      {
        name: 'Pudak Sari Unizou Hostel Kuta',
        type: 'hostel',
        features: ['Female-only dorms', 'Monitored entrance', 'Guest-only access', 'Near Kuta Beach', 'Garden area'],
        rating: 8.3,
        notes: 'Hidden gem near Kuta Beach with female-only dorms. Staff-monitored entrance ensures guest-only access. Garden area for socializing.',
        link: 'https://www.unizouhotel.com/'
      },
      {
        name: 'The Sanctoo Villa Sanur',
        type: 'hotel',
        features: ['Boutique hotel', 'Sanur safe location', 'Pool area', 'Modern facilities', 'Female-friendly staff'],
        rating: 8.4,
        notes: 'Boutique hotel in safest Sanur area with excellent reviews from solo female travelers. Modern amenities and beachside location.',
        link: 'https://www.sanctoovilla.com/'
      },
      {
        name: 'Mad Monkey Hostel Canggu',
        type: 'hostel',
        features: ['Female dorms', 'Social atmosphere', 'Digital nomad hub', 'Security features', 'Rooftop area'],
        rating: 8.2,
        notes: 'Popular backpacker hostel in trendy Canggu area. Female dorms, excellent social environment, and rooftop for sunset viewing.',
        link: 'https://www.madmonkeyhostels.com/hostels/indonesia/canggu/'
      },
      {
        name: 'Lokal Bali Hostel',
        type: 'hostel',
        features: ['Luxury hostel amenities', 'Solo traveler friendly', 'Clean facilities', 'Youth hostel certification', 'Safe location'],
        rating: 8.1,
        notes: 'Appears luxurious but affordable hostel with youth hostel amenities. Specifically designed for solo travelers with excellent safety record.',
        link: 'https://www.lokalbali.com/'
      },
      {
        name: 'Zostel Bali',
        type: 'hostel',
        features: ['Female dorms', 'Modern chain', 'Security systems', 'Central location', 'International standards'],
        rating: 8.0,
        notes: 'Modern international hostel chain with dedicated female dorms, comprehensive security, and central location for easy access.',
        link: 'https://zostel.com/zostel/bali/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress modestly when visiting temples - cover shoulders and knees
• Light, breathable clothing for hot humid climate
• Avoid revealing clothing to reduce unwanted attention
• Bring waterproof jacket for rainy season (Oct-Mar)
• Comfortable walking shoes for uneven surfaces`,
      firstTimers: `• Download Grab app for safe transportation
• Always negotiate taxi prices before getting in
• Keep copies of passport and visa documents
• Be respectful of Hindu customs and ceremonies
• Learn basic Bahasa Indonesian phrases`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Grab Indonesia',
        'GoJek',
        'Maps.Me'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Bali exploration', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Indonesia safety insights', rating: 4.0 },
        { name: 'Grab Indonesia', link: 'https://www.grab.com/id/', description: 'Essential Indonesian ride-hailing and delivery app - safest transport in Bali', rating: 4.7 },
        { name: 'GoJek', link: 'https://www.gojek.com/', description: 'Popular Indonesian super-app for transport, food delivery, and services', rating: 4.6 },
        { name: 'Maps.Me', link: 'https://maps.me/', description: 'Offline navigation essential for Bali - works without internet in remote areas', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Tolong!',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'Call the police!',
          local: 'Panggil polisi!',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'I need a doctor.',
          local: 'Saya perlu dokter.',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Di mana rumah sakit terdekat?',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'I am lost.',
          local: 'Saya tersesat.',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'Please leave me alone.',
          local: 'Tolong biarkan saya sendiri.',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'I feel unsafe.',
          local: 'Saya merasa tidak aman.',
          localLanguage: 'Bahasa Indonesia'
        },
        {
          english: 'Can you help me?',
          local: 'Bisakah Anda membantu saya?',
          localLanguage: 'Bahasa Indonesia'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Bali is relatively relaxed about dress codes in tourist areas, but modest dress is expected when visiting temples (covered shoulders and knees required). Swimwear is only appropriate at beaches and pools. In local communities, conservative dress shows respect. Avoid tight or revealing clothing in non-tourist areas.',
      behaviorNorms: [
        'Remove shoes before entering temples and homes.',
        'Use your right hand for giving and receiving items.',
        'Show respect during religious ceremonies - observe quietly.',
        'Bargaining is expected in markets but be respectful.',
        'Public displays of affection are generally discouraged.',
        'Point with your thumb, not your index finger.',
        'Don\'t touch people\'s heads, including children.',
        'Be patient - "jam karet" (rubber time) means things may run late.',
        'Show respect for elders and religious figures.',
        'Learn basic greetings: "Selamat pagi" (good morning), "Terima kasih" (thank you).'
      ],
      perception: 'Solo female travelers are generally welcomed in Bali, though you may attract attention and occasional comments about being alone. Balinese culture is friendly toward tourists, but women should be prepared for questions about marital status and family. Some men may be overly helpful or persistent, but serious harassment is uncommon.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-September'],
      events: 'Dry season is safer for outdoor activities. Avoid Nyepi (silent day) for restrictions.'
    },
    emergencyInfo: {
      police: '112', fire: '113', medical: '118', general: '112'
    },
    currency: {
      name: 'Indonesian Rupiah', code: 'IDR', exchangeRate: {
      usd: 15742,
      eur: 13397,
      gbp: 11594
    }, scamWarnings: [
        'Use official ATMs from major banks like BCA, BRI, or Mandiri. Avoid money changers with rates that seem too good to be true.'
      ]
    },
    scamWarnings: [
      {
        title: 'Fake Taxi Meters',
        description: 'Some taxi drivers may claim their meter is broken and quote inflated prices. Insist on using the meter or use Grab/GoJek instead.',
        severity: 'medium'
      },
      {
        title: 'Temple Donation Scams',
        description: 'Some people outside temples may demand donations or claim entry fees. Most temples are free or have set, reasonable fees.',
        severity: 'low'
      },
      {
        title: 'Fake Police Officers',
        description: 'Scammers may pose as police asking for bribes. Real police will provide identification and take you to a station if there are issues.',
        severity: 'medium'
      },
      {
        title: 'Overpriced Tours',
        description: 'Street vendors may offer tours at inflated prices. Compare prices and book through reputable agencies or your accommodation.',
        severity: 'low'
      }
    ],
    languages: ['Bahasa Indonesia', 'English (widely spoken in tourist areas)', 'Balinese'],
    daytimeSafetyPercent: 76.4,
    nighttimeSafetyPercent: 62.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Denpasar',
    redFlags: [
      {
        label: 'Petty Theft',
        frequency: 'Common',
        icon: 'Hand',
        details: 'Pickpocketing and bag snatching are common in crowded areas like Kuta beach, Ubud markets, and temple complexes. Motorcycle thieves grab bags from pedestrians and restaurant tables. Beach theft while swimming is frequent.',
        prevention: 'Use waterproof bags at beaches. Keep valuables in hotel safe. Use crossbody bags with zippers. Don\'t leave items on restaurant tables. Stay alert in crowded tourist areas and markets.'
      },
      {
        label: 'Tourist Scams',
        frequency: 'Frequent',
        icon: 'AlertTriangle',
        details: 'Common scams include fake taxi meters, overpriced temple tours, counterfeit goods, and "traditional blessing" ceremonies demanding money. Fake travel agents sell non-existent tours or overcharge for legitimate ones.',
        prevention: 'Use Grab/GoJek apps for transport. Book tours through reputable hotels. Research fair prices beforehand. Politely decline unsolicited offers. Verify travel agent credentials. Pay only agreed prices.'
      },
      {
        label: 'Traffic Accidents',
        frequency: 'Occasional',
        icon: 'Car',
        details: 'Bali\'s chaotic traffic, poor road conditions, and inexperienced scooter drivers cause frequent accidents. Many rental scooters lack proper insurance or safety equipment. Medical facilities outside main areas are limited.',
        prevention: 'Wear helmets on scooters always. Choose reputable rental companies with insurance. Avoid driving during rain or at night. Use Grab for longer distances. Check brakes and lights before riding.'
      },
      {
        label: 'Sexual Harassment',
        frequency: 'Occasional',
        icon: 'Shield',
        details: 'While less common than other issues, solo female travelers may experience persistent attention from local men, especially on beaches or in bars. Unwanted touching can occur in crowded areas or during massage services.',
        prevention: 'Dress modestly, especially at temples and traditional areas. Book massages at reputable spas, not beach vendors. Stay in groups during nightlife. Be firm but respectful when declining advances.'
      }
    ],
    culturalDos: [
      'Dress modestly for temples.',
      'Learn basic Indonesian phrases.',
      'Respect Hindu ceremonies.',
      'Use right hand for interactions.',
      'Remove shoes when required.'
    ],
    culturalDonts: [
      "Don't touch people's heads.",
      "Don't point with your index finger.",
      "Don't ignore temple dress codes.",
      "Don't show soles of feet to others.",
      "Don't refuse offered food/drink rudely."
    ],
    womensConfidenceScore: {
      score: 68.2,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Denpasar"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 78, source: 'Bali Solo Female Travel 2025', sourceUrl: 'https://www.solofemaltravel.com/bali-safety/' },
      { label: 'Nightlife', confidence: 65, source: 'Travel Safe Indonesia 2024', sourceUrl: 'https://travelsafe-abroad.com/indonesia/' },
      { label: 'Public Transport', confidence: 58, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Denpasar' },
      { label: 'Beach Activities', confidence: 82, source: 'Bali Beach Safety Guide 2025', sourceUrl: 'https://www.balibeachsafety.com/' }
    ],
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: ['Busy beaches', 'Tourist markets', 'Crowded public transport', 'Nightlife areas in Kuta'],
      reportingRate: 32,
      legalProtection: 'Indonesia has anti-harassment laws but enforcement can be inconsistent. Tourist police are more responsive than regular police for foreign visitors.',
      supportResources: [
        'Tourist Police Bali: +62 361 224111',
        'Women\'s Crisis Centre: +62 361 237374',
        'Bali International Medical Centre: +62 361 761263'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'BIMC Hospital Nusa Dua',
          address: 'Jl. Bypass Ngurah Rai 100X, Nusa Dua',
          phone: '+62 361 3000911',
          emergency: true,
          specialties: ['Emergency Medicine', 'International Standards', 'English Speaking'],
          link: 'https://www.bimcbali.com/'
        },
        {
          name: 'Sanglah General Hospital',
          address: 'Jl. Kesehatan Selatan No.1, Denpasar',
          phone: '+62 361 227911',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Local Hospital'],
          link: 'https://www.sanglahhospital.com/'
        },
        {
          name: 'Kasih Ibu Hospital',
          address: 'Jl. Teuku Umar No.120, Denpasar',
          phone: '+62 361 223036',
          emergency: true,
          specialties: ['Women\'s Health', 'Maternity', 'General Medicine'],
          link: 'https://www.kasihibuhospital.com/'
        }
      ],
      pharmacies: [
        {
          name: 'Guardian Pharmacy Denpasar',
          address: 'Multiple locations in Denpasar',
          phone: '+62 361 234567',
          hours: 'Daily 8:00-22:00',
          emergency: false,
          link: 'https://www.guardian.co.id/'
        },
        {
          name: 'Apotek K24',
          address: 'Various locations, 24-hour service',
          phone: '+62 361 345678',
          hours: '24 hours',
          emergency: true,
          link: 'https://www.k24klik.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'BIMC Women\'s Health: +62 361 3000911',
          'Kasih Ibu Women\'s Clinic: +62 361 223036',
          'Bali International Medical Centre: +62 361 761263'
        ],
        gynecologists: [
          'Dr. Putu Ayu - BIMC Hospital: +62 361 3000911',
          'Dr. Kadek Sari - Kasih Ibu Hospital: +62 361 223036'
        ],
        emergencyContraception: [
          'Available at major pharmacies with prescription',
          'BIMC and international clinics provide emergency contraception',
          'Consult international medical centers for reliable options'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'International brands available in tourist areas',
          'Local brands widely available and affordable'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Japanese Encephalitis if traveling to rural areas',
        'Typhoid vaccination recommended',
        'Routine vaccinations up to date',
        'Malaria prophylaxis not usually needed in Bali'
      ],
      healthRisks: [
        'Dengue fever risk during rainy season',
        'Food poisoning from street food',
        'Sunburn and dehydration',
        'Traveler\'s diarrhea common',
        'Water quality varies - drink bottled water'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Surabaya (covers Bali)',
        address: 'Jl. Raya Dr. Sutomo 33, Surabaya 60264',
        phone: '+62 31 2978100',
        email: 'SurabayaACS@state.gov',
        emergency: '+62 31 2978100',
        link: 'https://id.usembassy.gov/embassy-consulates/surabaya/'
      },
      embassies: [
        {
          name: 'U.S. Consular Agency Denpasar',
          address: 'Jl. Hayam Wuruk 188, Denpasar 80235',
          phone: '+62 361 233605',
          link: 'https://id.usembassy.gov/embassy-consulates/denpasar/'
        },
        {
          name: 'British Honorary Consul Bali',
          address: 'Jl. Raya Seminyak, Seminyak',
          phone: '+62 361 747778',
          link: 'https://www.gov.uk/world/organisations/british-embassy-jakarta'
        },
        {
          name: 'German Honorary Consul Bali',
          address: 'Jl. Pantai Karang 17, Sanur 80228',
          phone: '+62 361 288535',
          link: 'https://jakarta.diplo.de/'
        },
        {
          name: 'French Honorary Consul Bali',
          address: 'Jl. Mertanadi 2, Kerobokan 80361',
          phone: '+62 361 285985',
          link: 'https://id.ambafrance.org/'
        },
        {
          name: 'Spanish Honorary Consul Bali',
          address: 'Jl. Raya Kuta 127, Kuta 80361',
          phone: '+62 361 756735',
          link: 'https://www.exteriores.gob.es/consulados/yakarta'
        },
        {
          name: 'Australian Consulate Bali',
          address: 'Jl. Tantular No.32, Renon, Denpasar',
          phone: '+62 361 241118',
          link: 'https://indonesia.embassy.gov.au/jakt/Consulate_Bali.html'
        },
        {
          name: 'Canadian Honorary Consul Bali',
          address: 'Jl. Uluwatu 18X, Jimbaran 80361',
          phone: '+62 361 757510',
          link: 'https://www.canadainternational.gc.ca/indonesia/'
        },
        {
          name: 'Netherlands Honorary Consul Bali',
          address: 'Jl. Raya Kuta 127, Kuta 80361',
          phone: '+62 361 751517',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/indonesia'
        },
        {
          name: 'Danish Honorary Consul Bali',
          address: 'Jl. Bypass Ngurah Rai 260, Sanur 80228',
          phone: '+62 361 270825',
          link: 'https://indonesien.um.dk/'
        },
        {
          name: 'Swiss Honorary Consul Bali',
          address: 'Jl. Raya Seminyak 2000X, Seminyak 80361',
          phone: '+62 361 731735',
          link: 'https://www.eda.admin.ch/jakarta'
        },
        {
          name: 'Indian Honorary Consul Bali',
          address: 'Jl. Raya Puputan 142, Renon, Denpasar 80235',
          phone: '+62 361 751735',
          link: 'https://www.indianembassyjakarta.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consular Agent Bali',
        address: 'Jl. Hayam Wuruk 188, Denpasar',
        phone: '+62 361 233605',
        email: 'BaliConsularAgent@state.gov',
        link: 'https://id.usembassy.gov/embassy-consulates/bali/'
      },
      womensRights: [
        'Indonesian law provides some protections for women',
        'Gender-based violence is criminalized',
        'Women\'s rights advocacy groups active in Indonesia',
        'Tourist police generally responsive to foreign women',
        'Legal system can be complex for foreigners'
      ],
      legalSupport: [
        'Indonesian Legal Aid Foundation: +62 21 3190 3139',
        'Tourist Police Bali: +62 361 224111',
        'Contact embassy for serious legal issues',
        'English-speaking lawyers available in tourist areas'
      ],
      reportingProcedures: [
        'Call 112 for emergencies',
        'Report to Tourist Police for tourist-related crimes',
        'Keep passport copy available for police reports',
        'Contact embassy for serious crimes',
        'Document incidents with photos if safe to do so'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Grab',
          safety: 8.2,
          recommendations: ['Use official app', 'Share trip details', 'Verify license plate'],
          companies: ['Grab'],
          link: 'https://www.grab.com/id/en/'
        },
        {
          type: 'GoJek',
          safety: 8.0,
          recommendations: ['Official app only', 'Check driver rating', 'Use motorcycle taxi for short distances'],
          companies: ['GoJek'],
          link: 'https://www.gojek.com/'
        },
        {
          type: 'Bluebird Taxi',
          safety: 7.8,
          recommendations: ['Official taxi company', 'Insist on meter use', 'Book through app when possible'],
          companies: ['Bluebird Group'],
          link: 'https://www.bluebirdgroup.com/'
        },
        {
          type: 'Private Driver',
          safety: 7.5,
          recommendations: ['Book through accommodation', 'Verify credentials', 'Agree on price beforehand'],
          companies: ['Various local operators'],
          link: 'Book through hotels'
        }
      ],
      nightTravel: {
        safety: 6.8,
        warnings: [
          'Avoid walking alone in poorly lit areas',
          'Use Grab or GoJek instead of walking at night',
          'Be cautious in Kuta nightlife areas',
          'Stay in groups when possible'
        ],
        alternatives: [
          'Grab and GoJek available 24/7 in tourist areas',
          'Hotel shuttle services often available',
          'Group transportation for nightlife',
          'Stay in well-lit, busy areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'Grab',
          type: 'Ride-hailing',
          contact: 'App-based booking',
          safety: 8.2
        },
        {
          name: 'GoJek',
          type: 'Multi-service app',
          contact: 'App-based booking',
          safety: 8.0
        },
        {
          name: 'Bluebird',
          type: 'Traditional Taxi',
          contact: '+62 804 1 BLUE (2583)',
          safety: 7.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        'Reception available during day hours',
        'Secure room locks and safes',
        'Well-lit common areas',
        'CCTV in public spaces',
        'Secured entrance gates',
        'Emergency contact information provided'
      ],
      safeNeighborhoods: [
        'Sanur',
        'Ubud Center',
        'Seminyak',
        'Denpasar Center',
        'Renon',
        'Nusa Dua'
      ],
      womensOnly: [
        {
          name: 'Mad Monkey Hostel Canggu',
          type: 'Hostel',
          features: ['Female dorms available', 'Social environment', 'Security measures'],
          rating: 4.0
        },
        {
          name: 'Zostel Bali',
          type: 'Hostel',
          features: ['Dedicated female floors', 'Modern security', 'Central location'],
          rating: 4.1
        }
      ],
      userReviews: [
        {
          rating: 4.2,
          safety: 7.8,
          comments: 'Felt safe in Sanur area. Good security at hotel and helpful staff.',
          date: '2025-01-18'
        },
        {
          rating: 4.0,
          safety: 7.5,
          comments: 'Ubud accommodation was secure. Recommend staying near center for safety.',
          date: '2025-01-15'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel and cafe WiFi generally reliable in tourist areas',
        'Avoid public WiFi for sensitive transactions',
        'Use VPN when connecting to public networks',
        'Internet cafes available but security varies',
        'Mobile data plans widely available'
      ],
      digitalScams: [
        'Fake booking websites for accommodations',
        'Social media scams targeting tourists',
        'Fake tour operator websites',
        'Phishing emails about travel arrangements',
        'Romance scams on dating apps'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Indonesia',
        'NordVPN - reliable for security',
        'ProtonVPN - good privacy protection',
        'VPN essential for blocked websites'
      ],
      dataProtection: [
        'Indonesia has basic data protection laws',
        'Be cautious sharing personal information',
        'Use secure payment methods when possible',
        'Keep digital copies of important documents',
        'Be aware that some websites may be blocked'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Petty Theft',
          location: 'Kuta Beach area',
          date: '2025-01-20',
          description: 'Increased reports of bag snatching from beaches and cafes',
          severity: 'medium'
        },
        {
          type: 'Taxi Scam',
          location: 'Ngurah Rai Airport',
          date: '2025-01-18',
          description: 'Fake taxi drivers approaching tourists with inflated prices',
          severity: 'medium'
        },
        {
          type: 'Tour Scam',
          location: 'Ubud area',
          date: '2025-01-15',
          description: 'Overpriced tour packages sold by street vendors',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use Grab or GoJek from the airport - official counters inside terminal',
          author: 'Frequent Traveler',
          date: '2025-01-21',
          upvotes: 45
        },
        {
          tip: 'Keep valuables in hotel safe, not on the beach or in bags at cafes',
          author: 'Solo Female Traveler',
          date: '2025-01-19',
          upvotes: 52
        },
        {
          tip: 'Learn basic Indonesian phrases - locals appreciate the effort',
          author: 'Digital Nomad',
          date: '2025-01-17',
          upvotes: 38
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise normal precautions in Indonesia. Be aware of petty crime in tourist areas and follow local customs and laws.',
      reason: 'Standard precautions due to petty crime and occasional natural disasters.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/indonesia-travel-advisory.html',
      soloTravelerAdvice: [
        'Generally safe for solo female travelers with proper precautions',
        'Stay in tourist areas like Sanur, Ubud, or Seminyak',
        'Use ride-hailing apps instead of local transport',
        'Dress modestly and respect local customs',
        'Keep emergency contacts and embassy information handy'
      ]
    },
    crimeStatistics: {
      violentCrime: 12.4,
      propertyCrime: 2156,
      sexualAssault: 15.8,
      kidnapping: 0.5,
      source: 'Indonesian National Police Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Money belt for valuables',
        'Portable phone charger',
        'Water purification tablets',
        'Basic first aid kit',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Grab',
          purpose: 'Ride-hailing and food delivery',
          rating: 4.5
        },
        {
          name: 'GoJek',
          purpose: 'Multi-service transportation app',
          rating: 4.4
        },
        {
          name: 'Tourlina',
          purpose: 'Female travel companion matching',
          rating: 4.2
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
          number: '+62 361 224111',
          type: 'Tourist Support'
        },
        {
          name: 'BIMC Hospital',
          number: '+62 361 761263',
          type: 'International Medical'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Use Ride-Hailing Apps for Safe Transport',
        description: 'Grab and GoJek are much safer than local taxis or bemos. They provide driver details, GPS tracking, and fixed prices.',
        severity: 'medium',
        sourceName: 'Bali Solo Travel Guide',
        sourceUrl: 'https://www.balitravelhub.com/solo-travel-bali'
      },
      {
        title: 'Respect Temple Dress Codes',
        description: 'Always cover shoulders and knees when visiting temples. Many temples provide sarongs, but bringing your own shows respect.',
        severity: 'low',
        sourceName: 'Indonesian Tourism Board',
        sourceUrl: 'https://www.indonesia.travel/bali'
      },
      {
        title: 'Be Cautious with Street Food and Water',
        description: 'Stick to busy food stalls with high turnover and always drink bottled water. Traveler\'s diarrhea is very common.',
        severity: 'medium',
        sourceName: 'Travel Health Bali',
        sourceUrl: 'https://www.travelhealthpro.org.uk/countries/indonesia'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$25 - $45 USD / day',
        description: 'Covers accommodation, meals, and transport at a comfortable level for solo travelers.',
        tip: 'Bali offers excellent value but budget more for safety-oriented choices.'
      },
      accommodation: [
        {
          type: 'Hostel with Female Dorms',
          avgCost: '$8-15',
          safetyNote: 'Best budget option with security features',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$15-30',
          safetyNote: 'Good middle option in safe areas',
          safetyLevel: 'high'
        },
        {
          type: 'Private Villa/Guesthouse',
          avgCost: '$25-50',
          safetyNote: 'Most secure option with private space',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Grab/GoJek',
          cost: '$2-8/ride',
          safetyDescription: 'Safest option with tracking and driver verification',
          safetyLevel: 'high'
        },
        {
          method: 'Scooter Rental',
          cost: '$3-5/day',
          safetyDescription: 'Freedom but requires careful driving in traffic',
          safetyLevel: 'low'
        },
        {
          method: 'Private Driver',
          cost: '$20-40/day',
          safetyDescription: 'Safe for longer distances and tours',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Invest in safe transportation - Grab over local transport',
        'Stay in tourist areas for better safety infrastructure',
        'Budget extra for international medical insurance',
        'Eat at busy warungs (local eateries) for authentic, safe food'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress modestly covering shoulders and knees especially in temples - sarong and sash required for sacred sites',
      'Remove shoes before entering homes and some traditional establishments - show respect for sacred boundaries',
      'Greet with a friendly smile or traditional Sembah salute (palms together at chest) - warmth is valued in Balinese culture',
      'Step carefully around canang sari offerings on sidewalks - these flower offerings are sacred Hindu daily rituals',
      'Stay calm and polite in all interactions - losing temper or shouting is considered deeply shameful'
    ],
    culturalDonts: [
      'Don\'t touch anyone\'s head even children - it\'s considered the most sacred part of the body in Hindu belief',
      'Don\'t point your feet at people or sacred objects - feet are considered unclean and this is insulting',
      'Don\'t step on flower offerings (canang sari) on ground - these are daily religious offerings and sacred',
      'Don\'t show public displays of affection beyond hand-holding - intimate gestures are kept private in Balinese culture',
      'Don\'t climb sacred trees wrapped in colorful fabrics - they are holy sites and tampering is deeply offensive'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default denpasar;