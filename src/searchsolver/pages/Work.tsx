import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import VideoHero from '../VideoHero';
import MarqueeLogos from '../MarqueeLogos';
import CTASection from '../CTASection';
import { Reveal } from '../ScrollFX';
import { MEDIA, workItems, workCategories, type WorkItem } from '../siteData';

const categoryContext: Record<string, { summary: string; deliverables: string[] }> = {
  Branding: {
    summary:
      'Identity work showing how a brand system carries across practical touchpoints, from stationery and mockups to presentation-led brand assets.',
    deliverables: ['Brand identity direction', 'Mockup presentation', 'Print-ready visual applications'],
  },
  'Social Media': {
    summary:
      'Campaign creative built for fast recognition in-feed, with bold hierarchy, product focus, and platform-ready visual formatting.',
    deliverables: ['Static post design', 'Campaign visual direction', 'Mobile-first composition'],
  },
  'Ebook & Magazine': {
    summary:
      'Editorial and profile layouts designed to make long-form information feel structured, premium, and easy to scan.',
    deliverables: ['Cover and spread design', 'Editorial layout system', 'Profile presentation assets'],
  },
  'Logo Design': {
    summary:
      'Logo exploration and presentation boards covering visual identity marks, typography, and brand recognition routes.',
    deliverables: ['Logo concepts', 'Identity board', 'Visual style exploration'],
  },
  'Digital & Print': {
    summary:
      'Service and campaign visuals prepared for digital promotion while keeping enough clarity for broader marketing use.',
    deliverables: ['Marketing banner', 'Campaign graphic', 'Digital and print-ready composition'],
  },
  'Web & App': {
    summary:
      'Digital product and service visuals focused on conversion, credibility, and clear communication of technical capability.',
    deliverables: ['Website service creative', 'Responsive visual direction', 'Conversion-focused presentation'],
  },
};

function cardAspect(span: WorkItem['span']) {
  if (span === 'tall') return 'aspect-[4/5]';
  if (span === 'wide') return 'aspect-[16/10]';
  return 'aspect-[4/3]';
}

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const shown = filter === 'All' ? workItems : workItems.filter((w) => w.category === filter);
  const selectedContext = selectedWork ? categoryContext[selectedWork.category] : null;

  useEffect(() => {
    if (!selectedWork) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedWork(null);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedWork]);

  return (
    <>
      <VideoHero
        videoSrc={MEDIA.studioVideo}
        poster={MEDIA.workHeroPoster}
        height="tall"
        eyebrow="Selected work"
        title="The work speaks for itself."
        subtitle="A look at the kind of content, 3D, branding and builds we make. Powerful, innovative, fun and memorable — by design."
      />

      {/* Filters */}
      <section id="portfolio" className="py-12 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap gap-2 mb-10">
            {workCategories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setFilter(c);
                  setSelectedWork(null);
                }}
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

          <div className="portfolio-masonry">
            {shown.map((w, i) => (
              <motion.button
                key={`${filter}-${w.id}`}
                type="button"
                onClick={() => setSelectedWork(w)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3), ease: [0.21, 0.47, 0.32, 0.98] }}
                className="portfolio-masonry-item group relative overflow-hidden rounded-[1.5rem] border border-line bg-ink shadow-soft cursor-pointer text-left"
              >
                <div className={`relative ${cardAspect(w.span)} overflow-hidden`}>
                  <img
                    src={w.image}
                    alt={w.imageAlt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">{w.category}</p>
                      <p className="font-display font-bold text-lg text-white">{w.title}</p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="text-xs text-zinc-400 mt-6">
            Selected portfolio assets compressed for fast loading across desktop and mobile.
          </p>
        </div>
      </section>

      <MarqueeLogos heading="Built for every kind of brand" />
      <CTASection
        title="Want work like this for your brand?"
        body="Tell us where you want to be seen. We’ll show you what we’d make."
      />

      <AnimatePresence>
        {selectedWork && selectedContext && (
          <motion.div
            className="fixed inset-0 z-[120] bg-ink/85 backdrop-blur-md px-4 py-6 sm:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-dialog-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto lg:overflow-hidden rounded-[1.5rem] bg-white shadow-soft-lg grid lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.55fr)]"
            >
              <button
                type="button"
                aria-label="Close portfolio preview"
                onClick={() => setSelectedWork(null)}
                className="absolute right-4 top-4 z-20 w-10 h-10 rounded-full bg-black/55 text-white backdrop-blur flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-ink min-h-[280px] lg:min-h-[620px] flex items-center justify-center p-4 sm:p-6">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.imageAlt}
                  decoding="async"
                  className="w-full h-full max-h-[48vh] lg:max-h-[82vh] object-contain rounded-[1.25rem] shadow-soft-lg"
                />
              </div>

              <aside className="p-6 sm:p-8 overflow-y-auto">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-hover">
                  {selectedWork.category}
                </p>
                <h2 id="portfolio-dialog-title" className="mt-3 font-display font-black text-3xl text-ink tracking-tight">
                  {selectedWork.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {selectedContext.summary}
                </p>

                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                    Project Focus
                  </p>
                  <ul className="mt-4 space-y-3">
                    {selectedContext.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                    Asset
                  </p>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {selectedWork.imageAlt}
                  </p>
                </div>
              </aside>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
