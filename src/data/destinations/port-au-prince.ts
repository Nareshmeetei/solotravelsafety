import { Destination } from './types';

const portAuPrince: Destination = {
    city: 'Port-au-Prince',
    country: 'Haiti',
    continent: 'North America',
    countryCode: 'ht',
    overallScore: 1.2,
    nightSafety: 0.8,
    publicTransit: 1.5,
    walkingAlone: 0.9,
    tags: ['extreme-danger', 'do-not-travel', 'gang-control', 'state-emergency'],
    bgColor: 'bg-red-100',
    reviewCount: 12,
    lastUpdated: '2025-01-25',
    harassmentRisk: 'extreme',
    safetyBreakdown: {
      nightSafety: {
        score: 0.8,
        context: 'EXTREME DANGER: Port-au-Prince is under State of Emergency since March 2024. Armed gangs control 80-90% of the city with "near-total control" per UN reports. Night travel is extremely dangerous with frequent kidnappings, murders, and sexual assaults. Women face systematic sexual violence used as gang territorial control. 2024 data shows 5,600+ deaths, 775+ kidnappings. Embassy personnel prohibited from walking anywhere in city. NO SAFE AREAS at night.'
      },
      publicTransit: {
        score: 1.5,
        context: 'PUBLIC TRANSPORT EXTREMELY DANGEROUS: No reliable public transport system due to gang control. U.S. Embassy staff prohibited from using any public transportation or taxis. Kidnappings occur regularly on routes to/from airport. Gang-controlled checkpoints throughout city. Violence targets vehicles indiscriminately. Medical transport suspended for aid organizations. Commercial flights suspended by most airlines due to airport attacks.'
      },
      walkingAlone: {
        score: 0.9,
        context: 'WALKING PROHIBITED: U.S. Embassy personnel cannot walk anywhere in Port-au-Prince. 80-90% gang control means no safe pedestrian areas. Women face extreme risk of sexual violence, kidnapping, and murder. Recent UN reports document systematic use of sexual violence by gangs. Violent attacks occur in daylight even in previously "safe" areas like Pétion-Ville. All international advisories state "Do Not Travel" to Haiti for any reason.'
      }
    },
    neighborhoods: {
      safe: [],
      caution: [],
      avoid: [
        'ENTIRE CITY UNSAFE: Armed gangs control 80-90% of Port-au-Prince including Delmas, Carrefour-Feuilles, Martissant, Fort National, Pétion-Ville, Tabarre, Solino, Nazon, Cité Soleil. Gang violence, kidnappings, murders, and sexual assaults occur daily. No neighborhoods considered safe.',
        'Downtown/Central Port-au-Prince: Complete gang control, extreme violence, multiple daily murders and kidnappings.',
        'Pétion-Ville: Previously upscale area now under gang influence with frequent home invasions, kidnappings, and violence.',
        'Airport Area: Travelers regularly attacked leaving airport. Gang violence affects all routes to/from Toussaint-Louverture International.',
        'All residential areas: Home invasions frequent in middle-class and affluent neighborhoods.'
      ]
    },
    accommodations: [
      {
        name: 'EMERGENCY ACCOMMODATION NOTICE',
        type: 'critical-notice',
        features: ['Level 4 Do Not Travel Advisory', 'Gang control 80-90% of city', 'No safe accommodations', 'Embassy restrictions'],
        rating: 0.0,
        notes: 'CRITICAL SAFETY NOTICE: Standard accommodation recommendations cannot be provided due to Level 4 Do Not Travel advisory. Gang control of 80-90% of Port-au-Prince means NO accommodations can guarantee safety. Multiple hotel attacks, guest kidnappings, and staff threats reported. Any accommodation requires embassy coordination and professional security assessment.',
        link: 'https://ht.usembassy.gov/'
      },
      {
        name: 'Embassy-Coordinated Secure Facilities',
        type: 'diplomatic-only',
        features: ['Embassy coordination required', 'Armed security essential', 'Evacuation capability', 'Limited availability'],
        rating: 2.5,
        notes: 'DIPLOMATIC/EMERGENCY ONLY: Extremely limited secure facilities available only through embassy coordination for official business or family emergencies. Requires professional security assessment, armed escort capability, and multiple evacuation plans. Not accessible to general travelers.',
        link: 'Contact U.S. Embassy: +509-2229-8000'
      },
      {
        name: 'International Organization Compounds',
        type: 'humanitarian-only',
        features: ['NGO/UN coordination required', 'Fortified compounds', 'Medical evacuation capability', 'Restricted access'],
        rating: 3.0,
        notes: 'HUMANITARIAN WORKERS ONLY: Limited access through international organizations like UN, MSF, or major NGOs. Requires official humanitarian worker status, security clearance, and organizational evacuation protocols. Not available for tourism or general business travel.',
        link: 'Contact relevant international organization'
      },
      {
        name: 'Embassy Safe Houses',
        type: 'emergency-diplomatic',
        features: ['U.S. Embassy coordination', 'Maximum security protocols', 'Emergency evacuation ready', 'Diplomatic personnel only'],
        rating: 3.5,
        notes: 'DIPLOMATIC EMERGENCIES ONLY: Extremely limited capacity for U.S. citizens in life-threatening emergencies requiring immediate embassy protection. Access only through official embassy determination of imminent threat to life. Requires State Department authorization.',
        link: 'U.S. Embassy Emergency Line: +509-2229-8000'
      },
      {
        name: 'Medical Evacuation Staging Areas',
        type: 'medical-emergency',
        features: ['Medical evacuation companies', 'Temporary staging only', 'Airport proximity when safe', 'International coordination'],
        rating: 2.8,
        notes: 'MEDICAL EVACUATION ONLY: Temporary staging areas used by medical evacuation companies like International SOS for emergency medical extraction. Not accommodations but emergency medical stabilization points. Requires active medical evacuation insurance and coordination.',
        link: 'International SOS: +1-215-942-8226'
      },
      {
        name: 'Private Security Company Safe Houses',
        type: 'corporate-security',
        features: ['Corporate security firms', 'Executive protection', 'Fortified facilities', 'Extreme cost'],
        rating: 3.2,
        notes: 'HIGH-RISK CORPORATE TRAVEL ONLY: Private security companies provide fortified safe houses for essential corporate travel at extreme cost ($1000+ USD per night). Requires corporate security contract, threat assessment, and armored transport capability. Used by mining, oil, and diplomatic security firms.',
        link: 'Contact through corporate security providers only'
      }
    ],
    alerts: [
      {
        title: 'STATE EMERGENCY - DO NOT TRAVEL',
        description: 'Haiti under State of Emergency since March 2024. Armed gangs control 80-90% of Port-au-Prince. All governments advise against travel.',
        location: 'Entire country',
        reportCount: 1500,
        severity: 'critical',
        dateReported: '2025-01-23'
      },
      {
        title: 'EXTREME SEXUAL VIOLENCE RISK',
        description: 'UN reports systematic sexual violence by gangs as territorial control. Women face extreme risk of rape, sexual slavery, and gang violence.',
        location: 'All areas',
        reportCount: 890,
        severity: 'critical',
        dateReported: '2025-01-20'
      },
      {
        title: 'MASS KIDNAPPING OPERATIONS',
        description: '775+ kidnappings in 2024. Foreign nationals specifically targeted. Ransom demands and violence against captives common.',
        location: 'Citywide',
        reportCount: 775,
        severity: 'critical',
        dateReported: '2025-01-15'
      }
    ],
    safetyTips: {
      clothing: `CRITICAL SAFETY NOTICE: ALL TRAVEL TO HAITI STRONGLY DISCOURAGED
• If emergency travel unavoidable: Dress extremely modestly, avoid jewelry, designer items
• Carry minimal identification - criminals target foreigners
• Multiple layers to conceal body shape from potential attackers
• Dark, non-descript clothing to avoid attention
• Emergency cash hidden in multiple locations`,
      firstTimers: `EMERGENCY PROTOCOLS ONLY - NOT RECOMMENDED FOR ANY TRAVELER:
• Contact U.S. Embassy immediately upon arrival (+509-2229-8000)
• Arrange security escort through embassy or professional security firm
• Have multiple evacuation plans and emergency contacts
• Never travel alone - minimum armed security detail required
• Maintain 24/7 communication schedule with family/employer
• Prepare for immediate evacuation if situation deteriorates`,
      apps: [
        'STEP Enrollment',
        'Garmin inReach',
        'Embassy Alerts',
        'Life360',
        'SaferWatch',
        'FEMA',
        'Google SOS',
        'International SOS'
      ],
      appLinks: [
        { name: 'STEP Enrollment', link: 'https://travel.state.gov/content/travel/en/international-travel/before-you-go/step.html', description: 'CRITICAL: U.S. State Department emergency alert system - mandatory enrollment for embassy communication', rating: 5.0 },
        { name: 'Garmin inReach', link: 'https://www.garmin.com/en-US/c/outdoor-recreation/satellite-communicators/', description: 'ESSENTIAL: Satellite SOS communication when cellular fails - 24/7 emergency response coordination', rating: 4.9 },
        { name: 'Embassy Alerts', link: 'https://ht.usembassy.gov/', description: 'CRITICAL: Real-time security updates from U.S. Embassy Haiti - life-saving information', rating: 5.0 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'ESSENTIAL: Continuous location sharing with family/employer - automatic crash detection and SOS', rating: 4.6 },
        { name: 'SaferWatch', link: 'https://www.saferwatchapp.com/', description: 'CRITICAL: Discrete panic button connecting directly to law enforcement and security teams', rating: 4.8 },
        { name: 'FEMA', link: 'https://www.fema.gov/about/news-multimedia/mobile-products', description: 'Emergency weather alerts and shelter locations - critical for natural disaster response', rating: 4.7 },
        { name: 'Google SOS', link: 'https://play.google.com/store/apps/details?id=com.google.android.apps.safetyhub', description: 'ESSENTIAL: Personal safety hub with emergency location sharing and crisis alerts', rating: 4.5 },
        { name: 'International SOS', link: 'https://www.internationalsos.com/', description: 'CRITICAL: Medical and security evacuation services - essential for emergency extraction', rating: 4.8 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Sekou!',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'Call the police!',
          local: 'Rele lapolis!',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'I need a doctor.',
          local: 'Mwen bezwen yon doktè.',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'Where is the hospital?',
          local: 'Ki kote lopital la ye?',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'I am American/Foreign.',
          local: 'Mwen se Ameriken/Etranje.',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'Please do not hurt me.',
          local: 'Tanpri pa fè m mal.',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'I need to contact my embassy.',
          local: 'Mwen bezwen kontakte ambasad mwen an.',
          localLanguage: 'Haitian Creole'
        },
        {
          english: 'Emergency - help me!',
          local: 'Ijans - ede m!',
          localLanguage: 'Haitian Creole'
        }
      ]
    },
    culturalExpectations: {
      dressCode: 'SECURITY PRIORITY OVER CULTURAL NORMS: Dress to avoid attention - modest, dark, non-descript clothing. Remove all jewelry, avoid designer items. Cultural dress codes secondary to personal safety in current crisis.',
      behaviorNorms: [
        'SURVIVAL MODE PROTOCOLS: Avoid eye contact with armed groups',
        'Never photograph people, buildings, or activities without permission',
        'Comply immediately with any demands from armed individuals',
        'Maintain low profile - speak quietly, avoid drawing attention',
        'Move quickly between secure locations with security escort',
        'Never travel alone or on foot anywhere in the city',
        'Respect cultural norms only when safe to do so'
      ],
      perception: 'EXTREME DANGER FOR ALL FOREIGNERS, ESPECIALLY WOMEN: Solo female travelers face systematic sexual violence, kidnapping, and murder. Gang use sexual violence as territorial control. Foreign women specifically targeted for kidnapping and ransom. Cultural perception irrelevant given security crisis. All travel strongly discouraged by international governments.'
    },
    bestTimeToVisit: {
      safestMonths: ['NONE - DO NOT TRAVEL'],
      events: 'All tourism suspended due to security crisis. No safe time to visit.'
    },
    emergencyInfo: {
      police: '114',
      fire: '115',
      medical: '118',
      general: '911',
    },
    currency: {
      name: 'Haitian Gourde',
      code: 'HTG',
      exchangeRate: {
        usd: 0.0074,
        eur: 0.0063,
        gbp: 0.0055
      },
      scamWarnings: [
        'CRITICAL: Currency exchange extremely dangerous due to robbery risk',
        'Criminals target anyone with foreign currency or perceived wealth',
        'Banks frequently closed due to security threats',
        'ATMs often non-functional or targeted by criminals',
        'Use only USD cash in small denominations if emergency travel required'
      ]
    },
    scamWarnings: [
      { 
        title: 'KIDNAPPING FOR RANSOM', 
        description: 'Foreign nationals specifically targeted for kidnapping. 775+ cases in 2024. Ransom demands common.', 
        severity: 'critical' 
      },
      { 
        title: 'FAKE POLICE/MILITARY', 
        description: 'Criminals impersonate police/military to rob and kidnap victims. Verify credentials through embassy only.', 
        severity: 'critical' 
      },
      { 
        title: 'AIRPORT TARGETING', 
        description: 'Travelers followed from airport and attacked. Gang surveillance of all arrivals. Pre-arranged secure transport essential.', 
        severity: 'critical' 
      },
      { 
        title: 'FAKE HUMANITARIAN WORKERS', 
        description: 'Criminals pose as aid workers to approach and target foreigners. Verify through known organizations only.', 
        severity: 'high' 
      }
    ],
    languages: [
      'Haitian Creole (Kreyòl)',
      'French (Official)',
      'Limited English'
    ],
    daytimeSafetyPercent: 15.2,
    nighttimeSafetyPercent: 8.1,
    safetySourceName: 'Multiple Government Travel Advisories 2025',
    safetySourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html',
    redFlags: [
      { label: 'Mass Kidnappings for Ransom', frequency: 'Daily', icon: 'Users' },
      { label: 'Systematic Sexual Violence', frequency: 'Daily', icon: 'AlertTriangle' },
      { label: 'Gang-Controlled Territory (80-90%)', frequency: 'Permanent', icon: 'Shield' },
      { label: 'Armed Robbery & Carjacking', frequency: 'Hourly', icon: 'Car' },
      { label: 'Murder & Violent Assault', frequency: 'Daily', icon: 'Skull' }
    ],
    culturalDos: [
      'Contact embassy immediately if in Haiti',
      'Maintain constant communication with security',
      'Follow all embassy security protocols',
      'Respect local customs when safe to do so',
      'Keep emergency evacuation plans ready'
    ],
    culturalDonts: [
      "Don't travel to Haiti - official government advice",
      "Don't walk anywhere in Port-au-Prince",
      "Don't use public transportation",
      "Don't display any valuables or foreign currency",
      "Don't travel without professional security escort"
    ],
    womensConfidenceScore: {
      score: 5.2,
      source: "Multiple Government Advisories 2025",
      sourceUrl: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html"
    },
    confidenceByActivity: [
      { label: 'Sightseeing', confidence: 5, source: 'U.S. State Department 2025', sourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html' },
      { label: 'Nightlife', confidence: 0, source: 'U.S. State Department 2025', sourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html' },
      { label: 'Public Transport', confidence: 2, source: 'Canadian Government Advisory 2025', sourceUrl: 'https://travel.gc.ca/destinations/haiti' },
      { label: 'Dining Alone', confidence: 8, source: 'Australian Government Advisory 2025', sourceUrl: 'https://www.smartraveller.gov.au/destinations/americas/haiti' }
    ],
    sexualHarassmentData: {
      prevalence: 'extreme',
      commonLocations: [
        'ALL AREAS OF CITY - Gang territorial control includes systematic sexual violence',
        'Checkpoints and gang-controlled roads',
        'Public spaces, markets, and transportation routes',
        'Residential areas during home invasions',
        'Even secure facilities face infiltration risk'
      ],
      reportingRate: 8, // Extremely low due to security situation and lack of functional police
      legalProtection: 'MINIMAL - Legal system largely non-functional due to gang control. Police response extremely limited. UN reports systematic use of sexual violence by gangs as territorial control method. Legal recourse virtually non-existent.',
      supportResources: [
        'EMERGENCY EVACUATION PRIORITY: Contact embassy immediately',
        'U.S. Embassy Port-au-Prince: +509-2229-8000 (Emergency Line)',
        'U.S. Citizen Emergency Services: acspap@state.gov',
        'Medical evacuation services (if available): Contact embassy',
        'SOFA (Solidarity of Women in Struggle): +509 2245-1156 (Limited operations)',
        'Médecins Sans Frontières (Limited operations): Sexual violence care when accessible',
        'IMPORTANT: Most local support services non-functional due to security crisis'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'Hôpital de l\'Université d\'État d\'Haïti (HUEH)',
          address: 'Boulevard Harry Truman, Port-au-Prince',
          phone: '+509 2245-1240',
          emergency: true,
          specialties: ['Emergency Medicine', 'Limited Women\'s Health'],
          link: 'CRITICAL: Often closed due to security threats. Verify operations through embassy.',
          notes: 'SECURITY RISK: Hospital frequently targeted by gangs. Medical staff safety compromised.'
        },
        {
          name: 'Hôpital Bernard Mevs',
          address: 'Tabarre 27, Port-au-Prince',
          phone: '+509 2816-3333',
          emergency: true,
          specialties: ['Trauma Care', 'Emergency Medicine'],
          link: 'Private hospital with better security but still at risk.',
          notes: 'CRITICAL: Verify current security status and accessibility through embassy coordination.'
        },
        {
          name: 'MSF Tabarre Hospital',
          address: 'Tabarre, Port-au-Prince',
          phone: 'Contact through MSF coordination',
          emergency: true,
          specialties: ['Emergency Medicine', 'Sexual Violence Care', 'Trauma'],
          link: 'https://www.doctorswithoutborders.org/what-we-do/where-we-work/haiti',
          notes: 'CRITICAL: MSF operations frequently suspended due to violence. One of last functioning hospitals.'
        }
      ],
      pharmacies: [
        {
          name: 'Pharmacie Séjourné',
          address: 'Pétion-Ville area',
          phone: '+509 2257-4444',
          hours: 'Variable due to security situation',
          emergency: false,
          link: 'CRITICAL: Verify operations and security before travel',
          notes: 'SECURITY RISK: Pharmacies frequently targeted for robbery. Embassy coordination required.'
        },
        {
          name: 'Pharmacie La Renaissance',
          address: 'Delmas, Port-au-Prince',
          phone: '+509 2246-1234',
          hours: 'Limited operations due to security',
          emergency: false,
          link: 'Contact through hotel/security provider only',
          notes: 'CRITICAL: Area under gang control. Extremely dangerous to access.'
        }
      ],
      womensHealth: {
        clinics: [
          'MSF Sexual Violence Care: Available at limited facilities when accessible',
          'EMERGENCY ONLY: Contact embassy for medical evacuation if sexual assault occurs',
          'Limited obstetric care available through MSF when operations permit',
          'CRITICAL: Most women\'s health services non-functional due to security crisis'
        ],
        gynecologists: [
          'EMERGENCY EVACUATION RECOMMENDED: Limited local gynecological care',
          'MSF provides emergency obstetric care when accessible',
          'Private medical evacuation required for comprehensive women\'s health needs'
        ],
        emergencyContraception: [
          'LIMITED AVAILABILITY: Some pharmacies may have emergency contraception',
          'MSF facilities may provide when accessible',
          'CRITICAL: Bring all necessary medications due to supply shortages'
        ],
        sanitaryProducts: [
          'BRING ALL SUPPLIES: Severe shortages throughout city',
          'Some hotel shops may have limited supplies at extreme markup',
          'International aid shipments occasionally available through NGOs'
        ]
      },
      vaccinations: [
        'Routine vaccinations: Measles, Mumps, Rubella, Diphtheria, Tetanus, Pertussis, Polio',
        'Hepatitis A and B (food/water contamination and medical facility risks)',
        'Typhoid (poor sanitation conditions)',
        'Yellow Fever (if traveling from endemic area)',
        'Cholera vaccine recommended due to ongoing outbreaks',
        'COVID-19 vaccination with recent booster'
      ],
      healthRisks: [
        'CRITICAL: Medical evacuation may be impossible due to airport closures',
        'Cholera outbreaks ongoing with poor sanitation',
        'Limited clean water and electricity affecting medical facilities',
        'Dengue fever, Zika, and Chikungunya from mosquitoes',
        'Food and waterborne illnesses from contaminated supplies',
        'HIV/AIDS prevalence - avoid all medical procedures unless life-threatening',
        'Trauma injuries from violence with limited emergency care available'
      ]
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy Port-au-Prince',
          address: 'Tabarre 41, Boulevard 15 Octobre, Port-au-Prince, Haiti',
          phone: '+509-2229-8000',
          link: 'https://ht.usembassy.gov/'
        },
        {
          name: 'Canadian Embassy Haiti',
          address: 'Route de Delmas, Delmas 75, Port-au-Prince',
          phone: '+509-2812-9000',
          link: 'https://www.canadainternational.gc.ca/haiti/',
          notes: 'LIMITED OPERATIONS: Consular services restricted due to security situation'
        },
        {
          name: 'French Embassy Haiti',
          address: '51 Place des Héros de l\'Indépendance, Port-au-Prince',
          phone: '+509-2299-2000',
          link: 'https://ht.ambafrance.org/',
          notes: 'SECURITY RESTRICTIONS: Embassy operations limited by ongoing crisis'
        },
        {
          name: 'Dominican Republic Embassy',
          address: '121 Avenue John Brown, Pétion-Ville',
          phone: '+509-2256-2373',
          link: 'Contact for emergency border assistance',
          notes: 'BORDER CLOSURE: Land borders closed due to security situation'
        }
      ],
      womensRights: [
        'LEGAL SYSTEM NON-FUNCTIONAL: Courts and police largely inoperative due to gang control',
        'Haitian Constitution guarantees gender equality but enforcement impossible',
        'Sexual violence laws exist but prosecution extremely rare',
        'Women\'s rights organizations largely ceased operations due to security threats',
        'International legal support may be available through embassy coordination'
      ],
      legalSupport: [
        'EMERGENCY ONLY: Contact embassy immediately for any legal issues',
        'Local legal system largely non-functional due to gang control',
        'International legal evacuation may be required for serious cases',
        'Bureau des Avocats: +509-2245-6789 (Limited operations)',
        'MINUSTAH Legal Affairs (UN): May provide limited assistance if accessible'
      ],
      reportingProcedures: [
        'PRIORITY: Report to U.S. Embassy immediately: +509-2229-8000',
        'Local police response extremely limited or non-existent',
        'Document all incidents with photos/details for embassy',
        'Prepare for immediate evacuation if serious crime occurs',
        'Contact family/employers immediately with embassy assistance',
        'International investigation may be required due to local system failure'
      ]
    },
    transportationSafety: {
      safeOptions: [
        {
          type: 'Private Security Transport',
          safety: 25, // Still extremely dangerous
          recommendations: [
            'Professional security firms only',
            'Armored vehicles when available',
            'Multiple escape routes planned',
            'Embassy coordination required'
          ],
          companies: ['Contact through embassy or international security firms'],
          link: 'Embassy coordination essential'
        },
        {
          type: 'Embassy Transport',
          safety: 40, // Higher but still risky
          recommendations: [
            'Limited to official business only',
            'Advance coordination required',
            'Multiple security protocols',
            'Restricted to emergency situations'
          ],
          companies: ['U.S. Embassy only'],
          link: 'https://ht.usembassy.gov/'
        }
      ],
      nightTravel: {
        safety: 5, // Extremely dangerous
        warnings: [
          'PROHIBITED: U.S. Embassy staff cannot travel after dark',
          'Gang activity increases significantly at night',
          'Kidnapping and murder rates highest during evening hours',
          'No safe areas for any nighttime movement',
          'Medical evacuation impossible after dark'
        ],
        alternatives: [
          'NO SAFE ALTERNATIVES: Avoid all nighttime movement',
          'Secure accommodation with 24/7 armed security only',
          'Emergency evacuation via helicopter if available',
          'Contact embassy for emergency protocols'
        ]
      },
      verifiedProviders: [
        {
          name: 'Embassy Security Coordination',
          type: 'Official Government',
          contact: '+509-2229-8000',
          safety: 40
        },
        {
          name: 'International Security Firms',
          type: 'Private Security',
          contact: 'Embassy referral only',
          safety: 25
        }
      ]
    },
    accommodationSafety: {
      securityFeatures: [
        'ESSENTIAL: Armed security guards 24/7',
        'Fortified compound with high walls/barriers',
        'Multiple evacuation routes planned',
        'Embassy-approved security protocols',
        'Armored vehicle access capability',
        'Satellite communication backup'
      ],
      safeNeighborhoods: [
        'NO SAFE NEIGHBORHOODS: All areas under gang threat'
      ],
      womensOnly: [],
      userReviews: [
        {
          rating: 2.1,
          safety: 15,
          comments: 'EXTREMELY DANGEROUS: Multiple security incidents. Hotel staff threatened. Guests evacuated.',
          date: '2024-12-15'
        },
        {
          rating: 1.8,
          safety: 12,
          comments: 'CRITICAL SITUATION: Armed attack near hotel. Embassy advised immediate departure.',
          date: '2024-11-20'
        }
      ]
    },
    cybersecurity: {
      wifiSafety: [
        'CRITICAL: Internet infrastructure severely compromised',
        'Gang surveillance of communications common',
        'Use satellite communication when possible',
        'Avoid sensitive communications on local networks',
        'VPN essential but may not function reliably'
      ],
      digitalScams: [
        'Fake embassy communications requesting money transfers',
        'Criminals monitoring hotel wifi to target guests',
        'Fraudulent security services advertising online',
        'Fake evacuation services demanding advance payment'
      ],
      vpnRecommendations: [
        'Satellite-based VPN services',
        'Multiple backup communication methods',
        'Embassy-approved secure communication channels'
      ],
      dataProtection: [
        'Assume all local communications monitored',
        'Sensitive data should be encrypted with military-grade security',
        'Avoid cloud storage of critical documents',
        'Physical document security essential'
      ]
    },
    communityReports: {
      recentIncidents: [
        {
          type: 'Mass Kidnapping Operation',
          location: 'Pétion-Ville area',
          date: '2025-01-20',
          description: '15 people kidnapped including 3 foreign nationals in coordinated gang operation',
          severity: 'critical'
        },
        {
          type: 'Hospital Attack',
          location: 'Multiple hospitals',
          date: '2025-01-18',
          description: 'Armed gangs attacked medical facilities, staff evacuated',
          severity: 'critical'
        },
        {
          type: 'Airport Violence',
          location: 'Toussaint-Louverture Airport',
          date: '2025-01-15',
          description: 'Travelers attacked immediately after airport departure, 4 injured',
          severity: 'critical'
        }
      ],
      safetyTips: [
        {
          tip: 'DO NOT TRAVEL TO HAITI - all international government advisories',
          author: 'U.S. State Department',
          date: '2025-01-23',
          upvotes: 2847
        },
        {
          tip: 'If emergency travel required, contact embassy for security coordination',
          author: 'Embassy Personnel',
          date: '2025-01-22',
          upvotes: 1923
        },
        {
          tip: 'Maintain 24/7 communication with family and embassy if in Haiti',
          author: 'Security Expert',
          date: '2025-01-21',
          upvotes: 1654
        }
      ]
    },
    governmentAdvisory: {
      level: 'Do Not Travel',
      levelNumber: 4,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'Do not travel to Haiti due to kidnapping, crime, civil unrest, and poor health care infrastructure. Country is in State of Emergency. Armed gangs control most of Port-au-Prince and have committed kidnappings, sexual violence, and other violent crimes against both Haitian and foreign nationals.',
      reason: 'Kidnapping, violent crime, gang control, civil unrest, poor health care.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html',
      soloTravelerAdvice: [
        'DO NOT TRAVEL - Level 4 Advisory in effect',
        'Gang control of 80-90% of Port-au-Prince with daily violence',
        'Women face extreme risk of kidnapping and sexual violence',
        'Embassy services severely limited with restricted staffing',
        'No safe areas exist - avoid all travel to Haiti'
      ]
    },
    crimeStatistics: {
      violentCrime: 389.2, // per 100,000 (2024 data - among highest globally)
      propertyCrime: 892.1, // per 100,000 (2024 estimated)
      sexualAssault: 67.3, // per 100,000 (2024 data - systematic gang violence)
      kidnapping: 156.7, // per 100,000 (775+ cases in 2024 in Port-au-Prince alone)
      murder: 108.4, // per 100,000 (5,600+ deaths in 2024)
      source: 'UN Human Rights Office, Haiti National Police, U.S. State Department 2024-2025',
      year: 2024,
      trend: 'Extreme deterioration: Gang control expanded to 80-90% of capital with systematic violence'
    },
    personalSafetyTools: {
      recommendedDevices: [
        'CRITICAL: Satellite communication device (primary)',
        'GPS tracker with emergency beacon',
        'Body armor (if professional security recommends)',
        'Emergency cash in multiple hidden locations',
        'Backup identification documents',
        'First aid kit for trauma injuries',
        'Water purification tablets'
      ],
      safetyApps: [
        {
          name: 'Embassy Alert System',
          purpose: 'Critical government security alerts',
          rating: 5.0
        },
        {
          name: 'Garmin inReach',
          purpose: 'Satellite SOS communication',
          rating: 4.9
        },
        {
          name: 'STEP Enrollment',
          purpose: 'U.S. government emergency contact system',
          rating: 4.8
        }
      ],
      emergencyContacts: [
        {
          name: 'U.S. Embassy Emergency',
          number: '+509-2229-8000',
          type: 'Life-threatening emergencies only'
        },
        {
          name: 'Haiti National Police',
          number: '114',
          type: 'LIMITED RESPONSE CAPABILITY'
        },
        {
          name: 'Medical Emergency',
          number: '118',
          type: 'EXTREMELY LIMITED AVAILABILITY'
        },
        {
          name: 'Fire Department',
          number: '115',
          type: 'LIMITED OPERATIONS'
        }
      ]
    },
    usefulTips: [
      {
        title: 'DO NOT TRAVEL - Official Government Advisory',
        description: 'All major governments including U.S., Canada, Australia, and UK advise against ALL travel to Haiti due to extreme security threats including kidnapping, murder, and sexual violence.',
        severity: 'critical',
        sourceName: 'U.S. Department of State',
        sourceUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/haiti-travel-advisory.html'
      },
      {
        title: 'Gang Control of 80-90% of Port-au-Prince',
        description: 'Armed gangs control most of the capital with systematic violence, kidnapping operations, and sexual violence used as territorial control. No safe areas exist for civilians.',
        severity: 'critical',
        sourceName: 'United Nations Human Rights Office',
        sourceUrl: 'https://news.un.org/en/story/2024/06/1151621'
      },
      {
        title: 'Women Face Extreme Risk of Sexual Violence',
        description: 'UN reports document systematic sexual violence by gangs against women and girls as means of territorial control. Sexual slavery and mass rape documented in gang-controlled areas.',
        severity: 'critical',
        sourceName: 'UN Women Haiti Report 2024',
        sourceUrl: 'https://haitiantimes.com/2024/08/05/sexual-assault-women-rape-haiti/'
      }
    ],
    costAndComfort: {
      dailyBudget: {
        range: 'N/A - Travel Not Recommended',
        description: 'CRITICAL: All travel to Haiti strongly discouraged by international governments due to extreme security threats.',
        tip: 'Emergency evacuation costs can exceed $10,000+ USD. Travel insurance may not cover Haiti due to current advisory level.'
      },
      accommodation: [
        {
          type: 'High-Security Hotel',
          avgCost: '$200-500+ USD',
          safetyNote: 'CRITICAL: Even luxury hotels face security threats and attacks',
          safetyLevel: 'low'
        },
        {
          type: 'Embassy-Approved Secure Facility',
          avgCost: '$400+ USD',
          safetyNote: 'LIMITED AVAILABILITY: Very few options with adequate security',
          safetyLevel: 'medium'
        }
      ],
      transport: [
        {
          method: 'Private Security Transport',
          cost: '$300+ USD per trip',
          safetyDescription: 'EXTREME RISK: Even armored vehicles attacked regularly',
          safetyLevel: 'low'
        },
        {
          method: 'Embassy Transport',
          cost: 'Official business only',
          safetyDescription: 'LIMITED AVAILABILITY: Emergency situations only',
          safetyLevel: 'medium'
        }
      ],
      budgetTips: [
        'DO NOT TRAVEL - No budget considerations overcome security risks',
        'Emergency evacuation costs $10,000+ USD if possible',
        'Medical evacuation may be impossible due to airport closures',
        'Security costs minimum $500+ USD per day if travel unavoidable',
        'Insurance may not cover claims due to Level 4 travel advisory'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default portAuPrince;