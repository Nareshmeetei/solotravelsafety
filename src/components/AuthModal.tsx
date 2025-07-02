import React, { useState } from 'react'
import { X, Mail, Lock, User, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { resendConfirmation } from '../lib/supabase'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'signin' | 'signup'
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'confirm-email'>(initialMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resendingConfirmation, setResendingConfirmation] = useState(false)
  const navigate = useNavigate()

  const { signIn, signUp } = useAuth()

  // Update mode when initialMode changes
  React.useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      if (mode === 'signup') {
        if (!fullName.trim()) {
          setError('Full name is required')
          return
        }
        const { data, error } = await signUp(email, password, fullName)
        if (error) {
          // Handle specific error cases with user-friendly messages
          if (error.message.includes('User already registered') || error.message.includes('user_already_exists')) {
            setError('An account with this email already exists. Please sign in instead or use a different email address.')
          } else {
            setError(error.message)
          }
        } else {
          // Always show email confirmation screen after signup
          setMode('confirm-email')
          setSuccess('Please check your email and click the confirmation link to complete your registration.')
        }
      } else {
        const { error } = await signIn(email, password)
        if (error) {
          if (error.message.includes('Email not confirmed') || error.message.includes('confirm your email')) {
            setMode('confirm-email')
            setError('Please confirm your email address before signing in. Check your inbox for a confirmation link.')
          } else if (error.message.includes('Invalid login credentials')) {
            setError('Invalid email or password. Please check your credentials and try again.')
          } else {
            setError(error.message)
          }
        } else {
          onClose()
          navigate('/destinations')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleResendConfirmation = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }

    setResendingConfirmation(true)
    setError('')
    setSuccess('')

    try {
      const { error } = await resendConfirmation(email)
      if (error) {
        setError(error.message)
      } else {
        setSuccess('Confirmation email sent! Please check your inbox.')
      }
    } catch (err) {
      setError('Failed to resend confirmation email')
    } finally {
      setResendingConfirmation(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setFullName('')
    setError('')
    setSuccess('')
    setShowPassword(false)
  }

  const switchMode = () => {
    if (mode === 'confirm-email') {
      setMode('signin')
    } else {
      setMode(mode === 'signin' ? 'signup' : 'signin')
    }
    resetForm()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            {mode === 'signin' ? 'Welcome Back' : 
             mode === 'signup' ? 'Join the Safety Squad' : 
             'Check Your Email'}
          </h2>
          <p className="text-gray-600">
            {mode === 'signin' 
              ? 'Sign in to share your travel experiences' 
              : mode === 'signup'
              ? 'Yes, you belong here.'
              : 'We sent you a confirmation link'
            }
          </p>
        </div>

        {/* Email Confirmation View */}
        {mode === 'confirm-email' && (
          <div className="px-6 pb-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Confirm Your Email</h3>
              <p className="text-gray-600 text-sm mb-4">
                We sent a confirmation link to <strong>{email}</strong>. 
                Click the link in your email to activate your account and start exploring safely.
              </p>
            </div>

            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {success}
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {error}
              </div>
            )}

            <div className="space-y-4">
              <button
                onClick={handleResendConfirmation}
                disabled={resendingConfirmation}
                className="w-full px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resendingConfirmation ? 'Sending...' : 'Resend Confirmation Email'}
              </button>

              <button
                onClick={switchMode}
                className="w-full px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Back to Sign In
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Didn't receive the email?</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Check your spam/junk folder</li>
                <li>• Make sure you entered the correct email address</li>
                <li>• Wait a few minutes for the email to arrive</li>
                <li>• Click "Resend" if you still don't see it</li>
              </ul>
            </div>
          </div>
        )}

        {/* Sign In/Sign Up Form */}
        {mode !== 'confirm-email' && (
          <form onSubmit={handleSubmit} className="px-6 pb-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {error}
                {/* Show sign in suggestion for existing users */}
                {error.includes('account with this email already exists') && (
                  <div className="mt-2 pt-2 border-t border-red-200">
                    <button
                      type="button"
                      onClick={() => {
                        setMode('signin')
                        setError('')
                      }}
                      className="text-red-800 underline hover:text-red-900 font-medium"
                    >
                      Switch to Sign In
                    </button>
                  </div>
                )}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {success}
              </div>
            )}

            <div className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your password"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {mode === 'signup' && (
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>
            </div>

            {mode === 'signup' && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-800 font-medium">Email Verification Required</p>
                    <p className="text-xs text-blue-700 mt-1">
                      You'll need to verify your email address before you can access your account. 
                      We'll send you a confirmation link after you sign up.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Please wait...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
            </button>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={switchMode}
                className="text-primary-400 hover:text-primary-500 font-medium transition-colors duration-300"
              >
                {mode === 'signin' 
                  ? "Don't have an account? Sign up" 
                  : 'Already have an account? Sign in'
                }
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthModal