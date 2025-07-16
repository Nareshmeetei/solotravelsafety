import { NextFunction, Request, Response } from 'express'

// Security middleware for development server
export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Security Headers
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()')
  
  // HSTS (only in production)
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  }
  
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  
  next()
}

// Rate limiting middleware
export const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Simple in-memory rate limiting (use Redis in production)
  const clientIP = req.ip || req.connection.remoteAddress || 'unknown'
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 100 // Max 100 requests per window
  
  // This is a simplified version - in production, use a proper rate limiting library
  // like express-rate-limit with Redis storage
  
  next()
}

// Input validation middleware
export const validateInput = (req: Request, res: Response, next: NextFunction) => {
  // Check for potentially malicious content in request body
  const checkForMaliciousContent = (obj: any): boolean => {
    if (typeof obj === 'string') {
      const maliciousPatterns = [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /data:text\/html/gi,
        /vbscript:/gi
      ]
      return maliciousPatterns.some(pattern => pattern.test(obj))
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return Object.values(obj).some(value => checkForMaliciousContent(value))
    }
    
    return false
  }
  
  if (checkForMaliciousContent(req.body) || checkForMaliciousContent(req.query)) {
    return res.status(400).json({ error: 'Malicious content detected' })
  }
  
  next()
}

// Content Security Policy middleware
export const cspMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.supabase.co",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://*.supabase.co https://api.netlify.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ].join('; ')
  
  res.setHeader('Content-Security-Policy', csp)
  next()
}

// Helmet-like security middleware
export const helmetMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Remove X-Powered-By header
  res.removeHeader('X-Powered-By')
  
  // Set security headers
  res.setHeader('X-DNS-Prefetch-Control', 'off')
  res.setHeader('X-Download-Options', 'noopen')
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none')
  
  next()
}

// Combined security middleware
export const security = [
  helmetMiddleware,
  cspMiddleware,
  securityMiddleware,
  validateInput,
  rateLimitMiddleware
] 