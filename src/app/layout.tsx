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
  title: "Natinael Ejeta | Resume",
  description: "Resume and portfolio of Natinael Ejeta.",
  authors: [{ name: "Natinael Ejeta" }],
  openGraph: {
    title: "Natinael Ejeta | Resume",
    description: "Resume and portfolio of Natinael Ejeta.",
    url: "https://natinaelejetaresume.vercel.app",
    siteName: "Natinael Ejeta",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Natinael Ejeta | Resume",
    description: "Resume and portfolio of Natinael Ejeta.",
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
