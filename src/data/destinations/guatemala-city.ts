import { Destination } from './types';

// Enhanced Safety Data for Guatemala City - January 2025 Update
const guatemalacity: Destination = {
    city: 'Guatemala City',
    country: 'Guatemala',
    continent: 'North America',
    countryCode: 'gt',
    overallScore: 2.8,
    nightSafety: 1.9,
    publicTransit: 3.2,
    walkingAlone: 2.5,
    tags: ['warning-flags', 'high-risk'],
    bgColor: 'bg-red-75',
    reviewCount: 298,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.9, 
        context: 'Extremely dangerous at night with only 20.7% safety rating. Guatemala City has critical-level violent crime including armed robberies, sexual assault, and express kidnappings after dark. US State Department rates the risk as "critical" with Zone 18 designated as "Do Not Travel". Even safe zones like Zona 10 experience crime at night.' 
      },
      publicTransit: { 
        score: 3.2, 
        context: 'Public buses (chicken buses) present significant safety risks with frequent armed attacks. 2024 government advisories warn against public transportation due to robbery and assault incidents. Uber operates only in Guatemala City and is the safest transport option. Licensed yellow taxis are acceptable but white taxis should be avoided.' 
      },
      walkingAlone: { 
        score: 2.5, 
        context: 'Walking alone is strongly discouraged, especially for women. With a 45.2% daytime safety rating, Guatemala City has high rates of mugging (concern level 87.4%), sexual harassment, and express kidnapping. Even experienced solo female travelers report feeling unsafe and recommend staying in groups.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Zona 10 (Zona Viva)',
          description: 'Upscale business and hotel district with international hotels, restaurants, and shopping. Has better security presence but still experiences petty crime and occasional violent incidents. Safest area for accommodation but caution still required after dark.'
        },
        {
          name: 'Zona 14',
          description: 'Modern commercial district with shopping centers, restaurants, and business hotels. Generally safer than other zones but crime still occurs. Limited nightlife options and better for business travelers. Stay alert even in this "safer" zone.'
        },
        {
          name: 'Zona 2 (Selected Areas)',
          description: 'Contains some middle-class residential areas and the Aurora Airport. Generally quieter than central zones but still requires standard safety precautions. Mainly relevant for airport proximity rather than tourist attractions.'
        },
        {
          name: 'Zona 4 (Limited Areas)',
          description: 'Contains some government buildings and PROATUR tourist office, but overall crime levels remain concerning. Only recommended for specific business during daylight hours with arranged transportation.'
        }
      ],
      caution: ['Zona 1 (Historic Center)', 'Zona 9', 'Zona 13 (Airport Area)'],
      avoid: ['Zona 18', 'Villa Nueva', 'Zona 3', 'Zona 21 (Especially at Night)', 'All Zones After 10 PM']
    },
    accommodations: [
      { 
        name: 'Hotel Casa Santo Domingo', 
        type: 'hotel', 
        features: ['24/7 security', 'Zona 10 location', 'International standards', 'Secure parking'], 
        rating: 4.7, 
        notes: 'Safest accommodation option in Guatemala City. Located in Zona 10 with excellent security measures and proximity to US Embassy.' 
      },
      { 
        name: 'Real InterContinental Guatemala', 
        type: 'hotel', 
        features: ['International chain', 'Zona 10', 'Business center', 'Security staff'], 
        rating: 4.5, 
        notes: 'Reliable international standards with good security. Popular with business travelers and those prioritizing safety.' 
      },
      { 
        name: 'Hotel Barceló Guatemala City', 
        type: 'hotel', 
        features: ['Zona 10 location', '24-hour security', 'Airport shuttle', 'Safe area'], 
        rating: 4.4, 
        notes: 'Well-established hotel with strong security protocols. Recommended for solo female travelers requiring maximum safety.' 
      },
      { 
        name: 'Zone 10 Hotels (General)', 
        type: 'hotel', 
        features: ['Diplomatic area', 'Multiple hotel options', 'Better security', 'Embassy proximity'], 
        rating: 4.2, 
        notes: 'ANY hotel in Zona 10 is preferable to accommodations in other zones. Budget options also exist but may have limited security.' 
      }
    ],
    alerts: [
      { 
        title: 'US State Department Level 3 Advisory', 
        description: 'Reconsider Travel due to crime. High levels of violent crime including armed robbery, assault, and express kidnapping', 
        location: 'Nationwide', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: 'Current - January 2025' 
      },
      { 
        title: 'Zone 18 Do Not Travel Warning', 
        description: 'Level 4 advisory due to extreme gang activity and violent crime. Complete no-travel zone', 
        location: 'Zone 18', 
        reportCount: 34, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Express Kidnapping Increase', 
        description: 'Rising incidents of short-term kidnapping for ATM withdrawals, particularly targeting taxi passengers', 
        location: 'Citywide', 
        reportCount: 23, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Sexual Assault Warning', 
        description: 'Increased reports of sexual assault targeting solo female travelers, especially in transit areas', 
        location: 'Zona 1, Transport hubs', 
        reportCount: 15, 
        severity: 'high', 
        dateReported: '5 days ago' 
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly and avoid flashy jewelry. Keep valuables hidden.',
      firstTimers: 'Arrange airport transfers in advance. Avoid public transport after dark.',
      apps: ['Uber', 'Waze', 'Google Maps'],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '¡Ayuda!',
          localLanguage: 'Spanish'
        },
        {
          english: 'Call the police!',
          local: '¡Llama a la policía!',
          localLanguage: 'Spanish'
        }
      ]
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
      police: '110',
      fire: '123', 
      medical: '120',
      general: '110'
    },
    currency: {
      name: 'Guatemalan Quetzal', code: 'GTQ', exchangeRate: {
      usd: 0.1304,
      eur: 0.1111,
      gbp: 0.0970
    }, scamWarnings: ['Taxi scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { 
        title: 'Express Kidnapping via Taxi', 
        description: 'Criminals posing as taxi drivers or using accomplices to force victims to ATM withdrawals. Affects both street-hailed and some registered taxis.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police Officers', 
        description: 'Criminals impersonating police to commit robbery, extortion, and sexual assault. Always ask for proper identification and badge numbers.', 
        severity: 'high' 
      },
      { 
        title: 'ATM Skimming and Robbery', 
        description: 'Card skimming devices and armed robberies at ATM locations. Criminals often follow victims after withdrawals.', 
        severity: 'high' 
      },
      { 
        title: 'Tourist Service Provider Assault', 
        description: 'Some tourism service providers build trust with female tourists before committing sexual assault. Verify all tour operators through official channels.', 
        severity: 'high' 
      },
      { 
        title: 'White Taxi Overcharging', 
        description: 'Unlicensed white taxis frequently overcharge and may be involved in more serious crimes. Use only yellow licensed taxis or Uber.', 
        severity: 'medium' 
      }
    ],
    languages: ['Spanish', 'Limited English in tourist areas'],
    daytimeSafetyPercent: 45.2, // Source: Numbeo 2024 (https://www.numbeo.com/crime/in/Guatemala-City)
    nighttimeSafetyPercent: 20.7, // Source: Numbeo 2024 (https://www.numbeo.com/crime/in/Guatemala-City)
    safetySourceName: 'Numbeo 2024',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Guatemala-City',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2024, US State Dept 2025
      { label: 'Taxi Scams & Express Kidnapping', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2024, BHTP 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2024
      { label: 'Corruption & Police Bribery', frequency: 'Occasional', icon: 'Shield' }, // Numbeo 2024
    ],
    usefulTips: [
      {
        title: "Stay in safe zones and avoid walking alone at night",
        description: "Book accommodation in Zona 10 or Zona 14, and avoid walking alone after dark, especially outside these areas.",
        severity: "high",
        sourceName: "Journey By Backpack, 2025",
        sourceUrl: "https://journeybybackpack.com/destinations/guatemala/is-guatemala-safe-for-solo-female-travel/"
      },
      {
        title: "Use registered taxis, Uber, or hotel-arranged transport",
        description: "Avoid public buses and unregistered taxis. Arrange airport transfers and city rides through your hotel or use Uber for safety.",
        severity: "high",
        sourceName: "Lady Abroad, 2025",
        sourceUrl: "https://ladyabroad.com/how-to-get-to-antigua-from-guatemala-city/"
      },
      {
        title: "Keep valuables hidden and avoid displaying wealth",
        description: "Carry only what you need, keep phones and jewelry out of sight, and use a cross-body bag with zippers.",
        severity: "high",
        sourceName: "She Roams The Globe, 2025",
        sourceUrl: "https://sheroamstheglobe.com/solo-female-travel-guatemala/"
      },
      {
        title: "Arrange all travel and tours through trusted providers",
        description: "Book shuttles, tours, and excursions through your hotel or reputable agencies. Avoid accepting rides from strangers.",
        severity: "high",
        sourceName: "Journey By Backpack, 2025",
        sourceUrl: "https://journeybybackpack.com/destinations/guatemala/is-guatemala-safe-for-solo-female-travel/"
      },
      {
        title: "Have a local SIM card and emergency contacts ready",
        description: "Buy a local SIM for connectivity, and save emergency numbers (110 for police, 1500 for PROATUR tourist assistance).",
        severity: "medium",
        sourceName: "Lady Abroad, 2025",
        sourceUrl: "https://ladyabroad.com/safety-in-antigua-heres-what-to-know/"
      }
    ], // Tips sourced from Journey By Backpack, Lady Abroad, She Roams The Globe (2025)
    culturalDos: [
      'Stay in safe zones like Zona 10 or 14.',
      'Use registered taxis, Uber, or hotel transport.',
      'Keep valuables hidden and secure.',
      'Arrange tours and rides through trusted providers.',
      'Have a local SIM and emergency contacts ready.'
    ],
    culturalDonts: [
      "Don't walk alone after dark.",
      "Don't use public buses or unregistered taxis.",
      "Don't display valuables or wear flashy jewelry.",
      "Don't accept rides from strangers.",
      "Don't discuss politics in public."
    ],
    womensConfidenceScore: {
      score: 37.7, // Numbeo 2025 Safety Index for Guatemala City
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/quality-of-life/in/Guatemala-City"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 55,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-in-central-america/'
      },
      {
        label: 'Nightlife',
        confidence: 30,
        source: 'Backpacker’s Blueprint 2025',
        sourceUrl: 'https://www.backpackersblueprint.com/post/is-guatemala-safe-a-backpacker-s-guide-to-exploring-guatemala'
      },
      {
        label: 'Public Transport',
        confidence: 40,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-in-central-america/'
      },
      {
        label: 'Dining Alone',
        confidence: 60,
        source: 'She Roams The Globe 2025',
        sourceUrl: 'https://sheroamstheglobe.com/solo-female-travel-guatemala/'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'Hospital General San Juan de Dios',
          address: '1a Avenida 10-50, Zona 1',
          phone: '+502 2251 0151',
          emergency: true,
          specialties: ['Emergency care', 'General medicine', 'Women\'s health']
        },
        {
          name: 'Hospital Centro Médico',
          address: '6a Avenida 3-47, Zona 10',
          phone: '+502 2279 4949',
          emergency: true,
          specialties: ['Private healthcare', 'Emergency services', 'International standards']
        },
        {
          name: 'Hospital Herrera Llerandi',
          address: '6a Avenida 8-71, Zona 10', 
          phone: '+502 2384 5959',
          emergency: true,
          specialties: ['Private care', 'Specialist services', '24/7 emergency']
        },
        {
          name: 'Centro Médico de la Mujer',
          address: '6a Avenida 20-25, Zona 10',
          phone: '+502 2333 8000',
          emergency: false,
          specialties: ['Gynecology', 'Obstetrics', 'Women\'s reproductive health']
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Galeno',
          address: 'Multiple locations in Zona 10',
          phone: '+502 2279 4000',
          hours: 'Daily 7:00-22:00',
          emergency: false
        },
        {
          name: 'Farmacia Clínica Mayo',
          address: 'Avenida La Reforma, Zona 9',
          phone: '+502 2331 4040',
          hours: 'Daily 6:00-24:00',
          emergency: true
        }
      ],
      womensHealth: {
        clinics: [
          'Centro Médico de la Mujer: Comprehensive women\'s health services',
          'Hospital Centro Médico Gynecology Dept: Private care with English-speaking staff',
          'Hospital Herrera Llerandi Women\'s Services: High-quality gynecological care',
          'Public Health Centers: Free basic women\'s health services (limited resources)'
        ],
        gynecologists: [
          'Multiple private gynecologists available in Zona 10 medical district',
          'Hospital Centro Médico referrals for English-speaking specialists', 
          'Centro Médico de la Mujer staff specialists',
          'US Embassy can provide healthcare provider referrals'
        ],
        emergencyContraception: [
          'Available at most pharmacies without prescription',
          'Hospital emergency departments provide emergency contraception',
          'Private clinics in Zona 10 offer confidential services',
          'PROATUR can assist with healthcare facility locations: 1500'
        ],
        sanitaryProducts: [
          'Available at pharmacies (farmacias), supermarkets, and convenience stores',
          'International brands available in upscale areas like Zona 10',
          'Local brands widely available and affordable',
          'Hotel concierge can assist with purchase locations'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Guatemala City',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Hepatitis A and Typhoid recommended for extended stays'
      ],
      healthRisks: [
        'Air pollution in urban areas - may affect respiratory conditions', 
        'High altitude (1,500m) may cause mild altitude effects for some visitors',
        'Seasonal flu during rainy season',
        'Higher crime-related injury risk than health risks'
      ]
    },
    
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Guatemala',
        address: 'Boulevard Austriaco 11-51, Zone 16, Guatemala City 01016',
        phone: '+502 2354 0000',
        email: 'consularcguatemala@state.gov',
        emergency: '+502 2354 0000',
        link: 'https://gt.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Embassy Guatemala',
          address: 'Boulevard Austriaco 11-51, Zone 16, Guatemala City 01016', 
          phone: '+502 2354 0000',
          link: 'https://gt.usembassy.gov/'
        },
        {
          name: 'British Embassy Guatemala City',
          address: '16 Calle 0-55, Zona 10, Edificio Torre Internacional, Nivel 11',
          phone: '+502 2380 7300',
          link: 'https://www.gov.uk/world/organisations/british-embassy-guatemala-city'
        },
        {
          name: 'Embassy of Germany in Guatemala City',
          address: '20 Calle 6-20, Zona 10, Edificio Torre Internacional, Nivel 14',
          phone: '+502 2365 9900',
          link: 'https://gt.diplo.de/'
        },
        {
          name: 'Embassy of France in Guatemala City',
          address: '16 Calle 4-53, Zona 10',
          phone: '+502 2421 7370',
          link: 'https://gt.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Guatemala City',
          address: '6a Calle 6-48, Zona 9',
          phone: '+502 2379 3530',
          link: 'https://www.exteriores.gob.es/embajadas/guatemala-city'
        },
        {
          name: 'Australian Consulate Guatemala City (Honorary)',
          address: '6a Avenida 20-25, Zona 10',
          phone: '+502 2333 7878',
          link: 'https://guatemala.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Guatemala City',
          address: '13 Calle 8-44, Zona 10, Edificio Edyma Plaza, 8th Floor',
          phone: '+502 2363 4348',
          link: 'https://www.canadainternational.gc.ca/gt-guatemala/'
        },
        {
          name: 'Embassy of the Netherlands in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/guatemala'
        },
        {
          name: 'Embassy of Denmark in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://gt.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://www.eda.admin.ch/guatemala-city'
        },
        {
          name: 'Embassy of India in Guatemala-city',
          address: 'Avenida La Reforma 16-85, Zona 10, Guatemala City',
          phone: '+502 2326 4000',
          link: 'https://www.indianembassygt.gov.in/'
        }
      ],
      womensRights: [
        'Guatemala has legal protections against gender-based violence, but enforcement is limited',
        '48% of women have experienced some form of gender-based violence (2023 National Survey)',
        'Femicide is a specific crime in Guatemala with dedicated prosecution units',
        'UN Women Guatemala provides support: +502 2384 3998',
        'PROATUR can assist with women\'s rights organization contacts: 1500'
      ],
      legalSupport: [
        'US Embassy provides list of English-speaking attorneys: +502 2354 0000',
        'Instituto de la Defensa Pública Penal: Free legal defense for serious crimes',
        'Procuraduría de los Derechos Humanos: Human rights ombudsman office',
        'Centro de Acción Legal en Derechos Humanos (CALDH): Human rights legal center',
        'PROATUR legal assistance coordination: 1500'
      ],
      reportingProcedures: [
        'Call 110 for immediate police response (Spanish required)',
        'Call PROATUR first for English-speaking assistance: 1500',
        'Contact US Embassy immediately for serious crimes: +502 2354 0000',
        'Document everything: photos, witness contacts, incident details',
        'Request official police report (denuncia) with case number',
        'Notify tourism police (DISETUR) for tourist-related crimes',
        'For sexual assault: Request female police officer if possible',
        'Embassy can provide attorney referrals and victim assistance'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $70 USD / day',
        description: 'Covers secure accommodation, safe transport, and meals with emphasis on safety over savings.',
        tip: 'Budget should prioritize safety - stay in Zona 10, use Uber/taxis, avoid budget accommodations in unsafe areas.'
      },
      accommodation: [
        {
          type: 'Luxury Hotel (Zona 10)',
          avgCost: '$80-150', 
          safetyNote: 'Highest security with 24/7 staff, secure parking, embassy proximity',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotel (Zona 10)',
          avgCost: '$40-80',
          safetyNote: 'Good security in safe zone, international standards',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotel (Zona 10 only)',
          avgCost: '$25-40',
          safetyNote: 'Basic but in safest zone - never choose budget options in unsafe zones',
          safetyLevel: 'medium'
        },
        {
          type: 'Airport Hotels',
          avgCost: '$50-90',
          safetyNote: 'Secure for transit, but isolating - use only for flight connections', 
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Uber',
          cost: '$2-8 per ride within city',
          safetyDescription: 'Safest ground transport option. Tracked routes, vetted drivers, cashless payment.',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Yellow Taxi',
          cost: '$5-15 per ride',
          safetyDescription: 'Acceptable safety but negotiate price beforehand. Never use white taxis.',
          safetyLevel: 'medium'
        },
        {
          method: 'Private Transfer/Shuttle',
          cost: '$35 airport transfer, $25-50 for excursions',
          safetyDescription: 'Hotel-arranged transport is safest for airport and tourist sites.',
          safetyLevel: 'high'
        },
        {
          method: 'Public Buses (NOT RECOMMENDED)',
          cost: '$1-5',
          safetyDescription: 'Frequent armed attacks on public buses. AVOID completely for safety.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Stay in Zona 10 - safety is more important than cost savings',
        'Use Uber exclusively - small cost for major safety improvement',
        'Eat at hotel restaurants or established places in safe zones',
        'Book accommodation with 24/7 security and reception',
        'Consider Guatemala City as transit point only - move to safer destinations quickly',
        'Use hotel concierge for all bookings and recommendations',
        'Avoid street food and markets due to location safety concerns',
        'Budget for taxi/Uber to all destinations - walking is unsafe',
        'Keep emergency cash for immediate exit if situations deteriorate',
        'Purchase comprehensive travel insurance with emergency evacuation coverage'
      ]
    },
};

export default guatemalacity; 