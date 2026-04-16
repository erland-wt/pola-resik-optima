import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pola Resik Optima",
  description: "Pola Resik Optima adalah perusahaan yang bergerak di bidang jasa kebersihan dan sanitasi, menyediakan solusi inovatif untuk menjaga kebersihan dan kesehatan lingkungan Anda.",
  icons: {
    icon: [{ url: "/images/Pola Resik Optima Transparant.png", type: "image/png" }],
    shortcut: ["/images/Pola Resik Optima Transparant.png"],
    apple: [{ url: "/images/Pola Resik Optima Transparant.png" }],
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
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
