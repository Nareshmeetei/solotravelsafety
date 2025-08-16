#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqqgshyrxthrwchzcelg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzUxOTYsImV4cCI6MjA2Njg1MTE5Nn0.ZTAonkwcxUIHc0q28NIqPQd1yjzFJVCoQfHizL1oMII';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    detectSessionInUrl: true,
    flowType: 'pkce',
    persistSession: true,
    autoRefreshToken: true,
  }
});

async function testCompleteAuthFlow() {
  console.log('🧪 TESTING COMPLETE AUTH FLOW\n');
  
  const testEmail = `complete-flow-test-${Date.now()}@gmail.com`;
  const testPassword = 'TestPass123!';
  const fullName = 'Complete Flow Test User';
  
  console.log('📝 Test Details:');
  console.log('Email:', testEmail);
  console.log('Password:', testPassword);
  console.log('Full Name:', fullName);
  console.log('');
  
  // Step 1: Test Signup
  console.log('1️⃣ TESTING SIGNUP WITH METADATA...');
  try {
    const { data: signupData, error: signupError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        emailRedirectTo: 'http://localhost:5173/auth/callback',
        data: {
          full_name: fullName
        }
      }
    });

    if (signupError) {
      console.log('❌ Signup failed:', signupError.message);
      return;
    }

    console.log('✅ Signup successful!');
    console.log('User ID:', signupData.user?.id);
    console.log('Email:', signupData.user?.email);
    console.log('Confirmation sent at:', signupData.user?.confirmation_sent_at);
    console.log('Metadata:', signupData.user?.user_metadata);

    if (!signupData.user?.confirmation_sent_at) {
      console.log('⚠️ No confirmation_sent_at - emails might not be sending');
      return;
    }

    // Step 2: Wait for trigger to create profile
    console.log('\n2️⃣ CHECKING PROFILE CREATION BY TRIGGER...');
    console.log('⏳ Waiting 3 seconds for trigger to execute...');
    await new Promise(resolve => setTimeout(resolve, 3000));

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', signupData.user.id)
      .single();

    if (profileError) {
      console.log('❌ Profile creation failed:', profileError.message);
      console.log('🔧 This means the database trigger is not working properly');
      
      // Try to check if trigger exists
      console.log('\n🔍 Checking what profiles exist...');
      const { data: allProfiles, error: countError } = await supabase
        .from('profiles')
        .select('user_id, full_name, email, created_at')
        .limit(5);
        
      if (countError) {
        console.log('❌ Cannot access profiles table:', countError.message);
      } else {
        console.log('📊 Recent profiles:');
        console.table(allProfiles);
      }
      return;
    }

    console.log('✅ Profile created successfully by trigger!');
    console.log('Profile details:', {
      id: profile.id,
      user_id: profile.user_id,
      full_name: profile.full_name,
      email: profile.email,
      created_at: profile.created_at
    });

    // Step 3: Test sign out (cleanup)
    console.log('\n3️⃣ TESTING SIGN OUT...');
    const { error: signOutError } = await supabase.auth.signOut();
    
    if (signOutError) {
      console.log('⚠️ Sign out failed:', signOutError.message);
    } else {
      console.log('✅ Sign out successful');
    }

    console.log('\n🎉 COMPLETE AUTH FLOW TEST RESULTS:');
    console.log('✅ Signup: Working');
    console.log('✅ Email confirmation: Sending');
    console.log('✅ Database trigger: Working');
    console.log('✅ Profile creation: Working');
    console.log('✅ Sign out: Working');
    
    console.log('\n📋 NEXT STEPS FOR USER:');
    console.log('1. Check email inbox for confirmation link');
    console.log('2. Click confirmation link (should redirect to /destinations)');
    console.log('3. Profile page should now work and show user information');
    console.log('4. Should be able to access protected routes');

  } catch (error) {
    console.log('❌ Test failed with error:', error.message);
  }
}

testCompleteAuthFlow().catch(console.error);