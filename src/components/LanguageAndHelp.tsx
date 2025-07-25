import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageAndHelpProps {
  languages: string[];
}

const LanguageAndHelp: React.FC<LanguageAndHelpProps> = ({ languages }) => (
  <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
    <h4 className="text-lg font-display mb-2">Common languages spoken here:</h4>
    <ul className="list-disc pl-5 text-gray-800 text-[12pt] mb-2">
      {languages.map((lang, idx) => (
        <li key={idx}>{lang}</li>
      ))}
    </ul>
  </div>
);

export default LanguageAndHelp; 