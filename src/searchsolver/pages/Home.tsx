import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import CreativeHero from '../CreativeHero';
import Pricing from '../Pricing';
import Testimonials from '../Testimonials';
import MarqueeLogos from '../MarqueeLogos';
import CTASection from '../CTASection';
import { Reveal, Stagger, RevealItem } from '../ScrollFX';
import { waLink, DEFAULT_WA_MESSAGE, services, MEDIA } from '../siteData';
import { GSAPParallax, GSAPScrollRotate } from '../GSAPScrollFX';

function CircularStamp() {
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 text-zinc-400 fill-current opacity-70">
      <path
        id="stampCirclePath"
        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="none"
      />
      <text className="font-display font-bold uppercase text-[5.5px] tracking-[0.25em] fill-current">
        <textPath href="#stampCirclePath" startOffset="0%">
          • MARKADEO MEDIA • CREATIVE HOUSE • DIGITAL DESIGN •
        </textPath>
      </text>
    </svg>
  );
}

export default function Home() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Extend the 5 services from siteData to include a 6th Pricing item to match Trifid's 6-item layout
  const displayedServices = [
    ...services,
    {
      id: 'pricing',
      no: '06',
      title: 'Pricing & ROI Plans',
      short: 'Flexible monthly growth packages tailored for your brand.',
      description: 'Find the ideal plan to get your brand permanently established on social media. Choose between our Essentials, Extra, and Ultra Premium packages to start growing your organic reach today.',
      features: ['Essentials Pack', 'Extra Plan', 'Ultra Premium'],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Team pricing models and brand strategizing.',
    }
  ];

  // Auto-cycle service preview screens when the user is not actively hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveServiceIdx((prev) => (prev + 1) % displayedServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, displayedServices.length]);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <CreativeHero
        eyebrow="Creative Content House"
        title={<>Markadeo makes brands impossible to scroll past.</>}
        subtitle="Content, 3D, social, branding, and web builds under one roof. We turn quiet channels into a living brand system with stronger visuals, clearer rhythm, and content people actually want to watch."
      />

      {/* ============ NEW GENERATION SECTION ============ */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        {/* Organic background boundary elements (Slide 2 style) */}
        <div className="absolute top-12 -left-16 w-36 h-96 bg-brand-yellow rounded-full blur-[100px] opacity-45 pointer-events-none" />
        <div className="absolute bottom-12 -right-20 w-48 h-[400px] bg-brand-blue rounded-full blur-[120px] opacity-15 pointer-events-none" />

        {/* Floating GSAP Parallax Shape */}
        <GSAPParallax yPercent={45} className="absolute right-12 top-1/4 z-10 pointer-events-none hidden md:block">
          <div className="w-20 h-20 bg-brand-yellow/15 border border-brand-yellow/30 rounded-3xl backdrop-blur-sm flex items-center justify-center rotate-12 animate-pulse">
            <span className="font-mono text-sm text-brand-yellow font-black">M_</span>
          </div>
        </GSAPParallax>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7">
              <Reveal direction="right">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
                  New Generation
                </span>
                
                <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.05] uppercase select-none">
                  We Create Powerful, Innovative, Fun, and Memorable Content.
                </h2>
                
                <p className="mt-8 text-base sm:text-lg text-zinc-600 leading-relaxed font-medium">
                  Our company is centered on the idea that everything you could possibly need is available under one roof. From creative conceptualisation to production and execution - we do it all.
                </p>
                
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xl">
                  No outsourced fluff, no empty metrics. We design experiences, social campaigns, and digital platforms that turn passive scrolling into authentic brand loyalty.
                </p>

                <div className="mt-10">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-black hover:bg-zinc-900 text-white font-bold tracking-widest text-xs uppercase px-8 py-4 rounded-none transition-all shadow-md"
                  >
                    Company Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right column: Floating 3D thumbs-up image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal direction="left">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 select-none pointer-events-none"
                >
                  {/* Subtle pulsing shadow under the asset */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 bg-zinc-200/50 rounded-full blur-md opacity-70" />
                  <img
                    src="/assets/thumbs_up_3d.webp"
                    alt="3D Thumbs up"
                    width={640}
                    height={640}
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE SERVICES SECTION ============ */}
      <section className="relative bg-brand-blue text-white clip-slanted-both py-28 sm:py-36 overflow-hidden">
        {/* Subtle decorative background line */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Floating GSAP Parallax Shape */}
        <GSAPParallax yPercent={-50} className="absolute left-12 bottom-12 pointer-events-none hidden lg:block z-10">
          <div className="w-16 h-16 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center rotate-45">
            <span className="font-display text-brand-yellow text-xs font-black">3D</span>
          </div>
        </GSAPParallax>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-yellow uppercase mb-3 block">
              What We Do
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase">
              Our Creative Services
            </h2>
            <div className="w-12 h-1 bg-brand-yellow mx-auto mt-6" />
          </div>

          {/* Interactive grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Services 01 - 03 */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {displayedServices.slice(0, 3).map((item, idx) => (
                <div
                  key={item.id}
                  onMouseEnter={() => {
                    setActiveServiceIdx(idx);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`group relative p-6 border-b border-white/10 hover:border-brand-yellow transition-all cursor-pointer ${
                    activeServiceIdx === idx ? 'border-brand-yellow bg-white/[0.04]' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-mono text-xs text-brand-yellow font-bold">{item.no}</span>
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider group-hover:text-brand-yellow transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.short}
                  </p>
                  <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-brand-yellow" />
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column: Interactive Smartphone Mockup */}
            <div className="lg:col-span-4 flex justify-center py-8">
              <div className="relative w-[280px] h-[550px] bg-zinc-950 rounded-[3rem] p-3.5 border-[6px] border-zinc-800 shadow-2xl flex-shrink-0">
                {/* Speaker/Camera notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-800 rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-zinc-900 rounded-full" />
                </div>
                
                {/* Screen frame */}
                <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-zinc-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeServiceIdx}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={displayedServices[activeServiceIdx]?.image}
                        alt={displayedServices[activeServiceIdx]?.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay for screen text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45 flex flex-col justify-end p-5" />
                      
                      <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                        <span className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">
                          Service {displayedServices[activeServiceIdx]?.no}
                        </span>
                        <h4 className="font-display font-black text-white text-base sm:text-lg uppercase leading-tight mt-1">
                          {displayedServices[activeServiceIdx]?.title}
                        </h4>
                        <ul className="mt-3.5 space-y-1.5">
                          {displayedServices[activeServiceIdx]?.features.slice(0, 3).map((f) => (
                            <li key={f} className="text-[10px] font-semibold tracking-wider text-zinc-300 uppercase flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Column: Services 04 - 06 */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {displayedServices.slice(3, 6).map((item, idx) => {
                const globalIdx = idx + 3;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => {
                      setActiveServiceIdx(globalIdx);
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`group relative p-6 border-b border-white/10 hover:border-brand-yellow transition-all cursor-pointer ${
                      activeServiceIdx === globalIdx ? 'border-brand-yellow bg-white/[0.04]' : ''
                    }`}
                  >
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="font-mono text-xs text-brand-yellow font-bold">{item.no}</span>
                      <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-wider group-hover:text-brand-yellow transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.short}
                    </p>
                    <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-brand-yellow" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ============ CORE VALUES & TEXT CLIP BANNER ============ */}
      <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
        {/* Spinning GSAP Stamp */}
        <div className="absolute right-12 top-12 pointer-events-none hidden md:block z-10">
          <GSAPScrollRotate rotation={360}>
            <CircularStamp />
          </GSAPScrollRotate>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Values Heading */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-3 block">
              Our Principles
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink uppercase">
              The Values Behind Every Frame.
            </h2>
          </div>

          {/* 4-Column Grid (Slide 4 style) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'CREATIVITY', body: 'CREATIVITY IS INVENTING, EXPERIMENTING, GROWING, TAKING RISKS, BREAKING RULES.' },
              { title: 'UNIQUE', body: 'IN ORDER TO BE IRREPLACEABLE ONE, MUST ALWAYS BE DIFFERENT.' },
              { title: 'INNOVATION', body: 'INNOVATION IS SEEING WHAT EVERYBODY HAS SEEN AND THINKING WHAT NOBODY HAS THOUGHT.' },
              { title: 'YOUTH', body: 'MARKADEO IS A POWERFUL COLLECTIVE OF SOME OF THE YOUNGEST AND MOST INNOVATIVE MINDS.' },
            ].map((val, idx) => (
              <div key={val.title} className="p-6 border-l border-zinc-200 hover:border-black transition-colors">
                <span className="font-mono text-xs text-zinc-400 font-bold block mb-4">0{idx + 1}</span>
                <h3 className="font-display font-black text-xl text-ink uppercase tracking-wider mb-3">
                  {val.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-500 font-semibold tracking-wider">
                  {val.body}
                </p>
              </div>
            ))}
          </div>

          {/* Massive CONTENT IS KING text clipping mask (Slide 4 style) */}
          <div className="w-full text-center mt-20 pt-8 overflow-hidden select-none">
            <svg viewBox="0 0 1200 300" className="w-full h-auto font-display font-black">
              <defs>
                <clipPath id="content-clip">
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="text-7xl sm:text-8xl md:text-[9.5rem] font-black uppercase tracking-tighter">
                    CONTENT IS KING
                  </text>
                </clipPath>
              </defs>
              <foreignObject x="0" y="0" width="1200" height="300" clipPath="url(#content-clip)">
                <video
                  src={MEDIA.studioVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </foreignObject>
            </svg>
          </div>

        </div>
      </section>

      {/* ============ TALENTS & CREATORS SECTION ============ */}
      <section className="relative bg-brand-yellow py-24 sm:py-32 overflow-hidden clip-slanted-up">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-20 w-44 h-44 rounded-full bg-brand-teal/20 blur-md pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Stylish cropped model in teal container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                {/* Organic teal background shape */}
                <div className="absolute w-[92%] h-[92%] bg-brand-teal rounded-[3.5rem] rotate-6 shadow-xl" />
                
                {/* Model Image */}
                <div className="relative z-10 w-[90%] h-[90%] rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl">
                  <img
                    src="/assets/creative_talent.webp"
                    alt="Creative talent and creators representation"
                    width={768}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Teal organic circular statement container */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="bg-brand-teal text-white rounded-[4rem] p-10 sm:p-14 text-center max-w-md shadow-2xl flex flex-col items-center select-none">
                <h3 className="font-display font-black text-3xl sm:text-4xl tracking-[0.1em] leading-tight mb-4 uppercase">
                  TALENTS & CREATORS
                </h3>
                
                <p className="text-xs sm:text-sm tracking-widest uppercase font-bold text-zinc-200 mb-8 leading-relaxed max-w-xs">
                  WE CONNECT BRANDS WITH THE NEW GENERATION OF CREATIVE LEADERS AND INFLUENCERS.
                </p>
                
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white hover:bg-white hover:text-brand-teal text-white font-black tracking-widest text-xs uppercase px-8 py-4 rounded-none transition-all shadow-md"
                >
                  CREATIVE DECK
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <Pricing />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ PARTNER LOGOS MARQUEE ============ */}
      <MarqueeLogos />

      {/* ============ CALL TO ACTION SECTION ============ */}
      <CTASection />
    </>
  );
}
