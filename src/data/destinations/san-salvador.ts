import { Destination } from './types';

const sansalvador: Destination = {
    city: 'San Salvador',
    country: 'El Salvador',
    continent: 'North America',
    countryCode: 'sv',
    overallScore: 3.5,
    nightSafety: 2.3,
    publicTransit: 3.5,
    walkingAlone: 2.7,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 170,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.3, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.7, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Zona Rosa', 'Colonia Escalón'],
      caution: ['Centro Histórico'],
      avoid: ['Soyapango', 'Mejicanos', 'Ilopango at night']
    },
    accommodations: [
      { name: 'Hostal Cumbres del Volcán', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.1, notes: 'Popular with solo travelers, but caution advised.' },
      { name: 'Barceló San Salvador', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Centro Histórico', reportCount: 15, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Waze', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '913', medical: '132', general: '911'
    },
    currency: {
      name: 'United States Dollar', code: 'USD', exchangeRate: {
      usd: 1.0000,
      eur: 0.8520,
      gbp: 0.7440
    }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 55.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/San-Salvador)
    nighttimeSafetyPercent: 32.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/San-Salvador)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/San-Salvador',
    // Red flags based on Numbeo 2025, World Nomads, and recent travel advisories
    // Sources:
    // https://www.numbeo.com/crime/in/San-Salvador
    // https://www.worldnomads.com/travel-safety/central-america/el-salvador/crime-in-el-salvador
    // https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching (Markets, Buses)',
        frequency: 'Frequent',
        icon: 'Hand',
      },
      {
        label: 'Armed Robbery & Mugging (Especially at Night)',
        frequency: 'Frequent',
        icon: 'PocketKnife',
      },
      {
        label: 'Taxi Scams & Unlicensed Taxis',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Gang Activity in Certain Districts',
        frequency: 'Occasional',
        icon: 'Users',
      },
    ],
    usefulTips: [
      {
        title: "Book airport transfers and avoid public transport at night",
        description: "Arrange private airport transfers in advance and avoid using public transport after dark. Registered taxis or rideshare apps like Uber are safer options, especially at night.",
        severity: "high",
        sourceName: "Cat is Out of the Office (2025)",
        sourceUrl: "https://catisoutoftheoffice.com/is-el-salvador-safe/"
      },
      {
        title: "Stay in safe neighborhoods and ask your accommodation for advice",
        description: "Choose accommodation in areas like Zona Rosa or Colonia Escalón. Always check with your hotel or hostel for the latest safety information and areas to avoid.",
        severity: "medium",
        sourceName: "Cat is Out of the Office (2025)",
        sourceUrl: "https://catisoutoftheoffice.com/is-el-salvador-safe/"
      },
      {
        title: "Dress modestly and keep valuables hidden",
        description: "El Salvador is traditional; dressing conservatively helps you blend in and avoid unwanted attention. Keep valuables out of sight and avoid flashy jewelry.",
        severity: "medium",
        sourceName: "Meghan the Traveling Teacher (2025)",
        sourceUrl: "https://meghanthetravelingteacher.com/tips-for-visiting-el-salvador/"
      },
      {
        title: "Use ATMs in secure locations and carry minimal cash",
        description: "Use ATMs inside banks or busy areas, and carry only the cash you need for the day. Credit cards are accepted in most places, but always have some cash as a backup.",
        severity: "medium",
        sourceName: "Meghan the Traveling Teacher (2025)",
        sourceUrl: "https://meghanthetravelingteacher.com/tips-for-visiting-el-salvador/"
      },
      {
        title: "Avoid walking alone at night and keep emergency numbers saved",
        description: "Do not walk alone after dark, especially in unfamiliar areas. Save local emergency numbers (police: 911) in your phone and stay alert to your surroundings.",
        severity: "high",
        sourceName: "SafeTravel NZ (2025)",
        sourceUrl: "https://www.safetravel.govt.nz/destinations/el-salvador"
      }
    ],
    culturalDos: [
      'Dress modestly and avoid flashy clothing.',
      'Greet people with a polite "buenos días" or "buenas tardes."',
      'Show respect for elders and authority figures.',
      'Ask permission before taking photos of people.',
      'Learn and use basic Spanish phrases.'
    ],
    culturalDonts: [
      "Don't display wealth or use your phone openly in public.",
      "Don't discuss politics or criticize the government.",
      "Don't refuse hospitality—decline politely if needed.",
      "Don't enter churches in revealing clothing.",
      "Don't take photos of police, military, or government buildings."
    ],
    womensConfidenceScore: {
      score: 41.4,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 65,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 45,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 55,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 60,
        source: '',
        sourceUrl: ''
      }
    ]
  };

export default sansalvador;
