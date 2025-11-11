import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASCENDVERSE - Digital Solutions",
  description: "Modern Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["ASCENDVERSE", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
  authors: [{ name: "ASCENDVERSE Team" }],
  openGraph: {
    title: "ASCENDVERSE",
    description: "Modern digital solutions with cutting-edge technology stack",
    url: "https://ascendverse.com",
    siteName: "ASCENDVERSE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCENDVERSE",
    description: "Modern digital solutions with cutting-edge technology stack",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}