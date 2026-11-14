import { Zap, Users, Dumbbell, Shield, Star } from "lucide-react";

const strengthsData = [
  {
    id: "quick-learner",
    title: "Quick Learner",
    icon: Zap,
    description:
      "Ability to absorb new technical concepts rapidly — from motor wiring fundamentals to PLC automation logic — and apply them in practical settings without extended coaching.",
    quote: "New skills become second nature quickly through focused practice.",
  },
  {
    id: "team-work",
    title: "Team Work",
    icon: Users,
    description:
      "Comfortable working alongside peers, instructors, and industry mentors in lab and workshop environments. Understands the value of shared goals and collaborative problem-solving.",
    quote: "Better results always come from working together toward one goal.",
  },
  {
    id: "hard-working",
    title: "Hard Working",
    icon: Dumbbell,
    description:
      "Consistently puts in the effort required to master coursework, complete lab experiments, and practise hands-on tasks — including extra revision of electrical theory and workshop practice.",
    quote: "Effort and persistence make the difference between good and great.",
  },
  {
    id: "discipline",
    title: "Discipline",
    icon: Shield,
    description:
      "Maintains a structured approach to study and work, respects deadlines and safety protocols, and brings a professional attitude to every electrical lab session and group activity.",
    quote: "Consistent discipline is the foundation of reliable engineering.",
  },
];

export function StrengthsSection() {
  return (
    <section
      id="strengths"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20 bg-[oklch(0.11_0.028_41)]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-ember/5 blur-[120px]" />
        <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-ember-mid/4 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.15)] mb-4">
            <Star className="h-3.5 w-3.5" />
            Personal Strengths
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            What Makes Me <span className="text-ember">Stand Out</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.75_0.015_50)]">
            Beyond technical know-how, these personal qualities define how I approach every task,
            team, and challenge in my engineering journey.
          </p>
        </div>

        {/* 2×2 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {strengthsData.map((strength, idx) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.id}
                className="group relative overflow-hidden rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 hover:border-ember/35 hover:-translate-y-1 hover:shadow-[0_20px_45px_oklch(0.69_0.21_45_/_0.12)]"
              >
                {/* Subtle number watermark */}
                <span className="pointer-events-none absolute right-5 top-4 font-display text-7xl font-black text-ember/5 select-none leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.2)] mb-6 group-hover:shadow-[0_0_30px_oklch(0.69_0.21_45_/_0.35)] transition-shadow">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-ember transition-colors">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[oklch(0.68_0.015_45)]">
                    {strength.description}
                  </p>

                  <div className="mt-6 rounded-xl border border-ember/15 bg-ember/5 p-4">
                    <p className="text-xs font-medium italic text-[oklch(0.72_0.08_50)]">
                      &ldquo;{strength.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {strengthsData.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="flex items-center gap-3 rounded-2xl border border-ember/15 bg-ember/5 px-4 py-3"
              >
                <Icon className="h-5 w-5 text-ember shrink-0" />
                <span className="text-xs font-bold text-white">{s.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
