import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Simple in-memory rate limiting (use Redis in production)
const rateLimitStore = new Map()

const checkRateLimit = (ip, endpoint, maxRequests, windowMs) => {
  const now = Date.now()
  const key = `${ip}:${endpoint}`
  const requests = rateLimitStore.get(key) || []
  
  // Remove old requests
  const validRequests = requests.filter(timestamp => now - timestamp < windowMs)
  
  if (validRequests.length >= maxRequests) {
    return false
  }
  
  // Add current request
  validRequests.push(now)
  rateLimitStore.set(key, validRequests)
  return true
}

export async function handler(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  // Get client IP
  const clientIP = event.headers['client-ip'] || 
                   event.headers['x-forwarded-for'] || 
                   event.requestContext?.identity?.sourceIp || 
                   'unknown'

  // Rate limiting configuration
  const rateLimitConfig = {
    auth: { maxRequests: 5, windowMs: 15 * 60 * 1000 }, // 5 requests per 15 minutes
    passwordReset: { maxRequests: 3, windowMs: 60 * 60 * 1000 } // 3 requests per hour
  }

  try {
    const { action, ...data } = JSON.parse(event.body)

    // Check rate limit based on action
    const config = rateLimitConfig[action] || rateLimitConfig.auth
    const isAllowed = checkRateLimit(clientIP, action, config.maxRequests, config.windowMs)

    if (!isAllowed) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          error: 'Too many requests',
          message: `Rate limit exceeded. Please try again in ${Math.ceil(config.windowMs / 60000)} minutes.`,
          retryAfter: Math.ceil(config.windowMs / 1000)
        })
      }
    }

    // Handle different auth actions
    let result
    switch (action) {
      case 'signIn':
        result = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password
        })
        break

      case 'signUp':
        result = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            emailRedirectTo: `${event.headers.origin}/auth/callback`,
            data: {
              full_name: data.fullName
            }
          }
        })
        break

      case 'passwordReset':
        result = await supabase.auth.resetPasswordForEmail(data.email, {
          redirectTo: `${event.headers.origin}/auth/callback`
        })
        break

      case 'resendConfirmation':
        result = await supabase.auth.resend({
          type: 'signup',
          email: data.email
        })
        break

      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid action' })
        }
    }

    if (result.error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: result.error.message })
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        data: result.data,
        message: 'Action completed successfully'
      })
    }

  } catch (error) {
    console.error('Auth function error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: 'An unexpected error occurred'
      })
    }
  }
} 