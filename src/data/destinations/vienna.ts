import { Destination } from './types';

const vienna: Destination = {
    city: 'Vienna',
    country: 'Austria',
    continent: 'Europe',
    countryCode: 'at',
    overallScore: 8.6,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.4, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Austrian culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Innere Stadt', 'Leopoldstadt', 'Landstraße', 'Mariahilf', 'Neubau'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Hotel Sacher Wien', type: 'hotel', features: ['Central location', 'Luxury', 'Safe'], rating: 4.8, notes: 'Famous luxury hotel in the city center' },
      { name: "Wombat's City Hostel Vienna", type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Kämp', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['WienMobil', 'Qando', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
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
      police: '133', fire: '122', medical: '144', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    usefulTips: [
      {
        title: 'Use Public Transport for Safety and Convenience',
        description: 'Vienna\'s public transport is safe, reliable, and well-lit at night. Prefer trams, buses, and the U-Bahn over walking alone late at night.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/austria/vienna'
      },
      {
        title: 'Stay in Central Districts',
        description: 'Choose accommodation in central areas like Innere Stadt, Mariahilf, or Neubau for easy access to attractions and enhanced safety.',
        severity: 'low',
        sourceName: 'HousingAnywhere',
        sourceUrl: 'https://housinganywhere.com/Vienna--Austria/areas-to-avoid-in-vienna'
      },
      {
        title: 'Be Aware of Pickpockets in Tourist Spots',
        description: 'Pickpocketing is rare but can occur in crowded places like Stephansplatz, public transport, and markets. Keep your belongings secure.',
        severity: 'low',
        sourceName: 'Numbeo',
        sourceUrl: 'https://www.numbeo.com/crime/in/Vienna'
      },
      {
        title: 'Trust Your Instincts and Avoid Aggressive Beggars',
        description: 'If approached by aggressive beggars or scammers, politely decline and walk away. Report any suspicious activity to local authorities.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/austria/vienna'
      },
      {
        title: 'Download the WienMobil App',
        description: 'The WienMobil app helps you navigate Vienna\'s public transport and provides real-time safety and route information.',
        severity: 'low',
        sourceName: 'WienMobil',
        sourceUrl: 'https://www.wienerlinien.at/wienmobil-app'
      }
    ],
    languages: ['German', 'English (widely spoken)'],
    daytimeSafetyPercent: 88.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 82.0, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Vienna',
    womensConfidenceScore: {
      score: 82.0, // Numbeo 2025, Travel Ladies 2025
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 97,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 90,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 98,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 95,
        source: '',
        sourceUrl: ''
      }
    ],
    // Red flags based on Numbeo 2025, Travel Ladies, and local safety advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Vienna
    // https://travelladies.app/safety/austria
    // https://housinganywhere.com/Vienna--Austria/areas-to-avoid-in-vienna
    redFlags: [
      {
        label: 'Pickpocketing in Crowded Areas & Transit',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Scams (Fake Police, ATM, Charity)',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Street Harassment (Catcalling, Staring)',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      },
      {
        label: 'Bike Theft',
        frequency: 'Rare',
        icon: 'Bike',
      },
    ],
    culturalDos: [
      'Greet with a polite "Guten Tag" and use formal titles.',
      'Be punctual for meetings and public transport.',
      'Respect quiet zones and personal space.',
      'Dress neatly, especially in restaurants and theaters.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about Austria's history or politics."
    ],
    scamWarnings: []
};

export default vienna;
