import React, { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  MapPin, 
  Shield, 
  Users, 
  Clock, 
  ThumbsUp, 
  MessageSquare, 
  Bookmark,
  Filter,
  Search,
  Globe,
  AlertTriangle,
  Heart,
  Star,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

interface SafetyTip {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
    location: string;
  };
  title: string;
  content: string;
  category: 'general' | 'transport' | 'accommodation' | 'cultural' | 'emergency';
  destination?: {
    city: string;
    country: string;
  };
  tags: string[];
  helpful_count: number;
  created_at: string;
  is_verified: boolean;
}

const SafetyTips: React.FC = () => {
  const { user } = useAuth();
  const [tips, setTips] = useState<SafetyTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: 'all', label: 'All Tips', icon: Lightbulb },
    { value: 'general', label: 'General Safety', icon: Shield },
    { value: 'transport', label: 'Transportation', icon: MapPin },
    { value: 'accommodation', label: 'Accommodation', icon: Users },
    { value: 'cultural', label: 'Cultural Tips', icon: Globe },
    { value: 'emergency', label: 'Emergency', icon: AlertTriangle }
  ];

  useEffect(() => {
    loadSafetyTips();
  }, []);

  const loadSafetyTips = async () => {
    try {
      // Mock data for safety tips from other users
      const mockTips: SafetyTip[] = [
        {
          id: '1',
          user: {
            name: 'Sarah Chen',
            initials: 'SC',
            location: 'San Francisco, USA'
          },
          title: 'Always carry a portable phone charger',
          content: 'Your phone is your lifeline when traveling solo. I learned this the hard way in Bangkok when my phone died and I couldn\'t access my maps or translation app. Now I always carry a portable charger and keep it charged. It\'s saved me countless times!',
          category: 'general',
          destination: {
            city: 'Bangkok',
            country: 'Thailand'
          },
          tags: ['phone safety', 'essential items', 'navigation'],
          helpful_count: 127,
          created_at: '2 days ago',
          is_verified: true
        },
        {
          id: '2',
          user: {
            name: 'Maria Rodriguez',
            initials: 'MR',
            location: 'Barcelona, Spain'
          },
          title: 'Research local dress codes before arriving',
          content: 'In many countries, how you dress can significantly impact your safety and how locals treat you. Before visiting Morocco, I researched appropriate clothing and packed accordingly. This helped me blend in better and avoid unwanted attention. Always check local customs!',
          category: 'cultural',
          destination: {
            city: 'Marrakech',
            country: 'Morocco'
          },
          tags: ['dress code', 'cultural respect', 'harassment prevention'],
          helpful_count: 89,
          created_at: '5 days ago',
          is_verified: false
        },
        {
          id: '3',
          user: {
            name: 'Priya Sharma',
            initials: 'PS',
            location: 'Mumbai, India'
          },
          title: 'Use women-only train cars when available',
          content: 'Many cities in Asia have women-only train cars during rush hours. In Tokyo, these pink cars are clearly marked and provide a much more comfortable experience. Even if they\'re more crowded, I always choose them over mixed cars for safety and peace of mind.',
          category: 'transport',
          destination: {
            city: 'Tokyo',
            country: 'Japan'
          },
          tags: ['public transport', 'women-only spaces', 'rush hour'],
          helpful_count: 156,
          created_at: '1 week ago',
          is_verified: true
        },
        {
          id: '4',
          user: {
            name: 'Emma Thompson',
            initials: 'ET',
            location: 'London, UK'
          },
          title: 'Book female-only dorms in hostels',
          content: 'Female-only dorms are worth the extra cost for safety and comfort. I\'ve stayed in mixed dorms before and while most experiences were fine, I sleep much better knowing I\'m in a women-only space. Many hostels offer this option - just ask when booking!',
          category: 'accommodation',
          destination: {
            city: 'Amsterdam',
            country: 'Netherlands'
          },
          tags: ['hostels', 'female-only', 'accommodation safety'],
          helpful_count: 203,
          created_at: '1 week ago',
          is_verified: false
        },
        {
          id: '5',
          user: {
            name: 'Lisa Kim',
            initials: 'LK',
            location: 'Seoul, South Korea'
          },
          title: 'Learn basic emergency phrases in local language',
          content: 'Before traveling anywhere, I learn how to say "Help", "Police", "Hospital", and "I don\'t speak [language]" in the local language. Write them down on a card too. This has helped me communicate in emergency situations and shows locals you\'ve made an effort to learn their language.',
          category: 'emergency',
          tags: ['language', 'emergency phrases', 'communication'],
          helpful_count: 94,
          created_at: '2 weeks ago',
          is_verified: true
        },
        {
          id: '6',
          user: {
            name: 'Anna Kowalski',
            initials: 'AK',
            location: 'Warsaw, Poland'
          },
          title: 'Trust your instincts about people and places',
          content: 'If something feels off, it probably is. I was in Istanbul and a man kept following me through the Grand Bazaar. Instead of ignoring my gut feeling, I went into a shop and asked for help. The shopkeeper confirmed the man had been acting suspiciously. Always trust your instincts!',
          category: 'general',
          destination: {
            city: 'Istanbul',
            country: 'Turkey'
          },
          tags: ['intuition', 'personal safety', 'awareness'],
          helpful_count: 178,
          created_at: '2 weeks ago',
          is_verified: false
        },
        {
          id: '7',
          user: {
            name: 'Rachel Green',
            initials: 'RG',
            location: 'New York, USA'
          },
          title: 'Share your location with trusted contacts',
          content: 'I use Find My Friends to share my location with my family and close friends when traveling. I also send them my itinerary and check in regularly. It gives both me and them peace of mind, and they know where to look if something goes wrong.',
          category: 'general',
          tags: ['location sharing', 'family contact', 'check-ins'],
          helpful_count: 145,
          created_at: '3 weeks ago',
          is_verified: true
        },
        {
          id: '8',
          user: {
            name: 'Sophie Martin',
            initials: 'SM',
            location: 'Paris, France'
          },
          title: 'Research safe neighborhoods before booking accommodation',
          content: 'Don\'t just look at price and reviews - research the neighborhood safety. I use Google Street View to virtually walk around areas during day and night. Local Facebook groups and Reddit are great for getting real opinions about different areas from other travelers.',
          category: 'accommodation',
          tags: ['neighborhood research', 'accommodation location', 'safety research'],
          helpful_count: 112,
          created_at: '3 weeks ago',
          is_verified: false
        }
      ];

      setTips(mockTips);
    } catch (error) {
      console.error('Error loading safety tips:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tip.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tip.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'helpful':
        return b.helpful_count - a.helpful_count;
      case 'recent':
      default:
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.value === category);
    return categoryData?.icon || Lightbulb;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general': return 'bg-blue-100 text-blue-800';
      case 'transport': return 'bg-green-100 text-green-800';
      case 'accommodation': return 'bg-purple-100 text-purple-800';
      case 'cultural': return 'bg-orange-100 text-orange-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white pt-24 pb-8 sm:pb-12 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-display text-gray-900 mb-3 sm:mb-4 animate-fade-in-up">
              Safety Tips
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Learn from the experiences of solo female travelers worldwide. Real tips from real women who've been there.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            {/* Search Bar */}
            <div className="relative mb-4 sm:mb-6">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search safety tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <div className="sm:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-left"
              >
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span className="font-medium text-gray-900 text-sm">Filters & Sort</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Filters - Mobile Collapsible, Desktop Always Visible */}
            <div className={`space-y-4 ${showFilters ? 'block' : 'hidden'} sm:block`}>
              {/* Category Filters */}
              <div>
                <h4 className="text-sm font-display text-gray-700 mb-3 sm:hidden">Categories</h4>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-4 py-2 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                        selectedCategory === category.value
                          ? 'bg-primary-400 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">{category.label}</span>
                      <span className="sm:hidden text-xs">{category.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Sort Options */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                </div>
                
                <div className="text-sm text-gray-600">
                  {filteredTips.length} tips found
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="px-4 pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading safety tips...</p>
            </div>
          ) : filteredTips.length === 0 ? (
            <div className="text-center py-12">
              <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-display text-gray-900 mb-2">No tips found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find more safety tips.</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {filteredTips.map((tip) => {
                const CategoryIcon = getCategoryIcon(tip.category);
                
                return (
                  <div key={tip.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-400 to-secondary-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {tip.user.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">{tip.user.name}</span>
                            {tip.is_verified && (
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white fill-current" />
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                            <span className="truncate">{tip.user.location}</span>
                            <span>•</span>
                            <span className="flex-shrink-0">{tip.created_at}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tip.category)}`}>
                          <CategoryIcon className="h-3 w-3" />
                          <span className="hidden sm:inline capitalize">{tip.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-display text-gray-900 mb-2 sm:mb-3">{tip.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{tip.content}</p>
                    </div>

                    {/* Destination */}
                    {tip.destination && (
                      <div className="flex items-center space-x-2 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>Experience from {tip.destination.city}, {tip.destination.country}</span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tip.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-gray-100 space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-600">
                        <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                          <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Helpful ({tip.helpful_count})</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                          <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Comment</span>
                        </button>
                        <button className="flex items-center space-x-2 hover:text-primary-400 transition-colors duration-300">
                          <Bookmark className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Save</span>
                        </button>
                      </div>
                      
                      <div className="text-xs sm:text-sm text-gray-500">
                        Helped {tip.helpful_count} travelers
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SafetyTips;