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

async function debugAuthLoading() {
  console.log('🔍 DEBUGGING AUTH LOADING ISSUE\n');
  
  console.log('1️⃣ Checking current session...');
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.log('❌ Session error:', error.message);
      console.log('This might be causing auth loading to hang');
    } else if (session) {
      console.log('✅ Active session found:');
      console.log('User ID:', session.user.id);
      console.log('Email:', session.user.email);
      console.log('Email confirmed:', !!session.user.email_confirmed_at);
      console.log('Expires at:', new Date(session.expires_at * 1000));
      console.log('Time until expiry:', Math.round((session.expires_at * 1000 - Date.now()) / 1000 / 60), 'minutes');
      
      // Check if we can load profile
      console.log('\n2️⃣ Testing profile loading...');
      const startTime = Date.now();
      
      try {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
          
        const endTime = Date.now();
        console.log(`Profile query took ${endTime - startTime}ms`);
        
        if (profileError) {
          console.log('❌ Profile loading failed:', profileError.message);
          console.log('This could be causing the loading to hang');
          
          // Check if profile exists but query is wrong
          const { data: allProfiles, error: countError } = await supabase
            .from('profiles')
            .select('user_id, full_name')
            .eq('user_id', session.user.id);
            
          if (countError) {
            console.log('❌ Cannot query profiles table:', countError.message);
          } else {
            console.log(`Found ${allProfiles.length} profiles for this user`);
            if (allProfiles.length > 1) {
              console.log('⚠️ Multiple profiles found - this causes .single() to fail');
              console.table(allProfiles);
            }
          }
        } else {
          console.log('✅ Profile loaded successfully:', {
            id: profile.id,
            user_id: profile.user_id,
            full_name: profile.full_name,
            email: profile.email
          });
        }
      } catch (profileError) {
        console.log('❌ Profile loading threw error:', profileError.message);
      }
    } else {
      console.log('❌ No session found');
      console.log('User needs to sign in first');
    }
  } catch (error) {
    console.log('❌ Session check failed:', error.message);
  }
  
  console.log('\n🔧 RECOMMENDATIONS:');
  console.log('1. If session exists but profile loading fails, fix the profile query');
  console.log('2. If session doesn\'t exist, user needs to sign in');
  console.log('3. If multiple profiles exist, clean up duplicates');
  console.log('4. Check browser console for more detailed errors');
}

debugAuthLoading().catch(console.error);