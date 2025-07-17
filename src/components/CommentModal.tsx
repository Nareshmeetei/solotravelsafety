import React, { useState, useEffect } from 'react';
import { X, Send, Loader2, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { createChirpComment, getChirpComments } from '../lib/supabase';
import UserAvatar from './UserAvatar';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  chirp: {
    id: string;
    content: string;
    user: {
      id: string;
      full_name?: string;
      avatar_url?: string;
      email?: string;
    };
  };
}

interface Comment {
  id: string;
  comment_text: string;
  created_at: string;
  user: {
    id: string;
    full_name?: string;
    avatar_url?: string;
    email?: string;
  };
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose, chirp }) => {
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [isPosting, setIsPosting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadComments();
    }
  }, [isOpen, chirp.id]);

  const loadComments = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await getChirpComments(chirp.id);
      if (!error && data) {
        setComments(data);
      }
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePostComment = async () => {
    if (!comment.trim() || !user) return;

    setIsPosting(true);
    try {
      const { data, error } = await createChirpComment({
        chirp_id: chirp.id,
        comment_text: comment.trim()
      });

      if (!error && data) {
        setComment('');
        await loadComments(); // Reload comments to show the new one
      } else {
        console.error('Error posting comment:', error);
        alert('Failed to post comment. Please try again.');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    } finally {
      setIsPosting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
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
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-display text-gray-900">Comments</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Chirp Preview */}
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <div className="flex items-start space-x-3">
            <UserAvatar user={chirp.user} size="sm" />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-gray-900">
                  {chirp.user.full_name || chirp.user.email?.split('@')[0] || 'Solo Traveler'}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{chirp.content}</p>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start space-x-3">
                  <UserAvatar user={comment.user} size="sm" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">
                        {comment.user.full_name || comment.user.email?.split('@')[0] || 'Solo Traveler'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{comment.comment_text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>

        {/* Comment Input */}
        {user && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-end space-x-3">
              <UserAvatar user={user} size="sm" />
              <div className="flex-1">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  rows={2}
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    {comment.length}/500 characters
                  </span>
                  <button
                    onClick={handlePostComment}
                    disabled={isPosting || !comment.trim()}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-400 text-white rounded-full text-sm font-medium hover:bg-primary-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPosting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Posting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Post</span>
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
  );
};

export default CommentModal; 