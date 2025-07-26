import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const EnvironmentChecker: React.FC = () => {
  const [envStatus, setEnvStatus] = useState<{
    supabaseUrl: boolean;
    supabaseKey: boolean;
    isProduction: boolean;
  }>({
    supabaseUrl: false,
    supabaseKey: false,
    isProduction: false
  });

  useEffect(() => {
    const checkEnvironment = () => {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const isProduction = import.meta.env.PROD;

      setEnvStatus({
        supabaseUrl: !!supabaseUrl && supabaseUrl !== 'placeholder',
        supabaseKey: !!supabaseKey && supabaseKey !== 'placeholder',
        isProduction
      });
    };

    checkEnvironment();
  }, []);

  if (!envStatus.isProduction) {
    return null; // Only show in production
  }

  const allGood = envStatus.supabaseUrl && envStatus.supabaseKey;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`p-4 rounded-lg shadow-lg border ${
        allGood ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
      }`}>
        <div className="flex items-center space-x-2">
          {allGood ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-red-600" />
          )}
          <span className={`font-medium ${
            allGood ? 'text-green-800' : 'text-red-800'
          }`}>
            Environment Status
          </span>
        </div>
        
        <div className="mt-2 space-y-1">
          <div className="flex items-center space-x-2">
            {envStatus.supabaseUrl ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <XCircle className="h-4 w-4 text-red-600" />
            )}
            <span className="text-sm">Supabase URL</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {envStatus.supabaseKey ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <XCircle className="h-4 w-4 text-red-600" />
            )}
            <span className="text-sm">Supabase Key</span>
          </div>
        </div>

        {!allGood && (
          <div className="mt-3 p-2 bg-red-100 rounded text-xs text-red-700">
            <strong>Issue:</strong> Environment variables not properly configured. 
            Image uploads may not work correctly.
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvironmentChecker; 