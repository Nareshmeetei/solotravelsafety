import { Destination } from './types';

const london: Destination = {
  id: 'london-uk',
  city: 'London',
  country: 'United Kingdom',
  continent: 'Europe',

  countryCode: 'gb',
  description: 'A global metropolis with excellent infrastructure and generally high safety standards for solo female travelers.',
  safetyScore: 4.6,
  scores: {
    overall: 4.6,
    nightSafety: 4.4,
    publicTransport: 4.8,
    walkingAlone: 4.5,
    emergencyServices: 4.9
  },
  genderSafetyScore: 4.5,
  lgbtqSafetyScore: 4.7,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Very multicultural and diverse city',
    'English is the primary language',
    'Tipping is not mandatory but appreciated (10-15%)',
    'Pub culture is central to social life'
  ],
  safetyTips: [
    'Be cautious in certain areas late at night, especially East London',
    'Keep valuables secure on the tube and in crowded areas',
    'Be aware of pickpockets in tourist areas',
    'Use licensed black cabs or reputable ride-sharing apps',
    'Stay alert when walking alone at night in parks or quiet streets'
  ],
  emergencyContacts: {
    police: '999',
    fire: '999',
    ambulance: '999',
    touristHelpline: '+44 20 7234 5800'
  },
  healthcareInfo: {
    qualityOfCare: 4.7,
    hospitalAvailability: 4.8,
    pharmacyAvailability: 4.9,
    emergencyResponseTime: 4.6
  },
  transportation: {
    publicTransportQuality: 4.8,
    publicTransportSafety: 4.7,
    walkability: 4.5,
    cyclingFriendliness: 4.2,
    rideShareAvailability: 4.9
  },
  accommodations: {
    hotelSafety: 4.7,
    hostelSafety: 4.4,
    airbnbRegulations: 'Regulated with registration requirements',
    recommendedAreas: [
      'Covent Garden - central location, well-lit streets',
      'Kensington - upscale, safe residential area',
      'Shoreditch - trendy area with good nightlife',
      'Camden - vibrant area with easy transport links',
      'South Kensington - museum district, very safe'
    ]
  },
  localLaws: [
    'Drinking age is 18',
    'Carrying knives or weapons is strictly prohibited',
    'Drug possession is illegal with serious penalties',
    'Public intoxication can lead to arrest',
    'Smoking is banned in all enclosed public spaces'
  ],
  culturalNorms: [
    'Queuing (standing in line) is taken very seriously',
    'Polite conversation and saying please/thank you is important',
    'Personal space is valued, avoid standing too close',
    'Punctuality is highly valued',
    'Discussing politics can be sensitive'
  ],
  redFlags: [
    'Areas to avoid at night: certain parts of East London, some housing estates',
    'Be cautious of drink spiking in nightlife areas',
    'Watch for aggressive street performers or charity collectors',
    'Avoid unlicensed minicabs'
  ],
  attractions: [
    {
      name: 'British Museum',
      safetyScore: 4.8,
      description: 'World-famous museum with extensive collections, very safe and well-monitored'
    },
    {
      name: 'Tower Bridge',
      safetyScore: 4.6,
      description: 'Iconic bridge with tourist facilities, generally safe during day and evening'
    },
    {
      name: 'Hyde Park',
      safetyScore: 4.4,
      description: 'Large royal park, safe during daylight hours but use caution after dark'
    },
    {
      name: 'Westminster Area',
      safetyScore: 4.7,
      description: 'Political heart of London with Big Ben and Parliament, heavy police presence'
    },
    {
      name: 'Covent Garden',
      safetyScore: 4.6,
      description: 'Shopping and entertainment district, busy and well-patrolled'
    }
  ],
  neighborhoods: [
    {
      name: 'Kensington',
      safetyScore: 4.8,
      description: 'Upscale residential area with museums and parks, very safe day and night'
    },
    {
      name: 'Shoreditch',
      safetyScore: 4.3,
      description: 'Trendy East London area, busy nightlife but generally safe in main areas'
    },
    {
      name: 'Camden',
      safetyScore: 4.4,
      description: 'Alternative culture hub, can get rowdy but generally safe with good transport'
    },
    {
      name: 'Notting Hill',
      safetyScore: 4.6,
      description: 'Charming residential area, safe with good local amenities'
    }
  ],
  travelTips: [
    'Get an Oyster Card or use contactless payment for public transport',
    'Stand right, walk left on escalators',
    'Keep valuables in inside pockets on the tube',
    'Download offline maps as mobile signal can be poor underground',
    'Book restaurants in advance, especially on weekends'
  ],
  climate: 'Temperate maritime climate with mild temperatures year-round, frequent rain',
  currency: 'British Pound (GBP)',
  language: 'English',
  bestTimeToVisit: 'May to September for warmest weather, though London is a year-round destination',
  costLevel: 'Very expensive - budget £80-150+ per day',
  internetReliability: 4.9,
  plugType: 'Type G (three-pin)',
  timeZone: 'GMT/BST',
  accessibility: 4.5
};

export default london;