import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/i18n/LangProvider";

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://jin-atlas.psyverse.fun"),
  title: "Jin Language Atlas | 晋语图谱",
  description:
    "An academic atlas of Jin Chinese (晋语): definition, distribution, phonology, dialect groups, the connection to ancient Zhao, and how Taihang and Lüliang geography preserved its features. Bilingual. 一份关于晋语的学术图谱：定义、分布、音系、方言片、与古赵国的关联，以及太行—吕梁地形如何保留其语言特征。中英双语。",
  keywords: [
    "Jin Chinese",
    "Jinyu",
    "晋语",
    "Chinese dialects",
    "entering tone",
    "入声",
    "Shanxi dialect",
    "Zhao state",
    "赵国",
    "Three Jins",
    "三晋",
    "Sinitic linguistics",
    "Chinese phonology",
    "Taihang",
    "太行",
    "Lüliang",
    "吕梁",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: "Jin Language Atlas — Jin Chinese, regional culture, and historical roots",
    description:
      "A bilingual atlas of Jin Chinese — definition, distribution, phonology, dialect map, the Zhao State connection, geography, opera, and a Jin-vs-Mandarin comparison engine.",
    url: "https://jin-atlas.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jin Language Atlas",
    description:
      "Jin Chinese (晋语) — a structured atlas of language, geography, and historical roots.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#14110b" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
