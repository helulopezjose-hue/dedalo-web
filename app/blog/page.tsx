import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre seguros, protección patrimonial y finanzas personales para empresas y familias mexicanas.",
};

const posts = [
  {
    slug: "que-cubre-gmm",
    category: "GMM",
    title: "¿Qué cubre realmente un seguro de Gastos Médicos Mayores?",
    excerpt:
      "La diferencia entre una póliza básica y una completa puede significar cientos de miles de pesos en el momento más crítico. Lo que debes revisar antes de contratar.",
    date: "10 abr 2025",
    readTime: "5 min",
  },
  {
    slug: "seguro-de-vida-calculo",
    category: "Vida",
    title: "Seguro de vida: cuánto necesitas y cómo calcularlo",
    excerpt:
      "El 80% de las personas está subprotegido. No porque no quieran protegerse, sino porque nadie les explicó cómo calcular la suma asegurada que realmente necesitan.",
    date: "22 mar 2025",
    readTime: "6 min",
  },
  {
    slug: "errores-seguro-auto",
    category: "Auto",
    title: "Los 5 errores más comunes al contratar un seguro de auto",
    excerpt:
      "Desde elegir el deducible más bajo hasta ignorar la cobertura de responsabilidad civil — estos errores pueden costarte más de lo que ahorras en prima.",
    date: "5 mar 2025",
    readTime: "4 min",
  },
];

const categoryColors: Record<string, string> = {
  GMM: "var(--accent-blue)",
  Vida: "var(--accent-gold)",
  Auto: "#4CAF7D",
};

export default function BlogPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 96px" }}>
      {/* Header */}
      <div style={{ marginBottom: "56px" }}>
        <div className="label-tag" style={{ marginBottom: "16px" }}>BLOG</div>
        <h1 style={{
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--text)",
          marginBottom: "12px",
        }}>
          Artículos sobre protección
        </h1>
        <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "480px", lineHeight: 1.7 }}>
          Sin tecnicismos. Contenido práctico para entender y mejorar tu cobertura.
        </p>
      </div>

      {/* Grid 2 columnas */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
      }}
      className="blog-grid"
      >
        {posts.map(({ slug, category, title, excerpt, date, readTime }) => (
          <article
            key={slug}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              overflow: "hidden",
              transition: "border-color 200ms, transform 200ms",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-gold)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Image placeholder */}
            <div style={{
              width: "100%",
              aspectRatio: "16/7",
              background: `linear-gradient(135deg, var(--surface) 0%, var(--card) 50%, color-mix(in srgb, ${categoryColors[category] ?? "var(--accent-blue)"} 8%, var(--card)) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid var(--border)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative grid */}
              <div style={{
                position: "absolute", inset: 0, opacity: 0.05,
                backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
              <span style={{
                fontSize: "32px",
                opacity: 0.4,
                position: "relative",
              }}>
                {category === "GMM" ? "🏥" : category === "Vida" ? "🛡️" : "🚗"}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "24px" }}>
              {/* Category tag */}
              <span style={{
                display: "inline-block",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: categoryColors[category] ?? "var(--accent-gold)",
                marginBottom: "12px",
              }}>
                {category}
              </span>

              <h2 style={{
                fontSize: "19px",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.35,
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}>
                {title}
              </h2>

              <p style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: "20px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }}>
                {excerpt}
              </p>

              {/* Footer */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid var(--border)",
                paddingTop: "14px",
              }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>{date}</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>· {readTime} lectura</span>
                </div>
                <span style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--accent-gold)",
                  transition: "gap 200ms",
                }}>
                  Leer más →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
