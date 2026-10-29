import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.seo.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  alternates: {
    canonical: siteConfig.seo.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased dark"
    >
      <body className="min-h-screen bg-[#0A0A0B] text-[#EDEDED] font-sans selection:bg-[#FF6363]/30 selection:text-white relative">
        {/* Subtle noise grain texture overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 bg-noise opacity-30"
          aria-hidden="true"
        />
        
        {/* Ambient background glow effects */}
        <div
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#FF6363]/10 via-[#FF6363]/[0.02] to-transparent blur-[120px] -z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none fixed -bottom-40 right-[-10%] w-[600px] h-[600px] bg-[#FF4545]/[0.05] blur-[150px] -z-10"
          aria-hidden="true"
        />

        {children}
      </body>
    </html>
  );
}
