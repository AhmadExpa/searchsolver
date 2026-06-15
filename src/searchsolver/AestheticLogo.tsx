import { Shield } from 'lucide-react';

export function AestheticLogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 transition-transform duration-300 ${className}`}>
      {/* Outer brutalist sharp grid frame */}
      <div className="w-full h-full border border-white/20 bg-[#0E0E0E] flex items-center justify-center p-1.5 relative overflow-hidden">
        {/* Reticle focus corner lines */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-red"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-red"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-red"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-red"></div>
        
        {/* Geometric crosshair vector graphic representing search precision & indexing solvers */}
        <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#E11D48" strokeLinecap="square" />
          <path d="M12 6l6 6-6 6-6-6z" stroke="currentColor" strokeLinecap="square" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>
      </div>
      {/* Live pulsing state dot indicator */}
      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#0A0A0A] border border-white/10 flex items-center justify-center">
        <span className="w-1 h-1 bg-brand-red animate-pulse"></span>
      </span>
    </div>
  );
}

export function AestheticLogoProduct() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 group">
      <AestheticLogoIcon className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-105" />
      <div className="flex flex-col text-left">
        <span className="font-display font-black text-lg sm:text-2xl tracking-tighter uppercase text-white group-hover:text-brand-red transition-colors leading-none mb-0.5">
          Search<span className="text-brand-red">Solver</span>
        </span>
        <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1 font-bold leading-normal">
          <span className="inline-block w-1 h-1 bg-emerald-500 flex-shrink-0"></span>
          <span className="hidden sm:inline">ALGORITHMIC OPTIMISATION // UK</span>
          <span className="sm:hidden">ALGORITHMS // UK</span>
        </span>
      </div>
    </div>
  );
}
