import { Destination } from './types';

const paris: Destination = {
    city: 'Paris',
    country: 'France',
    continent: 'Europe',
    countryCode: 'fr',
    overallScore: 7.9,
    nightSafety: 7.5,
    publicTransit: 8.3,
    walkingAlone: 7.8,
    tags: ['insider-tips', 'safe'],
    bgColor: 'bg-blue-25',
    reviewCount: 892,
    lastUpdated: '1 day ago',
    harassmentRisk: 'moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 7.5,
        context: 'Paris is generally safe at night in central arrondissements, but requires caution in some areas. The 1st-8th arrondissements are well-lit and patrolled. Areas around major tourist sites like the Champs-Élysées and Saint-Germain are safe. However, some neighborhoods like parts of the 18th, 19th, and 20th arrondissements require extra vigilance, especially near metro stations late at night.'
      },
      publicTransit: {
        score: 8.3,
        context: 'Paris Metro, buses, and RER are generally safe and efficient. The system is well-monitored with security cameras and regular police presence. However, pickpocketing can occur during rush hours and late at night. Some metro lines and stations in outer arrondissements may feel less safe after 10 PM. Women report feeling comfortable during daytime travel.'
      },
      walkingAlone: {
        score: 7.8,
        context: 'Walking alone in central Paris is generally safe during the day and early evening. Tourist areas are well-patrolled and busy. However, solo women should exercise caution in certain neighborhoods, especially at night. Street harassment can occur, though it\'s not extremely common. Stay alert and confident when walking alone.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: '1st Arrondissement (Louvre)',
          description: 'Heart of tourist Paris with the Louvre Museum and Tuileries Garden. Excellent police presence and lighting. Very safe day and night due to constant foot traffic and security.'
        },
        {
          name: '4th Arrondissement (Marais)',
          description: 'Historic Jewish quarter with trendy boutiques, cafes, and restaurants. Very safe and well-patrolled area with active street life. Popular with locals and tourists alike.'
        },
        {
          name: '6th Arrondissement (Saint-Germain)',
          description: 'Upscale Left Bank area with cafes, galleries, and Luxembourg Gardens. Very safe with sophisticated atmosphere and good police presence.'
        },
        {
          name: '7th Arrondissement (Eiffel Tower)',
          description: 'Home to major monuments including Eiffel Tower and Invalides. Tourist-heavy area with excellent security and constant surveillance.'
        },
        {
          name: '8th Arrondissement (Champs-Élysées)',
          description: 'Famous shopping avenue with luxury stores and cafes. Well-patrolled and safe, though can get crowded. Watch for pickpockets in tourist areas.'
        },
        {
          name: '5th Arrondissement (Latin Quarter)',
          description: 'University area with the Panthéon and Sorbonne. Generally safe with young, vibrant atmosphere. Well-lit streets and regular foot traffic.'
        }
      ],
      caution: [
        'Gare du Nord area at night - higher crime rates around train station',
        'Parts of 18th Arrondissement (Montmartre borders) - avoid isolated areas',
        'Châtelet-Les Halles metro hub late at night',
        'Some areas of 19th and 20th arrondissements after dark',
        'Tourist-heavy areas for pickpocketing (Champs-Élysées, Trocadéro)'
      ],
      avoid: [
        'Saint-Denis area at night - higher crime rates',
        'Some suburbs (banlieues) late at night',
        'Isolated areas of Bois de Boulogne and Bois de Vincennes after dark',
        'Areas around Gare de l\'Est late at night'
      ]
    },
    accommodations: [
      {
        name: 'Hotel des Grands Boulevards',
        type: 'hotel',
        features: ['Boutique hotel', 'Central location', '24/7 security', 'Female-friendly'],
        rating: 8.9,
        notes: 'Stylish hotel in safe 2nd arrondissement with excellent security and concierge services.',
        link: 'https://www.hoteldesgrandsboulevards.com/'
      },
      {
        name: 'MIJE Hostels',
        type: 'hostel',
        features: ['Female dorms', 'Historic locations', 'Central Paris', 'Security'],
        rating: 8.2,
        notes: 'Network of hostels in historic buildings in Marais with female-only rooms and good security.',
        link: 'https://www.mije.com/'
      },
      {
        name: 'Hotel Malte Opera',
        type: 'hotel',
        features: ['Central location', '24/7 reception', 'Safe neighborhood', 'Budget-friendly'],
        rating: 8.4,
        notes: 'Comfortable hotel near Opera in safe area with good transport connections.',
        link: 'https://www.hotel-malte-opera.com/'
      },
      {
        name: '3 Ducks Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Eiffel Tower area', 'Social atmosphere'],
        rating: 8.0,
        notes: 'Popular hostel with female-only accommodations near safe 15th arrondissement.',
        link: 'https://www.3ducks.fr/'
      }
    ],
    alerts: [
      {
        title: 'Transportation Strikes',
        description: 'Periodic metro and bus strikes can affect public transport. Check RATP website for updates.',
        location: 'Citywide',
        reportCount: 8,
        severity: 'low',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress elegantly but not flashy - Parisians appreciate style
• Comfortable walking shoes essential for cobblestones
• Avoid obvious tourist clothing and accessories
• Modest dress for churches and religious sites
• Light layers for variable weather`,
      firstTimers: `• Paris is generally safe but requires city awareness
• Learn basic French phrases - locals appreciate effort
• Keep valuables secure, especially in tourist areas and metro
• Use official taxis or Uber for late-night transport
• Stay in central arrondissements (1st-8th) for best safety`,
      apps: [
        'Citymapper',
        'Uber',
        'RATP',
        'Travel Ladies',
        'My Safetipin'
      ],
      appLinks: [
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best app for Paris public transport navigation' },
        { name: 'Uber', link: 'https://www.uber.com/fr/en/', description: 'Safe ride-sharing throughout Paris' },
        { name: 'RATP', link: 'https://www.ratp.fr/en', description: 'Official Paris public transport app' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female travel community & safety tips' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety ratings for areas' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Au secours!',
          localLanguage: 'French'
        },
        {
          english: 'Call the police!',
          local: 'Appelez la police!',
          localLanguage: 'French'
        },
        {
          english: 'I need a doctor.',
          local: 'J\'ai besoin d\'un médecin.',
          localLanguage: 'French'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Où est l\'hôpital le plus proche?',
          localLanguage: 'French'
        },
        {
          english: 'I am lost.',
          local: 'Je suis perdue.',
          localLanguage: 'French'
        },
        {
          english: 'Please leave me alone.',
          local: 'Laissez-moi tranquille, s\'il vous plaît.',
          localLanguage: 'French'
        },
        {
          english: 'I feel unsafe.',
          local: 'Je ne me sens pas en sécurité.',
          localLanguage: 'French'
        },
        {
          english: 'Can you help me?',
          local: 'Pouvez-vous m\'aider?',
          localLanguage: 'French'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Parisians dress elegantly and stylishly. Business casual to smart casual is appropriate. Avoid overly casual clothing like flip-flops, shorts, or athletic wear in restaurants and cultural sites. Quality over quantity is valued.',
      behaviorNorms: [
        'Greet with "Bonjour" when entering shops and "Au revoir" when leaving.',
        'Learn basic French phrases - locals appreciate the effort.',
        'Be polite and formal initially - use "vous" rather than "tu".',
        'Keep voices down in public transport and restaurants.',
        'Tip 10% in restaurants if service isn\'t included.',
        'Respect museum and monument rules and etiquette.',
        'Don\'t eat or drink on public transport.',
        'Queue politely and respect personal space.',
        'Dress appropriately for churches and religious sites.',
        'Show appreciation for French culture and cuisine.'
      ],
      perception: 'Solo women travelers are common in Paris and generally well-received. The city is cosmopolitan and women can dine alone, visit attractions, and use transport independently. However, street harassment can occur, and cultural differences in interaction styles may be misinterpreted.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but generally safe.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: [
        'Use official ATMs and avoid currency exchange at tourist spots for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Gold Ring Scam',
        description: 'Someone "finds" a gold ring and asks if it\'s yours, then requests money. Ignore and walk away.',
        severity: 'medium'
      },
      {
        title: 'Petition Scam',
        description: 'People with clipboards asking for signatures while accomplices pickpocket. Politely decline.',
        severity: 'medium'
      },
      {
        title: 'ATM Skimming',
        description: 'Use ATMs inside banks when possible. Cover your PIN and check for suspicious devices.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Overcharging',
        description: 'Check menus for prices and ensure service charges are legitimate.',
        severity: 'low'
      }
    ],
    languages: ['French', 'English (moderate level in tourist areas)'],
    daytimeSafetyPercent: 78.6,
    nighttimeSafetyPercent: 65.4,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Paris',
    redFlags: [
      { label: 'Pickpocketing in Tourist Areas', frequency: 'Common', icon: 'Hand' },
      { label: 'Metro Harassment Reports', frequency: 'Occasional', icon: 'Users' },
      { label: 'Street Scams', frequency: 'Common', icon: 'AlertTriangle' },
      { label: 'Neighborhood Safety Variation', frequency: 'Ongoing', icon: 'MapPin' }
    ],
    culturalDos: [
      'Learn basic French greetings.',
      'Dress stylishly and appropriately.',
      'Be polite and formal initially.',
      'Respect French dining etiquette.',
      'Appreciate art and culture.'
    ],
    culturalDonts: [
      'Don\'t speak loudly in public.',
      'Don\'t wear overly casual clothes to restaurants.',
      'Don\'t expect fast service.',
      'Don\'t ignore pickpocket risks in tourist areas.',
      'Don\'t assume everyone speaks English.'
    ],
    womensConfidenceScore: {
      score: 71.8,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Paris"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'France Tourism Safety Report 2025', sourceUrl: 'https://www.france.fr/safety' },
      { label: 'Nightlife', confidence: 72, source: 'Solo Female Travel France 2025', sourceUrl: 'https://www.solofemaleguide.com/france' },
      { label: 'Public Transport', confidence: 76, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Paris' },
      { label: 'Dining Alone', confidence: 88, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/paris/' }
    ],
    sexualHarassmentData: {
      prevalence: 'moderate',
      commonLocations: ['Public transport during rush hour', 'Tourist areas', 'Nightlife districts', 'Street harassment in various areas'],
      reportingRate: 64,
      legalProtection: 'Strong legal framework under French and EU law. Street harassment is illegal and police take reports seriously.',
      supportResources: [
        'SOS Femmes: 3919 (free, anonymous, 24/7)',
        'Tourist Police: 0800 40 17 17',
        'En Avant Toutes: Chat support at entetouche.fr'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hôpital Saint-Louis',
          address: '1 Avenue Claude Vellefaux, 75010 Paris',
          phone: '+33 1 42 49 49 49',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.aphp.fr/'
        }
      ],
      pharmacies: [
        {
          name: 'Pharmacie des Champs-Élysées',
          address: '84 Avenue des Champs-Élysées, 75008 Paris',
          phone: '+33 1 45 62 02 41',
          hours: 'Mon-Sat 8:30-20:00',
          emergency: false,
          link: 'https://www.pharmacie-champs-elysees.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Planning Familial: 01 48 07 29 10',
          'Women\'s Health Center Paris: +33 1 42 49 49 49'
        ],
        gynecologists: [
          'Dr. Martin - Hôpital Saint-Louis: +33 1 42 49 49 49'
        ],
        emergencyContraception: [
          'Available at all pharmacies',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available everywhere - supermarkets, pharmacies',
          'High quality French and international brands'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Air pollution in city center',
        'Seasonal flu during winter'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Paris',
        address: '2 Avenue Gabriel, 75008 Paris',
        phone: '+33 1 43 12 22 22',
        email: 'citizeninfo@state.gov',
        emergency: '+33 1 43 12 22 22',
        link: 'https://fr.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Paris',
          address: '35 Rue du Faubourg Saint-Honoré, 75008 Paris',
          phone: '+33 1 44 51 31 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-paris'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Paris',
        address: '2 Avenue Gabriel, 75008 Paris',
        phone: '+33 1 43 12 22 22',
        email: 'citizeninfo@state.gov',
        link: 'https://fr.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under French and EU law',
        'Equal rights and anti-discrimination laws',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid France: 3939',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency) or 17 (police)',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.3,
          recommendations: ['Generally safe but watch for pickpockets'],
          companies: ['RATP'],
          link: 'https://www.ratp.fr/'
        },
        {
          type: 'Bus',
          safety: 8.5,
          recommendations: ['Safe and efficient, good visibility'],
          companies: ['RATP'],
          link: 'https://www.ratp.fr/'
        },
        {
          type: 'Uber',
          safety: 8.8,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/fr/en/'
        }
      ],
      nightTravel: {
        safety: 7.2,
        warnings: [
          'Some metro lines less safe after 10 PM',
          'Avoid isolated metro stations late at night',
          'Be cautious in outer arrondissements'
        ],
        alternatives: [
          'Night buses (Noctilien) available',
          'Uber available 24/7',
          'Official taxis at taxi stands'
        ]
      },
      verifiedProviders: [
        {
          name: 'RATP',
          type: 'Public Transport',
          contact: '3424',
          safety: 8.3
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 8.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Concierge services'
      ],
      safeNeighborhoods: [
        '1st Arrondissement (Louvre)',
        '4th Arrondissement (Marais)',
        '6th Arrondissement (Saint-Germain)',
        '7th Arrondissement (Eiffel Tower)',
        '8th Arrondissement (Champs-Élysées)'
      ],
      womensOnly: [
        {
          name: 'MIJE Hostels',
          type: 'Hostel',
          features: ['Female dorms', 'Historic locations', 'Central Paris'],
          rating: 4.1
        }
      ],
      userReviews: [
        {
          rating: 4.2,
          safety: 8.1,
          comments: 'Felt safe in central arrondissements. Great public transport.',
          date: '2025-01-19'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Many cafes offer free WiFi',
        'Use VPN for sensitive data',
        'Public WiFi in tourist areas - use caution'
      ],
      digitalScams: [
        'Fake booking websites',
        'Phishing emails from fake hotels',
        'Social media accommodation scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in France',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR provides strong protection',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Metro lines 1, 4, 6, 9',
          date: '2025-01-20',
          description: 'Multiple pickpocketing reports on busy metro lines',
          severity: 'medium'
        },
        {
          type: 'Scam',
          location: 'Tourist areas',
          date: '2025-01-18',
          description: 'Gold ring and petition scams reported',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Keep valuables secure on metro and in tourist areas',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 89
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'France is generally safe. Exercise normal precautions and be aware of petty crime in tourist areas.',
      reason: 'Generally safe with standard urban precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/france-travel-advisory.html',
      soloTravelerAdvice: [
        'Great destination for solo female travelers with precautions',
        'Stay in central arrondissements for best safety',
        'Learn basic French phrases',
        'Use official transport and avoid isolated areas at night'
      ]
    },
    crimeStatistics: {
      violentCrime: 11.4,
      propertyCrime: 3248,
      sexualAssault: 15.6,
      kidnapping: 0.4,
      source: 'French National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'RFID-blocking wallet',
        'Anti-theft bag',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'Citymapper',
          purpose: 'Best transport navigation for Paris',
          rating: 4.8
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Police',
          number: '17',
          type: 'Police Direct'
        },
        {
          name: 'Tourist Police',
          number: '0800 40 17 17',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Paris Metro Safety',
        description: 'Keep valuables secure, especially during rush hour. Avoid empty cars and isolated stations late at night. Use well-lit exits and stay aware of surroundings.',
        severity: 'medium',
        sourceName: 'RATP Safety Guidelines',
        sourceUrl: 'https://www.ratp.fr/safety'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$80 - $120 USD / day',
        description: 'Paris is expensive but offers excellent cultural experiences and safety in central areas.',
        tip: 'Budget for safer central accommodations and official transport.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$30-50',
          safetyNote: 'Choose hostels in central arrondissements',
          safetyLevel: 'medium-high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$100-150',
          safetyNote: 'Excellent security in central locations',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Metro/Bus',
          cost: '$15-25/day',
          safetyDescription: 'Generally safe with pickpocket precautions',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in central areas during day',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Stay in central arrondissements for safety',
        'Use weekly metro passes for savings',
        'Many free attractions and museums',
        'Picnics in parks are economical and safe'
      ]
    }
};

export default paris;