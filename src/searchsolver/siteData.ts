/* ==================================================================
   siteData.ts — single source of truth for the whole Markadeo site.

   Markadeo is a full-service creative digital agency — branding &
   print, websites, WordPress, Shopify/eCommerce, Amazon creatives,
   TikTok & AI video, and custom software — delivering solutions
   designed to generate measurable results. Tagline: Design. Develop.
   Dominate.

   Contact links are built from Vite env values where browser exposure is
   required. WhatsApp uses VITE_WHATSAPP_NUMBER from .env.
   ================================================================== */

/* Brand tagline — surfaced in the hero eyebrow and footer. */
export const TAGLINE = 'Design. Develop. Dominate.';

function digitsOnly(value: string | undefined): string {
  return (value ?? '').replace(/\D/g, '');
}

function formatPhoneDisplay(value: string): string {
  if (value.startsWith('44') && value.length === 12) {
    return `+44 ${value.slice(2, 6)} ${value.slice(6)}`;
  }

  return value ? `+${value}` : '';
}

const WHATSAPP_NUMBER = digitsOnly(import.meta.env.VITE_WHATSAPP_NUMBER);

export const CONTACT = {
  /* Digits only, full international format, NO +, spaces or dashes.
     e.g. UK "44 7700 900123" -> "447700900123" */
  WHATSAPP_NUMBER,
  EMAIL: 'hello@markadeo.com',
  INSTAGRAM: 'https://instagram.com/markadeo',
  TIKTOK: 'https://tiktok.com/@markadeo',
  PHONE_DISPLAY: formatPhoneDisplay(WHATSAPP_NUMBER),
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
  "Hi Markadeo — I'd like a free consultation about growing my business with creative digital solutions.";

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

export const portfolioAsset = (file: string): string => `/assets/portfolio/${file}`;

/* ------------------------------------------------------------------
   Stock media (hotlinked — Pexels video). Muted, looping video.
   Portfolio imagery is served locally from optimized WebP files.
------------------------------------------------------------------ */
/* Pexels CDN direct MP4s — royalty-free, no attribution required,
   hotlinkable and verified loading. All depict content creation /
   filming / studio work (marketing-relevant). Muted/looping in <video>. */
export const MEDIA = {
  // Woman setting up / fixing a camera before filming — studio/content vibe
  heroVideo: 'https://videos.pexels.com/video-files/9032611/9032611-uhd_2560_1440_25fps.mp4',
  homeHeroPoster: portfolioAsset('banners/main-banner-1920x1080.webp'),
  aboutHeroPoster: portfolioAsset('banners/ai-ads-and-ai-videos.webp'),
  servicesHeroPoster: portfolioAsset('banners/digital-and-print-media.webp'),
  workHeroPoster: portfolioAsset('banners/shopify-development.webp'),
  webHeroPoster: portfolioAsset('banners/website-design-and-development.webp'),
  contactHeroPoster: portfolioAsset('banners/tiktok-ads-and-video-production.webp'),
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
   Services — full-service agency (8 numbered service areas).
   Mirrors the Markadeo service spec: short = the section "Heading",
   description = the "Content", features = the "Services" bullets.
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
    id: 'print',
    no: '01',
    title: 'Digital & Print Media',
    icon: 'PenTool',
    short: 'Creative Design That Builds Strong Brands',
    description:
      'Our design team creates impactful visual experiences that strengthen your brand identity across digital and print platforms. We ensure consistency, professionalism, and creativity in every touchpoint.',
    features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Marketing Materials', 'Packaging Design', 'Brochures & Flyers', 'Business Cards', 'Large Format Printing'],
    image: portfolioAsset('banners/digital-and-print-media.webp'),
    imageAlt: 'Markadeo digital and print media service banner.',
  },
  {
    id: 'web',
    no: '02',
    title: 'Website Design & Development',
    icon: 'Globe',
    short: 'High-Converting Websites Built For Growth',
    description:
      'Your website should do more than look great — it should generate leads and sales. We design and develop modern, responsive websites that deliver exceptional user experiences and measurable business results.',
    features: ['Corporate Websites', 'Business Websites', 'Landing Pages', 'Portfolio Websites', 'Custom Web Applications', 'Website Maintenance'],
    image: portfolioAsset('banners/website-design-and-development.webp'),
    imageAlt: 'Markadeo website design and development service banner.',
  },
  {
    id: 'wordpress',
    no: '03',
    title: 'WordPress Development',
    icon: 'Layout',
    short: 'Flexible WordPress Solutions',
    description:
      'We build scalable WordPress websites designed for speed, security, and conversions. Whether you need a business website or a custom solution, our developers create experiences that perform.',
    features: ['Business Websites', 'Custom Themes', 'Speed & Security', 'Plugin Integration'],
    image: portfolioAsset('banners/wordpress-development.webp'),
    imageAlt: 'Markadeo WordPress development service banner.',
  },
  {
    id: 'ecommerce',
    no: '04',
    title: 'Shopify & eCommerce Solutions',
    icon: 'ShoppingBag',
    short: 'Sell More With Powerful eCommerce Stores',
    description:
      'We create conversion-focused Shopify and WooCommerce stores that help businesses maximize sales and improve customer experience.',
    features: ['Shopify Store Design', 'Shopify Development', 'WooCommerce Development', 'Product Uploads', 'Payment Integration', 'Conversion Optimisation'],
    image: portfolioAsset('banners/shopify-development.webp'),
    imageAlt: 'Markadeo Shopify and ecommerce service banner.',
  },
  {
    id: 'amazon',
    no: '05',
    title: 'Amazon Creative Services',
    icon: 'Package',
    short: 'Maximise Your Amazon Sales Potential',
    description:
      'Our Amazon experts help brands stand out with professional listing optimisation and premium visual content that improves conversion rates and customer trust.',
    features: ['Amazon Listing Images', 'A+ Content', 'Amazon Storefront Design', 'Product Infographics', 'Brand Story Design', 'Product Photography Editing'],
    image: portfolioAsset('banners/amazon-creative-services.webp'),
    imageAlt: 'Markadeo Amazon creative services banner.',
  },
  {
    id: 'tiktok',
    no: '06',
    title: 'TikTok Ads & Video Production',
    icon: 'Video',
    short: 'Content Designed To Stop The Scroll',
    description:
      'Capture attention with engaging TikTok and social media videos created specifically for modern audiences. Our creatives combine storytelling with performance marketing principles to drive engagement and conversions.',
    features: ['TikTok Video Ads', 'UGC Style Ads', 'Product Demonstrations', 'Social Media Reels', 'Promotional Videos'],
    image: portfolioAsset('banners/tiktok-ads-and-video-production.webp'),
    imageAlt: 'Markadeo TikTok ads and video production service banner.',
  },
  {
    id: 'ai',
    no: '07',
    title: 'AI Ads & AI Videos',
    icon: 'Wand2',
    short: 'Future-Ready AI-Powered Marketing',
    description:
      'Leverage artificial intelligence to produce high-quality ad creatives, promotional videos, product showcases, and branded content faster and more efficiently than traditional production methods.',
    features: ['AI Video Ads', 'AI Product Videos', 'AI Influencer Content', 'AI Voiceovers', 'AI Commercial Production'],
    image: portfolioAsset('banners/ai-ads-and-ai-videos.webp'),
    imageAlt: 'Markadeo AI ads and AI videos service banner.',
  },
  {
    id: 'software',
    no: '08',
    title: 'Software Development',
    icon: 'Code',
    short: 'Custom Software Built Around Your Business',
    description:
      'We develop tailored software solutions that improve productivity, automate workflows, and support business growth. Our solutions are designed to solve real operational challenges and create long-term value.',
    features: ['CRM Systems', 'ERP Solutions', 'SaaS Applications', 'Mobile Apps', 'Custom Portals', 'API Integrations', 'Business Automation'],
    image: portfolioAsset('banners/software-development.webp'),
    imageAlt: 'Markadeo software development service banner.',
  },
];

/* ------------------------------------------------------------------
   Clients & Brands section copy.
------------------------------------------------------------------ */
export const clientsCopy = {
  heading: 'Trusted By Ambitious Brands',
  body: 'Businesses choose Markadeo because we combine creativity, technology, and performance marketing to help brands stand out in competitive markets. From startups to established companies, we create solutions that drive visibility, engagement, and growth.',
} as const;

/* ------------------------------------------------------------------
   About — "Your Growth Partner" + Why Choose Us bullets.
------------------------------------------------------------------ */
export const aboutCopy = {
  heading: 'Your Growth Partner In The Digital World',
  body: "Markadeo is a creative agency helping businesses establish, grow, and scale their digital presence. Our team combines innovative design, strategic marketing, cutting-edge AI technology, and custom software solutions to create powerful customer experiences. Whether you're launching a new brand, growing your online store, or automating operations, we provide solutions tailored to your business goals.",
} as const;

export const whyChooseUs: { label: string; icon: string }[] = [
  { label: 'Results-Driven Approach', icon: 'Target' },
  { label: 'Dedicated Project Managers', icon: 'UserCheck' },
  { label: 'UK Market Expertise', icon: 'MapPin' },
  { label: 'AI-Powered Creative Production', icon: 'Sparkles' },
  { label: 'Transparent Communication', icon: 'MessagesSquare' },
  { label: 'Long-Term Growth Strategies', icon: 'TrendingUp' },
];

/* ------------------------------------------------------------------
   Why Markadeo Is Different — value propositions.
------------------------------------------------------------------ */
export const differentiators: { title: string; body: string }[] = [
  { title: 'Strategy First', body: 'Every project begins with understanding your business goals.' },
  { title: 'Creative Meets Technology', body: 'We combine design excellence with technical expertise.' },
  { title: 'AI-Powered Innovation', body: 'Faster production without compromising quality.' },
  { title: 'Conversion-Focused Approach', body: 'Every design and campaign is built to generate results.' },
  { title: 'End-To-End Solutions', body: 'One partner for design, development, marketing, and software.' },
  { title: 'Dedicated Support', body: 'Long-term collaboration and ongoing optimisation.' },
];

/* ------------------------------------------------------------------
   Our Proven Process — 6 steps.
------------------------------------------------------------------ */
export const processSteps: { no: string; title: string }[] = [
  { no: '01', title: 'Discover & Strategy' },
  { no: '02', title: 'Planning & Research' },
  { no: '03', title: 'Creative Development' },
  { no: '04', title: 'Implementation' },
  { no: '05', title: 'Testing & Optimisation' },
  { no: '06', title: 'Launch & Growth' },
];

/* ------------------------------------------------------------------
   FAQ — frequently asked questions.
------------------------------------------------------------------ */
export const faqs: { q: string; a: string }[] = [
  { q: 'What services does Markadeo offer?', a: 'We provide web design, Shopify & WordPress development, Amazon creatives, digital marketing, AI content creation, branding, and custom software solutions.' },
  { q: 'Do you work with startups and established businesses?', a: 'Yes, we work with businesses of all sizes, from startups to large enterprises.' },
  { q: 'How long does a website project take?', a: 'Most websites are completed within 2–6 weeks, depending on the project scope.' },
  { q: 'Do you build Shopify stores?', a: 'Yes, we design and develop high-converting Shopify and WooCommerce stores.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. We can refresh, optimise, or completely rebuild your current website.' },
  { q: 'Do you create Amazon A+ Content?', a: 'Yes, we design Amazon listing images, A+ Content, Brand Stories, and Storefronts.' },
  { q: 'Do you create TikTok and social media ads?', a: 'Yes, we produce engaging TikTok ads, reels, and social media video content.' },
  { q: 'What are AI-powered ads?', a: 'AI-powered ads use advanced technology to create high-quality videos, visuals, and marketing content faster and more efficiently.' },
  { q: 'Do you offer custom software development?', a: 'Yes, we build custom CRM systems, SaaS platforms, web applications, and business automation tools.' },
  { q: 'Will my website be mobile-friendly?', a: 'Yes, every website we create is fully responsive across all devices.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance, updates, and technical support after launch.' },
  { q: 'Is SEO included in your websites?', a: 'Yes, all websites are built with SEO best practices in mind.' },
  { q: 'Can you help improve my online sales?', a: 'Yes, we focus on creating conversion-driven solutions that help increase leads and sales.' },
  { q: 'Do you offer free consultations?', a: 'Yes, we provide a free consultation to discuss your goals and requirements.' },
  { q: 'Why choose Markadeo?', a: 'Because we combine creativity, technology, and strategy to deliver solutions that help businesses grow.' },
];

/* ------------------------------------------------------------------
   Contact form — project budget options for the enquiry form.
------------------------------------------------------------------ */
export const budgetOptions: string[] = [
  'Under £1,000',
  '£1,000 – £5,000',
  '£5,000 – £10,000',
  '£10,000 – £25,000',
  '£25,000+',
  'Not sure yet',
];

/* ------------------------------------------------------------------
   Core values (Trifid-style: Creativity / Unique / Innovation / Youth).
------------------------------------------------------------------ */
export const values = [
  { icon: 'Lightbulb', title: 'Creativity', body: 'We take creative risks and experiment, because forgettable content is the only real failure.' },
  { icon: 'Fingerprint', title: 'Unique', body: 'No templates, no copies. Everything we make is built to make you stand apart.' },
  { icon: 'Rocket', title: 'Innovation', body: 'We use AI-driven workflows, new formats and new platforms to move faster, test more and get you seen more consistently.' },
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
  { id: 'brand-amrood-envelope', title: 'Amrood Labs Stationery', category: 'Branding', image: portfolioAsset('brand/amrood-labs-envelop-moc.webp'), imageAlt: 'Amrood Labs envelope mockup.', span: 'wide' },
  { id: 'social-01', title: 'Social Media Campaign', category: 'Social Media', image: portfolioAsset('social/01.webp'), imageAlt: 'Social media campaign creative.', span: 'tall' },
  { id: 'ebook-profile-20', title: 'Magazine Profile Spread', category: 'Ebook & Magazine', image: portfolioAsset('ebook/magazine-and-profiles-20.webp'), imageAlt: 'Magazine and profile layout design.' },
  { id: 'logo-board-2', title: 'Logo Identity Board', category: 'Logo Design', image: portfolioAsset('logo/logos-2.webp'), imageAlt: 'Logo design presentation board.' },
  { id: 'banner-web', title: 'Web Development Banner', category: 'Web & App', image: portfolioAsset('banners/website-design-and-development.webp'), imageAlt: 'Website design and development banner.', span: 'wide' },
  { id: 'brand-imperial', title: 'Imperial Smart City', category: 'Branding', image: portfolioAsset('brand/imperial-smart-city-page-43-g.webp'), imageAlt: 'Imperial Smart City brand identity page.' },
  { id: 'social-03', title: 'Food Brand Creative', category: 'Social Media', image: portfolioAsset('social/sm-03.webp'), imageAlt: 'Food brand social media post design.' },
  { id: 'ebook-profile-15', title: 'Corporate Profile', category: 'Ebook & Magazine', image: portfolioAsset('ebook/magazine-and-profiles-15.webp'), imageAlt: 'Corporate profile page design.', span: 'wide' },
  { id: 'brand-amrood-cup', title: 'Branded Cup Mockup', category: 'Branding', image: portfolioAsset('brand/amrood-labs-cup.webp'), imageAlt: 'Amrood Labs branded cup mockup.' },
  { id: 'logo-board-1', title: 'Logo Exploration', category: 'Logo Design', image: portfolioAsset('logo/logos-1.webp'), imageAlt: 'Logo exploration presentation.' },
  { id: 'banner-ai', title: 'AI Ads Creative', category: 'Digital & Print', image: portfolioAsset('banners/ai-ads-and-ai-videos.webp'), imageAlt: 'AI ads and AI videos creative banner.', span: 'wide' },
  { id: 'social-06', title: 'Restaurant Social Post', category: 'Social Media', image: portfolioAsset('social/sm-06.webp'), imageAlt: 'Restaurant social media post creative.' },
  { id: 'ebook-profile-18', title: 'Editorial Layout', category: 'Ebook & Magazine', image: portfolioAsset('ebook/magazine-and-profiles-18.webp'), imageAlt: 'Editorial ebook layout design.' },
  { id: 'brand-mango-05', title: 'Mango Music Identity', category: 'Branding', image: portfolioAsset('brand/mango-music-05.webp'), imageAlt: 'Mango Music brand identity design.', span: 'tall' },
  { id: 'social-09', title: 'Offer Campaign', category: 'Social Media', image: portfolioAsset('social/sm-09.webp'), imageAlt: 'Promotional offer social media design.' },
  { id: 'banner-shopify', title: 'Shopify Service Creative', category: 'Web & App', image: portfolioAsset('banners/shopify-development.webp'), imageAlt: 'Shopify development banner.' },
  { id: 'brand-bestea', title: 'Bestea Brand Page', category: 'Branding', image: portfolioAsset('brand/bestea-page-43-c.webp'), imageAlt: 'Bestea brand identity page.', span: 'wide' },
  { id: 'ebook-04', title: 'Ebook Cover System', category: 'Ebook & Magazine', image: portfolioAsset('ebook/04.webp'), imageAlt: 'Ebook cover design system.' },
  { id: 'logo-board-4', title: 'Logo Collection', category: 'Logo Design', image: portfolioAsset('logo/logos-4.webp'), imageAlt: 'Logo design collection board.' },
  { id: 'social-11', title: 'Product Social Creative', category: 'Social Media', image: portfolioAsset('social/sm-11.webp'), imageAlt: 'Product social media creative.' },
  { id: 'brand-amrood-notebook', title: 'Notebook Mockup', category: 'Branding', image: portfolioAsset('brand/amrood-labs-note-book-outside.webp'), imageAlt: 'Amrood Labs notebook mockup.' },
  { id: 'banner-print', title: 'Digital Print Media', category: 'Digital & Print', image: portfolioAsset('banners/digital-and-print-media.webp'), imageAlt: 'Digital and print media banner.', span: 'wide' },
  { id: 'ebook-profile-12', title: 'Profile Design Detail', category: 'Ebook & Magazine', image: portfolioAsset('ebook/magazine-and-profiles-12.webp'), imageAlt: 'Profile design page detail.' },
  { id: 'social-10', title: 'Social Ad Creative', category: 'Social Media', image: portfolioAsset('social/sm-10.webp'), imageAlt: 'Social ad creative design.' },
  { id: 'brand-amrood-card', title: 'Business Card Mockup', category: 'Branding', image: portfolioAsset('brand/amrood-labs-visiting-card-mock.webp'), imageAlt: 'Amrood Labs visiting card mockup.' },
  { id: 'logo-board-3', title: 'Logo Variations', category: 'Logo Design', image: portfolioAsset('logo/logos-3.webp'), imageAlt: 'Logo variation design board.' },
];

export const workCategories = ['All', 'Branding', 'Social Media', 'Ebook & Magazine', 'Logo Design', 'Digital & Print', 'Web & App'];

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
