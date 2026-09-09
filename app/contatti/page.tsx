"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, CheckCircle, MapPin, Clock } from "lucide-react";

// lucide-react non include più le icone dei brand: SVG LinkedIn inline.
function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
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
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      // Campo trappola anti-spam: gli umani non lo vedono, i bot lo compilano.
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      nome: (form.elements.namedItem("nome") as HTMLInputElement).value + " " + (form.elements.namedItem("cognome") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      azienda: (form.elements.namedItem("azienda") as HTMLInputElement).value,
      messaggio: [
        `Telefono: ${(form.elements.namedItem("telefono") as HTMLInputElement).value}`,
        `Settore: ${(form.elements.namedItem("settore") as HTMLSelectElement).value}`,
        `Dipendenti: ${(form.elements.namedItem("dipendenti") as HTMLSelectElement).value}`,
        `Servizio: ${(form.elements.namedItem("servizio") as HTMLSelectElement).value}`,
        `Messaggio: ${(form.elements.namedItem("messaggio") as HTMLTextAreaElement).value}`,
      ].filter(l => !l.endsWith(": ")).join("\n"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Errore durante l'invio. Riprova o scrivimi direttamente a info@elisamoratelli.it");
    } finally {
      setLoading(false);
    }
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
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-500 uppercase tracking-wider text-text-muted mb-1.5">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
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
                      name="cognome"
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
                    name="azienda"
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
                      name="email"
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
                      name="telefono"
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
                    <select name="settore" className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors">
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
                    <select name="dipendenti" className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors">
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
                  <select name="servizio" className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors">
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
                    name="messaggio"
                    rows={4}
                    placeholder="Descrivimi brevemente la tua situazione o ciò di cui hai bisogno"
                    className="w-full border border-border-light rounded-lg px-4 py-3 text-sm font-sans text-anthracite bg-white focus:outline-none focus:border-rose-cta transition-colors resize-none"
                  />
                </div>

                {/* Honeypot: invisibile agli utenti, compilato solo dai bot */}
                <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Sito web</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 accent-rose-cta flex-shrink-0"
                  />
                  <span className="text-xs font-sans text-text-muted leading-relaxed">
                    Ho letto l&apos;
                    <Link href="/privacy" className="text-rose-cta hover:underline" target="_blank">
                      informativa privacy
                    </Link>{" "}
                    e acconsento al trattamento dei dati per essere ricontattato in merito alla mia
                    richiesta. *
                  </span>
                </label>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-rose-cta hover:bg-rose-hover disabled:opacity-60 text-white font-sans font-600 text-sm px-6 py-3.5 rounded-lg transition-colors duration-200"
                  >
                    {loading ? "Invio in corso..." : "Invia la richiesta"}
                  </button>
                  {error && (
                    <p className="text-xs font-sans text-red-500 mt-2.5 text-center">{error}</p>
                  )}
                  <p className="text-xs font-sans text-text-muted mt-2.5 text-center">
                    Rispondo entro 24–48 ore lavorative. Nessun impegno.
                  </p>
                </div>
              </form>
            )}
          </AnimatedSection>

          {/* Info contatti */}
          <AnimatedSection direction="right" delay={0.15} className="space-y-6">
            {/* Studio — indirizzo */}
            <div className="bg-navy rounded-2xl p-7 text-white">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-rose-cipria" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-lg text-white mb-1">Lo studio</h2>
                  <p className="text-sm font-sans text-white/70 leading-relaxed mb-1">
                    Elisa Moratelli — Consulente del Lavoro
                    <br />
                    presso CDL Group
                  </p>
                  <p className="text-sm font-sans text-white/70 leading-relaxed mb-3">
                    Via Parteli 19
                    <br />
                    38068 Rovereto (TN)
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Via+Parteli+19,+38068+Rovereto+TN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans text-rose-cipria hover:underline"
                  >
                    Apri in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Orari */}
            <div className="bg-white rounded-2xl p-7 border border-border-light">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-rose-cta" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-lg text-anthracite mb-2">Orari</h2>
                  <ul className="text-sm font-sans text-text-muted space-y-1">
                    <li>
                      <span className="text-anthracite font-medium">Lunedì – Giovedì</span>
                      <br />
                      8:30 – 12:30 · 14:30 – 17:00
                    </li>
                    <li className="pt-1">
                      <span className="text-anthracite font-medium">Venerdì</span>
                      <br />
                      8:30 – 12:30
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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
                  <a
                    href="https://www.linkedin.com/in/elisa-moratelli-79a2752aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-sans text-rose-cta hover:underline"
                  >
                    <LinkedinIcon size={14} />
                    Profilo LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
