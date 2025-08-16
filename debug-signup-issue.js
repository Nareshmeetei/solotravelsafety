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

async function debugSignupIssue() {
  console.log('🔍 DEBUGGING SIGNUP EMAIL ISSUE\n');

  // Test 1: Basic signup test
  console.log('1️⃣ Testing basic signup...');
  const testEmail = `debug-signup-${Date.now()}@example.com`;
  const testPassword = 'TestPass123!';
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        emailRedirectTo: 'http://localhost:5173/auth/callback',
        data: {
          full_name: 'Debug Test User'
        }
      }
    });

    console.log('📧 Signup Response:');
    if (error) {
      console.log('❌ Signup failed:', error.message);
      console.log('Error details:', error);
      
      if (error.message.includes('rate limit')) {
        console.log('⚠️  Rate limited - this is expected from previous tests');
        console.log('Wait 60 minutes or try with a different email pattern');
      }
    } else {
      console.log('✅ Signup successful!');
      console.log('User details:', {
        id: data.user?.id,
        email: data.user?.email,
        confirmation_sent_at: data.user?.confirmation_sent_at,
        email_confirmed_at: data.user?.email_confirmed_at,
        created_at: data.user?.created_at
      });
      
      // Check if profile was created by trigger
      if (data.user?.id) {
        console.log('\n2️⃣ Checking if profile was created by trigger...');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for trigger
        
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', data.user.id)
          .single();

        if (profileError) {
          console.log('❌ Profile creation failed:', profileError.message);
          console.log('This might be why emails stopped - trigger error could prevent signup');
        } else {
          console.log('✅ Profile created successfully:', {
            id: profile.id,
            user_id: profile.user_id,
            full_name: profile.full_name,
            email: profile.email
          });
        }
      }
    }
  } catch (error) {
    console.log('❌ Signup test failed completely:', error.message);
  }

  // Test 2: Check if we can query existing users
  console.log('\n3️⃣ Checking existing profiles...');
  try {
    const { count, error } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.log('❌ Profile query failed:', error.message);
    } else {
      console.log(`📊 Total profiles: ${count}`);
    }
  } catch (error) {
    console.log('❌ Profile count check failed:', error.message);
  }

  // Test 3: Test auth settings
  console.log('\n4️⃣ Checking auth configuration...');
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    console.log('Current auth state:', {
      hasSession: !!session,
      error: error?.message || 'None'
    });
  } catch (error) {
    console.log('❌ Auth check failed:', error.message);
  }

  console.log('\n📋 POTENTIAL CAUSES:');
  console.log('1. Database trigger error preventing signup completion');
  console.log('2. Rate limiting from previous test attempts');
  console.log('3. Supabase email service quota exceeded');
  console.log('4. Profile creation trigger failing silently');
  
  console.log('\n🔧 SOLUTIONS TO TRY:');
  console.log('1. Check Supabase logs for trigger errors');
  console.log('2. Try signup with a completely different email format');
  console.log('3. Check Supabase dashboard for email quota/settings');
  console.log('4. Temporarily disable trigger and test raw signup');
}

debugSignupIssue().catch(console.error);