import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase, ensureProfileExists } from '../lib/supabase'
import { setUserContext, clearUserContext, addBreadcrumb } from '../lib/sentry-utils'

interface AuthContextType {
  user: User | null
  loading: boolean
  session: Session | null
  signUp: (email: string, password: string, fullName?: string) => Promise<{ data?: any; error: any }>
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<{ error: any }>
  signOut: () => Promise<void>
  isSessionPersistent: boolean
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
  const [loading, setLoading] = useState(true)
  const [isSessionPersistent, setIsSessionPersistent] = useState(false)

  useEffect(() => {
    // Get initial session with enhanced error handling and timeout
    const getInitialSession = async () => {
      try {
        // Add timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Session check timeout')), 5000)
        );
        
        const sessionPromise = supabase.auth.getSession();
        const { data: { session }, error } = await Promise.race([sessionPromise, timeoutPromise]) as any;
        
        if (error) {
          console.error('Error getting initial session:', error)
          setUser(null)
          setSession(null)
          setLoading(false)
          return
        }

        // Check if session is persistent (stored in localStorage)
        const isPersistent = !!(session && localStorage.getItem('supabase.auth.token') !== null)
        setIsSessionPersistent(isPersistent)

        // Only set user if email is confirmed
        if (session?.user && session.user.email_confirmed_at) {
          setUser(session.user)
          setSession(session)
          // Set Sentry user context
          setUserContext({
            id: session.user.id,
            email: session.user.email || undefined,
            username: session.user.user_metadata?.full_name || undefined,
          })
          addBreadcrumb('User authenticated', 'auth', { userId: session.user.id })
          // Ensure profile exists for authenticated user (non-blocking)
          ensureProfileExists(session.user.id, session.user).catch(console.error)
        } else {
          setUser(null)
          setSession(null)
          clearUserContext()
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error in getInitialSession:', error)
        // Fallback: set loading to false even if Supabase fails
        setUser(null)
        setSession(null)
        setLoading(false)
      }
    }

    getInitialSession()

    // Enhanced auth state change listener with better session management
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email, 'Email confirmed:', !!session?.user?.email_confirmed_at)
        
                 // Update session persistence status
         const isPersistent = !!(session && localStorage.getItem('supabase.auth.token') !== null)
         setIsSessionPersistent(isPersistent)
        
        // Handle different auth events
        switch (event) {
          case 'SIGNED_OUT':
            setUser(null)
            setSession(null)
            setIsSessionPersistent(false)
            clearUserContext()
            addBreadcrumb('User signed out', 'auth')
            setLoading(false)
            break
            
          case 'SIGNED_IN':
            if (session?.user && session.user.email_confirmed_at) {
              setUser(session.user)
              setSession(session)
              // Set Sentry user context
              setUserContext({
                id: session.user.id,
                email: session.user.email || undefined,
                username: session.user.user_metadata?.full_name || undefined,
              })
              addBreadcrumb('User signed in', 'auth', { userId: session.user.id })
              // Ensure profile exists for newly signed in user (non-blocking)
              ensureProfileExists(session.user.id, session.user).catch(console.error)
            } else {
              setUser(null)
              setSession(null)
              clearUserContext()
            }
            setLoading(false)
            break
            
          case 'TOKEN_REFRESHED':
            if (session?.user && session.user.email_confirmed_at) {
              setUser(session.user)
              setSession(session)
            } else {
              setUser(null)
              setSession(null)
            }
            setLoading(false)
            break
            
          case 'USER_UPDATED':
            // Handle email confirmation
            if (session?.user && session.user.email_confirmed_at) {
              setUser(session.user)
              setSession(session)
              // Ensure profile exists when email gets confirmed (non-blocking)
              ensureProfileExists(session.user.id, session.user).catch(console.error)
            } else {
              setUser(null)
              setSession(null)
            }
            setLoading(false)
            break
            
          default:
            // Update session for other events
            if (session?.user && session.user.email_confirmed_at) {
              setUser(session.user)
              setSession(session)
            }
            setLoading(false)
        }
        
        // Clear invalid sessions on token refresh errors
        if (event === 'TOKEN_REFRESHED' && !session) {
          await supabase.auth.signOut()
          setUser(null)
          setSession(null)
          setIsSessionPersistent(false)
          setLoading(false)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, fullName?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          full_name: fullName || '',
        }
      }
    })
    return { data, error }
  }

  const signIn = async (email: string, password: string, rememberMe: boolean = true) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      // Check if user exists but email is not confirmed
      if (data.user && !data.user.email_confirmed_at) {
        return { 
          error: { 
            message: 'Please confirm your email address before signing in. Check your inbox for a confirmation link.' 
          } 
        }
      }

      // Handle "Remember Me" functionality
      if (data.session && rememberMe) {
        // Session will be automatically persisted by Supabase
        console.log('Session persisted for long-term login')
      } else if (data.session && !rememberMe) {
        // For non-remember me, we could set a shorter session duration
        // This is handled by Supabase's default behavior
        console.log('Session set for current browser session only')
      }
      
      return { error }
    } catch (error) {
      console.error('Sign in error:', error)
      return { error: { message: 'An unexpected error occurred during sign in.' } }
    }
  }

  const signOut = async () => {
    try {
      console.log('Signing out user...')
      addBreadcrumb('User initiated sign out', 'auth')
      
      // Clear user state immediately to provide instant feedback
      setUser(null)
      setSession(null)
      setIsSessionPersistent(false)
      clearUserContext()
      
      // Then perform the actual sign out
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Sign out error:', error)
        // Don't throw here as we've already cleared the local state
      }
      
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error during sign out:', error)
      // Even if there's an error, keep the local state cleared
    }
  }

  const value = {
    user,
    loading,
    session,
    signUp,
    signIn,
    signOut,
    isSessionPersistent,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}