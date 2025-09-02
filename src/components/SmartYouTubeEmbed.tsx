import React, { useState, useRef, useEffect } from 'react';
import { Play, ExternalLink, AlertTriangle, RefreshCw, Shield, Zap } from 'lucide-react';

interface SmartYouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  privacyMode?: boolean;
}

type EmbedStrategy = 'auto-detect' | 'direct-iframe' | 'api-player' | 'proxy-iframe' | 'thumbnail-only' | 'external-link';

const SmartYouTubeEmbed: React.FC<SmartYouTubeEmbedProps> = ({
  videoId,
  title = "YouTube video player",
  className = "",
  width = 560,
  height = 315,
  autoplay = false,
  privacyMode = true
}) => {
  const [currentStrategy, setCurrentStrategy] = useState<EmbedStrategy>('auto-detect');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string>('');
  const [userInitiated, setUserInitiated] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const baseUrl = privacyMode ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const embedUrl = `${baseUrl}/embed/${videoId}${autoplay && userInitiated ? '?autoplay=1' : ''}`;
  const proxyUrl = `/.netlify/edge-functions/youtube-proxy?videoId=${videoId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  // Auto-detect best strategy on mount
  useEffect(() => {
    if (currentStrategy === 'auto-detect') {
      detectBestStrategy();
    }
  }, [currentStrategy]);

  // Set timeout for iframe loading
  useEffect(() => {
    if (currentStrategy === 'direct-iframe' || currentStrategy === 'proxy-iframe') {
      timeoutRef.current = setTimeout(() => {
        if (isLoading) {
          console.warn(`YouTube ${currentStrategy} failed to load, trying next strategy`);
          tryNextStrategy();
        }
      }, 8000); // 8 seconds timeout
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentStrategy, isLoading]);

  const detectBestStrategy = async () => {
    // Check if we're on localhost (direct iframe usually works)
    if (window.location.hostname === 'localhost') {
      setCurrentStrategy('direct-iframe');
      return;
    }

    // Test COEP header presence (indicates cross-origin isolation)
    try {
      const response = await fetch(window.location.href, { method: 'HEAD' });
      const coep = response.headers.get('Cross-Origin-Embedder-Policy');
      
      if (coep && coep.includes('require-corp')) {
        console.log('COEP detected, using proxy strategy');
        setCurrentStrategy('proxy-iframe');
      } else {
        console.log('No restrictive COEP, trying direct iframe');
        setCurrentStrategy('direct-iframe');
      }
    } catch {
      // Fallback to direct iframe if we can't check headers
      setCurrentStrategy('direct-iframe');
    }
  };

  const tryNextStrategy = () => {
    const strategyProgression: EmbedStrategy[] = [
      'direct-iframe',
      'proxy-iframe', 
      'api-player',
      'thumbnail-only'
    ];

    const currentIndex = strategyProgression.indexOf(currentStrategy);
    const nextStrategy = strategyProgression[currentIndex + 1] || 'external-link';
    
    setHasError(false);
    setIsLoading(true);
    setCurrentStrategy(nextStrategy);
    setErrorDetails(`Trying ${nextStrategy} strategy...`);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
    console.log(`YouTube ${currentStrategy} loaded successfully`);
  };

  const handleIframeError = (errorMsg?: string) => {
    const details = errorMsg || `${currentStrategy} failed to load`;
    console.error('YouTube iframe error:', details);
    setErrorDetails(details);
    setHasError(true);
    setIsLoading(false);
    
    // Auto-try next strategy
    setTimeout(tryNextStrategy, 1000);
  };

  const handleThumbnailClick = () => {
    setUserInitiated(true);
    setCurrentStrategy('direct-iframe');
    setHasError(false);
    setIsLoading(true);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setCurrentStrategy('auto-detect');
  };

  const openInNewTab = () => {
    window.open(watchUrl, '_blank', 'noopener,noreferrer');
  };

  // Strategy 1: Direct iframe embed
  if (currentStrategy === 'direct-iframe' && !hasError) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Loading direct iframe...</p>
              <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                <Zap className="h-3 w-3 mr-1" />
                <span>Fast method</span>
              </div>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={() => handleIframeError('Direct iframe blocked')}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    );
  }

  // Strategy 2: Proxy iframe embed
  if (currentStrategy === 'proxy-iframe' && !hasError) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Loading via proxy...</p>
              <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                <Shield className="h-3 w-3 mr-1" />
                <span>Security bypass</span>
              </div>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={proxyUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={() => handleIframeError('Proxy iframe failed')}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    );
  }

  // Strategy 3: Thumbnail click-to-play
  if (currentStrategy === 'thumbnail-only' || (currentStrategy === 'api-player' && hasError)) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-black rounded-lg overflow-hidden cursor-pointer group" onClick={handleThumbnailClick}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = thumbnailFallback;
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
            {hasError && (
              <p className="text-yellow-300 text-xs mt-1">⚠ Using fallback method</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Strategy 4: External link fallback
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <div className="absolute inset-0 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4">
        <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
        <h3 className="text-gray-900 font-semibold mb-2">Video Embedding Blocked</h3>
        <p className="text-gray-600 text-sm text-center mb-2">
          All embedding strategies have been exhausted due to security restrictions.
        </p>
        {errorDetails && (
          <p className="text-gray-500 text-xs text-center mb-4">{errorDetails}</p>
        )}
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
            Try All Strategies Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartYouTubeEmbed;