import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHero } from "@/components/hero/PortfolioHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aria Vance — UI/UX & Product Designer Portfolio" },
      {
        name: "description",
        content:
          "Aria Vance designs calm, purposeful digital products for ambitious brands. Available for new projects.",
      },
      { property: "og:title", content: "Aria Vance — UI/UX & Product Designer Portfolio" },
      {
        property: "og:description",
        content: "Calm, purposeful digital products for ambitious brands.",
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
