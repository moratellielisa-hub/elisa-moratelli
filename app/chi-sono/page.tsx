import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedLines from "@/components/AnimatedLines";

export const metadata: Metadata = {
  title: "Chi Sono | Elisa Moratelli Consulente del Lavoro",
  description:
    "Elisa Moratelli, Consulente del Lavoro iscritta all'Albo. Specializzata in paghe, assunzioni e gestione del personale per aziende e PMI. Precisa, aggiornata e concretamente vicina alla tua azienda.",
  alternates: { canonical: "https://elisamoratelli.it/chi-sono" },
  openGraph: {
    url: "https://elisamoratelli.it/chi-sono",
    title: "Chi Sono | Elisa Moratelli Consulente del Lavoro",
    description:
      "Consulente del Lavoro iscritta all'Albo, presso CDL Group. Affianco aziende e PMI nella gestione quotidiana del personale con precisione e continuità.",
    images: [{ url: "/elisa_cdl.jpg", width: 800, height: 1000, alt: "Elisa Moratelli Consulente del Lavoro" }],
  },
};

const valori = [
  {
    titolo: "Precisione",
    testo: "Ogni cedolino, ogni comunicazione, ogni adempimento è gestito con attenzione al dettaglio.",
  },
  {
    titolo: "Aggiornamento continuo",
    testo: "Le normative sul lavoro cambiano continuamente. Mi aggiorno per garantire sempre una consulenza corretta e attuale.",
  },
  {
    titolo: "Affidabilità",
    testo: "Rispondo, sono presente, mantengo gli impegni. Costruire un rapporto di fiducia con i miei clienti è la cosa che più mi sta a cuore.",
  },
  {
    titolo: "Chiarezza",
    testo: "Spiego le cose in modo comprensibile. Il datore di lavoro deve capire cosa sta gestendo e perché.",
  },
  {
    titolo: "Riservatezza",
    testo: "I dati aziendali e i dati del personale sono trattati con la massima cura e nel pieno rispetto della normativa sulla privacy.",
  },
  {
    titolo: "Supporto reale",
    testo: "Costruiamo un rapporto continuativo, dove conosco la tua azienda e il tuo personale.",
  },
];

export default function ChiSonoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://elisamoratelli.it/chi-sono#person",
              name: "Elisa Moratelli",
              jobTitle: "Consulente del Lavoro",
              description:
                "Consulente del Lavoro iscritta all'Albo, specializzata in elaborazione buste paga, assunzioni e gestione del personale per aziende e PMI.",
              url: "https://elisamoratelli.it/chi-sono",
              image: "https://elisamoratelli.it/elisa_cdl.jpg",
              email: "info@elisamoratelli.it",
              worksFor: { "@type": "Organization", name: "CDL Group", url: "https://www.cdlgroup.net" },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Iscrizione all'Albo dei Consulenti del Lavoro",
              },
              knowsAbout: [
                "Elaborazione cedolini paga",
                "Gestione assunzioni",
                "Adempimenti INPS e INAIL",
                "Contrattualistica del lavoro",
                "Trasformazioni contrattuali",
                "Consulenza del lavoro",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://elisamoratelli.it" },
                { "@type": "ListItem", position: 2, name: "Chi sono", item: "https://elisamoratelli.it/chi-sono" },
              ],
            },
          ]),
        }}
      />

      {/* ——— HERO — centrato, senza foto, diverso dalla home ——— */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy relative overflow-hidden">
        <AnimatedLines />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-rose-cipria/10 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-5">
              Chi sono
            </p>
            <h1 className="font-serif text-6xl lg:text-7xl text-white leading-[1.05] mb-5">
              Elisa Moratelli
            </h1>
            <p className="text-lg font-sans text-rose-cipria tracking-wide mb-6">
              Consulente del Lavoro · CDL Group
            </p>
            <p className="text-lg font-sans text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Precisa, aggiornata e concretamente vicina alla tua azienda.
              Ti affianco in ogni decisione legata al personale.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Richiedi una consulenza <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— BIO + FOTO ——— */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Testo — 3 colonne */}
          <AnimatedSection direction="left" className="lg:col-span-3 order-2 lg:order-1">
            <h2 className="font-serif text-4xl text-anthracite mb-6 leading-snug">Chi sono</h2>
            <p className="text-base font-sans text-text-muted leading-relaxed mb-5">
              Sono Elisa Moratelli, Consulente del Lavoro specializzata nella gestione del personale
              per aziende di diverse dimensioni e settori.
            </p>
            <p className="text-base font-sans text-text-muted leading-relaxed mb-5">
              Nel corso degli anni ho affiancato piccole e medie imprese, artigiani e professionisti
              nella gestione quotidiana dei rapporti di lavoro: dall&apos;apertura delle posizioni
              INAIL, INPS ed eventuali casse edili, alle assunzioni, dalle buste paga alle trasformazioni
              contrattuali, dagli adempimenti fiscali e previdenziali al supporto nelle decisioni
              operative quotidiane.
            </p>
            <div className="flex gap-4 items-start bg-navy/5 rounded-xl p-5 border-l-4 border-rose-cta mb-8">
              <p className="text-base font-sans text-anthracite leading-relaxed italic">
                &ldquo;Ho scelto questo lavoro perché credo che un&apos;azienda che gestisce bene il
                personale lavori meglio — e che ogni datore di lavoro meriti un punto di riferimento
                affidabile su cui contare davvero.&rdquo;
              </p>
            </div>

            <div className="bg-rose-soft rounded-xl p-6 border border-rose-cipria/30">
              <p className="font-sans font-medium text-rose-cta text-xs uppercase tracking-widest mb-3">
                Il mio approccio
              </p>
              <p className="text-sm font-sans text-anthracite leading-relaxed mb-4">
                Cerco di capire la tua realtà, le tue esigenze e le tue preoccupazioni. Ti fornisco
                supporto concreto, orientato a ridurre i rischi e semplificare la gestione.
              </p>
              {[
                "Ascolto attivo: capisco prima di consigliare",
                "Empatia e attenzione alla realtà di ogni azienda",
                "Problem solving nelle situazioni complesse",
                "Sempre aggiornata sulle novità normative",
                "Risposte chiare, senza tecnicismi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2 border-b border-rose-cipria/20 last:border-0">
                  <CheckCircle size={14} className="text-rose-cta flex-shrink-0" />
                  <span className="text-sm font-sans text-anthracite">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Foto — 2 colonne */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-rose-soft shadow-2xl">
              <Image
                src="/elisa_sito.jpg"
                alt="Elisa Moratelli Consulente del Lavoro"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <p className="font-serif text-white text-base font-bold">Elisa Moratelli</p>
                <p className="text-xs font-sans text-rose-cipria tracking-wider uppercase mt-0.5">
                  Consulente del Lavoro · CDL Group
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— VALORI ——— */}
      <section className="py-20 lg:py-24 bg-rose-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-3">
              Come lavoro
            </p>
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              I valori che guidano il mio lavoro
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valori.map((v, i) => (
              <AnimatedSection key={v.titolo} delay={i * 0.08}>
                <div className="p-7 rounded-2xl bg-white border border-border-light h-full hover:border-rose-cipria hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-rose-cta mb-5" />
                  <h3 className="font-serif text-xl text-anthracite mb-3">{v.titolo}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{v.testo}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedLines variant="pink" />
        <div className="absolute inset-0 bg-rose-cta" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=60&auto=format&fit=crop')] bg-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4 leading-snug">
              Vuoi sapere come posso supportare la tua azienda?
            </h2>
            <p className="text-base font-sans text-white/80 mb-8">
              Contattami senza impegno. Valutiamo insieme la situazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contatti"
                className="bg-white hover:bg-white/90 text-rose-cta font-sans font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Contattami
              </Link>
              <Link
                href="/servizi"
                className="inline-flex items-center justify-center gap-2 border border-white/50 text-white hover:bg-white/10 font-sans font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200"
              >
                Scopri i servizi <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
