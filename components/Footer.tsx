import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const linkRapidi = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/per-aziende", label: "Per aziende" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contatti", label: "Contatti" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — About */}
          <div>
            <p className="font-serif text-xl font-600 text-white mb-1">Elisa Moratelli</p>
            <p className="text-rose-cipria text-xs tracking-widest uppercase mb-4 font-sans">
              Consulente del Lavoro
            </p>
            <p className="text-white/60 text-sm font-sans leading-relaxed">
              Supporto professionale nella gestione del personale per aziende, PMI e professionisti.
            </p>
          </div>

          {/* Col 2 — Link rapidi */}
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

          {/* Col 3 — Contatti */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 font-sans mb-4">
              Contatti
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0464356826"
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
            all&apos;Albo dei Consulenti del Lavoro
          </p>
          <div className="flex gap-4">
            <span className="text-white/30 text-xs font-sans">Privacy Policy</span>
            <span className="text-white/30 text-xs font-sans">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
