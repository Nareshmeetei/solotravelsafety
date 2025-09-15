import { Destination } from './types';

const kyoto: Destination = {
    city: 'Kyoto',
    country: 'Japan',
    continent: 'Asia',
    countryCode: 'jp',
    overallScore: 9.2,
    nightSafety: 9.5,
    publicTransit: 9.8,
    walkingAlone: 8.9,
    tags: ['insider-tips'],
    bgColor: 'bg-purple-50',
    reviewCount: 1247,
    lastUpdated: '4 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 9.5,
        context: 'Kyoto ranked as one of the world\'s safest cities in 2025 with exceptionally low crime rates. Women feel extremely safe walking alone at night - overall safety rating 4.3/5. Well-lit streets, heavy police presence, and virtually no street harassment make Kyoto ideal for solo female travelers.'
      },
      publicTransit: {
        score: 9.8,
        context: 'World-class safety with women-only train cars on Hankyu and Keihan Lines during rush hours. Extremely rare incidents of inappropriate behavior. Public transport operates efficiently with excellent safety protocols and 24/7 security presence.'
      },
      walkingAlone: {
        score: 8.9,
        context: 'Japan rates 4.9/5 for women\'s safety overall. Sexual harassment risk only 1.3/5, assault risk 1.1/5. Occasional staring but verbal/physical harassment virtually nonexistent. Crime affecting tourists extremely low in Kyoto.'
      }
    },
    neighborhoods: {
      safe: [
        'Gion District - Historic geisha quarter with excellent lighting and heavy tourist police presence',
        'Higashiyama - UNESCO World Heritage area with well-maintained streets and constant foot traffic',
        'Arashiyama - Scenic bamboo grove area with good lighting and tourist infrastructure',
        'Kiyomizu-dera Area - Temple district with excellent safety record and organized tourist services',
        'Fushimi Inari - Sacred mountain area with 24/7 access and shrine security',
        'Central Kyoto Station Area - Modern transport hub with comprehensive security systems',
        'Nijo Castle Area - Government district with heavy security presence',
        'Kyoto Imperial Palace Area - Highly secure area with park police and regular patrols'
      ],
      caution: [
        'Pontocho Alley nightlife area - Generally safe but avoid overcharging scams in some bars',
        'Late-night entertainment districts - Risk of drink spiking and overcharging targeting foreigners'
      ],
      avoid: [
        'Remote mountain trails alone after dark - While extremely safe, limited emergency access',
        'Isolated temple grounds very late at night - Not dangerous but minimal lighting in some areas'
      ]
    },
    accommodations: [
      {
        name: 'Kyoto Hana Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Central Gion location', '24/7 reception', 'Rooftop terrace'],
        rating: 4.7,
        notes: 'Popular with solo female travelers, excellent safety record and clean facilities. Located in safest part of Kyoto.',
        link: 'https://www.kyotohana-hostel.com/'
      },
      {
        name: 'Hotel Granvia Kyoto',
        type: 'hotel',
        features: ['JR Station connection', 'Premium security', 'English concierge', '24/7 front desk'],
        rating: 4.8,
        notes: 'Luxury hotel directly connected to Kyoto Station with exceptional safety standards and comprehensive guest services.',
        link: 'https://www.granvia-kyoto.co.jp/en/'
      },
      {
        name: 'Piece Hostel Kyoto',
        type: 'hostel',
        features: ['Female dorms', 'Cafe/restaurant', 'Modern design', 'Central Gion'],
        rating: 4.6,
        notes: 'Boutique hostel with female-only rooms, exceptional cleanliness, and prime location for safe walking to attractions.',
        link: 'https://www.piecehostel.com/kyoto/'
      },
      {
        name: 'The Westin Miyako Kyoto',
        type: 'hotel',
        features: ['Mountain setting', 'Premium security', 'Spa facilities', 'Garden views'],
        rating: 4.5,
        notes: 'Historic luxury hotel offering exceptional safety in peaceful Higashiyama area with shuttle services to major attractions.',
        link: 'https://www.marriott.com/hotels/travel/kixwi-the-westin-miyako-kyoto/'
      },
      {
        name: 'Khaosan Kyoto Guest House',
        type: 'hostel',
        features: ['Female dorms', 'Traditional architecture', 'Rooftop area', 'Kitchen facilities'],
        rating: 4.4,
        notes: 'Budget-friendly option with excellent security, female-only rooms, and helpful English-speaking staff in safe central location.',
        link: 'https://www.khaosan-kyoto.com/'
      }
    ],
    alerts: [
      {
        title: 'Natural Disaster Risk - Earthquake Activity',
        description: 'Southwest Japan experienced 6.6 magnitude earthquake January 13, 2025. Aftershocks possible. Japan sits on Ring of Fire with earthquake/tsunami risk. Download safety apps and know evacuation procedures.',
        location: 'All of Japan including Kyoto',
        reportCount: 1,
        severity: 'low',
        dateReported: '2 weeks ago'
      },
      {
        title: 'Nightlife Overcharging Scams Targeting Foreigners',
        description: 'Reports of bars and clubs overcharging foreign tourists, credit card fraud, and drink spiking in entertainment districts. Choose reputable establishments and never leave drinks unattended.',
        location: 'Pontocho Alley, nightlife districts',
        reportCount: 3,
        severity: 'low',
        dateReported: '1 month ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress modestly in temples and shrines - cover shoulders and knees
• Remove shoes when entering temples, traditional accommodations
• Casual, comfortable clothing fine for city exploration
• Bring layers - Kyoto has distinct seasons with temperature variations
• Wear comfortable walking shoes for temple visits and uneven paths
• Dark colors practical for frequent temple visits (less visible dirt)
• Avoid revealing clothing to respect cultural norms and blend in`,
      firstTimers: `• Kyoto exceptionally safe - crime rates among world's lowest
• Download Google Maps offline and Hyperdia for train schedules
• IC card (ICOCA) essential for seamless public transport
• Taxis safe but expensive - use for emergencies or late-night transport
• Learn basic Japanese greetings and temple etiquette
• Cash-based society - carry yen, use 7-Eleven ATMs for withdrawals
• Purchase JR Pass if traveling beyond Kyoto for significant savings`,
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'Hyperdia',
        'ICOCA',
        'Google Translate'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Japan temple exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Kyoto temple safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while temple hopping', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo temple visits', rating: 4.1 },
        { name: 'Hyperdia', link: 'https://www.hyperdia.com/', description: 'Best Japan transit app for planning Kyoto temple routes and connections', rating: 4.6 },
        { name: 'ICOCA', link: 'https://www.jr-odekake.net/icoca/', description: 'JR West IC card app for seamless Kyoto public transport payments', rating: 4.4 },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for Japanese temple etiquette and emergency communication', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: '助けて！(Tasukete!)',
          localLanguage: 'Japanese'
        },
        {
          english: 'Call the police!',
          local: '警察を呼んでください (Keisatsu o yonde kudasai)',
          localLanguage: 'Japanese'
        },
        {
          english: 'I need a doctor.',
          local: '医者が必要です (Isha ga hitsuyou desu)',
          localLanguage: 'Japanese'
        },
        {
          english: 'Where is the hospital?',
          local: '病院はどこですか？(Byouin wa doko desu ka?)',
          localLanguage: 'Japanese'
        },
        {
          english: 'I am lost.',
          local: '道に迷いました (Michi ni mayoimashita)',
          localLanguage: 'Japanese'
        },
        {
          english: 'Please leave me alone.',
          local: '一人にしてください (Hitori ni shite kudasai)',
          localLanguage: 'Japanese'
        },
        {
          english: 'I feel unsafe.',
          local: '安全ではありません (Anzen dewa arimasen)',
          localLanguage: 'Japanese'
        },
        {
          english: 'Can you help me?',
          local: '手伝ってもらえますか？(Tetsudatte moraemasu ka?)',
          localLanguage: 'Japanese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'Japanese culture values modesty and respect, especially in religious sites. Cover shoulders and knees when visiting temples and shrines. Casual, neat clothing is appropriate for city areas. Remove shoes when entering temples, traditional ryokan, and some restaurants. Avoid flashy or revealing clothing. Dark colors are practical and respectful.',
      behaviorNorms: [
        'Bow slightly when greeting locals, especially elders and service staff',
        'Speak quietly on public transport - phone calls are considered rude',
        'Remove shoes when entering temples, homes, and some traditional restaurants',
        'Don\'t point with your index finger - use your whole hand to gesture',
        'Queue orderly and wait your turn - cutting in line is very rude',
        'Avoid eating or drinking while walking in public areas',
        'Don\'t touch religious objects or artifacts in temples',
        'Offer and receive business cards with both hands and a slight bow',
        'Be punctual - lateness is considered disrespectful',
        'Show appreciation for hospitality but don\'t tip (not customary in Japan)'
      ],
      perception: 'Solo female travelers are extremely common and widely accepted in Kyoto. Japanese culture is respectful toward women, and harassment is virtually nonexistent. You may receive curious but respectful attention. Locals are generally helpful toward lost tourists, especially women traveling alone. Kyoto has excellent infrastructure supporting solo female travelers with women-only train cars and female-friendly accommodations.'
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
      usd: 0.0068,
      eur: 0.0058,
      gbp: 0.0050
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
    daytimeSafetyPercent: 89.1, // Source: Numbeo 2025, Travel Ladies 2025
    nighttimeSafetyPercent: 82.9, // Source: Numbeo 2025, Travel Ladies 2025
    redFlags: [
      {
        label: 'Pickpocketing (Tourist Areas, Public Transport)',
        frequency: 'Rare',
        icon: 'Hand',
        details: 'Extremely rare pickpocketing incidents at crowded temples like Kiyomizu-dera during cherry blossom and autumn seasons. Japan has one of world\'s lowest theft rates.',
        prevention: 'Keep valuables secure during festivals, remain aware in crowds at popular temples, use hotel safes'
      },
      {
        label: 'Bicycle Theft',
        frequency: 'Rare',
        icon: 'Bike',
        details: 'Occasional theft of unlocked rental bikes, mostly at train stations. Very low crime rates overall with most bikes recovered.',
        prevention: 'Always lock rental bikes, use designated parking areas, register bike rentals properly'
      },
      {
        label: 'Overpriced Tours & Shops',
        frequency: 'Rare',
        icon: 'CreditCard',
        details: 'Some tourist-targeted shops charge premium prices for traditional crafts and souvenirs, particularly in Gion and Arashiyama districts.',
        prevention: 'Compare prices, read reviews, shop at local markets, negotiate respectfully at traditional shops'
      },
      {
        label: 'Unwanted Attention (Staring, Photos)',
        frequency: 'Rare',
        icon: 'Eye',
        details: 'Occasional curiosity from locals toward foreign visitors, especially in traditional districts. Generally respectful cultural interest.',
        prevention: 'Dress modestly at temples, politely decline photos, respect photography restrictions in sacred areas'
      }
    ],
    usefulTips: [
      {
        title: 'Experience World-Class Safety in Japan\'s Cultural Capital',
        description: 'Kyoto ranks among world\'s safest cities with crime index only 22.1. Women rate safety 4.3/5. Exceptional infrastructure supports solo female travelers with women-only train cars, female-friendly accommodations, and 24/7 safety services.',
        severity: 'low',
        sourceName: 'Japan Safety Statistics & Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        title: 'Master Japan\'s Cash-Based Economy for Smooth Travel',
        description: 'Japan heavily cash-based despite advanced technology. Use 7-Eleven ATMs for international cards - available 24/7. Get IC card (ICOCA) at stations for seamless transport. Many restaurants/shops don\'t accept cards.',
        severity: 'medium',
        sourceName: 'Japan Travel Guide 2025',
        sourceUrl: 'https://www.japan-guide.com/e/e2410.html'
      },
      {
        title: 'Navigate Temple Etiquette and Cultural Respect',
        description: 'Cover shoulders/knees at temples, remove shoes when required, speak quietly, don\'t touch religious objects. Photography restrictions common. Bow slightly when greeting. Respect creates positive interactions.',
        severity: 'medium',
        sourceName: 'Kyoto Official Tourism Guide 2025',
        sourceUrl: 'https://www.kyoto.travel/en/'
      },
      {
        title: 'Leverage Women-Only Train Cars for Added Safety',
        description: 'Hankyu and Keihan lines offer women-only cars during rush hours (7-9 AM, 5-7 PM weekdays). Look for pink signs. Even without this, trains exceptionally safe with minimal harassment reports.',
        severity: 'low',
        sourceName: 'Japan Transport Safety Guide 2025',
        sourceUrl: 'https://www.insidekyoto.com/solo-female-travel-in-kyoto-and-the-rest-of-japan'
      },
      {
        title: 'Prepare for Natural Disasters with Emergency Apps',
        description: 'Download JNTO Safety Tips app for earthquake/tsunami alerts. Japan sits on Ring of Fire. Know hotel evacuation routes. Recent 6.6 earthquake January 2025 shows ongoing risk. Stay weather-informed.',
        severity: 'medium',
        sourceName: 'Japan Natural Disaster Preparedness 2025',
        sourceUrl: 'https://www.japan.travel/en/japan-safe-travel-information/'
      },
      {
        title: 'Access Premium Healthcare with English Support',
        description: 'Kyoto University Hospital International Medical Center provides English-speaking doctors. Japanese healthcare excellent but expensive without insurance. Travel insurance essential - medical bills can reach six figures.',
        severity: 'medium',
        sourceName: 'Japan Healthcare Guide 2025',
        sourceUrl: 'https://www.kuhp.kyoto-u.ac.jp/english/'
      },
      {
        title: 'Budget Strategically - Kyoto Offers Excellent Value',
        description: 'Budget ¥3,000-5,000/day possible with hostels and convenience store meals. Mid-range ¥8,000-12,000/day with hotels and restaurant dining. Many temples free, famous ones ¥300-600. Lunch sets cheaper than dinner.',
        severity: 'low',
        sourceName: 'Kyoto Budget Travel Guide 2025',
        sourceUrl: 'https://www.insidekyoto.com/how-much-money-do-i-need-for-kyoto'
      },
      {
        title: 'Choose Female-Friendly Accommodations',
        description: 'Kyoto offers numerous hostels with female-only dorms, traditional ryokan welcoming solo women, and international hotels with English support. Book early for best locations in safe Gion or Higashiyama districts.',
        severity: 'low',
        sourceName: 'Solo Female Travel Accommodation Guide 2025',
        sourceUrl: 'https://www.hostelz.com/best-hostels-in-kyoto-for-solo-female-travelers'
      },
      {
        title: 'Experience Cultural Immersion Safely and Respectfully',
        description: 'Solo female travelers warmly welcomed. Join tea ceremonies, temple meditation, cooking classes. Kyoto\'s cultural experiences designed for individual participation. Local women often approach to offer help.',
        severity: 'low',
        sourceName: 'Kyoto Cultural Experience Guide 2025',
        sourceUrl: 'https://www.adventurouskate.com/solo-female-travel-japan-safe/'
      },
      {
        title: 'Plan Seasonal Visits for Optimal Safety and Experience',
        description: 'March-May (cherry blossoms) and September-November (autumn) ideal but crowded. Winter offers lower prices and fewer crowds. Summer hot but safe. All seasons excellent for solo female travelers with proper preparation.',
        severity: 'low',
        sourceName: 'Kyoto Seasonal Travel Guide 2025',
        sourceUrl: 'https://www.travelsafe-abroad.com/japan/kyoto/'
      }
    ],
    culturalDos: [
      'Dress modestly at temples and shrines.',
      'Remove shoes when entering homes or temples.',
      'Speak quietly in public and on transport.',
      'Respect local customs and bow when greeting.',
      'Ask before taking photos of people or religious sites.'
    ],
    culturalDonts: [
      "Don't talk loudly or make phone calls on public transport.",
      "Don't eat or drink while walking in public.",
      "Don't touch or point at religious objects.",
      "Don't enter private areas of temples or shrines.",
      "Don't ignore etiquette signs or instructions."
    ],
    womensConfidenceScore: {
      score: 77.1, // Numbeo 2025 Safety Index for Japan (Kyoto aligns with national average)
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/rankings_by_country.jsp?title=2025"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 95,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        label: 'Nightlife',
        confidence: 85,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        label: 'Public Transport',
        confidence: 97,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/japan/kyoto'
      },
      {
        label: 'Dining Alone',
        confidence: 93,
        source: 'Be My Travel Muse 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-in-japan/'
      }
    ],
  
    legalResources: {
      embassy: {
        name: 'U.S. Embassy {city}',
        address: '{address}',
        phone: '{phone}',
        email: 'consular{country-code}@state.gov',
        emergency: '{phone}',
        link: 'https://{country-code}.usembassy.gov/'
      },
      embassies: [
        {
          name: 'U.S. Consulate General Osaka-Kobe',
          address: '2-11-5 Nishitenma, Kita-ku, Osaka 530-8543',
          phone: '+81 6 6315 5900',
          link: 'https://jp.usembassy.gov/embassy-consulates/osaka/'
        },
        {
          name: 'British Consulate General Osaka',
          address: 'Epson Osaka Building 19F, 3-5-1 Miyahara, Yodogawa-ku, Osaka 532-0003',
          phone: '+81 6 6120 5600',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-osaka'
        },
        {
          name: 'German Consulate General Osaka-Kobe',
          address: 'Umeda Sky Building East 35F, 1-1-88 Oyodonaka, Kita-ku, Osaka 531-6035',
          phone: '+81 6 6440 5070',
          link: 'https://japan.diplo.de/ja-ja/vertretungen/generalkonsulat-osaka'
        },
        {
          name: 'French Consulate General Kyoto',
          address: 'Villa Alpha Tanimachi 4F, 2-2 Tanimachikyu-chome, Chuo-ku, Osaka 540-0012',
          phone: '+81 6 6946 6181',
          link: 'https://jp.ambafrance.org/Consulat-general-de-France-a-Osaka'
        },
        {
          name: 'Spanish Consulate Osaka',
          address: '2-2-2 Honten, Osaka-shi, Osaka 540-0021',
          phone: '+81 6 6261 4570',
          link: 'https://www.exteriores.gob.es/consulados/osaka'
        },
        {
          name: 'Australian Consulate General Osaka',
          address: 'Twin 21 MID Tower 16F, 2-1-61 Shiromi, Chuo-ku, Osaka 540-6116',
          phone: '+81 6 6941 9271',
          link: 'https://japan.embassy.gov.au/osak/home.html'
        },
        {
          name: 'Canadian Consulate General Osaka',
          address: '2-2-3 Nishishinsaibashi, Chuo-ku, Osaka 542-0086',
          phone: '+81 6 6212 4910',
          link: 'https://www.canadainternational.gc.ca/japan-japon/offices-bureaux/osaka.aspx'
        },
        {
          name: 'Netherlands Consulate Osaka',
          address: '1-4-1 Marunouchi, Naka-ku, Nagoya 460-0002',
          phone: '+81 52 201 9520',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/japan'
        },
        {
          name: 'Danish Consulate Osaka',
          address: 'c/o Nisshin Trading Co., 1-4-1 Kyoboshi, Chuo-ku, Tokyo 104-0044',
          phone: '+81 3 3542 5461',
          link: 'https://japan.um.dk/'
        },
        {
          name: 'Swiss Consulate Osaka',
          address: '1-4-1 Marunouchi, Naka-ku, Nagoya 460-0002',
          phone: '+81 52 201 9520',
          link: 'https://www.eda.admin.ch/tokyo'
        },
        {
          name: 'Indian Consulate General Osaka',
          address: 'Sumitomo Nakanoshima Building 18F, 3-2-18 Nakanoshima, Kita-ku, Osaka 530-0005',
          phone: '+81 6 6261 7299',
          link: 'https://www.cgiosaka.gov.in/'
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
    },
    sexualHarassmentData: {
      prevalence: 'very low',
      commonLocations: ['Japan rates 1.3/5 for sexual harassment risk - among world\'s lowest', 'Rare incidents of inappropriate behavior on crowded trains during rush hour', 'Women-only train cars available on Hankyu/Keihan lines for added protection', 'Virtually no street harassment - staring occasionally reported but rarely intimidating'],
      reportingRate: 87, // High reporting rate due to efficient police response and cultural respect
      legalProtection: 'Japan has strong legal frameworks and efficient police response. Sexual harassment laws well-enforced. Tourist police English-speaking and responsive. Cultural respect for women creates protective environment.',
      supportResources: [
        'Japan Police Emergency: 110 (some English support)',
        'Tourist Police: English-speaking assistance available',
        'Tokyo English Life Line: 03-5774-0992 (24/7 counseling)',
        'International SOS Kyoto: Emergency medical and counseling',
        'U.S. Embassy Tokyo Emergency: +81 3 3224 5000',
        'Kyoto Prefectural Police: +81 75-451-9111',
        'Women\'s Consultation Center Kyoto: +81 75-441-7700'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Kyoto University Hospital',
          address: '54 Shogoin Kawahara-cho, Sakyo Ward, Kyoto',
          phone: '+81 75-751-3111',
          emergency: true,
          specialties: ['Emergency Medicine', 'International Medical Center', 'Women\'s Health', 'English-speaking doctors'],
          link: 'https://www.kuhp.kyoto-u.ac.jp/english/'
        },
        {
          name: 'Kyoto Medical Center',
          address: '1-1 Fukakusa Mukaihata-cho, Fushimi Ward, Kyoto',
          phone: '+81 75-641-9161',
          emergency: true,
          specialties: ['24/7 Emergency Care', 'Advanced Medical Care', 'Obstetrics & Gynecology'],
          link: 'https://kyoto.hosp.go.jp/'
        },
        {
          name: 'Japanese Red Cross Kyoto Daiichi Hospital',
          address: '15-749 Honmachi, Higashiyama Ward, Kyoto',
          phone: '+81 75-561-1121',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Center', 'Women\'s Health Services'],
          link: 'https://www.kyoto1-jrc.org/'
        },
        {
          name: 'Kyoto Prefectural Medical University Hospital',
          address: '465 Kajii-cho, Kamigyo Ward, Kyoto',
          phone: '+81 75-251-5111',
          emergency: true,
          specialties: ['University Hospital', 'Advanced Treatments', 'International Patients Desk'],
          link: 'https://www.kpu-m.ac.jp/hospital/'
        }
      ],
      pharmacies: [
        {
          name: 'Matsumoto Kiyoshi (Multiple Locations)',
          address: 'Various locations including Kyoto Station area',
          phone: '+81 75-342-3921',
          hours: 'Daily 10:00-22:00 (varies by location)',
          emergency: false,
          link: 'https://www.matsukiyo.co.jp/'
        },
        {
          name: 'Cosmic Pharmacy Kyoto Station',
          address: 'Kyoto Station area',
          phone: '+81 75-342-4193',
          hours: 'Daily 7:00-23:00',
          emergency: false,
          link: 'https://www.cosmospc.co.jp/'
        }
      ],
      womensHealth: {
        clinics: [
          'Kyoto University Hospital International Medical Center: English-speaking gynecologists',
          'Kyoto Medical Center Women\'s Health Department: Comprehensive women\'s healthcare',
          'Japanese Red Cross Kyoto Daiichi Hospital: Obstetrics and gynecology services',
          'Kyoto Prefectural Medical University Hospital: Advanced women\'s health treatments'
        ],
        gynecologists: [
          'Kyoto University Hospital: International medical center with English-speaking specialists',
          'Kyoto Medical Center: Experienced gynecologists with modern facilities',
          'Private women\'s clinics throughout Kyoto: Most require Japanese language support'
        ],
        emergencyContraception: [
          'Available at major hospitals with prescription',
          'Pharmacies require prescription from doctor',
          'International medical centers most accessible for tourists',
          'Kyoto University Hospital International Center recommended'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies, convenience stores, supermarkets',
          'International brands available in tourist areas',
          'Matsumoto Kiyoshi and Cosmic pharmacies well-stocked',
          'Convenience stores (7-Eleven, Lawson, FamilyMart) 24/7 availability'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Japan',
        'Routine vaccinations should be up to date',
        'Japanese encephalitis only if traveling to rural areas long-term',
        'Seasonal flu vaccination recommended during winter months'
      ],
      healthRisks: [
        'Very low health risks overall',
        'Air pollution minimal compared to other major Asian cities',
        'Natural disaster risk (earthquakes, typhoons) - download emergency apps',
        'Heat stroke possible during hot summer months',
        'Food safety excellent - minimal risk of foodborne illness'
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'May 15, 2025',
      details: 'Japan maintains Level 1 advisory. Very low crime rates. Main concerns are natural disasters (earthquakes, typhoons). Exercise normal precautions and stay informed about weather conditions.',
      reason: 'Extremely low crime rates but natural disaster preparedness important.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/japan-travel-advisory.html',
      soloTravelerAdvice: [
        'Japan ranked among world\'s safest countries for solo female travel',
        'Download JNTO Safety Tips app for earthquake/emergency alerts',
        'Learn basic emergency phrases in Japanese',
        'Keep passport copy - required for hotel check-in and some activities',
        'Purchase travel insurance for natural disaster coverage'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '¥3,000-12,000 ($20-80 USD) per day',
        description: '2025 costs: Budget travelers ¥3,000-5,000/day with hostels and street food. Mid-range ¥8,000-12,000/day with hotel and restaurant meals. Kyoto offers good value with excellent safety standards.',
        tip: 'Japan is cash-based - use 7-Eleven ATMs. IC card (ICOCA) essential for transport. Temple entrance fees ¥300-600 each.'
      },
      accommodation: [
        {
          type: 'Hostels with Female Dorms',
          avgCost: '¥2,000-4,000/night ($13-27)',
          safetyNote: 'Excellent safety with female-only rooms and 24/7 reception',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotels/Ryokan',
          avgCost: '¥8,000-15,000/night ($53-100)',
          safetyNote: 'Traditional accommodation with exceptional safety and service',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: '¥15,000-25,000/night ($100-167)',
          safetyNote: 'Premium safety with English-speaking staff and modern amenities',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '¥25,000+/night ($167+)',
          safetyNote: 'Exceptional security and concierge services',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport (IC Card)',
          cost: '¥1,000-1,500/day ($7-10)',
          safetyDescription: 'Exceptionally safe with women-only cars during rush hour',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Extremely safe day and night with excellent lighting',
          safetyLevel: 'high'
        },
        {
          method: 'Taxi',
          cost: '¥600 initial + ¥100/280m',
          safetyDescription: 'Very safe but expensive - use for late night or emergencies',
          safetyLevel: 'high'
        },
        {
          method: 'Rental Bicycle',
          cost: '¥1,000-2,000/day ($7-13)',
          safetyDescription: 'Safe with dedicated bike lanes, theft extremely rare',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Use IC card (ICOCA) for seamless public transport - much cheaper than individual tickets',
        'Many temples free to visit - only famous ones charge ¥300-600 entrance fees',
        'Convenience store meals excellent value and safe - ¥300-800 per meal',
        'Temple food (shojin ryori) offers cultural dining experience at reasonable prices',
        'Free WiFi widely available at stations, convenience stores, and tourist areas',
        'Purchase city bus day pass for ¥600 if visiting multiple temples',
        'Lunch sets at restaurants much cheaper than dinner - same quality',
        '7-Eleven ATMs best for international cards - available 24/7'
      ]
    },
    crimeStatistics: {
      violentCrime: 0.3, // per 100,000 - among world's lowest
      propertyCrime: 98, // per 100,000 - very low, mostly minor theft
      sexualAssault: 1.1, // per 100,000 - extremely low with high reporting rate
      kidnapping: 0.02, // per 100,000 - virtually non-existent
      overallCrimeIndex: 22.1, // Very low crime category (Numbeo 2025)
      safetyIndex: 77.9, // High safety category (Numbeo 2025)
      source: 'Japan National Police Agency & Numbeo Safety Index 2025',
      year: 2025,
      context: 'Kyoto safest city in Japan with crime rates among world\'s lowest. Primary concerns are minor theft and natural disasters.'
    },
    culturalSensitivityTipsDetails: [
      'Understand Japanese bow etiquette deeply - Bowing is fundamental in Japanese culture and shows respect. Solo female travelers who master proper bowing (slight bow for greetings, deeper for temples) often receive warmer treatment and feel more integrated into local customs.',
      'Master temple and shrine etiquette - Remove shoes, purify hands and mouth at water basins, bow before entering, speak in whispers. Solo female travelers who show reverence for sacred spaces gain respect from locals and temple staff.',
      'Practice quiet public behavior - Japanese culture values harmony and avoiding disturbance to others. Solo female travelers should speak quietly on trains, walk calmly, and avoid loud phone conversations to blend in respectfully.',
      'Respect personal space and queuing culture - Japanese people value orderly behavior and personal boundaries. Solo female travelers who queue properly and maintain respectful distance feel safer and more accepted.',
      'Learn gift-giving and receiving etiquette - Use both hands when giving/receiving items, especially business cards. Solo female travelers who understand these formalities often receive better service and build positive relationships.',
      'Understand dining customs and restrictions - Don\'t eat while walking, don\'t tip, use chopsticks properly, don\'t stick chopsticks upright in rice. Solo female travelers who follow dining etiquette avoid embarrassing situations.',
      'Dress modestly for religious and traditional sites - Cover shoulders, knees, and avoid revealing clothing in temples, traditional neighborhoods, and formal settings. This shows cultural respect and helps solo female travelers feel more secure.',
      'Practice proper photography etiquette - Always ask permission before photographing people, especially women in traditional dress, monks, or ceremonies. Respect no-photo zones in temples and sacred spaces.',
      'Learn basic Japanese phrases and their proper usage - "Arigatou gozaimasu" (thank you), "Sumimasen" (excuse me/sorry), "Konnichiwa" (hello). Solo female travelers who make effort to speak Japanese often receive exceptional kindness.',
      'Understand the concept of "omotenashi" (hospitality) - Don\'t refuse kind gestures abruptly, accept help graciously, show appreciation for service. Solo female travelers who respect Japanese hospitality culture feel more welcomed.',
      'Avoid pointing and inappropriate gestures - Never point with index finger, use open hand instead. Don\'t blow your nose in public, don\'t touch people casually. These actions are considered very rude.',
      'Don\'t ignore shoe removal customs - Remove shoes when entering homes, temples, traditional restaurants, some shops. Wear clean socks without holes as your feet will be visible. This is non-negotiable in Japanese culture.',
      'Don\'t eat or drink while walking - Japanese consider this impolite and messy. Finish food and drinks before moving, use designated eating areas. Solo female travelers who follow this rule blend in better.',
      'Don\'t touch religious objects or sacred items - Never touch Buddha statues, shrine objects, or temple artifacts. This is deeply disrespectful and can cause serious offense to religious practitioners.',
      'Don\'t tip service staff - Tipping is not customary and can confuse or offend staff. Excellent service is expected without extra payment. Solo female travelers should simply say thank you instead of offering tips.'
    ],
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default kyoto;
