import * as Sentry from '@sentry/react';

/**
 * Report an error to Sentry with additional context
 */
export const reportError = (
  error: Error | string,
  context?: Record<string, any>,
  tags?: Record<string, string>
) => {
  if (typeof error === 'string') {
    Sentry.captureMessage(error, {
      level: 'error',
      contexts: context ? { custom: context } : undefined,
      tags,
    });
  } else {
    Sentry.captureException(error, {
      contexts: context ? { custom: context } : undefined,
      tags,
    });
  }
};

/**
 * Report a warning to Sentry
 */
export const reportWarning = (
  message: string,
  context?: Record<string, any>,
  tags?: Record<string, string>
) => {
  Sentry.captureMessage(message, {
    level: 'warning',
    contexts: context ? { custom: context } : undefined,
    tags,
  });
};

/**
 * Report user information to Sentry
 */
export const setUserContext = (user: {
  id?: string;
  email?: string;
  username?: string;
  [key: string]: any;
}) => {
  Sentry.setUser(user);
};

/**
 * Clear user context from Sentry
 */
export const clearUserContext = () => {
  Sentry.setUser(null);
};

/**
 * Add breadcrumb for debugging
 */
export const addBreadcrumb = (
  message: string,
  category: string = 'manual',
  data?: Record<string, any>,
  level: Sentry.SeverityLevel = 'info'
) => {
  Sentry.addBreadcrumb({
    message,
    category,
    data,
    level,
  });
};

/**
 * Set additional context for error reporting
 */
export const setContext = (name: string, context: Record<string, any>) => {
  Sentry.setContext(name, context);
};

/**
 * Set tags for error reporting
 */
export const setTag = (key: string, value: string) => {
  Sentry.setTag(key, value);
};

/**
 * Set multiple tags at once
 */
export const setTags = (tags: Record<string, string>) => {
  Object.entries(tags).forEach(([key, value]) => {
    Sentry.setTag(key, value);
  });
};

/**
 * Wrap a React component with Sentry performance monitoring
 */
export const withSentryComponent = <P extends object>(
  Component: React.ComponentType<P>,
  name: string
) => {
  return Sentry.withProfiler(Component, { name });
};

/**
 * Utility to handle async errors with Sentry
 */
export const withErrorHandling = <T extends any[], R>(
  fn: (...args: T) => R | Promise<R>,
  context?: Record<string, any>
) => {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      reportError(error as Error, context);
      throw error;
    }
  };
};

/**
 * Utility to handle React event errors
 */
export const withEventErrorHandling = <T extends any[], R>(
  fn: (...args: T) => R | Promise<R>,
  context?: Record<string, any>
) => {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      reportError(error as Error, {
        ...context,
        eventType: 'user_interaction',
        timestamp: new Date().toISOString(),
      });
      throw error;
    }
  };
}; 