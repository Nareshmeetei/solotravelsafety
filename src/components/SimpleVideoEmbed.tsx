import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface SimpleVideoEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const SimpleVideoEmbed: React.FC<SimpleVideoEmbedProps> = ({
  videoId,
  title = "YouTube video",
  className = ""
}) => {
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const openVideo = () => {
    window.open(watchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <div 
        className="absolute inset-0 bg-black rounded-lg overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300 shadow-lg"
        onClick={openVideo}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = thumbnailFallback;
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play className="h-8 w-8 text-white fill-current" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black bg-opacity-60 rounded px-3 py-2">
            <h3 className="text-white font-semibold text-sm truncate mb-1">{title}</h3>
            <div className="flex items-center text-xs text-gray-300">
              <ExternalLink className="h-3 w-3 mr-1" />
              <span>Watch on YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleVideoEmbed;