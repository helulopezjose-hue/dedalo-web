import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "48px 24px",
      }}
    >
      <style>{`
        .not-found-cta { display: inline-flex; align-items: center; gap: 6px; padding: 10px 22px; border-radius: 8px; background: var(--accent-gold); color: #060C1A; font-size: 14px; font-weight: 700; text-decoration: none; transition: opacity 200ms; }
        .not-found-cta:hover { opacity: 0.88; }
        .not-found-secondary { font-size: 14px; color: var(--muted); text-decoration: none; transition: color 200ms; }
        .not-found-secondary:hover { color: var(--text); }
      `}</style>

      <div
        style={{
          fontSize: "96px",
          fontWeight: 800,
          color: "var(--accent-gold)",
          opacity: 0.15,
          letterSpacing: "-4px",
          lineHeight: 1,
          marginBottom: "24px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        404
      </div>

      <div
        style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--accent-gold)",
          marginBottom: "16px",
        }}
      >
        DÉDALO · Arquitectura de Protección
      </div>

      <h1
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 800,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          marginBottom: "12px",
          maxWidth: "480px",
        }}
      >
        Esta página no existe
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "var(--muted)",
          lineHeight: 1.65,
          maxWidth: "380px",
          marginBottom: "36px",
        }}
      >
        El enlace puede haber cambiado o la página fue removida. Te llevamos de
        vuelta a terreno conocido.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="not-found-cta">
          Volver al inicio
        </Link>
        <Link href="/diagnostico" className="not-found-secondary">
          Hacer diagnóstico →
        </Link>
      </div>
    </div>
  );
}
