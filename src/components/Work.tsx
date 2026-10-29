"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import {
  Sparkles,
  ArrowRight,
  X,
  AlertCircle,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";

type Project = (typeof siteConfig.projects)[number];

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handleKeyDown]);

  return (
    <section id="work" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6363]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Proven projects built for real impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A selection of production workflows, AI systems, and modern web applications.
          </p>
        </div>

        {/* 6 Cards Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* 16:9 Banner Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#15151B] border-b border-white/[0.08]">
                    <Image
                      src={project.bannerImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category pill badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[11px] font-semibold text-white px-3 py-1 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md border border-white/10 shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#FFA8A8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Case Study Button */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/[0.04] hover:bg-white/[0.09] hover:border-[#FF6363]/40 border border-white/[0.08] rounded-xl transition-all duration-300 group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-4 h-4 text-[#FF6363] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.12] bg-[#111115] shadow-2xl z-10 p-6 sm:p-8 space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FF6363]/10 border border-[#FF6363]/25 text-[#FFA8A8] uppercase tracking-wider">
                  {selectedProject.category} · Case Study
                </span>
                <h3
                  id="modal-title"
                  className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Modal Banner Preview */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#15151B] border border-white/[0.08]">
                <Image
                  src={selectedProject.bannerImage}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover object-center"
                />
              </div>

              {/* Case Study Sections */}
              <div className="space-y-4 pt-2">
                {/* Problem */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FFA8A8] uppercase tracking-wider">
                    <Cpu className="w-4 h-4 text-[#FF6363]" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.caseStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Inquire CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">
                  Need a similar workflow or app?
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF6363] to-[#FF4B4B] px-4 py-2 rounded-xl shadow-[0_0_20px_-3px_rgba(255,99,99,0.5)] hover:scale-[1.02] transition-transform"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
