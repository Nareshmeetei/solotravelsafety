import React, { useState, useEffect } from 'react';
import { getFlagFallbackUrls } from '../lib/flag-utils';

interface FlagImageProps {
  countryCode: string;
  alt?: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const FlagImage: React.FC<FlagImageProps> = ({ 
  countryCode, 
  alt, 
  className = "", 
  fallbackIcon,
  size = 'md'
}) => {
  const [imageError, setImageError] = useState(false);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [workingUrl, setWorkingUrl] = useState<string | null>(null);

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-6';
      case 'lg':
        return 'w-20 h-12';
      default:
        return 'w-12 h-8';
    }
  };

  const fallbackUrls = countryCode ? getFlagFallbackUrls(countryCode) : [];

  // Preload and test URLs
  useEffect(() => {
    if (!countryCode) {
      setIsLoading(false);
      return;
    }
    const testUrls = async () => {
      for (let i = 0; i < fallbackUrls.length; i++) {
        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          
          const testPromise = new Promise((resolve, reject) => {
            img.onload = () => resolve(fallbackUrls[i]);
            img.onerror = () => reject();
            // Set a timeout to avoid hanging
            setTimeout(() => reject(), 3000);
          });
          
          img.src = fallbackUrls[i];
          const workingUrl = await testPromise;
          setWorkingUrl(workingUrl as string);
          setCurrentUrlIndex(i);
          setIsLoading(false);
          return;
        } catch (error) {
          console.warn(`Flag URL failed: ${fallbackUrls[i]}`, error);
          continue;
        }
      }
      // If all URLs fail, show fallback
      setImageError(true);
      setIsLoading(false);
    };

    testUrls();
  }, [countryCode, fallbackUrls]);

  const handleImageError = () => {
    if (currentUrlIndex < fallbackUrls.length - 1) {
      setCurrentUrlIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  // Handle undefined countryCode
  if (!countryCode) {
    return (
      <div className={`${getSizeClasses()} rounded-md overflow-hidden shadow-sm border border-gray-200 bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-gray-500 text-xs font-medium">
          N/A
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`${getSizeClasses()} rounded-md overflow-hidden shadow-sm border border-gray-200 bg-gray-100 animate-pulse ${className}`}>
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  if (imageError || !workingUrl) {
    return (
      <div className={`${getSizeClasses()} rounded-md overflow-hidden shadow-sm border border-gray-200 bg-gray-200 flex items-center justify-center ${className}`}>
        {fallbackIcon || (
          <div className="text-gray-500 text-xs font-medium">
            {countryCode ? countryCode.toUpperCase() : 'N/A'}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${getSizeClasses()} rounded-md overflow-hidden shadow-sm border border-gray-200 transition-transform duration-300 ${className}`}>
      <img
        src={workingUrl}
        alt={alt || `${countryCode} flag`}
        className="w-full h-full object-cover"
        onError={handleImageError}
        loading="lazy"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default FlagImage; 