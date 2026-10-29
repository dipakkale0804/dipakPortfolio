"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  Send,
  CheckCircle2,
} from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { SpotlightCard } from "./SpotlightCard";

export function ContactCta() {
  const { cta, contact } = siteConfig;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI Automation",
    message: "",
  });

  const handleCopyEmail = () => {
    if (contact.email && !contact.email.includes("[EMAIL]")) {
      navigator.clipboard.writeText(contact.email);
    } else {
      navigator.clipboard.writeText("contact@dipak.dev");
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = contact.email.includes("[EMAIL]")
      ? "contact@dipak.dev"
      : contact.email;
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Dipak,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Overview:\n${formData.message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#FF6363]/15 via-orange-500/10 to-[#FF6363]/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SpotlightCard className="p-8 sm:p-14 lg:p-16 border-white/[0.12] bg-[#111115]/90">
          <div className="text-center max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6363]/10 border border-[#FF6363]/25 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6363] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFA8A8]">
                {contact.responseTime}
              </span>
            </div>

            {/* Big Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {cta.headline}
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal">
              {cta.subtext}
            </p>

            {/* Main Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Hire me on Fiverr (Primary, Coral Glow) */}
              <a
                href={contact.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#FF6363] to-[#FF4B4B] rounded-2xl shadow-[0_0_35px_-4px_rgba(255,99,99,0.55)] transition-all duration-300 hover:shadow-[0_0_45px_0_rgba(255,99,99,0.75)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
              >
                <span>{cta.primaryButton}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Connect on LinkedIn */}
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.18]"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>{cta.secondaryButton}</span>
              </a>

              {/* Email Me (mailto) */}
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.18]"
              >
                <Mail className="w-4 h-4 text-[#FF6363]" />
                <span>{cta.emailButton}</span>
              </a>
            </div>

            {/* Quick Email Copy & Note */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500 font-mono">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] text-zinc-400 hover:text-zinc-200 transition-colors border border-white/[0.06]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Project Inquiry Form */}
          <div className="mt-12 pt-10 border-t border-white/[0.08] max-w-xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Or send a quick project brief
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Chen"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6363] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6363] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Project Focus
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-zinc-200 focus:outline-none focus:border-[#FF6363] transition-colors"
                >
                  <option value="AI Automation" className="bg-[#111115]">
                    AI Automation (n8n, Python)
                  </option>
                  <option value="AI Chatbot" className="bg-[#111115]">
                    AI Chatbot (LangChain, OpenAI)
                  </option>
                  <option value="UI/UX Design" className="bg-[#111115]">
                    UI/UX Design (Figma, Prototyping)
                  </option>
                  <option value="Web Development" className="bg-[#111115]">
                    Web Development (Next.js, React)
                  </option>
                  <option value="Backend & APIs" className="bg-[#111115]">
                    Backend &amp; APIs (Spring Boot, Node.js)
                  </option>
                  <option value="Cloud Deployment" className="bg-[#111115]">
                    Cloud Deployment (Docker, AWS)
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Brief Overview of Your Goals
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me what you're looking to automate or build..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6363] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] hover:border-[#FF6363]/40 border border-white/[0.08] rounded-xl transition-all duration-300"
              >
                {formSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Mail Client Launched!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#FF6363]" />
                    <span>Launch Mail Client with Brief</span>
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-zinc-500 font-mono">
              {cta.pricingNote}
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
