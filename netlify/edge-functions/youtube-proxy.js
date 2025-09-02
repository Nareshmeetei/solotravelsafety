export default async (request, context) => {
  const url = new URL(request.url);
  const videoId = url.searchParams.get('videoId');
  
  if (!videoId) {
    return new Response('Missing videoId parameter', { 
      status: 400,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response('', {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  try {
    // Fetch YouTube embed page
    const youtubeUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    const youtubeResponse = await fetch(youtubeUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NetlifyProxy/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      }
    });

    if (!youtubeResponse.ok) {
      throw new Error(`YouTube responded with ${youtubeResponse.status}`);
    }

    let content = await youtubeResponse.text();
    
    // Modify content to work in our environment
    content = content
      .replace(/https:\/\/www\.youtube-nocookie\.com/g, url.origin + '/.netlify/edge-functions/youtube-proxy')
      .replace(/https:\/\/www\.youtube\.com/g, url.origin + '/.netlify/edge-functions/youtube-proxy');

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'X-Frame-Options': 'ALLOWALL',
        'Cross-Origin-Resource-Policy': 'cross-origin',
        'Cross-Origin-Embedder-Policy': 'unsafe-none',
        'Cache-Control': 'public, max-age=3600',
        'Vary': 'Accept-Encoding'
      }
    });

  } catch (error) {
    console.error('YouTube proxy error:', error);
    
    // Return fallback HTML
    const fallbackHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>YouTube Video</title>
  <style>
    body { 
      margin: 0; 
      padding: 20px; 
      font-family: Arial, sans-serif; 
      text-align: center; 
      background: #f0f0f0; 
    }
    .error {
      background: white;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      max-width: 400px;
      margin: 50px auto;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background: #ff0000;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="error">
    <h2>Video Temporarily Unavailable</h2>
    <p>This video couldn't be loaded due to a temporary issue.</p>
    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="btn">
      Watch on YouTube
    </a>
  </div>
</body>
</html>`;
    
    return new Response(fallbackHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'X-Frame-Options': 'ALLOWALL',
        'Cross-Origin-Resource-Policy': 'cross-origin'
      }
    });
  }
};

export const config = {
  path: "/youtube-proxy"
};