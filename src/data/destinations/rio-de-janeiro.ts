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
      safe: ['Ipanema', 'Leblon', 'Barra da Tijuca'],
      caution: ['Copacabana', 'Lapa'],
      avoid: ['Favelas', 'Centro at night']
    },
    accommodations: [
      { name: 'Belmond Copacabana Palace', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' },
      { name: 'El Misti Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.3, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of muggings and assaults', location: 'Copacabana', reportCount: 38, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', '99', 'Google Maps'],
      emergencyPhrases: ['Socorro!', 'Chame a polícia!']
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
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 40,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 18,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 30,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 35,
        source: '',
        sourceUrl: ''
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
    ]
  };

export default riodejaneiro;
