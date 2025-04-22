// pages/matrix/introducir.js
import { useState } from 'react';
import Link from 'next/link';

export default function IntroducirRespuesta() {
  const [respuesta, setRespuesta] = useState('');
  const [resultado, setResultado] = useState(null);

  const comprobar = () => {
    if (
      respuesta.trim().toLowerCase() ===
      'the real question is not: who is neo? but what is the matrix?'
    ) {
      setResultado('✅ ¡Correcto!');
    } else {
      setResultado('❌ Respuesta incorrecta. Intenta de nuevo.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Introduce la respuesta</h1>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        style={{ width: '60%', padding: '0.5rem', fontSize: '1rem' }}
      />
      <br />
      <button onClick={comprobar} style={{ marginTop: '1rem' }}>
        Comprobar
      </button>
      {resultado && <p style={{ marginTop: '1rem' }}>{resultado}</p>}
      <p>
        <Link href="/matrix">⬅ Volver al reto</Link>
      </p>
    </div>
  );
}
