import { Destination } from './types';

const hanoi: Destination = {
    city: 'Hanoi',
    country: 'Vietnam',
    continent: 'Asia',
    countryCode: 'vn',
    overallScore: 7.8,
    nightSafety: 7.3,
    publicTransit: 7.5,
    walkingAlone: 7.6,
    tags: ['cultural', 'historic'],
    bgColor: 'bg-yellow-25',
    reviewCount: 429,
    lastUpdated: '6 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 7.3,
        context: 'Hanoi ranked #16 safest in Vietnam for solo women (4.2/5 safety rating). Most visitors feel comfortable walking alone at night in French Quarter and Old Quarter near Hoan Kiem Lake. Heavy police presence in tourist areas. Violent crime extremely rare with intentional homicide rate only 2 per 100,000 people.'
      },
      publicTransit: {
        score: 7.5,
        context: 'Public buses safe but crowded - watch for pickpockets and bag slashing in tourist areas. Grab ride-hailing much safer than street motorbike taxis with driver verification and GPS tracking. Traffic extremely chaotic - biggest danger is scooter accidents as pedestrian or rider.'
      },
      walkingAlone: {
        score: 7.6,
        context: 'Walking alone very safe for solo female travelers - "catcalling and street harassment almost nonexistent" (Travel Ladies 2025). Crime index only 38.02, safety index 61.98. Main concerns: chaotic motorbike traffic and sidewalks occupied by parked vehicles forcing pedestrians into roads.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Old Quarter (Hoan Kiem)',
          description: 'Historic heart of Hanoi with narrow streets, shops, and restaurants. Very safe with constant activity day and night. Heavy tourist police presence and well-lit streets. Perfect for solo female travelers.'
        },
        {
          name: 'French Quarter',
          description: 'Upscale area with wide boulevards, colonial architecture, and good lighting. Safe and well-maintained with government buildings and embassies. Quieter than Old Quarter but very secure.'
        },
        {
          name: 'Tay Ho (West Lake)',
          description: 'Expat-heavy area with cafes, restaurants, and lakeside walks. Very safe with international community and good infrastructure. Popular with digital nomads and long-term travelers.'
        },
        {
          name: 'Ba Dinh District',
          description: 'Government district with Ho Chi Minh Mausoleum and presidential palace. Very safe with heavy security presence. Wide streets and good lighting, though less nightlife.'
        },
        {
          name: 'Dong Da District',
          description: 'Residential area with temples and local markets. Safe family neighborhood with authentic Vietnamese atmosphere. Good for experiencing local culture safely.'
        }
      ],
      caution: ['Long Bien area at night', 'Gia Lam district after dark', 'Isolated alleyways in Old Quarter'],
      avoid: ['Remote suburban areas alone', 'Construction zones', 'Empty parks after 10 PM']
    },
    accommodations: [
      {
        name: 'Hanoi La Siesta Hotel & Spa',
        type: 'hotel',
        features: ['Central location', 'Female-friendly', '24/7 security'],
        rating: 8.6,
        notes: 'Boutique hotel in Old Quarter with excellent safety record and female-friendly staff. Highly rated by solo travelers.',
        link: 'https://www.hanoilasiesta.com/'
      },
      {
        name: 'Thuy Sakura Hotel',
        type: 'hotel',
        features: ['Safe area', 'Women-friendly', 'Good reviews'],
        rating: 8.4,
        notes: 'Family-run hotel near Hoan Kiem Lake with excellent safety measures and helpful staff for solo female guests.',
        link: 'https://www.thuysakura.com/'
      },
      {
        name: 'Vietnam Backpacker Hostels',
        type: 'hostel',
        features: ['Female dorms', 'Social atmosphere', 'Central'],
        rating: 7.8,
        notes: 'Popular backpacker chain with female dorms, good security, and social environment in Old Quarter.',
        link: 'https://vietnambackpackerhostels.com/'
      },
      {
        name: 'Mai\'s Red Dragon Hostel',
        type: 'hostel',
        features: ['Ladies only rooms', 'Rooftop area', 'Safe location'],
        rating: 8.2,
        notes: 'Boutique hostel with ladies-only rooms, rooftop terrace, and excellent location in Old Quarter.',
        link: 'https://www.maisreddragon.com/'
      },
      {
        name: 'Essence Palace Hotel & Spa',
        type: 'hotel',
        features: ['Premium Old Quarter location', 'Female-friendly service', 'Spa facilities', '24/7 concierge', 'Rooftop restaurant'],
        rating: 9.1,
        notes: 'Luxury boutique hotel in heart of Old Quarter with exceptional safety standards, English-speaking staff trained in solo female traveler assistance, and prime location for safe walking access to attractions.',
        link: 'https://www.essencepalacehotel.com/'
      },
      {
        name: 'Old Quarter View Hanoi Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Free daily beer', '24/7 reception', 'Heart of Old Quarter', 'Social atmosphere'],
        rating: 9.3,
        notes: 'Best-rated hostel in Hanoi for female solo travelers. Perfect for meeting other backpackers with free beer at 18:30 daily. Female-only and mixed dorms available. Walking distance to Hoan Kiem Lake and street food.',
        link: 'https://www.booking.com/hotel/vn/old-quarter-view-hanoi-hostel.html'
      },
      {
        name: 'Bông Hà Nội Hostel',
        type: 'hostel',
        features: ['Female-friendly environment', 'Old Quarter location', 'Budget-friendly', 'Social meetups', 'Safe atmosphere'],
        rating: 9.0,
        notes: 'Fantastic choice for female solo travelers with exceptionally friendly community. Located in Old Quarter heart with dorm beds from $5/night. Known for welcoming atmosphere and helping solo women connect safely.',
        link: 'https://www.hostelworld.com/hostel/Bong-Ha-Noi-Hostel/Hanoi/297849'
      }
    ],
    alerts: [
      {
        title: 'Rising Sexual Assault Reports in Tourist Areas',
        description: 'Reports of groping and sexual assault increasing, especially on crowded transport, at beach clubs, and in bars. Drink spiking incidents documented in tourist-frequented venues.',
        location: 'Tourist bars, crowded buses, popular nightlife areas',
        reportCount: 12,
        severity: 'medium',
        dateReported: '1 week ago'
      },
      {
        title: 'Traffic Safety - Major Accident Risk',
        description: 'Scooter accidents are the most dangerous aspect of Hanoi travel. Multiple injuries reported among tourists unfamiliar with chaotic traffic patterns.',
        location: 'All streets, especially busy intersections',
        reportCount: 23,
        severity: 'high',
        dateReported: '3 days ago'
      },
      {
        title: 'Bag Slashing and Pickpocketing Increase',
        description: 'Significant increase in bag slashing at markets, on crowded transport, and in supermarkets. Motorbike theft also rising in Old Quarter tourist areas.',
        location: 'Dong Xuan Market, public buses, tourist areas',
        reportCount: 18,
        severity: 'medium',
        dateReported: '5 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Safety-first dress code: Cover shoulders and knees always - revealing clothing attracts unwanted attention and makes you stand out as a vulnerable tourist
• Temple requirements: Absolutely no tank tops, shorts, or low-cut clothing in religious sites - bring lightweight scarf for quick shoulder coverage
• Climate-appropriate fabrics: Pack breathable cotton and linen in light colors that don't cling to skin in humid 80-90°F weather
• Strategic layering: Bring cardigan or light jacket for heavily air-conditioned restaurants, buses, and hotels (can drop to 65°F inside)
• Footwear for safety: Sturdy walking shoes with good grip for uneven sidewalks and chaotic motorbike traffic - avoid flip-flops except at accommodation
• Anti-theft clothing: Use crossbody bags worn in front, avoid expensive jewelry or watches that attract motorbike snatchers
• Maxi dresses and long skirts: Perfect for staying cool while meeting cultural modesty expectations - comfortable and respectful
• Sun protection essentials: Wide-brimmed hat and sunglasses for powerful Vietnamese sun, plus lightweight long sleeves for UV protection
• Practical packing: Dark colors hide dirt from pollution and travel, neutral tones help you blend in with local fashion
• Money belt necessity: Hidden money belt worn under clothing to protect cash and documents from pickpockets in crowded markets`,
      firstTimers: `• Transportation safety priority: Download Grab app immediately - safer than street taxis with verified drivers, GPS tracking, and upfront pricing (rides cost $1-4)
• Traffic survival skills: Cross streets slowly and predictably - motorbikes flow around you, never run or stop suddenly, traffic doesn't follow Western rules
• Street food safety protocol: Eat only from busy stalls with high turnover where you see food cooked fresh - avoid raw vegetables and ice unless from reputable places
• Document security: Keep passport copies separate from originals, originals required for hotel check-in, store digital copies in cloud for emergencies
• Emergency Vietnamese vocabulary: Learn "Cứu tôi!" (Help!), "Gọi công an!" (Call police!), "Tôi cảm thấy không an toàn" (I feel unsafe) - essential for solo female safety
• Cash management: Vietnam is cash-based society - withdraw larger amounts from bank ATMs to avoid fees, carry small bills for street vendors
• Scam awareness essentials: Beware donut vendors offering tastes then overcharging, currency swap scams with similar-looking bills, never accept "free" street food
• Motorbike snatcher protection: Hold bags on side away from traffic, grip phones tightly when using outdoors, thieves target distracted pedestrians
• Safe accommodation areas: Stay in Old Quarter or French Quarter for walkability and police presence, avoid remote suburban areas especially at night
• Night safety timing: Hanoi safe until 1-2 AM with active street life, but stick to well-lit main streets, avoid dark alleys and empty areas
• Local women allies: Vietnamese women often approach solo female travelers to help - accept assistance graciously as locals are protective of foreign women
• Health precautions: Drink only bottled water, carry hand sanitizer for street food, pack stomach medication for adjustment period to local cuisine`,
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'Grab Vietnam',
        'Vietnam Railway',
        'Foody Vietnam'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community app with Vietnam safety tips', rating: 4.0 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and GPS sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police notification', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel in Vietnam', rating: 4.1 },
        { name: 'Grab Vietnam', link: 'https://www.grab.com/vn/', description: 'Safest transport in Hanoi with driver verification and GPS tracking', rating: 4.4 },
        { name: 'Vietnam Railway', link: 'https://dsvn.vn/', description: 'Official app for safe train travel booking to Ho Chi Minh City and other destinations', rating: 4.2 },
        { name: 'Foody Vietnam', link: 'https://www.foody.vn/', description: 'Trusted restaurant reviews and food delivery - helps find safe dining for solo travelers', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Cứu tôi!',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Call the police!',
          local: 'Gọi công an!',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'I need a doctor.',
          local: 'Tôi cần bác sĩ.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Bệnh viện gần nhất ở đâu?',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'I am lost.',
          local: 'Tôi bị lạc.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Please leave me alone.',
          local: 'Xin hãy để tôi yên.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'I feel unsafe.',
          local: 'Tôi cảm thấy không an toàn.',
          localLanguage: 'Vietnamese'
        },
        {
          english: 'Can you help me?',
          local: 'Bạn có thể giúp tôi không?',
          localLanguage: 'Vietnamese'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Vietnamese culture values conservative dress - modesty is essential for solo female travel safety in Hanoi, helping you blend in respectfully',
        'Cover shoulders and knees always, especially in temples, government buildings, and local neighborhoods - fundamental cultural requirement',
        'Avoid revealing clothing like short shorts, tank tops, low necklines, or crop tops - attracts unwanted attention and shows cultural insensitivity',
        'Choose lightweight, breathable fabrics in neutral or dark colors (black, gray, navy, brown) that provide full coverage while staying cool',
        'Pack a lightweight scarf or shawl for quick shoulder coverage when entering religious sites - essential for temple visits',
        'Wear closed-toe shoes in rural areas and when visiting families - flip-flops considered too casual for respectful interactions',
        'Business casual appropriate for most urban situations - neat, modest appearance demonstrates respect for Vietnamese professional culture',
        'Remove shoes when entering homes, temples, and some traditional restaurants - check for shoe racks at entrances as mandatory requirement',
        'Light layers work best for Hanoi\'s humid climate while maintaining modesty - long sleeves can be rolled up when appropriate',
        'Avoid clothing with political messages, offensive symbols, or inappropriate imagery that could cause cultural misunderstandings'
      ],
      behaviorNorms: [
        'Bow your head slightly when greeting elders, officials, or people in positions of authority - demonstrates proper respect in hierarchical Vietnamese society',
        'Use both hands when giving or receiving business cards, money, or gifts - single-handed exchanges considered highly disrespectful and rude',
        'Remove shoes when entering homes, temples, and some restaurants - check for shoe racks at entrances as this is mandatory cultural practice',
        'Avoid pointing with your index finger - use your whole hand or nod in the direction instead to show politeness',
        'Never touch anyone\'s head, especially children - the head is considered the most sacred body part in Vietnamese Buddhist culture',
        'Show genuine respect for Ho Chi Minh and Vietnamese history - avoid negative political comments or criticisms of national figures',
        'Bargaining is expected in markets but maintain respectful, non-aggressive approach - smile, be patient, and keep interactions friendly',
        'Tipping not traditional but appreciated in tourist areas - 5-10% sufficient in restaurants serving foreigners, round up for small services',
        'Public displays of affection are discouraged - hold hands discreetly but avoid kissing, hugging, or intimate touching in public spaces',
        'Be patient with service and schedules - Vietnamese culture operates on more flexible time than Western standards, especially outside tourist areas',
        'Learn basic Vietnamese phrases like \"Xin chào\" (hello) and \"Cảm ơn\" (thank you) - locals deeply appreciate foreigners who make language efforts',
        'Accept hospitality graciously when offered food, drink, or assistance - refusing abruptly can be interpreted as rude or dismissive of kindness'
      ],
      perception: [
        'Solo female travelers are generally very safe and welcomed in Hanoi - it\'s consistently ranked as one of the safest places for women to travel alone in Asia',
        'Is Hanoi safe for female solo travelers? Absolutely yes - Vietnamese culture traditionally respects and protects women, extending this protective courtesy to foreign visitors',
        'You may attract curious looks and friendly questions about traveling alone, but this stems from genuine cultural concern rather than judgment or harassment',
        'Vietnamese people are typically helpful and protective toward foreign women - locals often go out of their way to assist solo travelers with directions and recommendations',
        'Some Vietnamese men may be overly helpful or persistent in offering assistance, but harassment is uncommon compared to many other Southeast Asian destinations',
        'Local Vietnamese women frequently approach solo female travelers to offer assistance, practice English, or simply share cultural experiences and local insights',
        'Street harassment is almost nonexistent in Vietnamese culture - catcalling and aggressive behavior toward women is socially unacceptable and frowned upon',
        'Solo dining and independent exploration is completely normal - Vietnamese society doesn\'t stigmatize women who are independent and traveling alone',
        'Trust your instincts completely - if someone makes you uncomfortable, Vietnamese culture actively supports seeking help from nearby people, shops, or businesses',
        'Women traveling alone consistently report feeling safer in Hanoi than in their home cities due to the respectful, protective cultural attitudes toward female independence'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['October-April'],
      events: 'Cooler dry season is most comfortable. Avoid summer heat and heavy rains.'
    },
    emergencyInfo: {
      police: '113', fire: '114', medical: '115', general: '113'
    },
    currency: {
      name: 'Vietnamese Dong', code: 'VND', exchangeRate: {
      usd: 24385,
      eur: 20765,
      gbp: 18012
    }, scamWarnings: [
        'Use official bank ATMs like Vietcombank or BIDV. Avoid currency exchange on the street - rates may be deceptive.'
      ]
    },
    scamWarnings: [
      {
        title: 'Motorbike Taxi Overcharging',
        description: 'Some motorbike taxi drivers may quote inflated prices to tourists. Always negotiate or use Grab for fixed pricing.',
        severity: 'medium'
      },
      {
        title: 'Fake Silk and Goods',
        description: 'Street vendors may sell fake silk, coffee, or handicrafts claiming they\'re authentic. Shop at reputable stores for genuine products.',
        severity: 'low'
      },
      {
        title: 'Restaurant Bill Padding',
        description: 'Some restaurants may add items you didn\'t order to the bill. Check your receipt carefully and ask about unfamiliar charges.',
        severity: 'low'
      },
      {
        title: 'Gem and Jewelry Scams',
        description: 'Avoid buying expensive jewelry or gems from street vendors or unverified shops. Prices are often inflated and quality questionable.',
        severity: 'medium'
      }
    ],
    languages: ['Vietnamese', 'English (limited - mainly in tourist areas)', 'French (some older residents)'],
    daytimeSafetyPercent: 78.6,
    nighttimeSafetyPercent: 65.2,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Hanoi',
    redFlags: [
      {
        label: 'Traffic Safety',
        frequency: 'Most common',
        icon: 'Car',
        details: 'Hanoi\'s chaotic traffic with millions of motorbikes poses the biggest safety risk. Pedestrians are forced into roads due to parked motorbikes on sidewalks. Traffic accidents involving tourists are frequent, especially when riding rented scooters.',
        prevention: 'Use Grab for transportation instead of street motorbike taxis. Look both ways constantly when crossing streets. Never rent a motorbike without proper insurance and experience. Walk defensively and stay alert at all times.'
      },
      {
        label: 'Petty Theft',
        frequency: 'Occasional',
        icon: 'Hand',
        details: 'Bag snatching from motorbikes and pickpocketing occurs in crowded tourist areas like Old Quarter and Dong Xuan Market. Phone snatching while taking photos is common. Thieves target distracted tourists.',
        prevention: 'Use crossbody bags worn in front. Keep phones secure when taking photos. Avoid displaying expensive items. Stay alert in crowded markets and tourist areas. Use hotel safes for valuables.'
      },
      {
        label: 'Tourist Scams',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
        details: 'Common scams include fake currency exchange, overcharging for tours, counterfeit goods, and restaurant bill padding. Motorbike taxi drivers may take longer routes or demand higher fares from foreigners.',
        prevention: 'Use official exchange counters or ATMs. Book tours through reputable companies. Check bills carefully before paying. Use Grab for transparent pricing. Research fair prices beforehand.'
      },
      {
        label: 'Food Safety Issues',
        frequency: 'Frequent',
        icon: 'Utensils',
        details: 'Street food and tap water can cause stomach issues for foreign travelers. Food poisoning from unhygienic preparation or contaminated ingredients is common, especially from street vendors with poor sanitation practices.',
        prevention: 'Drink only bottled or boiled water. Choose busy street food stalls with high turnover. Avoid raw vegetables and unpeeled fruits. Watch food being prepared fresh. Carry stomach medication as precaution.'
      }
    ],
    culturalDos: [
      'Dress modestly in temples and local areas.',
      'Remove shoes when entering homes.',
      'Bow slightly when greeting elders.',
      'Use both hands for business cards.',
      'Respect Vietnamese history and culture.'
    ],
    culturalDonts: [
      "Don't touch people's heads.",
      "Don't point with your index finger.",
      "Don't wear revealing clothing.",
      "Don't ignore traffic when crossing streets.",
      "Don't be impatient with language barriers."
    ],
    womensConfidenceScore: {
      score: 71.4,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Hanoi"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 82, source: 'Vietnam Solo Female Travel 2025', sourceUrl: 'https://www.solofemaltravel.com/vietnam-safety/' },
      { label: 'Street Food', confidence: 68, source: 'Travel Safe Vietnam 2024', sourceUrl: 'https://travelsafe-abroad.com/vietnam/' },
      { label: 'Public Transport', confidence: 74, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Hanoi' },
      { label: 'Nightlife', confidence: 75, source: 'Hanoi Nightlife Safety 2025', sourceUrl: 'https://www.vietnamonline.com/hanoi-nightlife-safety/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Street harassment almost nonexistent for solo female travelers - Vietnamese culture is respectful', 'Reports of groping/sexual assault rising in crowded buses, tourist bars, beach trips affecting women traveling alone safety', 'Drink spiking incidents in tourist-frequented venues - major concern for solo female travel safety', 'Some unwanted attention on motorbike taxi rides'],
      reportingRate: 28, // Low reporting rate due to language barriers and victim-blaming
      legalProtection: 'Vietnam has anti-harassment laws but enforcement varies significantly for solo female travelers. Vietnamese authorities not known for helping sexual assault victims seek justice. Often victim-blaming, especially if alcohol involved. Tourist police more responsive than regular police for women traveling alone safety issues.',
      supportResources: [
        'Tourist Police Hanoi: +84 24 3825 2885',
        'Vietnam Women\'s Union: +84 24 3943 3033',
        'Family Medical Practice Hanoi: +84 24 3843 0748 (24/7, English-speaking)',
        'International SOS Clinic: +84 24 3934 0666 (24/7 emergency)',
        'U.S. Embassy Hanoi Emergency: +84 24 3850 5000',
        'Hanoi French Hospital: +84 24 3574 0740 (24/7)',
        'Emergency Services: 113 (police), 115 (medical) - limited English'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Family Medical Practice Hanoi',
          address: 'Van Phuc Diplomatic Compound, 298 Kim Ma Street, Ba Dinh District',
          phone: '+84 24 3843 0748',
          emergency: true,
          specialties: ['International Standards', 'English-Speaking Doctors', '24/7 Emergency Medicine', 'Women\'s Health'],
          link: 'https://www.vietnammedicalpractice.com/hanoi/'
        },
        {
          name: 'Hanoi French Hospital (Vietnam French Hospital)',
          address: '1 Phuong Mai Road, Dong Da District',
          phone: '+84 24 3574 0740',
          emergency: true,
          specialties: ['24/7 Emergency Care', 'International Standards', 'Obstetrics & Gynecology', 'French-Vietnamese Specialists'],
          link: 'https://www.hfh.com.vn/en/'
        },
        {
          name: 'International SOS Clinic Hanoi',
          address: '31 Hai Ba Trung, Hoan Kiem District',
          phone: '+84 24 3934 0666',
          emergency: true,
          specialties: ['24/7 International Emergency Service', 'Full Medical Treatments', 'Dental Care', 'English-Speaking Staff'],
          link: 'https://www.internationalsos.com/locations/vietnam'
        },
        {
          name: 'Bach Mai Hospital',
          address: '78 Giai Phong Street, Dong Da District', 
          phone: '+84 24 3869 3731',
          emergency: true,
          specialties: ['Major Public Hospital', 'Emergency Care', 'Obstetrics Department', 'Local Standards'],
          link: 'https://www.bachmai.gov.vn/'
        }
      ],
      pharmacies: [
        {
          name: 'Guardian Pharmacy',
          address: 'Multiple locations in Hanoi',
          phone: '+84 24 3934 5678',
          hours: 'Daily 8:00-22:00',
          emergency: false,
          link: 'https://www.guardian.com.vn/'
        },
        {
          name: 'Pharmacity',
          address: 'Various locations citywide',
          phone: '+84 28 7306 6066',
          hours: 'Daily 7:00-23:00',
          emergency: false,
          link: 'https://www.pharmacity.vn/'
        }
      ],
      womensHealth: {
        clinics: [
          'Family Medical Practice Women\'s Health: +84 24 3843 0748 (English-speaking, international standards)',
          'Hanoi Obstetrics Hospital: Leading specialized obstetrics and family planning hospital',
          'Hanoi French Hospital Obstetrics & Gynecology: French-Vietnamese specialists with modern facilities',
          'Bach Mai Hospital Obstetrics Department: Major public hospital with experienced specialists',
          'Vietnam-France Hospital: International standards with French expertise on 4th floor'
        ],
        gynecologists: [
          'Family Medical Practice: International doctors, English-speaking, 24/7 availability',
          'Hanoi French Hospital: Experienced French-Vietnamese gynecologists and midwives', 
          'Bach Mai Hospital: Skilled doctors with extensive experience in obstetrics',
          'International SOS: Full women\'s healthcare with international standards'
        ],
        emergencyContraception: [
          'Available at Guardian Pharmacy and Pharmacity (major chains)',
          'International clinics (Family Medical Practice, International SOS) provide services',
          'Hanoi French Hospital offers reproductive health services', 
          'Most require prescription - international clinics most accessible for tourists'
        ],
        sanitaryProducts: [
          'Widely available at Guardian Pharmacy, Pharmacity locations',
          'International brands in tourist areas (Old Quarter, French Quarter)',
          'Local Vietnamese brands affordable and widely available',
          'Supermarkets and convenience stores stock comprehensive supplies'
        ]
      },
      vaccinations: [
        'Hepatitis A and B recommended',
        'Japanese Encephalitis if traveling to rural areas',
        'Typhoid vaccination recommended',
        'Routine vaccinations should be up to date',
        'Consider malaria prophylaxis for rural/jungle areas'
      ],
      healthRisks: [
        'Dengue fever during rainy season',
        'Food poisoning from street food',
        'Air pollution can affect respiratory conditions',
        'Traffic accident risk due to chaotic roads',
        'Water quality varies - stick to bottled water'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Hanoi',
          address: '7 Lang Ha Street, Dong Da District',
          phone: '+84 24 3850 5000',
          link: 'https://vn.usembassy.gov/'
        },
        {
          name: 'British Embassy Hanoi',
          address: '4 Hai Ba Trung Street, Hoan Kiem District',
          phone: '+84 24 3936 0500',
          link: 'https://www.gov.uk/world/organisations/british-embassy-hanoi'
        },
        {
          name: 'German Embassy Hanoi',
          address: '29 Tran Phu Street, Ba Dinh District',
          phone: '+84 24 3845 3836',
          link: 'https://vietnam.diplo.de/'
        },
        {
          name: 'French Embassy Hanoi',
          address: '57 Tran Hung Dao Street, Hoan Kiem District',
          phone: '+84 24 3944 5700',
          link: 'https://vn.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Hanoi',
          address: 'Lotte Center Hanoi, 54 Lieu Giai Street, Ba Dinh District',
          phone: '+84 24 3718 0220',
          link: 'https://www.exteriores.gob.es/embajadas/hanoi'
        },
        {
          name: 'Australian Embassy Hanoi',
          address: '8 Dao Tan Street, Ba Dinh District',
          phone: '+84 24 3774 0100',
          link: 'https://vietnam.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Hanoi',
          address: '31 Hung Vuong Street, Ba Dinh District',
          phone: '+84 24 3734 5000',
          link: 'https://www.canadainternational.gc.ca/vietnam/'
        },
        {
          name: 'Netherlands Embassy Hanoi',
          address: '36 Ly Thai To Street, Hoan Kiem District',
          phone: '+84 24 3831 5650',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/vietnam'
        },
        {
          name: 'Danish Embassy Hanoi',
          address: '360 Kim Ma Street, Ba Dinh District',
          phone: '+84 24 3831 3000',
          link: 'https://vietnam.um.dk/'
        },
        {
          name: 'Swiss Embassy Hanoi',
          address: '77B Tran Hung Dao Street, Hoan Kiem District',
          phone: '+84 24 3934 6589',
          link: 'https://www.eda.admin.ch/hanoi'
        },
        {
          name: 'Indian Embassy Hanoi',
          address: '58-60 Tran Hung Dao Street, Hoan Kiem District',
          phone: '+84 24 3824 4989',
          link: 'https://www.eoihanoi.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate General Ho Chi Minh City',
        address: '4 Le Duan Boulevard, District 1, Ho Chi Minh City',
        phone: '+84 28 3520 4200',
        email: 'HCMCACSInfoEmail@state.gov',
        link: 'https://vn.usembassy.gov/embassy-consulates/ho-chi-minh-city/'
      },
      womensRights: [
        'Vietnam has progressive gender equality laws',
        'Women have equal rights in employment and education',
        'Domestic violence is criminalized',
        'Sexual harassment laws exist but enforcement varies',
        'Women\'s Union provides support and advocacy'
      ],
      legalSupport: [
        'Vietnam Bar Federation: +84 24 3943 2569',
        'Legal Aid Department: +84 24 3734 5234',
        'Tourist Police: +84 24 3825 2885',
        'Contact embassy for serious legal issues'
      ],
      reportingProcedures: [
        'Call 113 for police emergencies',
        'Report to tourist police for tourist-related crimes',
        'Keep passport available for police reports',
        'Contact embassy for serious incidents',
        'Request interpreter if needed'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Grab',
          safety: 8.4,
          recommendations: ['Use official app', 'Share ride details', 'Verify driver and vehicle'],
          companies: ['Grab'],
          link: 'https://www.grab.com/vn/en/'
        },
        {
          type: 'Mai Linh Taxi',
          safety: 7.8,
          recommendations: ['Official taxi company', 'Insist on meter use', 'Keep receipt'],
          companies: ['Mai Linh Group'],
          link: 'https://mailinh.vn/'
        },
        {
          type: 'Public Bus',
          safety: 7.2,
          recommendations: ['Watch for pickpockets', 'Avoid rush hour', 'Keep belongings secure'],
          companies: ['TRANSERCO'],
          link: 'http://www.transerco.com.vn/'
        },
        {
          type: 'Cyclo (for short distances)',
          safety: 6.5,
          recommendations: ['Agree on price first', 'Use in tourist areas only', 'Daylight only'],
          companies: ['Independent operators'],
          link: 'Arrange through hotels'
        }
      ],
      nightTravel: {
        safety: 7.0,
        warnings: [
          'Avoid walking alone in poorly lit areas',
          'Use Grab instead of walking at night',
          'Be cautious of motorbike traffic',
          'Stay in well-traveled areas'
        ],
        alternatives: [
          'Grab available 24/7 in central areas',
          'Mai Linh taxis operate all night',
          'Hotel pickup services often available',
          'Stay near Old Quarter for walkable nightlife'
        ]
      },
      verifiedProviders: [
        {
          name: 'Grab Vietnam',
          type: 'Ride-hailing',
          contact: 'App-based booking',
          safety: 8.4
        },
        {
          name: 'Mai Linh Taxi',
          type: 'Traditional Taxi',
          contact: '+84 24 3833 3333',
          safety: 7.8
        },
        {
          name: 'Hanoi Public Bus',
          type: 'Public Transport',
          contact: '+84 24 3821 4539',
          safety: 7.2
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk or key code access',
        'Electronic locks on rooms',
        'CCTV in common areas',
        'Secure luggage storage',
        'Well-lit entrances and corridors',
        'Emergency contact information provided'
      ],
      safeNeighborhoods: [
        'Old Quarter (Hoan Kiem)',
        'French Quarter',
        'Tay Ho (West Lake)',
        'Ba Dinh District',
        'Dong Da District'
      ],
      womensOnly: [
        {
          name: 'Mai\'s Red Dragon Hostel',
          type: 'Hostel',
          features: ['Ladies-only rooms', 'Central location', 'Safe environment'],
          rating: 4.1
        },
        {
          name: 'Vietnam Backpacker Hostels',
          type: 'Hostel',
          features: ['Female dorms available', 'Social atmosphere', 'Security measures'],
          rating: 3.9
        }
      ],
      userReviews: [
        {
          rating: 4.3,
          safety: 8.2,
          comments: 'Felt very safe in Old Quarter. Hotel staff was helpful and area was busy even at night.',
          date: '2025-01-19'
        },
        {
          rating: 4.1,
          safety: 7.8,
          comments: 'Good security measures and central location. Would recommend for solo female travelers.',
          date: '2025-01-16'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel and cafe WiFi generally reliable in central areas',
        'Avoid public WiFi for sensitive transactions',
        'Use VPN as some websites are blocked',
        'Internet cafes available but security varies',
        'Mobile data plans widely available and affordable'
      ],
      digitalScams: [
        'Fake booking websites for hotels and tours',
        'Social media scams targeting tourists',
        'Phishing emails about visa requirements',
        'Romance scams on dating platforms',
        'Fake charity websites and appeals'
      ],
      vpnRecommendations: [
        'ExpressVPN - works well in Vietnam',
        'NordVPN - reliable for blocked content',
        'ProtonVPN - good privacy protection',
        'VPN essential for accessing some websites'
      ],
      dataProtection: [
        'Vietnam has developing data protection laws',
        'Be cautious sharing personal information',
        'Use secure payment methods when possible',
        'Keep digital copies of important documents',
        'Some websites and social platforms may be restricted'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Motorbike Theft',
          location: 'Old Quarter',
          date: '2025-01-21',
          description: 'Increase in motorbike and bicycle theft in tourist areas',
          severity: 'medium'
        },
        {
          type: 'Overcharging Scam',
          location: 'Dong Xuan Market',
          date: '2025-01-18',
          description: 'Vendors overcharging tourists for souvenirs and food',
          severity: 'low'
        },
        {
          type: 'Food Poisoning',
          location: 'Street food vendors',
          date: '2025-01-15',
          description: 'Several tourists reported food poisoning from street food',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Always look both ways multiple times before crossing streets - traffic doesn\'t stop',
          author: 'Experienced Traveler',
          date: '2025-01-20',
          upvotes: 67
        },
        {
          tip: 'Eat street food from busy stalls with high turnover for freshness',
          author: 'Food Blogger',
          date: '2025-01-18',
          upvotes: 54
        },
        {
          tip: 'Download Google Translate with Vietnamese offline package',
          author: 'Solo Female Traveler',
          date: '2025-01-16',
          upvotes: 43
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise normal precautions in Vietnam. Be aware of petty crime and traffic safety in urban areas.',
      reason: 'Standard precautions due to traffic safety and occasional petty crime.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/vietnam-travel-advisory.html',
      soloTravelerAdvice: [
        'Generally one of the safest countries for solo female travel with proper solo travel safety precautions',
        'Stay in central areas like Old Quarter or French Quarter - trusted solo female travel safety tips',
        'Use Grab for transportation instead of motorbike taxis - essential solo female travel advice',
        'Be extremely careful when crossing streets - key solo travel safety for women beginners', 
        'Learn basic Vietnamese phrases for better interactions - solo female travel essentials'
      ]
    },
    crimeStatistics: {
      violentCrime: 9.2, // per 100,000 - very low, intentional homicide only 2 per 100,000
      propertyCrime: 1867, // per 100,000 - bag slashing and pickpocketing increasing in tourist areas  
      sexualAssault: 7.1, // per 100,000 - reports rising but street harassment almost nonexistent
      kidnapping: 0.2, // per 100,000 - virtually non-existent for tourists
      crimeIndex: 38.02, // Low crime category
      safetyIndex: 61.98, // Numbeo 2025
      source: 'Vietnam Ministry of Public Security & Travel Ladies Safety Index 2025',
      year: 2025,
      context: 'Hanoi ranked #16 safest destination for solo female travelers in Vietnam. Main dangers: traffic accidents, petty theft. Violent crime extremely rare - making it one of the safest places for women to travel alone in Asia.'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Money belt for valuables',
        'Portable phone charger',
        'Air pollution mask',
        'Basic first aid kit',
        'Emergency contact card'
      ],
      safetyApps: [
        {
          name: 'Grab',
          purpose: 'Safe ride-hailing and food delivery',
          rating: 4.6
        },
        {
          name: 'Google Translate',
          purpose: 'Essential for communication',
          rating: 4.5
        },
        {
          name: 'Foody',
          purpose: 'Restaurant reviews and safety ratings',
          rating: 4.2
        }
      ],
      emergencyContacts: [
        {
          name: 'Police Emergency',
          number: '113',
          type: 'Police'
        },
        {
          name: 'Medical Emergency',
          number: '115',
          type: 'Medical'
        },
        {
          name: 'Tourist Police',
          number: '+84 24 3825 2885',
          type: 'Tourist Support'
        },
        {
          name: 'Family Medical Practice',
          number: '+84 24 3843 0748',
          type: 'International Medical'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Traffic Safety - Your #1 Solo Female Travel Risk in Hanoi',
        description: 'Scooter accidents are the most dangerous aspect for solo female travelers in Hanoi. Walk slowly and predictably across streets - motorbikes flow around you. Never run or stop suddenly. For women traveling alone, the biggest danger is traffic, not crime.',
        severity: 'high',
        sourceName: 'Vietnam Safety Statistics 2025',
        sourceUrl: 'https://travelsafe-abroad.com/vietnam/'
      },
      {
        title: 'Solo Female Travel Safety: Protect Against Rising Sexual Assault and Drink Spiking',
        description: 'Reports of groping and sexual assault increasing on crowded transport and in tourist bars, affecting women traveling alone safety. Drink spiking documented in tourist venues. Essential solo female travel safety precautions: Never leave drinks unattended, travel with trusted people at night, use reputable transport.',
        severity: 'high',
        sourceName: 'Vietnam Travel Safety Warnings 2025',
        sourceUrl: 'https://primetravelvietnam.com/sexual-assault-in-vietnam-safety-tips/'
      },
      {
        title: 'Defend Against Bag Slashing and Pickpocketing',
        description: 'Significant increase in bag slashing at markets, crowded buses, and supermarkets. Use anti-theft crossbody bag, keep valuables in front pockets, be extra vigilant in Dong Xuan Market and on public transport.',
        severity: 'medium',
        sourceName: 'Hanoi Crime Reports 2025',
        sourceUrl: 'https://travelladies.app/safety/vietnam/hanoi'
      },
      {
        title: 'Use Only Grab or International Taxis for Safety',
        description: 'Grab provides driver verification, GPS tracking, and fixed pricing. Much safer than street motorbike taxis or unmarked vehicles. Essential safety tool for solo female travelers - costs only $1-4 per ride.',
        severity: 'medium', 
        sourceName: 'Solo Female Travel Vietnam Guide 2025',
        sourceUrl: 'https://www.theladywhotravels.com/is-vietnam-safe-for-solo-female-travelers/'
      },
      {
        title: 'Choose Street Food Strategically to Avoid Food Poisoning',
        description: 'Multiple tourists reported food poisoning recently. Eat at busy stalls with high turnover, avoid raw vegetables and ice unless from reputable places. Stick to hot, freshly cooked food from vendors with long local queues.',
        severity: 'medium',
        sourceName: 'Hanoi Food Safety Reports 2025',
        sourceUrl: 'https://www.travelhealthpro.org.uk/countries/vietnam'
      },
      {
        title: 'Access World-Class International Healthcare Services',
        description: 'Family Medical Practice and Hanoi French Hospital offer 24/7 English-speaking emergency care with international standards. Essential for solo travelers. Medical care at public hospitals falls below Western standards.',
        severity: 'low',
        sourceName: 'Vietnam Healthcare Guide 2025',
        sourceUrl: 'https://www.vietnammedicalpractice.com/hanoi/'
      },
      {
        title: 'Navigate Language Barriers for Emergency Situations',
        description: 'Emergency operators speak limited English. Download Google Translate with Vietnamese offline package. Ask hotel staff to help with emergency calls. Save key phrases like "Cứu tôi!" (Help!) and "Tôi cần bác sĩ" (I need doctor).',
        severity: 'medium',
        sourceName: 'Vietnam Emergency Services Guide 2025',
        sourceUrl: 'https://vietravelasia.com/en/blog/emergency-contacts-for-travelers-in-vietnam-20230718'
      },
      {
        title: 'Dress Modestly to Respect Culture and Reduce Attention',
        description: 'Vietnamese culture is conservative. Cover shoulders and knees, especially in temples and government areas. Modest dress reduces unwanted attention and shows cultural respect. Vietnamese women dress conservatively.',
        severity: 'low',
        sourceName: 'Vietnam Cultural Guidelines 2025',
        sourceUrl: 'https://www.vietnameseprivatetours.com/is-vietnam-safe-for-solo-female-travelers'
      },
      {
        title: 'Solo Female Travel Advice: Stay in Central Areas for Maximum Safety',
        description: 'Old Quarter and French Quarter have heavy police presence, constant foot traffic, and are among the safest places for women to travel alone. Avoid remote suburban areas. Central locations offer walkability and emergency services access - crucial for solo female travel safety.',
        severity: 'low',
        sourceName: 'Hanoi Accommodation Safety Guide 2025',
        sourceUrl: 'https://www.apieceoftravel.com/is-hanoi-safe/'
      },
      {
        title: 'Budget Extra for Safety - Grab vs Street Transport',
        description: 'Vietnam offers incredible value ($25-50/day total budget) but invest extra in Grab rides ($1-4) vs risky street motorbikes ($0.50-2). Small cost difference, massive safety improvement for solo women.',
        severity: 'low',
        sourceName: 'Budget Travel Safety Vietnam 2025',
        sourceUrl: 'https://www.nomadicmatt.com/travel-guides/vietnam-travel-tips/hanoi/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$25 - $50 USD / day',
        description: 'Updated 2025 costs: Budget travelers $25-35/day with hostels ($6-15/night) and street food. Mid-range $35-50/day with private rooms ($20-60/night). International dining $12-35/meal.',
        tip: 'Vietnam offers excellent value. Budget extra for Grab vs street motorbikes for safety. Airport taxi $14-16, local rides $1-4.'
      },
      accommodation: [
        {
          type: 'Hostels with Female Dorms',
          avgCost: '$6-15/night',
          safetyNote: 'Budget option with security in central areas like Old Quarter',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotels/Private Rooms',
          avgCost: '$20-60/night',
          safetyNote: 'Good value in safe central areas with 24/7 reception',
          safetyLevel: 'high'
        },
        {
          type: 'International Hotels',
          avgCost: '$60-120/night',
          safetyNote: 'Highest security with English-speaking staff and international standards',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Grab Car/GrabBike',
          cost: '$1-4 per ride (25,000-100,000 VND)',
          safetyDescription: 'Safest option with driver verification, GPS tracking, and upfront pricing. Choose GrabCar over GrabBike for maximum safety',
          safetyLevel: 'high'
        },
        {
          method: 'Hanoi Metro (Lines 2A & 3)',
          cost: '$0.30-0.65 per ride (7,000-15,000 VND)',
          safetyDescription: 'Modern, air-conditioned metro system with CCTV monitoring. Metro Card offers unlimited 72-hour rides for 150,000 VND',
          safetyLevel: 'high'
        },
        {
          method: 'City Bus Network',
          cost: '$0.30-0.65 per ride (7,000-15,000 VND)',
          safetyDescription: 'Extensive network with HanoiBus app for real-time tracking. AC buses available on select routes, watch for pickpockets during rush hour',
          safetyLevel: 'medium'
        },
        {
          method: 'Be/Other Ride-Hailing Apps',
          cost: '$1-3 per ride (competitive with Grab)',
          safetyDescription: 'Local alternative to Grab with similar safety features and often better rates',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis (Mai Linh, Taxi Group)',
          cost: '$0.40-0.48 per km (10,000-12,000 VND)',
          safetyDescription: 'Official taxis with meters, about 20,000 licensed vehicles. Always insist on meter usage',
          safetyLevel: 'medium'
        },
        {
          method: 'Traditional Xe ôm (Motorbike Taxi)',
          cost: '$0.65-0.85 per km (15,000-20,000 VND)',
          safetyDescription: 'Convenient but higher risk due to chaotic traffic. Agree on price beforehand, wear provided helmet',
          safetyLevel: 'low'
        },
        {
          method: 'Walking in Old Quarter',
          cost: 'Free',
          safetyDescription: 'Generally safe for short distances, but extremely dangerous traffic. Walk slowly and predictably when crossing streets',
          safetyLevel: 'medium'
        },
        {
          method: 'Airport Transfer (Bus 86)',
          cost: '$1.40 from airport to city center',
          safetyDescription: 'Budget option to city center, takes 45-60 minutes depending on traffic',
          safetyLevel: 'medium'
        }
      ],
      currencyExchangeTips: [
        'Vietnam uses Vietnamese Dong (VND) with approximately 25,800 VND to $1 USD in 2025 - smart currency practices enhance solo female travel safety',
        'Avoid airport currency exchange - rates are unfavorable with high fees. Change only small amounts for taxi fare to city center',
        'Gold and jewelry stores (red/gold colored shops) on main streets offer best exchange rates with no fees - safer than unofficial vendors',
        'ATMs are widespread but charge high fees - withdraw larger amounts at once to minimize charges, use bank ATMs over private ones',
        'Inform your bank of travel plans to avoid card blocking - essential since many transactions require cards in tourist areas',
        'Carry mix of small and large bills - street vendors prefer cash, larger hotels and restaurants accept cards',
        'Use official banks (Vietcombank, BIDV, Techcombank) for safest currency exchange with proper receipts and security',
        'Never exchange money with unofficial street vendors or individuals approaching you - dangerous for solo female travelers, may involve counterfeit currency',
        'Keep emergency cash hidden separately from daily spending money in money belt - essential safety precaution for solo women',
        'Download currency conversion apps offline (XE Currency, Currency Converter Plus) - helpful when WiFi unavailable in rural areas',
        'Credit cards widely accepted in hotels and upscale restaurants but cash needed for street food, local transport, and small vendors',
        'Count change carefully - currency swap scams common where vendors switch large bills for smaller ones during transactions'
      ],
      budgetTips: [
        'Use Grab ($1-4/ride) instead of street motorbike taxis for safety',
        'Stay in Old Quarter ($6-15 hostels) for walkability and police presence',
        'Street food delicious and cheap ($1-3/meal) - choose busy stalls with high turnover',
        'Airport bus #86 only $1.40 vs taxi $14-16 - but taxi safer at night',
        'Bargain at markets - prices negotiable, especially Dong Xuan Market',
        'Budget $10-15/day for food, can eat well on local specialties',
        'ATMs widespread but carry cash for rural areas and street vendors',
        'Budget extra for international medical insurance and Grab transport for safety'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Use both hands when giving or receiving items including money - shows deep respect in Vietnamese culture',
      'Remove shoes before entering homes and temples - fundamental sign of respect for sacred and private spaces',
      'Dress modestly covering shoulders and knees especially in religious sites - modesty is key in Vietnamese culture',
      'Learn basic greetings like "Xin chào" (hello) and "Cảm ơn" (thank you) - locals appreciate language effort greatly',
      'Bow your head respectfully when entering temples and before Buddha statues - shows proper religious reverence'
    ],
    culturalDonts: [
      'Don\'t touch anyone\'s head or shoulders - extremely offensive even with children as head is most sacred body part',
      'Don\'t point feet toward people or sacred objects - feet are considered unclean in Vietnamese Buddhist culture',
      'Don\'t pass items over someone\'s head - this is incredibly disrespectful and offensive behavior',
      'Don\'t crumple or mishandle Vietnamese dong currency - money should be treated with respect using both hands',
      'Don\'t interrupt religious ceremonies or speak loudly in temples - maintain quiet reverence during spiritual practices'
    ]
  },
  culturalSensitivityTips: [
    'Safety first: Dress modestly covering shoulders and knees - Vietnamese culture values modesty, revealing clothing attracts unwanted attention and makes you stand out as a vulnerable tourist',
    'Master emergency communication: Learn "Cứu tôi!" (Help!), "Gọi công an!" (Call police!), "Tôi cảm thấy không an toàn" (I feel unsafe) - essential phrases for solo female travel safety',
    'Transportation safety: Use Grab app exclusively instead of street taxis or motorbike taxis - verified drivers, GPS tracking, and upfront pricing protect solo women from scams and unsafe situations',
    'Cultural blending for safety: Remove shoes in temples, bow head respectfully, use both hands for exchanges - proper etiquette helps you blend in and gain local protection as a respectful female visitor',
    'Trust local women: Vietnamese women frequently approach solo female travelers to help - accept assistance graciously as locals are naturally protective of foreign women, but trust your instincts',
    'Avoid common cultural mistakes: Never touch heads, point feet at Buddha statues, or show public affection - these offenses can cause serious cultural incidents and unwanted confrontations',
    'Scam awareness: Beware currency swap scams (20,000 vs 200,000 dong bills) and donut vendor scams on Hanoi streets - count change carefully and only accept what you specifically request',
    'Night safety protocol: While Hanoi is safe until 1-2 AM with active street life, avoid dark alleys and poorly lit areas - stick to well-populated streets in Old Quarter and French Quarter'
  ],
  culturalSensitivityTipsDetailed: {
    title: 'Cultural Sensitivity & Safety Guide for Solo Female Travelers in Hanoi',
    introduction: 'Is Hanoi safe for women solo travelers culturally? Yes - Hanoi ranks #16 safest for solo female travelers with a 4.2/5 safety rating. Vietnamese culture deeply respects women, but understanding local customs is crucial for safety. Recent 2025 reports show instances of sexual assault, harassment, and violence against female foreigners in urban centers, making cultural awareness essential for protection.',
    sections: [
      {
        title: 'Sexual Harassment & Personal Safety Protection',
        tips: [
          'Street harassment is relatively low in Hanoi compared to other cities - Vietnamese culture values respect, making catcalling and aggressive behavior socially unacceptable',
          'However, documented cases exist: sexual assault, harassment, and violence against women have been reported in Vietnam, including rape and gang rape in urban centers and tourist destinations',
          'Women may face sexual harassment in various settings including beach trips, bar clubs, taxis, and public transportation - stay vigilant in these environments',
          'Trust local women - Vietnamese women frequently approach solo female travelers to offer assistance, practice English, or share cultural experiences',
          'If someone makes you uncomfortable, Vietnamese culture actively supports seeking help from nearby people, shops, or businesses - don\'t hesitate to ask for assistance',
          'Avoid walking alone late at night, especially in poorly lit or deserted areas - while Hanoi is generally safe, incidents have been documented',
          'Use Grab ride-hailing app instead of street taxis, especially at night - it\'s safer with driver verification and GPS tracking',
          'Keep your belongings in sight at all times and avoid displaying expensive jewelry or electronics that attract unwanted attention',
          'If experiencing harassment, firmly say "Xin hãy để tôi yên" (Please leave me alone) and move to a populated area immediately'
        ]
      },
      {
        title: 'Religious and Sacred Sites Safety & Etiquette',
        tips: [
          'Remove shoes before entering temples, pagodas, and some traditional restaurants - mandatory cultural requirement that shows respect',
          'Dress conservatively with covered shoulders and knees in all religious sites - revealing clothing like tank tops and shorts are inappropriate and may attract unwanted attention',
          'Choose modest colors like gray, black, cream, navy, or soft pastels when visiting temples - avoid bright, flashy colors that draw attention',
          'Never sit with your feet pointing toward Buddha statues or religious altars - this is considered very impolite and offensive behavior',
          'Never touch offerings on altars in temples and houses as they are meant for the deceased - touching them is deeply disrespectful',
          'Maintain quiet, respectful behavior in temples - speak softly or stay silent, avoid intrusive photography without permission',
          'Make monetary donations using both hands as a sign of respect - single-handed giving is considered rude',
          'Avoid touching religious statues, artifacts, or monks unless specifically invited - unauthorized touching is offensive',
          'Walk slowly and observe what locals are doing - follow their lead to avoid cultural mistakes',
          'Ask permission before taking photos in sacred spaces - many areas prohibit photography entirely'
        ]
      },
      {
        title: 'Social Interactions & Communication Safety',
        tips: [
          'Use both hands when giving or receiving business cards, money, or gifts - single-handed exchanges are considered highly disrespectful',
          'Bow your head slightly when greeting elders, officials, or people in authority - demonstrates proper respect in hierarchical Vietnamese society',
          'Never touch anyone\'s head, especially children - the head is considered the most sacred body part in Vietnamese Buddhist culture',
          'Learn essential safety phrases: "Cứu tôi!" (Help!), "Gọi công an!" (Call police!), "Tôi cảm thấy không an toàn" (I feel unsafe)',
          'Vietnamese people may laugh when you approach - this is their cultural way of life, not mockery, as expressing anger openly is inappropriate',
          'Accept hospitality graciously when offered food or drink - refusing abruptly can be interpreted as rude, but trust your instincts about safety',
          'Avoid pointing with your index finger - use your whole hand or nod in the direction to show politeness',
          'Be patient with language barriers - Vietnamese people deeply appreciate foreigners who attempt to communicate in Vietnamese',
          'Understand that "yes" doesn\'t always mean agreement - Vietnamese often say yes to avoid confrontation, so clarify important matters',
          'Express emotions calmly - showing anger or frustration openly is considered "losing face" and being very rude in Vietnamese culture'
        ]
      },
      {
        title: 'Scam Prevention & Street Safety',
        tips: [
          'Currency swap scam: Vietnam has similar-looking bills - blue 20,000 dong can be mistaken for 200,000 dong. Always count change carefully and be aware vendors may swap larger bills for smaller ones',
          'Donut scam on Hanoi streets: Ladies selling donuts offer free tastes, load bags full, then charge exorbitant amounts for inedible donuts fried in cheap oil. Only accept what you specifically request',
          'Familiarize yourself with typical tourist scams initiated through casual conversation - remain alert and don\'t trust overly friendly strangers immediately',
          'Always negotiate prices upfront for taxis, street food, and market items - avoid inflated tourist pricing',
          'Be extra cautious in crowded markets, tourist areas, and transport hubs where pickpocketing occurs - keep valuables secure',
          'Avoid vendors who are overly persistent or aggressive - politely but firmly decline and walk away',
          'Never exchange money with street vendors or unofficial sources - use official banks or gold jewelry stores for better rates',
          'Trust your instincts - if a situation feels wrong, remove yourself immediately regardless of cultural politeness',
          'Keep emergency cash hidden separately from daily spending money for safety situations'
        ]
      },
      {
        title: 'Dress Code for Safety & Cultural Respect',
        tips: [
          'Prioritize modesty over fashion - Vietnamese women dress conservatively, and revealing clothing attracts unwanted attention from men',
          'Cover shoulders and knees always, especially in temples, government buildings, and local neighborhoods - fundamental safety and cultural requirement',
          'Avoid low necklines, short skirts, crop tops, or tight-fitting clothes that may be misinterpreted or draw harassment',
          'Pack lightweight, breathable fabrics in neutral colors (black, gray, navy, brown) that provide full coverage while staying cool',
          'Carry a lightweight scarf or shawl for quick shoulder coverage - essential for temple visits and conservative areas',
          'Wear closed-toe shoes in rural areas and when visiting families - flip-flops are too casual and show disrespect',
          'Choose practical walking shoes with good grip - Hanoi\'s uneven sidewalks and motorbike traffic require stable footwear',
          'Avoid clothing with political messages, offensive symbols, or inappropriate imagery that could cause misunderstandings or unwanted attention',
          'Dress for the weather but maintain modesty - light layers work best for Hanoi\'s humid climate',
          'Remove hats and sunglasses when entering restaurants, homes, or meeting people as a sign of respect'
        ]
      },
      {
        title: 'Public Behavior & Social Safety',
        tips: [
          'Public displays of affection are strongly discouraged - hold hands discreetly but avoid kissing, hugging, or intimate touching in public spaces',
          'Keep conversations quiet in public transport and restaurants - loud talking is considered rude and draws unwanted attention',
          'Never express anger or frustration publicly - resolve issues calmly and privately as emotional outbursts are seen as very disrespectful',
          'Be punctual for appointments and social meetings - lateness is considered disrespectful and may damage relationships',
          'Queue politely and respect personal space - Vietnamese culture values orderly, courteous behavior',
          'Don\'t refuse hospitality abruptly, but trust safety instincts - decline politely with genuine appreciation if uncomfortable',
          'Avoid controversial topics like politics, Vietnam War, or criticizing Ho Chi Minh - these can cause serious offense or unwanted attention',
          'Learn basic Vietnamese phrases beyond greetings - "Cảm ơn" (thank you), "Xin lỗi" (sorry), "Không, cảm ơn" (No, thank you)',
          'Observe local women\'s behavior and follow their lead in social situations - they can provide the best cultural guidance',
          'Maintain dignity and composure even in stressful situations - shouting or aggressive behavior will not help and may escalate problems'
        ]
      },
      {
        title: 'Temple & Sacred Space Detailed Safety Protocol',
        tips: [
          'Never sit with feet pointing toward Buddha - this is extremely offensive and locals will be genuinely upset',
          'Remove shoes, hats, and sunglasses before entering - check for shoe racks and follow local example',
          'Wear long pants or skirts that cover knees completely - shorts are absolutely forbidden in temples regardless of length',
          'Cover shoulders with sleeves or shawl - sleeveless tops are never acceptable in sacred spaces',
          'Move slowly and quietly - sudden movements or loud noises disrupt others\' prayers and meditation',
          'Don\'t touch, climb on, or lean against statues, altars, or religious artifacts - this is sacrilegious',
          'Photography rules vary - always ask permission first, many temples prohibit photos entirely',
          'Don\'t turn your back to Buddha statues when leaving - walk backwards respectfully or bow before turning',
          'Avoid visiting during prayer times or ceremonies unless specifically invited - respect religious activities',
          'Make donations respectfully using both hands - even small amounts are appreciated when given properly',
          'If unsure about protocol, observe locals first or ask temple staff - they appreciate respectful curiosity',
          'Don\'t use temples as tourist photo backgrounds - treat them as active religious spaces, not tourist attractions'
        ]
      }
    ],
    safetyNote: 'These cultural sensitivity guidelines are based on 2025 safety reports and real traveler experiences. Following them enhances solo female travel safety by helping you blend in respectfully while avoiding situations that could attract unwanted attention or put you at risk. Remember: sexual harassment, assault, and safety should always be your top priority - when in doubt, prioritize your safety over cultural politeness.'
  },
  youtubeVideos: [
    {
      videoId: "iXm3hzNiJWg",
      title: "Hanoi Travel Guide - What It's Like to Visit"
    },
    {
      videoId: "1h4NA96vjOE",
      title: "Hanoi Travel Experience"
    },
  ]
};

export default hanoi;