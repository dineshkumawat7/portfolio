import { useTheme } from "../../hooks/useTheme";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color mode"
      title="Dark/Light Mode"
      onClick={toggleTheme}
      className="bg-transparent border-none cursor-pointer dark:text-white text-black p-0"
    >
      {isDark ? <MdWbSunny /> : <FaMoon />}
    </button>
  );
}
