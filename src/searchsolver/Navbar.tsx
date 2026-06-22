import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
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

  // Close the mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Every page opens with a dark video hero, so at the very top of any
  // route the bar sits over dark footage — use light text until the user
  // scrolls (when it becomes the solid white bar) or opens the mobile menu.
  const onDarkHero = !scrolled && !mobileMenuOpen;

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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 -mr-2 rounded-full transition-colors ${
              onDarkHero ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-black/[0.05]'
            }`}
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
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                      isActive ? 'text-ink bg-black/[0.05]' : 'text-zinc-700 hover:bg-black/[0.04]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-ink text-white px-5 py-4 rounded-2xl text-base font-semibold transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
