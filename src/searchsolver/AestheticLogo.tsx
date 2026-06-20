export function AestheticLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 transition-transform duration-300 ${className}`}>
      {/* Sharp bordered frame */}
      <div className="w-full h-full border border-white/20 bg-[#0E0E0E] flex items-center justify-center p-1.5 relative overflow-hidden">
        {/* Reticle focus corner ticks */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-gold"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-gold"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-gold"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-gold"></div>

        {/* Monoline "M" mark — Markadeo */}
        <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19 V5.5 L12 13 L20 5.5 V19" />
          {/* Gold accent node at the top-right terminal */}
          <circle cx="20" cy="5.5" r="1.9" fill="#F5B82E" stroke="none" />
        </svg>
      </div>
      {/* Live pulsing state dot indicator */}
      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#0A0A0A] border border-white/10 flex items-center justify-center">
        <span className="w-1 h-1 bg-brand-gold animate-pulse"></span>
      </span>
    </div>
  );
}

export function AestheticLogoProduct() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 group">
      <AestheticLogoIcon className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-105" />
      <div className="flex flex-col text-left">
        <span className="font-display font-black text-lg sm:text-2xl tracking-tighter uppercase text-white group-hover:text-brand-gold transition-colors leading-none mb-0.5">
          Marka<span className="text-brand-gold">deo</span>
        </span>
        <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1 font-bold leading-normal">
          <span className="inline-block w-1 h-1 bg-emerald-500 flex-shrink-0"></span>
          <span className="hidden sm:inline">SOCIAL & LOCAL SEARCH // UK</span>
          <span className="sm:hidden">SOCIAL & SEARCH // UK</span>
        </span>
      </div>
    </div>
  );
}
