import React, { useState } from 'react';
import { Shield, Eye, Lock, Trash2, Download, Mail, X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('overview');

  if (!isOpen) return null;

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'data-collection', title: 'Data Collection', icon: Eye },
    { id: 'data-usage', title: 'Data Usage', icon: Lock },
    { id: 'data-rights', title: 'Your Rights', icon: Download },
    { id: 'contact', title: 'Contact Us', icon: Mail }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Privacy Policy Overview</h3>
            <p className="text-gray-600">
              At Solo Travel Safety, we are committed to protecting your privacy and ensuring the security of your personal data. 
              This privacy policy explains how we collect, use, and protect your information when you use our platform.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Key Principles</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• We only collect data necessary for providing our services</li>
                <li>• Your data is encrypted and stored securely</li>
                <li>• You have full control over your personal information</li>
                <li>• We never sell or share your data with third parties</li>
                <li>• We comply with GDPR and other privacy regulations</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Data Protection Measures</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• End-to-end encryption for all data transmission</li>
                <li>• Secure cloud storage with Supabase</li>
                <li>• Regular security audits and updates</li>
                <li>• Access controls and authentication</li>
                <li>• Data backup and recovery procedures</li>
              </ul>
            </div>
          </div>
        );

      case 'data-collection':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Data Collection</h3>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Email address (for account creation and communication)</li>
                  <li>• Full name (for personalization and reviews)</li>
                  <li>• Profile information (optional)</li>
                  <li>• Travel preferences and safety ratings</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Usage Data</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• IP address (for security and rate limiting)</li>
                  <li>• Browser type and version</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Search queries and interactions</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies and Tracking</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Essential cookies for functionality</li>
                  <li>• Authentication tokens</li>
                  <li>• Rate limiting data (localStorage)</li>
                  <li>• No third-party tracking cookies</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'data-usage':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">How We Use Your Data</h3>
            
            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Service Provision</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Creating and managing your account</li>
                  <li>• Providing travel safety information</li>
                  <li>• Enabling review and rating functionality</li>
                  <li>• Sending important service updates</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Security and Safety</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Preventing fraud and abuse</li>
                  <li>• Rate limiting and security monitoring</li>
                  <li>• Detecting and preventing malicious activity</li>
                  <li>• Ensuring platform integrity</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Improvement and Analytics</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Analyzing usage patterns (anonymized)</li>
                  <li>• Improving user experience</li>
                  <li>• Identifying and fixing issues</li>
                  <li>• Developing new features</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">What We Don't Do</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Sell your personal data to third parties</li>
                  <li>• Use your data for targeted advertising</li>
                  <li>• Share your information without consent</li>
                  <li>• Track you across other websites</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'data-rights':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Your Data Rights (GDPR)</h3>
            
            <div className="grid gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Access</h4>
                <p className="text-sm text-gray-600 mb-2">
                  You can request a copy of all personal data we hold about you.
                </p>
                <button className="text-sm text-primary-600 hover:text-primary-700 underline">
                  Request Data Export
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Rectification</h4>
                <p className="text-sm text-gray-600">
                  You can update or correct your personal information at any time through your account settings.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Erasure</h4>
                <p className="text-sm text-gray-600 mb-2">
                  You can request deletion of your personal data and account.
                </p>
                <button className="text-sm text-red-600 hover:text-red-700 underline">
                  Request Account Deletion
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Portability</h4>
                <p className="text-sm text-gray-600">
                  You can download your data in a machine-readable format.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Right to Object</h4>
                <p className="text-sm text-gray-600">
                  You can object to certain types of data processing.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Data Retention</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Account data: Until account deletion</li>
                  <li>• Usage logs: 90 days</li>
                  <li>• Security logs: 1 year</li>
                  <li>• Backup data: 30 days after deletion</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, 
                please contact us using the information below.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">privacy@solotravelsafety.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Data Protection Officer</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">
                  We aim to respond to all privacy-related inquiries within 30 days, 
                  as required by GDPR regulations.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Supervisory Authority</h4>
              <p className="text-sm text-yellow-800">
                If you believe we have not addressed your concerns adequately, 
                you have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
          <h2 className="text-2xl font-black text-gray-900 mb-2">Privacy Policy</h2>
          <p className="text-gray-600">How we protect and handle your data</p>
        </div>

        {/* Navigation */}
        <div className="flex border-b border-gray-200">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{section.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderSection()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 