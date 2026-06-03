import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tagline?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href, tagline }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-5 p-9 rounded-2xl bg-card-bg border border-border-light hover:border-rose-cipria hover:shadow-xl hover:shadow-rose-cipria/15 hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
    >
      <div className="w-11 h-11 rounded-xl bg-rose-soft flex items-center justify-center text-rose-cta group-hover:bg-rose-cipria/40 transition-colors duration-300">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug">{title}</h3>
        {tagline && (
          <p className="text-xs font-sans font-500 text-text-muted uppercase tracking-wider mb-2">
            {tagline}
          </p>
        )}
        <p className="text-sm font-sans text-text-muted leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-1 text-rose-cta text-sm font-sans font-500 group-hover:gap-2 transition-all duration-200">
        Scopri il servizio <ArrowRight size={14} />
      </div>
    </Link>
  );
}
