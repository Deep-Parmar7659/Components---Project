import { useTheme } from "../../../context/ThemeContext";

function CommandList({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="max-h-60 overflow-y-auto"
      style={{
        background: isDark ? "#111827" : "#ffffff",
      }}
    >
      {children}
    </div>
  );
}

export default CommandList;
