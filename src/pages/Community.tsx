import React from 'react';
import { Users, Heart, MessageSquare, Calendar, Bell } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunityNewsletterForm from '../components/CommunityNewsletterForm';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Coming Soon Section */}
      <section className="pt-24 pb-12 sm:pb-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Animated Icon */}
          <div className="relative mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-400 to-secondary-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-pulse-soft">
              <Users className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 sm:-translate-y-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-300 rounded-full flex items-center justify-center animate-float-slow">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
            </div>
            <div className="absolute top-6 sm:top-8 right-1/4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-float-medium">
                <MessageSquare className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
              </div>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-1/4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-green-400 rounded-full flex items-center justify-center animate-float-fast">
                <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
            Community Hub
          </h1>
          
          <div className="bg-gradient-to-r from-primary-400 to-secondary-teal-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-display animate-fade-in-up animate-delay-200">
              Coming Soon
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
            We're building something amazing for our community of solo female travelers. 
            Connect, share experiences, and support each other on your journeys.
          </p>

          {/* Feature Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-up animate-delay-600">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
              <h3 className="font-display text-gray-900 mb-2 text-sm sm:text-base">Travel Groups</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Find and join other solo female travelers heading to the same destinations.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
              <h3 className="font-display text-gray-900 mb-2 text-sm sm:text-base">Discussion Forums</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Ask questions, share tips, and get advice from experienced travelers.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-teal-600" />
              </div>
              <h3 className="font-display text-gray-900 mb-2 text-sm sm:text-base">Meetup Events</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Attend local meetups and events for solo female travelers in your area.</p>
            </div>
          </div>

          {/* Community Newsletter Signup */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 max-w-lg mx-auto animate-fade-in-up animate-delay-800">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-display text-gray-900 mb-2 sm:mb-3">Get Notified</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Be the first to know when our community features launch! Plus get safety tips, scam alerts, and solo travel secrets.
            </p>
            <CommunityNewsletterForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Community;