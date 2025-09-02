export async function handler(event, context) {
  // Set security headers for testing
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    
    // Security Headers (YouTube iframe compatible)
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(self "https://www.youtube.com" "https://www.youtube-nocookie.com"), accelerometer=(self "https://www.youtube.com" "https://www.youtube-nocookie.com")',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    // REMOVED: Cross-Origin-Embedder-Policy (blocks YouTube iframes)
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    // REMOVED: Cross-Origin-Resource-Policy (too restrictive)
    
    // Content Security Policy (YouTube iframe enabled)
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.supabase.co https://www.youtube.com https://*.youtube.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob: https://*.ytimg.com https://i.ytimg.com",
      "connect-src 'self' https://*.supabase.co https://api.netlify.com https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com",
      "media-src 'self' https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com blob:",
      "frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://*.youtube.com",
      "child-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://*.youtube.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ')
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Return security test data
  if (event.httpMethod === 'GET') {
    const securityData = {
      timestamp: new Date().toISOString(),
      headers: {
        'X-Frame-Options': headers['X-Frame-Options'],
        'X-Content-Type-Options': headers['X-Content-Type-Options'],
        'X-XSS-Protection': headers['X-XSS-Protection'],
        'Referrer-Policy': headers['Referrer-Policy'],
        'Strict-Transport-Security': headers['Strict-Transport-Security'],
        'Permissions-Policy': headers['Permissions-Policy'],
        'Content-Security-Policy': headers['Content-Security-Policy']
      },
      status: 'Security headers configured correctly',
      environment: process.env.NODE_ENV || 'development'
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(securityData)
    };
  }

  // Method not allowed
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Method not allowed' })
  };
} 