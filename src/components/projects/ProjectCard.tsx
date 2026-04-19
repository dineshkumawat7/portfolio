import { motion } from "framer-motion";
import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-zinc-900 transition"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
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
              className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"
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
    </motion.div>
  );
};
