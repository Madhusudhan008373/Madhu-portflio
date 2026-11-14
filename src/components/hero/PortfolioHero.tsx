import { useEffect, useState } from "react";
import { ArrowUpRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import portrait from "@/assets/portrait.webp";

/*
 * Spacing follows an 8-point grid: only Tailwind steps that resolve to multiples of 8px
 * (2, 4, 6, 8, 10, 12, 16, 20, 24…) are used for padding, margin, gaps and sizes.
 */

const navItems = ["Work", "About", "Services", "Contact"];
const clients = [client2, client1, client4, client3];

function MenuButton({ className = "" }: { className?: string }) {
  return (
    <Button variant="menu" size="circle" aria-label="Open menu" className={className}>
      <span className="flex flex-col gap-1">
        <span className="block h-0.5 w-6 rounded-full bg-current" />
        <span className="block h-0.5 w-6 rounded-full bg-current" />
        <span className="block h-0.5 w-6 rounded-full bg-current" />
      </span>
    </Button>
  );
}

function Logo({ inverted }: { inverted: boolean }) {
  return (
    <a
      href="/"
      className={cn(
        "flex items-center gap-2 transition-colors duration-500",
        inverted ? "text-foreground" : "text-hero-foreground",
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/40 text-lg type-display">
        M
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">Madhusudhan</span>
    </a>
  );
}

/** Sticky, transparent navigation — gains a frosted backdrop only once the page scrolls. */
function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="flex h-24 items-center justify-between lg:h-auto lg:items-stretch">
        <div className="flex items-center px-6 sm:px-10 lg:h-24 lg:w-[55%] lg:px-16 xl:px-20">
          <Logo inverted={scrolled} />
        </div>
        <div className="flex items-center justify-end gap-8 px-6 sm:px-10 lg:mt-4 lg:h-24 lg:w-[45%] lg:px-12 xl:gap-12 xl:px-16">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-12">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group relative type-nav text-foreground/70 transition-colors duration-300 hover:text-foreground"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <MenuButton />
        </div>
      </div>
    </header>
  );
}

function EmberPanel() {
  return (
    <section className="relative z-20 flex flex-col px-6 pb-8 pt-24 text-hero-foreground sm:px-10 lg:h-svh lg:w-[55%] lg:px-16 lg:pb-16 lg:pt-24 xl:px-20">
      <div className="flex flex-1 flex-col justify-center py-16 lg:py-0">
        <h1 className="animate-rise type-display text-[5.5rem] text-hero-foreground sm:text-[7.5rem] lg:text-[clamp(7.5rem,11vw,9.375rem)]">
          Madhu
        </h1>
        <p className="mt-8 max-w-[320px] animate-rise text-lg leading-relaxed text-hero-muted [animation-delay:150ms] lg:text-xl">
          Designs that inspire.
          <br />
          Ideas that connect.
        </p>
        <div className="mt-12 animate-rise [animation-delay:300ms]">
          <Button variant="hero" size="pill" asChild>
            <a href="#work">
              View work
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-deep text-hero-foreground transition-transform duration-500 ease-out group-hover:rotate-45">
                <ArrowUpRight />
              </span>
            </a>
          </Button>
        </div>
      </div>

      <div className="hidden animate-rise [animation-delay:450ms] lg:block">
        <ClientAvatars />
      </div>
    </section>
  );
}

function ClientAvatars() {
  return (
    <div>
      <div className="flex -space-x-4">
        {clients.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Client ${i + 1}`}
            width={816}
            height={816}
            loading="lazy"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-hero-foreground/90"
          />
        ))}
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-hero-foreground/50 bg-ember-deep/20 text-sm font-semibold text-hero-foreground backdrop-blur-sm">
          +12
        </span>
      </div>
      <p className="mt-4 max-w-[256px] text-sm leading-relaxed text-hero-muted">
        Trusted by forward-thinking brands worldwide.
      </p>
    </div>
  );
}

function Portrait() {
  return (
    <div className="pointer-events-none relative z-10 mx-auto w-[92%] max-w-xl lg:absolute lg:bottom-0 lg:left-[52%] lg:w-auto lg:max-w-none lg:-translate-x-1/2">
      <div aria-hidden className="portrait-glow absolute inset-x-[10%] top-[5%] h-[70%] rounded-full" />
      <img
        src={portrait}
        alt="Portrait of Madhusudhan, UI/UX designer"
        width={1371}
        height={1324}
        className="portrait-shadow relative block h-auto w-full animate-rise [animation-delay:200ms] lg:h-[80svh] lg:w-auto"
      />
    </div>
  );
}

function WhitePanel() {
  return (
    <section className="relative flex flex-col rounded-t-[3rem] bg-background px-6 pb-8 pt-16 sm:px-10 lg:mt-4 lg:h-[calc(100svh-1rem)] lg:w-[45%] lg:rounded-tr-none lg:rounded-tl-[3rem] lg:px-12 lg:pb-16 lg:pt-32 xl:px-16">
      <div className="relative z-20 flex flex-1 flex-col justify-center pb-16 lg:items-end lg:pb-0">
        <div className="animate-rise [animation-delay:350ms] lg:w-56 xl:w-64">
          <p className="flex items-center gap-2 type-nav text-primary">
            Available for
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
          </p>
          <p className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground">
            Freelance
            <br />
            Projects
          </p>
        </div>
      </div>

      <div className="mb-12 lg:hidden">
        <ClientAvatarsLight />
      </div>

      <figure className="relative z-20 w-full animate-rise rounded-3xl bg-muted p-8 shadow-card [animation-delay:550ms] sm:max-w-xs lg:ml-auto">
        <Quote className="h-8 w-8 fill-primary text-primary" />
        <blockquote className="mt-4 text-sm font-medium leading-relaxed text-foreground">
          Madhusudhan delivered outstanding work that exceeded our expectations.
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="type-nav text-foreground">James Carter</p>
            <p className="mt-1 text-xs text-muted-foreground">Founder, Northwind</p>
          </div>
          <img
            src={client2}
            alt="James Carter"
            width={816}
            height={816}
            loading="lazy"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-primary"
          />
        </figcaption>
      </figure>
    </section>
  );
}

function ClientAvatarsLight() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-4">
        {clients.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Client ${i + 1}`}
            width={816}
            height={816}
            loading="lazy"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-background"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Trusted by brands worldwide</p>
    </div>
  );
}

export function PortfolioHero() {
  return (
    <>
      <SiteNav />
      <main className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ember-gradient lg:h-svh lg:flex-row">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="orb orb-fill -left-40 -top-40 h-[36rem] w-[36rem] animate-float" />
          <div className="orb orb-ring left-[18%] top-[-12%] h-[30rem] w-[30rem]" />
          <div className="orb orb-fill bottom-[-20%] left-[24%] h-[34rem] w-[34rem] animate-float-slow" />
        </div>
        <EmberPanel />
        <Portrait />
        <WhitePanel />
      </main>
    </>
  );
}
