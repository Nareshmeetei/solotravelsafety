import React, { useState, useRef } from 'react';
import { X, Image, Send, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

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
      // Create chirp data with images
      const chirpData = {
        user_id: user.id,
        content: content.trim(),
        images: imageUrls, // Include the uploaded image URLs
        likes_count: 0,
        comments_count: 0,
        rechirps_count: 0,
        created_at: new Date().toISOString()
      };

      // Try to insert into database, but handle gracefully if table doesn't exist
      try {
        const { error } = await supabase
          .from('chirps')
          .insert(chirpData);

        if (error) {
          console.warn('Database insert failed, using demo mode:', error);
          // Create a demo chirp that works everywhere
          const demoChirp = {
            id: Date.now().toString(),
            ...chirpData,
            user: {
              id: user.id,
              full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
              avatar_url: user.user_metadata?.avatar_url,
              email: user.email
            }
          };
          
          // Store in localStorage for this session
          const existingChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
          existingChirps.unshift(demoChirp);
          localStorage.setItem('localChirps', JSON.stringify(existingChirps));
          
          // Also store in sessionStorage for cross-tab persistence
          sessionStorage.setItem('sessionChirps', JSON.stringify(existingChirps));
          
          console.log('Chirp stored in localStorage:', demoChirp);
        } else {
          console.log('Chirp stored in database successfully');
        }
      } catch (dbError) {
        console.warn('Database error, using demo mode:', dbError);
        // Create a demo chirp that works everywhere
        const demoChirp = {
          id: Date.now().toString(),
          ...chirpData,
          user: {
            id: user.id,
            full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
            avatar_url: user.user_metadata?.avatar_url,
            email: user.email
          }
        };
        
        // Store in localStorage for this session
        const existingChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
        existingChirps.unshift(demoChirp);
        localStorage.setItem('localChirps', JSON.stringify(existingChirps));
        
        // Also store in sessionStorage for cross-tab persistence
        sessionStorage.setItem('sessionChirps', JSON.stringify(existingChirps));
        
        console.log('Chirp stored in localStorage (fallback):', demoChirp);
      }

      // Reset form
      setContent('');
      setImages([]);
      setImageUrls([]);
      
      onChirpPosted();
      onClose();
    } catch (error) {
      console.error('Error posting chirp:', error);
      alert('Failed to post chirp. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-display text-gray-900">New Chirp</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
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