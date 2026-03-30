import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KASSS | KNUST Astronomy and Space Science Society",
  description: "Discover, research, and innovate — KASSS is Ghana's premier astronomy and space science society at KNUST, where curiosity meets cosmic discovery.",
  keywords: ["KNUST", "Astrophysics", "Astronomy", "Space Science", "Ghana", "KASSS", "Physics", "Research"],
  openGraph: {
    title: "KASSS | KNUST Astronomy and Space Science Society",
    description: "Explore the universe with KNUST Astrophysics. Join Ghana's premier astronomy society.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#0a0a0f] text-[#f0f0f5]">
        {children}
      </body>
    </html>
  );
}
