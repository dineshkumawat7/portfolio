import React from "react";

export type Experience = {
  company: string;
  role: string;
  location?: string;
  duration: string;
  status: "current" | "completed";
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
};

type Props = {
  data: Experience;
};

const ExperienceCard: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="bg-gray-100 dark:bg-neutral-900 backdrop-blur-md rounded-2xl p-5 transition-all duration-300 font-semibold
        ml-20 w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-300/30"
    >
      <h3 className="text-xl md:text-2xl font-bold">{data.company}({data.role})</h3>
      <p className="font-semibold mt-2">{data.duration}</p>
      {data.description && <p className="text-sm mt-3">{data.description}</p>}
      {data.responsibilities && (
        <ul className="list-disc list-inside mt-2 text-sm">
          {data.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {data.technologies && (
        <div className="mt-3 flex flex-wrap gap-2">
          {data.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[10px] font-medium px-2 py-1 rounded-md
                bg-gray-200 text-gray-700 border border-gray-300
                dark:bg-white/5 dark:text-gray-300 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
