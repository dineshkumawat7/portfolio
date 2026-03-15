import type React from "react";

interface HeroStatCardProps {
  value: React.ReactNode;
  label: string;
}

export const HeroStatCard: React.FC<HeroStatCardProps> = ({ value, label }) => {
  return (
    <div className="bg-gray-300 text-center py-4 rounded-sm shadow-lg flex flex-col items-center gap-1">
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};
