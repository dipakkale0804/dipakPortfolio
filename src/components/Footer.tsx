"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import { ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon, FiverrIcon } from "./Icons";

export function Footer() {
  const { brand, contact } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0A0B]/90 backdrop-blur-xl py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            {/* Monogram */}
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#141418] border border-white/10 shadow-[0_0_15px_-3px_rgba(255,99,99,0.3)]">
              <span className="text-base font-black bg-gradient-to-br from-white via-white to-[#FFA8A8] bg-clip-text text-transparent">
                {brand.monogram}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight">
                {brand.name}
              </span>
              <span className="text-xs text-zinc-400">
                AI Automation &amp; Web Development
              </span>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <a
              href={contact.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FiverrIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fiverr</span>
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Email</span>
              <Mail className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          {/* Right Scroll To Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-500 font-mono">
              © 2026 {brand.name}. All rights reserved.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
