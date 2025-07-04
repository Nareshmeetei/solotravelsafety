import { Destination } from './types';

const tokyo: Destination = {
  city: 'Tokyo',
  country: 'Japan',
  continent: 'Asia',
  countryCode: 'jp',
  overallScore: 9.2,
  nightSafety: 9.5,
  publicTransit: 9.8,
  walkingAlone: 8.9,
  tags: ['insider-tips'],
  bgColor: 'bg-purple-50',
  reviewCount: 1200,
  lastUpdated: '2 days ago',
  harassmentRisk: 'low',
  safetyBreakdown: {
    nightSafety: {
      score: 9.5,
      context: 'Extremely safe at night, even for solo travelers. Well-lit streets and a strong police presence.'
    },
    publicTransit: {
      score: 9.8,
      context: 'World-class public transit system. Trains and subways are safe, clean, and punctual.'
    },
    walkingAlone: {
      score: 8.9,
      context: 'Very safe to walk alone. Occasional staring but harassment is rare.'
    }
  },
  neighborhoods: {
    safe: ['Shibuya', 'Shinjuku', 'Ginza', 'Roppongi', 'Asakusa'],
    caution: ['Kabukicho at night', 'Some nightlife districts'],
    avoid: ['None - city is very safe overall']
  },
  accommodations: [
    {
      name: 'Khaosan Tokyo Origami',
      type: 'hostel',
      features: ['Female dorms', 'Central location', 'Friendly staff'],
      rating: 4.7,
      notes: 'Popular with solo travelers, safe and clean.'
    },
    {
      name: 'Park Hotel Tokyo',
      type: 'hotel',
      features: ['Luxury hotel', 'Great location', 'English-speaking staff'],
      rating: 4.8,
      notes: 'Excellent safety and amenities.'
    }
  ],
  alerts: [],
  safetyTips: {
    clothing: 'Dress modestly in temples and shrines. Casual wear is fine elsewhere.',
    firstTimers: 'Download Google Maps and Hyperdia apps. Taxis are safe but expensive.',
    apps: ['Google Maps', 'Hyperdia', 'Japan Travel'],
    emergencyPhrases: ['Tasukete (Help)', 'Keisatsu o yonde kudasai (Call the police)']
  },
  culturalExpectations: {
    dressCode: 'Modest dress in religious sites. Trendy, casual wear is common in the city.',
    behaviorNorms: ['Respect elders', 'No loud talking on public transport', 'Remove shoes in homes'],
    perception: 'Solo female travelers are common and generally respected. Some staring may occur.'
  },
  bestTimeToVisit: {
    safestMonths: ['March-May', 'September-November'],
    events: 'Cherry blossom season (April), autumn foliage (October-November). Safe year-round.'
  },
  emergencyInfo: {
    police: '110',
    fire: '119',
    medical: '119',
    general: '110'
  },
  currency: {
    name: 'Japanese Yen',
    code: 'JPY',
    exchangeRate: {
      usd: 0.0071,
      eur: 0.0065,
      gbp: 0.0056
    },
    scamWarnings: [
      'Very few scams due to honest culture',
      'Tourist shops may be overpriced - compare prices',
      'Some tour operators may overcharge - book through reputable companies'
    ]
  },
  scamWarnings: [
    {
      title: 'Overpriced Tours',
      description: 'Some tour operators charge significantly more than others for similar experiences',
      severity: 'low'
    },
    {
      title: 'Tourist Shop Markups',
      description: 'Some shops in tourist areas have higher prices for souvenirs',
      severity: 'low'
    }
  ],
  languages: ['Japanese', 'English (major cities)'],
  daytimeSafetyPercent: 94.7,
  nighttimeSafetyPercent: 85.2,
  redFlags: [
    {
      label: 'Pickpocketing & Purse Snatching (Nightlife Areas)',
      frequency: 'Occasional',
      icon: 'Hand',
    },
    {
      label: 'Groping & Harassment on Public Transit',
      frequency: 'Occasional',
      icon: 'AlertTriangle',
    },
    {
      label: 'Overpriced Tourist Shops/Tours',
      frequency: 'Occasional',
      icon: 'CreditCard',
    },
    {
      label: 'Earthquakes & Natural Disasters',
      frequency: 'Occasional',
      icon: 'AlertTriangle',
    },
  ],
  usefulTips: [
    {
      title: "Use women-only train cars during rush hour",
      description: "Tokyo's trains are safe, but women-only cars are available during rush hour to avoid unwanted attention or groping. Look for pink signs on platforms.",
      severity: "low",
      sourceName: "Travel Ladies (2025)",
      sourceUrl: "https://travelladies.app/safety/japan"
    },
    {
      title: "Keep valuables secure in crowded areas",
      description: "Petty crime is rare, but keep your bag zipped and close to your body in busy places like Shibuya, Shinjuku, and markets.",
      severity: "low",
      sourceName: "Travel Ladies (2025)",
      sourceUrl: "https://travelladies.app/safety/japan"
    },
    {
      title: "Stay in female-friendly accommodations",
      description: "Many hostels and hotels offer female-only dorms or floors for extra comfort and security. Book in advance for the best options.",
      severity: "low",
      sourceName: "Solo Female Traveler Network (2025)",
      sourceUrl: "https://thesolofemaletravelernetwork.com/japan-travel-recommendations-for-fellow-solo-female-travelers/"
    },
    {
      title: "Learn basic Japanese phrases and etiquette",
      description: "Knowing a few key phrases and local customs helps with communication and shows respect. Bowing, removing shoes indoors, and quiet public behavior are appreciated.",
      severity: "low",
      sourceName: "Solo Female Traveler Network (2025)",
      sourceUrl: "https://thesolofemaletravelernetwork.com/japan-travel-recommendations-for-fellow-solo-female-travelers/"
    },
    {
      title: "Use public transport and walk with confidence, even at night",
      description: "Tokyo is extremely safe, even after dark. Public transport is reliable and well-monitored, but always stay aware of your surroundings.",
      severity: "low",
      sourceName: "Travel Ladies (2025)",
      sourceUrl: "https://travelladies.app/safety/japan"
    }
  ],
};

export default tokyo; 