export interface Destination {
  city: string;
  country: string;
  continent: string;
  countryCode: string;
  overallScore: number;
  nightSafety: number;
  publicTransit: number;
  walkingAlone: number;
  tags: string[];
  bgColor: string;
  reviewCount: number;
  lastUpdated: string;
  harassmentRisk: 'low' | 'medium' | 'high';
  safetyBreakdown: {
    nightSafety: {
      score: number;
      context: string;
    };
    publicTransit: {
      score: number;
      context: string;
    };
    walkingAlone: {
      score: number;
      context: string;
    };
  };
  neighborhoods: {
    safe: (string | { name: string; description: string })[];
    caution: string[];
    avoid: string[];
  };
  accommodations: {
    name: string;
    type: 'hostel' | 'hotel' | 'airbnb';
    features: string[];
    rating: number;
    notes: string;
    link?: string;
  }[];
  alerts: {
    title: string;
    description: string;
    location: string;
    reportCount: number;
    severity: 'low' | 'medium' | 'high';
    dateReported: string;
  }[];
  safetyTips: {
    clothing: string;
    firstTimers: string;
    apps: string[];
    appLinks?: { name: string; link: string; ios?: string; description?: string }[];
    emergencyPhrases?: {
      english: string;
      local: string;
      localLanguage: string;
    }[];
  };
  culturalExpectations: {
    dressCode: string;
    behaviorNorms: string[];
    perception: string;
  };
  bestTimeToVisit: {
    safestMonths: string[];
    events: string;
  };
  emergencyInfo: {
    police: string;
    fire: string;
    medical: string;
    general: string;
  };
  currency: {
    name: string;
    code: string;
    exchangeRate: {
      usd: number;
      eur: number;
      gbp: number;
    };
    exchangeTips?: string[];
    scamWarnings: string[];
    bestExchangeLocations?: string[];
    tippingCulture?: string[];
    description?: string;
  };
  scamWarnings: {
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
  }[];
  languages: string[];
  daytimeSafetyPercent?: number;
  nighttimeSafetyPercent?: number;
  safetySourceName?: string;
  safetySourceUrl?: string;
  redFlags?: {
    label: string;
    frequency: 'Most common' | 'Frequent' | 'Occasional' | 'Rare';
    icon?: string; // Optional: icon name for UI
  }[];
  usefulTips?: {
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    sourceName: string;
    sourceUrl: string;
  }[];
  culturalSensitivityTips?: string[];
  culturalSensitivityTipsDetails?: string[];
  culturalDos?: string[];
  culturalDonts?: string[];
  womensConfidenceScore?: {
    score: number;
    source: string;
    sourceUrl?: string;
  };
  confidenceByActivity?: {
    label: string;
    confidence: number;
    source: string;
    sourceUrl?: string;
  }[];
  // Enhanced safety fields
  sexualHarassmentData?: {
    prevalence: 'low' | 'medium' | 'high';
    commonLocations: string[];
    reportingRate: number; // percentage
    legalProtection: string;
    supportResources: string[];
  };
  healthSafety?: {
    hospitals: {
      name: string;
      address: string;
      phone: string;
      emergency: boolean;
      specialties?: string[];
      link?: string;
    }[];
    pharmacies: {
      name: string;
      address: string;
      phone: string;
      hours: string;
      emergency: boolean;
      link?: string;
    }[];
    womensHealth: {
      clinics: string[];
      gynecologists: string[];
      emergencyContraception: string[];
      sanitaryProducts: string[];
    };
    vaccinations: string[];
    healthRisks: string[];
  };
  legalResources?: {
    embassy: {
      name: string;
      address: string;
      phone: string;
      email: string;
      emergency: string;
      link?: string;
    };
    embassies?: {
      name: string;
      address: string;
      phone: string;
      link?: string;
    }[];
    consulate?: {
      name: string;
      address: string;
      phone: string;
      email: string;
      link?: string;
    };
    womensRights: string[];
    legalSupport: string[];
    reportingProcedures: string[];
  };
  transportationSafety?: {
    safeOptions: {
      type: string;
      safety: number;
      recommendations: string[];
      companies: string[];
      link?: string;
    }[];
    nightTravel: {
      safety: number;
      warnings: string[];
      alternatives: string[];
    };
    verifiedProviders: {
      name: string;
      type: string;
      contact: string;
      safety: number;
    }[];
  };
  accommodationSafety?: {
    securityFeatures: string[];
    safeNeighborhoods: string[];
    womensOnly: {
      name: string;
      type: string;
      features: string[];
      rating: number;
    }[];
    userReviews: {
      rating: number;
      safety: number;
      comments: string;
      date: string;
    }[];
  };
  cybersecurity?: {
    wifiSafety: string[];
    digitalScams: string[];
    vpnRecommendations: string[];
    dataProtection: string[];
  };
  communityReports?: {
    recentIncidents: {
      type: string;
      location: string;
      date: string;
      description: string;
      severity: 'low' | 'medium' | 'high';
    }[];
    safetyTips: {
      tip: string;
      author: string;
      date: string;
      upvotes: number;
    }[];
  };
  governmentAdvisory?: {
    level: 'Exercise Normal Precautions' | 'Exercise Increased Caution' | 'Reconsider Travel' | 'Do Not Travel';
    levelNumber: 1 | 2 | 3 | 4;
    source: string;
    lastUpdated: string;
    details: string;
    reason?: string;
    link?: string;
    soloTravelerAdvice?: string[];
  };
  crimeStatistics?: {
    violentCrime: number; // per 100,000
    propertyCrime: number; // per 100,000
    sexualAssault: number; // per 100,000
    kidnapping: number; // per 100,000
    source: string;
    year: number;
  };
  personalSafetyTools?: {
    recommendedDevices: string[];
    safetyApps: {
      name: string;
      purpose: string;
      rating: number;
    }[];
    emergencyContacts: {
      name: string;
      number: string;
      type: string;
    }[];
  };
  youtubeVideo?: {
    videoId: string;
  };
  youtubeVideos?: {
    videoId: string;
    title?: string;
  }[];
  costAndComfort?: {
    dailyBudget: {
      range: string;
      description: string;
      tip: string;
    };
    accommodation: {
      type: string;
      avgCost: string;
      safetyNote: string;
      safetyLevel: 'high' | 'medium' | 'low';
    }[];
    transport: {
      method: string;
      cost: string;
      safetyDescription: string;
      safetyLevel: 'high' | 'medium' | 'low';
    }[];
    budgetTips: string[];
    currencyExchangeTips?: string[];
  };
  culturalInformation?: string[];
  practicalInfo?: {
    moneyAndConnectivity: string[];
    transportEssentials: string[];
    soloWomenPerception: string[];
    dressCode?: string[];
    behaviorNorms?: string[];
  };
}

export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  // This will be implemented in the index file
  return undefined;
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${country.toLowerCase().replace(/\s+/g, '-')}`;
}; 