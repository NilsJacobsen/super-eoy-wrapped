
export type SuperSectionKey =
  | "usage"
  | "summary"
  | "sources"
  | "archetype"
  | "superPower";

export type SuperSectionBase = {
  insight: string;
  caption: string;
  highlightedCharacters?: Array<{
    start: number;
    end: number;
  }>;
  insertedImages?: Array<{
    src: string;
    alt: string;
    characterPosition: number;
  }>;
};

export type SuperUsageSection = SuperSectionBase & {
  metrics: Array<{
    name: "search" | "assistant" | "digest";
    value: number;
    trend: string;
    description: string;
  }>,
  chartData: Array<{
    month: string;
    lastYear: number;
    thisYear: number;
  }>;
};

export type SuperSourcesSection = SuperSectionBase & {
  sources: Array<{
    name: string;
    image: string;
    percentage: number;
  }>;
};

export type SuperArchetypeSection = SuperSectionBase & {
  image: string;
};

export type SuperPowerSection = SuperSectionBase & {
  assistants: Array<{
    name: string;
    runs: number;
  }>;
};

export type SuperUserSelection = {
  username: string;
  color: string;
};

// Required sections per user; used to guide data generation.
export type SuperUserData = {
  usage: SuperUsageSection;
  summary: SuperSectionBase;
  sources: SuperSourcesSection;
  archetype: SuperArchetypeSection;
  superPower: SuperPowerSection;
};