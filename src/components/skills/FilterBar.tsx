import clsx from "clsx";
import React from "react";
import type { ActiveFilter } from "../../hooks/useSkillsFilter";

interface Props {
  options: { label: string; count: number }[];
  active: ActiveFilter;
  onChange: (v: ActiveFilter) => void;
}

export const FilterBar: React.FC<Props> = ({ active, onChange, options }) => {
  return (
    <div className="w-full bg-transparent">
      <div
        className="w-full rounded-2xl bg-gray-100 dark:bg-[#0f172a]/80 backdrop-blur-md border border-gray-300 
      dark:border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-1"
      >
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex w-max gap-2">
            {options.map((option) => {
              const isActive = active === option.label;
              return (
                <button
                  key={option.label}
                  onClick={() => onChange(option.label as ActiveFilter)}
                  className={clsx(
                    "px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300",
                    "hover:bg-teal-500 hover:text-white",
                    {
                      "bg-teal-500 text-white shadow": isActive,
                      "text-black dark:text-white": !isActive,
                    }
                  )}
                >
                  {option.label} ({option.count})
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
