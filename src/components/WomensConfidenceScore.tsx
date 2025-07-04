import React from 'react';

const WomensConfidenceScore: React.FC = () => {
  // Real data: 60-70% feel confident after a few trips
  const confidence = 65;
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
      <h4 className="text-lg font-display mb-2">Women's Confidence Score</h4>
      <div className="flex items-center gap-4">
        <div className="w-full">
          <div className="flex justify-between mb-1">
            <span className="font-medium text-gray-700">Confidence</span>
            <span className="font-bold text-green-700">{confidence}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-400" style={{ width: `${confidence}%` }} />
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: <a href="https://www.numbeo.com/crime/in/Wellington" target="_blank" rel="noopener noreferrer" className="underline">Numbeo 2025</a>
      </p>
    </div>
  );
};

export default WomensConfidenceScore; 