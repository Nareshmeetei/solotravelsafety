import React, { useState, useEffect } from 'react';
import { 
  User, 
  MapPin, 
  Calendar, 
  Star, 
  MessageSquare, 
  Heart, 
  Award, 
  Camera, 
  Map,
  Plus,
  MoreHorizontal,
  ThumbsUp,
  Share,
  Bookmark,
  Settings,
  Globe,
  Shield,
  AlertTriangle,
  Users,
  Moon,
  Compass,
  PenTool,
  LogOut,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, uploadProfileImage, getUserDestinations, getUserReviews } from '../lib/supabase';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewModal from '../components/ReviewModal';
import UserAvatar from '../components/UserAvatar';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('activity');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [userReviews, setUserReviews] = useState<any[]>([]);
  const [userDestinations, setUserDestinations] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [showContributionsModal, setShowContributionsModal] = useState(false);

  useEffect(() => {
    if (user) {
      loadUserData();
      loadUserProfile();
      loadAllPosts();
    }
  }, [user]);

  const loadUserProfile = async () => {
    if (!user) return;
    
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profile) {
        setUserProfile(profile);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const loadUserData = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      
      // Load user destinations
      const { data: destinations } = await getUserDestinations();
      if (destinations) {
        setUserDestinations(destinations);
      }

      // Load user reviews from database
      const { data: reviews, error } = await getUserReviews(user.id);
      if (error) {
        console.error('Error loading user reviews:', error);
        setUserReviews([]);
      } else {
        // Transform the data to match the expected format
        const transformedReviews = reviews?.map(review => ({
          id: review.id,
          destination_city: review.destination_city,
          destination_country: review.destination_country,
          overall_rating: review.overall_rating,
          night_safety_rating: review.night_safety_rating,
          public_transit_rating: review.public_transit_rating,
          walking_alone_rating: review.walking_alone_rating,
          harassment_level: review.harassment_level,
          review_text: review.review_text,
          visited_date: review.visited_date,
          created_at: formatDate(review.created_at),
          tags: review.tags || [],
          helpful_count: review.helpful_count || 0
        })) || [];
        
        setUserReviews(transformedReviews);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  };

  const loadAllPosts = async () => {
    try {
      // Load posts from other solo travelers for the Discover tab
      setAllPosts([
        {
          id: '1',
          user: {
            name: 'Sarah Chen',
            avatar: null,
            initials: 'SC',
            location: 'San Francisco, USA'
          },
          destination_city: 'Copenhagen',
          destination_country: 'Denmark',
          overall_rating: 5,
          night_safety_rating: 5,
          public_transit_rating: 5,
          walking_alone_rating: 5,
          harassment_level: 'low',
          review_text: 'Copenhagen exceeded all my expectations! As a solo female traveler, I felt incredibly safe at all hours. The bike culture is amazing - I rented a bike and explored the entire city. Locals are so friendly and helpful, and almost everyone speaks perfect English. The hostels have great female-only dorms. Definitely one of the safest cities I\'ve ever visited!',
          visited_date: 'September 2024',
          created_at: '2 days ago',
          tags: ['felt safe', 'bike-friendly', 'friendly locals', 'great hostels'],
          helpful_count: 34,
          photos: ['https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=400']
        },
        {
          id: '2',
          user: {
            name: 'Maria Rodriguez',
            avatar: null,
            initials: 'MR',
            location: 'Barcelona, Spain'
          },
          destination_city: 'Reykjavik',
          destination_country: 'Iceland',
          overall_rating: 5,
          night_safety_rating: 5,
          public_transit_rating: 4,
          walking_alone_rating: 5,
          harassment_level: 'low',
          review_text: 'Iceland is a solo female traveler\'s paradise! Reykjavik is incredibly safe - I walked around at 2 AM without any concerns. The Northern Lights tours are well-organized and safe. Stayed in a female-only hostel room and met amazing women from around the world. The Blue Lagoon is a must-visit. Expensive but absolutely worth it for the safety and natural beauty.',
          visited_date: 'November 2024',
          created_at: '5 days ago',
          tags: ['felt safe', 'northern lights', 'expensive', 'natural beauty', 'great hostels'],
          helpful_count: 67,
          photos: ['https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400']
        },
        {
          id: '3',
          user: {
            name: 'Priya Sharma',
            avatar: null,
            initials: 'PS',
            location: 'Mumbai, India'
          },
          destination_city: 'Singapore',
          destination_country: 'Singapore',
          overall_rating: 5,
          night_safety_rating: 5,
          public_transit_rating: 5,
          walking_alone_rating: 5,
          harassment_level: 'low',
          review_text: 'Singapore is perfect for first-time solo female travelers in Asia! Everything is so clean, organized, and safe. The MRT system is fantastic and runs late. I felt completely comfortable walking around Marina Bay and Chinatown at night. Food courts are amazing for solo dining. A bit expensive but the safety and convenience make it worth every penny.',
          visited_date: 'October 2024',
          created_at: '1 week ago',
          tags: ['felt safe', 'great transport', 'clean', 'expensive', 'solo dining'],
          helpful_count: 89,
          photos: ['https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=400']
        },
        {
          id: '4',
          user: {
            name: 'Emma Thompson',
            avatar: null,
            initials: 'ET',
            location: 'London, UK'
          },
          destination_city: 'Mumbai',
          destination_country: 'India',
          overall_rating: 3,
          night_safety_rating: 2,
          public_transit_rating: 3,
          walking_alone_rating: 2,
          harassment_level: 'high',
          review_text: 'Mumbai was challenging but rewarding. As a solo female traveler, I had to be very careful. Stayed in Colaba area which felt safer. Used Uber instead of local transport after 7 PM. Experienced significant staring and some harassment, but the locals I met through my hostel were incredibly kind and protective. Dress very conservatively and trust your instincts.',
          visited_date: 'August 2024',
          created_at: '2 weeks ago',
          tags: ['challenging', 'staring', 'kind locals', 'dress conservatively', 'trust instincts'],
          helpful_count: 156,
          photos: ['https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400']
        }
      ]);
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid image file (JPEG, PNG, WebP, or GIF)');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setUploadingImage(true);
    
    try {
      // Upload image using the helper function
      const { publicUrl, error } = await uploadProfileImage(file, user.id);
      
      if (error) {
        throw error;
      }

      if (!publicUrl) {
        throw new Error('Failed to get public URL for uploaded image');
      }

      // Update profile with avatar URL
      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          avatar_url: publicUrl,
          updated_at: new Date().toISOString()
        });

      if (updateError) {
        throw updateError;
      }

      // Update auth metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });

      if (authError) {
        console.warn('Auth metadata update failed:', authError);
      }

      // Refresh the profile data
      await loadUserProfile();
      
      alert('Profile image updated successfully!');
    } catch (error: any) {
      console.error('Error uploading image:', error);
      alert(`Error uploading image: ${error.message || 'Please try again.'}`);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserAvatar = () => {
    return userProfile?.avatar_url || user?.user_metadata?.avatar_url || null;
  };

  const getTotalContributions = () => {
    return userReviews.length + userDestinations.length;
  };

  const handleReviewSubmitted = () => {
    // Reload user data to show the new review immediately
    loadUserData();
  };

  const tabs = [
    { id: 'activity', label: 'Activity feed', icon: MessageSquare },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'reviews', label: 'My Reviews', icon: Star }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-black text-gray-900 mb-4">Please sign in to access your profile</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="pt-24 px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Sidebar - Profile & Quick Actions */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <UserAvatar user={{ ...user, ...userProfile }} size="lg" />
                      <label className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 cursor-pointer shadow-sm">
                        <input 
                          type="file" 
                          accept="image/jpeg,image/png,image/webp,image/gif" 
                          onChange={handleImageUpload}
                          className="hidden"
                          disabled={uploadingImage}
                        />
                        {uploadingImage ? (
                          <div className="animate-spin rounded-full h-3 w-3 border-b border-gray-600"></div>
                        ) : (
                          <Camera className="h-3 w-3 text-gray-600" />
                        )}
                      </label>
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-gray-900">
                        {userProfile?.full_name || user.user_metadata?.full_name || 'Solo Traveler'}
                      </h2>
                      <p className="text-gray-600 text-sm">@{user.email?.split('@')[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <button 
                      onClick={() => setShowContributionsModal(true)}
                      className="text-2xl font-black text-gray-900 hover:text-primary-400 transition-colors duration-300"
                    >
                      {getTotalContributions()}
                    </button>
                    <div className="text-sm text-gray-600">Contributions</div>
                  </div>
                  <div className="text-center">
                    <button className="text-2xl font-black text-gray-900 hover:text-primary-400 transition-colors duration-300">
                      0
                    </button>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <button className="text-2xl font-black text-gray-900 hover:text-primary-400 transition-colors duration-300">
                      0
                    </button>
                    <div className="text-sm text-gray-600">Following</div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{userProfile?.location || 'Location not set'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>

                {/* Bio */}
                {userProfile?.bio && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{userProfile.bio}</p>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-black text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    to="/add-destination"
                    className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="font-medium">Add Destination</span>
                  </Link>
                  <Link 
                    to="/account-settings"
                    className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="font-medium">Account Settings</span>
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              
              {/* Tab Navigation with Write Review Button */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center justify-between px-6">
                  <div className="flex space-x-8 overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'border-primary-400 text-primary-400'
                            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                        }`}
                      >
                        <tab.icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Write Safety Review Button */}
                  <button 
                    onClick={() => setShowReviewModal(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-400 hover:bg-primary-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex-shrink-0"
                  >
                    <PenTool className="h-4 w-4" />
                    <span className="hidden sm:inline">Write Safety Review</span>
                    <span className="sm:hidden">Review</span>
                  </button>
                </div>
              </div>

              {/* Activity Feed */}
              {activeTab === 'activity' && (
                <div className="space-y-6">
                  {loading ? (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading your activity...</p>
                    </div>
                  ) : userReviews.length > 0 ? (
                    userReviews.map((review, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-start space-x-4">
                          <UserAvatar user={{ ...user, ...userProfile }} size="md" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <span className="font-semibold text-gray-900">
                                  {userProfile?.full_name || user.user_metadata?.full_name || 'You'}
                                </span>
                                <span className="text-gray-600 ml-2">wrote a safety review</span>
                                <div className="text-sm text-gray-500 mt-1">{review.created_at}</div>
                              </div>
                              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <MoreHorizontal className="h-5 w-5 text-gray-400" />
                              </button>
                            </div>

                            {/* Review Content */}
                            <div className="mb-4">
                              <div className="flex items-center space-x-4 mb-3">
                                <div className="flex items-center space-x-2">
                                  <Shield className="h-4 w-4 text-primary-400" />
                                  <span className="text-sm font-medium">Overall Safety:</span>
                                  <div className="flex space-x-1">
                                    {[1,2,3,4,5].map((star) => (
                                      <Star 
                                        key={star} 
                                        className={`h-4 w-4 ${star <= review.overall_rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                      />
                                    ))}
                                  </div>
                                </div>
                                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  review.harassment_level === 'low' ? 'bg-green-100 text-green-800' :
                                  review.harassment_level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {review.harassment_level.toUpperCase()} HARASSMENT
                                </div>
                              </div>
                              
                              <h4 className="font-bold text-gray-900 mb-2">
                                {review.destination_city}, {review.destination_country} - Solo Female Travel Experience
                              </h4>
                              <p className="text-gray-700 mb-3">
                                "{review.review_text}"
                              </p>
                              <div className="text-sm text-gray-600 mb-3">
                                Visited: {review.visited_date}
                              </div>

                              {/* Safety Breakdown */}
                              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                                <div className="text-center">
                                  <div className="flex items-center justify-center space-x-1 mb-1">
                                    <Moon className="h-4 w-4 text-blue-500" />
                                    <span className="text-xs font-medium">Night Safety</span>
                                  </div>
                                  <div className="text-lg font-bold text-gray-900">{review.night_safety_rating}/5</div>
                                </div>
                                <div className="text-center">
                                  <div className="flex items-center justify-center space-x-1 mb-1">
                                    <Users className="h-4 w-4 text-green-500" />
                                    <span className="text-xs font-medium">Walking Alone</span>
                                  </div>
                                  <div className="text-lg font-bold text-gray-900">{review.walking_alone_rating}/5</div>
                                </div>
                                <div className="text-center">
                                  <div className="flex items-center justify-center space-x-1 mb-1">
                                    <MapPin className="h-4 w-4 text-purple-500" />
                                    <span className="text-xs font-medium">Public Transit</span>
                                  </div>
                                  <div className="text-lg font-bold text-gray-900">{review.public_transit_rating}/5</div>
                                </div>
                              </div>

                              {/* Tags */}
                              {review.tags && review.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {review.tags.map((tag: string, tagIndex: number) => (
                                    <span 
                                      key={tagIndex} 
                                      className={`px-3 py-1 text-sm rounded-full ${
                                        tag.includes('warning') || tag.includes('pushy') ? 'bg-red-100 text-red-800' :
                                        tag.includes('safe') || tag.includes('helpful') || tag.includes('friendly') ? 'bg-green-100 text-green-800' :
                                        tag.includes('transport') ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                                      }`}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>Helpful ({review.helpful_count})</span>
                                </button>
                                <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                  <Bookmark className="h-4 w-4" />
                                  <span>Save</span>
                                </button>
                                <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                  <Share className="h-4 w-4" />
                                  <span>Share</span>
                                </button>
                              </div>
                              <div className="text-sm text-gray-500">
                                Helped {review.helpful_count} travelers
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center">
                      <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Share Your Safety Experience</h3>
                      <p className="text-gray-600 mb-6">Help other solo female travelers by sharing your safety insights and experiences.</p>
                      <button 
                        onClick={() => setShowReviewModal(true)}
                        className="px-6 py-3 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
                      >
                        Write Your First Safety Review
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Discover Tab - Posts from other travelers */}
              {activeTab === 'discover' && (
                <div className="space-y-6">
                  {allPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {post.user.initials}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <span className="font-semibold text-gray-900">{post.user.name}</span>
                              <span className="text-gray-600 ml-2">wrote a safety review</span>
                              <div className="text-sm text-gray-500 mt-1">
                                {post.created_at} • {post.user.location}
                              </div>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                              <MoreHorizontal className="h-5 w-5 text-gray-400" />
                            </button>
                          </div>

                          {/* Post Content */}
                          <div className="mb-4">
                            <div className="flex items-center space-x-4 mb-3">
                              <div className="flex items-center space-x-2">
                                <Shield className="h-4 w-4 text-primary-400" />
                                <span className="text-sm font-medium">Overall Safety:</span>
                                <div className="flex space-x-1">
                                  {[1,2,3,4,5].map((star) => (
                                    <Star 
                                      key={star} 
                                      className={`h-4 w-4 ${star <= post.overall_rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                post.harassment_level === 'low' ? 'bg-green-100 text-green-800' :
                                post.harassment_level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {post.harassment_level.toUpperCase()} HARASSMENT
                              </div>
                            </div>
                            
                            <h4 className="font-bold text-gray-900 mb-2">
                              {post.destination_city}, {post.destination_country} - Solo Female Travel Experience
                            </h4>
                            <p className="text-gray-700 mb-3">
                              "{post.review_text}"
                            </p>
                            <div className="text-sm text-gray-600 mb-3">
                              Visited: {post.visited_date}
                            </div>

                            {/* Photo if available */}
                            {post.photos && post.photos.length > 0 && (
                              <div className="mb-4">
                                <img 
                                  src={post.photos[0]} 
                                  alt={`${post.destination_city} travel photo`}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              </div>
                            )}

                            {/* Safety Breakdown */}
                            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-4">
                              <div className="text-center">
                                <div className="flex items-center justify-center space-x-1 mb-1">
                                  <Moon className="h-4 w-4 text-blue-500" />
                                  <span className="text-xs font-medium">Night Safety</span>
                                </div>
                                <div className="text-lg font-bold text-gray-900">{post.night_safety_rating}/5</div>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center space-x-1 mb-1">
                                  <Users className="h-4 w-4 text-green-500" />
                                  <span className="text-xs font-medium">Walking Alone</span>
                                </div>
                                <div className="text-lg font-bold text-gray-900">{post.walking_alone_rating}/5</div>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center space-x-1 mb-1">
                                  <MapPin className="h-4 w-4 text-purple-500" />
                                  <span className="text-xs font-medium">Public Transit</span>
                                </div>
                                <div className="text-lg font-bold text-gray-900">{post.public_transit_rating}/5</div>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag: string, tagIndex: number) => (
                                <span 
                                  key={tagIndex} 
                                  className={`px-3 py-1 text-sm rounded-full ${
                                    tag.includes('challenging') || tag.includes('staring') || tag.includes('expensive') ? 'bg-red-100 text-red-800' :
                                    tag.includes('safe') || tag.includes('friendly') || tag.includes('great') || tag.includes('kind') ? 'bg-green-100 text-green-800' :
                                    tag.includes('transport') || tag.includes('bike') || tag.includes('clean') ? 'bg-blue-100 text-blue-800' :
                                    tag.includes('northern') || tag.includes('natural') || tag.includes('beauty') ? 'bg-purple-100 text-purple-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                              <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                <ThumbsUp className="h-4 w-4" />
                                <span>Helpful ({post.helpful_count})</span>
                              </button>
                              <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                <MessageSquare className="h-4 w-4" />
                                <span>Comment</span>
                              </button>
                              <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                <Bookmark className="h-4 w-4" />
                                <span>Save</span>
                              </button>
                              <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                                <Share className="h-4 w-4" />
                                <span>Share</span>
                              </button>
                            </div>
                            <div className="text-sm text-gray-500">
                              Helped {post.helpful_count} travelers
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Load More */}
                  <div className="text-center">
                    <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-300">
                      Load More Posts
                    </button>
                  </div>
                </div>
              )}

              {/* My Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  {loading ? (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading your reviews...</p>
                    </div>
                  ) : userReviews.length > 0 ? (
                    userReviews.map((review, index) => (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">
                              {review.destination_city}, {review.destination_country}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {[1,2,3,4,5].map((star) => (
                                  <Star 
                                    key={star} 
                                    className={`h-4 w-4 ${star <= review.overall_rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.created_at}</span>
                              <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                review.harassment_level === 'low' ? 'bg-green-100 text-green-800' :
                                review.harassment_level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {review.harassment_level.toUpperCase()}
                              </div>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                            <MoreHorizontal className="h-5 w-5 text-gray-400" />
                          </button>
                        </div>
                        <p className="text-gray-700 mb-4">{review.review_text.substring(0, 150)}...</p>
                        <div className="flex flex-wrap gap-2">
                          {review.tags && review.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center">
                      <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">No Safety Reviews Yet</h3>
                      <p className="text-gray-600 mb-6">Start sharing your travel safety experiences with the community.</p>
                      <button 
                        onClick={() => setShowReviewModal(true)}
                        className="px-6 py-3 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
                      >
                        Write a Safety Review
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contributions Modal */}
      {showContributionsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl animate-fade-in">
            <button
              onClick={() => setShowContributionsModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Your Contributions</h2>
              
              <div className="space-y-6">
                {/* Reviews Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Safety Reviews ({userReviews.length})
                  </h3>
                  {userReviews.length > 0 ? (
                    <div className="space-y-3">
                      {userReviews.map((review, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">
                            {review.destination_city}, {review.destination_country}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {review.overall_rating}/5 stars • {review.created_at}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm">No reviews yet</p>
                  )}
                </div>

                {/* Destinations Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    Destination Submissions ({userDestinations.length})
                  </h3>
                  {userDestinations.length > 0 ? (
                    <div className="space-y-3">
                      {userDestinations.map((destination, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">
                            {destination.city}, {destination.country}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Status: {destination.status} • {formatDate(destination.created_at)}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm">No destination submissions yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      <ReviewModal 
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />

      <Footer />
    </div>
  );
};

export default Profile;