import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DÉDALO · Arquitectura de Protección";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060C1A",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C)",
            display: "flex",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#8892A4",
            display: "flex",
          }}
        >
          ASESORÍA DE SEGUROS · CÉDULA A
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#C9A84C",
                letterSpacing: "-2px",
                display: "flex",
              }}
            >
              DÉDALO
            </span>
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#8892A4",
              letterSpacing: "2px",
              display: "flex",
            }}
          >
            · Arquitectura de Protección
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#F0EDE8",
              lineHeight: 1.4,
              maxWidth: "720px",
              marginTop: "8px",
              display: "flex",
            }}
          >
            Asesoría de seguros personalizada en Vida, GMM, Auto y Hogar.
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "16px", color: "#8892A4", display: "flex" }}>
            dedaloproteccion.mx
          </div>
          <div
            style={{
              padding: "10px 24px",
              background: "#C9A84C",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 700,
              color: "#060C1A",
              display: "flex",
            }}
          >
            Consulta gratuita
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
