import { ChevronDown } from 'lucide-react';

export default function LanguageFilter({ languages, selectedLanguage, onSelect }) {
  return (
    <div className="relative">
      <select 
        value={selectedLanguage}
        onChange={(e) => onSelect(e.target.value)}
        className="appearance-none bg-white border border-blue-500 rounded-lg py-2 pl-4 pr-8 text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-600">
        <ChevronDown size={20} />
      </div>
    </div>
  );
}