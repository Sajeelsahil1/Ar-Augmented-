// @ts-nocheck
"use client";
import { useEffect, useState } from 'react';

export default function ARViewer() {
  const [modelSrc, setModelSrc] = useState('/duck/model.gltf');
  const [itemName, setItemName] = useState('duck');

  useEffect(() => {
    // Read the secret word from the URL when the page loads
    const params = new URLSearchParams(window.location.search);
    const item = params.get('item') || 'duck';
    setItemName(item);

    // Swap the 3D model based on what the URL says
    if (item === 'burger') {
      setModelSrc('/burger/model.gltf'); // Make sure this matches your file!
    } else if (item === 'pizza') {
      setModelSrc('/pizza/model.gltf');  // Make sure this matches your file!
    } else {
      setModelSrc('/duck/model.gltf');
    }
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#f0f0f0' }}>
      
      <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>

      <model-viewer
        src={modelSrc}
        alt={`A 3D model of a ${itemName}`}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: '100%', height: '100%' }}
      >
        <div slot="poster" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', fontFamily: 'sans-serif', color: '#333' }}>
          <h3>Loading {itemName}...</h3>
        </div>

        <button slot="ar-button" style={{ backgroundColor: 'white', borderRadius: '4px', border: 'none', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', padding: '10px 20px', fontWeight: 'bold', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}>
          View in your space
        </button>
      </model-viewer>
      
    </div>
  );
}