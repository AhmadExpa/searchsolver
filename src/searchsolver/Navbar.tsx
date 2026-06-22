import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AestheticLogoProduct } from './AestheticLogo';
import { navItems, waLink, DEFAULT_WA_MESSAGE } from './siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on route change (so picking a page shows it, then hides)
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock page scroll while the full-screen menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  // Every page opens with a dark video hero, so at the very top of any
  // route the bar sits over dark footage — use light text until the user
  // scrolls (when it becomes the solid white bar) or opens the mobile menu.
  const onDarkHero = !scrolled && !mobileMenuOpen;

  return (
    <>
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
            <Link to="/" className="flex items-center animate-fade-in" aria-label="Markadeo home">
              <AestheticLogoProduct tone={onDarkHero ? 'light' : 'dark'} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                      onDarkHero
                        ? 'text-white/85 hover:text-white hover:bg-white/10'
                        : 'text-zinc-600 hover:text-ink hover:bg-black/[0.04]'
                    } ${isActive ? (onDarkHero ? 'text-white bg-white/10' : 'text-ink bg-black/[0.05]') : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-1.5 bg-ink text-white hover:bg-black px-5 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                Get in touch
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className={`md:hidden p-2 -mr-2 rounded-full transition-colors relative z-[60] ${
                onDarkHero ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-black/[0.05]'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl flex flex-col"
          >
            {/* Ambient glow */}
            <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-brand-gold/15 blur-[120px] pointer-events-none" aria-hidden />

            <nav className="relative flex-1 flex flex-col justify-center px-8 gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 py-2.5 font-display font-bold tracking-tight transition-colors ${
                        isActive ? 'text-brand-gold-hover' : 'text-ink hover:text-brand-gold-hover'
                      }`
                    }
                  >
                    <span className="text-sm font-mono text-zinc-400">0{i + 1}</span>
                    <span className="text-4xl sm:text-5xl">{item.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 + navItems.length * 0.05, duration: 0.4 }}
              className="relative px-8 pb-12"
            >
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 bg-ink text-white px-5 py-4 rounded-2xl text-base font-semibold transition-colors hover:bg-black cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
