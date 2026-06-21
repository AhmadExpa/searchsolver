import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AestheticLogoProduct } from './AestheticLogo';

export default function Navbar({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'How it works', href: '#growth-engine' },
    { name: 'Playbook', href: '#case-studies' },
    { name: 'ROI calculator', action: () => onOpenConsole('calculator') },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/85 backdrop-blur-xl border-b border-line shadow-soft py-2.5'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center animate-fade-in" id="nav-logo" aria-label="Markadeo home">
            <AestheticLogoProduct tone="dark" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" id="nav-desktop-menu">
            {menuItems.map((item) =>
              item.action ? (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="px-3.5 py-2 text-sm font-medium text-zinc-600 hover:text-ink hover:bg-black/[0.04] rounded-full transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-zinc-600 hover:text-ink hover:bg-black/[0.04] rounded-full transition-colors"
                >
                  {item.name}
                </a>
              ),
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenConsole('auditor')}
              className="group inline-flex items-center gap-1.5 bg-ink text-white hover:bg-black px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer shadow-soft"
              id="btn-nav-audit"
            >
              Get free audit
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-ink rounded-full hover:bg-black/[0.05] transition-colors"
            id="btn-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-white border-b border-line shadow-soft-lg"
            id="mobile-menu-container"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {menuItems.map((item) =>
                item.action ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      item.action?.();
                    }}
                    className="text-left px-4 py-3.5 rounded-2xl text-base font-medium text-ink hover:bg-black/[0.04] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3.5 rounded-2xl text-base font-medium text-ink hover:bg-black/[0.04] transition-colors"
                  >
                    {item.name}
                  </a>
                ),
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsole('auditor');
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-white px-5 py-4 rounded-2xl text-base font-semibold transition-colors cursor-pointer"
                id="btn-mobile-nav-audit"
              >
                Get free audit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
