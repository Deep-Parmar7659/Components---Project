import { useCommand } from "./Command";
import { useTheme } from "../../../context/ThemeContext";

function CommandInput() {
  const { search, setSearch } = useCommand();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <input
      type="text"
      placeholder="Search components..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-3 outline-none text-sm"
      style={{
        background: isDark ? "#111827" : "#ffffff",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid #e5e7eb",
        color: isDark ? "#ffffff" : "#111827",
      }}
    />
  );
}

export default CommandInput;
