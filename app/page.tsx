import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DÉDALO · Arquitectura de Protección",
  description:
    "Asesoría de seguros con Cédula A. Estructuras de protección personalizadas en Vida, Gastos Médicos, Auto y Hogar.",
};

const services = [
  {
    icon: "◈",
    title: "Vida",
    desc: "La base de cualquier estructura de protección. Cubre a quienes dependen de ti si algo te faltara.",
  },
  {
    icon: "◎",
    title: "Gastos Médicos Mayores",
    desc: "Protección ante enfermedades o accidentes que puedan afectar tu economía de forma crítica.",
  },
  {
    icon: "◇",
    title: "Auto",
    desc: "Cobertura para tu vehículo adaptada a tu uso real, no a un paquete genérico.",
  },
  {
    icon: "◻",
    title: "Hogar",
    desc: "Protege el patrimonio que construiste — estructura, contenido y responsabilidad civil.",
  },
];

const steps = [
  { num: "01", title: "Diagnóstico gratuito", desc: "Evaluamos tu situación real en 30 minutos" },
  { num: "02", title: "Propuesta a medida", desc: "Diseñamos la estructura que se ajusta a ti" },
  { num: "03", title: "Protección activa", desc: "Implementamos y hacemos seguimiento contigo" },
];

const testimonials = [
  {
    quote: "Hice este diagnóstico por curiosidad y descubrí una brecha que no había considerado. La cita valió totalmente la pena.",
    name: "Carlos M.", city: "Monterrey",
  },
  {
    quote: "En 30 minutos entendí más sobre mi protección que en años. Me ayudaron a diseñar algo que realmente se ajusta a mi situación.",
    name: "Valeria R.", city: "CDMX",
  },
  {
    quote: "Pensé que ya estaba bien cubierto. El diagnóstico me mostró un hueco enorme en mi protección como empresario.",
    name: "Rodrigo T.", city: "Guadalajara",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────── */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "100px 24px 96px",
      }}>
        <div className="label-tag" style={{ marginBottom: "24px" }}>
          ASESORÍA DE SEGUROS · CÉDULA A
        </div>

        <h1 style={{
          fontSize: "clamp(44px, 6vw, 64px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--text)",
          marginBottom: "24px",
          maxWidth: "680px",
        }}>
          Tu protección,<br />
          <span style={{ color: "var(--accent-gold)" }}>arquitectada.</span>
        </h1>

        <p style={{
          fontSize: "17px",
          color: "var(--muted)",
          lineHeight: 1.7,
          maxWidth: "560px",
          marginBottom: "40px",
        }}>
          Diseño estructuras de protección personalizadas en Vida, Gastos Médicos,
          Auto y Hogar. No vendo pólizas — analizo tu situación y construyo contigo
          la cobertura que realmente necesitas.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link
            href="/diagnostico"
            style={{
              display: "inline-block",
              background: "var(--accent-blue)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              padding: "13px 28px",
              borderRadius: "8px",
              transition: "background 200ms",
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-blue-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-blue)")}
          >
            Hacer mi diagnóstico gratuito
          </Link>
          <Link
            href="/sobre-mi"
            style={{
              display: "inline-block",
              color: "var(--accent-gold)",
              fontSize: "15px",
              fontWeight: 600,
              padding: "13px 28px",
              borderRadius: "8px",
              border: "1px solid var(--border-gold)",
              transition: "all 200ms",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--accent-gold-muted)";
              e.currentTarget.style.borderColor = "var(--accent-gold)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border-gold)";
            }}
          >
            Conocer mi enfoque
          </Link>
        </div>
      </section>

      {/* ─── Servicios ─────────────────────────────────────── */}
      <section style={{
        borderTop: "1px solid var(--border)",
        padding: "96px 0",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div className="label-tag" style={{ marginBottom: "16px" }}>SERVICIOS</div>
          <h2 style={{
            fontSize: "30px",
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: "48px",
            letterSpacing: "-0.01em",
          }}>
            Líneas de protección
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}>
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border-blue)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  transition: "border-color 200ms, background 200ms",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-gold)";
                  (e.currentTarget as HTMLDivElement).style.background = "var(--surface)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-blue)";
                  (e.currentTarget as HTMLDivElement).style.background = "var(--card)";
                }}
              >
                <div style={{ fontSize: "22px", color: "var(--accent-gold)", marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--text)", marginBottom: "10px" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proceso ───────────────────────────────────────── */}
      <section style={{
        borderTop: "1px solid var(--border)",
        padding: "96px 0",
        background: "var(--surface)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div className="label-tag" style={{ marginBottom: "16px" }}>PROCESO</div>
          <h2 style={{
            fontSize: "30px",
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: "56px",
            letterSpacing: "-0.01em",
          }}>
            Cómo trabajo contigo
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="steps-grid"
          >
            {/* Línea dorada conectora */}
            <div
              className="steps-line"
              style={{
                position: "absolute",
                top: "28px",
                left: "calc(16.66% + 12px)",
                right: "calc(16.66% + 12px)",
                height: "1px",
                background: "linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light), var(--accent-gold))",
                opacity: 0.35,
              }}
            />

            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ padding: "0 24px 0 0", position: "relative" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-gold)",
                  background: "var(--bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  position: "relative",
                  zIndex: 1,
                }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent-gold)" }}>{num}</span>
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--text)", marginBottom: "10px" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonios ───────────────────────────────────── */}
      <section style={{
        borderTop: "1px solid var(--border)",
        padding: "96px 0",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div className="label-tag" style={{ marginBottom: "16px" }}>TESTIMONIOS</div>
          <h2 style={{
            fontSize: "30px",
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: "48px",
            letterSpacing: "-0.01em",
          }}>
            Lo que dicen quienes ya hicieron su diagnóstico
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {testimonials.map(({ quote, name, city }) => (
              <div
                key={name}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                }}
              >
                <p style={{
                  fontSize: "15px",
                  color: "var(--text)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}>
                  "{quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--accent-gold-muted)",
                    border: "1px solid var(--border-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "var(--accent-gold)",
                    fontWeight: 700,
                  }}>
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

      {/* ─── CTA Final ─────────────────────────────────────── */}
      <section style={{
        borderTop: "1px solid var(--border-gold)",
        padding: "96px 0",
        background: "var(--surface)",
      }}>
        <div style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}>
          <div className="label-tag" style={{ marginBottom: "20px" }}>DIAGNÓSTICO GRATUITO</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "-0.01em",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            ¿Sabes realmente qué tan<br />protegido estás?
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted)", marginBottom: "36px", lineHeight: 1.7 }}>
            15 preguntas. Resultado inmediato. Sin costo.
          </p>
          <Link
            href="/diagnostico"
            style={{
              display: "inline-block",
              background: "var(--accent-blue)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "8px",
              transition: "background 200ms",
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-blue-light)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-blue)")}
          >
            Hacer el diagnóstico — es gratuito
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .steps-line { display: none !important; }
        }
      `}</style>
    </>
  );
}
