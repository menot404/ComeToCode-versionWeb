import { QrCode, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function QRCodeGenerator({ patientId }) {
  const [qrImage, setQrImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: { patientInfo: patientId || '' }
  });

  // Mettre à jour la valeur si patientId change
  useEffect(() => {
    if (patientId) {
      setValue('patientInfo', patientId);
    }
  }, [patientId, setValue]);

  const generateQR = (data) => {
    // En production, utiliser une librairie comme qrcode.js
    const mockQR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data.patientInfo)}`;
    setQrImage(mockQR);
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h3 className="flex items-center text-lg font-semibold mb-3 text-blue-600">
        <QrCode className="mr-2" /> QR Code Patient
      </h3>
      
      <form onSubmit={handleSubmit(generateQR)} className="space-y-3">
        <input 
          {...register("patientInfo", { required: true })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none"
          placeholder="ID Patient"
          disabled={!!patientId}
        />
        
        <button 
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center w-full justify-center"
        >
          <QrCode size={18} className="mr-1" />
          Générer QR Code
        </button>
      </form>
      
      {qrImage && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg flex flex-col items-center">
          <img 
            src={qrImage} 
            alt="QR Code" 
            className="w-40 h-40 border border-gray-300"
            onError={(e) => {
              console.error("Erreur de chargement du QR code");
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='10px' fill='%23666'%3EQR Code%3C/text%3E%3C/svg%3E";
            }}
          />
          <a 
            href={qrImage} 
            download={`sanbacare-qr-${patientId || 'patient'}.png`}
            className="mt-2 text-blue-600 hover:text-blue-800 flex items-center"
          >
            <Download size={16} className="mr-1" />
            Télécharger
          </a>
        </div>
      )}
    </div>
  );
}