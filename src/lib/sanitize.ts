import DOMPurify from 'dompurify'

// Configure DOMPurify for maximum security
const purifyConfig = {
  ALLOWED_TAGS: [], // No HTML tags allowed by default
  ALLOWED_ATTR: [], // No attributes allowed by default
  KEEP_CONTENT: true, // Keep text content but strip HTML
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  RETURN_TRUSTED_TYPE: false
}

// Configure DOMPurify for rich text (when needed)
const richTextConfig = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'ul', 'ol', 'li'],
  ALLOWED_ATTR: [],
  KEEP_CONTENT: true,
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  RETURN_TRUSTED_TYPE: false
}

/**
 * Sanitize plain text input (removes all HTML)
 */
export const sanitizeText = (input: string): string => {
  if (!input || typeof input !== 'string') return ''
  
  // First, sanitize with DOMPurify
  const sanitized = DOMPurify.sanitize(input, purifyConfig)
  
  // Additional safety: remove any remaining HTML-like content
  return sanitized.replace(/<[^>]*>/g, '')
}

/**
 * Sanitize rich text input (allows limited HTML)
 */
export const sanitizeRichText = (input: string): string => {
  if (!input || typeof input !== 'string') return ''
  
  return DOMPurify.sanitize(input, richTextConfig)
}

/**
 * Sanitize URLs
 */
export const sanitizeUrl = (url: string): string => {
  if (!url || typeof url !== 'string') return ''
  
  // Remove any HTML
  const sanitized = sanitizeText(url)
  
  // Basic URL validation
  try {
    const urlObj = new URL(sanitized)
    // Only allow http and https protocols
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return ''
    }
    return sanitized
  } catch {
    // If it's not a valid URL, return empty string
    return ''
  }
}

/**
 * Sanitize email addresses
 */
export const sanitizeEmail = (email: string): string => {
  if (!email || typeof email !== 'string') return ''
  
  // Remove any HTML and whitespace
  const sanitized = sanitizeText(email).trim().toLowerCase()
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(sanitized) ? sanitized : ''
}

/**
 * Sanitize names (letters, spaces, hyphens, apostrophes, periods only)
 */
export const sanitizeName = (name: string): string => {
  if (!name || typeof name !== 'string') return ''
  
  // Remove HTML
  const sanitized = sanitizeText(name)
  
  // Only allow letters, spaces, hyphens, apostrophes, and periods
  return sanitized.replace(/[^a-zA-Z\s\-'\.]/g, '')
}

/**
 * Sanitize location names (letters, spaces, hyphens, apostrophes, periods, commas)
 */
export const sanitizeLocation = (location: string): string => {
  if (!location || typeof location !== 'string') return ''
  
  // Remove HTML
  const sanitized = sanitizeText(location)
  
  // Allow letters, spaces, hyphens, apostrophes, periods, and commas
  return sanitized.replace(/[^a-zA-Z\s\-'\.\,]/g, '')
}

/**
 * Sanitize search queries
 */
export const sanitizeSearchQuery = (query: string): string => {
  if (!query || typeof query !== 'string') return ''
  
  // Remove HTML
  const sanitized = sanitizeText(query)
  
  // Allow letters, numbers, spaces, hyphens, apostrophes, and periods
  return sanitized.replace(/[^a-zA-Z0-9\s\-'\.]/g, '')
}

/**
 * Sanitize review text
 */
export const sanitizeReviewText = (text: string): string => {
  if (!text || typeof text !== 'string') return ''
  
  // Use rich text sanitization for reviews
  return sanitizeRichText(text)
}

/**
 * Sanitize comment text
 */
export const sanitizeCommentText = (text: string): string => {
  if (!text || typeof text !== 'string') return ''
  
  // Use rich text sanitization for comments
  return sanitizeRichText(text)
}

/**
 * Sanitize tags array
 */
export const sanitizeTags = (tags: string[]): string[] => {
  if (!Array.isArray(tags)) return []
  
  return tags
    .map(tag => sanitizeText(tag).trim())
    .filter(tag => tag.length > 0 && tag.length <= 50)
    .slice(0, 10) // Limit to 10 tags
}

/**
 * Sanitize form data object
 */
export const sanitizeFormData = <T extends Record<string, any>>(
  data: T,
  sanitizers: Record<keyof T, (value: any) => any>
): T => {
  const sanitized: any = {}
  
  for (const [key, value] of Object.entries(data)) {
    const sanitizer = sanitizers[key as keyof T]
    if (sanitizer) {
      sanitized[key] = sanitizer(value)
    } else {
      // Default to text sanitization for unknown fields
      sanitized[key] = typeof value === 'string' ? sanitizeText(value) : value
    }
  }
  
  return sanitized as T
}

/**
 * Sanitize user input before database insertion
 */
export const sanitizeForDatabase = {
  text: sanitizeText,
  richText: sanitizeRichText,
  url: sanitizeUrl,
  email: sanitizeEmail,
  name: sanitizeName,
  location: sanitizeLocation,
  searchQuery: sanitizeSearchQuery,
  reviewText: sanitizeReviewText,
  commentText: sanitizeCommentText,
  tags: sanitizeTags,
  formData: sanitizeFormData
}

/**
 * Escape HTML for safe rendering
 */
export const escapeHtml = (text: string): string => {
  if (!text || typeof text !== 'string') return ''
  
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

/**
 * Check if input contains potentially malicious content
 */
export const containsMaliciousContent = (input: string): boolean => {
  if (!input || typeof input !== 'string') return false
  
  const maliciousPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi
  ]
  
  return maliciousPatterns.some(pattern => pattern.test(input))
} 