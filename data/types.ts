
export type SuperSectionKey =
  | "usage"
  | "summary"
  | "sources"
  | "archetype"
  | "superPower";

export type SuperSectionBase = {
  title: string;
  summary: string;
  highlights: string[];
};

export type SuperUsageSection = SuperSectionBase & {
  metrics: Record<string, number>;
};

export type SuperSourcesSection = {
  title: string;
  sources: Array<{
    name: string;
    url?: string;
    note?: string;
  }>;
};

export type SuperArchetypeSection = SuperSectionBase & {
  traits: string[];
};

export type SuperPowerSection = SuperSectionBase & {
  evidence: string[];
};

// Required sections per user; used to guide data generation.
export type SuperUserData = {
  usage: SuperUsageSection;
  summary: SuperSectionBase;
  sources: SuperSourcesSection;
  archetype: SuperArchetypeSection;
  superPower: SuperPowerSection;
};