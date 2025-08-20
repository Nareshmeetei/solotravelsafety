import { Destination } from './types';

const riodejaneiro: Destination = {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'South America',
    countryCode: 'br',
    overallScore: 4.3,
    nightSafety: 2.9,
    publicTransit: 4.8,
    walkingAlone: 3.7,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 410,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.9, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of mugging and assault.' },
      publicTransit: { score: 4.8, context: 'Public transport is crowded and can be risky. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.7, context: 'Not recommended to walk alone, especially for women. High risk of harassment.' }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Ipanema',
          description: 'Upscale beachfront neighborhood with better security and police presence. Safer for solo female travelers during daytime, but still requires caution with valuables and at night.'
        },
        {
          name: 'Leblon',
          description: 'Affluent neighborhood adjacent to Ipanema with higher safety standards. Considered one of Rio\'s safer areas for tourists, but standard precautions still apply.'
        },
        {
          name: 'Barra da Tijuca',
          description: 'Modern beach district with shopping centers and resorts. Generally safer due to newer development and security infrastructure, but exercise caution as with all Rio areas.'
        }
      ],
      caution: [
        'Copacabana: Famous beach area with heavy tourist traffic. High risk of theft and harassment, especially during events and at night.',
        'Lapa: Historic nightlife district. Very risky after dark due to crime and lack of adequate security.',
        'Santa Teresa: Artistic neighborhood with steep streets. Risk of muggings, especially when walking alone.',
        'Centro: Business district that becomes deserted and dangerous after work hours and weekends.'
      ],
      avoid: [
        'Favelas (all): Extremely dangerous for tourists. Armed crime, drug activity, and territorial disputes make these areas off-limits.',
        'Zona Norte suburbs: High crime rates with limited police presence. No tourist attractions justify the risk.',
        'Rio de Janeiro port area at night: Isolated and dangerous after dark with frequent criminal activity.',
        'Any isolated areas after sunset: Crime rates spike dramatically after dark throughout the city.'
      ]
    },
    accommodations: [
      { 
        name: 'Belmond Copacabana Palace', 
        type: 'hotel', 
        features: ['Luxury', 'Safe area', 'Security'], 
        rating: 4.7, 
        notes: 'High security and professional staff.',
        link: 'https://www.belmond.com/hotels/south-america/brazil/rio-de-janeiro/belmond-copacabana-palace/'
      },
      { 
        name: 'El Misti Hostel', 
        type: 'hostel', 
        features: ['Female dorms', 'Central location', 'Security'], 
        rating: 4.3, 
        notes: 'Popular with solo travelers, but caution advised.',
        link: 'https://www.elmistihostels.com/'
      }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of muggings and assaults', location: 'Copacabana', reportCount: 38, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: `• Dress very modestly and avoid any flashy jewelry, watches, or accessories
• Wear simple, inexpensive clothing that doesn't draw attention
• Keep expensive items completely hidden - no visible brands or logos
• Carry a simple bag that can be kept close to your body
• Avoid wearing anything that marks you as a tourist
• Dark, neutral colors help you blend in with locals`,
      firstTimers: `• Rio is NOT recommended for first-time solo female travelers - very high risk
• Arrange airport transfers in advance - never use public transport from airport
• Never walk alone, especially after dark or in isolated areas
• Stay in groups whenever possible and avoid solo activities
• Book accommodations in safer areas (Ipanema, Leblon) with security
• Emergency numbers: Police 190, Medical 192, Fire 193`,
      apps: [
        'Uber',
        '99 Taxi',
        'Google Maps',
        'WhatsApp',
        'iOverlander'
      ],
      appLinks: [
        { name: 'Uber', link: 'https://www.uber.com/br/pt-br/', description: 'Safest transportation option in Rio' },
        { name: '99 Taxi', link: 'https://99app.com/', description: 'Local ride-hailing app as backup to Uber' },
        { name: 'Google Maps', link: 'https://maps.google.com/', description: 'Navigation but use offline mode for safety' },
        { name: 'WhatsApp', link: 'https://www.whatsapp.com/', description: 'Stay connected with contacts for safety check-ins' },
        { name: 'iOverlander', link: 'https://www.ioverlander.com/', description: 'Traveler safety reports and recommendations' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Socorro!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Call the police!',
          local: 'Chame a polícia!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I need help.',
          local: 'Eu preciso de ajuda.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Onde fica o hospital mais próximo?',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I am lost.',
          local: 'Estou perdida.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, me deixe em paz.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Não me sinto segura.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Can you help me?',
          local: 'Você pode me ajudar?',
          localLanguage: 'Portuguese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '190', fire: '193', medical: '192', general: '192'
    },
    currency: {
      name: 'Brazilian Real', code: 'BRL', exchangeRate: {
      usd: 0.1812,
      eur: 0.1543,
      gbp: 0.1348
    }, scamWarnings: []
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Avoid Wearing Jewelry and Flashy Items',
        description: 'Leave gold and expensive jewelry at home, and avoid wearing anything that draws attention to reduce the risk of theft.',
        severity: 'low',
        sourceName: 'Tess the Traveler',
        sourceUrl: 'https://tessthetraveler.com/is-rio-de-janeiro-safe-for-tourists-10-tips-for-women-travelers/'
      },
      {
        title: 'Keep Your Phone and Valuables Hidden',
        description: 'Only take your phone out when needed and keep it put away otherwise. Use a bag that closes securely and keep it close to your body.',
        severity: 'low',
        sourceName: 'Tess the Traveler',
        sourceUrl: 'https://tessthetraveler.com/is-rio-de-janeiro-safe-for-tourists-10-tips-for-women-travelers/'
      },
      {
        title: 'Use Uber or Registered Taxis, Especially at Night',
        description: 'Uber and registered taxis are the safest way to get around, especially after dark. Avoid walking alone at night and in unfamiliar areas.',
        severity: 'low',
        sourceName: 'SoloGuides',
        sourceUrl: 'https://sologuides.com/rio-de-janeiro/'
      },
      {
        title: 'Bring Minimal Belongings to the Beach and Never Leave Them Unattended',
        description: 'Take as little as possible to the beach and always keep your belongings in sight or ask someone trustworthy to watch them if you swim.',
        severity: 'low',
        sourceName: 'Tess the Traveler',
        sourceUrl: 'https://tessthetraveler.com/is-rio-de-janeiro-safe-for-tourists-10-tips-for-women-travelers/'
      },
      {
        title: 'Choose Accommodations with Good Security in Safe Neighborhoods',
        description: 'Stay in areas like Ipanema, Leblon, or Barra da Tijuca, and pick hotels or hostels with 24-hour security and lockers.',
        severity: 'low',
        sourceName: 'Tess the Traveler',
        sourceUrl: 'https://tessthetraveler.com/is-rio-de-janeiro-safe-for-tourists-10-tips-for-women-travelers/'
      }
    ],
    languages: ['Portuguese', 'English (tourist areas)'],
    daytimeSafetyPercent: 44.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Rio-De-Janeiro)
    nighttimeSafetyPercent: 16.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Rio-De-Janeiro)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Rio-De-Janeiro',
    womensConfidenceScore: {
      score: 24.8,
      source: 'Travel Ladies 2025',
      sourceUrl: 'https://travelladies.app/safety/brazil/rio-de-janeiro'
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 40,
        source: 'Tess the Traveler 2025',
        sourceUrl: 'https://tessthetraveler.com/is-rio-de-janeiro-safe-for-tourists-10-tips-for-women-travelers/'
      },
      {
        label: "Nightlife",
        confidence: 18,
        source: 'Travel Safe Abroad 2025',
        sourceUrl: 'https://www.travelsafe-abroad.com/brazil/rio-de-janeiro/'
      },
      {
        label: "Public Transport",
        confidence: 30,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/rio-de-janeiro/'
      },
      {
        label: "Dining Alone",
        confidence: 35,
        source: 'Female Solo Travel 2025',
        sourceUrl: 'https://femalesolotravel.com/rio-de-janeiro-brazil-solo-female-travel-guide/'
      }
    ],
    // Red flags based on Numbeo 2025, Tess the Traveler, and HurfPost Brasil
    // Sources:
    // https://www.numbeo.com/crime/in/Rio-De-Janeiro
    // https://tessthetraveler.com/is-rio-de-janeiro-safe-for-tourists-10-tips-for-women-travelers/
    // https://www.hurfpostbrasil.com/is-rio-de-janeiro-safe-for-tourists/
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Most common',
        icon: 'Hand',
      },
      {
        label: 'Armed Robbery & Mugging',
        frequency: 'Frequent',
        icon: 'PocketKnife',
      },
      {
        label: 'Scams (ATM, Card Cloning, Overcharging)',
        frequency: 'Frequent',
        icon: 'CreditCard',
      },
      {
        label: 'Sexual Harassment & Beach Theft',
        frequency: 'Frequent',
        icon: 'AlertTriangle',
      },
    ],
  culturalDos: [
      'Greet with a friendly "bom dia" or "boa tarde."',
      'Dress modestly outside the beach; beachwear is for the beach only.',
      'Respect local customs and ask before taking photos of people.',
      'Use polite language and thank people (obrigada).',
      'Be mindful of personal space in crowded places.'
    ],
    culturalDonts: [
      "Don't display wealth or use your phone openly in public.",
      "Don't discuss politics or criticize Brazil.",
      "Don't wear swimwear away from the beach or pool.",
      "Don't take photos of police, military, or favelas.",
      "Don't refuse hospitality—decline politely if needed."
    ],
  legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General Rio de Janeiro',
          address: 'Avenida Presidente Wilson, 147 - Castelo, Rio de Janeiro - RJ, 20030-020',
          phone: '+55 21 3823-2000',
          link: 'https://br.usembassy.gov/embassy-consulates/rio-de-janeiro/'
        },
        {
          name: 'British Embassy Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-rio-de-janeiro'
        },
        {
          name: 'Embassy of Germany in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://br.diplo.de/'
        },
        {
          name: 'Embassy of France in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://br.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://www.exteriores.gob.es/embajadas/rio-de-janeiro'
        },
        {
          name: 'Australian Embassy Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://br.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://www.canadainternational.gc.ca/br-brazil/'
        },
        {
          name: 'Embassy of the Netherlands in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/brazil'
        },
        {
          name: 'Embassy of Denmark in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://br.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://www.eda.admin.ch/rio-de-janeiro'
        },
        {
          name: 'Embassy of India in Rio-de-janeiro',
          address: 'Avenida Presidente Wilson 147, Castelo, Rio de Janeiro',
          phone: '+55 21 3823 2000',
          link: 'https://www.indianembassybr.gov.in/'
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
    }
};

export default riodejaneiro;
