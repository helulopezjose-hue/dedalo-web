import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Dédalo Protección · dedaloproteccion.mx</p>
        <nav className="flex gap-6">
          <Link href="/diagnostico" className="hover:text-gray-900 transition-colors">Diagnóstico</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          <Link href="/agenda" className="hover:text-gray-900 transition-colors">Agenda</Link>
          <Link href="/sobre-mi" className="hover:text-gray-900 transition-colors">Sobre mí</Link>
        </nav>
      </div>
    </footer>
  );
}
