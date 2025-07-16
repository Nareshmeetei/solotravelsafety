/**
 * Security utilities for data sanitization
 */

// List of sensitive keys that should be redacted
const SENSITIVE_KEYS = [
  'password', 'token', 'secret', 'key', 'auth', 'authorization',
  'api_key', 'api_secret', 'private_key', 'access_token', 'refresh_token'
];

// List of sensitive URL parameters
const SENSITIVE_PARAMS = [
  'token', 'key', 'secret', 'password', 'auth', 'api_key'
];

// List of sensitive HTTP headers
const SENSITIVE_HEADERS = [
  'authorization', 'cookie', 'x-api-key', 'x-auth-token',
  'x-access-token', 'x-refresh-token'
];

/**
 * Sanitize an object by redacting sensitive keys
 */
export const sanitizeObject = (obj: any): any => {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  const sanitized = { ...obj };
  
  SENSITIVE_KEYS.forEach(key => {
    if (sanitized[key] !== undefined) {
      sanitized[key] = '[REDACTED]';
    }
  });

  return sanitized;
};

/**
 * Sanitize URL by redacting sensitive parameters
 */
export const sanitizeUrl = (urlString: string): string => {
  try {
    const url = new URL(urlString);
    
    SENSITIVE_PARAMS.forEach(param => {
      if (url.searchParams.has(param)) {
        url.searchParams.set(param, '[REDACTED]');
      }
    });
    
    return url.toString();
  } catch {
    // If URL parsing fails, return original string
    return urlString;
  }
};

/**
 * Sanitize HTTP headers by removing sensitive ones
 */
export const sanitizeHeaders = (headers: Record<string, string>): Record<string, string> => {
  const sanitized = { ...headers };
  
  SENSITIVE_HEADERS.forEach(header => {
    delete sanitized[header];
  });
  
  return sanitized;
};

/**
 * Check if a string contains sensitive information
 */
export const containsSensitiveData = (text: string): boolean => {
  if (!text) return false;
  
  const lowerText = text.toLowerCase();
  return SENSITIVE_KEYS.some(key => lowerText.includes(key.toLowerCase()));
};

/**
 * Sanitize breadcrumb data
 */
export const sanitizeBreadcrumb = (breadcrumb: any): any => {
  if (!breadcrumb) return breadcrumb;
  
  const sanitized = { ...breadcrumb };
  
  // Sanitize message if it contains sensitive data
  if (sanitized.message && containsSensitiveData(sanitized.message)) {
    sanitized.message = '[REDACTED]';
  }
  
  // Sanitize data object
  if (sanitized.data && typeof sanitized.data === 'object') {
    sanitized.data = sanitizeObject(sanitized.data);
  }
  
  return sanitized;
};

/**
 * Sanitize user context - only keep safe user data
 */
export const sanitizeUserContext = (user: any): any => {
  if (!user) return null;
  
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
};

/**
 * Check if breadcrumb should be filtered out
 */
export const shouldFilterBreadcrumb = (breadcrumb: any): boolean => {
  if (!breadcrumb) return true;
  
  // Filter out sensitive categories
  const sensitiveCategories = ['auth', 'http', 'fetch'];
  if (sensitiveCategories.includes(breadcrumb.category)) {
    return true;
  }
  
  // Filter out breadcrumbs with sensitive messages
  if (breadcrumb.message && containsSensitiveData(breadcrumb.message)) {
    return true;
  }
  
  return false;
}; 