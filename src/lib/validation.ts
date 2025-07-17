import { z } from 'zod'

// Base validation schemas
export const emailSchema = z.string().email('Please enter a valid email address')

export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters long')
  .max(128, 'Password must be less than 128 characters')
  .regex(/^(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
  .regex(/^(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
  .regex(/^(?=.*\d)/, 'Password must contain at least one number')
  .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must contain at least one special character (!@#$%^&*)')

export const nameSchema = z.string()
  .min(1, 'Name is required')
  .max(100, 'Name must be less than 100 characters')
  .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name can only contain letters, spaces, hyphens, apostrophes, and periods')

// User profile validation
export const profileSchema = z.object({
  full_name: nameSchema,
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  location: z.string().max(100, 'Location must be less than 100 characters').optional(),
  avatar_url: z.string().url('Please enter a valid URL').optional().or(z.literal(''))
})

// Review validation
export const reviewSchema = z.object({
  destination_city: z.string()
    .min(1, 'City is required')
    .max(100, 'City name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'City name can only contain letters, spaces, hyphens, apostrophes, and periods'),
  
  destination_country: z.string()
    .min(1, 'Country is required')
    .max(100, 'Country name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Country name can only contain letters, spaces, hyphens, apostrophes, and periods'),
  
  overall_rating: z.number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  
  night_safety_rating: z.number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  
  public_transit_rating: z.number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  
  walking_alone_rating: z.number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  
  harassment_level: z.enum(['low', 'medium', 'high']).refine(
    (val) => ['low', 'medium', 'high'].includes(val),
    { message: 'Harassment level must be low, medium, or high' }
  ),
  
  review_text: z.string()
    .min(10, 'Review must be at least 10 characters long')
    .max(2000, 'Review must be less than 2000 characters'),
  
  tags: z.array(z.string().max(50)).max(10, 'Maximum 10 tags allowed').optional(),
  
  visited_date: z.string()
    .regex(/^\d{4}-\d{2}$/, 'Date must be in YYYY-MM format')
    .refine((date) => {
      const [year, month] = date.split('-').map(Number)
      return year >= 1900 && year <= new Date().getFullYear() && month >= 1 && month <= 12
    }, 'Please enter a valid date')
})

// Comment validation
export const commentSchema = z.object({
  comment_text: z.string()
    .min(1, 'Comment cannot be empty')
    .max(500, 'Comment must be less than 500 characters')
})

// User destination submission validation
export const userDestinationSchema = z.object({
  city: z.string()
    .min(1, 'City is required')
    .max(100, 'City name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'City name can only contain letters, spaces, hyphens, apostrophes, and periods'),
  
  country: z.string()
    .min(1, 'Country is required')
    .max(100, 'Country name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Country name can only contain letters, spaces, hyphens, apostrophes, and periods'),
  
  continent: z.enum(['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica']).refine(
    (val) => ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica'].includes(val),
    { message: 'Please select a valid continent' }
  ),
  
  country_code: z.string()
    .length(2, 'Country code must be exactly 2 characters')
    .regex(/^[A-Z]{2}$/, 'Country code must be 2 uppercase letters'),
  
  description: z.string()
    .min(10, 'Description must be at least 10 characters long')
    .max(1000, 'Description must be less than 1000 characters')
})

// Newsletter signup validation
export const newsletterSignupSchema = z.object({
  email: emailSchema,
  source: z.enum(['hero_form', 'popup', 'footer', 'api', 'manual']).optional()
})

// Authentication validation
export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  fullName: nameSchema.optional()
})

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required')
})

// Search validation
export const searchSchema = z.object({
  query: z.string()
    .min(1, 'Search query is required')
    .max(100, 'Search query must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-'\.]+$/, 'Search query can only contain letters, numbers, spaces, hyphens, apostrophes, and periods')
})

// Utility function to validate and sanitize data
export const validateAndSanitize = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } => {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map(issue => issue.message)
      return { success: false, errors }
    }
    return { success: false, errors: ['Validation failed'] }
  }
}

// Type exports for use in components
export type ProfileFormData = z.infer<typeof profileSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
export type CommentFormData = z.infer<typeof commentSchema>
export type UserDestinationFormData = z.infer<typeof userDestinationSchema>
export type NewsletterSignupFormData = z.infer<typeof newsletterSignupSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>
export type SignInFormData = z.infer<typeof signInSchema>
export type SearchFormData = z.infer<typeof searchSchema> 