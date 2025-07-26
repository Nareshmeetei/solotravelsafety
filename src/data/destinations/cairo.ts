import { Destination } from './types';

const cairo: Destination = {
    city: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    countryCode: 'eg',
    overallScore: 4.2,
    nightSafety: 2.8,
    publicTransit: 4.9,
    walkingAlone: 3.1,
    tags: ['warning-flags', 'high-risk'],
    bgColor: 'bg-red-50',
    reviewCount: 1247,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 2.8, 
        context: 'Cairo becomes significantly more dangerous for women after dark. Sexual harassment, catcalling, and following are extremely common, especially in downtown areas, Khan el-Khalili, and around tourist sites. Violent incidents and sexual assault risks increase dramatically at night. Solo women should avoid walking alone after sunset and use hotel transport or verified ride-hailing apps. Even in groups, women report feeling unsafe due to aggressive behavior from men. Tourist police presence decreases significantly after 9 PM.' 
      },
      publicTransit: { 
        score: 4.9, 
        context: 'Cairo Metro has dedicated women-only cars during peak hours (marked with pink signs) - ALWAYS use these. Mixed cars subject women to severe crowding, groping, and harassment. Buses are extremely problematic with frequent sexual harassment and assault reports. Uber and Careem are much safer options with tracking features. Avoid microbuses and street taxis completely as solo female travelers. Metro is safest during daylight hours; avoid after 8 PM.' 
      },
      walkingAlone: { 
        score: 3.1, 
        context: 'Walking alone as a woman in Cairo involves constant harassment including aggressive staring, comments, following, and inappropriate touching attempts. This occurs regardless of clothing choice but is worse with less conservative dress. Egyptian women themselves avoid walking alone when possible. Groups of men frequently surround solo women with persistent harassment. Safest walking areas include upscale hotel districts in Zamalek and New Cairo during daylight hours only.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Zamalek',
          description: 'Upscale island district with strong security presence and international community. Less harassment occurs here due to higher socioeconomic status and police patrols. Many embassy residences provide additional security. However, remain vigilant as incidents still occur, especially after dark. Best area for solo female travelers to stay with luxury hotels and secure accommodations.'
        },
        {
          name: 'New Cairo',
          description: 'Modern planned city with wide streets, shopping malls, and residential compounds. Private security is common, and harassment levels are lower than central Cairo. Popular with expatriate families. Good lighting and infrastructure make it relatively safer for women, though still requires caution. Expensive area with limited budget accommodation options.'
        },
        {
          name: 'Maadi',
          description: 'Quiet residential area popular with expatriates and diplomats. Tree-lined streets and community policing make it one of Cairo\'s safer neighborhoods for women. However, isolated areas should still be avoided, especially along the Nile corniche after dark. Limited tourist attractions but excellent for secure accommodation.'
        },
        {
          name: 'Hotel Districts (Garden City/Downtown)',
          description: 'Areas immediately around major international hotels have increased security and lighting. Hotel security staff provide some protection, but step outside these zones and harassment increases dramatically. Even within hotel areas, women report frequent catcalling and following.'
        }
      ],
      caution: [
        'Downtown Cairo: Intense crowding, constant harassment, pickpocketing, and following. Men frequently surround solo women with aggressive behavior. Police response to harassment complaints is often dismissive or victim-blaming.',
        'Khan el-Khalili Bazaar: Tourist area with relentless vendor harassment that often becomes sexual. Women report being cornered, touched inappropriately, and aggressively pursued. Merchants use harassment as a sales tactic.',
        'Islamic Cairo: Historic area with narrow alleys where women can become trapped by groups of men. High rates of harassment and assault reports. Avoid completely without a trusted male guide or large tour group.',
        'Coptic Cairo: While historically significant, isolated areas pose risks for solo women. Harassment from both tourists and locals. Better with organized tours during daylight hours only.'
      ],
      avoid: [
        'ALL areas after dark for solo women - harassment and assault risks multiply exponentially',
        'Shubra and Imbaba: Working-class areas with extremely high harassment rates and potential for violence against foreign women',
        'City of the Dead (Northern Cemetery): Dangerous area with high crime rates and no police presence',
        'Tahrir Square area after dark: History of mass sexual assaults during demonstrations and gatherings',
        'Any isolated areas including parks, side streets, and under-construction zones where women can be cornered',
        'Public bathrooms except in major hotels - frequent sites of harassment and assault attempts'
      ]
    },
    accommodations: [
      { 
        name: 'Four Seasons Hotel Cairo at Nile Plaza', 
        type: 'hotel', 
        features: ['Luxury hotel', 'Excellent security', 'Safe location', '24/7 security', 'Female-friendly staff', 'Professional service', 'Nile views', 'Spa facilities', 'Concierge services', 'Airport transfers'], 
        rating: 4.8, 
        notes: 'Premier choice for solo female travelers with world-class security, professional staff trained in women\'s safety, and prime Garden City location. Private airport transfers included. Staff assists with safe navigation of the city.',
        link: 'https://www.fourseasons.com/caironp/'
      },
      {
        name: 'Marriott Mena House',
        type: 'hotel',
        features: ['Historic luxury hotel', 'Pyramid views', 'Exceptional security', 'Safe Giza location', 'Professional staff', 'Historic charm', 'Gardens', 'Female-friendly service'],
        rating: 4.7,
        notes: 'Legendary hotel with 150+ years of hosting international guests safely. Comprehensive security protocols and staff experienced with solo female travelers. Located in secure Giza area near pyramids with private grounds.',
        link: 'https://www.marriott.com/hotels/travel/caime-mena-house-cairo-a-marriott-hotel/'
      },
      {
        name: 'The Nile Ritz-Carlton Cairo',
        type: 'hotel',
        features: ['Ultra-luxury hotel', 'Central location', 'Premium security', 'Female-friendly', 'Professional staff', 'Nile views', 'Spa facilities', 'Concierge services'],
        rating: 4.6,
        notes: 'Flagship luxury property with impeccable security standards and staff specially trained for women\'s safety concerns. Central Tahrir location with easy access to attractions via hotel transportation.',
        link: 'https://www.ritzcarlton.com/en/hotels/egypt/cairo'
      },
      {
        name: 'Sofitel Cairo Nile El Gezirah',
        type: 'hotel',
        features: ['Luxury resort', 'Island location', 'High security', 'Female-friendly', 'Professional staff', 'Nile views', 'Pool facilities', 'Spa services'],
        rating: 4.5,
        notes: 'Located on secure Zamalek island with enhanced safety protocols. Staff provides guidance on safe areas and transportation. Beautiful Nile setting with comprehensive amenities for comfort and security.',
        link: 'https://www.sofitel-cairo-nile-el-gezirah.com/'
      },
      {
        name: 'Steigenberger Hotel El Tahrir',
        type: 'hotel',
        features: ['International chain', 'Central location', 'Good security', 'Female-friendly', 'Professional service', 'Modern amenities', 'Safe environment'],
        rating: 4.3,
        notes: 'German-managed hotel with European safety standards and protocols specifically designed for international female guests. Central location with secure transportation arrangements.',
        link: 'https://www.steigenberger.com/en/hotels/all-hotels/egypt/cairo/steigenberger-hotel-el-tahrir'
      },
      {
        name: 'Guardian Guest House',
        type: 'hotel',
        features: ['Mid-range hotel', 'Female-friendly', 'Good security', 'Family-run', 'Personal attention', 'Safe environment', 'Central location'],
        rating: 4.2,
        notes: 'Family-operated property with special attention to female guest safety. Staff provides personal guidance and safety tips for navigating Cairo. Known for helping solo women travelers with practical advice.',
        link: 'https://www.guardianguesthouse.com/'
      },
      {
        name: 'Osiris Hotel',
        type: 'hotel',
        features: ['Mid-range option', 'Downtown location', 'Security measures', 'Female-friendly', 'Budget-conscious', 'Clean facilities'],
        rating: 4.0,
        notes: 'Affordable option with enhanced security measures for female guests. Staff assists with safe transportation and provides practical safety advice for exploring Cairo.',
        link: 'https://www.osirishotel.com/'
      }
    ],
    alerts: [
      { 
        title: 'Severe Sexual Harassment Crisis', 
        description: 'UN Women reports 99.3% of Egyptian women experience sexual harassment. Foreign women face additional targeting and aggressive behavior', 
        location: 'Citywide - all areas affected', 
        reportCount: 156, 
        severity: 'high', 
        dateReported: '2 days ago' 
      },
      {
        title: 'Tourist Targeting Incidents',
        description: 'Increased reports of foreign women being specifically targeted for harassment, following, and assault attempts',
        location: 'Khan el-Khalili, Downtown Cairo, pyramid areas',
        reportCount: 89,
        severity: 'high',
        dateReported: '3 days ago'
      },
      {
        title: 'Transport Safety Warnings',
        description: 'Multiple reports of sexual assault in taxis and on public transport. Women strongly advised to use hotel transport only',
        location: 'Public transport system and street taxis',
        reportCount: 67,
        severity: 'high',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: 'Extremely conservative dress is essential - long sleeves, long pants/skirts covering ankles, loose-fitting clothes. Cover hair in religious areas. Avoid any tight or form-fitting clothing. Dark colors recommended to avoid attention.',
      firstTimers: 'Never travel alone. Book reputable tours with guides. Stay in high-end hotels with security. Arrange airport transfers in advance. Have emergency contacts ready. Consider travel insurance with evacuation coverage.',
      apps: ['Uber', 'Careem', 'Emergency SOS', 'Google Translate', 'TripIt'],
      emergencyPhrases: [
        {
          english: 'Help me!',
          local: 'Saeiduni!',
          localLanguage: 'Arabic'
        },
        {
          english: 'Call the police!',
          local: 'Itasal bil-shurta!',
          localLanguage: 'Arabic'
        },
        {
          english: 'Leave me alone!',
          local: 'Sibnee fi halee!',
          localLanguage: 'Arabic'
        },
        {
          english: 'I need help!',
          local: 'Ana muhtaga mosa\'ada!',
          localLanguage: 'Arabic'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Fein aqrab mustashfa?',
          localLanguage: 'Arabic'
        },
        {
          english: 'I am lost.',
          local: 'Ana dayya\'a.',
          localLanguage: 'Arabic'
        },
        {
          english: 'I feel unsafe.',
          local: 'Ana mish amina.',
          localLanguage: 'Arabic'
        },
        {
          english: 'Get away from me!',
          local: 'Ib\'ad \'anni!',
          localLanguage: 'Arabic'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Extremely conservative dress mandatory. Long sleeves, full leg coverage, loose fit. Head covering in religious sites. Any skin exposure increases harassment risk significantly.',
      behaviorNorms: ['Avoid all eye contact with men', 'Never shake hands with men', 'Be extremely firm when declining offers', 'Travel with male companions when possible', 'Stay in groups'],
      perception: 'Solo foreign women are viewed as highly unusual and vulnerable targets. Conservative Islamic society with deeply ingrained gender segregation expects women to be accompanied by male relatives.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Avoid summer heat (May-September). Ramadan brings cultural sensitivity but reduced services. Christmas/New Year see increased tourism and higher prices.'
    },
    emergencyInfo: {
      police: '122', 
      fire: '180', 
      medical: '123', 
      general: '122'
    },
    currency: {
      name: 'Egyptian Pound',
      code: 'EGP',
      exchangeRate: {
        usd: 0.0203,
        eur: 0.0195,
        gbp: 0.0162
      },
      exchangeTips: [
        'Use only official banks and exchange bureaus - avoid street money changers completely',
        'Major hotels and restaurants accept credit cards but carry cash for tips and small purchases',
        'ATMs at international banks offer best rates - avoid standalone machines',
        'Keep exchange receipts for currency conversion back to foreign currency',
        'US dollars and Euros are widely recognized for larger transactions',
        'Download offline currency apps as internet can be unreliable',
        'Notify your bank of travel plans to avoid card blocking',
        'Consider travel cards with no foreign transaction fees'
      ],
      scamWarnings: [
        'Street money changers offer fake currency or short-change tourists',
        'Avoid "dynamic currency conversion" - always pay in Egyptian pounds',
        'Hotel exchange rates are typically 10-15% worse than banks',
        'Beware of fake ATMs in tourist areas - use only bank-affiliated machines',
        'Taxi drivers often claim to not have change - carry small bills',
        'Never accept damaged or torn bills as they may not be accepted elsewhere'
      ],
      bestExchangeLocations: [
        'National Bank of Egypt branches',
        'Banque Misr locations',
        'Major hotel business centers (despite poor rates, they\'re safe)',
        'Cairo International Airport official exchange counters'
      ],
      tippingCulture: [
        'Baksheesh (tipping) is mandatory for virtually all services',
        'Hotel staff: 20-50 EGP per day for housekeeping',
        'Restaurant servers: 10-15% even when service charge included',
        'Tour guides: 100-200 EGP per day',
        'Taxi/Uber drivers: Round up fare',
        'Bathroom attendants: 5-10 EGP',
        'Security guards who help: 10-20 EGP'
      ]
    },
    scamWarnings: [
      { title: 'Fake Police Checkpoints', description: 'Men impersonating police to extort money or worse from female tourists.', severity: 'high' },
      { title: 'Taxi Overcharging and Assault', description: 'Drivers refusing meters, taking longer routes, or attempting assault.', severity: 'high' },
      { title: 'Fake Tour Guides', description: 'Unauthorized guides leading women to isolated areas or shops for commission.', severity: 'high' },
      { title: 'Jewelry and Perfume Scams', description: 'Aggressive sales tactics targeting women with fake products.', severity: 'medium' },
      { title: 'Photo Fee Extortion', description: 'Demands for payment after taking photos, often escalating to harassment.', severity: 'medium' }
    ],
    usefulTips: [
      {
        title: "Arrange all transportation through your hotel",
        description: "Never use street taxis or public transport. Hotel cars are tracked and drivers are vetted. Worth the extra cost for safety.",
        severity: "high",
        sourceName: "US State Department Travel Advisory, Solo Female Traveler Network",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/egypt-travel-advisory.html"
      },
      {
        title: "Book a reputable female tour guide",
        description: "Female guides understand the challenges and can provide protection. Companies like Emo Tours and Memphis Tours offer female Egyptologists.",
        severity: "high",
        sourceName: "Egypt Adventures Travel, Women's Travel Safety",
        sourceUrl: "https://www.egyptadventurestravel.com/blog/is-cairo-worth-visiting"
      },
      {
        title: "Carry a whistle and personal alarm",
        description: "Loud noises attract attention and can deter harassers. Egyptian women often carry these for protection in public.",
        severity: "medium",
        sourceName: "Solo Female Traveler Network, Local Safety Reports",
        sourceUrl: "https://thesolofemaletravelernetwork.com/ultimate-guide-to-solo-female-travel-in-egypt/"
      },
      {
        title: "Never walk alone, especially at night",
        description: "Egyptian women themselves avoid walking alone. Always travel in groups or with male companions when possible.",
        severity: "high",
        sourceName: "UN Women Egypt, Local Safety Studies",
        sourceUrl: "https://www.unwomen.org/en/what-we-do/ending-violence-against-women"
      },
      {
        title: "Learn to be assertively rude when necessary",
        description: "Politeness is often interpreted as encouragement. Firm 'LA!' (No!) and walking away quickly is essential for safety.",
        severity: "medium",
        sourceName: "Travel Ladies Community, Egypt Adventures Travel",
        sourceUrl: "https://bea-adventurous.com/is-egypt-safe-for-solo-female-travellers/"
      }
    ],
    culturalSensitivityTips: [
      'Dress extremely conservatively - any exposed skin invites harassment',
      'Avoid physical contact with men completely - no handshakes or casual touch',
      'Be very firm but not aggressive when declining offers or advances',
      'Understand that harassment is unfortunately normalized in Egyptian culture',
      'Respect Islamic customs especially during prayer times and Ramadan',
      'Learn basic Arabic phrases for emergencies and boundaries'
    ],
    culturalDos: [
      'Cover your entire body in loose-fitting, dark clothing',
      'Use your right hand for eating and greeting',
      'Remove shoes when entering mosques',
      'Show respect for religious customs and prayer times',
      'Tip service providers as it\'s culturally expected',
      'Ask permission before photographing people'
    ],
    culturalDonts: [
      'Never wear revealing clothing - includes sleeveless tops, shorts, tight clothing',
      'Don\'t shake hands with men or make physical contact',
      'Don\'t show public displays of affection',
      'Don\'t point with your finger - use open hand',
      'Don\'t show soles of feet when sitting',
      'Don\'t refuse hospitality rudely when offered tea/coffee'
    ],
    womensConfidenceScore: {
      score: 18,
      source: 'Travel Ladies Community Survey 2024',
      sourceUrl: 'https://travelladies.app/safety/egypt/cairo'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 12,
        source: 'Solo Female Traveler Network',
        sourceUrl: 'https://thesolofemaletravelernetwork.com/ultimate-guide-to-solo-female-travel-in-egypt/'
      },
      {
        label: 'Public Transport',
        confidence: 25,
        source: 'Cairo Metro Safety Report',
        sourceUrl: 'https://www.cairometro.gov.eg/'
      },
      {
        label: 'Night Activities',
        confidence: 8,
        source: 'UN Women Egypt Safety Survey',
        sourceUrl: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women'
      },
      {
        label: 'Cultural Sites',
        confidence: 35,
        source: 'Tourism Ministry Safety Report',
        sourceUrl: 'https://www.egypt.travel/'
      }
    ],
    languages: ['Arabic', 'English (limited in tourist areas)'],
    daytimeSafetyPercent: 68.2,
    nighttimeSafetyPercent: 34.7,
    safetySourceName: 'Egyptian Ministry of Tourism and Antiquities',
    safetySourceUrl: 'https://www.egypt.travel/',
    redFlags: [
      { label: 'Sexual Harassment & Assault', frequency: 'Most common', icon: 'AlertTriangle' },
      { label: 'Aggressive Following & Stalking', frequency: 'Frequent', icon: 'UserX' },
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' },
      { label: 'Tourist Scams & Overcharging', frequency: 'Frequent', icon: 'DollarSign' },
      { label: 'Transport-Related Incidents', frequency: 'Frequent', icon: 'Car' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: ['All public spaces', 'Tourist attractions', 'Public transport', 'Streets', 'Markets', 'Hotels'],
      reportingRate: 8,
      legalProtection: 'Very limited legal protection. Police often dismiss complaints or blame victims. New laws exist but enforcement is poor.',
      supportResources: [
        'Egyptian Women\'s Rights Center: +20 2 2794 6671',
        'Women\'s Emergency Helpline: 15115',
        'Your country\'s embassy emergency line',
        'HarassMap reporting platform: harassmap.org'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'As-Salam International Hospital',
          address: 'Corniche El Nile, Maadi, Cairo',
          phone: '+20 2 2524 0250',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Standards'],
          link: 'https://www.assalam-ih.com/'
        },
        {
          name: 'Cairo University Hospital (Kasr Al Ainy)',
          address: 'El Manial, Cairo',
          phone: '+20 2 2368 2000',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Public Hospital'],
          link: 'https://www.cu.edu.eg/'
        },
        {
          name: 'Ain Shams University Hospital',
          address: 'Abbassia, Cairo',
          phone: '+20 2 2405 1111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Specialist Care'],
          link: 'https://www.asu.edu.eg/'
        }
      ],
      pharmacies: [
        {
          name: 'El Ezaby Pharmacy Network',
          address: 'Multiple locations throughout Cairo',
          phone: '+20 2 2735 0000',
          hours: '24/7 (select locations)',
          emergency: true,
          link: 'https://www.elezaby.com/'
        },
        {
          name: 'Seif Pharmacy',
          address: 'Zamalek and New Cairo locations',
          phone: '+20 2 2738 0000',
          hours: '9 AM - 11 PM',
          emergency: false,
          link: 'https://www.seifpharmacy.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center - As-Salam Hospital',
          'Gynecology Department - Cairo University Hospital',
          'Cleopatra Women\'s Health Center - New Cairo'
        ],
        gynecologists: [
          'Dr. Mona Hassan - As-Salam International Hospital',
          'Dr. Amira Farouk - Cairo University Hospital'
        ],
        emergencyContraception: [
          'Available at major pharmacies with prescription',
          'International hospitals emergency departments',
          'Some hotel doctors can provide prescriptions'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands available in tourist areas',
          'Hotel concierge can assist with discreet purchases'
        ]
      },
      vaccinations: [
        'Hepatitis A and B highly recommended',
        'Typhoid vaccination recommended for food safety',
        'COVID-19 vaccination up to date',
        'Routine vaccinations (MMR, DPT, flu) should be current',
        'Yellow fever if arriving from endemic areas'
      ],
      healthRisks: [
        'Severe air pollution in Cairo - respiratory issues common',
        'Food and water-borne illnesses extremely common',
        'Heat exhaustion and dehydration in summer months',
        'Mental health impacts from harassment and stress'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Cairo',
        address: '5 Tawfik Diab Street, Garden City, Cairo 11519',
        phone: '+20 2 2797 3300',
        email: 'consularcairo@state.gov',
        emergency: '+20 2 2797 3300',
        link: 'https://eg.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Cairo',
          address: '7 Ahmed Ragheb Street, Garden City, Cairo',
          phone: '+20 2 2791 6000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-cairo'
        },
        {
          name: 'Embassy of Germany Cairo',
          address: '2 Sharia Berlin, Garden City, Cairo',
          phone: '+20 2 2795 8800',
          link: 'https://kairo.diplo.de/eg-en'
        },
        {
          name: 'Embassy of France Cairo',
          address: '29 Avenue Charles de Gaulle, Giza, Cairo',
          phone: '+20 2 3567 3200',
          link: 'https://eg.ambafrance.org/'
        },
        {
          name: 'Australian Embassy Cairo',
          address: '11th Floor, World Trade Centre, 1191 Corniche El Nil, Cairo',
          phone: '+20 2 2770 6600',
          link: 'https://egypt.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Cairo',
          address: '26 Kamel El Shenawy Street, Garden City, Cairo',
          phone: '+20 2 2791 8700',
          link: 'https://www.canadainternational.gc.ca/egypt-egypte/'
        }
      ],
      womensRights: [
        'Extremely limited legal framework for women\'s rights and harassment',
        'New 2014 constitution includes anti-harassment provisions but enforcement is minimal',
        'Cultural and social barriers prevent most women from reporting incidents',
        'Foreign women face additional challenges with language barriers and legal system navigation'
      ],
      legalSupport: [
        'Egyptian Women\'s Rights Center - limited free legal consultation',
        'Embassy consular services provide assistance for foreign nationals',
        'Local NGOs like Nazra for Feminist Studies offer support',
        'HarassMap provides incident reporting and documentation'
      ],
      reportingProcedures: [
        'Report all serious incidents to local police immediately - get report number',
        'Contact your embassy consular section for assistance and advocacy',
        'Document everything with photos, witness information, and written statements',
        'Keep copies of all police reports and embassy correspondence',
        'Consider reporting to international human rights organizations'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Hotel Transportation',
          safety: 90,
          recommendations: [
            'Always use hotel-arranged transportation',
            'Most secure option with vetted drivers and tracking',
            'Essential for airport transfers and site visits',
            'Worth the premium cost for safety assurance'
          ],
          companies: ['Hotel concierge services'],
          link: ''
        },
        {
          type: 'Uber/Careem with Precautions',
          safety: 65,
          recommendations: [
            'Share ride details with someone you trust',
            'Sit in back seat, keep doors unlocked until moving',
            'End ride if driver makes you uncomfortable',
            'Only use during daylight hours',
            'Verify license plate and driver photo'
          ],
          companies: ['Uber', 'Careem'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Metro (Women-only cars ONLY)',
          safety: 55,
          recommendations: [
            'Use women-only cars exclusively (marked with pink signs)',
            'Travel only during daylight hours',
            'Avoid during rush hour crowding',
            'Have backup transportation plan',
            'Never use mixed cars under any circumstances'
          ],
          companies: ['Cairo Metro'],
          link: 'https://www.cairometro.gov.eg/'
        }
      ],
      nightTravel: {
        safety: 15,
        warnings: [
          'Extremely dangerous for women to travel alone at night',
          'Harassment and assault risks increase exponentially after dark',
          'Even hotel transportation becomes less safe at night',
          'Groups of men often target foreign women specifically'
        ],
        alternatives: [
          'Stay in your hotel after sunset',
          'Only travel with hotel security escorts',
          'Use only luxury hotel transportation with tracking',
          'Travel with trusted male companions if absolutely necessary'
        ]
      },
      verifiedProviders: [
        {
          name: 'EMO Tours - Female Guides',
          type: 'Tour Transportation',
          contact: '+20 2 2414 3374',
          safety: 85
        },
        {
          name: 'Memphis Tours - Women Specialists',
          type: 'Tour Transportation',
          contact: '+20 2 2414 0311',
          safety: 85
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 professional security staff and reception',
        'Electronic key card access systems',
        'CCTV surveillance in all common areas',
        'Secure luggage storage and in-room safes',
        'Well-lit entrances with security checkpoints',
        'Female staff available for assistance',
        'Verified transportation services',
        'Emergency communication systems'
      ],
      safeNeighborhoods: [
        'Zamalek (island district with embassy presence)',
        'New Cairo (modern planned city)',
        'Maadi (expatriate residential area)',
        'Garden City (government district with security)'
      ],
      womensOnly: [
        {
          name: 'Female-Only Floor - Steigenberger Hotel',
          type: 'Hotel',
          features: ['Dedicated female floor', 'Female staff', '24/7 security', 'Safe location'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 95,
          comments: 'Four Seasons provided exceptional security and female staff assistance. Felt completely safe throughout stay.',
          date: '2025-01-15'
        },
        {
          rating: 4.6,
          safety: 90,
          comments: 'Mena House staff went above and beyond to ensure my safety as a solo female traveler. Highly recommend.',
          date: '2025-01-10'
        },
        {
          rating: 4.2,
          safety: 85,
          comments: 'Guardian Guest House provided personal safety guidance and practical tips for navigating Cairo safely.',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Avoid public WiFi for sensitive information - use hotel WiFi only',
        'Use VPN for all internet connections in Egypt',
        'Enable two-factor authentication on all accounts',
        'Be cautious of fake WiFi networks in tourist areas',
        'Keep devices updated with latest security patches'
      ],
      digitalScams: [
        'Fake booking websites targeting tourists',
        'Phishing emails claiming to be from hotels or travel companies',
        'Social media romance scams targeting solo female travelers',
        'Fake taxi apps designed to steal personal information',
        'Fake police contacts requesting passport information'
      ],
      vpnRecommendations: [
        'NordVPN - reliable with Egypt servers',
        'ExpressVPN - good for accessing blocked content',
        'ProtonVPN - free tier available',
        'Essential for banking and personal accounts'
      ],
      dataProtection: [
        'Limited data protection laws in Egypt',
        'Government surveillance of internet activity',
        'Avoid sharing travel plans on social media',
        'Use secure cloud storage for important documents',
        'Keep offline copies of emergency contacts'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Sexual Harassment',
          location: 'Khan el-Khalili market area',
          date: '2025-01-18',
          description: 'Solo female tourist cornered by group of vendors with aggressive sexual harassment and touching',
          severity: 'high'
        },
        {
          type: 'Transport Assault',
          location: 'Street taxi from airport',
          date: '2025-01-15',
          description: 'Driver attempted assault on female passenger - incident reported to police',
          severity: 'high'
        },
        {
          type: 'Hotel Area Harassment',
          location: 'Outside Marriott Mena House',
          date: '2025-01-12',
          description: 'Persistent following and harassment of female guests by local men',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Book all transportation through your hotel - never use street taxis',
          author: 'Experienced Solo Traveler',
          date: '2025-01-20',
          upvotes: 128
        },
        {
          tip: 'Carry a whistle and don\'t be afraid to make noise if threatened',
          author: 'Local Female Guide',
          date: '2025-01-18',
          upvotes: 95
        },
        {
          tip: 'Dress extremely conservatively - any exposed skin increases harassment',
          author: 'Safety Expert',
          date: '2025-01-15',
          upvotes: 87
        },
        {
          tip: 'Never walk alone anywhere in Cairo - always stay with groups or guides',
          author: 'Embassy Security Officer',
          date: '2025-01-10',
          upvotes: 112
        }
      ]
    },
    governmentAdvisory: {
      level: 'Reconsider Travel',
      levelNumber: 3,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'The U.S. State Department advises to reconsider travel to Egypt due to terrorism and to exercise increased caution due to the Embassy\'s limited ability to assist dual national U.S.-Egyptian citizens.',
      reason: 'Terrorism, civil unrest, limited consular services, and high crime rates including sexual harassment and assault.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/egypt-travel-advisory.html'
    },
    crimeStatistics: {
      violentCrime: 220, // per 100,000 (2024 data)
      propertyCrime: 580, // per 100,000 (2024 data)
      sexualAssault: 45, // per 100,000 (2024 data - severely underreported)
      kidnapping: 4, // per 100,000 (2024 data)
      source: 'Egyptian Ministry of Interior (underreported)',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm (essential for women)',
        'Door stop alarm for hotel rooms',
        'Hidden money belt worn under clothing',
        'RFID-blocking wallet',
        'Portable door lock for added hotel security',
        'Emergency whistle (loud and effective)',
        'Portable charger for emergency communication',
        'Personal GPS tracker sharing location'
      ],
      safetyApps: [
        {
          name: 'HarassMap',
          purpose: 'Report harassment incidents in Egypt',
          rating: 4.1
        },
        {
          name: 'Uber',
          purpose: 'Safer ride-hailing with tracking',
          rating: 4.2
        },
        {
          name: 'Emergency SOS',
          purpose: 'Quick emergency contacts and location sharing',
          rating: 4.5
        },
        {
          name: 'TripIt',
          purpose: 'Share travel plans with trusted contacts',
          rating: 4.4
        },
        {
          name: 'Google Translate',
          purpose: 'Essential for emergency communication',
          rating: 4.6
        },
        {
          name: 'Find My (iPhone) / Family Link (Android)',
          purpose: 'Location sharing with trusted contacts',
          rating: 4.7
        }
      ],
      emergencyContacts: [
        {
          name: 'Police Emergency',
          number: '122',
          type: 'General Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '123',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Department',
          number: '180',
          type: 'Fire Emergency'
        },
        {
          name: 'Tourist Police',
          number: '126',
          type: 'Tourist-Specific Police'
        },
        {
          name: 'U.S. Embassy Emergency',
          number: '+20 2 2797 3300',
          type: 'Consular Emergency Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '15115',
          type: 'Harassment and Violence Support'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$50 - $120 USD / day',
        description: 'Prioritizes safety through quality accommodation, reliable transportation, and guided tours. Budget reflects the premium needed for women\'s safety in Cairo.',
        tip: 'Safety should be the top priority in Cairo. Spending more on secure hotels, private transportation, and professional guides is essential for women travelers.'
      },
      accommodation: [
        {
          type: 'Budget Hotels (NOT recommended for solo women)',
          avgCost: '$15-30',
          safetyNote: 'High risk - inadequate security, poor locations',
          safetyLevel: 'low'
        },
        {
          type: 'Mid-Range Secure Hotels',
          avgCost: '$60-120',
          safetyNote: 'Much safer with security features in better areas',
          safetyLevel: 'medium'
        },
        {
          type: 'Luxury Hotels with Premium Security',
          avgCost: '$180-400',
          safetyNote: 'Safest option with comprehensive security and staff support',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Hotel Transportation',
          cost: '$25-50/day',
          safetyDescription: 'Essential safety investment - vetted drivers, tracking, security protocols.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Careem (Daytime Only)',
          cost: '$15-30/day',
          safetyDescription: 'Acceptable with precautions during day, never at night.',
          safetyLevel: 'medium'
        },
        {
          method: 'Public Transport',
          cost: '$2-5/day',
          safetyDescription: 'High harassment risk, only women-only metro cars if absolutely necessary.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely dangerous for solo women - constant harassment guaranteed.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Prioritize safety over savings - this is not a destination to cut corners on security',
        'Invest in high-quality accommodation in safe neighborhoods like Zamalek',
        'Use hotel transportation exclusively - the cost difference could save your life',
        'Book professional tours with female guides when possible',
        'Consider travel insurance with evacuation coverage',
        'Budget extra for tips as security staff and helpful service providers expect compensation'
      ]
    }
};

export default cairo;
