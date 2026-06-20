import { motion } from 'motion/react';
import { servicesData } from './servicesData';
import { Check, ShieldCheck } from 'lucide-react';
import { Reveal } from './ScrollFX';

export default function Services({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customIndex: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: customIndex * 0.1,
      }
    })
  };

  return (
    <section id="services" className="py-24 bg-brand-dark/40 relative border-b border-zinc-900 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] gold-ambient-glow filter blur-[60px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] charcoal-ambient-glow filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-main-container">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal direction="up" className="max-w-2xl text-left" id="services-headings-left">
            <span className="text-[11px] font-mono tracking-widest text-[#F5B82E] uppercase px-3.5 py-1.5 bg-brand-gold/10 border border-[#F5B82E]/30 rounded-none inline-block mb-3 font-bold">
              WHAT WE DO BEST
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">
              Everything that fills tables — <span className="gold-shimmer">fully managed.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 font-light">
              No vanity fluff. Five focused services, each engineered for UK restaurants, GDPR-compliant, and reported on transparently — you always see exactly what we did and what it moved.
            </p>
          </Reveal>

          <div className="flex-shrink-0" id="services-headings-right">
            <div className="bg-[#141414] border border-white/5 p-4 rounded-none flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#F5B82E]" />
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">Our Promise</p>
                <p className="text-xs text-white">Transparent reporting — no inflated numbers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="services-bento-grid">
          {servicesData.map((service, index) => {
            const isVoiceAgent = service.id === 'ai-voice-agent';
            return (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className={`group relative border p-6 sm:p-8 rounded-none flex flex-col justify-between transition-all duration-300 hover:bg-[#1A1A1A] hover:border-[#F5B82E]/40 hover:-translate-y-0.5 overflow-hidden ${
                  isVoiceAgent 
                    ? 'md:col-span-2 bg-[#181113] border-[#F5B82E]/20' 
                    : 'bg-[#141414] border-white/5'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Spotlight hover indicator */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-[#F5B82E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-none z-10" />

                {/* Brandable service image */}
                <div className={`relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden border-b border-white/5 ${isVoiceAgent ? 'h-44 sm:h-56' : 'h-40'}`}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent pointer-events-none" />
                </div>

                <div className="space-y-4">
                  {/* Card Header tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#F5B82E] font-mono font-black text-xs uppercase tracking-widest">
                      [ 0{index + 1} ]
                    </span>
                    <span className="text-[9px] font-mono font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-none uppercase tracking-wide">
                      FULLY MANAGED
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-white group-hover:text-brand-gold uppercase italic tracking-tight transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <hr className="border-white/5" />

                  {/* Operational Features */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">What's included:</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                          <Check className="w-3.5 h-3.5 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="uppercase tracking-wide text-[10.5px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footnotes holding UK market specifics */}
                <div className="mt-8 pt-4 border-t border-white/5 space-y-3">
                  <div className="bg-[#1C1C1C] p-3 rounded-none border border-white/5">
                    <p className="text-[10px] text-zinc-500 font-mono uppercase font-black">UK Positioning:</p>
                    <p className="text-[11px] font-light text-zinc-400 mt-0.5">{service.ukMarketContext}</p>
                  </div>

                  <div className="flex items-start gap-2 text-[11px] text-zinc-300 font-mono bg-[#1E1E1E]/50 px-3 py-2 rounded-none border border-white/5">
                    <span className="text-zinc-500 flex-shrink-0">What you get:</span>
                    <strong className="text-brand-gold font-bold leading-snug">{service.whatYouGet}</strong>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA panel to unlock interactive consoles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 bg-[#141414] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6" 
          id="services-bottom-cta"
        >
          <div className="text-left max-w-xl">
            <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider mb-1">
              Want to calibrate these services for your postcodes?
            </h4>
            <p className="text-xs text-zinc-400 font-sans font-light">
              Use our live diagnostic and simulator tools to measure real-time search volume and potential covers uplift for your specific city.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenConsole('auditor')}
              className="px-6 py-3 bg-brand-gold hover:bg-[#E0A516] text-black text-xs font-display font-black uppercase tracking-widest transition-all cursor-pointer w-full sm:w-auto"
            >
              Analyze Your Location
            </button>
            <button
              onClick={() => onOpenConsole('calculator')}
              className="px-6 py-3 bg-brand-charcoal hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-display font-black uppercase tracking-widest transition-all cursor-pointer w-full sm:w-auto"
            >
              Simulate Revenue Lift
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
