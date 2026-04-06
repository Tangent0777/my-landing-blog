import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: { default: "Nexus — Modern SaaS Platform", template: "%s | Nexus" },
  description: "Nexus is a modern platform helping teams ship faster.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">{`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function(user) {
              if (!user) {
                window.netlifyIdentity.on("login", function() {
                  document.location.href = "/admin/";
                });
              }
            });
          }

          // Handle invite and recovery tokens — send them to /admin so Decap can process them
          if (window.location.hash && (
            window.location.hash.includes("invite_token") ||
            window.location.hash.includes("recovery_token") ||
            window.location.hash.includes("confirmation_token")
          )) {
            window.location.href = "/admin/" + window.location.hash;
          }
        `}</Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}