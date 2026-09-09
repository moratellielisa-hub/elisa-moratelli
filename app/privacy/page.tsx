import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali del sito elisamoratelli.it ai sensi del Regolamento UE 2016/679 (GDPR).",
  alternates: { canonical: "https://elisamoratelli.it/privacy" },
  robots: { index: true, follow: true },
};

const sezioni: { titolo: string; testo: string[] }[] = [
  {
    titolo: "Titolare del trattamento",
    testo: [
      "Il Titolare del trattamento è Elisa Moratelli, Consulente del Lavoro iscritta all'Albo dei Consulenti del Lavoro di Trento con il n. 351, con studio in Via Parteli 19, 38068 Rovereto (TN). Per qualsiasi richiesta relativa ai dati personali è possibile scrivere a info@elisamoratelli.it o telefonare allo 0464 356826.",
    ],
  },
  {
    titolo: "Quali dati raccogliamo",
    testo: [
      "Dati forniti volontariamente tramite il modulo di contatto: nome, cognome, email, telefono, nome dell'azienda, settore, numero di dipendenti, servizio richiesto e contenuto del messaggio.",
      "Dati di navigazione raccolti in forma aggregata e anonima per finalità statistiche (pagine visitate, paese, tipo di dispositivo). Questo sito utilizza Vercel Web Analytics, che non fa uso di cookie e non identifica il singolo visitatore.",
    ],
  },
  {
    titolo: "Finalità e base giuridica",
    testo: [
      "I dati inviati tramite il modulo di contatto sono trattati esclusivamente per rispondere alla richiesta e, se richiesto, per formulare un preventivo o fissare un appuntamento. La base giuridica è l'esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6, par. 1, lett. b GDPR).",
      "I dati statistici anonimi sono trattati sulla base del legittimo interesse del Titolare a conoscere l'andamento del sito (art. 6, par. 1, lett. f GDPR).",
    ],
  },
  {
    titolo: "Modalità di trattamento e conservazione",
    testo: [
      "I messaggi inviati dal modulo di contatto vengono recapitati via email al Titolare e conservati per il tempo necessario a gestire la richiesta e, in caso di avvio di un rapporto professionale, per la durata dello stesso e per gli obblighi di legge successivi. Le richieste che non si traducono in un incarico sono cancellate entro 12 mesi.",
    ],
  },
  {
    titolo: "Destinatari e fornitori",
    testo: [
      "Per il funzionamento del sito il Titolare si avvale di fornitori che agiscono come responsabili del trattamento: Vercel Inc. (hosting del sito e statistiche anonime) e Resend Inc. (servizio di recapito delle email del modulo di contatto). Questi fornitori hanno sede negli Stati Uniti e trattano i dati sulla base delle clausole contrattuali standard approvate dalla Commissione Europea e, ove applicabile, del Data Privacy Framework UE-USA.",
      "I dati non sono diffusi né ceduti a terzi per finalità di marketing.",
    ],
  },
  {
    titolo: "Cookie",
    testo: [
      "Questo sito non utilizza cookie di profilazione né cookie di terze parti. Non vengono installati cookie tecnici persistenti. Per questo motivo non è richiesto alcun banner di consenso.",
    ],
  },
  {
    titolo: "Diritti dell'interessato",
    testo: [
      "In ogni momento è possibile esercitare i diritti previsti dagli artt. 15–22 del GDPR: accesso ai dati, rettifica, cancellazione, limitazione del trattamento, portabilità e opposizione. È inoltre possibile proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
      "Per esercitare i diritti è sufficiente scrivere a info@elisamoratelli.it.",
    ],
  },
  {
    titolo: "Aggiornamenti",
    testo: [
      "La presente informativa può essere aggiornata. La versione in vigore è sempre quella pubblicata su questa pagina. Ultimo aggiornamento: settembre 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-16 bg-rose-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-sans font-medium uppercase tracking-widest text-rose-cta mb-4">
            Informativa
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-anthracite leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base font-sans text-text-muted leading-relaxed">
            Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del
            Regolamento UE 2016/679 (GDPR) per gli utenti del sito elisamoratelli.it.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {sezioni.map((s) => (
            <div key={s.titolo} className="mb-10">
              <h2 className="font-serif text-2xl text-anthracite mb-3">{s.titolo}</h2>
              {s.testo.map((t) => (
                <p key={t} className="text-base font-sans text-text-muted leading-relaxed mb-3">
                  {t}
                </p>
              ))}
            </div>
          ))}
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 text-rose-cta font-sans font-medium text-sm hover:underline"
          >
            Torna ai contatti
          </Link>
        </div>
      </section>
    </>
  );
}
