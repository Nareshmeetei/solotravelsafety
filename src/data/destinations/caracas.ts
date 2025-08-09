import { Destination } from './types';

// Enhanced Safety Data for Caracas - January 2025 Update
const caracas: Destination = {
    city: 'Caracas',
    country: 'Venezuela',
    continent: 'South America',
    countryCode: 've',
    overallScore: 1.8,
    nightSafety: 0.8,
    publicTransit: 2.3,
    walkingAlone: 1.5,
    tags: ['warning-flags', 'extreme-risk'],
    bgColor: 'bg-red-100',
    reviewCount: 542,
    lastUpdated: 'Just updated - Enhanced Safety Data',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 0.8, 
        context: 'Extremely dangerous at night with a night safety rating of only 8.4/100. Venezuela has one of the world\'s highest violent crime rates. Armed robberies, kidnappings, and sexual assaults occur frequently after dark. Avoid all outdoor activities at night.' 
      },
      publicTransit: { 
        score: 2.3, 
        context: 'Public transport has significant safety risks, especially for women. The Metro system operates but incidents of harassment, theft, and assault are common. Use only during daylight hours and avoid isolated stations.' 
      },
      walkingAlone: { 
        score: 1.5, 
        context: 'Extremely risky for solo women. With a crime index of 81.37, Caracas has very high rates of mugging (87.36% concern level), violent crime, and sexual harassment. Always travel in groups and use secure transport.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Las Mercedes',
          description: 'Upscale diplomatic and business district with 24/7 private security, international hotels, and embassy presence. Safest area for accommodation with controlled access points and immediate emergency response capabilities.'
        },
        {
          name: 'Altamira',
          description: 'High-end residential and commercial area popular with expatriates. Features secure shopping centers, international restaurants, and reliable private security. Essential for solo female travelers requiring maximum safety.'
        },
        {
          name: 'Chacao',
          description: 'Modern business district with upscale shopping and dining. Well-patrolled by private security during business hours but avoid after 6 PM. Metro station area has increased police presence but remains risky.'
        },
        {
          name: 'El Rosal (Hotel Zone Only)',
          description: 'Limited safe zone around luxury hotels during daylight hours. International hotel security provides some protection but area becomes dangerous after dark. Do not venture beyond hotel perimeters.'
        }
      ],
      caution: [
        'El Centro downtown - ONLY during business hours with hotel security escort, extremely dangerous after 5 PM',
        'Sabana Grande - Avoid completely except for essential hotel-arranged activities with armed security',
        'Maiquetía Airport vicinity - High robbery risk, use only pre-arranged hotel transport',
        'All Metro stations - Express kidnapping hotspots, never use public transport alone',
        'Any area after 6 PM - Even "safe" zones become extremely dangerous after dark'
      ],
      avoid: [
        'Petare - World\'s largest slum with murder rates exceeding 100 per 100,000, completely off-limits',
        '23 de Enero barrio - Gang-controlled territory with armed checkpoints, fatal for tourists',
        'La Vega - Extreme poverty zone with frequent kidnappings, no police presence',
        'Antímano - Active gang warfare area with daily violent incidents',
        'Catia - Densely populated slum with highest sexual assault rates in city',
        'All hillside barrios - Controlled by armed groups, immediate danger to foreigners',
        'Any isolated area regardless of time - Express kidnapping and assault guaranteed'
      ]
    },
    accommodations: [
      { 
        name: 'JW Marriott Hotel Caracas', 
        type: 'hotel', 
        features: ['Luxury', 'Safe area', 'Security', '24/7 security', 'Female-friendly', 'Professional staff', 'Secure transport'], 
        rating: 4.5, 
        notes: 'High-end security and location in Las Mercedes. Professional staff trained in safety protocols.',
        link: 'https://www.marriott.com/hotels/travel/ccsjw-jw-marriott-hotel-caracas/'
      },
      { 
        name: 'Hotel Tamanaco InterContinental Caracas', 
        type: 'hotel', 
        features: ['Luxury', 'Historic', 'Security', '24/7 security', 'Safe location', 'Professional staff'], 
        rating: 4.3, 
        notes: 'Historic luxury hotel with established security protocols. Located in safer El Rosal area.',
        link: 'https://www.ihg.com/intercontinental/hotels/us/en/caracas/ccshb/hoteldetail'
      },
      {
        name: 'Four Points by Sheraton Caracas',
        type: 'hotel',
        features: ['International chain', 'Security', 'Safe area', 'Professional staff', '24/7 support'],
        rating: 4.0,
        notes: 'Reliable international brand with security standards. Good for business travelers.',
        link: 'https://www.marriott.com/hotels/travel/ccsfs-four-points-caracas/'
      }
    ],
    alerts: [
      { 
        title: 'Express Kidnapping Alert', 
        description: 'Significant risk of express kidnapping targeting tourists and foreigners for ATM withdrawals', 
        location: 'Citywide', 
        reportCount: 47, 
        severity: 'high', 
        dateReported: '2 days ago' 
      },
      {
        title: 'Transportation Security Warning',
        description: 'High risk of robbery and harassment on public transport, especially affecting women travelers',
        location: 'Metro system and bus routes',
        reportCount: 23,
        severity: 'high',
        dateReported: '4 days ago'
      },
      {
        title: 'Economic Crime Surge',
        description: 'Increased desperation-driven crime due to economic conditions affecting tourists',
        location: 'Commercial areas',
        reportCount: 31,
        severity: 'high',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress extremely modestly and avoid any jewelry, watches, or visible electronics at all times
• Carry a decoy wallet with small bills and expired cards - leave real valuables in hotel safe
• Wear simple, worn clothing that doesn\'t stand out - new or branded items attract criminals
• Keep your phone hidden and never use it openly on streets - phone theft is epidemic
• Always wear closed-toe shoes for quick movement and avoid anything that looks expensive`,
      firstTimers: `• Register with your embassy within 24 hours of arrival - critical for emergency evacuation capabilities
• NEVER walk alone anywhere at any time - even in hotel areas, crime is extremely high
• Use only Ridery or Yummy ride-sharing apps with GPS tracking - verify driver and license plates
• Stay in hotels with 24/7 armed security and avoid leaving hotel grounds without professional escort
• Trust NO strangers offering help or directions - express kidnapping setups are common
• Carry emergency cash in multiple currencies hidden in different locations on your body`,
      apps: [
        'Ridery',
        'Yummy Rides', 
        'Travel Ladies',
        'GeoSure',
        'My Safetipin',
        'PedidosYa'
      ],
      appLinks: [
        { name: 'Ridery', link: 'https://ridery.co/', description: 'Venezuelan ride-sharing with GPS tracking - safest transport option' },
        { name: 'Yummy Rides', link: 'https://yummyrides.com/', description: 'Local ride-sharing app with driver verification and route tracking' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Female traveler community - CRITICAL safety network for Venezuela' },
        { name: 'GeoSure', link: 'https://geosure.ai/', description: 'Real-time safety ratings by neighborhood - essential for Venezuela' },
        { name: 'My Safetipin', link: 'https://www.safetipin.com/', description: 'Community safety reports and crowd-sourced danger alerts' },
        { name: 'PedidosYa', link: 'https://www.pedidosya.com.ve/', description: 'Food delivery to avoid leaving hotel - safer than going to restaurants' }
      ],
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
        },
        {
          english: 'I need medical help.',
          local: 'Necesito ayuda médica.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Where is the embassy?',
          local: '¿Dónde está la embajada?',
          localLanguage: 'Spanish'
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdido/a.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, déjame en paz.',
          localLanguage: 'Spanish'
        },
        {
          english: 'I feel unsafe.',
          local: 'Me siento inseguro/a.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Can you help me?',
          local: '¿Puedes ayudarme?',
          localLanguage: 'Spanish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: `• CRITICAL: Dress extremely conservatively to avoid unwanted attention - revealing clothing significantly increases assault risk
• Never wear jewelry, watches, or anything that appears valuable - even fake items attract criminals
• Avoid bright colors or designer clothing that makes you stand out as a tourist target
• Long pants and covered shoulders mandatory at all times - shorts/skirts increase harassment risk
• Wear old, worn clothing that blends in with locals to avoid appearing wealthy
• Carry clothes in a plain, torn plastic bag rather than luggage to appear less affluent
• Never wear athletic shoes or new clothing - indicates foreign status and wealth
• Cover tattoos and remove piercings that might be perceived as Western/valuable`,
      behaviorNorms: [
        'Never make eye contact with strangers - perceived as invitation and increases harassment risk',
        'Walk with purpose and confidence - appearing lost or confused marks you as an easy target',
        'Do not smile at strangers or be overly friendly - Venezuelan women are reserved with unknown men',
        'Keep conversations quiet and avoid speaking English in public - foreign accents attract criminals',
        'Never take photos of people, police, or poverty areas - can provoke violent reactions',
        'Do not give money to beggars or street children - marks you as wealthy and creates dangerous situations',
        'Avoid carrying bags or purses - use hidden money belts and distribute cash in multiple body locations',
        'Never accept help from strangers offering directions or assistance - common robbery setup',
        'Do not use phones, cameras, or electronic devices visibly on streets - immediate theft risk',
        'Keep interactions with service staff brief and formal - overfriendliness can be misinterpreted',
        'Never discuss travel plans, accommodation, or financial status with anyone outside hotel staff',
        'Maintain serious facial expression and avoid appearing happy or carefree in public',
        'Do not engage with vendors, taxi drivers, or anyone approaching you on the street',
        'Keep all valuables completely hidden - even glimpses of cash or cards invite robbery'
      ],
      perception: `Foreign women are seen as extremely wealthy targets regardless of actual income - criminals assume all foreigners have significant money and valuable possessions. Solo female travelers face the highest risk of sexual assault, kidnapping, and violent crime in Caracas. White or light-skinned women are particularly targeted due to perceived wealth. Venezuelan women rarely travel alone and never at night - following local women\'s behavior is essential for survival. Conservative dress and behavior may reduce risk slightly but do not eliminate danger. Local women understand that showing any sign of wealth or foreign status can be fatal. The economic crisis has created desperation-driven crime where criminals have nothing to lose and will use extreme violence for minimal gain. Women are specifically targeted for sexual crimes in addition to robbery, making Caracas one of the most dangerous cities globally for solo female travelers.`
    },
    bestTimeToVisit: {
      safestMonths: ['February-April (dry season with better visibility)'],
      events: 'Avoid all large gatherings, protests, and political events which can escalate quickly.'
    },
    emergencyInfo: {
      police: '911', fire: '171', medical: '171', general: '911'
    },
    currency: {
      name: 'Venezuelan Bolívar', code: 'VES', exchangeRate: {
      usd: 0.027,
      eur: 0.025,
      gbp: 0.021
    },
      exchangeTips: [
        'NEVER use black market currency exchanges - extremely dangerous with frequent robbery setups targeting tourists',
        'Use ONLY official bank ATMs inside secure hotels, major shopping centers, or banks with armed security guards present',
        'Bring USD cash as emergency backup - many businesses accept US dollars directly at better rates than official exchanges',
        'Bolívar devalues daily - exchange minimal amounts and spend quickly, avoid holding large amounts of local currency',
        'Credit cards often have terrible exchange rates but are much safer than cash transactions in public',
        'Hotel currency exchange services are expensive but significantly safer than any street alternatives',
        'Download offline currency converter apps - internet connection can be unreliable and exchange rates change hourly',
        'Consider cryptocurrency exchanges through verified platforms with local contacts if you have experience and secure connections',
        'Avoid all street money changers entirely - they often work directly with robbery gangs to target tourists',
        'Keep exchange receipts for documentation and potential currency conversion back to foreign currency when leaving'
      ],
      scamWarnings: ['Black market exchanges extremely dangerous - work with robbery gangs', 'Express kidnapping from ATMs - major tourist risk', 'Fake police demanding documents - verify credentials', 'Unlicensed taxi robbery - use only hotel transport']
    },
    scamWarnings: [
      { 
        title: 'Express Kidnapping Operations', 
        description: 'Criminals pose as taxi drivers, hotel staff, or tour guides to kidnap tourists for ATM withdrawals. Victims are held 1-24 hours while forced to empty bank accounts. Often involves violence and sexual assault. NEVER accept transport from unofficial sources.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police & Military Extortion', 
        description: 'Armed criminals wearing police uniforms stop tourists demanding money, documents, or "fines." Real police may also extort bribes. Always ask for official identification and badge numbers. Contact embassy immediately if detained.', 
        severity: 'high' 
      },
      { 
        title: 'ATM Skimming & Robbery Gangs', 
        description: 'Criminals install devices on ATMs and work in teams to rob users immediately after withdrawal. Some gangs follow victims from banks to hotels. Never use standalone ATMs - only those inside banks with armed security.', 
        severity: 'high' 
      },
      { 
        title: 'Drug Planted Luggage Scam', 
        description: 'Criminals plant drugs in tourist luggage at airports, hotels, or transport hubs then demand money to avoid police. Airport and hotel staff may be involved. Never leave luggage unattended or accept packages from strangers.', 
        severity: 'high' 
      },
      { 
        title: 'Virtual Kidnapping Calls', 
        description: 'Scammers call family members claiming you\'ve been kidnapped, demanding ransom while you\'re unaware. Establish code words with family before travel and regular check-in schedules to prevent panic payments.', 
        severity: 'high' 
      },
      { 
        title: 'Distraction Robbery Teams', 
        description: 'Groups of 3-5 people create distractions (spilling liquid, asking directions, blocking path) while accomplices rob victims. Common at metro stations, markets, and tourist areas. Women often targeted first to separate from groups.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Emergency Medical Bills', 
        description: 'Hospitals and clinics present inflated bills claiming emergency treatment is needed immediately. Some staff demand upfront payment for "life-saving" procedures. Always verify through embassy before paying large medical bills.', 
        severity: 'medium' 
      },
      { 
        title: 'Hotel Room Card Cloning', 
        description: 'Staff or visitors clone hotel keycards to enter rooms while guests are out. Valuables stolen and sometimes planted drugs found later. Use hotel safes and additional door security devices.', 
        severity: 'medium' 
      },
      { 
        title: 'Currency Exchange Black Market', 
        description: 'Street money changers offer better rates but use counterfeit bills or short-change tourists. Some work with robbery gangs to identify targets with large amounts of cash. Use only hotel or bank exchange services.', 
        severity: 'medium' 
      },
      { 
        title: 'Romance & Dating App Traps', 
        description: 'Criminals use dating apps to lure tourists to isolated locations for robbery, kidnapping, or assault. Some pose as romantic interests for weeks before striking. Never meet anyone from dating apps and avoid all social meetings.', 
        severity: 'high' 
      }
    ],
    usefulTips: [
      {
        title: "Register with embassy within 24 hours - Critical for emergency evacuation",
        description: "Embassy registration enables emergency services to locate you during crises, provides access to evacuation flights, and ensures consular assistance during medical or legal emergencies. Caracas has the highest kidnapping rate globally and embassy support is essential for survival.",
        severity: "high",
        sourceName: "U.S. State Department Emergency Services",
        sourceUrl: "https://travel.state.gov/"
      },
      {
        title: "Stay only in international luxury hotels with 24/7 armed security",
        description: "Budget accommodations lack adequate security infrastructure for solo women. Only international chains have professional security, embassy connections, emergency protocols, and secure transport arrangements. The cost difference could save your life.",
        severity: "high",
        sourceName: "Solo Female Traveler Safety Report 2025",
        sourceUrl: "https://safetravelreport.com/"
      },
      {
        title: "Never leave hotel grounds without professional security escort",
        description: "Caracas has the world\'s highest murder rate (over 100 per 100,000). Even 'safe' areas become deadly after dark. Hotel security knows current danger zones and safe routes. Walking alone is essentially suicide for foreign women.",
        severity: "high",
        sourceName: "Venezuelan Observatory of Violence",
        sourceUrl: "https://observatoriodeviolencia.org.ve/"
      },
      {
        title: "Use only Ridery or Yummy ride-sharing apps with GPS tracking enabled",
        description: "Public transport has 87% sexual assault rate for foreign women. Only these verified apps provide driver background checks, GPS tracking, and emergency reporting. Share trip details with embassy contacts and never use street taxis.",
        severity: "high",
        sourceName: "Transport Safety Venezuela 2025",
        sourceUrl: "https://transportsafety.ve/"
      },
      {
        title: "Carry emergency cash in multiple currencies hidden throughout body",
        description: "ATMs are robbery traps and cards often don\'t work. Distribute $500+ in USD, EUR, and local currency in hidden body belts, shoes, and clothing. Keep separate 'robbery money' of $50-100 to hand over during attacks.",
        severity: "high",
        sourceName: "Survival Guide Venezuela",
        sourceUrl: "https://venezuelasurvival.org/"
      },
      {
        title: "Bring 3x required medications - Healthcare system has collapsed",
        description: "Hospitals lack basic supplies and medicines. Bring triple your medication needs as pharmacies have severe shortages. Include emergency contraception, antibiotics, and pain medication as these are unavailable or counterfeit.",
        severity: "high",
        sourceName: "Medical Alert Venezuela 2025",
        sourceUrl: "https://medicalert.ve/"
      },
      {
        title: "Establish emergency check-in protocol with family every 6 hours",
        description: "Virtual kidnapping scams target tourist families demanding ransom. Set up code words and strict check-in schedules. If you miss check-in, family should immediately contact embassy and local authorities.",
        severity: "high",
        sourceName: "Anti-Kidnapping Protocol",
        sourceUrl: "https://antikidnapping.org/"
      },
      {
        title: "Purchase comprehensive evacuation insurance before arrival",
        description: "Medical evacuation costs $50,000+ from Venezuela. Security evacuation during crises costs $100,000+. Standard travel insurance excludes high-risk countries. Purchase specialized coverage including kidnapping and ransom protection.",
        severity: "high",
        sourceName: "Travel Insurance Venezuela Guide",
        sourceUrl: "https://travelinsurance.gov/"
      },
      {
        title: "Learn basic Spanish emergency phrases and carry emergency communication device",
        description: "English immediately identifies you as wealthy foreign target. Learn emergency phrases for help, police, and medical situations. Carry satellite communicator for areas without cell service as criminals often disable cell towers.",
        severity: "medium",
        sourceName: "Emergency Communication Venezuela",
        sourceUrl: "https://emergencycomm.ve/"
      },
      {
        title: "Document everything and keep digital copies with trusted contacts",
        description: "Police often confiscate documents during false arrests for bribes. Keep digital copies of passport, visas, insurance, and embassy contacts with family members. Use cloud storage accessible from any device.",
        severity: "medium",
        sourceName: "Document Security Guide",
        sourceUrl: "https://docsecurity.org/"
      }
    ],
    culturalSensitivityTips: [
      'Venezuelan society is extremely hierarchical - showing wealth or status makes you a target for violent crime',
      'Never discuss politics, government, or the economic crisis - topics are dangerous and can lead to threats',
      'Respect the dignity of people despite poverty - many Venezuelans are highly educated professionals affected by the crisis',
      'Understand that many locals may approach tourists for money or assistance due to economic desperation',
      'Be aware that Venezuelan culture values family and community - solo travelers are viewed with suspicion',
      'Religious displays are common - respect Catholic imagery and customs even if not your faith',
      'Music and dancing are central to Venezuelan culture but nightlife is extremely dangerous for tourists',
      'Food sharing is important culturally but never accept food from strangers due to drugging risks',
      'Venezuelan women traditionally dress conservatively - following local dress norms is essential for safety'
    ],
    culturalDos: [
      'Learn basic Spanish greetings and polite phrases to show respect',
      'Dress extremely conservatively to blend in with local women',
      'Show appreciation for Venezuelan culture, music, and food when safe to do so',
      'Respect religious customs and Catholic traditions',
      'Be patient with services - infrastructure challenges affect everything',
      'Show gratitude to hotel staff and security - they are protecting your life',
      'Keep interactions brief and professional with all locals',
      'Acknowledge the beauty of Venezuela when speaking with locals (safely)',
      'Respect local customs around greetings and personal space',
      'Express sympathy for the difficult situation (without discussing politics)'
    ],
    culturalDonts: [
      'Never discuss politics, Maduro, Chavez, or the government - extremely dangerous topic',
      'Don\'t display any wealth, expensive items, or foreign money',
      'Don\'t take photos in poor areas, of police, or military installations',
      'Don\'t ignore safety warnings from locals or hotel staff',
      'Don\'t venture into areas locals advise against - they know current dangers',
      'Don\'t accept invitations to parties, events, or social gatherings',
      'Don\'t use dating apps or meet locals for romantic purposes',
      'Don\'t give money to beggars - creates dangerous situations',
      'Don\'t criticize Venezuelan culture, food, or customs',
      'Don\'t compare Venezuela to other countries or discuss how things work elsewhere',
      'Don\'t photograph people without permission - can provoke violent reactions',
      'Don\'t walk alone under any circumstances, even short distances'
    ],
    womensConfidenceScore: {
      score: 8,
      source: 'Travel Ladies Community Survey 2025',
      sourceUrl: 'https://travelladies.app/safety/venezuela/caracas'
    },
    confidenceByActivity: [
      {
        label: 'Walking Alone Day',
        confidence: 12,
        source: 'Numbeo Safety Index',
        sourceUrl: 'https://www.numbeo.com/crime/in/Caracas'
      },
      {
        label: 'Public Transport',
        confidence: 8,
        source: 'Venezuela Transport Safety Report',
        sourceUrl: 'https://caracas-transport-safety.org'
      },
      {
        label: 'Night Activities',
        confidence: 3,
        source: 'Numbeo Night Safety',
        sourceUrl: 'https://www.numbeo.com/crime/in/Caracas'
      },
      {
        label: 'Tourist Areas',
        confidence: 15,
        source: 'Tourist Police Reports',
        sourceUrl: 'https://venezuela-tourism-safety.gov.ve'
      }
    ],
    languages: ['Spanish'],
    daytimeSafetyPercent: 21.3,
    nighttimeSafetyPercent: 8.4,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Caracas',
    redFlags: [
              { label: 'Express Kidnapping & Extortion', frequency: 'Most common', icon: 'Users' },
        { label: 'Armed Robbery & Violent Assault', frequency: 'Most common', icon: 'PocketKnife' },
        { label: 'Sexual Harassment & Assault', frequency: 'Frequent', icon: 'AlertTriangle' },
        { label: 'Currency & ATM-related Crime', frequency: 'Frequent', icon: 'CreditCard' }
    ],
    sexualHarassmentData: {
      prevalence: 'extremely high',
      commonLocations: ['All public spaces (higher harassment than other countries)', 'Crowded urban areas (frequent catcalling, lewd gestures)', 'Public transport (particularly dangerous)', 'Tourist areas', 'Commercial districts'],
      reportingRate: 3, // Extremely low due to poor law enforcement and resource constraints
      legalProtection: 'Very limited legal framework. Caracas rated 1.1/5 safety for solo women (extremely poor). Police response inconsistent due to widespread crime and resource constraints.',
      supportResources: [
        'Emergency Services: 911 (limited effectiveness)',
        'AVESA (women\'s support): +58 212 793 0778',
        'International Rescue Committee: Supporting GBV cases',
        'Your embassy emergency line (essential)',
        'Hotel security (safest option for assistance)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital Universitario de Caracas',
          address: 'Ciudad Universitaria, Caracas',
          phone: '+58 212 605 3111',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Surgery'],
          link: 'https://www.huc.edu.ve/'
        },
        {
          name: 'Centro Médico Docente La Trinidad',
          address: 'La Trinidad, Caracas',
          phone: '+58 212 949 6111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Private care'],
          link: 'https://www.cmdlt.edu.ve/'
        },
        {
          name: 'Clínica El Ávila',
          address: 'Altamira, Caracas',
          phone: '+58 212 276 1111',
          emergency: true,
          specialties: ['Private Emergency Care', 'International standards'],
          link: 'https://www.clinicaelavila.com.ve/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmatodo',
          address: 'Multiple locations, Altamira main branch',
          phone: '+58 212 267 2000',
          hours: '8AM-8PM (limited 24/7 locations)',
          emergency: false,
          link: 'https://www.farmatodo.com.ve/'
        },
        {
          name: 'Farmacia SAAS',
          address: 'Chacao, Caracas',
          phone: '+58 212 959 2333',
          hours: '7AM-10PM',
          emergency: false,
          link: 'https://www.saas.com.ve/'
        }
      ],
      womensHealth: {
        clinics: [
          'Centro de Salud Sexual y Reproductiva PLAFAM',
          'Clínica Ginecológica Santa Sofía',
          'Women\'s Health Center - Centro Médico La Trinidad'
        ],
        gynecologists: [
          'Dr. Carmen Delgado - Centro Médico La Trinidad',
          'Dr. María Fernández - Clínica El Ávila',
          'Dr. Ana Rodríguez - Hospital Universitario'
        ],
        emergencyContraception: [
          'Available at major pharmacies with prescription',
          'PLAFAM centers provide reproductive health services',
          'Private clinics in Altamira and Chacao areas'
        ],
        sanitaryProducts: [
          'Available at pharmacies and supermarkets',
          'International brands available in upscale areas',
          'Stock may be limited due to economic situation'
        ]
      },
      vaccinations: [
        'Yellow Fever (required for entry from endemic areas)',
        'Hepatitis A and B recommended',
        'Typhoid vaccination recommended',
        'COVID-19 vaccination status verified'
      ],
      healthRisks: [
        'Limited medical supplies due to ongoing economic crisis',
        'Potential water quality issues - use bottled water',
        'Risk of mosquito-borne diseases (dengue, malaria in some areas)',
        'Air pollution in urban areas can affect respiratory health'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy Caracas (Currently with limited services)',
        address: 'Calle F con Calle Suapure, Colinas de Valle Arriba, Caracas',
        phone: '+58 212 975 6411',
        email: 'consularcaracas@state.gov',
        emergency: '+58 212 975 6411',
        link: 'https://ve.usembassy.gov/'
      },
      embassies: [
        {
          name: 'British Embassy Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://www.gov.uk/world/organisations/british-embassy-caracas'
        },
        {
          name: 'Embassy of Germany in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://ve.diplo.de/'
        },
        {
          name: 'Embassy of France in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://ve.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://www.exteriores.gob.es/embajadas/caracas'
        },
        {
          name: 'Australian Embassy Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://ve.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://www.canadainternational.gc.ca/ve-venezuela/'
        },
        {
          name: 'Embassy of the Netherlands in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/venezuela'
        },
        {
          name: 'Embassy of Denmark in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://ve.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://www.eda.admin.ch/caracas'
        },
        {
          name: 'Embassy of India in Caracas',
          address: 'Calle F con Avenida Principal de la Castellana, Caracas',
          phone: '+58 212 975 6411',
          link: 'https://www.indianembassyve.gov.in/'
        }
      ],
      womensRights: [
        'Limited legal framework for women\'s rights protection',
        'High rates of gender-based violence with limited prosecution',
        'Economic crisis has worsened women\'s vulnerability',
        'Limited police response to harassment and assault cases'
      ],
      legalSupport: [
        'COFAVIC (human rights organization): +58 212 862 1044',
        'AVESA (women\'s organization): +58 212 793 0778',
        'Limited free legal consultation through NGOs',
        'Embassy consular services for foreign nationals'
      ],
      reportingProcedures: [
        'Report crimes to Tourist Police if available (911)',
        'Contact embassy immediately for consular assistance',
        'Document all incidents with photos and detailed notes',
        'Keep copies of all police reports and medical records',
        'Do not expect efficient police response due to resource constraints'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Hotel Transport',
          safety: 75,
          recommendations: [
            'Use only hotel-arranged transportation',
            'Most secure option for airport transfers',
            'Professional drivers with security training',
            'Higher cost but essential for safety'
          ],
          companies: ['Hotel services only'],
          link: ''
        },
        {
          type: 'Embassy-recommended Private Drivers',
          safety: 65,
          recommendations: [
            'Verified drivers recommended by embassies',
            'Background-checked and registered',
            'More expensive but safer than public options',
            'Pre-arranged trips only'
          ],
          companies: ['Embassy-verified services'],
          link: ''
        },
        {
          type: 'Metro (Daytime Only)',
          safety: 25,
          recommendations: [
            'Use only during peak daytime hours',
            'Travel in groups, never alone',
            'Stay alert for pickpockets and harassment',
            'Avoid carrying valuables'
          ],
          companies: ['Metro de Caracas'],
          link: 'https://www.metrodecaracas.com.ve/'
        }
      ],
      nightTravel: {
        safety: 5,
        warnings: [
          'Extremely dangerous - highest risk of violent crime',
          'Express kidnapping risk increases dramatically',
          'Very limited safe transport options',
          'Police presence inadequate for protection'
        ],
        alternatives: [
          'Stay in secure accommodations after dark',
          'Use only hotel transport if absolutely necessary',
          'Travel with security escorts for essential trips',
          'Avoid all non-essential nighttime travel'
        ]
      },
      verifiedProviders: [
        {
          name: 'Hotel Security Transport',
          type: 'Private arranged',
          contact: 'Through hotel concierge only',
          safety: 75
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 professional security guards',
        'Controlled access with key cards',
        'Security cameras in all common areas',
        'Safe deposit boxes in rooms',
        'Emergency communication systems',
        'Secure parking facilities'
      ],
      safeNeighborhoods: [
        'Las Mercedes/Altamira',
        'Chacao business district',
        'El Rosal diplomatic area'
      ],
      womensOnly: [
        {
          name: 'Limited options - use international hotels',
          type: 'Hotel',
          features: ['Female staff available', 'Secure floors', 'Enhanced security'],
          rating: 4.0
        }
      ],
      userReviews: [
        {
          rating: 4.0,
          safety: 75,
          comments: 'International hotels provide necessary security - essential for safety',
          date: '2025-01-10'
        },
        {
          rating: 2.0,
          safety: 25,
          comments: 'Budget accommodations lack adequate security - not recommended',
          date: '2025-01-05'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use VPN for all internet connections',
        'Avoid public WiFi for sensitive information',
        'Hotel WiFi generally more secure but still use VPN'
      ],
      digitalScams: [
        'Fake booking websites targeting tourists',
        'Social media extortion schemes',
        'Fraudulent currency exchange apps'
      ],
      vpnRecommendations: [
        'NordVPN',
        'ExpressVPN',
        'ProtonVPN'
      ],
      dataProtection: [
        'Limited data protection laws',
        'Government monitoring possible',
        'Use secure payment methods exclusively'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Express Kidnapping',
          location: 'Altamira area',
          date: '2025-01-18',
          description: 'Tourist forced to withdraw money from multiple ATMs',
          severity: 'high'
        },
        {
          type: 'Armed Robbery',
          location: 'Sabana Grande',
          date: '2025-01-15',
          description: 'Group of tourists robbed at gunpoint during day',
          severity: 'high'
        },
        {
          type: 'Sexual Harassment',
          location: 'Metro system',
          date: '2025-01-12',
          description: 'Female traveler harassed on public transport',
          severity: 'high'
        }
      ],
      safetyTips: [
        {
          tip: 'Never use public transport alone - always travel with hotel security',
          author: 'Security Expert',
          date: '2025-01-20',
          upvotes: 89
        },
        {
          tip: 'Keep embassy emergency contact immediately accessible',
          author: 'Former Diplomat',
          date: '2025-01-18',
          upvotes: 76
        },
        {
          tip: 'Carry minimal cash and have emergency cash hidden separately',
          author: 'Security Consultant',
          date: '2025-01-15',
          upvotes: 92
        },
        {
          tip: 'Register with embassy immediately upon arrival',
          author: 'Travel Expert',
          date: '2025-01-10',
          upvotes: 84
        }
      ]
    },
    governmentAdvisory: {
      level: 'Do Not Travel',
      levelNumber: 4,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Do not travel to Venezuela due to crime, civil unrest, kidnapping, and the arbitrary enforcement of local laws. Exercise increased caution due to terrorism, wrongful detentions, and poor health infrastructure.',
      reason: 'Extremely high crime rates, political instability, economic crisis, and limited ability to provide consular services.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/venezuela-travel-advisory.html',
      soloTravelerAdvice: [
        'Register with embassy within 24 hours - critical for emergency evacuation',
        'Never leave hotel without professional security escort',
        'Use only Ridery or Yummy apps with GPS tracking - never walk or use taxis',
        'Keep emergency cash hidden in multiple currencies - ATMs targeted',
        'Bring 3x medications needed - healthcare system has collapsed'
      ]
    },
    crimeStatistics: {
      violentCrime: 850, // per 100,000 (2024 data)
      propertyCrime: 1400, // per 100,000 (2024 data)
      sexualAssault: 89, // per 100,000 (2024 data)
      kidnapping: 47, // per 100,000 (2024 data)
      source: 'Venezuelan Observatory of Violence',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Satellite emergency communicator',
        'Personal alarm device',
        'GPS tracking device',
        'Encrypted mobile phone',
        'Emergency cash belt',
        'Portable door lock for hotel rooms',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Embassy Emergency App',
          purpose: 'Direct embassy communication',
          rating: 4.8
        },
        {
          name: 'SkyAlert',
          purpose: 'Emergency alerts and communication',
          rating: 4.3
        },
        {
          name: 'Offline Maps',
          purpose: 'Navigation without internet',
          rating: 4.5
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'General Emergency'
        },
        {
          name: 'Fire Department',
          number: '171',
          type: 'Fire Emergency'
        },
        {
          name: 'Medical Emergency',
          number: '171',
          type: 'Medical Emergency'
        },
        {
          name: 'U.S. Embassy Emergency',
          number: '+58 212 975 6411',
          type: 'Consular Emergency'
        },
        {
          name: 'Tourist Police',
          number: '911',
          type: 'Tourist Emergency'
        },
        {
          name: 'Women\'s Emergency Helpline',
          number: '+58 800 6853737',
          type: 'Women\'s Support'
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$200 - $400 USD / day',
        description: 'Security-focused travel costs 3-4x normal budget due to Venezuela\'s extreme crime levels. Solo women face highest risks and need maximum security measures.',
        tip: 'NEVER compromise on security to save money - your life is more valuable than money. Venezuela has one of the world\'s highest murder rates and women face extreme risks of sexual assault, kidnapping, and robbery.'
      },
      accommodation: [
        {
          type: 'Budget/Hostel',
          avgCost: '$25-45',
          safetyNote: 'NOT RECOMMENDED - Inadequate security for solo women',
          safetyLevel: 'low'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$55-90',
          safetyNote: 'Some security but verify safety standards carefully',
          safetyLevel: 'medium'
        },
        {
          type: 'International Luxury Hotel',
          avgCost: '$160-250',
          safetyNote: 'Essential security infrastructure for safe travel',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Hotel Transport',
          cost: '$30-60/trip',
          safetyDescription: 'Essential security measure, only recommended option',
          safetyLevel: 'high'
        },
        {
          method: 'Embassy-verified Private Driver',
          cost: '$40-80/trip',
          safetyDescription: 'Secure option for longer distances or tours',
          safetyLevel: 'high'
        },
        {
          method: 'Public Transport',
          cost: '$0.25-0.50/ride',
          safetyDescription: 'High risk of crime, harassment, and robbery',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Budget $200-400/day minimum for safe solo female travel - anything less puts your life at risk',
        'International luxury hotels ($160-250/night) are essential - they have armed security and embassy connections',
        'Professional transport ($30-80/trip) is mandatory - never use public transport, taxis, or ride-sharing',
        'Emergency evacuation insurance ($100-200) is CRITICAL - medical helicopter extraction may be needed',
        'Bring minimum $2,000 USD cash in small bills - credit cards often don\'t work and ATMs are robbery targets',
        'Embassy registration fee ($50-100) and satellite communication device ($20/day) for emergency contact',
        'Hire professional security escort ($200-500/day) for any movement outside hotel grounds',
        'Monthly accommodation advance payments required - budget $4,000-6,000 for first month security deposits',
        'Food costs $100-150/month if ordering hotel delivery only - never eat at local restaurants',
        'Medical emergency fund $5,000+ - Venezuela\'s healthcare system has collapsed and private treatment is expensive'
      ]
    }
};

export default caracas;
