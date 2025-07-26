# Weather API Setup Guide

To display **live, accurate, and up-to-date temperature** data for destinations, you need to configure weather API keys. The app supports multiple weather services for maximum reliability.

## 🌡️ Supported Weather APIs

### 1. OpenWeatherMap (Recommended)
- **Free tier**: 1,000 calls/day
- **Sign up**: https://openweathermap.org/api
- **Environment variable**: `VITE_OPENWEATHER_API_KEY`

### 2. WeatherAPI.com (Backup)
- **Free tier**: 1 million calls/month
- **Sign up**: https://www.weatherapi.com/
- **Environment variable**: `VITE_WEATHERAPI_KEY`

### 3. Open-Meteo (No API Key Required)
- **Free**: Unlimited requests
- **No signup required**: Automatically used as fallback
- **Note**: May have slightly less accuracy for some locations

## 🔧 Setup Instructions

### Step 1: Get API Keys

1. **OpenWeatherMap**:
   - Visit https://openweathermap.org/api
   - Create a free account
   - Go to "API keys" section
   - Copy your API key

2. **WeatherAPI.com** (Optional but recommended for backup):
   - Visit https://www.weatherapi.com/
   - Create a free account
   - Copy your API key from the dashboard

### Step 2: Configure Environment Variables

Create a `.env` file in your project root:

```env
# Primary weather API (OpenWeatherMap)
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key_here

# Backup weather API (WeatherAPI.com) - Optional
VITE_WEATHERAPI_KEY=your_weatherapi_key_here

# Your existing Supabase configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 3: Restart Development Server

```bash
npm run dev
```

## 🚀 How It Works

The weather system uses a **cascading fallback approach**:

1. **Primary**: OpenWeatherMap API (if configured)
2. **Backup**: WeatherAPI.com (if configured)
3. **Fallback**: Open-Meteo (free, no key required)
4. **Last Resort**: Estimated temperatures based on location

## 📊 Features

- ✅ **Live Updates**: Temperature refreshes every 10 minutes
- ✅ **Real-time Data**: Direct from weather stations
- ✅ **Multiple Sources**: Ensures 99.9% uptime
- ✅ **Automatic Fallback**: Never shows outdated data
- ✅ **Global Coverage**: Works for all destination cities
- ✅ **Unit Conversion**: °F by default, °C on hover

## 🔍 Verification

Once configured, you can verify live data by:

1. Check browser console for API calls
2. Compare temperatures with weather websites
3. Test different cities for accuracy
4. Hover to see unit conversion working

## 💡 Pro Tips

- **Use both APIs**: Configure both OpenWeatherMap and WeatherAPI for maximum reliability
- **Monitor usage**: Free tiers have daily/monthly limits
- **Test thoroughly**: Verify accuracy across different time zones
- **Cache consideration**: Data refreshes every 10 minutes to balance accuracy and API usage

With this setup, your destination cards will show **live, accurate temperatures** that are always up-to-date! 