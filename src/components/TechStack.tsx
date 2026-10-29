"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import {
  Coffee,
  Binary,
  Code,
  FileCode2,
  Database,
  Layers,
  Server,
  Component,
  Radio,
  RefreshCw,
  Workflow,
  Sparkles,
  Box,
  Cloud,
  Terminal,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { motion } from "framer-motion";

export function TechStack() {
  const { techStack } = siteConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, React.ElementType> = {
    Coffee,
    Binary,
    Code,
    FileCode2,
    Database,
    Layers,
    Server,
    Component,
    Radio,
    RefreshCw,
    Workflow,
    Sparkles,
    Box,
    Cloud,
    Terminal,
  };

  const categories = [
    "All",
    "Languages",
    "Frameworks & Backend",
    "AI & Automation",
    "Cloud & DevOps",
  ];

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Tooling &amp; Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Modern technologies built for production.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A battle-tested stack spanning AI automation, resilient backend engines, and cloud architecture.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-[#FF6363] text-white border-[#FF6363] shadow-[0_0_20px_-3px_rgba(255,99,99,0.5)]"
                  : "bg-white/[0.03] text-zinc-400 border-white/[0.06] hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid (15 items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredTech.map((tech, idx) => {
            const IconComp = iconMap[tech.iconName] || Terminal;
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
              >
                <SpotlightCard className="p-4 sm:p-5 h-full flex flex-col justify-between group hover:border-[#FF6363]/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-[#FFA8A8] group-hover:bg-[#FF6363]/10 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#FF6363] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#FFA8A8] transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5 truncate">
                      {tech.level}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
