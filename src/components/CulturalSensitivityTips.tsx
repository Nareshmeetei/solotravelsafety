import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const tips = [
  { icon: <CheckCircle className="h-5 w-5 text-green-500 mr-2" />, text: 'Dress modestly in conservative countries' },
  { icon: <CheckCircle className="h-5 w-5 text-green-500 mr-2" />, text: 'Learn basic local phrases' },
  { icon: <CheckCircle className="h-5 w-5 text-green-500 mr-2" />, text: 'Respect local customs and greetings' },
  { icon: <XCircle className="h-5 w-5 text-red-400 mr-2" />, text: "Don't share accommodation details with strangers" },
];

const CulturalSensitivityTips: React.FC = () => (
  <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
    <h4 className="text-lg font-display mb-2">Cultural Sensitivity Tips</h4>
    <ul className="space-y-2">
      {tips.map((tip, idx) => (
        <li key={idx} className="flex items-center">
          {tip.icon}
          <span className="text-gray-800">{tip.text}</span>
        </li>
      ))}
    </ul>
    <p className="text-xs text-gray-500 mt-2">
      Source: <a href="https://www.numbeo.com/crime/in/Wellington" target="_blank" rel="noopener noreferrer" className="underline">Numbeo 2025</a>
    </p>
  </div>
);

export default CulturalSensitivityTips; 