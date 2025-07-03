import React, { useState, useEffect } from 'react';
import { useMCP } from '../hooks/useMCP';

const MCPTest: React.FC = () => {
  const { 
    getNewsletterStats, 
    getRecentNewsletterSignups, 
    searchNewsletterSignups,
    loading, 
    error 
  } = useMCP();
  
  const [stats, setStats] = useState<any>(null);
  const [recentSignups, setRecentSignups] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const fetchStats = async () => {
    try {
      const data = await getNewsletterStats();
      setStats(data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  const fetchRecentSignups = async () => {
    try {
      const data = await getRecentNewsletterSignups(5);
      setRecentSignups(data || []);
    } catch (err) {
      console.error('Failed to fetch recent signups:', err);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      const data = await searchNewsletterSignups(searchQuery);
      setSearchResults(data || []);
    } catch (err) {
      console.error('Failed to search signups:', err);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchRecentSignups();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">MCP Integration Test</h2>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error: {error}</p>
        </div>
      )}

      {/* Newsletter Statistics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Newsletter Statistics</h3>
        {loading ? (
          <p>Loading stats...</p>
        ) : stats ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">{stats.total_signups || 0}</p>
              <p className="text-sm text-gray-600">Total Signups</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{stats.active_signups || 0}</p>
              <p className="text-sm text-gray-600">Active</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{stats.signups_today || 0}</p>
              <p className="text-sm text-gray-600">Today</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{stats.signups_this_week || 0}</p>
              <p className="text-sm text-gray-600">This Week</p>
            </div>
          </div>
        ) : (
          <p>No stats available</p>
        )}
      </div>

      {/* Recent Signups */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Newsletter Signups</h3>
        {loading ? (
          <p>Loading recent signups...</p>
        ) : recentSignups.length > 0 ? (
          <div className="space-y-2">
            {recentSignups.map((signup: any) => (
              <div key={signup.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{signup.email}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(signup.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>No recent signups</p>
        )}
      </div>

      {/* Search Signups */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Search Newsletter Signups</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter email to search..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50"
          >
            Search
          </button>
        </div>
        
        {searchResults.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Search Results:</h4>
            {searchResults.map((signup: any) => (
              <div key={signup.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{signup.email}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(signup.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Refresh Button */}
      <div className="text-center">
        <button
          onClick={() => {
            fetchStats();
            fetchRecentSignups();
          }}
          disabled={loading}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50"
        >
          Refresh Data
        </button>
      </div>
    </div>
  );
};

export default MCPTest;
