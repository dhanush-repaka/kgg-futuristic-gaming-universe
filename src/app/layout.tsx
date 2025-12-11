import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import FuturisticCursor from "@/components/FuturisticCursor";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Karthikeya's Games Galaxy - Don't be bore, get on-board! | Premium Gaming Lounge in Tirupati",
  description: "Don't be bore, get on-board! Experience next-gen gaming with PS5, Xbox Series X, Meta Quest VR, Nintendo Switch, racing setups, and board games. VR Cricket Turf coming soon in Tirupati.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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