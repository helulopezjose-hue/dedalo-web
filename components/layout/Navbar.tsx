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
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)",
    }}>
      <nav style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: "6px", textDecoration: "none" }}>
          <span style={{ fontWeight: 800, fontSize: "17px", color: "var(--accent-gold)", letterSpacing: "-0.01em" }}>
            DÉDALO
          </span>
          <span style={{ fontWeight: 400, fontSize: "11px", color: "var(--muted)", letterSpacing: "0.5px" }}>
            · Arquitectura de Protección
          </span>
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: "32px", listStyle: "none", alignItems: "center" }}>
          {links.map(({ href, label }) => (
            <li key={href} style={{ display: "none" }} className="desktop-nav-item">
              <Link
                href={href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: pathname === href ? "var(--accent-gold)" : "var(--muted)",
                  transition: "color 200ms",
                  textDecoration: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? "var(--accent-gold)" : "var(--muted)")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="desktop-links" style={{ display: "flex", gap: "32px" }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: pathname === href ? "var(--accent-gold)" : "var(--muted)",
                  transition: "color 200ms",
                  textDecoration: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? "var(--accent-gold)" : "var(--muted)")}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/agenda"
            className="desktop-cta"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--accent-gold)",
              border: "1px solid var(--border-gold)",
              borderRadius: "8px",
              padding: "8px 18px",
              transition: "all 200ms",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--accent-gold-muted)";
              e.currentTarget.style.borderColor = "var(--accent-gold)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border-gold)";
            }}
          >
            Agendar consulta
          </Link>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "2px",
                  background: "var(--muted)",
                  borderRadius: "2px",
                  transition: "all 200ms",
                  transform: open && i === 0 ? "rotate(45deg) translateY(7px)" : open && i === 2 ? "rotate(-45deg) translateY(-7px)" : open && i === 1 ? "opacity: 0" : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="mobile-menu"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: pathname === href ? "var(--accent-gold)" : "var(--muted)",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/agenda"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              marginTop: "16px",
              padding: "12px 0",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--accent-gold)",
              textAlign: "center",
              border: "1px solid var(--border-gold)",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Agendar consulta
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
