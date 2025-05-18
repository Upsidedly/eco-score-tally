import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Score Tally | Eco Equilibrium",
  description: "Work of Upsided from Team Jamaica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
