import React, { useEffect, useState } from 'react';
import { AlertTriangle, RefreshCw, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { isSessionExpiringSoon, refreshSession } from '../lib/supabase';

interface SessionExpiryWarningProps {
  warningThresholdMinutes?: number;
  onSessionRefreshed?: () => void;
}

const SessionExpiryWarning: React.FC<SessionExpiryWarningProps> = ({
  warningThresholdMinutes = 5,
  onSessionRefreshed
}) => {
  const { user } = useAuth();
  const [showWarning, setShowWarning] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (!user) return;

    const checkSessionExpiry = async () => {
      const isExpiring = await isSessionExpiringSoon(warningThresholdMinutes);
      setShowWarning(isExpiring);
    };

    // Check immediately
    checkSessionExpiry();

    // Check every minute
    const interval = setInterval(checkSessionExpiry, 60000);

    return () => clearInterval(interval);
  }, [user, warningThresholdMinutes]);

  useEffect(() => {
    if (!showWarning) return;

    // Update countdown every second
    const countdown = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setShowWarning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [showWarning]);

  const handleRefreshSession = async () => {
    setIsRefreshing(true);
    try {
      const { error } = await refreshSession();
      if (!error) {
        setShowWarning(false);
        onSessionRefreshed?.();
      } else {
        console.error('Failed to refresh session:', error);
      }
    } catch (error) {
      console.error('Error refreshing session:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDismiss = () => {
    setShowWarning(false);
  };

  if (!showWarning) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl shadow-lg p-4 animate-slide-up">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-yellow-800">
              Session Expiring Soon
            </h3>
            <p className="text-xs text-yellow-700 mt-1">
              Your session will expire in {timeRemaining} seconds. 
              Click "Extend Session" to stay logged in.
            </p>
            
            <div className="mt-3 flex space-x-2">
              <button
                onClick={handleRefreshSession}
                disabled={isRefreshing}
                className="flex items-center space-x-1 px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-xs font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isRefreshing ? (
                  <>
                    <RefreshCw className="h-3 w-3 animate-spin" />
                    <span>Extending...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-3 w-3" />
                    <span>Extend Session</span>
                  </>
                )}
              </button>
              
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 text-yellow-700 hover:text-yellow-800 text-xs font-medium transition-colors duration-200"
              >
                Dismiss
              </button>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-yellow-400 hover:text-yellow-600 transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionExpiryWarning; 