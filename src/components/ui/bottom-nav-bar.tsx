"use client";

import { useState, useEffect } from "react";
import type { ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, GraduationCap, Zap, Award, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

export type NavItem = {
  label: string;
  icon: ElementType;
  href?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { label: "Home", icon: Home, href: "#" },
  { label: "About", icon: User, href: "#about" },
  { label: "Education", icon: GraduationCap, href: "#education" },
  { label: "Skills", icon: Zap, href: "#skills" },
  { label: "Strengths", icon: Award, href: "#strengths" },
  { label: "Contact", icon: Phone, href: "#contact" },
];

const MOBILE_LABEL_WIDTH = 76;

export type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  position?: "top-center" | "bottom-center";
  stickyBottom?: boolean; // legacy alias for position="bottom-center"
  autoHideAtTop?: boolean;
  scrollThreshold?: number;
  thresholdRatio?: number; // ratio of hero / viewport height (default: 0.5 for 50%)
  items?: NavItem[];
  onSelect?: (index: number, item: NavItem) => void;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  position = "top-center",
  stickyBottom,
  autoHideAtTop = true,
  scrollThreshold,
  thresholdRatio = 0.5,
  items = defaultNavItems,
  onSelect,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [isVisible, setIsVisible] = useState(!autoHideAtTop);

  // Normalize effective position (support legacy stickyBottom if explicitly set true)
  const effectivePosition = stickyBottom === true ? "bottom-center" : position;
  const isTopCenter = effectivePosition === "top-center";

  // Control visibility based on scroll position (appears once user scrolls past 50% of hero / viewport)
  useEffect(() => {
    if (!autoHideAtTop) {
      setIsVisible(true);
      return;
    }

    const checkVisibility = () => {
      let threshold: number;
      if (typeof scrollThreshold === "number") {
        threshold = scrollThreshold;
      } else {
        const heroEl = document.getElementById("hero") || document.querySelector("main");
        const baseHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
        threshold = baseHeight * thresholdRatio;
      }

      setIsVisible(window.scrollY > threshold);
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [autoHideAtTop, scrollThreshold, thresholdRatio]);

  // Sync active item with scroll position for in-page anchors
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      if (window.scrollY < 200) {
        setActiveIndex(0);
        return;
      }

      for (let i = items.length - 1; i >= 1; i--) {
        const href = items[i].href;
        if (href && href.startsWith("#") && href.length > 1) {
          const targetId = href.slice(1);
          const element = document.getElementById(targetId);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveIndex(i);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (idx: number, item: NavItem) => {
    setActiveIndex(idx);
    if (item.onClick) {
      item.onClick();
    }
    if (onSelect) {
      onSelect(idx, item);
    }
    if (item.href) {
      if (item.href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (item.href.startsWith("#")) {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = item.href;
        }
      } else {
        window.location.href = item.href;
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{
            y: isTopCenter ? -60 : 60,
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: isTopCenter ? -60 : 60,
            opacity: 0,
            scale: 0.95,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          role="navigation"
          aria-label="Floating Navigation Bar"
          className={cn(
            "rounded-full flex items-center p-1.5 space-x-0.5 max-w-[95vw] h-[52px]",
            "bg-[linear-gradient(135deg,#ffffff_0%,#fff2e6_18%,#fed7aa_38%,#fb923c_58%,#ea580c_82%,#9a3412_100%)]",
            "text-slate-900 backdrop-blur-md",
            "border-2 border-white/90",
            "shadow-[0_14px_40px_-6px_rgba(234,88,12,0.45),0_0_0_1.5px_rgba(234,88,12,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
            "transition-all duration-300 pointer-events-auto z-50",
            isTopCenter
              ? "fixed top-5 left-1/2 -translate-x-1/2 w-fit"
              : "fixed inset-x-0 bottom-5 mx-auto w-fit",
            className,
          )}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;

            return (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center gap-0 px-3 py-1.5 rounded-full transition-all duration-200 relative h-9 min-w-[38px] max-h-[40px]",
                  isActive
                    ? "bg-white text-orange-600 gap-1.5 font-bold shadow-[0_3px_10px_rgba(0,0,0,0.18)] border border-orange-400/80"
                    : "bg-transparent text-slate-900 hover:text-slate-950 hover:bg-white/70 font-semibold",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60",
                )}
                onClick={() => handleClick(idx, item)}
                aria-label={item.label}
                type="button"
              >
                <Icon
                  size={19}
                  strokeWidth={2.3}
                  aria-hidden
                  className={cn(
                    "transition-colors duration-200 shrink-0",
                    isActive ? "text-orange-600" : "text-slate-900",
                  )}
                />

                <motion.div
                  initial={false}
                  animate={{
                    width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                    opacity: isActive ? 1 : 0,
                    marginLeft: isActive ? "5px" : "0px",
                  }}
                  transition={{
                    width: { type: "spring", stiffness: 350, damping: 32 },
                    opacity: { duration: 0.18 },
                    marginLeft: { duration: 0.18 },
                  }}
                  className="overflow-hidden flex items-center max-w-[76px]"
                >
                  <span
                    className={cn(
                      "font-bold text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis leading-[1.8]",
                      isActive ? "text-orange-600" : "opacity-0",
                    )}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export { BottomNavBar as PillNavBar };
export default BottomNavBar;
