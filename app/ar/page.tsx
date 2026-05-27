// @ts-nocheck
"use client";

export default function ARViewer() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#f0f0f0' }}>
      
      <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>

      {/* The AR Component */}
      <model-viewer
        src="/duck/model.gltf"
        /* We completely removed the ios-src line so it auto-converts! */
        alt="A 3D model of a duck"
        ar
        ar-modes="quick-look webxr scene-viewer"
        ar-scale="auto" /* Ensures the model fits on your screen and isn't the size of a building */
        camera-controls
        auto-rotate
        style={{ width: '100%', height: '100%' }}
      >
        <div 
          slot="poster" 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', fontFamily: 'sans-serif', color: '#333' }}
        >
          <h3>Loading 3D Model...</h3>
        </div>

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