import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, Terminal, TrendingUp } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import RestaurantTrustLogos from './RestaurantTrustLogos';
import Services from './Services';
import RoiCalculator from './RoiCalculator';
import CaseStudies from './CaseStudies';
import AuditForm from './AuditForm';
import Footer from './Footer';
import LegalModal from './LegalModal';

export default function MarkadeoApp() {
  const [activeLegalId, setActiveLegalId] = useState<string | null>(null);
  const [isConsoleActive, setIsConsoleActive] = useState(false);
  const [consoleTab, setConsoleTab] = useState<'calculator' | 'auditor'>('auditor');

  const handleOpenConsole = (tab: 'calculator' | 'auditor') => {
    setConsoleTab(tab);
    setIsConsoleActive(true);
    // Smooth scroll to top of viewport
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">
      {/* Configure navigation links and actions */}
      <Navbar onOpenConsole={handleOpenConsole} />
      
      <main className="relative overflow-x-hidden pt-16">
        <AnimatePresence mode="wait">
          {!isConsoleActive ? (
            <motion.div
              key="marketing-landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Banner Component */}
              <Hero onOpenConsole={handleOpenConsole} />

              {/* Grayscale low-opacity restaurant authority trust section */}
              <RestaurantTrustLogos />

              {/* Agency strategic offers */}
              <Services onOpenConsole={handleOpenConsole} />

              {/* Selected custom user-case transformation briefings */}
              <CaseStudies onOpenConsole={handleOpenConsole} />

              {/* Elegant Bottom Call-to-Action to enter interactive sandbox console */}
              <section className="py-20 bg-gradient-to-b from-[#0C0C0C] to-[#050505] border-t border-white/5 relative overflow-hidden" id="growth-console-cta-band">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#F5B82E] font-black uppercase py-1.5 px-3.5 bg-brand-gold/10 border border-[#F5B82E]/30">
                    EXPERIENCE THE TECHNOLOGY DIRECTLY
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white tracking-tight">
                    READY TO ESTIMATE YOUR RESTAURANT'S LIFT?
                  </h3>
                  <p className="text-zinc-400 font-sans text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
                    Access our secure high-street digital sandbox. Simulate realistic covers growth based on historical UK metrics, or trigger automated diagnostic crawls to inspect local postcode visibility in real-time.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => handleOpenConsole('auditor')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-[#E0A516] text-black font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none shadow-lg shadow-brand-gold/10 transition-all duration-200 cursor-pointer"
                    >
                      <span>Launch AI Audit Crawl</span>
                    </button>
                    <button
                      onClick={() => handleOpenConsole('calculator')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all cursor-pointer"
                    >
                      <span>Simulate Revenue Model</span>
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="agent-console-workspace"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
              id="strategic-workspace-console"
            >
              {/* Back to main site navigation & ledger info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsConsoleActive(false)}
                    className="inline-flex items-center gap-2 border border-white/10 bg-[#141414] hover:bg-white/5 py-2 px-4 rounded-none text-xs font-mono font-bold tracking-wider text-zinc-400 hover:text-white transition-all cursor-pointer uppercase"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#F5B82E]" />
                    Exit Strategic Console
                  </button>
                  
                  <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block" />
                  
                  <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <span>REGISTRY CODE: #UK-8392-COVERS</span>
                    <span>/</span>
                    <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE DIGITAL SANDBOX
                    </span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-brand-charcoal px-3 py-1.5 border border-zinc-800/60 font-black">
                  CRAWLER NODES // LONDON REGION-01 // GDPR-SECURE
                </div>
              </div>

              {/* Interactive Console Shell Content Container */}
              <div className="bg-[#0A0A0A] border border-white/[0.08] p-4 sm:p-8 relative">
                
                {/* Vintage red architectural styling anchors */}
                <div className="absolute top-0 left-0 w-8 h-px bg-brand-gold" />
                <div className="absolute top-0 left-0 w-px h-8 bg-brand-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-px bg-brand-gold" />
                <div className="absolute bottom-0 right-0 w-px h-8 bg-brand-gold" />

                {/* Console header content specifically structured for simplicity */}
                <div className="text-left mb-8 max-w-3xl">
                  <span className="text-[10px] font-mono tracking-widest text-[#F5B82E] uppercase px-2.5 py-1 bg-brand-gold/10 border border-[#F5B82E]/30 rounded-none inline-block font-bold">
                    MARKADEO CORE SYSTEM CONSOLE
                  </span>
                  <h2 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mt-2.5 mb-1.5">
                    CALIBRATE YOUR RESTAURANT REVENUE PLATFORM
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light">
                    Select a tool below to run live simulations or launch targeted crawling. These strategic modules project daily Reels lift, post-meal Instagram comment sequences, and local high-street postcode visibility.
                  </p>
                </div>

                {/* Switcher Tab Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border border-white/5 bg-zinc-950 p-2">
                  <button
                    onClick={() => setConsoleTab('auditor')}
                    className={`flex items-center justify-center gap-3 py-4 text-xs font-display font-black uppercase tracking-widest transition-all rounded-none cursor-pointer ${
                      consoleTab === 'auditor'
                        ? 'bg-brand-gold text-black shadow-lg'
                        : 'bg-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
                    }`}
                  >
                    <Terminal className="w-4 h-4" />
                    1. Search Calibrator & Crawler Desk
                  </button>
                  <button
                    onClick={() => setConsoleTab('calculator')}
                    className={`flex items-center justify-center gap-3 py-4 text-xs font-display font-black uppercase tracking-widest transition-all rounded-none cursor-pointer ${
                      consoleTab === 'calculator'
                        ? 'bg-brand-gold text-black shadow-lg'
                        : 'bg-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    2. Dynamic RoI Covers Calculator
                  </button>
                </div>

                {/* Active Tab Screen Display */}
                <div className="transition-all duration-300">
                  {consoleTab === 'auditor' ? (
                    <div className="animate-fade-in text-left">
                      <AuditForm />
                    </div>
                  ) : (
                    <div className="animate-fade-in text-left">
                      <RoiCalculator />
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Structured disclaimer-rich UK registry info footer */}
      <Footer onOpenLegal={(id) => setActiveLegalId(id)} />

      {/* Legal & Regulatory LEDGER viewers */}
      <AnimatePresence>
        {activeLegalId && (
          <LegalModal
            documentId={activeLegalId}
            onClose={() => setActiveLegalId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
