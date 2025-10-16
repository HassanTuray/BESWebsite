import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BES",
  description: "Website for the Black Engineers Society at UMD",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(to_bottom,_#121212_0%,_#000000_100%)] text-white min-h-dvh`}>
        <header className="border-b border-white/10">
          <nav className="mx-auto flex max-w-5xl justify-center gap-6 py-4">
            <Link href="/about">About Us</Link>
            <Link href="/programs-events">Programs + Events</Link>
            <Link href="/sponsors">Corporate Sponsors</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/test">Hassan Test </Link>
          </nav>
        </header>
        <main style={{ padding: "1.5rem" }}>{children}</main>
      </body>
    </html>
  );
}
