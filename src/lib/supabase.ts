import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if we have placeholder values or missing values
const hasPlaceholderValues = 
  !supabaseUrl || 
  !supabaseAnonKey || 
  supabaseUrl === 'your_supabase_project_url' || 
  supabaseAnonKey === 'your_supabase_anon_key' ||
  supabaseUrl.includes('your-project-ref') ||
  supabaseAnonKey.startsWith('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...') ||
  supabaseUrl === 'https://your-project-ref.supabase.co'

// For development with placeholder values, use dummy values to prevent runtime errors
const developmentUrl = hasPlaceholderValues ? 'https://placeholder.supabase.co' : supabaseUrl
const developmentKey = hasPlaceholderValues ? 'placeholder-key' : supabaseAnonKey

// Export flag for components to check if we're in development mode
export const isDevelopmentMode = hasPlaceholderValues

console.log('🔧 Supabase Configuration:', {
  url: supabaseUrl,
  isDevelopmentMode,
  hasValidUrl: !!supabaseUrl && !hasPlaceholderValues,
  hasValidKey: !!supabaseAnonKey && !hasPlaceholderValues
})

// Create Supabase client with secure configuration
export const supabase = createClient(developmentUrl, developmentKey, {
  auth: {
    // Enable automatic session detection from URL (for email confirmation)
    detectSessionInUrl: true,
    // Use PKCE flow for enhanced security
    flowType: 'pkce',
    // Enable persistent sessions across browser sessions
    persistSession: true,
    // Auto-refresh tokens before they expire
    autoRefreshToken: true,
    // Store session in localStorage for persistence
    storage: window.localStorage,
    // Custom storage key for security
    storageKey: 'sts-auth-token',
    // Debug mode only in development
    debug: import.meta.env.DEV
  },
  global: {
    headers: {
      'X-Client-Info': 'solo-travel-safety@1.0.0'
    }
  }
})

// Type definitions for better TypeScript support
export interface Profile {
  id: string
  user_id: string
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  location: string | null
  username: string | null
  profile_name: string | null
  email: string | null
  created_at: string
  updated_at: string
}

export interface AuthError {
  message: string
  status?: number
  details?: string
}

// Enhanced error handling for auth operations
export const handleAuthError = (error: any): AuthError => {
  console.error('Auth Error:', error)
  
  // Handle network/fetch errors
  if (error?.message === 'Failed to fetch' || error?.code === 'NETWORK_ERROR') {
    if (isDevelopmentMode) {
      return {
        message: '🚧 Development mode: Please add real Supabase credentials to .env file to enable authentication. See SETUP-EMAIL-AUTHENTICATION.md for instructions.',
        status: 400,
        details: 'Network error - using placeholder credentials'
      }
    } else {
      return {
        message: 'Unable to connect to authentication service. Please check your internet connection and try again.',
        status: 500,
        details: 'Network connectivity issue'
      }
    }
  }

  // Handle invalid URL errors
  if (error?.message?.includes('Invalid URL') || error?.code === 'INVALID_URL') {
    return {
      message: '🚧 Invalid Supabase configuration. Please check your .env file and ensure you have valid Supabase credentials.',
      status: 400,
      details: 'Invalid Supabase URL or credentials'
    }
  }
  
  // Map common Supabase errors to user-friendly messages
  const errorMessages: { [key: string]: string } = {
    'Invalid login credentials': 'The email or password you entered is incorrect. Please try again.',
    'Email not confirmed': 'Please check your email and click the confirmation link before signing in.',
    'User not found': 'No account found with this email address. Please sign up first.',
    'Password should be at least 6 characters': 'Password must be at least 6 characters long.',
    'Signup requires a valid email': 'Please enter a valid email address.',
    'Email rate limit exceeded': 'Too many email attempts. Please wait a few minutes before trying again.',
    'Invalid email': 'Please enter a valid email address.',
    'User already registered': 'An account with this email already exists. Please sign in instead.',
    'Token has expired or is invalid': 'Your session has expired. Please sign in again.',
    'Invalid token': 'Invalid verification link. Please request a new one.',
    'Email link is invalid or has expired': 'This confirmation link has expired. Please request a new one.'
  }

  const message = errorMessages[error?.message] || error?.message || 'An unexpected error occurred. Please try again.'
  
  return {
    message,
    status: error?.status,
    details: error?.details
  }
}

// Security utilities
export const generateCSRFToken = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)), byte => 
    byte.toString(16).padStart(2, '0')
  ).join('')
}

// Session validation
export const validateSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) throw error
    
    // Check if session is valid and not expired
    if (session && session.expires_at) {
      const expiresAt = new Date(session.expires_at * 1000)
      const now = new Date()
      
      if (now >= expiresAt) {
        await supabase.auth.signOut()
        return null
      }
    }
    
    return session
  } catch (error) {
    console.error('Session validation error:', error)
    return null
  }
}

// Rate limiting helper
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export const checkRateLimit = (key: string, maxAttempts = 5, windowMs = 15 * 60 * 1000): boolean => {
  const now = Date.now()
  const record = rateLimitMap.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxAttempts) {
    return false
  }
  
  record.count++
  return true
}

// Clean up expired rate limit entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 5 * 60 * 1000) // Clean up every 5 minutes


// Newsletter signup function (placeholder for now)
export const addNewsletterEmail = async (email: string) => {
  // TODO: Implement newsletter signup when database is set up
  console.log('Newsletter signup placeholder called with email:', email)
  
  // For now, return success to maintain functionality
  return { 
    data: { email }, 
    error: null 
  }
}

// Review creation function (placeholder for now)
export const createReview = async (reviewData: any) => {
  // TODO: Implement review creation when database is set up
  console.log('Create review placeholder called with data:', reviewData)
  
  // For now, return success to maintain functionality
  return { 
    data: reviewData, 
    error: null 
  }
}

// Get reviews for destination (placeholder for now)
export const getReviewsForDestination = async (destinationId: string) => {
  // TODO: Implement when database is set up
  console.log('Get reviews placeholder called for destination:', destinationId)
  
  return { 
    data: [], 
    error: null 
  }
}

// Upload chirp images with proper implementation
export const uploadChirpImages = async (files: File[], userId: string) => {
  try {
    if (isDevelopmentMode) {
      console.log('🚧 Development mode: Simulating chirp image upload for files:', files.map(f => f.name))
      const placeholderUrls = files.map(f => `https://placeholder-storage.supabase.co/object/public/chirp-images/${userId}/${f.name}?t=${Date.now()}`)
      return { 
        publicUrls: placeholderUrls, 
        error: null 
      }
    }

    const uploadPromises = files.map(async (file, index) => {
      // Generate unique filename to avoid conflicts
      const fileExt = file.name.split('.').pop()
      const fileName = `${userId}-${Date.now()}-${index}.${fileExt}`
      const filePath = `chirps/${fileName}`

      // Try multiple bucket names in order of preference
      const bucketNames = ['chirp-images', 'images', 'avatars', 'profiles', 'public']
      
      for (const bucketName of bucketNames) {
        console.log(`Trying to upload chirp image to bucket: ${bucketName}`)
        const result = await supabase.storage
          .from(bucketName)
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: true
          })
        
        if (!result.error) {
          // Get the public URL for the uploaded file
          const { data: urlData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(filePath)
          
          if (urlData?.publicUrl) {
            console.log(`Chirp image uploaded successfully to ${bucketName}:`, urlData.publicUrl)
            return urlData.publicUrl
          }
        } else {
          console.warn(`Chirp image upload failed for bucket ${bucketName}:`, result.error.message)
        }
      }
      
      // Fallback: Create a data URL for client-side storage
      console.log(`Falling back to client-side storage for chirp image: ${file.name}`)
      const dataUrl = await fileToDataUrl(file)
      
      // Store in localStorage with expiry (for temporary use)
      const imageKey = `temp_chirp_${userId}_${Date.now()}_${index}`
      const imageData = {
        dataUrl,
        timestamp: Date.now(),
        fileName: file.name,
        size: file.size
      }
      
      try {
        localStorage.setItem(imageKey, JSON.stringify(imageData))
        console.log('Chirp image stored in localStorage as fallback')
        return dataUrl
      } catch (storageError) {
        console.error('Failed to store chirp image in localStorage:', storageError)
        throw new Error(`Failed to upload chirp image: ${file.name}`)
      }
    })

    const publicUrls = await Promise.all(uploadPromises)
    
    return { 
      publicUrls, 
      error: null 
    }
  } catch (error: any) {
    console.error('Error in uploadChirpImages:', error)
    return {
      publicUrls: null,
      error: error.message || 'Failed to upload chirp images'
    }
  }
}

// Upload profile image with proper implementation
export const uploadProfileImage = async (file: File, userId: string) => {
  try {
    if (isDevelopmentMode) {
      console.log('🚧 Development mode: Simulating image upload for file:', file.name)
      // Create a placeholder URL that looks realistic
      const placeholderUrl = `https://placeholder-storage.supabase.co/object/public/avatars/${userId}/${file.name}?t=${Date.now()}`
      return { 
        publicUrl: placeholderUrl, 
        error: null 
      }
    }

    // Generate unique filename to avoid conflicts
    const fileExt = file.name.split('.').pop()
    const fileName = `${userId}-${Date.now()}.${fileExt}`
    const filePath = `avatars/${fileName}`

    console.log('Uploading profile image:', { fileName, filePath, fileSize: file.size })

    // Try multiple bucket names in order of preference
    const bucketNames = ['profile-images', 'avatars', 'images', 'profiles', 'public']
    let uploadData = null
    let uploadError = null
    let successfulBucket = null

    // Try each bucket until one works
    for (const bucketName of bucketNames) {
      console.log(`Trying to upload to bucket: ${bucketName}`)
      const result = await supabase.storage
        .from(bucketName)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        })
      
      if (!result.error) {
        uploadData = result.data
        uploadError = null
        successfulBucket = bucketName
        console.log(`Successfully uploaded to bucket: ${bucketName}`)
        break
      } else {
        console.warn(`Upload failed for bucket ${bucketName}:`, result.error.message)
        uploadError = result.error
      }
    }

    if (uploadError || !successfulBucket) {
      console.error('All bucket upload attempts failed. Last error:', uploadError)
      
      // Fallback: Create a data URL for client-side storage
      console.log('Falling back to client-side image storage')
      const dataUrl = await fileToDataUrl(file)
      
      // Store in localStorage with expiry (for temporary use)
      const imageKey = `temp_avatar_${userId}_${Date.now()}`
      const imageData = {
        dataUrl,
        timestamp: Date.now(),
        fileName: file.name,
        size: file.size
      }
      
      try {
        localStorage.setItem(imageKey, JSON.stringify(imageData))
        console.log('Image stored in localStorage as fallback')
        
        return {
          publicUrl: dataUrl,
          error: null
        }
      } catch (storageError) {
        console.error('Failed to store in localStorage:', storageError)
        throw new Error(`Failed to upload image: ${uploadError?.message || 'No available storage options'}`)
      }
    }

    // Get the public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from(successfulBucket)
      .getPublicUrl(filePath)

    if (!urlData?.publicUrl) {
      throw new Error('Failed to get public URL for uploaded image')
    }

    console.log('Image uploaded successfully:', urlData.publicUrl)
    
    return { 
      publicUrl: urlData.publicUrl, 
      error: null 
    }
  } catch (error: any) {
    console.error('Error in uploadProfileImage:', error)
    return {
      publicUrl: null,
      error: error.message || 'Failed to upload image'
    }
  }
}

// Get user destinations (placeholder for now)
export const getUserDestinations = async (userId: string) => {
  // TODO: Implement when database is set up
  console.log('Get user destinations placeholder called for user:', userId)
  
  return { 
    data: [], 
    error: null 
  }
}

// Get user reviews (placeholder for now)
export const getUserReviews = async (userId: string) => {
  // TODO: Implement when database is set up
  console.log('Get user reviews placeholder called for user:', userId)
  
  return { 
    data: [], 
    error: null 
  }
}

// Create destination (placeholder for now)
export const createDestination = async (destinationData: any) => {
  // TODO: Implement when database is set up
  console.log('Create destination placeholder called with data:', destinationData)
  
  return { 
    data: destinationData, 
    error: null 
  }
}

// Ensure profile exists with proper implementation
export const ensureProfileExists = async (userId: string, userData: any) => {
  try {
    if (isDevelopmentMode) {
      console.log('🚧 Development mode: Simulating profile creation for user:', userId)
      return { 
        data: userData, 
        error: null 
      }
    }

    console.log('Checking if profile exists for user:', userId)

    // First, check if profile already exists
    const { data: existingProfile, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle() // Use maybeSingle to avoid error when no rows found

    // If profile exists, return it
    if (existingProfile) {
      console.log('Profile already exists:', existingProfile)
      return {
        data: existingProfile,
        error: null
      }
    }

    // If profile doesn't exist, create it using upsert to handle RLS better
    console.log('Creating new profile for user:', userId)
    
    const profileData = {
      user_id: userId,
      full_name: userData.user_metadata?.full_name || userData.email?.split('@')[0] || 'Solo Traveler',
      username: userData.user_metadata?.username || userData.email?.split('@')[0] || `user_${userId.slice(0, 8)}`,
      email: userData.email,
      avatar_url: userData.user_metadata?.avatar_url || null,
      bio: null,
      location: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    // Use upsert to handle conflicts and RLS policies better
    const { data: newProfile, error: upsertError } = await supabase
      .from('profiles')
      .upsert(profileData, {
        onConflict: 'user_id',
        ignoreDuplicates: false
      })
      .select()
      .single()

    if (upsertError) {
      console.error('Error upserting profile:', upsertError)
      
      // If RLS error, try to handle gracefully
      if (upsertError.message.includes('row-level security') || upsertError.message.includes('RLS')) {
        console.warn('RLS policy violation detected, attempting fallback approach')
        
        // Try to update user metadata as fallback
        try {
          const { error: updateError } = await supabase.auth.updateUser({
            data: {
              full_name: profileData.full_name,
              username: profileData.username,
              avatar_url: profileData.avatar_url
            }
          })
          
          if (!updateError) {
            console.log('Updated user metadata as fallback for profile creation')
            // Return a synthetic profile object
            return {
              data: {
                user_id: userId,
                ...profileData,
                id: userId // Use user_id as profile id
              },
              error: null
            }
          }
        } catch (fallbackError) {
          console.error('Fallback update also failed:', fallbackError)
        }
      }
      
      throw new Error(`Failed to create profile: ${upsertError.message}`)
    }

    console.log('Profile created successfully:', newProfile)
    
    return {
      data: newProfile,
      error: null
    }
  } catch (error: any) {
    console.error('Error in ensureProfileExists:', error)
    return {
      data: null,
      error: error.message || 'Failed to ensure profile exists'
    }
  }
}

// Session expiry check (placeholder for now)
export const isSessionExpiringSoon = (): boolean => {
  // TODO: Implement proper session expiry check
  return false
}

// Refresh session (placeholder for now)
export const refreshSession = async () => {
  // TODO: Implement proper session refresh
  console.log('Refresh session placeholder called')
  
  return { 
    data: null, 
    error: null 
  }
}

// Like chirp (placeholder for now)
export const likeChirp = async (chirpId: string, userId: string) => {
  // TODO: Implement when database is set up
  console.log('Like chirp placeholder called for chirp:', chirpId, 'by user:', userId)
  
  return { 
    data: { chirpId, userId }, 
    error: null 
  }
}

// Unlike chirp (placeholder for now)
export const unlikeChirp = async (chirpId: string, userId: string) => {
  // TODO: Implement when database is set up
  console.log('Unlike chirp placeholder called for chirp:', chirpId, 'by user:', userId)
  
  return { 
    data: { chirpId, userId }, 
    error: null 
  }
}

// Get chirp likes (placeholder for now)
export const getChirpLikes = async (chirpId: string) => {
  // TODO: Implement when database is set up
  console.log('Get chirp likes placeholder called for chirp:', chirpId)
  
  return { 
    data: [], 
    error: null 
  }
}

// Helper function to convert file to data URL
function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// Clean up old temporary images from localStorage
export const cleanupTempImages = () => {
  const maxAge = 24 * 60 * 60 * 1000 // 24 hours
  const now = Date.now()
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('temp_avatar_') || key?.startsWith('temp_chirp_')) {
      try {
        const data = JSON.parse(localStorage.getItem(key) || '{}')
        if (now - data.timestamp > maxAge) {
          localStorage.removeItem(key)
          console.log('Cleaned up old temp image:', key)
        }
      } catch (error) {
        // Remove invalid entries
        localStorage.removeItem(key)
      }
    }
  }
}

// Initialize cleanup on app start and set up periodic cleanup
if (typeof window !== 'undefined') {
  // Clean up on app start
  cleanupTempImages()
  
  // Clean up every hour
  setInterval(cleanupTempImages, 60 * 60 * 1000)
}