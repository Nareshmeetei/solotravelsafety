import React, { useState } from 'react';
import { addNewsletterEmail } from '../lib/supabase';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { data, error } = await addNewsletterEmail(email);
      if (error) {
        console.error('Newsletter subscription error:', error);
        if (error.includes('Newsletter system not yet set up')) {
          setSubmitMessage('Newsletter system is being set up. Please try again in a few minutes.');
        } else if (error.includes('already subscribed')) {
          setSubmitMessage('You are already subscribed to our newsletter! 😊');
        } else {
          setSubmitMessage('Something went wrong. Please try again.');
        }
      } else {
        console.log('Newsletter subscription successful:', data);
        setSubmitMessage("Thanks! You're in the safe loop 🎉");
        setEmail('');
        setTimeout(() => setSubmitMessage(''), 3000);
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4">
      <div className="mx-auto max-w-2xl w-full animate-fade-in-up animate-delay-400">
        <h2 className="text-2xl font-display font-bold text-center text-gray-900 mb-2">Independent Smart Women Stay in the Loop</h2>
        <p className="text-base text-center text-gray-600 mb-6">Sign up for city safety, scam alerts, and solo travel secrets.</p>
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
                <>Keep me in the loop</>
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
      </div>
    </div>
  );
};

export default NewsletterSignup; 