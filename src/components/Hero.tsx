import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import { addNewsletterEmail } from '../lib/supabase';

const Hero: React.FC = () => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await addNewsletterEmail(email);
      if (error) {
        setSubmitMessage('Something went wrong. Please try again.');
      } else {
        setSubmitMessage('Thanks! You\'re in the safe loop 🎉');
        setEmail('');
        setTimeout(() => setSubmitMessage(''), 3000);
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden px-4 py-32 sm:py-40">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#9E7DFF]/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-[#FFBAD6]/25 to-transparent rounded-full blur-3xl animate-float-medium"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#1CAA9C]/20 to-transparent rounded-full blur-3xl animate-float-fast"></div>
            <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-gradient-to-br from-[#9E7DFF]/15 to-[#FFBAD6]/15 rounded-full blur-3xl animate-float-reverse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-tl from-[#1CAA9C]/25 to-[#9E7DFF]/15 rounded-full blur-3xl animate-float-slow-reverse"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="mb-6 text-5xl font-display tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up">
            Travel Solo, Not Alone.
          </h1>
          
          {/* Subheadline */}
          <div className="mx-auto max-w-2xl">
            <p className="mb-10 text-lg text-gray-600 sm:text-xl animate-fade-in-up animate-delay-200">
              A safety platform for women traveling solo — with honest stories, safety tips, and feel-good places to help you explore more and stress less.
            </p>
          </div>
          
          {/* Newsletter Signup CTA - Increased width by 30% */}
          <div className="mx-auto max-w-lg animate-fade-in-up animate-delay-400">
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-6 py-4 border border-gray-400 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300 focus:scale-[1.02] focus-smooth"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group btn-hover inline-flex items-center justify-center rounded-full bg-primary-400 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-500 hover:shadow-xl hover:scale-105 focus-smooth disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Keep me in the loop
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                submitMessage.includes('Thanks') 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}
            
            {/* Subtext */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Independent smart women stay in the loop. Sign up for city safety, scam alerts, and solo travel secrets.
            </p>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode="signup"
      />
    </>
  );
};

export default Hero;