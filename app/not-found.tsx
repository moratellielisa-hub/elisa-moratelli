import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="pt-40 pb-28 bg-rose-soft min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-4">
          Errore 404
        </p>
        <h1 className="font-serif text-5xl lg:text-6xl text-anthracite leading-tight mb-5">
          Pagina non trovata
        </h1>
        <p className="text-base font-sans text-text-muted leading-relaxed mb-10">
          La pagina che cerchi non esiste o è stata spostata. Puoi tornare alla home, consultare i
          servizi oppure contattarmi direttamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-rose-cta hover:bg-rose-hover text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-200"
          >
            Torna alla home
          </Link>
          <Link
            href="/servizi"
            className="inline-flex items-center justify-center gap-2 border border-anthracite/30 text-anthracite hover:border-rose-cta hover:text-rose-cta font-sans font-medium text-sm px-7 py-3.5 rounded-lg transition-all duration-200"
          >
            Vedi i servizi <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
