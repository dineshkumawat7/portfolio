import type React from "react";

interface HeroStatCardProps {
  value: React.ReactNode;
  label: string;
}

export const HeroStatCard: React.FC<HeroStatCardProps> = ({ value, label }) => {
  return (
    <div className="relative group">
      {/* Glow Gradient */}
      <div
        className="
          absolute -inset-2 rounded-2xl blur-xl opacity-50
          bg-linear-to-r from-teal-100 via-blue-100 to-teal-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800
        "
      />
      <div
        className="
          relative overflow-hidden rounded-2xl py-5 text-center border border-violet-300/70 dark:border-white/10
          bg-linear-to-r from-gray-100 via-violet-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-950
          backdrop-blur-md transition-all duration-500 ease-in-out group-hover:scale-102 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {value}
        </h3>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
          {label}
        </p>
      </div>
    </div>
  );
};
