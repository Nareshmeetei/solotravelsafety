import { Destination } from './types';

const bogota: Destination = {
    city: 'Bogotá',
    country: 'Colombia',
    continent: 'South America',
    countryCode: 'co',
    overallScore: 3.8,
    nightSafety: 2.7,
    publicTransit: 4.0,
    walkingAlone: 3.0,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 220,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.7, context: 'Unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 4.0, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.0, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Chapinero', 'Zona Rosa', 'Usaquén'],
      caution: ['La Candelaria', 'Teusaquillo'],
      avoid: ['Ciudad Bolívar', 'San Cristóbal', 'Santa Fe at night']
    },
    accommodations: [
      { name: 'Selina Bogotá', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' },
      { name: 'JW Marriott Hotel Bogotá', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'La Candelaria', reportCount: 20, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Beat', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '123', fire: '119', medical: '125', general: '123'
    },
    currency: {
      name: 'Colombian Peso', code: 'COP', exchangeRate: { usd: 0.00025, eur: 0.00022, gbp: 0.00019 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 54.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bogota)
    nighttimeSafetyPercent: 22.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Bogota)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Bogota',
    redFlags: [
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, World Nomads 2024, Dragonfly 2024
      { label: 'Muggings & Armed Robbery', frequency: 'Frequent', icon: 'PocketKnife' }, // Numbeo 2025, Dragonfly 2024
      { label: 'Taxi Scams & Overcharging', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2025, World Nomads 2024
      { label: 'Drink Spiking & Drugging', frequency: 'Occasional', icon: 'Syringe' }, // World Nomads 2024
    ],
    usefulTips: [
      {
        title: 'Keep a Low Profile and Don\'t Flaunt Valuables',
        description: 'Avoid displaying expensive jewelry, electronics, or large amounts of cash. Use anti-theft bags and keep your belongings close, especially in crowded areas.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        title: 'Use Ride-Sharing Apps or Official Taxis',
        description: 'Don\'t hail taxis on the street. Use trusted ride-sharing apps (like Uber or Beat) or have your hotel call a reputable taxi for you, especially at night.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-bogota-safe-for-female-travelers/'
      },
      {
        title: 'Explore During the Day and Avoid Isolated Areas at Night',
        description: 'Stick to well-lit, busy areas and avoid walking alone after dark, especially in less secure neighborhoods. Plan your sightseeing for daylight hours.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/colombia/bogota'
      },
      {
        title: 'Be Cautious at ATMs and Markets',
        description: 'Use ATMs inside banks or shopping centers, and always be aware of your surroundings. Markets and tourist sites can be hotspots for pickpockets.',
        severity: 'low',
        sourceName: 'Qeepl',
        sourceUrl: 'https://qeepl.com/en/blog/is-bogota-safe-a-tourist-s-guide-to-safety-and-security'
      },
      {
        title: 'Acclimatize to the Altitude and Stay Hydrated',
        description: 'Bogotá is at high altitude. Take it easy for the first few days, drink plenty of water, and avoid strenuous activity until you adjust.',
        severity: 'low',
        sourceName: 'Travelhapp',
        sourceUrl: 'https://travelhapp.com/tips/colombia-travel-health-guide'
      }
    ],
};

export default bogota; 