import { useCommand } from "./Command";
import { useTheme } from "../../../context/ThemeContext";

function CommandItem({ children, value }) {
  const { search } = useCommand();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!value.toLowerCase().includes(search.toLowerCase())) {
    return null;
  }

  return (
    <div
      className="px-4 py-2.5 cursor-pointer transition-colors duration-150 text-sm flex items-center gap-2"
      style={{
        color: isDark ? "#d1d5db" : "#374151",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isDark
          ? "rgba(255,255,255,0.1)"
          : "#f3f4f6";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <span className="text-pink-500">✦</span>
      {children}
    </div>
  );
}

export default CommandItem;
