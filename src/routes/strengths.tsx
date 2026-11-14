import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Users, Flame, Target, CheckCircle2, ArrowRight } from "lucide-react";
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
    subtitle: "Collaboration & Mutual Respect",
    icon: Users,
    badge: "Collaboration",
    description:
      "Works cohesively within diverse peer groups and technical project teams. Communicates clearly, respects differing viewpoints, and contributes toward shared team objectives.",
    highlights: [
      "Reliable contributor in team-based laboratory experiments and projects",
      "Values collaborative problem-solving and collective success",
      "Maintains respectful, constructive communication with peers and faculty",
    ],
  },
  {
    id: "hard-working",
    title: "Hard Working",
    subtitle: "Diligence & Relentless Effort",
    icon: Flame,
    badge: "Work Ethic",
    description:
      "Consistently invests the necessary hours and focus to thoroughly understand difficult concepts, solve engineering challenges, and ensure practical tasks are executed properly.",
    highlights: [
      "Demonstrated academic dedication reflected in 86% SSC aggregate",
      "Persistent in troubleshooting circuits until correct operation is achieved",
      "Willing to take on challenging technical tasks with an energetic mindset",
    ],
  },
  {
    id: "discipline",
    title: "Discipline",
    subtitle: "Punctuality, Precision & Safety Adherence",
    icon: Target,
    badge: "Professionalism",
    description:
      "Upholds high standards of personal conduct, punctual attendance, strict adherence to safety codes, and orderly execution of technical procedures in lab and workshop settings.",
    highlights: [
      "Rigorous commitment to electrical workshop safety protocols",
      "Punctual and consistent attendance in academic and practical sessions",
      "Methodical and systematic approach to circuit assembly and testing",
    ],
  },
];

function StrengthsPage() {
  return (
    <PageLayout
      badge="Work Ethic & Values"
      title="Personal Strengths"
      subtitle="The core personal values and professional qualities that guide CH Madhusudhan's academic and practical journey."
    >
      <div className="space-y-12">
        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengthsList.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:border-ember/35 hover:-translate-y-1 hover:shadow-[0_20px_45px_oklch(0.69_0.21_45_/_0.12)]"
              >
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                      {strength.badge}
                    </span>
                    <span className="font-mono text-xs font-bold text-[oklch(0.55_0.015_45)]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.2)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-ember transition-colors">
                        {strength.title}
                      </h3>
                      <p className="text-xs text-[oklch(0.6_0.015_45)] font-medium">
                        {strength.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[oklch(0.68_0.015_45)]">
                    {strength.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {strength.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-[oklch(0.75_0.015_50)]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-ember shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-ember/15 bg-ember/5 p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Ready to Connect?</h3>
            <p className="text-sm text-[oklch(0.65_0.015_45)] mt-1">
              Reach out directly via phone or email for opportunities.
            </p>
          </div>
          <Button
            asChild
            className="bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)] shrink-0"
          >
            <Link to="/contact">
              <span>Contact Madhusudhan</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
