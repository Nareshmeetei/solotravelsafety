import React, { useState } from 'react';
import { Download, Trash2, Eye, Settings, AlertTriangle, CheckCircle, X } from 'lucide-react';
// TODO: Import auth when rebuilding
// import { useAuth } from '../contexts/AuthContext';
import { 
  exportUserData, 
  deleteUserData, 
  anonymizeUserData, 
  downloadData, 
  getDataRetentionInfo,
  DataExportOptions 
} from '../lib/dataManagement';

interface DataManagementProps {
  isOpen: boolean;
  onClose: () => void;
}

const DataManagement: React.FC<DataManagementProps> = ({ isOpen, onClose }) => {
  // TODO: Get user from auth context when rebuilding
  const user = null; // TODO: Get user from auth context
  const signOut = async () => {}; // TODO: Get signOut from auth context
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showAnonymizeConfirm, setShowAnonymizeConfirm] = useState(false);
  const [exportOptions, setExportOptions] = useState<DataExportOptions>({
    includeReviews: true,
    includeNewsletter: true,
    includeAuthLogs: false,
    includePreferences: true,
    format: 'json'
  });

  if (!isOpen) return null;

  const handleDataExport = async () => {
    if (!user) return;

    setLoading(true);
    setMessage(null);

    try {
      const data = await exportUserData(user.id, exportOptions);
      const filename = `user-data-${new Date().toISOString().split('T')[0]}.${exportOptions.format}`;
      downloadData(data, filename, exportOptions.format);
      
      setMessage({
        type: 'success',
        text: `Data exported successfully as ${filename}`
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to export data. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAccountDeletion = async () => {
    if (!user) return;

    setLoading(true);
    setMessage(null);

    try {
      await deleteUserData(user.id);
      setMessage({
        type: 'success',
        text: 'Account and all data deleted successfully. You will be signed out.'
      });
      
      // Sign out after a short delay
      setTimeout(() => {
        signOut();
        onClose();
      }, 2000);
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to delete account. Please contact support.'
      });
    } finally {
      setLoading(false);
      setShowDeleteConfirm(false);
    }
  };

  const handleDataAnonymization = async () => {
    if (!user) return;

    setLoading(true);
    setMessage(null);

    try {
      await anonymizeUserData(user.id);
      setMessage({
        type: 'success',
        text: 'Your data has been anonymized successfully.'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to anonymize data. Please try again.'
      });
    } finally {
      setLoading(false);
      setShowAnonymizeConfirm(false);
    }
  };

  const retentionInfo = getDataRetentionInfo();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-xl max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Data Management</h2>
          <p className="text-gray-600">Manage your personal data and privacy settings</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
          {/* Message Display */}
          {message && (
            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertTriangle className="h-5 w-5" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Data Export Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Download className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900">Export Your Data</h3>
            </div>
            
            <p className="text-blue-800 mb-4">
              Download a copy of all your personal data in a machine-readable format (GDPR Right to Portability).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">Export Format</label>
                <select
                  value={exportOptions.format}
                  onChange={(e) => setExportOptions(prev => ({ ...prev, format: e.target.value as 'json' | 'csv' }))}
                  className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="json">JSON (Recommended)</option>
                  <option value="csv">CSV</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={exportOptions.includeReviews}
                  onChange={(e) => setExportOptions(prev => ({ ...prev, includeReviews: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-blue-800">Include my reviews and ratings</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={exportOptions.includeNewsletter}
                  onChange={(e) => setExportOptions(prev => ({ ...prev, includeNewsletter: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-blue-800">Include newsletter subscription data</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={exportOptions.includePreferences}
                  onChange={(e) => setExportOptions(prev => ({ ...prev, includePreferences: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-blue-800">Include my preferences and settings</span>
              </label>
            </div>

            <button
              onClick={handleDataExport}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>{loading ? 'Exporting...' : 'Export Data'}</span>
            </button>
          </div>

          {/* Data Anonymization Section */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-yellow-600" />
              <h3 className="text-xl font-semibold text-yellow-900">Anonymize My Data</h3>
            </div>
            
            <p className="text-yellow-800 mb-4">
              Remove personal information from your account while keeping your reviews and contributions. 
              This is a reversible action.
            </p>

            <button
              onClick={() => setShowAnonymizeConfirm(true)}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200"
            >
              Anonymize Data
            </button>
          </div>

          {/* Account Deletion Section */}
          <div className="bg-red-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Trash2 className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-900">Delete My Account</h3>
            </div>
            
            <p className="text-red-800 mb-4">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>

            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Delete Account
            </button>
          </div>

          {/* Data Retention Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="h-6 w-6 text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-900">Data Retention Policy</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(retentionInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-sm text-gray-700 capitalize">
                    {key.replace(/_/g, ' ')}:
                  </span>
                  <span className="text-sm text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Need help? Contact our privacy team at privacy@solotravelsafety.com
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Confirm Account Deletion</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Are you sure you want to permanently delete your account? This action cannot be undone and will remove all your data.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAccountDeletion}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Anonymize Confirmation Modal */}
      {showAnonymizeConfirm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-yellow-600" />
              <h3 className="text-lg font-semibold text-gray-900">Confirm Data Anonymization</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              This will remove your personal information from your profile and reviews while keeping the content. 
              You can reverse this action later.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowAnonymizeConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDataAnonymization}
                disabled={loading}
                className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Anonymizing...' : 'Anonymize Data'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataManagement; 