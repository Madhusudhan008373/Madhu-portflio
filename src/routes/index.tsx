import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHero } from "@/components/hero/PortfolioHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhusudhan — UI/UX Designer Portfolio" },
      {
        name: "description",
        content:
          "Madhusudhan designs digital experiences that inspire and connect. Available for freelance projects.",
      },
      { property: "og:title", content: "Madhusudhan — UI/UX Designer Portfolio" },
      {
        property: "og:description",
        content: "Designs that inspire. Ideas that connect.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioHero />;
}
