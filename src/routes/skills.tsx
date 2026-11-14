import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Zap,
  Cpu,
  Cog,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Sliders,
  Layers,
  Activity,
} from "lucide-react";
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
      "Stator, rotor, commutator, and winding fundamentals",
      "Understanding motor starting methods and connection diagrams",
      "Basic observation of motor parameters, torque, and speed characteristics",
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
      "Architecture of Programmable Logic Controllers (CPU, I/O modules)",
      "Basic concepts of ladder logic diagrams and relay logic conversion",
      "Digital input and output signal interfacing for sensors and actuators",
      "Appreciation of automation sequencing in industrial manufacturing lines",
    ],
    tags: ["Industrial Automation", "Ladder Logic", "I/O Interfacing", "Control Circuits"],
  },
];

function SkillsPage() {
  return (
    <PageLayout
      badge="Core Competencies"
      title="Technical Skills"
      subtitle="Foundational engineering capabilities centered on industrial electrical safety, electromechanical machines, and automation controllers."
    >
      <div className="space-y-12">
        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#0a0f1c]/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#0c1424] hover:shadow-[0_20px_45px_rgba(6,182,212,0.15)]"
              >
                {/* Top glow on hover */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      {skill.category}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.title}
                  </h2>
                  <p className="mt-2 text-xs font-semibold text-cyan-400/90 italic">
                    {skill.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{skill.description}</p>

                  {/* Key Points */}
                  <div className="mt-6 space-y-2.5 border-t border-slate-800/80 pt-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-cyan-400" />
                      Key Competencies
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {skill.keyPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-900/90 border border-slate-800 px-2.5 py-1 text-[10px] font-semibold text-slate-400 group-hover:border-cyan-500/20 group-hover:text-slate-300 transition-colors"
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

        {/* Practical Application Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#0c1628] via-[#09101d] to-[#0c1628] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                Commitment to Practical Excellence
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Bridging Classroom Fundamentals with Industrial Practice
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                With a clear objective &ldquo;to gain practical experience and improve my skills in
                the electrical field,&rdquo; CH Madhusudhan is eager to apply safety precautions,
                motor operations, and PLC automation in a hands-on work environment.
              </p>
            </div>

            <Button
              asChild
              className="bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0"
            >
              <Link to="/contact">
                <span>Discuss Opportunities</span>
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
            <Link to="/education">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Education</span>
            </Link>
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Link to="/strengths">
              <span>View Personal Strengths</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
