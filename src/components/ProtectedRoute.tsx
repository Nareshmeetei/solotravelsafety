import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { isDevelopmentMode } from '../lib/supabase'
import { Loader2, Shield, Mail } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireEmailVerification?: boolean
  requireCompleteProfile?: boolean
  redirectTo?: string
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireEmailVerification = true,
  requireCompleteProfile = false,
  redirectTo = '/'
}) => {
  const { user, profile, loading, isEmailVerified, hasCompletedProfile } = useAuth()
  const location = useLocation()
  const [showAuthPrompt, setShowAuthPrompt] = useState(false)

  // Development mode bypass - check for demo session
  const [developmentUser, setDevelopmentUser] = useState<any>(null)

  useEffect(() => {
    if (isDevelopmentMode) {
      // Check for demo user session in localStorage
      const demoUser = localStorage.getItem('demo-user-session')
      if (demoUser) {
        try {
          setDevelopmentUser(JSON.parse(demoUser))
        } catch (e) {
          console.warn('Invalid demo user session data')
        }
      }
    }
  }, [])

  useEffect(() => {
    // Show auth prompt after loading is complete and user is not authenticated
    if (!loading && !user && !(isDevelopmentMode && developmentUser)) {
      const timer = setTimeout(() => {
        setShowAuthPrompt(true)
      }, 1000) // Delay to prevent flash

      return () => clearTimeout(timer)
    }
  }, [loading, user, developmentUser])

  // Still loading - show loading spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary-400 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
          <p className="text-gray-600">Please wait while we verify your authentication</p>
        </div>
      </div>
    )
  }

  // Development mode override - allow access if demo user exists
  if (isDevelopmentMode && developmentUser) {
    return <>{children}</>
  }

  // User not authenticated - redirect with state to return after login
  if (!user) {
    if (showAuthPrompt) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <Shield className="w-16 h-16 text-primary-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Authentication Required
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You need to be signed in to access this page. Please sign in or create an account to continue.
            </p>
            <div className="space-y-3">
              {isDevelopmentMode ? (
                <>
                  <button
                    onClick={() => {
                      // Create demo user session
                      const demoUser = {
                        id: 'demo-user-123',
                        email: 'demo@solotravelsafety.com',
                        email_confirmed_at: new Date().toISOString(),
                        user_metadata: {
                          full_name: 'Demo User',
                          avatar_url: null
                        },
                        created_at: new Date().toISOString()
                      }
                      localStorage.setItem('demo-user-session', JSON.stringify(demoUser))
                      setDevelopmentUser(demoUser)
                    }}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    🚧 Enter as Demo User (Development)
                  </button>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="w-full bg-primary-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-500 transition-colors"
                  >
                    Go to Sign In
                  </button>
                </>
              ) : (
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-primary-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-500 transition-colors"
                >
                  Go to Sign In
                </button>
              )}
              <p className="text-sm text-gray-500">
                {isDevelopmentMode 
                  ? "Development mode: Use demo user for testing or go to sign in page"
                  : "You'll be redirected back to this page after signing in"
                }
              </p>
            </div>
          </div>
        </div>
      )
    }

    // Redirect to home with return URL
    return (
      <Navigate 
        to={redirectTo} 
        state={{ 
          from: location.pathname,
          message: 'Please sign in to access this page'
        }} 
        replace 
      />
    )
  }

  // User authenticated but email not verified
  if (requireEmailVerification && !isEmailVerified()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <Mail className="w-16 h-16 text-primary-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Email Verification Required
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Please verify your email address to access this feature. 
            Check your inbox for a verification link.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/account-settings'}
              className="w-full bg-primary-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              Go to Account Settings
            </button>
            <p className="text-sm text-gray-500">
              You can resend the verification email from your profile
            </p>
          </div>
        </div>
      </div>
    )
  }

  // User authenticated and verified but profile incomplete
  if (requireCompleteProfile && !hasCompletedProfile()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Complete Your Profile
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Please complete your profile information to access this feature. 
            We need your name and location to provide personalized safety insights.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/account-settings'}
              className="w-full bg-primary-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              Complete Profile
            </button>
            <p className="text-sm text-gray-500">
              This will only take a minute
            </p>
          </div>
        </div>
      </div>
    )
  }

  // All checks passed - render protected content
  return <>{children}</>
}

export default ProtectedRoute