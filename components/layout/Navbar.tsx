"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/blog", label: "Blog" },
  { href: "/agenda", label: "Agenda" },
  { href: "/sobre-mi", label: "Sobre mí" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-header">
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .navbar-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo { display: flex; align-items: baseline; gap: 6px; text-decoration: none; }
        .nav-logo-brand { font-weight: 800; font-size: 17px; color: var(--accent-gold); letter-spacing: -0.01em; }
        .nav-logo-sub { font-weight: 400; font-size: 11px; color: var(--muted); letter-spacing: 0.5px; }
        .nav-links { display: flex; gap: 32px; align-items: center; }
        .nav-link { font-size: 14px; font-weight: 500; color: var(--muted); transition: color 200ms; text-decoration: none; }
        .nav-link:hover, .nav-link.active { color: var(--accent-gold); }
        .nav-cta {
          font-size: 13px;
          font-weight: 600;
          color: var(--accent-gold);
          border: 1px solid var(--border-gold);
          border-radius: 8px;
          padding: 8px 18px;
          transition: background 200ms, border-color 200ms;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-cta:hover { background: var(--accent-gold-muted); border-color: var(--accent-gold); }
        .hamburger {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .hamburger-bar {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--muted);
          border-radius: 2px;
          transition: transform 200ms, opacity 200ms;
        }
        .mobile-menu {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 16px 24px 24px;
        }
        .mobile-link {
          display: block;
          padding: 12px 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--muted);
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          transition: color 200ms;
        }
        .mobile-link.active { color: var(--accent-gold); }
        .mobile-link:hover { color: var(--text); }
        .mobile-cta {
          display: block;
          margin-top: 16px;
          padding: 12px 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-gold);
          text-align: center;
          border: 1px solid var(--border-gold);
          border-radius: 8px;
          text-decoration: none;
          transition: background 200ms;
        }
        .mobile-cta:hover { background: var(--accent-gold-muted); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <nav className="navbar-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-brand">DÉDALO</span>
          <span className="nav-logo-sub">· Arquitectura de Protección</span>
        </Link>

        <div className="nav-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href || (href !== "/" && pathname.startsWith(href)) ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/agenda" className="nav-cta">
            Agendar consulta
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span
            className="hamburger-bar"
            style={{
              transform: open ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="hamburger-bar"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="hamburger-bar"
            style={{
              transform: open ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`mobile-link${pathname === href || (href !== "/" && pathname.startsWith(href)) ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/agenda" onClick={() => setOpen(false)} className="mobile-cta">
            Agendar consulta
          </Link>
        </div>
      )}
    </header>
  );
}
