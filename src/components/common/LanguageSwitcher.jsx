import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Français');
  
  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'mo', name: 'Mooré', flag: '🇧🇫' },
    { code: 'dy', name: 'Dioula', flag: '🇨🇮' },
    { code: 'ff', name: 'Fulfuldé', flag: '🇧🇫' }
  ];
  
  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={18} />
        <span>{currentLanguage}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2 z-10 border border-gray-200">
          {languages.map(lang => (
            <button 
              key={lang.code}
              className="flex items-center w-full text-left px-4 py-2 hover:bg-blue-50"
              onClick={() => {
                setCurrentLanguage(lang.name);
                setIsOpen(false);
                // Ici vous devriez implémenter le changement de langue réel
                console.log("Langue changée pour :", lang.code);
              }}
            >
              <span className="mr-2 text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}