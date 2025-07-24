// In a real app, we would generate QR codes using a library like qrcode.js
// For this demo, we'll simulate the functionality

export const generateQRCode = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const qr = QRCode.toString(data, { type: 'svg' }, (err, svg) => {
           resolve(svg);
        });
        
        // For demo, return a mock URL
        resolve(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`);
      }, 300);
    });
  };