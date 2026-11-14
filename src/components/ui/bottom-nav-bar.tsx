"use client";

import { useState, useEffect, useRef } from "react";
import type { ElementType } from "react";
import { motion } from "framer-motion";
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
  const [isVisible, setIsVisible] = useState(() => {
    // Initialize visible if autoHideAtTop is disabled or already scrolled past threshold during SSR/hydration
    if (!autoHideAtTop) return true;
    if (typeof window !== "undefined") {
      const initialThreshold =
        typeof scrollThreshold === "number" ? scrollThreshold : window.innerHeight * thresholdRatio;
      return window.scrollY > initialThreshold;
    }
    return false;
  });

  // Track active index in a ref to prevent unnecessary state triggers in scroll listener
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  // Normalize effective position (support legacy stickyBottom if explicitly set true)
  const effectivePosition = stickyBottom === true ? "bottom-center" : position;
  const isTopCenter = effectivePosition === "top-center";

  // Control visibility based on scroll position (appears once user scrolls past 50% of hero / viewport)
  useEffect(() => {
    if (!autoHideAtTop) {
      setIsVisible(true);
      return;
    }

    // Cache threshold calculation to avoid forcing synchronous layout reflow on every scroll event
    let cachedThreshold = 0;
    const calculateThreshold = () => {
      if (typeof scrollThreshold === "number") {
        cachedThreshold = scrollThreshold;
      } else {
        const heroEl = document.getElementById("hero") || document.querySelector("main");
        const baseHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
        cachedThreshold = baseHeight * thresholdRatio;
      }
    };

    calculateThreshold();

    let ticking = false;
    const checkVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Apply hysteresis deadband (40px) to prevent rapid toggling near threshold boundary
          setIsVisible((prev) => {
            if (scrollY > cachedThreshold) {
              return true;
            }
            if (scrollY < Math.max(0, cachedThreshold - 40)) {
              return false;
            }
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener(
      "resize",
      () => {
        calculateThreshold();
        checkVisibility();
      },
      { passive: true },
    );

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [autoHideAtTop, scrollThreshold, thresholdRatio]);

  // Sync active item with scroll position for in-page anchors
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200;
          if (window.scrollY < 200) {
            if (activeIndexRef.current !== 0) {
              setActiveIndex(0);
            }
            ticking = false;
            return;
          }

          for (let i = items.length - 1; i >= 1; i--) {
            const href = items[i].href;
            if (href && href.startsWith("#") && href.length > 1) {
              const targetId = href.slice(1);
              const element = document.getElementById(targetId);
              if (element && element.offsetTop <= scrollPosition) {
                if (activeIndexRef.current !== i) {
                  setActiveIndex(i);
                }
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
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
        }
        // Update browser URL hash without causing full router re-mounting
        window.history.pushState(null, "", item.href);
      } else {
        window.location.href = item.href;
      }
    }
  };

  return (
    // Fixed centering container (uses inset-x-0 mx-auto instead of translate-x-1/2 to avoid transform conflicts with Framer Motion)
    <div
      className={cn(
        "fixed z-50 pointer-events-none inset-x-0 mx-auto w-fit flex justify-center",
        isTopCenter ? "top-5" : "bottom-5",
        className,
      )}
    >
      <motion.nav
        initial={false}
        animate={{
          y: isVisible ? 0 : isTopCenter ? -65 : 65,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.96,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
        role="navigation"
        aria-label="Floating Navigation Bar"
        className={cn(
          "rounded-full flex items-center p-1.5 space-x-0.5 max-w-[95vw] h-[52px]",
          "bg-[linear-gradient(135deg,#ffffff_0%,#fff2e6_18%,#fed7aa_38%,#fb923c_58%,#ea580c_82%,#9a3412_100%)]",
          "text-slate-900 backdrop-blur-md",
          "border-2 border-white/90",
          "shadow-[0_14px_40px_-6px_rgba(234,88,12,0.45),0_0_0_1.5px_rgba(234,88,12,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
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
                "flex items-center gap-0 px-3 py-1.5 rounded-full transition-colors duration-200 relative h-9 min-w-[38px] max-h-[40px]",
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
                  "transition-colors duration-150 shrink-0",
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
                  width: { duration: 0.22, ease: "easeInOut" },
                  opacity: { duration: 0.16 },
                  marginLeft: { duration: 0.22, ease: "easeInOut" },
                }}
                className="overflow-hidden flex items-center shrink-0"
              >
                <span
                  className={cn(
                    "font-bold text-xs whitespace-nowrap select-none overflow-hidden text-ellipsis leading-[1.8]",
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
    </div>
  );
}

export { BottomNavBar as PillNavBar };
export default BottomNavBar;
