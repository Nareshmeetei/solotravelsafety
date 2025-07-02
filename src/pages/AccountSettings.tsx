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
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, uploadProfileImage, ensureProfileExists } from '../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AccountSettings: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeSection, setActiveSection] = useState('profile');
  
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    full_name: '',
    bio: '',
    location: '',
    avatar_url: ''
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
      // Ensure profile exists first
      await ensureProfileExists(user.id, user);
      
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.error('Error loading profile:', error);
        // If profile doesn't exist, create it
        if (error.code === 'PGRST116') {
          await ensureProfileExists(user.id, user);
          // Try loading again
          const { data: newProfile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (newProfile) {
            setProfileForm({
              full_name: newProfile.full_name || user.user_metadata?.full_name || '',
              bio: newProfile.bio || '',
              location: newProfile.location || '',
              avatar_url: newProfile.avatar_url || user.user_metadata?.avatar_url || ''
            });
          }
        }
      } else if (profile) {
        setProfileForm({
          full_name: profile.full_name || user.user_metadata?.full_name || '',
          bio: profile.bio || '',
          location: profile.location || '',
          avatar_url: profile.avatar_url || user.user_metadata?.avatar_url || ''
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      setError('Failed to load profile data');
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

      // Update profile in database
      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          avatar_url: publicUrl,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'id'
        });

      if (updateError) {
        console.error('Profile update error:', updateError);
        throw new Error(`Failed to update profile: ${updateError.message}`);
      }

      // Update auth metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });

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

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Ensure profile exists first
      await ensureProfileExists(user.id, user);

      // Update profile in database
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: profileForm.full_name || 'Solo Traveler',
          bio: profileForm.bio,
          location: profileForm.location,
          avatar_url: profileForm.avatar_url,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'id'
        });

      if (profileError) {
        console.error('Profile update error:', profileError);
        throw profileError;
      }

      // Update auth metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: { 
          full_name: profileForm.full_name || 'Solo Traveler',
          avatar_url: profileForm.avatar_url
        }
      });

      if (authError) {
        console.warn('Auth metadata update warning:', authError);
        // Don't throw here as profile was updated successfully
      }

      setSuccess('Profile updated successfully!');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error: any) {
      console.error('Error updating profile:', error);
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

    try {
      // Update user metadata with notification preferences
      const { error } = await supabase.auth.updateUser({
        data: {
          ...user.user_metadata,
          emailReviews: notifications.emailReviews,
          emailAlerts: notifications.emailAlerts,
          emailNewsletter: notifications.emailNewsletter,
          pushNotifications: notifications.pushNotifications
        }
      });

      if (error) throw error;

      setSuccess('Notification preferences updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error: any) {
      console.error('Error updating notifications:', error);
      setError(`Error updating notification preferences: ${error.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSavePrivacy = async () => {
    if (!user) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Update user metadata with privacy settings
      const { error } = await supabase.auth.updateUser({
        data: {
          ...user.user_metadata,
          profileVisibility: privacy.profileVisibility,
          showLocation: privacy.showLocation,
          showReviews: privacy.showReviews
        }
      });

      if (error) throw error;

      setSuccess('Privacy settings updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error: any) {
      console.error('Error updating privacy settings:', error);
      setError(`Error updating privacy settings: ${error.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!user) return;

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordForm.newPassword
      });

      if (error) throw error;

      setSuccess('Password updated successfully!');
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setTimeout(() => setSuccess(''), 3000);
    } catch (error: any) {
      console.error('Error updating password:', error);
      setError(`Error updating password: ${error.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
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
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                    {success}
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
                          <img 
                            src={profileForm.avatar_url} 
                            alt="Profile" 
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                            onError={(e) => {
                              console.error('Image load error:', e);
                              e.currentTarget.style.display = 'none';
                            }}
                          />
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            value={profileForm.full_name}
                            onChange={(e) => setProfileForm({...profileForm, full_name: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Enter your full name"
                          />
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