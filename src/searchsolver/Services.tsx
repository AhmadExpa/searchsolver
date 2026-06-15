import { motion } from 'motion/react';
import { servicesData } from './servicesData';
import { Check, ShieldCheck, HelpCircle, Landmark, TrendingUp } from 'lucide-react';

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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] red-ambient-glow filter blur-[60px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] charcoal-ambient-glow filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-main-container">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left" id="services-headings-left">
            <span className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase px-3.5 py-1.5 bg-brand-red/10 border border-[#E11D48]/30 rounded-none inline-block mb-3 font-bold">
              WHAT WE DO BEST
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">
              Scientific Search Services to <span className="text-[#E11D48]">Accelerate Revenue</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 font-light">
              We omit vanity fluff. Each of our execution quadrants is engineered precisely for maximum British client visibility, strict GDPR compliance, and direct, verifiable digital impact.
            </p>
          </div>
          
          <div className="flex-shrink-0" id="services-headings-right">
            <div className="bg-[#141414] border border-white/5 p-4 rounded-none flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#E11D48]" />
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">Our Guarantee</p>
                <p className="text-xs text-white">Full transparent reporting metrics & ROI models</p>
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
                className={`group relative border p-6 sm:p-8 rounded-none flex flex-col justify-between transition-all duration-300 hover:bg-[#1A1A1A] hover:border-[#E11D48]/40 overflow-hidden ${
                  isVoiceAgent 
                    ? 'md:col-span-2 bg-[#181113] border-[#E11D48]/20' 
                    : 'bg-[#141414] border-white/5'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Spotlight hover indicator */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-[#E11D48]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-none" />
                
                <div className="space-y-4">
                  {/* Card Header tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#E11D48] font-mono font-black text-xs uppercase tracking-widest">
                      [ PHASE 0{index + 1} ]
                    </span>
                    <span className="text-[9px] font-mono font-bold text-rose-400 bg-brand-red/10 border border-brand-red/20 px-2.5 py-0.5 rounded-none uppercase tracking-wide">
                      ROI FOCUS
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-white group-hover:text-brand-red uppercase italic tracking-tight transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <hr className="border-white/5" />

                  {/* Operational Features */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Service Deliverables:</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                          <Check className="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                          <span className="uppercase tracking-wide text-[10.5px]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footnotes holding UK market specifics */}
                <div className="mt-8 pt-4 border-t border-white/5 space-y-3">
                  <div className="bg-[#1C1C1C] p-3 rounded-none border border-white/5">
                    <p className="text-[10px] text-zinc-500 font-mono uppercase font-black">UK Positioning Advantage:</p>
                    <p className="text-[11px] font-light text-zinc-400 mt-0.5">{service.ukMarketContext}</p>
                  </div>
                  
                  <div className="flex justify-between items-center text-[11px] text-zinc-300 font-mono bg-[#1E1E1E]/50 px-3 py-1.5 rounded-none border border-white/5">
                    <span>Performance Metric:</span>
                    <strong className="text-rose-400 font-black">{service.roiEstimate}</strong>
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
              className="px-6 py-3 bg-brand-red hover:bg-[#C0153D] text-white text-xs font-display font-black uppercase tracking-widest transition-all cursor-pointer w-full sm:w-auto"
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
