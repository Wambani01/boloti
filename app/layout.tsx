import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { BookingBar } from "@/components/BookingBar";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/ui";
import { images } from "@/lib/images";
import { resortSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "Boloti Camp Resort | Luxury Eco-Lodge at the Foothills of Mt. Kilimanjaro";
const description =
  "Luxury Kilimanjaro lodge and tented camp in Masama near Sanya Juu, Tanzania, around 20 minutes from Kilimanjaro Airport (JRO). Stay before your climb or safari near Machame Gate and Kikuletwa Hot Springs. Rated 4.9 by guests.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Boloti Camp Resort" },
  description,
  applicationName: site.name,
  keywords: [
    "Kilimanjaro luxury lodge",
    "tented camp Kilimanjaro",
    "glamping Kilimanjaro",
    "hotel near Machame Gate",
    "where to stay before climbing Kilimanjaro",
    "hotel near Kilimanjaro Airport",
    "Siha Tanzania resort",
    "Kikuletwa Hot Springs stay",
    "Moshi lodge",
    "weekend getaway Arusha",
    "weekend getaway Moshi",
    "Nairobi to Moshi by road",
    "hoteli nzuri Moshi",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [{ url: images.aerial.src, width: images.aerial.w, height: images.aerial.h, alt: images.aerial.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.aerial.src],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  formatDetection: { telephone: false },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#16291f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-svh overflow-x-clip">
        <JsonLd data={resortSchema()} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sand-50 focus:px-5 focus:py-3">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BookingBar />
        <RevealObserver />
      </body>
    </html>
  );
}
