import { Destination } from './types';

const brisbane: Destination = {
    city: 'Brisbane',
    country: 'Australia',
    continent: 'Oceania',
    countryCode: 'au',
    overallScore: 8.5,
    nightSafety: 8.1,
    publicTransit: 8.7,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 130,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.4, context: 'Very safe to walk alone. Australian culture is respectful.' }
    },
    neighborhoods: {
      safe: ['CBD', 'South Bank', 'Fortitude Valley', 'New Farm'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Bunk Brisbane', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Emporium Hotel South Bank', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.7, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Brisbane is warm and sunny.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['TransLink', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Dry season is best for weather. Summer is safe but hot.'
    },
    emergencyInfo: {
      police: '000', fire: '000', medical: '000', general: '000'
    },
    currency: {
      name: 'Australian Dollar', code: 'AUD', exchangeRate: { usd: 0.75, eur: 0.68, gbp: 0.58 }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English'],
    daytimeSafetyPercent: 78.9,
    nighttimeSafetyPercent: 49.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Brisbane',
    redFlags: [
      { label: 'Petty Theft (Pickpocketing, Bag Snatching)', frequency: 'Most common', icon: 'Hand' },
      { label: 'Drug-Related Incidents', frequency: 'Frequent', icon: 'Syringe' },
      { label: 'Alcohol-Related Violence (Nightlife Areas)', frequency: 'Occasional', icon: 'Beer' },
      { label: 'Scams (Overcharging, Fake Tours)', frequency: 'Occasional', icon: 'Shield' },
    ],
    usefulTips: [
      {
        title: "Stick to well-lit, busy areas at night",
        description: "Plan your routes and use well-lit, populated areas when walking at night. Brisbane is generally safe, but caution is advised after dark.",
        severity: "low",
        sourceName: "Brisbane City Council",
        sourceUrl: "https://www.brisbane.qld.gov.au/community-support-and-safety/health-and-safety/personal-safety"
      },
      {
        title: "Use public transport or rideshare late at night",
        description: "Use public transport or reputable rideshare apps (like Uber or Ola) for late-night travel. Avoid walking alone in nightlife districts after midnight.",
        severity: "low",
        sourceName: "Brisbane City Council",
        sourceUrl: "https://www.brisbane.qld.gov.au/community-support-and-safety/health-and-safety/personal-safety"
      },
      {
        title: "Secure your valuables at public swimming spots",
        description: "Keep valuables out of sight and use lockers at public swimming spots like South Bank's Streets Beach.",
        severity: "low",
        sourceName: "The Accidental Australian",
        sourceUrl: "https://www.theaccidentalaustralian.com/best-things-to-do-in-brisbane-as-a-solo-traveller/"
      },
      {
        title: "Stay hydrated and sun safe",
        description: "Stay hydrated and protect yourself from the sun—Brisbane can be very hot and humid, especially in summer.",
        severity: "low",
        sourceName: "Visit Brisbane",
        sourceUrl: "https://visit.brisbane.qld.au/plan/visitor-essentials/tips-and-faqs"
      },
      {
        title: "Trust your instincts and know emergency numbers",
        description: "Trust your instincts and remove yourself from any situation that feels unsafe. Emergency number is 000.",
        severity: "low",
        sourceName: "Brisbane City Council",
        sourceUrl: "https://www.brisbane.qld.gov.au/community-support-and-safety/health-and-safety/personal-safety"
      }
    ], // Tips sourced from Brisbane City Council, Visit Brisbane, and The Accidental Australian (2025)
    culturalDos: [
      'Greet with a friendly hello and make eye contact.',
      'Respect personal space and privacy.',
      'Queue patiently and wait your turn.',
      'Dress casually and appropriately for the weather.',
      'Use polite language and thank yous.'
    ],
    culturalDonts: [
      "Don't walk alone in dark or quiet areas at night.",
      "Don't leave valuables unattended in public.",
      "Don't hitchhike; it's illegal in Queensland.",
      "Don't drink excessively in unfamiliar places.",
      "Don't ignore local laws or park rules."
    ],
};

export default brisbane;
