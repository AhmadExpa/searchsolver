import {
  ChefHat, Flame, Pizza, Coffee, Wine, Cake, Soup, Fish, UtensilsCrossed,
  Instagram, MapPin, Megaphone, CalendarCheck, Star, Sparkles, ShieldCheck,
} from 'lucide-react';
import { Reveal } from './ScrollFX';

/* Platforms & tools we actually work across — verifiable, no invented metrics. */
const platforms = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Sparkles, label: 'TikTok' },
  { icon: MapPin, label: 'Google Business Profile' },
  { icon: Megaphone, label: 'Meta Ads' },
  { icon: Star, label: 'Google Reviews' },
  { icon: CalendarCheck, label: 'OpenTable' },
  { icon: CalendarCheck, label: 'SevenRooms' },
  { icon: UtensilsCrossed, label: 'Resy' },
];

/* The venue types we focus on — honest positioning, not fake clients. */
const venueTypes = [
  { icon: ChefHat, label: 'Bistros & fine dining' },
  { icon: Flame, label: 'Grills & smokehouses' },
  { icon: Pizza, label: 'Pizzerias & Italian' },
  { icon: Soup, label: 'Ramen & noodle bars' },
  { icon: Coffee, label: 'Cafés & bakeries' },
  { icon: Cake, label: 'Dessert parlours' },
  { icon: Fish, label: 'Seafood & coastal' },
  { icon: Wine, label: 'Bars & gastropubs' },
];

export default function RestaurantTrustLogos() {
  return (
    <section
      id="restaurant-authority-trust-section"
      className="py-20 border-t border-b border-white/5 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Decorative backing grid */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-gold/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <Reveal direction="up" className="max-w-2xl text-left mb-10">
          <span className="text-[10px] font-mono tracking-widest text-[#F5B82E] px-2.5 py-1 bg-brand-gold/10 border border-[#F5B82E]/20 rounded-none inline-flex items-center gap-1.5 mb-3 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            ONE INDUSTRY. DONE PROPERLY.
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
            We work across the platforms <span className="text-brand-gold">your diners already use</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light mt-2">
            Markadeo focuses exclusively on UK hospitality — independent restaurants and high-street groups. We manage the channels that actually drive covers, and integrate directly with the booking systems you already run.
          </p>
        </Reveal>

        {/* Platforms marquee */}
        <div className="marquee-mask overflow-hidden border-y border-white/5 bg-black/40 py-4 mb-10" id="platforms-marquee">
          <div className="marquee-track gap-10">
            {[...platforms, ...platforms].map((p, i) => {
              const Icon = p.icon;
              return (
                <span
                  key={`${p.label}-${i}`}
                  className="inline-flex items-center gap-2.5 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4 text-brand-gold/70" />
                  <span className="font-display font-black uppercase tracking-wider text-sm text-zinc-300">
                    {p.label}
                  </span>
                  <span className="text-brand-gold/40 ml-3">/</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Venue type grid — honest positioning, not fake clients */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border border-white/5 bg-black">
          {venueTypes.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.label}
                className="group relative p-6 flex flex-col items-center justify-center gap-3 border-b border-r border-white/5 hover:bg-zinc-950 transition-all duration-300 text-center"
              >
                <Icon className="w-6 h-6 text-zinc-600 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
                <span className="text-[11px] font-mono uppercase tracking-wide text-zinc-500 group-hover:text-zinc-200 transition-colors leading-tight">
                  {v.label}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Honest credibility line — no invented results */}
        <div className="mt-8 bg-brand-charcoal/30 border border-white/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-left">
            <Star className="w-5 h-5 text-brand-gold/70 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">
                A specialist, not a generalist
              </h4>
              <p className="text-[11px] text-zinc-500 font-sans font-light mt-0.5 max-w-xl">
                Restaurants are all we do — so the playbook, the creative, and the local-search tactics are built specifically for how UK diners find and choose where to eat.
              </p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden md:block flex-shrink-0">
            UK HOSPITALITY // SOCIAL + LOCAL SEARCH
          </div>
        </div>
      </div>
    </section>
  );
}
