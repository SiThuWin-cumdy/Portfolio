import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import MenuComponent from "@/components/Menu";
import AnalyticsHandler from "@/components/AnalyticsHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Si Thu Win", template: "%s | Si Thu Win" },
  description: "Si Thu Win — Software Developer. Portfolio and contact.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Si Thu Win – Software Developer",
    description: "Si Thu Win — Software Developer. Portfolio and contact.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Si Thu Win",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/images/logos/home-profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Si Thu Win profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Si Thu Win – Software Developer",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  // Optional Google Search Console verification token
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MenuComponent />

          {/* JSON-LD structured data for basic Organization/Person profile */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Si Thu Win",
                "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
                "jobTitle": "Software Developer",
                "sameAs": [],
              }),
            }}
          />

          {/* Cookie consent banner + analytics handler (loads GA only after consent) */}
          <AnalyticsHandler />

          <div className="min-h-screen pt-16 bg-gray-100">
            <div className="bg-slate-900 w-full">{children}</div>
          </div>
      </body>
    </html>
  );
}
