import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda una consulta",
  description: "Reserva una sesión de consultoría o diagnóstico de ciberseguridad.",
};

export default function AgendaPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-4">Agenda una sesión</h1>
      <p className="text-lg text-gray-600 mb-10">
        Elige el tipo de sesión que necesitas y reserva directamente en mi calendario.
        La primera consulta de diagnóstico es sin costo.
      </p>

      {/* Placeholder para integración de calendario (Cal.com / Calendly) */}
      <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center text-gray-400">
        <p className="text-sm font-medium">Calendario de reservas</p>
        <p className="text-xs mt-1">Aquí se integrará Cal.com o Calendly</p>
      </div>

      <div className="mt-10 p-6 bg-blue-50 rounded-xl">
        <p className="text-sm text-blue-800">
          ¿Prefieres escribirme directamente?{" "}
          <a
            href="mailto:hola@dedaloproteccion.mx"
            className="font-semibold underline hover:no-underline"
          >
            hola@dedaloproteccion.mx
          </a>
        </p>
      </div>
    </div>
  );
}
