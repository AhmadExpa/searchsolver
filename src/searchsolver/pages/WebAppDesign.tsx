import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MonitorSmartphone,
  Layers,
  Zap,
  Smartphone,
  CheckCircle,
  Code,
  ShieldCheck,
} from 'lucide-react';
import VideoHero from '../VideoHero';
import CTASection from '../CTASection';
import Tilt from '../Tilt';
import { Reveal, Stagger, RevealItem, Marker } from '../ScrollFX';
import { MEDIA } from '../siteData';

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: 'UI/UX Design Systems',
    body: 'Bespoke UI/UX design with reusable design systems, interactive prototypes, and extensive wireframing tailored for your audience.',
  },
  {
    icon: Code,
    title: 'Frontend Engineering',
    body: 'Stunning front-ends developed with React, Vite, Next.js, and modern Tailwind CSS. Fast, robust, and highly interactive.',
  },
  {
    icon: Zap,
    title: 'Speed & Optimization',
    body: 'Every line of code is optimized for SEO performance, Core Web Vitals, and lightning-fast page loading speeds.',
  },
];

const features = [
  {
    icon: Layers,
    title: 'Scalable Architecture',
    body: 'We design backend systems that scale smoothly, implementing secure database schemas, clean APIs, and cloud deployments.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    body: 'Cross-platform mobile applications for iOS and Android using React Native, designed for fluid animations and native feel.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Integrity',
    body: 'Industry-standard encryption, secure authentication procedures, and comprehensive testing to safeguard your user data.',
  },
];

export default function WebAppDesign() {
  return (
    <>
      <VideoHero
        videoSrc={MEDIA.webVideo}
        poster={MEDIA.webHeroPoster}
        height="tall"
        eyebrow="Web & App Engineering"
        title="We build digital interfaces that command attention."
        subtitle="Bespoke website designs, high-performance web applications, and intuitive mobile solutions engineered to connect with your customers."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-ink font-bold px-8 py-4 rounded-none transition-all cursor-pointer shadow-lg"
        >
          Start your build <ArrowRight className="w-4 h-4" />
        </Link>
      </VideoHero>

      {/* Intro Capabilities */}
      <section className="py-20 sm:py-28 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-3 block">
              Core Expertise
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase">
              Premium Web & <Marker>App Services.</Marker>
            </h2>
          </Reveal>
          
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="h-full">
                  <article className="h-full rounded-[2rem] bg-canvas border border-line p-8 shadow-soft lift flex flex-col justify-between">
                    <div>
                      <span className="w-14 h-14 rounded-2xl bg-brand-gold-wash text-brand-gold-hover flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </span>
                      <h3 className="mt-6 font-display font-black text-xl text-ink uppercase tracking-wider">{item.title}</h3>
                      <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-medium">{item.body}</p>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Visual Mockups Showcase */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-canvas">
        <div className="absolute top-12 -right-16 w-36 h-96 bg-brand-teal rounded-full blur-[120px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-12 -left-20 w-48 h-[400px] bg-brand-blue rounded-full blur-[140px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Tech Stack & Copy */}
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
                  Product Engineering
                </span>
                
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink leading-tight uppercase">
                  Fully Optimized, Responsive, and Scalable.
                </h2>
                
                <p className="mt-6 text-zinc-600 leading-relaxed font-medium">
                  We bridge the gap between stunning creative design and clean, robust technical architecture. Our interfaces look incredible on any device and load instantly.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Dynamic responsive grids and components',
                    'Single Page Applications (SPA) & Server Side Rendering (SSR)',
                    'Custom database and backend API development',
                    'Full integration with CRM, CMS, and analytics tools',
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold-hover flex-shrink-0" />
                      <span className="text-sm font-semibold text-zinc-700">{text}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Device Bento Grid Mockup */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <Reveal className="col-span-2">
                <Tilt shine={true} className="rounded-[2rem] overflow-hidden border border-line shadow-soft-lg bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
                    alt="Laptop dashboard mock"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </Tilt>
              </Reveal>
              
              <Reveal direction="right">
                <Tilt shine={true} className="rounded-[2rem] overflow-hidden border border-line shadow-soft-lg bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Mobile screen mockup"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </Tilt>
              </Reveal>

              <Reveal direction="left">
                <Tilt shine={true} className="rounded-[2rem] overflow-hidden border border-line shadow-soft-lg bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80"
                    alt="UX UI development wires"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </Tilt>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Extra Capabilities */}
      <section className="py-20 sm:py-28 bg-white border-t border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-3 block">
              Capabilities
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase">
              End-To-End Development.
            </h2>
          </Reveal>
          
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="h-full">
                  <article className="h-full rounded-[2rem] bg-canvas border border-line p-8 shadow-soft lift flex flex-col justify-between">
                    <div>
                      <span className="w-14 h-14 rounded-2xl bg-brand-gold-wash text-brand-gold-hover flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </span>
                      <h3 className="mt-6 font-display font-black text-xl text-ink uppercase tracking-wider">{item.title}</h3>
                      <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-medium">{item.body}</p>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Tech Stack Marquee Title */}
      <section className="py-16 bg-white overflow-hidden select-none border-b border-line">
        <div className="w-full text-center">
          <h2 className="font-display font-black text-5xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-none tracking-tighter uppercase content-clip-mask">
            REACT NODE VITE
          </h2>
        </div>
      </section>

      <CTASection
        title="Ready to build your web or app interface?"
        body="Tell us about your digital product requirements, wireframes, or idea — we will construct a robust technical blueprint."
        mailSubject="Web & App build enquiry — Markadeo"
      />
    </>
  );
}
