import type { Metadata } from "next";
import "./global.css";
import localFont from "next/font/local";

const kihim = localFont({
  src: "./fonts/Kihim-Regular.woff2",
  variable: "--kihim",
});

export const metadata: Metadata = {
  title: "Mira",
  description: "Your Answers, Simplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kihim.variable}`}>{children}</body>
    </html>
  );
}
