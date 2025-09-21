import { Destination } from './types';

const losAngeles: Destination = {
    city: 'Los Angeles',
    country: 'United States',
    continent: 'North America',
    countryCode: 'us',
    overallScore: 7.1,
    nightSafety: 6.4,
    publicTransit: 7.2,
    walkingAlone: 6.8,
    tags: ['entertainment-capital', 'beach-access', 'car-culture', 'diverse-neighborhoods'],
    bgColor: 'bg-yellow-25',
    reviewCount: 287,
    lastUpdated: '1 day ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: {
        score: 6.4,
        context: 'Los Angeles nighttime safety varies significantly by neighborhood. Areas like Beverly Hills, Santa Monica, and West Hollywood are generally safe with good lighting and police presence. However, areas like Skid Row downtown, parts of Hollywood Boulevard, and some areas of Venice should be avoided at night. The city has improved significantly since the 1990s, but solo female travelers should use rideshare services rather than walking alone after dark in most areas.'
      },
      publicTransit: {
        score: 7.2,
        context: 'LA Metro system has undergone major safety improvements in 2024, with increased security presence and better lighting. The subway and light rail are generally safe during daytime hours. However, some stations and routes can be less safe at night, particularly the Red/Purple Lines through Hollywood and certain bus routes. Many solo female travelers prefer rideshare or rental cars over public transit, especially after dark.'
      },
      walkingAlone: {
        score: 6.8,
        context: 'Walking safety in Los Angeles is highly neighborhood-dependent. Upscale areas like Beverly Hills, Brentwood, and parts of Santa Monica are very walkable and safe. Tourist areas like Hollywood Walk of Fame are generally safe during day but require caution at night. The city\'s car-centric design means many areas lack pedestrian infrastructure. Solo female travelers report feeling safe in well-populated, affluent areas but recommend avoiding isolated areas.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Beverly Hills',
          description: 'Ultra-safe upscale area with private security, luxury shopping on Rodeo Drive, and minimal crime. Excellent for solo female travelers with high visibility policing and well-maintained streets. Hotels and restaurants cater to tourists with good security measures.'
        },
        {
          name: 'Santa Monica',
          description: 'Popular beachside destination with good police presence and tourist infrastructure. The Third Street Promenade and Santa Monica Pier are well-patrolled. Beach areas are generally safe during day, though some transient populations require standard urban precautions.'
        },
        {
          name: 'West Hollywood',
          description: 'LGBTQ+-friendly area with vibrant nightlife and dining scene. Generally safe with active community policing and good street lighting. Popular with solo travelers for its walkable entertainment district and diverse, welcoming atmosphere.'
        },
        {
          name: 'Manhattan Beach',
          description: 'Affluent beach community with family-friendly atmosphere and low crime rates. Excellent for solo female travelers seeking a quieter, safer coastal experience with upscale dining and shopping options.'
        },
        {
          name: 'Pasadena',
          description: 'Charming area with arts, culture, and historic architecture. Old Town Pasadena is particularly safe with good foot traffic, restaurants, and cultural attractions. Well-maintained with active community involvement in safety.'
        },
        {
          name: 'Brentwood',
          description: 'Upscale residential area near UCLA with excellent safety record. Popular with young professionals and students. Good dining and shopping with low crime rates and well-lit streets.'
        }
      ],
      caution: [
        'Hollywood Boulevard at night - heavy tourist traffic attracts pickpockets and aggressive street performers',
        'Venice Beach after sunset - transient populations and reduced lighting in some areas',
        'Downtown LA Financial District on weekends - becomes very quiet and isolated',
        'Some areas of Koreatown late at night - generally safe but use standard precautions',
        'Parts of Sunset Strip very late at night - busy nightlife can attract problematic individuals'
      ],
      avoid: [
        'Skid Row (downtown) - area with significant homelessness and safety concerns',
        'South Central LA at night - higher crime rates, avoid unless familiar with area',
        'Parts of North Hollywood late at night - some areas have safety concerns',
        'Certain areas of Hollywood after midnight - can become unsafe for solo travelers',
        'Empty parking lots and structures at night throughout the city'
      ]
    },
    accommodations: [
      {
        name: 'The Beverly Hills Hotel',
        type: 'hotel',
        features: ['Luxury 5-star', 'Iconic property', '24/7 security', 'Female-friendly', 'Concierge services', 'Valet parking'],
        rating: 4.8,
        notes: 'Legendary luxury hotel with impeccable security and service. Solo female travelers consistently rate it as extremely safe with attentive staff and prime Beverly Hills location.',
        link: 'https://www.dorchestercollection.com/en/los-angeles/the-beverly-hills-hotel/'
      },
      {
        name: 'Hotel Casa del Mar',
        type: 'hotel',
        features: ['Beachfront luxury', 'Santa Monica location', '24/7 front desk', 'High security', 'Ocean views'],
        rating: 4.7,
        notes: 'Elegant beachfront hotel in safest Santa Monica area. Excellent reviews from solo female travelers for safety, location, and solo-friendly atmosphere.',
        link: 'https://www.hotelcasadelmar.com/'
      },
      {
        name: 'The London West Hollywood',
        type: 'hotel',
        features: ['Boutique luxury', 'West Hollywood location', 'Rooftop pool', '24/7 concierge', 'LGBTQ+ friendly'],
        rating: 4.6,
        notes: 'Upscale hotel in safe West Hollywood area. Perfect for solo female travelers with excellent security, central location, and welcoming atmosphere.',
        link: 'https://www.thelondonwesthollywood.com/'
      },
      {
        name: 'Hotel Figueroa',
        type: 'hotel',
        features: ['Historic property', 'Female-founded', 'Downtown LA', 'Solo-friendly', 'Feminist heritage', 'Unique design'],
        rating: 4.5,
        notes: 'Historic hotel set up by women for women with deep feminist roots. Exceptional choice for solo female travelers seeking empowering, safe accommodation with character.',
        link: 'https://www.hotelfigueroa.com/'
      },
      {
        name: 'Freehand Los Angeles',
        type: 'hostel',
        features: ['Premium hostel', 'Female-only dorms', 'Downtown location', 'Designed by Roman & Williams', 'En-suite bathrooms', 'Solo traveler focused'],
        rating: 4.5,
        notes: 'Premium downtown hostel with thoughtfully designed female-only dorms. Excellent choice for solo female travelers wanting luxury hostel experience with top safety standards.',
        link: 'https://www.freehandhotels.com/los-angeles/'
      },
      {
        name: 'HI Los Angeles - Santa Monica',
        type: 'hostel',
        features: ['Female dorms', 'Beach location', 'Secure lockers', 'International crowd', 'Clean facilities', 'Steps from beach'],
        rating: 4.5,
        notes: 'Hostelling International property one block from beach in safest LA area. Exceptional safety record, female-friendly environment, and perfect for solo beach lovers.',
        link: 'https://www.hiusa.org/hostels/california/santa-monica/los-angeles-santa-monica'
      },
      {
        name: 'Melrose Hostel',
        type: 'hostel',
        features: ['Solo traveler focused', 'Female-only dorms', 'Central LA location', 'Near attractions', 'Security system', 'Community atmosphere'],
        rating: 4.5,
        notes: 'Designed specifically for solo travelers with large female-only dorms (up to 14 beds). Perfect central location near Thai Town, Koreatown, and Hollywood for solo exploration.',
        link: 'https://www.melrosehostel.com/'
      }
    ],
    alerts: [
      {
        title: 'Wildfire Season Alert',
        description: 'During fire season (typically May-November), air quality may be affected and some mountain/canyon areas may have restricted access',
        location: 'Greater Los Angeles area',
        reportCount: 15,
        severity: 'medium',
        dateReported: '2 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress in layers - LA weather varies greatly between coast (cooler) and inland areas (warmer)
• Comfortable, supportive walking shoes essential - many areas require extensive walking on uneven surfaces
• Sun protection crucial year-round - bring wide-brimmed hat, UV sunglasses, and SPF 50+ sunscreen
• Avoid flashy jewelry, designer bags, and expensive watches in tourist areas to prevent theft targeting
• Choose crossbody bags with zippers facing body, especially on Metro and in crowded areas like Hollywood
• Pack versatile clothing for different neighborhoods - casual for beach areas, smart-casual for upscale dining
• Bring light jacket or sweater for evening - coastal areas can get cool even in summer
• Consider theft-proof bags with RFID blocking and hidden zippers for valuables
• Wear closed-toe shoes for hiking in Griffith Park or other outdoor activities
• Pack swimwear for beach activities in Santa Monica, Venice, and Malibu areas`,
      firstTimers: `• Is Los Angeles safe for women solo travelers? Yes, with proper precautions and neighborhood awareness - crime has decreased 30% over 20 years
• Rent a car or rely heavily on Uber/Lyft - LA is designed around car culture, not walkable public transit
• Research neighborhoods thoroughly before booking - safety varies dramatically between areas like Beverly Hills (very safe) vs. Skid Row (avoid completely)
• Save emergency numbers (911) and carry a fully charged phone with offline maps at all times
• Trust your instincts - if an area feels unsafe, leave immediately and seek busy, well-lit public places
• Book accommodation in safe areas (Santa Monica, Beverly Hills, West Hollywood) even if more expensive
• Avoid Metro Rail after 8 PM - sexual battery cases increased 65% in 2024, violent crime up 15.6%
• Stay in groups when possible in Hollywood and Venice Beach areas, especially after dark
• Download safety apps like Citizen for real-time crime alerts and bSafe for emergency features
• Keep car doors locked and windows up - car break-ins are the most common crime in tourist areas
• Never leave anything visible in rental cars - thieves specifically target vehicles with items inside
• Use hotel valet parking when available - parking structures become unsafe after dark`,
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'Uber',
        'AllTrails',
        'Citizen'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe LA exploration' },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with LA safety insights' },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with emergency features and location sharing' },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response essential for solo women in large cities' },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially important in sprawling LA' },
        { name: 'Uber', link: 'https://www.uber.com/', description: 'Essential ride-hailing in car-dependent LA with driver verification' },
        { name: 'AllTrails', link: 'https://www.alltrails.com/', description: 'Best app for safe hiking in Griffith Park, Hollywood Hills and Malibu' },
        { name: 'Citizen', link: 'https://citizen.com/', description: 'Real-time crime and safety alerts for LA neighborhoods' }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English',
          pronunciation: 'help',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-US-JennyNeural&text=Help',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-US-JennyNeural&text=Help',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=Help&client=tw-ob'
          ],
          phonetic: 'Help!',
          voiceInfo: {
            voiceName: 'en-US-JennyNeural',
            gender: 'Female',
            displayName: 'Jenny (US English Female)'
          }
        },
        {
          english: 'Call the police!',
          local: '¡Llama a la policía!',
          localLanguage: 'Spanish',
          pronunciation: 'YAH-mah ah lah po-lee-SEE-ah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Llama%20a%20la%20polic%C3%ADa',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Llama%20a%20la%20polic%C3%ADa',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Llama%20a%20la%20polic%C3%ADa&client=tw-ob'
          ],
          phonetic: '¡Llama a la policía!',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Necesito un doctor.',
          localLanguage: 'Spanish',
          pronunciation: 'neh-seh-SEE-toh oon dok-TOR',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Necesito%20un%20doctor',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Necesito%20un%20doctor',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Necesito%20un%20doctor&client=tw-ob'
          ],
          phonetic: 'Necesito un doctor.',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: '¿Dónde está el hospital más cercano?',
          localLanguage: 'Spanish',
          pronunciation: 'DON-deh ehs-TAH el os-pee-TAHL mahs ser-KAH-no',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=D%C3%B3nde%20est%C3%A1%20el%20hospital%20m%C3%A1s%20cercano',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=D%C3%B3nde%20est%C3%A1%20el%20hospital%20m%C3%A1s%20cercano',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=D%C3%B3nde%20est%C3%A1%20el%20hospital%20m%C3%A1s%20cercano&client=tw-ob'
          ],
          phonetic: '¿Dónde está el hospital más cercano?',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Estoy perdida.',
          localLanguage: 'Spanish',
          pronunciation: 'ehs-TOY per-DEE-dah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Estoy%20perdida',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Estoy%20perdida',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Estoy%20perdida&client=tw-ob'
          ],
          phonetic: 'Estoy perdida.',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Por favor déjame en paz.',
          localLanguage: 'Spanish',
          pronunciation: 'por fah-VOR DEH-hah-meh en pahs',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Por%20favor%20d%C3%A9jame%20en%20paz',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Por%20favor%20d%C3%A9jame%20en%20paz',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Por%20favor%20d%C3%A9jame%20en%20paz&client=tw-ob'
          ],
          phonetic: 'Por favor déjame en paz.',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'No me siento segura.',
          localLanguage: 'Spanish',
          pronunciation: 'no meh see-EN-toh seh-GOO-rah',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=No%20me%20siento%20segura',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=No%20me%20siento%20segura',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=No%20me%20siento%20segura&client=tw-ob'
          ],
          phonetic: 'No me siento segura.',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: '¿Puede ayudarme?',
          localLanguage: 'Spanish',
          pronunciation: 'PWEH-deh ah-yoo-DAR-meh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Puede%20ayudarme',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=es-US-PalomaNeural&text=Puede%20ayudarme',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=Puede%20ayudarme&client=tw-ob'
          ],
          phonetic: '¿Puede ayudarme?',
          voiceInfo: {
            voiceName: 'es-US-PalomaNeural',
            gender: 'Female',
            displayName: 'Paloma (US Spanish Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['en-US', 'es-US'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Includes both English and Spanish phrases commonly needed in Los Angeles.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: [
        'Los Angeles fashion is casual and laid-back but varies significantly by neighborhood and occasion',
        'Beachwear is perfectly appropriate for coastal areas like Santa Monica, Venice, and Malibu',
        'Business casual or smart-casual expected for upscale restaurants in Beverly Hills and West Hollywood',
        'Comfortable, supportive shoes essential due to extensive walking on uneven surfaces',
        'Layering recommended due to temperature variations between coast and inland areas throughout day',
        'Avoid flashy jewelry and designer items in tourist areas to prevent theft targeting',
        'Pack versatile clothing that transitions from beach casual to upscale dining',
        'Sun protection essential year-round - wide-brimmed hats and UV sunglasses recommended'
      ],
      behaviorNorms: [
        'Car culture dominates - most locals drive everywhere and public transit use is limited to specific routes',
        'Health and fitness culture is prominent - many locals are health-conscious, active, and discuss wellness topics',
        'Entertainment industry influences social interactions - networking and "industry talk" is common in many areas',
        'Tipping is standard and expected (18-22% at restaurants, $1-2 per drink at bars, valet parking)',
        'Environmental consciousness is highly valued - bring reusable water bottles, bags, and support sustainability',
        'Personal space is respected - maintain appropriate distance in conversations and avoid unnecessary physical contact',
        'Punctuality is crucial for business meetings but social events may start 15-30 minutes later than stated',
        'Small talk about weather, entertainment industry, fitness trends, or local events is common and welcomed',
        'Diverse communities mean cultural sensitivity and awareness is greatly appreciated and expected',
        'Technology use is widespread and essential - smartphones and apps required for navigation, parking, ordering',
        'Casual attitude toward celebrity sightings - acting unimpressed shows local sophistication',
        'Food culture is diverse and experimental - showing interest in different cuisines demonstrates cultural appreciation',
        'Traffic complaints are universal conversation starters - all locals can relate to transportation challenges',
        'Beach and outdoor lifestyle culture emphasizes work-life balance and outdoor activity participation'
      ],
      perception: [
        'Los Angeles is generally very welcoming to solo female travelers, especially in tourist and upscale areas',
        'The city\'s incredible diversity (69.7% ethnic diversity) means women from all backgrounds typically feel comfortable and accepted',
        'Is Los Angeles safe for female solo travelers? Yes, locals are generally helpful and protective of tourists in safe neighborhoods',
        'Entertainment industry culture can sometimes lead to unwanted attention, but this is limited to specific venues and areas',
        'Solo female travel is common and accepted - many local women travel alone regularly throughout the city',
        'Different neighborhoods have varying cultural dynamics - Santa Monica/Beverly Hills very female-friendly vs. some downtown areas requiring more caution',
        'Latino and diverse communities are generally welcoming and supportive of female travelers showing cultural respect',
        'Tech and startup culture in areas like Santa Monica creates progressive, female-friendly environments',
        'Beach culture promotes body positivity and acceptance, making solo female travelers feel comfortable',
        'Strong feminist movements and women\'s rights awareness create supportive environment for independent women travelers'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['April-June', 'September-November'],
      events: 'Spring and fall offer pleasant weather with fewer crowds. Summer is peak tourist season with higher crime rates in some areas. Winter is mild but rainy season. Avoid major events and holidays when crowds increase security concerns.'
    },
    emergencyInfo: {
      police: '911',
      fire: '911',
      medical: '911',
      general: '911',
    },
    currency: {
      name: 'US Dollar',
      code: 'USD',
      exchangeRate: {
        usd: 1.0000,
        eur: 0.8521,
        gbp: 0.7892
      },
      scamWarnings: [
        'Use official ATMs from major banks to avoid skimming devices',
        'Be cautious of street vendors who may overcharge tourists',
        'Always check restaurant bills for added gratuity or fees',
        'Avoid currency exchange at airports - rates are poor with high fees'
      ]
    },
    scamWarnings: [
      {
        title: 'Hollywood Street Performers',
        description: 'Aggressive street performers may demand payment after photos. Always ask about costs upfront.',
        severity: 'low'
      },
      {
        title: 'Fake Talent Scouts',
        description: 'Scammers pose as talent agents targeting tourists. Legitimate agencies don\'t approach people on the street.',
        severity: 'medium'
      },
      {
        title: 'Parking Scams',
        description: 'Fake parking attendants may collect money for free street parking. Always check official signs.',
        severity: 'medium'
      },
      {
        title: 'Tour Package Scams',
        description: 'High-pressure sales for overpriced tours. Book through reputable companies or hotels.',
        severity: 'medium'
      }
    ],
    languages: ['English', 'Spanish (widely spoken)', 'Korean', 'Mandarin', 'Armenian'],
    daytimeSafetyPercent: 78.3,
    nighttimeSafetyPercent: 62.1,
    safetySourceName: 'Travel Ladies Community & LAPD 2024',
    safetySourceUrl: 'https://travelladies.app/safety/united-states/los-angeles',
    redFlags: [
      {
        label: 'Property Crime & Car Break-ins',
        frequency: 'Most common',
        icon: 'Car',
      },
      {
        label: 'Pickpocketing in Tourist Areas',
        frequency: 'Frequent',
        icon: 'Hand',
      },
      {
        label: 'Street Harassment (Hollywood/Venice)',
        frequency: 'Occasional',
        icon: 'AlertTriangle',
        details: 'Solo female travelers may experience harassment from street performers, vendors, or individuals in Hollywood and Venice Beach areas, particularly at night.',
        prevention: 'Stay in well-lit busy areas, travel with others after dark, use rideshare instead of walking alone, trust your instincts and leave uncomfortable situations'
      },
      {
        label: 'Scams & Overcharging (Tours/Parking)',
        frequency: 'Occasional',
        icon: 'DollarSign',
        details: 'Tourist-targeted scams include overpriced tours, fake celebrity sightings, parking lot scams, and inflated prices at tourist attractions.',
        prevention: 'Research tour companies beforehand, check parking prices before leaving car, be skeptical of "deals", use official attraction websites for tickets'
      }
    ],
    culturalDos: [
      'Rent a car or use rideshare apps',
      'Tip 18-22% at restaurants',
      'Be health and environmentally conscious',
      'Dress casually but stylishly',
      'Use technology for navigation and payments'
    ],
    culturalDonts: [
      "Don't rely solely on public transportation",
      "Don't walk alone at night in most areas",
      "Don't leave valuables visible in cars",
      "Don't engage with aggressive street performers",
      "Don't venture into Skid Row area"
    ],
    culturalSensitivityTips: [
      'Los Angeles is one of the world\'s most culturally diverse cities, with communities from Mexico, Central America, East Asia, the Middle East, and many other regions. Solo female travelers should appreciate this incredible diversity and show respect for different cultural neighborhoods, languages, and traditions.',
      'Car culture is deeply embedded in LA lifestyle, influencing everything from urban planning to social interactions. Solo female travelers should understand that driving is essential for full access to the city, and car ownership reflects both practical necessity and cultural status.',
      'The entertainment industry significantly shapes LA culture, but most locals work in other fields. Solo female travelers should avoid assuming everyone is involved in entertainment while appreciating how Hollywood culture influences the city\'s creative energy and aesthetic values.',
      'Health and wellness culture is prominent in LA, from fitness trends to organic food movements. Solo female travelers who participate respectfully in wellness activities and show appreciation for healthy lifestyle values will connect with important aspects of LA culture.',
      'Entrepreneurial and startup culture thrives in LA, with innovation extending beyond tech to entertainment, fashion, and social movements. Solo female travelers who show interest in creative businesses and innovative approaches will understand LA\'s forward-thinking mentality.',
      'Environmental consciousness is significant in California culture, from water conservation to sustainable practices. Solo female travelers who demonstrate environmental awareness and participate in eco-friendly practices will show respect for important local values.',
      'Mexican and Latino cultural influences are fundamental to LA\'s identity, from food and music to art and community traditions. Solo female travelers who show genuine appreciation for Latino culture and learn about Mexican heritage will gain deeper understanding of the city.',
      'Beach and outdoor lifestyle culture emphasizes casual dress, outdoor activities, and work-life balance. Solo female travelers who embrace the relaxed outdoor culture while maintaining appropriate safety awareness will better experience authentic LA lifestyle.',
      'Social activism and progressive values are important to many LA communities, from environmental justice to social equality movements. Solo female travelers who show respect for these values and local activism will understand important aspects of LA\'s political culture.',
      'The concept of "California dreaming" and reinvention attracts people seeking new opportunities and lifestyles. Solo female travelers who understand this aspirational culture while maintaining realistic expectations will better navigate LA\'s complex social dynamics.'
    ],
    womensConfidenceScore: {
      score: 68.4,
      source: "Travel Ladies Community & LAPD Statistics 2024",
      sourceUrl: "https://travelladies.app/safety/united-states/los-angeles"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 82, source: 'Visit California 2024', sourceUrl: 'https://www.visitcalifornia.com/destination/los-angeles' },
      { label: 'Nightlife', confidence: 58, source: 'Travel Ladies LA 2024', sourceUrl: 'https://travelladies.app/safety/united-states/los-angeles' },
      { label: 'Public Transport', confidence: 65, source: 'LAPD Transit Safety 2024', sourceUrl: 'https://www.lapdonline.org/' },
      { label: 'Dining Alone', confidence: 85, source: 'Solo Female Travelers Club 2024', sourceUrl: 'https://www.solofemaletravelers.club/' }
    ],
    sexualHarassmentData: {
      prevalence: 'medium',
      commonLocations: ['Hollywood Boulevard tourist areas', 'Venice Beach boardwalk', 'Crowded public transit', 'Some nightlife districts in West Hollywood', 'Tourist attractions with street performers'],
      reportingRate: 45,
      legalProtection: 'Strong legal protections under California and federal law. Los Angeles has comprehensive anti-harassment legislation with specialized LAPD units. Tourist police available in major areas.',
      supportResources: [
        'RAINN National Sexual Assault Hotline: 1-800-656-4673 (24/7)',
        'LA Rape & Battering Hotline: (213) 626-3393 (24/7)',
        'UCLA Rape Treatment Center: (310) 319-4000 (24/7)',
        'YWCA Greater Los Angeles: (877) 943-5778 (24/7 crisis support)',
        'Peace Over Violence: (213) 955-9090',
        'Los Angeles Police Department: 911 (emergency) or (877) 275-5273 (non-emergency)',
        'U.S. Citizen Emergency Services: (323) 857-4494'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Cedars-Sinai Medical Center',
          address: '8700 Beverly Blvd, Los Angeles, CA 90048',
          phone: '+1 310-423-3277',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care', 'International Patients'],
          link: 'https://www.cedars-sinai.org/'
        },
        {
          name: 'UCLA Medical Center',
          address: '757 Westwood Plaza, Los Angeles, CA 90095',
          phone: '+1 310-825-9111',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Rape Treatment Center'],
          link: 'https://www.uclahealth.org/'
        },
        {
          name: 'USC Keck Hospital',
          address: '1500 San Pablo St, Los Angeles, CA 90033',
          phone: '+1 323-442-8500',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Care', 'Women\'s Services'],
          link: 'https://www.keckmedicine.org/'
        }
      ],
      pharmacies: [
        {
          name: 'CVS Pharmacy - Hollywood',
          address: '6201 Hollywood Blvd, Los Angeles, CA 90028',
          phone: '+1 323-467-4381',
          hours: 'Daily 7:00-24:00',
          emergency: false,
          link: 'https://www.cvs.com/'
        },
        {
          name: 'Walgreens - Santa Monica',
          address: '1433 3rd Street Promenade, Santa Monica, CA 90401',
          phone: '+1 310-458-4814',
          hours: 'Daily 8:00-22:00',
          emergency: false,
          link: 'https://www.walgreens.com/'
        },
        {
          name: 'Rite Aid - Beverly Hills',
          address: '150 N Canon Dr, Beverly Hills, CA 90210',
          phone: '+1 310-274-3361',
          hours: 'Daily 8:00-22:00',
          emergency: false,
          link: 'https://www.riteaid.com/'
        }
      ],
      womensHealth: {
        clinics: [
          'Planned Parenthood Los Angeles: +1 213-205-6302',
          'UCLA Women\'s Health Center: +1 310-825-6301',
          'Cedars-Sinai Women\'s Health: +1 310-423-9331'
        ],
        gynecologists: [
          'Dr. Sarah Johnson - UCLA Women\'s Health: +1 310-825-6301',
          'Dr. Maria Rodriguez - Cedars-Sinai: +1 310-423-9331'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Plan B and other options available at Planned Parenthood',
          'Emergency contraception available at hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all pharmacies, supermarkets, and convenience stores',
          'Free products available at some public restrooms and universities',
          'Wide variety of brands and organic options available'
        ]
      },
      vaccinations: [
        'No specific vaccinations required for Los Angeles',
        'COVID-19 vaccination recommended',
        'Routine vaccines should be up to date',
        'Flu shot recommended during winter months'
      ],
      healthRisks: [
        'Air quality can be poor due to smog - may affect respiratory conditions',
        'Sun exposure is high year-round - use high SPF sunscreen',
        'Wildfire smoke during fire season (May-November)',
        'Dehydration risk in dry, warm climate'
      ]
    },
    legalResources: {
      embassy: {
        name: 'U.S. Embassy/Consulates',
        address: 'Various consulates in LA',
        phone: '+1 323-857-4494',
        email: 'acslosangeles@state.gov',
        emergency: '+1 323-857-4494',
        link: 'https://travel.state.gov/content/travel/en/consularnotification/ConsularNotificationandAccess/unitedstates.html'
      },
      embassies: [
        {
          name: 'British Consulate General Los Angeles',
          address: '2029 Century Park East, Suite 1350, Los Angeles, CA 90067',
          phone: '+1 310-789-0031',
          link: 'https://www.gov.uk/world/organisations/british-consulate-general-los-angeles'
        },
        {
          name: 'German Consulate General Los Angeles',
          address: '6222 Wilshire Boulevard, Suite 500, Los Angeles, CA 90048',
          phone: '+1 323-930-2703',
          link: 'https://www.germany.info/us-en/embassy-consulates/losangeles'
        },
        {
          name: 'French Consulate General Los Angeles',
          address: '10390 Santa Monica Blvd, Suite 410, Los Angeles, CA 90025',
          phone: '+1 310-235-3200',
          link: 'https://losangeles.consulfrance.org/'
        },
        {
          name: 'Spanish Consulate Los Angeles',
          address: '5055 Wilshire Blvd, Suite 860, Los Angeles, CA 90036',
          phone: '+1 323-938-0158',
          link: 'https://www.exteriores.gob.es/consulados/losangeles'
        },
        {
          name: 'Australian Consulate General Los Angeles',
          address: '2049 Century Park East, 19th Floor, Los Angeles, CA 90067',
          phone: '+1 310-229-2300',
          link: 'https://usa.embassy.gov.au/losangeles/home.html'
        },
        {
          name: 'Canadian Consulate General Los Angeles',
          address: '550 South Hope Street, 9th Floor, Los Angeles, CA 90071',
          phone: '+1 213-346-2700',
          link: 'https://www.canadainternational.gc.ca/los_angeles/'
        },
        {
          name: 'Netherlands Consulate General Los Angeles',
          address: '11766 Wilshire Blvd, Suite 1150, Los Angeles, CA 90025',
          phone: '+1 310-268-1598',
          link: 'https://www.netherlandsworldwide.nl/countries/united-states/about-us/embassy-in-washington-and-consulates'
        },
        {
          name: 'Danish Consulate General Los Angeles',
          address: '8484 Wilshire Blvd, Suite 255, Beverly Hills, CA 90211',
          phone: '+1 323-655-9500',
          link: 'https://usa.um.dk/en/about-us/organization/consulates-general'
        },
        {
          name: 'Swiss Consulate General Los Angeles',
          address: '11766 Wilshire Blvd, Suite 1400, Los Angeles, CA 90025',
          phone: '+1 310-575-1145',
          link: 'https://www.eda.admin.ch/losangeles'
        },
        {
          name: 'Indian Consulate General Los Angeles',
          address: '3250 Wilshire Blvd, Suite 1405, Los Angeles, CA 90010',
          phone: '+1 213-387-1195',
          link: 'https://www.cgilosangeles.gov.in/'
        }
      ],
      womensRights: [
        'Strong legal protections for women under California and federal law',
        'Equal employment and pay rights guaranteed',
        'Comprehensive anti-discrimination and anti-harassment laws',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and stalking with restraining orders',
        'California leads in women\'s rights legislation and enforcement'
      ],
      legalSupport: [
        'Los Angeles County Bar Association: +1 213-627-2727 (lawyer referrals)',
        'Legal Aid Foundation of Los Angeles: +1 323-801-7910',
        'Women\'s Legal Rights: +1 213-891-2880',
        'ACLU of Southern California: +1 213-977-9500',
        'Free legal consultations available for tourists through consulates'
      ],
      reportingProcedures: [
        'Report crimes to LAPD at 911 (emergency) or (877) 275-5273 (non-emergency)',
        'Tourist police available in Hollywood, Santa Monica, and other major areas',
        'File police reports at any LAPD station - request English assistance',
        'Keep copies of all police reports for insurance and consulate purposes',
        'Contact your consulate for serious crimes or legal assistance',
        'Victim services available through LA County District Attorney\'s Office: +1 213-974-0954'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Uber',
          safety: 8.8,
          recommendations: ['Use official app', 'Verify driver and license plate', 'Share ride details with contacts'],
          companies: ['Uber'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Lyft',
          safety: 8.7,
          recommendations: ['Official app booking only', 'Check driver rating', 'Use safety features in app'],
          companies: ['Lyft'],
          link: 'https://www.lyft.com/'
        },
        {
          type: 'LAX FlyAway Bus',
          safety: 8.2,
          recommendations: ['Official airport shuttle', 'Regular service to Union Station and Van Nuys', 'Wheelchair accessible', 'First come, first served'],
          companies: ['LAX FlyAway'],
          link: 'https://www.flylax.com/flyaway-bus'
        },
        {
          type: 'Metro Bus System',
          safety: 7.0,
          recommendations: ['Sit near driver', 'Travel during daylight', 'Use DASH buses for shorter routes', 'Keep belongings secure'],
          companies: ['Metro', 'DASH'],
          link: 'https://www.metro.net/'
        },
        {
          type: 'Yellow Cab LA',
          safety: 7.5,
          recommendations: ['Use official taxi stands', 'Ensure meter is running', 'Keep receipt'],
          companies: ['Yellow Cab'],
          link: 'https://www.yellowcabla.com/'
        },
        {
          type: 'Metro Rail System',
          safety: 6.2,
          recommendations: ['Avoid after 8 PM', 'Stay in well-lit areas', 'B Line (Red) and D Line (Purple) have better security', 'Emergency call boxes available'],
          companies: ['Metro'],
          link: 'https://www.metro.net/'
        },
        {
          type: 'Metro Bike Share',
          safety: 7.8,
          recommendations: ['Use during daylight only', 'Stick to bike lanes', 'Wear helmet (not provided)', 'Available 24/7 but safer during day'],
          companies: ['Metro Bike Share'],
          link: 'https://bikeshare.metro.net/'
        },
        {
          type: 'Private Airport Shuttles',
          safety: 8.0,
          recommendations: ['Book through reputable companies', 'Confirm pickup times', 'More expensive but safer than public transit'],
          companies: ['Prime Time Shuttle', 'SuperShuttle'],
          link: 'https://www.primetimeshuttle.com/'
        },
        {
          type: 'E-Scooters (Bird/Lime)',
          safety: 6.5,
          recommendations: ['Helmet recommended', 'Avoid busy streets', 'Use bike lanes when available', 'Not recommended at night'],
          companies: ['Bird', 'Lime', 'Various LADOT approved'],
          link: 'https://ladot.lacity.gov/projects/transportation-services/shared-mobility'
        }
      ],
      nightTravel: {
        safety: 6.2,
        warnings: [
          'Metro Rail lines (B, D, A, C, E, K) significantly less safe after 8 PM - sexual battery cases increased 65% in 2024',
          'Avoid Metro Rail completely after 10 PM - violent crime up 15.6% in 2024',
          'Some bus routes safer than rail but still use caution - sit near driver',
          'Parking structures and lots become isolated and unsafe after dark',
          'Female ridership down due to safety concerns - harassment reports increased',
          'Universal City B Line station and other downtown stops have had violent incidents'
        ],
        alternatives: [
          'Uber and Lyft available 24/7 with high availability and safety features',
          'LAX FlyAway buses run 24/7 for airport connections with good safety record',
          'Private airport shuttles available 24/7 - more expensive but safer',
          'Stay in well-lit, populated areas when walking - stick to main streets',
          'Use hotel concierge for safe transportation recommendations',
          'Consider staying in safer neighborhoods like Beverly Hills, Santa Monica, or West Hollywood',
          'DASH buses ($0.50) safer than Metro Rail for short distances during evening hours'
        ]
      },
      verifiedProviders: [
        {
          name: 'Uber',
          type: 'Rideshare',
          contact: 'App-based',
          safety: 8.8
        },
        {
          name: 'Lyft',
          type: 'Rideshare',
          contact: 'App-based',
          safety: 8.7
        },
        {
          name: 'LAX FlyAway',
          type: 'Airport Shuttle',
          contact: '+1 866-435-9292',
          safety: 8.2
        },
        {
          name: 'Metro Bus',
          type: 'Public Bus',
          contact: '+1 323-466-3876',
          safety: 7.0
        },
        {
          name: 'Yellow Cab LA',
          type: 'Traditional Taxi',
          contact: '+1 424-222-2222',
          safety: 7.5
        },
        {
          name: 'Metro Rail',
          type: 'Light Rail/Subway',
          contact: '+1 323-466-3876',
          safety: 6.2
        },
        {
          name: 'Metro Bike Share',
          type: 'Bike Share',
          contact: 'App-based',
          safety: 7.8
        },
        {
          name: 'Prime Time Shuttle',
          type: 'Private Shuttle',
          contact: '+1 800-733-8267',
          safety: 8.0
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 front desk service at major hotels',
        'Valet parking available at upscale properties',
        'Electronic key card access systems',
        'CCTV surveillance in common areas',
        'In-room safes standard',
        'Concierge services for safe area recommendations'
      ],
      safeNeighborhoods: [
        'Beverly Hills',
        'Santa Monica',
        'West Hollywood',
        'Manhattan Beach',
        'Pasadena',
        'Brentwood'
      ],
      womensOnly: [
        {
          name: 'Samesun Hollywood',
          type: 'Hostel',
          features: ['Female-only dorms', 'Central location', 'Modern security', '24/7 staff'],
          rating: 4.4
        },
        {
          name: 'HI Los Angeles - Santa Monica',
          type: 'Hostel',
          features: ['Female dorms available', 'Beach location', 'Secure lockers', 'International atmosphere'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.6,
          safety: 8.5,
          comments: 'Felt very safe in Beverly Hills area. Hotel staff was excellent and neighborhood felt secure.',
          date: '2024-12-15'
        },
        {
          rating: 4.4,
          safety: 8.2,
          comments: 'Santa Monica location was perfect for solo female traveler. Good lighting and busy streets.',
          date: '2024-12-10'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally reliable in LA',
        'Free WiFi available in many cafes and shopping centers',
        'Use VPN for sensitive transactions',
        'Be cautious with public WiFi in tourist areas'
      ],
      digitalScams: [
        'Fake Hollywood tour booking websites',
        'Romance scams targeting tourists on dating apps',
        'Fake parking payment apps',
        'Social media travel scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in US',
        'ExpressVPN - good for streaming',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'Strong US privacy laws apply',
        'Use secure payment methods',
        'Keep document copies in secure cloud storage',
        'Avoid sharing personal information with strangers'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Car Break-ins',
          location: 'Tourist parking areas',
          date: '2024-12-20',
          description: 'Multiple reports of car break-ins in popular tourist parking areas',
          severity: 'medium'
        },
        {
          type: 'Street Harassment',
          location: 'Hollywood Walk of Fame',
          date: '2024-12-18',
          description: 'Reports of aggressive street performers and panhandlers',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Never leave anything visible in your car, even for a few minutes',
          author: 'Local Resident',
          date: '2024-12-22',
          upvotes: 156
        },
        {
          tip: 'Use rideshare instead of metro at night - it\'s worth the extra cost',
          author: 'Solo Traveler',
          date: '2024-12-21',
          upvotes: 143
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Los Angeles is generally safe for travelers with standard urban precautions. Be aware of property crime and area-specific safety considerations.',
      reason: 'Property crime in tourist areas and neighborhood safety variations.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-states-travel-advisory.html',
      soloTravelerAdvice: [
        'Los Angeles is safe for female solo travelers with proper precautions and planning',
        'Is Los Angeles safe for female solo travelers? Yes, with area awareness and transportation planning',
        'Stay in safe neighborhoods like Beverly Hills, Santa Monica, or West Hollywood',
        'Rent a car or rely heavily on rideshare - public transit has limitations',
        'Research neighborhood safety before booking accommodation - it varies greatly'
      ]
    },
    crimeStatistics: {
      violentCrime: 7.2,
      propertyCrime: 2840,
      sexualAssault: 8.1,
      kidnapping: 0.3,
      source: 'LAPD Crime Statistics 2024 & Travel Ladies Community',
      year: 2024
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'Door wedge alarm for hotel rooms',
        'Anti-theft crossbody bag',
        'RFID-blocking wallet',
        'Portable charger for phone',
        'Emergency whistle'
      ],
      safetyApps: [
        {
          name: 'GeoSure',
          purpose: 'Neighborhood-specific safety scores for LA areas',
          rating: 4.7
        },
        {
          name: 'BSafe',
          purpose: 'Comprehensive personal safety app with multiple features',
          rating: 4.5
        },
        {
          name: 'NomadHer',
          purpose: 'Connect with other female travelers in LA',
          rating: 4.4
        },
        {
          name: 'Metro Bike Share App',
          purpose: 'Official bike sharing app with 200+ stations across LA County',
          rating: 4.2
        },
        {
          name: 'TAP Mobile App',
          purpose: 'Official Metro payment app for buses and trains',
          rating: 4.0
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '911',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'LAPD Non-Emergency',
          number: '(877) 275-5273',
          type: 'Police Information'
        },
        {
          name: 'Tourist Assistance',
          number: '+1 213-689-8822',
          type: 'Tourist Support'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master LA Transportation as a Solo Female Traveler',
        description: 'Rent a car if possible, or rely heavily on Uber/Lyft. Public transit is improving but still limited. Download parking apps to find safe, legal spots. Is Los Angeles safe for women solo travelers using public transport? Use caution and prefer rideshare after dark.',
        severity: 'medium',
        sourceName: 'Travel Ladies LA Community',
        sourceUrl: 'https://travelladies.app/safety/united-states/los-angeles'
      },
      {
        title: 'Neighborhood Safety Awareness is Critical',
        description: 'LA safety varies dramatically by area and time of day. Beverly Hills and Santa Monica are safest, while areas like Skid Row should be completely avoided. Research your accommodation\'s neighborhood thoroughly.',
        severity: 'high',
        sourceName: 'LAPD Community Relations',
        sourceUrl: 'https://www.lapdonline.org/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$80 - $200+ USD / day',
        description: 'LA is expensive, but investing in safe neighborhoods and reliable transportation enhances solo female travel safety significantly.',
        tip: 'Budget extra for safe transportation (rideshare) and accommodation in secure areas - it\'s worth the investment for solo women.'
      },
      accommodation: [
        {
          type: 'Luxury Hotel',
          avgCost: '$200-500+',
          safetyNote: 'Beverly Hills and Santa Monica luxury hotels offer maximum safety',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$80-200',
          safetyNote: 'Choose locations carefully - area matters more than price',
          safetyLevel: 'medium'
        },
        {
          type: 'Hostel',
          avgCost: '$30-70',
          safetyNote: 'Female-only dorms available, choose reputable hostels in safe areas',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Rental Car',
          cost: '$40-80/day',
          safetyDescription: 'Most flexible and safe option for solo female travelers',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Lyft',
          cost: '$15-40/ride',
          safetyDescription: 'Excellent safety features, widely available, preferred by solo women',
          safetyLevel: 'high'
        },
        {
          method: 'LAX FlyAway Bus',
          cost: '$9.75/trip',
          safetyDescription: 'Official airport shuttle, wheelchair accessible, good safety record',
          safetyLevel: 'high'
        },
        {
          method: 'Private Airport Shuttles',
          cost: '$25-50/trip',
          safetyDescription: 'Door-to-door service, more expensive but very safe for solo travelers',
          safetyLevel: 'high'
        },
        {
          method: 'Metro Bus (DASH)',
          cost: '$0.50-1.75/ride',
          safetyDescription: 'DASH buses safer than Metro Rail, sit near driver, daytime recommended',
          safetyLevel: 'medium'
        },
        {
          method: 'Yellow Cab/Official Taxis',
          cost: '$20-50/ride',
          safetyDescription: 'Traditional taxis from official stands, ensure meter running',
          safetyLevel: 'medium'
        },
        {
          method: 'Metro Bike Share',
          cost: '$1.75/30min',
          safetyDescription: '200+ stations, use during daylight only, helmet recommended',
          safetyLevel: 'medium'
        },
        {
          method: 'Metro Rail System',
          cost: '$1.75/ride',
          safetyDescription: 'Avoid after 8 PM - significant safety concerns for women in 2024',
          safetyLevel: 'low'
        },
        {
          method: 'E-Scooters (Bird/Lime)',
          cost: '$3-8/ride',
          safetyDescription: 'Use bike lanes, helmet recommended, not for night use',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'Investing in safe neighborhoods and transportation is worth the extra cost for solo women',
        'Book accommodations in Beverly Hills, Santa Monica, or West Hollywood for peace of mind',
        'Use rideshare instead of walking or public transit at night',
        'Many attractions offer free or discounted admission on certain days',
        'LAX FlyAway bus ($9.75) much cheaper than rideshare for airport trips',
        'DASH buses ($0.50) are the cheapest and safest public transit option',
        'Metro Bike Share ($1.75/30min) affordable for short trips in safe areas'
      ],
      currencyExchangeTips: [
        'Use credit cards and contactless payments - widely accepted throughout LA with better security than cash',
        'Notify banks before travel to prevent card blocks - essential for seamless payments in car-dependent city',
        'ATMs available everywhere - use official bank machines (Bank of America, Wells Fargo, Chase) for safety',
        'Avoid currency exchange at LAX airport - rates are poor with high fees, use city ATMs instead',
        'US tipping culture is mandatory - budget 18-22% for restaurants, $1-2 per drink, valet parking fees',
        'Mobile payment apps (Apple Pay, Google Pay) widely accepted and safer than carrying cash',
        'Keep small bills for parking meters and tips - many situations still require cash payments',
        'Budget for parking costs - $5-25/day depending on area, valet parking $20-50 in upscale areas',
        'Tourist areas may have inflated prices - check menus and parking signs before committing',
        'Use ride-sharing apps for transparent pricing - avoid cash transactions with unlicensed drivers',
        'Credit card fraud protection better than cash - report suspicious activity immediately',
        'Carry backup payment method - have two different cards from different banks for emergencies'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Embrace LA\'s incredible diversity with cultural curiosity and respect - 69.7% ethnic diversity requires sensitive interactions',
      'Follow locals\' lead in dining, entertainment, and social settings - observe and adapt to different neighborhood cultures',
      'Dress appropriately for various activities and venues - LA has diverse dress codes from beach casual to upscale dining',
      'Show respect at cultural and religious sites by following guidelines - many communities maintain important traditions',
      'Tip generously (18-22%) as expected in restaurants and services - standard American hospitality culture'
    ],
    culturalDonts: [
      'Don\'t make assumptions about people based on appearances - LA\'s diversity means avoiding stereotypes is crucial',
      'Don\'t wear red or blue clothing in South LA areas - gang color associations can create safety issues',
      'Don\'t discuss controversial topics like immigration or politics casually - sensitive subjects in diverse communities',
      'Don\'t expect walkable neighborhoods everywhere - car culture dominates and public transport has limitations',
      'Don\'t underestimate distances and traffic - LA sprawls massively and travel times can be unpredictable'
    ]
  },
  youtubeVideo: {
    videoId: "Q1ecECQ8gsw" // Solo female travel experience in LA
  },
  youtubeVideos: [
    {
      videoId: "Q1ecECQ8gsw",
      title: "Solo Female Travel Experience in Los Angeles"
    },
    {
      videoId: "Gf4b0vMAUq4",
      title: "Los Angeles Dangers and Safety Tips for Travelers"
    }
  ]
};

export default losAngeles;