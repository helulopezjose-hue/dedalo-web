import type { Metadata } from "next";
import DiagnosticoForm from "@/components/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Diagnóstico de Protección",
  description: "15 preguntas, resultado inmediato. Descubre tus brechas reales de protección en seguros de Vida, GMM, Auto y Hogar. Gratuito.",
  openGraph: {
    title: "Diagnóstico gratuito de seguros | DÉDALO",
    description: "15 preguntas. Resultado personalizado inmediato. Descubre qué cobertura necesitas realmente.",
    url: "https://dedaloproteccion.mx/diagnostico",
    type: "website",
  },
  alternates: { canonical: "https://dedaloproteccion.mx/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <>
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px 56px",
        textAlign: "center",
      }}>
        <div className="label-tag" style={{ marginBottom: "16px" }}>
          DIAGNÓSTICO DE PROTECCIÓN
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--text)",
          marginBottom: "16px",
        }}>
          Descubre dónde estás realmente.
        </h1>
        <p style={{
          fontSize: "17px",
          color: "var(--muted)",
          lineHeight: 1.7,
          maxWidth: "420px",
          margin: "0 auto",
        }}>
          15 preguntas. Resultado inmediato. Sin costo.
        </p>
      </section>

      <DiagnosticoForm />
    </>
  );
}
