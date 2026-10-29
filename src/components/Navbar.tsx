"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      {/* Floating Pill Dock Navbar (Raycast style) */}
      <div
        className={`pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between ${
          scrolled
            ? "mt-3.5 sm:mt-4 mx-3 sm:mx-6 w-full max-w-4xl px-3.5 sm:px-5 py-2.5 rounded-2xl bg-[#0D0D10]/85 backdrop-blur-2xl border border-white/[0.1] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]"
            : "mt-0 mx-auto w-full max-w-6xl px-4 sm:px-6 py-5 bg-transparent border-transparent"
        }`}
      >
        {/* Left: Brand Monogram + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363] rounded-lg shrink-0"
          aria-label="Dipak Portfolio Home"
        >
          {/* Rounded glass square with monogram and coral glow */}
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#141418] border border-white/10 shadow-[0_0_18px_-2px_rgba(255,99,99,0.4)] transition-all duration-300 group-hover:border-[#FF6363]/60 group-hover:shadow-[0_0_24px_0_rgba(255,99,99,0.6)]">
            <span className="text-base sm:text-lg font-black tracking-tight bg-gradient-to-br from-white via-white to-[#FF8E8E] bg-clip-text text-transparent">
              {siteConfig.brand.monogram}
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#FF6363]/15 to-transparent pointer-events-none" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-white transition-colors">
              {siteConfig.brand.name}
            </span>
            {!scrolled && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            )}
          </div>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-1.5"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Status */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {scrolled && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 mr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          )}

          <Link
            href="#contact"
            className="relative group inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF6363] to-[#FF4B4B] rounded-xl shadow-[0_0_20px_-3px_rgba(255,99,99,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_0_rgba(255,99,99,0.7)] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span>Get in touch</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6363]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden pointer-events-auto absolute top-full left-3 right-3 mt-2 rounded-2xl border border-white/[0.1] bg-[#0D0D10]/95 backdrop-blur-2xl px-5 py-5 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-white/[0.08]">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#FF6363] to-[#FF4B4B] rounded-xl shadow-[0_0_20px_-3px_rgba(255,99,99,0.5)]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
