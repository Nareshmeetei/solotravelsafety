import { Destination } from './types';

const munich: Destination = {
    city: 'Munich',
    country: 'Germany',
    continent: 'Europe',
    countryCode: 'de',
    overallScore: 8.7,
    nightSafety: 8.3,
    publicTransit: 9.0,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 150,
    lastUpdated: '3 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. German culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Altstadt-Lehel', 'Schwabing', 'Maxvorstadt', 'Haidhausen'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Euro Youth Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Bayerischer Hof', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['MVV', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '110', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: { usd: 1.1, eur: 1, gbp: 0.85 }, scamWarnings: []
    },
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Use Public Transport and Validate Tickets',
        description: 'Munich\'s U-Bahn, S-Bahn, trams, and buses are safe and efficient. Always validate your ticket before boarding to avoid fines.',
        severity: 'low',
        sourceName: 'Real Journey Travels',
        sourceUrl: 'https://www.realjourneytravels.com/is-munich-safe/'
      },
      {
        title: 'Stay in Safe, Central Neighborhoods',
        description: 'Altstadt-Lehel and Au-Haidhausen are safe, lively, and convenient for solo travelers. Avoid the main train station area late at night.',
        severity: 'low',
        sourceName: 'Real Journey Travels',
        sourceUrl: 'https://www.realjourneytravels.com/is-munich-safe/'
      },
      {
        title: 'Watch for Pickpockets at Events and Markets',
        description: 'Pickpocketing is rare but can happen at Oktoberfest, Christmas markets, and busy tourist spots. Keep valuables secure and use a money belt.',
        severity: 'low',
        sourceName: 'Real Journey Travels',
        sourceUrl: 'https://www.realjourneytravels.com/is-munich-safe/'
      },
      {
        title: 'Follow Pedestrian and Bike Lane Rules',
        description: 'Jaywalking is illegal and can result in fines. Watch for bike lanes—cyclists have the right of way and accidents are common.',
        severity: 'low',
        sourceName: 'Real Journey Travels',
        sourceUrl: 'https://www.realjourneytravels.com/is-munich-safe/'
      },
      {
        title: 'Pace Yourself at Beer Gardens and Festivals',
        description: 'Munich\'s beer is strong and festivals can get rowdy. Watch your drink, eat before drinking, and use public transport or taxis to get home safely.',
        severity: 'low',
        sourceName: 'Real Journey Travels',
        sourceUrl: 'https://www.realjourneytravels.com/is-munich-safe/'
      }
    ],
    languages: ['German', 'English (widely spoken)'],
    daytimeSafetyPercent: 88.4,
    nighttimeSafetyPercent: 73.2,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Munich',
    // Red flags based on Numbeo 2025, UK/US government advisories, and Real Journey Travels
    redFlags: [
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Scams (Fake Police, ATM, Charity)',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Drunk Behavior at Festivals',
        frequency: 'Occasional',
        icon: 'Beer',
      },
      {
        label: 'Bike Lane Accidents',
        frequency: 'Occasional',
        icon: 'Bike',
      },
    ], // Sources: https://www.numbeo.com/crime/in/Munich, https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/germany-travel-advisory.html, https://www.gov.uk/foreign-travel-advice/germany/safety-and-security, https://www.realjourneytravels.com/is-munich-safe/
    culturalDos: [
      'Greet with a handshake and make eye contact.',
      'Be punctual for appointments and tours.',
      'Respect quiet zones on public transport.',
      'Recycle and dispose of waste properly.',
      'Dress modestly in churches and traditional settings.'
    ],
    culturalDonts: [
      "Don't jaywalk or ignore pedestrian signals.",
      "Don't speak loudly in public or on transport.",
      "Don't make jokes about WWII or local history.",
      "Don't walk in bike lanes—cyclists have priority.",
      "Don't bring outside food or drink into beer gardens."
    ]
};

export default munich;
