import { AlertTriangle, Activity, Heart, Thermometer } from 'lucide-react';
import { useState } from 'react';

export default function EmergencyDashboard() {
  const [emergencies] = useState([
    { id: 1, patient: "Kader Diarra", severity: "Haute", symptom: "Douleur thoracique", time: "Il y a 5 min" },
    { id: 2, patient: "Amina Ouedraogo", severity: "Moyenne", symptom: "Fièvre élevée", time: "Il y a 12 min" },
    { id: 3, patient: "Jean Zongo", severity: "Critique", symptom: "Accident de la route", time: "Il y a 15 min" }
  ]);
  
  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critique': return 'bg-red-100 text-red-800';
      case 'Haute': return 'bg-orange-100 text-orange-800';
      case 'Moyenne': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="card border-t-4 border-red-500">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-red-600">
        <AlertTriangle className="mr-2" size={24} /> Tableau des Urgences
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="border rounded-lg p-4 bg-red-50 border-red-200">
          <div className="flex items-center">
            <Activity className="text-red-600 mr-2" size={24} />
            <h3 className="font-bold text-lg">Cas Critiques</h3>
          </div>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        
        <div className="border rounded-lg p-4 bg-orange-50 border-orange-200">
          <div className="flex items-center">
            <Heart className="text-orange-600 mr-2" size={24} />
            <h3 className="font-bold text-lg">Cas Graves</h3>
          </div>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        
        <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
          <div className="flex items-center">
            <Thermometer className="text-yellow-600 mr-2" size={24} />
            <h3 className="font-bold text-lg">Cas Moyens</h3>
          </div>
          <p className="text-3xl font-bold mt-2">7</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Patient</th>
              <th className="py-3 px-4 text-left">Gravité</th>
              <th className="py-3 px-4 text-left">Symptôme</th>
              <th className="py-3 px-4 text-left">Temps</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {emergencies.map(emergency => (
              <tr key={emergency.id} className="hover:bg-red-50">
                <td className="py-3 px-4">{emergency.patient}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(emergency.severity)}`}>
                    {emergency.severity}
                  </span>
                </td>
                <td className="py-3 px-4">{emergency.symptom}</td>
                <td className="py-3 px-4">{emergency.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}