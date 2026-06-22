import { Link } from 'react-router-dom';
import { Check, ArrowRight, Smartphone, Globe, Gauge, MousePointerClick } from 'lucide-react';
import VideoHero from '../VideoHero';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import { Reveal, Stagger, RevealItem, Marker, CountUp } from '../ScrollFX';
import { MEDIA } from '../siteData';

const capabilities = [
  { icon: Globe, title: 'Websites', body: 'Marketing sites, landing pages and storefronts that load fast and convert.' },
  { icon: Smartphone, title: 'Mobile & web apps', body: 'Product experiences designed and built from first sketch to live release.' },
  { icon: MousePointerClick, title: 'UX / UI design', body: 'Interfaces that feel effortless — clear, considered and on-brand.' },
  { icon: Gauge, title: 'Performance', body: 'Speed, accessibility and SEO baked in, not bolted on afterwards.' },
];

const stack = ['UX research', 'Wireframes', 'UI design', 'Prototyping', 'Front-end build', 'CMS', 'Deployment', 'Maintenance'];

export default function WebAppDesign() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.webVideo}
        poster="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80"
        height="tall"
        eyebrow="Web & App Design"
        title="From design to execution."
        subtitle="User-friendly digital solutions, crafted end to end. We design and build the website or app your content deserves — beautiful, fast and ready to launch."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold"
        >
          Start a build <ArrowRight className="w-4 h-4" />
        </Link>
      </VideoHero>

      {/* Capabilities */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">What we build</p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Digital that works as hard as your <Marker>content.</Marker>
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {capabilities.map((c) => (
              <RevealItem key={c.title} className="group rounded-[1.5rem] bg-white border border-line p-6 shadow-soft lift">
                <span className="w-12 h-12 rounded-xl bg-brand-gold-wash group-hover:bg-brand-gold flex items-center justify-center text-brand-gold-hover group-hover:text-ink transition-colors">
                  <c.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-5 font-display font-bold text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{c.body}</p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Showcase split */}
      <section className="py-16 sm:py-24 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <Tilt className="relative rounded-[2rem] overflow-hidden border border-line shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80"
                alt="Responsive website and app design across devices."
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover"
              />
            </Tilt>
          </Reveal>
          <Reveal direction="left">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              One team, the whole stack.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Because the same studio makes your content and builds your site, everything lines up — the
              look, the message and the experience. No handoffs, no mismatched brand.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 bg-canvas border border-line rounded-full px-3.5 py-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-gold-hover" />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-9 grid grid-cols-3 gap-6">
              {[
                { to: 100, suffix: '%', label: 'Responsive' },
                { to: 90, suffix: '+', label: 'Lighthouse target' },
                { to: 1, prefix: '', suffix: ' team', label: 'Design to deploy' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display font-bold text-3xl gold-gradient-text">
                    <CountUp to={m.to} prefix={m.prefix} suffix={m.suffix} />
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to build something fast and beautiful?"
        body="Tell us what you need — a new site, an app, or a rebuild. We’ll take it from first sketch to live."
        mailSubject="Web & app build enquiry — Markadeo"
      />
    </>
  );
}
