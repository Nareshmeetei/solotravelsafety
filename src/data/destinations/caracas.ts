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
      nightSafety: { score: 1.2, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 2.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 1.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Altamira', 'Chacao', 'El Hatillo'],
      caution: ['Sabana Grande', 'La Candelaria'],
      avoid: ['Petare', '23 de Enero', 'Libertador at night']
    },
    accommodations: [
      { name: 'JW Marriott Hotel Caracas', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' },
      { name: 'Caracas Backpackers Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Sabana Grande', reportCount: 22, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
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
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 22.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/country_result.jsp?country=Venezuela)
    nighttimeSafetyPercent: 8.5, // Source: Numbeo 2025 (https://www.numbeo.com/crime/country_result.jsp?country=Venezuela)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/country_result.jsp?country=Venezuela',
    redFlags: [
      { label: 'Armed Robbery & Assault', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2025
      { label: 'Kidnapping & Express Kidnapping', frequency: 'Frequent', icon: 'Users' }, // Numbeo 2025
      { label: 'Car Theft & Carjacking', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2025
      { label: 'Petty Theft (Pickpocketing, Bag Snatching)', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025
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
        sourceName: "Numbeo Caracas Safety Guide",
        sourceUrl: "https://www.numbeo.com/crime/country_result.jsp?country=Venezuela"
      }
    ], // Tips sourced from UK Gov, US State Dept, Numbeo, 2025
    culturalDos: [
      'Stay in safe neighborhoods.',
      'Use only registered taxis or trusted ride apps.',
      'Keep valuables hidden and secure.',
      'Arrange airport transfers in advance.',
      'Travel in groups when possible.'
    ],
    culturalDonts: [
      "Don't walk alone after dark.",
      "Don't hail taxis on the street.",
      "Don't display valuables or wear flashy jewelry.",
      "Don't accept help from strangers at ATMs.",
      "Don't discuss politics in public."
    ],
};

export default caracas;
