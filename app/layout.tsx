import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inxora Studio — Clean & Modern Digital Websites",
  description:
    "Inxora helps businesses create modern, high-performing websites that not only look great — but actually convert and grow your brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="inxora">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
