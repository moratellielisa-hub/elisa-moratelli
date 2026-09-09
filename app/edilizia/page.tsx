import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  FileText,
  Users,
  UserMinus,
  RefreshCw,
  ClipboardList,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Consulente del Lavoro per Imprese Edili a Rovereto | Paghe, Cassa Edile, CCNL Edilizia",
  description:
    "Consulenza del lavoro specializzata per imprese edili di Rovereto e Trentino: buste paga operai, denuncia Cassa Edile, assunzioni, cessazioni, CCNL Edilizia e gestione del personale di cantiere.",
  alternates: { canonical: "https://elisamoratelli.it/edilizia" },
  openGraph: {
    url: "https://elisamoratelli.it/edilizia",
    title: "Consulente del Lavoro per Imprese Edili | Paghe, Cassa Edile, CCNL Edilizia",
    description:
      "Buste paga operai, Cassa Edile, CCNL Edilizia e gestione del personale di cantiere per imprese edili del Trentino.",
  },
};

const servizi = [
  {
    icon: FileText,
    title: "Buste paga per operai e impiegati tecnici",
    desc: "Elaborazione dei cedolini nel rispetto del CCNL Edilizia, con corretta gestione di tutte le voci: paga base, EDR, contributi Cassa Edile, ferie, permessi, malattia, infortuni.",
  },
  {
    icon: ClipboardList,
    title: "Cassa Edile — denuncia mensile e versamenti",
    desc: "Gestione completa della denuncia mensile alla Cassa Edile e dei relativi versamenti, con verifica della correttezza di tutte le voci.",
  },
  {
    icon: Users,
    title: "Assunzioni di operai e personale di cantiere",
    desc: "Comunicazioni obbligatorie, scelta del contratto, inquadramento, gestione di assunzioni stagionali e a tempo determinato.",
  },
  {
    icon: UserMinus,
    title: "Cessazioni e licenziamenti nel settore edile",
    desc: "Chiusura corretta dei rapporti di lavoro: liquidazioni, TFR, comunicazioni, documentazione formale e riduzione dei rischi di contestazione.",
  },
  {
    icon: RefreshCw,
    title: "Trasformazioni contrattuali",
    desc: "Passaggi da determinato a indeterminato, variazioni di orario, cambi di cantiere o qualifica. Ogni modifica gestita con la documentazione corretta.",
  },
  {
    icon: HardHat,
    title: "CCNL Edilizia — applicazione e interpretazione",
    desc: "Supporto nell'interpretazione e nella corretta applicazione del contratto collettivo, con attenzione agli aggiornamenti periodici.",
  },
];

const destinatari = [
  "Imprese di costruzioni e ristrutturazioni",
  "Ditte artigiane edili",
  "Aziende con operai e personale di cantiere",
  "Impiantisti e subappaltatori",
  "Imprese di facciate, coperture, serramenti",
  "Realtà che applicano il CCNL Edilizia Artigiani o Industria",
];

const faqEdilizia = [
  {
    domanda: "Come vengono gestite le buste paga nel settore edilizia?",
    risposta:
      "Le buste paga nel settore edile seguono le regole del CCNL di riferimento (Artigiani o Industria), con voci specifiche come EDR, contributi Cassa Edile e indennità particolari. La gestione richiede conoscenza del contratto collettivo e attenzione agli aggiornamenti periodici.",
  },
  {
    domanda: "Cosa è la Cassa Edile e come si gestisce?",
    risposta:
      "La Cassa Edile è un ente bilaterale del settore che gestisce trattamenti di fine rapporto, ferie, gratifiche e prestazioni per i lavoratori edili. Ogni mese l'impresa deve effettuare una denuncia e i relativi versamenti. Mi occupo di questo adempimento in modo completo.",
  },
  {
    domanda: "Posso assumere un operaio con contratto a termine per un singolo cantiere?",
    risposta:
      "Sì, il settore edile prevede questa possibilità in determinati casi. Gestisco la pratica dall'inizio, scegliendo il contratto più adeguato e gestendo tutte le comunicazioni obbligatorie.",
  },
  {
    domanda: "Perché un'impresa edile ha bisogno di un consulente specializzato?",
    risposta:
      "Il CCNL Edilizia ha regole proprie, le Casse Edili hanno procedure specifiche, e gli enti di settore sono particolarmente attenti al rispetto degli adempimenti. Affidarsi a una consulente che conosce il settore significa avere buste paga calcolate correttamente, adempimenti rispettati e riduzione del rischio di sanzioni.",
  },
];

export default function EdiliziaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://elisamoratelli.it/edilizia#service",
              name: "Consulenza del lavoro per il settore edilizia",
              serviceType: "Consulenza del lavoro per imprese edili",
              url: "https://elisamoratelli.it/edilizia",
              description:
                "Buste paga operai secondo il CCNL Edilizia, denuncia mensile Cassa Edile, assunzioni e cessazioni di personale di cantiere per imprese edili di Rovereto e Trentino.",
              provider: { "@id": "https://elisamoratelli.it/#business" },
              areaServed: [
                { "@type": "City", name: "Rovereto" },
                { "@type": "City", name: "Trento" },
                { "@type": "AdministrativeArea", name: "Trentino-Alto Adige" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqEdilizia.map((f) => ({
                "@type": "Question",
                name: f.domanda,
                acceptedAnswer: { "@type": "Answer", text: f.risposta },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://elisamoratelli.it" },
                { "@type": "ListItem", position: 2, name: "Servizi", item: "https://elisamoratelli.it/servizi" },
                { "@type": "ListItem", position: 3, name: "Settore edilizia", item: "https://elisamoratelli.it/edilizia" },
              ],
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop"
            alt="Impresa edile cantiere - consulenza del lavoro edilizia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-32 w-full">
          <AnimatedSection direction="left">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cipria mb-4">
              Settore specializzato
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-white leading-tight mb-6">
              Consulenza del lavoro per il settore edilizia
            </h1>
            <p className="text-lg font-sans text-white/70 leading-relaxed mb-8">
              Gestione precisa di paghe, Cassa Edile e personale di cantiere per imprese edili, ditte
              artigiane e aziende con operai di Rovereto, della Vallagarina e di tutto il Trentino.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contatti"
                className="bg-rose-cta hover:bg-rose-hover text-white font-sans font-600 text-sm px-7 py-3.5 rounded-lg transition-colors duration-200 text-center"
              >
                Richiedi una consulenza
              </Link>
              <a
                href="tel:+390464356826"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:border-rose-cipria hover:text-rose-cipria font-sans font-500 text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
              >
                <Phone size={15} />
                Chiama 0464 356826
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <HardHat className="text-rose-cipria mb-5" size={36} strokeWidth={1.5} />
              <h2 className="font-serif text-2xl text-white mb-5">
                Il settore edilizia richiede competenza specifica
              </h2>
              <p className="text-sm font-sans text-white/70 leading-relaxed">
                Contratti complessi, operai con qualifiche diverse, cantieri che si aprono e si
                chiudono, turnover frequente, CCNL articolato, adempimenti particolari con la Cassa
                Edile. Non è un settore dove si può improvvisare.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cosa gestisco */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cta mb-3">
              I servizi per le imprese edili
            </p>
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              Cosa gestisco per le imprese edili
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servizi.map((s, i) => (
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

      {/* Perché uno specialista */}
      <section className="py-20 lg:py-24 bg-rose-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cta mb-3">
              Il valore della specializzazione
            </p>
            <h2 className="font-serif text-4xl text-anthracite mb-5 leading-snug">
              Perché le imprese edili scelgono uno specialista
            </h2>
            <p className="text-base font-sans text-text-muted leading-relaxed mb-5">
              Chi gestisce le buste paga di un&apos;impresa edile con gli stessi strumenti di
              un&apos;azienda di servizi rischia di commettere errori costosi. Il CCNL Edilizia ha regole
              proprie, le Casse Edili hanno procedure specifiche.
            </p>
            <p className="text-base font-sans text-text-muted leading-relaxed">
              Affidarsi a una consulente che conosce il settore significa avere buste paga calcolate
              correttamente, adempimenti rispettati con puntualità e supporto concreto nelle
              situazioni di maggiore complessità.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-white rounded-2xl p-8 border border-border-light">
              <p className="text-xs font-sans uppercase tracking-widest text-rose-cta mb-5 font-500">
                Cosa ottieni
              </p>
              {[
                "Buste paga calcolate correttamente secondo il CCNL",
                "Denuncia Cassa Edile precisa e puntuale",
                "Adempimenti INPS e INAIL nel rispetto delle scadenze",
                "Assunzioni e cessazioni di operai gestite in modo corretto",
                "Supporto su licenziamenti e situazioni delicate",
                "Riduzione del rischio di sanzioni e contestazioni",
                "Un riferimento diretto per ogni dubbio sul settore",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 py-2.5 border-b border-border-light last:border-0"
                >
                  <CheckCircle size={15} className="text-rose-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-sans text-anthracite">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* A chi mi rivolgo */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              A chi mi rivolgo nel settore edile
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {destinatari.map((d, i) => (
              <AnimatedSection key={d} delay={i * 0.07}>
                <div className="flex items-center gap-3 p-5 rounded-xl bg-rose-soft border border-rose-cipria/30">
                  <ArrowRight size={14} className="text-rose-cta flex-shrink-0" />
                  <span className="text-sm font-sans text-anthracite">{d}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-rose-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              Domande frequenti — Settore edilizia
            </h2>
          </AnimatedSection>
          <div className="space-y-5">
            {faqEdilizia.map((f, i) => (
              <AnimatedSection key={f.domanda} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-border-light">
                  <h3 className="font-serif text-lg text-anthracite mb-3">{f.domanda}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{f.risposta}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-4xl text-anthracite mb-4 leading-snug">
              Hai un&apos;impresa edile e vuoi gestire il personale senza rischi?
            </h2>
            <p className="text-base font-sans text-text-muted mb-8">
              Contattami per una prima consulenza senza impegno.
            </p>
            <Link
              href="/contatti"
              className="inline-block bg-rose-cta hover:bg-rose-hover text-white font-sans font-600 text-sm px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contattami per una consulenza
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
