import * as Sentry from '@sentry/react';
import { 
  sanitizeObject, 
  sanitizeUrl, 
  sanitizeHeaders, 
  sanitizeBreadcrumb, 
  sanitizeUserContext, 
  shouldFilterBreadcrumb 
} from './security-utils';

// Initialize Sentry
Sentry.init({
  dsn: 'https://07e4e0358624c871bd1a90d9bcf9d38f@o4509672197128192.ingest.us.sentry.io/4509672231206912',
  
  // Performance monitoring
  integrations: [
    Sentry.browserTracingIntegration(),
  ],
  
  // Set sampling rate for performance monitoring
  tracesSampleRate: 0.1, // 10% of transactions will be sent to Sentry
  
  // Set sampling rate for error monitoring
  replaysSessionSampleRate: 0.1, // 10% of sessions will be recorded
  replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors will be recorded
  
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