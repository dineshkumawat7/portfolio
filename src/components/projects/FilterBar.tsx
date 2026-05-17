interface FilterBarProps {
  filters: string[];
  active: string;
  setActive: (value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  active,
  setActive,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-4 py-1.5 rounded-full text-sm transition ${
            active === filter
              ? "bg-teal-500 text-white"
              : "bg-gray-100 dark:bg-zinc-800 hover:bg-teal-500"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
