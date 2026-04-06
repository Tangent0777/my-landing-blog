import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <Features />

      {latestPosts.length > 0 && (
        <section style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--clr-accent)", marginBottom: "0.5rem" }}>
                From the blog
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--clr-text)" }}>
                Latest articles
              </h2>
            </div>
            <Link href="/blog" style={{ color: "var(--clr-accent-light)", textDecoration: "none", fontWeight: 500, fontSize: "0.9rem" }}>
              View all posts →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {latestPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} featured={i === 0} />
            ))}
          </div>
        </section>
      )}

      <section style={{ padding: "4rem 1.5rem 8rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.08))", border: "1px solid rgba(108,99,255,0.25)", borderRadius: "24px", padding: "4rem 3rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--clr-text)", marginBottom: "1rem" }}>
            Ready to ship faster?
          </h2>
          <p style={{ color: "var(--clr-muted)", marginBottom: "2rem", fontSize: "1.05rem" }}>
            Join 5,000+ teams already building with Nexus.
          </p>
          <Link href="#" style={{ background: "var(--clr-accent)", color: "#fff", padding: "0.85rem 2.5rem", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
            Get started for free →
          </Link>
        </div>
      </section>
    </>
  );
}