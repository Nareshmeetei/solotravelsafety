import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Search, MoreHorizontal, User, Check, CheckCheck, MessageSquare } from 'lucide-react';
// TODO: Import auth when rebuilding
// import { useAuth } from '../contexts/AuthContext';
import UserAvatar from './UserAvatar';

interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
  is_read: boolean;
}

interface Conversation {
  id: string;
  user: {
    id: string;
    full_name?: string;
    avatar_url?: string;
    email?: string;
  };
  last_message?: Message;
  unread_count: number;
}

interface DMModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DMModal: React.FC<DMModalProps> = ({ isOpen, onClose }) => {
  // TODO: Get user from auth context when rebuilding
  const user = null; // TODO: Get user from auth context
  const [activeView, setActiveView] = useState<'conversations' | 'chat'>('conversations');
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      loadConversations();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadConversations = async () => {
    if (!user) return;

    try {
      // Load conversations from localStorage
      const storedConversations = JSON.parse(localStorage.getItem('dm_conversations') || '[]');
      
      // Filter conversations for current user
      const userConversations = storedConversations.filter((conv: any) => 
        conv.participants.includes(user.id)
      );

      // Transform to match our interface
      const transformedConversations: Conversation[] = userConversations.map((conv: any) => ({
        id: conv.id,
        user: conv.participants.find((p: any) => p.id !== user.id) || {
          id: 'unknown',
          full_name: 'Unknown User',
          email: 'unknown@example.com'
        },
        last_message: conv.last_message,
        unread_count: conv.unread_count || 0
      }));

      setConversations(transformedConversations);
    } catch (error) {
      console.error('Error loading conversations:', error);
    }
  };

  const loadMessages = async (conversationId: string) => {
    try {
      // Load messages from localStorage
      const storedMessages = JSON.parse(localStorage.getItem(`dm_messages_${conversationId}`) || '[]');
      setMessages(storedMessages);
    } catch (error) {
      console.error('Error loading messages:', error);
      setMessages([]);
    }
  };

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    setActiveView('chat');
    loadMessages(conversation.id);
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user || !selectedConversation) return;

    setIsSending(true);
    try {
      const message: Message = {
        id: Date.now().toString(),
        sender_id: user.id,
        receiver_id: selectedConversation.user.id,
        content: newMessage.trim(),
        created_at: new Date().toISOString(),
        is_read: false
      };

      // Add message to local state
      setMessages(prev => [...prev, message]);
      setNewMessage('');

      // Save to localStorage
      const conversationId = selectedConversation.id;
      const storedMessages = JSON.parse(localStorage.getItem(`dm_messages_${conversationId}`) || '[]');
      storedMessages.push(message);
      localStorage.setItem(`dm_messages_${conversationId}`, JSON.stringify(storedMessages));

      // Update conversation's last message
      const updatedConversations = conversations.map(conv => 
        conv.id === conversationId 
          ? { ...conv, last_message: message }
          : conv
      );
      setConversations(updatedConversations);
      localStorage.setItem('dm_conversations', JSON.stringify(updatedConversations));

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageTime = (dateString: string) => {
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

  const filteredConversations = conversations.filter(conv =>
    conv.user.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.user.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
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
              Messages
            </h2>
            <p className="text-sm text-gray-600">
              Connect with fellow solo female travelers
            </p>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="px-6 pb-6 pt-4 text-center">
          <MessageSquare className="h-16 w-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-display text-gray-900 mb-3">Coming Soon!</h3>
          <p className="text-gray-600">
            We're working hard to bring you direct messaging with other solo female travelers. 
            Stay tuned for this exciting feature!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DMModal; 