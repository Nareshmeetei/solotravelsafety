import rateLimit from 'express-rate-limit'
import React from 'react'

// Rate limiting configurations for different endpoints
export const rateLimitConfig = {
  // Authentication endpoints - very strict limits
  auth: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: {
      error: 'Too many authentication attempts. Please try again in 15 minutes.',
      retryAfter: 15 * 60 // 15 minutes in seconds
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too many authentication attempts',
        message: 'Please wait 15 minutes before trying again',
        retryAfter: 15 * 60
      })
    }
  }),

  // API endpoints - moderate limits
  api: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
      error: 'Too many API requests. Please try again in 15 minutes.',
      retryAfter: 15 * 60
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too many API requests',
        message: 'Please wait 15 minutes before trying again',
        retryAfter: 15 * 60
      })
    }
  }),

  // Review submission - prevent spam
  reviews: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // Limit each IP to 10 review submissions per hour
    message: {
      error: 'Too many review submissions. Please try again in 1 hour.',
      retryAfter: 60 * 60
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too many review submissions',
        message: 'Please wait 1 hour before submitting another review',
        retryAfter: 60 * 60
      })
    }
  }),

  // Newsletter signup - prevent abuse
  newsletter: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit each IP to 3 newsletter signups per hour
    message: {
      error: 'Too many newsletter signup attempts. Please try again in 1 hour.',
      retryAfter: 60 * 60
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too many newsletter signup attempts',
        message: 'Please wait 1 hour before trying again',
        retryAfter: 60 * 60
      })
    }
  }),

  // General requests - lenient limits
  general: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // Limit each IP to 1000 requests per windowMs
    message: {
      error: 'Too many requests. Please try again in 15 minutes.',
      retryAfter: 15 * 60
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too many requests',
        message: 'Please wait 15 minutes before trying again',
        retryAfter: 15 * 60
      })
    }
  }),

  // Password reset - very strict
  passwordReset: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit each IP to 3 password reset attempts per hour
    message: {
      error: 'Too many password reset attempts. Please try again in 1 hour.',
      retryAfter: 60 * 60
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Too many password reset attempts',
        message: 'Please wait 1 hour before trying again',
        retryAfter: 60 * 60
      })
    }
  })
}

// Rate limiting middleware for Netlify Functions
export const createRateLimiter = (type: keyof typeof rateLimitConfig) => {
  return (req: any, res: any, next: any) => {
    const limiter = rateLimitConfig[type]
    return limiter(req, res, next)
  }
}

// Client-side rate limiting helper
export const clientRateLimit = {
  // Track requests in localStorage
  trackRequest: (endpoint: string) => {
    if (typeof window === 'undefined') return true
    
    const now = Date.now()
    const key = `rate_limit_${endpoint}`
    const requests = JSON.parse(localStorage.getItem(key) || '[]')
    
    // Remove old requests (older than 15 minutes)
    const filteredRequests = requests.filter((timestamp: number) => 
      now - timestamp < 15 * 60 * 1000
    )
    
    // Check if limit exceeded
    const limits: Record<string, number> = {
      auth: 5,
      api: 100,
      reviews: 10,
      newsletter: 3,
      passwordReset: 3,
      general: 1000
    }
    
    const limit = limits[endpoint] || 100
    if (filteredRequests.length >= limit) {
      return false
    }
    
    // Add current request
    filteredRequests.push(now)
    localStorage.setItem(key, JSON.stringify(filteredRequests))
    return true
  },

  // Check if request is allowed
  isAllowed: (endpoint: string): boolean => {
    return clientRateLimit.trackRequest(endpoint)
  },

  // Get remaining requests
  getRemaining: (endpoint: string): number => {
    if (typeof window === 'undefined') return 100
    
    const now = Date.now()
    const key = `rate_limit_${endpoint}`
    const requests = JSON.parse(localStorage.getItem(key) || '[]')
    
    const filteredRequests = requests.filter((timestamp: number) => 
      now - timestamp < 15 * 60 * 1000
    )
    
    const limits: Record<string, number> = {
      auth: 5,
      api: 100,
      reviews: 10,
      newsletter: 3,
      passwordReset: 3,
      general: 1000
    }
    
    const limit = limits[endpoint] || 100
    return Math.max(0, limit - filteredRequests.length)
  }
}

// Rate limiting hook for React components
export const useRateLimit = (endpoint: string) => {
  const [remaining, setRemaining] = React.useState(() => 
    clientRateLimit.getRemaining(endpoint)
  )

  const isAllowed = React.useCallback(() => {
    const allowed = clientRateLimit.isAllowed(endpoint)
    setRemaining(clientRateLimit.getRemaining(endpoint))
    return allowed
  }, [endpoint])

  const getRemaining = React.useCallback(() => {
    const remaining = clientRateLimit.getRemaining(endpoint)
    setRemaining(remaining)
    return remaining
  }, [endpoint])

  return {
    isAllowed,
    getRemaining,
    remaining
  }
} 