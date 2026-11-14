import {
  GraduationCap,
  School,
  CheckCircle2,
  Calendar,
  MapPin,
  Award,
  Zap,
  BookOpen,
} from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20 bg-[oklch(0.11_0.028_41)]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-ember/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.15)] mb-4">
            <GraduationCap className="h-3.5 w-3.5" />
            Academic Qualifications
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Education &amp; <span className="text-ember">Background</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.75_0.015_50)]">
            A solid academic path combining practical engineering coursework in Electrical and
            Electronics Engineering with academic excellence in secondary schooling.
          </p>
        </div>

        {/* Stat Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl border border-ember/30 bg-gradient-to-br from-section-card to-section-bg p-6 shadow-[0_10px_30px_oklch(0_0_0_/_0.4)]">
            <span className="text-xs font-semibold uppercase tracking-wider text-ember block">
              Technical Education
            </span>
            <p className="mt-2 font-display text-2xl font-extrabold text-white">Diploma in EEE</p>
            <p className="text-xs text-[oklch(0.6_0.015_45)] mt-1">
              Government Polytechnic College, Pendurthi
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember/10 px-2.5 py-0.5 text-[11px] font-bold text-ember border border-ember/25">
              <Zap className="h-3 w-3" />
              <span>Status: Pursuing</span>
            </div>
          </div>

          <div className="rounded-2xl border border-ember/15 bg-section-card p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.6_0.015_45)] block">
              Secondary Education
            </span>
            <p className="mt-2 font-display text-2xl font-extrabold text-ember">86% Score</p>
            <p className="text-xs text-[oklch(0.6_0.015_45)] mt-1">
              GVMC High School, Madhavadhara
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember/8 border border-ember/15 px-2.5 py-0.5 text-[11px] font-bold text-[oklch(0.78_0.16_50)]">
              <CheckCircle2 className="h-3 w-3" />
              <span>SSC Completed</span>
            </div>
          </div>

          <div className="rounded-2xl border border-ember/15 bg-section-card p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.6_0.015_45)] block">
              Engineering Stream
            </span>
            <p className="mt-2 font-display text-2xl font-extrabold text-white">EEE</p>
            <p className="text-xs text-[oklch(0.6_0.015_45)] mt-1">
              Electrical &amp; Electronics Engineering
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ember/8 border border-ember/15 px-2.5 py-0.5 text-[11px] font-bold text-[oklch(0.78_0.16_50)]">
              <BookOpen className="h-3 w-3" />
              <span>Practical Lab Training</span>
            </div>
          </div>
        </div>

        {/* Detailed Cards */}
        <div className="space-y-6">
          {/* Diploma in EEE */}
          <div className="rounded-3xl border border-ember/25 bg-section-card p-8 sm:p-10 shadow-[0_15px_40px_oklch(0_0_0_/_0.4)]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ember/15 border border-ember/35 text-ember shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.25)]">
                  <GraduationCap className="h-7 w-7" />
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
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Diploma in Electrical and Electronics Engineering (EEE)
                  </h3>
                  <p className="mt-1 text-base font-semibold text-ember">
                    Government Polytechnic College, Pendurthi
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/20 px-4 py-2 text-xs text-[oklch(0.8_0.015_50)]">
                  <Calendar className="h-3.5 w-3.5 text-ember" />
                  <span>
                    Status: <strong className="text-ember font-bold">Pursuing</strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/20 px-4 py-2 text-xs text-[oklch(0.8_0.015_50)]">
                  <MapPin className="h-3.5 w-3.5 text-ember" />
                  <span>Pendurthi, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-ember/15 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)] mb-3">
                Focus Areas &amp; Coursework:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  "Industrial Electrical Safety",
                  "AC & DC Motor Basics",
                  "PLC Automation Basics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-ember/5 p-3 border border-ember/15"
                  >
                    <CheckCircle2 className="h-4 w-4 text-ember shrink-0" />
                    <span className="text-xs text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SSC */}
          <div className="rounded-3xl border border-ember/15 bg-section-bg p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ember/8 border border-ember/20 text-ember">
                  <School className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full bg-ember/10 border border-ember/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                      Secondary Education
                    </span>
                    <span className="rounded-full bg-ember/15 border border-ember/30 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-ember">
                      86% Aggregate
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="mt-1 text-base font-semibold text-[oklch(0.78_0.16_50)]">
                    GVMC High School, Madhavadhara
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/20 px-4 py-2 text-xs text-[oklch(0.8_0.015_50)]">
                  <Award className="h-3.5 w-3.5 text-ember" />
                  <span>
                    Performance: <strong className="text-ember font-bold">86%</strong>
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/20 px-4 py-2 text-xs text-[oklch(0.8_0.015_50)]">
                  <MapPin className="h-3.5 w-3.5 text-ember" />
                  <span>Madhavadhara, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-[oklch(0.65_0.015_45)] leading-relaxed border-t border-ember/10 pt-6">
              Completed SSC from GVMC High School, Madhavadhara with an 86% academic record,
              providing strong mathematical, scientific, and analytical grounding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
