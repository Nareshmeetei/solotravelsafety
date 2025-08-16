import * as Sentry from '@sentry/react';
// Security utilities - implementing inline for now
const sanitizeHeaders = (headers: any) => {
  if (!headers) return headers;
  const sanitized = { ...headers };
  // Remove authorization and sensitive headers
  delete sanitized.authorization;
  delete sanitized.cookie;
  delete sanitized['x-api-key'];
  return sanitized;
};

const sanitizeUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    // Remove sensitive query parameters
    urlObj.searchParams.delete('token');
    urlObj.searchParams.delete('password');
    urlObj.searchParams.delete('api_key');
    return urlObj.toString();
  } catch {
    return url;
  }
};

const sanitizeUserContext = (user: any) => {
  if (!user) return user;
  const sanitized = { ...user };
  // Remove sensitive user data
  delete sanitized.password;
  delete sanitized.token;
  return sanitized;
};

const sanitizeBreadcrumb = (breadcrumb: any) => {
  if (!breadcrumb) return breadcrumb;
  const sanitized = { ...breadcrumb };
  if (sanitized.data) {
    delete sanitized.data.password;
    delete sanitized.data.token;
  }
  return sanitized;
};

const shouldFilterBreadcrumb = (breadcrumb: any) => {
  if (!breadcrumb) return false;
  // Filter out breadcrumbs with sensitive data
  return breadcrumb.category === 'auth' || 
         breadcrumb.message?.includes('password') ||
         breadcrumb.message?.includes('token');
};

// Initialize Sentry
Sentry.init({
  dsn: 'https://07e4e0358624c871bd1a90d9bcf9d38f@o4509672197128192.ingest.us.sentry.io/4509672231206912',
  
  // Performance monitoring (disabled in development for faster loading)
  integrations: import.meta.env.DEV ? [] : [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      // Session replay configuration
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  // Set sampling rate for performance monitoring
  tracesSampleRate: import.meta.env.DEV ? 0.0 : 0.1, // Disabled in dev
  
  // Set sampling rate for session replay (only when integration is present)
  ...(import.meta.env.DEV ? {} : {
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% of error sessions
  }),
  
  // Environment configuration
  environment: import.meta.env.MODE || 'development',
  
  // Enable debug mode in development
  debug: import.meta.env.DEV,
  
  // Configure beforeSend to filter out certain errors and sanitize data
  beforeSend(event, hint) {
    // Don't send errors in development mode
    if (import.meta.env.DEV) {
      console.log('Sentry event (development):', event);
      return null;
    }
    
    // Filter out network errors that might be expected
    if (hint.originalException instanceof Error) {
      const error = hint.originalException;
      if (error.message.includes('Network Error') || 
          error.message.includes('Failed to fetch') ||
          error.message.includes('ChunkLoadError') ||
          error.message.includes('Loading chunk')) {
        return null;
      }
    }
    
    // Sanitize sensitive data from event
    if (event.request) {
      // Sanitize headers
      if (event.request.headers) {
        event.request.headers = sanitizeHeaders(event.request.headers);
      }
      
      // Sanitize URL parameters
      if (event.request.url) {
        event.request.url = sanitizeUrl(event.request.url);
      }
    }
    
    // Sanitize user context
    if (event.user) {
      event.user = sanitizeUserContext(event.user);
    }
    
    // Sanitize breadcrumbs
    if (event.breadcrumbs) {
      event.breadcrumbs = event.breadcrumbs.map(sanitizeBreadcrumb);
    }
    
    return event;
  },
  
  // Configure beforeBreadcrumb to filter out certain breadcrumbs and sanitize data
  beforeBreadcrumb(breadcrumb) {
    // Filter out navigation breadcrumbs in development
    if (import.meta.env.DEV && breadcrumb.category === 'navigation') {
      return null;
    }
    
    // Filter out sensitive breadcrumbs
    if (shouldFilterBreadcrumb(breadcrumb)) {
      return null;
    }
    
    // Sanitize breadcrumb data
    return sanitizeBreadcrumb(breadcrumb);
  },
});

export default Sentry; 