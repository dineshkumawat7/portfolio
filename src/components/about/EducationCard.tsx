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
      className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 backdrop-blur-md rounded-2xl 
      overflow-hidden border border-gray-300 dark:border-gray-300/30 transition-transform duration-300
      shadow-[0_0_15px_rgba(0,0,0,0.1)] text-gray-700 dark:text-gray-200 font-semibold"
    >
      {/* Image Section */}
      <div className="md:w-1/3 w-full h-48 md:h-auto">
        <img src={image} alt={degree} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center p-6 md:w-2/3 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold">{degree}</h2>

        <p className="mt-1 text-sm md:text-base">{university}</p>

        <p className="font-semibold mt-2">{duration}{" | "} {status}</p>

        {status && (
          <span className="mt-3 text-[10px] font-medium px-2 py-1 rounded-md
                bg-gray-200 text-gray-700 border border-gray-300
                dark:bg-white/5 dark:text-gray-300 dark:border-white/10 w-fit mx-auto md:mx-0">
        
            {result}
          </span>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
