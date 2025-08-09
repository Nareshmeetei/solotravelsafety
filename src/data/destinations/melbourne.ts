import { Destination } from './types';

const melbourne: Destination = {
    city: 'Melbourne',
    country: 'Australia',
    continent: 'Oceania',
    countryCode: 'au',
    overallScore: 8.7,
    nightSafety: 8.2,
    publicTransit: 8.9,
    walkingAlone: 8.8,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 186,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 8.2, 
        context: 'Melbourne very safe at night in central areas with excellent street lighting and active foot traffic. Australia ranked among world\'s safest countries. City center well-lit and populated even late hours, making it comfortable for solo women.'
      },
      publicTransit: { 
        score: 8.9, 
        context: 'Melbourne\'s trams, trains, and buses extremely safe with CCTV monitoring and security presence. Transport widely used by locals and tourists. Harassment rare, public transport reliable and well-maintained with excellent safety infrastructure.'
      },
      walkingAlone: { 
        score: 8.8, 
        context: 'Australia has 13% sexual harassment rate (down from 17% in 2016). Melbourne residents generally respectful, street harassment not the norm. Solo female travelers report feeling very safe walking alone, especially in CBD and popular neighborhoods.'
      }
    },
    neighborhoods: {
      safe: [
        'Melbourne CBD - Central business district with excellent lighting, police presence, and constant activity day/night',
        'Fitzroy - Hip inner-city neighborhood with good safety record, trendy cafes, and active street life',
        'St Kilda - Popular beachside area with good tourist infrastructure and regular police patrols',
        'Southbank - Upscale riverside district with high security, premium hotels, and well-maintained walkways',
        'Richmond - Vibrant area with good public transport links and safe pedestrian access',
        'South Yarra - Affluent neighborhood with excellent safety standards and upscale shopping',
        'Carlton - University area with good lighting and regular student/resident foot traffic',
        'Collingwood - Artsy neighborhood with active community and improving safety infrastructure'
      ],
      caution: [
        'King Street nightlife strip late at night - Can get rowdy with alcohol-related incidents',
        'Some outer suburbs after dark - Public transport less frequent, less foot traffic',
        'Flinders Street Station surrounds very late at night - Can attract transient population'
      ],
      avoid: [
        'Frankston, Dandenong, Epping areas late at night - Higher crime rates in these outer suburbs',
        'Isolated areas along Yarra River at night - Limited lighting and emergency access'
      ]
    },
    accommodations: [
      {
        name: 'Space Hotel',
        type: 'hostel',
        features: ['Female dorms', 'CBD location', '24/7 reception', 'Kitchen facilities'],
        rating: 4.4,
        notes: 'Popular budget choice with female-only rooms, excellent security, and prime CBD location for safe walking to attractions.',
        link: 'https://www.spacehotel.com.au/'
      },
      {
        name: 'The Langham Melbourne',
        type: 'hotel',
        features: ['Luxury Southbank location', 'Premium security', '24/7 concierge', 'River views'],
        rating: 4.8,
        notes: 'Five-star luxury hotel with exceptional security standards, professional staff, and prime location in safe Southbank district.',
        link: 'https://www.langhamhotels.com/en/the-langham/melbourne/'
      },
      {
        name: 'United Backpackers Melbourne',
        type: 'hostel',
        features: ['Women-only floors', 'Central CBD', 'Modern security', 'Social atmosphere'],
        rating: 4.2,
        notes: 'Budget-friendly hostel with dedicated women-only floors, excellent security measures, and central location perfect for solo travelers.',
        link: 'https://www.unitedbackpackers.com.au/'
      },
      {
        name: 'Park Hyatt Melbourne',
        type: 'hotel',
        features: ['Premium location', 'Top-tier security', 'Collins Street address', '24/7 services'],
        rating: 4.7,
        notes: 'Luxury hotel in heart of CBD with outstanding security, professional staff trained in solo traveler assistance, and prime location.',
        link: 'https://www.hyatt.com/en-US/hotel/australia/park-hyatt-melbourne/'
      },
      {
        name: 'Melbourne Central YHA',
        type: 'hostel',
        features: ['Female dorms', 'CBD location', 'Kitchen facilities', 'Travel desk'],
        rating: 4.3,
        notes: 'Well-established hostel with female-only accommodations, excellent safety record, and helpful staff providing local safety advice.',
        link: 'https://www.yha.com.au/hostels/vic/melbourne/melbourne-central/'
      }
    ],
    alerts: [
      {
        title: 'Natural Disaster Risk - Bushfire Season',
        description: 'Australia\'s bushfire season (November-April) can affect outer Melbourne areas. Download Emergency+ app for alerts. Urban areas generally safe but smoke can impact air quality.',
        location: 'Outer Melbourne regions and surrounds',
        reportCount: 1,
        severity: 'low',
        dateReported: '2 months ago'
      },
      {
        title: 'Alcohol-Related Violence in Nightlife Areas',
        description: 'Occasional incidents of alcohol-related violence in King Street entertainment district late at night. Use caution in crowded bars and clubs after midnight.',
        location: 'King Street, CBD nightlife areas',
        reportCount: 4,
        severity: 'medium',
        dateReported: '3 weeks ago'
      }
    ],
    safetyTips: {
      clothing: `• Melbourne famous for unpredictable weather - "four seasons in one day"
• Layer clothing and always carry light jacket or sweater
• Comfortable walking shoes essential for exploring city on foot
• Dress casually to blend in with local culture
• Bring umbrella or raincoat - weather can change quickly
• Modest dress for religious sites and upscale restaurants
• Sun protection important - strong UV rays even on cloudy days`,
      firstTimers: `• Melbourne extremely beginner-friendly - English widely spoken
• Australia ranked among world's safest countries for solo women
• Excellent public transport system - very safe and reliable
• Download PTV app for real-time transport information
• Tipping not required but appreciated for good service (10-15%)
• Use tap-and-go payment - widely accepted everywhere
• Emergency number 000 for police, fire, ambulance`,
      apps: [
        'PTV Mobile - Official Melbourne public transport app with real-time updates (4.5★)',
        'Uber - Safe ride-sharing with driver verification and GPS tracking (4.6★)',
        'Emergency Plus - Official emergency app with location services for 000 calls (4.3★)',
        'YourGround - Community safety mapping specifically for women and gender-diverse travelers (4.1★)',
        'Zomato - Restaurant reviews and ratings with safety information (4.4★)',
        'VicEmergency - Official Victorian emergency alerts for bushfires and incidents (4.2★)',
        'Google Maps - Navigate Melbourne streets with offline capability (4.5★)',
        'bSafe - Personal safety app with emergency alerts and GPS sharing (4.2★)'
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English'
        },
        {
          english: 'Call the police!',
          local: 'Call the police!',
          localLanguage: 'English'
        },
        {
          english: 'I need a doctor.',
          local: 'I need a doctor.',
          localLanguage: 'English'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Where is the nearest hospital?',
          localLanguage: 'English'
        },
        {
          english: 'I am lost.',
          local: 'I am lost.',
          localLanguage: 'English'
        },
        {
          english: 'Please leave me alone.',
          local: 'Please leave me alone.',
          localLanguage: 'English'
        },
        {
          english: 'I feel unsafe.',
          local: 'I feel unsafe.',
          localLanguage: 'English'
        },
        {
          english: 'Can you help me?',
          local: 'Can you help me?',
          localLanguage: 'English'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '000', fire: '000', medical: '000', general: '000'
    },
    currency: {
      name: 'Australian Dollar', code: 'AUD', exchangeRate: {
      usd: 0.6579,
      eur: 0.5605,
      gbp: 0.4895
    }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English'],
    daytimeSafetyPercent: 72.5,
    nighttimeSafetyPercent: 43.2,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Melbourne',
    redFlags: [
      { label: 'Theft & Shoplifting (Tourist Areas, CBD)', frequency: 'Most common', icon: 'Hand' },
      { label: 'Alcohol-Related Violence (Nightlife Areas)', frequency: 'Occasional', icon: 'Beer' },
      { label: 'Scams (ATM, Online, Ticket)', frequency: 'Occasional', icon: 'Shield' },
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' },
    ],
    usefulTips: [
      {
        title: "Use public transport and official taxis at night",
        description: "Melbourne\'s trams, trains, and buses are safe and reliable. For late-night travel, use official taxis or rideshare apps like Uber for added security.",
        severity: "low",
        sourceName: "Visit Victoria (Official Tourism)",
        sourceUrl: "https://www.visitvictoria.com/Information/Travel-information/Safety"
      },
      {
        title: "Stay in well-reviewed, central neighborhoods",
        description: "Choose accommodation in the CBD, Fitzroy, or Southbank for easy access to attractions and a safe environment, especially after dark.",
        severity: "low",
        sourceName: "Travel Ladies Melbourne Guide",
        sourceUrl: "https://travelladies.app/destination/oceania/australia/melbourne"
      },
      {
        title: "Keep valuables secure and be alert for pickpockets",
        description: "Petty theft is rare but can occur in crowded areas like Queen Victoria Market and public transport. Use anti-theft bags and keep your phone and wallet out of sight.",
        severity: "low",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/australia/safety-and-security"
      },
      {
        title: "Dress for the weather and blend in",
        description: "Melbourne weather is unpredictable—carry a jacket and umbrella. Dress casually to blend in and avoid drawing unwanted attention.",
        severity: "low",
        sourceName: "Everything Victoria (Local Guide)",
        sourceUrl: "https://everythingvictoria.com.au/things-to-do-melbourne-australia/"
      },
      {
        title: "Know emergency contacts and use YourGround for safety mapping",
        description: "Save emergency numbers (000 for police, fire, ambulance). Use the YourGround map to check and report safe/unsafe areas for women and gender-diverse travelers.",
        severity: "low",
        sourceName: "YourGround Victoria",
        sourceUrl: "https://www.yourground.org/"
      }
    ],
    culturalDos: [
      'Respect personal space and privacy.',
      'Queue politely and wait your turn.',
      'Dress casually and appropriately for the weather.',
      'Be punctual for meetings and events.',
      'Use polite greetings and thank yous.'
    ],
    culturalDonts: [
      "Don't be loud or disruptive in public.",
      "Don't cut in line or push ahead.",
      "Don't make jokes about race or religion.",
      "Don't stare at others or invade personal space.",
      "Don't litter or disrespect public spaces."
    ],
  
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Australia\'s sexual harassment rate 13% (down from 17% in 2016)', 'Occasional incidents in crowded nightlife areas', 'Street harassment not the norm in Melbourne culture', 'Most interactions respectful and safe for solo women'],
      reportingRate: 75, // Good reporting rate due to strong legal framework and supportive culture
      legalProtection: 'Australia has strong legal frameworks against harassment and sexual violence. Police responsive and professional. Victim support services well-established and accessible.',
      supportResources: [
        'Victoria Police Emergency: 000',
        '1800RESPECT National Helpline: 1800 737 732 (24/7)',
        'Safe Steps Family Violence Response Centre: 1800 015 188',
        'Sexual Assault Crisis Line Victoria: 1800 806 292',
        'Centre Against Sexual Assault (CASA): 03 9344 2210',
        'Women\'s Information and Referral Exchange: 1300 134 130',
        'Lifeline Australia: 13 11 14 (24/7 crisis support)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'The Royal Melbourne Hospital',
          address: '300 Grattan Street, Parkville VIC 3050',
          phone: '+61 3 9342 7000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Center', 'Women\'s Health', 'International Patient Services'],
          link: 'https://www.thermh.org.au/'
        },
        {
          name: 'St Vincent\'s Hospital Melbourne',
          address: '41 Victoria Parade, Fitzroy VIC 3065',
          phone: '+61 3 9231 2211',
          emergency: true,
          specialties: ['24/7 Emergency', 'Women\'s Health', 'Mental Health Services'],
          link: 'https://www.svhm.org.au/'
        },
        {
          name: 'Alfred Hospital',
          address: '55 Commercial Road, Melbourne VIC 3004',
          phone: '+61 3 9076 2000',
          emergency: true,
          specialties: ['Major Trauma Center', 'Emergency Medicine', 'Comprehensive Women\'s Services'],
          link: 'https://www.alfredhealth.org.au/'
        }
      ],
      pharmacies: [
        {
          name: 'Chemist Warehouse (Multiple Locations)',
          address: 'Various CBD locations',
          phone: '+61 3 9600 1071',
          hours: 'Daily 8:00-22:00 (varies by location)',
          emergency: false,
          link: 'https://www.chemistwarehouse.com.au/'
        },
        {
          name: 'Terry White Chemmart',
          address: 'Multiple Melbourne locations',
          phone: '+61 3 9654 8569',
          hours: 'Mon-Fri 9:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.terrywhitechemmart.com.au/'
        }
      ],
      womensHealth: {
        clinics: [
          'Royal Women\'s Hospital Melbourne: +61 3 8345 2000 (leading women\'s hospital)',
          'Family Planning Victoria: +61 3 9257 0100 (sexual health and family planning)',
          'Women\'s Health Victoria: +61 3 9664 9300 (advocacy and information)',
          'Melbourne Sexual Health Centre: +61 3 9341 6200 (comprehensive sexual health)'
        ],
        gynecologists: [
          'Royal Women\'s Hospital: Comprehensive gynecological services',
          'Epworth Healthcare: Private gynecological specialists',
          'Melbourne IVF: Reproductive health and fertility services'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Chemist Warehouse locations throughout Melbourne',
          'Hospital emergency departments provide services',
          'Family Planning Victoria clinics offer comprehensive services'
        ],
        sanitaryProducts: [
          'Widely available at supermarkets (Coles, Woolworths, IGA)',
          'Pharmacies and convenience stores well-stocked',
          'International brands readily available',
          '24/7 convenience stores in CBD and major areas'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Melbourne',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date',
        'Travel health consultations available at medical centers'
      ],
      healthRisks: [
        'Very low health risks overall',
        'Strong sun - high UV levels require sun protection',
        'Air quality generally excellent except during bushfire season',
        'Seasonal allergies possible during spring (September-November)'
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Australia maintains lowest risk level. Extremely safe for travelers. Main concerns are natural disasters (bushfires, cyclones in other regions). Exercise normal precautions.',
      reason: 'Very low crime rates, stable political system, excellent healthcare system.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/australia-travel-advisory.html',
      soloTravelerAdvice: [
        'Australia ranked among world\'s safest countries for solo female travel',
        'Excellent infrastructure and English-speaking environment',
        'Download Emergency+ app for natural disaster alerts',
        'Public transport extremely safe and reliable',
        'Strong legal protections and victim support services available'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: 'AUD $60-150 ($39-98 USD) per day',
        description: '2025 costs: Budget travelers AUD $60-80/day with hostels and self-catering. Mid-range AUD $120-150/day with hotels and restaurant meals. Melbourne offers good value with exceptional safety standards.',
        tip: 'Use public transport day passes for savings. Many free attractions and events. Tipping not required but 10-15% appreciated for good service.'
      },
      accommodation: [
        {
          type: 'Hostels with Female Dorms',
          avgCost: 'AUD $25-45/night ($16-29 USD)',
          safetyNote: 'Excellent safety with female-only rooms and 24/7 security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: 'AUD $120-200/night ($78-131 USD)',
          safetyNote: 'High safety standards with professional staff and central locations',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: 'AUD $250+/night ($164+ USD)',
          safetyNote: 'Premium security with concierge services and top locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport (Myki Card)',
          cost: 'AUD $4.60-9.20/day ($3-6 USD)',
          safetyDescription: 'Extremely safe with CCTV, security presence, and excellent lighting',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe with excellent street lighting and active foot traffic',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Ride-sharing',
          cost: 'AUD $10-25/trip ($7-16 USD)',
          safetyDescription: 'Very safe with driver verification and GPS tracking',
          safetyLevel: 'high'
        },
        {
          method: 'Bicycle (Melbourne Bike Share)',
          cost: 'AUD $3-10/day ($2-7 USD)',
          safetyDescription: 'Safe with extensive bike lanes, helmet provided',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Use Myki card for all public transport - much cheaper than individual tickets',
        'Many free attractions: Federation Square, Royal Botanic Gardens, street art tours',
        'Happy hour specials at restaurants (usually 5-7 PM) offer significant savings',
        'Free City Circle Tram provides great sightseeing and transport around CBD',
        'Supermarkets (Coles, Woolworths) much cheaper than convenience stores',
        'Free WiFi widely available in CBD, libraries, and shopping centers',
        'Many free events and festivals throughout the year',
        'BYO alcohol restaurants save money on dining (bring your own wine/beer)'
      ]
    },
    crimeStatistics: {
      violentCrime: 4.2, // per 100,000 - very low for major city
      propertyCrime: 1456, // per 100,000 - mostly minor theft and bike theft
      sexualAssault: 8.9, // per 100,000 - with strong reporting framework
      kidnapping: 0.3, // per 100,000 - extremely rare
      overallCrimeIndex: 35.8, // Low-medium crime category (Numbeo 2025)
      safetyIndex: 64.2, // Good safety category (Numbeo 2025)
      source: 'Victoria Police Crime Statistics & Australian Bureau of Statistics 2025',
      year: 2025,
      context: 'Melbourne very safe major city. Main issues: petty theft in tourist areas, some alcohol-related violence in nightlife districts. Violent crime against tourists extremely rare.'
    },
    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Melbourne',
        address: '553 St Kilda Road, Melbourne VIC 3004',
        phone: '+61 3 9526 5900',
        email: 'melbourneacs@state.gov',
        emergency: '+61 3 9526 5900',
        link: 'https://au.usembassy.gov/embassy-consulates/melbourne/'
      },
      embassies: [
        {
          name: 'U.S. Consulate General Melbourne',
          address: '553 St Kilda Road, Melbourne VIC 3004',
          phone: '+61 3 9526 5900',
          link: 'https://au.usembassy.gov/embassy-consulates/melbourne/'
        },
        {
          name: 'British Consulate General Melbourne',
          address: '90 Collins Street, Melbourne VIC 3000',
          phone: '+61 3 9652 1600',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-melbourne'
        },
        {
          name: 'German Consulate General Melbourne',
          address: '480 Collins Street, Melbourne VIC 3000',
          phone: '+61 3 9864 6888',
          link: 'https://au.diplo.de/au-en/embassy-consulates/melbourne'
        },
        {
          name: 'French Consulate General Melbourne',
          address: '492 St Kilda Road, Melbourne VIC 3004',
          phone: '+61 3 9820 0921',
          link: 'https://au.consulfrance.org/melbourne'
        },
        {
          name: 'Spanish Consulate Melbourne',
          address: '146 Toorak Road, South Yarra VIC 3141',
          phone: '+61 3 9820 4788',
          link: 'https://www.exteriores.gob.es/consulados/melbourne'
        },
        {
          name: 'Australian Government Services',
          address: 'Multiple locations throughout Melbourne',
          phone: '+61 132 281',
          link: 'https://www.australia.gov.au/'
        },
        {
          name: 'Canadian Consulate Melbourne',
          address: '101 Collins Street, Melbourne VIC 3000',
          phone: '+61 3 9653 9674',
          link: 'https://www.canadainternational.gc.ca/australia-australie/offices-bureaux/melbourne.aspx'
        },
        {
          name: 'Netherlands Consulate General Melbourne',
          address: '468 St Kilda Road, Melbourne VIC 3004',
          phone: '+61 3 9867 4555',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/australia/melbourne'
        },
        {
          name: 'Danish Consulate Melbourne',
          address: '277 William Street, Melbourne VIC 3000',
          phone: '+61 3 9670 1150',
          link: 'https://au.um.dk/en/the-trade-council/melbourne-consulate'
        },
        {
          name: 'Swiss Consulate General Melbourne',
          address: '495 St Kilda Road, Melbourne VIC 3004',
          phone: '+61 3 9867 7900',
          link: 'https://www.eda.admin.ch/melbourne'
        },
        {
          name: 'Indian Consulate General Melbourne',
          address: '55 Little Bourke Street, Melbourne VIC 3000',
          phone: '+61 3 9662 9999',
          link: 'https://www.cgmelbourne.gov.in/'
        }
      ],
      womensRights: [
        'Legal framework for women\'s rights varies by country',
        'Contact local embassy for specific information',
        'International women\'s rights organizations available'
      ],
      legalSupport: [
        'Contact local embassy for legal assistance',
        'International legal aid organizations available',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately',
        'Contact embassy for consular assistance',
        'Document all incidents with photos and details',
        'Keep copies of all police reports'
      ]
    },
};

export default melbourne;
