import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { AestheticLogoProduct } from './AestheticLogo';

interface FooterProps {
  onOpenLegal: (id: string) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-dark/95 border-t border-white/5 pt-16 pb-12 text-zinc-500 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & UK registry */}
          <div className="md:col-span-4 space-y-4">
            <AestheticLogoProduct />
            <p className="text-zinc-400 leading-relaxed font-sans max-w-xs font-light">
              Surgical enterprise search engine optimization and performance marketing custom engineered for outstanding UK businesses seeking high-conversion growth.
            </p>
            <div className="space-y-1 bg-[#141414] p-3.5 rounded-none border border-white/5 inline-block font-mono text-[10.5px]">
              <p className="text-zinc-300">SearchSolver Digital Ltd</p>
              <p className="text-zinc-500">Registered in England & Wales: #13849502</p>
              <p className="text-zinc-500">UK VAT Registration: GB924738593</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-2 font-mono uppercase text-[10px]">
              <li><a href="#services" className="hover:text-white transition-colors">Enterprise SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance PPC</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conversion Rate Optimisation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Search Trend Intelligence</a></li>
            </ul>
          </div>

          {/* Column 3: Partner Resources */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2 font-mono uppercase text-[10px]">
              <li><a href="#clients" className="hover:text-white transition-colors">Previous Collaborations</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Strategic Case Studies</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">UK Search ROI Tool</a></li>
              <li><a href="#audit" className="hover:text-white transition-colors">Self-Service Domain Audit</a></li>
            </ul>
          </div>

          {/* Column 4: Offices and Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-black text-xs text-white uppercase tracking-widest">Offices & Contacts</h4>
            <ul className="space-y-3 font-sans text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-350 text-[11px] font-mono uppercase block mb-0.5">London HQ:</strong>
                  <p className="text-zinc-500">Pancras Square, King's Cross, London, N1C 4AG</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-355 text-[11px] font-mono uppercase block mb-0.5">Manchester Dev Desk:</strong>
                  <p className="text-zinc-500">Hardman Square, Spinningfields, Manchester, M3 3EB</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5 border-t border-white/5 pt-2.5 mt-2">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="mailto:partnerships@searchsolver.net" className="hover:text-brand-red transition-colors text-zinc-300 font-mono">partnerships@searchsolver.net</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar disclaimers */}
        <hr className="border-white/5 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {currentYear} SearchSolver. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <button
              onClick={() => onOpenLegal('gdpr')}
              className="hover:text-zinc-400 cursor-pointer transition-colors focus:outline-none"
            >
              UK GDPR Compliance
            </button>
            <button
              onClick={() => onOpenLegal('pecr')}
              className="hover:text-zinc-400 cursor-pointer transition-colors focus:outline-none"
            >
              PECR Cookie Directive
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-400 cursor-pointer transition-colors focus:outline-none"
            >
              Privacy Charter
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-400 cursor-pointer transition-colors focus:outline-none"
            >
              Terms of Engagement
            </button>
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>ICO Data Registry Number: Z2849503</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
