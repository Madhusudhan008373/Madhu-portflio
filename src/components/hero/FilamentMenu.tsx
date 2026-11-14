"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Zap,
  Award,
  User,
  ArrowRight,
  X,
  FileText,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FilamentBulbIcon:
 * Recreates the 3 glowing coiled filaments from an incandescent light bulb
 * as a high-tech glowing 3-line hamburger menu icon.
 */
export function FilamentBulbIcon({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-8 h-8 select-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Intense Filament Incandescent Core Gradient */}
          <linearGradient id="filamentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="25%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>

          {/* Electric Glow Filter */}
          <filter id="filamentGlow" x="-30%" y="-40%" width="160%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Warm Bulb Halo */}
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="url(#bulbAmbient)"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <radialGradient id="bulbAmbient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#ea580c" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>

        {/* Vertical Central Glass/Support Stem */}
        <line
          x1="16"
          y1="6"
          x2="16"
          y2="26"
          stroke="#fed7aa"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />

        {/* Support Brackets from Stem to Coils */}
        <line
          x1="16"
          y1="10"
          x2="11"
          y2="10"
          stroke="#f97316"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
        <line
          x1="16"
          y1="10"
          x2="21"
          y2="10"
          stroke="#f97316"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
        <line
          x1="16"
          y1="16"
          x2="11"
          y2="16"
          stroke="#f97316"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
        <line
          x1="16"
          y1="16"
          x2="21"
          y2="16"
          stroke="#f97316"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
        <line
          x1="16"
          y1="22"
          x2="11"
          y2="22"
          stroke="#f97316"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />
        <line
          x1="16"
          y1="22"
          x2="21"
          y2="22"
          stroke="#f97316"
          strokeWidth="0.6"
          strokeOpacity="0.6"
        />

        {/* 1. TOP GLOWING COILED FILAMENT LINE */}
        <motion.path
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          style={{ originX: "16px", originY: "10px" }}
          d="M 6 10 C 7.5 8.8, 8.5 11.2, 10 10 C 11.5 8.8, 12.5 11.2, 14 10 C 15.5 8.8, 16.5 11.2, 18 10 C 19.5 8.8, 20.5 11.2, 22 10 C 23.5 8.8, 24.5 11.2, 26 10"
          stroke="url(#filamentGradient)"
          strokeWidth="1.9"
          strokeLinecap="round"
          filter="url(#filamentGlow)"
        />

        {/* 2. MIDDLE GLOWING COILED FILAMENT LINE */}
        <motion.path
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          d="M 6 16 C 7.5 14.8, 8.5 17.2, 10 16 C 11.5 14.8, 12.5 17.2, 14 16 C 15.5 14.8, 16.5 17.2, 18 16 C 19.5 14.8, 20.5 17.2, 22 16 C 23.5 14.8, 24.5 17.2, 26 16"
          stroke="url(#filamentGradient)"
          strokeWidth="1.9"
          strokeLinecap="round"
          filter="url(#filamentGlow)"
        />

        {/* 3. BOTTOM GLOWING COILED FILAMENT LINE */}
        <motion.path
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          style={{ originX: "16px", originY: "22px" }}
          d="M 6 22 C 7.5 20.8, 8.5 23.2, 10 22 C 11.5 20.8, 12.5 23.2, 14 22 C 15.5 20.8, 16.5 23.2, 18 22 C 19.5 20.8, 20.5 23.2, 22 22 C 23.5 20.8, 24.5 23.2, 26 22"
          stroke="url(#filamentGradient)"
          strokeWidth="1.9"
          strokeLinecap="round"
          filter="url(#filamentGlow)"
        />
      </svg>
    </div>
  );
}

/**
 * FilamentMenu:
 * Glowing 3-line incandescent bulb menu button positioned beside the top navigation bar.
 * Opens an interactive portfolio hub drawer detailing CH Madhusudhan's credentials,
 * contact options, technical skills, and quick navigation.
 */
export function FilamentMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* GLOWING FILAMENT BULB 3-LINE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open portfolio menu"
        aria-expanded={isOpen}
        className={cn(
          "group relative flex items-center justify-center h-11 w-11 rounded-full",
          "bg-gradient-to-b from-stone-900 to-stone-950 text-white",
          "border border-amber-500/50 hover:border-amber-400",
          "shadow-[0_0_16px_rgba(245,158,11,0.35),0_2px_8px_rgba(0,0,0,0.5)]",
          "hover:shadow-[0_0_26px_rgba(245,158,11,0.65),0_0_10px_rgba(255,237,213,0.8)]",
          "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0",
        )}
      >
        {/* Ambient Glow Aura Behind the Button */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/25 to-yellow-400/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity"
        />

        {/* 3 Glowing Filament Coils Icon */}
        <FilamentBulbIcon isOpen={isOpen} />
      </button>

      {/* PORTFOLIO SLIDE-OVER DRAWER & BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-stone-950/75 backdrop-blur-md"
            />

            {/* Slide-in Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label="Portfolio Overview Menu"
              className={cn(
                "relative z-10 w-full max-w-md h-full overflow-y-auto",
                "bg-[oklch(0.12_0.025_40)] border-l border-amber-500/30",
                "text-slate-100 shadow-[0_0_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 flex flex-col justify-between",
              )}
            >
              {/* DRAWER HEADER */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-[0_0_18px_rgba(245,158,11,0.4)]">
                      <Lightbulb size={22} className="animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-lg text-white tracking-tight leading-tight">
                        CH Madhusudhan
                      </h3>
                      <p className="text-xs font-semibold text-amber-400/90 font-mono">
                        Diploma in EEE · Student Portfolio
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* SECTION 1: QUICK NAVIGATION JUMPS */}
                <div className="py-6 border-b border-amber-500/15">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Quick Navigation
                  </span>
                  <nav className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      { label: "About Profile", href: "#about", icon: User },
                      { label: "Education & SSC", href: "#education", icon: GraduationCap },
                      { label: "Technical Skills", href: "#skills", icon: Zap },
                      { label: "Core Strengths", href: "#strengths", icon: Award },
                      { label: "Contact Details", href: "#contact", icon: Phone },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item.href)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-amber-500/15 hover:border-amber-500/40 border border-transparent text-left text-xs font-semibold text-slate-200 transition-all group"
                        >
                          <Icon
                            size={15}
                            className="text-amber-400 group-hover:scale-110 transition-transform"
                          />
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* SECTION 2: ACADEMIC & TECHNICAL HIGHLIGHTS */}
                <div className="py-6 border-b border-amber-500/15 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Academic & Technical Credentials
                  </span>
                  <div className="rounded-2xl bg-stone-900/80 border border-stone-800 p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                        <GraduationCap size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Diploma in EEE (Pursuing)</h4>
                        <p className="text-[11px] text-slate-400">
                          Govt. Polytechnic College, Pendurthi
                        </p>
                        <p className="text-[10px] text-amber-400/90 font-mono mt-0.5">
                          PIN: 24637-EE-008 · Batch 2024–2027
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2 border-t border-stone-800">
                      <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                        <Award size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">SSC (10th Standard) · 86%</h4>
                        <p className="text-[11px] text-slate-400">
                          GVMC High School, Visakhapatnam
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      "Electrical Safety",
                      "Motor Basics (AC/DC)",
                      "PLC Basics",
                      "Wiring & Circuits",
                      "Practical Workshop",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[10px] font-medium border border-amber-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SECTION 3: DIRECT CONTACT ACTIONS */}
                <div className="py-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Get in Touch Directly
                  </span>
                  <div className="space-y-2">
                    <a
                      href="tel:6302657026"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 text-slate-200 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">
                            Call Phone
                          </p>
                          <p className="text-xs font-mono font-bold text-white">+91 6302657026</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-400" />
                    </a>

                    <a
                      href="mailto:chitadamadhusudhan@gmail.com"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 text-slate-200 transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                          <Mail size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase font-bold text-slate-400">
                            Send Email
                          </p>
                          <p className="text-xs font-mono font-bold text-white truncate">
                            chitadamadhusudhan@gmail.com
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-400 shrink-0" />
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                      <div className="p-2 rounded-lg bg-stone-800 text-slate-400 shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Location</p>
                        <p className="text-xs font-medium text-slate-300">
                          Vizianagaram, Kothavalasa, Veerabhadrapuram
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DRAWER FOOTER */}
              <div className="pt-6 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
                <span>CH Madhusudhan · 2026</span>
                <button
                  onClick={() => handleNavClick("#hero")}
                  className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
                >
                  Back to Top ↑
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilamentMenu;
