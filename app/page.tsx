import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DÉDALO · Arquitectura de Protección",
  description:
    "Asesoría de seguros con Cédula A. Estructuras de protección personalizadas en Vida, Gastos Médicos, Auto y Hogar.",
};

const services = [
  { icon: "◈", title: "Vida", desc: "La base de cualquier estructura de protección. Cubre a quienes dependen de ti si algo te faltara." },
  { icon: "◎", title: "Gastos Médicos Mayores", desc: "Protección ante enfermedades o accidentes que puedan afectar tu economía de forma crítica." },
  { icon: "◇", title: "Auto", desc: "Cobertura para tu vehículo adaptada a tu uso real, no a un paquete genérico." },
  { icon: "◻", title: "Hogar", desc: "Protege el patrimonio que construiste — estructura, contenido y responsabilidad civil." },
];

const steps = [
  { num: "01", title: "Diagnóstico gratuito", desc: "Evaluamos tu situación real en 30 minutos" },
  { num: "02", title: "Propuesta a medida", desc: "Diseñamos la estructura que se ajusta a ti" },
  { num: "03", title: "Protección activa", desc: "Implementamos y hacemos seguimiento contigo" },
];

const testimonials = [
  { quote: "Hice este diagnóstico por curiosidad y descubrí una brecha que no había considerado. La cita valió totalmente la pena.", name: "Carlos M.", city: "Monterrey" },
  { quote: "En 30 minutos entendí más sobre mi protección que en años. Me ayudaron a diseñar algo que realmente se ajusta a mi situación.", name: "Valeria R.", city: "CDMX" },
  { quote: "Pensé que ya estaba bien cubierto. El diagnóstico me mostró un hueco enorme en mi protección como empresario.", name: "Rodrigo T.", city: "Guadalajara" },
];

export default function HomePage() {
  return (
    <>
      <style>{`
        .cta-primary { background: var(--accent-blue); color: #fff; font-size: 15px; font-weight: 600; padding: 13px 28px; border-radius: 8px; display: inline-block; text-decoration: none; transition: background 200ms; }
        .cta-primary:hover { background: var(--accent-blue-light); }
        .cta-secondary { color: var(--accent-gold); font-size: 15px; font-weight: 600; padding: 13px 28px; border-radius: 8px; border: 1px solid var(--border-gold); display: inline-block; text-decoration: none; transition: background 200ms, border-color 200ms; }
        .cta-secondary:hover { background: var(--accent-gold-muted); border-color: var(--accent-gold); }
        .service-card { background: var(--card); border: 1px solid var(--border-blue); border-radius: 12px; padding: 28px 24px; transition: border-color 200ms, background 200ms; }
        .service-card:hover { border-color: var(--border-gold); background: var(--surface); }
        .testimonial-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 28px 24px; }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .steps-line { display: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="label-tag" style={{ marginBottom: "24px" }}>ASESORÍA DE SEGUROS · CÉDULA A</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 64px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text)", marginBottom: "24px", maxWidth: "680px" }}>
          Tu protección,<br /><span style={{ color: "var(--accent-gold)" }}>arquitectada.</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "40px" }}>
          Diseño estructuras de protección personalizadas en Vida, Gastos Médicos, Auto y Hogar.
          No vendo pólizas — analizo tu situación y construyo contigo la cobertura que realmente necesitas.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link href="/diagnostico" className="cta-primary">Hacer mi diagnóstico gratuito</Link>
          <Link href="/sobre-mi" className="cta-secondary">Conocer mi enfoque</Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-lg" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="page-container">
          <div className="label-tag" style={{ marginBottom: "16px" }}>SERVICIOS</div>
          <h2 style={{ fontSize: "30px", fontWeight: 600, color: "var(--text)", marginBottom: "48px", letterSpacing: "-0.01em" }}>Líneas de protección</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="service-card">
                <div style={{ fontSize: "22px", color: "var(--accent-gold)", marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--text)", marginBottom: "10px" }}>{title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-lg" style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="page-container">
          <div className="label-tag" style={{ marginBottom: "16px" }}>PROCESO</div>
          <h2 style={{ fontSize: "30px", fontWeight: 600, color: "var(--text)", marginBottom: "56px", letterSpacing: "-0.01em" }}>Cómo trabajo contigo</h2>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, position: "relative" }}>
            <div className="steps-line" style={{ position: "absolute", top: "28px", left: "calc(16.66% + 12px)", right: "calc(16.66% + 12px)", height: "1px", background: "linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light), var(--accent-gold))", opacity: 0.35 }} />
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ padding: "0 24px 0 0", position: "relative" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid var(--border-gold)", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent-gold)" }}>{num}</span>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text)", marginBottom: "10px" }}>{title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-lg" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="page-container">
          <div className="label-tag" style={{ marginBottom: "16px" }}>TESTIMONIOS</div>
          <h2 style={{ fontSize: "30px", fontWeight: 600, color: "var(--text)", marginBottom: "48px", letterSpacing: "-0.01em" }}>Lo que dicen quienes ya hicieron su diagnóstico</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {testimonials.map(({ quote, name, city }) => (
              <div key={name} className="testimonial-card">
                <p style={{ fontSize: "15px", color: "var(--text)", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>"{quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent-gold-muted)", border: "1px solid var(--border-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "var(--accent-gold)", fontWeight: 700 }}>
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>{name}</div>
                    <div style={{ fontSize: "11px", color: "var(--muted)" }}>{city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-lg" style={{ borderTop: "1px solid var(--border-gold)", background: "var(--surface)" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div className="label-tag" style={{ marginBottom: "20px" }}>DIAGNÓSTICO GRATUITO</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: "16px", lineHeight: 1.2 }}>
            ¿Sabes realmente qué tan<br />protegido estás?
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", marginBottom: "36px", lineHeight: 1.7 }}>15 preguntas. Resultado inmediato. Sin costo.</p>
          <Link href="/diagnostico" className="cta-primary" style={{ fontSize: "15px", padding: "14px 32px" }}>
            Hacer el diagnóstico — es gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
