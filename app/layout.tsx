import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[linear-gradient(to_bottom,_#121212_0%,_#000000_100%)] text-white min-h-dvh`}
      >
        {/* 🌐 Floating Navbar */}
        <header
          className="
            fixed top-0 left-0 w-full z-50
            bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg
          "
        >
          <nav className="mx-auto flex max-w-5xl justify-center gap-8 py-4 px-6 text-sm sm:text-base font-medium">
            <a href="#hero" className="text-white/70 hover:text-white transition">Home</a>
            <a href="#aboutUs" className="text-white/70 hover:text-white transition">About Us</a>
            <a href="#programsAndEvents" className="text-white/70 hover:text-white transition">Programs + Events</a>
            <a href="#sponsors" className="text-white/70 hover:text-white transition">Corporate Sponsors</a>
            <a href="#contactUs" className="text-white/70 hover:text-white transition">Contact Us</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-[100px] scroll-smooth relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
