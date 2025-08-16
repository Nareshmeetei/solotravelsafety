import React, { useState, useEffect } from 'react'
import { supabase, isDevelopmentMode } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

const AuthDebug: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [testEmail, setTestEmail] = useState('test@example.com')
  const [testPassword, setTestPassword] = useState('testpassword123')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const { signUp, user, session } = useAuth()

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const { data: { session: currentSession }, error } = await supabase.auth.getSession()
        
        setDebugInfo({
          // Environment
          supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
          isDevelopmentMode,
          currentUrl: window.location.href,
          
          // Session info
          hasSession: !!currentSession,
          sessionUser: currentSession?.user?.email,
          sessionExpiry: currentSession?.expires_at,
          emailConfirmed: currentSession?.user?.email_confirmed_at,
          
          // Auth context
          contextUser: user?.email,
          contextSession: !!session,
          
          // URL info
          urlParams: Object.fromEntries(new URLSearchParams(window.location.search)),
          urlHash: window.location.hash,
          
          // Supabase client info
          supabaseConnected: !error,
          error: error?.message
        })
      } catch (err: any) {
        setDebugInfo({
          error: err.message,
          supabaseConnected: false
        })
      }
    }

    checkAuthStatus()
    
    // Update every 5 seconds
    const interval = setInterval(checkAuthStatus, 5000)
    return () => clearInterval(interval)
  }, [user, session])

  const testSignup = async () => {
    setLoading(true)
    setMessage('')
    
    try {
      console.log('🧪 Testing signup with:', testEmail)
      const result = await signUp(testEmail, testPassword, 'Test User')
      
      if (result.error) {
        setMessage(`❌ Signup Error: ${result.error.message}`)
      } else {
        setMessage(`✅ Signup Success: ${result.message || 'Check your email for confirmation link'}`)
      }
    } catch (err: any) {
      setMessage(`💥 Exception: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testDirectSupabaseSignup = async () => {
    setLoading(true)
    setMessage('')
    
    try {
      console.log('🧪 Testing direct Supabase signup with:', testEmail)
      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: 'Test User Direct'
          }
        }
      })
      
      if (error) {
        setMessage(`❌ Direct Signup Error: ${error.message}`)
      } else {
        setMessage(`✅ Direct Signup Success: User ${data.user ? 'created' : 'pending'}, Session ${data.session ? 'active' : 'none'}`)
      }
    } catch (err: any) {
      setMessage(`💥 Direct Exception: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">🔍 Authentication Debug Panel</h1>
        
        {/* Test Controls */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">🧪 Test Signup</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              placeholder="Test email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Test password"
              value={testPassword}
              onChange={(e) => setTestPassword(e.target.value)}
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-4 mb-4">
            <button
              onClick={testSignup}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test AuthContext Signup'}
            </button>
            
            <button
              onClick={testDirectSupabaseSignup}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Direct Supabase Signup'}
            </button>
          </div>
          
          {message && (
            <div className="p-3 bg-gray-50 border rounded text-sm font-mono whitespace-pre-wrap">
              {message}
            </div>
          )}
        </div>

        {/* Debug Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">📊 Debug Information</h2>
          
          <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
          <h3 className="text-lg font-semibold mb-2">📝 How to Use This Debug Tool:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Check if <code>isDevelopmentMode</code> is <code>false</code> (should be false with real Supabase credentials)</li>
            <li>Test signup with a real email address you have access to</li>
            <li>Check your email for the confirmation link</li>
            <li>Click the confirmation link and see what happens in the callback</li>
            <li>Check the debug info for any errors or session issues</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AuthDebug