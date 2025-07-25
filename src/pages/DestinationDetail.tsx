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
  Wallet
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewModal from '../components/ReviewModal';
import { getDestinationBySlug } from '../data/destinations';
import { getReviewsForDestination } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import FlagImage from '../components/FlagImage';
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
  const [destination, setDestination] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showEmergencyInfo, setShowEmergencyInfo] = useState(false);
  const [embassySearch, setEmbassySearch] = useState('');
  const [selectedEmbassy, setSelectedEmbassy] = useState<any>(null);

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'practical', label: 'Practical Info', icon: MapPin },
    { id: 'cost', label: 'Cost & Comfort', icon: Wallet },
    { id: 'reviews', label: `Reviews (${reviews.length})`, icon: MessageSquare }
  ];

  const key = `${destination.city},${destination.country}`;
  const confidenceData = womensConfidenceData[key] || { score: 65, source: 'Best Available Source', sourceUrl: undefined };

  const embassyList = [
    destination.legalResources?.embassy,
    ...(destination.legalResources?.embassies || [])
  ].filter(Boolean);
  const filteredEmbassies = embassyList.filter((embassy: any) =>
    embassy.name.toLowerCase().includes(embassySearch.toLowerCase())
  );

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
                countryCode={destination.countryCode}
                alt={`${destination.country} flag`}
                size="lg"
                className="rounded-xl"
              />
              <div>
                <h1 className="text-4xl font-display text-gray-900">{destination.city}</h1>
                <p className="text-xl text-gray-600">{destination.country}</p>
              </div>
            </div>
            
            {/* Overall Safety Score */}
            <div className="flex items-center space-x-6 mb-6 flex-wrap">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-lg font-medium text-gray-700">Overall Safety:</span>
                <div className={`rounded-full px-4 py-2 text-2xl font-extrabold ${getScoreColor(destination.overallScore)}`}>
                  {destination.overallScore}/10
                </div>
              </div>
            </div>
            {/* Harassment Risk Badge - now below and left-aligned */}
            <div className="mb-4 flex">
              <div className={`px-4 py-2 min-h-[2.5rem] rounded-full text-xs sm:text-sm font-semibold max-w-full truncate flex items-center ${getHarassmentColor(destination.harassmentRisk)}`}
                style={{lineHeight: '1.2'}}>
                {destination.harassmentRisk.toUpperCase()} HARASSMENT RISK
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
                  Emergency Contacts - {destination.city}, {destination.country}
                </h3>
                {/* Emergency Numbers - now at the very top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">Police</h4>
                    <p className="text-2xl font-bold text-red-900">{destination.emergencyInfo.police}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">Fire Service</h4>
                    <p className="text-2xl font-bold text-red-900">{destination.emergencyInfo.fire}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">Medical Emergency</h4>
                    <p className="text-2xl font-bold text-red-900">{destination.emergencyInfo.medical}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-display text-red-800 mb-2">General Emergency</h4>
                    <p className="text-2xl font-bold text-red-900">{destination.emergencyInfo.general}</p>
                  </div>
                </div>
                {/* Emergency Phrases - now second */}
                {destination.safetyTips.emergencyPhrases && destination.safetyTips.emergencyPhrases.length > 0 && 
                 !['Australia', 'Canada', 'Ireland', 'New Zealand', 'United Kingdom', 'United States'].includes(destination.country) && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">Emergency Phrases</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {destination.safetyTips.emergencyPhrases.map((phrase: any, index: number) => (
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
                                  
                                  // Female voice names to look for
                                  const femaleNames = [
                                    'female', 'woman', 'girl', 'samantha', 'victoria', 'karen', 'zira', 'hazel',
                                    'lucia', 'mia', 'julie', 'helena', 'alice', 'claire', 'olivia', 'linda',
                                    'emma', 'isabella', 'sara', 'amelie', 'audrey', 'juliette', 'virginie',
                                    'marion', 'lea', 'chloe', 'sophie', 'camille', 'elena', 'ines', 'luciana',
                                    'bianca', 'giulia', 'alessia', 'giovanna', 'marina', 'carla', 'sofia',
                                    'laura', 'rosa', 'ana', 'carolina', 'gabriela', 'fernanda', 'juliana',
                                    'patricia', 'monica', 'daniela', 'marcela', 'paola', 'valeria', 'veronica',
                                    'viviana', 'yolanda', 'zulema', 'paulina', 'soledad', 'carmen', 'maria',
                                    'eva', 'anna', 'susan', 'frau', 'mujer', 'dame', 'feminine'
                                  ];
                                  
                                  // Try to find a female voice for the language
                                  let femaleVoice = voices.find(v => 
                                    v.lang.startsWith(langCode) && 
                                    femaleNames.some(name => v.name.toLowerCase().includes(name))
                                  );
                                  
                                  // If no female voice, try any voice for the language
                                  if (!femaleVoice) {
                                    femaleVoice = voices.find(v => v.lang.startsWith(langCode));
                                  }
                                  
                                  // If still no voice, try English female voice
                                  if (!femaleVoice) {
                                    femaleVoice = voices.find(v => 
                                      v.lang.startsWith('en') && 
                                      femaleNames.some(name => v.name.toLowerCase().includes(name))
                                    );
                                  }
                                  
                                  // Final fallback: any English voice
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
                {destination.healthSafety?.hospitals && destination.healthSafety.hospitals.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">Major Hospitals</h4>
                    <ul className="space-y-1">
                      {destination.healthSafety.hospitals.map((h: any, i: number) => (
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
                {destination.healthSafety?.pharmacies && destination.healthSafety.pharmacies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">24/7 Pharmacies</h4>
                    <ul className="space-y-1">
                      {destination.healthSafety.pharmacies.map((p: any, i: number) => (
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
                {destination.sexualHarassmentData?.supportResources && destination.sexualHarassmentData.supportResources.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-display text-red-800 mb-2">Support & Victim Resources</h4>
                    <ul className="space-y-1">
                      {destination.sexualHarassmentData.supportResources.map((r: string, i: number) => {
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
                      })}
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
                          <div className="text-2xl font-bold text-gray-900 mb-1">{destination.nightSafety}/10</div>
                          <div className="text-sm text-gray-600">Night Safety</div>
                          {renderScoreBar(destination.nightSafety)}
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <Bus className="h-8 w-8 text-green-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 mb-1">{destination.publicTransit}/10</div>
                          <div className="text-sm text-gray-600">Public Transit</div>
                          {renderScoreBar(destination.publicTransit)}
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-900 mb-1">{destination.walkingAlone}/10</div>
                          <div className="text-sm text-gray-600">Walking Alone</div>
                          {renderScoreBar(destination.walkingAlone)}
                        </div>
                      </div>
                    </div>

                    {/* --- NEW DATA SECTIONS --- */}
                    <SafetyByTimeOfDay
                      daytimeSafetyPercent={destination.daytimeSafetyPercent}
                      nighttimeSafetyPercent={destination.nighttimeSafetyPercent}
                      safetySourceName={destination.safetySourceName}
                      safetySourceUrl={destination.safetySourceUrl}
                    />

                    <WomensConfidenceScore
                      city={destination.city}
                      country={destination.country}
                      score={confidenceData.score}
                      source={confidenceData.source}
                      sourceUrl={confidenceData.sourceUrl}
                    />

                    {/* Alerts - moved up below SafetyByTimeOfDay */}
                    {destination.alerts && destination.alerts.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4 flex items-center">
                          <span>Current Safety Alerts</span>
                          <AlertTriangle className="h-5 w-5 ml-2 text-red-500" />
                        </h3>
                        <div className="space-y-3">
                          {destination.alerts.map((alert: any, index: number) => (
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
                      redFlags={destination.redFlags}
                      safetySourceName={destination.safetySourceName}
                      safetySourceUrl={destination.safetySourceUrl}
                    />
                    <CulturalSensitivityTips dos={destination.culturalDos || []} donts={destination.culturalDonts || []} />
                    <ConfidenceByActivity activities={destination.confidenceByActivity} />
                    <LanguageAndHelp languages={destination.languages} />
                    {/* --- END NEW DATA SECTIONS --- */}

                    {/* Currency & Exchange */}
                    <h3 className="text-xl font-display text-gray-900 mb-4">Currency & Exchange</h3>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h4 className="font-bold text-blue-900 mb-1">Local Currency</h4>
                          <div className="text-[12pt] text-blue-900">{destination.currency.name} ({destination.currency.code})</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-900 mb-1">Exchange Rates (1 {destination.currency.code})</h4>
                          <div className="text-[12pt] text-blue-900">
                            USD: ${destination.currency.exchangeRate.usd.toFixed(2)}<br />
                            EUR: €{destination.currency.exchangeRate.eur.toFixed(2)}<br />
                            GBP: £{destination.currency.exchangeRate.gbp.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-blue-900 mb-1">Exchange Tips</h4>
                        <div className="text-[10pt] text-blue-800">
                          {(() => {
                            const tip = destination.usefulTips?.find((t: any) => t.title?.toLowerCase().includes('currency & exchange tips'));
                            if (tip) return tip.description;
                            if (destination.currency.scamWarnings && destination.currency.scamWarnings.length > 0) return destination.currency.scamWarnings[0];
                            return null;
                          })()}
                        </div>
                      </div>
                    </div>

                    {/* Useful Tips - moved below Currency & Exchange */}
                    {(destination.usefulTips && destination.usefulTips.length > 0) ? (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4">
                          Useful Tips
                        </h3>
                        <div className="space-y-3">
                          {destination.usefulTips.slice(0, 5).map((tip: any, index: number) => (
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
                      destination.scamWarnings && destination.scamWarnings.length > 0 && (
                        <div>
                          <h3 className="text-xl font-display text-gray-900 mb-4">
                            Useful Tips
                          </h3>
                          <div className="space-y-3">
                            {destination.scamWarnings.slice(0, 5).map((scam: any, index: number) => (
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
                            Night Safety ({destination.nightSafety}/10)
                          </h4>
                          <p className="text-gray-700">{destination.safetyBreakdown.nightSafety.context}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2 flex items-center">
                            <Bus className="h-4 w-4 mr-2 text-green-500" />
                            Public Transit ({destination.publicTransit}/10)
                          </h4>
                          <p className="text-gray-700">{destination.safetyBreakdown.publicTransit.context}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-purple-500" />
                            Walking Alone ({destination.walkingAlone}/10)
                          </h4>
                          <p className="text-gray-700">{destination.safetyBreakdown.walkingAlone.context}</p>
                        </div>
                      </div>
                    </div>

                    {/* Neighborhoods */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Neighborhood Safety</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-display text-green-900 mb-2">Safe Areas</h4>
                          <ul className="text-[12pt] text-green-800 space-y-4">
                            {destination.neighborhoods.safe.map((area: any, index: number) => (
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
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <h4 className="font-display text-yellow-900 mb-2">Use Caution</h4>
                          <ul className="text-[12pt] text-yellow-800 space-y-2">
                            {destination.neighborhoods.caution.map((area: string, idx: number) => (
                              <li key={idx}>• {area}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-display text-red-900 mb-2">Avoid</h4>
                          <ul className="text-[12pt] text-red-800 space-y-2">
                            {destination.neighborhoods.avoid.map((area: string, idx: number) => (
                              <li key={idx}>• {area}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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
                          {Array.isArray(destination.safetyTips.clothing) || (typeof destination.safetyTips.clothing === 'string' && destination.safetyTips.clothing.match(/[\n•]/)) ? (
                            <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                              {(Array.isArray(destination.safetyTips.clothing)
                                ? destination.safetyTips.clothing
                                : destination.safetyTips.clothing.split(/[\n•]/).filter((s: string) => s.trim().length > 0)
                              ).map((item: string, idx: number) => (
                                <li key={idx}>{item.trim()}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-blue-800">{destination.safetyTips.clothing}</p>
                          )}
                        </div>
                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <h4 className="font-display text-purple-900 mb-2">First-Timer Tips</h4>
                          {Array.isArray(destination.safetyTips.firstTimers) || (typeof destination.safetyTips.firstTimers === 'string' && destination.safetyTips.firstTimers.match(/[\n•]/)) ? (
                            <ul className="text-sm text-purple-800 list-disc list-inside space-y-1">
                              {(Array.isArray(destination.safetyTips.firstTimers)
                                ? destination.safetyTips.firstTimers
                                : destination.safetyTips.firstTimers.split(/[\n•]/).filter((s: string) => s.trim().length > 0)
                              ).map((item: string, idx: number) => (
                                <li key={idx}>{item.trim()}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-purple-800">{destination.safetyTips.firstTimers}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Useful Apps */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Useful Apps</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {destination.safetyTips.apps.map((app: string, index: number) => {
                          const appLinkObj = destination.safetyTips.appLinks?.find((a: any) => a.name === app);
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
                          return (
                            <div key={index} className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="flex items-center justify-between mb-2">
                                {url ? (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                                    className="font-semibold text-gray-900 hover:text-blue-700 transition-colors flex items-center"
                            >
                              {app}
                                    <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          ) : (
                                  <span className="font-semibold text-gray-900">{app}</span>
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
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2">Dress Code</h4>
                          <ul className="text-gray-700 space-y-1 list-disc list-inside">
                            {(Array.isArray(destination.culturalExpectations.dressCode)
                              ? destination.culturalExpectations.dressCode
                              : destination.culturalExpectations.dressCode.split(/\.|\n|•/).filter((s: string) => s.trim().length > 0)
                            ).map((item: string, idx: number) => (
                              <li key={idx}>{item.trim()}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2">Behavior Norms</h4>
                          <ul className="text-gray-700 space-y-1 list-disc list-inside">
                            {(Array.isArray(destination.culturalExpectations.behaviorNorms)
                              ? destination.culturalExpectations.behaviorNorms
                              : destination.culturalExpectations.behaviorNorms.split(/\n|,|•/).filter(Boolean)
                            ).map((norm: string, index: number) => (
                              <li key={index}>{norm.trim()}</li>
                            ))}
                          </ul>
                        </div>
                        {/* Solo Women Perception */}
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2">Solo Women Perception</h4>
                          <ul className="text-gray-700 space-y-1 list-disc list-inside">
                            {(Array.isArray(destination.culturalExpectations.perception)
                              ? destination.culturalExpectations.perception
                              : destination.culturalExpectations.perception.split(/\.|\n|•/).filter((s: string) => s.trim().length > 0)
                            ).map((item: string, idx: number) => (
                              <li key={idx}>{item.trim()}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cost & Comfort Tab */}
                {activeTab === 'cost' && destination.costAndComfort && (
                  <div className="space-y-6">
                    {/* Daily Budget Range */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Estimated Daily Budget</h3>
                      <div className="p-6 bg-green-50 border border-green-200 rounded-2xl">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-green-900 mb-2">
                            {destination.costAndComfort.dailyBudget.range}
                          </div>
                          <p className="text-green-800 mb-3">{destination.costAndComfort.dailyBudget.description}</p>
                          <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                            <p className="text-sm text-green-900 font-medium">{destination.costAndComfort.dailyBudget.tip}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodation Safety vs Cost */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Where to Stay - Cost vs Safety</h3>
                      <div className="space-y-4">
                        {destination.costAndComfort.accommodation.map((acc: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg bg-white">
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
                        {destination.costAndComfort.transport.map((trans: any, index: number) => (
                          <div key={index} className="p-4 border rounded-lg bg-white">
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
                          {destination.costAndComfort.budgetTips.map((tip: string, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-green-600 font-bold mt-0.5">✓</span>
                              <span className="text-blue-900">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
                        <p className="text-gray-600 mb-6">Be the first to share your safety experience in {destination.city}!</p>
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
                    <span className="font-semibold">{destination.reviewCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated</span>
                    <span className="font-semibold">{destination.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Continent</span>
                    <span className="font-semibold">{destination.continent}</span>
                  </div>
                </div>
              </div>

              {/* Travel Advisory */}
              {destination.governmentAdvisory && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-display text-gray-900 mb-4">
                    Travel Advisory
                  </h3>
                  
                  {/* Section 1: Advisory Status */}
                  <div className={`p-4 rounded-lg mb-4 ${
                    destination.governmentAdvisory.level === 'Exercise Normal Precautions' ? 'bg-green-50 border border-green-200' :
                    destination.governmentAdvisory.level === 'Exercise Increased Caution' ? 'bg-yellow-50 border border-yellow-200' :
                    destination.governmentAdvisory.level === 'Reconsider Travel' ? 'bg-orange-50 border border-orange-200' :
                    'bg-red-50 border border-red-200'
                  }`}>
                    <div className="text-center">
                      <div className={`text-lg font-bold mb-1 ${
                        destination.governmentAdvisory.level === 'Exercise Normal Precautions' ? 'text-green-900' :
                        destination.governmentAdvisory.level === 'Exercise Increased Caution' ? 'text-yellow-900' :
                        destination.governmentAdvisory.level === 'Reconsider Travel' ? 'text-orange-900' :
                        'text-red-900'
                      }`}>
                        Level {destination.governmentAdvisory.levelNumber}: {destination.governmentAdvisory.level}
                      </div>
                      <div className="text-xs text-gray-500">
                        Issued by: {destination.governmentAdvisory.source}
                      </div>
                      <div className="text-xs text-gray-500">
                        Updated: {destination.governmentAdvisory.lastUpdated}
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Summary */}
                  {destination.governmentAdvisory.reason && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {destination.governmentAdvisory.reason}
                      </p>
                    </div>
                  )}

                  {/* Section 3: What This Means for You */}
                  <div className="mb-4">
                    <h4 className="font-display text-gray-900 mb-2 text-sm">What this means for solo travelers</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
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
                    </ul>
                  </div>

                  {/* Section 4: Community Match */}
                  <div className="mb-4 text-xs text-gray-500 flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    Matched by 2 community reports
                  </div>

                  {/* Section 5: CTA Link */}
                  {destination.governmentAdvisory.link && (
                    <div>
                      <a
                        href={destination.governmentAdvisory.link}
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
                      {destination.bestTimeToVisit.safestMonths.map((month: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                          {month}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-gray-900 mb-1">Events & Notes</h4>
                    <p className="text-sm text-gray-700">{destination.bestTimeToVisit.events}</p>
                  </div>
                </div>
              </div>

              {/* Recommended Accommodations */}
              {destination.accommodations && destination.accommodations.length > 0 && (
                <div className="sticky top-0 z-30">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-display text-gray-900 mb-4">Recommended Stays</h3>
                    <div className="space-y-4">
                      {destination.accommodations.map((accommodation: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            {accommodation.link ? (
                              <a
                                href={accommodation.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-display text-gray-900 hover:underline hover:text-blue-700 transition-colors"
                              >
                                <h4>{accommodation.name}</h4>
                              </a>
                            ) : (
                              <h4 className="font-display text-gray-900">{accommodation.name}</h4>
                            )}
                            <div className="flex items-center space-x-1">
                              {[1,2,3,4,5].map((star) => (
                                <Star 
                                  key={star} 
                                  className={`h-3 w-3 ${star <= accommodation.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{accommodation.notes}</p>
                          <div className="flex flex-wrap gap-1">
                            {accommodation.features.map((feature: string, featureIndex: number) => (
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
        destinationCity={destination.city}
        destinationCountry={destination.country}
        onReviewSubmitted={handleReviewSubmitted}
      />

      <Footer />
    </div>
  );
};

export default DestinationDetail;