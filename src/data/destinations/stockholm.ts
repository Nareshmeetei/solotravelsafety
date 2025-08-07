import { Destination } from './types';

const stockholm: Destination = {
    city: 'Stockholm',
    country: 'Sweden',
    continent: 'Europe',
          countryCode: 'se',
    overallScore: 8.8,
    nightSafety: 8.6,
    publicTransit: 9.1,
    walkingAlone: 8.9,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 200,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.6, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.1, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.9, context: 'Very safe to walk alone. Swedish culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Norrmalm', 'Östermalm', 'Södermalm', 'Kungsholmen'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'City Backpackers Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Hotel Rival', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['SL', 'Res i Sthlm', 'Google Maps'],
      emergencyPhrases: ['Hjälp (Help)', 'Ring polisen (Call the police)']
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
      name: 'Swedish Krona', code: 'SEK', exchangeRate: {
      usd: 0.1050,
      eur: 0.0895,
      gbp: 0.0782
    }, scamWarnings: []
    },
    usefulTips: [
      {
        title: 'Use Licensed Taxis and Public Transport',
        description: 'Stockholm\'s public transport is safe and efficient. For taxis, use licensed companies like Taxi Stockholm or apps like Uber. Avoid unregistered vehicles.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Stay Alert for Pickpockets in Crowded Areas',
        description: 'Pickpocketing is most common in tourist areas, train stations, and public transport. Keep valuables secure and be alert in busy places.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Avoid Isolated Parks and Suburbs at Night',
        description: 'Stick to well-lit, populated areas after dark. Avoid isolated parks and certain suburbs (e.g., Rinkeby, Tensta, Husby) at night.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Dress for the Weather and Walk Carefully',
        description: 'Stockholm weather can change quickly. Wear layers, waterproof clothing, and shoes with good traction, especially in winter.',
        severity: 'low',
        sourceName: 'OneVasco',
        sourceUrl: 'https://www.onevasco.com/blog/safe-to-visit/sweden'
      },
      {
        title: 'Use Credit Cards and Payment Apps',
        description: 'Stockholm is largely cashless. Use credit cards or payment apps for most transactions and avoid carrying large amounts of cash.',
        severity: 'low',
        sourceName: 'Nannybag',
        sourceUrl: 'https://www.nannybag.com/en/guides/stockholm/stockholm-travel-apps-you-should-download-for-your-trip'
      }
    ],
    languages: ['Swedish', 'English (widely spoken)'],
    daytimeSafetyPercent: 87.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Stockholm)
    nighttimeSafetyPercent: 65.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Stockholm)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Stockholm',
    // Red flags based on Numbeo 2025, OneVasco, and GoDigit
    // Sources:
    // https://www.numbeo.com/crime/in/Stockholm
    // https://www.onevasco.com/blog/safe-to-visit/sweden
    // https://www.godigit.com/international-travel-insurance/tourist-scams/tourist-scams-in-sweden
    redFlags: [
      {
        label: 'Pickpocketing in Tourist Areas & Public Transit',
        frequency: 'Frequent',
        icon: 'Hand',
      },
      {
        label: 'Taxi Overcharging/Unlicensed Taxis',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'ATM Skimming & Card Fraud',
        frequency: 'Occasional',
        icon: 'CreditCard',
      },
      {
        label: 'Bar/Restaurant Overcharging Scams',
        frequency: 'Occasional',
        icon: 'Beer',
      }
    ],
  culturalSensitivity: {
    culturalDos: [
      'Respect personal space and keep a polite distance.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Use quiet voices in public and on transport.',
      'Recycle and dispose of waste properly.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in nature.",
      "Don't make jokes about Sweden\'s history or politics."
    ]
  },
  scamWarnings: [],
    womensConfidenceScore: {
      score: 53.9,
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 92,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 85,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 96,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 93,
        source: '',
        sourceUrl: ''
      }
    ],
  legalResources: {
      embassy: {
        name: 'U.S. Embassy {city}',
        address: '{address}',
        phone: '{phone}',
        email: 'consular{country-code}@state.gov',
        emergency: '{phone}',
        link: 'https://{country-code}.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://www.gov.uk/world/organisations/british-embassy-stockholm'
        },
        {
          name: 'Embassy of Germany in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://se.diplo.de/'
        },
        {
          name: 'Embassy of France in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://se.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://www.exteriores.gob.es/embajadas/stockholm'
        },
        {
          name: 'Australian Embassy Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://se.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://www.canadainternational.gc.ca/se-sweden/'
        },
        {
          name: 'Embassy of the Netherlands in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/sweden'
        },
        {
          name: 'Embassy of Denmark in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://se.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://www.eda.admin.ch/stockholm'
        },
        {
          name: 'Embassy of India in Stockholm',
          address: 'Dag Hammarskjölds väg 31, 115 89 Stockholm',
          phone: '+46 8 783 5300',
          link: 'https://www.indianembassyse.gov.in/'
        }
      ],
      womensRights: [
        'Legal framework for women\'s rights varies by country',
        'Contact local embassy for specific information',
        'International women\'s rights organizations available'
      ],
      legalSupport: [
        'Contact local embassy for legal assistance',
        'International legal aid organizations available',
        'English-speaking lawyers available through embassy referrals'
      ],
      reportingProcedures: [
        'Report crimes to local police immediately',
        'Contact embassy for consular assistance',
        'Document all incidents with photos and details',
        'Keep copies of all police reports'
      ]
    }
};

export default stockholm;
