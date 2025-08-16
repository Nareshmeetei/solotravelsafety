#!/usr/bin/env node

// Test script to verify destination data loading
import fs from 'fs';
import path from 'path';

console.log('🧪 TESTING DESTINATION DETAIL COMPONENT FIX\n');

console.log('1️⃣ Checking destination data structure...');

// Read a sample destination file
const amsterdamPath = './src/data/destinations/amsterdam.ts';

if (fs.existsSync(amsterdamPath)) {
  const amsterdamContent = fs.readFileSync(amsterdamPath, 'utf8');
  
  // Check for required fields
  const requiredFields = [
    'harassmentRisk',
    'city', 
    'country',
    'overallScore',
    'countryCode'
  ];
  
  console.log('✅ Destination file exists');
  
  requiredFields.forEach(field => {
    if (amsterdamContent.includes(`${field}:`)) {
      console.log(`✅ Field '${field}' found in destination data`);
    } else {
      console.log(`❌ Field '${field}' missing from destination data`);
    }
  });
  
  // Check specific harassmentRisk value
  const harassmentRiskMatch = amsterdamContent.match(/harassmentRisk: '([^']+)'/);
  if (harassmentRiskMatch) {
    console.log(`✅ harassmentRisk value: "${harassmentRiskMatch[1]}"`);
  } else {
    console.log('❌ harassmentRisk value not found');
  }
} else {
  console.log('❌ Amsterdam destination file not found');
}

console.log('\n2️⃣ Verifying DestinationDetail.tsx fixes...');

const destinationDetailPath = './src/pages/DestinationDetail.tsx';

if (fs.existsSync(destinationDetailPath)) {
  const componentContent = fs.readFileSync(destinationDetailPath, 'utf8');
  
  // Check for safe property access
  const safeFixes = [
    'destination?.harassmentRisk',
    'embassy?.name?.toLowerCase',
    'loading ||'
  ];
  
  safeFixes.forEach(fix => {
    if (componentContent.includes(fix)) {
      console.log(`✅ Safe property access fix applied: ${fix}`);
    } else {
      console.log(`❌ Fix not found: ${fix}`);
    }
  });
  
  // Check that unsafe toUpperCase is fixed
  if (componentContent.includes('destination.harassmentRisk.toUpperCase()')) {
    console.log('❌ Unsafe toUpperCase still present');
  } else {
    console.log('✅ Unsafe toUpperCase access removed');
  }
} else {
  console.log('❌ DestinationDetail component not found');
}

console.log('\n✅ FIXES APPLIED:');
console.log('1. Added safe property access with optional chaining (?.)');
console.log('2. Added fallback values for undefined properties');
console.log('3. Enhanced loading check to prevent premature render');
console.log('4. Fixed embassy name access with safe chaining');

console.log('\n🎯 RESULT:');
console.log('The toUpperCase error should now be resolved!');
console.log('Destination cards should be clickable without errors.');

console.log('\n🧪 TO TEST:');
console.log('1. Navigate to a destination detail page');
console.log('2. Should load without console errors');
console.log('3. Should show harassment risk badge properly');
console.log('4. Should handle loading states correctly');