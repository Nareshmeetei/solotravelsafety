import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, X, Info, PlayCircle, ExternalLink } from 'lucide-react';

interface CSPViolation {
  blockedURI: string;
  disposition: string;
  documentURI: string;
  effectiveDirective: string;
  originalPolicy: string;
  violatedDirective: string;
  timestamp: Date;
}

interface CSPTest {
  name: string;
  test: () => Promise<boolean>;
  description: string;
  fix?: string;
}

const CSPDebugger: React.FC = () => {
  const [violations, setViolations] = useState<CSPViolation[]>([]);
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [currentHeaders, setCurrentHeaders] = useState<Record<string, string>>({});
  const [testVideoId, setTestVideoId] = useState('EtxCpMzu1GY'); // Amsterdam video from your data

  const cspTests: CSPTest[] = [
    {
      name: 'YouTube Frame Source',
      description: 'Check if frame-src allows YouTube domains',
      test: async () => {
        const csp = currentHeaders['content-security-policy'] || '';
        return csp.includes('youtube.com') && csp.includes('youtube-nocookie.com');
      },
      fix: 'Add frame-src https://www.youtube.com https://www.youtube-nocookie.com to CSP'
    },
    {
      name: 'YouTube Image Source',
      description: 'Check if img-src allows YouTube thumbnails',
      test: async () => {
        const csp = currentHeaders['content-security-policy'] || '';
        return csp.includes('ytimg.com') || csp.includes('i.ytimg.com');
      },
      fix: 'Add img-src https://*.ytimg.com https://i.ytimg.com to CSP'
    },
    {
      name: 'YouTube Media Source',
      description: 'Check if media-src allows YouTube video content',
      test: async () => {
        const csp = currentHeaders['content-security-policy'] || '';
        return csp.includes('media-src') && csp.includes('youtube.com');
      },
      fix: 'Add media-src https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com blob: to CSP'
    },
    {
      name: 'YouTube Connect Source',
      description: 'Check if connect-src allows YouTube API calls',
      test: async () => {
        const csp = currentHeaders['content-security-policy'] || '';
        return csp.includes('connect-src') && csp.includes('youtube.com');
      },
      fix: 'Add connect-src https://www.youtube.com https://*.youtube.com to CSP'
    },
    {
      name: 'Frame Ancestors',
      description: 'Check if frame-ancestors is not blocking embeds',
      test: async () => {
        const csp = currentHeaders['content-security-policy'] || '';
        return !csp.includes("frame-ancestors 'none'");
      },
      fix: 'Change frame-ancestors from "none" to "self" to allow embeds'
    },
    {
      name: 'X-Frame-Options Conflict',
      description: 'Check for X-Frame-Options header conflicts',
      test: async () => {
        return !currentHeaders['x-frame-options'];
      },
      fix: 'Remove X-Frame-Options header as it conflicts with CSP frame-ancestors'
    },
    {
      name: 'COEP Credentialless',
      description: 'Check if COEP is set to credentialless for iframe compatibility',
      test: async () => {
        return currentHeaders['cross-origin-embedder-policy'] === 'credentialless';
      },
      fix: 'Set Cross-Origin-Embedder-Policy to credentialless'
    }
  ];

  useEffect(() => {
    // Fetch current response headers
    const fetchHeaders = async () => {
      try {
        const response = await fetch(window.location.href);
        const headers: Record<string, string> = {};
        response.headers.forEach((value, key) => {
          headers[key.toLowerCase()] = value;
        });
        setCurrentHeaders(headers);
      } catch (error) {
        console.error('Failed to fetch headers:', error);
      }
    };

    fetchHeaders();
  }, []);

  useEffect(() => {
    const runTests = async () => {
      const results: Record<string, boolean> = {};
      for (const test of cspTests) {
        try {
          results[test.name] = await test.test();
        } catch (error) {
          results[test.name] = false;
        }
      }
      setTestResults(results);
    };

    if (Object.keys(currentHeaders).length > 0) {
      runTests();
    }
  }, [currentHeaders]);

  useEffect(() => {
    if (isMonitoring) {
      const handleViolation = (event: SecurityPolicyViolationEvent) => {
        const violation: CSPViolation = {
          blockedURI: event.blockedURI,
          disposition: event.disposition,
          documentURI: event.documentURI,
          effectiveDirective: event.effectiveDirective,
          originalPolicy: event.originalPolicy,
          violatedDirective: event.violatedDirective,
          timestamp: new Date()
        };
        
        setViolations(prev => [violation, ...prev.slice(0, 19)]); // Keep last 20
      };

      document.addEventListener('securitypolicyviolation', handleViolation as any);
      
      return () => {
        document.removeEventListener('securitypolicyviolation', handleViolation as any);
      };
    }
  }, [isMonitoring]);

  const testYouTubeEmbed = () => {
    // Create a test iframe to trigger any CSP violations
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${testVideoId}`;
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.position = 'absolute';
    iframe.style.top = '-1000px';
    iframe.setAttribute('credentialless', '');
    
    document.body.appendChild(iframe);
    
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 5000);
  };

  const clearViolations = () => setViolations([]);

  const getTestScore = () => {
    const total = Object.keys(testResults).length;
    const passed = Object.values(testResults).filter(Boolean).length;
    return total > 0 ? Math.round((passed / total) * 100) : 0;
  };

  const score = getTestScore();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-blue-600" />
          YouTube CSP Debugger
        </h2>
        <div className="flex items-center space-x-2">
          <span className={`text-2xl font-bold ${score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
            {score}%
          </span>
        </div>
      </div>

      {/* Quick Test Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setIsMonitoring(!isMonitoring)}
          className={`px-4 py-2 rounded-lg font-medium ${
            isMonitoring 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start CSP Monitoring'}
        </button>
        <button
          onClick={testYouTubeEmbed}
          className="px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 flex items-center"
        >
          <PlayCircle className="h-4 w-4 mr-1" />
          Test YouTube Embed
        </button>
        <button
          onClick={clearViolations}
          className="px-4 py-2 rounded-lg font-medium bg-gray-600 text-white hover:bg-gray-700"
        >
          Clear Violations
        </button>
      </div>

      {/* Test Video ID Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Test Video ID (YouTube)
        </label>
        <input
          type="text"
          value={testVideoId}
          onChange={(e) => setTestVideoId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter YouTube video ID"
        />
      </div>

      {/* CSP Tests */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {cspTests.map((test) => (
          <div key={test.name} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">{test.name}</h3>
              {testResults[test.name] ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-600" />
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{test.description}</p>
            {!testResults[test.name] && test.fix && (
              <div className="flex items-start space-x-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-yellow-800">{test.fix}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Current Headers */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Response Headers</h3>
        <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
          {Object.entries(currentHeaders).map(([key, value]) => (
            <div key={key} className="mb-2">
              <span className="font-mono text-sm font-bold text-blue-600">{key}:</span>
              <span className="font-mono text-sm text-gray-800 ml-2 break-all">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CSP Violations */}
      {violations.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
            CSP Violations ({violations.length})
          </h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-h-64 overflow-y-auto">
            {violations.map((violation, index) => (
              <div key={index} className="mb-4 pb-4 border-b border-red-200 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold text-red-900">
                    {violation.effectiveDirective}
                  </span>
                  <span className="text-xs text-red-700">
                    {violation.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div className="text-sm text-red-800 space-y-1">
                  <p><strong>Blocked:</strong> {violation.blockedURI}</p>
                  <p><strong>Directive:</strong> {violation.violatedDirective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-2">How to use this debugger:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Click "Start CSP Monitoring" to detect violations in real-time</li>
              <li>Click "Test YouTube Embed" to trigger iframe loading</li>
              <li>Check the test results above for specific CSP issues</li>
              <li>Review any violations that appear below</li>
              <li>Follow the suggested fixes to resolve issues</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSPDebugger;