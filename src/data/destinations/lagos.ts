import { Destination } from './types';

const lagos: Destination = {
    city: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    countryCode: 'ng',
    overallScore: 3.1,
    nightSafety: 2.0,
    publicTransit: 3.5,
    walkingAlone: 2.5,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 290,
    lastUpdated: '1 week ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 3.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 2.5, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Victoria Island', 'Ikoyi', 'Lekki'],
      caution: ['Yaba', 'Surulere'],
      avoid: ['Mushin', 'Ajegunle', 'Oshodi at night']
    },
    accommodations: [
      { name: 'Eko Hotels & Suites', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.5, notes: 'High security and professional staff.' },
      { name: 'Bogobiri House', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.1, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Oshodi', reportCount: 33, severity: 'high', dateReported: '5 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Bolt', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
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
      police: '112', fire: '119', medical: '199', general: '112'
    },
    currency: {
      name: 'Nigerian Naira', code: 'NGN', exchangeRate: { usd: 0.0013, eur: 0.0011, gbp: 0.00095 }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'ATM Scams', description: 'Criminals may offer to help at ATMs and steal cards or PINs.', severity: 'high' }
    ],
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
    daytimeSafetyPercent: 49.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    nighttimeSafetyPercent: 18.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lagos',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2025, UK Gov 2025
      { label: 'Scams (ATM, Fake Police, Internet Fraud)', frequency: 'Most common', icon: 'Shield' }, // Numbeo 2025, UK Gov 2025
      { label: 'Car Theft & Carjacking', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2025
    ],
    usefulTips: [
      {
        title: "Use registered taxis or rideshare apps only",
        description: "Avoid public transport and unregistered taxis. Use apps like Uber or Bolt for safer, trackable rides, especially at night.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Dress modestly and avoid displaying valuables",
        description: "Wear modest clothing and keep jewelry, electronics, and cash out of sight to avoid attracting attention.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Avoid walking alone after dark and in isolated areas",
        description: "Plan your movements to avoid being out alone at night. Stick to well-lit, busy areas and avoid deserted streets.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Arrange airport transfers and accommodation in advance",
        description: "Book trusted airport transfers and stay in reputable hotels or hostels in safer neighborhoods like Victoria Island or Ikoyi.",
        severity: "medium",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Stay alert for scams and keep emergency contacts handy",
        description: "Be wary of ATM scams, fake police, and internet fraud. Save local emergency numbers and your embassy contact info.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      }
    ], // Tips sourced from UK Government Travel Advice (2025)
    culturalDos: [
      'Dress modestly, covering shoulders and knees.',
      'Greet elders and locals respectfully.',
      'Ask before taking photos of people.',
      'Use your right hand for eating and giving.',
      'Respect local customs and religious practices.'
    ],
    culturalDonts: [
      "Don't show affection in public.",
      "Don't criticize religion or local traditions.",
      "Don't enter mosques or churches without permission.",
      "Don't wear revealing or tight clothing.",
      "Don't discuss sensitive political topics."
    ],
};

export default lagos;
