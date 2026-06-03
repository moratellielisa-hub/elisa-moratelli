import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Users,
  RefreshCw,
  UserMinus,
  ClipboardList,
  AlertCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedLines from "@/components/AnimatedLines";

export const metadata: Metadata = {
  title: "Servizi | Buste Paga, Assunzioni, Adempimenti HR",
  description:
    "Elaborazione cedolini paga, gestione assunzioni, trasformazioni contrattuali, adempimenti INPS e INAIL, dichiarativi annui e consulenza del lavoro per aziende e PMI.",
  alternates: { canonical: "https://elisamoratelli.it/servizi" },
  openGraph: {
    url: "https://elisamoratelli.it/servizi",
    title: "Servizi | Buste Paga, Assunzioni, Adempimenti HR",
    description:
      "Tutti i servizi di Elisa Moratelli: buste paga mensili, assunzioni, trasformazioni contrattuali, adempimenti e consulenza continuativa per aziende e PMI.",
  },
};

const servizi = [
  {
    icon: AlertCircle,
    title: "Consulenza del lavoro",
    tagline: "Un riferimento nelle decisioni quotidiane.",
    description:
      "Supporto nella gestione dei rapporti di lavoro, interpretazione normativa, contratti, CCNL, adempimenti e scelte operative.",
    href: "/servizi/consulenza-del-lavoro",
  },
  {
    icon: FileText,
    title: "Elaborazione cedolini paga",
    tagline: "Precisi, puntuali, ogni mese.",
    description:
      "Gestione mensile di buste paga, contributi INPS, trattenute IRPEF, pagamento F24, ferie, malattie, maternità e infortuni.",
    href: "/servizi/elaborazione-cedolini-paga",
  },
  {
    icon: BookOpen,
    title: "Dichiarativi annui",
    tagline: "Nessuna scadenza annuale dimenticata.",
    description:
      "Certificazione Unica (CU), Modello 770, 730/4, autoliquidazione INAIL e adempimenti annuali del datore di lavoro.",
    href: "/servizi/dichiarativi-annui",
  },
  {
    icon: ClipboardList,
    title: "Pratiche HR e assunzioni",
    tagline: "Dalla prima assunzione alla gestione corrente.",
    description:
      "Comunicazioni obbligatorie, scelta del CCNL, inquadramento, lettera di assunzione, verifica agevolazioni, contratti, documenti del personale, variazioni amministrative e archivio.",
    href: "/servizi/pratiche-hr",
  },
  {
    icon: RefreshCw,
    title: "Trasformazioni contrattuali",
    tagline: "Ogni cambiamento documentato e comunicato.",
    description:
      "Da tempo determinato a indeterminato, variazioni orarie, cambi di mansione e aggiornamenti amministrativi.",
    href: "/servizi/trasformazioni-contrattuali",
  },
  {
    icon: UserMinus,
    title: "Cessazioni del rapporto di lavoro",
    tagline: "Ogni chiusura gestita con precisione.",
    description:
      "Dimissioni, scadenza del termine, accordi consensuali: documentazione, comunicazioni agli enti, liquidazione TFR e ultima busta paga.",
    href: "/servizi/cessazioni-rapporto-di-lavoro",
  },
  {
    icon: FileText,
    title: "Consulenza buste paga",
    tagline: "Capire davvero quanto costa il personale.",
    description:
      "Analisi e verifica dei cedolini, costo del lavoro, voci retributive, contributi e agevolazioni disponibili.",
    href: "/servizi/consulenza-buste-paga",
  },
];

export default function ServiziPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Servizi di Consulenza del Lavoro — Elisa Moratelli",
              url: "https://elisamoratelli.it/servizi",
              itemListElement: servizi.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.title,
                description: s.description,
                url: `https://elisamoratelli.it${s.href}`,
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://elisamoratelli.it" },
                { "@type": "ListItem", position: 2, name: "Servizi", item: "https://elisamoratelli.it/servizi" },
              ],
            },
          ]),
        }}
      />

      {/* Hero — navy con accento rosa */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy relative overflow-hidden">
        <AnimatedLines />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-cipria/8 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-5">
              Cosa faccio per te
            </p>
            <h1 className="font-serif text-5xl lg:text-7xl text-white leading-[1.05] mb-6 max-w-3xl">
              Servizi di consulenza del lavoro
            </h1>
            <p className="text-lg font-sans text-white/60 leading-relaxed max-w-xl">
              Dall&apos;elaborazione mensile delle buste paga alla consulenza quotidiana su contratti
              e normative. Non solo cedolini.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lista servizi — layout editoriale */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {servizi.map((s, i) => {
            const Icon = s.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <AnimatedSection key={s.title} delay={i * 0.05}>
                <div className="flex items-start gap-6 lg:gap-10 py-10 border-b border-border-light last:border-0 -mx-6 lg:-mx-8 px-6 lg:px-8">
                  {/* Numero */}
                  <span className="hidden sm:block font-serif text-4xl lg:text-5xl text-anthracite/10 font-bold leading-none pt-1 w-14 flex-shrink-0">
                    {num}
                  </span>

                  {/* Icona */}
                  <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta flex-shrink-0 mt-0.5">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Testo */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-2xl lg:text-3xl text-anthracite mb-3 leading-snug">
                      {s.title}
                    </h2>
                    <p className="text-sm font-sans text-text-muted leading-relaxed max-w-xl">
                      {s.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedLines variant="pink" />
        <div className="absolute inset-0 bg-rose-cta" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=60&auto=format&fit=crop')] bg-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-5xl text-white mb-4 leading-snug">
              Non sai quale servizio fa per te?
            </h2>
            <p className="text-base font-sans text-white/80 mb-8">
              Contattami e valutiamo insieme le esigenze della tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contatti"
                className="bg-white hover:bg-white/90 text-rose-cta font-sans font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Richiedi una consulenza
              </Link>
              <Link
                href="/chi-sono"
                className="inline-flex items-center justify-center gap-2 border border-white/50 text-white hover:bg-white/10 font-sans font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200"
              >
                Chi sono <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
