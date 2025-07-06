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
  EyeOff
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewModal from '../components/ReviewModal';
import { getDestinationBySlug } from '../data/destinations';
import { getReviewsForDestination } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import SafetyByTimeOfDay from '../components/SafetyByTimeOfDay';
import MostReportedRedFlags from '../components/MostReportedRedFlags';
import CulturalSensitivityTips from '../components/CulturalSensitivityTips';
import WomensConfidenceScore from '../components/WomensConfidenceScore';
import ConfidenceByActivity from '../components/ConfidenceByActivity';
import LanguageAndHelp from '../components/LanguageAndHelp';

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
    { id: 'safety', label: 'Safety Details', icon: Shield },
    { id: 'practical', label: 'Practical Info', icon: MapPin },
    { id: 'reviews', label: `Reviews (${reviews.length})`, icon: MessageSquare }
  ];

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
              <div className="w-20 h-12 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src={`https://flagcdn.com/w80/${destination.countryCode}.png`}
                  alt={`${destination.country} flag`}
                  className="w-full h-full object-cover"
                />
              </div>
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
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              
              {/* Tab Navigation */}
              <div className="hidden sm:block bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
                <div className="flex space-x-8 overflow-x-auto px-6">
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
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Floating Mobile Tab Bar */}
              <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 flex justify-around py-2 shadow-md">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center px-2 py-1 text-xs font-medium focus:outline-none transition-all duration-200 ${
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

                    {/* Alerts - moved up below SafetyByTimeOfDay */}
                    {destination.alerts && destination.alerts.length > 0 && (
                      <div>
                        <h3 className="text-xl font-display text-gray-900 mb-4 flex items-center">
                          <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                          Current Safety Alerts
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
                    <CulturalSensitivityTips />
                    <WomensConfidenceScore />
                    <ConfidenceByActivity />
                    <LanguageAndHelp languages={destination.languages} />
                    {/* --- END NEW DATA SECTIONS --- */}

                    {/* Currency Information - moved to bottom */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">
                        Currency & Exchange
                      </h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-display text-blue-900 mb-2">Local Currency</h4>
                            <p className="text-blue-800">{destination.currency.name} ({destination.currency.code})</p>
                          </div>
                          <div>
                            <h4 className="font-display text-blue-900 mb-2">Exchange Rates (1 {destination.currency.code})</h4>
                            <div className="space-y-1 text-sm text-blue-800">
                              <p>USD: {formatCurrency(1/destination.currency.exchangeRate.usd, 'USD')}</p>
                              <p>EUR: {formatCurrency(1/destination.currency.exchangeRate.eur, 'EUR')}</p>
                              <p>GBP: {formatCurrency(1/destination.currency.exchangeRate.gbp, 'GBP')}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-display text-blue-900 mb-2">Exchange Tips</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            {destination.currency.scamWarnings.map((warning: string, index: number) => (
                              <li key={index}>• {warning}</li>
                            ))}
                          </ul>
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
                                  <h4 className={`font-semibold mb-1 text-green-900`}>
                                    {tip.title}
                                  </h4>
                                  <p className={`text-sm text-green-800`}>
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
                                    <h4 className={`font-semibold mb-1 text-green-900`}>
                                      {scam.title}
                                    </h4>
                                    <p className={`text-sm text-green-800`}>
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
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <h4 className="font-display text-green-900 mb-2">Safe Areas</h4>
                          <ul className="text-sm text-green-800 space-y-1">
                            {destination.neighborhoods.safe.map((area: string, index: number) => (
                              <li key={index}>• {area}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <h4 className="font-display text-yellow-900 mb-2">Use Caution</h4>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            {destination.neighborhoods.caution.map((area: string, index: number) => (
                              <li key={index}>• {area}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="font-display text-red-900 mb-2">Avoid</h4>
                          <ul className="text-sm text-red-800 space-y-1">
                            {destination.neighborhoods.avoid.map((area: string, index: number) => (
                              <li key={index}>• {area}</li>
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
                          <p className="text-sm text-blue-800">{destination.safetyTips.clothing}</p>
                        </div>
                        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <h4 className="font-display text-purple-900 mb-2">First-Timer Tips</h4>
                          <p className="text-sm text-purple-800">{destination.safetyTips.firstTimers}</p>
                        </div>
                      </div>
                    </div>

                    {/* Useful Apps */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Useful Apps</h3>
                      <div className="flex flex-wrap gap-2">
                        {destination.safetyTips.apps.map((app: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Emergency Phrases */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Emergency Phrases</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {destination.safetyTips.emergencyPhrases.map((phrase: string, index: number) => (
                          <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-800 font-medium">{phrase}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cultural Expectations */}
                    <div>
                      <h3 className="text-xl font-display text-gray-900 mb-4">Cultural Information</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2">Dress Code</h4>
                          <p className="text-gray-700">{destination.culturalExpectations.dressCode}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2">Behavior Norms</h4>
                          <ul className="text-gray-700 space-y-1">
                            {destination.culturalExpectations.behaviorNorms.map((norm: string, index: number) => (
                              <li key={index}>• {norm}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-display text-gray-900 mb-2">Solo Women Perception</h4>
                          <p className="text-gray-700">{destination.culturalExpectations.perception}</p>
                        </div>
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

              {/* Best Time to Visit */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-display text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
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
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-display text-gray-900 mb-4">Recommended Stays</h3>
                  <div className="space-y-4">
                    {destination.accommodations.map((accommodation: any, index: number) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-gray-900">{accommodation.name}</h4>
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