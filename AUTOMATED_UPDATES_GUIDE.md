# 🔄 Automated Weekly Data Updates

This guide explains the automated system that keeps all destination data, safety scores, currency rates, and other information up-to-date every week.

## 📅 Update Schedule

The system automatically runs **every Sunday at 2 AM UTC** via GitHub Actions. All data is refreshed weekly to ensure accuracy and relevance.

## 🎯 What Gets Updated

### 💱 Currency Exchange Rates
- **Sources**: ExchangeRate-API, Fixer.io, CurrencyLayer (with fallbacks)
- **Updates**: Real-time exchange rates for all destination currencies
- **Frequency**: Weekly
- **Fallback**: Free APIs if premium sources fail

### 🛡️ Safety & Security Data
- **Sources**: Numbeo Crime Index, Global Peace Index, World Risk Index
- **Updates**: Safety scores, crime statistics, risk assessments
- **Frequency**: Weekly
- **Validation**: Scores maintained within 0-10 range

### 🏛️ Government Travel Advisories
- **Sources**: US State Department, UK FCO, Canadian Government
- **Updates**: Travel warnings, security alerts, advisory levels
- **Frequency**: Weekly
- **Monitoring**: Automatic detection of advisory changes

### 🌡️ Weather Data Cache
- **Sources**: OpenWeatherMap, WeatherAPI.com, Open-Meteo
- **Updates**: Temperature baselines, seasonal patterns
- **Frequency**: Weather displays update every 10 minutes (live)
- **Cache**: Weekly refresh of baseline data

### 💰 Cost of Living Data
- **Sources**: Numbeo, Expatistan, Nomad List APIs
- **Updates**: Daily budget estimates, accommodation costs
- **Frequency**: Weekly
- **Validation**: Realistic budget ranges maintained

### 🚨 Emergency Contact Information
- **Sources**: Government databases, embassy listings
- **Updates**: Emergency numbers, contact information
- **Frequency**: Weekly verification
- **Validation**: Manual review for critical information

## 🤖 Automation Components

### 1. GitHub Actions Workflow
**File**: `.github/workflows/weekly-data-update.yml`

```yaml
# Runs every Sunday at 2 AM UTC
schedule:
  - cron: '0 2 * * 0'
```

**Features**:
- Automatic execution on schedule
- Manual trigger option for immediate updates
- Environment variable management
- Failure notifications
- Commit and push automation

### 2. Data Update Service
**File**: `src/services/dataUpdateService.ts`

**Features**:
- Cascading API fallback system
- Error handling and logging
- Update result tracking
- Service reliability monitoring

### 3. Update Scripts
**Files**: 
- `scripts/update-data.js` - Main data fetching and updating
- `scripts/update-destinations.js` - Destination file management
- `scripts/validate-data.js` - Data integrity validation

## 🔧 Setup Requirements

### Environment Variables
Add these to your GitHub repository secrets:

```bash
# Currency APIs
EXCHANGE_RATE_API_KEY=your_exchange_rate_api_key
FIXER_API_KEY=your_fixer_api_key
CURRENCY_LAYER_API_KEY=your_currency_layer_api_key

# Weather APIs
OPENWEATHER_API_KEY=your_openweather_api_key
WEATHERAPI_KEY=your_weatherapi_key

# Safety Data APIs
NUMBEO_API_KEY=your_numbeo_api_key

# Database
VITE_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
```

### API Key Sources

1. **Currency Data**:
   - [ExchangeRate-API](https://exchangerate-api.com/) - Free: 1,500 requests/month
   - [Fixer.io](https://fixer.io/) - Free: 100 requests/month
   - [CurrencyLayer](https://currencylayer.com/) - Free: 1,000 requests/month

2. **Weather Data**:
   - [OpenWeatherMap](https://openweathermap.org/api) - Free: 1,000 calls/day
   - [WeatherAPI.com](https://www.weatherapi.com/) - Free: 1M calls/month

3. **Safety Data**:
   - [Numbeo API](https://www.numbeo.com/api/) - Paid service for crime data

## 🚀 Manual Execution

### Run Updates Locally
```bash
# Update all data
npm run update-data

# Update destination files only
npm run update-destinations

# Validate data integrity
npm run test:data-validation
```

### Manual GitHub Actions Trigger
1. Go to your repository's **Actions** tab
2. Select **Weekly Data Update** workflow
3. Click **Run workflow**
4. Choose update type (all, currency, safety, etc.)

## 📊 Monitoring & Logging

### Update Logs
- **Location**: `logs/` directory
- **Files**: 
  - `last-update.json` - Latest update summary
  - `destination-stats.json` - Destination statistics
  - `update.log` - Detailed update logs

### Success Indicators
- ✅ **All APIs responding**: Data from primary sources
- ✅ **Validation passed**: All destination files valid
- ✅ **Auto-commit successful**: Changes pushed to repository
- ✅ **Build successful**: No errors in updated code

### Failure Handling
- 🔄 **API Fallbacks**: Automatic switching to backup APIs
- 📧 **GitHub Issues**: Auto-created on failure
- 🛡️ **Data Integrity**: Validation prevents corrupted data
- 🔒 **Safe Defaults**: Maintains existing data if updates fail

## 📈 Update Statistics

After each update, the system generates statistics:

```json
{
  "timestamp": "2024-01-07T02:00:00.000Z",
  "updated": [
    "Currency rates (45 destinations)",
    "Safety scores (45 destinations)",
    "Government advisories (45 destinations)",
    "Timestamps (45 destinations)"
  ],
  "errors": [],
  "totalDestinations": 45,
  "averageScores": {
    "overall": "8.2",
    "nightSafety": "8.1",
    "publicTransit": "7.8",
    "walkingAlone": "8.4"
  }
}
```

## 🔍 Data Validation

### Automatic Checks
- **Required Fields**: All destinations have complete data
- **Score Ranges**: Safety scores between 0-10
- **Currency Codes**: Valid 3-letter ISO codes
- **Emergency Numbers**: Format validation
- **Timestamps**: Proper date formatting

### Validation Errors
If validation fails:
1. GitHub Action fails and creates an issue
2. Changes are not committed
3. Previous valid data remains unchanged
4. Manual intervention required

## 🛠️ Customization

### Update Frequency
To change from weekly to daily, modify the cron schedule:

```yaml
# Daily at 2 AM UTC
- cron: '0 2 * * *'

# Twice per week (Wednesday and Sunday)
- cron: '0 2 * * 0,3'
```

### Additional Data Sources
Add new APIs by extending `src/services/dataUpdateService.ts`:

```typescript
// Add new update method
private async updateYourDataSource(result: UpdateResult): Promise<void> {
  // Implementation here
}

// Call in updateAllData()
await this.updateYourDataSource(result);
```

## 🔐 Security Considerations

- **API Keys**: Stored as GitHub secrets, never in code
- **Rate Limiting**: Respects API limits with delays
- **Error Handling**: No sensitive data in logs
- **Fallback Systems**: Multiple data sources prevent outages
- **Validation**: Prevents malicious or corrupted data

## 📞 Support

If you encounter issues:

1. **Check GitHub Actions**: Look for failed workflow runs
2. **Review Logs**: Check `logs/` directory for error details
3. **Validate Data**: Run `npm run test:data-validation`
4. **Manual Update**: Try `npm run update-data` locally
5. **API Status**: Verify external API availability

## 🎉 Benefits

✅ **Always Current**: Data never more than 7 days old
✅ **Fully Automated**: No manual intervention required
✅ **Reliable**: Multiple fallback systems
✅ **Transparent**: Complete logging and monitoring
✅ **Safe**: Validation prevents bad data
✅ **Efficient**: Minimal API calls, maximum reliability

The automated update system ensures your Solo Travel Safety app always provides the most current and accurate information to help solo travelers make informed decisions about their safety and travel plans. 