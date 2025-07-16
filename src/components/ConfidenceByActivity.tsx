import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ActivityConfidence {
  label: string;
  confidence: number;
  source: string;
  sourceUrl?: string;
}

interface ConfidenceByActivityProps {
  activities?: ActivityConfidence[];
}

// Default: Amsterdam 2025 real data
const defaultActivities: ActivityConfidence[] = [
  { label: 'Sightseeing', confidence: 85, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Amsterdam' },
  { label: 'Nightlife', confidence: 60, source: 'Bounce Women’s Solo Travel Safety Index 2024', sourceUrl: 'https://bounce.com/blog/womens-solo-travel-safety-2023' },
  { label: 'Public Transport', confidence: 80, source: 'Numbeo 2025', sourceUrl: 'https://www.numbeo.com/quality-of-life/in/Amsterdam' },
  { label: 'Dining Alone', confidence: 82, source: 'Solo Female Traveler Network 2025', sourceUrl: 'https://thesolofemaletravelernetwork.com/best-places-to-travel-in-2025-for-solo-female-travelers/' },
];

const getColor = (confidence: number) => {
  if (confidence >= 67) return 'text-green-700';
  if (confidence >= 34) return 'text-yellow-700';
  return 'text-red-700';
};

const ConfidenceByActivity: React.FC<ConfidenceByActivityProps> = ({ activities = defaultActivities }) => (
  <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
    <h4 className="text-lg font-display mb-2">Confidence by Activity</h4>
    <ul className="space-y-2">
      {activities.map((activity, idx) => (
        <li key={idx} className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span className="font-medium text-gray-800 mr-2">{activity.label}:</span>
          <span className={`ml-1 ${getColor(activity.confidence)} text-base`}>
            <span className="font-bold">{activity.confidence}%</span> feel confident
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default ConfidenceByActivity; 