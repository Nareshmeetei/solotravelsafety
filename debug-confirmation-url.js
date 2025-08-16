#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqqgshyrxthrwchzcelg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE7NTEyNzUxOTYsImV4cCI6MjA2Njg1MTE5Nn0.ZTAonkwcxUIHc0q28NIqPQd1yjzFJVCoQfHizL1oMII';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function debugConfirmationUrl() {
  console.log('🔗 DEBUGGING CONFIRMATION URL\n');
  
  console.log('Expected redirect URL from signup:', 'http://localhost:5173/auth/callback');
  console.log('Actual AuthCallback route should be:', '/auth/callback');
  
  console.log('\n🔍 TESTING AUTH FLOW:');
  console.log('1. User clicks confirmation link from email');
  console.log('2. Should redirect to: http://localhost:5173/auth/callback#access_token=...&type=signup');
  console.log('3. AuthCallback should process the URL fragments');
  console.log('4. Should redirect to /destinations');
  
  // Test what the current session looks like
  console.log('\n📊 Current auth state:');
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.log('❌ Session error:', error.message);
    } else if (session) {
      console.log('✅ Active session found:');
      console.log('User ID:', session.user.id);
      console.log('Email:', session.user.email);
      console.log('Email confirmed:', !!session.user.email_confirmed_at);
      console.log('Session expires at:', new Date(session.expires_at * 1000));
    } else {
      console.log('❌ No active session');
    }
  } catch (error) {
    console.log('❌ Error checking session:', error.message);
  }
  
  console.log('\n🔧 DEBUGGING STEPS:');
  console.log('1. Check if AuthCallback route exists in router');
  console.log('2. Verify URL fragment parsing in AuthCallback');
  console.log('3. Check if session is being established properly');
  console.log('4. Verify redirect logic after confirmation');
}

debugConfirmationUrl().catch(console.error);