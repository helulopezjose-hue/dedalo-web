import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPost } from "@/lib/blog";
import BlogShareButtons from "@/components/blog/BlogShareButtons";
import BlogCTA from "@/components/blog/BlogCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://dedaloproteccion.mx/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.ogImage
        ? [{ url: post.ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const postUrl = `https://dedaloproteccion.mx/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://dedaloproteccion.mx/sobre-mi",
    },
    publisher: {
      "@type": "Organization",
      name: "DÉDALO · Arquitectura de Protección",
      url: "https://dedaloproteccion.mx",
    },
    datePublished: post.date,
    url: postUrl,
    ...(post.ogImage && { image: post.ogImage }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article-container">
        {/* Header */}
        <header style={{ marginBottom: "48px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: post.categoryColor,
              marginBottom: "16px",
            }}
          >
            {post.category}
          </span>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              lineHeight: 1.65,
              marginBottom: "24px",
            }}
          >
            {post.description}
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              padding: "14px 0",
            }}
          >
            <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 600 }}>
              {post.author}
            </span>
            <span style={{ color: "var(--border)", fontSize: "12px" }}>·</span>
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>
              {new Date(post.date).toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span style={{ color: "var(--border)", fontSize: "12px" }}>·</span>
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>
              {post.readTime} de lectura
            </span>
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose-dedalo">
          <MDXRemote source={post.content} />
        </div>

        {/* Social share */}
        <BlogShareButtons url={postUrl} title={post.title} />

        {/* CTA diagnóstico */}
        <BlogCTA />
      </article>
    </>
  );
}
