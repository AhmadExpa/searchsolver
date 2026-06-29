import { motion } from 'motion/react';
import { MessageCircle, Mail, Instagram, ArrowUpRight, Clapperboard, Clock } from 'lucide-react';
import VideoHero from '../VideoHero';
import Tilt from '../Tilt';
import ContactForm from '../ContactForm';
import { Reveal, Stagger, RevealItem } from '../ScrollFX';
import { MEDIA, CONTACT, services, waLink, mailLink, DEFAULT_WA_MESSAGE } from '../siteData';

const businessHours = [
  { day: 'Monday – Friday', hours: '9:00 – 18:00' },
  { day: 'Saturday', hours: '10:00 – 16:00' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.reelVideo}
        poster={MEDIA.contactHeroPoster}
        height="short"
        eyebrow="Get in touch"
        title="Let’s Build Something Extraordinary"
        subtitle="Tell us about your project and we’ll shape the direction. Fill in the form below or message us directly — whichever is easiest."
      />

      {/* Enquiry form + details */}
      <section id="contact-form" className="py-16 sm:py-24 bg-canvas scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <Reveal direction="right" className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <Reveal direction="left">
                <div className="rounded-2xl bg-white border border-line p-6 shadow-soft">
                  <span className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover">
                      <Clock className="w-5 h-5" />
                    </span>
                    <span className="font-display font-black text-lg text-ink uppercase tracking-wider">Business Hours</span>
                  </span>
                  <ul className="space-y-2">
                    {businessHours.map((b) => (
                      <li key={b.day} className="flex items-center justify-between text-sm">
                        <span className="text-zinc-600 font-medium">{b.day}</span>
                        <span className="text-ink font-semibold">{b.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal direction="left">
                <div className="rounded-2xl bg-white border border-line p-6 shadow-soft">
                  <span className="font-display font-black text-lg text-ink uppercase tracking-wider block mb-4">Follow Us</span>
                  <div className="flex flex-wrap gap-3">
                    <a href={CONTACT.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-zinc-700 hover:text-ink hover:border-brand-gold/60 transition-colors">
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                    <a href={CONTACT.TIKTOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-zinc-700 hover:text-ink hover:border-brand-gold/60 transition-colors">
                      <Clapperboard className="w-4 h-4" /> TikTok
                    </a>
                    <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-zinc-700 hover:text-ink hover:border-brand-gold/60 transition-colors">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

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
                  <h2 className="relative mt-6 font-display font-black text-2xl uppercase tracking-wider">Chat on WhatsApp</h2>
                  <p className="relative mt-2 text-zinc-300 font-medium">Fastest way to reach us. Usually a reply within hours.</p>
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
                  <h2 className="mt-6 font-display font-black text-2xl text-ink uppercase tracking-wider">Email us</h2>
                  <p className="mt-2 text-zinc-600 font-medium">{CONTACT.EMAIL}</p>
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
