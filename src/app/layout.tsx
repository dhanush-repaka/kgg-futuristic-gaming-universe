import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import FuturisticCursor from "@/components/FuturisticCursor";
import Script from "next/script";

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karthikeya's Games Galaxy - Don't be bored, get on-board! | Premium Gaming Lounge in Tirupati",
  description: "Don't be bored, get on-board! Experience next-gen gaming with PS5, Xbox Series X, Meta Quest VR, Nintendo Switch, racing setups, and board games. VR Cricket Turf now available in Tirupati - book your session today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="antialiased">
        <FuturisticCursor />
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