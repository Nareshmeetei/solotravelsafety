import { Destination } from './types';

const edinburgh: Destination = {
    city: 'Edinburgh',
    country: 'United Kingdom',
    continent: 'Europe',
    countryCode: 'gb',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 140,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.8, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Scottish culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Old Town', 'New Town', 'Stockbridge', 'Leith'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Castle Rock Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'The Balmoral Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Scotland can be rainy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['Lothian Buses', 'ScotRail', 'Google Maps']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '999', fire: '999', medical: '999', general: '999'
    },
    currency: {
      name: 'Pound Sterling', code: 'GBP', exchangeRate: { usd: 1.3, eur: 1.1, gbp: 1 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Scots Gaelic'],
    daytimeSafetyPercent: 82.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Edinburgh)
    nighttimeSafetyPercent: 62.0, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Edinburgh)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Edinburgh',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Festivals)', frequency: 'Occasional', icon: 'Hand' }, // Numbeo 2025, Qeepl 2025
      { label: 'Bag Snatching (Public Transport, Cafés)', frequency: 'Rare', icon: 'Briefcase' }, // Qeepl 2025
      { label: 'Scam Artists (Fake Tours, Tickets)', frequency: 'Rare', icon: 'Shield' }, // Qeepl 2025
      { label: 'Alcohol-Related Disturbances (Nightlife)', frequency: 'Occasional', icon: 'Beer' }, // Qeepl 2025
    ],
    usefulTips: [
      {
        title: "Stay in well-reviewed, central neighborhoods",
        description: "Choose accommodation in areas like Old Town, New Town, or Stockbridge for safety, walkability, and easy access to attractions.",
        severity: "low",
        sourceName: "Alyssa O Writes, 2025",
        sourceUrl: "https://alyssaowrites.com/23-best-hotels-edinburgh-solo-female-travellers/"
      },
      {
        title: "Be vigilant at night and avoid dark alleys",
        description: "Stick to well-lit streets, especially after enjoying Edinburgh's nightlife. Avoid walking alone through parks or alleys late at night.",
        severity: "low",
        sourceName: "Finding Alexx, 2025",
        sourceUrl: "https://findingalexx.com/edinburgh-solo-travel-guide/"
      },
      {
        title: "Keep valuables secure in busy areas",
        description: "Use a cross-body bag with a zip and keep your phone and wallet close, especially during festivals or on public transport.",
        severity: "low",
        sourceName: "Qeepl, 2025",
        sourceUrl: "https://qeepl.com/en/blog/is-edinburgh-safe-a-tourist-s-guide-to-safety-and-security"
      },
      {
        title: "Use public transport and official taxis",
        description: "Edinburgh's buses and trams are safe and reliable. At night, sit near the driver and avoid empty upper decks.",
        severity: "low",
        sourceName: "VisitScotland, 2025",
        sourceUrl: "https://www.visitscotland.com/travel-planning/solo-travel"
      },
      {
        title: "Prepare for changing weather and hiking safety",
        description: "Scottish weather is unpredictable. Carry layers, and if hiking Arthur's Seat or other trails, let someone know your plans and bring essentials.",
        severity: "low",
        sourceName: "Finding Alexx, 2025",
        sourceUrl: "https://findingalexx.com/edinburgh-solo-travel-guide/"
      }
    ], // Tips sourced from Alyssa O Writes, Finding Alexx, Qeepl, VisitScotland (2025)
    culturalDos: [
      'Greet with a friendly hello or good morning.',
      'Respect local festivals and traditions.',
      'Dress modestly in churches or formal events.',
      'Queue patiently and wait your turn.',
      'Learn a few Scottish phrases.'
    ],
    culturalDonts: [
      "Don't joke about Scottish history or accents.",
      "Don't speak loudly in public places.",
      "Don't refuse hospitality abruptly.",
      "Don't take photos in churches or of people without asking.",
      "Don't be overly familiar with strangers."
    ],
    womensConfidenceScore: {
      score: 68.8, // Numbeo 2025 Safety Index for Edinburgh
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Edinburgh"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 90,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/united-kingdom/edinburgh'
      },
      {
        label: 'Nightlife',
        confidence: 75,
        source: 'Alyssa O Writes 2025',
        sourceUrl: 'https://alyssaowrites.com/edinburgh-3-day-itinerary/'
      },
      {
        label: 'Public Transport',
        confidence: 92,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/united-kingdom/edinburgh'
      },
      {
        label: 'Dining Alone',
        confidence: 88,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/edinburgh/'
      }
    ],
};

export default edinburgh;
