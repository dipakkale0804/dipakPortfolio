"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Zap, Code2, MessageSquareCheck, TrendingUp } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { motion } from "framer-motion";

export function Principles() {
  const iconMap: Record<string, React.ElementType> = {
    Zap,
    Code2,
    MessageSquareCheck,
    TrendingUp,
  };

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.principles.map((principle, idx) => {
            const IconComp = iconMap[principle.icon] || Zap;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FFA8A8] mb-5 group-hover:bg-[#FF6363]/10 group-hover:border-[#FF6363]/30 transition-all duration-300">
                      <IconComp className="w-5 h-5 text-[#FF6363]" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white mb-2 flex items-center gap-1.5">
                      <span>{principle.title}.</span>
                    </h3>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                    <span>STANDARD 0{idx + 1}</span>
                    <span className="text-[#FF6363] opacity-0 group-hover:opacity-100 transition-opacity">
                      Active
                    </span>
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
