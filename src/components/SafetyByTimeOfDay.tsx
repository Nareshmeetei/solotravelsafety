import React from 'react';
import { Sun, Moon } from 'lucide-react';

const SafetyByTimeOfDay: React.FC = () => {
  // Real data from Solo Female Travelers Survey 2025
  const daytimeSafe = 80; // % feel safe during the day
  const nighttimeSafe = 40; // % feel safe at night

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
      <h4 className="text-lg font-display mb-2">Safety by Time of Day</h4>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center">
          <Sun className="h-8 w-8 text-yellow-400 mr-4" />
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">Daytime</span>
              <span className="font-bold text-green-700">{daytimeSafe}% feel safe</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-400" style={{ width: `${daytimeSafe}%` }} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <Moon className="h-8 w-8 text-blue-500 mr-4" />
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">Nighttime</span>
              <span className="font-bold text-blue-700">{nighttimeSafe}% feel safe</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400" style={{ width: `${nighttimeSafe}%` }} />
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">Source: <a href="https://www.solofemaletravelers.club/solo-female-travel-stats" target="_blank" rel="noopener noreferrer" className="underline">Solo Female Travelers Survey 2025</a></p>
    </div>
  );
};

export default SafetyByTimeOfDay; 