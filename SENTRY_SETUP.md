# Sentry Integration Setup

This document outlines the Sentry integration setup for the Solo Travel Safety application.

## Overview

Sentry has been integrated to provide comprehensive error monitoring, performance tracking, and user session recording. The integration includes:

- **Error Boundary**: Catches React component errors and provides fallback UI
- **Error Reporting**: Manual error and warning reporting utilities
- **User Tracking**: Automatic user context setting for authenticated users
- **Breadcrumbs**: User interaction and process tracking
- **Performance Monitoring**: Component profiling and performance tracking

## Configuration

### DSN Configuration
The Sentry DSN is configured in `src/lib/sentry.ts`:
```
https://07e4e0358624c871bd1a90d9bcf9d38f@o4509672197128192.ingest.us.sentry.io/4509672231206912
```

### Environment Settings
- **Development**: Errors are logged to console but not sent to Sentry
- **Production**: All errors, warnings, and performance data are sent to Sentry
- **Sampling Rates**:
  - Performance traces: 10% of transactions
  - Session replays: 10% of sessions
  - Error session replays: 100% of sessions with errors

## Files Structure

```
src/
├── lib/
│   ├── sentry.ts              # Main Sentry configuration
│   └── sentry-utils.ts        # Utility functions for error reporting
├── components/
│   ├── SentryErrorBoundary.tsx # Error boundary component
│   └── SentryTest.tsx         # Test component for verification
├── contexts/
│   └── AuthContext.tsx        # Updated with user tracking
├── main.tsx                   # Sentry initialization
└── App.tsx                    # Error boundary wrapper
```

## Usage

### Error Boundary
The entire application is wrapped with `SentryErrorBoundary` in `App.tsx`:

```tsx
<SentryErrorBoundary>
  <AuthProvider>
    {/* Your app content */}
  </AuthProvider>
</SentryErrorBoundary>
```

### Manual Error Reporting
Use the utility functions from `sentry-utils.ts`:

```tsx
import { reportError, reportWarning, addBreadcrumb } from '../lib/sentry-utils';

// Report an error
reportError(new Error('Something went wrong'), {
  component: 'MyComponent',
  action: 'user_action',
}, {
  error_type: 'validation',
  user_id: '123',
});

// Report a warning
reportWarning('Performance degradation detected', {
  component: 'MyComponent',
  duration_ms: 1500,
});

// Add breadcrumb for debugging
addBreadcrumb('User clicked button', 'user_interaction', {
  button_id: 'submit',
  form_data: { email: 'user@example.com' },
});
```

### User Context
User context is automatically set when users authenticate:

```tsx
// Automatically handled in AuthContext
setUserContext({
  id: user.id,
  email: user.email,
  username: user.user_metadata?.full_name,
});
```

### Component Profiling
Wrap components with performance monitoring:

```tsx
import { withSentryComponent } from '../lib/sentry-utils';

const MyComponent = () => {
  // Your component code
};

export default withSentryComponent(MyComponent, 'MyComponent');
```

## Testing

### Test Route
Visit `/sentry-test` to test the Sentry integration:

- **Test Error Reporting**: Simulates an error and reports it to Sentry
- **Test Warning Reporting**: Sends a warning message to Sentry
- **Test Breadcrumbs**: Adds multiple breadcrumbs to track user flow
- **Test Tags**: Sets custom tags for error categorization
- **Test Performance**: Simulates performance monitoring

### Development vs Production
- **Development**: Errors are logged to console with full details
- **Production**: Errors are sent to Sentry dashboard with user context

## Error Filtering

The configuration includes filters to reduce noise:

- Network errors are filtered out in production
- Navigation breadcrumbs are filtered in development
- Development errors are not sent to Sentry

## Performance Monitoring

### Automatic Monitoring
- Page load performance
- Component render times
- API call durations
- User interaction timing

### Manual Monitoring
```tsx
import { withErrorHandling, withEventErrorHandling } from '../lib/sentry-utils';

// Wrap async functions
const safeAsyncFunction = withErrorHandling(async (data) => {
  // Your async code
}, { context: 'data_processing' });

// Wrap event handlers
const safeEventHandler = withEventErrorHandling((event) => {
  // Your event handling code
}, { context: 'form_submission' });
```

## Best Practices

### Error Reporting
1. **Provide Context**: Always include relevant context when reporting errors
2. **Use Tags**: Categorize errors with tags for better filtering
3. **Avoid PII**: Never include sensitive user data in error reports
4. **Breadcrumbs**: Add breadcrumbs before important operations

### Performance
1. **Profile Components**: Use `withSentryComponent` for critical components
2. **Monitor Async Operations**: Wrap API calls with error handling
3. **Track User Interactions**: Add breadcrumbs for important user actions

### User Privacy
1. **Sanitize Data**: Remove sensitive information before reporting
2. **Respect Preferences**: Honor user privacy settings
3. **Minimal Context**: Only include necessary debugging information

## Troubleshooting

### Common Issues

1. **Errors not appearing in Sentry**:
   - Check if you're in development mode (errors are logged to console only)
   - Verify the DSN is correct
   - Check browser console for Sentry initialization errors

2. **Performance data missing**:
   - Ensure browser tracing integration is enabled
   - Check sampling rate configuration
   - Verify component profiling is properly set up

3. **User context not set**:
   - Check AuthContext integration
   - Verify user authentication flow
   - Check browser console for user context errors

### Debug Mode
Enable debug mode in development by setting `debug: true` in the Sentry configuration. This will log all Sentry events to the console.

## Monitoring Dashboard

Access your Sentry dashboard at: https://sentry.io

Key metrics to monitor:
- **Error Rate**: Percentage of sessions with errors
- **Performance**: Page load times and component render times
- **User Impact**: Number of users affected by errors
- **Release Health**: Error rates by application version

## Security Considerations

1. **DSN Security**: The DSN is safe to include in client-side code
2. **Data Sanitization**: All user data is sanitized before reporting
3. **Privacy Compliance**: Integration respects user privacy preferences
4. **Rate Limiting**: Built-in rate limiting prevents spam

## Future Enhancements

Potential improvements for the Sentry integration:

1. **Custom Error Boundaries**: Component-specific error boundaries
2. **Advanced Filtering**: More sophisticated error filtering rules
3. **Performance Alerts**: Automated alerts for performance degradation
4. **User Feedback**: Collect user feedback on error pages
5. **Integration with Monitoring**: Connect with other monitoring tools 