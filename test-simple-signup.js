#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqqgshyrxthrwchzcelg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzUxOTYsImV4cCI6MjA2Njg1MTE5Nn0.ZTAonkwcxUIHc0q28NIqPQd1yjzFJVCoQfHizL1oMII';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testSimpleSignup() {
  console.log('🧪 TESTING SIMPLE SIGNUP\n');
  
  const testEmail = `simple-test-${Date.now()}@gmail.com`; // Use gmail to ensure it's deliverable
  const testPassword = 'TestPass123!';
  
  console.log('Testing email:', testEmail);
  console.log('Password:', testPassword);
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        emailRedirectTo: 'http://localhost:5173/auth/callback'
        // NO metadata to avoid trigger issues
      }
    });

    if (error) {
      console.log('❌ Signup failed:', error.message);
      console.log('Error details:', error);
    } else {
      console.log('✅ Signup response received!');
      console.log('User details:', {
        id: data.user?.id,
        email: data.user?.email,
        created_at: data.user?.created_at,
        confirmation_sent_at: data.user?.confirmation_sent_at,
        email_confirmed_at: data.user?.email_confirmed_at
      });
      
      if (data.user?.confirmation_sent_at) {
        console.log('📧 CONFIRMATION EMAIL WAS SENT!');
        console.log('✅ Email system is working');
      } else {
        console.log('❌ No confirmation_sent_at timestamp - email may not have been sent');
      }
    }
  } catch (error) {
    console.log('❌ Network/connection error:', error.message);
  }

  console.log('\n🔍 ANALYSIS:');
  console.log('If signup succeeds with confirmation_sent_at timestamp, emails are working');
  console.log('The issue might be the profile creation trigger blocking signup completion');
}

testSimpleSignup().catch(console.error);