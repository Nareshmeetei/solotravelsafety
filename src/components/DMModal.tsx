import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Search, MoreHorizontal, User, Check, CheckCheck, MessageSquare } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
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
  const { user } = useAuth();
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-display text-gray-900">Messages</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Coming Soon Content */}
        <div className="p-8 text-center">
          <MessageSquare className="h-16 w-16 text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-display text-gray-900 mb-3">Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            We're working hard to bring you direct messaging with other solo female travelers. 
            Stay tuned for this exciting feature!
          </p>
          <div className="bg-gradient-to-r from-primary-400 to-secondary-teal-400 text-white px-6 py-3 rounded-xl font-semibold">
            Connect with fellow travelers soon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default DMModal; 