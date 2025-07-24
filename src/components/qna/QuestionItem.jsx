import { MessageCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function QuestionItem({ question }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className={`p-4 cursor-pointer ${question.answered ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle className={`mr-3 ${question.answered ? 'text-green-600' : 'text-blue-600'}`} size={20} />
            <div>
              <h3 className="font-medium">{question.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <span>{question.category}</span>
                <span className="mx-2">•</span>
                <span>{question.date}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            {question.answered ? (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-3">
                <CheckCircle className="inline mr-1" size={14} /> Répondu
              </span>
            ) : (
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs mr-3">
                En attente
              </span>
            )}
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="p-4 bg-white border-t">
          <p className="mb-3 text-gray-700">{question.content}</p>
          {question.answer ? (
            <div className="bg-green-50 p-3 rounded-lg">
              <strong className="text-green-700">Réponse :</strong>
              <p className="mt-1">{question.answer}</p>
            </div>
          ) : (
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-yellow-700">Votre question n'a pas encore reçu de réponse.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}