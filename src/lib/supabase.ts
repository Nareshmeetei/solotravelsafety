import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helper functions
export const signUp = async (email: string, password: string, fullName: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      data: {
        full_name: fullName,
      }
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
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

// Profile helper functions
export const ensureProfileExists = async (userId: string, userData: any) => {
  try {
    // Check if profile exists
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .single()

    if (!existingProfile) {
      // Create profile if it doesn't exist
      const { error: createError } = await supabase
        .from('profiles')
        .insert({
          id: userId,
          full_name: userData.full_name || userData.user_metadata?.full_name || 'Solo Traveler',
          avatar_url: userData.avatar_url || userData.user_metadata?.avatar_url || null,
          location: userData.location || userData.user_metadata?.location || null,
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
    console.error('Error ensuring profile exists:', error)
    return { error }
  }
}

// Enhanced profile image upload helper
export const uploadProfileImage = async (file: File, userId: string) => {
  try {
    console.log('Starting image upload for user:', userId)
    
    // Get current user data
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      throw new Error('User not authenticated')
    }

    console.log('User authenticated, ensuring profile exists...')
    
    // Ensure profile exists before uploading image
    await ensureProfileExists(userId, user)

    // Generate a unique filename with timestamp
    const fileExt = file.name.split('.').pop()?.toLowerCase()
    const timestamp = Date.now()
    const fileName = `${userId}/${timestamp}.${fileExt}`
    
    console.log('Uploading file:', fileName)
    
    // First, try to delete any existing files for this user to clean up
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
      // Continue with upload even if cleanup fails
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
    console.error('Error in uploadProfileImage:', error)
    return { publicUrl: null, error: error.message || 'Upload failed' }
  }
}

// Database helper functions
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

    // Ensure profile exists
    await ensureProfileExists(user.id, user)

    // Insert review with user_id
    const { data, error } = await supabase
      .from('reviews')
      .insert([{
        ...reviewData,
        user_id: user.id
      }])
      .select()
    
    return { data, error }
  } catch (error) {
    console.error('Error creating review:', error)
    return { data: null, error }
  }
}

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
    await ensureProfileExists(user.id, user)

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

// Fetch all approved destinations
export const getAllDestinations = async () => {
  const { data, error } = await supabase
    .from('user_destinations')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });
  return { data, error };
}

// Newsletter signup
export const addNewsletterEmail = async (email: string) => {
  try {
    // Simple insert into newsletter_signups table
    const { data, error } = await supabase
      .from('newsletter_signups')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      console.error('Error adding newsletter email:', error);
      return { error };
    }

    return { data };
  } catch (error) {
    console.error('Error adding newsletter email:', error);
    return { error };
  }
};