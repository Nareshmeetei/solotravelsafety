import { Destination } from './types';

// Enhanced Safety Data for Lagos - January 2025 Update
const lagos: Destination = {
    city: 'Lagos',
    country: 'Nigeria',
    continent: 'Africa',
    countryCode: 'ng',
    overallScore: 2.3,
    nightSafety: 1.6,
    publicTransit: 2.0,
    walkingAlone: 1.9,
    tags: ['warning-flags', 'high-crime', 'kidnapping-risk'],
    bgColor: 'bg-red-75',
    reviewCount: 623,
    lastUpdated: '12 hours ago',
    safetySummaryForSEO: 'Is Lagos safe for women solo travelers? Lagos presents significant challenges for solo female travel safety with very low confidence scores and high harassment risks. While some women have traveled successfully to Lagos, expert sources consistently recommend extreme caution. Solo female travel safety precautions must include 24/7 hotel security, private transportation, and comprehensive emergency planning. Women traveling alone safety requires international hotel accommodation, embassy contact information, and continuous communication with trusted contacts. Solo travel safety for women beginners should consider Lagos only as a brief transit point with professional security arrangements.',
    harassmentRisk: 'high',
    safetyBreakdown: {
      nightSafety: { 
        score: 1.6, 
        context: 'Extremely dangerous at night with only 18.6% nighttime safety rating (Numbeo 2025). High violent crime including armed robbery, assaults targeting foreigners, and kidnapping. Canadian and Australian governments advise high caution specifically for Lagos. Avoid any outdoor movement after dark.' 
      },
      publicTransit: { 
        score: 2.0, 
        context: 'Public transport presents severe harassment and crime risks. Street harassment "taken as the norm" with Lagos described as "misogynistic state." Frequent pickpocketing, bag snatching, and phone theft during rush hour. Crowded conditions enable sexual harassment and inappropriate touching.' 
      },
      walkingAlone: { 
        score: 1.9, 
        context: 'Walking alone strongly discouraged with Lagos ranked #7 safest in Nigeria (2.3/5 rating). High street harassment ranging from catcalling to "intense verbal assertiveness." Petty crime prevalent in crowded areas. Foreigners frequently targeted for theft and harassment.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Victoria Island',
          description: 'Upscale business district with international hotels, embassies, and corporate offices. Relatively safer with better security presence but still requires constant vigilance. Location of US Consulate General and British Deputy High Commission. Best area for accommodation but not safe for solo walking.'
        },
        {
          name: 'Ikoyi',
          description: 'Affluent residential area with upscale housing and some commercial facilities. Better security infrastructure than most Lagos areas but crime still occurs. Mainly residential with limited tourist attractions. Safer for accommodation but caution required when traveling.'
        },
        {
          name: 'Lekki (Chevron Area)',
          description: 'Modern planned development with gated communities, shopping malls, and beaches. Alpha Beach Road area considered relatively safe due to Chevron oil company presence attracting expatriates. Booming arts scene and nightlife but exercise extreme caution.'
        }
      ],
      caution: [
        'Yaba (University area with mixed safety conditions)',
        'Surulere (Densely populated with higher crime rates)',
        'Lagos Island (Historic but crowded with crime concerns)', 
        'Ikeja (Airport area with mixed safety conditions)'
      ],
      avoid: [
        'Mushin (High crime, avoid completely)',
        'Ajegunle (Dangerous slum area, extremely high crime)',
        'Oshodi (Transport hub with high crime rates)',
        'All areas after dark (extremely dangerous for women)',
        'Isolated areas even in "safer" neighborhoods'
      ]
    },
    accommodations: [
      {
        name: 'Radisson Blu Anchorage Hotel Lagos, V.I.',
        type: 'luxury hotel',
        features: ['Victoria Island waterfront location', 'Armed security 24/7', 'International security standards', '24/7 concierge services', 'Multiple on-site restaurants', 'Private marina access', 'Business center', 'Spa and fitness', 'Airport shuttle service'],
        rating: 4.6,
        priceRange: '$180-450/night',
        safetyLevel: 'highest',
        notes: 'Ranked #3 of 165 hotels in Lagos with 4/5 TripAdvisor rating. Solo female travelers specifically recommend this property. Excellent hotel security with armed guards and controlled access. Victoria Island\'s safest location with comprehensive safety measures. Essential choice for solo female travelers seeking luxury with proven security protocols.'
      },
      {
        name: 'The Wheatbaker Hotel Lagos',
        type: 'luxury boutique hotel',
        features: ['Victoria Island elite location', 'Luxury boutique design', '60 soundproofed rooms', 'Outdoor pool and spa', 'Fine dining restaurant', 'Fitness center', 'Free Wi-Fi', 'Private parking', 'Concierge services'],
        rating: 4.7,
        priceRange: '$220-380/night',
        safetyLevel: 'highest',
        notes: '5-star boutique hotel exuding classic elegance with luxurious rooms and manicured gardens. Guests consistently praise "excellent service, nice rooms, great location, great food." Preferred choice for discerning solo female travelers seeking tranquil luxury environment with exceptional safety standards.'
      },
      {
        name: 'Mövenpick Hotel Ikoyi Lagos',
        type: 'international luxury hotel',
        features: ['Gateway to Victoria Island', 'Leafy business district', '182 rooms and suites', 'Luscious garden oasis', 'International restaurant', 'Pool bar', 'Fitness center', 'Swimming pool', 'Conference facilities'],
        rating: 4.6,
        priceRange: '$200-420/night',
        safetyLevel: 'highest',
        notes: 'Luxury urban oasis in secure Ikoyi district. 182 rooms offering classic comfort with Wi-Fi and premium amenities. Creates serene retreat for solo female travelers with comprehensive security measures and professional international hotel standards.'
      },
      {
        name: 'Nordic Hotel Lagos',
        type: 'luxury boutique hotel',
        features: ['Victoria Island central location', 'Scandinavian minimalist design', 'Modern luxury amenities', 'Serene pool area', 'Fine dining restaurant', 'Fitness center', 'Business facilities', 'Contemporary suites'],
        rating: 4.8,
        priceRange: '$160-350/night',
        safetyLevel: 'highest',
        notes: 'Known for "exceptional" service with Scandinavian design simplicity. Guests rave about "beautiful serene pool area, comfortable bed, very clean, delicious food and top notch service." Minimalist aesthetic creates calming atmosphere perfect for solo female travelers seeking luxury with peace of mind.'
      },
      {
        name: 'Eko Hotels & Suites',
        type: 'luxury hotel',
        features: ['Victoria Island prime location', 'Armed security presence', 'Large security staff', 'Multiple restaurants', 'Private beach access', 'Business center', 'Spa and fitness', 'Conference facilities'],
        rating: 4.5,
        priceRange: '$150-400/night',
        safetyLevel: 'high',
        notes: 'Ranked #17 of 165 hotels in Lagos. Guests specifically note "Security is good felt perfectly safe. The place felt secure due to a large number of guards hanging around, many armed." Half the price of competitors with comparable security. Excellent value for solo female travelers prioritizing safety.'
      },
      {
        name: 'Radisson Blu Hotel Lagos Ikeja',
        type: 'international hotel',
        features: ['5km from airport', 'International chain standards', 'Security personnel', '155 guestrooms including loft suites', 'Business facilities', 'Restaurant and bar', 'Fitness center', '24/7 room service'],
        rating: 4.5,
        priceRange: '$120-250/night',
        safetyLevel: 'high',
        notes: 'Ranked #1 hotel in Ikeja with excellent security near airport. International Radisson standards with professional service. Secure location with reliable transport arrangements. Ideal for solo female travelers needing airport proximity with proven safety protocols.'
      },
      {
        name: 'Federal Palace Hotel',
        type: 'luxury hotel',
        features: ['Victoria Island location', 'Government-grade security', 'Diplomatic clientele', 'Fine dining restaurants', 'Business center', 'Health club', '24/7 security', 'VIP services'],
        rating: 4.5,
        priceRange: '$180-350/night',
        safetyLevel: 'high',
        notes: 'Historic luxury hotel popular with diplomats and government officials. High-level security appropriate for VIP guests. Established reputation for safety among international travelers. Proven track record for solo female business travelers and tourists requiring premium security.'
      },
      {
        name: 'Transcorp Hilton Abuja (Safer Alternative)',
        type: 'luxury hotel',
        features: ['Capital city location', 'Government district', 'International Hilton chain', 'Maximum security area', 'Multiple restaurants', 'Business facilities', 'Spa services'],
        rating: 4.7,
        priceRange: '$150-300/night',
        safetyLevel: 'highest',
        notes: 'Consider Abuja instead of Lagos for significantly improved safety. Located in secure government district with maximum security presence. Guests note "Very Safe" and "one of the safest in Abuja, very well guarded and secured." Superior option for solo female travelers prioritizing safety over Lagos proximity.'
      }
    ],
    alerts: [
      { 
        title: 'High Kidnapping Risk Nationwide', 
        description: 'Canadian and Australian governments report high kidnapping threat across Nigeria including Lagos and Abuja. Foreigners including businesspeople, tourists, and aid workers seen as legitimate targets.', 
        location: 'Nationwide including Lagos', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Violent Crime Against Foreign Nationals', 
        description: 'Crime levels high in Lagos with violent crime including assaults and armed attacks committed against foreign nationals in areas they frequent. Particular targeting of expatriates and tourists.', 
        location: 'All Lagos areas', 
        reportCount: 67, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Street Harassment Epidemic', 
        description: 'Lagos described as "misogynistic state" with harassment "taken as norm." Solo female travelers report regular catcalling, verbal harassment, and unwanted attention ranging from comments to intense verbal assertiveness.', 
        location: 'Citywide, especially markets and transport areas', 
        reportCount: 134, 
        severity: 'high', 
        dateReported: '3 days ago' 
      },
      { 
        title: 'Petty Crime Surge During Rush Hours', 
        description: 'Pickpocketing, bag snatching, and phone theft prevalent during traffic rush hours and in crowded areas. Organized gangs targeting pedestrians and vehicle occupants.', 
        location: 'Transport hubs, markets, crowded areas', 
        reportCount: 89, 
        severity: 'high', 
        dateReported: '1 week ago' 
      }
    ],
    safetyTips: {
      clothing: [
        'Dress extremely conservatively - cover shoulders, arms, and legs completely at all times',
        'Choose loose-fitting, non-form-fitting clothing in neutral colors (black, navy, brown)',
        'Remove ALL jewelry including wedding rings, watches, and small earrings before leaving hotel',
        'Avoid designer brands, logos, or anything that indicates wealth or foreign status',
        'Wear closed-toe shoes only - sandals or open shoes attract unwanted attention',
        'Carry a modest head covering for entering religious sites or conservative areas',
        'Never wear shorts, tank tops, or revealing clothing even in hotel common areas',
        'Blend in with local conservative dress - observe what local women wear and follow suit',
        'Keep expensive items like smartphones hidden - use a basic phone for public use',
        'Pack a lightweight scarf to cover exposed skin when additional modesty is needed'
      ],
      firstTimers: [
        'CRITICAL: Is Lagos safe for solo female travelers? Only with extreme precautions - Book ONLY international chain hotels in Victoria Island with 24/7 armed security (Radisson Blu Anchorage, The Wheatbaker, Nordic Hotel)',
        'NEVER leave hotel premises alone for any reason - arrange professional security escort through hotel concierge for ALL movements including short walks to hotel facilities',
        'Transportation safety protocol: Use ONLY hotel-arranged private drivers with verified credentials and GPS tracking - NEVER use street taxis, motorcycle taxis (Okada), or public transport which have extreme harassment/crime rates',
        'Financial security: Bring sufficient US dollars for entire stay in cash - Nigeria operates cash-only economy with widespread ATM fraud targeting foreign women. Exchange only at hotel with security present',
        'Emergency preparedness: Download and test critical safety apps before departure: NomadHer (female community), bSafe (panic button), Noonlight (emergency response), Life360 (location sharing) with GPS enabled',
        'Embassy registration: Contact your embassy immediately upon arrival - register presence and obtain emergency contact cards. Lagos requires immediate embassy notification for solo female travelers due to high crime rates',
        'Communication protocol: Establish 2-3 hour check-in schedule with trusted contacts at home - share live location via apps and hotel contact information. Missed check-ins should trigger immediate embassy contact',
        'Health and legal support: Program essential numbers: WARIF crisis hotline +234 810 027 3171 (24/7 women\'s support), Embassy emergency lines, Hotel security direct line, Local police 112',
        'Insurance requirements: Obtain comprehensive travel insurance with emergency medical evacuation coverage ($100,000+ recommended) and crisis response services due to limited local healthcare and security infrastructure',
        'Departure planning: Have emergency evacuation funds readily available ($2,000+ cash) and flexible travel arrangements for immediate departure if safety is compromised - many solo female travelers report needing to leave Lagos earlier than planned',
        'Cultural preparation: Understand that Lagos has normalized harassment culture with limited legal recourse - solo female travelers are extremely rare and face significant unwanted attention requiring constant vigilance and professional security support',
        'Government advisory compliance: Follow Level 3 "Reconsider Travel" advisory requirements - solo female travel to Lagos should be considered only for essential business with full security arrangements, not leisure travel'
      ],
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Uber Lagos',
        'OPay',
        'Google Translate'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for high-risk destinations like Lagos', rating: 4.3 },
        { name: 'bSafe', link: 'https://www.getbsafe.com/', description: 'Personal safety app with panic button and GPS tracking critical in Lagos', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response crucial for solo women in Nigeria', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely essential for safety in Lagos', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Nigeria safety warnings', rating: 4.0 },
        { name: 'Uber Lagos', link: 'https://www.uber.com/ng/', description: 'Safest transport option in Lagos with driver verification and GPS tracking', rating: 4.2 },
        { name: 'OPay', link: 'https://opayweb.com/', description: 'Nigerian ride-hailing and mobile payment app - local alternative to Uber', rating: 4.0 },
        { name: 'Google Translate', link: 'https://translate.google.com/', description: 'Essential for Yoruba communication and emergency situations', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Egba mi!',
          localLanguage: 'Yoruba',
          pronunciation: 'EG-ba mee',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Egba%20mi',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Egba%20mi',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Egba%20mi&client=tw-ob'
          ],
          phonetic: 'Egba mi!',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Call the police!',
          local: 'Pe awon ọlọpa!',
          localLanguage: 'Yoruba',
          pronunciation: 'pay AH-won oh-LO-pa',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Pe%20awon%20olopa',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Pe%20awon%20olopa',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Pe%20awon%20olopa&client=tw-ob'
          ],
          phonetic: 'Pe awon ọlọpa!',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'I need a doctor.',
          local: 'Mo nilo dọkita.',
          localLanguage: 'Yoruba',
          pronunciation: 'moh NEE-loh DOH-kee-ta',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20nilo%20dokita',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20nilo%20dokita',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Mo%20nilo%20dokita&client=tw-ob'
          ],
          phonetic: 'Mo nilo dọkita.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Nibo ni ile-iwosan ti o sunmo julọ wa?',
          localLanguage: 'Yoruba',
          pronunciation: 'NEE-boh nee EE-lay ee-WOH-san tee oh SHOON-moh joo-LOH wa',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Nibo%20ni%20ile%20iwosan%20ti%20o%20sunmo%20julọ%20wa',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Nibo%20ni%20ile%20iwosan%20ti%20o%20sunmo%20julọ%20wa',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Nibo%20ni%20ile%20iwosan%20ti%20o%20sunmo%20julọ%20wa&client=tw-ob'
          ],
          phonetic: 'Nibo ni ile-iwosan ti o sunmo julọ wa?',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'I am lost.',
          local: 'Mo ti sọnu.',
          localLanguage: 'Yoruba',
          pronunciation: 'moh tee SHOH-noo',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20ti%20sonu',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mo%20ti%20sonu',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Mo%20ti%20sonu&client=tw-ob'
          ],
          phonetic: 'Mo ti sọnu.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Please leave me alone.',
          local: 'Jọwọ fi mi silẹ.',
          localLanguage: 'Yoruba',
          pronunciation: 'joh-WOH fee mee SHEE-lay',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Jowo%20fi%20mi%20sile',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Jowo%20fi%20mi%20sile',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Jowo%20fi%20mi%20sile&client=tw-ob'
          ],
          phonetic: 'Jọwọ fi mi silẹ.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'I feel unsafe.',
          local: 'Mi o ni ailewu.',
          localLanguage: 'Yoruba',
          pronunciation: 'mee oh nee AH-ee-lay-woo',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mi%20o%20ni%20ailewu',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Mi%20o%20ni%20ailewu',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Mi%20o%20ni%20ailewu&client=tw-ob'
          ],
          phonetic: 'Mi o ni ailewu.',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        },
        {
          english: 'Can you help me?',
          local: 'Ṣe o le ran mi lọwọ?',
          localLanguage: 'Yoruba',
          pronunciation: 'shay oh lay ran mee LOH-woh',
          audioUrl: 'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Se%20o%20le%20ran%20mi%20lowo',
          fallbackUrls: [
            'https://api.streamelements.com/kappa/v2/speech?voice=en-NG-EzinneNeural&text=Se%20o%20le%20ran%20mi%20lowo',
            'https://translate.google.com/translate_tts?ie=UTF-8&tl=yo&q=Se%20o%20le%20ran%20mi%20lowo&client=tw-ob'
          ],
          phonetic: 'Ṣe o le ran mi lọwọ?',
          voiceInfo: {
            voiceName: 'en-NG-EzinneNeural',
            gender: 'Female',
            displayName: 'Ezinne (Nigerian Female)'
          }
        }
      ],
      pronunciationFeature: {
        useWebSpeechAPI: true,
        fallbackToEdgeTTS: true,
        supportedLanguages: ['yo-NG', 'ig-NG', 'ha-NG'],
        instructions: 'Click the speaker icon to hear authentic Nigerian pronunciation. Features female voice with local accent for better communication.',
        femaleVoicePreferred: true
      }
    },
    culturalExpectations: {
      dressCode: [
        'Extremely conservative dress required for solo female travel safety - cover shoulders, arms, and legs completely at all times',
        'Choose loose-fitting garments in neutral colors (black, navy, brown) without logos or designs indicating foreign status',
        'Remove ALL jewelry including wedding rings before leaving hotel - any display of wealth targets you for crime',
        'Wear closed-toe shoes only - sandals or open footwear attract unwanted attention and are culturally inappropriate',
        'Carry modest head covering for religious sites and conservative neighborhoods - essential for showing respect',
        'Never wear shorts, tank tops, or form-fitting clothing even in hotel common areas - Western casual wear seen as provocative',
        'Pack lightweight scarves for quick coverage when additional modesty needed - useful for unexpected situations',
        'Traditional Nigerian women dress very modestly - foreign women following these standards experience significantly less harassment'
      ],
      behaviorNorms: [
        'Never travel alone anywhere - arrange hotel security escort for ALL movements including short hotel corridor walks',
        'Avoid direct eye contact with men - cultural norm in conservative Lagos society, reduces harassment potential',
        'Be extremely wary of anyone offering help - criminal targeting of solo foreign women documented by government sources',
        'Do not discuss politics, religion, or social issues - highly sensitive topics that can escalate to dangerous situations',
        'Always have hotel security escort when leaving room - non-negotiable safety requirement for solo female travelers',
        'Maintain respectful distance in conversations - Nigerian culture values personal space and formal interactions with strangers',
        'Never accept drinks or food from strangers - Lagos has documented cases of drugging targeting foreign women',
        'Avoid displaying any signs of wealth - no expensive phones, watches, jewelry, or designer clothing visible',
        'Keep voice low and avoid drawing attention - loud conversations in foreign languages can attract criminal interest',
        'Never photograph people without explicit permission - can cause serious cultural offense and potential confrontation'
      ],
      perception: [
        'Solo female travelers extremely rare in Lagos and attract immediate, significant unwanted attention from all demographics',
        'Conservative Nigerian society views unaccompanied women with suspicion and disapproval, particularly foreign women',
        'Lagos described by government sources as "misogynistic state" where harassment is "taken as the norm" with limited legal recourse',
        'Foreign women automatically perceived as wealthy targets for harassment, scams, theft, and more serious crimes',
        'Cultural expectation is that women travel with male relatives or in organized groups with local guides and protection',
        'Solo female travelers challenge traditional gender roles and may face verbal abuse or accusations of improper behavior',
        'Street harassment ranges from catcalling to "intense verbal assertiveness" and can escalate to physical intimidation',
        'Police response to women\'s complaints often inadequate, requiring embassy intervention for serious incidents',
        'Business and service interactions often require male presence for credibility - hotel staff can provide necessary escort',
        'Understanding local perception helps safety planning - recognize you\'ll be viewed as vulnerable target requiring constant protection'
      ]
    },
    bestTimeToVisit: {
      safestMonths: ['December-March'],
      events: 'Avoid large gatherings and protests.'
    },
    emergencyInfo: {
      police: '112', fire: '119', medical: '199', general: '112'
    },
    currency: {
      name: 'Nigerian Naira', 
      code: 'NGN', 
      exchangeRate: {
        usd: 0.0007,
        eur: 0.0006,
        gbp: 0.0005
      }, 
      scamWarnings: ['ATM scams targeting foreign travelers', 'Currency exchange fraud', 'Fake police extortion', 'Pickpocketing during transactions'],
      exchangeTips: [
        'Nigeria operates as cash-based economy - bring US dollars for exchange',
        'Exchange currency only at international hotels or verified bank branches', 
        'Avoid street money changers and unofficial exchange points',
        'Never use credit/debit cards due to high fraud potential',
        'Keep exchange receipts for departure requirements',
        'Solo female travelers should have hotel security present during exchanges',
        'Avoid displaying large amounts of cash publicly after exchanges',
        'Consider bringing sufficient cash for entire Lagos stay to minimize exchanges'
      ]
    },
    scamWarnings: [
      { 
        title: 'Street Harassment Escalation', 
        description: 'Harassment often escalates from verbal to physical intimidation and potential assault. Lagos described as having harassment "taken as the norm" with limited legal recourse for victims.', 
        severity: 'high' 
      },
      { 
        title: 'Express Kidnapping and Ransom', 
        description: 'High kidnapping risk targeting foreigners including tourists. Kidnappers demand ransom and may hold victims for extended periods. Businesspeople and aid workers frequently targeted.', 
        severity: 'high' 
      },
      { 
        title: 'Fake Police Extortion', 
        description: 'Criminals impersonating police officers to extort money or commit robbery/assault. Always demand proper identification and insist on going to police station.', 
        severity: 'high' 
      },
      { 
        title: 'Phone and Valuables Snatching', 
        description: 'Organized gangs targeting mobile phones, bags, and valuables especially during traffic and in crowded areas. Motorcycle thieves common during rush hour.', 
        severity: 'high' 
      },
      { 
        title: 'ATM and Card Fraud - Critical Prevention Required', 
        description: 'Sophisticated ATM scams targeting foreign visitors. Criminals offer help to distract you while stealing card details or cash. Card skimming devices widespread at non-bank ATMs. Groups follow victims after withdrawals. ONLY use ATMs inside major bank branches with armed security. Avoid credit/debit cards entirely - Nigeria is cash-based. Bring US dollars for exchange.', 
        severity: 'high' 
      },
      { 
        title: 'Internet and Advance Fee Fraud', 
        description: 'Lagos known as center for "419 scams" and internet fraud. Avoid any financial transactions or "business opportunities" presented by locals.', 
        severity: 'medium' 
      }
    ],
    languages: ['English', 'Yoruba', 'Igbo', 'Hausa'],
    daytimeSafetyPercent: 49.2, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    nighttimeSafetyPercent: 18.6, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Lagos)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Lagos',
    redFlags: [
      {
        label: 'Violent Crime (Muggings, Armed Robbery)',
        frequency: 'Most common',
        icon: 'PocketKnife',
        details: 'Lagos has extremely high violent crime rates with armed robbery and assault common throughout the city. Solo female travelers face particular risks. Armed gangs operate openly.',
        prevention: 'Never travel alone, use hotel security escort, avoid displaying valuables, stay in secured compounds only'
      },
      {
        label: 'Scams (ATM, Fake Police, Internet Fraud)',
        frequency: 'Most common',
        icon: 'Shield',
        details: 'Nigeria is global center for internet fraud and advance fee scams. ATM skimming and fake police extortion target tourists. Card cloning extremely common.',
        prevention: 'Use cash only, avoid all ATMs, never give documents to "police", exchange money at hotels only'
      },
      {
        label: 'Car Theft & Carjacking',
        frequency: 'Frequent',
        icon: 'Car',
        details: 'Carjacking at gunpoint is frequent, especially targeting vehicles with foreign occupants. Traffic jams make vehicles vulnerable to armed attacks.',
        prevention: 'Use hotel transport only, avoid driving, keep windows up and doors locked, travel with security'
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Frequent',
        icon: 'Hand',
        details: 'Organized pickpocketing gangs operate in markets and crowded areas. Bag snatching from motorcycles common. Targeting of foreign women systematic.',
        prevention: 'Use money belts, carry minimal items, stay in hotel groups, avoid markets and crowded areas'
      }
    ],
    usefulTips: [
      {
        title: 'Is Lagos Safe for Solo Female Travelers?',
        description: 'Lagos has 2.3/5 safety rating with Level 3 "Reconsider Travel" advisory. Solo female travel requires extreme precautions and professional security arrangements.',
        severity: 'high',
        sourceName: 'U.S. State Department Travel Advisory',
        sourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nigeria-travel-advisory.html'
      },
      {
        title: 'Stay Only in High-Security International Hotels',
        description: 'Book 4.5+ star hotels in Victoria Island with armed security: Radisson Blu Anchorage, The Wheatbaker, or Nordic Hotel. Budget accommodations lack essential safety measures.',
        severity: 'high',
        sourceName: 'TripAdvisor Hotel Safety Reviews',
        sourceUrl: 'https://www.tripadvisor.com/Hotels-g304026-Lagos_Lagos_State-Hotels.html'
      },
      {
        title: 'Never Travel Alone - Always Use Hotel Security Escort',
        description: 'Arrange hotel security escort for ALL movements outside accommodation. Harassment is normalized with limited legal recourse for women.',
        severity: 'high',
        sourceName: 'UK Government Travel Advice',
        sourceUrl: 'https://www.gov.uk/foreign-travel-advice/nigeria/safety-and-security'
      },
      {
        title: 'Bring Cash Only - Avoid ATMs and Credit Cards',
        description: 'Cash-based economy with high fraud rates. Bring US dollars and exchange only at hotels with security present. ATM scams target foreign women.',
        severity: 'high',
        sourceName: 'Australian Government Travel Advisory',
        sourceUrl: 'https://www.smartraveller.gov.au/destinations/africa/nigeria'
      },
      {
        title: 'Download Essential Safety Apps Before Arrival',
        description: 'Critical apps: NomadHer, bSafe (panic button), Noonlight (emergency), Life360 (tracking). Enable GPS and share with trusted contacts.',
        severity: 'medium',
        sourceName: 'Solo Female Travel Safety Guide',
        sourceUrl: 'https://www.nomadher.com/'
      },
      {
        title: 'Dress Ultra-Conservatively at All Times',
        description: 'Cover arms, legs, shoulders completely. Remove all jewelry. Conservative dress reduces harassment risk in this conservative society.',
        severity: 'high',
        sourceName: 'Travel Ladies Safety Guide',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        title: 'Program Emergency Contacts and Check-In Schedule',
        description: 'Essential: WARIF crisis hotline +234 810 027 3171, Embassy numbers, Hotel security. Maintain 2-3 hour contact schedule with home.',
        severity: 'high',
        sourceName: 'Women at Risk International Foundation',
        sourceUrl: 'https://warifng.org/'
      },
      {
        title: 'Understand Normalized Harassment and Legal Limitations',
        description: 'Street harassment is culturally accepted with inadequate police response. Avoid eye contact with men and report incidents to embassy immediately.',
        severity: 'high',
        sourceName: 'Canadian Government Travel Advisory',
        sourceUrl: 'https://travel.gc.ca/destinations/nigeria'
      }
    ], // Essential safety overview from government sources and travel research (2025)
    culturalDos: [
      'Dress modestly, covering shoulders and knees.',
      'Greet elders and locals respectfully.',
      'Ask before taking photos of people.',
      'Use your right hand for eating and giving.',
      'Respect local customs and religious practices.',
      'Learn basic Yoruba greetings like "Bawo" (how are you) and "E ku aaro" (good morning) - shows cultural respect and appreciation.',
      'Remove shoes when entering homes and certain religious buildings - this is a fundamental sign of respect in Nigerian culture.',
      'Accept food and drink offerings graciously when visiting homes - refusing hospitality can be seen as disrespectful to your hosts.',
      'Show special deference to elderly people - stand when they enter, let them speak first, and use formal titles like "Sir" or "Ma" consistently.',
      'Understand that Lagos operates on "Nigerian time" - be patient with delays and maintain flexibility with scheduling and appointments.'
    ],
    culturalDonts: [
      "Don't show affection in public.",
      "Don't criticize religion or local traditions.",
      "Don't enter mosques or churches without permission.",
      "Don't wear revealing or tight clothing.",
      "Don't discuss sensitive political topics.",
      "Don't refuse food offerings from hosts without polite explanation - this can deeply offend Nigerian hospitality traditions.",
      "Don't use your left hand for eating, greeting, or giving items - the left hand is considered unclean in Nigerian culture.",
      "Don't point with a single finger - use your whole hand or nod in the direction instead, as pointing is considered very rude.",
      "Don't interrupt elders or speak before being invited to - age hierarchy is deeply respected in Nigerian social interactions.",
      "Don't assume everyone speaks English the same way - Nigerian English has unique expressions, and patience with communication differences shows respect."
    ],
    culturalSensitivityTips: [
      'Nigeria is Africa\'s most populous country with over 250 ethnic groups, each with distinct languages, traditions, and customs. Solo female travelers should understand that Lagos represents this incredible diversity, where Yoruba culture predominates but Igbo, Hausa, and many other cultures coexist.',
      'Religious diversity is significant in Lagos, with Christianity and Islam both prominent, plus traditional African spiritual practices. Solo female travelers should show respect for all religious traditions and understand that spirituality plays a central role in most Nigerians\' daily lives.',
      'Yoruba culture, predominant in Lagos, emphasizes respect for elders, community solidarity, and rich artistic traditions. Solo female travelers who show proper respect to older people and demonstrate interest in Yoruba art, music, and dance will find deeper cultural connections.',
      'Nigerian English is widely spoken but includes local expressions and phrases that reflect cultural values. Learning basic Yoruba greetings like "Bawo" (how are you) and "E ku aaro" (good morning) shows cultural appreciation and often results in warmer interactions.',
      'Family and community structures are central to Nigerian culture, with extended families and community obligations taking priority over individual preferences. Solo female travelers should understand that collective well-being often supersedes personal choice in social interactions.',
      'Nigerian fashion and personal presentation are important cultural expressions, with colorful fabrics and elaborate styles reflecting cultural pride. Solo female travelers who appreciate and respectfully engage with local fashion culture will find it opens doors to meaningful cultural exchanges.',
      'Food culture in Nigeria includes complex traditions around sharing meals, eating customs, and hospitality. Solo female travelers who show appreciation for local cuisine and understand eating etiquette (using right hand, accepting offered food graciously) will connect with fundamental cultural values.',
      'Negotiation and relationship-building are integral to Nigerian business and social culture. Solo female travelers should understand that building personal connections often precedes practical arrangements, and patience with relationship-building processes shows cultural understanding.',
      'Music and dance are central to Nigerian cultural expression, from traditional drumming to contemporary Afrobeats. Solo female travelers who show appreciation for Nigerian musical heritage will find music serves as a bridge to deeper cultural understanding and connection.',
      'Economic inequality and social challenges are visible realities in Lagos. Solo female travelers should approach these issues with sensitivity, understanding that despite economic difficulties, Nigerians maintain strong cultural pride, resilience, and hospitality toward respectful visitors.'
    ],
    culturalSensitivityTipsDetailed: {
      title: 'Cultural Safety & Sensitivity Guide for Solo Female Travelers in Lagos',
      introduction: 'Is Lagos safe for women solo travelers culturally? Lagos presents significant cultural challenges for solo female travelers due to conservative gender norms and normalized harassment patterns. Understanding Nigerian cultural expectations is essential for safety, as cultural missteps can escalate to dangerous situations in this high-risk environment.',
      sections: [
        {
          title: 'Dress Code for Safety & Cultural Respect',
          tips: [
            'Extreme modesty required for safety - Lagos described as "misogynistic state" where revealing clothing attracts dangerous attention and harassment',
            'Cover shoulders, arms, and legs completely at all times - traditional Nigerian women dress very conservatively, and foreign women must follow these standards',
            'Remove ALL jewelry including wedding rings before leaving hotel - any display of wealth targets you for crime and indicates foreign status',
            'Choose loose-fitting clothing in neutral colors (black, navy, brown) without logos, brands, or designs that indicate wealth or foreign origin',
            'Wear closed-toe shoes only - sandals or open footwear attract unwanted attention and are considered inappropriate for conservative areas',
            'Carry modest head covering for religious sites and conservative neighborhoods - essential for showing respect and avoiding cultural offense',
            'Never wear shorts, tank tops, crop tops, or form-fitting clothing even in hotel common areas - Western casual wear is seen as inappropriate and provocative',
            'Pack lightweight scarves for quick coverage when additional modesty is needed - useful for unexpected religious or conservative encounters',
            'Avoid clothing with text, images, or symbols that could be misinterpreted - political, religious, or Western cultural references can cause problems',
            'Understand that dress code violations can escalate to dangerous situations - conservative dress is fundamental safety requirement, not just cultural courtesy'
          ]
        },
        {
          title: 'Solo Women Perception & Social Dynamics',
          tips: [
            'Solo female travelers extremely rare in Lagos - immediate assumption is that unaccompanied foreign women are available for harassment or criminal targeting',
            'Conservative Nigerian society views women traveling alone with suspicion and disapproval - cultural expectation is women travel with male relatives or organized groups',
            'Government sources describe Lagos as having harassment "taken as the norm" with limited legal recourse for women - police response to female complaints often inadequate',
            'Foreign women automatically perceived as wealthy targets for scams, theft, and assault - criminal networks specifically target solo international women',
            'Street harassment ranges from catcalling to "intense verbal assertiveness" and can escalate to physical intimidation - normalized behavior with little social consequence',
            'Public spaces designed for male dominance - markets, transportation, and street areas assume male presence and protection for women',
            'Solo women challenge traditional gender roles and may face verbal abuse or accusations of improper behavior - cultural backlash against independent women',
            'Business and service interactions often require male presence for credibility - hotel concierge can provide necessary male escort for official transactions',
            'Local women typically travel in groups or with family - solo foreign women stand out immediately and attract unwanted attention from all demographics',
            'Understanding perception helps safety planning - recognizing you\'ll be viewed as vulnerable target allows for appropriate security measures and escort arrangements'
          ]
        },
        {
          title: 'Communication & Social Safety',
          tips: [
            'Learn essential Yoruba phrases beyond greetings - "Egba mi!" (Help!), "Pe awon ọlọpa!" (Call police!), "Fi mi silẹ!" (Leave me alone!)',
            'Avoid direct eye contact with men - cultural norm in conservative society that reduces harassment potential and shows appropriate modesty',
            'Keep conversations brief and formal with strangers - extended interactions can be misinterpreted as romantic interest or vulnerability',
            'Never discuss personal details like hotel name, travel plans, or family status - information used by criminals for targeting and scams',
            'Maintain respectful distance in all social interactions - Nigerian culture values formal boundaries, especially for unaccompanied women',
            'Use hotel staff as intermediaries for local interactions - their presence provides protection and cultural navigation support',
            'Avoid controversial topics including politics, religion, corruption, or social issues - can escalate to dangerous confrontations',
            'Never express frustration or anger publicly - emotional displays seen as loss of control and can attract unwanted attention or intervention',
            'Trust hotel security judgment about local interactions - they understand cultural dynamics and can prevent dangerous situations',
            'Understand that friendly behavior may be misinterpreted - maintain polite but distant demeanor to avoid creating false expectations or dangerous misunderstandings'
          ]
        },
        {
          title: 'Religious & Cultural Etiquette Safety',
          tips: [
            'Remove shoes when entering homes and certain religious buildings - fundamental respect requirement that affects safety and acceptance',
            'Accept hospitality graciously when visiting homes - refusing food/drink offerings can cause serious cultural offense and social problems',
            'Show extreme deference to elderly people - stand when they enter, use formal titles, let them speak first as signs of proper cultural respect',
            'Never photograph people without explicit permission - can cause serious cultural offense and potential violent confrontation',
            'Understand religious diversity and show respect for all traditions - Lagos has Christian, Muslim, and traditional practices requiring different protocols',
            'Follow mosque and church dress codes strictly - improper religious site etiquette can cause immediate ejection and community backlash',
            'Use right hand only for eating, greeting, and giving items - left hand considered unclean and using it shows cultural ignorance',
            'Never point with single finger - use whole hand or nod direction instead as pointing is considered extremely rude behavior',
            'Respect "Nigerian time" concept but maintain security schedules - cultural flexibility while prioritizing safety appointment timing',
            'Understand that cultural violations can escalate to safety threats - proper etiquette essential for avoiding dangerous confrontations and maintaining local protection'
          ]
        }
      ]
    },
    womensConfidenceScore: {
      score: 22.4, // Numbeo 2025 Safety Index for Lagos
      source: "Numbeo 2025",
      sourceUrl: "https://www.numbeo.com/crime/in/Lagos"
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 25,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Nightlife',
        confidence: 10,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Public Transport',
        confidence: 15,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      },
      {
        label: 'Dining Alone',
        confidence: 20,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/nigeria/lagos'
      }
    ],

    // Enhanced safety fields for sexual harassment and victim support
    sexualHarassmentData: {
      prevalence: 'very high',
      commonLocations: ['Public transport systems', 'Markets and trading areas', 'Streets and walkways', 'Hotel lobbies and restaurants', 'ATM areas', 'Any unaccompanied public space'],
      reportingRate: 12,
      legalProtection: 'Weak legal enforcement. Lagos described as "misogynistic state" where harassment is "taken as the norm." Police response to women\'s complaints often inadequate. Limited legal recourse for victims.',
      supportResources: [
        'Women at Risk International Foundation (WARIF): +234 810 027 3171 (24/7 crisis hotline)',
        'Women at Risk International Foundation (WARIF) Center: 6 Turton Street, Off Thorburn Avenue, Yaba, Lagos',
        'Mirabel Centre (Lagos State Sexual Assault Referral Centre): +234 806 200 0004',
        'Project Alert on Violence Against Women: +234 1 481 3300',
        'International Federation of Women Lawyers (FIDA Nigeria): +234 1 269 2307',
        'Centre for Women\'s Health and Information: +234 1 773 6930',
        'US Consulate General Lagos Emergency: +234 1 460 3400 (for US citizens)',
        'British Deputy High Commission Lagos: +234 1 277 0780 (for UK nationals)',
        'Lagos State Ministry of Women Affairs: +234 1 462 4563',
        'International Committee of the Red Cross (ICRC) Nigeria: +234 9 291 7000'
      ],
      emergencyContacts: [
        'WARIF 24/7 Crisis Hotline: +234 810 027 3171',
        'Nigeria Police Emergency: 112',
        'Lagos State Emergency Services: 199',
        'Your Embassy Emergency Number (keep readily available)',
        'Trusted hotel security: have contact information saved'
      ],
      safetyProtocol: [
        'Never travel anywhere alone - arrange hotel security escort for all movements',
        'Contact WARIF immediately for support and guidance: +234 810 027 3171',
        'Report to police only with embassy representative present',
        'Document everything with photos, witness information, medical records',
        'Contact your embassy immediately for legal and consular support',
        'Consider immediate departure if safety is compromised',
        'Seek medical attention at international-standard hospital with embassy support'
      ]
    },

    healthSafety: {
      hospitals: [
        {
          name: 'R-Jolad Hospital',
          address: 'Lagos',
          phone: '+234 1 280 0000',
          emergency: true,
          specialties: ['Private healthcare', 'Women\'s health', 'Emergency care', '2025 Nigerian Healthcare Excellence Award winner']
        },
        {
          name: 'Duchess International Hospital',
          address: 'Ikeja, Lagos',
          phone: '+234 1 454 0000',
          emergency: true,
          specialties: ['100-bed multi-specialty', 'Emergency services', 'Women\'s health', 'International standards']
        },
        {
          name: 'Havana Specialists Hospital',
          address: 'Surulere, Lagos',
          phone: '+234 1 773 5000',
          emergency: true,
          specialties: ['24/7 emergency department', 'Obstetrics & Gynecology', 'Specialist clinics', 'Experienced physicians']
        },
        {
          name: 'Lagos University Teaching Hospital (LUTH)',
          address: 'Idi-Araba, Lagos',
          phone: '+234 1 586 3001',
          emergency: true,
          specialties: ['Public hospital', 'Emergency care', 'Teaching hospital', 'Comprehensive services']
        }
      ],
      pharmacies: [
        {
          name: 'Alpha Pharmacy',
          address: 'Multiple locations (Victoria Island, Ikoyi)',
          phone: '+234 1 270 0000',
          hours: 'Daily 8:00-22:00',
          emergency: false
        },
        {
          name: 'Emzor Pharmacy',
          address: 'Various Lagos locations',
          phone: '+234 1 492 0000',
          hours: 'Daily 8:00-20:00',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'Arctic Gynae Centre: Specialist obstetrics and gynecology center with experienced team',
          'Regal Specialist Women\'s Hospital: Dedicated gynecology and obstetrics facility',
          'Medison Specialist Women Hospital: International standard fertility and gynecology services',
          'South Shore Women\'s & Children\'s Hospital: 24-hour outstanding healthcare delivery'
        ],
        gynecologists: [
          'Multiple specialist women\'s hospitals with qualified gynecologists',
          'R-Jolad Hospital: Award-winning women\'s health services',
          'The Hospital - Fertility & Gynecology Centre: Thousands of successful treatments',
          'Havana Specialists Hospital: 24/7 obstetrics and gynecology services'
        ],
        emergencyContraception: [
          'Available at major pharmacy chains with prescription',
          'Hospital emergency departments provide reproductive health services',
          'Private specialist clinics offer confidential services',
          'Cultural and religious considerations may affect availability'
        ],
        sanitaryProducts: [
          'Available at Alpha Pharmacy and major chains in safe areas',
          'Supermarkets in Victoria Island and Ikoyi stock international brands',
          'Hotel concierge can arrange purchases for safety',
          'Avoid purchasing in markets or unsafe areas'
        ]
      },
      vaccinations: [
        'Yellow fever vaccination required for Nigeria entry',
        'Hepatitis A and Typhoid recommended',
        'Meningitis vaccination recommended during dry season',
        'Malaria prophylaxis essential - high transmission area',
        'Routine vaccinations should be current (MMR, DPT, influenza)'
      ],
      healthRisks: [
        'High crime-related injury risk - primary health concern',
        'Malaria transmission year-round - use prophylaxis and mosquito protection',
        'Water-borne illnesses - drink only bottled water',
        'Air pollution in urban areas affecting respiratory health',
        'Higher risk of violence-related injuries than infectious disease'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Consulate General Lagos',
          address: '2 Walter Carrington Crescent Victoria Island, Lagos',
          phone: '+234 1 460 3400',
          emergency: '+234 1 460 3400',
          link: 'https://ng.usembassy.gov/consulate-lagos/',
          services: 'American Citizen Services, Emergency Assistance, Consular Services'
        },
        {
          name: 'British Deputy High Commission Lagos',
          address: '11 Walter Carrington Crescent Victoria Island, Lagos',
          phone: '+234 1 277 0780',
          emergency: '+234 1 277 0780',
          link: 'https://www.gov.uk/world/organisations/british-deputy-high-commission-lagos',
          services: 'British National Services, Emergency Support, Consular Assistance'
        },
        {
          name: 'German Consulate General Lagos',
          address: '6 Anifowoshe Street Victoria Island, Lagos',
          phone: '+234 1 261 1011',
          emergency: '+234 1 261 1011',
          link: 'https://lagos.diplo.de/',
          services: 'German Citizen Services, Visa Services, Emergency Assistance'
        },
        {
          name: 'French Consulate General Lagos',
          address: '1 Oyinkan Abayomi Drive, Ikoyi Lagos',
          phone: '+234 1 261 1590',
          emergency: '+234 1 261 1590',
          link: 'https://ng.ambafrance.org/',
          services: 'French Citizen Services, Visa Services, Cultural Affairs'
        },
        {
          name: 'Spanish Embassy Nigeria (Lagos Office)',
          address: 'Plot 1261B Hakeem Balogun Street, Victoria Island Lagos',
          phone: '+234 1 461 2370',
          emergency: '+234 1 461 2370',
          link: 'https://www.exteriores.gob.es/embajadas/abuja/',
          services: 'Spanish Citizen Services, Visa Services, Trade Promotion'
        },
        {
          name: 'Australian High Commission Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 461 2780',
          emergency: '+234 9 461 2780',
          link: 'https://nigeria.embassy.gov.au/',
          services: 'Australian Citizen Services, Emergency Assistance (serves Lagos from Abuja)'
        },
        {
          name: 'Canadian High Commission Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 461 2900',
          emergency: '+234 9 461 2900',
          link: 'https://www.canadainternational.gc.ca/nigeria/',
          services: 'Canadian Citizen Services, Emergency Assistance (serves Lagos from Abuja)'
        },
        {
          name: 'Netherlands Embassy Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 461 3015',
          emergency: '+234 9 461 3015',
          link: 'https://www.nederlandwereldwijd.nl/landen/nigeria',
          services: 'Dutch Citizen Services, Trade & Economic Affairs (serves Lagos from Abuja)'
        },
        {
          name: 'Danish Embassy Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 413 4000',
          emergency: '+234 9 413 4000',
          link: 'https://nigeria.um.dk/',
          services: 'Danish Citizen Services, Development Cooperation (serves Lagos from Abuja)'
        },
        {
          name: 'Swiss Embassy Nigeria',
          address: 'Contact through Abuja office for Lagos services',
          phone: '+234 9 413 1872',
          emergency: '+234 9 413 1872',
          link: 'https://www.eda.admin.ch/abuja',
          services: 'Swiss Citizen Services, Economic Affairs (serves Lagos from Abuja)'
        },
        {
          name: 'Indian High Commission Nigeria',
          address: 'Plot 17 Kofo Abayomi Street, Victoria Island Lagos',
          phone: '+234 1 261 3940',
          emergency: '+234 1 261 3940',
          link: 'https://www.hciabuja.gov.in/',
          services: 'Indian Citizen Services, Visa Services, Trade Relations'
        }
      ],
      womensRights: [
        'Nigeria has legal protections for women but enforcement is inconsistent',
        'Gender-based violence criminalized but reporting rates low due to stigma',
        'Lagos described as "misogynistic state" with harassment normalized',
        'Women\'s rights organizations: WARIF (Women at Risk International Foundation)',
        'Legal system often fails to protect women from harassment and assault'
      ],
      legalSupport: [
        'US Consulate provides attorney referrals: +234 1 460 3400',
        'Nigerian Bar Association: Legal assistance and referrals',
        'Legal Aid Council of Nigeria: Free legal assistance for qualifying cases',
        'Embassy referrals essential for English-speaking legal support',
        'International NGOs provide legal support for assault cases'
      ],
      reportingProcedures: [
        'Call 112 for police (response quality varies significantly)',
        'Contact US Consulate immediately for serious crimes: +234 1 460 3400',
        'British nationals: +234 1 277 0780 for deputy high commission',
        'Document everything: photos, witness contacts, incident details',
        'Be aware: police response to women\'s complaints often inadequate',
        'Embassy support critical for navigating local legal system',
        'Consider contacting women\'s rights organizations for additional support',
        'Obtain multiple copies of any police reports if filed'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$7 - $15 USD / day',
        description: 'Lagos offers affordable accommodation and food but safety costs are high. Budget travelers $7-11/day with basic hotels. Mid-range $11-15/day with better security.',
        tip: 'Prioritize safety over savings - stay only in Victoria Island/Ikoyi international hotels. Budget extra for private security and transport.'
      },
      accommodation: [
        {
          type: 'International Hotels (Victoria Island)',
          avgCost: '$150-500/night',
          safetyNote: 'Essential for solo female travelers - highest security with 24/7 staff and controlled access.',
          safetyLevel: 'medium'
        },
        {
          type: 'Mid-Range Hotels (Victoria Island/Ikoyi)',
          avgCost: '$80-150/night',
          safetyNote: 'Acceptable security in safer areas but limited English-speaking staff.',
          safetyLevel: 'medium'
        },
        {
          type: 'Budget Hotels (Safe Areas Only)',
          avgCost: '$20-50/night',
          safetyNote: 'Very limited safe budget options. Must stay only in Victoria Island or Ikoyi.',
          safetyLevel: 'low'
        },
        {
          type: 'Hostels (Extremely Limited)',
          avgCost: '$10-20/night',
          safetyNote: 'Hostel culture minimal in Lagos. NOT recommended for solo female travelers.',
          safetyLevel: 'low'
        }
      ],
      transport: [
        {
          method: 'Hotel Arranged Private Driver with Security',
          cost: '$50-100/day',
          safetyDescription: 'Safest option with vetted drivers and hotel accountability. Essential for all movements. Driver familiar with safe routes and equipped with emergency contacts.',
          safetyLevel: 'medium'
        },
        {
          method: 'International Hotel Shuttle Service',
          cost: '$30-50 per trip',
          safetyDescription: 'Hotel-operated shuttles between major international hotels and airport. Fixed routes with security protocols and professional drivers.',
          safetyLevel: 'medium'
        },
        {
          method: 'Embassy/Diplomatic Transport Services',
          cost: '$60-120 per trip',
          safetyDescription: 'Available through embassy contacts for emergency or high-security transport needs. Highest security level with government-grade safety protocols.',
          safetyLevel: 'high'
        },
        {
          method: 'Uber/Bolt (extreme caution required)',
          cost: '$11-23 per ride',
          safetyDescription: 'Safer than local transport but still risks. Verify driver identity, check license plate, share ride details with hotel security. Only use during daylight hours.',
          safetyLevel: 'low'
        },
        {
          method: 'OPay Ride-hailing (local alternative)',
          cost: '$8-18 per ride',
          safetyDescription: 'Nigerian ride-hailing app with local drivers. Similar risks to Uber but with local knowledge. Verify driver credentials and maintain communication.',
          safetyLevel: 'low'
        },
        {
          method: 'Licensed Taxi (Hotel arranged only)',
          cost: '$15-30 per ride',
          safetyDescription: 'Only use taxis arranged through international hotels with verified drivers. Never hail street taxis or use unofficial taxi services.',
          safetyLevel: 'low'
        },
        {
          method: 'Private Car Rental with Driver',
          cost: '$80-150/day',
          safetyDescription: 'Rent through international hotels only. Includes professional driver familiar with Lagos traffic and safe routes. More expensive but offers flexibility.',
          safetyLevel: 'medium'
        },
        {
          method: 'Airport Transfer Services',
          cost: '$40-80 per trip',
          safetyDescription: 'Professional airport transfer companies vetted by international hotels. Essential for safe arrival/departure. Book through hotel concierge only.',
          safetyLevel: 'medium'
        },
        {
          method: 'Public Transport - BRT/Danfo (AVOID COMPLETELY)',
          cost: '$0.25-1.00',
          safetyDescription: 'Extremely dangerous with documented high harassment and crime rates. Crowded conditions enable theft and assault. Government sources advise against use for foreign women.',
          safetyLevel: 'very low'
        },
        {
          method: 'Okada/Keke Motorcycle Taxis (NEVER USE)',
          cost: '$1-3 per ride',
          safetyDescription: 'Motorcycle and tricycle taxis extremely dangerous due to poor safety standards, high accident rates, and crime risk. Banned from many Lagos areas.',
          safetyLevel: 'very low'
        }
      ],
      budgetTips: [
        'Stay only in international hotels in Victoria Island - safety over savings',
        'Arrange private driver/security through hotel for all movements',
        'Eat only at hotel restaurants or verified safe establishments',
        'Avoid all street food and local markets due to safety concerns',
        'Budget extra for comprehensive travel insurance with emergency evacuation',
        'Consider Lagos only as brief transit point - minimize time in city',
        'Never leave hotel premises alone under any circumstances',
        'Book accommodation with highest security ratings and 24/7 staff',
        'Budget for emergency cash reserves for immediate departure if needed',
        'Use university guest houses only with hotel-arranged security escort'
      ]
    },

    governmentAdvisory: {
      level: 'Reconsider Travel - Level 3',
      levelNumber: 3,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Reconsider travel to Nigeria due to crime, terrorism, civil unrest, kidnapping, and maritime crime. Exercise increased caution due to wrongful detentions. Some areas have increased risk.',
      reason: 'High levels of crime throughout Nigeria, including armed robbery, kidnapping, carjacking, assault, and murder. Terrorist groups continue plotting attacks.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nigeria-travel-advisory.html',
      soloTravelerAdvice: [
        'Solo female travel to Lagos requires extreme caution and professional security arrangements',
        'Book only international hotels with 24/7 armed security in Victoria Island',
        'Arrange private security escort through hotel for ALL movements outside accommodation',
        'Register with embassy immediately upon arrival and maintain regular contact',
        'Consider Lagos only as brief transit point - minimize time in city',
        'Have comprehensive evacuation insurance and emergency departure funds available',
        'Never travel anywhere alone - harassment and assault risks are very high',
        'Maintain constant communication with trusted contacts every 2-3 hours'
      ],
      additionalConsiderations: [
        'Kidnapping risk: Foreign nationals specifically targeted throughout Nigeria',
        'Terrorism threat: Active terrorist groups operate in Nigeria with attacks on civilians',
        'Civil unrest: Demonstrations and strikes can occur with little warning',
        'Healthcare limitations: Medical facilities may not meet international standards',
        'Communication disruptions: Internet and phone services may be unreliable',
        'Banking issues: Credit cards not widely accepted, cash-based economy predominates'
      ],
      embassyContact: {
        name: 'U.S. Consulate General Lagos',
        phone: '+234 1 460 3400',
        emergency: '+234 1 460 3400',
        address: '2 Walter Carrington Crescent, Victoria Island, Lagos'
      }
    },
  culturalSensitivity: {
    culturalDos: [
      'Dress modestly covering arms and legs especially outside urban areas - revealing clothing offends conservative values',
      'Greet people politely and respectfully - Nigerians are known for warmth and hospitality toward foreigners',
      'Learn basic Pidgin English phrases - it\'s widely understood and helps build rapport with locals',
      'Show respect for religious customs and elders - Nigeria has strong Christian and Muslim communities',
      'Connect with reputable tour guides or travel companies - local guidance is essential for safe cultural navigation'
    ],
    culturalDonts: [
      'Don\'t show public displays of affection including hand-holding - it\'s socially unacceptable in Nigerian culture',
      'Don\'t wear short skirts, shorts, or low-cut tops - conservative dress standards are strictly observed',
      'Don\'t ignore religious sensitivities - respect both Christian and Islamic practices throughout the country',
      'Don\'t travel alone at night especially as a woman - cultural norms and safety require group travel after dark',
      'Don\'t be overly familiar with strangers - maintain polite distance until trust is established through proper introductions'
    ]
  },
  youtubeVideo: {
    videoId: "2ZrYwuxThFA" // Lagos travel experience video (time start: 411s)
  }
};

export default lagos;
