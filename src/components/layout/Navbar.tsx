import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Phone, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Strengths", href: "/strengths" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#090d16]/90 border-b border-cyan-500/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 transition-transform hover:scale-102">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-display text-xl font-bold transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.45)]">
            M
          </span>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              CH Madhusudhan
            </span>
            <span className="text-[11px] font-medium tracking-wider text-cyan-400/80 uppercase">
              EEE • Electrical
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2 rounded-full border border-cyan-500/20 bg-[#0d1424]/70 px-4 py-1.5 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 block",
                      isActive
                        ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)] font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Contact CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:from-cyan-400 hover:to-cyan-300"
          >
            <Link to="/contact">
              <span>Contact</span>
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-[#0d1424]/80 text-cyan-300 shadow-sm transition-all hover:bg-cyan-500/10 hover:border-cyan-400 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="border-b border-cyan-500/20 bg-[#090e1a]/95 px-6 py-6 shadow-2xl backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all",
                    isActive
                      ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)] font-bold"
                      : "text-slate-200 hover:bg-white/5 hover:text-cyan-300",
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <Zap className="h-4 w-4 fill-current" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-slate-800 pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              Direct Inquiries
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:6302657026"
                className="flex items-center gap-3 rounded-lg bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 text-xs text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+91 6302657026</span>
              </a>
              <a
                href="mailto:chitadamadhusudhan@gmail.com"
                className="flex items-center gap-3 rounded-lg bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 text-xs text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="truncate">chitadamadhusudhan@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
