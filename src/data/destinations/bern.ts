import { Destination } from './types';

const bern: Destination = {
    city: 'Bern',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.1,
    walkingAlone: 8.7,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 245,
    lastUpdated: '2025-01-20',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.6,
        context: 'Bern remains exceptionally safe at night with 2025 data showing women rating overall safety at 4.4/5. Solo female travelers report feeling "absolutely safe at any time of day or night." Numbeo 2025 shows Safety Index of 77.57 and Very Low crime level (16.47). Some areas require caution: Bollwerk/Schützenmatt area, Fricktreppe/Frickweg, and dark parks. Recent testimonials confirm excellent night walking safety with basic precautions.'
      },
      publicTransit: {
        score: 9.1,
        context: 'Bern\'s public transport system continues to be among world\'s safest with 2025 data showing exceptional safety ratings. Women report 95% confidence in public transport use. Recent increases in digital crime (35% nationwide) mean enhanced precautions needed for electronic payments. SBB Mobile app provides real-time updates and emergency contacts. Physical safety remains excellent with comprehensive monitoring and low incident rates.'
      },
      walkingAlone: {
        score: 8.7,
        context: 'Walking alone remains extremely safe with 2025 data showing women rate safety at 4.4/5. Recent traveler testimonials: "absolutely safe at any time" and "walking alone at nights usually safe with basic precautions." Crime Index very low at 22.43 (Numbeo 2025). While Switzerland saw 7.9% crime increase in 2024, this was primarily digital/property crime. Physical safety for solo women walking unchanged and excellent.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Town (Altstadt)',
          description: 'Bern\'s UNESCO-listed Old Town remains exceptionally safe with 2025 data confirming very low crime rates. Recent 2024 increase in petty crimes like pickpocketing noted around tourist areas including Zytglogge and Bärenplatz. Violent crime extremely rare. Enhanced police presence maintains excellent safety day and night. Recent shoplifting increases noted but doesn\'t affect visitor safety significantly.'
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
        'Bollwerk/Schützenmatt area at night: 2025 resident reports indicate this area requires caution after dark.',
        'Fricktreppe and Frickweg at night: Local safety reports identify these specific areas as requiring extra caution during nighttime hours.',
        'Dark parks at night: While generally safe, some parks have limited lighting and should be avoided alone after dark.',
        'Tourist areas during peak season: 2024 data shows increased pickpocketing and shoplifting in crowded tourist zones.'
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
      clothing: `• Layer with merino wool base layers and waterproof outer shell - essential for unpredictable Swiss weather
• Invest in quality waterproof boots with good grip - Bern's cobblestone streets can be slippery when wet
• Wear neutral, dark colors to blend in with locals who prefer understated fashion
• Pack a warm scarf and gloves year-round - mountain weather changes quickly
• Choose secure cross-body bags with RFID blocking for tourist areas
• Avoid flashy jewelry or expensive accessories that attract unwanted attention`,
      firstTimers: `• Is Bern safe for women solo travelers? Absolutely - ranked among Europe's safest cities with 4.4/5 safety rating from female travelers
• Download essential apps before arrival: SBB Mobile for transport, MeteoSwiss for weather, SwissEmergency for safety
• Swiss people value punctuality - arrive on time for all appointments or activities
• Cash is still preferred in many establishments despite digital payment growth - carry CHF 50-100
• Learn basic German greetings: "Grüezi" (hello), "Merci vilmal" (thank you) - locals appreciate the effort
• Free public transport included with hotel stays through Bern Ticket - major money saver for solo female travel safety`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'SBB Mobile',
        'SwissEID',
        'MeteoSwiss'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Switzerland', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Switzerland safety insights', rating: 4.0 },
        { name: 'SBB Mobile', link: 'https://www.sbb.ch/en/', description: 'Official Swiss Federal Railways app for trains, buses, trams with real-time info', rating: 4.4 },
        { name: 'SwissEID', link: 'https://www.eid.admin.ch/', description: 'Official Swiss digital identity app for secure authentication and emergency ID', rating: 4.2 },
        { name: 'MeteoSwiss', link: 'https://www.meteoswiss.admin.ch/', description: 'Official Swiss weather app essential for Alpine weather changes and safety', rating: 4.5 }
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
      dressCode: [
        'Swiss fashion emphasizes quality over quantity - invest in well-made, durable pieces in neutral colors like black, navy, grey',
        'Practical outdoor gear is fashionable and socially acceptable - Swiss women commonly wear hiking boots and functional jackets in city settings',
        'Business casual expected for upscale restaurants and cultural venues - avoid overly casual clothing when dining or visiting museums',
        'Modest attire appreciated in churches and historical sites - cover shoulders and knees when visiting religious buildings or memorials',
        'Avoid flashy designer logos or expensive accessories - Swiss culture values understated elegance over conspicuous consumption',
        'Weather-appropriate layering essential year-round - sudden Alpine weather changes require adaptable clothing system with waterproof outer layer'
      ],
      behaviorNorms: [
        'Punctuality is sacred in Swiss culture - being even 5 minutes late is considered disrespectful and can negatively impact social interactions',
        'Maintain quiet voices on public transport and in public spaces - loud conversations or phone calls are frowned upon by locals',
        'Respect personal space and avoid unnecessary physical contact - Swiss people prefer formal interactions until relationships develop naturally',
        'Direct communication is valued and expected - Swiss people appreciate honesty and straightforward conversation over small talk or indirect hints',
        'Sunday quiet hours (Sonntagsruhe) strictly observed - avoid noisy activities, shopping, or loud music on Sundays to respect local customs',
        'Environmental consciousness is deeply embedded - proper recycling, avoiding waste, and using public transport demonstrates cultural respect and integration'
      ],
      perception: [
        'Solo female travel is completely normalized in Switzerland - women traveling alone face no social stigma or unusual attention from locals',
        'Swiss society strongly supports gender equality and women\'s independence - solo female travelers are viewed as competent, respected individuals',
        'Restaurant dining alone is common and unremarkable - servers and other patrons treat solo diners with same attention and respect as groups',
        'Swiss people are helpful but reserved by nature - locals will readily assist with directions or recommendations when asked directly',
        'Solo women in bars, cafes, or social settings are generally left alone unless they initiate conversation - harassment is rare and socially unacceptable',
        'Professional and educational environments fully embrace women\'s participation - female solo travelers feel welcomed in all business and academic settings',
        'Language barriers are minimal - English proficiency is high, especially among younger population and service industry workers in Bern'
      ]
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
      score: 88.0, // Based on 4.4/5 rating from Travel Ladies 2025
      source: 'Travel Ladies 2025 & Numbeo Safety Index 2025',
      sourceUrl: 'https://travelladies.app/crime/switzerland/bern'
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
    daytimeSafetyPercent: 88.0,
    nighttimeSafetyPercent: 82.3,
    safetySourceName: 'Numbeo 2025 & Travel Ladies 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bern',
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
      commonLocations: ['Nightlife establishments (minimal incidents)', 'Some public transport during rush hour', 'Tourist areas during peak season'],
      reportingRate: 75, // Switzerland national average, though only 8% report sexual violence to police
      legalProtection: 'Strong legal framework but gaps remain. Swiss law does not define rape based on consent but on violence/coercion. Gender disparities in sentencing exist.',
      supportResources: [
        'Emergency: 112 (immediate help)',
        'LANTANA Bern Sexual Violence Support: +41 31 313 14 00',
        'Opferhilfe Bern (Victim Support): +41 31 370 30 70',
        'Frauenhaus Bern (Women\'s Shelter): +41 31 332 55 33',
        'Zentrum für sexuelle Gesundheit Inselspital: +41 31 632 10 10',
        'National Victim Support: findahelpline.com/countries/ch/topics/sexual-abuse',
        'Anonymous confidential forensic exams available ("vertrauliche Spurensicherung")'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Inselspital Bern (Universitätsspital)',
          address: 'Freiburgstrasse 18, 3010 Bern',
          phone: '+41 31 632 21 11',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Sexual Violence Care', 'Trauma'],
          link: 'https://www.insel.ch/en/',
          notes: 'Main university hospital with specialized sexual violence care and confidential forensic examinations'
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
          'Frauenklinik Inselspital Bern: +41 31 632 10 10',
          'Zentrum für sexuelle Gesundheit (Sexual Health Center) Inselspital: +41 31 632 10 10',
          'Gynäkologie Sonnenhof: +41 31 359 51 11'
        ],
        gynecologists: [
          'Universitätsklinik für Frauenheilkunde, Friedbühlstrasse 19, 3010 Bern',
          'Sexual violence consultation services at Inselspital'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Inselspital Emergency Department 24/7',
          'Sexual Health Center provides emergency services'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Free products at university facilities',
          'Available at all accommodation types'
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
          name: 'Embassy of Germany in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://ch.diplo.de/'
        },
        {
          name: 'Embassy of France in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://ch.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.exteriores.gob.es/embajadas/bern'
        },
        {
          name: 'Australian Embassy Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://ch.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.canadainternational.gc.ca/ch-switzerland/'
        },
        {
          name: 'Embassy of the Netherlands in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/switzerland'
        },
        {
          name: 'Embassy of Denmark in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://ch.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.eda.admin.ch/bern'
        },
        {
          name: 'Embassy of India in Bern',
          address: 'Thunstrasse 50, 3005 Bern',
          phone: '+41 31 359 77 00',
          link: 'https://www.indianembassych.gov.in/'
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
          type: 'Trams (Bernmobil)',
          safety: 9.5,
          recommendations: ['Frequent service every 2-10 minutes', 'CCTV monitoring on all vehicles', 'Well-lit stops with real-time displays', 'Female solo travelers report 95% confidence'],
          companies: ['Bernmobil'],
          link: 'https://www.bernmobil.ch/'
        },
        {
          type: 'City Buses (Bernmobil)',
          safety: 9.4,
          recommendations: ['Comprehensive network covering all districts', 'Modern fleet with safety features', 'Night services available on weekends', 'Accessible for women with mobility needs'],
          companies: ['Bernmobil'],
          link: 'https://www.bernmobil.ch/'
        },
        {
          type: 'S-Bahn Regional Trains',
          safety: 9.3,
          recommendations: ['Connects Bern to surrounding areas safely', 'Frequent service until midnight', 'Professional staff and security presence', 'Clean, modern rolling stock'],
          companies: ['SBB CFF FFS'],
          link: 'https://www.sbb.ch/'
        },
        {
          type: 'PostBus (Yellow Buses)',
          safety: 9.2,
          recommendations: ['Links city center to outer suburbs', 'Reliable mountain and rural connections', 'Professional drivers trained in safety protocols', 'Essential for accessing hiking areas safely'],
          companies: ['PostBus Switzerland'],
          link: 'https://www.postauto.ch/'
        },
        {
          type: 'Licensed Taxis',
          safety: 9.0,
          recommendations: ['Regulated pricing with meters', 'Professional drivers with background checks', 'Available 24/7 from official stands', 'Credit card payments accepted'],
          companies: ['Bären Taxi', 'City Taxi Bern', 'Nova Taxi'],
          link: 'https://www.baeren-taxi.ch/'
        },
        {
          type: 'Ride-Sharing (Uber)',
          safety: 8.8,
          recommendations: ['GPS tracking and driver verification', 'Cashless payments for safety', 'Rating system ensures quality drivers', 'Trip sharing features with contacts'],
          companies: ['Uber'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Bike Sharing (PubliBike)',
          safety: 8.5,
          recommendations: ['260+ stations throughout Greater Bern area', 'Well-maintained cycling infrastructure', 'Safe during daylight hours', 'Avoid cycling at night in winter'],
          companies: ['PubliBike'],
          link: 'https://www.publibike.ch/'
        },
        {
          type: 'Walking',
          safety: 9.1,
          recommendations: ['Excellent pedestrian infrastructure', 'Well-lit streets in most areas', 'UNESCO Old Town perfectly safe for walking', 'Use designated crossings - jaywalking strictly enforced'],
          companies: [],
          link: ''
        }
      ],
      nightTravel: {
        safety: 8.8,
        warnings: [
          'Avoid Bollwerk/Schützenmatt area after 10 PM - resident reports indicate increased caution needed',
          'Train station areas attract some drug activity - stay alert but overall safe',
          'Some parks have limited lighting - stick to main pathways'
        ],
        alternatives: [
          'Night buses (N1, N2, N3) operate Friday-Saturday nights until 2 AM',
          'Taxis readily available from Bahnhofplatz and major hotels',
          'Well-lit walking routes through Old Town remain safe all night',
          'Most public transport operates until midnight on weekdays'
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
      violentCrime: 11.8, // per 100,000 (2024 data - very low, stable)
      propertyCrime: 118, // per 100,000 (2024 data - 35% increase in digital crime, property offenses)
      sexualAssault: 2.9, // per 100,000 (2024 data - 867 rape offenses nationally, very low reporting rate)
      kidnapping: 0.1, // per 100,000 (2024 data - extremely rare)
      pickpocketing: 24, // per 100,000 (2024 data - increased in tourist areas)
      source: 'Swiss Federal Statistical Office 2024, Numbeo 2025',
      year: 2024,
      trend: '7.9% overall crime increase 2024, mainly digital/property crime, not violent crime'
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
        tip: 'Is Bern safe for female solo travelers? Absolutely - Switzerland is expensive, but the investment ensures world-class safety standards and comfort for women traveling alone.'
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
          method: 'Bern Ticket (Free with Hotel Stay)',
          cost: 'Free with accommodation',
          safetyDescription: 'Unlimited access to all trams, buses, S-Bahn in Greater Bern area. Includes night services.',
          safetyLevel: 'high'
        },
        {
          method: 'Trams & City Buses (Bernmobil)',
          cost: '$8-15/day',
          safetyDescription: 'Frequent service every 2-10 minutes with CCTV monitoring. 95% female confidence rating.',
          safetyLevel: 'high'
        },
        {
          method: 'S-Bahn Regional Trains',
          cost: '$12-25/day',
          safetyDescription: 'Professional staff, clean modern trains, connects to entire Swiss network safely.',
          safetyLevel: 'high'
        },
        {
          method: 'PubliBike Sharing',
          cost: '$2-5/ride',
          safetyDescription: '260+ stations, well-maintained bikes, excellent cycling infrastructure. Daytime recommended.',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Licensed Taxis',
          cost: '$15-30/ride',
          safetyDescription: 'Professional drivers with background checks, regulated pricing, available 24/7.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber',
          cost: '$12-20/ride',
          safetyDescription: 'GPS tracking, verified drivers, cashless payments, trip sharing with contacts.',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Excellent pedestrian infrastructure, UNESCO Old Town perfectly safe, well-lit streets.',
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
    },
  youtubeVideo: {
    videoId: "-rTP0EYf864" // See How It's Like: Bern Switzerland travel guide
  }
};

export default bern;
