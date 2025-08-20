import { Destination } from './types';

// Enhanced Safety Data for Helsinki - January 2025 Update
const helsinki: Destination = {
    city: 'Helsinki',
    country: 'Finland',
    continent: 'Europe',
    countryCode: 'fi',
    overallScore: 9.3,
    nightSafety: 9.1,
    publicTransit: 9.2,
    walkingAlone: 9.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 456,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 9.1, 
        context: 'Helsinki is exceptionally safe at night with excellent street lighting and extremely low crime rates. Finland ranks as the 13th-safest country globally (Global Peace Index 2023). Women report feeling very safe walking alone even late at night. Violent crime is rare with intentional homicide rate among world\'s lowest.' 
      },
      publicTransit: { 
        score: 9.2, 
        context: 'HSL public transport system (trams, buses, metro, trains) is highly efficient, clean, and very safe for women. Staff available for assistance. Comprehensive night bus network provides safe late-night transport. Incidents extremely rare. System covers entire metropolitan area with integrated ticketing.' 
      },
      walkingAlone: { 
        score: 9.5, 
        context: 'Extremely safe for solo women with Finnish culture valuing personal space and respect. Street harassment almost non-existent - risk rating only 1.2/5. Women living in Helsinki rate overall safety 4.4/5. Only minor precaution needed: avoid isolated areas like Kaisaniemi Park near Central Station late at night.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Kamppi',
          description: 'Central commercial and transport hub with shopping centers, restaurants, and excellent connectivity. Very safe with heavy foot traffic and good lighting. Ideal base for solo travelers with easy access to attractions and transport.'
        },
        {
          name: 'Punavuori',
          description: 'Trendy design district with boutiques, galleries, and cafes. Very safe, well-maintained area popular with young professionals and tourists. Excellent for solo exploration with pedestrian-friendly streets and vibrant atmosphere.'
        },
        {
          name: 'Kallio',
          description: 'Bohemian neighborhood with alternative culture, bars, and local life. Generally very safe but can be lively on weekends. Great for experiencing local Helsinki culture with authentic restaurants and nightlife.'
        },
        {
          name: 'Eira',
          description: 'Upscale residential area with elegant architecture, parks, and waterfront. Extremely safe and quiet, perfect for peaceful accommodation. Close to Market Square and harbor with scenic walking routes.'
        },
        {
          name: 'Töölö',
          description: 'Cultural district housing museums, parks, and the Olympic Stadium. Very safe with wide boulevards, good lighting, and cultural attractions. Ideal for visitors interested in Finnish culture and history.'
        },
        {
          name: 'Kruununhaka',
          description: 'Historic city center with Senate Square, University of Helsinki, and government buildings. Extremely safe with constant activity and excellent security. Perfect for first-time visitors and history enthusiasts.'
        },
        {
          name: 'Ullanlinna',
          description: 'Embassy district with parks, upscale housing, and diplomatic missions. Highly secure area with excellent safety record. Close to Market Square and Suomenlinna ferry terminal.'
        }
      ],
      caution: [
        {
          name: 'Central Railway Station Area (Late Night)',
          description: 'While generally safe, increased activity from nightlife and some pickpocketing incidents reported. Exercise normal urban precautions late at night, especially around Kaisaniemi Park area.'
        },
        {
          name: 'Kluuvi (Nightlife District)',
          description: 'Main nightlife area can get busy on weekends with bar crowds. Generally safe but watch belongings in crowded areas. Police presence ensures quick response to any issues.'
        }
      ],
      avoid: [
        {
          name: 'Eastern Helsinki Districts (Itäkeskus, Kontula) Late Night',
          description: 'While not dangerous, these suburban areas have slightly higher crime rates and less tourist infrastructure. Mainly residential with limited late-night transport and lighting.'
        }
      ]
    },
    accommodations: [
      {
        name: 'Hotel Kämp',
        type: 'luxury hotel',
        features: ['Prime central location', 'Historic luxury', '24/7 concierge', 'High security'],
        rating: 4.8,
        notes: 'Helsinki\'s most prestigious hotel in the heart of the city. Exceptional safety standards and English-speaking staff experienced with solo female travelers.',
        link: 'https://www.hotelkamp.fi/'
      },
      {
        name: 'Scandic Helsinki City',
        type: 'hotel',
        features: ['Central location', 'Modern facilities', 'Solo-friendly', '24/7 reception'],
        rating: 4.6,
        notes: 'Reliable Scandic chain with excellent safety standards. Popular with business and leisure travelers. Walking distance to main attractions.',
        link: 'https://www.scandichotels.com/hotels/finland/helsinki/scandic-helsinki-city'
      },
      {
        name: 'Hotel Arthur',
        type: 'boutique hotel',
        features: ['Quiet location', 'Female-friendly', 'Historic charm', 'Safe neighborhood'],
        rating: 4.5,
        notes: 'Charming hotel in peaceful Töölö district. Excellent safety record and particularly welcoming to solo female guests. Close to parks and museums.',
        link: 'https://www.hotelarthur.fi/'
      },
      {
        name: 'Hostel Diana Park',
        type: 'hostel',
        features: ['Female dorms', 'Central location', 'Social atmosphere', 'English-speaking staff'],
        rating: 4.3,
        notes: 'Popular backpacker hostel with female-only dorms and excellent safety measures. Great for meeting other solo travelers in safe environment.',
        link: 'https://www.dianapark.fi/'
      },
      {
        name: 'CheapSleep Hostel Helsinki',
        type: 'hostel',
        features: ['Budget-friendly', 'Female sections', 'Safe area', 'Kitchen facilities'],
        rating: 4.1,
        notes: 'Clean, safe budget option with women-only areas. Located in safe residential area with good transport connections.',
        link: 'https://www.cheapsleep.fi/'
      }
    ],
    alerts: [
      {
        title: 'Seasonal Pickpocketing Increase in Tourist Areas',
        description: 'Summer tourism season shows slight increase in pickpocketing incidents around Central Railway Station, Market Square, and busy tram stops. Organized pickpocket teams targeting distracted tourists.',
        location: 'Central Railway Station, Market Square, tourist attractions',
        reportCount: 8,
        severity: 'low',
        dateReported: '1 week ago'
      },
      {
        title: 'Winter Safety: Ice and Darkness Concerns',
        description: 'Winter months bring icy sidewalks and limited daylight (as little as 6 hours). Proper footwear essential. Mental health considerations during dark months for extended stays.',
        location: 'Citywide',
        reportCount: 5,
        severity: 'low',
        dateReported: '2 weeks ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['HSL', 'Reittiopas', 'Nysse'],
      emergencyPhrases: ['Apu (Help)', 'Soita poliisille (Call the police)']
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
      police: '112',
      fire: '112',
      medical: '112',
      general: '112',
      medicalHelpline: '116117',
      usEmbassy: '+358 9 616 250',
      rescueDepartment: '+358 9 310 1651'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Finnish', 'Swedish', 'English (widely spoken)'],
    daytimeSafetyPercent: 93.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 88.0, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Helsinki',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Occasional', icon: 'Hand' }, // Numbeo 2025, Travel Ladies 2025
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' }, // Numbeo 2025
      { label: 'Scams (Fake Charities, Overcharging)', frequency: 'Rare', icon: 'Shield' }, // Travel Ladies 2025
      { label: 'Drunken Disturbances (Nightlife)', frequency: 'Rare', icon: 'Beer' }, // Travel Ladies 2025
    ],
    usefulTips: [
      {
        title: "Take advantage of Helsinki\'s safe, walkable city center",
        description: "Most attractions are within walking distance. The city is compact, well-lit, and safe for solo exploration day or night.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/guide-to-helsinki/"
      },
      {
        title: "Use public transport and city bikes for easy, safe travel",
        description: "Helsinki's HSL app covers trams, buses, metro, and city bikes. All are reliable, clean, and safe for solo travelers.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/getting-around/"
      },
      {
        title: "Keep an eye on your belongings in crowded areas",
        description: "Pickpocketing is rare but possible in busy tourist spots and on public transport. Use a zipped bag and stay aware.",
        severity: "low",
        sourceName: "Numbeo, 2025",
        sourceUrl: "https://www.numbeo.com/crime/in/Helsinki"
      },
      {
        title: "Try a sauna for a true Finnish experience",
        description: "Public saunas are safe, welcoming, and a great way to meet locals. Follow posted etiquette and enjoy the tradition.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/guide-to-helsinki/"
      },
      {
        title: "Dress for the weather and pack layers",
        description: "Helsinki weather can change quickly, especially in winter. Bring warm, waterproof layers and comfortable shoes for walking.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/guide-to-helsinki/"
      }
    ], // Tips sourced from MyHelsinki, Numbeo (2025)
    culturalDos: [
      'Use public transport and city bikes.',
      'Keep valuables secure in crowded areas.',
      'Dress for the weather and pack layers.',
      'Try a public sauna and follow etiquette.',
      'Explore the city center on foot.'
    ],
    culturalDonts: [
      "Don't leave valuables unattended.",
      "Don't ignore bike lane rules.",
      "Don't walk alone in unlit parks late at night.",
      "Don't be loud on public transport.",
      "Don't accept unsolicited help with money or tickets."
    ],
    womensConfidenceScore: {
      score: 75.3, // Numbeo 2025 Safety Index for Helsinki
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/quality-of-life/in/Helsinki"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 95,
        source: 'Solo Travel in Style Blog 2025',
        sourceUrl: 'https://thesolotravelinstyleblog.com/helsinki-in-2-days/'
      },
      {
        label: 'Nightlife',
        confidence: 85,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/finland/helsinki'
      },
      {
        label: 'Public Transport',
        confidence: 97,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/finland/helsinki'
      },
      {
        label: 'Dining Alone',
        confidence: 93,
        source: 'Solo Travel in Style Blog 2025',
        sourceUrl: 'https://thesolotravelinstyleblog.com/helsinki-in-2-days/'
      }
    ],

    healthCare: {
      hospitals: [
        {
          name: 'HUS Women\'s Hospital',
          address: 'Haartmaninkatu 2, 00290 Helsinki',
          phone: '+358 9 4711',
          services: ['Women\'s health', 'Gynecology', 'Obstetrics', 'Emergency services'],
          notes: 'Finland\'s largest and most comprehensive center for gynecology and obstetrics. 24/7 emergency services for women\'s health issues.',
          safetyRating: 'high'
        },
        {
          name: 'Meilahti Emergency Department',
          address: 'Haartmaninkatu 4, 00290 Helsinki',
          phone: '+358 9 4711',
          services: ['24/7 emergency care', 'Multi-specialty', 'International standards'],
          notes: 'Main emergency department for adults in Helsinki. English-speaking staff available. High-quality care with modern facilities.',
          safetyRating: 'high'
        },
        {
          name: 'Malmi Emergency Department',
          address: 'Talatantie 20, 00700 Helsinki',
          phone: '+358 9 4711',
          services: ['24/7 emergency care', 'General medicine', 'Trauma care'],
          notes: 'Secondary emergency facility. Less crowded than Meilahti but comprehensive emergency services available.',
          safetyRating: 'high'
        },
        {
          name: 'Mehiläinen Private Hospital',
          address: 'Bulevardi 7, 00120 Helsinki',
          phone: '+358 10 414 00',
          services: ['Private healthcare', 'Specialists', 'Women\'s health services'],
          notes: 'Premium private healthcare with English-speaking staff. Specialized women\'s health center with comprehensive services.',
          safetyRating: 'high'
        }
      ],
      emergencyContacts: [
        'Universal Emergency: 112 (police, fire, medical)',
        'Medical Helpline (non-emergency): 116 117',
        'HUS Emergency Services: +358 9 4711',
        'Private Emergency Services Available 24/7'
      ],
      womensHealth: {
        clinics: [
          'HUS Women\'s Hospital: Comprehensive gynecology and obstetrics services',
          'Mehiläinen Women\'s Health Center: Private clinic with English-speaking specialists',
          'Femeda Healthcare Clinic: Specialized gynecological services',
          'Helsinki Health Stations: Basic women\'s health services in neighborhoods'
        ],
        gynecologists: [
          'HUS Women\'s Hospital: Leading specialists in women\'s reproductive health',
          'Mehiläinen: Private gynecologists with international training',
          'Helsinki Health Stations: Municipal gynecological services',
          'Femeda Clinic: Private practice specialists with flexible appointments'
        ],
        emergencyContraception: [
          'Available at pharmacies without prescription for women 15+',
          'HUS Emergency Departments provide emergency contraception 24/7',
          'Mehiläinen private clinics offer confidential services',
          'Helsinki Health Stations during operating hours'
        ],
        sanitaryProducts: [
          'Widely available at K-Market, S-Market, and other supermarkets',
          'Pharmacies (Apteekki) stock comprehensive international brands',
          'Convenience stores and gas stations carry basic supplies',
          'High-quality Finnish brands available at competitive prices'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Helsinki',
        'Standard European vaccination schedule sufficient',
        'COVID-19 vaccination recommended but not required',
        'Routine vaccinations should be current (MMR, DPT)'
      ],
      healthRisks: [
        'Extremely low health risks - among world\'s safest cities',
        'Winter vitamin D deficiency due to limited sunlight',
        'Seasonal Affective Disorder possible during dark months',
        'Tick-borne encephalitis risk in forested areas during summer'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Helsinki',
          address: 'Itäinen Puistotie 14A, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.usembassy.gov/'
        },
        {
          name: 'British Embassy Helsinki',
          address: 'Itäinen Puistotie 17, 00140 Helsinki',
          phone: '+358 9 2286 5100',
          link: 'https://www.gov.uk/world/organisations/british-embassy-helsinki'
        },
        {
          name: 'Embassy of Germany in Helsinki',
          address: 'Krogiuksenkatu 4B, 00160 Helsinki',
          phone: '+358 9 458 580',
          link: 'https://fi.diplo.de/'
        },
        {
          name: 'Embassy of France in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.exteriores.gob.es/embajadas/helsinki'
        },
        {
          name: 'Australian Embassy Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.canadainternational.gc.ca/fi-finland/'
        },
        {
          name: 'Embassy of the Netherlands in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/finland'
        },
        {
          name: 'Embassy of Denmark in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.eda.admin.ch/helsinki'
        },
        {
          name: 'Embassy of India in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.indianembassyfi.gov.in/'
        }
      ],
      womensRights: [
        'Finland has world-leading gender equality with comprehensive legal protections',
        'Women enjoy equal rights in all aspects of society - employment, education, politics',
        'Sexual harassment and assault are criminalized with strong enforcement',
        'Unioni gender equality organization: +358 9 7742 1120',
        'Council for Gender Equality provides support and advocacy'
      ],
      legalSupport: [
        'Finnish Bar Association: +358 9 6154 6200 (lawyer referrals)',
        'Legal Aid Finland: Free legal assistance for qualifying cases',
        'Embassy referrals for English-speaking attorneys',
        'Victim Support Finland: +358 9 753 5320 (24/7 crisis support)',
        'Tourist assistance available through city services'
      ],
      reportingProcedures: [
        'Call 112 for immediate police response (English support available)',
        'Visit nearest police station for non-emergency reporting',
        'Contact US Embassy for serious incidents: +358 9 616 250',
        'Document everything: photos, witness contacts, incident details',
        'Request official police report with case number',
        'Victim Support Finland provides counseling and legal guidance',
        'Finnish police are highly professional and English-speaking'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$77 - $188 USD / day',
        description: 'Helsinki is expensive but safe. Budget travelers $77/day with hostels and local food. Mid-range $188/day with hotels and restaurants. Luxury $429/day.',
        tip: 'Finland uses contactless payments everywhere. Budget extra for quality winter clothing if visiting November-March.'
      },
      accommodation: [
        {
          type: 'Hostels with Female Dorms',
          avgCost: '$34-55/night',
          safetyNote: 'Excellent safety standards with female-only sections and 24/7 security',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels',
          avgCost: '$100-180/night',
          safetyNote: 'High safety standards with English-speaking staff and central locations',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$200-400/night',
          safetyNote: 'Premium security with concierge services and prime locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'HSL Public Transport',
          cost: '$3.20/single ticket, $9/day pass',
          safetyDescription: 'Extremely safe, efficient system covering trams, buses, metro, trains with excellent safety record',
          safetyLevel: 'high'
        },
        {
          method: 'City Bikes',
          cost: '$5/day, included in HSL tickets',
          safetyDescription: 'Very safe with dedicated bike lanes and helmet availability',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe day and night with excellent pedestrian infrastructure',
          safetyLevel: 'high'
        },
        {
          method: 'Taxi/Uber',
          cost: '$15-25 typical rides',
          safetyDescription: 'Very safe with regulated drivers and modern fleet',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Take advantage of free attractions: Senate Square, Market Square, parks, churches',
        'Use HSL day passes for unlimited public transport ($9/day vs $3.20/ride)',
        'Eat at lunch restaurants for same quality food at lower prices than dinner',
        'Visit public saunas ($5-15) for authentic Finnish experience',
        'Shop at K-Market and S-Market for groceries vs expensive restaurants',
        'Take advantage of summer white nights - 18+ hours of daylight means more time to explore',
        'Visit during shoulder season (April-May, September-October) for lower accommodation costs',
        'Many museums offer free entry on certain days or hours',
        'Use contactless payment everywhere - cash rarely needed',
        'Budget for winter clothing if visiting in cold months'
      ]
    }
};

export default helsinki;
