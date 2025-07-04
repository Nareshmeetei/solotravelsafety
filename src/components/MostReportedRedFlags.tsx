import React from 'react';
import { AlertTriangle, Shield, EyeOff, PocketKnife, Hand, Bike, Syringe, Users, Car, Megaphone, Briefcase, Beer, CreditCard, Smartphone, CameraOff, Waves } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  AlertTriangle: <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />,
  Shield: <Shield className="h-5 w-5 text-red-500 mr-2" />,
  EyeOff: <EyeOff className="h-5 w-5 text-red-500 mr-2" />,
  PocketKnife: <PocketKnife className="h-5 w-5 text-red-500 mr-2" />,
  Hand: <Hand className="h-5 w-5 text-red-500 mr-2" />,
  Bike: <Bike className="h-5 w-5 text-red-500 mr-2" />,
  Syringe: <Syringe className="h-5 w-5 text-red-500 mr-2" />,
  Users: <Users className="h-5 w-5 text-red-500 mr-2" />,
  Car: <Car className="h-5 w-5 text-red-500 mr-2" />,
  Megaphone: <Megaphone className="h-5 w-5 text-red-500 mr-2" />,
  Briefcase: <Briefcase className="h-5 w-5 text-red-500 mr-2" />,
  Beer: <Beer className="h-5 w-5 text-red-500 mr-2" />,
  CreditCard: <CreditCard className="h-5 w-5 text-red-500 mr-2" />,
  Smartphone: <Smartphone className="h-5 w-5 text-red-500 mr-2" />,
  CameraOff: <CameraOff className="h-5 w-5 text-red-500 mr-2" />,
  Waves: <Waves className="h-5 w-5 text-red-500 mr-2" />,
};

interface RedFlag {
  label: string;
  frequency: 'Most common' | 'Frequent' | 'Occasional' | 'Rare';
  icon?: string;
}

interface MostReportedRedFlagsProps {
  redFlags?: RedFlag[];
  safetySourceName?: string;
  safetySourceUrl?: string;
}

const MostReportedRedFlags: React.FC<MostReportedRedFlagsProps> = ({ redFlags, safetySourceName, safetySourceUrl }) => (
  <div className="bg-red-50 p-5 rounded-xl mb-6 border-2 border-red-200 shadow-sm">
    <h4 className="text-lg font-display mb-3">
      Most Reported Red Flags
    </h4>
    <ul className="space-y-3">
      {(redFlags || []).map((flag, idx) => (
        <li key={idx} className="flex items-center text-base">
          {flag.icon && iconMap[flag.icon]}
          <span className="font-semibold text-red-900 mr-2">{flag.label}</span>
          <span className="text-xs text-red-600">({flag.frequency})</span>
        </li>
      ))}
    </ul>
    {safetySourceName && safetySourceUrl && (
      <p className="text-xs text-gray-500 mt-2">
        Source: <a href={safetySourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{safetySourceName}</a>
      </p>
    )}
  </div>
);

export default MostReportedRedFlags; 