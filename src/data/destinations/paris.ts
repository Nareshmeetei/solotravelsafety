import { Destination } from './types';

// Enhanced Safety Data for Paris - January 2025 Update  
const paris: Destination = {
    city: 'Paris',
    country: 'France',
    continent: 'Europe',
    countryCode: 'fr',
    overallScore: 7.6,
    nightSafety: 7.2,
    publicTransit: 8.0,
    walkingAlone: 7.4,
    tags: ['insider-tips', 'caution-required', 'cultural-immersion'],
    bgColor: 'bg-yellow-25',
    reviewCount: 1289,
    lastUpdated: '1 hour ago',
    harassmentRisk: 'moderate-high',
    safetyBreakdown: {
      nightSafety: {
        score: 7.2,
        context: '2023 data shows 97 rapes recorded in Paris ("one rape every three days on Parisian soil"), largely committed at night in tourist hotspots. Central arrondissements (1st-8th) remain relatively safe but vigilance required. Avoid northern suburbs after dark where violent crimes and gang activity are more frequent. Use official transport exclusively after 10 PM.'
      },
      publicTransit: {
        score: 8.0,
        context: 'Metro system generally safe but pickpocketing common during rush hours. Women report harassment incidents on crowded trains. Some lines (particularly to outer arrondissements) feel less secure after 10 PM. RATP security cameras and police presence help, but remain vigilant especially at stations like Châtelet-Les Halles and Gare du Nord.'
      },
      walkingAlone: {
        score: 7.4,
        context: 'Central Paris walkable during day but caution needed after dark. Street harassment occurs, though less than in some major cities. Tourist areas see frequent pickpocketing and scams (gold ring, petition scams). Avoid isolated areas and trust instincts. Police union warns of risks for women walking alone at night, especially near areas with drug activity.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: '1st Arrondissement (Louvre)',
          description: 'Heart of tourist Paris with the Louvre Museum and Tuileries Garden. Excellent police presence and lighting. Very safe day and night due to constant foot traffic and security.'
        },
        {
          name: '4th Arrondissement (Marais)',
          description: 'Historic Jewish quarter with trendy boutiques, cafes, and restaurants. Very safe and well-patrolled area with active street life. Popular with locals and tourists alike.'
        },
        {
          name: '6th Arrondissement (Saint-Germain)',
          description: 'Upscale Left Bank area with cafes, galleries, and Luxembourg Gardens. Very safe with sophisticated atmosphere and good police presence.'
        },
        {
          name: '7th Arrondissement (Eiffel Tower)',
          description: 'Home to major monuments including Eiffel Tower and Invalides. Tourist-heavy area with excellent security and constant surveillance.'
        },
        {
          name: '8th Arrondissement (Champs-Élysées)',
          description: 'Famous shopping avenue with luxury stores and cafes. Well-patrolled and safe, though can get crowded. Watch for pickpockets in tourist areas.'
        },
        {
          name: '5th Arrondissement (Latin Quarter)',
          description: 'University area with the Panthéon and Sorbonne. Generally safe with young, vibrant atmosphere. Well-lit streets and regular foot traffic.'
        }
      ],
      caution: [
        'Gare du Nord area at night - higher crime rates around train station',
        'Parts of 18th Arrondissement (Montmartre borders) - avoid isolated areas',
        'Châtelet-Les Halles metro hub late at night',
        'Some areas of 19th and 20th arrondissements after dark',
        'Tourist-heavy areas for pickpocketing (Champs-Élysées, Trocadéro)'
      ],
      avoid: [
        'Saint-Denis area at night - higher crime rates',
        'Some suburbs (banlieues) late at night',
        'Isolated areas of Bois de Boulogne and Bois de Vincennes after dark',
        'Areas around Gare de l\'Est late at night'
      ]
    },
    accommodations: [
      {
        name: 'Les Tournelles',
        type: 'hotel',
        features: ['Boutique charm', 'Marais location', 'Solo female friendly', '24/7 reception', 'Recently renovated'],
        rating: 4.8,
        notes: 'Top-rated 24-room boutique hotel near Place des Vosges. Perfect for solo female travelers with excellent safety, walkable location, and cozy atmosphere. Ranked #286/1,870 Paris hotels with 8.8/10 on Booking.com.',
        link: 'https://www.lestournelles.com/'
      },
      {
        name: 'Grands Boulevards Experimental',
        type: 'hotel',
        features: ['Michelin Key 2024', 'Rooftop bar', 'Secret entrance', 'Solo traveler recommended', 'Central location'],
        rating: 4.6,
        notes: 'Michelin Key awarded hotel with rooftop bar and unique entrance through secret passageway. Highly recommended by solo travelers for thoughtful service and excellent breakfast. 4/5 stars on TripAdvisor.',
        link: 'https://www.grandsboulevardshotel.com/'
      },
      {
        name: 'MIJE Fourcy Hostel',
        type: 'hostel',
        features: ['Female-only dorms', 'Historic 17th century building', 'Marais location', 'Budget-friendly', 'Central Paris'],
        rating: 4.5,
        notes: '17th-century mansion converted to hostel in prime Marais location. Female-only dorms available, walking distance to Notre Dame. Ranked #19/369 specialty lodging with 4/5 TripAdvisor rating.',
        link: 'https://www.mije.com/'
      },
      {
        name: 'The People Hostel - Belleville',
        type: 'hostel',
        features: ['Female solo traveler focused', 'High ratings 8.5+', 'Digital nomad friendly', 'Trendy neighborhood'],
        rating: 4.7,
        notes: 'One of Paris\'s best-rated hostels specifically for female solo travelers and digital nomads. Located in trendy Belleville with excellent safety standards and vibrant community atmosphere.',
        link: 'https://www.thepeoplehotels.com/'
      },
      {
        name: 'Caulaincourt Montmartre by Hiphophostels',
        type: 'hostel',
        features: ['Top-rated hostel', 'Swanky and clean', 'Professional service', 'Montmartre location', 'Hotel-like quality'],
        rating: 4.6,
        notes: 'Incredibly swanky, clean and professional hostel that feels like a hotel. Located in Montmartre with excellent reviews from solo travelers. Premium hostel experience with outstanding service.',
        link: 'https://hiphophostels.com/'
      },
      {
        name: 'St Christopher\'s Inn Paris - Canal',
        type: 'hostel',
        features: ['Female-only floors', 'Social atmosphere', 'On-site bar', 'Solo traveler community', 'Canal location'],
        rating: 4.5,
        notes: 'Popular with solo female travelers offering female-only floors and vibrant social scene. Features Belushi\'s Bar and regular events perfect for meeting other travelers. Great for social solo travelers.',
        link: 'https://www.st-christophers.co.uk/'
      }
    ],
    alerts: [
      {
        title: 'Increased Sexual Violence Statistics',
        description: '2023 Paris police data shows 97 rapes recorded (up 2% from 2022), with 77% of solved cases committed by foreign nationals. Crimes largely occur at night in tourist areas and near drug activity zones.',
        location: 'Tourist areas, especially at night',
        reportCount: 67,
        severity: 'high',
        dateReported: '1 week ago'
      },
      {
        title: 'Enhanced Security for 2024 Olympics',
        description: 'France raised national terror alert to highest level in March 2024. Increased security presence at landmarks, schools, shopping centers, and tourist areas. Expect additional checks and delays.',
        location: 'Citywide, especially tourist areas',
        reportCount: 23,
        severity: 'medium',
        dateReported: '2 weeks ago'
      },
      {
        title: 'Pickpocketing Surge in Tourist Areas',
        description: 'Significant increase in pickpocketing reports on metro lines 1, 4, 6, 9 and in areas around Champs-Élysées, Trocadéro, and major tourist attractions. Groups using distraction techniques.',
        location: 'Metro system and major tourist sites',
        reportCount: 156,
        severity: 'medium',
        dateReported: '3 days ago'
      },
      {
        title: 'Transportation Strikes',
        description: 'Periodic metro and bus strikes can affect public transport. Check RATP website for updates and plan alternative routes.',
        location: 'Citywide transport network',
        reportCount: 8,
        severity: 'low',
        dateReported: '1 week ago'
      }
    ],
    safetyTips: {
      clothing: `• Dress elegantly but not flashy - Parisians appreciate style
• Comfortable walking shoes essential for cobblestones
• Avoid obvious tourist clothing and accessories
• Modest dress for churches and religious sites
• Light layers for variable weather`,
      firstTimers: `• Paris is generally safe but requires city awareness
• Learn basic French phrases - locals appreciate effort
• Keep valuables secure, especially in tourist areas and metro
• Use official taxis or Uber for late-night transport
• Stay in central arrondissements (1st-8th) for best safety`,
      apps: [
        'NomadHer',
        'bSafe',
        'SOS 114',
        'Life360',
        'Citymapper',
        'Bonjour RATP',
        'Flush Toilet Finder',
        'DeepL'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Women-only verified community - connect with female travelers and get safety tips for Paris', rating: 4.6 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Voice-activated emergency app with live video alerts - crucial for Paris safety concerns', rating: 4.5 },
        { name: 'SOS 114', link: 'https://www.urgence114.fr/', description: 'French emergency services app - direct GPS connection to police, fire, and medical', rating: 4.7 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Location sharing for family peace of mind during solo adventures in Paris', rating: 4.6 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Paris navigation master - safest routes, metro car positions, real-time updates, 10/10 rated', rating: 5.0 },
        { name: 'Bonjour RATP', link: 'https://www.ratp.fr/apps', description: 'Official Paris metro app - real-time schedules, disruptions, ticket purchasing', rating: 4.5 },
        { name: 'Flush Toilet Finder', link: 'https://www.flushapp.com/', description: 'Essential for solo travelers - comprehensive database of Paris public restrooms and accessibility', rating: 4.8 },
        { name: 'DeepL', link: 'https://www.deepl.com/', description: 'Superior translation app for French - much more accurate than Google Translate for complex phrases', rating: 4.7 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Au secours!',
          localLanguage: 'French',
          pronunciation: 'oh suh-KOOR',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Au%20secours',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Au%20secours',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Au%20secours&client=tw-ob'
          ],
          phonetic: 'Au secours!',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Appelez la police!',
          localLanguage: 'French',
          pronunciation: 'ah-play lah po-LEES',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Appelez%20la%20police',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Appelez%20la%20police',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Appelez%20la%20police&client=tw-ob'
          ],
          phonetic: 'Appelez la police!',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'J\'ai besoin d\'un médecin.',
          localLanguage: 'French',
          pronunciation: 'zhay buh-ZWAN dun may-duh-SAN',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=J%27ai%20besoin%20d%27un%20médecin',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=J%27ai%20besoin%20d%27un%20médecin',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=J%27ai%20besoin%20d%27un%20médecin&client=tw-ob'
          ],
          phonetic: 'J\'ai besoin d\'un médecin.',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Où est l\'hôpital le plus proche?',
          localLanguage: 'French',
          pronunciation: 'oo ay lo-pee-TAHL luh ploo PROHSH',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Où%20est%20l%27hôpital%20le%20plus%20proche',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Où%20est%20l%27hôpital%20le%20plus%20proche',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Où%20est%20l%27hôpital%20le%20plus%20proche&client=tw-ob'
          ],
          phonetic: 'Où est l\'hôpital le plus proche?',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Je suis perdue.',
          localLanguage: 'French',
          pronunciation: 'zhuh swee pair-DUE',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Je%20suis%20perdue',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Je%20suis%20perdue',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Je%20suis%20perdue&client=tw-ob'
          ],
          phonetic: 'Je suis perdue.',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Laissez-moi tranquille, s\'il vous plaît.',
          localLanguage: 'French',
          pronunciation: 'lay-say-MWAH trahn-KEEL seel voo PLAY',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Laissez-moi%20tranquille%2C%20s%27il%20vous%20plaît',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Laissez-moi%20tranquille%2C%20s%27il%20vous%20plaît',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Laissez-moi%20tranquille%2C%20s%27il%20vous%20plaît&client=tw-ob'
          ],
          phonetic: 'Laissez-moi tranquille, s\'il vous plaît.',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Je ne me sens pas en sécurité.',
          localLanguage: 'French',
          pronunciation: 'zhuh nuh muh sahn pah ahn say-koo-ree-TAY',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Je%20ne%20me%20sens%20pas%20en%20sécurité',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Je%20ne%20me%20sens%20pas%20en%20sécurité',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Je%20ne%20me%20sens%20pas%20en%20sécurité&client=tw-ob'
          ],
          phonetic: 'Je ne me sens pas en sécurité.',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Pouvez-vous m\'aider?',
          localLanguage: 'French',
          pronunciation: 'poo-vay VOO mah-DAY',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Pouvez-vous%20m%27aider',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=fr-FR-DeniseNeural&text=Pouvez-vous%20m%27aider',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=Pouvez-vous%20m%27aider&client=tw-ob'
          ],
          phonetic: 'Pouvez-vous m\'aider?',
          voiceInfo: {
            voiceName: 'fr-FR-DeniseNeural',
            gender: 'Female',
            displayName: 'Denise (French Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['fr-FR'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: 'Parisians dress elegantly and stylishly. Business casual to smart casual is appropriate. Avoid overly casual clothing like flip-flops, shorts, or athletic wear in restaurants and cultural sites. Quality over quantity is valued.',
      behaviorNorms: [
        'Greet with "Bonjour" when entering shops and "Au revoir" when leaving.',
        'Learn basic French phrases - locals appreciate the effort.',
        'Be polite and formal initially - use "vous" rather than "tu".',
        'Keep voices down in public transport and restaurants.',
        'Tip 10% in restaurants if service isn\'t included.',
        'Respect museum and monument rules and etiquette.',
        'Don\'t eat or drink on public transport.',
        'Queue politely and respect personal space.',
        'Dress appropriately for churches and religious sites.',
        'Show appreciation for French culture and cuisine.'
      ],
      perception: 'Solo women travelers are common in Paris and generally well-received. The city is cosmopolitan and women can dine alone, visit attractions, and use transport independently. However, street harassment can occur, and cultural differences in interaction styles may be misinterpreted.',
    },
    bestTimeToVisit: {
      safestMonths: ['April-October'],
      events: 'Spring through fall offers best weather and longer daylight hours. Summer can be crowded but generally safe.'
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
        'Use official ATMs and avoid currency exchange at tourist spots for better rates.'
      ]
    },
    scamWarnings: [
      {
        title: 'Gold Ring Scam',
        description: 'Someone "finds" a gold ring and asks if it\'s yours, then requests money. Ignore and walk away.',
        severity: 'medium'
      },
      {
        title: 'Petition Scam',
        description: 'People with clipboards asking for signatures while accomplices pickpocket. Politely decline.',
        severity: 'medium'
      },
      {
        title: 'ATM Skimming',
        description: 'Use ATMs inside banks when possible. Cover your PIN and check for suspicious devices.',
        severity: 'medium'
      },
      {
        title: 'Restaurant Overcharging',
        description: 'Check menus for prices and ensure service charges are legitimate.',
        severity: 'low'
      }
    ],
    languages: ['French', 'English (moderate level in tourist areas)'],
    daytimeSafetyPercent: 78.6,
    nighttimeSafetyPercent: 65.4,
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Paris',
    redFlags: [
      { label: 'Pickpocketing in Tourist Areas', frequency: 'Common', icon: 'Hand' },
      { label: 'Metro Harassment Reports', frequency: 'Occasional', icon: 'Users' },
      { label: 'Street Scams', frequency: 'Common', icon: 'AlertTriangle' },
      { label: 'Neighborhood Safety Variation', frequency: 'Ongoing', icon: 'MapPin' }
    ],
    culturalDos: [
      'Learn basic French greetings.',
      'Dress stylishly and appropriately.',
      'Be polite and formal initially.',
      'Respect French dining etiquette.',
      'Appreciate art and culture.'
    ],
    culturalDonts: [
      'Don\'t speak loudly in public.',
      'Don\'t wear overly casual clothes to restaurants.',
      'Don\'t expect fast service.',
      'Don\'t ignore pickpocket risks in tourist areas.',
      'Don\'t assume everyone speaks English.'
    ],
    womensConfidenceScore: {
      score: 71.8,
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Paris"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 85, source: 'France Tourism Safety Report 2025', sourceUrl: 'https://www.france.fr/safety' },
      { label: 'Nightlife', confidence: 72, source: 'Solo Female Travel France 2025', sourceUrl: 'https://www.solofemaleguide.com/france' },
      { label: 'Public Transport', confidence: 76, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/crime/in/Paris' },
      { label: 'Dining Alone', confidence: 88, source: 'Women Travel Solo 2025', sourceUrl: 'https://womentravelsolo.com/paris/' }
    ],
    sexualHarassmentData: {
      prevalence: 'moderate-high',
      commonLocations: [
        'Tourist areas at night - 77% of solved rape cases in 2023 committed by foreign nationals',
        'Public transport during rush hour - crowded metros see frequent harassment',
        'Areas near drug activity and nightlife districts',
        'Tourist hotspots including Champs de Mars, Champs-Élysées',
        'Northern suburbs particularly unsafe for women after dark'
      ],
      reportingRate: 52, // Lower than EU average due to various reporting barriers
      legalProtection: 'Strong legal framework but enforcement challenges. 2023 saw "one rape every three days on Parisian soil" with only 30 of 97 cases solved. Police union warns of ongoing risks for women walking alone at night.',
      supportResources: [
        'Emergency Services: 112 or 17 for police',
        'SOS Femmes: 3919 (free, anonymous, 24/7 women\'s violence helpline)',
        'Tourist Police: 0800 40 17 17 (English assistance available)',
        'En Avant Toutes: entetouche.fr (online chat support)',
        'Viol Femmes Information: 0800 05 95 95 (rape crisis line)',
        'U.S. Embassy Paris: +33 1 43 12 22 22'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'American Hospital of Paris',
          address: '63 Boulevard Victor Hugo, 92200 Neuilly-sur-Seine',
          phone: '+33 1 46 41 25 25',
          emergency: true,
          specialties: ['International Patients', 'English-speaking staff', 'Cardiology', 'Obstetrics', 'Emergency Medicine'],
          link: 'https://www.american-hospital.org/'
        },
        {
          name: 'Hôpital Saint-Louis (AP-HP)',
          address: '1 Avenue Claude Vellefaux, 75010 Paris',
          phone: '+33 1 42 49 49 49',
          emergency: true,
          specialties: ['Emergency Medicine', 'General Medicine', 'Public Hospital Network'],
          link: 'https://www.aphp.fr/'
        },
        {
          name: 'Hôpital Cochin (AP-HP)',
          address: '27 Rue du Faubourg Saint-Jacques, 75014 Paris',
          phone: '+33 1 58 41 41 41',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'Maternity Care'],
          link: 'https://hopital-cochin.aphp.fr/'
        }
      ],
      pharmacies: [
        {
          name: 'Pharmacie des Champs-Élysées',
          address: '84 Avenue des Champs-Élysées, 75008 Paris',
          phone: '+33 1 45 62 02 41',
          hours: 'Mon-Sat 8:30-20:00, Sun 10:00-20:00',
          emergency: false,
          link: 'https://www.pharmacie-champs-elysees.com/'
        },
        {
          name: 'Pharmacie Bader (24-hour)',
          address: '12 Boulevard Saint-Michel, 75005 Paris',
          phone: '+33 1 43 26 92 66',
          hours: '24/7',
          emergency: true,
          link: 'https://pharmacie-bader.fr/'
        }
      ],
      womensHealth: {
        clinics: [
          'American Hospital Women\'s Health Center: English-speaking gynecologists and obstetrics',
          'Planning Familial Paris: +33 1 48 07 29 10 - reproductive health counseling',
          'Centre de Santé des Femmes: Multiple locations throughout Paris',
          'AP-HP Women\'s Health Services: Comprehensive care at public hospitals'
        ],
        gynecologists: [
          'American Hospital: English-speaking gynecologists available',
          'Private practices throughout Paris with international experience',
          'Public hospital gynecology departments with interpreter services',
          'Embassy can provide referrals to English-speaking specialists'
        ],
        emergencyContraception: [
          'Available at all pharmacies without prescription (Plan B, EllaOne)',
          'Free at hospitals and planning familial centers',
          'No age restrictions or parental consent required',
          'Student health centers provide confidential access'
        ],
        sanitaryProducts: [
          'Widely available at pharmacies, supermarkets, and convenience stores',
          'High-quality French brands (Nana, Always) and organic options',
          'Menstrual cups and sustainable options increasingly available',
          'Free products available at some universities and public facilities'
        ]
      },
      vaccinations: [
        'No special vaccinations required for Paris/France',
        'COVID-19 vaccination recommended for entry and events',
        'Routine vaccinations (MMR, Tdap, flu) should be current',
        'Hepatitis A/B vaccination recommended for extended stays'
      ],
      healthRisks: [
        'Low risk of infectious diseases with excellent healthcare system',
        'Air pollution in central Paris - may affect those with respiratory conditions',
        'Seasonal flu during winter months (December-February)',
        'Heat waves in summer can be dangerous for elderly and vulnerable populations',
        'High healthcare costs for non-EU residents without insurance'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Paris',
          address: '2 Avenue Gabriel, 75008 Paris',
          phone: '+33 1 43 12 22 22',
          link: 'https://fr.usembassy.gov/'
        },
        {
          name: 'British Embassy Paris',
          address: '35 Rue du Faubourg Saint-Honoré, 75008 Paris',
          phone: '+33 1 44 51 31 00',
          link: 'https://www.gov.uk/world/organisations/british-embassy-paris'
        },
        {
          name: 'German Embassy Paris',
          address: '13-15 Avenue Franklin D. Roosevelt, 75008 Paris',
          phone: '+33 1 53 83 45 00',
          link: 'https://paris.diplo.de/'
        },
        {
          name: 'French Government Services',
          address: 'Multiple locations throughout Paris',
          phone: '+33 39 39',
          link: 'https://www.service-public.fr/'
        },
        {
          name: 'Spanish Embassy Paris',
          address: '22 Avenue Marceau, 75008 Paris',
          phone: '+33 1 44 43 18 00',
          link: 'https://www.exteriores.gob.es/embajadas/paris'
        },
        {
          name: 'Australian Embassy Paris',
          address: '4 Rue Jean Rey, 75015 Paris',
          phone: '+33 1 40 59 33 00',
          link: 'https://france.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Paris',
          address: '35 Avenue Montaigne, 75008 Paris',
          phone: '+33 1 44 43 29 00',
          link: 'https://www.canadainternational.gc.ca/france/'
        },
        {
          name: 'Netherlands Embassy Paris',
          address: '7 Rue Eblé, 75007 Paris',
          phone: '+33 1 40 62 33 00',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/france'
        },
        {
          name: 'Danish Embassy Paris',
          address: '77 Avenue Marceau, 75116 Paris',
          phone: '+33 1 44 31 21 21',
          link: 'https://frankrig.um.dk/'
        },
        {
          name: 'Swiss Embassy Paris',
          address: '142 Rue de Grenelle, 75007 Paris',
          phone: '+33 1 49 55 67 00',
          link: 'https://www.eda.admin.ch/paris'
        },
        {
          name: 'Indian Embassy Paris',
          address: '15 Rue Alfred Dehodencq, 75016 Paris',
          phone: '+33 1 40 50 70 70',
          link: 'https://www.eoiparis.gov.in/'
        }
      ],
      consulate: {
        name: 'U.S. Consulate Paris',
        address: '2 Avenue Gabriel, 75008 Paris',
        phone: '+33 1 43 12 22 22',
        email: 'citizeninfo@state.gov',
        link: 'https://fr.usembassy.gov/'
      },
      womensRights: [
        'Strong legal protections under French and EU law',
        'Equal rights and anti-discrimination laws',
        'Right to safe and legal abortion services',
        'Protection against domestic violence and harassment'
      ],
      legalSupport: [
        'Legal Aid France: 3939',
        'Free legal advice for EU citizens',
        'English-speaking lawyers through embassy'
      ],
      reportingProcedures: [
        'Report crimes to police at 112 (emergency) or 17 (police)',
        'Tourist police available for assistance',
        'Keep copies of police reports',
        'Contact embassy for serious incidents'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Metro',
          safety: 8.3,
          recommendations: ['Generally safe but watch for pickpockets'],
          companies: ['RATP'],
          link: 'https://www.ratp.fr/'
        },
        {
          type: 'Bus',
          safety: 8.5,
          recommendations: ['Safe and efficient, good visibility'],
          companies: ['RATP'],
          link: 'https://www.ratp.fr/'
        },
        {
          type: 'Uber',
          safety: 8.8,
          recommendations: ['Very safe and reliable'],
          companies: ['Uber'],
          link: 'https://www.uber.com/fr/en/'
        }
      ],
      nightTravel: {
        safety: 7.2,
        warnings: [
          'Some metro lines less safe after 10 PM',
          'Avoid isolated metro stations late at night',
          'Be cautious in outer arrondissements'
        ],
        alternatives: [
          'Night buses (Noctilien) available',
          'Uber available 24/7',
          'Official taxis at taxi stands'
        ]
      },
      verifiedProviders: [
        {
          name: 'RATP',
          type: 'Public Transport',
          contact: '3424',
          safety: 8.3
        },
        {
          name: 'Uber',
          type: 'Ride-sharing',
          contact: 'App-based',
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
        'Concierge services'
      ],
      safeNeighborhoods: [
        '1st Arrondissement (Louvre)',
        '4th Arrondissement (Marais)',
        '6th Arrondissement (Saint-Germain)',
        '7th Arrondissement (Eiffel Tower)',
        '8th Arrondissement (Champs-Élysées)'
      ],
      womensOnly: [
        {
          name: 'MIJE Hostels',
          type: 'Hostel',
          features: ['Female dorms', 'Historic locations', 'Central Paris'],
          rating: 4.1
        }
      ],
      userReviews: [
        {
          rating: 4.2,
          safety: 8.1,
          comments: 'Felt safe in central arrondissements. Great public transport.',
          date: '2025-01-19'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'Hotel WiFi generally secure',
        'Many cafes offer free WiFi',
        'Use VPN for sensitive data',
        'Public WiFi in tourist areas - use caution'
      ],
      digitalScams: [
        'Fake booking websites',
        'Phishing emails from fake hotels',
        'Social media accommodation scams'
      ],
      vpnRecommendations: [
        'NordVPN - reliable in France',
        'ExpressVPN - good speeds',
        'ProtonVPN - privacy focused'
      ],
      dataProtection: [
        'GDPR provides strong protection',
        'Use secure payment methods',
        'Keep document copies secure'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Pickpocketing',
          location: 'Metro lines 1, 4, 6, 9',
          date: '2025-01-20',
          description: 'Multiple pickpocketing reports on busy metro lines',
          severity: 'medium'
        },
        {
          type: 'Scam',
          location: 'Tourist areas',
          date: '2025-01-18',
          description: 'Gold ring and petition scams reported',
          severity: 'low'
        }
      ],
      safetyTips: [
        {
          tip: 'Keep valuables secure on metro and in tourist areas',
          author: 'Solo Traveler',
          date: '2025-01-21',
          upvotes: 89
        }
      ]
    },
    governmentAdvisory: {
      level: 'Exercise Increased Caution',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution in France due to terrorism and civil unrest. Terrorist groups continue to plan possible attacks in France and may attack with little to no warning.',
      reason: 'Terrorism threats and civil unrest. France raised national terror alert to highest level in March 2024.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/france-travel-advisory.html',
      soloTravelerAdvice: [
        'Requires extra caution for solo female travelers due to increased sexual violence statistics',
        'Stay exclusively in central arrondissements (1st-8th) and avoid northern suburbs',
        'Use only official transport, especially at night - avoid walking alone after 10 PM',
        'Enroll in STEP program and keep embassy contact readily available',
        'Be aware of terrorism threat and avoid large gatherings or demonstrations'
      ]
    },
    crimeStatistics: {
      violentCrime: 384.1, // per 100,000 (2023 saw large increase of 30,000+ violent crimes nationally)
      propertyCrime: 3248, // per 100,000 (pickpocketing especially high in tourist areas)
      sexualAssault: 76.0, // per 100,000 (76,000+ incidents recorded in 2022 nationally)
      kidnapping: 0.4, // per 100,000 (rare but terrorism concerns)
      rapeRate: 97, // 97 rapes recorded in Paris in 2023, up 2% from 2022
      source: 'French National Statistics & Paris Police Headquarters',
      year: 2023
    },
    personalSafetyTools: {
      recommendedDevices: [
        'Personal safety alarm',
        'RFID-blocking wallet',
        'Anti-theft bag',
        'Portable charger'
      ],
      safetyApps: [
        {
          name: 'Citymapper',
          purpose: 'Best transport navigation for Paris',
          rating: 4.8
        }
      ],
      emergencyContacts: [
        {
          name: 'Emergency Services',
          number: '112',
          type: 'Police/Fire/Ambulance'
        },
        {
          name: 'Police',
          number: '17',
          type: 'Police Direct'
        },
        {
          name: 'Tourist Police',
          number: '0800 40 17 17',
          type: 'Tourist Assistance'
        }
      ]
    },
    usefulTips: [
      {
        title: 'Master Paris Metro Safety',
        description: 'Keep valuables secure, especially during rush hour. Avoid empty cars and isolated stations late at night. Use well-lit exits and stay aware of surroundings.',
        severity: 'medium',
        sourceName: 'RATP Safety Guidelines',
        sourceUrl: 'https://www.ratp.fr/safety'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: '$100 - $180 USD / day',
        description: 'Paris is expensive and safety considerations require staying in central areas and using official transport, increasing costs. Budget travelers $100-130/day, mid-range $150-180/day.',
        tip: 'Invest in safer central accommodations (1st-8th arrondissements) and official transport. Safety-focused travel in Paris costs more but is essential for solo female travelers.'
      },
      accommodation: [
        {
          type: 'Luxury Hotels (Central)',
          avgCost: '$200-400/night',
          safetyNote: 'Highest security in prime safe locations',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels (Central)',
          avgCost: '$120-200/night',
          safetyNote: 'Good security in central arrondissements only',
          safetyLevel: 'medium-high'
        },
        {
          type: 'Boutique Hotels',
          avgCost: '$150-250/night',
          safetyNote: 'Stylish options with security in safe areas',
          safetyLevel: 'high'
        },
        {
          type: 'Safe Hostels',
          avgCost: '$40-70/night (dorms), $100+ private',
          safetyNote: 'Choose only hostels in 1st-8th arrondissements',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Metro/Bus (Daytime)',
          cost: '$8-15/day passes',
          safetyDescription: 'Safe during day with pickpocket awareness needed',
          safetyLevel: 'medium-high'
        },
        {
          method: 'Uber/Official Taxis (Night)',
          cost: '$15-35 per ride',
          safetyDescription: 'Essential for safe night transport',
          safetyLevel: 'high'
        },
        {
          method: 'Walking (Central Areas Day)',
          cost: 'Free',
          safetyDescription: 'Safe in central arrondissements during daylight',
          safetyLevel: 'medium-high'
        }
      ],
      budgetTips: [
        'Prioritize safety over savings - stay in central arrondissements (1st-8th)',
        'Use daily/weekly metro passes but avoid late-night public transport',
        'Many museums free on first Sunday of month',
        'Picnics in parks safe and economical during daytime',
        'Budget extra for Uber/taxis after 10 PM - essential safety cost',
        'Grocery shop at Monoprix/Franprix for budget meals',
        'Free walking tours available during safe daytime hours'
      ]
    },
    culturalSensitivity: {
      culturalDos: [
        'Always start conversations with "Bonjour" - proper greetings are fundamental to French social etiquette',
        'Attempt to speak French even if imperfect - Parisians deeply appreciate the effort and will be more helpful',
        'Dress elegantly and avoid flashy clothing - Paris values understated sophistication and style',
        'Take time with meals and savor your food - rushing through dining is considered disrespectful to French culture',
        'Use formal address "Vous" until invited to use "Tu" - politeness and formality are highly valued'
      ],
      culturalDonts: [
        'Don\'t assume everyone speaks English - always ask politely "Parlez-vous anglais?" before switching languages',
        'Don\'t eat while walking or on public transport - it\'s considered very poor etiquette in French culture',
        'Don\'t discuss money or personal finances - these topics are taboo in French social conversations',
        'Don\'t arrive exactly on time for social events - being 10-15 minutes late is actually preferred',
        'Don\'t be overly enthusiastic with strangers - French culture values reserved, quiet interaction in public'
      ]
    },
  youtubeVideo: {
    videoId: "2Xc_D9eQwpM" // See How It's Like: Paris travel experience video
  }
};

export default paris;