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
  X,
  Feather,
  FileText,
  Cloud,
  Train
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, uploadProfileImage, getUserDestinations, getUserReviews, isDevelopmentMode, ensureProfileExists } from '../lib/supabase';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewModal from '../components/ReviewModal';
import ChirpModal from '../components/ChirpModal';
import ChirpCard from '../components/ChirpCard';
import UserAvatar from '../components/UserAvatar';
import DMModal from '../components/DMModal';
import PostCommentModal from '../components/PostCommentModal';

const Profile: React.FC = () => {
  const { user, signOut: authSignOut, profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Development mode user support
  const [developmentUser, setDevelopmentUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('activity');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showChirpModal, setShowChirpModal] = useState(false);
  const [showDMModal, setShowDMModal] = useState(false);
  const [userReviews, setUserReviews] = useState<any[]>([]);
  const [userDestinations, setUserDestinations] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [userChirps, setUserChirps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [showContributionsModal, setShowContributionsModal] = useState(false);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [unreadAlertsCount, setUnreadAlertsCount] = useState(0);
  const [authTimeout, setAuthTimeout] = useState(false);
  
  // Interactive functionality state
  const [helpfulVotes, setHelpfulVotes] = useState<{ [postId: string]: boolean }>({});
  const [savedPosts, setSavedPosts] = useState<{ [postId: string]: boolean }>({});
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [postComments, setPostComments] = useState<{ [postId: string]: any[] }>({});
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  // Add a timeout fallback for auth loading
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.warn('⚠️ Auth loading timeout in Profile component')
      setAuthTimeout(true)
    }, 8000) // 8 second timeout

    return () => clearTimeout(timeoutId)
  }, [])

  // Load development user if in development mode
  useEffect(() => {
    if (isDevelopmentMode) {
      const demoUser = localStorage.getItem('demo-user-session')
      if (demoUser) {
        try {
          setDevelopmentUser(JSON.parse(demoUser))
        } catch (e) {
          console.warn('Invalid demo user session data')
        }
      }
    }
  }, [])

  // Get current user (real or development)
  const currentUser = user || developmentUser

  useEffect(() => {
    if (currentUser) {
      loadUserData();
      loadUserProfile();
      loadAllPosts();
      loadUserChirps();
      loadAlerts();
    }
  }, [currentUser]);

  // Refresh profile data when navigating to this page
  useEffect(() => {
    if (user && location.pathname === '/profile') {
      console.log('Navigated to Profile page, refreshing data...');
      loadUserProfile();
    }
  }, [location.pathname, user]);

  // Refresh profile data on component mount
  useEffect(() => {
    if (user) {
      console.log('Profile component mounted, refreshing data...');
      loadUserProfile();
    }
  }, []); // Empty dependency array means this runs once on mount

  // Refresh profile data when component becomes visible (e.g., when navigating back from settings)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && user) {
        console.log('Visibility changed, refreshing profile data...');
        loadUserProfile();
      }
    };

    const handleProfileUpdate = (event: CustomEvent) => {
      if (event.detail?.type === 'profile' && user) {
        console.log('Profile updated event received, refreshing profile data...');
        loadUserProfile(); // This will refresh the profile photo and other data
      }
    };

    const handleChirpPosted = (event: CustomEvent) => {
      console.log('Chirp posted event received, refreshing chirps...');
      loadUserChirps();
    };

    const handleChirpDeleted = (event: CustomEvent) => {
      console.log('Chirp deleted event received, refreshing chirps...');
      loadUserChirps();
    };

    const handleChirpEdited = (event: CustomEvent) => {
      console.log('Chirp edited event received, refreshing chirps...');
      loadUserChirps();
    };

    const handleFocus = () => {
      if (user) {
        console.log('Window focused, refreshing profile data...');
        loadUserProfile();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('profileUpdated', handleProfileUpdate as EventListener);
    window.addEventListener('chirpPosted', handleChirpPosted as EventListener);
    window.addEventListener('chirpDeleted', handleChirpDeleted as EventListener);
    window.addEventListener('chirpEdited', handleChirpEdited as EventListener);
    window.addEventListener('focus', handleFocus);
    
    // Also refresh profile data when user object changes (e.g., after refreshUser is called)
    if (user) {
      console.log('User object changed, refreshing profile data...');
      console.log('Current user metadata:', user.user_metadata);
      loadUserProfile();
    }
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('profileUpdated', handleProfileUpdate as EventListener);
      window.removeEventListener('chirpPosted', handleChirpPosted as EventListener);
      window.removeEventListener('chirpDeleted', handleChirpDeleted as EventListener);
      window.removeEventListener('chirpEdited', handleChirpEdited as EventListener);
      window.removeEventListener('focus', handleFocus);
    };
  }, [user]);

  const loadUserProfile = async () => {
    if (!currentUser) return;
    
    try {
      // SIMPLE: Use the same approach as AccountSettings - load from localStorage first
      const storedProfile = localStorage.getItem(`dev_profile_${currentUser.id}`);
      if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        console.log('📖 Profile loaded from localStorage:', profile);
        setUserProfile(profile);
        return;
      }
      
      // Fallback to auth metadata if no localStorage data
      const fallbackProfile = {
        user_id: currentUser.id,
        full_name: currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Solo Traveler',
        username: currentUser.user_metadata?.username || currentUser.email?.split('@')[0] || 'user',
        avatar_url: currentUser.user_metadata?.avatar_url || '',
        bio: '',
        location: '',
        email: currentUser.email,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      console.log('📖 Profile loaded from auth metadata:', fallbackProfile);
      setUserProfile(fallbackProfile);
      
    } catch (error) {
      console.error('❌ Error loading profile:', error);
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

  // Load saved user interactions from localStorage
  useEffect(() => {
    if (currentUser) {
      const savedHelpfulVotes = localStorage.getItem(`helpful_votes_${currentUser.id}`);
      const savedBookmarks = localStorage.getItem(`saved_posts_${currentUser.id}`);
      const savedComments = localStorage.getItem(`post_comments_${currentUser.id}`);
      
      if (savedHelpfulVotes) {
        try {
          setHelpfulVotes(JSON.parse(savedHelpfulVotes));
        } catch (e) {
          console.warn('Error loading helpful votes:', e);
        }
      }
      
      if (savedBookmarks) {
        try {
          setSavedPosts(JSON.parse(savedBookmarks));
        } catch (e) {
          console.warn('Error loading saved posts:', e);
        }
      }
      
      if (savedComments) {
        try {
          setPostComments(JSON.parse(savedComments));
        } catch (e) {
          console.warn('Error loading comments:', e);
        }
      }
    }
  }, [currentUser]);

  // Handle helpful vote toggle
  const handleHelpfulClick = (postId: string) => {
    if (!currentUser) return;
    
    const isCurrentlyHelpful = helpfulVotes[postId];
    const newHelpfulVotes = {
      ...helpfulVotes,
      [postId]: !isCurrentlyHelpful
    };
    
    setHelpfulVotes(newHelpfulVotes);
    localStorage.setItem(`helpful_votes_${currentUser.id}`, JSON.stringify(newHelpfulVotes));
    
    // Update the helpful count in the posts
    setAllPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            helpful_count: isCurrentlyHelpful 
              ? post.helpful_count - 1 
              : post.helpful_count + 1
          };
        }
        return post;
      })
    );
  };

  // Handle save/bookmark toggle
  const handleSaveClick = (postId: string) => {
    if (!currentUser) return;
    
    const newSavedPosts = {
      ...savedPosts,
      [postId]: !savedPosts[postId]
    };
    
    setSavedPosts(newSavedPosts);
    localStorage.setItem(`saved_posts_${currentUser.id}`, JSON.stringify(newSavedPosts));
  };

  // Handle comment modal
  const handleCommentClick = (post: any) => {
    setSelectedPost(post);
    setShowCommentModal(true);
  };

  // Handle share functionality
  const handleShareClick = async (post: any) => {
    const shareData = {
      title: `${post.destination_city}, ${post.destination_country} - Solo Female Travel Review`,
      text: `Check out this safety review from ${post.user.name}: "${post.review_text.substring(0, 100)}..."`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        alert('Post link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        alert('Post link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Failed to copy to clipboard:', clipboardError);
      }
    }
  };

  // Handle load more posts
  const handleLoadMorePosts = () => {
    setLoadingMore(true);
    
    // Simulate loading more posts
    setTimeout(() => {
      const additionalPosts = [
        {
          id: `additional-${currentPostsPage + 1}`,
          user: {
            name: 'Lisa Park',
            avatar: null,
            initials: 'LP',
            location: 'Seoul, South Korea'
          },
          destination_city: 'Tokyo',
          destination_country: 'Japan',
          overall_rating: 5,
          night_safety_rating: 5,
          public_transit_rating: 5,
          walking_alone_rating: 5,
          harassment_level: 'low',
          review_text: 'Tokyo is incredible for solo female travelers! I felt completely safe walking around Shibuya and Shinjuku even late at night. The trains run perfectly on time, and people are so respectful. Stayed in a female-only capsule hotel which was such a cool experience. Language barrier wasn\'t an issue with translation apps.',
          visited_date: 'December 2024',
          created_at: `${currentPostsPage} week${currentPostsPage > 1 ? 's' : ''} ago`,
          tags: ['felt safe', 'great transport', 'respectful people', 'language barrier ok'],
          helpful_count: 23,
          photos: ['https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=400']
        }
      ];
      
      setAllPosts(prevPosts => [...prevPosts, ...additionalPosts]);
      setCurrentPostsPage(prev => prev + 1);
      setLoadingMore(false);
      
      // Stop loading more after 3 pages for demo
      if (currentPostsPage >= 3) {
        setHasMorePosts(false);
      }
    }, 1500);
  };

  const loadUserChirps = async () => {
    if (!user) {
      console.log('❌ No user found');
      return;
    }
    
    console.log('📖 Loading chirps for user:', user.id);
    setLoading(true);
    
    try {
      // SIMPLE: Always load from localStorage (works in both dev and production)
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      console.log('📖 Found', localChirps.length, 'total chirps in localStorage');
      
      // Filter for current user's chirps
      const userChirps = localChirps.filter((chirp: any) => chirp.user_id === user.id);
      console.log('📖 Found', userChirps.length, 'chirps for current user');
      
      // Sort by newest first
      userChirps.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      
      if (userChirps.length > 0) {
        console.log('✅ Setting user chirps:', userChirps);
        setUserChirps(userChirps);
      } else {
        console.log('ℹ️ No user chirps found, showing empty state');
        setUserChirps([]);
      }
      
    } catch (error) {
      console.error('❌ Error loading chirps:', error);
      setUserChirps([]);
    } finally {
      setLoading(false);
      console.log('✅ Chirp loading completed');
    }
  };

  const loadAlerts = async () => {
    if (!user) return;

    try {
      // Load alerts from localStorage
      const storedAlerts = JSON.parse(localStorage.getItem(`alerts_${user.id}`) || '[]');
      
      // Add some sample safety alerts for demo
      const sampleAlerts = [
        {
          id: '1',
          type: 'safety_alert',
          title: 'Safety Alert: Increased incidents in Paris',
          message: 'Recent reports indicate increased pickpocketing in tourist areas. Stay vigilant and keep belongings secure.',
          severity: 'medium',
          location: 'Paris, France',
          created_at: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
          is_read: false
        },
        {
          id: '2',
          type: 'weather_alert',
          title: 'Weather Alert: Heavy rain expected in Tokyo',
          message: 'Heavy rainfall expected this weekend. Plan indoor activities and avoid flood-prone areas.',
          severity: 'low',
          location: 'Tokyo, Japan',
          created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
          is_read: false
        },
        {
          id: '3',
          type: 'transport_alert',
          title: 'Transport Alert: Metro delays in Barcelona',
          message: 'Metro Line 3 experiencing delays due to maintenance. Plan extra travel time.',
          severity: 'low',
          location: 'Barcelona, Spain',
          created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
          is_read: true
        },
        {
          id: '4',
          type: 'safety_alert',
          title: 'Safety Alert: New safety feature available',
          message: 'Emergency contact sharing feature now available. Add trusted contacts for quick access.',
          severity: 'low',
          location: 'Global',
          created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
          is_read: true
        }
      ];

      const allAlerts = [...storedAlerts, ...sampleAlerts];
      setAlerts(allAlerts);
      
      // Calculate unread count
      const unreadCount = allAlerts.filter(alert => !alert.is_read).length;
      setUnreadAlertsCount(unreadCount);
    } catch (error) {
      console.error('Error loading alerts:', error);
    }
  };

  const markAlertAsRead = (alertId: string) => {
    setAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, is_read: true } : alert
      )
    );

    // Update localStorage
    if (user) {
      const updatedAlerts = alerts.map(alert => 
        alert.id === alertId ? { ...alert, is_read: true } : alert
      );
      localStorage.setItem(`alerts_${user.id}`, JSON.stringify(updatedAlerts));
      
      // Update unread count
      const unreadCount = updatedAlerts.filter(alert => !alert.is_read).length;
      setUnreadAlertsCount(unreadCount);
    }
  };

  const markAllAlertsAsRead = () => {
    setAlerts(prev => 
      prev.map(alert => ({ ...alert, is_read: true }))
    );

    // Update localStorage
    if (user) {
      const updatedAlerts = alerts.map(alert => ({ ...alert, is_read: true }));
      localStorage.setItem(`alerts_${user.id}`, JSON.stringify(updatedAlerts));
      setUnreadAlertsCount(0);
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'safety_alert': return <Shield className="h-4 w-4 text-red-500" />;
      case 'weather_alert': return <Cloud className="h-4 w-4 text-blue-500" />;
      case 'transport_alert': return <Train className="h-4 w-4 text-orange-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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

      // Try to ensure profile exists, but don't fail if it can't be created
      let profileExists = false;
      try {
        const { data: profile, error: ensureError } = await ensureProfileExists(user.id, user);
        if (!ensureError && profile) {
          profileExists = true;
          console.log('Profile ensured successfully');
        } else {
          console.warn('Could not ensure profile exists:', ensureError);
        }
      } catch (ensureError) {
        console.warn('Profile creation failed, will try to update user metadata instead:', ensureError);
      }

      // If profile exists in database, update it
      if (profileExists) {
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            avatar_url: publicUrl,
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id);

        if (updateError) {
          console.warn('Profile database update failed, falling back to user metadata:', updateError);
          profileExists = false; // Fall back to metadata update
        } else {
          console.log('Profile avatar updated in database successfully');
        }
      }
      
      // If database update failed or profile doesn't exist, update user metadata
      if (!profileExists) {
        try {
          const { error: authError } = await supabase.auth.updateUser({
            data: {
              avatar_url: publicUrl
            }
          });
          
          if (authError) {
            console.warn('Auth metadata update failed:', authError);
          } else {
            console.log('Avatar URL updated in user metadata as fallback');
          }
        } catch (metadataError) {
          console.warn('Metadata update failed:', metadataError);
        }
      }

      // Update auth metadata if not in development mode
      try {
        if (!isDevelopmentMode) {
          const { error: authError } = await supabase.auth.updateUser({
            data: {
              avatar_url: publicUrl
            }
          });
          
          if (authError) {
            console.warn('Auth metadata update failed:', authError);
          } else {
            console.log('Auth metadata updated successfully');
          }
        } else {
          console.log('🚧 Development mode: Skipping auth metadata update');
        }
      } catch (error) {
        console.warn('Auth metadata update failed:', error);
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
      await authSignOut();
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

  const getProfileCompletionPercentage = () => {
    if (!user) return 0;
    
    let completedFields = 0;
    const totalFields = 5; // avatar, full_name, location, bio, contributions

    // Check avatar
    if (getUserAvatar()) completedFields++;
    
    // Check full name
    if (userProfile?.full_name || user.user_metadata?.full_name) completedFields++;
    
    // Check location
    if (userProfile?.location) completedFields++;
    
    // Check bio
    if (userProfile?.bio) completedFields++;
    
    // Check contributions (at least one review or destination)
    if (getTotalContributions() > 0) completedFields++;

    // Debug logging
    console.log('Profile completion check:', {
      avatar: !!getUserAvatar(),
      fullName: !!(userProfile?.full_name || user.user_metadata?.full_name),
      location: !!userProfile?.location,
      bio: !!userProfile?.bio,
      contributions: getTotalContributions() > 0,
      completedFields,
      totalFields
    });

    return Math.round((completedFields / totalFields) * 100);
  };

  const handleReviewSubmitted = () => {
    // Reload user data to show the new review immediately
    loadUserData();
  };

  const tabs = [
    { id: 'activity', label: 'Activity feed', icon: MessageSquare },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'reviews', label: 'My Reviews', icon: Star },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle }
  ];

  // Show loading while auth is loading (with timeout fallback)
  if (authLoading && !authTimeout) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading your profile...</h2>
            <p className="text-gray-600">Please wait while we verify your authentication</p>
            {authTimeout && (
              <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
                Taking longer than expected. If this continues, please refresh the page.
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-display text-gray-900 mb-4">Please sign in to access your profile</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Email Verification Banner */}
      {currentUser && !currentUser.email_confirmed_at && (
        <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">
                    Please verify your email address
                  </p>
                  <p className="text-sm text-yellow-700">
                    Check your inbox for a verification link to unlock all features.
                  </p>
                </div>
              </div>
              <Link 
                to="/account-settings"
                className="text-sm font-medium text-yellow-600 hover:text-yellow-700 underline"
              >
                Resend verification
              </Link>
            </div>
          </div>
        </div>
      )}
      
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
                      <h2 className="text-xl font-display text-gray-900">
                        {userProfile?.full_name || user.user_metadata?.full_name || 'Solo Traveler'}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        @{userProfile?.username || user.user_metadata?.username || user.email?.split('@')[0]}
                      </p>
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

                {/* Profile Completion Progress */}
                <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                  <div className="mb-2">
                    <h4 className="text-sm font-medium text-red-700 mb-1">Your wings aren't fully open yet to fly.</h4>
                    <span className="text-sm font-bold text-red-600">{getProfileCompletionPercentage()}% completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${getProfileCompletionPercentage()}%` }}
                    />
                  </div>
                  
                  {/* Missing Requirements */}
                  {getProfileCompletionPercentage() < 100 ? (
                    <div className="mb-3 text-xs text-gray-600">
                      <p className="font-medium mb-1">To complete your profile:</p>
                      <ul className="space-y-1">
                        {!getUserAvatar() && <li>• Add a profile picture</li>}
                        {!(userProfile?.full_name || user.user_metadata?.full_name) && <li>• Add your full name</li>}
                        {!userProfile?.location && <li>• Add your location</li>}
                        {!userProfile?.bio && <li>• Add a bio</li>}
                        {getTotalContributions() === 0 && <li>• Write a safety review or add a destination</li>}
                      </ul>
                    </div>
                  ) : (
                    <div className="mb-3 text-xs text-green-600">
                      <p className="font-medium">🎉 Your profile is complete!</p>
                    </div>
                  )}
                  
                  <Link 
                    to="/account-settings"
                    className="inline-flex items-center space-x-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-300"
                  >
                    <span>Complete your profile to fly free.</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-display text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowReviewModal(true)}
                    className="w-full flex items-center space-x-3 p-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors duration-300 border border-primary-200"
                  >
                    <Feather className="h-5 w-5" />
                    <span className="font-medium">Write Safety Review</span>
                  </button>
                  <Link 
                    to="/add-destination"
                    className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <MapPin className="h-5 w-5" />
                    <span className="font-medium">Add Destination</span>
                  </Link>
                  <button 
                    onClick={() => setShowDMModal(true)}
                    className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-medium">Messages</span>
                  </button>
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
              
              {/* Tab Navigation */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center justify-between px-6">
                  <div className="flex space-x-2 flex-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 whitespace-nowrap relative flex-1 justify-center ${
                          activeTab === tab.id
                            ? 'border-primary-400 text-primary-400'
                            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                        }`}
                      >
                        <tab.icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                        {tab.id === 'alerts' && unreadAlertsCount > 0 && (
                          <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold leading-none">
                            {unreadAlertsCount > 9 ? '9+' : unreadAlertsCount}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Chirp Button */}
                  <button 
                    onClick={() => setShowChirpModal(true)}
                    className="px-8 py-2 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Chirp</span>
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
                  ) : userChirps.length > 0 ? (
                    userChirps.map((chirp, index) => (
                      <ChirpCard 
                        key={chirp.id} 
                        chirp={chirp} 
                        onChirpDeleted={loadUserChirps}
                        onChirpEdited={loadUserChirps}
                      />
                    ))
                  ) : (
                    <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center">
                      <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-display text-gray-900 mb-2">Share Your Safety Experience</h3>
                      <p className="text-gray-600 mb-6">Help other solo female travelers by sharing your safety insights and experiences.</p>
                      <div className="flex justify-center">
                      <button 
                          onClick={() => setShowChirpModal(true)}
                          className="px-6 py-3 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300 flex items-center space-x-2"
                      >
                          <Plus className="h-5 w-5" />
                          <span>Chirp</span>
                      </button>
                      </div>
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
                            
                            <h4 className="font-display text-gray-900 mb-2">
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
                              <button 
                                onClick={() => handleHelpfulClick(post.id)}
                                className={`flex items-center space-x-2 transition-colors duration-300 ${
                                  helpfulVotes[post.id] 
                                    ? 'text-primary-500 font-semibold' 
                                    : 'hover:text-primary-400'
                                }`}
                              >
                                <ThumbsUp className={`h-4 w-4 ${helpfulVotes[post.id] ? 'fill-current' : ''}`} />
                                <span>Helpful ({post.helpful_count})</span>
                              </button>
                              <button 
                                onClick={() => handleCommentClick(post)}
                                className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300"
                              >
                                <MessageSquare className="h-4 w-4" />
                                <span>Comment</span>
                              </button>
                              <button 
                                onClick={() => handleSaveClick(post.id)}
                                className={`flex items-center space-x-2 transition-colors duration-300 ${
                                  savedPosts[post.id] 
                                    ? 'text-primary-500 font-semibold' 
                                    : 'hover:text-primary-400'
                                }`}
                              >
                                <Bookmark className={`h-4 w-4 ${savedPosts[post.id] ? 'fill-current' : ''}`} />
                                <span>{savedPosts[post.id] ? 'Saved' : 'Save'}</span>
                              </button>
                              <button 
                                onClick={() => handleShareClick(post)}
                                className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300"
                              >
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
                  {hasMorePosts && (
                    <div className="text-center">
                      <button 
                        onClick={handleLoadMorePosts}
                        disabled={loadingMore}
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                      >
                        {loadingMore ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                            <span>Loading...</span>
                          </>
                        ) : (
                          <span>Load More Posts</span>
                        )}
                      </button>
                    </div>
                  )}
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
                                            <h3 className="font-display text-gray-900 mb-1">
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
                      <h3 className="text-lg font-display text-gray-900 mb-2">No Safety Reviews Yet</h3>
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

              {/* Alerts Tab */}
              {activeTab === 'alerts' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-display text-gray-900">Safety Alerts & Notifications</h3>
                      {unreadAlertsCount > 0 && (
                        <button
                          onClick={markAllAlertsAsRead}
                          className="text-sm text-primary-400 hover:text-primary-500 font-medium transition-colors duration-300"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>
                    
                    {alerts.length > 0 ? (
                      <div className="space-y-4">
                        {alerts.map((alert) => (
                          <div 
                            key={alert.id}
                            className={`p-4 rounded-lg border transition-all duration-300 ${
                              alert.is_read 
                                ? 'bg-gray-50 border-gray-200' 
                                : 'bg-blue-50 border-blue-200'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 mt-0.5">
                                {getAlertIcon(alert.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className={`text-sm font-medium ${
                                    alert.is_read ? 'text-gray-700' : 'text-gray-900'
                                  }`}>
                                    {alert.title}
                                  </h4>
                                  <div className="flex items-center space-x-2">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(alert.severity)}`}>
                                      {alert.severity.toUpperCase()}
                                    </span>
                                    {!alert.is_read && (
                                      <button
                                        onClick={() => markAlertAsRead(alert.id)}
                                        className="text-xs text-primary-400 hover:text-primary-500 font-medium"
                                      >
                                        Mark as read
                                      </button>
                                    )}
                                  </div>
                                </div>
                                <p className={`text-sm mb-2 ${
                                  alert.is_read ? 'text-gray-600' : 'text-gray-700'
                                }`}>
                                  {alert.message}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>{alert.location}</span>
                                  <span>{formatDate(alert.created_at)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-display text-gray-900 mb-2">No Alerts Yet</h3>
                        <p className="text-gray-600">
                          You'll receive safety alerts, weather warnings, and important updates here.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contributions Modal */}
      {showContributionsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowContributionsModal(false);
            }
          }}
        >
          <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl animate-fade-in">
            <button
              onClick={() => setShowContributionsModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
                              <h2 className="text-2xl font-display text-gray-900 mb-6">Your Contributions</h2>
              
              <div className="space-y-6">
                {/* Reviews Section */}
                <div>
                  <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Safety Reviews ({userReviews.length})
                  </h3>
                  {userReviews.length > 0 ? (
                    <div className="space-y-3">
                      {userReviews.map((review, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900">
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
                  <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    Destination Submissions ({userDestinations.length})
                  </h3>
                  {userDestinations.length > 0 ? (
                    <div className="space-y-3">
                      {userDestinations.map((destination, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900">
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

      {/* Chirp Modal */}
      <ChirpModal 
        isOpen={showChirpModal}
        onClose={() => setShowChirpModal(false)}
        onChirpPosted={() => {
          console.log('onChirpPosted callback triggered in Profile');
          loadUserChirps();
          console.log('loadUserChirps called after chirp posted');
        }}
      />

      {/* DM Modal */}
      <DMModal
        isOpen={showDMModal}
        onClose={() => setShowDMModal(false)}
      />

      {/* Post Comment Modal */}
      <PostCommentModal
        isOpen={showCommentModal}
        onClose={() => setShowCommentModal(false)}
        post={selectedPost}
        onCommentAdded={() => {
          // Optionally refresh posts or update comment counts
          console.log('Comment added to post');
        }}
      />

      <Footer />
    </div>
  );
};

export default Profile;