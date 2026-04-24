import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevents MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controls referrer info sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restricts browser features
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires 'unsafe-inline' for CSS-in-JS; GTM/GA scripts
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://app.cal.com",
      // Inline styles used throughout the app
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images from self, data URIs, blobs, and any HTTPS source (for og:image)
      "img-src 'self' data: blob: https:",
      // API connections: Make webhooks and GA
      "connect-src 'self' https://hook.us1.make.com https://hook.eu1.make.com https://www.google-analytics.com https://analytics.google.com",
      // Cal.com and Calendly embeds
      "frame-src https://app.cal.com https://calendly.com",
      // next/og uses workers internally
      "worker-src 'self' blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
