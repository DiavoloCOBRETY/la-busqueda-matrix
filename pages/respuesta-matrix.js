import { useState } from 'react';

export default function RespuestaMatrix() {
  const [respuesta, setRespuesta] = useState('');
  const [mensaje, setMensaje] = useState('');

  const comprobarRespuesta = () => {
    const respuestaCorrecta = 'hacker'; // Puedes cambiarlo por la clave correcta
    if (respuesta.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      setMensaje('✅ ¡Respuesta correcta! Acceso concedido.');
    } else {
      setMensaje('❌ Respuesta incorrecta. Intenta de nuevo.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#111',
      color: '#0f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Introduce la respuesta al enigma</h1>
      <input
        type="text"
        placeholder="Escribe tu respuesta..."
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '1rem',
          width: '300px',
          marginBottom: '1rem',
          border: '2px solid #0f0',
          backgroundColor: '#000',
          color: '#0f0'
        }}
      />
      <button
        onClick={comprobarRespuesta}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#000',
          border: '2px solid #0f0',
          color: '#0f0'
        }}
      >
        Comprobar
      </button>
      <p style={{ marginTop: '1rem' }}>{mensaje}</p>
    </div>
  );
}
