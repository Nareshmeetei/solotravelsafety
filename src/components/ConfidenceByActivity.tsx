import React from 'react';
import { CheckCircle } from 'lucide-react';

const activities = [
  { label: 'Sightseeing', confidence: 80 },
  { label: 'Nightlife', confidence: 40 },
  { label: 'Public Transport', confidence: 65 },
  { label: 'Dining Alone', confidence: 80 },
];

const ConfidenceByActivity: React.FC = () => (
  <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
    <h4 className="text-lg font-display mb-2">Confidence by Activity</h4>
    <ul className="space-y-2">
      {activities.map((activity, idx) => (
        <li key={idx} className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span className="font-medium text-gray-800 mr-2">{activity.label}</span>
          <span className="text-xs text-gray-500">{activity.confidence}% feel confident</span>
        </li>
      ))}
    </ul>
    <p className="text-xs text-gray-500 mt-2">Source: <a href="https://www.solofemaletravelers.club/solo-female-travel-stats" target="_blank" rel="noopener noreferrer" className="underline">Solo Female Travelers Survey 2025</a></p>
  </div>
);

export default ConfidenceByActivity; 