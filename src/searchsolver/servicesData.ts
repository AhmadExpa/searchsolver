import { ServiceItem } from './types';

/* Honest, result-driven copy — no fabricated averages or guaranteed numbers.
   Each `whatYouGet` describes the concrete deliverable, not an invented stat. */
export const servicesData: ServiceItem[] = [
  {
    id: 'social',
    title: 'Daily Social Command & Managed Accounts',
    description: 'We run your social profiles with zero-friction consistency. Our food directors, content creators, and community managers publish high-retention stories, reels, and posts to capture hungry local diners and spark community discussions.',
    features: [
      'Daily high-retention posts & reels',
      'Continuous community engagement & DM responses',
      'UK food-creator & influencer collaborations',
      'Appetising menu & dish creative production'
    ],
    ukMarketContext: 'Built for independent high-street restaurants across London, Manchester, and Birmingham looking to fill mid-week tables.',
    whatYouGet: 'A fully managed social presence — posted daily, replies handled, nothing for you to brief.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Atmospheric restaurant table styled for social content with warm low lighting.'
  },
  {
    id: 'local-seo',
    title: 'Hyper-Local Google Maps & Search Visibility',
    description: 'When diners search "best dinner near me" or your cuisine in their postcode, your venue should be the obvious choice. We optimise your Google Business Profile and listings to capture that direct local intent.',
    features: [
      'Google Business Profile optimisation',
      'Structured menu data & live reservation links',
      'Review-generation workflows',
      'Postcode-level local targeting'
    ],
    ukMarketContext: 'Engineered to reclaim orders that independents typically lose to high-commission third-party aggregators.',
    whatYouGet: 'A fully optimised, accurate local presence on Google Maps and Search, maintained for you.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Busy welcoming restaurant interior with diners seated at tables.'
  },
  {
    id: 'campaign-ads',
    title: 'Precision Paid Ads & Visual Social Campaigns',
    description: 'No wasted budget on default boosting. We build hyper-segmented, geo-fenced campaigns on Meta and Google that put beautiful dishes in front of nearby diners — and we report on exactly where every pound goes.',
    features: [
      'Geo-fenced local ad targeting',
      'Mid-week & off-peak incentive campaigns',
      'Retargeting of menu & website visitors',
      'Transparent spend & booking tracking'
    ],
    ukMarketContext: 'Tuned for high-street groups, boutique bistros, and franchises chasing predictable weekend covers.',
    whatYouGet: 'Managed local ad campaigns with transparent, no-spin reporting on spend and results.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Beautifully plated dishes arranged on a dark table, styled for advertising.'
  },
  {
    id: 'booking-cro',
    title: 'Menu & Reservation Conversion',
    description: 'Traffic is vanity; booked covers are reality. We audit and restructure your menus, load speed, and reservation flow to remove friction and turn visitors into tables.',
    features: [
      'Mobile-optimised digital menus',
      'OpenTable / SevenRooms / Resy integration',
      'Fast, mobile-first page performance',
      'High-intent CTA placement & copy'
    ],
    ukMarketContext: 'Funnels social viewers straight from a scroll-stopping reel into a confirmed seat.',
    whatYouGet: 'A frictionless booking journey from first tap to confirmed reservation.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Elegantly set restaurant table ready for a reservation.'
  },
  {
    id: 'ai-voice-agent',
    title: '24/7 Conversational Voice AI Agents',
    description: 'Never miss a mid-week table, group event, or catering lead. We design human-sounding voice agents that handle inbound menu and booking calls around the clock and sync straight to your reservation system.',
    features: [
      '24/7 inbound booking & reservation line',
      'Catering and group-party lead capture',
      'Live sync with SevenRooms & OpenTable',
      'SMS follow-ups with direct booking links'
    ],
    ukMarketContext: 'Configured for high-street groups and fast-growing dessert and burger brands that need non-stop phone coverage.',
    whatYouGet: 'A reception line that answers every call, day or night, and books straight into your system.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Warm, inviting café counter representing always-on hospitality.'
  }
];
