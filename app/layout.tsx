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
  title: "Fieldspan Embedded — Senior AI teams, embedded inside public institutions",
  description:
    "A small services firm. We send senior operators and engineers to work inside ministries, build the AI capability they need, and leave it owned by their teams.",
  openGraph: {
    title: "Fieldspan Embedded",
    description: "Senior AI teams, embedded inside the institutions that run a nation.",
    url: "https://embedded.fieldspan.ai",
    siteName: "Fieldspan Embedded",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fieldspan Embedded",
    description: "Senior AI teams, embedded inside the institutions that run a nation.",
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
