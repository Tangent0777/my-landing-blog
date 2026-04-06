"use client";
const features = [
  { icon: "⚡", title: "Blazing Fast", description: "Static generation with Next.js means sub-100ms page loads out of the box, globally." },
  { icon: "✍️", title: "Git-based CMS", description: "Decap CMS stores your blog posts as Markdown files in your repo — no database required." },
  { icon: "🎨", title: "Fully Customizable", description: "Every design token, layout, and component is yours to control. Zero lock-in." },
  { icon: "🔒", title: "Secure by Default", description: "No server-side databases or user auth attack surfaces. Just static files and CDN." },
  { icon: "🤖", title: "AI-ready", description: "Structured Markdown content is perfect for AI ingestion, RAG pipelines, and search." },
  { icon: "🌍", title: "Deploy Anywhere", description: "Ship to Vercel, Netlify, Cloudflare Pages, or any static host in a single push." },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--clr-accent)",
            marginBottom: "0.75rem",
          }}
        >
          What you get
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--clr-text)",
          }}
        >
          Everything you need, nothing you don&apos;t
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              background: "var(--clr-surface)",
              border: "1px solid var(--clr-border)",
              borderRadius: "16px",
              padding: "2rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(108,99,255,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--clr-border)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                background: "rgba(108,99,255,0.1)",
                borderRadius: "12px",
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--clr-text)",
                marginBottom: "0.5rem",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ color: "var(--clr-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}