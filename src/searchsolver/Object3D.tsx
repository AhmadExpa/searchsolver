import { Play, Clapperboard, Boxes, Wand2, Scissors, type LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------
   Object3D — a marketing-relevant CSS 3D scene: a phone showing a
   creative "reel" being edited, gently tilting and floating in real
   perspective. The floating chips name what we actually do (Film, 3D,
   Motion) — no fabricated likes/comments/reach. Pure CSS 3D
   (preserve-3d + parent perspective); freezes under reduced motion.
------------------------------------------------------------------ */
function Chip({
  icon: Icon,
  label,
  className,
  float,
}: {
  icon: LucideIcon;
  label: string;
  className: string;
  float: string;
}) {
  return (
    <div className={`absolute z-20 ${className} ${float}`}>
      <div className="flex items-center gap-2 bg-white rounded-full pl-2 pr-3.5 py-1.5 shadow-soft-lg border border-line">
        <span className="w-7 h-7 rounded-full bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover">
          <Icon className="w-3.5 h-3.5" />
        </span>
        <span className="font-display font-bold text-xs text-ink">{label}</span>
      </div>
    </div>
  );
}

export default function Object3D() {
  return (
    <div className="scene-3d relative w-[300px] h-[440px] sm:w-[340px] flex items-center justify-center" aria-hidden>
      {/* Ambient glow */}
      <div className="absolute w-64 h-64 rounded-full bg-brand-gold/25 blur-[90px]" />

      {/* Floating discipline chips — what we make, no fake metrics */}
      <Chip icon={Clapperboard} label="Film" className="left-0 top-12" float="badge-float-a" />
      <Chip icon={Boxes} label="3D" className="left-2 bottom-20" float="badge-float-b" />
      <Chip icon={Wand2} label="Motion" className="right-0 top-6" float="badge-float-c" />

      {/* The phone */}
      <div className="phone-3d" style={{ width: 196, height: 404 }}>
        <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-b from-[#222225] to-[#0b0b0c] border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] p-2.5">
          {/* Screen */}
          <div className="relative w-full h-full rounded-[1.9rem] overflow-hidden bg-ink">
            {/* Notch */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/15 z-10" />

            {/* Reel thumbnail */}
            <div className="relative h-[56%] bg-gradient-to-br from-brand-gold/30 via-[#3a2f12] to-ink flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=70"
                alt=""
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <span className="relative w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-ink shadow-gold">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </span>
              <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur rounded-full px-2 py-0.5">
                Reel · 4K
              </span>
            </div>

            {/* Editing UI — a timeline, not engagement stats */}
            <div className="p-3.5 space-y-3">
              <div className="flex items-center gap-2 text-white/60">
                <Scissors className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-[10px] uppercase tracking-wider">Editing timeline</span>
              </div>

              {/* Scrubber */}
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-hover" />
              </div>

              {/* Two clip tracks */}
              <div className="space-y-2">
                <div className="flex gap-1.5">
                  <span className="h-3 rounded-sm bg-brand-gold/70" style={{ width: '38%' }} />
                  <span className="h-3 rounded-sm bg-white/15" style={{ width: '24%' }} />
                  <span className="h-3 rounded-sm bg-white/10 flex-1" />
                </div>
                {/* Audio waveform */}
                <div className="flex items-center gap-[3px] h-8">
                  {[40, 70, 30, 90, 55, 80, 35, 65, 50, 85, 45, 60].map((h, i) => (
                    <span key={i} className="flex-1 rounded-full bg-white/25" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
