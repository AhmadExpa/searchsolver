import { useState } from 'react';
import { Sparkles, Utensils, ChefHat, Flame, TrendingUp, ArrowRight } from 'lucide-react';

export default function RoiCalculator() {
  const [sessions, setSessions] = useState<number>(8000);
  const [conversion, setConversion] = useState<number>(1.8);
  const [aov, setAov] = useState<number>(45);
  const [sector, setSector] = useState<'casual' | 'premium' | 'delivery'>('casual');

  // Helper presets for industries
  const setSectorPresets = (type: 'casual' | 'premium' | 'delivery') => {
    setSector(type);
    if (type === 'casual') {
      setSessions(8000);
      setConversion(2.2);
      setAov(30);
    } else if (type === 'premium') {
      setSessions(4500);
      setConversion(1.5);
      setAov(75);
    } else {
      setSessions(15000);
      setConversion(3.5);
      setAov(28);
    }
  };

  // Calculations (unchanged)
  const currentOrders = Math.round(sessions * (conversion / 100));
  const currentRevenue = currentOrders * aov;

  const expectedSessions = Math.round(sessions * 2.2); // 220% of original
  const expectedConversion = parseFloat((conversion * 1.5).toFixed(3)); // 150% of original
  const expectedOrders = Math.round(expectedSessions * (expectedConversion / 100));
  const expectedRevenue = expectedOrders * aov;

  const revenueGain = expectedRevenue - currentRevenue;
  const standardManagedFee = 1950; // Average monthly managed posting retainer
  const roiMultiplier = revenueGain > 0 ? parseFloat((revenueGain / standardManagedFee).toFixed(1)) : 0;

  const presets = [
    { id: 'casual' as const, label: 'Casual / café', icon: Utensils },
    { id: 'premium' as const, label: 'Fine dining', icon: ChefHat },
    { id: 'delivery' as const, label: 'Takeaway / delivery', icon: Flame },
  ];

  return (
    <section id="calculator">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-wider">Revenue model</p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-ink">
            Calculate your untapped revenue
          </h2>
          <p className="mt-3 text-zinc-600">
            Slide the markers to match your restaurant today, and see the lift from consistent daily posting,
            maps visibility and local outreach.
          </p>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {presets.map((p) => {
            const Icon = p.icon;
            const active = sector === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSectorPresets(p.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-ink text-white shadow-soft'
                    : 'bg-white text-zinc-600 border border-line hover:border-brand-gold/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Sliders */}
          <div className="lg:col-span-7 rounded-[1.5rem] bg-white border border-line p-6 sm:p-8 shadow-soft space-y-8">
            <Slider
              label="Monthly digital menu views"
              value={`${sessions.toLocaleString()} views`}
              min={1000} max={50000} step={500} val={sessions}
              onChange={(v) => { setSessions(v); setSector('casual'); }}
              marks={['1k', '25k', '50k+']}
            />
            <Slider
              label="Table booking / direct order rate"
              value={`${conversion}%`}
              min={0.5} max={10} step={0.1} val={conversion}
              onChange={(v) => { setConversion(v); setSector('casual'); }}
              marks={['0.5%', '5%', '10%']}
            />
            <Slider
              label="Average guest bill (AOV)"
              value={`£${aov.toLocaleString()}`}
              min={15} max={150} step={5} val={aov}
              onChange={(v) => { setAov(v); setSector('casual'); }}
              marks={['£15', '£82', '£150+']}
            />

            <p className="text-xs text-zinc-500 bg-canvas border border-line rounded-2xl p-4 leading-relaxed">
              Estimates simulate hyper-local diner mapping — views can expand up to 2.2× through daily
              high-retention posting and localized search signals. Illustrative, not guaranteed.
            </p>
          </div>

          {/* Results */}
          <div className="lg:col-span-5 rounded-[1.5rem] bg-ink text-white p-6 sm:p-8 shadow-soft-lg flex flex-col">
            <div className="space-y-6 flex-1">
              <div>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Current revenue</span>
                <p className="mt-1 text-2xl font-display font-bold text-zinc-300">
                  £{currentRevenue.toLocaleString()}<span className="text-sm font-medium text-zinc-500"> /mo</span>
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">Based on {currentOrders} monthly covers.</p>
              </div>

              <div className="pt-5 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5 bg-brand-gold/15 text-brand-gold rounded-full px-2.5 py-1 text-[11px] font-semibold mb-2">
                  <Sparkles className="w-3 h-3" /> With Markadeo
                </span>
                <span className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">Projected revenue</span>
                <p className="mt-1 text-4xl font-display font-bold">
                  £{expectedRevenue.toLocaleString()}<span className="text-base font-medium text-zinc-400"> /mo</span>
                </p>
                <p className="text-sm text-zinc-400 mt-1">
                  Sustaining <strong className="text-white">{expectedSessions.toLocaleString()}</strong> diners
                  at a <strong className="text-white">{expectedConversion}%</strong> booking rate.
                </p>
              </div>

              <div className="pt-5 border-t border-white/10">
                <span className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">Estimated recovery</span>
                <p className="mt-1 text-3xl font-display font-bold gold-gradient-text">
                  +£{revenueGain.toLocaleString()}<span className="text-sm font-medium text-zinc-500"> /mo</span>
                </p>
                <div className="mt-3 flex items-center gap-2 bg-white/5 rounded-2xl p-3 text-sm text-zinc-300">
                  <TrendingUp className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span><strong className="text-white">{roiMultiplier}×</strong> return on a managed retainer.</span>
                </div>
              </div>
            </div>

            <a
              href="#contact-form-section"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold py-3.5 rounded-full transition-colors"
              id="btn-calculator-submit"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label, value, min, max, step, val, onChange, marks,
}: {
  label: string; value: string; min: number; max: number; step: number;
  val: number; onChange: (v: number) => void; marks: [string, string, string] | string[];
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <label className="text-sm font-semibold text-ink">{label}</label>
        <span className="font-semibold text-sm text-brand-gold-hover bg-brand-gold-wash rounded-full px-3 py-1">{value}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={val}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-gold w-full cursor-pointer"
        aria-label={label}
      />
      <div className="flex justify-between text-xs text-zinc-400">
        {marks.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </div>
  );
}
