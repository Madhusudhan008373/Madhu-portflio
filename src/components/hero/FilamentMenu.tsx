"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FilamentBulbIcon:
 * Complete Edison incandescent lightbulb featuring:
 * 1. The glass bulb envelope with ambient electric glow
 * 2. The 3 horizontal coiled filament springs (acting as the 3-line menu)
 * 3. The metallic screw socket holder at the bottom with authentic threaded ridges
 * 4. Supports `isLit` mode: incandescent bright gold/orange (#FFD700 / #FF9500) filaments & glass glow
 */
export function FilamentBulbIcon({
  isOpen,
  isLit = false,
  className,
}: {
  isOpen?: boolean;
  isLit?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-[40px] h-[54px] select-none",
        className,
      )}
    >
      <svg
        width="40"
        height="54"
        viewBox="0 0 34 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Intense Filament Incandescent Core Gradient (Unlit/Warm) */}
          <linearGradient id="filamentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="25%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ffedd5" />
          </linearGradient>

          {/* Lit Filament Intense Gold/Orange Gradient */}
          <linearGradient id="filamentGradientLit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9500" />
            <stop offset="22%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="78%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF9500" />
          </linearGradient>

          {/* Electric Glow Filter (Normal) */}
          <filter id="filamentGlow" x="-30%" y="-40%" width="160%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Electric Glow Filter (Intense Lit Bloom) */}
          <filter id="filamentGlowLit" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.0" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ambient Warm Glass Bulb Glow (Unlit) */}
          <radialGradient id="bulbAmberGlow" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#ea580c" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.02" />
          </radialGradient>

          {/* Ambient Bright Glass Bulb Glow (Illuminated Dark Theme) */}
          <radialGradient id="bulbAmberGlowLit" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.75" />
            <stop offset="38%" stopColor="#FF9500" stopOpacity="0.45" />
            <stop offset="72%" stopColor="#ea580c" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.04" />
          </radialGradient>

          {/* Metallic Screw Base Gradient */}
          <linearGradient id="metalScrewGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
        </defs>

        {/* 1. GLASS BULB ENVELOPE (Profile of Edison bulb) */}
        <path
          d="M 12 32 C 8.5 27, 4 21, 4 14 C 4 6.8, 9.8 1.5, 17 1.5 C 24.2 1.5, 30 6.8, 30 14 C 30 21, 25.5 27, 22 32 Z"
          fill={isLit ? "url(#bulbAmberGlowLit)" : "url(#bulbAmberGlow)"}
          stroke={isLit ? "rgba(255, 215, 0, 0.9)" : "rgba(217, 119, 6, 0.65)"}
          strokeWidth={isLit ? "1.6" : "1.3"}
        />

        {/* Glass Specular Reflection Highlight on Left Shoulder */}
        <path
          d="M 8 7 C 6 10, 6 15, 7 18"
          stroke="#ffffff"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeOpacity={isLit ? "0.6" : "0.45"}
        />

        {/* Central Vertical Support Stem */}
        <line
          x1="17"
          y1="7"
          x2="17"
          y2="28"
          stroke="#334155"
          strokeWidth="0.9"
          strokeOpacity="0.55"
        />

        {/* Support Lead Wires from Stem to Base */}
        <path d="M 11 25 L 14 32" stroke="#1e293b" strokeWidth="0.9" strokeOpacity="0.7" />
        <path d="M 23 25 L 20 32" stroke="#1e293b" strokeWidth="0.9" strokeOpacity="0.7" />

        {/* 2. THE 3 FILAMENT LINES (Solid black when unlit, bright warm yellow/orange when lit) */}
        {/* Top Coiled Line */}
        <motion.path
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          style={{
            originX: "17px",
            originY: "10px",
            filter: isLit
              ? "drop-shadow(0 0 4px #FFD700) drop-shadow(0 0 10px #FF9500)"
              : undefined,
          }}
          d="M 8 10 C 9.5 8.8, 10.5 11.2, 12 10 C 13.5 8.8, 14.5 11.2, 16 10 C 17.5 8.8, 18.5 11.2, 20 10 C 21.5 8.8, 22.5 11.2, 24 10 C 25 9.2, 25.5 10.8, 26 10"
          stroke={isLit ? "url(#filamentGradientLit)" : "#000000"}
          strokeWidth={isLit ? "2.4" : "2.2"}
          strokeLinecap="round"
          filter={isLit ? "url(#filamentGlowLit)" : undefined}
        />

        {/* Middle Coiled Line */}
        <motion.path
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          style={{
            filter: isLit
              ? "drop-shadow(0 0 4px #FFD700) drop-shadow(0 0 10px #FF9500)"
              : undefined,
          }}
          d="M 8 16 C 9.5 14.8, 10.5 17.2, 12 16 C 13.5 14.8, 14.5 17.2, 16 16 C 17.5 14.8, 18.5 17.2, 20 16 C 21.5 14.8, 22.5 17.2, 24 16 C 25 15.2, 25.5 16.8, 26 16"
          stroke={isLit ? "url(#filamentGradientLit)" : "#000000"}
          strokeWidth={isLit ? "2.4" : "2.2"}
          strokeLinecap="round"
          filter={isLit ? "url(#filamentGlowLit)" : undefined}
        />

        {/* Bottom Coiled Line */}
        <motion.path
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          style={{
            originX: "17px",
            originY: "22px",
            filter: isLit
              ? "drop-shadow(0 0 4px #FFD700) drop-shadow(0 0 10px #FF9500)"
              : undefined,
          }}
          d="M 8 22 C 9.5 20.8, 10.5 23.2, 12 22 C 13.5 20.8, 14.5 23.2, 16 22 C 17.5 20.8, 18.5 23.2, 20 22 C 21.5 20.8, 22.5 23.2, 24 22 C 25 21.2, 25.5 22.8, 26 22"
          stroke={isLit ? "url(#filamentGradientLit)" : "#000000"}
          strokeWidth={isLit ? "2.4" : "2.2"}
          strokeLinecap="round"
          filter={isLit ? "url(#filamentGlowLit)" : undefined}
        />

        {/* 3. METALLIC BULB HOLDER / SCREW BASE SOCKET AT BOTTOM */}
        {/* Metallic Base Collar */}
        <rect
          x="11.5"
          y="32"
          width="11"
          height="9.5"
          rx="1"
          fill="url(#metalScrewGradient)"
          stroke="#475569"
          strokeWidth="0.8"
        />

        {/* Threaded Screw Ridges on the base */}
        {/* Ridge 1 */}
        <path
          d="M 11 34.5 Q 17 35.5, 23 34.5"
          stroke={isLit ? "#FFD700" : "#f8fafc"}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeOpacity={isLit ? "0.9" : "1"}
        />
        <path
          d="M 11 35.2 Q 17 36.2, 23 35.2"
          stroke="#1e293b"
          strokeWidth="0.7"
          strokeLinecap="round"
        />

        {/* Ridge 2 */}
        <path
          d="M 11 37.5 Q 17 38.5, 23 37.5"
          stroke="#f8fafc"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M 11 38.2 Q 17 39.2, 23 38.2"
          stroke="#1e293b"
          strokeWidth="0.7"
          strokeLinecap="round"
        />

        {/* Ridge 3 */}
        <path
          d="M 11.5 40.5 Q 17 41.5, 22.5 40.5"
          stroke="#f8fafc"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* Black insulator foot & bottom electrical contact */}
        <path
          d="M 13.5 41.5 L 14.5 44.5 H 19.5 L 20.5 41.5 Z"
          fill="#1e293b"
          stroke="#0f172a"
          strokeWidth="0.5"
        />
        <ellipse cx="17" cy="44.5" rx="2" ry="0.8" fill="#475569" />
      </svg>
    </div>
  );
}

/**
 * FilamentDrawer:
 * Slide-over portfolio overview drawer featuring credentials, technical skills,
 * direct contact links, and smooth section jumps.
 */
export function FilamentDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
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
                  onClick={onClose}
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
                      <p className="text-[11px] text-slate-400">GVMC High School, Visakhapatnam</p>
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
                        <p className="text-[10px] uppercase font-bold text-slate-400">Call Phone</p>
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
                        <p className="text-[10px] uppercase font-bold text-slate-400">Send Email</p>
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
  );
}

/**
 * FilamentMenu:
 * Glowing 3-line incandescent bulb menu button positioned beside the top navigation bar.
 * In the hero navbar, it displays in its unlit black-filament state.
 * As the user scrolls down towards the second section, it smoothly fades out
 * as the hanging bulb in the About section takes over.
 */
export function FilamentMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [140, 260], [1, 0]);
  const pointerEvents = useTransform(scrollY, [140, 260], ["auto", "none"]);

  return (
    <>
      <motion.button
        style={{ opacity, pointerEvents }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open portfolio menu"
        aria-expanded={isOpen}
        className={cn(
          "group relative flex items-center justify-center p-0.5 bg-transparent border-0 outline-none cursor-pointer",
          "transition-transform duration-200 hover:scale-110 active:scale-95",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg shrink-0",
        )}
      >
        {/* Edison Light Bulb Icon with Unlit Black Filaments */}
        <FilamentBulbIcon isOpen={isOpen} isLit={false} />
      </motion.button>

      {/* PORTFOLIO SLIDE-OVER DRAWER & BACKDROP */}
      <FilamentDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default FilamentMenu;
