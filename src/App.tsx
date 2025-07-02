import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import AllDestinations from './pages/AllDestinations';
import DestinationDetail from './pages/DestinationDetail';
import Profile from './pages/Profile';
import AddDestination from './pages/AddDestination';
import AccountSettings from './pages/AccountSettings';
import SafetyTips from './pages/SafetyTips';
import Community from './pages/Community';
import AuthCallback from './pages/AuthCallback';
import FloatingBoltLogo from './components/FloatingBoltLogo';
import ScrollToTop from './components/ScrollToTop';

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/" replace />;
};

// Redirect authenticated users to profile
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400"></div>
      </div>
    );
  }
  
  return user ? <Navigate to="/profile" replace /> : <>{children}</>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <HomePage />
        </PublicRoute>
      } />
      <Route path="/destinations" element={<AllDestinations />} />
      <Route path="/destination/:city/:country" element={<DestinationDetail />} />
      <Route path="/safety-tips" element={<SafetyTips />} />
      <Route path="/community" element={<Community />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/add-destination" element={
        <ProtectedRoute>
          <AddDestination />
        </ProtectedRoute>
      } />
      <Route path="/account-settings" element={
        <ProtectedRoute>
          <AccountSettings />
        </ProtectedRoute>
      } />
      {/* Redirect old dashboard route to profile */}
      <Route path="/dashboard" element={<Navigate to="/profile" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans">
          <AppRoutes />
          <FloatingBoltLogo />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;