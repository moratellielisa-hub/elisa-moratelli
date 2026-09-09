import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | Richiedi una consulenza",
  description:
    "Contatta Elisa Moratelli, Consulente del Lavoro. Compila il modulo per richiedere una prima consulenza su buste paga, assunzioni e gestione del personale.",
  alternates: { canonical: "https://elisamoratelli.it/contatti" },
  openGraph: {
    url: "https://elisamoratelli.it/contatti",
    title: "Contatti | Richiedi una consulenza",
    description:
      "Contatta Elisa Moratelli per una consulenza su buste paga, assunzioni e gestione del personale per la tua azienda.",
  },
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: "https://elisamoratelli.it/contatti",
              name: "Contatti — Elisa Moratelli Consulente del Lavoro",
              mainEntity: { "@id": "https://elisamoratelli.it/#business" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://elisamoratelli.it" },
                { "@type": "ListItem", position: 2, name: "Contatti", item: "https://elisamoratelli.it/contatti" },
              ],
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
