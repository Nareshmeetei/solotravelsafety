#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqqgshyrxthrwchzcelg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzUxOTYsImV4cCI6MjA2Njg1MTE5Nn0.ZTAonkwcxUIHc0q28NIqPQd1yjzFJVCoQfHizL1oMII';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkTriggerIssue() {
  console.log('🔍 CHECKING TRIGGER ISSUE\n');

  // Check if there are duplicate profiles for the same user_id
  console.log('1️⃣ Checking for duplicate profiles...');
  
  try {
    // Get the latest user from our previous test
    const testUserId = '5b895f3c-3b33-43bd-84d9-b9414a524f45';
    
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', testUserId);

    if (error) {
      console.log('❌ Profile query failed:', error.message);
    } else {
      console.log(`📊 Found ${profiles.length} profiles for user ${testUserId}:`);
      profiles.forEach((profile, index) => {
        console.log(`Profile ${index + 1}:`, {
          id: profile.id,
          user_id: profile.user_id,
          full_name: profile.full_name,
          created_at: profile.created_at
        });
      });
      
      if (profiles.length > 1) {
        console.log('⚠️  DUPLICATE PROFILES DETECTED - This is causing the query error!');
      } else if (profiles.length === 0) {
        console.log('⚠️  NO PROFILE FOUND - Trigger might not be working');
      } else {
        console.log('✅ Single profile found - trigger working correctly');
      }
    }
  } catch (error) {
    console.log('❌ Profile check failed:', error.message);
  }

  // Check for any profiles with duplicate user_ids
  console.log('\n2️⃣ Checking for any duplicate user_ids in profiles table...');
  
  try {
    const { data: allProfiles, error } = await supabase
      .from('profiles')
      .select('user_id, count(*)', { count: 'exact' });

    if (error) {
      console.log('❌ Duplicate check failed:', error.message);
    } else {
      // Group by user_id to find duplicates
      const userIdCounts = {};
      for (const profile of allProfiles || []) {
        if (profile.user_id) {
          userIdCounts[profile.user_id] = (userIdCounts[profile.user_id] || 0) + 1;
        }
      }
      
      const duplicates = Object.entries(userIdCounts).filter(([userId, count]) => count > 1);
      
      if (duplicates.length > 0) {
        console.log('❌ FOUND DUPLICATES:', duplicates);
      } else {
        console.log('✅ No duplicates found in user_id column');
      }
    }
  } catch (error) {
    console.log('❌ Duplicate check failed:', error.message);
  }

  console.log('\n🔧 THE ISSUE:');
  console.log('The trigger might be creating duplicate profiles or');
  console.log('there is an issue with the unique constraint on user_id');
  console.log('\n💡 SOLUTION:');
  console.log('We need to fix the trigger to handle conflicts properly');
}

checkTriggerIssue().catch(console.error);