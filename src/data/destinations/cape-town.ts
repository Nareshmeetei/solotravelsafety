import { Destination } from './types';

const capetown: Destination = {
    city: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 3.2,
    nightSafety: 2.0,
    publicTransit: 3.5,
    walkingAlone: 2.8,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 250,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.8, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Camps Bay', 'Sea Point', 'Green Point'],
      caution: ['City Bowl', 'Woodstock'],
      avoid: ['Khayelitsha', 'Nyanga', 'CBD at night']
    },
    accommodations: [
      { name: 'The Table Bay Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' },
      { name: 'Once in Cape Town', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'CBD', reportCount: 30, severity: 'high', dateReported: '2 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Namola', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '10111', fire: '10177', medical: '10177', general: '112'
    },
    currency: {
      name: 'South African Rand', code: 'ZAR', exchangeRate: { usd: 0.055, eur: 0.05, gbp: 0.043 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['English', 'Afrikaans', 'Xhosa'],
    daytimeSafetyPercent: 46.9, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Cape-Town)
    nighttimeSafetyPercent: 14.8, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Cape-Town)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Cape-Town',
    redFlags: [
      { label: 'Muggings & Armed Robbery', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2025, Vigilios 2025
      { label: 'Pickpocketing & Theft', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, Vigilios 2025
      { label: 'Carjacking & Smash-and-Grab', frequency: 'Frequent', icon: 'Car' }, // Vigilios 2025
      { label: 'Sexual Assault & Harassment', frequency: 'Frequent', icon: 'EyeOff' }, // Vigilios 2025
    ],
    usefulTips: [
      {
        title: "Stay in well-reviewed, central neighborhoods",
        description: "Choose accommodation in safe, tourist-friendly areas like Camps Bay, Sea Point, or the V&A Waterfront. Avoid remote or poorly lit areas, especially at night.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Use registered taxis or rideshare apps",
        description: "Avoid public transport after dark. Use Uber, Bolt, or official taxi services for safe travel, especially at night.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Keep valuables hidden and avoid flashy jewelry",
        description: "Petty theft and pickpocketing are common. Use a money belt, keep your phone and wallet secure, and leave expensive jewelry at home.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      },
      {
        title: "Do not walk alone after dark",
        description: "Plan your evenings to return to your accommodation before sunset, or travel with a group. Avoid isolated areas, beaches, and mountainsides at night.",
        severity: "high",
        sourceName: "Viva Expeditions Solo Female Travel Guide",
        sourceUrl: "https://vivaexpeditions.com/blog/is-it-safe-to-explore-south-africa-as-a-solo-female-traveller"
      },
      {
        title: "Join guided tours for hiking and township visits",
        description: "For hikes (like Table Mountain) or township tours, always join a reputable group or guide. Never hike alone, and avoid informal settlements unless with a trusted operator.",
        severity: "medium",
        sourceName: "Nox Rentals Cape Town Safety Guide",
        sourceUrl: "https://www.noxrentals.com/cape-town-stay-safe-tourists-visit"
      }
    ], // Tips sourced from Nox Rentals, Viva Expeditions, 2025
};

export default capetown;
