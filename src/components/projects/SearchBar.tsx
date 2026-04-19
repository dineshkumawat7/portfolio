interface SearchProps {
  value: string;
  onChange: (v: string) => void;
}

export const SearchBar: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mb-6 px-4 py-2 rounded-xl border dark:border-zinc-700 bg-white dark:bg-zinc-900"
    />
  );
};
