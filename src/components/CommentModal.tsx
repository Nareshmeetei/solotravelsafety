import React, { useState, useEffect, useCallback } from 'react';
import { X, Send, MoreHorizontal, Trash2, Loader2, User, Edit, Check, X as XIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import UserAvatar from './UserAvatar';

// Helper function to update chirp in storage
interface ChirpUser {
  id: string;
  full_name?: string;
  avatar_url?: string;
  email?: string;
}

interface ChirpData {
  id: string;
  content: string;
  user: ChirpUser;
  comments?: CommentData[];
  comments_count?: number;
  likes_count?: number;
  rechirps_count?: number;
  created_at?: string;
  userLikes?: string[];
  userRechirps?: string[];
}

interface CommentData {
  id: string;
  comment_text: string;
  created_at: string;
  likes_count?: number;
  userLikes?: string[];
  user: ChirpUser;
}

const updateChirpInStorage = (
  storage: Storage,
  storageKey: string,
  chirp: ChirpData,
  newComment: CommentData | null,
  isDeleting: boolean = false,
  commentIdToDelete?: string
) => {
  const chirps = JSON.parse(storage.getItem(storageKey) || '[]');
  console.log(`Current chirps in ${storageKey}:`, chirps);
  console.log('Looking for chirp ID:', chirp.id);
  
  const chirpExists = chirps.some((c: ChirpData) => c.id === chirp.id);
  
  let updatedChirps: ChirpData[];
  if (chirpExists) {
    // Update existing chirp
    if (isDeleting && commentIdToDelete) {
      // Delete comment logic
      const updatedComments = chirps.find((c: ChirpData) => c.id === chirp.id)?.comments?.filter((c: CommentData) => c.id !== commentIdToDelete) || [];
      updatedChirps = chirps.map((c: ChirpData) => 
        c.id === chirp.id 
          ? { 
              ...c, 
              comments: updatedComments,
              comments_count: Math.max(0, (c.comments_count || 0) - 1)
            }
          : c
      );
    } else {
      // Add comment logic
      updatedChirps = chirps.map((c: ChirpData) => 
        c.id === chirp.id 
          ? { 
              ...c, 
              comments: [newComment!, ...(c.comments || [])],
              comments_count: (c.comments_count || 0) + 1
            }
          : c
      );
    }
  } else if (!isDeleting) {
    // Create new chirp entry with comment (only when adding, not deleting)
    const newChirpEntry: ChirpData = {
      id: chirp.id,
      content: chirp.content,
      user: chirp.user,
      comments: [newComment!],
      comments_count: 1,
      likes_count: 0,
      rechirps_count: 0,
      created_at: new Date().toISOString(),
      userLikes: [],
      userRechirps: []
    };
    updatedChirps = [newChirpEntry, ...chirps];
  } else {
    // If chirp doesn't exist and we're deleting, just return original chirps
    updatedChirps = chirps;
  }
  
  storage.setItem(storageKey, JSON.stringify(updatedChirps));
  console.log(`Updated ${storageKey}:`, updatedChirps);
  return updatedChirps;
};

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
  onCommentAdded?: () => void;
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

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose, chirp, onCommentAdded }) => {
  // TODO: Get user from auth context when rebuilding
  const { user } = useAuth();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [isPosting, setIsPosting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editCommentText, setEditCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [profileUpdateTrigger, setProfileUpdateTrigger] = useState(0);

  const loadComments = useCallback(async () => {
    setIsLoading(true);
    try {
      // Try to load from database first
      const { data, error } = await supabase.from('comments').select('*, user:users(*)').eq('chirp_id', chirp.id).order('created_at', { ascending: false });
      if (!error && data) {
        setComments(data);
      } else {
        console.warn('Database comments load failed, using local storage:', error);
        // Load from local storage
        const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]') as ChirpData[];
        const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]') as ChirpData[];
        const allChirps = [...localChirps, ...sessionChirps];
        const chirpData = allChirps.find((c: ChirpData) => c.id === chirp.id);
        
        if (chirpData && chirpData.comments) {
          setComments(chirpData.comments);
        } else {
          setComments([]);
        }
      }
    } catch (error) {
      console.error('Error loading comments:', error);
      // Fallback to local storage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]') as ChirpData[];
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]') as ChirpData[];
      const allChirps = [...localChirps, ...sessionChirps];
      const chirpData = allChirps.find((c: ChirpData) => c.id === chirp.id);
      
      if (chirpData && chirpData.comments) {
        setComments(chirpData.comments);
      } else {
        setComments([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, [chirp.id]);

  useEffect(() => {
    if (isOpen) {
      loadComments();
    }
  }, [isOpen, loadComments]);

  // Listen for profile updates
  useEffect(() => {
    const handleProfileUpdate = (event: CustomEvent) => {
      if (event.detail?.type === 'profile') {
        console.log('CommentModal: Profile updated, refreshing display');
        setProfileUpdateTrigger(prev => prev + 1);
      }
    };

    window.addEventListener('profileUpdated', handleProfileUpdate as EventListener);
    
    return () => {
      window.removeEventListener('profileUpdated', handleProfileUpdate as EventListener);
    };
  }, []);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openDropdownId && !target.closest('.comment-dropdown') && !target.closest('.comment-dropdown-trigger')) {
        setOpenDropdownId(null);
      }
    };

    if (openDropdownId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]);

  const handlePostComment = async () => {
    if (!comment.trim() || !user) return;

    setIsPosting(true);
    try {
      // Create new comment object
      const newComment = {
        id: Date.now().toString(),
        comment_text: comment.trim(),
        created_at: new Date().toISOString(),
        likes_count: 0,
        userLikes: [],
        user: (() => {
          try {
            const storedProfile = localStorage.getItem(`dev_profile_${user.id}`);
            if (storedProfile) {
              const profile = JSON.parse(storedProfile);
              return {
                id: user.id,
                full_name: profile.full_name || user.user_metadata?.full_name || user.email?.split('@')[0],
                avatar_url: profile.avatar_url || user.user_metadata?.avatar_url,
                email: user.email
              };
            }
          } catch (error) {
            console.error('Error loading profile for comment:', error);
          }
          
          // Fallback to auth metadata
          return {
            id: user.id,
            full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
            avatar_url: user.user_metadata?.avatar_url,
            email: user.email
          };
        })()
      };

      // Try to save to database first
      const { error } = await supabase.from('comments').insert({
        chirp_id: chirp.id,
        comment_text: comment.trim(),
        user_id: user.id
      });
      if (error) {
        console.warn('Database comment save failed, using local storage:', error);
      }

      // Always update local state and storage
      setComments(prev => [newComment, ...prev]);
      setComment('');

      // Update chirp in localStorage
      updateChirpInStorage(localStorage, 'localChirps', chirp, newComment);
      console.log('Saved comment to localStorage:', newComment);

      // Update chirp in sessionStorage
      updateChirpInStorage(sessionStorage, 'sessionChirps', chirp, newComment);

      // Notify parent component that comment was added
      if (onCommentAdded) {
        onCommentAdded();
      }

          } catch (error) {
        console.error('Error posting comment:', error);
        // Even if there's an error, the comment was added to local state
        // so we don't show an error to the user
          } finally {
      setIsPosting(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!user) return;
    
    setDeletingCommentId(commentId);
    try {
      // Remove comment from local state
      const updatedComments = comments.filter(c => c.id !== commentId);
      setComments(updatedComments);

      // Update chirp in localStorage
      updateChirpInStorage(localStorage, 'localChirps', chirp, null, true, commentId);

      // Update chirp in sessionStorage
      updateChirpInStorage(sessionStorage, 'sessionChirps', chirp, null, true, commentId);

      // Notify parent component that comment was deleted
      if (onCommentAdded) {
        onCommentAdded();
      }

      console.log('Comment deleted successfully:', commentId);
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment. Please try again.');
    } finally {
      setDeletingCommentId(null);
    }
  };


  const handleEditComment = async (commentId: string) => {
    if (!user || !editCommentText.trim()) return;
    
    setIsEditing(true);
    try {
      // Update comment in local state
      const updatedComments = comments.map(c => 
        c.id === commentId 
          ? { ...c, comment_text: editCommentText.trim() }
          : c
      );
      setComments(updatedComments);

      // Update chirp in localStorage
      const localChirps = JSON.parse(localStorage.getItem('localChirps') || '[]') as ChirpData[];
      const updatedLocalChirps = localChirps.map((c: ChirpData) => 
        c.id === chirp.id 
          ? { 
              ...c, 
              comments: c.comments?.map((comment: CommentData) => 
                comment.id === commentId 
                  ? { ...comment, comment_text: editCommentText.trim() }
                  : comment
              ) || []
            }
          : c
      );
      localStorage.setItem('localChirps', JSON.stringify(updatedLocalChirps));

      // Update chirp in sessionStorage
      const sessionChirps = JSON.parse(sessionStorage.getItem('sessionChirps') || '[]') as ChirpData[];
      const updatedSessionChirps = sessionChirps.map((c: ChirpData) => 
        c.id === chirp.id 
          ? { 
              ...c, 
              comments: c.comments?.map((comment: CommentData) => 
                comment.id === commentId 
                  ? { ...comment, comment_text: editCommentText.trim() }
                  : comment
              ) || []
            }
          : c
      );
      sessionStorage.setItem('sessionChirps', JSON.stringify(updatedSessionChirps));

      // Notify parent component that comment was edited
      if (onCommentAdded) {
        onCommentAdded();
      }

      console.log('Comment edited successfully:', commentId);
    } catch (error) {
      console.error('Error editing comment:', error);
      alert('Failed to edit comment. Please try again.');
    } finally {
      setIsEditing(false);
      setEditingCommentId(null);
      setEditCommentText('');
      setOpenDropdownId(null);
    }
  };

  const startEditing = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditCommentText(comment.comment_text);
    setOpenDropdownId(null);
  };

  const cancelEditing = () => {
    setEditingCommentId(null);
    setEditCommentText('');
    setOpenDropdownId(null);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{backgroundColor: 'rgba(40, 40, 40, 0.5)'}}
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl shadow-2xl max-h-[80vh] flex flex-col overflow-hidden"
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
              Comments
            </h2>
            <p className="text-sm text-gray-600">
              Join the conversation and share your thoughts
            </p>
          </div>
        </div>

        {/* Chirp Preview */}
        <div className="px-6 pb-0 pt-4 border-b border-gray-100 bg-white/60">
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
        <div className="flex-1 overflow-y-auto px-6 py-4 bg-white/40">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => {
                // Check if current user can delete this comment
                const canDelete = user && (
                  comment.user.id === user.id || // Comment author
                  chirp.user.id === user.id      // Chirp author
                );
                
                // Check if current user can edit this comment (only comment author)
                const canEdit = user && comment.user.id === user.id;
                
                // Debug logging
                console.log('Comment debug:', {
                  commentUserId: comment.user.id,
                  currentUserId: user?.id,
                  commentUserEmail: comment.user.email,
                  currentUserEmail: user?.email,
                  canEdit,
                  canDelete
                });
                
                // Get updated user data for current user's comments (triggered by profileUpdateTrigger)
                const getCommentUserData = (comment: Comment) => {
                  if (user && comment.user.id === user.id) {
                    try {
                      const storedProfile = localStorage.getItem(`dev_profile_${user.id}`);
                      if (storedProfile) {
                        const profile = JSON.parse(storedProfile);
                        return {
                          ...comment.user,
                          full_name: profile.full_name || user.user_metadata?.full_name || comment.user.full_name,
                          avatar_url: profile.avatar_url || user.user_metadata?.avatar_url || comment.user.avatar_url,
                          username: profile.username || user.user_metadata?.username
                        };
                      }
                    } catch (error) {
                      console.error('Error loading profile for comment display:', error);
                    }
                  }
                  return comment.user;
                };

                const commentUserData = getCommentUserData(comment);

                return (
                  <div key={comment.id} className="flex items-start space-x-3">
                    <UserAvatar user={commentUserData} size="sm" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">
                            {commentUserData.full_name || commentUserData.email?.split('@')[0] || 'Solo Traveler'}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(comment.created_at)}
                          </span>
                        </div>
                        {canDelete && (
                          <div className="relative">
                            <button
                              onClick={() => setOpenDropdownId(openDropdownId === comment.id ? null : comment.id)}
                              className="p-1 hover:bg-gray-100 rounded transition-colors duration-300 comment-dropdown-trigger"
                              title="Comment options"
                            >
                              <MoreHorizontal className="h-4 w-4 text-gray-500" />
                            </button>
                            
                            {openDropdownId === comment.id && (
                              <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-10 comment-dropdown">
                                {canEdit && (
                                  <button
                                    onClick={() => startEditing(comment)}
                                    className="w-full flex items-center space-x-2 px-3 py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-300 rounded-lg"
                                  >
                                    <Edit className="h-4 w-4" />
                                    <span className="text-sm">Edit</span>
                                  </button>
                                )}
                                {/* Temporary: Show edit for debugging */}
                                {!canEdit && user && (
                                  <button
                                    onClick={() => startEditing(comment)}
                                    className="w-full flex items-center space-x-2 px-3 py-2 text-orange-600 hover:bg-orange-50 transition-colors duration-300 rounded-lg"
                                  >
                                    <Edit className="h-4 w-4" />
                                    <span className="text-sm">Edit (Debug)</span>
                                  </button>
                                )}
                                <button
                                  onClick={() => {
                                    if (confirm('Are you sure you want to delete this comment?')) {
                                      handleDeleteComment(comment.id);
                                    }
                                    setOpenDropdownId(null);
                                  }}
                                  disabled={deletingCommentId === comment.id}
                                  className="w-full flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 transition-colors duration-300 rounded-lg disabled:opacity-50"
                                >
                                  {deletingCommentId === comment.id ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                  ) : (
                                    <Trash2 className="h-4 w-4" />
                                  )}
                                  <span className="text-sm">Delete</span>
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {editingCommentId === comment.id ? (
                        <div className="space-y-2">
                          <textarea
                            value={editCommentText}
                            onChange={(e) => setEditCommentText(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors text-sm"
                            rows={2}
                            maxLength={500}
                          />
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              {editCommentText.length}/500 characters
                            </span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleEditComment(comment.id)}
                                disabled={isEditing || !editCommentText.trim()}
                                className="flex items-center space-x-1 px-3 py-1 bg-primary-400 text-white rounded-full text-xs font-medium hover:bg-primary-500 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {isEditing ? (
                                  <Loader2 className="h-3 w-3 animate-spin" />
                                ) : (
                                  <Check className="h-3 w-3" />
                                )}
                                <span>Save</span>
                              </button>
                              <button
                                onClick={cancelEditing}
                                disabled={isEditing}
                                className="flex items-center space-x-1 px-3 py-1 bg-gray-500 text-white rounded-full text-xs font-medium hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <XIcon className="h-3 w-3" />
                                <span>Cancel</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 text-sm">{comment.comment_text}</p>
                      )}
                    </div>
                  </div>
                );
              })}
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
          <div className="px-6 pb-6 pt-4 border-t border-gray-200 bg-white/60">
            <div className="flex items-end space-x-3">
              <UserAvatar user={user} size="sm" />
              <div className="flex-1">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-3 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
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
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-400 text-white rounded-full text-sm font-medium hover:bg-primary-500 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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