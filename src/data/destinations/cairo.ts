import { Destination } from './types';

const cairo: Destination = {
    city: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    countryCode: 'eg',
    overallScore: 4.8,
    nightSafety: 3.2,
    publicTransit: 5.1,
    walkingAlone: 3.9,
    tags: ['warning-flags'],
    bgColor: 'bg-red-50',
    reviewCount: 678,
    lastUpdated: '2 days ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { score: 3.2, context: 'Not recommended to walk alone at night. Stick to well-lit tourist areas with security. Use hotel transport or trusted taxis.' },
      publicTransit: { score: 5.1, context: 'Metro has women-only cars - use them. Buses can be crowded and uncomfortable. Uber is safer option.' },
      walkingAlone: { score: 3.9, context: 'Expect significant harassment including staring, comments, and following. Dress very conservatively and stay alert.' }
    },
    neighborhoods: {
      safe: ['Zamalek', 'New Cairo', 'Maadi', 'Hotel areas in Giza'],
      caution: ['Downtown Cairo', 'Khan el-Khalili (tourist areas)', 'Coptic Cairo'],
      avoid: ['Islamic Cairo at night', 'Shubra', 'Isolated areas', 'Non-tourist areas alone']
    },
    accommodations: [
      { name: 'Four Seasons Hotel Cairo at Nile Plaza', type: 'hotel', features: ['Luxury hotel', 'Excellent security', 'Safe location'], rating: 4.7, notes: 'Top-tier security and professional staff. Very safe choice for solo women.' }
    ],
    alerts: [
      { title: 'Increased Harassment Reports', description: 'Multiple reports of aggressive harassment and following', location: 'Khan el-Khalili bazaar area', reportCount: 42, severity: 'high', dateReported: '4 days ago' }
    ],
    safetyTips: {
      clothing: 'Dress very conservatively. Long sleeves, long pants/skirts, cover hair in religious areas. Avoid tight or revealing clothing.',
      firstTimers: 'Consider guided tours. Stay in tourist areas. Book reputable accommodations. Have emergency contacts ready.',
      apps: ['Uber', 'Careem', 'Google Translate', 'Egypt Travel Guide'],
      emergencyPhrases: ['Mosa\'ada (Help)', 'Itasal bil-shurta (Call police)', 'Sibnee fi halee (Leave me alone)']
    },
    culturalExpectations: {
      dressCode: 'Very conservative dress required. Cover arms, legs, and consider head covering.',
      behaviorNorms: ['Avoid eye contact with men', 'Don\'t shake hands with men', 'Be very firm when declining offers'],
      perception: 'Solo female travelers are unusual and attract significant attention. Be prepared for constant staring and comments.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Avoid summer heat. Ramadan can affect opening hours and behavior norms.'
    },
    emergencyInfo: {
      police: '122', fire: '180', medical: '123', general: '122'
    },
    currency: {
      name: 'Egyptian Pound', code: 'EGP', exchangeRate: { usd: 0.021, eur: 0.019, gbp: 0.016 }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake guides']
    },
    scamWarnings: [
      { title: 'Taxi Scams', description: 'Drivers refusing to use meters or taking longer routes.', severity: 'high' }
    ],
    languages: ['Arabic', 'English (tourist areas)'],
    daytimeSafetyPercent: 73.5,
    nighttimeSafetyPercent: 52.1,
    redFlags: [
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Most common', icon: 'Hand' },
      { label: 'Scams (Fake Guides, Gold Scams)', frequency: 'Frequent', icon: 'Shield' },
      { label: 'Sexual Harassment & Catcalling', frequency: 'Frequent', icon: 'EyeOff' },
      { label: 'Civil Unrest & Demonstrations', frequency: 'Occasional', icon: 'Megaphone' },
    ],
    usefulTips: [
      {
        title: "Dress conservatively and cover up",
        description: "Wear long sleeves, long pants or skirts, and cover your hair in religious areas. Dressing modestly helps reduce unwanted attention.",
        severity: "low",
        sourceName: "Solo Female Traveler Network, Egypt Adventures Travel",
        sourceUrl: "https://thesolofemaletravelernetwork.com/ultimate-guide-to-solo-female-travel-in-egypt/"
      },
      {
        title: "Use Uber or Careem, not street taxis",
        description: "Ride-hailing apps are safer and help avoid scams. Avoid hailing taxis on the street, especially at night.",
        severity: "low",
        sourceName: "Egypt Adventures Travel, G Adventures",
        sourceUrl: "https://www.egyptadventurestravel.com/blog/is-cairo-worth-visiting"
      },
      {
        title: "Ignore street hassle and be assertive",
        description: "Expect persistent vendors and catcalling. Ignore, walk confidently, and say 'la shukran' (no thank you) firmly if needed.",
        severity: "low",
        sourceName: "G Adventures, Egypt Adventures Travel",
        sourceUrl: "https://www.gadventures.com/blog/solo-travel-women-egypt/"
      },
      {
        title: "Avoid walking alone at night",
        description: "Stick to well-lit, busy areas after dark. Use hotel transport or rideshare apps for evening travel.",
        severity: "low",
        sourceName: "Solo Female Traveler Network, Egypt Adventures Travel",
        sourceUrl: "https://thesolofemaletravelernetwork.com/ultimate-guide-to-solo-female-travel-in-egypt/"
      },
      {
        title: "Book local guides for major sites",
        description: "Hiring a reputable guide for places like the Pyramids or Islamic Cairo adds safety, insight, and helps avoid hassle.",
        severity: "low",
        sourceName: "Egypt Adventures Travel, G Adventures",
        sourceUrl: "https://www.egyptadventurestravel.com/blog/is-cairo-worth-visiting"
      }
    ],
    culturalDos: [
      'Dress modestly—cover shoulders, chest, and knees.',
      'Carry a scarf for mosques and conservative areas.',
      'Greet with "As-salamu alaykum" and use polite language.',
      'Accept tea or hospitality graciously.',
      'Use your right hand for eating and giving.'
    ],
    culturalDonts: [
      "Don't show public displays of affection.",
      "Don't take photos of people without permission.",
      "Don't discuss religion or politics openly.",
      "Don't raise your voice or display anger in public.",
      "Don't enter mosques without proper attire."
    ],
    womensConfidenceScore: {
      score: 34.7, // Travel Ladies 2025 Women's Safety Index for Cairo
      source: "Travel Ladies 2025",
      sourceUrl: "https://travelladies.app/crime/egypt/cairo"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 65,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/crime/egypt/cairo'
      },
      {
        label: 'Nightlife',
        confidence: 45,
        source: 'Nomadic Matt 2025',
        sourceUrl: 'https://www.nomadicmatt.com/travel-blogs/egypt-women-safety/'
      },
      {
        label: 'Public Transport',
        confidence: 58,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/crime/egypt/cairo'
      },
      {
        label: 'Dining Alone',
        confidence: 70,
        source: 'Bea Adventurous 2025',
        sourceUrl: 'https://bea-adventurous.com/is-egypt-safe-for-solo-female-travellers/'
      }
    ],
  };

export default cairo;
