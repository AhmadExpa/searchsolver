import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { AestheticLogoProduct } from './AestheticLogo';

interface FooterProps {
  onOpenLegal: (id: string) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { label: 'Daily social management', href: '#services' },
    { label: 'Local search & maps', href: '#services' },
    { label: 'Paid social campaigns', href: '#services' },
    { label: 'Booking conversion', href: '#services' },
  ];
  const resources = [
    { label: 'How it works', href: '#growth-engine' },
    { label: 'Growth playbook', href: '#case-studies' },
    { label: 'ROI calculator', href: '#calculator' },
    { label: 'Free AI audit', href: '#contact-form-section' },
  ];

  return (
    <footer id="footer" className="bg-ink text-zinc-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <AestheticLogoProduct tone="light" />
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              Daily social media and local search, fully managed for independent UK restaurants and
              high-street brands. Transparent, honest, rolling-monthly.
            </p>
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-xs space-y-1">
              <p className="text-zinc-200 font-medium">Markadeo Digital Ltd</p>
              <p>Registered in England &amp; Wales: #13849502</p>
              <p>UK VAT: GB924738593</p>
            </div>
          </div>

          {/* Solutions */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              {solutions.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {resources.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-sm mb-4">Offices &amp; contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-200 font-medium block">London HQ</span>
                  <span className="text-zinc-400">Pancras Square, King's Cross, London, N1C 4AG</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-200 font-medium block">Manchester desk</span>
                  <span className="text-zinc-400">Hardman Square, Spinningfields, Manchester, M3 3EB</span>
                </div>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:partnerships@markadeo.com" className="text-zinc-200 hover:text-brand-gold transition-colors">partnerships@markadeo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {currentYear} Markadeo. All rights reserved.</span>
            <button onClick={() => onOpenLegal('gdpr')} className="hover:text-zinc-300 transition-colors cursor-pointer">UK GDPR</button>
            <button onClick={() => onOpenLegal('pecr')} className="hover:text-zinc-300 transition-colors cursor-pointer">Cookies (PECR)</button>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-zinc-300 transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-zinc-300 transition-colors cursor-pointer">Terms</button>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>ICO registry: Z2849503</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
