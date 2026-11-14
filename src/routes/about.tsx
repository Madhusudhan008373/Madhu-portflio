import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Target,
  GraduationCap,
  Wrench,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CH Madhusudhan — Electrical & Electronics Engineering" },
      {
        name: "description",
        content:
          "Learn about CH Madhusudhan, Diploma EEE student at Government Polytechnic College, Pendurthi. Career Objective, technical skills, and educational background.",
      },
      {
        property: "og:title",
        content: "About CH Madhusudhan — EEE Student & Technician",
      },
      {
        property: "og:description",
        content:
          "Career Objective: To gain practical experience and improve my skills in the electrical field.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout
      badge="Profile & Career Objective"
      title="About CH Madhusudhan"
      subtitle="Dedicated Electrical & Electronics Engineering student aiming to build a strong foundation of practical knowledge, safety standards, and industrial skills."
    >
      <div className="space-y-12">
        {/* Career Objective Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-ember/25 bg-gradient-to-br from-section-card via-[oklch(0.11_0.028_41)] to-section-bg p-8 sm:p-12 shadow-[0_20px_50px_oklch(0_0_0_/_0.5)]">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ember/8 blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-ember/10 border border-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
                <Target className="h-3.5 w-3.5 text-ember" />
                Career Objective
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                &ldquo;To gain practical experience and improve my skills in the electrical
                field.&rdquo;
              </h2>
              <p className="text-[oklch(0.72_0.015_50)] leading-relaxed text-sm sm:text-base">
                Committed to continuous learning through hands-on practice, rigorous lab exercises,
                and active participation in electrical engineering applications. Focused on
                mastering foundational principles and industry-standard safety practices.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                asChild
                className="bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)]"
              >
                <Link to="/contact">
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-ember/30 bg-ember/5 text-[oklch(0.9_0.02_50)] text-xs font-semibold uppercase tracking-wider hover:border-ember/60 hover:text-ember hover:bg-ember/10"
              >
                <Link to="/skills">View Skills</Link>
              </Button>
            </div>
          </div>

          {/* Core values ribbon */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-ember/15 pt-8">
            {[
              { label: "Core Field", value: "Electrical & Electronics (EEE)" },
              { label: "Current Status", value: "Diploma Pursuing" },
              { label: "SSC Score", value: "86% Aggregate" },
              { label: "Primary Focus", value: "Practical Learning" },
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

        {/* Overview Sections Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Education Summary Card */}
          <div className="group relative rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:border-ember/35 hover:shadow-[0_15px_35px_oklch(0.69_0.21_45_/_0.12)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.2)]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                Academic Path
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-white group-hover:text-ember transition-colors">
              Academic Background
            </h3>
            <p className="mt-3 text-sm text-[oklch(0.65_0.015_45)] leading-relaxed">
              Balancing formal coursework with practical workshop training at Government Polytechnic
              College, Pendurthi. Strong foundation built through 86% in SSC.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-ember/5 p-3.5 border border-ember/15">
                <CheckCircle2 className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Diploma in EEE (Pursuing)</h4>
                  <p className="text-xs text-[oklch(0.6_0.015_45)]">
                    Government Polytechnic College, Pendurthi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-ember/5 p-3.5 border border-ember/15">
                <CheckCircle2 className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">SSC — 86%</h4>
                  <p className="text-xs text-[oklch(0.6_0.015_45)]">
                    GVMC High School, Madhavadhara
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ember/15">
              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember hover:text-[oklch(0.78_0.16_50)] transition-colors"
              >
                <span>View Full Academic Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Technical Skills Preview */}
          <div className="group relative rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:border-ember/35 hover:shadow-[0_15px_35px_oklch(0.69_0.21_45_/_0.12)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.2)]">
                <Wrench className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                Technical Toolkit
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
                  desc: "Safety protocols, proper grounding, and hazard prevention.",
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
                  <Zap className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{skill.title}</h4>
                    <p className="text-xs text-[oklch(0.6_0.015_45)]">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-ember/15">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember hover:text-[oklch(0.78_0.16_50)] transition-colors"
              >
                <span>Explore Technical Skills</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Strengths & Work Ethic Card */}
        <div className="rounded-3xl border border-ember/15 bg-section-card p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ember mb-1">
                <Sparkles className="h-4 w-4 text-ember" />
                Work Ethic & Values
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Personal Strengths</h3>
            </div>
            <Link
              to="/strengths"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ember hover:text-[oklch(0.78_0.16_50)]"
            >
              <span>View Details</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Quick Learner",
                desc: "Swiftly adapts to new tools, circuits, and technical concepts.",
              },
              {
                title: "Team Work",
                desc: "Collaborates harmoniously in group lab projects and assignments.",
              },
              {
                title: "Hard Working",
                desc: "Consistently invests effort into understanding complex topics.",
              },
              {
                title: "Discipline",
                desc: "Committed to punctuality, procedures, and high safety standards.",
              },
            ].map((strength) => (
              <div
                key={strength.title}
                className="rounded-2xl border border-ember/15 bg-ember/5 p-5 hover:border-ember/35 transition-all duration-300"
              >
                <div className="h-2 w-8 rounded-full bg-ember mb-4" />
                <h4 className="font-display text-lg font-bold text-white">{strength.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-[oklch(0.68_0.015_45)]">
                  {strength.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip Banner */}
        <div className="rounded-3xl border border-ember/20 bg-gradient-to-r from-ember/10 via-section-card to-ember/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Interested in connecting with CH Madhusudhan?
            </h3>
            <p className="text-sm text-[oklch(0.72_0.015_50)] max-w-xl">
              Reach out directly for discussions, inquiries, and opportunities in the electrical
              engineering field.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)]"
            >
              <a href="tel:6302657026">
                <Phone className="mr-2 h-4 w-4" />
                <span>Call 6302657026</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ember/30 bg-ember/5 text-[oklch(0.9_0.02_50)] hover:border-ember/60 hover:text-ember text-xs font-semibold uppercase tracking-wider"
            >
              <a href="mailto:chitadamadhusudhan@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                <span>Email Madhusudhan</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
