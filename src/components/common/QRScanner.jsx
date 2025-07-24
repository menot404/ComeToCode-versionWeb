import { QrCode, CameraOff, CheckCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function QRScanner() {
  const videoRef = useRef(null);
  const [scanned, setScanned] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    return () => {
      stopScan();
    };
  }, []);

  const startScan = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setError(null);
      }
    } catch (err) {
      setError('Accès à la caméra refusé. Veuillez autoriser l\'accès.');
      console.error('Camera error:', err);
    }
  };
  
  const stopScan = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };
  
  const handleScan = () => {
    setTimeout(() => {
      setScanned(true);
      stopScan();
    }, 2000);
  };
  
  return (
    <div className="flex flex-col items-center">
      <h3 className="flex items-center text-lg font-semibold mb-3 text-blue-600">
        <QrCode className="mr-2" /> Scanner un QR Code
      </h3>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      {!scanned ? (
        <div className="relative">
          <div className="border-4 border-blue-500 rounded-lg w-64 h-64 overflow-hidden bg-black">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
              onPlay={handleScan}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-2 border-dashed border-white w-48 h-48" />
          </div>
          
          <div className="mt-4 flex justify-center">
            <button 
              onClick={startScan}
              className="btn-primary flex items-center"
            >
              <QrCode className="mr-1" size={18} />
              Démarrer le scan
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <CheckCircle className="mx-auto text-green-500" size={48} />
          <p className="mt-3 text-lg font-medium">Patient trouvé !</p>
          <button 
            onClick={() => {
              setScanned(false);
              startScan();
            }}
            className="mt-4 btn-primary"
          >
            Scanner un autre
          </button>
        </div>
      )}
    </div>
  );
}