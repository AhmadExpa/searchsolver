import { motion } from 'motion/react';
import { ArrowRight, Play, Film, Image as ImageIcon } from 'lucide-react';

export default function Hero({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background ambient glow elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full red-ambient-glow filter blur-[60px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full charcoal-ambient-glow filter blur-[80px]" />
        
        {/* Subtle grid pattern overlays */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" id="hero-grid-container">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-left-content">
            {/* Audience Callout Tag */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-brand-charcoal border border-zinc-800 rounded-none px-4 py-2 mb-8 text-zinc-300 font-mono tracking-wider text-xs"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2.5 w-2.5 bg-brand-red"></span>
              </span>
              <span>
                <strong className="text-white uppercase">UK RESTAURANT FOCUS //</strong> RECLAIMING SALES & DAILY SOCIALS
              </span>
            </motion.div>
 
            {/* Display Typography Header */}
            <motion.h1 
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-7xl lg:text-[75px] xl:text-[88px] leading-[0.85] font-black uppercase tracking-tighter text-white mb-8"
            >
              Pack Your <br/>
              <span className="text-brand-red">Restaurant</span>
            </motion.h1>

            {/* Professional sub-description */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              We manage social media accounts with daily postings, professional foodie reels, and proactive engagement. Custom-tailored to help independent restaurants and high-street brands rescue losing sales and multiply direct table bookings.
            </motion.p>

            {/* Practical Interactive Trigger CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={() => onOpenConsole('auditor')}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-[#C0153D] text-white font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none shadow-lg shadow-brand-red/10 transition-all duration-200 cursor-pointer"
                id="hero-cta-audit"
              >
                Launch Growth Console
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenConsole('calculator')}
                className="inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all cursor-pointer"
                id="hero-cta-services"
              >
                Estimate Revenue Lift &rarr;
              </button>
            </motion.div>

            {/* Micro badges instead of simple status text */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5 w-full"
            >
              <div>
                <span className="text-2xl font-display font-black text-white block">+185%</span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Covers Growth Rate</span>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
              <div>
                <span className="text-2xl font-display font-black text-white block">365 Days</span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Managed Campaigns</span>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
              <div>
                <span className="text-2xl font-display font-black text-white block">Zero Stress</span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Turnkey Execution</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column - Premium Media Showcase Grid (Highly responsive, fluid aspect ratio images) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 w-full" 
            id="hero-right-visual"
          >
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              {/* Media Frame 1: Culinary Close-up with Alt Text */}
              <div className="relative group overflow-hidden border border-white/5 bg-brand-charcoal aspect-[4/3] sm:aspect-square lg:aspect-[16/10] shadow-2xl">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-brand-dark/95 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-brand-red border border-brand-red/30">
                  <Film className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                  <span>ASMR SIZZLE FEED</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=90"
                  alt="High-fidelity ASMR sensory video frame showing hot charcoal barbeque grill sparks rising, glistening marinated pork skewers searing with hot smoke, extremely tactile culinary content styling"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                
                {/* Simulated Social Interface Overlay */}
                <div className="absolute top-3 right-3 z-20 bg-brand-red/15 border border-brand-red/20 px-2 py-0.5 text-[8px] font-mono uppercase text-brand-red font-bold">
                  85% AUDIENCE RETENTION
                </div>

                <div className="absolute bottom-4 left-4 z-10 text-left">
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">ASMR SENSORY AUDIO // 01</span>
                  <h4 className="text-xs font-display font-black text-white uppercase tracking-wider mt-0.5">Sizzling Charcoal Cricks & Fire Cracks</h4>
                </div>
              </div>

              {/* Media Frame 2: Packed Diners Space with Alt Text */}
              <div className="relative group overflow-hidden border border-white/5 bg-[#141414] aspect-[4/3] sm:aspect-square lg:aspect-[16/10] shadow-2xl">
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-brand-dark/95 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-[#E11D48] border border-[#E11D48]/30">
                  <ImageIcon className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>TARGET REPUTATION</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Cozy high-street restaurant filled to capacity with smiling young patrons dining in front of illuminated industrial-style hanging string globes, suggesting fully booked covers outcomes"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 z-10 text-left">
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">POSTCODE TARGETING // 02</span>
                  <h4 className="text-xs font-display font-black text-white uppercase tracking-wider mt-0.5">Sustain Packed High-Street Tables Day-in Day-out</h4>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
