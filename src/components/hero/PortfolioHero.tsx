import { ArrowUpRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const navItems = ["Work", "About", "Services", "Journal", "Contact"];
const clients = [client1, client2, client3, client4];

function MenuButton({ className = "" }: { className?: string }) {
  return (
    <Button variant="menu" size="circle" aria-label="Open menu" className={className}>
      <span className="flex flex-col items-end gap-1.5">
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-3 rounded-full bg-current transition-all duration-300 group-hover:w-5" />
      </span>
    </Button>
  );
}

function EmberPanel() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ember-gradient px-6 pb-10 pt-8 text-hero-foreground sm:px-10 lg:h-svh lg:w-[55%] lg:px-16 lg:pb-14 lg:pt-12 xl:px-20">
      {/* Abstract shapes */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="orb orb-glow -left-32 -top-32 h-[34rem] w-[34rem] animate-float" />
        <div className="orb orb-fill -right-40 top-[18%] h-[30rem] w-[30rem] animate-float-slow" />
        <div className="orb orb-ring -right-24 top-[8%] h-[38rem] w-[38rem]" />
        <div className="orb orb-ring -right-4 top-[22%] h-[22rem] w-[22rem]" />
        <div className="orb orb-fill -bottom-48 left-[30%] h-[26rem] w-[26rem] animate-float" />
      </div>

      {/* Brand row */}
      <header className="flex items-center justify-between">
        <a href="/" className="font-display text-lg font-bold tracking-tight">
          Aria Vance<sup className="ml-0.5 text-xs font-medium opacity-70">®</sup>
        </a>
        <span className="hidden text-xs font-medium uppercase tracking-[0.3em] opacity-70 sm:block lg:hidden xl:block">
          Portfolio — 2026
        </span>
        <MenuButton className="lg:hidden" />
      </header>

      {/* Headline */}
      <div className="flex flex-1 flex-col justify-center py-16 lg:py-0">
        <p className="mb-8 flex animate-rise items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] opacity-80">
          <span className="h-px w-10 bg-current" />
          UI/UX & Product Designer
        </p>
        <h1 className="animate-rise font-display text-[clamp(3.5rem,8.6vw,10rem)] font-extrabold leading-[0.9] tracking-[-0.045em] [animation-delay:120ms]">
          Design
          <br />
          that feels
          <br />
          <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.02em]">
            effortless.
          </span>
        </h1>
        <p className="mt-10 max-w-md animate-rise text-base leading-relaxed opacity-80 [animation-delay:240ms] sm:text-lg">
          I craft calm, purposeful digital products for ambitious brands — where every pixel earns
          its place.
        </p>
        <div className="mt-10 animate-rise [animation-delay:360ms]">
          <Button variant="hero" size="pill" asChild>
            <a href="#work">
              View selected work
              <span className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-ember-deep text-hero-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight />
              </span>
            </a>
          </Button>
        </div>
      </div>

      {/* Clients */}
      <div className="flex animate-rise flex-wrap items-center gap-5 [animation-delay:480ms]">
        <div className="flex -space-x-3">
          {clients.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Client ${i + 1}`}
              width={816}
              height={816}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-ember-deep"
            />
          ))}
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-hero-foreground text-xs font-bold text-ember-deep ring-2 ring-ember-deep">
            +80
          </span>
        </div>
        <div>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
            <span className="ml-2 text-sm font-semibold">4.9</span>
          </div>
          <p className="mt-1 text-sm opacity-75">Trusted by 120+ founders & teams</p>
        </div>
      </div>
    </section>
  );
}

function WhitePanel() {
  return (
    <section className="relative flex flex-col bg-background px-6 pb-10 pt-12 sm:px-10 lg:h-svh lg:w-[45%] lg:px-14 lg:pb-14 lg:pt-12 xl:px-16">
      {/* Top navigation */}
      <header className="hidden items-center justify-between gap-6 lg:flex">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 xl:gap-8">
            {navItems.map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="mr-1 text-[10px] text-primary">0{i + 1}</span>
                  {item}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <MenuButton />
      </header>

      {/* Availability */}
      <div className="flex flex-1 flex-col justify-center lg:pl-2">
        <div className="max-w-sm animate-rise [animation-delay:300ms]">
          <div className="inline-flex items-center gap-3 rounded-full border border-border px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-available" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-available" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Available for work
            </span>
          </div>
          <p className="mt-8 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground xl:text-4xl">
            Booking new projects from{" "}
            <span className="font-serif font-normal italic text-primary">January 2027.</span>
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Based in Lisbon, working with teams worldwide on product strategy, interface design
            and design systems.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</dt>
              <dd className="mt-2 font-display text-3xl font-bold text-foreground">9 yrs</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</dt>
              <dd className="mt-2 font-display text-3xl font-bold text-foreground">140+</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-12 flex items-end justify-between gap-6 lg:mt-0">
        <div className="hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground sm:flex">
          <span className="h-10 w-px bg-border" />
          Scroll
        </div>

        <figure className="ml-auto w-full max-w-xs animate-rise rounded-3xl border border-border bg-card p-6 shadow-card [animation-delay:600ms]">
          <div className="flex items-center gap-0.5 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">
            “Aria turned a messy product into something our users genuinely love. Calm, sharp and
            incredibly thoughtful.”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            <img
              src={client3}
              alt="Priya Nair"
              width={816}
              height={816}
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">Priya Nair</p>
              <p className="text-xs text-muted-foreground">Head of Product, Lumen</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function PortfolioHero() {
  return (
    <main className="flex min-h-svh flex-col lg:h-svh lg:flex-row lg:overflow-hidden">
      <EmberPanel />
      <WhitePanel />
    </main>
  );
}
