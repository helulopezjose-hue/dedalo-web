import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--surface)",
      borderTop: "1px solid var(--border-gold)",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "56px 24px 32px",
      }}>
        {/* 3-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px",
        }}
        className="footer-grid"
        >
          {/* Columna 1: Marca */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "14px" }}>
              <span style={{ fontWeight: 800, fontSize: "17px", color: "var(--accent-gold)" }}>DÉDALO</span>
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>· Arquitectura de Protección</span>
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", maxWidth: "280px" }}>
              Asesoría de seguros con Cédula A. Diseñamos estructuras de protección
              personalizadas en Vida, Gastos Médicos, Auto y Hogar.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <div className="label-tag" style={{ marginBottom: "18px" }}>Navegación</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/diagnostico", label: "Diagnóstico" },
                { href: "/blog", label: "Blog" },
                { href: "/agenda", label: "Agenda" },
                { href: "/sobre-mi", label: "Sobre mí" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ fontSize: "14px", color: "var(--muted)", transition: "color 200ms" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <div className="label-tag" style={{ marginBottom: "18px" }}>Contacto</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="mailto:hola@dedaloproteccion.mx"
                style={{ fontSize: "14px", color: "var(--muted)", transition: "color 200ms" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                hola@dedaloproteccion.mx
              </a>
              <Link
                href="/agenda"
                style={{ fontSize: "14px", color: "var(--accent-gold)", transition: "opacity 200ms" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Agendar consulta →
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>
            © {new Date().getFullYear()} DÉDALO · Arquitectura de Protección · dedaloproteccion.mx
          </p>
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>
            Asesor con Cédula A · AXA México
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
