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
  return <>{children}</>;
}
