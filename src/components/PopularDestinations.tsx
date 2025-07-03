import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Bus, Users, Lightbulb, AlertTriangle } from 'lucide-react';
import { createDestinationSlug } from '../data/destinations';

const PopularDestinations: React.FC = () => {
  const destinations = [
    // Asia - Primary colors (purple tones)
    {
      city: 'Tokyo',
      country: 'Japan',
      countryCode: 'jp',
      overallScore: 9.2,
      nightSafety: 9.5,
      publicTransit: 9.8,
      walkingAlone: 8.9,
      tags: ['insider-tips'],
    },
    {
      city: 'Seoul',
      country: 'South Korea',
      countryCode: 'kr',
      overallScore: 8.6,
      nightSafety: 8.4,
      publicTransit: 9.3,
      walkingAlone: 8.2,
      tags: ['insider-tips'],
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      countryCode: 'sg',
      overallScore: 9.4,
      nightSafety: 9.6,
      publicTransit: 9.7,
      walkingAlone: 9.2,
      tags: ['insider-tips'],
    },
    {
      city: 'Mumbai',
      country: 'India',
      countryCode: 'in',
      overallScore: 5.2,
      nightSafety: 3.8,
      publicTransit: 5.9,
      walkingAlone: 4.1,
      tags: ['warning-flags'],
    },
    {
      city: 'Bangkok',
      country: 'Thailand',
      countryCode: 'th',
      overallScore: 6.7,
      nightSafety: 5.8,
      publicTransit: 7.3,
      walkingAlone: 6.2,
      tags: ['warning-flags'],
    },
    
    // Europe - Teal colors
    {
      city: 'Copenhagen',
      country: 'Denmark',
      countryCode: 'dk',
      overallScore: 8.9,
      nightSafety: 8.7,
      publicTransit: 9.2,
      walkingAlone: 9.1,
      tags: ['insider-tips'],
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      countryCode: 'es',
      overallScore: 7.3,
      nightSafety: 6.8,
      publicTransit: 8.1,
      walkingAlone: 7.2,
      tags: ['warning-flags'],
    },
    {
      city: 'Reykjavik',
      country: 'Iceland',
      countryCode: 'is',
      overallScore: 9.1,
      nightSafety: 9.3,
      publicTransit: 8.5,
      walkingAlone: 9.4,
      tags: ['insider-tips'],
    },
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      countryCode: 'nl',
      overallScore: 8.4,
      nightSafety: 8.1,
      publicTransit: 9.0,
      walkingAlone: 8.3,
      tags: ['insider-tips'],
    },
    {
      city: 'Stockholm',
      country: 'Sweden',
      countryCode: 'se',
      overallScore: 8.8,
      nightSafety: 8.6,
      publicTransit: 9.1,
      walkingAlone: 8.9,
      tags: ['insider-tips'],
    },
    {
      city: 'Zurich',
      country: 'Switzerland',
      countryCode: 'ch',
      overallScore: 9.0,
      nightSafety: 9.2,
      publicTransit: 9.4,
      walkingAlone: 8.8,
      tags: ['insider-tips'],
    },
    {
      city: 'Vienna',
      country: 'Austria',
      countryCode: 'at',
      overallScore: 8.6,
      nightSafety: 8.4,
      publicTransit: 9.0,
      walkingAlone: 8.5,
      tags: ['insider-tips'],
    },
    {
      city: 'Helsinki',
      country: 'Finland',
      countryCode: 'fi',
      overallScore: 9.3,
      nightSafety: 9.1,
      publicTransit: 9.2,
      walkingAlone: 9.5,
      tags: ['insider-tips'],
    },
    
    // North America - Pink colors
    {
      city: 'Vancouver',
      country: 'Canada',
      countryCode: 'ca',
      overallScore: 8.5,
      nightSafety: 8.0,
      publicTransit: 8.7,
      walkingAlone: 8.6,
      tags: ['insider-tips'],
    },
    
    // Oceania - Gray colors
    {
      city: 'Melbourne',
      country: 'Australia',
      countryCode: 'au',
      overallScore: 8.7,
      nightSafety: 8.2,
      publicTransit: 8.9,
      walkingAlone: 8.8,
      tags: ['insider-tips'],
    },
    
    // Africa - Yellow/Orange colors
    {
      city: 'Cairo',
      country: 'Egypt',
      countryCode: 'eg',
      overallScore: 4.8,
      nightSafety: 3.2,
      publicTransit: 5.1,
      walkingAlone: 3.9,
      tags: ['warning-flags'],
    },
    {
      city: 'Marrakech',
      country: 'Morocco',
      countryCode: 'ma',
      overallScore: 5.9,
      nightSafety: 4.5,
      publicTransit: 6.2,
      walkingAlone: 5.1,
      tags: ['warning-flags'],
    },
    
    // South America - Lime colors
    {
      city: 'Rio de Janeiro',
      country: 'Brazil',
      countryCode: 'br',
      overallScore: 4.3,
      nightSafety: 2.9,
      publicTransit: 4.8,
      walkingAlone: 3.7,
      tags: ['warning-flags'],
    },
  ];

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
            <Link
              key={index}
              to={`/destination/${createDestinationSlug(destination.city, destination.country)}`}
              onClick={() => handleDestinationClick(destination.city, destination.country)}
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
              <div className="space-y-3">
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
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center animate-fade-in-up animate-delay-600">
          <Link 
            to="/destinations"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="btn-hover inline-flex items-center justify-center rounded-full bg-primary-400 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary-500 hover:shadow-xl hover:scale-105 focus-smooth"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;