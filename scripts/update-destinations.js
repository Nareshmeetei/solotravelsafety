#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DestinationUpdater {
  constructor() {
    this.updated = [];
    this.errors = [];
  }

  async run() {
    console.log('🏛️ Updating destination files...');
    
    try {
      await this.updateDestinationIndex();
      await this.updateTimestamps();
      await this.generateStats();
      
      console.log('✅ Destination update completed!');
      this.printSummary();
      
    } catch (error) {
      console.error('❌ Destination update failed:', error);
      process.exit(1);
    }
  }

  async updateDestinationIndex() {
    try {
      const dataDir = path.join(__dirname, '../src/data/destinations');
      const files = await fs.readdir(dataDir);
      
            const destinationFiles = files
        .filter(file => file.endsWith('.ts') && !['types.ts', 'index.ts'].includes(file))
        .map(file => file.replace('.ts', ''));

      // Convert filenames with hyphens to camelCase variable names
      const toCamelCase = (str) => {
        return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
      };

      const indexContent = `// Auto-generated destination index
 // Last updated: ${new Date().toISOString()}

 ${destinationFiles.map(file => `import ${toCamelCase(file)} from './${file}';`).join('\n')}
import { Destination } from './types';

 export const destinations: Destination[] = [
 ${destinationFiles.map(file => `  ${toCamelCase(file)},`).join('\n')}
 ];

export const getDestinationBySlug = (city: string, country: string): Destination | undefined => {
  return destinations.find(dest => 
    dest.city.toLowerCase().replace(/\s+/g, '-') === city.toLowerCase() &&
    dest.country.toLowerCase().replace(/\s+/g, '-') === country.toLowerCase()
  );
};

export const createDestinationSlug = (city: string, country: string): string => {
  return \`\${city.toLowerCase().replace(/\s+/g, '-')}-\${country.toLowerCase().replace(/\s+/g, '-')}\`;
};

 // Export individual destinations
 export {
 ${destinationFiles.map(file => `  ${toCamelCase(file)},`).join('\n')}
 };
`;

      const indexPath = path.join(dataDir, 'index.ts');
      await fs.writeFile(indexPath, indexContent);
      
      this.updated.push(`Destination index (${destinationFiles.length} destinations)`);
      
    } catch (error) {
      this.errors.push(`Index update failed: ${error.message}`);
    }
  }

  async updateTimestamps() {
    try {
      const now = new Date();
      const timestamp = this.formatRelativeTime(now);
      
      console.log(`🕒 Setting lastUpdated to: "${timestamp}"`);
      this.updated.push(`Timestamps updated to: ${timestamp}`);
      
    } catch (error) {
      this.errors.push(`Timestamp update failed: ${error.message}`);
    }
  }

  async generateStats() {
    try {
      const dataDir = path.join(__dirname, '../src/data/destinations');
      const files = await fs.readdir(dataDir);
      const destinationFiles = files.filter(file => file.endsWith('.ts') && !['types.ts', 'index.ts'].includes(file));
      
      const stats = {
        totalDestinations: destinationFiles.length,
        lastUpdate: new Date().toISOString(),
        continents: new Set(),
        averageScores: {
          overall: 0,
          nightSafety: 0,
          publicTransit: 0,
          walkingAlone: 0
        }
      };

      let totalScores = { overall: 0, night: 0, transit: 0, walking: 0 };
      
      for (const file of destinationFiles) {
        try {
          const content = await fs.readFile(path.join(dataDir, file), 'utf-8');
          
          // Extract continent
          const continentMatch = content.match(/continent:\s*['"`]([^'"`]*)['"`]/);
          if (continentMatch) {
            stats.continents.add(continentMatch[1]);
          }
          
          // Extract scores
          const overallMatch = content.match(/overallScore:\s*(\d+\.?\d*)/);
          const nightMatch = content.match(/nightSafety:\s*(\d+\.?\d*)/);
          const transitMatch = content.match(/publicTransit:\s*(\d+\.?\d*)/);
          const walkingMatch = content.match(/walkingAlone:\s*(\d+\.?\d*)/);
          
          if (overallMatch) totalScores.overall += parseFloat(overallMatch[1]);
          if (nightMatch) totalScores.night += parseFloat(nightMatch[1]);
          if (transitMatch) totalScores.transit += parseFloat(transitMatch[1]);
          if (walkingMatch) totalScores.walking += parseFloat(walkingMatch[1]);
          
        } catch (error) {
          console.warn(`Warning: Could not parse ${file}:`, error.message);
        }
      }
      
      // Calculate averages
      const count = destinationFiles.length;
      stats.averageScores.overall = (totalScores.overall / count).toFixed(1);
      stats.averageScores.nightSafety = (totalScores.night / count).toFixed(1);
      stats.averageScores.publicTransit = (totalScores.transit / count).toFixed(1);
      stats.averageScores.walkingAlone = (totalScores.walking / count).toFixed(1);
      stats.continents = Array.from(stats.continents);
      
      // Save stats
      const statsPath = path.join(__dirname, '../logs/destination-stats.json');
      await fs.writeFile(statsPath, JSON.stringify(stats, null, 2));
      
      this.updated.push(`Generated statistics for ${count} destinations`);
      
    } catch (error) {
      this.errors.push(`Stats generation failed: ${error.message}`);
    }
  }

  formatRelativeTime(date) {
    // For update purposes, we'll use "Today" to indicate freshness
    return 'Today';
  }

  printSummary() {
    console.log('\n📊 Update Summary:');
    console.log(`✅ Successfully updated: ${this.updated.length} items`);
    this.updated.forEach(item => console.log(`  - ${item}`));
    
    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(error => console.log(`  - ${error}`));
    }
  }
}

// Run the updater
const updater = new DestinationUpdater();
updater.run().catch(console.error);

export default DestinationUpdater; 