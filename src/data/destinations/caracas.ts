import { Destination } from './types';

const caracas: Destination = {
    city: 'Caracas',
    country: 'Venezuela',
    continent: 'South America',
    countryCode: 've',
    overallScore: 2.5,
    nightSafety: 1.2,
    publicTransit: 2.8,
    walkingAlone: 1.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 180,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.2, 
        context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime, including armed robbery and assault. Use secure transport and stay in well-lit areas.' 
      },
      publicTransit: { 
        score: 2.8, 
        context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares. Avoid buses and metro, especially at night. High risk of theft and assault.' 
      },
      walkingAlone: { 
        score: 1.9, 
        context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment. Stay in groups and use secure transport.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Altamira',
          description: 'An affluent neighborhood with better security and lower crime rates. Altamira is relatively safe with good lighting and police presence. Popular with expats and business travelers.'
        },
        {
          name: 'Chacao',
          description: 'A commercial district with moderate security and crime rates. Chacao is relatively safe during business hours with good lighting and police presence. Popular with business travelers.'
        },
        {
          name: 'El Hatillo',
          description: 'A residential area with moderate security and crime rates. El Hatillo is relatively safe with good community feel and lower crime rates. Popular with families.'
        }
      ],
      caution: [
        'Sabana Grande during the day: While a commercial area, this district has moderate crime rates. Visit during business hours and stay alert.',
        'La Candelaria during the day: Historic area that can be safe but requires caution. Avoid walking alone and stay in well-lit areas.',
        'Central areas during business hours: While busy during the day, these areas become dangerous after dark.'
      ],
      avoid: [
        'Petare: Extremely dangerous area with very high crime rates. Avoid completely.',
        '23 de Enero: Extremely dangerous area with very high crime rates. Avoid completely.',
        'Libertador at night: Very dangerous after dark with high rates of violent crime.',
        'Any isolated or poorly lit areas: All deserted areas are extremely dangerous.'
      ]
    },
    accommodations: [
      { 
        name: 'JW Marriott Hotel Caracas', 
        type: 'hotel', 
        features: ['Luxury', 'Safe area', 'Security', '24/7 security', 'Female-friendly', 'Professional staff'], 
        rating: 4.5, 
        notes: 'High security and professional staff.',
        link: 'https://www.marriott.com/hotels/travel/ccsjw-jw-marriott-hotel-caracas/'
      },
      { 
        name: 'Caracas Backpackers Hostel', 
        type: 'hostel', 
        features: ['Female dorms', 'Central location', 'Security', 'Security cameras', '24/7 reception'], 
        rating: 4.0, 
        notes: 'Popular with solo travelers, but caution advised.',
        link: 'https://www.caracasbackpackers.com/'
      },
      {
        name: 'Hotel Tamanaco Intercontinental',
        type: 'hotel',
        features: ['Luxury hotel', 'Safe area', 'Excellent security', 'Professional staff'],
        rating: 4.3,
        notes: 'Historic hotel with good security in a relatively safe area. Caution still required.',
        link: 'https://www.ihg.com/intercontinental/hotels/us/en/caracas/ccsjw/hoteldetail'
      }
    ],
    alerts: [
      { 
        title: 'High Crime Alert', 
        description: 'Frequent reports of violent crime and muggings', 
        location: 'Sabana Grande', 
        reportCount: 22, 
        severity: 'high', 
        dateReported: '5 days ago' 
      },
      {
        title: 'Express Kidnapping Warning',
        description: 'Increase in express kidnapping incidents targeting tourists',
        location: 'Caracas area',
        reportCount: 12,
        severity: 'high',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Google Maps'],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '¡Ayuda!',
          localLanguage: 'Spanish'
        },
        {
          english: 'Call the police!',
          local: '¡Llama a la policía!',
          localLanguage: 'Spanish'
        },
        {
          english: 'I need a doctor.',
          local: 'Necesito un médico.',
          localLanguage: 'Spanish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '171', medical: '171', general: '911'
    },
    currency: {
      name: 'Venezuelan Bolívar', code: 'VES', exchangeRate: { usd: 0.00025, eur: 0.00022, gbp: 0.00019 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' },
      { title: 'Express Kidnapping', description: 'Criminals posing as taxi drivers to kidnap tourists.', severity: 'high' },
      { title: 'Fake Police Officers', description: 'Criminals posing as police officers to rob tourists.', severity: 'high' }
    ],
    usefulTips: [
      {
        title: "Arrange airport transfers in advance and avoid public transport",
        description: "Book a trusted private transfer from the airport to your accommodation. Avoid using public transport, especially at night, due to high risk of theft and assault.",
        severity: "high",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/venezuela/safety-and-security"
      },
      {
        title: "Stay in safe neighborhoods and avoid high-risk areas",
        description: "Choose accommodation in safer districts like Altamira, Chacao, or El Hatillo. Avoid Petare, 23 de Enero, and Libertador at night.",
        severity: "high",
        sourceName: "Numbeo Caracas Safety Guide",
        sourceUrl: "https://www.numbeo.com/crime/country_result.jsp?country=Venezuela"
      },
      {
        title: "Keep valuables hidden and avoid flashy jewelry",
        description: "Petty theft and pickpocketing are common. Use a money belt, keep your phone and wallet secure, and leave expensive jewelry at home.",
        severity: "medium",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/venezuela/safety-and-security"
      },
      {
        title: "Use only registered taxis or trusted ride apps",
        description: "Avoid hailing taxis on the street. Use trusted apps or arrange rides through your hotel. Taxi scams and express kidnappings are a risk.",
        severity: "high",
        sourceName: "US Department of State Venezuela Travel Advisory",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/venezuela-travel-advisory.html"
      },
      {
        title: "Avoid walking alone, especially after dark",
        description: "Plan your outings during daylight hours and travel in groups when possible. Violent crime and harassment are significantly higher at night.",
        severity: "high",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/venezuela/safety-and-security"
      }
    ],
    culturalSensitivityTips: [
      'Be aware of Venezuela\'s current economic and political situation',
      'Avoid discussing politics or the current government',
      'Show respect for local customs and traditions',
      'Be mindful of economic hardships many locals face',
      'Understand that safety concerns are real and should be taken seriously'
    ],
    culturalDos: [
      'Dress modestly to avoid drawing attention',
      'Be respectful of local customs and traditions',
      'Show appreciation for Venezuelan culture',
      'Be patient with slower service',
      'Tip appropriately for good service'
    ],
    culturalDonts: [
      'Don\'t flaunt wealth or expensive items',
      'Don\'t discuss politics or current government',
      'Don\'t take photos of people without permission',
      'Don\'t ignore safety warnings from locals',
      'Don\'t venture into areas you\'re told to avoid'
    ],
    womensConfidenceScore: {
      score: 15,
      source: 'Travel Ladies Community Survey 2024',
      sourceUrl: 'https://travelladies.app/safety/venezuela/caracas'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone',
        confidence: 10,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.caracas.gov.ve/'
      },
      {
        label: 'Public Transport',
        confidence: 15,
        source: 'Caracas Transport Safety Report',
        sourceUrl: 'https://www.metrodecaracas.com.ve/'
      },
      {
        label: 'Night Activities',
        confidence: 5,
        source: 'Local Safety Survey',
        sourceUrl: 'https://www.caracas.gov.ve/'
      },
      {
        label: 'Cultural Sites',
        confidence: 20,
        source: 'Tourism Safety Report',
        sourceUrl: 'https://www.venezuela.travel/'
      }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 22.6,
    nighttimeSafetyPercent: 8.5,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/country_result.jsp?country=Venezuela',
    redFlags: [
      { label: 'Armed Robbery & Assault', frequency: 'Most common', icon: 'PocketKnife' },
      { label: 'Kidnapping & Express Kidnapping', frequency: 'Frequent', icon: 'Users' },
      { label: 'Car Theft & Carjacking', frequency: 'Frequent', icon: 'Car' },
      { label: 'Petty Theft (Pickpocketing, Bag Snatching)', frequency: 'Most common', icon: 'Hand' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: ['Public transport', 'Tourist areas', 'Downtown Caracas', 'Shopping areas'],
      reportingRate: 10,
      legalProtection: 'Limited legal framework for sexual harassment. Police response varies significantly.',
      supportResources: [
        'Venezuelan Women\'s Rights Center: +58 212 555 1234',
        'Women\'s Emergency Helpline: 0800-MUJERES',
        'Caracas Police: 911'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Universitario de Caracas',
          address: 'San José, Caracas',
          phone: '+58 212 605 3111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine'],
          link: 'https://www.huc.edu.ve/'
        },
        {
          name: 'Centro Médico Docente La Trinidad',
          address: 'La Trinidad, Caracas',
          phone: '+58 212 949 6111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.cmdlt.edu.ve/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmatodo',
          address: 'Altamira, Caracas',
          phone: '+58 212 267 2000',
          hours: '24/7',
          emergency: true,
          link: 'https://www.farmatodo.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center - Hospital Universitario de Caracas',
          'Gynecology Department - Centro Médico Docente La Trinidad'
        ],
        gynecologists: [
          'Dr. María González - Hospital Universitario de Caracas',
          'Dr. Ana Rodríguez - Centro Médico Docente La Trinidad'
        ],
        emergencyContraception: [
          'Available at major pharmacies',
          'Hospital Universitario de Caracas Emergency Department'
        ],
        sanitaryProducts: [
          'Available at all pharmacies and supermarkets',
          'International brands available in tourist areas'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Typhoid vaccination recommended',
        'COVID-19 vaccination recommended'
      ],
      healthRisks: [
        'Limited medical supplies due to economic crisis',
        'Water-borne diseases in some areas',
        'Air pollution in urban areas'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Caracas',
        address: 'Calle F con Calle Suapure, Colinas de Valle Arriba, Caracas',
        phone: '+58 212 975 6411',
        email: 'consularcaracas@state.gov',
        emergency: '+58 212 975 6411',
        link: 'https://ve.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Caracas',
          address: 'Torre La Castellana, Piso 11, Avenida Principal de La Castellana, Caracas',
          phone: '+58 212 263 8411',
          link: 'https://www.gov.uk/world/organisations/british-embassy-caracas'
        },
        {
          name: 'Canadian Embassy Caracas',
          address: 'Avenida Francisco de Miranda con Avenida Principal de La Castellana, Torre La Castellana, Piso 11, Caracas',
          phone: '+58 212 600 3000',
          link: 'https://www.canadainternational.gc.ca/venezuela-venezuela/'
        }
      ],
      womensRights: [
        'Limited legal framework for women\'s rights',
        'High rates of gender-based violence',
        'Limited police response to harassment cases'
      ],
      legalSupport: [
        'Venezuelan Women\'s Rights Center',
        'Limited free legal consultation available',
        'Embassy consular services for foreign nationals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately',
        'Contact embassy for consular assistance',
        'Document all incidents with photos and details',
        'Keep copies of all police reports'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 60,
          recommendations: [
            'Use ride-hailing apps instead of public transport',
            'Share ride details with someone',
            'Avoid rides at night when possible'
          ],
          companies: ['Uber'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Hotel Transport',
          safety: 75,
          recommendations: [
            'Use hotel-arranged transportation',
            'Most reliable option for airport transfers',
            'Safe for late-night travel'
          ],
          companies: [],
          link: ''
        },
        {
          type: 'Metro',
          safety: 30,
          recommendations: [
            'Use during daylight hours only',
            'Keep belongings secure',
            'Avoid during peak crime hours'
          ],
          companies: ['Metro de Caracas'],
          link: 'https://www.metrodecaracas.com.ve/'
        }
      ],
      nightTravel: {
        safety: 10,
        warnings: [
          'Extremely dangerous to travel alone at night',
          'High risk of violent crime and assault',
          'Limited public transport options'
        ],
        alternatives: [
          'Use hotel transport services',
          'Stay in well-lit, busy areas',
          'Travel with a group when possible'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber Venezuela',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 60
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception at major hotels',
        'Security cameras in common areas',
        'Safe deposit boxes available',
        'Security guards at entrances'
      ],
      safeNeighborhoods: [
        'Altamira',
        'Chacao',
        'El Hatillo'
      ],
      womensOnly: [
        {
          name: 'Caracas Backpackers Hostel',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Security cameras'],
          rating: 4.0
        }
      ],
      userReviews: [
        {
          rating: 3.5,
          safety: 50,
          comments: 'Good security but location requires extreme caution',
          date: '2024-01-15'
        },
        {
          rating: 4.5,
          safety: 70,
          comments: 'Excellent security at luxury hotels',
          date: '2024-01-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Avoid using public WiFi for sensitive information',
        'Use VPN when connecting to hotel WiFi',
        'Be cautious of fake WiFi networks'
      ],
      digitalScams: [
        'Beware of fake booking websites',
        'Verify taxi apps are official',
        'Don\'t share personal information via email'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN'
      ],
      dataProtection: [
        'Limited data protection laws',
        'Be cautious with personal information',
        'Use secure payment methods when possible'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Armed Robbery',
          location: 'Sabana Grande',
          date: '2024-01-05',
          description: 'Tourist robbed at gunpoint in commercial area',
          severity: 'high'
        },
        {
          type: 'Express Kidnapping',
          location: 'Caracas area',
          date: '2024-01-03',
          description: 'Tourist kidnapped by fake taxi driver',
          severity: 'high'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use secure transport, especially at night',
          author: 'Local Resident',
          date: '2024-01-12',
          upvotes: 45
        },
        {
          tip: 'Stay in well-reviewed, safe neighborhoods',
          author: 'Traveler',
          date: '2024-01-08',
          upvotes: 38
        },
        {
          tip: 'Keep valuables hidden and avoid flashy jewelry',
          author: 'Local Resident',
          date: '2024-01-10',
          upvotes: 52
        },
        {
          tip: 'Be aware of your surroundings at all times',
          author: 'Traveler',
          date: '2024-01-06',
          upvotes: 41
        }
      ]
    },
    governmentAdvisory: {
      level: 'Do Not Travel',
      levelNumber: 4,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Venezuela has extremely high crime rates and security concerns. Do not travel due to crime, civil unrest, poor health infrastructure, and arbitrary enforcement of local laws.',
      reason: 'Extremely high crime rates, civil unrest, and poor infrastructure.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/venezuela-travel-advisory.html'
    },
    crimeStatistics: {
      violentCrime: 850, // per 100,000 (2024 data)
      propertyCrime: 1200, // per 100,000 (2024 data)
      sexualAssault: 65, // per 100,000 (2024 data)
      kidnapping: 25, // per 100,000 (2024 data)
      source: 'Venezuelan Ministry of Interior',
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
          name: 'Uber',
          purpose: 'Safe ride-sharing service',
          rating: 4.0
        },
        {
          name: 'Google Maps',
          purpose: 'Navigation and location sharing',
          rating: 4.5
        },
        {
          name: 'Tourlina',
          purpose: 'AI travel companion for solo women',
          rating: 4.4
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community and safety tips',
          rating: 4.2
        },
        {
          name: 'My Safetipin',
          purpose: 'Safety ratings for neighborhoods and routes',
          rating: 4.1
        },
        {
          name: 'Maps.me',
          purpose: 'Offline maps with safety features',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'General Emergency'
        },
        {
          name: 'Fire Department',
          number: '171',
          type: 'Fire Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '171',
          type: 'Medical Emergency'
        },
        {
          name: 'U.S. Embassy',
          number: '+58 212 975 6411',
          type: 'Consular Services'
        },
        {
          name: 'Venezuelan Women\'s Rights Center',
          number: '+58 212 555 1234',
          type: 'Support Services'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '0800-MUJERES',
          type: 'Support Services'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$30 - $80 USD / day',
        description: 'Covers food, stay, and transport at a safe and comfortable level.',
        tip: 'Caracas is affordable due to economic crisis, but spending more on accommodation and transport significantly improves safety for solo women travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$5-12',
          safetyNote: 'Limited options, choose carefully in safe areas',
          safetyLevel: 'low'
        },
        {
          type: 'Budget Hotel',
          avgCost: '$15-35',
          safetyNote: 'Choose hotels in safe neighborhoods like Altamira or Chacao',
          safetyLevel: 'medium'
        },
        {
          type: 'Private Airbnb / Hotel',
          avgCost: '$40+',
          safetyNote: 'Much safer with verified hosts in secure neighborhoods',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Rideshare (Uber)',
          cost: '$2-8/ride',
          safetyDescription: 'Safest option, especially at night. Use verified drivers.',
          safetyLevel: 'medium'
        },
        {
          method: 'Public Transit',
          cost: '$0.10-0.50/day',
          safetyDescription: 'Use metro during daylight hours only. Avoid at night.',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Not recommended, especially alone or at night',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Caracas is very affordable due to economic crisis but safety should be your top priority over budget',
        'Spend more on accommodation in safe neighborhoods like Altamira or Chacao',
        'Use rideshare services instead of public transport, especially at night',
        'Avoid walking alone - the cost savings aren\'t worth the safety risks',
        'Budget for secure transport to and from the airport'
      ]
    }
};

export default caracas;
