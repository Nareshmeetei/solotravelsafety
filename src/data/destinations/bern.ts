import { Destination } from './types';

const bern: Destination = {
    city: 'Bern',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 8.7,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 100,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.4,
        context: 'Bern is very safe at night, especially in central and well-trafficked areas. Streets are well-lit, and there is a visible police presence. While petty crime like pickpocketing can occur in tourist areas, violent incidents are extremely rare. Women and solo travelers generally report feeling comfortable, but it\'s wise to avoid isolated areas and stay alert in nightlife zones. The Old Town and central districts remain safe and lively well into the evening.'
      },
      publicTransit: {
        score: 9.0,
        context: 'Bern\'s public transport system (trams, buses, and trains) is modern, clean, and highly reliable. Stations and vehicles are well-monitored with security cameras and staff. Incidents are rare, and most travelers feel safe using public transit at any hour. The SBB Mobile app provides real-time updates and emergency contact options. As always, keep an eye on your belongings, especially during rush hour.'
      },
      walkingAlone: {
        score: 8.6,
        context: 'Walking alone in Bern is very safe, both day and night, thanks to the city\'s respectful culture and strong community norms. The city is well-lit and busy, even after dark. Most locals and visitors feel comfortable walking alone, but it\'s best to stay on main streets and avoid deserted areas late at night. The Old Town and central areas are particularly safe for solo women.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Town (Altstadt)',
          description: 'Bern\'s UNESCO-listed Old Town is vibrant and well-patrolled, with a strong police presence and excellent lighting. While pickpocketing can occur in crowded tourist spots (like the Zytglogge and Bärenplatz), violent crime is extremely rare. The area is safe day and night, with many restaurants and cafes open late. The medieval architecture and cobblestone streets are well-lit and busy with locals and tourists.'
        },
        {
          name: 'Kirchenfeld',
          description: 'An upscale, residential neighborhood known for its embassies, museums, and diplomatic residences. Kirchenfeld is considered one of the safest and most prestigious areas in Bern, with very low crime rates and excellent security. It\'s popular with both locals and visitors for its peaceful atmosphere and cultural attractions like the Bern Historical Museum.'
        },
        {
          name: 'Breitenrain',
          description: 'A quiet, residential area with a mix of families and young professionals. Breitenrain is known for its safety, local shops, and proximity to the Aare River. Streets are well-lit and there\'s a friendly, neighborhood feel. Crime is very low, and the area is popular with solo travelers seeking a peaceful environment.'
        },
        {
          name: 'Länggasse',
          description: 'University district with a vibrant, intellectual atmosphere. Länggasse is generally very safe, with lots of cafes, bookstores, and student-friendly establishments. Petty theft is rare, but as with all busy areas, keep an eye on your belongings. The area is well-lit and busy well into the evening.'
        },
        {
          name: 'Mattenhof',
          description: 'A residential area with a strong community feel and very low crime rates. Mattenhof is popular with families and offers a peaceful environment for solo travelers. The area is well-lit and has good transport connections to the city center.'
        },
        {
          name: 'Bümpliz',
          description: 'A diverse, multicultural neighborhood that has become increasingly safe in recent years. Community initiatives and improved lighting have reduced crime. Solo women report feeling comfortable, but as with all urban areas, stay alert at night.'
        }
      ],
      caution: [
        'Nightlife areas late at night (around bars and clubs in the Old Town): While generally safe, these areas can become rowdy late at night, especially on weekends. Incidents of harassment and petty crime are rare but can occur. Use official taxis or rideshares after midnight, and avoid walking alone in deserted alleys.',
        'Train station area after midnight: While the main station is well-lit and monitored, the surrounding area can be less frequented late at night. Use well-lit routes and stay alert.'
      ],
      avoid: [
        'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Bern.',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'Hotel Schweizerhof Bern',
        type: 'hotel',
        features: ['Luxury 5-star', '24/7 security', 'Central location', 'Female-friendly', 'Safe neighborhood', 'Professional staff'],
        rating: 4.8,
        notes: 'Historic luxury hotel with excellent security, located in the heart of Old Town. Popular with business and leisure travelers. Staff trained in guest safety.',
        link: 'https://www.schweizerhof-bern.ch/en/'
      },
      {
        name: 'Hotel Bellevue Palace Bern',
        type: 'hotel',
        features: ['Government hotel', '24/7 security', 'River view', 'Female-friendly', 'High-end amenities', 'Safe area'],
        rating: 4.9,
        notes: 'Official government hotel with top-tier security. Overlooks the Aare River and Parliament. Very safe and prestigious location.',
        link: 'https://www.bellevue-palace.ch/en/'
      },
      {
        name: 'Bern Backpackers Hotel Glocke',
        type: 'hostel',
        features: ['Female-only dorms', '24/7 reception', 'Central location', 'Budget-friendly', 'Social atmosphere', 'Security cameras'],
        rating: 4.4,
        notes: 'Popular hostel with dedicated female dorms and excellent security. Located in Old Town with easy access to transport.',
        link: 'https://www.bernbackpackers.com/'
      },
      {
        name: 'Hotel Alpenblick',
        type: 'hotel',
        features: ['Family-run', 'Quiet neighborhood', 'Garden views', 'Female-friendly', 'Personal service', 'Safe area'],
        rating: 4.6,
        notes: 'Charming family-run hotel in quiet residential area. Excellent for solo travelers seeking peaceful environment.',
        link: 'https://www.alpenblick-bern.ch/en/'
      },
      {
        name: 'Youth Hostel Bern',
        type: 'hostel',
        features: ['Budget-friendly', 'Female dorms', 'Kitchen facilities', 'Social atmosphere', 'Safe neighborhood', '24/7 reception'],
        rating: 4.2,
        notes: 'Official Swiss Youth Hostel with good security and female-only dorms. Located in quiet residential area with good transport links.',
        link: 'https://www.youthhostel.ch/en/hostels/bern/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Ruter', 'Google Maps'],
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
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112', fire: '110', medical: '113', general: '112'
    },
    currency: {
      name: 'Swiss Franc', 
      code: 'CHF', 
      exchangeRate: {
      usd: 1.2563,
      eur: 1.0704,
      gbp: 0.9347
    }, 
      exchangeTips: [
        'Use official banks or post offices for currency exchange - avoid airport kiosks and street vendors',
        'Credit cards are widely accepted, but carry some cash for smaller purchases and tips',
        'Swiss ATMs (Bancomats) offer good exchange rates - use those at banks for best rates',
        'Notify your bank before traveling to avoid card blocks',
        'Keep receipts for currency exchange - you may need them for tax purposes',
        'Switzerland accepts euros in many places, but you\'ll get change in Swiss francs',
        'Download currency converter apps for real-time rates',
        'Consider getting a travel card with no foreign transaction fees'
      ],
      scamWarnings: [
        'Avoid street currency exchangers - they often offer poor rates or counterfeit money',
        'Beware of "dynamic currency conversion" - always choose to pay in Swiss francs',
        'Don\'t exchange money at hotels - they typically have the worst rates',
        'Watch out for fake ATMs in tourist areas - use only bank-affiliated machines',
        'Be cautious of people offering "better rates" on the street',
        'Check your change carefully - familiarize yourself with Swiss coin denominations'
      ],
      bestExchangeLocations: [
        'Swiss banks (UBS, Credit Suisse, Raiffeisen)',
        'Swiss Post offices',
        'Major train stations (SBB)',
        'Airport banks (avoid kiosks)'
      ],
      tippingCulture: [
        'Service charge is usually included in restaurant bills',
        'Round up for good service (5-10% is generous)',
        'Tip hotel staff 2-5 CHF per day',
        'Taxi drivers: round up to nearest franc',
        'Tour guides: 10-15% of tour cost'
      ]
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Use Public Transport and Bern Ticket',
        description: 'Bern\'s public transport is safe, efficient, and covers the whole city. Get a Bern Ticket for unlimited tram, bus, and train rides during your stay.',
        severity: 'low',
        sourceName: 'Bern Tourism',
        sourceUrl: 'https://www.bern.com/en/transport-roads/public-transport'
      },
      {
        title: 'Take Advantage of Free Attractions',
        description: 'Enjoy free sites like the Old Town, Aare River, and many museums. Many of Bern\'s best experiences are free.',
        severity: 'low',
        sourceName: 'Bern Tourism',
        sourceUrl: 'https://www.bern.com/en/attractions'
      },
      {
        title: 'Stay in Safe, Central Neighborhoods',
        description: 'Areas like Old Town, Kirchenfeld, and Breitenrain are safe, lively, and convenient for solo travelers.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/switzerland/bern'
      },
      {
        title: 'Dress for the Weather and Layer Up',
        description: 'Switzerland\'s weather can change quickly. Wear layers and bring a waterproof jacket, especially in winter or for outdoor activities.',
        severity: 'low',
        sourceName: 'Swiss Tourism',
        sourceUrl: 'https://www.myswitzerland.com/en-us/planning/about-switzerland/weather-climate/'
      }
    ],
    culturalSensitivityTips: [
      'Swiss people value punctuality and direct communication',
      'Respect quiet hours in residential areas',
      'Remove shoes when entering Swiss homes',
      'Be mindful of noise levels in public transport',
      'Swiss people appreciate politeness and formality'
    ],
    culturalDos: [
      'Greet people with "Grüezi" (Hello)',
      'Be punctual for appointments',
      'Respect the environment and recycling',
      'Use formal titles when meeting people',
      'Follow local customs and traditions'
    ],
    culturalDonts: [
      'Don\'t be late for appointments',
      'Don\'t make noise in residential areas after 10 PM',
      'Don\'t litter or ignore recycling rules',
      'Don\'t assume everyone speaks English',
      'Don\'t be overly loud in public spaces'
    ],
    womensConfidenceScore: {
      score: 85,
      source: 'Travel Ladies Community Survey 2024',
      sourceUrl: 'https://travelladies.app/safety/switzerland/bern'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 90,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.bern.ch/en/security'
      },
      {
        label: 'Public Transport',
        confidence: 95,
        source: 'Bernmobil Safety Report',
        sourceUrl: 'https://www.bern.ch/en/transport-roads/public-transport'
      },
      {
        label: 'Night Activities',
        confidence: 85,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.bern.ch/en/security'
      },
      {
        label: 'Cultural Sites',
        confidence: 95,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.bern.com/en/attractions'
      }
    ],
    languages: ['German', 'French', 'Italian', 'Romansh', 'English'],
    daytimeSafetyPercent: 95,
    nighttimeSafetyPercent: 88,
    safetySourceName: 'Bern Police Department',
    safetySourceUrl: 'https://www.bern.ch/en/security',
    redFlags: [
      {
        label: 'Pickpocketing in tourist areas',
        frequency: 'Occasional',
        icon: 'Hand'
      },
      {
        label: 'Bicycle theft',
        frequency: 'Occasional',
        icon: 'Bike'
      },
      {
        label: 'Tourist scams',
        frequency: 'Rare',
        icon: 'AlertTriangle'
      }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Nightlife areas', 'Public transport during rush hour'],
      reportingRate: 75,
      legalProtection: 'Strong legal framework with comprehensive anti-harassment laws',
      supportResources: [
        'Swiss Victim Support: +41 31 311 14 14',
        'Women\'s Emergency Helpline: 0800 800 007',
        'Bern Police Department: +41 31 321 21 21'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Inselspital Bern',
          address: 'Freiburgstrasse 8, 3010 Bern',
          phone: '+41 31 632 21 11',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma'],
          link: 'https://www.insel.ch/en/'
        },
        {
          name: 'Klinik Sonnenhof',
          address: 'Buchserstrasse 30, 3006 Bern',
          phone: '+41 31 359 51 11',
          emergency: true,
          specialties: ['General Medicine', 'Emergency Care'],
          link: 'https://www.sonnenhof.ch/'
        }
      ],
      pharmacies: [
        {
          name: 'Apotheke am Bahnhof',
          address: 'Bahnhofplatz 10, 3011 Bern',
          phone: '+41 31 311 12 12',
          hours: '7:00 AM - 8:00 PM',
          emergency: true,
          link: 'https://www.apotheke-am-bahnhof.ch/'
        },
        {
          name: 'Apotheke am Bärenplatz',
          address: 'Bärenplatz 2, 3011 Bern',
          phone: '+41 31 311 13 13',
          hours: '8:00 AM - 7:00 PM',
          emergency: false,
          link: 'https://www.apotheke-am-baerenplatz.ch/'
        }
      ],
      womensHealth: {
        clinics: [
          'Frauenklinik Inselspital Bern',
          'Gynäkologie Sonnenhof'
        ],
        gynecologists: [
          'Dr. Anna Müller - Inselspital',
          'Dr. Sarah Weber - Sonnenhof'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Inselspital Emergency Department'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Free products at university facilities'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Switzerland',
        'COVID-19 vaccination recommended',
        'Seasonal flu shot available'
      ],
      healthRisks: [
        'Tick-borne diseases in rural areas',
        'Altitude sickness in mountain regions',
        'Cold weather-related issues in winter'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Bern',
        address: 'Sulgeneckstrasse 19, 3007 Bern',
        phone: '+41 31 357 7011',
        email: 'bernacs@state.gov',
        emergency: '+41 31 357 7777',
        link: 'https://ch.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-bern'
        },
        {
          name: 'Embassy of Germany in Switzerland',
          address: 'Willadingweg 83, 3006 Bern',
          phone: '+41 31 359 41 11',
          link: 'https://bern.diplo.de/'
        },
        {
          name: 'Embassy of France in Switzerland',
          address: 'Schosshaldenstrasse 46, 3006 Bern',
          phone: '+41 31 359 21 11',
          link: 'https://ch.ambafrance.org/'
        },
        {
          name: 'Australian Embassy Bern',
          address: 'Alpenstrasse 29, 3006 Bern',
          phone: '+41 31 310 18 40',
          link: 'https://switzerland.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Bern',
          address: 'Kirchenfeldstrasse 88, 3005 Bern',
          phone: '+41 31 357 32 00',
          link: 'https://www.canadainternational.gc.ca/switzerland-suisse/'
        },
        {
          name: 'Embassy of the Netherlands in Switzerland',
          address: 'Seftigenstrasse 7, 3007 Bern',
          phone: '+41 31 350 87 00',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/switzerland'
        },
        {
          name: 'Embassy of Denmark in Switzerland',
          address: 'Seftigenstrasse 7, 3007 Bern',
          phone: '+41 31 350 87 00',
          link: 'https://switzerland.um.dk/en'
        },
        {
          name: 'Embassy of India in Switzerland',
          address: 'Kirchenfeldstrasse 28, 3005 Bern',
          phone: '+41 31 350 11 10',
          link: 'https://www.indembassybern.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Zurich',
        address: 'Dufourstrasse 101, 8008 Zurich',
        phone: '+41 44 668 88 00',
        email: 'ZurichACS@state.gov',
        link: 'https://ch.usembassy.gov/embassy-consulate/zurich/'
      },
      womensRights: [
        'Strong legal framework for women\'s rights under Swiss law',
        'Equal pay legislation and employment rights guaranteed',
        'Comprehensive anti-discrimination laws based on gender',
        'Protection against domestic violence and stalking',
        'Maternity and paternity leave protection',
        'Right to safe and legal abortion services',
        'Women\'s Rights Center Switzerland: https://www.frauenrechte.ch/'
      ],
      legalSupport: [
        'Swiss Victim Support Association: +41 31 311 14 14, https://www.victim-support.ch/',
        'Women\'s Legal Aid Switzerland: +41 31 311 14 14, https://www.frauenrechte.ch/',
        'Free legal consultation available for Swiss residents',
        'English-speaking lawyers available through embassy referrals',
        'Legal Aid Office Bern: +41 31 321 88 88, https://www.bern.ch/en/legal-aid'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately at 117 (emergency) or 031 321 21 21 (Bern Police)',
        'Contact embassy for consular assistance in serious cases',
        'Document all incidents with photos and detailed descriptions',
        'Keep copies of all police reports for insurance and embassy',
        'Contact embassy for serious crimes or legal assistance',
        'Swiss police provide English-speaking officers when available'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Public Transport (Trams/Buses)',
          safety: 95,
          recommendations: [
            'Use SBB Mobile app for real-time updates',
            'Purchase Bern Ticket for unlimited travel',
            'Trams and buses are well-lit and monitored'
          ],
          companies: ['Bernmobil', 'SBB'],
          link: 'https://www.bern.ch/en/transport-roads/public-transport'
        },
        {
          type: 'Taxis',
          safety: 90,
          recommendations: [
            'Use official taxi stands or call reputable companies',
            'Avoid unlicensed taxis',
            'Share ride details with someone'
          ],
          companies: ['Bären Taxi', 'Taxi Bern'],
          link: 'https://www.baeren-taxi.ch/'
        },
        {
          type: 'Walking',
          safety: 95,
          recommendations: [
            'Well-lit streets in most areas',
            'Use designated pedestrian crossings',
            'Stay in central areas at night'
          ],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 88,
        warnings: [
          'Some areas may be less frequented late at night',
          'Use well-lit routes when walking alone'
        ],
        alternatives: [
          'Use night buses (N1, N2, N3)',
          'Call a taxi from official stands',
          'Stay in central, well-lit areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'Bernmobil',
          type: 'Public Transport',
          contact: '+41 31 321 88 88',
          safety: 95
        },
        {
          name: 'Bären Taxi',
          type: 'Taxi Service',
          contact: '+41 31 371 11 11',
          safety: 90
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at most hotels',
        'Electronic key cards',
        'Security cameras in common areas',
        'Safe deposit boxes available',
        'Well-lit entrances and corridors'
      ],
      safeNeighborhoods: [
        'Old Town (Altstadt)',
        'Kirchenfeld',
        'Breitenrain',
        'Länggasse',
        'Mattenhof'
      ],
      womensOnly: [
        {
          name: 'Bern Backpackers Hotel Glocke',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 95,
          comments: 'Very safe and clean hostel with excellent security',
          date: '2024-01-15'
        },
        {
          rating: 4.8,
          safety: 98,
          comments: 'Felt completely safe walking alone at night',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN when connecting to public WiFi',
        'Avoid accessing sensitive information on public networks',
        'Most hotels provide secure WiFi'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN (Swiss-based)'
      ],
      dataProtection: [
        'Switzerland has strong data protection laws',
        'GDPR-compliant businesses',
        'Secure payment methods widely accepted'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Zytglogge area',
          date: '2024-01-05',
          description: 'Minor pickpocketing incident in tourist area during peak hours',
          severity: 'low'
        },
        {
          type: 'Bicycle Theft',
          location: 'Train station area',
          date: '2024-01-03',
          description: 'Bicycle stolen from train station bike rack',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Keep valuables in front pockets or cross-body bags with secure zippers',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 15
        },
        {
          tip: 'Use the Bern Ticket for unlimited public transport during your stay',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 12
        },
        {
          tip: 'Stay in well-lit areas when walking alone at night, especially in the Old Town',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 18
        },
        {
          tip: 'Use official taxi companies like Bären Taxi for late-night travel',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 14
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Switzerland is generally safe for travelers. Exercise normal precautions. The country has low crime rates and excellent emergency services. However, petty crime such as pickpocketing can occur in tourist areas and on public transportation.',
      reason: 'Petty theft in tourist areas.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/switzerland-travel-advisory.html',
      soloTravelerAdvice: [
        'Extremely safe for solo female travelers - one of world\'s safest countries',
        'Stay in Old Town or Kirchenfeld for best safety and convenience',
        'Never hike alone in Alps - always go with groups or guides',
        'Use Bern Ticket for unlimited safe public transport (CHF 13/day)',
        'English widely spoken - easy to get help and directions'
      ]
    },
    crimeStatistics: {
      violentCrime: 12, // per 100,000 (2024 data)
      propertyCrime: 85, // per 100,000 (2024 data)
      sexualAssault: 3, // per 100,000 (2024 data)
      kidnapping: 0.2, // per 100,000 (2024 data)
      source: 'Swiss Federal Statistical Office',
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
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'SBB Mobile',
          purpose: 'Public transport navigation and safety',
          rating: 4.8
        },
        {
          name: 'GeoSure',
          purpose: 'Real-time safety scores for neighborhoods and areas',
          rating: 4.6
        },
        {
          name: 'Citymapper',
          purpose: 'Smart urban transport navigation',
          rating: 4.7
        },
        {
          name: 'NomadHer',
          purpose: 'Female travel community and safety tips',
          rating: 4.5
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'My Safetipin',
          purpose: 'Safety ratings for neighborhoods and routes',
          rating: 4.3
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Police (Emergency)',
          number: '117',
          type: 'Police Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '144',
          type: 'Medical Emergency'
        },
        {
          name: 'Fire Department',
          number: '118',
          type: 'Fire Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+41 31 357 7011',
          type: 'Consular Services'
        },
        {
          name: 'Swiss Victim Support',
          number: '+41 31 311 14 14',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '0800 800 007',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$120 - $180 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Switzerland is expensive, but spending more ensures better safety and comfort for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$25-35',
          safetyNote: 'Best for safety on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$80-120',
          safetyNote: 'Good safety standards with Swiss hospitality',
          safetyLevel: 'high'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$100+',
          safetyNote: 'Excellent safety with Swiss standards',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$8-15/day',
          safetyDescription: 'Very safe and reliable. Clean and punctual.',
          safetyLevel: 'high'
        },
        {
          method: 'Rideshare (Uber)',
          cost: '$15-25/ride',
          safetyDescription: 'Safe and regulated. Drivers are professional.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe during day and night',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Switzerland is expensive but very safe - prioritize safety over budget',
        'Public transport is excellent and safe for women',
        'Hostels in Switzerland maintain high safety standards',
        'Walking is safe and free - take advantage of Switzerland\'s pedestrian-friendly cities',
        'Swiss hospitality industry has strict safety regulations'
      ]
    }
};

export default bern;
