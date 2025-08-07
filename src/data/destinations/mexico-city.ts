import { Destination } from './types';

const mexicocity: Destination = {
    city: 'Mexico City',
    country: 'Mexico',
    continent: 'North America',
    countryCode: 'mx',
    overallScore: 4.5,
    nightSafety: 3.0,
    publicTransit: 4.5,
    walkingAlone: 3.5,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 300,
    lastUpdated: '1 day ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 3.0, context: 'Very unsafe at night. Avoid walking alone after dark. High risk of violent crime.' },
      publicTransit: { score: 4.5, context: 'Public transport is unreliable and can be dangerous. Use registered taxis or rideshares.' },
      walkingAlone: { score: 3.5, context: 'Not recommended to walk alone, especially for women. High risk of mugging and harassment.' }
    },
    neighborhoods: {
      safe: ['Polanco', 'Condesa', 'Roma Norte'],
      caution: ['Centro', 'Juarez'],
      avoid: ['Tepito', 'Doctores', 'Iztapalapa at night']
    },
    accommodations: [
      { name: 'Four Seasons Hotel Mexico City', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.8, notes: 'High security and professional staff.' },
      { name: 'Hostel Home', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.3, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'Centro', reportCount: 28, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Didi', 'Google Maps'],
      emergencyPhrases: ['¡Ayuda!', '¡Llama a la policía!']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['November-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Mexican Peso', code: 'MXN', exchangeRate: {
      usd: 0.0539,
      eur: 0.0459,
      gbp: 0.0401
    }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Spanish', 'English (tourist areas)'],
    daytimeSafetyPercent: 54.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Mexico-City)
    nighttimeSafetyPercent: 22.5, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Mexico-City)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Mexico-City',
    // Red flags based on Numbeo 2025 and US/UK government travel advisories
    redFlags: [
      {
        label: 'Mugging & Armed Robbery',
        frequency: 'Most common',
        icon: 'PocketKnife',
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Most common',
        icon: 'Hand',
      },
      {
        label: 'Taxi Scams & Unlicensed Taxis',
        frequency: 'Frequent',
        icon: 'Car',
      },
      {
        label: 'Corruption & Bribery',
        frequency: 'Frequent',
        icon: 'CreditCard',
      },
    ],
    usefulTips: [
      {
        title: "Use registered taxis or rideshare apps only",
        description: "Avoid hailing taxis on the street. Use authorized taxi stands (sitios) or rideshare apps like Uber or Didi for safer transportation, especially at night.",
        severity: "high",
        sourceName: "US State Department Travel Advisory",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html"
      },
      {
        title: "Stay in safe, central neighborhoods",
        description: "Book accommodation in Polanco, Condesa, or Roma Norte for better security and access to tourist attractions. Avoid walking alone at night, even in these areas.",
        severity: "medium",
        sourceName: "Travel Ladies Mexico City Guide",
        sourceUrl: "https://travelladies.app/safety/mexico/mexico-city"
      },
      {
        title: "Keep valuables hidden and be alert for pickpockets",
        description: "Petty theft is common in crowded areas, public transport, and markets. Use anti-theft bags and keep your phone and wallet out of sight.",
        severity: "high",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/mexico/safety-and-security"
      },
      {
        title: "Learn basic Spanish and keep emergency contacts accessible",
        description: "Knowing a few key phrases in Spanish helps in emergencies and daily interactions. Save the emergency number (911) and your embassy\'s contact info.",
        severity: "medium",
        sourceName: "The Lady Who Travels",
        sourceUrl: "https://www.theladywhotravels.com/is-mexico-safe-for-solo-female-travellers/"
      },
      {
        title: "Avoid tap water and stick to bottled water",
        description: "Do not drink tap water in Mexico City. Always use bottled water for drinking and brushing teeth to avoid illness.",
        severity: "medium",
        sourceName: "Mexico City Official Visitor Guide",
        sourceUrl: "https://mexicocity.cdmx.gob.mx/e/"
      }
    ],
    culturalDos: [
      'Greet people with a polite "buenos días" or "buenas tardes."',
      'Dress modestly, especially in churches and traditional areas.',
      'Accept food or drink offered by hosts as a sign of respect.',
      'Use formal titles (Señor/Señora) when addressing elders.',
      'Learn and use basic Spanish phrases.'
    ],
    culturalDonts: [
      'Don’t discuss politics, crime, or drug cartels.',
      'Don’t refuse hospitality outright—decline politely if needed.',
      'Don’t wear flashy jewelry or display wealth.',
      'Don’t take photos of people without permission.',
      'Don’t enter churches or sacred sites in revealing clothing.'
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
          name: 'British Embassy Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-mexico-city'
        },
        {
          name: 'Embassy of Germany in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://mx.diplo.de/'
        },
        {
          name: 'Embassy of France in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://mx.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://www.exteriores.gob.es/embajadas/mexico-city'
        },
        {
          name: 'Australian Embassy Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://mx.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://www.canadainternational.gc.ca/mx-mexico/'
        },
        {
          name: 'Embassy of the Netherlands in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/mexico'
        },
        {
          name: 'Embassy of Denmark in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://mx.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://www.eda.admin.ch/mexico-city'
        },
        {
          name: 'Embassy of India in Mexico-city',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, Mexico City',
          phone: '+52 55 5080 2000',
          link: 'https://www.indianembassymx.gov.in/'
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

export default mexicocity;
