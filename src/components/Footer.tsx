"use client"; 
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--clr-border)", padding: "3rem 1.5rem", marginTop: "4rem" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "var(--clr-text)", marginBottom: "0.5rem" }}>
            <span style={{ color: "var(--clr-accent)" }}>Nexus</span>
          </p>
          <p style={{ color: "var(--clr-muted)", fontSize: "0.85rem", maxWidth: "240px" }}>
            Modern platform for teams who ship fast.
          </p>
        </div>

        <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { heading: "Product", links: ["Features", "Pricing", "Changelog"] },
            { heading: "Company", links: ["About", "Blog", "Careers"] },
            { heading: "Legal", links: ["Privacy", "Terms"] },
          ].map((col) => (
            <div key={col.heading}>
              <p style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--clr-text)", marginBottom: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      href={label === "Blog" ? "/blog" : "#"}
                      style={{ color: "var(--clr-muted)", textDecoration: "none", fontSize: "0.875rem" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--clr-border)",
          textAlign: "center",
          color: "var(--clr-muted)",
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} Nexus Inc. — Built with Next.js &amp; Decap CMS
      </div>
    </footer>
  );
}