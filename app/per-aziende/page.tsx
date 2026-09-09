import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Users,
  FileText,
  RefreshCw,
  UserMinus,
  ClipboardList,
  Mail,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedLines from "@/components/AnimatedLines";

export const metadata: Metadata = {
  title: "Consulente del Lavoro per Aziende e PMI a Rovereto | Gestione del Personale",
  description:
    "Supporto completo per aziende e PMI di Rovereto e Trentino: buste paga precise ogni mese, assunzioni corrette, contratti aggiornati, adempimenti INPS e INAIL senza scadenze saltate.",
  alternates: { canonical: "https://elisamoratelli.it/per-aziende" },
  openGraph: {
    url: "https://elisamoratelli.it/per-aziende",
    title: "Per Aziende | Gestione del Personale Senza Errori e Sanzioni",
    description:
      "Affida la gestione del personale a Elisa Moratelli: buste paga, assunzioni, adempimenti e consulenza continuativa. Meno rischi, più serenità per il datore di lavoro.",
  },
};

const supporto = [
  {
    icon: FileText,
    title: "Elaborazione mensile delle buste paga",
    desc: "Ogni mese le retribuzioni vengono calcolate in modo preciso: contributi, trattenute, voci variabili, ferie, malattie.",
  },
  {
    icon: Users,
    title: "Gestione delle assunzioni",
    desc: "Quando assumi un dipendente, mi occupo di tutto: scelta del contratto, comunicazioni obbligatorie, inquadramento, documentazione. Dal primo giorno, tutto in regola.",
  },
  {
    icon: RefreshCw,
    title: "Supporto nelle trasformazioni contrattuali",
    desc: "Variazioni d'orario, passaggi da determinato a indeterminato (con analisi delle possibili agevolazioni), cambi di mansione: ogni modifica ha le sue procedure.",
  },
  {
    icon: UserMinus,
    title: "Cessazioni del rapporto di lavoro",
    desc: "Nei momenti delicati ti accompagno passo dopo passo: documentazione, comunicazioni agli enti, liquidazioni TFR e adempimenti finali nel rispetto della legge.",
  },
  {
    icon: ClipboardList,
    title: "Adempimenti verso gli enti",
    desc: "INPS, INAIL, Cassa Edile: scadenze, dichiarativi e comunicazioni obbligatorie gestite con puntualità.",
  },
  {
    icon: CheckCircle,
    title: "Consulenza continua",
    desc: "Hai un dubbio su un contratto, su una normativa, su come gestire una situazione particolare? Hai un riferimento diretto a cui rivolgerti.",
  },
];

const vantaggi = [
  {
    icon: Shield,
    title: "Meno rischi",
    desc: "Ogni adempimento gestito correttamente riduce la probabilità di sanzioni, contestazioni e contenziosi.",
    color: "bg-rose-soft border-rose-cipria/30",
  },
  {
    icon: Clock,
    title: "Meno tempo perso",
    desc: "Non ti occupi tu della parte burocratica del personale: ogni adempimento è gestito con precisione.",
    color: "bg-rose-soft border-rose-cipria/30",
  },
  {
    icon: TrendingUp,
    title: "Più chiarezza sui costi",
    desc: "Sai quanto costa davvero ogni dipendente. Puoi pianificare meglio.",
    color: "bg-rose-soft border-rose-cipria/30",
  },
  {
    icon: CheckCircle,
    title: "Decisioni più serene",
    desc: "Hai un supporto professionale che ti guida nelle scelte su personale e contratti.",
    color: "bg-rose-soft border-rose-cipria/30",
  },
];

export default function PerAziendePage() {
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
              { "@type": "ListItem", position: 2, name: "Per aziende", item: "https://elisamoratelli.it/per-aziende" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 lg:pt-40 lg:pb-32">
        <AnimatedLines />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
            alt="Gestione del personale per aziende"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Colonna sinistra — testo */}
            <AnimatedSection direction="left">
              <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-5">
                Per le aziende
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6">
                Gestire il personale è complesso.
                <span className="block text-rose-cipria mt-2">
                  Con il supporto giusto, non deve esserlo per te.
                </span>
              </h1>
              <p className="text-base font-sans text-white/65 leading-relaxed mb-8 max-w-md">
                Affiancamento nella gestione completa del personale: buste paga, assunzioni,
                adempimenti, trasformazioni contrattuali e cessazioni.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contatti"
                  className="bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-200 text-center"
                >
                  Richiedi una consulenza
                </Link>
                <Link
                  href="/servizi"
                  className="border border-white/30 text-white hover:border-rose-cipria hover:text-rose-cipria font-sans font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200 text-center"
                >
                  Vedi tutti i servizi
                </Link>
              </div>
            </AnimatedSection>

            {/* Colonna destra — highlights */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "01", label: "Buste paga mensili", sub: "Precise, puntuali" },
                  { num: "02", label: "Assunzioni e HR", sub: "Dalla A alla Z" },
                  { num: "03", label: "Adempimenti enti", sub: "INPS · INAIL" },
                  { num: "04", label: "Consulenza continua", sub: "Sempre disponibile" },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <p className="font-serif text-2xl text-rose-cipria/50 font-bold mb-2">{item.num}</p>
                    <p className="font-sans font-semibold text-white text-sm leading-snug mb-1">{item.label}</p>
                    <p className="font-sans text-xs text-white/40">{item.sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Il problema */}
      <section className="py-16 bg-rose-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border-light">
              <h2 className="font-serif text-3xl text-anthracite mb-5 leading-snug">
                Il personale è la parte più delicata di un&apos;azienda
              </h2>
              <p className="text-base font-sans text-text-muted leading-relaxed mb-4">
                I problemi sul personale o sulle paghe capitano spesso quando la gestione del
                personale non è seguita da un professionista attento e aggiornato.
              </p>
              <p className="text-base font-sans text-text-muted leading-relaxed">
                Affidarsi a una Consulente del Lavoro non è un costo: è una scelta che protegge
                l&apos;azienda, risparmia tempo e riduce il rischio di sanzioni, contenziosi e
                problemi con i dipendenti.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Supporto */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cta mb-3">
              Il supporto concreto
            </p>
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              Come supporto la tua azienda
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {supporto.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4 p-7 rounded-2xl bg-card-bg border border-border-light h-full hover:border-rose-cipria hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta">
                    <s.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-anthracite leading-snug">{s.title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-20 lg:py-24 bg-rose-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cta mb-3">
              I benefici per te
            </p>
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              I vantaggi concreti per la tua azienda
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {vantaggi.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className={`flex flex-col gap-3 p-6 rounded-xl bg-white border border-border-light h-full`}>
                  <v.icon size={22} className="text-rose-cta" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-anthracite">{v.title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Non solo cedolini */}
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
        <AnimatedLines />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cipria mb-4">
              Il valore reale della consulenza
            </p>
            <h2 className="font-serif text-4xl text-white mb-5 leading-snug">
              Non solo cedolini
            </h2>
            <p className="text-base font-sans text-white/70 leading-relaxed mb-5 max-w-2xl mx-auto">
              Molte aziende credono che un consulente del lavoro si occupi solo di elaborare buste
              paga. È molto di più.
            </p>
            <p className="text-base font-sans text-white/70 leading-relaxed max-w-2xl mx-auto">
              Mi occupo di costruire con te una gestione del personale solida, corretta e
              sostenibile nel tempo. Conosco la tua realtà, ti informo sulle novità normative che ti
              riguardano, ti aiuto a capire le opzioni a tua disposizione e ti supporto quando le
              situazioni si fanno complesse.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-4xl text-anthracite mb-4 leading-snug">
              Vuoi un supporto concreto per la gestione del personale?
            </h2>
            <p className="text-base font-sans text-text-muted mb-8">
              Contattami per una prima consulenza. Valutiamo insieme la situazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contatti"
                className="bg-rose-cta hover:bg-rose-hover text-white font-sans font-600 text-sm px-8 py-3.5 rounded-lg transition-colors duration-200"
              >
                Richiedi una consulenza
              </Link>
              <a
                href="mailto:info@elisamoratelli.it"
                className="inline-flex items-center justify-center gap-2 border border-anthracite/30 text-anthracite hover:border-rose-cta hover:text-rose-cta font-sans font-500 text-sm px-8 py-3.5 rounded-lg transition-all duration-200"
              >
                <Mail size={15} />
                Scrivimi una mail
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
