import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border-gold)", marginTop: "auto" }}>
      <style>{`
        .footer-link { font-size: 14px; color: var(--muted); transition: color 200ms; text-decoration: none; }
        .footer-link:hover { color: var(--text); }
        .footer-contact-link { font-size: 14px; color: var(--muted); transition: color 200ms; text-decoration: none; }
        .footer-contact-link:hover { color: var(--accent-gold); }
        .footer-agenda-link { font-size: 14px; color: var(--accent-gold); transition: opacity 200ms; text-decoration: none; }
        .footer-agenda-link:hover { opacity: 0.75; }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px 32px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "14px" }}>
              <span style={{ fontWeight: 800, fontSize: "17px", color: "var(--accent-gold)" }}>DÉDALO</span>
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>· Arquitectura de Protección</span>
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "280px" }}>
              Asesoría de seguros con Cédula A. Estructuras de protección personalizadas en Vida, Gastos Médicos, Auto y Hogar.
            </p>
          </div>
          <div>
            <div className="label-tag" style={{ marginBottom: "18px" }}>Navegación</div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/diagnostico", label: "Diagnóstico" },
                { href: "/blog", label: "Blog" },
                { href: "/agenda", label: "Agenda" },
                { href: "/sobre-mi", label: "Sobre mí" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <div className="label-tag" style={{ marginBottom: "18px" }}>Contacto</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="mailto:jose@dedaloproteccion.mx" className="footer-contact-link">
                jose@dedaloproteccion.mx
              </a>
              <a
                href="https://wa.me/526861085164"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                WhatsApp: 686 108 5164
              </a>
              <Link href="/agenda" className="footer-agenda-link">Agendar consulta →</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>© {new Date().getFullYear()} DÉDALO · Arquitectura de Protección · dedaloproteccion.mx</p>
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>Asesor con Cédula A · AXA México</p>
        </div>
      </div>
    </footer>
  );
}
