import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { SearchBar } from "../components/projects/SearchBar";
import { ProjectCard } from "../components/projects/ProjectCard";
import { FilterBar } from "../components/projects/FilterBar";
import Container from "../components/layout/Container";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = useMemo(() => {
    const allTech = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t: string) => allTech.add(t)));
    return ["All", ...Array.from(allTech)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.techStack.includes(activeFilter);

      const matchesSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div
            className="pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_55%_40%_at_15%_15%,rgba(110,231,183,0.07),transparent_60%),radial-gradient(ellipse_50%_50%_at_85%_75%,rgba(139,92,246,0.07),transparent_60%)]"
          />
          <h1
            className="text-center font-extrabold tracking-tight text-[#5a5a78] dark:text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            My{" "}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px oklch(70.4% 0.14 182.503)" }}
            >
              Projects
            </span>
          </h1>
          <p className="font-medium text-[20px] text-[#5a5a78] dark:text-gray-300 text-center mb-11 transition-colors duration-300 max-w-3xl mx-auto">
            Here are some of the projects I’ve worked on, showcasing my skills
            in building modern, scalable, and user-friendly applications.
          </p>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        <FilterBar
          filters={filters}
          active={activeFilter}
          setActive={setActiveFilter}
        />

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center mt-10 text-zinc-500">No projects found.</p>
        )}
      </Container>
    </section>
  );
}
