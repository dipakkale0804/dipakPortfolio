"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Sparkles, Check } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { motion } from "framer-motion";

export function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              How I Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            A frictionless, transparent process.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            From initial requirements to post-launch handover with zero guesswork.
          </p>
        </div>

        {/* 4 Steps Container with Animated Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Gradient Line */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 -translate-y-12 bg-gradient-to-r from-[#FF6363]/40 via-orange-500/30 to-[#FF6363]/40 -z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    {/* Step Number and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#171720] border border-white/[0.1] flex items-center justify-center font-mono text-xs font-bold text-[#FFA8A8] group-hover:border-[#FF6363]/40 group-hover:bg-[#FF6363]/10 transition-colors">
                        {item.step}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Stage 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white mb-2.5 group-hover:text-[#FFA8A8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Deliverables pill */}
                  <div className="pt-4 mt-6 border-t border-white/[0.06]">
                    <div className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#FF6363] shrink-0 mt-0.5" />
                      <span className="text-[11px] font-mono text-zinc-400">
                        {item.deliverables}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
