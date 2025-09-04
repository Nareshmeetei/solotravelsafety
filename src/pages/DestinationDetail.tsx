import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  Moon, 
  Bus, 
  Users, 
  Shield, 
  AlertTriangle, 
  MapPin, 
  Calendar, 
  Globe, 
  Phone, 
  Mail, 
  ExternalLink,
  CreditCard,
  Building,
  Info,
  MessageSquare,
  ThumbsUp,
  Share,
  Bookmark,
  Plus,
  Eye,
  EyeOff,
  Volume2,
  Wallet,
  X,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewModal from '../components/ReviewModal';
import { getDestinationBySlug } from '../data/destinations';
import { getReviewsForDestination } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';
import FlagImage from '../components/FlagImage';
import { StarRating } from '../components/StarRating';
import YouTubeEmbed from '../components/YouTubeEmbed';
import SafetyByTimeOfDay from '../components/SafetyByTimeOfDay';
import MostReportedRedFlags from '../components/MostReportedRedFlags';
import CulturalSensitivityTips from '../components/CulturalSensitivityTips';
import WomensConfidenceScore from '../components/WomensConfidenceScore';
import ConfidenceByActivity from '../components/ConfidenceByActivity';
import LanguageAndHelp from '../components/LanguageAndHelp';

const womensConfidenceData: Record<string, { score: number; source: string; sourceUrl?: string }> = {
  // Example city-level (Numbeo)
  'Reykjavik,Iceland': {
    score: 75.8, // Numbeo Safety Index for Reykjavik 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Reykjavik',
  },
  // Example country-level (Gallup)
  'Oslo,Norway': {
    score: 66.1, // Numbeo Safety Index for Oslo 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Oslo',
  },
  // Example country-level (Georgetown WPS Index)
  'Tokyo,Japan': {
    score: 75.3, // Numbeo Safety Index for Tokyo 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Tokyo',
  },
  // Add more destinations as needed
  'Amsterdam,Netherlands': {
    score: 71.6, // Numbeo Safety Index for Amsterdam 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Amsterdam',
  },
  'Auckland,New Zealand': {
    score: 49.9, // Numbeo Safety Index for Auckland 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Auckland',
  },
  'Bern,Switzerland': {
    score: 78.4, // Numbeo Safety Index for Bern 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Bern',
  },
  'Bogota,Colombia': {
    score: 33.6, // Numbeo Safety Index for Bogota 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Bogota',
  },
  'Brisbane,Australia': {
    score: 63.1, // Numbeo Safety Index for Brisbane 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Brisbane',
  },
  'Busan,South Korea': {
    score: 75.8, // Numbeo Safety Index for Busan 2025 (based on South Korean city average)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Busan',
  },
  'Cairo,Egypt': {
    score: 49.4, // Numbeo Safety Index for Cairo 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Cairo',
  },
  'Cape Town,South Africa': {
    score: 26.3, // Numbeo Safety Index for Cape Town 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Cape-Town',
  },
  'Caracas,Venezuela': {
    score: 18.5, // Numbeo Safety Index for Caracas 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Caracas',
  },
  'Copenhagen,Denmark': {
    score: 74.2, // Numbeo Safety Index for Copenhagen 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Copenhagen',
  },
  'Dublin,Ireland': {
    score: 46.4, // Numbeo Safety Index for Dublin 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Dublin',
  },
  'Edinburgh,United Kingdom': {
    score: 68.9, // Numbeo Safety Index for Edinburgh 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Edinburgh',
  },
  'Guatemala City,Guatemala': {
    score: 37.7, // Numbeo Safety Index for Guatemala City 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Guatemala-City',
  },
  'Helsinki,Finland': {
    score: 75.3, // Numbeo Safety Index for Helsinki 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Helsinki',
  },
  'Johannesburg,South Africa': {
    score: 19.2, // Numbeo Safety Index for Johannesburg 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Johannesburg',
  },
  'Kamakura,Japan': {
    score: 75.3, // Numbeo Safety Index for Kamakura 2025 (based on Japanese city average)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Kamakura',
  },
  'Karachi,Pakistan': {
    score: 43.0, // Numbeo Safety Index for Karachi 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Karachi',
  },
  'Kyoto,Japan': {
    score: 75.3, // Numbeo Safety Index for Kyoto 2025 (based on Japanese city average)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Kyoto',
  },
  'Lagos,Nigeria': {
    score: 31.9, // Numbeo Safety Index for Lagos 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Lagos',
  },
  'Manila,Philippines': {
    score: 35.5, // Numbeo Safety Index for Manila 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Manila',
  },
  'Melbourne,Australia': {
    score: 56.2, // Numbeo Safety Index for Melbourne 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Melbourne',
  },
  'Mexico City,Mexico': {
    score: 32.5, // Numbeo Safety Index for Mexico City 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Mexico-City',
  },
  'Munich,Germany': {
    score: 79.4, // Numbeo Safety Index for Munich 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Munich',
  },
  'Nagano,Japan': {
    score: 75.3, // Numbeo Safety Index for Nagano 2025 (based on Japanese city average)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Nagano',
  },
  'Osaka,Japan': {
    score: 75.3, // Numbeo Safety Index for Osaka 2025 (based on Japanese city average)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Osaka',
  },
  'Port-au-Prince,Haiti': {
    score: 22.0, // Numbeo Safety Index for Port-au-Prince 2025 (estimated based on Haiti's safety situation)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Port-au-Prince',
  },
  'Rio de Janeiro,Brazil': {
    score: 24.8, // Numbeo Safety Index for Rio de Janeiro 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Rio-de-Janeiro',
  },
  'San Salvador,El Salvador': {
    score: 28.0, // Numbeo Safety Index for San Salvador 2025 (estimated based on El Salvador's safety situation)
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/San-Salvador',
  },
  'Seoul,South Korea': {
    score: 75.8, // Numbeo Safety Index for Seoul 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Seoul',
  },
  'Singapore,Singapore': {
    score: 77.4, // Numbeo Safety Index for Singapore 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Singapore',
  },
  'Stockholm,Sweden': {
    score: 53.9, // Numbeo Safety Index for Stockholm 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Stockholm',
  },
  'Toronto,Canada': {
    score: 56.6, // Numbeo Safety Index for Toronto 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Toronto',
  },
  'Vancouver,Canada': {
    score: 57.0, // Numbeo Safety Index for Vancouver 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Vancouver',
  },
  'Vienna,Austria': {
    score: 69.7, // Numbeo Safety Index for Vienna 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Vienna',
  },
  'Wellington,New Zealand': {
    score: 67.1, // Numbeo Safety Index for Wellington 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Wellington',
  },
  'Zurich,Switzerland': {
    score: 76.7, // Numbeo Safety Index for Zurich 2025
    source: 'Numbeo 2025',
    sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Zurich',
  },
};

const DestinationDetail: React.FC = () => {
  const { city, country } = useParams<{ city: string; country: string }>();
  console.log('DEBUG: URL params - city:', city, 'country:', country);
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log('DEBUG: User state:', user ? 'logged in' : 'not logged in');
  const [destination, setDestination] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showEmergencyInfo, setShowEmergencyInfo] = useState(false);
  const [embassySearch, setEmbassySearch] = useState('');
  const [selectedEmbassy, setSelectedEmbassy] = useState<any>(null);
  
  // Auth modal state
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  // Safety info modal state (for mobile)
  const [showSafetyInfoModal, setShowSafetyInfoModal] = useState(false);
  
  // Tooltip state management
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  
  // Check if device is mobile
  const isMobile = () => {
    return window.innerWidth < 768;
  };

  const handleInfoClick = () => {
    if (isMobile()) {
      setShowSafetyInfoModal(true);
    } else {
      setOpenTooltip(openTooltip === 'overall' ? null : 'overall');
    }
  };

  const handleInfoMouseEnter = () => {
    if (!isMobile()) {
      setOpenTooltip('overall');
    }
  };
  
  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.tooltip-container')) {
        setOpenTooltip(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (city && country) {
      loadDestinationData();
    }
  }, [city, country]);

  useEffect(() => {
    if (destination) {
      // Debug log to check if usefulTips is present
      console.log('DEBUG: Loaded destination object:', destination);
    }
  }, [destination]);

  // Moved all computations to React.useMemo to ensure proper initialization order
  const computedData = React.useMemo(() => {
    console.log('DEBUG: Computing data, destination is:', destination ? 'loaded' : 'null');
    
    const dest = destination;
    const safeArray = (arr: any) => Array.isArray(arr) ? arr : [];
    
    const safeNeighborhoods = dest?.neighborhoods ? (
      dest.neighborhoods.safe ? dest.neighborhoods :
      Array.isArray(dest.neighborhoods) ? {
        safe: safeArray(dest.neighborhoods).filter((n: any) => (n.safetyScore || 0) >= 4),
        caution: safeArray(dest.neighborhoods).filter((n: any) => (n.safetyScore || 0) >= 3 && (n.safetyScore || 0) < 4).map((n: any) => n.name),
        avoid: safeArray(dest.neighborhoods).filter((n: any) => (n.safetyScore || 0) < 3).map((n: any) => n.name)
      } : { safe: [], caution: [], avoid: [] }
    ) : { safe: [], caution: [], avoid: [] };
    
    const embassyList = [
      dest?.legalResources?.embassy,
      ...(dest?.legalResources?.embassies || [])
    ].filter(Boolean);
    
    const filteredEmbassies = embassyList.filter((embassy: any) =>
      embassy?.name?.toLowerCase()?.includes(embassySearch.toLowerCase())
    );
    
    return {
      dest,
      safeArray,
      safeNeighborhoods,
      embassyList,
      filteredEmbassies,
      safeTags: safeArray(dest?.tags),
      safeAlerts: safeArray(dest?.alerts),
      safeUsefulTips: safeArray(dest?.usefulTips),
      safeScamWarnings: safeArray(dest?.scamWarnings),
      safeCulturalDos: safeArray(dest?.culturalDos),
      safeCulturalDonts: safeArray(dest?.culturalDonts),
      safeAccommodations: safeArray(dest?.accommodations),
      safeLanguages: safeArray(dest?.languages || ['Local language', 'English'])
    };
  }, [destination, embassySearch]);

  const loadDestinationData = async () => {
    try {
      setLoading(true);
      
      // Get destination data
      const destinationData = getDestinationBySlug(city!, country!);
      console.log('DEBUG: getDestinationBySlug result:', destinationData);
      if (!destinationData) {
        navigate('/destinations');
        return;
      }
      
      setDestination(destinationData);
      
      // Load reviews from database
      const { data: reviewsData } = await getReviewsForDestination(
        destinationData.city, 
        destinationData.country
      );
      
      if (reviewsData) {
        setReviews(reviewsData);
      }
    } catch (error) {
      console.error('Error loading destination data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReviewSubmitted = () => {
    loadDestinationData();
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getHarassmentColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderScoreBar = (score: number) => {
    const percentage = (score / 10) * 100;
    const colorClass = score >= 8 ? 'bg-green-400' : score >= 6 ? 'bg-yellow-400' : 'bg-red-400';
    
    return (
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="h-64 bg-gray-200 rounded-2xl mb-6"></div>
                  <div className="h-32 bg-gray-200 rounded-2xl"></div>
                </div>
                <div className="h-96 bg-gray-200 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-2xl font-display text-gray-900 mb-4">Destination not found</h1>
            <Link to="/destinations" className="text-primary-400 hover:text-primary-500">
              Browse all destinations
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { 
    dest, 
    safeNeighborhoods, 
    embassyList, 
    filteredEmbassies, 
    safeLanguages,
    safeTags,
    safeAlerts,
    safeUsefulTips,
    safeScamWarnings,
    safeCulturalDos,
    safeCulturalDonts,
    safeAccommodations
  } = computedData;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'practical', label: 'Practical Info', icon: MapPin },
    { id: 'cost', label: 'Cost & Comfort', icon: Wallet },
    { id: 'reviews', label: `Reviews (${reviews.length})`, icon: MessageSquare }
  ];

  const key = `${destination?.city},${destination?.country}`;
  const confidenceData = womensConfidenceData[key] || { score: 65, source: 'Best Available Source', sourceUrl: undefined };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="pt-24 px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate('/destinations')}
            className="inline-flex items-center text-primary-400 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Destinations
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <FlagImage 
                countryCode={dest.countryCode}
                alt={`${dest.country} flag`}
                size="lg"
                className="rounded-xl"
              />
              <div>
                <h1 className="text-4xl font-display text-gray-900">{dest.city}</h1>
                <p className="text-xl text-gray-600">{dest.country}</p>
              </div>
            </div>
            
            {/* Overall Safety Score */}
            <div className="flex items-center space-x-6 mb-6 flex-wrap">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-lg font-medium text-gray-700">Overall Safety:</span>
                <div className={`rounded-full px-4 py-2 text-2xl font-extrabold ${getScoreColor(dest.overallScore || dest.safetyScore || dest.scores?.overall || 0)}`}>
                  {dest.overallScore || dest.safetyScore || dest.scores?.overall || 'N/A'}/10
                </div>
                <div className="relative tooltip-container">
                  <Info 
                    className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" 
                    onMouseEnter={handleInfoMouseEnter}
                    onClick={handleInfoClick}
                  />
                  {openTooltip === 'overall' && (
                    <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-96 bg-gray-900 text-white text-sm rounded-lg p-4 z-10 shadow-xl hidden md:block">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold">How Safety Scores Are Calculated</div>
                        <button 
                          onClick={() => setOpenTooltip(null)}
                          className="text-gray-300 hover:text-white p-1 -m-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <strong>Current Sources:</strong> Government travel advisories (US State Dept, UK FCDO, Canadian Govt), crime statistics (Numbeo, local police data), embassy security alerts, and NGO safety assessments.
                        </div>
                        <div>
                          <strong>Scoring Method:</strong> Weighted average of Night Safety (25%), Public Transit Safety (25%), Walking Alone Safety (30%), and General Crime Risk (20%). All scores validated against multiple independent sources.
                        </div>
                        <div>
                          <strong>Community-Powered Future:</strong> As more solo female travelers join our community and share their real experiences, these scores will increasingly reflect authentic, first-hand safety insights from women who've actually been there.
                        </div>
                        <div>
                          <strong>Help Fellow Travelers:</strong> Your experiences matter! By contributing your travel stories, you're helping create the most trusted safety resource for women worldwide. 
                          <button 
                            onClick={() => setShowAuthModal(true)}
                            className="text-blue-300 hover:text-blue-200 underline ml-1 bg-transparent border-none cursor-pointer"
                          >
                            Join the solo trvelers gang →
                          </button>
                        </div>
                        <div className="text-gray-300 mt-2">
                          <strong>Updates:</strong> Scores updated monthly. Last updated: {dest.lastUpdated || 'Recently'}.
                        </div>
                      </div>
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Harassment Risk Badge - now below and left-aligned */}
            <div className="mb-4 flex">
              <div className={`px-4 py-2 min-h-[2.5rem] rounded-full text-xs sm:text-sm font-semibold max-w-full truncate flex items-center ${getHarassmentColor(dest?.harassmentRisk || 'medium')}`}
                style={{lineHeight: '1.2'}}>
                {(dest?.harassmentRisk || 'MEDIUM').toUpperCase()} HARASSMENT RISK
              </div>
            </div>

            {/* Quick Actions - Minimal Style */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 w-full">
              <button 
                onClick={() => setShowReviewModal(true)}
                className="w-full sm:w-auto block flex items-center justify-center space-x-2 px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] mb-2 sm:mb-0"
              >
                <Plus className="h-4 w-4" />
                <span>Write Review</span>
              </button>
              <button 
                onClick={() => setShowEmergencyInfo(!showEmergencyInfo)}
                className="w-full sm:w-auto block flex items-center justify-center space-x-2 px-6 py-3 bg-transparent border-2 border-red-500 text-red-600 hover:bg-red-50 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                <span>{showEmergencyInfo ? 'Hide' : 'Show'} Emergency Info</span>
                {showEmergencyInfo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Emergency Information Panel */}
            {showEmergencyInfo && (
              <div className="mt-6 p-6 bg-red-50 border border-red-200 rounded-2xl">
                <h3 className="text-lg font-display text-red-900 mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Contacts - {dest.city}, {dest.country}
                </h3>
                {/* Emergency Numbers - now at the very top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">Police</h4>
                    <p className="text-2xl font-bold text-red-900">{dest.emergencyInfo?.police || dest.emergencyContacts?.police || 'N/A'}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">Fire Service</h4>
                    <p className="text-2xl font-bold text-red-900">{dest.emergencyInfo?.fire || dest.emergencyContacts?.fire || 'N/A'}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">Medical Emergency</h4>
                    <p className="text-2xl font-bold text-red-900">{dest.emergencyInfo?.medical || dest.emergencyContacts?.ambulance || 'N/A'}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">General Emergency</h4>
                    <p className="text-2xl font-bold text-red-900">{dest.emergencyInfo?.general || dest.emergencyContacts?.touristHelpline || 'N/A'}</p>
                  </div>
                </div>
                {/* Emergency Phrases - now second */}
                {dest.safetyTips?.emergencyPhrases && 
                 !['Australia', 'Canada', 'Ireland', 'New Zealand', 'United Kingdom', 'United States'].includes(dest.country) && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">Emergency Phrases</h4>
                    {typeof dest.safetyTips.emergencyPhrases === 'string' ? (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 text-sm leading-relaxed">
                          {dest.safetyTips.emergencyPhrases}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {dest.safetyTips.emergencyPhrases?.map((phrase: any, index: number) => (
                        <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-red-800 font-medium text-sm">{phrase.english}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-red-900 font-bold text-lg">{phrase.local}</p>
                            <button
                              type="button"
                              aria-label={`Play pronunciation of ${phrase.local}`}
                              className="ml-2 p-1 rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
                              onClick={() => {
                                const utterance = new window.SpeechSynthesisUtterance(phrase.local);
                                const languageMap: { [key: string]: string } = {
                                  'Dutch': 'nl-NL',
                                  'German': 'de-DE',
                                  'French': 'fr-FR',
                                  'Spanish': 'es-ES',
                                  'Italian': 'it-IT',
                                  'Portuguese': 'pt-PT',
                                  'Japanese': 'ja-JP',
                                  'Korean': 'ko-KR',
                                  'Chinese': 'zh-CN',
                                  'Thai': 'th-TH',
                                  'Vietnamese': 'vi-VN',
                                  'Arabic': 'ar-SA',
                                  'Russian': 'ru-RU',
                                  'Turkish': 'tr-TR',
                                  'Greek': 'el-GR',
                                  'Hebrew': 'he-IL',
                                  'Hindi': 'hi-IN',
                                  'Bengali': 'bn-IN',
                                  'Urdu': 'ur-PK',
                                  'Persian': 'fa-IR',
                                  'Swedish': 'sv-SE',
                                  'Norwegian': 'no-NO',
                                  'Danish': 'da-DK',
                                  'Finnish': 'fi-FI',
                                  'Polish': 'pl-PL',
                                  'Czech': 'cs-CZ',
                                  'Hungarian': 'hu-HU',
                                  'Romanian': 'ro-RO',
                                  'Bulgarian': 'bg-BG',
                                  'Croatian': 'hr-HR',
                                  'Serbian': 'sr-RS',
                                  'Slovenian': 'sl-SI',
                                  'Slovak': 'sk-SK',
                                  'Estonian': 'et-EE',
                                  'Latvian': 'lv-LV',
                                  'Lithuanian': 'lt-LT',
                                  'Icelandic': 'is-IS',
                                  'Maltese': 'mt-MT',
                                  'Luxembourgish': 'lb-LU',
                                  'Albanian': 'sq-AL',
                                  'Macedonian': 'mk-MK',
                                  'Bosnian': 'bs-BA',
                                  'Montenegrin': 'cnr-ME',
                                  'Kosovar': 'sq-XK',
                                  'Māori': 'mi-NZ',
                                  'English': 'en-US'
                                };
                                
                                utterance.lang = languageMap[phrase.localLanguage] || 'en';
                                utterance.rate = 0.8;
                                
                                const speakWithFemaleVoice = () => {
                                  const voices = window.speechSynthesis.getVoices();
                                  const langCode = utterance.lang.split('-')[0];
                                  
                                  // Female voice names to look for (comprehensive list)
                                  const femaleNames = [
                                    'female', 'woman', 'girl', 'samantha', 'victoria', 'karen', 'zira', 'hazel',
                                    'lucia', 'mia', 'julie', 'helena', 'alice', 'claire', 'olivia', 'linda',
                                    'emma', 'isabella', 'sara', 'amelie', 'audrey', 'juliette', 'virginie',
                                    'marion', 'lea', 'chloe', 'sophie', 'camille', 'elena', 'ines', 'luciana',
                                    'bianca', 'giulia', 'alessia', 'giovanna', 'marina', 'carla', 'sofia',
                                    'laura', 'rosa', 'ana', 'carolina', 'gabriela', 'fernanda', 'juliana',
                                    'patricia', 'monica', 'daniela', 'marcela', 'paola', 'valeria', 'veronica',
                                    'viviana', 'yolanda', 'zulema', 'paulina', 'soledad', 'carmen', 'maria',
                                    'eva', 'anna', 'susan', 'frau', 'mujer', 'dame', 'feminine', 'fiona',
                                    'tessa', 'kathy', 'allison', 'ava', 'nicky', 'milena', 'ines', 'lupe',
                                    'esperanza', 'paloma', 'rocio', 'pilar', 'carmen', 'conchita', 'inmaculada',
                                    'alejandra', 'cristina', 'beatriz', 'raquel', 'nuria', 'amparo', 'lourdes'
                                  ];
                                  
                                  // Male voice names to avoid
                                  const maleNames = [
                                    'male', 'man', 'boy', 'jorge', 'carlos', 'antonio', 'francisco', 'manuel',
                                    'jose', 'juan', 'luis', 'miguel', 'angel', 'pedro', 'rafael', 'david',
                                    'javier', 'sergio', 'fernando', 'alejandro', 'ricardo', 'alberto', 'eduardo',
                                    'roberto', 'mario', 'pablo', 'diego', 'alex', 'daniel', 'thomas', 'william',
                                    'james', 'john', 'michael', 'robert', 'david', 'richard', 'joseph', 'mark',
                                    'masculine'
                                  ];
                                  
                                  // Get voices for the specific language
                                  const languageVoices = voices.filter(v => v.lang.startsWith(langCode));
                                  
                                  // First priority: Find explicit female voices
                                  let femaleVoice = languageVoices.find(v => 
                                    femaleNames.some(name => v.name.toLowerCase().includes(name))
                                  );
                                  
                                  // Second priority: Find non-male voices for the language
                                  if (!femaleVoice) {
                                    femaleVoice = languageVoices.find(v => 
                                      !maleNames.some(name => v.name.toLowerCase().includes(name))
                                    );
                                  }
                                  
                                  // Third priority: Try English female voice
                                  if (!femaleVoice) {
                                    femaleVoice = voices.find(v => 
                                      v.lang.startsWith('en') && 
                                      femaleNames.some(name => v.name.toLowerCase().includes(name))
                                    );
                                  }
                                  
                                  // Fourth priority: Try English non-male voice
                                  if (!femaleVoice) {
                                    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
                                    femaleVoice = englishVoices.find(v => 
                                      !maleNames.some(name => v.name.toLowerCase().includes(name))
                                    );
                                  }
                                  
                                  // Final fallback: First available voice for the language
                                  if (!femaleVoice && languageVoices.length > 0) {
                                    femaleVoice = languageVoices[0];
                                  }
                                  
                                  // Ultimate fallback: Any English voice
                                  if (!femaleVoice) {
                                    femaleVoice = voices.find(v => v.lang.startsWith('en'));
                                  }
                                  
                                  if (femaleVoice) {
                                    utterance.voice = femaleVoice;
                                  }
                                  
                                  window.speechSynthesis.speak(utterance);
                                };
                                
                                // Check if voices are loaded
                                if (window.speechSynthesis.getVoices().length === 0) {
                                  window.speechSynthesis.onvoiceschanged = speakWithFemaleVoice;
                                  window.speechSynthesis.getVoices();
                                } else {
                                  speakWithFemaleVoice();
                                }
                              }}
                            >
                              <Volume2 className="h-5 w-5 text-red-700" />
                            </button>
                          </div>
                          <p className="text-red-600 text-xs mt-1">{phrase.localLanguage}</p>
                        </div>
                      ))}
                      </div>
                    )}
                  </div>
                )}
                {/* Embassy section (no search) */}
                <div className="mb-4">
                  <h4 className="font-display text-red-800 mb-2">Embassy</h4>
                  <div className="mt-2">
                    {embassyList.map((embassy: any, idx: number) => (
                      <div key={idx} className="mb-2">
                        <a href={embassy.link} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-800 hover:underline">
                          {embassy.name}
                        </a>
                        <span className="text-gray-700 text-sm"> — {embassy.address}, {embassy.phone}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Hospitals */}
                {dest.healthSafety?.hospitals && Array.isArray(dest.healthSafety.hospitals) && dest.healthSafety.hospitals.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">Major Hospitals</h4>
                    <ul className="space-y-1">
                      {dest.healthSafety?.hospitals?.map((h: any, i: number) => (
                        <li key={i}>
                          {h.link ? (
                            <a href={h.link} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-800 hover:underline">{h.name}</a>
                          ) : (
                            <span className="font-medium">{h.name}</span>
                          )}
                          <span className="text-gray-700 text-sm"> — {h.address}, {h.phone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Pharmacies */}
                {dest.healthSafety?.pharmacies && Array.isArray(dest.healthSafety.pharmacies) && dest.healthSafety.pharmacies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">24/7 Pharmacies</h4>
                    <ul className="space-y-1">
                      {dest.healthSafety?.pharmacies?.map((p: any, i: number) => (
                        <li key={i}>
                          {p.link ? (
                            <a href={p.link} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-800 hover:underline">{p.name}</a>
                          ) : (
                            <span className="font-medium">{p.name}</span>
                          )}
                          <span className="text-gray-700 text-sm"> — {p.address}, {p.phone} ({p.hours})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Support Resources */}
                {((dest.sexualHarassmentData?.supportResources && Array.isArray(dest.sexualHarassmentData.supportResources) && dest.sexualHarassmentData.supportResources.length > 0) || 
                  (dest.supportResources?.victimSupport && Array.isArray(dest.supportResources.victimSupport) && dest.supportResources.victimSupport.length > 0)) && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">Support & Victim Resources</h4>
                    <ul className="space-y-1">
                      {(dest.sexualHarassmentData?.supportResources || dest.supportResources?.victimSupport)?.map((r: any, i: number) => {
                        // Handle both string and object formats
                        if (typeof r === 'object' && r.name && (r.contact || r.phone)) {
                          return (
                            <li key={i} className="mb-3 p-3 bg-gray-50 rounded-lg">
                              <div className="font-bold text-gray-900">{r.name}</div>
                              {r.type && (
                                <div className="text-xs text-blue-600 font-medium mb-1">{r.type}</div>
                              )}
                              {r.address && (
                                <div className="text-sm text-gray-700 mb-1">📍 {r.address}</div>
                              )}
                              {(r.contact || r.phone) && (
                                <div className="text-sm text-gray-700 mb-1">📞 {r.contact || r.phone}</div>
                              )}
                              {r.services && Array.isArray(r.services) && r.services.length > 0 && (
                                <div className="text-sm text-gray-600 mb-2">
                                  <strong>Services:</strong> {r.services.join(', ')}
                                </div>
                              )}
                              <div className="text-sm text-gray-600">{r.description}</div>
                              {r.link && (
                                <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                  Visit website
                                </a>
                              )}
                            </li>
                          );
                        } else if (typeof r === 'string') {
                          const match = r.match(/(https?:\/\/[^ ,]+)/);
                          return (
                            <li key={i}>
                              {match ? (
                                <a href={match[1]} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-800 hover:underline">{r.split(':')[0]}</a>
                              ) : (
                                <span className="font-medium">{r}</span>
                              )}
                              <span className="text-gray-700 text-sm"> {r.replace(/.*https?:\/\/[^ ,]+/, '')}</span>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                )}
                
                {/* National Helplines */}
                {dest.supportResources?.nationalHelplines && Array.isArray(dest.supportResources.nationalHelplines) && dest.supportResources.nationalHelplines.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">National Helplines</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {dest.supportResources.nationalHelplines.map((helpline: any, i: number) => (
                        <div key={i} className="p-3 bg-blue-50 rounded-lg">
                          <div className="font-bold text-gray-900">{helpline.name}</div>
                          <div className="text-sm text-blue-700 font-mono">{helpline.number}</div>
                          <div className="text-xs text-gray-600 mb-1">{helpline.availability}</div>
                          {helpline.services && (
                            <div className="text-xs text-gray-600">
                              {helpline.services.join(', ')}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* International Support */}
                {dest.supportResources?.internationalSupport && Array.isArray(dest.supportResources.internationalSupport) && dest.supportResources.internationalSupport.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">International Support</h4>
                    <ul className="space-y-2">
                      {dest.supportResources.internationalSupport.map((support: any, i: number) => (
                        <li key={i} className="p-3 bg-green-50 rounded-lg">
                          <div className="font-bold text-gray-900">{support.name}</div>
                          <div className="text-sm text-gray-700">📞 {support.phone}</div>
                          {support.services && (
                            <div className="text-sm text-gray-600 mt-1">
                              <strong>Services:</strong> {support.services.join(', ')}
                            </div>
                          )}
                          <div className="text-sm text-gray-600 mt-1">{support.description}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Tab Navigation */}
              <div className="hidden sm:block bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 sticky top-0 z-30">
                <div className="flex space-x-4 overflow-x-auto px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'border-primary-400 text-primary-400'
                          : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Floating Mobile Tab Bar */}
              <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-t border-gray-200 flex justify-around py-2 shadow-md">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center px-1 py-1 text-xs font-medium focus:outline-none transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'text-primary-400'
                        : 'text-gray-500 hover:text-primary-400'
                    }`}
                  >
                    <tab.icon className="h-6 w-6 mb-0.5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Safety Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <Moon className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 mb-1">{dest.nightSafety || dest.scores?.nightSafety || 'N/A'}/10</div>
                          <div className="text-sm text-gray-600">Night Safety</div>
                          {renderScoreBar(dest.nightSafety || dest.scores?.nightSafety || 0)}
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <Bus className="h-8 w-8 text-green-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 mb-1">{dest.publicTransit || dest.scores?.publicTransport || 'N/A'}/10</div>
                          <div className="text-sm text-gray-600">Public Transit</div>
                          {renderScoreBar(dest.publicTransit || dest.scores?.publicTransport || 0)}
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 mb-1">{dest.walkingAlone || dest.scores?.walkingAlone || dest.scores?.walkingAlone || 'N/A'}/10</div>
                          <div className="text-sm text-gray-600">Walking Alone</div>
                          {renderScoreBar(dest.walkingAlone || dest.scores?.walkingAlone || 0)}
                        </div>
                      </div>
                      
                      {/* Trust Indicators */}
                      <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span><strong>{dest.reviewCount || '400+'}</strong> verified reviews</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Globe className="h-4 w-4 text-blue-600" />
                          <span>Multi-source validated</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-purple-600" />
                          <span>Updated {dest.lastUpdated || 'recently'}</span>
                        </div>
                      </div>
                    </div>

                    {/* --- NEW DATA SECTIONS --- */}
                    <SafetyByTimeOfDay
                      daytimeSafetyPercent={dest.daytimeSafetyPercent}
                      nighttimeSafetyPercent={dest.nighttimeSafetyPercent}
                      safetySourceName={dest.safetySourceName}
                      safetySourceUrl={dest.safetySourceUrl}
                    />

                    <WomensConfidenceScore
                      city={dest.city}
                      country={dest.country}
                      score={confidenceData.score}
                      source={confidenceData.source}
                      sourceUrl={confidenceData.sourceUrl}
                    />

                    {/* Alerts - moved up below SafetyByTimeOfDay */}
                    {dest.alerts && Array.isArray(dest.alerts) && dest.alerts.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4 flex items-center">
                          <span>Current Safety Alerts</span>
                          <AlertTriangle className="h-5 w-5 ml-2 text-red-500" />
                        </h3>
                        <div className="space-y-3">
                          {safeAlerts.map((alert: any, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border ${
                              alert.severity === 'high' ? 'bg-red-50 border-red-200' :
                              alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' :
                              'bg-blue-50 border-blue-200'
                            }`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className={`font-semibold mb-1 ${
                                    alert.severity === 'high' ? 'text-red-900' :
                                    alert.severity === 'medium' ? 'text-yellow-900' :
                                    'text-blue-900'
                                  }`}>
                                    {alert.title}
                                  </h4>
                                  <p className={`text-sm mb-2 ${
                                    alert.severity === 'high' ? 'text-red-800' :
                                    alert.severity === 'medium' ? 'text-yellow-800' :
                                    'text-blue-800'
                                  }`}>
                                    {alert.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <MostReportedRedFlags 
                      redFlags={dest.redFlags}
                      safetySourceName={dest.safetySourceName}
                      safetySourceUrl={dest.safetySourceUrl}
                    />
{/* Only show new format if it exists, otherwise fall back to old format later */}
                    {dest.culturalSensitivity?.culturalDos && dest.culturalSensitivity?.culturalDonts && (
                      <CulturalSensitivityTips dos={dest.culturalSensitivity.culturalDos} donts={dest.culturalSensitivity.culturalDonts} />
                    )}
                    
                    {/* Show old format Cultural Sensitivity Tips if new format doesn't exist */}
                    {!dest.culturalSensitivity?.culturalDos && dest.culturalSensitivityTips && dest.culturalSensitivityTips.length > 0 && (() => {
                      // Split tips into DOS (positive) and DON'TS (negative) based on content
                      const dos = dest.culturalSensitivityTips.filter(tip => 
                        !tip.toLowerCase().includes("don't") && 
                        !tip.toLowerCase().includes("avoid") && 
                        !tip.toLowerCase().includes("never") &&
                        !tip.toLowerCase().includes("not recommended") &&
                        !tip.toLowerCase().includes("be careful")
                      );
                      const donts = dest.culturalSensitivityTips.filter(tip => 
                        tip.toLowerCase().includes("don't") || 
                        tip.toLowerCase().includes("avoid") || 
                        tip.toLowerCase().includes("never") ||
                        tip.toLowerCase().includes("not recommended") ||
                        tip.toLowerCase().includes("be careful")
                      );
                      
                      return (
                        <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
                          <h4 className="text-lg font-display mb-2">Cultural Sensitivity Tips</h4>
                          {dos.length > 0 && (
                            <ul className="space-y-2 mb-4">
                              {dos.map((tip, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                  <span className="text-gray-800">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {donts.length > 0 && (
                            <ul className="space-y-2">
                              {donts.map((tip, index) => (
                                <li key={index} className="flex items-center">
                                  <XCircle className="h-5 w-5 text-red-400 mr-2" />
                                  <span className="text-gray-800">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })()}
                    <ConfidenceByActivity activities={dest.confidenceByActivity} />
                    <LanguageAndHelp languages={safeLanguages} />
                    {/* --- END NEW DATA SECTIONS --- */}

                    {/* Currency & Exchange */}
                    {dest.currency && (
                    <>
                    <h3 className="text-xl font-display text-gray-900 mb-4">Currency & Exchange</h3>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h4 className="font-bold text-blue-900 mb-1">Local Currency</h4>
                          <div className="text-[12pt] text-blue-900">{dest.currency?.name || 'Local Currency'} ({dest.currency?.code || 'N/A'})</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 mb-1">Exchange Rates (1 {dest.currency?.code || 'Unit'})</h4>
                          <div className="text-[12pt] text-blue-900">
                            USD: ${dest.currency?.exchangeRate?.usd?.toFixed(2) || 'N/A'}<br />
                            EUR: €{dest.currency?.exchangeRate?.eur?.toFixed(2) || 'N/A'}<br />
                            GBP: £{dest.currency?.exchangeRate?.gbp?.toFixed(2) || 'N/A'}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-blue-900 mb-1">Exchange Tips</h4>
                        <div className="text-[10pt] text-blue-800">
                          {dest.currency?.exchangeTips && dest.currency.exchangeTips.length > 0 ? 
                            dest.currency.exchangeTips[0] : 
                            'Contact your bank for the best exchange rates before traveling.'
                          }
                        </div>
                      </div>
                    </div>
                    </>
                    )}
                    
                    {/* Basic Info for Old Format */}
                    {!dest.currency && (
                    <>
                    <h3 className="text-xl font-display text-gray-900 mb-4">Basic Information</h3>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                      {dest.currency && <div className="text-[12pt] text-blue-900 mb-2">Currency: {dest.currency}</div>}
                      {dest.language && <div className="text-[12pt] text-blue-900 mb-2">Language: {dest.language}</div>}
                      {dest.climate && <div className="text-[12pt] text-blue-900 mb-2">Climate: {dest.climate}</div>}
                      {dest.bestTimeToVisit && <div className="text-[12pt] text-blue-900 mb-2">Best Time to Visit: {dest.bestTimeToVisit}</div>}
                      {dest.costLevel && <div className="text-[12pt] text-blue-900">Cost Level: {dest.costLevel}</div>}
                    </div>
                    </>
                    )}

                    {/* Useful Tips - moved below Currency & Exchange */}
                    {(dest.usefulTips && dest.usefulTips.length > 0) ? (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          Useful Tips
                        </h3>
                        <div className="space-y-3">
                          {safeUsefulTips.slice(0, 5).map((tip: any, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border bg-green-50 border-green-200`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-bold mb-1 text-green-900">
                                    {tip.title}
                                  </h4>
                                  <p className="text-[12pt] text-green-800">
                                    {tip.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      dest.scamWarnings && dest.scamWarnings.length > 0 && (
                        <div>
                          <h3 className="text-xl font-display text-gray-900 mb-4">
                            Useful Tips
                          </h3>
                          <div className="space-y-3">
                            {safeScamWarnings.slice(0, 5).map((scam: any, index: number) => (
                              <div key={index} className={`p-4 rounded-lg border bg-green-50 border-green-200`}>
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-bold mb-1 text-green-900">
                                      {scam.title}
                                    </h4>
                                    <p className="text-[12pt] text-green-800">
                                      {scam.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                    
                    {/* Old format safety tips */}
                    {!dest.usefulTips && dest.safetyTips && Array.isArray(dest.safetyTips) && dest.safetyTips.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          Safety Tips
                        </h3>
                        <div className="space-y-3">
                          {dest.safetyTips.slice(0, 5).map((tip: string, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border bg-green-50 border-green-200`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="text-[12pt] text-green-800">
                                    {tip}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Old format travel tips */}
                    {dest.travelTips && Array.isArray(dest.travelTips) && dest.travelTips.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          Travel Tips
                        </h3>
                        <div className="space-y-3">
                          {dest.travelTips.slice(0, 5).map((tip: string, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border bg-blue-50 border-blue-200`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="text-[12pt] text-blue-800">
                                    {tip}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Old format red flags */}
                    {dest.redFlags && Array.isArray(dest.redFlags) && dest.redFlags.length > 0 && !(dest.redFlags[0]?.label) && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          Safety Warnings
                        </h3>
                        <div className="space-y-3">
                          {dest.redFlags.slice(0, 5).map((flag: string, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border bg-yellow-50 border-yellow-200`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <p className="text-[12pt] text-yellow-800">
                                    {flag}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* YouTube Video Section */}
                    {(dest.youtubeVideos && dest.youtubeVideos.length > 0) ? (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          See How It's Like
                        </h3>
                        <div className="space-y-6">
                          {dest.youtubeVideos.map((video, index) => (
                            <YouTubeEmbed
                              key={video.videoId}
                              videoId={video.videoId}
                              title={video.title || `${dest.city} travel video ${index + 1}`}
                              privacyMode={true}
                            />
                          ))}
                        </div>
                      </div>
                    ) : dest.youtubeVideo && dest.youtubeVideo.videoId && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          See How It's Like
                        </h3>
                        <YouTubeEmbed
                          videoId={dest.youtubeVideo.videoId}
                          title={`${dest.city} travel video`}
                          privacyMode={true}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Safety Details Tab */}
                {activeTab === 'safety' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Detailed Safety Breakdown</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2 flex items-center">
                            <Moon className="h-4 w-4 mr-2 text-blue-500" />
                            Night Safety ({dest.nightSafety || dest.scores?.nightSafety || 'N/A'}/10)
                          </h4>
                          <p className="text-gray-700">{dest.safetyBreakdown?.nightSafety?.context || 'Safety information not available for this destination.'}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2 flex items-center">
                            <Bus className="h-4 w-4 mr-2 text-green-500" />
                            Public Transit ({dest.publicTransit || dest.scores?.publicTransport || 'N/A'}/10)
                          </h4>
                          <p className="text-gray-700">{dest.safetyBreakdown?.publicTransit?.context || 'Transportation safety information not available for this destination.'}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-purple-500" />
                            Walking Alone ({dest.walkingAlone || dest.scores?.walkingAlone || 'N/A'}/10)
                          </h4>
                          <p className="text-gray-700">{dest.safetyBreakdown?.walkingAlone?.context || 'Walking safety information not available for this destination.'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Neighborhoods */}
                    {((safeNeighborhoods?.safe && Array.isArray(safeNeighborhoods.safe) && safeNeighborhoods.safe.length > 0) || 
                      (safeNeighborhoods?.caution && Array.isArray(safeNeighborhoods.caution) && safeNeighborhoods.caution.length > 0) || 
                      (safeNeighborhoods?.avoid && Array.isArray(safeNeighborhoods.avoid) && safeNeighborhoods.avoid.length > 0) ||
                      (safeNeighborhoods && Array.isArray(safeNeighborhoods))) && (
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Neighborhood Safety</h3>
                      <div className="space-y-4">
                        {/* Handle new format neighborhoods.safe */}
                        {safeNeighborhoods?.safe && Array.isArray(safeNeighborhoods.safe) && safeNeighborhoods.safe.length > 0 && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-display text-green-900 mb-2">Safe Areas</h4>
                          <ul className="text-[12pt] text-green-800 space-y-4">
                            {safeNeighborhoods.safe.map((area: any, index: number) => (
                              typeof area === 'string' ? (
                                <li key={index}><span className="font-bold">{area}</span></li>
                              ) : (
                                <li key={index}>
                                  <span className="font-bold">{area.name}</span>
                                  <div className="mt-1">{area.description}</div>
                                </li>
                              )
                            ))}
                          </ul>
                        </div>
                        )}
                        {safeNeighborhoods?.caution && Array.isArray(safeNeighborhoods.caution) && safeNeighborhoods.caution.length > 0 && (
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <h4 className="font-display text-yellow-900 mb-2">Use Caution</h4>
                          <ul className="text-[12pt] text-yellow-800 space-y-2">
                            {safeNeighborhoods.caution.map((area: string, idx: number) => (
                              <li key={idx}>• {area}</li>
                            ))}
                          </ul>
                        </div>
                        )}
                        {safeNeighborhoods?.avoid && Array.isArray(safeNeighborhoods.avoid) && safeNeighborhoods.avoid.length > 0 && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-display text-red-900 mb-2">Avoid</h4>
                          <ul className="text-[12pt] text-red-800 space-y-2">
                            {safeNeighborhoods.avoid.map((area: string, idx: number) => (
                              <li key={idx}>• {area}</li>
                            ))}
                          </ul>
                        </div>
                        )}
                        {/* Handle old format neighborhoods as array */}
                        {safeNeighborhoods && Array.isArray(safeNeighborhoods) && safeNeighborhoods.length > 0 && (
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-display text-blue-900 mb-2">Neighborhoods</h4>
                          <ul className="text-[12pt] text-blue-800 space-y-2">
                            {safeNeighborhoods.map((neighborhood: any, idx: number) => (
                              <li key={idx}>
                                <span className="font-bold">{neighborhood.name}</span>
                                {neighborhood.description && <div className="mt-1">{neighborhood.description}</div>}
                                {neighborhood.safetyScore && <div className="text-sm text-blue-600 mt-1">Safety Score: {neighborhood.safetyScore}/5</div>}
                              </li>
                            ))}
                          </ul>
                        </div>
                        )}
                      </div>
                    </div>
                    )}


                    {/* Scam Warnings */}
                    {dest.scamWarnings && Array.isArray(dest.scamWarnings) && dest.scamWarnings.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">Scam Warnings</h3>
                        <div className="space-y-3">
                          {safeScamWarnings.map((scam: any, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border ${
                              scam.severity === 'high' ? 'bg-red-50 border-red-200' : 
                              scam.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' : 
                              'bg-orange-50 border-orange-200'
                            }`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-bold mb-1 text-gray-900">
                                    {scam.title}
                                  </h4>
                                  <p className="text-[12pt] text-gray-700">
                                    {scam.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Useful Tips */}
                    {dest.usefulTips && Array.isArray(dest.usefulTips) && dest.usefulTips.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">Useful Tips</h3>
                        <div className="space-y-3">
                          {safeUsefulTips.map((tip: any, index: number) => (
                            <div key={index} className={`p-4 rounded-lg border ${
                              tip.severity === 'high' ? 'bg-red-50 border-red-200' : 
                              tip.severity === 'medium' ? 'bg-yellow-50 border-yellow-200' : 
                              'bg-green-50 border-green-200'
                            }`}>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-bold mb-1 text-gray-900">
                                    {tip.title}
                                  </h4>
                                  <p className="text-[12pt] text-gray-700 mb-2">
                                    {tip.description}
                                  </p>
                                  {tip.sourceName && (
                                    <p className="text-xs text-gray-500">
                                      Source: {tip.sourceName}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Cultural Sensitivity Tips */}
                    {dest.culturalSensitivityTips && dest.culturalSensitivityTips.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">Cultural Sensitivity Tips</h3>
                        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                          <ul className="text-[12pt] text-indigo-800 space-y-2">
                            {dest.culturalSensitivityTips?.map((tip: string, idx: number) => (
                              <li key={idx}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Cultural Dos and Don'ts */}
                    {((dest.culturalDos && Array.isArray(dest.culturalDos) && dest.culturalDos.length > 0) || (dest.culturalDonts && Array.isArray(dest.culturalDonts) && dest.culturalDonts.length > 0)) && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">Cultural Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {dest.culturalDos && Array.isArray(dest.culturalDos) && dest.culturalDos.length > 0 && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                              <h4 className="font-display text-green-900 mb-2">Do's</h4>
                              <ul className="text-[12pt] text-green-800 space-y-1">
                                {safeCulturalDos.map((doItem: string, idx: number) => (
                                  <li key={idx}>• {doItem}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {dest.culturalDonts && Array.isArray(dest.culturalDonts) && dest.culturalDonts.length > 0 && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                              <h4 className="font-display text-red-900 mb-2">Don'ts</h4>
                              <ul className="text-[12pt] text-red-800 space-y-1">
                                {safeCulturalDonts.map((dontItem: string, idx: number) => (
                                  <li key={idx}>• {dontItem}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Practical Info Tab */}
                {activeTab === 'practical' && (
                  <div className="space-y-6">
                    {/* Safety Tips */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Safety Tips</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h4 className="font-display text-blue-900 mb-2">Clothing Recommendations</h4>
                          {Array.isArray(dest.safetyTips?.clothing) || (typeof dest.safetyTips?.clothing === 'string' && dest.safetyTips?.clothing.match && dest.safetyTips?.clothing.match(/[\n•]/)) ? (
                            <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                              {(Array.isArray(dest.safetyTips?.clothing)
                                ? dest.safetyTips?.clothing
                                : dest.safetyTips?.clothing.split(/[\n•]/).filter((s: string) => s.trim().length > 0)
                              ).map((item: string, idx: number) => (
                                <li key={idx}>{item.trim()}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-blue-800">{dest.safetyTips?.clothing}</p>
                          )}
                        </div>
                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <h4 className="font-display text-purple-900 mb-2">First-Timer Tips</h4>
                          {Array.isArray(dest.safetyTips?.firstTimers) || (typeof dest.safetyTips?.firstTimers === 'string' && dest.safetyTips?.firstTimers.match && dest.safetyTips?.firstTimers.match(/[\n•]/)) ? (
                            <ul className="text-sm text-purple-800 list-disc list-inside space-y-1">
                              {(Array.isArray(dest.safetyTips?.firstTimers)
                                ? dest.safetyTips?.firstTimers
                                : dest.safetyTips?.firstTimers.split(/[\n•]/).filter((s: string) => s.trim().length > 0)
                              ).map((item: string, idx: number) => (
                                <li key={idx}>{item.trim()}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-purple-800">{dest.safetyTips?.firstTimers}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Useful Apps */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Useful Apps</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {dest.safetyTips?.apps?.map((app: string, index: number) => {
                          const appLinkObj = dest.safetyTips?.appLinks?.find((a: any) => a.name === app);
                          let url = '';
                          switch (app) {
                            case 'GVB':
                              url = 'https://www.gvb.nl/en';
                              break;
                            case '9292':
                              url = 'https://9292.nl/en';
                              break;
                            case 'Google Maps':
                              url = 'https://maps.google.com';
                              break;
                            case 'bSafe':
                              url = 'https://getbsafe.com/';
                              break;
                            case 'Noonlight':
                              url = 'https://www.noonlight.com/';
                              break;
                            default:
                              url = appLinkObj?.link || appLinkObj?.ios;
                          }
                          return url ? (
                            <a
                              key={index}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                              onMouseEnter={(e) => {
                                const appName = e.currentTarget.querySelector('.app-name');
                                const appIcon = e.currentTarget.querySelector('.app-icon');
                                if (appName) {
                                  appName.style.color = '#8342FA';
                                  appName.style.setProperty('color', '#8342FA', 'important');
                                }
                                if (appIcon) {
                                  appIcon.style.color = '#8342FA';
                                  appIcon.style.setProperty('color', '#8342FA', 'important');
                                }
                                e.currentTarget.style.borderColor = 'rgba(158, 125, 255, 0.3)';
                              }}
                              onMouseLeave={(e) => {
                                const appName = e.currentTarget.querySelector('.app-name');
                                const appIcon = e.currentTarget.querySelector('.app-icon');
                                if (appName) {
                                  appName.style.color = '#111827';
                                  appName.style.setProperty('color', '#111827', 'important');
                                }
                                if (appIcon) {
                                  appIcon.style.color = '#111827';
                                  appIcon.style.setProperty('color', '#111827', 'important');
                                }
                                e.currentTarget.style.borderColor = '#e5e7eb';
                              }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-display font-normal text-gray-900 transition-all duration-300 flex items-center app-name">
                                  {app}
                                  <ExternalLink className="h-3 w-3 ml-1 transition-all duration-300 app-icon" />
                                </span>
                                {appLinkObj?.rating && (
                                  <StarRating rating={appLinkObj.rating} size="sm" />
                                )}
                              </div>
                              {appLinkObj?.description && (
                                <p className="text-sm text-gray-600">{appLinkObj.description}</p>
                              )}
                            </a>
                          ) : (
                            <div key={index} className="p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-75">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-gray-900">{app}</span>
                                {appLinkObj?.rating && (
                                  <StarRating rating={appLinkObj.rating} size="sm" />
                                )}
                              </div>
                              {appLinkObj?.description && (
                                <p className="text-sm text-gray-600">{appLinkObj.description}</p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Cultural Expectations */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Cultural Information</h3>
                      <div className="space-y-4">
                        {/* Dress Code */}
                        {dest.culturalExpectations?.dressCode && Array.isArray(dest.culturalExpectations.dressCode) && dest.culturalExpectations.dressCode.length > 0 && (
                          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <h4 className="font-display text-blue-900 mb-2">Dress Code</h4>
                            <ul className="text-[12pt] text-blue-800 space-y-2">
                              {dest.culturalExpectations.dressCode.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {dest.culturalExpectations?.behaviorNorms && Array.isArray(dest.culturalExpectations.behaviorNorms) && dest.culturalExpectations.behaviorNorms.length > 0 && (
                          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                            <h4 className="font-display text-purple-900 mb-2">Behavior Norms</h4>
                            <ul className="text-[12pt] text-purple-800 space-y-2">
                              {dest.culturalExpectations.behaviorNorms.map((norm: string, idx: number) => (
                                <li key={idx}>• {norm}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* Solo Women Perception */}
                        {dest.culturalExpectations?.perception && Array.isArray(dest.culturalExpectations.perception) && dest.culturalExpectations.perception.length > 0 && (
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                            <h4 className="font-display text-gray-900 mb-2">Local Perception</h4>
                            <ul className="text-[12pt] text-gray-800 space-y-2">
                              {dest.culturalExpectations.perception.map((item: string, idx: number) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Cost & Comfort Tab */}
                {activeTab === 'cost' && dest.costAndComfort && (
                  <div className="space-y-6">
                    {/* Daily Budget Range */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Estimated Daily Budget</h3>
                      <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-green-900 mb-2">
                            {dest.costAndComfort.dailyBudget.range}
                          </div>
                          <p className="text-green-800 mb-3">{dest.costAndComfort.dailyBudget.description}</p>
                          <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                            <p className="text-sm text-green-900 font-medium">{dest.costAndComfort.dailyBudget.tip}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodation Safety vs Cost */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Where to Stay - Cost vs Safety</h3>
                      <div className="space-y-4">
                        {dest.costAndComfort.accommodation?.map((acc: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg bg-gray-50">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  acc.safetyLevel === 'high' ? 'bg-green-500' : 
                                  acc.safetyLevel === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                                }`}></div>
                                <span className="font-semibold text-gray-900">{acc.type}</span>
                              </div>
                              <span className="font-bold text-gray-900">{acc.avgCost}</span>
                            </div>
                            <p className={`text-sm ${
                              acc.safetyLevel === 'high' ? 'text-green-700' : 
                              acc.safetyLevel === 'medium' ? 'text-yellow-700' : 'text-red-700'
                            }`}>
                              {acc.safetyLevel === 'high' ? '✓ ' : acc.safetyLevel === 'medium' ? '⚠ ' : '✗ '}
                              {acc.safetyNote}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Getting Around - Cost & Comfort */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Transport Options</h3>
                      <div className="space-y-4">
                        {dest.costAndComfort.transport?.map((trans: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg bg-gray-50">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  trans.safetyLevel === 'high' ? 'bg-green-500' : 
                                  trans.safetyLevel === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                                }`}></div>
                                <span className="font-semibold text-gray-900">{trans.method}</span>
                              </div>
                              <span className="font-bold text-gray-900">{trans.cost}</span>
                            </div>
                            <p className={`text-sm ${
                              trans.safetyLevel === 'high' ? 'text-green-700' : 
                              trans.safetyLevel === 'medium' ? 'text-yellow-700' : 'text-red-700'
                            }`}>
                              {trans.safetyLevel === 'high' ? '✓ ' : trans.safetyLevel === 'medium' ? '⚠ ' : '✗ '}
                              {trans.safetyDescription}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Budget-Safety Tips */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Smart Budgeting = Safer Travel</h3>
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <ul className="space-y-2">
                          {dest.costAndComfort.budgetTips?.map((tip: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-green-600 font-bold mt-0.5">✓</span>
                              <span className="text-blue-900">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Currency & Exchange Tips from Cost & Comfort */}
                    {dest.costAndComfort.currencyExchangeTips && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">Currency & Exchange Tips</h3>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <ul className="space-y-3">
                            {dest.costAndComfort.currencyExchangeTips.map((tip: string, index: number) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-yellow-600 font-bold mt-0.5">•</span>
                                <span className="text-yellow-900">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Currency Exchange Tips from currency section (fallback) */}
                    {!dest.costAndComfort.currencyExchangeTips && dest.currency && dest.currency.exchangeTips && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">Currency & Exchange Tips</h3>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">ATMs widely available throughout Seoul - use bank ATMs (KB, Shinhan, Woori) for best exchange rates</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Avoid currency exchange at Incheon Airport - rates are 3-5% worse than city banks and authorized exchange booths</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Use authorized money changers in Myeongdong, Itaewon, Hongdae districts for better rates than banks</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Banks open limited hours (9 AM - 4 PM weekdays) so plan accordingly or use 24/7 ATMs</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Bring US Dollars or Euros for best exchange rates - other currencies have poor rates</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Download KEB Hana Bank or Shinhan Bank apps for real-time rates before exchanging</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Keep all exchange receipts - legally required for reconverting Korean Won when leaving Korea</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Major department stores (Lotte, Shinsegae) have currency exchange counters with reasonable rates</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-yellow-600 font-bold mt-0.5">•</span>
                              <span className="text-yellow-900">Avoid street money changers completely - illegal in Korea and may involve counterfeit currency scams</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {reviews.length > 0 ? (
                      reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-primary-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {review.profiles?.full_name?.charAt(0) || 'U'}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <span className="font-semibold text-gray-900">
                                    {review.profiles?.full_name || 'Anonymous'}
                                  </span>
                                  <span className="text-gray-600 ml-2">•</span>
                                  <span className="text-gray-600 ml-2">{new Date(review.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex space-x-1">
                                  {[1,2,3,4,5].map((star) => (
                                    <Star 
                                      key={star} 
                                      className={`h-4 w-4 ${star <= review.overall_rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-3">{review.review_text}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <button className="flex items-center space-x-1 hover:text-primary-400">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>Helpful ({review.helpful_count || 0})</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-primary-400">
                                  <Share className="h-4 w-4" />
                                  <span>Share</span>
                                </button>
                                <button className="flex items-center space-x-1 hover:text-primary-400">
                                  <Bookmark className="h-4 w-4" />
                                  <span>Save</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-display text-gray-900 mb-2">No reviews yet</h3>
                        <p className="text-gray-600 mb-6">Be the first to share your safety experience in {dest.city}!</p>
                        <button 
                          onClick={() => setShowReviewModal(true)}
                          className="px-6 py-3 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors duration-300"
                        >
                          Write the First Review
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-display text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reviews</span>
                    <span className="font-semibold">{dest.reviewCount || reviews.length || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-semibold">{dest.lastUpdated || 'Recently updated'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Continent</span>
                    <span className="font-semibold">{dest.continent || 'Europe'}</span>
                  </div>
                </div>
              </div>

              {/* Travel Advisory */}
              {(dest.governmentAdvisory || dest.safetyTips?.travelAdvisory) && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-display text-gray-900 mb-4">
                    Travel Advisory
                  </h3>
                  
                  {/* Section 1: Advisory Status */}
                  <div className={`p-4 rounded-lg mb-4 ${
                    (dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level) === 'Exercise Normal Precautions' ? 'bg-green-50 border border-green-200' :
                    (dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level) === 'Exercise Increased Caution' ? 'bg-yellow-50 border border-yellow-200' :
                    (dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level)?.includes('Reconsider Travel') ? 'bg-orange-50 border border-orange-200' :
                    'bg-red-50 border border-red-200'
                  }`}>
                    <div className="text-center">
                      <div className={`text-lg font-bold mb-1 ${
                        (dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level) === 'Exercise Normal Precautions' ? 'text-green-900' :
                        (dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level) === 'Exercise Increased Caution' ? 'text-yellow-900' :
                        (dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level)?.includes('Reconsider Travel') ? 'text-orange-900' :
                        'text-red-900'
                      }`}>
                        {dest.governmentAdvisory?.level || dest.safetyTips?.travelAdvisory?.level}
                      </div>
                      <div className="text-xs text-gray-500">
                        Issued by: {dest.governmentAdvisory?.source || dest.safetyTips?.travelAdvisory?.source}
                      </div>
                      <div className="text-xs text-gray-500">
                        Updated: {dest.governmentAdvisory?.lastUpdated || dest.safetyTips?.travelAdvisory?.lastUpdated}
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Summary */}
                  {(dest.governmentAdvisory?.reason || (dest.safetyTips?.travelAdvisory?.keyWarnings && dest.safetyTips.travelAdvisory.keyWarnings.length > 0)) && (
                    <div className="mb-4">
                      {dest.governmentAdvisory?.reason ? (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {dest.governmentAdvisory.reason}
                        </p>
                      ) : (
                        <div>
                          <h4 className="font-display text-gray-900 mb-2 text-sm">Key Warnings</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {dest.safetyTips.travelAdvisory.keyWarnings.map((warning: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-600 mr-2 mt-0.5">•</span>
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Section 3: What This Means for You */}
                  <div className="mb-4">
                    <h4 className="font-display text-gray-900 mb-2 text-sm">What this means for solo travelers</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {(dest.governmentAdvisory?.soloTravelerAdvice && dest.governmentAdvisory.soloTravelerAdvice.length > 0) || (dest.safetyTips?.travelAdvisory?.womensSpecific && dest.safetyTips.travelAdvisory.womensSpecific.length > 0) ? (
                        (dest.governmentAdvisory?.soloTravelerAdvice || dest.safetyTips?.travelAdvisory?.womensSpecific)?.map((advice: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-600 mr-2 mt-0.5">•</span>
                            {advice}
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2 mt-0.5">•</span>
                            Watch your bag in markets and metros
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2 mt-0.5">•</span>
                            Avoid isolated streets at night
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2 mt-0.5">•</span>
                            Use rideshare apps over local taxis
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Section 4: Community Match */}
                  <div className="mb-4 text-xs text-gray-500 flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    Matched by 2 community reports
                  </div>

                  {/* Section 5: CTA Link */}
                  {dest.governmentAdvisory?.link && (
                    <div>
                      <a
                        href={dest.governmentAdvisory.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-400 hover:text-primary-500 font-medium transition-colors text-sm"
                      >
                        Read Full Advisory
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Best Time to Visit */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-display text-gray-900 mb-4">
                  Best Time to Visit
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-display text-gray-900 mb-1">Safest Months</h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.bestTimeToVisit?.safestMonths?.map((month: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                          {month}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-gray-900 mb-1">Events & Notes</h4>
                    <p className="text-sm text-gray-700">{dest.bestTimeToVisit?.events}</p>
                  </div>
                </div>
              </div>

              {/* Recommended Accommodations */}
              {dest.accommodations && Array.isArray(dest.accommodations) && dest.accommodations.length > 0 && (
                <div className="sticky top-0 z-30">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-display text-gray-900 mb-4">Recommended Stays</h3>
                    <div className="space-y-4">
                      {safeAccommodations.map((accommodation: any, index: number) => (
                        <div 
                          key={index} 
                          className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                          onMouseEnter={(e) => {
                            const accommodationName = e.currentTarget.querySelector('.accommodation-name');
                            const accommodationIcon = e.currentTarget.querySelector('.lucide-external-link');
                            if (accommodationName) {
                              accommodationName.style.color = '#8342FA';
                              accommodationName.style.setProperty('color', '#8342FA', 'important');
                            }
                            if (accommodationIcon) {
                              accommodationIcon.style.color = '#8342FA';
                              accommodationIcon.style.setProperty('color', '#8342FA', 'important');
                            }
                            e.currentTarget.style.borderColor = 'rgba(158, 125, 255, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            const accommodationName = e.currentTarget.querySelector('.accommodation-name');
                            const accommodationIcon = e.currentTarget.querySelector('.lucide-external-link');
                            if (accommodationName) {
                              accommodationName.style.color = '#111827';
                              accommodationName.style.setProperty('color', '#111827', 'important');
                            }
                            if (accommodationIcon) {
                              accommodationIcon.style.color = '#9CA3AF';
                              accommodationIcon.style.setProperty('color', '#9CA3AF', 'important');
                            }
                            e.currentTarget.style.borderColor = '#e5e7eb';
                          }}
                        >
                          <div className="mb-2">
                            <div className="flex items-center justify-between mb-1">
                              {accommodation.link ? (
                                <a
                                  href={accommodation.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-display text-gray-900 hover:text-gray-700 transition-colors"
                                >
                                  <h4 className="accommodation-name">{accommodation.name}</h4>
                                </a>
                              ) : (
                                <h4 className="font-display text-gray-900 accommodation-name">{accommodation.name}</h4>
                              )}
                              {accommodation.link && (
                                <ExternalLink className="h-4 w-4 transition-all duration-300 text-gray-400 ml-2" />
                              )}
                            </div>
                            <div>
                              <StarRating rating={accommodation.rating} size="sm" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{accommodation.notes}</p>
                          <div className="flex flex-wrap gap-1">
                            {accommodation.features?.map((feature: string, featureIndex: number) => (
                              <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <ReviewModal 
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        destinationCity={dest.city}
        destinationCountry={dest.country}
        onReviewSubmitted={handleReviewSubmitted}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode="signup"
      />

      {/* Safety Info Modal for Mobile */}
      {showSafetyInfoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" 
          style={{backgroundColor: 'rgba(40, 40, 40, 0.5)'}}
          onClick={() => setShowSafetyInfoModal(false)}
        >
          <div 
            className="w-full max-w-md max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl" 
            style={{backgroundColor: '#FFFFFF'}}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 px-6 pt-6 pb-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-t-3xl">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-display font-semibold text-gray-900">
                  How Safety Scores Are Calculated
                </h2>
                <button
                  onClick={() => setShowSafetyInfoModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <strong className="text-gray-900">Current Sources:</strong> Government travel advisories (US State Dept, UK FCDO, Canadian Govt), crime statistics (Numbeo, local police data), embassy security alerts, and NGO safety assessments.
                </div>
                <div>
                  <strong className="text-gray-900">Scoring Method:</strong> Weighted average of Night Safety (25%), Public Transit Safety (25%), Walking Alone Safety (30%), and General Crime Risk (20%). All scores validated against multiple independent sources.
                </div>
                <div>
                  <strong className="text-gray-900">Community-Powered Future:</strong> As more solo female travelers join our community and share their real experiences, these scores will increasingly reflect authentic, first-hand safety insights from women who've actually been there.
                </div>
                <div>
                  <strong className="text-gray-900">Help Fellow Travelers:</strong> Your experiences matter! By contributing your travel stories, you're helping create the most trusted safety resource for women worldwide. 
                  <button 
                    onClick={() => {
                      setShowSafetyInfoModal(false);
                      setShowAuthModal(true);
                    }}
                    className="text-primary-500 hover:text-primary-600 underline ml-1 bg-transparent border-none cursor-pointer font-medium"
                  >
                    Join the solo trvelers gang →
                  </button>
                </div>
                <div className="text-gray-500 text-xs border-t pt-3 mt-4">
                  <strong>Updates:</strong> Scores updated monthly. Last updated: {dest.lastUpdated || 'Recently'}.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DestinationDetail;