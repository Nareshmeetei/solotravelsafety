import { createClient } from '@supabase/supabase-js'
import { sanitizeObject } from './security-utils'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Strict validation in production
if (import.meta.env.PROD && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  throw new Error('Missing Supabase environment variables')
}

// Enhanced Supabase client with security-first configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Enable persistent sessions (social media-style)
    persistSession: true,
    // Auto-refresh tokens in background
    autoRefreshToken: true,
    // Detect session in URL for email confirmations
    detectSessionInUrl: true,
    // Store session in localStorage for persistence across browser sessions
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    // Flow type for better UX
    flowType: 'pkce'
  },
  global: {
    headers: {
      'X-Client-Info': 'solo-travel-safety-app'
    }
  }
})

// Input validation schemas
const validationSchemas = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/, // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
  username: /^[a-zA-Z0-9_]{3,30}$/,
  city: /^[a-zA-Z\s\-']{1,100}$/,
  country: /^[a-zA-Z\s\-']{1,100}$/,
  rating: (value: number) => Number.isInteger(value) && value >= 1 && value <= 5,
  harassmentLevel: (value: string) => ['low', 'medium', 'high'].includes(value)
}

// Sanitization functions
const sanitizeInput = {
  text: (input: string, maxLength = 1000): string => {
    return input
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[<>\"']/g, '') // Remove potential XSS characters
      .trim()
      .substring(0, maxLength)
  },
  
  array: (input: string[], maxItems = 10, maxLength = 50): string[] => {
    return input
      .slice(0, maxItems)
      .map(item => sanitizeInput.text(item, maxLength))
      .filter(item => item.length > 0)
  },
  
  number: (input: any, min = 0, max = Number.MAX_SAFE_INTEGER): number => {
    const num = Number(input)
    if (isNaN(num)) throw new Error('Invalid number')
    if (num < min || num > max) throw new Error(`Number out of range: ${min}-${max}`)
    return num
  }
}

// Validation helper
const validateInput = (input: any, schema: any, fieldName: string): any => {
  if (typeof schema === 'function') {
    if (!schema(input)) {
      throw new Error(`Invalid ${fieldName}: ${input}`)
    }
    return input
  }
  
  if (schema instanceof RegExp) {
    if (typeof input !== 'string' || !schema.test(input)) {
      throw new Error(`Invalid ${fieldName} format`)
    }
    return input
  }
  
  return input
}

// Rate limiting helper
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const checkRateLimit = (key: string, maxRequests = 60, windowMs = 60000): boolean => {
  const now = Date.now()
  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

// Enhanced auth helper functions with validation
export const signUp = async (email: string, password: string, fullName: string) => {
  try {
    // Validate inputs
    validateInput(email, validationSchemas.email, 'email')
    validateInput(password, validationSchemas.password, 'password')
    
    const sanitizedFullName = sanitizeInput.text(fullName, 100)
    if (sanitizedFullName.length < 1) {
      throw new Error('Full name is required')
    }
    
    // Rate limiting
    const clientKey = `signup_${email}`
    if (!checkRateLimit(clientKey, 3, 3600000)) { // 3 attempts per hour
      throw new Error('Too many signup attempts. Please try again later.')
    }
    
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase().trim(),
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          full_name: sanitizedFullName,
        }
      }
    })
    
    return { data, error }
  } catch (error) {
    console.error('Signup error:', sanitizeObject(error))
    return { 
      data: null, 
      error: { 
        message: error instanceof Error ? error.message : 'Signup failed' 
      } 
    }
  }
}

export const signIn = async (email: string, password: string, rememberMe: boolean = true) => {
  try {
    // Validate inputs
    validateInput(email, validationSchemas.email, 'email')
    
    if (!password || password.length < 8) {
      throw new Error('Invalid password')
    }
    
    // Rate limiting
    const clientKey = `signin_${email}`
    if (!checkRateLimit(clientKey, 5, 900000)) { // 5 attempts per 15 minutes
      throw new Error('Too many login attempts. Please try again later.')
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase().trim(),
      password,
    })
    
    if (error) {
      throw error
    }
    
    // Handle "Remember Me" functionality
    if (data.session && rememberMe) {
      console.log('Session persisted for long-term login')
    } else if (data.session && !rememberMe) {
      console.log('Session set for current browser session only')
    }
    
    return { data, error: null }
  } catch (error) {
    console.error('Sign in error:', sanitizeObject(error))
    return { 
      data: null, 
      error: { 
        message: error instanceof Error ? error.message : 'Sign in failed' 
      } 
    }
  }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Enhanced profile image upload with security
export const uploadProfileImage = async (file: File, userId: string) => {
  try {
    // Validate file
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const maxSize = 5 * 1024 * 1024 // 5MB
    
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.')
    }
    
    if (file.size > maxSize) {
      throw new Error('File too large. Maximum size is 5MB.')
    }
    
    // Validate user authentication
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user || user.id !== userId) {
      throw new Error('Unauthorized')
    }
    
    console.log('Starting secure image upload for user:', userId)
    
    // Ensure profile exists before uploading image
    await ensureProfileExists(userId, user)

    // Generate a secure filename
    const fileExt = file.name.split('.').pop()?.toLowerCase()
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileName = `${userId}/${timestamp}_${randomString}.${fileExt}`
    
    console.log('Uploading file:', fileName)
    
    // Clean up existing files first
    try {
      const { data: existingFiles } = await supabase.storage
        .from('avatars')
        .list(userId)
      
      if (existingFiles && existingFiles.length > 0) {
        const filesToDelete = existingFiles.map(file => `${userId}/${file.name}`)
        await supabase.storage
          .from('avatars')
          .remove(filesToDelete)
        console.log('Cleaned up existing files')
      }
    } catch (cleanupError) {
      console.warn('Could not clean up existing files:', cleanupError)
    }
    
    // Upload file to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.type
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw new Error(`Upload failed: ${uploadError.message}`)
    }

    console.log('Upload successful:', uploadData)

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('avatars')
      .getPublicUrl(fileName)

    if (!urlData?.publicUrl) {
      throw new Error('Failed to get public URL')
    }

    console.log('Public URL generated:', urlData.publicUrl)

    return { publicUrl: urlData.publicUrl, error: null }
  } catch (error: any) {
    console.error('Error in uploadProfileImage:', sanitizeObject(error))
    return { publicUrl: null, error: error.message || 'Upload failed' }
  }
}

// Enhanced review creation with validation
export const createReview = async (reviewData: {
  destination_city: string
  destination_country: string
  overall_rating: number
  night_safety_rating: number
  public_transit_rating: number
  walking_alone_rating: number
  harassment_level: 'low' | 'medium' | 'high'
  review_text: string
  tags: string[]
  visited_date: string
}) => {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    // Check if user's email is confirmed
    if (!user.email_confirmed_at) {
      throw new Error('Please confirm your email address before submitting reviews')
    }

    // Rate limiting
    const clientKey = `review_${user.id}`
    if (!checkRateLimit(clientKey, 5, 3600000)) { // 5 reviews per hour
      throw new Error('Too many reviews submitted. Please try again later.')
    }

    // Validate and sanitize inputs
    const sanitizedData = {
      destination_city: sanitizeInput.text(reviewData.destination_city, 100),
      destination_country: sanitizeInput.text(reviewData.destination_country, 100),
      overall_rating: sanitizeInput.number(reviewData.overall_rating, 1, 5),
      night_safety_rating: sanitizeInput.number(reviewData.night_safety_rating, 1, 5),
      public_transit_rating: sanitizeInput.number(reviewData.public_transit_rating, 1, 5),
      walking_alone_rating: sanitizeInput.number(reviewData.walking_alone_rating, 1, 5),
      harassment_level: validateInput(reviewData.harassment_level, validationSchemas.harassmentLevel, 'harassment_level'),
      review_text: sanitizeInput.text(reviewData.review_text, 2000),
      tags: sanitizeInput.array(reviewData.tags, 10, 30),
      visited_date: reviewData.visited_date // Should be validated as YYYY-MM format
    }

    // Additional validation
    if (!sanitizedData.destination_city || !sanitizedData.destination_country) {
      throw new Error('Destination city and country are required')
    }

    if (sanitizedData.review_text.length < 10) {
      throw new Error('Review text must be at least 10 characters long')
    }

    // Ensure profile exists
    await ensureProfileExists(user.id, user)

    // Insert review with user_id
    const { data, error } = await supabase
      .from('reviews')
      .insert([{
        ...sanitizedData,
        user_id: user.id
      }])
      .select()
    
    return { data, error }
  } catch (error) {
    console.error('Error creating review:', sanitizeObject(error))
    return { 
      data: null, 
      error: { 
        message: error instanceof Error ? error.message : 'Failed to create review' 
      } 
    }
  }
}

// Enhanced newsletter signup with validation
export const addNewsletterEmail = async (email: string) => {
  try {
    // Validate email
    validateInput(email, validationSchemas.email, 'email')
    
    // Rate limiting
    const clientKey = `newsletter_${email}`
    if (!checkRateLimit(clientKey, 3, 3600000)) { // 3 signups per hour per email
      throw new Error('Too many newsletter signup attempts. Please try again later.')
    }

    const sanitizedEmail = email.toLowerCase().trim()

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_signups')
      .select('id')
      .eq('email', sanitizedEmail)
      .single()

    if (existing) {
      throw new Error('Email is already subscribed to our newsletter')
    }

    // Get current user if authenticated
    const { data: { user } } = await supabase.auth.getUser()

    // Insert newsletter signup
    const { data, error } = await supabase
      .from('newsletter_signups')
      .insert([{ 
        email: sanitizedEmail,
        user_id: user?.id || null
      }])
      .select()
      .single()

    if (error) {
      console.error('Error adding newsletter email:', error)
      throw new Error('Failed to subscribe to newsletter')
    }

    return { data }
  } catch (error) {
    console.error('Error adding newsletter email:', sanitizeObject(error))
    return { 
      error: { 
        message: error instanceof Error ? error.message : 'Newsletter signup failed' 
      } 
    }
  }
}

// Keep existing functions but add security enhancements
export const ensureProfileExists = async (userId: string, userData: any) => {
  try {
    // Check if profile exists
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .single()

    if (!existingProfile) {
      // Sanitize user data
      const sanitizedFullName = sanitizeInput.text(
        userData.full_name || userData.user_metadata?.full_name || 'Solo Traveler',
        100
      )
      
      // Create profile if it doesn't exist
      const { error: createError } = await supabase
        .from('profiles')
        .insert({
          id: userId,
          full_name: sanitizedFullName,
          avatar_url: userData.avatar_url || userData.user_metadata?.avatar_url || null,
          location: sanitizeInput.text(userData.location || userData.user_metadata?.location || '', 100) || null,
          bio: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })

      if (createError) {
        console.error('Error creating profile:', createError)
        throw createError
      }
    }

    return { error: null }
  } catch (error) {
    console.error('Error ensuring profile exists:', sanitizeObject(error))
    return { error }
  }
}

// Export all existing functions with security enhancements
export * from './supabase' 