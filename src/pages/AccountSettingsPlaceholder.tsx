import React from 'react';
// TODO: Import auth when rebuilding
// import { useAuth } from '@clerk/clerk-react';

const AccountSettingsPlaceholder: React.FC = () => {
  // TODO: Get user from auth context when rebuilding
  const user = null; // TODO: Get user from auth context

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Settings</h1>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              Account settings for User (demo mode)
            </p>
            <p className="text-blue-700 mt-2">
              This settings page is being updated to work with the new authentication system.
              More features coming soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPlaceholder;