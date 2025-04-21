import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [codigo, setCodigo] = useState("");
  const [desbloqueado, setDesbloqueado] = useState(false);
  const [mostrarInput, setMostrarInput] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleVerificar = () => {
    if (codigo.trim().toLowerCase() === "thereisnospoon") {
      setDesbloqueado(true);
      setMensaje("✔ Reto desbloqueado");
    } else {
      setMensaje("❌ Código incorrecto");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "#00ffcc",
        fontFamily: "'Orbitron', sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", marginBottom: "1rem", textShadow: "0 0 15px #00ffcc" }}
      >
        Bienvenido a La Búsqueda
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem", color: "#ccc" }}
      >
        ¿Estás listo para una misión secreta que conecta las realidades de Matrix, los misterios de Goonies, los peligros de Depredador, la lucha de John McClane y las profecías de Star Wars?
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Link href="/registro">
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#111",
              border: "2px solid #00ffcc",
              color: "#00ffcc",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px",
              transition: "all 0.3s ease"
            }}
          >
            Registro
          </button>
        </Link>

        {desbloqueado ? (
          <Link href="/matrix">
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#111",
                border: "2px solid #00ffcc",
                color: "#00ffcc",
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "8px"
              }}
            >
              Ir al reto Matrix
            </button>
          </Link>
        ) : (
          <button
            onClick={() => setMostrarInput(!mostrarInput)}
            style={{
              padding: "12px 24px",
              backgroundColor: "#111",
              border: "2px dashed #00ffcc",
              color: "#00ffcc",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            Desbloquear reto Matrix
          </button>
        )}
      </motion.div>

      {mostrarInput && !desbloqueado && (
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Introduce el código secreto..."
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              borderRadius: "6px",
              border: "1px solid #00ffcc",
              backgroundColor: "#000",
              color: "#0ff",
              textAlign: "center",
              marginBottom: "10px"
            }}
          />
          <br />
          <button
            onClick={handleVerificar}
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#00ffcc",
              color: "#000",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Verificar
          </button>
          {mensaje && <p style={{ marginTop: "10px" }}>{mensaje}</p>}
        </div>
      )}
    </div>
  );
}
