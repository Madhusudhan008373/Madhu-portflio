import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Users,
  Flame,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Zap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/strengths")({
  head: () => ({
    meta: [
      {
        title: "Personal Strengths — CH Madhusudhan | Work Ethic & Values",
      },
      {
        name: "description",
        content:
          "Discover the core strengths of CH Madhusudhan: Quick Learner, Team Work, Hard Working, and Discipline.",
      },
      {
        property: "og:title",
        content: "Personal Strengths — CH Madhusudhan",
      },
      {
        property: "og:description",
        content: "Key Strengths: Quick Learner, Team Work, Hard Working, and Discipline.",
      },
    ],
  }),
  component: StrengthsPage,
});

const strengthsList = [
  {
    id: "quick-learner",
    title: "Quick Learner",
    subtitle: "Fast Adaptation & Intellectual Curiosity",
    icon: Sparkles,
    color: "from-cyan-500/20 to-teal-500/5",
    border: "border-cyan-500/30",
    badge: "Adaptability",
    description:
      "Rapidly understands new electrical principles, circuit layouts, and tool handling methods. Capable of quickly translating classroom theory into hands-on workshop execution.",
    highlights: [
      "Swiftly grasps new safety guidelines and standard operating procedures",
      "Adapts smoothly to evolving technical tasks and laboratory setups",
      "Enthusiastic about learning emerging technologies in electrical systems",
    ],
  },
  {
    id: "team-work",
    title: "Team Work",
    subtitle: "Cooperative Spirit & Mutual Support",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/5",
    border: "border-blue-500/30",
    badge: "Collaboration",
    description:
      "Collaborates effectively with peers, technical instructors, and teammates in group lab assignments, technical presentations, and project milestones.",
    highlights: [
      "Shares responsibilities actively during laboratory exercises and wiring tests",
      "Listens attentively to feedback and supports group coordination",
      "Fosters a positive and respectful learning environment",
    ],
  },
  {
    id: "hard-working",
    title: "Hard Working",
    subtitle: "Diligence & Relentless Effort",
    icon: Flame,
    color: "from-amber-500/20 to-cyan-500/5",
    border: "border-amber-500/30",
    badge: "Work Ethic",
    description:
      "Committed to putting in the necessary hours and focus to understand intricate topics, refine technical calculations, and achieve academic excellence (evidenced by 86% in SSC).",
    highlights: [
      "Consistent dedication to understanding complex electrical systems",
      "Thorough and meticulous in completing workshop assignments",
      "High stamina and endurance during extensive practical sessions",
    ],
  },
  {
    id: "discipline",
    title: "Discipline",
    subtitle: "Punctuality & Rigorous Safety Adherence",
    icon: Target,
    color: "from-emerald-500/20 to-cyan-500/5",
    border: "border-emerald-500/30",
    badge: "Professionalism",
    description:
      "Maintains a strict standard of personal responsibility, punctuality, and adherence to electrical safety protocols where disciplined behavior is essential.",
    highlights: [
      "Strict compliance with electrical safety regulations and laboratory rules",
      "Punctual attendance and dependable task follow-through",
      "Organized approach to tooling, equipment care, and documentation",
    ],
  },
];

function StrengthsPage() {
  return (
    <PageLayout
      badge="Work Ethic & Values"
      title="Personal Strengths"
      subtitle="The behavioral traits and ethical principles that power CH Madhusudhan's growth, reliability, and teamwork in technical environments."
    >
      <div className="space-y-12">
        {/* Strengths 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengthsList.map((strength) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#0a0f1c]/80 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#0c1426] hover:shadow-[0_20px_45px_rgba(6,182,212,0.15)]"
              >
                <div>
                  {/* Header with badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {strength.badge}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {strength.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-slate-400">{strength.subtitle}</p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {strength.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 space-y-2.5 border-t border-slate-800/80 pt-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-cyan-400" />
                      Key Attributes
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {strength.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>Applied daily across coursework & laboratory labs</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alignment with Career Objective */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1322] via-[#09101d] to-[#070b14] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-cyan-400" />
                Value to an Organization
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                How These Strengths Drive Results
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                A quick learner who works hard, cooperates smoothly with colleagues, and operates
                with unwavering discipline is prepared to quickly become an asset in any electrical
                engineering setting, apprenticeship, or technical team.
              </p>
            </div>

            <Button
              asChild
              className="bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0"
            >
              <Link to="/contact">
                <span>Contact Madhusudhan</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-slate-800 bg-slate-900/70 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-300"
          >
            <Link to="/skills">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Technical Skills</span>
            </Link>
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Link to="/contact">
              <span>Go to Contact Page</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
