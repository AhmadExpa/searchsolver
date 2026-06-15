import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AestheticLogoProduct } from './AestheticLogo';

export default function Navbar({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Trust Archive', href: '#restaurant-authority-trust-section' },
    { name: 'RoI Predictor', action: () => onOpenConsole('calculator') },
    { name: 'Case Studies', href: '#case-studies' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/[0.08]'
            : 'bg-transparent'
        } py-3 sm:py-4`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group animate-fade-in" id="nav-logo">
              <AestheticLogoProduct />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" id="nav-desktop-menu">
              {menuItems.map((item) => {
                if (item.action) {
                  return (
                    <button
                      key={item.name}
                      onClick={item.action}
                      className="font-display font-bold text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative py-2 cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all hover:after:w-full"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-display font-bold text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* High-Impact Actions */}
            <div className="hidden md:flex items-center gap-4" id="nav-actions">
              {/* UK Audience Signal */}
              <div className="flex items-center gap-2 bg-brand-charcoal border border-zinc-800 px-3 py-1.5 rounded-none text-xs text-zinc-300 font-mono tracking-wider">
                <span className="font-sans font-bold text-[10px] tracking-widest text-[#E11D48] uppercase">UK SPECIALIST</span>
              </div>

              <button
                onClick={() => onOpenConsole('auditor')}
                className="border border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white px-6 py-2.5 uppercase text-xs font-bold tracking-widest transition-all duration-200 rounded-none inline-flex items-center gap-2 cursor-pointer"
                id="btn-nav-audit"
              >
                Increase Your Sales
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-1.5 sm:gap-3">
              <div className="hidden sm:flex items-center gap-1.5 bg-brand-charcoal border border-zinc-800 px-2.5 py-1 rounded-none text-[9px] text-[#E11D48] font-mono font-bold tracking-wider">
                <span>UK FOCUS</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-none transition-colors"
                id="btn-mobile-menu"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Beautiful Full-Screen Luxury Overlay) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 w-screen h-screen z-40 bg-brand-dark/98 backdrop-blur-2xl md:hidden flex flex-col justify-center px-6 sm:px-12"
              id="mobile-menu-container"
            >
              <div className="flex flex-col space-y-6 sm:space-y-8 max-w-md mx-auto w-full">
                {/* Visual Accent */}
                <div className="border-l-2 border-brand-red pl-4 py-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">NAVIGATION MENU</span>
                  <span className="text-[11px] font-mono text-[#E11D48] uppercase tracking-wider block mt-0.5">SEARCHSOLVER // UK</span>
                </div>

                <div className="space-y-4">
                  {menuItems.map((item, idx) => {
                    const isActionButton = !!item.action;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                      >
                        {isActionButton ? (
                          <button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              item.action?.();
                            }}
                            className="block w-full text-left py-2 font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-zinc-100 hover:text-brand-red transition-all cursor-pointer"
                          >
                            {item.name} <span className="text-brand-red/60 text-sm italic font-light lowercase">.roi</span>
                          </button>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 font-display font-black text-2xl sm:text-3xl uppercase tracking-wider text-zinc-100 hover:text-brand-red transition-all"
                          >
                            {item.name}
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="pt-6 border-t border-white/5 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono tracking-wide uppercase">
                    <ShieldCheck className="w-4 h-4 text-brand-red" />
                    <span>Google Certified UK Expert</span>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsole('auditor');
                    }}
                    className="w-full text-center bg-brand-red hover:bg-[#C0153D] text-white font-display font-black text-xs uppercase tracking-widest py-4 rounded-none block transition-all cursor-pointer shadow-lg shadow-brand-red/20"
                    id="btn-mobile-nav-audit"
                  >
                    Increase Your Sales &rarr;
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
