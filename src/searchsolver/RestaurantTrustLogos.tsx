import { useState } from 'react';
import { 
  Award, ShieldCheck, Flame, Sparkles, Coffee, UtensilsCrossed, Star, 
  ChefHat, Wine, Pizza, Soup, Fish, Cake, Cookie, Landmark 
} from 'lucide-react';

interface TrustBrand {
  id: string;
  name: string;
  logoText: string;
  serifClass: string;
  location: string;
  auditScope: string;
  liftMetric: string;
}

export default function RestaurantTrustLogos() {
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);

  const trustBrands: TrustBrand[] = [
    {
      id: "the-copper-grid",
      name: "The Copper Grid",
      logoText: "Copper Grid",
      serifClass: "font-serif tracking-[0.1em] font-light italic text-base",
      location: "Soho & Camden",
      auditScope: "Daily Sizzle Reels & Maps Local 3-Pack SEO Strategy",
      liftMetric: "+148% Direct Bookings"
    },
    {
      id: "kuro-matcha",
      name: "Kuro Matcha Rooms",
      logoText: "KURO MATCHA",
      serifClass: "font-mono tracking-[0.1em] font-bold text-xs",
      location: "Birmingham Grand Central",
      auditScope: "Post-Dinner IG Comments Automation & Postcode Targeting",
      liftMetric: "+220% Weekend Footfall"
    },
    {
      id: "smash-sear",
      name: "Smash & Sear Burger Co.",
      logoText: "SMASH & SEAR",
      serifClass: "font-sans tracking-tighter font-black uppercase text-base",
      location: "Manchester Northern Quarter",
      auditScope: "Continuous Sizzle Reels & Live Reservation Integrations",
      liftMetric: "+195% Direct Menu Orders"
    },
    {
      id: "la-trattoria-moderno",
      name: "La Trattoria Moderno",
      logoText: "LA TRATTORIA",
      serifClass: "font-serif tracking-widest font-normal uppercase text-xs",
      location: "Edinburgh Royal Mile",
      auditScope: "3-Mile Postcode Geo-Fenced Reels & Ads Campaign",
      liftMetric: "+160% Mid-Week covers"
    },
    {
      id: "dastaan-lounge",
      name: "Dastaan Fine Dining",
      logoText: "DASTAAN Lounge",
      serifClass: "font-sans tracking-[0.15em] font-extralight italic uppercase text-xs",
      location: "Chelsea & Kensington",
      auditScope: "24/7 Voice Calling AI Booking Reception & CRM Sync",
      liftMetric: "100% Reception Coverage"
    },
    {
      id: "moka-co",
      name: "Moka & Co. Artisan Bakery",
      logoText: "MOKA & CO.",
      serifClass: "font-mono tracking-widest uppercase text-xs text-rose-500/80",
      location: "Bristol & Bath Markets",
      auditScope: "Daily IG Storyboard Sequences & Google Map Pins",
      liftMetric: "+180% Direct Visits"
    },
    {
      id: "the-blind-pig",
      name: "The Blind Pig Tavern",
      logoText: "BLIND PIG",
      serifClass: "font-serif tracking-[0.05em] font-black italic text-sm text-zinc-300",
      location: "Leeds Exchange",
      auditScope: "Post-Meal Instagram Voucher Sequences & QR Menus",
      liftMetric: "+135% Bar Spend"
    },
    {
      id: "ramen-forge",
      name: "Ramen Forge Bar",
      logoText: "RAMEN FORGE",
      serifClass: "font-sans tracking-widest font-black uppercase text-xs",
      location: "Liverpool Albert Dock",
      auditScope: "Pre-Opening Hype Reels & Local Influencer Collabs",
      liftMetric: "+210% Lunch Rush"
    },
    {
      id: "buns-and-birds",
      name: "Buns & Birds",
      logoText: "Buns & Birds",
      serifClass: "font-mono tracking-tight font-black uppercase text-sm text-amber-500",
      location: "Brighton Lanes",
      auditScope: "TikTok Trend-Jackers & High-Speed Street Polls",
      liftMetric: "+175% Delivery Saves"
    },
    {
      id: "sea-salt-table",
      name: "Sea Salt & Table Grill",
      logoText: "SEA SALT & CO",
      serifClass: "font-sans tracking-[0.3em] font-medium uppercase text-[10px]",
      location: "Cornwall Harbour",
      auditScope: "Golden-Hour Aesthetic Photography Campaign & Map Tags",
      liftMetric: "+115% Group Tables"
    },
    {
      id: "sweet-revelry",
      name: "Sweet Revelry Patisserie",
      logoText: "SWEET REVELRY",
      serifClass: "font-serif tracking-widest font-extralight uppercase italic text-[11px]",
      location: "Notting Hill, London",
      auditScope: "Aesthetic Plating Sequences & Behind-the-Scene Reels",
      liftMetric: "+160% Festive Orders"
    },
    {
      id: "the-olive-branch",
      name: "The Olive Branch Bistro",
      logoText: "Olive Branch",
      serifClass: "font-serif tracking-[0.15em] font-light uppercase text-xs text-emerald-500",
      location: "Oxford High-Street",
      auditScope: "Postcode-Fenced Midday Instagram Ads & Local Maps",
      liftMetric: "+140% Midday Covers"
    }
  ];

  const renderIcon = (id: string, className: string) => {
    switch (id) {
      case 'the-copper-grid': return <ChefHat className={className} />;
      case 'kuro-matcha': return <Sparkles className={className} />;
      case 'smash-sear': return <Flame className={className} />;
      case 'la-trattoria-moderno': return <UtensilsCrossed className={className} />;
      case 'dastaan-lounge': return <Landmark className={className} />;
      case 'moka-co': return <Coffee className={className} />;
      case 'the-blind-pig': return <Wine className={className} />;
      case 'ramen-forge': return <Soup className={className} />;
      case 'buns-and-birds': return <Pizza className={className} />;
      case 'sea-salt-table': return <Fish className={className} />;
      case 'sweet-revelry': return <Cake className={className} />;
      case 'the-olive-branch': return <Cookie className={className} />;
      default: return <UtensilsCrossed className={className} />;
    }
  };

  return (
    <section 
      id="restaurant-authority-trust-section" 
      className="py-20 border-t border-b border-white/5 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Decorative backing grid */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Subtle background red beacon */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-red/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left" id="trust-section-header">
            <span className="text-[10px] font-mono tracking-widest text-[#E11D48] px-2.5 py-1 bg-brand-red/10 border border-[#E11D48]/20 rounded-none inline-flex items-center gap-1.5 mb-3 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
              UK HIGH-STREET REGIONAL PARTNER MAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              ESTABLISHED TRUST WITH <span className="text-brand-red">12 HIGH-STREET BRANDS</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light mt-1.5">
              Helping elite local eateries, gourmet dining hotspots, artisan bakeries, and multi-site casual restaurant brands across the United Kingdom secure direct orders and bypass third-party aggregator margins.
            </p>
          </div>
          
          <div className="flex items-center gap-2 border border-white/5 bg-zinc-900/50 p-3 rounded-none flex-shrink-0 animate-pulse" id="trust-badge-info">
            <Award className="w-5 h-5 text-brand-red" />
            <div className="text-left font-mono">
              <span className="text-[9px] text-zinc-500 block uppercase tracking-wider leading-none">PREVIOUS CLIENT AUDITS</span>
              <span className="text-[11px] text-white font-bold uppercase leading-none">12 CERTIFIED PARTNERS</span>
            </div>
          </div>
        </div>

        {/* Elegant Grayscale Logo Grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-white/5 bg-black" 
          id="trust-logos-grids"
        >
          {trustBrands.map((brand) => {
            const isActive = activeBrandId === brand.id;
            
            return (
              <div
                key={brand.id}
                onMouseEnter={() => setActiveBrandId(brand.id)}
                onMouseLeave={() => setActiveBrandId(null)}
                className={`relative group p-6 flex flex-col items-center justify-center border-b border-r border-white/5 hover:bg-zinc-950 cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-[#E11D48]/30' : ''
                }`}
                id={`trust-brand-item-${brand.id}`}
              >
                {/* Visual Placeholder Logo in beautiful low-opacity grayscale representation with Different Icons */}
                <div className="h-20 flex flex-col items-center justify-center gap-2 transition-all duration-300">
                  <div className="transition-all duration-300">
                    {renderIcon(brand.id, `w-5 h-5 transition-all duration-300 ${
                      isActive 
                        ? 'text-brand-red scale-110' 
                        : 'text-zinc-650 opacity-40 group-hover:text-white group-hover:opacity-100'
                    }`)}
                  </div>
                  <span className={`${brand.serifClass} tracking-wider text-center select-none block uppercase transition-all duration-300 ${
                    isActive 
                      ? 'text-white opacity-100 scale-102 filter drop-shadow-[0_0_8px_rgba(225,29,72,0.3)] font-semibold' 
                      : 'text-zinc-550 opacity-55 group-hover:text-zinc-350 group-hover:opacity-95'
                  }`}>
                    {brand.logoText}
                  </span>
                </div>

                {/* Micro Meta Location */}
                <span className="text-[8px] font-mono tracking-widest text-zinc-600 group-hover:text-zinc-400 uppercase mt-2 block select-none">
                  {brand.location.split(',')[0]}
                </span>

                {/* Glow border indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Live contextual campaign details dynamically loaded below */}
        <div className="mt-8 min-h-[96px] bg-brand-charcoal/30 border border-white/5 p-5 relative overflow-hidden transition-all duration-300" id="trust-details-panel">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <UtensilsCrossed className="w-20 h-20 text-white" />
          </div>

          {activeBrandId ? (
            (() => {
              const selected = trustBrands.find(b => b.id === activeBrandId);
              if (!selected) return null;
              return (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center animate-fade-in" id="active-trust-info">
                  <div className="md:col-span-8 text-left">
                    <span className="text-[9px] font-mono tracking-widest text-[#E11D48] uppercase font-bold block mb-1">
                      ACTIVE CAMPAIGN DISCOVERY // {selected.name.toUpperCase()}
                    </span>
                    <h4 className="text-sm font-display font-black text-white uppercase tracking-wider mb-1">
                      {selected.auditScope}
                    </h4>
                    <p className="text-xs text-zinc-400 font-sans font-light">
                      Securing prime metropolitan targets in {selected.location} using tailored high-engagement culinary creatives.
                    </p>
                  </div>
                  <div className="md:col-span-4 text-left md:text-right border-t md:border-t-0 md:border-l border-white/5 pt-3 md:pt-0 md:pl-6 leading-none">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider mb-2 font-bold">VERIFIED IMPACT</span>
                    <span className="text-lg font-display font-black text-emerald-400 uppercase tracking-tight block">
                      {selected.liftMetric}
                    </span>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2" id="inactive-trust-prompt">
              <div className="flex items-center gap-3 text-left">
                <Star className="w-5 h-5 text-brand-red/70 flex-shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                    EXPLORE REGISTERED HOSPITALS & BARS
                  </h4>
                  <p className="text-[11px] text-zinc-500 font-sans font-light mt-0.5">
                    Hover over any of the 12 certified brand marcas to verify campaign structure, precise geography, and actual verified revenue conversions.
                  </p>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-650 uppercase tracking-widest hidden md:block">
                MONITORED CONTINUOUS OUTCOMES
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
