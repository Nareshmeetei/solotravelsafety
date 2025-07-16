import React from 'react';
import { Clock, Shield, Monitor } from 'lucide-react';
import { useSessionManagement } from '../hooks/useSessionManagement';

interface SessionStatusProps {
  variant?: 'compact' | 'detailed';
  showInNavbar?: boolean;
}

const SessionStatus: React.FC<SessionStatusProps> = ({ 
  variant = 'compact', 
  showInNavbar = false 
}) => {
  const { sessionInfo, getSessionStatus } = useSessionManagement();

  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-2 text-xs text-gray-500">
        <div className={`w-2 h-2 rounded-full ${
          sessionInfo.isPersistent ? 'bg-green-500' : 'bg-yellow-500'
        }`} />
        <span className="hidden sm:inline">
          {sessionInfo.isPersistent ? 'Persistent' : 'Session'}
        </span>
      </div>
    );
  }

  if (showInNavbar) {
    return (
      <div className="flex items-center space-x-2 text-xs text-gray-600">
        <Monitor className="h-3 w-3" />
        <span className="hidden lg:inline">
          {sessionInfo.isPersistent ? 'Persistent Session' : 'Session Only'}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-900">Session Status</span>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          sessionInfo.isPersistent 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {sessionInfo.isPersistent ? 'Persistent' : 'Session Only'}
        </div>
      </div>
      
      <div className="space-y-1 text-xs text-gray-600">
        <div className="flex items-center space-x-2">
          <Monitor className="h-3 w-3" />
          <span>{sessionInfo.deviceInfo || 'Current Device'}</span>
        </div>
        
        {sessionInfo.lastActivity && (
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>Last active: {sessionInfo.lastActivity.toLocaleTimeString()}</span>
          </div>
        )}
        
        {sessionInfo.sessionAge !== null && (
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>Session age: {sessionInfo.sessionAge} minutes</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionStatus; 