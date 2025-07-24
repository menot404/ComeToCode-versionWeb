import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PatientTable from '../components/medical/PatientTable';
import QRCodeGenerator from '../components/medical/QRCodeGenerator';
import SearchAssistant from '../components/medical/SearchAssistant';
import EmergencyDashboard from '../components/medical/EmergencyDashboard';
import QRScanner from '../components/common/QRScanner';
import { patients } from '../data/medicalData';
import { QrCode } from 'lucide-react'; // Import manquant

export default function Medical() {
  const { isAuthenticated, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [patientList] = useState(patients);
  const [showScanner, setShowScanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, authLoading, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  if (authLoading || isLoading) {
    return (
      <div className="container mx-auto px-4 py-6 flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-blue-600">Chargement des dossiers médicaux...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirection gérée par useEffect
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Dossier Médical Numérique</h1>
        {user && (
          <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8 mr-2" />
            <span className="text-sm font-medium">{user.name.split(' ')[0]}</span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 space-y-3 md:space-y-0">
            <h2 className="text-xl font-semibold">Patients</h2>
            <div className="w-full md:w-64">
              <SearchAssistant />
            </div>
          </div>
          <PatientTable patients={patientList} />
        </div>
        
        <div className="space-y-6">
          <QRCodeGenerator />
          
          <button 
            className="btn-primary flex items-center justify-center w-full"
            onClick={() => setShowScanner(!showScanner)}
          >
            <QrCode className="mr-1" size={18} />
            {showScanner ? "Cacher le scanner" : "Afficher le scanner"}
          </button>
          
          {showScanner && <QRScanner />}
        </div>
      </div>
      
      <EmergencyDashboard />
    </div>
  );
}