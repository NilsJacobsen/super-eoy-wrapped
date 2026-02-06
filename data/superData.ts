import { SuperDataByUser } from "@/components/superDataProvider";

export const SUPER_DATA: SuperDataByUser = {
  anton: {
    usage: {
      caption: "Usage",
      insight: "Top 0.98% this year: 13,841 searches and 291 assistant runs.",
      highlightedCharacters: [
        {
          start: 4, end: 9 // highlights "0.98%"
        },
        {
          start: 21, end: 27 // highlights "13,841"
        },
        {
          start: 41, end: 44 // highlights "291"
        },
      ],
      metrics: [
        {
          name: "search",
          value: 13841,
          trend: "Top 0.3%",
          description: "Search retrievals",
        },
        {
          name: "assistant",
          value: 291,
          trend: "Top 3.2%",
          description: "Assistant runs",
        },
        {
          name: "digest",
          value: 12,
          trend: "Top 21%",
          description: "Digests",
        },
      ],
      chartData: [
        {
          month: "January",
          lastYear: 700,
          thisYear: 900,
        },
        {
          month: "February",
          lastYear: 500,
          thisYear: 700,
        },
        {
          month: "March",
          lastYear: 800,
          thisYear: 1000,
        },
        {
          month: "April",
          lastYear: 600,
          thisYear: 800,
        },
        {
          month: "May",
          lastYear: 850,
          thisYear: 1100,
        },
        {
          month: "June",
          lastYear: 900,
          thisYear: 1300,
        },
        {
          month: "July",
          lastYear: 650,
          thisYear: 900,
        },
        {
          month: "August",
          lastYear: 1000,
          thisYear: 1500,
        },
        {
          month: "September",
          lastYear: 750,
          thisYear: 1000,
        },
        {
          month: "October",
          lastYear: 850,
          thisYear: 1100,
        },
        {
          month: "November",
          lastYear: 1200,
          thisYear: 1700,
        },
        {
          month: "December",
          lastYear: 500,
          thisYear: 1100,
        },
      ],
    },
    summary: {
      caption: "Demo insight",
      insight: "August spiked: 1,500 actions, then November hit 1,700.",
      highlightedCharacters: [
        {
          start: 15, end: 20 // highlights "1,500"
        },
        {
          start: 48, end: 53 // highlights "1,700"
        },
      ],
    },
    sources: {
      caption: "Demo Sources",
      insight: "32 sources explored; Hubspot led the pack at 52% of lookups.",
      insertedImages: [
        {
          src: "/hubspot.svg",
          alt: "Hubspot",
          characterPosition: 21
        }
      ],
      highlightedCharacters: [
        {
          start: 0, end: 2
        },
        {
          start: 45, end: 48
        },
      ],
      sources: [
        {
          name: "Hubspot",
          image: "/sources/hubspot.svg",
          percentage: 52,
        },
        {
          name: "GitHub",
          image: "/sources/github.svg",
          percentage: 21,
        },
        {
          name: "Slack",
          image: "/sources/slack.svg",
          percentage: 19,
        },
        {
          name: "Linear",
          image: "/sources/linear.svg",
          percentage: 5,
        }
      ],
    },
    archetype: {
      caption: "Archetype",
      insight: "Deep Diver: you chase context before answers, not just quick hits.",
      image: "/archetypes/deepDiver.svg",
    },
    superPower: {
      caption: "Your Super Power",
      insight: "Assistants and digests saved an estimated 56 hours this year.",
      highlightedCharacters: [
        {
          start: 42, end: 44 // highlights "56"
        },
      ],
      assistants: [
        {
          name: "Generate demo follow-up emails",
          runs: 52,
        },
        {
          name: "Sales RFP form generator",
          runs: 43,
        }
      ],
    },
  },
  carla: {
    usage: {
      caption: "Usage",
      insight: "Top 8.21%: 10,124 searches and 198 assistant runs.",
      highlightedCharacters: [
        {
          start: 4, end: 9 // highlights "8.21%"
        },
        {
          start: 11, end: 17 // highlights "10,124"
        },
        {
          start: 31, end: 34 // highlights "198"
        },
      ],
      metrics: [
        {
          name: "search",
          value: 10124,
          trend: "Top 1.4%",
          description: "Search retrievals",
        },
        {
          name: "assistant",
          value: 198,
          trend: "Top 6.5%",
          description: "Assistant runs",
        },
        {
          name: "digest",
          value: 8,
          trend: "Top 28%",
          description: "Digests",
        },
      ],
      chartData: [
        { month: "January", lastYear: 520, thisYear: 760 },
        { month: "February", lastYear: 420, thisYear: 620 },
        { month: "March", lastYear: 600, thisYear: 780 },
        { month: "April", lastYear: 460, thisYear: 640 },
        { month: "May", lastYear: 620, thisYear: 860 },
        { month: "June", lastYear: 680, thisYear: 980 },
        { month: "July", lastYear: 480, thisYear: 700 },
        { month: "August", lastYear: 740, thisYear: 1060 },
        { month: "September", lastYear: 540, thisYear: 760 },
        { month: "October", lastYear: 610, thisYear: 840 },
        { month: "November", lastYear: 820, thisYear: 1180 },
        { month: "December", lastYear: 420, thisYear: 920 },
      ],
    },
    summary: {
      caption: "Summary",
      insight: "Late summer surge: August peaked at 1,060, then eased into winter.",
      highlightedCharacters: [
        {
          start: 36, end: 41 // highlights "1,060"
        },
      ],
    },
    sources: {
      caption: "Sources",
      insight: "21 sources total; Slack dominates with 65% of lookups.",
      insertedImages: [
        {
          src: "/sources/slack.svg",
          alt: "Slack",
          characterPosition: 18,
        },
      ],
      highlightedCharacters: [
        {
          start: 0, end: 2,
        },
        {
          start: 39, end: 42,
        },
      ],
      sources: [
        {
          name: "Slack",
          image: "/sources/slack.svg",
          percentage: 65,
        },
        {
          name: "GitHub",
          image: "/sources/github.svg",
          percentage: 4,
        },
        {
          name: "Hubspot",
          image: "/sources/hubspot.svg",
          percentage: 2,
        },
        {
          name: "Linear",
          image: "/sources/linear.svg",
          percentage: 2,
        }
      ],
    },
    archetype: {
      caption: "Archetype",
      insight: "Orchestrator: you align people fast and keep projects moving.",
      image: "/archetypes/orchestrator.svg",
    },
    superPower: {
      caption: "Your Super Power",
      insight: "You turn scattered inputs into clear next steps, saving 28 hours.",
      highlightedCharacters: [
        {
          start: 56, end: 58,
        },
      ],
      assistants: [
        {
          name: "Align cross-team projects",
          runs: 43,
        },
        {
          name: "HR application form generator",
          runs: 12,
        }
      ],
    },
  },
};