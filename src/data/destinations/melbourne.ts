import { Destination } from './types';

const melbourne: Destination = {
    city: 'Melbourne',
    country: 'Australia',
    continent: 'Oceania',
    countryCode: 'au',
    overallScore: 8.7,
    nightSafety: 8.2,
    publicTransit: 8.9,
    walkingAlone: 8.8,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 170,
    lastUpdated: '5 days ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.9, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 8.8, context: 'Very safe to walk alone. Australian culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['CBD', 'Fitzroy', 'St Kilda', 'Southbank'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Space Hotel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'The Langham Melbourne', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Melbourne can be unpredictable.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['PTV', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Help!', 'Call the police!']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-March'],
      events: 'Summer is best for weather. Winter is safe but cold.'
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
    daytimeSafetyPercent: 72.5,
    nighttimeSafetyPercent: 43.2,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Melbourne',
    redFlags: [
      { label: 'Theft & Shoplifting (Tourist Areas, CBD)', frequency: 'Most common', icon: 'Hand' },
      { label: 'Alcohol-Related Violence (Nightlife Areas)', frequency: 'Occasional', icon: 'Beer' },
      { label: 'Scams (ATM, Online, Ticket)', frequency: 'Occasional', icon: 'Shield' },
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' },
    ],
    usefulTips: [
      {
        title: "Use public transport and official taxis at night",
        description: "Melbourne's trams, trains, and buses are safe and reliable. For late-night travel, use official taxis or rideshare apps like Uber for added security.",
        severity: "low",
        sourceName: "Visit Victoria (Official Tourism)",
        sourceUrl: "https://www.visitvictoria.com/Information/Travel-information/Safety"
      },
      {
        title: "Stay in well-reviewed, central neighborhoods",
        description: "Choose accommodation in the CBD, Fitzroy, or Southbank for easy access to attractions and a safe environment, especially after dark.",
        severity: "low",
        sourceName: "Travel Ladies Melbourne Guide",
        sourceUrl: "https://travelladies.app/destination/oceania/australia/melbourne"
      },
      {
        title: "Keep valuables secure and be alert for pickpockets",
        description: "Petty theft is rare but can occur in crowded areas like Queen Victoria Market and public transport. Use anti-theft bags and keep your phone and wallet out of sight.",
        severity: "low",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/australia/safety-and-security"
      },
      {
        title: "Dress for the weather and blend in",
        description: "Melbourne weather is unpredictable—carry a jacket and umbrella. Dress casually to blend in and avoid drawing unwanted attention.",
        severity: "low",
        sourceName: "Everything Victoria (Local Guide)",
        sourceUrl: "https://everythingvictoria.com.au/things-to-do-melbourne-australia/"
      },
      {
        title: "Know emergency contacts and use YourGround for safety mapping",
        description: "Save emergency numbers (000 for police, fire, ambulance). Use the YourGround map to check and report safe/unsafe areas for women and gender-diverse travelers.",
        severity: "low",
        sourceName: "YourGround Victoria",
        sourceUrl: "https://www.yourground.org/"
      }
    ],
    culturalDos: [
      'Respect personal space and privacy.',
      'Queue politely and wait your turn.',
      'Dress casually and appropriately for the weather.',
      'Be punctual for meetings and events.',
      'Use polite greetings and thank yous.'
    ],
    culturalDonts: [
      "Don't be loud or disruptive in public.",
      "Don't cut in line or push ahead.",
      "Don't make jokes about race or religion.",
      "Don't stare at others or invade personal space.",
      "Don't litter or disrespect public spaces."
    ],
  };

export default melbourne;
