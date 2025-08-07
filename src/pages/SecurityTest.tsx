import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, X, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SecurityHeaders from '../components/SecurityHeaders';
import RateLimitTest from '../components/RateLimitTest';

const SecurityTest: React.FC = () => {
  const [securityChecks, setSecurityChecks] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runSecurityChecks = async () => {
      const checks = {
        https: window.location.protocol === 'https:',
        csp: await checkCSP(),
        xFrameOptions: await checkXFrameOptions(),
        xContentTypeOptions: await checkXContentTypeOptions(),
        referrerPolicy: await checkReferrerPolicy(),
        hsts: await checkHSTS(),
        permissionsPolicy: await checkPermissionsPolicy(),
      };

      setSecurityChecks(checks);
      setLoading(false);
    };

    runSecurityChecks();
  }, []);

  const checkCSP = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security-test');
      const csp = response.headers.get('content-security-policy');
      return !!csp;
    } catch {
      return false;
    }
  };

  const checkXFrameOptions = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security-test');
      const xfo = response.headers.get('x-frame-options');
      return xfo === 'DENY' || xfo === 'SAMEORIGIN';
    } catch {
      return false;
    }
  };

  const checkXContentTypeOptions = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security-test');
      const xcto = response.headers.get('x-content-type-options');
      return xcto === 'nosniff';
    } catch {
      return false;
    }
  };

  const checkReferrerPolicy = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security-test');
      const rp = response.headers.get('referrer-policy');
      return !!rp;
    } catch {
      return false;
    }
  };

  const checkHSTS = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security-test');
      const hsts = response.headers.get('strict-transport-security');
      return !!hsts;
    } catch {
      return false;
    }
  };

  const checkPermissionsPolicy = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/security-test');
      const pp = response.headers.get('permissions-policy');
      return !!pp;
    } catch {
      return false;
    }
  };

  const getSecurityScore = () => {
    const totalChecks = Object.keys(securityChecks).length;
    const passedChecks = Object.values(securityChecks).filter(Boolean).length;
    return Math.round((passedChecks / totalChecks) * 100);
  };

  const securityScore = getSecurityScore();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400"></div>
            <span className="ml-2">Running security checks...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Security Headers Test</h1>
            <p className="text-gray-600">Verifying that all security headers are properly configured</p>
          </div>

          {/* Security Score */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Security Score</h2>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary-400" />
                <span className="text-2xl font-bold text-primary-600">{securityScore}%</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  securityScore >= 80 ? 'bg-green-500' : 
                  securityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${securityScore}%` }}
              ></div>
            </div>
            
            <p className="text-sm text-gray-600 mt-2">
              {securityScore >= 80 ? 'Excellent security configuration!' :
               securityScore >= 60 ? 'Good security, but some improvements needed.' :
               'Security configuration needs attention.'}
            </p>
          </div>

          {/* Security Checks */}
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(securityChecks).map(([check, passed]) => (
              <div key={check} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 capitalize">
                    {check.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  {passed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  {getCheckDescription(check)}
                </p>
                
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  passed 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {passed ? 'Passed' : 'Failed'}
                </div>
              </div>
            ))}
          </div>

          {/* Security Information */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">About Security Headers</h3>
                <div className="text-sm text-blue-800 space-y-2">
                  <p>
                    <strong>Content Security Policy (CSP):</strong> Prevents XSS attacks by controlling which resources can be loaded.
                  </p>
                  <p>
                    <strong>X-Frame-Options:</strong> Prevents clickjacking attacks by controlling iframe embedding.
                  </p>
                  <p>
                    <strong>X-Content-Type-Options:</strong> Prevents MIME sniffing attacks.
                  </p>
                  <p>
                    <strong>Strict-Transport-Security (HSTS):</strong> Forces HTTPS connections for enhanced security.
                  </p>
                  <p>
                    <strong>Referrer Policy:</strong> Controls how much referrer information is sent with requests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Headers Component */}
          <div className="mt-8">
            <SecurityHeaders showSecurityInfo={true} />
          </div>

          {/* Rate Limiting Test */}
          <div className="mt-8">
            <RateLimitTest />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const getCheckDescription = (check: string): string => {
  const descriptions: Record<string, string> = {
    https: 'Verifies that the connection is using HTTPS encryption',
    csp: 'Checks if Content Security Policy is properly configured',
    xFrameOptions: 'Ensures X-Frame-Options header is set to prevent clickjacking',
    xContentTypeOptions: 'Verifies X-Content-Type-Options is set to prevent MIME sniffing',
    referrerPolicy: 'Checks if Referrer Policy is configured for privacy',
    hsts: 'Verifies Strict-Transport-Security header is set for HTTPS enforcement',
    permissionsPolicy: 'Ensures Permissions Policy is configured to restrict browser features'
  };
  
  return descriptions[check] || 'Security check for this header';
};

export default SecurityTest; 