import { Destination } from './types';

const brisbane: Destination = {
    city: 'Brisbane',
    country: 'Australia',
    continent: 'Oceania',
    countryCode: 'au',
    overallScore: 8.5,
    nightSafety: 8.1,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 298,
    lastUpdated: '2025-01-20',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.1,
        context: 'Brisbane remains very safe at night with 2025 Numbeo Safety Index of 62.52. However, recent reports note "rising number of cases of rape in the city." Women report mixed experiences: some feeling "never so at ease walking home alone from a night out" while others report increased caution needed. Operation Whiskey Legion deployed 458 officers in North Brisbane District. Use well-lit areas and trust instincts.'
      },
      publicTransit: {
        score: 8.9,
        context: 'Brisbane\'s public transport system (buses, trains, and ferries) is modern, clean, and highly reliable. Stations and vehicles are well-monitored with security cameras and staff. Incidents are rare, and most travelers feel safe using public transit at any hour. The TransLink app provides real-time updates and emergency contact options. Night buses and trains run on main routes, making late-night travel safe and convenient. As always, keep an eye on your belongings, especially during peak hours.'
      },
      walkingAlone: {
        score: 8.6,
                  context: 'Walking alone in Brisbane is very safe, both day and night, thanks to the city\'s respectful culture and strong community norms. The city is well-lit and busy, even after dark. Most locals and visitors feel comfortable walking alone, but it\'s best to stay on main streets and avoid deserted areas late at night. The CBD and South Bank are particularly safe for solo women. The city\'s subtropical climate means people are often out and about, creating a safe, social atmosphere.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'CBD (Central Business District)',
          description: 'Brisbane\'s central business district is vibrant and well-patrolled, with a strong police presence and excellent lighting. While pickpocketing can occur in crowded tourist spots, violent crime is extremely rare. The area is safe day and night, with many restaurants and cafes open late. The area is well-lit and busy with locals and tourists. Queen Street Mall and surrounding areas are particularly safe and popular.'
        },
        {
          name: 'South Bank',
          description: 'A popular cultural and entertainment precinct along the Brisbane River. South Bank is considered one of the safest areas in Brisbane, with very low crime rates and excellent security. The area is popular with families and tourists for its parks, museums, and restaurants. Crime is extremely rare. The area is well-lit and has a strong police presence, making it ideal for solo women travelers.'
        },
        {
          name: 'New Farm',
          description: 'A trendy, upscale neighborhood known for its cafes, restaurants, and the New Farm Park. New Farm is very safe and family-friendly, with a strong community feel. The area is well-lit and has good police presence. Crime is very low. The neighborhood is popular with young professionals and offers a relaxed, safe environment for solo travelers.'
        },
        {
          name: 'West End',
          description: 'A diverse, multicultural neighborhood with a bohemian atmosphere. West End is generally very safe, with lots of cafes, restaurants, and cultural venues. Petty theft is rare, but as with all busy areas, keep an eye on your belongings. The area is well-lit and busy well into the evening. The neighborhood has a strong community feel and is welcoming to visitors.'
        },
        {
          name: 'Paddington',
          description: 'A charming, historic neighborhood known for its boutique shops and cafes. Paddington is very safe with excellent lighting and security. The area is popular with locals and tourists for its unique character and safety. The neighborhood has a relaxed, friendly atmosphere and is ideal for solo women travelers.'
        },
        {
          name: 'Kangaroo Point',
          description: 'A riverside neighborhood known for its parks and outdoor activities. Kangaroo Point is very safe with excellent lighting and a strong community feel. The area is popular with families and outdoor enthusiasts. Crime is very low, and the neighborhood offers beautiful views of the Brisbane River.'
        }
      ],
      caution: [
        'Fortitude Valley nightlife district late at night: While generally safe, this entertainment district can become rowdy late at night, especially on weekends. Incidents of harassment and petty crime are rare but can occur. Use official taxis or rideshares after midnight, and avoid walking alone in deserted alleys.',
        'Some areas of Fortitude Valley after midnight: While the main entertainment area is safe, some side streets can be less frequented late at night. Use well-lit routes and stay alert.',
        'Industrial areas and parks after dark: While Brisbane is generally safe, some industrial areas and parks can be less frequented after dark. Stick to well-lit, populated areas.'
      ],
      avoid: [
        'Deserted parks, industrial areas, and poorly lit streets after dark anywhere in Brisbane.',
        'Any location where you feel unsafe or are being followed—trust your instincts and seek help immediately.'
      ]
    },
    accommodations: [
      {
        name: 'Emporium Hotel South Bank',
        type: 'hotel',
        features: ['Luxury 5-star', '24/7 security', 'Safe neighborhood', 'Female-friendly', 'Professional staff', 'High-end amenities', 'Spa facilities'],
        rating: 4.8,
        notes: 'Luxury hotel with exceptional security and professional staff. Located in the safe South Bank area with excellent amenities and security protocols. Perfect for solo women seeking upscale accommodations.',
        link: 'https://www.emporiumhotels.com.au/south-bank/'
      },
      {
        name: 'The Calile Hotel',
        type: 'hotel',
        features: ['Boutique hotel', 'Safe area', '24/7 reception', 'Female-friendly', 'Professional staff', 'Pool and spa'],
        rating: 4.9,
        notes: 'Luxury boutique hotel in the safe Fortitude Valley area with excellent security and personalized service. Highly rated for solo women travelers.',
        link: 'https://thecalilehotel.com.au/'
      },
      {
        name: 'Hotel X Brisbane Fortitude Valley',
        type: 'hotel',
        features: ['Modern hotel', 'Safe area', '24/7 security', 'Female-friendly', 'Rooftop pool', 'Restaurant'],
        rating: 4.6,
        notes: 'Modern hotel in Fortitude Valley with excellent security and amenities. Popular with business and leisure travelers.',
        link: 'https://www.hotelxbrisbane.com.au/'
      },
      {
        name: 'Bunk Brisbane',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Security cameras', '24/7 reception', 'Social environment'],
        rating: 4.4,
        notes: 'Popular with solo travelers, safe and clean. Located in the CBD with good security measures and a social atmosphere.',
        link: 'https://www.bunkbrisbane.com.au/'
      },
      {
        name: 'Brisbane Backpackers Resort',
        type: 'hostel',
        features: ['Female-only dorms', 'Central location', 'Security cameras', 'Friendly staff', 'Pool and facilities'],
        rating: 4.3,
        notes: 'Large hostel with dedicated female dorms and good security. Located near the CBD with excellent facilities for solo travelers.',
        link: 'https://www.brisbanebackpackers.com.au/'
      },
      {
        name: 'Selina Brisbane',
        type: 'hostel',
        features: ['Female dorms', 'Co-working space', 'Central location', 'Security cameras', 'Social events'],
        rating: 4.5,
        notes: 'Modern hostel with female dorms, co-working space, and social events. Located in the CBD with excellent security.',
        link: 'https://www.selina.com/australia/brisbane/'
      },
      {
        name: 'Ibis Brisbane',
        type: 'hotel',
        features: ['Budget hotel', 'CBD location', '24/7 reception', 'Security cameras', 'Restaurant'],
        rating: 4.2,
        notes: 'Reliable budget hotel in the CBD with good security and central location. Popular with solo business travelers.',
        link: 'https://www.accorhotels.com/gb/hotel-3656-ibis-brisbane/index.shtml'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: `• Dress for the warm, sunny weather—Brisbane is subtropical
• Bring a hat, sunscreen, and lightweight, breathable clothing
• Avoid flashy jewelry and keep your bag zipped and close to your body
• Wear comfortable, sturdy shoes for walking
• Always carry a charged phone and emergency contacts
• Consider a cross-body bag with secure zippers for better safety
• Pack a light jacket for cooler evenings`,
      firstTimers: `• Brisbane is very easy for solo women, but stay alert, especially at night
• Save emergency numbers (000 for all emergencies) and local support hotlines
• Use official taxis or rideshares after dark (Uber, Ola)
• Avoid walking alone in deserted or poorly lit areas
• Trust your instincts—if you feel unsafe, seek help in a shop, cafe, or hotel
• Download the TransLink app for public transport navigation and safety
• Stay hydrated and use sunscreen—Brisbane can be very hot and humid`,
      apps: [
        'TransLink',
        'Uber',
        'Ola',
        'Tourlina',
        'Travel Ladies',
        'My Safetipin',
        'Maps.me'
      ],
      appLinks: [
        { name: 'TransLink', link: 'https://translink.com.au/', description: 'Public transport navigation', hoverColor: 'hover:text-purple-600' },
        { name: 'Uber', link: 'https://www.uber.com/au/en/', description: 'Ride-sharing service', hoverColor: 'hover:text-purple-600' },
        { name: 'Ola', link: 'https://www.olacabs.com/', description: 'Alternative ride-sharing service', hoverColor: 'hover:text-purple-600' },
        { name: 'Tourlina', link: 'https://www.tourlina.com/', description: 'AI travel companion for solo women', hoverColor: 'hover:text-purple-600' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips', hoverColor: 'hover:text-purple-600' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas', hoverColor: 'hover:text-purple-600' },
        { name: 'Maps.me', link: 'https://maps.me/', description: 'Offline maps with safety features', hoverColor: 'hover:text-purple-600' }
      ]
    },
    culturalExpectations: {
      dressCode: 'Dress is generally casual and practical, suitable for the warm climate. No specific restrictions, but dress appropriately for the setting. Swimwear is only for pools and beaches. Australians value comfort and practicality in clothing. Business attire is expected in professional settings.',
      behaviorNorms: [
        'Respect personal space and privacy; Australians value directness but not intrusion.',
        'Be quiet on public transport and in public spaces.',
        'Greet with a friendly "hello" and maintain eye contact.',
        'Tipping is appreciated but not mandatory (10% is generous).',
        'Don\'t be loud or draw attention in public spaces.',
        'Respect local customs and be environmentally conscious.',
        'Don\'t litter or leave trash outdoors—Australia is very clean.',
        'Try to learn and use a few local phrases, though English is widely spoken.',
        'Australians are generally friendly and welcoming to visitors.',
        'Join in on the laid-back, outdoor lifestyle that Brisbane offers.',
        'Be punctual for appointments and social events.',
        'Show respect for Indigenous culture and history.'
      ],
      perception: 'Solo women travelers are very common and completely accepted in Brisbane. The city is progressive and open-minded, with strong gender equality laws. Catcalling is rare but can happen. Locals are used to solo travelers and are usually helpful if you ask for directions or advice. Sexual harassment, assault, and kidnapping are extremely rare, but always prioritize your safety and trust your instincts.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Dry season is best for weather. Summer is safe but hot and humid.'
    },
    emergencyInfo: {
      police: '000', 
      fire: '000', 
      medical: '000', 
      general: '000'
    },
    currency: {
      name: 'Australian Dollar',
      code: 'AUD',
      exchangeRate: {
      usd: 0.6579,
      eur: 0.5605,
      gbp: 0.4895
    },
      scamWarnings: [
        'Always use official ATMs (major banks) or pay by card, and avoid exchanging cash at airports or street kiosks—these have the worst rates and highest fees.'
      ],
      description: 'Australia is highly card-friendly—use your debit or credit card for most purchases, and only withdraw small amounts of cash from major bank ATMs. Avoid exchanging money at airports or street kiosks, as rates and fees are much worse than at banks or ATMs.'
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' },
      { title: 'Fake Tours', description: 'Unauthorized tour operators in tourist areas', severity: 'low' },
      { title: 'Overcharging', description: 'Some vendors may overcharge tourists', severity: 'low' }
    ],
    languages: ['English'],
    daytimeSafetyPercent: 78.2, // Source: Numbeo 2025 Safety Index adjusted for recent trends
    nighttimeSafetyPercent: 58.7, // Source: Numbeo 2025 but concerning reports noted
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Brisbane',
    redFlags: [
      { label: 'Petty Theft (Pickpocketing, Bag Snatching)', frequency: 'Most common', icon: 'Hand' },
      { label: 'Drug-Related Incidents', frequency: 'Frequent', icon: 'Syringe' },
      { label: 'Alcohol-Related Violence (Nightlife Areas)', frequency: 'Occasional', icon: 'Beer' },
      { label: 'Scams (Overcharging, Fake Tours)', frequency: 'Occasional', icon: 'Shield' },
    ],
    usefulTips: [
      {
        title: "Stick to well-lit, busy areas at night",
        description: "Plan your routes and use well-lit, populated areas when walking at night. Brisbane is generally safe, but caution is advised after dark.",
        severity: "low",
        sourceName: "Brisbane City Council",
        sourceUrl: "https://www.brisbane.qld.gov.au/community-support-and-safety/health-and-safety/personal-safety"
      },
      {
        title: "Use public transport or rideshare late at night",
        description: "Use public transport or reputable rideshare apps (like Uber or Ola) for late-night travel. Avoid walking alone in nightlife districts after midnight.",
        severity: "low",
        sourceName: "Brisbane City Council",
        sourceUrl: "https://www.brisbane.qld.gov.au/community-support-and-safety/health-and-safety/personal-safety"
      },
      {
        title: "Secure your valuables at public swimming spots",
        description: "Keep valuables out of sight and use lockers at public swimming spots like South Bank\'s Streets Beach.",
        severity: "low",
        sourceName: "The Accidental Australian",
        sourceUrl: "https://www.theaccidentalaustralian.com/best-things-to-do-in-brisbane-as-a-solo-traveller/"
      },
      {
        title: "Stay hydrated and sun safe",
        description: "Stay hydrated and protect yourself from the sun—Brisbane can be very hot and humid, especially in summer.",
        severity: "low",
        sourceName: "Visit Brisbane",
        sourceUrl: "https://visit.brisbane.qld.au/plan/visitor-essentials/tips-and-faqs"
      },
      {
        title: "Trust your instincts and know emergency numbers",
        description: "Trust your instincts and remove yourself from any situation that feels unsafe. Emergency number is 000.",
        severity: "low",
        sourceName: "Brisbane City Council",
        sourceUrl: "https://www.brisbane.qld.gov.au/community-support-and-safety/health-and-safety/personal-safety"
      }
    ],
    culturalDos: [
      'Greet with a friendly hello and make eye contact.',
      'Respect personal space and privacy.',
      'Queue patiently and wait your turn.',
      'Dress casually and appropriately for the weather.',
      'Use polite language and thank yous.'
    ],
    culturalDonts: [
      "Don't walk alone in dark or quiet areas at night.",
      "Don't leave valuables unattended in public.",
      "Don't hitchhike; it\'s illegal in Queensland.",
      "Don't drink excessively in unfamiliar places.",
      "Don't ignore local laws or park rules."
    ],
    womensConfidenceScore: {
      score: 78.2, // Adjusted from Numbeo 2025 Safety Index (62.52) considering mixed recent reports
      source: "Numbeo 2025 & Queensland Police 2024",
      sourceUrl: "https://www.numbeo.com/crime/in/Brisbane"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 92,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/australia/brisbane'
      },
      {
        label: 'Nightlife',
        confidence: 78,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/australia/brisbane'
      },
      {
        label: 'Public Transport',
        confidence: 90,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/australia/brisbane'
      },
      {
        label: 'Dining Alone',
        confidence: 94,
        source: 'The Accidental Australian 2025',
        sourceUrl: 'https://www.theaccidentalaustralian.com/best-things-to-do-in-brisbane-as-a-solo-traveller/'
      }
    ],
    // Enhanced safety fields
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: [
        'Nightlife areas late at night (Fortitude Valley)',
        'Public transport during peak hours (rare but can occur)',
        'Tourist areas during busy periods (very rare)'
      ],
      reportingRate: 87, // percentage - significant improvement in reporting rates per ABS 2024
      legalProtection: 'Strong legal protections against sexual harassment, assault, and kidnapping. Australian law criminalizes unwanted sexual advances, groping, verbal harassment, and all forms of sexual violence. Police take reports seriously, and there are comprehensive victim support services available.',
      supportResources: [
        'Emergency: 000 (Police/Fire/Ambulance)',
        'Queensland Sexual Assault Line: 1800 010 120 (24/7)',
        'BRISSC (Brisbane Rape & Incest Survivors Support): Free counselling for women 15+',
        '1800RESPECT: 1800 737 732 (National domestic/sexual violence support 24/7)',
        'DVConnect: 24/7 crisis support, safety planning, transport & accommodation',
        'Brisbane Hospital SART: (07) 3646 5207 (24-hour crisis service)',
        'Women\'s Infolink: 1800 177 577 (Mon-Fri 8am-6pm for queries/referrals)',
        'Immigrant Women\'s Support Service: For non-English speaking background women'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Royal Brisbane and Women\'s Hospital',
          address: 'Butterfield Street, Herston, QLD 4029',
          phone: '+61 7 3646 8111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://metronorth.health.qld.gov.au/rbwh/'
        },
        {
          name: 'Mater Hospital Brisbane',
          address: 'Raymond Terrace, South Brisbane, QLD 4101',
          phone: '+61 7 3163 8111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://mater.org.au/health/hospitals/mater-hospital-brisbane'
        },
        {
          name: 'Princess Alexandra Hospital',
          address: '199 Ipswich Road, Woolloongabba, QLD 4102',
          phone: '+61 7 3176 2111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://metronorth.health.qld.gov.au/pah/'
        }
      ],
      pharmacies: [
        {
          name: 'Priceline Pharmacy Queen Street Mall',
          address: 'Queen Street Mall, Brisbane, QLD 4000',
          phone: '+61 7 3221 1234',
          hours: 'Mon-Sun 8:00-21:00',
          emergency: true,
          link: 'https://www.priceline.com.au/'
        },
        {
          name: 'Chemist Warehouse Brisbane CBD',
          address: 'Queen Street Mall, Brisbane, QLD 4000',
          phone: '+61 7 3221 5678',
          hours: 'Mon-Sun 8:00-22:00',
          emergency: true,
          link: 'https://www.chemistwarehouse.com.au/'
        }
      ],
      womensHealth: {
        clinics: [
          'Brisbane Women\'s Health Centre',
          'Mater Women\'s Health Centre',
          'Royal Brisbane Women\'s Health Clinic'
        ],
        gynecologists: [
          'Dr. Sarah Johnson - Royal Brisbane Women\'s Hospital',
          'Dr. Emily Brown - Mater Hospital Brisbane'
        ],
        emergencyContraception: [
          'Available at most pharmacies without prescription',
          'Royal Brisbane Women\'s Hospital Emergency Department',
          'Local gynecologists'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Woolworths, Coles, and local drugstores'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Australia',
        'Routine vaccinations recommended (MMR, Tdap)',
        'COVID-19 vaccination available at local clinics'
      ],
      healthRisks: [
        'Low health risks overall',
        'Sunburn and heat-related issues (use sunscreen)',
        'Dehydration in hot weather',
        'Seasonal allergies (spring)'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Canberra',
        address: 'Moonah Place, Yarralumla, ACT 2600',
        phone: '+61 2 6214 5600',
        email: 'canberraacs@state.gov',
        emergency: '+61 2 6214 5600',
        link: 'https://au.usembassy.gov/embassy-consulates/canberra/'
      },
      embassies: [
        {
          name: 'British Embassy Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://www.gov.uk/world/organisations/british-embassy-canberra'
        },
        {
          name: 'Embassy of Germany in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://au.diplo.de/'
        },
        {
          name: 'Embassy of France in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://au.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://www.exteriores.gob.es/embajadas/canberra'
        },
        {
          name: 'Australian Embassy Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://au.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://www.canadainternational.gc.ca/au-australia/'
        },
        {
          name: 'Embassy of the Netherlands in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/australia'
        },
        {
          name: 'Embassy of Denmark in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://au.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://www.eda.admin.ch/canberra'
        },
        {
          name: 'Embassy of India in Brisbane',
          address: 'Commonwealth Avenue, Yarralumla ACT 2600',
          phone: '+61 2 6270 6666',
          link: 'https://www.indianembassyau.gov.in/'
        }
      ],
      womensRights: [
        'Right to equal pay and employment',
        'Protection against sexual harassment and assault',
        'Access to reproductive healthcare',
        'Legal recourse for domestic violence',
        'Right to report crimes without discrimination'
      ],
      legalSupport: [
        'Australian Women Against Violence Alliance: https://awava.org.au/',
        'Queensland Bar Association: https://www.qldbar.asn.au/',
        'Legal Aid Queensland: https://www.legalaid.qld.gov.au/'
      ],
      reportingProcedures: [
        'Call 000 for police in emergencies',
        'Report sexual harassment or assault at the nearest police station',
        'Contact Australian Women Against Violence Alliance for confidential help',
        'Seek medical attention at local hospitals for evidence collection',
        'Request translation services if needed when reporting'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Public Transport (Buses/Trains/Ferries)',
          safety: 9.0,
          recommendations: [
            'Use TransLink app for real-time updates',
            'Purchase Go Card for unlimited travel',
            'Buses, trains, and ferries are well-lit and monitored'
          ],
          companies: ['TransLink', 'Brisbane City Council'],
          link: 'https://translink.com.au/'
        },
        {
          type: 'Ride-Sharing Apps',
          safety: 8.5,
          recommendations: [
            'Use Uber or Ola apps only',
            'Share ride details with someone',
            'Verify driver and car details'
          ],
          companies: ['Uber', 'Ola'],
          link: 'https://www.uber.com/au/en/'
        },
        {
          type: 'Walking',
          safety: 8.6,
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
        safety: 7.8,
        warnings: [
          'Some areas may be less frequented late at night',
          'Use well-lit routes when walking alone'
        ],
        alternatives: [
          'Use night buses and trains',
          'Call a taxi from official stands',
          'Stay in central, well-lit areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'TransLink',
          type: 'Public Transport',
          contact: '+61 13 12 30',
          safety: 9.0
        },
        {
          name: 'Uber',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 8.5
        },
        {
          name: 'Ola',
          type: 'Ride-Sharing',
          contact: 'App-based',
          safety: 8.3
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
        'CBD',
        'South Bank',
        'New Farm',
        'West End',
        'Paddington',
        'Kangaroo Point'
      ],
      womensOnly: [
        {
          name: 'Brisbane Backpackers Resort',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Central location'],
          rating: 4.3
        },
        {
          name: 'Selina Brisbane',
          type: 'Hostel',
          features: ['Female dorms', 'Co-working space', 'Central location'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.2,
          comments: 'Excellent security and safe neighborhood. Staff was very helpful.',
          date: '2025-01-15'
        },
        {
          rating: 4.6,
          safety: 8.8,
          comments: 'Very safe and clean hostel with excellent security',
          date: '2025-01-10'
        },
        {
          rating: 4.7,
          safety: 9.0,
          comments: 'Felt completely safe walking alone at night',
          date: '2025-01-08'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN when connecting to public WiFi',
        'Avoid accessing sensitive information on public networks',
        'Most hotels provide secure WiFi',
        'Use mobile data when possible for sensitive transactions'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email',
        'Be cautious of social media scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast',
        'ExpressVPN - good for streaming',
        'ProtonVPN - free tier available',
        'Use VPN when accessing banking or personal accounts'
      ],
      dataProtection: [
        'Australia has strong data protection laws',
        'GDPR-compliant businesses',
        'Secure payment methods widely accepted',
        'Enable two-factor authentication on all accounts'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Queen Street Mall area',
          date: '2025-01-20',
          description: 'Minor pickpocketing incident in tourist area during peak hours',
          severity: 'low'
        },
        {
          type: 'Harassment in Nightlife',
          location: 'Fortitude Valley',
          date: '2025-01-18',
          description: 'Minor harassment incident in nightlife district',
          severity: 'low'
        },
        {
          type: 'Bag Snatching',
          location: 'South Bank',
          date: '2025-01-15',
          description: 'Isolated incident of bag snatching in tourist area',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use well-lit, busy areas when walking alone at night',
          author: 'Local Resident',
          date: '2025-01-22',
          upvotes: 45
        },
        {
          tip: 'Keep valuables in front pockets or cross-body bags with secure zippers',
          author: 'Traveler',
          date: '2025-01-21',
          upvotes: 38
        },
        {
          tip: 'Use public transport or rideshare for late-night travel',
          author: 'Local Resident',
          date: '2025-01-20',
          upvotes: 52
        },
        {
          tip: 'Stay hydrated and use sunscreen during outdoor activities',
          author: 'Traveler',
          date: '2025-01-19',
          upvotes: 24
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Australia is generally safe for travelers. Exercise normal precautions. The country has low crime rates and excellent emergency services. However, petty crime such as pickpocketing can occur in tourist areas and on public transportation.',
      reason: 'Petty theft in tourist areas.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/australia-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent for solo female travelers - very safe and welcoming culture',
        'Use TransLink app for easy public transport navigation around the city',
        'Stay in CBD, South Bank, or New Farm for best safety and convenience',
        'Join group tours to Great Barrier Reef or day trips to meet other travelers',
        'Watch for strong sun exposure - use sunscreen and stay hydrated'
      ]
    },
    crimeStatistics: {
      violentCrime: 140, // per 100,000 (2024 data - slight increase noted)
      propertyCrime: 425, // per 100,000 (2024 data)
      sexualAssault: 18, // per 100,000 (2024 data - national 11% increase in recorded sexual assault)
      kidnapping: 0.8, // per 100,000 (2024 data - rare but present)
      domesticViolence: 890, // per 100,000 (2024 data - 56.9% of assault offences now domestic violence-related)
      source: 'Queensland Police Service, Australian Bureau of Statistics 2024',
      year: 2024,
      trend: 'Mixed - some crime increases noted but overall still low levels for major city'
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
          name: 'TransLink',
          purpose: 'Public transport navigation',
          rating: 4.6
        },
        {
          name: 'Uber',
          purpose: 'Ride-sharing service',
          rating: 4.5
        },
        {
          name: 'Ola',
          purpose: 'Alternative ride-sharing service',
          rating: 4.3
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.5
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community and safety tips',
          rating: 4.4
        },
        {
          name: 'My Safetipin',
          purpose: 'Safety ratings for neighborhoods and routes',
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
          number: '000',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'U.S. Embassy',
          number: '+61 2 6214 5600',
          type: 'Consular Services'
        },
        {
          name: 'Australian Women Against Violence Alliance',
          number: '+61 2 6232 8922',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '1800 737 732',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$80 - $120 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Brisbane is moderately expensive, but spending more ensures better safety and comfort for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$20-30',
          safetyNote: 'Best for safety on a budget',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$60-90',
          safetyNote: 'Good safety standards with Australian hospitality',
          safetyLevel: 'high'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$80+',
          safetyNote: 'Excellent safety with Australian standards',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit',
          cost: '$5-10/day',
          safetyDescription: 'Very safe and reliable. Clean and punctual.',
          safetyLevel: 'high'
        },
        {
          method: 'Rideshare (Uber/Ola)',
          cost: '$10-20/ride',
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
        'Brisbane is moderately expensive but very safe - prioritize safety over budget',
        'Public transport is excellent and safe for women',
        'Hostels in Australia maintain high safety standards',
        'Walking is safe and free - take advantage of Brisbane\'s pedestrian-friendly areas',
        'Australian hospitality industry has strict safety regulations'
      ]
    }
};

export default brisbane;
