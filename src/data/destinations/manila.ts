import { Destination } from './types';

// Enhanced Safety Data for Manila - January 2025 Update
const manila: Destination = {
    city: 'Manila',
    country: 'Philippines',
    continent: 'Asia',
    countryCode: 'ph',
    overallScore: 4.3,
    nightSafety: 2.8,
    publicTransit: 3.5,
    walkingAlone: 3.2,
    tags: ['warning-flags', 'mixed-safety'],
    bgColor: 'bg-yellow-50',
    reviewCount: 756,
    lastUpdated: '1 day ago',
    harassmentRisk: 'medium',
    safetyBreakdown: {
      nightSafety: { 
        score: 2.8, 
        context: 'Night safety varies significantly by area. BGC and Rockwell are well-lit and guarded with 24/7 security presence, while older Manila areas pose significant risks. 2024 traveler reports confirm "the area we felt the least safe in overall." Armed robbery and sexual assault occur regularly across Metro Manila. Women living in Manila rate overall safety at 2.3/5. Avoid walking alone after dark even in safer districts.' 
      },
      publicTransit: { 
        score: 3.5, 
        context: 'Mixed public transport safety with significant concerns. LRT/MRT relatively safe during day with security cameras and guards, but extremely crowded during rush hours. 51% of female students report sexual harassment on public transport. Armed hold-ups on jeepneys and buses occur frequently. "Public commute is not advised for solo travelers and first timers in Manila." Use Grab for safety - travelers report "never had a problem with Grab over countless rides."' 
      },
      walkingAlone: { 
        score: 3.2, 
        context: 'Walking alone safety depends heavily on location and time. Developed areas like Makati CBD and BGC generally safer during day with good lighting and security presence. 2024 travelers report "Manila feels safe if you\'re cautious, but as a girl, I stay alert." Sexual harassment common - 3 in 5 women experience it. Verbal harassment and catcalling occur frequently. "Walking around the streets require vigilance and caution." Avoid isolated areas completely.' 
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Bonifacio Global City (BGC)',
          description: 'Modern planned business district and Manila\'s safest area for solo female travelers. 24/7 private security, wide sidewalks, CCTV coverage, and well-lit streets. 2024 travelers report "when you are in BGC, you can be more carefree walking alone there." High-end shopping at BGC High Street, international restaurants, and luxury hotels. Heavy foot traffic and business presence provide natural security. Still exercise caution at night.'
        },
        {
          name: 'Makati Central Business District',
          description: 'Major financial center with strong security presence, international hotels, and modern infrastructure. 2024 travelers confirm "Makati is a nicer and cleaner part" and "feels really safe, even when going by foot." Popular Ayala Avenue and Greenbelt areas well-patrolled. English widely spoken. Best area for first-time visitors seeking Western amenities with Filipino hospitality. Safe during day and early evening with normal urban precautions.'
        },
        {
          name: 'Ortigas Center (Pasig)',
          description: 'Major business district with modern shopping centers (SM Megamall, The Podium), international hotels, and office towers. Good security during business hours with visible guards and CCTV. Generally safe for accommodation and dining. Can become quieter after business hours, so use Grab for evening transport. Well-connected to other safe areas via MRT.'
        },
        {
          name: 'Rockwell Center (Makati)',
          description: 'Upscale mixed-use development with luxury residential towers, Power Plant Mall, and fine dining establishments. Excellent private security with controlled access points. Popular with wealthy locals and expatriates. Safe area for upscale shopping and dining, particularly around Power Plant Mall. Well-maintained public spaces and good lighting.'
        },
        {
          name: 'Newport City (Pasay)',
          description: 'Modern integrated development near NAIA airport with Resorts World Manila, luxury hotels, and shopping. Well-secured area with private guards and CCTV coverage. Safe for travelers in transit or staying near the airport. Good restaurants and entertainment options within the complex. Connected via covered walkways for weather protection.'
        }
      ],
      caution: [
        'Ermita (Historic tourist district): Mixed safety conditions with budget accommodations and older infrastructure. Some areas well-patrolled near major hotels, others have higher crime rates. Exercise extra caution at night and avoid side streets.',
        'Malate (Entertainment district): Nightlife area with bars, restaurants, and budget accommodations. Can be rowdy at night with increased risk of harassment and petty crime. Stay in groups and use Grab for transport.',
        'Intramuros (Walled City): Historic area generally safe during day with tourist police presence, but can be isolated at night. Stick to main tourist areas and avoid after dark.',
        'Pasay (Airport vicinity): Mixed conditions with some safe hotel areas near NAIA but higher crime rates in local neighborhoods. Traffic congestion and pollution concerns.',
        'Quezon City (Diliman area): Large area with significant variation by location. University areas generally safer during day, but avoid isolated spots and use main roads only.'
      ],
      avoid: [
        'Tondo District: Extremely high crime area with poverty, gang activity, and frequent violent incidents. Not safe for tourists at any time of day.',
        'Quiapo (especially Quiapo Market): Very crowded market area with extremely high pickpocketing and bag-snatching risk. Avoid carrying valuables if visiting for cultural sites.',
        'Divisoria Market: Wholesale market area with high crime rates, especially after dark. Overwhelming crowds and frequent theft incidents.',
        'Smokey Mountain/North Harbor area: Industrial port area with very high crime rates and poor infrastructure.',
        'Santa Ana/Pandacan: Poor neighborhoods with higher crime rates, especially along Pasig River areas.',
        'Any isolated areas, back streets, or unfamiliar neighborhoods after dark throughout Metro Manila',
        'Walking alone at night anywhere outside BGC and central Makati - use Grab instead'
      ]
    },
    accommodations: [
      { 
        name: 'The Peninsula Manila', 
        type: 'hotel', 
        features: ['Makati location', 'International luxury standards', '24/7 concierge', 'High security protocols'], 
        rating: 4.6, 
        notes: 'Premier luxury hotel in safe Makati area with exceptional security and service. Popular with business travelers and solo female guests seeking maximum safety and comfort.' 
      },
      { 
        name: 'New World Makati Hotel', 
        type: 'hotel', 
        features: ['Central Makati', 'Business facilities', 'Security staff', 'Airport transfers'], 
        rating: 4.4, 
        notes: 'Established international hotel in heart of Makati CBD. Reliable security and English-speaking staff. Good base for exploring safer areas of Manila.' 
      },
      { 
        name: 'BGC Boutique Hotels', 
        type: 'hotel', 
        features: ['BGC location', 'Modern amenities', 'Safe area', 'Walking distance to attractions'], 
        rating: 4.3, 
        notes: 'Various boutique hotels in BGC offering modern accommodations in Manila\'s safest district. Ideal for solo female travelers prioritizing safety and convenience.' 
      },
      { 
        name: 'Z Hostel', 
        type: 'hostel', 
        features: ['Female dorms available', 'Social atmosphere', 'BGC/Makati area', 'Security measures'], 
        rating: 4.2, 
        notes: 'Popular backpacker hostel with female dorms and social environment. Located in safer area but still exercise normal precautions. Good for budget-conscious solo travelers.' 
      },
      { 
        name: 'Makati/BGC Budget Hotels', 
        type: 'hotel', 
        features: ['Safe area locations', 'Budget-friendly', 'Basic security', 'English-speaking staff'], 
        rating: 4.0, 
        notes: 'Various budget hotel options in Makati and BGC areas. Prioritize location in safe districts over luxury amenities for solo female traveler security.' 
      }
    ],
    alerts: [
      { 
        title: 'Violent Crime Against Foreign Nationals', 
        description: 'Armed robbery, sexual assault, and murder occur regularly across Philippines including Metro Manila. British nationals reported rape and sexual assaults in backpacker areas. Gun possession common and poorly regulated.', 
        location: 'Metro Manila and tourist areas', 
        reportCount: 67, 
        severity: 'high', 
        dateReported: '1 week ago' 
      },
      { 
        title: 'Kidnapping Risk Nationwide', 
        description: 'Risk of kidnapping by criminals demanding ransom exists across Philippines including Metro Manila. Both locals and foreigners targeted with increasing incidents reported in urban areas.', 
        location: 'Nationwide including Manila', 
        reportCount: 23, 
        severity: 'high', 
        dateReported: '2 weeks ago' 
      },
      { 
        title: 'Armed Hold-ups on Public Transport', 
        description: 'Frequent armed robberies on jeepneys and buses, particularly in Manila and large cities. Pickpocketing and bag snatching common on crowded public transport during rush hours.', 
        location: 'Public transport citywide', 
        reportCount: 89, 
        severity: 'medium', 
        dateReported: '5 days ago' 
      },
      { 
        title: 'Sexual Harassment in Tourist Areas', 
        description: 'Minor verbal harassment including catcalling and unsolicited comments reported by female travelers. Some incidents of more serious harassment in backpacker-popular areas.', 
        location: 'Tourist districts and entertainment areas', 
        reportCount: 34, 
        severity: 'medium', 
        dateReported: '1 week ago' 
      }
    ],
    safetyTips: {
      clothing: [
        'Dress modestly especially when visiting religious sites - cover shoulders and knees at churches',
        'Avoid flashy jewelry, designer handbags, or expensive watches that attract unwanted attention',
        'Wear comfortable, closed-toe shoes for walking on uneven sidewalks and protection',
        'Light, breathable fabrics recommended for tropical climate but ensure adequate coverage',
        'Bring light jacket or cardigan for over-air-conditioned buildings and transportation',
        'Conservative attire helps avoid harassment - local women typically dress modestly',
        'Avoid revealing clothing that may be interpreted as inappropriate in conservative culture'
      ],
      firstTimers: [
        'Stay exclusively in BGC, Makati, or Ortigas areas - "stay in safe, central accommodations"',
        'Use Grab app for all transportation - "Manila is relatively safe when traveling via Grab"',
        'Never walk alone at night, even in safer areas - always take Grab after dark',
        'Register with Tourist Assistance Call Center (+63 2 8632 1191) for 24/7 support',
        'Is Manila safe for female solo travelers? Yes, with proper precautions in safe areas',
        'Download offline maps before arrival as internet can be unreliable in some areas',
        'Keep emergency contacts easily accessible and inform someone of daily plans',
        'Start with organized tours or activities to orient yourself before independent exploration',
        'Carry copies of passport and keep originals in hotel safe',
        'Always have peso cash as some places don\'t accept cards'
      ],
      apps: [
        'NomadHer',
        'bSafe',
        'Noonlight',
        'Life360',
        'Travel Ladies',
        'Grab Philippines', 
        'Sakay.ph',
        'Waze'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community essential for navigating Manila safely', rating: 4.3 },
        { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with panic button crucial for Manila solo travel', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response essential for high-risk areas like Manila', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing absolutely critical for Manila safety', rating: 4.1 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with Philippines safety warnings', rating: 4.0 },
        { name: 'Grab Philippines', link: 'https://www.grab.com/ph/', description: 'Safest transport in Manila with verified drivers - never use jeepneys', rating: 4.4 },
        { name: 'Sakay.ph', link: 'https://sakay.ph/', description: 'Philippine transport app for safe route planning around Metro Manila', rating: 4.0 },
        { name: 'Waze', link: 'https://www.waze.com/', description: 'Essential for Manila traffic navigation and real-time safety alerts', rating: 4.5 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Tulong!',
          localLanguage: 'Filipino'
        },
        {
          english: 'Call the police!',
          local: 'Tumawag ng pulis!',
          localLanguage: 'Filipino'
        },
        {
          english: 'I need a doctor.',
          local: 'Kailangan ko ng doktor.',
          localLanguage: 'Filipino'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Nasaan ang pinakamalapit na ospital?',
          localLanguage: 'Filipino'
        },
        {
          english: 'I am lost.',
          local: 'Nawawala ako.',
          localLanguage: 'Filipino'
        },
        {
          english: 'Please leave me alone.',
          local: 'Pakiwan mo na ako.',
          localLanguage: 'Filipino'
        },
        {
          english: 'I feel unsafe.',
          local: 'Hindi ako natatakot dito.',
          localLanguage: 'Filipino'
        },
        {
          english: 'Can you help me?',
          local: 'Maaari mo ba akong tulungan?',
          localLanguage: 'Filipino'
        }
      ]
    },
    culturalExpectations: {
      dressCode: [
        'Personal appearance extremely important - Filipinos judge merits on appearance, so dress well-groomed and smart at all times',
        'Business/professional: Women dress conservatively and modestly. Trousers acceptable in offices, business casual standard',
        'Public spaces: Western clothes widely acceptable - shoulders, shorts, tight clothes common. Dress similar to Western standards',
        'Religious sites: Mandatory modest dress covering shoulders and knees. Conservative appearance especially important for women',
        'Climate considerations: Opt for breathable fabrics like cotton/linen. Flowy dresses, shorts, loose tops recommended for Manila humidity',
        'Quality over quantity: Invest in fewer, well-made pieces rather than many cheap items - Filipinos notice clothing quality',
        'Footwear: Comfortable, closed shoes for uneven sidewalks. Remove shoes when entering homes (common Filipino custom)'
      ],
      behaviorNorms: [
        'Hiya (shame/social propriety): Central Filipino concept - maintain social propriety, avoid actions bringing shame to yourself or family',
        'Indirect communication: Filipinos avoid confrontation, refuse to disagree openly to prevent offense. Respond with patience and understanding',
        'Respect hierarchy: Always show extra respect to older people. Use polite titles "po" (respect marker), "ate" (older sister), "kuya" (older brother)',
        'Warm hospitality: Smile warmly and be friendly - Filipinos known for exceptional hospitality and expect reciprocal warmth',
        'Family centrality: Family central to Filipino culture. Accept invitations graciously but understand family always comes first',
        'Language courtesy: English widely spoken, but learning basic Filipino phrases ("salamat" - thank you, "kumusta" - how are you) highly appreciated',
        'Gift customs: Small gifts appreciated when visiting homes, avoid overly expensive items as they cause discomfort due to reciprocity expectations'
      ],
      perception: 'Solo female travelers generally well-received in Manila, with Filipinos showing exceptional hospitality to visitors. However, Philippines maintains macho culture especially in provinces - foreign women may experience staring, occasional catcalls, or lewd comments in Tagalog. Is Manila safe for female solo travelers culturally? Yes, with awareness that reacting to attention worsens situations. Smile, remain good-natured but distant, and potential suitors will get the message. Women travelers rarely experience serious cultural problems, but staying alert to cultural differences essential for positive interactions.'
    },
    emergencyInfo: {
      police: '117', fire: '160', medical: '911', general: '911'
    },
    currency: {
      name: 'Philippine Peso', code: 'PHP', exchangeRate: {
      usd: 0.0175,
      eur: 0.0149,
      gbp: 0.0130
    }, 
    exchangeTips: [
      'Best USD to PHP rates: BDO, BPI, Metrobank branches inside malls (SM, Ayala) offer 1-2 pesos better than money changers',
      'Avoid airport exchanges: NAIA rates typically 3-5 pesos worse per dollar than city banks',
      'ATM strategy: Bancnet network (BPI, BDO) charges ₱15-25 per withdrawal vs ₱200+ for international cards',
      'Bring crisp bills: Money changers reject torn, old, or marked USD bills - bring post-2013 series for best rates',
      'Exchange timing: Mid-week rates typically better than weekends. Check xe.com for current rate before exchanging',
      'Large denomination bonus: $100 bills get 0.50-1 peso better rate than smaller denominations',
      'Cash budgeting: Budget ₱2,000-3,000 daily for meals, transport, tips. Keep ₱500+ in coins/small bills for jeepneys, tricycles, and street vendors who rarely have change for large bills'
    ],
    scamWarnings: ['ATM skimming devices at tourist-heavy locations', 'Fake police checkpoint extortion schemes', 'Counterfeit peso bills from unlicensed money changers']
    },
    scamWarnings: [
      { 
        title: 'Advanced Taxi Scams (High Priority for Solo Women)', 
        description: 'COMMON SCAMS: 1) "Broken" meter - drivers claim ₱500+ for ₱150 trips 2) Route manipulation - taking EDSA during rush hour to triple fare 3) Rigged meters running fast 4) "No change" scam demanding exact fare. PREVENTION: Use Grab exclusively (₱100-300 typical rides), or insist on meter + take photo of taxi number. Standard fares: NAIA to Makati ₱200-300, BGC to Makati ₱100-150. Airport taxi queue safer than street hailing.', 
        severity: 'high' 
      },
      { 
        title: 'Pickpocketing and Bag Snatching', 
        description: 'Common in crowded areas, markets, jeepneys, and tourist spots. Organized groups may distract victims while accomplices steal valuables. Keep bags zipped and in front of body.', 
        severity: 'high' 
      },
      { 
        title: 'ATM Skimming and Card Fraud', 
        description: 'Card skimming devices on ATMs especially in tourist areas. Use ATMs inside banks or hotels. Cover PIN entry and check for unusual devices attached to card slots.', 
        severity: 'medium' 
      },
      { 
        title: 'Overpricing for Tourists', 
        description: 'Inflated prices for goods, services, and transport when vendors identify foreign tourists. Learn basic Filipino numbers and prices to avoid overcharging.', 
        severity: 'medium' 
      },
      { 
        title: 'Fake Police or Official Scams', 
        description: 'Criminals impersonating police or officials to extort money or commit crimes. Always ask for proper identification and badge numbers. Real police will allow embassy contact.', 
        severity: 'medium' 
      }
    ],
    languages: ['Filipino', 'English'],
    daytimeSafetyPercent: 64.7, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Manila)
    nighttimeSafetyPercent: 32.1, // Source: Numbeo 2025 (https://www.numbeo.com/crime/in/Manila)
    safetySourceName: 'Numbeo 2025',
    safetySourceUrl: 'https://www.numbeo.com/crime/in/Manila',
    redFlags: [
      {
        label: 'Violent Crime (Muggings, Armed Robbery)',
        frequency: 'Most common',
        icon: 'Knife',
        details: 'Manila has significant violent crime rates including armed robbery and muggings, particularly targeting foreign tourists. Solo female travelers face increased risks.',
        prevention: 'Avoid displaying valuables, stay in secure areas, use hotel transport, never walk alone after dark, carry minimal cash'
      },
      {
        label: 'Scams (Taxi, ATM, Fake Police)',
        frequency: 'Most common',
        icon: 'Shield',
        details: 'Common scams include taxi overcharging, ATM skimming, fake police demanding bribes, and romance scams targeting solo travelers.',
        prevention: 'Use rideshare apps, cover ATM PIN, verify police credentials, be skeptical of overly friendly strangers'
      },
      {
        label: 'Pickpocketing & Bag Snatching',
        frequency: 'Frequent',
        icon: 'Hand',
        details: 'Professional thieves operate in crowded areas, markets, and public transport. Motorcycle-riding bag snatchers target pedestrians.',
        prevention: 'Use money belts, secure bags across body, stay alert in crowds, avoid walking near streets with heavy traffic'
      },
      {
        label: 'Drug-Related Incidents',
        frequency: 'Frequent',
        icon: 'Pill',
        details: 'Drug-related violence and crime affect many areas. Tourists may be targeted for theft to fund drug purchases or inadvertently encounter drug activity.',
        prevention: 'Avoid certain neighborhoods, stay in tourist areas, use reputable accommodations, report suspicious activity'
      }
    ],
    usefulTips: [
      {
        title: "Use only official taxis or rideshare apps",
        description: "Avoid hailing taxis off the street. Use official taxi stands or reputable rideshare apps like Grab for safer transportation, especially at night.",
        severity: "medium",
        sourceName: "US State Department Travel Advisory",
        sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/philippines-travel-advisory.html"
      },
      {
        title: "Stay in well-reviewed, central accommodations",
        description: "Choose hotels or hostels in safe, central areas like Makati, Bonifacio Global City, or Ermita. Avoid walking alone at night in unfamiliar neighborhoods.",
        severity: "medium",
        sourceName: "Travel Ladies Manila Guide",
        sourceUrl: "https://travelladies.app/destination/asia/philippines/manila"
      },
      {
        title: "Keep valuables secure and be alert for pickpockets",
        description: "Petty theft and bag snatching can occur in crowded areas, public transport, and markets. Use anti-theft bags and keep your phone and wallet out of sight.",
        severity: "medium",
        sourceName: "UK Government Travel Advice",
        sourceUrl: "https://www.gov.uk/foreign-travel-advice/philippines/safety-and-security"
      },
      {
        title: "Dress modestly and respect local customs",
        description: "Wearing modest clothing helps avoid unwanted attention. Cover shoulders and knees, especially when visiting religious sites or government buildings.",
        severity: "low",
        sourceName: "Philippines Tourism USA",
        sourceUrl: "https://philippinetourismusa.com/top-destinations/"
      },
      {
        title: "Register with the Tourist Assistance Call Center and know emergency contacts",
        description: "The Department of Tourism offers a 24/7 Tourist Assistance Call Center (+63 2 8632 1191). Save this number and know the location of the nearest police station or hospital.",
        severity: "low",
        sourceName: "Philippine News Agency (PNA)",
        sourceUrl: "https://www.pna.gov.ph/articles/1229214"
      }
    ],
    culturalDos: [
      "Use polite titles like 'po' and 'ate/kuya' when addressing locals, especially elders.",
      'Smile and be friendly—Filipinos value warmth and approachability.',
      'Join in group activities or celebrations if invited; it\'s a sign of respect and openness.',
      'Bring a small gift ("pasalubong") if visiting someone\'s home.',
      'Dress modestly, especially in churches and traditional neighborhoods.'
    ],
    culturalDonts: [
      'Don\'t raise your voice or show anger in public—keep calm and polite even if frustrated.',
      'Don\'t refuse food or drink offered by a host; try a small amount to show appreciation.',
      'Don\'t stare at people, especially men or groups, as it can be seen as confrontational.',
      'Don\'t openly criticize local customs, religion, or the Philippines itself.',
      'Don\'t flaunt wealth or act arrogantly; humility is highly valued.'
    ],
    culturalSensitivityTips: [
      'Filipino culture is built on "kapamilya" (family) values that extend beyond blood relations to include friends, neighbors, and even respectful strangers. Solo female travelers who understand this inclusive family concept and show genuine interest in Filipino relationships will often be embraced with protective care.',
      'The concept of "utang na loob" (debt of gratitude) governs Filipino social relationships, where kindness creates lasting bonds of mutual obligation. Solo female travelers who show appreciation for help received and offer assistance when possible will build meaningful protective relationships.',
      'Filipino hospitality involves sharing whatever they have, regardless of economic circumstances. Solo female travelers should accept offered food, drinks, or assistance graciously, understanding that refusal can be deeply hurtful to Filipino pride and generosity.',
      'Spanish colonial heritage mixed with indigenous traditions creates Philippines\' unique Catholic culture. Solo female travelers who show respect for religious practices, attend mass if invited, and understand the importance of family religious traditions will gain cultural acceptance.',
      'The concept of "hiya" (shame/modesty) influences Filipino behavior, emphasizing humility and avoiding actions that bring shame to family or community. Solo female travelers who dress modestly, speak softly, and avoid boastful behavior will show cultural understanding.',
      'Filipino English includes unique expressions and cultural references that reflect local values and humor. Solo female travelers who learn basic Tagalog phrases like "Salamat" (thank you), "Kumusta" (how are you), and "Pasensya na" (sorry) show cultural respect.',
      'Regional diversity is significant across the Philippines\' 7,000+ islands, with different languages, traditions, and cultural practices. Solo female travelers who show appreciation for Manila\'s specific cultural mix and avoid generalizing about "Filipino" culture will demonstrate sensitivity.',
      'Food culture involves communal eating, sharing dishes, and using hands for certain foods. Solo female travelers who participate respectfully in Filipino dining customs, try local foods, and show appreciation for culinary traditions will connect with fundamental cultural values.',
      'Economic inequality is visible throughout Manila, but Filipino dignity and pride remain strong regardless of circumstances. Solo female travelers should approach economic differences with sensitivity, avoiding pity while showing genuine respect for people\'s resilience and humanity.',
      'Filipino work culture emphasizes relationships and face-saving over efficiency. Solo female travelers who are patient with service, understand that relationship-building often precedes business, and avoid showing frustration publicly will navigate interactions more successfully.'
    ],
    womensConfidenceScore: {
      score: 35.5,
      source: "Numbeo 2025 & Travel Ladies Community Reports",
      sourceUrl: "https://www.numbeo.com/crime/in/Manila",
      note: "Women living in Manila rate safety at 2.3/5. Score varies significantly by area - BGC and Makati much higher at 60-70+, while older Manila areas drop to 20-30."
    },
    // Enhanced safety fields for solo women
    sexualHarassmentData: {
      prevalence: 'high',
      commonLocations: [
        'Public transport (LRT/MRT) during rush hours - 51% of female students report harassment',
        'Crowded markets (Divisoria, Quiapo) and street markets throughout Metro Manila',
        'Entertainment districts in Malate and Ermita after dark',
        'Jeepneys and buses - frequent catcalling and inappropriate comments',
        'Walking alone in any area - "everyone will try to talk to you" as Western tourist'
      ],
      reportingRate: 15, // Based on 85% of harassment incidents going unreported (transit study)
      legalProtection: 'Moderate protection under Safe Spaces Act (RA 11313) criminalizing street harassment. Philippine Commission on Women and Violence Against Women Act provide framework, but enforcement inconsistent.',
      supportResources: [
        'Emergency Services: 911 (police, fire, medical)',
        'PNP Women and Children Protection Units (WCPU) at major police stations',
        'Tourist Assistance Call Center: +63 2 8632 1191 (24/7 multilingual)',
        'Philippine Commission on Women: +63 2 8735 1654',
        'GABRIELA Women\'s Network: +63 2 8441 4033 (advocacy and support)',
        'DAWN (Development Action for Women Network): +63 2 8924 4081',
        'Women\'s Crisis Center: +63 2 8921 2765',
        'Embassy emergency contacts for foreign nationals'
      ]
    },
    confidenceByActivity: [
      {
        label: 'Sightseeing',
        confidence: 70,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Nightlife',
        confidence: 50,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Public Transport',
        confidence: 45,
        source: 'Travel Ladies 2025',
        sourceUrl: 'https://travelladies.app/safety/philippines/manila'
      },
      {
        label: 'Dining Alone',
        confidence: 75,
        source: 'SoloGuides 2025',
        sourceUrl: 'https://sologuides.com/manila/'
      }
    ],

    healthSafety: {
      hospitals: [
        {
          name: 'St. Luke\'s Medical Center',
          address: 'E. Rodriguez Sr. Ave, Quezon City / BGC, Taguig',
          phone: '+63 2 8723 0101',
          emergency: true,
          specialties: ['Complete women\'s healthcare', 'Obstetrics & Gynecology', 'Emergency services', '24/7 care']
        },
        {
          name: 'The Medical City',
          address: 'Ortigas Ave, Pasig City',
          phone: '+63 2 8988 1000',
          emergency: true,
          specialties: ['Women\'s Health Care Center', 'Institute for Women\'s Health', 'Emergency ultrasound', 'Specialized clinics']
        },
        {
          name: 'Asian Hospital and Medical Center',
          address: 'Filinvest Corporate City, Alabang',
          phone: '+63 2 8771 9000',
          emergency: true,
          specialties: ['International-grade medical services', 'Women\'s health', 'Emergency care', 'Quality healthcare']
        },
        {
          name: 'Manila Doctors Hospital',
          address: '667 United Nations Ave, Ermita, Manila',
          phone: '+63 2 8524 3011',
          emergency: true,
          specialties: ['General hospital', 'Emergency services', 'Various specialties', 'Central Manila location']
        }
      ],
      pharmacies: [
        {
          name: 'Mercury Drug',
          address: 'Multiple locations citywide',
          phone: '+63 2 8524 4444',
          hours: 'Daily 7:00-24:00 (varies by location)',
          emergency: true
        },
        {
          name: 'Watsons Pharmacy',
          address: 'Multiple mall and street locations',
          phone: '+63 2 8631 9000',
          hours: 'Daily 8:00-22:00 (varies by location)',
          emergency: false
        }
      ],
      womensHealth: {
        clinics: [
          'St. Luke\'s Medical Center: Complete women\'s healthcare with experienced OB-GYN team',
          'The Medical City Women\'s Health Care Center: One-Stop Clinic for Assessment of Risk (OSCAR)',
          'Kindred PH: Trusted women\'s health clinic with comprehensive OB-GYN and mental health services',
          'Chinese General Hospital: Comprehensive OB-GYN care with infertility center and family planning'
        ],
        gynecologists: [
          'Multiple qualified OB-GYNs at major hospitals with international training',
          'St. Luke\'s Medical Center: Experienced obstetrics and gynecology specialists',
          'The Medical City: Specialized clinics including high-risk pregnancy and menopause',
          'Consultation fees typically ₱700-₱1,000 with PhilHealth and HMO options available'
        ],
        emergencyContraception: [
          'Available at Mercury Drug and major pharmacies with prescription',
          'Hospital emergency departments provide reproductive health services',
          'Private OB-GYN clinics offer confidential contraceptive counseling',
          'Catholic influence may affect availability - consult with healthcare providers'
        ],
        sanitaryProducts: [
          'Widely available at Mercury Drug, Watsons, and convenience stores',
          'International brands available in malls and pharmacies',
          'Local and imported options at competitive prices',
          'Available 24/7 at many Mercury Drug locations'
        ]
      },
      vaccinations: [
        'Routine vaccinations should be current (MMR, DPT, influenza)',
        'Hepatitis A and Typhoid recommended for extended stays',
        'Japanese Encephalitis for rural areas outside Manila',
        'No yellow fever requirement unless coming from endemic areas'
      ],
      healthRisks: [
        'Air pollution in Metro Manila affecting respiratory health',
        'Dengue fever risk during rainy season (June-November)',
        'Water-borne illnesses - drink bottled or properly treated water',
        'Traffic accident injuries due to chaotic traffic conditions',
        'Crime-related injuries in high-risk areas'
      ]
    },

    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Manila',
          address: '1201 Roxas Boulevard, Manila 1000, Philippines',
          phone: '+63 2 5301 2000',
          link: 'https://ph.usembassy.gov/'
        },
        {
          name: 'British Embassy Manila',
          address: '120 Upper McKinley Road, McKinley Hill, Taguig City 1634',
          phone: '+63 2 8858 2200',
          link: 'https://www.gov.uk/world/organisations/british-embassy-manila'
        },
        {
          name: 'Australian Embassy Manila',
          address: '25th Floor, Tower 2 RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8757 8100',
          link: 'https://philippines.embassy.gov.au/'
        },
        {
          name: 'Canadian Embassy Manila',
          address: '30th Floor, Tower 2 RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8857 9000',
          link: 'https://www.canadainternational.gc.ca/philippines-philippines/'
        },
        {
          name: 'German Embassy Manila',
          address: '25th Floor, Tower 2 RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8702 3000',
          link: 'https://manila.diplo.de/'
        },
        {
          name: 'French Embassy Manila',
          address: '16th Floor, Pacific Star Building, Sen. Gil Puyat Ave, Makati',
          phone: '+63 2 8857 6900',
          link: 'https://ph.ambafrance.org/'
        },
        {
          name: 'Japanese Embassy Manila',
          address: '2627 Roxas Boulevard, Pasay City',
          phone: '+63 2 8551 5710',
          link: 'https://www.ph.emb-japan.go.jp/'
        },
        {
          name: 'Spanish Embassy Manila',
          address: '27th Floor, BDO Equitable Tower, 8751 Paseo de Roxas, Makati',
          phone: '+63 2 8817 9997',
          link: 'https://www.exteriores.gob.es/Embajadas/manila'
        },
        {
          name: 'Netherlands Embassy Manila',
          address: '26th Floor, BDO Equitable Tower, 8751 Paseo de Roxas, Makati',
          phone: '+63 2 8524 7100',
          link: 'https://www.netherlandsandyou.nl/web/philippines'
        },
        {
          name: 'Danish Embassy Manila',
          address: '26th Floor, Yuchengco Tower, RCBC Plaza, 6819 Ayala Ave, Makati',
          phone: '+63 2 8892 4010',
          link: 'https://filippinerne.um.dk/'
        },
        {
          name: 'Swiss Embassy Manila',
          address: '24th Floor, BDO Equitable Tower, 8751 Paseo de Roxas, Makati',
          phone: '+63 2 8757 9900',
          link: 'https://www.eda.admin.ch/manila'
        },
        {
          name: 'Indian Embassy Manila',
          address: '2265 Paraiso Street, Dasmariñas Village, Makati',
          phone: '+63 2 8845 3216',
          link: 'https://www.eoimanila.gov.in/'
        }
      ],
      womensRights: [
        'Philippines has progressive women\'s rights laws including Magna Carta of Women',
        'Violence Against Women and Children Act provides legal protection',
        '53.6% of women experience intimate partner violence - significant underreporting',
        'Women\'s rights organizations: Gabriela, DAWN (Development Action for Women Network)',
        'Legal system generally supportive but enforcement can be inconsistent'
      ],
      legalSupport: [
        'US Embassy provides attorney referrals: +63 2 5301 2000',
        'Philippine Bar Association: Legal assistance and referrals',
        'Public Attorney\'s Office: Free legal aid for qualifying cases',
        'Commission on Human Rights Philippines: Rights violations assistance',
        'Tourist Assistance Call Center: 24/7 support at +63 2 8632 1191'
      ],
      reportingProcedures: [
        'Call 911 for police, fire, and medical emergencies',
        'PNP Hotline: 117 or +63 2 8722 0650 for police assistance',
        'Contact embassy immediately for serious crimes involving foreign nationals',
        'Tourist Assistance Call Center: +63 2 8632 1191 (24/7 multilingual)',
        'Document everything: photos, witness contacts, incident details',
        'Request official police report with case number',
        'Violence Against Women desk available at police stations',
        'Women and Children Protection Units (WCPU) at major police stations'
      ]
    },
    
    costAndComfort: {
      dailyBudget: {
        range: '$30 - $256 USD / day',
        description: 'Manila more expensive than other Philippine destinations. Budget travelers $30-50/day with hostels and local food. Mid-range $50-100/day with hotels. Luxury $100-256/day.',
        tip: 'Stay in BGC, Makati, or Ortigas for safety. Use Grab for transport. Budget varies significantly based on area - safer areas cost more.'
      },
      accommodation: [
        {
          type: 'Luxury Hotels (BGC/Makati)',
          avgCost: '$100-300/night',
          safetyNote: 'International standards with excellent security in safest areas of Manila.',
          safetyLevel: 'high'
        },
        {
          type: 'Mid-Range Hotels (Safe Areas)',
          avgCost: '$50-100/night',
          safetyNote: 'Good security in BGC, Makati, or Ortigas with English-speaking staff.',
          safetyLevel: 'high'
        },
        {
          type: 'Budget Hotels (Safe Areas Only)',
          avgCost: '$20-50/night',
          safetyNote: 'Basic but clean accommodations in safer districts. Avoid budget options in unsafe areas.',
          safetyLevel: 'medium'
        },
        {
          type: 'Hostels (Limited Options)',
          avgCost: '$11-25/night',
          safetyNote: 'Female dorms available but limited options. Choose hostels in BGC or Makati only.',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Grab (Ride-hailing)',
          cost: '$2-8 typical rides',
          safetyDescription: 'Safest ground transport option with tracked routes and driver verification.',
          safetyLevel: 'high'
        },
        {
          method: 'LRT/MRT (Light Rail)',
          cost: '$0.50-1.00 per ride',
          safetyDescription: 'Relatively safe during daytime but crowded. Women-only cars available during peak hours.',
          safetyLevel: 'medium'
        },
        {
          method: 'Official Airport Taxi',
          cost: '$8-15 airport transfers',
          safetyDescription: 'Metered taxis from official airport stands. Safer than street taxis but more expensive than Grab.',
          safetyLevel: 'medium'
        },
        {
          method: 'Jeepneys (NOT recommended)',
          cost: '$0.20-1.00 per ride',
          safetyDescription: 'Frequent armed hold-ups and pickpocketing. Cultural experience but avoid for safety.',
          safetyLevel: 'low'
        },
        {
          method: 'Street Taxis (Use with caution)',
          cost: '$2-8 typical rides',
          safetyDescription: 'Meter scams common. Only use if metered and in safe areas. Grab preferred.',
          safetyLevel: 'low'
        }
      ],
      budgetTips: [
        'Stay exclusively in BGC, Makati, or Ortigas - safety over savings',
        'Use Grab for all transportation - small cost increase for major safety improvement',
        'Eat at malls and established restaurants rather than street food initially',
        'Purchase Manila Tourist Ticket for unlimited public transport ($5/day)',
        'Shop at SM Malls and other major shopping centers for safety and variety',
        'Book accommodations with good reviews and security ratings',
        'Register with Tourist Assistance Call Center: +63 2 8632 1191',
        'Use hotel concierge for recommendations rather than exploring alone initially',
        'Budget extra for Grab rides instead of walking long distances',
        'Take advantage of air-conditioned malls for free cooling and safe browsing'
      ]
    },

    crimeStatistics: {
      violentCrime: 89.2, // per 100,000 (2024 data - high rates across Metro Manila)
      propertyCrime: 247.8, // per 100,000 (2024 data - pickpocketing, theft, burglary)
      sexualAssault: 45.6, // per 100,000 (2024 data - significant underreporting, actual rates likely much higher)
      kidnapping: 2.3, // per 100,000 (2024 data - includes ransom kidnapping of foreigners)
      harassment: 187.5, // per 100,000 (estimated from survey data showing 60% of women experience harassment)
      source: 'Philippine Statistics Authority 2024, Philippine National Police Crime Reports, Travel Ladies Community Data',
      year: 2024,
      note: 'Crime statistics likely underreported. Many incidents go unreported due to cultural factors and limited police response.'
    },

    governmentAdvisory: {
      level: 'Exercise Increased Caution - Level 2',
      levelNumber: 2,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Exercise increased caution to the Philippines due to crime, terrorism, civil unrest, and kidnapping. Some areas have increased risk due to terrorism and armed conflict.',
      reason: 'Crime including theft, assault, sexual assault, and murder occurs throughout the Philippines. Terrorist groups continue plotting attacks and kidnappings. Manila experiences high crime rates in certain areas.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/philippines-travel-advisory.html',
      soloTravelerAdvice: [
        'Solo female travelers should exercise caution and stay in well-reviewed accommodations',
        'Stick to well-developed tourist areas like Makati, BGC, and Ortigas during first visit',
        'Avoid walking alone after dark and use Grab or registered taxis for transportation',
        'Be cautious of drink tampering - never leave beverages unattended in bars or clubs',
        'Dress conservatively to respect local culture and avoid unwanted attention',
        'Keep copies of important documents and register with your embassy if staying long-term',
        'Have emergency contacts easily accessible and inform someone of your daily plans',
        'Be aware of common scams targeting tourists and trust your instincts'
      ],
      additionalConsiderations: [
        'Petty crime: Pickpocketing, bag-snatching, and theft common in crowded areas and public transport',
        'Terrorism threat: Active terrorist groups in southern Philippines, with occasional incidents in Manila',
        'Natural disasters: Frequent typhoons, earthquakes, and volcanic activity require preparedness',
        'Traffic safety: Heavy congestion and aggressive driving patterns pose risks to pedestrians',
        'Health concerns: Dengue fever, malaria in some areas, and water quality issues',
        'Scams: Romance scams, overcharging, and fake police checkpoints targeting foreigners'
      ],
      embassyContact: {
        name: 'U.S. Embassy Manila',
        phone: '+63 2 5301 2000',
        emergency: '+63 2 5301 2000',
        address: '1201 Roxas Boulevard, Manila 1000, Philippines'
      }
    },

    bestTimeToVisit: {
      overall: 'November to April',
      weather: 'Manila has a tropical climate with distinct wet and dry seasons. The dry season (November-April) offers less rainfall and more comfortable temperatures for exploring. March-May can be very hot and humid.',
      safety: 'Safety levels remain relatively consistent year-round, though flooding during rainy season (June-October) can create additional hazards and limit transportation options.',
      costs: 'Peak season (December-February) brings higher accommodation prices and more tourists. Shoulder seasons offer better value with manageable weather conditions.',
      crowding: 'December-February sees most international tourists. Rainy season has fewer visitors but weather can significantly impact travel plans.',
      safestMonths: ['December', 'January', 'February', 'March'],
      events: 'Dry season provides optimal conditions with less rainfall, more reliable transportation, and comfortable temperatures for outdoor activities. Avoid typhoon season (June-November) when possible for safety and logistical reasons.',
      monthlyBreakdown: {
        january: { weather: 'Cool, dry (21-30°C)', safety: 'High', crowds: 'High', notes: 'Peak tourist season, best weather' },
        february: { weather: 'Cool, dry (22-31°C)', safety: 'High', crowds: 'High', notes: 'Excellent weather, busy period' },
        march: { weather: 'Warming, dry (24-33°C)', safety: 'High', crowds: 'Medium', notes: 'Getting hotter but still dry' },
        april: { weather: 'Hot, dry (26-35°C)', safety: 'Medium-High', crowds: 'Medium', notes: 'Very hot, pre-rainy season' },
        may: { weather: 'Hot, some rain (25-34°C)', safety: 'Medium', crowds: 'Low', notes: 'Transition to wet season' },
        june: { weather: 'Wet, warm (24-32°C)', safety: 'Medium', crowds: 'Low', notes: 'Rainy season begins, flooding possible' },
        july: { weather: 'Very wet (24-31°C)', safety: 'Low-Medium', crowds: 'Low', notes: 'Peak rainy season, typhoon risk' },
        august: { weather: 'Very wet (24-31°C)', safety: 'Low-Medium', crowds: 'Low', notes: 'Heavy rains, transportation issues' },
        september: { weather: 'Wet (24-32°C)', safety: 'Low-Medium', crowds: 'Low', notes: 'Continued typhoon season' },
        october: { weather: 'Wet to dry transition (24-32°C)', safety: 'Medium', crowds: 'Low', notes: 'Late rainy season' },
        november: { weather: 'Dry, comfortable (23-31°C)', safety: 'High', crowds: 'Low-Medium', notes: 'Dry season returns, good weather' },
        december: { weather: 'Cool, dry (22-30°C)', safety: 'High', crowds: 'High', notes: 'Peak season begins, excellent weather' }
      }
    },

    // Enhanced timing and travel planning
    eventsAndNotes: {
      majorEvents: [
        {
          name: 'Chinese New Year',
          dates: 'January/February',
          safetyNotes: 'Major celebration in Manila\'s Chinatown (Binondo) with large crowds. Generally safe but expect heavy traffic and crowded areas. Good cultural experience with enhanced police presence.',
          femaleTraverlerTips: 'Perfect for experiencing Filipino-Chinese culture safely. Stick to main celebration areas and use Grab for transport due to road closures.'
        },
        {
          name: 'Holy Week (Easter)',
          dates: 'March/April',
          safetyNotes: 'Many businesses closed, reduced police presence, and mass exodus from Manila as locals travel. Streets may be emptier but some services limited. Generally safer due to fewer people.',
          femaleTraverlerTips: 'Quiet time to visit with fewer crowds. Many restaurants and attractions closed. Good time for peaceful exploration but limited options.'
        },
        {
          name: 'Flores de Mayo',
          dates: 'May',
          safetyNotes: 'Traditional religious festivals throughout the month with processions and celebrations. Generally safe cultural events with family atmosphere.',
          femaleTraverlerTips: 'Beautiful cultural celebrations to observe. Dress modestly when attending religious events and festivals.'
        }
      ],
      seasonalConsiderations: {
        dry: 'Optimal season for solo female travel with reliable transportation, clear skies, and comfortable walking conditions. Higher tourist numbers mean better security presence in tourist areas.',
        wet: 'Challenging season with flooding risks, transportation disruptions, and increased indoor time. However, fewer tourists mean lower crime targeting visitors. Always monitor weather warnings.'
      },
      travelTips: [
        'Book accommodations in advance during dry season (December-April) for best rates and availability',
        'Always have indoor backup plans during rainy season as flooding can trap travelers',
        'Typhoon season requires flexible travel plans and constant weather monitoring',
        'Air conditioning costs increase significantly during hot season (March-May)',
        'Rainy season actually safer for some crimes but creates new risks from flooding and transportation issues'
      ]
    },
  culturalSensitivity: {
    culturalDos: [
      'Use "po" and "opo" when speaking to elders and authorities - these respect words are fundamental to Filipino politeness',
      'Remove shoes before entering homes and accept offered refreshments gracefully - refusing hospitality is considered rude',
      'Show respect to elders with traditional "mano po" gesture - taking their hand to your forehead demonstrates proper reverence',
      'Embrace "pakikisama" (getting along) by avoiding confrontation and maintaining harmony in social interactions',
      'Accept gifts with both hands and express deep gratitude - wait until later to open them privately'
    ],
    culturalDonts: [
      'Don\'t be directly confrontational or say "no" bluntly - Filipinos prefer indirect communication to save face',
      'Don\'t call a host\'s wife "hostess" - this term has offensive alternative meanings in Philippine context',
      'Don\'t address elders by first names without permission - use "Sir," "Ma\'am," or family titles respectfully',
      'Don\'t criticize local food or customs even if unfamiliar - show openness and respect for cultural practices',
      'Don\'t ignore "hiya" (shame) concept - avoid actions that might embarrass others or cause loss of social face'
    ]
  },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default manila;
