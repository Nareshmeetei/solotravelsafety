import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageAndHelpProps {
  languages: string[];
}

const LanguageAndHelp: React.FC<LanguageAndHelpProps> = ({ languages }) => {
  // Safety check to ensure languages is an array
  const safeLanguages = Array.isArray(languages) ? languages : ['Local language', 'English'];
  
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
      <h4 className="text-lg font-display mb-2 text-neutral-dark">Common languages spoken here:</h4>
      <ul className="list-disc pl-5 text-gray-800 text-[12pt] mb-2">
        {safeLanguages.map((lang, idx) => (
          <li key={idx}>{lang}</li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageAndHelp; 