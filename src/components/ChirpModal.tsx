import React, { useState, useRef } from 'react';
import { X, Image, Send, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, uploadChirpImages } from '../lib/supabase';

interface ChirpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChirpPosted: () => void;
}

const ChirpModal: React.FC<ChirpModalProps> = ({ isOpen, onClose, onChirpPosted }) => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isPosting, setIsPosting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024 // 5MB limit
    );

    console.log('Image upload:', {
      totalFiles: files.length,
      validFiles: validFiles.length,
      currentImages: images.length,
      willExceedLimit: validFiles.length + images.length > 4
    });

    if (validFiles.length + images.length > 4) {
      alert('You can upload up to 4 images');
      return;
    }

    setImages(prev => [...prev, ...validFiles]);

    // Create preview URLs
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        console.log('Image preview created:', imageUrl.substring(0, 50) + '...');
        setImageUrls(prev => [...prev, imageUrl]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    if (!content.trim() && images.length === 0) {
      alert('Please add some content or images to your chirp');
      return;
    }

    if (!user) {
      alert('Please sign in to post');
      return;
    }

    setIsPosting(true);

    try {
      let finalImageUrls = imageUrls;

      // If there are images to upload, upload them to Supabase storage
      if (images.length > 0) {
        console.log('Uploading images to Supabase storage...');
        const { publicUrls, error: uploadError } = await uploadChirpImages(images, user.id);
        
        if (uploadError) {
          console.error('Image upload failed:', uploadError);
          // Fall back to data URLs if upload fails
          console.log('Falling back to data URLs for images');
          finalImageUrls = imageUrls;
        } else {
          console.log('Images uploaded successfully to Supabase:', publicUrls);
          finalImageUrls = publicUrls;
        }
      }

      // Create chirp data with images
      const chirpData = {
        user_id: user.id,
        content: content.trim(),
        images: finalImageUrls, // Use uploaded URLs or fallback to data URLs
        likes_count: 0,
        comments_count: 0,
        rechirps_count: 0,
        created_at: new Date().toISOString()
      };

      // SIMPLE: Always save to localStorage (works everywhere)
      // Get the most up-to-date profile data
      const getUserData = () => {
        try {
          const storedProfile = localStorage.getItem(`dev_profile_${user.id}`);
          if (storedProfile) {
            const profile = JSON.parse(storedProfile);
            return {
              id: user.id,
              full_name: profile.full_name || user.user_metadata?.full_name || user.email?.split('@')[0],
              avatar_url: profile.avatar_url || user.user_metadata?.avatar_url,
              username: profile.username || user.user_metadata?.username,
              email: user.email
            };
          }
        } catch (error) {
          console.error('Error loading profile for new chirp:', error);
        }
        
        // Fallback to auth metadata
        return {
          id: user.id,
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
          avatar_url: user.user_metadata?.avatar_url,
          username: user.user_metadata?.username,
          email: user.email
        };
      };

      const chirpToSave = {
        id: Date.now().toString(),
        ...chirpData,
        user: getUserData()
      };
      
      // Get existing chirps and add new one to the top
      const existingChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      existingChirps.unshift(chirpToSave);
      localStorage.setItem('localChirps', JSON.stringify(existingChirps));
      
      console.log('✅ Chirp saved to localStorage:', chirpToSave);
      console.log('✅ Total chirps now:', existingChirps.length);

      // Reset form
      setContent('');
      setImages([]);
      setImageUrls([]);
      
      // Ensure the callback is called and the modal is closed
      console.log('✅ Chirp posted successfully, calling callback');
      onChirpPosted();
      onClose();
      
      // Also trigger a custom event for other components to listen to
      window.dispatchEvent(new CustomEvent('chirpPosted', { 
        detail: { 
          chirpId: Date.now().toString(),
          userId: user.id 
        }
      }));
    } catch (error) {
      console.error('Error posting chirp:', error);
      alert('Failed to post chirp. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{backgroundColor: 'rgba(40, 40, 40, 0.5)'}}
      onClick={handleBackdropClick}
    >
      <div 
        className="w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
        style={{backgroundColor: '#EFEAFF'}}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 bg-gradient-to-r from-primary-50 to-primary-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-display font-normal text-gray-900 mb-2">
              New Chirp
            </h2>
            <p className="text-sm text-gray-600">
              Share your solo travel experiences and safety tips
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Text Input */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening in your travels?"
            className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            maxLength={500}
          />
          
          <div className="flex justify-between items-center mt-2 mb-4">
            <span className="text-sm text-gray-500">
              {content.length}/500 characters
            </span>
          </div>

          {/* Image Preview */}
          {imageUrls.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {imageUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors duration-300"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={images.length >= 4}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Image className="h-5 w-5" />
                <span className="text-sm">Add Images</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <button
              onClick={handlePost}
              disabled={isPosting || (!content.trim() && images.length === 0)}
              className="flex items-center space-x-2 px-6 py-2 bg-primary-400 text-white rounded-full font-medium hover:bg-primary-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPosting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Posting...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Chirp</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChirpModal; 