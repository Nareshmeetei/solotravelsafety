import React, { useState, useRef, useEffect } from 'react';
import { Play, ExternalLink, AlertTriangle, RefreshCw } from 'lucide-react';

interface YouTubePlayerAPIProps {
  videoId: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
}

// Declare YouTube Player API types
declare global {
  interface Window {
    YT: {
      Player: new (element: string, options: any) => any;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubePlayerAPI: React.FC<YouTubePlayerAPIProps> = ({
  videoId,
  title = "YouTube video player",
  className = "",
  width = 560,
  height = 315,
  autoplay = false
}) => {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [apiLoaded, setApiLoaded] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerIdRef = useRef(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    // Check if YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      setApiLoaded(true);
      return;
    }

    // Load YouTube Player API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    
    // Set up global callback
    window.onYouTubeIframeAPIReady = () => {
      setApiLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (apiLoaded && !playerRef.current) {
      initializePlayer();
    }
  }, [apiLoaded, videoId]);

  const initializePlayer = () => {
    try {
      if (!window.YT || !window.YT.Player) {
        setHasError(true);
        return;
      }

      playerRef.current = new window.YT.Player(playerIdRef.current, {
        height: height.toString(),
        width: width.toString(),
        videoId: videoId,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
          origin: window.location.origin
        },
        events: {
          onReady: () => {
            setIsLoading(false);
            setIsReady(true);
            setHasError(false);
          },
          onError: (error: any) => {
            console.error('YouTube Player API Error:', error);
            setHasError(true);
            setIsLoading(false);
          }
        }
      });
    } catch (error) {
      console.error('Failed to initialize YouTube player:', error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setIsReady(false);
    
    if (playerRef.current && playerRef.current.destroy) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
    
    setTimeout(() => {
      initializePlayer();
    }, 100);
  };

  const openInNewTab = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  // Show loading state
  if (isLoading && !hasError) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Loading YouTube Player API...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state with fallback options
  if (hasError) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-gray-900 font-semibold mb-2">YouTube Player Unavailable</h3>
          <p className="text-gray-600 text-sm text-center mb-4">
            The YouTube Player API couldn't load this video due to security restrictions.
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
  }

  // Show player container
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
      >
        <div id={playerIdRef.current} className="w-full h-full" />
      </div>
    </div>
  );
};

export default YouTubePlayerAPI;