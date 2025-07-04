import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Hero: React.FC = () => {
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    if (!fullName.trim()) {
      setError('Full name is required');
      setLoading(false);
      return;
    }
    try {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        if (error.message.includes('User already registered') || error.message.includes('user_already_exists')) {
          setError('An account with this email already exists. Please sign in instead or use a different email address.');
        } else {
          setError(error.message);
        }
      } else {
        setSuccess('Please check your email and click the confirmation link to complete your registration.');
        setFullName('');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-40 sm:pb-24">
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
      {/* Two-column layout */}
      <div className="relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 min-h-[500px] md:min-h-[500px]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center text-left h-full items-center md:items-start">
          <h1 className="mb-6 text-5xl font-display tracking-tight text-gray-900 sm:text-6xl lg:text-7xl animate-fade-in-up text-left">
            Travel Solo, Not Alone.
          </h1>
          <p className="mb-10 text-lg text-gray-600 sm:text-xl animate-fade-in-up animate-delay-200 text-left">
            A safety platform for women traveling solo — with honest stories, safety tips, and feel-good places to help you explore more and stress less.
          </p>
        </div>
        {/* Right: Signup Form */}
        <div className="flex-1 flex items-center justify-center w-full h-full">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl border border-gray-200 p-8 animate-fade-in-up">
            <h2 className="text-2xl font-display text-gray-900 mb-2">Join the Safety Squad</h2>
            <p className="text-gray-600 mb-6">Sign up for city safety, scam alerts, and solo travel secrets.</p>
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                {error}
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition-all duration-300 pr-12"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  Sign Up <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;