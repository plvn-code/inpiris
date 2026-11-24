import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { Header, MobileBar } from "@/components/Chrome";
import { Effects } from "@/components/Effects";
import { site } from "@/lib/site";
import "./globals.css";

const display = Unbounded({ subsets: ["latin", "cyrillic"], weight: ["300", "400", "500", "600"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "IN PIRIS — перетяжка и реставрация мягкой мебели в Алматы", template: "%s — IN PIRIS" },
  description: site.description,
  openGraph: { type: "website", locale: "ru_KZ", siteName: "IN PIRIS", images: ["/img/w/ba-floral-after.webp"] },
  robots: process.env.NEXT_PUBLIC_SITE_LIVE === "1" ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#19191c" };

const ld = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "IN PIRIS",
  description: site.description,
  url: site.url,
  telephone: ["+77273275473", "+77051811819"],
  foundingDate: String(site.founded),
  address: { "@type": "PostalAddress", streetAddress: "ул. Черноморская, 12", addressLocality: "Алматы", postalCode: "050050", addressCountry: "KZ" },
  sameAs: [site.instagram, site.threads],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip">
          К содержанию
        </a>
        <Header />
        <main id="main">{children}</main>
        <MobileBar />
        <Effects />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
