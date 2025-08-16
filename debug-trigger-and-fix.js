#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqqgshyrxthrwchzcelg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzUxOTYsImV4cCI6MjA2Njg1MTE5Nn0.ZTAonkwcxUIHc0q28NIqPQd1yjzFJVCoQfHizL1oMII';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function debugTriggerAndFix() {
  console.log('🔍 DEBUGGING TRIGGER ISSUE\n');
  
  // Check for the user we just created
  const testUserId = 'bb20fe66-d720-40d0-9edd-4721496ebeb8';
  
  console.log('1️⃣ Checking if profile was created for test user...');
  try {
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', testUserId);
      
    if (error) {
      console.log('❌ Error querying profiles:', error.message);
    } else {
      console.log(`📊 Found ${profiles.length} profiles for user ${testUserId}`);
      if (profiles.length > 0) {
        console.table(profiles);
      } else {
        console.log('❌ No profile found - trigger definitely not working');
      }
    }
  } catch (error) {
    console.log('❌ Query failed:', error.message);
  }
  
  console.log('\n2️⃣ Manual profile creation test...');
  try {
    // Try to manually create a profile to test table access
    const { data: manualProfile, error: manualError } = await supabase
      .from('profiles')
      .insert({
        user_id: testUserId,
        full_name: 'Manual Test User',
        email: 'complete-flow-test-1755184903505@gmail.com',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();
      
    if (manualError) {
      console.log('❌ Manual profile creation failed:', manualError.message);
      console.log('This suggests a table permission or constraint issue');
    } else {
      console.log('✅ Manual profile creation successful!');
      console.log('Profile:', manualProfile);
      console.log('This means the table works but the trigger doesn\'t');
    }
  } catch (error) {
    console.log('❌ Manual creation error:', error.message);
  }
  
  console.log('\n🔧 FINAL DIAGNOSIS:');
  console.log('The database trigger is not executing properly.');
  console.log('Even though signup succeeds, no profile is created automatically.');
  console.log('\n💡 SOLUTION:');
  console.log('The trigger function needs to be recreated with proper permissions.');
  console.log('Run the FINAL trigger SQL in Supabase dashboard.');
}

debugTriggerAndFix().catch(console.error);