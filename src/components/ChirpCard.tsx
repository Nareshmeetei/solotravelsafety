import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, MoreHorizontal, Trash2, Edit, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { 
  likeChirp, 
  unlikeChirp, 
  getChirpLikes, 
  supabase
} from '../lib/supabase';
import UserAvatar from './UserAvatar';
import EditChirpModal from './EditChirpModal';
import CommentModal from './CommentModal';

// New component for top 3 most hugged comments
interface Comment {
  id: string;
  comment_text: string;
  user: {
    id: string;
    full_name?: string;
    email?: string;
    avatar_url?: string;
  };
  created_at: string;
  likes_count?: number;
  userHugs?: string[];
  parent_comment_id?: string;
  updated_at?: string;
}

interface User {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    username?: string;
    avatar_url?: string;
  };
}

interface ChirpUser {
  id: string;
  full_name?: string;
  email?: string;
  avatar_url?: string;
  username?: string;
  user_metadata?: {
    username?: string;
    full_name?: string;
    avatar_url?: string;
  };
}

interface TopLikedCommentsProps {
  comments: Comment[];
  user: User | null;
  chirp: {
    id: string;
    user: ChirpUser;
  };
  openCommentDropdownId: string | null;
  setOpenCommentDropdownId: (id: string | null) => void;
  handleDeleteComment: (commentId: string) => void;
  deletingCommentId: string | null;
  editingCommentId: string | null;
  editingCommentText: string;
  setEditingCommentId: (id: string | null) => void;
  setEditingCommentText: (text: string) => void;
  handleEditComment: (commentId: string, newText: string) => void;
  isEditingComment: boolean;
  handleCommentHug: (commentId: string) => void;
  handleCommentReply: (commentId: string, commentText: string) => void;
  replyingToCommentId: string | null;
  setReplyingToCommentId: (id: string | null) => void;
  replyText: string;
  setReplyText: (text: string) => void;
  isReplying: boolean;
  showCommentHugAnimation: string | null;
}

const TopLikedComments: React.FC<TopLikedCommentsProps> = ({
  comments,
  user,
  chirp,
  openCommentDropdownId,
  setOpenCommentDropdownId,
  handleDeleteComment,
  deletingCommentId,
  editingCommentId,
  editingCommentText,
  setEditingCommentId,
  setEditingCommentText,
  handleEditComment,
  isEditingComment,
  handleCommentHug,
  handleCommentReply,
  replyingToCommentId,
  setReplyingToCommentId,
  replyText,
  setReplyText,
  isReplying,
  showCommentHugAnimation
}: TopLikedCommentsProps) => {
  // Helper function to format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffHours < 48) return '1d ago';
    return `${Math.ceil(diffHours / 24)}d ago`;
  };

  // Sort comments by hugs count and get top 3
  const topHuggedComments = comments
    .sort((a, b) => (b.likes_count || 0) - (a.likes_count || 0))
    .slice(0, 3);
  
  if (topHuggedComments.length === 0) return null;
  
  return (
    <div className="space-y-3">
      {topHuggedComments.map((comment) => {
        // Check if current user can edit/delete this comment
        const canEdit = user && comment.user.id === user.id; // Only comment author can edit
        const canDelete = user && (
          comment.user.id === user.id || // Comment author
          chirp.user.id === user.id      // Chirp author
        );
        
        return (
          <div key={comment.id} className="flex items-start space-x-2">
            <UserAvatar user={comment.user} size="sm" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 text-base">
                    {comment.user.full_name || comment.user.email?.split('@')[0] || 'Solo Traveler'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatTime(comment.created_at)}
                  </span>
                </div>
                {(canDelete || canEdit) && (
                  <div className="relative">
                    <button
                      onClick={() => setOpenCommentDropdownId(openCommentDropdownId === comment.id ? null : comment.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors duration-300 comment-dropdown-trigger"
                      title="Comment options"
                    >
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>
                    
                    {openCommentDropdownId === comment.id && (
                      <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10 comment-dropdown">
                        {canEdit && (
                          <button
                            onClick={() => {
                              setEditingCommentId(comment.id);
                              setEditingCommentText(comment.comment_text);
                              setOpenCommentDropdownId(null);
                            }}
                            className="w-full flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-300 rounded-lg"
                          >
                            <Edit className="h-4 w-4" />
                            <span className="text-base">Edit</span>
                          </button>
                        )}
                        <button
                          onClick={() => {
                            if (confirm('Are you sure you want to delete this comment?')) {
                              handleDeleteComment(comment.id);
                            }
                            setOpenCommentDropdownId(null);
                          }}
                          disabled={deletingCommentId === comment.id}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 transition-colors duration-300 rounded-lg disabled:opacity-50"
                        >
                          {deletingCommentId === comment.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                          <span className="text-base">Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {editingCommentId === comment.id ? (
                                  <div className="mt-2">
                  <textarea
                    value={editingCommentText}
                    onChange={(e) => setEditingCommentText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    rows={2}
                    placeholder="Edit your comment..."
                    autoFocus
                  />
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => handleEditComment(comment.id, editingCommentText)}
                      disabled={isEditingComment || !editingCommentText.trim()}
                      className="px-4 py-2 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isEditingComment ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={() => {
                        setEditingCommentId(null);
                        setEditingCommentText('');
                      }}
                      disabled={isEditingComment}
                      className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-400 transition-colors duration-300 disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-gray-700 text-base">{comment.comment_text}</p>
                  
                  {/* Comment Actions */}
                  <div className="flex items-center space-x-5 mt-3 text-sm text-gray-500">
                    {/* Hug Button */}
                    <button
                      onClick={() => handleCommentHug(comment.id)}
                      disabled={!user}
                      className={`relative flex items-center space-x-1 hover:text-red-500 transition-all duration-300 ${
                        comment.userHugs?.includes(user?.id) ? 'text-red-500' : ''
                      } ${!user ? 'opacity-50 cursor-not-allowed' : ''} active:scale-95`}
                    >
                      <div className="relative">
                        <Heart 
                          className={`h-4 w-4 transition-all duration-300 ${
                            comment.userHugs?.includes(user?.id) ? 'fill-current' : ''
                          } ${showCommentHugAnimation === comment.id ? 'heart-beat heart-glow' : ''}`} 
                        />
                        {/* Heart burst animation */}
                        {showCommentHugAnimation === comment.id && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="heart-burst">
                              <Heart className="h-5 w-5 text-red-500 fill-current" />
                            </div>
                            <div className="absolute heart-burst" style={{ animationDelay: '0.1s' }}>
                              <Heart className="h-4 w-4 text-red-400 fill-current" />
                            </div>
                            <div className="absolute heart-burst" style={{ animationDelay: '0.2s' }}>
                              <Heart className="h-3 w-3 text-red-300 fill-current" />
                            </div>
                          </div>
                        )}
                      </div>
                      <span className={`transition-all duration-300 ${showCommentHugAnimation === comment.id ? 'text-red-500 font-semibold' : ''}`}>
                        {comment.likes_count || 0} Hug{(comment.likes_count || 0) !== 1 ? 's' : ''}
                      </span>
                    </button>
                    
                    {/* Reply Button */}
                    <button
                      onClick={() => setReplyingToCommentId(replyingToCommentId === comment.id ? null : comment.id)}
                      disabled={!user}
                      className={`flex items-center space-x-1 hover:text-primary-400 transition-colors duration-300 ${
                        !user ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                  
                  {/* Reply Input */}
                  {replyingToCommentId === comment.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        rows={2}
                        placeholder={`Reply to ${comment.user.full_name || comment.user.email?.split('@')[0] || 'Solo Traveler'}...`}
                        autoFocus
                      />
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => handleCommentReply(comment.id, replyText)}
                          disabled={isReplying || !replyText.trim()}
                          className="px-4 py-2 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isReplying ? 'Sending...' : 'Reply'}
                        </button>
                        <button
                          onClick={() => {
                            setReplyingToCommentId(null);
                            setReplyText('');
                          }}
                          disabled={isReplying}
                          className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-400 transition-colors duration-300 disabled:opacity-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface ChirpCardProps {
  chirp: {
    id: string;
    content: string;
    images?: string[];
    likes_count: number;
    comments_count: number;
    created_at: string;
    user: {
      id: string;
      full_name?: string;
      avatar_url?: string;
      email?: string;
      username?: string;
      user_metadata?: {
        username?: string;
        full_name?: string;
        avatar_url?: string;
      };
    };
  };
  onChirpDeleted?: () => void;
  onChirpEdited?: () => void;
}

const ChirpCard: React.FC<ChirpCardProps> = ({ chirp, onChirpDeleted, onChirpEdited }) => {
  // Add custom CSS for enhanced animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes heartBurst {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0.8; }
        100% { transform: scale(2); opacity: 0; }
      }
      @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      @keyframes heartGlow {
        0%, 100% { filter: drop-shadow(0 0 0 rgba(239, 68, 68, 0)); }
        50% { filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.6)); }
      }
      .heart-burst {
        animation: heartBurst 0.6s ease-out forwards;
      }
      .heart-beat {
        animation: heartBeat 0.3s ease-in-out;
      }
      .heart-glow {
        animation: heartGlow 0.6s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  const { user } = useAuth();
  
  // Get the most up-to-date user data for display
  const getDisplayUser = () => {
    // If this is the current user's chirp, use the latest auth metadata
    if (user && chirp.user.id === user.id) {
      return {
        ...chirp.user,
        full_name: user.user_metadata?.full_name || chirp.user.full_name,
        username: user.user_metadata?.username,
        avatar_url: user.user_metadata?.avatar_url || chirp.user.avatar_url,
        user_metadata: user.user_metadata
      };
    }
    // For other users' chirps, use the stored data
    return chirp.user;
  };
  
  const displayUser = getDisplayUser();
  
  // Update chirp in localStorage with current user metadata if it's the current user's chirp
  useEffect(() => {
    if (user && chirp.user.id === user.id) {
      const updateChirpInStorage = (storage: Storage, key: string) => {
        const chirps = JSON.parse(storage.getItem(key) || '[]');
        const updatedChirps = chirps.map((c: { id: string; user: ChirpUser }) => {
          if (c.id === chirp.id) {
            return {
              ...c,
              user: {
                ...c.user,
                full_name: user.user_metadata?.full_name || c.user.full_name,
                avatar_url: user.user_metadata?.avatar_url || c.user.avatar_url,
                user_metadata: user.user_metadata
              }
            };
          }
          return c;
        });
        storage.setItem(key, JSON.stringify(updatedChirps));
      };
      
      updateChirpInStorage(localStorage, 'localChirps');
      updateChirpInStorage(sessionStorage, 'sessionChirps');
    }
  }, [user, chirp.id, chirp.user.id]);
  
  // Debug: Log avatar URL for troubleshooting
  console.log('ChirpCard displayUser:', {
    id: displayUser.id,
    full_name: displayUser.full_name,
    username: displayUser.username,
    avatar_url: displayUser.avatar_url,
    user_metadata: displayUser.user_metadata
  });
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(chirp.likes_count);
  const [commentsCount, setCommentsCount] = useState(chirp.comments_count);
  const [isHugging, setIsHugging] = useState(false);
  const [showHugAnimation, setShowHugAnimation] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [replyingToCommentId, setReplyingToCommentId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);
  const [showCommentHugAnimation, setShowCommentHugAnimation] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);
  const [openCommentDropdownId, setOpenCommentDropdownId] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [isEditingComment, setIsEditingComment] = useState(false);

  // Check if user can edit this chirp (own posts can be edited anytime)
  const canEdit = () => {
    // Users can always edit their own posts
    if (user && displayUser.id === user.id) {
      return true;
    }
    
    // For other users' posts, check if within 5 hours (if this feature is still needed)
    const chirpDate = new Date(chirp.created_at);
    const now = new Date();
    const diffHours = (now.getTime() - chirpDate.getTime()) / (1000 * 60 * 60);
    return diffHours <= 5;
  };

  // Check user's interaction status and load comments on component mount
  useEffect(() => {
    const loadChirpData = async () => {
      try {
        // Load comments from local storage first
        const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
        const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
        const allChirps = [...localChirps, ...sessionChirps];
        const chirpData = allChirps.find((c: { id: string }) => c.id === chirp.id);
        
        if (chirpData) {
          // Update counts from local storage
          setCommentsCount(chirpData.comments_count || 0);
          setLikesCount(chirpData.likes_count || 0);
          // Load comments from local storage
          setComments(chirpData.comments || []);
          console.log('Loaded comments for chirp:', chirp.id, chirpData.comments);
        }

        if (!user) return;

        // Check if user has liked this chirp
        const { data: likes, error: likesError } = await getChirpLikes(chirp.id);
        if (likes && !likesError) {
          const userLiked = likes.some((like: { user_id: string }) => like.user_id === user.id);
          setIsLiked(userLiked);
        } else {
          console.warn('Database likes check failed, using local storage:', likesError);
          // Check local storage for likes
          if (chirpData && chirpData.userLikes && chirpData.userLikes.includes(user.id)) {
            setIsLiked(true);
          }
        }


      } catch (error) {
        console.error('Error loading chirp data:', error);
      }
    };

    loadChirpData();
  }, [user, chirp.id]);

  // Handle clicks outside the options dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Check if click is outside the options dropdown and not on the trigger button
      if (showOptions && !target.closest('.options-dropdown') && !target.closest('.options-trigger')) {
        setShowOptions(false);
      }
      // Check if click is outside the comment dropdown and not on the trigger button
      if (openCommentDropdownId && !target.closest('.comment-dropdown') && !target.closest('.comment-dropdown-trigger')) {
        setOpenCommentDropdownId(null);
      }
    };

    if (showOptions || openCommentDropdownId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions, openCommentDropdownId]);

  const handleHug = async () => {
    if (!user) return;
    
    setIsHugging(true);
    
    // Trigger animation
    if (!isLiked) {
      setShowHugAnimation(true);
      setTimeout(() => setShowHugAnimation(false), 600);
    } else {
      // Subtle animation for unhugging
      setShowHugAnimation(true);
      setTimeout(() => setShowHugAnimation(false), 300);
    }
    try {
      if (isLiked) {
        // Unlike
        const { error } = await unlikeChirp(chirp.id);
        if (error) {
          console.warn('Database unlike failed, using local storage:', error);
        }
        
        // Always update local state and storage
        setIsLiked(false);
        setLikesCount(prev => prev - 1);
        
        // Update in localStorage
        const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
        const updatedLocalChirps = localChirps.map((c: { id: string; likes_count?: number; userLikes?: string[] }) => 
          c.id === chirp.id 
            ? { 
                ...c, 
                likes_count: Math.max(0, (c.likes_count || 0) - 1),
                userLikes: (c.userLikes || []).filter((userId: string) => userId !== user.id)
              }
            : c
        );
        localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));
        
        // Update in sessionStorage
        const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
        const updatedSessionChirps = sessionChirps.map((c: { id: string; likes_count?: number; userLikes?: string[] }) => 
          c.id === chirp.id 
            ? { 
                ...c, 
                likes_count: Math.max(0, (c.likes_count || 0) - 1),
                userLikes: (c.userLikes || []).filter((userId: string) => userId !== user.id)
              }
            : c
        );
        sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));
        
      } else {
        // Like
        const { error } = await likeChirp(chirp.id);
        if (error) {
          console.warn('Database like failed, using local storage:', error);
        }
        
        // Always update local state and storage
        setIsLiked(true);
        setLikesCount(prev => prev + 1);
        
        // Update in localStorage
        const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
        const updatedLocalChirps = localChirps.map((c: { id: string; likes_count?: number; userLikes?: string[] }) => 
          c.id === chirp.id 
            ? { 
                ...c, 
                likes_count: (c.likes_count || 0) + 1,
                userLikes: [...(c.userLikes || []), user.id]
              }
            : c
        );
        localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));
        
        // Update in sessionStorage
        const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
        const updatedSessionChirps = sessionChirps.map((c: { id: string; likes_count?: number; userLikes?: string[] }) => 
          c.id === chirp.id 
            ? { 
                ...c, 
                likes_count: (c.likes_count || 0) + 1,
                userLikes: [...(c.userLikes || []), user.id]
              }
            : c
        );
        sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));
      }
    } catch (error) {
      console.error('Error toggling hug:', error);
    } finally {
      setIsHugging(false);
    }
  };

  const handleComment = () => {
    if (!user) {
      alert('Please sign in to comment');
      return;
    }
    
    // Debug: Check current storage state
    const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
    const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
    console.log('Opening comment modal for chirp:', chirp.id);
    console.log('Current chirps in storage:', { localChirps, sessionChirps });
    
    setShowCommentModal(true);
  };

  const handleCommentModalClose = () => {
    setShowCommentModal(false);
    // Refresh comment count and data from local storage
    const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
    const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
    const allChirps = [...localChirps, ...sessionChirps];
    const chirpData = allChirps.find((c: { id: string }) => c.id === chirp.id);
    
    if (chirpData) {
      setCommentsCount(chirpData.comments_count || 0);
      setComments(chirpData.comments || []);
    }
  };



  const handleDelete = async () => {
    if (!user || displayUser.id !== user.id) return;
    
    if (confirm('Are you sure you want to delete this chirp?')) {
      try {
        // Try to delete from database first
        const { error } = await supabase
          .from('chirps')
          .delete()
          .eq('id', chirp.id);

        if (error) {
          console.warn('Database delete failed, using local storage:', error);
        }

        // Remove from localStorage
        const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
        const updatedLocalChirps = localChirps.filter((c: { id: string }) => c.id !== chirp.id);
        localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

        // Remove from sessionStorage
        const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
        const updatedSessionChirps = sessionChirps.filter((c: { id: string }) => c.id !== chirp.id);
        sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

        if (onChirpDeleted) {
          onChirpDeleted();
        }
      } catch (error) {
        console.error('Error deleting chirp:', error);
        alert('Failed to delete chirp. Please try again.');
      }
    }
    setShowOptions(false);
  };

  const handleEdit = () => {
    if (!canEdit()) {
      alert('You can only edit your own posts.');
      return;
    }
    setShowEditModal(true);
    setShowOptions(false);
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!user) return;
    
    setDeletingCommentId(commentId);
    try {
      // Remove comment from local state
      const updatedComments = comments.filter(c => c.id !== commentId);
      setComments(updatedComments);

      // Update chirp in localStorage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      const updatedLocalChirps = localChirps.map((c: { id: string; comments_count?: number }) => 
        c.id === chirp.id 
          ? { 
              ...c, 
              comments: updatedComments,
              comments_count: Math.max(0, (c.comments_count || 0) - 1)
            }
          : c
      );
      localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

      // Update chirp in sessionStorage
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
      const updatedSessionChirps = sessionChirps.map((c: { id: string; comments_count?: number }) => 
        c.id === chirp.id 
          ? { 
              ...c, 
              comments: updatedComments,
              comments_count: Math.max(0, (c.comments_count || 0) - 1)
            }
          : c
      );
      sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

      // Update comment count
      setCommentsCount(Math.max(0, commentsCount - 1));

      console.log('Comment deleted successfully:', commentId);
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment. Please try again.');
    } finally {
      setDeletingCommentId(null);
    }
  };

  const handleEditComment = async (commentId: string, newText: string) => {
    if (!user || !newText.trim()) return;
    
    setIsEditingComment(true);
    try {
      // Update local state
      const updatedComments = comments.map(comment => 
        comment.id === commentId 
          ? { ...comment, comment_text: newText.trim(), updated_at: new Date().toISOString() }
          : comment
      );
      setComments(updatedComments);

      // Update chirp in localStorage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      const updatedLocalChirps = localChirps.map((c: { id: string }) => 
        c.id === chirp.id 
          ? { ...c, comments: updatedComments }
          : c
      );
      localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

      // Update chirp in sessionStorage
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
      const updatedSessionChirps = sessionChirps.map((c: { id: string }) => 
        c.id === chirp.id 
          ? { ...c, comments: updatedComments }
          : c
      );
      sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

      console.log('Comment edited successfully:', commentId);
    } catch (error) {
      console.error('Error editing comment:', error);
      alert('Failed to edit comment. Please try again.');
    } finally {
      setIsEditingComment(false);
      setEditingCommentId(null);
      setEditingCommentText('');
    }
  };

  const handleCommentHug = async (commentId: string) => {
    if (!user) return;
    
    // Trigger animation
    const comment = comments.find(c => c.id === commentId);
    const isHugged = comment?.userHugs?.includes(user.id);
    
    if (!isHugged) {
      setShowCommentHugAnimation(commentId);
      setTimeout(() => setShowCommentHugAnimation(null), 600);
    } else {
      setShowCommentHugAnimation(commentId);
      setTimeout(() => setShowCommentHugAnimation(null), 300);
    }
    
    try {
      // Update local state
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId) {
          const userHugs = comment.userHugs || [];
          const isHugged = userHugs.includes(user.id);
          
          if (isHugged) {
            // Remove hug
            return {
              ...comment,
              userHugs: userHugs.filter((id: string) => id !== user.id),
              likes_count: Math.max(0, (comment.likes_count || 0) - 1)
            };
          } else {
            // Add hug
            return {
              ...comment,
              userHugs: [...userHugs, user.id],
              likes_count: (comment.likes_count || 0) + 1
            };
          }
        }
        return comment;
      });
      
      setComments(updatedComments);

      // Update chirp in localStorage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      const updatedLocalChirps = localChirps.map((c: { id: string }) => 
        c.id === chirp.id 
          ? { ...c, comments: updatedComments }
          : c
      );
      localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

      // Update chirp in sessionStorage
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
      const updatedSessionChirps = sessionChirps.map((c: { id: string }) => 
        c.id === chirp.id 
          ? { ...c, comments: updatedComments }
          : c
      );
      sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

      console.log('Comment hugged successfully:', commentId);
    } catch (error) {
      console.error('Error hugging comment:', error);
    }
  };

  const handleCommentReply = async (commentId: string, replyText: string) => {
    if (!user || !replyText.trim()) return;
    
    setIsReplying(true);
    try {
      // Create new reply comment
      const replyComment = {
        id: `reply-${Date.now()}-${Math.random()}`,
        comment_text: replyText.trim(),
        user: {
          id: user.id,
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
          email: user.email,
          avatar_url: user.user_metadata?.avatar_url
        },
        created_at: new Date().toISOString(),
        likes_count: 0,
        userHugs: [],
        parent_comment_id: commentId
      };
      
      const updatedComments = [...comments, replyComment];
      setComments(updatedComments);
      setCommentsCount(prev => prev + 1);

      // Update chirp in localStorage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
      const updatedLocalChirps = localChirps.map((c: { id: string }) => 
        c.id === chirp.id 
          ? { ...c, comments: updatedComments, comments_count: commentsCount + 1 }
          : c
      );
      localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

      // Update chirp in sessionStorage
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
      const updatedSessionChirps = sessionChirps.map((c: { id: string }) => 
        c.id === chirp.id 
          ? { ...c, comments: updatedComments, comments_count: commentsCount + 1 }
          : c
      );
      sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

      // Clear reply state immediately after successful submission
      setReplyingToCommentId(null);
      setReplyText('');

      console.log('Reply added successfully:', commentId);
    } catch (error) {
      console.error('Error replying to comment:', error);
    } finally {
      setIsReplying(false);
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

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start space-x-4">
          <UserAvatar user={displayUser} size="md" />
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="font-bold text-gray-900">
                  {displayUser.full_name || displayUser.email?.split('@')[0] || 'Solo Traveler'}
                </span>
                <span className="text-gray-600 ml-2">
                  @{displayUser.user_metadata?.username || displayUser.username || displayUser.email?.split('@')[0]}
                </span>
                <div className="text-sm text-gray-500 mt-1">{formatDate(chirp.created_at)}</div>
              </div>
              <div className="relative">
                <button 
                  onClick={() => setShowOptions(!showOptions)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 options-trigger"
                >
                  <MoreHorizontal className="h-5 w-5 text-gray-400" />
                </button>
                
                {/* Options Menu */}
                {showOptions && user?.id === displayUser.id && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 options-dropdown">
                    {canEdit() && (
                      <button
                        onClick={handleEdit}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-300 rounded-lg"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Edit Chirp</span>
                      </button>
                    )}
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
                  {chirp.images.map((image, imageIndex) => (
                    <div key={imageIndex} className={`${
                      chirp.images!.length === 3 && imageIndex === 2 ? 'col-span-2' : ''
                    }`}>
                      <img
                        src={image}
                        alt={`Chirp image ${imageIndex + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}


            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              {/* Hug Button */}
              <button 
                onClick={handleHug}
                disabled={isHugging}
                className={`relative flex items-center space-x-2 hover:text-red-500 transition-all duration-300 ${
                  isLiked ? 'text-red-500' : ''
                } ${isHugging ? 'scale-95' : ''} active:scale-95`}
              >
                <div className="relative">
                  <Heart 
                    className={`h-4 w-4 transition-all duration-300 ${
                      isLiked ? 'fill-current' : ''
                    } ${showHugAnimation ? 'heart-beat heart-glow' : ''}`} 
                  />
                  {/* Heart burst animation */}
                  {showHugAnimation && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="heart-burst">
                        <Heart className="h-6 w-6 text-red-500 fill-current" />
                      </div>
                      <div className="absolute heart-burst" style={{ animationDelay: '0.1s' }}>
                        <Heart className="h-5 w-5 text-red-400 fill-current" />
                      </div>
                      <div className="absolute heart-burst" style={{ animationDelay: '0.2s' }}>
                        <Heart className="h-4 w-4 text-red-300 fill-current" />
                      </div>
                    </div>
                  )}
                </div>
                <span className={`transition-all duration-300 ${showHugAnimation ? 'text-red-500 font-semibold' : ''}`}>
                  Hug ({likesCount})
                </span>
              </button>

              {/* Comment Button */}
              <button 
                onClick={handleComment}
                className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Comment ({commentsCount})</span>
              </button>
            </div>

            {/* View all comments link and top 3 most hugged comments */}
            {commentsCount > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <button 
                  onClick={handleComment}
                  className="text-gray-500 text-sm hover:text-primary-400 transition-colors duration-300 mb-3"
                >
                  View all {commentsCount} comment{commentsCount !== 1 ? 's' : ''}
                </button>
                
                {/* Top 3 most hugged comments */}
                {comments.length > 0 && (
                  <TopLikedComments
                    comments={comments}
                    user={user}
                    chirp={chirp}
                    openCommentDropdownId={openCommentDropdownId}
                    setOpenCommentDropdownId={setOpenCommentDropdownId}
                    handleDeleteComment={handleDeleteComment}
                    deletingCommentId={deletingCommentId}
                    editingCommentId={editingCommentId}
                    editingCommentText={editingCommentText}
                    setEditingCommentId={setEditingCommentId}
                    setEditingCommentText={setEditingCommentText}
                    handleEditComment={handleEditComment}
                    isEditingComment={isEditingComment}
                    handleCommentHug={handleCommentHug}
                    handleCommentReply={handleCommentReply}
                    replyingToCommentId={replyingToCommentId}
                    setReplyingToCommentId={setReplyingToCommentId}
                    replyText={replyText}
                    setReplyText={setReplyText}
                    isReplying={isReplying}
                    showCommentHugAnimation={showCommentHugAnimation}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <EditChirpModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        chirp={chirp}
        onChirpEdited={() => {
          if (onChirpEdited) {
            onChirpEdited();
          }
          setShowEditModal(false);
        }}
      />

      {/* Comment Modal */}
      <CommentModal
        isOpen={showCommentModal}
        onClose={handleCommentModalClose}
        chirp={chirp}
        onCommentAdded={() => {
          // Refresh comment count and data
          const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]');
          const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]');
          const allChirps = [...localChirps, ...sessionChirps];
          const chirpData = allChirps.find((c: { id: string }) => c.id === chirp.id);
          
          console.log('Comment added, chirpData:', chirpData);
          console.log('All chirps after comment:', allChirps);
          
          if (chirpData) {
            setCommentsCount(chirpData.comments_count || 0);
            setComments(chirpData.comments || []);
            console.log('Updated comments state:', chirpData.comments);
          } else {
            console.warn('Chirp not found in storage after comment added');
          }
        }}
      />
    </>
  );
};

export default ChirpCard; 