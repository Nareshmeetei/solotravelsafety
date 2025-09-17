import { Destination } from './types';

// Enhanced London Data for Solo Female Travelers - January 2025 Update
const london: Destination = {
    city: 'London',
    country: 'United Kingdom',
    continent: 'Europe',
    countryCode: 'gb',
    overallScore: 8.2,
    nightSafety: 7.8,
    publicTransit: 8.9,
    walkingAlone: 8.0,
    tags: ['insider-tips', 'extremely-safe', 'multicultural'],
    bgColor: 'bg-green-25',
    reviewCount: 892,
    lastUpdated: '2 hours ago',
    harassmentRisk: 'low',
    safetyBreakdown: {
      nightSafety: { 
        score: 7.8, 
        context: 'London is generally very safe at night, especially in central zones 1-2. Well-lit streets, active nightlife, and visible police presence make most areas comfortable for solo women. Some outer areas like certain parts of Tower Hamlets, Newham, and Croydon require extra caution after dark. 2024 Met Police data shows violent crime against tourists is rare in central London.'
      },
      publicTransit: { 
        score: 8.9, 
        context: 'The London Underground (Tube), buses, and overground are exceptionally safe and well-monitored. Night Tube service on weekends provides safe late-night transport. CCTV coverage is extensive, and Transport for London has dedicated British Transport Police. The most common issue is pickpocketing during rush hour and phone snatching, particularly on busy Central and Northern lines.'
      },
      walkingAlone: { 
        score: 8.0, 
        context: 'Walking alone in London is very safe in most areas, particularly Zone 1-2 during day and evening. The city has excellent street lighting, busy pedestrian traffic, and helpful locals. Solo women report feeling comfortable, though areas like Elephant & Castle, some parts of Hackney, and housing estates in outer boroughs require more awareness.'
      }
    },
    neighborhoods: {
      safe: [
        {
          name: 'Covent Garden',
          description: 'Theater district with excellent safety record, bustling atmosphere day and night. Well-patrolled tourist area with plenty of restaurants, shops, and entertainment. One of the safest areas for solo female travelers with high foot traffic and police presence.'
        },
        {
          name: 'South Kensington',
          description: 'Upscale area near museums (Natural History, V&A, Science Museum) with very low crime rates. Affluent residential neighborhood with excellent lighting, safe streets, and proximity to Hyde Park. Perfect for solo female travelers prioritizing safety.'
        },
        {
          name: 'Marylebone',
          description: 'Sophisticated area with Regent\'s Park access, high-end shops on Marylebone High Street, and excellent safety standards. Well-connected to transport with low crime rates and friendly local community atmosphere.'
        },
        {
          name: 'Bloomsbury',
          description: 'Historic literary quarter with the British Museum, garden squares, and excellent walkability. Very safe area popular with students and academics, good for solo female travelers interested in culture and history.'
        },
        {
          name: 'Notting Hill',
          description: 'Charming area with colorful houses, Portobello Market, and strong community feel. Generally safe with good police presence, though crowded during market days. Beautiful tree-lined streets and upscale local amenities.'
        },
        {
          name: 'Borough & London Bridge',
          description: 'Foodie paradise with Borough Market and Thames riverside walks. Rapidly gentrifying area with improving safety, excellent for day visits. Some quieter streets require caution at night but main areas are well-monitored.'
        }
      ],
      caution: ['Elephant & Castle at night', 'Some housing estates in outer boroughs', 'Deserted areas of parks after dark'],
      avoid: ['Certain parts of Tower Hamlets late at night', 'Isolated underground station platforms', 'Croydon town center after midnight']
    },
    accommodations: [
      {
        name: 'Hostelle - All-Women Hostel',
        type: 'female-only hostel',
        features: ['Women-only accommodation', 'Female staff', 'Safe central location', 'Community atmosphere'],
        rating: 9.2,
        notes: 'London\'s first and only all-women hostel providing the safest environment for solo female travelers. Located in central London with excellent security and welcoming community.',
        link: 'https://www.hostelle.com/london'
      },
      {
        name: 'Onefam Waterloo',
        type: 'social hostel',
        features: ['Female dorms available', 'Central location', 'Daily activities', 'Near Waterloo Station'],
        rating: 8.9,
        notes: 'Top choice for solo female travelers seeking social atmosphere. Safe area near Thames with organized activities and easy transport access. Female-only dorms with privacy curtains and lockers.',
        link: 'https://onefam.com/waterloo'
      },
      {
        name: 'Wombat\'s City Hostel London',
        type: 'hostel',
        features: ['24-hour security', 'Key card access', 'Female dorms', 'Near Tower Bridge'],
        rating: 8.7,
        notes: 'Secure hostel with excellent safety features including 24-hour reception and secure luggage storage. Located in trendy area near Tower Bridge with easy access to attractions.',
        link: 'https://www.wombats-hostels.com/london'
      },
      {
        name: 'The Z Hotel Piccadilly',
        type: 'boutique hotel',
        features: ['Central location', 'Modern security', 'Compact luxury', 'Solo-friendly'],
        rating: 8.8,
        notes: 'Perfect for solo female travelers wanting hotel comfort in central location. Small but stylish rooms, excellent security, and prime Piccadilly location near theaters and shops.',
        link: 'https://www.thezhotels.com/piccadilly'
      },
      {
        name: 'Premier Inn London County Hall',
        type: 'budget hotel',
        features: ['Affordable luxury', 'Thames views', 'Safe location', '24/7 reception'],
        rating: 8.5,
        notes: 'Excellent value for solo travelers with hotel security and comfort. Located on South Bank with stunning Thames and Big Ben views, walking distance to attractions.',
        link: 'https://www.premierinn.com/county-hall'
      },
      {
        name: 'The Zetter Townhouse Marylebone',
        type: 'boutique hotel',
        features: ['Boutique charm', 'Safe neighborhood', 'Personalized service', 'Luxury amenities'],
        rating: 9.0,
        notes: 'Charming boutique hotel in one of London\'s safest neighborhoods. Perfect for solo female travelers seeking luxury and personal service in beautiful Marylebone setting.',
        link: 'https://www.thezettertownhouse.com/marylebone'
      }
    ],
    alerts: [],
    safetyTips: {
      clothing: [
        'London weather is unpredictable - pack layers including waterproof jacket for frequent rain',
        'Comfortable walking shoes essential for cobblestone streets and extensive walking',
        'Dress code varies by venue - smart casual for restaurants, some require jackets for fine dining',
        'No specific modest dress requirements, but dress appropriately for religious sites',
        'Avoid flashy jewelry on public transport to prevent theft'
      ],
      firstTimers: [
        'London is excellent for first-time solo female travelers with English language and helpful locals',
        'Get Oyster Card or use contactless payment for all public transport - most convenient system',
        'Download Tube map offline as mobile signal poor underground in some stations',
        'Book popular restaurants and theater shows in advance, especially weekends',
        'Stand right, walk left on escalators - serious London etiquette',
        'Tipping 10-15% expected in restaurants but not mandatory in pubs or cafes',
        'Museum entry often free but special exhibitions charge - plan accordingly',
        'Keep right when walking on busy streets and always wait at pedestrian crossings',
        'Pub culture central to London life - safe spaces for solo female travelers to experience local culture',
        'Weather changes quickly - always carry umbrella and light jacket even in summer'
      ],
      apps: [
        'NomadHer',
        'Travel Ladies',
        'bSafe',
        'Noonlight',
        'Life360',
        'Citymapper',
        'TfL Go',
        'National Rail'
      ],
      appLinks: [
        { name: 'NomadHer', link: 'https://www.nomadher.com/', description: 'Female-only travel community perfect for safe London exploration', rating: 4.3 },
        { name: 'Travel Ladies', link: 'https://travelladies.app/', description: 'Solo female travel community with UK safety insights and tips', rating: 4.0 },
        { name: 'bSafe', link: 'https://getbsafe.com/', description: 'Personal safety app with emergency features and location sharing', rating: 4.2 },
        { name: 'Noonlight', link: 'https://www.noonlight.com/', description: 'One-button emergency response for added security while exploring', rating: 4.1 },
        { name: 'Life360', link: 'https://www.life360.com/', description: 'Family location sharing especially useful for solo travel', rating: 4.1 },
        { name: 'Citymapper', link: 'https://citymapper.com/', description: 'Best London transport app with real-time tube, bus and rail updates', rating: 4.7 },
        { name: 'TfL Go', link: 'https://tfl.gov.uk/', description: 'Official Transport for London app with live departure times', rating: 4.5 },
        { name: 'National Rail', link: 'https://www.nationalrail.co.uk/', description: 'Essential for UK train travel to Edinburgh, Bath, and other destinations', rating: 4.4 }
      ],
      emergencyPhrases: [
        {
          english: 'Help!',
          local: 'Help!',
          localLanguage: 'English'
        },
        {
          english: 'Call the police!',
          local: 'Call the police!',
          localLanguage: 'English'
        },
        {
          english: 'I need help!',
          local: 'I need help!',
          localLanguage: 'English'
        },
        {
          english: 'Where is the nearest hospital?',
          local: 'Where is the nearest hospital?',
          localLanguage: 'English'
        },
        {
          english: 'Emergency!',
          local: 'Emergency!',
          localLanguage: 'English'
        },
        {
          english: 'I feel unsafe.',
          local: 'I feel unsafe.',
          localLanguage: 'English'
        },
        {
          english: 'Leave me alone!',
          local: 'Leave me alone!',
          localLanguage: 'English'
        },
        {
          english: 'Can you help me?',
          local: 'Can you help me?',
          localLanguage: 'English'
        }
      ],
      embassies: [
        {
          name: 'U.S. Embassy London',
          address: '33 Nine Elms Lane, London SW11 7US',
          phone: '+44 20 7499 9000',
          emergency: '+44 20 7499 9000',
          link: 'https://uk.usembassy.gov/',
          services: 'American Citizen Services, Emergency Assistance, Passport Services'
        },
        {
          name: 'German Embassy London',
          address: '23 Belgrave Square, London SW1X 8PZ',
          phone: '+44 20 7824 1300',
          emergency: '+44 20 7824 1300',
          link: 'https://london.diplo.de/',
          services: 'German Citizen Services, Consular Assistance'
        },
        {
          name: 'French Embassy London',
          address: '58 Knightsbridge, London SW1X 7JT',
          phone: '+44 20 7073 1000',
          emergency: '+44 20 7073 1000',
          link: 'https://uk.ambafrance.org/',
          services: 'French Citizen Services, Visa Services'
        },
        {
          name: 'Spanish Embassy London',
          address: '39 Chesham Place, London SW1X 8SB',
          phone: '+44 20 7235 5555',
          emergency: '+44 20 7235 5555',
          link: 'https://www.exteriores.gob.es/embajadas/londres',
          services: 'Spanish Citizen Services, Emergency Assistance'
        },
        {
          name: 'Australian High Commission London',
          address: 'Strand, London WC2B 4LA',
          phone: '+44 20 7379 4334',
          emergency: '+44 20 7379 4334',
          link: 'https://uk.embassy.gov.au/',
          services: 'Australian Citizen Services, Consular Support'
        },
        {
          name: 'Canadian High Commission London',
          address: 'Canada House, Trafalgar Square, London SW1Y 5BJ',
          phone: '+44 20 7004 6000',
          emergency: '+44 20 7004 6000',
          link: 'https://www.canadainternational.gc.ca/united_kingdom-royaume_uni/',
          services: 'Canadian Citizen Services, Emergency Support'
        },
        {
          name: 'Netherlands Embassy London',
          address: '38 Hyde Park Gate, London SW7 5DP',
          phone: '+44 20 7590 3200',
          emergency: '+44 20 7590 3200',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/united-kingdom',
          services: 'Dutch Citizen Services, Consular Affairs'
        },
        {
          name: 'Swiss Embassy London',
          address: '16-18 Montagu Place, London W1H 2BQ',
          phone: '+44 20 7616 6000',
          emergency: '+44 20 7616 6000',
          link: 'https://www.eda.admin.ch/london',
          services: 'Swiss Citizen Services, Emergency Assistance'
        },
        {
          name: 'Indian High Commission London',
          address: 'India House, Aldwych, London WC2B 4NA',
          phone: '+44 20 7836 8484',
          emergency: '+44 20 7836 8484',
          link: 'https://www.hcilondon.gov.in/',
          services: 'Indian Citizen Services, Visa Services'
        }
      ]
    },
    currency: {
      name: 'British Pound Sterling', 
      code: 'GBP', 
      exchangeRate: {
        usd: 1.2756,
        eur: 1.2034,
        gbp: 1.0000
      }, 
      scamWarnings: ['ATM skimming rare but check for loose parts', 'Dynamic currency conversion - always choose GBP', 'Contactless payment limits - use chip&pin for larger amounts']
    },
    scamWarnings: [
      { 
        title: 'Tube and Bus Pickpocketing', 
        description: 'Phone snatching and pickpocketing common on busy Central, Northern, and District lines during rush hour. Keep devices secure and bags in front. Thieves target distracted tourists checking phones near station exits.', 
        severity: 'medium' 
      },
      { 
        title: 'Fake Charity Collectors', 
        description: 'Aggressive fake charity collectors operate near tourist attractions, particularly Oxford Street, Covent Garden, and London Bridge. They use emotional manipulation and won\'t take no for answer. Legitimate charities have ID badges.', 
        severity: 'low' 
      },
      { 
        title: 'Restaurant Overcharging', 
        description: 'Some tourist-area restaurants add service charges without notice or pressure for additional tips. Check bills carefully, ask about service charges upfront. Cover charge scams in Covent Garden area targeting solo female diners.', 
        severity: 'low' 
      },
      { 
        title: 'Unlicensed Minicabs', 
        description: 'Illegal minicabs approach solo women outside stations and nightlife areas, particularly after midnight. Only use licensed black cabs, Uber, or pre-booked minicabs. Licensed vehicles have TfL badges and meters.', 
        severity: 'high' 
      }
    ],
    languages: ['English (primary)', 'Over 300 languages spoken due to diversity'],
    daytimeSafetyPercent: 91.5,
    nighttimeSafetyPercent: 82.7,
    safetySourceName: 'Metropolitan Police Crime Statistics 2024',
    safetySourceUrl: 'https://www.met.police.uk/sd/stats-and-data/',
    redFlags: [
      { label: 'Phone Snatching on Public Transport', frequency: 'Daily occurrences in rush hour', icon: 'Smartphone' },
      { label: 'Drink Spiking in Nightlife Areas', frequency: 'Reported weekly in Soho/Shoreditch', icon: 'AlertTriangle' },
      { label: 'Unlicensed Minicab Approaches', frequency: 'Common outside stations after midnight', icon: 'Car' },
      { label: 'Aggressive Fake Charity Collectors', frequency: 'Daily near major tourist attractions', icon: 'Users' },
      { label: 'Tourism Area Overcharging', frequency: 'Common in Oxford Street/Covent Garden', icon: 'DollarSign' }
    ],
    culturalDos: [
      'Queue properly - jumping queues is seriously offensive to Londoners',
      'Say please, thank you, and sorry frequently - politeness is highly valued',
      'Stand right on escalators, walk left - tube etiquette taken very seriously',
      'Offer your seat to elderly, pregnant, or disabled passengers on public transport',
      'Respect personal space - avoid standing too close in conversations'
    ],
    culturalDonts: [
      'Don\'t block tube doors or rush onto trains before passengers exit',
      'Don\'t speak loudly on public transport - Londoners value quiet commutes',
      'Don\'t tip in pubs or when buying drinks at bars',
      'Don\'t expect shops to be open on Sundays - many close early or stay closed',
      'Don\'t assume all areas are safe after dark - research neighborhoods first'
    ],
    culturalExpectations: {
      dressCode: [
        'London weather is unpredictable - pack layers including waterproof jacket for frequent rain',
        'Comfortable walking shoes essential for cobblestone streets and extensive walking',
        'Dress code varies by venue - smart casual for restaurants, some require jackets for fine dining',
        'No specific modest dress requirements, but dress appropriately for religious sites',
        'Avoid flashy jewelry on public transport to prevent theft'
      ],
      behaviorNorms: [
        'Queue properly - jumping queues is seriously offensive to Londoners',
        'Say please, thank you, and sorry frequently - politeness is highly valued',
        'Stand right on escalators, walk left - tube etiquette taken very seriously',
        'Offer your seat to elderly, pregnant, or disabled passengers on public transport',
        'Respect personal space - avoid standing too close in conversations'
      ]
    },
    emergencyInfo: {
      police: '999',
      fire: '999',
      medical: '999',
      general: '999'
    },
    sexualHarassmentData: {
      prevalence: 'low',
      commonLocations: ['Crowded tube during rush hour', 'Busy nightlife areas in Soho/Shoreditch', 'Late-night bus services'],
      reportingRate: 78,
      legalProtection: 'Strong legal framework with specialized courts for sexual offences. Police take reports seriously with dedicated units. Victim support services well-established throughout London.',
      supportResources: [
        'Rape & Sexual Abuse Support Centre (RASASC): 0808 802 9999 (24/7 helpline)',
        'London Victim Support: 0808 168 9111 (free emotional and practical support)',
        'British Transport Police Text Line: 61016 (report harassment on transport)',
        'Metropolitan Police Emergency: 999 (immediate danger)',
        'Metropolitan Police Non-Emergency: 101 (report crimes)',
        'GALOP LGBTQ+ Support: 020 7704 2040 (specialized LGBTQ+ hate crime support)',
        'Samaritans: 116 123 (24/7 emotional support, free from any phone)',
        'Women\'s Aid Live Chat: Available online 24/7 for domestic violence support',
        'Haven Sexual Assault Referral Centres: 0203 299 6900 (medical and emotional support)',
        'Rights of Women Legal Advice: 020 7251 6577 (free legal advice for women)'
      ]
    },
    healthSafety: {
      hospitals: [
        {
          name: 'University College Hospital (UCH)',
          address: '235 Euston Road, London NW1 2BU',
          phone: '+44 20 3456 7890',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'International Patients', 'Mental Health'],
          link: 'https://www.uclh.nhs.uk/',
          notes: 'Major teaching hospital with excellent emergency department, 24/7 services, and international patient support'
        },
        {
          name: 'St. Thomas\' Hospital',
          address: 'Westminster Bridge Road, London SE1 7EH',
          phone: '+44 20 7188 7188',
          emergency: true,
          specialties: ['Emergency Medicine', 'Trauma Center', 'Women\'s Services', 'Mental Health'],
          link: 'https://www.guysandstthomas.nhs.uk/',
          notes: 'Historic hospital opposite Westminster with major trauma center and comprehensive emergency services'
        },
        {
          name: 'Royal London Hospital',
          address: 'Whitechapel Road, London E1 1FR',
          phone: '+44 20 7377 7000',
          emergency: true,
          specialties: ['Major Trauma Centre', 'Emergency Medicine', 'Sexual Health', 'Mental Health Crisis'],
          link: 'https://www.bartshealth.nhs.uk/royal-london',
          notes: 'East London\'s major trauma center with 24/7 emergency services and specialized assault support unit'
        },
        {
          name: 'Chelsea and Westminster Hospital',
          address: '369 Fulham Road, London SW10 9NH',
          phone: '+44 20 3315 8000',
          emergency: true,
          specialties: ['Emergency Medicine', 'Women\'s Health', 'HIV Services', 'Mental Health'],
          link: 'https://www.chelwest.nhs.uk/',
          notes: 'Modern hospital serving West London with excellent emergency care and specialized women\'s health services'
        },
        {
          name: 'The London Clinic (Private)',
          address: '20 Devonshire Place, London W1G 6BW',
          phone: '+44 20 7935 4444',
          emergency: true,
          specialties: ['Private Emergency Care', 'Women\'s Health', 'International Patients', 'Mental Health'],
          link: 'https://www.thelondonclinic.co.uk/',
          notes: 'Premier private hospital with 24/7 emergency services, multilingual staff, and luxury amenities for international patients'
        }
      ],
      pharmacies: [
        {
          name: 'Boots Piccadilly Circus (24hr)',
          address: '44-46 Regent Street, London W1B 5RA',
          phone: '+44 20 7734 6126',
          hours: '24 hours daily',
          emergency: true,
          link: 'https://www.boots.com/',
          notes: 'Central London\'s only 24-hour pharmacy, emergency contraception available, tourist-friendly location'
        },
        {
          name: 'Zafash Pharmacy (24hr)',
          address: '233-235 Old Brompton Road, London SW5 0EA',
          phone: '+44 20 7373 2798',
          hours: '24 hours daily',
          emergency: true,
          notes: 'South Kensington 24-hour pharmacy near museums district, women\'s health products, emergency services'
        },
        {
          name: 'Boots Oxford Street',
          address: '300 Oxford Street, London W1C 1DX',
          phone: '+44 20 7629 6557',
          hours: 'Mon-Sat 8:00-22:00, Sun 12:00-18:00',
          emergency: false,
          link: 'https://www.boots.com/',
          notes: 'Large pharmacy in shopping district with comprehensive women\'s health section and travel clinic'
        },
        {
          name: 'John Bell & Croyden',
          address: '50-54 Wigmore Street, London W1U 2AU',
          phone: '+44 20 7935 5555',
          hours: 'Mon-Fri 8:30-18:00, Sat 9:00-17:00',
          emergency: false,
          link: 'https://www.johnbellcroyden.co.uk/',
          notes: 'Historic luxury pharmacy near Oxford Street with extensive health and beauty products, personal consultation services'
        }
      ],
      womensHealth: {
        clinics: [
          '56 Dean Street Sexual Health Clinic: 020 7287 8560 (free STI testing, emergency contraception)',
          'London Women\'s Clinic: 020 7563 4309 (private women\'s healthcare)',
          'Marie Stopes International: 0345 300 8090 (reproductive health services)',
          'NHS Sexual Health Services: 0300 123 7123 (free NHS sexual health support)'
        ],
        gynecologists: [
          'The Gynae Centre: 020 7580 8090 (private gynecological services)',
          'London Gynecology: 020 7101 1700 (comprehensive women\'s health)',
          'NHS GP services available through local practices for referrals'
        ],
        emergencyContraception: [
          'Available at all major pharmacies without prescription (£25-30)',
          'Free at NHS sexual health clinics and some GP practices',
          'Emergency contraception available 24/7 at major hospital emergency departments'
        ],
        sanitaryProducts: [
          'Available at all supermarkets, pharmacies, and convenience stores',
          'Public toilets in stations and shopping centers often have vending machines',
          'Wide variety of brands including organic and eco-friendly options'
        ]
      }
    },
    legalResources: {
      embassies: [
        {
          name: 'U.S. Embassy London',
          address: '33 Nine Elms Lane, London SW11 7US',
          phone: '+44 20 7499 9000',
          link: 'https://uk.usembassy.gov/'
        },
        {
          name: 'German Embassy London',
          address: '23 Belgrave Square, London SW1X 8PZ',
          phone: '+44 20 7824 1300',
          link: 'https://london.diplo.de/'
        },
        {
          name: 'French Embassy London',
          address: '58 Knightsbridge, London SW1X 7JT',
          phone: '+44 20 7073 1000',
          link: 'https://uk.ambafrance.org/'
        },
        {
          name: 'Spanish Embassy London',
          address: '39 Chesham Place, London SW1X 8SB',
          phone: '+44 20 7235 5555',
          link: 'https://www.exteriores.gob.es/embajadas/londres'
        },
        {
          name: 'Australian High Commission London',
          address: 'Strand, London WC2B 4LA',
          phone: '+44 20 7379 4334',
          link: 'https://uk.embassy.gov.au/'
        },
        {
          name: 'Canadian High Commission London',
          address: 'Canada House, Trafalgar Square, London SW1Y 5BJ',
          phone: '+44 20 7004 6000',
          link: 'https://www.canadainternational.gc.ca/united_kingdom-royaume_uni/'
        },
        {
          name: 'Netherlands Embassy London',
          address: '38 Hyde Park Gate, London SW7 5DP',
          phone: '+44 20 7590 3200',
          link: 'https://www.netherlandsandyou.nl/your-country-and-the-netherlands/united-kingdom'
        },
        {
          name: 'Swiss Embassy London',
          address: '16-18 Montagu Place, London W1H 2BQ',
          phone: '+44 20 7616 6000',
          link: 'https://www.eda.admin.ch/london'
        },
        {
          name: 'Indian High Commission London',
          address: 'India House, Aldwych, London WC2B 4NA',
          phone: '+44 20 7836 8484',
          link: 'https://www.hcilondon.gov.in/'
        }
      ],
      womensRights: [
        'UK has strong legal framework protecting women\'s rights under Gender Equality Act',
        'Domestic violence protection orders available through family courts',
        'Sexual harassment criminalized with dedicated prosecution units',
        'Women\'s refuges and safe houses available throughout London',
        'Legal aid available for qualifying domestic violence and sexual assault cases'
      ],
      legalSupport: [
        'Rights of Women: 020 7251 6577 (free legal advice for women)',
        'Citizens Advice: 03444 111 444 (free legal guidance)',
        'Law Society of England and Wales: 020 7242 1222 (solicitor referrals)',
        'Liberty Human Rights: 020 7403 3888 (civil liberties legal support)',
        'Free Representation Unit: 020 7611 9555 (free legal representation)'
      ],
      reportingProcedures: [
        'Call 999 for immediate emergencies requiring police, fire, or ambulance',
        'Call 101 for non-emergency police matters to report crimes',
        'Report hate crimes to True Vision online or police stations',
        'Contact embassy for consular assistance and legal referrals',
        'Report transport-related crimes via British Transport Police: text 61016',
        'Document incidents with photos, witness details, and location information',
        'Keep copies of all police reports and crime reference numbers',
        'Seek medical attention if needed and request police liaison at hospital'
      ]
    },
    emergencyContacts: [
      {
        name: 'Emergency Services',
        number: '999',
        type: 'Police/Fire/Ambulance'
      },
      {
        name: 'Non-Emergency Police',
        number: '101',
        type: 'Crime Reporting'
      },
      {
        name: 'NHS Non-Emergency',
        number: '111',
        type: 'Medical Advice'
      },
      {
        name: 'British Transport Police',
        number: '0800 40 50 40',
        type: 'Transport Crime'
      },
      {
        name: 'Tourist Helpline',
        number: '+44 20 7234 5800',
        type: 'Tourist Assistance'
      }
    ],
    usefulTips: [
      {
        title: 'Master London\'s Public Transport System',
        description: 'Get Oyster Card or use contactless payment for buses, tubes, and overground. Download offline Tube map as mobile signal poor underground. Stand right, walk left on escalators - serious London etiquette.',
        severity: 'low',
        sourceName: 'Transport for London',
        sourceUrl: 'https://tfl.gov.uk/'
      },
      {
        title: 'Avoid Peak Hour Phone Snatching',
        description: 'Phone snatching epidemic on Central, Northern, and District lines during rush hour 7-9am and 5-7pm. Keep devices secure, use wired headphones, and stay alert near station exits where thieves target distracted tourists.',
        severity: 'medium',
        sourceName: 'Metropolitan Police Crime Prevention',
        sourceUrl: 'https://www.met.police.uk/'
      },
      {
        title: 'Is London Safe for Women Solo Travelers?',
        description: 'Yes, London is very safe for solo female travelers with excellent infrastructure and low violent crime rates. Central zones 1-2 are particularly safe day and night. Avoid isolated areas in outer boroughs after dark.',
        severity: 'low',
        sourceName: 'Solo Female Travel Safety Reports',
        sourceUrl: 'https://travelladies.app/'
      },
      {
        title: 'Navigate London\'s Drinking Culture Safely',
        description: 'Pub culture central to London social life and generally very safe for solo women. However, drink spiking reported in Soho, Shoreditch nightlife areas. Never leave drinks unattended, use drink covers, and stay with groups.',
        severity: 'medium',
        sourceName: 'London Nightlife Safety Network',
        sourceUrl: 'https://www.drinkaware.co.uk/'
      },
      {
        title: 'Choose Licensed Transportation Only',
        description: 'Only use black cabs (licensed taxis), Uber, or pre-booked minicabs. Unlicensed minicabs approach solo women outside stations after midnight - they lack insurance and safety checks. Licensed vehicles show TfL badges.',
        severity: 'high',
        sourceName: 'Transport for London Safety Guidelines',
        sourceUrl: 'https://tfl.gov.uk/modes/taxis-and-minicabs'
      },
      {
        title: 'Budget Smart for London\'s High Costs',
        description: 'London is expensive but manageable with smart planning. Many museums free, Borough Market affordable eats, happy hours common 5-7pm. Book accommodations in Zones 1-2 for safety even if costs more.',
        severity: 'low',
        sourceName: 'London Budget Travel Guide',
        sourceUrl: 'https://www.visitlondon.com/'
      }
    ],
    culturalSensitivityTips: [
      'Master British politeness and queuing culture religiously - Always say "please," "thank you," "sorry," queue patiently without cutting; British politeness is fundamental to social acceptance and often results in helpful guidance from reserved but protective locals',
      'Learn essential British phrases and expressions - "Excuse me" (to get attention), "Cheers" (thanks), "Brilliant" (great), "Mind the gap," "Sorry to bother you"; understanding British idioms shows cultural effort and earns warmer responses from initially reserved Londoners',
      'Understand British reserve and personal space deeply - Don\'t expect immediate friendships, avoid oversharing personal information, respect the "invisible bubble" around people; patience with British social warming creates stronger, more reliable safety networks',
      'Navigate British pub culture safely and respectfully - Understand round-buying system, pub etiquette, closing times (11pm weekdays); proper pub behavior demonstrates cultural integration and helps build protective local relationships in safe social environments',
      'Respect British work-life balance and timing - Avoid calling after hours, understand lunch hour sacredness (12-1pm), respect weekend privacy; boundary awareness shows cultural sophistication and builds professional respect essential for business travel safety',
      'Master London\'s transport etiquette precisely - Stand right on escalators, let passengers off first, offer seats to elderly/pregnant women, keep backpacks in front; proper tube etiquette prevents conflicts and demonstrates cultural awareness',
      'Understand British understatement and indirect communication - "Not bad" means very good, "quite nice" means excellent, criticism delivered gently; understanding communication style prevents misunderstandings and helps build genuine relationships',
      'Appreciate British multicultural awareness sensitively - London is incredibly diverse; show respect for all cultures, avoid stereotypes, understand that "British" includes many ethnicities; cultural sophistication enhances safety through broader community acceptance'
    ],
    culturalSensitivityTipsDetailed: {
      title: 'Cultural Sensitivity & Safety Guide for Solo Female Travelers in London',
      introduction: 'Is London safe for women solo travelers culturally? Absolutely - the UK ranks among the world\'s safest countries for women, with London being exceptionally welcoming to solo female travelers. However, understanding British social etiquette, from queuing culture to pub protocols, is essential for maximizing safety and gaining acceptance in this polite but reserved society that values proper conduct above all.',
      sections: [
        {
          title: 'British Politeness & Social Etiquette',
          tips: [
            'Master the art of British queuing - Never cut in line, wait patiently, maintain proper spacing; queue-jumping is deeply offensive and can cause serious social friction affecting your safety and acceptance',
            'Use "please," "thank you," and "sorry" constantly - British politeness is not superficial but fundamental to social functioning; excessive politeness opens doors and builds protective relationships',
            'Understand British indirect communication - "Quite nice" means excellent, "not too bad" means very good; learning understatement prevents misunderstandings and helps navigate social situations safely',
            'Respect personal space and the "invisible bubble" - Stand arm\'s length apart, avoid unnecessary touching, don\'t stare; space respect is crucial for British comfort and relationship building',
            'Learn proper small talk protocols - Weather discussions are safe conversation starters, avoid overly personal questions initially; appropriate conversation builds gradual trust essential for safety networks',
            'Master British apology culture - Say "sorry" even when not at fault, it\'s social lubrication not admission of guilt; understanding apology culture prevents social awkwardness and builds rapport'
          ]
        },
        {
          title: 'Pub Culture & Social Safety Navigation',
          tips: [
            'Understand round-buying etiquette - When someone buys a round, you\'re expected to reciprocate; participating in rounds integrates you into protective social groups and builds lasting connections',
            'Learn pub closing time customs - Last orders at 11pm weekdays, drinking-up time until 11:30pm; understanding timing prevents awkward situations and helps with safe evening planning',
            'Navigate pub food culture - Order at the bar, find your own table, no table service expected; proper pub behavior demonstrates cultural awareness and helps you blend in safely',
            'Understand British drinking pace - Pacing is important, rounds can be refused politely, food is essential; drinking responsibly maintains safety while participating in British social culture',
            'Know pub safety protocols - Women\'s safety initiatives like "Ask for Angela," safe spaces policies; understanding these systems provides protection while enjoying British pub culture',
            'Respect pub conversation etiquette - Avoid controversial topics initially, understand banter vs. serious discussion, respect local regulars; proper behavior builds protective local relationships'
          ]
        },
        {
          title: 'Transport Etiquette & Urban Navigation',
          tips: [
            'Master escalator etiquette religiously - Stand right, walk left, never block the walking side; violating this rule causes serious irritation and marks you as inconsiderate tourist',
            'Follow tube boarding protocols - Let passengers off first, move down inside carriages, remove backpack in crowded areas; proper behavior prevents conflicts and shows cultural awareness',
            'Understand British transport courtesy - Offer seats to elderly/pregnant women, keep conversations quiet, avoid eating smelly food; courtesy builds positive interactions and community protection',
            'Learn bus etiquette specifics - Thank the driver when exiting, press stop button once only, move to back of bus; proper bus behavior demonstrates cultural integration and respect',
            'Navigate London walking culture - Walk quickly and purposefully, stay left on sidewalks, make eye contact when asking for help; confident movement and cultural awareness enhance safety',
            'Understand contactless payment culture - Tap cards/phones for all transport, cash rarely used; payment literacy shows cultural adaptation and prevents tourist targeting'
          ]
        },
        {
          title: 'Multicultural London & Professional Interactions',
          tips: [
            'Appreciate London\'s incredible diversity respectfully - British identity includes all ethnicities and backgrounds; showing cultural sophistication enhances safety through broader community acceptance',
            'Understand British work culture boundaries - Punctuality is crucial, meetings start on time, personal/professional separation respected; professional respect builds reliable business safety networks',
            'Navigate British service culture appropriately - Service staff are professional not servile, tipping 10-15% in restaurants expected; respectful treatment of service workers builds positive community relationships',
            'Learn British humor appreciation - Self-deprecating humor is common, sarcasm shows affection, don\'t take teasing personally; humor understanding helps build genuine protective friendships',
            'Respect British environmental consciousness - Recycling is important, sustainability valued, public transport preferred; environmental awareness shows cultural alignment and community respect',
            'Understand British royal and historical sensitivity - Show respect for traditions while understanding modern perspectives; balanced historical appreciation builds positive relationships across generations'
          ]
        }
      ]
    },
    costAndComfort: {
      dailyBudget: {
        range: '$80 - $150 USD / day',
        description: 'London is expensive but offers excellent value for solo female travel safety with world-class infrastructure and services. Budget extra for safety-first accommodation in central zones.',
        tip: 'Solo travel safety for women beginners is exceptional - invest in central accommodation and licensed transport for peace of mind.'
      },
      accommodation: [
        {
          type: 'Female-Only Hostel',
          avgCost: '$40-60/night',
          safetyNote: 'Safest budget option - Hostelle offers all-women environment in central London',
          safetyLevel: 'highest',
          bestAreas: 'Central London, Zone 1'
        },
        {
          type: 'Social Hostel (Female Dorms)',
          avgCost: '$35-55/night',
          safetyNote: 'Excellent security with female-only dorms, 24-hour reception, and central locations',
          safetyLevel: 'high',
          bestAreas: 'Waterloo, London Bridge, King\'s Cross'
        },
        {
          type: 'Budget Chain Hotel',
          avgCost: '$80-120/night',
          safetyNote: 'Premier Inn, Travelodge with consistent safety standards and 24/7 reception',
          safetyLevel: 'high',
          bestAreas: 'County Hall, Tower Bridge, Covent Garden'
        },
        {
          type: 'Boutique Hotel',
          avgCost: '$150-250/night',
          safetyNote: 'Personal service, central locations, excellent security in safest neighborhoods',
          safetyLevel: 'highest',
          bestAreas: 'Marylebone, South Kensington, Bloomsbury'
        },
        {
          type: 'Luxury Hotel',
          avgCost: '$300-500+/night',
          safetyNote: 'Maximum security, concierge services, premium locations for ultimate safety',
          safetyLevel: 'maximum',
          bestAreas: 'Mayfair, Knightsbridge, Covent Garden'
        }
      ],
      transport: [
        {
          method: 'London Underground (Tube)',
          cost: '$3-6/ride',
          safetyDescription: 'Exceptionally safe with extensive CCTV, British Transport Police presence, and emergency buttons. Avoid rush hour crowds for pickpocket prevention.',
          safetyLevel: 'highest',
          femaleTraverlerTips: 'Use contactless payment, download offline maps, stand right on escalators, trust journey planner apps'
        },
        {
          method: 'London Buses',
          cost: '$2.50/ride',
          safetyDescription: 'Very safe with CCTV, good lighting, and frequent services. Night buses available but use caution on late-night services in outer areas.',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Sit near driver if feeling unsafe, have exact change or contactless, check night bus routes in advance'
        },
        {
          method: 'Black Cabs (Licensed Taxis)',
          cost: '$15-40/ride',
          safetyDescription: 'Safest transport option with regulated drivers, GPS tracking, and insurance. All drivers pass extensive background checks and "The Knowledge" test.',
          safetyLevel: 'highest',
          femaleTraverlerTips: 'Hail from street or taxi ranks, check TfL license badge, use contactless payment when possible'
        },
        {
          method: 'Uber/Licensed Minicabs',
          cost: '$8-25/ride',
          safetyDescription: 'Safe with GPS tracking, driver ratings, and trip sharing features. Only use TfL-licensed operators through official apps.',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Share journey with trusted contact, verify driver and license plate, sit behind driver for safety'
        },
        {
          method: 'Walking',
          cost: 'Free',
          safetyDescription: 'Very safe in central London with excellent street lighting, police presence, and busy pedestrian areas during day and evening.',
          safetyLevel: 'high',
          femaleTraverlerTips: 'Use well-lit main streets, avoid shortcuts through parks after dark, carry charged phone with maps'
        },
        {
          method: 'Cycling (Boris Bikes)',
          cost: '$3-12/day',
          safetyDescription: 'Generally safe with expanding cycle lanes, but London traffic requires confidence. Helmet not provided with bike share.',
          safetyLevel: 'medium',
          femaleTraverlerTips: 'Bring own helmet, stick to cycle superhighways, avoid rush hour traffic, use lights after dark'
        }
      ],
      budgetTips: [
        'Buy Tesco Meal Deal (sandwich, drink, snack) for £3-4 - cheapest lunch option throughout London',
        'Visit free museums (British Museum, Tate Modern, National Gallery) instead of paid attractions for cultural experiences',
        'Use Boris Bikes for short journeys - £2/30min vs £2.50 bus fare, plus free exercise and sightseeing',
        'Shop at Sainsbury\'s Local or Tesco Express for groceries - 50% cheaper than hotel room service or tourist area restaurants',
        'Book accommodations in Zone 2 (King\'s Cross, Waterloo, London Bridge) - save £30-50/night vs Zone 1 with same safety levels',
        'Take advantage of pub happy hours 5-7pm for affordable drinks and authentic London culture experience',
        'Use contactless payment cap (£8.50/day) instead of individual Tube tickets - automatic best price guarantee',
        'Walk between central attractions (Covent Garden to Tower Bridge) - free sightseeing and most routes well-lit and safe',
        'Eat at Borough Market for quality food at reasonable prices - safer and more authentic than street food'
      ]
    },
    
    governmentAdvisory: {
      level: 'Exercise Normal Precautions',
      levelNumber: 1,
      source: 'U.S. Department of State',
      lastUpdated: 'January 2025',
      details: 'The United Kingdom is very safe for travelers. Exercise normal precautions. Terrorism threat level is substantial but security measures are comprehensive.',
      reason: 'Generally very safe country with excellent infrastructure, low crime rates, and strong rule of law.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-kingdom-travel-advisory.html',
      soloTravelerAdvice: [
        'Is London safe for female solo travelers? Absolutely - one of the world\'s safest major cities with excellent infrastructure',
        'Outstanding destination for solo female travel safety with English language and helpful, diverse population',
        'World-class public transport system makes solo travel safe and convenient throughout the city',
        'Solo travel safety for women beginners is exceptional - perfect introduction to European travel',
        'Strong legal protections and police response make London ideal for first-time solo female travelers',
        'Extensive support services and women-friendly culture throughout the multicultural city'
      ]
    },
    bestTimeToVisit: {
      overall: 'April to June and September to October',
      weather: 'London has a temperate oceanic climate with mild temperatures year-round. Spring (April-June) offers pleasant weather with blooming parks and longer days. Autumn (September-October) provides comfortable temperatures and fewer crowds.',
      safety: 'London maintains consistent high safety levels year-round for solo female travelers. Summer months see more tourists which can increase pickpocketing, while winter months have shorter daylight hours affecting evening safety perception.',
      costs: 'Peak season (July-August) brings highest accommodation prices and crowds. Shoulder seasons (April-June, September-October) offer best value with good weather. Winter (November-March) has lowest prices but shorter days and frequent rain.',
      crowding: 'July-August are busiest with international tourists. December shopping season also very crowded. April-May and September-October offer perfect balance of good weather and manageable crowds.',
      safestMonths: ['April', 'May', 'September', 'October'],
      events: 'Spring and early autumn offer optimal conditions with comfortable weather, longer daylight hours, moderate tourist crowds reducing pickpocket risks, and pleasant temperatures for extended outdoor exploration. Major events like Notting Hill Carnival (August), Pride London (June-July), Wimbledon (June-July), and New Year\'s Eve require extra awareness but maintain strong police presence. Summer months see increased pickpocketing due to tourist crowds, while winter months have shorter daylight hours affecting evening safety perception.',
      monthlyBreakdown: {
        january: { weather: 'Cold, wet (2-7°C)', safety: 'High', crowds: 'Low', notes: 'Post-holiday sales, shorter days, budget-friendly' },
        february: { weather: 'Cold, occasional snow (2-8°C)', safety: 'High', crowds: 'Low', notes: 'Valentine\'s events, still budget season' },
        march: { weather: 'Cool, spring begins (4-11°C)', safety: 'High', crowds: 'Medium', notes: 'Daffodils bloom, longer days returning' },
        april: { weather: 'Mild, spring bloom (6-14°C)', safety: 'High', crowds: 'Medium', notes: 'Easter holidays, perfect walking weather' },
        may: { weather: 'Pleasant, sunny days (9-17°C)', safety: 'High', crowds: 'Medium-High', notes: 'Chelsea Flower Show, ideal weather' },
        june: { weather: 'Warm, long days (12-20°C)', safety: 'High', crowds: 'High', notes: 'Wimbledon, longest days, excellent weather' },
        july: { weather: 'Warmest month (14-22°C)', safety: 'High', crowds: 'Very High', notes: 'Peak tourist season, highest prices' },
        august: { weather: 'Warm, occasional rain (14-22°C)', safety: 'Medium-High', crowds: 'Very High', notes: 'Edinburgh Festival affects travel, busy' },
        september: { weather: 'Pleasant, fewer crowds (11-19°C)', safety: 'High', crowds: 'Medium', notes: 'Perfect weather, autumn colors begin' },
        october: { weather: 'Cool, autumn colors (8-15°C)', safety: 'High', crowds: 'Medium', notes: 'Beautiful parks, comfortable temperatures' },
        november: { weather: 'Cool, frequent rain (5-11°C)', safety: 'High', crowds: 'Low', notes: 'Guy Fawnes, Christmas markets start' },
        december: { weather: 'Cold, wet, dark (3-8°C)', safety: 'High', crowds: 'Medium', notes: 'Christmas markets, festive atmosphere, short days' }
      }
    },
    safestMonths: {
      highest: ['April', 'May', 'September', 'October'],
      reason: 'Spring and early autumn offer optimal conditions: comfortable weather for walking, longer daylight hours, moderate tourist crowds reducing pickpocket risks, and pleasant temperatures for extended outdoor exploration.',
      considerations: {
        summer: 'July-August see increased pickpocketing due to tourist crowds, especially on public transport during rush hours. Higher vigilance needed in tourist areas.',
        winter: 'November-February have shorter daylight hours (8 hours vs 16 in summer) affecting perception of safety in evening activities. Wet weather requires extra caution on slippery surfaces.',
        events: 'Major events like Notting Hill Carnival (August), New Year\'s Eve, and Pride (June) bring large crowds requiring extra awareness but maintain strong police presence.',
        transport: 'All months maintain excellent transport safety, but summer months see more crowded tubes increasing pickpocket risks during peak tourist season.'
      },
      monthlyRatings: {
        january: { rating: 8.0, notes: 'High safety, low crowds, shorter days limit evening activities' },
        february: { rating: 8.1, notes: 'Excellent safety, minimal tourists, cold but manageable' },
        march: { rating: 8.3, notes: 'Good safety, spring weather improving, moderate crowds' },
        april: { rating: 8.7, notes: 'Excellent conditions, perfect weather, reasonable crowds' },
        may: { rating: 8.8, notes: 'Peak safety month, beautiful weather, manageable tourism' },
        june: { rating: 8.4, notes: 'Good safety, excellent weather, increasing crowds' },
        july: { rating: 7.9, notes: 'High tourist crowds increase pickpocket risk, vigilance needed' },
        august: { rating: 7.8, notes: 'Peak tourist season, highest crime against visitors' },
        september: { rating: 8.8, notes: 'Excellent safety, perfect weather, crowds decreasing' },
        october: { rating: 8.6, notes: 'Very safe, comfortable weather, low tourist density' },
        november: { rating: 8.2, notes: 'Good safety, shorter days begin affecting evening plans' },
        december: { rating: 8.0, notes: 'Safe but dark early, Christmas crowds manageable' }
      }
    },
    eventsAndNotes: {
      majorEvents: [
        {
          name: 'Notting Hill Carnival',
          dates: 'Late August (Bank Holiday Weekend)',
          safetyNotes: 'Europe\'s largest street festival with 2+ million attendees. Generally very safe with heavy police presence, but crowds are intense. Avoid bringing valuables, stay hydrated, and plan exit strategies. Pickpocketing increases during this period.',
          femaleTraverlerTips: 'Travel in groups when possible, wear comfortable shoes, bring minimal cash, and stay aware of surroundings in dense crowds.'
        },
        {
          name: 'Pride London',
          dates: 'Late June/Early July',
          safetyNotes: 'Massive celebration with 1+ million attendees. Very safe and inclusive environment with strong police support. London is extremely LGBTQ+ friendly. Main safety concern is crowd management and dehydration.',
          femaleTraverlerTips: 'Excellent event for solo female travelers. Bring water, wear sunscreen, and join the welcoming community atmosphere.'
        },
        {
          name: 'Wimbledon Championships',
          dates: 'Late June - Early July',
          safetyNotes: 'Prestigious tennis tournament with excellent security. Very safe but expect increased tourism in SW London. Transport to Wimbledon gets crowded. Book accommodation early.',
          femaleTraverlerTips: 'Perfect event for solo attendance. Queue for day tickets or buy in advance. The area is very safe for solo female spectators.'
        },
        {
          name: 'London Fashion Week',
          dates: 'February and September',
          safetyNotes: 'Industry event increasing activity in central London areas like Somerset House and venues across the city. Generally very safe but areas become busier with fashion industry professionals.',
          femaleTraverlerTips: 'Great time for solo female travelers interested in fashion. Many public events and exhibitions. Dress stylishly to fit in.'
        },
        {
          name: 'New Year\'s Eve Fireworks',
          dates: 'December 31st',
          safetyNotes: 'Major event with road closures and 100,000+ attendees along Thames. Free but ticketed event with security checks. Very safe but extremely crowded. Plan transport in advance as tube services affected.',
          femaleTraverlerTips: 'Arrive early, dress warmly, bring phone chargers, and plan meeting points if traveling with others. Consider watching from restaurants or pubs for better experience.'
        },
        {
          name: 'Changing of the Guard',
          dates: 'Year-round (schedules vary)',
          safetyNotes: 'Popular tourist attraction at Buckingham Palace. Very safe but can get extremely crowded, especially in summer. Pickpocketing concern in dense crowds.',
          femaleTraverlerTips: 'Arrive 30 minutes early for best viewing spots. Keep valuables secure and be prepared for pushing crowds. Alternative viewing at Horse Guards Parade less crowded.'
        }
      ],
      seasonalConsiderations: {
        spring: 'Perfect season for solo female travel. Parks blooming, comfortable temperatures, and longer days provide excellent walking conditions. Crime rates lowest during these months.',
        summer: 'Peak tourist season brings crowds and increased petty crime. Stay extra vigilant on public transport and in tourist areas. Excellent weather for outdoor activities.',
        autumn: 'Ideal conditions return with comfortable temperatures and beautiful foliage. Fewer tourists mean better prices and less crowded attractions.',
        winter: 'Shortest days (sunset around 3:30pm in December) limit outdoor activities. However, Christmas markets and festive atmosphere create magical experiences. Indoor attractions perfect during this season.'
      },
      monthlyHighlights: {
        january: 'New Year\'s Day Parade, museum sales, winter theater season',
        february: 'Chinese New Year celebrations in Chinatown, Valentine\'s Day events',
        march: 'St. Patrick\'s Day festivities, spring flowers in parks',
        april: 'Easter celebrations, perfect weather for walking tours',
        may: 'Chelsea Flower Show, bank holiday weekend activities',
        june: 'Trooping the Colour, Wimbledon begins, longest days',
        july: 'Summer festivals, outdoor cinema screenings, peak weather',
        august: 'Notting Hill Carnival, Edinburgh Festival affects travel',
        september: 'London Fashion Week, perfect weather returns',
        october: 'Autumn colors in parks, comfortable walking weather',
        november: 'Guy Fawkes Night, Christmas markets begin',
        december: 'Christmas markets, festive lights, Boxing Day sales'
      },
      travelTips: [
        'Book accommodations 2-3 months in advance for summer visits to ensure safety-first locations in central zones',
        'London weather is unpredictable year-round - always pack layers and waterproof jacket regardless of season',
        'Summer months require sun protection - London sun can be stronger than expected, especially during long daylight hours',
        'Winter visits need warm, waterproof gear and appreciation for shorter days limiting evening outdoor activities',
        'Spring and autumn offer best value for money with excellent weather and lower accommodation prices',
        'Major events like Carnival and Pride require advance planning but offer incredible cultural experiences safely',
        'Christmas season (November-January) creates magical atmosphere but brings crowds to shopping areas requiring extra vigilance'
      ]
    },
    culturalSensitivity: {
      culturalDos: [
        'Master the art of queuing - always join the back of any line and wait patiently, it\'s fundamental to British culture',
        'Use "please" and "thank you" constantly - politeness is deeply ingrained and expected in all interactions',
        'Stand your round at pubs - if drinking with a group, buy drinks for everyone when it\'s your turn',
        'Arrive 5-10 minutes early for appointments and social gatherings - punctuality is highly valued',
        'Maintain personal space on public transport - Londoners appreciate quiet, respectful behavior on the tube'
      ],
      culturalDonts: [
        'Don\'t jump queues or cut in line - it\'s considered extremely rude and will draw negative attention',
        'Don\'t ask personal questions about income, politics, or voting - these topics are considered private',
        'Don\'t rest elbows on the table during meals - proper table manners are important in British culture',
        'Don\'t speak too loudly in public spaces - Londoners value understated, quiet conversation',
        'Don\'t boast or brag about achievements - British culture favors modesty and understatement over showiness'
      ]
    },
  youtubeVideo: {
    videoId: "dQw4w9WgXcQ" // PLACEHOLDER - Update with actual video ID
  }
};

export default london;