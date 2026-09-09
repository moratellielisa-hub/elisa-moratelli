import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const linkRapidi = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/edilizia", label: "Settore edilizia" },
  { href: "/per-aziende", label: "Per aziende" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contatti", label: "Contatti" },
];

const serviziLink = [
  { href: "/servizi/elaborazione-cedolini-paga", label: "Elaborazione buste paga" },
  { href: "/servizi/pratiche-hr", label: "Assunzioni e pratiche HR" },
  { href: "/servizi/trasformazioni-contrattuali", label: "Trasformazioni contrattuali" },
  { href: "/servizi/cessazioni-rapporto-di-lavoro", label: "Cessazioni e TFR" },
  { href: "/servizi/dichiarativi-annui", label: "Dichiarativi annui" },
  { href: "/servizi/consulenza-del-lavoro", label: "Consulenza del lavoro" },
  { href: "/servizi/consulenza-buste-paga", label: "Consulenza buste paga" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — About */}
          <div>
            <p className="font-serif text-xl font-600 text-white mb-1">Elisa Moratelli</p>
            <p className="text-rose-cipria text-xs tracking-widest uppercase mb-4 font-sans">
              Consulente del Lavoro · Rovereto
            </p>
            <p className="text-white/60 text-sm font-sans leading-relaxed">
              Buste paga, assunzioni, contratti e adempimenti per aziende, PMI, artigiani e
              professionisti di Rovereto, Trento e di tutto il Trentino.
            </p>
          </div>

          {/* Col 2 — Servizi */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-sans mb-4">Servizi</p>
            <ul className="space-y-2">
              {serviziLink.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-rose-cipria transition-colors font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigazione */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-sans mb-4">
              Navigazione
            </p>
            <ul className="space-y-2">
              {linkRapidi.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-rose-cipria transition-colors font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contatti (NAP: nome, indirizzo, telefono — coerente con Google Business Profile) */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-sans mb-4">Contatti</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Via+Parteli+19,+38068+Rovereto+TN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-rose-cipria transition-colors font-sans"
                >
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  <span>
                    Studio CDL Group
                    <br />
                    Via Parteli 19
                    <br />
                    38068 Rovereto (TN)
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+390464356826"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-rose-cipria transition-colors font-sans"
                >
                  <Phone size={14} />
                  0464 356826
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@elisamoratelli.it"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-rose-cipria transition-colors font-sans"
                >
                  <Mail size={14} />
                  info@elisamoratelli.it
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70 font-sans">
                <Clock size={14} className="flex-shrink-0 mt-0.5" />
                <span>
                  Lun–Gio 8:30–12:30, 14:30–17:00
                  <br />
                  Ven 8:30–12:30
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contatti"
                className="inline-block bg-rose-cta hover:bg-rose-hover text-white text-sm font-sans font-600 px-5 py-2.5 rounded-lg transition-colors duration-200"
              >
                Richiedi una consulenza
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs font-sans">
            © {new Date().getFullYear()} Elisa Moratelli — Consulente del Lavoro | Iscritta
            all&apos;Albo dei Consulenti del Lavoro di Trento n. 351
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white/40 hover:text-rose-cipria text-xs font-sans transition-colors">
              Privacy Policy
            </Link>
            <a
              href="https://www.linkedin.com/in/elisa-moratelli-79a2752aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-rose-cipria text-xs font-sans transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.cdlgroup.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-rose-cipria text-xs font-sans transition-colors"
            >
              CDL Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
