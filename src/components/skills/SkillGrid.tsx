import { SkillCard, type Skill } from "./SkillCard";

type GridProps = {
  skills: Skill[];
};

export const SkillGrid: React.FC<GridProps> = ({ skills }) => {
  return skills.length === 0 ? (
    <p className="font-mono text-[13px] text-[#3e3e58] text-center py-16">
      No skills found.
    </p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.id} skill={skill} index={index} />
      ))}
    </div>
  );
};
