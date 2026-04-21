import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dishank Srivastava | Product Manager",
  description:
    "Product Manager with 10+ years in B2B SaaS, IoT platforms, connected vehicle ecosystems, and eSIM/telecom connectivity.",
  keywords: [
    "Product Manager",
    "IoT",
    "B2B SaaS",
    "Connected Vehicles",
    "eSIM",
    "Telecom",
    "Dishank Srivastava",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
