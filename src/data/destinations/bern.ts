import { Destination } from './types';

const bern: Destination = {
    city: 'Bern',
    country: 'Switzerland',
    continent: 'Europe',
    countryCode: 'ch',
    overallScore: 8.7,
    nightSafety: 8.4,
    publicTransit: 9.0,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 100,
    lastUpdated: '6 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.4, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.0, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.6, context: 'Very safe to walk alone. Swiss culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Old Town', 'Kirchenfeld', 'Breitenrain', 'Länggasse'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Bern Backpackers Hotel Glocke', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Schweizerhof Bern', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SBB Mobile', 'Google Maps'],
      emergencyPhrases: ['Hilfe (Help)', 'Rufen Sie die Polizei (Call the police)']
    },
    culturalExpectations: {
      dressCode: 'Practical, warm clothing. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['June-September'],
      events: 'Summer is best for weather. Winter is safe but cold.'
    },
    emergencyInfo: {
      police: '117', fire: '118', medical: '144', general: '112'
    },
    currency: {
      name: 'Swiss Franc', code: 'CHF', exchangeRate: { usd: 1.1, eur: 1.0, gbp: 0.85 }, scamWarnings: []
    },
    redFlags: [
      { label: 'Pickpocketing', frequency: 'Occasional', icon: 'Hand' },
      { label: 'Scams (Ticket/ATM/Online)', frequency: 'Rare', icon: 'Shield' },
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' },
      { label: 'Petty Theft (Luggage/Bag Snatching)', frequency: 'Rare', icon: 'Briefcase' },
    ],
    scamWarnings: [],
    usefulTips: [
      {
        title: 'Stay in the Old Town or Central Areas',
        description: 'Bern\'s UNESCO-listed Old Town is safe, lively, and well-lit at night. Choose accommodation in central neighborhoods for easy access to attractions and public transport.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Use Public Transport and the Bern Ticket',
        description: 'Bern\'s trams and buses are safe, clean, and efficient. If you stay overnight, you get a free Bern Ticket for unlimited public transport in the city.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Be Cautious with Valuables at Tourist Sites',
        description: 'Pickpocketing is rare but can occur in busy areas like the Zytglogge, train stations, and markets. Keep your bag zipped and don\'t leave valuables unattended.',
        severity: 'low',
        sourceName: 'gov.ch',
        sourceUrl: 'https://www.ch.ch/en/safety-in-switzerland/'
      },
      {
        title: 'Swim Safely in the River Aare',
        description: 'Swimming in the Aare is a local tradition, but currents can be strong. Only swim in designated areas and follow local advice.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      },
      {
        title: 'Respect Local Customs and Quiet Hours',
        description: 'The Swiss value politeness and quiet, especially in residential areas and on public transport. Greet with "Grüezi" and observe posted quiet hours.',
        severity: 'low',
        sourceName: 'MySwitzerland',
        sourceUrl: 'https://www.myswitzerland.com/en-us/destinations/bern/'
      }
    ],
    languages: ['German', 'English (widely spoken)'],
    daytimeSafetyPercent: 89.0,
    nighttimeSafetyPercent: 80.0,
    safetySourceName: 'Travel Ladies 2025',
    safetySourceUrl: 'https://travelladies.app/safety/switzerland',
};

export default bern;
