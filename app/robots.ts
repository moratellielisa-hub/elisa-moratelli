import type { MetadataRoute } from "next";

const BASE = "https://elisamoratelli.it";

// Crawler dei motori AI (ChatGPT, Perplexity, Claude, Gemini, Bing Copilot):
// li autorizziamo esplicitamente perché vogliamo comparire nelle risposte generative.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "Bytespider",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
