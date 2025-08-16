#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqqgshyrxthrwchzcelg.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTI3NTE5NiwiZXhwIjoyMDY2ODUxMTk2fQ.C2-IYKW4iYGhHfCu6qOLlS4VFHJdyFCR7Xqd7EJosSY';

// Use service role key to check database structure
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkDatabaseState() {
  console.log('🔍 CHECKING DATABASE STATE\n');
  
  // 1. Check profiles table structure
  console.log('1️⃣ Checking profiles table structure...');
  try {
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(1);
      
    if (error) {
      console.log('❌ Profiles table error:', error.message);
      console.log('This might mean the table doesn\'t exist or has wrong structure');
    } else {
      console.log('✅ Profiles table accessible');
      if (profiles.length > 0) {
        console.log('Sample profile structure:', Object.keys(profiles[0]));
      } else {
        console.log('Table is empty');
      }
    }
  } catch (error) {
    console.log('❌ Database connection error:', error.message);
  }

  // 2. Test signup and see what happens
  console.log('\n2️⃣ Testing signup to see trigger behavior...');
  
  const testEmail = `trigger-test-${Date.now()}@example.com`;
  const testPassword = 'TestPass123!';
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        emailRedirectTo: 'http://localhost:5173/auth/callback',
        data: {
          full_name: 'Trigger Test User'
        }
      }
    });

    if (error) {
      console.log('❌ Signup failed:', error.message);
    } else {
      console.log('✅ Signup successful!');
      console.log('User ID:', data.user?.id);
      console.log('Confirmation sent at:', data.user?.confirmation_sent_at);
      
      // Wait a moment for trigger to execute
      console.log('\n⏳ Waiting 3 seconds for trigger to create profile...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check if profile was created
      if (data.user?.id) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', data.user.id)
          .single();

        if (profileError) {
          console.log('❌ Profile NOT created by trigger:', profileError.message);
          console.log('THIS IS THE ROOT CAUSE - TRIGGER IS NOT WORKING');
        } else {
          console.log('✅ Profile created by trigger:', {
            id: profile.id,
            user_id: profile.user_id,
            full_name: profile.full_name,
            email: profile.email
          });
        }
      }
    }
  } catch (error) {
    console.log('❌ Signup test failed:', error.message);
  }

  console.log('\n📋 DIAGNOSIS:');
  console.log('If profile creation failed, the database trigger is broken');
  console.log('This prevents signup emails because the user creation process fails');
  console.log('\n🔧 SOLUTION:');
  console.log('We need to recreate the database trigger properly');
}

checkDatabaseState().catch(console.error);