import { Destination } from './types';

const portauprince: Destination = {
    city: 'Port-au-Prince',
    country: 'Haiti',
    continent: 'North America',
    countryCode: 'ht',
    overallScore: 3.2,
    nightSafety: 2.0,
    publicTransit: 3.0,
    walkingAlone: 2.2,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 160,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.0, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.2, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Pétion-Ville'],
      caution: ['Delmas'],
      avoid: ['Cité Soleil', 'Martissant', 'Carrefour at night']
    },
    accommodations: [
      { name: 'Hotel Montana', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.3, notes: 'High security and professional staff.' },
      { name: 'Allamanda Bed and Breakfast', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Delmas', reportCount: 14, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Google Maps'],
      emergencyPhrases: ['Edem sekou!', 'Rele polis la!']
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
      police: '114', fire: '115', medical: '116', general: '114'
    },
    currency: {
      name: 'Haitian Gourde', code: 'HTG', exchangeRate: {
      usd: 0.0076,
      eur: 0.0065,
      gbp: 0.0057
    }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['French', 'Haitian Creole'],
    daytimeSafetyPercent: 32.0,
    nighttimeSafetyPercent: 10.0,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Port-au-Prince',
    // Red flags based on Numbeo 2025, Travel Safe Abroad, World Nomads, and Wikipedia
    // Sources:
    // https://www.numbeo.com/crime/in/Port-au-Prince
    // https://www.travelsafe-abroad.com/haiti/port-au-prince/
    // https://www.worldnomads.com/travel-safety/caribbean/haiti/haiti-high-crime-and-chaos
    // https://en.wikipedia.org/wiki/Crime_in_Haiti
    redFlags: [
      {
        label: 'Kidnapping & Armed Robbery',
        frequency: 'Most common',
        icon: 'PocketKnife',
      },
      {
        label: 'Sexual Assault & Harassment',
        frequency: 'Most common',
        icon: 'AlertTriangle',
      },
      {
        label: 'Corruption & Police Complicity',
        frequency: 'Frequent',
        icon: 'CreditCard',
      },
      {
        label: 'Natural Disasters (Earthquakes, Hurricanes)',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
    ],
    usefulTips: [
      {
        title: "Arrange secure airport transfers and avoid public transport",
        description: "Book trusted private transfers in advance. Do not use public transport or hail taxis on the street due to high risk of scams and crime.",
        severity: "high",
        sourceName: "US State Department Travel Advisory",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html"
      },
      {
        title: "Stay only in secure, reputable accommodations in Pétion-Ville",
        description: "Choose hotels with strong security in Pétion-Ville, the safest area for foreigners. Avoid Airbnb and unregistered guesthouses.",
        severity: "high",
        sourceName: "Travel Safe Abroad - Port-au-Prince",
        sourceUrl: "https://www.travelsafe-abroad.com/haiti/port-au-prince/"
      },
      {
        title: "Do not walk alone, especially after dark",
        description: "Walking alone is not recommended at any time. Use trusted drivers and avoid going out after dark due to high risk of violent crime.",
        severity: "high",
        sourceName: "World Nomads - Haiti Safety",
        sourceUrl: "https://www.worldnomads.com/travel-safety/caribbean/haiti/haiti-high-crime-and-chaos"
      },
      {
        title: "Keep valuables hidden and avoid displaying wealth",
        description: "Do not wear jewelry, watches, or carry expensive electronics. Keep cash and passports in a money belt or hidden pouch.",
        severity: "high",
        sourceName: "Numbeo - Port-au-Prince Crime",
        sourceUrl: "https://www.numbeo.com/crime/in/Port-au-Prince"
      },
      {
        title: "Monitor local news and avoid protests or large gatherings",
        description: "Political unrest and protests can turn violent quickly. Stay informed and avoid any demonstrations or crowds.",
        severity: "high",
        sourceName: "Wikipedia - Crime in Haiti",
        sourceUrl: "https://en.wikipedia.org/wiki/Crime_in_Haiti"
      }
    ], // Tips sourced from US State Department, Travel Safe Abroad, World Nomads, Numbeo, and Wikipedia (2025)
    culturalDos: [
      'Dress modestly and cover shoulders and knees.',
      'Greet people politely with "Bonjour" or "Bonjou".',
      'Ask permission before taking photos of people.',
      'Show respect for elders and authority figures.',
      'Learn basic French or Haitian Creole phrases.'
    ],
    culturalDonts: [
      "Don't display wealth or wear flashy jewelry.",
      "Don't discuss politics or criticize the government.",
      "Don't refuse hospitality—decline politely if needed.",
      "Don't enter churches in revealing clothing.",
      "Don't take photos of police, military, or government buildings."
    ],
    womensConfidenceScore: {
      score: 21.1,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 15,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 5,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 10,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 18,
        source: '',
        sourceUrl: ''
      }
    ]
};

export default portauprince;
