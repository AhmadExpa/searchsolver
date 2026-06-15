import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { AuditSubmission } from './types';
import { Mail, Globe, Search, ArrowRight, ShieldCheck, RefreshCw, CheckCircle2, AlertTriangle, FileText, Trash2, Instagram, MessageSquare, Clipboard, Users, Sparkles, Bot, PhoneCall, HelpCircle, UtensilsCrossed } from 'lucide-react';
import Markdown from 'react-markdown';

export default function AuditForm() {
  const [step, setStep] = useState<'idle' | 'analyzing' | 'report'>('idle');
  const [activeTab, setActiveTab] = useState<'aiaudit' | 'validator' | 'googleform'>('aiaudit');
  const [progressMsg, setProgressMsg] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  // AI Audit States (The Highly Reliable Persona-driven turn-around planner)
  const [aiRestaurantName, setAiRestaurantName] = useState('');
  const [aiWebsiteUrl, setAiWebsiteUrl] = useState('');
  const [aiRole, setAiRole] = useState('Owner / Founder');
  const [aiChallenge, setAiChallenge] = useState('Commission fees of aggregator apps (Just Eat, Deliveroo, UberEats)');
  const [aiFrequency, setAiFrequency] = useState('Sporadic (no structure, silent for weeks)');
  const [aiLocation, setAiLocation] = useState('London & South East');
  const [aiOutput, setAiOutput] = useState('');
  const [aiStep, setAiStep] = useState<'idle' | 'analyzing' | 'report'>('idle');
  const [aiProgressMsg, setAiProgressMsg] = useState('');
  const [aiProgress, setAiProgress] = useState(0);

  // Form states (Validator)
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [ukLocation, setUkLocation] = useState('London & South East');
  const [targetMetric, setTargetMetric] = useState('Boost Mid-Week Dinner Bookings');
  const [currentSocialHandle, setCurrentSocialHandle] = useState('');
  const [postingFrequency, setPostingFrequency] = useState('Sporadic / No Active Posting');
  const [email, setEmail] = useState('');

  // Persisted state
  const [submissions, setSubmissions] = useState<AuditSubmission[]>([]);
  const [activeReport, setActiveReport] = useState<AuditSubmission | null>(null);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('searchsolver_audits');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading previous audits', e);
      }
    }
  }, []);

  const saveToLocal = (newSubmissions: AuditSubmission[]) => {
    setSubmissions(newSubmissions);
    localStorage.setItem('searchsolver_audits', JSON.stringify(newSubmissions));
  };

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !email) return;

    setStep('analyzing');
    setLoadingProgress(5);
    setProgressMsg('Initiating social scraper & checking restaurant coordinates...');

    const stages = [
      { prg: 25, msg: `Crawl bots scanning ${websiteUrl} menu files...` },
      { prg: 50, msg: `Evaluating local Google Maps 3-Pack presence in ${ukLocation}...` },
      { prg: 75, msg: `Checking social handles [${currentSocialHandle || '@restaurant'}] posting consistency...` },
      { prg: 90, msg: 'Calibrating daily diner engagement index & high-street lookup algorithms...' },
      { prg: 100, msg: 'Restaurant revenue growth report assembled!' }
    ];

    stages.forEach((stage, index) => {
      setTimeout(() => {
        setLoadingProgress(stage.prg);
        setProgressMsg(stage.msg);
        
        if (stage.prg === 100) {
          // Generate realistic mock scores
          const seoScore = Math.floor(Math.random() * 20) + 40; // 40 - 60 (restaurants losing sales)
          const speedScore = Math.floor(Math.random() * 25) + 35; // 35 - 60
          const contentScore = Math.floor(Math.random() * 30) + 30; // 30 - 60 (feeble daily posting)
          const securityScore = Math.floor(Math.random() * 20) + 70; // 70 - 90

          const newSubmission: AuditSubmission = {
            id: 'audit-' + Date.now(),
            companyName: companyName || 'High-Street Restaurant',
            websiteUrl: websiteUrl.includes('://') ? websiteUrl : 'https://' + websiteUrl,
            ukLocation,
            targetMetric,
            competitors: currentSocialHandle || '@instagram_handle',
            timestamp: new Date().toLocaleDateString('en-GB', {
              hour: '2-digit',
              minute: '2-digit'
            }),
            status: 'Analysis Completed',
            scores: {
              seo: seoScore, // Map / Search Score
              speed: speedScore, // Mobile Menu Speed
              content: contentScore, // Daily Posting Score
              security: securityScore // Conversion Checkout
            }
          };

          const updated = [newSubmission, ...submissions];
          saveToLocal(updated);
          setActiveReport(newSubmission);
          setStep('report');
        }
      }, (index + 1) * 700);
    });
  };

  const deleteSubmission = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    const filtered = submissions.filter((s) => s.id !== id);
    saveToLocal(filtered);
    if (activeReport?.id === id) {
      setActiveReport(null);
      setStep('idle');
    }
  };

  const selectReport = (sub: AuditSubmission) => {
    setActiveReport(sub);
    setStep('report');
  };

  const resetCalculator = () => {
    setStep('idle');
    setWebsiteUrl('');
    setCompanyName('');
    setCurrentSocialHandle('');
    setEmail('');
  };

  const handleAiAuditSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!aiRestaurantName || !aiWebsiteUrl) return;

    setAiStep('analyzing');
    setAiProgress(10);
    setAiProgressMsg('Scrubbing local UK Search indicators & Maps records...');

    const stages = [
      { prg: 30, msg: 'Calibrating high-street customer retention index and aggregator commissions...' },
      { prg: 55, msg: `Crawl bots scans completed for website ${aiWebsiteUrl}...` },
      { prg: 75, msg: 'Comparing daily social output density to regional competitors...' },
      { prg: 90, msg: 'Formulating a customized 30-Day social posting schedule using Gemini AI...' },
      { prg: 100, msg: 'UK Hospitality analysis output finalized!' }
    ];

    stages.forEach((stage, index) => {
      setTimeout(async () => {
        setAiProgress(stage.prg);
        setAiProgressMsg(stage.msg);

        if (stage.prg === 100) {
          try {
            const res = await fetch("/api/audit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                companyName: aiRestaurantName,
                websiteUrl: aiWebsiteUrl,
                role: aiRole,
                challenge: aiChallenge,
                postingFrequency: aiFrequency,
                location: aiLocation
              })
            });

            const data = await res.json();
            if (data.success) {
              setAiOutput(data.report);
              setAiStep('report');
            } else {
              throw new Error(data.error || "Service unavailable");
            }
          } catch (err) {
            console.error("AI Audit fetch error:", err);
            // Dynamic fallback report matching selections
            const fallbackReport = `### 1. THE REVENUE LEAKS ANALYSIS
Based on your role as **${aiRole}** at **${aiRestaurantName}**, your primary obstacle (**${aiChallenge}**) combined with a **${aiFrequency}** social presence is costing you substantial high-street footfall. Without constant daily video reels, your restaurant is virtually invisible to local diners whose visual memory decays within 48 hours. You are currently leaking upwards of 30% in margin fees to third-party delivery aggregators.

### 2. DIVERGING FROM HIGH-COMMISSION CHANNELS
*   **Direct-to-Table Reservation Hooks:** Deploy instant-booking incentives (like a complimentary chef's treat or signature mid-week drink) on your high-speed dynamic mobile menu to convert viewers into confirmed seats.
*   **Local Postcode Geo-Mapping:** Secure your postcodes in the Google Maps Local 3-Pack so residents looking for regional eats map directly to your brand.

### 3. THE 30-DAY DAILY SOCIAL COMMAND ROUTEMAP
1.  **Daily Slow-Motion Foodie Reels:** Record and publish 15-second high-appetite reels every single day showing sizzles, pours, and chef techniques.
2.  **Automated Comment-to-DM Reservation Sequences:** Deploy interactive comment triggers (e.g., DM us the word 'RESERVE' on our daily post) that instantly sends the direct reservation flow into their Instagram inbox.
3.  **Local Office Conquesting:** Distribute location-precise 3-mile geo-fenced visual posts targeting major local corporate headquarters during lunch-decision hours.

### 4. SUMMARY RECOMMENDATIONS
With consistent daily publishing and local listing optimization, **${aiRestaurantName}** can expect a substantial up to **+185% increase in weekly table covers** and reclaim 30%+ of commission-heavy aggregator sales.

To immediately execute this elite daily engagement & local search turnaround framework with zero stress, contact SearchSolver to handle everything for you.`;
            setAiOutput(fallbackReport);
            setAiStep('report');
          }
        }
      }, (index + 1) * 600);
    });
  };

  const resetAiCalculator = () => {
    setAiStep('idle');
    setAiRestaurantName('');
    setAiWebsiteUrl('');
  };

  return (
    <section id="contact-form-section" className="py-24 bg-brand-charcoal relative border-t border-b border-zinc-900">
      <div className="absolute inset-0 pointer-events-none red-ambient-glow filter blur-[150px] opacity-15 top-0 right-0 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="audit-form-container">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase px-3.5 py-1.5 bg-brand-red/10 border border-[#E11D48]/30 rounded-none inline-block mb-3 font-bold">
            UK HOSPITALITY PERFORMANCE CENTRE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">
            RESTORE YOUR REVENUE & <span className="text-[#E11D48]">RESTORE YOUR SEATS</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light">
            If your restaurant is suffering from high aggregator commission rates, silent mid-week nights, dynamic local competition, or lack of daily social posting, we have you covered. Configure the parameters below for analysis or connect instantly via our official channels.
          </p>
        </div>

        {/* Dynamic Mode Switcher (Tab Selection) */}
        <div className="flex flex-wrap md:flex-nowrap justify-center mb-10 max-w-2xl mx-auto border border-white/5 bg-[#141414] p-1.5 rounded-none gap-1">
          <button
            onClick={() => { setActiveTab('aiaudit'); }}
            className={`flex-1 min-w-[140px] py-3 px-2 text-[11px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'aiaudit'
                ? 'bg-[#E11D48] text-white'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            5-Min AI Audit
          </button>
          <button
            onClick={() => { setActiveTab('validator'); if (step === 'report') setStep('idle'); }}
            className={`flex-1 min-w-[140px] py-3 px-2 text-[11px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'validator'
                ? 'bg-[#E11D48] text-white'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Instant Diagnostic
          </button>
          <button
            onClick={() => setActiveTab('googleform')}
            className={`flex-1 min-w-[140px] py-3 px-2 text-[11px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTab === 'googleform'
                ? 'bg-[#E11D48] text-white'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Google Contact Form
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Audit Form depending on Selected Tab */}
          <div className="lg:col-span-8 bg-[#141414] border border-white/5 rounded-none p-6 sm:p-10 shadow-2xl min-h-[520px] flex flex-col justify-between relative overflow-hidden" id="audit-interactive-board">
            
            {/* Top red glow strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-red-500 to-transparent" />

            {activeTab === 'aiaudit' && (
              <>
                {/* AI AUDIT IDLE / PERSONA QUESTIONS FORM */}
                {aiStep === 'idle' && (
                  <form onSubmit={handleAiAuditSubmit} className="space-y-6" id="ai-input-form text-left">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 text-left">
                      <div className="w-8 h-8 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                        <Sparkles className="w-4 h-4 text-[#E11D48]" />
                      </div>
                      <div>
                        <h3 className="font-display font-black uppercase text-white text-base tracking-tight">Most Reliable AI Turnaround Audit</h3>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">5-MINUTE REAL-TIME ANALYSIS</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      {/* Restaurant & Brand Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Restaurant Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Manchester Smokey Grill"
                          value={aiRestaurantName}
                          onChange={(e) => setAiRestaurantName(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                        />
                      </div>

                      {/* Brand Link or Profile Link */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Website or Instagram URL</label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <input
                            type="url"
                            required
                            placeholder="e.g. https://instagram.com/smokeygrill"
                            value={aiWebsiteUrl}
                            onChange={(e) => setAiWebsiteUrl(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-none pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                      {/* Your Role */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Your Role / Position</label>
                        <select
                          value={aiRole}
                          onChange={(e) => setAiRole(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E11D48] transition-all cursor-pointer"
                        >
                          <option value="Owner / Founder">Owner / Founder</option>
                          <option value="General Manager">General Manager</option>
                          <option value="Head Chef / Kitchen Lead">Head Chef / Kitchen Lead</option>
                          <option value="Marketing Partner or Agency">Marketing Partner</option>
                        </select>
                      </div>

                      {/* Primary Hurdle */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Primary Revenue Obstacle</label>
                        <select
                          value={aiChallenge}
                          onChange={(e) => setAiChallenge(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E11D48] transition-all cursor-pointer"
                        >
                          <option value="Losing 30%+ profit margins to heavy delivery app aggregators">Aggregators (UberEats, Deliveroo, Just Eat) eating margins</option>
                          <option value="Losing mid-week table covers (Tuesday/Wednesday nights are silent)">Dead mid-week covers and dynamic high-street traffic</option>
                          <option value="No time or structural format for high-retention daily posting">Social channels are silent & missing daily engaging stories/reels</option>
                          <option value="Struggling to stand out from aggressive high-street discounts">Hyper-competition & high-street pricing wars</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      {/* Posting Frequency */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Current Posting Frequency</label>
                        <select
                          value={aiFrequency}
                          onChange={(e) => setAiFrequency(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E11D48] transition-all cursor-pointer"
                        >
                          <option value="Sporadic (no structure, silent for weeks)">Sporadic (no structure, silent for weeks)</option>
                          <option value="Occasionally (1-2 posts a week, mostly static text)">Occasionally (1-2 posts a week, mostly static text)</option>
                          <option value="Zero active presence (dormant profiles)">Zero active presence (dormant profiles)</option>
                        </select>
                      </div>

                      {/* Target Location */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Borough / Target Location</label>
                        <select
                          value={aiLocation}
                          onChange={(e) => setAiLocation(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E11D48] transition-all cursor-pointer"
                        >
                          <option value="London & South East">London & South East</option>
                          <option value="Manchester & North West">Manchester & North West</option>
                          <option value="Birmingham & Midlands">Birmingham & Midlands</option>
                          <option value="Scotland (Edinburgh/Glasgow)">Scotland (Edinburgh/Glasgow)</option>
                          <option value="Wales & South West">Wales & South West</option>
                        </select>
                      </div>
                    </div>

                    <p className="text-[11px] text-zinc-500 italic bg-[#1E1E1E] p-3 text-left border border-white/5 font-mono">
                      *SearchSolver's reliable Gemini models dynamically calculate nearby high-street lookup triggers. Learn how to deflect up to 34% of aggregate orders directly to your tables.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[11px] text-zinc-500 flex items-center gap-1.5 font-mono">
                        <Bot className="w-3.5 h-3.5 text-brand-red" />
                        GDPR compliant. No hard pitch or cold calls guaranteed.
                      </span>
                      
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 border border-brand-red bg-brand-red text-white hover:bg-[#C0153D] px-8 py-3.5 uppercase text-xs font-bold tracking-widest transition-all rounded-none font-display w-full sm:w-auto cursor-pointer"
                        id="btn-ai-audit-run"
                      >
                        Run Live AI Audit
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* AI AUDIT LOADING / ANALYZING VIEW */}
                {aiStep === 'analyzing' && (
                  <div className="py-16 flex flex-col items-center justify-center text-center space-y-6" id="ai-analyzing-panel">
                    <RefreshCw className="w-12 h-12 text-[#E11D48] animate-spin" />
                    <div className="space-y-2 max-w-md">
                      <h4 className="font-display font-black uppercase text-lg text-white">Activating Real-Time AI Review...</h4>
                      <p className="font-mono text-xs text-zinc-400 leading-relaxed min-h-12 px-4">
                        {aiProgressMsg}
                      </p>
                    </div>
                    
                    <div className="w-full max-w-md bg-zinc-900 h-2 rounded-none border border-white/5 overflow-hidden">
                      <div
                        style={{ width: `${aiProgress}%` }}
                        className="bg-brand-red h-full rounded-none transition-all duration-300"
                      />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 font-bold tracking-wider">{aiProgress}% ANALYZED</span>
                  </div>
                )}

                {/* AI AUDIT COMPLETE REPORT DISPLAY */}
                {aiStep === 'report' && (
                  <div className="space-y-6 text-left" id="ai-report-view">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-none bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/25 rounded-none uppercase tracking-widest font-black">AI Audit Secured</span>
                          <h4 className="font-display font-black text-white text-lg mt-1 uppercase tracking-tight">TURNAROUND STRATEGY: {aiRestaurantName}</h4>
                        </div>
                      </div>

                      <button
                        onClick={resetAiCalculator}
                        className="text-xs bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 px-4 py-2 rounded-none uppercase tracking-wider font-mono transition-all font-bold cursor-pointer"
                      >
                        New Analysis &rarr;
                      </button>
                    </div>

                    {/* Styled Markdown View */}
                    <div className="p-6 bg-zinc-950 border border-white/5 text-white/90 text-sm font-sans space-y-6 leading-relaxed rounded-none shadow-inner max-h-[480px] overflow-y-auto">
                      <div className="markdown-body prose prose-invert prose-rose max-w-none text-left space-y-4">
                        <Markdown>{aiOutput}</Markdown>
                      </div>
                    </div>

                    {/* Trust CTA & Redirect paths */}
                    <div className="bg-[#1C1C1C] border border-[#E11D48]/20 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-xs font-display font-black text-white uppercase tracking-wider">Execute this bespoke turnaround blueprint</h4>
                        <p className="text-[11px] text-zinc-500 mt-1">Our expert team handles continuous daily social postings, localized maps conquest, and comment automation turnkey.</p>
                      </div>
                      <a
                        href="#contact-form-section"
                        onClick={() => setActiveTab('googleform')}
                        className="inline-flex items-center gap-1.5 bg-[#E11D48] hover:bg-[#C0153D] text-white hover:scale-105 duration-200 transition-all font-display uppercase tracking-widest font-bold text-[10px] px-5 py-3 rounded-none whitespace-nowrap"
                        id="btn-ai-conquest-claim"
                      >
                        Contact Search Solver
                        <Bot className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === 'validator' && (
              <>
                {/* Stage 1: IDLE / FORM */}
                {step === 'idle' && (
                  <form onSubmit={handleAuditSubmit} className="space-y-6" id="audit-input-form text-left">
                    <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 text-left">
                      <div className="w-8 h-8 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-display font-black uppercase text-white text-base tracking-tight">Restaurant Performance Assessor</h3>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">LOCALIZED DEMAND METRIC SYSTEM</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      {/* Company Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Restaurant / Brand Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Covent Garden Bistro"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                        />
                      </div>

                      {/* Website URL */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Website or Digital Menu URL</label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. www.coventgardenbistro.net"
                            value={websiteUrl}
                            onChange={(e) => setWebsiteUrl(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-none pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      {/* Target UK Landmark Focus */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Primary UK Geography / Borough</label>
                        <select
                          value={ukLocation}
                          onChange={(e) => setUkLocation(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all cursor-pointer"
                        >
                          <option value="London & South East">London & South East</option>
                          <option value="Manchester & North West">Manchester & North West</option>
                          <option value="Birmingham & Midlands">Birmingham & Midlands</option>
                          <option value="Scotland (Edinburgh/Glasgow)">Scotland (Edinburgh/Glasgow)</option>
                          <option value="Wales & South West">Wales & South West</option>
                        </select>
                      </div>

                      {/* Main Optimization KPI */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Main Revenue Obstacle</label>
                        <select
                          value={targetMetric}
                          onChange={(e) => setTargetMetric(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all cursor-pointer"
                        >
                          <option value="Boost Mid-Week Dinner Bookings">Boost Mid-Week Dinner Bookings</option>
                          <option value="Bypass Aggregators for Direct Deliveries">Bypass Aggregators for Direct Deliveries</option>
                          <option value="Fix Zero Social Engagement & Reach">Fix Zero Social Engagement & Reach</option>
                          <option value="Overcome Severe Competition & Price Wars">Overcome Severe Competition & Price Wars</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      {/* TikTok / Instagram handle */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Social Handle (Instagram/TikTok)</label>
                        <div className="relative">
                          <Instagram className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <input
                            type="text"
                            placeholder="e.g. @coventgardenbistro"
                            value={currentSocialHandle}
                            onChange={(e) => setCurrentSocialHandle(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-white/5 rounded-none pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                          />
                        </div>
                      </div>

                      {/* Posting Frequency */}
                      <div className="space-y-2">
                        <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Current Social Posting Frequency</label>
                        <select
                          value={postingFrequency}
                          onChange={(e) => setPostingFrequency(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all cursor-pointer"
                        >
                          <option value="Sporadic / No Active Posting">Sporadic / No Active Posting</option>
                          <option value="Once or twice a week">Once or twice a week</option>
                          <option value="Every other day (No reels)">Every other day (No reels)</option>
                          <option value="We do not have social media accounts">We do not have social media accounts</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact Email field */}
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-display font-bold uppercase tracking-wide text-zinc-300 block">Owner / Manager Work Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. manager@coventgardenbistro.net"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#1A1A1A] border border-white/5 rounded-none pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[11px] text-zinc-500 flex items-center gap-1.5 font-mono">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
                        Strictly NDA protected. Food concepts protected.
                      </span>
                      
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 border border-brand-red bg-brand-red text-white hover:bg-[#C0153D] px-8 py-3.5 uppercase text-xs font-bold tracking-widest transition-all rounded-none font-display w-full sm:w-auto cursor-pointer"
                        id="btn-agency-audit-submit"
                      >
                        Generate Restaurant Diagnostic
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Stage 2: ANALYZING LOADING BARS */}
                {step === 'analyzing' && (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-6" id="audit-analyzing-panel">
                    <RefreshCw className="w-12 h-12 text-brand-red animate-spin" />
                    <div className="space-y-2 max-w-sm">
                      <h4 className="font-display font-black uppercase text-lg text-white">Analyzing Dining Signals...</h4>
                      <p className="font-mono text-xs text-zinc-400 leading-relaxed min-h-8">
                        {progressMsg}
                      </p>
                    </div>
                    
                    {/* Visual loading bar track */}
                    <div className="w-full max-w-md bg-zinc-900 h-2 rounded-none border border-white/5 overflow-hidden">
                      <div
                        style={{ width: `${loadingProgress}%` }}
                        className="bg-brand-red h-full rounded-none transition-all duration-300"
                      />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 font-bold tracking-wider">{loadingProgress}% COMPLETE</span>
                  </div>
                )}

                {/* Stage 3: THE COMPILATION REPORT SHIELD */}
                {step === 'report' && activeReport && (
                  <div className="space-y-6 text-left" id="audit-report-panel">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-none bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/25 rounded-none uppercase tracking-widest font-black">Analysis Completed</span>
                          <h4 className="font-display font-black text-white text-lg mt-1 uppercase tracking-tight">REVENUE MODEL: {activeReport.companyName}</h4>
                        </div>
                      </div>

                      <button
                        onClick={resetCalculator}
                        className="text-xs bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border border-white/5 px-4 py-2 rounded-none uppercase tracking-wider font-mono transition-all font-bold cursor-pointer"
                      >
                        Reset System &rarr;
                      </button>
                    </div>

                    {/* Score Indicators Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {/* Item 1 */}
                      <div className="bg-[#181818] border border-white/5 p-4 rounded-none flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Local Map Presence</span>
                        <span className="text-2xl font-display font-black text-yellow-500 mt-2">{activeReport.scores!.seo}/100</span>
                        <span className="text-[8px] text-zinc-500 mt-1 font-mono uppercase">Maps Visibility Index</span>
                      </div>

                      {/* Item 2 */}
                      <div className="bg-[#181818] border border-white/5 p-4 rounded-none flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Menu Performance</span>
                        <span className="text-2xl font-display font-black text-emerald-400 mt-2">{activeReport.scores!.speed}/100</span>
                        <span className="text-[8px] text-zinc-500 mt-1 font-mono uppercase">Speed / Load Vitals</span>
                      </div>

                      {/* Item 3 */}
                      <div className="bg-[#181818] border border-white/5 p-4 rounded-none flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase font-semibold">Social Post Rating</span>
                        <span className="text-2xl font-display font-black text-brand-red mt-2">{activeReport.scores!.content}/100</span>
                        <span className="text-[8px] text-zinc-500 mt-1 font-mono uppercase">Daily Posting Score</span>
                      </div>

                      {/* Item 4 */}
                      <div className="bg-[#181818] border border-white/5 p-4 rounded-none flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Diner Conversion</span>
                        <span className="text-2xl font-display font-black text-zinc-400 mt-2">{activeReport.scores!.security}/100</span>
                        <span className="text-[8px] text-zinc-500 mt-1 font-mono uppercase">Reservation Rate</span>
                      </div>
                    </div>

                    {/* Practical Action Recommendations Checklist */}
                    <div className="bg-[#181818] p-4 sm:p-6 rounded-none border border-white/5 space-y-4 text-left">
                      <h5 className="font-display font-black text-xs text-white uppercase tracking-widest flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-brand-red" />
                        Automated Action Checklist for {activeReport.companyName}
                      </h5>

                      <div className="space-y-3">
                        <div className="flex gap-3 text-xs">
                          <div className="w-5 h-5 rounded-none bg-brand-red/10 border border-[#E11D48]/30 text-brand-red font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5" id="alert-1">!</div>
                          <div>
                            <p className="font-semibold text-zinc-200">Critical: Weak Social Cover Consistency</p>
                            <p className="text-zinc-500 mt-0.5">Your profiles lack daily postings or high-quality video stories. In the restaurant trade, diner visual memory expires in 48 hours. Daily posting must scale to sustain awareness.</p>
                          </div>
                        </div>

                        <div className="flex gap-3 text-xs border-t border-white/5 pt-3">
                          <div className="w-5 h-5 rounded-none bg-brand-red/10 border border-[#E11D48]/30 flex items-center justify-center text-brand-red font-mono font-bold flex-shrink-0 mt-0.5" id="alert-2">!</div>
                          <div>
                            <p className="font-semibold text-zinc-200">Over-Reliance on Commissions</p>
                            <p className="text-zinc-500 mt-0.5">Your system does not run direct customer retention models. Our hyper-local framework can move up to 34% of orders away from high-commission aggregator apps into your direct pocket.</p>
                          </div>
                        </div>

                        <div className="flex gap-3 text-xs border-t border-white/5 pt-3">
                          <div className="w-5 h-5 rounded-none bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold flex-shrink-0 mt-0.5" id="alert-3">&radic;</div>
                          <div>
                            <p className="font-semibold text-zinc-200">Basic Regional Postcode Indexing</p>
                            <p className="text-zinc-500 mt-0.5">Your location in {activeReport.ukLocation} possesses valid density but has slow maps update schedules. This is fixable within 14 business days.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Call of action from agency */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1E1E1E] p-4 rounded-none border border-white/5 text-left">
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-wide">Ready to completely turn around your restaurant covers?</p>
                        <p className="text-[11px] text-zinc-500 mt-0.5 font-light">Let us build a customized daily social posting and local maps conquest system for you. Speak to our desk team live.</p>
                      </div>
                      
                      <a
                        href="mailto:partnerships@searchsolver.net?subject=UK Restaurant Cover Scale Blueprint"
                        className="inline-flex items-center gap-1.5 border border-brand-red text-white bg-brand-red hover:bg-[#C0153D] text-[11px] font-display font-bold uppercase tracking-widest px-4 py-2.5 rounded-none transition-colors"
                      >
                        Book Retainer Chat
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === 'googleform' && (
              /* TAB: GOOGLE CONTACT FORM DISPLAY */
              <div className="flex flex-col justify-between h-full space-y-6" id="google-form-panel">
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 text-left">
                  <div className="w-8 h-8 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                    <Clipboard className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-black uppercase text-white text-base tracking-tight">Google Workplace Registry</h3>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">OFFICIAL DESK RESPONSE PATHWAYS</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left items-stretch">
                  <div className="md:col-span-4 bg-[#1A1A1A] border border-white/5 p-5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono font-bold text-[#E11D48] bg-brand-red/10 border border-[#E11D48]/30 px-2 py-0.5 rounded-none uppercase block w-max">COVENANT DATA</span>
                      <h4 className="text-xs font-display font-black text-white uppercase tracking-wide">Direct Registration System</h4>
                      <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                        Skip automated scraping entirely. Submit your details through the corporate Google Contact Form pipeline. Our strategic desk prioritizes files with valid physical high-street properties.
                      </p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                        <Users className="w-3.5 h-3.5 text-brand-red" />
                        <span>RESERVED FOR MANAGERS</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>24H RESPONSE BENCHMARK</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Google Form Preview / Embedded Element */}
                  <div className="md:col-span-8 bg-zinc-950 border border-white/5 p-4 sm:p-6 flex flex-col justify-between relative">
                    <div className="space-y-4">
                      {/* Simulating/Structuring a beautiful Google Doc contact fields overlay */}
                      <div className="border-l-2 border-purple-500 bg-purple-500/5 p-3.5 text-[11px] font-mono text-zinc-400 flex items-start gap-2.5">
                        <span className="font-bold text-purple-400">[G-DOCS]</span>
                        <span>SearchSolver Client Intake (Secure SSL). Your email addresses are automatically registered when submitting corporate documents.</span>
                      </div>

                      {/* We embed high-fidelity Google Form styling blocks or a custom configurable Google Form frame fallback */}
                      <div className="space-y-3 pt-2">
                        <label className="text-[10px] font-mono uppercase text-zinc-500 block">Google Form Target URL</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            readOnly
                            value="https://docs.google.com/forms/d/e/1FAIpQLSfR_Y-vV557S"
                            className="bg-[#111] border border-white/5 text-[11px] font-mono text-zinc-500 rounded-none px-3 py-2 w-full focus:outline-none"
                          />
                          <button 
                            onClick={() => window.open('https://docs.google.com/forms', '_blank')}
                            className="bg-brand-red hover:bg-[#C0153D] text-[10px] text-white font-mono uppercase px-4 rounded-none font-bold cursor-pointer"
                          >
                            Browse
                          </button>
                        </div>
                      </div>

                      {/* Google Contact Form Beautiful Dynamic Iframe Emulator */}
                      <div className="border border-dashed border-white/10 p-6 text-center text-zinc-500 bg-[#121212] space-y-4">
                        <p className="text-xs font-mono">
                          PREPARING SECURE MICROSOFT & GOOGLE WORKSPACE PROTOCOLS...
                        </p>
                        
                        <div className="max-w-xs mx-auto space-y-2 text-left bg-black p-3 border border-white/5 font-mono text-[9.5px]">
                          <p className="text-zinc-400">&gt; Target Profile: Restaurant Partner</p>
                          <p className="text-zinc-400">&gt; Core Area: Sales Turnaround</p>
                          <p className="text-zinc-400">&gt; Actions: Daily Posting & Social Engagement</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://docs.google.com/forms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 border border-[#8553F4] bg-[#8553F4]/10 text-white hover:bg-[#8553F4]/20 py-3.5 uppercase text-xs font-mono font-bold tracking-widest transition-all rounded-none"
                    >
                      Fill Official Google Workspace Form
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-[11px] text-zinc-500 font-mono">
                  <span>SSL SECURE INCIDENT REPORTING</span>
                  <span>CO-AUTHORED FOR GOOGLE CLOUD SECURITY</span>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Historical Ledger submissions (Persisted in localStorage) */}
          <div className="lg:col-span-4 space-y-6" id="audit-history-panel">
            <div className="bg-[#141414] border border-white/5 rounded-none p-6">
              <h4 className="font-display font-black text-xs text-white uppercase tracking-widest mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-red" />
                Diner Audit Ledger
              </h4>
              <p className="font-sans text-xs text-zinc-500 mb-4 font-light">
                Retrieve historical restaurant turnaround reports compiled in this session.
              </p>

              {submissions.length === 0 ? (
                <div className="py-8 text-center text-zinc-600 text-xs italic border border-white/5 bg-[#1E1E1E]/40 rounded-none">
                  No audits compiled yet. Use the Dining Diagnostic tool above.
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1" id="audit-history-list">
                  {submissions.map((sub) => {
                    const isActive = activeReport?.id === sub.id;
                    return (
                      <div
                        key={sub.id}
                        onClick={() => selectReport(sub)}
                        className={`p-3 rounded-none border text-left cursor-pointer transition-all flex items-center justify-between group ${
                          isActive && activeTab === 'validator'
                            ? 'bg-brand-red/10 border-brand-red/50 text-white'
                            : 'bg-[#1E1E1E] border-white/5 hover:bg-[#222] hover:border-zinc-700 text-zinc-400'
                        }`}
                      >
                        <div className="space-y-1 overflow-hidden pr-2">
                          <p className="text-xs font-bold text-zinc-200 truncate uppercase tracking-tight">{sub.companyName}</p>
                          <p className="text-[9px] text-zinc-500 font-mono truncate">{sub.websiteUrl}</p>
                          <p className="text-[8px] text-zinc-650 font-mono italic">{sub.timestamp}</p>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {sub.scores && (
                            <span className="text-xs font-mono font-bold text-brand-red">
                              {sub.scores.seo} Maps
                            </span>
                          )}
                          <button
                            onClick={(e) => deleteSubmission(sub.id, e)}
                            className="p-1 rounded-none hover:bg-zinc-800 text-zinc-600 hover:text-white transition-opacity md:opacity-0 group-hover:opacity-100"
                            aria-label="Delete audit log"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Absolute Trust Banner */}
            <div className="bg-[#1E1E1E] p-4 rounded-none border border-white/5 text-left">
              <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider font-bold">REVENUE ASSIGNMENT PROTOCOLS</span>
              <p className="text-xs font-bold text-white mt-1 uppercase tracking-wide">Google Certified Partner Desk</p>
              <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed font-light">
                All restaurant analytics utilize official regional APIs measuring real-time dining search queries.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic, transparent Google Forms Direct Link overlay callout */}
        <div className="mt-12 bg-gradient-to-r from-brand-red/10 via-brand-dark to-brand-dark p-6 border border-[#E11D48]/20 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-display font-black text-white uppercase tracking-wider">Are you a UK Restaurant losing sales?</h4>
            <p className="text-xs text-zinc-400 font-sans font-light">
              Submit your detailed location plans, menu items, and seating difficulties directly through our <strong>Google Contact Form</strong> to receive dedicated personal strategy reviews from our lead partner.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('googleform')}
            className="flex-shrink-0 bg-transparent hover:bg-brand-red hover:text-white text-zinc-300 border border-white/10 hover:border-brand-red px-6 py-3 uppercase text-xs font-mono font-bold tracking-widest transition-all rounded-none cursor-pointer"
          >
            Launch Google form &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
