"use client";
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState('duck');
  const [baseUrl, setBaseUrl] = useState('http://localhost:3000');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
    }
  }, []);

  // Notice: We are pointing back to the /ar page, NOT ar.html!
  const qrUrl = `${baseUrl}/ar?item=${selectedItem}`;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#fafafa', color: '#333' }}>
      <h1>SETIX AR Menu</h1>
      <p style={{ marginBottom: '20px' }}>Select an item, scan the code, and drop it on your table.</p>
      
      {/* Menu Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <button onClick={() => setSelectedItem('duck')} style={buttonStyle(selectedItem === 'duck')}>Rubber Duck</button>
        <button onClick={() => setSelectedItem('burger')} style={buttonStyle(selectedItem === 'burger')}>Juicy Burger</button>
        <button onClick={() => setSelectedItem('pizza')} style={buttonStyle(selectedItem === 'pizza')}>Pepperoni Pizza</button>
      </div>
      
      {/* Dynamic QR Code */}
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '2px solid #eaeaea', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <QRCode value={qrUrl} size={256} />
      </div>
      
      <p style={{ marginTop: '20px', color: '#666', maxWidth: '400px', textAlign: 'center', lineHeight: '1.5' }}>
        Currently viewing: <strong>{selectedItem.toUpperCase()}</strong>
      </p>
    </main>
  );
}

// Simple button styling
function buttonStyle(isActive: boolean) {
  return {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '8px',
    border: isActive ? '2px solid #0070f3' : '2px solid #ccc',
    backgroundColor: isActive ? '#0070f3' : 'white',
    color: isActive ? 'white' : '#333',
    transition: 'all 0.2s ease',
  };
}