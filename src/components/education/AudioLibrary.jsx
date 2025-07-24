import AudioPlayer from './AudioPlayer';
import LanguageFilter from './LanguageFilter';
import { useState } from 'react';

export default function AudioLibrary() {
  const [selectedLanguage, setSelectedLanguage] = useState('Toutes');
  
  const audioFiles = [
    { id: 1, title: "Prévention du paludisme", language: "Mooré", duration: "1:45" },
    { id: 2, title: "Symptômes du diabète", language: "Dioula", duration: "2:10" },
    { id: 3, title: "Traitement du VIH", language: "Français", duration: "1:55" },
    { id: 4, title: "Vaccination des enfants", language: "Fulfuldé", duration: "2:30" }
  ];
  
  const filteredFiles = selectedLanguage === 'Toutes' 
    ? audioFiles 
    : audioFiles.filter(file => file.language === selectedLanguage);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Bibliothèque Audio</h1>
        <LanguageFilter 
          languages={['Toutes', 'Français', 'Mooré', 'Dioula', 'Fulfuldé']}
          selectedLanguage={selectedLanguage}
          onSelect={setSelectedLanguage}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFiles.map(audio => (
          <AudioPlayer 
            key={audio.id}
            title={audio.title}
            language={audio.language}
            duration={audio.duration}
          />
        ))}
      </div>
    </div>
  );
}