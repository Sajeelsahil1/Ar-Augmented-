// @ts-nocheck
"use client";
import Script from 'next/script';

export default function ARViewer() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      
      {/* Import Google's Model Viewer component */}
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js" />

      {/* The AR Component */}
      <model-viewer
        src="/duck/model.gltf" // Points to the GLTF file in your public/duck folder
        ios-src="/duck/model.usdz" // Optional: Apple devices prefer .usdz files
        alt="A 3D model of a duck"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: '100%', height: '100%' }}
      >
        {/* A button to trigger the AR camera */}
        <button 
          slot="ar-button" 
          style={{ backgroundColor: 'white', borderRadius: '4px', border: 'none', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', padding: '10px 20px', fontWeight: 'bold', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}
        >
          View in your space
        </button>
      </model-viewer>
      
    </div>
  );
}