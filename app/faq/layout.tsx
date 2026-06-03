import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Domande frequenti sulla consulenza del lavoro",
  description:
    "Risposte alle domande più comuni: cosa fa un consulente del lavoro, come funzionano le buste paga, assunzioni, cessazioni, adempimenti INPS e INAIL.",
  alternates: { canonical: "https://elisamoratelli.it/faq" },
  openGraph: {
    url: "https://elisamoratelli.it/faq",
    title: "FAQ | Domande frequenti sulla consulenza del lavoro",
    description:
      "Risposte chiare su buste paga, assunzioni, cessazioni, adempimenti e consulenza del lavoro per aziende e PMI.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://elisamoratelli.it" },
              { "@type": "ListItem", position: 2, name: "FAQ", item: "https://elisamoratelli.it/faq" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
