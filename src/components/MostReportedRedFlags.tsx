import React, { useState } from 'react';
import { AlertTriangle, Shield, EyeOff, PocketKnife, Hand, Bike, Syringe, Users, Car, Megaphone, Briefcase, Beer, CreditCard, Smartphone, CameraOff, Waves, Cloud, MapPin, Globe, Clock, Zap, Home, TrendingUp, Heart, Umbrella, ShoppingBag, UserX, DollarSign, Utensils, Mountain, Info } from 'lucide-react';

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
  Cloud: <Cloud className="h-5 w-5 text-red-500 mr-2" />,
  MapPin: <MapPin className="h-5 w-5 text-red-500 mr-2" />,
  Globe: <Globe className="h-5 w-5 text-red-500 mr-2" />,
  Clock: <Clock className="h-5 w-5 text-red-500 mr-2" />,
  Zap: <Zap className="h-5 w-5 text-red-500 mr-2" />,
  Home: <Home className="h-5 w-5 text-red-500 mr-2" />,
  TrendingUp: <TrendingUp className="h-5 w-5 text-red-500 mr-2" />,
  Heart: <Heart className="h-5 w-5 text-red-500 mr-2" />,
  Umbrella: <Umbrella className="h-5 w-5 text-red-500 mr-2" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5 text-red-500 mr-2" />,
  UserX: <UserX className="h-5 w-5 text-red-500 mr-2" />,
  DollarSign: <DollarSign className="h-5 w-5 text-red-500 mr-2" />,
  Utensils: <Utensils className="h-5 w-5 text-red-500 mr-2" />,
  Mountain: <Mountain className="h-5 w-5 text-red-500 mr-2" />,
};

interface RedFlag {
  label: string;
  frequency: 'Most common' | 'Frequent' | 'Occasional' | 'Rare';
  icon?: string;
  details?: string;
  prevention?: string;
}

interface MostReportedRedFlagsProps {
  redFlags?: RedFlag[];
  safetySourceName?: string;
  safetySourceUrl?: string;
}

const MostReportedRedFlags: React.FC<MostReportedRedFlagsProps> = ({ redFlags, safetySourceName, safetySourceUrl }) => {
  const [openTooltip, setOpenTooltip] = useState<number | null>(null);

  const toggleTooltip = (index: number) => {
    setOpenTooltip(openTooltip === index ? null : index);
  };

  return (
    <div className="bg-red-50 p-5 rounded-xl mb-6 border-2 border-red-200 shadow-sm">
      <h4 className="text-lg font-display mb-3 text-neutral-dark">
        Most Reported Red Flags
      </h4>
      <ul className="space-y-3">
        {(redFlags || []).map((flag, idx) => (
          <li key={idx} className="flex items-center text-base relative">
            {flag.icon && iconMap[flag.icon]}
            <span className="font-semibold text-red-900 mr-2">{flag.label}</span>
            <span className="text-xs text-red-600 mr-2">({flag.frequency})</span>

            {(flag.details || flag.prevention) && (
              <div className="relative inline-block">
                <button
                  onClick={() => toggleTooltip(idx)}
                  onMouseEnter={() => setOpenTooltip(idx)}
                  onMouseLeave={() => setOpenTooltip(null)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label={`More information about ${flag.label}`}
                >
                  <Info className="h-4 w-4" />
                </button>

                {openTooltip === idx && (
                  <div className="absolute left-0 top-6 z-50 w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-sm">
                    {flag.details && (
                      <div className="mb-3">
                        <h5 className="font-semibold text-red-900 mb-1">What this means:</h5>
                        <p className="text-gray-700">{flag.details}</p>
                      </div>
                    )}
                    {flag.prevention && (
                      <div>
                        <h5 className="font-semibold text-green-800 mb-1">How to prevent:</h5>
                        <p className="text-gray-700">{flag.prevention}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
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
};

export default MostReportedRedFlags; 