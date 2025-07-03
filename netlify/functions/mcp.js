import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function handler(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { tool, arguments: args } = JSON.parse(event.body);

    let result;

    switch (tool) {
      case 'get_safety_reviews': {
        const { city, country } = args;
        
        const { data, error } = await supabase
          .from('reviews')
          .select(`
            *,
            profiles:user_id (
              full_name,
              avatar_url
            )
          `)
          .eq('destination_city', city)
          .eq('destination_country', country)
          .order('created_at', { ascending: false });

        if (error) throw error;

        result = {
          reviews: data,
          count: data.length,
          destination: `${city}, ${country}`
        };
        break;
      }

      case 'get_user_profile': {
        const { user_id } = args;
        
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user_id)
          .single();

        if (error) throw error;

        result = data;
        break;
      }

      case 'get_destination_stats': {
        const { city, country } = args;
        
        const { data, error } = await supabase
          .from('reviews')
          .select('overall_rating, night_safety_rating, public_transit_rating, walking_alone_rating, harassment_level')
          .eq('destination_city', city)
          .eq('destination_country', country);

        if (error) throw error;

        // Calculate statistics
        result = {
          total_reviews: data.length,
          average_overall: data.length > 0 ? data.reduce((sum, r) => sum + r.overall_rating, 0) / data.length : 0,
          average_night_safety: data.length > 0 ? data.reduce((sum, r) => sum + r.night_safety_rating, 0) / data.length : 0,
          average_public_transit: data.length > 0 ? data.reduce((sum, r) => sum + r.public_transit_rating, 0) / data.length : 0,
          average_walking_alone: data.length > 0 ? data.reduce((sum, r) => sum + r.walking_alone_rating, 0) / data.length : 0,
          harassment_distribution: data.reduce((acc, r) => {
            acc[r.harassment_level] = (acc[r.harassment_level] || 0) + 1;
            return acc;
          }, {})
        };
        break;
      }

      case 'search_destinations': {
        const { query } = args;
        
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
        const { limit = 10 } = args;
        
        const { data, error } = await supabase
          .from('reviews')
          .select(`
            *,
            profiles:user_id (
              full_name,
              avatar_url
            )
          `)
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;

        result = data;
        break;
      }

      case 'get_newsletter_stats': {
        const { data, error } = await supabase
          .from('newsletter_signups')
          .select('*');

        if (error) throw error;

        // Calculate simple statistics
        result = {
          total_signups: data.length,
          signups_today: data.filter(s => {
            const today = new Date().toDateString();
            const signupDate = new Date(s.created_at).toDateString();
            return today === signupDate;
          }).length,
          signups_this_week: data.filter(s => {
            const weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
            return new Date(s.created_at) >= weekAgo;
          }).length,
          signups_this_month: data.filter(s => {
            const monthAgo = new Date();
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            return new Date(s.created_at) >= monthAgo;
          }).length
        };
        break;
      }

      case 'get_recent_newsletter_signups': {
        const { limit = 10 } = args;
        
        const { data, error } = await supabase
          .from('newsletter_signups')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;

        result = data;
        break;
      }

      case 'search_newsletter_signups': {
        const { query } = args;
        
        const { data, error } = await supabase
          .from('newsletter_signups')
          .select('*')
          .ilike('email', `%${query}%`)
          .order('created_at', { ascending: false })
          .limit(50);

        if (error) throw error;

        result = data;
        break;
      }

      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: `Unknown tool: ${tool}` }),
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
      }),
    };

  } catch (error) {
    console.error('MCP function error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        content: [
          {
            type: 'text',
            text: `Error: ${error.message}`
          }
        ]
      }),
    };
  }
} 