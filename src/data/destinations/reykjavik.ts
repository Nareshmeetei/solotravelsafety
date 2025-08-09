import { Destination } from './types';

const reykjavik: Destination = {
    city: 'Reykjavik',
    country: 'Iceland',
    continent: 'Europe',
    countryCode: 'is',
    overallScore: 9.2,
    nightSafety: 9.4,
    publicTransit: 8.9,
    walkingAlone: 9.6,
    tags: ['insider-tips', 'extremely-safe', 'gender-equality-leader', 'expensive'],
    bgColor: 'bg-green-25',
    reviewCount: 287,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'very-low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.4,
        context: 'Reykjavik is exceptionally safe at night with 2025 traveler testimonials stating "felt the safest, even walking alone in the middle of the night in winter." Crime rate extremely low with 99% of violent crime done by someone known to victim, making stranger attacks virtually non-existent. Well-lit streets, respectful culture. Only minor caution needed downtown after midnight on weekends due to drunk behavior, but violent crime remains almost zero.'
      },
      publicTransit: {
        score: 8.9,
        context: 'Limited but extremely safe public transport system. Straeto city buses are reliable, clean, and safe with respectful passengers. Most areas walkable within compact city center. Taxis regulated and very safe. Iceland ranked #9 safest country globally for solo female travelers in 2025. Public transport incidents essentially non-existent.'
      },
      walkingAlone: {
        score: 9.6,
        context: 'Reykjavik is among world\'s safest cities for solo female walking. 2024-2025 traveler reviews consistently report "feeling safe like nowhere else" and "complete peace of mind." Street harassment remarkably low with locals keeping to themselves but offering assistance when asked. Extremely low pickpocketing/theft rates. Summer midnight sun provides additional visibility. Iceland consistently ranked safest country in world.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'City Center (101 Reykjavik)',
          description: 'Heart of Reykjavik with Laugavegur shopping street, cafes, and attractions. Extremely safe day and night with constant foot traffic, excellent lighting, and police presence. Home to major landmarks and completely safe for solo exploration.'
        },
        {
          name: 'Old Town (Gamla Bærinn)',
          description: 'Historic core around Tjörnin pond and Parliament House. Exceptionally safe with well-preserved buildings, wide sidewalks, and excellent lighting. Rich in culture and history with zero safety concerns.'
        },
        {
          name: 'Vesturbær (West Town)',
          description: 'Residential area with University of Iceland and local cafes. Very safe neighborhood with friendly locals, peaceful streets, and excellent walkability. Popular with students and young professionals.'
        },
        {
          name: 'Laugardalur',
          description: 'Area around thermal pools and sports facilities. Extremely safe family-friendly zone with recreational activities, parks, and the famous thermal swimming pools. Well-maintained and monitored.'
        },
        {
          name: 'Hafnarfjörður',
          description: 'Charming neighboring town with harbor and cultural sites. Completely safe with picturesque streets, local festivals, and warm community atmosphere. Easy access from Reykjavik center.'
        },
        {
          name: 'Perlan Area',
          description: 'Elevated area with observation deck and nature walks. Very safe with panoramic city views, well-maintained paths, and good lighting. Popular tourist destination with excellent security.'
        }
      ],
      caution: [
        'Downtown bar district after midnight on Fridays/Saturdays: While violent crime remains virtually zero, some drunk behavior may occur. Still generally very safe but use normal awareness.',
        'Remote hiking areas alone: Weather can change rapidly. Always inform someone of hiking plans and check weather conditions.'
      ],
      avoid: [
        'NONE - No dangerous areas in Reykjavik. Iceland has no areas considered unsafe for solo female travelers.'
      ]
    },
    accommodations: [
      {
        name: 'Kex Hostel',
        type: 'hostel',
        features: ['Mixed and female dorms', 'Central location', 'Social atmosphere', '24/7 reception'],
        rating: 4.5,
        notes: 'Converted biscuit factory with unique industrial design, excellent security, and vibrant social scene. Very popular with solo female travelers.',
        link: 'https://www.kexhostel.is/'
      },
      {
        name: 'Hotel Borg by Keahotels',
        type: 'hotel',
        features: ['Luxury Art Deco hotel', 'Historic building', 'Central location', 'Concierge services'],
        rating: 4.7,
        notes: 'Historic 1930s Art Deco hotel in heart of Reykjavik with impeccable security, elegant rooms, and professional staff.',
        link: 'https://www.keahotels.is/hotels-in-iceland/hotel-borg'
      },
      {
        name: 'Loft HI Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Harbor location', 'Modern facilities', 'Eco-friendly'],
        rating: 4.6,
        notes: 'Award-winning eco-hostel with excellent security, stunning harbor views, and dedicated female-only accommodations.',
        link: 'https://www.lofthostel.is/'
      },
      {
        name: 'Canopy by Hilton Reykjavik City Centre',
        type: 'hotel',
        features: ['Modern luxury', 'Central location', '24/7 security', 'Female-friendly'],
        rating: 4.8,
        notes: 'New luxury hotel with cutting-edge security systems, contemporary design, and excellent solo traveler amenities.',
        link: 'https://www.hilton.com/en/hotels/rekcppy-canopy-reykjavik-city-centre/'
      },
      {
        name: 'Galaxy Pod Hostel',
        type: 'hostel',
        features: ['Pod-style accommodation', 'Female pods available', 'High-tech', 'City center'],
        rating: 4.4,
        notes: 'Futuristic pod hostel with advanced security features, female-specific pods, and prime central location.',
        link: 'https://www.galaxypod.com/'
      }
    ],
    alerts: [
      {
        title: 'Nordic Paradox Awareness',
        description: 'While Iceland is world\'s safest for travelers, 2024 studies show 40% of Icelandic women experienced assault in relationships. This affects locals, not travelers, but awareness of support resources important.',
        location: 'Country-wide',
        reportCount: 28200,
        severity: 'informational',
        dateReported: '2024-12-07'
      },
      {
        title: 'Weather Safety Priority',
        description: 'Weather changes rapidly in Iceland. Always check conditions before outdoor activities. Download 112 Iceland emergency app for location sharing.',
        location: 'All outdoor areas',
        reportCount: 45,
        severity: 'medium',
        dateReported: '2025-01-20'
      }
    ],
    safetyTips: {
      clothing: `WEATHER-FIRST SAFETY PRIORITY:
• Waterproof outer layer essential year-round
• Thermal layers for insulation (merino wool recommended)
• Waterproof hiking boots with good grip for ice/wet surfaces
• Wind-resistant clothing - Icelandic wind is powerful
• Hat and gloves even in summer (weather changes quickly)
• Bright colors recommended for visibility in weather
• Pack layers - temperature can vary 20°C in one day`,
      firstTimers: `ICELAND FIRST-TIMER SAFETY ESSENTIALS:
• Download 112 Iceland Emergency App (GPS location sharing)
• Check weather at vedur.is daily - conditions change rapidly
• English widely spoken - communication never a safety issue
• Very expensive but extremely safe - budget accordingly
• Respect nature - stay on marked paths, geothermal areas dangerous
• Inform someone of outdoor plans - weather can trap travelers
• No tipping culture - prices are fixed and final
• Cash rarely needed - card payments universal`,
      apps: [
        '112 Iceland (Emergency GPS)',
        'Vedur (Official Weather)',
        'Straeto (Public Transport)', 
        'SafeTravel Iceland',
        'Road.is (Road Conditions)',
        'Aurora Forecast'
      ],
      appLinks: [
        { name: '112 Iceland', link: 'https://www.112.is/en/112-iceland-app/', description: 'Official emergency app with GPS location sharing - essential for safety' },
        { name: 'Vedur - Weather', link: 'https://en.vedur.is/', description: 'Icelandic Met Office - critical for weather updates' },
        { name: 'Straeto', link: 'https://www.straeto.is/en', description: 'Reykjavik public transport schedules and routes' },
        { name: 'SafeTravel Iceland', link: 'https://safetravel.is/', description: 'Official travel safety information and travel plans' },
        { name: 'Road.is', link: 'https://www.road.is/travel-info/road-conditions-and-weather/', description: 'Real-time road conditions for day trips' },
        { name: 'Aurora Forecast', link: 'https://en.vedur.is/weather/forecasts/aurora/', description: 'Northern Lights visibility predictions' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hjálp!',
          localLanguage: 'Icelandic'
        },
        {
          english: 'Call the police!',
          local: 'Hringdu í lögregluna!',
          localLanguage: 'Icelandic'
        },
        {
          english: 'I need a doctor.',
          local: 'Ég þarf lækni.',
          localLanguage: 'Icelandic'
        },
        {
          english: 'Where is the hospital?',
          local: 'Hvar er sjúkrahúsið?',
          localLanguage: 'Icelandic'
        },
        {
          english: 'I am lost.',
          local: 'Ég er týnd.',
          localLanguage: 'Icelandic'
        },
        {
          english: 'Please help me.',
          local: 'Vinsamlegast hjálpaðu mér.',
          localLanguage: 'Icelandic'
        },
        {
          english: 'I feel unsafe.',
          local: 'Mér líður óörugglega.',
          localLanguage: 'Icelandic'
        },
        {
          english: 'Emergency!',
          local: 'Neyðarástand!',
          localLanguage: 'Icelandic'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'PRACTICAL WEATHER-APPROPRIATE DRESS ESSENTIAL: Iceland prioritizes function over fashion due to harsh weather. Waterproof, warm clothing is cultural norm and safety requirement. Casual dress completely acceptable in all situations. No religious or cultural dress restrictions.',
      behaviorNorms: [
        'Remove shoes when entering homes (strong cultural expectation)',
        'Respect nature absolutely - environmental protection is core cultural value',
        'Quiet, reserved demeanor appreciated - Icelanders value personal space',
        'Direct communication style - say what you mean politely',
        'Punctuality important for tours and scheduled activities',
        'No small talk with strangers initially, but will help if asked',
        'Strong equality culture - gender discrimination virtually non-existent',
        'Respect for LGBTQ+ community - Iceland very progressive',
        'Environmental consciousness - recycle, don\'t waste',
        'Appreciation for literature and arts - Iceland very cultural'
      ],
      perception: 'IDEAL DESTINATION FOR SOLO WOMEN: Iceland leads globally in gender equality (14 years running). Solo female travelers extremely common and completely accepted. Culture of respect and safety. No cultural barriers or judgments about women traveling alone, dining alone, or exploring independently. Icelanders will assist if asked but respect privacy and independence.'
    },
    bestTimeToVisit: {
      safestMonths: ['ALL YEAR - Always safe, weather-dependent activities'],
      events: 'Summer (June-August): Midnight sun, warmest weather, best hiking. Winter (October-March): Northern Lights, thermal pools, cozy atmosphere. Spring/Fall: Fewer crowds, moderate weather. Safety excellent year-round - only weather affects activities.'
    },
    emergencyInfo: {
      police: '112',
      fire: '112',
      medical: '112',
      general: '112'
    },
    currency: {
      name: 'Icelandic Króna',
      code: 'ISK',
      exchangeRate: {
        usd: 0.0073,
        eur: 0.0062,
        gbp: 0.0054
      },
      exchangeTips: [
        'Card payments universal - cash rarely needed even for small purchases',
        'ATMs widely available but card preferred everywhere',
        'No currency exchange needed - use cards directly',
        'Notify bank of Iceland travel to prevent card blocks',
        'Tipping not expected or required - prices are final',
        'Download currency app for reference but cards handle conversion',
        'Mobile payments widely accepted (Apple Pay, Google Pay)'
      ],
      scamWarnings: [
        'VIRTUALLY NO SCAMS: Iceland has extremely low fraud rates',
        'Tourist price inflation exists but not scams - prices are clearly displayed',
        'Only weather-related tour cancellations - legitimate and refunded',
        'No street vendors or aggressive sales tactics'
      ]
    },
    scamWarnings: [
      { 
        title: 'Weather-Related Tour Issues', 
        description: 'Tours may cancel due to weather but this is legitimate safety precaution, not scam. Full refunds provided.', 
        severity: 'low' 
      },
      { 
        title: 'Tourist Price Premium', 
        description: 'Prices high for tourists but displayed clearly - not a scam, just expensive market. No haggling culture.', 
        severity: 'low' 
      }
    ],
    languages: [
      'Icelandic (Native)',
      'English (Excellent - 98% speak English)',
      'Danish (Many speakers)',
      'German (Tourist areas)'
    ],
    daytimeSafetyPercent: 98.5,
    nighttimeSafetyPercent: 96.0,
    safetySourceName: 'Travel Ladies 2025, Iceland Crime Statistics, WEF Gender Gap Report 2024',
    safetySourceUrl: 'https://travelladies.app/safety/iceland/reykjavik',
    redFlags: [
      { label: 'Rapid Weather Changes', frequency: 'Daily', icon: 'CloudRain' },
      { label: 'Tourist Price Premium', frequency: 'Common', icon: 'DollarSign' },
      { label: 'Slippery Winter Surfaces', frequency: 'Seasonal', icon: 'AlertTriangle' },
      { label: 'Weekend Nightlife Crowds', frequency: 'Occasional', icon: 'Users' }
    ],
    culturalDos: [
      'Remove shoes when entering homes - essential cultural respect',
      'Check weather conditions daily before any outdoor activities',
      'Respect nature and stay on marked paths always',
      'Download 112 Iceland emergency app for location sharing',
      'Dress in waterproof layers - function over fashion',
      'Be punctual for scheduled tours and activities',
      'Appreciate environmental consciousness and sustainability',
      'Respect personal space and quiet demeanor preferences',
      'Show interest in Icelandic literature and culture',
      'Use card payments - cash rarely needed'
    ],
    culturalDonts: [
      "Don't make jokes about elves or folklore - taken seriously by some",
      "Don't litter or damage natural sites - environmental protection sacred",
      "Don't expect small talk with strangers initially",
      "Don't ignore weather warnings - they're serious safety issues",
      "Don't walk off marked paths in geothermal areas - dangerous",
      "Don't expect cheap prices - Iceland is expensive for everything",
      "Don't assume summer warmth - weather changes rapidly",
      "Don't haggle - prices are fixed in Icelandic culture",
      "Don't be loud in public spaces - quiet culture preferred",
      "Don't underestimate nature - respect weather and terrain"
    ],
    womensConfidenceScore: {
      score: 94.5,
      source: "Iceland Gender Equality Index 2024 & Travel Ladies 2025",
      sourceUrl: "https://travelladies.app/safety/iceland/reykjavik"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 98, source: 'Travel Ladies & Iceland Tourism 2025', sourceUrl: 'https://travelladies.app/safety/iceland' },
      { label: 'Nightlife', confidence: 95, source: 'Reykjavik Tourism & Safety Reports 2025', sourceUrl: 'https://www.visitreykjavik.is/safety' },
      { label: 'Public Transport', confidence: 97, source: 'Straeto Safety Statistics 2024', sourceUrl: 'https://www.straeto.is/en' },
      { label: 'Dining Alone', confidence: 99, source: 'Solo Female Traveler Reviews 2024-2025', sourceUrl: 'https://travelladies.app/crime/iceland/reykjavik' }
    ],
    sexualHarassmentData: {
      prevalence: 'very-low',
      commonLocations: [
        'Street harassment virtually non-existent - Iceland safest globally',
        'Nightlife areas: Minimal incidents, mostly drunk behavior vs harassment',
        'Public transport: Essentially no reported harassment incidents',
        'Tourist areas: Respectful culture with locals offering help when asked',
        'Workplace (for residents): Iceland addressing workplace issues but tourist areas safe'
      ],
      reportingRate: 88, // High due to Iceland's strong support systems and trust in authorities
      legalProtection: 'WORLD LEADER: Iceland #1 in Global Gender Gap Index 2024 (14th consecutive year). Comprehensive anti-harassment laws with consent-based rape definition (2018). Equal pay mandated (2018). Strong legal protections under Icelandic and EU law. Specialized family justice centers for gender-based violence. Quick police response and victim support services.',
      supportResources: [
        'Emergency Services: 112 (Police/Fire/Medical)',
        'Stígamót (Sexual Violence Center): +354 562 6868',
        'Kvennaathvarfið (Women\'s Shelter): +354 561 1205',
        'Bjarkarhlíð (Crisis Center): +354 575 5900',
        'Tourist Police: +354 444 1000',
        'National Hospital Emergency: +354 543 2000',
        'Gender Equality Complaints Committee: +354 510 9200',
        'Victim Support Services: +354 581 1111',
        'Family Justice Centers: Available in multiple locations'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Landspítali University Hospital',
          address: 'Hringbraut, 101 Reykjavík',
          phone: '+354 543 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Gynecology', 'Maternity', 'Specialized Care'],
          link: 'https://www.landspitali.is/english/',
          notes: 'Main hospital in Iceland with comprehensive services, English-speaking staff, and 24/7 emergency care. Largest medical facility in country.'
        },
        {
          name: 'Reykjavík Health Care Services',
          address: 'Suðurlandsbraut 34, 108 Reykjavík', 
          phone: '+354 585 1300',
          emergency: false,
          specialties: ['Primary Care', 'Women\'s Health Clinic', 'Preventive Care'],
          link: 'https://www.heilsugaeslan.is/',
          notes: 'Primary healthcare with new specialized women\'s health clinic pilot project launched 2024. Funded with $485,000 for women-specific healthcare.'
        },
        {
          name: 'Reykjavík Center for Specialized Surgery',
          address: 'Skipholt 50d, 105 Reykjavík',
          phone: '+354 540 1000',
          emergency: false,
          specialties: ['Gynecological Surgery', 'Specialized Women\'s Procedures', 'Laparoscopic Surgery'],
          link: 'https://klinin.is/',
          notes: 'Private facility offering advanced gynecological procedures including laparoscopic surgery, endometriosis treatment, established 2021.'
        }
      ],
      pharmacies: [
        {
          name: 'Lyfja - Laugavegur',
          address: 'Laugavegur 16, 101 Reykjavík',
          phone: '+354 552 4045',
          hours: 'Mon-Fri 9:00-18:00, Sat 10:00-16:00',
          emergency: false,
          link: 'https://lyfja.is/'
        },
        {
          name: 'Lyfja - Kringlan Mall',
          address: 'Kringlan 4-12, 103 Reykjavík',
          phone: '+354 568 8020',
          hours: 'Mon-Wed 10:00-18:30, Thu-Fri 10:00-19:00, Sat 10:00-18:00, Sun 13:00-17:00',
          emergency: false,
          link: 'https://lyfja.is/'
        },
        {
          name: 'Emergency Pharmacy Service',
          address: 'Various locations via Læknavaktin',
          phone: '1770',
          hours: '24/7 emergency pharmaceutical access',
          emergency: true,
          link: 'Call 1770 for emergency pharmaceutical needs after hours'
        }
      ],
      womensHealth: {
        clinics: [
          'Specialized Women\'s Health Clinic: New pilot project launched 2024 with $485,000 funding',
          'Landspítali Women\'s Health Department: Comprehensive gynecological and maternity services',
          'Reykjavík Center for Specialized Surgery: Advanced gynecological procedures since 2021',
          'Primary Care Centers: Women\'s health services at all healthcare centers'
        ],
        gynecologists: [
          'Landspítali University Hospital: Full gynecological department with specialists',
          'Private Practice at Reykjavík Center: Advanced gynecological surgery options',
          'Healthcare Centers: General gynecological care available',
          'Emergency gynecological services available 24/7 at Landspítali'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency services at Landspítali 24/7',
          'Healthcare centers provide emergency contraception during hours',
          'No age restrictions or parental consent required'
        ],
        sanitaryProducts: [
          'Available at all supermarkets, pharmacies, and convenience stores',
          'Wide selection of international and local brands',
          'Available at accommodations and tourist facilities',
          'No cultural restrictions or accessibility issues'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Iceland',
        'COVID-19 vaccination recommended for international travel',
        'Routine vaccinations should be current',
        'No endemic diseases or special health risks'
      ],
      healthRisks: [
        'Weather-related injuries most common risk (hypothermia, slips on ice)',
        'UV exposure due to snow/ice reflection',
        'Dehydration in thermal pools',
        'Altitude effects in highland areas',
        'No infectious disease risks or dangerous wildlife'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Reykjavik',
        address: 'Laufásvegur 21, 101 Reykjavík',
        phone: '+354 595 2200',
        email: 'ReykjavikACS@state.gov',
        emergency: '+354 595 2200',
        link: 'https://is.usembassy.gov/',
        notes: 'Full-service embassy with American Citizen Services, emergency assistance, and consular support.'
      },
      embassies: [
        {
          name: 'British Embassy Reykjavik',
          address: 'Laufásvegur 31, 101 Reykjavík',
          phone: '+354 550 5100',
          link: 'https://www.gov.uk/world/organisations/british-embassy-reykjavik',
          notes: 'Full diplomatic services for British citizens'
        },
        {
          name: 'German Embassy Reykjavik',
          address: 'Laufásvegur 31, 101 Reykjavík',
          phone: '+354 530 1100',
          link: 'https://is.diplo.de/',
          notes: 'German diplomatic representation with consular services'
        },
        {
          name: 'French Embassy Reykjavik',
          address: 'Túngata 22, 101 Reykjavík',
          phone: '+354 575 9600',
          link: 'https://is.ambafrance.org/',
          notes: 'French diplomatic mission with citizen services'
        },
        {
          name: 'Canadian Embassy Reykjavik',
          address: 'Túngata 14, 101 Reykjavík',
          phone: '+354 575 6500',
          link: 'https://www.canadainternational.gc.ca/is-iceland/',
          notes: 'Canadian diplomatic services and citizen support'
        },
        {
          name: 'Nordic Council Representation',
          address: 'Various locations',
          phone: '+354 552 0000',
          link: 'Strong Nordic cooperation for citizens of Nordic countries',
          notes: 'Special cooperation agreements for Nordic citizens'
        }
      ],
      womensRights: [
        'GLOBAL LEADER: Iceland #1 in Gender Equality for 14 consecutive years (WEF 2024)',
        '47.6% female parliamentary representation as of February 2024',
        'World\'s first country to mandate equal pay (2018)',
        'Consent-based rape definition implemented (2018)',
        'Comprehensive protection against domestic violence and stalking',
        'Digital sexual violence laws enacted (2021)',
        'Three specialized family justice centers for gender-based violence',
        'Strong anti-discrimination laws covering gender, sexuality, pregnancy'
      ],
      legalSupport: [
        'Iceland Bar Association: +354 568 5522 - English-speaking lawyers available',
        'Legal Aid Iceland: Free legal assistance for qualifying cases',
        'Gender Equality Complaints Committee: +354 510 9200',
        'Women\'s Rights Association: +354 552 5318',
        'Victim Support Services: +354 581 1111 - Comprehensive victim assistance',
        'Embassy legal referrals: All embassies provide lawyer referrals'
      ],
      reportingProcedures: [
        'Emergency: Call 112 (Police/Fire/Medical) - English-speaking operators',
        'Non-emergency police: +354 444 1000',
        'Tourist police available for visitor assistance',
        'Report incidents at any police station - English assistance available',
        'Contact embassy for serious incidents involving foreign nationals',
        'Document incidents with photos/details for insurance/legal purposes',
        'Victim support services automatically offered for serious crimes'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Walking',
          safety: 98,
          recommendations: [
            'Safest transportation method in Reykjavik',
            'Compact city center - everything walkable',
            'Excellent lighting and sidewalk maintenance',
            'Weather-appropriate footwear essential'
          ],
          companies: [],
          link: 'City designed for pedestrians with excellent safety'
        },
        {
          type: 'Straeto City Bus',
          safety: 96,
          recommendations: [
            'Very safe public bus system',
            'Respectful passengers and professional drivers',
            'Regular schedules and clean vehicles',
            'Mobile app for real-time tracking'
          ],
          companies: ['Straeto'],
          link: 'https://www.straeto.is/en'
        },
        {
          type: 'Taxis',
          safety: 97,
          recommendations: [
            'Highly regulated and extremely safe',
            'Professional drivers with background checks',
            'Fixed rates - no overcharging',
            'Available via phone/app booking'
          ],
          companies: ['Hreyfill Taxi', 'BSR Taxi'],
          link: 'https://www.hreyfill.is/'
        },
        {
          type: 'Car Rental',
          safety: 85,
          recommendations: [
            'Safe for experienced drivers',
            'Weather conditions can be challenging',
            'Comprehensive insurance recommended',
            'GPS and emergency equipment essential'
          ],
          companies: ['Hertz Iceland', 'Budget Iceland', 'SADcars'],
          link: 'Multiple international and local rental agencies'
        }
      ],
      nightTravel: {
        safety: 96,
        warnings: [
          'Extremely safe but weather can affect visibility',
          'Downtown area slightly busier on weekends but no safety concerns',
          'Icy conditions in winter require careful walking'
        ],
        alternatives: [
          'Walking remains safest option even at night',
          'Taxis available 24/7 for weather protection',
          'Night buses available on some routes',
          'Hotels/hostels provide excellent security'
        ]
      },
      verifiedProviders: [
        {
          name: 'Straeto (Public Bus)',
          type: 'Public Transport',
          contact: '+354 540 2700',
          safety: 96
        },
        {
          name: 'Hreyfill Taxi',
          type: 'Taxi Service',
          contact: '+354 588 5522',
          safety: 97
        },
        {
          name: 'BSR Taxi',
          type: 'Taxi Service',
          contact: '+354 561 0000',
          safety: 97
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        'Electronic key card access standard at all accommodations',
        '24/7 reception services at hotels and major hostels',
        'CCTV systems in common areas and entrances',
        'Professional security staff at larger establishments',
        'Safe deposit boxes or in-room safes available',
        'Well-lit entrances and corridors throughout properties'
      ],
      safeNeighborhoods: [
        'City Center (101 Reykjavik) - Heart of tourist area',
        'Old Town - Historic and completely safe',
        'Vesturbær - University area, very safe',
        'Laugardalur - Thermal pool area, family-friendly',
        'Harbor Area - Near attractions, excellent safety',
        'ALL AREAS SAFE - No unsafe neighborhoods in Reykjavik'
      ],
      womensOnly: [
        {
          name: 'Loft HI Hostel',
          type: 'Hostel',
          features: ['Female-only dorms', 'Harbor views', 'Eco-friendly', 'Award-winning'],
          rating: 4.6
        },
        {
          name: 'Kex Hostel',
          type: 'Hostel', 
          features: ['Female dorms available', 'Social atmosphere', 'Central location'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.9,
          safety: 98,
          comments: 'Felt the safest I\'ve ever felt traveling alone, even walking at midnight in winter. Reykjavik is incredible for solo women.',
          date: '2024-12-15'
        },
        {
          rating: 4.8,
          safety: 97,
          comments: 'Complete peace of mind staying here. Staff helpful, other guests respectful. Perfect for solo female travelers.',
          date: '2024-11-28'
        },
        {
          rating: 4.9,
          safety: 98,
          comments: 'Iceland feels safe like nowhere else. Amazing experience as solo woman traveler. Highly recommend.',
          date: '2025-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Free WiFi extremely secure throughout Iceland',
        'High-speed internet infrastructure with excellent security',
        'Hotel and cafe WiFi safe to use for all activities',
        'Public WiFi networks well-maintained and monitored',
        'VPN not necessary but can be used for additional privacy'
      ],
      digitalScams: [
        'Virtually no digital scams in Iceland',
        'Legitimate tourism websites clearly identified',
        'No fake booking sites or phishing attempts common',
        'Weather-related tour changes are legitimate, not scams'
      ],
      vpnRecommendations: [
        'Not necessary in Iceland due to strong digital privacy laws',
        'NordVPN available if desired for privacy',
        'ProtonVPN Swiss-based option',
        'Iceland has excellent digital rights protection'
      ],
      dataProtection: [
        'Strong digital privacy laws under EU GDPR',
        'Iceland has additional privacy protections',
        'Safe to use cards and mobile payments everywhere',
        'Government transparency and low corruption ensure data safety'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Weather-Related Rescue',
          location: 'Reykjanes Peninsula',
          date: '2025-01-20',
          description: 'Tourist rescued after ignoring weather warnings during hiking. Reminder to check conditions and inform others of plans.',
          severity: 'low'
        },
        {
          type: 'Thermal Pool Safety',
          location: 'Public thermal pools',
          date: '2025-01-15', 
          description: 'Reminder about proper thermal pool etiquette and safety - shower before entering, hydrate regularly.',
          severity: 'informational'
        }
      ],
      safetyTips: [
        {
          tip: 'Download 112 Iceland Emergency App before any outdoor activities - GPS location sharing can save lives',
          author: 'Iceland Search & Rescue',
          date: '2025-01-22',
          upvotes: 1247
        },
        {
          tip: 'Check weather conditions daily at vedur.is - conditions change rapidly and affect all outdoor plans',
          author: 'Experienced Traveler',
          date: '2025-01-20',
          upvotes: 892
        },
        {
          tip: 'Reykjavik is incredibly safe for solo women - I felt safer than in my hometown. Just dress for weather!',
          author: 'Solo Female Traveler',
          date: '2025-01-18',
          upvotes: 756
        },
        {
          tip: 'Inform someone of outdoor plans and expected return - cell coverage can be spotty outside Reykjavik',
          author: 'Local Resident',
          date: '2025-01-16',
          upvotes: 634
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Iceland is extremely safe for travelers. Exercise normal precautions. The main risks are weather-related rather than crime-related. Iceland has one of the world\'s lowest crime rates.',
      reason: 'Weather-related risks, not crime. Excellent overall safety.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/iceland-travel-advisory.html',
      soloTravelerAdvice: [
        'IDEAL DESTINATION: Iceland consistently ranked safest country globally',
        'Perfect for solo female travelers with world-leading gender equality',
        'Weather is main safety consideration, not crime or personal safety',
        'Excellent infrastructure, healthcare, and emergency services',
        'English universally spoken - communication never a barrier'
      ]
    },
    crimeStatistics: {
      violentCrime: 0.8, // per 100,000 (2024 data - among world's lowest)
      propertyCrime: 12.4, // per 100,000 (2024 data - extremely low)
      sexualAssault: 4.2, // per 100,000 (2024 data - for context vs other countries)
      kidnapping: 0.0, // per 100,000 (virtually non-existent)
      pickpocketing: 0.5, // per 100,000 (almost non-existent)
      murder: 0.3, // per 100,000 (among world's lowest rates)
      source: 'Iceland Police Statistics 2024, Global Peace Index 2025',
      year: 2024,
      trend: 'Consistently world\'s safest country with stable extremely low crime rates'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'ESSENTIAL: 112 Iceland Emergency App (GPS location sharing)',
        'Waterproof phone case for weather protection',
        'Power bank for extended outdoor activities',
        'Weather-appropriate clothing (most important safety tool)',
        'Thermal layers and waterproof outer shell',
        'Sturdy waterproof boots with ice grips',
        'Emergency whistle (though rarely needed)',
        'Headlamp for winter activities'
      ],
      safetyApps: [
        {
          name: '112 Iceland Emergency',
          purpose: 'GPS location sharing for emergency services',
          rating: 5.0
        },
        {
          name: 'Vedur - Weather',
          purpose: 'Critical weather monitoring and forecasts',
          rating: 4.9
        },
        {
          name: 'SafeTravel Iceland',
          purpose: 'Travel safety information and route planning',
          rating: 4.8
        },
        {
          name: 'Road.is',
          purpose: 'Real-time road and weather conditions',
          rating: 4.7
        },
        {
          name: 'Straeto',
          purpose: 'Public transport schedules and routes',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services (All)',
          number: '112',
          type: 'Police/Fire/Medical/Rescue'
        },
        {
          name: 'Tourist Information',
          number: '+354 511 1555',
          type: 'General assistance and information'
        },
        {
          name: 'Landspítali Hospital',
          number: '+354 543 1000',
          type: 'Main hospital emergency'
        },
        {
          name: 'Læknavaktin (Medical Service)',
          number: '1770',
          type: 'Non-emergency medical assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Iceland Leads World in Gender Equality & Solo Female Travel Safety',
        description: 'Iceland #1 globally in Gender Gap Index for 14th consecutive year. Ranked #9 safest country for solo female travelers. Travelers report "feeling safer than anywhere else" with virtually zero street harassment.',
        severity: 'low',
        sourceName: 'WEF Gender Gap Report 2024 & Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/iceland/reykjavik'
      },
      {
        title: 'Download Essential Safety Apps Before Arrival',
        description: '112 Iceland Emergency App essential for GPS location sharing. Vedur.is for weather monitoring. SafeTravel.is for route planning. Weather changes rapidly and is main safety consideration.',
        severity: 'medium',
        sourceName: 'Iceland Search & Rescue & Met Office',
        sourceUrl: 'https://www.112.is/en/112-iceland-app/'
      },
      {
        title: 'Weather Safety Priority Over Crime Safety',
        description: 'Crime virtually non-existent but weather can be dangerous. Always check conditions, dress appropriately, inform others of outdoor plans. Weather-related incidents far exceed crime incidents.',
        severity: 'medium',
        sourceName: 'Iceland Met Office & Tourism Safety',
        sourceUrl: 'https://en.vedur.is/'
      },
      {
        title: 'Universal Card Payments & No Tipping Culture',
        description: 'Cards accepted everywhere including small purchases. No cash needed. No tipping expected - prices are final. This eliminates common travel safety concerns about carrying cash or payment disputes.',
        severity: 'low',
        sourceName: 'Visit Iceland & Cultural Guidelines',
        sourceUrl: 'https://www.visiticeland.com/'
      },
      {
        title: 'English Universally Spoken - Communication Never a Safety Barrier', 
        description: '98% of Icelanders speak English fluently. Emergency services operate in English. No language barriers affect personal safety or accessing help when needed.',
        severity: 'low',
        sourceName: 'Iceland Tourism & Embassy Information',
        sourceUrl: 'https://is.usembassy.gov/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$150 - $300+ USD / day',
        description: 'Iceland is very expensive but extremely safe. Higher costs ensure better safety infrastructure, healthcare, and emergency services.',
        tip: 'Expensive but safety value is exceptional. Budget more for accommodation and food, less for security concerns.'
      },
      accommodation: [
        {
          type: 'Hostel (Female Dorm)',
          avgCost: '$40-70 USD',
          safetyNote: 'Exceptional safety standards even in budget accommodations',
          safetyLevel: 'very-high'
        },
        {
          type: 'Mid-Range Hotel',
          avgCost: '$120-250 USD',
          safetyNote: 'Outstanding safety with professional security and services',
          safetyLevel: 'very-high'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$300+ USD',
          safetyNote: 'World-class safety standards and concierge services',
          safetyLevel: 'exceptional'
        }
      ],
      transport: [
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safest transportation method - excellent pedestrian infrastructure',
          safetyLevel: 'exceptional'
        },
        {
          method: 'Public Bus',
          cost: '$3-5 USD per ride',
          safetyDescription: 'Very safe with professional drivers and respectful passengers',
          safetyLevel: 'very-high'
        },
        {
          method: 'Taxi',
          cost: '$15-30 USD per ride',
          safetyDescription: 'Highly regulated and extremely safe with professional drivers',
          safetyLevel: 'very-high'
        }
      ],
      budgetTips: [
        'Expensive but safety value exceptional - invest in proper weather clothing',
        'Cook in hostel kitchens to save money while maintaining safety',
        'Public transport excellent value and very safe',
        'Weather-appropriate gear more important than luxury - prioritize function',
        'Free walking tours available and completely safe to join alone',
        'Thermal pools affordable luxury with excellent safety standards'
      ]
    }
};

export default reykjavik;