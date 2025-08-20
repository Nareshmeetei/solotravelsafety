import { supabase, initializeNewsletterTable, getNewsletterTableSQL, isDevelopmentMode } from '../lib/supabase';

export const setupNewsletterDatabase = async () => {
  try {
    if (isDevelopmentMode) {
      console.log('🚧 Development mode: Skipping database setup')
      return { success: true, message: 'Development mode - no setup needed' }
    }

    console.log('Setting up newsletter database...')
    
    // First, try to initialize the table
    const initResult = await initializeNewsletterTable()
    
    if (!initResult.success) {
      console.log('Manual table creation required. SQL:')
      console.log(getNewsletterTableSQL())
      
      return {
        success: false,
        message: 'Please run the SQL commands in your Supabase dashboard. Check the browser console for the SQL.',
        sql: getNewsletterTableSQL()
      }
    }

    return {
      success: true,
      message: 'Newsletter database is ready!'
    }
  } catch (error: any) {
    console.error('Database setup error:', error)
    return {
      success: false,
      message: error.message || 'Failed to setup database'
    }
  }
}

// Test database connection and newsletter functionality
export const testNewsletterFunction = async (testEmail: string = 'test@example.com') => {
  try {
    console.log('Testing newsletter subscription with email:', testEmail)
    
    // Try to add a test email
    const { addNewsletterEmail } = await import('../lib/supabase')
    const result = await addNewsletterEmail(testEmail)
    
    console.log('Newsletter test result:', result)
    return result
  } catch (error: any) {
    console.error('Newsletter test error:', error)
    return {
      data: null,
      error: error.message || 'Test failed'
    }
  }
}

// Console helper to display setup instructions
export const displaySetupInstructions = () => {
  console.log(`
🔧 NEWSLETTER DATABASE SETUP INSTRUCTIONS

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to your project: Solo Travel Safety
3. Go to SQL Editor
4. Run the following SQL commands:

${getNewsletterTableSQL()}

5. After running the SQL, test the newsletter form on your website

❓ Need help? Check the console logs when submitting a newsletter form for detailed error messages.
`)
}

// Auto-initialize when imported (for development)
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  setupNewsletterDatabase().then(result => {
    if (!result.success) {
      displaySetupInstructions()
    }
  })
}