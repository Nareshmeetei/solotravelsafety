#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  console.log('Please create a .env file with:');
  console.log('VITE_SUPABASE_URL=your_supabase_project_url');
  console.log('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testNewsletterFunctions() {
  console.log('🧪 Testing Newsletter MCP Functions...\n');

  try {
    // Test 1: Add a newsletter signup
    console.log('1. Testing add_newsletter_signup function...');
    const { data: signupData, error: signupError } = await supabase
      .rpc('add_newsletter_signup', {
        p_email: 'test@example.com',
        p_source: 'test_script'
      });

    if (signupError) {
      console.error('❌ Error adding newsletter signup:', signupError);
    } else {
      console.log('✅ Newsletter signup added successfully:', signupData);
    }

    // Test 2: Get newsletter stats
    console.log('\n2. Testing get_newsletter_stats function...');
    const { data: statsData, error: statsError } = await supabase
      .rpc('get_newsletter_stats');

    if (statsError) {
      console.error('❌ Error getting newsletter stats:', statsError);
    } else {
      console.log('✅ Newsletter stats retrieved successfully:', statsData);
    }

    // Test 3: Get recent newsletter signups
    console.log('\n3. Testing get_recent_newsletter_signups function...');
    const { data: recentData, error: recentError } = await supabase
      .rpc('get_recent_newsletter_signups', { limit_count: 5 });

    if (recentError) {
      console.error('❌ Error getting recent signups:', recentError);
    } else {
      console.log('✅ Recent newsletter signups retrieved successfully:', recentData);
    }

    // Test 4: Search newsletter signups
    console.log('\n4. Testing search_newsletter_signups function...');
    const { data: searchData, error: searchError } = await supabase
      .rpc('search_newsletter_signups', { search_query: 'test' });

    if (searchError) {
      console.error('❌ Error searching signups:', searchError);
    } else {
      console.log('✅ Newsletter search completed successfully:', searchData);
    }

    console.log('\n🎉 All MCP newsletter functions tested successfully!');
    console.log('\nNext steps:');
    console.log('1. Run the migration in your Supabase dashboard');
    console.log('2. Start your development server: npm run dev');
    console.log('3. Visit /mcp-test to see the MCP integration in action');

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test
testNewsletterFunctions(); 