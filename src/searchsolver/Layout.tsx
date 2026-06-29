import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import ErrorBoundary from './ErrorBoundary';
import LegalModal from './LegalModal';
import { ScrollProgress, BackToTop } from './ScrollFX';
import WhatsAppButton from './WhatsAppButton';
import Chatbot from './Chatbot';

/* ------------------------------------------------------------------
   Layout — the persistent shell around every routed page.
   Preloader plays once; the navbar, footer, cursor, scroll progress
   and back-to-top live here. Each route fades through and resets the
   scroll position to the top.
------------------------------------------------------------------ */
export default function Layout() {
  const [loaded, setLoaded] = useState(false);
  const [activeLegalId, setActiveLegalId] = useState<string | null>(null);
  const location = useLocation();

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="bg-canvas min-h-screen text-ink font-sans antialiased">
      <AnimatePresence>
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <ScrollProgress />
      <BackToTop />
      <WhatsAppButton />
      <Chatbot />
      <CustomCursor />

      <Navbar />

      <main className="relative overflow-x-clip min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <ErrorBoundary key={location.pathname}>
              <Outlet context={{ openLegal: setActiveLegalId }} />
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onOpenLegal={setActiveLegalId} />

      <AnimatePresence>
        {activeLegalId && (
          <LegalModal documentId={activeLegalId} onClose={() => setActiveLegalId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
