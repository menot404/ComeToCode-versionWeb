import { Mic, Send } from 'lucide-react';
import { useState } from 'react';

export default function QuestionForm() {
  const [audioMode, setAudioMode] = useState(false);
  const [recording, setRecording] = useState(false);
  
  return (
    <div className="card border-t-4 border-blue-500">
      <div className="flex space-x-4 mb-3">
        <button 
          className={`px-4 py-2 rounded ${!audioMode ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setAudioMode(false)}
        >
          Texte
        </button>
        <button 
          className={`px-4 py-2 rounded flex items-center ${audioMode ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setAudioMode(true)}
        >
          <Mic size={18} className="mr-1" />
          Audio
        </button>
      </div>
      
      {audioMode ? (
        <div className="flex items-center space-x-3">
          <div 
            className={`rounded-full p-3 cursor-pointer ${recording ? 'bg-red-500 animate-pulse' : 'bg-red-100'}`}
            onClick={() => setRecording(!recording)}
          >
            <Mic className="text-white" size={24} />
          </div>
          <p className="text-gray-600">
            {recording ? "Enregistrement en cours..." : "Cliquez pour enregistrer"}
          </p>
          <button 
            className="ml-auto btn-primary flex items-center"
            disabled={!recording}
          >
            <Send size={18} className="mr-1" />
            Envoyer
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <textarea 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Posez votre question médicale..."
          />
          <button className="btn-primary flex items-center ml-auto">
            <Send size={18} className="mr-1" />
            Envoyer la question
          </button>
        </div>
      )}
    </div>
  );
}