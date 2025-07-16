import { Destination } from './types';

const auckland: Destination = {
    city: 'Auckland',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 150,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.0,
        context: 'Auckland is generally safe at night, especially in central and busy areas like the CBD, Ponsonby, and Parnell. Well-lit streets and a visible police presence contribute to a sense of security. However, solo women should avoid isolated parks, industrial areas, and some parts of South Auckland after dark. While violent crime is rare, incidents of harassment and assault can occur, particularly late at night around nightlife zones (e.g., Karangahape Road). Use registered taxis or rideshares for late-night travel, and always stay aware of your surroundings.'
      },
      publicTransit: {
        score: 8.5,
        context: 'Auckland’s public transport (buses, trains, ferries) is safe, clean, and reliable. Security cameras and staff are present at major stations. Night buses run on main routes, but avoid empty carriages late at night. Harassment is uncommon but can happen—move closer to the driver or other passengers if you feel uncomfortable. Use the AT Mobile app for real-time updates and emergency contact options. Report any incidents to Auckland Transport or the police.'
      },
      walkingAlone: {
        score: 8.2,
        context: 'Walking alone in Auckland is very safe during the day in most neighborhoods. At night, stick to well-lit, busy streets and avoid deserted or poorly lit areas. Central Auckland, Ponsonby, and Parnell are safest. Trust your instincts—if an area feels unsafe, leave and seek help. Locals are friendly and helpful, and emergency services respond quickly.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Ponsonby',
          description: 'Trendy, vibrant, and one of Auckland’s safest neighborhoods. Strong community policing, active suburb watch groups, and a lively dining and shopping scene. Incidents of harassment and assault are rare, and the area is well-lit and busy into the evening. Excellent for solo women, but always use caution late at night around bars.'
        },
        {
          name: 'Devonport',
          description: 'Historic, seaside suburb with a strong community feel and very low crime rates. 24/7 police presence and active patrols. Ideal for solo travelers seeking tranquility and safety. Nighttime walks are generally safe, but as always, avoid deserted areas.'
        },
        {
          name: 'Mount Eden',
          description: 'Leafy, residential, and popular with families and young professionals. Crime rates have dropped significantly in recent years. Community safety partnerships and good lighting make it safe for solo women, though caution is advised near parks after dark.'
        },
        {
          name: 'Parnell',
          description: 'Upscale, historic, and well-patrolled. Private security and CCTV in commercial areas. Very low rates of violent crime and harassment. Stick to main streets at night and avoid isolated parks.'
        },
        {
          name: 'Takapuna',
          description: 'Beachside suburb with a strong safety record, active beach patrols, and a visible police presence. Popular with locals and tourists. Nightlife is generally safe, but avoid the beach and dark alleys late at night.'
        },
        {
          name: 'Grey Lynn',
          description: 'Creative, diverse, and increasingly safe. Community initiatives and improved lighting have reduced crime. Solo women report feeling comfortable, but as with all urban areas, stay alert at night.'
        }
      ],
      caution: [
        'Auckland CBD (Central Business District) late at night: While busy and well-patrolled during the day, the CBD can become risky after dark, especially around Queen Street, Karangahape Road (K Road), and Quay Street. Incidents of harassment, assault, and theft are more common here, particularly for solo women. Avoid walking alone late at night, especially near bars, clubs, and construction zones.',
        'South Auckland (Otara, Manurewa, Mangere): Higher rates of violent crime, gang activity, and property crime. While many residents are friendly, these areas are best avoided after dark, especially for solo travelers.',
        'Nightlife districts (K Road, parts of CBD, Fort Street): Increased risk of sexual harassment, assault, and petty crime late at night. Use official taxis or rideshares, and avoid walking alone after midnight.'
      ],
      avoid: [
        'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Auckland.',
        'Emergency housing zones and areas with visible gang activity (some parts of South Auckland and West Auckland).',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'The Quadrant Hotel & Suites Auckland',
        type: 'hotel',
        features: ['Central location', '24/7 security', 'Solo traveler friendly'],
        rating: 4.3,
        notes: 'Excellent safety reputation, central, and popular with solo women travelers.',
        link: 'https://the-quadrant.aucklandtophotels.com/'
      },
      {
        name: 'Airedale Boutique Suites',
        type: 'hotel',
        features: ['CBD location', '24-hour reception', 'High safety ratings'],
        rating: 4.6,
        notes: 'In the heart of Auckland, highly rated for solo women safety.',
        link: 'https://scenic-hotel-auckland.aucklandcityhotels.net/'
      },
      {
        name: 'Haka Lodge Auckland City',
        type: 'hostel',
        features: ['Female-only dorms', 'Central', 'Secure access'],
        rating: 4.5,
        notes: 'Modern, safe, and social hostel with female-only dorms.',
        link: 'https://hakalodges.com/auckland'
      },
      {
        name: 'Attic Backpackers',
        type: 'hostel',
        features: ['Central', 'Secure', 'Clean', 'Female-friendly'],
        rating: 4.4,
        notes: 'Voted Auckland’s most popular hostel, very safe for solo women.',
        link: 'https://www.atticbackpackers.co.nz/'
      },
      {
        name: 'Queen Street Backpackers',
        type: 'hostel',
        features: ['CBD location', 'Secure', 'Friendly staff'],
        rating: 4.2,
        notes: 'Safe, central, and budget-friendly for solo travelers.',
        link: 'https://queen-street-backpackers.aucklandcityhotels.net/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Auckland weather is changeable—layer up, carry a rain jacket, and wear comfortable shoes.
• In city areas, casual attire is fine, but cover up when visiting marae or religious sites.
• For nightlife, dress smart-casual, but avoid flashy jewelry and keep your bag zipped.
• Always carry a charged phone and emergency contacts.`,
      firstTimers: `• Auckland is easy for solo women, but stay alert, especially at night.
• Save emergency numbers (111 for police, fire, ambulance) and local support hotlines.
• Use official taxis or rideshares after dark.
• Avoid walking alone in deserted or poorly lit areas.
• Trust your instincts—if you feel unsafe, seek help in a shop or cafe.`,
      apps: ['NomadHer', 'Tourlina', 'Travel Ladies', 'My Safetipin', 'Maps.me'],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female travel community & safety tips' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Āwhina!',
          localLanguage: 'Māori'
        },
        {
          english: 'Call the police!',
          local: 'Karangatia te pirihimana!',
          localLanguage: 'Māori'
        },
        {
          english: 'I need a doctor.',
          local: 'Kei te hiahia au i tētahi tākuta.',
          localLanguage: 'Māori'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Kei hea te hōhipera tata?',
          localLanguage: 'Māori'
        },
        {
          english: 'I am lost.',
          local: 'Kua ngaro au.',
          localLanguage: 'Māori'
        },
        {
          english: 'Please leave me alone.',
          local: 'Tēnā, waiho māku anake.',
          localLanguage: 'Māori'
        },
        {
          english: 'I feel unsafe.',
          local: 'Kei te rongo au i te kore haumaru.',
          localLanguage: 'Māori'
        },
        {
          english: 'Can you help me?',
          local: 'Ka taea e koe te āwhina i ahau?',
          localLanguage: 'Māori'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Casual and practical in most settings. Cover shoulders and knees when visiting marae or religious sites. Swimwear is only for beaches and pools. For nightlife, smart-casual is expected. Avoid flashy jewelry and keep valuables secure.',
      behaviorNorms: [
        'Be quiet and respectful on public transport.',
        'Respect personal space and avoid loud conversations in public.',
        'Remove shoes when entering homes or marae.',
        'Be punctual for appointments and social events.',
        'Greet with a smile or handshake; a hongi (nose press) is traditional on marae.',
        'Do not photograph people without permission, especially in cultural settings.',
        'Tipping is not expected but appreciated for excellent service.'
      ],
      perception: 'Solo female travelers are common and generally respected in Auckland. Most locals are friendly and helpful, but catcalling and harassment can occur, especially at night in nightlife districts or deserted areas. Sexual harassment, assault, and kidnapping are rare but do happen—always prioritize your safety, avoid risky areas after dark, and use official transport. If you experience harassment or feel unsafe, seek help immediately from police, local businesses, or call a support hotline.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '111',
      fire: '111',
      medical: '111',
      general: '111',
    },
    currency: {
      name: 'New Zealand Dollar',
      code: 'NZD',
      exchangeRate: { usd: 0.62, eur: 0.56, gbp: 0.48 },
      scamWarnings: [
        'New Zealand is highly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs (ANZ, ASB, Westpac, BNZ, TSB). Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
      ]
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: [
      'English',
      'Māori',
      'Samoan',
      'Mandarin',
      'Hindi'
    ],
    daytimeSafetyPercent: 68.8,
    nighttimeSafetyPercent: 38.8,
    redFlags: [
      { label: 'Theft & Property Crime', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025
      { label: 'Violent Assaults', frequency: 'Frequent', icon: 'PocketKnife' }, // Numbeo 2025
      { label: 'Drug-Related Incidents', frequency: 'Frequent', icon: 'Syringe' }, // Numbeo 2025
      { label: 'Gang Activity & Ram Raids', frequency: 'Occasional', icon: 'Users' }, // Numbeo 2025
    ],
    usefulTips: [
      {
        title: 'Stay in Well-Lit, Central Areas',
        description: 'Choose accommodation in central, busy neighborhoods like the CBD or Ponsonby for better access to amenities and safety at night.',
        severity: 'low',
        sourceName: 'Auckland City Council Safety Advice',
        sourceUrl: 'https://www.aucklandcouncil.govt.nz/licences-regulations/safety/Pages/default.aspx'
      },
      {
        title: 'Use Public Transport and Official Taxis',
        description: "Auckland's buses, trains, and ferries are safe and reliable. For late-night travel, use official taxi apps or rideshares.",
        severity: 'low',
        sourceName: 'Auckland Transport',
        sourceUrl: 'https://at.govt.nz/'
      },
      {
        title: 'Be Sun Smart and Weather Ready',
        description: 'The UV index in New Zealand is very high. Wear sunscreen, a hat, and sunglasses, and always check the weather before heading out, as it can change quickly.',
        severity: 'medium',
        sourceName: 'New Zealand Ministry of Health',
        sourceUrl: 'https://www.health.govt.nz/your-health/healthy-living/environmental-health/sun-and-uv-safety'
      },
      {
        title: 'Keep Valuables Secure in Tourist Areas',
        description: "Petty theft and car break-ins can occur, especially at beaches and trailheads. Don't leave valuables in your car and keep your bag zipped in busy places.",
        severity: 'medium',
        sourceName: 'NZ Police Visitor Safety Guide',
        sourceUrl: 'https://www.police.govt.nz/advice/personal-community/keeping-safe/visitors-safety-guide'
      },
      {
        title: 'Respect Local Customs and Emergency Numbers',
        description: 'Kiwis are friendly and helpful. Learn a few local phrases and save emergency numbers (111 for police, fire, ambulance) in your phone.',
        severity: 'low',
        sourceName: 'New Zealand Government',
        sourceUrl: 'https://www.newzealand.com/int/feature/health-and-safety/'
      }
    ],
    culturalDos: [
      'Respect Māori culture.',
      'Dress casual; cover up at marae.',
      'Remove shoes in homes/marae.',
      'Be friendly and on time.',
      'Protect nature.'
    ],
    culturalDonts: [
      "Don't drink alcohol in public.",
      "Don't ignore Māori customs.",
      "Don't leave valuables in cars.",
      "Don't jaywalk; use crosswalks.",
      "Don't skip sunscreen."
    ],
    womensConfidenceScore: {
      score: 49.9,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Auckland"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 80, source: 'Be My Travel Muse 2025', sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-new-zealand/' },
      { label: 'Nightlife', confidence: 60, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Auckland' },
      { label: 'Public Transport', confidence: 85, source: 'Solo Female Traveler Network 2025', sourceUrl: 'https://thesolofemaletravelernetwork.com/best-places-to-travel-in-2025-for-solo-female-travelers/' },
      { label: 'Dining Alone', confidence: 88, source: 'Wayfaring Kiwi 2025', sourceUrl: 'https://www.wayfaringkiwi.com/solo-travel-new-zealand/' }
    ],
    // --- Enhanced safety fields for solo women ---
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: [
        'Nightlife areas (Karangahape Road, CBD clubs) late at night',
        'Public transport during off-peak hours',
        'Deserted streets in South Auckland after dark'
      ],
      reportingRate: 55, // percentage, based on NZ Police and government data
      legalProtection: 'New Zealand law criminalizes sexual harassment, assault, and kidnapping. Police take reports seriously, and there are strong protections for victims. Emergency services are accessible and responsive.',
      supportResources: [
        'Women’s Refuge Crisis Line: 0800 733 843, https://womensrefuge.org.nz/',
        'Victim Support NZ: 0800 842 846, https://www.victimsupport.org.nz/',
        'HELP Auckland (sexual assault support): 09 623 1700, https://www.helpauckland.org.nz/',
        'Shine (domestic abuse support): 0508 744 633, https://www.2shine.org.nz/'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Auckland City Hospital',
          address: '2 Park Rd, Grafton, Auckland',
          phone: '+64 9 367 0000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women’s Health', 'Trauma'],
          link: 'https://www.adhb.health.nz/'
        },
        {
          name: 'North Shore Hospital',
          address: '124 Shakespeare Rd, Takapuna, Auckland',
          phone: '+64 9 486 8900',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.waitematadhb.govt.nz/'
        }
      ],
      pharmacies: [
        {
          name: 'Unichem Auckland City Pharmacy',
          address: '280 Queen St, Auckland',
          phone: '+64 9 373 4593',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.unichem.co.nz/store/auckland-city-pharmacy'
        },
        {
          name: 'Life Pharmacy Queen Street',
          address: '246 Queen St, Auckland',
          phone: '+64 9 373 2468',
          hours: 'Mon-Fri 8:00-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.lifepharmacy.co.nz/store/queen-street'
        }
      ],
      womensHealth: {
        clinics: [
          'Family Planning Auckland: 0800 372 546, https://www.familyplanning.org.nz/',
          'Auckland Sexual Health Service: 0800 739 432, https://www.healthpoint.co.nz/public/sexual-health/auckland-sexual-health-service/'
        ],
        gynecologists: [
          'Dr. Simon McDowell - Auckland Gynaecology Group: +64 9 520 9361',
          'Dr. Sarah Wakeman - Auckland Gynaecology Group: +64 9 520 9361'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B and other options available at Unichem and Life Pharmacy',
          'Emergency contraception available at Family Planning clinics'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Free sanitary products available at some public restrooms',
          'Tampons and pads widely available'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for New Zealand',
        'COVID-19 vaccination recommended',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Low risk of tropical diseases',
        'Seasonal flu during winter',
        'Sunburn and UV exposure risk',
        'Occasional outbreaks of measles or mumps'
      ]
    },
    legalResources: {
      embassy: {
        name: 'US Consulate Auckland',
        address: 'Level 3, 23 Customs St East, Auckland',
        phone: '+64 9 303 2724',
        email: 'AucklandACS@state.gov',
        emergency: '+64 9 303 2724',
        link: 'https://nz.usembassy.gov/embassy-consulates/auckland/'
      },
      embassies: [
        {
          name: 'United States Consulate-General Auckland',
          address: '23 Customs Street East, Auckland Central, Auckland 1010',
          phone: '+64 9 303 4100',
          link: 'https://nz.usembassy.gov/embassy-consulates/auckland/'
        },
        {
          name: 'British Consulate-General Auckland',
          address: 'Level 6, 188 Quay Street, Auckland 1010',
          phone: '+64 9 303 2973',
          link: 'https://www.gov.uk/world/organisations/british-consulate-auckland'
        },
        {
          name: 'Australian Consulate-General Auckland',
          address: 'Level 7, HSBC Tower, 186-194 Quay Street, Auckland 1010',
          phone: '+64 9 921 8800',
          link: 'https://newzealand.embassy.gov.au/wltn/Consular.html'
        },
        {
          name: 'Embassy of Italy Wellington',
          address: '34-38 Grant Road, Thorndon, Wellington 6011',
          phone: '+64 4 473 5339',
          link: 'https://ambwellington.esteri.it/ambasciata_wellington/en/'
        },
        {
          name: 'Consulate General and Promotion Center of Italy Auckland',
          address: '41 Rothesay Bay Road, Rothesay Bay, Auckland 0630',
          phone: '+64 21 232 3396',
          link: 'https://consauckland.esteri.it/consolato_auckland/en/'
        },
        {
          name: 'Embassy of Spain Wellington',
          address: '40 Salamanca Road, Kelburn, Wellington 6012',
          phone: '+64 4 472 5803',
          link: 'https://www.exteriores.gob.es/Embajadas/wellington/en/Pages/inicio.aspx'
        },
        {
          name: 'Embassy of France Wellington',
          address: 'Level 12, 50 Manners Street, Wellington 6011',
          phone: '+64 4 384 2555',
          link: 'https://nz.ambafrance.org/'
        },
        {
          name: 'Embassy of Germany Wellington',
          address: '90–92 Molesworth Street, Thorndon, Wellington 6011',
          phone: '+64 4 473 6063',
          link: 'https://wellington.diplo.de/nz-en'
        },
        {
          name: 'Canadian Consulate Auckland',
          address: 'Level 11, 21 Queen Street, Auckland 1010',
          phone: '+64 9 309 9131',
          link: 'https://www.international.gc.ca/country-pays/new_zealand-nouvelle_zelande/auckland.aspx?lang=eng'
        },
        {
          name: 'Embassy of Canada Wellington',
          address: '125 The Terrace, Wellington 6011',
          phone: '+64 4 473 9577',
          link: 'https://www.international.gc.ca/country-pays/new_zealand-nouvelle_zelande/wellington.aspx?lang=eng'
        }
      ],
      womensRights: [
        'Strong legal protections for women under New Zealand law',
        'Equal pay and employment rights guaranteed',
        'Protection against discrimination based on gender',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and stalking',
        'Women’s Refuge: https://womensrefuge.org.nz/'
      ],
      legalSupport: [
        'Community Law Auckland: 0800 529 482, https://communitylaw.org.nz/our-law-centres/auckland/',
        'Victim Support NZ: 0800 842 846, https://www.victimsupport.org.nz/',
        'Free legal advice available for visitors',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police at 111 (emergency) or visit any police station',
        'File police report in person or online: https://www.police.govt.nz/advice/personal-community/keeping-safe/visitors-safety-guide',
        'Request English-speaking officer if needed',
        'Keep copy of police report for insurance/embassy',
        'Contact embassy for serious crimes or legal assistance'
      ]
    },
  };

export default auckland;
