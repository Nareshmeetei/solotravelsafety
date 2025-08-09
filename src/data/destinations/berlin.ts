import { Destination } from './types';

const berlin: Destination = {
  id: 'berlin-germany',
  city: 'Berlin',
  country: 'Germany',
  continent: 'Europe',
  description: 'Germany\'s vibrant capital offering rich history, diverse neighborhoods, and excellent safety standards for solo female travelers.',
  safetyScore: 4.5,
  scores: {
    overall: 4.5,
    nightSafety: 4.3,
    publicTransport: 4.7,
    walkingAlone: 4.4,
    emergencyServices: 4.8
  },
  genderSafetyScore: 4.4,
  lgbtqSafetyScore: 4.8,
  soloTravelFriendly: true,
  culturalConsiderations: [
    'Germans value punctuality and directness',
    'English widely spoken, especially by younger people',
    'Recycling and environmental consciousness is important',
    'Cash is still preferred in many establishments'
  ],
  safetyTips: [
    'Generally very safe, but stay alert in crowded tourist areas',
    'Be cautious in some areas of eastern Berlin late at night',
    'Keep valuables secure on public transport',
    'Trust your instincts in nightlife areas',
    'Emergency services are highly efficient and reliable'
  ],
  emergencyContacts: {
    police: '110',
    fire: '112',
    ambulance: '112',
    touristHelpline: '+49 30 25 00 25'
  },
  healthcareInfo: {
    qualityOfCare: 4.8,
    hospitalAvailability: 4.7,
    pharmacyAvailability: 4.6,
    emergencyResponseTime: 4.7
  },
  transportation: {
    publicTransportQuality: 4.7,
    publicTransportSafety: 4.6,
    walkability: 4.5,
    cyclingFriendliness: 4.8,
    rideShareAvailability: 4.4
  },
  accommodations: {
    hotelSafety: 4.6,
    hostelSafety: 4.4,
    airbnbRegulations: 'Regulated with registration requirements and rental limits',
    recommendedAreas: [
      'Mitte - central location, historical sites, well-connected',
      'Prenzlauer Berg - trendy residential area, very safe',
      'Charlottenburg - upscale western district, excellent shopping',
      'Kreuzberg - multicultural area with vibrant nightlife',
      'Friedrichshain - young, artistic neighborhood'
    ]
  },
  localLaws: [
    'Drinking age is 16 for beer/wine, 18 for spirits',
    'Smoking banned in most public places and transport',
    'Cannabis legal for personal use (as of 2024)',
    'Quiet hours (Ruhezeit) typically 22:00-06:00 and Sunday afternoons',
    'Jaywalking is frowned upon and can be fined'
  ],
  culturalNorms: [
    'Germans are direct in communication - not meant to be rude',
    'Punctuality is extremely important',
    'Wait for pedestrian signals even when streets are empty',
    'Cash is still king - carry euros for smaller establishments',
    'Separate recycling is mandatory and taken seriously'
  ],
  redFlags: [
    'Some areas in eastern districts can be less safe late at night',
    'Watch for pickpockets at tourist sites and on public transport',
    'Be aware of bicycle lanes - don\'t walk in them',
    'Some nightlife areas can get rowdy, especially on weekends'
  ],
  attractions: [
    {
      name: 'Brandenburg Gate',
      safetyScore: 4.6,
      description: 'Iconic landmark in city center, well-monitored and safe during day and night'
    },
    {
      name: 'Museum Island',
      safetyScore: 4.7,
      description: 'UNESCO World Heritage site with multiple museums, very safe and well-patrolled'
    },
    {
      name: 'East Side Gallery',
      safetyScore: 4.3,
      description: 'Open-air gallery on Berlin Wall remains, safe during day but use caution at night'
    },
    {
      name: 'Tiergarten',
      safetyScore: 4.4,
      description: 'Large central park, safe during daylight hours but avoid isolated areas after dark'
    },
    {
      name: 'Checkpoint Charlie',
      safetyScore: 4.5,
      description: 'Historic border crossing, busy tourist area with good security presence'
    }
  ],
  neighborhoods: [
    {
      name: 'Mitte',
      safetyScore: 4.6,
      description: 'Central district with major attractions, very safe with good police presence'
    },
    {
      name: 'Prenzlauer Berg',
      safetyScore: 4.7,
      description: 'Former East Berlin area, now trendy and family-friendly, very safe'
    },
    {
      name: 'Kreuzberg',
      safetyScore: 4.2,
      description: 'Multicultural area with vibrant nightlife, generally safe but can be lively'
    },
    {
      name: 'Charlottenburg',
      safetyScore: 4.6,
      description: 'Upscale western district, very safe with excellent shopping and dining'
    }
  ],
  travelTips: [
    'Get a day pass for public transport to save money',
    'Learn a few German phrases - locals appreciate the effort',
    'Carry cash as many places don\'t accept cards',
    'Download the BVG app for public transport navigation',
    'Book restaurants in advance, especially on weekends'
  ],
  climate: 'Temperate continental climate with mild summers and cold winters',
  currency: 'Euro (EUR)',
  language: 'German (English widely spoken)',
  bestTimeToVisit: 'May to September for warmest weather and outdoor activities',
  costLevel: 'Moderate - budget €60-120 per day',
  internetReliability: 4.7,
  plugType: 'Type C/F (two-pin)',
  timeZone: 'CET/CEST',
  accessibility: 4.4
};

export default berlin;