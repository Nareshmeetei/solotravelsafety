import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, Heart, User, MapPin, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Comment {
  id: string;
  user: {
    name: string;
    initials: string;
  };
  text: string;
  created_at: string;
  likes: number;
}

interface PostCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: any;
  onCommentAdded?: () => void;
}

const PostCommentModal: React.FC<PostCommentModalProps> = ({ isOpen, onClose, post, onCommentAdded }) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && post) {
      loadComments();
    }
  }, [isOpen, post]);

  const loadComments = () => {
    // Load existing comments for this post from localStorage
    const savedComments = localStorage.getItem(`post_comments_${post.id}`);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        console.warn('Error loading post comments:', e);
        setComments([]);
      }
    } else {
      // Set some demo comments for better UX
      setComments([
        {
          id: 'demo-1',
          user: {
            name: 'Jennifer Walsh',
            initials: 'JW'
          },
          text: 'This is so helpful! I\'m planning to visit next month and feeling much more confident now. Did you feel safe using public transport late at night?',
          created_at: '2 hours ago',
          likes: 3
        },
        {
          id: 'demo-2',
          user: {
            name: 'Ana Sofia',
            initials: 'AS'
          },
          text: 'Thanks for sharing your experience! Which neighborhoods would you recommend staying in for solo female travelers?',
          created_at: '5 hours ago',
          likes: 1
        }
      ]);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    setLoading(true);

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      user: {
        name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
        initials: (user.user_metadata?.full_name || user.email?.split('@')[0] || 'AN')
          .split(' ')
          .map(n => n[0])
          .join('')
          .toUpperCase()
          .substring(0, 2)
      },
      text: newComment.trim(),
      created_at: 'Just now',
      likes: 0
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    
    // Save to localStorage
    localStorage.setItem(`post_comments_${post.id}`, JSON.stringify(updatedComments));
    
    setNewComment('');
    setLoading(false);

    if (onCommentAdded) {
      onCommentAdded();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-5 w-5 text-primary-400" />
            <h2 className="text-lg font-display text-gray-900">
              Comments on {post?.destination_city}, {post?.destination_country} Review
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Post Preview */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {post?.user?.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-gray-900">{post?.user?.name}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm text-gray-600">{post?.created_at}</span>
              </div>
              
              <div className="flex items-center space-x-4 mb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="font-medium text-gray-900">{post?.destination_city}, {post?.destination_country}</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${star <= post?.overall_rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  post?.harassment_level === 'low' ? 'bg-green-100 text-green-800' :
                  post?.harassment_level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {post?.harassment_level?.toUpperCase()} HARASSMENT
                </div>
              </div>
              
              <p className="text-gray-700 text-sm">
                "{post?.review_text?.substring(0, 150)}..."
              </p>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-teal-400 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {comment.user.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm">{comment.user.name}</span>
                      <span className="text-xs text-gray-500">{comment.created_at}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{comment.text}</p>
                    <button className="flex items-center space-x-1 mt-2 text-xs text-gray-500 hover:text-primary-400 transition-colors duration-300">
                      <Heart className="h-3 w-3" />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No comments yet. Be the first to comment!</p>
              </div>
            )}
          </div>
        </div>

        {/* Comment Form */}
        <div className="border-t border-gray-200 p-6">
          <form onSubmit={handleSubmitComment} className="flex space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-teal-400 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              {user ? (
                (user.user_metadata?.full_name || user.email?.split('@')[0] || 'AN')
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()
                  .substring(0, 2)
              ) : (
                <User className="h-4 w-4" />
              )}
            </div>
            <div className="flex-1 flex space-x-3">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Ask a question or share your thoughts about this destination..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!newComment.trim() || loading}
                className="px-4 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Post</span>
              </button>
            </div>
          </form>
          {!user && (
            <p className="text-xs text-gray-500 mt-2">
              Please sign in to comment on posts.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCommentModal;