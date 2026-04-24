import Link from "next/link";

export default function BlogCTA() {
  return (
    <>
      <style>{`.blog-cta-btn:hover { opacity: 0.88 !important; }`}</style>
    <div
      style={{
        marginTop: "56px",
        padding: "32px",
        borderRadius: "16px",
        border: "1px solid var(--border-gold)",
        background: "var(--accent-gold-muted)",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "var(--accent-gold)",
          marginBottom: "12px",
        }}
      >
        ¿Estás bien protegido?
      </div>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--text)",
          lineHeight: 1.3,
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}
      >
        Descubre tu perfil de protección en 3 minutos
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "var(--muted)",
          lineHeight: 1.65,
          marginBottom: "20px",
        }}
      >
        Responde el diagnóstico y recibe una recomendación personalizada basada
        en tu situación real — sin presión y sin compromiso.
      </p>
      <Link
        href="/diagnostico"
        className="blog-cta-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 20px",
          borderRadius: "8px",
          background: "var(--accent-gold)",
          color: "#060C1A",
          fontSize: "14px",
          fontWeight: 700,
          textDecoration: "none",
          transition: "opacity 200ms",
        }}
      >
        Hacer el diagnóstico →
      </Link>
    </div>
    </>
  );
}
