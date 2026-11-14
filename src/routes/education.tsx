import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  School,
  CheckCircle2,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      {
        title: "Education — CH Madhusudhan | Diploma in EEE & SSC",
      },
      {
        name: "description",
        content:
          "Educational qualifications of CH Madhusudhan: Pursuing Diploma in Electrical and Electronics Engineering (EEE) at Government Polytechnic College, Pendurthi. SSC at GVMC High School, Madhavadhara (86%).",
      },
      {
        property: "og:title",
        content: "Education — CH Madhusudhan | Diploma in EEE",
      },
      {
        property: "og:description",
        content:
          "Diploma in EEE (Pursuing) at Govt Polytechnic College, Pendurthi. SSC (86%) at GVMC High School, Madhavadhara.",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <PageLayout
      badge="Academic Qualifications"
      title="Education & Academics"
      subtitle="A solid academic path combining practical polytechnic engineering training with high academic achievement in secondary schooling."
    >
      <div className="space-y-12">
        {/* Academic Highlights Stat Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#0d1627] to-[#070d18] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Technical Education
              </span>
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <p className="mt-3 font-display text-3xl font-extrabold text-white">Diploma EEE</p>
            <p className="mt-1 text-xs text-slate-400">Government Polytechnic College, Pendurthi</p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300 border border-cyan-400/20">
              <Zap className="h-3 w-3" />
              <span>Status: Pursuing</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0a0f1c] p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Secondary Schooling
              </span>
              <Award className="h-4 w-4 text-cyan-400" />
            </div>
            <p className="mt-3 font-display text-3xl font-extrabold text-cyan-300">86% Score</p>
            <p className="mt-1 text-xs text-slate-400">GVMC High School, Madhavadhara</p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-bold text-slate-300">
              <CheckCircle2 className="h-3 w-3 text-cyan-400" />
              <span>SSC Completed</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0a0f1c] p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Discipline
              </span>
              <BookOpen className="h-4 w-4 text-cyan-400" />
            </div>
            <p className="mt-3 font-display text-3xl font-extrabold text-white">EEE</p>
            <p className="mt-1 text-xs text-slate-400">Electrical & Electronics Engineering</p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-bold text-slate-300">
              <span>Practical Engineering Focus</span>
            </div>
          </div>
        </div>

        {/* Detailed Education Cards Timeline */}
        <div className="space-y-8">
          {/* 1. Diploma in EEE */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0c1424]/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-cyan-400/60">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full bg-cyan-500 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                      Current
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Technical Diploma
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Diploma in Electrical and Electronics Engineering (EEE)
                  </h2>
                  <p className="mt-1 text-base font-semibold text-cyan-300">
                    Government Polytechnic College, Pendurthi
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-2 text-xs text-slate-300">
                  <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                  <span>
                    Status: <strong className="text-cyan-300 font-bold">Pursuing</strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-2 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Pendurthi, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-800/80 pt-8">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  Key Coursework & Practical Competencies
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Industrial electrical safety procedures and regulations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Fundamentals of AC and DC electric motors & machinery</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Basics of Programmable Logic Controllers (PLC) automation</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Award className="h-4 w-4 text-cyan-400" />
                  Educational Aim
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Pursuing rigorous diploma curriculum to bridge theoretical electrical concepts
                  with real-world workshop applications, aligning with the career objective of
                  gaining practical experience.
                </p>
              </div>
            </div>
          </div>

          {/* 2. SSC - GVMC High School, Madhavadhara */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0a0f1c]/80 p-8 sm:p-10 transition-all duration-300 hover:border-cyan-500/40">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                  <School className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full bg-slate-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-slate-300">
                      Secondary Education
                    </span>
                    <span className="rounded-full bg-cyan-500/10 border border-cyan-400/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                      86% Score
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Secondary School Certificate (SSC)
                  </h2>
                  <p className="mt-1 text-base font-semibold text-slate-300">
                    GVMC High School, Madhavadhara
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-2 text-xs text-slate-300">
                  <Award className="h-3.5 w-3.5 text-cyan-400" />
                  <span>
                    Performance: <strong className="text-cyan-300 font-bold">86%</strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-2 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Madhavadhara, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800/80 pt-6">
              <p className="text-sm leading-relaxed text-slate-400 max-w-3xl">
                Achieved an 86% aggregate score in the SSC examinations at GVMC High School,
                Madhavadhara, laying a disciplined academic foundation in mathematics, science, and
                analytical reasoning that paved the way for technical studies in Electrical
                Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-slate-800 bg-slate-900/70 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-300"
          >
            <Link to="/about">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to About</span>
            </Link>
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Link to="/skills">
              <span>View Technical Skills</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
