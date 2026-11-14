import { ShieldCheck, Cog, Cpu, CheckCircle2, Zap } from "lucide-react";

const skillsData = [
  {
    id: "electrical-safety",
    title: "Electrical Safety",
    category: "Safety & Compliance",
    icon: ShieldCheck,
    tagline: "Prioritizing human and apparatus safety in all electrical environments.",
    description:
      "Core knowledge of electrical safety rules, personal protective equipment (PPE) requirements, safe handling of low and high voltage circuits, hazard identification, and grounding/earthing principles.",
    points: [
      "Laboratory & workshop electrical safety rules",
      "Earthing, grounding, and electrical shock prevention",
      "Safe handling of instruments, testers, and multimeters",
      "Electrical hazard identification & emergency precautions",
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
    points: [
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
    points: [
      "Architecture of Programmable Logic Controllers (CPU & I/O)",
      "Basic concepts of ladder logic diagrams & relay conversions",
      "Digital I/O interfacing for sensors, pushbuttons & contactors",
      "Automation sequencing in industrial production lines",
    ],
    tags: ["Industrial Automation", "Ladder Logic", "I/O Interfacing", "Control Circuits"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-ember/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.15)] mb-4">
            <Zap className="h-3.5 w-3.5" />
            Core Competencies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technical <span className="text-ember">Skills</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.75_0.015_50)]">
            Foundational engineering capabilities centered on industrial electrical safety
            standards, electromechanical machinery, and automation controllers.
          </p>
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ember/35 hover:shadow-[0_20px_45px_oklch(0.69_0.21_45_/_0.12)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-ember/4 to-transparent" />

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
                    {skill.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                        <span className="text-[oklch(0.8_0.015_50)]">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
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

        {/* Bottom Summary Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ember/20 bg-ember/5 px-6 py-4">
          <p className="text-sm text-[oklch(0.72_0.015_50)]">
            <span className="font-bold text-white">3 core technical skills</span> aligned with
            Diploma in EEE curriculum — developed through hands-on lab training.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)] hover:bg-ember-mid transition-colors"
          >
            <span>Connect with Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
