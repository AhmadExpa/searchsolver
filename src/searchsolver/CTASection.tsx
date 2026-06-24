import { motion } from 'motion/react';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Reveal, Magnetic } from './ScrollFX';
import { waLink, mailLink, DEFAULT_WA_MESSAGE } from './siteData';

/* ------------------------------------------------------------------
   CTASection — reusable WhatsApp + email call band. No forms, no
   server: every CTA opens WhatsApp or the user's mail client.
------------------------------------------------------------------ */
export default function CTASection({
  eyebrow = 'Built for momentum',
  title = 'Ready to make the feed feel alive?',
  body = 'Sharper AI-driven content, faster production and a cleaner rhythm across the channels that matter. Tell us what you need and we’ll shape the direction; paid ad campaigns can be scoped separately.',
  waMessage = DEFAULT_WA_MESSAGE,
  mailSubject = 'New project enquiry — Markadeo',
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  waMessage?: string;
  mailSubject?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-10 sm:p-16 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-brand-gold/20 blur-[120px] pointer-events-none blob-drift" aria-hidden />
          <div className="relative">
            <span className="inline-block text-sm font-semibold text-brand-gold uppercase tracking-[0.18em]">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-5xl tracking-tight">
              {title}
            </h2>
            <p className="mt-5 text-zinc-300 max-w-xl mx-auto leading-relaxed">{body}</p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Magnetic>
                <motion.a
                  href={waLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.a>
              </Magnetic>
              <motion.a
                href={mailLink(mailSubject)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer border border-white/15"
              >
                <Mail className="w-4 h-4" />
                Email us
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
