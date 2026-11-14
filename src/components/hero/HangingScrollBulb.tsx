"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FilamentBulbIcon, FilamentDrawer } from "./FilamentMenu";
import { cn } from "@/lib/utils";

/**
 * HangingScrollBulb:
 * Interactive scroll-driven transition for the Edison lightbulb icon.
 *
 * 1. Scroll Drop & Hanging Wires:
 *    As the user scrolls down from the hero into the second "About" section (dark theme),
 *    the lightbulb drops down from the ceiling of the second section, suspended by two thin vertical
 *    wires that extend down to the metallic socket base collar.
 *    Settles with authentic spring bounce physics and gentle pendulum sway.
 *
 * 2. Dark Theme Illumination:
 *    On entering the dark section, the 3 filament coils light up bright warm yellow/orange (#FFD700 / #FF9500),
 *    and a warm radial ambient light halo radiates outward, illuminating the dark top-right corner.
 *
 * 3. Reverse on Scroll Up:
 *    Scrolling back up to the first hero section smoothly retracts the wires and pulls the bulb back up,
 *    returning the focus to the unlit bulb in the top navbar.
 */
export function HangingScrollBulb({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropped, setIsDropped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Measure scroll progress relative to the parent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 180px"],
  });

  // Hysteresis scroll trigger: drops at 0.45 on the way down, retracts below 0.30 on scroll up
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.45 && !isDropped) {
      setIsDropped(true);
    } else if (latest < 0.3 && isDropped) {
      setIsDropped(false);
    }
  });

  // Check initial scroll on mount (for deep-linking, refresh, or anchor jumps)
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
          "absolute top-0 right-6 sm:right-12 lg:right-20 xl:right-28 z-30 select-none",
          className,
        )}
      >
        {/* CEILING ROSETTE / MOUNTING CANOPY BRACKET */}
        <div className="relative flex flex-col items-center">
          <div className="relative flex items-center justify-center w-9 h-2.5 rounded-b-md bg-gradient-to-b from-stone-600 via-stone-800 to-stone-950 border-x border-b border-amber-500/40 shadow-[0_2px_10px_rgba(0,0,0,0.8)] z-20">
            {/* Cable Exit Grommets / Strain Reliefs */}
            <div className="absolute -bottom-0.5 flex justify-between w-4 px-0.5">
              <span className="w-1 h-1 rounded-full bg-amber-500/80 shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
              <span className="w-1 h-1 rounded-full bg-amber-500/80 shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
            </div>
          </div>

          {/* PENDULUM SWAY WRAPPER: Sways with natural physics from ceiling pivot (origin: top center) */}
          <motion.div
            style={{ transformOrigin: "top center" }}
            animate={
              isDropped
                ? {
                    rotate: [0, -7.5, 6.0, -3.8, 2.0, -0.8, 0],
                    transition: {
                      duration: 3.0,
                      ease: "easeOut",
                      delay: 0.15,
                    },
                  }
                : { rotate: 0, transition: { duration: 0.4 } }
            }
            className="relative flex flex-col items-center"
          >
            {/* TWO VERTICAL SUSPENSION WIRES: Extend from top edge down to the bulb's socket base collar */}
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: isDropped ? 120 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 11,
                mass: 1.1,
              }}
              className="relative w-4 overflow-visible"
            >
              {/* Left Vertical Wire */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[1.5px] transition-all duration-700"
                style={{
                  background: isDropped
                    ? "linear-gradient(to bottom, #64748b 0%, #d97706 65%, #fbbf24 100%)"
                    : "linear-gradient(to bottom, #475569 0%, #334155 100%)",
                  boxShadow: isDropped ? "0 0 6px rgba(245, 158, 11, 0.45)" : "none",
                }}
              />

              {/* Right Vertical Wire */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[1.5px] transition-all duration-700"
                style={{
                  background: isDropped
                    ? "linear-gradient(to bottom, #64748b 0%, #d97706 65%, #fbbf24 100%)"
                    : "linear-gradient(to bottom, #475569 0%, #334155 100%)",
                  boxShadow: isDropped ? "0 0 6px rgba(245, 158, 11, 0.45)" : "none",
                }}
              />
            </motion.div>

            {/* THE SUSPENDED EDISON BULB: Drops into place & illuminates */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isDropped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35 }}
              className="relative -mt-1 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsMenuOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Open portfolio menu (Hanging Edison Bulb)"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsMenuOpen(true);
                }
              }}
            >
              {/* AMBIENT RADIAL LIGHT GLOW: Radiating outward onto the dark background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isDropped
                    ? {
                        opacity: [0.85, 1, 0.88, 0.96, 1],
                        scale: [0.97, 1.03, 0.98, 1.02, 1],
                      }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={
                  isDropped
                    ? {
                        opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                      }
                    : { duration: 0.3 }
                }
                className="pointer-events-none absolute -inset-28 sm:-inset-40 -z-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 215, 0, 0.45) 0%, rgba(255, 149, 0, 0.25) 32%, rgba(234, 88, 12, 0.1) 56%, transparent 74%)",
                  filter: "blur(26px)",
                }}
              />

              {/* SECONDARY ATMOSPHERIC CORNER GLOW: Warms up the entire upper-right quadrant */}
              <motion.div
                animate={{ opacity: isDropped ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute -top-24 -right-16 w-80 h-80 -z-20 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(234, 88, 12, 0.06) 45%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Edison Bulb with Illuminated Gold/Orange Filaments */}
              <div className="transition-transform duration-200 group-hover:scale-110 active:scale-95">
                <FilamentBulbIcon isOpen={isMenuOpen} isLit={isDropped} />
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
