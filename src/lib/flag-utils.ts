// Flag loading utility with multiple services and fallbacks
export const getFlagUrl = (countryCode: string): string => {
  // Primary flag service
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
};

// Multiple flag services as fallbacks
export const getFlagFallbackUrls = (countryCode: string): string[] => {
  const code = countryCode.toLowerCase();
  return [
    // Primary service - flagcdn.com
    `https://flagcdn.com/w80/${code}.png`,
    `https://flagcdn.com/w160/${code}.png`,
    `https://flagcdn.com/w320/${code}.png`,
    `https://flagcdn.com/${code}.svg`,
    `https://flagcdn.com/w80/${code}.webp`,
    
    // Alternative service - flagicons.lipis.dev
    `https://flagicons.lipis.dev/flags/4x3/${code}.svg`,
    `https://flagicons.lipis.dev/flags/1x1/${code}.svg`,
    
    // Another alternative - raw.githubusercontent.com
    `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${code}.svg`,
    `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/1x1/${code}.svg`,
    
    // Final fallback - using a different CDN
    `https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/${code}.svg`,
    `https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/1x1/${code}.svg`,
  ];
};

// Get a specific fallback URL by index
export const getFlagUrlByIndex = (countryCode: string, index: number = 0): string => {
  const fallbackUrls = getFlagFallbackUrls(countryCode);
  return fallbackUrls[index] || fallbackUrls[0];
};

// Test if a flag URL is accessible
export const testFlagUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
    return true;
  } catch (error) {
    return false;
  }
};