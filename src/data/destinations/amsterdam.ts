import { Destination } from './types';

const amsterdam: Destination = {
    city: 'Amsterdam',
    country: 'Netherlands',
    continent: 'Europe',
    countryCode: 'nl',
    overallScore: 8.4,
    nightSafety: 8.1,
    publicTransit: 9.0,
    walkingAlone: 8.3,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 180,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.3, context: 'Very safe to walk alone. Dutch culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Centrum', 'Jordaan', 'De Pijp', 'Oud-West'],
      caution: ['Red Light District late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Stayokay Amsterdam Vondelpark', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Estherea', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['GVB', '9292', 'Google Maps'],
      emergencyPhrases: ['Help (Help)', 'Bel de politie (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Dress is generally casual and practical, but neat. Jeans, t-shirts, and sneakers are fine in most settings. For business or upscale restaurants, smart-casual is expected. Rain gear is essential year-round. Swimwear is only for pools and beaches. Topless sunbathing is accepted in some parks and beaches, but nudity is only allowed in designated areas.',
      behaviorNorms: [
        'Respect personal space and privacy; the Dutch value directness but not intrusion.',
        'Be punctual for appointments and social events.',
        'Greet with a handshake and maintain eye contact.',
        'Tipping is appreciated (5–10%) but not mandatory.',
        'Don\'t be arrogant or boastful; humility is valued.',
        'Avoid walking in bike lanes—cyclists have priority and expect you to move.',
        'Don\'t photograph people in the Red Light District.',
        'Try to learn and use a few Dutch phrases, even though most people speak English.',
        'The Dutch are tolerant of different lifestyles and expect the same from visitors.',
        'Plan visits in advance; unannounced drop-ins are uncommon.',
        'Join in on "gezelligheid" (coziness, togetherness) in social settings.'
      ],
      perception: 'Solo women travelers are generally respected and safe in Amsterdam. The city is progressive and open-minded, but as in any major city, it\'s wise to stay aware of your surroundings, especially at night or in crowded areas. Catcalling is rare but can happen. Locals are used to solo travelers and are usually helpful if you ask for directions or advice.',
    },
    bestTimeToVisit: {
      safestMonths: ['June-August'],
      events: 'Summer is best for weather. Winter is safe but cold and dark.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is the most common crime in Amsterdam, especially at Central Station, Leidseplein, and busy trams. Keep valuables secure, use anti-theft bags, and avoid showing your phone or wallet in public.',
        severity: 'low',
        sourceName: 'The Lady Who Travels',
        sourceUrl: 'https://www.theladywhotravels.com/is-amsterdam-safe-for-solo-female-travelers/'
      },
      {
        title: 'Cycle Safely and Learn Local Bike Rules',
        description: 'Amsterdam is bike-friendly, but always use bike lanes, follow traffic signals, and be cautious of trams and pedestrians. Brush up on Dutch cycling etiquette before renting a bike.',
        severity: 'low',
        sourceName: 'TrustedHousesitters',
        sourceUrl: 'https://www.trustedhousesitters.com/blog/travel/solo-female-travel-amsterdam/'
      },
      {
        title: 'Avoid Isolated Areas Late at Night',
        description: 'Most neighborhoods are safe, but avoid walking alone in isolated or poorly lit areas after dark. Stick to well-traveled streets and use public transport or official taxis if out late.',
        severity: 'low',
        sourceName: 'A Solo Woman Traveling',
        sourceUrl: 'https://asinglewomantraveling.com/solo-trip-to-amsterdam/'
      },
      {
        title: 'Use Public Transport and Keep Emergency Numbers Handy',
        description: 'Amsterdam\'s trams, buses, and metro are safe and efficient. Save the emergency number (112) and police (0900-8844) in your phone.',
        severity: 'low',
        sourceName: 'I amsterdam',
        sourceUrl: 'https://www.iamsterdam.com/en/travel-stay/health-safety-and-crime-in-amsterdam'
      }
    ],
    languages: ['Dutch', 'English (widely spoken)'],
    daytimeSafetyPercent: 83.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Amsterdam)
    nighttimeSafetyPercent: 68.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Amsterdam)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Amsterdam',
    redFlags: [
      { label: 'Pickpocketing', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025, BMTM 2024
      { label: 'Scams (Fake Police, Taxi Scams)', frequency: 'Frequent', icon: 'Shield' }, // BMTM 2024
      { label: 'Bicycle Accidents', frequency: 'Occasional', icon: 'Bike' }, // BMTM 2024
      { label: 'Drug-related Incidents', frequency: 'Occasional', icon: 'Syringe' }, // BMTM 2024
    ],
    culturalDos: [
      'Respect personal space.',
      'Dress neat casual.',
      'Use Dutch phrases.',
      'Be on time.',
      'Be polite in public.'
    ],
    culturalDonts: [
      "Don't walk in bike lanes.",
      "Don't leave valuables unattended.",
      "Don't take photos in Red Light District.",
      "Don't buy drugs on the street.",
      "Don't pee in public."
    ],
};

export default amsterdam;
