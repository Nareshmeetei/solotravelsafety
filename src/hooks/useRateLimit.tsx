import { useState, useEffect, useCallback } from 'react'
import { clientSideRateLimit, clientRateLimits } from '../lib/rateLimit'

interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

interface RateLimitState {
  isLimited: boolean
  remaining: number
  resetTime: number
  retryAfter: number
}

export const useRateLimit = (type: keyof typeof clientRateLimits) => {
  const [rateLimitState, setRateLimitState] = useState<RateLimitState>({
    isLimited: false,
    remaining: clientRateLimits[type].maxRequests,
    resetTime: Date.now(),
    retryAfter: 0
  })

  const config = clientRateLimits[type]
  const identifier = `client-${type}-${Date.now()}` // Simple identifier for demo

  // Check rate limit status
  const checkRateLimit = useCallback((): boolean => {
    const isLimited = clientSideRateLimit.check(identifier, config.maxRequests, config.windowMs)
    const remaining = clientSideRateLimit.getRemaining(identifier)
    const resetTime = clientSideRateLimit.getResetTime(identifier)
    const retryAfter = Math.max(0, Math.ceil((resetTime - Date.now()) / 1000))

    setRateLimitState({
      isLimited,
      remaining,
      resetTime,
      retryAfter
    })

    return isLimited
  }, [identifier, config.maxRequests, config.windowMs])

  // Execute function with rate limiting
  const executeWithRateLimit = useCallback(async <T>(
    fn: () => Promise<T>,
    onRateLimited?: (retryAfter: number) => void
  ): Promise<T | null> => {
    if (checkRateLimit()) {
      const retryAfter = Math.max(0, Math.ceil((rateLimitState.resetTime - Date.now()) / 1000))
      onRateLimited?.(retryAfter)
      throw new Error(`Rate limit exceeded. Please try again in ${Math.ceil(retryAfter / 60)} minutes.`)
    }

    try {
      const result = await fn()
      return result
    } catch (error) {
      // Check if it's a rate limit error from the server
      if (error instanceof Error && error.message.includes('rate limit')) {
        setRateLimitState(prev => ({
          ...prev,
          isLimited: true,
          remaining: 0
        }))
      }
      throw error
    }
  }, [checkRateLimit, rateLimitState.resetTime])

  // Reset rate limit (useful for testing or manual reset)
  const resetRateLimit = useCallback(() => {
    clientSideRateLimit.requests.delete(identifier)
    setRateLimitState({
      isLimited: false,
      remaining: config.maxRequests,
      resetTime: Date.now(),
      retryAfter: 0
    })
  }, [identifier, config.maxRequests])

  // Update rate limit state periodically
  useEffect(() => {
    const interval = setInterval(() => {
      checkRateLimit()
    }, 1000) // Check every second

    return () => clearInterval(interval)
  }, [checkRateLimit])

  // Initial check
  useEffect(() => {
    checkRateLimit()
  }, [checkRateLimit])

  return {
    ...rateLimitState,
    executeWithRateLimit,
    resetRateLimit,
    checkRateLimit,
    config
  }
}

// Specialized hooks for different operations
export const useAuthRateLimit = () => useRateLimit('auth')
export const useApiRateLimit = () => useRateLimit('api')
export const useSearchRateLimit = () => useRateLimit('search')
export const useUploadRateLimit = () => useRateLimit('upload')
export const useSensitiveRateLimit = () => useRateLimit('sensitive')

// Rate limit error component
interface RateLimitErrorProps {
  retryAfter: number;
  onRetry?: () => void;
}

export const RateLimitError: React.FC<RateLimitErrorProps> = ({ 
  retryAfter, 
  onRetry 
}) => {
  const minutes = Math.ceil(retryAfter / 60)
  
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">
            Rate Limit Exceeded
          </h3>
          <p className="mt-1 text-sm text-red-700">
            Too many requests. Please try again in {minutes} minute{minutes !== 1 ? 's' : ''}.
          </p>
          {onRetry && retryAfter <= 0 && (
            <button
              onClick={onRetry}
              className="mt-2 text-sm text-red-800 hover:text-red-900 underline"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 