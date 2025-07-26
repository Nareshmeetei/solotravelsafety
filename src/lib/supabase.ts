import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Only throw error in production
if (import.meta.env.PROD && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  throw new Error('Missing Supabase environment variables')
}

// Enhanced Supabase client with social media-style session management
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
  }
})

// Import and re-export secure functions from secure client
export {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  uploadProfileImage,
  createReview,
  addNewsletterEmail,
  ensureProfileExists
} from './supabase-secure'

// Enhanced session management functions
export const getSessionInfo = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error) {
    console.error('Error getting session info:', error)
    return null
  }
  
  if (!session) {
    return null
  }
  
  return {
    user: session.user,
    accessToken: session.access_token,
    refreshToken: session.refresh_token,
    expiresAt: session.expires_at,
    isPersistent: localStorage.getItem('supabase.auth.token') !== null
  }
}

// Force refresh session (useful for security)
export const refreshSession = async () => {
  const { data, error } = await supabase.auth.refreshSession()
  return { data, error }
}

// Check if session is about to expire
export const isSessionExpiringSoon = async (thresholdMinutes: number = 5) => {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session?.expires_at) {
    return false
  }
  
  const expiresAt = new Date(session.expires_at * 1000)
  const now = new Date()
  const timeUntilExpiry = expiresAt.getTime() - now.getTime()
  const minutesUntilExpiry = timeUntilExpiry / (1000 * 60)
  
  return minutesUntilExpiry <= thresholdMinutes
}

export const resendConfirmation = async (email: string) => {
  const { data, error } = await supabase.auth.resend({
    type: 'signup',
    email: email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`
    }
  })
  return { data, error }
}

// Chirp image upload helper
export const uploadChirpImages = async (files: File[], userId: string) => {
  try {
    console.log('Starting chirp image upload for user:', userId, 'Files:', files.length)
    
    // Get current user data
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      throw new Error('User not authenticated')
    }

    console.log('User authenticated, uploading chirp images...')
    
    const uploadedUrls: string[] = []
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      
      // Generate a unique filename with timestamp and index
      const fileExt = file.name.split('.').pop()?.toLowerCase()
      const timestamp = Date.now()
      const fileName = `${userId}/chirps/${timestamp}_${i}.${fileExt}`
      
      console.log(`Uploading chirp image ${i + 1}/${files.length}:`, fileName)
      
      // Upload file to storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('chirp-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true,
          contentType: file.type
        })

      if (uploadError) {
        console.error('Upload error for file', i, ':', uploadError)
        throw new Error(`Upload failed for image ${i + 1}: ${uploadError.message}`)
      }

      console.log('Upload successful for file', i, ':', uploadData)

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('chirp-images')
        .getPublicUrl(fileName)

      if (!urlData?.publicUrl) {
        throw new Error(`Failed to get public URL for image ${i + 1}`)
      }

      uploadedUrls.push(urlData.publicUrl)
      console.log('Public URL generated for file', i, ':', urlData.publicUrl)
    }

    console.log('All chirp images uploaded successfully:', uploadedUrls)
    return { publicUrls: uploadedUrls, error: null }
  } catch (error: any) {
    console.error('Error in uploadChirpImages:', error)
    return { publicUrls: [], error: error.message || 'Upload failed' }
  }
}

// Database helper functions
export const getReviewsForDestination = async (city: string, country: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .eq('destination_city', city)
    .eq('destination_country', country)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const getUserReviews = async (userId: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  return { data, error }
}

export const createDestination = async (destinationData: {
  city: string
  country: string
  continent: string
  country_code: string
  description: string
}) => {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    // Check if user's email is confirmed
    if (!user.email_confirmed_at) {
      throw new Error('Please confirm your email address before submitting destinations')
    }

    // Ensure profile exists
    await ensureProfileExists(user.id, user)

    // Insert destination with user_id
    const { data, error } = await supabase
      .from('user_destinations')
      .insert([{
        ...destinationData,
        user_id: user.id
      }])
      .select()
    
    return { data, error }
  } catch (error) {
    console.error('Error creating destination:', error)
    return { data: null, error }
  }
}

export const getUserDestinations = async () => {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { data, error } = await supabase
      .from('user_destinations')
      .select(`
        *,
        profiles (
          full_name
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    
    return { data, error }
  } catch (error) {
    console.error('Error getting user destinations:', error)
    return { data: null, error }
  }
}

export const createComment = async (commentData: {
  review_id: string
  comment_text: string
}) => {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    // Check if user's email is confirmed
    if (!user.email_confirmed_at) {
      throw new Error('Please confirm your email address before commenting')
    }

    // Ensure profile exists
    await secureEnsureProfileExists(user.id, user)

    // Insert comment with user_id
    const { data, error } = await supabase
      .from('comments')
      .insert([{
        ...commentData,
        user_id: user.id
      }])
      .select(`
        *,
        profiles (
          full_name,
          avatar_url
        )
      `)
    
    return { data, error }
  } catch (error) {
    console.error('Error creating comment:', error)
    return { data: null, error }
  }
}

export const getCommentsForReview = async (reviewId: string) => {
  const { data, error } = await supabase
    .from('comments')
    .select(`
      *,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .eq('review_id', reviewId)
    .order('created_at', { ascending: true })
  
  return { data, error }
}

export const likeReview = async (reviewId: string) => {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    // Check if user's email is confirmed
    if (!user.email_confirmed_at) {
      throw new Error('Please confirm your email address before liking reviews')
    }

    // Ensure profile exists
    await ensureProfileExists(user.id, user)

    // Insert like with user_id
    const { data, error } = await supabase
      .from('review_likes')
      .insert([{ 
        review_id: reviewId,
        user_id: user.id
      }])
      .select()
    
    return { data, error }
  } catch (error) {
    console.error('Error liking review:', error)
    return { data: null, error }
  }
}

export const unlikeReview = async (reviewId: string) => {
  try {
    // Get current user
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { error } = await supabase
      .from('review_likes')
      .delete()
      .eq('review_id', reviewId)
      .eq('user_id', user.id)
    
    return { error }
  } catch (error) {
    console.error('Error unliking review:', error)
    return { error }
  }
}

export const getReviewLikes = async (reviewId: string) => {
  const { data, error } = await supabase
    .from('review_likes')
    .select('*')
    .eq('review_id', reviewId)
  
  return { data, error }
}

// Chirp interaction functions
export const likeChirp = async (chirpId: string) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { data, error } = await supabase
      .from('chirp_likes')
      .insert([{ 
        chirp_id: chirpId,
        user_id: user.id
      }])
      .select()
    
    return { data, error }
  } catch (error) {
    console.error('Error liking chirp:', error)
    return { data: null, error }
  }
}

export const unlikeChirp = async (chirpId: string) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { error } = await supabase
      .from('chirp_likes')
      .delete()
      .eq('chirp_id', chirpId)
      .eq('user_id', user.id)
    
    return { error }
  } catch (error) {
    console.error('Error unliking chirp:', error)
    return { error }
  }
}

export const getChirpLikes = async (chirpId: string) => {
  const { data, error } = await supabase
    .from('chirp_likes')
    .select('*')
    .eq('chirp_id', chirpId)
  
  return { data, error }
}

export const createChirpComment = async (commentData: {
  chirp_id: string
  comment_text: string
}) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { data, error } = await supabase
      .from('chirp_comments')
      .insert([{
        ...commentData,
        user_id: user.id
      }])
      .select(`
        *,
        profiles (
          full_name,
          avatar_url
        )
      `)
    
    return { data, error }
  } catch (error) {
    console.error('Error creating chirp comment:', error)
    return { data: null, error }
  }
}

export const getChirpComments = async (chirpId: string) => {
  const { data, error } = await supabase
    .from('chirp_comments')
    .select(`
      *,
      profiles (
        full_name,
        avatar_url
      )
    `)
    .eq('chirp_id', chirpId)
    .order('created_at', { ascending: true })
  
  return { data, error }
}

export const rechirp = async (chirpId: string) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { data, error } = await supabase
      .from('chirp_rechirps')
      .insert([{ 
        chirp_id: chirpId,
        user_id: user.id
      }])
      .select()
    
    return { data, error }
  } catch (error) {
    console.error('Error rechirping:', error)
    return { data: null, error }
  }
}

export const unrechirp = async (chirpId: string) => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      throw new Error('User not authenticated')
    }

    const { error } = await supabase
      .from('chirp_rechirps')
      .delete()
      .eq('chirp_id', chirpId)
      .eq('user_id', user.id)
    
    return { error }
  } catch (error) {
    console.error('Error unrechirping:', error)
    return { error }
  }
}

export const getChirpRechirps = async (chirpId: string) => {
  const { data, error } = await supabase
    .from('chirp_rechirps')
    .select('*')
    .eq('chirp_id', chirpId)
  
  return { data, error }
}

// Fetch all approved destinations
export const getAllDestinations = async () => {
  const { data, error } = await supabase
    .from('user_destinations')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });
  return { data, error };
}