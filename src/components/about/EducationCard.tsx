import React from "react";

type EducationCardProps = {
  image: string;
  degree: string;
  university: string;
  duration: string;
  status: string;
  result: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  image,
  degree,
  university,
  duration,
  status,
  result
}) => {
  return (
    <div
      className="flex flex-col md:flex-row bg-linear-to-r from-slate-800/80 to-slate-600/60 backdrop-blur-md 
    rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-transform duration-300"
    >
      {/* Image Section */}
      <div className="md:w-1/3 w-full h-48 md:h-auto">
        <img src={image} alt={degree} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center p-6 md:w-2/3 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-white">{degree}</h2>

        <p className="text-gray-200 mt-1 text-sm md:text-base">{university}</p>

        <p className="text-white font-semibold mt-2">{duration}{" | "} {status}</p>

        {status && (
          <span className="mt-3 inline-block text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300 w-fit mx-auto md:mx-0">
            {result}
          </span>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
