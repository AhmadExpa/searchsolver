import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
app.use(express.json());
const PORT = Number(process.env.PORT) || 3000;

type ChatRole = "user" | "assistant";

interface ChatHistoryMessage {
  role: ChatRole;
  content: string;
}

interface RouteSuggestion {
  label: string;
  path: string;
  reason: string;
}

const fallbackFaqs = [
  {
    q: "What services does Markadeo offer?",
    a: "We provide web design, Shopify and WordPress development, Amazon creatives, digital marketing, AI content creation, branding, and custom software solutions.",
  },
  {
    q: "Do you build Shopify stores?",
    a: "Yes. We design and develop conversion-focused Shopify and WooCommerce stores.",
  },
  {
    q: "Do you create Amazon A+ Content?",
    a: "Yes. We design Amazon listing images, A+ Content, Brand Stories, and Storefronts.",
  },
  {
    q: "Do you create TikTok and social media ads?",
    a: "Yes. We produce TikTok ads, reels, UGC-style ads, and social media video content.",
  },
  {
    q: "Do you offer custom software development?",
    a: "Yes. We build custom CRM systems, SaaS platforms, web apps, portals, API integrations, and automation tools.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Yes. Every website is built responsive across mobile, tablet, and desktop.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer maintenance, updates, and technical support after launch.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. You can contact Markadeo for a free consultation through WhatsApp or the contact form.",
  },
];

const routeTargets: Array<RouteSuggestion & { keywords: string[] }> = [
  {
    label: "Open Pricing",
    path: "/#pricing",
    reason: "Pricing plans are listed on the homepage pricing section.",
    keywords: ["price", "pricing", "cost", "package", "packages", "plan", "plans", "weekly", "budget"],
  },
  {
    label: "Open Contact Form",
    path: "/contact#contact-form",
    reason: "The contact page is the best place to start a project enquiry.",
    keywords: ["contact", "call", "whatsapp", "quote", "proposal", "consultation", "book", "meeting", "start"],
  },
  {
    label: "Open Portfolio",
    path: "/work#portfolio",
    reason: "Portfolio examples are shown on the Work page.",
    keywords: ["portfolio", "work", "examples", "case study", "case studies", "sample", "samples", "show me"],
  },
  {
    label: "Open Web & App",
    path: "/web-app-design",
    reason: "Websites and app builds have a dedicated Web & App page.",
    keywords: ["website", "web app", "webapp", "app", "ui", "ux", "frontend", "interface", "mobile app"],
  },
  {
    label: "Open Shopify & eCommerce",
    path: "/services#ecommerce",
    reason: "Shopify and eCommerce details are in the services section.",
    keywords: ["shopify", "ecommerce", "e-commerce", "woocommerce", "online store", "store"],
  },
  {
    label: "Open WordPress",
    path: "/services#wordpress",
    reason: "WordPress details are in the services section.",
    keywords: ["wordpress", "plugin", "theme", "cms"],
  },
  {
    label: "Open Amazon Creative Services",
    path: "/services#amazon",
    reason: "Amazon listing and A+ Content services are covered there.",
    keywords: ["amazon", "a+ content", "listing", "storefront", "marketplace"],
  },
  {
    label: "Open TikTok & Video",
    path: "/services#tiktok",
    reason: "TikTok ads, reels, and short-form video services are covered there.",
    keywords: ["tiktok", "reel", "reels", "short-form", "ugc", "video", "videos"],
  },
  {
    label: "Open AI Ads",
    path: "/services#ai",
    reason: "AI-powered ad and video services are covered there.",
    keywords: ["ai", "ai ads", "ai video", "voiceover", "influencer"],
  },
  {
    label: "Open Software Development",
    path: "/services#software",
    reason: "Custom software services are covered there.",
    keywords: ["software", "crm", "erp", "saas", "portal", "automation", "api"],
  },
  {
    label: "Open Branding & Print",
    path: "/services#print",
    reason: "Brand identity, logo, and print services are covered there.",
    keywords: ["branding", "brand", "logo", "identity", "print", "flyer", "brochure", "business card", "packaging"],
  },
  {
    label: "Open FAQ",
    path: "/#faq",
    reason: "Common questions are answered in the FAQ section.",
    keywords: ["faq", "question", "questions", "help", "support"],
  },
  {
    label: "Open About",
    path: "/about",
    reason: "The About page explains Markadeo's approach.",
    keywords: ["about", "who are you", "company", "agency", "team", "why choose"],
  },
];

const faqStopWords = new Set(["what", "does", "offer", "offers", "markadeo", "your", "with", "from", "this", "that"]);

function normalizeLookupWord(word: string): string {
  return word.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/s$/, "");
}

function inferRouteSuggestion(message: string): RouteSuggestion | null {
  const query = message.toLowerCase();
  let best: { score: number; target: RouteSuggestion } | null = null;

  for (const target of routeTargets) {
    const score = target.keywords.reduce((total, keyword) => {
      return query.includes(keyword) ? total + Math.max(1, keyword.split(/\s+/).length) : total;
    }, 0);

    if (score > 0 && (!best || score > best.score)) {
      const { keywords: _keywords, ...suggestion } = target;
      best = { score, target: suggestion };
    }
  }

  return best?.target ?? null;
}

function shouldAutoNavigate(message: string, suggestion: RouteSuggestion | null): boolean {
  if (!suggestion) return false;
  return /\b(show|open|take|go|send|route|navigate|visit|view|see)\b/i.test(message);
}

function fallbackAnswer(message: string, suggestion: RouteSuggestion | null): string {
  const queryWords = new Set(
    message
      .toLowerCase()
      .split(/\W+/)
      .map(normalizeLookupWord)
      .filter((word) => word.length > 3 && !faqStopWords.has(word)),
  );

  if (shouldAutoNavigate(message, suggestion)) {
    return `${suggestion!.reason} I can take you there now.`;
  }

  const faq = fallbackFaqs
    .map((item) => {
      const score = item.q
        .split(/\W+/)
        .map(normalizeLookupWord)
        .filter((word) => word.length > 3 && !faqStopWords.has(word))
        .reduce((total, word) => total + (queryWords.has(word) ? 1 : 0), 0);

      return { item, score };
    })
    .sort((a, b) => b.score - a.score)[0];

  if (faq && faq.score > 0) return faq.item.a;

  if (suggestion) {
    return `${suggestion.reason} I can take you there now.`;
  }

  return "I can help with Markadeo services, pricing, portfolio examples, project enquiries, websites, Shopify, WordPress, branding, Amazon creatives, TikTok content, AI ads, and software development.";
}

function sanitizeHistory(history: unknown): ChatHistoryMessage[] {
  if (!Array.isArray(history)) return [];

  return history
    .filter((item): item is ChatHistoryMessage => {
      return (
        item &&
        typeof item === "object" &&
        ((item as ChatHistoryMessage).role === "user" || (item as ChatHistoryMessage).role === "assistant") &&
        typeof (item as ChatHistoryMessage).content === "string"
      );
    })
    .slice(-6)
    .map((item) => ({
      role: item.role,
      content: item.content.slice(0, 700),
    }));
}

function buildKnowledgePrompt(suggestion: RouteSuggestion | null): string {
  const faqs = fallbackFaqs.map((item) => `Q: ${item.q}\nA: ${item.a}`).join("\n\n");
  const routes = routeTargets
    .map((item) => `${item.label}: ${item.path} (${item.reason})`)
    .join("\n");

  return [
    "You are Markadeo's website assistant.",
    "Answer only about Markadeo, its services, pricing, portfolio, contact options, and project fit.",
    "Keep answers concise: 1-4 short sentences.",
    "Do not invent guaranteed sales numbers or fake client results.",
    "If a user asks to go somewhere, say you can open the relevant section and keep the answer brief.",
    suggestion ? `Current best route suggestion: ${suggestion.label} ${suggestion.path}.` : "No route suggestion has been selected yet.",
    "",
    "Markadeo services: Digital & Print Media, Website Design & Development, WordPress Development, Shopify & eCommerce Solutions, Amazon Creative Services, TikTok Ads & Video Production, AI Ads & AI Videos, Software Development.",
    "Pricing on the site: Essentials Pack £59/week, Extra Plan £109/week, Ultra Premium £159/week. Paid advertisement campaigns are scoped separately.",
    "",
    "FAQ knowledge:",
    faqs,
    "",
    "Available website routes:",
    routes,
  ].join("\n");
}

async function askGemini(message: string, history: ChatHistoryMessage[], suggestion: RouteSuggestion | null): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const contents = [
    ...history.map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: item.content }],
    })),
    {
      role: "user",
      parts: [{ text: message }],
    },
  ];

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildKnowledgePrompt(suggestion) }],
      },
      contents,
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 360,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini request failed: ${response.status} ${errorText.slice(0, 240)}`);
  }

  const data = await response.json() as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const text = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join("\n")
    .trim();

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text;
}

app.post("/api/chat", async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";

  if (!message) {
    res.status(400).json({ error: "Message is required." });
    return;
  }

  if (message.length > 1000) {
    res.status(400).json({ error: "Message is too long." });
    return;
  }

  const history = sanitizeHistory(req.body?.history);
  const routeSuggestion = inferRouteSuggestion(message);

  try {
    const reply = await askGemini(message, history, routeSuggestion);
    res.json({
      reply,
      routeSuggestion,
      shouldAutoNavigate: shouldAutoNavigate(message, routeSuggestion),
      source: "gemini",
    });
  } catch (error) {
    console.warn("[Markadeo] Chat fallback:", error instanceof Error ? error.message : error);
    res.json({
      reply: fallbackAnswer(message, routeSuggestion),
      routeSuggestion,
      shouldAutoNavigate: shouldAutoNavigate(message, routeSuggestion),
      source: "fallback",
    });
  }
});

// Configure Vite middleware (dev) or static file serving (prod),
// with an SPA fallback so client routes (e.g. /services) deep-link.
async function bootstrapServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Markadeo] Server running on http://localhost:${PORT}`);
  });
}

bootstrapServer();
