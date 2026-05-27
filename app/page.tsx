"use client";
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

export default function Home() {
  // Provide a default fallback URL so the QR code ALWAYS renders instantly
  const [qrUrl, setQrUrl] = useState('http://localhost:3000/ar.html');

  useEffect(() => {
    // Once the page loads, it updates the QR code with your actual local network IP
    if (typeof window !== 'undefined') {
      setQrUrl(`${window.location.origin}/ar.html`);
    }
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <h1>Welcome to My AR Project</h1>
      <p style={{ marginBottom: '30px' }}>Scan the QR code below with your phone to view the 3D design!</p>
      
      {/* The QR code is no longer conditionally hidden */}
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '2px solid #eaeaea' }}>
        <QRCode value={qrUrl} size={256} />
      </div>
      
      <p style={{ marginTop: '20px', color: '#666', maxWidth: '400px', textAlign: 'center' }}>
        Note: You will need to point your camera at a "Hiro" marker after scanning this code.
      </p>
    </main>
  );
}