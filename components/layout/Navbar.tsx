"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/blog", label: "Blog" },
  { href: "/agenda", label: "Agenda" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Dédalo<span className="text-blue-600">Protección</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors hover:text-blue-600 ${
                  pathname === href ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/agenda"
          className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Agendar consulta
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === href ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/agenda"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg text-center"
          >
            Agendar consulta
          </Link>
        </div>
      )}
    </header>
  );
}
