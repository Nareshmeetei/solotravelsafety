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
    safe: string[];
    caution: string[];
    avoid: string[];
  };
  accommodations: {
    name: string;
    type: 'hostel' | 'hotel' | 'airbnb';
    features: string[];
    rating: number;
    notes: string;
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
    emergencyPhrases: string[];
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
    scamWarnings: string[];
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
}

export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  // This will be implemented in the index file
  return undefined;
};

export const createDestinationSlug = (city: string, country: string): string => {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${country.toLowerCase().replace(/\s+/g, '-')}`;
}; 