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

async function testNewsletterFunctionality() {
  console.log('🧪 Testing Newsletter Functionality...\n');

  try {
    // Test 1: Check if table exists and get current signups
    console.log('1. Checking existing newsletter signups...');
    const { data: existingSignups, error: fetchError } = await supabase
      .from('newsletter_signups')
      .select('*')
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('❌ Error fetching existing signups:', fetchError);
      console.log('💡 This might mean the table doesn\'t exist yet. Run the migration first!');
    } else {
      console.log(`✅ Found ${existingSignups.length} existing signups`);
      if (existingSignups.length > 0) {
        console.log('Recent signups:');
        existingSignups.slice(0, 3).forEach(signup => {
          console.log(`   - ${signup.email} (${new Date(signup.created_at).toLocaleDateString()})`);
        });
      }
    }

    // Test 2: Add a new newsletter signup
    console.log('\n2. Testing newsletter signup...');
    const testEmail = `test-${Date.now()}@example.com`;
    const { data: newSignup, error: insertError } = await supabase
      .from('newsletter_signups')
      .insert([{ email: testEmail }])
      .select()
      .single();

    if (insertError) {
      console.error('❌ Error adding newsletter signup:', insertError);
      if (insertError.code === 'PGRST116') {
        console.log('💡 This might mean the table doesn\'t exist. Run the migration first!');
      }
    } else {
      console.log('✅ Newsletter signup added successfully:', newSignup);
    }

    // Test 3: Try to add duplicate email (should fail gracefully)
    console.log('\n3. Testing duplicate email handling...');
    const { data: duplicateSignup, error: duplicateError } = await supabase
      .from('newsletter_signups')
      .insert([{ email: testEmail }])
      .select()
      .single();

    if (duplicateError) {
      console.log('✅ Duplicate email properly rejected:', duplicateError.message);
    } else {
      console.log('⚠️  Duplicate email was allowed (this might be expected)');
    }

    // Test 4: Get updated signup count
    console.log('\n4. Getting updated signup count...');
    const { data: updatedSignups, error: countError } = await supabase
      .from('newsletter_signups')
      .select('*', { count: 'exact' });

    if (countError) {
      console.error('❌ Error getting signup count:', countError);
    } else {
      console.log(`✅ Total newsletter signups: ${updatedSignups.length}`);
    }

    console.log('\n🎉 Newsletter functionality test completed!');
    console.log('\nNext steps:');
    console.log('1. If you see errors, run the migration in Supabase dashboard');
    console.log('2. Test the newsletter form on your website');
    console.log('3. Check the MCP test page to see the data');

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Run the test
testNewsletterFunctionality(); 