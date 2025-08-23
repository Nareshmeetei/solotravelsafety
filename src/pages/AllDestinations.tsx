import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, MapPin, Moon, Bus, Users, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { destinations } from '../data/destinations';
import FlagImage from '../components/FlagImage';
import WeatherDisplay from '../components/WeatherDisplay';

const AllDestinations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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
    const filtered = destinations.filter(destination => {
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
        return sortOrder === 'asc' ? (aValue as string).localeCompare(bValue as string) : (bValue as string).localeCompare(aValue as string);
      }
      
      return sortOrder === 'asc' ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number);
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

  const toggleCardExpansion = (destinationId: string) => {
    setExpandedCard(prev => prev === destinationId ? null : destinationId);
  };

  return (
    <div className="min-h-screen font-sans" style={{backgroundColor: '#EFEAFF'}}>
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4" style={{backgroundColor: '#EFEAFF'}}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display text-gray-900 mb-4 animate-fade-in-up">
              Solo Female Travel Safety Destinations
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Browse comprehensive solo female travel safety reviews and ratings for destinations worldwide. Get trusted solo travel safety tips and real experiences from our women solo travelers community.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="rounded-2xl shadow-sm border border-gray-200 p-6" style={{backgroundColor: '#F6F3FF'}}>
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search safe solo travel destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 focus:scale-[1.02] focus-smooth"
              />
            </div>
            
            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-3 bg-white border border-gray-200 hover:bg-primary-25 hover:border-primary-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-primary-50 rounded-xl text-gray-700 font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md focus:shadow-lg focus-smooth"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2 transition-transform duration-300" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 font-medium">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 pr-10 border border-gray-200 rounded-xl text-sm bg-white hover:border-primary-200 hover:bg-primary-25 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-primary-50 outline-none transition-all duration-300 appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg focus-smooth min-w-[160px]"
                  >
                    <option value="overall-score">Overall Safety</option>
                    <option value="night-safety">Night Safety</option>
                    <option value="public-transit">Public Transit</option>
                    <option value="walking-alone">Walking Alone</option>
                    <option value="alphabetical">Alphabetical</option>
                    <option value="reviews">Review Count</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400 transition-colors duration-300" />
                  </div>
                </div>
                
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white hover:bg-primary-25 hover:border-primary-200 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-primary-50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md focus:shadow-lg focus-smooth min-w-[44px] flex items-center justify-center"
                  title={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                >
                  <span className="text-base font-medium">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                </button>
              </div>
              
              <div className="text-sm text-gray-600 animate-fade-in">
                {filteredAndSortedDestinations.length} destinations found
              </div>
              
              {(searchQuery || selectedContinent !== 'all' || selectedSafetyLevel !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center px-4 py-3 bg-white border border-red-200 hover:bg-red-25 hover:border-red-300 focus:ring-2 focus:ring-red-400 focus:border-red-400 focus:bg-red-50 rounded-xl text-sm text-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md focus:shadow-lg focus-smooth"
                >
                  <X className="h-4 w-4 mr-1 transition-transform duration-300 hover:rotate-90" />
                  Clear Filters
                </button>
              )}
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-down">
                <div className="animate-fade-in-left">
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Continent</label>
                  <div className="relative">
                    <select
                      value={selectedContinent}
                      onChange={(e) => setSelectedContinent(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-xl text-sm bg-white hover:border-primary-200 hover:bg-primary-25 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-primary-50 outline-none transition-all duration-300 appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg focus-smooth"
                    >
                      {continents.map(continent => (
                        <option key={continent} value={continent}>
                          {continent === 'all' ? 'All Continents' : continent}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in animate-delay-100">
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Safety Level</label>
                  <div className="relative">
                    <select
                      value={selectedSafetyLevel}
                      onChange={(e) => setSelectedSafetyLevel(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-xl text-sm bg-white hover:border-primary-200 hover:bg-primary-25 focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-primary-50 outline-none transition-all duration-300 appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg focus-smooth"
                    >
                      {safetyLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400 transition-colors duration-300" />
                    </div>
                  </div>
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedDestinations.map((destination, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${getSafetyBackgroundColor(destination.overallScore)} p-6 shadow-sm card-hover cursor-pointer ring-1 block transition-all duration-300 hover:scale-[1.02] hover:shadow-md`}
                  onMouseEnter={() => setHoveredCard(`${destination.city}-${destination.country}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link
                    to={`/destination/${encodeURIComponent(destination.city)}/${encodeURIComponent(destination.country)}`}
                    className="block cursor-pointer"
                    onClick={() => {
                      handleDestinationClick();
                    }}
                >
                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FlagImage 
                        countryCode={destination.countryCode}
                        alt={`${destination.country} flag`}
                        className="transition-transform duration-300 animate-pulse-soft"
                      />
                      <div>
                        <h3 className="text-lg font-display text-gray-900 transition-colors duration-300">
                          {destination.city}
                        </h3>
                        <p className="text-sm text-gray-600 transition-colors duration-300">{destination.country}</p>
                      </div>
                    </div>
                    
                      {/* Live Weather Temperature */}
                      <WeatherDisplay 
                        city={destination.city}
                        country={destination.country}
                        className="transition-transform duration-300 group-hover:scale-105"
                        isExpanded={expandedCard === `${destination.city}-${destination.country}`}
                        showCelsius={hoveredCard === `${destination.city}-${destination.country}`}
                      />
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
                  
                  {/* Safety Indicators - Default View */}
                  <div className="space-y-3 md:group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-center space-x-3">
                      <Moon className="h-4 w-4 text-gray-600 transition-colors duration-300" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 transition-colors duration-300">Night Safety</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900 transition-colors duration-300">{destination.nightSafety}/10</span>
                            {renderScoreBar(destination.nightSafety)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Bus className="h-4 w-4 text-gray-600 transition-colors duration-300" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 transition-colors duration-300">Public Transit</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900 transition-colors duration-300">{destination.publicTransit}/10</span>
                            {renderScoreBar(destination.publicTransit)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-gray-600 transition-colors duration-300" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 transition-colors duration-300">Walking Alone</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900 transition-colors duration-300">{destination.walkingAlone}/10</span>
                            {renderScoreBar(destination.walkingAlone)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Hover Overlay - Additional Info */}
                  <div className={`hidden md:block absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getSafetyBackgroundColor(destination.overallScore)} backdrop-blur-sm rounded-b-2xl p-4`}>
                    <div className="space-y-2">
                      {/* Top Red Flag */}
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-[10px] font-semibold text-red-600 uppercase tracking-wide">Top Red Flag</h4>
                          <p className="text-sm text-gray-700 leading-tight">
                            {destination.redFlags && destination.redFlags.length > 0 
                              ? destination.redFlags[0].label 
                              : "No significant red flags"}
                          </p>
                        </div>
                      </div>

                      {/* Safest Area */}
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-[10px] font-semibold text-green-600 uppercase tracking-wide">Safest Area</h4>
                          <p className="text-sm text-gray-700 leading-tight">
                            {destination.neighborhoods && destination.neighborhoods.safe && destination.neighborhoods.safe.length > 0
                              ? typeof destination.neighborhoods.safe[0] === 'string' 
                                ? destination.neighborhoods.safe[0]
                                : destination.neighborhoods.safe[0].name
                              : "City Center"}
                          </p>
                        </div>
                      </div>

                      {/* Daily Budget */}
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">Daily Budget</h4>
                          <p className="text-sm text-gray-700 leading-tight">
                            {destination.costAndComfort && destination.costAndComfort.dailyBudget
                              ? destination.costAndComfort.dailyBudget.range
                              : "$40-80 USD/day"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Expanded View */}
                  <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                    expandedCard === `${destination.city}-${destination.country}` 
                      ? 'max-h-48 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 space-y-3">
                      {/* Top Red Flag */}
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-[10px] font-semibold text-red-600 uppercase tracking-wide">Top Red Flag</h4>
                          <p className="text-sm text-gray-700 leading-tight">
                            {destination.redFlags && destination.redFlags.length > 0 
                              ? destination.redFlags[0].label 
                              : "No significant red flags"}
                          </p>
                        </div>
                      </div>

                      {/* Safest Area */}
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-[10px] font-semibold text-green-600 uppercase tracking-wide">Safest Area</h4>
                          <p className="text-sm text-gray-700 leading-tight">
                            {destination.neighborhoods && destination.neighborhoods.safe && destination.neighborhoods.safe.length > 0
                              ? typeof destination.neighborhoods.safe[0] === 'string' 
                                ? destination.neighborhoods.safe[0]
                                : destination.neighborhoods.safe[0].name
                              : "City Center"}
                          </p>
                        </div>
                      </div>

                      {/* Daily Budget */}
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">Daily Budget</h4>
                          <p className="text-sm text-gray-700 leading-tight">
                            {destination.costAndComfort && destination.costAndComfort.dailyBudget
                              ? destination.costAndComfort.dailyBudget.range
                              : "$40-80 USD/day"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mt-5">
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>{destination.reviewCount} reviews</div>
                      <div>Updated {destination.lastUpdated}</div>
                    </div>
                  </div>
                </Link>
                
                {/* Mobile Quick View Button - Outside Link */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleCardExpansion(`${destination.city}-${destination.country}`);
                  }}
                  className="absolute bottom-4 right-4 md:hidden p-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-gray-400 hover:text-gray-600 transition-all duration-300"
                  aria-label="Quick view"
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedCard === `${destination.city}-${destination.country}` ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
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