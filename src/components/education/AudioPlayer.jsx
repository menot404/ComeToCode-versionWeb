import { PlayCircle, PauseCircle, Download, Volume2 } from 'lucide-react';
import { useState } from 'react';
import useOffline from '../../hooks/useOffline';

export default function AudioPlayer({ title, language, duration }) {
  const [playing, setPlaying] = useState(false);
  const [progress] = useState(30);
  const isOffline = useOffline();

  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-blue-600">{title}</h4>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          {language}
        </span>
      </div>
      
      <div className="flex items-center mt-3 space-x-3">
        <button 
          onClick={() => setPlaying(!playing)}
          className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200"
          disabled={isOffline && !playing}
        >
          {playing ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
        </button>
        
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <span className="text-sm text-gray-500">{duration}</span>
        
        <div className="flex space-x-2">
          <Volume2 className="text-gray-500" />
          <button className="text-green-600 hover:text-green-800">
            <Download size={18} />
          </button>
        </div>
      </div>
      
      {isOffline && (
        <div className="mt-3 bg-yellow-50 text-yellow-700 text-sm p-2 rounded">
          Mode hors ligne - Lecture uniquement des contenus téléchargés
        </div>
      )}
    </div>
  );
}