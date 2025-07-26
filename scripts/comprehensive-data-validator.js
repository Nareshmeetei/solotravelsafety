import https from 'https';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveDataValidator {
  constructor() {
    this.sources = {
      // Government Travel Advisories
      government: {
        us_state: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html',
        uk_fcdo: 'https://www.gov.uk/foreign-travel-advice',
        canada_travel: 'https://travel.gc.ca/travelling/advisories',
        australia_dfat: 'https://www.smartraveller.gov.au/destinations',
        germany_aa: 'https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/reise-und-sicherheitshinweise'
      },
      
      // WHO Health Data
      health: {
        who_outbreaks: 'https://www.who.int/emergencies/disease-outbreak-news',
        who_travel_health: 'https://www.who.int/ith/en/',
        cdc_travel_health: 'https://wwwnc.cdc.gov/travel/destinations/list'
      },
      
      // Safety and Security
      safety: {
        global_peace_index: 'https://www.visionofhumanity.org/maps/#/',
        numbeo_safety: 'https://www.numbeo.com/crime/',
        osac_reports: 'https://www.osac.gov/Country',
        travel_risk_map: 'https://www.travelriskmap.com'
      },
      
      // Economic Data
      economic: {
        world_bank: 'https://data.worldbank.org/indicator',
        imf_data: 'https://www.imf.org/en/Data',
        currency_apis: [
          'https://api.exchangerate-api.com/v4/latest/',
          'https://api.fixer.io/latest',
          'https://openexchangerates.org/api/latest.json'
        ]
      },
      
      // Weather Services
      weather: {
        openweather: 'https://api.openweathermap.org/data/2.5/',
        weatherapi: 'https://api.weatherapi.com/v1/',
        noaa: 'https://www.weather.gov/documentation/services-web-api'
      },
      
      // Embassy Information
      diplomatic: {
        us_embassies: 'https://www.usembassy.gov/',
        uk_embassies: 'https://www.gov.uk/world/embassies',
        embassy_pages: 'https://www.embassy-pages.com'
      }
    };
    
    this.validationRules = {
      safetyScore: { min: 0, max: 100 },
      overallScore: { min: 0, max: 100 },
      costOfLiving: { min: 0, max: 200 },
      walkingAloneDay: { min: 0, max: 100 },
      walkingAloneNight: { min: 0, max: 100 },
      publicTransport: { min: 0, max: 100 }
    };
  }

  async makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
      const request = https.get(url, options, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          try {
            resolve({
              statusCode: response.statusCode,
              data: data,
              headers: response.headers
            });
          } catch (error) {
            reject(error);
          }
        });
      });
      
      request.on('error', (error) => {
        reject(error);
      });
      
      request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  async validateDestinationData(destination) {
    const validationResults = {
      destination: `${destination.city}, ${destination.country}`,
      timestamp: new Date().toISOString(),
      validations: {},
      recommendations: [],
      dataQuality: 'unknown'
    };

    try {
      // Validate safety scores
      validationResults.validations.safetyScores = await this.validateSafetyScores(destination);
      
      // Validate government advisories
      validationResults.validations.governmentAdvisories = await this.validateGovernmentAdvisories(destination);
      
      // Validate health information
      validationResults.validations.healthData = await this.validateHealthData(destination);
      
      // Validate economic data
      validationResults.validations.economicData = await this.validateEconomicData(destination);
      
      // Validate weather data
      validationResults.validations.weatherData = await this.validateWeatherData(destination);
      
      // Validate embassy information
      validationResults.validations.embassyData = await this.validateEmbassyData(destination);
      
      // Calculate overall data quality
      validationResults.dataQuality = this.calculateDataQuality(validationResults.validations);
      
      // Generate recommendations
      validationResults.recommendations = this.generateRecommendations(validationResults.validations);
      
    } catch (error) {
      console.error(`Error validating destination ${destination.city}:`, error);
      validationResults.error = error.message;
    }
    
    return validationResults;
  }

  async validateSafetyScores(destination) {
    const validation = {
      status: 'checking',
      sources: [],
      discrepancies: [],
      confidence: 0
    };

    try {
      // Check safety score ranges
      for (const [key, score] of Object.entries(destination)) {
        if (this.validationRules[key]) {
          const rule = this.validationRules[key];
          if (score < rule.min || score > rule.max) {
            validation.discrepancies.push({
              field: key,
              value: score,
              expected: `${rule.min}-${rule.max}`,
              severity: 'high'
            });
          }
        }
      }

      // Cross-reference with Global Peace Index
      try {
        const gpiData = await this.getGlobalPeaceIndexData(destination.country);
        if (gpiData) {
          validation.sources.push({
            name: 'Global Peace Index',
            data: gpiData,
            lastUpdated: new Date().toISOString()
          });
        }
      } catch (error) {
        console.warn('Failed to validate with Global Peace Index:', error.message);
      }

      // Cross-reference with Numbeo Crime Index
      try {
        const numbeoData = await this.getNumbeoSafetyData(destination.city, destination.country);
        if (numbeoData) {
          validation.sources.push({
            name: 'Numbeo Crime Index',
            data: numbeoData,
            lastUpdated: new Date().toISOString()
          });
        }
      } catch (error) {
        console.warn('Failed to validate with Numbeo:', error.message);
      }

      validation.status = 'completed';
      validation.confidence = validation.sources.length * 25; // 25% per source
      
    } catch (error) {
      validation.status = 'failed';
      validation.error = error.message;
    }

    return validation;
  }

  async validateGovernmentAdvisories(destination) {
    const validation = {
      status: 'checking',
      advisories: [],
      riskLevels: {},
      lastUpdated: null
    };

    try {
      // Check multiple government sources
      const advisoryChecks = [
        this.getUSStateAdvisory(destination.country),
        this.getUKFCDOAdvisory(destination.country),
        this.getCanadaAdvisory(destination.country),
        this.getAustraliaAdvisory(destination.country)
      ];

      const results = await Promise.allSettled(advisoryChecks);
      
      results.forEach((result, index) => {
        const sources = ['US State Dept', 'UK FCDO', 'Canada GAC', 'Australia DFAT'];
        if (result.status === 'fulfilled' && result.value) {
          validation.advisories.push({
            source: sources[index],
            data: result.value,
            retrieved: new Date().toISOString()
          });
        }
      });

      validation.status = 'completed';
      
    } catch (error) {
      validation.status = 'failed';
      validation.error = error.message;
    }

    return validation;
  }

  async validateHealthData(destination) {
    const validation = {
      status: 'checking',
      healthRisks: [],
      outbreaks: [],
      vaccinations: {},
      sources: []
    };

    try {
      // Check WHO Disease Outbreak News
      const whoData = await this.getWHOOutbreakData(destination.country);
      if (whoData) {
        validation.outbreaks = whoData.outbreaks || [];
        validation.sources.push({
          name: 'WHO Disease Outbreak News',
          data: whoData,
          lastUpdated: new Date().toISOString()
        });
      }

      // Check CDC Travel Health Notices
      const cdcData = await this.getCDCTravelHealth(destination.country);
      if (cdcData) {
        validation.healthRisks = cdcData.risks || [];
        validation.vaccinations = cdcData.vaccinations || {};
        validation.sources.push({
          name: 'CDC Travel Health',
          data: cdcData,
          lastUpdated: new Date().toISOString()
        });
      }

      validation.status = 'completed';
      
    } catch (error) {
      validation.status = 'failed';
      validation.error = error.message;
    }

    return validation;
  }

  async validateEconomicData(destination) {
    const validation = {
      status: 'checking',
      currency: {},
      costOfLiving: {},
      sources: []
    };

    try {
      // Validate currency exchange rates
      const currencyData = await this.getCurrentExchangeRates(destination.currency);
      if (currencyData) {
        validation.currency = currencyData;
        validation.sources.push({
          name: 'Exchange Rate API',
          data: currencyData,
          lastUpdated: new Date().toISOString()
        });
      }

      // Cross-reference cost of living data
      const costData = await this.getCostOfLivingData(destination.city, destination.country);
      if (costData) {
        validation.costOfLiving = costData;
        validation.sources.push({
          name: 'Cost of Living Index',
          data: costData,
          lastUpdated: new Date().toISOString()
        });
      }

      validation.status = 'completed';
      
    } catch (error) {
      validation.status = 'failed';
      validation.error = error.message;
    }

    return validation;
  }

  async validateWeatherData(destination) {
    const validation = {
      status: 'checking',
      currentWeather: {},
      forecast: {},
      sources: []
    };

    try {
      // Get current weather from multiple sources
      const weatherAPIs = [
        this.getOpenWeatherData(destination.city, destination.country),
        this.getWeatherAPIData(destination.city, destination.country)
      ];

      const weatherResults = await Promise.allSettled(weatherAPIs);
      
      weatherResults.forEach((result, index) => {
        const sources = ['OpenWeatherMap', 'WeatherAPI'];
        if (result.status === 'fulfilled' && result.value) {
          validation.sources.push({
            name: sources[index],
            data: result.value,
            lastUpdated: new Date().toISOString()
          });
        }
      });

      validation.status = 'completed';
      
    } catch (error) {
      validation.status = 'failed';
      validation.error = error.message;
    }

    return validation;
  }

  async validateEmbassyData(destination) {
    const validation = {
      status: 'checking',
      embassies: [],
      consulates: [],
      emergencyContacts: {}
    };

    try {
      // Get embassy information for major countries
      const embassyData = await this.getEmbassyInformation(destination.country);
      if (embassyData) {
        validation.embassies = embassyData.embassies || [];
        validation.consulates = embassyData.consulates || [];
        validation.emergencyContacts = embassyData.emergencyContacts || {};
      }

      validation.status = 'completed';
      
    } catch (error) {
      validation.status = 'failed';
      validation.error = error.message;
    }

    return validation;
  }

  // Mock API methods (to be implemented with real API calls)
  async getGlobalPeaceIndexData(country) {
    // Implementation for Global Peace Index API
    return { rank: 50, score: 2.5, region: 'Asia-Pacific' };
  }

  async getNumbeoSafetyData(city, country) {
    // Implementation for Numbeo Crime Index API
    return { safetyIndex: 65, crimeIndex: 35, city: city, country: country };
  }

  async getUSStateAdvisory(country) {
    // Implementation for US State Department travel advisories
    return { level: 2, advisory: 'Exercise Increased Caution', lastUpdated: new Date().toISOString() };
  }

  async getUKFCDOAdvisory(country) {
    // Implementation for UK FCDO travel advice
    return { advice: 'See our travel advice before travelling', regions: [] };
  }

  async getCanadaAdvisory(country) {
    // Implementation for Canada travel advisories
    return { riskLevel: 'Exercise normal security precautions' };
  }

  async getAustraliaAdvisory(country) {
    // Implementation for Australia DFAT advisories
    return { advice: 'Exercise normal safety precautions' };
  }

  async getWHOOutbreakData(country) {
    // Implementation for WHO Disease Outbreak News
    return { outbreaks: [], healthAlerts: [] };
  }

  async getCDCTravelHealth(country) {
    // Implementation for CDC Travel Health Notices
    return { risks: [], vaccinations: {}, notices: [] };
  }

  async getCurrentExchangeRates(currency) {
    // Implementation for real-time exchange rates
    try {
      const response = await this.makeRequest(`https://api.exchangerate-api.com/v4/latest/${currency}`);
      if (response.statusCode === 200) {
        return JSON.parse(response.data);
      }
    } catch (error) {
      console.warn('Exchange rate API failed:', error.message);
    }
    return null;
  }

  async getCostOfLivingData(city, country) {
    // Implementation for cost of living data
    return { index: 65, rent: 45, groceries: 70, restaurants: 60 };
  }

  async getOpenWeatherData(city, country) {
    // Implementation for OpenWeatherMap API
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) return null;
    
    try {
      const response = await this.makeRequest(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&appid=${apiKey}&units=metric`
      );
      if (response.statusCode === 200) {
        return JSON.parse(response.data);
      }
    } catch (error) {
      console.warn('OpenWeather API failed:', error.message);
    }
    return null;
  }

  async getWeatherAPIData(city, country) {
    // Implementation for WeatherAPI.com
    const apiKey = process.env.WEATHERAPI_KEY;
    if (!apiKey) return null;
    
    try {
      const response = await this.makeRequest(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)},${encodeURIComponent(country)}`
      );
      if (response.statusCode === 200) {
        return JSON.parse(response.data);
      }
    } catch (error) {
      console.warn('WeatherAPI failed:', error.message);
    }
    return null;
  }

  async getEmbassyInformation(country) {
    // Implementation for embassy and consular information
    return {
      embassies: [
        { country: 'United States', address: 'Embassy address', phone: '+1-xxx-xxx-xxxx' },
        { country: 'United Kingdom', address: 'Embassy address', phone: '+44-xxx-xxx-xxxx' }
      ],
      consulates: [],
      emergencyContacts: {
        police: '911',
        medical: '112',
        fire: '911'
      }
    };
  }

  calculateDataQuality(validations) {
    let totalScore = 0;
    let validationCount = 0;

    for (const [key, validation] of Object.entries(validations)) {
      validationCount++;
      if (validation.status === 'completed') {
        totalScore += validation.confidence || 50; // Default 50% if no confidence score
      } else if (validation.status === 'failed') {
        totalScore += 0;
      }
    }

    const averageScore = validationCount > 0 ? totalScore / validationCount : 0;
    
    if (averageScore >= 80) return 'excellent';
    if (averageScore >= 60) return 'good';
    if (averageScore >= 40) return 'fair';
    return 'poor';
  }

  generateRecommendations(validations) {
    const recommendations = [];

    // Check for data quality issues
    for (const [key, validation] of Object.entries(validations)) {
      if (validation.status === 'failed') {
        recommendations.push({
          type: 'error',
          category: key,
          message: `Failed to validate ${key}: ${validation.error}`,
          priority: 'high'
        });
      } else if (validation.discrepancies && validation.discrepancies.length > 0) {
        validation.discrepancies.forEach(discrepancy => {
          recommendations.push({
            type: 'warning',
            category: key,
            message: `${discrepancy.field} value ${discrepancy.value} is outside expected range ${discrepancy.expected}`,
            priority: discrepancy.severity
          });
        });
      }
    }

    // Check for missing sources
    const expectedSources = ['government', 'health', 'safety', 'economic'];
    expectedSources.forEach(source => {
      if (!validations[source] || validations[source].sources?.length === 0) {
        recommendations.push({
          type: 'info',
          category: source,
          message: `Consider adding more ${source} data sources for better validation`,
          priority: 'medium'
        });
      }
    });

    return recommendations;
  }

  async validateAllDestinations() {
    console.log('🔍 Starting comprehensive destination data validation...');
    
    const destinationFiles = await fs.readdir(path.join(__dirname, '../src/data/destinations'));
    const dataFiles = destinationFiles.filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'types.ts');
    
    const validationResults = [];
    
    for (const file of dataFiles) {
      try {
        const filePath = path.join(__dirname, '../src/data/destinations', file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        
        // Extract destination data (simplified parsing)
        const destination = this.parseDestinationFile(fileContent);
        if (destination) {
          console.log(`\n📊 Validating ${destination.city}, ${destination.country}...`);
          const validation = await this.validateDestinationData(destination);
          validationResults.push(validation);
          
          // Log validation summary
          console.log(`✅ Validation complete - Quality: ${validation.dataQuality}`);
          if (validation.recommendations.length > 0) {
            console.log(`⚠️  ${validation.recommendations.length} recommendations found`);
          }
        }
      } catch (error) {
        console.error(`❌ Error validating ${file}:`, error.message);
      }
    }
    
    // Generate comprehensive report
    await this.generateValidationReport(validationResults);
    
    console.log(`\n🎉 Validation complete! Processed ${validationResults.length} destinations.`);
    return validationResults;
  }

  parseDestinationFile(content) {
    // Simplified parsing - extract basic destination info
    try {
      const cityMatch = content.match(/city:\s*['"]([^'"]+)['"]/);
      const countryMatch = content.match(/country:\s*['"]([^'"]+)['"]/);
      const overallScoreMatch = content.match(/overallScore:\s*(\d+)/);
      const currencyMatch = content.match(/currency:\s*['"]([^'"]+)['"]/);
      
      if (cityMatch && countryMatch) {
        return {
          city: cityMatch[1],
          country: countryMatch[1],
          overallScore: overallScoreMatch ? parseInt(overallScoreMatch[1]) : null,
          currency: currencyMatch ? currencyMatch[1] : null
        };
      }
    } catch (error) {
      console.warn('Failed to parse destination file:', error.message);
    }
    return null;
  }

  async generateValidationReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalDestinations: results.length,
        excellent: results.filter(r => r.dataQuality === 'excellent').length,
        good: results.filter(r => r.dataQuality === 'good').length,
        fair: results.filter(r => r.dataQuality === 'fair').length,
        poor: results.filter(r => r.dataQuality === 'poor').length
      },
      details: results,
      recommendations: this.consolidateRecommendations(results)
    };
    
    const reportPath = path.join(__dirname, '../validation-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📋 Validation report saved to: ${reportPath}`);
    
    // Generate human-readable summary
    console.log('\n📊 VALIDATION SUMMARY:');
    console.log(`Total Destinations: ${report.summary.totalDestinations}`);
    console.log(`Excellent Quality: ${report.summary.excellent}`);
    console.log(`Good Quality: ${report.summary.good}`);
    console.log(`Fair Quality: ${report.summary.fair}`);
    console.log(`Poor Quality: ${report.summary.poor}`);
  }

  consolidateRecommendations(results) {
    const consolidated = {};
    
    results.forEach(result => {
      result.recommendations.forEach(rec => {
        const key = `${rec.category}-${rec.type}`;
        if (!consolidated[key]) {
          consolidated[key] = {
            ...rec,
            count: 0,
            destinations: []
          };
        }
        consolidated[key].count++;
        consolidated[key].destinations.push(result.destination);
      });
    });
    
    return Object.values(consolidated);
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new ComprehensiveDataValidator();
  
  validator.validateAllDestinations()
    .then(() => {
      console.log('✅ Data validation completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Data validation failed:', error);
      process.exit(1);
    });
}

export default ComprehensiveDataValidator; 