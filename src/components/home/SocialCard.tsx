import type React from "react";

interface SocialCardProps {
  icon: React.ElementType;
  label?: string;
}

export const SocialCard: React.FC<SocialCardProps> = ({
  icon: Icon,
  label,
}) => {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative group p-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10
        transition-all duration-800 grid place-items-center hover:scale-105 cursor-pointer"
    >
      <Icon className="h-10 w-10 text-white transition-transform duration-800 group-hover:scale-110" />
    </button>
  );
};
