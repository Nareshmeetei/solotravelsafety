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
    lastUpdated: '1 day ago',
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
      { name: "Wombat\'s City Hostel Vienna", type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.6, notes: 'Popular with solo travelers, safe and clean.' },
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
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
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
  culturalSensitivity: {
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
      "Don't make jokes about Austria\'s history or politics."
    ]
  },
  scamWarnings: [],
  legalResources: {
      embassy: {
        name: 'U.S. Embassy Vienna',
        address: 'Boltzmanngasse 16, 1090 Vienna',
        phone: '+43 1 313 39 0',
        email: 'viennaACS@state.gov',
        emergency: '+43 1 313 39 0',
        link: 'https://at.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Vienna',
          address: 'Boltzmanngasse 16, 1090 Vienna',
          phone: '+43 1 313 39 0',
          link: 'https://at.usembassy.gov/'
        },
        {
          name: 'British Embassy Vienna',
          address: 'Jaurèsgasse 12, 1030 Vienna',
          phone: '+43 1 716 13 0',
          link: 'https://www.gov.uk/world/organisations/british-embassy-vienna'
        },
        {
          name: 'German Embassy Vienna',
          address: 'Gaudenzdorfer Gürtel 95, 1120 Vienna',
          phone: '+43 1 711 54 0',
          link: 'https://wien.diplo.de/'
        },
        {
          name: 'French Embassy Vienna',
          address: 'Technikerstrasse 2, 1040 Vienna',
          phone: '+43 1 502 75 0',
          link: 'https://at.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Vienna',
          address: 'Argentinierstrasse 34, 1040 Vienna',
          phone: '+43 1 505 57 88',
          link: 'https://www.exteriores.gob.es/embajadas/viena'
        },
        {
          name: 'Australian Embassy Vienna',
          address: 'Mattiellistrasse 2-4, 1040 Vienna',
          phone: '+43 1 506 74 0',
          link: 'https://austria.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Vienna',
          address: 'Laurenzerberg 2, 1010 Vienna',
          phone: '+43 1 531 38 3000',
          link: 'https://www.canadainternational.gc.ca/austria-autriche/'
        },
        {
          name: 'Netherlands Embassy Vienna',
          address: 'Opernring 5, 1010 Vienna',
          phone: '+43 1 589 39 200',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/austria'
        },
        {
          name: 'Danish Embassy Vienna',
          address: 'Führichgasse 6, 1010 Vienna',
          phone: '+43 1 512 79 04',
          link: 'https://oesterreich.um.dk/en'
        },
        {
          name: 'Austrian Government Services',
          address: 'Multiple locations throughout Vienna',
          phone: '+43 1 711 00 0',
          link: 'https://www.oesterreich.gv.at/'
        },
        {
          name: 'Swiss Embassy Vienna',
          address: 'Prinz-Eugen-Strasse 7, 1040 Vienna',
          phone: '+43 1 795 05 0',
          link: 'https://www.eda.admin.ch/wien'
        },
        {
          name: 'Indian Embassy Vienna',
          address: 'Kärntner Ring 2, 1010 Vienna',
          phone: '+43 1 505 86 66',
          link: 'https://www.indianembassy.at/'
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

export default vienna;
