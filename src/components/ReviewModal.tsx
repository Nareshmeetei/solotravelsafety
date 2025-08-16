import React, { useState, useRef, useEffect } from 'react'
import { X, Star, Calendar, Search } from 'lucide-react'
// TODO: Import auth when rebuilding
// import { useAuth } from '../contexts/AuthContext'
import { createReview } from '../lib/supabase'

interface ReviewModalProps {
  isOpen: boolean
  onClose: () => void
  destinationCity?: string
  destinationCountry?: string
  onReviewSubmitted?: () => void
}

const ReviewModal: React.FC<ReviewModalProps> = ({ 
  isOpen, 
  onClose, 
  destinationCity = '', 
  destinationCountry = '',
  onReviewSubmitted 
}) => {
  // TODO: Get user from auth context when rebuilding
  const user = null; // TODO: Get user from auth context
  const modalRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  // Form state
  const [selectedCity, setSelectedCity] = useState(destinationCity)
  const [selectedCountry, setSelectedCountry] = useState(destinationCountry)
  const [searchQuery, setSearchQuery] = useState('')
  const [overallRating, setOverallRating] = useState(0)
  const [nightSafetyRating, setNightSafetyRating] = useState(0)
  const [publicTransitRating, setPublicTransitRating] = useState(0)
  const [walkingAloneRating, setWalkingAloneRating] = useState(0)
  const [harassmentLevel, setHarassmentLevel] = useState<'low' | 'medium' | 'high'>('low')
  const [reviewText, setReviewText] = useState('')
  const [visitedDate, setVisitedDate] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // All destinations (existing + popular)
  const allDestinations = [
    { city: 'Tokyo', country: 'Japan' },
    { city: 'Seoul', country: 'South Korea' },
    { city: 'Singapore', country: 'Singapore' },
    { city: 'Bangkok', country: 'Thailand' },
    { city: 'Mumbai', country: 'India' },
    { city: 'Copenhagen', country: 'Denmark' },
    { city: 'Barcelona', country: 'Spain' },
    { city: 'Reykjavik', country: 'Iceland' },
    { city: 'Amsterdam', country: 'Netherlands' },
    { city: 'Stockholm', country: 'Sweden' },
    { city: 'Zurich', country: 'Switzerland' },
    { city: 'Vienna', country: 'Austria' },
    { city: 'Helsinki', country: 'Finland' },
    { city: 'Vancouver', country: 'Canada' },
    { city: 'Melbourne', country: 'Australia' },
    { city: 'Cairo', country: 'Egypt' },
    { city: 'Marrakech', country: 'Morocco' },
    { city: 'Rio de Janeiro', country: 'Brazil' },
    { city: 'Paris', country: 'France' },
    { city: 'London', country: 'United Kingdom' },
    { city: 'Berlin', country: 'Germany' },
    { city: 'Rome', country: 'Italy' },
    { city: 'Prague', country: 'Czech Republic' },
    { city: 'Budapest', country: 'Hungary' },
    { city: 'Lisbon', country: 'Portugal' },
    { city: 'Dublin', country: 'Ireland' },
    { city: 'Edinburgh', country: 'Scotland' },
    { city: 'Oslo', country: 'Norway' },
    { city: 'New York', country: 'United States' },
    { city: 'San Francisco', country: 'United States' },
    { city: 'Los Angeles', country: 'United States' },
    { city: 'Toronto', country: 'Canada' },
    { city: 'Montreal', country: 'Canada' },
    { city: 'Sydney', country: 'Australia' },
    { city: 'Auckland', country: 'New Zealand' },
    { city: 'Wellington', country: 'New Zealand' },
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Santiago', country: 'Chile' },
    { city: 'Lima', country: 'Peru' },
    { city: 'Mexico City', country: 'Mexico' },
    { city: 'Cancun', country: 'Mexico' },
    { city: 'Istanbul', country: 'Turkey' },
    { city: 'Athens', country: 'Greece' },
    { city: 'Santorini', country: 'Greece' },
    { city: 'Tel Aviv', country: 'Israel' },
    { city: 'Dubai', country: 'United Arab Emirates' },
    { city: 'Doha', country: 'Qatar' },
    { city: 'Hong Kong', country: 'Hong Kong' },
    { city: 'Taipei', country: 'Taiwan' },
    { city: 'Kuala Lumpur', country: 'Malaysia' },
    { city: 'Jakarta', country: 'Indonesia' },
    { city: 'Manila', country: 'Philippines' },
    { city: 'Ho Chi Minh City', country: 'Vietnam' },
    { city: 'Hanoi', country: 'Vietnam' },
    { city: 'Phnom Penh', country: 'Cambodia' },
    { city: 'Yangon', country: 'Myanmar' },
    { city: 'Colombo', country: 'Sri Lanka' },
    { city: 'Kathmandu', country: 'Nepal' },
    { city: 'Delhi', country: 'India' },
    { city: 'Bangalore', country: 'India' },
    { city: 'Chennai', country: 'India' },
    { city: 'Kolkata', country: 'India' },
    { city: 'Goa', country: 'India' },
    { city: 'Jaipur', country: 'India' },
    { city: 'Agra', country: 'India' },
    { city: 'Varanasi', country: 'India' },
    { city: 'Rishikesh', country: 'India' },
    { city: 'Dharamshala', country: 'India' },
    { city: 'Manali', country: 'India' },
    { city: 'Leh', country: 'India' },
    { city: 'Srinagar', country: 'India' },
    { city: 'Kochi', country: 'India' },
    { city: 'Alleppey', country: 'India' },
    { city: 'Munnar', country: 'India' },
    { city: 'Hampi', country: 'India' },
    { city: 'Mysore', country: 'India' },
    { city: 'Udaipur', country: 'India' },
    { city: 'Jodhpur', country: 'India' },
    { city: 'Pushkar', country: 'India' },
    { city: 'McLeod Ganj', country: 'India' },
    { city: 'Pondicherry', country: 'India' },
    { city: 'Darjeeling', country: 'India' },
    { city: 'Gangtok', country: 'India' },
    { city: 'Shillong', country: 'India' },
    { city: 'Guwahati', country: 'India' },
    { city: 'Imphal', country: 'India' },
    { city: 'Aizawl', country: 'India' },
    { city: 'Kohima', country: 'India' },
    { city: 'Itanagar', country: 'India' },
    { city: 'Dispur', country: 'India' },
    { city: 'Agartala', country: 'India' }
  ]

  const availableTags = [
    'felt safe', 'catcalled', 'friendly locals', 'scammed', 'helpful staff',
    'great transport', 'good nightlife', 'expensive', 'language barrier',
    'clean', 'crowded', 'peaceful', 'tourist-friendly', 'authentic experience'
  ]

  // Filter destinations based on search query
  const filteredDestinations = allDestinations.filter(dest => 
    dest.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Handle clicking outside modal to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSelectedCity(destinationCity)
      setSelectedCountry(destinationCountry)
      setError('')
      setSuccess('')
      setSearchQuery('')
    }
  }, [isOpen, destinationCity, destinationCountry])

  const resetForm = () => {
    setSelectedCity('')
    setSelectedCountry('')
    setSearchQuery('')
    setOverallRating(0)
    setNightSafetyRating(0)
    setPublicTransitRating(0)
    setWalkingAloneRating(0)
    setHarassmentLevel('low')
    setReviewText('')
    setVisitedDate('')
    setSelectedTags([])
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setError('You must be signed in to submit a review')
      return
    }

    // Validation
    if (!selectedCity.trim() || !selectedCountry.trim()) {
      setError('Please select a destination')
      return
    }

    if (!overallRating || !nightSafetyRating || !publicTransitRating || !walkingAloneRating) {
      setError('Please provide all safety ratings')
      return
    }

    if (!reviewText.trim()) {
      setError('Please write your experience')
      return
    }

    if (!visitedDate) {
      setError('Please select when you visited')
      return
    }

    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const reviewData = {
        destination_city: selectedCity.trim(),
        destination_country: selectedCountry.trim(),
        overall_rating: overallRating,
        night_safety_rating: nightSafetyRating,
        public_transit_rating: publicTransitRating,
        walking_alone_rating: walkingAloneRating,
        harassment_level: harassmentLevel,
        review_text: reviewText.trim(),
        tags: selectedTags,
        visited_date: visitedDate
      }

      const { error } = await createReview(reviewData)

      if (error) {
        console.error('Review submission error:', error)
        setError(error.message || 'Failed to submit review. Please try again.')
      } else {
        setSuccess('Review submitted successfully!')
        resetForm()
        
        // Close modal after a short delay to show success message
        setTimeout(() => {
          onClose()
          onReviewSubmitted?.()
        }, 1500)
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const selectDestination = (city: string, country: string) => {
    setSelectedCity(city)
    setSelectedCountry(country)
    setSearchQuery(`${city}, ${country}`)
  }

  const StarRating: React.FC<{ 
    rating: number; 
    onRatingChange: (rating: number) => void;
    label: string;
  }> = ({ rating, onRatingChange, label }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="transition-all duration-200 hover:scale-110"
          >
            <Star 
              className={`h-6 w-6 ${
                star <= rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300 hover:text-yellow-300'
              }`} 
            />
          </button>
        ))}
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto p-4">
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl mx-auto my-8 bg-white rounded-2xl shadow-xl animate-fade-in max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-100">
                        <h2 className="text-2xl font-display text-gray-900 mb-2">
                Share Your Safety Experience
              </h2>
          <p className="text-gray-600">
            Help other solo female travelers by sharing your honest safety insights
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Status Messages */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {success}
            </div>
          )}

          {/* Destination Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Search for your destination *
            </label>
            
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                placeholder="Search destinations (e.g., Tokyo, Japan or Bangkok)"
              />
            </div>

            {/* Selected Destination Display */}
            {selectedCity && selectedCountry && (
              <div className="mb-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-sm text-primary-800">
                  <strong>Selected:</strong> {selectedCity}, {selectedCountry}
                </p>
              </div>
            )}

            {/* Destination Results */}
            <div>
              <p className="text-sm text-gray-600 mb-3">
                {searchQuery ? 'Search results:' : 'Or select from popular destinations:'}
              </p>
              <div className="max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(searchQuery ? filteredDestinations : allDestinations.slice(0, 18)).map((dest, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectDestination(dest.city, dest.country)}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 ${
                        selectedCity === dest.city && selectedCountry === dest.country
                          ? 'bg-primary-100 text-primary-800 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {dest.city}, {dest.country}
                    </button>
                  ))}
                </div>
                {searchQuery && filteredDestinations.length === 0 && (
                  <p className="text-gray-500 text-sm text-center py-4">
                    No destinations found. Try a different search term.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Visit Date and Harassment Level in Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Visit Date */}
            <div>
              <label htmlFor="visitedDate" className="block text-sm font-medium text-gray-700 mb-2">
                When did you visit? *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="month"
                  id="visitedDate"
                  value={visitedDate}
                  onChange={(e) => setVisitedDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Harassment Level */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harassment Level Experienced *
              </label>
              <div className="flex space-x-4">
                {(['low', 'medium', 'high'] as const).map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      type="radio"
                      name="harassmentLevel"
                      value={level}
                      checked={harassmentLevel === level}
                      onChange={(e) => setHarassmentLevel(e.target.value as 'low' | 'medium' | 'high')}
                      className="mr-2 text-primary-400 focus:ring-primary-400"
                    />
                    <span className={`capitalize px-3 py-1 rounded-full text-sm font-medium ${
                      level === 'low' ? 'bg-green-100 text-green-800' :
                      level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Ratings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StarRating 
              rating={overallRating}
              onRatingChange={setOverallRating}
              label="Overall Safety *"
            />
            <StarRating 
              rating={nightSafetyRating}
              onRatingChange={setNightSafetyRating}
              label="Night Safety *"
            />
            <StarRating 
              rating={publicTransitRating}
              onRatingChange={setPublicTransitRating}
              label="Public Transit *"
            />
            <StarRating 
              rating={walkingAloneRating}
              onRatingChange={setWalkingAloneRating}
              label="Walking Alone *"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags (select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-primary-400 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-2">
              Your Experience *
            </label>
            <textarea
              id="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 resize-none"
              placeholder="Share your experience, tips, and advice for other solo female travelers..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !user || !selectedCity || !selectedCountry || !overallRating || !nightSafetyRating || !publicTransitRating || !walkingAloneRating || !reviewText.trim() || !visitedDate}
              className="flex-1 bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewModal