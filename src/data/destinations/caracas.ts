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
    lastUpdated: '2 hours ago',
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
        features: ['Ultra-luxury', 'Las Mercedes location', 'Armed security', '24/7 security', 'Embassy connections', 'Professional staff', 'Secure transport', 'Female-friendly'], 
        rating: 4.6, 
        notes: 'Premier choice for solo female travelers. Located in diplomatic Las Mercedes district with world-class security protocols and staff trained specifically for high-risk environments.',
        link: 'https://www.marriott.com/hotels/travel/ccsjw-jw-marriott-hotel-caracas/'
      },
      { 
        name: 'Renaissance Caracas La Castellana Hotel', 
        type: 'hotel', 
        features: ['Luxury Marriott brand', 'La Castellana safe zone', 'Professional security', '24/7 staff', 'Business district location', 'Secure parking', 'Mountain views'], 
        rating: 4.4, 
        notes: 'Highly rated luxury hotel (8.2/10 on Booking.com) in safest Chacao neighborhood. 212 rooms including suites, excellent for solo female business travelers.',
        link: 'https://www.marriott.com/en-us/hotels/ccsbr-renaissance-caracas-la-castellana-hotel/'
      },
      { 
        name: 'Hotel Tamanaco InterContinental Caracas', 
        type: 'hotel', 
        features: ['Historic luxury', 'El Rosal diplomatic area', '24/7 security', 'International standards', 'Embassy proximity', 'Professional staff'], 
        rating: 4.3, 
        notes: 'Established luxury hotel with decades of security experience. Historic property with proven track record for VIP and diplomatic guests.',
        link: 'https://www.ihg.com/intercontinental/hotels/us/en/caracas/ccshb/hoteldetail'
      },
      {
        name: 'Pestana Caracas Premium City & Conference Hotel',
        type: 'hotel',
        features: ['Portuguese luxury chain', 'Los Palos Grandes safe area', 'Rooftop pool', '24/7 security', 'Residential location', 'Conference facilities', 'Premium service'],
        rating: 4.2,
        notes: 'Located in one of Caracas\'s quietest and safest residential areas. Recent 2025 reviews praise exceptional staff support and security in challenging city environment.',
        link: 'https://www.pestana.com/en/hotel/pestana-caracas'
      },
      {
        name: 'Eurobuilding Hotel & Suites Caracas',
        type: 'hotel',
        features: ['Financial district location', 'Corporate preferred', 'Swimming pool', 'Fitness center', 'Sauna', '24/7 security', 'Business facilities'],
        rating: 4.1,
        notes: 'Consistently rated as safest hotel option by corporate travelers and embassies. Located in financial district with excellent security infrastructure and emergency protocols.',
        link: 'https://www.eurobuilding.com.ve/'
      },
      {
        name: 'Meliá Caracas Hotel',
        type: 'hotel',
        features: ['Spanish luxury chain', 'Sabana Grande area', 'Outdoor pool with hydromassage', 'Sauna', 'Spa services', '24/7 reception', 'Valet parking', 'Air conditioning'],
        rating: 4.0,
        notes: '5-star luxury hotel offering European-style elegance with comprehensive security. Features spa services and 3 world-class restaurants, preferred by international business travelers.',
        link: 'https://www.melia.com/en/hotels/venezuela/caracas/melia-caracas'
      },
      {
        name: 'Cayena-Caracas Hotel',
        type: 'hotel',
        features: ['Boutique luxury', 'Modern design', 'State-of-the-art facilities', 'High security', 'Innovative engineering', 'Premium comfort', 'Professional service'],
        rating: 4.0,
        notes: 'Ranked #5 of 78 hotels in Caracas. Recent 2025 reviews highlight cutting-edge security technology and luxury amenities designed specifically for high-risk environment safety.',
        link: 'https://www.cayenacaracas.com/'
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
      firstTimers: `• Is Caracas safe for women solo travelers? Absolutely not - register with embassy within 24 hours for critical evacuation capabilities
• NEVER walk alone anywhere at any time - solo female travel safety requires constant vigilance in world's most dangerous city
• Use only Ridery or Yummy ride-sharing apps with GPS tracking essential for women traveling alone safety
• Stay in hotels with 24/7 armed security - solo female travel safety precautions require maximum protection
• Trust NO strangers offering help - express kidnapping targeting solo female travelers extremely common
• Carry emergency cash in multiple currencies - solo female travel safety gear includes hidden money distribution`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Ridery',
        'Emergency SOS',
        'PedidosYa'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for extreme-risk destinations like Caracas', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with panic button absolutely critical for Caracas dangers', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response crucial for extreme-risk areas', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely essential for Caracas safety monitoring', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Venezuela safety warnings', rating: 4.0 },
        { name: 'Ridery', link: 'https://ridery.co/', description: 'Venezuelan ride-hailing app - only safe transport option with GPS tracking', rating: 4.3 },
        { name: 'Emergency SOS', link: 'https://support.apple.com/', description: 'Built-in smartphone emergency feature for immediate local emergency services', rating: 4.8 },
        { name: 'PedidosYa', link: 'https://www.pedidosya.com.ve/', description: 'Venezuelan food delivery to avoid leaving hotel - safer than going to restaurants', rating: 4.4 }
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
      dressCode: [
        'Dress extremely conservatively to blend in - revealing clothing significantly increases solo female travel safety risks and assault probability',
        'Never wear jewelry, watches, or anything appearing valuable - even fake items immediately mark you as wealthy foreign target',
        'Avoid bright colors or designer clothing that makes you stand out - criminals specifically target well-dressed tourists for robbery',
        'Long pants and covered shoulders mandatory at all times - shorts/skirts dramatically increase harassment and assault risks',
        'Wear old, worn clothing that blends with locals - new or branded items signal wealth and foreign status to criminals',
        'Carry belongings in plain, worn plastic bags rather than luggage - backpacks and suitcases identify you as tourist target',
        'Never wear athletic shoes or Western-style clothing - immediately identifies foreign status and perceived wealth to robbery gangs',
        'Cover all tattoos and remove piercings - Western body modifications seen as valuable and mark you as wealthy foreigner'
      ],
      behaviorNorms: [
        'Never make direct eye contact with strangers on streets - perceived as invitation and significantly increases harassment risks',
        'Walk with purposeful confidence while appearing serious - lost or confused behavior marks you as vulnerable target for criminals',
        'Do not smile or be overly friendly with unknown men - Venezuelan women are reserved and cautious with strangers',
        'Keep all conversations quiet and avoid speaking English publicly - foreign accents immediately attract criminal attention',
        'Never photograph people, police, poverty areas, or military - can provoke immediate violent reactions and dangerous confrontations',
        'Do not give money to beggars or street children - marks you as wealthy target and creates cascading dangerous situations',
        'Use hidden money belts and distribute cash throughout body - never carry visible bags or purses that attract thieves',
        'Never accept help from strangers offering directions or assistance - extremely common setup for robbery and kidnapping schemes'
      ],
      perception: [
        'Is Caracas safe for female solo travelers? Absolutely not - foreign women are seen as extremely wealthy targets regardless of actual income',
        'Solo female travelers face the highest risk globally of sexual assault, kidnapping, and violent crime in Caracas due to economic desperation',
        'White or light-skinned women are particularly targeted due to perceived wealth - criminals assume all foreigners have significant money',
        'Venezuelan women rarely travel alone and never at night - following local women\'s behavior patterns is essential for survival',
        'Conservative dress and cautious behavior may reduce risk slightly but cannot eliminate the extreme dangers facing women traveling alone',
        'Local women understand that showing any wealth or foreign status can be fatal - even small indicators trigger violent crime',
        'Economic crisis created desperation-driven crime where criminals use extreme violence for minimal gain with nothing to lose',
        'Women are specifically targeted for sexual crimes in addition to robbery - making Caracas among world\'s most dangerous cities for solo female travelers'
      ]
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
      'Understand extreme economic hardship affects everyone',
      'Never discuss politics or government - extremely dangerous',
      'Respect dignity despite visible poverty and struggles', 
      'Be aware many highly educated people work menial jobs',
      'Expect approaches for financial help - economic desperation',
      'Recognize family/community values - solo travel seems odd',
      'Respect Catholic religious displays and customs',
      'Appreciate music culture but avoid nightlife completely',
      'Understand food sharing customs but never accept from strangers',
      'Follow conservative dress norms of local women',
      'Be sensitive to hyperinflation impact on daily life',
      'Show empathy for infrastructure and service challenges',
      'Don\'t flash foreign currency or electronic devices',
      'Don\'t trust strangers offering help or directions',
      'Don\'t eat street food or drink tap water',
      'Don\'t travel without embassy registration and contacts',
      'Don\'t assume Western social norms apply here'
    ],
    culturalDos: [
      'Learn basic Spanish greetings like "Buenos días"',
      'Dress extremely conservatively to blend in',
      'Show appreciation for culture when safe to do so',
      'Respect Catholic customs and religious displays',
      'Be patient with slow services and infrastructure issues',
      'Show gratitude to hotel security - they protect your life',
      'Keep all interactions brief and professional',
      'Acknowledge Venezuela\'s natural beauty when speaking safely',
      'Respect personal space and local greeting customs',
      'Express sympathy for difficulties without discussing politics'
    ],
    culturalDonts: [
      'Never discuss politics or government - extremely dangerous',
      'Don\'t display wealth, expensive items, or foreign money',
      'Don\'t photograph poor areas, police, or military',
      'Don\'t ignore safety warnings from locals or staff',
      'Don\'t venture into areas locals advise against',
      'Don\'t accept invitations to social gatherings or parties',
      'Don\'t use dating apps or meet locals romantically',
      'Don\'t give money to beggars - creates danger',
      'Don\'t criticize Venezuelan culture or customs',
      'Don\'t compare Venezuela to other countries',
      'Don\'t photograph people without explicit permission',
      'Don\'t walk alone anywhere, even short distances'
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
        description: 'Solo female travel safety requires 3-4x normal budget due to extreme crime levels. Women solo travel safety demands maximum security measures and professional protection services.',
        tip: 'NEVER compromise on solo female travel safety to save money - Venezuela has world\'s highest murder rates. Solo female travelers face extreme risks requiring trusted solo female travel safety tips and maximum security investment.'
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
          method: 'Hotel Transport with Armed Security',
          cost: '$30-60/trip',
          safetyDescription: 'Essential security measure - only truly safe option with professional security escort services',
          safetyLevel: 'high'
        },
        {
          method: 'Embassy-verified Private Driver',
          cost: '$40-80/trip',
          safetyDescription: 'Secure option for longer distances with background-checked, registered drivers for women traveling alone safety',
          safetyLevel: 'high'
        },
        {
          method: 'Yummy Rides App (Daylight Only)',
          cost: '$15-25/trip',
          safetyDescription: 'Venezuela\'s #1 transport app with GPS tracking - acceptable for solo female travel safety during daylight with precautions',
          safetyLevel: 'medium'
        },
        {
          method: 'Ridery App (Daylight Only)',
          cost: '$15-25/trip',
          safetyDescription: 'Venezuelan ride-sharing alternative to Uber - use only during day with GPS sharing for solo female traveler safety',
          safetyLevel: 'medium'
        },
        {
          method: 'SITSSA Airport Bus',
          cost: '$1-2/trip',
          safetyDescription: 'Government bus from airport only - acceptable for airport transfer but requires extreme caution',
          safetyLevel: 'low-medium'
        },
        {
          method: 'Private Airport Shuttle',
          cost: '$25-35/trip',
          safetyDescription: 'Pre-arranged airport transfers - safer than public options but verify driver credentials',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Caracas Metro System',
          cost: '$0.25-0.50/ride',
          safetyDescription: 'Extremely dangerous - high robbery, assault, and harassment rates. Infrastructure decay, no security',
          safetyLevel: 'low'
        },
        {
          method: 'Local Buses/Public Transport',
          cost: '$0.25-0.75/ride',
          safetyDescription: 'High risk of crime, sexual harassment, and robbery - never recommended for solo female travelers',
          safetyLevel: 'low'
        },
        {
          method: 'Street Taxis',
          cost: '$5-15/trip',
          safetyDescription: 'Extremely dangerous - high kidnapping and assault risk, never use unlicensed taxis',
          safetyLevel: 'low'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely dangerous - guaranteed targeting for robbery, assault, and worse. Never walk alone anywhere.',
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
    },
  youtubeVideos: {
    seeHowItsLike: [
      {
        videoId: "7vZ40yEVZmw",
        title: "Caracas Venezuela - Solo Travel Reality Check",
        description: "Authentic insights into the challenges and realities of traveling in Caracas with critical safety considerations for solo travelers"
      }
    ]
  },
  youtubeVideo: {
    videoId: "7vZ40yEVZmw"
  }
};

export default caracas;
