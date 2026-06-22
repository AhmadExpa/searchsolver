import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import VideoHero from '../VideoHero';
import MarqueeLogos from '../MarqueeLogos';
import CTASection from '../CTASection';
import { Reveal } from '../ScrollFX';
import { MEDIA, workItems, workCategories } from '../siteData';

export default function Work() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? workItems : workItems.filter((w) => w.category === filter);

  return (
    <>
      <VideoHero
        videoSrc={MEDIA.studioVideo}
        poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80"
        height="tall"
        eyebrow="Selected work"
        title="The work speaks for itself."
        subtitle="A look at the kind of content, 3D, branding and builds we make. Powerful, innovative, fun and memorable — by design."
      />

      {/* Filters */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {workCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border ${
                  filter === c
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-zinc-600 border-line hover:border-brand-gold/60 hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          {/* Bento grid */}
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-4">
            <AnimatePresence mode="popLayout">
              {shown.map((w) => (
                <motion.figure
                  key={w.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className={`group relative rounded-[1.5rem] overflow-hidden border border-line shadow-soft cursor-pointer ${
                    w.span === 'wide' ? 'col-span-2' : ''
                  } ${w.span === 'tall' ? 'row-span-2' : ''}`}
                >
                  <img
                    src={w.image}
                    alt={w.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">{w.category}</p>
                      <p className="font-display font-bold text-lg text-white">{w.title}</p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="text-xs text-zinc-400 mt-6">
            Representative of our craft and capabilities. Real client case studies added as projects go live.
          </p>
        </div>
      </section>

      <MarqueeLogos heading="Built for every kind of brand" />
      <CTASection
        title="Want work like this for your brand?"
        body="Tell us where you want to be seen. We’ll show you what we’d make."
      />
    </>
  );
}
