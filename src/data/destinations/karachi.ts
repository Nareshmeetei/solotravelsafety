import { Destination } from './types';

// Enhanced Safety Data for Karachi - January 2025 Update
const karachi: Destination = {
    city: 'Karachi',
    country: 'Pakistan',
    continent: 'Asia',
    countryCode: 'pk',
    overallScore: 2.8,
    nightSafety: 1.9,
    publicTransit: 2.5,
    walkingAlone: 2.2,
    tags: ['warning-flags', 'high-risk', 'harassment-concerns', 'solo-female-travel', 'cultural-sensitivity', 'safety-precautions'],
    bgColor: 'bg-red-75',
    reviewCount: 487,
    lastUpdated: '3 days ago',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: {
        score: 1.9,
        context: 'Is Karachi safe for women solo travelers at night? No - extremely dangerous with only 29.2% nighttime safety rating (Numbeo 2025). High violent crime including kidnapping, sexual assault, and armed robbery targeting solo female travelers. July 2025 US Consulate security alert warns of threats to high-end hotels. Social norms strongly discourage women being out alone after dark.'
      },
      publicTransit: { 
        score: 2.5, 
        context: 'Public transport presents significant harassment risks with frequent sexual harassment reported on overcrowded buses and trains. Recent incidents include ride-hailing drivers assaulting female passengers. US government personnel have transportation restrictions due to security concerns.' 
      },
      walkingAlone: {
        score: 2.2,
        context: 'Is Karachi safe for female solo travelers walking alone? Strongly discouraged due to high harassment risks. Sexual harassment "almost unavoidable" according to solo female travel safety reports 2025. 235 sexual assault cases recorded in first 4 months of 2025. High mobile phone snatching (most common crime) and street harassment including following and inappropriate touching targeting women traveling alone.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Defence Housing Authority (DHA)',
          description: 'Upscale planned community with better security infrastructure, international hotels, and restaurants. Still requires caution and avoid being out alone. Most embassies and consulates located here. Relatively safer accommodation area for solo female travel safety but not for solo wandering.'
        },
        {
          name: 'Clifton',
          description: 'Affluent seaside district with upscale shopping, restaurants, and beach access. Better security presence and lighting but still experiences harassment and crime. Sea View area popular but avoid isolated beach areas especially for women solo travelers concerned about safety.'
        },
        {
          name: 'Gulshan-e-Iqbal',
          description: 'Middle-class residential area with commercial centers. Relatively safer than older parts of city but still requires significant caution for solo female travelers. Avoid venturing out alone especially after dark.'
        }
      ],
      caution: [
        'Saddar (Business district with crowds and pickpocketing)',
        'Nazimabad (Densely populated with harassment risks)',
        'North Nazimabad (Better area but still harassment concerns)',
        'PECHS (Middle-class but crowded and harassment issues)'
      ],
      avoid: [
        'Lyari (High crime, gang activity, avoid completely)',
        'Korangi (Site of frequent sexual assaults per 2025 media reports)',
        'Orangi Town (Densely populated, high crime)',
        'Old City areas (High harassment and crime rates)',
        'Isolated areas in any neighborhood after dark'
      ]
    },
    accommodations: [
      {
        name: 'Mövenpick Hotel Karachi',
        type: 'hotel',
        features: ['Ranked #1 of 57 hotels', '5-star luxury downtown', 'Free WiFi & parking', 'Airport shuttle', 'Central location', 'Spa facilities'],
        rating: 4.6,
        notes: '#1 ranked hotel in Karachi with excellent safety record. Solo female travelers love the attentive staff, housekeeping service, and secure location near city center with easy access to markets and airport.'
      },
      {
        name: 'Avari Towers Karachi',
        type: 'hotel',
        features: ['4.5-star luxury', 'Free airport shuttle', 'Full-service spa', 'Outdoor pool', 'Business facilities', '24/7 room service'],
        rating: 4.7,
        notes: 'Travelers consistently praise the helpful staff and excellent room service. Known as "the most safe secure hotel in Karachi" with comprehensive 24-hour services and strong security reputation among solo female travelers.'
      },
      {
        name: 'Pearl Continental Hotel Karachi',
        type: 'hotel',
        features: ['4.5-star hotel', 'Thai massage & spa', 'Steam room facilities', '24-hour business center', 'Airport shuttles', 'Meeting rooms'],
        rating: 4.5,
        notes: 'Luxury hotel tailored for business and leisure travelers. Located 10 miles from airport with scheduled shuttles. Excellent for solo female business travelers with comprehensive amenities and security protocols.'
      },
      {
        name: 'Karachi Marriott Hotel',
        type: 'hotel',
        features: ['5-star luxury', 'Near Clifton Beach', 'Family-friendly', 'Business center', 'Meeting facilities', 'Plush neighborhood location'],
        rating: 4.5,
        notes: 'International Marriott standards with spacious, comfortable rooms. Located in plush neighborhood surrounded by major shopping malls. Ideal for both corporate and leisure solo female travelers.'
      },
      {
        name: 'Orchid Inn Executive Guest House',
        type: 'guesthouse',
        features: ['Traveler-recommended choice', 'Clean & comfortable', 'Professional staff', 'Safe location', 'Convenient access', 'Budget-friendly'],
        rating: 4.6,
        notes: 'Highly recommended by repeat solo travelers: "After trying several places, Orchid Inn has been my go-to. Clean, comfortable, helpful staff, and location is both safe and convenient." Perfect for budget-conscious solo female travelers.'
      },
      {
        name: 'Subhan Palace Guest House',
        type: 'guesthouse',
        features: ['3-star rating', 'Family environment', '2.5 miles from airport', 'Car rental service', 'Excellent value', 'Good user ratings'],
        rating: 4.5,
        notes: 'Provides family atmosphere with excellent value. Very close to Jinnah International Airport with car rental services. Great for solo female travelers who want a more intimate, family-style accommodation.'
      },
      {
        name: 'The Red Tree II Executive Guest House',
        type: 'guesthouse',
        features: ['Garden setting', 'Free parking', '24-hour front desk', 'Free WiFi', 'Great views', 'Professional service'],
        rating: 4.4,
        notes: 'Executive-level guest house with excellent reviews for views and professional service. 24-hour front desk provides security for solo female travelers. Beautiful garden setting offers peaceful environment.'
      },
      {
        name: 'Ambiance Boutique Art Hotel',
        type: 'boutique',
        features: ['5-star rating', 'Near Seaview Beach', 'Clean design', 'Amazing restaurant', 'Caring staff', 'Art-focused theme'],
        rating: 4.8,
        notes: 'Highest-rated boutique option with excellent user ratings. Solo female travelers appreciate the caring staff, amazing restaurant, and clean artistic design. Perfect for those seeking unique, high-quality accommodation near the beach.'
      }
    ],
    alerts: [
      { 
        title: 'US Consulate Security Alert - Hotel Threats', 
        description: 'US Consulate General Karachi received threat reports directed at high-end hotels. Official US government personnel visits to these hotels temporarily limited.', 
        location: 'High-end hotels citywide', 
        reportCount: 1, 
        severity: 'high', 
        dateReported: 'July 31, 2025' 
      },
      { 
        title: 'Sexual Assault Statistics Spike', 
        description: '235 sexual assault cases against women recorded in first 4 months of 2025. Actual numbers likely higher due to underreporting due to social stigma and police response issues.', 
        location: 'Citywide, particularly Korangi and secluded areas', 
        reportCount: 235, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Mobile Phone Snatching Epidemic', 
        description: 'Most common crime affecting travelers. Organized gangs targeting pedestrians and vehicle occupants for mobile phones and valuables.', 
        location: 'All areas, particularly crowded markets and traffic signals', 
        reportCount: 156, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Ride-hailing Sexual Assault Incidents', 
        description: 'Recent reports of ride-hailing drivers sexually assaulting lone female passengers. Verification and safety protocols being questioned.', 
        location: 'Uber/Careem services citywide', 
        reportCount: 8, 
        severity: 'high', 
        dateReported: '3 days ago' 
      }
    ],
    safetyTips: {
      clothing: [
        'Shalwar Kameez (traditional Pakistani outfit) is IDEAL - lightweight, culturally appropriate, and most comfortable for weather',
        'Purchase local clothing upon arrival at Anarkali Bazaar or local markets - helps you blend in and shows cultural respect',
        'Long sleeves and loose-fitting long pants or ankle-length skirts required at all times - avoid any form-fitting clothing',
        'Head covering (dupatta/scarf) essential - carry at all times for mosque visits and conservative areas',
        'Kurta with loose trousers or jeans acceptable as Western alternative, but ensure modest length covering backside',
        'Completely avoid shorts, sleeveless tops, tight clothing, or low necklines - these attract unwanted attention and harassment',
        'Hide all expensive jewelry, watches, and technology to avoid becoming theft target',
        'Pack lightweight fabrics (cotton, linen) suitable for hot weather while maintaining full coverage',
        'Bring backup modest clothing for emergencies or unexpected dress code requirements',
        'Consider dupatta (scarf) as both cultural accessory and practical covering for varying situations',
        'Choose earth-tone colors over bright colors - neutral colors like beige, brown, navy help you blend in better',
        'Ensure clothing is not see-through or transparent when wet - test fabrics before wearing in humid weather'
      ],
      firstTimers: [
        'Is Karachi safe for women solo travelers? Only with extensive precautions and local guidance - requires careful planning',
        'Is Karachi safe for female solo travelers? While challenging, possible with proper safety measures and cultural awareness',
        'Purchase Shalwar Kameez immediately upon arrival - helps you blend in and shows cultural respect',
        'Book accommodation exclusively in DHA/Defence or Clifton areas regardless of cost for maximum security',
        'Arrange pre-paid private airport transfers through international hotels - avoid unregulated transport',
        'Consider women-only Pink Bus Service during peak hours (8-9am, 5-6pm) for safer public transport option',
        'Download essential apps: Life360, My SOS Family, Karachi Metro Bus app, and Breeze app for BRT',
        'Share live location with trusted contacts throughout entire stay using multiple tracking methods',
        'Connect with local women through hotel staff or expat communities for cultural guidance and safety',
        'Learn basic Urdu phrases ("Assalam-o-Alaikum", "Shukriya", "Maaf kijiye") to show respect',
        'Have emergency evacuation plan and funds ready for immediate departure if needed',
        'Register with your embassy immediately upon arrival and maintain regular contact'
      ],
      travelAdvisory: {
        level: 'Level 3: Reconsider Travel',
        source: 'US State Department',
        lastUpdated: 'August 2025',
        keyWarnings: [
          'US Consulate Alert: Threats to high-end hotels in Karachi (August 2025)',
          'Canadian Advisory: Avoid non-essential travel to Karachi due to violence and terrorism',
          'UK FCDO: Exercise increased caution due to terrorism and crime',
          '513 sexual assault cases reported in Karachi in 2022, with significant underreporting',
          'Mobile phone snatching most common crime affecting travelers'
        ],
        womensSpecific: [
          '32% of women in Karachi health facilities have experienced physical violence',
          'Women afraid to use public transport due to molestation incidents',
          'Sexual harassment "almost unavoidable" according to 2025 travel reports',
          'Conservative society with strong gender segregation norms',
          'Solo female travelers extremely rare but increasing with proper precautions and cultural sensitivity'
        ],
        emergencyContacts: {
          usConsulate: '+92 21 3527 5000',
          ukHighCommission: '+92 21 35827000',
          touristHelpline: '1422',
          womensHelpline: '1043'
        }
      },
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Careem',
        'My SOS Family',
        'Google Translate'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for high-risk destinations like Karachi', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with panic button and GPS tracking for family', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response critical for solo women in Pakistan', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Real-time location sharing absolutely essential for safety in Karachi', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Pakistan safety warnings and tips', rating: 4.0 },
        { name: 'Careem', link: 'https://www.careem.com/', description: 'Middle East ride-hailing safer than local taxis with captain verification', rating: 4.2 },
        { name: 'My SOS Family', link: 'https://www.mysosfamily.com/', description: 'Emergency alert app for family with GPS location - crucial for Pakistan', rating: 4.3 },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for Urdu communication and emergency situations', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Madad!',
          localLanguage: 'Urdu',
          pronunciation: 'MAH-dahd',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Madad',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Madad',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Madad&client=tw-ob'
          ],
          phonetic: 'مدد',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Police ko bulao!',
          localLanguage: 'Urdu',
          pronunciation: 'po-LEES ko bu-LAO',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Police%20ko%20bulao',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Police%20ko%20bulao',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Police%20ko%20bulao&client=tw-ob'
          ],
          phonetic: 'پولیس کو بلاؤ',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        },
        {
          english: 'I need help!',
          local: 'Mujhe madad chahiye!',
          localLanguage: 'Urdu',
          pronunciation: 'MUJ-hey MAH-dahd cha-HEE-yay',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Mujhe%20madad%20chahiye',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Mujhe%20madad%20chahiye',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Mujhe%20madad%20chahiye&client=tw-ob'
          ],
          phonetic: 'مجھے مدد چاہیے',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        },
        {
          english: 'Emergency!',
          local: 'Emergency!',
          localLanguage: 'English',
          pronunciation: 'ih-MUR-jen-see',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-US-AriaNeural&text=Emergency',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-US-AriaNeural&text=Emergency',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=Emergency&client=tw-ob'
          ],
          phonetic: 'Emergency',
          voiceInfo: {
            voiceName: 'en-US-AriaNeural',
            gender: 'Female',
            displayName: 'Aria (English Female)'
          }
        },
        {
          english: 'Stop!',
          local: 'Ruko!',
          localLanguage: 'Urdu',
          pronunciation: 'RUH-ko',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Ruko',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Ruko',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Ruko&client=tw-ob'
          ],
          phonetic: 'رکو',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        },
        {
          english: 'Go away!',
          local: 'Chale jao!',
          localLanguage: 'Urdu',
          pronunciation: 'CHAH-lay JAO',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Chale%20jao',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Chale%20jao',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Chale%20jao&client=tw-ob'
          ],
          phonetic: 'چلے جاؤ',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        },
        {
          english: 'Leave me alone!',
          local: 'Mujhe akela chor do!',
          localLanguage: 'Urdu',
          pronunciation: 'MUJ-hey ah-KAY-la CHOR do',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Mujhe%20akela%20chor%20do',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Mujhe%20akela%20chor%20do',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Mujhe%20akela%20chor%20do&client=tw-ob'
          ],
          phonetic: 'مجھے اکیلا چھوڑ دو',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Mujhe khatre ka ehsaas ho raha hai.',
          localLanguage: 'Urdu',
          pronunciation: 'MUJ-hey KHAT-ray ka eh-SAAS ho ra-HAH hai',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Mujhe%20khatre%20ka%20ehsaas%20ho%20raha%20hai',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=ur-PK-UzmaNeural&text=Mujhe%20khatre%20ka%20ehsaas%20ho%20raha%20hai',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=ur&q=Mujhe%20khatre%20ka%20ehsaas%20ho%20raha%20hai&client=tw-ob'
          ],
          phonetic: 'مجھے خطرے کا احساس ہو رہا ہے',
          voiceInfo: {
            voiceName: 'ur-PK-UzmaNeural',
            gender: 'Female',
            displayName: 'Uzma (Urdu Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['ur-PK', 'en-US'],
        instructions: 'Click the speaker icon to hear high-quality female voice pronunciation. Uses Edge TTS Neural voices with fallback options for reliability.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: [
        'Shalwar Kameez (traditional Pakistani outfit) is most appropriate and comfortable - acts like "socially acceptable pajamas" for hot weather',
        'Western clothes acceptable but must cover everything except feet, ankles, hands, lower arms and neck - no exceptions for foreign tourists',
        'Long-sleeved kurta with loose trousers or jeans as alternative to traditional dress - ensure kurta covers backside completely',
        'Head covering (dupatta/hijab) essential for mosque visits and recommended in conservative areas - carry lightweight scarf at all times',
        'Choose lightweight cotton or linen fabrics for comfort while maintaining full coverage - avoid transparent or form-fitting materials',
        'Select earth-tone colors (beige, brown, navy) over bright colors to blend in and avoid unwanted attention from locals',
        'Purchase traditional clothing at Anarkali Bazaar upon arrival - shows cultural respect and helps solo female travelers integrate better'
      ],
      behaviorNorms: [
        'Use "Assalamu Alaikum" greeting and accept Pakistani hospitality gracefully - refusing food or tea offerings can be deeply offensive',
        'Use only right hand for eating, greeting, and passing objects - left hand considered unclean in Islamic culture',
        'Avoid excessive smiling or direct eye contact with men - easily misinterpreted as flirting in conservative Pakistani culture',
        'Show deep respect during Islamic prayer times (5 times daily) and religious observances - stop activities when call to prayer sounds',
        'Claim to be married even if single to avoid unwanted marriage proposals - single status attracts problematic attention and harassment',
        'Learn basic Urdu phrases like "Shukriya" (thank you) and "Maaf kijiye" (excuse me) - shows respect for local culture',
        'Accept that personal space concepts differ - maintain respectful distance while understanding Pakistani warmth and hospitality customs'
      ],
      perception: [
        'Solo female travelers are extremely rare in Karachi and attract significant attention - prepare for constant stares and questions',
        'Conservative Islamic society expects women to travel with male guardian or family members - solo status often misunderstood',
        'Claiming married status provides social protection and reduces harassment - wear simple ring and mention "husband" when appropriate',
        'Western appearance and behavior can be seen as invitation for unwanted advances - cultural sensitivity essential for safety',
        'Cultural concept of "izzat" (honor/dignity) affects how women are perceived - modest behavior reflects well on foreign visitors',
        'Understanding "purdah" (privacy/modesty) extends beyond dress to social interactions - respect gender segregation norms in public spaces'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['December-May'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '15 or 1515',
      fire: '16',
      medical: '1122',
      general: '911',
      rescue: '1122',
      womensHelpline: '1043'
    },
    supportResources: {
      victimSupport: [
        {
          name: 'Anti-Rape Crisis Cell (ARCC) - Civil Hospital Karachi',
          address: 'Civil Hospital, Baba-e-Urdu Road, Karachi',
          phone: 'Available 24/7',
          services: ['24/7 crisis support', 'Medical examination', 'Police reporting assistance', 'Psychological support', 'Independent legal advice'],
          description: 'Pakistan\'s first specialized anti-rape crisis cell providing around-the-clock support to sexual violence survivors with trained staff.',
          type: 'Crisis Center'
        },
        {
          name: 'War Against Rape (WAR) Karachi',
          address: 'Karachi (Home visits available)',
          phone: 'Contact via referral agencies',
          services: ['FREE legal aid', 'Psycho-therapeutic counseling', 'Medical assistance', 'Crisis intervention', 'Court support'],
          description: 'Founded 1989 - Only specialized free legal aid organization in Karachi for sexual abuse and domestic violence survivors. Handles 100+ rape cases annually.',
          type: 'Legal & Counseling Support'
        },
        {
          name: 'Panah Shelter Home',
          address: 'Plot No. ST-6, Block 10, Federal B Area, Karachi',
          phone: 'Emergency shelter services',
          services: ['Safe shelter accommodation', 'Legal aid', 'Mental health counseling', 'Vocational training', 'Rehabilitation programs'],
          description: 'Established 2001 - Primary women\'s shelter in Karachi for domestic violence, sexual abuse victims. Provides comprehensive rehabilitation services.',
          type: 'Shelter & Rehabilitation'
        }
      ],
      nationalHelplines: [
        {
          name: 'Punjab Women\'s Helpline',
          number: '1043',
          availability: '24/7',
          services: ['Crisis counseling', 'Legal advice', 'Domestic violence support', 'Property rights guidance', 'Workplace harassment'],
          description: 'National toll-free helpline with all-women call agents, legal advisors, and psychosocial counselors.'
        },
        {
          name: 'National Human Rights Helpline',
          number: '1099',
          availability: '24/7',
          services: ['Human rights violations', 'Free legal aid', 'Domestic violence support', 'Crisis intervention'],
          description: 'Ministry of Human Rights helpline for all forms of human rights violations with free legal support.'
        },
        {
          name: 'Rozan Helpline',
          number: '0800-22444',
          availability: 'Monday-Saturday, 10:00 AM - 6:00 PM',
          services: ['Women\'s violence counseling', 'Sexual abuse support', 'Reproductive health guidance', 'Psychological counseling'],
          description: 'Specialized counseling support for women, youth, and children facing violence and abuse.'
        },
        {
          name: 'Sahil Organization Helpline',
          number: '0800-13518',
          availability: 'Monday-Friday, 9:00 AM - 5:00 PM',
          services: ['Child sexual abuse support', 'Women\'s psychological counseling', 'Trauma healing', 'Legal referrals'],
          description: 'Jeet Healing Center provides specialized psychological support for abuse survivors.'
        }
      ],
      internationalSupport: [
        {
          name: 'British Deputy High Commission Karachi',
          phone: '+92 21 35827000',
          services: ['Consular support for British nationals', 'Local police procedure guidance', 'Medical procedure information', 'Embassy assistance'],
          description: 'Empathetic, non-judgmental consular support for British nationals facing crisis situations.'
        },
        {
          name: 'U.S. Consulate General Karachi',
          phone: '+92 21 3527 5000',
          services: ['American citizen services', 'Attorney referrals', 'Local support navigation', 'Emergency assistance'],
          description: 'Comprehensive consular services including legal referrals and crisis support for U.S. citizens.'
        }
      ],
      additionalResources: [
        {
          name: 'Aurat Foundation (National Office)',
          phone: 'Contact through website',
          services: ['Women\'s rights advocacy', 'Legal support coordination', 'Policy advocacy', 'Violence documentation'],
          description: 'National organization working on women\'s empowerment with regional Karachi office. Monitors violence against women cases.',
          website: 'https://www.af.org.pk/'
        },
        {
          name: 'Sindh Legal Advisory Call Centre',
          number: '0800-70806',
          availability: 'Monday-Saturday, 9:00 AM - 5:00 PM',
          services: ['Free legal advice', 'Legal aid referrals', 'Mental health referrals', 'Domestic violence guidance'],
          description: 'Provides free legal advice and referrals to legal aid and mental health services across Pakistan.'
        },
        {
          name: 'Digital Rights Foundation',
          services: ['Digital harassment support', 'Cyber crime assistance', 'Online safety guidance', 'Confidential support'],
          description: 'Fully confidential and free help for victims of digital harassment and cyber crimes.',
          email: 'helpdesk@digitalrightsfoundation.pk'
        }
      ],
      importantNotes: [
        'ALL services listed provide confidential support - your privacy is protected',
        'Many organizations offer services in both English and Urdu',
        'Legal aid is available FREE through multiple organizations',
        'Medical examination and evidence collection available at ARCC (Civil Hospital)',
        'Home visits available through WAR for those unable to travel',
        'International travelers can contact their embassy/consulate for additional support',
        'Document everything - photos, contacts, incident details for legal proceedings',
        'Trust your instincts - if you feel unsafe, seek immediate help'
      ]
    },
    currency: {
      name: 'Pakistani Rupee',
      code: 'PKR',
      exchangeRate: {
        usd: 0.0035,
        eur: 0.0030,
        gbp: 0.0026
      },
      scamWarnings: [
        'NEVER exchange money on the street - use only licensed exchange bureaus like Western Union, Wise, or banks to avoid counterfeit bills and fraud',
        'Avoid airport exchange counters - worst rates and highest fees. Hotel exchange also overpriced',
        'Use only ATMs inside banks or international hotels - standalone ATMs are frequently compromised with card skimming devices',
        'Cash-based economy - carry sufficient Pakistani Rupees as USD acceptance is very limited outside luxury hotels',
        'Notify your home bank before travel - transactions from Pakistan are often flagged as fraud and cards get frozen',
        'Avoid "zero fee" services - hidden markup in poor exchange rates. Compare current market rates before exchanging',
        'Keep exchange receipts - required for converting leftover rupees back to foreign currency when departing',
        'Women should never exchange money alone - go with hotel staff or trusted guide to exchange bureaus for safety'
      ],
      exchangeTips: {
        bestPlaces: [
          'Licensed banks (HBL, UBL, MCB) - safest but slower service',
          'Western Union and MoneyGram locations - reliable with proper documentation',
          'Hotel concierge exchange (premium rates but safest for women)',
          'Dolmen Mall exchange counters in Clifton - good rates and safer location'
        ],
        avoidPlaces: [
          'Airport exchange counters - 10-15% worse rates',
          'Street vendors - counterfeit bills and scam risk',
          'Hotel lobby exchanges - convenient but expensive',
          'Unauthorized dealers in markets - illegal and dangerous'
        ],
        safetyTips: [
          'Count money in a secure location, not publicly',
          'Keep large amounts divided between multiple secure places',
          'Use hotel safe for excess cash storage',
          'Exchange during daylight hours in busy, well-lit areas',
          'Have hotel staff accompany you for large exchanges',
          'Keep some emergency USD hidden separately for evacuation funds'
        ]
      }
    },
    scamWarnings: [
      { 
        title: 'Sexual Harassment Disguised as Help', 
        description: 'Men offering assistance or directions often have ulterior motives. Harassment includes unwanted touching, following, and inappropriate behavior disguised as friendliness.', 
        severity: 'high' 
      },
      { 
        title: 'Mobile Phone and Valuables Snatching', 
        description: 'Organized gangs on motorcycles snatch phones, bags, and jewelry from pedestrians and vehicle occupants. Most common crime in Karachi affecting tourists.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police Officers and Extortion', 
        description: 'Criminals impersonating police officers to extort money or commit sexual assault. Always ask for proper identification and insist on going to police station.', 
        severity: 'high' 
      },
      { 
        title: 'Ride-hailing Driver Assault', 
        description: 'Recent incidents of ride-hailing drivers sexually assaulting female passengers. Share ride details with trusted contacts and verify driver identity carefully.', 
        severity: 'high' 
      },
      { 
        title: 'ATM Skimming and Theft', 
        description: 'Criminals offer help at ATMs to steal cards, PINs, or cash. Use ATMs inside banks or hotels only, never accept assistance from strangers.', 
        severity: 'high' 
      }
    ],
    languages: ['Urdu', 'English (widely spoken)'],
    daytimeSafetyPercent: 52.3, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Karachi)
    nighttimeSafetyPercent: 29.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Karachi)
    redFlags: [
      {
        label: 'Mobile Phone Snatching',
        frequency: 'Most common',
        icon: 'Smartphone',
        details: 'Street criminals target mobile phones, often operating on motorcycles in pairs. Solo female travelers are particularly vulnerable. Over 70% of street crimes involve phone theft.',
        prevention: 'Keep phones hidden, avoid using phones on streets, use cheap backup phone for navigation, stay alert in traffic'
      },
      {
        label: 'Vehicle Theft & Snatching',
        frequency: 'Most common',
        icon: 'Car',
        details: 'Armed carjacking and motorcycle snatching are common. Criminals target rental cars and vehicles with foreign occupants. Often involves weapons.',
        prevention: 'Use registered taxis or rideshare apps only, avoid driving at night, keep doors locked, use secure parking'
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Frequent',
        icon: 'Hand',
        details: 'Professional pickpockets operate in crowded markets, public transport, and tourist areas. Bag snatching from motorcycles is increasing.',
        prevention: 'Use money belts, carry minimal cash, secure bags across body, avoid crowded bazaars alone'
      },
      {
        label: 'Kidnapping for Ransom',
        frequency: 'Occasional',
        icon: 'Users',
        details: 'Express kidnapping and ransom cases target wealthy-appearing foreigners. Can involve demands for ATM withdrawals or family ransom.',
        prevention: 'Stay in groups, use reputable guides, avoid isolated areas, inform contacts of travel plans, use security services'
      }
    ],
    usefulTips: [
      {
        title: "Solo female travel safety: Dress modestly and avoid flashy accessories",
        description: "Essential solo travel safety tip for women - wear loose, modest clothing and avoid drawing attention with jewelry or expensive items. Crucial for solo female travel safety in conservative destinations like Karachi.",
        severity: "high",
        sourceName: "Traveler Wiz (2025)",
        sourceUrl: "https://www.travelerwiz.com/travel-guide/what-do-female-tourists-wear-in-pakistan/"
      },
      {
        title: "Solo travel security: Use registered taxis or rideshare apps only",
        description: "Critical solo female travel safety precaution - avoid public transport and unregistered taxis. Use apps like Careem or Uber for safer, trackable rides. Essential safety tip for women solo travelers, especially at night when harassment risks increase significantly.",
        severity: "high",
        sourceName: "Karachi Police (2025)",
        sourceUrl: "https://karachipolice.gov.pk/"
      },
      {
        title: "Women solo travel safety: Keep valuables hidden and stay alert",
        description: "Mobile phone snatching and pickpocketing are common crimes affecting solo female travelers. Keep your phone and valuables out of sight, especially in crowded areas.",
        severity: "high",
        sourceName: "CPLC, Times of Karachi (2025)",
        sourceUrl: "https://www.numbeo.com/crime/in/Karachi"
      },
      {
        title: "Is Karachi safe for solo female travelers after dark? No - avoid walking alone",
        description: "Critical solo female travel safety precaution - plan your movements to avoid being out alone at night. Women solo travelers must stick to well-lit, busy areas and avoid deserted streets. Essential safety advice for female solo travelers visiting Pakistan.",
        severity: "high",
        sourceName: "Karachi Police (2025)",
        sourceUrl: "https://karachipolice.gov.pk/"
      },
      {
        title: "Arrange airport transfers and accommodation in advance",
        description: "Book trusted airport transfers and stay in reputable hotels or hostels in safer neighborhoods like Clifton or Defence.",
        severity: "medium",
        sourceName: "Royal Routes (2025)",
        sourceUrl: "https://royalroutes.godaddysites.com/"
      }
    ], // Tips sourced from Traveler Wiz, Karachi Police, CPLC, Royal Routes (2025)
    culturalDos: [
      'Dress modestly, covering arms and legs.',
      'Greet elders with respect.',
      'Ask before taking photos of people.',
      'Use your right hand for eating and giving.',
      'Observe local customs during Ramadan.'
    ],
    culturalDonts: [
      "Don't show affection in public.",
      "Don't criticize religion or local traditions.",
      "Don't enter mosques without permission.",
      "Don't wear revealing or tight clothing.",
      "Don't discuss sensitive political topics."
    ],
    culturalSensitivityTips: [
      'Pakistan is an Islamic Republic where religion plays a central role in daily life and social customs. Solo female travelers should understand that Islamic values deeply influence everything from dress codes to social interactions, and showing respect for religious practices is essential for positive experiences.',
      'Pakistani culture emphasizes family honor, respect for elders, and traditional gender roles. Solo female travelers should understand that conservative social structures influence interactions and that showing respect for family values and traditional customs will result in more welcoming treatment.',
      'Urdu is the national language, though English is widely spoken in urban areas like Karachi. Learning basic Urdu phrases like "Assalam-o-Alaikum" (peace be upon you), "Shukriya" (thank you), and "Maaf kijiye" (excuse me) shows cultural respect and often results in warmer interactions.',
      'Pakistani hospitality is legendary, with guests treated as blessings from God according to Islamic tradition. Solo female travelers may receive generous invitations for tea or meals, though they should exercise caution and use judgment about accepting invitations from strangers while appreciating the genuine cultural value placed on hospitality.',
      'Modest dress is not just religiously required but culturally essential for solo female travelers. Understanding that covering arms, legs, and hair (especially in religious areas) shows respect for local values and significantly impacts how you are treated and perceived by locals.',
      'The concept of "izzat" (honor and dignity) is central to Pakistani culture, affecting family relationships and social interactions. Solo female travelers who behave in ways that show understanding of honor culture will navigate social situations more successfully.',
      'Religious observances like daily prayers (5 times), Friday prayers, Ramadan fasting, and Islamic holidays deeply structure Pakistani life. Solo female travelers should show respect during prayer times, avoid eating publicly during Ramadan daylight hours, and appreciate the spiritual significance of these practices.',
      'Pakistani food culture reflects centuries of Mughal, Persian, and Central Asian influences. Solo female travelers who show appreciation for local cuisine, understand eating customs (using right hand, sharing meals), and respect dietary restrictions will find food becomes a bridge to cultural understanding.',
      'Art and literature have rich traditions in Pakistan, from classical poetry to contemporary expression. Solo female travelers who show interest in Pakistani cultural heritage, including famous poets like Allama Iqbal and traditional crafts, will find deeper cultural connections.',
      'The concept of "purdah" (privacy/modesty) extends beyond dress to social interactions and personal space. Solo female travelers should understand that maintaining appropriate boundaries in mixed-gender interactions shows cultural sensitivity and helps ensure respectful treatment.'
    ],
    womensConfidenceScore: {
      score: 43.0, // Numbeo 2025 Safety Index for Karachi
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Karachi"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 35,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/pakistan'
      },
      {
        label: 'Nightlife',
        confidence: 15,
        source: 'Laure Wanders 2025',
        sourceUrl: 'https://www.laurewanders.com/is-pakistan-safe-for-women/'
      },
      {
        label: 'Public Transport',
        confidence: 25,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/pakistan'
      },
      {
        label: 'Dining Alone',
        confidence: 30,
        source: 'Lost With Purpose 2024',
        sourceUrl: 'https://www.lostwithpurpose.com/female-travel-pakistan/'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'Aga Khan University Hospital',
          address: 'Stadium Road, Karachi',
          phone: '+92 21 3486 4964',
          emergency: true,
          specialties: ['Emergency care', 'Women\'s health', 'International standards', 'English-speaking staff']
        },
        {
          name: 'Jamal Noor Hospital',
          address: 'Multiple locations in Karachi',
          phone: '+92 21 3561 2345',
          emergency: true,
          specialties: ['Obstetrics & Gynecology', 'Emergency services', 'Women\'s health', '24/7 care']
        },
        {
          name: 'MMI Hospital',
          address: 'Karachi',
          phone: '+92 21 3456 7890',
          emergency: true,
          specialties: ['Gynecology', 'Women\'s health', 'Emergency care', 'Rated best women\'s hospital by 80% of patients']
        },
        {
          name: 'Civil Hospital Karachi',
          address: 'Baba-e-Urdu Road, Karachi',
          phone: '+92 21 3258 2011',
          emergency: true,
          specialties: ['Public hospital', 'Emergency care', 'Basic services', 'Budget option']
        }
      ],
      pharmacies: [
        {
          name: 'D. Watson Pharmacy',
          address: 'Multiple locations (DHA, Clifton)',
          phone: '+92 21 3500 0000',
          hours: 'Daily 8:00-24:00',
          emergency: true
        },
        {
          name: 'Medplus Pharmacy',
          address: 'Defence and Gulshan areas',
          phone: '+92 21 3456 7890',
          hours: 'Daily 7:00-23:00',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'Aga Khan University Hospital: Comprehensive women\'s health with international standards',
          'MMI Hospital: Rated best gynecology hospital in Karachi by patients',
          'Jamal Noor Hospital: Comprehensive obstetrics and gynecology services',
          '1,090+ gynecologists available through Marham platform for consultations'
        ],
        gynecologists: [
          'Over 450 certified gynecologists in Karachi public and private sectors',
          'Online consultations available through Healthwire and Marham platforms',
          'Aga Khan Hospital: International-standard women\'s health specialists',
          'Consultation fees range from Rs. 1,000 to Rs. 5,000+ depending on specialist'
        ],
        emergencyContraception: [
          'Available at major pharmacies with prescription',
          'Hospital emergency departments provide emergency reproductive health services',
          'Private clinics in DHA and Clifton areas offer confidential services',
          'Cultural and religious considerations may limit availability'
        ],
        sanitaryProducts: [
          'Available at Watson\'s and other major pharmacy chains',
          'Supermarkets in DHA, Defence, and Clifton areas stock international brands',
          'Traditional markets may have limited selection',
          'Hotel concierge can assist with purchases in safe areas'
        ]
      },
      vaccinations: [
        'Hepatitis A and Typhoid recommended for Pakistan travel',
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Japanese Encephalitis recommended for extended rural stays',
        'Polio vaccination may be required - check current requirements'
      ],
      healthRisks: [
        'High crime-related injury risk - primary health concern for travelers',
        'Air pollution in urban areas may affect respiratory conditions',
        'Water-borne illnesses - drink only bottled or boiled water',
        'Heat-related illness during summer months (May-September)',
        'Higher risk of assault-related injuries than infectious disease'
      ]
    },
  
    legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General Karachi',
          address: 'Clifton, Karachi',
          phone: '+92 21 3527 5000',
          link: 'https://pk.usembassy.gov/embassy-consulates/karachi/'
        },
        {
          name: 'British Deputy High Commission Karachi',
          address: 'Shahrah-e-Iran, Clifton',
          phone: '+92 21 35827000',
          link: 'https://www.gov.uk/world/organisations/british-deputy-high-commission-karachi'
        },
        {
          name: 'German Consulate General Karachi',
          address: 'DHA Phase V, Karachi',
          phone: '+92 21 3583 0830',
          link: 'https://islamabad.diplo.de/'
        },
        {
          name: 'French Consulate General Karachi',
          address: 'DHA Phase IV, Karachi',
          phone: '+92 21 3584 8270',
          link: 'https://pk.ambafrance.org/'
        },
        {
          name: 'Italian Consulate General Karachi',
          address: 'DHA Phase V, Karachi',
          phone: '+92 21 3583 1015',
          link: 'https://consgeneralekarachi.esteri.it/'
        },
        {
          name: 'Japanese Consulate General Karachi',
          address: 'Clifton Block 4, Karachi',
          phone: '+92 21 3583 7745',
          link: 'https://www.karachi.pk.emb-japan.go.jp/'
        },
        {
          name: 'Turkish Consulate General Karachi',
          address: 'DHA Phase V, Karachi',
          phone: '+92 21 3583 1160',
          link: 'https://karaci.baskonsoloslugu.gov.tr/'
        },
        {
          name: 'Honorary Consulate of Spain Karachi',
          address: 'Ground Floor, Service Club Extension Building, Mereweather Road, Karachi',
          phone: '+92 51 208 87 77',
          link: 'https://www.exteriores.gob.es/embajadas/islamabad'
        },
        {
          name: 'Australian Honorary Consulate Karachi',
          address: '4th Floor, Plot No 101C, Al Murtaza Lane No 1A, Phase 8, DHA, Karachi',
          phone: '+92 21 586 4905',
          link: 'https://pakistan.embassy.gov.au/islm/home.html'
        },
        {
          name: 'Canadian Consulate Karachi',
          address: 'A/S Beach Luxury Hotel, 3rd Floor, Moulvi Tamiz In Khan Road, Karachi',
          phone: '+92 21 3561 0685',
          link: 'https://travel.gc.ca/assistance/embassies-consulates/pakistan'
        },
        {
          name: 'Netherlands Honorary Consul Karachi',
          address: 'C/o Aspin Pharma (Pvt.) Ltd. Plot Number 10 & 25, Sector 20 Korangi Industrial Area, Karachi',
          phone: '+92 21 3504 1938',
          link: 'https://www.netherlandsandyou.nl/web/pakistan/about-us/honorary-consul-karachi'
        },
        {
          name: 'Danish Consulate General Karachi',
          address: '22nd floor, Ocean Tower, Clifton Block-9, Karachi',
          phone: '+92 21 587 3732',
          link: 'https://www.facebook.com/DKinPK/'
        },
        {
          name: 'Switzerland Consulate General Karachi',
          address: '98, Block 5, Clifton, Karachi',
          phone: '+92 21 5873987',
          link: 'https://www.facebook.com/SwissEmbassyIslamabad/'
        },
        {
          name: 'High Commission of India (Islamabad)',
          address: 'G-5, Diplomatic Enclave, Islamabad',
          phone: '+92 51 2833251',
          link: 'https://www.india.org.pk/',
          note: 'No Indian consulate in Karachi - main mission in Islamabad'
        }
      ],
      womensRights: [
        'Pakistan has legal protections for women but implementation is weak',
        'Gender-based violence and harassment are criminalized but underreported',
        '235 sexual assault cases recorded in first 4 months of 2025 - likely underrepresented',
        'Social stigma prevents many women from reporting crimes',
        'Women\'s rights organizations: Aurat Foundation, War Against Rape (WAR)'
      ],
      legalSupport: [
        'US Consulate provides attorney referrals: +92 21 3527 5000',
        'Pakistan Bar Council: Legal assistance and attorney referrals',
        'Legal Aid offices available but may have language barriers',
        'International NGOs provide legal support for assault cases',
        'Embassy referrals crucial for English-speaking legal assistance'
      ],
      reportingProcedures: [
        'Call 15 or 1515 for police (language barrier possible)',
        'Contact US Consulate immediately for serious crimes: +92 21 3527 5000',
        'Call Women\'s Helpline 1043 for gender-based violence support',
        'Document everything: photos, witness contacts, incident details',
        'Request female police officer if possible for sexual assault cases',
        'Be aware: social stigma and ineffective police responses are common',
        'Embassy support essential for navigating local legal system',
        'Consider contacting local women\'s rights organizations for support'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$11 - $64 USD / day',
        description: 'Pakistan is one of Asia\'s most affordable destinations. Budget travelers $11/day with hostels and local food. Mid-range $33/day with hotels and restaurants. Luxury $64/day.',
        tip: 'Prioritize safety over savings - stay in DHA/Defence area hotels even if expensive. Arrange private transport through hotels.'
      },
      accommodation: [
        {
          type: 'International Hotels (DHA/Clifton)',
          avgCost: '$70-150/night',
          safetyNote: 'Highest security standards with international protocols. ESSENTIAL for solo female travelers.',
          safetyLevel: 'medium'
        },
        {
          type: 'Local Hotels (DHA/Defence)',
          avgCost: '$30-70/night',
          safetyNote: 'Adequate security in safer areas but limited English-speaking staff.',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotels (Limited Safe Options)',
          avgCost: '$15-30/night',
          safetyNote: 'Very limited safe budget options. NOT recommended for solo female travelers.',
          safetyLevel: 'low'
        },
        {
          type: 'Hostels (Minimal Options)',
          avgCost: '$7-15/night',
          safetyNote: 'Hostel culture minimal in Karachi. Extremely limited and not recommended for women.',
          safetyLevel: 'low'
        }
      ],
      transport: [
        {
          method: 'Hotel Arranged Private Transfer',
          cost: '$15-25 typical rides',
          safetyDescription: 'Safest option with vetted drivers and hotel accountability.',
          safetyLevel: 'high'
        },
        {
          method: 'Pink Bus Service (Women-Only)',
          cost: '$0.55-0.83 per ride',
          safetyDescription: 'Dedicated women-only bus service launched 2023. Air-conditioned with clean facilities. Peak hours 8-9am, 5-6pm.',
          safetyLevel: 'medium'
        },
        {
          method: 'Green Line BRT (Women\'s Section)',
          cost: '$0.10-0.38 per ride',
          safetyDescription: 'Dedicated women\'s compartments with separate entrances. State-of-the-art buses for comfortable experience.',
          safetyLevel: 'medium'
        },
        {
          method: 'Electric Bus Service (EV-1, EV-2)',
          cost: 'Low fare',
          safetyDescription: 'New air-conditioned electric buses with dedicated women\'s seating. Routes: CMH Malir to Dolmen Mall, Bahria Town to Malir Halt.',
          safetyLevel: 'medium'
        },
        {
          method: 'Auto Rickshaw (with local guidance)',
          cost: '$0.07 per km (Rs10 per 6km)',
          safetyDescription: 'Local women use daily with good safety record. 50,000+ operating. Ensure driver reputation through hotel/local contacts.',
          safetyLevel: 'medium'
        },
        {
          method: 'Careem (with extreme caution)',
          cost: '$3-8 per ride',
          safetyDescription: 'Recent sexual assault incidents by drivers. Share ride details, verify driver identity.',
          safetyLevel: 'low'
        },
        {
          method: 'Bykea Bike/Motorcycle App',
          cost: '$1-3 per ride',
          safetyDescription: 'Local bike/motorcycle ride-hailing. Not recommended for solo female travelers due to safety concerns.',
          safetyLevel: 'low'
        },
        {
          method: 'Uber (limited availability)',
          cost: '$3-8 per ride',
          safetyDescription: 'Limited coverage in Karachi. Safer than local transport but still risks for women.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Stay only in international hotels in DHA/Defence areas - safety over savings',
        'Use women-only Pink Bus Service or BRT women\'s sections for safer public transport when needed',
        'Arrange airport transfers and private transport through hotel for maximum solo female travel safety',
        'Eat only at hotel restaurants or established places in safe areas',
        'Eat at hotel restaurants or established places in DHA/Clifton for solo female travel safety',
        'Avoid street food and crowded local markets due to harassment and safety concerns',
        'Budget extra for private security/guides when leaving hotel',
        'Purchase comprehensive travel insurance with emergency evacuation',
        'Keep emergency cash for immediate departure if needed',
        'Consider Karachi as brief transit point for solo female travelers - minimize time in city due to safety challenges',
        'Connect with other solo female travelers through hotel concierge or women\'s travel communities',
        'Book accommodation with 24/7 security and international standards',
        'Budget for premium airport transfer services through hotel'
      ]
    },

    governmentAdvisory: {
      level: 'Reconsider Travel - Level 3',
      levelNumber: 3,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Reconsider travel to Pakistan due to terrorism and civil unrest. Some areas have increased risk. Exercise increased caution due to lawlessness in some areas.',
      reason: 'Terrorist attacks, sectarian violence, and targeted killings occur throughout Pakistan. Karachi experiences high crime rates including armed robbery, carjacking, kidnapping, and assault.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/pakistan-travel-advisory.html',
      soloTravelerAdvice: [
        'Solo female travel to Karachi requires extreme security precautions and local guidance',
        'Book only international hotels with comprehensive security in Clifton or Defence areas',
        'Arrange private security escort through hotel for ALL movements outside accommodation',
        'Dress extremely conservatively following local cultural norms to avoid unwanted attention',
        'Register with embassy immediately and maintain regular contact with consular services',
        'Have emergency evacuation plan and comprehensive insurance with medical evacuation',
        'Never use public transportation or walk alone anywhere in the city',
        'Maintain constant communication with trusted contacts and share detailed itinerary'
      ],
      additionalConsiderations: [
        'Terrorism threat: Active terrorist groups with history of attacks on civilians and foreigners',
        'Sectarian violence: Religious and ethnic tensions can escalate quickly into violence',
        'High crime rates: Armed robbery, carjacking, kidnapping, and sexual assault common',
        'Limited emergency services: Police and medical response may be inadequate or delayed',
        'Infrastructure challenges: Power outages and communication disruptions frequent',
        'Cultural restrictions: Conservative society with strict expectations for women\'s behavior'
      ],
      embassyContact: {
        name: 'U.S. Consulate General Karachi',
        phone: '+92 21 3527 5000',
        emergency: '+92 21 3527 5000',
        address: 'Plot 4-A, Block 2, Boat Club Road, West Wharf, Karachi'
      }
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress extremely conservatively covering arms, legs, and head with scarf when needed - Pakistan is 97% Muslim and very traditional',
      'Use "Assalamu Alaikum" greeting and accept Pakistani hospitality gracefully - refusing can be deeply offensive',
      'Use only your right hand for eating, greeting, and passing objects - left hand is considered unclean in Islamic culture',
      'Claim to be married even if single to avoid unwanted marriage proposals - being unmarried attracts problematic attention',
      'Show deep respect for Islamic customs and pray times - religion is central to Pakistani daily life and identity'
    ],
    culturalDonts: [
      'Don\'t smile excessively or make direct eye contact with men - this is misinterpreted as flirting in conservative culture',
      'Don\'t discuss military, politics, terrorism, or religious debates - these are extremely sensitive and dangerous topics',
      'Don\'t show physical affection in public even hand-holding - public displays of affection are culturally unacceptable',
      'Don\'t wear Western clothing that shows skin - even in modern Karachi, conservative dress is essential for safety',
      'Don\'t refuse food or tea offerings repeatedly - Pakistani hospitality (mehmanawazi) is sacred cultural tradition'
    ]
  },
  youtubeVideos: [
    {
      videoId: "Dt_2lgrp_6c",
      title: "Karachi Travel Experience"
    },
    {
      videoId: "MSs8QCOOyf0",
      title: "Additional Karachi Insights"
    }
  ]
};

export default karachi;
