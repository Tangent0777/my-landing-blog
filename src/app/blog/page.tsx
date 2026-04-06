import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and news from the Nexus team.",
};

const CATEGORIES = ["All", "Technology", "Design", "Business", "Tutorial", "News"];

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const activeCategory = category ?? "All";
  const allPosts = getAllPosts(); // ✅ Fix 1: actually call getAllPosts()
  const filtered = activeCategory === "All" ? allPosts : allPosts.filter((p) => p.category === activeCategory); // ✅ Fix 2: allPosts now defined

  return (
    <div style={{ paddingTop: "80px" }}>
      <header style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 3rem", borderBottom: "1px solid var(--clr-border)" }}>
        <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--clr-accent)", marginBottom: "0.75rem" }}>
          Nexus Blog
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--clr-text)", marginBottom: "1rem" }}>
          Stories &amp; Insights
        </h1>
        <p style={{ color: "var(--clr-muted)", fontSize: "1.05rem", maxWidth: "500px" }}>
          Tutorials, product updates, and engineering deep-dives from our team.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "2rem" }}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "100px",
                fontSize: "0.85rem",
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid",
                borderColor: activeCategory === cat ? "var(--clr-accent)" : "var(--clr-border)",
                background: activeCategory === cat ? "rgba(108,99,255,0.15)" : "transparent",
                color: activeCategory === cat ? "var(--clr-accent-light)" : "var(--clr-muted)",
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "6rem 0", color: "var(--clr-muted)" }}>
            <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>✍️</p>
            <p>No posts in this category yet. Check back soon!</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} featured={i === 0 && activeCategory === "All"} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}