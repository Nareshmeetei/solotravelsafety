import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import DataManagement from './DataManagement';

const Footer: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showDataManagement, setShowDataManagement] = useState(false);
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

  const emojis = ['☕', '😤', '🕺', '🎉', '🤔', '🤖', '😴', '😢', '😊', '😂', '🤬', '🤦'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prev) => (prev + 1) % emojis.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [emojis.length]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="mb-8 text-center animate-fade-in-up">
          <div className="mb-4 flex items-center justify-center">
            <Link to="/" onClick={handleNavClick}>
              <img 
                src="/Solo Travel Safety logo 1.svg" 
                alt="SoloTravelSafety Logo" 
                className="h-10 w-auto transition-all duration-300 hover:scale-105 hover:brightness-110"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-600 max-w-md mx-auto transition-colors duration-300 hover:text-gray-700">
            Real safety info, from real women, for solo female travelers.
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8 animate-fade-in-up animate-delay-200">
            <Link 
              to="/destinations"
              onClick={handleNavClick}
              className="text-sm text-gray-600 transition-all duration-300 hover:text-primary-400 hover:scale-105 focus-smooth"
            >
              Destinations
            </Link>
            <Link 
              to="/safety-tips"
              onClick={handleNavClick}
              className="text-sm text-gray-600 transition-all duration-300 hover:text-primary-400 hover:scale-105 focus-smooth"
            >
              Safety Tips
            </Link>
            <Link 
              to="/community"
              onClick={handleNavClick}
              className="text-sm text-gray-600 transition-all duration-300 hover:text-primary-400 hover:scale-105 focus-smooth"
            >
              Community
            </Link>
          </div>
          
          <div className="mt-6 text-center animate-fade-in-up animate-delay-400">
            <div className="flex flex-wrap justify-center items-center space-x-4 mb-2">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-600 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowDataManagement(true)}
                className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-600 hover:underline"
              >
                Data Management
              </button>
            </div>
            <p className="text-sm text-gray-500 transition-colors duration-300 hover:text-gray-600">
              © 2025 SoloTravelSafety.com | Made with a lot of <span className="inline-block transition-all duration-500 transform hover:scale-110">{emojis[currentEmojiIndex]}</span> for fearless women travelers.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />

      {/* Data Management Modal */}
      <DataManagement 
        isOpen={showDataManagement} 
        onClose={() => setShowDataManagement(false)} 
      />
    </footer>
  );
};

export default Footer;