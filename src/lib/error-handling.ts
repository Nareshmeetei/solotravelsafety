/**
 * Comprehensive error handling utilities for authentication and form validation
 */

// Common error patterns and their user-friendly messages
const ERROR_PATTERNS = {
  // Sign Up Errors
  signUp: {
    'User already registered': 'An account with this email already exists. Please sign in instead.',
    'user_already_exists': 'An account with this email already exists. Please sign in instead.',
    'Email not confirmed': 'Please check your email and click the confirmation link before signing in.',
    'confirm your email': 'Please check your email and click the confirmation link before signing in.',
    'Invalid email': 'Please enter a valid email address.',
    'Email format': 'Please enter a valid email address (e.g., user@example.com).',
    'Password too short': 'Password must be at least 8 characters long.',
    'Password too weak': 'Password must contain at least one letter.',
    'Password must contain at least one lowercase letter': 'Password must contain at least one lowercase letter (a-z).',
    'Password must contain at least one uppercase letter': 'Password must contain at least one uppercase letter (A-Z).',
    'Password must contain at least one number': 'Password must contain at least one number (0-9).',
    'Password must contain at least one special character': 'Password must contain at least one special character (!@#$%^&*).',
    'Password too long': 'Password must be less than 128 characters.',
    'Network error': 'Connection failed. Please check your internet connection and try again.',
    'Rate limit': 'Too many attempts. Please wait a moment before trying again.',
    'Server error': 'Our servers are temporarily unavailable. Please try again in a few minutes.',
    'Invalid input': 'Please check your information and try again.',
    'Malicious content': 'Invalid characters detected. Please use only letters, numbers, and common symbols.'
  },
  
  // Sign In Errors
  signIn: {
    'Invalid login credentials': 'Incorrect email or password. Please check your credentials.',
    'Email not confirmed': 'Please confirm your email address before signing in. Check your inbox for a confirmation link.',
    'confirm your email': 'Please confirm your email address before signing in. Check your inbox for a confirmation link.',
    'User not found': 'No account found with this email address. Please check your email or sign up.',
    'Invalid email': 'Please enter a valid email address.',
    'Password required': 'Please enter your password.',
    'Network error': 'Connection failed. Please check your internet connection and try again.',
    'Rate limit': 'Too many sign-in attempts. Please wait a moment before trying again.',
    'Server error': 'Our servers are temporarily unavailable. Please try again in a few minutes.',
    'Account disabled': 'Your account has been temporarily disabled. Please contact support.',
    'Too many failed attempts': 'Too many failed sign-in attempts. Please try again later or reset your password.'
  },
  
  // Email Confirmation Errors
  emailConfirmation: {
    'Email not found': 'No account found with this email address.',
    'Already confirmed': 'This email address has already been confirmed.',
    'Invalid token': 'The confirmation link is invalid or has expired. Please request a new one.',
    'Token expired': 'The confirmation link has expired. Please request a new confirmation email.',
    'Network error': 'Connection failed. Please check your internet connection and try again.',
    'Rate limit': 'Too many requests. Please wait before requesting another confirmation email.',
    'Server error': 'Unable to send confirmation email. Please try again in a few minutes.'
  },
  
  // General Validation Errors
  validation: {
    'required': 'This field is required.',
    'invalid email': 'Please enter a valid email address.',
    'email format': 'Please enter a valid email address (e.g., user@example.com).',
    'password too short': 'Password must be at least 8 characters long.',
    'password too weak': 'Password must contain at least one letter.',
    'password must contain at least one lowercase letter': 'Password must contain at least one lowercase letter (a-z).',
    'password must contain at least one uppercase letter': 'Password must contain at least one uppercase letter (A-Z).',
    'password must contain at least one number': 'Password must contain at least one number (0-9).',
    'password must contain at least one special character': 'Password must contain at least one special character (!@#$%^&*).',
    'password too long': 'Password must be less than 128 characters.',
    'invalid characters': 'Please use only letters, numbers, and common symbols.',
    'malicious content': 'Invalid content detected. Please check your input.'
  }
};

/**
 * Get a user-friendly error message for authentication errors
 */
export const getAuthErrorMessage = (error: any, context: 'signUp' | 'signIn' | 'emailConfirmation' = 'signUp'): string => {
  if (!error) return 'An unexpected error occurred. Please try again.';
  
  const errorMessage = typeof error === 'string' ? error : error.message || '';
  const lowerMessage = errorMessage.toLowerCase();
  
  // Check for specific error patterns
  const patterns = ERROR_PATTERNS[context];
  for (const [pattern, message] of Object.entries(patterns)) {
    if (lowerMessage.includes(pattern.toLowerCase())) {
      return message;
    }
  }
  
  // Check for common HTTP status codes
  if (error.status) {
    switch (error.status) {
      case 400:
        return 'Invalid request. Please check your information and try again.';
      case 401:
        return context === 'signIn' ? 'Incorrect email or password.' : 'Authentication failed.';
      case 403:
        return 'Access denied. Please try again or contact support.';
      case 404:
        return 'Service not found. Please try again later.';
      case 429:
        return 'Too many requests. Please wait a moment before trying again.';
      case 500:
        return 'Our servers are temporarily unavailable. Please try again in a few minutes.';
      case 502:
      case 503:
      case 504:
        return 'Service temporarily unavailable. Please try again in a few minutes.';
    }
  }
  
  // Check for network errors
  if (lowerMessage.includes('network') || lowerMessage.includes('fetch') || lowerMessage.includes('connection')) {
    return 'Connection failed. Please check your internet connection and try again.';
  }
  
  // Check for timeout errors
  if (lowerMessage.includes('timeout') || lowerMessage.includes('timed out')) {
    return 'Request timed out. Please try again.';
  }
  
  // Check for rate limiting
  if (lowerMessage.includes('rate limit') || lowerMessage.includes('too many')) {
    return 'Too many attempts. Please wait a moment before trying again.';
  }
  
  // If no specific pattern matches, return a generic but helpful message
  if (context === 'signUp') {
    return 'Unable to create your account. Please check your information and try again.';
  } else if (context === 'signIn') {
    return 'Unable to sign you in. Please check your credentials and try again.';
  } else {
    return 'An error occurred. Please try again.';
  }
};

/**
 * Get a user-friendly error message for validation errors
 */
export const getValidationErrorMessage = (errors: string[]): string => {
  if (!errors || errors.length === 0) {
    return 'Please check your information and try again.';
  }
  
  // Map validation errors to user-friendly messages
  const friendlyErrors = errors.map(error => {
    const lowerError = error.toLowerCase();
    
    // Check for specific validation patterns
    for (const [pattern, message] of Object.entries(ERROR_PATTERNS.validation)) {
      if (lowerError.includes(pattern.toLowerCase())) {
        return message;
      }
    }
    
    // Common field-specific errors
    if (lowerError.includes('email')) {
      return 'Please enter a valid email address.';
    }
    if (lowerError.includes('password')) {
      if (lowerError.includes('short')) {
        return 'Password must be at least 6 characters long.';
      }
      if (lowerError.includes('weak') || lowerError.includes('letter')) {
        return 'Password must contain at least one letter.';
      }
      return 'Please enter a valid password.';
    }
    if (lowerError.includes('required')) {
      return 'This field is required.';
    }
    
    // Return the original error if no pattern matches
    return error;
  });
  
  // Remove duplicates and join
  const uniqueErrors = [...new Set(friendlyErrors)];
  return uniqueErrors.join('. ');
};

/**
 * Get a user-friendly error message for general errors
 */
export const getGeneralErrorMessage = (error: any): string => {
  if (!error) return 'An unexpected error occurred. Please try again.';
  
  const errorMessage = typeof error === 'string' ? error : error.message || '';
  const lowerMessage = errorMessage.toLowerCase();
  
  // Check for common error patterns
  if (lowerMessage.includes('network') || lowerMessage.includes('connection')) {
    return 'Connection failed. Please check your internet connection and try again.';
  }
  
  if (lowerMessage.includes('timeout')) {
    return 'Request timed out. Please try again.';
  }
  
  if (lowerMessage.includes('server') || lowerMessage.includes('unavailable')) {
    return 'Our servers are temporarily unavailable. Please try again in a few minutes.';
  }
  
  if (lowerMessage.includes('rate limit') || lowerMessage.includes('too many')) {
    return 'Too many requests. Please wait a moment before trying again.';
  }
  
  // Return a generic but helpful message
  return 'Something went wrong. Please try again.';
};

/**
 * Log error for debugging (only in development)
 */
export const logError = (error: any, context: string): void => {
  if (import.meta.env.DEV) {
    console.error(`[${context}] Error:`, error);
  }
}; 