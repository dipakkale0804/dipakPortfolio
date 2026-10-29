"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { Sparkles, Quote } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function Testimonials() {
  const { testimonials } = siteConfig;

  // Hidden behind config flag per instructions until real client reviews are added
  if (!testimonials.showTestimonials || testimonials.items.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Trusted by founders and engineering teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.items.map((item) => (
            <SpotlightCard key={item.id} className="p-6 flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 text-[#FF6363] mb-4 opacity-70" />
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-white">{item.clientName}</div>
                <div className="text-xs text-zinc-400">
                  {item.clientTitle} · {item.company} ({item.country})
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
