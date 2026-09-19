import "./globals.css";
import SvgSprite from "@/components/SvgSprite";
import AppearScripts from "@/components/runtime/AppearScripts";
import SiteRuntime from "@/components/runtime/SiteRuntime";

export const metadata = {
  metadataBase: new URL("https://spartanai.com"),
  title: "Spartan AI — High-Performance Neural Engineering & AI Systems",
  description: "Deploy custom neural agents, LLMs, and automation in one seamless flow. Trusted by leading tech firms and enterprise teams.",
  icons: {
    icon: [
      { url: "/assets/images/d6IuUgB4OOUort0AccMgzEPUGw.png", media: "(prefers-color-scheme: light)" },
      { url: "/assets/images/31fOyKvwCm72RWXbx38uLHt044.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/assets/images/31fOyKvwCm72RWXbx38uLHt044.png",
  },
  openGraph: {
    type: "website",
    title: "Spartan AI — High-Performance Neural Engineering & AI Systems",
    description: "Deploy custom neural agents, LLMs, and automation in one seamless flow. Trusted by leading tech firms and enterprise teams.",
    images: ["/assets/images/aQuDXStjde8ohj6sdct19nDjyMY.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spartan AI — High-Performance Neural Engineering & AI Systems",
    description: "Deploy custom neural agents, LLMs, and automation in one seamless flow. Trusted by leading tech firms and enterprise teams.",
    images: ["/assets/images/aQuDXStjde8ohj6sdct19nDjyMY.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="stylesheet" href="/site.css" />
      </head>
      <body>
        {children}
        <SvgSprite />
        <AppearScripts />
        <SiteRuntime />
      </body>
    </html>
  );
}
