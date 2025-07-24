import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  
  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'mo', name: 'Mooré', flag: '🇧🇫' },
    { code: 'dy', name: 'Dioula', flag: '🇨🇮' },
    { code: 'ff', name: 'Fulfuldé', flag: '🇧🇫' }
  ];
  
  const changeLanguage = (code) => {
    setCurrentLanguage(code);
    localStorage.setItem('sanbaLanguage', code);
  };
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('sanbaLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      languages,
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);