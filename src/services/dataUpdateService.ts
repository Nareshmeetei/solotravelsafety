
interface UpdateResult {
  success: boolean;
  updated: string[];
  errors: string[];
  timestamp: string;
}


interface SafetyIndex {
  [key: string]: {
    overallScore: number;
    crimeIndex: number;
    safetyIndex: number;
  };
}

interface GovernmentAdvisory {
  [key: string]: {
    level: 'Exercise Normal Precautions' | 'Exercise Increased Caution' | 'Reconsider Travel' | 'Do Not Travel';
    levelNumber: 1 | 2 | 3 | 4;
    details: string;
    lastUpdated: string;
  };
}

export class DataUpdateService {
  private static instance: DataUpdateService;
  private lastUpdate: Date | null = null;

  private constructor() {}

  public static getInstance(): DataUpdateService {
    if (!DataUpdateService.instance) {
      DataUpdateService.instance = new DataUpdateService();
    }
    return DataUpdateService.instance;
  }

  /**
   * Main update function that orchestrates all data updates
   */
  public async updateAllData(): Promise<UpdateResult> {
    const result: UpdateResult = {
      success: true,
      updated: [],
      errors: [],
      timestamp: new Date().toISOString()
    };

    console.log('🔄 Starting automated data update...');

    try {
      // Update currency exchange rates
      await this.updateCurrencyRates(result);
      
      // Update safety indices from multiple sources
      await this.updateSafetyIndices(result);
      
      // Update government travel advisories
      await this.updateGovernmentAdvisories(result);
      
      // Update crime statistics
      await this.updateCrimeStatistics(result);
      
      // Update accommodation data
      await this.updateAccommodationData(result);
      
      // Update emergency contact information
      await this.updateEmergencyContacts(result);
      
      // Update cost of living data
      await this.updateCostOfLivingData(result);

      this.lastUpdate = new Date();
      console.log('✅ Data update completed successfully');
      
    } catch (error) {
      result.success = false;
      result.errors.push(`General update error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error('❌ Data update failed:', error);
    }

    return result;
  }

  /**
   * Update currency exchange rates from reliable financial APIs
   */
  private async updateCurrencyRates(result: UpdateResult): Promise<void> {
    try {
      console.log('💱 Updating currency rates...');
      
      // Multiple API sources for reliability
      const apis = [
        {
          name: 'ExchangeRate-API',
          url: 'https://api.exchangerate-api.com/v4/latest/USD',
          key: process.env.EXCHANGE_RATE_API_KEY
        },
        {
          name: 'Fixer.io',
          url: `https://api.fixer.io/latest?access_key=${process.env.FIXER_API_KEY}&base=USD`,
          key: process.env.FIXER_API_KEY
        },
        {
          name: 'CurrencyLayer',
          url: `http://api.currencylayer.com/live?access_key=${process.env.CURRENCY_LAYER_API_KEY}&source=USD`,
          key: process.env.CURRENCY_LAYER_API_KEY
        }
      ];

      let rates: Record<string, number> | null = null;

      // Try each API until one succeeds
      for (const api of apis) {
        if (!api.key) continue;
        
        try {
          const response = await fetch(api.url);
          if (response.ok) {
            const data = await response.json();
            rates = data.rates || data.quotes;
            console.log(`✅ Got currency rates from ${api.name}`);
            break;
          }
        } catch {
          console.warn(`⚠️ ${api.name} failed`);
        }
      }

      if (!rates) {
        // Fallback to free API without key
        try {
          const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
          const data = await response.json();
          rates = data.rates;
          console.log('✅ Got currency rates from fallback API');
        } catch {
          throw new Error('All currency APIs failed');
        }
      }

      // Update destination currency data
      const updatedDestinations = await this.updateDestinationCurrencies();
      result.updated.push(`Currency rates for ${updatedDestinations} destinations`);
      
    } catch (error) {
      result.errors.push(`Currency update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update safety indices from crime databases and safety reports
   */
  private async updateSafetyIndices(result: UpdateResult): Promise<void> {
    try {
      console.log('🛡️ Updating safety indices...');
      
      // Sources for safety data
      const safetyAPIs = [
        {
          name: 'Numbeo Crime Index',
          endpoint: 'https://www.numbeo.com/api/crime_index',
          parser: this.parseNumberoData
        },
        {
          name: 'Global Peace Index',
          endpoint: 'https://api.visionofhumanity.org/v1/peace',
          parser: this.parseGlobalPeaceIndex
        },
        {
          name: 'World Risk Index',
          endpoint: 'https://api.worldriskindex.org/v1/countries',
          parser: this.parseWorldRiskIndex
        }
      ];

      const safetyData: SafetyIndex = {};

      for (const api of safetyAPIs) {
        try {
          await this.fetchSafetyData(api.endpoint);
          const parsed = api.parser();
          Object.assign(safetyData, parsed);
        } catch (error) {
          console.warn(`⚠️ ${api.name} failed:`, error);
        }
      }

      const updatedCount = await this.updateDestinationSafety();
      result.updated.push(`Safety scores for ${updatedCount} destinations`);
      
    } catch (error) {
      result.errors.push(`Safety index update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update government travel advisories
   */
  private async updateGovernmentAdvisories(result: UpdateResult): Promise<void> {
    try {
      console.log('🏛️ Updating government advisories...');
      
      // Government advisory sources
      const advisorySources = [
        {
          name: 'US State Department',
          url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.json',
          parser: this.parseUSStateAdvisories
        },
        {
          name: 'UK FCO',
          url: 'https://api.gov.uk/foreign-travel-advice',
          parser: this.parseUKFCOAdvisories
        },
        {
          name: 'Canadian Government',
          url: 'https://travel.gc.ca/travelling/advisories/api',
          parser: this.parseCanadianAdvisories
        }
      ];

      const advisories: GovernmentAdvisory = {};

      for (const source of advisorySources) {
        try {
          await fetch(source.url);
          const parsed = source.parser();
          Object.assign(advisories, parsed);
        } catch (error) {
          console.warn(`⚠️ ${source.name} failed:`, error);
        }
      }

      const updatedCount = await this.updateDestinationAdvisories();
      result.updated.push(`Government advisories for ${updatedCount} destinations`);
      
    } catch (error) {
      result.errors.push(`Advisory update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update crime statistics from official sources
   */
  private async updateCrimeStatistics(result: UpdateResult): Promise<void> {
    try {
      console.log('📊 Updating crime statistics...');
      
      // This would integrate with official crime databases
      // Implementation would depend on available APIs
      // For now, we'll mark it as a placeholder for future implementation
      result.updated.push('Crime statistics (placeholder - requires API access)');
      
    } catch (error) {
      result.errors.push(`Crime statistics update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update accommodation data from booking platforms
   */
  private async updateAccommodationData(result: UpdateResult): Promise<void> {
    try {
      console.log('🏨 Updating accommodation data...');
      
      // This would integrate with booking APIs
      // Placeholder for accommodation data updates
      result.updated.push('Accommodation data (placeholder - requires API partnerships)');
      
    } catch (error) {
      result.errors.push(`Accommodation update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update emergency contact information
   */
  private async updateEmergencyContacts(result: UpdateResult): Promise<void> {
    try {
      console.log('🚨 Updating emergency contacts...');
      
      // This would pull from official government databases
      // Implementation depends on available APIs
      result.updated.push('Emergency contacts (manual verification required)');
      
    } catch (error) {
      result.errors.push(`Emergency contacts update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update cost of living data
   */
  private async updateCostOfLivingData(result: UpdateResult): Promise<void> {
    try {
      console.log('💰 Updating cost of living data...');
      
      // Sources for cost data would include:
      // Numbeo, Expatistan, and Nomad List APIs
      // Implementation would fetch real cost data
      result.updated.push('Cost of living data (placeholder - requires API access)');
      
    } catch (error) {
      result.errors.push(`Cost data update failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Helper methods for parsing different API responses
  private parseNumberoData(): SafetyIndex {
    // Parse Numbeo crime index data
    return {};
  }

  private parseGlobalPeaceIndex(): SafetyIndex {
    // Parse Global Peace Index data
    return {};
  }

  private parseWorldRiskIndex(): SafetyIndex {
    // Parse World Risk Index data
    return {};
  }

  private parseUSStateAdvisories(): GovernmentAdvisory {
    // Parse US State Department data
    return {};
  }

  private parseUKFCOAdvisories(): GovernmentAdvisory {
    // Parse UK FCO data
    return {};
  }

  private parseCanadianAdvisories(): GovernmentAdvisory {
    // Parse Canadian government data
    return {};
  }

  private async fetchSafetyData(endpoint: string): Promise<Record<string, unknown>> {
    const response = await fetch(endpoint);
    return response.json() as Record<string, unknown>;
  }

  private async updateDestinationCurrencies(): Promise<number> {
    // This would update destination files with new currency rates
    return 0;
  }

  private async updateDestinationSafety(): Promise<number> {
    // This would update destination files with new safety scores
    return 0;
  }

  private async updateDestinationAdvisories(): Promise<number> {
    // This would update destination files with new advisories
    return 0;
  }

  /**
   * Get the last update timestamp
   */
  public getLastUpdate(): Date | null {
    return this.lastUpdate;
  }

  /**
   * Check if data needs updating (weekly schedule)
   */
  public needsUpdate(): boolean {
    if (!this.lastUpdate) return true;
    
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const now = new Date();
    return (now.getTime() - this.lastUpdate.getTime()) > oneWeek;
  }
}

export default DataUpdateService; 