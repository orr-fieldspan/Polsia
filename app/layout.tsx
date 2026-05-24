import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://embedded.fieldspan.ai"),
  title: "Fieldspan Embedded — Modernize the state. From inside.",
  description:
    "Your AI transformation team, embedded inside the ministry. Senior squads. Paid against what ships. Code in your repo from day one.",
  openGraph: {
    title: "Fieldspan Embedded — Modernize the state. From inside.",
    description:
      "Your AI transformation team, embedded inside the ministry. Senior squads. Paid against what ships. Code in your repo from day one.",
    url: "https://embedded.fieldspan.ai",
    siteName: "Fieldspan Embedded",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fieldspan Embedded — Modernize the state. From inside.",
    description:
      "Your AI transformation team, embedded inside the ministry. Senior squads. Paid against what ships. Code in your repo from day one.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
