import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { VENUE } from "@/lib/venue";

const displayFont = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kgg.lounge";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${VENUE.name} — ${VENUE.tagline} | Gaming Lounge in Tirupati`,
    template: `%s · ${VENUE.shortName}`,
  },
  description:
    "Don't be bored, get on-board! Premium walk-in gaming lounge in Tirupati — PS5, Xbox, Nintendo Switch, racing rigs, Meta Quest VR & board games. Reserve your session tonight.",
  keywords: [
    "gaming lounge Tirupati",
    "PS5 Tirupati",
    "VR gaming Tirupati",
    "Karthikeya Games Galaxy",
    "KGG",
    "book gaming session",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: VENUE.name,
    title: `${VENUE.name} — ${VENUE.tagline}`,
    description:
      "Premium walk-in gaming lounge in Tirupati. PS5, Xbox, Switch, racing, VR — reserve a seat tonight.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${VENUE.name} — ${VENUE.tagline}`,
    description:
      "Walk-in gaming lounge in Tirupati. Reserve PS5, Xbox, Switch, racing & VR sessions tonight.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={displayFont.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={
          {
            ["--font-body" as string]: "'General Sans', system-ui, sans-serif",
          } as React.CSSProperties
        }
      >
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
