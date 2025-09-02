import React, { useState, useRef, useEffect } from 'react';
import { Play, ExternalLink, AlertTriangle, RefreshCw } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  privacyMode?: boolean;
}

type EmbedMethod = 'iframe' | 'thumbnail-click' | 'external-link';

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = "YouTube video player",
  className = "",
  width = 560,
  height = 315,
  autoplay = false,
  privacyMode = true
}) => {
  const [currentMethod, setCurrentMethod] = useState<EmbedMethod>(
    window.location.hostname === 'localhost' ? 'iframe' : 'thumbnail-click'
  );
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userInitiated, setUserInitiated] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const baseUrl = privacyMode ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const embedUrl = `${baseUrl}/embed/${videoId}${autoplay && userInitiated ? '?autoplay=1' : ''}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailFallbackUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (currentMethod === 'iframe') {
      // Set a timeout to check if iframe loads successfully
      timeoutId = setTimeout(() => {
        if (isLoading) {
          console.warn('YouTube iframe failed to load, falling back to thumbnail method');
          setHasError(true);
          setCurrentMethod('thumbnail-click');
        }
      }, 5000); // 5 seconds timeout
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentMethod, isLoading]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    console.error('YouTube iframe failed to load');
    setHasError(true);
    setIsLoading(false);
    setCurrentMethod('thumbnail-click');
  };

  const handleThumbnailClick = () => {
    setUserInitiated(true);
    setCurrentMethod('iframe');
    setHasError(false);
    setIsLoading(true);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setCurrentMethod('iframe');
  };

  const openInNewTab = () => {
    window.open(watchUrl, '_blank', 'noopener,noreferrer');
  };

  // Method 1: Standard iframe embed
  if (currentMethod === 'iframe' && !hasError) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Loading video...</p>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    );
  }

  // Method 2: Thumbnail with click-to-play (GDPR-friendly)
  if (currentMethod === 'thumbnail-click') {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-black rounded-lg overflow-hidden cursor-pointer group" onClick={handleThumbnailClick}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = thumbnailFallbackUrl;
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
              <Play className="h-8 w-8 text-white fill-current" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
            <p className="text-gray-300 text-xs mt-1">Click to play video</p>
          </div>
        </div>
      </div>
    );
  }

  // Method 3: External link fallback
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <div className="absolute inset-0 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4">
        <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
        <h3 className="text-gray-900 font-semibold mb-2">Video Unavailable</h3>
        <p className="text-gray-600 text-sm text-center mb-4">
          The video cannot be embedded due to security restrictions.
        </p>
        <div className="space-y-2">
          <button
            onClick={openInNewTab}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Watch on YouTube
          </button>
          <button
            onClick={handleRetry}
            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;