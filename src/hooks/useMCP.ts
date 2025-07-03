import { useState, useCallback } from 'react';

interface MCPResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
}

interface SafetyReview {
  id: string;
  user_id: string;
  destination_city: string;
  destination_country: string;
  overall_rating: number;
  night_safety_rating: number;
  public_transit_rating: number;
  walking_alone_rating: number;
  harassment_level: 'low' | 'medium' | 'high';
  review_text: string;
  tags: string[];
  visited_date: string;
  helpful_count: number;
  created_at: string;
  profiles: {
    full_name: string;
    avatar_url: string | null;
  };
}

interface DestinationStats {
  total_reviews: number;
  average_overall: number;
  average_night_safety: number;
  average_public_transit: number;
  average_walking_alone: number;
  harassment_distribution: Record<string, number>;
}

export const useMCP = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callMCPServer = useCallback(async (toolName: string, args: any): Promise<any> => {
    setLoading(true);
    setError(null);

    try {
      // Connect to the Netlify function MCP endpoint
      const response = await fetch('/.netlify/functions/mcp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tool: toolName,
          arguments: args,
        }),
      });

      if (!response.ok) {
        throw new Error('MCP server request failed');
      }

      const data: MCPResponse = await response.json();
      return JSON.parse(data.content[0].text);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getSafetyReviews = useCallback(async (city: string, country: string) => {
    return callMCPServer('get_safety_reviews', { city, country });
  }, [callMCPServer]);

  const getUserProfile = useCallback(async (userId: string) => {
    return callMCPServer('get_user_profile', { user_id: userId });
  }, [callMCPServer]);

  const getDestinationStats = useCallback(async (city: string, country: string): Promise<DestinationStats> => {
    return callMCPServer('get_destination_stats', { city, country });
  }, [callMCPServer]);

  const searchDestinations = useCallback(async (query: string): Promise<string[]> => {
    return callMCPServer('search_destinations', { query });
  }, [callMCPServer]);

  const getRecentReviews = useCallback(async (limit: number = 10): Promise<SafetyReview[]> => {
    return callMCPServer('get_recent_reviews', { limit });
  }, [callMCPServer]);

  const getNewsletterStats = useCallback(async () => {
    return callMCPServer('get_newsletter_stats', {});
  }, [callMCPServer]);

  const getRecentNewsletterSignups = useCallback(async (limit: number = 10) => {
    return callMCPServer('get_recent_newsletter_signups', { limit });
  }, [callMCPServer]);

  const searchNewsletterSignups = useCallback(async (query: string) => {
    return callMCPServer('search_newsletter_signups', { query });
  }, [callMCPServer]);

  return {
    loading,
    error,
    getSafetyReviews,
    getUserProfile,
    getDestinationStats,
    searchDestinations,
    getRecentReviews,
    getNewsletterStats,
    getRecentNewsletterSignups,
    searchNewsletterSignups,
  };
}; 