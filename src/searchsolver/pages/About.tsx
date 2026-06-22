import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoHero from '../VideoHero';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import { Reveal, Stagger, RevealItem, Marker } from '../ScrollFX';
import { MEDIA, values } from '../siteData';
import { iconMap } from '../icons';

export default function About() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.heroVideo}
        poster={MEDIA.heroPoster}
        height="tall"
        eyebrow="Who we are"
        title="A young studio with a simple belief."
        subtitle="Brands shouldn’t have to rent their audience forever. We build content and presence you actually own — so the people, and the visits, are yours."
      />

      {/* Thesis */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">Why we exist</p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight">
              Stop paying a premium just to <Marker>be seen.</Marker>
            </h2>
            <div className="mt-5 space-y-4 text-lg text-zinc-600 leading-relaxed">
              <p>
                Most businesses hand large sums to marketplaces and aggregators just to sell their products
                or food — paying again and again for visibility they never keep.
              </p>
              <p>
                We flip that. For less than those platforms charge, we get your brand genuinely established
                on social — with content people want to watch, follow and share. The audience becomes yours.
                The visits keep coming.
              </p>
              <p className="text-ink font-medium">
                No sales promises. No invented numbers. No AI gimmicks. Just real creative work, done
                consistently and reported honestly.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left">
            <Tilt className="relative rounded-[2rem] overflow-hidden border border-line shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Our creative team collaborating in the studio."
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-semibold text-ink shadow-soft">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold-hover" />
                Young, in-house, all-in
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">What we stand for</p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              The principles in every project.
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

      {/* Stat band */}
      <section className="py-16 sm:py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-ink text-white p-10 sm:p-14 grid sm:grid-cols-3 gap-8 text-center">
            {[
              { k: 'One', v: 'studio, end to end' },
              { k: 'Daily', v: 'content & channel management' },
              { k: '0', v: 'sales promises — only real work' },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display font-black text-4xl sm:text-5xl gold-shimmer">{s.k}</p>
                <p className="mt-2 text-zinc-400">{s.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="text-center pb-4">
        <Link to="/work" className="inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-gold-hover transition-colors">
          See our work <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTASection />
    </>
  );
}
