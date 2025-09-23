import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Personal Website`,
    template: `%s | ${site.name}`,
  },
  description: site.bio,
  keywords: [
    site.name,
    "portfolio",
    "software",
    "engineering",
    "web",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: site.name }],
  metadataBase: typeof window === "undefined" && site.url ? new URL(site.url) : undefined,
  openGraph: {
    title: `${site.name} | Personal Website`,
    description: site.bio,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Personal Website`,
    description: site.bio,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
