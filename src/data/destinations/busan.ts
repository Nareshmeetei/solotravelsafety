import { Destination } from './types';

const busan: Destination = {
    city: 'Busan',
    country: 'South Korea',
    continent: 'Asia',
    countryCode: 'kr',
    overallScore: 8.6,
    nightSafety: 8.4,
    publicTransit: 9.3,
    walkingAlone: 8.2,
    tags: ['safe', 'modern', 'public-transit'],
    bgColor: 'bg-green-25',
    reviewCount: 412,
    lastUpdated: '2 days ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 8.4,
        context: 'Generally safe at night, especially in busy areas. Some caution advised in nightlife districts late at night.'
      },
      publicTransit: {
        score: 9.3,
        context: 'Extensive, clean, and safe subway and bus system. English signage in most stations.'
      },
      walkingAlone: {
        score: 8.2,
        context: 'Safe to walk alone in most areas. Petty crime is rare but possible in crowded places.'
      }
    },
          neighborhoods: {
        safe: ['Haeundae', 'Gwangalli', 'Seomyeon', 'Nampo-dong', 'Jagalchi'],
        caution: ['Nightlife areas in Seomyeon late at night'],
        avoid: ['None - generally safe city']
      },
      accommodations: [
        {
          name: 'Busan Guesthouse',
          type: 'hostel',
          features: ['Female dorms', 'Central location', 'Friendly staff'],
          rating: 4.6,
          notes: 'Popular with solo travelers, safe and clean.'
        },
        {
          name: 'Hotel Lotte Busan',
          type: 'hotel',
          features: ['Modern hotel', 'Great location', 'English-speaking staff'],
          rating: 4.7,
          notes: 'Excellent safety and amenities.'
        }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress modestly in temples and palaces. Casual wear is fine elsewhere.',
      firstTimers: 'Download KakaoMap and Subway Korea apps. Taxis are safe but traffic can be heavy.',
      apps: ['KakaoMap', 'Subway Korea', 'KakaoTalk'],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '도와주세요!',
          localLanguage: 'Korean'
        },
        {
          english: 'Call the police!',
          local: '경찰을 불러주세요!',
          localLanguage: 'Korean'
        },
        {
          english: 'I need a doctor.',
          local: '의사가 필요합니다.',
          localLanguage: 'Korean'
        },
        {
          english: 'Where is the nearest hospital?',
          local: '가장 가까운 병원이 어디인가요?',
          localLanguage: 'Korean'
        },
        {
          english: 'I am lost.',
          local: '길을 잃었습니다.',
          localLanguage: 'Korean'
        },
        {
          english: 'Please leave me alone.',
          local: '저를 혼자 두어 주세요.',
          localLanguage: 'Korean'
        },
        {
          english: 'I feel unsafe.',
          local: '안전하지 않다고 느낍니다.',
          localLanguage: 'Korean'
        },
        {
          english: 'Can you help me?',
          local: '도와주실 수 있나요?',
          localLanguage: 'Korean'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress in religious sites. Trendy, casual wear is common in the city.',
      behaviorNorms: ['Respect elders', 'No loud talking on public transport', 'Remove shoes in homes'],
      perception: 'Solo female travelers are common and generally respected. Some staring may occur.'
    },
    bestTimeToVisit: {
      safestMonths: ['April-June', 'September-November'],
      events: 'Cherry blossom season (April), autumn foliage (October-November). Safe year-round.'
    },
    emergencyInfo: {
      police: '112',
      fire: '119',
      medical: '119',
      general: '112'
    },
    currency: {
      name: 'South Korean Won',
      code: 'KRW',
      exchangeRate: {
        usd: 0.00075,
        eur: 0.00069,
        gbp: 0.00059
      },
      scamWarnings: [
        'Beware of overcharging taxis late at night',
        'Pickpocketing in crowded markets',
        'Counterfeit goods in some shopping areas'
      ]
    },
    scamWarnings: [
      {
        title: 'Taxi Overcharging',
        description: 'Some taxi drivers may overcharge tourists, especially late at night. Use official taxis or ride apps.',
        severity: 'medium'
      },
      {
        title: 'Pickpocketing in Markets',
        description: 'Petty theft can occur in crowded places like Namdaemun and Dongdaemun markets.',
        severity: 'low'
      }
    ],
    languages: ['Korean', 'English (major tourist areas)'],
    daytimeSafetyPercent: 87.0, // Source: Numbeo 2025, GoWithGuide 2024
    nighttimeSafetyPercent: 78.0, // Source: Numbeo 2025, GoWithGuide 2024
    usefulTips: [
      {
        title: "Use public transport and official taxis",
        description: "Busan's subway and buses are safe and efficient. Use official taxis or ride apps like KakaoTaxi, especially at night, to avoid overcharging.",
        severity: "low",
        sourceName: "Visit Korea, Korea Tourism Organization",
        sourceUrl: "https://english.visitkorea.or.kr/"
      },
      {
        title: "Stay in well-reviewed accommodations",
        description: "Choose hostels or hotels with good reviews and female-only dorms for added comfort and security.",
        severity: "low",
        sourceName: "Travel Ladies, Visit Korea",
        sourceUrl: "https://travelladies.app/destinations/asia/south-korea/busan"
      },
      {
        title: "Dress modestly in temples and local neighborhoods",
        description: "While trendy fashion is common, modest dress is expected in religious sites and traditional areas.",
        severity: "low",
        sourceName: "Visit Korea, Korea Tourism Organization",
        sourceUrl: "https://english.visitkorea.or.kr/"
      },
      {
        title: "Keep valuables secure in crowded places",
        description: "Pickpocketing is rare but possible in busy markets and tourist spots. Use a crossbody bag and stay alert.",
        severity: "low",
        sourceName: "GoWithGuide, Korea Tourism Organization",
        sourceUrl: "https://gowithguide.com/blog/is-busan-safe-6057"
      },
      {
        title: "Learn basic Korean phrases and emergency numbers",
        description: "English is spoken in tourist areas, but knowing a few Korean phrases and the emergency number (112) is helpful.",
        severity: "low",
        sourceName: "Visit Korea, Korea Tourism Organization",
        sourceUrl: "https://english.visitkorea.or.kr/"
      }
    ], // Tips sourced from Visit Korea, Travel Ladies, GoWithGuide (2025)
    redFlags: [
      {
        label: 'Petty Theft (Pickpocketing, Bag Snatching)',
        frequency: 'Occasional',
        icon: 'Hand'
      },
      {
        label: 'Taxi Overcharging (especially late at night)',
        frequency: 'Occasional',
        icon: 'Car'
      },
      {
        label: 'Spy Cameras in Public Restrooms',
        frequency: 'Rare',
        icon: 'CameraOff'
      },
      {
        label: 'Strong Riptides at Beaches (Haeundae, Gwangalli)',
        frequency: 'Occasional',
        icon: 'Waves'
      }
    ], // Red flags sourced from Visit Korea, SmarterTravel, Under30Experiences, 2025
    culturalDos: [
      'Use public transport and official taxis.',
      'Dress modestly in temples.',
      'Keep valuables secure in crowds.',
      'Learn basic Korean phrases.',
      'Respect elders and local customs.'
    ],
    culturalDonts: [
      "Don't take unofficial taxis at night.",
      "Don't speak loudly on public transport.",
      "Don't leave shoes on in homes.",
      "Don't display valuables in markets.",
      "Don't ignore beach safety warnings."
    ],
    womensConfidenceScore: {
      score: 75.8, // Numbeo 2025 Safety Index for Busan
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Busan"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 92,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-korea'
      },
      {
        label: 'Nightlife',
        confidence: 80,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-korea'
      },
      {
        label: 'Public Transport',
        confidence: 95,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/south-korea'
      },
      {
        label: 'Dining Alone',
        confidence: 90,
        source: 'Adventure to Every Country 2025',
        sourceUrl: 'https://adventuretoeverycountry.com/guide-to-solo-travel-in-south-korea/'
      }
    ],
};

export default busan;
