"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const faq = [
  {
    domanda: "Cosa fa un Consulente del Lavoro?",
    risposta:
      "Il Consulente del Lavoro è un professionista iscritto all'Albo che si occupa di tutto ciò che riguarda la gestione dei rapporti di lavoro: elaborazione dei cedolini paga, assunzioni, cessazioni, trasformazioni contrattuali, adempimenti verso INPS e INAIL, consulenza su contratti e normativa del lavoro. Non è solo un elaboratore di buste paga: è un punto di riferimento per il datore di lavoro su tutte le decisioni legate al personale.",
  },
  {
    domanda: "Quando serve un Consulente del Lavoro?",
    risposta:
      "Serve sempre, non solo nelle situazioni di emergenza. Un Consulente del Lavoro supporta l'azienda nella gestione quotidiana del personale, garantendo che ogni adempimento sia rispettato e riducendo il rischio di errori e sanzioni. È particolarmente utile in fase di assunzione, in caso di trasformazioni contrattuali, cessazioni, controlli ispettivi e ogni volta che ci si trova di fronte a una situazione normativa complessa.",
  },
  {
    domanda: "Come funziona la gestione delle assunzioni?",
    risposta:
      "Quando si assume un dipendente, è necessario inviare la comunicazione obbligatoria di assunzione al Centro per l'Impiego entro il giorno precedente l'inizio del rapporto, scegliere il contratto collettivo applicabile, definire inquadramento e livello, redigere la lettera di assunzione e impostare il profilo in busta paga. Mi occupo di tutto questo, garantendo che l'assunzione sia conforme alla legge fin dal primo giorno.",
  },
  {
    domanda: "Cosa bisogna fare in caso di cessazione del rapporto di lavoro?",
    risposta:
      "In caso di cessazione del rapporto di lavoro — per dimissioni, scadenza del termine o accordo consensuale — è necessario elaborare il cedolino di fine rapporto con le ultime spettanze (compresi TFR, ratei di ferie, 13ª e 14ª), effettuare gli ultimi adempimenti verso gli enti e conservare la documentazione. Mi occupo dell'intero processo.",
  },
  {
    domanda: "Come si gestisce una trasformazione contrattuale?",
    risposta:
      "Una trasformazione contrattuale (ad esempio da tempo determinato a indeterminato, o una variazione d'orario) richiede un atto scritto tra le parti, comunicazioni agli enti e aggiornamento del profilo in busta paga. Gestisco tutta la procedura garantendo la corretta documentazione e le comunicazioni obbligatorie.",
  },
  {
    domanda: "Come vengono gestite le paghe nel settore edilizia?",
    risposta:
      "Le buste paga nel settore edile seguono il CCNL di riferimento (Artigiani o Industria), con voci specifiche come i contributi alla Cassa Edile, le indennità di cantiere e le modalità particolari di gestione di ferie, malattia e infortuni. Ogni mese si effettua anche la denuncia alla Cassa Edile. Conosco le specificità del settore e gestisco tutto questo in modo preciso e puntuale.",
  },
];

function FaqItem({ domanda, risposta }: { domanda: string; risposta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-light last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans font-600 text-base text-anthracite leading-snug">{domanda}</span>
        <ChevronDown
          size={18}
          className={`text-rose-cta flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm font-sans text-text-muted leading-relaxed">{risposta}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.domanda,
              acceptedAnswer: { "@type": "Answer", text: f.risposta },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-rose-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cta mb-4">
              FAQ
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-anthracite leading-tight mb-5">
              Domande frequenti sulla consulenza del lavoro
            </h1>
            <p className="text-lg font-sans text-text-muted leading-relaxed">
              Risposte chiare alle domande più comuni su buste paga, assunzioni, cessazioni,
              trasformazioni contrattuali e gestione del personale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-border-light px-7 py-2">
              {faq.map((f) => (
                <FaqItem key={f.domanda} domanda={f.domanda} risposta={f.risposta} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl text-anthracite mb-3 leading-snug">
              Hai altre domande?
            </h2>
            <p className="text-base font-sans text-text-muted mb-7">
              Contattami direttamente. Rispondo in modo chiaro e senza impegno.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-rose-cta hover:bg-rose-hover text-white font-sans font-600 text-sm px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Contattami <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
