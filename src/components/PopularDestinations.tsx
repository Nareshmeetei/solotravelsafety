import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Bus, Users } from 'lucide-react';
import { destinations } from '../data/destinations';
import FlagImage from './FlagImage';
import WeatherDisplay from './WeatherDisplay';

const PopularDestinations: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const toggleCardExpansion = (destinationId: string) => {
    setExpandedCard(prev => prev === destinationId ? null : destinationId);
  };

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

  const handleDestinationClick = (city: string, country: string) => {
    // Scroll to top immediately when clicking a destination
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-gray-50 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-display text-gray-900 sm:text-4xl animate-fade-in-up">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up animate-delay-200">
            See safety scores and insights from our community of solo female travelers
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
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
                  handleDestinationClick(destination.city, destination.country);
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
                
                {/* Desktop Hover Overlay */}
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
        
        <div className="mt-10 text-center animate-fade-in-up animate-delay-600">
          <Link 
            to="/destinations"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-400 bg-gray-50 px-8 py-3 text-base font-semibold text-primary-400 shadow-none transition-all duration-300 hover:bg-primary-50 hover:text-primary-500 hover:border-primary-500 focus-smooth"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;