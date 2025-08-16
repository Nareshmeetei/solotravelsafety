import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import AllDestinations from './pages/AllDestinations';
import DestinationDetail from './pages/DestinationDetail';
import Profile from './pages/Profile';
import AddDestination from './pages/AddDestination';
import AccountSettings from './pages/AccountSettings';
import SafetyTips from './pages/SafetyTips';
import Community from './pages/Community';
import AuthCallback from './pages/AuthCallback';
import AuthDebug from './pages/AuthDebug';

// Import components
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import SentryErrorBoundary from './components/SentryErrorBoundary';
import SentryTest from './components/SentryTest';
import ProtectedRoute from './components/ProtectedRoute';

// Import auth context
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <SentryErrorBoundary>
      <AuthProvider>
        <Router
          future={{ 
            v7_startTransition: true,
            v7_relativeSplatPath: true 
          }}
        >
          <ScrollToTop />
          <div className="App">
            <SentryErrorBoundary>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/destinations" element={<AllDestinations />} />
                <Route path="/destination/:city/:country" element={<DestinationDetail />} />
                <Route path="/safety-tips" element={<SafetyTips />} />
                <Route path="/community" element={<Community />} />
                
                {/* Auth Routes */}
                <Route path="/auth/callback" element={<AuthCallback />} />
                
                {/* Protected Routes */}
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute requireEmailVerification={false}>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/add-destination" 
                  element={
                    <ProtectedRoute requireEmailVerification={false}>
                      <AddDestination />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/account-settings" 
                  element={
                    <ProtectedRoute requireEmailVerification={false}>
                      <AccountSettings />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/settings" 
                  element={<Navigate to="/account-settings" replace />}
                />
                
                {/* Development/Testing Routes */}
                <Route path="/sentry-test" element={<SentryTest />} />
                <Route path="/auth-debug" element={<AuthDebug />} />
                
                {/* Catch-all redirect */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </SentryErrorBoundary>
            
            <CookieConsent />
          </div>
        </Router>
      </AuthProvider>
    </SentryErrorBoundary>
  );
}

export default App;