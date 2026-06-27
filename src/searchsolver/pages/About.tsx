import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoHero from '../VideoHero';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import { Reveal, Stagger, RevealItem, Marker, CountUp } from '../ScrollFX';
import { MEDIA, values, aboutCopy, whyChooseUs } from '../siteData';
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
        subtitle="Brands shouldn’t have to rent their audience forever. We build AI-driven content and presence you actually own — so the people, and the visits, are yours."
      />

      {/* Thesis */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">Why we exist</p>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-none uppercase">
              Stop paying a premium just to <Marker>be seen.</Marker>
            </h2>
            <div className="mt-5 space-y-4 text-lg text-zinc-600 leading-relaxed font-medium">
              <p>
                Most businesses hand large sums to marketplaces and aggregators just to sell their products
                or food — paying again and again for visibility they never keep.
              </p>
              <p>
                We flip that. For less than those platforms charge, we get your brand genuinely established
                on social — with AI-driven content people want to watch, follow and share. The audience
                becomes yours. The visits keep coming.
              </p>
              <p className="text-ink font-medium">
                No sales promises. No invented numbers. Just real creative work, powered by AI-assisted
                planning where it helps, produced consistently and reported honestly.
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

      {/* About Markadeo / Why Choose Us */}
      <section className="bg-[#232425] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3 block">
                  About Markadeo
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase leading-[1.05]">
                  {aboutCopy.heading}
                </h2>
                <p className="mt-6 text-base text-zinc-300 leading-relaxed font-medium">
                  {aboutCopy.body}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal direction="left">
                <span className="text-xs font-bold tracking-[0.2em] text-brand-yellow uppercase mb-6 block">
                  Why Choose Us
                </span>
                <Stagger className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <RevealItem key={item.label}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="group flex items-center gap-4 bg-white border border-line rounded-2xl p-5 shadow-soft hover:shadow-soft-lg hover:border-brand-blue transition-colors h-full cursor-default"
                        >
                          <span className="w-11 h-11 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue flex items-center justify-center text-brand-blue group-hover:text-white flex-shrink-0 transition-colors duration-300 group-hover:scale-110">
                            {Icon && <Icon className="w-5 h-5" />}
                          </span>
                          <span className="font-semibold text-sm sm:text-base text-ink">
                            {item.label}
                          </span>
                        </motion.div>
                      </RevealItem>
                    );
                  })}
                </Stagger>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">What we stand for</p>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink uppercase">
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
                  <h3 className="mt-5 font-display font-black text-lg text-ink uppercase tracking-wider">{v.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-medium">{v.body}</p>
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
            <div>
              <p className="font-display font-black text-4xl sm:text-5xl gold-shimmer">
                <CountUp to={1} duration={1500} suffix=" Studio" />
              </p>
              <p className="mt-2 text-zinc-400 font-semibold tracking-wider text-xs uppercase">End to End Production</p>
            </div>
            <div>
              <p className="font-display font-black text-4xl sm:text-5xl gold-shimmer">
                <CountUp to={100} duration={2000} suffix="%" />
              </p>
              <p className="mt-2 text-zinc-400 font-semibold tracking-wider text-xs uppercase">Organic Channel Growth</p>
            </div>
            <div>
              <p className="font-display font-black text-4xl sm:text-5xl gold-shimmer">
                <CountUp to={10} duration={1800} suffix="x" />
              </p>
              <p className="mt-2 text-zinc-400 font-semibold tracking-wider text-xs uppercase">Average Engagement Rates</p>
            </div>
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
