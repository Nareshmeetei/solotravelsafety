import { Destination } from './types';

const berlin: Destination = {
    city: 'Berlin',
    country: 'Germany',
    continent: 'Europe',
    countryCode: 'de',
    overallScore: 8.0,
    nightSafety: 7.6,
    publicTransit: 8.8,
    walkingAlone: 7.8,
    tags: ['insider-tips', 'safe', 'cultural-hub'],
    bgColor: 'bg-blue-25',
    reviewCount: 892,
    lastUpdated: '1 day ago',
    harassmentRisk: 'low-moderate',
    safetyBreakdown: {
      nightSafety: {
        score: 7.6,
        context: 'Is Berlin safe for solo female travellers at night? Generally yes, with safety index of 55.4 (2025 data). Central areas like Mitte, Prenzlauer Berg remain well-lit with police presence. However, avoid Leopoldplatz, Kottbusser Tor, and Görlitzer Park after dark. Sexual crimes increased 79% in 2024 (20 daily incidents), but absolute risk remains low. Berlin recorded 539,049 criminal offences in 2024.'
      },
      publicTransit: {
        score: 8.8,
        context: 'Berlin\'s BVG system (U-Bahn, S-Bahn, buses, trams) is extremely safe for solo female travelers with comprehensive security monitoring. Multiple female travelers confirm using it alone at night safely. Night services available with N-buses replacing U-Bahn. Jelbi app provides unified access to all transport modes.'
      },
      walkingAlone: {
        score: 7.8,
        context: 'Walking alone in Berlin is generally safe for women during day and evening. Crime rate of 13,500 per 100,000 inhabitants (2024). Stay alert in tourist areas like Alexanderplatz after 9 PM where travelers report men approaching women sitting alone. Well-lit main streets are safe, avoid isolated areas after dark.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Mitte',
          description: 'Central historic district with Brandenburg Gate, Museum Island. Very safe with excellent police presence, well-lit streets, and constant foot traffic. Major attractions and government buildings ensure high security.'
        },
        {
          name: 'Prenzlauer Berg',
          description: 'Former East Berlin area, now trendy residential neighborhood popular with families and young professionals. Extremely safe with cafes, boutiques, and excellent lighting. Highly recommended for solo female travelers.'
        },
        {
          name: 'Charlottenburg',
          description: 'Upscale western district with luxury shopping, fine dining, and cultural sites. Very safe area with wide boulevards, good lighting, and affluent atmosphere. Excellent for evening strolls.'
        },
        {
          name: 'Friedrichshain',
          description: 'Young, artistic neighborhood with vibrant nightlife and galleries. Generally safe but can be lively on weekends. East Side Gallery area safe during day, use caution at night.'
        },
        {
          name: 'Kreuzberg (East)',
          description: 'Multicultural area with excellent restaurants and cafes. Generally safe but more alternative culture. Some areas require caution late at night, stick to main streets.'
        },
        {
          name: 'Tiergarten',
          description: 'Large central park and government district. Safe during daylight hours with good foot traffic, but avoid isolated park areas after dark. Well-patrolled government area.'
        }
      ],
      caution: ['Parts of Neukölln after dark', 'Some Kreuzberg areas late at night', 'Warschauer Straße station area', 'Alexanderplatz after 9 PM'],
      avoid: ['Leopoldplatz at night', 'Kottbusser Tor after dark', 'Görlitzer Park after sunset', 'Isolated areas of Tiergarten at night']
    },
    accommodations: [
      {
        name: 'EastSeven Berlin Hostel',
        type: 'hostel',
        features: ['Female dorms', 'Secure access', 'Prenzlauer Berg location', '24/7 reception'],
        rating: 8.9,
        notes: 'Ultimate hangout hostel in safe Prenzlauer Berg with excellent security and female-friendly environment.',
        link: 'https://www.eastseven.de/'
      },
      {
        name: 'Generator Berlin Prenzlauer Berg',
        type: 'hostel',
        features: ['Modern design', 'Key card access', '24/7 reception', 'Female dorms'],
        rating: 8.7,
        notes: 'Contemporary hostel with excellent security features and safe Prenzlauer Berg location.',
        link: 'https://staygenerator.com/hostels/berlin-prenzlauer-berg'
      },
      {
        name: 'Pfefferbett Hostel',
        type: 'hostel',
        features: ['Women-only dorms', 'Schönhauser Allee', 'Secure entry', 'Local atmosphere'],
        rating: 8.5,
        notes: 'Boutique hostel with women-only dorms in safe area, highly rated for solo female travelers.',
        link: 'https://www.pfefferbett.de/'
      },
      {
        name: 'Kiez Hostel Berlin',
        type: 'hostel',
        features: ['24/7 staff', 'Secure room entry', 'Central Alexanderplatz', 'Female-friendly'],
        rating: 8.6,
        notes: 'Modern hostel with excellent security near major attractions and transport links.',
        link: 'https://www.kiezhostel.de/'
      },
      {
        name: 'Hilton Berlin',
        type: 'hotel',
        features: ['Premium security', 'Gendarmenmarkt location', '24/7 concierge', 'Central Mitte'],
        rating: 9.1,
        notes: 'Luxury hotel in safest central location with top-tier security and professional service.',
        link: 'https://www.hilton.com/en/hotels/bergdhi-hilton-berlin/'
      },
      {
        name: 'Adina Aparthotel Hackescher Markt',
        type: 'hotel',
        features: ['Apartment-style', 'Central location', 'Kitchen facilities', 'Secure access'],
        rating: 8.8,
        notes: 'Modern aparthotel in safe central area with independence and security for longer stays.',
        link: 'https://www.adinahotels.com/aparthotels/berlin/hackescher-markt/'
      }
    ],
    alerts: [
      {
        title: 'Increased Sexual Crime Reports',
        description: '79% increase in sexual crimes reported in 2024. Exercise extra caution in nightlife areas and avoid isolated locations after dark.',
        location: 'Citywide',
        reportCount: 28,
        severity: 'medium',
        dateReported: '3 days ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress warmly in winter - temperatures can drop below freezing
• Comfortable walking shoes essential for cobblestone streets
• Modest dress appreciated at religious sites and formal venues
• Layers recommended for unpredictable weather
• Waterproof jacket for frequent rain`,
      firstTimers: `• Berlin is generally safe for solo women with cultural awareness
• Learn basic German phrases - locals appreciate the effort
• Keep cash handy - many places still don't accept cards
• Download safety apps before arrival - Noonlight works with German emergency services
• Join free walking tours to learn the city safely while meeting others
• Use Citymapper and BVG app for seamless transport`,
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'BVG',
        'FreeNow',
        'Katwarn'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community for meeting other women travelers safely in Berlin', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with GPS tracking and emergency alerts for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response with automatic police dispatch', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing essential for solo travel safety in Berlin', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Germany safety insights', rating: 4.0 },
        { name: 'BVG', link: 'https://www.bvg.de/en/', description: 'Official Berlin public transport app for U-Bahn, S-Bahn, buses, trams', rating: 4.2 },
        { name: 'FreeNow', link: 'https://www.free-now.com/', description: 'Popular German taxi app with verified drivers and safety features', rating: 4.3 },
        { name: 'Katwarn', link: 'https://www.katwarn.de/', description: 'Official German emergency warning app for disasters and safety alerts', rating: 4.4 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Hilfe!',
          localLanguage: 'German',
          pronunciation: 'HIL-feh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Hilfe',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Hilfe',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Hilfe&client=tw-ob'
          ],
          phonetic: 'Hilfe!',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Rufen Sie die Polizei!',
          localLanguage: 'German',
          pronunciation: 'ROO-fen zee dee po-li-TSAI',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Rufen%20Sie%20die%20Polizei',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Rufen%20Sie%20die%20Polizei',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Rufen%20Sie%20die%20Polizei&client=tw-ob'
          ],
          phonetic: 'Rufen Sie die Polizei!',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Ich brauche einen Arzt.',
          localLanguage: 'German',
          pronunciation: 'ikh BROW-kheh I-nen ARTST',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Ich%20brauche%20einen%20Arzt',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Ich%20brauche%20einen%20Arzt',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Ich%20brauche%20einen%20Arzt&client=tw-ob'
          ],
          phonetic: 'Ich brauche einen Arzt.',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Wo ist das nächste Krankenhaus?',
          localLanguage: 'German',
          pronunciation: 'vo ist das NAYKH-steh KRANK-en-hows',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Wo%20ist%20das%20nächste%20Krankenhaus',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Wo%20ist%20das%20nächste%20Krankenhaus',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Wo%20ist%20das%20nächste%20Krankenhaus&client=tw-ob'
          ],
          phonetic: 'Wo ist das nächste Krankenhaus?',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Ich habe mich verirrt.',
          localLanguage: 'German',
          pronunciation: 'ikh HAH-beh mikh fer-EERT',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Ich%20habe%20mich%20verirrt',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Ich%20habe%20mich%20verirrt',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Ich%20habe%20mich%20verirrt&client=tw-ob'
          ],
          phonetic: 'Ich habe mich verirrt.',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Lassen Sie mich bitte in Ruhe.',
          localLanguage: 'German',
          pronunciation: 'LAS-sen zee mikh BI-teh in ROO-heh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Lassen%20Sie%20mich%20bitte%20in%20Ruhe',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Lassen%20Sie%20mich%20bitte%20in%20Ruhe',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Lassen%20Sie%20mich%20bitte%20in%20Ruhe&client=tw-ob'
          ],
          phonetic: 'Lassen Sie mich bitte in Ruhe.',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Ich fühle mich unsicher.',
          localLanguage: 'German',
          pronunciation: 'ikh FYOO-leh mikh OON-zi-kher',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Ich%20fühle%20mich%20unsicher',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Ich%20fühle%20mich%20unsicher',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Ich%20fühle%20mich%20unsicher&client=tw-ob'
          ],
          phonetic: 'Ich fühle mich unsicher.',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Können Sie mir helfen?',
          localLanguage: 'German',
          pronunciation: 'KYER-nen zee meer HEL-fen',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Können%20Sie%20mir%20helfen',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=de-DE-KatjaNeural&text=Können%20Sie%20mir%20helfen',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=de&q=Können%20Sie%20mir%20helfen&client=tw-ob'
          ],
          phonetic: 'Können Sie mir helfen?',
          voiceInfo: {
            voiceName: 'de-DE-KatjaNeural',
            gender: 'Female',
            displayName: 'Katja (German Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['de-DE'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: 'Berlin is casual and accepting of diverse styles. Dress warmly in winter, comfortably in summer. Business casual appropriate for upscale restaurants. Modest dress appreciated at religious sites and formal venues.',
      behaviorNorms: [
        'Germans value punctuality - arrive on time for appointments.',
        'Direct communication is normal and not meant to be rude.',
        'Wait for pedestrian signals even when streets are empty.',
        'Separate recycling is mandatory and taken seriously.',
        'Quiet hours (Ruhezeit) typically 22:00-06:00 and Sunday afternoons.',
        'English widely spoken, especially by younger people.',
        'Cash preferred in many smaller establishments.',
        'Greet with "Guten Tag" during day, "Guten Abend" in evening.',
        'Respect historical sites and memorials with appropriate behavior.',
        'Tipping 5-10% is customary in restaurants.'
      ],
      perception: 'Solo women travelers are very welcome in Berlin. German culture is progressive and accepting, with strong women\'s rights. The city is international and diverse, making it comfortable for solo female exploration with basic safety precautions.',
    },
    bestTimeToVisit: {
      safestMonths: ['May-September'],
      events: 'Spring through early fall offers warmest weather and extended daylight. Summer festivals and events create vibrant atmosphere. Winter can be cold but Christmas markets are magical.'
    },
    emergencyInfo: {
      police: '110', fire: '112', medical: '112', general: '115'
    },
    currency: {
      name: 'Euro', code: 'EUR', exchangeRate: {
      usd: 1.1737,
      eur: 1.0000,
      gbp: 0.8732
    },
    exchangeTips: [
      'Use Deutsche Bank, Commerzbank, or Sparkasse ATMs for best rates and security',
      'Cards accepted widely but cash still king - many restaurants and cafes cash-only',
      'Always carry €20-50 cash for small venues, markets, and public transport day tickets',
      'Avoid Reisebank and airport exchanges - rates up to 15% worse than bank ATMs',
      'Banking hours: 9 AM-4 PM Monday-Friday, some branches open Saturday mornings',
      'Use ATMs inside banks with security cameras to prevent card skimming',
      'Tipping culture: Round up or 5-10% for restaurants, €1-2 for drinks',
      'BVG transport accepts cards but cash often preferred for single tickets',
      'Keep receipts for VAT refunds on purchases over €25 for non-EU visitors'
    ],
    scamWarnings: [
        'Use official bank ATMs inside banks with security cameras to avoid card skimming.',
        'Many smaller venues still prefer cash - keep euros handy.'
      ]
    },
    scamWarnings: [
      {
        title: 'ATM Card Skimming',
        description: 'Avoid street ATMs. Use ATMs inside banks with security cameras to prevent card skimming and fraud.',
        severity: 'medium'
      },
      {
        title: 'Tourist Area Distraction',
        description: 'Men approaching women sitting alone in tourist areas, especially Alexanderplatz after 9 PM. Stay alert and move to busier areas.',
        severity: 'medium'
      },
      {
        title: 'Transport Pickpocketing',
        description: 'Keep belongings secure on public transport during rush hours and at busy stations.',
        severity: 'low'
      }
    ],
    languages: ['German', 'English (widely spoken, especially by younger people)'],
    daytimeSafetyPercent: 78.2,
    nighttimeSafetyPercent: 65.8,
    safetySourceName: 'Numbeo & Berlin Police Statistics 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Berlin',
    redFlags: [
      { label: 'Sexual Crime Increase (79%)', frequency: 'Increasing Trend', icon: 'Shield' },
      { label: 'Tourist Area Harassment', frequency: 'Occasional', icon: 'UserX' },
      { label: 'Nightlife District Issues', frequency: 'Common', icon: 'AlertTriangle' },
      { label: 'Drug Activity Zones', frequency: 'Localized', icon: 'Syringe' }
    ],
    culturalDos: [
      'Be punctual for all appointments.',
      'Learn basic German greetings.',
      'Respect quiet hours and neighbors.',
      'Separate recycling properly.',
      'Show respect at historical memorials.'
    ],
    culturalDonts: [
      'Don\'t jaywalk or ignore traffic signals.',
      'Don\'t be loud during quiet hours.',
      'Don\'t mix recycling - Germans take it seriously.',
      'Don\'t expect all places to accept cards.',
      'Don\'t be surprised by direct communication style.'
    ],
    womensConfidenceScore: {
      score: 74.6,
      source: "Berlin Police Statistics & Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Berlin"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'Germany Tourism Safety Report 2025', sourceUrl: 'https://www.germany.travel/safety' },
      { label: 'Nightlife', confidence: 68, source: 'Solo Female Travel Germany 2025', sourceUrl: 'https://www.solofemaleguide.com/germany' },
      { label: 'Public Transport', confidence: 88, source: 'BVG Safety Statistics 2025', sourceUrl: 'https://www.bvg.de/en/safety' },
      { label: 'Dining Alone', confidence: 82, source: 'Women Travel Solo Germany 2025', sourceUrl: 'https://womentravelsolo.com/berlin/' }
    ],
    sexualHarassmentData: {
      prevalence: 'low-moderate',
      commonLocations: ['Nightlife areas (Warschauer Straße, Friedrichshain)', 'Tourist gathering spots (Alexanderplatz after 9 PM)', 'Public transport during late hours', 'Isolated park areas (Görlitzer Park, Tiergarten)', 'Some residential areas in evening'],
      reportingRate: 32, // Only 8% report to law enforcement nationally
      legalProtection: 'Strong legal protections under German law. General Equal Treatment Act (AGG) prohibits sexual harassment. Maximum 15-year imprisonment for rape. 24/7 helpline available in 18 languages for violence-affected women.',
      supportResources: [
        'Emergency: 112 (English available)',
        'Police: 110 (immediate emergency)',
        'Violence Against Women Helpline: 08000 116 016 (24/7, free, 18 languages)',
        'Berlin Victim Support: +49 30 395 28 67',
        'White Ring Victim Support: 116 006',
        'German Institute for Human Rights: +49 30 259 359 0',
        'Women\'s Emergency Berlin: +49 30 615 75 96',
        'BIG Hotline (domestic violence): +49 30 611 03 00'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Charité - Universitätsmedizin Berlin',
          address: 'Charitéplatz 1, 10117 Berlin',
          phone: '+49 30 450 50',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Trauma Care'],
          link: 'https://www.charite.de/en/'
        },
        {
          name: 'Vivantes Klinikum Am Urban',
          address: 'Dieffenbachstraße 1, 10967 Berlin',
          phone: '+49 30 130 22 0',
          emergency: true,
          specialties: ['Emergency Care', 'General Medicine'],
          link: 'https://www.vivantes.de/en/'
        }
      ],
      pharmacies: [
        {
          name: 'Europa Apotheke',
          address: 'Tauentzienstraße 9-12, 10789 Berlin',
          phone: '+49 30 261 41 42',
          hours: 'Mon-Sat 8:00-20:00',
          emergency: false,
          link: 'https://www.europa-apotheke-berlin.de/'
        }
      ],
      womensHealth: {
        clinics: [
          'Charité Women\'s Clinic: +49 30 450 564 002',
          'Vivantes Women\'s Health: +49 30 130 14 0',
          'Pro Familia Berlin: +49 30 39 84 98 0'
        ],
        gynecologists: [
          'Dr. Med. Susanne Weber - Charité: +49 30 450 564 002',
          'Women\'s Health Center Berlin: +49 30 217 50 34'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription',
          'Emergency contraception available at hospitals 24/7'
        ],
        sanitaryProducts: [
          'Widely available at all supermarkets and pharmacies',
          'German and international brands readily available'
        ]
      },
      vaccinations: [
        'No special vaccinations required',
        'COVID-19 vaccination recommended',
        'Standard European vaccinations should be current',
        'Tick-borne encephalitis if visiting forested areas'
      ],
      healthRisks: [
        'Low risk of infectious diseases',
        'Cold weather risks in winter months',
        'Air pollution in some urban areas',
        'Tick-borne diseases in parks and forests'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Berlin',
          address: 'Clayallee 170, 14195 Berlin',
          phone: '+49 30 8305 0',
          link: 'https://de.usembassy.gov/'
        },
        {
          name: 'British Embassy Berlin',
          address: 'Wilhelmstraße 70, 10117 Berlin',
          phone: '+49 30 204 570',
          link: 'https://www.gov.uk/world/organisations/british-embassy-berlin'
        },
        {
          name: 'French Embassy Berlin',
          address: 'Pariser Platz 5, 10117 Berlin',
          phone: '+49 30 590 039 000',
          link: 'https://de.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy Berlin',
          address: 'Lichtensteinallee 1, 10787 Berlin',
          phone: '+49 30 254 007 0',
          link: 'https://www.exteriores.gob.es/embajadas/berlin'
        },
        {
          name: 'Australian Embassy Berlin',
          address: 'Wallstraße 76-79, 10179 Berlin',
          phone: '+49 30 880 088 0',
          link: 'https://germany.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Berlin',
          address: 'Leipziger Platz 17, 10117 Berlin',
          phone: '+49 30 203 120',
          link: 'https://www.canadainternational.gc.ca/germany-allemagne/'
        },
        {
          name: 'Netherlands Embassy Berlin',
          address: 'Klosterstraße 50, 10179 Berlin',
          phone: '+49 30 209 560',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/germany'
        },
        {
          name: 'Danish Embassy Berlin',
          address: 'Rauchstraße 1, 10787 Berlin',
          phone: '+49 30 505 050',
          link: 'https://tyskland.um.dk/'
        },
        {
          name: 'Swiss Embassy Berlin',
          address: 'Otto-von-Bismarck-Allee 4A, 10557 Berlin',
          phone: '+49 30 390 40 0',
          link: 'https://www.eda.admin.ch/berlin'
        },
        {
          name: 'Indian Embassy Berlin',
          address: 'Tiergartenstraße 17, 10785 Berlin',
          phone: '+49 30 257 950',
          link: 'https://www.indianembassyberlin.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Embassy Berlin',
        address: 'Clayallee 170, 14195 Berlin',
        phone: '+49 30 8305 0',
        email: 'BerlinACS@state.gov',
        link: 'https://de.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under German and EU law',
        'Comprehensive gender equality legislation',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment',
        'Equal employment and education opportunities'
      ],
      legalSupport: [
        'Legal Aid Germany: 0180 1 92 5555',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through embassy referrals',
        'Specialized units for violence against women'
      ],
      reportingProcedures: [
        'Report crimes to police at 110 (emergency) or local stations',
        'Tourist assistance available through police',
        'Keep copies of all police reports',
        'Contact embassy for consular assistance in serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'U-Bahn (Subway)',
          safety: 8.8,
          recommendations: ['Very safe with CCTV monitoring', 'Female travelers regularly use alone at night', 'Security staff present'],
          companies: ['BVG'],
          link: 'https://www.bvg.de/en'
        },
        {
          type: 'S-Bahn (Urban Rail)',
          safety: 8.7,
          recommendations: ['Connects all districts safely', 'Well-monitored stations', 'Regular service'],
          companies: ['Deutsche Bahn'],
          link: 'https://www.s-bahn-berlin.de/'
        },
        {
          type: 'Bus',
          safety: 8.6,
          recommendations: ['Extensive network', 'Night bus service available', 'Driver oversight'],
          companies: ['BVG'],
          link: 'https://www.bvg.de/en'
        },
        {
          type: 'Tram',
          safety: 8.8,
          recommendations: ['Modern fleet', 'Eastern districts coverage', 'Safe and reliable'],
          companies: ['BVG'],
          link: 'https://www.bvg.de/en'
        },
        {
          type: 'Licensed Taxis',
          safety: 8.4,
          recommendations: ['Regulated pricing', 'Professional drivers', 'Available 24/7'],
          companies: ['Various licensed operators'],
          link: 'https://www.taxi-berlin.de/'
        },
        {
          type: 'Ride-sharing (Uber)',
          safety: 8.2,
          recommendations: ['GPS tracking', 'Driver verification', 'Cashless payment'],
          companies: ['Uber'],
          link: 'https://www.uber.com/'
        },
        {
          type: 'Bike Share (Jelbi)',
          safety: 7.8,
          recommendations: ['60,000+ vehicles available', 'Good bike infrastructure', 'Daytime use recommended'],
          companies: ['Jelbi (BVG)'],
          link: 'https://www.jelbi.de/'
        }
      ],
      nightTravel: {
        safety: 7.6,
        warnings: [
          'Avoid Leopoldplatz, Kottbusser Tor, and Görlitzer Park after dark',
          'Some eastern district areas require extra caution',
          'Warschauer Straße station area can be busy with nightlife crowds'
        ],
        alternatives: [
          'N-buses replace U-Bahn during night hours',
          'Some tram lines run all night',
          'Licensed taxis and ride-sharing available 24/7',
          'Stay in well-lit, populated areas'
        ]
      },
      verifiedProviders: [
        {
          name: 'BVG',
          type: 'Public Transport',
          contact: '+49 30 19 449',
          safety: 8.7
        },
        {
          name: 'Deutsche Bahn',
          type: 'S-Bahn & Regional',
          contact: '+49 30 2970',
          safety: 8.6
        },
        {
          name: 'Licensed Berlin Taxis',
          type: 'Taxi Service',
          contact: '+49 30 210 101',
          safety: 8.4
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        '24/7 reception services',
        'Electronic key card access',
        'CCTV in common areas',
        'In-room safes',
        'Well-lit entrances',
        'Secure luggage storage'
      ],
      safeNeighborhoods: [
        'Mitte',
        'Prenzlauer Berg',
        'Charlottenburg',
        'Friedrichshain (main areas)',
        'Tiergarten district'
      ],
      womensOnly: [
        {
          name: 'Pfefferbett Hostel',
          type: 'Hostel',
          features: ['Women-only dorms', 'Safe Schönhauser Allee location', 'Secure access'],
          rating: 4.3
        }
      ],
      userReviews: [
        {
          rating: 4.4,
          safety: 8.1,
          comments: 'Felt very safe exploring Berlin. Excellent public transport and helpful locals.',
          date: '2025-01-18'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel and hostel WiFi generally reliable',
        'Free WiFi available in many cafes and public areas',
        'Use VPN for sensitive transactions',
        'Public WiFi networks require caution'
      ],
      digitalScams: [
        'ATM card skimming at street machines',
        'Fake accommodation booking websites',
        'Social media travel scams targeting tourists'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in Germany',
        'ExpressVPN - good speeds and security',
        'ProtonVPN - privacy-focused option'
      ],
      dataProtection: [
        'Strong GDPR compliance provides protection',
        'Use secure payment methods',
        'Keep document copies in secure cloud storage'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Sexual Crime Increase',
          location: 'Citywide',
          date: '2025-01-20',
          description: '79% increase in sexual crimes reported in 2024, 20 incidents daily',
          severity: 'medium'
        },
        {
          type: 'Tourist Area Harassment',
          location: 'Alexanderplatz',
          date: '2025-01-18',
          description: 'Reports of men approaching women sitting alone after 9 PM',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Use DB Navigator app for seamless train travel throughout Germany',
          author: 'Berlin Local',
          date: '2025-01-19',
          upvotes: 189
        },
        {
          tip: 'Withdraw cash from ATMs inside banks to avoid skimming devices',
          author: 'Solo Traveler',
          date: '2025-01-17',
          upvotes: 267
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Germany is generally safe for travelers. Exercise normal precautions and be aware of local safety considerations in urban areas.',
      reason: 'Generally safe with standard tourist precautions needed.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/germany-travel-advisory.html',
      soloTravelerAdvice: [
        'Excellent destination for solo female travelers',
        'Strong safety infrastructure and women\'s rights',
        'High English proficiency makes communication easy',
        'Excellent public transport system for independent travel'
      ]
    },
    crimeStatistics: {
      violentCrime: 12.5, // per 100,000 (2024-2025 data)
      propertyCrime: 4200, // per 100,000 (2024-2025 data) 
      sexualAssault: 18.6, // per 100,000 (2024 - 79% increase, 20 daily incidents)
      kidnapping: 0.3, // per 100,000 (2024 data)
      overallCrime: 13500, // per 100,000 inhabitants (2024 - 539,049 total offences)
      source: 'Berlin Police Statistics & German Federal Criminal Police 2024-2025',
      year: 2025,
      notes: 'Crime rate of 13,500 per 100,000 inhabitants (2024). Sexual crimes increased 79% in 2024. Safety index remains 55.4.'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Anti-theft bag with RFID blocking',
        'Portable door lock for hostels',
        'Personal alarm device',
        'Portable WiFi device',
        'Power bank for phone charging'
      ],
      safetyApps: [
        {
          name: 'BVG App',
          purpose: 'Essential Berlin public transport navigation',
          rating: 4.5
        },
        {
          name: 'TripWhistle Global SOS',
          purpose: 'One-touch emergency services',
          rating: 4.6
        }
      ],
      emergencyContacts: [
        {
          name: 'Police',
          number: '110',
          type: 'Emergency Police'
        },
        {
          name: 'Fire/Medical Emergency',
          number: '112',
          type: 'Fire/Ambulance'
        },
        {
          name: 'Tourist Assistance',
          number: '+49 30 25 00 25',
          type: 'Tourist Help'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Download Essential Berlin Apps Before Arrival',
        description: 'Get BVG App for transport, DB Navigator for trains, and Jelbi for unified mobility access to 60,000+ vehicles. Essential for seamless navigation and avoiding tourist pricing.',
        severity: 'high',
        sourceName: 'Berlin Public Transport Authority',
        sourceUrl: 'https://www.bvg.de/en/connections/bvg-app'
      },
      {
        title: 'Avoid Alexanderplatz Sitting Areas After 9 PM',
        description: 'Female travelers report men approaching and staring at women sitting alone on benches after 9 PM. Move to busier areas or indoor locations if feeling uncomfortable.',
        severity: 'medium',
        sourceName: 'Solo Female Travel Berlin Reddit 2025',
        sourceUrl: 'https://www.reddit.com/r/solotravel/'
      },
      {
        title: 'Use Bank ATMs Inside Buildings Only',
        description: 'Avoid street ATMs due to card skimming devices. Use ATMs inside bank branches with security cameras to prevent fraud and theft.',
        severity: 'high',
        sourceName: 'German Banking Association 2025',
        sourceUrl: 'https://en.bankenverband.de/'
      },
      {
        title: 'Join Free Walking Tours for Safe City Introduction',
        description: 'Excellent way to learn Berlin safely while meeting fellow travelers. Multiple companies offer daily tours covering history, neighborhoods, and local insights.',
        severity: 'low',
        sourceName: 'Berlin Tourism Board',
        sourceUrl: 'https://www.visitberlin.de/en'
      },
      {
        title: 'Keep Cash Handy - Card Acceptance Still Limited',
        description: 'Many smaller venues, markets, and some restaurants still prefer cash. Carry 50-100 euros for daily expenses, especially in local neighborhoods.',
        severity: 'medium',
        sourceName: 'German Retail Association 2025',
        sourceUrl: 'https://www.einzelhandel.de/'
      },
      {
        title: 'Master Berlin\'s Transport Integration',
        description: 'Single ticket works across U-Bahn, S-Bahn, buses, and trams. Night buses replace U-Bahn service. Download offline maps as backup for connectivity issues.',
        severity: 'medium',
        sourceName: 'BVG Transportation Guide',
        sourceUrl: 'https://www.bvg.de/en'
      }
    ],
    culturalSensitivity: {
      culturalDos: [
        'Be punctual for all appointments - Germans value timeliness and consider lateness disrespectful',
        'Embrace direct communication - Germans are straightforward and honest, it\'s not meant to be rude',
        'Wait for pedestrian signals even when no cars are visible - jaywalking is frowned upon',
        'Separate recycling properly - Germans take environmental responsibility very seriously',
        'Respect quiet hours (Ruhezeit) from 22:00-06:00 and Sunday afternoons - keep noise to minimum'
      ],
      culturalDonts: [
        'Don\'t be late for any appointment - even 5 minutes late is considered very rude',
        'Don\'t expect small talk or excessive friendliness from service staff - efficiency is valued over warmth',
        'Don\'t jaywalk or ignore traffic signals - Germans follow rules strictly and expect others to do the same',
        'Don\'t put recyclables in regular trash - improper sorting is taken seriously and can cause offense',
        'Don\'t discuss WWII or Nazi history casually - approach these sensitive topics with respect and gravity'
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$70 - $120 USD / day',
        description: 'Berlin offers excellent value for a major European capital with great food, culture, and safety standards.',
        tip: 'Budget travelers can experience world-class museums and culture affordably while maintaining high safety standards.'
      },
      accommodation: [
        {
          type: 'Hostel',
          avgCost: '$25-40',
          safetyNote: 'Modern hostels with excellent security in safe neighborhoods',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-range Hotel',
          avgCost: '$80-150',
          safetyNote: 'Professional security and central locations',
          safetyLevel: 'high'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$200+',
          safetyNote: 'Top-tier security and concierge services',
          safetyLevel: 'high'
        }
      ],
      transport: [
        {
          method: 'Public Transport (BVG)',
          cost: '$8-12/day',
          safetyDescription: 'Extremely safe and efficient system',
          safetyLevel: 'high'
        },
        {
          method: 'Licensed Taxis',
          cost: '$15-40/ride',
          safetyDescription: 'Regulated and professional service',
          safetyLevel: 'high'
        },
        {
          method: 'Ride-sharing',
          cost: '$10-25/ride',
          safetyDescription: 'GPS tracked with driver verification',
          safetyLevel: 'high'
        },
        {
          method: 'Bike Share (Jelbi)',
          cost: '$1-3/ride',
          safetyDescription: 'Good infrastructure, daytime recommended',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very walkable city with good lighting',
          safetyLevel: 'high'
        }
      ],
      budgetTips: [
        'Buy BVG day passes for unlimited public transport',
        'Many world-class museums are free or very affordable',
        'Excellent street food and market options for budget dining',
        'Free walking tours provide great city orientation',
        'Stay in Prenzlauer Berg or Friedrichshain for better value',
        'Use Jelbi app for affordable bike and scooter sharing',
        'Visit during shoulder season for accommodation savings'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default berlin;