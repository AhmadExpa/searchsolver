/* ==================================================================
   siteData.ts — single source of truth for the whole Markadeo site.

   Markadeo is a creative content house: we get brands established on
   social platforms so they reach a real audience and real visits —
   for a fraction of what marketplaces charge to sell for them.

   NOTE: contact details are PLACEHOLDERS. Swap WHATSAPP_NUMBER and
   EMAIL below for the real values. waLink()/mailLink() build the URLs.
   ================================================================== */

export const CONTACT = {
  /* Digits only, full international format, NO +, spaces or dashes.
     e.g. UK "44 7700 900123" -> "447700900123" */
  WHATSAPP_NUMBER: '447000000000',
  EMAIL: 'hello@markadeo.com',
  INSTAGRAM: 'https://instagram.com/markadeo',
  TIKTOK: 'https://tiktok.com/@markadeo',
  PHONE_DISPLAY: '+44 7000 000000',
} as const;

export function waLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailLink(subject?: string): string {
  const base = `mailto:${CONTACT.EMAIL}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

export const DEFAULT_WA_MESSAGE =
  "Hi Markadeo — I'd like to talk about getting my brand established on social.";

/* ------------------------------------------------------------------
   Navigation — multi-page, Trifid-style (no "Club").
------------------------------------------------------------------ */
export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Web & App', to: '/web-app-design' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

/* ------------------------------------------------------------------
   Stock media (hotlinked — Unsplash images + Coverr/Pexels video).
   All royalty-free / no attribution required. Muted, looping video.
------------------------------------------------------------------ */
/* Pexels CDN direct MP4s — royalty-free, no attribution required,
   hotlinkable and verified loading. All depict content creation /
   filming / studio work (marketing-relevant). Muted/looping in <video>. */
export const MEDIA = {
  // Woman setting up / fixing a camera before filming — studio/content vibe
  heroVideo: 'https://videos.pexels.com/video-files/9032611/9032611-uhd_2560_1440_25fps.mp4',
  heroPoster:
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
  // Creator talking to camera
  reelVideo: 'https://videos.pexels.com/video-files/9032398/9032398-uhd_2560_1440_25fps.mp4',
  // Recording / studio session
  studioVideo: 'https://videos.pexels.com/video-files/8993415/8993415-uhd_2560_1440_30fps.mp4',
  // Creator explaining to camera (used as a subtle dark backdrop)
  threeDVideo: 'https://videos.pexels.com/video-files/6332572/6332572-uhd_2732_1440_25fps.mp4',
  // Working at a laptop / desk
  webVideo: 'https://videos.pexels.com/video-files/8126733/8126733-hd_1920_1080_25fps.mp4',
} as const;

/* ------------------------------------------------------------------
   Services — content-house, Trifid-aligned (6 numbered tiles).
------------------------------------------------------------------ */
export interface Service {
  id: string;
  no: string;
  title: string;
  icon: string; // lucide icon name, mapped in components
  short: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'content',
    no: '01',
    title: 'Content Production & 3D',
    icon: 'Clapperboard',
    short: 'Scroll-stopping films, photography and 3D, made in-house.',
    description:
      'From concept to final cut — we shoot, edit and render the kind of content that stops the scroll. Cinematic brand films, product photography, motion graphics and full 3D animation, all produced under one roof.',
    features: ['Brand films & product video', 'Studio & on-location shoots', '3D animation & motion graphics', 'Photography & retouching'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A creative film production set with cameras and lighting.',
  },
  {
    id: 'social',
    no: '02',
    title: 'Social Media Management',
    icon: 'Instagram',
    short: 'Always-on channels that build a real, engaged audience.',
    description:
      "We run your social presence end to end — strategy, daily posting, community management and reporting. The goal is simple: get your brand genuinely established on the platforms, so you grow a real audience and real visits instead of renting reach.",
    features: ['Channel strategy & calendar', 'Daily posting & stories', 'Community & DM management', 'Plain-English reporting'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A phone showing a vibrant social media feed.',
  },
  {
    id: 'tiktok',
    no: '03',
    title: 'TikTok & Short-Form',
    icon: 'Sparkles',
    short: 'Native short-form built to be watched, shared and searched.',
    description:
      'Short-form is where attention lives. We create native TikTok, Reels and Shorts — hooks, trends and series designed to travel — and manage the channel so your brand becomes part of the conversation.',
    features: ['Short-form content series', 'Trend & hook strategy', 'Creator-style editing', 'Channel growth & posting'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A creator filming a short-form video on a smartphone.',
  },
  {
    id: 'branding',
    no: '04',
    title: 'Branding & Design',
    icon: 'Palette',
    short: 'Identity systems that make you impossible to ignore.',
    description:
      'A brand is more than a logo. We build complete identity systems — naming, logo, type, colour, art direction and guidelines — so every piece of content looks unmistakably, consistently you.',
    features: ['Logo & identity systems', 'Art direction & guidelines', 'Packaging & print', 'Campaign creative'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A brand design moodboard with colour swatches and type.',
  },
  {
    id: 'web',
    no: '05',
    title: 'Web & App Design',
    icon: 'MonitorSmartphone',
    short: 'From design to execution — fast, beautiful, conversion-ready.',
    description:
      'We design and build websites and apps that feel as good as your content looks. User-friendly, lightning-fast and crafted from first sketch to live deployment — the digital home your audience lands on.',
    features: ['Websites & landing pages', 'Mobile & web apps', 'UX/UI design', 'Build & deployment'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'A laptop and phone showing a sleek website design.',
  },
];

/* ------------------------------------------------------------------
   Core values (Trifid-style: Creativity / Unique / Innovation / Youth).
------------------------------------------------------------------ */
export const values = [
  { icon: 'Lightbulb', title: 'Creativity', body: 'We take creative risks and experiment, because forgettable content is the only real failure.' },
  { icon: 'Fingerprint', title: 'Unique', body: 'No templates, no copies. Everything we make is built to make you stand apart.' },
  { icon: 'Rocket', title: 'Innovation', body: 'We think beyond the obvious — new formats, new platforms, new ways to get you seen.' },
  { icon: 'Heart', title: 'Content-first', body: 'Great content is the engine. Get that right and real audience and visits follow.' },
] as const;

/* ------------------------------------------------------------------
   Work / portfolio — framed as our craft, no fabricated client stats.
------------------------------------------------------------------ */
export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export const workItems: WorkItem[] = [
  { id: 'w1', title: 'Brand Film', category: 'Content Production', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80', imageAlt: 'Cinematic brand film still.', span: 'wide' },
  { id: 'w2', title: 'Product 3D', category: '3D & Motion', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=900&q=80', imageAlt: 'Abstract 3D render.', span: 'tall' },
  { id: 'w3', title: 'Social Series', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80', imageAlt: 'Social media content series.' },
  { id: 'w4', title: 'Short-Form', category: 'TikTok', image: 'https://images.unsplash.com/photo-1622151834677-70f982c9adef?auto=format&fit=crop&w=900&q=80', imageAlt: 'Short-form video creator.' },
  { id: 'w5', title: 'Identity System', category: 'Branding', image: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=900&q=80', imageAlt: 'Brand identity system.' },
  { id: 'w6', title: 'Web Build', category: 'Web & App', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80', imageAlt: 'Website design on screens.', span: 'wide' },
  { id: 'w7', title: 'Campaign Shoot', category: 'Content Production', image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=900&q=80', imageAlt: 'Studio campaign photoshoot.' },
  { id: 'w8', title: 'Motion Reel', category: '3D & Motion', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80', imageAlt: 'Motion and content production reel.' },
];

export const workCategories = ['All', 'Content Production', '3D & Motion', 'Social Media', 'TikTok', 'Branding', 'Web & App'];

/* ------------------------------------------------------------------
   Testimonials — generic, brand-agnostic (replace with real quotes).
------------------------------------------------------------------ */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  { quote: 'Our reels finally look as good as our desserts. Markadeo runs the content end to end and our pages actually feel alive now.', name: "Kaspa's", role: 'Dessert brand' },
  { quote: 'They just get our brand. The content is bold, on time every week, and it has pulled in a genuinely engaged local crowd.', name: 'You Want Beef', role: 'Burger brand' },
  { quote: 'The poster and print work was sharp, professional and delivered exactly to brief. An easy team to work with.', name: 'MCB Bank', role: 'Poster & print campaign' },
];

/* Real brands we've produced work for — shown as a "worked with" strip. */
export const clientBrands = ["Kaspa's", 'You Want Beef', 'MCB Bank'];

/* ------------------------------------------------------------------
   Pricing — weekly plans (front-page pricing table).
------------------------------------------------------------------ */
export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  per: string;
  features: string[];
  note: string;
  recommended?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essentials',
    name: 'Essentials Pack',
    tagline: 'Basic — Social Media Essentials',
    price: '£59',
    per: '/week',
    features: [
      '2 static posts per week',
      '1 GIF creative',
      '1–2 reels per week',
      'Generic festival & holiday campaigns',
      'Email support for queries & assistance',
    ],
    note: "A cost-effective way to keep your outlet's presence consistent. Content follows a standardised branding approach and may be shared across similar franchise outlets, with customised location tagging where required.",
  },
  {
    id: 'extra',
    name: 'Extra Plan',
    tagline: 'A stronger, tailored presence',
    price: '£109',
    per: '/week',
    features: [
      'Everything in the Essentials Pack, plus:',
      'Editing, compiling & posting of client-provided raw media',
      'Personalised annual content calendar & strategy',
      'Customised post designs tailored to your outlet',
      'Up to 4 strategy / content planning sessions per month',
      'Official-hours on-call account support',
    ],
    note: 'Builds a more unique, audience-specific identity while keeping brand communication consistent. Personalised content is produced where the client supplies the raw media.',
  },
  {
    id: 'ultra',
    name: 'Ultra — Premium',
    tagline: 'Fully managed premium growth',
    price: '£159',
    per: '/week',
    recommended: true,
    features: [
      '2 monthly outlet visits for pro content & engagement coverage',
      'All essential services, fully personalised & exclusive content',
      'Dedicated Customer Success Manager (CSM)',
      'End-to-end account supervision & management',
      'Detailed performance reporting twice per month',
      'Personalised annual calendar, festive campaigns & strategy',
      '24/7 priority support',
    ],
    note: 'All content is exclusively customised and copyrighted for your outlet — a unique, premium brand identity across every platform.',
  },
];

/* ------------------------------------------------------------------
   Client / platform marquee (logos as wordmarks — no fake brands).
------------------------------------------------------------------ */
export const platformChips = [
  'Instagram', 'TikTok', 'YouTube', 'Meta', 'Pinterest', 'LinkedIn', 'Google', 'Snapchat',
];
