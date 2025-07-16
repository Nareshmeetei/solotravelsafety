import React from 'react';
import { reportError, reportWarning, addBreadcrumb, setTag } from '../lib/sentry-utils';

const SentryTest: React.FC = () => {
  const testErrorReporting = () => {
    try {
      // Simulate an error
      throw new Error('This is a test error from Sentry integration');
    } catch (error) {
      reportError(error as Error, {
        component: 'SentryTest',
        action: 'test_error_reporting',
        timestamp: new Date().toISOString(),
      }, {
        test_type: 'manual_error',
        environment: 'development',
      });
    }
  };

  const testWarningReporting = () => {
    reportWarning('This is a test warning from Sentry integration', {
      component: 'SentryTest',
      action: 'test_warning_reporting',
      timestamp: new Date().toISOString(),
    }, {
      test_type: 'manual_warning',
      environment: 'development',
    });
  };

  const testBreadcrumbs = () => {
    addBreadcrumb('User clicked test breadcrumbs button', 'user_interaction', {
      component: 'SentryTest',
      button: 'test_breadcrumbs',
    });
    
    // Add a few more breadcrumbs to simulate user flow
    setTimeout(() => {
      addBreadcrumb('Processing breadcrumb test', 'process', {
        step: 'processing',
        component: 'SentryTest',
      });
    }, 100);
    
    setTimeout(() => {
      addBreadcrumb('Breadcrumb test completed', 'process', {
        step: 'completed',
        component: 'SentryTest',
      });
    }, 200);
  };

  const testTags = () => {
    setTag('test_tag', 'test_value');
    setTag('component', 'SentryTest');
    setTag('timestamp', new Date().toISOString());
    
    addBreadcrumb('Tags set for testing', 'debug', {
      tags_set: ['test_tag', 'component', 'timestamp'],
    });
  };

  const testPerformance = () => {
    // Simulate a performance issue
    const start = performance.now();
    
    // Simulate some heavy computation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random();
    }
    
    const end = performance.now();
    const duration = end - start;
    
    addBreadcrumb('Performance test completed', 'performance', {
      duration_ms: duration,
      iterations: 1000000,
      result: result,
    });
    
    if (duration > 100) {
      reportWarning(`Performance test took ${duration.toFixed(2)}ms`, {
        component: 'SentryTest',
        action: 'performance_test',
        duration_ms: duration,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Sentry Integration Test
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Use these buttons to test Sentry error reporting, warnings, breadcrumbs, and performance monitoring.
      </p>
      
      <div className="space-y-3">
        <button
          onClick={testErrorReporting}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Test Error Reporting
        </button>
        
        <button
          onClick={testWarningReporting}
          className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
        >
          Test Warning Reporting
        </button>
        
        <button
          onClick={testBreadcrumbs}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Test Breadcrumbs
        </button>
        
        <button
          onClick={testTags}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Test Tags
        </button>
        
        <button
          onClick={testPerformance}
          className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Test Performance
        </button>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <p className="text-xs text-gray-500">
          <strong>Note:</strong> In development mode, errors are logged to console but not sent to Sentry.
          Check the browser console to see the test results.
        </p>
      </div>
    </div>
  );
};

export default SentryTest; 