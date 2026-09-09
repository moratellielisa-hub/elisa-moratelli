import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { servizi } from "@/lib/servizi";

const BASE = "https://elisamoratelli.it";

// Date reali di ultima modifica: Google ignora i lastmod "sempre oggi".
const UPDATED = new Date("2026-09-09");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/servizi`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...servizi.map((s) => ({
      url: `${BASE}/servizi/${s.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${BASE}/edilizia`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/chi-sono`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/per-aziende`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${BASE}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/contatti`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: UPDATED, changeFrequency: "yearly", priority: 0.2 },
  ];
}
