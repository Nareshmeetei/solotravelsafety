import { Destination } from './types';

const auckland: Destination = {
    city: 'Auckland',
    country: 'New Zealand',
    continent: 'Oceania',
    countryCode: 'nz',
    overallScore: 8.6,
    nightSafety: 8.3,
    publicTransit: 8.7,
    walkingAlone: 8.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 150,
    lastUpdated: '4 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.3, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.5, context: 'Very safe to walk alone. Kiwi culture is respectful.' }
    },
    neighborhoods: {
      safe: ['CBD', 'Ponsonby', 'Parnell', 'Mount Eden'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Haka Lodge Auckland', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Cordis Auckland', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Auckland can be rainy.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['AT Mobile', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '111', fire: '111', medical: '111', general: '111'
    },
    currency: {
      name: 'New Zealand Dollar', code: 'NZD', exchangeRate: { usd: 0.62, eur: 0.56, gbp: 0.48 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'Māori'],
    daytimeSafetyPercent: 68.8,
    nighttimeSafetyPercent: 38.8,
    redFlags: [
      { label: 'Theft & Property Crime', frequency: 'Most common', icon: 'Hand' }, // Numbeo 2025
      { label: 'Violent Assaults', frequency: 'Frequent', icon: 'PocketKnife' }, // Numbeo 2025
      { label: 'Drug-Related Incidents', frequency: 'Frequent', icon: 'Syringe' }, // Numbeo 2025
      { label: 'Gang Activity & Ram Raids', frequency: 'Occasional', icon: 'Users' }, // Numbeo 2025
    ],
    usefulTips: [
      {
        title: 'Stay in Well-Lit, Central Areas',
        description: 'Choose accommodation in central, busy neighborhoods like the CBD or Ponsonby for better access to amenities and safety at night.',
        severity: 'low',
        sourceName: 'newzealand.com',
        sourceUrl: 'https://www.newzealand.com/int/feature/auckland-city/'
      },
      {
        title: 'Use Public Transport and Official Taxis',
        description: 'Auckland\'s buses, trains, and ferries are safe and reliable. For late-night travel, use official taxi apps or rideshares.',
        severity: 'low',
        sourceName: 'newzealand.com',
        sourceUrl: 'https://www.newzealand.com/int/feature/auckland-transport/'
      },
      {
        title: 'Be Sun Smart and Weather Ready',
        description: 'The UV index in New Zealand is very high. Wear sunscreen, a hat, and sunglasses, and always check the weather before heading out, as it can change quickly.',
        severity: 'low',
        sourceName: 'govt.nz',
        sourceUrl: 'https://www.govt.nz/browse/health/sun-safety/'
      },
      {
        title: 'Keep Valuables Secure in Tourist Areas',
        description: 'Petty theft and car break-ins can occur, especially at beaches and trailheads. Don\'t leave valuables in your car and keep your bag zipped in busy places.',
        severity: 'low',
        sourceName: 'govt.nz',
        sourceUrl: 'https://www.govt.nz/browse/travel-and-tourism/safety-tips/'
      },
      {
        title: 'Respect Local Customs and Emergency Numbers',
        description: 'Kiwis are friendly and helpful. Learn a few local phrases and save emergency numbers (111 for police, fire, ambulance) in your phone.',
        severity: 'low',
        sourceName: 'newzealand.com',
        sourceUrl: 'https://www.newzealand.com/int/feature/auckland-city/'
      }
    ],
  };

export default auckland;
