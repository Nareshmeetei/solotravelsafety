import React from 'react';
import * as Sentry from '@sentry/react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

const DefaultErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ 
  error, 
  resetError 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Something went wrong
        </h3>
        
        <p className="text-sm text-gray-500 mb-4">
          We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
        </p>
        
        {import.meta.env.DEV && (
          <details className="mb-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto max-h-32">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
        
        <div className="flex gap-3 justify-center">
          <button
            onClick={resetError}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

const SentryErrorBoundary: React.FC<ErrorBoundaryProps> = ({ 
  children, 
  fallback = DefaultErrorFallback 
}) => {
  return (
    <Sentry.ErrorBoundary fallback={({ error, resetError }) => {
      const FallbackComponent = fallback;
      return <FallbackComponent error={error as Error} resetError={resetError} />;
    }}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default SentryErrorBoundary; 