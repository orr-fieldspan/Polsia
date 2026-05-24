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
  title: "Fieldspan Embedded — Sovereign AI for the institutions that run a nation",
  description:
    "Fieldspan Embedded deploys AI inside ministries, treasuries, and central agencies — on your infrastructure, under your control, accountable to your auditors.",
  openGraph: {
    title: "Fieldspan Embedded",
    description:
      "Sovereign AI for the institutions that run a nation. Deployed inside your perimeter. Governed by your policy.",
    url: "https://embedded.fieldspan.ai",
    siteName: "Fieldspan Embedded",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fieldspan Embedded",
    description: "Sovereign AI for the institutions that run a nation.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="grain min-h-screen bg-ink text-white font-sans">
        {children}
      </body>
    </html>
  );
}
