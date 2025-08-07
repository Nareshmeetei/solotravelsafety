import { Destination } from './types';

const manila: Destination = {
    city: 'Manila',
    country: 'Philippines',
    continent: 'Asia',
    countryCode: 'ph',
    overallScore: 4.0,
    nightSafety: 2.5,
    publicTransit: 4.2,
    walkingAlone: 3.1,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 210,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 2.5, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 4.2, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.1, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Makati', 'Bonifacio Global City', 'Ortigas'],
      caution: ['Ermita', 'Malate'],
      avoid: ['Tondo', 'Quiapo', 'Divisoria at night']
    },
    accommodations: [
      { name: 'The Peninsula Manila', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.6, notes: 'High security and professional staff.' },
      { name: 'Z Hostel', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.2, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Quiapo', reportCount: 25, severity: 'high', dateReported: '3 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Grab', 'Uber', 'Google Maps'],
      emergencyPhrases: ['Tulong!', 'Tumawag ng pulis!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-May'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '117', fire: '160', medical: '911', general: '911'
    },
    currency: {
      name: 'Philippine Peso', code: 'PHP', exchangeRate: {
      usd: 0.0175,
      eur: 0.0149,
      gbp: 0.0130
    }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Filipino', 'English'],
    daytimeSafetyPercent: 64.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Manila)
    nighttimeSafetyPercent: 32.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Manila)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Manila',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2025, PH Gov 2025
      { label: 'Scams (Taxi, ATM, Fake Police)', frequency: 'Most common', icon: 'Shield' }, // Numbeo 2025, PH Gov 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2025
      { label: 'Drug-Related Incidents', frequency: 'Frequent', icon: 'Syringe' }, // Numbeo 2025
    ],
    usefulTips: [
      {
        title: "Use only official taxis or rideshare apps",
        description: "Avoid hailing taxis off the street. Use official taxi stands or reputable rideshare apps like Grab for safer transportation, especially at night.",
        severity: "medium",
        sourceName: "US State Department Travel Advisory",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/philippines-travel-advisory.html"
      },
      {
        title: "Stay in well-reviewed, central accommodations",
        description: "Choose hotels or hostels in safe, central areas like Makati, Bonifacio Global City, or Ermita. Avoid walking alone at night in unfamiliar neighborhoods.",
        severity: "medium",
        sourceName: "Travel Ladies Manila Guide",
        sourceUrl: "https://travelladies.app/destination/asia/philippines/manila"
      },
      {
        title: "Keep valuables secure and be alert for pickpockets",
        description: "Petty theft and bag snatching can occur in crowded areas, public transport, and markets. Use anti-theft bags and keep your phone and wallet out of sight.",
        severity: "medium",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/philippines/safety-and-security"
      },
      {
        title: "Dress modestly and respect local customs",
        description: "Wearing modest clothing helps avoid unwanted attention. Cover shoulders and knees, especially when visiting religious sites or government buildings.",
        severity: "low",
        sourceName: "Philippines Tourism USA",
        sourceUrl: "https://philippinetourismusa.com/top-destinations/"
      },
      {
        title: "Register with the Tourist Assistance Call Center and know emergency contacts",
        description: "The Department of Tourism offers a 24/7 Tourist Assistance Call Center (+63 2 8632 1191). Save this number and know the location of the nearest police station or hospital.",
        severity: "low",
        sourceName: "Philippine News Agency (PNA)",
        sourceUrl: "https://www.pna.gov.ph/articles/1229214"
      }
    ],
    culturalDos: [
      "Use polite titles like 'po' and 'ate/kuya' when addressing locals, especially elders.",
      'Smile and be friendly—Filipinos value warmth and approachability.',
      'Join in group activities or celebrations if invited; it\'s a sign of respect and openness.',
      'Bring a small gift ("pasalubong") if visiting someone\'s home.',
      'Dress modestly, especially in churches and traditional neighborhoods.'
    ],
    culturalDonts: [
      'Don\'t raise your voice or show anger in public—keep calm and polite even if frustrated.',
      'Don\'t refuse food or drink offered by a host; try a small amount to show appreciation.',
      'Don\'t stare at people, especially men or groups, as it can be seen as confrontational.',
      'Don\'t openly criticize local customs, religion, or the Philippines itself.',
      'Don\'t flaunt wealth or act arrogantly; humility is highly valued.'
    ],
    womensConfidenceScore: {
      score: 35.5, // Numbeo 2025 Safety Index for Manila
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Manila"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 65,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/manila/'
      },
      {
        label: 'Nightlife',
        confidence: 45,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Public Transport',
        confidence: 55,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Dining Alone',
        confidence: 70,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/manila/'
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
          name: 'British Embassy Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-manila'
        },
        {
          name: 'Embassy of Germany in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://ph.diplo.de/'
        },
        {
          name: 'Embassy of France in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://ph.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://www.exteriores.gob.es/embajadas/manila'
        },
        {
          name: 'Australian Embassy Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://ph.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://www.canadainternational.gc.ca/ph-philippines/'
        },
        {
          name: 'Embassy of the Netherlands in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/philippines'
        },
        {
          name: 'Embassy of Denmark in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://ph.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://www.eda.admin.ch/manila'
        },
        {
          name: 'Embassy of India in Manila',
          address: '1201 Roxas Boulevard, Manila',
          phone: '+63 2 5301 2000',
          link: 'https://www.indianembassyph.gov.in/'
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

export default manila;
