import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import NotificationBell from './NotificationBell';
import UserAvatar from './UserAvatar';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, signOut } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);

  // Check if current page is a destination detail page, profile page, add destination page, or account settings page
  const isDestinationDetailPage = location.pathname.startsWith('/destination/');
  const isProfilePage = location.pathname === '/profile';
  const isAddDestinationPage = location.pathname === '/add-destination';
  const isAccountSettingsPage = location.pathname === '/account-settings';
  const shouldDisableFloatingNav = isDestinationDetailPage || isProfilePage || isAddDestinationPage || isAccountSettingsPage;

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

  // Load profile data from localStorage
  useEffect(() => {
    const loadProfileData = () => {
      if (!user) {
        setProfileData(null);
        return;
      }

      try {
        const storedProfile = localStorage.getItem(`dev_profile_${user.id}`);
        if (storedProfile) {
          const profile = JSON.parse(storedProfile);
          setProfileData(profile);
          console.log('📖 Navbar: Profile loaded from localStorage');
        } else {
          // Use auth metadata as fallback
          setProfileData({
            full_name: user.user_metadata?.full_name,
            username: user.user_metadata?.username,
            avatar_url: user.user_metadata?.avatar_url
          });
          console.log('📖 Navbar: Using auth metadata');
        }
      } catch (error) {
        console.error('Error loading profile data in navbar:', error);
        setProfileData(null);
      }
    };

    loadProfileData();

    // Listen for profile updates
    const handleProfileUpdate = (event: CustomEvent) => {
      console.log('📢 Navbar: Profile update received');
      loadProfileData();
    };

    window.addEventListener('profileUpdated', handleProfileUpdate as EventListener);
    
    return () => {
      window.removeEventListener('profileUpdated', handleProfileUpdate as EventListener);
    };
  }, [user]);

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
              src="/Solo Travel Safety Logo.svg" 
              alt="SoloTravelSafety Logo" 
              className="h-10 sm:h-12 w-auto transition-all duration-300 hover:brightness-110"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
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
            ))}
            
            {user ? (
              <>
                <NotificationBell />
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-400 font-medium text-sm transition-all duration-300 hover:scale-105 focus-smooth"
                >
                  <UserAvatar user={{ ...user, ...profileData }} size="sm" />
                  <span className="hidden xl:inline">{user?.user_metadata?.full_name || 'User'}</span>
                </button>
              </>
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
        <div className={`lg:hidden absolute top-full left-4 right-4 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} style={{backgroundColor: 'rgba(239, 234, 255, 0.95)'}}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
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
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              {user ? (
                <>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-700 font-medium text-base">Notifications</span>
                    <NotificationBell />
                  </div>
                  <button
                    onClick={handleProfileClick}
                    className="flex items-center space-x-3 w-full text-left text-gray-700 hover:text-primary-400 font-medium text-base py-2 transition-all duration-300"
                  >
                    <UserAvatar user={{ ...user, ...profileData }} size="sm" />
                    <span>{user?.user_metadata?.full_name || 'User'}</span>
                  </button>
                </>
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

      {/* Floating navbar that appears on scroll - DISABLED for destination detail pages, profile page, add destination page, and account settings page */}
      {!shouldDisableFloatingNav && (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}>
          <div className="flex justify-center mt-2 sm:mt-4 px-4 animate-slide-down">
            <div className="w-full max-w-4xl backdrop-blur-[100px] shadow-sm border border-gray-200 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:shadow-md" style={{ borderRadius: '30px', backgroundColor: 'rgba(239, 234, 255, 0.8)' }}>
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link 
                  to={getLogoDestination()} 
                  onClick={handleNavClick}
                  className="flex items-center transition-transform duration-300 hover:scale-105"
                >
                  <img 
                    src="/Solo Travel Safety Logo.svg" 
                    alt="SoloTravelSafety Logo" 
                    className="h-8 sm:h-10 w-auto transition-all duration-300 hover:brightness-110"
                  />
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                  {navLinks.map((link) => (
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
                  ))}
                  
                  {user ? (
                    <>
                      <NotificationBell />
                      <button
                        onClick={handleProfileClick}
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary-400 font-medium text-sm transition-all duration-300 hover:scale-105 focus-smooth"
                      >
                        <UserAvatar user={{ ...user, ...profileData }} size="sm" />
                        <span className="hidden xl:inline">{user?.user_metadata?.full_name || 'User'}</span>
                      </button>
                    </>
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
                  ))}
                  
                  <div className="pt-3 space-y-2">
                    {user ? (
                      <button
                        onClick={handleProfileClick}
                        className="flex items-center space-x-2 w-full text-left text-gray-600 hover:text-primary-400 font-medium text-sm py-2 transition-all duration-300"
                      >
                        <UserAvatar user={{ ...user, ...profileData }} size="sm" />
                        <span>{user?.user_metadata?.full_name || 'User'}</span>
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

    </>
  );
};

export default Navbar;