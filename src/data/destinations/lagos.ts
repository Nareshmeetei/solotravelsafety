import { Destination } from './types';

// Enhanced Safety Data for Lagos - January 2025 Update
const lagos: Destination = {
    city: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    countryCode: 'ng',
    overallScore: 2.3,
    nightSafety: 1.6,
    publicTransit: 2.0,
    walkingAlone: 1.9,
    tags: ['warning-flags', 'high-crime', 'kidnapping-risk'],
    bgColor: 'bg-red-75',
    reviewCount: 623,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.6, 
        context: 'Extremely dangerous at night with only 18.6% nighttime safety rating (Numbeo 2025). High violent crime including armed robbery, assaults targeting foreigners, and kidnapping. Canadian and Australian governments advise high caution specifically for Lagos. Avoid any outdoor movement after dark.' 
      },
      publicTransit: { 
        score: 2.0, 
        context: 'Public transport presents severe harassment and crime risks. Street harassment "taken as the norm" with Lagos described as "misogynistic state." Frequent pickpocketing, bag snatching, and phone theft during rush hour. Crowded conditions enable sexual harassment and inappropriate touching.' 
      },
      walkingAlone: { 
        score: 1.9, 
        context: 'Walking alone strongly discouraged with Lagos ranked #7 safest in Nigeria (2.3/5 rating). High street harassment ranging from catcalling to "intense verbal assertiveness." Petty crime prevalent in crowded areas. Foreigners frequently targeted for theft and harassment.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Victoria Island',
          description: 'Upscale business district with international hotels, embassies, and corporate offices. Relatively safer with better security presence but still requires constant vigilance. Location of US Consulate General and British Deputy High Commission. Best area for accommodation but not safe for solo walking.'
        },
        {
          name: 'Ikoyi',
          description: 'Affluent residential area with upscale housing and some commercial facilities. Better security infrastructure than most Lagos areas but crime still occurs. Mainly residential with limited tourist attractions. Safer for accommodation but caution required when traveling.'
        },
        {
          name: 'Lekki (Chevron Area)',
          description: 'Modern planned development with gated communities, shopping malls, and beaches. Alpha Beach Road area considered relatively safe due to Chevron oil company presence attracting expatriates. Booming arts scene and nightlife but exercise extreme caution.'
        }
      ],
      caution: [
        'Yaba (University area with mixed safety conditions)',
        'Surulere (Densely populated with higher crime rates)',
        'Lagos Island (Historic but crowded with crime concerns)', 
        'Ikeja (Airport area with mixed safety conditions)'
      ],
      avoid: [
        'Mushin (High crime, avoid completely)',
        'Ajegunle (Dangerous slum area, extremely high crime)',
        'Oshodi (Transport hub with high crime rates)',
        'All areas after dark (extremely dangerous for women)',
        'Isolated areas even in "safer" neighborhoods'
      ]
    },
    accommodations: [
      { 
        name: 'Eko Hotels & Suites', 
        type: 'hotel', 
        features: ['Victoria Island location', 'International security standards', '24/7 concierge', 'Multiple dining options'], 
        rating: 4.5, 
        notes: 'Premier luxury hotel with highest security protocols. Located in safest part of Lagos. Essential for solo female travelers - arrange all transport through hotel.' 
      },
      { 
        name: 'Radisson Blu Anchorage Hotel', 
        type: 'hotel', 
        features: ['Victoria Island', 'International chain', 'Business facilities', 'Security staff'], 
        rating: 4.3, 
        notes: 'International standard hotel with reliable security. Popular with business travelers and expatriates. Good base for safe accommodation.' 
      },
      { 
        name: 'Southern Sun Ikoyi', 
        type: 'hotel', 
        features: ['Ikoyi location', 'Waterfront views', 'Security measures', 'Airport transfers'], 
        rating: 4.2, 
        notes: 'Established hotel in relatively safer Ikoyi area. Offers structured airport transfers and security protocols for guests.' 
      },
      { 
        name: 'Budget Hotels (Limited Safe Options)', 
        type: 'hotel', 
        features: ['Victoria Island/Ikoyi only', 'Basic security', 'Varies by property', 'English-speaking staff'], 
        rating: 3.8, 
        notes: 'Very limited safe budget options in Lagos. Must stay only in Victoria Island or Ikoyi. Hostels extremely limited and not recommended for solo women.' 
      }
    ],
    alerts: [
      { 
        title: 'High Kidnapping Risk Nationwide', 
        description: 'Canadian and Australian governments report high kidnapping threat across Nigeria including Lagos and Abuja. Foreigners including businesspeople, tourists, and aid workers seen as legitimate targets.', 
        location: 'Nationwide including Lagos', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Violent Crime Against Foreign Nationals', 
        description: 'Crime levels high in Lagos with violent crime including assaults and armed attacks committed against foreign nationals in areas they frequent. Particular targeting of expatriates and tourists.', 
        location: 'All Lagos areas', 
        reportCount: 67, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Street Harassment Epidemic', 
        description: 'Lagos described as "misogynistic state" with harassment "taken as norm." Solo female travelers report regular catcalling, verbal harassment, and unwanted attention ranging from comments to intense verbal assertiveness.', 
        location: 'Citywide, especially markets and transport areas', 
        reportCount: 134, 
        severity: 'high', 
        dateReported: '3 days ago' 
      },
      { 
        title: 'Petty Crime Surge During Rush Hours', 
        description: 'Pickpocketing, bag snatching, and phone theft prevalent during traffic rush hours and in crowded areas. Organized gangs targeting pedestrians and vehicle occupants.', 
        location: 'Transport hubs, markets, crowded areas', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '1 week ago' 
      }
    ],
    safetyTips: {
      clothing: 'Dress extremely modestly to avoid unwanted attention. No jewelry, expensive accessories, or branded items visible. Blend in with conservative local dress.',
      firstTimers: 'Book only international hotels in Victoria Island. Arrange private security/driver through hotel for ALL movements. Never leave hotel alone. Consider Lagos only as brief transit point.',
      apps: ['Uber (with extreme caution)', 'Bolt (verify driver)', 'Emergency contacts app'],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English'
        },
        {
          english: 'Call the police!',
          local: 'Call police!',
          localLanguage: 'English'
        },
        {
          english: 'I need help!',
          local: 'I need help!',
          localLanguage: 'English'
        },
        {
          english: 'Emergency!',
          local: 'Emergency!',
          localLanguage: 'English'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Extremely conservative dress required. Cover shoulders, arms, and legs completely. Avoid any form-fitting clothing. Religious and cultural modesty essential.',
      behaviorNorms: ['Never travel alone anywhere', 'Avoid eye contact with men', 'Be extremely wary of anyone offering help', 'Do not discuss politics, religion, or social issues', 'Always have hotel security escort'],
      perception: 'Solo female travelers extremely rare and attract significant unwanted attention. Conservative society with high rates of harassment toward unaccompanied women. Foreign women seen as targets for various crimes.'
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '112', fire: '119', medical: '199', general: '112'
    },
    currency: {
      name: 'Nigerian Naira', code: 'NGN', exchangeRate: {
      usd: 0.0007,
      eur: 0.0006,
      gbp: 0.0005
    }, scamWarnings: ['ATM scams', 'Pickpocketing', 'Fake police officers']
    },
    scamWarnings: [
      { 
        title: 'Street Harassment Escalation', 
        description: 'Harassment often escalates from verbal to physical intimidation and potential assault. Lagos described as having harassment "taken as the norm" with limited legal recourse for victims.', 
        severity: 'high' 
      },
      { 
        title: 'Express Kidnapping and Ransom', 
        description: 'High kidnapping risk targeting foreigners including tourists. Kidnappers demand ransom and may hold victims for extended periods. Businesspeople and aid workers frequently targeted.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police Extortion', 
        description: 'Criminals impersonating police officers to extort money or commit robbery/assault. Always demand proper identification and insist on going to police station.', 
        severity: 'high' 
      },
      { 
        title: 'Phone and Valuables Snatching', 
        description: 'Organized gangs targeting mobile phones, bags, and valuables especially during traffic and in crowded areas. Motorcycle thieves common during rush hour.', 
        severity: 'high' 
      },
      { 
        title: 'ATM and Card Fraud', 
        description: 'Criminals offering help at ATMs to steal cards, PINs, or cash. Card skimming devices widespread. Use only bank ATMs with security guards present.', 
        severity: 'high' 
      },
      { 
        title: 'Internet and Advance Fee Fraud', 
        description: 'Lagos known as center for "419 scams" and internet fraud. Avoid any financial transactions or "business opportunities" presented by locals.', 
        severity: 'medium' 
      }
    ],
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
    daytimeSafetyPercent: 49.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    nighttimeSafetyPercent: 18.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lagos',
    redFlags: [
      { label: 'Violent Crime (Muggings, Armed Robbery)', frequency: 'Most common', icon: 'PocketKnife' }, // Numbeo 2025, UK Gov 2025
      { label: 'Scams (ATM, Fake Police, Internet Fraud)', frequency: 'Most common', icon: 'Shield' }, // Numbeo 2025, UK Gov 2025
      { label: 'Car Theft & Carjacking', frequency: 'Frequent', icon: 'Car' }, // Numbeo 2025
      { label: 'Pickpocketing & Bag Snatching', frequency: 'Frequent', icon: 'Hand' }, // Numbeo 2025
    ],
    usefulTips: [
      {
        title: "Use registered taxis or rideshare apps only",
        description: "Avoid public transport and unregistered taxis. Use apps like Uber or Bolt for safer, trackable rides, especially at night.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Dress modestly and avoid displaying valuables",
        description: "Wear modest clothing and keep jewelry, electronics, and cash out of sight to avoid attracting attention.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Avoid walking alone after dark and in isolated areas",
        description: "Plan your movements to avoid being out alone at night. Stick to well-lit, busy areas and avoid deserted streets.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Arrange airport transfers and accommodation in advance",
        description: "Book trusted airport transfers and stay in reputable hotels or hostels in safer neighborhoods like Victoria Island or Ikoyi.",
        severity: "medium",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      },
      {
        title: "Stay alert for scams and keep emergency contacts handy",
        description: "Be wary of ATM scams, fake police, and internet fraud. Save local emergency numbers and your embassy contact info.",
        severity: "high",
        sourceName: "UK Government Travel Advice (2025)",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/nigeria/warnings-and-insurance"
      }
    ], // Tips sourced from UK Government Travel Advice (2025)
    culturalDos: [
      'Dress modestly, covering shoulders and knees.',
      'Greet elders and locals respectfully.',
      'Ask before taking photos of people.',
      'Use your right hand for eating and giving.',
      'Respect local customs and religious practices.'
    ],
    culturalDonts: [
      "Don't show affection in public.",
      "Don't criticize religion or local traditions.",
      "Don't enter mosques or churches without permission.",
      "Don't wear revealing or tight clothing.",
      "Don't discuss sensitive political topics."
    ],
    womensConfidenceScore: {
      score: 22.4, // Numbeo 2025 Safety Index for Lagos
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Lagos"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 25,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Nightlife',
        confidence: 10,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Public Transport',
        confidence: 15,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Dining Alone',
        confidence: 20,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'R-Jolad Hospital',
          address: 'Lagos',
          phone: '+234 1 280 0000',
          emergency: true,
          specialties: ['Private healthcare', 'Women\'s health', 'Emergency care', '2025 Nigerian Healthcare Excellence Award winner']
        },
        {
          name: 'Duchess International Hospital',
          address: 'Ikeja, Lagos',
          phone: '+234 1 454 0000',
          emergency: true,
          specialties: ['100-bed multi-specialty', 'Emergency services', 'Women\'s health', 'International standards']
        },
        {
          name: 'Havana Specialists Hospital',
          address: 'Surulere, Lagos',
          phone: '+234 1 773 5000',
          emergency: true,
          specialties: ['24/7 emergency department', 'Obstetrics & Gynecology', 'Specialist clinics', 'Experienced physicians']
        },
        {
          name: 'Lagos University Teaching Hospital (LUTH)',
          address: 'Idi-Araba, Lagos',
          phone: '+234 1 586 3001',
          emergency: true,
          specialties: ['Public hospital', 'Emergency care', 'Teaching hospital', 'Comprehensive services']
        }
      ],
      pharmacies: [
        {
          name: 'Alpha Pharmacy',
          address: 'Multiple locations (Victoria Island, Ikoyi)',
          phone: '+234 1 270 0000',
          hours: 'Daily 8:00-22:00',
          emergency: false
        },
        {
          name: 'Emzor Pharmacy',
          address: 'Various Lagos locations',
          phone: '+234 1 492 0000',
          hours: 'Daily 8:00-20:00',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'Arctic Gynae Centre: Specialist obstetrics and gynecology center with experienced team',
          'Regal Specialist Women\'s Hospital: Dedicated gynecology and obstetrics facility',
          'Medison Specialist Women Hospital: International standard fertility and gynecology services',
          'South Shore Women\'s & Children\'s Hospital: 24-hour outstanding healthcare delivery'
        ],
        gynecologists: [
          'Multiple specialist women\'s hospitals with qualified gynecologists',
          'R-Jolad Hospital: Award-winning women\'s health services',
          'The Hospital - Fertility & Gynecology Centre: Thousands of successful treatments',
          'Havana Specialists Hospital: 24/7 obstetrics and gynecology services'
        ],
        emergencyContraception: [
          'Available at major pharmacy chains with prescription',
          'Hospital emergency departments provide reproductive health services',
          'Private specialist clinics offer confidential services',
          'Cultural and religious considerations may affect availability'
        ],
        sanitaryProducts: [
          'Available at Alpha Pharmacy and major chains in safe areas',
          'Supermarkets in Victoria Island and Ikoyi stock international brands',
          'Hotel concierge can arrange purchases for safety',
          'Avoid purchasing in markets or unsafe areas'
        ]
      },
      vaccinations: [
        'Yellow fever vaccination required for Nigeria entry',
        'Hepatitis A and Typhoid recommended',
        'Meningitis vaccination recommended during dry season',
        'Malaria prophylaxis essential - high transmission area',
        'Routine vaccinations should be current (MMR, DPT, influenza)'
      ],
      healthRisks: [
        'High crime-related injury risk - primary health concern',
        'Malaria transmission year-round - use prophylaxis and mosquito protection',
        'Water-borne illnesses - drink only bottled water',
        'Air pollution in urban areas affecting respiratory health',
        'Higher risk of violence-related injuries than infectious disease'
      ]
    },

    legalResources: {
      embassy: {
        name: 'U.S. Consulate General Lagos',
        address: '2 Walter Carrington Crescent Victoria Island, Lagos',
        phone: '+234 1 460 3400',
        email: 'ACSLagos@state.gov',
        emergency: '+234 209 461 4000',
        link: 'https://ng.usembassy.gov/consulate-lagos/'
      },
      embassies: [
        {
          name: 'U.S. Consulate General Lagos',
          address: '2 Walter Carrington Crescent Victoria Island, Lagos',
          phone: '+234 1 460 3400',
          link: 'https://ng.usembassy.gov/consulate-lagos/'
        },
        {
          name: 'British Deputy High Commission Lagos',
          address: '11 Walter Carrington Crescent Victoria Island, Lagos',
          phone: '+234 1 277 0780',
          link: 'https://www.gov.uk/world/organisations/british-deputy-high-commission-lagos'
        },
        {
          name: 'French Consulate General Lagos',
          address: 'Victoria Island, Lagos',
          phone: '+234 1 261 1590',
          link: 'https://ng.ambafrance.org/'
        },
        {
          name: 'German Consulate General Lagos',
          address: 'Victoria Island, Lagos',
          phone: '+234 1 261 1011',
          link: 'https://lagos.diplo.de/'
        },
        {
          name: 'Italian Consulate General Lagos',
          address: 'Victoria Island, Lagos',
          phone: '+234 1 261 5620',
          link: 'https://conslagos.esteri.it/'
        },
        {
          name: 'Chinese Consulate General Lagos',
          address: 'Victoria Island, Lagos',
          phone: '+234 1 461 7280',
          link: 'http://lagos.china-consulate.org/'
        },
        {
          name: 'Lebanese Consulate Lagos',
          address: 'Victoria Island, Lagos',
          phone: '+234 1 261 5925',
          link: 'http://www.lebaneseconsulatelagos.com/'
        }
      ],
      womensRights: [
        'Nigeria has legal protections for women but enforcement is inconsistent',
        'Gender-based violence criminalized but reporting rates low due to stigma',
        'Lagos described as "misogynistic state" with harassment normalized',
        'Women\'s rights organizations: WARIF (Women at Risk International Foundation)',
        'Legal system often fails to protect women from harassment and assault'
      ],
      legalSupport: [
        'US Consulate provides attorney referrals: +234 1 460 3400',
        'Nigerian Bar Association: Legal assistance and referrals',
        'Legal Aid Council of Nigeria: Free legal assistance for qualifying cases',
        'Embassy referrals essential for English-speaking legal support',
        'International NGOs provide legal support for assault cases'
      ],
      reportingProcedures: [
        'Call 112 for police (response quality varies significantly)',
        'Contact US Consulate immediately for serious crimes: +234 1 460 3400',
        'British nationals: +234 1 277 0780 for deputy high commission',
        'Document everything: photos, witness contacts, incident details',
        'Be aware: police response to women\'s complaints often inadequate',
        'Embassy support critical for navigating local legal system',
        'Consider contacting women\'s rights organizations for additional support',
        'Obtain multiple copies of any police reports if filed'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$7 - $15 USD / day',
        description: 'Lagos offers affordable accommodation and food but safety costs are high. Budget travelers $7-11/day with basic hotels. Mid-range $11-15/day with better security.',
        tip: 'Prioritize safety over savings - stay only in Victoria Island/Ikoyi international hotels. Budget extra for private security and transport.'
      },
      accommodation: [
        {
          type: 'International Hotels (Victoria Island)',
          avgCost: '$150-500/night',
          safetyNote: 'Essential for solo female travelers - highest security with 24/7 staff and controlled access.',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-Range Hotels (Victoria Island/Ikoyi)',
          avgCost: '$80-150/night',
          safetyNote: 'Acceptable security in safer areas but limited English-speaking staff.',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotels (Safe Areas Only)',
          avgCost: '$20-50/night',
          safetyNote: 'Very limited safe budget options. Must stay only in Victoria Island or Ikoyi.',
          safetyLevel: 'low'
        },
        {
          type: 'Hostels (Extremely Limited)',
          avgCost: '$10-20/night',
          safetyNote: 'Hostel culture minimal in Lagos. NOT recommended for solo female travelers.',
          safetyLevel: 'low'
        }
      ],
      transport: [
        {
          method: 'Hotel Arranged Private Driver',
          cost: '$50-100/day',
          safetyDescription: 'Safest option with vetted drivers and hotel accountability. Essential for all movements.',
          safetyLevel: 'medium'
        },
        {
          method: 'Uber/Bolt (with extreme caution)',
          cost: '$11-23 per ride',
          safetyDescription: 'Safer than local transport but still risks. Verify driver identity and share ride details.',
          safetyLevel: 'low'
        },
        {
          method: 'Licensed Taxi (Hotel arranged only)',
          cost: '$15-30 per ride',
          safetyDescription: 'Only use taxis arranged through international hotels. Never hail street taxis.',
          safetyLevel: 'low'
        },
        {
          method: 'Public Transport (NOT RECOMMENDED)',
          cost: '$0.25-1.00',
          safetyDescription: 'Extremely dangerous with high harassment and crime rates. AVOID completely.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Stay only in international hotels in Victoria Island - safety over savings',
        'Arrange private driver/security through hotel for all movements',
        'Eat only at hotel restaurants or verified safe establishments',
        'Avoid all street food and local markets due to safety concerns',
        'Budget extra for comprehensive travel insurance with emergency evacuation',
        'Consider Lagos only as brief transit point - minimize time in city',
        'Never leave hotel premises alone under any circumstances',
        'Book accommodation with highest security ratings and 24/7 staff',
        'Budget for emergency cash reserves for immediate departure if needed',
        'Use university guest houses only with hotel-arranged security escort'
      ]
    }
};

export default lagos;
