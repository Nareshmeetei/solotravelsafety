import { supabase } from './supabase';

export interface UserData {
  profile: any;
  reviews: any[];
  newsletter_signups: any[];
  auth_logs: any[];
  preferences: any;
}

export interface DataExportOptions {
  includeReviews: boolean;
  includeNewsletter: boolean;
  includeAuthLogs: boolean;
  includePreferences: boolean;
  format: 'json' | 'csv';
}

/**
 * Export user data in compliance with GDPR right to portability
 */
export const exportUserData = async (
  userId: string,
  options: DataExportOptions = {
    includeReviews: true,
    includeNewsletter: true,
    includeAuthLogs: false,
    includePreferences: true,
    format: 'json'
  }
): Promise<string> => {
  try {
    const userData: UserData = {
      profile: null,
      reviews: [],
      newsletter_signups: [],
      auth_logs: [],
      preferences: {}
    };

    // Get user profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError) {
      throw new Error(`Failed to fetch profile: ${profileError.message}`);
    }

    userData.profile = profile;

    // Get user reviews if requested
    if (options.includeReviews) {
      const { data: reviews, error: reviewsError } = await supabase
        .from('reviews')
        .select('*')
        .eq('user_id', userId);

      if (reviewsError) {
        console.warn('Failed to fetch reviews:', reviewsError.message);
      } else {
        userData.reviews = reviews || [];
      }
    }

    // Get newsletter signups if requested
    if (options.includeNewsletter) {
      const { data: newsletter, error: newsletterError } = await supabase
        .from('newsletter_signups')
        .select('*')
        .eq('email', profile.email);

      if (newsletterError) {
        console.warn('Failed to fetch newsletter data:', newsletterError.message);
      } else {
        userData.newsletter_signups = newsletter || [];
      }
    }

    // Get auth logs if requested (admin only)
    if (options.includeAuthLogs) {
      const { data: authLogs, error: authLogsError } = await supabase
        .from('auth_logs')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(100);

      if (authLogsError) {
        console.warn('Failed to fetch auth logs:', authLogsError.message);
      } else {
        userData.auth_logs = authLogs || [];
      }
    }

    // Get user preferences if requested
    if (options.includePreferences) {
      const { data: preferences, error: preferencesError } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (preferencesError && preferencesError.code !== 'PGRST116') {
        console.warn('Failed to fetch preferences:', preferencesError.message);
      } else {
        userData.preferences = preferences || {};
      }
    }

    // Format data based on requested format
    if (options.format === 'csv') {
      return convertToCSV(userData);
    } else {
      return JSON.stringify(userData, null, 2);
    }
  } catch (error) {
    console.error('Data export failed:', error);
    throw new Error('Failed to export user data');
  }
};

/**
 * Delete user data in compliance with GDPR right to erasure
 */
export const deleteUserData = async (userId: string): Promise<boolean> => {
  try {
    // Get user email for newsletter deletion
    const { data: profile } = await supabase
      .from('profiles')
      .select('email')
      .eq('id', userId)
      .single();

    const email = profile?.email;

    // Delete in order to respect foreign key constraints
    const deletions = [];

    // Delete user reviews
    deletions.push(
      supabase
        .from('reviews')
        .delete()
        .eq('user_id', userId)
    );

    // Delete newsletter signups
    if (email) {
      deletions.push(
        supabase
          .from('newsletter_signups')
          .delete()
          .eq('email', email)
      );
    }

    // Delete user preferences
    deletions.push(
      supabase
        .from('user_preferences')
        .delete()
        .eq('user_id', userId)
    );

    // Delete auth logs
    deletions.push(
      supabase
        .from('auth_logs')
        .delete()
        .eq('user_id', userId)
    );

    // Delete user profile
    deletions.push(
      supabase
        .from('profiles')
        .delete()
        .eq('id', userId)
    );

    // Execute all deletions
    const results = await Promise.all(deletions);
    
    // Check for errors
    const errors = results.filter(result => result.error);
    if (errors.length > 0) {
      console.error('Some deletions failed:', errors);
      throw new Error('Failed to delete all user data');
    }

    // Delete user account from Supabase Auth
    const { error: authError } = await supabase.auth.admin.deleteUser(userId);
    if (authError) {
      console.error('Failed to delete auth user:', authError);
      throw new Error('Failed to delete user account');
    }

    return true;
  } catch (error) {
    console.error('User data deletion failed:', error);
    throw new Error('Failed to delete user data');
  }
};

/**
 * Anonymize user data (alternative to deletion)
 */
export const anonymizeUserData = async (userId: string): Promise<boolean> => {
  try {
    const anonymizedData = {
      full_name: 'Deleted User',
      avatar_url: null,
      bio: null,
      website: null,
      location: null,
      is_anonymous: true
    };

    // Anonymize profile
    const { error: profileError } = await supabase
      .from('profiles')
      .update(anonymizedData)
      .eq('id', userId);

    if (profileError) {
      throw new Error(`Failed to anonymize profile: ${profileError.message}`);
    }

    // Anonymize reviews (keep content but remove personal info)
    const { error: reviewsError } = await supabase
      .from('reviews')
      .update({
        user_id: null,
        is_anonymous: true
      })
      .eq('user_id', userId);

    if (reviewsError) {
      console.warn('Failed to anonymize reviews:', reviewsError.message);
    }

    return true;
  } catch (error) {
    console.error('Data anonymization failed:', error);
    throw new Error('Failed to anonymize user data');
  }
};

/**
 * Convert user data to CSV format
 */
const convertToCSV = (userData: UserData): string => {
  const csvLines: string[] = [];
  
  // Add profile data
  if (userData.profile) {
    csvLines.push('Profile Data');
    csvLines.push('Field,Value');
    Object.entries(userData.profile).forEach(([key, value]) => {
      csvLines.push(`${key},"${value}"`);
    });
    csvLines.push('');
  }

  // Add reviews data
  if (userData.reviews.length > 0) {
    csvLines.push('Reviews Data');
    const headers = Object.keys(userData.reviews[0]).join(',');
    csvLines.push(headers);
    userData.reviews.forEach(review => {
      const values = Object.values(review).map(value => `"${value}"`).join(',');
      csvLines.push(values);
    });
    csvLines.push('');
  }

  // Add newsletter data
  if (userData.newsletter_signups.length > 0) {
    csvLines.push('Newsletter Data');
    const headers = Object.keys(userData.newsletter_signups[0]).join(',');
    csvLines.push(headers);
    userData.newsletter_signups.forEach(signup => {
      const values = Object.values(signup).map(value => `"${value}"`).join(',');
      csvLines.push(values);
    });
    csvLines.push('');
  }

  return csvLines.join('\n');
};

/**
 * Download data as file
 */
export const downloadData = (data: string, filename: string, format: string) => {
  const blob = new Blob([data], { 
    type: format === 'csv' ? 'text/csv' : 'application/json' 
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Get data retention information
 */
export const getDataRetentionInfo = () => {
  return {
    profile: 'Until account deletion',
    reviews: 'Until account deletion or 7 years (whichever comes first)',
    newsletter_signups: 'Until unsubscribed or account deletion',
    auth_logs: '1 year',
    preferences: 'Until account deletion',
    backup_data: '30 days after account deletion'
  };
};

/**
 * Check if user has pending data requests
 */
export const checkPendingDataRequests = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('data_requests')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to check data requests:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error checking data requests:', error);
    return [];
  }
}; 