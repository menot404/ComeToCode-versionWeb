import { User, Calendar, FileText, Heart, Pill, XCircle } from 'lucide-react';
import QRCodeGenerator from './QRCodeGenerator';

export default function PatientDetails({ patient }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20 mr-4" />
        <div>
          <h2 className="text-2xl font-bold">{patient.name}</h2>
          <p className="text-gray-600">ID: {patient.id}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4">
          <h3 className="font-bold mb-3 text-blue-600 flex items-center">
            <User className="mr-2" /> Informations Personnelles
          </h3>
          <ul className="space-y-2">
            <li><strong>Âge:</strong> {patient.age} ans</li>
            <li><strong>Sexe:</strong> {patient.gender}</li>
            <li><strong>Contact:</strong> {patient.phone}</li>
            <li><strong>Adresse:</strong> {patient.address}</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-bold mb-3 text-blue-600 flex items-center">
            <Heart className="mr-2" /> Antécédents Médicaux
          </h3>
          <ul className="space-y-2">
            <li><strong>Allergies:</strong> {patient.allergies || "Aucune"}</li>
            <li><strong>Maladies chroniques:</strong> {patient.chronicDiseases || "Aucune"}</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-bold mb-3 text-blue-600 flex items-center">
            <Calendar className="mr-2" /> Dernière Consultation
          </h3>
          <p><strong>Date:</strong> {patient.lastVisit}</p>
          <p><strong>Médecin:</strong> {patient.lastDoctor}</p>
          <p><strong>Motif:</strong> {patient.reason}</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-bold mb-3 text-blue-600 flex items-center">
            <Pill className="mr-2" /> Traitement Actuel
          </h3>
          {patient.treatment ? (
            <ul className="space-y-2">
              <li>{patient.treatment}</li>
            </ul>
          ) : (
            <p className="flex items-center text-gray-500">
              <XCircle className="mr-1" /> Aucun traitement en cours
            </p>
          )}
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="font-bold mb-3 text-blue-600">QR Code Patient</h3>
        <QRCodeGenerator patientId={patient.id} />
      </div>
    </div>
  );
}