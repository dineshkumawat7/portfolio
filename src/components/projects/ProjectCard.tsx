export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}


interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border bg-gray-100 dark:bg-neutral-900 border-gray-300 dark:border-gray-300/30
      shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out hover:scale-102"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transition duration-500"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-1 rounded-md transition-all duration-200
                      bg-gray-200 text-gray-700 border border-gray-300
                      dark:bg-white/5 dark:text-gray-300 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-700 dark:text-zinc-300 hover:underline"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
