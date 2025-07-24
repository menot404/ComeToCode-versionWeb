import { Search, User } from 'lucide-react';
import { useState } from 'react';

export default function SearchAssistant() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // Simulation de recherche
  const handleSearch = (term) => {
    if (term.length > 2) {
      setResults([
        { id: 'PAT001', name: 'Kader Diarra', lastVisit: '12/06/2023' },
        { id: 'PAT002', name: 'Amina Ouedraogo', lastVisit: '15/06/2023' }
      ]);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <Search className="absolute left-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Rechercher un patient..."
          className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:outline-transparent focus:border-none"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
      
      {searchTerm && results.length > 0 && (
        <div className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
          {results.map(patient => (
            <div key={patient.id} className="p-3 hover:bg-blue-50 cursor-pointer flex items-center border-b">
              <User className="mr-2 text-blue-600" size={18} />
              <div>
                <p className="font-medium">{patient.name}</p>
                <p className="text-xs text-gray-500">Dernière visite: {patient.lastVisit}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}