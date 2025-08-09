import { Destination } from './types';

const istanbul: Destination = {
  id: 'istanbul-turkey',
  city: 'Istanbul',
  country: 'Turkey',
  continent: 'Asia',
  description: 'A transcontinental city bridging Europe and Asia, offering rich history and culture, though solo female travelers should be aware of cultural norms and take extra precautions.',
  safetyScore: 3.7,
  scores: {
    overall: 3.7,
    nightSafety: 3.3,
    publicTransport: 3.8,
    walkingAlone: 3.5,
    emergencyServices: 4.1
  },
  genderSafetyScore: 3.4,
  lgbtqSafetyScore: 2.8,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Predominantly Muslim country with conservative values',
    'Dress modestly, especially when visiting mosques',
    'Ramadan observance affects restaurant hours and social norms',
    'Turkish hospitality is warm but can be overwhelming'
  ],
  safetyTips: [
    'Dress conservatively to avoid unwanted attention',
    'Be cautious of overly friendly strangers, especially men',
    'Avoid walking alone in less touristy areas after dark',
    'Be aware of common scams targeting tourists',
    'Keep valuables secure in crowded areas and public transport'
  ],
  emergencyContacts: {
    police: '155',
    fire: '110',
    ambulance: '112',
    touristHelpline: '+90 212 518 1802'
  },
  healthcareInfo: {
    qualityOfCare: 4.2,
    hospitalAvailability: 4.3,
    pharmacyAvailability: 4.4,
    emergencyResponseTime: 4.0
  },
  transportation: {
    publicTransportQuality: 3.8,
    publicTransportSafety: 3.6,
    walkability: 3.9,
    cyclingFriendliness: 3.2,
    rideShareAvailability: 4.1
  },
  accommodations: {
    hotelSafety: 4.0,
    hostelSafety: 3.7,
    airbnbRegulations: 'Limited regulation, choose reputable hosts',
    recommendedAreas: [
      'Sultanahmet - historic area near major attractions',
      'Beyoğlu/Taksim - modern district with nightlife',
      'Galata - trendy area with restaurants and cafes',
      'Kadıköy - Asian side, local atmosphere',
      'Nişantaşı - upscale shopping district'
    ]
  },
  localLaws: [
    'Turkey is secular but respect Islamic customs',
    'Alcohol available but not in all areas',
    'Smoking banned in most enclosed public spaces',
    'Public displays of affection should be minimal',
    'Photography restrictions near military/government buildings'
  ],
  culturalNorms: [
    'Remove shoes when entering mosques and some homes',
    'Dress modestly - cover shoulders and knees',
    'Use right hand for greetings and eating',
    'Tipping expected (10-15% at restaurants)',
    'Bargaining is common in markets and for services'
  ],
  redFlags: [
    'Persistent street vendors and carpet sellers',
    'Fake police asking for documents or money',
    'Overcharging at restaurants without posted prices',
    'Aggressive approaches from men, especially in tourist areas',
    'Pickpockets in crowded areas like Grand Bazaar'
  ],
  attractions: [
    {
      name: 'Hagia Sophia',
      safetyScore: 4.2,
      description: 'Historic mosque with security presence, dress modestly and expect crowds'
    },
    {
      name: 'Blue Mosque',
      safetyScore: 4.1,
      description: 'Active mosque requiring modest dress, generally safe with tourist police'
    },
    {
      name: 'Grand Bazaar',
      safetyScore: 3.8,
      description: 'Historic covered market, busy and generally safe but watch for pickpockets'
    },
    {
      name: 'Topkapi Palace',
      safetyScore: 4.3,
      description: 'Former Ottoman palace, well-secured tourist site with controlled access'
    },
    {
      name: 'Galata Bridge',
      safetyScore: 3.9,
      description: 'Historic bridge connecting old and new city, busy with street vendors'
    }
  ],
  neighborhoods: [
    {
      name: 'Sultanahmet',
      safetyScore: 4.0,
      description: 'Historic peninsula with major sights, tourist police presence but persistent vendors'
    },
    {
      name: 'Beyoğlu',
      safetyScore: 3.6,
      description: 'Modern district with nightlife, generally safe but can be lively at night'
    },
    {
      name: 'Kadıköy',
      safetyScore: 3.8,
      description: 'Asian side neighborhood with local atmosphere, less touristy but authentic'
    },
    {
      name: 'Galata',
      safetyScore: 3.7,
      description: 'Trendy area near Galata Tower, growing expat community'
    }
  ],
  travelTips: [
    'Get an Istanbulkart for public transport',
    'Learn basic Turkish phrases - English not widely spoken',
    'Carry cash as cards not accepted everywhere',
    'Bargain in markets but not in regular shops',
    'Try Turkish baths (hamam) for authentic cultural experience'
  ],
  climate: 'Transitional climate between oceanic and Mediterranean with mild, wet winters',
  currency: 'Turkish Lira (TRY)',
  language: 'Turkish',
  bestTimeToVisit: 'April-May and September-November for pleasant weather',
  costLevel: 'Budget-friendly to moderate - budget $30-70 per day',
  internetReliability: 4.0,
  plugType: 'Type C/F (two-pin)',
  timeZone: 'TRT (UTC+3)',
  accessibility: 3.3
};

export default istanbul;