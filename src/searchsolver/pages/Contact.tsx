import { motion } from 'motion/react';
import { MessageCircle, Mail, Instagram, ArrowUpRight, Clapperboard } from 'lucide-react';
import VideoHero from '../VideoHero';
import Tilt from '../Tilt';
import { Reveal, Stagger, RevealItem } from '../ScrollFX';
import { MEDIA, CONTACT, services, waLink, mailLink, DEFAULT_WA_MESSAGE } from '../siteData';

export default function Contact() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.reelVideo}
        poster="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
        height="short"
        eyebrow="Get in touch"
        title="Let’s make something."
        subtitle="No forms to fill, no waiting on a quote. Message us directly and tell us about your brand — we’ll take it from there."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary channels */}
          <div className="grid sm:grid-cols-2 gap-5">
            <Reveal direction="right">
              <Tilt className="h-full">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-[2rem] bg-ink text-white p-8 sm:p-10 shadow-soft-lg relative overflow-hidden"
                >
                  <div className="absolute -top-16 -right-10 w-60 h-60 rounded-full bg-brand-gold/20 blur-[90px] pointer-events-none" aria-hidden />
                  <span className="relative w-14 h-14 rounded-2xl bg-brand-gold flex items-center justify-center text-ink">
                    <MessageCircle className="w-7 h-7" />
                  </span>
                  <h2 className="relative mt-6 font-display font-bold text-2xl">Chat on WhatsApp</h2>
                  <p className="relative mt-2 text-zinc-300">Fastest way to reach us. Usually a reply within hours.</p>
                  <span className="relative mt-6 inline-flex items-center gap-1 font-semibold text-brand-gold">
                    Open chat <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Tilt>
            </Reveal>

            <Reveal direction="left">
              <Tilt className="h-full">
                <a
                  href={mailLink('Project enquiry — Markadeo')}
                  className="group block h-full rounded-[2rem] bg-white border border-line p-8 sm:p-10 shadow-soft-lg"
                >
                  <span className="w-14 h-14 rounded-2xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover">
                    <Mail className="w-7 h-7" />
                  </span>
                  <h2 className="mt-6 font-display font-bold text-2xl text-ink">Email us</h2>
                  <p className="mt-2 text-zinc-600">{CONTACT.EMAIL}</p>
                  <span className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-gold-hover">
                    Write to us <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Tilt>
            </Reveal>
          </div>

          {/* Secondary row */}
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <Reveal>
              <a
                href={CONTACT.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white border border-line p-6 shadow-soft lift"
              >
                <span className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-canvas flex items-center justify-center text-brand-gold-hover">
                    <Instagram className="w-6 h-6" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">Follow on Instagram</span>
                    <span className="block text-sm text-zinc-500">See the latest work</span>
                  </span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-ink transition-colors" />
              </a>
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-4 rounded-2xl bg-brand-gold-wash border border-brand-gold/30 p-6">
                <span className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-gold-hover">
                  <Clapperboard className="w-6 h-6" />
                </span>
                <p className="text-sm text-ink/80">
                  Tell us your platform, your audience and your goal — we’ll suggest exactly what to make.
                </p>
              </div>
            </Reveal>
          </div>

          {/* What to mention */}
          <Reveal className="mt-14">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em] mb-5">
              Tell us which of these you need
            </p>
            <Stagger className="flex flex-wrap gap-2.5">
              {services.map((s) => (
                <RevealItem key={s.id}>
                  <motion.a
                    href={waLink(`Hi Markadeo — I'm interested in ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2.5 text-sm font-medium text-zinc-700 hover:text-ink hover:border-brand-gold/60 transition-colors shadow-soft"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    {s.title}
                  </motion.a>
                </RevealItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>
    </>
  );
}
