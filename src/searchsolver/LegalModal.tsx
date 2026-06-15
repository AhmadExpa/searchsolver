import { X, FileText, Shield, Scale, Cookie, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { legalDocuments, LegalDocument } from './legalData';

interface LegalModalProps {
  documentId: string;
  onClose: () => void;
}

export default function LegalModal({ documentId, onClose }: LegalModalProps) {
  const doc = legalDocuments.find((d) => d.id === documentId);

  if (!doc) return null;

  // Select appropriate icon for document
  const getIcon = (id: string) => {
    switch (id) {
      case 'gdpr':
        return <Shield className="w-5 h-5 text-brand-red" />;
      case 'pecr':
        return <Cookie className="w-5 h-5 text-brand-red" />;
      case 'privacy':
        return <FileText className="w-5 h-5 text-brand-red" />;
      case 'terms':
        return <Scale className="w-5 h-5 text-brand-red" />;
      default:
        return <FileText className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      {/* Main card panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative w-full max-w-3xl bg-[#0F0F0F] border border-white/10 rounded-none shadow-2xl flex flex-col max-h-[85vh] z-10 overflow-hidden"
        id={`legal-modal-${doc.id}`}
      >
        {/* Top red header brand bar */}
        <div className="h-1 bg-brand-red w-full" />

        {/* Modal Header */}
        <div className="p-6 md:p-8 bg-[#141414] border-b border-white/5 flex items-start justify-between gap-6">
          <div className="space-y-1 text-left">
            <span className="text-[10px] font-mono tracking-widest text-brand-red uppercase font-black flex items-center gap-1.5">
              {getIcon(doc.id)}
              UK REGULATORY LEDGER // {doc.id.toUpperCase()}
            </span>
            <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight">
              {doc.title}
            </h3>
            <p className="text-xs text-zinc-400 font-sans font-light leading-relaxed">
              {doc.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-white/5 bg-transparent hover:bg-brand-red hover:text-white text-zinc-400 font-mono text-xs uppercase transition-all flex items-center gap-1.5 rounded-none"
            title="Close panel"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline font-bold tracking-widest text-[10px]">CLOSE</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-left max-h-[50vh]">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-mono font-black uppercase text-white tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red" />
                {section.heading}
              </h4>
              <div className="space-y-3 pl-3.5">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Verification section */}
          <div className="bg-[#141414] border border-white/5 p-4 rounded-none flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold uppercase">
                <Check className="w-3.5 h-3.5" />
                ACTIVE PRIVACY ACCREDITATION
              </div>
              <p className="text-[11px] text-zinc-500 font-light">
                Standard corporate registry compliant under Information Commissioner's Office guidelines.
              </p>
            </div>
            <span className="text-[9px] font-mono text-zinc-600 bg-black py-1 px-2.5 border border-white/5">
              ICO REF: Z2849503
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 bg-[#141414] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 font-mono">
          <span>{doc.lastUpdated}</span>
          <div className="flex items-center gap-4">
            <span>UK REGISTRY CORP ID: #13849502</span>
            <span>|</span>
            <button
              onClick={onClose}
              className="text-brand-red hover:underline font-bold"
            >
              FINALIZE COMPLIANCE
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
