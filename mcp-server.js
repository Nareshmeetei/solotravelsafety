#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialize MCP Server
const server = new Server(
  {
    name: 'solo-travel-safety-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tool: Get Safety Reviews for a Destination
server.setRequestHandler('tools/call', async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'get_safety_reviews': {
      const { city, country } = args;
      
      try {
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

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                reviews: data,
                count: data.length,
                destination: `${city}, ${country}`
              }, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching reviews: ${error.message}`
            }
          ]
        };
      }
    }

    case 'get_user_profile': {
      const { user_id } = args;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user_id)
          .single();

        if (error) throw error;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching profile: ${error.message}`
            }
          ]
        };
      }
    }

    case 'get_destination_stats': {
      const { city, country } = args;
      
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('overall_rating, night_safety_rating, public_transit_rating, walking_alone_rating, harassment_level')
          .eq('destination_city', city)
          .eq('destination_country', country);

        if (error) throw error;

        // Calculate statistics
        const stats = {
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

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(stats, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error calculating stats: ${error.message}`
            }
          ]
        };
      }
    }

    case 'search_destinations': {
      const { query } = args;
      
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('destination_city, destination_country')
          .or(`destination_city.ilike.%${query}%,destination_country.ilike.%${query}%`)
          .limit(10);

        if (error) throw error;

        // Get unique destinations
        const uniqueDestinations = [...new Set(data.map(r => `${r.destination_city}, ${r.destination_country}`))];

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(uniqueDestinations, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error searching destinations: ${error.message}`
            }
          ]
        };
      }
    }

    case 'get_recent_reviews': {
      const { limit = 10 } = args;
      
      try {
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

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching recent reviews: ${error.message}`
            }
          ]
        };
      }
    }

    case 'get_newsletter_stats': {
      try {
        const { data, error } = await supabase
          .from('newsletter_signups')
          .select('*');

        if (error) throw error;

        // Calculate simple statistics
        const stats = {
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

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(stats, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching newsletter stats: ${error.message}`
            }
          ]
        };
      }
    }

    case 'get_recent_newsletter_signups': {
      const { limit = 10 } = args;
      
      try {
        const { data, error } = await supabase
          .from('newsletter_signups')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);

        if (error) throw error;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error fetching recent newsletter signups: ${error.message}`
            }
          ]
        };
      }
    }

    case 'search_newsletter_signups': {
      const { query } = args;
      
      try {
        const { data, error } = await supabase
          .from('newsletter_signups')
          .select('*')
          .ilike('email', `%${query}%`)
          .order('created_at', { ascending: false })
          .limit(50);

        if (error) throw error;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error searching newsletter signups: ${error.message}`
            }
          ]
        };
      }
    }

    default:
      return {
        content: [
          {
            type: 'text',
            text: `Unknown tool: ${name}`
          }
        ]
      };
  }
});

// Tool definitions
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'get_safety_reviews',
        description: 'Get safety reviews for a specific destination',
        inputSchema: {
          type: 'object',
          properties: {
            city: {
              type: 'string',
              description: 'City name'
            },
            country: {
              type: 'string',
              description: 'Country name'
            }
          },
          required: ['city', 'country']
        }
      },
      {
        name: 'get_user_profile',
        description: 'Get user profile information',
        inputSchema: {
          type: 'object',
          properties: {
            user_id: {
              type: 'string',
              description: 'User ID (UUID)'
            }
          },
          required: ['user_id']
        }
      },
      {
        name: 'get_destination_stats',
        description: 'Get safety statistics for a destination',
        inputSchema: {
          type: 'object',
          properties: {
            city: {
              type: 'string',
              description: 'City name'
            },
            country: {
              type: 'string',
              description: 'Country name'
            }
          },
          required: ['city', 'country']
        }
      },
      {
        name: 'search_destinations',
        description: 'Search destinations by city or country name',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query'
            }
          },
          required: ['query']
        }
      },
      {
        name: 'get_recent_reviews',
        description: 'Get recent safety reviews',
        inputSchema: {
          type: 'object',
          properties: {
            limit: {
              type: 'number',
              description: 'Number of reviews to fetch (default: 10)'
            }
          }
        }
      },
      {
        name: 'get_newsletter_stats',
        description: 'Get newsletter subscription statistics',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'get_recent_newsletter_signups',
        description: 'Get recent newsletter signups',
        inputSchema: {
          type: 'object',
          properties: {
            limit: {
              type: 'number',
              description: 'Number of signups to fetch (default: 10)'
            }
          }
        }
      },
      {
        name: 'search_newsletter_signups',
        description: 'Search newsletter signups by email',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query (email address)'
            }
          },
          required: ['query']
        }
      }
    ]
  };
});

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);

console.error('Solo Travel Safety MCP Server started');
