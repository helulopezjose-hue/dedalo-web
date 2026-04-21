import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnóstico",
  description: "Solicita un diagnóstico gratuito de ciberseguridad para tu empresa.",
};

export default function DiagnosticoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-4">Diagnóstico de seguridad</h1>
      <p className="text-lg text-gray-600 mb-8">
        En una sesión inicial sin costo evalúo los riesgos más críticos de tu empresa y te entrego
        un informe con prioridades claras y pasos concretos.
      </p>

      <h2 className="text-xl font-semibold mb-4">¿Qué incluye?</h2>
      <ul className="space-y-3 mb-10 text-gray-700">
        {[
          "Revisión de superficie de ataque externa",
          "Evaluación de higiene de contraseñas y accesos",
          "Análisis de proveedores y cadena de suministro digital",
          "Cumplimiento básico LFPDPPP / ISO 27001",
          "Informe ejecutivo con roadmap de 90 días",
        ].map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/agenda"
        className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Agendar mi diagnóstico gratuito
      </Link>
    </div>
  );
}
