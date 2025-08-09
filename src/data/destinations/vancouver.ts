import { Destination } from './types';

const vancouver: Destination = {
    city: 'Vancouver',
    country: 'Canada',
    continent: 'North America',
    countryCode: 'ca',
    overallScore: 8.5,
    nightSafety: 8.0,
    publicTransit: 8.7,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 160,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { score: 8.0, context: 'Very safe at night. Well-lit streets and low crime rates.' },
      publicTransit: { score: 8.7, context: 'Efficient, clean, and safe public transport. Trains and buses are reliable.' },
      walkingAlone: { score: 8.6, context: 'Very safe to walk alone. Canadian culture is very respectful.' }
    },
    neighborhoods: {
      safe: ['Downtown', 'West End', 'Kitsilano', 'Yaletown'],
      caution: ['Some nightlife areas late at night'],
      avoid: ['None - city is very safe overall']
    },
    accommodations: [
      { name: 'HI Vancouver Central', type: 'hostel', features: ['Female dorms', 'Central location', 'Friendly staff'], rating: 4.3, notes: 'Popular with solo travelers, safe and clean.' },
      { name: 'Fairmont Pacific Rim', type: 'hotel', features: ['Luxury', 'Safe area', 'Security'], rating: 4.9, notes: 'High security and professional staff.' }
    ],
    alerts: [],
    safetyTips: {
      clothing: 'Dress for the weather. Vancouver is rainy and mild.',
      firstTimers: 'Very easy for beginners. English widely spoken.',
      apps: ['TransLink', 'Uber', 'Google Maps']
    },
    culturalExpectations: {
      dressCode: 'Casual and practical. No specific restrictions.',
      behaviorNorms: ['Quiet in public transport', 'Respect personal space'],
      perception: 'Solo female travelers are common and completely accepted.'
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer is best for weather. Winter is safe but rainy.'
    },
    emergencyInfo: {
      police: '911', fire: '911', medical: '911', general: '911'
    },
    currency: {
      name: 'Canadian Dollar', code: 'CAD', exchangeRate: {
      usd: 0.7299,
      eur: 0.6219,
      gbp: 0.5431
    }, scamWarnings: [],
    },
    usefulTips: [
      {
        title: 'Stay Alert in Tourist Areas and on Transit',
        description: 'Pickpocketing and distraction thefts can occur in busy areas and on public transport. Keep your belongings secure and be wary of strangers invading your personal space.',
        severity: 'low',
        sourceName: 'Vancouver Police Department',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/distraction-theft/'
      },
      {
        title: 'Avoid Walking Alone at Night in Isolated Areas',
        description: 'Stick to well-lit, busy streets at night and avoid isolated or poorly lit areas, especially in and around Downtown Eastside, Gastown, and Chinatown.',
        severity: 'low',
        sourceName: 'BCRobyn',
        sourceUrl: 'https://www.bcrobyn.com/2025/01/planning-to-visit-gastown-and-chinatown-in-vancouver-read-this-first/'
      },
      {
        title: 'Use Licensed Taxis or Trusted Rideshare Apps',
        description: 'For late-night travel, use official taxis or rideshare apps like Uber. Share your ride details with a friend and avoid accepting rides from strangers.',
        severity: 'low',
        sourceName: 'Travel Ladies',
        sourceUrl: 'https://travelladies.app/safety/canada'
      },
      {
        title: 'Be Cautious Around Open Drug Use',
        description: 'Some districts have visible drug activity. Do not engage, film, or draw attention to yourself. If you feel uncomfortable, leave the area promptly.',
        severity: 'low',
        sourceName: 'Vancouver Police Department',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/international-student-safety/'
      },
      {
        title: 'Secure Your Valuables in Cars and Accommodations',
        description: 'Car break-ins are common, especially at trailheads and parking lots. Never leave valuables in sight and always lock your vehicle.',
        severity: 'low',
        sourceName: 'Vancouver Police Department',
        sourceUrl: 'https://vpd.ca/crime-prevention-safety/international-student-safety/'
      }
    ],
    languages: ['English'],
    daytimeSafetyPercent: 77.8, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Vancouver)
    nighttimeSafetyPercent: 51.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Vancouver)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Vancouver',
    womensConfidenceScore: {
      score: 74.3, // Travel Ladies, Numbeo 2025
      source: '',
      sourceUrl: ''
    },
    confidenceByActivity: [
      {
        label: "Sightseeing",
        confidence: 93,
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
        confidence: 95,
        source: '',
        sourceUrl: ''
      },
      {
        label: "Dining Alone",
        confidence: 90,
        source: '',
        sourceUrl: ''
      }
    ],
    // Red flags based on VPD, Numbeo 2025, StaySafeVancouver, and local advisories
    // Sources:
    // https://www.numbeo.com/crime/in/Vancouver
    // https://vpd.ca/crime-prevention-safety/distraction-theft/
    // https://www.staysafevancouver.com/post/vancouver-crime-statistics-2025
    // https://www.bcrobyn.com/2025/01/planning-to-visit-gastown-and-chinatown-in-vancouver-read-this-first/
    redFlags: [
      {
        label: 'Pickpocketing & Distraction Theft (Tourist Areas, Transit)',
        frequency: 'Occasional',
        icon: 'Hand',
      },
      {
        label: 'Car Break-ins & Auto Theft',
        frequency: 'Occasional',
        icon: 'Car',
      },
      {
        label: 'Drug Activity & Open Use (Certain Districts)',
        frequency: 'Occasional',
        icon: 'Syringe',
      },
      {
        label: 'Aggressive Panhandling & Street Harassment',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
      },
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
  scamWarnings: [],
  legalResources: {
      embassy: {
        name: 'U.S. Consulate Vancouver',
        address: '1095 West Pender Street, Vancouver, BC V6E 2M6',
        phone: '+1 604 685 4311',
        email: 'ConsulateVancouver@state.gov',
        emergency: '+1 604 685 4311',
        link: 'https://ca.usembassy.gov/embassy-consulates/vancouver/'
      },
      embassies: [
        {
          name: 'U.S. Consulate Vancouver',
          address: '1095 West Pender Street, Vancouver, BC V6E 2M6',
          phone: '+1 604 685 4311',
          link: 'https://ca.usembassy.gov/embassy-consulates/vancouver/'
        },
        {
          name: 'British Consulate General Vancouver',
          address: '1111 Melville Street, Suite 800, Vancouver, BC V6E 3V6',
          phone: '+1 604 683 4421',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-vancouver'
        },
        {
          name: 'German Consulate General Vancouver',
          address: '704-999 Canada Place, Vancouver, BC V6C 3E1',
          phone: '+1 604 684 8377',
          link: 'https://vancouver.diplo.de/'
        },
        {
          name: 'French Consulate General Vancouver',
          address: '1130 West Pender Street, Suite 1100, Vancouver, BC V6E 4A4',
          phone: '+1 604 637 5300',
          link: 'https://vancouver.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate General Vancouver',
          address: '1177 West Hastings Street, Suite 1500, Vancouver, BC V6E 2K3',
          phone: '+1 604 666 8960',
          link: 'https://www.exteriores.gob.es/consulados/vancouver'
        },
        {
          name: 'Australian Consulate General Vancouver',
          address: '1075 West Georgia Street, Suite 2050, Vancouver, BC V6E 3C9',
          phone: '+1 604 684 1177',
          link: 'https://canada.embassy.gov.au/ottawa/vancouver.html'
        },
        {
          name: 'Government of Canada Services',
          address: 'Multiple Service Canada locations throughout Vancouver',
          phone: '+1 800 622 6232',
          link: 'https://www.canada.ca/en/employment-social-development/corporate/contact/local-offices.html'
        },
        {
          name: 'Dutch Consulate General Vancouver',
          address: '475 Howe Street, Suite 821, Vancouver, BC V6C 2B3',
          phone: '+1 604 684 6448',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/canada/about-us/consulate-general-vancouver'
        },
        {
          name: 'Danish Consulate General Vancouver',
          address: '999 Canada Place, Suite 404, Vancouver, BC V6C 3E1',
          phone: '+1 604 696 1207',
          link: 'https://canada.um.dk/en/about-us/danish-missions-in-canada/consulate-general-in-vancouver'
        },
        {
          name: 'Swiss Consulate General Vancouver',
          address: '790-999 West Hastings Street, Vancouver, BC V6C 2W2',
          phone: '+1 604 684 2231',
          link: 'https://www.eda.admin.ch/vancouver'
        },
        {
          name: 'Indian Consulate General Vancouver',
          address: '325 Howe Street, 2nd Floor, Vancouver, BC V6C 1Z7',
          phone: '+1 604 662 8811',
          link: 'https://www.cgivancouver.gov.in/'
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

export default vancouver;
