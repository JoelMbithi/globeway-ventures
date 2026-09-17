import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLOBWAY VENTURES | Exhibitions & Events",
  description:
    "Professional exhibition and event management connecting global brands with opportunities in Kenya and East Africa.",

  // 🔽 THIS IS THE KEY PART — replaces the Next.js logo everywhere
  icons: {
    icon: "/globeway-logo.png",
    shortcut: "/globeway-logo.png",
    apple: "/globeway-logo.png",
  },

  // Social share preview (WhatsApp, LinkedIn, Twitter, Facebook, etc.)
  openGraph: {
    title: "GLOBWAY VENTURES",
    description:
      "Exhibitions, Events & Brand Visibility across Kenya and East Africa",
    images: ["/globeway-logo.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GLOBWAY VENTURES",
    description:
      "Exhibitions, Events & Brand Visibility across Kenya and East Africa",
    images: ["/globeway-logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}