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
  title: "Kling AI | Cinematic Video Intelligence",
  description:
    "Kling AI blends generative video, instant dubbing, and AI-native editing tools so creators can go from idea to cinematic output in seconds.",
  openGraph: {
    title: "Kling AI | Cinematic Video Intelligence",
    description:
      "A creative operating system for teams shipping cinematic stories at the speed of thought.",
    url: "https://agentic-8bccb2d0.vercel.app",
    siteName: "Kling AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kling AI hero preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kling AI | Cinematic Video Intelligence",
    description:
      "From storyboard to localized delivery in one AI-native timeline.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
