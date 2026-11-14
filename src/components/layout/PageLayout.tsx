import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  badge?: string;
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  className?: string;
}

export function PageLayout({
  children,
  badge,
  title,
  subtitle,
  backHref = "/",
  backLabel = "Home",
  className,
}: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-section-bg text-[oklch(0.985_0.012_75)] flex flex-col selection:bg-ember/30 selection:text-white">
      {/* Ambient background glows and grid */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ambient top ember radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28rem] w-[54rem] -translate-y-1/2 rounded-full bg-ember/10 blur-[140px]" />

        {/* Floating background decorative orbs */}
        <div className="absolute -left-32 top-48 h-80 w-80 rounded-full bg-ember/6 blur-[100px]" />
        <div className="absolute -right-32 top-96 h-96 w-96 rounded-full bg-ember-mid/5 blur-[120px]" />
        <div className="absolute bottom-40 left-1/3 h-72 w-72 rounded-full bg-ember/5 blur-[100px]" />
      </div>

      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* Page Header Section */}
        <section className="relative px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[oklch(0.6_0.015_45)] mb-6 animate-rise">
              <Link
                to={backHref}
                className="hover:text-ember transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft className="h-3.5 w-3.5 text-ember" />
                <span>{backLabel}</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-[oklch(0.4_0.01_40)]" />
              <span className="text-ember font-bold">{title}</span>
            </div>

            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.15)] mb-4 animate-rise">
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-ping" />
                {badge}
              </div>
            )}

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white animate-rise [animation-delay:100ms]">
              <span className="bg-gradient-to-r from-white via-[oklch(0.95_0.01_60)] to-[oklch(0.85_0.02_50)] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-[oklch(0.75_0.015_50)] animate-rise [animation-delay:200ms]">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Page Content */}
        <section className={cn("px-6 pb-20 sm:px-8 lg:px-12", className)}>
          <div className="mx-auto max-w-7xl animate-rise [animation-delay:300ms]">{children}</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
