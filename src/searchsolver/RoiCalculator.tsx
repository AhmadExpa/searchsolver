import { useState } from 'react';
import { Sparkles, Flame, Heading, Landmark, Utensils, Award, ChefHat, TrendingUp } from 'lucide-react';

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

  // Calculations
  const currentOrders = Math.round(sessions * (conversion / 100));
  const currentRevenue = currentOrders * aov;

  // SearchSolver Impact: Social Posting + Daily Engagement Lift
  // Boost digital views by 200% (daily publishing) and conversion rates by 50%
  const expectedSessions = Math.round(sessions * 2.2); // 220% of original
  const expectedConversion = parseFloat((conversion * 1.50).toFixed(3)); // 150% of original
  const expectedOrders = Math.round(expectedSessions * (expectedConversion / 100));
  const expectedRevenue = expectedOrders * aov;

  const revenueGain = expectedRevenue - currentRevenue;
  const standardManagedFee = 1950; // Average monthly managed posting retainer
  const roiMultiplier = revenueGain > 0 ? parseFloat((revenueGain / standardManagedFee).toFixed(1)) : 0;

  return (
    <section id="calculator" className="py-24 bg-brand-charcoal relative border-t border-b border-zinc-900">
      <div className="absolute inset-0 pointer-events-none red-ambient-glow filter blur-[120px] opacity-20 top-1/4 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="roi-calculator-container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase px-3.5 py-1.5 bg-brand-red/10 border border-[#E11D48]/30 rounded-none inline-block mb-3 font-bold">
            UK DINER DEMAND MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4 uppercase tracking-tighter">
            CALCULATE UNTAPPED <span className="text-[#E11D48]">RESTAURANT REVENUE</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light">
            Slide the markers below to replicate your restaurant's current parameters. See the direct financial turnaround when transitioning to consistent daily postings, maps superiority, and targeted community social media outreach.
          </p>
        </div>

        {/* Outer Box */}
        <div className="bg-[#141414] border border-white/5 rounded-none p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          
          {/* Presets Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-6 border-b border-white/5" id="sector-presets">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest font-bold mr-2">RESTAURANT ARCTYPE:</span>
            <button
              onClick={() => setSectorPresets('casual')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-none text-xs font-display font-bold uppercase tracking-widest transition-all cursor-pointer ${
                sector === 'casual'
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-gray text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              Casual Dining / Cafe
            </button>
            <button
              onClick={() => setSectorPresets('premium')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-none text-xs font-display font-bold uppercase tracking-widest transition-all cursor-pointer ${
                sector === 'premium'
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-gray text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              <ChefHat className="w-3.5 h-3.5" />
              Fine Bistro / Steakhouse
            </button>
            <button
              onClick={() => setSectorPresets('delivery')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-none text-xs font-display font-bold uppercase tracking-widest transition-all cursor-pointer ${
                sector === 'delivery'
                  ? 'bg-brand-red text-white'
                  : 'bg-brand-gray text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Takeaway / Direct Delivery
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-8" id="calculator-inputs">
              
              {/* Traffic Sessions Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                  <label className="font-display font-bold uppercase tracking-wide text-xs text-zinc-200">Estimated Monthly Digital Menu Views (Traffic)</label>
                  <span className="font-mono text-brand-red font-bold bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-none text-xs">
                    {sessions.toLocaleString()} viewers
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={sessions}
                  onChange={(e) => {
                    setSessions(Number(e.target.value));
                    setSector('casual'); // clear presets focus highlight
                  }}
                  className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-brand-red"
                  aria-label="Estimated Monthly Digital Menu Views"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>1,000 views</span>
                  <span>25,000 views</span>
                  <span>50,000+ views</span>
                </div>
              </div>

              {/* Conversion Rate Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                  <label className="font-display font-bold uppercase tracking-wide text-xs text-zinc-200">Table Booking / Direct Order Rate (%)</label>
                  <span className="font-mono text-rose-400 font-bold bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-none text-xs">
                    {conversion}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.1"
                  value={conversion}
                  onChange={(e) => {
                    setConversion(Number(e.target.value));
                    setSector('casual');
                  }}
                  className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-brand-red"
                  aria-label="Table Booking Rate"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>0.5%</span>
                  <span>5.0%</span>
                  <span>10.0%</span>
                </div>
              </div>

              {/* Average Guest Spend Bill */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                  <label className="font-display font-bold uppercase tracking-wide text-xs text-zinc-200">Average Guest Bill Size (AOV)</label>
                  <span className="font-mono text-zinc-100 font-bold bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-none text-xs">
                    £{aov.toLocaleString()} GBP
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={aov}
                  onChange={(e) => {
                    setAov(Number(e.target.value));
                    setSector('casual');
                  }}
                  className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-brand-red"
                  aria-label="Average Guest Spend"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>£15</span>
                  <span>£82</span>
                  <span>£150+</span>
                </div>
              </div>

              {/* Interactive footnote */}
              <p className="text-[11px] text-zinc-500 italic bg-[#1E1E1E] p-3 rounded-none border border-white/5 font-mono text-left">
                *Calculation simulates hyper-local customer mapping. Expect average table views to expand up to 2.2x via seamless daily high-retention postings and localized search signals.
              </p>
            </div>

            {/* Calculations Result Column */}
            <div className="lg:col-span-5 bg-brand-charcoal p-6 rounded-none border border-white/5 flex flex-col justify-between h-full" id="calculator-results">
              <div className="space-y-6 text-left">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">CURRENT REVENUE</span>
                  <p className="text-2xl font-display font-black text-zinc-400 uppercase">£{currentRevenue.toLocaleString()}<span className="text-xs text-zinc-500 font-mono font-normal"> / mo</span></p>
                  <p className="text-xs text-zinc-550 font-mono uppercase mt-0.5">Based on {currentOrders} monthly covers.</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="inline-flex items-center gap-1.5 bg-brand-red/10 border border-[#E11D48]/25 px-2.5 py-0.5 rounded-none text-[9px] text-[#E11D48] font-mono tracking-wider uppercase mb-2">
                    <Sparkles className="w-3 h-3 animate-pulse" /> DAILY ENGAGEMENT COMMAND LIFT
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block font-black">PROJECTED PARTNERSHIP REVENUE</span>
                  <p className="text-4xl font-display font-black text-white uppercase mt-1">
                    £{expectedRevenue.toLocaleString()}<span className="text-sm text-zinc-400 font-mono font-normal"> / mo</span>
                  </p>
                  <p className="text-xs text-zinc-400 font-sans mt-1 font-light">
                    Sustaining <strong className="text-white">{expectedSessions.toLocaleString()}</strong> active diners and a <strong className="text-white">{expectedConversion}%</strong> reservation checkout rate.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-0.5 font-black">ESTIMATED REV RECOVERY</span>
                  <p className="text-3xl font-display font-black text-brand-red uppercase">
                    +£{revenueGain.toLocaleString()}<span className="text-xs text-zinc-500 font-mono font-normal"> / mo</span>
                  </p>
                  <div className="flex items-center gap-2 mt-2 bg-brand-red/5 border border-[#E11D48]/10 p-2.5 rounded-none text-[11px] text-zinc-400 font-mono">
                    <TrendingUp className="w-4 h-4 text-brand-red" />
                    <span>Generate <strong className="text-white">{roiMultiplier}x profit multiplier</strong> on managed social investment budgets.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact-form-section"
                  className="block text-center border border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white py-3.5 px-4 rounded-none font-display font-bold text-xs uppercase tracking-widest transition-all"
                  id="btn-calculator-submit"
                >
                  Schedule Turnaround consultation (£0)
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
