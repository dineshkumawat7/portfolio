import { useState, useMemo } from "react";
import { skillsData } from "../data/skills";
import type { Skill, SkillCategory } from "../types/skills.types";

export type ActiveFilter = SkillCategory | "All";

export function useSkillsFilter() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("All");

  const filterOptions = useMemo(() => {
    const counts = skillsData.reduce((acc, s) => {
      acc[s.category] = (acc[s.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      { label: "All" as const, count: skillsData.length },
      ...Object.entries(counts).map(([label, count]) => ({
        label: label as SkillCategory,
        count,
      })),
    ];
  }, []);

  const filteredSkills: Skill[] = useMemo(
    () =>
      activeFilter === "All"
        ? skillsData
        : skillsData.filter((s) => s.category === activeFilter),
    [activeFilter]
  );

  return { activeFilter, setActiveFilter, filterOptions, filteredSkills };
}
