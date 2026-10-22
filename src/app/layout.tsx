import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const description =
  "Full-stack software engineer in Cairo building real-time services, AI-powered apps and retrieval pipelines — currently at Ramses LLC and studying for an MSc in Web Science.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nour-awad.github.io"),
  title: "Nour Awad — Full-Stack Software Engineer",
  description,
  authors: [{ name: "Nour Awad", url: "https://github.com/nour-awad" }],
  openGraph: {
    type: "website",
    title: "Nour Awad — Full-Stack Software Engineer",
    description,
    url: "/portfolio/",
    siteName: "Nour Awad",
  },
  twitter: { card: "summary_large_image", title: "Nour Awad — Full-Stack Software Engineer", description },
};

export const viewport: Viewport = {
  themeColor: "#0d0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body className="min-h-dvh bg-ink text-fg antialiased">{children}</body>
    </html>
  );
}
