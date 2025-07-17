import React, { useState } from 'react';
import { Heart, MessageSquare, Repeat2, MoreHorizontal, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import UserAvatar from './UserAvatar';

interface ChirpCardProps {
  chirp: {
    id: string;
    content: string;
    images?: string[];
    likes_count: number;
    comments_count: number;
    rechirps_count: number;
    created_at: string;
    user: {
      id: string;
      full_name?: string;
      avatar_url?: string;
      email?: string;
    };
  };
  onChirpDeleted?: () => void;
}

const ChirpCard: React.FC<ChirpCardProps> = ({ chirp, onChirpDeleted }) => {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(chirp.likes_count);
  const [isLiking, setIsLiking] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleLift = async () => {
    if (!user) return;
    
    setIsLiking(true);
    try {
      if (isLiked) {
        // Unlike
        const { error } = await supabase
          .from('chirp_likes')
          .delete()
          .eq('chirp_id', chirp.id)
          .eq('user_id', user.id);

        if (!error) {
          setIsLiked(false);
          setLikesCount(prev => prev - 1);
        }
      } else {
        // Like
        const { error } = await supabase
          .from('chirp_likes')
          .insert({
            chirp_id: chirp.id,
            user_id: user.id
          });

        if (!error) {
          setIsLiked(true);
          setLikesCount(prev => prev + 1);
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setIsLiking(false);
    }
  };

  const handleDelete = async () => {
    if (!user || chirp.user.id !== user.id) return;
    
    if (confirm('Are you sure you want to delete this chirp?')) {
      try {
        const { error } = await supabase
          .from('chirps')
          .delete()
          .eq('id', chirp.id);

        if (!error && onChirpDeleted) {
          onChirpDeleted();
        }
      } catch (error) {
        console.error('Error deleting chirp:', error);
      }
    }
    setShowOptions(false);
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

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start space-x-4">
        <UserAvatar user={chirp.user} size="md" />
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold text-gray-900">
                {chirp.user.full_name || chirp.user.email?.split('@')[0] || 'Solo Traveler'}
              </span>
              <span className="text-gray-600 ml-2">chirped</span>
              <div className="text-sm text-gray-500 mt-1">{formatDate(chirp.created_at)}</div>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowOptions(!showOptions)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                <MoreHorizontal className="h-5 w-5 text-gray-400" />
              </button>
              
              {/* Options Menu */}
              {showOptions && user?.id === chirp.user.id && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <button
                    onClick={handleDelete}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-300 rounded-lg"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete Chirp</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mb-4">
            <p className="text-gray-700 mb-3">{chirp.content}</p>
            
            {/* Images */}
            {chirp.images && chirp.images.length > 0 && (
              <div className={`grid gap-2 mb-4 ${
                chirp.images.length === 1 ? 'grid-cols-1' :
                chirp.images.length === 2 ? 'grid-cols-2' :
                chirp.images.length === 3 ? 'grid-cols-2' :
                'grid-cols-2'
              }`}>
                {chirp.images.map((image, index) => (
                  <div key={index} className={`${
                    chirp.images!.length === 3 && index === 2 ? 'col-span-2' : ''
                  }`}>
                    <img
                      src={image}
                      alt={`Chirp image ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              {/* Lift Button */}
              <button 
                onClick={handleLift}
                disabled={isLiking}
                className={`flex items-center space-x-2 hover:text-red-500 transition-colors duration-300 ${
                  isLiked ? 'text-red-500' : ''
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>Lift ({likesCount})</span>
              </button>

              {/* Comment Button */}
              <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                <MessageSquare className="h-4 w-4" />
                <span>Comment ({chirp.comments_count})</span>
              </button>

              {/* Rechirp Button */}
              <button className="flex items-center space-x-2 hover:text-green-500 transition-colors duration-300">
                <Repeat2 className="h-4 w-4" />
                <span>Rechirp ({chirp.rechirps_count})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChirpCard; 