import React, { useState, useEffect } from 'react';
import { Cookie, Settings, Check, X, Info } from 'lucide-react';

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferences) => void;
  onDecline: () => void;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always required
    analytics: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      functional: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences));
    setShowBanner(false);
    onAccept(allPreferences);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
    onAccept(preferences);
  };

  const handleDecline = () => {
    const minimalPreferences = {
      essential: true,
      analytics: false,
      functional: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(minimalPreferences));
    setShowBanner(false);
    setShowSettings(false);
    onDecline();
  };

  const updatePreference = (type: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-start space-x-4">
              <Cookie className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use essential cookies to make our site work, and optional cookies to improve your experience. 
                  You can choose which cookies to accept below.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Accept All
                  </button>
                  
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium flex items-center space-x-2"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Customize</span>
                  </button>
                  
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Decline
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleDecline}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Choose which cookies you'd like to accept. Essential cookies are required for the site to function.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="p-6 space-y-6">
              {/* Essential Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Always Active
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  These cookies are necessary for the website to function properly. They enable basic functions like 
                  page navigation, access to secure areas, and user authentication.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Authentication and session management</p>
                  <p>• Security features and rate limiting</p>
                  <p>• Basic site functionality</p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={preferences.analytics}
                      onChange={(e) => updatePreference('analytics', e.target.checked)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Optional
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  These cookies help us understand how visitors interact with our website by collecting and 
                  reporting information anonymously.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Page views and user behavior</p>
                  <p>• Performance monitoring</p>
                  <p>• Error tracking and debugging</p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="functional"
                      checked={preferences.functional}
                      onChange={(e) => updatePreference('functional', e.target.checked)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Optional
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  These cookies enable enhanced functionality and personalization, such as remembering your 
                  preferences and settings.
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• User preferences and settings</p>
                  <p>• Personalization features</p>
                  <p>• Enhanced user experience</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-between">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Decline All
              </button>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                
                <button
                  onClick={handleAcceptSelected}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent; 