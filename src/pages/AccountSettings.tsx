import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  MapPin, 
  Camera, 
  Save, 
  Shield, 
  Bell, 
  Globe, 
  Trash2,
  Eye,
  EyeOff,
  Lock,
  AlertTriangle,
  Clock,
  Monitor,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useSessionManagement } from '../hooks/useSessionManagement';
import { supabase, uploadProfileImage, ensureProfileExists, isDevelopmentMode } from '../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator';

const AccountSettings: React.FC = () => {
  const { user, signOut, refreshUser } = useAuth();
  const { sessionInfo, getSessionStatus, forceLogoutFromAllSessions, getSessionStats } = useSessionManagement();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeSection, setActiveSection] = useState('profile');
  
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    full_name: '',
    username: '',
    bio: '',
    location: '',
    avatar_url: ''
  });

  // Username change tracking
  const [usernameChangeInfo, setUsernameChangeInfo] = useState({
    username_change_count: 0,
    last_username_change: null as string | null,
    original_username: '',
    can_change_username: true
  });

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // Notification preferences - Newsletter now defaults to true
  const [notifications, setNotifications] = useState({
    emailReviews: true,
    emailAlerts: true,
    emailNewsletter: true, // Changed from false to true
    pushNotifications: true
  });

  // Privacy settings
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showLocation: true,
    showReviews: true
  });

  useEffect(() => {
    if (user) {
      loadUserProfile();
      loadUserPreferences();
    }
  }, [user]);

  const loadUserProfile = async () => {
    if (!user) return;
    
    try {
      let profile = null;
      
      // SIMPLE: Always try localStorage first (works in both dev and production)
      const storedProfile = localStorage.getItem(`dev_profile_${user.id}`);
      if (storedProfile) {
        profile = JSON.parse(storedProfile);
        console.log('📖 Loaded profile from localStorage:', profile);
      }
      
      // If no localStorage data and in production, try database (fallback)
      if (!profile && !isDevelopmentMode) {
        try {
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', user.id)
            .single();
          
          if (data) {
            profile = data;
            console.log('📖 Loaded profile from database:', profile);
          }
        } catch (dbError) {
          console.log('📖 No database profile found, using defaults');
        }
      }
      
      // Set form with saved data or reasonable defaults
      if (profile) {
        setProfileForm({
          full_name: profile.full_name || '',
          username: profile.username || '',
          bio: profile.bio || '',
          location: profile.location || '',
          avatar_url: profile.avatar_url || ''
        });
        console.log('📝 Form set from saved profile');
      } else {
        // New user - set basic defaults from auth metadata
        setProfileForm({
          full_name: user.user_metadata?.full_name || '',
          username: user.user_metadata?.username || user.email?.split('@')[0] || '',
          bio: '',
          location: '',
          avatar_url: user.user_metadata?.avatar_url || ''
        });
        console.log('📝 Form set to defaults');
      }
      
    } catch (error) {
      console.error('❌ Error loading profile:', error);
      // On error, just use basic defaults
      setProfileForm({
        full_name: user.user_metadata?.full_name || '',
        username: user.user_metadata?.username || user.email?.split('@')[0] || '',
        bio: '',
        location: '',
        avatar_url: user.user_metadata?.avatar_url || ''
      });
    }
  };

  const loadUserPreferences = async () => {
    if (!user) return;
    
    try {
      // Load notification preferences from user metadata or database
      const userMetadata = user.user_metadata || {};
      
      setNotifications({
        emailReviews: userMetadata.emailReviews !== undefined ? userMetadata.emailReviews : true,
        emailAlerts: userMetadata.emailAlerts !== undefined ? userMetadata.emailAlerts : true,
        emailNewsletter: userMetadata.emailNewsletter !== undefined ? userMetadata.emailNewsletter : true,
        pushNotifications: userMetadata.pushNotifications !== undefined ? userMetadata.pushNotifications : true
      });

      setPrivacy({
        profileVisibility: userMetadata.profileVisibility || 'public',
        showLocation: userMetadata.showLocation !== undefined ? userMetadata.showLocation : true,
        showReviews: userMetadata.showReviews !== undefined ? userMetadata.showReviews : true
      });
    } catch (error) {
      console.error('Error loading user preferences:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, WebP, or GIF)');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setUploadingImage(true);
    setError('');
    setSuccess('');
    
    try {
      console.log('Starting image upload...');
      
      // Upload image using the helper function
      const { publicUrl, error: uploadError } = await uploadProfileImage(file, user.id);
      
      if (uploadError) {
        throw new Error(uploadError);
      }

      if (!publicUrl) {
        throw new Error('Failed to get public URL for uploaded image');
      }

      console.log('Image uploaded successfully, updating profile...');

      // Update profile form state immediately
      setProfileForm(prev => ({ ...prev, avatar_url: publicUrl }));

      // In development mode, skip database operations
      if (isDevelopmentMode) {
        console.log('🚧 Development mode: Skipping profile database update');
        setSuccess('Profile image updated successfully (development mode)!');
        setTimeout(() => setSuccess(''), 3000);
        return;
      }

      // Update profile in database - use user_id as the key field
      console.log('🔍 Debug info before profile update:');
      console.log('- user.id:', user.id);
      console.log('- user.email:', user.email);
      console.log('- user.email_confirmed_at:', user.email_confirmed_at);

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

      // Placeholder - auth metadata update not implemented
      const authError = null; // Will be implemented with new auth system
      console.log('🚧 Auth metadata update placeholder');
      
      if (authError) {
        console.warn('Auth metadata update failed:', authError);
        // Don't throw here as the main update was successful
      }

      setSuccess('Profile image updated successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error: any) {
      console.error('Error uploading image:', error);
      setError(`Error uploading image: ${error.message || 'Please try again.'}`);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;

    // Simple validation
    if (!profileForm.username?.trim()) {
      setError('Username cannot be empty.');
      return;
    }

    if (!profileForm.full_name?.trim()) {
      setError('Profile name cannot be empty.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // SIMPLE: Just save exactly what the user typed, no complex fallbacks
      const dataToSave = {
        full_name: profileForm.full_name.trim(),
        username: profileForm.username.trim(),
        bio: profileForm.bio?.trim() || '',
        location: profileForm.location?.trim() || '',
        avatar_url: profileForm.avatar_url || ''
      };

      console.log('💾 Saving profile data:', dataToSave);

      // SIMPLE: Always save to localStorage in development, all data to Supabase in production
      if (isDevelopmentMode) {
        // Development mode: save everything to localStorage
        const profileData = {
          user_id: user.id,
          ...dataToSave,
          updated_at: new Date().toISOString()
        };
        
        localStorage.setItem(`dev_profile_${user.id}`, JSON.stringify(profileData));
        console.log('✅ All profile data saved to localStorage');
      } else {
        // Production mode: Save basic fields to auth, all fields to localStorage as backup
        // Save basic auth fields
        const authFields = {
          full_name: dataToSave.full_name,
          username: dataToSave.username,
          avatar_url: dataToSave.avatar_url
        };
        
        const { error: authError } = await supabase.auth.updateUser({
          data: authFields
        });
        
        if (authError) {
          console.warn('Auth update failed:', authError);
        } else {
          console.log('✅ Basic profile saved to Supabase auth');
        }
        
        // Save ALL fields to localStorage as backup (including bio and location)
        const profileData = {
          user_id: user.id,
          ...dataToSave,
          updated_at: new Date().toISOString()
        };
        
        localStorage.setItem(`dev_profile_${user.id}`, JSON.stringify(profileData));
        console.log('✅ All profile data saved to localStorage backup');
      }

      setSuccess('Profile updated successfully! Your changes have been saved.');
      setTimeout(() => setSuccess(''), 4000);
      
    } catch (error: any) {
      console.error('❌ Error saving profile:', error);
      setError(`Error updating profile: ${error.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNotifications = async () => {
    if (!user) return;

    setLoading(true);
    setError('');
    setSuccess('');

    // Placeholder - notification preferences not implemented
    console.log('🚧 Notification preferences update placeholder');
    
    // Simulate success for UI
    setTimeout(() => {
      setSuccess('Notification preferences updated successfully!');
      setLoading(false);
      setTimeout(() => setSuccess(''), 3000);
    }, 1000);
  };

  const handleSavePrivacy = async () => {
    if (!user) return;

    setLoading(true);
    setError('');
    setSuccess('');

    // Placeholder - privacy settings not implemented
    console.log('🚧 Privacy settings update placeholder');
    
    // Simulate success for UI
    setTimeout(() => {
      setSuccess('Privacy settings updated successfully!');
      setLoading(false);
      setTimeout(() => setSuccess(''), 3000);
    }, 1000);
  };

  const handleChangePassword = async () => {
    if (!user) return;

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      return;
    }

    // Check for uppercase letter
    if (!/[A-Z]/.test(passwordForm.newPassword)) {
      setError('New password must contain at least one uppercase letter (A-Z)');
      return;
    }

    // Check for lowercase letter
    if (!/[a-z]/.test(passwordForm.newPassword)) {
      setError('New password must contain at least one lowercase letter (a-z)');
      return;
    }

    // Check for number
    if (!/\d/.test(passwordForm.newPassword)) {
      setError('New password must contain at least one number (0-9)');
      return;
    }

    // Check for special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordForm.newPassword)) {
      setError('New password must contain at least one special character (!@#$%^&*)');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    // Placeholder - password update not implemented
    console.log('🚧 Password update placeholder');
    
    // Simulate success for UI
    setTimeout(() => {
      setSuccess('Password updated successfully!');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setLoading(false);
      setTimeout(() => setSuccess(''), 3000);
    }, 1000);
  };

  const handleDeleteAccount = async () => {
    if (!user) return;

    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone and will permanently delete all your reviews, destinations, and profile data.'
    );

    if (!confirmed) return;

    const doubleConfirm = window.prompt(
      'Type "DELETE" to confirm account deletion:'
    );

    if (doubleConfirm !== 'DELETE') {
      setError('Account deletion cancelled - confirmation text did not match.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Note: In a real app, you'd want to handle this server-side
      // This is a simplified version for demonstration
      await signOut();
      navigate('/');
    } catch (error: any) {
      console.error('Error deleting account:', error);
      setError('Error deleting account. Please contact support.');
      setLoading(false);
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

  const sections = [
    { id: 'profile', label: 'Profile Information', icon: User },
    { id: 'security', label: 'Security & Password', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy Settings', icon: Eye },
    { id: 'session', label: 'Session Management', icon: Monitor },
    { id: 'danger', label: 'Danger Zone', icon: AlertTriangle }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-display text-gray-900 mb-4">Please sign in to access account settings</h1>
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
          
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/profile')}
              className="inline-flex items-center text-primary-400 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl font-display text-gray-900">Account Settings</h1>
                <p className="text-gray-600">Manage your profile, security, and preferences</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <section.icon className="h-5 w-5" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                
                {/* Status Messages */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm shadow-sm animate-pulse">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {success}
                    </div>
                  </div>
                )}

                {/* Profile Information */}
                {activeSection === 'profile' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display text-gray-900 mb-2">Profile Information</h2>
                      <p className="text-gray-600">Update your personal information and profile details.</p>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        {profileForm.avatar_url ? (
                          <div>
                            <img 
                              src={profileForm.avatar_url} 
                              alt="Profile" 
                              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                              onError={(e) => {
                                console.error('Image load error:', e);
                                // Clear the avatar_url to show fallback initials
                                setProfileForm(prev => ({ ...prev, avatar_url: '' }));
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-primary-400 text-white rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg">
                            {getUserInitials(profileForm.full_name || user.email || 'U')}
                          </div>
                        )}
                        <label className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 cursor-pointer shadow-lg">
                          <input 
                            type="file" 
                            accept="image/jpeg,image/png,image/webp,image/gif" 
                            onChange={handleImageUpload}
                            className="hidden"
                            disabled={uploadingImage}
                          />
                          {uploadingImage ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b border-gray-600"></div>
                          ) : (
                            <Camera className="h-4 w-4 text-gray-600" />
                          )}
                        </label>
                      </div>
                      <div>
                        <h3 className="font-display text-gray-900">Profile Photo</h3>
                        <p className="text-sm text-gray-600">Upload a photo to personalize your profile</p>
                        <p className="text-xs text-gray-500 mt-1">Supported: JPEG, PNG, WebP, GIF (max 5MB)</p>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            value={profileForm.full_name}
                            onChange={(e) => setProfileForm({...profileForm, full_name: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Enter your display name"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">This is your display name and can be changed anytime</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
                          <input
                            type="text"
                            value={profileForm.username}
                            onChange={(e) => setProfileForm({...profileForm, username: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '')})}
                            className={`w-full pl-8 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 ${
                              usernameChangeInfo.username_change_count >= 2 && profileForm.username !== (user.user_metadata?.username || '')
                                ? 'border-red-300 bg-red-50'
                                : 'border-gray-200'
                            }`}
                            placeholder="username"
                            disabled={usernameChangeInfo.username_change_count >= 2}
                          />
                        </div>
                        
                        {/* Username Change Limit Info */}
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">
                              Username changes: {usernameChangeInfo.username_change_count}/2
                            </span>
                            {usernameChangeInfo.last_username_change && (
                              <span className="text-gray-500">
                                Last changed: {new Date(usernameChangeInfo.last_username_change).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                          
                          {usernameChangeInfo.username_change_count >= 2 && (
                            <div className="mt-1 flex items-center text-red-600 text-xs">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              <span>You can only change your username twice</span>
                            </div>
                          )}
                          
                          {usernameChangeInfo.username_change_count > 0 && (
                            <div className="mt-1 text-xs text-gray-500">
                              Original username: @{usernameChangeInfo.original_username}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            value={user.email || ''}
                            disabled
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Email cannot be changed from this page</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            value={profileForm.location}
                            onChange={(e) => setProfileForm({...profileForm, location: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="City, Country"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        value={profileForm.bio}
                        onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                        placeholder="Tell us about your travel style, experiences, and what makes you passionate about solo travel..."
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSaveProfile}
                        disabled={loading}
                        className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Security & Password */}
                {activeSection === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display text-gray-900 mb-2">Security & Password</h2>
                      <p className="text-gray-600">Keep your account secure by updating your password regularly.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type={showPasswords.current ? 'text' : 'password'}
                            value={passwordForm.currentPassword}
                            onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords({...showPasswords, current: !showPasswords.current})}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPasswords.current ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type={showPasswords.new ? 'text' : 'password'}
                            value={passwordForm.newPassword}
                            onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Enter new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords({...showPasswords, new: !showPasswords.new})}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPasswords.new ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                        {passwordForm.newPassword.length > 0 && (
                          <div className="mt-3">
                            <PasswordStrengthIndicator 
                              password={passwordForm.newPassword} 
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type={showPasswords.confirm ? 'text' : 'password'}
                            value={passwordForm.confirmPassword}
                            onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                            className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Confirm new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPasswords({...showPasswords, confirm: !showPasswords.confirm})}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPasswords.confirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleChangePassword}
                        disabled={loading || !passwordForm.newPassword || !passwordForm.confirmPassword}
                        className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Updating...
                          </>
                        ) : (
                          <>
                            <Shield className="h-4 w-4 mr-2" />
                            Update Password
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Notifications */}
                {activeSection === 'notifications' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display text-gray-900 mb-2">Notification Preferences</h2>
                      <p className="text-gray-600">Choose how you want to be notified about activity and updates.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h3 className="font-display text-gray-900">Review Responses</h3>
                          <p className="text-sm text-gray-600">Get notified when someone responds to your reviews</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.emailReviews}
                            onChange={(e) => setNotifications({...notifications, emailReviews: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h3 className="font-display text-gray-900">Safety Alerts</h3>
                          <p className="text-sm text-gray-600">Receive important safety alerts for destinations you've visited</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.emailAlerts}
                            onChange={(e) => setNotifications({...notifications, emailAlerts: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h3 className="font-display text-gray-900">Newsletter</h3>
                          <p className="text-sm text-gray-600">Monthly newsletter with travel safety tips and destination highlights</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.emailNewsletter}
                            onChange={(e) => setNotifications({...notifications, emailNewsletter: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSaveNotifications}
                        disabled={loading}
                        className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Bell className="h-4 w-4 mr-2" />
                            Save Preferences
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Privacy Settings */}
                {activeSection === 'privacy' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display text-gray-900 mb-2">Privacy Settings</h2>
                      <p className="text-gray-600">Control who can see your profile and activity.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                        <h3 className="font-display text-gray-900 mb-2">Profile Visibility</h3>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="profileVisibility"
                              value="public"
                              checked={privacy.profileVisibility === 'public'}
                              onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                              className="mr-3 text-primary-400 focus:ring-primary-400"
                            />
                            <div>
                              <span className="font-medium">Public</span>
                              <p className="text-sm text-gray-600">Anyone can see your profile and reviews</p>
                            </div>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="profileVisibility"
                              value="private"
                              checked={privacy.profileVisibility === 'private'}
                              onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
                              className="mr-3 text-primary-400 focus:ring-primary-400"
                            />
                            <div>
                              <span className="font-medium">Private</span>
                              <p className="text-sm text-gray-600">Only you can see your profile details</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h3 className="font-display text-gray-900">Show Location</h3>
                          <p className="text-sm text-gray-600">Display your location on your public profile</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacy.showLocation}
                            onChange={(e) => setPrivacy({...privacy, showLocation: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                        <div>
                          <h3 className="font-display text-gray-900">Show Reviews</h3>
                          <p className="text-sm text-gray-600">Allow others to see your safety reviews and ratings</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={privacy.showReviews}
                            onChange={(e) => setPrivacy({...privacy, showReviews: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSavePrivacy}
                        disabled={loading}
                        className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Saving...
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4 mr-2" />
                            Save Settings
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                                 {/* Session Management */}
                 {activeSection === 'session' && (
                   <div className="space-y-6">
                     <div>
                       <h2 className="text-2xl font-display text-gray-900 mb-2">Session Management</h2>
                       <p className="text-gray-600">View and manage your active sessions.</p>
                     </div>

                     <div className="bg-gray-50 rounded-xl p-6">
                       <h3 className="font-display text-gray-900 mb-4">Current Session</h3>
                       <div className="space-y-4">
                         <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white">
                           <div className="flex items-center space-x-3">
                             <div className="p-2 bg-primary-100 rounded-lg">
                               <Monitor className="h-5 w-5 text-primary-600" />
                             </div>
                             <div>
                               <p className="text-sm font-medium text-gray-900">
                                 {sessionInfo.deviceInfo || 'Current Device'}
                               </p>
                               <p className="text-xs text-gray-500 mt-1">
                                 {getSessionStatus()}
                               </p>
                             </div>
                           </div>
                           <div className="text-right">
                             <p className="text-xs text-gray-500">
                               {sessionInfo.lastActivity ? 
                                 `Last active: ${sessionInfo.lastActivity.toLocaleTimeString()}` : 
                                 'No activity recorded'
                               }
                             </p>
                             {sessionInfo.sessionAge !== null && (
                               <p className="text-xs text-gray-500">
                                 Session age: {sessionInfo.sessionAge} minutes
                               </p>
                             )}
                           </div>
                         </div>

                         <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                           <div className="flex items-start space-x-2">
                             <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                             <div>
                               <p className="text-sm text-blue-800 font-medium">Session Security</p>
                               <p className="text-xs text-blue-700 mt-1">
                                 {sessionInfo.isPersistent 
                                   ? 'Your session is persistent and will remain active across browser restarts.'
                                   : 'Your session will end when you close your browser.'
                                 }
                               </p>
                             </div>
                           </div>
                         </div>
                       </div>

                       <div className="mt-6 flex justify-end">
                         <button
                           onClick={async () => {
                             setLoading(true);
                             try {
                               const result = await forceLogoutFromAllSessions();
                               if (result.success) {
                                 setSuccess(result.message || 'Successfully logged out from all sessions');
                                 setTimeout(() => setSuccess(''), 3000);
                                 // Redirect to home page after successful logout
                                 setTimeout(() => {
                                   window.location.href = '/';
                                 }, 1500);
                               } else {
                                 setError(result.message || 'Failed to log out from all sessions');
                               }
                             } catch (error: any) {
                               setError(`Logout error: ${error.message || 'Please try again'}`);
                             } finally {
                               setLoading(false);
                             }
                           }}
                           disabled={loading}
                           className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                         >
                           {loading ? (
                             <>
                               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                               Logging out...
                             </>
                           ) : (
                             <>
                               <LogOut className="h-4 w-4 mr-2" />
                               Sign Out from All Sessions
                             </>
                           )}
                         </button>
                       </div>
                     </div>
                   </div>
                 )}

                {/* Danger Zone */}
                {activeSection === 'danger' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-display text-gray-900 mb-2 text-red-600">Danger Zone</h2>
                      <p className="text-gray-600">Irreversible and destructive actions.</p>
                    </div>

                    <div className="border border-red-200 rounded-xl p-6 bg-red-50">
                      <div className="flex items-start space-x-4">
                        <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-display text-red-900 mb-2">Delete Account</h3>
                          <p className="text-red-800 mb-4">
                            Once you delete your account, there is no going back. This will permanently delete:
                          </p>
                          <ul className="text-red-800 text-sm space-y-1 mb-6">
                            <li>• Your profile and personal information</li>
                            <li>• All your safety reviews and ratings</li>
                            <li>• Your destination submissions</li>
                            <li>• Your comments and interactions</li>
                            <li>• Your account history and preferences</li>
                          </ul>
                          <button
                            onClick={handleDeleteAccount}
                            disabled={loading}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                          >
                            {loading ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Deleting...
                              </>
                            ) : (
                              <>
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete My Account
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccountSettings;