import React, { useState, useEffect } from 'react';

interface WeatherDisplayProps {
  city: string;
  country: string;
  className?: string;
  isExpanded?: boolean;
  showCelsius?: boolean; // New prop to control temperature unit from parent
}

interface WeatherData {
  temperature: number;
  description: string;
  isLoading: boolean;
  error: string | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ 
  city, 
  country, 
  className = '', 
  isExpanded = false,
  showCelsius: parentShowCelsius = false // New prop
}) => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    description: '',
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setWeather(prev => ({ ...prev, isLoading: true, error: null }));
        
        // Try multiple weather APIs for reliability
        let weatherData = null;
        
        // First, try OpenWeatherMap API
        const openWeatherKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        if (openWeatherKey && openWeatherKey !== 'demo_key') {
          try {
            const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&appid=${openWeatherKey}&units=metric`;
            const response = await fetch(openWeatherUrl);
            if (response.ok) {
              const data = await response.json();
              weatherData = {
                temperature: Math.round(data.main.temp),
                description: data.weather[0].description
              };
            }
          } catch (error) {
            console.warn('OpenWeatherMap API failed:', error);
          }
        }
        
        // If OpenWeatherMap failed, try WeatherAPI.com (free tier)
        if (!weatherData) {
          try {
            const weatherApiKey = import.meta.env.VITE_WEATHERAPI_KEY;
            if (weatherApiKey && weatherApiKey !== 'demo_key') {
              const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${encodeURIComponent(city)},${encodeURIComponent(country)}&aqi=no`;
              const response = await fetch(weatherApiUrl);
              if (response.ok) {
                const data = await response.json();
                weatherData = {
                  temperature: Math.round(data.current.temp_c),
                  description: data.current.condition.text
                };
              }
            }
          } catch (error) {
            console.warn('WeatherAPI.com failed:', error);
          }
        }
        
        // If still no data, try Open-Meteo (free, no API key required)
        if (!weatherData) {
          try {
            // First get coordinates for the city
            const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
            const geocodeResponse = await fetch(geocodeUrl);
            if (geocodeResponse.ok) {
              const geocodeData = await geocodeResponse.json();
              if (geocodeData.results && geocodeData.results.length > 0) {
                const { latitude, longitude } = geocodeData.results[0];
                
                // Get weather data using coordinates
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius`;
                const weatherResponse = await fetch(weatherUrl);
                if (weatherResponse.ok) {
                  const data = await weatherResponse.json();
                  weatherData = {
                    temperature: Math.round(data.current_weather.temperature),
                    description: getWeatherDescription(data.current_weather.weathercode)
                  };
                }
              }
            }
          } catch (error) {
            console.warn('Open-Meteo API failed:', error);
          }
        }
        
        // If all APIs failed, throw error to use fallback
        if (!weatherData) {
          throw new Error('All weather APIs failed');
        }
        
        setWeather({
          temperature: weatherData.temperature,
          description: weatherData.description,
          isLoading: false,
          error: null
        });
        
      } catch (error) {
        console.error('Error fetching weather:', error);
        // Only use mock data as absolute last resort
        const mockData = getMockWeatherData(city);
        setWeather({
          temperature: mockData.temp,
          description: mockData.description,
          isLoading: false,
          error: 'Using estimated data'
        });
      }
    };

    fetchWeather();
    
    // Set up interval to refresh weather data every 10 minutes for live updates
    const refreshInterval = setInterval(fetchWeather, 10 * 60 * 1000);
    
    return () => clearInterval(refreshInterval);
  }, [city, country]);

  // Convert Open-Meteo weather codes to descriptions
  const getWeatherDescription = (weatherCode: number): string => {
    const weatherCodes: { [key: number]: string } = {
      0: 'Clear',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      56: 'Light freezing drizzle',
      57: 'Dense freezing drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      66: 'Light freezing rain',
      67: 'Heavy freezing rain',
      71: 'Slight snow',
      73: 'Moderate snow',
      75: 'Heavy snow',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    };
    return weatherCodes[weatherCode] || 'Unknown';
  };

  // Mock weather data for demo purposes
  const getMockWeatherData = (cityName: string) => {
    const mockWeather: { [key: string]: { temp: number; description: string } } = {
      'Reykjavik': { temp: 4, description: 'Clear' },
      'Tokyo': { temp: 18, description: 'Partly cloudy' },
      'Amsterdam': { temp: 12, description: 'Overcast' },
      'Singapore': { temp: 30, description: 'Humid' },
      'Copenhagen': { temp: 8, description: 'Cloudy' },
      'Melbourne': { temp: 22, description: 'Sunny' },
      'Toronto': { temp: 15, description: 'Clear' },
      'Stockholm': { temp: 6, description: 'Cloudy' },
      'Vienna': { temp: 14, description: 'Partly cloudy' },
      'Munich': { temp: 13, description: 'Overcast' },
      'Zurich': { temp: 11, description: 'Clear' },
      'Dublin': { temp: 10, description: 'Rainy' },
      'Edinburgh': { temp: 9, description: 'Cloudy' },
      'Wellington': { temp: 16, description: 'Windy' },
      'Auckland': { temp: 19, description: 'Sunny' },
      'Brisbane': { temp: 26, description: 'Sunny' },
      'Oslo': { temp: 5, description: 'Snow' },
      'Helsinki': { temp: 3, description: 'Cold' },
      'Seoul': { temp: 17, description: 'Clear' },
      'Busan': { temp: 20, description: 'Mild' },
      'Kyoto': { temp: 19, description: 'Sunny' },
      'Osaka': { temp: 21, description: 'Clear' },
      'Kamakura': { temp: 18, description: 'Peaceful' },
      'Nagano': { temp: 12, description: 'Mountain air' },
      'Vancouver': { temp: 14, description: 'Rainy' },
      'Bern': { temp: 10, description: 'Alpine' },
      'Cape Town': { temp: 24, description: 'Sunny' },
      'Johannesburg': { temp: 23, description: 'Clear' },
      'Cairo': { temp: 28, description: 'Hot' },
      'Lagos': { temp: 32, description: 'Humid' },
      'Rio de Janeiro': { temp: 29, description: 'Tropical' },
      'Mexico City': { temp: 22, description: 'Mild' },
      'Bogota': { temp: 15, description: 'Cool' },
      'Caracas': { temp: 27, description: 'Warm' },
      'Guatemala City': { temp: 21, description: 'Pleasant' },
      'San Salvador': { temp: 25, description: 'Warm' },
      'Port-au-Prince': { temp: 30, description: 'Hot' },
      'Manila': { temp: 31, description: 'Tropical' },
      'Karachi': { temp: 26, description: 'Warm' },
    };
    
    return mockWeather[cityName] || { temp: 20, description: 'Pleasant' };
  };

  const convertToFahrenheit = (celsius: number): number => {
    return Math.round((celsius * 9/5) + 32);
  };

  // Show Celsius if: parent says so OR mobile expanded
  const shouldShowCelsius = parentShowCelsius || (isExpanded && window.innerWidth < 768);
  const displayTemp = shouldShowCelsius ? weather.temperature : convertToFahrenheit(weather.temperature);
  const tempUnit = shouldShowCelsius ? 'C' : 'F';

  if (weather.isLoading) {
    return (
      <div className={`text-gray-500 ${className}`}>
        <span className="text-sm font-bold animate-pulse">--°</span>
      </div>
    );
  }

  return (
    <div 
      className={`text-gray-700 ${className}`}
      title={`${weather.description} • Hover card to switch temperature unit`}
    >
      <span className="text-sm font-bold">
        {displayTemp}°{tempUnit}
      </span>
    </div>
  );
};

export default WeatherDisplay; 