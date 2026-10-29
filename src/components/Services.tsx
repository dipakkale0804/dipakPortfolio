"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import {
  Workflow,
  Bot,
  Palette,
  Globe,
  Layers,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

export function Services() {
  const { services } = siteConfig;
  const [activeTab, setActiveTab] = useState(services[0].id);

  const iconMap: Record<string, React.ElementType> = {
    "ai-automation": Workflow,
    "ai-chatbots": Bot,
    "ui-ux": Palette,
    "web-dev": Globe,
    "backend-apis": Layers,
    deployment: Cloud,
  };

  const currentService = services.find((s) => s.id === activeTab) || services[0];
  const CurrentIcon = iconMap[currentService.id] || Workflow;

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Specialized solutions for growing teams.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            From automated background workflows to full-stack systems built for scale.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
          <div className="flex p-1.5 rounded-2xl bg-[#131317] border border-white/[0.08] backdrop-blur-xl">
            {services.map((service) => {
              const IconComp = iconMap[service.id] || Workflow;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(service.id)}
                  className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363] ${
                    isActive
                      ? "text-white shadow-[0_0_20px_-3px_rgba(255,99,99,0.35)]"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#FF6363] to-[#FF4B4B] rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <IconComp className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-400"}`} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <SpotlightCard className="p-8 sm:p-12 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF6363]/10 border border-[#FF6363]/25 text-xs font-semibold text-[#FFA8A8]">
                    {currentService.highlightTag}
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#FF6363]">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <span>{currentService.title}</span>
                  </h3>

                  <p className="text-base text-zinc-300 leading-relaxed font-normal">
                    {currentService.shortDesc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] px-5 py-2.5 rounded-xl border border-white/[0.1] hover:border-[#FF6363]/40 transition-all duration-300 group"
                    >
                      <span>Inquire about {currentService.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#FF6363] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Outcomes Bullet List */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Key Outcomes &amp; Deliverables
                  </div>

                  {currentService.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#FF6363]/15 text-[#FF6363] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
