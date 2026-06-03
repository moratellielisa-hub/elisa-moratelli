"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const settori = ["Edilizia", "Artigianato", "Commercio", "Servizi", "Industria", "Studio professionale", "Altro"];
const numDipendenti = ["1–2", "3–5", "6–15", "16–50", "Oltre 50"];
const serviziOptions = [
  "Elaborazione cedolini paga",
  "Assunzioni",
  "Cessazioni",
  "Licenziamenti",
  "Trasformazioni contrattuali",
  "Dichiarativi annui",
  "Pratiche HR",
  "Consulenza del lavoro",
  "Gestione adempimenti",
  "Consulenza buste paga",
  "Altro",
];

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-rose-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-xl">
            <p className="text-xs font-sans font-500 uppercase tracking-widest text-rose-cta mb-4">
              Contatti
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-anthracite leading-tight mb-5">
              Parliamo della tua azienda
            </h1>
            <p className="text-lg font-sans text-text-muted leading-relaxed">
              Contattami senza impegno. Valutiamo insieme la tua situazione e capiamo se posso
              essere il supporto giusto per la tua azienda.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          {/* Form */}
          <AnimatedSection direction="left">
            {submitted ? (
              <div className="bg-rose-soft rounded-2xl p-10 border border-rose-cipria/30 text-center">
                <CheckCircle className="text-rose-cta mx-auto mb-4" size={40} strokeWidth={1.5} />
                <h2 className="font-serif text-2xl text-anthracite mb-3">
                  Richiesta inviata con successo.
                </h2>
                <p className="text-base font-sans text-text-muted leading-relaxed mb-2">
                  Ho ricevuto il tuo messaggio. Ti contatterò entro 24–48 ore lavorative.
                </p>
                <p className="text-sm font-sans text-text-muted">
                  Puoi anche scrivermi via email o chiamarmi direttamente.
                </p>
                <a
                  href="mailto:info@elisamoratelli.it"
                  className="inline-flex items-center gap-2 mt-6 bg-rose-cta hover:bg-rose-hover text-white font-sans font-600 text-sm px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <Mail size={15} />
                  Scrivimi una mail
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Il tuo nome"
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Il tuo cognome"
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                    Azienda / Attività
                  </label>
                  <input
                    type="text"
                    placeholder="Nome dell'azienda o attività"
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="La tua email"
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Il tuo telefono"
                      className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      Settore
                    </label>
                    <select className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors">
                      <option value="">Seleziona...</option>
                      {settori.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      N. dipendenti
                    </label>
                    <select className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors">
                      <option value="">Seleziona...</option>
                      {numDipendenti.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                    Servizio richiesto
                  </label>
                  <select className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors">
                    <option value="">Seleziona...</option>
                    {serviziOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                    Messaggio
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descrivimi brevemente la tua situazione o ciò di cui hai bisogno"
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-rose-cta hover:bg-rose-hover disabled:opacity-60 text-white font-sans font-600 text-sm px-6 py-3.5 rounded-lg transition-colors duration-200"
                  >
                    {loading ? "Invio in corso..." : "Invia la richiesta"}
                  </button>
                  <p className="text-xs font-sans text-text-muted mt-2.5 text-center">
                    Tratto i tuoi dati nel rispetto della normativa sulla privacy.
                  </p>
                </div>
              </form>
            )}
          </AnimatedSection>

          {/* Info contatti */}
          <AnimatedSection direction="right" delay={0.15} className="space-y-6">
            {/* Telefono */}
            <div className="bg-rose-soft rounded-2xl p-7 border border-rose-cipria/30">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-cipria/40 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-rose-cta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-anthracite mb-1">Telefono</h3>
                  <p className="text-sm font-sans text-text-muted mb-3">
                    Disponibile dal lunedì al venerdì, negli orari di studio.
                  </p>
                  <a
                    href="tel:0464356826"
                    className="inline-flex items-center gap-2 bg-rose-cta hover:bg-rose-hover text-white font-sans font-600 text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                  >
                    <Phone size={14} />
                    0464 356826
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-7 border border-border-light">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-rose-cta" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-anthracite mb-1">Email</h3>
                  <a
                    href="mailto:info@elisamoratelli.it"
                    className="text-sm font-sans text-rose-cta hover:underline"
                  >
                    info@elisamoratelli.it
                  </a>
                  <p className="text-sm font-sans text-text-muted mt-2">
                    Dopo il primo contatto fisseremo una breve chiamata o un incontro (anche da
                    remoto). Nessun impegno, nessuna fretta.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
