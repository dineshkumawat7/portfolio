import Container from "../components/layout/Container";
import { FilterBar } from "../components/skills/FilterBar";
import { SkillGrid } from "../components/skills/SkillGrid";
import { useSkillsFilter } from "../hooks/useSkillsFilter";

const Skills = () => {
  const { activeFilter, setActiveFilter, filterOptions, filteredSkills } =
    useSkillsFilter();

  return (
    <section className="relative min-h-screen bg-white dark:bg-neutral-950">
      <Container className="py-10">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_55%_40%_at_15%_15%,rgba(110,231,183,0.07),transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent_60%)]"
        />

        <div className="relative z-10 mx-auto">
          <p className="font-medium text-[20px] tracking-[0.22em] uppercase text-teal-500 text-center mb-3">
            What I bring
          </p>
          <h1
            className="text-center font-extrabold tracking-tight text-[#5a5a78] dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Skills &amp;{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)" }}
            >
              Expertise
            </span>
          </h1>
          <p className="font-medium text-[20px] text-[#5a5a78] dark:text-gray-300 text-center mb-11 transition-colors duration-300">
            {filteredSkills.length} skill
            {filteredSkills.length !== 1 ? "s" : ""} across{" "}
            {activeFilter === "All" ? "all categories" : activeFilter}
          </p>
          <FilterBar
            options={filterOptions}
            active={activeFilter}
            onChange={setActiveFilter}
          />
          <div className="mt-10">
            <SkillGrid skills={filteredSkills} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
