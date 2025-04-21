import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1549887534-213a62f20358?fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#00ffcc",
        fontFamily: "'Orbitron', sans-serif",
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
        style={{ display: "flex", gap: "20px" }}
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
        <Link href="/matrix">
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
            Ir al reto Matrix
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
