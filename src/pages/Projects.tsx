import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { SearchBar } from "../components/projects/SearchBar";
import { ProjectCard } from "../components/projects/ProjectCard";
import { FilterBar } from "../components/projects/FilterBar";
import Container from "../layouts/Container";
import SectionHeader from "../components/ui/SectionHeader";

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
        <SectionHeader
          title="My"
          highlight="Projects"
          description="Here are some of the projects I’ve worked on, showcasing my skills in building modern, scalable, and user-friendly applications."
        />
        <SearchBar value={search} onChange={setSearch} />

        <FilterBar
          filters={filters}
          active={activeFilter}
          setActive={setActiveFilter}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div>
                <ProjectCard project={project} />
              </div>
            ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center mt-10 text-zinc-500">No projects found.</p>
        )}
      </Container>
    </section>
  );
}
