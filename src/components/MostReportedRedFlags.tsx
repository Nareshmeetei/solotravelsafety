import React from 'react';
import { AlertTriangle, Shield, EyeOff, PocketKnife } from 'lucide-react';

const redFlags = [
  { icon: <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />, label: 'Pickpocketing', count: 'Most common' },
  { icon: <EyeOff className="h-5 w-5 text-red-500 mr-2" />, label: 'Harassment', count: 'Frequent' },
  { icon: <Shield className="h-5 w-5 text-yellow-500 mr-2" />, label: 'Scams', count: 'Frequent' },
  { icon: <PocketKnife className="h-5 w-5 text-gray-700 mr-2" />, label: 'Theft', count: 'Occasional' },
];

const MostReportedRedFlags: React.FC = () => (
  <div className="bg-red-50 p-5 rounded-xl mb-6 border-2 border-red-200 shadow-sm">
    <h4 className="text-lg font-display mb-3">
      Most Reported Red Flags
    </h4>
    <ul className="space-y-3">
      {redFlags.map((flag, idx) => (
        <li key={idx} className="flex items-center text-base">
          {flag.icon}
          <span className="font-semibold text-red-900 mr-2">{flag.label}</span>
          <span className="text-xs text-red-600">({flag.count})</span>
        </li>
      ))}
    </ul>
    <p className="text-xs text-red-700 mt-3">Source: <a href="https://www.solofemaletravelers.club/solo-female-travel-stats" target="_blank" rel="noopener noreferrer" className="underline">Solo Female Travelers Survey 2025</a></p>
  </div>
);

export default MostReportedRedFlags; 