import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FileText,
  Users,
  RefreshCw,
  UserMinus,
  ClipboardList,
  AlertCircle,
  BookOpen,
  ArrowRight,
  CheckCircle,
  HardHat,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedLines from "@/components/AnimatedLines";
import { servizi, getServizio } from "@/lib/servizi";

const BASE = "https://elisamoratelli.it";

const icons = { FileText, Users, RefreshCw, UserMinus, ClipboardList, AlertCircle, BookOpen };

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servizi.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServizio(slug);
  if (!s) return {};
  const url = `${BASE}/servizi/${s.slug}`;
  return {
    title: { absolute: `${s.metaTitle} | Elisa Moratelli` },
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: { url, title: s.metaTitle, description: s.metaDescription },
  };
}

export default async function ServizioPage({ params }: Props) {
  const { slug } = await params;
  const s = getServizio(slug);
  if (!s) notFound();

  const Icon = icons[s.icon];
  const url = `${BASE}/servizi/${s.slug}`;
  const altri = servizi.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${url}#service`,
              name: s.title,
              serviceType: s.title,
              description: s.metaDescription,
              url,
              provider: { "@id": `${BASE}/#business` },
              areaServed: [
                { "@type": "City", name: "Rovereto" },
                { "@type": "City", name: "Trento" },
                { "@type": "AdministrativeArea", name: "Trentino-Alto Adige" },
              ],
              audience: { "@type": "BusinessAudience", audienceType: "Aziende, PMI, artigiani e professionisti con dipendenti" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: s.faq.map((f) => ({
                "@type": "Question",
                name: f.domanda,
                acceptedAnswer: { "@type": "Answer", text: f.risposta },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE },
                { "@type": "ListItem", position: 2, name: "Servizi", item: `${BASE}/servizi` },
                { "@type": "ListItem", position: 3, name: s.title, item: url },
              ],
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-navy relative overflow-hidden">
        <AnimatedLines />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-cipria/8 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <nav aria-label="Percorso" className="text-xs font-sans text-white/40 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-rose-cipria transition-colors">Home</Link>
              <span>/</span>
              <Link href="/servizi" className="hover:text-rose-cipria transition-colors">Servizi</Link>
              <span>/</span>
              <span className="text-white/70">{s.title}</span>
            </nav>
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-rose-cipria mb-6">
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl text-white leading-[1.08] mb-5 max-w-3xl">
              {s.h1}
            </h1>
            <p className="text-lg font-sans text-rose-cipria mb-8">{s.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contatti"
                className="bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-200 text-center"
              >
                Richiedi una consulenza
              </Link>
              <a
                href="tel:+390464356826"
                className="border border-white/30 text-white hover:border-rose-cipria hover:text-rose-cipria font-sans font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200 text-center"
              >
                Chiama 0464 356826
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro + cosa include */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <AnimatedSection direction="left" className="lg:col-span-3">
            {s.intro.map((p) => (
              <p key={p} className="text-base lg:text-lg font-sans text-text-muted leading-relaxed mb-5">
                {p}
              </p>
            ))}
            <h2 className="font-serif text-3xl text-anthracite mt-10 mb-6 leading-snug">
              Cosa include il servizio
            </h2>
            <ul className="space-y-3">
              {s.include.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-rose-cta flex-shrink-0 mt-1" />
                  <span className="text-base font-sans text-anthracite leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2 space-y-5 lg:sticky lg:top-28">
            <div className="bg-rose-soft rounded-2xl p-7 border border-rose-cipria/30">
              <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-4">
                A chi si rivolge
              </p>
              <ul className="space-y-2.5">
                {s.perChi.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm font-sans text-anthracite">
                    <ArrowRight size={14} className="text-rose-cta flex-shrink-0 mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-2xl p-7 text-white">
              <p className="font-serif text-xl mb-1">Elisa Moratelli</p>
              <p className="text-xs font-sans text-rose-cipria uppercase tracking-widest mb-3">
                Consulente del Lavoro · Rovereto (TN)
              </p>
              <p className="text-sm font-sans text-white/60 leading-relaxed mb-5">
                Iscritta all&apos;Albo dei Consulenti del Lavoro. Seguo aziende e PMI di Rovereto, Trento e
                di tutto il Trentino.
              </p>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
              >
                Contattami <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-rose-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-serif text-4xl text-anthracite leading-snug">Domande frequenti</h2>
          </AnimatedSection>
          <div className="space-y-5">
            {s.faq.map((f, i) => (
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

      {/* Altri servizi + edilizia */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-anthracite mb-8">Altri servizi</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {altri.map((a, i) => {
              const AIcon = icons[a.icon];
              return (
                <AnimatedSection key={a.slug} delay={i * 0.08}>
                  <Link
                    href={`/servizi/${a.slug}`}
                    className="group flex flex-col h-full p-6 rounded-2xl bg-card-bg border border-border-light hover:border-rose-cipria hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta mb-4">
                      <AIcon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug group-hover:text-rose-cta transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm font-sans text-text-muted leading-relaxed flex-1">{a.short}</p>
                  </Link>
                </AnimatedSection>
              );
            })}
            <AnimatedSection delay={0.24}>
              <Link
                href="/edilizia"
                className="group flex flex-col h-full p-6 rounded-2xl bg-navy border border-navy hover:border-rose-cipria transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-rose-cipria mb-4">
                  <HardHat size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-white mb-2 leading-snug">Settore edilizia</h3>
                <p className="text-sm font-sans text-white/60 leading-relaxed flex-1">
                  CCNL Edilizia, Cassa Edile, operai e cantieri: consulenza specializzata per imprese edili.
                </p>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
