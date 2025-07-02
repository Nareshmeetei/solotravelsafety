import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import UserAvatar from './UserAvatar';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Check if current page is a destination detail page
  const isDestinationDetailPage = location.pathname.startsWith('/destination/');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSignIn = () => {
    setAuthMode('signin');
    setShowAuthModal(true);
    setIsMobileMenuOpen(false);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    navigate('/profile');
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleDonateClick = () => {
    setShowDonateModal(true);
    setIsMobileMenuOpen(false);
  };

  // Determine logo destination based on user status
  const getLogoDestination = () => {
    // If user is signed in, always go to destinations
    if (user) {
      return '/destinations';
    }
    // If user is not signed in, go to home page
    return '/';
  };

  const navLinks = [
    { to: '/destinations', label: 'Destinations' },
    { to: '/safety-tips', label: 'Safety Tips' },
    { to: '/community', label: 'Community' },
    { action: 'donate', label: 'Donate' }
  ];

  return (
    <>
      {/* Initial transparent navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:py-6 animate-slide-down">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <Link 
            to={getLogoDestination()} 
            onClick={handleNavClick}
            className="flex items-center transition-transform duration-300 hover:scale-105 z-50"
          >
            <img 
              src="/Solo Travel Safety logo 1.svg" 
              alt="SoloTravelSafety Logo" 
              className="h-10 sm:h-12 w-auto transition-all duration-300 hover:brightness-110"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.action === 'donate' ? (
                <button
                  key={link.action}
                  onClick={handleDonateClick}
                  className="flex items-center space-x-1 font-medium text-sm transition-all duration-300 hover:scale-105 text-gray-700 hover:text-primary-400"
                >
                  <Heart className="h-4 w-4" />
                  <span>{link.label}</span>
                </button>
              ) : (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={handleNavClick}
                  className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    location.pathname === link.to 
                      ? 'text-primary-400' 
                      : 'text-gray-700 hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {user ? (
              <button
                onClick={handleProfileClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-400 font-medium text-sm transition-all duration-300 hover:scale-105 focus-smooth"
              >
                <UserAvatar user={user} size="sm" />
                <span className="hidden xl:inline">{user.user_metadata?.full_name || 'User'}</span>
              </button>
            ) : (
              <>
                <button 
                  onClick={handleSignIn}
                  className="text-gray-700 hover:text-primary-400 font-medium text-sm transition-all duration-300 hover:scale-105 focus-smooth"
                >
                  Sign In
                </button>
                <button 
                  onClick={handleSignUp}
                  className="btn-hover bg-primary-400 hover:bg-primary-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 focus-smooth"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-400 transition-colors duration-300 z-50"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              link.action === 'donate' ? (
                <button
                  key={link.action}
                  onClick={handleDonateClick}
                  className="flex items-center space-x-2 w-full text-left font-medium text-base py-2 transition-all duration-300 text-gray-700 hover:text-primary-400"
                >
                  <Heart className="h-4 w-4" />
                  <span>{link.label}</span>
                </button>
              ) : (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={handleNavClick}
                  className={`block font-medium text-base py-2 transition-all duration-300 ${
                    location.pathname === link.to 
                      ? 'text-primary-400' 
                      : 'text-gray-700 hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              {user ? (
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-3 w-full text-left text-gray-700 hover:text-primary-400 font-medium text-base py-2 transition-all duration-300"
                >
                  <UserAvatar user={user} size="sm" />
                  <span>{user.user_metadata?.full_name || 'User'}</span>
                </button>
              ) : (
                <div className="space-y-3">
                  <button 
                    onClick={handleSignIn}
                    className="block w-full text-left text-gray-700 hover:text-primary-400 font-medium text-base py-2 transition-all duration-300"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={handleSignUp}
                    className="block w-full bg-primary-400 hover:bg-primary-500 text-white px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 text-center"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating navbar that appears on scroll - DISABLED for destination detail pages */}
      {!isDestinationDetailPage && (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}>
          <div className="flex justify-center mt-2 sm:mt-4 px-4 animate-slide-down">
            <div className="w-full max-w-4xl bg-white/80 backdrop-blur-[100px] shadow-sm border border-white/30 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:shadow-md" style={{ borderRadius: '45px' }}>
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link 
                  to={getLogoDestination()} 
                  onClick={handleNavClick}
                  className="flex items-center transition-transform duration-300 hover:scale-105"
                >
                  <img 
                    src="/Solo Travel Safety logo 1.svg" 
                    alt="SoloTravelSafety Logo" 
                    className="h-8 sm:h-10 w-auto transition-all duration-300 hover:brightness-110"
                  />
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                  {navLinks.map((link) => (
                    link.action === 'donate' ? (
                      <button
                        key={link.action}
                        onClick={handleDonateClick}
                        className="flex items-center space-x-1 font-medium text-sm transition-all duration-300 hover:scale-105 text-gray-600 hover:text-primary-400"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{link.label}</span>
                      </button>
                    ) : (
                      <Link 
                        key={link.to}
                        to={link.to} 
                        onClick={handleNavClick}
                        className={`font-medium text-sm transition-all duration-300 hover:scale-105 ${
                          location.pathname === link.to 
                            ? 'text-primary-400' 
                            : 'text-gray-600 hover:text-primary-400'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  
                  {user ? (
                    <button
                      onClick={handleProfileClick}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-400 font-medium text-sm transition-all duration-300 hover:scale-105 focus-smooth"
                    >
                      <UserAvatar user={user} size="sm" />
                      <span className="hidden xl:inline">{user.user_metadata?.full_name || 'User'}</span>
                    </button>
                  ) : (
                    <>
                      <button 
                        onClick={handleSignIn}
                        className="text-gray-600 hover:text-primary-400 font-medium text-sm transition-all duration-300 hover:scale-105 focus-smooth"
                      >
                        Sign In
                      </button>
                      <button 
                        onClick={handleSignUp}
                        className="btn-hover bg-primary-400 hover:bg-primary-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 focus-smooth"
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>

                {/* Mobile Menu Button for Floating Nav */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-600 hover:text-primary-400 transition-colors duration-300"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Mobile Menu for Floating Nav - Clean and simple with 45px radius */}
              {isMobileMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 space-y-3">
                  {navLinks.map((link) => (
                    link.action === 'donate' ? (
                      <button
                        key={link.action}
                        onClick={handleDonateClick}
                        className="flex items-center space-x-2 w-full text-left font-medium text-sm py-2 transition-all duration-300 text-gray-600 hover:text-primary-400"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{link.label}</span>
                      </button>
                    ) : (
                      <Link 
                        key={link.to}
                        to={link.to} 
                        onClick={handleNavClick}
                        className={`block font-medium text-sm py-2 transition-all duration-300 ${
                          location.pathname === link.to 
                            ? 'text-primary-400' 
                            : 'text-gray-600 hover:text-primary-400'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  
                  <div className="pt-3 space-y-2">
                    {user ? (
                      <button
                        onClick={handleProfileClick}
                        className="flex items-center space-x-2 w-full text-left text-gray-600 hover:text-primary-400 font-medium text-sm py-2 transition-all duration-300"
                      >
                        <UserAvatar user={user} size="sm" />
                        <span>{user.user_metadata?.full_name || 'User'}</span>
                      </button>
                    ) : (
                      <>
                        <button 
                          onClick={handleSignIn}
                          className="block w-full text-left text-gray-600 hover:text-primary-400 font-medium text-sm py-2 transition-all duration-300"
                        >
                          Sign In
                        </button>
                        <button 
                          onClick={handleSignUp}
                          className="block w-full bg-primary-400 hover:bg-primary-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 text-center"
                        >
                          Sign Up
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl animate-fade-in">
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 pb-3 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-2">
                Fund Freedom For More Women
              </h2>
              <p className="text-sm text-gray-600">
                Help us keep solo female travelers safe worldwide
              </p>
            </div>

            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { amount: 5, label: 'Buy us a coffee' },
                  { amount: 15, label: 'Safety research' },
                  { amount: 30, label: 'Support a traveler' },
                  { amount: 50, label: 'Champion safety' }
                ].map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => {
                      alert(`Thank you for your $${option.amount} donation! Your support helps keep solo female travelers safe worldwide. 💜`);
                      setShowDonateModal(false);
                    }}
                    className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="text-lg font-black text-primary-600">${option.amount}</div>
                    <div className="text-sm font-semibold text-gray-900">{option.label}</div>
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Custom amount"
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                    />
                  </div>
                  <button className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
                    Donate
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure payment • Helps keep the platform free for all travelers
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;