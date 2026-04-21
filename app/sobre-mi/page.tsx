import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Conoce quién está detrás de Dédalo Protección y mi enfoque en ciberseguridad.",
};

export default function SobreMiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-6">Sobre mí</h1>

      {/* Avatar placeholder */}
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-8 flex items-center justify-center text-gray-400 text-xs">
        Foto
      </div>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
        <p>
          Soy consultor independiente especializado en ciberseguridad y protección de datos para
          empresas en México. Mi trabajo es traducir conceptos técnicos complejos en acciones
          concretas que los equipos puedan implementar sin necesidad de un departamento de IT gigante.
        </p>
        <p>
          He acompañado a empresas de manufactura, servicios financieros y comercio electrónico en la
          construcción de sus programas de seguridad, desde el diagnóstico inicial hasta la
          certificación ISO 27001.
        </p>
        <p>
          Creo que la ciberseguridad efectiva no requiere tecnología cara: requiere claridad,
          procesos y cultura. Eso es lo que construimos juntos.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/agenda"
          className="inline-flex px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Agendar una llamada
        </Link>
      </div>
    </div>
  );
}
