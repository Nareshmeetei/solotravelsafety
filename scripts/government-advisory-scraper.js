import https from 'https';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GovernmentAdvisoryScraper {
  constructor() {
    this.sources = {
      // US State Department Travel Advisories
      usState: {
        baseUrl: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html',
        apiUrl: 'https://travel.state.gov/bin/travel/traveladvisories.json',
        levels: {
          1: 'Exercise Normal Precautions',
          2: 'Exercise Increased Caution', 
          3: 'Reconsider Travel',
          4: 'Do Not Travel'
        }
      },
      
      // UK Foreign Office Travel Advice
      ukFCDO: {
        baseUrl: 'https://www.gov.uk/foreign-travel-advice',
        apiPattern: 'https://www.gov.uk/api/content/foreign-travel-advice/{country}',
        advisoryTypes: ['against-all-travel', 'against-all-but-essential-travel', 'parts-of-country']
      },
      
      // Canada Global Affairs Travel Advisories
      canadaGAC: {
        baseUrl: 'https://travel.gc.ca/travelling/advisories',
        apiUrl: 'https://travel.gc.ca/api/advisories.json',
        levels: {
          1: 'Exercise normal security precautions',
          2: 'Exercise a high degree of caution',
          3: 'Avoid non-essential travel',
          4: 'Avoid all travel'
        }
      },
      
      // Australia DFAT Travel Advisories
      australiaDFAT: {
        baseUrl: 'https://www.smartraveller.gov.au/destinations',
        levels: {
          1: 'Exercise normal safety precautions',
          2: 'Exercise a high degree of caution', 
          3: 'Reconsider your need to travel',
          4: 'Do not travel'
        }
      },
      
      // Germany Federal Foreign Office
      germanyAA: {
        baseUrl: 'https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/reise-und-sicherheitshinweise',
        levels: {
          'teilreisewarnung': 'Partial Travel Warning',
          'reisewarnung': 'Travel Warning',
          'sicherheitshinweis': 'Security Notice'
        }
      }
    };
    
    this.countryMappings = this.loadCountryMappings();
  }

  loadCountryMappings() {
    // Country name mappings for different government systems
    return {
      'South Korea': ['korea-south', 'republic-of-korea', 'south-korea'],
      'North Korea': ['korea-north', 'democratic-peoples-republic-of-korea'],
      'United States': ['usa', 'united-states-of-america'],
      'United Kingdom': ['uk', 'great-britain'],
      'Czech Republic': ['czechia'],
      'Myanmar': ['burma'],
      'Ivory Coast': ['cote-divoire'],
      'Democratic Republic of Congo': ['congo-democratic-republic', 'drc'],
      'Republic of Congo': ['congo-republic']
    };
  }

  async makeSecureRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
      const defaultOptions = {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate',
          'Connection': 'keep-alive'
        },
        timeout: 15000,
        ...options
      };

      const request = https.get(url, defaultOptions, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          try {
            resolve({
              statusCode: response.statusCode,
              data: data,
              headers: response.headers,
              url: url
            });
          } catch (error) {
            reject(error);
          }
        });
      });
      
      request.on('error', (error) => {
        reject(new Error(`Request failed for ${url}: ${error.message}`));
      });
      
      request.setTimeout(defaultOptions.timeout, () => {
        request.destroy();
        reject(new Error(`Request timeout for ${url}`));
      });
    });
  }

  normalizeCountryName(country, system = 'general') {
    const normalized = country.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    
    // Check for specific mappings
    for (const [standard, variants] of Object.entries(this.countryMappings)) {
      if (standard.toLowerCase() === country.toLowerCase() || 
          variants.some(variant => variant.toLowerCase() === normalized)) {
        return system === 'uk' ? variants[0] || normalized : normalized;
      }
    }
    
    return normalized;
  }

  async scrapeUSStateAdvisories() {
    console.log('🇺🇸 Scraping US State Department travel advisories...');
    
    try {
      const response = await this.makeSecureRequest(this.sources.usState.apiUrl);
      
      if (response.statusCode === 200) {
        const data = JSON.parse(response.data);
        const advisories = {};
        
        if (data && data.data) {
          for (const advisory of data.data) {
            const country = advisory.country_name;
            const level = advisory.travel_advisory_level;
            const levelText = this.sources.usState.levels[level] || `Level ${level}`;
            
            advisories[country] = {
              level: level,
              levelText: levelText,
              summary: advisory.travel_advisory_summary || '',
              lastUpdated: advisory.date_updated || new Date().toISOString(),
              url: `https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/${this.normalizeCountryName(country)}-travel-advisory.html`,
              source: 'US State Department'
            };
          }
        }
        
        console.log(`✅ Retrieved ${Object.keys(advisories).length} US State Department advisories`);
        return advisories;
      }
    } catch (error) {
      console.error('❌ Failed to scrape US State Department advisories:', error.message);
    }
    
    return {};
  }

  async scrapeUKFCDOAdvisories() {
    console.log('🇬🇧 Scraping UK FCDO travel advice...');
    
    const advisories = {};
    const commonCountries = [
      'france', 'germany', 'spain', 'italy', 'greece', 'turkey', 'egypt',
      'thailand', 'india', 'china', 'japan', 'australia', 'usa', 'mexico',
      'brazil', 'argentina', 'south-africa', 'kenya', 'morocco', 'vietnam'
    ];
    
    let successful = 0;
    
    for (const country of commonCountries) {
      try {
        const url = this.sources.ukFCDO.apiPattern.replace('{country}', country);
        const response = await this.makeSecureRequest(url);
        
        if (response.statusCode === 200) {
          const data = JSON.parse(response.data);
          
          if (data && data.details && data.details.country && data.details.country.name) {
            const countryName = data.details.country.name;
            const parts = data.details.parts || [];
            
            let advisoryLevel = 'Normal';
            let summary = '';
            
            // Check for travel advice warnings
            for (const part of parts) {
              if (part.slug === 'warnings' && part.body) {
                summary = this.extractTextFromHTML(part.body);
                if (summary.toLowerCase().includes('against all travel')) {
                  advisoryLevel = 'Against All Travel';
                } else if (summary.toLowerCase().includes('against all but essential travel')) {
                  advisoryLevel = 'Against All But Essential Travel';
                } else if (summary.toLowerCase().includes('parts of')) {
                  advisoryLevel = 'Parts of Country';
                }
                break;
              }
            }
            
            advisories[countryName] = {
              level: advisoryLevel,
              summary: summary.substring(0, 500) + (summary.length > 500 ? '...' : ''),
              lastUpdated: data.updated_at || new Date().toISOString(),
              url: `https://www.gov.uk/foreign-travel-advice/${country}`,
              source: 'UK FCDO'
            };
            
            successful++;
          }
        }
        
        // Rate limiting - delay between requests
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error) {
        console.warn(`⚠️  Failed to get UK advice for ${country}:`, error.message);
      }
    }
    
    console.log(`✅ Retrieved ${successful} UK FCDO travel advisories`);
    return advisories;
  }

  async scrapeCanadaAdvisories() {
    console.log('🇨🇦 Scraping Canada GAC travel advisories...');
    
    try {
      const response = await this.makeSecureRequest(this.sources.canadaGAC.apiUrl);
      
      if (response.statusCode === 200) {
        const data = JSON.parse(response.data);
        const advisories = {};
        
        if (data && data.advisories) {
          for (const advisory of data.advisories) {
            const country = advisory.country;
            const level = advisory.advisory_level;
            const levelText = this.sources.canadaGAC.levels[level] || `Level ${level}`;
            
            advisories[country] = {
              level: level,
              levelText: levelText,
              summary: advisory.advisory_text || '',
              lastUpdated: advisory.date_modified || new Date().toISOString(),
              url: `https://travel.gc.ca/destinations/${this.normalizeCountryName(country)}`,
              source: 'Canada GAC'
            };
          }
        }
        
        console.log(`✅ Retrieved ${Object.keys(advisories).length} Canada GAC advisories`);
        return advisories;
      }
    } catch (error) {
      console.error('❌ Failed to scrape Canada GAC advisories:', error.message);
    }
    
    return {};
  }

  async scrapeAustraliaAdvisories() {
    console.log('🇦🇺 Scraping Australia DFAT travel advisories...');
    
    // Note: Australia DFAT doesn't have a public API
    // This would require web scraping their main page
    // For now, returning sample data structure
    
    try {
      const response = await this.makeSecureRequest(this.sources.australiaDFAT.baseUrl);
      
      if (response.statusCode === 200) {
        // Parse HTML would go here
        // For demonstration, returning sample structure
        console.log('⚠️  Australia DFAT scraping requires HTML parsing - returning sample data');
        
        return {
          'Sample Country': {
            level: 2,
            levelText: 'Exercise a high degree of caution',
            summary: 'Sample advisory text',
            lastUpdated: new Date().toISOString(),
            url: 'https://www.smartraveller.gov.au/destinations/sample-country',
            source: 'Australia DFAT'
          }
        };
      }
    } catch (error) {
      console.error('❌ Failed to scrape Australia DFAT advisories:', error.message);
    }
    
    return {};
  }

  extractTextFromHTML(html) {
    // Simple HTML tag removal
    return html
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  async consolidateAdvisories() {
    console.log('\n🌍 Consolidating government travel advisories...');
    
    const allAdvisories = {};
    
    // Scrape all sources in parallel
    const [usAdvisories, ukAdvisories, canadaAdvisories, australiaAdvisories] = await Promise.allSettled([
      this.scrapeUSStateAdvisories(),
      this.scrapeUKFCDOAdvisories(),
      this.scrapeCanadaAdvisories(),
      this.scrapeAustraliaAdvisories()
    ]);
    
    // Consolidate results
    const sources = [
      { name: 'US', data: usAdvisories.status === 'fulfilled' ? usAdvisories.value : {} },
      { name: 'UK', data: ukAdvisories.status === 'fulfilled' ? ukAdvisories.value : {} },
      { name: 'Canada', data: canadaAdvisories.status === 'fulfilled' ? canadaAdvisories.value : {} },
      { name: 'Australia', data: australiaAdvisories.status === 'fulfilled' ? australiaAdvisories.value : {} }
    ];
    
    // Create unified country advisories
    const allCountries = new Set();
    sources.forEach(source => {
      Object.keys(source.data).forEach(country => allCountries.add(country));
    });
    
    for (const country of allCountries) {
      const countryAdvisories = {};
      let highestRiskLevel = 0;
      let consensusLevel = null;
      
      sources.forEach(source => {
        if (source.data[country]) {
          countryAdvisories[source.name.toLowerCase()] = source.data[country];
          
          // Track highest risk level
          const level = typeof source.data[country].level === 'number' 
            ? source.data[country].level 
            : this.convertLevelToNumber(source.data[country].level);
          
          if (level > highestRiskLevel) {
            highestRiskLevel = level;
            consensusLevel = source.data[country];
          }
        }
      });
      
      allAdvisories[country] = {
        consensus: consensusLevel,
        sources: countryAdvisories,
        lastUpdated: new Date().toISOString(),
        riskLevel: highestRiskLevel,
        sourceCount: Object.keys(countryAdvisories).length
      };
    }
    
    console.log(`\n📊 Consolidated advisories for ${allCountries.size} countries`);
    return allAdvisories;
  }

  convertLevelToNumber(level) {
    if (typeof level === 'number') return level;
    
    const levelStr = level.toLowerCase();
    if (levelStr.includes('normal') || levelStr.includes('level 1')) return 1;
    if (levelStr.includes('caution') || levelStr.includes('level 2')) return 2;
    if (levelStr.includes('reconsider') || levelStr.includes('level 3')) return 3;
    if (levelStr.includes('not travel') || levelStr.includes('level 4')) return 4;
    
    return 1; // Default to lowest level
  }

  async updateDestinationAdvisories() {
    console.log('\n🔄 Updating destination files with latest government advisories...');
    
    const advisories = await this.consolidateAdvisories();
    const destinationsPath = path.join(__dirname, '../src/data/destinations');
    
    try {
      const files = await fs.readdir(destinationsPath);
      const destinationFiles = files.filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'types.ts');
      
      let updatedCount = 0;
      
      for (const file of destinationFiles) {
        try {
          const filePath = path.join(destinationsPath, file);
          let content = await fs.readFile(filePath, 'utf-8');
          
          // Extract country name
          const countryMatch = content.match(/country:\s*['"]([^'"]+)['"]/);
          if (!countryMatch) continue;
          
          const country = countryMatch[1];
          const advisory = this.findAdvisoryForCountry(country, advisories);
          
          if (advisory) {
            // Update or add government advisory section
            const advisoryData = {
              level: advisory.consensus?.level || 1,
              summary: advisory.consensus?.summary || '',
              lastUpdated: advisory.lastUpdated,
              sources: Object.keys(advisory.sources)
            };
            
            // Insert or update advisory data in file
            content = this.updateAdvisoryInFile(content, advisoryData);
            await fs.writeFile(filePath, content);
            updatedCount++;
            
            console.log(`✅ Updated ${country} with latest advisory (Level ${advisoryData.level})`);
          }
        } catch (error) {
          console.error(`❌ Error updating ${file}:`, error.message);
        }
      }
      
      console.log(`\n🎉 Updated ${updatedCount} destination files with government advisories`);
      
    } catch (error) {
      console.error('❌ Error updating destination advisories:', error);
    }
  }

  findAdvisoryForCountry(country, advisories) {
    // Direct match
    if (advisories[country]) {
      return advisories[country];
    }
    
    // Fuzzy match
    const normalizedCountry = country.toLowerCase();
    for (const [advisoryCountry, data] of Object.entries(advisories)) {
      if (advisoryCountry.toLowerCase().includes(normalizedCountry) ||
          normalizedCountry.includes(advisoryCountry.toLowerCase())) {
        return data;
      }
    }
    
    return null;
  }

  updateAdvisoryInFile(content, advisoryData) {
    const advisorySection = `
  governmentAdvisory: {
    level: ${advisoryData.level},
    summary: \`${advisoryData.summary.replace(/`/g, '\\`')}\`,
    lastUpdated: '${advisoryData.lastUpdated}',
    sources: [${advisoryData.sources.map(s => `'${s}'`).join(', ')}]
  },`;
    
    // Check if advisory section already exists
    if (content.includes('governmentAdvisory:')) {
      // Replace existing section
      content = content.replace(
        /governmentAdvisory:\s*{[^}]*},?/s,
        advisorySection.trim()
      );
    } else {
      // Add new section before the closing bracket
      const insertPos = content.lastIndexOf('};');
      if (insertPos !== -1) {
        content = content.slice(0, insertPos) + advisorySection + '\n' + content.slice(insertPos);
      }
    }
    
    return content;
  }

  async generateAdvisoryReport(advisories) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalCountries: Object.keys(advisories).length,
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        sourceCoverage: {}
      },
      advisories: advisories
    };
    
    // Calculate statistics
    Object.values(advisories).forEach(advisory => {
      const level = advisory.riskLevel;
      report.summary[`level${level}`]++;
      
      Object.keys(advisory.sources).forEach(source => {
        report.summary.sourceCoverage[source] = (report.summary.sourceCoverage[source] || 0) + 1;
      });
    });
    
    const reportPath = path.join(__dirname, '../government-advisories-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📋 Government advisories report saved to: ${reportPath}`);
    console.log('\n📊 ADVISORY SUMMARY:');
    console.log(`Total Countries: ${report.summary.totalCountries}`);
    console.log(`Level 1 (Normal): ${report.summary.level1}`);
    console.log(`Level 2 (Caution): ${report.summary.level2}`);
    console.log(`Level 3 (Reconsider): ${report.summary.level3}`);
    console.log(`Level 4 (Do Not Travel): ${report.summary.level4}`);
    console.log('Source Coverage:', report.summary.sourceCoverage);
  }

  async run() {
    console.log('🏛️  Government Advisory Scraper Starting...\n');
    
    try {
      const advisories = await this.consolidateAdvisories();
      await this.generateAdvisoryReport(advisories);
      await this.updateDestinationAdvisories();
      
      console.log('\n✅ Government advisory scraping completed successfully!');
      return advisories;
      
    } catch (error) {
      console.error('\n❌ Government advisory scraping failed:', error);
      throw error;
    }
  }
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const scraper = new GovernmentAdvisoryScraper();
  
  scraper.run()
    .then(() => {
      console.log('🎉 All done!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Failed:', error);
      process.exit(1);
    });
}

export default GovernmentAdvisoryScraper; 