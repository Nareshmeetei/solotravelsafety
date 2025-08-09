import { Destination } from './types';

// Enhanced Safety Data for Johannesburg - January 2025 Update

const johannesburg: Destination = {
    city: 'Johannesburg',
    country: 'South Africa',
    continent: 'Africa',
    countryCode: 'za',
    overallScore: 2.9,
    nightSafety: 1.5,
    publicTransit: 2.5,
    walkingAlone: 1.8,
    tags: ['warning-flags', 'high-crime'],
    bgColor: 'bg-red-75',
    reviewCount: 327,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.5, 
        context: 'Extremely dangerous at night with only 8.6% nighttime safety rating. High violent crime rates including armed robbery, sexual assault, and kidnapping. Travel Ladies rates Johannesburg #86 safest in South Africa for solo female travelers. Even safe areas like Sandton experience crime after dark.' 
      },
      publicTransit: { 
        score: 2.5, 
        context: 'Public transport presents significant risks with frequent taxi strikes, harassment, and violent incidents. Criminals track passengers from OR Tambo Airport to rob them at gunpoint. Uber is safest option but limited coverage. Gautrain is relatively safe but expensive.' 
      },
      walkingAlone: { 
        score: 1.8, 
        context: 'Walking alone strongly discouraged, especially for women. 2025 data shows Gauteng province ranked #89 safest for solo females with 2/5 safety rating. High street harassment, muggings, and express kidnapping risks. Even locals avoid walking in most areas.' 
      }
    },
    neighborhoods: {
      safe: ['Sandton', 'Rosebank', 'Melrose Arch'],
      caution: ['Braamfontein', 'Newtown'],
      avoid: ['Hillbrow', 'Yeoville', 'CBD at night']
    },
    accommodations: [
      { name: 'Radisson Blu Gautrain Hotel', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.4, notes: 'High security and professional staff.' },
      { name: 'Curiocity Backpackers', type: 'hostel', features: ['Female dorms', 'Central location', 'Security'], rating: 4.0, notes: 'Popular with solo travelers, but caution advised.' }
    ],
    alerts: [
      { title: 'High Crime Alert', description: 'Frequent reports of violent crime and muggings', location: 'CBD', reportCount: 21, severity: 'high', dateReported: '6 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Gautrain', 'Uber', 'Google Maps']
    },
    culturalExpectations: {
      dressCode: 'Modest dress recommended. Avoid drawing attention.',
      behaviorNorms: ['Be cautious with strangers', 'Avoid political discussions'],
      perception: 'Solo female travelers are rare and may attract attention.'
    },
    bestTimeToVisit: {
      safestMonths: ['September-April'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '10111', fire: '10177', medical: '10177', general: '112'
    },
    currency: {
      name: 'South African Rand', code: 'ZAR', exchangeRate: {
      usd: 0.0564,
      eur: 0.0480,
      gbp: 0.0419
    }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['English', 'Zulu', 'Afrikaans'],
    daytimeSafetyPercent: 29.7,
    nighttimeSafetyPercent: 8.6,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Johannesburg',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' },
      { label: 'Car Theft & Smash-and-Grab', frequency: 'Most common', icon: 'Car' },
      { label: 'Kidnapping & Express Kidnapping', frequency: 'Frequent', icon: 'Users' },
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' },
    ],
    usefulTips: [
      {
        title: "Stay in safe neighborhoods and avoid walking alone at night",
        description: "Book accommodation in Sandton, Rosebank, or Melrose Arch. Avoid walking alone after dark, especially outside these areas.",
        severity: "high",
        sourceName: "Qantas Travel Insider, 2025",
        sourceUrl: "https://www.qantas.com/travelinsider/en/explore/africa/south-africa/things-to-know-before-you-go-to-johannesburg.html"
      },
      {
        title: "Use registered taxis, Uber, or hotel-arranged transport",
        description: "Avoid public transport and unregistered taxis. Arrange airport transfers and city rides through your hotel or use Uber/Bolt for safety.",
        severity: "high",
        sourceName: "Qantas Travel Insider, 2025",
        sourceUrl: "https://www.qantas.com/travelinsider/en/explore/africa/south-africa/things-to-know-before-you-go-to-johannesburg.html"
      },
      {
        title: "Keep valuables hidden and avoid displaying wealth",
        description: "Carry only what you need, keep phones and jewelry out of sight, and use a cross-body bag with zippers.",
        severity: "high",
        sourceName: "Qantas Travel Insider, 2025",
        sourceUrl: "https://www.qantas.com/travelinsider/en/explore/africa/south-africa/things-to-know-before-you-go-to-johannesburg.html"
      },
      {
        title: "Visit townships and isolated areas only with organized tours",
        description: "Explore places like Soweto with a reputable guide and only during daylight hours. Avoid isolated spots and large gatherings.",
        severity: "high",
        sourceName: "Qantas Travel Insider, 2025",
        sourceUrl: "https://www.qantas.com/travelinsider/en/explore/africa/south-africa/things-to-know-before-you-go-to-johannesburg.html"
      },
      {
        title: "Use the Gautrain and Rea Vaya for safe public transport options",
        description: "The Gautrain and Rea Vaya bus are safer than other public transport. Avoid using ATMs at the airport and keep emergency numbers handy.",
        severity: "medium",
        sourceName: "Qantas Travel Insider, 2025",
        sourceUrl: "https://www.qantas.com/travelinsider/en/explore/africa/south-africa/things-to-know-before-you-go-to-johannesburg.html"
      }
    ], // Tips sourced from Qantas Travel Insider (2025)
    culturalDos: [
      'Stay in safe neighborhoods like Sandton or Rosebank.',
      'Use registered taxis, Uber, or hotel transport.',
      'Keep valuables hidden and secure.',
      'Visit townships only with organized tours.',
      'Use the Gautrain or Rea Vaya for safer public transport.'
    ],
    culturalDonts: [
      "Don't walk alone after dark.",
      "Don't use public minibuses or unregistered taxis.",
      "Don't display valuables or wear flashy jewelry.",
      "Don't accept help from strangers at ATMs.",
      "Don't discuss politics in public."
    ],
    womensConfidenceScore: {
      score: 19.2, // Numbeo 2025 Safety Index for Johannesburg
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Johannesburg"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 40,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Nightlife',
        confidence: 20,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Public Transport',
        confidence: 25,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
      },
      {
        label: 'Dining Alone',
        confidence: 45,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-africa/johannesburg'
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
          name: 'British Embassy Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-pretoria'
        },
        {
          name: 'Embassy of Germany in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.diplo.de/'
        },
        {
          name: 'Embassy of France in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.exteriores.gob.es/embajadas/pretoria'
        },
        {
          name: 'Australian Embassy Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.canadainternational.gc.ca/za-south-africa/'
        },
        {
          name: 'Embassy of the Netherlands in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/south-africa'
        },
        {
          name: 'Embassy of Denmark in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://za.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.eda.admin.ch/pretoria'
        },
        {
          name: 'Embassy of India in Johannesburg',
          address: '255 Hill Street, Arcadia, Pretoria',
          phone: '+27 12 431 4000',
          link: 'https://www.indianembassyza.gov.in/'
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

export default johannesburg;
