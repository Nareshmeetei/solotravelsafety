import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface SafetyByTimeOfDayProps {
  daytimeSafetyPercent?: number;
  nighttimeSafetyPercent?: number;
  safetySourceName?: string;
  safetySourceUrl?: string;
}

const SafetyByTimeOfDay: React.FC<SafetyByTimeOfDayProps> = ({ daytimeSafetyPercent, nighttimeSafetyPercent, safetySourceName, safetySourceUrl }) => {
  // Fallback values if not provided
  const daytime = daytimeSafetyPercent ?? 80;
  const nighttime = nighttimeSafetyPercent ?? 40;

  // Color logic for bar and text
  const getColor = (percent: number) => {
    if (percent >= 67) return { bar: 'bg-green-400', text: 'text-green-700' };
    if (percent >= 34) return { bar: 'bg-yellow-400', text: 'text-yellow-700' };
    return { bar: 'bg-red-400', text: 'text-red-700' };
  };

  const dayColor = getColor(daytime);
  const nightColor = getColor(nighttime);

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
      <h4 className="text-lg font-display mb-2">Safety by Time of Day</h4>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center">
          <Sun className="h-8 w-8 text-yellow-400 mr-4" />
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">Daytime</span>
              <span className={`font-bold ${dayColor.text}`}>{daytime.toFixed(1)}% feel safe</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
              <div className={`h-full ${dayColor.bar}`} style={{ width: `${daytime}%` }} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <Moon className="h-8 w-8 text-blue-500 mr-4" />
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">Nighttime</span>
              <span className={`font-bold ${nightColor.text}`}>{nighttime.toFixed(1)}% feel safe</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
              <div className={`h-full ${nightColor.bar}`} style={{ width: `${nighttime}%` }} />
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-6">
        Source: <a href={safetySourceUrl || 'https://www.numbeo.com/crime/'} target="_blank" rel="noopener noreferrer" className="underline">{safetySourceName || 'Numbeo 2025'}</a>
      </p>
    </div>
  );
};

export default SafetyByTimeOfDay; 