import { ArrowUpRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import portrait from "@/assets/portrait.webp";

const navItems = ["Work", "About", "Services", "Contact"];
const clients = [client2, client1, client4, client3];

function MenuButton({ className = "" }: { className?: string }) {
  return (
    <Button variant="menu" size="circle" aria-label="Open menu" className={className}>
      <span className="flex flex-col gap-1.5">
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
      </span>
    </Button>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 text-hero-foreground">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hero-foreground/40 font-poster text-lg">
        M
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">Madhusudhan</span>
    </a>
  );
}

function EmberPanel() {
  return (
    <section className="relative z-20 flex flex-col px-6 pb-6 pt-8 text-hero-foreground sm:px-10 lg:h-svh lg:w-[55%] lg:px-16 lg:pb-12 lg:pt-10 xl:px-20">
      <header className="flex items-center justify-between">
        <Logo />
        <MenuButton className="lg:hidden" />
      </header>

      <div className="flex flex-1 flex-col justify-center pb-10 pt-16 lg:py-0">
        <h1 className="animate-rise font-poster text-[clamp(6rem,13vw,12.5rem)] uppercase leading-[0.85] tracking-tight">
          Create
        </h1>
        <p className="mt-6 animate-rise text-xl leading-snug opacity-90 [animation-delay:150ms] sm:text-2xl">
          Designs that inspire.
          <br />
          Ideas that connect.
        </p>
        <div className="mt-10 animate-rise [animation-delay:300ms]">
          <Button variant="hero" size="pill" asChild>
            <a href="#work">
              View work
              <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
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
      <div className="flex -space-x-3">
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
      <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-hero-foreground/85">
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
        className="portrait-shadow relative block h-auto w-full animate-rise [animation-delay:200ms] lg:h-[82svh] lg:w-auto"
      />
    </div>
  );
}

function WhitePanel() {
  return (
    <section className="relative flex flex-col rounded-t-[2.5rem] bg-background px-6 pb-8 pt-10 sm:px-10 lg:mt-3 lg:h-[calc(100svh-0.75rem)] lg:w-[45%] lg:rounded-tr-none lg:rounded-tl-[3rem] lg:px-12 lg:pb-12 lg:pt-8 xl:px-14">
      <header className="relative z-20 hidden items-center justify-end gap-10 lg:flex">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary"
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <MenuButton />
      </header>

      <div className="relative z-20 flex flex-1 flex-col justify-center lg:items-end">
        <div className="animate-rise [animation-delay:350ms] lg:w-56 xl:w-64">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            Available for
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
          </p>
          <p className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Freelance
            <br />
            Projects
          </p>
        </div>
      </div>

      <div className="mb-10 lg:hidden">
        <ClientAvatarsLight />
      </div>

      <figure className="relative z-20 w-full animate-rise rounded-3xl bg-muted p-6 shadow-card [animation-delay:550ms] sm:max-w-xs lg:ml-auto">
        <Quote className="h-7 w-7 fill-primary text-primary" />
        <blockquote className="mt-4 text-sm font-medium leading-relaxed text-foreground">
          Madhusudhan delivered outstanding work that exceeded our expectations.
        </blockquote>
        <figcaption className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-foreground">James Carter</p>
            <p className="text-xs text-muted-foreground">Founder, Northwind</p>
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
      <div className="flex -space-x-3">
        {clients.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Client ${i + 1}`}
            width={816}
            height={816}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-background"
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Trusted by brands worldwide</p>
    </div>
  );
}

export function PortfolioHero() {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ember-gradient lg:h-svh lg:flex-row">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="orb orb-fill -left-40 -top-40 h-[36rem] w-[36rem] animate-float" />
        <div className="orb orb-ring left-[18%] top-[-12%] h-[30rem] w-[30rem]" />
        <div className="orb orb-fill bottom-[-20%] left-[25%] h-[34rem] w-[34rem] animate-float-slow" />
      </div>
      <EmberPanel />
      <Portrait />
      <WhitePanel />
    </main>
  );
}
