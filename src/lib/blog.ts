import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  draft: boolean;
  content?: string;
}

const postsDir = path.join(process.cwd(), "public/content/blog");

export function getAllSlugs() {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPost[] {
  return getAllSlugs().map(slug => {
    const file = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
    const { data } = matter(file);
    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      author: data.author ?? "Team",
      category: data.category ?? "General",
      excerpt: data.excerpt ?? "",
      draft: data.draft ?? false,
    };
  }).filter(p => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    author: data.author ?? "Team",
    category: data.category ?? "General",
    excerpt: data.excerpt ?? "",
    draft: data.draft ?? false,
    content: processed.toString(),
  };
}
