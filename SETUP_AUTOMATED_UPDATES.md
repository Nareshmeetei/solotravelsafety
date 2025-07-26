# 🚀 Quick Setup: Automated Updates

This guide helps you set up the automated weekly data update system in just a few steps.

## ✅ Prerequisites

1. **GitHub Repository**: Your project should be in a GitHub repository
2. **GitHub Actions**: Enabled in your repository settings
3. **API Access**: Free accounts with data providers (see below)

## 🔑 Step 1: Get API Keys (Free Tier)

### Currency Exchange Rates
1. **ExchangeRate-API** (Recommended - Free: 1,500 requests/month)
   - Go to: https://exchangerate-api.com/
   - Sign up for free account
   - Copy your API key

2. **Fixer.io** (Backup - Free: 100 requests/month)
   - Go to: https://fixer.io/
   - Sign up for free account
   - Copy your API key

### Weather Data
1. **OpenWeatherMap** (Free: 1,000 calls/day)
   - Go to: https://openweathermap.org/api
   - Create free account
   - Go to "API keys" section
   - Copy your API key

2. **WeatherAPI.com** (Backup - Free: 1M calls/month)
   - Go to: https://www.weatherapi.com/
   - Create free account
   - Copy your API key

## 🔐 Step 2: Configure GitHub Secrets

1. **Go to your GitHub repository**
2. **Click "Settings" tab**
3. **Click "Secrets and variables" → "Actions"**
4. **Click "New repository secret"**
5. **Add these secrets one by one:**

```
Name: EXCHANGE_RATE_API_KEY
Value: [your ExchangeRate-API key]

Name: FIXER_API_KEY  
Value: [your Fixer.io key]

Name: OPENWEATHER_API_KEY
Value: [your OpenWeatherMap key]

Name: WEATHERAPI_KEY
Value: [your WeatherAPI.com key]

Name: VITE_SUPABASE_URL
Value: [your existing Supabase URL]

Name: SUPABASE_SERVICE_KEY
Value: [your Supabase service role key]
```

## 🎯 Step 3: Enable the Workflow

The GitHub Actions workflow is already configured and will:
- **Run automatically every Sunday at 2 AM UTC**
- **Update all destination data**
- **Commit changes automatically**
- **Create GitHub issues if failures occur**

### Manual Testing
You can test the system immediately:

1. **Go to "Actions" tab in your repository**
2. **Click "Weekly Data Update"**
3. **Click "Run workflow"**
4. **Select "all" for update type**
5. **Click "Run workflow"**

## 📊 Step 4: Verify Setup

Run these commands locally to test:

```bash
# Test data validation
npm run test:data-validation

# Test destination updates  
npm run update-destinations

# Test full data update (requires API keys)
npm run update-data
```

Expected output:
```
✅ Files validated: 39
✅ Successfully updated: 4 items
✅ Data update completed successfully!
```

## 🔍 Step 5: Monitor Updates

### Check Update Logs
- **Location**: `logs/` directory in your repository
- **Files to monitor**:
  - `last-update.json` - Latest update summary
  - `destination-stats.json` - Destination statistics

### GitHub Actions Status
- **Actions Tab**: Shows workflow run history
- **Green checkmark**: Update successful
- **Red X**: Update failed (issue will be created automatically)

### Update Summary
After each update, check the GitHub Actions summary for details like:
```
📊 Weekly Data Update Summary
Update Date: 2025-01-07
✅ Successfully Updated:
- 💱 Currency exchange rates
- 🛡️ Safety indices and scores  
- 🏛️ Government travel advisories
- 🌡️ Weather data cache
- 💰 Cost of living data
- 🚨 Emergency contact information
```

## 🆘 Troubleshooting

### Common Issues

**❌ "API key not found"**
- Check GitHub secrets are properly named
- Verify API keys are valid and active

**❌ "Rate limit exceeded"**  
- APIs have daily/monthly limits
- System will use fallback APIs automatically

**❌ "Validation failed"**
- Data corruption detected
- Previous valid data maintained
- Manual review required

### Get Help
- **View logs**: Check `logs/` directory
- **GitHub Issues**: Auto-created on failures
- **Manual validation**: Run `npm run test:data-validation`

## 🎉 You're All Set!

Once configured, your Solo Travel Safety app will automatically:

✅ **Update currency rates weekly**
✅ **Refresh safety scores from multiple sources**
✅ **Monitor government travel advisories**
✅ **Maintain current weather data**
✅ **Validate all data integrity**
✅ **Commit changes automatically**

Your users will always have the most current and accurate travel safety information!

---

💡 **Pro Tip**: The system uses multiple API fallbacks, so even if one service is down, your data stays current. Free tier limits are more than sufficient for weekly updates. 