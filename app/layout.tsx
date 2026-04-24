import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "DÉDALO · Arquitectura de Protección",
    template: "%s | DÉDALO",
  },
  description:
    "Asesoría de seguros con Cédula A. Diseño estructuras de protección personalizadas en Vida, Gastos Médicos, Auto y Hogar.",
  metadataBase: new URL("https://dedaloproteccion.mx"),
  openGraph: {
    siteName: "DÉDALO · Arquitectura de Protección",
    locale: "es_MX",
    type: "website",
    url: "https://dedaloproteccion.mx",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dedaloproteccion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
