import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CATEGORY_HEX: Record<string, string> = {
  GMM: "#2563EB",
  Vida: "#C9A84C",
  Auto: "#4CAF7D",
  Hogar: "#C084FC",
  Educación: "#8892A4",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "Artículo — DÉDALO";
  const category = post?.category ?? "Blog";
  const categoryColor = CATEGORY_HEX[category] ?? "#C9A84C";

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
            background: `linear-gradient(90deg, ${categoryColor}, #E8C97A, ${categoryColor})`,
            display: "flex",
          }}
        />

        {/* Category label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: categoryColor,
              display: "flex",
            }}
          >
            {category}
          </div>
          <div style={{ color: "#8892A4", fontSize: "12px", display: "flex" }}>
            · DÉDALO · Arquitectura de Protección
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? "38px" : "48px",
            fontWeight: 800,
            color: "#F0EDE8",
            lineHeight: 1.2,
            maxWidth: "960px",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#C9A84C", display: "flex" }}>
              José G. Helú
            </div>
            <div style={{ fontSize: "14px", color: "#8892A4", display: "flex" }}>
              dedaloproteccion.mx
            </div>
          </div>
          <div
            style={{
              padding: "10px 24px",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#C9A84C",
              display: "flex",
            }}
          >
            Leer artículo →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
