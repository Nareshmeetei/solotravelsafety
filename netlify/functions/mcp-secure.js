import { createClient } from '@supabase/supabase-js';
import rateLimit from 'express-rate-limit';

// Environment variables validation
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Use service key for server-side
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,https://your-domain.com').split(',');

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing required Supabase environment variables');
}

// Create Supabase client with service key for server-side operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Rate limiting storage (in production, use Redis or database)
const rateLimitStore = new Map();

// Rate limiting function
function checkRateLimit(ip, windowMs = 60000, maxRequests = 100) {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }
  
  const requests = rateLimitStore.get(ip);
  // Clean old requests
  const validRequests = requests.filter(time => time > windowStart);
  
  if (validRequests.length >= maxRequests) {
    return false;
  }
  
  validRequests.push(now);
  rateLimitStore.set(ip, validRequests);
  return true;
}

// Input validation schemas
const toolSchemas = {
  get_safety_reviews: {
    required: ['city', 'country'],
    types: { city: 'string', country: 'string' }
  },
  get_user_profile: {
    required: ['user_id'],
    types: { user_id: 'string' }
  },
  get_destination_stats: {
    required: ['city', 'country'],
    types: { city: 'string', country: 'string' }
  },
  search_destinations: {
    required: ['query'],
    types: { query: 'string' }
  },
  get_recent_reviews: {
    required: [],
    types: { limit: 'number' }
  }
};

// Sanitize and validate input
function validateInput(tool, args) {
  const schema = toolSchemas[tool];
  if (!schema) {
    throw new Error(`Unknown tool: ${tool}`);
  }
  
  // Check required fields
  for (const field of schema.required) {
    if (!(field in args)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  // Type validation and sanitization
  const sanitized = {};
  for (const [key, value] of Object.entries(args)) {
    if (key in schema.types) {
      const expectedType = schema.types[key];
      if (expectedType === 'string') {
        if (typeof value !== 'string') {
          throw new Error(`Field ${key} must be a string`);
        }
        // Sanitize string input
        sanitized[key] = value.replace(/[<>\"']/g, '').trim().substring(0, 100);
      } else if (expectedType === 'number') {
        const num = Number(value);
        if (isNaN(num) || num < 0 || num > 1000) {
          throw new Error(`Field ${key} must be a valid positive number under 1000`);
        }
        sanitized[key] = num;
      }
    }
  }
  
  return sanitized;
}

// Authentication middleware
async function authenticateRequest(event) {
  // Get token from Authorization header
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid authorization header');
  }
  
  const token = authHeader.replace('Bearer ', '');
  
  // Verify JWT token with Supabase
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    throw new Error('Invalid or expired token');
  }
  
  // Check if user's email is confirmed
  if (!user.email_confirmed_at) {
    throw new Error('Email not confirmed');
  }
  
  return user;
}

// CORS check
function checkOrigin(origin) {
  if (!origin) return false;
  return allowedOrigins.includes(origin) || allowedOrigins.includes('*');
}

export async function handler(event, context) {
  // CORS headers
  const origin = event.headers.origin || event.headers.Origin;
  const isAllowedOrigin = checkOrigin(origin);
  
  const headers = {
    'Access-Control-Allow-Origin': isAllowedOrigin ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Rate limiting
  const clientIP = event.headers['client-ip'] || 
                   event.headers['x-forwarded-for']?.split(',')[0] || 
                   event.requestContext?.identity?.sourceIp || 
                   'unknown';

  if (!checkRateLimit(clientIP, 60000, 30)) { // 30 requests per minute
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({
        error: 'Rate limit exceeded',
        message: 'Too many requests. Please try again later.',
        retryAfter: 60
      })
    };
  }

  try {
    // Parse and validate request body
    let requestBody;
    try {
      requestBody = JSON.parse(event.body || '{}');
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    // Authenticate user
    const user = await authenticateRequest(event);

    const { tool, arguments: args } = requestBody;
    
    if (!tool) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing tool parameter' })
      };
    }

    // Validate and sanitize input
    const sanitizedArgs = validateInput(tool, args || {});

    let result;

    switch (tool) {
      case 'get_safety_reviews': {
        const { city, country } = sanitizedArgs;
        
        const { data, error } = await supabase
          .from('reviews')
          .select(`
            id,
            destination_city,
            destination_country,
            overall_rating,
            night_safety_rating,
            public_transit_rating,
            walking_alone_rating,
            harassment_level,
            review_text,
            tags,
            visited_date,
            helpful_count,
            created_at,
            profiles:user_id (
              full_name,
              avatar_url
            )
          `)
          .eq('destination_city', city)
          .eq('destination_country', country)
          .order('created_at', { ascending: false })
          .limit(50); // Limit results

        if (error) throw error;

        result = {
          reviews: data || [],
          count: data?.length || 0,
          destination: `${city}, ${country}`
        };
        break;
      }

      case 'get_user_profile': {
        const { user_id } = sanitizedArgs;
        
        // Users can only access their own profile or public profile data
        const isOwnProfile = user.id === user_id;
        
        const selectFields = isOwnProfile 
          ? '*' 
          : 'id, full_name, avatar_url, bio, created_at'; // Public fields only

        const { data, error } = await supabase
          .from('profiles')
          .select(selectFields)
          .eq('id', user_id)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            return {
              statusCode: 404,
              headers,
              body: JSON.stringify({ error: 'Profile not found' })
            };
          }
          throw error;
        }

        result = data;
        break;
      }

      case 'get_destination_stats': {
        const { city, country } = sanitizedArgs;
        
        const { data, error } = await supabase
          .from('reviews')
          .select('overall_rating, night_safety_rating, public_transit_rating, walking_alone_rating, harassment_level')
          .eq('destination_city', city)
          .eq('destination_country', country);

        if (error) throw error;

        // Calculate statistics
        result = {
          total_reviews: data.length,
          average_overall: data.length > 0 ? Math.round((data.reduce((sum, r) => sum + r.overall_rating, 0) / data.length) * 10) / 10 : 0,
          average_night_safety: data.length > 0 ? Math.round((data.reduce((sum, r) => sum + r.night_safety_rating, 0) / data.length) * 10) / 10 : 0,
          average_public_transit: data.length > 0 ? Math.round((data.reduce((sum, r) => sum + r.public_transit_rating, 0) / data.length) * 10) / 10 : 0,
          average_walking_alone: data.length > 0 ? Math.round((data.reduce((sum, r) => sum + r.walking_alone_rating, 0) / data.length) * 10) / 10 : 0,
          harassment_distribution: data.reduce((acc, r) => {
            acc[r.harassment_level] = (acc[r.harassment_level] || 0) + 1;
            return acc;
          }, {})
        };
        break;
      }

      case 'search_destinations': {
        const { query } = sanitizedArgs;
        
        const { data, error } = await supabase
          .from('reviews')
          .select('destination_city, destination_country')
          .or(`destination_city.ilike.%${query}%,destination_country.ilike.%${query}%`)
          .limit(10);

        if (error) throw error;

        // Get unique destinations
        const uniqueDestinations = [...new Set(data.map(r => `${r.destination_city}, ${r.destination_country}`))];
        result = uniqueDestinations;
        break;
      }

      case 'get_recent_reviews': {
        const { limit = 10 } = sanitizedArgs;
        const safeLimit = Math.min(Math.max(limit, 1), 50); // Between 1 and 50
        
        const { data, error } = await supabase
          .from('reviews')
          .select(`
            id,
            destination_city,
            destination_country,
            overall_rating,
            review_text,
            created_at,
            profiles:user_id (
              full_name,
              avatar_url
            )
          `)
          .order('created_at', { ascending: false })
          .limit(safeLimit);

        if (error) throw error;

        result = data || [];
        break;
      }

      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: `Unsupported tool: ${tool}` })
        };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2)
          }
        ]
      })
    };

  } catch (error) {
    console.error('MCP function error:', {
      message: error.message,
      ip: clientIP,
      timestamp: new Date().toISOString()
    });
    
    // Don't expose internal error details
    const isAuthError = error.message.includes('authorization') || 
                       error.message.includes('token') || 
                       error.message.includes('confirmed');
    
    const statusCode = isAuthError ? 401 : 500;
    const errorMessage = isAuthError ? error.message : 'Internal server error';
    
    return {
      statusCode,
      headers,
      body: JSON.stringify({
        error: errorMessage,
        timestamp: new Date().toISOString()
      })
    };
  }
} 