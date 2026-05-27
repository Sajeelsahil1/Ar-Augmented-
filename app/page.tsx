"use client";
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

export default function Home() {
  // Pointing back to the high-end surface tracking AR page
  const [qrUrl, setQrUrl] = useState('http://localhost:3000/ar');

  useEffect(() => {
    // Adding a new cache buster (?v=3) to force the iPhone to load the newest link
    if (typeof window !== 'undefined') {
      setQrUrl(`${window.location.origin}/ar?v=3`);
    }
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#fafafa', color: '#333' }}>
      <h1>Welcome to My AR Project</h1>
      <p style={{ marginBottom: '30px' }}>Scan the QR code below with your iPhone to view the 3D design!</p>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '2px solid #eaeaea', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <QRCode value={qrUrl} size={256} />
      </div>
      
      <p style={{ marginTop: '20px', color: '#666', maxWidth: '400px', textAlign: 'center', lineHeight: '1.5' }}>
        Note: Tap "View in your space" and slowly scan a flat surface like a table or floor.
      </p>
    </main>
  );
}