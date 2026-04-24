import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: "Vida" | "GMM" | "Auto" | "Hogar" | "Educación";
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  ogImage?: string;
  content: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  GMM: "var(--accent-blue)",
  Vida: "var(--accent-gold)",
  Auto: "#4CAF7D",
  Hogar: "#C084FC",
  Educación: "var(--muted)",
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        category: data.category as BlogPost["category"],
        categoryColor: CATEGORY_COLORS[data.category] ?? "var(--muted)",
        date: data.date as string,
        readTime: data.readTime as string,
        author: data.author as string,
        ogImage: data.ogImage as string | undefined,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    category: data.category as BlogPost["category"],
    categoryColor: CATEGORY_COLORS[data.category] ?? "var(--muted)",
    date: data.date as string,
    readTime: data.readTime as string,
    author: data.author as string,
    ogImage: data.ogImage as string | undefined,
    content,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
