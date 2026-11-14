import { useState } from "react";
import { motion } from "framer-motion";
import { Target, GraduationCap, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HangingScrollBulb } from "@/components/hero/HangingScrollBulb";

export function AboutSection() {
  const [isBulbLit, setIsBulbLit] = useState(false);

  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20 overflow-hidden"
    >
      {/* Interactive scroll-driven hanging illuminated Edison pendant bulb */}
      <HangingScrollBulb onLitChange={setIsBulbLit} />

      {/* Radial Illumination Beam spreading from the newly lit top-right bulb across the dark section */}
      <motion.div
        animate={{
          opacity: isBulbLit ? 1 : 0,
          scale: isBulbLit ? 1 : 0.75,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -top-20 right-0 w-[650px] h-[650px] lg:w-[900px] lg:h-[900px] -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 82% 18%, rgba(255, 215, 0, 0.22) 0%, rgba(245, 158, 11, 0.12) 35%, rgba(234, 88, 12, 0.04) 60%, transparent 80%)",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-ember/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-ember-mid/5 blur-[100px]" />
      </div>

      {/* Main Section Content: Emerges smoothly out of the darkness as the bulb illuminates */}
      <motion.div
        animate={{
          opacity: isBulbLit ? 1 : 0.2,
          filter: isBulbLit ? "brightness(1) contrast(1)" : "brightness(0.65) contrast(0.85)",
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative mx-auto max-w-7xl transition-colors duration-1000"
      >
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.15)] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-ping" />
            About CH Madhusudhan
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Electrical &amp; Electronics <span className="text-ember">Engineering</span> Student
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.75_0.015_50)]">
            Pursuing Diploma in Electrical and Electronics Engineering (EEE) at Government
            Polytechnic College, Pendurthi. Passionate about hands-on practical engineering,
            electrical machines, and industrial safety.
          </p>
        </div>

        {/* Career Objective Card */}
        <div className="relative overflow-hidden rounded-3xl border border-ember/25 bg-gradient-to-br from-section-card via-[oklch(0.11_0.028_41)] to-section-bg p-8 sm:p-12 shadow-[0_20px_60px_oklch(0_0_0_/_0.5)]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-ember/8 blur-[80px]" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-ember-mid/6 blur-[60px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-ember/10 border border-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
                <Target className="h-3.5 w-3.5" />
                Career Objective
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                &ldquo;To gain practical experience and improve my skills in the electrical
                field.&rdquo;
              </blockquote>
              <p className="text-[oklch(0.72_0.015_50)] leading-relaxed text-sm sm:text-base">
                Committed to continuous learning through hands-on practice, workshop machinery, and
                active engagement with electrical systems.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                asChild
                className="bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)]"
              >
                <a href="#contact">
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-ember/30 bg-ember/5 text-[oklch(0.9_0.02_50)] text-xs font-semibold uppercase tracking-wider hover:border-ember/60 hover:text-ember hover:bg-ember/10"
              >
                <a href="#skills">Explore Skills</a>
              </Button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-ember/15 pt-8">
            {[
              { label: "Core Field", value: "Electrical & Electronics (EEE)" },
              { label: "Current Status", value: "Diploma Pursuing" },
              { label: "SSC Score", value: "86% Aggregate" },
              { label: "Key Objective", value: "Practical Experience" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[oklch(0.55_0.015_45)] block">
                  {stat.label}
                </span>
                <span className="text-sm font-bold text-ember block">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Info Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Education Preview Card */}
          <div className="group rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:border-ember/35 hover:shadow-[0_20px_45px_oklch(0.69_0.21_45_/_0.1)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                Academics
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-ember transition-colors">
              Academic Qualifications
            </h3>
            <p className="mt-3 text-sm text-[oklch(0.65_0.015_45)] leading-relaxed">
              Enrolled in Diploma in EEE at Government Polytechnic College, Pendurthi. Completed
              secondary education at GVMC High School, Madhavadhara with 86%.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Diploma in EEE (Pursuing)",
                  sub: "Government Polytechnic College, Pendurthi",
                },
                { title: "SSC — 86%", sub: "GVMC High School, Madhavadhara" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl bg-ember/5 p-3.5 border border-ember/15"
                >
                  <CheckCircle2 className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-[oklch(0.6_0.015_45)]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-ember/15">
              <a
                href="#education"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember hover:text-[oklch(0.78_0.16_50)] transition-colors"
              >
                <span>View Full Education Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Technical Skills Preview Card */}
          <div className="group rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:border-ember/35 hover:shadow-[0_20px_45px_oklch(0.69_0.21_45_/_0.1)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember">
                <Wrench className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                Skills
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-ember transition-colors">
              Core Technical Competencies
            </h3>
            <p className="mt-3 text-sm text-[oklch(0.65_0.015_45)] leading-relaxed">
              Focused on the practical pillars of electrical engineering: electrical safety
              standards, motor fundamentals, and PLC automation.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Electrical Safety",
                  desc: "Safety rules, proper grounding, and hazard prevention.",
                },
                {
                  title: "Motor Basics",
                  desc: "Operating principles of electrical motors and wiring circuits.",
                },
                {
                  title: "PLC Basics",
                  desc: "Fundamental automation logic and controller principles.",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="flex items-start gap-3 rounded-xl bg-ember/5 p-3.5 border border-ember/15"
                >
                  <CheckCircle2 className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{skill.title}</h4>
                    <p className="text-xs text-[oklch(0.6_0.015_45)]">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-ember/15">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember hover:text-[oklch(0.78_0.16_50)] transition-colors"
              >
                <span>View Full Skills Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
