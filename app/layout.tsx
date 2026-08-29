import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const clashGrotesk = localFont({
  src: [
    { path: "../public/fonts/clash-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/clash-grotesk-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find Housing Help — Housing Preservation & Development",
  description:
    "Find affordable housing, report a complaint, learn about tenants' rights, and access NYC Department of Housing Preservation and Development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashGrotesk.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
