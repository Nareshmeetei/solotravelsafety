import React, { useState, useEffect } from 'react'
import { X, Eye, EyeOff, Loader2, Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'signin' | 'signup'
}

type AuthMode = 'signin' | 'signup' | 'verify' | 'forgot'

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<AuthMode>(initialMode)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  
  // Form states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  
  const { signIn, signUp, signInWithGoogle, resendVerification } = useAuth()

  // Reset form when mode changes
  const resetForm = () => {
    setEmail('')
    setPassword('')
    setError(null)
    setSuccess(null)
    setShowPassword(false)
  }

  // Update mode when initialMode prop changes
  useEffect(() => {
    if (isOpen && initialMode !== mode) {
      setMode(initialMode)
      resetForm()
    }
  }, [isOpen, initialMode, mode])

  const switchMode = (newMode: AuthMode) => {
    resetForm()
    setMode(newMode)
  }

  const handleClose = () => {
    resetForm()
    setLoading(false)
    onClose()
  }

  const validateForm = () => {
    if (!email.trim()) {
      setError('Email address is required')
      return false
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address')
      return false
    }


    if ((mode === 'signin' || mode === 'signup') && !password) {
      setError('Password is required')
      return false
    }

    if (mode === 'signup' && password.length < 6) {
      setError('Password must be at least 6 characters long')
      return false
    }

    return true
  }

  const handleSignUp = async () => {
    if (!validateForm()) return

    setLoading(true)
    setError(null)

    try {
      const result = await signUp(email.trim(), password, '')
      
      if (result.error) {
        setError(result.error.message)
      } else {
        const successMessage = result.message || 'Account created successfully! Please check your email for a verification link.'
        setSuccess(successMessage)
        
        // Show success message for 2 seconds before switching to verify mode
        setTimeout(() => {
          setMode('verify')
        }, 2000)
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async () => {
    if (!validateForm()) return

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await signIn(email.trim(), password, rememberMe)
      
      if (error) {
        if (error.status === 401 && error.message.includes('verify your email')) {
          setMode('verify')
          setSuccess('Please verify your email address before signing in.')
        } else {
          setError(error.message)
        }
      } else {
        setSuccess('Welcome back! Signing you in...')
        setTimeout(() => {
          handleClose()
        }, 1500)
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await signInWithGoogle()
      
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Redirecting to Google...')
        // OAuth redirect will handle the rest
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleResendVerification = async () => {
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await resendVerification(email.trim())
      
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Verification email sent! Please check your inbox.')
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (loading) return

    switch (mode) {
      case 'signin':
        await handleSignIn()
        break
      case 'signup':
        await handleSignUp()
        break
      case 'verify':
        await handleResendVerification()
        break
    }
  }

  if (!isOpen) return null

  const getTitle = () => {
    switch (mode) {
      case 'signin':
        return 'Welcome back'
      case 'signup':
        return 'Join Solo Travel Safety'
      case 'verify':
        return 'Verify your email'
      case 'forgot':
        return 'Reset password'
      default:
        return 'Authentication'
    }
  }

  const getSubtitle = () => {
    switch (mode) {
      case 'signin':
        return 'Sign in to access your personalized safety insights'
      case 'signup':
        return 'Create your account to start sharing and discovering travel safety tips'
      case 'verify':
        return 'We sent a verification link to your email address'
      case 'forgot':
        return 'Enter your email to receive reset instructions'
      default:
        return ''
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
      style={{backgroundColor: 'rgba(40, 40, 40, 0.5)'}}
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden" 
        style={{backgroundColor: '#EFEAFF'}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 bg-gradient-to-r from-primary-50 to-primary-100">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-display font-normal text-gray-900 mb-2">
              {getTitle()}
            </h2>
            <p className="text-sm text-gray-600">
              {getSubtitle()}
            </p>
          </div>
        </div>

        <div className="px-6 pb-6">
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-full text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-full text-sm flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
              {success}
            </div>
          )}

          {/* Email Verification Mode */}
          {mode === 'verify' && (
            <div className="space-y-4">
              {/* Verification Success Banner */}
              <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl text-sm">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="font-medium">Verification email sent!</span>
                </div>
                <p className="text-green-600 text-xs">
                  We've sent a verification link to your email. Click the link to activate your account and you'll be redirected to your profile page.
                </p>
              </div>

              <div className="text-center py-4">
                <Mail className="w-12 h-12 text-primary-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-3 text-sm">
                  Check your inbox and click the verification link to complete your registration.
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Didn't receive the email? Check your spam folder or request a new one below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-400 text-white py-3 px-4 rounded-full font-medium hover:bg-primary-500 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Resend verification email'
                  )}
                </button>
              </form>

              <div className="text-center pt-4 border-t border-gray-200">
                <button
                  onClick={() => switchMode('signin')}
                  className="text-primary-400 hover:text-primary-500 font-medium text-sm inline-flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to sign in
                </button>
              </div>
            </div>
          )}

          {/* Sign In/Sign Up Forms */}
          {(mode === 'signin' || mode === 'signup') && (
            <div className="space-y-6">
              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-transparent focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500" style={{backgroundColor: '#EFEAFF'}}>Or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {mode === 'signin' && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-gray-300 text-primary-400 focus:ring-primary-400"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-400 text-white py-3 px-4 rounded-full font-medium hover:bg-primary-500 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : mode === 'signin' ? (
                    'Sign in'
                  ) : (
                    'Create account'
                  )}
                </button>
              </form>

              {/* Mode Switcher */}
              <div className="text-center text-sm text-gray-600">
                {mode === 'signin' ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      onClick={() => switchMode('signup')}
                      className="text-primary-400 hover:text-primary-500 font-medium"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => switchMode('signin')}
                      className="text-primary-400 hover:text-primary-500 font-medium"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>

              {mode === 'signup' && (
                <div className="text-xs text-gray-500 text-center leading-relaxed">
                  By creating an account, you agree to our{' '}
                  <a href="/terms" className="text-primary-400 hover:text-primary-500">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-primary-400 hover:text-primary-500">Privacy Policy</a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthModal