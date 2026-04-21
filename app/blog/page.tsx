import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre ciberseguridad, privacidad y protección de datos para empresas.",
};

const posts = [
  {
    slug: "phishing-pymes-mexico",
    title: "Por qué el phishing sigue siendo el ataque #1 en pymes mexicanas",
    date: "2025-04-10",
    excerpt: "Analizamos los vectores más comunes y qué medidas simples reducen el riesgo en más del 80%.",
  },
  {
    slug: "lfpdppp-obligaciones-2025",
    title: "Obligaciones LFPDPPP que tu empresa debe cumplir en 2025",
    date: "2025-03-22",
    excerpt: "Guía práctica sobre aviso de privacidad, transferencia de datos y derechos ARCO.",
  },
  {
    slug: "contrasenas-politica-empresas",
    title: "Cómo diseñar una política de contraseñas que realmente funcione",
    date: "2025-03-05",
    excerpt: "Las reglas de complejidad ya no son suficientes. Te explico qué cambiar y por qué.",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-12">
        Artículos prácticos sobre ciberseguridad y protección de datos para equipos no técnicos.
      </p>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-10">
            <time className="text-sm text-gray-400">{post.date}</time>
            <h2 className="text-xl font-semibold mt-1 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
