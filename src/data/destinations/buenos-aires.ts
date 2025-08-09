import { Destination } from './types';

const buenosAires: Destination = {
  id: 'buenos-aires-argentina',
  city: 'Buenos Aires',
  country: 'Argentina',
  continent: 'South America',
  description: 'The Paris of South America offers rich culture, tango, and European architecture, though solo female travelers should take extra precautions.',
  safetyScore: 3.6,
  scores: {
    overall: 3.6,
    nightSafety: 3.2,
    publicTransport: 3.8,
    walkingAlone: 3.4,
    emergencyServices: 4.0
  },
  genderSafetyScore: 3.4,
  lgbtqSafetyScore: 4.1,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'European-influenced culture with late dining (9-11 PM)',
    'Tango culture is integral to city identity',
    'Argentines are passionate about football (soccer)',
    'Kiss on cheek greeting is common for women'
  ],
  safetyTips: [
    'Be very cautious of street crime, especially phone and bag snatching',
    'Avoid displaying expensive items or large amounts of cash',
    'Use authorized taxis or rideshare apps, not street taxis',
    'Stay in well-lit, populated areas at night',
    'Be aware of express kidnapping scams'
  ],
  emergencyContacts: {
    police: '911',
    fire: '911',
    ambulance: '911',
    touristHelpline: '+54 11 4312-2232'
  },
  healthcareInfo: {
    qualityOfCare: 4.2,
    hospitalAvailability: 4.1,
    pharmacyAvailability: 4.3,
    emergencyResponseTime: 3.8
  },
  transportation: {
    publicTransportQuality: 3.8,
    publicTransportSafety: 3.6,
    walkability: 4.0,
    cyclingFriendliness: 3.9,
    rideShareAvailability: 4.2
  },
  accommodations: {
    hotelSafety: 4.0,
    hostelSafety: 3.7,
    airbnbRegulations: 'Limited regulation, choose reputable hosts',
    recommendedAreas: [
      'Palermo - trendy neighborhood with parks and nightlife',
      'Recoleta - upscale area near cemetery and museums',
      'San Telmo - historic area with tango culture',
      'Puerto Madero - modern waterfront district, well-lit',
      'Belgrano - residential area, quieter and safer'
    ]
  },
  localLaws: [
    'Drinking age is 18, not strictly enforced',
    'Smoking banned in enclosed public spaces',
    'Tipping expected (10% at restaurants)',
    'Jaywalking common and generally accepted',
    'Cannabis possession decriminalized in small amounts'
  ],
  culturalNorms: [
    'Greet with kiss on right cheek (women to women/men)',
    'Dinner served very late (9-11 PM)',
    'Argentines are direct and passionate in conversation',
    'Fashion and appearance are important',
    'Football (soccer) is a religion - avoid controversial comments'
  ],
  redFlags: [
    'High rate of street crime, especially phone and bag theft',
    'Express kidnapping scams targeting tourists',
    'Fake police asking for documents or money',
    'Distraction techniques in crowded areas',
    'Some villa (slum) areas are no-go zones'
  ],
  attractions: [
    {
      name: 'Recoleta Cemetery',
      safetyScore: 4.2,
      description: 'Famous cemetery with Eva Perón\'s grave, safe during operating hours'
    },
    {
      name: 'Plaza de Mayo',
      safetyScore: 3.8,
      description: 'Historic square with Casa Rosada, can have political demonstrations'
    },
    {
      name: 'San Telmo Market',
      safetyScore: 3.5,
      description: 'Sunday antique market, busy but watch for pickpockets'
    },
    {
      name: 'Puerto Madero',
      safetyScore: 4.3,
      description: 'Modern waterfront area with restaurants, well-patrolled and lit'
    },
    {
      name: 'La Boca',
      safetyScore: 3.2,
      description: 'Colorful neighborhood with Caminito street, tourist area but stay alert'
    }
  ],
  neighborhoods: [
    {
      name: 'Palermo',
      safetyScore: 4.0,
      description: 'Trendy area with parks, restaurants, and nightlife, generally safer'
    },
    {
      name: 'Recoleta',
      safetyScore: 4.2,
      description: 'Upscale neighborhood with museums and cafes, relatively safe'
    },
    {
      name: 'San Telmo',
      safetyScore: 3.4,
      description: 'Historic area with tango culture, charming but use caution at night'
    },
    {
      name: 'Microcentro',
      safetyScore: 3.6,
      description: 'Business district, busy during day but can be deserted at night'
    }
  ],
  travelTips: [
    'Exchange money at official casas de cambio, not on street',
    'Keep copies of documents separate from originals',
    'Learn basic Spanish - English not widely spoken',
    'Use SUBE card for public transport',
    'Book tango shows in advance but beware of tourist traps'
  ],
  climate: 'Humid subtropical climate with hot summers (Dec-Mar) and mild winters',
  currency: 'Argentine Peso (ARS) - bring USD for better exchange rates',
  language: 'Spanish (distinctive Argentine accent)',
  bestTimeToVisit: 'March-May and September-November for mild weather',
  costLevel: 'Moderate (varies greatly with exchange rate) - budget $40-80 per day',
  internetReliability: 4.1,
  plugType: 'Type C/I (two/three-pin)',
  timeZone: 'ART (UTC-3)',
  accessibility: 3.5
};

export default buenosAires;