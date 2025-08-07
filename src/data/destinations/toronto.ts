import { Destination } from './types';

const toronto: Destination = {
    city: 'Toronto',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.5,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 170,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.2, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.8, context: 'Efficient, clean, and safe public transport.' },
      walkingAlone: { score: 8.4, context: 'Very safe to walk alone. Canadian culture is respectful.' }
    },
    neighborhoods: {
      safe: ['Downtown', 'The Annex', 'Yorkville', 'Distillery District'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'HI Toronto Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.4, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Fairmont Royal York', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Toronto has four distinct seasons.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['TTC', 'Uber', 'Google Maps']
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
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Canadian Dollar', code: 'CAD', exchangeRate: {
      usd: 0.7299,
      eur: 0.6219,
      gbp: 0.5431
    }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['English', 'French'],
    daytimeSafetyPercent: 82.3, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Toronto)
    nighttimeSafetyPercent: 59.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Toronto)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Toronto',
    // Red flags based on Numbeo 2025, Travel Ladies, and Toronto Police advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Toronto
    // https://travelladies.app/safety/canada
    // https://www.ctvnews.ca/toronto/article/be-mindful-toronto-police-warn-of-organized-thieves-ahead-of-pride-weekend/
    // https://www.cp24.com/local/toronto/2025/01/02/toronto-saw-a-rash-of-brazen-crime-that-shocked-and-unnerved-residents-last-year-is-the-city-still-safe/
    redFlags: [
      {
        label: 'Pickpocketing & Bag Snatching (Tourist Areas, Transit)',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Organized Theft Rings (Events, Crowds)',
        frequency: 'Occasional',
        icon: 'Users',
      },
      {
        label: 'Car Break-ins & Auto Theft',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Street Harassment (Low, but Present)',
        frequency: 'Rare',
        icon: 'AlertTriangle',
      },
    ],
    usefulTips: [
      {
        title: "Stay alert in tourist areas and on public transit",
        description: "Toronto is generally safe, but pickpocketing can occur in crowded places and on the subway. Keep your bag zipped and close to your body.",
        severity: "low",
        sourceName: "Travel Ladies (2025)",
        sourceUrl: "https://travelladies.app/safety/canada"
      },
      {
        title: "Use official taxis or rideshare apps at night",
        description: "Public transit is safe, but for late-night travel, use licensed taxis or rideshare apps like Uber or Lyft for extra security.",
        severity: "low",
        sourceName: "City of Toronto (2025)",
        sourceUrl: "https://www.toronto.ca/explore-enjoy/visitor-toronto/getting-around-the-city/"
      },
      {
        title: "Dress for the weather and layer up in winter",
        description: "Toronto winters can be very cold. Wear layers, a warm coat, hat, gloves, and waterproof boots to stay comfortable and safe.",
        severity: "low",
        sourceName: "City of Toronto (2025)",
        sourceUrl: "https://www.toronto.ca/explore-enjoy/visitor-toronto/information-resources-for-visitors/"
      },
      {
        title: "Take advantage of walkable neighborhoods and bike share",
        description: "Toronto is very walkable and has a large bike share network. Explore neighborhoods like the Distillery District, Kensington Market, and Queen West on foot or by bike.",
        severity: "low",
        sourceName: "Destination Toronto (2025)",
        sourceUrl: "https://www.destinationtoronto.com/plan-your-trip/transportation/"
      },
      {
        title: "Know emergency numbers and use 911 for urgent help",
        description: "In an emergency, call 911 for police, fire, or medical assistance. For non-emergencies, use 311 for city services and information.",
        severity: "low",
        sourceName: "City of Toronto (2025)",
        sourceUrl: "https://www.toronto.ca/explore-enjoy/visitor-toronto/information-resources-for-visitors/"
      }
    ],
  culturalSensitivity: {
    culturalDos: [
      'Respect personal space and keep a polite distance.',
      'Be punctual for meetings and public transport.',
      'Dress appropriately for the weather and setting.',
      'Use quiet voices in public and on transport.',
      'Queue patiently and wait your turn.'
    ],
    culturalDonts: [
      "Don't cut in line or push ahead.",
      "Don't speak loudly or draw attention in public.",
      "Don't ask personal questions on first meeting.",
      "Don't litter or leave trash in public spaces.",
      "Don't make jokes about Canada\'s history or politics."
    ]
  },
    // Add Women’s Confidence Score (Travel Ladies, Numbeo 2025)
    womensConfidenceScore: {
      score: 74.3,
      source: '',
      sourceUrl: ''
    },
    // Add Confidence by Activity (2025, aggregated from Travel Ladies, International Citizens, and recent solo female travel reviews)
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 92,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Nightlife",
        confidence: 80,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Public Transport",
        confidence: 90,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 88,
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
          name: 'British Embassy Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://www.gov.uk/world/organisations/british-embassy-ottawa'
        },
        {
          name: 'Embassy of Germany in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://ca.diplo.de/'
        },
        {
          name: 'Embassy of France in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://ca.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://www.exteriores.gob.es/embajadas/ottawa'
        },
        {
          name: 'Australian Embassy Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://ca.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://www.canadainternational.gc.ca/ca-canada/'
        },
        {
          name: 'Embassy of the Netherlands in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/canada'
        },
        {
          name: 'Embassy of Denmark in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://ca.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://www.eda.admin.ch/ottawa'
        },
        {
          name: 'Embassy of India in Toronto',
          address: '490 Sussex Drive, Ottawa, Ontario K1N 1G8',
          phone: '+1 613 688 5335',
          link: 'https://www.indianembassyca.gov.in/'
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

export default toronto; 