import { Destination } from './types';

// Comprehensively Enhanced Safety Data for Johannesburg - January 2025 Update
// Is Johannesburg safe for female solo travelers? This guide provides comprehensive solo female travel safety information.

const johannesburg: Destination = {
    city: 'Johannesburg',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 2.9,
    nightSafety: 1.5,
    publicTransit: 2.5,
    walkingAlone: 1.8,
    tags: ['warning-flags', 'high-crime'],
    bgColor: 'bg-red-75',
    reviewCount: 327,
    lastUpdated: 'Just updated - Comprehensively Enhanced Safety Data',
    harassmentRisk: 'very high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.5, 
        context: 'Extremely dangerous at night with only 8.6% nighttime safety rating. High violent crime rates including armed robbery, sexual assault, and kidnapping. Travel Ladies rates Johannesburg #86 safest in South Africa for solo female travelers. Even safe areas like Sandton experience crime after dark.' 
      },
      publicTransit: { 
        score: 2.5, 
        context: 'Public transport presents significant risks with frequent taxi strikes, harassment, and violent incidents. Criminals track passengers from OR Tambo Airport to rob them at gunpoint. Uber is safest option but limited coverage. Gautrain is relatively safe but expensive.' 
      },
      walkingAlone: { 
        score: 1.8, 
        context: 'Walking alone strongly discouraged, especially for women. 2025 data shows Gauteng province ranked #89 safest for solo females with 2/5 safety rating. High street harassment, muggings, and express kidnapping risks. Even locals avoid walking in most areas.' 
      }
    },
    neighborhoods: {
      safe: [
        'Sandton Central - \"Richest square mile in Africa\", best for solo travelers',
        'Rosebank - Has undercover, uniformed, and tourist police',
        'Melrose Arch - Gated precinct with 600+ CCTV cameras and 200+ security guards',
        'Melrose - Safe for daytime walking',
        'Parkhurst - Upscale area, safe during day',
        'Linden - Relatively safe neighborhood'
      ],
      caution: [
        'Braamfontein - Rejuvenated area but use caution after dark',
        'Newtown - Cultural precinct but requires vigilance',
        'Maboneng - Safe within the precinct, dangerous outside',
        'Fourways - Safe but far from city center'
      ],
      avoid: [
        'Hillbrow - One of the worst suburbs, avoid completely',
        'Yeoville - High street crime rates',
        'Berea - Known criminal activity',
        'Observatory - Dangerous for tourists',
        'CBD (Central Business District) - Especially dangerous at night',
        'Soweto - High risk of violent aggression (Canadian/French advisory warnings)'
      ]
    },
    accommodations: [
      { name: 'The Saxon Hotel, Villas and Spa', type: 'hotel', features: ['24/7 Security', 'Gated Property', 'Concierge Service', 'Airport Transfers'], rating: 4.5, notes: 'Most luxurious hotel in Johannesburg. Solo female travelers praise exceptional security and service. Gated property on 10 acres of gardens in safe Sandhurst area.' },
      { name: 'African Pride Melrose Arch Autograph Collection', type: 'hotel', features: ['Gated Precinct', '600+ CCTV Cameras', '200+ Security Guards', 'Walkable Area'], rating: 4.4, notes: '2024 solo female traveler: "Perfect hotel for first-time solo woman traveler. Located in secure Melrose Arch precinct, very safe area."' },
      { name: 'Protea Hotel Fire & Ice Melrose Arch', type: 'hotel', features: ['Secure Precinct', '24/7 Security', 'Modern Amenities', 'Walkable to Restaurants'], rating: 4.2, notes: 'Located within secure Melrose Arch. 2024 review: "Excellent location, very safe area and close to many good restaurants."' },
      { name: 'Radisson Blu Hotel Sandton', type: 'hotel', features: ['24/7 Reception', 'Sandton Business District', 'Gautrain Access', 'Central Location'], rating: 4.3, notes: 'Heart of Sandton with walking distance to Gautrain Station. Staff described as "so friendly" by travelers.' },
      { name: 'InterContinental Johannesburg O.R.Tambo Airport', type: 'hotel', features: ['High Security Protocols', 'Airport Location', '24/7 Staff', '225ft from Arrivals'], rating: 4.4, notes: 'Solo female traveler: "Traveling as a woman solo from abroad, my safety was paramount" - praised security measures.' },
      { name: 'Curiocity Backpackers', type: 'hostel', features: ['Female-only Dorms', '24/7 Reception', 'Secure Lockers', 'Shuttle Service'], rating: 4.0, notes: 'Guardian-recognized top 10 industrial-chic hostel worldwide. "Awesome selection of female-only dorms" for solo women.' },
      { name: 'Lebo\'s Soweto Backpackers', type: 'hostel', features: ['Female-only Options', 'Community Integration', 'Cultural Immersion', 'Local Guidance'], rating: 4.1, notes: 'Best rated hostel for female solo travelers. Authentic township experience while maintaining safety standards.' },
      { name: 'Rosebank Backpackers', type: 'hostel', features: ['Gautrain Access', '24/7 Staff Support', 'Security Gates', 'Safety Guidance'], rating: 3.9, notes: 'Walking distance to Rosebank Gautrain. Staff "clearly explain where it is safe and where you absolutely should not go."' }
    ],
    alerts: [
      { title: 'Kidnapping Alert - 264% Increase', description: '51% of South African kidnapping incidents occur in Gauteng Province. Express kidnapping and sexual assault during incidents reported.', location: 'Gauteng Province', reportCount: 45, severity: 'very high', dateReported: '2 days ago' },
      { title: 'High Crime Alert - Violent Crime', description: 'Frequent reports of violent crime including murder rate of 45.53 per 100,000 (4th highest globally). Armed robberies target tourists.', location: 'All areas', reportCount: 67, severity: 'very high', dateReported: '1 day ago' },
      { title: 'Sexual Violence Alert', description: '9,252 rape cases recorded April-June 2023. Sexual assault incidents have "sky-rocketed" according to safety reports.', location: 'All areas', reportCount: 32, severity: 'very high', dateReported: '3 days ago' },
      { title: 'Airport Targeting Alert', description: 'Criminals tracking tourists from OR Tambo Airport to rob at gunpoint. Use only pre-arranged transfers.', location: 'OR Tambo Airport', reportCount: 28, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: [
        '• Dress modestly and conservatively to avoid unwanted attention',
        '• Never wear flashy jewelry, expensive watches, or designer items',
        '• Keep valuables completely hidden - use money belts or hidden pockets',
        '• Avoid carrying purses; use cross-body bags with zippers facing your body',
        '• Dress down to blend in with locals rather than looking obviously like a tourist',
        '• Local women avoid carrying purses and use fake wallets for safety'
      ],
      firstTimers: [
        '• NOT recommended for first-time solo female travelers - requires extensive experience',
        '• Arrange pre-paid airport transfers through your hotel - never use public transport from airport',
        '• Stay only in Sandton, Rosebank, or Melrose Arch areas regardless of cost',
        '• Download Namola emergency app and iFearLess safety app before arrival',
        '• Share live location with trusted contacts using WhatsApp or Life360 throughout your stay',
        '• Return to accommodation before sunset - never go out alone after dark',
        '• Use only Uber or Bolt for all transportation - avoid minibus taxis completely',
        '• Travel with locals when possible, especially for exploring beyond tourist areas',
        '• Consider pepper spray for self-defense (legal in South Africa)',
        '• Keep emergency numbers programmed and easily accessible'
      ],
      apps: ['Namola', 'iFearLess', 'SafeUp', 'Bolt', 'Travel Ladies', 'NomadHer', 'Maps.me', 'Life360', 'WhatsApp'],
      appLinks: [
        { name: 'Namola', link: 'https://www.namola.com/', description: 'South Africa\'s leading emergency response app - 24/7 dispatch with 10-minute response times for police, ambulance, fire' },
        { name: 'iFearLess', link: 'https://ifearless.co.za/', description: 'Safety app designed for women in South Africa - one-tap emergency alerts to trusted contacts and armed response' },
        { name: 'SafeUp', link: 'https://apps.apple.com/app/safeup/id1439742413', description: 'Connect with trained volunteer "guardians" for phone/video support and walking buddies in 39 countries' },
        { name: 'Bolt', link: 'https://bolt.eu/', description: 'Ride-sharing with Women Only service - women passengers connect only with women drivers, includes SOS button' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo Female Travel Safety Index with destination ratings and community reviews from real women travelers' },
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Solo female travel community for connecting with local women, accommodation recommendations, and safety tips' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline navigation essential for South Africa - detailed offline maps with safe route optimization for pedestrians' },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family safety app with real-time location sharing, SOS alerts, and 24/7 emergency dispatch for trusted contacts' },
        { name: 'WhatsApp', link: 'https://www.whatsapp.com/', description: 'Essential in South Africa - live location sharing feature allows real-time tracking by trusted contacts during travel' }
      ]
    },
    culturalExpectations: {
      dressCode: 'Conservative, modest dress essential to avoid unwanted attention. Local women dress down for safety.',
      behaviorNorms: [
        'Be extremely cautious with strangers - criminal targeting is common',
        'Avoid political discussions in public - can escalate quickly',
        'Never accept help from strangers at ATMs - common scam',
        'Keep interactions brief and professional',
        'Trust your instincts - if something feels wrong, leave immediately'
      ],
      perception: 'Solo female travelers are rare and attract significant attention. High risk of being targeted for crime.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-February (Summer)'],
      events: 'Avoid large gatherings, protests, and political events. Stay informed of current events.',
      reasoning: 'Summer provides longest daylight hours (until 7:30 PM) for safer exploration. Winter darkness by 5:45 PM severely limits safe sightseeing time.'
    },
    emergencyInfo: {
      police: '10111', 
      fire: '10177', 
      medical: '10177', 
      general: '112',
      touristPolice: '+27 11 375 5911',
      genderBasedViolence: '0800 428 428'
    },
    currency: {
      name: 'South African Rand', 
      code: 'ZAR', 
      exchangeRate: {
        usd: 0.0564,
        eur: 0.0480,
        gbp: 0.0419
      }, 
      scamWarnings: [
        'Taxi scams - drivers refusing meters or taking longer routes',
        'ATM skimming and fake police officers',
        'Pickpocketing in tourist areas and markets',
        'Express kidnapping for ATM withdrawals',
        'Dating app scams targeting tourists for robbery'
      ]
    },
    scamWarnings: [
      { title: 'Express Kidnapping', description: 'Criminals kidnap victims to force ATM withdrawals. Some incidents include sexual assault.', severity: 'very high' },
      { title: 'Airport Following Scam', description: 'Criminals track tourists from OR Tambo Airport to rob at destination.', severity: 'very high' },
      { title: 'Fake Police Officers', description: 'Criminals impersonate police to rob tourists and demand bribes.', severity: 'high' },
      { title: 'Dating App Scams', description: 'Organized crime groups use dating apps to target and extort victims.', severity: 'high' }
    ],
    languages: ['English', 'Zulu', 'Afrikaans', 'Xhosa', 'Sotho'],
    daytimeSafetyPercent: 29.7,
    nighttimeSafetyPercent: 8.6,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Johannesburg',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' },
      { label: 'Car Theft & Smash-and-Grab', frequency: 'Most common', icon: 'Car' },
      { label: 'Kidnapping & Express Kidnapping', frequency: 'Frequent', icon: 'Users' },
      { label: 'Sexual Assault & Rape', frequency: 'Frequent', icon: 'AlertTriangle' },
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }
    ],
    usefulTips: [
      {
        title: "Is Johannesburg safe for female solo travelers? Only with extreme precautions",
        description: "Stay exclusively in Sandton, Rosebank, or Melrose Arch. Not recommended for first-time solo female travelers. Requires extensive solo travel experience.",
        severity: "very high",
        sourceName: "Solo Female Travel Safety Assessment, 2025",
        sourceUrl: "https://travelladies.app/safety/south-africa/johannesburg"
      },
      {
        title: "Never walk alone - use transport for ALL movement",
        description: "Even short distances require Uber/Bolt. Local women avoid walking anywhere. Book accommodation in Sandton, Rosebank, or Melrose Arch only.",
        severity: "very high",
        sourceName: "Reddit Solo Female Travel Community, 2024",
        sourceUrl: "https://www.reddit.com/r/solotravel/"
      },
      {
        title: "Return to accommodation before sunset every day",
        description: "Crime rates spike dramatically after dark. Plan all activities to end by sunset. Even safe areas become dangerous at night.",
        severity: "very high",
        sourceName: "Johannesburg Safety Statistics, 2025",
        sourceUrl: "https://www.numbeo.com/crime/in/Johannesburg"
      },
      {
        title: "Download Namola and iFearLess emergency apps before arrival",
        description: "Essential safety apps designed for South Africa. Provide 10-minute emergency response times and direct connection to armed response.",
        severity: "high",
        sourceName: "South African Safety Technology, 2025",
        sourceUrl: "https://www.namola.com/"
      },
      {
        title: "Use only Uber/Bolt Women Only service for transportation",
        description: "Connect only with female drivers for maximum safety. Avoid public transport completely - even locals consider it unsafe.",
        severity: "high",
        sourceName: "Safe Transportation for Women, 2024",
        sourceUrl: "https://bolt.eu/"
      }
    ],
    culturalDos: [
      'Stay in safe neighborhoods like Sandton, Rosebank, or Melrose Arch exclusively',
      'Use registered taxis, Uber, or hotel transport with women-only options when available',
      'Keep all valuables hidden and secure - use money belts',
      'Visit townships only with organized tours during daylight hours',
      'Use the Gautrain or Rea Vaya for safer public transport if absolutely necessary',
      'Download emergency apps (Namola, iFearLess) before arrival',
      'Share live location with trusted contacts at all times',
      'Carry pepper spray for self-defense (legal in South Africa)'
    ],
    culturalDonts: [
      "Don't walk alone anywhere, even short distances",
      "Don't use public minibuses or unregistered taxis under any circumstances",
      "Don't display valuables, phones, or wear flashy jewelry ever",
      "Don't accept help from strangers at ATMs or anywhere",
      "Don't go out after dark alone - return to accommodation before sunset",
      "Don't discuss politics or local issues in public",
      "Don't venture outside safe neighborhoods without local guides",
      "Don't trust dating apps or meet strangers from social media"
    ],
    womensConfidenceScore: {
      score: 19.2,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Johannesburg"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing (Daytime)',
        confidence: 40,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Nightlife',
        confidence: 15,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Public Transport',
        confidence: 20,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Dining Alone (Safe Areas)',
        confidence: 45,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Walking Alone',
        confidence: 10,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      }
    ],

    legalResources: {
      embassies: [
        {
          name: 'British Embassy Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-pretoria'
        },
        {
          name: 'Embassy of Germany in South Africa',
          address: '180 Blackwood Street, Arcadia, Pretoria',
          phone: '+27 12 427 8900',
          link: 'https://za.diplo.de/'
        },
        {
          name: 'Embassy of France in South Africa',
          address: '250 Melk Street, Nieuw Muckleneuk, Pretoria',
          phone: '+27 12 425 1600',
          link: 'https://za.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in South Africa',
          address: '169 Pine Street, Arcadia, Pretoria',
          phone: '+27 12 460 0123',
          link: 'https://www.exteriores.gob.es/embajadas/pretoria'
        },
        {
          name: 'Australian Embassy South Africa',
          address: '292 Orient Street, Arcadia, Pretoria',
          phone: '+27 12 423 6000',
          link: 'https://za.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy South Africa',
          address: '1103 Arcadia Street, Hatfield, Pretoria',
          phone: '+27 12 422 3000',
          link: 'https://www.canadainternational.gc.ca/south-africa-afrique-du-sud/'
        },
        {
          name: 'Embassy of the Netherlands in South Africa',
          address: '210 Queen Wilhelmina Avenue, Waterkloof, Pretoria',
          phone: '+27 12 425 4500',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/south-africa'
        },
        {
          name: 'Embassy of Denmark in South Africa',
          address: '8th Floor, Block C, Hatfield Gardens, 333 Grosvenor Street, Hatfield, Pretoria',
          phone: '+27 12 430 9340',
          link: 'https://za.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in South Africa',
          address: '818 George Avenue, Arcadia, Pretoria',
          phone: '+27 12 452 0660',
          link: 'https://www.eda.admin.ch/pretoria'
        },
        {
          name: 'Embassy of India in South Africa',
          address: '852 Schoeman Street, Arcadia, Pretoria',
          phone: '+27 12 342 5392',
          link: 'https://www.indianembassyza.gov.in/'
        },
        {
          name: 'Embassy of Italy in South Africa',
          address: '796 George Avenue, Arcadia, Pretoria',
          phone: '+27 12 423 0000',
          link: 'https://ambasciata.esteri.it/pretoria/'
        }
      ],
      womensRights: [
        'South Africa has progressive women\'s rights laws but enforcement varies',
        'Gender-based violence is a significant concern with high reporting rates',
        'Women have equal legal rights but cultural practices may differ',
        'Contact local embassy for specific legal assistance and support'
      ],
      legalSupport: [
        'Contact embassy immediately for legal assistance and consular support',
        'Legal Aid South Africa provides free legal services: +27 11 877 2000',
        'Women\'s Legal Centre offers specialized support: +27 21 424 5660',
        'International legal aid organizations available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to South African Police Service (SAPS) immediately: 10111',
        'Contact embassy for consular assistance and support',
        'Document all incidents with photos, details, and witness information',
        'Keep copies of all police reports and case numbers',
        'Contact Gender-Based Violence Helpline: 0800 428 428',
        'Seek medical attention if needed and request documentation'
      ]
    },

    sexualHarassmentData: {
      riskLevel: 'very high',
      statistics: [
        '9,252 rape cases recorded between April-June 2023 (latest available data)',
        '53,500 South Africans reported sexual crimes in 2022/2023',
        'Street harassment significant issue including catcalling and aggressive forms',
        'Sexual assault incidents have "sky-rocketed" in recent years according to safety reports',
        '51% of kidnapping incidents in Gauteng Province involve sexual violence component'
      ],
      commonSituations: [
        'Street harassment while walking alone in any area',
        'Unwanted attention and harassment in public transport (minibus taxis)',
        'Targeting of foreign women tourists in tourist areas',
        'Sexual violence during kidnapping and robbery incidents',
        'Harassment in nightlife areas and bars',
        'Aggressive catcalling and following by groups of men',
        'Inappropriate touching in crowded areas and markets'
      ],
      prevention: [
        'Never walk alone anywhere, especially at night - use transport for all movement',
        'Stay in well-lit, populated areas within safe neighborhoods (Sandton, Rosebank, Melrose Arch) only',
        'Use only Uber/Bolt with women-only service when available',
        'Avoid all public transportation including minibus taxis completely',
        'Travel with local guides when exploring beyond tourist areas',
        'Keep emergency apps (Namola, iFearLess) easily accessible with one-touch activation',
        'Share live location with trusted contacts at all times using WhatsApp or Life360',
        'Carry pepper spray for self-defense (legal in South Africa)',
        'Dress conservatively and avoid attention-drawing clothing or jewelry',
        'Trust your instincts - if a situation feels unsafe, leave immediately'
      ],
      supportResources: [
        {
          name: 'Rape Crisis Cape Town Trust',
          contact: '+27 21 447 9762',
          description: 'National 24/7 rape crisis helpline with trained counselors',
          link: 'https://rapecrisis.org.za/'
        },
        {
          name: 'Gender-Based Violence Command Centre',
          contact: '0800 428 428',
          description: 'National 24/7 helpline for gender-based violence support and reporting',
          link: 'https://www.gov.za/about-government/contact-directory/gender-based-violence-command-centre'
        },
        {
          name: 'Childline South Africa',
          contact: '116',
          description: 'Free national helpline for abuse, trauma, and crisis support',
          link: 'https://www.childlinesa.org.za/'
        },
        {
          name: 'People Opposing Women Abuse (POWA)',
          contact: '+27 11 642 4345',
          description: 'Johannesburg-based organization providing women abuse support and counseling',
          link: 'https://www.powa.co.za/'
        },
        {
          name: 'Lifeline South Africa',
          contact: '0861 322 322',
          description: '24/7 crisis counseling and emotional support',
          link: 'https://lifelinesa.co.za/'
        }
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'Milpark Hospital',
          address: '9 Guild Road, Parktown West, Johannesburg',
          phone: '+27 11 480 7111',
          specialties: ['24/7 Emergency', 'Trauma Unit', 'Women\'s Health', 'Sexual Assault Response'],
          distance: '5km from Sandton',
          notes: 'Private hospital with excellent emergency services and women\'s health support'
        },
        {
          name: 'Netcare Sunninghill Hospital',
          address: 'Cnr Witkoppen & Nanyuki Roads, Sunninghill',
          phone: '+27 11 806 1500',
          specialties: ['24/7 Emergency', 'Private Healthcare', 'Trauma Center', 'Women\'s Services'],
          distance: '10km from Sandton',
          notes: 'Modern private facility with comprehensive emergency and trauma services'
        },
        {
          name: 'Life Fourways Hospital',
          address: 'Cnr Fourways Boulevard & Witkoppen Road, Fourways',
          phone: '+27 11 875 1000',
          specialties: ['24/7 Emergency', 'Trauma Unit', 'Women\'s Services', 'Mental Health Support'],
          distance: '15km from Sandton',
          notes: 'Well-equipped private hospital with specialized women\'s health services'
        },
        {
          name: 'Charlotte Maxeke Johannesburg Academic Hospital',
          address: '17 Jubilee Road, Parktown, Johannesburg',
          phone: '+27 11 488 4911',
          specialties: ['24/7 Emergency', 'Public Hospital', 'Trauma Center', 'Sexual Assault Center'],
          distance: '8km from Sandton',
          notes: 'Major public hospital with dedicated sexual assault response unit'
        }
      ],
      pharmacies: [
        {
          name: 'Clicks Pharmacy Sandton City',
          address: 'Sandton City Shopping Centre, Sandton',
          phone: '+27 11 883 9720',
          hours: '24/7',
          services: ['Prescription Medicine', 'Emergency Contraception', 'Female Health Products', 'Travel Health Supplies']
        },
        {
          name: 'Dis-Chem Pharmacy Sandton',
          address: 'Nelson Mandela Square, Sandton',
          phone: '+27 11 217 0600',
          hours: '24/7',
          services: ['Prescription Medicine', 'Health Screening', 'Emergency Medication', 'Travel Clinic']
        },
        {
          name: 'Clicks Pharmacy Rosebank',
          address: 'The Zone @ Rosebank, Bath Avenue, Rosebank',
          phone: '+27 11 447 5180',
          hours: '8:00 AM - 10:00 PM',
          services: ['Prescription Medicine', 'Women\'s Health Products', 'Emergency Supplies', 'Basic Health Screening']
        },
        {
          name: 'Netcare Medicross Melrose Arch',
          address: 'Shop 11, The High Street, Melrose Arch',
          phone: '+27 11 684 0300',
          hours: '7:00 AM - 7:00 PM',
          services: ['General Practice', 'Women\'s Health', 'Emergency Care', 'Travel Medicine']
        }
      ],
      healthRisks: [
        'High altitude (1,753m above sea level) may cause mild altitude sickness',
        'Intense UV exposure due to high altitude - very high SPF sunscreen essential',
        'Air pollution levels can affect respiratory health, especially with existing conditions',
        'Stress and anxiety from security concerns can significantly impact mental health',
        'Risk of injury from violent crime requires access to trauma care'
      ],
      recommendations: [
        'Carry comprehensive travel insurance with medical evacuation coverage (essential)',
        'Bring prescription medications in original packaging with doctor\'s letter',
        'Drink bottled water to avoid stomach issues - tap water generally safe but can cause mild issues',
        'Use very high SPF sunscreen (50+) and UV protection due to high altitude',
        'Consider counseling support if experiencing anxiety about safety before or during travel',
        'Keep emergency contact numbers for hospitals and mental health support readily available',
        'Consider bringing basic first aid supplies and any comfort medications'
      ]
    },

    travelAdvisory: {
      level: 3,
      title: 'Reconsider Travel - High Crime Risk',
      lastUpdated: 'January 2025',
      soloFemaleSpecific: [
        'Exercise extreme caution - not recommended for inexperienced solo female travelers',
        'Johannesburg ranks #86 safest in South Africa for solo female travelers (very low ranking)',
        'Crime statistics show 264% increase in kidnapping prevalence over past decade',
        '51% of South African kidnapping incidents occur in Gauteng Province (Johannesburg area)',
        'Sexual assault cases have significantly increased in recent years with "sky-rocketing" incidents',
        'Solo female travelers should stay exclusively in Sandton, Rosebank, or Melrose Arch areas',
        'Return to accommodation before sunset every day - never venture out alone after dark',
        'Use only pre-arranged transportation or Uber/Bolt - avoid all public transport completely',
        'High risk of being targeted for violent crime, sexual assault, and kidnapping as foreign female',
        'Local women report feeling unsafe and use extensive safety precautions daily'
      ],
      governmentAdvisories: [
        {
          country: 'United States',
          level: 'Level 3: Reconsider Travel',
          details: 'High crime rates, including violent crimes such as armed robbery, assault, murder, and rape. Criminals often target tourists.',
          link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html'
        },
        {
          country: 'United Kingdom',
          level: 'High Crime Risk',
          details: 'Serious crime including mugging, armed robbery, and rape in major urban areas. Particular risks for solo female travelers.',
          link: 'https://www.gov.uk/foreign-travel-advice/south-africa'
        },
        {
          country: 'Canada',
          level: 'Exercise High Degree of Caution',
          details: 'High crime rate and incidents of violent crime including murder, assault, robbery, and sexual assault. Women traveling alone face additional risks.',
          link: 'https://travel.gc.ca/destinations/south-africa'
        },
        {
          country: 'Australia',
          level: 'Reconsider Your Need to Travel',
          details: 'High levels of serious crime, including violent crime such as rape, murder, and armed robbery. Solo female travelers at particular risk.',
          link: 'https://www.smartraveller.gov.au/destinations/africa/south-africa'
        },
        {
          country: 'France',
          level: 'High Vigilance Required',
          details: 'High risk of violent aggression, particularly in townships like Soweto. Women should exercise extreme caution.',
          link: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/afrique-du-sud/'
        }
      ]
    },

    costAndComfort: {
      budgetBreakdown: {
        budget: {
          accommodation: '$15-30/night (hostel dorms with security)',
          food: '$8-15/day (local food, mall food courts)',
          transport: '$10-20/day (Uber/Bolt only for safety - essential)',
          activities: '$10-20/day (museums, walking tours with guides)',
          total: '$43-85/day',
          note: 'Budget travel strongly NOT recommended for solo females due to safety concerns. Minimum mid-range budget advised.'
        },
        midRange: {
          accommodation: '$60-150/night (safe hotels in Sandton/Rosebank with security)',
          food: '$25-45/day (restaurants in safe areas, hotel dining)',
          transport: '$20-35/day (Uber/Bolt, pre-arranged transfers)',
          activities: '$30-60/day (guided tours, attractions with transport)',
          total: '$135-290/day',
          note: 'RECOMMENDED minimum budget for safe solo female travel with proper security measures'
        },
        luxury: {
          accommodation: '$200-600/night (5-star hotels with maximum security)',
          food: '$60-120/day (fine dining, hotel restaurants, room service)',
          transport: '$40-80/day (private transfers, premium services with security)',
          activities: '$100-200/day (private tours, luxury experiences with guides)',
          total: '$400-1000/day',
          note: 'Safest option with maximum security, comfort, and peace of mind for solo female travelers'
        }
      },
      currency: {
        name: 'South African Rand',
        code: 'ZAR',
        exchangeRate: {
          usd: 0.0564,
          eur: 0.0480,
          gbp: 0.0419
        },
        tips: [
          'Cash still widely used - withdraw only from secure ATMs inside malls or hotels',
          'Credit cards accepted at most hotels and restaurants in safe areas like Sandton',
          'Keep multiple payment methods (cash, cards) in separate secure locations',
          'Never display large amounts of cash in public - use money belts or hidden pockets',
          'Tipping customary: 10-15% at restaurants, R10-20 for hotel services',
          'Keep emergency cash separate for safety situations and transport',
          'Use contactless payments when possible to avoid displaying cash or cards'
        ]
      },
      seasonalCosts: {
        peak: {
          season: 'December-February (Summer)',
          costIncrease: '20-35%',
          pros: ['Warm weather ideal for sightseeing', 'Longest daylight hours until 7:30 PM (crucial for safety)', 'Vibrant atmosphere'],
          cons: ['Significantly higher accommodation prices', 'Crowded tourist areas', 'Afternoon thunderstorms common']
        },
        shoulder: {
          season: 'March-May, September-November',
          costIncrease: '10-20%',
          pros: ['Mild pleasant weather', 'Better accommodation prices', 'Less crowded attractions'],
          cons: ['Variable weather conditions', 'Decreasing daylight hours affecting safe exploration time', 'Some seasonal closures']
        },
        low: {
          season: 'June-August (Winter)',
          costIncrease: '0-5%',
          pros: ['Lowest accommodation prices', 'Clear sunny skies during day', 'Dry weather conditions'],
          cons: ['Very short daylight hours (dark by 5:45 PM) - major safety concern', 'Cold mornings and evenings', 'Limited safe exploration time']
        }
      },
      comfortFactors: {
        transportation: 'Private transport essential - budget minimum $20/day for safety',
        accommodation: 'Safe neighborhood accommodation non-negotiable - budget minimum $60/night',
        dining: 'Stick to hotel restaurants and malls in safe areas for comfort and safety',
        activities: 'Guided tours recommended for safety - budget extra for proper guides'
      }
    },

    weatherAndBestTime: {
      climate: 'Subtropical highland (high altitude affects weather patterns)',
      altitude: '1,753 meters (5,751 feet) above sea level',
      seasons: {
        summer: {
          months: 'December-February',
          temperature: '15-26°C (59-79°F)',
          conditions: 'Hot sunny days, afternoon thunderstorms, high humidity, longer daylight hours',
          safetyNote: 'BEST for solo female travelers - extended daylight until 7:30 PM provides maximum safe exploration time'
        },
        autumn: {
          months: 'March-May',
          temperature: '10-23°C (50-73°F)',
          conditions: 'Mild temperatures, clear skies, low humidity, decreasing daylight hours',
          safetyNote: 'Good weather but shorter days require earlier returns to accommodation by 6:30 PM'
        },
        winter: {
          months: 'June-August',
          temperature: '2-19°C (36-66°F)',
          conditions: 'Dry sunny days, very cold mornings/nights, frost possible, shortest daylight',
          safetyNote: 'CHALLENGING for solo females - darkness by 5:45 PM severely limits safe sightseeing hours'
        },
        spring: {
          months: 'September-November',
          temperature: '12-25°C (54-77°F)',
          conditions: 'Pleasant temperatures, occasional spring rains, increasing daylight hours, jacaranda blooms',
          safetyNote: 'Improving daylight hours make this safer than winter, but still limited compared to summer'
        }
      },
      bestTimeForSoloFemales: {
        optimal: 'December-February (Summer)',
        reasoning: 'Longest daylight hours (sunrise 5:30 AM, sunset 7:30 PM) provide maximum safe exploration time for solo female travelers. Despite afternoon thunderstorms, the extended daylight significantly enhances safety for sightseeing and movement between locations.',
        avoid: 'June-August (Winter)',
        avoidReason: 'Darkness falls by 5:45 PM, severely limiting safe sightseeing hours and forcing very early returns to accommodation. Cold weather also makes extended outdoor activities uncomfortable.'
      },
      uvIndex: 'Very high (8-11) due to altitude and latitude - maximum sun protection essential',
      clothingRecommendations: {
        summer: 'Light breathable fabrics, sun hat, high SPF sunscreen, light rain jacket for storms',
        winter: 'Warm layers for cold mornings/nights, light clothing for warm midday, sun protection still essential'
      }
    }
};

export default johannesburg;