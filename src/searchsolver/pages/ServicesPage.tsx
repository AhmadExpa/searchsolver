import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import VideoHero from '../VideoHero';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import { Reveal, Marker } from '../ScrollFX';
import { MEDIA, services } from '../siteData';
import { iconMap } from '../icons';

const process = [
  { no: '01', title: 'Discover', body: 'We get to know your brand, your audience and where you want to be seen.' },
  { no: '02', title: 'Create', body: 'Concept, shoot, edit and render — we produce content built for the platform.' },
  { no: '03', title: 'Publish', body: 'We run your channels daily and put the work in front of the right people.' },
  { no: '04', title: 'Grow', body: 'We learn what lands, double down, and report it back in plain English.' },
];

export default function ServicesPage() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.reelVideo}
        poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80"
        height="tall"
        eyebrow="What we do"
        title="Everything your brand needs to get seen."
        subtitle="Five services, one studio. Creative production, social, 3D, branding and build — joined up so your brand looks like one thing everywhere."
      />

      {/* Detailed service rows */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const flip = i % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28"
              >
                <Reveal direction={flip ? 'left' : 'right'} className={flip ? 'lg:order-2' : ''}>
                  <Tilt className="relative rounded-[2rem] overflow-hidden border border-line shadow-soft-lg">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-[340px] sm:h-[440px] object-cover"
                    />
                    <span className="absolute top-5 left-5 font-display font-black text-6xl text-white/80 drop-shadow select-none">
                      {s.no}
                    </span>
                  </Tilt>
                </Reveal>

                <Reveal direction={flip ? 'right' : 'left'} className={flip ? 'lg:order-1' : ''}>
                  <span className="inline-flex items-center gap-2 w-12 h-12 rounded-xl bg-brand-gold-wash text-brand-gold-hover justify-center">
                    {Icon && <Icon className="w-6 h-6" />}
                  </span>
                  <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg text-zinc-600 leading-relaxed">{s.description}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-zinc-700">
                        <Check className="w-5 h-5 text-brand-gold-hover mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">How we work</p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Four steps. <Marker>One joined-up team.</Marker>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="relative rounded-[1.5rem] bg-canvas border border-line p-6 shadow-soft lift flex flex-col"
              >
                <span className="font-display font-black text-4xl gold-gradient-text leading-none">{p.no}</span>
                <h3 className="mt-4 font-display font-bold text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
          <Reveal className="mt-10 flex items-center gap-2 text-sm text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            No guaranteed sales numbers — just consistent work, honestly reported.
            <ArrowRight className="w-4 h-4 text-brand-gold-hover" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
