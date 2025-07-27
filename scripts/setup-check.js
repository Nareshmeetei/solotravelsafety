#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

console.log('🔧 Solo Travel Safety - Development Environment Setup Check\n');

// Check if .env file exists
const envPath = path.join(projectRoot, '.env');
const envExamplePath = path.join(projectRoot, '.env.example');

function createEnvExample() {
  const envExampleContent = `# Solo Travel Safety - Environment Variables
# Copy this file to .env and fill in your actual values

# Supabase Configuration (Required)
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Optional API Keys for Enhanced Features
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
VITE_WEATHERAPI_KEY=your_weatherapi_key_here

# Additional Service Keys (Optional)
EXCHANGE_RATE_API_KEY=your_exchange_rate_api_key
FIXER_API_KEY=your_fixer_api_key
CURRENCY_LAYER_API_KEY=your_currency_layer_api_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Security Configuration
ALLOWED_ORIGIN=http://localhost:5173

# Development Settings
NODE_ENV=development
`;

  fs.writeFileSync(envExamplePath, envExampleContent);
  console.log('✅ Created .env.example file');
}

function createDefaultEnv() {
  const defaultEnvContent = `# Solo Travel Safety - Environment Variables
# Fill in your actual Supabase credentials below

# Supabase Configuration (Required for the app to work)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Optional API Keys (App works without these)
VITE_OPENWEATHER_API_KEY=
VITE_WEATHERAPI_KEY=

# Development Settings
NODE_ENV=development
ALLOWED_ORIGIN=http://localhost:5173
`;

  fs.writeFileSync(envPath, defaultEnvContent);
  console.log('✅ Created default .env file');
  console.log('⚠️  Please update the Supabase credentials in .env file');
}

// Create .env.example if it doesn't exist
if (!fs.existsSync(envExamplePath)) {
  createEnvExample();
}

// Check .env file
if (!fs.existsSync(envPath)) {
  console.log('⚠️  No .env file found. Creating default .env file...');
  createDefaultEnv();
} else {
  console.log('✅ .env file exists');
  
  // Check if essential variables are configured
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasSupabaseUrl = envContent.includes('VITE_SUPABASE_URL=') && !envContent.includes('your-project.supabase.co');
  const hasSupabaseKey = envContent.includes('VITE_SUPABASE_ANON_KEY=') && !envContent.includes('your-anon-key-here');
  
  if (!hasSupabaseUrl || !hasSupabaseKey) {
    console.log('⚠️  Supabase credentials not configured in .env file');
    console.log('📝 Please update VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env');
  } else {
    console.log('✅ Supabase credentials configured');
  }
}

// Check node_modules
if (!fs.existsSync(path.join(projectRoot, 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit', cwd: projectRoot });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies installed');
}

// Check if dev server is already running (Windows compatible)
try {
  const response = await fetch('http://localhost:5173').catch(() => null);
  if (response && response.ok) {
    console.log('✅ Development server is already running at http://localhost:5173');
  } else {
    throw new Error('Server not running');
  }
} catch (error) {
  console.log('🚀 Development server will start automatically...');
}

console.log('\n🎉 Setup check complete!');
console.log('📖 Next steps:');
console.log('   1. Update .env with your Supabase credentials');
console.log('   2. Visit http://localhost:5173 when the dev server starts');
console.log('   3. Test MCP integration at http://localhost:5173/mcp-test');
console.log('\n💡 Tip: The development server should start automatically!'); 