import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polaresikoptima.com"),
  title: {
    default: "Pola Resik Optima",
    template: "%s | Pola Resik Optima",
  },
  description:
    "Pola Resik Optima adalah perusahaan jasa kebersihan dan sanitasi profesional untuk cleaning service, outsourcing, landscape, dan pest control di Indonesia.",
  keywords: [
    "Pola Resik Optima",
    "jasa cleaning service",
    "outsourcing cleaning service",
    "pest control",
    "landscape service",
    "jasa kebersihan",
    "sanitasi profesional",
    "cleaning service Tangerang",
  ],
  authors: [{ name: "Pola Resik Optima" }],
  creator: "Pola Resik Optima",
  publisher: "Pola Resik Optima",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pola Resik Optima",
    description:
      "Jasa cleaning service, outsourcing, landscape, dan pest control profesional di Indonesia.",
    url: "/",
    siteName: "Pola Resik Optima",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/bg-PRO-3.jpg",
        width: 1200,
        height: 630,
        alt: "Pola Resik Optima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pola Resik Optima",
    description:
      "Jasa cleaning service, outsourcing, landscape, dan pest control profesional di Indonesia.",
    images: ["/images/bg-PRO-3.jpg"],
  },
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
      lang="id"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
