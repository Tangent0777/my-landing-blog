"use client";
import Link from "next/link";
import { format } from "date-fns";
import type { BlogPost } from "../lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = format(new Date(post.date), "MMM d, yyyy");

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          background: "var(--clr-surface)",
          border: "1px solid var(--clr-border)",
          borderRadius: "16px",
          overflow: "hidden",
          height: "100%",
          transition: "border-color 0.25s, transform 0.25s",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.5)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--clr-border)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Cover image placeholder */}
        <div
          style={{
            height: featured ? "220px" : "160px",
            background: "linear-gradient(135deg, rgba(108,99,255,0.3) 0%, rgba(255,101,132,0.15) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
          }}
        >
          {post.category === "Tutorial" ? "📖" :
           post.category === "Design" ? "🎨" :
           post.category === "Business" ? "💼" :
           post.category === "News" ? "📰" : "💡"}
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--clr-accent-light)",
                background: "rgba(108,99,255,0.12)",
                padding: "0.2rem 0.6rem",
                borderRadius: "100px",
              }}
            >
              {post.category}
            </span>
            <span style={{ color: "var(--clr-muted)", fontSize: "0.8rem" }}>
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: featured ? "1.25rem" : "1.05rem",
              color: "var(--clr-text)",
              marginBottom: "0.6rem",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p style={{ color: "var(--clr-muted)", fontSize: "0.88rem", lineHeight: 1.65, flex: 1 }}>
            {post.excerpt}
          </p>

          {/* Footer */}
          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "0.8rem", color: "var(--clr-muted)" }}>
              By {post.author}
            </span>
            <span style={{ color: "var(--clr-accent-light)", fontSize: "0.85rem", fontWeight: 500 }}>
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}