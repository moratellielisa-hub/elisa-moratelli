"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/servizi", label: "Servizi" },
  { href: "/per-aziende", label: "Per aziende" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white border-b border-border-light"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-700 text-anthracite tracking-tight">
            Elisa Moratelli
          </span>
          <span className="text-[10px] font-sans font-bold text-anthracite/50 tracking-[0.2em] uppercase">
            Consulente del Lavoro
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-sans font-500 text-anthracite/80 hover:text-rose-cta transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Link
            href="/contatti"
            className="bg-rose-cta hover:bg-rose-hover text-white text-sm font-sans font-600 px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Richiedi una consulenza
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-anthracite p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border-light px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-anthracite hover:text-rose-cta transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contatti"
            className="bg-rose-cta text-white text-sm font-sans font-600 px-5 py-2.5 rounded-lg text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Richiedi una consulenza
          </Link>
        </div>
      )}
    </header>
  );
}
