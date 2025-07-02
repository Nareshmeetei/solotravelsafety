import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase, ensureProfileExists } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signUp: (email: string, password: string, fullName: string) => Promise<{ data?: any; error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      // Only set user if email is confirmed
      if (session?.user && session.user.email_confirmed_at) {
        setUser(session.user)
        // Ensure profile exists for authenticated user
        ensureProfileExists(session.user.id, session.user)
      } else {
        setUser(null)
      }
      
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email, 'Email confirmed:', !!session?.user?.email_confirmed_at)
        
        // Handle different auth events
        if (event === 'SIGNED_OUT') {
          setUser(null)
          setLoading(false)
        } else if (event === 'SIGNED_IN') {
          // Only set user if email is confirmed
          if (session?.user && session.user.email_confirmed_at) {
            setUser(session.user)
            // Ensure profile exists for newly signed in user
            await ensureProfileExists(session.user.id, session.user)
          } else {
            setUser(null)
          }
          setLoading(false)
        } else if (event === 'TOKEN_REFRESHED') {
          // Only set user if email is confirmed
          if (session?.user && session.user.email_confirmed_at) {
            setUser(session.user)
          } else {
            setUser(null)
          }
          setLoading(false)
        } else if (event === 'USER_UPDATED') {
          // Handle email confirmation
          if (session?.user && session.user.email_confirmed_at) {
            setUser(session.user)
            // Ensure profile exists when email gets confirmed
            await ensureProfileExists(session.user.id, session.user)
          } else {
            setUser(null)
          }
          setLoading(false)
        }
        
        // Clear invalid sessions on token refresh errors
        if (event === 'TOKEN_REFRESHED' && !session) {
          await supabase.auth.signOut()
          setUser(null)
          setLoading(false)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          full_name: fullName,
        }
      }
    })
    return { data, error }
  }

  const signIn = async (email: string, password: string) => {
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
    
    return { error }
  }

  const signOut = async () => {
    try {
      console.log('Signing out user...')
      
      // Clear user state immediately to provide instant feedback
      setUser(null)
      
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
    signUp,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}