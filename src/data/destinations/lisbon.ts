import { Destination } from './types';

const lisbon: Destination = {
    city: 'Lisbon',
    country: 'Portugal',
    continent: 'Europe',
    countryCode: 'pt',
    overallScore: 8.6,
    nightSafety: 8.2,
    publicTransit: 8.8,
    walkingAlone: 8.4,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 245,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.2,
        context: 'Lisbon is very safe at night, particularly in tourist areas and neighborhoods like Chiado, Bairro Alto, and Príncipe Real. The city has excellent street lighting and regular police patrols. While petty crime can occur in busy nightlife areas, violent incidents are extremely rare. Solo women report feeling comfortable walking at night in central areas.'
      },
      publicTransit: {
        score: 8.8,
        context: 'Lisbon\'s public transport (metro, trams, buses) is modern, clean, and very safe. The iconic Tram 28 is well-monitored despite being crowded with tourists. Metro stations have security cameras and staff presence. The transport system is reliable and incidents are rare. Watch belongings during rush hour.'
      },
      walkingAlone: {
        score: 8.4,
        context: 'Walking alone in Lisbon is very safe during day and night. The city has a relaxed, welcoming culture and locals are generally helpful. Hills can be steep, so comfortable shoes are essential. Most neighborhoods are well-lit and have good foot traffic even in evenings.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Chiado',
          description: 'Upscale shopping and cultural district with excellent safety record. Well-patrolled area with luxury stores, cafes, and the famous Carmo Ruins. Very safe day and night with good lighting and active street life.'
        },
        {
          name: 'Príncipe Real',
          description: 'Trendy neighborhood popular with young professionals and tourists. Excellent restaurants, boutique shops, and beautiful Príncipe Real Garden. Very safe with low crime rates and friendly local community.'
        },
        {
          name: 'Alfama',
          description: 'Historic neighborhood with narrow cobblestone streets and traditional Fado music. Generally safe but can be confusing to navigate. Stay on main routes at night and be cautious of steep, poorly lit alleys.'
        },
        {
          name: 'Bairro Alto',
          description: 'Famous nightlife district that\'s very safe despite being busy. Well-patrolled area with lots of bars and restaurants. Can get crowded and noisy at night but violent crime is rare. Watch for pickpockets in busy areas.'
        },
        {
          name: 'Santos',
          description: 'Design district with art galleries, trendy restaurants, and Design Museum. Safe area with good lighting and regular foot traffic. Popular with creative professionals and tourists.'
        },
        {
          name: 'Estrela',
          description: 'Quiet residential neighborhood with the beautiful Estrela Basilica and Garden. Very safe family area with low crime rates and peaceful atmosphere. Good for accommodation.'
        }
      ],
      caution: ['Some areas of Martim Moniz at night', 'Steep narrow alleys in Alfama after dark'],
      avoid: ['Cova da Moura area', 'Some outlying suburbs late at night']
    },
    accommodations: [
      {
        name: 'Solar do Castelo - A Luxury Collection Hotel',
        type: 'luxury hotel',
        features: ['Former 18th-century mansion', 'Inside castle walls', '24/7 concierge', 'Historic royal palace location', 'Premium security', 'Female-friendly staff'],
        rating: 4.6,
        notes: 'Built within the walls of Castelo de São Jorge on the site of former royal palace kitchens. Perfect for solo female travelers wanting to experience luxury with unparalleled safety in historic setting. "Like living as a queen" according to solo female travel guides.',
        costRange: '€250-400/night',
        safetyLevel: 'maximum',
        link: 'https://www.marriott.com/en-us/hotels/lissf-solar-do-castelo-a-luxury-collection-hotel-lisbon/'
      },
      {
        name: 'The Lumiares Hotel & Spa - Bairro Alto',
        type: 'luxury boutique hotel',
        features: ['Apartment-style rooms', 'Rooftop bar', '24/7 room service', 'Spa services', 'Personal trainer available', 'Underground parking'],
        rating: 4.7,
        notes: 'Portuguese luxury hotel group offering apartment-style accommodations in safe Bairro Alto. Solo female travelers rave about feeling like they have their own apartment with hotel services. Chic Portuguese flair with high ceilings and natural light.',
        costRange: '€180-320/night',
        safetyLevel: 'highest',
        link: 'https://www.thelumiares.com/'
      },
      {
        name: 'Hotel Avenida Palace',
        type: '5-star boutique hotel',
        features: ['Historic building', 'Recently renovated', 'Opulent interiors', 'Central Rossio location', 'Free breakfast included', 'English-speaking staff'],
        rating: 4.5,
        notes: 'Historic 5-star boutique hotel offering "luxury at highly affordable price" according to solo travel reviews. Recently renovated with opulent rooms and communal spaces. Perfect central location for solo female exploration with excellent value.',
        costRange: '€145-220/night',
        safetyLevel: 'highest',
        link: 'https://www.hotelavenidapalace.pt/'
      },
      {
        name: 'Lisbon Art Stay - Baixa-Chiado',
        type: 'design boutique hotel',
        features: ['Vibrant contemporary design', 'Rooftop speakeasy', 'Bar and lounge', 'Near Commerce Square', 'Instagram-worthy interiors', 'Solo traveler favorite'],
        rating: 4.8,
        notes: 'Incredibly vibrant design hotel in safest Baixa-Chiado area near Commerce Square. Features stunning decor, bar/lounge, plus rooftop speakeasy. Highly recommended by solo female travelers for its aesthetic appeal and central safety.',
        costRange: '€120-200/night',
        safetyLevel: 'highest',
        link: 'https://www.lisbonart.com/'
      },
      {
        name: 'Dear Lisbon Gallery House',
        type: 'design boutique hotel',
        features: ['Art gallery integrated', 'Co-working space', 'São Bento creative district', 'Cultural experiences', 'Design-focused', 'Female solo traveler recommended'],
        rating: 4.6,
        notes: 'Best overall boutique hotel combining stunning restaurant and integrated art gallery in creative São Bento district. Perfect for solo female travelers seeking culture, safety, and unique experiences in one of Lisbon\'s most artistic neighborhoods.',
        costRange: '€80-120/night',
        safetyLevel: 'highest',
        link: 'https://www.dearlisbon.com/'
      },
      {
        name: 'Alecrim ao Chiado',
        type: 'mid-range hotel',
        features: ['Heart of Chiado shopping', 'Air conditioning', 'Modern security', 'Walking distance to attractions', 'Budget-friendly luxury'],
        rating: 4.5,
        notes: 'Right in heart of Chiado shopping district with essential air conditioning for summer comfort. Excellent value for central location. Solo female travelers praise the convenient location and modern amenities at reasonable prices.',
        costRange: '€60-90/night',
        safetyLevel: 'high',
        link: 'https://www.alecrima.com/'
      },
      {
        name: 'Hotel LX Rossio',
        type: 'budget hotel',
        features: ['Central Baixa/Chiado location', 'Budget-friendly', 'Historic building', 'Near major attractions', 'Clean and safe'],
        rating: 4.5,
        notes: 'Low-cost hotel in the absolute heart of Lisbon in safest Baixa/Chiado neighborhood. Perfect central location for solo female travel Lisbon exploration. Excellent budget option without compromising on safety and location.',
        costRange: '€45-70/night',
        safetyLevel: 'high',
        link: 'https://www.hotellxrossio.com/'
      },
      {
        name: 'Yes! Lisbon Hostel',
        type: 'modern hostel',
        features: ['Women-only rooms available', 'Central Chiado location', 'Rooftop terrace', '5 minutes to waterfront', 'Highly rated by solo women'],
        rating: 4.8,
        notes: '10/10 rating from women solo travelers! Safe place even in mixed rooms, very clean space. Amazing location less than 5 minutes from the sea. Perfect for solo female travelers seeking social atmosphere with safety.',
        costRange: '€25-45/night',
        safetyLevel: 'high',
        link: 'https://www.yeslisbon.com/'
      },
      {
        name: 'Sant Jordi Hostels Lisbon',
        type: 'social hostel',
        features: ['Female-only dorms', 'Fun friendly environment', 'Close to public transport', 'Social activities', 'Private rooms available'],
        rating: 4.6,
        notes: 'Highly recommended for incredible solo stay experience. Very fun, friendly environment perfect for solo female travelers. Excellent proximity to public transportation with wide range of accommodation options.',
        costRange: '€20-35/night',
        safetyLevel: 'high',
        link: 'https://www.santjordihostels.com/'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: [
        'Comfortable walking shoes with excellent grip absolutely essential for Lisbon\'s steep cobblestone hills that become dangerously slippery when wet',
        'Light layers for unpredictable Atlantic weather - mornings and evenings can be surprisingly cool even in summer months',
        'Modest dress covering shoulders and knees required for churches, monasteries, and religious sites throughout Lisbon',
        'Avoid wearing any flashy jewelry, expensive watches, or designer items in tourist areas to prevent targeting by pickpockets',
        'Pack a lightweight jacket or cardigan for ocean breezes and unexpected rain showers typical of Atlantic coastal climate',
        'Choose neutral colors (navy, black, grey) that don\'t mark you as tourist and blend with Portuguese fashion preferences',
        'Bring crossbody bag worn in front or hidden money belt for valuables - backpacks make easy targets on crowded Tram 28',
        'Pack closed-toe shoes only - sandals inadequate for cobblestone navigation and mark you as tourist in local areas',
        'Include lightweight scarf for quick shoulder coverage when entering religious sites or conservative neighborhood areas',
        'Avoid bright colors, logos, or anything that screams "tourist" - Portuguese locals dress conservatively and appreciate understated style'
      ],
      firstTimers: [
        'Is Lisbon safe for solo female travelers? Absolutely - Portugal ranks 7th safest capital worldwide with excellent track record for women traveling alone',
        'Book verified high-rated accommodations in central neighborhoods: Chiado, Baixa, or Príncipe Real for maximum solo female travel safety',
        'Master Tram 28 safely by keeping bags in front, avoiding rush hours, and staying alert - it\'s "pickpocket\'s heaven" according to travel guides',
        'Learn basic Portuguese phrases like "Obrigada" (thank you), "Socorro" (help), and "Onde fica...?" (where is?) - locals deeply appreciate the effort',
        'Use official taxis, Uber, or Bolt for all late-night transport - never walk alone in Martim Moniz or Intendente areas after dark',
        'Save essential numbers: Emergency 112, Tourist Police +351 21 342 1634, APAV victim support 116 006 (English available)',
        'Stay hydrated when walking Lisbon\'s steep hills - carry water and use elevators/funiculars like Elevador de Santa Justa when tired',
        'Avoid restaurant hustlers on Rua Augusta with fake menus - ask about "couvert" charges and eat where Portuguese locals dine',
        'Download safety apps before arrival: NomadHer (female community), bSafe (panic button), Life360 (location sharing), Citymapper (transport)',
        'Book authentic Fado shows through reputable venues like Casa de Linhares - avoid street ticket sellers with fake performances',
        'Understand harassment patterns: mainly occurs in Martim Moniz after dark and from drunk tourists in Bairro Alto - travel in groups at night',
        'Pack grippy walking shoes essential for cobblestone streets that become slippery when wet - falls are regular safety concern in hills'
      ],
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'CP Urban',
        'Bolt',
        'Citymapper'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Lisbon exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Portugal safety insights', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while exploring', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing useful for solo travel in Europe', rating: 4.1 },
        { name: 'CP Urban', link: 'https://www.cp.pt/passageiros/en', description: 'Official Portuguese rail app for trains to Sintra, Porto and beyond', rating: 4.4 },
        { name: 'Bolt', link: 'https://bolt.eu/', description: 'Popular European ride-hailing app with driver verification in Lisbon', rating: 4.3 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best app for navigating Lisbon trams, metros and buses safely', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Socorro!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Call the police!',
          local: 'Chame a polícia!',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I need a doctor.',
          local: 'Preciso de um médico.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Onde fica o hospital mais próximo?',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I am lost.',
          local: 'Estou perdida.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor, deixe-me em paz.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Não me sinto segura.',
          localLanguage: 'Portuguese'
        },
        {
          english: 'Can you help me?',
          local: 'Pode ajudar-me?',
          localLanguage: 'Portuguese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Lisbon casual but neat dress code - Portuguese appreciate well-presented appearance without being overly formal',
        'Modest coverage of shoulders and knees absolutely required in churches, monasteries, and religious sites throughout the city',
        'Business casual appropriate for nicer restaurants and evening dining - avoid overly casual beach wear in city center',
        'Comfortable walking shoes with excellent grip essential due to steep hills and slippery cobblestone streets',
        'Neutral colors (navy, black, grey) preferred over bright tourist clothing - helps blend with local Portuguese fashion style',
        'Lightweight layers recommended for unpredictable Atlantic coastal weather that can change quickly throughout the day',
        'Beach wear and flip-flops only appropriate for coastal areas like Cascais - never acceptable in Lisbon city center'
      ],
      behaviorNorms: [
        'Greet with firm handshakes and maintain direct eye contact - Portuguese value formal, respectful personal interactions',
        'Portuguese deeply appreciate politeness, patience, and visitors who make effort to learn basic language phrases',
        'Learn essential Portuguese phrases like "Obrigada" (thank you), "Com licença" (excuse me) - locals are helpful when you try',
        'Tipping 10% customary in restaurants and expected for good service - leave cash on table rather than adding to card',
        'Respect Portuguese meal times: lunch 1-3pm, dinner 8-10pm - many restaurants close during afternoon siesta period',
        'Be patient with relaxed service pace - Portuguese culture values taking time and building relationships over rushing',
        'Show genuine interest in Portuguese history, maritime exploration, and cultural achievements - locals love sharing heritage',
        'Queue politely and wait your turn in shops, restaurants, and transport - jumping queues is considered very rude',
        'Public displays of affection should be modest and discrete - Portuguese prefer reserved public behavior',
        'Embrace slower pace of life and "saudade" cultural concept - understanding Portuguese emotional depth enhances cultural connection'
      ],
      perception: [
        'Solo women travelers extremely welcome in Lisbon - Portuguese culture is warm, hospitable, and genuinely helpful to tourists',
        'Is Lisbon safe for women solo travelers? Absolutely - city is progressive where women can dine alone, explore attractions, and use transport independently',
        'Street harassment rare compared to other European capitals - most Portuguese men are respectful and incidents mainly involve drunk tourists',
        'Local perception of solo female travelers is very positive - seen as independent, adventurous people worthy of respect and assistance',
        'Portuguese society has strong family values but fully accepts women traveling independently and making their own choices',
        'Business and service interactions treat solo women equally - no discrimination in restaurants, shops, or professional settings',
        'Safety concerns for solo women focus on tourist-targeting crimes rather than gender-based harassment from local population',
        'Cultural acceptance of female independence very high - solo women feel comfortable in bars, restaurants, and cultural venues alone',
        'Local women often approach solo female travelers to offer help and recommendations - sisterhood mentality common',
        'Government and tourism industry actively promote Lisbon as safe solo female travel destination with comprehensive support services'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but very safe.'
    },
    emergencyInfo: {
      police: '112', fire: '112', medical: '112', general: '112'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    }, scamWarnings: [
        'Use official ATMs and avoid currency exchange at tourist areas for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Tourist Menu Scams',
        description: 'Some restaurants in tourist areas may have inflated "tourist menus". Ask for regular menu and check prices.',
        severity: 'low'
      },
      {
        title: 'Tram 28 Pickpocketing',
        description: 'The famous tram gets very crowded. Keep valuables secure and be aware of your surroundings.',
        severity: 'medium'
      },
      {
        title: 'Fake Fado Shows',
        description: 'Book Fado shows through reputable venues. Some tourist traps offer poor quality performances.',
        severity: 'low'
      }
    ],
    languages: ['Portuguese', 'English (widely spoken in tourist areas)'],
    daytimeSafetyPercent: 87.2,
    nighttimeSafetyPercent: 76.8,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lisbon',
    redFlags: [
      {
        label: 'Street Harassment & Catcalling',
        frequency: 'Common for solo women at night',
        icon: 'AlertTriangle',
        details: 'Solo female travelers report increased harassment in nightlife areas, particularly Bairro Alto and Cais do Sodré. Groups of men may follow or make persistent comments.',
        prevention: 'Travel in groups after dark, stick to well-lit main streets, use rideshare for late-night transport, trust your instincts'
      },
      {
        label: 'Tram 28 Pickpocketing Hub',
        frequency: 'Daily occurrences reported',
        icon: 'Hand',
        details: 'Famous Tram 28 is prime target for organized pickpockets who work in teams. Tourists distracted by sights become easy victims during crowded rides.',
        prevention: 'Keep bags in front, avoid rush hours, secure valuables in inner pockets, stay alert at stops'
      },
      {
        label: 'Martim Moniz Area After Dark',
        frequency: 'High harassment risk for women alone',
        icon: 'MapPin',
        details: 'Martim Moniz square and surrounding streets have increased reports of harassment toward solo women after 9 PM. Drug activity and loitering groups present.',
        prevention: 'Avoid this area after dark, use alternative routes to Rossio, take taxis/Uber instead of walking through'
      },
      {
        label: 'Tourist Overcharging & Menu Scams',
        frequency: 'Frequent in tourist zones',
        icon: 'DollarSign',
        details: 'Restaurants near major attractions often have inflated prices or hidden charges. Some establishments charge extra for bread, olives, or "couvert" without explanation.',
        prevention: 'Check prices before ordering, ask about couvert charges, read reviews, eat where locals dine'
      },
      {
        label: 'Steep Cobblestone Falls',
        frequency: 'Regular incidents reported',
        icon: 'Mountain',
        details: 'Lisbon\'s famous cobblestone streets become slippery when wet. Regular injuries occur on steep hills, especially in Alfama and Bairro Alto districts.',
        prevention: 'Wear proper grip shoes, walk carefully on wet stones, use handrails when available, consider Uber for steep climbs'
      },
      {
        label: 'Fake Drug Dealers Targeting Tourists',
        frequency: 'Common in Bairro Alto',
        icon: 'Shield',
        details: 'Individuals approach tourists offering drugs or hashish, often as setup for robbery or scam. Particularly common in nightlife areas.',
        prevention: 'Ignore all drug offers, walk away immediately, don\'t engage in conversation, report aggressive dealers to police'
      },
      {
        label: 'Violent Crime (Muggings, Armed Robbery)',
        frequency: 'Rare but isolated incidents reported',
        icon: 'PocketKnife',
        details: 'While Lisbon is very safe overall, isolated incidents of mugging and theft have been reported in less touristy areas and late at night. Solo female travelers should remain vigilant, especially in peripheral neighborhoods and when walking alone after dark.',
        prevention: 'Stick to well-lit central areas, avoid displaying valuables, use registered taxis or rideshare after dark, stay in groups when possible'
      }
    ],
    culturalDos: [
      'Learn basic Portuguese greetings like "Bom dia" (good morning) and "Obrigada" (thank you) - locals deeply appreciate language efforts',
      'Dress modestly covering shoulders and knees in churches, monasteries, and religious sites throughout Lisbon',
      'Be patient with relaxed Portuguese service culture - meals and interactions take time and rushing is considered rude',
      'Try local cuisine especially pastéis de nata, bacalhau dishes, and regional wines - food culture is central to Portuguese identity',
      'Respect Portuguese customs around family time, especially during Sunday family meals and holiday celebrations',
      'Greet people properly with handshakes and direct eye contact - Portuguese value formal, respectful personal interactions',
      'Show interest in Portuguese history, especially maritime exploration and cultural achievements - locals love sharing heritage',
      'Use proper table manners and wait for everyone to be served before eating - communal dining etiquette is important',
      'Embrace the Portuguese concept of "saudade" (nostalgic longing) when discussing culture, music, and literature',
      'Accept offered food and drink graciously when visiting Portuguese homes - refusing hospitality can cause serious offense'
    ],
    culturalDonts: [
      "Don't rush meals or show impatience with relaxed Portuguese dining pace - meals are social experiences to be savored slowly",
      "Don't wear beach clothes, flip-flops, or revealing clothing in the city center - Portuguese dress more conservatively than other Southern Europeans",
      "Don't be impatient with slower service or bureaucracy - Portuguese culture values taking time and building relationships over efficiency",
      "Don't ignore steep terrain when planning walks - Lisbon's hills require proper footwear and realistic expectations about walking distances",
      "Don't skip trying pastéis de nata or other traditional sweets - refusing local food specialties can be seen as cultural disrespect",
      "Don't speak Spanish assuming Portuguese people understand - Portuguese is a distinct language and assuming otherwise can offend locals",
      "Don't compare Portugal to Spain repeatedly - Portuguese are proud of their unique culture and don't appreciate constant Spanish comparisons",
      "Don't expect everything to be open during traditional siesta time (1-3 PM) - many shops and restaurants close for afternoon break",
      "Don't refuse offered coffee or small snacks in social situations - this goes against Portuguese hospitality traditions",
      "Don't be loud or boisterous in public spaces, churches, or on public transport - Portuguese prefer quieter, more reserved public behavior"
    ],
    culturalSensitivityTips: [
      'Portuguese culture values a relaxed approach to life with emphasis on family, tradition, and enjoying simple pleasures. Solo female travelers who embrace this slower pace and show appreciation for Portuguese customs around food, family, and leisure will find more authentic cultural connections.',
      'The concept of "saudade" is central to Portuguese culture - a deep emotional state of nostalgic longing for something absent. Understanding this uniquely Portuguese sentiment helps solo female travelers appreciate the country\'s literature, music (fado), and cultural expressions.',
      'Portuguese hospitality is warm but reserved, reflecting cultural values of respect and dignity. Solo female travelers should expect genuine kindness but understand that Portuguese people may initially appear more formal than in other Southern European countries.',
      'Food culture is central to Portuguese social life, with long meals serving as important family and social bonding time. Solo female travelers who take time to enjoy meals properly, show appreciation for local cuisine, and understand Portuguese dining customs will connect with fundamental cultural values.',
      'Portuguese language appreciation goes a long way, as locals are proud of their distinct language (not Spanish). Learning basic phrases like "Bom dia" (good morning), "Obrigada" (thank you - feminine form), and "Com licença" (excuse me) shows cultural respect.',
      'Historical pride is important to Portuguese culture, from the Age of Exploration to maritime heritage. Solo female travelers who show interest in Portuguese history, explorers like Vasco da Gama, and cultural achievements will find locals eager to share their heritage.',
      'Catholic traditions remain culturally significant even among non-practicing Portuguese. Solo female travelers should show respect in churches and religious sites, understanding that these places hold deep cultural meaning beyond tourism.',
      'Regional identity is strong throughout Portugal, with distinct traditions, dialects, and specialties. Solo female travelers who show appreciation for regional differences and local traditions will demonstrate cultural sensitivity and gain deeper insights.',
      'The Portuguese concept of "desenrascanço" (ability to find creative solutions with limited resources) reflects cultural values of ingenuity and resilience. Solo female travelers who are adaptable and appreciate resourcefulness will better understand Portuguese culture.',
      'Environmental consciousness and connection to the ocean are deeply rooted in Portuguese culture. Solo female travelers who show respect for Portugal\'s natural beauty, coastal heritage, and environmental values will connect with important aspects of Portuguese identity.'
    ],
    womensConfidenceScore: {
      score: 82.4,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Lisbon"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 92, source: 'Portugal Tourism Safety Report 2025', sourceUrl: 'https://www.visitportugal.com/safety' },
      { label: 'Nightlife', confidence: 81, source: 'Solo Female Travel Portugal 2025', sourceUrl: 'https://www.solofemaleguide.com/portugal' },
      { label: 'Public Transport', confidence: 88, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Lisbon' },
      { label: 'Dining Alone', confidence: 89, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/lisbon/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Busy tourist areas during peak season', 'Nightlife districts late at night', 'Crowded public transport'],
      reportingRate: 72,
      legalProtection: 'Strong legal protections under Portuguese and EU law. Police take reports seriously and victims have access to support services.',
      supportResources: [
        'APAV (Portuguese Association for Victim Support): 116 006 (Mon-Fri 9am-9pm, free), +351 21 358 79 00',
        'APAV Lisbon Office: Rua José Estêvão 135-A, 1150-201 Lisboa - English-speaking staff available',
        'National Domestic Violence Helpline: 800 202 148 (24/7, free and confidential)',
        'AMCV - Women Against Violence Association: +351 213 802 165, ca@amcv.org.pt',
        'UMAR - Women\'s Support NGO: Psychological and legal support for violence victims',
        'Tourist Police Lisbon: +351 21 342 1634 (specialized in assisting foreign visitors)',
        'Emergency Services: 112 (24/7 emergency number for immediate danger)',
        'SMS Support: Text 3060 for confidential domestic violence support',
        'British Embassy Victim Support: +351 21 392 4000 (for UK nationals)',
        'US Embassy Citizen Services: +351 21 770 2122 (for US citizens)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hospital de Santa Maria (CHLN)',
          address: 'Av. Prof. Egas Moniz, 1649-035 Lisboa',
          phone: '+351 21 780 5000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'General Medicine', 'Obstetrics & Gynecology'],
          link: 'https://www.chln.min-saude.pt/',
          notes: 'Largest public hospital in Lisbon, comprehensive emergency services, English-speaking staff available'
        },
        {
          name: 'Hospital da Luz Lisboa',
          address: 'Avenida Lusíada 100, 1500-650 Lisboa',
          phone: '+351 21 770 4000',
          emergency: true,
          specialties: ['24h Emergency Care', 'Women\'s Medicine', 'Cardiology', 'International Patients'],
          link: 'https://www.hospitaldaluz.pt/lisboa',
          notes: 'Premium private hospital with 24/7 urgent care, modern facilities, multilingual staff'
        },
        {
          name: 'Hospital Pulido Valente (CHLN)',
          address: 'Alameda das Linhas de Torres 117, 1769-001 Lisboa',
          phone: '+351 21 751 9900',
          emergency: true,
          specialties: ['Emergency Medicine', 'Internal Medicine', 'Surgery', 'Women\'s Health'],
          link: 'https://www.chln.min-saude.pt/',
          notes: 'Major public hospital, part of CHLN network, comprehensive medical services'
        },
        {
          name: 'Centro Hospitalar de Lisboa Central - Hospital São José',
          address: 'Rua José António Serrano, 1150-199 Lisboa',
          phone: '+351 21 884 1000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma', 'Surgery', 'Obstetrics'],
          link: 'https://www.chlc.min-saude.pt/',
          notes: 'Central location, major trauma center, 24/7 emergency services'
        }
      ],
      pharmacies: [
        {
          name: 'Farmácia Ibéria (24/7)',
          address: 'Av. da Liberdade 2, 1250-144 Lisboa',
          phone: '+351 21 354 2020',
          hours: '24 hours daily',
          emergency: true,
          link: 'https://www.farmaciaiberia.pt/',
          notes: 'Central location, 24/7 emergency pharmacy, English-speaking staff, emergency contraception available'
        },
        {
          name: 'Farmácia Central (Rossio)',
          address: 'Rossio 62-64, 1100-200 Lisboa',
          phone: '+351 21 342 1418',
          hours: 'Mon-Fri 8:00-20:00, Sat 9:00-19:00',
          emergency: false,
          link: 'https://www.farmaciacentral.pt/',
          notes: 'Historic central pharmacy, women\'s health products, tourist-friendly location'
        },
        {
          name: 'Farmácia do Campo Pequeno (24/7)',
          address: 'Av. da República 2B, 1050-191 Lisboa',
          phone: '+351 21 797 3043',
          hours: '24 hours daily',
          emergency: true,
          notes: '24/7 emergency services, near metro station, comprehensive women\'s health section'
        },
        {
          name: 'Farmácia Continente Amadora (24/7)',
          address: 'Estrada da Circunvalação, 2720-229 Amadora',
          phone: '+351 21 497 8200',
          hours: '24 hours daily',
          emergency: true,
          notes: 'Large 24/7 pharmacy in shopping center, wide range of products, parking available'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center Lisbon: +351 21 780 5000',
          'Family Planning Portugal: +351 21 386 7890'
        ],
        gynecologists: [
          'Dr. Silva - Hospital Santa Maria: +351 21 780 5000'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency contraception available at hospitals'
        ],
        sanitaryProducts: [
          'Available at all supermarkets and pharmacies',
          'Wide variety of international brands'
        ]
      },
      vaccinations: [
        'No specific vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be up to date'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Strong ocean currents at beaches',
        'UV exposure - use sunscreen'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Lisbon',
          address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
          phone: '+351 21 727 3300',
          link: 'https://pt.usembassy.gov/'
        },
        {
          name: 'British Embassy Lisbon',
          address: 'Rua de São Bernardo 33, 1249-082 Lisboa',
          phone: '+351 21 392 4000',
          link: 'https://www.gov.uk/world/organisations/british-embassy-lisbon'
        },
        {
          name: 'German Embassy Lisbon',
          address: 'Campo dos Mártires da Pátria 38, 1169-043 Lisboa',
          phone: '+351 21 881 0210',
          link: 'https://lissabon.diplo.de/'
        },
        {
          name: 'French Embassy Lisbon',
          address: 'Rua Santos-o-Velho 5, 1249-079 Lisboa',
          phone: '+351 21 393 9100',
          link: 'https://pt.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Lisbon',
          address: 'Rua do Salitre 1, 1269-052 Lisboa',
          phone: '+351 21 347 2381',
          link: 'https://www.exteriores.gob.es/embajadas/lisboa'
        },
        {
          name: 'Australian Embassy Lisbon',
          address: 'Avenida da Liberdade 200, 1250-147 Lisboa',
          phone: '+351 21 310 1500',
          link: 'https://portugal.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Lisbon',
          address: 'Avenida da Liberdade 198-200, 1250-147 Lisboa',
          phone: '+351 21 316 4600',
          link: 'https://www.canadainternational.gc.ca/portugal/'
        },
        {
          name: 'Netherlands Embassy Lisbon',
          address: 'Rua do Sacramento à Lapa 16, 1200-394 Lisboa',
          phone: '+351 21 714 0900',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/portugal'
        },
        {
          name: 'Danish Embassy Lisbon',
          address: 'Rua Castilho 16-4°, 1250-070 Lisboa',
          phone: '+351 21 381 2000',
          link: 'https://portugal.um.dk/'
        },
        {
          name: 'Swiss Embassy Lisbon',
          address: 'Travessa do Patrocínio 1, 1350-229 Lisboa',
          phone: '+351 21 394 0040',
          link: 'https://www.eda.admin.ch/lisboa'
        },
        {
          name: 'Indian Embassy Lisbon',
          address: 'Rua Pero da Covilhã 16, 1400-297 Lisboa',
          phone: '+351 21 301 0210',
          link: 'https://www.eoilisbon.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Lisbon',
        address: 'Avenida das Forças Armadas, 1600-081 Lisboa',
        phone: '+351 21 727 3300',
        email: 'lisbonacs@state.gov',
        link: 'https://pt.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under Portuguese and EU law',
        'Equal rights and protection against discrimination',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Portugal: +351 21 386 7890',
        'Free legal advice for EU citizens',
        'English-speaking lawyers available through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency)',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.8,
          recommendations: ['Clean, modern, and very safe system'],
          companies: ['Metropolitano de Lisboa'],
          link: 'https://www.metrolisboa.pt/'
        },
        {
          type: 'Tram',
          safety: 8.5,
          recommendations: ['Iconic Tram 28 - watch for pickpockets due to crowds'],
          companies: ['Carris'],
          link: 'https://www.carris.pt/'
        },
        {
          type: 'Uber',
          safety: 9.0,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/pt/en/'
        }
      ],
      nightTravel: {
        safety: 8.2,
        warnings: [
          'Some steep areas poorly lit at night',
          'Ocean areas can be windy and isolated'
        ],
        alternatives: [
          'Night buses available',
          'Uber available 24/7',
          'Taxis readily available'
        ]
      },
      verifiedProviders: [
        {
          name: 'Metro Lisboa',
          type: 'Public Transport',
          contact: '+351 21 350 0115',
          safety: 8.8
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
          safety: 9.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances'
      ],
      safeNeighborhoods: [
        'Chiado',
        'Príncipe Real',
        'Santos',
        'Estrela',
        'Avenidas Novas'
      ],
      womensOnly: [
        {
          name: 'Yes! Lisbon Hostel',
          type: 'Hostel',
          features: ['Women-only rooms', 'Central location', 'Modern security'],
          rating: 4.5
        }
      ],
      userReviews: [
        {
          rating: 4.8,
          safety: 9.1,
          comments: 'Felt very safe throughout my stay. Locals are helpful and friendly.',
          date: '2025-01-20'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Many cafes offer free WiFi',
        'Use VPN for sensitive transactions',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake booking sites',
        'Phishing emails from fake hotels',
        'Social media accommodation scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Portugal',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides strong protection',
        'Use secure payment methods',
        'Keep document copies in cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Tram 28',
          date: '2025-01-18',
          description: 'Tourist reported pickpocketing on crowded tram',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Wear comfortable shoes - Lisbon has many steep hills',
          author: 'Solo Traveler',
          date: '2025-01-22',
          upvotes: 67
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Portugal is very safe for travelers. Exercise normal precautions.',
      reason: 'Generally safe country with low crime rates.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/portugal-travel-advisory.html',
      soloTravelerAdvice: [
        'Is Lisbon safe for female solo travelers? Absolutely - rated as one of Europe\'s safest capitals',
        'Excellent destination for solo female travel safety with helpful, English-speaking locals',
        'Very safe with good public transport and walkable city center for women traveling alone',
        'Solo travel safety for women beginners is exceptional - perfect first European destination',
        'Try local cuisine and Fado culture safely in central neighborhoods',
        'Watch for steep hills when planning walks - use funiculars for safe navigation'
      ]
    },
    crimeStatistics: {
      violentCrime: 5.8,
      propertyCrime: 1842,
      sexualAssault: 8.2,
      kidnapping: 0.1,
      source: 'Portuguese National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'Moovit',
          purpose: 'Public transport navigation',
          rating: 4.5
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Tourist Police',
          number: '+351 21 342 1634',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Is Lisbon Safe for Solo Female Travelers?',
        description: 'Absolutely - Lisbon ranks as the 7th safest capital worldwide with excellent safety for solo women. Portugal has decreased street crime by 7% in 2024, making it one of Europe\'s safest destinations for female solo travel.',
        severity: 'low',
        sourceName: 'Global Peace Index 2024 & Portugal Tourism Safety',
        sourceUrl: 'https://www.visionofhumanity.org/maps/'
      },
      {
        title: 'Book High-Rated Solo Female Accommodations',
        description: 'Stay in proven solo female traveler favorites: Solar do Castelo (luxury), Lisbon Art Stay (design), or Yes! Lisbon Hostel (budget). All rated 4.5+ stars with verified safety for women traveling alone.',
        severity: 'medium',
        sourceName: 'Solo Female Travel Accommodation Reviews',
        sourceUrl: 'https://www.tripadvisor.com/'
      },
      {
        title: 'Master Tram 28 Pickpocket Prevention',
        description: 'Tram 28 is "pickpocket\'s heaven" with daily organized theft. Keep bags in front, avoid rush hours, secure valuables in inner pockets, or use metro/buses for safer tourist transport.',
        severity: 'medium',
        sourceName: 'Lisbon Safety Travel Forums',
        sourceUrl: 'https://community.ricksteves.com/'
      },
      {
        title: 'Avoid Restaurant Tourist Traps and Overcharging',
        description: 'Beware aggressive restaurant hustlers on Rua Augusta with fake menus. Ask about "couvert" charges (€2-3 for bread/olives), check prices before ordering, and eat where locals dine.',
        severity: 'medium',
        sourceName: 'Rick Steves Travel Forum',
        sourceUrl: 'https://community.ricksteves.com/travel-forum/tourist-scams/lisbon-restaurant-scam'
      },
      {
        title: 'Choose Safest Neighborhoods for Solo Women',
        description: 'Book accommodations in Chiado, Baixa, or Príncipe Real for maximum safety. These central areas offer 24/7 activity, excellent lighting, and easy access to attractions with minimal harassment.',
        severity: 'low',
        sourceName: 'Solo Female Travel Guides',
        sourceUrl: 'https://asinglewomantraveling.com/lisbon-solo-travel/'
      },
      {
        title: 'Navigate Cobblestone Hills Safely',
        description: 'Essential grippy shoes for Lisbon\'s steep cobblestones that become slippery when wet. Use elevators/funiculars for safety, especially Elevador de Santa Justa for amazing city views.',
        severity: 'medium',
        sourceName: 'Lisbon Tourism Safety Guide',
        sourceUrl: 'https://www.visitlisboa.com/'
      },
      {
        title: 'Understand Harassment Patterns and Avoidance',
        description: 'Solo women experience catcalling mainly in Martim Moniz after dark and from drunk tourists in Bairro Alto. Travel in groups at night and stick to well-lit central streets.',
        severity: 'high',
        sourceName: 'Solo Female Travel Safety Reports',
        sourceUrl: 'https://aloneandabroad.com/'
      },
      {
        title: 'Book Authentic Fado Shows Safely',
        description: 'Avoid tourist trap Fado venues with fake performances. Book at Casa de Linhares or Tasca do Chico for authentic experiences. Many scammers sell fake tickets on streets.',
        severity: 'low',
        sourceName: 'Lisbon Cultural Guides',
        sourceUrl: 'https://www.lisbonlux.com/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$40 - $70 USD / day',
        description: 'Lisbon offers excellent value for money with good safety standards. Solo female travel safety in Lisbon is exceptional compared to other European capitals.',
        tip: 'Mid-range options provide great safety and comfort for women solo travelers looking to balance budget with security.'
      },
      accommodation: [
        {
          type: 'Budget Hostel (Female Dorms)',
          avgCost: '$15-25/night',
          safetyNote: 'Female-only dorms available in central areas - highly recommended for solo women',
          safetyLevel: 'high',
          bestAreas: 'Chiado, Bairro Alto'
        },
        {
          type: 'Premium Hostel (Private Rooms)',
          avgCost: '$25-40/night',
          safetyNote: 'Private rooms with shared facilities, excellent security, social atmosphere',
          safetyLevel: 'highest',
          bestAreas: 'Chiado, Baixa'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$50-90/night',
          safetyNote: 'Excellent security, central locations, AC for summer comfort',
          safetyLevel: 'highest',
          bestAreas: 'Chiado, Avenida da Liberdade'
        },
        {
          type: 'Boutique Hotel',
          avgCost: '$80-150/night',
          safetyNote: 'Premium safety, concierge services, cultural experiences',
          safetyLevel: 'highest',
          bestAreas: 'São Bento, Príncipe Real'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$120-300/night',
          safetyNote: '24/7 security, premium amenities, perfect for solo travelers prioritizing safety',
          safetyLevel: 'maximum',
          bestAreas: 'Avenida da Liberdade, Lapa'
        }
      ],
      transport: [
        {
          method: 'Metro (Subway)',
          cost: '$1.35-2.20/ride',
          safetyDescription: 'Excellent safety record, clean, modern trains with security cameras and emergency buttons',
          safetyLevel: 'highest',
          femaleTraverlerTips: 'Very safe for solo women, avoid rush hour crowds on popular tourist lines'
        },
        {
          method: 'Trams (Historical)',
          cost: '$1.35-3.00/ride',
          safetyDescription: 'Generally safe but Tram 28 has frequent pickpocketing - stay very alert',
          safetyLevel: 'medium',
          femaleTraverlerTips: 'Keep valuables in front pockets, especially on Tram 28 during peak tourist hours'
        },
        {
          method: 'Public Buses',
          cost: '$1.35-2.20/ride',
          safetyDescription: 'Safe and extensive network covering entire city with real-time tracking',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Excellent for reaching areas not covered by metro, well-monitored'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe in central areas during day and night, excellent street lighting',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Wear comfortable shoes for cobblestones and hills, stick to well-lit main streets at night'
        },
        {
          method: 'Uber/Bolt',
          cost: '$3-12/ride',
          safetyDescription: 'Safe and reliable ride-sharing with GPS tracking and driver ratings',
          safetyLevel: 'highest',
          femaleTraverlerTips: 'Perfect for late night returns or reaching hilltop viewpoints safely'
        },
        {
          method: 'Official Taxis',
          cost: '$4-15/ride',
          safetyDescription: 'Licensed taxis are very safe with regulated meters and professional drivers',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Use taxi ranks or phone bookings, all drivers speak basic English'
        },
        {
          method: 'Elevador/Funiculars',
          cost: '$3.80/ride',
          safetyDescription: 'Historic elevators connecting Baixa to Bairro Alto safely navigate steep hills',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Great alternative to walking steep hills, popular Elevador de Santa Justa offers amazing views'
        }
      ],
      budgetTips: [
        'Buy Lisboa Card (€22-42) for free public transport + museum entries - safer than buying individual tickets on street',
        'Choose female-only hostel dorms in Chiado/Baixa (€20-25/night) over mixed dorms for solo female travel safety',
        'Book accommodations in central neighborhoods (Chiado, Baixa) - costs €10-20 more but eliminates unsafe late-night transport',
        'Use official metro/buses instead of Tram 28 to avoid pickpocketing - same cost but much safer for solo women',
        'Eat at Time Out Market for safe, budget dining (€8-15/meal) instead of street food in tourist traps',
        'Book day tours through reputable operators (€25-40) rather than exploring Alfama/Fado venues alone at night',
        'Invest in Uber/Bolt for late night returns (€5-12) instead of walking - small cost for major safety improvement',
        'Stay in neighborhoods with 24/7 activity (Bairro Alto, Chiado) - vibrant areas cost similar but offer natural safety',
        'Pack comfortable walking shoes - saves money on transport while keeping you safe on Lisbon\'s steep cobblestone hills'
      ],
      currencyExchangeTips: [
        'Portugal uses Euro (EUR) - no currency exchange needed for EU travelers, convenient for solo female travel planning',
        'ATMs widely available and safe to use in central Lisbon areas like Chiado, Baixa, and Príncipe Real with good security',
        'Avoid currency exchange at tourist hotspots (Rossio Square, Rua Augusta) - rates significantly worse than banks or ATMs',
        'Choose EUR over your home currency when paying by card - your bank offers better exchange rates than Portuguese businesses',
        'Many restaurants and shops accept contactless payments - safer than carrying large amounts of cash as solo female traveler',
        'Withdraw cash at bank-operated ATMs inside branches for maximum security - avoid standalone machines in tourist areas',
        'Budget €40-70 daily for solo female travel including accommodation, meals, and transport with good safety standards',
        'Tipping culture: 10% in restaurants, round up for taxis, €1-2 for helpful hotel staff - always leave cash tips',
        'Major credit cards accepted everywhere but carry some cash for traditional pastéis de nata shops and small family restaurants',
        'Emergency cash backup recommended €100-200 in hidden money belt - Portugal is very safe but preparation essential for solo travelers'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Greet with handshake and eye contact or cheek kisses among friends - Portuguese value warm, respectful personal interactions',
      'Say "Obrigada" (women) or "Obrigado" (men) for thank you - using correct gender form shows cultural awareness',
      'Dress smartly in neat, casual clothing - avoid overly casual beach wear in city areas, Portuguese appreciate good appearance',
      'Tip about 10% in restaurants and leave it on the table - standard practice showing appreciation for service',
      'Learn basic Portuguese phrases - even simple efforts are appreciated and help build rapport with locals'
    ],
    culturalDonts: [
      'Don\'t expect strict punctuality in social settings - Portuguese often arrive 15-30 minutes late and this is normal',
      'Don\'t start eating before everyone is served - wait for the group and always use proper utensils',
      'Don\'t wear revealing clothing in churches or historical sites - cover shoulders and knees out of respect',
      'Don\'t be loud on public transport - maintain quiet, respectful behavior and offer seats to elderly passengers',
      'Don\'t be surprised by relaxed pace of life - embrace Portuguese "slow living" culture rather than rushing'
    ]
  },
  youtubeVideos: [
    {
      videoId: "cOv9pfEYddQ",
      title: "Lisbon Travel Guide"
    },
    {
      videoId: "_0A5BX82jj8",
      title: "Lisbon Travel Scams and Safety Tips"
    }
  ]
};

export default lisbon;