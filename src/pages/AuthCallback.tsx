import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the URL hash parameters
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const type = hashParams.get('type');

        console.log('Auth callback params:', { type, hasAccessToken: !!accessToken, hasRefreshToken: !!refreshToken });

        if (type === 'signup' && accessToken && refreshToken) {
          // Set the session with the tokens
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (error) {
            console.error('Error setting session:', error);
            setStatus('error');
            setMessage('Failed to confirm your email. Please try again.');
            return;
          }

          if (data.user && data.user.email_confirmed_at) {
            setStatus('success');
            setMessage('Email confirmed successfully! Welcome to Solo Travel Safety.');
            
            // Redirect to destinations page after a short delay
            setTimeout(() => {
              navigate('/destinations');
            }, 2000);
          } else {
            setStatus('error');
            setMessage('Email confirmation failed. Please try again.');
          }
        } else if (type === 'recovery' && accessToken && refreshToken) {
          // Handle password recovery
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (error) {
            console.error('Error setting recovery session:', error);
            setStatus('error');
            setMessage('Failed to reset password. Please try again.');
            return;
          }

          setStatus('success');
          setMessage('Password reset successful! You can now sign in with your new password.');
          
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          // Handle other auth types or missing parameters
          console.log('Invalid or missing auth parameters');
          setStatus('error');
          setMessage('Invalid confirmation link. Please try signing up again.');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setMessage('An error occurred while confirming your email.');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="pt-24 px-4 pb-16">
        <div className="mx-auto max-w-md text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            
            {status === 'loading' && (
              <>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Loader className="h-8 w-8 text-blue-600 animate-spin" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">Confirming Your Email</h1>
                <p className="text-gray-600">Please wait while we verify your email address...</p>
              </>
            )}

            {status === 'success' && (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">Email Confirmed!</h1>
                <p className="text-gray-600 mb-4">{message}</p>
                <p className="text-sm text-gray-500">Redirecting you to the destinations page...</p>
              </>
            )}

            {status === 'error' && (
              <>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">Confirmation Failed</h1>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Go to Homepage
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthCallback;