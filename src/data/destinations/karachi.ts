import { Destination } from './types';

const karachi: Destination = {
    city: 'Karachi',
    country: 'Pakistan',
    continent: 'Asia',
    countryCode: 'pk',
    overallScore: 3.5,
    nightSafety: 2.2,
    publicTransit: 3.8,
    walkingAlone: 2.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 210,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.2, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.8, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.9, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Clifton', 'Defence', 'Gulshan-e-Iqbal'],
      caution: ['Saddar', 'Nazimabad'],
      avoid: ['Lyari', 'Korangi', 'Orangi Town at night']
    },
    accommodations: [
      { name: 'Mövenpick Hotel Karachi', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.4, notes: 'High security and professional staff.' },
      { name: 'Backpackers Hostel Karachi', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Saddar', reportCount: 27, severity: 'high', dateReported: '6 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Careem', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Madad!', 'Police ko bulao!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-May'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '117', fire: '160', medical: '911', general: '911'
    },
    currency: {
      name: 'Pakistani Rupee', code: 'PKR', exchangeRate: {
      usd: 0.0035,
      eur: 0.0030,
      gbp: 0.0026
    }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['Urdu', 'English (widely spoken)'],
    daytimeSafetyPercent: 52.3, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Karachi)
    nighttimeSafetyPercent: 29.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Karachi)
    redFlags: [
      { label: 'Mobile Phone Snatching', frequency: 'Most common', icon: 'Smartphone' }, // CPLC 2025, Times of Karachi 2025
      { label: 'Vehicle Theft & Snatching', frequency: 'Most common', icon: 'Car' }, // CPLC 2025, Times of Karachi 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2025
      { label: 'Kidnapping for Ransom', frequency: 'Occasional', icon: 'Users' }, // CPLC 2025
    ],
    usefulTips: [
      {
        title: "Dress modestly and avoid flashy accessories",
        description: "Wear loose, modest clothing and avoid drawing attention with jewelry or expensive items. This helps you blend in and reduces unwanted attention.",
        severity: "high",
        sourceName: "Traveler Wiz (2025)",
        sourceUrl: "https://www.travelerwiz.com/travel-guide/what-do-female-tourists-wear-in-pakistan/"
      },
      {
        title: "Use registered taxis or rideshare apps only",
        description: "Avoid public transport and unregistered taxis. Use apps like Careem or Uber for safer, trackable rides, especially at night.",
        severity: "high",
        sourceName: "Karachi Police (2025)",
        sourceUrl: "https://karachipolice.gov.pk/"
      },
      {
        title: "Keep valuables hidden and stay alert in public",
        description: "Mobile phone snatching and pickpocketing are common. Keep your phone and valuables out of sight, especially in crowded areas.",
        severity: "high",
        sourceName: "CPLC, Times of Karachi (2025)",
        sourceUrl: "https://www.numbeo.com/crime/in/Karachi"
      },
      {
        title: "Avoid walking alone after dark and in isolated areas",
        description: "Plan your movements to avoid being out alone at night. Stick to well-lit, busy areas and avoid deserted streets.",
        severity: "high",
        sourceName: "Karachi Police (2025)",
        sourceUrl: "https://karachipolice.gov.pk/"
      },
      {
        title: "Arrange airport transfers and accommodation in advance",
        description: "Book trusted airport transfers and stay in reputable hotels or hostels in safer neighborhoods like Clifton or Defence.",
        severity: "medium",
        sourceName: "Royal Routes (2025)",
        sourceUrl: "https://royalroutes.godaddysites.com/"
      }
    ], // Tips sourced from Traveler Wiz, Karachi Police, CPLC, Royal Routes (2025)
    culturalDos: [
      'Dress modestly, covering arms and legs.',
      'Greet elders with respect.',
      'Ask before taking photos of people.',
      'Use your right hand for eating and giving.',
      'Observe local customs during Ramadan.'
    ],
    culturalDonts: [
      "Don't show affection in public.",
      "Don't criticize religion or local traditions.",
      "Don't enter mosques without permission.",
      "Don't wear revealing or tight clothing.",
      "Don't discuss sensitive political topics."
    ],
    womensConfidenceScore: {
      score: 43.0, // Numbeo 2025 Safety Index for Karachi
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Karachi"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 55,
        source: 'Lost With Purpose 2024',
        sourceUrl: 'https://www.lostwithpurpose.com/female-travel-pakistan/'
      },
      {
        label: 'Nightlife',
        confidence: 30,
        source: 'Laure Wanders 2025',
        sourceUrl: 'https://www.laurewanders.com/is-pakistan-safe-for-women/'
      },
      {
        label: 'Public Transport',
        confidence: 40,
        source: 'Urraan Mobility 2025',
        sourceUrl: 'https://www.linkedin.com/company/urraan-mobility/'
      },
      {
        label: 'Dining Alone',
        confidence: 50,
        source: 'Lost With Purpose 2024',
        sourceUrl: 'https://www.lostwithpurpose.com/female-travel-pakistan/'
      }
    ],
  };

export default karachi;
