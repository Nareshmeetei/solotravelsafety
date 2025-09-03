import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  privacyMode?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = "YouTube video player",
  className = "",
  width = 560,
  height = 315,
  autoplay = false,
  privacyMode = true
}) => {
  const baseUrl = privacyMode ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';
  const embedUrl = `${baseUrl}/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;

  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
};

export default YouTubeEmbed;