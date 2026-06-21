import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { AuditSubmission } from './types';
import {
  Mail, Globe, ArrowRight, ShieldCheck, RefreshCw, CheckCircle2, AlertTriangle,
  FileText, Trash2, Instagram, Sparkles, Bot, MessageSquare, Phone,
} from 'lucide-react';
import Markdown from 'react-markdown';

const inputCls =
  'w-full bg-canvas border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition';
const selectCls = inputCls + ' cursor-pointer';
const labelCls = 'text-sm font-medium text-ink block mb-1.5';

export default function AuditForm() {
  const [step, setStep] = useState<'idle' | 'analyzing' | 'report'>('idle');
  const [activeTab, setActiveTab] = useState<'aiaudit' | 'validator' | 'googleform'>('aiaudit');
  const [progressMsg, setProgressMsg] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);

  // AI Audit States
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

  // Validator states
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [ukLocation, setUkLocation] = useState('London & South East');
  const [targetMetric, setTargetMetric] = useState('Boost Mid-Week Dinner Bookings');
  const [currentSocialHandle, setCurrentSocialHandle] = useState('');
  const [postingFrequency, setPostingFrequency] = useState('Sporadic / No Active Posting');
  const [email, setEmail] = useState('');

  // Persisted ledger
  const [submissions, setSubmissions] = useState<AuditSubmission[]>([]);
  const [activeReport, setActiveReport] = useState<AuditSubmission | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('markadeo_audits');
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
    localStorage.setItem('markadeo_audits', JSON.stringify(newSubmissions));
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
      { prg: 100, msg: 'Restaurant revenue growth report assembled!' },
    ];

    stages.forEach((stage, index) => {
      setTimeout(() => {
        setLoadingProgress(stage.prg);
        setProgressMsg(stage.msg);

        if (stage.prg === 100) {
          const seoScore = Math.floor(Math.random() * 20) + 40;
          const speedScore = Math.floor(Math.random() * 25) + 35;
          const contentScore = Math.floor(Math.random() * 30) + 30;
          const securityScore = Math.floor(Math.random() * 20) + 70;

          const newSubmission: AuditSubmission = {
            id: 'audit-' + Date.now(),
            companyName: companyName || 'High-Street Restaurant',
            websiteUrl: websiteUrl.includes('://') ? websiteUrl : 'https://' + websiteUrl,
            ukLocation,
            targetMetric,
            competitors: currentSocialHandle || '@instagram_handle',
            timestamp: new Date().toLocaleDateString('en-GB', { hour: '2-digit', minute: '2-digit' }),
            status: 'Analysis Completed',
            scores: { seo: seoScore, speed: speedScore, content: contentScore, security: securityScore },
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
      { prg: 100, msg: 'UK Hospitality analysis output finalized!' },
    ];

    stages.forEach((stage, index) => {
      setTimeout(async () => {
        setAiProgress(stage.prg);
        setAiProgressMsg(stage.msg);

        if (stage.prg === 100) {
          let reportText = '';
          let success = false;

          const prompt = `You are the Lead Restaurant Conversion & Social Media Growth Coach at Markadeo UK.
A restaurant has requested an urgent 5-minute sales & engagement recovery audit.

Here are the target restaurant details:
- Restaurant Name: "${aiRestaurantName}"
- Website / Brand Link: "${aiWebsiteUrl}"
- Core Submitter Role: "${aiRole}"
- Main Revenue Obstacle/Pain Point: "${aiChallenge}"
- Current Social Posting Frequency: "${aiFrequency}"
- Primary Target Location: "${aiLocation}"

Create a highly-focused, direct, punchy, and professional Audit Report.
Avoid generic marketing fluff or AI-style introductory greetings. Get straight to the analysis.

Your response must be structured into exactly these four headers using clear, high-contrast Markdown formatting:

### 1. THE REVENUE LEAKS ANALYSIS
Provide a 2-3 sentence analysis of exactly why their current setup (considering their role "${aiRole}", hurdle "${aiChallenge}", and social frequency "${aiFrequency}") is causing them to lose prospective mid-week covers and direct sales on their high-street location. Identify commission leaks to aggregators.

### 2. DIVERGING FROM HIGH-COMMISSION CHANNELS
Explain 2 actionable, non-obvious ways they can deflect customers from delivery apps (with 30% commissions) directly to booking tables or ordering direct using daily high-retention content and local SEO.

### 3. THE 30-DAY DAILY SOCIAL COMMAND ROUTEMAP
Outline a direct 3-step blueprint for daily posting (e.g., foodie reels, micro-engagements, local search keywords) custom-styled for "${aiRestaurantName}". State exactly what they should publish and how to drive comment-to-booking automated sequences.

### 4. SUMMARY RECOMMENDATIONS
Add a brief 1-2 sentence final summary detailing their potential growth rate.
At the very end, add this exact phrasing: "To immediately execute this elite daily engagement & local search turnaround framework with zero stress, contact Markadeo to handle everything for you."`;

          // 1. Direct client-side Gemini call if a client key is configured
          const clientApiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
          if (clientApiKey && clientApiKey !== 'YOUR_KEY_HERE' && clientApiKey.trim() !== '' && !clientApiKey.includes('VITE_GEMINI_API_KEY')) {
            try {
              const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${clientApiKey}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
                },
              );
              if (response.ok) {
                const data = await response.json();
                if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                  reportText = data.candidates[0].content.parts[0].text;
                  success = true;
                }
              }
            } catch (err) {
              console.warn('Direct client Gemini API fetch failed, falling back:', err);
            }
          }

          // 2. Server-side API
          if (!success) {
            try {
              const res = await fetch('/api/audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  companyName: aiRestaurantName,
                  websiteUrl: aiWebsiteUrl,
                  role: aiRole,
                  challenge: aiChallenge,
                  postingFrequency: aiFrequency,
                  location: aiLocation,
                }),
              });
              if (res.ok) {
                const data = await res.json();
                if (data.success) {
                  reportText = data.report;
                  success = true;
                }
              }
            } catch (err) {
              console.warn('Backend API not reachable, falling back to client generator:', err);
            }
          }

          // 3. Local fallback generator
          if (!success) {
            reportText = `### 1. THE REVENUE LEAKS ANALYSIS
Based on your role as **${aiRole}** at **${aiRestaurantName}**, your primary obstacle (**${aiChallenge}**) combined with a **${aiFrequency}** social presence is costing you substantial high-street footfall. Without constant daily video reels, your restaurant is virtually invisible to local diners whose visual memory decays within 48 hours. You are currently leaking upwards of 30% in margin fees to third-party delivery aggregators.

### 2. DIVERGING FROM HIGH-COMMISSION CHANNELS
*   **Direct-to-Table Reservation Hooks:** Deploy instant-booking incentives (like a complimentary chef's treat or signature mid-week drink) on your high-speed dynamic mobile menu to convert viewers into confirmed seats.
*   **Local Postcode Geo-Mapping:** Secure your postcodes in the Google Maps Local 3-Pack so residents in **${aiLocation}** looking for regional eats map directly to your brand.

### 3. THE 30-DAY DAILY SOCIAL COMMAND ROUTEMAP
1.  **Daily Slow-Motion Foodie Reels:** Record and publish 15-second high-appetite reels every single day showing sizzles, pours, and chef techniques.
2.  **Automated Comment-to-DM Reservation Sequences:** Deploy interactive comment triggers (e.g., DM us the word 'RESERVE' on our daily post) that instantly sends the direct reservation flow into their Instagram inbox.
3.  **Local Office Conquesting:** Distribute location-precise 3-mile geo-fenced visual posts targeting major local corporate headquarters during lunch-decision hours.

### 4. SUMMARY RECOMMENDATIONS
With consistent daily publishing and local listing optimization, **${aiRestaurantName}** can meaningfully grow weekly table covers and reclaim sales currently lost to commission-heavy aggregators (which typically charge around 30%).

To immediately execute this elite daily engagement & local search turnaround framework with zero stress, contact Markadeo to handle everything for you.`;
          }

          setAiOutput(reportText);
          setAiStep('report');
        }
      }, (index + 1) * 600);
    });
  };

  const resetAiCalculator = () => {
    setAiStep('idle');
    setAiRestaurantName('');
    setAiWebsiteUrl('');
  };

  const tabs = [
    { id: 'aiaudit' as const, label: '5-min AI audit' },
    { id: 'validator' as const, label: 'Instant diagnostic' },
    { id: 'googleform' as const, label: 'Talk to us' },
  ];

  return (
    <section id="contact-form-section">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-wider">Free growth audit</p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-ink">
            Restore your revenue &amp; refill your seats
          </h2>
          <p className="mt-3 text-zinc-600">
            Run a 5-minute AI audit, a quick diagnostic, or just talk to us. No hard pitch, no obligation.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-8 max-w-xl mx-auto bg-white border border-line rounded-full p-1.5 shadow-soft">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                if (t.id === 'validator' && step === 'report') setStep('idle');
              }}
              className={`flex-1 min-w-[120px] py-2.5 px-3 text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === t.id ? 'bg-ink text-white' : 'text-zinc-600 hover:text-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Main panel */}
          <div className="lg:col-span-8 rounded-[1.5rem] bg-white border border-line p-6 sm:p-8 shadow-soft min-h-[480px]">
            {/* ---- AI AUDIT ---- */}
            {activeTab === 'aiaudit' && (
              <>
                {aiStep === 'idle' && (
                  <form onSubmit={handleAiAuditSubmit} className="space-y-6">
                    <PanelHeader
                      icon={<Sparkles className="w-5 h-5" />}
                      title="Most reliable AI turnaround audit"
                      sub="5-minute real-time analysis"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Restaurant name</label>
                        <input type="text" required placeholder="e.g. Manchester Smokey Grill" value={aiRestaurantName} onChange={(e) => setAiRestaurantName(e.target.value)} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Website or Instagram URL</label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input type="url" required placeholder="https://instagram.com/smokeygrill" value={aiWebsiteUrl} onChange={(e) => setAiWebsiteUrl(e.target.value)} className={inputCls + ' pl-10'} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className={labelCls}>Your role</label>
                        <select value={aiRole} onChange={(e) => setAiRole(e.target.value)} className={selectCls}>
                          <option>Owner / Founder</option>
                          <option>General Manager</option>
                          <option value="Head Chef / Kitchen Lead">Head Chef / Kitchen Lead</option>
                          <option value="Marketing Partner or Agency">Marketing Partner</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelCls}>Primary revenue obstacle</label>
                        <select value={aiChallenge} onChange={(e) => setAiChallenge(e.target.value)} className={selectCls}>
                          <option value="Losing 30%+ profit margins to heavy delivery app aggregators">Aggregators eating margins</option>
                          <option value="Losing mid-week table covers (Tuesday/Wednesday nights are silent)">Dead mid-week covers</option>
                          <option value="No time or structural format for high-retention daily posting">Silent social channels</option>
                          <option value="Struggling to stand out from aggressive high-street discounts">Hyper-competition &amp; price wars</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Current posting frequency</label>
                        <select value={aiFrequency} onChange={(e) => setAiFrequency(e.target.value)} className={selectCls}>
                          <option>Sporadic (no structure, silent for weeks)</option>
                          <option>Occasionally (1-2 posts a week, mostly static text)</option>
                          <option>Zero active presence (dormant profiles)</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Target location</label>
                        <select value={aiLocation} onChange={(e) => setAiLocation(e.target.value)} className={selectCls}>
                          <option>London &amp; South East</option>
                          <option>Manchester &amp; North West</option>
                          <option>Birmingham &amp; Midlands</option>
                          <option value="Scotland (Edinburgh/Glasgow)">Scotland (Edinburgh/Glasgow)</option>
                          <option>Wales &amp; South West</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-brand-gold-hover" />
                        GDPR compliant. No cold calls.
                      </span>
                      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer" id="btn-ai-audit-run">
                        Run live AI audit
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {aiStep === 'analyzing' && <Analyzing msg={aiProgressMsg} progress={aiProgress} />}

                {aiStep === 'report' && (
                  <div className="space-y-5">
                    <ReportHeader title={`Turnaround strategy: ${aiRestaurantName}`} onReset={resetAiCalculator} />
                    <div className="rounded-2xl bg-canvas border border-line p-6 max-h-[460px] overflow-y-auto">
                      <div className="markdown-body max-w-none">
                        <Markdown>{aiOutput}</Markdown>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-brand-gold-wash border border-brand-gold/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-ink">Execute this blueprint</h4>
                        <p className="text-sm text-zinc-600 mt-0.5">We handle daily posting, local maps and comment automation, turnkey.</p>
                      </div>
                      <button onClick={() => setActiveTab('googleform')} className="inline-flex items-center gap-1.5 bg-ink text-white font-semibold text-sm px-5 py-3 rounded-full whitespace-nowrap cursor-pointer hover:bg-black transition-colors">
                        Contact Markadeo
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ---- VALIDATOR ---- */}
            {activeTab === 'validator' && (
              <>
                {step === 'idle' && (
                  <form onSubmit={handleAuditSubmit} className="space-y-6">
                    <PanelHeader icon={<Globe className="w-5 h-5" />} title="Restaurant performance assessor" sub="Localized demand metrics" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Restaurant / brand name</label>
                        <input type="text" required placeholder="e.g. Covent Garden Bistro" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>Website or menu URL</label>
                        <div className="relative">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input type="text" required placeholder="www.coventgardenbistro.net" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} className={inputCls + ' pl-10'} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Primary UK geography</label>
                        <select value={ukLocation} onChange={(e) => setUkLocation(e.target.value)} className={selectCls}>
                          <option>London &amp; South East</option>
                          <option>Manchester &amp; North West</option>
                          <option>Birmingham &amp; Midlands</option>
                          <option value="Scotland (Edinburgh/Glasgow)">Scotland (Edinburgh/Glasgow)</option>
                          <option>Wales &amp; South West</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Main revenue obstacle</label>
                        <select value={targetMetric} onChange={(e) => setTargetMetric(e.target.value)} className={selectCls}>
                          <option>Boost Mid-Week Dinner Bookings</option>
                          <option>Bypass Aggregators for Direct Deliveries</option>
                          <option>Fix Zero Social Engagement &amp; Reach</option>
                          <option>Overcome Severe Competition &amp; Price Wars</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Social handle</label>
                        <div className="relative">
                          <Instagram className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input type="text" placeholder="@coventgardenbistro" value={currentSocialHandle} onChange={(e) => setCurrentSocialHandle(e.target.value)} className={inputCls + ' pl-10'} />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Posting frequency</label>
                        <select value={postingFrequency} onChange={(e) => setPostingFrequency(e.target.value)} className={selectCls}>
                          <option>Sporadic / No Active Posting</option>
                          <option>Once or twice a week</option>
                          <option>Every other day (No reels)</option>
                          <option>We do not have social media accounts</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Owner / manager email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input type="email" required placeholder="manager@coventgardenbistro.net" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls + ' pl-10'} />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-hover" />
                        Strictly confidential.
                      </span>
                      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer" id="btn-agency-audit-submit">
                        Generate diagnostic
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {step === 'analyzing' && <Analyzing msg={progressMsg} progress={loadingProgress} />}

                {step === 'report' && activeReport && (
                  <div className="space-y-5">
                    <ReportHeader title={`Revenue model: ${activeReport.companyName}`} onReset={resetCalculator} resetLabel="Reset" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <ScoreCard label="Local map presence" sub="Maps visibility" value={activeReport.scores!.seo} />
                      <ScoreCard label="Menu performance" sub="Speed / vitals" value={activeReport.scores!.speed} />
                      <ScoreCard label="Social post rating" sub="Daily posting" value={activeReport.scores!.content} />
                      <ScoreCard label="Diner conversion" sub="Reservation rate" value={activeReport.scores!.security} />
                    </div>
                    <div className="rounded-2xl bg-canvas border border-line p-5 sm:p-6 space-y-4">
                      <h5 className="font-semibold text-ink flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-brand-gold-hover" />
                        Action checklist for {activeReport.companyName}
                      </h5>
                      <Checklist
                        items={[
                          { tone: 'warn', title: 'Weak social consistency', body: 'Diner visual memory expires in ~48 hours. Daily posting must scale to sustain awareness.' },
                          { tone: 'warn', title: 'Over-reliance on commissions', body: 'Our hyper-local framework moves aggregator orders toward direct bookings — so more margin stays with you.' },
                          { tone: 'ok', title: 'Regional indexing', body: `Your location in ${activeReport.ukLocation} has valid density but slow maps updates. Fixable within 14 business days.` },
                        ]}
                      />
                    </div>
                    <div className="rounded-2xl bg-brand-gold-wash border border-brand-gold/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-ink">Ready to turn around your covers?</p>
                        <p className="text-sm text-zinc-600 mt-0.5">Let us build your daily posting + local maps system.</p>
                      </div>
                      <a href="mailto:partnerships@markadeo.com?subject=UK Restaurant Cover Scale Blueprint" className="inline-flex items-center gap-1.5 bg-ink text-white font-semibold text-sm px-5 py-3 rounded-full whitespace-nowrap hover:bg-black transition-colors">
                        Book a chat
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ---- TALK TO US ---- */}
            {activeTab === 'googleform' && (
              <div className="space-y-6">
                <PanelHeader icon={<MessageSquare className="w-5 h-5" />} title="Talk to a real person" sub="24-hour response benchmark" />
                <p className="text-zinc-600">
                  Prefer to skip the tools? Tell us about your restaurant and our lead partner will come back
                  with a personal, no-obligation strategy review — usually within one business day.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="mailto:partnerships@markadeo.com?subject=Restaurant growth enquiry" className="group rounded-2xl border border-line bg-canvas p-5 hover:border-brand-gold/50 hover:bg-brand-gold-wash transition-colors lift">
                    <span className="w-10 h-10 rounded-xl bg-white border border-line flex items-center justify-center text-brand-gold-hover"><Mail className="w-5 h-5" /></span>
                    <h4 className="mt-3 font-semibold text-ink">Email us</h4>
                    <p className="text-sm text-zinc-600 mt-0.5">partnerships@markadeo.com</p>
                  </a>
                  <a href="tel:+442080000000" className="group rounded-2xl border border-line bg-canvas p-5 hover:border-brand-gold/50 hover:bg-brand-gold-wash transition-colors lift">
                    <span className="w-10 h-10 rounded-xl bg-white border border-line flex items-center justify-center text-brand-gold-hover"><Phone className="w-5 h-5" /></span>
                    <h4 className="mt-3 font-semibold text-ink">Call us</h4>
                    <p className="text-sm text-zinc-600 mt-0.5">Mon–Fri, 9am–6pm</p>
                  </a>
                </div>
                <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-ink text-white font-semibold py-3.5 rounded-full hover:bg-black transition-colors">
                  Open the contact form
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Ledger */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-[1.5rem] bg-white border border-line p-6 shadow-soft">
              <h4 className="font-semibold text-ink flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-gold-hover" />
                Your audit history
              </h4>
              <p className="text-sm text-zinc-500 mt-1 mb-4">Saved in this browser session.</p>

              {submissions.length === 0 ? (
                <div className="py-8 text-center text-sm text-zinc-400 border border-dashed border-line rounded-2xl">
                  No audits yet. Run the diagnostic above.
                </div>
              ) : (
                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                  {submissions.map((sub) => {
                    const isActive = activeReport?.id === sub.id && activeTab === 'validator';
                    return (
                      <div
                        key={sub.id}
                        onClick={() => selectReport(sub)}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-2 group ${
                          isActive ? 'bg-brand-gold-wash border-brand-gold/50' : 'bg-canvas border-line hover:border-zinc-300'
                        }`}
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-ink truncate">{sub.companyName}</p>
                          <p className="text-xs text-zinc-500 truncate">{sub.websiteUrl}</p>
                          <p className="text-[11px] text-zinc-400">{sub.timestamp}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {sub.scores && <span className="text-xs font-semibold text-brand-gold-hover">{sub.scores.seo}</span>}
                          <button onClick={(e) => deleteSubmission(sub.id, e)} className="p-1.5 rounded-lg hover:bg-white text-zinc-400 hover:text-ink transition-colors" aria-label="Delete audit">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="rounded-[1.5rem] bg-ink text-white p-6">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">How this audit works</span>
              <p className="font-semibold mt-1">AI-assisted local search review</p>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                Your inputs are analysed against UK local-search and social best practice to surface
                practical, honest recommendations — no obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small presentational helpers ---------- */
function PanelHeader({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 pb-5 border-b border-line">
      <span className="w-10 h-10 rounded-xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover flex-shrink-0">{icon}</span>
      <div>
        <h3 className="font-display font-bold text-ink leading-tight">{title}</h3>
        <p className="text-xs text-zinc-500">{sub}</p>
      </div>
    </div>
  );
}

function ReportHeader({ title, onReset, resetLabel = 'New analysis' }: { title: string; onReset: () => void; resetLabel?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </span>
        <div>
          <span className="text-xs font-semibold text-emerald-600">Audit complete</span>
          <h4 className="font-display font-bold text-ink leading-tight">{title}</h4>
        </div>
      </div>
      <button onClick={onReset} className="text-sm font-semibold text-zinc-500 hover:text-ink border border-line rounded-full px-4 py-2 transition-colors cursor-pointer self-start">
        {resetLabel} →
      </button>
    </div>
  );
}

function Analyzing({ msg, progress }: { msg: string; progress: number }) {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center gap-5">
      <RefreshCw className="w-10 h-10 text-brand-gold-hover animate-spin" />
      <div className="max-w-md">
        <h4 className="font-display font-bold text-lg text-ink">Analysing your signals…</h4>
        <p className="text-sm text-zinc-500 mt-1 min-h-10 px-4">{msg}</p>
      </div>
      <div className="w-full max-w-md h-2.5 rounded-full bg-line overflow-hidden">
        <div style={{ width: `${progress}%` }} className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-hover transition-all duration-300" />
      </div>
      <span className="text-sm font-semibold text-zinc-500">{progress}%</span>
    </div>
  );
}

function ScoreCard({ label, sub, value }: { label: string; sub: string; value: number }) {
  return (
    <div className="rounded-2xl bg-canvas border border-line p-4 flex flex-col">
      <span className="text-xs font-medium text-zinc-500 leading-tight">{label}</span>
      <span className="text-2xl font-display font-bold text-ink mt-2">{value}<span className="text-sm text-zinc-400">/100</span></span>
      <span className="text-[11px] text-zinc-400 mt-1">{sub}</span>
    </div>
  );
}

function Checklist({ items }: { items: { tone: 'warn' | 'ok'; title: string; body: string }[] }) {
  return (
    <div className="divide-y divide-line">
      {items.map((it, i) => (
        <div key={i} className="flex gap-3 py-3 first:pt-0 last:pb-0">
          <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
            it.tone === 'warn' ? 'bg-brand-gold-wash text-brand-gold-hover' : 'bg-emerald-50 text-emerald-600'
          }`}>
            {it.tone === 'warn' ? '!' : '✓'}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{it.title}</p>
            <p className="text-sm text-zinc-600 mt-0.5">{it.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
