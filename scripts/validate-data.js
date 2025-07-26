#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DataValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.validated = 0;
  }

  async validate() {
    console.log('🔍 Starting data validation...');
    
    try {
      const destinationFiles = await this.getDestinationFiles();
      
      for (const file of destinationFiles) {
        await this.validateDestinationFile(file);
      }
      
      this.printResults();
      
      if (this.errors.length > 0) {
        process.exit(1);
      }
      
    } catch (error) {
      console.error('❌ Validation failed:', error);
      process.exit(1);
    }
  }

  async getDestinationFiles() {
    const dataDir = path.join(__dirname, '../src/data/destinations');
    const files = await fs.readdir(dataDir);
    return files
      .filter(file => file.endsWith('.ts') && !['types.ts', 'index.ts'].includes(file))
      .map(file => path.join(dataDir, file));
  }

  async validateDestinationFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const fileName = path.basename(filePath);
      
      // Required fields validation
      const requiredFields = [
        'city', 'country', 'continent', 'countryCode', 'overallScore',
        'nightSafety', 'publicTransit', 'walkingAlone', 'lastUpdated',
        'reviewCount', 'currency', 'emergencyInfo'
      ];
      
      for (const field of requiredFields) {
        if (!content.includes(`${field}:`)) {
          this.addError(fileName, `Missing required field: ${field}`);
        }
      }
      
      // Score validation (should be between 0 and 10)
      const scoreFields = ['overallScore', 'nightSafety', 'publicTransit', 'walkingAlone'];
      for (const field of scoreFields) {
        const match = content.match(new RegExp(`${field}:\\s*(\\d+\\.?\\d*)`));
        if (match) {
          const score = parseFloat(match[1]);
          if (score < 0 || score > 10) {
            this.addError(fileName, `Invalid ${field}: ${score} (should be 0-10)`);
          }
        }
      }
      
      // Currency validation
      if (content.includes('currency:')) {
        if (!content.includes('exchangeRate:')) {
          this.addWarning(fileName, 'Missing exchange rate data');
        }
        
        const codeMatch = content.match(/code:\s*['"`]([A-Z]{3})['"`]/);
        if (!codeMatch) {
          this.addError(fileName, 'Missing or invalid currency code');
        }
      }
      
      // Emergency info validation
      const emergencyFields = ['police', 'fire', 'medical', 'general'];
      for (const field of emergencyFields) {
        if (!content.includes(`${field}:`)) {
          this.addWarning(fileName, `Missing emergency ${field} number`);
        }
      }
      
      // Last updated validation
      const lastUpdatedMatch = content.match(/lastUpdated:\s*['"`]([^'"`]*)['"`]/);
      if (lastUpdatedMatch) {
        const lastUpdated = lastUpdatedMatch[1];
        if (!lastUpdated || lastUpdated === 'undefined') {
          this.addError(fileName, 'Invalid lastUpdated value');
        }
      }
      
      this.validated++;
      
    } catch (error) {
      this.addError(path.basename(filePath), `File read error: ${error.message}`);
    }
  }

  addError(file, message) {
    this.errors.push(`${file}: ${message}`);
  }

  addWarning(file, message) {
    this.warnings.push(`${file}: ${message}`);
  }

  printResults() {
    console.log(`\n📊 Validation Results:`);
    console.log(`✅ Files validated: ${this.validated}`);
    console.log(`⚠️  Warnings: ${this.warnings.length}`);
    console.log(`❌ Errors: ${this.errors.length}`);
    
    if (this.warnings.length > 0) {
      console.log('\nWarnings:');
      this.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    if (this.errors.length > 0) {
      console.log('\nErrors:');
      this.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('🎉 All destination data is valid!');
    }
  }
}

// Run validation
const validator = new DataValidator();
validator.validate().catch(console.error);

export default DataValidator; 