import { Destination } from './types';

// Enhanced Safety Data for Mexico City - January 2025 Update
const mexicocity: Destination = {
    city: 'Mexico City',
    country: 'Mexico', 
    continent: 'North America',
    countryCode: 'mx',
    overallScore: 5.2,
    nightSafety: 4.1,
    publicTransit: 5.8,
    walkingAlone: 4.8,
    tags: ['warning-flags', 'cultural-immersion'],
    bgColor: 'bg-orange-50',
    reviewCount: 847,
    lastUpdated: '2 hours ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 4.1,
        context: 'Night safety varies significantly by neighborhood. Roma Norte, Condesa, and Polanco are generally safe with good lighting and security presence until 11 PM. However, Mexico City has concerning femicide rates (10-11 women murdered daily nationally) and sexual assault statistics. Avoid walking alone after midnight even in safe areas, and always use rideshare apps rather than street taxis.'
      },
      publicTransit: {
        score: 5.8,
        context: 'Mexico City Metro has women-only carriages (marked "Solo Mujeres") but sexual harassment remains prevalent - 9/10 women report experiencing violence on public transport. 300+ harassment cases reported annually in metro system alone. Use women-only cars during peak hours, but Uber/Didi strongly recommended over public transport for solo female travelers.'
      },
      walkingAlone: {
        score: 4.8,
        context: 'Walking safety depends heavily on location and time. Safe neighborhoods (Polanco, Roma Norte, Condesa) are walkable during daylight with good security presence. However, Mexico has rising kidnapping rates (422 cases in Sept 2024 vs 83 in 2023) with 66% being "express kidnappings" targeting tourists. Always stay in verified safe areas and avoid displaying wealth.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Polanco',
          description: 'Upscale business and diplomatic district with luxury hotels and high-end shopping. Consistently ranked as one of Mexico City\'s top 3 safest neighborhoods with excellent security presence, well-lit streets, and low crime rates. International embassies and corporate offices provide additional security infrastructure. Safe for solo women day and night with standard precautions.'
        },
        {
          name: 'Roma Norte',
          description: 'Trendy, artistic neighborhood popular with expats and solo travelers. UNAM study confirms it\'s among the safest areas in CDMX. Extremely walkable with vibrant cafe culture, excellent restaurant scene, and strong community presence. Solo female travelers report feeling very comfortable working from cafes and walking alone during day and early evening.'
        },
        {
          name: 'Condesa',
          description: 'Hip, tree-lined neighborhood known for art deco architecture and parks. Consistently rated alongside Roma Norte as safest area for solo female travelers. Great walkability, active nightlife in groups, and strong security presence. Parque México and Parque España are safe during daylight hours with good foot traffic.'
        },
        {
          name: 'Santa Fe',
          description: 'Modern business district with corporate towers and luxury shopping centers. Very safe due to heavy security presence and controlled access points, but less culturally immersive. Good option for business travelers prioritizing safety over local experience.'
        },
        {
          name: 'Coyoacán',
          description: 'Historic colonial neighborhood with cultural attractions like Frida Kahlo Museum. Generally safe during daylight hours with good tourist police presence around major sites. Avoid isolated areas after dark and stick to main plazas and well-traveled streets.'
        }
      ],
      caution: [
        'Centro Histórico - Safe during day with heavy tourist presence but avoid after 8 PM due to increased crime',
        'Zona Rosa - Tourist area with mixed safety record, harassment more common especially at night',
        'Juárez - Gentrifying area with uneven safety, stick to main streets and avoid isolated sections',
        'Del Valle - Mostly safe but some areas less well-lit, exercise standard urban caution',
        'San Rafael - Improving neighborhood but still has rough patches, research specific streets before staying'
      ],
      avoid: [
        'Tepito - Known for high crime rates, drug activity, and counterfeit goods market - dangerous for tourists',
        'Doctores - High crime area with frequent theft and assault reports, particularly unsafe for women',
        'Iztapalapa - Large peripheral area with high crime rates and gang activity, avoid entirely',
        'La Merced - Market area with high pickpocket rates and aggressive vendors, overwhelming for solo travelers',
        'Guerrero - Rough neighborhood with drug-related crime, not safe for tourists day or night',
        'Any peripheral colonias (neighborhoods) - Outlying areas often lack tourist infrastructure and safety measures'
      ]
    },
    accommodations: [
      {
        name: 'Four Seasons Hotel Mexico City',
        type: 'hotel',
        features: ['Luxury', 'Polanco location', '24/7 security', 'Female-friendly', 'Professional staff', 'Airport transfer'],
        rating: 4.8,
        notes: 'Premier luxury option in safest neighborhood. Excellent security protocols, English-speaking staff, and concierge services for safe exploration.',
        link: 'https://www.fourseasons.com/mexico/'
      },
      {
        name: 'St. Regis Mexico City',
        type: 'hotel',
        features: ['Ultra-luxury', 'Polanco', 'Butler service', 'High security', 'Female travelers'],
        rating: 4.7,
        notes: 'Top-tier safety and service in Polanco. 24/7 butler service and security, perfect for solo female travelers prioritizing safety.',
        link: 'https://www.marriott.com/hotels/travel/mexrs-the-st-regis-mexico-city/'
      },
      {
        name: 'Casa Malí by Rotamundos',
        type: 'hostel',
        features: ['Female dorms', 'Roma Norte', 'Boutique', 'High security', 'Solo female focused'],
        rating: 4.6,
        notes: 'Upscale hostel in safest area for solo female travelers. Female-only dorms, strong security, and curated local experiences.',
        link: 'https://www.rotamundos.com/casa-mali-roma/'
      },
      {
        name: 'Hotel Carlota',
        type: 'hotel', 
        features: ['Boutique', 'Roma Norte', 'Modern security', 'Female-friendly', 'Design hotel'],
        rating: 4.5,
        notes: 'Stylish boutique hotel in safest neighborhood for solo travelers. Excellent security and walkable location.',
        link: 'https://hotelcarlota.mx/'
      },
      {
        name: 'Selina Roma Norte',
        type: 'hostel',
        features: ['Co-living', 'Female dorms', 'Digital nomad focused', 'Security', 'Community'],
        rating: 4.3,
        notes: 'Modern hostel popular with solo female digital nomads. Good security and community atmosphere in safe Roma Norte location.',
        link: 'https://www.selina.com/mexico/mexico-city/roma-norte/'
      }
    ],
    alerts: [
      {
        title: 'Express Kidnapping Alert',
        description: 'Dramatic increase in express kidnappings targeting tourists and perceived middle-class Americans. 66% of kidnappings now "express" type (1-3 days). Cartels scout targets via hotel check-ins and social media.',
        location: 'Citywide - especially tourist areas',
        reportCount: 47,
        severity: 'high',
        dateReported: '2 days ago'
      },
      {
        title: 'Metro Sexual Harassment Surge',
        description: 'Continued high rates of sexual harassment on public transport despite women-only carriages. 300+ cases reported annually with 80% unreported. 9/10 women experience violence on public transport.',
        location: 'Metro system citywide',
        reportCount: 89,
        severity: 'high', 
        dateReported: '1 week ago'
      },
      {
        title: 'Femicide Rates Rising',
        description: 'Mexico reports 10-11 women murdered daily with femicide rates increasing 135% since 2015. Mexico City is among highest-risk states. Solo female travelers should maintain heightened awareness.',
        location: 'National concern affecting Mexico City',
        reportCount: 156,
        severity: 'high',
        dateReported: '3 days ago'
      },
      {
        title: 'Gentrification Protests',
        description: 'Ongoing protests against gentrification in central and tourist areas since July 2025. Generally peaceful but avoid large gatherings and demonstration sites.',
        location: 'Centro, Roma Norte, Condesa',
        reportCount: 23,
        severity: 'medium',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress modestly to blend in with local women - avoid flashy jewelry, expensive watches, or designer clothing
• Never wear revealing clothing as it significantly increases harassment and assault risk 
• Keep valuables completely hidden - even glimpses of cash, cards, or expensive phones invite theft
• Wear closed-toe shoes for quick movement and avoid anything that screams "tourist" or "wealth"
• Carry clothes in a regular bag rather than obvious tourist luggage to appear less affluent`,
      firstTimers: `• Register with your embassy within 24 hours - critical for emergency assistance and evacuation
• NEVER use street taxis - only use Uber, Didi, or official taxi stands (sitios) with verified drivers
• Stay exclusively in safe neighborhoods (Polanco, Roma Norte, Condesa) - safety over savings always
• Learn basic Spanish emergency phrases and save 911 plus embassy contacts in your phone
• Set up emergency communication protocol with family - regular check-ins to prevent virtual kidnapping scams
• Bring multiple bank cards and distribute cash in hidden locations throughout your belongings`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight', 
        'Life360',
        'Travel Ladies',
        'Uber Mexico',
        'Didi',
        'AllTrails'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for high-risk destinations like Mexico City', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with panic button critical for Mexico City safety', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response crucial for solo women in Mexico', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely essential for Mexico City safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Mexico safety warnings and tips', rating: 4.0 },
        { name: 'Uber Mexico', link: 'https://www.uber.com/mx/', description: 'Safest transport in Mexico City - never use street taxis or public transport', rating: 4.4 },
        { name: 'Didi', link: 'https://www.didiglobal.com/', description: 'Alternative ride-hailing app popular in Mexico City with driver verification', rating: 4.2 },
        { name: 'AllTrails', link: 'https://www.alltrails.com/', description: 'Discover hiking trails around Mexico City including Desierto de los Leones and Xochimilco - perfect for solo adventure travelers', rating: 4.5 }
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
          english: 'Where is the US Embassy?',
          local: '¿Dónde está la embajada americana?',
          localLanguage: 'Spanish'
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, déjame en paz.',
          localLanguage: 'Spanish'
        },
        {
          english: 'I feel unsafe.',
          local: 'Me siento insegura.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Can you help me?',
          local: '¿Puedes ayudarme?',
          localLanguage: 'Spanish'
        },
        {
          english: 'I don\'t speak Spanish.',
          local: 'No hablo español.',
          localLanguage: 'Spanish'
        },
        {
          english: 'Call my embassy.',
          local: 'Llama a mi embajada.',
          localLanguage: 'Spanish'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Modest dress is essential for safety, not just cultural respect. Mexican women typically dress conservatively in public. Avoid revealing clothing (shorts, low-cut tops, short skirts) which significantly increases harassment risk. Long pants, covered shoulders, and closed-toe shoes are recommended. Bright colors and expensive-looking items make you a target for crime. Dress like a local working professional to blend in.',
      behaviorNorms: [
        'Greet people politely with "Buenos días" or "Buenas tardes" - shows respect and cultural awareness',
        'Be cautious with strangers offering help or directions - express kidnapping setups are common', 
        'Avoid discussing politics, crime, drug cartels, or controversial topics - can be dangerous',
        'Never refuse hospitality outright if offered food/drink, but decline politely if you have safety concerns',
        'Use formal titles (Señor/Señora) when addressing elders or in business settings',
        'Learn basic Spanish phrases - showing effort to communicate in Spanish is highly appreciated',
        'Don\'t take photos of people without permission - can provoke negative reactions',
        'Respect religious sites and traditions - Mexico is predominantly Catholic',
        'Be patient with service - Mexican culture values relationships over efficiency',
        'Avoid displaying wealth, expensive electronics, or large amounts of cash in public',
        'Don\'t criticize Mexican culture, compare to other countries, or make assumptions about poverty',
        'Tip 10-15% at restaurants and 10 pesos for taxi rides or small services'
      ],
      perception: 'Solo female travelers are becoming more common but still draw attention, especially in traditional areas. Mexican men may be more forward than in other cultures, but respect firm boundaries. Women traveling alone are sometimes seen as wealthy or promiscuous by conservative segments of society. Staying in safe, expat-friendly neighborhoods helps normalize your presence. Local women are generally supportive of solo female travelers and can be valuable allies for safety advice.'
    },
    bestTimeToVisit: {
      safestMonths: ['October-April (dry season with better visibility and comfort)'],
      events: 'Avoid large gatherings, protests, and political demonstrations. Monitor gentrification protests in Roma Norte/Condesa. Day of the Dead (November 1-2) is culturally significant but attracts crowds. Christmas season (December) has increased crime due to economic pressures.'
    },
    emergencyInfo: {
      police: '911',
      fire: '911', 
      medical: '911',
      general: '911',
      touristPolice: '5242-5100',
      womenEmergencyHotline: '5658-1111'
    },
    currency: {
      name: 'Mexican Peso',
      code: 'MXN', 
      exchangeRate: {
        usd: 0.0539,
        eur: 0.0459,
        gbp: 0.0401
      },
      exchangeTips: [
        'Use official bank ATMs inside secure locations (hotels, major shopping centers) - standalone ATMs are robbery targets',
        'Withdraw money during daylight hours with security present - never at isolated ATMs',
        'Many businesses accept USD in tourist areas but give poor exchange rates - peso preferred',
        'Bring multiple bank cards and distribute cash in hidden locations on your body',
        'Credit cards widely accepted in safe neighborhoods but carry cash for emergencies',
        'Airport exchange rates are poor but safer than street exchanges - use bank ATMs instead',
        'Keep exchange receipts for documentation and reconversion when leaving',
        'Download offline currency converter app - helps prevent overcharging by vendors'
      ],
      scamWarnings: [
        'Express kidnapping from ATMs - major risk for tourists, especially those appearing wealthy',
        'Fake police demanding bribes or "fines" - always ask for official identification',
        'Street money changers offering better rates - often counterfeit bills or robbery setups',
        'Taxi overcharging and refusing to use meters - use ride-sharing apps exclusively'
      ]
    },
    scamWarnings: [
      {
        title: 'Express Kidnapping Operations',
        description: 'Criminals target tourists appearing wealthy for 1-3 day kidnappings to empty bank accounts. Often involves fake taxis, hotel staff, or tour guides. 66% of kidnappings in Mexico are now "express" type. Never accept unofficial transport or reveal financial information.',
        severity: 'high'
      },
      {
        title: 'Fake Police Extortion',
        description: 'Corrupt or fake police stop tourists demanding bribes, "fines," or document inspections. Real police wear uniforms with badge numbers and ID. Ask for supervisor, badge number, and written citation. Contact embassy if detained.',
        severity: 'high'
      },
      {
        title: 'ATM Skimming and Robbery',
        description: 'Criminals install devices on ATMs and work in teams to rob users after withdrawal. Some follow victims from banks to accommodations. Use only ATMs inside secure locations with guards present.',
        severity: 'high'
      },
      {
        title: 'Distraction and Pickpocket Teams',
        description: 'Groups create distractions (spilling liquid, asking directions, crowding) while accomplices steal valuables. Common in tourist areas, markets, and metro stations. Women often targeted first.',
        severity: 'high'
      },
      {
        title: 'Romance and Dating App Traps',
        description: 'Criminals use dating apps to lure tourists to isolated locations for robbery or worse. Some build relationships over weeks before striking. Avoid meeting anyone from dating apps.',
        severity: 'high'
      },
      {
        title: 'Virtual Kidnapping Calls',
        description: 'Scammers call family claiming you\'re kidnapped, demanding ransom while you\'re unaware. Establish code words with family and regular check-in schedules before travel.',
        severity: 'medium'
      },
      {
        title: 'Counterfeit Money and Overcharging',
        description: 'Street vendors and some businesses give counterfeit change or grossly overcharge tourists. Learn peso denominations and count change carefully.',
        severity: 'medium'
      },
      {
        title: 'Spiked Drinks and Bar Scams',
        description: 'Criminals spike drinks to rob or assault victims. Never leave drinks unattended, accept drinks from strangers, or drink excessively in unfamiliar areas.',
        severity: 'high'
      }
    ],
    languages: ['Spanish', 'English (tourist areas)'],
    daytimeSafetyPercent: 54.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Mexico-City)
    nighttimeSafetyPercent: 22.5, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Mexico-City)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Mexico-City',
    // Red flags based on Numbeo 2025 and US/UK government travel advisories
    redFlags: [
      {
        label: 'Mugging & Armed Robbery',
        frequency: 'Most common',
        icon: 'Knife',
        details: 'Armed robbery and muggings are significant concerns, especially targeting tourists. Solo female travelers face increased risks in certain areas of the city.',
        prevention: 'Avoid displaying valuables, stay in safe neighborhoods, use hotel transport, never walk alone at night, carry minimal cash'
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Most common',
        icon: 'Hand',
        details: 'Professional thieves operate in crowded areas like markets, metro stations, and tourist attractions. Bag snatching from motorcycles also occurs.',
        prevention: 'Keep bags in front, use money belts, stay alert in crowds, secure bags across body, avoid displaying phones or cameras openly'
      },
      {
        label: 'Taxi Scams & Unlicensed Taxis',
        frequency: 'Frequent',
        icon: 'Car',
        details: 'Unlicensed taxis may overcharge, take longer routes, or be involved in robberies. Some taxi drivers collaborate with criminals.',
        prevention: 'Use official taxi stands or rideshare apps only, verify taxi credentials, agree on fare beforehand, avoid hailing taxis on street'
      },
      {
        label: 'Corruption & Bribery',
        frequency: 'Frequent',
        icon: 'DollarSign',
        details: 'Police may demand bribes from tourists, especially during traffic stops or document checks. Fake police also operate in tourist areas.',
        prevention: 'Ask for official receipts, request supervisor, know your rights, carry copies of documents, use embassy contacts if needed'
      }
    ],
    usefulTips: [
      {
        title: "Use registered taxis or rideshare apps only",
        description: "Avoid hailing taxis on the street. Use authorized taxi stands (sitios) or rideshare apps like Uber or Didi for safer transportation, especially at night.",
        severity: "high",
        sourceName: "US State Department Travel Advisory",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html"
      },
      {
        title: "Stay in safe, central neighborhoods",
        description: "Book accommodation in Polanco, Condesa, or Roma Norte for better security and access to tourist attractions. Avoid walking alone at night, even in these areas.",
        severity: "medium",
        sourceName: "Travel Ladies Mexico City Guide",
        sourceUrl: "https://travelladies.app/safety/mexico/mexico-city"
      },
      {
        title: "Keep valuables hidden and be alert for pickpockets",
        description: "Petty theft is common in crowded areas, public transport, and markets. Use anti-theft bags and keep your phone and wallet out of sight.",
        severity: "high",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/mexico/safety-and-security"
      },
      {
        title: "Learn basic Spanish and keep emergency contacts accessible",
        description: "Knowing a few key phrases in Spanish helps in emergencies and daily interactions. Save the emergency number (911) and your embassy\'s contact info.",
        severity: "medium",
        sourceName: "The Lady Who Travels",
        sourceUrl: "https://www.theladywhotravels.com/is-mexico-safe-for-solo-female-travellers/"
      },
      {
        title: "Avoid tap water and stick to bottled water",
        description: "Do not drink tap water in Mexico City. Always use bottled water for drinking and brushing teeth to avoid illness.",
        severity: "medium",
        sourceName: "Mexico City Official Visitor Guide",
        sourceUrl: "https://mexicocity.cdmx.gob.mx/e/"
      }
    ],
    culturalDos: [
      'Greet people with a polite "buenos días" or "buenas tardes."',
      'Dress modestly, especially in churches and traditional areas.',
      'Accept food or drink offered by hosts as a sign of respect.',
      'Use formal titles (Señor/Señora) when addressing elders.',
      'Learn and use basic Spanish phrases.'
    ],
    culturalDonts: [
      "Don't discuss politics, crime, or drug cartels.",
      "Don't refuse hospitality outright—decline politely if needed.",
      "Don't wear flashy jewelry or display wealth.",
      "Don't take photos of people without permission.",
      "Don't enter churches or sacred sites in revealing clothing."
    ],
    culturalSensitivityTips: [
      'Mexican culture blends indigenous heritage (Aztec, Maya, and other pre-Columbian civilizations) with Spanish colonial influences and modern values. Solo female travelers who show appreciation for this complex cultural layering and avoid oversimplifying Mexican identity will demonstrate cultural sensitivity.',
      'Family is the cornerstone of Mexican society, with extended family networks providing support, identity, and social structure. Solo female travelers who show respect for family values, ask about family when appropriate, and understand that family obligations often take priority will connect with fundamental Mexican values.',
      'Catholic traditions deeply influence Mexican culture, from daily religious practices to major celebrations like Día de los Muertos. Solo female travelers who show respect in churches, appreciate religious festivals, and understand the cultural significance of Catholic customs will gain cultural acceptance.',
      'Mexican hospitality is generous and heartfelt, with hosts often sharing whatever they have regardless of economic circumstances. Solo female travelers should accept offered food, drinks, or assistance graciously, understanding that refusal can be interpreted as rejection of friendship.',
      'Spanish language appreciation is crucial in Mexico City, where Spanish is spoken with distinctive Mexican expressions and cultural references. Learning basic phrases like "Buenos días" (good morning), "Muchas gracias" (thank you very much), and "Con permiso" (excuse me) shows cultural respect.',
      'The concept of "personalismo" means relationships and personal connections are valued over efficiency or rules. Solo female travelers who invest time in building relationships, show interest in people as individuals, and understand that business often follows friendship will navigate interactions more successfully.',
      'Mexican time culture operates more flexibly than rigid schedules, with social relationships often taking priority over punctuality. Solo female travelers who are patient with timing, understand that relationship-building may precede tasks, and adapt to this rhythm will avoid frustration.',
      'Indigenous heritage remains significant in Mexican identity, from food traditions to artistic expressions and spiritual practices. Solo female travelers who show appreciation for indigenous contributions to Mexican culture and approach this heritage with respect will demonstrate cultural awareness.',
      'Mexican food culture involves complex traditions around meal timing, communal eating, and regional specialties. Solo female travelers who embrace proper meal etiquette, show appreciation for regional cuisine, and understand food\'s social significance will connect with fundamental cultural values.',
      'Economic inequality is visible throughout Mexico City, but Mexican dignity and pride in cultural heritage remain strong across all economic levels. Solo female travelers should approach economic differences with sensitivity while showing genuine respect for Mexican accomplishments in art, cuisine, and cultural preservation.'
    ],
  
    womensConfidenceScore: {
      score: 45.3, // Numbeo 2025 Safety Index for Mexico City
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Mexico-City"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 75,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/mexico/mexico-city'
      },
      {
        label: 'Nightlife',
        confidence: 55,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/mexico/mexico-city'
      },
      {
        label: 'Public Transport',
        confidence: 40,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/mexico/mexico-city'
      },
      {
        label: 'Dining Alone',
        confidence: 80,
        source: 'She Travels Safely 2025',
        sourceUrl: 'https://shetravelssafely.com/mexico-city-female-travel-safety/'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'ABC Medical Center',
          address: 'Multiple locations - Sur: Av. Carlos Graef Fernández 154, Tlalpan',
          phone: '+52 55 1103 1600',
          emergency: true,
          specialties: ['Women\'s health center', 'International standards', 'English-speaking staff', 'Cutting-edge equipment']
        },
        {
          name: 'Médica Sur',
          address: 'Puente de Piedra 150, Toriello Guerra, Tlalpan',
          phone: '+52 55 5424 7200',
          emergency: true,
          specialties: ['Ranked #1 in Newsweek Best Hospitals 2022', 'Gynecology & Obstetrics Center', '40 years experience', '24-hour emergency care']
        },
        {
          name: 'Hospital Español',
          address: 'Ejercito Nacional 613, Polanco',
          phone: '+52 55 5255 9600',
          emergency: true,
          specialties: ['General hospital', 'Emergency services', 'Polanco location', 'International patients']
        },
        {
          name: 'Hospital Angeles Clinica Londres',
          address: 'Durango 50, Roma Norte',
          phone: '+52 55 5229 8400',
          emergency: true,
          specialties: ['Private hospital', 'Roma Norte location', 'Emergency services', 'Various specialties']
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Guadalajara',
          address: 'Multiple locations citywide',
          phone: '+52 55 5658 5400',
          hours: 'Many 24/7 locations',
          emergency: true
        },
        {
          name: 'Farmacias del Ahorro',
          address: 'Widespread locations',
          phone: '+52 55 5804 4444',
          hours: 'Daily 7:00-23:00 (varies)',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'ABC Medical Center Women\'s Health: Comprehensive services with international standards and English-speaking staff',
          'Médica Sur Gynecology & Obstetrics Center: 40 years experience with 24-hour patient-centered care',
          'Hospital Español: General gynecological services in safe Polanco area',
          'Private clinics in Polanco and Roma Norte with English-speaking doctors'
        ],
        gynecologists: [
          'Multiple English-speaking gynecologists at ABC Medical Center and Médica Sur',
          'Hospital Angeles network has women\'s health specialists',
          'US Embassy provides healthcare provider referrals for American citizens',
          'Private practice doctors in upscale neighborhoods with international training'
        ],
        emergencyContraception: [
          'Available at major pharmacy chains like Farmacia Guadalajara',
          'Hospital emergency departments provide emergency contraception',
          'Private clinics offer confidential reproductive health services',
          'Catholic influence may affect availability - consult healthcare providers'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies, supermarkets, and convenience stores',
          'International brands available at Walmart, Soriana, and Chedraui',
          'Available 24/7 at many Farmacia Guadalajara locations',
          'Local brands like Saba and Kotex readily available and affordable'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Mexico City',
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Hepatitis A recommended for extended stays',
        'Typhoid vaccination optional but recommended for local food consumption'
      ],
      healthRisks: [
        'Air pollution in Mexico City may affect respiratory conditions',
        'High altitude (2,240m) may cause mild altitude sickness initially',
        'Water-borne illnesses - drink only bottled water',
        'Crime-related injury risk - primary health concern for travelers',
        'Traveler\'s diarrhea from street food or contaminated water'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Mexico City',
          address: 'Paseo de la Reforma 305, Colonia Cuauhtémoc, 06500 CDMX',
          phone: '+52 55 5080 2000',
          link: 'https://mx.usembassy.gov/'
        },
        {
          name: 'British Embassy Mexico City',
          address: 'Río Lerma 71, Colonia Cuauhtémoc, 06500 Mexico City',
          phone: '+52 55 1670 3200',
          link: 'https://www.gov.uk/world/organisations/british-embassy-mexico-city'
        },
        {
          name: 'Embassy of Germany in Mexico City',
          address: 'Horacio 1506, Colonia Los Morales Polanco, 11510 Mexico City',
          phone: '+52 55 5283 2200',
          link: 'https://mexiko-stadt.diplo.de/'
        },
        {
          name: 'Embassy of France in Mexico City',
          address: 'Campos Elíseos 339, Polanco, 11560 Mexico City',
          phone: '+52 55 9171 9700',
          link: 'https://mx.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain in Mexico City', 
          address: 'Galileo 114, Polanco, 11560 Mexico City',
          phone: '+52 55 5282 2459',
          link: 'https://www.exteriores.gob.es/embajadas/mexico'
        },
        {
          name: 'Australian Embassy Mexico City',
          address: 'Rubén Darío 55, Polanco, 11580 Mexico City',
          phone: '+52 55 1101 2200',
          link: 'https://mexico.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Mexico City',
          address: 'Schiller 529, Polanco, 11560 Mexico City', 
          phone: '+52 55 5724 7900',
          link: 'https://www.canadainternational.gc.ca/mexico-mexique/'
        },
        {
          name: 'Embassy of the Netherlands in Mexico City',
          address: 'Av. Vasco de Quiroga 3000, Santa Fe, 01210 Mexico City',
          phone: '+52 55 5258 9921',
          link: 'https://www.netherlandsworldwide.nl/countries/mexico'
        },
        {
          name: 'Embassy of Denmark in Mexico City',
          address: 'Tres Picos 43, Polanco, 11580 Mexico City',
          phone: '+52 55 5255 3405',
          link: 'https://mexico.um.dk/en'
        },
        {
          name: 'Embassy of Switzerland in Mexico City',
          address: 'Torre Optima, Paseo de las Palmas 405, Lomas de Chapultepec, 11000 Mexico City',
          phone: '+52 55 9178 5500',
          link: 'https://www.eda.admin.ch/mexico'
        },
        {
          name: 'Embassy of India in Mexico City',
          address: 'Musset 325, Polanco, 11550 Mexico City',
          phone: '+52 55 5531 1050',
          link: 'https://www.eoimexico.gov.in/'
        }
      ],
      womensRights: [
        'Mexico has legal framework for women\'s rights but enforcement inconsistent',
        'Femicide rates extremely high - 10-11 women murdered daily nationally',
        'Gender-based violence widespread with limited prosecution',
        'INMUJERES (National Women\'s Institute) provides support services',
        'International organizations like UN Women active in Mexico',
        'Economic crisis has worsened women\'s vulnerability to violence'
      ],
      legalSupport: [
        'U.S. Embassy provides list of English-speaking lawyers',
        'INMUJERES Legal Assistance: 5322 4200',
        'National Human Rights Commission: 5681 8125',
        'Women\'s Justice Center Mexico: Various locations',
        'International legal aid through embassy referrals',
        'Tourist Police can assist with initial legal procedures: 5242 5100'
      ],
      reportingProcedures: [
        'Call 911 for immediate emergencies',
        'Report to Tourist Police (5242 5100) for assistance in English',
        'Contact U.S. Embassy (+52 55 5080 2000) for consular support',
        'Document everything with photos, videos, and detailed notes',
        'Request official police report ("denuncia") with case number',
        'Keep multiple copies of all documentation',
        'Insist on English translation services if needed',
        'Report sexual crimes to specialized units through embassy guidance'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$75 - $225 USD / day',
        description: 'Mexico City offers excellent value. Budget travelers $73-75/day with hostels and local food. Mid-range $150-225/day with hotels and restaurant dining. Luxury $300+/day with high-end accommodations.',
        tip: 'Stay in safe neighborhoods (Polanco, Roma Norte, Condesa) even if more expensive. Use Uber instead of public transport for safety. Factor in higher costs for secure accommodation.'
      },
      accommodation: [
        {
          type: 'Luxury Hotels (Polanco/Santa Fe)',
          avgCost: '$150-400/night',
          safetyNote: 'International standards with excellent security in safest areas of Mexico City.',
          safetyLevel: 'high'
        },
        {
          type: 'Boutique Hotels (Roma Norte/Condesa)',
          avgCost: '$80-150/night',
          safetyNote: 'Stylish accommodations in trendy safe neighborhoods with good walkability.',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels (Safe Areas)',
          avgCost: '$40-80/night',
          safetyNote: 'Clean, safe accommodations in tourist-friendly areas with basic security.',
          safetyLevel: 'medium'
        },
        {
          type: 'Quality Hostels (Roma Norte/Condesa)',
          avgCost: '$15-25/night (dorms), $60 private room',
          safetyNote: 'Female dorms available in safe neighborhoods. Good for budget solo travelers.',
          safetyLevel: 'medium'
        },
        {
          type: 'Airbnb (Safe Neighborhoods Only)',
          avgCost: '$21-60/night',
          safetyNote: 'Private rooms or apartments in verified safe areas like Polanco, Roma Norte, Condesa.',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Uber/Didi (Primary Recommendation)',
          cost: '$3-8 typical rides',
          safetyDescription: 'Safest ground transport with GPS tracking and driver verification. Essential for solo female travelers.',
          safetyLevel: 'high'
        },
        {
          method: 'Mexico City Metro (Daytime Only)',
          cost: '$0.33 per ride',
          safetyDescription: 'Women-only carriages available during peak hours. Safe during day but avoid after dark.',
          safetyLevel: 'medium'
        },
        {
          method: 'Metrobús (Pink Seat Sections)',
          cost: '$0.33-0.50 per ride',
          safetyDescription: 'Female-only sections marked with pink seats. Safer than regular buses but still exercise caution.',
          safetyLevel: 'medium'
        },
        {
          method: 'Authorized Taxi Stands (Sitios)',
          cost: '$5-12 typical rides',
          safetyDescription: 'Official taxi stands safer than street taxis but Uber preferred for security and pricing.',
          safetyLevel: 'medium'
        },
        {
          method: 'Walking (Safe Areas Only)',
          cost: 'Free',
          safetyDescription: 'Safe in Polanco, Roma Norte, and Condesa during daylight hours. Avoid after dark.',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Stay exclusively in safe neighborhoods (Polanco, Roma Norte, Condesa) - safety over savings',
        'Use Uber/Didi for all transport - slight cost increase provides major safety improvement',
        'Eat at established restaurants rather than street food initially to avoid illness',
        'Shop at modern supermarkets like Walmart or Soriana in safe areas',
        'Use hotel concierge for restaurant and attraction recommendations',
        'Take advantage of free walking tours in safe neighborhoods during daylight',
        'Visit free museums on Sundays (many offer free admission to Mexican residents)',
        'Buy bottled water in bulk to save money and avoid illness',
        'Use metro with women-only carriages during day for budget transport',
        'Book accommodations with good security ratings even if slightly more expensive'
      ]
    },

    // Enhanced safety fields matching Amsterdam/Caracas format
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: [
        'Metro and public transport (9/10 women experience violence)',
        'Street harassment citywide - very common occurrence', 
        'Tourist areas and markets with crowds',
        'Nightlife areas especially after alcohol consumption',
        'Isolated streets and poorly lit areas after dark'
      ],
      reportingRate: 15, // Low reporting rate due to normalization
      legalProtection: 'Moderate legal framework exists but enforcement inconsistent. Mexico has rising femicide rates (135% increase since 2015) with 10-11 women murdered daily nationally. Local police response varies significantly.',
      supportResources: [
        'Women\'s Emergency Hotline: 5658-1111',
        'National Network Against Violence: 5533 5533',
        'INMUJERES (Women\'s Institute): 5322 4200',
        'Tourist Police: 5242 5100', 
        'U.S. Embassy Emergency: +52 55 5080 2000'
      ]
    },

    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: ['Most reliable option with GPS tracking', 'Driver verification system', 'Share trip details with contacts'],
          companies: ['Uber'],
          link: 'https://www.uber.com/mx/es/'
        },
        {
          type: 'Didi',
          safety: 8.3,
          recommendations: ['Local alternative to Uber', 'Good safety features', 'Competitive pricing'],
          companies: ['Didi'],
          link: 'https://www.didiglobal.com/mx/'
        },
        {
          type: 'Authorized Taxi Stands (Sitios)',
          safety: 7.0,
          recommendations: ['Use official taxi stands only', 'More expensive than rideshare', 'Safer than street taxis'],
          companies: ['Various licensed operators'],
          link: ''
        },
        {
          type: 'Metro (Women-Only Carriages)',
          safety: 6.5,
          recommendations: ['Use "Solo Mujeres" carriages only', 'Daytime travel recommended', 'High harassment rates despite women-only cars'],
          companies: ['STC Metro'],
          link: 'https://www.metro.cdmx.gob.mx/'
        }
      ],
      nightTravel: {
        safety: 4.2,
        warnings: [
          'Express kidnapping risk increases dramatically after dark',
          'Even safe neighborhoods become risky after 11 PM',
          'Street taxis extremely dangerous - never use',
          'Public transport harassment peaks during night hours'
        ],
        alternatives: [
          'Uber/Didi exclusively for night transport',
          'Hotel-arranged transport when available',
          'Stay in accommodation after 11 PM when possible',
          'Travel in groups if must go out at night'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based booking',
          safety: 8.5
        },
        {
          name: 'Didi',
          type: 'Ride-sharing', 
          contact: 'App-based booking',
          safety: 8.3
        },
        {
          name: 'Sitio 195 (Roma Norte)',
          type: 'Authorized taxi stand',
          contact: '+52 55 5584 5962',
          safety: 7.0
        }
      ]
    },

    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk and security personnel',
        'Electronic key card access systems',
        'CCTV surveillance in common areas',
        'Secure luggage storage facilities',
        'In-room safes for valuables',
        'Well-lit entrances and corridors',
        'Emergency communication systems'
      ],
      safeNeighborhoods: [
        'Polanco',
        'Roma Norte', 
        'Condesa',
        'Santa Fe (business district)',
        'Del Valle (selected areas)'
      ],
      womensOnly: [
        {
          name: 'Casa Malí by Rotamundos',
          type: 'Boutique Hostel',
          features: ['Female-only dorms', 'Roma Norte location', 'High security', 'Solo female focused'],
          rating: 4.6
        },
        {
          name: 'Selina Roma Norte',
          type: 'Co-living Hostel',
          features: ['Female dorms available', 'Digital nomad community', 'Modern security'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.5,
          safety: 8.2,
          comments: 'Felt very safe in Roma Norte. Great neighborhood for solo female travelers.',
          date: '2025-01-15'
        },
        {
          rating: 4.7,
          safety: 8.8,
          comments: 'Polanco hotel excellent security. Expensive but worth it for peace of mind.',
          date: '2025-01-12'
        }
      ]
    },

    cybersecurity: {
      wifiSafety: [
        'Use hotel/accommodation WiFi when available',
        'Avoid public WiFi for banking or sensitive information',
        'Use VPN when connecting to any public network',
        'Enable device encryption and screen locks',
        'Keep software and apps updated'
      ],
      digitalScams: [
        'Fake booking websites targeting Mexico travelers',
        'Social media location sharing increasing robbery risk',
        'Fraudulent currency exchange apps',
        'Romance scams on dating apps leading to robbery',
        'Virtual kidnapping calls to family members'
      ],
      vpnRecommendations: [
        'NordVPN - reliable for Mexico',
        'ExpressVPN - good server coverage',
        'ProtonVPN - free tier available',
        'Essential for banking and personal accounts'
      ],
      dataProtection: [
        'Mexico has limited data protection laws',
        'Avoid sharing personal information with strangers',
        'Use secure payment methods exclusively',
        'Keep digital copies of documents in secure cloud storage',
        'Enable remote wipe on all devices'
      ]
    },

    communityReports: {
      recentIncidents: [
        {
          type: 'Express Kidnapping',
          location: 'Tourist areas citywide',
          date: '2025-01-18',
          description: 'Multiple reports of tourists targeted for 1-3 day kidnappings',
          severity: 'high'
        },
        {
          type: 'Metro Sexual Harassment',
          location: 'Metro system',
          date: '2025-01-15',
          description: 'Continued high rates despite women-only carriages',
          severity: 'high'
        },
        {
          type: 'Fake Police Extortion',
          location: 'Various neighborhoods',
          date: '2025-01-12',
          description: 'Tourists targeted by fake police demanding bribes',
          severity: 'high'
        }
      ],
      safetyTips: [
        {
          tip: 'Always use Uber/Didi - never street taxis or unlicensed transport',
          author: 'Solo Female Traveler',
          date: '2025-01-20',
          upvotes: 89
        },
        {
          tip: 'Stay in Roma Norte or Condesa - safest areas for solo women',
          author: 'Mexico City Resident',
          date: '2025-01-18',
          upvotes: 76
        },
        {
          tip: 'Learn basic Spanish emergency phrases - can save your life',
          author: 'Travel Expert',
          date: '2025-01-15',
          upvotes: 92
        }
      ]
    },

    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution in Mexico City due to crime. Both violent and non-violent crime occur throughout Mexico City. Petty crime occurs frequently in both tourist and non-tourist areas.',
      reason: 'Crime rates and security concerns affecting tourists and residents.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html',
      soloTravelerAdvice: [
        'Stay exclusively in safe neighborhoods (Polanco, Roma Norte, Condesa)',
        'Use only Uber/Didi for transportation - never street taxis',
        'Register with embassy and maintain regular contact with family',
        'Keep emergency cash hidden and bring multiple payment methods',
        'Learn basic Spanish emergency phrases for critical situations'
      ]
    },

    crimeStatistics: {
      violentCrime: 12.4, // per 100,000 (2024 data - Mexico City lower than national average)
      propertyCrime: 890, // per 100,000 (2024 data)
      sexualAssault: 24.6, // per 100,000 (2024 data - likely underreported)
      kidnapping: 4.2, // per 100,000 (2024 data - express kidnapping surge)
      source: 'Mexican National Security System & Mexico City Government',
      year: 2024
    },

    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm (loud whistle or electronic)',
        'Hidden money belt with emergency cash',
        'RFID-blocking wallet for card protection',
        'Portable door lock for hotel room security',
        'Power bank to keep phone charged',
        'Emergency whistle',
        'Anti-theft bag with lockable zippers'
      ],
      safetyApps: [
        {
          name: 'Uber',
          purpose: 'Safe transportation with GPS tracking',
          rating: 4.5
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female traveler safety community',
          rating: 4.7
        },
        {
          name: 'My Safetipin',
          purpose: 'Neighborhood safety ratings',
          rating: 4.3
        },
        {
          name: 'Google Translate',
          purpose: 'Emergency Spanish communication',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/Medical'
        },
        {
          name: 'Tourist Police',
          number: '5242-5100',
          type: 'Tourist-specific assistance'
        },
        {
          name: 'Women\'s Emergency Hotline',
          number: '5658-1111',
          type: 'Women\'s safety support'
        },
        {
          name: 'U.S. Embassy Emergency',
          number: '+52 55 5080 2000',
          type: 'Consular emergency services'
        }
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress conservatively in darker colors with longer pants/skirts - Mexico City culture is Catholic and traditional',
      'Greet people when entering restaurants and establishments - Mexicans value polite social acknowledgments',
      'Learn basic Spanish greetings and phrases - locals appreciate language efforts and few speak English',
      'Show respect for Mexican pride and hospitality - accept offered food/drinks gracefully when possible',
      'Keep purses and valuables close and avoid flashy jewelry - practical safety blends with cultural modesty'
    ],
    culturalDonts: [
      'Don\'t wear shorts or revealing clothing in the city - this marks you as tourist and attracts unwanted attention',
      'Don\'t assume people speak English - start conversations in Spanish and ask permission before switching languages',
      'Don\'t flash expensive jewelry or money - Mexicans are modest about wealth and this creates security risks',
      'Don\'t ignore social greetings in establishments - responding to "hola" and "gracias" shows cultural respect',
      'Don\'t drink tap water or ignore food safety - stick to bottled water and established restaurants for health'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default mexicocity;
