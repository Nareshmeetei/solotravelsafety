import { Destination } from './types';

// Enhanced Safety Data for Manila - January 2025 Update
const manila: Destination = {
    city: 'Manila',
    country: 'Philippines',
    continent: 'Asia',
    countryCode: 'ph',
    overallScore: 4.3,
    nightSafety: 2.8,
    publicTransit: 3.5,
    walkingAlone: 3.2,
    tags: ['warning-flags', 'mixed-safety'],
    bgColor: 'bg-yellow-50',
    reviewCount: 756,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: { 
        score: 2.8, 
        context: 'Night safety varies significantly by area. BGC and Rockwell are well-lit and guarded, while other areas pose risks. Manila women rate overall safety 2.3/5. Philippines ranked #61 globally for solo female travelers. Armed robbery and sexual assault occur regularly.' 
      },
      publicTransit: { 
        score: 3.5, 
        context: 'Mixed public transport safety - LRT/MRT relatively safe during day, but armed hold-ups on jeepneys and buses occur frequently. Pickpocketing common especially in crowded areas. Use Grab or official taxis when possible, especially at night.' 
      },
      walkingAlone: { 
        score: 3.2, 
        context: 'Walking alone safety depends heavily on location. Developed areas like Makati, BGC, and Ortigas generally safer during day. Sexual harassment risk rated 2.2/5, but verbal harassment and catcalling still occur. Avoid isolated areas and stay alert.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Bonifacio Global City (BGC)',
          description: 'Modern planned business district with excellent security, wide sidewalks, and 24/7 guards. Safest area in Metro Manila for solo female travelers. High-end shopping, restaurants, and hotels. Well-lit streets and heavy foot traffic make night walking relatively safe.'
        },
        {
          name: 'Makati Central Business District',
          description: 'Major financial center with good security presence, international hotels, and business facilities. Generally safe during day and early evening. Well-developed area with modern infrastructure popular with expatriates and business travelers.'
        },
        {
          name: 'Ortigas Center',
          description: 'Another major business district with shopping centers, hotels, and office buildings. Good security during business hours but can become quieter at night. Generally safe for accommodation and dining but exercise normal urban precautions.'
        },
        {
          name: 'Rockwell',
          description: 'Upscale mixed-use development with luxury condos, shopping, and dining. Well-maintained with good security. Safe area for walking and exploring, particularly popular with affluent locals and expatriates.'
        }
      ],
      caution: [
        'Ermita (Tourist district with mixed safety conditions)',
        'Malate (Entertainment district - more crowded and varied safety)',
        'Pasay (Airport area - mixed conditions)',
        'Quezon City (Large area with varying safety by location)'
      ],
      avoid: [
        'Tondo (High crime area with poverty and gang activity)',
        'Quiapo (Crowded market area with high pickpocketing risk)',
        'Divisoria (Wholesale market area - avoid especially at night)',
        'Any isolated areas or back streets after dark',
        'Areas along Pasig River (higher crime rates)'
      ]
    },
    accommodations: [
      { 
        name: 'The Peninsula Manila', 
        type: 'hotel', 
        features: ['Makati location', 'International luxury standards', '24/7 concierge', 'High security protocols'], 
        rating: 4.6, 
        notes: 'Premier luxury hotel in safe Makati area with exceptional security and service. Popular with business travelers and solo female guests seeking maximum safety and comfort.' 
      },
      { 
        name: 'New World Makati Hotel', 
        type: 'hotel', 
        features: ['Central Makati', 'Business facilities', 'Security staff', 'Airport transfers'], 
        rating: 4.4, 
        notes: 'Established international hotel in heart of Makati CBD. Reliable security and English-speaking staff. Good base for exploring safer areas of Manila.' 
      },
      { 
        name: 'BGC Boutique Hotels', 
        type: 'hotel', 
        features: ['BGC location', 'Modern amenities', 'Safe area', 'Walking distance to attractions'], 
        rating: 4.3, 
        notes: 'Various boutique hotels in BGC offering modern accommodations in Manila\'s safest district. Ideal for solo female travelers prioritizing safety and convenience.' 
      },
      { 
        name: 'Z Hostel', 
        type: 'hostel', 
        features: ['Female dorms available', 'Social atmosphere', 'BGC/Makati area', 'Security measures'], 
        rating: 4.2, 
        notes: 'Popular backpacker hostel with female dorms and social environment. Located in safer area but still exercise normal precautions. Good for budget-conscious solo travelers.' 
      },
      { 
        name: 'Makati/BGC Budget Hotels', 
        type: 'hotel', 
        features: ['Safe area locations', 'Budget-friendly', 'Basic security', 'English-speaking staff'], 
        rating: 4.0, 
        notes: 'Various budget hotel options in Makati and BGC areas. Prioritize location in safe districts over luxury amenities for solo female traveler security.' 
      }
    ],
    alerts: [
      { 
        title: 'Violent Crime Against Foreign Nationals', 
        description: 'Armed robbery, sexual assault, and murder occur regularly across Philippines including Metro Manila. British nationals reported rape and sexual assaults in backpacker areas. Gun possession common and poorly regulated.', 
        location: 'Metro Manila and tourist areas', 
        reportCount: 67, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Kidnapping Risk Nationwide', 
        description: 'Risk of kidnapping by criminals demanding ransom exists across Philippines including Metro Manila. Both locals and foreigners targeted with increasing incidents reported in urban areas.', 
        location: 'Nationwide including Manila', 
        reportCount: 23, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Armed Hold-ups on Public Transport', 
        description: 'Frequent armed robberies on jeepneys and buses, particularly in Manila and large cities. Pickpocketing and bag snatching common on crowded public transport during rush hours.', 
        location: 'Public transport citywide', 
        reportCount: 89, 
        severity: 'medium', 
        dateReported: '5 days ago' 
      },
      { 
        title: 'Sexual Harassment in Tourist Areas', 
        description: 'Minor verbal harassment including catcalling and unsolicited comments reported by female travelers. Some incidents of more serious harassment in backpacker-popular areas.', 
        location: 'Tourist districts and entertainment areas', 
        reportCount: 34, 
        severity: 'medium', 
        dateReported: '1 week ago' 
      }
    ],
    safetyTips: {
      clothing: 'Dress modestly especially when visiting religious sites. Cover shoulders and knees. Avoid flashy jewelry and designer items that attract attention.',
      firstTimers: 'Stay in BGC, Makati, or Ortigas areas. Use Grab instead of street taxis. Avoid walking alone at night even in safer areas. Register with Tourist Assistance Call Center.',
      apps: ['Grab', 'Google Maps', 'Tourist Assistance PH'],
      appLinks: [
        { name: 'Grab', link: 'https://www.grab.com/ph/', description: 'Primary transport app - safer than jeepneys and taxis with GPS tracking and cashless payment' },
        { name: 'Google Maps', link: 'https://maps.google.com/', description: 'Essential for navigation and avoiding unsafe areas in Manila' },
        { name: 'Tourist Assistance PH', link: 'https://www.tourism.gov.ph/', description: 'Official Philippine tourism app with emergency contacts and safety resources' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Tulong!',
          localLanguage: 'Filipino'
        },
        {
          english: 'Call the police!',
          local: 'Tumawag ng pulis!',
          localLanguage: 'Filipino'
        },
        {
          english: 'I need help!',
          local: 'Kailangan ko ng tulong!',
          localLanguage: 'Filipino'
        },
        {
          english: 'Emergency!',
          local: 'Emergency!',
          localLanguage: 'English/Filipino'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress required in religious sites and government buildings. Cover shoulders and knees. Filipino culture values conservative appearance especially for women.',
      behaviorNorms: ['Use polite titles like "po" and "ate/kuya"', 'Be friendly and warm - Filipinos value approachability', 'Smile and show respect to elders', 'Accept food/drink offers graciously', 'Avoid public displays of frustration'],
      perception: 'Solo female travelers increasingly common and generally accepted. Filipinos are hospitable but maintain awareness of cultural differences and safety precautions.'
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
      { 
        title: 'Taxi Meter Scams and Overcharging', 
        description: 'Taxi drivers refusing to use meters, claiming meters are "broken," or taking unnecessarily long routes to increase fares. Always insist on meter use or agree on fare beforehand.', 
        severity: 'high' 
      },
      { 
        title: 'Pickpocketing and Bag Snatching', 
        description: 'Common in crowded areas, markets, jeepneys, and tourist spots. Organized groups may distract victims while accomplices steal valuables. Keep bags zipped and in front of body.', 
        severity: 'high' 
      },
      { 
        title: 'ATM Skimming and Card Fraud', 
        description: 'Card skimming devices on ATMs especially in tourist areas. Use ATMs inside banks or hotels. Cover PIN entry and check for unusual devices attached to card slots.', 
        severity: 'medium' 
      },
      { 
        title: 'Overpricing for Tourists', 
        description: 'Inflated prices for goods, services, and transport when vendors identify foreign tourists. Learn basic Filipino numbers and prices to avoid overcharging.', 
        severity: 'medium' 
      },
      { 
        title: 'Fake Police or Official Scams', 
        description: 'Criminals impersonating police or officials to extort money or commit crimes. Always ask for proper identification and badge numbers. Real police will allow embassy contact.', 
        severity: 'medium' 
      }
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
        confidence: 70,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Nightlife',
        confidence: 50,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Public Transport',
        confidence: 45,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Dining Alone',
        confidence: 75,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/manila/'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'St. Luke\'s Medical Center',
          address: 'E. Rodriguez Sr. Ave, Quezon City / BGC, Taguig',
          phone: '+63 2 8723 0101',
          emergency: true,
          specialties: ['Complete women\'s healthcare', 'Obstetrics & Gynecology', 'Emergency services', '24/7 care']
        },
        {
          name: 'The Medical City',
          address: 'Ortigas Ave, Pasig City',
          phone: '+63 2 8988 1000',
          emergency: true,
          specialties: ['Women\'s Health Care Center', 'Institute for Women\'s Health', 'Emergency ultrasound', 'Specialized clinics']
        },
        {
          name: 'Asian Hospital and Medical Center',
          address: 'Filinvest Corporate City, Alabang',
          phone: '+63 2 8771 9000',
          emergency: true,
          specialties: ['International-grade medical services', 'Women\'s health', 'Emergency care', 'Quality healthcare']
        },
        {
          name: 'Manila Doctors Hospital',
          address: '667 United Nations Ave, Ermita, Manila',
          phone: '+63 2 8524 3011',
          emergency: true,
          specialties: ['General hospital', 'Emergency services', 'Various specialties', 'Central Manila location']
        }
      ],
      pharmacies: [
        {
          name: 'Mercury Drug',
          address: 'Multiple locations citywide',
          phone: '+63 2 8524 4444',
          hours: 'Daily 7:00-24:00 (varies by location)',
          emergency: true
        },
        {
          name: 'Watsons Pharmacy',
          address: 'Multiple mall and street locations',
          phone: '+63 2 8631 9000',
          hours: 'Daily 8:00-22:00 (varies by location)',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'St. Luke\'s Medical Center: Complete women\'s healthcare with experienced OB-GYN team',
          'The Medical City Women\'s Health Care Center: One-Stop Clinic for Assessment of Risk (OSCAR)',
          'Kindred PH: Trusted women\'s health clinic with comprehensive OB-GYN and mental health services',
          'Chinese General Hospital: Comprehensive OB-GYN care with infertility center and family planning'
        ],
        gynecologists: [
          'Multiple qualified OB-GYNs at major hospitals with international training',
          'St. Luke\'s Medical Center: Experienced obstetrics and gynecology specialists',
          'The Medical City: Specialized clinics including high-risk pregnancy and menopause',
          'Consultation fees typically ₱700-₱1,000 with PhilHealth and HMO options available'
        ],
        emergencyContraception: [
          'Available at Mercury Drug and major pharmacies with prescription',
          'Hospital emergency departments provide reproductive health services',
          'Private OB-GYN clinics offer confidential contraceptive counseling',
          'Catholic influence may affect availability - consult with healthcare providers'
        ],
        sanitaryProducts: [
          'Widely available at Mercury Drug, Watsons, and convenience stores',
          'International brands available in malls and pharmacies',
          'Local and imported options at competitive prices',
          'Available 24/7 at many Mercury Drug locations'
        ]
      },
      vaccinations: [
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Hepatitis A and Typhoid recommended for extended stays',
        'Japanese Encephalitis for rural areas outside Manila',
        'No yellow fever requirement unless coming from endemic areas'
      ],
      healthRisks: [
        'Air pollution in Metro Manila affecting respiratory health',
        'Dengue fever risk during rainy season (June-November)',
        'Water-borne illnesses - drink bottled or properly treated water',
        'Traffic accident injuries due to chaotic traffic conditions',
        'Crime-related injuries in high-risk areas'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Manila',
          address: '1201 Roxas Boulevard, Manila 1000, Philippines',
          phone: '+63 2 5301 2000',
          link: 'https://ph.usembassy.gov/'
        },
        {
          name: 'British Embassy Manila',
          address: '120 Upper McKinley Road, McKinley Hill, Taguig City 1634',
          phone: '+63 2 8858 2200',
          link: 'https://www.gov.uk/world/organisations/british-embassy-manila'
        },
        {
          name: 'Australian Embassy Manila',
          address: '25th Floor, Tower 2 RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8757 8100',
          link: 'https://philippines.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Manila',
          address: '30th Floor, Tower 2 RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8857 9000',
          link: 'https://www.canadainternational.gc.ca/philippines-philippines/'
        },
        {
          name: 'German Embassy Manila',
          address: '25th Floor, Tower 2 RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8702 3000',
          link: 'https://manila.diplo.de/'
        },
        {
          name: 'French Embassy Manila',
          address: '16th Floor, Pacific Star Building, Sen. Gil Puyat Ave, Makati',
          phone: '+63 2 8857 6900',
          link: 'https://ph.ambafrance.org/'
        },
        {
          name: 'Japanese Embassy Manila',
          address: '2627 Roxas Boulevard, Pasay City',
          phone: '+63 2 8551 5710',
          link: 'https://www.ph.emb-japan.go.jp/'
        }
      ],
      womensRights: [
        'Philippines has progressive women\'s rights laws including Magna Carta of Women',
        'Violence Against Women and Children Act provides legal protection',
        '53.6% of women experience intimate partner violence - significant underreporting',
        'Women\'s rights organizations: Gabriela, DAWN (Development Action for Women Network)',
        'Legal system generally supportive but enforcement can be inconsistent'
      ],
      legalSupport: [
        'US Embassy provides attorney referrals: +63 2 5301 2000',
        'Philippine Bar Association: Legal assistance and referrals',
        'Public Attorney\'s Office: Free legal aid for qualifying cases',
        'Commission on Human Rights Philippines: Rights violations assistance',
        'Tourist Assistance Call Center: 24/7 support at +63 2 8632 1191'
      ],
      reportingProcedures: [
        'Call 911 for police, fire, and medical emergencies',
        'PNP Hotline: 117 or +63 2 8722 0650 for police assistance',
        'Contact embassy immediately for serious crimes involving foreign nationals',
        'Tourist Assistance Call Center: +63 2 8632 1191 (24/7 multilingual)',
        'Document everything: photos, witness contacts, incident details',
        'Request official police report with case number',
        'Violence Against Women desk available at police stations',
        'Women and Children Protection Units (WCPU) at major police stations'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$30 - $256 USD / day',
        description: 'Manila more expensive than other Philippine destinations. Budget travelers $30-50/day with hostels and local food. Mid-range $50-100/day with hotels. Luxury $100-256/day.',
        tip: 'Stay in BGC, Makati, or Ortigas for safety. Use Grab for transport. Budget varies significantly based on area - safer areas cost more.'
      },
      accommodation: [
        {
          type: 'Luxury Hotels (BGC/Makati)',
          avgCost: '$100-300/night',
          safetyNote: 'International standards with excellent security in safest areas of Manila.',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels (Safe Areas)',
          avgCost: '$50-100/night',
          safetyNote: 'Good security in BGC, Makati, or Ortigas with English-speaking staff.',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotels (Safe Areas Only)',
          avgCost: '$20-50/night',
          safetyNote: 'Basic but clean accommodations in safer districts. Avoid budget options in unsafe areas.',
          safetyLevel: 'medium'
        },
        {
          type: 'Hostels (Limited Options)',
          avgCost: '$11-25/night',
          safetyNote: 'Female dorms available but limited options. Choose hostels in BGC or Makati only.',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Grab (Ride-hailing)',
          cost: '$2-8 typical rides',
          safetyDescription: 'Safest ground transport option with tracked routes and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'LRT/MRT (Light Rail)',
          cost: '$0.50-1.00 per ride',
          safetyDescription: 'Relatively safe during daytime but crowded. Women-only cars available during peak hours.',
          safetyLevel: 'medium'
        },
        {
          method: 'Official Airport Taxi',
          cost: '$8-15 airport transfers',
          safetyDescription: 'Metered taxis from official airport stands. Safer than street taxis but more expensive than Grab.',
          safetyLevel: 'medium'
        },
        {
          method: 'Jeepneys (NOT recommended)',
          cost: '$0.20-1.00 per ride',
          safetyDescription: 'Frequent armed hold-ups and pickpocketing. Cultural experience but avoid for safety.',
          safetyLevel: 'low'
        },
        {
          method: 'Street Taxis (Use with caution)',
          cost: '$2-8 typical rides',
          safetyDescription: 'Meter scams common. Only use if metered and in safe areas. Grab preferred.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Stay exclusively in BGC, Makati, or Ortigas - safety over savings',
        'Use Grab for all transportation - small cost increase for major safety improvement',
        'Eat at malls and established restaurants rather than street food initially',
        'Purchase Manila Tourist Ticket for unlimited public transport ($5/day)',
        'Shop at SM Malls and other major shopping centers for safety and variety',
        'Book accommodations with good reviews and security ratings',
        'Register with Tourist Assistance Call Center: +63 2 8632 1191',
        'Use hotel concierge for recommendations rather than exploring alone initially',
        'Budget extra for Grab rides instead of walking long distances',
        'Take advantage of air-conditioned malls for free cooling and safe browsing'
      ]
    }
};

export default manila;
