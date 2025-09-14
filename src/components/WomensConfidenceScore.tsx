import React from 'react';

interface WomensConfidenceScoreProps {
  city: string;
  country: string;
  score: number;
  source: string;
  sourceUrl?: string;
}

const WomensConfidenceScore: React.FC<WomensConfidenceScoreProps> = ({ city, country, score, source, sourceUrl }) => {
  // Color coding logic matching Safety Overview section
  const getScoreColor = (score: number) => {
    if (score >= 67) return 'text-green-600';
    if (score >= 34) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 67) return 'bg-green-400';
    if (score >= 34) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
      <h4 className="text-lg font-display mb-2 text-neutral-dark">Women's Confidence Score</h4>
      <div className="flex items-center gap-4">
        <div className="w-full">
          <div className="flex justify-between mb-1">
            <span className="font-medium text-gray-700">The confidence score of women who felt safe traveling solo here</span>
            <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getProgressBarColor(score)} transition-all duration-500 ease-out`}
              style={{ width: `${score}%` }} 
            />
          </div>
        </div>
      </div>
      {source && (
        <p className="text-xs text-gray-500 mt-2">
          Source: {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{source}</a>
          ) : (
            source
          )}
        </p>
      )}
    </div>
  );
};

export default WomensConfidenceScore; 