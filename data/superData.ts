import { SuperDataByUser } from "@/components/superDataProvider";

export const SUPER_DATA: SuperDataByUser = {
  anton: {
    usage: {
      caption: "Usage",
      insight: "Wow, you are a real power user. You rank at 0.98% of all users.",
      highlightedCharacters: [
        {
          start: 44, end: 49 // highlights "0.98%"
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
      insight: "Short narrative insight for the demo user.",
    },
    sources: {
      caption: "Demo Sources",
      insight: "You have used 32 different sources and your favorite is Hubspot",
      insertedImages: [
        {
          src: "/hubspot.svg",
          alt: "Hubspot",
          characterPosition: 56
        }
      ],
      highlightedCharacters: [
        {
          start: 14, end: 16
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
      insight: "You go deep on every source you touch.",
      image: "/archetypes/deepDiver.svg",
    },
    superPower: {
      caption: "Your Super Power",
      insight: "You harnessed assistants and digests for exceptional speed, saving 56 hours.",
      highlightedCharacters: [
        {
          start: 67, end: 69 // highlights "56"
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
      insight: "Wow, you are a real power user. You rank at 8.21% of all users.",
      highlightedCharacters: [
        {
          start: 44, end: 49 // highlights "0.98%"
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
      insight: "Consistent momentum across the year, with strong bursts in late summer and winter.",
    },
    sources: {
      caption: "Sources",
      insight: "You used 21 different sources and your favorite is Slack.",
      insertedImages: [
        {
          src: "/sources/slack.svg",
          alt: "Slack",
          characterPosition: 51,
        },
      ],
      highlightedCharacters: [
        {
          start: 9, end: 11,
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
      insight: "A pragmatic collaborator who blends research with action.",
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