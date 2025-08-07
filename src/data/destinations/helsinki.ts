import { Destination } from './types';

const helsinki: Destination = {
    city: 'Helsinki',
    country: 'Finland',
    continent: 'Europe',
    countryCode: 'fi',
    overallScore: 9.3,
    nightSafety: 9.1,
    publicTransit: 9.2,
    walkingAlone: 9.5,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 210,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 9.1, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 9.2, context: 'Efficient, clean, and safe public transport. Trams and buses are reliable.' },
      walkingAlone: { score: 9.5, context: 'Extremely safe to walk alone. Finnish culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Kamppi', 'Punavuori', 'Kallio', 'Eira', 'Töölö'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'Omena Hotel Helsinki', type: 'hotel', features: ['Central location', 'Affordable', 'Safe'], rating: 4.2, notes: 'Simple, clean, and safe hotel in the city center' },
      { name: 'Hostel Diana Park', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.5, notes: 'Popular with solo travelers, safe and clean.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress warmly, especially in winter. Layering is key.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['HSL', 'Reittiopas', 'Nysse'],
      emergencyPhrases: ['Apu (Help)', 'Soita poliisille (Call the police)']
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
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: ['Very few scams', 'Pickpocketing in tourist areas is rare but possible']
    },
    scamWarnings: [
      { title: 'Pickpocketing', description: 'Rare but possible in tourist areas', severity: 'low' }
    ],
    languages: ['Finnish', 'Swedish', 'English (widely spoken)'],
    daytimeSafetyPercent: 93.5, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 88.0, // Source: Numbeo 2025, Travel Ladies 2025
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Helsinki',
    redFlags: [
      { label: 'Pickpocketing (Tourist Areas, Public Transport)', frequency: 'Occasional', icon: 'Hand' }, // Numbeo 2025, Travel Ladies 2025
      { label: 'Bicycle Theft', frequency: 'Occasional', icon: 'Bike' }, // Numbeo 2025
      { label: 'Scams (Fake Charities, Overcharging)', frequency: 'Rare', icon: 'Shield' }, // Travel Ladies 2025
      { label: 'Drunken Disturbances (Nightlife)', frequency: 'Rare', icon: 'Beer' }, // Travel Ladies 2025
    ],
    usefulTips: [
      {
        title: "Take advantage of Helsinki\'s safe, walkable city center",
        description: "Most attractions are within walking distance. The city is compact, well-lit, and safe for solo exploration day or night.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/guide-to-helsinki/"
      },
      {
        title: "Use public transport and city bikes for easy, safe travel",
        description: "Helsinki's HSL app covers trams, buses, metro, and city bikes. All are reliable, clean, and safe for solo travelers.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/getting-around/"
      },
      {
        title: "Keep an eye on your belongings in crowded areas",
        description: "Pickpocketing is rare but possible in busy tourist spots and on public transport. Use a zipped bag and stay aware.",
        severity: "low",
        sourceName: "Numbeo, 2025",
        sourceUrl: "https://www.numbeo.com/crime/in/Helsinki"
      },
      {
        title: "Try a sauna for a true Finnish experience",
        description: "Public saunas are safe, welcoming, and a great way to meet locals. Follow posted etiquette and enjoy the tradition.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/guide-to-helsinki/"
      },
      {
        title: "Dress for the weather and pack layers",
        description: "Helsinki weather can change quickly, especially in winter. Bring warm, waterproof layers and comfortable shoes for walking.",
        severity: "low",
        sourceName: "MyHelsinki, 2025",
        sourceUrl: "https://www.myhelsinki.fi/visit/plan-your-trip/guide-to-helsinki/"
      }
    ], // Tips sourced from MyHelsinki, Numbeo (2025)
    culturalDos: [
      'Use public transport and city bikes.',
      'Keep valuables secure in crowded areas.',
      'Dress for the weather and pack layers.',
      'Try a public sauna and follow etiquette.',
      'Explore the city center on foot.'
    ],
    culturalDonts: [
      "Don't leave valuables unattended.",
      "Don't ignore bike lane rules.",
      "Don't walk alone in unlit parks late at night.",
      "Don't be loud on public transport.",
      "Don't accept unsolicited help with money or tickets."
    ],
    womensConfidenceScore: {
      score: 75.3, // Numbeo 2025 Safety Index for Helsinki
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/quality-of-life/in/Helsinki"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 95,
        source: 'Solo Travel in Style Blog 2025',
        sourceUrl: 'https://thesolotravelinstyleblog.com/helsinki-in-2-days/'
      },
      {
        label: 'Nightlife',
        confidence: 85,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/finland/helsinki'
      },
      {
        label: 'Public Transport',
        confidence: 97,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/finland/helsinki'
      },
      {
        label: 'Dining Alone',
        confidence: 93,
        source: 'Solo Travel in Style Blog 2025',
        sourceUrl: 'https://thesolotravelinstyleblog.com/helsinki-in-2-days/'
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
          name: 'British Embassy Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.gov.uk/world/organisations/british-embassy-helsinki'
        },
        {
          name: 'Embassy of Germany in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.diplo.de/'
        },
        {
          name: 'Embassy of France in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.exteriores.gob.es/embajadas/helsinki'
        },
        {
          name: 'Australian Embassy Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.canadainternational.gc.ca/fi-finland/'
        },
        {
          name: 'Embassy of the Netherlands in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/finland'
        },
        {
          name: 'Embassy of Denmark in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://fi.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.eda.admin.ch/helsinki'
        },
        {
          name: 'Embassy of India in Helsinki',
          address: 'Itäinen Puistotie 14B, 00140 Helsinki',
          phone: '+358 9 616 250',
          link: 'https://www.indianembassyfi.gov.in/'
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
    },
};

export default helsinki;
