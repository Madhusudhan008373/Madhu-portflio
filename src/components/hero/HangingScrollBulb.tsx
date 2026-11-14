"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FilamentDrawer } from "./FilamentMenu";
import { cn } from "@/lib/utils";

/**
 * HangingPendantBulbIcon:
 * Upside-down hanging Edison pendant luminaire:
 * - Threaded metallic socket base at the TOP with wire strain-relief terminals
 * - Teardrop glass bulb envelope hanging DOWNWARD below the socket
 * - 3 coiled incandescent horizontal filament lines inside the glass
 * - Unlit state: dark charcoal filaments & unlit amber glass
 * - Lit state: bright incandescent gold/orange (#FFD700 / #FF9500) filaments,
 *   intense electric bloom filter & warm glowing glass interior
 */
export function HangingPendantBulbIcon({
  isOpen,
  isLit,
  className,
}: {
  isOpen?: boolean;
  isLit: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-[72px] h-[100px] select-none",
        className,
      )}
    >
      <svg
        width="72"
        height="100"
        viewBox="0 0 72 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Intense Lit Filament Incandescent Core Gradient */}
          <linearGradient id="pendantFilamentGradientLit" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9500" />
            <stop offset="20%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF9500" />
          </linearGradient>

          {/* Electric Glow Bloom Filter for Filaments */}
          <filter id="pendantFilamentGlowLit" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="5.0" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Lit Glass Interior Radial Glow */}
          <radialGradient id="pendantBulbAmberGlowLit" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.80" />
            <stop offset="35%" stopColor="#FF9500" stopOpacity="0.48" />
            <stop offset="70%" stopColor="#ea580c" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.04" />
          </radialGradient>

          {/* Unlit Glass Interior Radial Glow */}
          <radialGradient id="pendantBulbAmberGlowUnlit" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.30" />
            <stop offset="60%" stopColor="#ea580c" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.02" />
          </radialGradient>

          {/* Metallic Top Socket Collar Gradient */}
          <linearGradient id="pendantMetalSocketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="25%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="75%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          {/* Brass Accent Gradient for Wire Terminals */}
          <linearGradient id="pendantBrassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>

        {/* 1. TOP METALLIC SOCKET HOLDER & WIRE ENTRY TERMINALS */}
        {/* Wire entry cable gland nuts at top */}
        <rect
          x="26.5"
          y="0"
          width="4"
          height="3.5"
          rx="1"
          fill="url(#pendantBrassGradient)"
          stroke="#451a03"
          strokeWidth="0.5"
        />
        <rect
          x="41.5"
          y="0"
          width="4"
          height="3.5"
          rx="1"
          fill="url(#pendantBrassGradient)"
          stroke="#451a03"
          strokeWidth="0.5"
        />

        {/* Metallic Base Collar Housing */}
        <rect
          x="25"
          y="3"
          width="22"
          height="18"
          rx="1.5"
          fill="url(#pendantMetalSocketGradient)"
          stroke="#475569"
          strokeWidth="1"
        />

        {/* Screw thread ridges on socket */}
        {/* Thread Ridge 1 */}
        <path
          d="M 25 7 Q 36 8.5, 47 7"
          stroke={isLit ? "#FFD700" : "#f8fafc"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity={isLit ? "0.95" : "0.9"}
        />
        <path
          d="M 25 8.2 Q 36 9.7, 47 8.2"
          stroke="#0f172a"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Thread Ridge 2 */}
        <path
          d="M 25 12 Q 36 13.5, 47 12"
          stroke="#f8fafc"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M 25 13.2 Q 36 14.7, 47 13.2"
          stroke="#0f172a"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Thread Ridge 3 */}
        <path
          d="M 25.5 17 Q 36 18.5, 46.5 17"
          stroke="#f8fafc"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Insulator ring connecting socket to glass */}
        <rect x="26.5" y="19" width="19" height="3" fill="#0f172a" />

        {/* 2. TEARDROP GLASS BULB ENVELOPE (Hangs DOWNWARD below socket) */}
        <path
          d="M 27 22 C 27 30, 10 44, 10 65 C 10 82, 21.6 96, 36 96 C 50.4 96, 62 82, 62 65 C 62 44, 45 30, 45 22 Z"
          fill={isLit ? "url(#pendantBulbAmberGlowLit)" : "url(#pendantBulbAmberGlowUnlit)"}
          stroke={isLit ? "rgba(255, 215, 0, 0.95)" : "rgba(217, 119, 6, 0.65)"}
          strokeWidth={isLit ? "2.2" : "1.6"}
          className="transition-colors duration-700"
        />

        {/* Glass Specular Curved Highlight on Left Shoulder */}
        <path
          d="M 16 55 C 14 62, 16 75, 22 84"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity={isLit ? "0.65" : "0.40"}
        />

        {/* Central Vertical Glass Support Stem */}
        <line
          x1="36"
          y1="22"
          x2="36"
          y2="52"
          stroke="#334155"
          strokeWidth="1.4"
          strokeOpacity="0.65"
        />

        {/* Internal Lead Wires extending to filaments */}
        <path d="M 32 22 L 23 46" stroke="#1e293b" strokeWidth="1.2" strokeOpacity="0.75" />
        <path d="M 40 22 L 49 46" stroke="#1e293b" strokeWidth="1.2" strokeOpacity="0.75" />

        {/* 3. THE 3 COILED FILAMENT LINES (ACT AS HAMBURGER MENU / ILLUMINATED COILS) */}
        {/* Filament 1 (Top) */}
        <motion.path
          animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          style={{
            originX: "36px",
            originY: "46px",
            filter: isLit
              ? "drop-shadow(0 0 6px #FFD700) drop-shadow(0 0 14px #FF9500)"
              : undefined,
          }}
          d="M 21 46 C 24 43.5, 27 48.5, 30 46 C 33 43.5, 36 48.5, 39 46 C 42 43.5, 45 48.5, 48 46 C 50 44, 51 46, 51 46"
          stroke={isLit ? "url(#pendantFilamentGradientLit)" : "#18181b"}
          strokeWidth={isLit ? "3.2" : "2.8"}
          strokeLinecap="round"
          filter={isLit ? "url(#pendantFilamentGlowLit)" : undefined}
          className="transition-colors duration-500"
        />

        {/* Filament 2 (Middle) */}
        <motion.path
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          style={{
            filter: isLit
              ? "drop-shadow(0 0 6px #FFD700) drop-shadow(0 0 14px #FF9500)"
              : undefined,
          }}
          d="M 21 58 C 24 55.5, 27 60.5, 30 58 C 33 55.5, 36 60.5, 39 58 C 42 55.5, 45 60.5, 48 58 C 50 56, 51 58, 51 58"
          stroke={isLit ? "url(#pendantFilamentGradientLit)" : "#18181b"}
          strokeWidth={isLit ? "3.2" : "2.8"}
          strokeLinecap="round"
          filter={isLit ? "url(#pendantFilamentGlowLit)" : undefined}
          className="transition-colors duration-500"
        />

        {/* Filament 3 (Bottom) */}
        <motion.path
          animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 24 }}
          style={{
            originX: "36px",
            originY: "70px",
            filter: isLit
              ? "drop-shadow(0 0 6px #FFD700) drop-shadow(0 0 14px #FF9500)"
              : undefined,
          }}
          d="M 21 70 C 24 67.5, 27 72.5, 30 70 C 33 67.5, 36 72.5, 39 70 C 42 67.5, 45 72.5, 48 70 C 50 68, 51 70, 51 70"
          stroke={isLit ? "url(#pendantFilamentGradientLit)" : "#18181b"}
          strokeWidth={isLit ? "3.2" : "2.8"}
          strokeLinecap="round"
          filter={isLit ? "url(#pendantFilamentGlowLit)" : undefined}
          className="transition-colors duration-500"
        />
      </svg>
    </div>
  );
}

/**
 * HangingScrollBulb:
 * Immersive scroll-driven animation for the Edison pendant luminaire:
 *
 * 1. Bulb Origin & Drop-Down Effect:
 *    - Prominent, large lightbulb drops down from the top edge into the 2nd section (top-right corner).
 *    - Hangs downward / upside-down suspended by two vertical braided cables.
 *
 * 2. Darkness Transition & Glow Illumination:
 *    - Starts dim/dark as it falls into the dark section.
 *    - Settles with authentic spring physics & gentle pendulum sway, then brightly ignites with
 *      glowing filaments and a warm radiating ambient halo.
 *
 * 3. Reveal Content with Light:
 *    - Notifies parent section via `onLitChange` to illuminate and reveal the section text and cards
 *      from darkness into full warmth.
 */
export function HangingScrollBulb({
  className,
  onLitChange,
}: {
  className?: string;
  onLitChange?: (isLit: boolean) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropped, setIsDropped] = useState(false);
  const [isLit, setIsLit] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Measure scroll progress relative to the parent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 160px"],
  });

  // Scroll triggers: drops at 0.40 on scroll down, retracts below 0.28 on scroll up
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.4 && !isDropped) {
      setIsDropped(true);
    } else if (latest < 0.28 && isDropped) {
      setIsDropped(false);
    }
  });

  // Delay illumination slightly until after the bulb drops and settles into place
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDropped) {
      // Bulb falls dark, then brightly ignites once settled
      timer = setTimeout(() => {
        setIsLit(true);
        onLitChange?.(true);
      }, 350);
    } else {
      setIsLit(false);
      onLitChange?.(false);
    }
    return () => clearTimeout(timer);
  }, [isDropped, onLitChange]);

  // Initial scroll check on mount (for deep-linking, page reload, or anchor jumps)
  useEffect(() => {
    const handleCheckScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.72) {
        setIsDropped(true);
      } else {
        setIsDropped(false);
      }
    };
    handleCheckScroll();
    window.addEventListener("scroll", handleCheckScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleCheckScroll);
  }, []);

  return (
    <>
      {/* Scroll Trigger Anchor at top of section */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-10 -z-10"
      />

      {/* Pinned Ceiling Suspension Assembly in Top-Right Corner */}
      <div
        className={cn(
          "absolute top-0 right-4 sm:right-10 lg:right-16 xl:right-24 z-30 select-none",
          className,
        )}
      >
        {/* CEILING ROSETTE / INDUSTRIAL MOUNTING CANOPY BRACKET */}
        <div className="relative flex flex-col items-center">
          <div className="relative flex items-center justify-center w-14 h-3.5 rounded-b-md bg-gradient-to-b from-stone-600 via-stone-800 to-stone-950 border-x border-b border-amber-500/40 shadow-[0_4px_16px_rgba(0,0,0,0.9)] z-20">
            {/* Cable Strain Relief Hex Bushings */}
            <div className="absolute -bottom-1 flex justify-between w-[24px] px-0.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 shadow-[0_0_6px_rgba(245,158,11,0.7)]" />
              <span className="w-2 h-2 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 shadow-[0_0_6px_rgba(245,158,11,0.7)]" />
            </div>
          </div>

          {/* PENDULUM SWAY WRAPPER: Sways with authentic physics from ceiling pivot (origin: top center) */}
          <motion.div
            style={{ transformOrigin: "top center" }}
            animate={
              isLit
                ? {
                    rotate: [0, -6.5, 5.2, -3.2, 1.6, -0.6, 0],
                    transition: {
                      duration: 3.2,
                      ease: "easeOut",
                    },
                  }
                : { rotate: 0, transition: { duration: 0.3 } }
            }
            className="relative flex flex-col items-center"
          >
            {/* TWO VERTICAL SUSPENSION CABLES: Anchored to ceiling and entering the top socket of the bulb */}
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: isDropped ? 135 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 65,
                damping: 10,
                mass: 1.2,
              }}
              className="relative w-[24px] overflow-visible"
            >
              {/* Left Vertical Suspension Cable */}
              <div
                className="absolute left-[3px] top-0 bottom-0 w-[2px] transition-all duration-700"
                style={{
                  background: isLit
                    ? "linear-gradient(to bottom, #64748b 0%, #d97706 60%, #fbbf24 100%)"
                    : "linear-gradient(to bottom, #475569 0%, #334155 100%)",
                  boxShadow: isLit ? "0 0 8px rgba(245, 158, 11, 0.55)" : "none",
                }}
              />

              {/* Right Vertical Suspension Cable */}
              <div
                className="absolute right-[3px] top-0 bottom-0 w-[2px] transition-all duration-700"
                style={{
                  background: isLit
                    ? "linear-gradient(to bottom, #64748b 0%, #d97706 60%, #fbbf24 100%)"
                    : "linear-gradient(to bottom, #475569 0%, #334155 100%)",
                  boxShadow: isLit ? "0 0 8px rgba(245, 158, 11, 0.55)" : "none",
                }}
              />
            </motion.div>

            {/* THE SUSPENDED PROMINENT EDISON PENDANT BULB (Hangs downward below socket) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isDropped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="relative -mt-0.5 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsMenuOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Open portfolio overview menu (Hanging Edison Bulb)"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsMenuOpen(true);
                }
              }}
            >
              {/* PRIMARY AMBIENT RADIAL LIGHT GLOW: Radiating outward onto the surrounding dark background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isLit
                    ? {
                        opacity: [0.85, 1, 0.88, 0.98, 1],
                        scale: [0.98, 1.04, 0.99, 1.02, 1],
                      }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={
                  isLit
                    ? {
                        opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                      }
                    : { duration: 0.3 }
                }
                className="pointer-events-none absolute -inset-36 sm:-inset-48 -z-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 215, 0, 0.52) 0%, rgba(255, 149, 0, 0.28) 32%, rgba(234, 88, 12, 0.10) 58%, transparent 74%)",
                  filter: "blur(32px)",
                }}
              />

              {/* SECONDARY ATMOSPHERIC CORNER GLOW: Illuminating the upper-right room background */}
              <motion.div
                animate={{ opacity: isLit ? 1 : 0 }}
                transition={{ duration: 0.9 }}
                className="pointer-events-none absolute -top-28 -right-20 w-[420px] h-[420px] -z-20 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(234, 88, 12, 0.08) 45%, transparent 72%)",
                  filter: "blur(50px)",
                }}
              />

              {/* Prominent Upside-Down Edison Pendant Bulb */}
              <div className="transition-transform duration-200 group-hover:scale-108 active:scale-95">
                <HangingPendantBulbIcon isOpen={isMenuOpen} isLit={isLit} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* PORTFOLIO SLIDE-OVER DRAWER (Shared with Navbar) */}
      <FilamentDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default HangingScrollBulb;
