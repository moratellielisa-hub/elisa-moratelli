import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elisamoratelli.it"),
  title: {
    default: "Elisa Moratelli | Consulente del Lavoro",
    template: "%s | Elisa Moratelli",
  },
  description:
    "Elisa Moratelli, Consulente del Lavoro iscritta all'Albo. Elaborazione buste paga, assunzioni, trasformazioni contrattuali, adempimenti INPS e INAIL per aziende e PMI.",
  keywords: [
    "consulente del lavoro",
    "elaborazione cedolini paga",
    "buste paga aziende",
    "assunzioni dipendenti",
    "gestione personale PMI",
    "adempimenti INPS INAIL",
    "trasformazioni contrattuali",
    "CDL Group",
    "Elisa Moratelli",
  ],
  authors: [{ name: "Elisa Moratelli", url: "https://elisamoratelli.it/chi-sono" }],
  creator: "Elisa Moratelli",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://elisamoratelli.it" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://elisamoratelli.it",
    siteName: "Elisa Moratelli Consulente del Lavoro",
    title: "Elisa Moratelli | Consulente del Lavoro",
    description:
      "Buste paga, assunzioni e gestione del personale per aziende e PMI. Consulente del Lavoro iscritta all'Albo, presso CDL Group.",
    images: [{ url: "/elisa-foto.jpeg", width: 800, height: 1000, alt: "Elisa Moratelli Consulente del Lavoro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elisa Moratelli | Consulente del Lavoro",
    description: "Buste paga, assunzioni e gestione del personale per aziende e PMI.",
    images: ["/elisa-foto.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
