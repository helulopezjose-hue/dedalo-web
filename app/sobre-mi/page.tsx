import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "José G. Helú — Asesor de seguros con Cédula A. DÉDALO · Arquitectura de Protección.",
};

const credentials = [
  "Cédula A",
  "AXA México",
  "Vida",
  "GMM",
  "Auto",
  "Hogar",
];

export default function SobreMiPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 96px" }}>
      {/* Header */}
      <div style={{ marginBottom: "64px" }}>
        <div className="label-tag" style={{ marginBottom: "16px" }}>SOBRE MÍ</div>
        <h1 style={{
          fontSize: "clamp(40px, 5vw, 56px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--text)",
          marginBottom: "10px",
        }}>
          José G. Helú
        </h1>
        <p style={{ fontSize: "17px", color: "var(--accent-gold)", fontWeight: 500 }}>
          Asesor de seguros · Cédula A · DÉDALO
        </p>
      </div>

      {/* Layout 2 columnas */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 360px",
        gap: "64px",
        alignItems: "start",
      }}
      className="sobre-mi-grid"
      >
        {/* Columna izquierda: texto */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              "Mi trabajo no es venderte un seguro. Es entender tu situación, identificar tus brechas reales y diseñar contigo una estructura de protección que tenga sentido para tu etapa de vida.",
              "Trabajo con productos AXA en líneas de Vida, Gastos Médicos Mayores, Auto individual y Hogar. Pero lo que ofrezco no es un catálogo — es criterio, análisis y acompañamiento.",
              "DÉDALO nació de la convicción de que la protección patrimonial merece el mismo rigor que cualquier decisión financiera importante.",
            ].map((text, i) => (
              <p key={i} style={{
                fontSize: "17px",
                color: i === 0 ? "var(--text)" : "var(--muted)",
                lineHeight: 1.75,
                fontWeight: i === 0 ? 500 : 400,
              }}>
                {text}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "48px" }}>
            <Link
              href="/agenda"
              style={{
                display: "inline-block",
                background: "var(--accent-blue)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                padding: "13px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background 200ms",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-blue-light)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-blue)")}
            >
              Agenda una consulta →
            </Link>
          </div>
        </div>

        {/* Columna derecha: credenciales + avatar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Avatar placeholder */}
          <div style={{
            width: "100%",
            aspectRatio: "1",
            maxWidth: "280px",
            borderRadius: "16px",
            background: "var(--card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
          }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "var(--accent-gold-muted)", border: "1px solid var(--border-gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "28px", fontWeight: 800, color: "var(--accent-gold)",
            }}>
              JH
            </div>
            <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center" }}>
              Foto próximamente
            </p>
          </div>

          {/* Credenciales */}
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "22px 20px",
          }}>
            <div className="label-tag" style={{ marginBottom: "16px" }}>CREDENCIALES</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {credentials.map(c => (
                <span key={c} style={{
                  background: "var(--accent-gold-muted)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent-gold)",
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sobre-mi-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
