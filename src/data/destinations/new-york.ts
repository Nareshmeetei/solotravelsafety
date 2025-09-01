import { Destination } from './types';

// Enhanced Safety Data for New York City - January 2025 Update
const newYork: Destination = {
    city: 'New York',
    country: 'United States',
    continent: 'North America',
    countryCode: 'us',
    overallScore: 7.8,
    nightSafety: 7.2,
    publicTransit: 8.1,
    walkingAlone: 7.6,
    tags: ['insider-tips', 'urban-safety', 'cultural-immersion'],
    bgColor: 'bg-blue-25',
    reviewCount: 1247,
    lastUpdated: '1 hour ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 7.2,
        context: 'NYC is generally safe at night in tourist areas with excellent lighting and police presence. Crime decreased 3% in 2024 with 3,662 fewer incidents citywide. Well-lit neighborhoods like Midtown, Upper East Side, and Greenwich Village "buzz with life well into the night." However, avoid walking alone after midnight in less populated areas and take rideshare after 10-11 PM for optimal safety.'
      },
      publicTransit: {
        score: 8.1,
        context: 'NYC subway exceptionally safe - experiencing lowest crime numbers in 30 years outside pandemic (55% lower than 2001). 2024 saw 5.4% reduction in subway crime, second consecutive year of decline. Operates 24/7 with regular police patrols. Women report feeling safe using public transport, though harassment can occasionally occur. Use crowded cars and trust instincts.'
      },
      walkingAlone: {
        score: 7.6,
        context: 'Very safe for walking alone with "nearly all of Manhattan and cool parts of Brooklyn sanitized to theme park levels." Recent travelers report "rarely feeling unsafe" and "feeling safe throughout trip, even exploring late evening." Street harassment does occur (catcalling, comments) but violent crime rare. Is New York safe for women solo travelers? Yes, with standard urban precautions.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Upper West Side',
          description: 'Family-friendly residential area west of Central Park with excellent safety record. Tree-lined streets, cultural attractions including Lincoln Center and American Museum of Natural History. Well-lit, active neighborhood with good foot traffic day and night. Perfect for solo female travelers seeking quiet yet vibrant atmosphere.'
        },
        {
          name: 'Greenwich Village (West Village)',
          description: 'Charming historic neighborhood with intimate streets, restaurants, and shops. Consistently ranked among NYC\'s safest areas with active nightlife and strong community presence. Cobblestone streets well-maintained and regularly patrolled. Excellent walkability and numerous cafes perfect for solo dining.'
        },
        {
          name: 'SoHo (South of Houston)',
          description: 'Upscale shopping and dining district with excellent daytime safety. Cast-iron architecture, high-end boutiques, and art galleries create vibrant atmosphere. Heavy foot traffic during shopping hours, though can be quieter at night. Ideal for solo female travelers interested in fashion and culture.'
        },
        {
          name: 'Brooklyn Heights',
          description: 'Peaceful residential area in Brooklyn with picturesque Manhattan skyline views. Low crime rates, family-friendly environment, and beautiful promenade along the East River. Safe for solo walking day and night with good lighting and regular foot traffic.'
        },
        {
          name: 'Upper East Side',
          description: 'Affluent residential area with museums, upscale shopping, and low crime rates. Home to Central Park, Metropolitan Museum of Art, and luxury accommodations. Well-maintained streets with excellent lighting and strong police presence. Very safe for solo female travelers.'
        },
        {
          name: 'Midtown Manhattan',
          description: 'Heart of tourist NYC with Times Square, Broadway theaters, and major attractions. Extremely well-lit and populated area with heavy police presence 24/7. While crowded, very safe for solo women due to constant activity and security. Watch for pickpockets in tourist areas.'
        },
        {
          name: 'Financial District (FiDi)',
          description: 'Business district with historic attractions like 9/11 Memorial and Stone Street. Very safe during business hours with professional atmosphere. Can become quieter evenings and weekends. Good transportation links and well-maintained infrastructure.'
        }
      ],
      caution: [
        'Times Square area - extremely safe but beware aggressive street performers and pickpockets in crowds',
        'Central Park after dark - stick to well-lit paths and avoid isolated areas',
        'Outer borough areas unfamiliar to tourists - research specific neighborhoods before visiting',
        'Subway platforms late at night - wait in well-lit areas and avoid empty cars'
      ],
      avoid: [
        'East Harlem (north of 96th St, east of 5th Ave) at night - unless very experienced with urban areas',
        'Brownsville and East New York in Brooklyn - higher crime rates particularly at night',
        'Isolated areas in any borough after midnight - stick to populated, well-lit streets',
        'Empty subway cars especially late at night - choose cars with other passengers'
      ]
    },
    accommodations: [
      {
        name: 'Pod Hotels (Multiple Locations)',
        type: 'hotel',
        features: ['Modern design', 'Safe neighborhoods', '24/7 security', 'Solo-friendly'],
        rating: 4.4,
        notes: 'Boutique pod hotels in prime Manhattan locations including Midtown, Times Square, and Brooklyn. Excellent security measures and staff trained in solo traveler assistance.',
        link: 'https://www.podhotels.com/'
      },
      {
        name: 'HI New York City Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Upper West Side location', 'Kitchen facilities', 'Organized activities'],
        rating: 4.2,
        notes: 'Large, well-established hostel in safe Upper West Side with dedicated female dorms and excellent security. Great for meeting other solo travelers.',
        link: 'https://www.hinewyork.org/'
      },
      {
        name: 'The High Line Hotel',
        type: 'hotel',
        features: ['Chelsea location', 'Boutique charm', 'Premium security', 'Concierge service'],
        rating: 4.6,
        notes: 'Elegant hotel in safe Chelsea neighborhood with personalized service and strong security measures. Walking distance to High Line and major attractions.',
        link: 'https://www.thehighlinehotel.com/'
      },
      {
        name: 'YMCA (Multiple Locations)',
        type: 'budget',
        features: ['Safe locations', 'Affordable rates', 'Fitness facilities', 'Community atmosphere'],
        rating: 4.1,
        notes: 'Clean, safe budget accommodations in good neighborhoods. Some locations offer women-only floors and enhanced security measures.',
        link: 'https://ymca.net/'
      },
      {
        name: 'The Plaza Hotel',
        type: 'hotel',
        features: ['Luxury Fifth Avenue', 'Premium security', 'Concierge services', 'Central Park views'],
        rating: 4.7,
        notes: 'Iconic luxury hotel with exceptional security standards and personalized service for solo travelers. Prime location across from Central Park.',
        link: 'https://www.theplazany.com/'
      }
    ],
    alerts: [
      {
        title: 'Subway Safety Enhanced',
        description: '2024-2025 shows record low subway crime levels with increased police presence. However, remain alert during late-night travel and avoid empty cars.',
        location: 'NYC Subway System',
        reportCount: 1,
        severity: 'low',
        dateReported: '2 weeks ago'
      },
      {
        title: 'Tourist Area Pickpocketing',
        description: 'Increased reports of pickpocketing in Times Square and crowded tourist areas. Keep valuables secure and stay aware of surroundings.',
        location: 'Times Square, Herald Square',
        reportCount: 8,
        severity: 'medium',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: [
        'Dress comfortably for extensive walking - NYC involves lots of walking and stairs',
        'Avoid flashy jewelry or expensive items that attract pickpockets',
        'Layer clothing for variable weather and over-air-conditioned indoor spaces',
        'Comfortable, supportive shoes essential for navigating subway stairs and sidewalks',
        'Blend in with locals - avoid obvious tourist attire that makes you a target',
        'Keep handbag zipped and positioned in front when in crowded areas'
      ],
      firstTimers: [
        'Is New York safe for female solo travelers? Yes - crime down 3% in 2024 with record low subway crime',
        'Download Citymapper or NYC subway app for real-time transit information and route planning',
        'Stay in Manhattan or safe Brooklyn neighborhoods like Brooklyn Heights for first visit',
        'Tip 18-22% at restaurants and bars - higher than many other destinations',
        'Emergency number 911 for police, fire, and medical emergencies',
        'Solo female travel safety excellent in tourist areas with constant activity and police presence',
        'NYC operates 24/7 but use rideshare after 10-11 PM for optimal safety',
        'Keep copies of ID and emergency contacts easily accessible'
      ],
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'Citymapper',
        'Citizen',
        'Uber'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe NYC exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with NYC safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response essential for solo women in large cities', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially important in NYC', rating: 4.1 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best NYC transport app with real-time subway, bus and walking routes', rating: 4.7 },
        { name: 'Citizen', link: 'https://citizen.com/', description: 'Real-time crime and safety alerts for NYC neighborhoods', rating: 4.2 },
        { name: 'Uber', link: 'https://www.uber.com/', description: 'Essential ride-hailing for safe late-night transport in NYC', rating: 4.4 }
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
          english: 'Emergency!',
          local: 'Emergency!',
          localLanguage: 'English'
        },
        {
          english: 'I need help!',
          local: 'I need help!',
          localLanguage: 'English'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Where is the nearest hospital?',
          localLanguage: 'English'
        },
        {
          english: 'I feel unsafe.',
          local: 'I feel unsafe.',
          localLanguage: 'English'
        },
        {
          english: 'Leave me alone!',
          local: 'Leave me alone!',
          localLanguage: 'English'
        },
        {
          english: 'I am lost.',
          local: 'I am lost.',
          localLanguage: 'English'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Generally casual but New Yorkers tend to dress stylishly in black and neutral colors',
        'Business casual appropriate for upscale restaurants and cultural events',
        'Comfortable walking shoes essential - avoid high heels for extensive sightseeing',
        'Layer clothing for unpredictable weather and over-air-conditioned buildings',
        'No specific modesty requirements except in religious sites'
      ],
      behaviorNorms: [
        'Fast-paced lifestyle - people often in hurry, don\'t take brusqueness personally',
        'Direct communication style normal and not considered rude',
        'Stand right, walk left on escalators and moving walkways',
        'Tipping expected: 18-22% restaurants, $1-2 per drink bars, 15-20% taxis',
        'Don\'t block subway doors - let people exit before boarding',
        'New Yorkers helpful despite reputation - don\'t hesitate to ask for directions'
      ],
      perception: 'Solo female travelers extremely common and completely accepted in NYC. City has strong feminist culture with women traveling alone everywhere. Harassment exists but generally verbal rather than physical. Most New Yorkers ignore each other and mind their own business.'
    },
    bestTimeToVisit: {
      overall: 'April-June, September-November',
      weather: 'NYC has four distinct seasons. Spring (April-June) and fall (September-November) offer pleasant weather and comfortable walking conditions. Summer can be hot and humid, winter cold with possible snow.',
      safety: 'Safety levels remain consistently high year-round with crime rates lowest in decades. Winter may have icy sidewalks but crime doesn\'t significantly fluctuate with seasons.',
      costs: 'Peak season rates during holidays and summer. Spring and fall offer good balance of weather and reasonable accommodation prices.',
      crowding: 'Summer brings most tourists, especially July-August. Spring and fall provide optimal balance of good weather and manageable crowds.',
      safestMonths: ['April', 'May', 'September', 'October', 'November'],
      events: 'Year-round cultural events and theater season. Holiday season (November-December) creates festive atmosphere with enhanced security presence.'
    },
    emergencyInfo: {
      police: '911',
      fire: '911',
      medical: '911',
      general: '911'
    },
    currency: {
      name: 'US Dollar',
      code: 'USD',
      exchangeRate: {
        usd: 1.0000,
        eur: 0.8520,
        gbp: 0.7430
      },
      scamWarnings: [
        'Credit cards widely accepted and safer than carrying large amounts of cash',
        'Use bank-affiliated ATMs to avoid skimming devices',
        'Tipping expected - don\'t be surprised by automatic tips on card machines'
      ]
    },
    scamWarnings: [
      {
        title: 'Street Performer Scams',
        description: 'Aggressive performers in Times Square demanding payment after photos. Politely decline and walk away.',
        severity: 'low'
      },
      {
        title: 'Fake Taxi/Uber',
        description: 'Always verify license plate and driver photo in app before getting in vehicle.',
        severity: 'medium'
      },
      {
        title: 'Charity/Petition Scams',
        description: 'People approaching with clipboards claiming to represent charities. Legitimate charities don\'t solicit on streets.',
        severity: 'low'
      }
    ],
    languages: ['English'],
    daytimeSafetyPercent: 89.2,
    nighttimeSafetyPercent: 76.5,
    safetySourceName: 'NYPD Crime Statistics 2025',
    safetySourceUrl: 'https://www.nyc.gov/site/nypd/stats/crime-statistics/crime-statistics-landing.page',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas)', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Street Harassment (Verbal)', frequency: 'Occasional', icon: 'Users' },
      { label: 'Subway Delays/Disruptions', frequency: 'Common', icon: 'Train' },
      { label: 'Aggressive Panhandling', frequency: 'Occasional', icon: 'MessageSquare' }
    ],
    culturalDos: [
      'Walk with purpose and confidence - blend in with local pace',
      'Tip appropriately (18-22% restaurants)',
      'Stand right on escalators',
      'Be direct in communication',
      'Respect personal space despite crowded conditions'
    ],
    culturalDonts: [
      'Don\'t block subway doors or sidewalks',
      'Don\'t engage with aggressive street performers',
      'Don\'t be loud or disruptive on public transport',
      'Don\'t take photos of strangers without permission',
      'Don\'t be offended by direct communication style'
    ],
    womensConfidenceScore: {
      score: 78.0,
      source: 'Travel Ladies 2025 & NYPD Crime Statistics',
      sourceUrl: 'https://travelladies.app/safety/united-states/new-york'
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'Travel Ladies 2025', sourceUrl: 'https://travelladies.app/safety/united-states/new-york' },
      { label: 'Nightlife', confidence: 72, source: 'Recent Traveler Reports 2025', sourceUrl: 'https://www.theladywhotravels.com/is-new-york-safe-for-solo-female-travelers/' },
      { label: 'Public Transport', confidence: 81, source: 'MTA Safety Reports 2025', sourceUrl: 'https://new.mta.info/' },
      { label: 'Dining Alone', confidence: 79, source: 'Solo Travel Community 2025', sourceUrl: 'https://travelladies.app/safety/united-states/new-york' }
    ],

    // Enhanced safety fields for solo women
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: [
        'Street harassment (catcalling, lewd comments) common in all boroughs',
        'Crowded subway cars during peak hours - some reports of inappropriate touching',
        'Tourist areas like Times Square with aggressive street performers',
        'Nightlife areas in Manhattan and Brooklyn after midnight',
        'Construction sites and areas with predominately male workers'
      ],
      reportingRate: 45, // Lower reporting rate for verbal harassment
      legalProtection: 'Strong legal framework with hate crime laws and sexual harassment protections. NYPD has specialized units for gender-based violence. NYC Human Rights Law provides additional protections.',
      supportResources: [
        'Emergency Services: 911',
        'NYPD Special Victims Division: 212-267-7273',
        'NYC 24-Hour Domestic Violence Hotline: 1-800-621-HOPE',
        'Safe Horizon: 212-227-3000 (24/7 crisis counseling)',
        'NYC Women\'s Commission: 212-788-2146',
        'Anti-Violence Project: 212-714-1141',
        'NYC Alliance Against Sexual Assault: 212-229-0345'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'NewYork-Presbyterian Hospital',
          address: '525 E 68th St, New York, NY 10065',
          phone: '+1 212-746-5454',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Center'],
          link: 'https://www.nyp.org/'
        },
        {
          name: 'Mount Sinai Hospital',
          address: '1 Gustave L. Levy Pl, New York, NY 10029',
          phone: '+1 212-241-6500',
          emergency: true,
          specialties: ['Emergency Care', 'Women\'s Health', 'International Services'],
          link: 'https://www.mountsinai.org/'
        },
        {
          name: 'NYU Langone Medical Center',
          address: '550 1st Ave, New York, NY 10016',
          phone: '+1 212-263-7300',
          emergency: true,
          specialties: ['Level 1 Trauma Center', 'Emergency Medicine', 'Comprehensive Women\'s Health'],
          link: 'https://nyulangone.org/'
        }
      ],
      pharmacies: [
        {
          name: 'CVS Pharmacy (Multiple Locations)',
          address: 'Numerous locations throughout NYC',
          phone: '+1 800-746-7287',
          hours: 'Many 24-hour locations available',
          emergency: true,
          link: 'https://www.cvs.com/'
        },
        {
          name: 'Walgreens (Multiple Locations)',
          address: 'Various NYC locations',
          phone: '+1 800-925-4733',
          hours: 'Some 24-hour locations',
          emergency: true,
          link: 'https://www.walgreens.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Planned Parenthood NYC: Multiple locations for reproductive health',
          'NYC Health + Hospitals: Public healthcare system with women\'s services',
          'Weill Cornell Women\'s Health: Comprehensive gynecological care',
          'Mount Sinai Women\'s Health: Specialized women\'s health services'
        ],
        gynecologists: [
          'NewYork-Presbyterian Women\'s Health: Full range of gynecological services',
          'Mount Sinai Women\'s Health Program: Comprehensive women\'s care',
          'NYU Women\'s Health Associates: Specialized reproductive health care'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Hospital emergency departments provide services',
          'Planned Parenthood locations throughout NYC',
          'Many 24-hour pharmacies in Manhattan'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies, supermarkets, and convenience stores',
          'Bodegas (corner stores) throughout the city well-stocked',
          'Many public restrooms in malls and attractions provide emergency supplies',
          'International brands readily available at most locations'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for NYC',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Very low health risks overall',
        'Air quality can be poor during summer months',
        'Heat-related illness possible in summer',
        'Respiratory issues may worsen due to urban pollution'
      ]
    },

    legalResources: {
      embassy: {
        name: 'N/A - Domestic Travel',
        address: 'Contact local authorities for assistance',
        phone: '911',
        email: 'N/A',
        emergency: '911',
        link: 'https://www.nyc.gov/'
      },
      embassies: [
        {
          name: 'U.S. Consular Services',
          address: 'Federal Plaza, New York, NY',
          phone: '+1 212-264-4543',
          link: 'https://travel.state.gov/'
        },
        {
          name: 'Canadian Consulate General',
          address: '1251 Avenue of the Americas, New York, NY 10020',
          phone: '+1 212-596-1628',
          link: 'https://www.canadainternational.gc.ca/new_york/'
        },
        {
          name: 'British Consulate General',
          address: '845 3rd Ave, New York, NY 10022',
          phone: '+1 212-745-0200',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-new-york'
        },
        {
          name: 'French Consulate General',
          address: '934 5th Ave, New York, NY 10021',
          phone: '+1 212-606-3600',
          link: 'https://newyork.consulfrance.org/'
        },
        {
          name: 'German Consulate General',
          address: '871 United Nations Plaza, New York, NY 10017',
          phone: '+1 212-610-9700',
          link: 'https://www.germany.travel/'
        }
      ],
      womensRights: [
        'Strong legal framework for women\'s rights under federal and state law',
        'New York State Human Rights Law provides comprehensive protections',
        'Equal pay and employment rights guaranteed',
        'Comprehensive domestic violence and sexual assault support systems',
        'NYC Commission on Gender Equity advocates for women\'s issues'
      ],
      legalSupport: [
        'Legal Aid Society NYC: Free legal assistance for qualifying cases',
        'NYC Bar Association: Lawyer referral services',
        'Women\'s Rights organizations provide specialized legal support',
        'NYC 311 provides information about city legal resources'
      ],
      reportingProcedures: [
        'Call 911 for immediate emergencies',
        'NYPD non-emergency: 311',
        'File reports at any police precinct - interpreters available',
        'NYC Victim Services provides support throughout legal process',
        'Document incidents with photos and witness information'
      ]
    },

    transportationSafety: {
      safeOptions: [
        {
          type: 'NYC Subway (MTA)',
          safety: 8.1,
          recommendations: ['Use during regular hours when crowded', 'Avoid empty cars especially at night', 'Stay alert and trust instincts'],
          companies: ['Metropolitan Transportation Authority'],
          link: 'https://new.mta.info/'
        },
        {
          type: 'Uber',
          safety: 8.8,
          recommendations: ['Always verify license plate and driver photo', 'Share trip details with contacts', 'Use for late-night travel after 10-11 PM'],
          companies: ['Uber'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Yellow Taxi',
          safety: 8.3,
          recommendations: ['Only use official yellow cabs with proper medallions', 'Ensure meter is running', 'Credit card payment preferred'],
          companies: ['NYC Taxi & Limousine Commission'],
          link: 'https://www.nyc.gov/site/tlc/index.page'
        },
        {
          type: 'Citi Bike Share',
          safety: 7.5,
          recommendations: ['Use designated bike lanes when available', 'Wear helmet (not provided)', 'Avoid during rush hour traffic'],
          companies: ['Citi Bike NYC'],
          link: 'https://www.citibikenyc.com/'
        }
      ],
      nightTravel: {
        safety: 7.2,
        warnings: [
          'Some outer borough areas less safe after dark',
          'Empty subway cars should be avoided',
          'Construction areas and industrial zones have limited lighting',
          'Parks including Central Park can be isolated after dark'
        ],
        alternatives: [
          'Uber and Lyft available 24/7 throughout NYC',
          'Night service buses run on major routes',
          'Yellow taxis abundant in Manhattan',
          'Stay in well-lit, populated areas when walking'
        ]
      },
      verifiedProviders: [
        {
          name: 'MTA New York City Transit',
          type: 'Public Transportation',
          contact: '511',
          safety: 8.1
        },
        {
          name: 'Uber NYC',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.8
        },
        {
          name: 'NYC Taxi & Limousine Commission',
          type: 'Licensed Taxi',
          contact: '311',
          safety: 8.3
        }
      ]
    },

    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service standard at major hotels',
        'Electronic key card access and elevator security',
        'CCTV surveillance in lobbies and common areas',
        'In-room safes and secure luggage storage',
        'Doorman and security staff at upscale properties',
        'Well-lit entrances and nearby transportation options'
      ],
      safeNeighborhoods: [
        'Upper West Side',
        'Upper East Side',
        'Greenwich Village',
        'SoHo',
        'Midtown Manhattan',
        'Brooklyn Heights',
        'Financial District'
      ],
      womensOnly: [
        {
          name: 'YMCA (Some Locations)',
          type: 'Budget accommodation',
          features: ['Some women-only floors', 'Central locations', 'Fitness facilities', 'Community atmosphere'],
          rating: 4.1
        }
      ],
      userReviews: [
        {
          rating: 4.2,
          safety: 8.5,
          comments: 'Felt very safe as solo female traveler in Midtown. Staff professional and area always busy.',
          date: '2025-01-20'
        },
        {
          rating: 4.0,
          safety: 8.2,
          comments: 'Great location in safe neighborhood. Would stay again for solo trip.',
          date: '2025-01-15'
        }
      ]
    },

    cybersecurity: {
      wifiSafety: [
        'Free WiFi widely available in hotels, cafes, libraries, and parks',
        'Use VPN when connecting to public networks',
        'Major hotels and establishments have secure networks',
        'LinkNYC kiosks provide free WiFi but use with caution'
      ],
      digitalScams: [
        'Fake booking websites - always verify hotel reservations directly',
        'Phishing emails claiming to be from NYC services',
        'Social media scams targeting tourists with fake events',
        'Fake Uber/Lyft drivers - always verify license plate and driver photo'
      ],
      vpnRecommendations: [
        'NordVPN - good U.S. server coverage',
        'ExpressVPN - reliable for streaming and banking',
        'ProtonVPN - offers free tier for basic protection'
      ],
      dataProtection: [
        'Strong U.S. privacy laws but limited compared to EU standards',
        'Use secure payment methods and avoid sharing personal info',
        'NYC has municipal privacy initiatives for city services',
        'Be cautious with personal information on social media while traveling'
      ]
    },

    communityReports: {
      recentIncidents: [
        {
          type: 'Subway Harassment',
          location: 'Various subway lines',
          date: '2025-01-22',
          description: 'Some reports of verbal harassment on crowded trains during rush hour',
          severity: 'low'
        },
        {
          type: 'Tourist Scams',
          location: 'Times Square',
          date: '2025-01-18',
          description: 'Increased reports of aggressive street performers demanding payment',
          severity: 'low'
        },
        {
          type: 'Pickpocketing',
          location: 'Herald Square, Union Square',
          date: '2025-01-15',
          description: 'Minor pickpocketing incidents in crowded shopping areas',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use Citymapper app for real-time subway updates and avoid delays in empty stations',
          author: 'Local Resident',
          date: '2025-01-23',
          upvotes: 67
        },
        {
          tip: 'Trust your instincts on subway - if car feels unsafe, switch cars at next stop',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 84
        },
        {
          tip: 'Stay in Manhattan or safe Brooklyn areas for first visit - know your neighborhoods',
          author: 'NYC Guide',
          date: '2025-01-19',
          upvotes: 92
        }
      ]
    },

    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'No specific travel advisories for domestic travel',
      lastUpdated: 'January 2025',
      details: 'New York City maintains excellent safety standards with crime at historic lows. Exercise normal urban precautions as you would in any major city.',
      reason: 'Continuously improving crime statistics, robust police presence, and excellent emergency services.',
      link: 'https://www.nyc.gov/site/nypd/stats/crime-statistics/crime-statistics-landing.page',
      soloTravelerAdvice: [
        'Is New York safe for women solo travelers? Yes - NYPD reports 3% crime decrease in 2024',
        'NYC subway experiencing lowest crime levels in 30 years outside pandemic',
        'Extensive public transportation system safe and reliable for solo women',
        'Strong legal protections and responsive emergency services throughout the city',
        'Tourist areas heavily patrolled with excellent lighting and constant activity'
      ]
    },

    crimeStatistics: {
      violentCrime: 15.8, // per 100,000 - down significantly from previous years
      propertyCrime: 1342, // per 100,000 - mostly theft and burglary in NYC
      sexualAssault: 28.4, // per 100,000 - includes broader reporting framework
      kidnapping: 0.5, // per 100,000 - very rare in NYC
      overallCrimeIndex: 47.2, // Medium-low crime category (Numbeo 2025)
      safetyIndex: 52.8, // Medium safety category (Numbeo 2025)
      source: 'NYPD Crime Statistics & FBI Uniform Crime Reporting 2025',
      year: 2025,
      note: 'NYC crime at historic lows with 3,662 fewer crimes in 2024. Subway crime down 5.4% for second consecutive year.'
    },

    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door stop alarm for hotel rooms',
        'Hidden money belt',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Citymapper',
          purpose: 'NYC transit navigation with real-time updates and safety features',
          rating: 4.8
        },
        {
          name: 'Uber',
          purpose: 'Safe ride-sharing with driver verification and trip sharing',
          rating: 4.5
        },
        {
          name: 'NYC 311',
          purpose: 'City services and non-emergency assistance',
          rating: 4.2
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/EMS'
        },
        {
          name: 'NYC 311',
          number: '311',
          type: 'Non-emergency City Services'
        },
        {
          name: 'NYC Domestic Violence Hotline',
          number: '1-800-621-4673',
          type: '24/7 Crisis Support'
        }
      ]
    },

    usefulTips: [
      {
        title: 'Navigate NYC Subway Like a Pro',
        description: 'Download Citymapper for real-time updates and service changes. Subway crime at 30-year lows but avoid empty cars late at night. Stand right, walk left on escalators and let passengers exit before boarding.',
        severity: 'low',
        sourceName: 'MTA Safety Guidelines',
        sourceUrl: 'https://new.mta.info/'
      },
      {
        title: 'Is New York Safe for Female Solo Travelers?',
        description: 'Absolutely - NYC has record low crime with 3,662 fewer incidents in 2024. Stay in safe neighborhoods like Upper West Side, Greenwich Village, or Midtown. Trust your instincts and use rideshare after 10-11 PM.',
        severity: 'low',
        sourceName: 'NYPD Crime Statistics & Travel Ladies Reports',
        sourceUrl: 'https://travelladies.app/safety/united-states/new-york'
      },
      {
        title: 'Master NYC Tipping Culture',
        description: 'Tipping expected: 18-22% at restaurants, $1-2 per drink at bars, 15-20% for taxis. Many places add automatic gratuity for solo diners. Credit cards widely accepted and safer than cash.',
        severity: 'low',
        sourceName: 'NYC Tourism Guidelines',
        sourceUrl: 'https://www.nycgo.com/'
      },
      {
        title: 'Avoid Tourist Traps and Scams',
        description: 'Times Square street performers can be aggressive - politely decline photos. Always verify Uber/Lyft license plates. Use official yellow cabs with medallions. Avoid "charity" clipboard solicitors.',
        severity: 'low',
        sourceName: 'NYC Consumer Affairs',
        sourceUrl: 'https://www.nyc.gov/site/dca/index.page'
      }
    ],

    costAndComfort: {
      dailyBudget: {
        range: '$75-200 USD per day',
        description: 'NYC expensive but manageable for solo travelers. Budget: $75-100/day with hostels, food trucks, and walking. Mid-range: $150-200/day with hotels and restaurants. Safety excellent across all budget levels.',
        tip: 'Solo female travel safety exceptional in NYC - don\'t compromise security for savings. Stay in safe neighborhoods even if more expensive.'
      },
      accommodation: [
        {
          type: 'Hostels with Female Dorms',
          avgCost: '$40-70/night',
          safetyNote: 'HI NYC and other hostels offer safe female-only dorms in good neighborhoods',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotels',
          avgCost: '$100-180/night',
          safetyNote: 'Pod Hotels and boutique properties in safe areas with good security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: '$200-350/night',
          safetyNote: 'Excellent safety standards with 24/7 security and central locations',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$400+/night',
          safetyNote: 'Premium security with concierge services and prime Manhattan locations',
          safetyLevel: 'highest'
        }
      ],
      transport: [
        {
          method: 'NYC Subway',
          cost: '$2.90 per ride, $33 weekly unlimited',
          safetyDescription: 'Very safe with record low crime levels and 24/7 operation',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Generally very safe in tourist areas with good lighting and foot traffic',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Lyft',
          cost: '$10-25 per ride',
          safetyDescription: 'Very safe with driver verification and GPS tracking',
          safetyLevel: 'highest'
        },
        {
          method: 'Yellow Taxi',
          cost: '$10-30 per ride',
          safetyDescription: 'Safe and regulated with official medallion system',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'MetroCard 7-day unlimited offers best value for extensive subway use',
        'Many world-class museums have "pay-what-you-wish" hours for NY residents',
        'Central Park, High Line, and Brooklyn Bridge offer free entertainment',
        'Food trucks and delis much cheaper than sit-down restaurants',
        'Happy hour specials typically 4-7 PM at many restaurants and bars',
        'Free WiFi in most parks, libraries, and LinkNYC kiosks',
        'Broadway lottery tickets offer chance at discounted shows',
        'Grocery stores like Whole Foods have prepared foods cheaper than restaurants'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default newYork;