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
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
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

  // Get client IP
  const clientIP = event.headers['client-ip'] || 
                   event.headers['x-forwarded-for'] || 
                   event.requestContext?.identity?.sourceIp || 
                   'unknown'

  // Rate limiting configuration
  const rateLimitConfig = {
    reviews: { maxRequests: 10, windowMs: 60 * 60 * 1000 }, // 10 requests per hour
    newsletter: { maxRequests: 3, windowMs: 60 * 60 * 1000 }, // 3 requests per hour
    general: { maxRequests: 100, windowMs: 15 * 60 * 1000 } // 100 requests per 15 minutes
  }

  try {
    const { action, ...data } = JSON.parse(event.body || '{}')

    // Check rate limit based on action
    const config = rateLimitConfig[action] || rateLimitConfig.general
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

    // Handle different API actions
    let result
    switch (action) {
      case 'addNewsletterSignup':
        result = await supabase.rpc('add_newsletter_signup', {
          p_email: data.email,
          p_source: data.source || 'api',
          p_ip_address: clientIP,
          p_user_agent: event.headers['user-agent'] || 'unknown'
        })
        break

      case 'getNewsletterStats':
        result = await supabase.rpc('get_newsletter_stats')
        break

      case 'getRecentReviews':
        result = await supabase
          .from('reviews')
          .select(`
            *,
            profiles:user_id (
              full_name,
              avatar_url
            )
          `)
          .order('created_at', { ascending: false })
          .limit(data.limit || 10)
        break

      case 'searchReviews':
        result = await supabase
          .from('reviews')
          .select(`
            *,
            profiles:user_id (
              full_name,
              avatar_url
            )
          `)
          .or(`destination_city.ilike.%${data.query}%,destination_country.ilike.%${data.query}%`)
          .order('created_at', { ascending: false })
          .limit(20)
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
    console.error('API function error:', error)
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