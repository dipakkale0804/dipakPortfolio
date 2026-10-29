"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import {
  ArrowRight,
  Search,
  Command,
  Sparkles,
  Bot,
  Globe,
  Cloud,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const commands = siteConfig.hero.commands;
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect cycling through commands
  useEffect(() => {
    const fullText = commands[currentCmdIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 400 : 2200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentCmdIndex((prev) => (prev + 1) % commands.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentCmdIndex, commands]);

  const commandItems = [
    {
      id: "ai-auto",
      title: "Automate lead follow-ups",
      category: "Workflow",
      icon: Sparkles,
      status: "n8n + OpenAI",
      time: "24/7 Autopilot",
    },
    {
      id: "ai-bot",
      title: "Build an AI support chatbot",
      category: "Chatbots",
      icon: Bot,
      status: "LangChain RAG",
      time: "Sub-second",
    },
    {
      id: "web-dev",
      title: "Launch a business website",
      category: "Frontend",
      icon: Globe,
      status: "Next.js + Tailwind",
      time: "100 SEO",
    },
    {
      id: "cloud-ops",
      title: "Deploy to AWS",
      category: "DevOps",
      icon: Cloud,
      status: "Docker + EC2",
      time: "99.9% Uptime",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-[#FF6363]/40 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6363] shadow-[0_0_8px_#FF6363]" />
            <span className="text-xs font-medium text-zinc-300">
              {siteConfig.hero.badge}
            </span>
          </motion.div>

          {/* Large Bold Tight Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08]"
          >
            Automate the boring.{" "}
            <span className="bg-gradient-to-r from-white via-[#FFA8A8] to-[#FF6363] bg-clip-text text-transparent">
              Build what matters.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#FF6363] to-[#FF4B4B] rounded-2xl shadow-[0_0_35px_-4px_rgba(255,99,99,0.55)] transition-all duration-300 hover:shadow-[0_0_45px_0_rgba(255,99,99,0.75)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
            >
              <span>{siteConfig.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.18]"
            >
              <span>{siteConfig.hero.secondaryCta}</span>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-zinc-500 font-medium"
          >
            {siteConfig.hero.trustLine.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  {item}
                </span>
                {idx < siteConfig.hero.trustLine.length - 1 && (
                  <span className="text-zinc-700">·</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Raycast-Inspired Floating Command Palette Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 w-full max-w-2xl"
          >
            <div className="relative group">
              {/* Soft radial glow under command palette */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FF6363]/25 to-orange-500/15 blur-2xl opacity-60 group-hover:opacity-85 transition duration-500" />

              {/* Glass Frame */}
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#111114]/90 backdrop-blur-2xl shadow-2xl overflow-hidden text-left">
                {/* Search Bar Input Row */}
                <div className="flex items-center gap-3 px-4 sm:px-5 py-4 border-b border-white/[0.08] bg-white/[0.02]">
                  <Search className="w-5 h-5 text-zinc-400 shrink-0" />
                  <div className="flex-1 flex items-center min-h-[28px] overflow-hidden">
                    <span className="text-sm sm:text-base text-zinc-100 font-medium tracking-tight">
                      {displayedText}
                    </span>
                    <span className="w-2 h-5 bg-[#FF6363] ml-1 animate-pulse" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] font-mono text-zinc-400">
                    <Command className="w-3 h-3" />
                    <span>K</span>
                  </div>
                </div>

                {/* Suggestions / Quick Actions list */}
                <div className="p-2 sm:p-3 space-y-1">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Actions &amp; Workflows</span>
                    <span className="text-zinc-600 font-mono text-[10px]">Ready to ship</span>
                  </div>

                  {commandItems.map((item, idx) => {
                    const isActive = currentCmdIndex === idx;
                    const IconComp = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-white/[0.08] border border-white/[0.12] text-white shadow-sm"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-1.5 rounded-lg ${
                              isActive
                                ? "bg-[#FF6363]/20 text-[#FFA8A8] border border-[#FF6363]/30"
                                : "bg-white/[0.04] text-zinc-400"
                            }`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs sm:text-sm font-medium truncate">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-mono">
                              {item.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400">
                            {item.time}
                          </span>
                          {isActive && (
                            <span className="flex items-center gap-1 text-[11px] font-mono text-[#FFA8A8] bg-[#FF6363]/10 px-2 py-0.5 rounded-md border border-[#FF6363]/20">
                              <span>↵ Run</span>
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-white/[0.015] text-[11px] text-zinc-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#FF6363]" />
                    <span>dipak-engine :: ready</span>
                  </span>
                  <span className="hidden sm:inline">Use ↑↓ to navigate · Esc to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
