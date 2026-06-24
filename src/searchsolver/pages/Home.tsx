import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  MessageCircle,
  Play,
  Boxes,
  Wand2,
  Layers,
  AlertTriangle,
  CheckCircle2,
  BrainCircuit,
  CalendarDays,
  Megaphone,
  TrendingUp,
  MessageSquare,
  Target,
} from 'lucide-react';
import VideoHero from '../VideoHero';
import ServiceSlider from '../ServiceSlider';
import Pricing from '../Pricing';
import Testimonials from '../Testimonials';
import MarqueeLogos from '../MarqueeLogos';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import Object3D from '../Object3D';
import { Reveal, Stagger, RevealItem, Marker, Parallax, Magnetic } from '../ScrollFX';
import { MEDIA, values, waLink, DEFAULT_WA_MESSAGE } from '../siteData';
import { iconMap } from '../icons';

const socialProblems = [
  {
    icon: CalendarDays,
    title: 'Inconsistent posting',
    body: 'The page goes quiet, then posts in bursts. Customers see gaps instead of a living brand.',
  },
  {
    icon: MessageSquare,
    title: 'No clear content angle',
    body: 'Posts are made just to post, without hooks, offers, storytelling or a reason to follow.',
  },
  {
    icon: TrendingUp,
    title: 'Weak feedback loop',
    body: 'Nobody is reading the results properly, so the account keeps repeating what is not working.',
  },
];

const socialFixes = [
  'Audit the current accounts, content gaps and customer journey.',
  'Build an AI-assisted calendar with clear hooks, captions and creative direction.',
  'Produce fresh content, publish consistently and keep the brand active daily.',
  'Report what is working in plain English, then adjust the next batch.',
];

const energyTiles = [
  {
    no: '01',
    icon: MessageCircle,
    title: 'Conversation',
    body: 'Copy and replies that sound human, not canned.',
  },
  {
    no: '02',
    icon: TrendingUp,
    title: 'Growth',
    body: 'Cleaner signals, sharper feedback and more momentum.',
  },
  {
    no: '03',
    icon: Play,
    title: 'Video',
    body: 'Short-form edits that keep attention moving.',
  },
  {
    no: '04',
    icon: Wand2,
    title: 'Craft',
    body: 'Tighter visuals, motion and production polish.',
  },
  {
    no: '05',
    icon: Megaphone,
    title: 'Broadcast',
    body: 'Campaign-ready assets and launch pacing.',
  },
  {
    no: '06',
    icon: Target,
    title: 'Reach',
    body: 'Built to land in the places your audience already looks.',
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <VideoHero
        videoSrc={MEDIA.heroVideo}
        poster={MEDIA.heroPoster}
        eyebrow="Creative content house"
        title={<>We make brands<br /> impossible to scroll past.</>}
        subtitle="Content, 3D, social, branding and build — under one roof. We get you established on the platforms so you reach a real audience and real visits, for a fraction of what marketplaces charge to sell for you."
      >
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Magnetic>
            <motion.a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
            >
              <MessageCircle className="w-4 h-4" />
              Start your project
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </Magnetic>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer border border-white/20"
          >
            <Play className="w-4 h-4 fill-current" />
            See our work
          </Link>
        </div>
      </VideoHero>

      {/* ============ ENERGY GRID ============ */}
      <section className="py-16 sm:py-20 bg-brand-gold-wash/70 border-y border-brand-gold/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
                Six directions
              </p>
              <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight">
                A brighter way to move the feed.
              </h2>
            </div>
            <p className="max-w-xl text-zinc-600 leading-relaxed">
              Borrowing the energy from the mock: stronger contrast, cleaner blocks and a faster visual rhythm
              so the page feels more alive on first glance.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {energyTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <RevealItem key={tile.title} className="h-full">
                  <article className="relative h-full overflow-hidden rounded-[1.5rem] bg-white border border-brand-gold/20 p-6 shadow-soft-lg lift">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-soft to-brand-gold-hover" />
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-semibold tracking-[0.24em] text-brand-gold-hover">{tile.no}</span>
                      <span className="w-11 h-11 rounded-xl bg-ink text-brand-gold flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>
                    <h3 className="mt-6 font-display font-bold text-xl text-ink">{tile.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{tile.body}</p>
                  </article>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ KINETIC STRIP ============ */}
      <div className="py-8 sm:py-10 bg-white border-y border-line overflow-hidden">
        <div className="kinetic-track gap-8">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center gap-8">
              {['Content', '3D & Motion', 'Social', 'TikTok', 'Branding', 'Web & App'].map((w) => (
                <span key={w} className="flex items-center gap-8">
                  <span className="font-display font-black text-3xl sm:text-5xl tracking-tight text-ink">{w}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ INTRO / NEW GENERATION ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
              A new generation of content
            </p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight">
              From idea to execution — <Marker>one creative team.</Marker>
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Most brands overpay marketplaces and ad platforms just to be seen for a moment. We do it
              differently: we build your presence so the audience is genuinely <em>yours</em>. AI-driven
              content planning, AI-assisted production and always-on social management all happen in-house,
              so the work stays fast, sharp and consistent.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              No sales promises. No smoke. Just powerful, innovative, memorable content with a clear
              reason behind every post, caption, edit and campaign direction. Paid advertisement campaigns
              are scoped and priced separately.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-start gap-3">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-ink text-white font-semibold px-6 py-3.5 rounded-full hover:bg-black transition-colors">
                Explore services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-white border border-line text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-canvas transition-colors shadow-soft">
                Our story
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" className="relative">
            <Parallax speed={-0.06} className="absolute -top-8 -left-6 hidden sm:block">
              <div className="w-24 h-24 rounded-3xl bg-brand-gold-wash border border-brand-gold/30 rotate-12" />
            </Parallax>
            <Tilt className="relative rounded-[2rem] overflow-hidden border border-line shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="A creator producing content in a studio."
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[340px] sm:h-[520px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur rounded-2xl px-5 py-4 shadow-soft">
                <div>
                  <p className="font-display font-bold text-ink">In-house studio</p>
                  <p className="text-sm text-zinc-500">Shoot · edit · render · publish</p>
                </div>
                <span className="w-11 h-11 rounded-xl bg-brand-gold flex items-center justify-center text-ink">
                  <Wand2 className="w-5 h-5" />
                </span>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-16 sm:py-20 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">What drives us</p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              The values behind every frame.
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((v) => {
              const Icon = iconMap[v.icon];
              return (
                <RevealItem key={v.title} className="group rounded-[1.5rem] bg-canvas border border-line p-6 shadow-soft lift">
                  <span className="w-12 h-12 rounded-xl bg-brand-gold-wash group-hover:bg-brand-gold flex items-center justify-center text-brand-gold-hover group-hover:text-ink transition-colors">
                    {Icon && <Icon className="w-6 h-6" />}
                  </span>
                  <h3 className="mt-5 font-display font-bold text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{v.body}</p>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ SERVICES SLIDER ============ */}
      <ServiceSlider />

      {/* ============ CONTENT IS KING BAND ============ */}
      <section className="py-16 sm:py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-10 sm:p-16">
            <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-brand-gold/20 blur-[120px] pointer-events-none blob-drift" aria-hidden />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sm font-semibold text-brand-gold uppercase tracking-[0.18em]">The one rule</span>
                <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tight">
                  Content is <span className="gold-shimmer">king.</span>
                </h2>
                <p className="mt-5 text-zinc-300 leading-relaxed max-w-lg">
                  Rented reach disappears the moment you stop paying. Content you own keeps working.
                  We build a library of work that earns attention, trust and visits — long after it goes live.
                </p>
                <Link to="/services" className="mt-8 inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold">
                  See what we make <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Layers, label: 'Owned content', sub: 'Works forever' },
                  { icon: Boxes, label: '3D & motion', sub: 'In-house renders' },
                ].map((c) => (
                  <Tilt key={c.label} className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
                    <span className="w-11 h-11 rounded-xl bg-brand-gold flex items-center justify-center text-ink">
                      <c.icon className="w-5 h-5" />
                    </span>
                    <p className="mt-4 font-display font-bold text-lg">{c.label}</p>
                    <p className="text-sm text-zinc-400">{c.sub}</p>
                  </Tilt>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ 3D FEATURE (video + real 3D object) ============ */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-ink">
        {/* Dark base keeps text readable even if the video is slow / blocked */}
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover opacity-60" autoPlay muted loop playsInline poster={MEDIA.heroPoster}>
            <source src={MEDIA.threeDVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="absolute inset-0 bg-ink/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              <Boxes className="w-3.5 h-3.5 text-brand-gold" /> 3D & Motion
            </span>
            <h2 className="mt-6 font-display font-bold text-4xl sm:text-6xl tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]">
              Creative 3D animation,<br /> rendered in-house.
            </h2>
            <p className="mt-6 text-lg text-zinc-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Product visualisations, virtual worlds and character design — the kind of motion that makes
              people stop, look and remember. Built by our own animators, not outsourced.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold">
              Explore 3D production <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          {/* Genuine CSS 3D object — a tumbling gold cube */}
          <Reveal direction="left" className="flex justify-center lg:justify-end">
            <Object3D />
          </Reveal>
        </div>
      </section>

      {/* ============ SOCIAL ACCOUNT DIAGNOSIS ============ */}
      <section id="social-diagnosis" className="py-16 sm:py-24 bg-white border-y border-line scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-stretch">
          <Reveal direction="right">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">Social media diagnosis</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight">
              What is holding your accounts back?
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Most struggling social pages do not have one single problem. They usually lack a clear
              content direction, a consistent rhythm and a team watching the results closely enough to
              improve the next post.
            </p>

            <div className="mt-8 grid gap-3">
              {socialProblems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-canvas border border-line p-5 shadow-soft">
                    <span className="mt-0.5 w-11 h-11 rounded-xl bg-brand-gold-wash text-brand-gold-hover flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink text-white p-6 sm:p-8 shadow-soft-lg">
              <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-brand-gold/20 blur-[100px] pointer-events-none" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <AlertTriangle className="w-3.5 h-3.5 text-brand-gold" /> How we resolve it
                </span>
                <h3 className="mt-5 font-display font-bold text-2xl sm:text-3xl tracking-tight">
                  We turn scattered posting into a managed content system.
                </h3>
                <ul className="mt-6 space-y-4">
                  {socialFixes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-gold flex-shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-200 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                    <BrainCircuit className="w-6 h-6 text-brand-gold" />
                    <p className="mt-3 font-display font-bold">AI-driven content</p>
                    <p className="mt-1 text-sm text-zinc-400">Ideas, hooks, captions and optimisations are shaped before production starts.</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                    <Megaphone className="w-6 h-6 text-brand-gold" />
                    <p className="mt-3 font-display font-bold">Paid campaigns</p>
                    <p className="mt-1 text-sm text-zinc-400">Advertisement campaigns, ad creative, targeting and media spend are quoted separately.</p>
                  </div>
                </div>

                <Link to="/services" className="mt-8 inline-flex items-center justify-center gap-2 bg-brand-gold text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold">
                  Fix my social media <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <Pricing />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ MARQUEE ============ */}
      <MarqueeLogos />

      {/* ============ CTA ============ */}
      <CTASection />
    </>
  );
}
