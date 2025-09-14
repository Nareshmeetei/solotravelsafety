import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface CulturalSensitivityTipsProps {
  dos: string[];
  donts: string[];
}

const CulturalSensitivityTips: React.FC<CulturalSensitivityTipsProps> = ({ dos, donts }) => (
  <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
    <h4 className="text-lg font-display mb-2 text-neutral-dark">Cultural Sensitivity Tips</h4>
    <ul className="space-y-2 mb-4">
      {dos.map((tip, idx) => (
        <li key={idx} className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-gray-800">{tip}</span>
        </li>
      ))}
    </ul>
    <ul className="space-y-2">
      {donts.map((tip, idx) => (
        <li key={idx} className="flex items-center">
          <XCircle className="h-5 w-5 text-red-400 mr-2" />
          <span className="text-gray-800">{tip}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default CulturalSensitivityTips; 