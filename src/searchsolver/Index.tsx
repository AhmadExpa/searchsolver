import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, Sparkles, TrendingUp } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import RestaurantTrustLogos from './RestaurantTrustLogos';
import Services from './Services';
import RoiCalculator from './RoiCalculator';
import CaseStudies from './CaseStudies';
import AuditForm from './AuditForm';
import Footer from './Footer';
import LegalModal from './LegalModal';
import ProcessShowcase from './ProcessShowcase';
import { ScrollProgress, BackToTop, Reveal } from './ScrollFX';

export default function MarkadeoApp() {
  const [activeLegalId, setActiveLegalId] = useState<string | null>(null);
  const [isConsoleActive, setIsConsoleActive] = useState(false);
  const [consoleTab, setConsoleTab] = useState<'calculator' | 'auditor'>('auditor');

  const handleOpenConsole = (tab: 'calculator' | 'auditor') => {
    setConsoleTab(tab);
    setIsConsoleActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-canvas min-h-screen text-ink font-sans antialiased">
      <ScrollProgress />
      <BackToTop />

      <Navbar onOpenConsole={handleOpenConsole} />

      <main className="relative overflow-x-clip">
        <AnimatePresence mode="wait">
          {!isConsoleActive ? (
            <motion.div
              key="marketing-landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onOpenConsole={handleOpenConsole} />
              <RestaurantTrustLogos />
              <Services onOpenConsole={handleOpenConsole} />
              <ProcessShowcase />
              <CaseStudies onOpenConsole={handleOpenConsole} />

              {/* Bottom CTA band */}
              <section id="growth-console-cta-band" className="py-20 sm:py-24">
                <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white p-10 sm:p-14 text-center">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-brand-gold/20 blur-[120px] pointer-events-none blob-drift" aria-hidden />
                    <div className="relative">
                      <span className="inline-block text-sm font-semibold text-brand-gold uppercase tracking-wider">
                        Experience it directly
                      </span>
                      <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight">
                        Ready to estimate your restaurant's <span className="gold-shimmer">lift?</span>
                      </h3>
                      <p className="mt-4 text-zinc-300 max-w-xl mx-auto">
                        Run a free AI audit of your local search visibility, or model your potential growth with
                        transparent UK benchmarks — before you commit to anything.
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleOpenConsole('auditor')}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
                        >
                          <Sparkles className="w-4 h-4" />
                          Launch AI audit
                        </motion.button>
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleOpenConsole('calculator')}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer border border-white/15"
                        >
                          <TrendingUp className="w-4 h-4" />
                          Simulate revenue
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="agent-console-workspace"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16"
              id="strategic-workspace-console"
            >
              {/* Console top bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <button
                  onClick={() => setIsConsoleActive(false)}
                  className="inline-flex items-center gap-2 bg-white border border-line hover:bg-canvas py-2.5 px-4 rounded-full text-sm font-semibold text-zinc-600 hover:text-ink transition-colors cursor-pointer shadow-soft"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to site
                </button>
                <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live sandbox — UK region
                </div>
              </div>

              {/* Tab switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-xl">
                <button
                  onClick={() => setConsoleTab('auditor')}
                  className={`flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                    consoleTab === 'auditor' ? 'bg-ink text-white shadow-soft' : 'bg-white text-zinc-600 border border-line hover:border-brand-gold/50'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  AI audit &amp; diagnostic
                </button>
                <button
                  onClick={() => setConsoleTab('calculator')}
                  className={`flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                    consoleTab === 'calculator' ? 'bg-ink text-white shadow-soft' : 'bg-white text-zinc-600 border border-line hover:border-brand-gold/50'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  ROI calculator
                </button>
              </div>

              <div className="animate-fade-in">
                {consoleTab === 'auditor' ? <AuditForm /> : <RoiCalculator />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onOpenLegal={(id) => setActiveLegalId(id)} />

      <AnimatePresence>
        {activeLegalId && (
          <LegalModal documentId={activeLegalId} onClose={() => setActiveLegalId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
