"use client";

import { useState } from "react";
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
  stickyBottom?: boolean;
  items?: NavItem[];
  onSelect?: (index: number, item: NavItem) => void;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
  items = defaultNavItems,
  onSelect,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

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
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-card/90 dark:bg-card/90 backdrop-blur-lg border border-border dark:border-border rounded-full flex items-center p-1.5 shadow-2xl space-x-1 min-w-[320px] max-w-[95vw] h-[54px]",
        stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-40 w-fit",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-[42px] min-h-[40px] max-h-[44px]",
              isActive
                ? "bg-primary/15 text-primary gap-2 font-semibold shadow-xs"
                : "bg-transparent text-muted-foreground hover:bg-muted/70 hover:text-foreground",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
            )}
            onClick={() => handleClick(idx, item)}
            aria-label={item.label}
            type="button"
          >
            <Icon
              size={20}
              strokeWidth={2}
              aria-hidden
              className={cn(
                "transition-colors duration-200 shrink-0",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
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
                  "font-medium text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis text-[clamp(0.65rem,0.55rem+0.5vw,0.85rem)] leading-[1.8]",
                  isActive ? "text-primary" : "opacity-0",
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
  );
}

export default BottomNavBar;
