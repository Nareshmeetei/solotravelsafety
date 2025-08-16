import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { User, Session, AuthError as SupabaseAuthError } from '@supabase/supabase-js'
import { supabase, handleAuthError, validateSession, checkRateLimit, generateCSRFToken, Profile, AuthError, isDevelopmentMode } from '../lib/supabase'

interface AuthContextType {
  // State
  user: User | null
  session: Session | null
  profile: Profile | null
  loading: boolean
  
  // Actions
  signUp: (email: string, password: string, fullName?: string) => Promise<{ data: any; error: AuthError | null; message?: string }>
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<{ data: any; error: AuthError | null }>
  signInWithGoogle: () => Promise<{ data: any; error: AuthError | null }>
  signOut: () => Promise<{ error: AuthError | null }>
  
  // Email verification
  resendVerification: (email: string) => Promise<{ data: any; error: AuthError | null }>
  
  // Profile management
  updateProfile: (updates: Partial<Profile>) => Promise<{ data: Profile | null; error: AuthError | null }>
  uploadProfileImage: (file: File) => Promise<{ data: string | null; error: AuthError | null }>
  
  // Security
  refreshSession: () => Promise<{ data: Session | null; error: AuthError | null }>
  refreshUser: () => Promise<void>
  
  // State checks
  isEmailVerified: () => boolean
  hasCompletedProfile: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize auth state
  useEffect(() => {
    let mounted = true
    let timeoutId: NodeJS.Timeout
    
    const initializeAuth = async () => {
      try {
        console.log('🔐 Initializing authentication...')
        
        // Set a timeout to ensure loading doesn't hang forever
        timeoutId = setTimeout(() => {
          if (mounted) {
            console.warn('⚠️ Auth initialization timeout, setting loading to false')
            setLoading(false)
          }
        }, 5000) // 5 second timeout
        
        // Get current session
        const validSession = await validateSession()
        
        // Clear timeout since we got a response
        clearTimeout(timeoutId)
        
        if (mounted) {
          if (validSession) {
            console.log('✅ Valid session found:', validSession.user.email)
            setSession(validSession)
            setUser(validSession.user)
            
            // Try to load profile, but don't let it block the loading state
            try {
              await loadUserProfile(validSession.user.id)
            } catch (profileError) {
              console.warn('⚠️ Profile loading failed, but continuing:', profileError)
              setProfile(null)
            }
          } else {
            console.log('❌ No valid session found')
            // Clear any stale state
            setSession(null)
            setUser(null)
            setProfile(null)
          }
          setLoading(false)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        clearTimeout(timeoutId)
        if (mounted) {
          setSession(null)
          setUser(null)
          setProfile(null)
          setLoading(false)
        }
      }
    }

    initializeAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔐 Auth state changed:', event, session?.user?.email)
        
        if (!mounted) return

        try {
          if (event === 'SIGNED_IN' && session) {
            console.log('🔐 User signed in:', session.user.email, 'Email confirmed:', !!session.user.email_confirmed_at)
            setSession(session)
            setUser(session.user)
            
            // Always try to load profile if user is signed in, regardless of email confirmation
            // This allows users to access basic features even before email confirmation
            await loadUserProfile(session.user.id)
          } else if (event === 'SIGNED_OUT') {
            setSession(null)
            setUser(null)
            setProfile(null)
            // Clear local storage
            localStorage.removeItem('sts-csrf-token')
          } else if (event === 'TOKEN_REFRESHED' && session) {
            console.log('🔄 Token refreshed for:', session.user.email, 'Email confirmed:', !!session.user.email_confirmed_at)
            setSession(session)
            setUser(session.user)
            
            // Always ensure profile is loaded after token refresh
            await loadUserProfile(session.user.id)
          }
        } catch (error) {
          console.error('Auth state change error:', error)
        }
        
        setLoading(false)
      }
    )

    return () => {
      mounted = false
      clearTimeout(timeoutId)
      subscription.unsubscribe()
    }
  }, [])

  // Load user profile from database
  const loadUserProfile = async (userId: string): Promise<void> => {
    try {
      console.log('👤 Loading user profile for:', userId)
      
      // Add timeout to prevent hanging
      const profilePromise = supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Profile loading timeout')), 3000)
      )
      
      const { data, error } = await Promise.race([profilePromise, timeoutPromise]) as any

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        if (error.message === 'Profile loading timeout') {
          console.warn('⚠️ Profile loading timed out')
          setProfile(null)
          return
        }
        throw error
      }

      if (data) {
        setProfile(data)
        console.log('✅ Profile loaded successfully')
      } else {
        console.log('📝 No profile found, will create on first update')
        setProfile(null)
      }
    } catch (error) {
      console.error('Error loading profile:', error)
      setProfile(null)
    }
  }

  // Sign up with email and password
  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      // Check if we're in development mode with placeholder credentials
      if (isDevelopmentMode) {
        console.log('🚧 Development Mode: Simulating signup process')
        
        // Simulate a successful signup in development mode
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
        
        return {
          data: {
            user: null,
            session: null
          },
          error: null,
          message: 'Account created successfully! In production, you would receive an email verification link.'
        }
      }

      console.log('✅ Production Mode: Real signup with email confirmation enabled')

      // Rate limiting check
      if (!checkRateLimit(`signup_${email}`, 3, 60 * 60 * 1000)) { // 3 attempts per hour
        return {
          data: null,
          error: {
            message: 'Too many signup attempts. Please wait an hour before trying again.',
            status: 429
          }
        }
      }

      console.log('📝 Signing up user:', email)
      
      let data, error
      try {
        const result = await supabase.auth.signUp({
          email: email.toLowerCase().trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            data: {
              full_name: fullName?.trim() || ''
            }
          }
        })
        data = result.data
        error = result.error
      } catch (networkError: any) {
        console.error('Network error during signup:', networkError)
        return { data: null, error: handleAuthError(networkError) }
      }

      if (error) {
        return { data: null, error: handleAuthError(error) }
      }

      console.log('✅ Signup successful, verification email sent')
      return { data, error: null, message: 'Account created successfully! Please check your email for a verification link.' }
    } catch (error: any) {
      console.error('Signup error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }

  // Sign in with email and password
  const signIn = async (email: string, password: string, rememberMe = false) => {
    try {
      // Check if we're in development mode with placeholder credentials
      if (isDevelopmentMode) {
        console.log('🚧 Development Mode: Signin attempted with placeholder credentials')
        return {
          data: null,
          error: {
            message: '🚧 Authentication system is in development mode. Please add your Supabase credentials to .env file to enable signin functionality.',
            status: 400
          }
        }
      }

      // Rate limiting check
      if (!checkRateLimit(`signin_${email}`, 5, 15 * 60 * 1000)) { // 5 attempts per 15 minutes
        return {
          data: null,
          error: {
            message: 'Too many login attempts. Please wait 15 minutes before trying again.',
            status: 429
          }
        }
      }

      console.log('🔐 Signing in user:', email)
      
      let data, error
      try {
        const result = await supabase.auth.signInWithPassword({
          email: email.toLowerCase().trim(),
          password
        })
        data = result.data
        error = result.error
      } catch (networkError: any) {
        console.error('Network error during signin:', networkError)
        return { data: null, error: handleAuthError(networkError) }
      }

      if (error) {
        return { data: null, error: handleAuthError(error) }
      }

      // Check if email is verified
      if (!data.user?.email_confirmed_at) {
        await supabase.auth.signOut()
        return {
          data: null,
          error: {
            message: 'Please verify your email address before signing in. Check your inbox for the verification link.',
            status: 401
          }
        }
      }

      // Generate CSRF token for additional security
      const csrfToken = generateCSRFToken()
      localStorage.setItem('sts-csrf-token', csrfToken)

      console.log('✅ Sign in successful')
      return { data, error: null }
    } catch (error: any) {
      console.error('Sign in error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }

  // Sign in with Google OAuth
  const signInWithGoogle = async () => {
    try {
      // Check if we're in development mode with placeholder credentials
      if (isDevelopmentMode) {
        console.log('🚧 Development Mode: Google signin attempted with placeholder credentials')
        return {
          data: null,
          error: {
            message: '🚧 Authentication system is in development mode. Please add your Supabase credentials to .env file to enable Google signin functionality.',
            status: 400
          }
        }
      }

      console.log('🌐 Initiating Google sign in')
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      })

      if (error) {
        return { data: null, error: handleAuthError(error) }
      }

      return { data, error: null }
    } catch (error: any) {
      console.error('Google sign in error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }

  // Sign out
  const signOut = async () => {
    try {
      console.log('👋 Signing out user')
      
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        return { error: handleAuthError(error) }
      }

      // Clear local state
      setUser(null)
      setSession(null)
      setProfile(null)
      
      // Clear security tokens
      localStorage.removeItem('sts-csrf-token')

      console.log('✅ Sign out successful')
      return { error: null }
    } catch (error: any) {
      console.error('Sign out error:', error)
      return { error: handleAuthError(error) }
    }
  }

  // Resend email verification
  const resendVerification = async (email: string) => {
    try {
      // Rate limiting check
      if (!checkRateLimit(`verify_${email}`, 3, 60 * 60 * 1000)) { // 3 attempts per hour
        return {
          data: null,
          error: {
            message: 'Too many verification emails sent. Please wait an hour before trying again.',
            status: 429
          }
        }
      }

      console.log('📧 Resending verification email to:', email)
      
      const { data, error } = await supabase.auth.resend({
        type: 'signup',
        email: email.toLowerCase().trim(),
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        return { data: null, error: handleAuthError(error) }
      }

      console.log('✅ Verification email sent successfully')
      return { data, error: null }
    } catch (error: any) {
      console.error('Resend verification error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }

  // Update user profile
  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      if (!user) {
        return { 
          data: null, 
          error: { message: 'You must be logged in to update your profile', status: 401 } 
        }
      }

      console.log('👤 Updating profile for:', user.id)

      // Upsert profile (insert or update)
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          ...updates,
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) {
        return { data: null, error: handleAuthError(error) }
      }

      setProfile(data)
      console.log('✅ Profile updated successfully')
      return { data, error: null }
    } catch (error: any) {
      console.error('Update profile error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }

  // Upload profile image
  const uploadProfileImage = async (file: File) => {
    try {
      if (!user) {
        return { 
          data: null, 
          error: { message: 'You must be logged in to upload an image', status: 401 } 
        }
      }

      // Validate file
      const maxSize = 5 * 1024 * 1024 // 5MB
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
      
      if (file.size > maxSize) {
        return { 
          data: null, 
          error: { message: 'Image must be less than 5MB', status: 400 } 
        }
      }

      if (!allowedTypes.includes(file.type)) {
        return { 
          data: null, 
          error: { message: 'Only JPEG, PNG, and WebP images are allowed', status: 400 } 
        }
      }

      console.log('📸 Uploading profile image for:', user.id)

      // Generate unique filename
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}/${Date.now()}.${fileExt}`

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        })

      if (uploadError) {
        return { data: null, error: handleAuthError(uploadError) }
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profile-images')
        .getPublicUrl(fileName)

      console.log('✅ Profile image uploaded successfully')
      return { data: publicUrl, error: null }
    } catch (error: any) {
      console.error('Upload profile image error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }

  // Refresh session
  const refreshSession = useCallback(async () => {
    try {
      console.log('🔄 Refreshing session')
      
      const { data, error } = await supabase.auth.refreshSession()
      
      if (error) {
        return { data: null, error: handleAuthError(error) }
      }

      console.log('✅ Session refreshed successfully')
      return { data: data.session, error: null }
    } catch (error: any) {
      console.error('Refresh session error:', error)
      return { data: null, error: handleAuthError(error) }
    }
  }, [])

  // Refresh user data
  const refreshUser = useCallback(async () => {
    try {
      console.log('🔄 Refreshing user data')
      
      if (!user) {
        console.warn('No user to refresh')
        return
      }

      // Get fresh session to ensure we have the latest user data
      const { data: { session: freshSession } } = await supabase.auth.getSession()
      
      if (freshSession?.user) {
        console.log('✅ Fresh session obtained, updating user state')
        setUser(freshSession.user)
        setSession(freshSession)
        
        // Reload profile data
        await loadUserProfile(freshSession.user.id)
      } else {
        console.warn('No fresh session available')
      }
    } catch (error: any) {
      console.error('Refresh user error:', error)
    }
  }, [user])

  // Helper functions
  const isEmailVerified = useCallback(() => {
    return !!user?.email_confirmed_at
  }, [user])

  const hasCompletedProfile = useCallback(() => {
    return !!(profile?.full_name && profile?.location)
  }, [profile])

  const value = {
    // State
    user,
    session,
    profile,
    loading,
    
    // Actions
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    
    // Email verification
    resendVerification,
    
    // Profile management
    updateProfile,
    uploadProfileImage,
    
    // Security
    refreshSession,
    refreshUser,
    
    // State checks
    isEmailVerified,
    hasCompletedProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}