import { Destination } from './types';

const guatemalacity: Destination = {
    city: 'Guatemala City',
    country: 'Guatemala',
    continent: 'North America',
    countryCode: 'gt',
    overallScore: 3.7,
    nightSafety: 2.6,
    publicTransit: 3.8,
    walkingAlone: 2.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 180,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.6, context: 'Unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Zona 10', 'Zona 14'],
      caution: ['Zona 1', 'Zona 4'],
      avoid: ['Zona 3', 'Zona 18', 'Zona 21 at night']
    },
    accommodations: [
      { name: 'Hostal Villa Toscana', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' },
      { name: 'Barceló Guatemala City', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.6, notes: 'High security and professional staff.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Zona 1', reportCount: 17, severity: 'high', dateReported: '3 days ago' }
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
      police: '110', fire: '122', medical: '123', general: '110'
    },
    currency: {
      name: 'Guatemalan Quetzal', code: 'GTQ', exchangeRate: { usd: 0.13, eur: 0.12, gbp: 0.10 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 45.2, // Source: Numbeo 2024 (https://www.numbeo.com/crime/in/Guatemala-City)
    nighttimeSafetyPercent: 20.7, // Source: Numbeo 2024 (https://www.numbeo.com/crime/in/Guatemala-City)
    safetySourceName: 'Numbeo 2024',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Guatemala-City',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2024, US State Dept 2025
      { label: 'Taxi Scams & Express Kidnapping', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2024, BHTP 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2024
      { label: 'Corruption & Police Bribery', frequency: 'Occasional', icon: 'Shield' }, // Numbeo 2024
    ],
    usefulTips: [
      {
        title: "Stay in safe zones and avoid walking alone at night",
        description: "Book accommodation in Zona 10 or Zona 14, and avoid walking alone after dark, especially outside these areas.",
        severity: "high",
        sourceName: "Journey By Backpack, 2025",
        sourceUrl: "https://journeybybackpack.com/destinations/guatemala/is-guatemala-safe-for-solo-female-travel/"
      },
      {
        title: "Use registered taxis, Uber, or hotel-arranged transport",
        description: "Avoid public buses and unregistered taxis. Arrange airport transfers and city rides through your hotel or use Uber for safety.",
        severity: "high",
        sourceName: "Lady Abroad, 2025",
        sourceUrl: "https://ladyabroad.com/how-to-get-to-antigua-from-guatemala-city/"
      },
      {
        title: "Keep valuables hidden and avoid displaying wealth",
        description: "Carry only what you need, keep phones and jewelry out of sight, and use a cross-body bag with zippers.",
        severity: "high",
        sourceName: "She Roams The Globe, 2025",
        sourceUrl: "https://sheroamstheglobe.com/solo-female-travel-guatemala/"
      },
      {
        title: "Arrange all travel and tours through trusted providers",
        description: "Book shuttles, tours, and excursions through your hotel or reputable agencies. Avoid accepting rides from strangers.",
        severity: "high",
        sourceName: "Journey By Backpack, 2025",
        sourceUrl: "https://journeybybackpack.com/destinations/guatemala/is-guatemala-safe-for-solo-female-travel/"
      },
      {
        title: "Have a local SIM card and emergency contacts ready",
        description: "Buy a local SIM for connectivity, and save emergency numbers (110 for police, 1500 for PROATUR tourist assistance).",
        severity: "medium",
        sourceName: "Lady Abroad, 2025",
        sourceUrl: "https://ladyabroad.com/safety-in-antigua-heres-what-to-know/"
      }
    ], // Tips sourced from Journey By Backpack, Lady Abroad, She Roams The Globe (2025)
};

export default guatemalacity; 