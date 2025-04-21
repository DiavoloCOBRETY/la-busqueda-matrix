import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Matrix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(256).join("1").split("");
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = "16pt monospace";

      letters.forEach((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * 10;
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
      });
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        color: "#0f0",
        fontFamily: "monospace"
      }}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }}></canvas>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "2rem", marginBottom: "1rem", color: "#0f0" }}
        >
          Primer Enigma: «La Realidad No Existe»
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ maxWidth: "600px", marginBottom: "2rem" }}
        >
          Alguien te dejó este mensaje cifrado:<br /><br />
          <strong>VGhlIHJlYWwgcXVlc3Rpb24gaXMgTm90OiB3aG8gaXMgTmVvPyBCdXQgd2hhdCBpcyBUaGUgTWF0cml4Pw==</strong><br /><br />
          Descifra el mensaje. Cuando tengas la respuesta, usa el botón de abajo para introducirla.
        </motion.p>

        <Link href="/respuesta">
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "black",
              border: "2px solid #0f0",
              color: "#0f0",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            Introducir respuesta
          </button>
        </Link>
      </div>
    </div>
  );
}
