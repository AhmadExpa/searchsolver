import { X, FileText, Shield, Scale, Cookie, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { legalDocuments } from './legalData';

interface LegalModalProps {
  documentId: string;
  onClose: () => void;
}

export default function LegalModal({ documentId, onClose }: LegalModalProps) {
  const doc = legalDocuments.find((d) => d.id === documentId);
  if (!doc) return null;

  const getIcon = (id: string) => {
    switch (id) {
      case 'gdpr': return <Shield className="w-5 h-5" />;
      case 'pecr': return <Cookie className="w-5 h-5" />;
      case 'privacy': return <FileText className="w-5 h-5" />;
      case 'terms': return <Scale className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative w-full max-w-2xl bg-white rounded-[1.5rem] shadow-soft-lg flex flex-col max-h-[85vh] z-10 overflow-hidden"
        id={`legal-modal-${doc.id}`}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-line flex items-start justify-between gap-6">
          <div className="flex items-start gap-3">
            <span className="w-11 h-11 rounded-xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover flex-shrink-0">
              {getIcon(doc.id)}
            </span>
            <div>
              <span className="text-xs font-semibold text-brand-gold-hover uppercase tracking-wider">Legal</span>
              <h3 className="font-display font-bold text-xl text-ink tracking-tight">{doc.title}</h3>
              <p className="text-sm text-zinc-600 mt-0.5">{doc.subtitle}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-canvas text-zinc-500 hover:text-ink transition-colors flex-shrink-0" title="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-7">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-semibold text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {section.heading}
              </h4>
              <div className="space-y-2 pl-3.5">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm text-zinc-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-canvas border border-line p-4 flex items-center gap-2 text-sm text-zinc-600">
            <Check className="w-4 h-4 text-brand-gold-hover" />
            Questions about this policy? Message us any time.
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <span>{doc.lastUpdated}</span>
          <button onClick={onClose} className="font-semibold text-ink hover:text-brand-gold-hover transition-colors cursor-pointer">
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
