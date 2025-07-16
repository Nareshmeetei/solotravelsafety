import React, { useState } from 'react';
import { useAuthRateLimit, useApiRateLimit, useNewsletterRateLimit } from '../hooks/useRateLimit';
import { AuthRateLimitStatus, ApiRateLimitStatus, NewsletterRateLimitStatus } from './RateLimitStatus';

const RateLimitTest: React.FC = () => {
  const [testResults, setTestResults] = useState<string[]>([]);
  
  const authRateLimit = useAuthRateLimit(() => {
    setTestResults(prev => [...prev, 'Auth rate limit exceeded!']);
  });
  
  const apiRateLimit = useApiRateLimit(() => {
    setTestResults(prev => [...prev, 'API rate limit exceeded!']);
  });
  
  const newsletterRateLimit = useNewsletterRateLimit(() => {
    setTestResults(prev => [...prev, 'Newsletter rate limit exceeded!']);
  });

  const testAuthRateLimit = () => {
    if (authRateLimit.trackRequest()) {
      setTestResults(prev => [...prev, `Auth request tracked. Remaining: ${authRateLimit.remaining}`]);
    } else {
      setTestResults(prev => [...prev, 'Auth rate limit exceeded!']);
    }
  };

  const testApiRateLimit = () => {
    if (apiRateLimit.trackRequest()) {
      setTestResults(prev => [...prev, `API request tracked. Remaining: ${apiRateLimit.remaining}`]);
    } else {
      setTestResults(prev => [...prev, 'API rate limit exceeded!']);
    }
  };

  const testNewsletterRateLimit = () => {
    if (newsletterRateLimit.trackRequest()) {
      setTestResults(prev => [...prev, `Newsletter request tracked. Remaining: ${newsletterRateLimit.remaining}`]);
    } else {
      setTestResults(prev => [...prev, 'Newsletter rate limit exceeded!']);
    }
  };

  const clearAllRateLimits = () => {
    authRateLimit.clearRateLimit();
    apiRateLimit.clearRateLimit();
    newsletterRateLimit.clearRateLimit();
    setTestResults(prev => [...prev, 'All rate limits cleared']);
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Limiting Test</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Auth Rate Limit */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Authentication</h3>
            <AuthRateLimitStatus showAlways={true} className="mb-3" />
            <button
              onClick={testAuthRateLimit}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Auth Request
            </button>
          </div>

          {/* API Rate Limit */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">API</h3>
            <ApiRateLimitStatus showAlways={true} className="mb-3" />
            <button
              onClick={testApiRateLimit}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Test API Request
            </button>
          </div>

          {/* Newsletter Rate Limit */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Newsletter</h3>
            <NewsletterRateLimitStatus showAlways={true} className="mb-3" />
            <button
              onClick={testNewsletterRateLimit}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Test Newsletter Request
            </button>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={clearAllRateLimits}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Clear All Rate Limits
          </button>
          <button
            onClick={clearResults}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Clear Results
          </button>
        </div>

        {/* Test Results */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Test Results</h3>
          <div className="max-h-64 overflow-y-auto space-y-1">
            {testResults.length === 0 ? (
              <p className="text-gray-500 text-sm">No test results yet. Try clicking the test buttons above.</p>
            ) : (
              testResults.map((result, index) => (
                <div key={index} className="text-sm text-gray-700 bg-white p-2 rounded border">
                  {result}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Rate Limit Information */}
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-900 mb-2">Rate Limit Information</h3>
          <div className="text-sm text-yellow-800 space-y-1">
            <p><strong>Authentication:</strong> 5 requests per 15 minutes</p>
            <p><strong>API:</strong> 100 requests per 15 minutes</p>
            <p><strong>Newsletter:</strong> 3 requests per hour</p>
            <p><strong>Reviews:</strong> 10 requests per hour</p>
            <p><strong>Password Reset:</strong> 3 requests per hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitTest; 