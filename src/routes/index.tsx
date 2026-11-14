import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHero } from "@/components/hero/PortfolioHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { BottomNavBar } from "@/components/ui/bottom-nav-bar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CH Madhusudhan — Electrical & Electronics Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of CH Madhusudhan. Diploma in EEE (Pursuing) at Government Polytechnic College, Pendurthi. SSC 86%. Technical Skills: Electrical Safety, Motor Basics, PLC Basics.",
      },
      { property: "og:title", content: "CH Madhusudhan — EEE Student Portfolio" },
      {
        property: "og:description",
        content:
          "Career Objective: To gain practical experience and improve my skills in the electrical field.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-section-bg text-[oklch(0.985_0.012_75)] selection:bg-ember/30 selection:text-white">
      <PortfolioHero />
      <div className="relative z-20">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <StrengthsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Floating Pill Navigation Bar (Hidden in top half of hero, smoothly slides down to top-center after 50% scroll) */}
      <BottomNavBar position="top-center" autoHideAtTop thresholdRatio={0.5} />
    </div>
  );
}
