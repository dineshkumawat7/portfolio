import type React from "react";

interface HeroStatCardProps {
  value: React.ReactNode;
  label: string;
}

export const HeroStatCard: React.FC<HeroStatCardProps> = ({ value, label }) => {
  return (
    <div className="relative group">
      <div
        className="
          relative overflow-hidden rounded-2xl py-5 text-center border border-gray-300/70 dark:border-white/25
          bg-gray-100 dark:bg-neutral-900
          backdrop-blur-md transition-all duration-500 ease-in-out group-hover:scale-102 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          {value}
        </h3>
        <p className="text-sm font-bold text-gray-400 dark:text-gray-400">
          {label}
        </p>
      </div>
    </div>
  );
};
