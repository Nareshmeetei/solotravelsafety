// Flag loading utility with fallbacks
export const getFlagUrl = (countryCode: string): string => {
  // Primary flag service
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
};

// Alternative flag services as fallbacks
export const getFlagFallbackUrls = (countryCode: string): string[] => {
  const code = countryCode.toLowerCase();
  return [
    `https://flagcdn.com/w80/${code}.png`, // Primary
    `https://flagcdn.com/w160/${code}.png`, // Higher resolution
    `https://flagcdn.com/w320/${code}.png`, // Even higher resolution
    `https://flagcdn.com/${code}.svg`, // SVG version
    `https://flagcdn.com/w80/${code}.webp`, // WebP version
  ];
};

// Get a specific fallback URL by index
export const getFlagUrlByIndex = (countryCode: string, index: number = 0): string => {
  const fallbackUrls = getFlagFallbackUrls(countryCode);
  return fallbackUrls[index] || fallbackUrls[0];
};