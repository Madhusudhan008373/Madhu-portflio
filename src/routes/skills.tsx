import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Cpu, Cog, CheckCircle2, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      {
        title: "Technical Skills — CH Madhusudhan | Electrical & Electronics",
      },
      {
        name: "description",
        content:
          "Explore the technical skills of CH Madhusudhan: Electrical Safety, Motor Basics, and PLC Basics. Grounded in practical engineering principles.",
      },
      {
        property: "og:title",
        content: "Technical Skills — CH Madhusudhan",
      },
      {
        property: "og:description",
        content: "Key Technical Competencies: Electrical Safety, Motor Basics, and PLC Basics.",
      },
    ],
  }),
  component: SkillsPage,
});

const skillsData = [
  {
    id: "electrical-safety",
    title: "Electrical Safety",
    category: "Safety & Compliance",
    icon: ShieldCheck,
    tagline: "Prioritizing human and apparatus safety in all electrical environments.",
    description:
      "Core knowledge of electrical safety rules, personal protective equipment (PPE) requirements, safe handling of low and high voltage circuits, hazard identification, and grounding/earthing principles.",
    keyPoints: [
      "Adherence to laboratory and workplace electrical safety regulations",
      "Understanding earthing, grounding, and shock prevention mechanisms",
      "Safe handling of testing equipment, multimeters, and circuit connections",
      "Awareness of electrical fire hazards and emergency safety responses",
    ],
    tags: ["Safety Protocols", "Earthing & Grounding", "Hazard Prevention", "Electrical PPE"],
  },
  {
    id: "motor-basics",
    title: "Motor Basics",
    category: "Electrical Machinery",
    icon: Cog,
    tagline: "Understanding electromechanical conversion and motor fundamentals.",
    description:
      "Grasp of fundamental electromechanical concepts governing AC and DC electric motors, including stator and rotor construction, magnetic field interactions, basic starters, and terminal wiring.",
    keyPoints: [
      "Operating principles of AC induction motors and DC motors",
      "Stator, rotor, commutator, and field winding fundamentals",
      "Motor starting methods, terminal connections & wiring diagrams",
      "Observation of motor torque, speed, and loading characteristics",
    ],
    tags: ["AC & DC Motors", "Electromagnetism", "Stator & Rotor", "Motor Wiring"],
  },
  {
    id: "plc-basics",
    title: "PLC Basics",
    category: "Industrial Automation",
    icon: Cpu,
    tagline: "Foundational principles of modern industrial control systems.",
    description:
      "Understanding the role and architecture of Programmable Logic Controllers (PLC) in industrial automation, including input/output interfacing, relay replacement, and ladder logic concepts.",
    keyPoints: [
      "Architecture of Programmable Logic Controllers (CPU & I/O)",
      "Basic concepts of ladder logic diagrams & relay conversions",
      "Digital I/O interfacing for sensors, pushbuttons & contactors",
      "Automation sequencing in industrial production lines",
    ],
    tags: ["Industrial Automation", "Ladder Logic", "I/O Interfacing", "Control Circuits"],
  },
];

function SkillsPage() {
  return (
    <PageLayout
      badge="Core Competencies"
      title="Technical Skills"
      subtitle="Practical capabilities across industrial electrical safety, electromechanical machines, and programmable automation controllers."
    >
      <div className="space-y-12">
        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ember/35 hover:shadow-[0_20px_45px_oklch(0.69_0.21_45_/_0.12)]"
              >
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                      {skill.category}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.2)] group-hover:border-ember/40 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-ember transition-colors">
                    {skill.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[oklch(0.6_0.015_45)]">
                    {skill.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[oklch(0.68_0.015_45)]">
                    {skill.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {skill.keyPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                        <span className="text-[oklch(0.8_0.015_50)]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-ember/12">
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ember/8 border border-ember/15 px-2.5 py-0.5 text-[11px] font-semibold text-[oklch(0.72_0.1_50)]"
                      >
                        {tag}
                      </span>
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
            <h3 className="font-display text-xl font-bold text-white">
              Personal Strengths &amp; Work Ethic
            </h3>
            <p className="text-sm text-[oklch(0.65_0.015_45)] mt-1">
              Learn about Quick Learner, Team Work, Hard Working, and Discipline qualities.
            </p>
          </div>
          <Button
            asChild
            className="bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)] shrink-0"
          >
            <Link to="/strengths">
              <span>View Strengths</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
