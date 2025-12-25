import "./globals.css";
import { Barlow_Semi_Condensed } from "next/font/google";
import type { Metadata } from "next";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Testimonials Grid Section",
  description:
    "A responsive testimonials grid section showcasing verified graduate reviews from a coding bootcamp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${barlow.variable} font-barlow`}>{children}</body>
    </html>
  );
}
