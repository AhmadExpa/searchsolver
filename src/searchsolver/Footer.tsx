import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';
import { AestheticLogoProduct } from './AestheticLogo';
import { services, CONTACT, waLink, mailLink, DEFAULT_WA_MESSAGE } from './siteData';

interface FooterProps {
  onOpenLegal: (id: string) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const pages = [
    { label: 'Services', to: '/services' },
    { label: 'Web & App Design', to: '/web-app-design' },
    { label: 'Our work', to: '/work' },
    { label: 'About us', to: '/contact' },
  ];

  return (
    <footer id="footer" className="bg-ink text-zinc-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <AestheticLogoProduct tone="light" />
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              A creative content house. We get brands established on social platforms — content,
              3D, social, branding and build — so you reach a real audience and real visits.
            </p>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-brand-gold-hover transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Start a project
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-4">What we do</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Studio</h4>
            <ul className="space-y-2.5 text-sm">
              {pages.map((l) => (
                <li key={l.label}><Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-4">Get in touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-brand-gold transition-colors">
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={mailLink('Project enquiry — Markadeo')} className="text-zinc-200 hover:text-brand-gold transition-colors">
                  {CONTACT.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={CONTACT.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-brand-gold transition-colors inline-flex items-center gap-1">
                  Follow us <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {currentYear} Markadeo. All rights reserved.</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-zinc-300 transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-zinc-300 transition-colors cursor-pointer">Terms</button>
            <button onClick={() => onOpenLegal('gdpr')} className="hover:text-zinc-300 transition-colors cursor-pointer">Cookies</button>
          </div>
          <span>Creative content house · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
