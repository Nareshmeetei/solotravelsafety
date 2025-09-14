import { Destination } from './types';

const florence: Destination = {
    city: 'Florence',
    country: 'Italy',
    continent: 'Europe',
    countryCode: 'it',
    overallScore: 8.4,
    nightSafety: 8.0,
    publicTransit: 8.2,
    walkingAlone: 8.6,
    tags: ['insider-tips', 'extremely-safe'],
    bgColor: 'bg-green-25',
    reviewCount: 623,
    lastUpdated: '3 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: {
        score: 8.0,
        context: 'Is Florence safe for women solo travelers at night? Yes - Florence ranks among Italy\'s safest destinations for solo female travel at night. Women consistently report feeling secure walking alone around Duomo, Ponte Vecchio with 8.0/10 safety rating. Historic center provides excellent solo female travel safety with good lighting and police presence. Solo travel safety tips: avoid Santa Maria Novella station area and Cascine Park after dark.'
      },
      publicTransit: {
        score: 8.2,
        context: 'Florence public transport safety for solo female travelers is good with efficient ATAF buses and trams. Women traveling alone report generally positive experiences, though pickpocket risk remains "very high level" in crowded vehicles. Key solo travel safety tips for women: be mindful of groping on public transport. Contactless payment €1.50, historic center walkable for solo female travel safety.'
      },
      walkingAlone: {
        score: 8.6,
        context: 'Is Florence safe for female solo travelers walking alone? Absolutely - 8.6/10 rating makes it one of the safest places for women to travel alone. Solo female travelers consistently report "I felt completely safe walking around." Compact 15-minute walkable center ideal for women solo travel safety. Respectful Italian culture, no reports of sexual assault against female tourists. Florence provides exceptional solo female travel safety conditions.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Historic Center (Centro Storico)',
          description: 'UNESCO World Heritage area with major attractions like Duomo, Uffizi, and Ponte Vecchio. Very safe with heavy foot traffic, good lighting, and regular police patrols. Perfect for solo female travelers seeking secure accommodation and sightseeing.'
        },
        {
          name: 'Santo Spirito',
          description: 'Charming Oltrarno neighborhood with artisan workshops, local restaurants, and beautiful Santo Spirito church. Safe and authentic area for women traveling alone, popular with locals and discerning solo female travelers.'
        },
        {
          name: 'San Lorenzo',
          description: 'Area around Central Market and Medici Chapels. Generally safe during day but can be busy with market activity. Good restaurants and local atmosphere.'
        },
        {
          name: 'Santa Croce',
          description: 'Historic area around Santa Croce Basilica with leather shops and restaurants. Safe with good foot traffic, though watch for pickpockets in crowded market areas.'
        },
        {
          name: 'Piazza della Signoria Area',
          description: 'Heart of Renaissance Florence with Palazzo Vecchio and Uffizi Gallery. Very safe for solo female travel with constant tourist presence and security. Well-lit and patrolled - ideal for women traveling alone.'
        }
      ],
      caution: ['Santa Maria Novella train station area late at night', 'Parts of Oltrarno after midnight', 'Crowded tourist areas for pickpockets'],
      avoid: ['Industrial areas outside historic center', 'Isolated riverside areas at night']
    },
    accommodations: [
      {
        name: 'Hotel Davanzati',
        type: 'hotel',
        features: ['Historic center location', 'Boutique charm', '24/7 security', 'Female-friendly', '1400s palazzo'],
        rating: 9.0,
        notes: 'Elegant historic boutique hotel in authentic 1400s palazzo. Exceptional cleanliness, quiet double-glazed windows, and perfect location for solo female travelers. Steps from major attractions with exemplary customer service.',
        link: 'https://www.hoteldavanzati.it/'
      },
      {
        name: 'FH55 Hotel Calzaiuoli',
        type: 'hotel',
        features: ['Prime Duomo location', '24/7 concierge', 'Duomo views', 'Premium security', 'Express check-in'],
        rating: 9.2,
        notes: 'Luxury boutique hotel directly between Duomo and Palazzo Vecchio. Stunning rooms with Duomo views, exceptional safety standards, and 24-hour front desk. Perfect for solo women travelers seeking premium security and location.',
        link: 'https://www.fh55hotels.com/hotel-calzaiuoli-florence/'
      },
      {
        name: 'Hotel Berchielli',
        type: 'hotel',
        features: ['Arno River views', 'Central location', 'Ponte Vecchio proximity', 'Garden breakfast', 'Spacious rooms'],
        rating: 8.8,
        notes: 'Elegant hotel with beautiful Arno and Ponte Vecchio views. Large comfortable rooms, helpful staff, and tranquil garden for breakfast. Walking distance to Uffizi Gallery - superb for solo female travelers.',
        link: 'https://www.hotelberchielli.it/'
      },
      {
        name: 'Palazzo Vecchietti Suites',
        type: 'hotel',
        features: ['Historic 1578 palazzo', 'Antique furnishings', 'Central location', 'Luxury suites', 'Health safety protocols'],
        rating: 9.1,
        notes: 'Luxurious 12-room boutique hotel in former Vecchietti family residence. Exceptional service, comprehensive safety protocols, and prime historic center location. Perfect for discerning solo female travelers.',
        link: 'https://www.palazzovecchietti.com/'
      },
      {
        name: 'Plus Florence (Academy Hostel)',
        type: 'hostel',
        features: ['Female-only dorms', 'Vanity mirrors', 'Welcome cosmetic packs', 'Large bathrooms', 'Security keycards'],
        rating: 8.7,
        notes: 'Premium hostel designed for female solo travelers. Women-only dorms with comfort amenities, 10-minute walk from train station. Ages 18-45 only with excellent safety and social atmosphere.',
        link: 'https://www.plushostels.com/florence/'
      },
      {
        name: 'YellowSquare Florence',
        type: 'hostel',
        features: ['Rooftop pool', 'Female dorms', 'Round-the-clock security', 'Central station location', 'Social events'],
        rating: 8.9,
        notes: 'Contemporary hostel with rooftop swimming pool and great views. Female-only dorms, keycard access, and vibrant social atmosphere. Ages 18-45, perfect for solo female travelers seeking community.',
        link: 'https://yellowsquare.com/florence/'
      },
      {
        name: 'Ostello Bello Firenze',
        type: 'hostel',
        features: ['Near Duomo', 'Card-operated female dorms', '24-hour staff', 'San Lorenzo location', 'Personal lockers'],
        rating: 8.8,
        notes: 'Top safety-focused hostel just moments from Duomo. Card-operated female-only dorms, 24-hour staff presence, and excellent security. Perfect blend of safety and sociability for women solo travelers.',
        link: 'https://www.ostellobello.com/'
      },
      {
        name: 'Hotel Santa Maria Novella',
        type: 'hotel',
        features: ['Historic center', 'Cathedral proximity', '4-star luxury', 'Tuscan hospitality', 'Central square location'],
        rating: 8.6,
        notes: 'Panoramic 4-star hotel in historic center with luxury furnishings and attention to detail. Short walk to main attractions, railway station nearby, perfect for solo female travelers exploring Florence.',
        link: 'https://www.hotelsantamarianovella.it/'
      }
    ],
    alerts: [
      {
        title: 'Very High Pickpocket Risk in Tourist Areas',
        description: 'Pickpocket risk at "very high level" especially in historic center, markets, and public transport. Bag snatching common in crowded areas like Ponte Vecchio, Uffizi vicinity.',
        location: 'Historic center, public transport, markets',
        reportCount: 34,
        severity: 'medium',
        dateReported: '3 days ago'
      },
      {
        title: 'Tourist Area Overcharging Scams',
        description: 'Restaurants near major attractions charging inflated "tourist prices" without disclosure. Museum ticket scam websites increasing.',
        location: 'Near Duomo, Uffizi, Ponte Vecchio',
        reportCount: 18,
        severity: 'medium',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress "casual elegant" in neutral colors (black, nude, white) - Florentines appreciate sophisticated style over flashy clothing
• Churches strictly require covered shoulders and knees - always carry a lightweight scarf or cardigan for easy coverage
• Comfortable walking shoes with good grip essential for slippery cobblestone streets, especially when wet
• Avoid flip-flops, graphic t-shirts, college hoodies, or very short clothing - immediately marks you as a tourist target
• Italian women dress stylishly but modestly - never wear revealing tops and bottoms simultaneously
• Pack versatile pieces that work from day sightseeing to elegant restaurant dining`,
      firstTimers: `• Florence ranks among Europe's safest cities for solo female travelers - is Florence safe for women solo travelers? Absolutely, with 8.4/10 safety rating
• Master basic Italian greetings ("Buongiorno," "Buona sera") and phrases ("Grazie," "Prego") - significantly enhances safety and local respect
• Book Uffizi, Accademia tickets only through official websites - fake skip-the-line sites are increasing, avoid street ticket sellers completely
• Use anti-theft crossbody bags with zippers facing your body - pickpocketing at "very high level" in tourist areas like Ponte Vecchio, Uffizi vicinity
• Respect 1-4 PM lunch closure (Pausa di Pranzo) when family shops close - plan shopping and dining around this cultural tradition
• Join group activities (cooking classes, walking tours) to meet fellow solo female travelers and enhance safety through community`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Moovit',
        'Trenitalia',
        'GetYourGuide'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe Florence exploration', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Italy safety insights', rating: 4.0 },
        { name: 'Moovit', link: 'https://moovitapp.com/', description: 'Florence public transport app for ATAF buses and trams with real-time updates', rating: 4.4 },
        { name: 'Trenitalia', link: 'https://www.trenitalia.com/', description: 'Official Italian railway app for safe travel to Rome, Venice, Milan from Florence', rating: 4.3 },
        { name: 'GetYourGuide', link: 'https://www.getyourguide.com/', description: 'Book verified museum tickets and tours - safer than street vendors in Florence', rating: 4.6 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Aiuto!',
          localLanguage: 'Italian'
        },
        {
          english: 'Call the police!',
          local: 'Chiamate la polizia!',
          localLanguage: 'Italian'
        },
        {
          english: 'I need a doctor.',
          local: 'Ho bisogno di un medico.',
          localLanguage: 'Italian'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Dov\'è l\'ospedale più vicino?',
          localLanguage: 'Italian'
        },
        {
          english: 'I am lost.',
          local: 'Sono persa.',
          localLanguage: 'Italian'
        },
        {
          english: 'Please leave me alone.',
          local: 'Per favore, lasciatemi in pace.',
          localLanguage: 'Italian'
        },
        {
          english: 'I feel unsafe.',
          local: 'Non mi sento sicura.',
          localLanguage: 'Italian'
        },
        {
          english: 'Can you help me?',
          local: 'Mi può aiutare?',
          localLanguage: 'Italian'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Dress "casual elegant" with well-fitted clothing in neutral colors (black, navy, beige) - Florentines appreciate sophisticated style over flashy tourist attire',
        'Churches strictly enforce covered shoulders and knees - Duomo monitors turn away improperly dressed visitors, always carry lightweight scarf',
        'Avoid flip-flops, graphic t-shirts, college hoodies, or very short clothing - instantly marks you as American tourist',
        'Quality over quantity with tailored pieces that fit properly - Italian fashion culture values craftsmanship and good cuts',
        'Restaurant dining requires effort in appearance - avoid overly casual clothing, Italians appreciate when solo female diners dress appropriately',
        'Never wear revealing tops and bottoms simultaneously - Italian women dress stylishly but modestly for cultural respect'
      ],
      behaviorNorms: [
        'Greet with "Buongiorno" (morning) or "Buona sera" (evening) - fundamental to Italian social interaction and essential for solo female travelers',
        'Learn basic Italian phrases beyond "Grazie" - even attempting pronunciation significantly improves local interactions and safety',
        'Respect Pausa di Pranzo (1-4 PM) when family shops close - this sacred lunch time is essential Italian cultural tradition',
        'Never rush meals - lunch 1-3pm, dinner 8-10pm, Italian culture values slow, social dining experiences for solo travelers',
        'Never touch artworks, sculptures, or frescoes - show quiet reverence in churches and museums, Florence\'s heritage requires respect',
        'Use formal "Lei" address until invited to use "tu" - proper protocols with shopkeepers and locals show cultural awareness',
        'Remove shoes when entering homes and some traditional restaurants - check with hosts first to show cultural sensitivity'
      ],
      perception: [
        'Solo female travelers exceptionally welcome - Florence ranks among Europe\'s safest cities for women traveling alone with progressive attitudes',
        'Women dining alone completely normal and accepted - many solo female travelers enjoy outdoor cafes for people-watching',
        'Florentines generally helpful to solo travelers, especially those attempting Italian - warm culture respects personal boundaries',
        'Street harassment rare due to respectful metropolitan Italian culture - women report feeling secure day and night in historic areas',
        'Italian men offer genuine assistance without ulterior motives - solo female travelers often receive brotherly protection and friendship',
        'Modern Italian women are highly educated professionals expecting equal treatment - no excessive chivalry but respectful equality',
        'Solo female travelers can explore museums, restaurants, and cultural sites safely - Italian culture welcomes independent women'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['April-June, September-October'],
      events: 'Spring and fall offer ideal weather, fewer crowds, and excellent safety conditions. Summer is safe but very crowded.'
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
        title: 'Fake Art Sales',
        description: 'Street vendors selling "original" paintings near tourist sites. All are mass-produced copies.',
        severity: 'low'
      },
      {
        title: 'Restaurant Tourist Menus',
        description: 'Some restaurants near major sites have inflated "tourist menus". Look for places popular with locals.',
        severity: 'low'
      },
      {
        title: 'Leather Market Overpricing',
        description: 'San Lorenzo leather market prices are negotiable. Don\'t accept first price offered.',
        severity: 'low'
      },
      {
        title: 'Museum Skip-the-Line Scams',
        description: 'Buy official tickets online or at official ticket offices. Avoid street sellers.',
        severity: 'medium'
      }
    ],
    languages: ['Italian', 'English (moderate level in tourist areas)'],
    daytimeSafetyPercent: 87.9,
    nighttimeSafetyPercent: 78.4,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Florence',
    redFlags: [
      {
        label: 'Tourist Area Overpricing',
        frequency: 'Most common',
        icon: 'DollarSign',
        details: 'Restaurants and shops near major attractions like Duomo and Uffizi charge 200-400% markup. Tourist menus offer poor quality food at premium prices. Street vendors sell overpriced souvenirs and fake designer goods.',
        prevention: 'Eat where locals eat - walk 2-3 blocks from major attractions. Research restaurant prices beforehand. Avoid places with tourist menus in multiple languages. Shop at local markets instead of souvenir shops near attractions.'
      },
      {
        label: 'Pickpocketing Near Attractions',
        frequency: 'Very High Level',
        icon: 'Hand',
        details: 'Professional pickpocketing gangs operate around Duomo, Uffizi, Ponte Vecchio, and on crowded buses. They target distracted tourists taking photos or waiting in lines. Groups create distractions while accomplices steal valuables.',
        prevention: 'Use crossbody bags with zippers in front. Keep phones, cameras, and wallets secure. Stay alert when taking photos. Be extra cautious in crowds and queues. Avoid displaying expensive jewelry or electronics openly.'
      },
      {
        label: 'Train Station Area at Night',
        frequency: 'Frequent',
        icon: 'MapPin',
        details: 'Santa Maria Novella train station area becomes unsafe after dark with increased drug activity, harassment, and petty crime. Solo travelers are approached by aggressive panhandlers and potential scammers.',
        prevention: 'Avoid the station area after 10 PM. Use taxis or rideshare from/to station at night. Book accommodation away from the immediate station vicinity. Walk in groups if you must pass through the area after dark.'
      },
      {
        label: 'Fake Museum Ticket Websites',
        frequency: 'Increasing',
        icon: 'Globe',
        details: 'Fraudulent websites selling fake tickets to Uffizi, Accademia, and other museums charge full price but provide invalid tickets. Tourists discover the scam only upon arrival, losing money and time.',
        prevention: 'Buy tickets only from official museum websites. Verify URLs carefully - look for ".it" domains and official logos. Book through verified tour operators only. Avoid third-party ticket resellers with unusually high prices.'
      },
      {
        label: 'Restaurant Tourist Menu Scams',
        frequency: 'Common',
        icon: 'Utensils',
        details: 'Restaurants near attractions offer fixed-price "tourist menus" with poor quality, small portions, and no authentic Italian experience. Some add hidden charges or pressure customers into expensive wine pairings.',
        prevention: 'Read reviews carefully before dining. Look for restaurants where locals eat - fewer tourists is a good sign. Check prices on the menu before ordering. Avoid places with multilingual menus and aggressive hosts outside.'
      },
      {
        label: 'Aggressive Street Vendors',
        frequency: 'Daily',
        icon: 'Users',
        details: 'Street vendors around major attractions can become aggressive when selling fake designer goods, roses, or selfie sticks. They may follow tourists persistently and use guilt tactics or fake sob stories.',
        prevention: 'Say "No grazie" firmly and keep walking. Don\'t make eye contact or engage in conversation. Never accept "free" items as they demand payment afterward. Report aggressive behavior to nearby police if necessary.'
      }
    ],
    culturalSensitivityTips: [
      'Dress stylishly and cover shoulders/knees in churches',
      'Greet with "Buongiorno" or "Buona sera"',
      'Savor meals slowly - rushing is disrespectful',
      'Learn basic Italian phrases like "Grazie"',
      'Show quiet reverence in museums and churches',
      'Don\'t eat while walking or rush meals',
      'Don\'t wear revealing clothing in religious areas',
      'Don\'t expect fast restaurant service',
      'Don\'t ignore personal space boundaries',
      'Don\'t photograph people without permission'
    ],
    culturalDos: [
      'Dress stylishly and cover shoulders/knees in churches',
      'Greet with "Buongiorno" or "Buona sera"',
      'Savor meals slowly - rushing is disrespectful',
      'Learn basic Italian phrases like "Grazie"',
      'Show quiet reverence in museums and churches'
    ],
    culturalDonts: [
      'Don\'t eat while walking or rush meals',
      'Don\'t wear revealing clothing in religious areas',
      'Don\'t expect fast restaurant service',
      'Don\'t ignore personal space boundaries',
      'Don\'t photograph people without permission'
    ],
    womensConfidenceScore: {
      score: 84.6,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Florence"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 93, source: 'Italy Tourism Safety Report 2025', sourceUrl: 'https://www.italia.it/safety' },
      { label: 'Nightlife', confidence: 82, source: 'Solo Female Travel Italy 2025', sourceUrl: 'https://www.solofemaleguide.com/italy' },
      { label: 'Public Transport', confidence: 82, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Florence' },
      { label: 'Dining Alone', confidence: 91, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/florence/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Sexual harassment decreased to 4.3% in Italy (down from 6.5%)', 'Occasional verbal harassment (ciao bella) now rare in metropolitan Florence', 'Pickpocketing much more common than harassment for tourists', 'Public transport during crowded times - be mindful of groping'],
      reportingRate: 76, // Above EU average for reporting
      legalProtection: 'Strong legal protections under Italian and EU law with recent improvements. Sexual harassment headlines have raised awareness. 6.1% of women experience intimate partner violence (OECD), but tourist harassment very rare.',
      supportResources: [
        'Women Against Violence (National): 1522 (free, 24/7)',
        'Tourist Police Florence: +39 055 203391',
        'Florence Women\'s Center: +39 055 602304',
        'Emergency Services: 112 or 118',
        'U.S. Consulate Florence: +39 055 266951',
        'State Police (non-emergency): 113',
        'Careggi Hospital Emergency: +39 055 7941'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Azienda Ospedaliero Universitaria Careggi (Main Hospital)',
          address: 'Viale Pieraccini 17, 50134 Firenze',
          phone: '+39 055 42 77 111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Major Trauma Center', 'Women & Children\'s Hospital', 'Gynecology', 'Obstetrics', 'Reproductive Medicine'],
          link: 'https://www.aou-careggi.toscana.it/'
        },
        {
          name: 'Ospedale di Santa Maria Nuova',
          address: 'Piazza S. Maria Nuova, 1, 50122 Firenze',
          phone: '+39 055 27581',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Historic Hospital in City Center'],
          link: 'https://www.uslcentro.toscana.it/'
        },
        {
          name: 'Nuovo Ospedale S. Giovanni di Dio',
          address: 'Via Torregalli, 3, 50143 Firenze',
          phone: '+39 055 71921',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Healthcare'],
          link: 'https://www.uslcentro.toscana.it/'
        }
      ],
      pharmacies: [
        {
          name: 'Farmacia Comunale',
          address: 'Via dei Calzaiuoli 7r, 50122 Firenze',
          phone: '+39 055 215472',
          hours: 'Mon-Sat 9:00-19:30',
          emergency: false,
          link: 'https://www.farmaciacomunale.it/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women & Children\'s Hospital - Careggi: New modern facility with 15 clinics',
          'Gynecology Outpatient - Careggi: +39 055 4277493',
          'Reproductive Medicine Center - Careggi: +39 055 7949369',
          'Family Planning Clinic - Careggi Pavilion 7: +39 055 7947729 (11am-1pm Mon-Fri)'
        ],
        gynecologists: [
          'Dr. Barbara Brodbeck (English/German): +39 055 470521, Cell: +39 335 8353612',
          'Dr. Angelo Scuderi - Santa Maria Annunziata: +39 055 574404, Cell: +39 348 3033496',
          'Careggi Gynecology Department: Comprehensive women\'s health services'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Careggi Hospital emergency services 24/7',
          'Farmacia Comunale (24/7): Santa Maria Novella station +39 055 289435'
        ],
        sanitaryProducts: [
          'Available everywhere: pharmacies, supermarkets, convenience stores',
          'European and international brands widely available',
          'No cultural restrictions or taboos around purchase'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'COVID-19 vaccination recommended',
        'Routine vaccinations should be current'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'High summer temperatures - stay hydrated',
        'Air pollution during summer months'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'British Consulate Florence',
          address: 'Lungarno Corsini 2, 50123 Firenze',
          phone: '+39 055 284133',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-florence'
        },
        {
          name: 'German Consulate General Florence',
          address: 'Borgo Santi Apostoli 22, 50123 Firenze',
          phone: '+39 055 294722',
          link: 'https://florenz.diplo.de/'
        },
        {
          name: 'French Consulate General Florence',
          address: 'Piazza Ognissanti 2, 50123 Firenze',
          phone: '+39 055 230556',
          link: 'https://florence.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate Florence',
          address: 'Via Cavour 101, 50129 Firenze',
          phone: '+39 055 472781',
          link: 'https://www.exteriores.gob.es/consulados/florencia'
        },
        {
          name: 'Australian Honorary Consulate Florence',
          address: 'Via Borgo Ognissanti 13, 50123 Firenze',
          phone: '+39 055 294566',
          link: 'https://italy.embassy.gov.au/rome/florence.html'
        },
        {
          name: 'Canadian Honorary Consulate Florence',
          address: 'Via dei Bardi 28, 50125 Firenze',
          phone: '+39 055 234598',
          link: 'https://www.canadainternational.gc.ca/italy-italie/offices-bureaux/florence-firenze.aspx'
        },
        {
          name: 'Netherlands Consulate General Florence',
          address: 'Via Cavour 81, 50129 Firenze',
          phone: '+39 055 475249',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/italy'
        },
        {
          name: 'Danish Honorary Consulate Florence',
          address: 'Via Santo Spirito 11, 50125 Firenze',
          phone: '+39 055 287049',
          link: 'https://italien.um.dk/en'
        },
        {
          name: 'Swiss Consulate General Florence',
          address: 'Piazzale Galileo 5, 50125 Firenze',
          phone: '+39 055 222434',
          link: 'https://www.eda.admin.ch/florence'
        },
        {
          name: 'Indian Honorary Consulate Florence',
          address: 'Villa San Martino, Via di Maiano 16, 50014 Fiesole (FI)',
          phone: '+39 055 597912',
          link: 'https://www.eoirome.gov.in/'
        }
      ],
      womensRights: [
        'Strong legal protections under Italian and EU law',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid Italy: 800 900 500',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through consulate'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency)',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact consulate for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Walking',
          safety: 9.2,
          recommendations: ['Historic center is very walkable and safe'],
          companies: ['Self'],
          link: ''
        },
        {
          type: 'ATAF Bus',
          safety: 8.2,
          recommendations: ['Safe and efficient public buses'],
          companies: ['ATAF'],
          link: 'https://www.ataf.net/'
        },
        {
          type: 'Taxi',
          safety: 8.8,
          recommendations: ['Official white taxis are safe and regulated'],
          companies: ['Various licensed operators'],
          link: ''
        }
      ],
      nightTravel: {
        safety: 8.0,
        warnings: [
          'Some areas around train station less safe late at night',
          'Limited public transport after midnight'
        ],
        alternatives: [
          'Florence is very walkable even at night in historic center',
          'Official taxis available',
          'Most attractions within walking distance'
        ]
      },
      verifiedProviders: [
        {
          name: 'ATAF',
          type: 'Public Bus',
          contact: '+39 800 424500',
          safety: 8.2
        },
        {
          name: 'Official Taxis',
          type: 'Taxi',
          contact: '+39 055 4390',
          safety: 8.8
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key access',
        'CCTV in common areas',
        'In-room safes',
        'Historic building security'
      ],
      safeNeighborhoods: [
        'Historic Center (Centro Storico)',
        'Santo Spirito',
        'Santa Croce',
        'San Lorenzo',
        'Oltrarno (central areas)'
      ],
      womensOnly: [
        {
          name: 'Plus Florence',
          type: 'Hostel',
          features: ['Female dorms', 'Modern design', 'Central location'],
          rating: 4.4
        }
      ],
      userReviews: [
        {
          rating: 4.7,
          safety: 8.9,
          comments: 'Felt completely safe walking alone even at night. Beautiful and welcoming city.',
          date: '2025-01-17'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Free WiFi in many cafes and museums',
        'Use VPN for sensitive data',
        'Public WiFi available but use caution'
      ],
      digitalScams: [
        'Fake museum ticket websites',
        'Phishing emails from fake accommodations',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Italy',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR compliance provides strong protection',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Tourist Overcharging',
          location: 'Near Duomo',
          date: '2025-01-18',
          description: 'Restaurant charged tourist prices without disclosure',
          severity: 'low'
        },
        {
          type: 'Pickpocketing',
          location: 'Ponte Vecchio',
          date: '2025-01-16',
          description: 'Tourist reported bag snatching attempt',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Book museum tickets online in advance to avoid queues and scams',
          author: 'Art Lover',
          date: '2025-01-19',
          upvotes: 187
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Is Florence safe for women solo travelers? Yes - Italy is generally safe for solo female travel. Exercise normal precautions and be aware of petty crime in tourist areas.',
      reason: 'Generally safe destination for solo female travelers with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/italy-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travel - Florence ranked among Europe\'s safest cities for women traveling alone',
        'Is Florence safe for female solo travelers? Very safe with rich cultural experiences and women-friendly atmosphere',
        'Historic center perfect for solo female travel safety - walkable, well-lit, and well-patrolled by local police',
        'Locals are helpful and friendly to solo female travelers - Italian culture welcomes women traveling alone',
        'Strong women solo travel safety network with excellent healthcare, English-speaking gynecologists, and 24/7 support resources'
      ]
    },
    crimeStatistics: {
      violentCrime: 6.8,
      propertyCrime: 2234,
      sexualAssault: 9.1,
      kidnapping: 0.1,
      source: 'Italian National Statistics',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Comfortable walking shoes',
        'RFID-blocking wallet',
        'Portable phone charger',
        'Small crossbody bag'
      ],
      safetyApps: [
        {
          name: 'Citymapper',
          purpose: 'Navigation and public transport planning',
          rating: 4.7
        },
        {
          name: 'Google Translate',
          purpose: 'Italian conversation and text translation',
          rating: 4.4
        },
        {
          name: 'Rick Steves Audio Europe',
          purpose: 'Free audio guides for Florence museums and attractions',
          rating: 4.6
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety with GPS tracking and emergency alerts',
          rating: 4.1
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community with Florence safety tips',
          rating: 4.3
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
          number: '+39 055 203391',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master the Art of Avoiding Tourist Traps and Overcharging',
        description: 'Avoid restaurants with English menus near major attractions - they charge 50% more. Look for places where locals eat, especially in Oltrarno district. Never accept the first price at San Lorenzo leather market - everything is negotiable.',
        severity: 'medium',
        sourceName: 'Travel Ladies Community Reports 2025',
        sourceUrl: 'https://travelladies.app/safety/italy/florence'
      },
      {
        title: 'Protect Yourself from "Very High Level" Pickpocket Risk',
        description: 'Use an anti-theft crossbody bag with zippers facing your body. Pickpocketing is at very high levels in tourist areas like Ponte Vecchio, Uffizi, and public transport. Keep phone and wallet in front pockets, never back pockets.',
        severity: 'high',
        sourceName: 'Travel Safe Abroad 2025',
        sourceUrl: 'https://www.travelsafe-abroad.com/italy/florence/'
      },
      {
        title: 'Navigate Florence Like a Local - Walking Safety Tips',
        description: 'The historic center is compact and walkable within 15 minutes end-to-end. Use landmarks like the Duomo for orientation. Cobblestone streets can be slippery when wet - wear shoes with good grip. Florence is extremely safe for women walking alone, even at night.',
        severity: 'low',
        sourceName: 'Solo Female Traveler Reports 2025',
        sourceUrl: 'https://www.bemytravelmuse.com/solo-female-travel-italy/'
      },
      {
        title: 'Book Museum Tickets Only Through Official Sources',
        description: 'Fake skip-the-line ticket websites are increasing. Only book Uffizi, Accademia, and other museums through official websites. Avoid street ticket sellers completely - they sell invalid or overpriced tickets.',
        severity: 'medium',
        sourceName: 'Florence Tourism Official Warnings 2025',
        sourceUrl: 'https://www.firenzeturismo.it/'
      },
      {
        title: 'Avoid Dangerous Areas - Train Station and Cascine Park at Night',
        description: 'Stay away from Santa Maria Novella train station area late at night. Avoid Cascine Park after dark completely. These are the only areas in Florence with safety concerns for solo women travelers.',
        severity: 'medium',
        sourceName: 'Local Safety Reports 2025',
        sourceUrl: 'https://www.ciaoflorence.it/en/service-center/faq/5/22/80'
      },
      {
        title: 'Take Advantage of Exceptional Women\'s Healthcare Services',
        description: 'Florence has world-class women\'s health services at Careggi Hospital with English-speaking gynecologists. Dr. Barbara Brodbeck speaks English/German (+39 335 8353612). Emergency contraception available at all pharmacies without prescription.',
        severity: 'low',
        sourceName: 'Healthcare Guide Florence 2025',
        sourceUrl: 'https://www.theflorentine.net/2017/06/05/sexual-health-resources-florence-italy-primer/'
      },
      {
        title: 'Use Taxi Rosa for Safe Night Transportation',
        description: 'Taxi Rosa provides priority night taxi service for women between 10pm-4am. Call +39 055 4378557 or +39 055 4361904. Official white taxis are safe and regulated, but avoid unmarked vehicles completely.',
        severity: 'low',
        sourceName: 'Florence Women\'s Safety Services 2025',
        sourceUrl: 'https://en.firenze-online.com/useful-information/useful-telephone-number-florence.php'
      },
      {
        title: 'Respect Renaissance Art and Church Dress Codes',
        description: 'Cover shoulders and knees when entering churches - keep a light scarf for easy covering. Never touch artworks in museums. Photography rules vary by location - ask before taking photos. Florentines appreciate visitors who respect their cultural heritage.',
        severity: 'low',
        sourceName: 'Cultural Etiquette Guide Florence',
        sourceUrl: 'https://www.visitflorence.com/tourist-info/practical-information.html'
      },
      {
        title: 'Save Money with Local Eating and Shopping Strategies',
        description: 'Eat aperitivo 6-8pm for generous food buffets with drinks (€8-12 excellent value). Shop at local markets like Sant\'Ambrogio instead of tourist areas. Stand at bar for espresso (€1.50) vs sitting (€3-5). Avoid coperto (cover charge) restaurants.',
        severity: 'low',
        sourceName: 'Budget Travel Florence 2025',
        sourceUrl: 'https://www.nomadicmatt.com/travel-guides/italy-travel-tips/florence/'
      },
      {
        title: 'Learn Basic Italian Phrases for Safety and Respect',
        description: 'Learn "Aiuto!" (Help!), "Chiamate la polizia!" (Call police!), "Non mi sento sicura" (I don\'t feel safe). Florentines greatly appreciate effort to speak Italian. Even basic phrases improve interactions and show cultural respect.',
        severity: 'low',
        sourceName: 'Solo Female Travel Italy Guide 2025',
        sourceUrl: 'https://thesharmini.com/solo-female-traveler/is-italy-safe/'
      },
      {
        title: 'Choose Accommodation Strategically for Safety and Value',
        description: 'Stay in Santa Croce, San Frediano, or Santo Spirito for 40-50% savings while maintaining safety. Historic center accommodation is expensive but offers maximum security. Female-only dorms available at Plus Florence and Academy Hostel.',
        severity: 'low',
        sourceName: 'Accommodation Safety Guide Florence 2025',
        sourceUrl: 'https://www.plushostels.com/florence/'
      },
      {
        title: 'Time Your Visit to Minimize Crowds and Costs',
        description: 'Visit during shoulder seasons (March, November) for 30-40% accommodation savings and manageable crowds. Summer (June-August) has highest pickpocket risk due to massive crowds. Winter offers lowest prices and authentic local atmosphere.',
        severity: 'low',
        sourceName: 'Seasonal Travel Planning Florence',
        sourceUrl: 'https://radicalstorage.com/travel/is-florence-expensive/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$180-210 USD / day (€70-150)',
        description: 'Updated 2025 costs for solo female travelers: typical tourists spend $210/day. Budget-conscious solo female travelers can manage $40-60/day with hostels and self-catering. Florence expensive but exceptional cultural value with excellent solo travel safety standards.',
        tip: 'Stay outside historic center (Santa Croce, San Frediano) for better value while maintaining solo female travel safety. Book early for prime locations. High season April-June, Sept-Oct most expensive for solo travelers.'
      },
      accommodation: [
        {
          type: 'Hostels/Shared Rooms',
          avgCost: '$35-60/night (decent ones $20+ minimum)',
          safetyNote: 'Female dorms available. Choose historic center for safety but higher cost.',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotels',
          avgCost: '$120-180/night (€60-100)',
          safetyNote: 'Excellent security in restored historic buildings with modern amenities.',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotels',
          avgCost: '$350-450/night (€200-300)',
          safetyNote: 'Premium security, concierge services, prime historic center locations.',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safest option in compact historic center',
          safetyLevel: 'high'
        },
        {
          method: 'ATAF Public Bus/Tram',
          cost: '$1.80/ride ($1.60 contactless), 90-min validity',
          safetyDescription: 'Safe with CCTV, watch for pickpockets',
          safetyLevel: 'medium'
        },
        {
          method: 'Licensed Taxis',
          cost: '$27-32 from airport, $11-16 city trips',
          safetyDescription: 'Very safe, regulated. Taxi Rosa for women nights',
          safetyLevel: 'high'
        },
        {
          method: 'Electric Mini-Buses',
          cost: '$1.80/ride',
          safetyDescription: 'Safe city center access to pedestrian areas',
          safetyLevel: 'high'
        },
        {
          method: 'Bike/E-Scooter Rentals',
          cost: '$11-22/day bikes, $16-27/day e-scooters',
          safetyDescription: 'Caution on cobblestones, avoid nights',
          safetyLevel: 'medium'
        },
        {
          method: 'Regional Trains',
          cost: '$9-27 to nearby cities',
          safetyDescription: 'Safe for day trips, use official Trenitalia app',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Stay outside historic center (Santa Croce, San Frediano, San Marco) for 40-50% savings',
        'Many churches and piazzas free - Santo Spirito, Santa Croce exterior',
        'Aperitivo 6-8pm offers excellent food and drink value',
        'Walk everywhere - historic center only 15 minutes end-to-end',
        'Free museums first Sunday each month (October-March)',
        'Avoid restaurants with English menus near major sites - 50% markup',
        'Shop at local markets and supermarkets - 22% cheaper food than US',
        'Book Firenze Card (€85) if visiting 3+ major museums',
        'Avoid coperto (cover charge) restaurants - look for locals eating there',
        'Travel shoulder season (March, November) for 30-40% accommodation savings'
      ],
      currencyExchangeTips: [
'Use ATMs affiliated with major banks (Intesa Sanpaolo, UniCredit, BNL) for best exchange rates and security',
        'Avoid currency exchange offices near tourist attractions - typically 5-8% worse rates than banks',
        'Notify your bank before travel to prevent card blocks - essential for solo female travel security',
        'Use contactless payment where possible - safer than carrying large amounts of cash in pickpocket-prone areas',
        'ATMs inside bank branches are safest - avoid standalone machines in isolated areas',
        'Cover your PIN entry and be aware of surroundings, especially near train stations',
        'Withdraw larger amounts less frequently to minimize ATM fees and exposure',
        'Keep backup cards in separate locations from your main wallet',
        'Never use currency exchange services offered by street vendors or unlicensed operators',
        'Avoid "no commission" exchange offices - they make profit through poor exchange rates',
        'Be cautious of "helpful" strangers at ATMs - a common pickpocket setup',
        'Double-check restaurant bills - some add inflated exchange rates for non-Euro cards',
        'Restaurants, hotels, and shops widely accept cards, but small cafes may be cash-only',
        'Keep small bills for buses, public restrooms, and tipping - drivers rarely have change',
        'Emergency cash stash recommended - keep $50-100 separate from main wallet',
        'Mobile payment (Apple Pay, Google Pay) increasingly accepted and very secure for solo travelers'
      ]
    },
  youtubeVideo: {
    videoId: "E5dn_m93noY"
  },
  culturalSensitivityTipsDetails: [
'Show knowledge of Renaissance history - Mentioning Michelangelo, Leonardo, or Medici often earns passionate local guidance and insider museum tips.',
    'Dress stylishly in neutral colors - Quality, well-fitted pieces (black, navy, beige) earn better service from fashion-conscious locals.',
    'Follow church etiquette beyond dress codes - Remove sunglasses, silence phones, no flash photos, whisper only. Respectful behavior earns warm guidance.',
    'Follow Italian dining rules - No cappuccino after 11 AM, no cheese on seafood pasta, bistecca serves two. Following customs earns complimentary digestivos.',
    'Respect Pausa di Pranzo (1-4 PM) - Shops close for family time. Showing interest in family histories earns personalized service.',
    'Use formal address protocols - "Lei" until invited to use "tu," call shopkeepers "Signore/Signora." Proper protocols earn preferential treatment.',
    'Understand Italian gestures - Elaborate gestures and passionate voices aren\'t aggression but expressiveness. This knowledge makes locals more approachable.',
    'Learn neighborhood identities - Oltrarno, Santo Spirito, San Lorenzo have distinct cultures and crafts. Supporting local workshops earns community protection.',
    'Expect gender equality - Modern Italian women expect equal treatment, not excessive chivalry. Italian men offer genuine assistance leading to protective friendships.',
    'Follow hospitality customs - Bring wine/chocolates/flowers to homes. Arrive 15 minutes late, help cleanup, compliment cooking. Proper etiquette earns continued invitations.',
    'Show art knowledge beyond photos - Learn about artists and historical contexts. Knowledgeable engagement with guides earns private tours.',
    'Respect artisan workshops - Learn about craftsmanship quality and price negotiation. Showing respect earns authentic pieces and tutorials.',
    'Learn about Tuscan wines - Know Chianti Classico and Brunello basics. Wine knowledge earns cellar tours and tastings.',
    'Respect UNESCO heritage - Don\'t touch historical surfaces or litter near monuments. Environmental respect earns helpful local guidance.',
    'Adapt to Italian meal times - Dinner 8-10 PM, lunch 1-3 PM. Following local timing avoids frustration.',
    'Keep Florence clean - Don\'t litter near monuments and respect preservation. Environmental consciousness earns local approval.',
    'Accept hospitality graciously - Don\'t refuse food/drink offers abruptly. Gracious responses earn continued kindness and protection.',
    'Avoid sensitive topics - Don\'t discuss politics or economic problems unless locals initiate. Focus on culture, art, and food instead.'
  ]
};

export default florence;