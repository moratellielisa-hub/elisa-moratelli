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
  HardHat,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedLines from "@/components/AnimatedLines";
import { servizi } from "@/lib/servizi";

const BASE = "https://elisamoratelli.it";
const icons = { FileText, Users, RefreshCw, UserMinus, ClipboardList, AlertCircle, BookOpen };

export const metadata: Metadata = {
  title: "Servizi Consulente del Lavoro a Rovereto | Buste Paga, Assunzioni, Adempimenti",
  description:
    "Tutti i servizi di consulenza del lavoro per aziende e PMI di Rovereto e Trentino: elaborazione cedolini paga, assunzioni, trasformazioni contrattuali, cessazioni, adempimenti INPS e INAIL, dichiarativi annui.",
  alternates: { canonical: `${BASE}/servizi` },
  openGraph: {
    url: `${BASE}/servizi`,
    title: "Servizi | Buste Paga, Assunzioni, Adempimenti HR",
    description:
      "Tutti i servizi di Elisa Moratelli: buste paga mensili, assunzioni, trasformazioni contrattuali, adempimenti e consulenza continuativa per aziende e PMI.",
  },
};

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
              url: `${BASE}/servizi`,
              itemListElement: [
                ...servizi.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: s.title,
                  description: s.short,
                  url: `${BASE}/servizi/${s.slug}`,
                })),
                {
                  "@type": "ListItem",
                  position: servizi.length + 1,
                  name: "Consulenza del lavoro per il settore edilizia",
                  description: "Buste paga operai, Cassa Edile, CCNL Edilizia e gestione del personale di cantiere.",
                  url: `${BASE}/edilizia`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE },
                { "@type": "ListItem", position: 2, name: "Servizi", item: `${BASE}/servizi` },
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
              Servizi di consulenza del lavoro a Rovereto
            </h1>
            <p className="text-lg font-sans text-white/60 leading-relaxed max-w-xl">
              Dall&apos;elaborazione mensile delle buste paga alla consulenza quotidiana su contratti
              e normative, per aziende e PMI di Rovereto, Trento e di tutto il Trentino. Non solo cedolini.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lista servizi — layout editoriale, ogni voce apre la pagina dedicata */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {servizi.map((s, i) => {
            const Icon = icons[s.icon];
            const num = String(i + 1).padStart(2, "0");
            return (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/servizi/${s.slug}`}
                  className="group flex items-start gap-6 lg:gap-10 py-10 border-b border-border-light last:border-0 -mx-6 lg:-mx-8 px-6 lg:px-8 hover:bg-rose-soft/40 transition-colors duration-300"
                >
                  <span className="hidden sm:block font-serif text-4xl lg:text-5xl text-anthracite/10 font-bold leading-none pt-1 w-14 flex-shrink-0">
                    {num}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta flex-shrink-0 mt-0.5">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-2xl lg:text-3xl text-anthracite mb-1 leading-snug group-hover:text-rose-cta transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-xs font-sans font-medium text-text-muted uppercase tracking-wider mb-3">
                      {s.tagline}
                    </p>
                    <p className="text-sm font-sans text-text-muted leading-relaxed max-w-xl mb-3">
                      {s.short}
                    </p>
                    <span className="inline-flex items-center gap-1 text-rose-cta text-sm font-sans font-medium group-hover:gap-2 transition-all duration-200">
                      Approfondisci <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Settore edilizia */}
      <section className="py-16 bg-rose-soft">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/edilizia"
              className="group flex flex-col md:flex-row md:items-center gap-6 bg-navy rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-rose-cipria transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-rose-cipria flex-shrink-0">
                <HardHat size={26} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-2">
                  Settore specializzato
                </p>
                <h2 className="font-serif text-2xl lg:text-3xl text-white mb-2 leading-snug">
                  Consulenza del lavoro per imprese edili
                </h2>
                <p className="text-sm font-sans text-white/60 leading-relaxed max-w-2xl">
                  Buste paga operai secondo il CCNL Edilizia, denuncia mensile Cassa Edile, assunzioni e cessazioni
                  di personale di cantiere.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-white font-sans font-medium text-sm group-hover:gap-3 transition-all">
                Scopri <ArrowRight size={15} />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-rose-cta">
        <AnimatedLines variant="pink" />
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
