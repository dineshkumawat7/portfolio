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
      className="bg-linear-to-r from-slate-800/80 to-slate-600/60 backdrop-blur-md text-black 
    rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 ml-20 w-full"
    >
      {/* Role */}
      <h3 className="text-xl md:text-2xl font-bold text-white">{data.role}</h3>

      {/* Company */}
      <p className="text-gray-200 mt-1 text-sm md:text-base">{data.company}</p>

      {/* Duration */}
      <p className="text-white font-semibold mt-2">{data.duration}</p>

      {/* Status Badge */}
      <span
        className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
          data.status === "current"
            ? "bg-green-200 text-green-800"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {data.status === "current" ? "Present" : "Completed"}
      </span>

      {/* Description */}
      {data.description && <p className="text-sm mt-3 text-gray-200">{data.description}</p>}

      {/* Responsibilities */}
      {data.responsibilities && (
        <ul className="list-disc list-inside mt-2 text-sm text-gray-200">
          {data.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {data.technologies && (
        <div className="mt-3 flex flex-wrap gap-2">
          {data.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white text-xs px-2 py-1 rounded-md shadow-sm"
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
