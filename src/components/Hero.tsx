"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative" }}>
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(108,99,255,0.1)",
            border: "1px solid rgba(108,99,255,0.3)",
            borderRadius: "100px",
            padding: "0.3rem 1rem",
            fontSize: "0.8rem",
            color: "var(--clr-accent-light)",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--clr-accent)",
              display: "inline-block",
            }}
          />
          Now in Public Beta — Free to start
        </div>

        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            color: "var(--clr-text)",
          }}
        >
          Build products at the{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--clr-accent), var(--clr-highlight))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            speed of thought
          </span>
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            fontSize: "1.15rem",
            color: "var(--clr-muted)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Nexus gives your team the infrastructure, AI tools, and design system
          to go from idea to production in days — not months.
        </p>

        <div
          className="animate-fade-up delay-300"
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link
            href="#"
            style={{
              background: "var(--clr-accent)",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Start for free →
          </Link>
          <Link
            href="/blog"
            style={{
              border: "1px solid var(--clr-border)",
              color: "var(--clr-text)",
              padding: "0.8rem 2rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1rem",
              background: "var(--clr-surface)",
            }}
          >
            Read the blog
          </Link>
        </div>

        <p
          className="animate-fade-up delay-400"
          style={{ marginTop: "3rem", fontSize: "0.85rem", color: "var(--clr-muted)" }}
        >
          Trusted by <strong style={{ color: "var(--clr-text)" }}>5,000+</strong> teams worldwide
        </p>
      </div>
    </section>
  );
}