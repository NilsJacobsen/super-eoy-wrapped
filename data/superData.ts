import { SuperDataByUser } from "@/components/superDataProvider";

export const SUPER_DATA: SuperDataByUser = {
  demo: {
    usage: {
      title: "Demo Usage",
      summary: "A quick snapshot of how this demo account is used.",
      highlights: ["High engagement", "Consistent weekly activity"],
      metrics: {
        total: 42,
        weeklyActive: 7,
      },
    },
    summary: {
      title: "Demo Summary",
      summary: "Short narrative summary for the demo user.",
      highlights: ["Fast", "Flexible"],
    },
    sources: {
      title: "Demo Sources",
      sources: [
        {
          name: "Internal Analytics",
          note: "Aggregated usage logs",
        },
      ],
    },
    archetype: {
      title: "Demo Archetype",
      summary: "A balanced creator who values clarity and speed.",
      highlights: ["Curious", "Pragmatic"],
      traits: ["Builder", "Optimizer"],
    },
    superPower: {
      title: "Demo Super Power",
      summary: "Turns fuzzy ideas into crisp, shippable concepts.",
      highlights: ["Clear thinking", "Speed to execution"],
      evidence: ["Shipped 3 projects in a month"],
    },
  },
};