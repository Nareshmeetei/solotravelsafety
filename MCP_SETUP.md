# MCP (Model Context Protocol) Integration with Supabase

This guide explains how to set up and use the MCP integration for your Solo Travel Safety app.

## What is MCP?

Model Context Protocol (MCP) is a standard for connecting AI models to external data sources and tools. In this case, we're using MCP to connect your AI assistant to your Supabase database, allowing it to:

- Query safety reviews for destinations
- Get user profiles
- Calculate destination statistics
- Search destinations
- Retrieve recent reviews

## Files Created

1. **`mcp-server.js`** - The main MCP server that handles database queries
2. **`mcp-config.json`** - Configuration file for MCP server settings
3. **`src/hooks/useMCP.ts`** - React hook for frontend integration
4. **`netlify/functions/mcp.js`** - Netlify function for serverless MCP handling

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 2. Update MCP Configuration

Edit `mcp-config.json` and replace the placeholder values with your actual Supabase credentials:

```json
{
  "mcpServers": {
    "solo-travel-safety": {
      "command": "node",
      "args": ["mcp-server.js"],
      "env": {
        "VITE_SUPABASE_URL": "your_actual_supabase_url",
        "VITE_SUPABASE_ANON_KEY": "your_actual_supabase_anon_key"
      }
    }
  }
}
```

### 3. Install Dependencies

The following packages have been installed:
- `@modelcontextprotocol/sdk`
- `@modelcontextprotocol/server-supabase`
- `dotenv`

### 4. Start the MCP Server

For local development, you can start the MCP server directly:

```bash
node mcp-server.js
```

## Available MCP Tools

### 1. `get_safety_reviews`
Get safety reviews for a specific destination.

**Parameters:**
- `city` (string): City name
- `country` (string): Country name

**Example:**
```javascript
const { getSafetyReviews } = useMCP();
const reviews = await getSafetyReviews('Paris', 'France');
```

### 2. `get_user_profile`
Get user profile information.

**Parameters:**
- `user_id` (string): User ID (UUID)

**Example:**
```javascript
const { getUserProfile } = useMCP();
const profile = await getUserProfile('user-uuid-here');
```

### 3. `get_destination_stats`
Get safety statistics for a destination.

**Parameters:**
- `city` (string): City name
- `country` (string): Country name

**Returns:**
```javascript
{
  total_reviews: number,
  average_overall: number,
  average_night_safety: number,
  average_public_transit: number,
  average_walking_alone: number,
  harassment_distribution: {
    low: number,
    medium: number,
    high: number
  }
}
```

### 4. `search_destinations`
Search destinations by city or country name.

**Parameters:**
- `query` (string): Search query

**Example:**
```javascript
const { searchDestinations } = useMCP();
const destinations = await searchDestinations('Paris');
```

### 5. `get_recent_reviews`
Get recent safety reviews.

**Parameters:**
- `limit` (number, optional): Number of reviews to fetch (default: 10)

**Example:**
```javascript
const { getRecentReviews } = useMCP();
const recentReviews = await getRecentReviews(5);
```

### 6. `get_newsletter_stats`
Get newsletter subscription statistics.

**Parameters:**
- None

**Returns:**
```javascript
{
  total_signups: number,
  active_signups: number,
  unsubscribed: number,
  bounced: number,
  pending: number,
  signups_today: number,
  signups_this_week: number,
  signups_this_month: number,
  source_breakdown: {
    hero_form: number,
    popup: number,
    footer: number,
    // ... other sources
  }
}
```

**Example:**
```javascript
const { getNewsletterStats } = useMCP();
const stats = await getNewsletterStats();
```

### 7. `get_recent_newsletter_signups`
Get recent newsletter signups.

**Parameters:**
- `limit` (number, optional): Number of signups to fetch (default: 10)

**Example:**
```javascript
const { getRecentNewsletterSignups } = useMCP();
const signups = await getRecentNewsletterSignups(5);
```

### 8. `search_newsletter_signups`
Search newsletter signups by email.

**Parameters:**
- `query` (string): Search query (email address)

**Example:**
```javascript
const { searchNewsletterSignups } = useMCP();
const results = await searchNewsletterSignups('user@example.com');
```

## Using MCP in Your React Components

### Basic Usage

```tsx
import React, { useEffect, useState } from 'react';
import { useMCP } from '../hooks/useMCP';

const DestinationStats = ({ city, country }) => {
  const { getDestinationStats, loading, error } = useMCP();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDestinationStats(city, country);
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      }
    };

    if (city && country) {
      fetchStats();
    }
  }, [city, country, getDestinationStats]);

  if (loading) return <div>Loading stats...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!stats) return null;

  return (
    <div>
      <h3>Safety Statistics for {city}, {country}</h3>
      <p>Total Reviews: {stats.total_reviews}</p>
      <p>Average Overall Safety: {stats.average_overall.toFixed(1)}/5</p>
      <p>Average Night Safety: {stats.average_night_safety.toFixed(1)}/5</p>
      <p>Average Public Transit: {stats.average_public_transit.toFixed(1)}/5</p>
      <p>Average Walking Alone: {stats.average_walking_alone.toFixed(1)}/5</p>
    </div>
  );
};
```

### Advanced Usage with Error Handling

```tsx
import React, { useEffect, useState } from 'react';
import { useMCP } from '../hooks/useMCP';

const SafetyReviews = ({ city, country }) => {
  const { getSafetyReviews, loading, error } = useMCP();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getSafetyReviews(city, country);
        setReviews(data.reviews || []);
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
      }
    };

    if (city && country) {
      fetchReviews();
    }
  }, [city, country, getSafetyReviews]);

  if (loading) return <div>Loading reviews...</div>;
  if (error) return <div>Error loading reviews: {error}</div>;

  return (
    <div>
      <h3>Safety Reviews for {city}, {country}</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet for this destination.</p>
      ) : (
        <div>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.profiles.full_name}</h4>
              <p>Overall Safety: {review.overall_rating}/5</p>
              <p>Night Safety: {review.night_safety_rating}/5</p>
              <p>Public Transit: {review.public_transit_rating}/5</p>
              <p>Walking Alone: {review.walking_alone_rating}/5</p>
              <p>Harassment Level: {review.harassment_level}</p>
              <p>{review.review_text}</p>
              <small>Visited: {review.visited_date}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
```

## Deployment

### Netlify Deployment

The MCP integration is set up to work with Netlify functions. The `netlify/functions/mcp.js` file provides a serverless endpoint for MCP requests.

### Environment Variables in Netlify

Make sure to set the following environment variables in your Netlify dashboard:

1. Go to your Netlify site settings
2. Navigate to "Environment variables"
3. Add:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

## Security Considerations

1. **Row Level Security (RLS)**: Your Supabase database already has RLS enabled, which ensures users can only access data they're authorized to see.

2. **API Key Security**: The anon key is safe to use in the frontend, but make sure your service role key is never exposed.

3. **Input Validation**: The MCP server includes basic input validation, but consider adding more robust validation for production use.

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Make sure your `.env` file exists and contains the correct Supabase credentials
   - Verify the environment variables are set in your deployment platform

2. **"MCP server request failed"**
   - Check that the Netlify function is deployed correctly
   - Verify the function URL is accessible

3. **"Unknown tool" error**
   - Make sure you're using the correct tool name
   - Check that the tool is defined in the MCP server

### Debug Mode

To enable debug logging, add this to your MCP server:

```javascript
// Add at the top of mcp-server.js
const DEBUG = process.env.DEBUG === 'true';

// Add logging throughout the server
if (DEBUG) {
  console.error('MCP Request:', { name, args });
}
```

## Next Steps

1. **Add More Tools**: Extend the MCP server with additional tools like:
   - User authentication status
   - Review analytics
   - Destination recommendations

2. **Real-time Updates**: Consider adding WebSocket support for real-time data updates

3. **Caching**: Implement caching strategies to improve performance

4. **Analytics**: Add usage analytics to track MCP tool usage

## Support

If you encounter any issues with the MCP integration, check:
1. Supabase dashboard for database connectivity
2. Netlify function logs for serverless function errors
3. Browser console for frontend errors
4. MCP server logs for server-side issues 