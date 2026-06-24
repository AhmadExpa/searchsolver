import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CalendarDays,
  Megaphone,
  MessageSquare,
  TrendingUp,
  Target,
} from 'lucide-react';
import VideoHero from '../VideoHero';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import { Reveal, Stagger, RevealItem, Marker } from '../ScrollFX';
import { MEDIA } from '../siteData';

const problems = [
  {
    icon: CalendarDays,
    title: 'Inconsistent posting',
    body: 'The account goes quiet, then bursts back with random posts. That makes the brand look inactive.',
  },
  {
    icon: MessageSquare,
    title: 'Weak content angle',
    body: 'Posts do not give people a reason to follow, share or remember the page.',
  },
  {
    icon: TrendingUp,
    title: 'No feedback loop',
    body: 'Results are not reviewed closely enough, so the next batch repeats the same weak patterns.',
  },
];

const fixes = [
  {
    icon: BrainCircuit,
    title: 'AI-driven planning',
    body: 'We use AI to research hooks, map content themes and build a stronger posting plan before production starts.',
  },
  {
    icon: Target,
    title: 'Clear direction',
    body: 'We turn scattered accounts into a consistent system with content pillars, captions and visual rhythm.',
  },
  {
    icon: Megaphone,
    title: 'Paid campaigns separately',
    body: 'If you want ads, we quote them separately, including campaign setup, creative, targeting and media spend.',
  },
];

export default function WebAppDesign() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.heroVideo}
        poster="https://images.unsplash.com/photo-1611162618071-b39a2ec1b0c2?auto=format&fit=crop&w=1600&q=80"
        height="tall"
        eyebrow="Social media diagnosis"
        title="What’s holding your accounts back?"
        subtitle="We look at the actual problem first: inconsistent posting, weak hooks, unclear messaging and a channel that does not feel active enough. Then we rebuild the plan around AI-driven content and a cleaner rhythm."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-gold text-ink font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold"
        >
          Start an audit <ArrowRight className="w-4 h-4" />
        </Link>
      </VideoHero>

      {/* Problems */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
              What we usually find
            </p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Common issues we spot in <Marker>social accounts.</Marker>
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="h-full">
                  <article className="h-full rounded-[1.5rem] bg-white border border-line p-6 shadow-soft lift">
                    <span className="w-12 h-12 rounded-xl bg-brand-gold-wash text-brand-gold-hover flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="mt-5 font-display font-bold text-lg text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                  </article>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Diagnosis / solution */}
      <section className="py-16 sm:py-24 bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <Tilt className="relative rounded-[2rem] overflow-hidden border border-line shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80"
                alt="A person reviewing social media content on a phone."
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover"
              />
            </Tilt>
          </Reveal>
          <Reveal direction="left">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
              How we resolve it
            </p>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              We turn scattered posting into a <Marker>managed system.</Marker>
            </h2>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              The fix is not more random content. We build a content calendar, sharpen the hooks, improve the
              visuals and keep the account moving with AI-driven planning behind the scenes.
            </p>
            <div className="mt-7 grid gap-3">
              {fixes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-canvas border border-line p-5 shadow-soft">
                    <span className="mt-0.5 w-11 h-11 rounded-xl bg-ink text-brand-gold flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-[2rem] bg-ink text-white p-10 sm:p-14 shadow-soft-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-brand-gold uppercase tracking-[0.18em]">
                  Paid media
                </p>
                <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight">
                  Campaigns are quoted separately.
                </h2>
                <p className="mt-4 text-zinc-300 leading-relaxed">
                  Weekly content support covers the organic work. If you want advertisement campaigns, ad
                  creative or targeting support, we scope that as a separate project so the budget stays clear.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-ink font-semibold px-6 py-3.5 rounded-full hover:bg-brand-gold-hover transition-colors shadow-gold"
              >
                See services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want us to audit the account and shape the next plan?"
        body="We’ll look at the content, the consistency and the results, then tell you what should change first. Paid campaigns can be added separately if needed."
        mailSubject="Social media audit enquiry — Markadeo"
      />
    </>
  );
}
