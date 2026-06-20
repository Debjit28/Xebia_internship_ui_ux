import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected",
  description: "High-end, Apple-level scrollytelling landing page for Sony WH-1000XM6.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-primary text-white antialiased`}>
      <body className="min-h-full flex flex-col bg-primary overscroll-none overflow-x-hidden selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
