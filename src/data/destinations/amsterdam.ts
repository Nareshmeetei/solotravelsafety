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
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
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
      },
      {
        title: 'Don\'t Accept Drinks from Strangers and Watch Your Drink',
        description: 'Drink spiking can happen in nightlife areas. Never leave your drink unattended and don\'t accept drinks from strangers.',
        severity: 'low',
        sourceName: 'A Solo Woman Traveling',
        sourceUrl: 'https://asinglewomantraveling.com/solo-trip-to-amsterdam/'
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
};

export default amsterdam;
