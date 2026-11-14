import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Target,
  GraduationCap,
  Wrench,
  Award,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
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
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1322] via-[#09101d] to-[#060a12] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Cyan decorative glow in corner */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <Target className="h-3.5 w-3.5 text-cyan-400" />
                Career Objective
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                &ldquo;To gain practical experience and improve my skills in the electrical
                field.&rdquo;
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Committed to continuous learning through hands-on practice, rigorous lab exercises,
                and active participation in electrical engineering applications. Focused on
                mastering foundational principles and industry-standard safety practices.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                asChild
                className="bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <Link to="/contact">
                  <span>Get in Touch</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-700 bg-slate-900/60 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-300"
              >
                <Link to="/skills">View Skills</Link>
              </Button>
            </div>
          </div>

          {/* Core values ribbon */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-slate-800/80 pt-8">
            {[
              { label: "Core Field", value: "Electrical & Electronics (EEE)" },
              { label: "Current Status", value: "Diploma Pursuing" },
              { label: "SSC Score", value: "86% Aggregate" },
              { label: "Primary Focus", value: "Practical Learning" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  {stat.label}
                </span>
                <span className="text-sm font-bold text-cyan-300 block">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Overview Sections Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Academic Background Card */}
          <div className="group relative rounded-3xl border border-slate-800 bg-[#0a0f1c]/70 p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0c1426] hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                Education
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              Technical & Foundational Education
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Pursuing a Diploma in Electrical and Electronics Engineering (EEE) at Government
              Polytechnic College, Pendurthi. Completed SSC from GVMC High School, Madhavadhara with
              an 86% academic record.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-slate-800/80">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Diploma in EEE (Pursuing)</h4>
                  <p className="text-xs text-slate-400">
                    Government Polytechnic College, Pendurthi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-slate-800/80">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-200">SSC — 86%</h4>
                  <p className="text-xs text-slate-400">GVMC High School, Madhavadhara</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <Link
                to="/education"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read Full Education Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Technical Skills Overview Card */}
          <div className="group relative rounded-3xl border border-slate-800 bg-[#0a0f1c]/70 p-8 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0c1426] hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Wrench className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                Skills
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              Core Technical Competencies
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Focused on the foundational pillars of modern electrical engineering: safety
              standards, motor operation, and industrial automation with PLC basics.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Electrical Safety",
                  desc: "Safety rules, proper grounding, and hazard prevention.",
                },
                {
                  title: "Motor Basics",
                  desc: "Operating principles of electrical motors and circuits.",
                },
                {
                  title: "PLC Basics",
                  desc: "Fundamental automation logic and controller principles.",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-slate-800/80"
                >
                  <Zap className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{skill.title}</h4>
                    <p className="text-xs text-slate-400">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Explore Technical Skills</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Strengths & Work Ethic Card */}
        <div className="rounded-3xl border border-slate-800 bg-[#0a0f1c]/70 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                Work Ethic & Values
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Personal Strengths</h3>
            </div>
            <Link
              to="/strengths"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300"
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
                className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="h-2 w-8 rounded-full bg-cyan-400 mb-4" />
                <h4 className="font-display text-lg font-bold text-white">{strength.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip Banner */}
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-cyan-950/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Interested in connecting with CH Madhusudhan?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Available for technical internships, entry-level opportunities, and academic
              collaboration in the electrical engineering field.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400"
            >
              <a href="tel:6302657026">
                <Phone className="mr-2 h-4 w-4" />
                <span>Call 6302657026</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500/40 bg-slate-900/80 text-cyan-300 hover:bg-cyan-500/10 text-xs font-semibold uppercase tracking-wider"
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
