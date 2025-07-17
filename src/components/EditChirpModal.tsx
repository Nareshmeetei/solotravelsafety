import React, { useState, useRef, useEffect } from 'react';
import { X, Image, Save, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

interface EditChirpModalProps {
  isOpen: boolean;
  onClose: () => void;
  chirp: {
    id: string;
    content: string;
    images?: string[];
    created_at: string;
    user: {
      id: string;
      full_name?: string;
      avatar_url?: string;
      email?: string;
    };
  };
  onChirpEdited: () => void;
}

const EditChirpModal: React.FC<EditChirpModalProps> = ({ isOpen, onClose, chirp, onChirpEdited }) => {
  const { user } = useAuth();
  const [content, setContent] = useState(chirp.content);
  const [images, setImages] = useState<string[]>(chirp.images || []);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [newImageUrls, setNewImageUrls] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calculate time remaining for editing
  useEffect(() => {
    if (!isOpen) return;

    const updateTimeRemaining = () => {
      const chirpDate = new Date(chirp.created_at);
      const now = new Date();
      const diffMs = (chirpDate.getTime() + 5 * 60 * 60 * 1000) - now.getTime();
      
      if (diffMs <= 0) {
        setTimeRemaining('Edit time expired');
        return;
      }

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      setTimeRemaining(`${hours}h ${minutes}m remaining`);
    };

    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [isOpen, chirp.created_at]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024 // 5MB limit
    );

    if (validFiles.length + newImages.length + images.length > 4) {
      alert('You can upload up to 4 images total');
      return;
    }

    setNewImages(prev => [...prev, ...validFiles]);

    // Create preview URLs for new images
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setNewImageUrls(prev => [...prev, imageUrl]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeExistingImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    setNewImages(prev => prev.filter((_, i) => i !== index));
    setNewImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!content.trim() && images.length === 0 && newImageUrls.length === 0) {
      alert('Please add some content or images to your chirp');
      return;
    }

    if (!user) {
      alert('Please sign in to edit');
      return;
    }

    // Check if still within 5-hour limit
    const chirpDate = new Date(chirp.created_at);
    const now = new Date();
    const diffHours = (now.getTime() - chirpDate.getTime()) / (1000 * 60 * 60);
    
    if (diffHours > 5) {
      alert('Chirps can only be edited within 5 hours of posting.');
      return;
    }

    setIsSaving(true);

    try {
      const updatedChirpData = {
        content: content.trim(),
        images: [...images, ...newImageUrls], // Combine existing and new images
        updated_at: new Date().toISOString()
      };

      // Try to update in database first
      try {
        const { error } = await supabase
          .from('chirps')
          .update(updatedChirpData)
          .eq('id', chirp.id);

        if (error) {
          console.warn('Database update failed, using local storage:', error);
        }
      } catch (dbError) {
        console.warn('Database error, using local storage:', dbError);
      }

      // Update in localStorage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      const updatedLocalChirps = localChirps.map((c: any) => 
        c.id === chirp.id 
          ? { ...c, ...updatedChirpData }
          : c
      );
      localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

      // Update in sessionStorage
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
      const updatedSessionChirps = sessionChirps.map((c: any) => 
        c.id === chirp.id 
          ? { ...c, ...updatedChirpData }
          : c
      );
      sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

      onChirpEdited();
      onClose();
    } catch (error) {
      console.error('Error updating chirp:', error);
      alert('Failed to update chirp. Please try again.');
    } finally {
      setIsSaving(false);
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-display text-gray-900">Edit Chirp</h2>
            <p className="text-sm text-gray-500 mt-1">{timeRemaining}</p>
          </div>
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

          {/* Existing Images */}
          {images.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Current Images</h3>
              <div className="grid grid-cols-2 gap-2">
                {images.map((url, index) => (
                  <div key={`existing-${index}`} className="relative">
                    <img
                      src={url}
                      alt={`Current image ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeExistingImage(index)}
                      className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors duration-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Images */}
          {newImageUrls.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">New Images</h3>
              <div className="grid grid-cols-2 gap-2">
                {newImageUrls.map((url, index) => (
                  <div key={`new-${index}`} className="relative">
                    <img
                      src={url}
                      alt={`New image ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeNewImage(index)}
                      className="absolute top-2 right-2 w-6 h-6 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-colors duration-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={images.length + newImages.length >= 4}
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
              onClick={handleSave}
              disabled={isSaving || (!content.trim() && images.length === 0 && newImageUrls.length === 0)}
              className="flex items-center space-x-2 px-6 py-2 bg-primary-400 text-white rounded-full font-medium hover:bg-primary-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditChirpModal; 