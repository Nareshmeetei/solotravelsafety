import React from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useRateLimit } from '../hooks/useRateLimit';

interface RateLimitStatusProps {
  endpoint: string;
  maxRequests: number;
  windowMs: number;
  showAlways?: boolean;
  className?: string;
}

const RateLimitStatus: React.FC<RateLimitStatusProps> = ({
  endpoint,
  maxRequests,
  windowMs,
  showAlways = false,
  className = ''
}) => {
  const {
    remaining,
    isLimited,
    getFormattedTimeUntilReset,
    clearRateLimit
  } = useRateLimit({
    endpoint,
    maxRequests,
    windowMs
  });

  // Don't show if not limited and showAlways is false
  if (!isLimited && !showAlways) {
    return null;
  }

  const getStatusColor = () => {
    if (isLimited) return 'text-red-600';
    if (remaining <= maxRequests * 0.2) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getStatusIcon = () => {
    if (isLimited) return <AlertTriangle className="h-4 w-4" />;
    if (remaining <= maxRequests * 0.2) return <Clock className="h-4 w-4" />;
    return <CheckCircle className="h-4 w-4" />;
  };

  const getStatusMessage = () => {
    if (isLimited) {
      return `Rate limit exceeded. Try again in ${getFormattedTimeUntilReset()}`;
    }
    if (remaining <= maxRequests * 0.2) {
      return `${remaining} requests remaining. Resets in ${getFormattedTimeUntilReset()}`;
    }
    return `${remaining} requests remaining`;
  };

  return (
    <div className={`flex items-center space-x-2 text-sm ${getStatusColor()} ${className}`}>
      {getStatusIcon()}
      <span>{getStatusMessage()}</span>
      
      {/* Show clear button for development/testing */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={clearRateLimit}
          className="text-xs text-gray-500 hover:text-gray-700 underline"
          title="Clear rate limit (development only)"
        >
          Clear
        </button>
      )}
    </div>
  );
};

// Convenience components for specific endpoints
export const AuthRateLimitStatus: React.FC<{ showAlways?: boolean; className?: string }> = ({
  showAlways,
  className
}) => (
  <RateLimitStatus
    endpoint="auth"
    maxRequests={5}
    windowMs={15 * 60 * 1000}
    showAlways={showAlways}
    className={className}
  />
);

export const ApiRateLimitStatus: React.FC<{ showAlways?: boolean; className?: string }> = ({
  showAlways,
  className
}) => (
  <RateLimitStatus
    endpoint="api"
    maxRequests={100}
    windowMs={15 * 60 * 1000}
    showAlways={showAlways}
    className={className}
  />
);

export const ReviewsRateLimitStatus: React.FC<{ showAlways?: boolean; className?: string }> = ({
  showAlways,
  className
}) => (
  <RateLimitStatus
    endpoint="reviews"
    maxRequests={10}
    windowMs={60 * 60 * 1000}
    showAlways={showAlways}
    className={className}
  />
);

export const NewsletterRateLimitStatus: React.FC<{ showAlways?: boolean; className?: string }> = ({
  showAlways,
  className
}) => (
  <RateLimitStatus
    endpoint="newsletter"
    maxRequests={3}
    windowMs={60 * 60 * 1000}
    showAlways={showAlways}
    className={className}
  />
);

export default RateLimitStatus; 