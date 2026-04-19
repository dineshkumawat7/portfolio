export type SkillCategory =
  | "All"
  | "Backend"
  | "Frontend"
  | "DevOps"
  | "Cloud"
  | "Database"
  | "Testing"
  | "Other";

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
