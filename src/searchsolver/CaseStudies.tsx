import { useState } from 'react';
import { caseStudiesData } from './caseStudiesData';
import { CaseStudy } from './types';
import { TrendingUp, Clock, FileCheck, CheckCircle2, Award, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CaseStudies({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const [activeTab, setActiveTab] = useState<string>(caseStudiesData[0].id);

  const selectedCase = caseStudiesData.find((c) => c.id === activeTab) || caseStudiesData[0];

  return (
    <section id="case-studies" className="py-24 bg-brand-dark relative border-b border-zinc-900">
      <div className="absolute inset-0 pointer-events-none red-ambient-glow filter blur-[150px] opacity-15 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="casestudies-main-container">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-[11px] font-mono tracking-widest text-[#E11D48] uppercase px-3.5 py-1.5 bg-brand-red/10 border border-[#E11D48]/30 rounded-none inline-block mb-3 font-bold">
              TRANSFORMATION ARCHIVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">
              REAL IMPACT. <span className="text-[#E11D48]">REAL OUTCOMES.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 font-light">
              We focus purely on the metrics that shift UK balance sheets. Deep dive into the mechanics of our search optimization blueprints.
            </p>
          </div>

          {/* Interactive Case study tab buttons */}
          <div className="flex flex-wrap gap-2" id="casestudies-tabs">
            {caseStudiesData.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`px-5 py-3 rounded-none text-xs font-display font-bold uppercase tracking-widest transition-all border ${
                  activeTab === cs.id
                    ? 'bg-brand-red text-white border-brand-red shadow-lg'
                    : 'bg-[#141414] text-zinc-400 border-white/5 hover:text-white hover:border-zinc-800'
                }`}
                id={`tab-casestudy-${cs.id}`}
              >
                {cs.clientName}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Detail Viewer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            id="casestudy-active-panel"
          >
            {/* Left Metrics Column */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#141414] border border-white/5 p-6 sm:p-8 rounded-none">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">PARTNER STATUS</span>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 bg-brand-red rounded-none"></span>
                    <h3 className="font-display font-black uppercase text-xl text-white">{selectedCase.clientName}</h3>
                  </div>
                  <p className="text-xs text-zinc-500 italic font-mono uppercase">Project Term: {selectedCase.duration}</p>
                </div>

                <hr className="border-white/5" />

                {/* Growth Highlights */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">KEY OUTCOMES</span>
                  
                  <div className="bg-brand-gray border border-white/5 p-4 rounded-none">
                    <p className="text-[10px] font-mono text-brand-red uppercase font-bold">Strategic Lift</p>
                    <p className="text-2xl font-display font-black text-white mt-1 uppercase">{selectedCase.growthMetric}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-brand-gray border border-white/5 p-3.5 rounded-none">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Traffic Gain</p>
                      <p className="text-sm font-bold text-white mt-1 font-mono">{selectedCase.organicTrafficGain}</p>
                    </div>
                    <div className="bg-brand-gray border border-white/5 p-3.5 rounded-none">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Revenue Source</p>
                      <p className="text-sm font-bold text-brand-red mt-1 font-mono">{selectedCase.revenueGenerated}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic visual graph mini component - Circle Timeline */}
              <div className="mt-8 pt-6 border-t border-white/5 bg-[#0D0D0D] p-5 border border-white/[0.03]">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">GROWTH MILESTONES</span>
                    <span className="text-[11px] font-mono text-[#E11D48] uppercase tracking-wider block mt-0.5">Search Acquisition Curve</span>
                  </div>
                  {/* Miniature pulse indicator */}
                  <div className="flex items-center gap-1.5 bg-[#E11D48]/10 border border-[#E11D48]/30 px-2 py-0.5 text-[8px] font-mono uppercase text-[#E11D48]">
                    <span className="w-1 h-1 bg-[#E11D48] rounded-none animate-ping" />
                    <span>Active Progression</span>
                  </div>
                </div>

                <div className="relative py-4 px-1">
                  {/* Connecting background Line */}
                  <div className="absolute left-6 right-6 h-[2px] bg-zinc-800/80 top-1/2 -translate-y-1/2" />
                  
                  {/* Active highlighted line */}
                  <motion.div 
                    className="absolute left-6 h-[2px] bg-gradient-to-r from-[#E11D48] to-[#F43F5E] top-1/2 -translate-y-1/2 origin-left z-0"
                    initial={{ width: "0%" }}
                    animate={{ width: "calc(100% - 48px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <div className="relative flex items-center justify-between w-full z-10">
                    {selectedCase.timeline.map((item, idx) => {
                      const isLast = idx === selectedCase.timeline.length - 1;
                      
                      return (
                        <div key={idx} className="flex flex-col items-center relative group">
                          {/* Value Flag / Tooltip on top */}
                          <div className="absolute bottom-full mb-3 flex flex-col items-center transition-all duration-300 transform group-hover:-translate-y-1 select-none">
                            <span className={`font-mono text-[9px] px-1.5 py-0.5 border font-bold ${
                              isLast 
                                ? 'bg-[#E11D48] text-white border-[#E11D48] shadow-[0_0_10px_rgba(225,29,72,0.3)]' 
                                : 'bg-[#18181B] text-zinc-300 border-white/5'
                            }`}>
                              {item.value >= 1000 ? `${(item.value / 1000).toFixed(0)}k` : item.value}
                            </span>
                            <div className={`w-1.5 h-1.5 rotate-45 border-r border-b -mt-1 ${
                              isLast ? 'bg-[#E11D48] border-[#E11D48]' : 'bg-[#18181B] border-r-white/5 border-b-white/5'
                            }`} />
                          </div>

                          {/* Interactive Circle Node */}
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold border transition-all duration-300 cursor-help ${
                              isLast
                                ? 'bg-[#E11D48] text-white border-[#E11D48] ring-4 ring-[#E11D48]/20 shadow-[0_0_15px_rgba(225,29,72,0.4)]'
                                : 'bg-brand-dark/95 text-zinc-400 border-zinc-700 hover:border-[#E11D48] hover:text-white'
                            }`}
                          >
                            {idx + 1}
                          </motion.div>

                          {/* Label bottom */}
                          <span className={`text-[8px] font-mono uppercase tracking-wider mt-3 font-semibold ${
                            isLast ? 'text-[#E11D48]' : 'text-zinc-500'
                          }`}>
                            {item.month.replace('Month ', 'M')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro info on selected node */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>STARTING: <strong className="text-zinc-300">{(selectedCase.timeline[0].value).toLocaleString()} views</strong></span>
                  <span>PEAK TARGET: <strong className="text-[#E11D48]">{(selectedCase.timeline[selectedCase.timeline.length - 1].value).toLocaleString()} views</strong></span>
                </div>
              </div>
            </div>

            {/* Right Information Narrative Column */}
            <div className="lg:col-span-8 bg-[#141414] border border-white/5 p-6 sm:p-8 rounded-none flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest block mb-1 font-bold">PROJECT SUMMARY</span>
                  <h4 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                    {selectedCase.title}
                  </h4>
                  <p className="font-sans text-sm text-zinc-400 mt-3 leading-relaxed font-light mb-5">
                    {selectedCase.summary}
                  </p>

                  {selectedCase.imageUrl && (
                    <div className="relative group overflow-hidden border border-white/5 aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0A] mb-4">
                      <img
                        src={selectedCase.imageUrl}
                        alt={selectedCase.imageAlt || `${selectedCase.clientName} Showcase`}
                        className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500 select-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-zinc-300 uppercase tracking-widest flex items-center gap-1.5 z-10 bg-black/50 px-2 py-1 border border-white/5">
                        <span className="w-1.5 h-1.5 bg-[#E11D48] rounded-none animate-pulse" />
                        Digital Transformation: {selectedCase.clientName}
                      </div>
                    </div>
                  )}
                </div>

                <hr className="border-white/5" />

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-red" />
                      <h5 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-300">The Challenge:</h5>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed bg-[#1E1E1E] p-4 rounded-none border border-white/5 font-light">
                      {selectedCase.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <h5 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-300">The Solution Blueprint:</h5>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed bg-[#1E1E1E] p-4 rounded-none border border-white/5 font-light">
                      {selectedCase.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action element */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs text-zinc-300 font-mono uppercase tracking-wide">Strategic action blueprint fully GDPR / UK Cookie compliant.</span>
                </div>
                <button
                  onClick={() => onOpenConsole('auditor')}
                  className="inline-flex items-center justify-center gap-1.5 border border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white px-5 py-3 uppercase text-xs font-bold tracking-widest transition-all rounded-none font-display cursor-pointer"
                  id={`btn-cs-action-${selectedCase.id}`}
                >
                  Consult on this case
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
