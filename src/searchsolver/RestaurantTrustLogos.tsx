import {
  ChefHat, Flame, Pizza, Coffee, Wine, Cake, Soup, Fish, UtensilsCrossed,
  Instagram, MapPin, Megaphone, CalendarCheck, Star, Sparkles,
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
    <section id="restaurant-authority-trust-section" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-wider">
            One industry. Done properly.
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-ink">
            We work across the platforms your diners already use
          </h2>
          <p className="mt-3 text-zinc-600">
            Markadeo focuses exclusively on UK hospitality, and integrates directly with the
            booking systems you already run.
          </p>
        </Reveal>

        {/* Platforms marquee */}
        <div className="marquee-mask overflow-hidden py-3 mb-12">
          <div className="marquee-track gap-3">
            {[...platforms, ...platforms].map((p, i) => {
              const Icon = p.icon;
              return (
                <span
                  key={`${p.label}-${i}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-white border border-line rounded-full px-4 py-2 shadow-soft"
                >
                  <Icon className="w-4 h-4 text-brand-gold-hover" />
                  <span className="font-semibold text-sm text-zinc-700">{p.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Venue type bento */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {venueTypes.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal
                key={v.label}
                direction="up"
                delay={(i % 4) * 0.05}
                className="group flex items-center gap-3 bg-white border border-line rounded-2xl px-4 py-4 shadow-soft lift hover:border-brand-gold/50"
              >
                <span className="w-10 h-10 rounded-xl bg-canvas group-hover:bg-brand-gold-wash flex items-center justify-center text-zinc-500 group-hover:text-brand-gold-hover transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-zinc-700 leading-tight">{v.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
