import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query.trim());
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center border rounded-full px-3 py-1 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300"
        >
            <FiSearch className="text-gray-500 text-lg" />
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="ml-2 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-32 focus:w-44 transition-all duration-300"
            />
            <button
                type="submit"
                className="hidden"
                aria-label="submit search"
            ></button>
        </form>
    );
};

export default SearchBar;
