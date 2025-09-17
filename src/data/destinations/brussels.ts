import { Destination } from './types';

const brussels: Destination = {
    city: 'Brussels',
    country: 'Belgium',
    continent: 'Europe',
    countryCode: 'be',
    overallScore: 6.8,
    nightSafety: 6.2,
    publicTransit: 7.2,
    walkingAlone: 6.6,
    tags: ['warning-flags', 'moderate-risk', 'terrorism-alert'],
    bgColor: 'bg-yellow-25',
    reviewCount: 134,
    lastUpdated: '1 day ago',
    harassmentRisk: 'moderate-high',
    safetyBreakdown: {
      nightSafety: {
        score: 6.2,
        context: 'Is Brussels safe for women solo travelers at night? Night safety requires extra precautions with 2025 reviews noting "city has become dangerous at night recently, especially for women alone." Level 3 terrorism threat continues. Crime Index 55.04, Safety Index 44.96. Solo female travel safety is compromised after dark - completely avoid walking alone, especially around train stations. Women traveling alone safety requires using official transport only at night.'
      },
      publicTransit: {
        score: 7.2,
        context: 'Public transport safety for solo female travelers has significant concerns with 60% of Belgian women reporting sexual harassment on STIB transport. Brussels ranks among top European capitals for pickpocket risk at Metro stations. Solo female travel safety requires staying alert in less crowded carriages. Women solo travel safety enhanced by STIB anti-harassment campaigns, but incidents remain frequent for women traveling alone during off-peak hours.'
      },
      walkingAlone: {
        score: 6.6,
        context: 'Is Brussels safe for female solo travelers walking alone? Daytime walking moderately safe in tourist areas but 22% of Brussels women report street harassment annually. Solo female travel safety requires significant precautions with Crime Index 55.04. Women traveling alone report increased "men staring and making degrading comments." Solo travel security compromised by high pickpocket risk in transportation hubs. Multiple reviews advise against solo female travelers walking alone at night.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Uccle',
          description: 'Peaceful, upscale neighborhood in southern Brussels considered one of the safest areas in the city. Known for being quiet, residential, and family-oriented with green spaces like Wolvendael Park. Excellent for solo female travelers seeking a safe and serene environment with elegant homes and low crime rates.'
        },
        {
          name: 'Ixelles',
          description: 'Trendy, multicultural neighborhood popular with young professionals and students. Generally safe with excellent restaurants, cafes, and nightlife. The area around Avenue Louise and Place Flagey is particularly safe and well-patrolled. Good lighting and active street life make it comfortable for solo women during evening hours.'
        },
        {
          name: 'Saint-Gilles (excluding Parvis area)',
          description: 'Artistic, bohemian neighborhood with a vibrant cultural scene. The upper parts near Châtelain area are safe and trendy with excellent food markets and cafes. Well-lit streets and active community make it suitable for solo female travelers, though avoid the Parvis de Saint-Gilles area late at night.'
        },
        {
          name: 'Etterbeek',
          description: 'Quiet residential area close to EU institutions, popular with expatriates and diplomats. Very safe with good transport connections to city center. Streets are well-maintained and well-lit, making it an excellent choice for accommodation for solo women travelers.'
        },
        {
          name: 'Woluwe-Saint-Lambert',
          description: 'Upscale residential suburb with shopping centers and parks. Very low crime rates and family-friendly atmosphere. Good for solo travelers seeking a peaceful base with easy access to city center via metro. Well-lit streets and active community policing.'
        },
        {
          name: 'Central Brussels (Grand Place area)',
          description: 'Historic city center with UNESCO World Heritage Grand Place. Well-patrolled tourist area with excellent lighting and police presence during day and early evening. Many hotels, restaurants, and attractions within walking distance. However, be cautious late at night as the area can become rowdy near bars and clubs.'
        },
        {
          name: 'European Quarter',
          description: 'Business district housing EU institutions with high security presence due to diplomatic missions. Very safe during business hours with excellent transport connections. Quieter in evenings and weekends but well-monitored. Good choice for business travelers and those seeking secure accommodation.'
        }
      ],
      caution: [
        'Gare du Midi area - High crime rates, especially pickpocketing and scams targeting tourists. Extra caution needed for women, avoid lingering especially after dark',
        'Gare du Nord and surrounding areas - Less frequented late at night, higher incident rates. Use well-lit routes and avoid isolated areas',
        'Central Brussels late at night - Groups of men in city center can make solo women uncomfortable, use official transport after midnight',
        'Parvis de Saint-Gilles - Recommended to avoid late at night, particularly for solo female travelers',
        'Schaerbeek (certain areas) - Mixed safety levels, some parts safe while others should be avoided, especially at night',
        'Anneessens neighborhood - Higher crime rates, especially for tourists and women, avoid walking alone after dark'
      ],
      avoid: [
        'Molenbeek - Higher crime rates and should be avoided, especially at night for solo female travelers',
        'Anderlecht (certain areas) - Avoid walking alone at night, higher incident rates reported',
        'Brussels North (Gare du Nord vicinity late at night) - Poorly lit areas with higher crime rates',
        'Red-light district around Midi station - Particularly unsafe for women, avoid entirely',
        'Isolated areas of Bois de la Cambre at night - Park areas become unsafe after dark',
        'Any poorly lit side streets and alleys late at night - Stick to main, well-lit thoroughfares'
      ]
    },
    accommodations: [
      {
        name: 'MEININGER Brussels City Center',
        type: 'hostel',
        features: ['Female-only dorms', 'Overall Rating 88%', 'Modern security systems', 'Key-card access', '24/7 reception', 'Safe neighborhood', 'Social common areas'],
        rating: 4.6,
        notes: 'Best rated hostel in Brussels for female solo travelers. Overall rating of 88% with dedicated women-only dorms and top-tier amenities. CCTV, personalized security codes, and tranquil environments perfect for meeting other solo travelers.',
        link: 'https://www.meininger-hotels.com/en/hotels/brussels/city-center/'
      },
      {
        name: 'MEININGER Brussels Gare du Midi',
        type: 'hostel',
        features: ['Female-only dorms', 'Secure lockers', 'Female-only common areas', '24/7 security', 'Transport connections', 'Social activities'],
        rating: 4.5,
        notes: 'Second best MEININGER location specifically recommended for female solo travelers. Features secure lockers, key-card access, and female-only common areas fostering connection and relaxation among women travelers.',
        link: 'https://www.meininger-hotels.com/en/hotels/brussels/gare-du-midi/'
      },
      {
        name: 'Hotel des Galeries',
        type: 'hotel',
        features: ['Luxury boutique', 'Royal Galleries location', '24/7 concierge', 'Female-friendly staff', 'Premium security', 'Professional service'],
        rating: 4.8,
        notes: 'Elegant boutique hotel near Royal Galleries of Saint Hubert - perfect for solo female travelers who appreciate luxury. Exceptional location with high security standards and staff trained specifically for women traveling alone.',
        link: 'https://www.hoteldesgaleries.be/'
      },
      {
        name: 'Sleep Well Youth Hostel',
        type: 'hostel',
        features: ['Female-only rooms', 'Historic Brussels location', 'Community atmosphere', 'Security cameras', 'Budget-friendly', '13-min walk to Grand Place'],
        rating: 4.5,
        notes: 'Popular choice for budget-conscious solo female travelers. Historic location in central Brussels with strong community atmosphere - perfect for meeting other women travelers. Consistently rated as safe and welcoming.',
        link: 'https://www.sleepwell.be/'
      },
      {
        name: 'Rocco Forte Hotel des Galeries',
        type: 'hotel',
        features: ['5-star luxury', 'Prime Galeries Saint-Hubert location', 'Personal butler service', 'Female-focused amenities', 'Ultimate security', 'Spa services'],
        rating: 4.9,
        notes: 'Ultimate luxury for solo female travelers in Brussels. Located in prestigious Royal Galleries with personal butler service and female-focused amenities. Exceptional security and service standards specifically catering to women traveling alone.',
        link: 'https://www.roccofortehotels.com/hotels-and-resorts/hotel-des-galeries/'
      },
      {
        name: 'Hotel Le Dixseptième',
        type: 'hotel',
        features: ['Historic 17th-century building', '4-star luxury', 'Central Station proximity', 'High security protocols', 'Solo traveler focused', 'Professional staff'],
        rating: 4.7,
        notes: 'Historic luxury hotel in former 17th-century residence offering exceptional security and prime location. Specifically caters to solo female travelers with professional staff trained to assist independent women travelers.',
        link: 'https://www.ledixseptieme.be/'
      },
      {
        name: 'NH Collection Brussels Grand Sablon',
        type: 'hotel',
        features: ['4-star hotel', 'Safe upscale Sablon district', 'Art gallery neighborhood', 'Business center', '24/7 reception', 'Female business traveler focused'],
        rating: 4.6,
        notes: 'Located in the extremely safe and upscale Sablon district known for antiques and art galleries. Perfect for solo female business travelers with excellent amenities and location in one of Brussels\' safest neighborhoods.',
        link: 'https://www.nh-hotels.com/hotel/nh-collection-brussels-grand-sablon'
      }
    ],
    alerts: [
      {
        title: 'Terrorism Threat Level',
        description: 'Belgium maintains national threat level 3 of 4 (serious) following 2023 terrorist incidents',
        location: 'Countrywide',
        reportCount: 12,
        severity: 'medium',
        dateReported: '5 days ago'
      },
      {
        title: 'Street Harassment Reports',
        description: '22% of women report street harassment incidents in past year, particularly in central areas and transport',
        location: 'Brussels-wide',
        reportCount: 28,
        severity: 'medium',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Solo female travel safety essential: dress modestly and professionally - Brussels business culture expectations for women traveling alone
• Layer clothing for unpredictable weather - waterproof jacket crucial for solo female travelers in Brussels climate
• Avoid flashy jewelry - important solo travel safety precaution to prevent pickpocketing targeting women
• Comfortable walking shoes essential for cobblestone streets - practical solo female travel advice for Brussels
• Dark colors blend in better - women solo travel safety tip to avoid unwanted attention
• Always carry charged phone with emergency contacts - critical women traveling alone safety equipment`,
      firstTimers: `• Is Brussels safe for female solo travelers? Yes, with reasonable precautions - Brussels offers excellent safety for women traveling alone
• Register with your embassy within 24 hours if staying longer term - essential solo female travel safety protocol
• Save emergency numbers (112) and STIB harassment hotline - critical solo travel safety tips for women in Brussels
• Use official STIB transport and avoid unlicensed taxis - Uber available and safe for solo female travel security
• Avoid Molenbeek and Anderlecht neighborhoods at night - important women traveling alone safety advice
• Trust your instincts - if unsafe, seek help immediately - priority solo female travel safety guideline
• Stay in safe neighborhoods like Uccle or Ixelles - essential solo travel security for women`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'STIB MIVB',
        'Uber Belgium',
        'BE-Alert'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Brussels', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Belgium safety insights', rating: 4.0 },
        { name: 'STIB MIVB', link: 'https://www.stib-mivb.be/', description: 'Official Brussels public transport app for metro, trams, buses with real-time info', rating: 4.2 },
        { name: 'Uber Belgium', link: 'https://www.uber.com/be/', description: 'Ride-hailing app available in Brussels with driver verification and GPS tracking', rating: 4.3 },
        { name: 'BE-Alert', link: 'https://www.be-alert.be/', description: 'Official Belgian emergency alert system for security threats and emergencies', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Aidez-moi! / Help!',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'Call the police!',
          local: 'Appelez la police! / Bel de politie!',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'I need a doctor.',
          local: 'J\'ai besoin d\'un médecin. / Ik heb een dokter nodig.',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Où est l\'hôpital le plus proche? / Waar is het dichtstbijzijnde ziekenhuis?',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'I am lost.',
          local: 'Je suis perdu(e). / Ik ben verdwaald.',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'Please leave me alone.',
          local: 'Laissez-moi tranquille, s\'il vous plaît. / Laat me met rust, alstublieft.',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'I feel unsafe.',
          local: 'Je ne me sens pas en sécurité. / Ik voel me onveilig.',
          localLanguage: 'French/Dutch'
        },
        {
          english: 'Can you help me?',
          local: 'Pouvez-vous m\'aider? / Kunt u mij helpen?',
          localLanguage: 'French/Dutch'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Business professional attire strongly preferred due to Brussels\' EU capital status - dark suits, professional blazers, and conservative dress essential',
        'Belgians dress conservatively and formally - even casual wear should be neat, pressed, and of good quality fabric',
        'Weather-appropriate layering essential - carry waterproof jacket and umbrella as Brussels weather changes frequently throughout the day',
        'Comfortable yet sophisticated walking shoes mandatory - cobblestone streets require sturdy footwear but maintain professional appearance',
        'Conservative modesty important for solo female travelers - avoid revealing clothing to blend in and reduce unwanted attention',
        'Quality over quantity in clothing choices - Belgians appreciate well-made, classic pieces over trendy or flashy items',
        'Neutral color palette preferred - blacks, grays, navy, and muted tones align with Belgian fashion sensibilities and EU diplomatic culture'
      ],
      behaviorNorms: [
        'Punctuality is absolutely essential - being late is considered deeply disrespectful in Belgian culture, especially for solo female travelers building credibility',
        'Speak quietly in public spaces and public transport - loud behavior immediately marks you as tourist and is considered very rude',
        'Master formal greetings with firm handshakes and direct eye contact - Belgian business culture requires professional presentation even in casual settings',
        'Learn basic French ("Bonjour," "Merci") and Dutch ("Goedemorgen," "Dank je") phrases - bilingual effort shows cultural respect and helps solo travelers',
        'Respect dining etiquette by waiting to be seated and never rushing meals - Belgian dining is social experience requiring patience and proper manners',
        'Tip appropriately (10-15%) only if service charge not included - overtipping marks you as tourist and undertipping is offensive',
        'Maintain appropriate personal space and avoid physical contact beyond handshakes - Belgians value privacy and formal interactions',
        'Remove hats and sunglasses when entering buildings and meeting people - basic courtesy expected in Belgian social interactions',
        'Stand right on escalators and maintain quiet behavior in public transport - essential metro/tram etiquette for fitting in',
        'Avoid political discussions about Flanders vs. Wallonia tensions - extremely sensitive topic that can create uncomfortable situations for solo travelers'
      ],
      perception: [
        'Solo female travelers are completely normal in Brussels due to international EU atmosphere - diplomatic community includes many independent women professionals',
        'Belgian culture is initially formal and reserved but becomes warm and friendly once proper connections are established through respectful behavior',
        'Street harassment affects 22% of women annually, so solo female travelers must maintain awareness while still enjoying complete social acceptance',
        'Independent women dining alone, visiting museums, and using public transport is everyday occurrence - no social stigma attached to solo activities',
        'Local Belgian women are well-dressed, confident, and professional - following their behavioral and appearance standards helps solo travelers integrate seamlessly',
        'EU diplomatic presence means diverse international women are common sight - solo female travelers blend easily into cosmopolitan atmosphere',
        'Brussels\' business culture respects professional women travelers - solo female business visitors receive same treatment as male colleagues',
        'Nighttime safety requires extra caution in certain neighborhoods, but daytime solo exploration is completely normal and socially accepted'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Summer months offer better visibility and longer daylight hours for safety. Spring and early fall are also good with fewer crowds.'
    },
    emergencyInfo: {
      police: '112',
      fire: '112',
      medical: '112',
      general: '112'
    },
    currency: {
      name: 'Euro',
      code: 'EUR',
      exchangeRate: {
        usd: 1.0941,
        eur: 1.0000,
        gbp: 0.8297,
        chf: 0.9315
      },
      exchangeTips: [
        'Use banks or official Bureau De Change, Geld Wechseln, or Cambio for currency exchange',
        'Avoid airport currency exchanges due to high commission and poor rates',
        'ATMs from major banks (BNP Paribas, KBC, ING) offer good exchange rates',
        'Multi-currency cards from providers like Wise are recommended for best rates',
        'Credit cards widely accepted - Visa and Mastercard preferred',
        'Always choose to pay in Euros rather than your home currency to avoid poor conversion rates',
        'Keep receipts for tax-free shopping refunds at airport',
        'Small bills (€5, €10, €20) preferred by smaller merchants and for tips'
      ],
      scamWarnings: [
        'Avoid street money changers who may offer counterfeit bills or poor rates',
        'Be cautious of "dynamic currency conversion" - always pay in Euros',
        'Don\'t exchange money at hotels - typically worst rates available',
        'Watch for ATM skimming devices - use machines inside banks when possible',
        'Verify exchange rates before transactions using official sources like ECB'
      ]
    },
    scamWarnings: [
      {
        title: 'Pickpocketing and Distraction Theft',
        description: '63% of Belgium\'s pickpocketing happens in Brussels. Common tactics include distraction teams, fake spills, and crowded transport theft. Keep valuables secure and stay alert in tourist areas like Grand Place.',
        severity: 'high'
      },
      {
        title: 'Fake Police Officers',
        description: 'Scammers may pose as plain-clothes police demanding to see documents or money. Real Belgian police show official ID and uniform officers assist with document checks. Ask for badge numbers and contact 112 if suspicious.',
        severity: 'medium'
      },
      {
        title: 'Train Station Area Scams',
        description: 'Gare du Midi and other stations have higher rates of tourist-targeted scams including overpriced services, fake tickets, and unlicensed taxis. Use official transport and services only.',
        severity: 'medium'
      },
      {
        title: 'Restaurant and Tourism Overcharging',
        description: 'Some establishments near tourist attractions charge inflated prices or add unauthorized service fees. Check prices and bills carefully, especially around Grand Place and Manneken Pis.',
        severity: 'low'
      }
    ],
    languages: ['Dutch', 'French', 'German', 'English (widely spoken in tourist areas)'],
    daytimeSafetyPercent: 72.1,
    nighttimeSafetyPercent: 58.3,
    safetySourceName: 'Numbeo 2025 / Brussels Safety Survey',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Brussels',
    redFlags: [
      {
        label: 'Street Harassment (22% of women affected)',
        frequency: 'Common',
        icon: 'AlertTriangle',
        details: '22% of women in Brussels experience street harassment. Common in Molenbeek, Schaerbeek, and around Brussels Central Station. Catcalling, following, and unwanted attention particularly affect solo female travelers.',
        prevention: 'Avoid eye contact with harassers, stay in well-lit busy areas, use confident body language, report incidents to local authorities'
      },
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Most Common',
        icon: 'Hand',
        details: 'Grand Place, Brussels Central Station, and EU Quarter are hotspots. Professional teams use distraction techniques during peak tourist hours. Metro stations particularly problematic.',
        prevention: 'Use anti-theft bags, keep valuables secure, stay alert in crowds, avoid displaying expensive items'
      },
      {
        label: 'Transport-Related Harassment',
        frequency: 'Frequent',
        icon: 'Users',
        details: 'Harassment on Brussels metro, trams, and buses, especially during evening hours. Unwanted comments and inappropriate behavior from other passengers targeting solo women.',
        prevention: 'Sit near driver/conductor, stay near exits, travel during daylight when possible, report incidents to transport security'
      },
      {
        label: 'Neighborhood Safety Variation',
        frequency: 'Ongoing',
        icon: 'MapPin',
        details: 'Molenbeek, Schaerbeek, and parts of Anderlecht have higher crime rates. Significant safety differences between EU Quarter (safer) and certain immigrant neighborhoods (higher risk).',
        prevention: 'Research neighborhoods beforehand, stay in Ixelles/Uccle/EU Quarter, avoid poorly lit areas at night, use taxis in unsafe zones'
      }
    ],
    culturalDos: [
      'Learn basic French/Dutch greetings',
      'Dress professionally and conservatively',
      'Be punctual for all appointments',
      'Respect EU and Belgian formality',
      'Use proper etiquette in restaurants'
    ],
    culturalDonts: [
      'Don\'t discuss regional politics (Flanders vs Wallonia)',
      'Don\'t be loud on public transport',
      'Don\'t skip handshakes in formal settings',
      'Don\'t expect quick service - meals are social',
      'Don\'t ignore local dress standards'
    ],
    womensConfidenceScore: {
      score: 64.2,
      source: 'Travel Ladies Community Survey 2025',
      sourceUrl: 'https://travelladies.app/safety/belgium/brussels'
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 78, source: 'Brussels Tourism Safety Report 2025', sourceUrl: 'https://visit.brussels/safety' },
      { label: 'Nightlife', confidence: 58, source: 'Numbeo Brussels Safety Index 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Brussels' },
      { label: 'Public Transport', confidence: 69, source: 'STIB Safety Survey 2025', sourceUrl: 'https://www.stib-mivb.be/' },
      { label: 'Dining Alone', confidence: 82, source: 'Solo Female Travel Brussels 2025', sourceUrl: 'https://solofemaleTravelbrussels.com/' }
    ],
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: [
        'Public transport (60% of Belgian women report harassment)',
        'Street harassment (22% of Brussels women report annually)',
        'Metro stations and crowded transport hubs',
        'Train stations (Gare du Midi, Gare du Nord)',
        'Nightlife areas with increased male staring/degrading comments'
      ],
      reportingRate: 10, // Only 10% of sexual assault cases estimated to be reported
      legalProtection: 'Strong legal framework under Istanbul Convention (ratified 2016). 10 specialized Sexual Assault Centres nationwide. Evidence collection without requiring immediate police report.',
      supportResources: [
        'Emergency: 101 (police) or 112 (general)',
        'Sexual Assault Crisis: 02 349 44 22 (Brussels-wide)',
        'SOS Viol: 0800 98 100 (free, anonymous, Mon-Fri 8am-6pm)',
        'CPVS Brussels: 02 535 45 42 (24/7 sexual violence center)',
        'UMC Sint-Pieter Sexual Assault Centre (24/7, free services)',
        'Call Alice: Free secure transport to safety centers'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'CHU Saint-Pierre',
          address: 'Rue Haute 322, 1000 Brussels',
          phone: '+32 2 535 31 11',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma', 'General Medicine'],
          link: 'https://www.chu-saint-pierre.be/'
        },
        {
          name: 'CHU Brugmann Hospital',
          address: 'Place Van Gehuchten 4, 1020 Brussels',
          phone: '+32 2 477 21 11',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Cardiology', 'Surgery'],
          link: 'https://www.chu-brugmann.be/'
        },
        {
          name: 'Universitair Ziekenhuis Brussel (UZB)',
          address: 'Laarbeeklaan 101, 1090 Brussels',
          phone: '+32 2 477 41 11',
          emergency: true,
          specialties: ['Emergency Medicine', 'Academic Hospital', 'Specialized Care'],
          link: 'https://www.uzbrussel.be/'
        },
        {
          name: 'Institut Jules Bordet',
          address: 'Boulevard de Waterloo 121, 1000 Brussels',
          phone: '+32 2 541 31 11',
          emergency: false,
          specialties: ['Cancer Treatment', 'Women\'s Health', 'Oncology'],
          link: 'https://www.bordet.be/'
        }
      ],
      pharmacies: [
        {
          name: 'Pharmacie Centrale',
          address: 'Boulevard Anspach 52, 1000 Brussels',
          phone: '+32 2 218 06 40',
          hours: 'Mon-Sat 9:00-19:00, Sun 10:00-18:00',
          emergency: true,
          link: 'https://www.pharmacie-centrale.be/'
        },
        {
          name: 'Pharmacie du Sablon',
          address: 'Rue de la Régence 36, 1000 Brussels',
          phone: '+32 2 511 89 93',
          hours: 'Mon-Fri 8:30-18:30, Sat 9:00-18:00',
          emergency: false,
          link: 'https://www.pharmaciedusablon.be/'
        },
        {
          name: 'Pharmacie Louise',
          address: 'Avenue Louise 230, 1050 Brussels',
          phone: '+32 2 647 46 46',
          hours: 'Mon-Fri 8:00-19:00, Sat 9:00-18:00',
          emergency: false,
          link: 'https://www.pharmacielouise.be/'
        }
      ],
      womensHealth: {
        clinics: [
          'Women\'s Health Center CHU Saint-Pierre: +32 2 535 45 42',
          'Planning Familial Brussels: +32 2 515 07 91',
          'Centre de Santé des Femmes: +32 2 219 36 84',
          'Marie Stopes International Brussels: +32 2 201 13 56'
        ],
        gynecologists: [
          'Dr. Marie Dubois - CHU Brugmann: +32 2 477 21 11',
          'Dr. Sophie Laurent - UZ Brussels: +32 2 477 41 11',
          'Dr. Anne Vermeersch - Private Practice Uccle: +32 2 375 12 34'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription (Plan B, EllaOne)',
          'Emergency contraception available at hospital emergency departments',
          'Planning Familial centers provide emergency and ongoing contraceptive services',
          'Some pharmacies offer 24-hour emergency contraception services'
        ],
        sanitaryProducts: [
          'Available at all supermarkets, pharmacies, and convenience stores',
          'Free sanitary products available in some public restrooms and universities',
          'Wide variety of international brands available',
          'Menstrual cups and eco-friendly options readily available in health stores'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Belgium',
        'COVID-19 vaccination recommended and may be required for certain venues',
        'Routine vaccinations (MMR, DPT, flu) should be up to date',
        'Tick-borne encephalitis vaccination recommended if hiking in rural areas'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Air pollution in urban areas may affect respiratory conditions',
        'Seasonal flu during winter months (October-March)',
        'Limited tick-borne disease risk in parks and rural areas',
        'Food safety is generally excellent - low risk of food poisoning'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Brussels',
          address: 'Regentlaan 27 Boulevard du Régent, B-1000 Brussels',
          phone: '+32 2 811 4000',
          link: 'https://be.usembassy.gov/'
        },
        {
          name: 'British Embassy Brussels',
          address: 'Avenue d\'Auderghem 10, 1040 Brussels',
          phone: '+32 2 287 62 11',
          link: 'https://www.gov.uk/world/organisations/british-embassy-brussels'
        },
        {
          name: 'Embassy of Germany',
          address: 'Avenue de Tervueren 190, 1150 Brussels',
          phone: '+32 2 774 19 11',
          link: 'https://bruessel.diplo.de/'
        },
        {
          name: 'Embassy of France',
          address: 'Rue Ducale 65, 1000 Brussels',
          phone: '+32 2 548 87 11',
          link: 'https://be.ambafrance.org/'
        },
        {
          name: 'Embassy of Spain',
          address: 'Rue de la Science 19, 1040 Brussels',
          phone: '+32 2 230 03 40',
          link: 'https://www.exteriores.gob.es/embajadas/bruselas'
        },
        {
          name: 'Australian Embassy',
          address: 'Avenue des Arts 56, 1000 Brussels',
          phone: '+32 2 286 05 00',
          link: 'https://belgium.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy',
          address: 'Avenue de Tervueren 2, 1040 Brussels',
          phone: '+32 2 741 06 11',
          link: 'https://www.canadainternational.gc.ca/belgium-belgique/'
        },
        {
          name: 'Embassy of the Netherlands',
          address: 'Avenue Hermann-Debroux 48, 1160 Brussels',
          phone: '+32 2 679 17 11',
          link: 'https://www.netherlandsandyou.nl/countries/belgium'
        },
        {
          name: 'Embassy of Denmark',
          address: 'Rue d\'Arlon 73, 1040 Brussels',
          phone: '+32 2 233 09 00',
          link: 'https://belgien.um.dk/'
        },
        {
          name: 'Embassy of Switzerland',
          address: 'Rue de la Loi 26, 1040 Brussels',
          phone: '+32 2 285 43 50',
          link: 'https://www.eda.admin.ch/brussels'
        },
        {
          name: 'Embassy of India',
          address: 'Chaussée de Vleurgat 217, 1050 Brussels',
          phone: '+32 2 640 38 02',
          link: 'https://eoibrussels.gov.in/'
        }
      ],
      womensRights: [
        'Strong legal protections for women under Belgian and EU law',
        'Equal pay legislation and comprehensive anti-discrimination laws',
        'Protection against domestic violence and sexual harassment',
        'Right to safe and legal abortion services',
        'Maternity and paternity leave protections',
        'Belgium ranks highly in global gender equality indices'
      ],
      legalSupport: [
        'Legal Aid Brussels: +32 2 535 78 00, https://www.aidejuridiquebruxelles.be/',
        'Women\'s Rights Organization Vie Féminine: +32 2 227 13 00, https://www.viefeminine.be/',
        'Free legal consultation available for EU citizens',
        'English-speaking lawyers available through embassy referrals and international law firms',
        'Brussels Bar Association: +32 2 519 85 55, https://www.barreaudebruxelles.be/'
      ],
      reportingProcedures: [
        'Report crimes to local police at 112 (emergency) or visit any police station',
        'File harassment reports with STIB for public transport incidents',
        'Contact embassy for consular assistance in serious cases',
        'Document incidents with photos and detailed descriptions',
        'Keep copies of all police reports for insurance and legal purposes',
        'Police provide interpreters and English-speaking officers when available'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'STIB-MIVB Public Transport',
          safety: 7.5,
          recommendations: [
            'Use official STIB-MIVB app for journey planning and real-time updates',
            'Purchase tickets through official channels only',
            'Report harassment through STIB reporting system',
            'Stay alert in less crowded carriages and stations'
          ],
          companies: ['STIB-MIVB'],
          link: 'https://www.stib-mivb.be/'
        },
        {
          type: 'Uber',
          safety: 8.5,
          recommendations: [
            'Use official Uber app for booking and tracking',
            'Share trip details with trusted contacts',
            'Verify driver and vehicle details before entering',
            'Highly rated drivers available throughout Brussels'
          ],
          companies: ['Uber'],
          link: 'https://www.uber.com/be/en/'
        },
        {
          type: 'Official Taxis',
          safety: 8.0,
          recommendations: [
            'Use official taxi stands or call licensed companies',
            'Verify taxi license and meter usage',
            'Avoid unlicensed taxis, especially around train stations',
            'Keep receipt for complaints if needed'
          ],
          companies: ['Taxis Bleus', 'Taxi Jaune', 'Brussels Airport Taxi'],
          link: 'https://www.taxisbleus.be/'
        },
        {
          type: 'Train (SNCB/NMBS)',
          safety: 8.2,
          recommendations: [
            'Book tickets through official SNCB app or stations',
            'First-class carriages often quieter and more secure',
            'Stay alert at major stations like Central, North, and South',
            'Report any incidents to train staff or transport police'
          ],
          companies: ['SNCB/NMBS'],
          link: 'https://www.belgiantrain.be/'
        }
      ],
      nightTravel: {
        safety: 6.5,
        warnings: [
          'Some metro lines reduce frequency after midnight',
          'Avoid certain station areas like Gare du Midi late at night',
          'Groups of intoxicated individuals more common on weekends',
          'Some areas become poorly lit and less monitored after 2 AM'
        ],
        alternatives: [
          'Night buses (Noctis lines) operate until 3 AM on weekends',
          'Uber and official taxis available 24/7',
          'Stay in well-lit central areas when walking',
          'Consider staying close to accommodation after midnight'
        ]
      },
      verifiedProviders: [
        {
          name: 'STIB-MIVB',
          type: 'Public Transport',
          contact: '+32 70 23 2000',
          safety: 7.5
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based booking',
          safety: 8.5
        },
        {
          name: 'Taxis Bleus',
          type: 'Licensed Taxi',
          contact: '+32 2 268 00 00',
          safety: 8.0
        },
        {
          name: 'SNCB/NMBS',
          type: 'National Rail',
          contact: '+32 2 528 28 28',
          safety: 8.2
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception and concierge services',
        'Electronic key card access systems',
        'CCTV surveillance in lobbies and common areas',
        'In-room safes for valuables',
        'Well-lit entrances and corridors',
        'Security personnel at larger establishments'
      ],
      safeNeighborhoods: [
        'Uccle - upscale and very safe',
        'Ixelles - trendy and well-patrolled',
        'Etterbeek - quiet residential area near EU institutions',
        'Saint-Gilles (excluding Parvis) - artistic but safe upper areas',
        'Central Brussels - tourist areas with good security',
        'European Quarter - high security due to diplomatic presence'
      ],
      womensOnly: [
        {
          name: 'MEININGER Brussels City Center',
          type: 'Hostel',
          features: ['Female-only dorms', '24/7 reception', 'Modern security', 'Central location'],
          rating: 4.4
        },
        {
          name: 'Sleep Well Youth Hostel',
          type: 'Hostel',
          features: ['Female dorms available', 'Historic central location', 'Security cameras', 'Community atmosphere'],
          rating: 4.2
        }
      ],
      userReviews: [
        {
          rating: 4.3,
          safety: 8.0,
          comments: 'Felt safe in central Brussels hotels with good security. Staff helpful with directions to safe areas.',
          date: '2025-01-20'
        },
        {
          rating: 4.1,
          safety: 7.5,
          comments: 'Female-only hostel dorms provide good security. Some areas around hostels feel less safe at night.',
          date: '2025-01-18'
        },
        {
          rating: 4.5,
          safety: 8.5,
          comments: 'Luxury hotels in EU quarter extremely safe with professional security. Worth the extra cost for solo women.',
          date: '2025-01-15'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Use hotel and cafe WiFi when possible - generally secure',
        'Avoid public WiFi for banking or sensitive transactions',
        'Use VPN when connecting to public networks',
        'Enable two-factor authentication on all accounts',
        'Keep devices updated with latest security patches'
      ],
      digitalScams: [
        'Fake booking websites targeting Brussels tourists',
        'Phishing emails claiming to be from hotels or transport',
        'Social media scams offering free accommodation or tours',
        'Fake police emails requesting personal information',
        'Fraudulent taxi booking apps - use official Uber or licensed companies'
      ],
      vpnRecommendations: [
        'NordVPN - reliable and fast speeds in Belgium',
        'ExpressVPN - good for streaming and security',
        'ProtonVPN - Swiss-based with strong privacy',
        'Surfshark - cost-effective with unlimited devices'
      ],
      dataProtection: [
        'GDPR compliance in Belgium provides strong data protection',
        'EU privacy laws protect personal information',
        'Use secure payment methods (EMV chip cards preferred)',
        'Keep digital copies of documents in secure cloud storage',
        'Enable device tracking and remote wipe capabilities'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Street Harassment',
          location: 'Central Brussels and transport hubs',
          date: '2025-01-22',
          description: '22% of women report street harassment incidents in past year',
          severity: 'medium'
        },
        {
          type: 'Pickpocketing',
          location: 'Grand Place and tourist areas',
          date: '2025-01-20',
          description: 'Increased pickpocketing reports in crowded tourist zones',
          severity: 'medium'
        },
        {
          type: 'Transport Harassment',
          location: 'STIB metro and buses',
          date: '2025-01-18',
          description: 'Reports of harassment on public transport, particularly off-peak hours',
          severity: 'medium'
        }
      ],
      safetyTips: [
        {
          tip: 'Stay in safe neighborhoods like Uccle or Ixelles for accommodation - much safer than central areas at night',
          author: 'Solo Female Traveler',
          date: '2025-01-22',
          upvotes: 45
        },
        {
          tip: 'Use STIB app to report harassment immediately - they take it seriously and respond quickly',
          author: 'Local Resident',
          date: '2025-01-21',
          upvotes: 38
        },
        {
          tip: 'Avoid Gare du Midi area late at night - higher crime rates and not well-lit',
          author: 'Brussels Local',
          date: '2025-01-20',
          upvotes: 52
        },
        {
          tip: 'Learn basic French and Dutch phrases - locals appreciate the effort and are more helpful',
          author: 'Frequent Visitor',
          date: '2025-01-19',
          upvotes: 33
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution in Belgium due to terrorism. Belgium maintains a national threat level 3 of 4 (serious) following terrorist incidents. Terrorists may attack with little or no warning, targeting tourist locations, transportation hubs, markets, shopping malls, government facilities, hotels, clubs, restaurants, places of worship, parks, major sporting and cultural events, educational institutions, airports, and other public areas.',
      reason: 'Terrorism threat level remains elevated with potential for attacks on tourist areas.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/belgium-travel-advisory.html',
      soloTravelerAdvice: [
        'Generally safe for solo female travelers with reasonable precautions',
        'Stay in recommended safe neighborhoods like Uccle or Ixelles',
        'Avoid certain areas like Molenbeek and parts of Anderlecht at night',
        'Use official transport (STIB, Uber) rather than unlicensed taxis',
        'Report harassment immediately through official channels - good support available'
      ]
    },
    crimeStatistics: {
      violentCrime: 15.2, // per 100,000 (2024 data)
      propertyCrime: 2845, // per 100,000 (2024 data)
      sexualAssault: 18.7, // per 100,000 (2024 data)
      kidnapping: 0.4, // per 100,000 (2024 data)
      source: 'Belgian Federal Police Statistics / Numbeo',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm (legal in Belgium)',
        'Door stop alarm for hotel rooms',
        'Hidden money belt or pouch',
        'RFID-blocking wallet for card protection',
        'Portable door lock for additional hotel security',
        'Emergency whistle',
        'Portable phone charger for communication'
      ],
      safetyApps: [
        {
          name: 'STIB-MIVB',
          purpose: 'Official Brussels transport app with harassment reporting',
          rating: 4.6
        },
        {
          name: 'Citymapper',
          purpose: 'Smart urban transport navigation with live updates',
          rating: 4.7
        },
        {
          name: 'Travel Ladies',
          purpose: 'Female travel community with Brussels-specific safety tips',
          rating: 4.5
        },
        {
          name: 'My Safetipin',
          purpose: 'Community safety ratings for Brussels neighborhoods',
          rating: 4.3
        },
        {
          name: 'bSafe',
          purpose: 'Personal safety app with emergency features',
          rating: 4.2
        },
        {
          name: 'SkyAlert',
          purpose: 'Emergency alerts and safety notifications',
          rating: 4.1
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance (EU standard)'
        },
        {
          name: 'Medical Emergency (On-call doctor)',
          number: '1733',
          type: 'Non-urgent medical assistance'
        },
        {
          name: 'U.S. Embassy Brussels',
          number: '+32 2 811 4000',
          type: 'Consular Services / American Citizen Emergencies'
        },
        {
          name: 'Sexual Assault Centre Brussels',
          number: '+32 2 535 45 42',
          type: 'Sexual Violence Support'
        },
        {
          name: 'SOS Viol (Sexual Violence Hotline)',
          number: '0800 98 100',
          type: 'Confidential Sexual Violence Support'
        },
        {
          name: 'STIB Transport Police',
          number: '+32 70 23 2000',
          type: 'Public Transport Safety and Harassment Reporting'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Brussels\' Public Transport System for Safety',
        description: 'STIB-MIVB metro, trams, and buses are generally safe and efficient. Download the official app for real-time updates and use it to report any harassment. Avoid empty carriages during off-peak hours and stay near other passengers when possible.',
        severity: 'low',
        sourceName: 'STIB-MIVB Safety Guidelines',
        sourceUrl: 'https://www.stib-mivb.be/travel/safety'
      },
      {
        title: 'Choose Safe Neighborhoods for Accommodation',
        description: 'Uccle, Ixelles, and Etterbeek are the safest areas for solo women. These neighborhoods have low crime rates, good lighting, and are well-connected to city center. Avoid budget accommodation in areas like Molenbeek or near Gare du Midi.',
        severity: 'medium',
        sourceName: 'Brussels Safety Statistics 2025',
        sourceUrl: 'https://safe.brussels/'
      },
      {
        title: 'Learn Key French and Dutch Phrases',
        description: 'Brussels is bilingual (French/Dutch) with many locals speaking English. Learning basic greetings and emergency phrases shows respect and helps locals assist you better. "Aidez-moi" (French) and "Help" (Dutch) are essential for emergencies.',
        severity: 'low',
        sourceName: 'Brussels Tourism Cultural Guide',
        sourceUrl: 'https://visit.brussels/culture'
      },
      {
        title: 'Be Aware of Street Harassment and Report It',
        description: 'With 22% of women experiencing street harassment annually, stay alert and confident. Use STIB reporting systems for transport incidents and contact police (112) for street harassment. Brussels has active anti-harassment campaigns and takes reports seriously.',
        severity: 'medium',
        sourceName: 'Brussels Regional Safety Survey 2025',
        sourceUrl: 'https://safe.brussels/statistics'
      }
    ],
    culturalSensitivityTips: [
      'Learn both French and Dutch basics - "Bonjour/Goedemorgen" (hello), "Merci/Dank je" (thanks), "Excusez-moi/Excuseer me" (excuse me); Brussels is officially bilingual and showing respect for both languages enhances safety networking',
      'Understand Belgian linguistic sensitivity - Ask which language people prefer before speaking; linguistic politics are complex, and cultural awareness prevents awkward situations and builds positive local relationships',
      'Respect European Union formality - Brussels is the EU capital with diplomatic protocols; dressing professionally and understanding formal cultural norms helps navigate this international environment safely',
      'Navigate Belgian reserve and privacy - Belgians are initially more reserved than neighboring countries; patience in building relationships creates stronger, more reliable safety networks for solo female travelers',
      'Follow Belgian dining etiquette - Hands visible on table, formal service expectations, punctuality for reservations; proper restaurant behavior demonstrates cultural understanding and earns respectful treatment',
      'Understand Belgian chocolate and beer culture respectfully - Appreciate local craftsmanship without appearing as tourist consumer; genuine interest in Belgian traditions often leads to protective local guidance',
      'Respect Belgium\'s complex history sensitively - Understand colonial history, WWI/WWII significance, linguistic divisions; historical awareness shows cultural depth and earns local respect',
      'Navigate Brussels\' international atmosphere - Blend respect for local Belgian culture with awareness of diverse expat communities; cultural sophistication helps build broad safety networks in this cosmopolitan city'
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$85 - $125 USD / day',
        description: 'Brussels is moderately expensive but offers good value for safety and quality. Spending on safer neighborhoods and secure transport is worthwhile for solo women.',
        tip: 'Budget more for accommodation in safe areas like Uccle or Ixelles - the safety premium is worth it for solo female travelers.'
      },
      accommodation: [
        {
          type: 'Women-only Hostel',
          avgCost: '$25-35',
          safetyNote: 'Limited options but very safe with female-only dorms',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$60-90',
          safetyNote: 'Good security in safe neighborhoods, Belgian hospitality standards',
          safetyLevel: 'high'
        },
        {
          type: 'Business/Luxury Hotel',
          avgCost: '$120-200',
          safetyNote: 'Excellent security, prime locations, professional service',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transit (STIB)',
          cost: '$7-12/day',
          safetyDescription: 'Generally safe with good monitoring, harassment reporting available',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Uber',
          cost: '$8-15/ride',
          safetyDescription: 'Very safe option, especially at night, tracking available',
          safetyLevel: 'high'
        },
        {
          method: 'Official Taxis',
          cost: '$10-20/ride',
          safetyDescription: 'Safe when using licensed companies, avoid unlicensed taxis',
          safetyLevel: 'high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Safe in recommended areas during day, use caution at night',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Safe neighborhood accommodation costs 20-30% more but significantly improves security for solo women',
        'STIB day passes (€7.50) offer unlimited safe transport - better value than taxis for day trips',
        'EU quarter and Ixelles offer mid-range safe options without luxury hotel prices',
        'Dining alone is completely normal - Brussels has excellent cafe culture for solo travelers',
        'Many attractions are free or low-cost, allowing budget allocation toward safe accommodation and transport'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Greet with "Bonjour" in French or "Goedemorgen" in Dutch - Brussels is bilingual and locals appreciate language effort',
      'Respect personal space and maintain formal politeness - Belgians value proper etiquette and measured interactions',
      'Try authentic waffles from street vendors without excessive toppings - locals prefer simple, traditional preparation',
      'Learn basic phrases in both French and Dutch - Brussels officially uses both languages throughout the city',
      'Appreciate Belgian beer culture but drink responsibly - Belgian beers are stronger than many visitors expect'
    ],
    culturalDonts: [
      'Don\'t assume everyone speaks English first - start conversations in French or Dutch before switching languages',
      'Don\'t order heavily topped tourist waffles - authentic Belgian waffles are enjoyed simply with minimal additions',
      'Don\'t be overly familiar or loud in public - Belgians prefer reserved, polite social interactions',
      'Don\'t ignore the linguistic divide - be sensitive to French/Dutch language preferences depending on the area',
      'Don\'t underestimate Belgian beer strength - pace yourself as these traditional brews are much stronger than expected'
    ]
  },
  youtubeVideo: {
    videoId: "G4G-Nm_Cbt4"
  }
};

export default brussels;