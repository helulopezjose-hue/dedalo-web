import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Consultoría en ciberseguridad y protección de datos para empresas mexicanas.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Protege tu empresa con una{" "}
          <span className="text-blue-600">estrategia de ciberseguridad real</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Ayudo a empresas mexicanas a identificar sus riesgos digitales, cumplir con la normativa y
          construir una cultura de seguridad duradera.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/diagnostico"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Solicitar diagnóstico gratuito
          </Link>
          <Link
            href="/sobre-mi"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors"
          >
            Conocer más
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿En qué puedo ayudarte?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Diagnóstico de seguridad",
                desc: "Evalúo el estado actual de tu empresa y te entrego un plan de acción priorizado.",
                href: "/diagnostico",
              },
              {
                title: "Consultoría estratégica",
                desc: "Defino junto a tu equipo las políticas, controles y procesos necesarios.",
                href: "/agenda",
              },
              {
                title: "Formación y concienciación",
                desc: "Talleres prácticos para que tu equipo identifique y evite amenazas.",
                href: "/agenda",
              },
            ].map(({ title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
