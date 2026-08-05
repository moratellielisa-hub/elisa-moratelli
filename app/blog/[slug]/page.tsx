import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { articles, getArticle } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `https://elisamoratelli.it/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url: `https://elisamoratelli.it/blog/${article.slug}`,
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.date,
      authors: ["Elisa Moratelli"],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const altri = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.metaDescription,
              datePublished: article.date,
              dateModified: article.date,
              inLanguage: "it-IT",
              mainEntityOfPage: `https://elisamoratelli.it/blog/${article.slug}`,
              author: {
                "@type": "Person",
                "@id": "https://elisamoratelli.it/chi-sono#person",
                name: "Elisa Moratelli",
                jobTitle: "Consulente del Lavoro",
                url: "https://elisamoratelli.it/chi-sono",
              },
              publisher: {
                "@type": "Organization",
                name: "Elisa Moratelli — Consulente del Lavoro",
                url: "https://elisamoratelli.it",
              },
            },
            ...(article.faq
              ? [
                  {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: article.faq.map((f) => ({
                      "@type": "Question",
                      name: f.domanda,
                      acceptedAnswer: { "@type": "Answer", text: f.risposta },
                    })),
                  },
                ]
              : []),
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://elisamoratelli.it" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://elisamoratelli.it/blog" },
                { "@type": "ListItem", position: 3, name: article.title, item: `https://elisamoratelli.it/blog/${article.slug}` },
              ],
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-14 lg:pt-40 lg:pb-16 bg-rose-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-text-muted hover:text-rose-cta transition-colors mb-6"
            >
              <ArrowLeft size={13} /> Torna al blog
            </Link>
            <h1 className="font-serif text-4xl lg:text-5xl text-anthracite leading-tight mb-5">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-sans text-text-muted">
              <span>Elisa Moratelli — Consulente del Lavoro</span>
              <span>·</span>
              <span>
                {new Date(article.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {article.readingTime}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contenuto */}
      <article className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {article.sections.map((s, i) => (
            <AnimatedSection key={i} delay={Math.min(i * 0.05, 0.2)}>
              {s.heading && (
                <h2 className="font-serif text-2xl lg:text-3xl text-anthracite mt-10 mb-4 leading-snug">
                  {s.heading}
                </h2>
              )}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-base font-sans text-text-muted leading-relaxed mb-5">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mb-6 space-y-3">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-cta mt-2 flex-shrink-0" />
                      <span className="text-base font-sans text-text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          ))}

          {/* FAQ */}
          {article.faq && (
            <AnimatedSection>
              <div className="mt-12 bg-rose-soft rounded-2xl p-8 border border-rose-cipria/30">
                <h2 className="font-serif text-2xl text-anthracite mb-6">Domande frequenti</h2>
                {article.faq.map((f) => (
                  <div key={f.domanda} className="mb-6 last:mb-0">
                    <h3 className="font-sans font-semibold text-base text-anthracite mb-2">{f.domanda}</h3>
                    <p className="text-sm font-sans text-text-muted leading-relaxed">{f.risposta}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Box autore */}
          <AnimatedSection>
            <div className="mt-12 flex items-start gap-5 p-7 rounded-2xl bg-navy">
              <div>
                <p className="font-serif text-lg text-white mb-1">Elisa Moratelli</p>
                <p className="text-xs font-sans text-rose-cipria uppercase tracking-widest mb-3">
                  Consulente del Lavoro · CDL Group · Rovereto
                </p>
                <p className="text-sm font-sans text-white/60 leading-relaxed mb-4">
                  Iscritta all&apos;Albo dei Consulenti del Lavoro. Affianco aziende e PMI nella
                  gestione del personale: buste paga, assunzioni, adempimenti e consulenza continuativa.
                </p>
                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Richiedi una consulenza <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* Altri articoli */}
      {altri.length > 0 && (
        <section className="py-16 bg-rose-soft">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-serif text-3xl text-anthracite mb-8">Altri articoli</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {altri.map((a, i) => (
                <AnimatedSection key={a.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col h-full p-7 rounded-2xl bg-white border border-border-light hover:border-rose-cipria hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="font-serif text-xl text-anthracite mb-3 leading-snug group-hover:text-rose-cta transition-colors duration-300">
                      {a.title}
                    </h3>
                    <p className="text-sm font-sans text-text-muted leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="flex items-center gap-1 text-rose-cta text-sm font-sans font-medium group-hover:gap-2 transition-all duration-200">
                      Leggi <ArrowRight size={13} />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
