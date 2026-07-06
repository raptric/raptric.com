import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/nav/nav";
import Footer from "@/components/nav/footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raptric | AI Automation, Support Operations & Engineering Teams",
    template: "%s | Raptric",
  },
  description:
    "Raptric builds operating systems for business workflows - AI automation, support operations, and embedded engineering capacity combined.",
  openGraph: {
    siteName: "Raptric",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Raptric",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist-100 text-ink-900">
        <OrganizationSchema />
        <WebSiteSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </html>
  );
}
