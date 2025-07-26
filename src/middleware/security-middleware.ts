import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Rate limiting storage (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export interface SecurityContext {
  user: any;
  ip: string;
  userAgent: string;
  origin: string;
}

export interface SecurityOptions {
  requireAuth?: boolean;
  requireEmailConfirmed?: boolean;
  rateLimit?: {
    windowMs: number;
    maxRequests: number;
  };
  allowedOrigins?: string[];
  allowedMethods?: string[];
  validateInput?: boolean;
}

// Default security options
const defaultOptions: SecurityOptions = {
  requireAuth: true,
  requireEmailConfirmed: true,
  rateLimit: {
    windowMs: 60000, // 1 minute
    maxRequests: 60
  },
  allowedOrigins: ['http://localhost:5173', 'https://your-domain.com'],
  allowedMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  validateInput: true
};

// Rate limiting function
function checkRateLimit(key: string, options: { windowMs: number; maxRequests: number }): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + options.windowMs });
    return true;
  }
  
  if (record.count >= options.maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

// CORS validation
function validateCORS(origin: string, allowedOrigins: string[]): boolean {
  if (allowedOrigins.includes('*')) return true;
  return allowedOrigins.includes(origin);
}

// Security headers
function getSecurityHeaders(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };
}

// Input sanitization
export function sanitizeInput(input: any): any {
  if (typeof input === 'string') {
    return input
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[<>\"']/g, '') // Remove potential XSS characters
      .trim()
      .substring(0, 1000); // Limit length
  }
  
  if (Array.isArray(input)) {
    return input.slice(0, 100).map(item => sanitizeInput(item));
  }
  
  if (typeof input === 'object' && input !== null) {
    const sanitized: any = {};
    for (const [key, value] of Object.entries(input)) {
      if (typeof key === 'string' && key.length <= 100) {
        sanitized[sanitizeInput(key)] = sanitizeInput(value);
      }
    }
    return sanitized;
  }
  
  return input;
}

// Authentication middleware
async function authenticateRequest(event: any): Promise<any> {
  const authHeader = event.headers.authorization || event.headers.Authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid authorization header');
  }
  
  const token = authHeader.replace('Bearer ', '');
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      throw new Error('Invalid or expired token');
    }
    
    return user;
  } catch (error) {
    throw new Error('Authentication failed');
  }
}

// Audit logging
async function logSecurityEvent(
  event: string,
  context: Partial<SecurityContext>,
  details: any = {}
): Promise<void> {
  try {
    await supabase
      .from('audit_logs')
      .insert([{
        user_id: context.user?.id || null,
        action: event,
        table_name: 'security_events',
        record_id: null,
        new_values: {
          event,
          ip: context.ip,
          userAgent: context.userAgent,
          origin: context.origin,
          details
        },
        ip_address: context.ip,
        user_agent: context.userAgent,
        created_at: new Date().toISOString()
      }]);
  } catch (error) {
    console.error('Failed to log security event:', error);
  }
}

// Main security middleware
export function withSecurity(options: Partial<SecurityOptions> = {}) {
  const config = { ...defaultOptions, ...options };
  
  return async function securityMiddleware(event: any, context: any) {
    const startTime = Date.now();
    
    // Extract request information
    const origin = event.headers.origin || event.headers.Origin || '';
    const userAgent = event.headers['user-agent'] || event.headers['User-Agent'] || '';
    const ip = event.headers['client-ip'] || 
               event.headers['x-forwarded-for']?.split(',')[0] || 
               event.requestContext?.identity?.sourceIp || 
               'unknown';
    
    // Security context
    const securityContext: Partial<SecurityContext> = {
      ip,
      userAgent,
      origin
    };
    
    try {
      // 1. CORS validation
      if (origin && !validateCORS(origin, config.allowedOrigins!)) {
        await logSecurityEvent('CORS_VIOLATION', securityContext, { attemptedOrigin: origin });
        
        return {
          statusCode: 403,
          headers: getSecurityHeaders(''),
          body: JSON.stringify({ error: 'CORS policy violation' })
        };
      }
      
      // 2. Method validation
      if (!config.allowedMethods!.includes(event.httpMethod)) {
        await logSecurityEvent('METHOD_NOT_ALLOWED', securityContext, { method: event.httpMethod });
        
        return {
          statusCode: 405,
          headers: getSecurityHeaders(origin),
          body: JSON.stringify({ error: 'Method not allowed' })
        };
      }
      
      // 3. Handle OPTIONS requests
      if (event.httpMethod === 'OPTIONS') {
        return {
          statusCode: 200,
          headers: getSecurityHeaders(origin),
          body: ''
        };
      }
      
      // 4. Rate limiting
      if (config.rateLimit) {
        const rateLimitKey = `${ip}_${event.httpMethod}_${event.path}`;
        
        if (!checkRateLimit(rateLimitKey, config.rateLimit)) {
          await logSecurityEvent('RATE_LIMIT_EXCEEDED', securityContext, {
            path: event.path,
            method: event.httpMethod
          });
          
          return {
            statusCode: 429,
            headers: getSecurityHeaders(origin),
            body: JSON.stringify({
              error: 'Rate limit exceeded',
              retryAfter: Math.ceil(config.rateLimit.windowMs / 1000)
            })
          };
        }
      }
      
      // 5. Authentication
      let user = null;
      if (config.requireAuth) {
        try {
          user = await authenticateRequest(event);
          securityContext.user = user;
          
          // Check email confirmation if required
          if (config.requireEmailConfirmed && !user.email_confirmed_at) {
            await logSecurityEvent('EMAIL_NOT_CONFIRMED', securityContext);
            
            return {
              statusCode: 403,
              headers: getSecurityHeaders(origin),
              body: JSON.stringify({ error: 'Email confirmation required' })
            };
          }
          
        } catch (authError) {
          await logSecurityEvent('AUTHENTICATION_FAILED', securityContext, {
            error: authError instanceof Error ? authError.message : 'Unknown auth error'
          });
          
          return {
            statusCode: 401,
            headers: getSecurityHeaders(origin),
            body: JSON.stringify({ error: 'Authentication required' })
          };
        }
      }
      
      // 6. Input validation and sanitization
      let requestBody = {};
      if (event.body && config.validateInput) {
        try {
          const parsedBody = JSON.parse(event.body);
          requestBody = sanitizeInput(parsedBody);
        } catch (parseError) {
          await logSecurityEvent('INVALID_JSON', securityContext, {
            bodyPreview: event.body?.substring(0, 100)
          });
          
          return {
            statusCode: 400,
            headers: getSecurityHeaders(origin),
            body: JSON.stringify({ error: 'Invalid JSON in request body' })
          };
        }
      }
      
      // 7. Log successful security check
      await logSecurityEvent('REQUEST_ALLOWED', securityContext, {
        path: event.path,
        method: event.httpMethod,
        processingTime: Date.now() - startTime
      });
      
      // Return enhanced event with security context
      return {
        ...event,
        body: config.validateInput ? JSON.stringify(requestBody) : event.body,
        securityContext: {
          ...securityContext,
          user,
          isAuthenticated: !!user,
          processingTime: Date.now() - startTime
        },
        headers: {
          ...event.headers,
          ...getSecurityHeaders(origin)
        }
      };
      
    } catch (error) {
      await logSecurityEvent('SECURITY_ERROR', securityContext, {
        error: error instanceof Error ? error.message : 'Unknown security error',
        processingTime: Date.now() - startTime
      });
      
      return {
        statusCode: 500,
        headers: getSecurityHeaders(origin),
        body: JSON.stringify({ error: 'Internal security error' })
      };
    }
  };
}

// Specialized middleware for different route types
export const authRequired = withSecurity({
  requireAuth: true,
  requireEmailConfirmed: true,
  rateLimit: { windowMs: 60000, maxRequests: 100 }
});

export const publicEndpoint = withSecurity({
  requireAuth: false,
  requireEmailConfirmed: false,
  rateLimit: { windowMs: 60000, maxRequests: 200 }
});

export const adminOnly = withSecurity({
  requireAuth: true,
  requireEmailConfirmed: true,
  rateLimit: { windowMs: 60000, maxRequests: 50 }
});

export const strictRateLimit = withSecurity({
  requireAuth: true,
  requireEmailConfirmed: true,
  rateLimit: { windowMs: 60000, maxRequests: 10 }
});

// Utility functions
export function createSecureResponse(data: any, statusCode = 200, additionalHeaders = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
      ...additionalHeaders
    },
    body: JSON.stringify(data)
  };
}

export function createErrorResponse(message: string, statusCode = 400, logEvent = true) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff'
    },
    body: JSON.stringify({
      error: message,
      timestamp: new Date().toISOString()
    })
  };
} 