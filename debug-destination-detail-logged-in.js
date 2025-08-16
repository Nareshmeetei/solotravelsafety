#!/usr/bin/env node

// Comprehensive debug script for destination detail page while logged in
import fs from 'fs';

console.log('🔍 DEBUGGING DESTINATION DETAIL PAGE (LOGGED IN)\n');

console.log('1️⃣ Checking DestinationDetail component structure...');

const destinationDetailPath = './src/pages/DestinationDetail.tsx';
if (fs.existsSync(destinationDetailPath)) {
  const content = fs.readFileSync(destinationDetailPath, 'utf8');
  
  // Check for auth imports
  console.log('Auth context usage:');
  if (content.includes("import { useAuth }")) {
    console.log('✅ useAuth imported');
  } else if (content.includes("// TODO: Import auth")) {
    console.log('❌ Auth context commented out - THIS IS THE ISSUE!');
  } else {
    console.log('❓ Auth context status unclear');
  }
  
  // Check for user variable
  if (content.includes('const user = null')) {
    console.log('❌ User hardcoded to null - THIS IS THE ISSUE!');
  } else if (content.includes('const { user }')) {
    console.log('✅ User from auth context');
  } else {
    console.log('❓ User variable not found');
  }
  
  // Check loading state
  if (content.includes('if (!destination || loading)')) {
    console.log('✅ Loading check includes loading state');
  } else if (content.includes('if (!destination)')) {
    console.log('⚠️ Loading check only checks destination');
  }
  
  // Check for route params
  if (content.includes('useParams')) {
    console.log('✅ Route parameters imported');
  } else {
    console.log('❌ Route parameters missing');
  }
  
} else {
  console.log('❌ DestinationDetail component not found');
}

console.log('\n2️⃣ Checking route configuration...');
const appPath = './src/App.tsx';
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  if (appContent.includes('/destination/:city/:country')) {
    console.log('✅ Destination detail route configured');
  } else {
    console.log('❌ Destination detail route missing');
  }
  
  if (appContent.includes('DestinationDetail')) {
    console.log('✅ DestinationDetail component imported in App');
  } else {
    console.log('❌ DestinationDetail not imported in App');
  }
} else {
  console.log('❌ App.tsx not found');
}

console.log('\n3️⃣ Checking destination data structure...');
const destinationIndexPath = './src/data/destinations/index.ts';
if (fs.existsSync(destinationIndexPath)) {
  const indexContent = fs.readFileSync(destinationIndexPath, 'utf8');
  
  if (indexContent.includes('getDestinationBySlug')) {
    console.log('✅ getDestinationBySlug function exported');
  } else {
    console.log('❌ getDestinationBySlug function missing');
  }
  
  // Check if function handles city/country params correctly
  const getDestinationPath = './src/data/destinations.ts';
  if (fs.existsSync(getDestinationPath)) {
    const getDestContent = fs.readFileSync(getDestinationPath, 'utf8');
    if (getDestContent.includes('getDestinationBySlug')) {
      console.log('✅ getDestinationBySlug implementation found');
    }
  }
} else {
  console.log('❌ Destination index not found');
}

console.log('\n🎯 LIKELY ISSUES:');
console.log('1. Auth context might be commented out (TODO comments)');
console.log('2. User variable might be hardcoded to null');
console.log('3. Component might not be handling logged-in state properly');
console.log('4. Route parameters might not be processed correctly');

console.log('\n🔧 NEXT STEPS:');
console.log('1. Enable auth context in DestinationDetail component');
console.log('2. Remove hardcoded user = null');
console.log('3. Add proper loading states for auth');
console.log('4. Test with actual destination URLs');

console.log('\n📝 TEST URLS TO TRY:');
console.log('- /destination/amsterdam/netherlands');
console.log('- /destination/tokyo/japan');
console.log('- /destination/paris/france');