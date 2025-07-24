import EmergencyDashboard from '../components/medical/EmergencyDashboard';
import PatientTable from '../components/medical/PatientTable';
import QRScanner from '../components/common/QRScanner';
import { AlertTriangle, User, QrCode } from 'lucide-react';
import { useState } from 'react';
import { patients } from '../data/medicalData';

export default function Emergency() {
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [emergencyPatients] = useState(
    patients.filter(p => p.emergency)
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center mb-6">
        <AlertTriangle className="text-red-600 mr-3" size={32} />
        <h1 className="text-2xl font-bold text-red-600">Centre d'Urgence Médicale</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg text-red-700">Mode Urgence</h2>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={emergencyMode}
                  onChange={() => setEmergencyMode(!emergencyMode)}
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-600"></div>
              </label>
            </div>
            <p className="mt-2 text-sm text-red-600">
              {emergencyMode 
                ? "Le mode urgence est activé - Toutes les nouvelles consultations seront marquées comme urgentes" 
                : "Activez le mode urgence pour prioriser les cas critiques"}
            </p>
          </div>

          <EmergencyDashboard />
        </div>
        
        <div className="space-y-6">
          <div className="card border-t-4 border-red-500">
            <h3 className="font-bold mb-3 text-red-600 flex items-center">
              <User className="mr-2" /> Nouveau Patient en Urgence
            </h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nom complet" 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-none"
              />
              <input 
                type="text" 
                placeholder="Âge" 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-none"
              />
              <textarea 
                placeholder="Symptômes principaux" 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-none"
                rows={3}
              />
              <button className="w-full btn-emergency">
                Enregistrer en Urgence
              </button>
            </div>
          </div>
          
          <div className="card border-t-4 border-blue-500">
            <h3 className="font-bold mb-3 text-blue-600 flex items-center">
              <QrCode className="mr-2" /> Scanner QR Code Patient
            </h3>
            <QRScanner />
          </div>
        </div>
      </div>

      <div className="card border-t-4 border-red-500">
        <h2 className="text-xl font-bold mb-4 text-red-600">Patients en Situation d'Urgence</h2>
        <PatientTable patients={emergencyPatients} />
      </div>
    </div>
  );
}