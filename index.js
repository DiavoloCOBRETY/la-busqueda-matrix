import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Bienvenido a La Búsqueda</h1>
      <Link href="/registro">
        <button style={{ margin: "10px" }}>Registro</button>
      </Link>
      <Link href="/matrix">
        <button style={{ margin: "10px" }}>Ir al reto Matrix</button>
      </Link>
    </div>
  );
}