Solo Travel Safety API Documentation 🔗
This document describes the API endpoints and data structures used in the Solo Travel Safety platform.
🏗️ Architecture
STS uses Supabase as the backend, providing:

PostgreSQL database with Row Level Security (RLS)
Real-time subscriptions
Built-in authentication
File storage for images

🔐 Authentication
All API requests require authentication using Supabase Auth.
Authentication Headers
javascriptconst headers = {
  'Authorization': `Bearer ${supabase.auth.getSession().access_token}`,
  'Content-Type': 'application/json'
}
User Authentication
javascript// Sign up
const { user, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})

// Sign in
const { user, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})

// Sign out
await supabase.auth.signOut()
📊 Database Schema
Users Table
sqlusers (
  id: uuid (primary key)
  email: text (unique)
  username: text (unique)
  avatar_url: text
  bio: text
  travel_experience: text
  created_at: timestamp
  updated_at: timestamp
)
Cities Table
sqlcities (
  id: uuid (primary key)
  name: text
  country: text
  country_code: text
  continent: text
  latitude: decimal
  longitude: decimal
  timezone: text
  population: integer
  safety_score_overall: decimal
  safety_score_night: decimal
  safety_score_transport: decimal
  safety_score_walking: decimal
  confidence_score: decimal
  total_reviews: integer
  created_at: timestamp
  updated_at: timestamp
)
Reviews (Chirps) Table
sqlreviews (
  id: uuid (primary key)
  user_id: uuid (foreign key)
  city_id: uuid (foreign key)
  title: text
  content: text
  safety_rating: integer (1-5)
  category: text
  tags: text[]
  is_anonymous: boolean
  helpful_votes: integer
  location_lat: decimal
  location_lng: decimal
  created_at: timestamp
  updated_at: timestamp
)
Safety Incidents Table
sqlsafety_incidents (
  id: uuid (primary key)
  city_id: uuid (foreign key)
  user_id: uuid (foreign key)
  incident_type: text
  severity: text
  description: text
  location_lat: decimal
  location_lng: decimal
  date_occurred: timestamp
  time_of_day: text
  is_verified: boolean
  created_at: timestamp
)
🌍 Cities API
Get All Cities
javascript// Get cities with pagination
const { data: cities, error } = await supabase
  .from('cities')
  .select(`
    id,
    name,
    country,
    safety_score_overall,
    safety_score_night,
    safety_score_transport,
    safety_score_walking,
    confidence_score,
    total_reviews
  `)
  .order('name')
  .range(0, 49) // Pagination: 50 items per page
Get City by ID
javascriptconst { data: city, error } = await supabase
  .from('cities')
  .select(`
    *,
    reviews (
      id,
      title,
      content,
      safety_rating,
      category,
      tags,
      created_at,
      user:users (username, avatar_url)
    )
  `)
  .eq('id', cityId)
  .single()
Search Cities
javascriptconst { data: cities, error } = await supabase
  .from('cities')
  .select('id, name, country, safety_score_overall')
  .or(`name.ilike.%${query}%,country.ilike.%${query}%`)
  .order('safety_score_overall', { ascending: false })
  .limit(10)
Create City
javascriptconst { data: newCity, error } = await supabase
  .from('cities')
  .insert({
    name: 'Barcelona',
    country: 'Spain',
    country_code: 'ES',
    continent: 'Europe',
    latitude: 41.3851,
    longitude: 2.1734,
    timezone: 'Europe/Madrid'
  })
  .select()
  .single()
💬 Reviews (Chirps) API
Get Reviews for City
javascriptconst { data: reviews, error } = await supabase
  .from('reviews')
  .select(`
    id,
    title,
    content,
    safety_rating,
    category,
    tags,
    helpful_votes,
    created_at,
    user:users (username, avatar_url)
  `)
  .eq('city_id', cityId)
  .order('created_at', { ascending: false })
Create Review
javascriptconst { data: review, error } = await supabase
  .from('reviews')
  .insert({
    city_id: cityId,
    user_id: userId,
    title: 'Great experience in downtown area',
    content: 'Felt very safe walking around during the day...',
    safety_rating: 4,
    category: 'general',
    tags: ['walkable', 'safe', 'tourist-friendly'],
    is_anonymous: false
  })
  .select()
  .single()
Update Review
javascriptconst { data: updatedReview, error } = await supabase
  .from('reviews')
  .update({
    title: 'Updated title',
    content: 'Updated content...',
    safety_rating: 5
  })
  .eq('id', reviewId)
  .eq('user_id', userId) // Ensure user owns the review
  .select()
  .single()
Delete Review
javascriptconst { error } = await supabase
  .from('reviews')
  .delete()
  .eq('id', reviewId)
  .eq('user_id', userId) // Ensure user owns the review
Vote on Review
javascript// Implementation depends on voting system design
const { data, error } = await supabase
  .rpc('vote_on_review', {
    review_id: reviewId,
    user_id: userId,
    vote_type: 'helpful' // or 'not_helpful'
  })
🚨 Safety Incidents API
Get Incidents for City
javascriptconst { data: incidents, error } = await supabase
  .from('safety_incidents')
  .select(`
    id,
    incident_type,
    severity,
    description,
    location_lat,
    location_lng,
    date_occurred,
    time_of_day
  `)
  .eq('city_id', cityId)
  .eq('is_verified', true)
  .order('date_occurred', { ascending: false })
Report Incident
javascriptconst { data: incident, error } = await supabase
  .from('safety_incidents')
  .insert({
    city_id: cityId,
    user_id: userId,
    incident_type: 'harassment',
    severity: 'medium',
    description: 'Description of the incident...',
    location_lat: 41.3851,
    location_lng: 2.1734,
    date_occurred: '2024-01-15T20:30:00Z',
    time_of_day: 'evening'
  })
  .select()
  .single()
👤 Users API
Get User Profile
javascriptconst { data: profile, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)
  .single()
Update User Profile
javascriptconst { data: updatedProfile, error } = await supabase
  .from('users')
  .update({
    username: 'newusername',
    bio: 'Updated bio...',
    travel_experience: 'experienced'
  })
  .eq('id', userId)
  .select()
  .single()
Get User's Reviews
javascriptconst { data: userReviews, error } = await supabase
  .from('reviews')
  .select(`
    id,
    title,
    safety_rating,
    created_at,
    city:cities (name, country)
  `)
  .eq('user_id', userId)
  .order('created_at', { ascending: false })
📈 Analytics API
Get City Statistics
javascriptconst { data: stats, error } = await supabase
  .rpc('get_city_stats', { city_id: cityId })

// Returns:
// {
//   total_reviews: number,
//   avg_safety_rating: number,
//   reviews_by_category: object,
//   common_tags: array,
//   incident_count: number
// }
Get Safety Trends
javascriptconst { data: trends, error } = await supabase
  .rpc('get_safety_trends', { 
    city_id: cityId,
    time_period: '6months'
  })
🔄 Real-time Subscriptions
Subscribe to New Reviews
javascriptconst reviewsSubscription = supabase
  .channel('reviews')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'reviews',
      filter: `city_id=eq.${cityId}`
    },
    (payload) => {
      console.log('New review:', payload.new)
      // Update UI with new review
    }
  )
  .subscribe()

// Clean up subscription
reviewsSubscription.unsubscribe()
Subscribe to Safety Incidents
javascriptconst incidentsSubscription = supabase
  .channel('safety_incidents')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'safety_incidents',
      filter: `city_id=eq.${cityId}`
    },
    (payload) => {
      console.log('New incident reported:', payload.new)
      // Show notification or update map
    }
  )
  .subscribe()
🗺️ Maps Integration
Mapbox Integration
javascript// Get map data for city
const getMapData = async (cityId) => {
  const { data: mapData, error } = await supabase
    .from('cities')
    .select(`
      latitude,
      longitude,
      safety_incidents (
        incident_type,
        severity,
        location_lat,
        location_lng
      ),
      reviews (
        safety_rating,
        location_lat,
        location_lng
      )
    `)
    .eq('id', cityId)
    .single()

  return mapData
}
🔍 Search API
Full-text Search
javascriptconst { data: searchResults, error } = await supabase
  .rpc('search_content', {
    search_query: 'solo female travel barcelona',
    limit_results: 20
  })

// Returns combined results from cities, reviews, and incidents
⚡ Rate Limiting
API requests are limited to:

Authenticated users: 1000 requests/hour
Anonymous users: 100 requests/hour

Rate limit headers:
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
🚨 Error Handling
Standard Error Response
javascript{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid safety rating. Must be between 1 and 5.",
    "details": {
      "field": "safety_rating",
      "value": 6
    }
  }
}
Common Error Codes

AUTHENTICATION_REQUIRED: User must be logged in
PERMISSION_DENIED: User lacks permission for action
VALIDATION_ERROR: Invalid input data
RESOURCE_NOT_FOUND: Requested resource doesn't exist
RATE_LIMIT_EXCEEDED: Too many requests

📝 Best Practices
Performance

Use select() to limit returned fields
Implement pagination for large datasets
Cache frequently accessed data
Use real-time subscriptions sparingly

Security

Always validate user permissions
Use parameterized queries
Sanitize user input
Implement proper RLS policies

Data Quality

Validate all user-submitted data
Implement content moderation
Use consistent data formats
Regular data cleanup procedures