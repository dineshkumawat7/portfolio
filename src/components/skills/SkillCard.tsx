import { useEffect, useRef, useState } from "react";

export type SkillCategory =| "All" | "Backend" | "Frontend" | "DevOps" | "Cloud" | "Database" | "Testing" | "Other";
export type ProficiencyLevel = "Expert" | "Advanced" | "Intermediate";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  icon: string;
  yearsOfExperience: number;
  description: string;
  tags: string[];
}

const LEVEL_WIDTH = { Expert: "100%", Advanced: "72%", Intermediate: "45%" };
const LEVEL_COLOR = {
  Expert: "#6ee7b7",
  Advanced: "#a78bfa",
  Intermediate: "#fbbf24",
};

interface Props {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<Props> = ({ skill, index }) => {
  const [barWidth, setBarWidth] = useState("0%");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(
      () => setBarWidth(LEVEL_WIDTH[skill.proficiency]),
      60 + index * 38
    );
    return () => clearTimeout(t);
  }, [skill.proficiency, index]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col gap-3 p-5 border bg-gray-100 dark:bg-neutral-900 border-gray-300 dark:border-gray-300/30 
          overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:scale-102 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
      style={{ animationDelay: `${index * 38}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="text-5xl leading-none">{skill.icon}</span>
        <div className="flex flex-col items-end gap-1">
          <span className="font-bold text-[15px] tracking-widest uppercase">
            {skill.category}
          </span>
          <span
            className="font-mono text-[17px]"
            style={{ color: LEVEL_COLOR[skill.proficiency] }}
          >
            {skill.proficiency}
          </span>
        </div>
      </div>

      <h3 className="text-[25px] font-bold tracking-tight leading-tight">
        {skill.name}
      </h3>
      <p className="text-[16px] leading-relaxed flex-1 line-clamp-2">
        {skill.description}
      </p>

      <div className="flex items-center gap-2.5">
        <div className="flex-1 h-2 bg-white/6 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: barWidth,
              background: LEVEL_COLOR[skill.proficiency],
            }}
          />
        </div>
        <span className="font-mono text-[10px] whitespace-nowrap">
          {skill.yearsOfExperience}y
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-2 py-1 rounded-md transition-all duration-200
          bg-gray-200 text-gray-700 border border-gray-300
          dark:bg-white/5 dark:text-gray-300 dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
