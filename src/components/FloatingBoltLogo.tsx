import React from 'react';

const FloatingBoltLogo: React.FC = () => {
  const handleClick = () => {
    window.open('https://bolt.new/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="group">
        <button
          onClick={handleClick}
          className="w-22 h-22 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary-300"
        >
          <img 
            src="/Bolt black_circle_360x360.png" 
            alt="Powered by Bolt" 
            className="w-22 h-22 rounded-full transition-all duration-300 group-hover:brightness-110"
          />
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-4 py-3 rounded-lg whitespace-nowrap">
            Powered by Bolt
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBoltLogo;