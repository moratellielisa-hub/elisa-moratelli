import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedLines from "@/components/AnimatedLines";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog | Guide su Buste Paga, Assunzioni e Gestione del Personale",
  description:
    "Guide pratiche per datori di lavoro: buste paga, assunzioni, costi del personale e normativa del lavoro spiegati in modo chiaro da una Consulente del Lavoro iscritta all'Albo.",
  alternates: { canonical: "https://elisamoratelli.it/blog" },
  openGraph: {
    url: "https://elisamoratelli.it/blog",
    title: "Blog | Elisa Moratelli Consulente del Lavoro",
    description:
      "Guide pratiche per datori di lavoro: buste paga, assunzioni, costi del personale e normativa del lavoro.",
  },
};

export default function BlogPage() {
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
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://elisamoratelli.it/blog" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 bg-navy relative overflow-hidden">
        <AnimatedLines />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cipria mb-5">
              Blog
            </p>
            <h1 className="font-serif text-5xl lg:text-7xl text-white leading-[1.05] mb-6 max-w-3xl">
              Guide per datori di lavoro
            </h1>
            <p className="text-lg font-sans text-white/60 leading-relaxed max-w-xl">
              Buste paga, assunzioni, costi del personale e normativa del lavoro,
              spiegati in modo chiaro. Senza tecnicismi.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articoli */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {articles.map((a, i) => (
              <AnimatedSection key={a.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col lg:flex-row lg:items-center gap-6 p-8 rounded-2xl bg-card-bg border border-border-light hover:border-rose-cipria hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-sans text-text-muted">
                        {new Date(a.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-sans text-text-muted">
                        <Clock size={12} /> {a.readingTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl text-anthracite mb-3 leading-snug group-hover:text-rose-cta transition-colors duration-300">
                      {a.title}
                    </h2>
                    <p className="text-sm font-sans text-text-muted leading-relaxed max-w-2xl">
                      {a.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-1 text-rose-cta text-sm font-sans font-medium group-hover:gap-2 transition-all duration-200">
                    Leggi l&apos;articolo <ArrowRight size={14} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-rose-cta">
        <AnimatedLines variant="pink" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-5xl text-white mb-4 leading-snug">
              Hai una domanda sulla tua azienda?
            </h2>
            <p className="text-base font-sans text-white/80 mb-8">
              Contattami senza impegno: valutiamo insieme la tua situazione.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-rose-cta font-sans font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Richiedi una consulenza <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
