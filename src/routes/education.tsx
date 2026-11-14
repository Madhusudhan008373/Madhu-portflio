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
          <div className="relative overflow-hidden rounded-2xl border border-ember/25 bg-gradient-to-br from-section-card to-section-bg p-6 shadow-[0_10px_30px_oklch(0_0_0_/_0.4)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-ember">
                Technical Education
              </span>
              <span className="flex h-2 w-2 rounded-full bg-ember animate-ping" />
            </div>
            <p className="mt-3 font-display text-3xl font-extrabold text-white">Diploma EEE</p>
            <p className="text-xs text-[oklch(0.6_0.015_45)] mt-1">
              Government Polytechnic College, Pendurthi
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember/10 border border-ember/20 px-2.5 py-0.5 text-xs font-semibold text-ember">
              <Zap className="h-3 w-3" />
              <span>Status: Pursuing</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-ember/15 bg-section-card p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.6_0.015_45)] block">
              Secondary Education
            </span>
            <p className="mt-3 font-display text-3xl font-extrabold text-ember">86% Score</p>
            <p className="text-xs text-[oklch(0.6_0.015_45)] mt-1">
              GVMC High School, Madhavadhara
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember/8 border border-ember/15 px-2.5 py-0.5 text-xs font-semibold text-[oklch(0.78_0.16_50)]">
              <CheckCircle2 className="h-3 w-3" />
              <span>SSC Completed</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-ember/15 bg-section-card p-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.6_0.015_45)] block">
              Field of Specialization
            </span>
            <p className="mt-3 font-display text-3xl font-extrabold text-white">EEE Stream</p>
            <p className="text-xs text-[oklch(0.6_0.015_45)] mt-1">
              Electrical &amp; Electronics Engineering
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember/8 border border-ember/15 px-2.5 py-0.5 text-xs font-semibold text-[oklch(0.78_0.16_50)]">
              <BookOpen className="h-3 w-3" />
              <span>Curriculum Training</span>
            </div>
          </div>
        </div>

        {/* Detailed Education Cards */}
        <div className="space-y-8">
          {/* 1. Diploma in EEE */}
          <div className="relative overflow-hidden rounded-3xl border border-ember/25 bg-section-card p-8 sm:p-12 shadow-[0_20px_50px_oklch(0_0_0_/_0.4)]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.2)]">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full bg-ember px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                      Current
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ember">
                      Technical Diploma
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Diploma in Electrical and Electronics Engineering (EEE)
                  </h2>
                  <p className="mt-1 text-base font-semibold text-ember">
                    Government Polytechnic College, Pendurthi
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/15 px-4 py-2 text-xs text-slate-300">
                  <Calendar className="h-3.5 w-3.5 text-ember" />
                  <span>
                    Status: <strong className="text-ember font-bold">Pursuing</strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/15 px-4 py-2 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-ember" />
                  <span>Pendurthi, Visakhapatnam</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-ember/15 pt-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[oklch(0.6_0.015_45)] mb-4">
                Core Coursework &amp; Key Focus Areas
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Electrical Safety",
                    desc: "Industrial safety guidelines, earth testing, insulation principles, and shock prevention.",
                  },
                  {
                    title: "Motor Fundamentals",
                    desc: "Construction, operation, starting, and maintenance of AC & DC electric motors.",
                  },
                  {
                    title: "PLC Automation",
                    desc: "Basic ladder logic, programmable controllers, and industrial automation principles.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-ember/15 bg-ember/5 p-5"
                  >
                    <div className="flex items-center gap-2 text-ember font-bold text-sm mb-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[oklch(0.65_0.015_45)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Secondary School Certificate (SSC) */}
          <div className="rounded-3xl border border-ember/15 bg-section-card p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ember/8 border border-ember/20 text-ember">
                  <School className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full bg-ember/10 border border-ember/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                      Secondary Education
                    </span>
                    <span className="rounded-full bg-ember/15 border border-ember/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-ember">
                      86% Score
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Secondary School Certificate (SSC)
                  </h2>
                  <p className="mt-1 text-base font-semibold text-[oklch(0.78_0.16_50)]">
                    GVMC High School, Madhavadhara
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/15 px-4 py-2 text-xs text-slate-300">
                  <Award className="h-3.5 w-3.5 text-ember" />
                  <span>
                    Aggregate: <strong className="text-ember font-bold">86%</strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/15 px-4 py-2 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-ember" />
                  <span>Madhavadhara, Visakhapatnam</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-ember/15 pt-6">
              <p className="text-sm leading-relaxed text-[oklch(0.68_0.015_45)]">
                Completed secondary schooling from GVMC High School, Madhavadhara, achieving an
                outstanding 86% aggregate score. Built strong core competencies in mathematics,
                physical science, and analytical problem-solving that directly underpin subsequent
                electrical engineering studies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-ember/15 bg-ember/5 p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Discover Technical Capabilities
            </h3>
            <p className="text-sm text-[oklch(0.65_0.015_45)] mt-1">
              Explore hands-on skills in Electrical Safety, Motor Basics, and PLC Automation.
            </p>
          </div>
          <Button
            asChild
            className="bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)] shrink-0"
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
