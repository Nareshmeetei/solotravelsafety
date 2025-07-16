import { useState, useEffect, useCallback } from 'react'

interface RateLimitInfo {
  remaining: number
  resetTime: number
  isLimited: boolean
}

interface UseRateLimitOptions {
  endpoint: string
  maxRequests: number
  windowMs: number
  onLimitExceeded?: () => void
}

export const useRateLimit = ({
  endpoint,
  maxRequests,
  windowMs,
  onLimitExceeded
}: UseRateLimitOptions) => {
  const [rateLimitInfo, setRateLimitInfo] = useState<RateLimitInfo>({
    remaining: maxRequests,
    resetTime: Date.now() + windowMs,
    isLimited: false
  })

  // Get rate limit info from localStorage
  const getRateLimitInfo = useCallback((): RateLimitInfo => {
    if (typeof window === 'undefined') {
      return {
        remaining: maxRequests,
        resetTime: Date.now() + windowMs,
        isLimited: false
      }
    }

    const key = `rate_limit_${endpoint}`
    const requests = JSON.parse(localStorage.getItem(key) || '[]')
    const now = Date.now()

    // Remove old requests
    const validRequests = requests.filter((timestamp: number) => 
      now - timestamp < windowMs
    )

    const remaining = Math.max(0, maxRequests - validRequests.length)
    const resetTime = validRequests.length > 0 
      ? Math.max(...validRequests) + windowMs 
      : now + windowMs

    return {
      remaining,
      resetTime,
      isLimited: remaining === 0
    }
  }, [endpoint, maxRequests, windowMs])

  // Track a request
  const trackRequest = useCallback(() => {
    if (typeof window === 'undefined') return false

    const key = `rate_limit_${endpoint}`
    const requests = JSON.parse(localStorage.getItem(key) || '[]')
    const now = Date.now()

    // Remove old requests
    const validRequests = requests.filter((timestamp: number) => 
      now - timestamp < windowMs
    )

    if (validRequests.length >= maxRequests) {
      setRateLimitInfo({
        remaining: 0,
        resetTime: Math.max(...validRequests) + windowMs,
        isLimited: true
      })
      
      if (onLimitExceeded) {
        onLimitExceeded()
      }
      
      return false
    }

    // Add current request
    validRequests.push(now)
    localStorage.setItem(key, JSON.stringify(validRequests))

    setRateLimitInfo({
      remaining: maxRequests - validRequests.length,
      resetTime: Math.max(...validRequests) + windowMs,
      isLimited: false
    })

    return true
  }, [endpoint, maxRequests, windowMs, onLimitExceeded])

  // Check if request is allowed
  const isAllowed = useCallback(() => {
    const info = getRateLimitInfo()
    return !info.isLimited
  }, [getRateLimitInfo])

  // Get remaining requests
  const getRemaining = useCallback(() => {
    const info = getRateLimitInfo()
    return info.remaining
  }, [getRateLimitInfo])

  // Get time until reset
  const getTimeUntilReset = useCallback(() => {
    const now = Date.now()
    const timeLeft = rateLimitInfo.resetTime - now
    return Math.max(0, timeLeft)
  }, [rateLimitInfo.resetTime])

  // Format time until reset
  const getFormattedTimeUntilReset = useCallback(() => {
    const timeLeft = getTimeUntilReset()
    if (timeLeft === 0) return 'now'

    const minutes = Math.floor(timeLeft / 60000)
    const seconds = Math.floor((timeLeft % 60000) / 1000)

    if (minutes > 0) {
      return `${minutes}m ${seconds}s`
    }
    return `${seconds}s`
  }, [getTimeUntilReset])

  // Clear rate limit (for testing or admin purposes)
  const clearRateLimit = useCallback(() => {
    if (typeof window === 'undefined') return

    const key = `rate_limit_${endpoint}`
    localStorage.removeItem(key)
    
    setRateLimitInfo({
      remaining: maxRequests,
      resetTime: Date.now() + windowMs,
      isLimited: false
    })
  }, [endpoint, maxRequests, windowMs])

  // Update rate limit info periodically
  useEffect(() => {
    const updateInfo = () => {
      setRateLimitInfo(getRateLimitInfo())
    }

    updateInfo()
    const interval = setInterval(updateInfo, 1000) // Update every second

    return () => clearInterval(interval)
  }, [getRateLimitInfo])

  return {
    ...rateLimitInfo,
    trackRequest,
    isAllowed,
    getRemaining,
    getTimeUntilReset,
    getFormattedTimeUntilReset,
    clearRateLimit
  }
}

// Predefined rate limit configurations
export const rateLimitConfigs = {
  auth: {
    maxRequests: 5,
    windowMs: 15 * 60 * 1000 // 15 minutes
  },
  api: {
    maxRequests: 100,
    windowMs: 15 * 60 * 1000 // 15 minutes
  },
  reviews: {
    maxRequests: 10,
    windowMs: 60 * 60 * 1000 // 1 hour
  },
  newsletter: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000 // 1 hour
  },
  passwordReset: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000 // 1 hour
  },
  general: {
    maxRequests: 1000,
    windowMs: 15 * 60 * 1000 // 15 minutes
  }
}

// Convenience hooks for specific endpoints
export const useAuthRateLimit = (onLimitExceeded?: () => void) => {
  return useRateLimit({
    endpoint: 'auth',
    ...rateLimitConfigs.auth,
    onLimitExceeded
  })
}

export const useApiRateLimit = (onLimitExceeded?: () => void) => {
  return useRateLimit({
    endpoint: 'api',
    ...rateLimitConfigs.api,
    onLimitExceeded
  })
}

export const useReviewsRateLimit = (onLimitExceeded?: () => void) => {
  return useRateLimit({
    endpoint: 'reviews',
    ...rateLimitConfigs.reviews,
    onLimitExceeded
  })
}

export const useNewsletterRateLimit = (onLimitExceeded?: () => void) => {
  return useRateLimit({
    endpoint: 'newsletter',
    ...rateLimitConfigs.newsletter,
    onLimitExceeded
  })
} 