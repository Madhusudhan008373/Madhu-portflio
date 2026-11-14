"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import portrait from "@/assets/portrait.webp";
import circuitGraphic from "@/assets/circuit.png";
import roverGraphic from "@/assets/rover.png";
import { FilamentMenu } from "./FilamentMenu";

/*
 * Spacing follows an 8-point grid: only Tailwind steps that resolve to multiples of 8px
 * (2, 4, 6, 8, 10, 12, 16, 20, 24…) are used for padding, margin, gaps and sizes.
 */

const navItems = ["About", "Education", "Skills", "Strengths", "Contact"];
const clients = [client2, client1, client4, client3];

function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 text-hero-foreground transition-colors duration-500"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/40 text-lg type-display">
        M
      </span>
      <span className="font-display text-xl font-semibold tracking-tight">Madhusudhan</span>
    </a>
  );
}

/** Non-sticky navigation at top of hero — scrolls away naturally with the page content */
function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-transparent">
      <div className="flex h-24 items-center justify-between lg:h-auto lg:items-stretch">
        <div className="flex items-center px-6 sm:px-10 lg:h-24 lg:w-[55%] lg:px-16 xl:px-20">
          <Logo />
        </div>
        <div className="flex items-center justify-end gap-6 sm:gap-8 px-4 sm:px-6 lg:mt-4 lg:h-24 lg:w-[45%] lg:pl-6 lg:pr-6 xl:pr-8">
          <nav aria-label="Primary" className="hidden lg:block mr-4 xl:mr-6">
            <ul className="flex items-center gap-5 xl:gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group relative type-nav text-foreground/75 hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Glowing Edison Bulb Menu pinned to the far top-right corner */}
          <div className="flex items-center">
            <FilamentMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function EmberPanel() {
  return (
    <section className="relative z-20 flex min-h-0 flex-col px-6 pb-8 pt-24 text-hero-foreground sm:px-10 lg:h-full lg:w-[55%] lg:px-16 lg:pb-16 lg:pt-28 xl:px-20">
      <div className="flex flex-1 flex-col justify-center py-10 lg:py-0">
        <p className="animate-rise type-nav mb-4 text-hero-muted [animation-delay:50ms]">
          CH Madhusudhan · EEE Student
        </p>
        <h1 className="animate-rise type-display text-[4.5rem] text-hero-foreground [animation-delay:100ms] sm:text-[6rem] lg:text-[clamp(5.5rem,9vw,8.5rem)]">
          Madhu
        </h1>
        <p className="mt-6 max-w-[320px] animate-rise text-base leading-relaxed text-hero-muted [animation-delay:200ms] sm:text-lg lg:text-xl">
          Electrical & Electronics Engineering.
          <br />
          Built on discipline &amp; dedication.
        </p>
        <div className="mt-10 animate-rise [animation-delay:320ms]">
          <Button variant="hero" size="pill" asChild>
            <a href="#about">
              Explore Profile
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-deep text-hero-foreground transition-transform duration-500 ease-out group-hover:rotate-45">
                <ArrowUpRight />
              </span>
            </a>
          </Button>
        </div>
      </div>

      <div className="hidden animate-rise [animation-delay:480ms] lg:block">
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
    <div className="pointer-events-none relative z-10 mx-auto w-[88%] max-w-lg lg:absolute lg:bottom-0 lg:left-[52%] lg:w-auto lg:max-w-none lg:-translate-x-1/2">
      <div
        aria-hidden
        className="portrait-glow absolute inset-x-[10%] top-[5%] h-[70%] rounded-full"
      />
      <img
        src={portrait}
        alt="Portrait of CH Madhusudhan, EEE student"
        width={1371}
        height={1324}
        className="portrait-shadow relative block h-auto w-full animate-rise [animation-delay:200ms] lg:h-[82dvh] lg:w-auto"
      />
    </div>
  );
}

function WhitePanel() {
  const { scrollY } = useScroll();

  // Scroll-triggered dynamic parallax:
  // As user scrolls down, the circuit drifts outward to the right away from the portrait photo
  // and smoothly translates back inward when scrolling back up.
  const circuitX = useTransform(scrollY, [0, 600], [0, 75]);
  const circuitScale = useTransform(scrollY, [0, 600], [1.1, 1.16]);
  const circuitOpacity = useTransform(scrollY, [0, 350, 700], [0.22, 0.25, 0.08]);

  return (
    <section className="relative flex flex-col overflow-hidden rounded-t-[3rem] bg-background px-6 pb-8 pt-16 sm:px-10 lg:mt-4 lg:h-[calc(100dvh-1rem)] lg:w-[45%] lg:rounded-tl-[3rem] lg:rounded-tr-none lg:px-12 lg:pb-16 lg:pt-28 xl:px-16">
      {/* Circuit Graphic with Smooth Scroll-Parallax Outward Translation */}
      <motion.div
        aria-hidden="true"
        style={{
          x: circuitX,
          scale: circuitScale,
          opacity: circuitOpacity,
        }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-start overflow-hidden select-none will-change-transform"
      >
        <img
          src={circuitGraphic}
          alt=""
          loading="eager"
          className="h-full w-full object-contain object-left-center contrast-[0.88] mix-blend-multiply -translate-x-6 lg:-translate-x-10"
        />
      </motion.div>

      {/* Engineering Machine Rover Sketch Artwork (1st Page Right Side - Transparent Background & Decreased Contrast) */}
      <div className="relative z-20 flex flex-1 items-center justify-center lg:justify-end my-2 lg:my-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="relative group w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[330px] xl:max-w-[370px] select-none"
        >
          <img
            src={roverGraphic}
            alt="Robotic exploration rover machine engineering blueprint sketch"
            width={928}
            height={970}
            className="w-full h-auto object-contain opacity-75 contrast-[0.85] brightness-[1.04] transition-all duration-500 group-hover:opacity-95 group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>

      <div className="mb-10 lg:hidden relative z-20">
        <ClientAvatarsLight />
      </div>

      <figure className="relative z-20 w-full animate-rise rounded-3xl bg-muted/95 backdrop-blur-md p-6 shadow-card [animation-delay:560ms] sm:max-w-xs sm:p-8 lg:ml-auto border border-foreground/5">
        <Quote className="h-7 w-7 fill-primary text-primary" />
        <blockquote className="mt-3 text-sm font-medium leading-relaxed text-foreground">
          "To gain practical experience and improve my skills in the electrical field."
        </blockquote>
        <figcaption className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="type-nav text-foreground">CH Madhusudhan</p>
            <p className="mt-1 text-xs text-muted-foreground">Diploma EEE · Pendurthi</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary text-primary font-display text-lg font-bold">
            M
          </span>
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
      <main
        id="hero"
        className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-ember-gradient lg:h-[100dvh] lg:flex-row"
      >
        {/* Ambient background orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
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
