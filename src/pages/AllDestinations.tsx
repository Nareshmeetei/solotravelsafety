import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, MapPin, Moon, Bus, Users, Lightbulb, AlertTriangle, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { destinations } from '../data/destinations';

const AllDestinations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('overall-score');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedSafetyLevel, setSelectedSafetyLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const continents = ['all', 'Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'];
  const safetyLevels = [
    { value: 'all', label: 'All Safety Levels' },
    { value: 'high', label: 'High Safety (8.0+)' },
    { value: 'medium', label: 'Medium Safety (6.0-7.9)' },
    { value: 'low', label: 'Low Safety (Below 6.0)' },
  ];

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = destinations.filter(destination => {
      // Search filter
      const matchesSearch = destination.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           destination.country.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Continent filter
      const matchesContinent = selectedContinent === 'all' || destination.continent === selectedContinent;
      
      // Safety level filter
      let matchesSafetyLevel = true;
      if (selectedSafetyLevel === 'high') {
        matchesSafetyLevel = destination.overallScore >= 8.0;
      } else if (selectedSafetyLevel === 'medium') {
        matchesSafetyLevel = destination.overallScore >= 6.0 && destination.overallScore < 8.0;
      } else if (selectedSafetyLevel === 'low') {
        matchesSafetyLevel = destination.overallScore < 6.0;
      }
      
      return matchesSearch && matchesContinent && matchesSafetyLevel;
    });

    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'overall-score':
          aValue = a.overallScore;
          bValue = b.overallScore;
          break;
        case 'night-safety':
          aValue = a.nightSafety;
          bValue = b.nightSafety;
          break;
        case 'public-transit':
          aValue = a.publicTransit;
          bValue = b.publicTransit;
          break;
        case 'walking-alone':
          aValue = a.walkingAlone;
          bValue = b.walkingAlone;
          break;
        case 'alphabetical':
          aValue = a.city;
          bValue = b.city;
          break;
        case 'reviews':
          aValue = a.reviewCount;
          bValue = b.reviewCount;
          break;
        default:
          aValue = a.overallScore;
          bValue = b.overallScore;
      }
      
      if (sortBy === 'alphabetical') {
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [searchQuery, selectedContinent, selectedSafetyLevel, sortBy, sortOrder]);

  // Dynamic background color based on safety score with lighter hover states
  const getSafetyBackgroundColor = (score: number) => {
    if (score >= 8.0) {
      return 'bg-green-50 border-green-200 hover:bg-green-25'; // High safety - lighter green on hover
    } else if (score >= 6.0) {
      return 'bg-yellow-50 border-yellow-200 hover:bg-yellow-25'; // Medium safety - lighter yellow on hover
    } else {
      return 'bg-red-50 border-red-200 hover:bg-red-25'; // Low safety - lighter red on hover
    }
  };

  // Dynamic icon color based on safety score
  const getSafetyIconColor = (score: number) => {
    if (score >= 8.0) {
      return 'bg-green-100 text-green-600'; // High safety - green
    } else if (score >= 6.0) {
      return 'bg-yellow-100 text-yellow-600'; // Medium safety - yellow
    } else {
      return 'bg-red-100 text-red-600'; // Low safety - red
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const renderScoreBar = (score: number) => {
    const percentage = (score / 10) * 100;
    const colorClass = score >= 8 ? 'bg-green-400' : score >= 6 ? 'bg-yellow-400' : 'bg-red-400';
    
    return (
      <div className="h-1.5 w-12 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedContinent('all');
    setSelectedSafetyLevel('all');
    setSortBy('overall-score');
    setSortOrder('desc');
  };

  const handleDestinationClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <section className="bg-white pt-24 pb-12 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display text-gray-900 mb-4 animate-fade-in-up">
              All Destinations
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Explore safety insights for destinations worldwide, shared by solo female travelers like you.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 focus:scale-[1.02] focus-smooth"
              />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:scale-105 focus-smooth"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2 transition-transform duration-300" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300 focus-smooth"
                >
                  <option value="overall-score">Overall Safety</option>
                  <option value="night-safety">Night Safety</option>
                  <option value="public-transit">Public Transit</option>
                  <option value="walking-alone">Walking Alone</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="reviews">Review Count</option>
                </select>
                
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105 focus-smooth"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
              
              <div className="text-sm text-gray-600 animate-fade-in">
                {filteredAndSortedDestinations.length} destinations found
              </div>
              
              {(searchQuery || selectedContinent !== 'all' || selectedSafetyLevel !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-all duration-300 hover:scale-105 focus-smooth"
                >
                  <X className="h-4 w-4 mr-1 transition-transform duration-300 hover:rotate-90" />
                  Clear Filters
                </button>
              )}
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <div className="border-t border-gray-100 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-down">
                <div className="animate-fade-in-left">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Continent</label>
                  <select
                    value={selectedContinent}
                    onChange={(e) => setSelectedContinent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300 focus-smooth"
                  >
                    {continents.map(continent => (
                      <option key={continent} value={continent}>
                        {continent === 'all' ? 'All Continents' : continent}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="animate-fade-in animate-delay-100">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Safety Level</label>
                  <select
                    value={selectedSafetyLevel}
                    onChange={(e) => setSelectedSafetyLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300 hover:border-gray-300 focus-smooth"
                  >
                    {safetyLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Destinations Grid */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          {filteredAndSortedDestinations.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4 animate-pulse-soft" />
              <h3 className="text-lg font-display text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find more destinations.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAndSortedDestinations.map((destination, index) => (
                <Link
                  key={index}
                  to={`/destination/${encodeURIComponent(destination.city)}/${encodeURIComponent(destination.country)}`}
                  onClick={handleDestinationClick}
                  className={`group relative overflow-hidden rounded-2xl ${getSafetyBackgroundColor(destination.overallScore)} p-6 shadow-sm card-hover cursor-pointer ring-1 block transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
                >
                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-8 rounded-md overflow-hidden shadow-sm border border-gray-200 transition-transform duration-300 animate-pulse-soft">
                        <img 
                          src={`https://flagcdn.com/w80/${destination.countryCode}.png`}
                          alt={`${destination.country} flag`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-display text-gray-900 transition-colors duration-300">
                          {destination.city}
                        </h3>
                        <p className="text-sm text-gray-600 transition-colors duration-300">{destination.country}</p>
                      </div>
                    </div>
                    
                    {/* Tags with Safety-Based Colors */}
                    <div className="flex items-center space-x-1">
                      {destination.tags.includes('insider-tips') && (
                        <div className={`rounded-full p-1.5 transition-all duration-300 ${getSafetyIconColor(destination.overallScore)}`}>
                          <Lightbulb className="h-3 w-3 transition-transform duration-300" />
                        </div>
                      )}
                      {destination.tags.includes('warning-flags') && (
                        <div className={`rounded-full p-1.5 transition-all duration-300 ${getSafetyIconColor(destination.overallScore)}`}>
                          <AlertTriangle className="h-3 w-3 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Overall Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 transition-colors duration-300">Overall Safety</span>
                      <div className={`rounded-full px-2 py-1 text-xs font-semibold transition-all duration-300 ${getScoreColor(destination.overallScore)}`}>
                        {destination.overallScore}/10
                      </div>
                    </div>
                  </div>
                  
                  {/* Safety Indicators */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between group/item">
                      <div className="flex items-center space-x-2">
                        <Moon className="h-4 w-4 text-gray-500 transition-all duration-300" />
                        <span className="text-sm text-gray-700 transition-colors duration-300">Night Safety</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-gray-600 transition-colors duration-300">
                          {destination.nightSafety}
                        </span>
                        {renderScoreBar(destination.nightSafety)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between group/item">
                      <div className="flex items-center space-x-2">
                        <Bus className="h-4 w-4 text-gray-500 transition-all duration-300" />
                        <span className="text-sm text-gray-700 transition-colors duration-300">Public Transit</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-gray-600 transition-colors duration-300">
                          {destination.publicTransit}
                        </span>
                        {renderScoreBar(destination.publicTransit)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between group/item">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500 transition-all duration-300" />
                        <span className="text-sm text-gray-700 transition-colors duration-300">Walking Alone</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-gray-600 transition-colors duration-300">
                          {destination.walkingAlone}
                        </span>
                        {renderScoreBar(destination.walkingAlone)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="text-xs text-gray-500 space-y-1 transition-colors duration-300">
                    <div>{destination.reviewCount} reviews</div>
                    <div>Updated {destination.lastUpdated}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AllDestinations;