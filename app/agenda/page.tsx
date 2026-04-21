import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda una consulta",
  description: "La primera sesión es gratuita. 30 minutos para entender tu situación y saber exactamente qué necesitas.",
};

export default function AgendaPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 96px" }}>
      <style>{`
        .contact-card { display: flex; align-items: center; gap: 16px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-decoration: none; transition: border-color 200ms; }
        .contact-card-wa:hover { border-color: #25D366; }
        .contact-card-email:hover { border-color: var(--border-gold); }
        @media (max-width: 768px) { .agenda-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <div style={{ maxWidth: "580px", marginBottom: "64px" }}>
        <div className="label-tag" style={{ marginBottom: "16px" }}>AGENDA UNA CONSULTA</div>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text)", marginBottom: "16px" }}>
          La primera sesión<br /><span style={{ color: "var(--accent-gold)" }}>es gratuita.</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.7 }}>
          30 minutos para entender tu situación y saber exactamente qué necesitas. Sin compromiso.
        </p>
      </div>

      <div className="agenda-grid" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "32px", alignItems: "start" }}>
        {/* Calendario placeholder */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "48px 32px", minHeight: "360px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>📅</div>
          <div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)", marginBottom: "6px" }}>Sistema de citas disponible próximamente</p>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, maxWidth: "300px" }}>
              Mientras tanto, contáctame directamente por WhatsApp o correo para agendar tu sesión.
            </p>
          </div>
          <div style={{ display: "inline-block", padding: "6px 16px", border: "1px dashed var(--border-gold)", borderRadius: "6px", fontSize: "11px", fontWeight: 600, color: "var(--accent-gold)", letterSpacing: "1px" }}>
            INTEGRACIÓN CAL.COM · EN BREVE
          </div>
        </div>

        {/* Contacto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <a href="https://wa.me/526861085164" target="_blank" rel="noopener noreferrer" className="contact-card contact-card-wa">
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>💬</div>
            <div>
              <div className="label-tag" style={{ marginBottom: "3px" }}>WhatsApp</div>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)" }}>+52 686 108 5164</div>
            </div>
          </a>

          <a href="mailto:jose@dedaloproteccion.mx" className="contact-card contact-card-email">
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "var(--accent-gold-muted)", border: "1px solid var(--border-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>✉️</div>
            <div>
              <div className="label-tag" style={{ marginBottom: "3px" }}>Correo</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text)" }}>jose@dedaloproteccion.mx</div>
            </div>
          </a>

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px", padding: "16px 18px" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
              ⏱ Respondo en menos de 24 horas en días hábiles. La primera consulta es completamente gratuita y sin compromiso.
            </p>
          </div>

          <div style={{ background: "var(--card)", border: "1px solid var(--border-blue)", borderRadius: "12px", padding: "20px" }}>
            <div className="label-tag" style={{ marginBottom: "12px" }}>LA SESIÓN INCLUYE</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["Revisión de tu situación actual", "Identificación de brechas prioritarias", "Opciones de cobertura con costos reales", "Sin presión ni compromiso de compra"].map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--accent-gold)", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>◈</span>
                  <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
