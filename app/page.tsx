import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Users,
  RefreshCw,
  AlertCircle,
  ClipboardList,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import AnimatedLines from "@/components/AnimatedLines";

export const metadata: Metadata = {
  title: "Elisa Moratelli | Consulente del Lavoro — Buste Paga, Assunzioni, Gestione Personale",
  description:
    "Elisa Moratelli, Consulente del Lavoro iscritta all'Albo. Elaborazione buste paga, assunzioni, trasformazioni contrattuali e adempimenti per aziende e PMI. Precisa, aggiornata, disponibile.",
  alternates: { canonical: "https://elisamoratelli.it" },
  openGraph: {
    url: "https://elisamoratelli.it",
    title: "Elisa Moratelli | Consulente del Lavoro",
    description:
      "Buste paga, assunzioni e gestione del personale per aziende e PMI. Iscritta all'Albo dei Consulenti del Lavoro, presso CDL Group.",
  },
};

const servizi = [
  {
    icon: FileText,
    title: "Elaborazione cedolini paga",
    tagline: "Precisi, puntuali, ogni mese.",
    description:
      "Gestione mensile di buste paga, contributi, trattenute, ferie, malattie e voci variabili.",
    href: "/servizi/elaborazione-cedolini-paga",
  },
  {
    icon: Users,
    title: "Assunzioni",
    tagline: "Dall'inquadramento alle comunicazioni.",
    description:
      "Comunicazioni obbligatorie, scelta del contratto, lettere di assunzione e agevolazioni disponibili.",
    href: "/servizi/assunzioni",
  },
  {
    icon: RefreshCw,
    title: "Trasformazioni contrattuali",
    tagline: "Ogni cambiamento documentato.",
    description:
      "Da tempo determinato a indeterminato, variazioni orarie, cambi di mansione e aggiornamenti.",
    href: "/servizi/trasformazioni-contrattuali",
  },
  {
    icon: ClipboardList,
    title: "Pratiche HR e adempimenti",
    tagline: "Nessuna scadenza dimenticata.",
    description:
      "INPS, INAIL, dichiarativi annui, comunicazioni obbligatorie e documenti del personale.",
    href: "/servizi/pratiche-hr",
  },
  {
    icon: AlertCircle,
    title: "Consulenza del lavoro",
    tagline: "Un riferimento nelle decisioni quotidiane.",
    description:
      "Interpretazione normativa, contratti collettivi, analisi dei costi del personale e supporto nelle scelte operative quotidiane.",
    href: "/servizi/consulenza-del-lavoro",
  },
];

const vantaggi = [
  {
    icon: Shield,
    title: "Meno rischi",
    description: "Ogni adempimento gestito correttamente riduce sanzioni, contestazioni e contenziosi.",
  },
  {
    icon: Clock,
    title: "Meno tempo perso",
    description: "Ogni adempimento gestito con precisione, senza che tu debba seguirlo direttamente.",
  },
  {
    icon: TrendingUp,
    title: "Più chiarezza sui costi",
    description: "Sai quanto costa davvero ogni dipendente. Pianifichi meglio.",
  },
  {
    icon: CheckCircle,
    title: "Decisioni più serene",
    description: "Hai un riferimento diretto per ogni dubbio su contratti e normative.",
  },
];

const problemi = [
  { titolo: "Buste paga sbagliate", testo: "Errori su contributi e trattenute che espongono l'azienda a sanzioni e contestazioni." },
  { titolo: "Assunzioni non in regola", testo: "Comunicazioni mancate, contratti inadeguati: ogni passaggio va gestito correttamente dall'inizio." },
  { titolo: "Comunicazione con gli enti", testo: "Gestione puntuale dei rapporti con INPS, INAIL, Cassa Edile e degli adempimenti obbligatori verso gli enti." },
  { titolo: "Contratti non aggiornati", testo: "Normative che cambiano, CCNL da interpretare: serve aggiornamento costante." },
  { titolo: "Gestione del personale caotica", testo: "Documenti sparsi, scadenze saltate. Rimettere ordine è possibile con il supporto giusto." },
];

const steps = [
  { num: "01", title: "Ascolto", desc: "Capisco la tua situazione e le esigenze specifiche dell'azienda." },
  { num: "02", title: "Analisi", desc: "Esamino la gestione del personale e le eventuali criticità." },
  { num: "03", title: "Gestione", desc: "Mi occupo di tutto: cedolini, comunicazioni, adempimenti." },
  { num: "04", title: "Supporto costante", desc: "Disponibile per domande e decisioni. Un riferimento concreto e continuativo per la tua azienda." },
];

export default function HomePage() {
  const [S0, S1, S2, S3, S4] = servizi.map((s) => s.icon);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": "https://elisamoratelli.it/#business",
              name: "Elisa Moratelli — Consulente del Lavoro",
              description:
                "Consulente del Lavoro iscritta all'Albo. Specializzata in elaborazione cedolini paga, assunzioni, trasformazioni contrattuali e adempimenti per aziende e PMI.",
              url: "https://elisamoratelli.it",
              telephone: "+39XXXXXXXXXX",
              email: "info@elisamoratelli.it",
              image: "https://elisamoratelli.it/elisa-foto.jpeg",
              priceRange: "€€",
              areaServed: { "@type": "Country", name: "Italia" },
              knowsLanguage: "it",
              employee: {
                "@type": "Person",
                "@id": "https://elisamoratelli.it/chi-sono#person",
                name: "Elisa Moratelli",
                jobTitle: "Consulente del Lavoro",
                hasCredential: {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Iscrizione all'Albo dei Consulenti del Lavoro",
                },
              },
              memberOf: {
                "@type": "Organization",
                name: "CDL Group",
                url: "https://www.cdlgroup.net",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi di Consulenza del Lavoro",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elaborazione cedolini paga" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestione assunzioni" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trasformazioni contrattuali" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Adempimenti INPS e INAIL" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consulenza del lavoro" } },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://elisamoratelli.it/#website",
              name: "Elisa Moratelli Consulente del Lavoro",
              url: "https://elisamoratelli.it",
              inLanguage: "it-IT",
              publisher: { "@id": "https://elisamoratelli.it/#business" },
            },
          ]),
        }}
      />

      {/* ——— HERO SPLIT ——— */}
      <section className="relative min-h-screen flex flex-col lg:flex-row bg-navy overflow-hidden">
        <AnimatedLines />

        {/* COLONNA SINISTRA — testo */}
        <div className="flex-1 flex items-center px-8 lg:px-16 xl:px-24 py-32 lg:py-0 relative z-10">
          <AnimatedSection direction="left" className="max-w-lg">
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-5">
              Elisa Moratelli — Consulente del Lavoro
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] mb-7">
              Gestisci il personale con{" "}
              <span className="text-rose-cipria">precisione.</span>
            </h1>
            <p className="text-lg font-sans text-white/70 leading-relaxed mb-10">
              Paghe, assunzioni, contratti e adempimenti. Per aziende e PMI che vogliono
              fare le cose per bene.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contatti"
                className="bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-200 text-center"
              >
                Richiedi una consulenza
              </Link>
              <Link
                href="/servizi"
                className="border border-white/30 text-white hover:border-rose-cipria hover:text-rose-cipria font-sans font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 text-center"
              >
                Scopri i servizi
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@elisamoratelli.it"
                className="flex items-center gap-2 text-sm font-sans text-white/60 hover:text-rose-cipria transition-colors"
              >
                <Mail size={15} />
                Scrivimi
              </a>
              <a
                href="tel:0464356826"
                className="flex items-center gap-2 text-sm font-sans text-white/60 hover:text-rose-cipria transition-colors"
              >
                <Phone size={15} />
                0464 356826
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* COLONNA DESTRA — foto Elisa su sfondo chiaro */}
        <AnimatedSection
          direction="right"
          delay={0.2}
          className="hidden lg:flex relative w-[45%] flex-shrink-0 items-end justify-center overflow-hidden"
        >
          {/* Sfondo: gradiente da navy a rose-soft — così la foto bianca si fonde */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#2a1f2e] to-rose-soft" />

          {/* Cerchio decorativo grande dietro la foto */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-rose-cipria/20 blur-3xl" />

          {/* FOTO — sfondo bianco si integra perché gradiente va verso rose-soft */}
          <div className="relative w-full h-full min-h-screen flex items-end justify-center">
            <Image
              src="/elisa-foto.jpeg"
              alt="Elisa Moratelli Consulente del Lavoro"
              fill
              sizes="45vw"
              className="object-cover object-top"
              priority
              loading="eager"
            />
            {/* Blend laterale sinistro: fonde col navy della colonna sinistra */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent" />
          </div>

          {/* Badge nome */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-navy/80 backdrop-blur-md border border-white/10 text-white rounded-2xl px-7 py-4 text-center whitespace-nowrap shadow-2xl">
            <p className="font-serif text-xl font-bold leading-tight">Elisa Moratelli</p>
            <p className="text-xs font-sans text-rose-cipria tracking-widest uppercase mt-1">
              Consulente del Lavoro
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ——— CDL GROUP BANNER ——— */}
      <section className="bg-white py-10 lg:py-12 border-b border-border-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-navy rounded-2xl px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-white/10">
              {/* Testo */}
              <div className="flex-1">
                <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-2">
                  Dove lavoro
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 leading-snug">
                  CDL Group
                </h3>
                <p className="text-sm font-sans text-white/65 leading-relaxed max-w-xl mb-4">
                  Un gruppo di Consulenti del Lavoro che condividono metodo, aggiornamento e
                  obiettivi: un ecosistema dove ogni progetto diventa un&apos;occasione di crescita
                  professionale concreta.
                </p>
                <a
                  href="https://www.cdlgroup.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-white/40 hover:text-white transition-colors"
                >
                  www.cdlgroup.net
                </a>
              </div>
              {/* CTA */}
              <a
                href="https://www.cdlgroup.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-navy hover:bg-rose-cipria hover:text-navy font-sans font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm"
              >
                Scopri CDL Group <ArrowRight size={15} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— PRESENTAZIONE CON FOTO ——— */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          {/* Foto consulente */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Foto con sfondo bianco — la metto su rose-soft così si integra */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-rose-soft border-4 border-white shadow-2xl">
                <Image
                  src="/elisa_cdl.jpg"
                  alt="Elisa Moratelli Consulente del Lavoro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              {/* Card in sovrimpressione */}
              <div className="absolute -bottom-5 -right-5 bg-rose-cta text-white rounded-xl px-6 py-4 shadow-xl">
                <p className="font-serif text-xl font-bold">Elisa Moratelli</p>
                <p className="text-xs uppercase tracking-widest text-white/70 font-sans mt-0.5">
                  Consulente del Lavoro
                </p>
              </div>
              {/* Decorazione angolo */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-rose-cipria/40 border-4 border-white -z-10" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 rounded-full bg-rose-cta/20 -z-10" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-4">
              Chi sono
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-anthracite mb-6 leading-snug">
              Un punto di riferimento chiaro per la gestione del lavoro
            </h2>
            <p className="text-base font-sans text-text-muted leading-relaxed mb-5">
              Sono una Consulente del Lavoro specializzata nella gestione del personale per aziende
              e PMI. Affianco i datori di lavoro nelle scelte quotidiane: dalle buste paga agli
              adempimenti, dalle assunzioni alle cessazioni.
            </p>
            <p className="text-base font-sans text-text-muted leading-relaxed mb-8">
              Il mio obiettivo è semplice: che tu possa gestire il personale in modo corretto,
              senza perdere tempo e senza rischiare errori costosi.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Ascolto attivo: capisco prima di consigliare",
                "Empatia e attenzione alla realtà di ogni azienda",
                "Problem solving nelle situazioni complesse",
                "Aggiornamento normativo continuo",
                "Chiarezza nelle spiegazioni, senza tecnicismi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-rose-cta flex-shrink-0" />
                  <span className="text-sm font-sans text-anthracite">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/chi-sono"
              className="inline-flex items-center gap-2 text-rose-cta font-sans font-medium text-sm hover:gap-3 transition-all duration-200"
            >
              Scopri chi sono <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— PROBLEMI ——— */}
      <section className="relative py-20 lg:py-24 bg-anthracite overflow-hidden">
        <AnimatedLines />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-3">
              Perché serve un consulente
            </p>
            <h2 className="font-serif text-4xl text-white leading-snug">
              I problemi che le aziende non vogliono avere
            </h2>
          </AnimatedSection>

          {/* Bento 2+3 per 5 card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {problemi.slice(0, 2).map((p, i) => (
              <AnimatedSection key={p.titolo} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 h-full hover:bg-white/10 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-rose-cipria mb-4" />
                  <h3 className="font-serif text-xl text-white mb-2">{p.titolo}</h3>
                  <p className="text-sm font-sans text-white/60 leading-relaxed">{p.testo}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {problemi.slice(2).map((p, i) => (
              <AnimatedSection key={p.titolo} delay={(i + 2) * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 h-full hover:bg-white/10 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-rose-cipria mb-4" />
                  <h3 className="font-serif text-xl text-white mb-2">{p.titolo}</h3>
                  <p className="text-sm font-sans text-white/60 leading-relaxed">{p.testo}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SERVIZI ——— */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-3">
              Cosa faccio per te
            </p>
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              Servizi di consulenza del lavoro
            </h2>
          </AnimatedSection>

          {/* Bento grid — riga 1: card grande + card normale; riga 2: tre card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* Card 1 — grande, navy, occupa 2 colonne */}
            <AnimatedSection delay={0} className="lg:col-span-2">
              <div className="relative flex flex-col justify-between h-full min-h-[220px] p-8 rounded-2xl bg-navy overflow-hidden">
                <span className="absolute right-6 top-4 font-serif text-[120px] leading-none text-white/5 select-none pointer-events-none">01</span>
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-rose-cipria mb-5">
                    <S0 size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2 leading-snug">{servizi[0].title}</h3>
                  <p className="text-sm font-sans text-white/60 leading-relaxed max-w-sm">{servizi[0].description}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={0.08}>
              <div className="relative flex flex-col justify-between h-full min-h-[220px] p-7 rounded-2xl bg-card-bg border border-border-light overflow-hidden">
                <span className="absolute right-5 top-3 font-serif text-[90px] leading-none text-anthracite/4 select-none pointer-events-none">02</span>
                <div>
                  <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta mb-5">
                    <S1 size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug">{servizi[1].title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{servizi[1].description}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={0.12}>
              <div className="relative flex flex-col justify-between h-full min-h-[200px] p-7 rounded-2xl bg-card-bg border border-border-light overflow-hidden">
                <span className="absolute right-5 top-3 font-serif text-[90px] leading-none text-anthracite/4 select-none pointer-events-none">03</span>
                <div>
                  <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta mb-5">
                    <S2 size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug">{servizi[2].title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{servizi[2].description}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 4 */}
            <AnimatedSection delay={0.16}>
              <div className="relative flex flex-col justify-between h-full min-h-[200px] p-7 rounded-2xl bg-card-bg border border-border-light overflow-hidden">
                <span className="absolute right-5 top-3 font-serif text-[90px] leading-none text-anthracite/4 select-none pointer-events-none">04</span>
                <div>
                  <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta mb-5">
                    <S3 size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug">{servizi[3].title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{servizi[3].description}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 5 */}
            <AnimatedSection delay={0.2} className="lg:col-span-1">
              <div className="relative flex flex-col justify-between h-full min-h-[200px] p-7 rounded-2xl bg-rose-soft border border-rose-cipria/40 overflow-hidden">
                <span className="absolute right-5 top-3 font-serif text-[90px] leading-none text-rose-cta/10 select-none pointer-events-none">05</span>
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white/70 flex items-center justify-center text-rose-cta mb-5">
                    <S4 size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug">{servizi[4].title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{servizi[4].description}</p>
                </div>
                <div className="flex items-center gap-1 text-rose-cta text-sm font-sans font-medium mt-5 group-hover:gap-2 transition-all duration-200">
                  Scopri il servizio <ArrowRight size={14} />
                </div>
              </div>
            </AnimatedSection>

          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 border border-anthracite/30 text-anthracite hover:border-rose-cta hover:text-rose-cta font-sans font-medium text-sm px-6 py-3 rounded-lg transition-all duration-200"
            >
              Vedi tutti i servizi <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ——— PERCHÉ SCEGLIERMI ——— */}
      <section className="py-20 lg:py-24 bg-rose-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-3">
              Il valore del mio supporto
            </p>
            <h2 className="font-serif text-4xl text-anthracite leading-snug">
              Perché scegliere me
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {vantaggi.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4 p-7 rounded-2xl bg-white border border-border-light shadow-sm h-full">
                  <div className="w-12 h-12 rounded-xl bg-rose-soft flex items-center justify-center">
                    <v.icon size={22} className="text-rose-cta" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-anthracite">{v.title}</h3>
                  <p className="text-sm font-sans text-text-muted leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ——— METODO ——— */}
      <section className="relative py-20 lg:py-24 bg-navy overflow-hidden">
        <AnimatedLines />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-3">
              Come lavoro
            </p>
            <h2 className="font-serif text-4xl text-white leading-snug">Il mio metodo</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-7 h-full hover:bg-white/10 transition-colors">
                  <p className="font-serif text-5xl text-rose-cta/40 font-bold mb-4">{s.num}</p>
                  <h3 className="font-serif text-xl text-white mb-3">{s.title}</h3>
                  <p className="text-sm font-sans text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA FINALE con FOTO ——— */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <AnimatedLines variant="pink" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop"
            alt="Studio professionale consulenza del lavoro"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-rose-cta/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-white/70 mb-4">
              Inizia oggi
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-snug mb-5">
              Inizia a gestire il personale senza preoccupazioni
            </h2>
            <p className="text-base font-sans text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
              Contattami per una prima consulenza. Valuto insieme a te la situazione e ti propongo
              il supporto più adatto alla tua azienda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contatti"
                className="bg-white hover:bg-white/90 text-rose-cta font-sans font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Richiedi una consulenza
              </Link>
              <a
                href="mailto:info@elisamoratelli.it"
                className="inline-flex items-center justify-center gap-2 border border-white/50 text-white hover:bg-white/10 font-sans font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200"
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
