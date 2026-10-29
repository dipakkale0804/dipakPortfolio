"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import {
  Inbox,
  Cpu,
  FileSpreadsheet,
  BellRing,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Step durations in milliseconds for realistic automation simulation
const STEP_DURATIONS = [2000, 2400, 1800, 1600, 2600];

export function AutomationDemo() {
  const { title, subtitle, steps, totalTime } = siteConfig.automationDemo;
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  const iconMap: Record<string, React.ElementType> = {
    Inbox,
    Cpu,
    FileSpreadsheet,
    BellRing,
    CheckCircle2,
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATIONS[activeStep]);

    return () => clearTimeout(timer);
  }, [activeStep, isPlaying, steps.length]);

  // Elapsed time counter simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= 4.0) return 0.2;
        return +(prev + 0.1).toFixed(1);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleRestart = () => {
    setActiveStep(0);
    setElapsedTime(0.1);
    setIsPlaying(true);
  };

  return (
    <section id="demo" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6363]/10 border border-[#FF6363]/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFA8A8]">
              Live Automation Demo
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Animated Glass Workflow Studio */}
        <div className="relative rounded-3xl border border-white/[0.1] bg-[#111114]/80 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
          {/* Subtle background radial glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#FF6363]/10 blur-3xl pointer-events-none" />

          {/* Top Panel Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Active Lead Intake Pipeline
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-zinc-400 border border-white/[0.06]">
                v2.4 Production
              </span>
            </div>

            {/* Interactive Player Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-2">
                Execution:{" "}
                <span className="text-[#FFA8A8] font-bold">
                  {elapsedTime.toFixed(1)}s
                </span>{" "}
                / 4.0s
              </span>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
                aria-label={isPlaying ? "Pause automated demo" : "Play automated demo"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
                aria-label="Restart automated demo"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Grid: Steps on Left, Simulated Live Output on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Steps Timeline (5 steps) */}
            <div className="lg:col-span-5 space-y-3">
              {steps.map((step, idx) => {
                const IconComp = iconMap[step.icon] || CheckCircle2;
                const isCurrent = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 ${
                      isCurrent
                        ? "bg-[#181820] border-[#FF6363]/40 shadow-[0_0_20px_-3px_rgba(255,99,99,0.25)]"
                        : isPassed
                        ? "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:bg-white/[0.04]"
                        : "bg-transparent border-transparent text-zinc-500 hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Step Icon with checkmark or pulse */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-[#FF6363] text-white shadow-[0_0_15px_rgba(255,99,99,0.6)]"
                          : isPassed
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-white/[0.04] text-zinc-500 border border-white/[0.06]"
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <IconComp className="w-4 h-4" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-sm font-bold tracking-tight truncate ${
                            isCurrent
                              ? "text-white"
                              : isPassed
                              ? "text-zinc-200"
                              : "text-zinc-500"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulated Live Output Terminal / Canvas */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#0C0C0F] border border-white/[0.08] p-5 sm:p-6 min-h-[340px] relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-zinc-400 ml-2">pipeline-monitor.log</span>
                </div>
                <span className="text-emerald-400 text-[11px] flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Auto-validated
                </span>
              </div>

              {/* Dynamic Step View */}
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        1. INCOMING WEBHOOK PAYLOAD
                      </div>
                      <div className="p-4 rounded-xl bg-[#14141A] border border-white/[0.08] font-mono text-xs text-zinc-300 space-y-1.5">
                        <div className="text-emerald-400">POST /api/v1/inbound-lead</div>
                        <div className="text-zinc-400">{"{"}</div>
                        <div className="pl-4 text-zinc-300">
                          <span className="text-[#FFA8A8]">{'"name"'}</span>: {'"Alex Chen"'},
                        </div>
                        <div className="pl-4 text-zinc-300">
                          <span className="text-[#FFA8A8]">{'"company"'}</span>: {'"GrowthScale Inc (London, UK)"'},
                        </div>
                        <div className="pl-4 text-zinc-300">
                          <span className="text-[#FFA8A8]">{'"interest"'}</span>: {'"AI Chatbot + Web Scraping Dashboard"'},
                        </div>
                        <div className="pl-4 text-zinc-300">
                          <span className="text-[#FFA8A8]">{'"budgetTier"'}</span>: {'"$5k - $10k"'}
                        </div>
                        <div className="text-zinc-400">{"}"}</div>
                      </div>
                      <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Payload validated in 0.4s. Routing to AI Engine...
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                        <span>2. CONTEXTUAL AI PROPOSAL GENERATOR</span>
                        <span className="text-[#FF6363] text-[10px]">OpenAI GPT-4o</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#14141A] border border-[#FF6363]/30 text-xs text-zinc-200 space-y-2">
                        <div className="text-xs font-semibold text-[#FFA8A8] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
                          Tailored Draft Generated:
                        </div>
                        <p className="leading-relaxed text-zinc-300 italic">
                          &ldquo;Hi Alex, thanks for reaching out! Given GrowthScale&apos;s goal for an AI chatbot and scraping dashboard, we can implement a custom LangChain RAG pipeline with Streamlit export in under 2 weeks. Here is a preliminary architecture overview...&rdquo;
                        </p>
                        <div className="text-[10px] font-mono text-zinc-500 pt-1">
                          Tokens: 218 · Sentiment: High Urgency · Draft saved to queue
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        3. CRM SYNCHRONIZATION
                      </div>
                      <div className="overflow-x-auto">
                        <div className="min-w-[420px] rounded-xl bg-[#14141A] border border-white/[0.08] text-xs font-mono p-3">
                          <div className="grid grid-cols-4 gap-2 text-zinc-500 font-bold border-b border-white/[0.08] pb-2">
                            <span>LEAD NAME</span>
                            <span>COMPANY</span>
                            <span>QUALIFICATION</span>
                            <span>ACTION</span>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-zinc-200 pt-2 items-center">
                            <span className="font-semibold text-white">Alex Chen</span>
                            <span className="text-zinc-400">GrowthScale</span>
                            <span className="text-emerald-400 font-bold">96 / 100</span>
                            <span className="text-[#FFA8A8] text-[11px] bg-[#FF6363]/10 px-2 py-0.5 rounded border border-[#FF6363]/20">
                              Appended
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Row appended to CRM sheet without manual copy-pasting.
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        4. REAL-TIME OWNER ALERT
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-r from-[#171722] to-[#121217] border border-white/[0.1] shadow-lg flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-[#FF6363]/20 text-[#FFA8A8] border border-[#FF6363]/30 shrink-0">
                          <BellRing className="w-5 h-5 text-[#FF6363]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white">
                              ⚡ High Priority Lead: Alex Chen
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500">
                              Just now
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-1">
                            Inquiry from GrowthScale Inc · AI draft ready to send · Tap to review proposal.
                          </p>
                          <div className="mt-3 flex gap-2">
                            <span className="text-[11px] font-semibold text-white bg-[#FF6363] px-3 py-1 rounded-lg shadow-sm">
                              Approve &amp; Send
                            </span>
                            <span className="text-[11px] font-medium text-zinc-300 bg-white/[0.06] px-3 py-1 rounded-lg border border-white/[0.08]">
                              Open CRM
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeStep === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="text-center py-6 space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(39,201,63,0.3)]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {totalTime}
                        </h4>
                        <p className="text-sm text-zinc-400 max-w-sm mx-auto mt-1">
                          Zero manual overhead. While competitors take 6 hours to respond, your lead is already engaged.
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                        <span>Ready to build this for your brand?</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FF6363]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom progress track */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1.5">
                  <span>WORKFLOW STAGE {activeStep + 1} OF 5</span>
                  <span className="text-[#FFA8A8]">
                    {Math.round(((activeStep + 1) / steps.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#FF6363] to-[#FF8E8E]"
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
