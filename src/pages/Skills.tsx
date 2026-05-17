import Container from "../layouts/Container";
import { FilterBar } from "../components/skills/FilterBar";
import { useSkillsFilter } from "../hooks/useSkillsFilter";
import SectionHeader from "../components/ui/SectionHeader";
import { SkillCard } from "../components/skills/SkillCard";

const Skills = () => {
  const { activeFilter, setActiveFilter, filterOptions, filteredSkills } =
    useSkillsFilter();

  return (
    <section className="relative min-h-screen bg-white dark:bg-neutral-950">
      <Container className="py-10">
        <SectionHeader
          title="Skills &amp;"
          highlight="Expertise"
          description="Combining creativity, clean code, and modern technologies to build seamless digital experiences."
        />

        <div className="relative z-10 mx-auto">
          <FilterBar
            options={filterOptions}
            active={activeFilter}
            onChange={setActiveFilter}
          />
          <div className="mt-10">
            {filteredSkills.length === 0 ? (
              <p className="font-semibold text-4xl text-center py-10">
                No skills found.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
