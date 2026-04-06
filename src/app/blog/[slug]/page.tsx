import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ✅ Fix: params is a Promise in Next.js 15 — must be awaited
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ Fix: await params before accessing slug
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  return (
    <div style={{ paddingTop: "80px" }}>
      <header style={{ background: "linear-gradient(180deg, rgba(108,99,255,0.07) 0%, transparent 100%)", borderBottom: "1px solid var(--clr-border)", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link href="/blog" style={{ color: "var(--clr-muted)", textDecoration: "none", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.3rem", marginBottom: "1.5rem" }}>
            ← Back to blog
          </Link>

          <div style={{ marginBottom: "1rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--clr-accent-light)", background: "rgba(108,99,255,0.12)", padding: "0.25rem 0.75rem", borderRadius: "100px" }}>
              {post!.category}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--clr-text)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            {post!.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", color: "var(--clr-muted)", fontSize: "0.875rem", flexWrap: "wrap" }}>
            <span>By <strong style={{ color: "var(--clr-text)" }}>{post!.author}</strong></span>
            <span style={{ opacity: 0.3 }}>·</span>
            <time dateTime={post!.date}>{formattedDate}</time>
          </div>
        </div>
      </header>

      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post!.content ?? "" }} />
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--clr-border)" }}>
          <Link href="/blog" style={{ color: "var(--clr-accent-light)", textDecoration: "none", fontWeight: 500, fontSize: "0.9rem" }}>
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}