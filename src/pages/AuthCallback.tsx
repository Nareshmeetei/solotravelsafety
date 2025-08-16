import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { Loader2, CheckCircle, XCircle, Mail } from 'lucide-react'

const AuthCallback: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { user, session } = useAuth()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('🔗 Processing auth callback with URL:', window.location.href)
        
        // First, check for error parameters in both search params and hash
        const error = searchParams.get('error')
        const errorDescription = searchParams.get('error_description')
        const errorCode = searchParams.get('error_code')
        
        // Also check hash for errors (from OAuth redirects)
        const hash = window.location.hash.substring(1)
        const hashParams = new URLSearchParams(hash)
        const hashError = hashParams.get('error')
        const hashErrorDescription = hashParams.get('error_description')
        
        if (error || hashError) {
          const finalError = error || hashError
          const finalDescription = errorDescription || hashErrorDescription
          console.error('Auth callback error:', { error: finalError, errorDescription: finalDescription, errorCode })
          setStatus('error')
          
          if (finalError === 'access_denied') {
            setMessage('Authentication was cancelled. You can try signing in again.')
          } else if (finalError === 'invalid_request' || errorCode === '400') {
            setMessage('Invalid confirmation link. Please request a new one.')
          } else {
            setMessage(finalDescription || `Authentication failed: ${finalError}. Please try again.`)
          }
          
          setTimeout(() => navigate('/'), 4000)
          return
        }

        console.log('📧 Processing email confirmation or auth callback...')
        
        // Check if we have confirmation tokens in the URL
        const fragment = window.location.hash.substring(1)
        const fragmentParams = new URLSearchParams(fragment)
        const accessToken = fragmentParams.get('access_token')
        const refreshToken = fragmentParams.get('refresh_token')
        const tokenType = fragmentParams.get('token_type')
        const type = fragmentParams.get('type')
        
        console.log('🔍 URL fragments:', { 
          hasAccessToken: !!accessToken, 
          hasRefreshToken: !!refreshToken, 
          tokenType, 
          type,
          fullHash: fragment
        })
        
        if (accessToken && (type === 'signup' || type === 'email_confirmation')) {
          console.log('✅ Email confirmation tokens found, processing...')
          setMessage('Verifying your email confirmation...')
          
          try {
            // Let Supabase automatically process the tokens from the URL
            console.log('🔄 Processing auth tokens from URL...')
            
            // Wait longer for Supabase to process the URL tokens
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            // Check if session was established
            const { data: { session: confirmationSession }, error: sessionError } = 
              await supabase.auth.getSession()
            
            console.log('📊 Session check after confirmation:', {
              hasSession: !!confirmationSession,
              hasUser: !!confirmationSession?.user,
              emailConfirmed: !!confirmationSession?.user?.email_confirmed_at,
              error: sessionError?.message
            })
            
            if (sessionError) {
              console.error('Session error after confirmation:', sessionError)
              setStatus('error')
              setMessage('Email confirmation failed. Please try signing up again.')
              setTimeout(() => navigate('/'), 4000)
              return
            }
            
            if (confirmationSession && confirmationSession.user && confirmationSession.user.email_confirmed_at) {
              console.log('✅ Email confirmation successful and session established')
              
              setStatus('success')
              setMessage('Email verified successfully! Redirecting to destinations...')
              
              // Force AuthContext to refresh by triggering auth state change
              await supabase.auth.refreshSession()
              
              // Redirect to destinations page
              setTimeout(() => navigate('/destinations', { replace: true }), 1500)
              return
            } else if (confirmationSession && confirmationSession.user) {
              // User exists but email not confirmed yet - this shouldn't happen but handle it
              console.log('⚠️ Session exists but email not confirmed')
              setStatus('error')
              setMessage('Email confirmation is still processing. Please wait a moment and try again.')
              setTimeout(() => navigate('/'), 4000)
              return
            } else {
              // No session established - try to establish it manually
              console.log('⏳ No session found, attempting to establish session from tokens...')
              setMessage('Establishing your session...')
              
              try {
                // Try to set the session using the tokens from the URL
                const { data: tokenData, error: tokenError } = await supabase.auth.setSession({
                  access_token: accessToken,
                  refresh_token: refreshToken || ''
                })
                
                if (tokenError) {
                  console.error('Token session error:', tokenError)
                  throw tokenError
                }
                
                if (tokenData.session && tokenData.user) {
                  console.log('✅ Session established from tokens')
                  setStatus('success')
                  setMessage('Email verified successfully! Redirecting...')
                  
                  // Trigger auth state change
                  await supabase.auth.refreshSession()
                  
                  setTimeout(() => navigate('/destinations', { replace: true }), 1500)
                  return
                } else {
                  throw new Error('Failed to establish session from tokens')
                }
              } catch (tokenError: any) {
                console.error('Failed to establish session from tokens:', tokenError)
                setStatus('success')  // Still show success since email was confirmed
                setMessage('Email confirmed! Please sign in to complete the process.')
                setTimeout(() => navigate('/destinations', { replace: true }), 3000)
              }
            }
          } catch (confirmationError: any) {
            console.error('Email confirmation processing error:', confirmationError)
            setStatus('error')
            setMessage('Email confirmation failed. Please try again or request a new confirmation email.')
            setTimeout(() => navigate('/'), 4000)
          }
        } else {
          // No confirmation tokens found, check for existing session
          console.log('🔍 No confirmation tokens found, checking existing session...')
          
          try {
            const { data: { session: existingSession }, error: sessionError } = 
              await supabase.auth.getSession()
            
            if (sessionError) {
              console.error('Session check error:', sessionError)
              setStatus('error')
              setMessage('Session verification failed. Please try signing in again.')
              setTimeout(() => navigate('/'), 4000)
              return
            }
            
            if (existingSession && existingSession.user) {
              console.log('✅ Existing session found')
              setStatus('success')
              setMessage('Authentication successful! Redirecting to destinations...')
              setTimeout(() => navigate('/destinations', { replace: true }), 2000)
            } else {
              console.log('❌ No valid session or confirmation tokens found')
              setStatus('error')
              setMessage('No valid authentication found. The link may have expired or is invalid.')
              setTimeout(() => navigate('/'), 4000)
            }
          } catch (sessionError: any) {
            console.error('Session check error:', sessionError)
            setStatus('error')
            setMessage('Authentication check failed. Please try again.')
            setTimeout(() => navigate('/'), 4000)
          }
        }

      } catch (error: any) {
        console.error('Callback handler error:', error)
        setStatus('error')
        setMessage('An unexpected error occurred during authentication. Please try again.')
        setTimeout(() => navigate('/'), 4000)
      }
    }

    handleAuthCallback()
  }, [searchParams, navigate])

  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="w-12 h-12 text-primary-400 animate-spin" />
      case 'success':
        return <CheckCircle className="w-12 h-12 text-green-500" />
      case 'error':
        return <XCircle className="w-12 h-12 text-red-500" />
      default:
        return <Mail className="w-12 h-12 text-blue-500" />
    }
  }

  const getTitle = () => {
    switch (status) {
      case 'loading':
        return 'Processing Authentication...'
      case 'success':
        return 'Authentication Successful!'
      case 'error':
        return 'Authentication Failed'
      default:
        return 'Verifying...'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-6">
          {getIcon()}
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {getTitle()}
        </h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {message}
        </p>
        
        {status === 'loading' && (
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Please wait while we verify your authentication...</span>
          </div>
        )}
        
        {status === 'error' && (
          <div className="mt-6">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            >
              Return to Home
            </button>
          </div>
        )}
        
        {status === 'success' && (
          <div className="mt-6 text-sm text-gray-500">
            <span>Redirecting you to the app in a few seconds...</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthCallback