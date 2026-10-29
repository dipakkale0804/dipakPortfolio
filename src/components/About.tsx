"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Sparkles, Globe2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function About() {
  const { brand, about } = siteConfig;

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SpotlightCard className="p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Monogram / Faceless Brand Identity */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  About the Developer
                </span>
              </div>

              {/* Monogram emblem box */}
              <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-[#14141A] border border-white/10 shadow-[0_0_40px_-5px_rgba(255,99,99,0.35)]">
                <span className="text-5xl font-black bg-gradient-to-br from-white via-white to-[#FFA8A8] bg-clip-text text-transparent">
                  {brand.monogram}
                </span>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FF6363]/15 to-transparent pointer-events-none" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {brand.name}
                </h3>
                <p className="text-sm font-mono text-[#FFA8A8] mt-1">
                  {brand.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2 font-mono">
                  <Globe2 className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{brand.location}</span>
                </div>
              </div>
            </div>

            {/* Right Story and Principles */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                &ldquo;{about.headline}&rdquo;
              </h4>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                {about.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08]">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                  >
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
