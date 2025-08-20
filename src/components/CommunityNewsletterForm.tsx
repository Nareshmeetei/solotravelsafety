import React, { useState } from 'react';
import { addNewsletterEmail } from '../lib/supabase';

const CommunityNewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🚀 Community form submission started')
    
    if (!email.trim()) {
      setSubmitMessage('Please enter an email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      console.log('📧 Calling addNewsletterEmail with:', email)
      const result = await addNewsletterEmail(email);
      console.log('📬 Newsletter result:', result)
      
      if (result.error) {
        console.error('❌ Newsletter error:', result.error);
        
        // More specific error handling
        if (result.error.includes('table not created') || result.error.includes('does not exist')) {
          setSubmitMessage('Newsletter system is being set up. Please contact support.');
        } else if (result.error.includes('already subscribed') || result.error.includes('duplicate')) {
          setSubmitMessage('You are already subscribed! 😊');
        } else {
          setSubmitMessage(`Error: ${result.error}`);
        }
      } else {
        console.log('✅ Newsletter success:', result.data);
        setSubmitMessage("Thanks! You're in the safe loop 🎉");
        setEmail('');
        setTimeout(() => setSubmitMessage(''), 4000);
      }
    } catch (error: any) {
      console.error('💥 Newsletter submission error:', error);
      setSubmitMessage(`Error: ${error.message || 'Something went wrong'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleNewsletterSubmit} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 sm:px-4 py-2.5 sm:py-2 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              </div>
            ) : (
              'Notify Me'
            )}
          </button>
        </div>
      </form>
      
      {/* Success/Error Message */}
      {submitMessage && (
        <div className={`p-3 rounded-lg text-sm font-medium ${
          submitMessage.includes('Thanks')
            ? 'bg-green-50 text-green-800 border border-green-200'
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitMessage}
        </div>
      )}
    </>
  );
};

export default CommunityNewsletterForm;