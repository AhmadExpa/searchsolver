import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight, Megaphone } from 'lucide-react';
import { Reveal, Marker } from './ScrollFX';
import { pricingPlans, waLink } from './siteData';

/* ------------------------------------------------------------------
   Pricing — three weekly plans. The recommended tier is rendered in
   the dark "ink" surface with gold accents (matching the bento card
   language elsewhere); the rest are clean white cards. Each CTA opens
   WhatsApp pre-filled with the chosen plan — no forms, no commitments.
------------------------------------------------------------------ */
export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">Plans &amp; pricing</p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            Simple weekly plans, <Marker>no lock-in.</Marker>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Pick the level of support that fits — from keeping your presence consistent to fully managed
            premium growth. Prices are weekly, and paid advertisement campaigns can be planned separately.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {pricingPlans.map((plan, i) => {
            const featured = !!plan.recommended;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`relative flex flex-col rounded-[1.75rem] border p-7 sm:p-8 shadow-soft lift overflow-hidden ${
                  featured
                    ? 'bg-ink text-white border-ink lg:-mt-4 lg:mb-4 shadow-soft-lg'
                    : 'bg-canvas border-line'
                }`}
              >
                {featured && (
                  <>
                    <div className="absolute -top-20 -right-12 w-64 h-64 rounded-full bg-brand-gold/20 blur-[100px] pointer-events-none" aria-hidden />
                    <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-brand-gold text-ink text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1.5 shadow-gold">
                      <Sparkles className="w-3.5 h-3.5" />
                      Recommended
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3 className={`font-display font-bold text-2xl tracking-tight ${featured ? 'text-white' : 'text-ink'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm font-medium ${featured ? 'text-brand-gold' : 'text-brand-gold-hover'}`}>
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className={`font-display font-black text-5xl sm:text-6xl tracking-tight ${featured ? 'text-white' : 'text-ink'}`}>
                      {plan.price}
                    </span>
                    <span className={`mb-2 text-sm font-medium ${featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {plan.per}
                    </span>
                  </div>

                  <ul className="mt-7 space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? 'text-brand-gold' : 'text-brand-gold-hover'}`} />
                        <span className={`text-sm leading-relaxed ${featured ? 'text-zinc-200' : 'text-zinc-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className={`mt-7 pt-6 border-t text-[13px] italic leading-relaxed ${featured ? 'border-white/10 text-zinc-400' : 'border-line text-zinc-500'}`}>
                    {plan.note}
                  </p>

                  <motion.a
                    href={waLink(`Hi Markadeo — I'm interested in the ${plan.name} (${plan.price}${plan.per}) plan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group mt-7 inline-flex w-full items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full transition-colors cursor-pointer ${
                      featured
                        ? 'bg-brand-gold text-ink hover:bg-brand-gold-hover shadow-gold'
                        : 'bg-ink text-white hover:bg-black'
                    }`}
                  >
                    Choose {plan.name.split(' ')[0]}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal className="mt-8 rounded-2xl bg-brand-gold-wash border border-brand-gold/30 p-5 flex flex-col sm:flex-row gap-4 text-sm text-zinc-700">
          <span className="w-11 h-11 rounded-xl bg-brand-gold text-ink flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-5 h-5" />
          </span>
          <p className="leading-relaxed">
            <strong className="text-ink">Paid advertisement campaigns are separate.</strong> Weekly plans cover content and management.
            Campaign setup, ad creative, targeting support and media spend are quoted based on the campaign goal and budget.
          </p>
        </Reveal>

        <Reveal className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          Not sure which fits? Message us and we’ll recommend the right plan — no pressure.
        </Reveal>
      </div>
    </section>
  );
}
