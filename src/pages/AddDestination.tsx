import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Globe, 
  Flag, 
  ArrowLeft, 
  Save, 
  X, 
  Star,
  Moon,
  Bus,
  Users,
  Shield,
  AlertTriangle,
  Home,
  Calendar,
  Lightbulb,
  Info
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { createDestination } from '../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddDestination: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Basic Information
    city: '',
    country: '',
    continent: '',
    country_code: '',
    description: '',
    
    // Safety Scores (1-10 scale)
    overall_score: 0,
    night_safety: 0,
    public_transit: 0,
    walking_alone: 0,
    harassment_risk: 'low' as 'low' | 'medium' | 'high',
    
    // Safety Details
    night_safety_context: '',
    public_transit_context: '',
    walking_alone_context: '',
    
    // Neighborhoods
    safe_neighborhoods: '',
    caution_neighborhoods: '',
    avoid_neighborhoods: '',
    
    // Accommodations
    recommended_accommodations: '',
    accommodation_tips: '',
    
    // Safety Tips
    clothing_tips: '',
    first_timer_tips: '',
    useful_apps: '',
    emergency_phrases: '',
    
    // Cultural Information
    dress_code: '',
    behavior_norms: '',
    solo_women_perception: '',
    
    // Best Time to Visit
    safest_months: '',
    events_festivals: '',
    
    // Additional Information
    common_scams: '',
    emergency_contacts: '',
    language_barrier_tips: ''
  });

  const continents = [
    'Asia',
    'Europe', 
    'North America',
    'South America',
    'Africa',
    'Oceania'
  ];

  const harassmentLevels = [
    { value: 'low', label: 'Low', description: 'Minimal harassment, respectful culture' },
    { value: 'medium', label: 'Medium', description: 'Some harassment, stay alert' },
    { value: 'high', label: 'High', description: 'Significant harassment, extra precautions needed' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('You must be signed in to add a destination');
      return;
    }

    // Validation
    if (!formData.city.trim() || !formData.country.trim() || !formData.continent || !formData.country_code.trim()) {
      setError('Please fill in all basic destination information');
      return;
    }

    if (formData.overall_score === 0 || formData.night_safety === 0 || formData.public_transit === 0 || formData.walking_alone === 0) {
      setError('Please provide all safety scores');
      return;
    }

    if (!formData.description.trim()) {
      setError('Please provide a description of why this destination should be added');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create comprehensive destination data
      const destinationData = {
        city: formData.city.trim(),
        country: formData.country.trim(),
        continent: formData.continent,
        country_code: formData.country_code.toLowerCase().trim(),
        description: formData.description.trim(),
        
        // Additional data for when approved
        safety_data: {
          overall_score: formData.overall_score,
          night_safety: formData.night_safety,
          public_transit: formData.public_transit,
          walking_alone: formData.walking_alone,
          harassment_risk: formData.harassment_risk,
          safety_breakdown: {
            night_safety: {
              score: formData.night_safety,
              context: formData.night_safety_context
            },
            public_transit: {
              score: formData.public_transit,
              context: formData.public_transit_context
            },
            walking_alone: {
              score: formData.walking_alone,
              context: formData.walking_alone_context
            }
          },
          neighborhoods: {
            safe: formData.safe_neighborhoods.split(',').map(n => n.trim()).filter(n => n),
            caution: formData.caution_neighborhoods.split(',').map(n => n.trim()).filter(n => n),
            avoid: formData.avoid_neighborhoods.split(',').map(n => n.trim()).filter(n => n)
          },
          accommodations: {
            recommendations: formData.recommended_accommodations,
            tips: formData.accommodation_tips
          },
          safety_tips: {
            clothing: formData.clothing_tips,
            first_timers: formData.first_timer_tips,
            apps: formData.useful_apps.split(',').map(a => a.trim()).filter(a => a),
            emergency_phrases: formData.emergency_phrases.split(',').map(p => p.trim()).filter(p => p)
          },
          cultural_expectations: {
            dress_code: formData.dress_code,
            behavior_norms: formData.behavior_norms.split(',').map(n => n.trim()).filter(n => n),
            perception: formData.solo_women_perception
          },
          best_time_to_visit: {
            safest_months: formData.safest_months.split(',').map(m => m.trim()).filter(m => m),
            events: formData.events_festivals
          },
          additional_info: {
            common_scams: formData.common_scams,
            emergency_contacts: formData.emergency_contacts,
            language_tips: formData.language_barrier_tips
          }
        }
      };

      const { error } = await createDestination(destinationData);

      if (error) {
        setError(error.message);
      } else {
        navigate('/profile');
        alert('Destination submitted successfully! It will be reviewed and added to our database with all the safety information you provided.');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      city: '',
      country: '',
      continent: '',
      country_code: '',
      description: '',
      overall_score: 0,
      night_safety: 0,
      public_transit: 0,
      walking_alone: 0,
      harassment_risk: 'low',
      night_safety_context: '',
      public_transit_context: '',
      walking_alone_context: '',
      safe_neighborhoods: '',
      caution_neighborhoods: '',
      avoid_neighborhoods: '',
      recommended_accommodations: '',
      accommodation_tips: '',
      clothing_tips: '',
      first_timer_tips: '',
      useful_apps: '',
      emergency_phrases: '',
      dress_code: '',
      behavior_norms: '',
      solo_women_perception: '',
      safest_months: '',
      events_festivals: '',
      common_scams: '',
      emergency_contacts: '',
      language_barrier_tips: ''
    });
    setError('');
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StarRating: React.FC<{ 
    rating: number; 
    onRatingChange: (rating: number) => void;
    label: string;
  }> = ({ rating, onRatingChange, label }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label} *</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="transition-all duration-200 hover:scale-110"
          >
            <Star 
              className={`h-5 w-5 ${
                star <= rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300 hover:text-yellow-300'
              }`} 
            />
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-500">{rating}/10</div>
    </div>
  );

  const steps = [
    { number: 1, title: 'Basic Info', icon: MapPin },
    { number: 2, title: 'Safety Scores', icon: Shield },
    { number: 3, title: 'Detailed Info', icon: Info },
    { number: 4, title: 'Cultural Tips', icon: Globe }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <div className="pt-24 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-display text-gray-900 mb-4">Please sign in to add a destination</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="pt-24 px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/profile')}
              className="inline-flex items-center text-primary-400 hover:text-primary-500 font-medium transition-all duration-300 hover:scale-105 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h1 className="text-3xl font-display text-gray-900 mb-2">Add New Destination</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Help expand our safety database by providing comprehensive information about a destination for solo female travelers.
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentStep === step.number 
                      ? 'bg-primary-400 text-white' 
                      : currentStep > step.number 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600'
                  }`}>
                    <step.icon className="h-4 w-4" />
                    <span className="font-medium text-sm">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 ${
                      currentStep > step.number ? 'bg-green-400' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-display text-gray-900 mb-4">Basic Destination Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City Name *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                          placeholder="e.g., Barcelona, Mumbai, Seoul"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <div className="relative">
                        <Flag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData({...formData, country: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                          placeholder="e.g., Spain, India, South Korea"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="continent" className="block text-sm font-medium text-gray-700 mb-2">
                        Continent *
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select
                          id="continent"
                          value={formData.continent}
                          onChange={(e) => setFormData({...formData, continent: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 appearance-none"
                          required
                        >
                          <option value="">Select a continent</option>
                          {continents.map((continent) => (
                            <option key={continent} value={continent}>
                              {continent}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="country_code" className="block text-sm font-medium text-gray-700 mb-2">
                        Country Code *
                      </label>
                      <div className="relative">
                        <Flag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="country_code"
                          value={formData.country_code}
                          onChange={(e) => setFormData({...formData, country_code: e.target.value.toLowerCase()})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                          placeholder="e.g., es, in, kr (2-letter ISO code)"
                          maxLength={2}
                          pattern="[a-z]{2}"
                          required
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        2-letter ISO country code for flag display
                      </p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Why should this destination be added? *
                    </label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                      placeholder="Describe why this destination would be valuable for solo female travelers..."
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Safety Scores */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-display text-gray-900 mb-4">Safety Scores & Assessment</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StarRating 
                      rating={formData.overall_score}
                      onRatingChange={(rating) => setFormData({...formData, overall_score: rating})}
                      label="Overall Safety Score"
                    />
                    <StarRating 
                      rating={formData.night_safety}
                      onRatingChange={(rating) => setFormData({...formData, night_safety: rating})}
                      label="Night Safety"
                    />
                    <StarRating 
                      rating={formData.public_transit}
                      onRatingChange={(rating) => setFormData({...formData, public_transit: rating})}
                      label="Public Transit Safety"
                    />
                    <StarRating 
                      rating={formData.walking_alone}
                      onRatingChange={(rating) => setFormData({...formData, walking_alone: rating})}
                      label="Walking Alone Safety"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Harassment Risk Level *
                    </label>
                    <div className="space-y-3">
                      {harassmentLevels.map((level) => (
                        <label key={level.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                          <input
                            type="radio"
                            name="harassmentLevel"
                            value={level.value}
                            checked={formData.harassment_risk === level.value}
                            onChange={(e) => setFormData({...formData, harassment_risk: e.target.value as 'low' | 'medium' | 'high'})}
                            className="mt-1 text-primary-400 focus:ring-primary-400"
                          />
                          <div>
                            <span className={`font-medium px-2 py-1 rounded text-sm ${
                              level.value === 'low' ? 'bg-green-100 text-green-800' :
                              level.value === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {level.label}
                            </span>
                            <p className="text-sm text-gray-600 mt-1">{level.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Night Safety Context
                      </label>
                      <textarea
                        value={formData.night_safety_context}
                        onChange={(e) => setFormData({...formData, night_safety_context: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                        placeholder="Describe the night safety situation, well-lit areas, police presence, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Public Transit Context
                      </label>
                      <textarea
                        value={formData.public_transit_context}
                        onChange={(e) => setFormData({...formData, public_transit_context: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                        placeholder="Describe public transport safety, women-only cars, cleanliness, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Walking Alone Context
                      </label>
                      <textarea
                        value={formData.walking_alone_context}
                        onChange={(e) => setFormData({...formData, walking_alone_context: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                        placeholder="Describe the experience of walking alone, staring, comments, etc."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Detailed Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-display text-gray-900 mb-4">Detailed Safety Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                        <Home className="h-5 w-5 mr-2 text-blue-500" />
                        Neighborhoods
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Safe Areas
                          </label>
                          <textarea
                            value={formData.safe_neighborhoods}
                            onChange={(e) => setFormData({...formData, safe_neighborhoods: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="List safe neighborhoods (comma-separated)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Use Caution
                          </label>
                          <textarea
                            value={formData.caution_neighborhoods}
                            onChange={(e) => setFormData({...formData, caution_neighborhoods: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Areas requiring caution (comma-separated)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Avoid Areas
                          </label>
                          <textarea
                            value={formData.avoid_neighborhoods}
                            onChange={(e) => setFormData({...formData, avoid_neighborhoods: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Areas to avoid (comma-separated)"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-purple-500" />
                        Accommodations
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Recommended Places
                          </label>
                          <textarea
                            value={formData.recommended_accommodations}
                            onChange={(e) => setFormData({...formData, recommended_accommodations: e.target.value})}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="List safe hotels, hostels, or areas to stay"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Accommodation Tips
                          </label>
                          <textarea
                            value={formData.accommodation_tips}
                            onChange={(e) => setFormData({...formData, accommodation_tips: e.target.value})}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Tips for booking safe accommodations"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                        Safety Tips
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Clothing Recommendations
                          </label>
                          <textarea
                            value={formData.clothing_tips}
                            onChange={(e) => setFormData({...formData, clothing_tips: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="What to wear for safety and cultural respect"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First-Timer Tips
                          </label>
                          <textarea
                            value={formData.first_timer_tips}
                            onChange={(e) => setFormData({...formData, first_timer_tips: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Essential tips for first-time visitors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Useful Apps
                          </label>
                          <input
                            type="text"
                            value={formData.useful_apps}
                            onChange={(e) => setFormData({...formData, useful_apps: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Comma-separated list of helpful apps"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Emergency Phrases
                          </label>
                          <input
                            type="text"
                            value={formData.emergency_phrases}
                            onChange={(e) => setFormData({...formData, emergency_phrases: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Key phrases in local language (comma-separated)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Cultural Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-display text-gray-900 mb-4">Cultural Information & Best Practices</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-blue-500" />
                        Cultural Expectations
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Dress Code Expectations
                          </label>
                          <textarea
                            value={formData.dress_code}
                            onChange={(e) => setFormData({...formData, dress_code: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Local dress code expectations and cultural norms"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Behavior Norms
                          </label>
                          <textarea
                            value={formData.behavior_norms}
                            onChange={(e) => setFormData({...formData, behavior_norms: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Important behavioral expectations (comma-separated)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Solo Women Perception
                          </label>
                          <textarea
                            value={formData.solo_women_perception}
                            onChange={(e) => setFormData({...formData, solo_women_perception: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="How solo female travelers are perceived locally"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-green-500" />
                        Best Time to Visit
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Safest Months
                          </label>
                          <input
                            type="text"
                            value={formData.safest_months}
                            onChange={(e) => setFormData({...formData, safest_months: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Best months for safety (comma-separated)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Events & Festivals
                          </label>
                          <textarea
                            value={formData.events_festivals}
                            onChange={(e) => setFormData({...formData, events_festivals: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Important events, festivals, or times to avoid"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                        Additional Safety Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Common Scams
                          </label>
                          <textarea
                            value={formData.common_scams}
                            onChange={(e) => setFormData({...formData, common_scams: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Common scams targeting tourists"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Emergency Contacts
                          </label>
                          <textarea
                            value={formData.emergency_contacts}
                            onChange={(e) => setFormData({...formData, emergency_contacts: e.target.value})}
                            rows={2}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Local emergency numbers and contacts"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Language Barrier Tips
                          </label>
                          <textarea
                            value={formData.language_barrier_tips}
                            onChange={(e) => setFormData({...formData, language_barrier_tips: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
                            placeholder="Tips for overcoming language barriers"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      Previous
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All
                  </button>
                </div>

                <div className="flex space-x-4">
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Submit Destination
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-display text-blue-900 mb-1">Comprehensive Review Process</h4>
                <p className="text-sm text-blue-800">
                  Your detailed destination submission will be thoroughly reviewed by our safety experts. Once approved, 
                  all the information you've provided will be automatically integrated into our destination database, 
                  making it immediately available to other solo female travelers with complete safety scores, 
                  neighborhood guides, cultural tips, and all the valuable insights you've shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddDestination;